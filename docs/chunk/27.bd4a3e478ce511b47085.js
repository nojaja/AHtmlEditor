(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{443:function(e,t,n){"use strict";n.r(t),n.d(t,"conf",(function(){return s})),n.d(t,"language",(function(){return o}));var s={comments:{blockComment:["\x3c!--","--\x3e"]},brackets:[["{","}"],["[","]"],["(",")"]],autoClosingPairs:[{open:"{",close:"}"},{open:"[",close:"]"},{open:"(",close:")"},{open:"<",close:">",notIn:["string"]}],surroundingPairs:[{open:"(",close:")"},{open:"[",close:"]"},{open:"`",close:"`"}],folding:{markers:{start:new RegExp("^\\s*\x3c!--\\s*#?region\\b.*--\x3e"),end:new RegExp("^\\s*\x3c!--\\s*#?endregion\\b.*--\x3e")}}},o={defaultToken:"",tokenPostfix:".md",control:/[\\`*_\[\]{}()#+\-\.!]/,noncontrol:/[^\\`*_\[\]{}()#+\-\.!]/,escapes:/\\(?:@control)/,jsescapes:/\\(?:[btnfr\\"']|[0-7][0-7]?|[0-3][0-7]{2})/,empty:["area","base","basefont","br","col","frame","hr","img","input","isindex","link","meta","param"],tokenizer:{root:[[/^\s*\|/,"@rematch","@table_header"],[/^(\s{0,3})(#+)((?:[^\\#]|@escapes)+)((?:#+)?)/,["white","keyword","keyword","keyword"]],[/^\s*(=+|\-+)\s*$/,"keyword"],[/^\s*((\*[ ]?)+)\s*$/,"meta.separator"],[/^\s*>+/,"comment"],[/^\s*([\*\-+:]|\d+\.)\s/,"keyword"],[/^(\t|[ ]{4})[^ ].*$/,"string"],[/^\s*~~~\s*((?:\w|[\/\-#])+)?\s*$/,{token:"string",next:"@codeblock"}],[/^\s*```\s*((?:\w|[\/\-#])+).*$/,{token:"string",next:"@codeblockgh",nextEmbedded:"$1"}],[/^\s*```\s*$/,{token:"string",next:"@codeblock"}],{include:"@linecontent"}],table_header:[{include:"@table_common"},[/[^\|]+/,"keyword.table.header"]],table_body:[{include:"@table_common"},{include:"@linecontent"}],table_common:[[/\s*[\-:]+\s*/,{token:"keyword",switchTo:"table_body"}],[/^\s*\|/,"keyword.table.left"],[/^\s*[^\|]/,"@rematch","@pop"],[/^\s*$/,"@rematch","@pop"],[/\|/,{cases:{"@eos":"keyword.table.right","@default":"keyword.table.middle"}}]],codeblock:[[/^\s*~~~\s*$/,{token:"string",next:"@pop"}],[/^\s*```\s*$/,{token:"string",next:"@pop"}],[/.*$/,"variable.source"]],codeblockgh:[[/```\s*$/,{token:"variable.source",next:"@pop",nextEmbedded:"@pop"}],[/[^`]+/,"variable.source"]],linecontent:[[/&\w+;/,"string.escape"],[/@escapes/,"escape"],[/\b__([^\\_]|@escapes|_(?!_))+__\b/,"strong"],[/\*\*([^\\*]|@escapes|\*(?!\*))+\*\*/,"strong"],[/\b_[^_]+_\b/,"emphasis"],[/\*([^\\*]|@escapes)+\*/,"emphasis"],[/`([^\\`]|@escapes)+`/,"variable"],[/\{+[^}]+\}+/,"string.target"],[/(!?\[)((?:[^\]\\]|@escapes)*)(\]\([^\)]+\))/,["string.link","","string.link"]],[/(!?\[)((?:[^\]\\]|@escapes)*)(\])/,"string.link"],{include:"html"}],html:[[/<(\w+)\/>/,"tag"],[/<(\w+)/,{cases:{"@empty":{token:"tag",next:"@tag.$1"},"@default":{token:"tag",next:"@tag.$1"}}}],[/<\/(\w+)\s*>/,{token:"tag"}],[/<!--/,"comment","@comment"]],comment:[[/[^<\-]+/,"comment.content"],[/-->/,"comment","@pop"],[/<!--/,"comment.content.invalid"],[/[<\-]/,"comment.content"]],tag:[[/[ \t\r\n]+/,"white"],[/(type)(\s*=\s*)(")([^"]+)(")/,["attribute.name.html","delimiter.html","string.html",{token:"string.html",switchTo:"@tag.$S2.$4"},"string.html"]],[/(type)(\s*=\s*)(')([^']+)(')/,["attribute.name.html","delimiter.html","string.html",{token:"string.html",switchTo:"@tag.$S2.$4"},"string.html"]],[/(\w+)(\s*=\s*)("[^"]*"|'[^']*')/,["attribute.name.html","delimiter.html","string.html"]],[/\w+/,"attribute.name.html"],[/\/>/,"tag","@pop"],[/>/,{cases:{"$S2==style":{token:"tag",switchTo:"embeddedStyle",nextEmbedded:"text/css"},"$S2==script":{cases:{$S3:{token:"tag",switchTo:"embeddedScript",nextEmbedded:"$S3"},"@default":{token:"tag",switchTo:"embeddedScript",nextEmbedded:"text/javascript"}}},"@default":{token:"tag",next:"@pop"}}}]],embeddedStyle:[[/[^<]+/,""],[/<\/style\s*>/,{token:"@rematch",next:"@pop",nextEmbedded:"@pop"}],[/</,""]],embeddedScript:[[/[^<]+/,""],[/<\/script\s*>/,{token:"@rematch",next:"@pop",nextEmbedded:"@pop"}],[/</,""]]}}}}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vY2h1bmsvMjcuYmQ0YTNlNDc4Y2U1MTFiNDcwODUuanMiXSwibmFtZXMiOlsid2luZG93IiwicHVzaCIsIjQ0MyIsIm1vZHVsZSIsIl9fd2VicGFja19leHBvcnRzX18iLCJfX3dlYnBhY2tfcmVxdWlyZV9fIiwiciIsImQiLCJjb25mIiwibGFuZ3VhZ2UiLCJjb21tZW50cyIsImJsb2NrQ29tbWVudCIsImJyYWNrZXRzIiwiYXV0b0Nsb3NpbmdQYWlycyIsIm9wZW4iLCJjbG9zZSIsIm5vdEluIiwic3Vycm91bmRpbmdQYWlycyIsImZvbGRpbmciLCJtYXJrZXJzIiwic3RhcnQiLCJSZWdFeHAiLCJlbmQiLCJkZWZhdWx0VG9rZW4iLCJ0b2tlblBvc3RmaXgiLCJjb250cm9sIiwibm9uY29udHJvbCIsImVzY2FwZXMiLCJqc2VzY2FwZXMiLCJlbXB0eSIsInRva2VuaXplciIsInJvb3QiLCJ0b2tlbiIsIm5leHQiLCJuZXh0RW1iZWRkZWQiLCJpbmNsdWRlIiwidGFibGVfaGVhZGVyIiwidGFibGVfYm9keSIsInRhYmxlX2NvbW1vbiIsInN3aXRjaFRvIiwiY2FzZXMiLCJAZW9zIiwiQGRlZmF1bHQiLCJjb2RlYmxvY2siLCJjb2RlYmxvY2tnaCIsImxpbmVjb250ZW50IiwiaHRtbCIsIkBlbXB0eSIsImNvbW1lbnQiLCJ0YWciLCIkUzI9PXN0eWxlIiwiJFMyPT1zY3JpcHQiLCIkUzMiLCJlbWJlZGRlZFN0eWxlIiwiZW1iZWRkZWRTY3JpcHQiXSwibWFwcGluZ3MiOiJDQUFDQSxPQUFxQixhQUFJQSxPQUFxQixjQUFLLElBQUlDLEtBQUssQ0FBQyxDQUFDLElBQUksQ0FFN0RDLElBQ0EsU0FBVUMsRUFBUUMsRUFBcUJDLEdBRTdDLGFBQ0FBLEVBQW9CQyxFQUFFRixHQUNTQyxFQUFvQkUsRUFBRUgsRUFBcUIsUUFBUSxXQUFhLE9BQU9JLEtBQ3ZFSCxFQUFvQkUsRUFBRUgsRUFBcUIsWUFBWSxXQUFhLE9BQU9LLEtBTTFHLElBQUlE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QUNmLENBQUMsK0JBQWdDLENBQUMsc0JBQXVCLGlCQUFrQixjQUNuRSxDQUFFakIsTUFBTyxjQUFlTyxTQUFVLGVBQ2xDLGdCQUNSLENBQUMsK0JBQWdDLENBQUMsc0JBQXVCLGlCQUFrQixjQUNuRSxDQUFFUCxNQUFPLGNBQWVPLFNBQVUsZUFDbEMsZ0JBQ1IsQ0FBQyxrQ0FBbUMsQ0FBQyxzQkFBdUIsaUJBQWtCLGdCQUM5RSxDQUFDLE1BQU8sdUJBQ1IsQ0FBQyxNQUFPLE1BQU8sUUFDZixDQUFDLElBQUssQ0FDRUMsTUFBTyxDQUNIVSxhQUFjLENBQUVsQixNQUFPLE1BQU9PLFNBQVUsZ0JBQWlCTCxhQUFjLFlBQ3ZFaUIsY0FBZSxDQUNYWCxNQUFPLENBQ0hZLElBQU8sQ0FBRXBCLE1BQU8sTUFBT08sU0FBVSxpQkFBa0JMLGFBQWMsT0FDakVRLFdBQVksQ0FBRVYsTUFBTyxNQUFPTyxTQUFVLGlCQUFrQkwsYUFBYyxxQkFHOUVRLFdBQVksQ0FBRVYsTUFBTyxNQUFPQyxLQUFNLFlBSWxEb0IsY0FBZSxDQUNYLENBQUMsUUFBUyxJQUNWLENBQUMsZUFBZ0IsQ0FBRXJCLE1BQU8sV0FBWUMsS0FBTSxPQUFRQyxhQUFjLFNBQ2xFLENBQUMsSUFBSyxLQUVWb0IsZUFBZ0IsQ0FDWixDQUFDLFFBQVMsSUFDVixDQUFDLGdCQUFpQixDQUFFdEIsTUFBTyxXQUFZQyxLQUFNLE9BQVFDLGFBQWMsU0FDbkUsQ0FBQyxJQUFLIiwiZmlsZSI6Ii4vY2h1bmsvMjcuYmQ0YTNlNDc4Y2U1MTFiNDcwODUuanMiLCJzb3VyY2VSb290IjoiIn0=