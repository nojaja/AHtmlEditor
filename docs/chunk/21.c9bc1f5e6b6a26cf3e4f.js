(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{416:function(e,t,n){"use strict";n.r(t),n.d(t,"conf",(function(){return r})),n.d(t,"language",(function(){return d}));var i="undefined"==typeof monaco?self.monaco:monaco,o=["area","base","br","col","embed","hr","img","input","keygen","link","menuitem","meta","param","source","track","wbr"],r={wordPattern:/(-?\d*\.\d\w*)|([^\`\~\!\@\$\^\&\*\(\)\=\+\[\{\]\}\\\|\;\:\'\"\,\.\<\>\/\s]+)/g,comments:{blockComment:["\x3c!--","--\x3e"]},brackets:[["\x3c!--","--\x3e"],["<",">"],["{","}"],["(",")"]],autoClosingPairs:[{open:"{",close:"}"},{open:"[",close:"]"},{open:"(",close:")"},{open:'"',close:'"'},{open:"'",close:"'"}],surroundingPairs:[{open:'"',close:'"'},{open:"'",close:"'"},{open:"{",close:"}"},{open:"[",close:"]"},{open:"(",close:")"},{open:"<",close:">"}],onEnterRules:[{beforeText:new RegExp("<(?!(?:"+o.join("|")+"))([_:\\w][_:\\w-.\\d]*)([^/>]*(?!/)>)[^<]*$","i"),afterText:/^<\/([_:\w][_:\w-.\d]*)\s*>$/i,action:{indentAction:i.languages.IndentAction.IndentOutdent}},{beforeText:new RegExp("<(?!(?:"+o.join("|")+"))(\\w[\\w\\d]*)([^/>]*(?!/)>)[^<]*$","i"),action:{indentAction:i.languages.IndentAction.Indent}}],folding:{markers:{start:new RegExp("^\\s*\x3c!--\\s*#region\\b.*--\x3e"),end:new RegExp("^\\s*\x3c!--\\s*#endregion\\b.*--\x3e")}}},d={defaultToken:"",tokenPostfix:".html",ignoreCase:!0,tokenizer:{root:[[/<!DOCTYPE/,"metatag","@doctype"],[/<!--/,"comment","@comment"],[/(<)((?:[\w\-]+:)?[\w\-]+)(\s*)(\/>)/,["delimiter","tag","","delimiter"]],[/(<)(script)/,["delimiter",{token:"tag",next:"@script"}]],[/(<)(style)/,["delimiter",{token:"tag",next:"@style"}]],[/(<)((?:[\w\-]+:)?[\w\-]+)/,["delimiter",{token:"tag",next:"@otherTag"}]],[/(<\/)((?:[\w\-]+:)?[\w\-]+)/,["delimiter",{token:"tag",next:"@otherTag"}]],[/</,"delimiter"],[/[^<]+/]],doctype:[[/[^>]+/,"metatag.content"],[/>/,"metatag","@pop"]],comment:[[/-->/,"comment","@pop"],[/[^-]+/,"comment.content"],[/./,"comment.content"]],otherTag:[[/\/?>/,"delimiter","@pop"],[/"([^"]*)"/,"attribute.value"],[/'([^']*)'/,"attribute.value"],[/[\w\-]+/,"attribute.name"],[/=/,"delimiter"],[/[ \t\r\n]+/]],script:[[/type/,"attribute.name","@scriptAfterType"],[/"([^"]*)"/,"attribute.value"],[/'([^']*)'/,"attribute.value"],[/[\w\-]+/,"attribute.name"],[/=/,"delimiter"],[/>/,{token:"delimiter",next:"@scriptEmbedded",nextEmbedded:"text/javascript"}],[/[ \t\r\n]+/],[/(<\/)(script\s*)(>)/,["delimiter","tag",{token:"delimiter",next:"@pop"}]]],scriptAfterType:[[/=/,"delimiter","@scriptAfterTypeEquals"],[/>/,{token:"delimiter",next:"@scriptEmbedded",nextEmbedded:"text/javascript"}],[/[ \t\r\n]+/],[/<\/script\s*>/,{token:"@rematch",next:"@pop"}]],scriptAfterTypeEquals:[[/"([^"]*)"/,{token:"attribute.value",switchTo:"@scriptWithCustomType.$1"}],[/'([^']*)'/,{token:"attribute.value",switchTo:"@scriptWithCustomType.$1"}],[/>/,{token:"delimiter",next:"@scriptEmbedded",nextEmbedded:"text/javascript"}],[/[ \t\r\n]+/],[/<\/script\s*>/,{token:"@rematch",next:"@pop"}]],scriptWithCustomType:[[/>/,{token:"delimiter",next:"@scriptEmbedded.$S2",nextEmbedded:"$S2"}],[/"([^"]*)"/,"attribute.value"],[/'([^']*)'/,"attribute.value"],[/[\w\-]+/,"attribute.name"],[/=/,"delimiter"],[/[ \t\r\n]+/],[/<\/script\s*>/,{token:"@rematch",next:"@pop"}]],scriptEmbedded:[[/<\/script/,{token:"@rematch",next:"@pop",nextEmbedded:"@pop"}],[/[^<]+/,""]],style:[[/type/,"attribute.name","@styleAfterType"],[/"([^"]*)"/,"attribute.value"],[/'([^']*)'/,"attribute.value"],[/[\w\-]+/,"attribute.name"],[/=/,"delimiter"],[/>/,{token:"delimiter",next:"@styleEmbedded",nextEmbedded:"text/css"}],[/[ \t\r\n]+/],[/(<\/)(style\s*)(>)/,["delimiter","tag",{token:"delimiter",next:"@pop"}]]],styleAfterType:[[/=/,"delimiter","@styleAfterTypeEquals"],[/>/,{token:"delimiter",next:"@styleEmbedded",nextEmbedded:"text/css"}],[/[ \t\r\n]+/],[/<\/style\s*>/,{token:"@rematch",next:"@pop"}]],styleAfterTypeEquals:[[/"([^"]*)"/,{token:"attribute.value",switchTo:"@styleWithCustomType.$1"}],[/'([^']*)'/,{token:"attribute.value",switchTo:"@styleWithCustomType.$1"}],[/>/,{token:"delimiter",next:"@styleEmbedded",nextEmbedded:"text/css"}],[/[ \t\r\n]+/],[/<\/style\s*>/,{token:"@rematch",next:"@pop"}]],styleWithCustomType:[[/>/,{token:"delimiter",next:"@styleEmbedded.$S2",nextEmbedded:"$S2"}],[/"([^"]*)"/,"attribute.value"],[/'([^']*)'/,"attribute.value"],[/[\w\-]+/,"attribute.name"],[/=/,"delimiter"],[/[ \t\r\n]+/],[/<\/style\s*>/,{token:"@rematch",next:"@pop"}]],styleEmbedded:[[/<\/style/,{token:"@rematch",next:"@pop",nextEmbedded:"@pop"}],[/[^<]+/,""]]}}}}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vY2h1bmsvMjEuYzliYzFmNWU2YjZhMjZjZjNlNGYuanMiXSwibmFtZXMiOlsid2luZG93IiwicHVzaCIsIjQxNiIsIm1vZHVsZSIsIl9fd2VicGFja19leHBvcnRzX18iLCJfX3dlYnBhY2tfcmVxdWlyZV9fIiwiciIsImQiLCJjb25mIiwibGFuZ3VhZ2UiLCJfbW9uYWNvIiwibW9uYWNvIiwic2VsZiIsIkVNUFRZX0VMRU1FTlRTIiwid29yZFBhdHRlcm4iLCJjb21tZW50cyIsImJsb2NrQ29tbWVudCIsImJyYWNrZXRzIiwiYXV0b0Nsb3NpbmdQYWlycyIsIm9wZW4iLCJjbG9zZSIsInN1cnJvdW5kaW5nUGFpcnMiLCJvbkVudGVyUnVsZXMiLCJiZWZvcmVUZXh0IiwiUmVnRXhwIiwiam9pbiIsImFmdGVyVGV4dCIsImFjdGlvbiIsImluZGVudEFjdGlvbiIsImxhbmd1YWdlcyIsIkluZGVudEFjdGlvbiIsIkluZGVudE91dGRlbnQiLCJJbmRlbnQiLCJmb2xkaW5nIiwibWFya2VycyIsInN0YXJ0IiwiZW5kIiwiZGVmYXVsdFRva2VuIiwidG9rZW5Qb3N0Zml4IiwiaWdub3JlQ2FzZSIsInRva2VuaXplciIsInJvb3QiLCJ0b2tlbiIsIm5leHQiLCJkb2N0eXBlIiwiY29tbWVudCIsIm90aGVyVGFnIiwic2NyaXB0IiwibmV4dEVtYmVkZGVkIiwic2NyaXB0QWZ0ZXJUeXBlIiwic2NyaXB0QWZ0ZXJUeXBlRXF1YWxzIiwic3dpdGNoVG8iLCJzY3JpcHRXaXRoQ3VzdG9tVHlwZSIsInNjcmlwdEVtYmVkZGVkIiwic3R5bGUiLCJzdHlsZUFmdGVyVHlwZSIsInN0eWxlQWZ0ZXJUeXBlRXF1YWxzIiwic3R5bGVXaXRoQ3VzdG9tVHlwZSIsInN0eWxlRW1iZWRkZWQiXSwibWFwcGluZ3MiOiJDQUFDQSxPQUFxQixhQUFJQSxPQUFxQixjQUFLLElBQUlDLEtBQUssQ0FBQyxDQUFDLElBQUksQ0FFN0RDLElBQ0EsU0FBVUMsRUFBUUMsRUFB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Q0FBQyxjQUNELENBQUMsZUFBZ0IsQ0FBRU4sTUFBTyxXQUFZQyxLQUFNLFVBR2hEYSxxQkFBc0IsQ0FDbEIsQ0FBQyxZQUFhLENBQUVkLE1BQU8sa0JBQW1CUyxTQUFVLDRCQUNwRCxDQUFDLFlBQWEsQ0FBRVQsTUFBTyxrQkFBbUJTLFNBQVUsNEJBQ3BELENBQUMsSUFBSyxDQUFFVCxNQUFPLFlBQWFDLEtBQU0saUJBQWtCSyxhQUFjLGFBQ2xFLENBQUMsY0FDRCxDQUFDLGVBQWdCLENBQUVOLE1BQU8sV0FBWUMsS0FBTSxVQUdoRGMsb0JBQXFCLENBQ2pCLENBQUMsSUFBSyxDQUFFZixNQUFPLFlBQWFDLEtBQU0scUJBQXNCSyxhQUFjLFFBQ3RFLENBQUMsWUFBYSxtQkFDZCxDQUFDLFlBQWEsbUJBQ2QsQ0FBQyxVQUFXLGtCQUNaLENBQUMsSUFBSyxhQUNOLENBQUMsY0FDRCxDQUFDLGVBQWdCLENBQUVOLE1BQU8sV0FBWUMsS0FBTSxVQUVoRGUsY0FBZSxDQUNYLENBQUMsV0FBWSxDQUFFaEIsTUFBTyxXQUFZQyxLQUFNLE9BQVFLLGFBQWMsU0FDOUQsQ0FBQyxRQUFTIiwiZmlsZSI6Ii4vY2h1bmsvMjEuYzliYzFmNWU2YjZhMjZjZjNlNGYuanMiLCJzb3VyY2VSb290IjoiIn0=