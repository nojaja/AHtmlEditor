(window.webpackJsonp=window.webpackJsonp||[]).push([[49],{465:function(e,n,o){"use strict";o.r(n),o.d(n,"conf",(function(){return t})),o.d(n,"language",(function(){return r}));var t={comments:{lineComment:"'"},brackets:[["(",")"],["[","]"],["If","EndIf"],["While","EndWhile"],["For","EndFor"],["Sub","EndSub"]],autoClosingPairs:[{open:'"',close:'"',notIn:["string","comment"]},{open:"(",close:")",notIn:["string","comment"]},{open:"[",close:"]",notIn:["string","comment"]}]},r={defaultToken:"",tokenPostfix:".sb",ignoreCase:!0,brackets:[{token:"delimiter.array",open:"[",close:"]"},{token:"delimiter.parenthesis",open:"(",close:")"},{token:"keyword.tag-if",open:"If",close:"EndIf"},{token:"keyword.tag-while",open:"While",close:"EndWhile"},{token:"keyword.tag-for",open:"For",close:"EndFor"},{token:"keyword.tag-sub",open:"Sub",close:"EndSub"}],keywords:["Else","ElseIf","EndFor","EndIf","EndSub","EndWhile","For","Goto","If","Step","Sub","Then","To","While"],tagwords:["If","Sub","While","For"],operators:[">","<","<>","<=",">=","And","Or","+","-","*","/","="],identifier:/[a-zA-Z_][\w]*/,symbols:/[=><:+\-*\/%\.,]+/,escapes:/\\(?:[abfnrtv\\"']|x[0-9A-Fa-f]{1,4}|u[0-9A-Fa-f]{4}|U[0-9A-Fa-f]{8})/,tokenizer:{root:[{include:"@whitespace"},[/(@identifier)(?=[.])/,"type"],[/@identifier/,{cases:{"@keywords":{token:"keyword.$0"},"@operators":"operator","@default":"variable.name"}}],[/([.])(@identifier)/,{cases:{$2:["delimiter","type.member"],"@default":""}}],[/\d*\.\d+/,"number.float"],[/\d+/,"number"],[/[()\[\]]/,"@brackets"],[/@symbols/,{cases:{"@operators":"operator","@default":"delimiter"}}],[/"([^"\\]|\\.)*$/,"string.invalid"],[/"/,"string","@string"]],whitespace:[[/[ \t\r\n]+/,""],[/(\').*$/,"comment"]],string:[[/[^\\"]+/,"string"],[/@escapes/,"string.escape"],[/\\./,"string.escape.invalid"],[/"C?/,"string","@pop"]]}}}}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vY2h1bmsvNDkuYWExMmYzYjQ0ZmRlM2E0MjY1MTkuanMiXSwibmFtZXMiOlsid2luZG93IiwicHVzaCIsIjQ2NSIsIm1vZHVsZSIsIl9fd2VicGFja19leHBvcnRzX18iLCJfX3dlYnBhY2tfcmVxdWlyZV9fIiwiciIsImQiLCJjb25mIiwibGFuZ3VhZ2UiLCJjb21tZW50cyIsImxpbmVDb21tZW50IiwiYnJhY2tldHMiLCJhdXRvQ2xvc2luZ1BhaXJzIiwib3BlbiIsImNsb3NlIiwibm90SW4iLCJkZWZhdWx0VG9rZW4iLCJ0b2tlblBvc3RmaXgiLCJpZ25vcmVDYXNlIiwidG9rZW4iLCJrZXl3b3JkcyIsInRhZ3dvcmRzIiwib3BlcmF0b3JzIiwiaWRlbnRpZmllciIsInN5bWJvbHMiLCJlc2NhcGVzIiwidG9rZW5pemVyIiwicm9vdCIsImluY2x1ZGUiLCJjYXNlcyIsIkBrZXl3b3JkcyIsIkBvcGVyYXRvcnMiLCJAZGVmYXVsdCIsIiQyIiwid2hpdGVzcGFjZSIsInN0cmluZyJdLCJtYXBwaW5ncyI6IkNBQUNBLE9BQXFCLGFBQUlBLE9BQXFCLGNBQUssSUFBSUMsS0FBSyxDQUFDLENBQUMsSUFBSSxDQUU3REMsSUFDQSxTQUFVQyxFQUFRQyxFQUFxQkMsR0FFN0MsYUFDQUEsRUFBb0JDLEVBQUVGLEdBQ1NDLEVBQW9CRSxFQUFFSCxFQUFxQixRQUFRLFdBQWEsT0FBT0ksS0FDdkVILEVBQW9CRSxFQUFFSCxFQUFxQixZQUFZLFdBQWEsT0FBT0ssS0FNMUcsSUFBSUQsRUFBTyxDQUNQRSxTQUFVLENBQ05DLFlBQWEsS0FFakJDLFNBQVUsQ0FDTixDQUFDLElBQUssS0FBTSxDQUFDLElBQUssS0FDbEIsQ0FBQyxLQUFNLFNBQ1AsQ0FBQyxRQUFTLFlBQ1YsQ0FBQyxNQUFPLFVBQ1IsQ0FBQyxNQUFPLFdBRVpDLGlCQUFrQixDQUNkLENBQUVDLEtBQU0sSUFBS0MsTUFBTyxJQUFLQyxNQUFPLENBQUMsU0FBVSxZQUMzQyxDQUFFRixLQUFNLElBQUtDLE1BQU8sSUFBS0MsTUFBTyxDQUFDLFNBQVUsWUFDM0MsQ0FBRUYsS0FBTSxJQUFLQyxNQUFPLElBQUtDLE1BQU8sQ0FBQyxTQUFVLGNBRy9DUCxFQUFXLENBQ1hRLGFBQWMsR0FDZEMsYUFBYyxNQUNkQyxZQUFZLEVBQ1pQLFNBQVUsQ0FDTixDQUFFUSxNQUFPLGtCQUFtQk4sS0FBTSxJQUFLQyxNQUFPLEtBQzlDLENBQUVLLE1BQU8sd0JBQXlCTixLQUFNLElBQUtDLE1BQU8sS0FFcEQsQ0FBRUssTUFBTyxpQkFBa0JOLEtBQU0sS0FBTUMsTUFBTyxTQUM5QyxDQUFFSyxNQUFPLG9CQUFxQk4sS0FBTSxRQUFTQyxNQUFPLFlBQ3BELENBQUVLLE1BQU8sa0JBQW1CTixLQUFNLE1BQU9DLE1BQU8sVUFDaEQsQ0FBRUssTUFBTyxrQkFBbUJOLEtBQU0sTUFBT0MsTUFBTyxXQUVwRE0sU0FBVSxDQUNOLE9BQVEsU0FBVSxTQUFVLFFBQVMsU0FBVSxXQUMvQyxNQUFPLE9BQVEsS0FBTSxPQUFRLE1BQU8sT0FBUSxLQUFNLFNBRXREQyxTQUFVLENBQ04sS0FBTSxNQUFPLFFBQVMsT0FFMUJDLFVBQVcsQ0FBQyxJQUFLLElBQUssS0FBTSxLQUFNLEtBQU0sTUFBTyxLQUFNLElBQUssSUFBSyxJQUFLLElBQUssS0FFekVDLFdBQVksaUJBQ1pDLFFBQVMsb0JBQ1RDLFFBQVMsd0VBRVRDLFVBQVcsQ0FDUEMsS0FBTSxDQUVGLENBQUVDLFFBQVMsZUFFWCxDQUFDLHVCQUF3QixRQUV6QixDQUFDLGNBQWUsQ0FDUkMsTUFBTyxDQUNIQyxZQUFhLENBQUVYLE1BQU8sY0FDdEJZLGFBQWMsV0FDZEMsV0FBWSxtQkFJeEIsQ0FBQyxxQkFBc0IsQ0FDZkgsTUFBTyxDQUNISSxHQUFNLENBQUMsWUFBYSxlQUNwQkQsV0FBWSxNQUl4QixDQUFDLFdBQVksZ0JBQ2IsQ0FBQyxNQUFPLFVBRVIsQ0FBQyxXQUFZLGFBQ2IsQ0FBQyxXQUFZLENBQ0xILE1BQU8sQ0FDSEUsYUFBYyxXQUNkQyxXQUFZLGVBSXhCLENBQUMsa0JBQW1CLGtCQUNwQixDQUFDLElBQUssU0FBVSxZQUVwQkUsV0FBWSxDQUNSLENBQUMsYUFBYyxJQUNmLENBQUMsVUFBVyxZQUVoQkMsT0FBUSxDQUNKLENBQUMsVUFBVyxVQUNaLENBQUMsV0FBWSxpQkFDYixDQUFDLE1BQU8seUJBQ1IsQ0FBQyxNQUFPLFNBQVUiLCJmaWxlIjoiLi9jaHVuay80OS5hYTEyZjNiNDRmZGUzYTQyNjUxOS5qcyIsInNvdXJjZVJvb3QiOiIifQ==