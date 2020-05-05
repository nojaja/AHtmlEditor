(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[13],{

/***/ "../node_modules/monaco-editor/esm/vs/basic-languages/csharp/csharp.js":
/*!*****************************************************************************!*\
  !*** ../node_modules/monaco-editor/esm/vs/basic-languages/csharp/csharp.js ***!
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
    wordPattern: /(-?\d*\.\d\w*)|([^\`\~\!\#\$\%\^\&\*\(\)\-\=\+\[\{\]\}\\\|\;\:\'\"\,\.\<\>\/\?\s]+)/g,
    comments: {
        lineComment: '//',
        blockComment: ['/*', '*/'],
    },
    brackets: [
        ['{', '}'],
        ['[', ']'],
        ['(', ')'],
    ],
    autoClosingPairs: [
        { open: '{', close: '}' },
        { open: '[', close: ']' },
        { open: '(', close: ')' },
        { open: '\'', close: '\'', notIn: ['string', 'comment'] },
        { open: '"', close: '"', notIn: ['string', 'comment'] },
    ],
    surroundingPairs: [
        { open: '{', close: '}' },
        { open: '[', close: ']' },
        { open: '(', close: ')' },
        { open: '<', close: '>' },
        { open: '\'', close: '\'' },
        { open: '"', close: '"' },
    ],
    folding: {
        markers: {
            start: new RegExp("^\\s*#region\\b"),
            end: new RegExp("^\\s*#endregion\\b")
        }
    }
};
var language = {
    defaultToken: '',
    tokenPostfix: '.cs',
    brackets: [
        { open: '{', close: '}', token: 'delimiter.curly' },
        { open: '[', close: ']', token: 'delimiter.square' },
        { open: '(', close: ')', token: 'delimiter.parenthesis' },
        { open: '<', close: '>', token: 'delimiter.angle' }
    ],
    keywords: [
        'extern', 'alias', 'using', 'bool', 'decimal', 'sbyte', 'byte', 'short',
        'ushort', 'int', 'uint', 'long', 'ulong', 'char', 'float', 'double',
        'object', 'dynamic', 'string', 'assembly', 'is', 'as', 'ref',
        'out', 'this', 'base', 'new', 'typeof', 'void', 'checked', 'unchecked',
        'default', 'delegate', 'var', 'const', 'if', 'else', 'switch', 'case',
        'while', 'do', 'for', 'foreach', 'in', 'break', 'continue', 'goto',
        'return', 'throw', 'try', 'catch', 'finally', 'lock', 'yield', 'from',
        'let', 'where', 'join', 'on', 'equals', 'into', 'orderby', 'ascending',
        'descending', 'select', 'group', 'by', 'namespace', 'partial', 'class',
        'field', 'event', 'method', 'param', 'property', 'public', 'protected',
        'internal', 'private', 'abstract', 'sealed', 'static', 'struct', 'readonly',
        'volatile', 'virtual', 'override', 'params', 'get', 'set', 'add', 'remove',
        'operator', 'true', 'false', 'implicit', 'explicit', 'interface', 'enum',
        'null', 'async', 'await', 'fixed', 'sizeof', 'stackalloc', 'unsafe', 'nameof',
        'when'
    ],
    namespaceFollows: [
        'namespace', 'using',
    ],
    parenFollows: [
        'if', 'for', 'while', 'switch', 'foreach', 'using', 'catch', 'when'
    ],
    operators: [
        '=', '??', '||', '&&', '|', '^', '&', '==', '!=', '<=', '>=', '<<',
        '+', '-', '*', '/', '%', '!', '~', '++', '--', '+=',
        '-=', '*=', '/=', '%=', '&=', '|=', '^=', '<<=', '>>=', '>>', '=>'
    ],
    symbols: /[=><!~?:&|+\-*\/\^%]+/,
    // escape sequences
    escapes: /\\(?:[abfnrtv\\"']|x[0-9A-Fa-f]{1,4}|u[0-9A-Fa-f]{4}|U[0-9A-Fa-f]{8})/,
    // The main tokenizer for our languages
    tokenizer: {
        root: [
            // identifiers and keywords
            [/\@?[a-zA-Z_]\w*/, {
                    cases: {
                        '@namespaceFollows': { token: 'keyword.$0', next: '@namespace' },
                        '@keywords': { token: 'keyword.$0', next: '@qualified' },
                        '@default': { token: 'identifier', next: '@qualified' }
                    }
                }],
            // whitespace
            { include: '@whitespace' },
            // delimiters and operators
            [/}/, {
                    cases: {
                        '$S2==interpolatedstring': { token: 'string.quote', next: '@pop' },
                        '$S2==litinterpstring': { token: 'string.quote', next: '@pop' },
                        '@default': '@brackets'
                    }
                }],
            [/[{}()\[\]]/, '@brackets'],
            [/[<>](?!@symbols)/, '@brackets'],
            [/@symbols/, {
                    cases: {
                        '@operators': 'delimiter',
                        '@default': ''
                    }
                }],
            // numbers
            [/[0-9_]*\.[0-9_]+([eE][\-+]?\d+)?[fFdD]?/, 'number.float'],
            [/0[xX][0-9a-fA-F_]+/, 'number.hex'],
            [/0[bB][01_]+/, 'number.hex'],
            [/[0-9_]+/, 'number'],
            // delimiter: after number because of .\d floats
            [/[;,.]/, 'delimiter'],
            // strings
            [/"([^"\\]|\\.)*$/, 'string.invalid'],
            [/"/, { token: 'string.quote', next: '@string' }],
            [/\$\@"/, { token: 'string.quote', next: '@litinterpstring' }],
            [/\@"/, { token: 'string.quote', next: '@litstring' }],
            [/\$"/, { token: 'string.quote', next: '@interpolatedstring' }],
            // characters
            [/'[^\\']'/, 'string'],
            [/(')(@escapes)(')/, ['string', 'string.escape', 'string']],
            [/'/, 'string.invalid']
        ],
        qualified: [
            [/[a-zA-Z_][\w]*/, {
                    cases: {
                        '@keywords': { token: 'keyword.$0' },
                        '@default': 'identifier'
                    }
                }],
            [/\./, 'delimiter'],
            ['', '', '@pop'],
        ],
        namespace: [
            { include: '@whitespace' },
            [/[A-Z]\w*/, 'namespace'],
            [/[\.=]/, 'delimiter'],
            ['', '', '@pop'],
        ],
        comment: [
            [/[^\/*]+/, 'comment'],
            // [/\/\*/,    'comment', '@push' ],    // no nested comments :-(
            ['\\*/', 'comment', '@pop'],
            [/[\/*]/, 'comment']
        ],
        string: [
            [/[^\\"]+/, 'string'],
            [/@escapes/, 'string.escape'],
            [/\\./, 'string.escape.invalid'],
            [/"/, { token: 'string.quote', next: '@pop' }]
        ],
        litstring: [
            [/[^"]+/, 'string'],
            [/""/, 'string.escape'],
            [/"/, { token: 'string.quote', next: '@pop' }]
        ],
        litinterpstring: [
            [/[^"{]+/, 'string'],
            [/""/, 'string.escape'],
            [/{{/, 'string.escape'],
            [/}}/, 'string.escape'],
            [/{/, { token: 'string.quote', next: 'root.litinterpstring' }],
            [/"/, { token: 'string.quote', next: '@pop' }]
        ],
        interpolatedstring: [
            [/[^\\"{]+/, 'string'],
            [/@escapes/, 'string.escape'],
            [/\\./, 'string.escape.invalid'],
            [/{{/, 'string.escape'],
            [/}}/, 'string.escape'],
            [/{/, { token: 'string.quote', next: 'root.interpolatedstring' }],
            [/"/, { token: 'string.quote', next: '@pop' }]
        ],
        whitespace: [
            [/^[ \t\v\f]*#((r)|(load))(?=\s)/, 'directive.csx'],
            [/^[ \t\v\f]*#\w.*$/, 'namespace.cpp'],
            [/[ \t\v\f\r\n]+/, ''],
            [/\/\*/, 'comment', '@comment'],
            [/\/\/.*$/, 'comment'],
        ],
    },
};


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL21vbmFjby1lZGl0b3IvZXNtL3ZzL2Jhc2ljLWxhbmd1YWdlcy9jc2hhcnAvY3NoYXJwLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNhO0FBQ047QUFDUCxvRUFBb0UsSUFBSSxNQUFNO0FBQzlFO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLFdBQVcsS0FBSztBQUNoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVMsU0FBUyxZQUFZLEdBQUc7QUFDakMsU0FBUyx3QkFBd0I7QUFDakMsU0FBUyx3QkFBd0I7QUFDakMsU0FBUyx3REFBd0Q7QUFDakUsU0FBUyxzREFBc0Q7QUFDL0Q7QUFDQTtBQUNBLFNBQVMsU0FBUyxZQUFZLEdBQUc7QUFDakMsU0FBUyx3QkFBd0I7QUFDakMsU0FBUyx3QkFBd0I7QUFDakMsU0FBUyx3QkFBd0I7QUFDakMsU0FBUywwQkFBMEI7QUFDbkMsU0FBUyx3QkFBd0I7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsU0FBUyxTQUFTLFlBQVksNkJBQTZCO0FBQzNELFNBQVMsbURBQW1EO0FBQzVELFNBQVMsd0RBQXdEO0FBQ2pFLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhDQUE4QyxJQUFJLGNBQWMsRUFBRSxjQUFjLEVBQUU7QUFDbEY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOENBQThDLDBDQUEwQztBQUN4RixzQ0FBc0MsMENBQTBDO0FBQ2hGLHFDQUFxQztBQUNyQztBQUNBLGlCQUFpQjtBQUNqQjtBQUNBLGFBQWEseUJBQXlCO0FBQ3RDO0FBQ0EsZUFBZTtBQUNmO0FBQ0Esb0RBQW9ELHNDQUFzQztBQUMxRixpREFBaUQsc0NBQXNDO0FBQ3ZGO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakIsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0I7QUFDaEI7QUFDQTtBQUNBLG1CQUFtQix5Q0FBeUM7QUFDNUQsdUJBQXVCLGtEQUFrRDtBQUN6RSxxQkFBcUIsNENBQTRDO0FBQ2pFLHFCQUFxQixxREFBcUQ7QUFDMUU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNDQUFzQyxzQkFBc0I7QUFDNUQ7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEseUJBQXlCO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsc0NBQXNDO0FBQ3pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLHNDQUFzQztBQUN6RDtBQUNBO0FBQ0Esa0JBQWtCO0FBQ2xCO0FBQ0EsZ0JBQWdCO0FBQ2hCLGdCQUFnQjtBQUNoQixlQUFlLElBQUksc0RBQXNEO0FBQ3pFLG1CQUFtQixzQ0FBc0M7QUFDekQ7QUFDQTtBQUNBLG9CQUFvQjtBQUNwQjtBQUNBO0FBQ0EsZ0JBQWdCO0FBQ2hCLGdCQUFnQjtBQUNoQixlQUFlLElBQUkseURBQXlEO0FBQzVFLG1CQUFtQixzQ0FBc0M7QUFDekQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCIsImZpbGUiOiJqcy8xMy5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gKiAgQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbiAqICBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuIFNlZSBMaWNlbnNlLnR4dCBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxyXG4gKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cclxuJ3VzZSBzdHJpY3QnO1xyXG5leHBvcnQgdmFyIGNvbmYgPSB7XHJcbiAgICB3b3JkUGF0dGVybjogLygtP1xcZCpcXC5cXGRcXHcqKXwoW15cXGBcXH5cXCFcXCNcXCRcXCVcXF5cXCZcXCpcXChcXClcXC1cXD1cXCtcXFtcXHtcXF1cXH1cXFxcXFx8XFw7XFw6XFwnXFxcIlxcLFxcLlxcPFxcPlxcL1xcP1xcc10rKS9nLFxyXG4gICAgY29tbWVudHM6IHtcclxuICAgICAgICBsaW5lQ29tbWVudDogJy8vJyxcclxuICAgICAgICBibG9ja0NvbW1lbnQ6IFsnLyonLCAnKi8nXSxcclxuICAgIH0sXHJcbiAgICBicmFja2V0czogW1xyXG4gICAgICAgIFsneycsICd9J10sXHJcbiAgICAgICAgWydbJywgJ10nXSxcclxuICAgICAgICBbJygnLCAnKSddLFxyXG4gICAgXSxcclxuICAgIGF1dG9DbG9zaW5nUGFpcnM6IFtcclxuICAgICAgICB7IG9wZW46ICd7JywgY2xvc2U6ICd9JyB9LFxyXG4gICAgICAgIHsgb3BlbjogJ1snLCBjbG9zZTogJ10nIH0sXHJcbiAgICAgICAgeyBvcGVuOiAnKCcsIGNsb3NlOiAnKScgfSxcclxuICAgICAgICB7IG9wZW46ICdcXCcnLCBjbG9zZTogJ1xcJycsIG5vdEluOiBbJ3N0cmluZycsICdjb21tZW50J10gfSxcclxuICAgICAgICB7IG9wZW46ICdcIicsIGNsb3NlOiAnXCInLCBub3RJbjogWydzdHJpbmcnLCAnY29tbWVudCddIH0sXHJcbiAgICBdLFxyXG4gICAgc3Vycm91bmRpbmdQYWlyczogW1xyXG4gICAgICAgIHsgb3BlbjogJ3snLCBjbG9zZTogJ30nIH0sXHJcbiAgICAgICAgeyBvcGVuOiAnWycsIGNsb3NlOiAnXScgfSxcclxuICAgICAgICB7IG9wZW46ICcoJywgY2xvc2U6ICcpJyB9LFxyXG4gICAgICAgIHsgb3BlbjogJzwnLCBjbG9zZTogJz4nIH0sXHJcbiAgICAgICAgeyBvcGVuOiAnXFwnJywgY2xvc2U6ICdcXCcnIH0sXHJcbiAgICAgICAgeyBvcGVuOiAnXCInLCBjbG9zZTogJ1wiJyB9LFxyXG4gICAgXSxcclxuICAgIGZvbGRpbmc6IHtcclxuICAgICAgICBtYXJrZXJzOiB7XHJcbiAgICAgICAgICAgIHN0YXJ0OiBuZXcgUmVnRXhwKFwiXlxcXFxzKiNyZWdpb25cXFxcYlwiKSxcclxuICAgICAgICAgICAgZW5kOiBuZXcgUmVnRXhwKFwiXlxcXFxzKiNlbmRyZWdpb25cXFxcYlwiKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufTtcclxuZXhwb3J0IHZhciBsYW5ndWFnZSA9IHtcclxuICAgIGRlZmF1bHRUb2tlbjogJycsXHJcbiAgICB0b2tlblBvc3RmaXg6ICcuY3MnLFxyXG4gICAgYnJhY2tldHM6IFtcclxuICAgICAgICB7IG9wZW46ICd7JywgY2xvc2U6ICd9JywgdG9rZW46ICdkZWxpbWl0ZXIuY3VybHknIH0sXHJcbiAgICAgICAgeyBvcGVuOiAnWycsIGNsb3NlOiAnXScsIHRva2VuOiAnZGVsaW1pdGVyLnNxdWFyZScgfSxcclxuICAgICAgICB7IG9wZW46ICcoJywgY2xvc2U6ICcpJywgdG9rZW46ICdkZWxpbWl0ZXIucGFyZW50aGVzaXMnIH0sXHJcbiAgICAgICAgeyBvcGVuOiAnPCcsIGNsb3NlOiAnPicsIHRva2VuOiAnZGVsaW1pdGVyLmFuZ2xlJyB9XHJcbiAgICBdLFxyXG4gICAga2V5d29yZHM6IFtcclxuICAgICAgICAnZXh0ZXJuJywgJ2FsaWFzJywgJ3VzaW5nJywgJ2Jvb2wnLCAnZGVjaW1hbCcsICdzYnl0ZScsICdieXRlJywgJ3Nob3J0JyxcclxuICAgICAgICAndXNob3J0JywgJ2ludCcsICd1aW50JywgJ2xvbmcnLCAndWxvbmcnLCAnY2hhcicsICdmbG9hdCcsICdkb3VibGUnLFxyXG4gICAgICAgICdvYmplY3QnLCAnZHluYW1pYycsICdzdHJpbmcnLCAnYXNzZW1ibHknLCAnaXMnLCAnYXMnLCAncmVmJyxcclxuICAgICAgICAnb3V0JywgJ3RoaXMnLCAnYmFzZScsICduZXcnLCAndHlwZW9mJywgJ3ZvaWQnLCAnY2hlY2tlZCcsICd1bmNoZWNrZWQnLFxyXG4gICAgICAgICdkZWZhdWx0JywgJ2RlbGVnYXRlJywgJ3ZhcicsICdjb25zdCcsICdpZicsICdlbHNlJywgJ3N3aXRjaCcsICdjYXNlJyxcclxuICAgICAgICAnd2hpbGUnLCAnZG8nLCAnZm9yJywgJ2ZvcmVhY2gnLCAnaW4nLCAnYnJlYWsnLCAnY29udGludWUnLCAnZ290bycsXHJcbiAgICAgICAgJ3JldHVybicsICd0aHJvdycsICd0cnknLCAnY2F0Y2gnLCAnZmluYWxseScsICdsb2NrJywgJ3lpZWxkJywgJ2Zyb20nLFxyXG4gICAgICAgICdsZXQnLCAnd2hlcmUnLCAnam9pbicsICdvbicsICdlcXVhbHMnLCAnaW50bycsICdvcmRlcmJ5JywgJ2FzY2VuZGluZycsXHJcbiAgICAgICAgJ2Rlc2NlbmRpbmcnLCAnc2VsZWN0JywgJ2dyb3VwJywgJ2J5JywgJ25hbWVzcGFjZScsICdwYXJ0aWFsJywgJ2NsYXNzJyxcclxuICAgICAgICAnZmllbGQnLCAnZXZlbnQnLCAnbWV0aG9kJywgJ3BhcmFtJywgJ3Byb3BlcnR5JywgJ3B1YmxpYycsICdwcm90ZWN0ZWQnLFxyXG4gICAgICAgICdpbnRlcm5hbCcsICdwcml2YXRlJywgJ2Fic3RyYWN0JywgJ3NlYWxlZCcsICdzdGF0aWMnLCAnc3RydWN0JywgJ3JlYWRvbmx5JyxcclxuICAgICAgICAndm9sYXRpbGUnLCAndmlydHVhbCcsICdvdmVycmlkZScsICdwYXJhbXMnLCAnZ2V0JywgJ3NldCcsICdhZGQnLCAncmVtb3ZlJyxcclxuICAgICAgICAnb3BlcmF0b3InLCAndHJ1ZScsICdmYWxzZScsICdpbXBsaWNpdCcsICdleHBsaWNpdCcsICdpbnRlcmZhY2UnLCAnZW51bScsXHJcbiAgICAgICAgJ251bGwnLCAnYXN5bmMnLCAnYXdhaXQnLCAnZml4ZWQnLCAnc2l6ZW9mJywgJ3N0YWNrYWxsb2MnLCAndW5zYWZlJywgJ25hbWVvZicsXHJcbiAgICAgICAgJ3doZW4nXHJcbiAgICBdLFxyXG4gICAgbmFtZXNwYWNlRm9sbG93czogW1xyXG4gICAgICAgICduYW1lc3BhY2UnLCAndXNpbmcnLFxyXG4gICAgXSxcclxuICAgIHBhcmVuRm9sbG93czogW1xyXG4gICAgICAgICdpZicsICdmb3InLCAnd2hpbGUnLCAnc3dpdGNoJywgJ2ZvcmVhY2gnLCAndXNpbmcnLCAnY2F0Y2gnLCAnd2hlbidcclxuICAgIF0sXHJcbiAgICBvcGVyYXRvcnM6IFtcclxuICAgICAgICAnPScsICc/PycsICd8fCcsICcmJicsICd8JywgJ14nLCAnJicsICc9PScsICchPScsICc8PScsICc+PScsICc8PCcsXHJcbiAgICAgICAgJysnLCAnLScsICcqJywgJy8nLCAnJScsICchJywgJ34nLCAnKysnLCAnLS0nLCAnKz0nLFxyXG4gICAgICAgICctPScsICcqPScsICcvPScsICclPScsICcmPScsICd8PScsICdePScsICc8PD0nLCAnPj49JywgJz4+JywgJz0+J1xyXG4gICAgXSxcclxuICAgIHN5bWJvbHM6IC9bPT48IX4/OiZ8K1xcLSpcXC9cXF4lXSsvLFxyXG4gICAgLy8gZXNjYXBlIHNlcXVlbmNlc1xyXG4gICAgZXNjYXBlczogL1xcXFwoPzpbYWJmbnJ0dlxcXFxcIiddfHhbMC05QS1GYS1mXXsxLDR9fHVbMC05QS1GYS1mXXs0fXxVWzAtOUEtRmEtZl17OH0pLyxcclxuICAgIC8vIFRoZSBtYWluIHRva2VuaXplciBmb3Igb3VyIGxhbmd1YWdlc1xyXG4gICAgdG9rZW5pemVyOiB7XHJcbiAgICAgICAgcm9vdDogW1xyXG4gICAgICAgICAgICAvLyBpZGVudGlmaWVycyBhbmQga2V5d29yZHNcclxuICAgICAgICAgICAgWy9cXEA/W2EtekEtWl9dXFx3Ki8sIHtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAnQG5hbWVzcGFjZUZvbGxvd3MnOiB7IHRva2VuOiAna2V5d29yZC4kMCcsIG5leHQ6ICdAbmFtZXNwYWNlJyB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAnQGtleXdvcmRzJzogeyB0b2tlbjogJ2tleXdvcmQuJDAnLCBuZXh0OiAnQHF1YWxpZmllZCcgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgJ0BkZWZhdWx0JzogeyB0b2tlbjogJ2lkZW50aWZpZXInLCBuZXh0OiAnQHF1YWxpZmllZCcgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1dLFxyXG4gICAgICAgICAgICAvLyB3aGl0ZXNwYWNlXHJcbiAgICAgICAgICAgIHsgaW5jbHVkZTogJ0B3aGl0ZXNwYWNlJyB9LFxyXG4gICAgICAgICAgICAvLyBkZWxpbWl0ZXJzIGFuZCBvcGVyYXRvcnNcclxuICAgICAgICAgICAgWy99Lywge1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2VzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICckUzI9PWludGVycG9sYXRlZHN0cmluZyc6IHsgdG9rZW46ICdzdHJpbmcucXVvdGUnLCBuZXh0OiAnQHBvcCcgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgJyRTMj09bGl0aW50ZXJwc3RyaW5nJzogeyB0b2tlbjogJ3N0cmluZy5xdW90ZScsIG5leHQ6ICdAcG9wJyB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAnQGRlZmF1bHQnOiAnQGJyYWNrZXRzJ1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1dLFxyXG4gICAgICAgICAgICBbL1t7fSgpXFxbXFxdXS8sICdAYnJhY2tldHMnXSxcclxuICAgICAgICAgICAgWy9bPD5dKD8hQHN5bWJvbHMpLywgJ0BicmFja2V0cyddLFxyXG4gICAgICAgICAgICBbL0BzeW1ib2xzLywge1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2VzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICdAb3BlcmF0b3JzJzogJ2RlbGltaXRlcicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICdAZGVmYXVsdCc6ICcnXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfV0sXHJcbiAgICAgICAgICAgIC8vIG51bWJlcnNcclxuICAgICAgICAgICAgWy9bMC05X10qXFwuWzAtOV9dKyhbZUVdW1xcLStdP1xcZCspP1tmRmREXT8vLCAnbnVtYmVyLmZsb2F0J10sXHJcbiAgICAgICAgICAgIFsvMFt4WF1bMC05YS1mQS1GX10rLywgJ251bWJlci5oZXgnXSxcclxuICAgICAgICAgICAgWy8wW2JCXVswMV9dKy8sICdudW1iZXIuaGV4J10sXHJcbiAgICAgICAgICAgIFsvWzAtOV9dKy8sICdudW1iZXInXSxcclxuICAgICAgICAgICAgLy8gZGVsaW1pdGVyOiBhZnRlciBudW1iZXIgYmVjYXVzZSBvZiAuXFxkIGZsb2F0c1xyXG4gICAgICAgICAgICBbL1s7LC5dLywgJ2RlbGltaXRlciddLFxyXG4gICAgICAgICAgICAvLyBzdHJpbmdzXHJcbiAgICAgICAgICAgIFsvXCIoW15cIlxcXFxdfFxcXFwuKSokLywgJ3N0cmluZy5pbnZhbGlkJ10sXHJcbiAgICAgICAgICAgIFsvXCIvLCB7IHRva2VuOiAnc3RyaW5nLnF1b3RlJywgbmV4dDogJ0BzdHJpbmcnIH1dLFxyXG4gICAgICAgICAgICBbL1xcJFxcQFwiLywgeyB0b2tlbjogJ3N0cmluZy5xdW90ZScsIG5leHQ6ICdAbGl0aW50ZXJwc3RyaW5nJyB9XSxcclxuICAgICAgICAgICAgWy9cXEBcIi8sIHsgdG9rZW46ICdzdHJpbmcucXVvdGUnLCBuZXh0OiAnQGxpdHN0cmluZycgfV0sXHJcbiAgICAgICAgICAgIFsvXFwkXCIvLCB7IHRva2VuOiAnc3RyaW5nLnF1b3RlJywgbmV4dDogJ0BpbnRlcnBvbGF0ZWRzdHJpbmcnIH1dLFxyXG4gICAgICAgICAgICAvLyBjaGFyYWN0ZXJzXHJcbiAgICAgICAgICAgIFsvJ1teXFxcXCddJy8sICdzdHJpbmcnXSxcclxuICAgICAgICAgICAgWy8oJykoQGVzY2FwZXMpKCcpLywgWydzdHJpbmcnLCAnc3RyaW5nLmVzY2FwZScsICdzdHJpbmcnXV0sXHJcbiAgICAgICAgICAgIFsvJy8sICdzdHJpbmcuaW52YWxpZCddXHJcbiAgICAgICAgXSxcclxuICAgICAgICBxdWFsaWZpZWQ6IFtcclxuICAgICAgICAgICAgWy9bYS16QS1aX11bXFx3XSovLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZXM6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJ0BrZXl3b3Jkcyc6IHsgdG9rZW46ICdrZXl3b3JkLiQwJyB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAnQGRlZmF1bHQnOiAnaWRlbnRpZmllcidcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XSxcclxuICAgICAgICAgICAgWy9cXC4vLCAnZGVsaW1pdGVyJ10sXHJcbiAgICAgICAgICAgIFsnJywgJycsICdAcG9wJ10sXHJcbiAgICAgICAgXSxcclxuICAgICAgICBuYW1lc3BhY2U6IFtcclxuICAgICAgICAgICAgeyBpbmNsdWRlOiAnQHdoaXRlc3BhY2UnIH0sXHJcbiAgICAgICAgICAgIFsvW0EtWl1cXHcqLywgJ25hbWVzcGFjZSddLFxyXG4gICAgICAgICAgICBbL1tcXC49XS8sICdkZWxpbWl0ZXInXSxcclxuICAgICAgICAgICAgWycnLCAnJywgJ0Bwb3AnXSxcclxuICAgICAgICBdLFxyXG4gICAgICAgIGNvbW1lbnQ6IFtcclxuICAgICAgICAgICAgWy9bXlxcLypdKy8sICdjb21tZW50J10sXHJcbiAgICAgICAgICAgIC8vIFsvXFwvXFwqLywgICAgJ2NvbW1lbnQnLCAnQHB1c2gnIF0sICAgIC8vIG5vIG5lc3RlZCBjb21tZW50cyA6LShcclxuICAgICAgICAgICAgWydcXFxcKi8nLCAnY29tbWVudCcsICdAcG9wJ10sXHJcbiAgICAgICAgICAgIFsvW1xcLypdLywgJ2NvbW1lbnQnXVxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgc3RyaW5nOiBbXHJcbiAgICAgICAgICAgIFsvW15cXFxcXCJdKy8sICdzdHJpbmcnXSxcclxuICAgICAgICAgICAgWy9AZXNjYXBlcy8sICdzdHJpbmcuZXNjYXBlJ10sXHJcbiAgICAgICAgICAgIFsvXFxcXC4vLCAnc3RyaW5nLmVzY2FwZS5pbnZhbGlkJ10sXHJcbiAgICAgICAgICAgIFsvXCIvLCB7IHRva2VuOiAnc3RyaW5nLnF1b3RlJywgbmV4dDogJ0Bwb3AnIH1dXHJcbiAgICAgICAgXSxcclxuICAgICAgICBsaXRzdHJpbmc6IFtcclxuICAgICAgICAgICAgWy9bXlwiXSsvLCAnc3RyaW5nJ10sXHJcbiAgICAgICAgICAgIFsvXCJcIi8sICdzdHJpbmcuZXNjYXBlJ10sXHJcbiAgICAgICAgICAgIFsvXCIvLCB7IHRva2VuOiAnc3RyaW5nLnF1b3RlJywgbmV4dDogJ0Bwb3AnIH1dXHJcbiAgICAgICAgXSxcclxuICAgICAgICBsaXRpbnRlcnBzdHJpbmc6IFtcclxuICAgICAgICAgICAgWy9bXlwie10rLywgJ3N0cmluZyddLFxyXG4gICAgICAgICAgICBbL1wiXCIvLCAnc3RyaW5nLmVzY2FwZSddLFxyXG4gICAgICAgICAgICBbL3t7LywgJ3N0cmluZy5lc2NhcGUnXSxcclxuICAgICAgICAgICAgWy99fS8sICdzdHJpbmcuZXNjYXBlJ10sXHJcbiAgICAgICAgICAgIFsvey8sIHsgdG9rZW46ICdzdHJpbmcucXVvdGUnLCBuZXh0OiAncm9vdC5saXRpbnRlcnBzdHJpbmcnIH1dLFxyXG4gICAgICAgICAgICBbL1wiLywgeyB0b2tlbjogJ3N0cmluZy5xdW90ZScsIG5leHQ6ICdAcG9wJyB9XVxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgaW50ZXJwb2xhdGVkc3RyaW5nOiBbXHJcbiAgICAgICAgICAgIFsvW15cXFxcXCJ7XSsvLCAnc3RyaW5nJ10sXHJcbiAgICAgICAgICAgIFsvQGVzY2FwZXMvLCAnc3RyaW5nLmVzY2FwZSddLFxyXG4gICAgICAgICAgICBbL1xcXFwuLywgJ3N0cmluZy5lc2NhcGUuaW52YWxpZCddLFxyXG4gICAgICAgICAgICBbL3t7LywgJ3N0cmluZy5lc2NhcGUnXSxcclxuICAgICAgICAgICAgWy99fS8sICdzdHJpbmcuZXNjYXBlJ10sXHJcbiAgICAgICAgICAgIFsvey8sIHsgdG9rZW46ICdzdHJpbmcucXVvdGUnLCBuZXh0OiAncm9vdC5pbnRlcnBvbGF0ZWRzdHJpbmcnIH1dLFxyXG4gICAgICAgICAgICBbL1wiLywgeyB0b2tlbjogJ3N0cmluZy5xdW90ZScsIG5leHQ6ICdAcG9wJyB9XVxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgd2hpdGVzcGFjZTogW1xyXG4gICAgICAgICAgICBbL15bIFxcdFxcdlxcZl0qIygocil8KGxvYWQpKSg/PVxccykvLCAnZGlyZWN0aXZlLmNzeCddLFxyXG4gICAgICAgICAgICBbL15bIFxcdFxcdlxcZl0qI1xcdy4qJC8sICduYW1lc3BhY2UuY3BwJ10sXHJcbiAgICAgICAgICAgIFsvWyBcXHRcXHZcXGZcXHJcXG5dKy8sICcnXSxcclxuICAgICAgICAgICAgWy9cXC9cXCovLCAnY29tbWVudCcsICdAY29tbWVudCddLFxyXG4gICAgICAgICAgICBbL1xcL1xcLy4qJC8sICdjb21tZW50J10sXHJcbiAgICAgICAgXSxcclxuICAgIH0sXHJcbn07XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=