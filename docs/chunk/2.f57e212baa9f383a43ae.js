(window.webpackJsonp=window.webpackJsonp||[]).push([[2,60],{413:function(e,n,t){"use strict";t.r(n),t.d(n,"conf",(function(){return i})),t.d(n,"language",(function(){return r}));var o="undefined"==typeof monaco?self.monaco:monaco,i={wordPattern:/(-?\d*\.\d\w*)|([^\`\~\!\@\#\%\^\&\*\(\)\-\=\+\[\{\]\}\\\|\;\:\'\"\,\.\<\>\/\?\s]+)/g,comments:{lineComment:"//",blockComment:["/*","*/"]},brackets:[["{","}"],["[","]"],["(",")"]],onEnterRules:[{beforeText:/^\s*\/\*\*(?!\/)([^\*]|\*(?!\/))*$/,afterText:/^\s*\*\/$/,action:{indentAction:o.languages.IndentAction.IndentOutdent,appendText:" * "}},{beforeText:/^\s*\/\*\*(?!\/)([^\*]|\*(?!\/))*$/,action:{indentAction:o.languages.IndentAction.None,appendText:" * "}},{beforeText:/^(\t|(\ \ ))*\ \*(\ ([^\*]|\*(?!\/))*)?$/,action:{indentAction:o.languages.IndentAction.None,appendText:"* "}},{beforeText:/^(\t|(\ \ ))*\ \*\/\s*$/,action:{indentAction:o.languages.IndentAction.None,removeText:1}}],autoClosingPairs:[{open:"{",close:"}"},{open:"[",close:"]"},{open:"(",close:")"},{open:'"',close:'"',notIn:["string"]},{open:"'",close:"'",notIn:["string","comment"]},{open:"`",close:"`",notIn:["string","comment"]},{open:"/**",close:" */",notIn:["string"]}],folding:{markers:{start:new RegExp("^\\s*//\\s*#?region\\b"),end:new RegExp("^\\s*//\\s*#?endregion\\b")}}},r={defaultToken:"invalid",tokenPostfix:".ts",keywords:["abstract","as","break","case","catch","class","continue","const","constructor","debugger","declare","default","delete","do","else","enum","export","extends","false","finally","for","from","function","get","if","implements","import","in","infer","instanceof","interface","is","keyof","let","module","namespace","never","new","null","package","private","protected","public","readonly","require","global","return","set","static","super","switch","symbol","this","throw","true","try","type","typeof","unique","var","void","while","with","yield","async","await","of"],typeKeywords:["any","boolean","number","object","string","undefined"],operators:["<=",">=","==","!=","===","!==","=>","+","-","**","*","/","%","++","--","<<","</",">>",">>>","&","|","^","!","~","&&","||","??","?",":","=","+=","-=","*=","**=","/=","%=","<<=",">>=",">>>=","&=","|=","^=","@"],symbols:/[=><!~?:&|+\-*\/\^%]+/,escapes:/\\(?:[abfnrtv\\"']|x[0-9A-Fa-f]{1,4}|u[0-9A-Fa-f]{4}|U[0-9A-Fa-f]{8})/,digits:/\d+(_+\d+)*/,octaldigits:/[0-7]+(_+[0-7]+)*/,binarydigits:/[0-1]+(_+[0-1]+)*/,hexdigits:/[[0-9a-fA-F]+(_+[0-9a-fA-F]+)*/,regexpctl:/[(){}\[\]\$\^|\-*+?\.]/,regexpesc:/\\(?:[bBdDfnrstvwWn0\\\/]|@regexpctl|c[A-Z]|x[0-9a-fA-F]{2}|u[0-9a-fA-F]{4})/,tokenizer:{root:[[/[{}]/,"delimiter.bracket"],{include:"common"}],common:[[/[a-z_$][\w$]*/,{cases:{"@typeKeywords":"keyword","@keywords":"keyword","@default":"identifier"}}],[/[A-Z][\w\$]*/,"type.identifier"],{include:"@whitespace"},[/\/(?=([^\\\/]|\\.)+\/([gimsuy]*)(\s*)(\.|;|,|\)|\]|\}|$))/,{token:"regexp",bracket:"@open",next:"@regexp"}],[/[()\[\]]/,"@brackets"],[/[<>](?!@symbols)/,"@brackets"],[/!(?=([^=]|$))/,"delimiter"],[/@symbols/,{cases:{"@operators":"delimiter","@default":""}}],[/(@digits)[eE]([\-+]?(@digits))?/,"number.float"],[/(@digits)\.(@digits)([eE][\-+]?(@digits))?/,"number.float"],[/0[xX](@hexdigits)n?/,"number.hex"],[/0[oO]?(@octaldigits)n?/,"number.octal"],[/0[bB](@binarydigits)n?/,"number.binary"],[/(@digits)n?/,"number"],[/[;,.]/,"delimiter"],[/"([^"\\]|\\.)*$/,"string.invalid"],[/'([^'\\]|\\.)*$/,"string.invalid"],[/"/,"string","@string_double"],[/'/,"string","@string_single"],[/`/,"string","@string_backtick"]],whitespace:[[/[ \t\r\n]+/,""],[/\/\*\*(?!\/)/,"comment.doc","@jsdoc"],[/\/\*/,"comment","@comment"],[/\/\/.*$/,"comment"]],comment:[[/[^\/*]+/,"comment"],[/\*\//,"comment","@pop"],[/[\/*]/,"comment"]],jsdoc:[[/[^\/*]+/,"comment.doc"],[/\*\//,"comment.doc","@pop"],[/[\/*]/,"comment.doc"]],regexp:[[/(\{)(\d+(?:,\d*)?)(\})/,["regexp.escape.control","regexp.escape.control","regexp.escape.control"]],[/(\[)(\^?)(?=(?:[^\]\\\/]|\\.)+)/,["regexp.escape.control",{token:"regexp.escape.control",next:"@regexrange"}]],[/(\()(\?:|\?=|\?!)/,["regexp.escape.control","regexp.escape.control"]],[/[()]/,"regexp.escape.control"],[/@regexpctl/,"regexp.escape.control"],[/[^\\\/]/,"regexp"],[/@regexpesc/,"regexp.escape"],[/\\\./,"regexp.invalid"],[/(\/)([gimsuy]*)/,[{token:"regexp",bracket:"@close",next:"@pop"},"keyword.other"]]],regexrange:[[/-/,"regexp.escape.control"],[/\^/,"regexp.invalid"],[/@regexpesc/,"regexp.escape"],[/[^\]]/,"regexp"],[/\]/,{token:"regexp.escape.control",next:"@pop",bracket:"@close"}]],string_double:[[/[^\\"]+/,"string"],[/@escapes/,"string.escape"],[/\\./,"string.escape.invalid"],[/"/,"string","@pop"]],string_single:[[/[^\\']+/,"string"],[/@escapes/,"string.escape"],[/\\./,"string.escape.invalid"],[/'/,"string","@pop"]],string_backtick:[[/\$\{/,{token:"delimiter.bracket",next:"@bracketCounting"}],[/[^\\`$]+/,"string"],[/@escapes/,"string.escape"],[/\\./,"string.escape.invalid"],[/`/,"string","@pop"]],bracketCounting:[[/\{/,"delimiter.bracket","@bracketCounting"],[/\}/,"delimiter.bracket","@pop"],{include:"common"}]}}},414:function(e,n,t){"use strict";t.r(n),t.d(n,"conf",(function(){return i})),t.d(n,"language",(function(){return r}));var o=t(413),i=("undefined"==typeof monaco?self.monaco:monaco,o.conf),r={defaultToken:"invalid",tokenPostfix:".js",keywords:["break","case","catch","class","continue","const","constructor","debugger","default","delete","do","else","export","extends","false","finally","for","from","function","get","if","import","in","instanceof","let","new","null","return","set","super","switch","symbol","this","throw","true","try","typeof","undefined","var","void","while","with","yield","async","await","of"],typeKeywords:[],operators:o.language.operators,symbols:o.language.symbols,escapes:o.language.escapes,digits:o.language.digits,octaldigits:o.language.octaldigits,binarydigits:o.language.binarydigits,hexdigits:o.language.hexdigits,regexpctl:o.language.regexpctl,regexpesc:o.language.regexpesc,tokenizer:o.language.tokenizer}}}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vY2h1bmsvMi5mNTdlMjEyYmFhOWYzODNhNDNhZS5qcyJdLCJuYW1lcyI6WyJ3aW5kb3ciLCJwdXNoIiwiNDEzIiwibW9kdWxlIiwiX193ZWJwYWNrX2V4cG9ydHNfXyIsIl9fd2VicGFja19yZXF1aXJlX18iLCJyIiwiZCIsImNvbmYiLCJsYW5ndWFnZSIsIl9tb25hY28iLCJtb25hY28iLCJzZWxmIiwid29yZFBhdHRlcm4iLCJjb21tZW50cyIsImxpbmVDb21tZW50IiwiYmxvY2tDb21tZW50IiwiYnJhY2tldHMiLCJvbkVudGVyUnVsZXMiLCJiZWZvcmVUZXh0IiwiYWZ0ZXJUZXh0IiwiYWN0aW9uIiwiaW5kZW50QWN0aW9uIiwibGFuZ3VhZ2VzIiwiSW5kZW50QWN0aW9uIiwiSW5kZW50T3V0ZGVudCIsImFwcGVuZFRleHQiLCJOb25lIiwicmVtb3ZlVGV4dCIsImF1dG9DbG9zaW5nUGFpcnMiLCJvcGVuIiwiY2xvc2UiLCJub3RJbiIsImZvbGRpbmciLCJtYXJrZXJzIiwic3RhcnQiLCJSZWdFeHAiLCJlbmQiLCJkZWZhdWx0VG9rZW4iLCJ0b2tlblBvc3RmaXgiLCJrZXl3b3JkcyIsInR5cGVLZXl3b3JkcyIsIm9wZXJhdG9ycyIsInN5bWJvbHMiLCJlc2NhcGVzIiwiZGlnaXRzIiwib2N0YWxkaWdpdHMiLCJiaW5hcnlkaWdpdHMiLCJoZXhkaWdpdHMiLCJyZWdleHBjdGwiLCJyZWdleHBlc2MiLCJ0b2tlbml6ZXIiLCJyb290IiwiaW5jbHVkZSIsImNvbW1vbiIsImNhc2VzIiwiQHR5cGVLZXl3b3JkcyIsIkBrZXl3b3JkcyIsIkBkZWZhdWx0IiwidG9rZW4iLCJicmFja2V0IiwibmV4dCIsIkBvcGVyYXRvcnMiLCJ3aGl0ZXNwYWNlIiwiY29tbWVudCIsImpzZG9jIiwicmVnZXhwIiwicmVnZXhyYW5nZSIsInN0cmluZ19kb3VibGUiLCJzdHJpbmdfc2luZ2xlIiwic3RyaW5nX2JhY2t0aWNrIiwiYnJhY2tldENvdW50aW5nIiwiNDE0IiwiX3R5cGVzY3JpcHRfdHlwZXNjcmlwdF9qc19fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMF9fIl0sIm1hcHBpbmdzIjoiQ0FBQ0EsT0FBcUIsYUFBSUEsT0FBcUIsY0FBSyxJQUFJQyxLQUFLLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FFL0RDLElBQ0EsU0FBVUMsRUFBUUMsRUFBcUJDLEdBRTdDLGFBQ0FBLEVBQW9CQyxFQUFFRixHQUNTQyxFQUFvQkUsRUFBRUgsRUFBcUIsUUFBUSxXQUFhLE9BQU9JLEtBQ3ZFSCxFQUFvQkUsRUFBRUgsRUFBcUIsWUFBWSxXQUFhLE9BQU9LLEtBTzFHLElBQUlDLEVBQTZCLG9CQUFYQyxPQUF5QkMsS0FBS0QsT0FBU0EsT0FDekRILEVBQU8sQ0FDUEssWUFBYSx1RkFDYkMsU0FBVSxDQUNOQyxZQUFhLEtBQ2JDLGFBQWMsQ0FBQyxLQUFNLE9BRXpCQyxTQUFVLENBQ04sQ0FBQyxJQUFLLEtBQ04sQ0FBQyxJQUFLLEtBQ04sQ0FBQyxJQUFLLE1BRVZDLGFBQWMsQ0FDVixDQUVJQyxXQUFZLHFDQUNaQyxVQUFXLFlBQ1hDLE9BQVEsQ0FBRUMsYUFBY1osRUFBUWEsVUFBVUMsYUFBYUMsY0FBZUMsV0FBWSxRQUV0RixDQUVJUCxXQUFZLHFDQUNaRSxPQUFRLENBQUVDLGFBQWNaLEVBQVFhLFVBQVVDLGFBQWFHLEtBQU1ELFdBQVksUUFFN0UsQ0FFSVAsV0FBWSwyQ0FDWkUsT0FBUSxDQUFFQyxhQUFjWixFQUFRYSxVQUFVQyxhQUFhRyxLQUFNRCxXQUFZLE9BRTdFLENBRUlQLFdBQVksMEJBQ1pFLE9BQVEsQ0FBRUMsYUFBY1osRUFBUWEsVUFBVUMsYUFBYUcsS0FBTUMsV0FBWSxLQUdqRkMsaUJBQWtCLENBQ2QsQ0FBRUMsS0FBTSxJQUFLQyxNQUFPLEtBQ3BCLENBQUVELEtBQU0sSUFBS0MsTUFBTyxLQUNwQixDQUFFRCxLQUFNLElBQUtDLE1BQU8sS0FDcEIsQ0FBRUQsS0FBTSxJQUFLQyxNQUFPLElBQUtDLE1BQU8sQ0FBQyxXQUNqQyxDQUFFRixL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QVcsQ0FFWDZCLGFBQWMsVUFDZEMsYUFBYyxNQUNkQyxTQUFVLENBQ04sUUFBUyxPQUFRLFFBQVMsUUFBUyxXQUFZLFFBQy9DLGNBQWUsV0FBWSxVQUFXLFNBQVUsS0FBTSxPQUN0RCxTQUFVLFVBQVcsUUFBUyxVQUFXLE1BQU8sT0FBUSxXQUN4RCxNQUFPLEtBQU0sU0FBVSxLQUFNLGFBQWMsTUFBTyxNQUFPLE9BQ3pELFNBQVUsTUFBTyxRQUFTLFNBQVUsU0FBVSxPQUFRLFFBQVMsT0FDL0QsTUFBTyxTQUFVLFlBQWEsTUFBTyxPQUFRLFFBQVMsT0FBUSxRQUM5RCxRQUFTLFFBQVMsTUFFdEJDLGFBQWMsR0FDZEMsVUFBVytCLEVBQWlFLFNBQUUvQixVQUM5RUMsUUFBUzhCLEVBQWlFLFNBQUU5QixRQUM1RUMsUUFBUzZCLEVBQWlFLFNBQUU3QixRQUM1RUMsT0FBUTRCLEVBQWlFLFNBQUU1QixPQUMzRUMsWUFBYTJCLEVBQWlFLFNBQUUzQixZQUNoRkMsYUFBYzBCLEVBQWlFLFNBQUUxQixhQUNqRkMsVUFBV3lCLEVBQWlFLFNBQUV6QixVQUM5RUMsVUFBV3dCLEVBQWlFLFNBQUV4QixVQUM5RUMsVUFBV3VCLEVBQWlFLFNBQUV2QixVQUM5RUMsVUFBV3NCLEVBQWlFLFNBQUV0QiIsImZpbGUiOiIuL2NodW5rLzIuZjU3ZTIxMmJhYTlmMzgzYTQzYWUuanMiLCJzb3VyY2VSb290IjoiIn0=