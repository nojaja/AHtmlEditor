(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[51],{

/***/ "../node_modules/monaco-editor/esm/vs/basic-languages/scss/scss.js":
/*!*************************************************************************!*\
  !*** ../node_modules/monaco-editor/esm/vs/basic-languages/scss/scss.js ***!
  \*************************************************************************/
/*! exports provided: conf, language */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "conf", function() { return conf; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "language", function() { return language; });
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

var conf = {
    wordPattern: /(#?-?\d*\.\d\w*%?)|([@$#!.:]?[\w-?]+%?)|[@#!.]/g,
    comments: {
        blockComment: ['/*', '*/'],
        lineComment: '//'
    },
    brackets: [
        ['{', '}'],
        ['[', ']'],
        ['(', ')']
    ],
    autoClosingPairs: [
        { open: '{', close: '}', notIn: ['string', 'comment'] },
        { open: '[', close: ']', notIn: ['string', 'comment'] },
        { open: '(', close: ')', notIn: ['string', 'comment'] },
        { open: '"', close: '"', notIn: ['string', 'comment'] },
        { open: '\'', close: '\'', notIn: ['string', 'comment'] },
    ],
    surroundingPairs: [
        { open: '{', close: '}' },
        { open: '[', close: ']' },
        { open: '(', close: ')' },
        { open: '"', close: '"' },
        { open: '\'', close: '\'' },
    ],
    folding: {
        markers: {
            start: new RegExp("^\\s*\\/\\*\\s*#region\\b\\s*(.*?)\\s*\\*\\/"),
            end: new RegExp("^\\s*\\/\\*\\s*#endregion\\b.*\\*\\/")
        }
    }
};
var language = {
    defaultToken: '',
    tokenPostfix: '.scss',
    ws: '[ \t\n\r\f]*',
    identifier: '-?-?([a-zA-Z]|(\\\\(([0-9a-fA-F]{1,6}\\s?)|[^[0-9a-fA-F])))([\\w\\-]|(\\\\(([0-9a-fA-F]{1,6}\\s?)|[^[0-9a-fA-F])))*',
    brackets: [
        { open: '{', close: '}', token: 'delimiter.curly' },
        { open: '[', close: ']', token: 'delimiter.bracket' },
        { open: '(', close: ')', token: 'delimiter.parenthesis' },
        { open: '<', close: '>', token: 'delimiter.angle' }
    ],
    tokenizer: {
        root: [
            { include: '@selector' },
        ],
        selector: [
            { include: '@comments' },
            { include: '@import' },
            { include: '@variabledeclaration' },
            { include: '@warndebug' },
            ['[@](include)', { token: 'keyword', next: '@includedeclaration' }],
            ['[@](keyframes|-webkit-keyframes|-moz-keyframes|-o-keyframes)', { token: 'keyword', next: '@keyframedeclaration' }],
            ['[@](page|content|font-face|-moz-document)', { token: 'keyword' }],
            ['[@](charset|namespace)', { token: 'keyword', next: '@declarationbody' }],
            ['[@](function)', { token: 'keyword', next: '@functiondeclaration' }],
            ['[@](mixin)', { token: 'keyword', next: '@mixindeclaration' }],
            ['url(\\-prefix)?\\(', { token: 'meta', next: '@urldeclaration' }],
            { include: '@controlstatement' },
            { include: '@selectorname' },
            ['[&\\*]', 'tag'],
            ['[>\\+,]', 'delimiter'],
            ['\\[', { token: 'delimiter.bracket', next: '@selectorattribute' }],
            ['{', { token: 'delimiter.curly', next: '@selectorbody' }],
        ],
        selectorbody: [
            ['[*_]?@identifier@ws:(?=(\\s|\\d|[^{;}]*[;}]))', 'attribute.name', '@rulevalue'],
            { include: '@selector' },
            ['[@](extend)', { token: 'keyword', next: '@extendbody' }],
            ['[@](return)', { token: 'keyword', next: '@declarationbody' }],
            ['}', { token: 'delimiter.curly', next: '@pop' }],
        ],
        selectorname: [
            ['#{', { token: 'meta', next: '@variableinterpolation' }],
            ['(\\.|#(?=[^{])|%|(@identifier)|:)+', 'tag'],
        ],
        selectorattribute: [
            { include: '@term' },
            [']', { token: 'delimiter.bracket', next: '@pop' }],
        ],
        term: [
            { include: '@comments' },
            ['url(\\-prefix)?\\(', { token: 'meta', next: '@urldeclaration' }],
            { include: '@functioninvocation' },
            { include: '@numbers' },
            { include: '@strings' },
            { include: '@variablereference' },
            ['(and\\b|or\\b|not\\b)', 'operator'],
            { include: '@name' },
            ['([<>=\\+\\-\\*\\/\\^\\|\\~,])', 'operator'],
            [',', 'delimiter'],
            ['!default', 'literal'],
            ['\\(', { token: 'delimiter.parenthesis', next: '@parenthizedterm' }],
        ],
        rulevalue: [
            { include: '@term' },
            ['!important', 'literal'],
            [';', 'delimiter', '@pop'],
            ['{', { token: 'delimiter.curly', switchTo: '@nestedproperty' }],
            ['(?=})', { token: '', next: '@pop' }],
        ],
        nestedproperty: [
            ['[*_]?@identifier@ws:', 'attribute.name', '@rulevalue'],
            { include: '@comments' },
            ['}', { token: 'delimiter.curly', next: '@pop' }],
        ],
        warndebug: [
            ['[@](warn|debug)', { token: 'keyword', next: '@declarationbody' }],
        ],
        import: [
            ['[@](import)', { token: 'keyword', next: '@declarationbody' }],
        ],
        variabledeclaration: [
            ['\\$@identifier@ws:', 'variable.decl', '@declarationbody'],
        ],
        urldeclaration: [
            { include: '@strings' },
            ['[^)\r\n]+', 'string'],
            ['\\)', { token: 'meta', next: '@pop' }],
        ],
        parenthizedterm: [
            { include: '@term' },
            ['\\)', { token: 'delimiter.parenthesis', next: '@pop' }],
        ],
        declarationbody: [
            { include: '@term' },
            [';', 'delimiter', '@pop'],
            ['(?=})', { token: '', next: '@pop' }],
        ],
        extendbody: [
            { include: '@selectorname' },
            ['!optional', 'literal'],
            [';', 'delimiter', '@pop'],
            ['(?=})', { token: '', next: '@pop' }],
        ],
        variablereference: [
            ['\\$@identifier', 'variable.ref'],
            ['\\.\\.\\.', 'operator'],
            ['#{', { token: 'meta', next: '@variableinterpolation' }],
        ],
        variableinterpolation: [
            { include: '@variablereference' },
            ['}', { token: 'meta', next: '@pop' }],
        ],
        comments: [
            ['\\/\\*', 'comment', '@comment'],
            ['\\/\\/+.*', 'comment'],
        ],
        comment: [
            ['\\*\\/', 'comment', '@pop'],
            ['.', 'comment'],
        ],
        name: [
            ['@identifier', 'attribute.value'],
        ],
        numbers: [
            ['(\\d*\\.)?\\d+([eE][\\-+]?\\d+)?', { token: 'number', next: '@units' }],
            ['#[0-9a-fA-F_]+(?!\\w)', 'number.hex'],
        ],
        units: [
            ['(em|ex|ch|rem|vmin|vmax|vw|vh|vm|cm|mm|in|px|pt|pc|deg|grad|rad|turn|s|ms|Hz|kHz|%)?', 'number', '@pop']
        ],
        functiondeclaration: [
            ['@identifier@ws\\(', { token: 'meta', next: '@parameterdeclaration' }],
            ['{', { token: 'delimiter.curly', switchTo: '@functionbody' }],
        ],
        mixindeclaration: [
            // mixin with parameters
            ['@identifier@ws\\(', { token: 'meta', next: '@parameterdeclaration' }],
            // mixin without parameters
            ['@identifier', 'meta'],
            ['{', { token: 'delimiter.curly', switchTo: '@selectorbody' }],
        ],
        parameterdeclaration: [
            ['\\$@identifier@ws:', 'variable.decl'],
            ['\\.\\.\\.', 'operator'],
            [',', 'delimiter'],
            { include: '@term' },
            ['\\)', { token: 'meta', next: '@pop' }],
        ],
        includedeclaration: [
            { include: '@functioninvocation' },
            ['@identifier', 'meta'],
            [';', 'delimiter', '@pop'],
            ['(?=})', { token: '', next: '@pop' }],
            ['{', { token: 'delimiter.curly', switchTo: '@selectorbody' }],
        ],
        keyframedeclaration: [
            ['@identifier', 'meta'],
            ['{', { token: 'delimiter.curly', switchTo: '@keyframebody' }],
        ],
        keyframebody: [
            { include: '@term' },
            ['{', { token: 'delimiter.curly', next: '@selectorbody' }],
            ['}', { token: 'delimiter.curly', next: '@pop' }],
        ],
        controlstatement: [
            ['[@](if|else|for|while|each|media)', { token: 'keyword.flow', next: '@controlstatementdeclaration' }],
        ],
        controlstatementdeclaration: [
            ['(in|from|through|if|to)\\b', { token: 'keyword.flow' }],
            { include: '@term' },
            ['{', { token: 'delimiter.curly', switchTo: '@selectorbody' }],
        ],
        functionbody: [
            ['[@](return)', { token: 'keyword' }],
            { include: '@variabledeclaration' },
            { include: '@term' },
            { include: '@controlstatement' },
            [';', 'delimiter'],
            ['}', { token: 'delimiter.curly', next: '@pop' }],
        ],
        functioninvocation: [
            ['@identifier\\(', { token: 'meta', next: '@functionarguments' }],
        ],
        functionarguments: [
            ['\\$@identifier@ws:', 'attribute.name'],
            ['[,]', 'delimiter'],
            { include: '@term' },
            ['\\)', { token: 'meta', next: '@pop' }],
        ],
        strings: [
            ['~?"', { token: 'string.delimiter', next: '@stringenddoublequote' }],
            ['~?\'', { token: 'string.delimiter', next: '@stringendquote' }]
        ],
        stringenddoublequote: [
            ['\\\\.', 'string'],
            ['"', { token: 'string.delimiter', next: '@pop' }],
            ['.', 'string']
        ],
        stringendquote: [
            ['\\\\.', 'string'],
            ['\'', { token: 'string.delimiter', next: '@pop' }],
            ['.', 'string']
        ]
    }
};


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL21vbmFjby1lZGl0b3IvZXNtL3ZzL2Jhc2ljLWxhbmd1YWdlcy9zY3NzL3Njc3MuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ2E7QUFDTjtBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsV0FBVyxLQUFLO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUyxTQUFTLFlBQVksaUNBQWlDO0FBQy9ELFNBQVMsc0RBQXNEO0FBQy9ELFNBQVMsc0RBQXNEO0FBQy9ELFNBQVMsc0RBQXNEO0FBQy9ELFNBQVMsd0RBQXdEO0FBQ2pFO0FBQ0E7QUFDQSxTQUFTLFNBQVMsWUFBWSxHQUFHO0FBQ2pDLFNBQVMsd0JBQXdCO0FBQ2pDLFNBQVMsd0JBQXdCO0FBQ2pDLFNBQVMsd0JBQXdCO0FBQ2pDLFNBQVMsMEJBQTBCO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBLGtEQUFrRCxJQUFJLG1EQUFtRCxJQUFJO0FBQzdHO0FBQ0EsU0FBUyxTQUFTLFlBQVksNkJBQTZCO0FBQzNELFNBQVMsb0RBQW9EO0FBQzdELFNBQVMsd0RBQXdEO0FBQ2pFLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxhQUFhLHVCQUF1QjtBQUNwQztBQUNBO0FBQ0EsYUFBYSx1QkFBdUI7QUFDcEMsYUFBYSxxQkFBcUI7QUFDbEMsYUFBYSxrQ0FBa0M7QUFDL0MsYUFBYSx3QkFBd0I7QUFDckMsOEJBQThCLGdEQUFnRDtBQUM5RSw4RUFBOEUsaURBQWlEO0FBQy9ILDJEQUEyRCxtQkFBbUI7QUFDOUUsd0NBQXdDLDZDQUE2QztBQUNyRiwrQkFBK0IsaURBQWlEO0FBQ2hGLDRCQUE0Qiw4Q0FBOEM7QUFDMUUsb0NBQW9DLHlDQUF5QztBQUM3RSxhQUFhLCtCQUEr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QThCO0FBQ25EO0FBQ0E7QUFDQSxxQkFBcUIsMkRBQTJEO0FBQ2hGLHNCQUFzQixxREFBcUQ7QUFDM0U7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLDBDQUEwQztBQUM3RDtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQiwwQ0FBMEM7QUFDOUQ7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiLi9qcy81MS5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gKiAgQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbiAqICBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuIFNlZSBMaWNlbnNlLnR4dCBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxyXG4gKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cclxuJ3VzZSBzdHJpY3QnO1xyXG5leHBvcnQgdmFyIGNvbmYgPSB7XHJcbiAgICB3b3JkUGF0dGVybjogLygjPy0/XFxkKlxcLlxcZFxcdyolPyl8KFtAJCMhLjpdP1tcXHctP10rJT8pfFtAIyEuXS9nLFxyXG4gICAgY29tbWVudHM6IHtcclxuICAgICAgICBibG9ja0NvbW1lbnQ6IFsnLyonLCAnKi8nXSxcclxuICAgICAgICBsaW5lQ29tbWVudDogJy8vJ1xyXG4gICAgfSxcclxuICAgIGJyYWNrZXRzOiBbXHJcbiAgICAgICAgWyd7JywgJ30nXSxcclxuICAgICAgICBbJ1snLCAnXSddLFxyXG4gICAgICAgIFsnKCcsICcpJ11cclxuICAgIF0sXHJcbiAgICBhdXRvQ2xvc2luZ1BhaXJzOiBbXHJcbiAgICAgICAgeyBvcGVuOiAneycsIGNsb3NlOiAnfScsIG5vdEluOiBbJ3N0cmluZycsICdjb21tZW50J10gfSxcclxuICAgICAgICB7IG9wZW46ICdbJywgY2xvc2U6ICddJywgbm90SW46IFsnc3RyaW5nJywgJ2NvbW1lbnQnXSB9LFxyXG4gICAgICAgIHsgb3BlbjogJygnLCBjbG9zZTogJyknLCBub3RJbjogWydzdHJpbmcnLCAnY29tbWVudCddIH0sXHJcbiAgICAgICAgeyBvcGVuOiAnXCInLCBjbG9zZTogJ1wiJywgbm90SW46IFsnc3RyaW5nJywgJ2NvbW1lbnQnXSB9LFxyXG4gICAgICAgIHsgb3BlbjogJ1xcJycsIGNsb3NlOiAnXFwnJywgbm90SW46IFsnc3RyaW5nJywgJ2NvbW1lbnQnXSB9LFxyXG4gICAgXSxcclxuICAgIHN1cnJvdW5kaW5nUGFpcnM6IFtcclxuICAgICAgICB7IG9wZW46ICd7JywgY2xvc2U6ICd9JyB9LFxyXG4gICAgICAgIHsgb3BlbjogJ1snLCBjbG9zZTogJ10nIH0sXHJcbiAgICAgICAgeyBvcGVuOiAnKCcsIGNsb3NlOiAnKScgfSxcclxuICAgICAgICB7IG9wZW46ICdcIicsIGNsb3NlOiAnXCInIH0sXHJcbiAgICAgICAgeyBvcGVuOiAnXFwnJywgY2xvc2U6ICdcXCcnIH0sXHJcbiAgICBdLFxyXG4gICAgZm9sZGluZzoge1xyXG4gICAgICAgIG1hcmtlcnM6IHtcclxuICAgICAgICAgICAgc3RhcnQ6IG5ldyBSZWdFeHAoXCJeXFxcXHMqXFxcXC9cXFxcKlxcXFxzKiNyZWdpb25cXFxcYlxcXFxzKiguKj8pXFxcXHMqXFxcXCpcXFxcL1wiKSxcclxuICAgICAgICAgICAgZW5kOiBuZXcgUmVnRXhwKFwiXlxcXFxzKlxcXFwvXFxcXCpcXFxccyojZW5kcmVnaW9uXFxcXGIuKlxcXFwqXFxcXC9cIilcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn07XHJcbmV4cG9ydCB2YXIgbGFuZ3VhZ2UgPSB7XHJcbiAgICBkZWZhdWx0VG9rZW46ICcnLFxyXG4gICAgdG9rZW5Qb3N0Zml4OiAnLnNjc3MnLFxyXG4gICAgd3M6ICdbIFxcdFxcblxcclxcZl0qJyxcclxuICAgIGlkZW50aWZpZXI6ICctPy0/KFthLXpBLVpdfChcXFxcXFxcXCgoWzAtOWEtZkEtRl17MSw2fVxcXFxzPyl8W15bMC05YS1mQS1GXSkpKShbXFxcXHdcXFxcLV18KFxcXFxcXFxcKChbMC05YS1mQS1GXXsxLDZ9XFxcXHM/KXxbXlswLTlhLWZBLUZdKSkpKicsXHJcbiAgICBicmFja2V0czogW1xyXG4gICAgICAgIHsgb3BlbjogJ3snLCBjbG9zZTogJ30nLCB0b2tlbjogJ2RlbGltaXRlci5jdXJseScgfSxcclxuICAgICAgICB7IG9wZW46ICdbJywgY2xvc2U6ICddJywgdG9rZW46ICdkZWxpbWl0ZXIuYnJhY2tldCcgfSxcclxuICAgICAgICB7IG9wZW46ICcoJywgY2xvc2U6ICcpJywgdG9rZW46ICdkZWxpbWl0ZXIucGFyZW50aGVzaXMnIH0sXHJcbiAgICAgICAgeyBvcGVuOiAnPCcsIGNsb3NlOiAnPicsIHRva2VuOiAnZGVsaW1pdGVyLmFuZ2xlJyB9XHJcbiAgICBdLFxyXG4gICAgdG9rZW5pemVyOiB7XHJcbiAgICAgICAgcm9vdDogW1xyXG4gICAgICAgICAgICB7IGluY2x1ZGU6ICdAc2VsZWN0b3InIH0sXHJcbiAgICAgICAgXSxcclxuICAgICAgICBzZWxlY3RvcjogW1xyXG4gICAgICAgICAgICB7IGluY2x1ZGU6ICdAY29tbWVudHMnIH0sXHJcbiAgICAgICAgICAgIHsgaW5jbHVkZTogJ0BpbXBvcnQnIH0sXHJcbiAgICAgICAgICAgIHsgaW5jbHVkZTogJ0B2YXJpYWJsZWRlY2xhcmF0aW9uJyB9LFxyXG4gICAgICAgICAgICB7IGluY2x1ZGU6ICdAd2FybmRlYnVnJyB9LFxyXG4gICAgICAgICAgICBbJ1tAXShpbmNsdWRlKScsIHsgdG9rZW46ICdrZXl3b3JkJywgbmV4dDogJ0BpbmNsdWRlZGVjbGFyYXRpb24nIH1dLFxyXG4gICAgICAgICAgICBbJ1tAXShrZXlmcmFtZXN8LXdlYmtpdC1rZXlmcmFtZXN8LW1vei1rZXlmcmFtZXN8LW8ta2V5ZnJhbWVzKScsIHsgdG9rZW46ICdrZXl3b3JkJywgbmV4dDogJ0BrZXlmcmFtZWRlY2xhcmF0aW9uJyB9XSxcclxuICAgICAgICAgICAgWydbQF0ocGFnZXxjb250ZW50fGZvbnQtZmFjZXwtbW96LWRvY3VtZW50KScsIHsgdG9rZW46ICdrZXl3b3JkJyB9XSxcclxuICAgICAgICAgICAgWydbQF0oY2hhcnNldHxuYW1lc3BhY2UpJywgeyB0b2tlbjogJ2tleXdvcmQnLCBuZXh0OiAnQGRlY2xhcmF0aW9uYm9keScgfV0sXHJcbiAgICAgICAgICAgIFsnW0BdKGZ1bmN0aW9uKScsIHsgdG9rZW46ICdrZXl3b3JkJywgbmV4dDogJ0BmdW5jdGlvbmRlY2xhcmF0aW9uJyB9XSxcclxuICAgICAgICAgICAgWydbQF0obWl4aW4pJywgeyB0b2tlbjogJ2tleXdvcmQnLCBuZXh0OiAnQG1peGluZGVjbGFyYXRpb24nIH1dLFxyXG4gICAgICAgICAgICBbJ3VybChcXFxcLXByZWZpeCk/XFxcXCgnLCB7IHRva2VuOiAnbWV0YScsIG5leHQ6ICdAdXJsZGVjbGFyYXRpb24nIH1dLFxyXG4gICAgICAgICAgICB7IGluY2x1ZGU6ICdAY29udHJvbHN0YXRlbWVudCcgfSxcclxuICAgICAgICAgICAgeyBpbmNsdWRlOiAnQHNlbGVjdG9ybmFtZScgfSxcclxuICAgICAgICAgICAgWydbJlxcXFwqXScsICd0YWcnXSxcclxuICAgICAgICAgICAgWydbPlxcXFwrLF0nLCAnZGVsaW1pdGVyJ10sXHJcbiAgICAgICAgICAgIFsnXFxcXFsnLCB7IHRva2VuOiAnZGVsaW1pdGVyLmJyYWNrZXQnLCBuZXh0OiAnQHNlbGVjdG9yYXR0cmlidXRlJyB9XSxcclxuICAgICAgICAgICAgWyd7JywgeyB0b2tlbjogJ2RlbGltaXRlci5jdXJseScsIG5leHQ6ICdAc2VsZWN0b3Jib2R5JyB9XSxcclxuICAgICAgICBdLFxyXG4gICAgICAgIHNlbGVjdG9yYm9keTogW1xyXG4gICAgICAgICAgICBbJ1sqX10/QGlkZW50aWZpZXJAd3M6KD89KFxcXFxzfFxcXFxkfFteezt9XSpbO31dKSknLCAnYXR0cmlidXRlLm5hbWUnLCAnQHJ1bGV2YWx1ZSddLFxyXG4gICAgICAgICAgICB7IGluY2x1ZGU6ICdAc2VsZWN0b3InIH0sXHJcbiAgICAgICAgICAgIFsnW0BdKGV4dGVuZCknLCB7IHRva2VuOiAna2V5d29yZCcsIG5leHQ6ICdAZXh0ZW5kYm9keScgfV0sXHJcbiAgICAgICAgICAgIFsnW0BdKHJldHVybiknLCB7IHRva2VuOiAna2V5d29yZCcsIG5leHQ6ICdAZGVjbGFyYXRpb25ib2R5JyB9XSxcclxuICAgICAgICAgICAgWyd9JywgeyB0b2tlbjogJ2RlbGltaXRlci5jdXJseScsIG5leHQ6ICdAcG9wJyB9XSxcclxuICAgICAgICBdLFxyXG4gICAgICAgIHNlbGVjdG9ybmFtZTogW1xyXG4gICAgICAgICAgICBbJyN7JywgeyB0b2tlbjogJ21ldGEnLCBuZXh0OiAnQHZhcmlhYmxlaW50ZXJwb2xhdGlvbicgfV0sXHJcbiAgICAgICAgICAgIFsnKFxcXFwufCMoPz1bXntdKXwlfChAaWRlbnRpZmllcil8OikrJywgJ3RhZyddLFxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgc2VsZWN0b3JhdHRyaWJ1dGU6IFtcclxuICAgICAgICAgICAgeyBpbmNsdWRlOiAnQHRlcm0nIH0sXHJcbiAgICAgICAgICAgIFsnXScsIHsgdG9rZW46ICdkZWxpbWl0ZXIuYnJhY2tldCcsIG5leHQ6ICdAcG9wJyB9XSxcclxuICAgICAgICBdLFxyXG4gICAgICAgIHRlcm06IFtcclxuICAgICAgICAgICAgeyBpbmNsdWRlOiAnQGNvbW1lbnRzJyB9LFxyXG4gICAgICAgICAgICBbJ3VybChcXFxcLXByZWZpeCk/XFxcXCgnLCB7IHRva2VuOiAnbWV0YScsIG5leHQ6ICdAdXJsZGVjbGFyYXRpb24nIH1dLFxyXG4gICAgICAgICAgICB7IGluY2x1ZGU6ICdAZnVuY3Rpb25pbnZvY2F0aW9uJyB9LFxyXG4gICAgICAgICAgICB7IGluY2x1ZGU6ICdAbnVtYmVycycgfSxcclxuICAgICAgICAgICAgeyBpbmNsdWRlOiAnQHN0cmluZ3MnIH0sXHJcbiAgICAgICAgICAgIHsgaW5jbHVkZTogJ0B2YXJpYWJsZXJlZmVyZW5jZScgfSxcclxuICAgICAgICAgICAgWycoYW5kXFxcXGJ8b3JcXFxcYnxub3RcXFxcYiknLCAnb3BlcmF0b3InXSxcclxuICAgICAgICAgICAgeyBpbmNsdWRlOiAnQG5hbWUnIH0sXHJcbiAgICAgICAgICAgIFsnKFs8Pj1cXFxcK1xcXFwtXFxcXCpcXFxcL1xcXFxeXFxcXHxcXFxcfixdKScsICdvcGVyYXRvciddLFxyXG4gICAgICAgICAgICBbJywnLCAnZGVsaW1pdGVyJ10sXHJcbiAgICAgICAgICAgIFsnIWRlZmF1bHQnLCAnbGl0ZXJhbCddLFxyXG4gICAgICAgICAgICBbJ1xcXFwoJywgeyB0b2tlbjogJ2RlbGltaXRlci5wYXJlbnRoZXNpcycsIG5leHQ6ICdAcGFyZW50aGl6ZWR0ZXJtJyB9XSxcclxuICAgICAgICBdLFxyXG4gICAgICAgIHJ1bGV2YWx1ZTogW1xyXG4gICAgICAgICAgICB7IGluY2x1ZGU6ICdAdGVybScgfSxcclxuICAgICAgICAgICAgWychaW1wb3J0YW50JywgJ2xpdGVyYWwnXSxcclxuICAgICAgICAgICAgWyc7JywgJ2RlbGltaXRlcicsICdAcG9wJ10sXHJcbiAgICAgICAgICAgIFsneycsIHsgdG9rZW46ICdkZWxpbWl0ZXIuY3VybHknLCBzd2l0Y2hUbzogJ0BuZXN0ZWRwcm9wZXJ0eScgfV0sXHJcbiAgICAgICAgICAgIFsnKD89fSknLCB7IHRva2VuOiAnJywgbmV4dDogJ0Bwb3AnIH1dLFxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgbmVzdGVkcHJvcGVydHk6IFtcclxuICAgICAgICAgICAgWydbKl9dP0BpZGVudGlmaWVyQHdzOicsICdhdHRyaWJ1dGUubmFtZScsICdAcnVsZXZhbHVlJ10sXHJcbiAgICAgICAgICAgIHsgaW5jbHVkZTogJ0Bjb21tZW50cycgfSxcclxuICAgICAgICAgICAgWyd9JywgeyB0b2tlbjogJ2RlbGltaXRlci5jdXJseScsIG5leHQ6ICdAcG9wJyB9XSxcclxuICAgICAgICBdLFxyXG4gICAgICAgIHdhcm5kZWJ1ZzogW1xyXG4gICAgICAgICAgICBbJ1tAXSh3YXJufGRlYnVnKScsIHsgdG9rZW46ICdrZXl3b3JkJywgbmV4dDogJ0BkZWNsYXJhdGlvbmJvZHknIH1dLFxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgaW1wb3J0OiBbXHJcbiAgICAgICAgICAgIFsnW0BdKGltcG9ydCknLCB7IHRva2VuOiAna2V5d29yZCcsIG5leHQ6ICdAZGVjbGFyYXRpb25ib2R5JyB9XSxcclxuICAgICAgICBdLFxyXG4gICAgICAgIHZhcmlhYmxlZGVjbGFyYXRpb246IFtcclxuICAgICAgICAgICAgWydcXFxcJEBpZGVudGlmaWVyQHdzOicsICd2YXJpYWJsZS5kZWNsJywgJ0BkZWNsYXJhdGlvbmJvZHknXSxcclxuICAgICAgICBdLFxyXG4gICAgICAgIHVybGRlY2xhcmF0aW9uOiBbXHJcbiAgICAgICAgICAgIHsgaW5jbHVkZTogJ0BzdHJpbmdzJyB9LFxyXG4gICAgICAgICAgICBbJ1teKVxcclxcbl0rJywgJ3N0cmluZyddLFxyXG4gICAgICAgICAgICBbJ1xcXFwpJywgeyB0b2tlbjogJ21ldGEnLCBuZXh0OiAnQHBvcCcgfV0sXHJcbiAgICAgICAgXSxcclxuICAgICAgICBwYXJlbnRoaXplZHRlcm06IFtcclxuICAgICAgICAgICAgeyBpbmNsdWRlOiAnQHRlcm0nIH0sXHJcbiAgICAgICAgICAgIFsnXFxcXCknLCB7IHRva2VuOiAnZGVsaW1pdGVyLnBhcmVudGhlc2lzJywgbmV4dDogJ0Bwb3AnIH1dLFxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgZGVjbGFyYXRpb25ib2R5OiBbXHJcbiAgICAgICAgICAgIHsgaW5jbHVkZTogJ0B0ZXJtJyB9LFxyXG4gICAgICAgICAgICBbJzsnLCAnZGVsaW1pdGVyJywgJ0Bwb3AnXSxcclxuICAgICAgICAgICAgWycoPz19KScsIHsgdG9rZW46ICcnLCBuZXh0OiAnQHBvcCcgfV0sXHJcbiAgICAgICAgXSxcclxuICAgICAgICBleHRlbmRib2R5OiBbXHJcbiAgICAgICAgICAgIHsgaW5jbHVkZTogJ0BzZWxlY3Rvcm5hbWUnIH0sXHJcbiAgICAgICAgICAgIFsnIW9wdGlvbmFsJywgJ2xpdGVyYWwnXSxcclxuICAgICAgICAgICAgWyc7JywgJ2RlbGltaXRlcicsICdAcG9wJ10sXHJcbiAgICAgICAgICAgIFsnKD89fSknLCB7IHRva2VuOiAnJywgbmV4dDogJ0Bwb3AnIH1dLFxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgdmFyaWFibGVyZWZlcmVuY2U6IFtcclxuICAgICAgICAgICAgWydcXFxcJEBpZGVudGlmaWVyJywgJ3ZhcmlhYmxlLnJlZiddLFxyXG4gICAgICAgICAgICBbJ1xcXFwuXFxcXC5cXFxcLicsICdvcGVyYXRvciddLFxyXG4gICAgICAgICAgICBbJyN7JywgeyB0b2tlbjogJ21ldGEnLCBuZXh0OiAnQHZhcmlhYmxlaW50ZXJwb2xhdGlvbicgfV0sXHJcbiAgICAgICAgXSxcclxuICAgICAgICB2YXJpYWJsZWludGVycG9sYXRpb246IFtcclxuICAgICAgICAgICAgeyBpbmNsdWRlOiAnQHZhcmlhYmxlcmVmZXJlbmNlJyB9LFxyXG4gICAgICAgICAgICBbJ30nLCB7IHRva2VuOiAnbWV0YScsIG5leHQ6ICdAcG9wJyB9XSxcclxuICAgICAgICBdLFxyXG4gICAgICAgIGNvbW1lbnRzOiBbXHJcbiAgICAgICAgICAgIFsnXFxcXC9cXFxcKicsICdjb21tZW50JywgJ0Bjb21tZW50J10sXHJcbiAgICAgICAgICAgIFsnXFxcXC9cXFxcLysuKicsICdjb21tZW50J10sXHJcbiAgICAgICAgXSxcclxuICAgICAgICBjb21tZW50OiBbXHJcbiAgICAgICAgICAgIFsnXFxcXCpcXFxcLycsICdjb21tZW50JywgJ0Bwb3AnXSxcclxuICAgICAgICAgICAgWycuJywgJ2NvbW1lbnQnXSxcclxuICAgICAgICBdLFxyXG4gICAgICAgIG5hbWU6IFtcclxuICAgICAgICAgICAgWydAaWRlbnRpZmllcicsICdhdHRyaWJ1dGUudmFsdWUnXSxcclxuICAgICAgICBdLFxyXG4gICAgICAgIG51bWJlcnM6IFtcclxuICAgICAgICAgICAgWycoXFxcXGQqXFxcXC4pP1xcXFxkKyhbZUVdW1xcXFwtK10/XFxcXGQrKT8nLCB7IHRva2VuOiAnbnVtYmVyJywgbmV4dDogJ0B1bml0cycgfV0sXHJcbiAgICAgICAgICAgIFsnI1swLTlhLWZBLUZfXSsoPyFcXFxcdyknLCAnbnVtYmVyLmhleCddLFxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgdW5pdHM6IFtcclxuICAgICAgICAgICAgWycoZW18ZXh8Y2h8cmVtfHZtaW58dm1heHx2d3x2aHx2bXxjbXxtbXxpbnxweHxwdHxwY3xkZWd8Z3JhZHxyYWR8dHVybnxzfG1zfEh6fGtIenwlKT8nLCAnbnVtYmVyJywgJ0Bwb3AnXVxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgZnVuY3Rpb25kZWNsYXJhdGlvbjogW1xyXG4gICAgICAgICAgICBbJ0BpZGVudGlmaWVyQHdzXFxcXCgnLCB7IHRva2VuOiAnbWV0YScsIG5leHQ6ICdAcGFyYW1ldGVyZGVjbGFyYXRpb24nIH1dLFxyXG4gICAgICAgICAgICBbJ3snLCB7IHRva2VuOiAnZGVsaW1pdGVyLmN1cmx5Jywgc3dpdGNoVG86ICdAZnVuY3Rpb25ib2R5JyB9XSxcclxuICAgICAgICBdLFxyXG4gICAgICAgIG1peGluZGVjbGFyYXRpb246IFtcclxuICAgICAgICAgICAgLy8gbWl4aW4gd2l0aCBwYXJhbWV0ZXJzXHJcbiAgICAgICAgICAgIFsnQGlkZW50aWZpZXJAd3NcXFxcKCcsIHsgdG9rZW46ICdtZXRhJywgbmV4dDogJ0BwYXJhbWV0ZXJkZWNsYXJhdGlvbicgfV0sXHJcbiAgICAgICAgICAgIC8vIG1peGluIHdpdGhvdXQgcGFyYW1ldGVyc1xyXG4gICAgICAgICAgICBbJ0BpZGVudGlmaWVyJywgJ21ldGEnXSxcclxuICAgICAgICAgICAgWyd7JywgeyB0b2tlbjogJ2RlbGltaXRlci5jdXJseScsIHN3aXRjaFRvOiAnQHNlbGVjdG9yYm9keScgfV0sXHJcbiAgICAgICAgXSxcclxuICAgICAgICBwYXJhbWV0ZXJkZWNsYXJhdGlvbjogW1xyXG4gICAgICAgICAgICBbJ1xcXFwkQGlkZW50aWZpZXJAd3M6JywgJ3ZhcmlhYmxlLmRlY2wnXSxcclxuICAgICAgICAgICAgWydcXFxcLlxcXFwuXFxcXC4nLCAnb3BlcmF0b3InXSxcclxuICAgICAgICAgICAgWycsJywgJ2RlbGltaXRlciddLFxyXG4gICAgICAgICAgICB7IGluY2x1ZGU6ICdAdGVybScgfSxcclxuICAgICAgICAgICAgWydcXFxcKScsIHsgdG9rZW46ICdtZXRhJywgbmV4dDogJ0Bwb3AnIH1dLFxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgaW5jbHVkZWRlY2xhcmF0aW9uOiBbXHJcbiAgICAgICAgICAgIHsgaW5jbHVkZTogJ0BmdW5jdGlvbmludm9jYXRpb24nIH0sXHJcbiAgICAgICAgICAgIFsnQGlkZW50aWZpZXInLCAnbWV0YSddLFxyXG4gICAgICAgICAgICBbJzsnLCAnZGVsaW1pdGVyJywgJ0Bwb3AnXSxcclxuICAgICAgICAgICAgWycoPz19KScsIHsgdG9rZW46ICcnLCBuZXh0OiAnQHBvcCcgfV0sXHJcbiAgICAgICAgICAgIFsneycsIHsgdG9rZW46ICdkZWxpbWl0ZXIuY3VybHknLCBzd2l0Y2hUbzogJ0BzZWxlY3RvcmJvZHknIH1dLFxyXG4gICAgICAgIF0sXHJcbiAgICAgICAga2V5ZnJhbWVkZWNsYXJhdGlvbjogW1xyXG4gICAgICAgICAgICBbJ0BpZGVudGlmaWVyJywgJ21ldGEnXSxcclxuICAgICAgICAgICAgWyd7JywgeyB0b2tlbjogJ2RlbGltaXRlci5jdXJseScsIHN3aXRjaFRvOiAnQGtleWZyYW1lYm9keScgfV0sXHJcbiAgICAgICAgXSxcclxuICAgICAgICBrZXlmcmFtZWJvZHk6IFtcclxuICAgICAgICAgICAgeyBpbmNsdWRlOiAnQHRlcm0nIH0sXHJcbiAgICAgICAgICAgIFsneycsIHsgdG9rZW46ICdkZWxpbWl0ZXIuY3VybHknLCBuZXh0OiAnQHNlbGVjdG9yYm9keScgfV0sXHJcbiAgICAgICAgICAgIFsnfScsIHsgdG9rZW46ICdkZWxpbWl0ZXIuY3VybHknLCBuZXh0OiAnQHBvcCcgfV0sXHJcbiAgICAgICAgXSxcclxuICAgICAgICBjb250cm9sc3RhdGVtZW50OiBbXHJcbiAgICAgICAgICAgIFsnW0BdKGlmfGVsc2V8Zm9yfHdoaWxlfGVhY2h8bWVkaWEpJywgeyB0b2tlbjogJ2tleXdvcmQuZmxvdycsIG5leHQ6ICdAY29udHJvbHN0YXRlbWVudGRlY2xhcmF0aW9uJyB9XSxcclxuICAgICAgICBdLFxyXG4gICAgICAgIGNvbnRyb2xzdGF0ZW1lbnRkZWNsYXJhdGlvbjogW1xyXG4gICAgICAgICAgICBbJyhpbnxmcm9tfHRocm91Z2h8aWZ8dG8pXFxcXGInLCB7IHRva2VuOiAna2V5d29yZC5mbG93JyB9XSxcclxuICAgICAgICAgICAgeyBpbmNsdWRlOiAnQHRlcm0nIH0sXHJcbiAgICAgICAgICAgIFsneycsIHsgdG9rZW46ICdkZWxpbWl0ZXIuY3VybHknLCBzd2l0Y2hUbzogJ0BzZWxlY3RvcmJvZHknIH1dLFxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgZnVuY3Rpb25ib2R5OiBbXHJcbiAgICAgICAgICAgIFsnW0BdKHJldHVybiknLCB7IHRva2VuOiAna2V5d29yZCcgfV0sXHJcbiAgICAgICAgICAgIHsgaW5jbHVkZTogJ0B2YXJpYWJsZWRlY2xhcmF0aW9uJyB9LFxyXG4gICAgICAgICAgICB7IGluY2x1ZGU6ICdAdGVybScgfSxcclxuICAgICAgICAgICAgeyBpbmNsdWRlOiAnQGNvbnRyb2xzdGF0ZW1lbnQnIH0sXHJcbiAgICAgICAgICAgIFsnOycsICdkZWxpbWl0ZXInXSxcclxuICAgICAgICAgICAgWyd9JywgeyB0b2tlbjogJ2RlbGltaXRlci5jdXJseScsIG5leHQ6ICdAcG9wJyB9XSxcclxuICAgICAgICBdLFxyXG4gICAgICAgIGZ1bmN0aW9uaW52b2NhdGlvbjogW1xyXG4gICAgICAgICAgICBbJ0BpZGVudGlmaWVyXFxcXCgnLCB7IHRva2VuOiAnbWV0YScsIG5leHQ6ICdAZnVuY3Rpb25hcmd1bWVudHMnIH1dLFxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgZnVuY3Rpb25hcmd1bWVudHM6IFtcclxuICAgICAgICAgICAgWydcXFxcJEBpZGVudGlmaWVyQHdzOicsICdhdHRyaWJ1dGUubmFtZSddLFxyXG4gICAgICAgICAgICBbJ1ssXScsICdkZWxpbWl0ZXInXSxcclxuICAgICAgICAgICAgeyBpbmNsdWRlOiAnQHRlcm0nIH0sXHJcbiAgICAgICAgICAgIFsnXFxcXCknLCB7IHRva2VuOiAnbWV0YScsIG5leHQ6ICdAcG9wJyB9XSxcclxuICAgICAgICBdLFxyXG4gICAgICAgIHN0cmluZ3M6IFtcclxuICAgICAgICAgICAgWyd+P1wiJywgeyB0b2tlbjogJ3N0cmluZy5kZWxpbWl0ZXInLCBuZXh0OiAnQHN0cmluZ2VuZGRvdWJsZXF1b3RlJyB9XSxcclxuICAgICAgICAgICAgWyd+P1xcJycsIHsgdG9rZW46ICdzdHJpbmcuZGVsaW1pdGVyJywgbmV4dDogJ0BzdHJpbmdlbmRxdW90ZScgfV1cclxuICAgICAgICBdLFxyXG4gICAgICAgIHN0cmluZ2VuZGRvdWJsZXF1b3RlOiBbXHJcbiAgICAgICAgICAgIFsnXFxcXFxcXFwuJywgJ3N0cmluZyddLFxyXG4gICAgICAgICAgICBbJ1wiJywgeyB0b2tlbjogJ3N0cmluZy5kZWxpbWl0ZXInLCBuZXh0OiAnQHBvcCcgfV0sXHJcbiAgICAgICAgICAgIFsnLicsICdzdHJpbmcnXVxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgc3RyaW5nZW5kcXVvdGU6IFtcclxuICAgICAgICAgICAgWydcXFxcXFxcXC4nLCAnc3RyaW5nJ10sXHJcbiAgICAgICAgICAgIFsnXFwnJywgeyB0b2tlbjogJ3N0cmluZy5kZWxpbWl0ZXInLCBuZXh0OiAnQHBvcCcgfV0sXHJcbiAgICAgICAgICAgIFsnLicsICdzdHJpbmcnXVxyXG4gICAgICAgIF1cclxuICAgIH1cclxufTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==