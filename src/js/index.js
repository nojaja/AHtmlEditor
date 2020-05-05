"use strict";
import * as monaco from 'monaco-editor'
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

//View///////////////////////////////////////////////////
$(function () {
    var editor = monaco.editor.create(document.getElementById("container"), {
      automaticLayout: true,
      language: "html"
    });

    var input = document.getElementById("input").innerHTML.trim();
    input = input.replace(/&gl;/g, "<").replace(/&gt;/g, ">");
    editor.setValue(input);
    $("#targeturl").change(function () {
      $.ajax({
        url: $("#targeturl").val(),
        dataType: "html"
      }).done(function (d) {
        editor.setValue(d);
      });
    });

    var editor2 = monaco.editor.create(document.getElementById("container2"), {
      automaticLayout: true,
      language: "json"
    });
    var editor3 = monaco.editor.create(document.getElementById("container3"), {
      automaticLayout: true,
      language: "html"
    });
    var editor4 = monaco.editor.create(document.getElementById("container4"), {
      automaticLayout: true,
      language: "css"
    });
    var editor5 = monaco.editor.create(document.getElementById("container5"), {
      automaticLayout: true,
      language: "javascript"
    });
    var editor6 = monaco.editor.create(document.getElementById("container6"), {
      automaticLayout: true,
      language: "javascript"
    });
    var myBinding = editor.addCommand(monaco.KeyCode.F9, function () {
      var webComponentParser = new WebComponentParser({
        builder: ReactComponentBuilder
      });

      var reactRootParser = new ReactRootComponentBuilder({
        builder: ReactComponentBuilder
      });

      var builder = new HtmlBuilder({});
      var debugBuilder = new DebugBuilder({});
      var cssbuilder = new CSSBuilder({});
      var reactComponentBuilder = new ReactComponentBuilder({});
      var compiler1 = new Compiler(
        [cssbuilder, webComponentParser, reactRootParser],
        {}
      );
      var compiler2 = new Compiler([builder], {});

      //-ここからDemo用処理----------------------------------
      var parseData = parseHtml(editor.getValue().trim());
      //parseData =(parseData.getElementsByTagName('body').length>0)?parseData.getElementsByTagName('body')[0].children:parseData;
      compiler1.compile(parseData); //jsonオブジェクトを各種コードに変換します

      editor2.setValue(stringify(parseData));
      console.log(stringify(builder.getNodes()));
      editor4.setValue(cssbuilder.getNodes());

      webComponentParser.build(); //react化処理の実行
      //変換されたコードはwindowに読み込まれ実行可能になります。
      reactRootParser.build(); //react化処理の実行
      //変換されたコードはwindowに読み込まれ実行可能になります。
      editor5.setValue(webComponentParser.getResult());
      editor6.setValue(reactRootParser.getResult());

      var bodyElements = parseData.getElementsByTagName("body");
      if (parseData.getElementsByTagName("head").length == 0) {
        var $html = parseData.getElementsByTagName("html");
        var newElement = $html[0].createElement("head");
        $html[0].insertBefore(newElement, bodyElements[0]);
      }

      //parseData =(parseData.getElementsByTagName('body').length>0)?parseData.getElementsByTagName('body')[0].children:parseData;
      var headElements = parseData.getElementsByTagName("head");
      headElements.forEach(function (headElement) {
        //head配下に追加
        var addpoint = headElement.getElementsByTagName("script")[0];

        {
          var newElement = headElement.createElement("script");
          var child = newElement.createTextNode(reactRootParser.getResult());
          newElement.appendChild(child);
          headElement.insertBefore(newElement, addpoint);
          addpoint = newElement;
        }
        {
          var newElement = headElement.createElement("script");
          var child = newElement.createTextNode(webComponentParser.getResult());
          newElement.appendChild(child);
          headElement.insertBefore(newElement, addpoint);
          addpoint = newElement;
        }
        {
          var newElement = headElement.createElement("script");
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
          var newElement = headElement.createElement("script");
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
          var newElement = headElement.createElement("script");
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
          var newElement = bodyElement.createElement("script");
          var child = newElement.createTextNode(`
 var render = function render() {
  ReactDOM.render(
    React.createElement(App, null),
    document.querySelector("#app")
  );
};

$(function() {
  /* render initial component */
  render();
});
`);
          newElement.appendChild(child);
          bodyElement.appendChild(newElement);
        }
      }, this);

      //parseData =(parseData.getElementsByTagName('body').length>0)?parseData.getElementsByTagName('body')[0].children:parseData;
      compiler2.compile(parseData.children); //jsonオブジェクトを各種コードに変換します
      editor3.setValue(builder.getNodes());
      // iframe内のコンテンツのdocumentオブジェクト追加
      $("#child-frame").attr("srcdoc", builder.getNodes());
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
