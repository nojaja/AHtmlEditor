"use strict";
import * as monaco from 'monaco-editor'
import LocalStorage from './fs/localstorage.js'
import AHtmlCompiler from './compiler/ahtmlcompiler.js'

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
var aHtmlCompiler = new AHtmlCompiler();

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
    let doc = localstorage.loadDraft()
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
  changeSrc(url, function () {
    aHtmlCompiler.compile(data)
  });

  $("#run").on("click", (event) => {
    aHtmlCompiler.compile(data)
  });

  $(".samples").on("click", (event) => {
    changeSrc($(event.currentTarget).attr("data-url"),() => {
      $.UIkit.notify("load..", {status:'success',timeout : 1000});
    });
  });
  
  $(window).keydown( (e) => {
    if(e.keyCode === 120){
        aHtmlCompiler.compile(data)
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