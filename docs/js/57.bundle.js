(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[57],{

/***/ "../node_modules/monaco-editor/esm/vs/basic-languages/swift/swift.js":
/*!***************************************************************************!*\
  !*** ../node_modules/monaco-editor/esm/vs/basic-languages/swift/swift.js ***!
  \***************************************************************************/
/*! exports provided: conf, language */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "conf", function() { return conf; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "language", function() { return language; });
/*!---------------------------------------------------------------------------------------------
 *  Copyright (C) David Owens II, owensd.io. All rights reserved.
 *--------------------------------------------------------------------------------------------*/

var conf = {
    comments: {
        lineComment: '//',
        blockComment: ['/*', '*/'],
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
        { open: '"', close: '"' },
        { open: '\'', close: '\'' },
        { open: '`', close: '`' },
    ],
    surroundingPairs: [
        { open: '{', close: '}' },
        { open: '[', close: ']' },
        { open: '(', close: ')' },
        { open: '"', close: '"' },
        { open: '\'', close: '\'' },
        { open: '`', close: '`' },
    ]
};
var language = {
    defaultToken: '',
    tokenPostfix: '.swift',
    // TODO(owensd): Support the full range of unicode valid identifiers.
    identifier: /[a-zA-Z_][\w$]*/,
    // TODO(owensd): Support the @availability macro properly.
    attributes: [
        '@autoclosure', '@noescape', '@noreturn', '@NSApplicationMain', '@NSCopying', '@NSManaged',
        '@objc', '@UIApplicationMain', '@noreturn', '@availability', '@IBAction', '@IBDesignable', '@IBInspectable', '@IBOutlet'
    ],
    accessmodifiers: ['public', 'private', 'internal'],
    keywords: [
        '__COLUMN__', '__FILE__', '__FUNCTION__', '__LINE__', 'as', 'as!', 'as?', 'associativity', 'break', 'case', 'catch',
        'class', 'continue', 'convenience', 'default', 'deinit', 'didSet', 'do', 'dynamic', 'dynamicType',
        'else', 'enum', 'extension', 'fallthrough', 'final', 'for', 'func', 'get', 'guard', 'if', 'import', 'in', 'infix',
        'init', 'inout', 'internal', 'is', 'lazy', 'left', 'let', 'mutating', 'nil', 'none', 'nonmutating', 'operator',
        'optional', 'override', 'postfix', 'precedence', 'prefix', 'private', 'protocol', 'Protocol', 'public',
        'repeat', 'required', 'return', 'right', 'self', 'Self', 'set', 'static', 'struct', 'subscript', 'super', 'switch',
        'throw', 'throws', 'try', 'try!', 'Type', 'typealias', 'unowned', 'var', 'weak', 'where', 'while', 'willSet', 'FALSE', 'TRUE'
    ],
    symbols: /[=(){}\[\].,:;@#\_&\-<>`?!+*\\\/]/,
    // Moved . to operatorstart so it can be a delimiter
    operatorstart: /[\/=\-+!*%<>&|^~?\u00A1-\u00A7\u00A9\u00AB\u00AC\u00AE\u00B0-\u00B1\u00B6\u00BB\u00BF\u00D7\u00F7\u2016-\u2017\u2020-\u2027\u2030-\u203E\u2041-\u2053\u2055-\u205E\u2190-\u23FF\u2500-\u2775\u2794-\u2BFF\u2E00-\u2E7F\u3001-\u3003\u3008-\u3030]/,
    operatorend: /[\u0300-\u036F\u1DC0-\u1DFF\u20D0-\u20FF\uFE00-\uFE0F\uFE20-\uFE2F\uE0100-\uE01EF]/,
    operators: /(@operatorstart)((@operatorstart)|(@operatorend))*/,
    // TODO(owensd): These are borrowed from C#; need to validate correctness for Swift.
    escapes: /\\(?:[abfnrtv\\"']|x[0-9A-Fa-f]{1,4}|u[0-9A-Fa-f]{4}|U[0-9A-Fa-f]{8})/,
    tokenizer: {
        root: [
            { include: '@whitespace' },
            { include: '@comment' },
            { include: '@attribute' },
            { include: '@literal' },
            { include: '@keyword' },
            { include: '@invokedmethod' },
            { include: '@symbol' },
        ],
        whitespace: [
            [/\s+/, 'white'],
            [/"""/, 'string.quote', '@endDblDocString']
        ],
        endDblDocString: [
            [/[^"]+/, 'string'],
            [/\\"/, 'string'],
            [/"""/, 'string.quote', '@popall'],
            [/"/, 'string']
        ],
        symbol: [
            [/[{}()\[\]]/, '@brackets'],
            [/[<>](?!@symbols)/, '@brackets'],
            [/[.]/, 'delimiter'],
            [/@operators/, 'operator'],
            [/@symbols/, 'operator']
        ],
        comment: [
            [/\/\/\/.*$/, 'comment.doc'],
            [/\/\*\*/, 'comment.doc', '@commentdocbody'],
            [/\/\/.*$/, 'comment'],
            [/\/\*/, 'comment', '@commentbody']
        ],
        commentdocbody: [
            [/\/\*/, 'comment', '@commentbody'],
            [/\*\//, 'comment.doc', '@pop'],
            [/\:[a-zA-Z]+\:/, 'comment.doc.param'],
            [/./, 'comment.doc']
        ],
        commentbody: [
            [/\/\*/, 'comment', '@commentbody'],
            [/\*\//, 'comment', '@pop'],
            [/./, 'comment']
        ],
        attribute: [
            [/\@@identifier/, {
                    cases: {
                        '@attributes': 'keyword.control',
                        '@default': ''
                    }
                }]
        ],
        literal: [
            [/"/, { token: 'string.quote', next: '@stringlit' }],
            [/0[b]([01]_?)+/, 'number.binary'],
            [/0[o]([0-7]_?)+/, 'number.octal'],
            [/0[x]([0-9a-fA-F]_?)+([pP][\-+](\d_?)+)?/, 'number.hex'],
            [/(\d_?)*\.(\d_?)+([eE][\-+]?(\d_?)+)?/, 'number.float'],
            [/(\d_?)+/, 'number']
        ],
        stringlit: [
            [/\\\(/, { token: 'operator', next: '@interpolatedexpression' }],
            [/@escapes/, 'string'],
            [/\\./, 'string.escape.invalid'],
            [/"/, { token: 'string.quote', next: '@pop' }],
            [/./, 'string']
        ],
        interpolatedexpression: [
            [/\(/, { token: 'operator', next: '@interpolatedexpression' }],
            [/\)/, { token: 'operator', next: '@pop' }],
            { include: '@literal' },
            { include: '@keyword' },
            { include: '@symbol' }
        ],
        keyword: [
            [/`/, { token: 'operator', next: '@escapedkeyword' }],
            [/@identifier/, {
                    cases: {
                        '@keywords': 'keyword', '[A-Z][\a-zA-Z0-9$]*': 'type.identifier',
                        '@default': 'identifier'
                    }
                }]
        ],
        escapedkeyword: [
            [/`/, { token: 'operator', next: '@pop' }],
            [/./, 'identifier']
        ],
        //		symbol: [
        //			[ /@symbols/, 'operator' ],
        //			[ /@operators/, 'operator' ]
        //		],
        invokedmethod: [
            [/([.])(@identifier)/, {
                    cases: {
                        '$2': ['delimeter', 'type.identifier'],
                        '@default': ''
                    }
                }],
        ]
    }
};


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL21vbmFjby1lZGl0b3IvZXNtL3ZzL2Jhc2ljLWxhbmd1YWdlcy9zd2lmdC9zd2lmdC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ2E7QUFDTjtBQUNQO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLFdBQVcsS0FBSztBQUNoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVMsU0FBUyxZQUFZLEdBQUc7QUFDakMsU0FBUyx3QkFBd0I7QUFDakMsU0FBUyx3QkFBd0I7QUFDakMsU0FBUyx3QkFBd0I7QUFDakMsU0FBUywwQkFBMEI7QUFDbkMsU0FBUyx3QkFBd0I7QUFDakM7QUFDQTtBQUNBLFNBQVMsU0FBUyxZQUFZLEdBQUc7QUFDakMsU0FBUyx3QkFBd0I7QUFDakMsU0FBUyx3QkFBd0I7QUFDakMsU0FBUyx3QkFBd0I7QUFDakMsU0FBUywwQkFBMEI7QUFDbkMsU0FBUyx3QkFBd0I7QUFDakM7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsUUFBUTtBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdEQUFnRDtBQUNoRCw4Q0FBOEMsSUFBSSxjQUFjLEVBQUUsY0FBYyxFQUFFO0FBQ2xGO0FBQ0E7QUFDQSxhQUFhLHlCQUF5QjtBQUN0QyxhQUFhLHNCQUFzQjtBQUNuQyxhQUFhLHdCQUF3QjtBQUNyQyxhQUFhLHNCQUFzQjtBQUNuQyxhQUFhLHNCQUFzQjtBQUNuQyxhQUFhLDRCQUE0QjtBQUN6QyxhQUFhLHFCQUFxQjtBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBLG1CQUFtQiw0Q0FBNEM7QUFDL0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IscURBQXFEO0FBQzNFO0FBQ0E7QUFDQSxtQkFBbUIsc0NBQXNDO0FBQ3pEO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixxREFBcUQ7QUFDekUsb0JBQW9CLGtDQUFrQztBQUN0RCxhQUFhLHNCQUFzQjtBQUNuQyxhQUFhLHNCQUFzQjtBQUNuQyxhQUFhO0FBQ2I7QUFDQTtBQUNBLG1CQUFtQiw2Q0FBNkM7QUFDaEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0EsbUJBQW1CLGtDQUFrQztBQUNyRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBIiwiZmlsZSI6Ii4vanMvNTcuYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyohLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAqICBDb3B5cmlnaHQgKEMpIERhdmlkIE93ZW5zIElJLCBvd2Vuc2QuaW8uIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbiAqLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xyXG4ndXNlIHN0cmljdCc7XHJcbmV4cG9ydCB2YXIgY29uZiA9IHtcclxuICAgIGNvbW1lbnRzOiB7XHJcbiAgICAgICAgbGluZUNvbW1lbnQ6ICcvLycsXHJcbiAgICAgICAgYmxvY2tDb21tZW50OiBbJy8qJywgJyovJ10sXHJcbiAgICB9LFxyXG4gICAgYnJhY2tldHM6IFtcclxuICAgICAgICBbJ3snLCAnfSddLFxyXG4gICAgICAgIFsnWycsICddJ10sXHJcbiAgICAgICAgWycoJywgJyknXVxyXG4gICAgXSxcclxuICAgIGF1dG9DbG9zaW5nUGFpcnM6IFtcclxuICAgICAgICB7IG9wZW46ICd7JywgY2xvc2U6ICd9JyB9LFxyXG4gICAgICAgIHsgb3BlbjogJ1snLCBjbG9zZTogJ10nIH0sXHJcbiAgICAgICAgeyBvcGVuOiAnKCcsIGNsb3NlOiAnKScgfSxcclxuICAgICAgICB7IG9wZW46ICdcIicsIGNsb3NlOiAnXCInIH0sXHJcbiAgICAgICAgeyBvcGVuOiAnXFwnJywgY2xvc2U6ICdcXCcnIH0sXHJcbiAgICAgICAgeyBvcGVuOiAnYCcsIGNsb3NlOiAnYCcgfSxcclxuICAgIF0sXHJcbiAgICBzdXJyb3VuZGluZ1BhaXJzOiBbXHJcbiAgICAgICAgeyBvcGVuOiAneycsIGNsb3NlOiAnfScgfSxcclxuICAgICAgICB7IG9wZW46ICdbJywgY2xvc2U6ICddJyB9LFxyXG4gICAgICAgIHsgb3BlbjogJygnLCBjbG9zZTogJyknIH0sXHJcbiAgICAgICAgeyBvcGVuOiAnXCInLCBjbG9zZTogJ1wiJyB9LFxyXG4gICAgICAgIHsgb3BlbjogJ1xcJycsIGNsb3NlOiAnXFwnJyB9LFxyXG4gICAgICAgIHsgb3BlbjogJ2AnLCBjbG9zZTogJ2AnIH0sXHJcbiAgICBdXHJcbn07XHJcbmV4cG9ydCB2YXIgbGFuZ3VhZ2UgPSB7XHJcbiAgICBkZWZhdWx0VG9rZW46ICcnLFxyXG4gICAgdG9rZW5Qb3N0Zml4OiAnLnN3aWZ0JyxcclxuICAgIC8vIFRPRE8ob3dlbnNkKTogU3VwcG9ydCB0aGUgZnVsbCByYW5nZSBvZiB1bmljb2RlIHZhbGlkIGlkZW50aWZpZXJzLlxyXG4gICAgaWRlbnRpZmllcjogL1thLXpBLVpfXVtcXHckXSovLFxyXG4gICAgLy8gVE9ETyhvd2Vuc2QpOiBTdXBwb3J0IHRoZSBAYXZhaWxhYmlsaXR5IG1hY3JvIHByb3Blcmx5LlxyXG4gICAgYXR0cmlidXRlczogW1xyXG4gICAgICAgICdAYXV0b2Nsb3N1cmUnLCAnQG5vZXNjYXBlJywgJ0Bub3JldHVybicsICdATlNBcHBsaWNhdGlvbk1haW4nLCAnQE5TQ29weWluZycsICdATlNNYW5hZ2VkJyxcclxuICAgICAgICAnQG9iamMnLCAnQFVJQXBwbGljYXRpb25NYWluJywgJ0Bub3JldHVybicsICdAYXZhaWxhYmlsaXR5JywgJ0BJQkFjdGlvbicsICdASUJEZXNpZ25hYmxlJywgJ0BJQkluc3BlY3RhYmxlJywgJ0BJQk91dGxldCdcclxuICAgIF0sXHJcbiAgICBhY2Nlc3Ntb2RpZmllcnM6IFsncHVibGljJywgJ3ByaXZhdGUnLCAnaW50ZXJuYWwnXSxcclxuICAgIGtleXdvcmRzOiBbXHJcbiAgICAgICAgJ19fQ09MVU1OX18nLCAnX19GSUxFX18nLCAnX19GVU5DVElPTl9fJywgJ19fTElORV9fJywgJ2FzJywgJ2FzIScsICdhcz8nLCAnYXNzb2NpYXRpdml0eScsICdicmVhaycsICdjYXNlJywgJ2NhdGNoJyxcclxuICAgICAgICAnY2xhc3MnLCAnY29udGludWUnLCAnY29udmVuaWVuY2UnLCAnZGVmYXVsdCcsICdkZWluaXQnLCAnZGlkU2V0JywgJ2RvJywgJ2R5bmFtaWMnLCAnZHluYW1pY1R5cGUnLFxyXG4gICAgICAgICdlbHNlJywgJ2VudW0nLCAnZXh0ZW5zaW9uJywgJ2ZhbGx0aHJvdWdoJywgJ2ZpbmFsJywgJ2ZvcicsICdmdW5jJywgJ2dldCcsICdndWFyZCcsICdpZicsICdpbXBvcnQnLCAnaW4nLCAnaW5maXgnLFxyXG4gICAgICAgICdpbml0JywgJ2lub3V0JywgJ2ludGVybmFsJywgJ2lzJywgJ2xhenknLCAnbGVmdCcsICdsZXQnLCAnbXV0YXRpbmcnLCAnbmlsJywgJ25vbmUnLCAnbm9ubXV0YXRpbmcnLCAnb3BlcmF0b3InLFxyXG4gICAgICAgICdvcHRpb25hbCcsICdvdmVycmlkZScsICdwb3N0Zml4JywgJ3ByZWNlZGVuY2UnLCAncHJlZml4JywgJ3ByaXZhdGUnLCAncHJvdG9jb2wnLCAnUHJvdG9jb2wnLCAncHVibGljJyxcclxuICAgICAgICAncmVwZWF0JywgJ3JlcXVpcmVkJywgJ3JldHVybicsICdyaWdodCcsICdzZWxmJywgJ1NlbGYnLCAnc2V0JywgJ3N0YXRpYycsICdzdHJ1Y3QnLCAnc3Vic2NyaXB0JywgJ3N1cGVyJywgJ3N3aXRjaCcsXHJcbiAgICAgICAgJ3Rocm93JywgJ3Rocm93cycsICd0cnknLCAndHJ5IScsICdUeXBlJywgJ3R5cGVhbGlhcycsICd1bm93bmVkJywgJ3ZhcicsICd3ZWFrJywgJ3doZXJlJywgJ3doaWxlJywgJ3dpbGxTZXQnLCAnRkFMU0UnLCAnVFJVRSdcclxuICAgIF0sXHJcbiAgICBzeW1ib2xzOiAvWz0oKXt9XFxbXFxdLiw6O0AjXFxfJlxcLTw+YD8hKypcXFxcXFwvXS8sXHJcbiAgICAvLyBNb3ZlZCAuIHRvIG9wZXJhdG9yc3RhcnQgc28gaXQgY2FuIGJlIGEgZGVsaW1pdGVyXHJcbiAgICBvcGVyYXRvcnN0YXJ0OiAvW1xcLz1cXC0rISolPD4mfF5+P1xcdTAwQTEtXFx1MDBBN1xcdTAwQTlcXHUwMEFCXFx1MDBBQ1xcdTAwQUVcXHUwMEIwLVxcdTAwQjFcXHUwMEI2XFx1MDBCQlxcdTAwQkZcXHUwMEQ3XFx1MDBGN1xcdTIwMTYtXFx1MjAxN1xcdTIwMjAtXFx1MjAyN1xcdTIwMzAtXFx1MjAzRVxcdTIwNDEtXFx1MjA1M1xcdTIwNTUtXFx1MjA1RVxcdTIxOTAtXFx1MjNGRlxcdTI1MDAtXFx1Mjc3NVxcdTI3OTQtXFx1MkJGRlxcdTJFMDAtXFx1MkU3RlxcdTMwMDEtXFx1MzAwM1xcdTMwMDgtXFx1MzAzMF0vLFxyXG4gICAgb3BlcmF0b3JlbmQ6IC9bXFx1MDMwMC1cXHUwMzZGXFx1MURDMC1cXHUxREZGXFx1MjBEMC1cXHUyMEZGXFx1RkUwMC1cXHVGRTBGXFx1RkUyMC1cXHVGRTJGXFx1RTAxMDAtXFx1RTAxRUZdLyxcclxuICAgIG9wZXJhdG9yczogLyhAb3BlcmF0b3JzdGFydCkoKEBvcGVyYXRvcnN0YXJ0KXwoQG9wZXJhdG9yZW5kKSkqLyxcclxuICAgIC8vIFRPRE8ob3dlbnNkKTogVGhlc2UgYXJlIGJvcnJvd2VkIGZyb20gQyM7IG5lZWQgdG8gdmFsaWRhdGUgY29ycmVjdG5lc3MgZm9yIFN3aWZ0LlxyXG4gICAgZXNjYXBlczogL1xcXFwoPzpbYWJmbnJ0dlxcXFxcIiddfHhbMC05QS1GYS1mXXsxLDR9fHVbMC05QS1GYS1mXXs0fXxVWzAtOUEtRmEtZl17OH0pLyxcclxuICAgIHRva2VuaXplcjoge1xyXG4gICAgICAgIHJvb3Q6IFtcclxuICAgICAgICAgICAgeyBpbmNsdWRlOiAnQHdoaXRlc3BhY2UnIH0sXHJcbiAgICAgICAgICAgIHsgaW5jbHVkZTogJ0Bjb21tZW50JyB9LFxyXG4gICAgICAgICAgICB7IGluY2x1ZGU6ICdAYXR0cmlidXRlJyB9LFxyXG4gICAgICAgICAgICB7IGluY2x1ZGU6ICdAbGl0ZXJhbCcgfSxcclxuICAgICAgICAgICAgeyBpbmNsdWRlOiAnQGtleXdvcmQnIH0sXHJcbiAgICAgICAgICAgIHsgaW5jbHVkZTogJ0BpbnZva2VkbWV0aG9kJyB9LFxyXG4gICAgICAgICAgICB7IGluY2x1ZGU6ICdAc3ltYm9sJyB9LFxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgd2hpdGVzcGFjZTogW1xyXG4gICAgICAgICAgICBbL1xccysvLCAnd2hpdGUnXSxcclxuICAgICAgICAgICAgWy9cIlwiXCIvLCAnc3RyaW5nLnF1b3RlJywgJ0BlbmREYmxEb2NTdHJpbmcnXVxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgZW5kRGJsRG9jU3RyaW5nOiBbXHJcbiAgICAgICAgICAgIFsvW15cIl0rLywgJ3N0cmluZyddLFxyXG4gICAgICAgICAgICBbL1xcXFxcIi8sICdzdHJpbmcnXSxcclxuICAgICAgICAgICAgWy9cIlwiXCIvLCAnc3RyaW5nLnF1b3RlJywgJ0Bwb3BhbGwnXSxcclxuICAgICAgICAgICAgWy9cIi8sICdzdHJpbmcnXVxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgc3ltYm9sOiBbXHJcbiAgICAgICAgICAgIFsvW3t9KClcXFtcXF1dLywgJ0BicmFja2V0cyddLFxyXG4gICAgICAgICAgICBbL1s8Pl0oPyFAc3ltYm9scykvLCAnQGJyYWNrZXRzJ10sXHJcbiAgICAgICAgICAgIFsvWy5dLywgJ2RlbGltaXRlciddLFxyXG4gICAgICAgICAgICBbL0BvcGVyYXRvcnMvLCAnb3BlcmF0b3InXSxcclxuICAgICAgICAgICAgWy9Ac3ltYm9scy8sICdvcGVyYXRvciddXHJcbiAgICAgICAgXSxcclxuICAgICAgICBjb21tZW50OiBbXHJcbiAgICAgICAgICAgIFsvXFwvXFwvXFwvLiokLywgJ2NvbW1lbnQuZG9jJ10sXHJcbiAgICAgICAgICAgIFsvXFwvXFwqXFwqLywgJ2NvbW1lbnQuZG9jJywgJ0Bjb21tZW50ZG9jYm9keSddLFxyXG4gICAgICAgICAgICBbL1xcL1xcLy4qJC8sICdjb21tZW50J10sXHJcbiAgICAgICAgICAgIFsvXFwvXFwqLywgJ2NvbW1lbnQnLCAnQGNvbW1lbnRib2R5J11cclxuICAgICAgICBdLFxyXG4gICAgICAgIGNvbW1lbnRkb2Nib2R5OiBbXHJcbiAgICAgICAgICAgIFsvXFwvXFwqLywgJ2NvbW1lbnQnLCAnQGNvbW1lbnRib2R5J10sXHJcbiAgICAgICAgICAgIFsvXFwqXFwvLywgJ2NvbW1lbnQuZG9jJywgJ0Bwb3AnXSxcclxuICAgICAgICAgICAgWy9cXDpbYS16QS1aXStcXDovLCAnY29tbWVudC5kb2MucGFyYW0nXSxcclxuICAgICAgICAgICAgWy8uLywgJ2NvbW1lbnQuZG9jJ11cclxuICAgICAgICBdLFxyXG4gICAgICAgIGNvbW1lbnRib2R5OiBbXHJcbiAgICAgICAgICAgIFsvXFwvXFwqLywgJ2NvbW1lbnQnLCAnQGNvbW1lbnRib2R5J10sXHJcbiAgICAgICAgICAgIFsvXFwqXFwvLywgJ2NvbW1lbnQnLCAnQHBvcCddLFxyXG4gICAgICAgICAgICBbLy4vLCAnY29tbWVudCddXHJcbiAgICAgICAgXSxcclxuICAgICAgICBhdHRyaWJ1dGU6IFtcclxuICAgICAgICAgICAgWy9cXEBAaWRlbnRpZmllci8sIHtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAnQGF0dHJpYnV0ZXMnOiAna2V5d29yZC5jb250cm9sJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgJ0BkZWZhdWx0JzogJydcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XVxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgbGl0ZXJhbDogW1xyXG4gICAgICAgICAgICBbL1wiLywgeyB0b2tlbjogJ3N0cmluZy5xdW90ZScsIG5leHQ6ICdAc3RyaW5nbGl0JyB9XSxcclxuICAgICAgICAgICAgWy8wW2JdKFswMV1fPykrLywgJ251bWJlci5iaW5hcnknXSxcclxuICAgICAgICAgICAgWy8wW29dKFswLTddXz8pKy8sICdudW1iZXIub2N0YWwnXSxcclxuICAgICAgICAgICAgWy8wW3hdKFswLTlhLWZBLUZdXz8pKyhbcFBdW1xcLStdKFxcZF8/KSspPy8sICdudW1iZXIuaGV4J10sXHJcbiAgICAgICAgICAgIFsvKFxcZF8/KSpcXC4oXFxkXz8pKyhbZUVdW1xcLStdPyhcXGRfPykrKT8vLCAnbnVtYmVyLmZsb2F0J10sXHJcbiAgICAgICAgICAgIFsvKFxcZF8/KSsvLCAnbnVtYmVyJ11cclxuICAgICAgICBdLFxyXG4gICAgICAgIHN0cmluZ2xpdDogW1xyXG4gICAgICAgICAgICBbL1xcXFxcXCgvLCB7IHRva2VuOiAnb3BlcmF0b3InLCBuZXh0OiAnQGludGVycG9sYXRlZGV4cHJlc3Npb24nIH1dLFxyXG4gICAgICAgICAgICBbL0Blc2NhcGVzLywgJ3N0cmluZyddLFxyXG4gICAgICAgICAgICBbL1xcXFwuLywgJ3N0cmluZy5lc2NhcGUuaW52YWxpZCddLFxyXG4gICAgICAgICAgICBbL1wiLywgeyB0b2tlbjogJ3N0cmluZy5xdW90ZScsIG5leHQ6ICdAcG9wJyB9XSxcclxuICAgICAgICAgICAgWy8uLywgJ3N0cmluZyddXHJcbiAgICAgICAgXSxcclxuICAgICAgICBpbnRlcnBvbGF0ZWRleHByZXNzaW9uOiBbXHJcbiAgICAgICAgICAgIFsvXFwoLywgeyB0b2tlbjogJ29wZXJhdG9yJywgbmV4dDogJ0BpbnRlcnBvbGF0ZWRleHByZXNzaW9uJyB9XSxcclxuICAgICAgICAgICAgWy9cXCkvLCB7IHRva2VuOiAnb3BlcmF0b3InLCBuZXh0OiAnQHBvcCcgfV0sXHJcbiAgICAgICAgICAgIHsgaW5jbHVkZTogJ0BsaXRlcmFsJyB9LFxyXG4gICAgICAgICAgICB7IGluY2x1ZGU6ICdAa2V5d29yZCcgfSxcclxuICAgICAgICAgICAgeyBpbmNsdWRlOiAnQHN5bWJvbCcgfVxyXG4gICAgICAgIF0sXHJcbiAgICAgICAga2V5d29yZDogW1xyXG4gICAgICAgICAgICBbL2AvLCB7IHRva2VuOiAnb3BlcmF0b3InLCBuZXh0OiAnQGVzY2FwZWRrZXl3b3JkJyB9XSxcclxuICAgICAgICAgICAgWy9AaWRlbnRpZmllci8sIHtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAnQGtleXdvcmRzJzogJ2tleXdvcmQnLCAnW0EtWl1bXFxhLXpBLVowLTkkXSonOiAndHlwZS5pZGVudGlmaWVyJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgJ0BkZWZhdWx0JzogJ2lkZW50aWZpZXInXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfV1cclxuICAgICAgICBdLFxyXG4gICAgICAgIGVzY2FwZWRrZXl3b3JkOiBbXHJcbiAgICAgICAgICAgIFsvYC8sIHsgdG9rZW46ICdvcGVyYXRvcicsIG5leHQ6ICdAcG9wJyB9XSxcclxuICAgICAgICAgICAgWy8uLywgJ2lkZW50aWZpZXInXVxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgLy9cdFx0c3ltYm9sOiBbXHJcbiAgICAgICAgLy9cdFx0XHRbIC9Ac3ltYm9scy8sICdvcGVyYXRvcicgXSxcclxuICAgICAgICAvL1x0XHRcdFsgL0BvcGVyYXRvcnMvLCAnb3BlcmF0b3InIF1cclxuICAgICAgICAvL1x0XHRdLFxyXG4gICAgICAgIGludm9rZWRtZXRob2Q6IFtcclxuICAgICAgICAgICAgWy8oWy5dKShAaWRlbnRpZmllcikvLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZXM6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJyQyJzogWydkZWxpbWV0ZXInLCAndHlwZS5pZGVudGlmaWVyJ10sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICdAZGVmYXVsdCc6ICcnXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfV0sXHJcbiAgICAgICAgXVxyXG4gICAgfVxyXG59O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9