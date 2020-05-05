(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[14],{

/***/ "../node_modules/monaco-editor/esm/vs/basic-languages/csp/csp.js":
/*!***********************************************************************!*\
  !*** ../node_modules/monaco-editor/esm/vs/basic-languages/csp/csp.js ***!
  \***********************************************************************/
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
    brackets: [],
    autoClosingPairs: [],
    surroundingPairs: []
};
var language = {
    // Set defaultToken to invalid to see what you do not tokenize yet
    // defaultToken: 'invalid',
    keywords: [],
    typeKeywords: [],
    tokenPostfix: '.csp',
    operators: [],
    symbols: /[=><!~?:&|+\-*\/\^%]+/,
    escapes: /\\(?:[abfnrtv\\"']|x[0-9A-Fa-f]{1,4}|u[0-9A-Fa-f]{4}|U[0-9A-Fa-f]{8})/,
    tokenizer: {
        root: [
            [/child-src/, 'string.quote'],
            [/connect-src/, 'string.quote'],
            [/default-src/, 'string.quote'],
            [/font-src/, 'string.quote'],
            [/frame-src/, 'string.quote'],
            [/img-src/, 'string.quote'],
            [/manifest-src/, 'string.quote'],
            [/media-src/, 'string.quote'],
            [/object-src/, 'string.quote'],
            [/script-src/, 'string.quote'],
            [/style-src/, 'string.quote'],
            [/worker-src/, 'string.quote'],
            [/base-uri/, 'string.quote'],
            [/plugin-types/, 'string.quote'],
            [/sandbox/, 'string.quote'],
            [/disown-opener/, 'string.quote'],
            [/form-action/, 'string.quote'],
            [/frame-ancestors/, 'string.quote'],
            [/report-uri/, 'string.quote'],
            [/report-to/, 'string.quote'],
            [/upgrade-insecure-requests/, 'string.quote'],
            [/block-all-mixed-content/, 'string.quote'],
            [/require-sri-for/, 'string.quote'],
            [/reflected-xss/, 'string.quote'],
            [/referrer/, 'string.quote'],
            [/policy-uri/, 'string.quote'],
            [/'self'/, 'string.quote'],
            [/'unsafe-inline'/, 'string.quote'],
            [/'unsafe-eval'/, 'string.quote'],
            [/'strict-dynamic'/, 'string.quote'],
            [/'unsafe-hashed-attributes'/, 'string.quote']
        ]
    }
};


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL21vbmFjby1lZGl0b3IvZXNtL3ZzL2Jhc2ljLWxhbmd1YWdlcy9jc3AvY3NwLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNhO0FBQ047QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4Q0FBOEMsSUFBSSxjQUFjLEVBQUUsY0FBYyxFQUFFO0FBQ2xGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiIuL2pzLzE0LmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAqICBDb3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuICogIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS4gU2VlIExpY2Vuc2UudHh0IGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXHJcbiAqLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xyXG4ndXNlIHN0cmljdCc7XHJcbmV4cG9ydCB2YXIgY29uZiA9IHtcclxuICAgIGJyYWNrZXRzOiBbXSxcclxuICAgIGF1dG9DbG9zaW5nUGFpcnM6IFtdLFxyXG4gICAgc3Vycm91bmRpbmdQYWlyczogW11cclxufTtcclxuZXhwb3J0IHZhciBsYW5ndWFnZSA9IHtcclxuICAgIC8vIFNldCBkZWZhdWx0VG9rZW4gdG8gaW52YWxpZCB0byBzZWUgd2hhdCB5b3UgZG8gbm90IHRva2VuaXplIHlldFxyXG4gICAgLy8gZGVmYXVsdFRva2VuOiAnaW52YWxpZCcsXHJcbiAgICBrZXl3b3JkczogW10sXHJcbiAgICB0eXBlS2V5d29yZHM6IFtdLFxyXG4gICAgdG9rZW5Qb3N0Zml4OiAnLmNzcCcsXHJcbiAgICBvcGVyYXRvcnM6IFtdLFxyXG4gICAgc3ltYm9sczogL1s9Pjwhfj86JnwrXFwtKlxcL1xcXiVdKy8sXHJcbiAgICBlc2NhcGVzOiAvXFxcXCg/OlthYmZucnR2XFxcXFwiJ118eFswLTlBLUZhLWZdezEsNH18dVswLTlBLUZhLWZdezR9fFVbMC05QS1GYS1mXXs4fSkvLFxyXG4gICAgdG9rZW5pemVyOiB7XHJcbiAgICAgICAgcm9vdDogW1xyXG4gICAgICAgICAgICBbL2NoaWxkLXNyYy8sICdzdHJpbmcucXVvdGUnXSxcclxuICAgICAgICAgICAgWy9jb25uZWN0LXNyYy8sICdzdHJpbmcucXVvdGUnXSxcclxuICAgICAgICAgICAgWy9kZWZhdWx0LXNyYy8sICdzdHJpbmcucXVvdGUnXSxcclxuICAgICAgICAgICAgWy9mb250LXNyYy8sICdzdHJpbmcucXVvdGUnXSxcclxuICAgICAgICAgICAgWy9mcmFtZS1zcmMvLCAnc3RyaW5nLnF1b3RlJ10sXHJcbiAgICAgICAgICAgIFsvaW1nLXNyYy8sICdzdHJpbmcucXVvdGUnXSxcclxuICAgICAgICAgICAgWy9tYW5pZmVzdC1zcmMvLCAnc3RyaW5nLnF1b3RlJ10sXHJcbiAgICAgICAgICAgIFsvbWVkaWEtc3JjLywgJ3N0cmluZy5xdW90ZSddLFxyXG4gICAgICAgICAgICBbL29iamVjdC1zcmMvLCAnc3RyaW5nLnF1b3RlJ10sXHJcbiAgICAgICAgICAgIFsvc2NyaXB0LXNyYy8sICdzdHJpbmcucXVvdGUnXSxcclxuICAgICAgICAgICAgWy9zdHlsZS1zcmMvLCAnc3RyaW5nLnF1b3RlJ10sXHJcbiAgICAgICAgICAgIFsvd29ya2VyLXNyYy8sICdzdHJpbmcucXVvdGUnXSxcclxuICAgICAgICAgICAgWy9iYXNlLXVyaS8sICdzdHJpbmcucXVvdGUnXSxcclxuICAgICAgICAgICAgWy9wbHVnaW4tdHlwZXMvLCAnc3RyaW5nLnF1b3RlJ10sXHJcbiAgICAgICAgICAgIFsvc2FuZGJveC8sICdzdHJpbmcucXVvdGUnXSxcclxuICAgICAgICAgICAgWy9kaXNvd24tb3BlbmVyLywgJ3N0cmluZy5xdW90ZSddLFxyXG4gICAgICAgICAgICBbL2Zvcm0tYWN0aW9uLywgJ3N0cmluZy5xdW90ZSddLFxyXG4gICAgICAgICAgICBbL2ZyYW1lLWFuY2VzdG9ycy8sICdzdHJpbmcucXVvdGUnXSxcclxuICAgICAgICAgICAgWy9yZXBvcnQtdXJpLywgJ3N0cmluZy5xdW90ZSddLFxyXG4gICAgICAgICAgICBbL3JlcG9ydC10by8sICdzdHJpbmcucXVvdGUnXSxcclxuICAgICAgICAgICAgWy91cGdyYWRlLWluc2VjdXJlLXJlcXVlc3RzLywgJ3N0cmluZy5xdW90ZSddLFxyXG4gICAgICAgICAgICBbL2Jsb2NrLWFsbC1taXhlZC1jb250ZW50LywgJ3N0cmluZy5xdW90ZSddLFxyXG4gICAgICAgICAgICBbL3JlcXVpcmUtc3JpLWZvci8sICdzdHJpbmcucXVvdGUnXSxcclxuICAgICAgICAgICAgWy9yZWZsZWN0ZWQteHNzLywgJ3N0cmluZy5xdW90ZSddLFxyXG4gICAgICAgICAgICBbL3JlZmVycmVyLywgJ3N0cmluZy5xdW90ZSddLFxyXG4gICAgICAgICAgICBbL3BvbGljeS11cmkvLCAnc3RyaW5nLnF1b3RlJ10sXHJcbiAgICAgICAgICAgIFsvJ3NlbGYnLywgJ3N0cmluZy5xdW90ZSddLFxyXG4gICAgICAgICAgICBbLyd1bnNhZmUtaW5saW5lJy8sICdzdHJpbmcucXVvdGUnXSxcclxuICAgICAgICAgICAgWy8ndW5zYWZlLWV2YWwnLywgJ3N0cmluZy5xdW90ZSddLFxyXG4gICAgICAgICAgICBbLydzdHJpY3QtZHluYW1pYycvLCAnc3RyaW5nLnF1b3RlJ10sXHJcbiAgICAgICAgICAgIFsvJ3Vuc2FmZS1oYXNoZWQtYXR0cmlidXRlcycvLCAnc3RyaW5nLnF1b3RlJ11cclxuICAgICAgICBdXHJcbiAgICB9XHJcbn07XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=