(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[63],{

/***/ "../node_modules/monaco-editor/esm/vs/basic-languages/yaml/yaml.js":
/*!*************************************************************************!*\
  !*** ../node_modules/monaco-editor/esm/vs/basic-languages/yaml/yaml.js ***!
  \*************************************************************************/
/*! exports provided: conf, language */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "conf", function() { return conf; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "language", function() { return language; });
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
        { open: '"', close: '"' },
        { open: '\'', close: '\'' },
    ],
    surroundingPairs: [
        { open: '{', close: '}' },
        { open: '[', close: ']' },
        { open: '(', close: ')' },
        { open: '"', close: '"' },
        { open: '\'', close: '\'' },
    ],
    folding: {
        offSide: true
    }
};
var language = {
    tokenPostfix: '.yaml',
    brackets: [
        { token: 'delimiter.bracket', open: '{', close: '}' },
        { token: 'delimiter.square', open: '[', close: ']' }
    ],
    keywords: ['true', 'True', 'TRUE', 'false', 'False', 'FALSE', 'null', 'Null', 'Null', '~'],
    numberInteger: /(?:0|[+-]?[0-9]+)/,
    numberFloat: /(?:0|[+-]?[0-9]+)(?:\.[0-9]+)?(?:e[-+][1-9][0-9]*)?/,
    numberOctal: /0o[0-7]+/,
    numberHex: /0x[0-9a-fA-F]+/,
    numberInfinity: /[+-]?\.(?:inf|Inf|INF)/,
    numberNaN: /\.(?:nan|Nan|NAN)/,
    numberDate: /\d{4}-\d\d-\d\d([Tt ]\d\d:\d\d:\d\d(\.\d+)?(( ?[+-]\d\d?(:\d\d)?)|Z)?)?/,
    escapes: /\\(?:[btnfr\\"']|[0-7][0-7]?|[0-3][0-7]{2})/,
    tokenizer: {
        root: [
            { include: '@whitespace' },
            { include: '@comment' },
            // Directive
            [/%[^ ]+.*$/, 'meta.directive'],
            // Document Markers
            [/---/, 'operators.directivesEnd'],
            [/\.{3}/, 'operators.documentEnd'],
            // Block Structure Indicators
            [/[-?:](?= )/, 'operators'],
            { include: '@anchor' },
            { include: '@tagHandle' },
            { include: '@flowCollections' },
            { include: '@blockStyle' },
            // Numbers
            [/@numberInteger(?![ \t]*\S+)/, 'number'],
            [/@numberFloat(?![ \t]*\S+)/, 'number.float'],
            [/@numberOctal(?![ \t]*\S+)/, 'number.octal'],
            [/@numberHex(?![ \t]*\S+)/, 'number.hex'],
            [/@numberInfinity(?![ \t]*\S+)/, 'number.infinity'],
            [/@numberNaN(?![ \t]*\S+)/, 'number.nan'],
            [/@numberDate(?![ \t]*\S+)/, 'number.date'],
            // Key:Value pair
            [/(".*?"|'.*?'|.*?)([ \t]*)(:)( |$)/, ['type', 'white', 'operators', 'white']],
            { include: '@flowScalars' },
            // String nodes
            [/.+$/, {
                    cases: {
                        '@keywords': 'keyword',
                        '@default': 'string'
                    }
                }]
        ],
        // Flow Collection: Flow Mapping
        object: [
            { include: '@whitespace' },
            { include: '@comment' },
            // Flow Mapping termination
            [/\}/, '@brackets', '@pop'],
            // Flow Mapping delimiter
            [/,/, 'delimiter.comma'],
            // Flow Mapping Key:Value delimiter
            [/:(?= )/, 'operators'],
            // Flow Mapping Key:Value key
            [/(?:".*?"|'.*?'|[^,\{\[]+?)(?=: )/, 'type'],
            // Start Flow Style
            { include: '@flowCollections' },
            { include: '@flowScalars' },
            // Scalar Data types
            { include: '@tagHandle' },
            { include: '@anchor' },
            { include: '@flowNumber' },
            // Other value (keyword or string)
            [/[^\},]+/, {
                    cases: {
                        '@keywords': 'keyword',
                        '@default': 'string'
                    }
                }]
        ],
        // Flow Collection: Flow Sequence
        array: [
            { include: '@whitespace' },
            { include: '@comment' },
            // Flow Sequence termination
            [/\]/, '@brackets', '@pop'],
            // Flow Sequence delimiter
            [/,/, 'delimiter.comma'],
            // Start Flow Style
            { include: '@flowCollections' },
            { include: '@flowScalars' },
            // Scalar Data types
            { include: '@tagHandle' },
            { include: '@anchor' },
            { include: '@flowNumber' },
            // Other value (keyword or string)
            [/[^\],]+/, {
                    cases: {
                        '@keywords': 'keyword',
                        '@default': 'string'
                    }
                }]
        ],
        // First line of a Block Style
        multiString: [
            [/^( +).+$/, 'string', '@multiStringContinued.$1']
        ],
        // Further lines of a Block Style
        //   Workaround for indentation detection
        multiStringContinued: [
            [/^( *).+$/, {
                    cases: {
                        '$1==$S2': 'string',
                        '@default': { token: '@rematch', next: '@popall' }
                    }
                }]
        ],
        whitespace: [
            [/[ \t\r\n]+/, 'white']
        ],
        // Only line comments
        comment: [
            [/#.*$/, 'comment']
        ],
        // Start Flow Collections
        flowCollections: [
            [/\[/, '@brackets', '@array'],
            [/\{/, '@brackets', '@object']
        ],
        // Start Flow Scalars (quoted strings)
        flowScalars: [
            [/"([^"\\]|\\.)*$/, 'string.invalid'],
            [/'([^'\\]|\\.)*$/, 'string.invalid'],
            [/'[^']*'/, 'string'],
            [/"/, 'string', '@doubleQuotedString']
        ],
        doubleQuotedString: [
            [/[^\\"]+/, 'string'],
            [/@escapes/, 'string.escape'],
            [/\\./, 'string.escape.invalid'],
            [/"/, 'string', '@pop']
        ],
        // Start Block Scalar
        blockStyle: [
            [/[>|][0-9]*[+-]?$/, 'operators', '@multiString']
        ],
        // Numbers in Flow Collections (terminate with ,]})
        flowNumber: [
            [/@numberInteger(?=[ \t]*[,\]\}])/, 'number'],
            [/@numberFloat(?=[ \t]*[,\]\}])/, 'number.float'],
            [/@numberOctal(?=[ \t]*[,\]\}])/, 'number.octal'],
            [/@numberHex(?=[ \t]*[,\]\}])/, 'number.hex'],
            [/@numberInfinity(?=[ \t]*[,\]\}])/, 'number.infinity'],
            [/@numberNaN(?=[ \t]*[,\]\}])/, 'number.nan'],
            [/@numberDate(?=[ \t]*[,\]\}])/, 'number.date']
        ],
        tagHandle: [
            [/\![^ ]*/, 'tag']
        ],
        anchor: [
            [/[&*][^ ]+/, 'namespace']
        ]
    }
};


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL21vbmFjby1lZGl0b3IvZXNtL3ZzL2Jhc2ljLWxhbmd1YWdlcy95YW1sL3lhbWwuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFPO0FBQ1A7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLFdBQVcsS0FBSztBQUNoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVMsU0FBUyxZQUFZLEdBQUc7QUFDakMsU0FBUyx3QkFBd0I7QUFDakMsU0FBUyx3QkFBd0I7QUFDakMsU0FBUyx3QkFBd0I7QUFDakMsU0FBUywwQkFBMEI7QUFDbkM7QUFDQTtBQUNBLFNBQVMsU0FBUyxZQUFZLEdBQUc7QUFDakMsU0FBUyx3QkFBd0I7QUFDakMsU0FBUyx3QkFBd0I7QUFDakMsU0FBUyx3QkFBd0I7QUFDakMsU0FBUywwQkFBMEI7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBLFNBQVMscUNBQXFDLFlBQVksR0FBRztBQUM3RCxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixFQUFFO0FBQ3RCLHNEQUFzRCxFQUFFO0FBQ3hEO0FBQ0E7QUFDQSxhQUFhLHlCQUF5QjtBQUN0QyxhQUFhLHNCQUFzQjtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQixFQUFFO0FBQ25CO0FBQ0E7QUFDQSxhQUFhLHFCQUFxQjtBQUNsQyxhQUFhLHdCQUF3QjtBQUNyQyxhQUFhLDhCQUE4QjtBQUMzQyxhQUFhLHlCQUF5QjtBQUN0QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsMEJBQTBCO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQSxhQUFhLHlCQUF5QjtBQUN0QyxhQUFhLHNCQUFzQjtBQUNuQztBQUNBLGdCQUFnQjtBQUNoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDO0FBQ2xDO0FBQ0EsYUFBYSw4QkFBOEI7QUFDM0MsYUFBYSwwQkFBMEI7QUFDdkM7QUFDQSxhQUFhLHdCQUF3QjtBQUNyQyxhQUFhLHFCQUFxQjtBQUNsQyxhQUFhLHlCQUF5QjtBQUN0QztBQUNBLGtCQUFrQjtBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQSxhQUFhLHlCQUF5QjtBQUN0QyxhQUFhLHNCQUFzQjtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSw4QkFBOEI7QUFDM0MsYUFBYSwwQkFBMEI7QUFDdkM7QUFDQSxhQUFhLHdCQUF3QjtBQUNyQyxhQUFhLHFCQUFxQjtBQUNsQyxhQUFhLHlCQUF5QjtBQUN0QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFDQUFxQztBQUNyQztBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBEQUEwRDtBQUMxRDtBQUNBLDJDQUEyQztBQUMzQyx5Q0FBeUM7QUFDekMseUNBQXlDO0FBQ3pDLHVDQUF1QztBQUN2Qyw0Q0FBNEM7QUFDNUMsdUNBQXVDO0FBQ3ZDLHdDQUF3QztBQUN4QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiLi9qcy82My5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgdmFyIGNvbmYgPSB7XHJcbiAgICBjb21tZW50czoge1xyXG4gICAgICAgIGxpbmVDb21tZW50OiAnIydcclxuICAgIH0sXHJcbiAgICBicmFja2V0czogW1xyXG4gICAgICAgIFsneycsICd9J10sXHJcbiAgICAgICAgWydbJywgJ10nXSxcclxuICAgICAgICBbJygnLCAnKSddXHJcbiAgICBdLFxyXG4gICAgYXV0b0Nsb3NpbmdQYWlyczogW1xyXG4gICAgICAgIHsgb3BlbjogJ3snLCBjbG9zZTogJ30nIH0sXHJcbiAgICAgICAgeyBvcGVuOiAnWycsIGNsb3NlOiAnXScgfSxcclxuICAgICAgICB7IG9wZW46ICcoJywgY2xvc2U6ICcpJyB9LFxyXG4gICAgICAgIHsgb3BlbjogJ1wiJywgY2xvc2U6ICdcIicgfSxcclxuICAgICAgICB7IG9wZW46ICdcXCcnLCBjbG9zZTogJ1xcJycgfSxcclxuICAgIF0sXHJcbiAgICBzdXJyb3VuZGluZ1BhaXJzOiBbXHJcbiAgICAgICAgeyBvcGVuOiAneycsIGNsb3NlOiAnfScgfSxcclxuICAgICAgICB7IG9wZW46ICdbJywgY2xvc2U6ICddJyB9LFxyXG4gICAgICAgIHsgb3BlbjogJygnLCBjbG9zZTogJyknIH0sXHJcbiAgICAgICAgeyBvcGVuOiAnXCInLCBjbG9zZTogJ1wiJyB9LFxyXG4gICAgICAgIHsgb3BlbjogJ1xcJycsIGNsb3NlOiAnXFwnJyB9LFxyXG4gICAgXSxcclxuICAgIGZvbGRpbmc6IHtcclxuICAgICAgICBvZmZTaWRlOiB0cnVlXHJcbiAgICB9XHJcbn07XHJcbmV4cG9ydCB2YXIgbGFuZ3VhZ2UgPSB7XHJcbiAgICB0b2tlblBvc3RmaXg6ICcueWFtbCcsXHJcbiAgICBicmFja2V0czogW1xyXG4gICAgICAgIHsgdG9rZW46ICdkZWxpbWl0ZXIuYnJhY2tldCcsIG9wZW46ICd7JywgY2xvc2U6ICd9JyB9LFxyXG4gICAgICAgIHsgdG9rZW46ICdkZWxpbWl0ZXIuc3F1YXJlJywgb3BlbjogJ1snLCBjbG9zZTogJ10nIH1cclxuICAgIF0sXHJcbiAgICBrZXl3b3JkczogWyd0cnVlJywgJ1RydWUnLCAnVFJVRScsICdmYWxzZScsICdGYWxzZScsICdGQUxTRScsICdudWxsJywgJ051bGwnLCAnTnVsbCcsICd+J10sXHJcbiAgICBudW1iZXJJbnRlZ2VyOiAvKD86MHxbKy1dP1swLTldKykvLFxyXG4gICAgbnVtYmVyRmxvYXQ6IC8oPzowfFsrLV0/WzAtOV0rKSg/OlxcLlswLTldKyk/KD86ZVstK11bMS05XVswLTldKik/LyxcclxuICAgIG51bWJlck9jdGFsOiAvMG9bMC03XSsvLFxyXG4gICAgbnVtYmVySGV4OiAvMHhbMC05YS1mQS1GXSsvLFxyXG4gICAgbnVtYmVySW5maW5pdHk6IC9bKy1dP1xcLig/OmluZnxJbmZ8SU5GKS8sXHJcbiAgICBudW1iZXJOYU46IC9cXC4oPzpuYW58TmFufE5BTikvLFxyXG4gICAgbnVtYmVyRGF0ZTogL1xcZHs0fS1cXGRcXGQtXFxkXFxkKFtUdCBdXFxkXFxkOlxcZFxcZDpcXGRcXGQoXFwuXFxkKyk/KCggP1srLV1cXGRcXGQ/KDpcXGRcXGQpPyl8Wik/KT8vLFxyXG4gICAgZXNjYXBlczogL1xcXFwoPzpbYnRuZnJcXFxcXCInXXxbMC03XVswLTddP3xbMC0zXVswLTddezJ9KS8sXHJcbiAgICB0b2tlbml6ZXI6IHtcclxuICAgICAgICByb290OiBbXHJcbiAgICAgICAgICAgIHsgaW5jbHVkZTogJ0B3aGl0ZXNwYWNlJyB9LFxyXG4gICAgICAgICAgICB7IGluY2x1ZGU6ICdAY29tbWVudCcgfSxcclxuICAgICAgICAgICAgLy8gRGlyZWN0aXZlXHJcbiAgICAgICAgICAgIFsvJVteIF0rLiokLywgJ21ldGEuZGlyZWN0aXZlJ10sXHJcbiAgICAgICAgICAgIC8vIERvY3VtZW50IE1hcmtlcnNcclxuICAgICAgICAgICAgWy8tLS0vLCAnb3BlcmF0b3JzLmRpcmVjdGl2ZXNFbmQnXSxcclxuICAgICAgICAgICAgWy9cXC57M30vLCAnb3BlcmF0b3JzLmRvY3VtZW50RW5kJ10sXHJcbiAgICAgICAgICAgIC8vIEJsb2NrIFN0cnVjdHVyZSBJbmRpY2F0b3JzXHJcbiAgICAgICAgICAgIFsvWy0/Ol0oPz0gKS8sICdvcGVyYXRvcnMnXSxcclxuICAgICAgICAgICAgeyBpbmNsdWRlOiAnQGFuY2hvcicgfSxcclxuICAgICAgICAgICAgeyBpbmNsdWRlOiAnQHRhZ0hhbmRsZScgfSxcclxuICAgICAgICAgICAgeyBpbmNsdWRlOiAnQGZsb3dDb2xsZWN0aW9ucycgfSxcclxuICAgICAgICAgICAgeyBpbmNsdWRlOiAnQGJsb2NrU3R5bGUnIH0sXHJcbiAgICAgICAgICAgIC8vIE51bWJlcnNcclxuICAgICAgICAgICAgWy9AbnVtYmVySW50ZWdlcig/IVsgXFx0XSpcXFMrKS8sICdudW1iZXInXSxcclxuICAgICAgICAgICAgWy9AbnVtYmVyRmxvYXQoPyFbIFxcdF0qXFxTKykvLCAnbnVtYmVyLmZsb2F0J10sXHJcbiAgICAgICAgICAgIFsvQG51bWJlck9jdGFsKD8hWyBcXHRdKlxcUyspLywgJ251bWJlci5vY3RhbCddLFxyXG4gICAgICAgICAgICBbL0BudW1iZXJIZXgoPyFbIFxcdF0qXFxTKykvLCAnbnVtYmVyLmhleCddLFxyXG4gICAgICAgICAgICBbL0BudW1iZXJJbmZpbml0eSg/IVsgXFx0XSpcXFMrKS8sICdudW1iZXIuaW5maW5pdHknXSxcclxuICAgICAgICAgICAgWy9AbnVtYmVyTmFOKD8hWyBcXHRdKlxcUyspLywgJ251bWJlci5uYW4nXSxcclxuICAgICAgICAgICAgWy9AbnVtYmVyRGF0ZSg/IVsgXFx0XSpcXFMrKS8sICdudW1iZXIuZGF0ZSddLFxyXG4gICAgICAgICAgICAvLyBLZXk6VmFsdWUgcGFpclxyXG4gICAgICAgICAgICBbLyhcIi4qP1wifCcuKj8nfC4qPykoWyBcXHRdKikoOikoIHwkKS8sIFsndHlwZScsICd3aGl0ZScsICdvcGVyYXRvcnMnLCAnd2hpdGUnXV0sXHJcbiAgICAgICAgICAgIHsgaW5jbHVkZTogJ0BmbG93U2NhbGFycycgfSxcclxuICAgICAgICAgICAgLy8gU3RyaW5nIG5vZGVzXHJcbiAgICAgICAgICAgIFsvLiskLywge1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2VzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICdAa2V5d29yZHMnOiAna2V5d29yZCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICdAZGVmYXVsdCc6ICdzdHJpbmcnXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfV1cclxuICAgICAgICBdLFxyXG4gICAgICAgIC8vIEZsb3cgQ29sbGVjdGlvbjogRmxvdyBNYXBwaW5nXHJcbiAgICAgICAgb2JqZWN0OiBbXHJcbiAgICAgICAgICAgIHsgaW5jbHVkZTogJ0B3aGl0ZXNwYWNlJyB9LFxyXG4gICAgICAgICAgICB7IGluY2x1ZGU6ICdAY29tbWVudCcgfSxcclxuICAgICAgICAgICAgLy8gRmxvdyBNYXBwaW5nIHRlcm1pbmF0aW9uXHJcbiAgICAgICAgICAgIFsvXFx9LywgJ0BicmFja2V0cycsICdAcG9wJ10sXHJcbiAgICAgICAgICAgIC8vIEZsb3cgTWFwcGluZyBkZWxpbWl0ZXJcclxuICAgICAgICAgICAgWy8sLywgJ2RlbGltaXRlci5jb21tYSddLFxyXG4gICAgICAgICAgICAvLyBGbG93IE1hcHBpbmcgS2V5OlZhbHVlIGRlbGltaXRlclxyXG4gICAgICAgICAgICBbLzooPz0gKS8sICdvcGVyYXRvcnMnXSxcclxuICAgICAgICAgICAgLy8gRmxvdyBNYXBwaW5nIEtleTpWYWx1ZSBrZXlcclxuICAgICAgICAgICAgWy8oPzpcIi4qP1wifCcuKj8nfFteLFxce1xcW10rPykoPz06ICkvLCAndHlwZSddLFxyXG4gICAgICAgICAgICAvLyBTdGFydCBGbG93IFN0eWxlXHJcbiAgICAgICAgICAgIHsgaW5jbHVkZTogJ0BmbG93Q29sbGVjdGlvbnMnIH0sXHJcbiAgICAgICAgICAgIHsgaW5jbHVkZTogJ0BmbG93U2NhbGFycycgfSxcclxuICAgICAgICAgICAgLy8gU2NhbGFyIERhdGEgdHlwZXNcclxuICAgICAgICAgICAgeyBpbmNsdWRlOiAnQHRhZ0hhbmRsZScgfSxcclxuICAgICAgICAgICAgeyBpbmNsdWRlOiAnQGFuY2hvcicgfSxcclxuICAgICAgICAgICAgeyBpbmNsdWRlOiAnQGZsb3dOdW1iZXInIH0sXHJcbiAgICAgICAgICAgIC8vIE90aGVyIHZhbHVlIChrZXl3b3JkIG9yIHN0cmluZylcclxuICAgICAgICAgICAgWy9bXlxcfSxdKy8sIHtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAnQGtleXdvcmRzJzogJ2tleXdvcmQnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAnQGRlZmF1bHQnOiAnc3RyaW5nJ1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1dXHJcbiAgICAgICAgXSxcclxuICAgICAgICAvLyBGbG93IENvbGxlY3Rpb246IEZsb3cgU2VxdWVuY2VcclxuICAgICAgICBhcnJheTogW1xyXG4gICAgICAgICAgICB7IGluY2x1ZGU6ICdAd2hpdGVzcGFjZScgfSxcclxuICAgICAgICAgICAgeyBpbmNsdWRlOiAnQGNvbW1lbnQnIH0sXHJcbiAgICAgICAgICAgIC8vIEZsb3cgU2VxdWVuY2UgdGVybWluYXRpb25cclxuICAgICAgICAgICAgWy9cXF0vLCAnQGJyYWNrZXRzJywgJ0Bwb3AnXSxcclxuICAgICAgICAgICAgLy8gRmxvdyBTZXF1ZW5jZSBkZWxpbWl0ZXJcclxuICAgICAgICAgICAgWy8sLywgJ2RlbGltaXRlci5jb21tYSddLFxyXG4gICAgICAgICAgICAvLyBTdGFydCBGbG93IFN0eWxlXHJcbiAgICAgICAgICAgIHsgaW5jbHVkZTogJ0BmbG93Q29sbGVjdGlvbnMnIH0sXHJcbiAgICAgICAgICAgIHsgaW5jbHVkZTogJ0BmbG93U2NhbGFycycgfSxcclxuICAgICAgICAgICAgLy8gU2NhbGFyIERhdGEgdHlwZXNcclxuICAgICAgICAgICAgeyBpbmNsdWRlOiAnQHRhZ0hhbmRsZScgfSxcclxuICAgICAgICAgICAgeyBpbmNsdWRlOiAnQGFuY2hvcicgfSxcclxuICAgICAgICAgICAgeyBpbmNsdWRlOiAnQGZsb3dOdW1iZXInIH0sXHJcbiAgICAgICAgICAgIC8vIE90aGVyIHZhbHVlIChrZXl3b3JkIG9yIHN0cmluZylcclxuICAgICAgICAgICAgWy9bXlxcXSxdKy8sIHtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAnQGtleXdvcmRzJzogJ2tleXdvcmQnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAnQGRlZmF1bHQnOiAnc3RyaW5nJ1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1dXHJcbiAgICAgICAgXSxcclxuICAgICAgICAvLyBGaXJzdCBsaW5lIG9mIGEgQmxvY2sgU3R5bGVcclxuICAgICAgICBtdWx0aVN0cmluZzogW1xyXG4gICAgICAgICAgICBbL14oICspLiskLywgJ3N0cmluZycsICdAbXVsdGlTdHJpbmdDb250aW51ZWQuJDEnXVxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgLy8gRnVydGhlciBsaW5lcyBvZiBhIEJsb2NrIFN0eWxlXHJcbiAgICAgICAgLy8gICBXb3JrYXJvdW5kIGZvciBpbmRlbnRhdGlvbiBkZXRlY3Rpb25cclxuICAgICAgICBtdWx0aVN0cmluZ0NvbnRpbnVlZDogW1xyXG4gICAgICAgICAgICBbL14oICopLiskLywge1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2VzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICckMT09JFMyJzogJ3N0cmluZycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICdAZGVmYXVsdCc6IHsgdG9rZW46ICdAcmVtYXRjaCcsIG5leHQ6ICdAcG9wYWxsJyB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfV1cclxuICAgICAgICBdLFxyXG4gICAgICAgIHdoaXRlc3BhY2U6IFtcclxuICAgICAgICAgICAgWy9bIFxcdFxcclxcbl0rLywgJ3doaXRlJ11cclxuICAgICAgICBdLFxyXG4gICAgICAgIC8vIE9ubHkgbGluZSBjb21tZW50c1xyXG4gICAgICAgIGNvbW1lbnQ6IFtcclxuICAgICAgICAgICAgWy8jLiokLywgJ2NvbW1lbnQnXVxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgLy8gU3RhcnQgRmxvdyBDb2xsZWN0aW9uc1xyXG4gICAgICAgIGZsb3dDb2xsZWN0aW9uczogW1xyXG4gICAgICAgICAgICBbL1xcWy8sICdAYnJhY2tldHMnLCAnQGFycmF5J10sXHJcbiAgICAgICAgICAgIFsvXFx7LywgJ0BicmFja2V0cycsICdAb2JqZWN0J11cclxuICAgICAgICBdLFxyXG4gICAgICAgIC8vIFN0YXJ0IEZsb3cgU2NhbGFycyAocXVvdGVkIHN0cmluZ3MpXHJcbiAgICAgICAgZmxvd1NjYWxhcnM6IFtcclxuICAgICAgICAgICAgWy9cIihbXlwiXFxcXF18XFxcXC4pKiQvLCAnc3RyaW5nLmludmFsaWQnXSxcclxuICAgICAgICAgICAgWy8nKFteJ1xcXFxdfFxcXFwuKSokLywgJ3N0cmluZy5pbnZhbGlkJ10sXHJcbiAgICAgICAgICAgIFsvJ1teJ10qJy8sICdzdHJpbmcnXSxcclxuICAgICAgICAgICAgWy9cIi8sICdzdHJpbmcnLCAnQGRvdWJsZVF1b3RlZFN0cmluZyddXHJcbiAgICAgICAgXSxcclxuICAgICAgICBkb3VibGVRdW90ZWRTdHJpbmc6IFtcclxuICAgICAgICAgICAgWy9bXlxcXFxcIl0rLywgJ3N0cmluZyddLFxyXG4gICAgICAgICAgICBbL0Blc2NhcGVzLywgJ3N0cmluZy5lc2NhcGUnXSxcclxuICAgICAgICAgICAgWy9cXFxcLi8sICdzdHJpbmcuZXNjYXBlLmludmFsaWQnXSxcclxuICAgICAgICAgICAgWy9cIi8sICdzdHJpbmcnLCAnQHBvcCddXHJcbiAgICAgICAgXSxcclxuICAgICAgICAvLyBTdGFydCBCbG9jayBTY2FsYXJcclxuICAgICAgICBibG9ja1N0eWxlOiBbXHJcbiAgICAgICAgICAgIFsvWz58XVswLTldKlsrLV0/JC8sICdvcGVyYXRvcnMnLCAnQG11bHRpU3RyaW5nJ11cclxuICAgICAgICBdLFxyXG4gICAgICAgIC8vIE51bWJlcnMgaW4gRmxvdyBDb2xsZWN0aW9ucyAodGVybWluYXRlIHdpdGggLF19KVxyXG4gICAgICAgIGZsb3dOdW1iZXI6IFtcclxuICAgICAgICAgICAgWy9AbnVtYmVySW50ZWdlcig/PVsgXFx0XSpbLFxcXVxcfV0pLywgJ251bWJlciddLFxyXG4gICAgICAgICAgICBbL0BudW1iZXJGbG9hdCg/PVsgXFx0XSpbLFxcXVxcfV0pLywgJ251bWJlci5mbG9hdCddLFxyXG4gICAgICAgICAgICBbL0BudW1iZXJPY3RhbCg/PVsgXFx0XSpbLFxcXVxcfV0pLywgJ251bWJlci5vY3RhbCddLFxyXG4gICAgICAgICAgICBbL0BudW1iZXJIZXgoPz1bIFxcdF0qWyxcXF1cXH1dKS8sICdudW1iZXIuaGV4J10sXHJcbiAgICAgICAgICAgIFsvQG51bWJlckluZmluaXR5KD89WyBcXHRdKlssXFxdXFx9XSkvLCAnbnVtYmVyLmluZmluaXR5J10sXHJcbiAgICAgICAgICAgIFsvQG51bWJlck5hTig/PVsgXFx0XSpbLFxcXVxcfV0pLywgJ251bWJlci5uYW4nXSxcclxuICAgICAgICAgICAgWy9AbnVtYmVyRGF0ZSg/PVsgXFx0XSpbLFxcXVxcfV0pLywgJ251bWJlci5kYXRlJ11cclxuICAgICAgICBdLFxyXG4gICAgICAgIHRhZ0hhbmRsZTogW1xyXG4gICAgICAgICAgICBbL1xcIVteIF0qLywgJ3RhZyddXHJcbiAgICAgICAgXSxcclxuICAgICAgICBhbmNob3I6IFtcclxuICAgICAgICAgICAgWy9bJipdW14gXSsvLCAnbmFtZXNwYWNlJ11cclxuICAgICAgICBdXHJcbiAgICB9XHJcbn07XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=