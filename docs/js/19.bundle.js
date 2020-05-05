(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[19],{

/***/ "../node_modules/monaco-editor/esm/vs/basic-languages/graphql/graphql.js":
/*!*******************************************************************************!*\
  !*** ../node_modules/monaco-editor/esm/vs/basic-languages/graphql/graphql.js ***!
  \*******************************************************************************/
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
        lineComment: '#'
    },
    brackets: [
        ['{', '}'],
        ['[', ']'],
        ['(', ')']
    ],
    autoClosingPairs: [
        { open: '{', close: '}' },
        { open: '[', close: ']' },
        { open: '(', close: ')' },
        { open: '"""', close: '"""', notIn: ['string', 'comment'] },
        { open: '"', close: '"', notIn: ['string', 'comment'] },
    ],
    surroundingPairs: [
        { open: '{', close: '}' },
        { open: '[', close: ']' },
        { open: '(', close: ')' },
        { open: '"""', close: '"""' },
        { open: '"', close: '"' },
    ],
    folding: {
        offSide: true
    }
};
var language = {
    // Set defaultToken to invalid to see what you do not tokenize yet
    defaultToken: 'invalid',
    tokenPostfix: '.gql',
    keywords: [
        'null', 'true', 'false',
        'query', 'mutation', 'subscription',
        'extend', 'schema', 'directive',
        'scalar', 'type', 'interface', 'union', 'enum', 'input', 'implements',
        'fragment', 'on',
    ],
    typeKeywords: ['Int', 'Float', 'String', 'Boolean', 'ID'],
    directiveLocations: [
        'SCHEMA', 'SCALAR', 'OBJECT', 'FIELD_DEFINITION', 'ARGUMENT_DEFINITION',
        'INTERFACE', 'UNION', 'ENUM', 'ENUM_VALUE', 'INPUT_OBJECT', 'INPUT_FIELD_DEFINITION',
        'QUERY', 'MUTATION', 'SUBSCRIPTION', 'FIELD', 'FRAGMENT_DEFINITION',
        'FRAGMENT_SPREAD', 'INLINE_FRAGMENT', 'VARIABLE_DEFINITION',
    ],
    operators: ['=', '!', '?', ':', '&', '|'],
    // we include these common regular expressions
    symbols: /[=!?:&|]+/,
    // https://facebook.github.io/graphql/draft/#sec-String-Value
    escapes: /\\(?:["\\\/bfnrt]|u[0-9A-Fa-f]{4})/,
    // The main tokenizer for our languages
    tokenizer: {
        root: [
            // fields and argument names
            [
                /[a-z_][\w$]*/,
                {
                    cases: {
                        '@keywords': 'keyword',
                        '@default': 'key.identifier',
                    },
                },
            ],
            // identify typed input variables
            [
                /[$][\w$]*/,
                {
                    cases: {
                        '@keywords': 'keyword',
                        '@default': 'argument.identifier',
                    },
                },
            ],
            // to show class names nicely
            [
                /[A-Z][\w\$]*/,
                {
                    cases: {
                        '@typeKeywords': 'keyword',
                        '@default': 'type.identifier',
                    },
                },
            ],
            // whitespace
            { include: '@whitespace' },
            // delimiters and operators
            [/[{}()\[\]]/, '@brackets'],
            [
                /@symbols/,
                { cases: { '@operators': 'operator', '@default': '' } },
            ],
            // @ annotations.
            // As an example, we emit a debugging log message on these tokens.
            // Note: message are supressed during the first load -- change some lines to see them.
            [
                /@\s*[a-zA-Z_\$][\w\$]*/,
                { token: 'annotation', log: 'annotation token: $0' },
            ],
            // numbers
            [/\d*\.\d+([eE][\-+]?\d+)?/, 'number.float'],
            [/0[xX][0-9a-fA-F]+/, 'number.hex'],
            [/\d+/, 'number'],
            // delimiter: after number because of .\d floats
            [/[;,.]/, 'delimiter'],
            [/"""/,
                { token: 'string', next: '@mlstring', nextEmbedded: 'markdown' }
            ],
            // strings
            [/"([^"\\]|\\.)*$/, 'string.invalid'],
            [/"/, { token: 'string.quote', bracket: '@open', next: '@string' }],
        ],
        mlstring: [
            [/[^"]+/, 'string'],
            ['"""', { token: 'string', next: '@pop', nextEmbedded: '@pop' }]
        ],
        string: [
            [/[^\\"]+/, 'string'],
            [/@escapes/, 'string.escape'],
            [/\\./, 'string.escape.invalid'],
            [/"/, { token: 'string.quote', bracket: '@close', next: '@pop' }],
        ],
        whitespace: [[/[ \t\r\n]+/, ''], [/#.*$/, 'comment']],
    },
};


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL21vbmFjby1lZGl0b3IvZXNtL3ZzL2Jhc2ljLWxhbmd1YWdlcy9ncmFwaHFsL2dyYXBocWwuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ2E7QUFDTjtBQUNQO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxXQUFXLEtBQUs7QUFDaEI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTLFNBQVMsWUFBWSxHQUFHO0FBQ2pDLFNBQVMsd0JBQXdCO0FBQ2pDLFNBQVMsd0JBQXdCO0FBQ2pDLFNBQVMsMERBQTBEO0FBQ25FLFNBQVMsc0RBQXNEO0FBQy9EO0FBQ0E7QUFDQSxTQUFTLFNBQVMsWUFBWSxHQUFHO0FBQ2pDLFNBQVMsd0JBQXdCO0FBQ2pDLFNBQVMsd0JBQXdCO0FBQ2pDLFNBQVMsNEJBQTRCO0FBQ3JDLFNBQVMsd0JBQXdCO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZDQUE2QyxFQUFFO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0EsYUFBYSx5QkFBeUI7QUFDdEM7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBLGlCQUFpQixTQUFTLDJDQUEyQyxFQUFFO0FBQ3ZFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQixtREFBbUQ7QUFDcEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCO0FBQ2hCO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQiwyREFBMkQ7QUFDOUU7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLHNEQUFzRDtBQUMzRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLHlEQUF5RDtBQUM1RTtBQUNBO0FBQ0EsS0FBSztBQUNMIiwiZmlsZSI6Ii4vanMvMTkuYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICogIENvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG4gKiAgTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLiBTZWUgTGljZW5zZS50eHQgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cclxuICotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXHJcbid1c2Ugc3RyaWN0JztcclxuZXhwb3J0IHZhciBjb25mID0ge1xyXG4gICAgY29tbWVudHM6IHtcclxuICAgICAgICBsaW5lQ29tbWVudDogJyMnXHJcbiAgICB9LFxyXG4gICAgYnJhY2tldHM6IFtcclxuICAgICAgICBbJ3snLCAnfSddLFxyXG4gICAgICAgIFsnWycsICddJ10sXHJcbiAgICAgICAgWycoJywgJyknXVxyXG4gICAgXSxcclxuICAgIGF1dG9DbG9zaW5nUGFpcnM6IFtcclxuICAgICAgICB7IG9wZW46ICd7JywgY2xvc2U6ICd9JyB9LFxyXG4gICAgICAgIHsgb3BlbjogJ1snLCBjbG9zZTogJ10nIH0sXHJcbiAgICAgICAgeyBvcGVuOiAnKCcsIGNsb3NlOiAnKScgfSxcclxuICAgICAgICB7IG9wZW46ICdcIlwiXCInLCBjbG9zZTogJ1wiXCJcIicsIG5vdEluOiBbJ3N0cmluZycsICdjb21tZW50J10gfSxcclxuICAgICAgICB7IG9wZW46ICdcIicsIGNsb3NlOiAnXCInLCBub3RJbjogWydzdHJpbmcnLCAnY29tbWVudCddIH0sXHJcbiAgICBdLFxyXG4gICAgc3Vycm91bmRpbmdQYWlyczogW1xyXG4gICAgICAgIHsgb3BlbjogJ3snLCBjbG9zZTogJ30nIH0sXHJcbiAgICAgICAgeyBvcGVuOiAnWycsIGNsb3NlOiAnXScgfSxcclxuICAgICAgICB7IG9wZW46ICcoJywgY2xvc2U6ICcpJyB9LFxyXG4gICAgICAgIHsgb3BlbjogJ1wiXCJcIicsIGNsb3NlOiAnXCJcIlwiJyB9LFxyXG4gICAgICAgIHsgb3BlbjogJ1wiJywgY2xvc2U6ICdcIicgfSxcclxuICAgIF0sXHJcbiAgICBmb2xkaW5nOiB7XHJcbiAgICAgICAgb2ZmU2lkZTogdHJ1ZVxyXG4gICAgfVxyXG59O1xyXG5leHBvcnQgdmFyIGxhbmd1YWdlID0ge1xyXG4gICAgLy8gU2V0IGRlZmF1bHRUb2tlbiB0byBpbnZhbGlkIHRvIHNlZSB3aGF0IHlvdSBkbyBub3QgdG9rZW5pemUgeWV0XHJcbiAgICBkZWZhdWx0VG9rZW46ICdpbnZhbGlkJyxcclxuICAgIHRva2VuUG9zdGZpeDogJy5ncWwnLFxyXG4gICAga2V5d29yZHM6IFtcclxuICAgICAgICAnbnVsbCcsICd0cnVlJywgJ2ZhbHNlJyxcclxuICAgICAgICAncXVlcnknLCAnbXV0YXRpb24nLCAnc3Vic2NyaXB0aW9uJyxcclxuICAgICAgICAnZXh0ZW5kJywgJ3NjaGVtYScsICdkaXJlY3RpdmUnLFxyXG4gICAgICAgICdzY2FsYXInLCAndHlwZScsICdpbnRlcmZhY2UnLCAndW5pb24nLCAnZW51bScsICdpbnB1dCcsICdpbXBsZW1lbnRzJyxcclxuICAgICAgICAnZnJhZ21lbnQnLCAnb24nLFxyXG4gICAgXSxcclxuICAgIHR5cGVLZXl3b3JkczogWydJbnQnLCAnRmxvYXQnLCAnU3RyaW5nJywgJ0Jvb2xlYW4nLCAnSUQnXSxcclxuICAgIGRpcmVjdGl2ZUxvY2F0aW9uczogW1xyXG4gICAgICAgICdTQ0hFTUEnLCAnU0NBTEFSJywgJ09CSkVDVCcsICdGSUVMRF9ERUZJTklUSU9OJywgJ0FSR1VNRU5UX0RFRklOSVRJT04nLFxyXG4gICAgICAgICdJTlRFUkZBQ0UnLCAnVU5JT04nLCAnRU5VTScsICdFTlVNX1ZBTFVFJywgJ0lOUFVUX09CSkVDVCcsICdJTlBVVF9GSUVMRF9ERUZJTklUSU9OJyxcclxuICAgICAgICAnUVVFUlknLCAnTVVUQVRJT04nLCAnU1VCU0NSSVBUSU9OJywgJ0ZJRUxEJywgJ0ZSQUdNRU5UX0RFRklOSVRJT04nLFxyXG4gICAgICAgICdGUkFHTUVOVF9TUFJFQUQnLCAnSU5MSU5FX0ZSQUdNRU5UJywgJ1ZBUklBQkxFX0RFRklOSVRJT04nLFxyXG4gICAgXSxcclxuICAgIG9wZXJhdG9yczogWyc9JywgJyEnLCAnPycsICc6JywgJyYnLCAnfCddLFxyXG4gICAgLy8gd2UgaW5jbHVkZSB0aGVzZSBjb21tb24gcmVndWxhciBleHByZXNzaW9uc1xyXG4gICAgc3ltYm9sczogL1s9IT86JnxdKy8sXHJcbiAgICAvLyBodHRwczovL2ZhY2Vib29rLmdpdGh1Yi5pby9ncmFwaHFsL2RyYWZ0LyNzZWMtU3RyaW5nLVZhbHVlXHJcbiAgICBlc2NhcGVzOiAvXFxcXCg/OltcIlxcXFxcXC9iZm5ydF18dVswLTlBLUZhLWZdezR9KS8sXHJcbiAgICAvLyBUaGUgbWFpbiB0b2tlbml6ZXIgZm9yIG91ciBsYW5ndWFnZXNcclxuICAgIHRva2VuaXplcjoge1xyXG4gICAgICAgIHJvb3Q6IFtcclxuICAgICAgICAgICAgLy8gZmllbGRzIGFuZCBhcmd1bWVudCBuYW1lc1xyXG4gICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAvW2Etel9dW1xcdyRdKi8sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZXM6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJ0BrZXl3b3Jkcyc6ICdrZXl3b3JkJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgJ0BkZWZhdWx0JzogJ2tleS5pZGVudGlmaWVyJyxcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgLy8gaWRlbnRpZnkgdHlwZWQgaW5wdXQgdmFyaWFibGVzXHJcbiAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgIC9bJF1bXFx3JF0qLyxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAnQGtleXdvcmRzJzogJ2tleXdvcmQnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAnQGRlZmF1bHQnOiAnYXJndW1lbnQuaWRlbnRpZmllcicsXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIC8vIHRvIHNob3cgY2xhc3MgbmFtZXMgbmljZWx5XHJcbiAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgIC9bQS1aXVtcXHdcXCRdKi8sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZXM6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJ0B0eXBlS2V5d29yZHMnOiAna2V5d29yZCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICdAZGVmYXVsdCc6ICd0eXBlLmlkZW50aWZpZXInLFxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAvLyB3aGl0ZXNwYWNlXHJcbiAgICAgICAgICAgIHsgaW5jbHVkZTogJ0B3aGl0ZXNwYWNlJyB9LFxyXG4gICAgICAgICAgICAvLyBkZWxpbWl0ZXJzIGFuZCBvcGVyYXRvcnNcclxuICAgICAgICAgICAgWy9be30oKVxcW1xcXV0vLCAnQGJyYWNrZXRzJ10sXHJcbiAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgIC9Ac3ltYm9scy8sXHJcbiAgICAgICAgICAgICAgICB7IGNhc2VzOiB7ICdAb3BlcmF0b3JzJzogJ29wZXJhdG9yJywgJ0BkZWZhdWx0JzogJycgfSB9LFxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAvLyBAIGFubm90YXRpb25zLlxyXG4gICAgICAgICAgICAvLyBBcyBhbiBleGFtcGxlLCB3ZSBlbWl0IGEgZGVidWdnaW5nIGxvZyBtZXNzYWdlIG9uIHRoZXNlIHRva2Vucy5cclxuICAgICAgICAgICAgLy8gTm90ZTogbWVzc2FnZSBhcmUgc3VwcmVzc2VkIGR1cmluZyB0aGUgZmlyc3QgbG9hZCAtLSBjaGFuZ2Ugc29tZSBsaW5lcyB0byBzZWUgdGhlbS5cclxuICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgL0BcXHMqW2EtekEtWl9cXCRdW1xcd1xcJF0qLyxcclxuICAgICAgICAgICAgICAgIHsgdG9rZW46ICdhbm5vdGF0aW9uJywgbG9nOiAnYW5ub3RhdGlvbiB0b2tlbjogJDAnIH0sXHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIC8vIG51bWJlcnNcclxuICAgICAgICAgICAgWy9cXGQqXFwuXFxkKyhbZUVdW1xcLStdP1xcZCspPy8sICdudW1iZXIuZmxvYXQnXSxcclxuICAgICAgICAgICAgWy8wW3hYXVswLTlhLWZBLUZdKy8sICdudW1iZXIuaGV4J10sXHJcbiAgICAgICAgICAgIFsvXFxkKy8sICdudW1iZXInXSxcclxuICAgICAgICAgICAgLy8gZGVsaW1pdGVyOiBhZnRlciBudW1iZXIgYmVjYXVzZSBvZiAuXFxkIGZsb2F0c1xyXG4gICAgICAgICAgICBbL1s7LC5dLywgJ2RlbGltaXRlciddLFxyXG4gICAgICAgICAgICBbL1wiXCJcIi8sXHJcbiAgICAgICAgICAgICAgICB7IHRva2VuOiAnc3RyaW5nJywgbmV4dDogJ0BtbHN0cmluZycsIG5leHRFbWJlZGRlZDogJ21hcmtkb3duJyB9XHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIC8vIHN0cmluZ3NcclxuICAgICAgICAgICAgWy9cIihbXlwiXFxcXF18XFxcXC4pKiQvLCAnc3RyaW5nLmludmFsaWQnXSxcclxuICAgICAgICAgICAgWy9cIi8sIHsgdG9rZW46ICdzdHJpbmcucXVvdGUnLCBicmFja2V0OiAnQG9wZW4nLCBuZXh0OiAnQHN0cmluZycgfV0sXHJcbiAgICAgICAgXSxcclxuICAgICAgICBtbHN0cmluZzogW1xyXG4gICAgICAgICAgICBbL1teXCJdKy8sICdzdHJpbmcnXSxcclxuICAgICAgICAgICAgWydcIlwiXCInLCB7IHRva2VuOiAnc3RyaW5nJywgbmV4dDogJ0Bwb3AnLCBuZXh0RW1iZWRkZWQ6ICdAcG9wJyB9XVxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgc3RyaW5nOiBbXHJcbiAgICAgICAgICAgIFsvW15cXFxcXCJdKy8sICdzdHJpbmcnXSxcclxuICAgICAgICAgICAgWy9AZXNjYXBlcy8sICdzdHJpbmcuZXNjYXBlJ10sXHJcbiAgICAgICAgICAgIFsvXFxcXC4vLCAnc3RyaW5nLmVzY2FwZS5pbnZhbGlkJ10sXHJcbiAgICAgICAgICAgIFsvXCIvLCB7IHRva2VuOiAnc3RyaW5nLnF1b3RlJywgYnJhY2tldDogJ0BjbG9zZScsIG5leHQ6ICdAcG9wJyB9XSxcclxuICAgICAgICBdLFxyXG4gICAgICAgIHdoaXRlc3BhY2U6IFtbL1sgXFx0XFxyXFxuXSsvLCAnJ10sIFsvIy4qJC8sICdjb21tZW50J11dLFxyXG4gICAgfSxcclxufTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==