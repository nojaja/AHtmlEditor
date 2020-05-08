"use strict";
import * as monaco from 'monaco-editor'

var editor = null;
var data = {
  source: {
    model: null,
    state: null
  },
  dom: {
    model: null,
    state: null
  },
  component: {
    model: null,
    state: null
  },
  app: {
    model: null,
    state: null
  },
  html: {
    model: null,
    state: null
  }
};

/* タブ切り替え処理 */
function changeTab(editor, desiredModelId) {
  let currentState = editor.saveViewState();
  let currentModel = editor.getModel();

  for (let key in data) {
    if (currentModel === data[key].model) {
      data[key].state = currentState;
    }
  }

  editor.setModel(data[desiredModelId].model);
  editor.restoreViewState(data[desiredModelId].state);
  editor.focus();
}

$("#edittab > li").on("click", (event) => {
  //タブの切替
  changeTab(editor, $(event.currentTarget).attr("id"));
});

// iframe内のコンテンツを更新
function changeSrc(url, cb) {
    // iframe内のコンテンツを更新
  $("#child-frame").attr("srcdoc", "");
  //$("#child-frame").attr("src", "./blank.html");
  var frame = document.getElementById("child-frame");
  frame.onload = function(){};

  if(!url){
    var doc = localDraft();
    if (doc){
      data.source.model.setValue(localDraft());
      //$("#child-frame").attr("src", "./blank.html");
      return (cb)? cb() : true;
    }else{
      url = $("#test5").attr("data-url");
    }
  }
  $.ajax({
    url: url,
    dataType: "html"
  }).done(function (d) {
    //editor.setValue(d);
    data.source.model.setValue(d);
      return (cb)? cb() : true;
  });
}

function saveDraft (source) {
  // ローカルストレージに最新の状態を保存

  const name = 'draft'+location.pathname.replace(/\//g, '.');
  localStorage.setItem(name, JSON.stringify(source));
  console.log("draft:" + JSON.stringify(source));
  $.UIkit.notify("save..", {status:'success',timeout : 1000});
}

function localDraft () {
  // ページが読み込まれたら、ローカルストレージから状態を読み込む
  const name = 'draft'+location.pathname.replace(/\//g, '.');
  const source = JSON.parse(localStorage.getItem(name)) || null;
  console.log("source:" + JSON.stringify(source));
  return source;
}

var htmlparser = Tautologistics.NodeHtmlParser;

var parseHtml = function (rawHtml) {
  return htmlparser.parseDOM(rawHtml, {
    enforceEmptyTags: true,
    ignoreWhitespace: true,
    caseSensitiveTags: true,
    caseSensitiveAttr: true,
    verbose: false
  });
};
class DebugBuilder extends Builder {
  beforeCompile(src) {
    console.log("DebugBuilder", stringify(src));
  }
  beforeCreateNodes(src) {
    console.log("DebugBuilder-createNodes", stringify(src));
  }
  beforeCreateTagElement(src) {
    console.log("DebugBuilder-beforeCreateTagElement", stringify(src));
  }
}

var arg = new Object();
var pair = location.search.substring(1).split("&");
for (var i = 0; pair[i]; i++) {
  var kv = pair[i].split("=");
  arg[kv[0]] = kv[1];
}

const editorContainer = document.getElementById("container");

//View///////////////////////////////////////////////////
$(document).ready(() => {
  data.source.model = monaco.editor.createModel("", "html");
  data.dom.model = monaco.editor.createModel("", "json");
  data.component.model = monaco.editor.createModel("", "javascript");
  data.app.model = monaco.editor.createModel("", "javascript");
  data.html.model = monaco.editor.createModel("html", "html");

  editor = monaco.editor.create(editorContainer, {
    automaticLayout: true,
    model: data.source.model
  });
  let url = arg["q"] ? arg["q"] : "";
  changeSrc(url, function () {
    compile();
  });

  function compile () {
    let webComponentParser = new WebComponentParser({
      builder: ReactComponentBuilder
    });

    let reactRootParser = new ReactRootComponentBuilder({
      builder: ReactComponentBuilder
    });

    let builder = new HtmlBuilder({});
    //let builder2 = new HtmlBuilder({});
    let debugBuilder = new DebugBuilder({});
    let cssbuilder = new CSSBuilder({});
    let reactComponentBuilder = new ReactComponentBuilder({});
    let compiler1 = new Compiler(
      [cssbuilder, webComponentParser, reactRootParser],
      {}
    );
    var compiler2 = new Compiler([builder], {});
    //var compiler3 = new Compiler([builder2], {});

    //-ここからDemo用処理----------------------------------
    let parseData = parseHtml(data.source.model.getValue().trim());
    data.dom.model.setValue(stringify(parseData));
    compiler1.compile(parseData); //jsonオブジェクトを各種コードに変換します

    //editor4.setValue(cssbuilder.getNodes());

    webComponentParser.build(); //react化処理の実行
    //変換されたコードはwindowに読み込まれ実行可能になります。
    reactRootParser.build(); //react化処理の実行
    //変換されたコードはwindowに読み込まれ実行可能になります。
    data.component.model.setValue(webComponentParser.getResult());
    data.app.model.setValue(reactRootParser.getResult());

    let bodyElements = parseData.getElementsByTagName("body");
    if (parseData.getElementsByTagName("head").length == 0) {
      let $html = parseData.getElementsByTagName("html");
      let newElement = $html[0].createElement("head");
      $html[0].insertBefore(newElement, bodyElements[0]);
    }
    let headElements = parseData.getElementsByTagName("head");
    headElements.forEach(function (headElement) {
      //head配下に追加
      let addpoint = headElement.getElementsByTagName("script")[0];
      {
        let newElement = headElement.createElement("script");
        let child = newElement.createTextNode(reactRootParser.getResult()+"\n//# sourceURL=app.js");
        newElement.appendChild(child);
        headElement.insertBefore(newElement, addpoint);
        addpoint = newElement;
      }
      {
        let newElement = headElement.createElement("script");
        let child = newElement.createTextNode(webComponentParser.getResult()+"\n//# sourceURL=Component.js");
        newElement.appendChild(child);
        headElement.insertBefore(newElement, addpoint);
        addpoint = newElement;
      }
      {
        let newElement = headElement.createElement("script");
        newElement.attributes = {
          src: [
            {
              type: "text",
              data: "https://fb.me/react-dom-15.1.0.js"
            }
          ]
        };
        headElement.insertBefore(newElement, addpoint);
        addpoint = newElement;
      }
      {
        let newElement = headElement.createElement("script");
        newElement.attributes = {
          src: [
            {
              type: "text",
              data: "https://fb.me/react-15.1.0.js"
            }
          ]
        };
        headElement.insertBefore(newElement, addpoint);
        addpoint = newElement;
      }
      {
        let newElement = headElement.createElement("script");
        newElement.attributes = {
          src: [
            {
              type: "text",
              data:
                "//cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js"
            }
          ]
        };
        headElement.insertBefore(newElement, addpoint);
        addpoint = newElement;
      }
    }, this);

    bodyElements.forEach(function (bodyElement) {
      {
        let newElement = bodyElement.createElement("script");
        let child = newElement.createTextNode(`
 var render = function render() {
  ReactDOM.render(
    React.createElement(App, null),
    document.querySelector("#app")
  );
};

$(function () {
  /* render initial component */
  render();
});
`);
        newElement.appendChild(child);
        bodyElement.appendChild(newElement);
      }
    }, this);
    compiler2.compile(parseData.children); //jsonオブジェクトを各種コードに変換します
    //compiler3.compile(bodyElements[0].children); //jsonオブジェクトを各種コードに変換します
    data.html.model.setValue(builder.getNodes());
    // iframe内のコンテンツのdocumentオブジェクト追加
    //$("#child-frame").attr("srcdoc", builder.getNodes());

/*
    var iframehead = document.getElementById("child-frame").contentDocument.head;
    {
    var newElement = document.createElement("script");
        newElement.type = "text/javascript";
        newElement.innerHTML  = reactRootParser.getResult();
        iframehead.appendChild(newElement);
    }
    {
    var newElement = document.createElement("script");
        newElement.type = "text/javascript";
        newElement.innerHTML  = webComponentParser.getResult();
        iframehead.appendChild(newElement);
    }
    //document.getElementById("child-frame").contentDocument.body.innerHTML = builder2.getNodes();
*/
//document.getElementById("child-frame").contentDocument.innerHTML = builder.getNodes();

    // iframe内のコンテンツを更新
    $("#child-frame").attr("srcdoc", "");
    //$("#child-frame").attr("src", "./blank.html");
    var frame = document.getElementById("child-frame");
    frame.src = "./blank.html";
    frame.onload = function(){
      frame.onload=function(){};
      frame.contentDocument.open();
      frame.contentDocument.write(builder.getNodes());
      frame.contentDocument.close();
      $.UIkit.notify("compile..", {status:'success',timeout : 1000});
    }
  }

  $("#run").on("click", (event) => {
    compile();
  });

  $(".samples").on("click", (event) => {
    changeSrc($(event.currentTarget).attr("data-url"),() => {
      $.UIkit.notify("load..", {status:'success',timeout : 1000});
    });
  });
  
  $(window).keydown( (e) => {
    if(e.keyCode === 120){
        compile();
        return false;
      }
    if(e.ctrlKey){
      if(e.keyCode === 83){
        saveDraft(data.source.model.getValue());
        return false;
      }
    }
  });
});

function stringify(str) {
  var cache = [];
  return JSON.stringify(
    str,
    function (key, value) {
      if (typeof value === "object" && value !== null) {
        if (cache.indexOf(value) !== -1) {
          // Circular reference found, discard key
          return;
        }
        // Store value in our collection
        cache.push(value);
      }
      if (key == "parentNode") return;
      return value;
    },
    "\t"
  );
}