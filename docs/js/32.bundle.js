(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[32],{

/***/ "../node_modules/monaco-editor/esm/vs/basic-languages/pascal/pascal.js":
/*!*****************************************************************************!*\
  !*** ../node_modules/monaco-editor/esm/vs/basic-languages/pascal/pascal.js ***!
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
    // the default separators except `@$`
    wordPattern: /(-?\d*\.\d\w*)|([^\`\~\!\#\%\^\&\*\(\)\-\=\+\[\{\]\}\\\|\;\:\'\"\,\.\<\>\/\?\s]+)/g,
    comments: {
        lineComment: '//',
        blockComment: ['{', '}'],
    },
    brackets: [
        ['{', '}'],
        ['[', ']'],
        ['(', ')'],
        ['<', '>'],
    ],
    autoClosingPairs: [
        { open: '{', close: '}' },
        { open: '[', close: ']' },
        { open: '(', close: ')' },
        { open: '<', close: '>' },
        { open: '\'', close: '\'' },
    ],
    surroundingPairs: [
        { open: '{', close: '}' },
        { open: '[', close: ']' },
        { open: '(', close: ')' },
        { open: '<', close: '>' },
        { open: '\'', close: '\'' },
    ],
    folding: {
        markers: {
            start: new RegExp("^\\s*\\{\\$REGION(\\s\\'.*\\')?\\}"),
            end: new RegExp("^\\s*\\{\\$ENDREGION\\}")
        }
    }
};
var language = {
    defaultToken: '',
    tokenPostfix: '.pascal',
    ignoreCase: true,
    brackets: [
        { open: '{', close: '}', token: 'delimiter.curly' },
        { open: '[', close: ']', token: 'delimiter.square' },
        { open: '(', close: ')', token: 'delimiter.parenthesis' },
        { open: '<', close: '>', token: 'delimiter.angle' }
    ],
    keywords: [
        'absolute', 'abstract', 'all', 'and_then', 'array', 'as', 'asm',
        'attribute', 'begin', 'bindable', 'case', 'class', 'const',
        'contains', 'default', 'div', 'else', 'end', 'except',
        'exports', 'external', 'far', 'file', 'finalization', 'finally',
        'forward', 'generic', 'goto', 'if', 'implements', 'import', 'in',
        'index', 'inherited', 'initialization', 'interrupt', 'is', 'label',
        'library', 'mod', 'module', 'name', 'near', 'not', 'object', 'of',
        'on', 'only', 'operator', 'or_else', 'otherwise', 'override',
        'package', 'packed', 'pow', 'private', 'program', 'protected',
        'public', 'published', 'interface', 'implementation', 'qualified',
        'read', 'record', 'resident', 'requires', 'resourcestring',
        'restricted', 'segment', 'set', 'shl', 'shr', 'specialize', 'stored',
        'then', 'threadvar', 'to', 'try', 'type', 'unit', 'uses', 'var',
        'view', 'virtual', 'dynamic', 'overload', 'reintroduce', 'with',
        'write', 'xor', 'true', 'false', 'procedure', 'function',
        'constructor', 'destructor', 'property', 'break', 'continue', 'exit',
        'abort', 'while', 'do', 'for', 'raise', 'repeat', 'until'
    ],
    typeKeywords: [
        'boolean', 'double', 'byte', 'integer', 'shortint', 'char',
        'longint', 'float', 'string'
    ],
    operators: [
        '=', '>', '<', '<=', '>=', '<>', ':', ':=', 'and', 'or',
        '+', '-', '*', '/', '@', '&', '^', '%'
    ],
    // we include these common regular expressions
    symbols: /[=><:@\^&|+\-*\/\^%]+/,
    // The main tokenizer for our languages
    tokenizer: {
        root: [
            // identifiers and keywords
            [/[a-zA-Z_][\w]*/, {
                    cases: {
                        '@keywords': { token: 'keyword.$0' },
                        '@default': 'identifier'
                    }
                }],
            // whitespace
            { include: '@whitespace' },
            // delimiters and operators
            [/[{}()\[\]]/, '@brackets'],
            [/[<>](?!@symbols)/, '@brackets'],
            [/@symbols/, {
                    cases: {
                        '@operators': 'delimiter',
                        '@default': ''
                    }
                }],
            // numbers
            [/\d*\.\d+([eE][\-+]?\d+)?/, 'number.float'],
            [/\$[0-9a-fA-F]{1,16}/, 'number.hex'],
            [/\d+/, 'number'],
            // delimiter: after number because of .\d floats
            [/[;,.]/, 'delimiter'],
            // strings
            [/'([^'\\]|\\.)*$/, 'string.invalid'],
            [/'/, 'string', '@string'],
            // characters
            [/'[^\\']'/, 'string'],
            [/'/, 'string.invalid'],
            [/\#\d+/, 'string']
        ],
        comment: [
            [/[^\*\}]+/, 'comment'],
            //[/\(\*/,    'comment', '@push' ],    // nested comment  not allowed :-(
            [/\}/, 'comment', '@pop'],
            [/[\{]/, 'comment']
        ],
        string: [
            [/[^\\']+/, 'string'],
            [/\\./, 'string.escape.invalid'],
            [/'/, { token: 'string.quote', bracket: '@close', next: '@pop' }]
        ],
        whitespace: [
            [/[ \t\r\n]+/, 'white'],
            [/\{/, 'comment', '@comment'],
            [/\/\/.*$/, 'comment'],
        ],
    },
};


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL21vbmFjby1lZGl0b3IvZXNtL3ZzL2Jhc2ljLWxhbmd1YWdlcy9wYXNjYWwvcGFzY2FsLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNhO0FBQ047QUFDUDtBQUNBLGtFQUFrRSxJQUFJLE1BQU07QUFDNUU7QUFDQTtBQUNBLHlCQUF5QixLQUFLO0FBQzlCLEtBQUs7QUFDTDtBQUNBLFdBQVcsS0FBSztBQUNoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUyxTQUFTLFlBQVksR0FBRztBQUNqQyxTQUFTLHdCQUF3QjtBQUNqQyxTQUFTLHdCQUF3QjtBQUNqQyxTQUFTLHdCQUF3QjtBQUNqQyxTQUFTLDBCQUEwQjtBQUNuQztBQUNBO0FBQ0EsU0FBUyxTQUFTLFlBQVksR0FBRztBQUNqQyxTQUFTLHdCQUF3QjtBQUNqQyxTQUFTLHdCQUF3QjtBQUNqQyxTQUFTLHdCQUF3QjtBQUNqQyxTQUFTLDBCQUEwQjtBQUNuQztBQUNBO0FBQ0E7QUFDQSx1Q0FBdUMsMEJBQTBCO0FBQ2pFLHFDQUFxQyxlQUFlO0FBQ3BEO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTLFNBQVMsWUFBWSw2QkFBNkI7QUFDM0QsU0FBUyxtREFBbUQ7QUFDNUQsU0FBUyx3REFBd0Q7QUFDakUsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNDQUFzQyxzQkFBc0I7QUFDNUQ7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBLGFBQWEseUJBQXlCO0FBQ3RDO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0EsNEJBQTRCLEtBQUs7QUFDakM7QUFDQTtBQUNBLGdCQUFnQjtBQUNoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0I7QUFDcEI7QUFDQSxnQkFBZ0I7QUFDaEIsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLHlEQUF5RDtBQUM1RTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0I7QUFDaEI7QUFDQTtBQUNBLEtBQUs7QUFDTCIsImZpbGUiOiIuL2pzLzMyLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAqICBDb3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuICogIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS4gU2VlIExpY2Vuc2UudHh0IGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXHJcbiAqLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xyXG4ndXNlIHN0cmljdCc7XHJcbmV4cG9ydCB2YXIgY29uZiA9IHtcclxuICAgIC8vIHRoZSBkZWZhdWx0IHNlcGFyYXRvcnMgZXhjZXB0IGBAJGBcclxuICAgIHdvcmRQYXR0ZXJuOiAvKC0/XFxkKlxcLlxcZFxcdyopfChbXlxcYFxcflxcIVxcI1xcJVxcXlxcJlxcKlxcKFxcKVxcLVxcPVxcK1xcW1xce1xcXVxcfVxcXFxcXHxcXDtcXDpcXCdcXFwiXFwsXFwuXFw8XFw+XFwvXFw/XFxzXSspL2csXHJcbiAgICBjb21tZW50czoge1xyXG4gICAgICAgIGxpbmVDb21tZW50OiAnLy8nLFxyXG4gICAgICAgIGJsb2NrQ29tbWVudDogWyd7JywgJ30nXSxcclxuICAgIH0sXHJcbiAgICBicmFja2V0czogW1xyXG4gICAgICAgIFsneycsICd9J10sXHJcbiAgICAgICAgWydbJywgJ10nXSxcclxuICAgICAgICBbJygnLCAnKSddLFxyXG4gICAgICAgIFsnPCcsICc+J10sXHJcbiAgICBdLFxyXG4gICAgYXV0b0Nsb3NpbmdQYWlyczogW1xyXG4gICAgICAgIHsgb3BlbjogJ3snLCBjbG9zZTogJ30nIH0sXHJcbiAgICAgICAgeyBvcGVuOiAnWycsIGNsb3NlOiAnXScgfSxcclxuICAgICAgICB7IG9wZW46ICcoJywgY2xvc2U6ICcpJyB9LFxyXG4gICAgICAgIHsgb3BlbjogJzwnLCBjbG9zZTogJz4nIH0sXHJcbiAgICAgICAgeyBvcGVuOiAnXFwnJywgY2xvc2U6ICdcXCcnIH0sXHJcbiAgICBdLFxyXG4gICAgc3Vycm91bmRpbmdQYWlyczogW1xyXG4gICAgICAgIHsgb3BlbjogJ3snLCBjbG9zZTogJ30nIH0sXHJcbiAgICAgICAgeyBvcGVuOiAnWycsIGNsb3NlOiAnXScgfSxcclxuICAgICAgICB7IG9wZW46ICcoJywgY2xvc2U6ICcpJyB9LFxyXG4gICAgICAgIHsgb3BlbjogJzwnLCBjbG9zZTogJz4nIH0sXHJcbiAgICAgICAgeyBvcGVuOiAnXFwnJywgY2xvc2U6ICdcXCcnIH0sXHJcbiAgICBdLFxyXG4gICAgZm9sZGluZzoge1xyXG4gICAgICAgIG1hcmtlcnM6IHtcclxuICAgICAgICAgICAgc3RhcnQ6IG5ldyBSZWdFeHAoXCJeXFxcXHMqXFxcXHtcXFxcJFJFR0lPTihcXFxcc1xcXFwnLipcXFxcJyk/XFxcXH1cIiksXHJcbiAgICAgICAgICAgIGVuZDogbmV3IFJlZ0V4cChcIl5cXFxccypcXFxce1xcXFwkRU5EUkVHSU9OXFxcXH1cIilcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn07XHJcbmV4cG9ydCB2YXIgbGFuZ3VhZ2UgPSB7XHJcbiAgICBkZWZhdWx0VG9rZW46ICcnLFxyXG4gICAgdG9rZW5Qb3N0Zml4OiAnLnBhc2NhbCcsXHJcbiAgICBpZ25vcmVDYXNlOiB0cnVlLFxyXG4gICAgYnJhY2tldHM6IFtcclxuICAgICAgICB7IG9wZW46ICd7JywgY2xvc2U6ICd9JywgdG9rZW46ICdkZWxpbWl0ZXIuY3VybHknIH0sXHJcbiAgICAgICAgeyBvcGVuOiAnWycsIGNsb3NlOiAnXScsIHRva2VuOiAnZGVsaW1pdGVyLnNxdWFyZScgfSxcclxuICAgICAgICB7IG9wZW46ICcoJywgY2xvc2U6ICcpJywgdG9rZW46ICdkZWxpbWl0ZXIucGFyZW50aGVzaXMnIH0sXHJcbiAgICAgICAgeyBvcGVuOiAnPCcsIGNsb3NlOiAnPicsIHRva2VuOiAnZGVsaW1pdGVyLmFuZ2xlJyB9XHJcbiAgICBdLFxyXG4gICAga2V5d29yZHM6IFtcclxuICAgICAgICAnYWJzb2x1dGUnLCAnYWJzdHJhY3QnLCAnYWxsJywgJ2FuZF90aGVuJywgJ2FycmF5JywgJ2FzJywgJ2FzbScsXHJcbiAgICAgICAgJ2F0dHJpYnV0ZScsICdiZWdpbicsICdiaW5kYWJsZScsICdjYXNlJywgJ2NsYXNzJywgJ2NvbnN0JyxcclxuICAgICAgICAnY29udGFpbnMnLCAnZGVmYXVsdCcsICdkaXYnLCAnZWxzZScsICdlbmQnLCAnZXhjZXB0JyxcclxuICAgICAgICAnZXhwb3J0cycsICdleHRlcm5hbCcsICdmYXInLCAnZmlsZScsICdmaW5hbGl6YXRpb24nLCAnZmluYWxseScsXHJcbiAgICAgICAgJ2ZvcndhcmQnLCAnZ2VuZXJpYycsICdnb3RvJywgJ2lmJywgJ2ltcGxlbWVudHMnLCAnaW1wb3J0JywgJ2luJyxcclxuICAgICAgICAnaW5kZXgnLCAnaW5oZXJpdGVkJywgJ2luaXRpYWxpemF0aW9uJywgJ2ludGVycnVwdCcsICdpcycsICdsYWJlbCcsXHJcbiAgICAgICAgJ2xpYnJhcnknLCAnbW9kJywgJ21vZHVsZScsICduYW1lJywgJ25lYXInLCAnbm90JywgJ29iamVjdCcsICdvZicsXHJcbiAgICAgICAgJ29uJywgJ29ubHknLCAnb3BlcmF0b3InLCAnb3JfZWxzZScsICdvdGhlcndpc2UnLCAnb3ZlcnJpZGUnLFxyXG4gICAgICAgICdwYWNrYWdlJywgJ3BhY2tlZCcsICdwb3cnLCAncHJpdmF0ZScsICdwcm9ncmFtJywgJ3Byb3RlY3RlZCcsXHJcbiAgICAgICAgJ3B1YmxpYycsICdwdWJsaXNoZWQnLCAnaW50ZXJmYWNlJywgJ2ltcGxlbWVudGF0aW9uJywgJ3F1YWxpZmllZCcsXHJcbiAgICAgICAgJ3JlYWQnLCAncmVjb3JkJywgJ3Jlc2lkZW50JywgJ3JlcXVpcmVzJywgJ3Jlc291cmNlc3RyaW5nJyxcclxuICAgICAgICAncmVzdHJpY3RlZCcsICdzZWdtZW50JywgJ3NldCcsICdzaGwnLCAnc2hyJywgJ3NwZWNpYWxpemUnLCAnc3RvcmVkJyxcclxuICAgICAgICAndGhlbicsICd0aHJlYWR2YXInLCAndG8nLCAndHJ5JywgJ3R5cGUnLCAndW5pdCcsICd1c2VzJywgJ3ZhcicsXHJcbiAgICAgICAgJ3ZpZXcnLCAndmlydHVhbCcsICdkeW5hbWljJywgJ292ZXJsb2FkJywgJ3JlaW50cm9kdWNlJywgJ3dpdGgnLFxyXG4gICAgICAgICd3cml0ZScsICd4b3InLCAndHJ1ZScsICdmYWxzZScsICdwcm9jZWR1cmUnLCAnZnVuY3Rpb24nLFxyXG4gICAgICAgICdjb25zdHJ1Y3RvcicsICdkZXN0cnVjdG9yJywgJ3Byb3BlcnR5JywgJ2JyZWFrJywgJ2NvbnRpbnVlJywgJ2V4aXQnLFxyXG4gICAgICAgICdhYm9ydCcsICd3aGlsZScsICdkbycsICdmb3InLCAncmFpc2UnLCAncmVwZWF0JywgJ3VudGlsJ1xyXG4gICAgXSxcclxuICAgIHR5cGVLZXl3b3JkczogW1xyXG4gICAgICAgICdib29sZWFuJywgJ2RvdWJsZScsICdieXRlJywgJ2ludGVnZXInLCAnc2hvcnRpbnQnLCAnY2hhcicsXHJcbiAgICAgICAgJ2xvbmdpbnQnLCAnZmxvYXQnLCAnc3RyaW5nJ1xyXG4gICAgXSxcclxuICAgIG9wZXJhdG9yczogW1xyXG4gICAgICAgICc9JywgJz4nLCAnPCcsICc8PScsICc+PScsICc8PicsICc6JywgJzo9JywgJ2FuZCcsICdvcicsXHJcbiAgICAgICAgJysnLCAnLScsICcqJywgJy8nLCAnQCcsICcmJywgJ14nLCAnJSdcclxuICAgIF0sXHJcbiAgICAvLyB3ZSBpbmNsdWRlIHRoZXNlIGNvbW1vbiByZWd1bGFyIGV4cHJlc3Npb25zXHJcbiAgICBzeW1ib2xzOiAvWz0+PDpAXFxeJnwrXFwtKlxcL1xcXiVdKy8sXHJcbiAgICAvLyBUaGUgbWFpbiB0b2tlbml6ZXIgZm9yIG91ciBsYW5ndWFnZXNcclxuICAgIHRva2VuaXplcjoge1xyXG4gICAgICAgIHJvb3Q6IFtcclxuICAgICAgICAgICAgLy8gaWRlbnRpZmllcnMgYW5kIGtleXdvcmRzXHJcbiAgICAgICAgICAgIFsvW2EtekEtWl9dW1xcd10qLywge1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2VzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICdAa2V5d29yZHMnOiB7IHRva2VuOiAna2V5d29yZC4kMCcgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgJ0BkZWZhdWx0JzogJ2lkZW50aWZpZXInXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfV0sXHJcbiAgICAgICAgICAgIC8vIHdoaXRlc3BhY2VcclxuICAgICAgICAgICAgeyBpbmNsdWRlOiAnQHdoaXRlc3BhY2UnIH0sXHJcbiAgICAgICAgICAgIC8vIGRlbGltaXRlcnMgYW5kIG9wZXJhdG9yc1xyXG4gICAgICAgICAgICBbL1t7fSgpXFxbXFxdXS8sICdAYnJhY2tldHMnXSxcclxuICAgICAgICAgICAgWy9bPD5dKD8hQHN5bWJvbHMpLywgJ0BicmFja2V0cyddLFxyXG4gICAgICAgICAgICBbL0BzeW1ib2xzLywge1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2VzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICdAb3BlcmF0b3JzJzogJ2RlbGltaXRlcicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICdAZGVmYXVsdCc6ICcnXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfV0sXHJcbiAgICAgICAgICAgIC8vIG51bWJlcnNcclxuICAgICAgICAgICAgWy9cXGQqXFwuXFxkKyhbZUVdW1xcLStdP1xcZCspPy8sICdudW1iZXIuZmxvYXQnXSxcclxuICAgICAgICAgICAgWy9cXCRbMC05YS1mQS1GXXsxLDE2fS8sICdudW1iZXIuaGV4J10sXHJcbiAgICAgICAgICAgIFsvXFxkKy8sICdudW1iZXInXSxcclxuICAgICAgICAgICAgLy8gZGVsaW1pdGVyOiBhZnRlciBudW1iZXIgYmVjYXVzZSBvZiAuXFxkIGZsb2F0c1xyXG4gICAgICAgICAgICBbL1s7LC5dLywgJ2RlbGltaXRlciddLFxyXG4gICAgICAgICAgICAvLyBzdHJpbmdzXHJcbiAgICAgICAgICAgIFsvJyhbXidcXFxcXXxcXFxcLikqJC8sICdzdHJpbmcuaW52YWxpZCddLFxyXG4gICAgICAgICAgICBbLycvLCAnc3RyaW5nJywgJ0BzdHJpbmcnXSxcclxuICAgICAgICAgICAgLy8gY2hhcmFjdGVyc1xyXG4gICAgICAgICAgICBbLydbXlxcXFwnXScvLCAnc3RyaW5nJ10sXHJcbiAgICAgICAgICAgIFsvJy8sICdzdHJpbmcuaW52YWxpZCddLFxyXG4gICAgICAgICAgICBbL1xcI1xcZCsvLCAnc3RyaW5nJ11cclxuICAgICAgICBdLFxyXG4gICAgICAgIGNvbW1lbnQ6IFtcclxuICAgICAgICAgICAgWy9bXlxcKlxcfV0rLywgJ2NvbW1lbnQnXSxcclxuICAgICAgICAgICAgLy9bL1xcKFxcKi8sICAgICdjb21tZW50JywgJ0BwdXNoJyBdLCAgICAvLyBuZXN0ZWQgY29tbWVudCAgbm90IGFsbG93ZWQgOi0oXHJcbiAgICAgICAgICAgIFsvXFx9LywgJ2NvbW1lbnQnLCAnQHBvcCddLFxyXG4gICAgICAgICAgICBbL1tcXHtdLywgJ2NvbW1lbnQnXVxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgc3RyaW5nOiBbXHJcbiAgICAgICAgICAgIFsvW15cXFxcJ10rLywgJ3N0cmluZyddLFxyXG4gICAgICAgICAgICBbL1xcXFwuLywgJ3N0cmluZy5lc2NhcGUuaW52YWxpZCddLFxyXG4gICAgICAgICAgICBbLycvLCB7IHRva2VuOiAnc3RyaW5nLnF1b3RlJywgYnJhY2tldDogJ0BjbG9zZScsIG5leHQ6ICdAcG9wJyB9XVxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgd2hpdGVzcGFjZTogW1xyXG4gICAgICAgICAgICBbL1sgXFx0XFxyXFxuXSsvLCAnd2hpdGUnXSxcclxuICAgICAgICAgICAgWy9cXHsvLCAnY29tbWVudCcsICdAY29tbWVudCddLFxyXG4gICAgICAgICAgICBbL1xcL1xcLy4qJC8sICdjb21tZW50J10sXHJcbiAgICAgICAgXSxcclxuICAgIH0sXHJcbn07XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=