(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[21],{

/***/ "../node_modules/monaco-editor/esm/vs/basic-languages/html/html.js":
/*!*************************************************************************!*\
  !*** ../node_modules/monaco-editor/esm/vs/basic-languages/html/html.js ***!
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

// Allow for running under nodejs/requirejs in tests
var _monaco = (typeof monaco === 'undefined' ? self.monaco : monaco);
var EMPTY_ELEMENTS = ['area', 'base', 'br', 'col', 'embed', 'hr', 'img', 'input', 'keygen', 'link', 'menuitem', 'meta', 'param', 'source', 'track', 'wbr'];
var conf = {
    wordPattern: /(-?\d*\.\d\w*)|([^\`\~\!\@\$\^\&\*\(\)\=\+\[\{\]\}\\\|\;\:\'\"\,\.\<\>\/\s]+)/g,
    comments: {
        blockComment: ['<!--', '-->']
    },
    brackets: [
        ['<!--', '-->'],
        ['<', '>'],
        ['{', '}'],
        ['(', ')']
    ],
    autoClosingPairs: [
        { open: '{', close: '}' },
        { open: '[', close: ']' },
        { open: '(', close: ')' },
        { open: '"', close: '"' },
        { open: '\'', close: '\'' }
    ],
    surroundingPairs: [
        { open: '"', close: '"' },
        { open: '\'', close: '\'' },
        { open: '{', close: '}' },
        { open: '[', close: ']' },
        { open: '(', close: ')' },
        { open: '<', close: '>' },
    ],
    onEnterRules: [
        {
            beforeText: new RegExp("<(?!(?:" + EMPTY_ELEMENTS.join('|') + "))([_:\\w][_:\\w-.\\d]*)([^/>]*(?!/)>)[^<]*$", 'i'),
            afterText: /^<\/([_:\w][_:\w-.\d]*)\s*>$/i,
            action: { indentAction: _monaco.languages.IndentAction.IndentOutdent }
        },
        {
            beforeText: new RegExp("<(?!(?:" + EMPTY_ELEMENTS.join('|') + "))(\\w[\\w\\d]*)([^/>]*(?!/)>)[^<]*$", 'i'),
            action: { indentAction: _monaco.languages.IndentAction.Indent }
        }
    ],
    folding: {
        markers: {
            start: new RegExp("^\\s*<!--\\s*#region\\b.*-->"),
            end: new RegExp("^\\s*<!--\\s*#endregion\\b.*-->")
        }
    }
};
var language = {
    defaultToken: '',
    tokenPostfix: '.html',
    ignoreCase: true,
    // The main tokenizer for our languages
    tokenizer: {
        root: [
            [/<!DOCTYPE/, 'metatag', '@doctype'],
            [/<!--/, 'comment', '@comment'],
            [/(<)((?:[\w\-]+:)?[\w\-]+)(\s*)(\/>)/, ['delimiter', 'tag', '', 'delimiter']],
            [/(<)(script)/, ['delimiter', { token: 'tag', next: '@script' }]],
            [/(<)(style)/, ['delimiter', { token: 'tag', next: '@style' }]],
            [/(<)((?:[\w\-]+:)?[\w\-]+)/, ['delimiter', { token: 'tag', next: '@otherTag' }]],
            [/(<\/)((?:[\w\-]+:)?[\w\-]+)/, ['delimiter', { token: 'tag', next: '@otherTag' }]],
            [/</, 'delimiter'],
            [/[^<]+/],
        ],
        doctype: [
            [/[^>]+/, 'metatag.content'],
            [/>/, 'metatag', '@pop'],
        ],
        comment: [
            [/-->/, 'comment', '@pop'],
            [/[^-]+/, 'comment.content'],
            [/./, 'comment.content']
        ],
        otherTag: [
            [/\/?>/, 'delimiter', '@pop'],
            [/"([^"]*)"/, 'attribute.value'],
            [/'([^']*)'/, 'attribute.value'],
            [/[\w\-]+/, 'attribute.name'],
            [/=/, 'delimiter'],
            [/[ \t\r\n]+/],
        ],
        // -- BEGIN <script> tags handling
        // After <script
        script: [
            [/type/, 'attribute.name', '@scriptAfterType'],
            [/"([^"]*)"/, 'attribute.value'],
            [/'([^']*)'/, 'attribute.value'],
            [/[\w\-]+/, 'attribute.name'],
            [/=/, 'delimiter'],
            [/>/, { token: 'delimiter', next: '@scriptEmbedded', nextEmbedded: 'text/javascript' }],
            [/[ \t\r\n]+/],
            [/(<\/)(script\s*)(>)/, ['delimiter', 'tag', { token: 'delimiter', next: '@pop' }]]
        ],
        // After <script ... type
        scriptAfterType: [
            [/=/, 'delimiter', '@scriptAfterTypeEquals'],
            [/>/, { token: 'delimiter', next: '@scriptEmbedded', nextEmbedded: 'text/javascript' }],
            [/[ \t\r\n]+/],
            [/<\/script\s*>/, { token: '@rematch', next: '@pop' }]
        ],
        // After <script ... type =
        scriptAfterTypeEquals: [
            [/"([^"]*)"/, { token: 'attribute.value', switchTo: '@scriptWithCustomType.$1' }],
            [/'([^']*)'/, { token: 'attribute.value', switchTo: '@scriptWithCustomType.$1' }],
            [/>/, { token: 'delimiter', next: '@scriptEmbedded', nextEmbedded: 'text/javascript' }],
            [/[ \t\r\n]+/],
            [/<\/script\s*>/, { token: '@rematch', next: '@pop' }]
        ],
        // After <script ... type = $S2
        scriptWithCustomType: [
            [/>/, { token: 'delimiter', next: '@scriptEmbedded.$S2', nextEmbedded: '$S2' }],
            [/"([^"]*)"/, 'attribute.value'],
            [/'([^']*)'/, 'attribute.value'],
            [/[\w\-]+/, 'attribute.name'],
            [/=/, 'delimiter'],
            [/[ \t\r\n]+/],
            [/<\/script\s*>/, { token: '@rematch', next: '@pop' }]
        ],
        scriptEmbedded: [
            [/<\/script/, { token: '@rematch', next: '@pop', nextEmbedded: '@pop' }],
            [/[^<]+/, '']
        ],
        // -- END <script> tags handling
        // -- BEGIN <style> tags handling
        // After <style
        style: [
            [/type/, 'attribute.name', '@styleAfterType'],
            [/"([^"]*)"/, 'attribute.value'],
            [/'([^']*)'/, 'attribute.value'],
            [/[\w\-]+/, 'attribute.name'],
            [/=/, 'delimiter'],
            [/>/, { token: 'delimiter', next: '@styleEmbedded', nextEmbedded: 'text/css' }],
            [/[ \t\r\n]+/],
            [/(<\/)(style\s*)(>)/, ['delimiter', 'tag', { token: 'delimiter', next: '@pop' }]]
        ],
        // After <style ... type
        styleAfterType: [
            [/=/, 'delimiter', '@styleAfterTypeEquals'],
            [/>/, { token: 'delimiter', next: '@styleEmbedded', nextEmbedded: 'text/css' }],
            [/[ \t\r\n]+/],
            [/<\/style\s*>/, { token: '@rematch', next: '@pop' }]
        ],
        // After <style ... type =
        styleAfterTypeEquals: [
            [/"([^"]*)"/, { token: 'attribute.value', switchTo: '@styleWithCustomType.$1' }],
            [/'([^']*)'/, { token: 'attribute.value', switchTo: '@styleWithCustomType.$1' }],
            [/>/, { token: 'delimiter', next: '@styleEmbedded', nextEmbedded: 'text/css' }],
            [/[ \t\r\n]+/],
            [/<\/style\s*>/, { token: '@rematch', next: '@pop' }]
        ],
        // After <style ... type = $S2
        styleWithCustomType: [
            [/>/, { token: 'delimiter', next: '@styleEmbedded.$S2', nextEmbedded: '$S2' }],
            [/"([^"]*)"/, 'attribute.value'],
            [/'([^']*)'/, 'attribute.value'],
            [/[\w\-]+/, 'attribute.name'],
            [/=/, 'delimiter'],
            [/[ \t\r\n]+/],
            [/<\/style\s*>/, { token: '@rematch', next: '@pop' }]
        ],
        styleEmbedded: [
            [/<\/style/, { token: '@rematch', next: '@pop', nextEmbedded: '@pop' }],
            [/[^<]+/, '']
        ],
    },
};


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL21vbmFjby1lZGl0b3IvZXNtL3ZzL2Jhc2ljLWxhbmd1YWdlcy9odG1sL2h0bWwuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ2E7QUFDYjtBQUNBO0FBQ0E7QUFDTztBQUNQLGdFQUFnRSxJQUFJLE1BQU07QUFDMUU7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxXQUFXLEtBQUs7QUFDaEI7QUFDQTtBQUNBO0FBQ0EsU0FBUyxTQUFTLFlBQVksR0FBRztBQUNqQyxTQUFTLHdCQUF3QjtBQUNqQyxTQUFTLHdCQUF3QjtBQUNqQyxTQUFTLHdCQUF3QjtBQUNqQyxTQUFTO0FBQ1Q7QUFDQTtBQUNBLFNBQVMsd0JBQXdCO0FBQ2pDLFNBQVMsMEJBQTBCO0FBQ25DLFNBQVMsU0FBUyxZQUFZLEdBQUc7QUFDakMsU0FBUyx3QkFBd0I7QUFDakMsU0FBUyx3QkFBd0I7QUFDakMsU0FBUyx3QkFBd0I7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQixTQUFTO0FBQ1Q7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJDQUEyQyxnQ0FBZ0M7QUFDM0UsMENBQTBDLCtCQUErQjtBQUN6RSx5REFBeUQsa0NBQWtDO0FBQzNGLDJEQUEyRCxrQ0FBa0M7QUFDN0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsK0VBQStFO0FBQ2xHO0FBQ0EsMERBQTBELG1DQUFtQztBQUM3RjtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQiwrRUFBK0U7QUFDbEc7QUFDQSwrQkFBK0Isa0NBQWtDO0FBQ2pFO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQixpRUFBaUU7QUFDNUYsMkJBQTJCLGlFQUFpRTtBQUM1RixtQkFBbUIsK0VBQStFO0FBQ2xHO0FBQ0EsK0JBQStCLGtDQUFrQztBQUNqRTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsdUVBQXVFO0FBQzFGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0Isa0NBQWtDO0FBQ2pFO0FBQ0E7QUFDQSwyQkFBMkIsd0RBQXdEO0FBQ25GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsdUVBQXVFO0FBQzFGO0FBQ0EseURBQXlELG1DQUFtQztBQUM1RjtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQix1RUFBdUU7QUFDMUY7QUFDQSw4QkFBOEIsa0NBQWtDO0FBQ2hFO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQixnRUFBZ0U7QUFDM0YsMkJBQTJCLGdFQUFnRTtBQUMzRixtQkFBbUIsdUVBQXVFO0FBQzFGO0FBQ0EsOEJBQThCLGtDQUFrQztBQUNoRTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsc0VBQXNFO0FBQ3pGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4QkFBOEIsa0NBQWtDO0FBQ2hFO0FBQ0E7QUFDQSwwQkFBMEIsd0RBQXdEO0FBQ2xGO0FBQ0E7QUFDQSxLQUFLO0FBQ0wiLCJmaWxlIjoianMvMjEuYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICogIENvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG4gKiAgTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLiBTZWUgTGljZW5zZS50eHQgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cclxuICotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXHJcbid1c2Ugc3RyaWN0JztcclxuLy8gQWxsb3cgZm9yIHJ1bm5pbmcgdW5kZXIgbm9kZWpzL3JlcXVpcmVqcyBpbiB0ZXN0c1xyXG52YXIgX21vbmFjbyA9ICh0eXBlb2YgbW9uYWNvID09PSAndW5kZWZpbmVkJyA/IHNlbGYubW9uYWNvIDogbW9uYWNvKTtcclxudmFyIEVNUFRZX0VMRU1FTlRTID0gWydhcmVhJywgJ2Jhc2UnLCAnYnInLCAnY29sJywgJ2VtYmVkJywgJ2hyJywgJ2ltZycsICdpbnB1dCcsICdrZXlnZW4nLCAnbGluaycsICdtZW51aXRlbScsICdtZXRhJywgJ3BhcmFtJywgJ3NvdXJjZScsICd0cmFjaycsICd3YnInXTtcclxuZXhwb3J0IHZhciBjb25mID0ge1xyXG4gICAgd29yZFBhdHRlcm46IC8oLT9cXGQqXFwuXFxkXFx3Kil8KFteXFxgXFx+XFwhXFxAXFwkXFxeXFwmXFwqXFwoXFwpXFw9XFwrXFxbXFx7XFxdXFx9XFxcXFxcfFxcO1xcOlxcJ1xcXCJcXCxcXC5cXDxcXD5cXC9cXHNdKykvZyxcclxuICAgIGNvbW1lbnRzOiB7XHJcbiAgICAgICAgYmxvY2tDb21tZW50OiBbJzwhLS0nLCAnLS0+J11cclxuICAgIH0sXHJcbiAgICBicmFja2V0czogW1xyXG4gICAgICAgIFsnPCEtLScsICctLT4nXSxcclxuICAgICAgICBbJzwnLCAnPiddLFxyXG4gICAgICAgIFsneycsICd9J10sXHJcbiAgICAgICAgWycoJywgJyknXVxyXG4gICAgXSxcclxuICAgIGF1dG9DbG9zaW5nUGFpcnM6IFtcclxuICAgICAgICB7IG9wZW46ICd7JywgY2xvc2U6ICd9JyB9LFxyXG4gICAgICAgIHsgb3BlbjogJ1snLCBjbG9zZTogJ10nIH0sXHJcbiAgICAgICAgeyBvcGVuOiAnKCcsIGNsb3NlOiAnKScgfSxcclxuICAgICAgICB7IG9wZW46ICdcIicsIGNsb3NlOiAnXCInIH0sXHJcbiAgICAgICAgeyBvcGVuOiAnXFwnJywgY2xvc2U6ICdcXCcnIH1cclxuICAgIF0sXHJcbiAgICBzdXJyb3VuZGluZ1BhaXJzOiBbXHJcbiAgICAgICAgeyBvcGVuOiAnXCInLCBjbG9zZTogJ1wiJyB9LFxyXG4gICAgICAgIHsgb3BlbjogJ1xcJycsIGNsb3NlOiAnXFwnJyB9LFxyXG4gICAgICAgIHsgb3BlbjogJ3snLCBjbG9zZTogJ30nIH0sXHJcbiAgICAgICAgeyBvcGVuOiAnWycsIGNsb3NlOiAnXScgfSxcclxuICAgICAgICB7IG9wZW46ICcoJywgY2xvc2U6ICcpJyB9LFxyXG4gICAgICAgIHsgb3BlbjogJzwnLCBjbG9zZTogJz4nIH0sXHJcbiAgICBdLFxyXG4gICAgb25FbnRlclJ1bGVzOiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBiZWZvcmVUZXh0OiBuZXcgUmVnRXhwKFwiPCg/ISg/OlwiICsgRU1QVFlfRUxFTUVOVFMuam9pbignfCcpICsgXCIpKShbXzpcXFxcd11bXzpcXFxcdy0uXFxcXGRdKikoW14vPl0qKD8hLyk+KVtePF0qJFwiLCAnaScpLFxyXG4gICAgICAgICAgICBhZnRlclRleHQ6IC9ePFxcLyhbXzpcXHddW186XFx3LS5cXGRdKilcXHMqPiQvaSxcclxuICAgICAgICAgICAgYWN0aW9uOiB7IGluZGVudEFjdGlvbjogX21vbmFjby5sYW5ndWFnZXMuSW5kZW50QWN0aW9uLkluZGVudE91dGRlbnQgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBiZWZvcmVUZXh0OiBuZXcgUmVnRXhwKFwiPCg/ISg/OlwiICsgRU1QVFlfRUxFTUVOVFMuam9pbignfCcpICsgXCIpKShcXFxcd1tcXFxcd1xcXFxkXSopKFteLz5dKig/IS8pPilbXjxdKiRcIiwgJ2knKSxcclxuICAgICAgICAgICAgYWN0aW9uOiB7IGluZGVudEFjdGlvbjogX21vbmFjby5sYW5ndWFnZXMuSW5kZW50QWN0aW9uLkluZGVudCB9XHJcbiAgICAgICAgfVxyXG4gICAgXSxcclxuICAgIGZvbGRpbmc6IHtcclxuICAgICAgICBtYXJrZXJzOiB7XHJcbiAgICAgICAgICAgIHN0YXJ0OiBuZXcgUmVnRXhwKFwiXlxcXFxzKjwhLS1cXFxccyojcmVnaW9uXFxcXGIuKi0tPlwiKSxcclxuICAgICAgICAgICAgZW5kOiBuZXcgUmVnRXhwKFwiXlxcXFxzKjwhLS1cXFxccyojZW5kcmVnaW9uXFxcXGIuKi0tPlwiKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufTtcclxuZXhwb3J0IHZhciBsYW5ndWFnZSA9IHtcclxuICAgIGRlZmF1bHRUb2tlbjogJycsXHJcbiAgICB0b2tlblBvc3RmaXg6ICcuaHRtbCcsXHJcbiAgICBpZ25vcmVDYXNlOiB0cnVlLFxyXG4gICAgLy8gVGhlIG1haW4gdG9rZW5pemVyIGZvciBvdXIgbGFuZ3VhZ2VzXHJcbiAgICB0b2tlbml6ZXI6IHtcclxuICAgICAgICByb290OiBbXHJcbiAgICAgICAgICAgIFsvPCFET0NUWVBFLywgJ21ldGF0YWcnLCAnQGRvY3R5cGUnXSxcclxuICAgICAgICAgICAgWy88IS0tLywgJ2NvbW1lbnQnLCAnQGNvbW1lbnQnXSxcclxuICAgICAgICAgICAgWy8oPCkoKD86W1xcd1xcLV0rOik/W1xcd1xcLV0rKShcXHMqKShcXC8+KS8sIFsnZGVsaW1pdGVyJywgJ3RhZycsICcnLCAnZGVsaW1pdGVyJ11dLFxyXG4gICAgICAgICAgICBbLyg8KShzY3JpcHQpLywgWydkZWxpbWl0ZXInLCB7IHRva2VuOiAndGFnJywgbmV4dDogJ0BzY3JpcHQnIH1dXSxcclxuICAgICAgICAgICAgWy8oPCkoc3R5bGUpLywgWydkZWxpbWl0ZXInLCB7IHRva2VuOiAndGFnJywgbmV4dDogJ0BzdHlsZScgfV1dLFxyXG4gICAgICAgICAgICBbLyg8KSgoPzpbXFx3XFwtXSs6KT9bXFx3XFwtXSspLywgWydkZWxpbWl0ZXInLCB7IHRva2VuOiAndGFnJywgbmV4dDogJ0BvdGhlclRhZycgfV1dLFxyXG4gICAgICAgICAgICBbLyg8XFwvKSgoPzpbXFx3XFwtXSs6KT9bXFx3XFwtXSspLywgWydkZWxpbWl0ZXInLCB7IHRva2VuOiAndGFnJywgbmV4dDogJ0BvdGhlclRhZycgfV1dLFxyXG4gICAgICAgICAgICBbLzwvLCAnZGVsaW1pdGVyJ10sXHJcbiAgICAgICAgICAgIFsvW148XSsvXSxcclxuICAgICAgICBdLFxyXG4gICAgICAgIGRvY3R5cGU6IFtcclxuICAgICAgICAgICAgWy9bXj5dKy8sICdtZXRhdGFnLmNvbnRlbnQnXSxcclxuICAgICAgICAgICAgWy8+LywgJ21ldGF0YWcnLCAnQHBvcCddLFxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgY29tbWVudDogW1xyXG4gICAgICAgICAgICBbLy0tPi8sICdjb21tZW50JywgJ0Bwb3AnXSxcclxuICAgICAgICAgICAgWy9bXi1dKy8sICdjb21tZW50LmNvbnRlbnQnXSxcclxuICAgICAgICAgICAgWy8uLywgJ2NvbW1lbnQuY29udGVudCddXHJcbiAgICAgICAgXSxcclxuICAgICAgICBvdGhlclRhZzogW1xyXG4gICAgICAgICAgICBbL1xcLz8+LywgJ2RlbGltaXRlcicsICdAcG9wJ10sXHJcbiAgICAgICAgICAgIFsvXCIoW15cIl0qKVwiLywgJ2F0dHJpYnV0ZS52YWx1ZSddLFxyXG4gICAgICAgICAgICBbLycoW14nXSopJy8sICdhdHRyaWJ1dGUudmFsdWUnXSxcclxuICAgICAgICAgICAgWy9bXFx3XFwtXSsvLCAnYXR0cmlidXRlLm5hbWUnXSxcclxuICAgICAgICAgICAgWy89LywgJ2RlbGltaXRlciddLFxyXG4gICAgICAgICAgICBbL1sgXFx0XFxyXFxuXSsvXSxcclxuICAgICAgICBdLFxyXG4gICAgICAgIC8vIC0tIEJFR0lOIDxzY3JpcHQ+IHRhZ3MgaGFuZGxpbmdcclxuICAgICAgICAvLyBBZnRlciA8c2NyaXB0XHJcbiAgICAgICAgc2NyaXB0OiBbXHJcbiAgICAgICAgICAgIFsvdHlwZS8sICdhdHRyaWJ1dGUubmFtZScsICdAc2NyaXB0QWZ0ZXJUeXBlJ10sXHJcbiAgICAgICAgICAgIFsvXCIoW15cIl0qKVwiLywgJ2F0dHJpYnV0ZS52YWx1ZSddLFxyXG4gICAgICAgICAgICBbLycoW14nXSopJy8sICdhdHRyaWJ1dGUudmFsdWUnXSxcclxuICAgICAgICAgICAgWy9bXFx3XFwtXSsvLCAnYXR0cmlidXRlLm5hbWUnXSxcclxuICAgICAgICAgICAgWy89LywgJ2RlbGltaXRlciddLFxyXG4gICAgICAgICAgICBbLz4vLCB7IHRva2VuOiAnZGVsaW1pdGVyJywgbmV4dDogJ0BzY3JpcHRFbWJlZGRlZCcsIG5leHRFbWJlZGRlZDogJ3RleHQvamF2YXNjcmlwdCcgfV0sXHJcbiAgICAgICAgICAgIFsvWyBcXHRcXHJcXG5dKy9dLFxyXG4gICAgICAgICAgICBbLyg8XFwvKShzY3JpcHRcXHMqKSg+KS8sIFsnZGVsaW1pdGVyJywgJ3RhZycsIHsgdG9rZW46ICdkZWxpbWl0ZXInLCBuZXh0OiAnQHBvcCcgfV1dXHJcbiAgICAgICAgXSxcclxuICAgICAgICAvLyBBZnRlciA8c2NyaXB0IC4uLiB0eXBlXHJcbiAgICAgICAgc2NyaXB0QWZ0ZXJUeXBlOiBbXHJcbiAgICAgICAgICAgIFsvPS8sICdkZWxpbWl0ZXInLCAnQHNjcmlwdEFmdGVyVHlwZUVxdWFscyddLFxyXG4gICAgICAgICAgICBbLz4vLCB7IHRva2VuOiAnZGVsaW1pdGVyJywgbmV4dDogJ0BzY3JpcHRFbWJlZGRlZCcsIG5leHRFbWJlZGRlZDogJ3RleHQvamF2YXNjcmlwdCcgfV0sXHJcbiAgICAgICAgICAgIFsvWyBcXHRcXHJcXG5dKy9dLFxyXG4gICAgICAgICAgICBbLzxcXC9zY3JpcHRcXHMqPi8sIHsgdG9rZW46ICdAcmVtYXRjaCcsIG5leHQ6ICdAcG9wJyB9XVxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgLy8gQWZ0ZXIgPHNjcmlwdCAuLi4gdHlwZSA9XHJcbiAgICAgICAgc2NyaXB0QWZ0ZXJUeXBlRXF1YWxzOiBbXHJcbiAgICAgICAgICAgIFsvXCIoW15cIl0qKVwiLywgeyB0b2tlbjogJ2F0dHJpYnV0ZS52YWx1ZScsIHN3aXRjaFRvOiAnQHNjcmlwdFdpdGhDdXN0b21UeXBlLiQxJyB9XSxcclxuICAgICAgICAgICAgWy8nKFteJ10qKScvLCB7IHRva2VuOiAnYXR0cmlidXRlLnZhbHVlJywgc3dpdGNoVG86ICdAc2NyaXB0V2l0aEN1c3RvbVR5cGUuJDEnIH1dLFxyXG4gICAgICAgICAgICBbLz4vLCB7IHRva2VuOiAnZGVsaW1pdGVyJywgbmV4dDogJ0BzY3JpcHRFbWJlZGRlZCcsIG5leHRFbWJlZGRlZDogJ3RleHQvamF2YXNjcmlwdCcgfV0sXHJcbiAgICAgICAgICAgIFsvWyBcXHRcXHJcXG5dKy9dLFxyXG4gICAgICAgICAgICBbLzxcXC9zY3JpcHRcXHMqPi8sIHsgdG9rZW46ICdAcmVtYXRjaCcsIG5leHQ6ICdAcG9wJyB9XVxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgLy8gQWZ0ZXIgPHNjcmlwdCAuLi4gdHlwZSA9ICRTMlxyXG4gICAgICAgIHNjcmlwdFdpdGhDdXN0b21UeXBlOiBbXHJcbiAgICAgICAgICAgIFsvPi8sIHsgdG9rZW46ICdkZWxpbWl0ZXInLCBuZXh0OiAnQHNjcmlwdEVtYmVkZGVkLiRTMicsIG5leHRFbWJlZGRlZDogJyRTMicgfV0sXHJcbiAgICAgICAgICAgIFsvXCIoW15cIl0qKVwiLywgJ2F0dHJpYnV0ZS52YWx1ZSddLFxyXG4gICAgICAgICAgICBbLycoW14nXSopJy8sICdhdHRyaWJ1dGUudmFsdWUnXSxcclxuICAgICAgICAgICAgWy9bXFx3XFwtXSsvLCAnYXR0cmlidXRlLm5hbWUnXSxcclxuICAgICAgICAgICAgWy89LywgJ2RlbGltaXRlciddLFxyXG4gICAgICAgICAgICBbL1sgXFx0XFxyXFxuXSsvXSxcclxuICAgICAgICAgICAgWy88XFwvc2NyaXB0XFxzKj4vLCB7IHRva2VuOiAnQHJlbWF0Y2gnLCBuZXh0OiAnQHBvcCcgfV1cclxuICAgICAgICBdLFxyXG4gICAgICAgIHNjcmlwdEVtYmVkZGVkOiBbXHJcbiAgICAgICAgICAgIFsvPFxcL3NjcmlwdC8sIHsgdG9rZW46ICdAcmVtYXRjaCcsIG5leHQ6ICdAcG9wJywgbmV4dEVtYmVkZGVkOiAnQHBvcCcgfV0sXHJcbiAgICAgICAgICAgIFsvW148XSsvLCAnJ11cclxuICAgICAgICBdLFxyXG4gICAgICAgIC8vIC0tIEVORCA8c2NyaXB0PiB0YWdzIGhhbmRsaW5nXHJcbiAgICAgICAgLy8gLS0gQkVHSU4gPHN0eWxlPiB0YWdzIGhhbmRsaW5nXHJcbiAgICAgICAgLy8gQWZ0ZXIgPHN0eWxlXHJcbiAgICAgICAgc3R5bGU6IFtcclxuICAgICAgICAgICAgWy90eXBlLywgJ2F0dHJpYnV0ZS5uYW1lJywgJ0BzdHlsZUFmdGVyVHlwZSddLFxyXG4gICAgICAgICAgICBbL1wiKFteXCJdKilcIi8sICdhdHRyaWJ1dGUudmFsdWUnXSxcclxuICAgICAgICAgICAgWy8nKFteJ10qKScvLCAnYXR0cmlidXRlLnZhbHVlJ10sXHJcbiAgICAgICAgICAgIFsvW1xcd1xcLV0rLywgJ2F0dHJpYnV0ZS5uYW1lJ10sXHJcbiAgICAgICAgICAgIFsvPS8sICdkZWxpbWl0ZXInXSxcclxuICAgICAgICAgICAgWy8+LywgeyB0b2tlbjogJ2RlbGltaXRlcicsIG5leHQ6ICdAc3R5bGVFbWJlZGRlZCcsIG5leHRFbWJlZGRlZDogJ3RleHQvY3NzJyB9XSxcclxuICAgICAgICAgICAgWy9bIFxcdFxcclxcbl0rL10sXHJcbiAgICAgICAgICAgIFsvKDxcXC8pKHN0eWxlXFxzKikoPikvLCBbJ2RlbGltaXRlcicsICd0YWcnLCB7IHRva2VuOiAnZGVsaW1pdGVyJywgbmV4dDogJ0Bwb3AnIH1dXVxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgLy8gQWZ0ZXIgPHN0eWxlIC4uLiB0eXBlXHJcbiAgICAgICAgc3R5bGVBZnRlclR5cGU6IFtcclxuICAgICAgICAgICAgWy89LywgJ2RlbGltaXRlcicsICdAc3R5bGVBZnRlclR5cGVFcXVhbHMnXSxcclxuICAgICAgICAgICAgWy8+LywgeyB0b2tlbjogJ2RlbGltaXRlcicsIG5leHQ6ICdAc3R5bGVFbWJlZGRlZCcsIG5leHRFbWJlZGRlZDogJ3RleHQvY3NzJyB9XSxcclxuICAgICAgICAgICAgWy9bIFxcdFxcclxcbl0rL10sXHJcbiAgICAgICAgICAgIFsvPFxcL3N0eWxlXFxzKj4vLCB7IHRva2VuOiAnQHJlbWF0Y2gnLCBuZXh0OiAnQHBvcCcgfV1cclxuICAgICAgICBdLFxyXG4gICAgICAgIC8vIEFmdGVyIDxzdHlsZSAuLi4gdHlwZSA9XHJcbiAgICAgICAgc3R5bGVBZnRlclR5cGVFcXVhbHM6IFtcclxuICAgICAgICAgICAgWy9cIihbXlwiXSopXCIvLCB7IHRva2VuOiAnYXR0cmlidXRlLnZhbHVlJywgc3dpdGNoVG86ICdAc3R5bGVXaXRoQ3VzdG9tVHlwZS4kMScgfV0sXHJcbiAgICAgICAgICAgIFsvJyhbXiddKiknLywgeyB0b2tlbjogJ2F0dHJpYnV0ZS52YWx1ZScsIHN3aXRjaFRvOiAnQHN0eWxlV2l0aEN1c3RvbVR5cGUuJDEnIH1dLFxyXG4gICAgICAgICAgICBbLz4vLCB7IHRva2VuOiAnZGVsaW1pdGVyJywgbmV4dDogJ0BzdHlsZUVtYmVkZGVkJywgbmV4dEVtYmVkZGVkOiAndGV4dC9jc3MnIH1dLFxyXG4gICAgICAgICAgICBbL1sgXFx0XFxyXFxuXSsvXSxcclxuICAgICAgICAgICAgWy88XFwvc3R5bGVcXHMqPi8sIHsgdG9rZW46ICdAcmVtYXRjaCcsIG5leHQ6ICdAcG9wJyB9XVxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgLy8gQWZ0ZXIgPHN0eWxlIC4uLiB0eXBlID0gJFMyXHJcbiAgICAgICAgc3R5bGVXaXRoQ3VzdG9tVHlwZTogW1xyXG4gICAgICAgICAgICBbLz4vLCB7IHRva2VuOiAnZGVsaW1pdGVyJywgbmV4dDogJ0BzdHlsZUVtYmVkZGVkLiRTMicsIG5leHRFbWJlZGRlZDogJyRTMicgfV0sXHJcbiAgICAgICAgICAgIFsvXCIoW15cIl0qKVwiLywgJ2F0dHJpYnV0ZS52YWx1ZSddLFxyXG4gICAgICAgICAgICBbLycoW14nXSopJy8sICdhdHRyaWJ1dGUudmFsdWUnXSxcclxuICAgICAgICAgICAgWy9bXFx3XFwtXSsvLCAnYXR0cmlidXRlLm5hbWUnXSxcclxuICAgICAgICAgICAgWy89LywgJ2RlbGltaXRlciddLFxyXG4gICAgICAgICAgICBbL1sgXFx0XFxyXFxuXSsvXSxcclxuICAgICAgICAgICAgWy88XFwvc3R5bGVcXHMqPi8sIHsgdG9rZW46ICdAcmVtYXRjaCcsIG5leHQ6ICdAcG9wJyB9XVxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgc3R5bGVFbWJlZGRlZDogW1xyXG4gICAgICAgICAgICBbLzxcXC9zdHlsZS8sIHsgdG9rZW46ICdAcmVtYXRjaCcsIG5leHQ6ICdAcG9wJywgbmV4dEVtYmVkZGVkOiAnQHBvcCcgfV0sXHJcbiAgICAgICAgICAgIFsvW148XSsvLCAnJ11cclxuICAgICAgICBdLFxyXG4gICAgfSxcclxufTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==