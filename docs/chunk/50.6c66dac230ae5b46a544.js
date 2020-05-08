(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[50],{

/***/ "../node_modules/monaco-editor/esm/vs/basic-languages/scheme/scheme.js":
/*!*****************************************************************************!*\
  !*** ../node_modules/monaco-editor/esm/vs/basic-languages/scheme/scheme.js ***!
  \*****************************************************************************/
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
    comments: {
        lineComment: ';',
        blockComment: ['#|', '|#'],
    },
    brackets: [['(', ')'], ['{', '}'], ['[', ']']],
    autoClosingPairs: [
        { open: '{', close: '}' },
        { open: '[', close: ']' },
        { open: '(', close: ')' },
        { open: '"', close: '"' },
    ],
    surroundingPairs: [
        { open: '{', close: '}' },
        { open: '[', close: ']' },
        { open: '(', close: ')' },
        { open: '"', close: '"' },
    ],
};
var language = {
    defaultToken: '',
    ignoreCase: true,
    tokenPostfix: '.scheme',
    brackets: [
        { open: '(', close: ')', token: 'delimiter.parenthesis' },
        { open: '{', close: '}', token: 'delimiter.curly' },
        { open: '[', close: ']', token: 'delimiter.square' },
    ],
    keywords: [
        'case',
        'do',
        'let',
        'loop',
        'if',
        'else',
        'when',
        'cons',
        'car',
        'cdr',
        'cond',
        'lambda',
        'lambda*',
        'syntax-rules',
        'format',
        'set!',
        'quote',
        'eval',
        'append',
        'list',
        'list?',
        'member?',
        'load',
    ],
    constants: ['#t', '#f'],
    operators: ['eq?', 'eqv?', 'equal?', 'and', 'or', 'not', 'null?'],
    tokenizer: {
        root: [
            [/#[xXoObB][0-9a-fA-F]+/, 'number.hex'],
            [/[+-]?\d+(?:(?:\.\d*)?(?:[eE][+-]?\d+)?)?/, 'number.float'],
            [
                /(?:\b(?:(define|define-syntax|define-macro))\b)(\s+)((?:\w|\-|\!|\?)*)/,
                ['keyword', 'white', 'variable'],
            ],
            { include: '@whitespace' },
            { include: '@strings' },
            [
                /[a-zA-Z_#][a-zA-Z0-9_\-\?\!\*]*/,
                {
                    cases: {
                        '@keywords': 'keyword',
                        '@constants': 'constant',
                        '@operators': 'operators',
                        '@default': 'identifier',
                    },
                },
            ],
        ],
        comment: [
            [/[^\|#]+/, 'comment'],
            [/#\|/, 'comment', '@push'],
            [/\|#/, 'comment', '@pop'],
            [/[\|#]/, 'comment'],
        ],
        whitespace: [
            [/[ \t\r\n]+/, 'white'],
            [/#\|/, 'comment', '@comment'],
            [/;.*$/, 'comment'],
        ],
        strings: [
            [/"$/, 'string', '@popall'],
            [/"(?=.)/, 'string', '@multiLineString'],
        ],
        multiLineString: [
            [/[^\\"]+$/, 'string', '@popall'],
            [/[^\\"]+/, 'string'],
            [/\\./, 'string.escape'],
            [/"/, 'string', '@popall'],
            [/\\$/, 'string']
        ],
    },
};


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL21vbmFjby1lZGl0b3IvZXNtL3ZzL2Jhc2ljLWxhbmd1YWdlcy9zY2hlbWUvc2NoZW1lLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNhO0FBQ047QUFDUDtBQUNBLHVCQUF1QjtBQUN2QjtBQUNBLEtBQUs7QUFDTCw4QkFBOEIsS0FBSztBQUNuQztBQUNBLFNBQVMsU0FBUyxZQUFZLEdBQUc7QUFDakMsU0FBUyx3QkFBd0I7QUFDakMsU0FBUyx3QkFBd0I7QUFDakMsU0FBUyx3QkFBd0I7QUFDakM7QUFDQTtBQUNBLFNBQVMsU0FBUyxZQUFZLEdBQUc7QUFDakMsU0FBUyx3QkFBd0I7QUFDakMsU0FBUyx3QkFBd0I7QUFDakMsU0FBUyx3QkFBd0I7QUFDakM7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTLHdEQUF3RDtBQUNqRSxTQUFTLFNBQVMsWUFBWSw2QkFBNkI7QUFDM0QsU0FBUyxtREFBbUQ7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSx5QkFBeUI7QUFDdEMsYUFBYSxzQkFBc0I7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQixpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wiLCJmaWxlIjoiLi9jaHVuay81MC42YzY2ZGFjMjMwYWU1YjQ2YTU0NC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAqICBDb3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuICogIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS4gU2VlIExpY2Vuc2UudHh0IGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXHJcbiAqLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xyXG4ndXNlIHN0cmljdCc7XHJcbmV4cG9ydCB2YXIgY29uZiA9IHtcclxuICAgIGNvbW1lbnRzOiB7XHJcbiAgICAgICAgbGluZUNvbW1lbnQ6ICc7JyxcclxuICAgICAgICBibG9ja0NvbW1lbnQ6IFsnI3wnLCAnfCMnXSxcclxuICAgIH0sXHJcbiAgICBicmFja2V0czogW1snKCcsICcpJ10sIFsneycsICd9J10sIFsnWycsICddJ11dLFxyXG4gICAgYXV0b0Nsb3NpbmdQYWlyczogW1xyXG4gICAgICAgIHsgb3BlbjogJ3snLCBjbG9zZTogJ30nIH0sXHJcbiAgICAgICAgeyBvcGVuOiAnWycsIGNsb3NlOiAnXScgfSxcclxuICAgICAgICB7IG9wZW46ICcoJywgY2xvc2U6ICcpJyB9LFxyXG4gICAgICAgIHsgb3BlbjogJ1wiJywgY2xvc2U6ICdcIicgfSxcclxuICAgIF0sXHJcbiAgICBzdXJyb3VuZGluZ1BhaXJzOiBbXHJcbiAgICAgICAgeyBvcGVuOiAneycsIGNsb3NlOiAnfScgfSxcclxuICAgICAgICB7IG9wZW46ICdbJywgY2xvc2U6ICddJyB9LFxyXG4gICAgICAgIHsgb3BlbjogJygnLCBjbG9zZTogJyknIH0sXHJcbiAgICAgICAgeyBvcGVuOiAnXCInLCBjbG9zZTogJ1wiJyB9LFxyXG4gICAgXSxcclxufTtcclxuZXhwb3J0IHZhciBsYW5ndWFnZSA9IHtcclxuICAgIGRlZmF1bHRUb2tlbjogJycsXHJcbiAgICBpZ25vcmVDYXNlOiB0cnVlLFxyXG4gICAgdG9rZW5Qb3N0Zml4OiAnLnNjaGVtZScsXHJcbiAgICBicmFja2V0czogW1xyXG4gICAgICAgIHsgb3BlbjogJygnLCBjbG9zZTogJyknLCB0b2tlbjogJ2RlbGltaXRlci5wYXJlbnRoZXNpcycgfSxcclxuICAgICAgICB7IG9wZW46ICd7JywgY2xvc2U6ICd9JywgdG9rZW46ICdkZWxpbWl0ZXIuY3VybHknIH0sXHJcbiAgICAgICAgeyBvcGVuOiAnWycsIGNsb3NlOiAnXScsIHRva2VuOiAnZGVsaW1pdGVyLnNxdWFyZScgfSxcclxuICAgIF0sXHJcbiAgICBrZXl3b3JkczogW1xyXG4gICAgICAgICdjYXNlJyxcclxuICAgICAgICAnZG8nLFxyXG4gICAgICAgICdsZXQnLFxyXG4gICAgICAgICdsb29wJyxcclxuICAgICAgICAnaWYnLFxyXG4gICAgICAgICdlbHNlJyxcclxuICAgICAgICAnd2hlbicsXHJcbiAgICAgICAgJ2NvbnMnLFxyXG4gICAgICAgICdjYXInLFxyXG4gICAgICAgICdjZHInLFxyXG4gICAgICAgICdjb25kJyxcclxuICAgICAgICAnbGFtYmRhJyxcclxuICAgICAgICAnbGFtYmRhKicsXHJcbiAgICAgICAgJ3N5bnRheC1ydWxlcycsXHJcbiAgICAgICAgJ2Zvcm1hdCcsXHJcbiAgICAgICAgJ3NldCEnLFxyXG4gICAgICAgICdxdW90ZScsXHJcbiAgICAgICAgJ2V2YWwnLFxyXG4gICAgICAgICdhcHBlbmQnLFxyXG4gICAgICAgICdsaXN0JyxcclxuICAgICAgICAnbGlzdD8nLFxyXG4gICAgICAgICdtZW1iZXI/JyxcclxuICAgICAgICAnbG9hZCcsXHJcbiAgICBdLFxyXG4gICAgY29uc3RhbnRzOiBbJyN0JywgJyNmJ10sXHJcbiAgICBvcGVyYXRvcnM6IFsnZXE/JywgJ2Vxdj8nLCAnZXF1YWw/JywgJ2FuZCcsICdvcicsICdub3QnLCAnbnVsbD8nXSxcclxuICAgIHRva2VuaXplcjoge1xyXG4gICAgICAgIHJvb3Q6IFtcclxuICAgICAgICAgICAgWy8jW3hYb09iQl1bMC05YS1mQS1GXSsvLCAnbnVtYmVyLmhleCddLFxyXG4gICAgICAgICAgICBbL1srLV0/XFxkKyg/Oig/OlxcLlxcZCopPyg/OltlRV1bKy1dP1xcZCspPyk/LywgJ251bWJlci5mbG9hdCddLFxyXG4gICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAvKD86XFxiKD86KGRlZmluZXxkZWZpbmUtc3ludGF4fGRlZmluZS1tYWNybykpXFxiKShcXHMrKSgoPzpcXHd8XFwtfFxcIXxcXD8pKikvLFxyXG4gICAgICAgICAgICAgICAgWydrZXl3b3JkJywgJ3doaXRlJywgJ3ZhcmlhYmxlJ10sXHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIHsgaW5jbHVkZTogJ0B3aGl0ZXNwYWNlJyB9LFxyXG4gICAgICAgICAgICB7IGluY2x1ZGU6ICdAc3RyaW5ncycgfSxcclxuICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgL1thLXpBLVpfI11bYS16QS1aMC05X1xcLVxcP1xcIVxcKl0qLyxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAnQGtleXdvcmRzJzogJ2tleXdvcmQnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAnQGNvbnN0YW50cyc6ICdjb25zdGFudCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICdAb3BlcmF0b3JzJzogJ29wZXJhdG9ycycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICdAZGVmYXVsdCc6ICdpZGVudGlmaWVyJyxcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgXSxcclxuICAgICAgICBdLFxyXG4gICAgICAgIGNvbW1lbnQ6IFtcclxuICAgICAgICAgICAgWy9bXlxcfCNdKy8sICdjb21tZW50J10sXHJcbiAgICAgICAgICAgIFsvI1xcfC8sICdjb21tZW50JywgJ0BwdXNoJ10sXHJcbiAgICAgICAgICAgIFsvXFx8Iy8sICdjb21tZW50JywgJ0Bwb3AnXSxcclxuICAgICAgICAgICAgWy9bXFx8I10vLCAnY29tbWVudCddLFxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgd2hpdGVzcGFjZTogW1xyXG4gICAgICAgICAgICBbL1sgXFx0XFxyXFxuXSsvLCAnd2hpdGUnXSxcclxuICAgICAgICAgICAgWy8jXFx8LywgJ2NvbW1lbnQnLCAnQGNvbW1lbnQnXSxcclxuICAgICAgICAgICAgWy87LiokLywgJ2NvbW1lbnQnXSxcclxuICAgICAgICBdLFxyXG4gICAgICAgIHN0cmluZ3M6IFtcclxuICAgICAgICAgICAgWy9cIiQvLCAnc3RyaW5nJywgJ0Bwb3BhbGwnXSxcclxuICAgICAgICAgICAgWy9cIig/PS4pLywgJ3N0cmluZycsICdAbXVsdGlMaW5lU3RyaW5nJ10sXHJcbiAgICAgICAgXSxcclxuICAgICAgICBtdWx0aUxpbmVTdHJpbmc6IFtcclxuICAgICAgICAgICAgWy9bXlxcXFxcIl0rJC8sICdzdHJpbmcnLCAnQHBvcGFsbCddLFxyXG4gICAgICAgICAgICBbL1teXFxcXFwiXSsvLCAnc3RyaW5nJ10sXHJcbiAgICAgICAgICAgIFsvXFxcXC4vLCAnc3RyaW5nLmVzY2FwZSddLFxyXG4gICAgICAgICAgICBbL1wiLywgJ3N0cmluZycsICdAcG9wYWxsJ10sXHJcbiAgICAgICAgICAgIFsvXFxcXCQvLCAnc3RyaW5nJ11cclxuICAgICAgICBdLFxyXG4gICAgfSxcclxufTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==