(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[16],{

/***/ "../node_modules/monaco-editor/esm/vs/basic-languages/dockerfile/dockerfile.js":
/*!*************************************************************************************!*\
  !*** ../node_modules/monaco-editor/esm/vs/basic-languages/dockerfile/dockerfile.js ***!
  \*************************************************************************************/
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
    brackets: [
        ['{', '}'],
        ['[', ']'],
        ['(', ')']
    ],
    autoClosingPairs: [
        { open: '{', close: '}' },
        { open: '[', close: ']' },
        { open: '(', close: ')' },
        { open: '"', close: '"' },
        { open: '\'', close: '\'' },
    ],
    surroundingPairs: [
        { open: '{', close: '}' },
        { open: '[', close: ']' },
        { open: '(', close: ')' },
        { open: '"', close: '"' },
        { open: '\'', close: '\'' },
    ]
};
var language = {
    defaultToken: '',
    tokenPostfix: '.dockerfile',
    variable: /\${?[\w]+}?/,
    tokenizer: {
        root: [
            { include: '@whitespace' },
            { include: '@comment' },
            [/(ONBUILD)(\s+)/, ['keyword', '']],
            [/(ENV)(\s+)([\w]+)/, ['keyword', '', { token: 'variable', next: '@arguments' }]],
            [/(FROM|MAINTAINER|RUN|EXPOSE|ENV|ADD|ARG|VOLUME|LABEL|USER|WORKDIR|COPY|CMD|STOPSIGNAL|SHELL|HEALTHCHECK|ENTRYPOINT)/, { token: 'keyword', next: '@arguments' }]
        ],
        arguments: [
            { include: '@whitespace' },
            { include: '@strings' },
            [/(@variable)/, {
                    cases: {
                        '@eos': { token: 'variable', next: '@popall' },
                        '@default': 'variable'
                    }
                }],
            [/\\/, {
                    cases: {
                        '@eos': '',
                        '@default': ''
                    }
                }],
            [/./, {
                    cases: {
                        '@eos': { token: '', next: '@popall' },
                        '@default': ''
                    }
                }],
        ],
        // Deal with white space, including comments
        whitespace: [
            [/\s+/, {
                    cases: {
                        '@eos': { token: '', next: '@popall' },
                        '@default': ''
                    }
                }],
        ],
        comment: [
            [/(^#.*$)/, 'comment', '@popall']
        ],
        // Recognize strings, including those broken across lines with \ (but not without)
        strings: [
            [/'$/, 'string', '@popall'],
            [/'/, 'string', '@stringBody'],
            [/"$/, 'string', '@popall'],
            [/"/, 'string', '@dblStringBody']
        ],
        stringBody: [
            [/[^\\\$']/, {
                    cases: {
                        '@eos': { token: 'string', next: '@popall' },
                        '@default': 'string'
                    }
                }],
            [/\\./, 'string.escape'],
            [/'$/, 'string', '@popall'],
            [/'/, 'string', '@pop'],
            [/(@variable)/, 'variable'],
            [/\\$/, 'string'],
            [/$/, 'string', '@popall']
        ],
        dblStringBody: [
            [/[^\\\$"]/, {
                    cases: {
                        '@eos': { token: 'string', next: '@popall' },
                        '@default': 'string'
                    }
                }],
            [/\\./, 'string.escape'],
            [/"$/, 'string', '@popall'],
            [/"/, 'string', '@pop'],
            [/(@variable)/, 'variable'],
            [/\\$/, 'string'],
            [/$/, 'string', '@popall']
        ]
    }
};


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL21vbmFjby1lZGl0b3IvZXNtL3ZzL2Jhc2ljLWxhbmd1YWdlcy9kb2NrZXJmaWxlL2RvY2tlcmZpbGUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ2E7QUFDTjtBQUNQO0FBQ0EsV0FBVyxLQUFLO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUyxTQUFTLFlBQVksR0FBRztBQUNqQyxTQUFTLHdCQUF3QjtBQUNqQyxTQUFTLHdCQUF3QjtBQUNqQyxTQUFTLHdCQUF3QjtBQUNqQyxTQUFTLDBCQUEwQjtBQUNuQztBQUNBO0FBQ0EsU0FBUyxTQUFTLFlBQVksR0FBRztBQUNqQyxTQUFTLHdCQUF3QjtBQUNqQyxTQUFTLHdCQUF3QjtBQUNqQyxTQUFTLHdCQUF3QjtBQUNqQyxTQUFTLDBCQUEwQjtBQUNuQztBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0Esa0JBQWtCLE9BQU87QUFDekI7QUFDQTtBQUNBLGFBQWEseUJBQXlCO0FBQ3RDLGFBQWEsc0JBQXNCO0FBQ25DO0FBQ0EsbURBQW1ELHdDQUF3QztBQUMzRixxSUFBcUksdUNBQXVDO0FBQzVLO0FBQ0E7QUFDQSxhQUFhLHlCQUF5QjtBQUN0QyxhQUFhLHNCQUFzQjtBQUNuQztBQUNBO0FBQ0EsaUNBQWlDLHFDQUFxQztBQUN0RTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBLGlDQUFpQyw2QkFBNkI7QUFDOUQ7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDLDZCQUE2QjtBQUM5RDtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQ0FBaUMsbUNBQW1DO0FBQ3BFO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQ0FBaUMsbUNBQW1DO0FBQ3BFO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImpzLzE2LmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAqICBDb3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuICogIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS4gU2VlIExpY2Vuc2UudHh0IGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXHJcbiAqLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xyXG4ndXNlIHN0cmljdCc7XHJcbmV4cG9ydCB2YXIgY29uZiA9IHtcclxuICAgIGJyYWNrZXRzOiBbXHJcbiAgICAgICAgWyd7JywgJ30nXSxcclxuICAgICAgICBbJ1snLCAnXSddLFxyXG4gICAgICAgIFsnKCcsICcpJ11cclxuICAgIF0sXHJcbiAgICBhdXRvQ2xvc2luZ1BhaXJzOiBbXHJcbiAgICAgICAgeyBvcGVuOiAneycsIGNsb3NlOiAnfScgfSxcclxuICAgICAgICB7IG9wZW46ICdbJywgY2xvc2U6ICddJyB9LFxyXG4gICAgICAgIHsgb3BlbjogJygnLCBjbG9zZTogJyknIH0sXHJcbiAgICAgICAgeyBvcGVuOiAnXCInLCBjbG9zZTogJ1wiJyB9LFxyXG4gICAgICAgIHsgb3BlbjogJ1xcJycsIGNsb3NlOiAnXFwnJyB9LFxyXG4gICAgXSxcclxuICAgIHN1cnJvdW5kaW5nUGFpcnM6IFtcclxuICAgICAgICB7IG9wZW46ICd7JywgY2xvc2U6ICd9JyB9LFxyXG4gICAgICAgIHsgb3BlbjogJ1snLCBjbG9zZTogJ10nIH0sXHJcbiAgICAgICAgeyBvcGVuOiAnKCcsIGNsb3NlOiAnKScgfSxcclxuICAgICAgICB7IG9wZW46ICdcIicsIGNsb3NlOiAnXCInIH0sXHJcbiAgICAgICAgeyBvcGVuOiAnXFwnJywgY2xvc2U6ICdcXCcnIH0sXHJcbiAgICBdXHJcbn07XHJcbmV4cG9ydCB2YXIgbGFuZ3VhZ2UgPSB7XHJcbiAgICBkZWZhdWx0VG9rZW46ICcnLFxyXG4gICAgdG9rZW5Qb3N0Zml4OiAnLmRvY2tlcmZpbGUnLFxyXG4gICAgdmFyaWFibGU6IC9cXCR7P1tcXHddK30/LyxcclxuICAgIHRva2VuaXplcjoge1xyXG4gICAgICAgIHJvb3Q6IFtcclxuICAgICAgICAgICAgeyBpbmNsdWRlOiAnQHdoaXRlc3BhY2UnIH0sXHJcbiAgICAgICAgICAgIHsgaW5jbHVkZTogJ0Bjb21tZW50JyB9LFxyXG4gICAgICAgICAgICBbLyhPTkJVSUxEKShcXHMrKS8sIFsna2V5d29yZCcsICcnXV0sXHJcbiAgICAgICAgICAgIFsvKEVOVikoXFxzKykoW1xcd10rKS8sIFsna2V5d29yZCcsICcnLCB7IHRva2VuOiAndmFyaWFibGUnLCBuZXh0OiAnQGFyZ3VtZW50cycgfV1dLFxyXG4gICAgICAgICAgICBbLyhGUk9NfE1BSU5UQUlORVJ8UlVOfEVYUE9TRXxFTlZ8QUREfEFSR3xWT0xVTUV8TEFCRUx8VVNFUnxXT1JLRElSfENPUFl8Q01EfFNUT1BTSUdOQUx8U0hFTEx8SEVBTFRIQ0hFQ0t8RU5UUllQT0lOVCkvLCB7IHRva2VuOiAna2V5d29yZCcsIG5leHQ6ICdAYXJndW1lbnRzJyB9XVxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgYXJndW1lbnRzOiBbXHJcbiAgICAgICAgICAgIHsgaW5jbHVkZTogJ0B3aGl0ZXNwYWNlJyB9LFxyXG4gICAgICAgICAgICB7IGluY2x1ZGU6ICdAc3RyaW5ncycgfSxcclxuICAgICAgICAgICAgWy8oQHZhcmlhYmxlKS8sIHtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAnQGVvcyc6IHsgdG9rZW46ICd2YXJpYWJsZScsIG5leHQ6ICdAcG9wYWxsJyB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAnQGRlZmF1bHQnOiAndmFyaWFibGUnXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfV0sXHJcbiAgICAgICAgICAgIFsvXFxcXC8sIHtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAnQGVvcyc6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAnQGRlZmF1bHQnOiAnJ1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1dLFxyXG4gICAgICAgICAgICBbLy4vLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZXM6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJ0Blb3MnOiB7IHRva2VuOiAnJywgbmV4dDogJ0Bwb3BhbGwnIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICdAZGVmYXVsdCc6ICcnXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfV0sXHJcbiAgICAgICAgXSxcclxuICAgICAgICAvLyBEZWFsIHdpdGggd2hpdGUgc3BhY2UsIGluY2x1ZGluZyBjb21tZW50c1xyXG4gICAgICAgIHdoaXRlc3BhY2U6IFtcclxuICAgICAgICAgICAgWy9cXHMrLywge1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2VzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICdAZW9zJzogeyB0b2tlbjogJycsIG5leHQ6ICdAcG9wYWxsJyB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAnQGRlZmF1bHQnOiAnJ1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1dLFxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgY29tbWVudDogW1xyXG4gICAgICAgICAgICBbLyheIy4qJCkvLCAnY29tbWVudCcsICdAcG9wYWxsJ11cclxuICAgICAgICBdLFxyXG4gICAgICAgIC8vIFJlY29nbml6ZSBzdHJpbmdzLCBpbmNsdWRpbmcgdGhvc2UgYnJva2VuIGFjcm9zcyBsaW5lcyB3aXRoIFxcIChidXQgbm90IHdpdGhvdXQpXHJcbiAgICAgICAgc3RyaW5nczogW1xyXG4gICAgICAgICAgICBbLyckLywgJ3N0cmluZycsICdAcG9wYWxsJ10sXHJcbiAgICAgICAgICAgIFsvJy8sICdzdHJpbmcnLCAnQHN0cmluZ0JvZHknXSxcclxuICAgICAgICAgICAgWy9cIiQvLCAnc3RyaW5nJywgJ0Bwb3BhbGwnXSxcclxuICAgICAgICAgICAgWy9cIi8sICdzdHJpbmcnLCAnQGRibFN0cmluZ0JvZHknXVxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgc3RyaW5nQm9keTogW1xyXG4gICAgICAgICAgICBbL1teXFxcXFxcJCddLywge1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2VzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICdAZW9zJzogeyB0b2tlbjogJ3N0cmluZycsIG5leHQ6ICdAcG9wYWxsJyB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAnQGRlZmF1bHQnOiAnc3RyaW5nJ1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1dLFxyXG4gICAgICAgICAgICBbL1xcXFwuLywgJ3N0cmluZy5lc2NhcGUnXSxcclxuICAgICAgICAgICAgWy8nJC8sICdzdHJpbmcnLCAnQHBvcGFsbCddLFxyXG4gICAgICAgICAgICBbLycvLCAnc3RyaW5nJywgJ0Bwb3AnXSxcclxuICAgICAgICAgICAgWy8oQHZhcmlhYmxlKS8sICd2YXJpYWJsZSddLFxyXG4gICAgICAgICAgICBbL1xcXFwkLywgJ3N0cmluZyddLFxyXG4gICAgICAgICAgICBbLyQvLCAnc3RyaW5nJywgJ0Bwb3BhbGwnXVxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgZGJsU3RyaW5nQm9keTogW1xyXG4gICAgICAgICAgICBbL1teXFxcXFxcJFwiXS8sIHtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAnQGVvcyc6IHsgdG9rZW46ICdzdHJpbmcnLCBuZXh0OiAnQHBvcGFsbCcgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgJ0BkZWZhdWx0JzogJ3N0cmluZydcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XSxcclxuICAgICAgICAgICAgWy9cXFxcLi8sICdzdHJpbmcuZXNjYXBlJ10sXHJcbiAgICAgICAgICAgIFsvXCIkLywgJ3N0cmluZycsICdAcG9wYWxsJ10sXHJcbiAgICAgICAgICAgIFsvXCIvLCAnc3RyaW5nJywgJ0Bwb3AnXSxcclxuICAgICAgICAgICAgWy8oQHZhcmlhYmxlKS8sICd2YXJpYWJsZSddLFxyXG4gICAgICAgICAgICBbL1xcXFwkLywgJ3N0cmluZyddLFxyXG4gICAgICAgICAgICBbLyQvLCAnc3RyaW5nJywgJ0Bwb3BhbGwnXVxyXG4gICAgICAgIF1cclxuICAgIH1cclxufTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==