(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{438:function(e,n,s){"use strict";s.r(n),s.d(n,"conf",(function(){return o})),s.d(n,"language",(function(){return t}));var o={comments:{lineComment:"#"},brackets:[["{","}"],["[","]"],["(",")"]],autoClosingPairs:[{open:"{",close:"}"},{open:"[",close:"]"},{open:"(",close:")"},{open:'"',close:'"'},{open:"'",close:"'"}],surroundingPairs:[{open:"{",close:"}"},{open:"[",close:"]"},{open:"(",close:")"},{open:'"',close:'"'},{open:"'",close:"'"}]},t={defaultToken:"",tokenPostfix:".ini",escapes:/\\(?:[abfnrtv\\"']|x[0-9A-Fa-f]{1,4}|u[0-9A-Fa-f]{4}|U[0-9A-Fa-f]{8})/,tokenizer:{root:[[/^\[[^\]]*\]/,"metatag"],[/(^\w+)(\s*)(\=)/,["key","","delimiter"]],{include:"@whitespace"},[/\d+/,"number"],[/"([^"\\]|\\.)*$/,"string.invalid"],[/'([^'\\]|\\.)*$/,"string.invalid"],[/"/,"string",'@string."'],[/'/,"string","@string.'"]],whitespace:[[/[ \t\r\n]+/,""],[/^\s*[#;].*$/,"comment"]],string:[[/[^\\"']+/,"string"],[/@escapes/,"string.escape"],[/\\./,"string.escape.invalid"],[/["']/,{cases:{"$#==$S2":{token:"string",next:"@pop"},"@default":"string"}}]]}}}}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vY2h1bmsvMjIuMGU4Y2JhNjBhYjE3MWYzZTMzMWEuanMiXSwibmFtZXMiOlsid2luZG93IiwicHVzaCIsIjQzOCIsIm1vZHVsZSIsIl9fd2VicGFja19leHBvcnRzX18iLCJfX3dlYnBhY2tfcmVxdWlyZV9fIiwiciIsImQiLCJjb25mIiwibGFuZ3VhZ2UiLCJjb21tZW50cyIsImxpbmVDb21tZW50IiwiYnJhY2tldHMiLCJhdXRvQ2xvc2luZ1BhaXJzIiwib3BlbiIsImNsb3NlIiwic3Vycm91bmRpbmdQYWlycyIsImRlZmF1bHRUb2tlbiIsInRva2VuUG9zdGZpeCIsImVzY2FwZXMiLCJ0b2tlbml6ZXIiLCJyb290IiwiaW5jbHVkZSIsIndoaXRlc3BhY2UiLCJzdHJpbmciLCJjYXNlcyIsIiQjPT0kUzIiLCJ0b2tlbiIsIm5leHQiLCJAZGVmYXVsdCJdLCJtYXBwaW5ncyI6IkNBQUNBLE9BQXFCLGFBQUlBLE9BQXFCLGNBQUssSUFBSUMsS0FBSyxDQUFDLENBQUMsSUFBSSxDQUU3REMsSUFDQSxTQUFVQyxFQUFRQyxFQUFxQkMsR0FFN0MsYUFDQUEsRUFBb0JDLEVBQUVGLEdBQ1NDLEVBQW9CRSxFQUFFSCxFQUFxQixRQUFRLFdBQWEsT0FBT0ksS0FDdkVILEVBQW9CRSxFQUFFSCxFQUFxQixZQUFZLFdBQWEsT0FBT0ssS0FNMUcsSUFBSUQsRUFBTyxDQUNQRSxTQUFVLENBQ05DLFlBQWEsS0FFakJDLFNBQVUsQ0FDTixDQUFDLElBQUssS0FDTixDQUFDLElBQUssS0FDTixDQUFDLElBQUssTUFFVkMsaUJBQWtCLENBQ2QsQ0FBRUMsS0FBTSxJQUFLQyxNQUFPLEtBQ3BCLENBQUVELEtBQU0sSUFBS0MsTUFBTyxLQUNwQixDQUFFRCxLQUFNLElBQUtDLE1BQU8sS0FDcEIsQ0FBRUQsS0FBTSxJQUFLQyxNQUFPLEtBQ3BCLENBQUVELEtBQU0sSUFBTUMsTUFBTyxNQUV6QkMsaUJBQWtCLENBQ2QsQ0FBRUYsS0FBTSxJQUFLQyxNQUFPLEtBQ3BCLENBQUVELEtBQU0sSUFBS0MsTUFBTyxLQUNwQixDQUFFRCxLQUFNLElBQUtDLE1BQU8sS0FDcEIsQ0FBRUQsS0FBTSxJQUFLQyxNQUFPLEtBQ3BCLENBQUVELEtBQU0sSUFBTUMsTUFBTyxPQUd6Qk4sRUFBVyxDQUNYUSxhQUFjLEdBQ2RDLGFBQWMsT0FFZEMsUUFBUyx3RUFFVEMsVUFBVyxDQUNQQyxLQUFNLENBRUYsQ0FBQyxjQUFlLFdBRWhCLENBQUMsa0JBQW1CLENBQUMsTUFBTyxHQUFJLGNBRWhDLENBQUVDLFFBQVMsZUFFWCxDQUFDLE1BQU8sVUFFUixDQUFDLGtCQUFtQixrQkFDcEIsQ0FBQyxrQkFBbUIsa0JBQ3BCLENBQUMsSUFBSyxTQUFVLGFBQ2hCLENBQUMsSUFBSyxTQUFVLGNBRXBCQyxXQUFZLENBQ1IsQ0FBQyxhQUFjLElBQ2YsQ0FBQyxjQUFlLFlBRXBCQyxPQUFRLENBQ0osQ0FBQyxXQUFZLFVBQ2IsQ0FBQyxXQUFZLGlCQUNiLENBQUMsTUFBTyx5QkFDUixDQUFDLE9BQVEsQ0FDREMsTUFBTyxDQUNIQyxVQUFXLENBQUVDLE1BQU8sU0FBVUMsS0FBTSxRQUNwQ0MsV0FBWSIsImZpbGUiOiIuL2NodW5rLzIyLjBlOGNiYTYwYWIxNzFmM2UzMzFhLmpzIiwic291cmNlUm9vdCI6IiJ9