(window.webpackJsonp=window.webpackJsonp||[]).push([[60],{413:function(e,n,t){"use strict";t.r(n),t.d(n,"conf",(function(){return r})),t.d(n,"language",(function(){return i}));var o="undefined"==typeof monaco?self.monaco:monaco,r={wordPattern:/(-?\d*\.\d\w*)|([^\`\~\!\@\#\%\^\&\*\(\)\-\=\+\[\{\]\}\\\|\;\:\'\"\,\.\<\>\/\?\s]+)/g,comments:{lineComment:"//",blockComment:["/*","*/"]},brackets:[["{","}"],["[","]"],["(",")"]],onEnterRules:[{beforeText:/^\s*\/\*\*(?!\/)([^\*]|\*(?!\/))*$/,afterText:/^\s*\*\/$/,action:{indentAction:o.languages.IndentAction.IndentOutdent,appendText:" * "}},{beforeText:/^\s*\/\*\*(?!\/)([^\*]|\*(?!\/))*$/,action:{indentAction:o.languages.IndentAction.None,appendText:" * "}},{beforeText:/^(\t|(\ \ ))*\ \*(\ ([^\*]|\*(?!\/))*)?$/,action:{indentAction:o.languages.IndentAction.None,appendText:"* "}},{beforeText:/^(\t|(\ \ ))*\ \*\/\s*$/,action:{indentAction:o.languages.IndentAction.None,removeText:1}}],autoClosingPairs:[{open:"{",close:"}"},{open:"[",close:"]"},{open:"(",close:")"},{open:'"',close:'"',notIn:["string"]},{open:"'",close:"'",notIn:["string","comment"]},{open:"`",close:"`",notIn:["string","comment"]},{open:"/**",close:" */",notIn:["string"]}],folding:{markers:{start:new RegExp("^\\s*//\\s*#?region\\b"),end:new RegExp("^\\s*//\\s*#?endregion\\b")}}},i={defaultToken:"invalid",tokenPostfix:".ts",keywords:["abstract","as","break","case","catch","class","continue","const","constructor","debugger","declare","default","delete","do","else","enum","export","extends","false","finally","for","from","function","get","if","implements","import","in","infer","instanceof","interface","is","keyof","let","module","namespace","never","new","null","package","private","protected","public","readonly","require","global","return","set","static","super","switch","symbol","this","throw","true","try","type","typeof","unique","var","void","while","with","yield","async","await","of"],typeKeywords:["any","boolean","number","object","string","undefined"],operators:["<=",">=","==","!=","===","!==","=>","+","-","**","*","/","%","++","--","<<","</",">>",">>>","&","|","^","!","~","&&","||","??","?",":","=","+=","-=","*=","**=","/=","%=","<<=",">>=",">>>=","&=","|=","^=","@"],symbols:/[=><!~?:&|+\-*\/\^%]+/,escapes:/\\(?:[abfnrtv\\"']|x[0-9A-Fa-f]{1,4}|u[0-9A-Fa-f]{4}|U[0-9A-Fa-f]{8})/,digits:/\d+(_+\d+)*/,octaldigits:/[0-7]+(_+[0-7]+)*/,binarydigits:/[0-1]+(_+[0-1]+)*/,hexdigits:/[[0-9a-fA-F]+(_+[0-9a-fA-F]+)*/,regexpctl:/[(){}\[\]\$\^|\-*+?\.]/,regexpesc:/\\(?:[bBdDfnrstvwWn0\\\/]|@regexpctl|c[A-Z]|x[0-9a-fA-F]{2}|u[0-9a-fA-F]{4})/,tokenizer:{root:[[/[{}]/,"delimiter.bracket"],{include:"common"}],common:[[/[a-z_$][\w$]*/,{cases:{"@typeKeywords":"keyword","@keywords":"keyword","@default":"identifier"}}],[/[A-Z][\w\$]*/,"type.identifier"],{include:"@whitespace"},[/\/(?=([^\\\/]|\\.)+\/([gimsuy]*)(\s*)(\.|;|,|\)|\]|\}|$))/,{token:"regexp",bracket:"@open",next:"@regexp"}],[/[()\[\]]/,"@brackets"],[/[<>](?!@symbols)/,"@brackets"],[/!(?=([^=]|$))/,"delimiter"],[/@symbols/,{cases:{"@operators":"delimiter","@default":""}}],[/(@digits)[eE]([\-+]?(@digits))?/,"number.float"],[/(@digits)\.(@digits)([eE][\-+]?(@digits))?/,"number.float"],[/0[xX](@hexdigits)n?/,"number.hex"],[/0[oO]?(@octaldigits)n?/,"number.octal"],[/0[bB](@binarydigits)n?/,"number.binary"],[/(@digits)n?/,"number"],[/[;,.]/,"delimiter"],[/"([^"\\]|\\.)*$/,"string.invalid"],[/'([^'\\]|\\.)*$/,"string.invalid"],[/"/,"string","@string_double"],[/'/,"string","@string_single"],[/`/,"string","@string_backtick"]],whitespace:[[/[ \t\r\n]+/,""],[/\/\*\*(?!\/)/,"comment.doc","@jsdoc"],[/\/\*/,"comment","@comment"],[/\/\/.*$/,"comment"]],comment:[[/[^\/*]+/,"comment"],[/\*\//,"comment","@pop"],[/[\/*]/,"comment"]],jsdoc:[[/[^\/*]+/,"comment.doc"],[/\*\//,"comment.doc","@pop"],[/[\/*]/,"comment.doc"]],regexp:[[/(\{)(\d+(?:,\d*)?)(\})/,["regexp.escape.control","regexp.escape.control","regexp.escape.control"]],[/(\[)(\^?)(?=(?:[^\]\\\/]|\\.)+)/,["regexp.escape.control",{token:"regexp.escape.control",next:"@regexrange"}]],[/(\()(\?:|\?=|\?!)/,["regexp.escape.control","regexp.escape.control"]],[/[()]/,"regexp.escape.control"],[/@regexpctl/,"regexp.escape.control"],[/[^\\\/]/,"regexp"],[/@regexpesc/,"regexp.escape"],[/\\\./,"regexp.invalid"],[/(\/)([gimsuy]*)/,[{token:"regexp",bracket:"@close",next:"@pop"},"keyword.other"]]],regexrange:[[/-/,"regexp.escape.control"],[/\^/,"regexp.invalid"],[/@regexpesc/,"regexp.escape"],[/[^\]]/,"regexp"],[/\]/,{token:"regexp.escape.control",next:"@pop",bracket:"@close"}]],string_double:[[/[^\\"]+/,"string"],[/@escapes/,"string.escape"],[/\\./,"string.escape.invalid"],[/"/,"string","@pop"]],string_single:[[/[^\\']+/,"string"],[/@escapes/,"string.escape"],[/\\./,"string.escape.invalid"],[/'/,"string","@pop"]],string_backtick:[[/\$\{/,{token:"delimiter.bracket",next:"@bracketCounting"}],[/[^\\`$]+/,"string"],[/@escapes/,"string.escape"],[/\\./,"string.escape.invalid"],[/`/,"string","@pop"]],bracketCounting:[[/\{/,"delimiter.bracket","@bracketCounting"],[/\}/,"delimiter.bracket","@pop"],{include:"common"}]}}}}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vY2h1bmsvNjAuYmE5ZjE2OTk5MWY3MzFiZjVlNjUuanMiXSwibmFtZXMiOlsid2luZG93IiwicHVzaCIsIjQxMyIsIm1vZHVsZSIsIl9fd2VicGFja19leHBvcnRzX18iLCJfX3dlYnBhY2tfcmVxdWlyZV9fIiwiciIsImQiLCJjb25mIiwibGFuZ3VhZ2UiLCJfbW9uYWNvIiwibW9uYWNvIiwic2VsZiIsIndvcmRQYXR0ZXJuIiwiY29tbWVudHMiLCJsaW5lQ29tbWVudCIsImJsb2NrQ29tbWVudCIsImJyYWNrZXRzIiwib25FbnRlclJ1bGVzIiwiYmVmb3JlVGV4dCIsImFmdGVyVGV4dCIsImFjdGlvbiIsImluZGVudEFjdGlvbiIsImxhbmd1YWdlcyIsIkluZGVudEFjdGlvbiIsIkluZGVudE91dGRlbnQiLCJhcHBlbmRUZXh0IiwiTm9uZSIsInJlbW92ZVRleHQiLCJhdXRvQ2xvc2luZ1BhaXJzIiwib3BlbiIsImNsb3NlIiwibm90SW4iLCJmb2xkaW5nIiwibWFya2VycyIsInN0YXJ0IiwiUmVnRXhwIiwiZW5kIiwiZGVmYXVsdFRva2VuIiwidG9rZW5Qb3N0Zml4Iiwia2V5d29yZHMiLCJ0eXBlS2V5d29yZHMiLCJvcGVyYXRvcnMiLCJzeW1ib2xzIiwiZXNjYXBlcyIsImRpZ2l0cyIsIm9jdGFsZGlnaXRzIiwiYmluYXJ5ZGlnaXRzIiwiaGV4ZGlnaXRzIiwicmVnZXhwY3RsIiwicmVnZXhwZXNjIiwidG9rZW5pemVyIiwicm9vdCIsImluY2x1ZGUiLCJjb21tb24iLCJjYXNlcyIsIkB0eXBlS2V5d29yZHMiLCJAa2V5d29yZHMiLCJAZGVmYXVsdCIsInRva2VuIiwiYnJhY2tldCIsIm5leHQiLCJAb3BlcmF0b3JzIiwid2hpdGVzcGFjZSIsImNvbW1lbnQiLCJqc2RvYyIsInJlZ2V4cCIsInJlZ2V4cmFuZ2UiLCJzdHJpbmdfZG91YmxlIiwic3RyaW5nX3NpbmdsZSIsInN0cmluZ19iYWNrdGljayIsImJyYWNrZXRDb3VudGlu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Q0FBQyxhQUFjLHlCQUNmLENBQUMsVUFBVyxVQUNaLENBQUMsYUFBYyxpQkFDZixDQUFDLE9BQVEsa0JBQ1QsQ0FBQyxrQkFBbUIsQ0FBQyxDQUFFRixNQUFPLFNBQVVDLFFBQVMsU0FBVUMsS0FBTSxRQUFVLG1CQUUvRU0sV0FBWSxDQUNSLENBQUMsSUFBSyx5QkFDTixDQUFDLEtBQU0sa0JBQ1AsQ0FBQyxhQUFjLGlCQUNmLENBQUMsUUFBUyxVQUNWLENBQUMsS0FBTSxDQUFFUixNQUFPLHdCQUF5QkUsS0FBTSxPQUFRRCxRQUFTLFlBRXBFUSxjQUFlLENBQ1gsQ0FBQyxVQUFXLFVBQ1osQ0FBQyxXQUFZLGlCQUNiLENBQUMsTUFBTyx5QkFDUixDQUFDLElBQUssU0FBVSxTQUVwQkMsY0FBZSxDQUNYLENBQUMsVUFBVyxVQUNaLENBQUMsV0FBWSxpQkFDYixDQUFDLE1BQU8seUJBQ1IsQ0FBQyxJQUFLLFNBQVUsU0FFcEJDLGdCQUFpQixDQUNiLENBQUMsT0FBUSxDQUFFWCxNQUFPLG9CQUFxQkUsS0FBTSxxQkFDN0MsQ0FBQyxXQUFZLFVBQ2IsQ0FBQyxXQUFZLGlCQUNiLENBQUMsTUFBTyx5QkFDUixDQUFDLElBQUssU0FBVSxTQUVwQlUsZ0JBQWlCLENBQ2IsQ0FBQyxLQUFNLG9CQUFxQixvQkFDNUIsQ0FBQyxLQUFNLG9CQUFxQixRQUM1QixDQUFFbEIsUUFBUyIsImZpbGUiOiIuL2NodW5rLzYwLmJhOWYxNjk5OTFmNzMxYmY1ZTY1LmpzIiwic291cmNlUm9vdCI6IiJ9