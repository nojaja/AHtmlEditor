(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{455:function(e,n,s){"use strict";s.r(n),s.d(n,"conf",(function(){return t})),s.d(n,"language",(function(){return o}));var t={wordPattern:/(-?\d*\.\d\w*)|([^\`\~\!\@\#%\^\&\*\(\)\=\+\[\{\]\}\\\|\;\:\'\"\,\.\<\>\/\?\s]+)/g,comments:{lineComment:"#",blockComment:["<#","#>"]},brackets:[["{","}"],["[","]"],["(",")"]],autoClosingPairs:[{open:"{",close:"}"},{open:"[",close:"]"},{open:"(",close:")"},{open:'"',close:'"',notIn:["string"]},{open:"'",close:"'",notIn:["string","comment"]}],surroundingPairs:[{open:"{",close:"}"},{open:"[",close:"]"},{open:"(",close:")"},{open:'"',close:'"'},{open:"'",close:"'"}],folding:{markers:{start:new RegExp("^\\s*#region\\b"),end:new RegExp("^\\s*#endregion\\b")}}},o={defaultToken:"",ignoreCase:!0,tokenPostfix:".ps1",brackets:[{token:"delimiter.curly",open:"{",close:"}"},{token:"delimiter.square",open:"[",close:"]"},{token:"delimiter.parenthesis",open:"(",close:")"}],keywords:["begin","break","catch","class","continue","data","define","do","dynamicparam","else","elseif","end","exit","filter","finally","for","foreach","from","function","if","in","param","process","return","switch","throw","trap","try","until","using","var","while","workflow","parallel","sequence","inlinescript","configuration"],helpKeywords:/SYNOPSIS|DESCRIPTION|PARAMETER|EXAMPLE|INPUTS|OUTPUTS|NOTES|LINK|COMPONENT|ROLE|FUNCTIONALITY|FORWARDHELPTARGETNAME|FORWARDHELPCATEGORY|REMOTEHELPRUNSPACE|EXTERNALHELP/,symbols:/[=><!~?&%|+\-*\/\^;\.,]+/,escapes:/`(?:[abfnrtv\\"'$]|x[0-9A-Fa-f]{1,4}|u[0-9A-Fa-f]{4}|U[0-9A-Fa-f]{8})/,tokenizer:{root:[[/[a-zA-Z_][\w-]*/,{cases:{"@keywords":{token:"keyword.$0"},"@default":""}}],[/[ \t\r\n]+/,""],[/^:\w*/,"metatag"],[/\$(\{((global|local|private|script|using):)?[\w]+\}|((global|local|private|script|using):)?[\w]+)/,"variable"],[/<#/,"comment","@comment"],[/#.*$/,"comment"],[/[{}()\[\]]/,"@brackets"],[/@symbols/,"delimiter"],[/\d*\.\d+([eE][\-+]?\d+)?/,"number.float"],[/0[xX][0-9a-fA-F_]*[0-9a-fA-F]/,"number.hex"],[/\d+?/,"number"],[/[;,.]/,"delimiter"],[/\@"/,"string",'@herestring."'],[/\@'/,"string","@herestring.'"],[/"/,{cases:{"@eos":"string","@default":{token:"string",next:'@string."'}}}],[/'/,{cases:{"@eos":"string","@default":{token:"string",next:"@string.'"}}}]],string:[[/[^"'\$`]+/,{cases:{"@eos":{token:"string",next:"@popall"},"@default":"string"}}],[/@escapes/,{cases:{"@eos":{token:"string.escape",next:"@popall"},"@default":"string.escape"}}],[/`./,{cases:{"@eos":{token:"string.escape.invalid",next:"@popall"},"@default":"string.escape.invalid"}}],[/\$[\w]+$/,{cases:{'$S2=="':{token:"variable",next:"@popall"},"@default":{token:"string",next:"@popall"}}}],[/\$[\w]+/,{cases:{'$S2=="':"variable","@default":"string"}}],[/["']/,{cases:{"$#==$S2":{token:"string",next:"@pop"},"@default":{cases:{"@eos":{token:"string",next:"@popall"},"@default":"string"}}}}]],herestring:[[/^\s*(["'])@/,{cases:{"$1==$S2":{token:"string",next:"@pop"},"@default":"string"}}],[/[^\$`]+/,"string"],[/@escapes/,"string.escape"],[/`./,"string.escape.invalid"],[/\$[\w]+/,{cases:{'$S2=="':"variable","@default":"string"}}]],comment:[[/[^#\.]+/,"comment"],[/#>/,"comment","@pop"],[/(\.)(@helpKeywords)(?!\w)/,{token:"comment.keyword.$2"}],[/[\.#]/,"comment"]]}}}}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vY2h1bmsvMzkuNTkxNGY1ODE3YzEzNTE0YzZmYzIuanMiXSwibmFtZXMiOlsid2luZG93IiwicHVzaCIsIjQ1NSIsIm1vZHVsZSIsIl9fd2VicGFja19leHBvcnRzX18iLCJfX3dlYnBhY2tfcmVxdWlyZV9fIiwiciIsImQiLCJjb25mIiwibGFuZ3VhZ2UiLCJ3b3JkUGF0dGVybiIsImNvbW1lbnRzIiwibGluZUNvbW1lbnQiLCJibG9ja0NvbW1lbnQiLCJicmFja2V0cyIsImF1dG9DbG9zaW5nUGFpcnMiLCJvcGVuIiwiY2xvc2UiLCJub3RJbiIsInN1cnJvdW5kaW5nUGFpcnMiLCJmb2xkaW5nIiwibWFya2VycyIsInN0YXJ0IiwiUmVnRXhwIiwiZW5kIiwiZGVmYXVsdFRva2VuIiwiaWdub3JlQ2FzZSIsInRva2VuUG9zdGZpeCIsInRva2VuIiwia2V5d29yZHMiLCJoZWxwS2V5d29yZHMiLCJzeW1ib2xzIiwiZXNjYXBlcyIsInRva2VuaXplciIsInJvb3QiLCJjYXNlcyIsIkBrZXl3b3JkcyIsIkBkZWZhdWx0IiwiQGVvcyIsIm5leHQiLCJzdHJpbmciLCIkUzI9PVwiIiwiJCM9PSRTMiIsImhlcmVzdHJpbmciLCIkMT09JFMyIiwiY29tbWVudCJdLCJtYXBwaW5ncyI6IkNBQUNBLE9BQXFCLGFBQUlBLE9BQXFCLGNBQUssSUFBSUMsS0FBSyxDQUFDLENBQUMsSUFBSSxDQUU3REMsSUFDQSxTQUFVQyxFQUFRQyxFQUFxQkMsR0FFN0MsYUFDQUEsRUFBb0JDLEVBQUVGLEdBQ1NDLEVBQW9CRSxFQUFFSCxFQUFxQixRQUFRLFdBQWEsT0FBT0ksS0FDdkVILEVBQW9CRSxFQUFFSCxFQUFxQixZQUFZLFdBQWEsT0FBT0ssS0FNMUcsSUFBSUQsRUFBTyxDQUVQRSxZQUFhLG9GQUNiQyxTQUFVLENBQ05DLFlBQWEsSUFDYkMsYUFBYyxDQUFDLEtBQU0sT0FFekJDLFNBQVUsQ0FDTixDQUFDLElBQUssS0FDTixDQUFDLElBQUssS0FDTixDQUFDLElBQUssTUFFVkMsaUJBQWtCLENBQ2QsQ0FBRUMsS0FBTSxJQUFLQyxNQUFPLEtBQ3BCLENBQUVELEtBQU0sSUFBS0MsTUFBTyxLQUNwQixDQUFFRCxLQUFNLElBQUtDLE1BQU8sS0FDcEIsQ0FBRUQsS0FBTSxJQUFLQyxNQUFPLElBQUtDLE1BQU8sQ0FBQyxXQUNqQyxDQUFFRixLQUFNLElBQU1DLE1BQU8sSUFBTUMsTUFBTyxDQUFDLFNBQVUsYUFFakRDLGlCQUFrQixDQUNkLENBQUVILEtBQU0sSUFBS0MsTUFBTyxLQUNwQixDQUFFRCxLQUFNLElBQUtDLE1BQU8sS0FDcEIsQ0FBRUQsS0FBTSxJQUFLQyxNQUFPLEtBQ3BCLENBQUVELEtBQU0sSUFBS0MsTUFBTyxLQUNwQixDQUFFRCxLQUFNLElBQU1DLE1BQU8sTUFFekJHLFFBQVMsQ0FDTEMsUUFBUyxDQUNMQyxNQUFPLElBQUlDLE9BQU8sbUJBQ2xCQyxJQUFLLElBQUlELE9BQU8seUJBSXhCZCxFQUFXLENBQ1hnQixhQUFjLEdBQ2RDLFlBQVksRUFDWkMsYUFBYyxPQUNkYixTQUFVLENBQ04sQ0FBRWMsTUFBTyxrQkFBbUJaLEtBQU0sSUFBS0MsTUFBTyxLQUM5QyxDQUFFVyxNQUFPLG1CQUFvQlosS0FBTSxJQUFLQyxNQUFPLEtBQy9DLENBQUVXLE1BQU8sd0JBQXlCWixLQUFNLElBQUtDLE1BQU8sTUFFeERZLFNBQVUsQ0FDTixRQUFTLFFBQVMsUUFBUyxRQUFTLFdBQVksT0FDaEQsU0FBVSxLQUFNLGVBQWdCLE9BQVEsU0FBVSxNQUNsRCxPQUFRLFNBQVUsVUFBVyxNQUFPLFVBQVcsT0FDL0MsV0FBWSxLQUFNLEtBQU0sUUFBUyxVQUFXLFNBQzVDLFNBQVUsUUFBUyxPQUFRLE1BQU8sUUFBUyxRQUMzQyxNQUFPLFFBQVMsV0FBWSxXQUFZLFdBQVksZUFBZ0IsaUJBRXhFQyxhQUFjLDBLQUVkQyxRQUFTLDJCQUNUQyxRQUFTLHdFQUVUQyxVQUFXLENBQ1BDLEtBQU0sQ0FFRixDQUFDLGtCQUFtQixDQUNaQyxNQUFPLENBQ0hDLFlBQWEsQ0FBRVIsTUFBTyxjQUN0QlMsV0FBWSxNQUl4QixDQUFDLGFBQWMsSUFFZixDQUFDLFFBQVMsV0FFVixDQUFDLG9HQUFxRyxZQUV0RyxDQUFDLEtBQU0sVUFBVyxZQUNsQixDQUFDLE9BQVEsV0FFVCxDQUFDLGFBQWMsYUFDZixDQUFDLFdBQVksYUFFYixDQUFDLDJCQUE0QixnQkFDN0IsQ0FBQyxnQ0FBaUMsY0FDbEMsQ0FBQyxPQUFRLFVBRVQsQ0FBQyxRQUFTLGFBRVYsQ0FBQyxNQUFPLFNBQVUsaUJBQ2xCLENBQUMsTUFBTyxTQUFVLGlCQUNsQixDQUFDLElBQUssQ0FDRUYsTUFBTyxDQUNIRyxPQUFRLFNBQ1JELFdBQVksQ0FBRVQsTUFBTyxTQUFVVyxLQUFNLGdCQUdqRCxDQUFDLElBQUssQ0FDRUosTUFBTyxDQUNIRyxPQUFRLFNBQ1JELFdBQVksQ0FBRVQsTUFBTyxTQUFVVyxLQUFNLGlCQUlyREMsT0FBUSxDQUNKLENBQUMsWUFBYSxDQUNOTCxNQUFPLENBQ0hHLE9BQVEsQ0FBRVYsTUFBTyxTQUFVVyxLQUFNLFdBQ2pDRixXQUFZLFlBR3hCLENBQUMsV0FBWSxDQUNMRixNQUFPLENBQ0hHLE9BQVEsQ0FBRVYsTUFBTyxnQkFBaUJXLEtBQU0sV0FDeENGLFdBQVksbUJBR3hCLENBQUMsS0FBTSxDQUNDRixNQUFPLENBQ0hHLE9BQVEsQ0FBRVYsTUFBTyx3QkFBeUJXLEtBQU0sV0FDaERGLFdBQVksMkJBR3hCLENBQUMsV0FBWSxDQUNMRixNQUFPLENBQ0hNLFNBQVUsQ0FBRWIsTUFBTyxXQUFZVyxLQUFNLFdBQ3JDRixXQUFZLENBQUVULE1BQU8sU0FBVVcsS0FBTSxjQUdqRCxDQUFDLFVBQVcsQ0FDSkosTUFBTyxDQUNITSxTQUFVLFdBQ1ZKLFdBQVksWUFHeEIsQ0FBQyxPQUFRLENBQ0RGLE1BQU8sQ0FDSE8sVUFBVyxDQUFFZCxNQUFPLFNBQVVXLEtBQU0sUUFDcENGLFdBQVksQ0FDUkYsTUFBTyxDQUNIRyxPQUFRLENBQUVWLE1BQU8sU0FBVVcsS0FBTSxXQUNqQ0YsV0FBWSxlQU1wQ00sV0FBWSxDQUNSLENBQUMsY0FBZSxDQUNSUixNQUFPLENBQ0hTLFVBQVcsQ0FBRWhCLE1BQU8sU0FBVVcsS0FBTSxRQUNwQ0YsV0FBWSxZQUd4QixDQUFDLFVBQVcsVUFDWixDQUFDLFdBQVksaUJBQ2IsQ0FBQyxLQUFNLHlCQUNQLENBQUMsVUFBVyxDQUNKRixNQUFPLENBQ0hNLFNBQVUsV0FDVkosV0FBWSxhQUk1QlEsUUFBUyxDQUNMLENBQUMsVUFBVyxXQUNaLENBQUMsS0FBTSxVQUFXLFFBQ2xCLENBQUMsNEJBQTZCLENBQUVqQixNQUFPLHVCQUN2QyxDQUFDLFFBQVMiLCJmaWxlIjoiLi9jaHVuay8zOS41OTE0ZjU4MTdjMTM1MTRjNmZjMi5qcyIsInNvdXJjZVJvb3QiOiIifQ==