"use strict";
import * as monaco from 'monaco-editor'
import LocalStorage from './fs/localstorage.js'
import SiteStorage from './fs/sitestorage.js'
import BuilderLogic from './builderlogic.js'

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
var localstorage = new LocalStorage();
var sitestorage = new SiteStorage();
var builderLogic = new BuilderLogic();

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
function refreshView (content) {
    // iframe内のコンテンツを更新
  $("#child-frame").attr("srcdoc", "");
  //$("#child-frame").attr("src", "./blank.html");
  var frame = document.getElementById("child-frame");
  if(content){ 
    frame.src = "./blank.html";
    frame.onload = function(){
        frame.onload=function(){};
        frame.contentDocument.open();
        frame.contentDocument.write(content);
        frame.contentDocument.close();
        $.UIkit.notify("compile..", {status:'success',timeout : 1000});
    }
  } else {
    frame.onload = function(){};
  }
}

//プロジェクトファイルの読み込み
function loadProject (url, cb) {
  $.UIkit.notify("load..", { status: 'success', timeout: 1000 });
  //iframeの初期化
  refreshView();
  //localから取得
  if(!url){
    let doc = localstorage.loadDraft()
    if (doc){
      data.source.model.setValue(doc);
      //$("#child-frame").attr("src", "./blank.html");
      return (cb)? cb() : true;
    }else{
      url = $("#test5").attr("data-url");
    }
  }
  sitestorage.loadDraft(null, url, (source) => {
    data.source.model.setValue(source);
    return (cb)? cb() : true;
  })
}

function compileAll () {
    $.UIkit.notify("compile..", {status:'success',timeout : 1000})
    builderLogic.compileAll(data, () => {
        $.UIkit.notify("success..", {status:'success',timeout : 1000});
        refreshView(data.html.model.getValue());
    })
}

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

//View///////////////////////////////////////////////////
$(document).ready(() => {
  const editorContainer = document.getElementById("container");
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
  //プロジェクト取得
  loadProject(url, () => {
    compileAll();
  });

  $("#run").on("click", (event) => {
    compileAll();
  });

  $(".samples").on("click", (event) => {
    loadProject($(event.currentTarget).attr("data-url"),() => {})
  });
  
  $(window).keydown( (e) => {
    if(e.keyCode === 120){
        compileAll();
        return false;
      }
    if(e.ctrlKey){
      if(e.keyCode === 83){
        localstorage.saveDraft(data.source.model.getValue());
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