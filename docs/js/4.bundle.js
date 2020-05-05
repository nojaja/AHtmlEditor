(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[4],{

/***/ "../node_modules/monaco-editor/esm/vs/language/typescript/languageFeatures.js":
/*!************************************************************************************!*\
  !*** ../node_modules/monaco-editor/esm/vs/language/typescript/languageFeatures.js ***!
  \************************************************************************************/
/*! exports provided: flattenDiagnosticMessageText, Adapter, DiagnosticsAdapter, SuggestAdapter, SignatureHelpAdapter, QuickInfoAdapter, OccurrencesAdapter, DefinitionAdapter, ReferenceAdapter, OutlineAdapter, Kind, FormatHelper, FormatAdapter, FormatOnTypeAdapter, CodeActionAdaptor, RenameAdapter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "flattenDiagnosticMessageText", function() { return flattenDiagnosticMessageText; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Adapter", function() { return Adapter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DiagnosticsAdapter", function() { return DiagnosticsAdapter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SuggestAdapter", function() { return SuggestAdapter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignatureHelpAdapter", function() { return SignatureHelpAdapter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuickInfoAdapter", function() { return QuickInfoAdapter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OccurrencesAdapter", function() { return OccurrencesAdapter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DefinitionAdapter", function() { return DefinitionAdapter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReferenceAdapter", function() { return ReferenceAdapter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OutlineAdapter", function() { return OutlineAdapter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Kind", function() { return Kind; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormatHelper", function() { return FormatHelper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormatAdapter", function() { return FormatAdapter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormatOnTypeAdapter", function() { return FormatOnTypeAdapter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CodeActionAdaptor", function() { return CodeActionAdaptor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenameAdapter", function() { return RenameAdapter; });
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var Uri = monaco.Uri;
var Range = monaco.Range;
//#region utils copied from typescript to prevent loading the entire typescriptServices ---
var IndentStyle;
(function (IndentStyle) {
    IndentStyle[IndentStyle["None"] = 0] = "None";
    IndentStyle[IndentStyle["Block"] = 1] = "Block";
    IndentStyle[IndentStyle["Smart"] = 2] = "Smart";
})(IndentStyle || (IndentStyle = {}));
function flattenDiagnosticMessageText(diag, newLine, indent) {
    if (indent === void 0) { indent = 0; }
    if (typeof diag === "string") {
        return diag;
    }
    else if (diag === undefined) {
        return "";
    }
    var result = "";
    if (indent) {
        result += newLine;
        for (var i = 0; i < indent; i++) {
            result += "  ";
        }
    }
    result += diag.messageText;
    indent++;
    if (diag.next) {
        for (var _i = 0, _a = diag.next; _i < _a.length; _i++) {
            var kid = _a[_i];
            result += flattenDiagnosticMessageText(kid, newLine, indent);
        }
    }
    return result;
}
function displayPartsToString(displayParts) {
    if (displayParts) {
        return displayParts.map(function (displayPart) { return displayPart.text; }).join("");
    }
    return "";
}
//#endregion
var Adapter = /** @class */ (function () {
    function Adapter(_worker) {
        this._worker = _worker;
    }
    // protected _positionToOffset(model: monaco.editor.ITextModel, position: monaco.IPosition): number {
    // 	return model.getOffsetAt(position);
    // }
    // protected _offsetToPosition(model: monaco.editor.ITextModel, offset: number): monaco.IPosition {
    // 	return model.getPositionAt(offset);
    // }
    Adapter.prototype._textSpanToRange = function (model, span) {
        var p1 = model.getPositionAt(span.start);
        var p2 = model.getPositionAt(span.start + span.length);
        var startLineNumber = p1.lineNumber, startColumn = p1.column;
        var endLineNumber = p2.lineNumber, endColumn = p2.column;
        return { startLineNumber: startLineNumber, startColumn: startColumn, endLineNumber: endLineNumber, endColumn: endColumn };
    };
    return Adapter;
}());

// --- diagnostics --- ---
var DiagnosticCategory;
(function (DiagnosticCategory) {
    DiagnosticCategory[DiagnosticCategory["Warning"] = 0] = "Warning";
    DiagnosticCategory[DiagnosticCategory["Error"] = 1] = "Error";
    DiagnosticCategory[DiagnosticCategory["Suggestion"] = 2] = "Suggestion";
    DiagnosticCategory[DiagnosticCategory["Message"] = 3] = "Message";
})(DiagnosticCategory || (DiagnosticCategory = {}));
var DiagnosticsAdapter = /** @class */ (function (_super) {
    __extends(DiagnosticsAdapter, _super);
    function DiagnosticsAdapter(_defaults, _selector, worker) {
        var _this = _super.call(this, worker) || this;
        _this._defaults = _defaults;
        _this._selector = _selector;
        _this._disposables = [];
        _this._listener = Object.create(null);
        var onModelAdd = function (model) {
            if (model.getModeId() !== _selector) {
                return;
            }
            var handle;
            var changeSubscription = model.onDidChangeContent(function () {
                clearTimeout(handle);
                handle = setTimeout(function () { return _this._doValidate(model); }, 500);
            });
            _this._listener[model.uri.toString()] = {
                dispose: function () {
                    changeSubscription.dispose();
                    clearTimeout(handle);
                }
            };
            _this._doValidate(model);
        };
        var onModelRemoved = function (model) {
            monaco.editor.setModelMarkers(model, _this._selector, []);
            var key = model.uri.toString();
            if (_this._listener[key]) {
                _this._listener[key].dispose();
                delete _this._listener[key];
            }
        };
        _this._disposables.push(monaco.editor.onDidCreateModel(onModelAdd));
        _this._disposables.push(monaco.editor.onWillDisposeModel(onModelRemoved));
        _this._disposables.push(monaco.editor.onDidChangeModelLanguage(function (event) {
            onModelRemoved(event.model);
            onModelAdd(event.model);
        }));
        _this._disposables.push({
            dispose: function () {
                for (var _i = 0, _a = monaco.editor.getModels(); _i < _a.length; _i++) {
                    var model = _a[_i];
                    onModelRemoved(model);
                }
            }
        });
        var recomputeDiagostics = function () {
            // redo diagnostics when options change
            for (var _i = 0, _a = monaco.editor.getModels(); _i < _a.length; _i++) {
                var model = _a[_i];
                onModelRemoved(model);
                onModelAdd(model);
            }
        };
        _this._disposables.push(_this._defaults.onDidChange(recomputeDiagostics));
        _this._disposables.push(_this._defaults.onDidExtraLibsChange(recomputeDiagostics));
        monaco.editor.getModels().forEach(onModelAdd);
        return _this;
    }
    DiagnosticsAdapter.prototype.dispose = function () {
        this._disposables.forEach(function (d) { return d && d.dispose(); });
        this._disposables = [];
    };
    DiagnosticsAdapter.prototype._doValidate = function (model) {
        return __awaiter(this, void 0, void 0, function () {
            var worker, promises, _a, noSyntaxValidation, noSemanticValidation, noSuggestionDiagnostics, diagnostics, markers;
            var _this = this;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this._worker(model.uri)];
                    case 1:
                        worker = _b.sent();
                        if (model.isDisposed()) {
                            // model was disposed in the meantime
                            return [2 /*return*/];
                        }
                        promises = [];
                        _a = this._defaults.getDiagnosticsOptions(), noSyntaxValidation = _a.noSyntaxValidation, noSemanticValidation = _a.noSemanticValidation, noSuggestionDiagnostics = _a.noSuggestionDiagnostics;
                        if (!noSyntaxValidation) {
                            promises.push(worker.getSyntacticDiagnostics(model.uri.toString()));
                        }
                        if (!noSemanticValidation) {
                            promises.push(worker.getSemanticDiagnostics(model.uri.toString()));
                        }
                        if (!noSuggestionDiagnostics) {
                            promises.push(worker.getSuggestionDiagnostics(model.uri.toString()));
                        }
                        return [4 /*yield*/, Promise.all(promises)];
                    case 2:
                        diagnostics = _b.sent();
                        if (!diagnostics || model.isDisposed()) {
                            // model was disposed in the meantime
                            return [2 /*return*/];
                        }
                        markers = diagnostics
                            .reduce(function (p, c) { return c.concat(p); }, [])
                            .filter(function (d) { return (_this._defaults.getDiagnosticsOptions().diagnosticCodesToIgnore || []).indexOf(d.code) === -1; })
                            .map(function (d) { return _this._convertDiagnostics(model, d); });
                        monaco.editor.setModelMarkers(model, this._selector, markers);
                        return [2 /*return*/];
                }
            });
        });
    };
    DiagnosticsAdapter.prototype._convertDiagnostics = function (model, diag) {
        var diagStart = diag.start || 0;
        var diagLength = diag.length || 1;
        var _a = model.getPositionAt(diagStart), startLineNumber = _a.lineNumber, startColumn = _a.column;
        var _b = model.getPositionAt(diagStart + diagLength), endLineNumber = _b.lineNumber, endColumn = _b.column;
        return {
            severity: this._tsDiagnosticCategoryToMarkerSeverity(diag.category),
            startLineNumber: startLineNumber,
            startColumn: startColumn,
            endLineNumber: endLineNumber,
            endColumn: endColumn,
            message: flattenDiagnosticMessageText(diag.messageText, '\n'),
            code: diag.code.toString(),
            tags: diag.reportsUnnecessary ? [monaco.MarkerTag.Unnecessary] : [],
            relatedInformation: this._convertRelatedInformation(model, diag.relatedInformation),
        };
    };
    DiagnosticsAdapter.prototype._convertRelatedInformation = function (model, relatedInformation) {
        if (!relatedInformation) {
            return;
        }
        var result = [];
        relatedInformation.forEach(function (info) {
            var relatedResource = model;
            if (info.file) {
                var relatedResourceUri = monaco.Uri.parse(info.file.fileName);
                relatedResource = monaco.editor.getModel(relatedResourceUri);
            }
            if (!relatedResource) {
                return;
            }
            var infoStart = info.start || 0;
            var infoLength = info.length || 1;
            var _a = relatedResource.getPositionAt(infoStart), startLineNumber = _a.lineNumber, startColumn = _a.column;
            var _b = relatedResource.getPositionAt(infoStart + infoLength), endLineNumber = _b.lineNumber, endColumn = _b.column;
            result.push({
                resource: relatedResource.uri,
                startLineNumber: startLineNumber,
                startColumn: startColumn,
                endLineNumber: endLineNumber,
                endColumn: endColumn,
                message: flattenDiagnosticMessageText(info.messageText, '\n')
            });
        });
        return result;
    };
    DiagnosticsAdapter.prototype._tsDiagnosticCategoryToMarkerSeverity = function (category) {
        switch (category) {
            case DiagnosticCategory.Error: return monaco.MarkerSeverity.Error;
            case DiagnosticCategory.Message: return monaco.MarkerSeverity.Info;
            case DiagnosticCategory.Warning: return monaco.MarkerSeverity.Warning;
            case DiagnosticCategory.Suggestion: return monaco.MarkerSeverity.Hint;
        }
        return monaco.MarkerSeverity.Info;
    };
    return DiagnosticsAdapter;
}(Adapter));

var SuggestAdapter = /** @class */ (function (_super) {
    __extends(SuggestAdapter, _super);
    function SuggestAdapter() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(SuggestAdapter.prototype, "triggerCharacters", {
        get: function () {
            return ['.'];
        },
        enumerable: true,
        configurable: true
    });
    SuggestAdapter.prototype.provideCompletionItems = function (model, position, _context, token) {
        return __awaiter(this, void 0, void 0, function () {
            var wordInfo, wordRange, resource, offset, worker, info, suggestions;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        wordInfo = model.getWordUntilPosition(position);
                        wordRange = new Range(position.lineNumber, wordInfo.startColumn, position.lineNumber, wordInfo.endColumn);
                        resource = model.uri;
                        offset = model.getOffsetAt(position);
                        return [4 /*yield*/, this._worker(resource)];
                    case 1:
                        worker = _a.sent();
                        return [4 /*yield*/, worker.getCompletionsAtPosition(resource.toString(), offset)];
                    case 2:
                        info = _a.sent();
                        if (!info || model.isDisposed()) {
                            return [2 /*return*/];
                        }
                        suggestions = info.entries.map(function (entry) {
                            var range = wordRange;
                            if (entry.replacementSpan) {
                                var p1 = model.getPositionAt(entry.replacementSpan.start);
                                var p2 = model.getPositionAt(entry.replacementSpan.start + entry.replacementSpan.length);
                                range = new Range(p1.lineNumber, p1.column, p2.lineNumber, p2.column);
                            }
                            return {
                                uri: resource,
                                position: position,
                                range: range,
                                label: entry.name,
                                insertText: entry.name,
                                sortText: entry.sortText,
                                kind: SuggestAdapter.convertKind(entry.kind)
                            };
                        });
                        return [2 /*return*/, {
                                suggestions: suggestions
                            }];
                }
            });
        });
    };
    SuggestAdapter.prototype.resolveCompletionItem = function (model, _position, item, token) {
        return __awaiter(this, void 0, void 0, function () {
            var myItem, resource, position, offset, worker, details;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        myItem = item;
                        resource = myItem.uri;
                        position = myItem.position;
                        offset = model.getOffsetAt(position);
                        return [4 /*yield*/, this._worker(resource)];
                    case 1:
                        worker = _a.sent();
                        return [4 /*yield*/, worker.getCompletionEntryDetails(resource.toString(), offset, myItem.label)];
                    case 2:
                        details = _a.sent();
                        if (!details || model.isDisposed()) {
                            return [2 /*return*/, myItem];
                        }
                        return [2 /*return*/, {
                                uri: resource,
                                position: position,
                                label: details.name,
                                kind: SuggestAdapter.convertKind(details.kind),
                                detail: displayPartsToString(details.displayParts),
                                documentation: {
                                    value: displayPartsToString(details.documentation)
                                }
                            }];
                }
            });
        });
    };
    SuggestAdapter.convertKind = function (kind) {
        switch (kind) {
            case Kind.primitiveType:
            case Kind.keyword:
                return monaco.languages.CompletionItemKind.Keyword;
            case Kind.variable:
            case Kind.localVariable:
                return monaco.languages.CompletionItemKind.Variable;
            case Kind.memberVariable:
            case Kind.memberGetAccessor:
            case Kind.memberSetAccessor:
                return monaco.languages.CompletionItemKind.Field;
            case Kind.function:
            case Kind.memberFunction:
            case Kind.constructSignature:
            case Kind.callSignature:
            case Kind.indexSignature:
                return monaco.languages.CompletionItemKind.Function;
            case Kind.enum:
                return monaco.languages.CompletionItemKind.Enum;
            case Kind.module:
                return monaco.languages.CompletionItemKind.Module;
            case Kind.class:
                return monaco.languages.CompletionItemKind.Class;
            case Kind.interface:
                return monaco.languages.CompletionItemKind.Interface;
            case Kind.warning:
                return monaco.languages.CompletionItemKind.File;
        }
        return monaco.languages.CompletionItemKind.Property;
    };
    return SuggestAdapter;
}(Adapter));

var SignatureHelpAdapter = /** @class */ (function (_super) {
    __extends(SignatureHelpAdapter, _super);
    function SignatureHelpAdapter() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.signatureHelpTriggerCharacters = ['(', ','];
        return _this;
    }
    SignatureHelpAdapter.prototype.provideSignatureHelp = function (model, position, token) {
        return __awaiter(this, void 0, void 0, function () {
            var resource, offset, worker, info, ret;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        resource = model.uri;
                        offset = model.getOffsetAt(position);
                        return [4 /*yield*/, this._worker(resource)];
                    case 1:
                        worker = _a.sent();
                        return [4 /*yield*/, worker.getSignatureHelpItems(resource.toString(), offset)];
                    case 2:
                        info = _a.sent();
                        if (!info || model.isDisposed()) {
                            return [2 /*return*/];
                        }
                        ret = {
                            activeSignature: info.selectedItemIndex,
                            activeParameter: info.argumentIndex,
                            signatures: []
                        };
                        info.items.forEach(function (item) {
                            var signature = {
                                label: '',
                                parameters: []
                            };
                            signature.documentation = displayPartsToString(item.documentation);
                            signature.label += displayPartsToString(item.prefixDisplayParts);
                            item.parameters.forEach(function (p, i, a) {
                                var label = displayPartsToString(p.displayParts);
                                var parameter = {
                                    label: label,
                                    documentation: displayPartsToString(p.documentation)
                                };
                                signature.label += label;
                                signature.parameters.push(parameter);
                                if (i < a.length - 1) {
                                    signature.label += displayPartsToString(item.separatorDisplayParts);
                                }
                            });
                            signature.label += displayPartsToString(item.suffixDisplayParts);
                            ret.signatures.push(signature);
                        });
                        return [2 /*return*/, {
                                value: ret,
                                dispose: function () { }
                            }];
                }
            });
        });
    };
    return SignatureHelpAdapter;
}(Adapter));

// --- hover ------
var QuickInfoAdapter = /** @class */ (function (_super) {
    __extends(QuickInfoAdapter, _super);
    function QuickInfoAdapter() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    QuickInfoAdapter.prototype.provideHover = function (model, position, token) {
        return __awaiter(this, void 0, void 0, function () {
            var resource, offset, worker, info, documentation, tags, contents;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        resource = model.uri;
                        offset = model.getOffsetAt(position);
                        return [4 /*yield*/, this._worker(resource)];
                    case 1:
                        worker = _a.sent();
                        return [4 /*yield*/, worker.getQuickInfoAtPosition(resource.toString(), offset)];
                    case 2:
                        info = _a.sent();
                        if (!info || model.isDisposed()) {
                            return [2 /*return*/];
                        }
                        documentation = displayPartsToString(info.documentation);
                        tags = info.tags ? info.tags.map(function (tag) {
                            var label = "*@" + tag.name + "*";
                            if (!tag.text) {
                                return label;
                            }
                            return label + (tag.text.match(/\r\n|\n/g) ? ' \n' + tag.text : " - " + tag.text);
                        }).join('  \n\n') : '';
                        contents = displayPartsToString(info.displayParts);
                        return [2 /*return*/, {
                                range: this._textSpanToRange(model, info.textSpan),
                                contents: [{
                                        value: '```js\n' + contents + '\n```\n'
                                    }, {
                                        value: documentation + (tags ? '\n\n' + tags : '')
                                    }]
                            }];
                }
            });
        });
    };
    return QuickInfoAdapter;
}(Adapter));

// --- occurrences ------
var OccurrencesAdapter = /** @class */ (function (_super) {
    __extends(OccurrencesAdapter, _super);
    function OccurrencesAdapter() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    OccurrencesAdapter.prototype.provideDocumentHighlights = function (model, position, token) {
        return __awaiter(this, void 0, void 0, function () {
            var resource, offset, worker, entries;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        resource = model.uri;
                        offset = model.getOffsetAt(position);
                        return [4 /*yield*/, this._worker(resource)];
                    case 1:
                        worker = _a.sent();
                        return [4 /*yield*/, worker.getOccurrencesAtPosition(resource.toString(), offset)];
                    case 2:
                        entries = _a.sent();
                        if (!entries || model.isDisposed()) {
                            return [2 /*return*/];
                        }
                        return [2 /*return*/, entries.map(function (entry) {
                                return {
                                    range: _this._textSpanToRange(model, entry.textSpan),
                                    kind: entry.isWriteAccess ? monaco.languages.DocumentHighlightKind.Write : monaco.languages.DocumentHighlightKind.Text
                                };
                            })];
                }
            });
        });
    };
    return OccurrencesAdapter;
}(Adapter));

// --- definition ------
var DefinitionAdapter = /** @class */ (function (_super) {
    __extends(DefinitionAdapter, _super);
    function DefinitionAdapter() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DefinitionAdapter.prototype.provideDefinition = function (model, position, token) {
        return __awaiter(this, void 0, void 0, function () {
            var resource, offset, worker, entries, result, _i, entries_1, entry, uri, refModel;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        resource = model.uri;
                        offset = model.getOffsetAt(position);
                        return [4 /*yield*/, this._worker(resource)];
                    case 1:
                        worker = _a.sent();
                        return [4 /*yield*/, worker.getDefinitionAtPosition(resource.toString(), offset)];
                    case 2:
                        entries = _a.sent();
                        if (!entries || model.isDisposed()) {
                            return [2 /*return*/];
                        }
                        result = [];
                        for (_i = 0, entries_1 = entries; _i < entries_1.length; _i++) {
                            entry = entries_1[_i];
                            uri = Uri.parse(entry.fileName);
                            refModel = monaco.editor.getModel(uri);
                            if (refModel) {
                                result.push({
                                    uri: uri,
                                    range: this._textSpanToRange(refModel, entry.textSpan)
                                });
                            }
                        }
                        return [2 /*return*/, result];
                }
            });
        });
    };
    return DefinitionAdapter;
}(Adapter));

// --- references ------
var ReferenceAdapter = /** @class */ (function (_super) {
    __extends(ReferenceAdapter, _super);
    function ReferenceAdapter() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ReferenceAdapter.prototype.provideReferences = function (model, position, context, token) {
        return __awaiter(this, void 0, void 0, function () {
            var resource, offset, worker, entries, result, _i, entries_2, entry, uri, refModel;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        resource = model.uri;
                        offset = model.getOffsetAt(position);
                        return [4 /*yield*/, this._worker(resource)];
                    case 1:
                        worker = _a.sent();
                        return [4 /*yield*/, worker.getReferencesAtPosition(resource.toString(), offset)];
                    case 2:
                        entries = _a.sent();
                        if (!entries || model.isDisposed()) {
                            return [2 /*return*/];
                        }
                        result = [];
                        for (_i = 0, entries_2 = entries; _i < entries_2.length; _i++) {
                            entry = entries_2[_i];
                            uri = Uri.parse(entry.fileName);
                            refModel = monaco.editor.getModel(uri);
                            if (refModel) {
                                result.push({
                                    uri: uri,
                                    range: this._textSpanToRange(refModel, entry.textSpan)
                                });
                            }
                        }
                        return [2 /*return*/, result];
                }
            });
        });
    };
    return ReferenceAdapter;
}(Adapter));

// --- outline ------
var OutlineAdapter = /** @class */ (function (_super) {
    __extends(OutlineAdapter, _super);
    function OutlineAdapter() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    OutlineAdapter.prototype.provideDocumentSymbols = function (model, token) {
        return __awaiter(this, void 0, void 0, function () {
            var resource, worker, items, convert, result;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        resource = model.uri;
                        return [4 /*yield*/, this._worker(resource)];
                    case 1:
                        worker = _a.sent();
                        return [4 /*yield*/, worker.getNavigationBarItems(resource.toString())];
                    case 2:
                        items = _a.sent();
                        if (!items || model.isDisposed()) {
                            return [2 /*return*/];
                        }
                        convert = function (bucket, item, containerLabel) {
                            var result = {
                                name: item.text,
                                detail: '',
                                kind: (outlineTypeTable[item.kind] || monaco.languages.SymbolKind.Variable),
                                range: _this._textSpanToRange(model, item.spans[0]),
                                selectionRange: _this._textSpanToRange(model, item.spans[0]),
                                tags: [],
                                containerName: containerLabel
                            };
                            if (item.childItems && item.childItems.length > 0) {
                                for (var _i = 0, _a = item.childItems; _i < _a.length; _i++) {
                                    var child = _a[_i];
                                    convert(bucket, child, result.name);
                                }
                            }
                            bucket.push(result);
                        };
                        result = [];
                        items.forEach(function (item) { return convert(result, item); });
                        return [2 /*return*/, result];
                }
            });
        });
    };
    return OutlineAdapter;
}(Adapter));

var Kind = /** @class */ (function () {
    function Kind() {
    }
    Kind.unknown = '';
    Kind.keyword = 'keyword';
    Kind.script = 'script';
    Kind.module = 'module';
    Kind.class = 'class';
    Kind.interface = 'interface';
    Kind.type = 'type';
    Kind.enum = 'enum';
    Kind.variable = 'var';
    Kind.localVariable = 'local var';
    Kind.function = 'function';
    Kind.localFunction = 'local function';
    Kind.memberFunction = 'method';
    Kind.memberGetAccessor = 'getter';
    Kind.memberSetAccessor = 'setter';
    Kind.memberVariable = 'property';
    Kind.constructorImplementation = 'constructor';
    Kind.callSignature = 'call';
    Kind.indexSignature = 'index';
    Kind.constructSignature = 'construct';
    Kind.parameter = 'parameter';
    Kind.typeParameter = 'type parameter';
    Kind.primitiveType = 'primitive type';
    Kind.label = 'label';
    Kind.alias = 'alias';
    Kind.const = 'const';
    Kind.let = 'let';
    Kind.warning = 'warning';
    return Kind;
}());

var outlineTypeTable = Object.create(null);
outlineTypeTable[Kind.module] = monaco.languages.SymbolKind.Module;
outlineTypeTable[Kind.class] = monaco.languages.SymbolKind.Class;
outlineTypeTable[Kind.enum] = monaco.languages.SymbolKind.Enum;
outlineTypeTable[Kind.interface] = monaco.languages.SymbolKind.Interface;
outlineTypeTable[Kind.memberFunction] = monaco.languages.SymbolKind.Method;
outlineTypeTable[Kind.memberVariable] = monaco.languages.SymbolKind.Property;
outlineTypeTable[Kind.memberGetAccessor] = monaco.languages.SymbolKind.Property;
outlineTypeTable[Kind.memberSetAccessor] = monaco.languages.SymbolKind.Property;
outlineTypeTable[Kind.variable] = monaco.languages.SymbolKind.Variable;
outlineTypeTable[Kind.const] = monaco.languages.SymbolKind.Variable;
outlineTypeTable[Kind.localVariable] = monaco.languages.SymbolKind.Variable;
outlineTypeTable[Kind.variable] = monaco.languages.SymbolKind.Variable;
outlineTypeTable[Kind.function] = monaco.languages.SymbolKind.Function;
outlineTypeTable[Kind.localFunction] = monaco.languages.SymbolKind.Function;
// --- formatting ----
var FormatHelper = /** @class */ (function (_super) {
    __extends(FormatHelper, _super);
    function FormatHelper() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FormatHelper._convertOptions = function (options) {
        return {
            ConvertTabsToSpaces: options.insertSpaces,
            TabSize: options.tabSize,
            IndentSize: options.tabSize,
            IndentStyle: IndentStyle.Smart,
            NewLineCharacter: '\n',
            InsertSpaceAfterCommaDelimiter: true,
            InsertSpaceAfterSemicolonInForStatements: true,
            InsertSpaceBeforeAndAfterBinaryOperators: true,
            InsertSpaceAfterKeywordsInControlFlowStatements: true,
            InsertSpaceAfterFunctionKeywordForAnonymousFunctions: true,
            InsertSpaceAfterOpeningAndBeforeClosingNonemptyParenthesis: false,
            InsertSpaceAfterOpeningAndBeforeClosingNonemptyBrackets: false,
            InsertSpaceAfterOpeningAndBeforeClosingTemplateStringBraces: false,
            PlaceOpenBraceOnNewLineForControlBlocks: false,
            PlaceOpenBraceOnNewLineForFunctions: false
        };
    };
    FormatHelper.prototype._convertTextChanges = function (model, change) {
        return {
            text: change.newText,
            range: this._textSpanToRange(model, change.span)
        };
    };
    return FormatHelper;
}(Adapter));

var FormatAdapter = /** @class */ (function (_super) {
    __extends(FormatAdapter, _super);
    function FormatAdapter() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FormatAdapter.prototype.provideDocumentRangeFormattingEdits = function (model, range, options, token) {
        return __awaiter(this, void 0, void 0, function () {
            var resource, startOffset, endOffset, worker, edits;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        resource = model.uri;
                        startOffset = model.getOffsetAt({ lineNumber: range.startLineNumber, column: range.startColumn });
                        endOffset = model.getOffsetAt({ lineNumber: range.endLineNumber, column: range.endColumn });
                        return [4 /*yield*/, this._worker(resource)];
                    case 1:
                        worker = _a.sent();
                        return [4 /*yield*/, worker.getFormattingEditsForRange(resource.toString(), startOffset, endOffset, FormatHelper._convertOptions(options))];
                    case 2:
                        edits = _a.sent();
                        if (!edits || model.isDisposed()) {
                            return [2 /*return*/];
                        }
                        return [2 /*return*/, edits.map(function (edit) { return _this._convertTextChanges(model, edit); })];
                }
            });
        });
    };
    return FormatAdapter;
}(FormatHelper));

var FormatOnTypeAdapter = /** @class */ (function (_super) {
    __extends(FormatOnTypeAdapter, _super);
    function FormatOnTypeAdapter() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(FormatOnTypeAdapter.prototype, "autoFormatTriggerCharacters", {
        get: function () {
            return [';', '}', '\n'];
        },
        enumerable: true,
        configurable: true
    });
    FormatOnTypeAdapter.prototype.provideOnTypeFormattingEdits = function (model, position, ch, options, token) {
        return __awaiter(this, void 0, void 0, function () {
            var resource, offset, worker, edits;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        resource = model.uri;
                        offset = model.getOffsetAt(position);
                        return [4 /*yield*/, this._worker(resource)];
                    case 1:
                        worker = _a.sent();
                        return [4 /*yield*/, worker.getFormattingEditsAfterKeystroke(resource.toString(), offset, ch, FormatHelper._convertOptions(options))];
                    case 2:
                        edits = _a.sent();
                        if (!edits || model.isDisposed()) {
                            return [2 /*return*/];
                        }
                        return [2 /*return*/, edits.map(function (edit) { return _this._convertTextChanges(model, edit); })];
                }
            });
        });
    };
    return FormatOnTypeAdapter;
}(FormatHelper));

// --- code actions ------
var CodeActionAdaptor = /** @class */ (function (_super) {
    __extends(CodeActionAdaptor, _super);
    function CodeActionAdaptor() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CodeActionAdaptor.prototype.provideCodeActions = function (model, range, context, token) {
        return __awaiter(this, void 0, void 0, function () {
            var resource, start, end, formatOptions, errorCodes, worker, codeFixes, actions;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        resource = model.uri;
                        start = model.getOffsetAt({ lineNumber: range.startLineNumber, column: range.startColumn });
                        end = model.getOffsetAt({ lineNumber: range.endLineNumber, column: range.endColumn });
                        formatOptions = FormatHelper._convertOptions(model.getOptions());
                        errorCodes = context.markers.filter(function (m) { return m.code; }).map(function (m) { return m.code; }).map(Number);
                        return [4 /*yield*/, this._worker(resource)];
                    case 1:
                        worker = _a.sent();
                        return [4 /*yield*/, worker.getCodeFixesAtPosition(resource.toString(), start, end, errorCodes, formatOptions)];
                    case 2:
                        codeFixes = _a.sent();
                        if (!codeFixes || model.isDisposed()) {
                            return [2 /*return*/];
                        }
                        actions = codeFixes.filter(function (fix) {
                            // Removes any 'make a new file'-type code fix
                            return fix.changes.filter(function (change) { return change.isNewFile; }).length === 0;
                        }).map(function (fix) {
                            return _this._tsCodeFixActionToMonacoCodeAction(model, context, fix);
                        });
                        return [2 /*return*/, {
                                actions: actions,
                                dispose: function () { }
                            }];
                }
            });
        });
    };
    CodeActionAdaptor.prototype._tsCodeFixActionToMonacoCodeAction = function (model, context, codeFix) {
        var edits = [];
        for (var _i = 0, _a = codeFix.changes; _i < _a.length; _i++) {
            var change = _a[_i];
            for (var _b = 0, _c = change.textChanges; _b < _c.length; _b++) {
                var textChange = _c[_b];
                edits.push({
                    resource: model.uri,
                    edit: {
                        range: this._textSpanToRange(model, textChange.span),
                        text: textChange.newText
                    }
                });
            }
        }
        var action = {
            title: codeFix.description,
            edit: { edits: edits },
            diagnostics: context.markers,
            kind: "quickfix"
        };
        return action;
    };
    return CodeActionAdaptor;
}(FormatHelper));

// --- rename ----
var RenameAdapter = /** @class */ (function (_super) {
    __extends(RenameAdapter, _super);
    function RenameAdapter() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    RenameAdapter.prototype.provideRenameEdits = function (model, position, newName, token) {
        return __awaiter(this, void 0, void 0, function () {
            var resource, fileName, offset, worker, renameInfo, renameLocations, edits, _i, renameLocations_1, renameLocation;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        resource = model.uri;
                        fileName = resource.toString();
                        offset = model.getOffsetAt(position);
                        return [4 /*yield*/, this._worker(resource)];
                    case 1:
                        worker = _a.sent();
                        return [4 /*yield*/, worker.getRenameInfo(fileName, offset, { allowRenameOfImportPath: false })];
                    case 2:
                        renameInfo = _a.sent();
                        if (renameInfo.canRename === false) { // use explicit comparison so that the discriminated union gets resolved properly
                            return [2 /*return*/, {
                                    edits: [],
                                    rejectReason: renameInfo.localizedErrorMessage
                                }];
                        }
                        if (renameInfo.fileToRename !== undefined) {
                            throw new Error("Renaming files is not supported.");
                        }
                        return [4 /*yield*/, worker.findRenameLocations(fileName, offset, /*strings*/ false, /*comments*/ false, /*prefixAndSuffix*/ false)];
                    case 3:
                        renameLocations = _a.sent();
                        if (!renameLocations || model.isDisposed()) {
                            return [2 /*return*/];
                        }
                        edits = [];
                        for (_i = 0, renameLocations_1 = renameLocations; _i < renameLocations_1.length; _i++) {
                            renameLocation = renameLocations_1[_i];
                            edits.push({
                                resource: monaco.Uri.parse(renameLocation.fileName),
                                edit: {
                                    range: this._textSpanToRange(model, renameLocation.textSpan),
                                    text: newName
                                }
                            });
                        }
                        return [2 /*return*/, { edits: edits }];
                }
            });
        });
    };
    return RenameAdapter;
}(Adapter));



/***/ }),

/***/ "../node_modules/monaco-editor/esm/vs/language/typescript/tsMode.js":
/*!**************************************************************************!*\
  !*** ../node_modules/monaco-editor/esm/vs/language/typescript/tsMode.js ***!
  \**************************************************************************/
/*! exports provided: setupTypeScript, setupJavaScript, getJavaScriptWorker, getTypeScriptWorker */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setupTypeScript", function() { return setupTypeScript; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setupJavaScript", function() { return setupJavaScript; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getJavaScriptWorker", function() { return getJavaScriptWorker; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTypeScriptWorker", function() { return getTypeScriptWorker; });
/* harmony import */ var _workerManager_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./workerManager.js */ "../node_modules/monaco-editor/esm/vs/language/typescript/workerManager.js");
/* harmony import */ var _languageFeatures_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./languageFeatures.js */ "../node_modules/monaco-editor/esm/vs/language/typescript/languageFeatures.js");
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/



var javaScriptWorker;
var typeScriptWorker;
function setupTypeScript(defaults) {
    typeScriptWorker = setupMode(defaults, 'typescript');
}
function setupJavaScript(defaults) {
    javaScriptWorker = setupMode(defaults, 'javascript');
}
function getJavaScriptWorker() {
    return new Promise(function (resolve, reject) {
        if (!javaScriptWorker) {
            return reject("JavaScript not registered!");
        }
        resolve(javaScriptWorker);
    });
}
function getTypeScriptWorker() {
    return new Promise(function (resolve, reject) {
        if (!typeScriptWorker) {
            return reject("TypeScript not registered!");
        }
        resolve(typeScriptWorker);
    });
}
function setupMode(defaults, modeId) {
    var client = new _workerManager_js__WEBPACK_IMPORTED_MODULE_0__["WorkerManager"](modeId, defaults);
    var worker = function () {
        var uris = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            uris[_i] = arguments[_i];
        }
        return client.getLanguageServiceWorker.apply(client, uris);
    };
    monaco.languages.registerCompletionItemProvider(modeId, new _languageFeatures_js__WEBPACK_IMPORTED_MODULE_1__["SuggestAdapter"](worker));
    monaco.languages.registerSignatureHelpProvider(modeId, new _languageFeatures_js__WEBPACK_IMPORTED_MODULE_1__["SignatureHelpAdapter"](worker));
    monaco.languages.registerHoverProvider(modeId, new _languageFeatures_js__WEBPACK_IMPORTED_MODULE_1__["QuickInfoAdapter"](worker));
    monaco.languages.registerDocumentHighlightProvider(modeId, new _languageFeatures_js__WEBPACK_IMPORTED_MODULE_1__["OccurrencesAdapter"](worker));
    monaco.languages.registerDefinitionProvider(modeId, new _languageFeatures_js__WEBPACK_IMPORTED_MODULE_1__["DefinitionAdapter"](worker));
    monaco.languages.registerReferenceProvider(modeId, new _languageFeatures_js__WEBPACK_IMPORTED_MODULE_1__["ReferenceAdapter"](worker));
    monaco.languages.registerDocumentSymbolProvider(modeId, new _languageFeatures_js__WEBPACK_IMPORTED_MODULE_1__["OutlineAdapter"](worker));
    monaco.languages.registerDocumentRangeFormattingEditProvider(modeId, new _languageFeatures_js__WEBPACK_IMPORTED_MODULE_1__["FormatAdapter"](worker));
    monaco.languages.registerOnTypeFormattingEditProvider(modeId, new _languageFeatures_js__WEBPACK_IMPORTED_MODULE_1__["FormatOnTypeAdapter"](worker));
    monaco.languages.registerCodeActionProvider(modeId, new _languageFeatures_js__WEBPACK_IMPORTED_MODULE_1__["CodeActionAdaptor"](worker));
    monaco.languages.registerRenameProvider(modeId, new _languageFeatures_js__WEBPACK_IMPORTED_MODULE_1__["RenameAdapter"](worker));
    new _languageFeatures_js__WEBPACK_IMPORTED_MODULE_1__["DiagnosticsAdapter"](defaults, modeId, worker);
    return worker;
}


/***/ }),

/***/ "../node_modules/monaco-editor/esm/vs/language/typescript/workerManager.js":
/*!*********************************************************************************!*\
  !*** ../node_modules/monaco-editor/esm/vs/language/typescript/workerManager.js ***!
  \*********************************************************************************/
/*! exports provided: WorkerManager */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkerManager", function() { return WorkerManager; });
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var WorkerManager = /** @class */ (function () {
    function WorkerManager(modeId, defaults) {
        var _this = this;
        this._modeId = modeId;
        this._defaults = defaults;
        this._worker = null;
        this._client = null;
        this._configChangeListener = this._defaults.onDidChange(function () { return _this._stopWorker(); });
        this._updateExtraLibsToken = 0;
        this._extraLibsChangeListener = this._defaults.onDidExtraLibsChange(function () { return _this._updateExtraLibs(); });
    }
    WorkerManager.prototype._stopWorker = function () {
        if (this._worker) {
            this._worker.dispose();
            this._worker = null;
        }
        this._client = null;
    };
    WorkerManager.prototype.dispose = function () {
        this._configChangeListener.dispose();
        this._extraLibsChangeListener.dispose();
        this._stopWorker();
    };
    WorkerManager.prototype._updateExtraLibs = function () {
        return __awaiter(this, void 0, void 0, function () {
            var myToken, proxy;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this._worker) {
                            return [2 /*return*/];
                        }
                        myToken = ++this._updateExtraLibsToken;
                        return [4 /*yield*/, this._worker.getProxy()];
                    case 1:
                        proxy = _a.sent();
                        if (this._updateExtraLibsToken !== myToken) {
                            // avoid multiple calls
                            return [2 /*return*/];
                        }
                        proxy.updateExtraLibs(this._defaults.getExtraLibs());
                        return [2 /*return*/];
                }
            });
        });
    };
    WorkerManager.prototype._getClient = function () {
        var _this = this;
        if (!this._client) {
            this._worker = monaco.editor.createWebWorker({
                // module that exports the create() method and returns a `TypeScriptWorker` instance
                moduleId: 'vs/language/typescript/tsWorker',
                label: this._modeId,
                keepIdleModels: true,
                // passed in to the create() method
                createData: {
                    compilerOptions: this._defaults.getCompilerOptions(),
                    extraLibs: this._defaults.getExtraLibs()
                }
            });
            var p = this._worker.getProxy();
            if (this._defaults.getEagerModelSync()) {
                p = p.then(function (worker) {
                    if (_this._worker) {
                        return _this._worker.withSyncedResources(monaco.editor.getModels()
                            .filter(function (model) { return model.getModeId() === _this._modeId; })
                            .map(function (model) { return model.uri; }));
                    }
                    return worker;
                });
            }
            this._client = p;
        }
        return this._client;
    };
    WorkerManager.prototype.getLanguageServiceWorker = function () {
        var _this = this;
        var resources = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            resources[_i] = arguments[_i];
        }
        var _client;
        return this._getClient().then(function (client) {
            _client = client;
        }).then(function (_) {
            if (_this._worker) {
                return _this._worker.withSyncedResources(resources);
            }
        }).then(function (_) { return _client; });
    };
    return WorkerManager;
}());



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL21vbmFjby1lZGl0b3IvZXNtL3ZzL2xhbmd1YWdlL3R5cGVzY3JpcHQvbGFuZ3VhZ2VGZWF0dXJlcy5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL21vbmFjby1lZGl0b3IvZXNtL3ZzL2xhbmd1YWdlL3R5cGVzY3JpcHQvdHNNb2RlLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvbW9uYWNvLWVkaXRvci9lc20vdnMvbGFuZ3VhZ2UvdHlwZXNjcmlwdC93b3JrZXJNYW5hZ2VyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDYTtBQUNiLGlCQUFpQixTQUFJLElBQUksU0FBSTtBQUM3QjtBQUNBO0FBQ0EsY0FBYyxnQkFBZ0Isc0NBQXNDLGlCQUFpQixFQUFFO0FBQ3ZGLDZCQUE2Qix1REFBdUQ7QUFDcEY7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsc0JBQXNCO0FBQzdDO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsaUJBQWlCLFNBQUksSUFBSSxTQUFJO0FBQzdCLDJCQUEyQiwrREFBK0QsZ0JBQWdCLEVBQUUsRUFBRTtBQUM5RztBQUNBLG1DQUFtQyxNQUFNLDZCQUE2QixFQUFFLFlBQVksV0FBVyxFQUFFO0FBQ2pHLGtDQUFrQyxNQUFNLGlDQUFpQyxFQUFFLFlBQVksV0FBVyxFQUFFO0FBQ3BHLCtCQUErQixxRkFBcUY7QUFDcEg7QUFDQSxLQUFLO0FBQ0w7QUFDQSxtQkFBbUIsU0FBSSxJQUFJLFNBQUk7QUFDL0IsYUFBYSw2QkFBNkIsMEJBQTBCLGFBQWEsRUFBRSxxQkFBcUI7QUFDeEcsZ0JBQWdCLHFEQUFxRCxvRUFBb0UsYUFBYSxFQUFFO0FBQ3hKLHNCQUFzQixz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QTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QjtBQUNBO0FBQ0EsNkJBQTZCO0FBQzdCO0FBQ0EsYUFBYTtBQUNiLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCO0FBQzdCO0FBQ0EsYUFBYTtBQUNiLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ3lCO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkI7QUFDN0I7QUFDQTtBQUNB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LHlGQUF5RixpQ0FBaUMsRUFBRTtBQUM1SDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNEQUFzRCw0Q0FBNEMsRUFBRTtBQUNwRyxtREFBbUQsa0JBQWtCLEVBQUU7QUFDdkU7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLHVCQUF1QjtBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLFNBQVMscUJBQXFCLGdCQUFnQixFQUFFO0FBQ2hEO0FBQ0E7QUFDQSxDQUFDO0FBQ3dCIiwiZmlsZSI6ImpzLzQuYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICogIENvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG4gKiAgTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLiBTZWUgTGljZW5zZS50eHQgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cclxuICotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXHJcbid1c2Ugc3RyaWN0JztcclxudmFyIF9fZXh0ZW5kcyA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCAoZnVuY3Rpb24gKCkge1xyXG4gICAgdmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbiAoZCwgYikge1xyXG4gICAgICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcclxuICAgICAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxyXG4gICAgICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChiLmhhc093blByb3BlcnR5KHApKSBkW3BdID0gYltwXTsgfTtcclxuICAgICAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxuICAgIH07XHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKGQsIGIpIHtcclxuICAgICAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG4gICAgICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxyXG4gICAgICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcclxuICAgIH07XHJcbn0pKCk7XHJcbnZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xyXG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XHJcbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcclxuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cclxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XHJcbiAgICB9KTtcclxufTtcclxudmFyIF9fZ2VuZXJhdG9yID0gKHRoaXMgJiYgdGhpcy5fX2dlbmVyYXRvcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIGJvZHkpIHtcclxuICAgIHZhciBfID0geyBsYWJlbDogMCwgc2VudDogZnVuY3Rpb24oKSB7IGlmICh0WzBdICYgMSkgdGhyb3cgdFsxXTsgcmV0dXJuIHRbMV07IH0sIHRyeXM6IFtdLCBvcHM6IFtdIH0sIGYsIHksIHQsIGc7XHJcbiAgICByZXR1cm4gZyA9IHsgbmV4dDogdmVyYigwKSwgXCJ0aHJvd1wiOiB2ZXJiKDEpLCBcInJldHVyblwiOiB2ZXJiKDIpIH0sIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiAoZ1tTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24oKSB7IHJldHVybiB0aGlzOyB9KSwgZztcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyByZXR1cm4gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIHN0ZXAoW24sIHZdKTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gc3RlcChvcCkge1xyXG4gICAgICAgIGlmIChmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiR2VuZXJhdG9yIGlzIGFscmVhZHkgZXhlY3V0aW5nLlwiKTtcclxuICAgICAgICB3aGlsZSAoXykgdHJ5IHtcclxuICAgICAgICAgICAgaWYgKGYgPSAxLCB5ICYmICh0ID0gb3BbMF0gJiAyID8geVtcInJldHVyblwiXSA6IG9wWzBdID8geVtcInRocm93XCJdIHx8ICgodCA9IHlbXCJyZXR1cm5cIl0pICYmIHQuY2FsbCh5KSwgMCkgOiB5Lm5leHQpICYmICEodCA9IHQuY2FsbCh5LCBvcFsxXSkpLmRvbmUpIHJldHVybiB0O1xyXG4gICAgICAgICAgICBpZiAoeSA9IDAsIHQpIG9wID0gW29wWzBdICYgMiwgdC52YWx1ZV07XHJcbiAgICAgICAgICAgIHN3aXRjaCAob3BbMF0pIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgMDogY2FzZSAxOiB0ID0gb3A7IGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA0OiBfLmxhYmVsKys7IHJldHVybiB7IHZhbHVlOiBvcFsxXSwgZG9uZTogZmFsc2UgfTtcclxuICAgICAgICAgICAgICAgIGNhc2UgNTogXy5sYWJlbCsrOyB5ID0gb3BbMV07IG9wID0gWzBdOyBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIGNhc2UgNzogb3AgPSBfLm9wcy5wb3AoKTsgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEodCA9IF8udHJ5cywgdCA9IHQubGVuZ3RoID4gMCAmJiB0W3QubGVuZ3RoIC0gMV0pICYmIChvcFswXSA9PT0gNiB8fCBvcFswXSA9PT0gMikpIHsgXyA9IDA7IGNvbnRpbnVlOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSAzICYmICghdCB8fCAob3BbMV0gPiB0WzBdICYmIG9wWzFdIDwgdFszXSkpKSB7IF8ubGFiZWwgPSBvcFsxXTsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDYgJiYgXy5sYWJlbCA8IHRbMV0pIHsgXy5sYWJlbCA9IHRbMV07IHQgPSBvcDsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAodCAmJiBfLmxhYmVsIDwgdFsyXSkgeyBfLmxhYmVsID0gdFsyXTsgXy5vcHMucHVzaChvcCk7IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRbMl0pIF8ub3BzLnBvcCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIF8udHJ5cy5wb3AoKTsgY29udGludWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgb3AgPSBib2R5LmNhbGwodGhpc0FyZywgXyk7XHJcbiAgICAgICAgfSBjYXRjaCAoZSkgeyBvcCA9IFs2LCBlXTsgeSA9IDA7IH0gZmluYWxseSB7IGYgPSB0ID0gMDsgfVxyXG4gICAgICAgIGlmIChvcFswXSAmIDUpIHRocm93IG9wWzFdOyByZXR1cm4geyB2YWx1ZTogb3BbMF0gPyBvcFsxXSA6IHZvaWQgMCwgZG9uZTogdHJ1ZSB9O1xyXG4gICAgfVxyXG59O1xyXG52YXIgVXJpID0gbW9uYWNvLlVyaTtcclxudmFyIFJhbmdlID0gbW9uYWNvLlJhbmdlO1xyXG4vLyNyZWdpb24gdXRpbHMgY29waWVkIGZyb20gdHlwZXNjcmlwdCB0byBwcmV2ZW50IGxvYWRpbmcgdGhlIGVudGlyZSB0eXBlc2NyaXB0U2VydmljZXMgLS0tXHJcbnZhciBJbmRlbnRTdHlsZTtcclxuKGZ1bmN0aW9uIChJbmRlbnRTdHlsZSkge1xyXG4gICAgSW5kZW50U3R5bGVbSW5kZW50U3R5bGVbXCJOb25lXCJdID0gMF0gPSBcIk5vbmVcIjtcclxuICAgIEluZGVudFN0eWxlW0luZGVudFN0eWxlW1wiQmxvY2tcIl0gPSAxXSA9IFwiQmxvY2tcIjtcclxuICAgIEluZGVudFN0eWxlW0luZGVudFN0eWxlW1wiU21hcnRcIl0gPSAyXSA9IFwiU21hcnRcIjtcclxufSkoSW5kZW50U3R5bGUgfHwgKEluZGVudFN0eWxlID0ge30pKTtcclxuZXhwb3J0IGZ1bmN0aW9uIGZsYXR0ZW5EaWFnbm9zdGljTWVzc2FnZVRleHQoZGlhZywgbmV3TGluZSwgaW5kZW50KSB7XHJcbiAgICBpZiAoaW5kZW50ID09PSB2b2lkIDApIHsgaW5kZW50ID0gMDsgfVxyXG4gICAgaWYgKHR5cGVvZiBkaWFnID09PSBcInN0cmluZ1wiKSB7XHJcbiAgICAgICAgcmV0dXJuIGRpYWc7XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmIChkaWFnID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICByZXR1cm4gXCJcIjtcclxuICAgIH1cclxuICAgIHZhciByZXN1bHQgPSBcIlwiO1xyXG4gICAgaWYgKGluZGVudCkge1xyXG4gICAgICAgIHJlc3VsdCArPSBuZXdMaW5lO1xyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgaW5kZW50OyBpKyspIHtcclxuICAgICAgICAgICAgcmVzdWx0ICs9IFwiICBcIjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXN1bHQgKz0gZGlhZy5tZXNzYWdlVGV4dDtcclxuICAgIGluZGVudCsrO1xyXG4gICAgaWYgKGRpYWcubmV4dCkge1xyXG4gICAgICAgIGZvciAodmFyIF9pID0gMCwgX2EgPSBkaWFnLm5leHQ7IF9pIDwgX2EubGVuZ3RoOyBfaSsrKSB7XHJcbiAgICAgICAgICAgIHZhciBraWQgPSBfYVtfaV07XHJcbiAgICAgICAgICAgIHJlc3VsdCArPSBmbGF0dGVuRGlhZ25vc3RpY01lc3NhZ2VUZXh0KGtpZCwgbmV3TGluZSwgaW5kZW50KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG59XHJcbmZ1bmN0aW9uIGRpc3BsYXlQYXJ0c1RvU3RyaW5nKGRpc3BsYXlQYXJ0cykge1xyXG4gICAgaWYgKGRpc3BsYXlQYXJ0cykge1xyXG4gICAgICAgIHJldHVybiBkaXNwbGF5UGFydHMubWFwKGZ1bmN0aW9uIChkaXNwbGF5UGFydCkgeyByZXR1cm4gZGlzcGxheVBhcnQudGV4dDsgfSkuam9pbihcIlwiKTtcclxuICAgIH1cclxuICAgIHJldHVybiBcIlwiO1xyXG59XHJcbi8vI2VuZHJlZ2lvblxyXG52YXIgQWRhcHRlciA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIEFkYXB0ZXIoX3dvcmtlcikge1xyXG4gICAgICAgIHRoaXMuX3dvcmtlciA9IF93b3JrZXI7XHJcbiAgICB9XHJcbiAgICAvLyBwcm90ZWN0ZWQgX3Bvc2l0aW9uVG9PZmZzZXQobW9kZWw6IG1vbmFjby5lZGl0b3IuSVRleHRNb2RlbCwgcG9zaXRpb246IG1vbmFjby5JUG9zaXRpb24pOiBudW1iZXIge1xyXG4gICAgLy8gXHRyZXR1cm4gbW9kZWwuZ2V0T2Zmc2V0QXQocG9zaXRpb24pO1xyXG4gICAgLy8gfVxyXG4gICAgLy8gcHJvdGVjdGVkIF9vZmZzZXRUb1Bvc2l0aW9uKG1vZGVsOiBtb25hY28uZWRpdG9yLklUZXh0TW9kZWwsIG9mZnNldDogbnVtYmVyKTogbW9uYWNvLklQb3NpdGlvbiB7XHJcbiAgICAvLyBcdHJldHVybiBtb2RlbC5nZXRQb3NpdGlvbkF0KG9mZnNldCk7XHJcbiAgICAvLyB9XHJcbiAgICBBZGFwdGVyLnByb3RvdHlwZS5fdGV4dFNwYW5Ub1JhbmdlID0gZnVuY3Rpb24gKG1vZGVsLCBzcGFuKSB7XHJcbiAgICAgICAgdmFyIHAxID0gbW9kZWwuZ2V0UG9zaXRpb25BdChzcGFuLnN0YXJ0KTtcclxuICAgICAgICB2YXIgcDIgPSBtb2RlbC5nZXRQb3NpdGlvbkF0KHNwYW4uc3RhcnQgKyBzcGFuLmxlbmd0aCk7XHJcbiAgICAgICAgdmFyIHN0YXJ0TGluZU51bWJlciA9IHAxLmxpbmVOdW1iZXIsIHN0YXJ0Q29sdW1uID0gcDEuY29sdW1uO1xyXG4gICAgICAgIHZhciBlbmRMaW5lTnVtYmVyID0gcDIubGluZU51bWJlciwgZW5kQ29sdW1uID0gcDIuY29sdW1uO1xyXG4gICAgICAgIHJldHVybiB7IHN0YXJ0TGluZU51bWJlcjogc3RhcnRMaW5lTnVtYmVyLCBzdGFydENvbHVtbjogc3RhcnRDb2x1bW4sIGVuZExpbmVOdW1iZXI6IGVuZExpbmVOdW1iZXIsIGVuZENvbHVtbjogZW5kQ29sdW1uIH07XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIEFkYXB0ZXI7XHJcbn0oKSk7XHJcbmV4cG9ydCB7IEFkYXB0ZXIgfTtcclxuLy8gLS0tIGRpYWdub3N0aWNzIC0tLSAtLS1cclxudmFyIERpYWdub3N0aWNDYXRlZ29yeTtcclxuKGZ1bmN0aW9uIChEaWFnbm9zdGljQ2F0ZWdvcnkpIHtcclxuICAgIERpYWdub3N0aWNDYXRlZ29yeVtEaWFnbm9zdGljQ2F0ZWdvcnlbXCJXYXJuaW5nXCJdID0gMF0gPSBcIldhcm5pbmdcIjtcclxuICAgIERpYWdub3N0aWNDYXRlZ29yeVtEaWFnbm9zdGljQ2F0ZWdvcnlbXCJFcnJvclwiXSA9IDFdID0gXCJFcnJvclwiO1xyXG4gICAgRGlhZ25vc3RpY0NhdGVnb3J5W0RpYWdub3N0aWNDYXRlZ29yeVtcIlN1Z2dlc3Rpb25cIl0gPSAyXSA9IFwiU3VnZ2VzdGlvblwiO1xyXG4gICAgRGlhZ25vc3RpY0NhdGVnb3J5W0RpYWdub3N0aWNDYXRlZ29yeVtcIk1lc3NhZ2VcIl0gPSAzXSA9IFwiTWVzc2FnZVwiO1xyXG59KShEaWFnbm9zdGljQ2F0ZWdvcnkgfHwgKERpYWdub3N0aWNDYXRlZ29yeSA9IHt9KSk7XHJcbnZhciBEaWFnbm9zdGljc0FkYXB0ZXIgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XHJcbiAgICBfX2V4dGVuZHMoRGlhZ25vc3RpY3NBZGFwdGVyLCBfc3VwZXIpO1xyXG4gICAgZnVuY3Rpb24gRGlhZ25vc3RpY3NBZGFwdGVyKF9kZWZhdWx0cywgX3NlbGVjdG9yLCB3b3JrZXIpIHtcclxuICAgICAgICB2YXIgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzLCB3b3JrZXIpIHx8IHRoaXM7XHJcbiAgICAgICAgX3RoaXMuX2RlZmF1bHRzID0gX2RlZmF1bHRzO1xyXG4gICAgICAgIF90aGlzLl9zZWxlY3RvciA9IF9zZWxlY3RvcjtcclxuICAgICAgICBfdGhpcy5fZGlzcG9zYWJsZXMgPSBbXTtcclxuICAgICAgICBfdGhpcy5fbGlzdGVuZXIgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xyXG4gICAgICAgIHZhciBvbk1vZGVsQWRkID0gZnVuY3Rpb24gKG1vZGVsKSB7XHJcbiAgICAgICAgICAgIGlmIChtb2RlbC5nZXRNb2RlSWQoKSAhPT0gX3NlbGVjdG9yKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdmFyIGhhbmRsZTtcclxuICAgICAgICAgICAgdmFyIGNoYW5nZVN1YnNjcmlwdGlvbiA9IG1vZGVsLm9uRGlkQ2hhbmdlQ29udGVudChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICBjbGVhclRpbWVvdXQoaGFuZGxlKTtcclxuICAgICAgICAgICAgICAgIGhhbmRsZSA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkgeyByZXR1cm4gX3RoaXMuX2RvVmFsaWRhdGUobW9kZWwpOyB9LCA1MDApO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgX3RoaXMuX2xpc3RlbmVyW21vZGVsLnVyaS50b1N0cmluZygpXSA9IHtcclxuICAgICAgICAgICAgICAgIGRpc3Bvc2U6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICBjaGFuZ2VTdWJzY3JpcHRpb24uZGlzcG9zZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNsZWFyVGltZW91dChoYW5kbGUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICBfdGhpcy5fZG9WYWxpZGF0ZShtb2RlbCk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICB2YXIgb25Nb2RlbFJlbW92ZWQgPSBmdW5jdGlvbiAobW9kZWwpIHtcclxuICAgICAgICAgICAgbW9uYWNvLmVkaXRvci5zZXRNb2RlbE1hcmtlcnMobW9kZWwsIF90aGlzLl9zZWxlY3RvciwgW10pO1xyXG4gICAgICAgICAgICB2YXIga2V5ID0gbW9kZWwudXJpLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgICAgIGlmIChfdGhpcy5fbGlzdGVuZXJba2V5XSkge1xyXG4gICAgICAgICAgICAgICAgX3RoaXMuX2xpc3RlbmVyW2tleV0uZGlzcG9zZSgpO1xyXG4gICAgICAgICAgICAgICAgZGVsZXRlIF90aGlzLl9saXN0ZW5lcltrZXldO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICBfdGhpcy5fZGlzcG9zYWJsZXMucHVzaChtb25hY28uZWRpdG9yLm9uRGlkQ3JlYXRlTW9kZWwob25Nb2RlbEFkZCkpO1xyXG4gICAgICAgIF90aGlzLl9kaXNwb3NhYmxlcy5wdXNoKG1vbmFjby5lZGl0b3Iub25XaWxsRGlzcG9zZU1vZGVsKG9uTW9kZWxSZW1vdmVkKSk7XHJcbiAgICAgICAgX3RoaXMuX2Rpc3Bvc2FibGVzLnB1c2gobW9uYWNvLmVkaXRvci5vbkRpZENoYW5nZU1vZGVsTGFuZ3VhZ2UoZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgICAgICAgICAgIG9uTW9kZWxSZW1vdmVkKGV2ZW50Lm1vZGVsKTtcclxuICAgICAgICAgICAgb25Nb2RlbEFkZChldmVudC5tb2RlbCk7XHJcbiAgICAgICAgfSkpO1xyXG4gICAgICAgIF90aGlzLl9kaXNwb3NhYmxlcy5wdXNoKHtcclxuICAgICAgICAgICAgZGlzcG9zZTogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgZm9yICh2YXIgX2kgPSAwLCBfYSA9IG1vbmFjby5lZGl0b3IuZ2V0TW9kZWxzKCk7IF9pIDwgX2EubGVuZ3RoOyBfaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIG1vZGVsID0gX2FbX2ldO1xyXG4gICAgICAgICAgICAgICAgICAgIG9uTW9kZWxSZW1vdmVkKG1vZGVsKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHZhciByZWNvbXB1dGVEaWFnb3N0aWNzID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAvLyByZWRvIGRpYWdub3N0aWNzIHdoZW4gb3B0aW9ucyBjaGFuZ2VcclxuICAgICAgICAgICAgZm9yICh2YXIgX2kgPSAwLCBfYSA9IG1vbmFjby5lZGl0b3IuZ2V0TW9kZWxzKCk7IF9pIDwgX2EubGVuZ3RoOyBfaSsrKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgbW9kZWwgPSBfYVtfaV07XHJcbiAgICAgICAgICAgICAgICBvbk1vZGVsUmVtb3ZlZChtb2RlbCk7XHJcbiAgICAgICAgICAgICAgICBvbk1vZGVsQWRkKG1vZGVsKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgX3RoaXMuX2Rpc3Bvc2FibGVzLnB1c2goX3RoaXMuX2RlZmF1bHRzLm9uRGlkQ2hhbmdlKHJlY29tcHV0ZURpYWdvc3RpY3MpKTtcclxuICAgICAgICBfdGhpcy5fZGlzcG9zYWJsZXMucHVzaChfdGhpcy5fZGVmYXVsdHMub25EaWRFeHRyYUxpYnNDaGFuZ2UocmVjb21wdXRlRGlhZ29zdGljcykpO1xyXG4gICAgICAgIG1vbmFjby5lZGl0b3IuZ2V0TW9kZWxzKCkuZm9yRWFjaChvbk1vZGVsQWRkKTtcclxuICAgICAgICByZXR1cm4gX3RoaXM7XHJcbiAgICB9XHJcbiAgICBEaWFnbm9zdGljc0FkYXB0ZXIucHJvdG90eXBlLmRpc3Bvc2UgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy5fZGlzcG9zYWJsZXMuZm9yRWFjaChmdW5jdGlvbiAoZCkgeyByZXR1cm4gZCAmJiBkLmRpc3Bvc2UoKTsgfSk7XHJcbiAgICAgICAgdGhpcy5fZGlzcG9zYWJsZXMgPSBbXTtcclxuICAgIH07XHJcbiAgICBEaWFnbm9zdGljc0FkYXB0ZXIucHJvdG90eXBlLl9kb1ZhbGlkYXRlID0gZnVuY3Rpb24gKG1vZGVsKSB7XHJcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB2YXIgd29ya2VyLCBwcm9taXNlcywgX2EsIG5vU3ludGF4VmFsaWRhdGlvbiwgbm9TZW1hbnRpY1ZhbGlkYXRpb24sIG5vU3VnZ2VzdGlvbkRpYWdub3N0aWNzLCBkaWFnbm9zdGljcywgbWFya2VycztcclxuICAgICAgICAgICAgdmFyIF90aGlzID0gdGhpcztcclxuICAgICAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYikge1xyXG4gICAgICAgICAgICAgICAgc3dpdGNoIChfYi5sYWJlbCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMDogcmV0dXJuIFs0IC8qeWllbGQqLywgdGhpcy5fd29ya2VyKG1vZGVsLnVyaSldO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTpcclxuICAgICAgICAgICAgICAgICAgICAgICAgd29ya2VyID0gX2Iuc2VudCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobW9kZWwuaXNEaXNwb3NlZCgpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBtb2RlbCB3YXMgZGlzcG9zZWQgaW4gdGhlIG1lYW50aW1lXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qL107XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgcHJvbWlzZXMgPSBbXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgX2EgPSB0aGlzLl9kZWZhdWx0cy5nZXREaWFnbm9zdGljc09wdGlvbnMoKSwgbm9TeW50YXhWYWxpZGF0aW9uID0gX2Eubm9TeW50YXhWYWxpZGF0aW9uLCBub1NlbWFudGljVmFsaWRhdGlvbiA9IF9hLm5vU2VtYW50aWNWYWxpZGF0aW9uLCBub1N1Z2dlc3Rpb25EaWFnbm9zdGljcyA9IF9hLm5vU3VnZ2VzdGlvbkRpYWdub3N0aWNzO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIW5vU3ludGF4VmFsaWRhdGlvbikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvbWlzZXMucHVzaCh3b3JrZXIuZ2V0U3ludGFjdGljRGlhZ25vc3RpY3MobW9kZWwudXJpLnRvU3RyaW5nKCkpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIW5vU2VtYW50aWNWYWxpZGF0aW9uKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9taXNlcy5wdXNoKHdvcmtlci5nZXRTZW1hbnRpY0RpYWdub3N0aWNzKG1vZGVsLnVyaS50b1N0cmluZygpKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFub1N1Z2dlc3Rpb25EaWFnbm9zdGljcykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvbWlzZXMucHVzaCh3b3JrZXIuZ2V0U3VnZ2VzdGlvbkRpYWdub3N0aWNzKG1vZGVsLnVyaS50b1N0cmluZygpKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgUHJvbWlzZS5hbGwocHJvbWlzZXMpXTtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpYWdub3N0aWNzID0gX2Iuc2VudCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWRpYWdub3N0aWNzIHx8IG1vZGVsLmlzRGlzcG9zZWQoKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gbW9kZWwgd2FzIGRpc3Bvc2VkIGluIHRoZSBtZWFudGltZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi9dO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmtlcnMgPSBkaWFnbm9zdGljc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLnJlZHVjZShmdW5jdGlvbiAocCwgYykgeyByZXR1cm4gYy5jb25jYXQocCk7IH0sIFtdKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmZpbHRlcihmdW5jdGlvbiAoZCkgeyByZXR1cm4gKF90aGlzLl9kZWZhdWx0cy5nZXREaWFnbm9zdGljc09wdGlvbnMoKS5kaWFnbm9zdGljQ29kZXNUb0lnbm9yZSB8fCBbXSkuaW5kZXhPZihkLmNvZGUpID09PSAtMTsgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5tYXAoZnVuY3Rpb24gKGQpIHsgcmV0dXJuIF90aGlzLl9jb252ZXJ0RGlhZ25vc3RpY3MobW9kZWwsIGQpOyB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbW9uYWNvLmVkaXRvci5zZXRNb2RlbE1hcmtlcnMobW9kZWwsIHRoaXMuX3NlbGVjdG9yLCBtYXJrZXJzKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi9dO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcbiAgICBEaWFnbm9zdGljc0FkYXB0ZXIucHJvdG90eXBlLl9jb252ZXJ0RGlhZ25vc3RpY3MgPSBmdW5jdGlvbiAobW9kZWwsIGRpYWcpIHtcclxuICAgICAgICB2YXIgZGlhZ1N0YXJ0ID0gZGlhZy5zdGFydCB8fCAwO1xyXG4gICAgICAgIHZhciBkaWFnTGVuZ3RoID0gZGlhZy5sZW5ndGggfHwgMTtcclxuICAgICAgICB2YXIgX2EgPSBtb2RlbC5nZXRQb3NpdGlvbkF0KGRpYWdTdGFydCksIHN0YXJ0TGluZU51bWJlciA9IF9hLmxpbmVOdW1iZXIsIHN0YXJ0Q29sdW1uID0gX2EuY29sdW1uO1xyXG4gICAgICAgIHZhciBfYiA9IG1vZGVsLmdldFBvc2l0aW9uQXQoZGlhZ1N0YXJ0ICsgZGlhZ0xlbmd0aCksIGVuZExpbmVOdW1iZXIgPSBfYi5saW5lTnVtYmVyLCBlbmRDb2x1bW4gPSBfYi5jb2x1bW47XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgc2V2ZXJpdHk6IHRoaXMuX3RzRGlhZ25vc3RpY0NhdGVnb3J5VG9NYXJrZXJTZXZlcml0eShkaWFnLmNhdGVnb3J5KSxcclxuICAgICAgICAgICAgc3RhcnRMaW5lTnVtYmVyOiBzdGFydExpbmVOdW1iZXIsXHJcbiAgICAgICAgICAgIHN0YXJ0Q29sdW1uOiBzdGFydENvbHVtbixcclxuICAgICAgICAgICAgZW5kTGluZU51bWJlcjogZW5kTGluZU51bWJlcixcclxuICAgICAgICAgICAgZW5kQ29sdW1uOiBlbmRDb2x1bW4sXHJcbiAgICAgICAgICAgIG1lc3NhZ2U6IGZsYXR0ZW5EaWFnbm9zdGljTWVzc2FnZVRleHQoZGlhZy5tZXNzYWdlVGV4dCwgJ1xcbicpLFxyXG4gICAgICAgICAgICBjb2RlOiBkaWFnLmNvZGUudG9TdHJpbmcoKSxcclxuICAgICAgICAgICAgdGFnczogZGlhZy5yZXBvcnRzVW5uZWNlc3NhcnkgPyBbbW9uYWNvLk1hcmtlclRhZy5Vbm5lY2Vzc2FyeV0gOiBbXSxcclxuICAgICAgICAgICAgcmVsYXRlZEluZm9ybWF0aW9uOiB0aGlzLl9jb252ZXJ0UmVsYXRlZEluZm9ybWF0aW9uKG1vZGVsLCBkaWFnLnJlbGF0ZWRJbmZvcm1hdGlvbiksXHJcbiAgICAgICAgfTtcclxuICAgIH07XHJcbiAgICBEaWFnbm9zdGljc0FkYXB0ZXIucHJvdG90eXBlLl9jb252ZXJ0UmVsYXRlZEluZm9ybWF0aW9uID0gZnVuY3Rpb24gKG1vZGVsLCByZWxhdGVkSW5mb3JtYXRpb24pIHtcclxuICAgICAgICBpZiAoIXJlbGF0ZWRJbmZvcm1hdGlvbikge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciByZXN1bHQgPSBbXTtcclxuICAgICAgICByZWxhdGVkSW5mb3JtYXRpb24uZm9yRWFjaChmdW5jdGlvbiAoaW5mbykge1xyXG4gICAgICAgICAgICB2YXIgcmVsYXRlZFJlc291cmNlID0gbW9kZWw7XHJcbiAgICAgICAgICAgIGlmIChpbmZvLmZpbGUpIHtcclxuICAgICAgICAgICAgICAgIHZhciByZWxhdGVkUmVzb3VyY2VVcmkgPSBtb25hY28uVXJpLnBhcnNlKGluZm8uZmlsZS5maWxlTmFtZSk7XHJcbiAgICAgICAgICAgICAgICByZWxhdGVkUmVzb3VyY2UgPSBtb25hY28uZWRpdG9yLmdldE1vZGVsKHJlbGF0ZWRSZXNvdXJjZVVyaSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKCFyZWxhdGVkUmVzb3VyY2UpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB2YXIgaW5mb1N0YXJ0ID0gaW5mby5zdGFydCB8fCAwO1xyXG4gICAgICAgICAgICB2YXIgaW5mb0xlbmd0aCA9IGluZm8ubGVuZ3RoIHx8IDE7XHJcbiAgICAgICAgICAgIHZhciBfYSA9IHJlbGF0ZWRSZXNvdXJjZS5nZXRQb3NpdGlvbkF0KGluZm9TdGFydCksIHN0YXJ0TGluZU51bWJlciA9IF9hLmxpbmVOdW1iZXIsIHN0YXJ0Q29sdW1uID0gX2EuY29sdW1uO1xyXG4gICAgICAgICAgICB2YXIgX2IgPSByZWxhdGVkUmVzb3VyY2UuZ2V0UG9zaXRpb25BdChpbmZvU3RhcnQgKyBpbmZvTGVuZ3RoKSwgZW5kTGluZU51bWJlciA9IF9iLmxpbmVOdW1iZXIsIGVuZENvbHVtbiA9IF9iLmNvbHVtbjtcclxuICAgICAgICAgICAgcmVzdWx0LnB1c2goe1xyXG4gICAgICAgICAgICAgICAgcmVzb3VyY2U6IHJlbGF0ZWRSZXNvdXJjZS51cmksXHJcbiAgICAgICAgICAgICAgICBzdGFydExpbmVOdW1iZXI6IHN0YXJ0TGluZU51bWJlcixcclxuICAgICAgICAgICAgICAgIHN0YXJ0Q29sdW1uOiBzdGFydENvbHVtbixcclxuICAgICAgICAgICAgICAgIGVuZExpbmVOdW1iZXI6IGVuZExpbmVOdW1iZXIsXHJcbiAgICAgICAgICAgICAgICBlbmRDb2x1bW46IGVuZENvbHVtbixcclxuICAgICAgICAgICAgICAgIG1lc3NhZ2U6IGZsYXR0ZW5EaWFnbm9zdGljTWVzc2FnZVRleHQoaW5mby5tZXNzYWdlVGV4dCwgJ1xcbicpXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICB9O1xyXG4gICAgRGlhZ25vc3RpY3NBZGFwdGVyLnByb3RvdHlwZS5fdHNEaWFnbm9zdGljQ2F0ZWdvcnlUb01hcmtlclNldmVyaXR5ID0gZnVuY3Rpb24gKGNhdGVnb3J5KSB7XHJcbiAgICAgICAgc3dpdGNoIChjYXRlZ29yeSkge1xyXG4gICAgICAgICAgICBjYXNlIERpYWdub3N0aWNDYXRlZ29yeS5FcnJvcjogcmV0dXJuIG1vbmFjby5NYXJrZXJTZXZlcml0eS5FcnJvcjtcclxuICAgICAgICAgICAgY2FzZSBEaWFnbm9zdGljQ2F0ZWdvcnkuTWVzc2FnZTogcmV0dXJuIG1vbmFjby5NYXJrZXJTZXZlcml0eS5JbmZvO1xyXG4gICAgICAgICAgICBjYXNlIERpYWdub3N0aWNDYXRlZ29yeS5XYXJuaW5nOiByZXR1cm4gbW9uYWNvLk1hcmtlclNldmVyaXR5Lldhcm5pbmc7XHJcbiAgICAgICAgICAgIGNhc2UgRGlhZ25vc3RpY0NhdGVnb3J5LlN1Z2dlc3Rpb246IHJldHVybiBtb25hY28uTWFya2VyU2V2ZXJpdHkuSGludDtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG1vbmFjby5NYXJrZXJTZXZlcml0eS5JbmZvO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBEaWFnbm9zdGljc0FkYXB0ZXI7XHJcbn0oQWRhcHRlcikpO1xyXG5leHBvcnQgeyBEaWFnbm9zdGljc0FkYXB0ZXIgfTtcclxudmFyIFN1Z2dlc3RBZGFwdGVyID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xyXG4gICAgX19leHRlbmRzKFN1Z2dlc3RBZGFwdGVyLCBfc3VwZXIpO1xyXG4gICAgZnVuY3Rpb24gU3VnZ2VzdEFkYXB0ZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIF9zdXBlciAhPT0gbnVsbCAmJiBfc3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKSB8fCB0aGlzO1xyXG4gICAgfVxyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFN1Z2dlc3RBZGFwdGVyLnByb3RvdHlwZSwgXCJ0cmlnZ2VyQ2hhcmFjdGVyc1wiLCB7XHJcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBbJy4nXTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXHJcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuICAgIFN1Z2dlc3RBZGFwdGVyLnByb3RvdHlwZS5wcm92aWRlQ29tcGxldGlvbkl0ZW1zID0gZnVuY3Rpb24gKG1vZGVsLCBwb3NpdGlvbiwgX2NvbnRleHQsIHRva2VuKSB7XHJcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB2YXIgd29yZEluZm8sIHdvcmRSYW5nZSwgcmVzb3VyY2UsIG9mZnNldCwgd29ya2VyLCBpbmZvLCBzdWdnZXN0aW9ucztcclxuICAgICAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYSkge1xyXG4gICAgICAgICAgICAgICAgc3dpdGNoIChfYS5sYWJlbCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgd29yZEluZm8gPSBtb2RlbC5nZXRXb3JkVW50aWxQb3NpdGlvbihwb3NpdGlvbik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdvcmRSYW5nZSA9IG5ldyBSYW5nZShwb3NpdGlvbi5saW5lTnVtYmVyLCB3b3JkSW5mby5zdGFydENvbHVtbiwgcG9zaXRpb24ubGluZU51bWJlciwgd29yZEluZm8uZW5kQ29sdW1uKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzb3VyY2UgPSBtb2RlbC51cmk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9mZnNldCA9IG1vZGVsLmdldE9mZnNldEF0KHBvc2l0aW9uKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgdGhpcy5fd29ya2VyKHJlc291cmNlKV07XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB3b3JrZXIgPSBfYS5zZW50KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIHdvcmtlci5nZXRDb21wbGV0aW9uc0F0UG9zaXRpb24ocmVzb3VyY2UudG9TdHJpbmcoKSwgb2Zmc2V0KV07XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAyOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpbmZvID0gX2Euc2VudCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWluZm8gfHwgbW9kZWwuaXNEaXNwb3NlZCgpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qL107XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgc3VnZ2VzdGlvbnMgPSBpbmZvLmVudHJpZXMubWFwKGZ1bmN0aW9uIChlbnRyeSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHJhbmdlID0gd29yZFJhbmdlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGVudHJ5LnJlcGxhY2VtZW50U3Bhbikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBwMSA9IG1vZGVsLmdldFBvc2l0aW9uQXQoZW50cnkucmVwbGFjZW1lbnRTcGFuLnN0YXJ0KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgcDIgPSBtb2RlbC5nZXRQb3NpdGlvbkF0KGVudHJ5LnJlcGxhY2VtZW50U3Bhbi5zdGFydCArIGVudHJ5LnJlcGxhY2VtZW50U3Bhbi5sZW5ndGgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJhbmdlID0gbmV3IFJhbmdlKHAxLmxpbmVOdW1iZXIsIHAxLmNvbHVtbiwgcDIubGluZU51bWJlciwgcDIuY29sdW1uKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXJpOiByZXNvdXJjZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcG9zaXRpb24sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmFuZ2U6IHJhbmdlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOiBlbnRyeS5uYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluc2VydFRleHQ6IGVudHJ5Lm5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc29ydFRleHQ6IGVudHJ5LnNvcnRUZXh0LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtpbmQ6IFN1Z2dlc3RBZGFwdGVyLmNvbnZlcnRLaW5kKGVudHJ5LmtpbmQpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi8sIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdWdnZXN0aW9uczogc3VnZ2VzdGlvbnNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1dO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcbiAgICBTdWdnZXN0QWRhcHRlci5wcm90b3R5cGUucmVzb2x2ZUNvbXBsZXRpb25JdGVtID0gZnVuY3Rpb24gKG1vZGVsLCBfcG9zaXRpb24sIGl0ZW0sIHRva2VuKSB7XHJcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB2YXIgbXlJdGVtLCByZXNvdXJjZSwgcG9zaXRpb24sIG9mZnNldCwgd29ya2VyLCBkZXRhaWxzO1xyXG4gICAgICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9hKSB7XHJcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKF9hLmxhYmVsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAwOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBteUl0ZW0gPSBpdGVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXNvdXJjZSA9IG15SXRlbS51cmk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uID0gbXlJdGVtLnBvc2l0aW9uO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvZmZzZXQgPSBtb2RlbC5nZXRPZmZzZXRBdChwb3NpdGlvbik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIHRoaXMuX3dvcmtlcihyZXNvdXJjZSldO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTpcclxuICAgICAgICAgICAgICAgICAgICAgICAgd29ya2VyID0gX2Euc2VudCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCB3b3JrZXIuZ2V0Q29tcGxldGlvbkVudHJ5RGV0YWlscyhyZXNvdXJjZS50b1N0cmluZygpLCBvZmZzZXQsIG15SXRlbS5sYWJlbCldO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGV0YWlscyA9IF9hLnNlbnQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFkZXRhaWxzIHx8IG1vZGVsLmlzRGlzcG9zZWQoKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi8sIG15SXRlbV07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi8sIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cmk6IHJlc291cmNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBwb3NpdGlvbixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbDogZGV0YWlscy5uYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtpbmQ6IFN1Z2dlc3RBZGFwdGVyLmNvbnZlcnRLaW5kKGRldGFpbHMua2luZCksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGV0YWlsOiBkaXNwbGF5UGFydHNUb1N0cmluZyhkZXRhaWxzLmRpc3BsYXlQYXJ0cyksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnRhdGlvbjoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogZGlzcGxheVBhcnRzVG9TdHJpbmcoZGV0YWlscy5kb2N1bWVudGF0aW9uKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1dO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcbiAgICBTdWdnZXN0QWRhcHRlci5jb252ZXJ0S2luZCA9IGZ1bmN0aW9uIChraW5kKSB7XHJcbiAgICAgICAgc3dpdGNoIChraW5kKSB7XHJcbiAgICAgICAgICAgIGNhc2UgS2luZC5wcmltaXRpdmVUeXBlOlxyXG4gICAgICAgICAgICBjYXNlIEtpbmQua2V5d29yZDpcclxuICAgICAgICAgICAgICAgIHJldHVybiBtb25hY28ubGFuZ3VhZ2VzLkNvbXBsZXRpb25JdGVtS2luZC5LZXl3b3JkO1xyXG4gICAgICAgICAgICBjYXNlIEtpbmQudmFyaWFibGU6XHJcbiAgICAgICAgICAgIGNhc2UgS2luZC5sb2NhbFZhcmlhYmxlOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG1vbmFjby5sYW5ndWFnZXMuQ29tcGxldGlvbkl0ZW1LaW5kLlZhcmlhYmxlO1xyXG4gICAgICAgICAgICBjYXNlIEtpbmQubWVtYmVyVmFyaWFibGU6XHJcbiAgICAgICAgICAgIGNhc2UgS2luZC5tZW1iZXJHZXRBY2Nlc3NvcjpcclxuICAgICAgICAgICAgY2FzZSBLaW5kLm1lbWJlclNldEFjY2Vzc29yOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG1vbmFjby5sYW5ndWFnZXMuQ29tcGxldGlvbkl0ZW1LaW5kLkZpZWxkO1xyXG4gICAgICAgICAgICBjYXNlIEtpbmQuZnVuY3Rpb246XHJcbiAgICAgICAgICAgIGNhc2UgS2luZC5tZW1iZXJGdW5jdGlvbjpcclxuICAgICAgICAgICAgY2FzZSBLaW5kLmNvbnN0cnVjdFNpZ25hdHVyZTpcclxuICAgICAgICAgICAgY2FzZSBLaW5kLmNhbGxTaWduYXR1cmU6XHJcbiAgICAgICAgICAgIGNhc2UgS2luZC5pbmRleFNpZ25hdHVyZTpcclxuICAgICAgICAgICAgICAgIHJldHVybiBtb25hY28ubGFuZ3VhZ2VzLkNvbXBsZXRpb25JdGVtS2luZC5GdW5jdGlvbjtcclxuICAgICAgICAgICAgY2FzZSBLaW5kLmVudW06XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbW9uYWNvLmxhbmd1YWdlcy5Db21wbGV0aW9uSXRlbUtpbmQuRW51bTtcclxuICAgICAgICAgICAgY2FzZSBLaW5kLm1vZHVsZTpcclxuICAgICAgICAgICAgICAgIHJldHVybiBtb25hY28ubGFuZ3VhZ2VzLkNvbXBsZXRpb25JdGVtS2luZC5Nb2R1bGU7XHJcbiAgICAgICAgICAgIGNhc2UgS2luZC5jbGFzczpcclxuICAgICAgICAgICAgICAgIHJldHVybiBtb25hY28ubGFuZ3VhZ2VzLkNvbXBsZXRpb25JdGVtS2luZC5DbGFzcztcclxuICAgICAgICAgICAgY2FzZSBLaW5kLmludGVyZmFjZTpcclxuICAgICAgICAgICAgICAgIHJldHVybiBtb25hY28ubGFuZ3VhZ2VzLkNvbXBsZXRpb25JdGVtS2luZC5JbnRlcmZhY2U7XHJcbiAgICAgICAgICAgIGNhc2UgS2luZC53YXJuaW5nOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG1vbmFjby5sYW5ndWFnZXMuQ29tcGxldGlvbkl0ZW1LaW5kLkZpbGU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBtb25hY28ubGFuZ3VhZ2VzLkNvbXBsZXRpb25JdGVtS2luZC5Qcm9wZXJ0eTtcclxuICAgIH07XHJcbiAgICByZXR1cm4gU3VnZ2VzdEFkYXB0ZXI7XHJcbn0oQWRhcHRlcikpO1xyXG5leHBvcnQgeyBTdWdnZXN0QWRhcHRlciB9O1xyXG52YXIgU2lnbmF0dXJlSGVscEFkYXB0ZXIgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XHJcbiAgICBfX2V4dGVuZHMoU2lnbmF0dXJlSGVscEFkYXB0ZXIsIF9zdXBlcik7XHJcbiAgICBmdW5jdGlvbiBTaWduYXR1cmVIZWxwQWRhcHRlcigpIHtcclxuICAgICAgICB2YXIgX3RoaXMgPSBfc3VwZXIgIT09IG51bGwgJiYgX3N1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgfHwgdGhpcztcclxuICAgICAgICBfdGhpcy5zaWduYXR1cmVIZWxwVHJpZ2dlckNoYXJhY3RlcnMgPSBbJygnLCAnLCddO1xyXG4gICAgICAgIHJldHVybiBfdGhpcztcclxuICAgIH1cclxuICAgIFNpZ25hdHVyZUhlbHBBZGFwdGVyLnByb3RvdHlwZS5wcm92aWRlU2lnbmF0dXJlSGVscCA9IGZ1bmN0aW9uIChtb2RlbCwgcG9zaXRpb24sIHRva2VuKSB7XHJcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB2YXIgcmVzb3VyY2UsIG9mZnNldCwgd29ya2VyLCBpbmZvLCByZXQ7XHJcbiAgICAgICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcclxuICAgICAgICAgICAgICAgIHN3aXRjaCAoX2EubGFiZWwpIHtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc291cmNlID0gbW9kZWwudXJpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvZmZzZXQgPSBtb2RlbC5nZXRPZmZzZXRBdChwb3NpdGlvbik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIHRoaXMuX3dvcmtlcihyZXNvdXJjZSldO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTpcclxuICAgICAgICAgICAgICAgICAgICAgICAgd29ya2VyID0gX2Euc2VudCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCB3b3JrZXIuZ2V0U2lnbmF0dXJlSGVscEl0ZW1zKHJlc291cmNlLnRvU3RyaW5nKCksIG9mZnNldCldO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgaW5mbyA9IF9hLnNlbnQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFpbmZvIHx8IG1vZGVsLmlzRGlzcG9zZWQoKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi9dO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldCA9IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjdGl2ZVNpZ25hdHVyZTogaW5mby5zZWxlY3RlZEl0ZW1JbmRleCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjdGl2ZVBhcmFtZXRlcjogaW5mby5hcmd1bWVudEluZGV4LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2lnbmF0dXJlczogW11cclxuICAgICAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaW5mby5pdGVtcy5mb3JFYWNoKGZ1bmN0aW9uIChpdGVtKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgc2lnbmF0dXJlID0ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXJhbWV0ZXJzOiBbXVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpZ25hdHVyZS5kb2N1bWVudGF0aW9uID0gZGlzcGxheVBhcnRzVG9TdHJpbmcoaXRlbS5kb2N1bWVudGF0aW9uKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpZ25hdHVyZS5sYWJlbCArPSBkaXNwbGF5UGFydHNUb1N0cmluZyhpdGVtLnByZWZpeERpc3BsYXlQYXJ0cyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtLnBhcmFtZXRlcnMuZm9yRWFjaChmdW5jdGlvbiAocCwgaSwgYSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBsYWJlbCA9IGRpc3BsYXlQYXJ0c1RvU3RyaW5nKHAuZGlzcGxheVBhcnRzKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgcGFyYW1ldGVyID0ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbDogbGFiZWwsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50YXRpb246IGRpc3BsYXlQYXJ0c1RvU3RyaW5nKHAuZG9jdW1lbnRhdGlvbilcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpZ25hdHVyZS5sYWJlbCArPSBsYWJlbDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaWduYXR1cmUucGFyYW1ldGVycy5wdXNoKHBhcmFtZXRlcik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGkgPCBhLmxlbmd0aCAtIDEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2lnbmF0dXJlLmxhYmVsICs9IGRpc3BsYXlQYXJ0c1RvU3RyaW5nKGl0ZW0uc2VwYXJhdG9yRGlzcGxheVBhcnRzKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpZ25hdHVyZS5sYWJlbCArPSBkaXNwbGF5UGFydHNUb1N0cmluZyhpdGVtLnN1ZmZpeERpc3BsYXlQYXJ0cyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXQuc2lnbmF0dXJlcy5wdXNoKHNpZ25hdHVyZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qLywge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiByZXQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcG9zZTogZnVuY3Rpb24gKCkgeyB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIFNpZ25hdHVyZUhlbHBBZGFwdGVyO1xyXG59KEFkYXB0ZXIpKTtcclxuZXhwb3J0IHsgU2lnbmF0dXJlSGVscEFkYXB0ZXIgfTtcclxuLy8gLS0tIGhvdmVyIC0tLS0tLVxyXG52YXIgUXVpY2tJbmZvQWRhcHRlciA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcclxuICAgIF9fZXh0ZW5kcyhRdWlja0luZm9BZGFwdGVyLCBfc3VwZXIpO1xyXG4gICAgZnVuY3Rpb24gUXVpY2tJbmZvQWRhcHRlcigpIHtcclxuICAgICAgICByZXR1cm4gX3N1cGVyICE9PSBudWxsICYmIF9zdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpIHx8IHRoaXM7XHJcbiAgICB9XHJcbiAgICBRdWlja0luZm9BZGFwdGVyLnByb3RvdHlwZS5wcm92aWRlSG92ZXIgPSBmdW5jdGlvbiAobW9kZWwsIHBvc2l0aW9uLCB0b2tlbikge1xyXG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdmFyIHJlc291cmNlLCBvZmZzZXQsIHdvcmtlciwgaW5mbywgZG9jdW1lbnRhdGlvbiwgdGFncywgY29udGVudHM7XHJcbiAgICAgICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcclxuICAgICAgICAgICAgICAgIHN3aXRjaCAoX2EubGFiZWwpIHtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc291cmNlID0gbW9kZWwudXJpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvZmZzZXQgPSBtb2RlbC5nZXRPZmZzZXRBdChwb3NpdGlvbik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIHRoaXMuX3dvcmtlcihyZXNvdXJjZSldO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTpcclxuICAgICAgICAgICAgICAgICAgICAgICAgd29ya2VyID0gX2Euc2VudCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCB3b3JrZXIuZ2V0UXVpY2tJbmZvQXRQb3NpdGlvbihyZXNvdXJjZS50b1N0cmluZygpLCBvZmZzZXQpXTtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGluZm8gPSBfYS5zZW50KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghaW5mbyB8fCBtb2RlbC5pc0Rpc3Bvc2VkKCkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkb2N1bWVudGF0aW9uID0gZGlzcGxheVBhcnRzVG9TdHJpbmcoaW5mby5kb2N1bWVudGF0aW9uKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGFncyA9IGluZm8udGFncyA/IGluZm8udGFncy5tYXAoZnVuY3Rpb24gKHRhZykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGxhYmVsID0gXCIqQFwiICsgdGFnLm5hbWUgKyBcIipcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghdGFnLnRleHQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbGFiZWw7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbGFiZWwgKyAodGFnLnRleHQubWF0Y2goL1xcclxcbnxcXG4vZykgPyAnIFxcbicgKyB0YWcudGV4dCA6IFwiIC0gXCIgKyB0YWcudGV4dCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pLmpvaW4oJyAgXFxuXFxuJykgOiAnJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudHMgPSBkaXNwbGF5UGFydHNUb1N0cmluZyhpbmZvLmRpc3BsYXlQYXJ0cyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmFuZ2U6IHRoaXMuX3RleHRTcGFuVG9SYW5nZShtb2RlbCwgaW5mby50ZXh0U3BhbiksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudHM6IFt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogJ2BgYGpzXFxuJyArIGNvbnRlbnRzICsgJ1xcbmBgYFxcbidcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSwge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IGRvY3VtZW50YXRpb24gKyAodGFncyA/ICdcXG5cXG4nICsgdGFncyA6ICcnKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfV07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBRdWlja0luZm9BZGFwdGVyO1xyXG59KEFkYXB0ZXIpKTtcclxuZXhwb3J0IHsgUXVpY2tJbmZvQWRhcHRlciB9O1xyXG4vLyAtLS0gb2NjdXJyZW5jZXMgLS0tLS0tXHJcbnZhciBPY2N1cnJlbmNlc0FkYXB0ZXIgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XHJcbiAgICBfX2V4dGVuZHMoT2NjdXJyZW5jZXNBZGFwdGVyLCBfc3VwZXIpO1xyXG4gICAgZnVuY3Rpb24gT2NjdXJyZW5jZXNBZGFwdGVyKCkge1xyXG4gICAgICAgIHJldHVybiBfc3VwZXIgIT09IG51bGwgJiYgX3N1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgfHwgdGhpcztcclxuICAgIH1cclxuICAgIE9jY3VycmVuY2VzQWRhcHRlci5wcm90b3R5cGUucHJvdmlkZURvY3VtZW50SGlnaGxpZ2h0cyA9IGZ1bmN0aW9uIChtb2RlbCwgcG9zaXRpb24sIHRva2VuKSB7XHJcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB2YXIgcmVzb3VyY2UsIG9mZnNldCwgd29ya2VyLCBlbnRyaWVzO1xyXG4gICAgICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9hKSB7XHJcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKF9hLmxhYmVsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAwOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXNvdXJjZSA9IG1vZGVsLnVyaTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgb2Zmc2V0ID0gbW9kZWwuZ2V0T2Zmc2V0QXQocG9zaXRpb24pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCB0aGlzLl93b3JrZXIocmVzb3VyY2UpXTtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdvcmtlciA9IF9hLnNlbnQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgd29ya2VyLmdldE9jY3VycmVuY2VzQXRQb3NpdGlvbihyZXNvdXJjZS50b1N0cmluZygpLCBvZmZzZXQpXTtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVudHJpZXMgPSBfYS5zZW50KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghZW50cmllcyB8fCBtb2RlbC5pc0Rpc3Bvc2VkKCkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qLywgZW50cmllcy5tYXAoZnVuY3Rpb24gKGVudHJ5KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmFuZ2U6IF90aGlzLl90ZXh0U3BhblRvUmFuZ2UobW9kZWwsIGVudHJ5LnRleHRTcGFuKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2luZDogZW50cnkuaXNXcml0ZUFjY2VzcyA/IG1vbmFjby5sYW5ndWFnZXMuRG9jdW1lbnRIaWdobGlnaHRLaW5kLldyaXRlIDogbW9uYWNvLmxhbmd1YWdlcy5Eb2N1bWVudEhpZ2hsaWdodEtpbmQuVGV4dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KV07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBPY2N1cnJlbmNlc0FkYXB0ZXI7XHJcbn0oQWRhcHRlcikpO1xyXG5leHBvcnQgeyBPY2N1cnJlbmNlc0FkYXB0ZXIgfTtcclxuLy8gLS0tIGRlZmluaXRpb24gLS0tLS0tXHJcbnZhciBEZWZpbml0aW9uQWRhcHRlciA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcclxuICAgIF9fZXh0ZW5kcyhEZWZpbml0aW9uQWRhcHRlciwgX3N1cGVyKTtcclxuICAgIGZ1bmN0aW9uIERlZmluaXRpb25BZGFwdGVyKCkge1xyXG4gICAgICAgIHJldHVybiBfc3VwZXIgIT09IG51bGwgJiYgX3N1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgfHwgdGhpcztcclxuICAgIH1cclxuICAgIERlZmluaXRpb25BZGFwdGVyLnByb3RvdHlwZS5wcm92aWRlRGVmaW5pdGlvbiA9IGZ1bmN0aW9uIChtb2RlbCwgcG9zaXRpb24sIHRva2VuKSB7XHJcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB2YXIgcmVzb3VyY2UsIG9mZnNldCwgd29ya2VyLCBlbnRyaWVzLCByZXN1bHQsIF9pLCBlbnRyaWVzXzEsIGVudHJ5LCB1cmksIHJlZk1vZGVsO1xyXG4gICAgICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9hKSB7XHJcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKF9hLmxhYmVsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAwOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXNvdXJjZSA9IG1vZGVsLnVyaTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgb2Zmc2V0ID0gbW9kZWwuZ2V0T2Zmc2V0QXQocG9zaXRpb24pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCB0aGlzLl93b3JrZXIocmVzb3VyY2UpXTtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdvcmtlciA9IF9hLnNlbnQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgd29ya2VyLmdldERlZmluaXRpb25BdFBvc2l0aW9uKHJlc291cmNlLnRvU3RyaW5nKCksIG9mZnNldCldO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgZW50cmllcyA9IF9hLnNlbnQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFlbnRyaWVzIHx8IG1vZGVsLmlzRGlzcG9zZWQoKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi9dO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdCA9IFtdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKF9pID0gMCwgZW50cmllc18xID0gZW50cmllczsgX2kgPCBlbnRyaWVzXzEubGVuZ3RoOyBfaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbnRyeSA9IGVudHJpZXNfMVtfaV07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cmkgPSBVcmkucGFyc2UoZW50cnkuZmlsZU5hbWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVmTW9kZWwgPSBtb25hY28uZWRpdG9yLmdldE1vZGVsKHVyaSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVmTW9kZWwpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQucHVzaCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVyaTogdXJpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByYW5nZTogdGhpcy5fdGV4dFNwYW5Ub1JhbmdlKHJlZk1vZGVsLCBlbnRyeS50ZXh0U3BhbilcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qLywgcmVzdWx0XTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIERlZmluaXRpb25BZGFwdGVyO1xyXG59KEFkYXB0ZXIpKTtcclxuZXhwb3J0IHsgRGVmaW5pdGlvbkFkYXB0ZXIgfTtcclxuLy8gLS0tIHJlZmVyZW5jZXMgLS0tLS0tXHJcbnZhciBSZWZlcmVuY2VBZGFwdGVyID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xyXG4gICAgX19leHRlbmRzKFJlZmVyZW5jZUFkYXB0ZXIsIF9zdXBlcik7XHJcbiAgICBmdW5jdGlvbiBSZWZlcmVuY2VBZGFwdGVyKCkge1xyXG4gICAgICAgIHJldHVybiBfc3VwZXIgIT09IG51bGwgJiYgX3N1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgfHwgdGhpcztcclxuICAgIH1cclxuICAgIFJlZmVyZW5jZUFkYXB0ZXIucHJvdG90eXBlLnByb3ZpZGVSZWZlcmVuY2VzID0gZnVuY3Rpb24gKG1vZGVsLCBwb3NpdGlvbiwgY29udGV4dCwgdG9rZW4pIHtcclxuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHZhciByZXNvdXJjZSwgb2Zmc2V0LCB3b3JrZXIsIGVudHJpZXMsIHJlc3VsdCwgX2ksIGVudHJpZXNfMiwgZW50cnksIHVyaSwgcmVmTW9kZWw7XHJcbiAgICAgICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcclxuICAgICAgICAgICAgICAgIHN3aXRjaCAoX2EubGFiZWwpIHtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc291cmNlID0gbW9kZWwudXJpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvZmZzZXQgPSBtb2RlbC5nZXRPZmZzZXRBdChwb3NpdGlvbik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIHRoaXMuX3dvcmtlcihyZXNvdXJjZSldO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTpcclxuICAgICAgICAgICAgICAgICAgICAgICAgd29ya2VyID0gX2Euc2VudCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCB3b3JrZXIuZ2V0UmVmZXJlbmNlc0F0UG9zaXRpb24ocmVzb3VyY2UudG9TdHJpbmcoKSwgb2Zmc2V0KV07XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAyOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbnRyaWVzID0gX2Euc2VudCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWVudHJpZXMgfHwgbW9kZWwuaXNEaXNwb3NlZCgpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qL107XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0ID0gW107XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAoX2kgPSAwLCBlbnRyaWVzXzIgPSBlbnRyaWVzOyBfaSA8IGVudHJpZXNfMi5sZW5ndGg7IF9pKyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVudHJ5ID0gZW50cmllc18yW19pXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVyaSA9IFVyaS5wYXJzZShlbnRyeS5maWxlTmFtZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWZNb2RlbCA9IG1vbmFjby5lZGl0b3IuZ2V0TW9kZWwodXJpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZWZNb2RlbCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdC5wdXNoKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXJpOiB1cmksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJhbmdlOiB0aGlzLl90ZXh0U3BhblRvUmFuZ2UocmVmTW9kZWwsIGVudHJ5LnRleHRTcGFuKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovLCByZXN1bHRdO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcbiAgICByZXR1cm4gUmVmZXJlbmNlQWRhcHRlcjtcclxufShBZGFwdGVyKSk7XHJcbmV4cG9ydCB7IFJlZmVyZW5jZUFkYXB0ZXIgfTtcclxuLy8gLS0tIG91dGxpbmUgLS0tLS0tXHJcbnZhciBPdXRsaW5lQWRhcHRlciA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcclxuICAgIF9fZXh0ZW5kcyhPdXRsaW5lQWRhcHRlciwgX3N1cGVyKTtcclxuICAgIGZ1bmN0aW9uIE91dGxpbmVBZGFwdGVyKCkge1xyXG4gICAgICAgIHJldHVybiBfc3VwZXIgIT09IG51bGwgJiYgX3N1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgfHwgdGhpcztcclxuICAgIH1cclxuICAgIE91dGxpbmVBZGFwdGVyLnByb3RvdHlwZS5wcm92aWRlRG9jdW1lbnRTeW1ib2xzID0gZnVuY3Rpb24gKG1vZGVsLCB0b2tlbikge1xyXG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdmFyIHJlc291cmNlLCB3b3JrZXIsIGl0ZW1zLCBjb252ZXJ0LCByZXN1bHQ7XHJcbiAgICAgICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICAgICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcclxuICAgICAgICAgICAgICAgIHN3aXRjaCAoX2EubGFiZWwpIHtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc291cmNlID0gbW9kZWwudXJpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCB0aGlzLl93b3JrZXIocmVzb3VyY2UpXTtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdvcmtlciA9IF9hLnNlbnQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgd29ya2VyLmdldE5hdmlnYXRpb25CYXJJdGVtcyhyZXNvdXJjZS50b1N0cmluZygpKV07XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAyOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtcyA9IF9hLnNlbnQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFpdGVtcyB8fCBtb2RlbC5pc0Rpc3Bvc2VkKCkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb252ZXJ0ID0gZnVuY3Rpb24gKGJ1Y2tldCwgaXRlbSwgY29udGFpbmVyTGFiZWwpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciByZXN1bHQgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogaXRlbS50ZXh0LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRldGFpbDogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2luZDogKG91dGxpbmVUeXBlVGFibGVbaXRlbS5raW5kXSB8fCBtb25hY28ubGFuZ3VhZ2VzLlN5bWJvbEtpbmQuVmFyaWFibGUpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJhbmdlOiBfdGhpcy5fdGV4dFNwYW5Ub1JhbmdlKG1vZGVsLCBpdGVtLnNwYW5zWzBdKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3Rpb25SYW5nZTogX3RoaXMuX3RleHRTcGFuVG9SYW5nZShtb2RlbCwgaXRlbS5zcGFuc1swXSksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFnczogW10sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGFpbmVyTmFtZTogY29udGFpbmVyTGFiZWxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoaXRlbS5jaGlsZEl0ZW1zICYmIGl0ZW0uY2hpbGRJdGVtcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgX2kgPSAwLCBfYSA9IGl0ZW0uY2hpbGRJdGVtczsgX2kgPCBfYS5sZW5ndGg7IF9pKyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGNoaWxkID0gX2FbX2ldO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb252ZXJ0KGJ1Y2tldCwgY2hpbGQsIHJlc3VsdC5uYW1lKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBidWNrZXQucHVzaChyZXN1bHQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQgPSBbXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbXMuZm9yRWFjaChmdW5jdGlvbiAoaXRlbSkgeyByZXR1cm4gY29udmVydChyZXN1bHQsIGl0ZW0pOyB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi8sIHJlc3VsdF07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBPdXRsaW5lQWRhcHRlcjtcclxufShBZGFwdGVyKSk7XHJcbmV4cG9ydCB7IE91dGxpbmVBZGFwdGVyIH07XHJcbnZhciBLaW5kID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gS2luZCgpIHtcclxuICAgIH1cclxuICAgIEtpbmQudW5rbm93biA9ICcnO1xyXG4gICAgS2luZC5rZXl3b3JkID0gJ2tleXdvcmQnO1xyXG4gICAgS2luZC5zY3JpcHQgPSAnc2NyaXB0JztcclxuICAgIEtpbmQubW9kdWxlID0gJ21vZHVsZSc7XHJcbiAgICBLaW5kLmNsYXNzID0gJ2NsYXNzJztcclxuICAgIEtpbmQuaW50ZXJmYWNlID0gJ2ludGVyZmFjZSc7XHJcbiAgICBLaW5kLnR5cGUgPSAndHlwZSc7XHJcbiAgICBLaW5kLmVudW0gPSAnZW51bSc7XHJcbiAgICBLaW5kLnZhcmlhYmxlID0gJ3Zhcic7XHJcbiAgICBLaW5kLmxvY2FsVmFyaWFibGUgPSAnbG9jYWwgdmFyJztcclxuICAgIEtpbmQuZnVuY3Rpb24gPSAnZnVuY3Rpb24nO1xyXG4gICAgS2luZC5sb2NhbEZ1bmN0aW9uID0gJ2xvY2FsIGZ1bmN0aW9uJztcclxuICAgIEtpbmQubWVtYmVyRnVuY3Rpb24gPSAnbWV0aG9kJztcclxuICAgIEtpbmQubWVtYmVyR2V0QWNjZXNzb3IgPSAnZ2V0dGVyJztcclxuICAgIEtpbmQubWVtYmVyU2V0QWNjZXNzb3IgPSAnc2V0dGVyJztcclxuICAgIEtpbmQubWVtYmVyVmFyaWFibGUgPSAncHJvcGVydHknO1xyXG4gICAgS2luZC5jb25zdHJ1Y3RvckltcGxlbWVudGF0aW9uID0gJ2NvbnN0cnVjdG9yJztcclxuICAgIEtpbmQuY2FsbFNpZ25hdHVyZSA9ICdjYWxsJztcclxuICAgIEtpbmQuaW5kZXhTaWduYXR1cmUgPSAnaW5kZXgnO1xyXG4gICAgS2luZC5jb25zdHJ1Y3RTaWduYXR1cmUgPSAnY29uc3RydWN0JztcclxuICAgIEtpbmQucGFyYW1ldGVyID0gJ3BhcmFtZXRlcic7XHJcbiAgICBLaW5kLnR5cGVQYXJhbWV0ZXIgPSAndHlwZSBwYXJhbWV0ZXInO1xyXG4gICAgS2luZC5wcmltaXRpdmVUeXBlID0gJ3ByaW1pdGl2ZSB0eXBlJztcclxuICAgIEtpbmQubGFiZWwgPSAnbGFiZWwnO1xyXG4gICAgS2luZC5hbGlhcyA9ICdhbGlhcyc7XHJcbiAgICBLaW5kLmNvbnN0ID0gJ2NvbnN0JztcclxuICAgIEtpbmQubGV0ID0gJ2xldCc7XHJcbiAgICBLaW5kLndhcm5pbmcgPSAnd2FybmluZyc7XHJcbiAgICByZXR1cm4gS2luZDtcclxufSgpKTtcclxuZXhwb3J0IHsgS2luZCB9O1xyXG52YXIgb3V0bGluZVR5cGVUYWJsZSA9IE9iamVjdC5jcmVhdGUobnVsbCk7XHJcbm91dGxpbmVUeXBlVGFibGVbS2luZC5tb2R1bGVdID0gbW9uYWNvLmxhbmd1YWdlcy5TeW1ib2xLaW5kLk1vZHVsZTtcclxub3V0bGluZVR5cGVUYWJsZVtLaW5kLmNsYXNzXSA9IG1vbmFjby5sYW5ndWFnZXMuU3ltYm9sS2luZC5DbGFzcztcclxub3V0bGluZVR5cGVUYWJsZVtLaW5kLmVudW1dID0gbW9uYWNvLmxhbmd1YWdlcy5TeW1ib2xLaW5kLkVudW07XHJcbm91dGxpbmVUeXBlVGFibGVbS2luZC5pbnRlcmZhY2VdID0gbW9uYWNvLmxhbmd1YWdlcy5TeW1ib2xLaW5kLkludGVyZmFjZTtcclxub3V0bGluZVR5cGVUYWJsZVtLaW5kLm1lbWJlckZ1bmN0aW9uXSA9IG1vbmFjby5sYW5ndWFnZXMuU3ltYm9sS2luZC5NZXRob2Q7XHJcbm91dGxpbmVUeXBlVGFibGVbS2luZC5tZW1iZXJWYXJpYWJsZV0gPSBtb25hY28ubGFuZ3VhZ2VzLlN5bWJvbEtpbmQuUHJvcGVydHk7XHJcbm91dGxpbmVUeXBlVGFibGVbS2luZC5tZW1iZXJHZXRBY2Nlc3Nvcl0gPSBtb25hY28ubGFuZ3VhZ2VzLlN5bWJvbEtpbmQuUHJvcGVydHk7XHJcbm91dGxpbmVUeXBlVGFibGVbS2luZC5tZW1iZXJTZXRBY2Nlc3Nvcl0gPSBtb25hY28ubGFuZ3VhZ2VzLlN5bWJvbEtpbmQuUHJvcGVydHk7XHJcbm91dGxpbmVUeXBlVGFibGVbS2luZC52YXJpYWJsZV0gPSBtb25hY28ubGFuZ3VhZ2VzLlN5bWJvbEtpbmQuVmFyaWFibGU7XHJcbm91dGxpbmVUeXBlVGFibGVbS2luZC5jb25zdF0gPSBtb25hY28ubGFuZ3VhZ2VzLlN5bWJvbEtpbmQuVmFyaWFibGU7XHJcbm91dGxpbmVUeXBlVGFibGVbS2luZC5sb2NhbFZhcmlhYmxlXSA9IG1vbmFjby5sYW5ndWFnZXMuU3ltYm9sS2luZC5WYXJpYWJsZTtcclxub3V0bGluZVR5cGVUYWJsZVtLaW5kLnZhcmlhYmxlXSA9IG1vbmFjby5sYW5ndWFnZXMuU3ltYm9sS2luZC5WYXJpYWJsZTtcclxub3V0bGluZVR5cGVUYWJsZVtLaW5kLmZ1bmN0aW9uXSA9IG1vbmFjby5sYW5ndWFnZXMuU3ltYm9sS2luZC5GdW5jdGlvbjtcclxub3V0bGluZVR5cGVUYWJsZVtLaW5kLmxvY2FsRnVuY3Rpb25dID0gbW9uYWNvLmxhbmd1YWdlcy5TeW1ib2xLaW5kLkZ1bmN0aW9uO1xyXG4vLyAtLS0gZm9ybWF0dGluZyAtLS0tXHJcbnZhciBGb3JtYXRIZWxwZXIgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XHJcbiAgICBfX2V4dGVuZHMoRm9ybWF0SGVscGVyLCBfc3VwZXIpO1xyXG4gICAgZnVuY3Rpb24gRm9ybWF0SGVscGVyKCkge1xyXG4gICAgICAgIHJldHVybiBfc3VwZXIgIT09IG51bGwgJiYgX3N1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgfHwgdGhpcztcclxuICAgIH1cclxuICAgIEZvcm1hdEhlbHBlci5fY29udmVydE9wdGlvbnMgPSBmdW5jdGlvbiAob3B0aW9ucykge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIENvbnZlcnRUYWJzVG9TcGFjZXM6IG9wdGlvbnMuaW5zZXJ0U3BhY2VzLFxyXG4gICAgICAgICAgICBUYWJTaXplOiBvcHRpb25zLnRhYlNpemUsXHJcbiAgICAgICAgICAgIEluZGVudFNpemU6IG9wdGlvbnMudGFiU2l6ZSxcclxuICAgICAgICAgICAgSW5kZW50U3R5bGU6IEluZGVudFN0eWxlLlNtYXJ0LFxyXG4gICAgICAgICAgICBOZXdMaW5lQ2hhcmFjdGVyOiAnXFxuJyxcclxuICAgICAgICAgICAgSW5zZXJ0U3BhY2VBZnRlckNvbW1hRGVsaW1pdGVyOiB0cnVlLFxyXG4gICAgICAgICAgICBJbnNlcnRTcGFjZUFmdGVyU2VtaWNvbG9uSW5Gb3JTdGF0ZW1lbnRzOiB0cnVlLFxyXG4gICAgICAgICAgICBJbnNlcnRTcGFjZUJlZm9yZUFuZEFmdGVyQmluYXJ5T3BlcmF0b3JzOiB0cnVlLFxyXG4gICAgICAgICAgICBJbnNlcnRTcGFjZUFmdGVyS2V5d29yZHNJbkNvbnRyb2xGbG93U3RhdGVtZW50czogdHJ1ZSxcclxuICAgICAgICAgICAgSW5zZXJ0U3BhY2VBZnRlckZ1bmN0aW9uS2V5d29yZEZvckFub255bW91c0Z1bmN0aW9uczogdHJ1ZSxcclxuICAgICAgICAgICAgSW5zZXJ0U3BhY2VBZnRlck9wZW5pbmdBbmRCZWZvcmVDbG9zaW5nTm9uZW1wdHlQYXJlbnRoZXNpczogZmFsc2UsXHJcbiAgICAgICAgICAgIEluc2VydFNwYWNlQWZ0ZXJPcGVuaW5nQW5kQmVmb3JlQ2xvc2luZ05vbmVtcHR5QnJhY2tldHM6IGZhbHNlLFxyXG4gICAgICAgICAgICBJbnNlcnRTcGFjZUFmdGVyT3BlbmluZ0FuZEJlZm9yZUNsb3NpbmdUZW1wbGF0ZVN0cmluZ0JyYWNlczogZmFsc2UsXHJcbiAgICAgICAgICAgIFBsYWNlT3BlbkJyYWNlT25OZXdMaW5lRm9yQ29udHJvbEJsb2NrczogZmFsc2UsXHJcbiAgICAgICAgICAgIFBsYWNlT3BlbkJyYWNlT25OZXdMaW5lRm9yRnVuY3Rpb25zOiBmYWxzZVxyXG4gICAgICAgIH07XHJcbiAgICB9O1xyXG4gICAgRm9ybWF0SGVscGVyLnByb3RvdHlwZS5fY29udmVydFRleHRDaGFuZ2VzID0gZnVuY3Rpb24gKG1vZGVsLCBjaGFuZ2UpIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICB0ZXh0OiBjaGFuZ2UubmV3VGV4dCxcclxuICAgICAgICAgICAgcmFuZ2U6IHRoaXMuX3RleHRTcGFuVG9SYW5nZShtb2RlbCwgY2hhbmdlLnNwYW4pXHJcbiAgICAgICAgfTtcclxuICAgIH07XHJcbiAgICByZXR1cm4gRm9ybWF0SGVscGVyO1xyXG59KEFkYXB0ZXIpKTtcclxuZXhwb3J0IHsgRm9ybWF0SGVscGVyIH07XHJcbnZhciBGb3JtYXRBZGFwdGVyID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xyXG4gICAgX19leHRlbmRzKEZvcm1hdEFkYXB0ZXIsIF9zdXBlcik7XHJcbiAgICBmdW5jdGlvbiBGb3JtYXRBZGFwdGVyKCkge1xyXG4gICAgICAgIHJldHVybiBfc3VwZXIgIT09IG51bGwgJiYgX3N1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgfHwgdGhpcztcclxuICAgIH1cclxuICAgIEZvcm1hdEFkYXB0ZXIucHJvdG90eXBlLnByb3ZpZGVEb2N1bWVudFJhbmdlRm9ybWF0dGluZ0VkaXRzID0gZnVuY3Rpb24gKG1vZGVsLCByYW5nZSwgb3B0aW9ucywgdG9rZW4pIHtcclxuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHZhciByZXNvdXJjZSwgc3RhcnRPZmZzZXQsIGVuZE9mZnNldCwgd29ya2VyLCBlZGl0cztcclxuICAgICAgICAgICAgdmFyIF90aGlzID0gdGhpcztcclxuICAgICAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYSkge1xyXG4gICAgICAgICAgICAgICAgc3dpdGNoIChfYS5sYWJlbCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzb3VyY2UgPSBtb2RlbC51cmk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXJ0T2Zmc2V0ID0gbW9kZWwuZ2V0T2Zmc2V0QXQoeyBsaW5lTnVtYmVyOiByYW5nZS5zdGFydExpbmVOdW1iZXIsIGNvbHVtbjogcmFuZ2Uuc3RhcnRDb2x1bW4gfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVuZE9mZnNldCA9IG1vZGVsLmdldE9mZnNldEF0KHsgbGluZU51bWJlcjogcmFuZ2UuZW5kTGluZU51bWJlciwgY29sdW1uOiByYW5nZS5lbmRDb2x1bW4gfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIHRoaXMuX3dvcmtlcihyZXNvdXJjZSldO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTpcclxuICAgICAgICAgICAgICAgICAgICAgICAgd29ya2VyID0gX2Euc2VudCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCB3b3JrZXIuZ2V0Rm9ybWF0dGluZ0VkaXRzRm9yUmFuZ2UocmVzb3VyY2UudG9TdHJpbmcoKSwgc3RhcnRPZmZzZXQsIGVuZE9mZnNldCwgRm9ybWF0SGVscGVyLl9jb252ZXJ0T3B0aW9ucyhvcHRpb25zKSldO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgZWRpdHMgPSBfYS5zZW50KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghZWRpdHMgfHwgbW9kZWwuaXNEaXNwb3NlZCgpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qL107XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi8sIGVkaXRzLm1hcChmdW5jdGlvbiAoZWRpdCkgeyByZXR1cm4gX3RoaXMuX2NvbnZlcnRUZXh0Q2hhbmdlcyhtb2RlbCwgZWRpdCk7IH0pXTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIEZvcm1hdEFkYXB0ZXI7XHJcbn0oRm9ybWF0SGVscGVyKSk7XHJcbmV4cG9ydCB7IEZvcm1hdEFkYXB0ZXIgfTtcclxudmFyIEZvcm1hdE9uVHlwZUFkYXB0ZXIgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XHJcbiAgICBfX2V4dGVuZHMoRm9ybWF0T25UeXBlQWRhcHRlciwgX3N1cGVyKTtcclxuICAgIGZ1bmN0aW9uIEZvcm1hdE9uVHlwZUFkYXB0ZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIF9zdXBlciAhPT0gbnVsbCAmJiBfc3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKSB8fCB0aGlzO1xyXG4gICAgfVxyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEZvcm1hdE9uVHlwZUFkYXB0ZXIucHJvdG90eXBlLCBcImF1dG9Gb3JtYXRUcmlnZ2VyQ2hhcmFjdGVyc1wiLCB7XHJcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBbJzsnLCAnfScsICdcXG4nXTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXHJcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuICAgIEZvcm1hdE9uVHlwZUFkYXB0ZXIucHJvdG90eXBlLnByb3ZpZGVPblR5cGVGb3JtYXR0aW5nRWRpdHMgPSBmdW5jdGlvbiAobW9kZWwsIHBvc2l0aW9uLCBjaCwgb3B0aW9ucywgdG9rZW4pIHtcclxuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHZhciByZXNvdXJjZSwgb2Zmc2V0LCB3b3JrZXIsIGVkaXRzO1xyXG4gICAgICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9hKSB7XHJcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKF9hLmxhYmVsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAwOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXNvdXJjZSA9IG1vZGVsLnVyaTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgb2Zmc2V0ID0gbW9kZWwuZ2V0T2Zmc2V0QXQocG9zaXRpb24pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCB0aGlzLl93b3JrZXIocmVzb3VyY2UpXTtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdvcmtlciA9IF9hLnNlbnQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgd29ya2VyLmdldEZvcm1hdHRpbmdFZGl0c0FmdGVyS2V5c3Ryb2tlKHJlc291cmNlLnRvU3RyaW5nKCksIG9mZnNldCwgY2gsIEZvcm1hdEhlbHBlci5fY29udmVydE9wdGlvbnMob3B0aW9ucykpXTtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVkaXRzID0gX2Euc2VudCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWVkaXRzIHx8IG1vZGVsLmlzRGlzcG9zZWQoKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi9dO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovLCBlZGl0cy5tYXAoZnVuY3Rpb24gKGVkaXQpIHsgcmV0dXJuIF90aGlzLl9jb252ZXJ0VGV4dENoYW5nZXMobW9kZWwsIGVkaXQpOyB9KV07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBGb3JtYXRPblR5cGVBZGFwdGVyO1xyXG59KEZvcm1hdEhlbHBlcikpO1xyXG5leHBvcnQgeyBGb3JtYXRPblR5cGVBZGFwdGVyIH07XHJcbi8vIC0tLSBjb2RlIGFjdGlvbnMgLS0tLS0tXHJcbnZhciBDb2RlQWN0aW9uQWRhcHRvciA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcclxuICAgIF9fZXh0ZW5kcyhDb2RlQWN0aW9uQWRhcHRvciwgX3N1cGVyKTtcclxuICAgIGZ1bmN0aW9uIENvZGVBY3Rpb25BZGFwdG9yKCkge1xyXG4gICAgICAgIHJldHVybiBfc3VwZXIgIT09IG51bGwgJiYgX3N1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgfHwgdGhpcztcclxuICAgIH1cclxuICAgIENvZGVBY3Rpb25BZGFwdG9yLnByb3RvdHlwZS5wcm92aWRlQ29kZUFjdGlvbnMgPSBmdW5jdGlvbiAobW9kZWwsIHJhbmdlLCBjb250ZXh0LCB0b2tlbikge1xyXG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdmFyIHJlc291cmNlLCBzdGFydCwgZW5kLCBmb3JtYXRPcHRpb25zLCBlcnJvckNvZGVzLCB3b3JrZXIsIGNvZGVGaXhlcywgYWN0aW9ucztcclxuICAgICAgICAgICAgdmFyIF90aGlzID0gdGhpcztcclxuICAgICAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYSkge1xyXG4gICAgICAgICAgICAgICAgc3dpdGNoIChfYS5sYWJlbCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzb3VyY2UgPSBtb2RlbC51cmk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXJ0ID0gbW9kZWwuZ2V0T2Zmc2V0QXQoeyBsaW5lTnVtYmVyOiByYW5nZS5zdGFydExpbmVOdW1iZXIsIGNvbHVtbjogcmFuZ2Uuc3RhcnRDb2x1bW4gfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVuZCA9IG1vZGVsLmdldE9mZnNldEF0KHsgbGluZU51bWJlcjogcmFuZ2UuZW5kTGluZU51bWJlciwgY29sdW1uOiByYW5nZS5lbmRDb2x1bW4gfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvcm1hdE9wdGlvbnMgPSBGb3JtYXRIZWxwZXIuX2NvbnZlcnRPcHRpb25zKG1vZGVsLmdldE9wdGlvbnMoKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yQ29kZXMgPSBjb250ZXh0Lm1hcmtlcnMuZmlsdGVyKGZ1bmN0aW9uIChtKSB7IHJldHVybiBtLmNvZGU7IH0pLm1hcChmdW5jdGlvbiAobSkgeyByZXR1cm4gbS5jb2RlOyB9KS5tYXAoTnVtYmVyKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgdGhpcy5fd29ya2VyKHJlc291cmNlKV07XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB3b3JrZXIgPSBfYS5zZW50KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIHdvcmtlci5nZXRDb2RlRml4ZXNBdFBvc2l0aW9uKHJlc291cmNlLnRvU3RyaW5nKCksIHN0YXJ0LCBlbmQsIGVycm9yQ29kZXMsIGZvcm1hdE9wdGlvbnMpXTtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvZGVGaXhlcyA9IF9hLnNlbnQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFjb2RlRml4ZXMgfHwgbW9kZWwuaXNEaXNwb3NlZCgpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qL107XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgYWN0aW9ucyA9IGNvZGVGaXhlcy5maWx0ZXIoZnVuY3Rpb24gKGZpeCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gUmVtb3ZlcyBhbnkgJ21ha2UgYSBuZXcgZmlsZSctdHlwZSBjb2RlIGZpeFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZpeC5jaGFuZ2VzLmZpbHRlcihmdW5jdGlvbiAoY2hhbmdlKSB7IHJldHVybiBjaGFuZ2UuaXNOZXdGaWxlOyB9KS5sZW5ndGggPT09IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pLm1hcChmdW5jdGlvbiAoZml4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3RoaXMuX3RzQ29kZUZpeEFjdGlvblRvTW9uYWNvQ29kZUFjdGlvbihtb2RlbCwgY29udGV4dCwgZml4KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWN0aW9uczogYWN0aW9ucyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwb3NlOiBmdW5jdGlvbiAoKSB7IH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1dO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcbiAgICBDb2RlQWN0aW9uQWRhcHRvci5wcm90b3R5cGUuX3RzQ29kZUZpeEFjdGlvblRvTW9uYWNvQ29kZUFjdGlvbiA9IGZ1bmN0aW9uIChtb2RlbCwgY29udGV4dCwgY29kZUZpeCkge1xyXG4gICAgICAgIHZhciBlZGl0cyA9IFtdO1xyXG4gICAgICAgIGZvciAodmFyIF9pID0gMCwgX2EgPSBjb2RlRml4LmNoYW5nZXM7IF9pIDwgX2EubGVuZ3RoOyBfaSsrKSB7XHJcbiAgICAgICAgICAgIHZhciBjaGFuZ2UgPSBfYVtfaV07XHJcbiAgICAgICAgICAgIGZvciAodmFyIF9iID0gMCwgX2MgPSBjaGFuZ2UudGV4dENoYW5nZXM7IF9iIDwgX2MubGVuZ3RoOyBfYisrKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgdGV4dENoYW5nZSA9IF9jW19iXTtcclxuICAgICAgICAgICAgICAgIGVkaXRzLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc291cmNlOiBtb2RlbC51cmksXHJcbiAgICAgICAgICAgICAgICAgICAgZWRpdDoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByYW5nZTogdGhpcy5fdGV4dFNwYW5Ub1JhbmdlKG1vZGVsLCB0ZXh0Q2hhbmdlLnNwYW4pLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiB0ZXh0Q2hhbmdlLm5ld1RleHRcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgYWN0aW9uID0ge1xyXG4gICAgICAgICAgICB0aXRsZTogY29kZUZpeC5kZXNjcmlwdGlvbixcclxuICAgICAgICAgICAgZWRpdDogeyBlZGl0czogZWRpdHMgfSxcclxuICAgICAgICAgICAgZGlhZ25vc3RpY3M6IGNvbnRleHQubWFya2VycyxcclxuICAgICAgICAgICAga2luZDogXCJxdWlja2ZpeFwiXHJcbiAgICAgICAgfTtcclxuICAgICAgICByZXR1cm4gYWN0aW9uO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBDb2RlQWN0aW9uQWRhcHRvcjtcclxufShGb3JtYXRIZWxwZXIpKTtcclxuZXhwb3J0IHsgQ29kZUFjdGlvbkFkYXB0b3IgfTtcclxuLy8gLS0tIHJlbmFtZSAtLS0tXHJcbnZhciBSZW5hbWVBZGFwdGVyID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xyXG4gICAgX19leHRlbmRzKFJlbmFtZUFkYXB0ZXIsIF9zdXBlcik7XHJcbiAgICBmdW5jdGlvbiBSZW5hbWVBZGFwdGVyKCkge1xyXG4gICAgICAgIHJldHVybiBfc3VwZXIgIT09IG51bGwgJiYgX3N1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgfHwgdGhpcztcclxuICAgIH1cclxuICAgIFJlbmFtZUFkYXB0ZXIucHJvdG90eXBlLnByb3ZpZGVSZW5hbWVFZGl0cyA9IGZ1bmN0aW9uIChtb2RlbCwgcG9zaXRpb24sIG5ld05hbWUsIHRva2VuKSB7XHJcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB2YXIgcmVzb3VyY2UsIGZpbGVOYW1lLCBvZmZzZXQsIHdvcmtlciwgcmVuYW1lSW5mbywgcmVuYW1lTG9jYXRpb25zLCBlZGl0cywgX2ksIHJlbmFtZUxvY2F0aW9uc18xLCByZW5hbWVMb2NhdGlvbjtcclxuICAgICAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYSkge1xyXG4gICAgICAgICAgICAgICAgc3dpdGNoIChfYS5sYWJlbCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzb3VyY2UgPSBtb2RlbC51cmk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpbGVOYW1lID0gcmVzb3VyY2UudG9TdHJpbmcoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgb2Zmc2V0ID0gbW9kZWwuZ2V0T2Zmc2V0QXQocG9zaXRpb24pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCB0aGlzLl93b3JrZXIocmVzb3VyY2UpXTtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdvcmtlciA9IF9hLnNlbnQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgd29ya2VyLmdldFJlbmFtZUluZm8oZmlsZU5hbWUsIG9mZnNldCwgeyBhbGxvd1JlbmFtZU9mSW1wb3J0UGF0aDogZmFsc2UgfSldO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVuYW1lSW5mbyA9IF9hLnNlbnQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlbmFtZUluZm8uY2FuUmVuYW1lID09PSBmYWxzZSkgeyAvLyB1c2UgZXhwbGljaXQgY29tcGFyaXNvbiBzbyB0aGF0IHRoZSBkaXNjcmltaW5hdGVkIHVuaW9uIGdldHMgcmVzb2x2ZWQgcHJvcGVybHlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVkaXRzOiBbXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVqZWN0UmVhc29uOiByZW5hbWVJbmZvLmxvY2FsaXplZEVycm9yTWVzc2FnZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1dO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZW5hbWVJbmZvLmZpbGVUb1JlbmFtZSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJSZW5hbWluZyBmaWxlcyBpcyBub3Qgc3VwcG9ydGVkLlwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCB3b3JrZXIuZmluZFJlbmFtZUxvY2F0aW9ucyhmaWxlTmFtZSwgb2Zmc2V0LCAvKnN0cmluZ3MqLyBmYWxzZSwgLypjb21tZW50cyovIGZhbHNlLCAvKnByZWZpeEFuZFN1ZmZpeCovIGZhbHNlKV07XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAzOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZW5hbWVMb2NhdGlvbnMgPSBfYS5zZW50KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghcmVuYW1lTG9jYXRpb25zIHx8IG1vZGVsLmlzRGlzcG9zZWQoKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi9dO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVkaXRzID0gW107XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAoX2kgPSAwLCByZW5hbWVMb2NhdGlvbnNfMSA9IHJlbmFtZUxvY2F0aW9uczsgX2kgPCByZW5hbWVMb2NhdGlvbnNfMS5sZW5ndGg7IF9pKyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlbmFtZUxvY2F0aW9uID0gcmVuYW1lTG9jYXRpb25zXzFbX2ldO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWRpdHMucHVzaCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzb3VyY2U6IG1vbmFjby5VcmkucGFyc2UocmVuYW1lTG9jYXRpb24uZmlsZU5hbWUpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVkaXQ6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmFuZ2U6IHRoaXMuX3RleHRTcGFuVG9SYW5nZShtb2RlbCwgcmVuYW1lTG9jYXRpb24udGV4dFNwYW4pLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiBuZXdOYW1lXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi8sIHsgZWRpdHM6IGVkaXRzIH1dO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcbiAgICByZXR1cm4gUmVuYW1lQWRhcHRlcjtcclxufShBZGFwdGVyKSk7XHJcbmV4cG9ydCB7IFJlbmFtZUFkYXB0ZXIgfTtcclxuIiwiLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICogIENvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG4gKiAgTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLiBTZWUgTGljZW5zZS50eHQgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cclxuICotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXHJcbid1c2Ugc3RyaWN0JztcclxuaW1wb3J0IHsgV29ya2VyTWFuYWdlciB9IGZyb20gJy4vd29ya2VyTWFuYWdlci5qcyc7XHJcbmltcG9ydCAqIGFzIGxhbmd1YWdlRmVhdHVyZXMgZnJvbSAnLi9sYW5ndWFnZUZlYXR1cmVzLmpzJztcclxudmFyIGphdmFTY3JpcHRXb3JrZXI7XHJcbnZhciB0eXBlU2NyaXB0V29ya2VyO1xyXG5leHBvcnQgZnVuY3Rpb24gc2V0dXBUeXBlU2NyaXB0KGRlZmF1bHRzKSB7XHJcbiAgICB0eXBlU2NyaXB0V29ya2VyID0gc2V0dXBNb2RlKGRlZmF1bHRzLCAndHlwZXNjcmlwdCcpO1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBzZXR1cEphdmFTY3JpcHQoZGVmYXVsdHMpIHtcclxuICAgIGphdmFTY3JpcHRXb3JrZXIgPSBzZXR1cE1vZGUoZGVmYXVsdHMsICdqYXZhc2NyaXB0Jyk7XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIGdldEphdmFTY3JpcHRXb3JrZXIoKSB7XHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xyXG4gICAgICAgIGlmICghamF2YVNjcmlwdFdvcmtlcikge1xyXG4gICAgICAgICAgICByZXR1cm4gcmVqZWN0KFwiSmF2YVNjcmlwdCBub3QgcmVnaXN0ZXJlZCFcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJlc29sdmUoamF2YVNjcmlwdFdvcmtlcik7XHJcbiAgICB9KTtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0VHlwZVNjcmlwdFdvcmtlcigpIHtcclxuICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgICAgaWYgKCF0eXBlU2NyaXB0V29ya2VyKSB7XHJcbiAgICAgICAgICAgIHJldHVybiByZWplY3QoXCJUeXBlU2NyaXB0IG5vdCByZWdpc3RlcmVkIVwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmVzb2x2ZSh0eXBlU2NyaXB0V29ya2VyKTtcclxuICAgIH0pO1xyXG59XHJcbmZ1bmN0aW9uIHNldHVwTW9kZShkZWZhdWx0cywgbW9kZUlkKSB7XHJcbiAgICB2YXIgY2xpZW50ID0gbmV3IFdvcmtlck1hbmFnZXIobW9kZUlkLCBkZWZhdWx0cyk7XHJcbiAgICB2YXIgd29ya2VyID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciB1cmlzID0gW107XHJcbiAgICAgICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGFyZ3VtZW50cy5sZW5ndGg7IF9pKyspIHtcclxuICAgICAgICAgICAgdXJpc1tfaV0gPSBhcmd1bWVudHNbX2ldO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gY2xpZW50LmdldExhbmd1YWdlU2VydmljZVdvcmtlci5hcHBseShjbGllbnQsIHVyaXMpO1xyXG4gICAgfTtcclxuICAgIG1vbmFjby5sYW5ndWFnZXMucmVnaXN0ZXJDb21wbGV0aW9uSXRlbVByb3ZpZGVyKG1vZGVJZCwgbmV3IGxhbmd1YWdlRmVhdHVyZXMuU3VnZ2VzdEFkYXB0ZXIod29ya2VyKSk7XHJcbiAgICBtb25hY28ubGFuZ3VhZ2VzLnJlZ2lzdGVyU2lnbmF0dXJlSGVscFByb3ZpZGVyKG1vZGVJZCwgbmV3IGxhbmd1YWdlRmVhdHVyZXMuU2lnbmF0dXJlSGVscEFkYXB0ZXIod29ya2VyKSk7XHJcbiAgICBtb25hY28ubGFuZ3VhZ2VzLnJlZ2lzdGVySG92ZXJQcm92aWRlcihtb2RlSWQsIG5ldyBsYW5ndWFnZUZlYXR1cmVzLlF1aWNrSW5mb0FkYXB0ZXIod29ya2VyKSk7XHJcbiAgICBtb25hY28ubGFuZ3VhZ2VzLnJlZ2lzdGVyRG9jdW1lbnRIaWdobGlnaHRQcm92aWRlcihtb2RlSWQsIG5ldyBsYW5ndWFnZUZlYXR1cmVzLk9jY3VycmVuY2VzQWRhcHRlcih3b3JrZXIpKTtcclxuICAgIG1vbmFjby5sYW5ndWFnZXMucmVnaXN0ZXJEZWZpbml0aW9uUHJvdmlkZXIobW9kZUlkLCBuZXcgbGFuZ3VhZ2VGZWF0dXJlcy5EZWZpbml0aW9uQWRhcHRlcih3b3JrZXIpKTtcclxuICAgIG1vbmFjby5sYW5ndWFnZXMucmVnaXN0ZXJSZWZlcmVuY2VQcm92aWRlcihtb2RlSWQsIG5ldyBsYW5ndWFnZUZlYXR1cmVzLlJlZmVyZW5jZUFkYXB0ZXIod29ya2VyKSk7XHJcbiAgICBtb25hY28ubGFuZ3VhZ2VzLnJlZ2lzdGVyRG9jdW1lbnRTeW1ib2xQcm92aWRlcihtb2RlSWQsIG5ldyBsYW5ndWFnZUZlYXR1cmVzLk91dGxpbmVBZGFwdGVyKHdvcmtlcikpO1xyXG4gICAgbW9uYWNvLmxhbmd1YWdlcy5yZWdpc3RlckRvY3VtZW50UmFuZ2VGb3JtYXR0aW5nRWRpdFByb3ZpZGVyKG1vZGVJZCwgbmV3IGxhbmd1YWdlRmVhdHVyZXMuRm9ybWF0QWRhcHRlcih3b3JrZXIpKTtcclxuICAgIG1vbmFjby5sYW5ndWFnZXMucmVnaXN0ZXJPblR5cGVGb3JtYXR0aW5nRWRpdFByb3ZpZGVyKG1vZGVJZCwgbmV3IGxhbmd1YWdlRmVhdHVyZXMuRm9ybWF0T25UeXBlQWRhcHRlcih3b3JrZXIpKTtcclxuICAgIG1vbmFjby5sYW5ndWFnZXMucmVnaXN0ZXJDb2RlQWN0aW9uUHJvdmlkZXIobW9kZUlkLCBuZXcgbGFuZ3VhZ2VGZWF0dXJlcy5Db2RlQWN0aW9uQWRhcHRvcih3b3JrZXIpKTtcclxuICAgIG1vbmFjby5sYW5ndWFnZXMucmVnaXN0ZXJSZW5hbWVQcm92aWRlcihtb2RlSWQsIG5ldyBsYW5ndWFnZUZlYXR1cmVzLlJlbmFtZUFkYXB0ZXIod29ya2VyKSk7XHJcbiAgICBuZXcgbGFuZ3VhZ2VGZWF0dXJlcy5EaWFnbm9zdGljc0FkYXB0ZXIoZGVmYXVsdHMsIG1vZGVJZCwgd29ya2VyKTtcclxuICAgIHJldHVybiB3b3JrZXI7XHJcbn1cclxuIiwiLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICogIENvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG4gKiAgTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLiBTZWUgTGljZW5zZS50eHQgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cclxuICotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXHJcbid1c2Ugc3RyaWN0JztcclxudmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XHJcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cclxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xyXG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxyXG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcclxuICAgIH0pO1xyXG59O1xyXG52YXIgX19nZW5lcmF0b3IgPSAodGhpcyAmJiB0aGlzLl9fZ2VuZXJhdG9yKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgYm9keSkge1xyXG4gICAgdmFyIF8gPSB7IGxhYmVsOiAwLCBzZW50OiBmdW5jdGlvbigpIHsgaWYgKHRbMF0gJiAxKSB0aHJvdyB0WzFdOyByZXR1cm4gdFsxXTsgfSwgdHJ5czogW10sIG9wczogW10gfSwgZiwgeSwgdCwgZztcclxuICAgIHJldHVybiBnID0geyBuZXh0OiB2ZXJiKDApLCBcInRocm93XCI6IHZlcmIoMSksIFwicmV0dXJuXCI6IHZlcmIoMikgfSwgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIChnW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXM7IH0pLCBnO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IHJldHVybiBmdW5jdGlvbiAodikgeyByZXR1cm4gc3RlcChbbiwgdl0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiBzdGVwKG9wKSB7XHJcbiAgICAgICAgaWYgKGYpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJHZW5lcmF0b3IgaXMgYWxyZWFkeSBleGVjdXRpbmcuXCIpO1xyXG4gICAgICAgIHdoaWxlIChfKSB0cnkge1xyXG4gICAgICAgICAgICBpZiAoZiA9IDEsIHkgJiYgKHQgPSBvcFswXSAmIDIgPyB5W1wicmV0dXJuXCJdIDogb3BbMF0gPyB5W1widGhyb3dcIl0gfHwgKCh0ID0geVtcInJldHVyblwiXSkgJiYgdC5jYWxsKHkpLCAwKSA6IHkubmV4dCkgJiYgISh0ID0gdC5jYWxsKHksIG9wWzFdKSkuZG9uZSkgcmV0dXJuIHQ7XHJcbiAgICAgICAgICAgIGlmICh5ID0gMCwgdCkgb3AgPSBbb3BbMF0gJiAyLCB0LnZhbHVlXTtcclxuICAgICAgICAgICAgc3dpdGNoIChvcFswXSkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSAwOiBjYXNlIDE6IHQgPSBvcDsgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDQ6IF8ubGFiZWwrKzsgcmV0dXJuIHsgdmFsdWU6IG9wWzFdLCBkb25lOiBmYWxzZSB9O1xyXG4gICAgICAgICAgICAgICAgY2FzZSA1OiBfLmxhYmVsKys7IHkgPSBvcFsxXTsgb3AgPSBbMF07IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA3OiBvcCA9IF8ub3BzLnBvcCgpOyBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICBpZiAoISh0ID0gXy50cnlzLCB0ID0gdC5sZW5ndGggPiAwICYmIHRbdC5sZW5ndGggLSAxXSkgJiYgKG9wWzBdID09PSA2IHx8IG9wWzBdID09PSAyKSkgeyBfID0gMDsgY29udGludWU7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDMgJiYgKCF0IHx8IChvcFsxXSA+IHRbMF0gJiYgb3BbMV0gPCB0WzNdKSkpIHsgXy5sYWJlbCA9IG9wWzFdOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gNiAmJiBfLmxhYmVsIDwgdFsxXSkgeyBfLmxhYmVsID0gdFsxXTsgdCA9IG9wOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0ICYmIF8ubGFiZWwgPCB0WzJdKSB7IF8ubGFiZWwgPSB0WzJdOyBfLm9wcy5wdXNoKG9wKTsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAodFsyXSkgXy5vcHMucG9wKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBvcCA9IGJvZHkuY2FsbCh0aGlzQXJnLCBfKTtcclxuICAgICAgICB9IGNhdGNoIChlKSB7IG9wID0gWzYsIGVdOyB5ID0gMDsgfSBmaW5hbGx5IHsgZiA9IHQgPSAwOyB9XHJcbiAgICAgICAgaWYgKG9wWzBdICYgNSkgdGhyb3cgb3BbMV07IHJldHVybiB7IHZhbHVlOiBvcFswXSA/IG9wWzFdIDogdm9pZCAwLCBkb25lOiB0cnVlIH07XHJcbiAgICB9XHJcbn07XHJcbnZhciBXb3JrZXJNYW5hZ2VyID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gV29ya2VyTWFuYWdlcihtb2RlSWQsIGRlZmF1bHRzKSB7XHJcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcclxuICAgICAgICB0aGlzLl9tb2RlSWQgPSBtb2RlSWQ7XHJcbiAgICAgICAgdGhpcy5fZGVmYXVsdHMgPSBkZWZhdWx0cztcclxuICAgICAgICB0aGlzLl93b3JrZXIgPSBudWxsO1xyXG4gICAgICAgIHRoaXMuX2NsaWVudCA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5fY29uZmlnQ2hhbmdlTGlzdGVuZXIgPSB0aGlzLl9kZWZhdWx0cy5vbkRpZENoYW5nZShmdW5jdGlvbiAoKSB7IHJldHVybiBfdGhpcy5fc3RvcFdvcmtlcigpOyB9KTtcclxuICAgICAgICB0aGlzLl91cGRhdGVFeHRyYUxpYnNUb2tlbiA9IDA7XHJcbiAgICAgICAgdGhpcy5fZXh0cmFMaWJzQ2hhbmdlTGlzdGVuZXIgPSB0aGlzLl9kZWZhdWx0cy5vbkRpZEV4dHJhTGlic0NoYW5nZShmdW5jdGlvbiAoKSB7IHJldHVybiBfdGhpcy5fdXBkYXRlRXh0cmFMaWJzKCk7IH0pO1xyXG4gICAgfVxyXG4gICAgV29ya2VyTWFuYWdlci5wcm90b3R5cGUuX3N0b3BXb3JrZXIgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuX3dvcmtlcikge1xyXG4gICAgICAgICAgICB0aGlzLl93b3JrZXIuZGlzcG9zZSgpO1xyXG4gICAgICAgICAgICB0aGlzLl93b3JrZXIgPSBudWxsO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLl9jbGllbnQgPSBudWxsO1xyXG4gICAgfTtcclxuICAgIFdvcmtlck1hbmFnZXIucHJvdG90eXBlLmRpc3Bvc2UgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy5fY29uZmlnQ2hhbmdlTGlzdGVuZXIuZGlzcG9zZSgpO1xyXG4gICAgICAgIHRoaXMuX2V4dHJhTGlic0NoYW5nZUxpc3RlbmVyLmRpc3Bvc2UoKTtcclxuICAgICAgICB0aGlzLl9zdG9wV29ya2VyKCk7XHJcbiAgICB9O1xyXG4gICAgV29ya2VyTWFuYWdlci5wcm90b3R5cGUuX3VwZGF0ZUV4dHJhTGlicyA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHZhciBteVRva2VuLCBwcm94eTtcclxuICAgICAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYSkge1xyXG4gICAgICAgICAgICAgICAgc3dpdGNoIChfYS5sYWJlbCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCF0aGlzLl93b3JrZXIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBteVRva2VuID0gKyt0aGlzLl91cGRhdGVFeHRyYUxpYnNUb2tlbjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgdGhpcy5fd29ya2VyLmdldFByb3h5KCldO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTpcclxuICAgICAgICAgICAgICAgICAgICAgICAgcHJveHkgPSBfYS5zZW50KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLl91cGRhdGVFeHRyYUxpYnNUb2tlbiAhPT0gbXlUb2tlbikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gYXZvaWQgbXVsdGlwbGUgY2FsbHNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwcm94eS51cGRhdGVFeHRyYUxpYnModGhpcy5fZGVmYXVsdHMuZ2V0RXh0cmFMaWJzKCkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qL107XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuICAgIFdvcmtlck1hbmFnZXIucHJvdG90eXBlLl9nZXRDbGllbnQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcclxuICAgICAgICBpZiAoIXRoaXMuX2NsaWVudCkge1xyXG4gICAgICAgICAgICB0aGlzLl93b3JrZXIgPSBtb25hY28uZWRpdG9yLmNyZWF0ZVdlYldvcmtlcih7XHJcbiAgICAgICAgICAgICAgICAvLyBtb2R1bGUgdGhhdCBleHBvcnRzIHRoZSBjcmVhdGUoKSBtZXRob2QgYW5kIHJldHVybnMgYSBgVHlwZVNjcmlwdFdvcmtlcmAgaW5zdGFuY2VcclxuICAgICAgICAgICAgICAgIG1vZHVsZUlkOiAndnMvbGFuZ3VhZ2UvdHlwZXNjcmlwdC90c1dvcmtlcicsXHJcbiAgICAgICAgICAgICAgICBsYWJlbDogdGhpcy5fbW9kZUlkLFxyXG4gICAgICAgICAgICAgICAga2VlcElkbGVNb2RlbHM6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAvLyBwYXNzZWQgaW4gdG8gdGhlIGNyZWF0ZSgpIG1ldGhvZFxyXG4gICAgICAgICAgICAgICAgY3JlYXRlRGF0YToge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbXBpbGVyT3B0aW9uczogdGhpcy5fZGVmYXVsdHMuZ2V0Q29tcGlsZXJPcHRpb25zKCksXHJcbiAgICAgICAgICAgICAgICAgICAgZXh0cmFMaWJzOiB0aGlzLl9kZWZhdWx0cy5nZXRFeHRyYUxpYnMoKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgdmFyIHAgPSB0aGlzLl93b3JrZXIuZ2V0UHJveHkoKTtcclxuICAgICAgICAgICAgaWYgKHRoaXMuX2RlZmF1bHRzLmdldEVhZ2VyTW9kZWxTeW5jKCkpIHtcclxuICAgICAgICAgICAgICAgIHAgPSBwLnRoZW4oZnVuY3Rpb24gKHdvcmtlcikge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChfdGhpcy5fd29ya2VyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdGhpcy5fd29ya2VyLndpdGhTeW5jZWRSZXNvdXJjZXMobW9uYWNvLmVkaXRvci5nZXRNb2RlbHMoKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmZpbHRlcihmdW5jdGlvbiAobW9kZWwpIHsgcmV0dXJuIG1vZGVsLmdldE1vZGVJZCgpID09PSBfdGhpcy5fbW9kZUlkOyB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLm1hcChmdW5jdGlvbiAobW9kZWwpIHsgcmV0dXJuIG1vZGVsLnVyaTsgfSkpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gd29ya2VyO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5fY2xpZW50ID0gcDtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2NsaWVudDtcclxuICAgIH07XHJcbiAgICBXb3JrZXJNYW5hZ2VyLnByb3RvdHlwZS5nZXRMYW5ndWFnZVNlcnZpY2VXb3JrZXIgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcclxuICAgICAgICB2YXIgcmVzb3VyY2VzID0gW107XHJcbiAgICAgICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGFyZ3VtZW50cy5sZW5ndGg7IF9pKyspIHtcclxuICAgICAgICAgICAgcmVzb3VyY2VzW19pXSA9IGFyZ3VtZW50c1tfaV07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBfY2xpZW50O1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRDbGllbnQoKS50aGVuKGZ1bmN0aW9uIChjbGllbnQpIHtcclxuICAgICAgICAgICAgX2NsaWVudCA9IGNsaWVudDtcclxuICAgICAgICB9KS50aGVuKGZ1bmN0aW9uIChfKSB7XHJcbiAgICAgICAgICAgIGlmIChfdGhpcy5fd29ya2VyKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gX3RoaXMuX3dvcmtlci53aXRoU3luY2VkUmVzb3VyY2VzKHJlc291cmNlcyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KS50aGVuKGZ1bmN0aW9uIChfKSB7IHJldHVybiBfY2xpZW50OyB9KTtcclxuICAgIH07XHJcbiAgICByZXR1cm4gV29ya2VyTWFuYWdlcjtcclxufSgpKTtcclxuZXhwb3J0IHsgV29ya2VyTWFuYWdlciB9O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9