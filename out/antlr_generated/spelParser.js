"use strict";
// Generated from ../../grammars/spel.g4 by ANTLR 4.7.3-SNAPSHOT
Object.defineProperty(exports, "__esModule", { value: true });
exports.Minus_expressionContext = exports.List_expressionsContext = exports.ExpressionContext = exports.List_typed_identifiersContext = exports.TypeContext = exports.CallContext = exports.AssignmentContext = exports.Class_definitionContext = exports.Function_definitionContext = exports.Variable_declarationContext = exports.List_of_declarationsContext = exports.DeclarationContext = exports.List_of_statementsContext = exports.StatementContext = exports.Block_itemContext = exports.BlockContext = exports.Headless_documentContext = exports.DocumentContext = exports.spelParser = void 0;
const ATN_1 = require("antlr4ts/atn/ATN");
const ATNDeserializer_1 = require("antlr4ts/atn/ATNDeserializer");
const FailedPredicateException_1 = require("antlr4ts/FailedPredicateException");
const NoViableAltException_1 = require("antlr4ts/NoViableAltException");
const Parser_1 = require("antlr4ts/Parser");
const ParserRuleContext_1 = require("antlr4ts/ParserRuleContext");
const ParserATNSimulator_1 = require("antlr4ts/atn/ParserATNSimulator");
const RecognitionException_1 = require("antlr4ts/RecognitionException");
const Token_1 = require("antlr4ts/Token");
const VocabularyImpl_1 = require("antlr4ts/VocabularyImpl");
const Utils = require("antlr4ts/misc/Utils");
class spelParser extends Parser_1.Parser {
    constructor(input) {
        super(input);
        this._interp = new ParserATNSimulator_1.ParserATNSimulator(spelParser._ATN, this);
    }
    // @Override
    // @NotNull
    get vocabulary() {
        return spelParser.VOCABULARY;
    }
    // tslint:enable:no-trailing-whitespace
    // @Override
    get grammarFileName() { return "spel.g4"; }
    // @Override
    get ruleNames() { return spelParser.ruleNames; }
    // @Override
    get serializedATN() { return spelParser._serializedATN; }
    // @RuleVersion(0)
    document() {
        let _localctx = new DocumentContext(this._ctx, this.state);
        this.enterRule(_localctx, 0, spelParser.RULE_document);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 36;
                this.match(spelParser.BGNP);
                this.state = 37;
                this.block(0);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    headless_document() {
        let _localctx = new Headless_documentContext(this._ctx, this.state);
        this.enterRule(_localctx, 2, spelParser.RULE_headless_document);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 39;
                this.block(0);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    block(_p) {
        if (_p === undefined) {
            _p = 0;
        }
        let _parentctx = this._ctx;
        let _parentState = this.state;
        let _localctx = new BlockContext(this._ctx, _parentState);
        let _prevctx = _localctx;
        let _startState = 4;
        this.enterRecursionRule(_localctx, 4, spelParser.RULE_block, _p);
        try {
            let _alt;
            this.enterOuterAlt(_localctx, 1);
            {
                {
                    this.state = 42;
                    this.block_item();
                }
                this._ctx._stop = this._input.tryLT(-1);
                this.state = 48;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 0, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        if (this._parseListeners != null) {
                            this.triggerExitRuleEvent();
                        }
                        _prevctx = _localctx;
                        {
                            {
                                _localctx = new BlockContext(_parentctx, _parentState);
                                this.pushNewRecursionContext(_localctx, _startState, spelParser.RULE_block);
                                this.state = 44;
                                if (!(this.precpred(this._ctx, 1))) {
                                    throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
                                }
                                this.state = 45;
                                _localctx._next = this.block_item();
                            }
                        }
                    }
                    this.state = 50;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 0, this._ctx);
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.unrollRecursionContexts(_parentctx);
        }
        return _localctx;
    }
    // @RuleVersion(0)
    block_item() {
        let _localctx = new Block_itemContext(this._ctx, this.state);
        this.enterRule(_localctx, 6, spelParser.RULE_block_item);
        try {
            this.state = 53;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case spelParser.ENCHANT:
                case spelParser.IMP:
                case spelParser.CAST:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 51;
                        this.statement();
                    }
                    break;
                case spelParser.BGNC:
                case spelParser.CRAFT:
                case spelParser.POINTS:
                case spelParser.PRECISE:
                case spelParser.RUNE:
                case spelParser.ABSOLUTE:
                case spelParser.TOME:
                case spelParser.IDENTIFIER:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 52;
                        this.declaration();
                    }
                    break;
                default:
                    throw new NoViableAltException_1.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    statement() {
        let _localctx = new StatementContext(this._ctx, this.state);
        this.enterRule(_localctx, 8, spelParser.RULE_statement);
        try {
            this.state = 60;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case spelParser.ENCHANT:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 55;
                        this.assignment();
                    }
                    break;
                case spelParser.CAST:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 56;
                        this.call();
                    }
                    break;
                case spelParser.IMP:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 57;
                        this.match(spelParser.IMP);
                        this.state = 58;
                        _localctx._name = this.match(spelParser.IDENTIFIER);
                        this.state = 59;
                        this.match(spelParser.T__0);
                    }
                    break;
                default:
                    throw new NoViableAltException_1.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    list_of_statements() {
        let _localctx = new List_of_statementsContext(this._ctx, this.state);
        this.enterRule(_localctx, 10, spelParser.RULE_list_of_statements);
        try {
            this.state = 66;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 3, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 62;
                        this.statement();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 63;
                        this.statement();
                        this.state = 64;
                        _localctx._next = this.list_of_statements();
                    }
                    break;
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    declaration() {
        let _localctx = new DeclarationContext(this._ctx, this.state);
        this.enterRule(_localctx, 12, spelParser.RULE_declaration);
        try {
            this.state = 71;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case spelParser.CRAFT:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 68;
                        this.variable_declaration();
                    }
                    break;
                case spelParser.BGNC:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 69;
                        this.class_definition();
                    }
                    break;
                case spelParser.POINTS:
                case spelParser.PRECISE:
                case spelParser.RUNE:
                case spelParser.ABSOLUTE:
                case spelParser.TOME:
                case spelParser.IDENTIFIER:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 70;
                        this.function_definition();
                    }
                    break;
                default:
                    throw new NoViableAltException_1.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    list_of_declarations() {
        let _localctx = new List_of_declarationsContext(this._ctx, this.state);
        this.enterRule(_localctx, 14, spelParser.RULE_list_of_declarations);
        try {
            this.state = 77;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 5, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 73;
                        this.declaration();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 74;
                        this.declaration();
                        this.state = 75;
                        _localctx._next = this.list_of_declarations();
                    }
                    break;
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    variable_declaration() {
        let _localctx = new Variable_declarationContext(this._ctx, this.state);
        this.enterRule(_localctx, 16, spelParser.RULE_variable_declaration);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 79;
                this.match(spelParser.CRAFT);
                this.state = 81;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === spelParser.ARTIFACT) {
                    {
                        this.state = 80;
                        this.match(spelParser.ARTIFACT);
                    }
                }
                this.state = 83;
                _localctx._arg_type = this.type();
                this.state = 84;
                _localctx._name = this.match(spelParser.IDENTIFIER);
                this.state = 85;
                this.match(spelParser.BESTOW);
                this.state = 86;
                _localctx._value = this.expression(0);
                this.state = 87;
                this.match(spelParser.T__0);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    function_definition() {
        let _localctx = new Function_definitionContext(this._ctx, this.state);
        this.enterRule(_localctx, 18, spelParser.RULE_function_definition);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 89;
                _localctx._func_type = this.type();
                this.state = 90;
                this.match(spelParser.SPELL);
                this.state = 91;
                _localctx._name = this.match(spelParser.IDENTIFIER);
                this.state = 92;
                this.match(spelParser.SACRIFICE);
                this.state = 93;
                _localctx._params = this.list_typed_identifiers();
                this.state = 94;
                this.match(spelParser.T__1);
                this.state = 95;
                _localctx._statements = this.list_of_statements();
                this.state = 96;
                this.match(spelParser.TERMINUS);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    class_definition() {
        let _localctx = new Class_definitionContext(this._ctx, this.state);
        this.enterRule(_localctx, 20, spelParser.RULE_class_definition);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 98;
                this.match(spelParser.BGNC);
                this.state = 99;
                _localctx._name = this.match(spelParser.IDENTIFIER);
                this.state = 100;
                _localctx._statements = this.list_of_declarations();
                this.state = 101;
                this.match(spelParser.ENC);
                this.state = 102;
                this.match(spelParser.T__0);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    assignment() {
        let _localctx = new AssignmentContext(this._ctx, this.state);
        this.enterRule(_localctx, 22, spelParser.RULE_assignment);
        try {
            this.state = 118;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 7, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 104;
                        this.match(spelParser.ENCHANT);
                        this.state = 105;
                        _localctx._id = this.match(spelParser.IDENTIFIER);
                        this.state = 106;
                        this.match(spelParser.WITH);
                        this.state = 107;
                        _localctx._value = this.expression(0);
                        this.state = 108;
                        this.match(spelParser.T__0);
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 110;
                        this.match(spelParser.ENCHANT);
                        this.state = 111;
                        _localctx._name = this.match(spelParser.IDENTIFIER);
                        this.state = 112;
                        this.match(spelParser.OF);
                        this.state = 113;
                        _localctx._owner = this.match(spelParser.IDENTIFIER);
                        this.state = 114;
                        this.match(spelParser.WITH);
                        this.state = 115;
                        _localctx._value = this.expression(0);
                        this.state = 116;
                        this.match(spelParser.T__0);
                    }
                    break;
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    call() {
        let _localctx = new CallContext(this._ctx, this.state);
        this.enterRule(_localctx, 24, spelParser.RULE_call);
        try {
            this.state = 134;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 8, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 120;
                        this.match(spelParser.CAST);
                        this.state = 121;
                        this.match(spelParser.IDENTIFIER);
                        this.state = 122;
                        this.match(spelParser.SACRIFICE);
                        this.state = 123;
                        _localctx._params = this.list_expressions();
                        this.state = 124;
                        this.match(spelParser.T__0);
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 126;
                        this.match(spelParser.CAST);
                        this.state = 127;
                        _localctx._name = this.match(spelParser.IDENTIFIER);
                        this.state = 128;
                        this.match(spelParser.OF);
                        this.state = 129;
                        _localctx._owner = this.match(spelParser.IDENTIFIER);
                        this.state = 130;
                        this.match(spelParser.SACRIFICE);
                        this.state = 131;
                        _localctx._params = this.list_expressions();
                        this.state = 132;
                        this.match(spelParser.T__0);
                    }
                    break;
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    type() {
        let _localctx = new TypeContext(this._ctx, this.state);
        this.enterRule(_localctx, 26, spelParser.RULE_type);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 136;
                _la = this._input.LA(1);
                if (!(((((_la - 20)) & ~0x1F) === 0 && ((1 << (_la - 20)) & ((1 << (spelParser.POINTS - 20)) | (1 << (spelParser.PRECISE - 20)) | (1 << (spelParser.RUNE - 20)) | (1 << (spelParser.ABSOLUTE - 20)) | (1 << (spelParser.TOME - 20)) | (1 << (spelParser.IDENTIFIER - 20)))) !== 0))) {
                    this._errHandler.recoverInline(this);
                }
                else {
                    if (this._input.LA(1) === Token_1.Token.EOF) {
                        this.matchedEOF = true;
                    }
                    this._errHandler.reportMatch(this);
                    this.consume();
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    list_typed_identifiers() {
        let _localctx = new List_typed_identifiersContext(this._ctx, this.state);
        this.enterRule(_localctx, 28, spelParser.RULE_list_typed_identifiers);
        try {
            this.state = 146;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 9, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 138;
                        this.type();
                        this.state = 139;
                        this.match(spelParser.IDENTIFIER);
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 141;
                        this.type();
                        this.state = 142;
                        this.match(spelParser.IDENTIFIER);
                        this.state = 143;
                        this.match(spelParser.T__2);
                        this.state = 144;
                        _localctx._next = this.list_typed_identifiers();
                    }
                    break;
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    expression(_p) {
        if (_p === undefined) {
            _p = 0;
        }
        let _parentctx = this._ctx;
        let _parentState = this.state;
        let _localctx = new ExpressionContext(this._ctx, _parentState);
        let _prevctx = _localctx;
        let _startState = 30;
        this.enterRecursionRule(_localctx, 30, spelParser.RULE_expression, _p);
        try {
            let _alt;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 152;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case spelParser.NUMBER:
                        {
                            this.state = 149;
                            _localctx._number_type = this.match(spelParser.NUMBER);
                        }
                        break;
                    case spelParser.STRING:
                        {
                            this.state = 150;
                            _localctx._string_type = this.match(spelParser.STRING);
                        }
                        break;
                    case spelParser.T__4:
                        {
                            this.state = 151;
                            _localctx._minus_expression_type = this.minus_expression();
                        }
                        break;
                    default:
                        throw new NoViableAltException_1.NoViableAltException(this);
                }
                this._ctx._stop = this._input.tryLT(-1);
                this.state = 171;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 12, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        if (this._parseListeners != null) {
                            this.triggerExitRuleEvent();
                        }
                        _prevctx = _localctx;
                        {
                            this.state = 169;
                            this._errHandler.sync(this);
                            switch (this.interpreter.adaptivePredict(this._input, 11, this._ctx)) {
                                case 1:
                                    {
                                        _localctx = new ExpressionContext(_parentctx, _parentState);
                                        this.pushNewRecursionContext(_localctx, _startState, spelParser.RULE_expression);
                                        this.state = 154;
                                        if (!(this.precpred(this._ctx, 5))) {
                                            throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 5)");
                                        }
                                        this.state = 155;
                                        _localctx._plus = this.match(spelParser.T__3);
                                        this.state = 156;
                                        this.expression(6);
                                    }
                                    break;
                                case 2:
                                    {
                                        _localctx = new ExpressionContext(_parentctx, _parentState);
                                        this.pushNewRecursionContext(_localctx, _startState, spelParser.RULE_expression);
                                        this.state = 157;
                                        if (!(this.precpred(this._ctx, 4))) {
                                            throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 4)");
                                        }
                                        this.state = 158;
                                        _localctx._plus = this.match(spelParser.T__4);
                                        this.state = 159;
                                        this.expression(5);
                                    }
                                    break;
                                case 3:
                                    {
                                        _localctx = new ExpressionContext(_parentctx, _parentState);
                                        this.pushNewRecursionContext(_localctx, _startState, spelParser.RULE_expression);
                                        this.state = 160;
                                        if (!(this.precpred(this._ctx, 3))) {
                                            throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 3)");
                                        }
                                        this.state = 161;
                                        _localctx._plus = this.match(spelParser.T__5);
                                        this.state = 162;
                                        this.expression(4);
                                    }
                                    break;
                                case 4:
                                    {
                                        _localctx = new ExpressionContext(_parentctx, _parentState);
                                        this.pushNewRecursionContext(_localctx, _startState, spelParser.RULE_expression);
                                        this.state = 163;
                                        if (!(this.precpred(this._ctx, 2))) {
                                            throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 2)");
                                        }
                                        this.state = 164;
                                        _localctx._plus = this.match(spelParser.T__6);
                                        this.state = 165;
                                        this.expression(3);
                                    }
                                    break;
                                case 5:
                                    {
                                        _localctx = new ExpressionContext(_parentctx, _parentState);
                                        this.pushNewRecursionContext(_localctx, _startState, spelParser.RULE_expression);
                                        this.state = 166;
                                        if (!(this.precpred(this._ctx, 1))) {
                                            throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
                                        }
                                        this.state = 167;
                                        _localctx._plus = this.match(spelParser.T__7);
                                        this.state = 168;
                                        this.expression(2);
                                    }
                                    break;
                            }
                        }
                    }
                    this.state = 173;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 12, this._ctx);
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.unrollRecursionContexts(_parentctx);
        }
        return _localctx;
    }
    // @RuleVersion(0)
    list_expressions() {
        let _localctx = new List_expressionsContext(this._ctx, this.state);
        this.enterRule(_localctx, 32, spelParser.RULE_list_expressions);
        try {
            this.state = 179;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 13, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 174;
                        this.expression(0);
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 175;
                        this.expression(0);
                        this.state = 176;
                        this.match(spelParser.T__2);
                        this.state = 177;
                        _localctx._next = this.list_expressions();
                    }
                    break;
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    minus_expression() {
        let _localctx = new Minus_expressionContext(this._ctx, this.state);
        this.enterRule(_localctx, 34, spelParser.RULE_minus_expression);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 181;
                this.match(spelParser.T__4);
                this.state = 182;
                this.expression(0);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    sempred(_localctx, ruleIndex, predIndex) {
        switch (ruleIndex) {
            case 2:
                return this.block_sempred(_localctx, predIndex);
            case 15:
                return this.expression_sempred(_localctx, predIndex);
        }
        return true;
    }
    block_sempred(_localctx, predIndex) {
        switch (predIndex) {
            case 0:
                return this.precpred(this._ctx, 1);
        }
        return true;
    }
    expression_sempred(_localctx, predIndex) {
        switch (predIndex) {
            case 1:
                return this.precpred(this._ctx, 5);
            case 2:
                return this.precpred(this._ctx, 4);
            case 3:
                return this.precpred(this._ctx, 3);
            case 4:
                return this.precpred(this._ctx, 2);
            case 5:
                return this.precpred(this._ctx, 1);
        }
        return true;
    }
    static get _ATN() {
        if (!spelParser.__ATN) {
            spelParser.__ATN = new ATNDeserializer_1.ATNDeserializer().deserialize(Utils.toCharArray(spelParser._serializedATN));
        }
        return spelParser.__ATN;
    }
}
exports.spelParser = spelParser;
spelParser.T__0 = 1;
spelParser.T__1 = 2;
spelParser.T__2 = 3;
spelParser.T__3 = 4;
spelParser.T__4 = 5;
spelParser.T__5 = 6;
spelParser.T__6 = 7;
spelParser.T__7 = 8;
spelParser.COMMENT = 9;
spelParser.WHITESPACE = 10;
spelParser.BGNP = 11;
spelParser.BGNC = 12;
spelParser.ENC = 13;
spelParser.CRAFT = 14;
spelParser.ARTIFACT = 15;
spelParser.BESTOW = 16;
spelParser.SPELL = 17;
spelParser.SACRIFICE = 18;
spelParser.TERMINUS = 19;
spelParser.POINTS = 20;
spelParser.PRECISE = 21;
spelParser.RUNE = 22;
spelParser.ABSOLUTE = 23;
spelParser.TOME = 24;
spelParser.ENCHANT = 25;
spelParser.WITH = 26;
spelParser.OF = 27;
spelParser.IMP = 28;
spelParser.CAST = 29;
spelParser.CHARACTER = 30;
spelParser.NUMBER = 31;
spelParser.IDENTIFIER = 32;
spelParser.STRING = 33;
spelParser.RULE_document = 0;
spelParser.RULE_headless_document = 1;
spelParser.RULE_block = 2;
spelParser.RULE_block_item = 3;
spelParser.RULE_statement = 4;
spelParser.RULE_list_of_statements = 5;
spelParser.RULE_declaration = 6;
spelParser.RULE_list_of_declarations = 7;
spelParser.RULE_variable_declaration = 8;
spelParser.RULE_function_definition = 9;
spelParser.RULE_class_definition = 10;
spelParser.RULE_assignment = 11;
spelParser.RULE_call = 12;
spelParser.RULE_type = 13;
spelParser.RULE_list_typed_identifiers = 14;
spelParser.RULE_expression = 15;
spelParser.RULE_list_expressions = 16;
spelParser.RULE_minus_expression = 17;
// tslint:disable:no-trailing-whitespace
spelParser.ruleNames = [
    "document", "headless_document", "block", "block_item", "statement", "list_of_statements",
    "declaration", "list_of_declarations", "variable_declaration", "function_definition",
    "class_definition", "assignment", "call", "type", "list_typed_identifiers",
    "expression", "list_expressions", "minus_expression",
];
spelParser._LITERAL_NAMES = [
    undefined, "'.'", "':'", "','", "'+'", "'-'", "'/'", "'*'", "'^'", undefined,
    undefined, "'The tale begins.'", "'I summon thy name'", "'and thy brethren'",
    "'craft'", "'artifact'", "'bestow'", "'spell'", "'sacrifice'", "'terminus'",
    "'points'", "'precise'", "'rune'", "'absolute'", "'tome'", "'enchant'",
    "'with'", "'of'", "'Legend tells of'", "'cast'",
];
spelParser._SYMBOLIC_NAMES = [
    undefined, undefined, undefined, undefined, undefined, undefined, undefined,
    undefined, undefined, "COMMENT", "WHITESPACE", "BGNP", "BGNC", "ENC",
    "CRAFT", "ARTIFACT", "BESTOW", "SPELL", "SACRIFICE", "TERMINUS", "POINTS",
    "PRECISE", "RUNE", "ABSOLUTE", "TOME", "ENCHANT", "WITH", "OF", "IMP",
    "CAST", "CHARACTER", "NUMBER", "IDENTIFIER", "STRING",
];
spelParser.VOCABULARY = new VocabularyImpl_1.VocabularyImpl(spelParser._LITERAL_NAMES, spelParser._SYMBOLIC_NAMES, []);
spelParser._serializedATN = "\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03#\xBB\x04\x02" +
    "\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
    "\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
    "\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12\x04" +
    "\x13\t\x13\x03\x02\x03\x02\x03\x02\x03\x03\x03\x03\x03\x04\x03\x04\x03" +
    "\x04\x03\x04\x03\x04\x07\x041\n\x04\f\x04\x0E\x044\v\x04\x03\x05\x03\x05" +
    "\x05\x058\n\x05\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x05\x06?\n\x06" +
    "\x03\x07\x03\x07\x03\x07\x03\x07\x05\x07E\n\x07\x03\b\x03\b\x03\b\x05" +
    "\bJ\n\b\x03\t\x03\t\x03\t\x03\t\x05\tP\n\t\x03\n\x03\n\x05\nT\n\n\x03" +
    "\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03" +
    "\v\x03\v\x03\v\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\r\x03\r\x03\r\x03" +
    "\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x05\ry" +
    "\n\r\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03" +
    "\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x05\x0E\x89\n\x0E\x03\x0F" +
    "\x03\x0F\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10" +
    "\x05\x10\x95\n\x10\x03\x11\x03\x11\x03\x11\x03\x11\x05\x11\x9B\n\x11\x03" +
    "\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03" +
    "\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x07\x11\xAC\n\x11\f\x11\x0E" +
    "\x11\xAF\v\x11\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x05\x12\xB6\n\x12" +
    "\x03\x13\x03\x13\x03\x13\x03\x13\x02\x02\x04\x06 \x14\x02\x02\x04\x02" +
    "\x06\x02\b\x02\n\x02\f\x02\x0E\x02\x10\x02\x12\x02\x14\x02\x16\x02\x18" +
    "\x02\x1A\x02\x1C\x02\x1E\x02 \x02\"\x02$\x02\x02\x03\x04\x02\x16\x1A\"" +
    "\"\x02\xBC\x02&\x03\x02\x02\x02\x04)\x03\x02\x02\x02\x06+\x03\x02\x02" +
    "\x02\b7\x03\x02\x02\x02\n>\x03\x02\x02\x02\fD\x03\x02\x02\x02\x0EI\x03" +
    "\x02\x02\x02\x10O\x03\x02\x02\x02\x12Q\x03\x02\x02\x02\x14[\x03\x02\x02" +
    "\x02\x16d\x03\x02\x02\x02\x18x\x03\x02\x02\x02\x1A\x88\x03\x02\x02\x02" +
    "\x1C\x8A\x03\x02\x02\x02\x1E\x94\x03\x02\x02\x02 \x9A\x03\x02\x02\x02" +
    "\"\xB5\x03\x02\x02\x02$\xB7\x03\x02\x02\x02&\'\x07\r\x02\x02\'(\x05\x06" +
    "\x04\x02(\x03\x03\x02\x02\x02)*\x05\x06\x04\x02*\x05\x03\x02\x02\x02+" +
    ",\b\x04\x01\x02,-\x05\b\x05\x02-2\x03\x02\x02\x02./\f\x03\x02\x02/1\x05" +
    "\b\x05\x020.\x03\x02\x02\x0214\x03\x02\x02\x0220\x03\x02\x02\x0223\x03" +
    "\x02\x02\x023\x07\x03\x02\x02\x0242\x03\x02\x02\x0258\x05\n\x06\x0268" +
    "\x05\x0E\b\x0275\x03\x02\x02\x0276\x03\x02\x02\x028\t\x03\x02\x02\x02" +
    "9?\x05\x18\r\x02:?\x05\x1A\x0E\x02;<\x07\x1E\x02\x02<=\x07\"\x02\x02=" +
    "?\x07\x03\x02\x02>9\x03\x02\x02\x02>:\x03\x02\x02\x02>;\x03\x02\x02\x02" +
    "?\v\x03\x02\x02\x02@E\x05\n\x06\x02AB\x05\n\x06\x02BC\x05\f\x07\x02CE" +
    "\x03\x02\x02\x02D@\x03\x02\x02\x02DA\x03\x02\x02\x02E\r\x03\x02\x02\x02" +
    "FJ\x05\x12\n\x02GJ\x05\x16\f\x02HJ\x05\x14\v\x02IF\x03\x02\x02\x02IG\x03" +
    "\x02\x02\x02IH\x03\x02\x02\x02J\x0F\x03\x02\x02\x02KP\x05\x0E\b\x02LM" +
    "\x05\x0E\b\x02MN\x05\x10\t\x02NP\x03\x02\x02\x02OK\x03\x02\x02\x02OL\x03" +
    "\x02\x02\x02P\x11\x03\x02\x02\x02QS\x07\x10\x02\x02RT\x07\x11\x02\x02" +
    "SR\x03\x02\x02\x02ST\x03\x02\x02\x02TU\x03\x02\x02\x02UV\x05\x1C\x0F\x02" +
    "VW\x07\"\x02\x02WX\x07\x12\x02\x02XY\x05 \x11\x02YZ\x07\x03\x02\x02Z\x13" +
    "\x03\x02\x02\x02[\\\x05\x1C\x0F\x02\\]\x07\x13\x02\x02]^\x07\"\x02\x02" +
    "^_\x07\x14\x02\x02_`\x05\x1E\x10\x02`a\x07\x04\x02\x02ab\x05\f\x07\x02" +
    "bc\x07\x15\x02\x02c\x15\x03\x02\x02\x02de\x07\x0E\x02\x02ef\x07\"\x02" +
    "\x02fg\x05\x10\t\x02gh\x07\x0F\x02\x02hi\x07\x03\x02\x02i\x17\x03\x02" +
    "\x02\x02jk\x07\x1B\x02\x02kl\x07\"\x02\x02lm\x07\x1C\x02\x02mn\x05 \x11" +
    "\x02no\x07\x03\x02\x02oy\x03\x02\x02\x02pq\x07\x1B\x02\x02qr\x07\"\x02" +
    "\x02rs\x07\x1D\x02\x02st\x07\"\x02\x02tu\x07\x1C\x02\x02uv\x05 \x11\x02" +
    "vw\x07\x03\x02\x02wy\x03\x02\x02\x02xj\x03\x02\x02\x02xp\x03\x02\x02\x02" +
    "y\x19\x03\x02\x02\x02z{\x07\x1F\x02\x02{|\x07\"\x02\x02|}\x07\x14\x02" +
    "\x02}~\x05\"\x12\x02~\x7F\x07\x03\x02\x02\x7F\x89\x03\x02\x02\x02\x80" +
    "\x81\x07\x1F\x02\x02\x81\x82\x07\"\x02\x02\x82\x83\x07\x1D\x02\x02\x83" +
    "\x84\x07\"\x02\x02\x84\x85\x07\x14\x02\x02\x85\x86\x05\"\x12\x02\x86\x87" +
    "\x07\x03\x02\x02\x87\x89\x03\x02\x02\x02\x88z\x03\x02\x02\x02\x88\x80" +
    "\x03\x02\x02\x02\x89\x1B\x03\x02\x02\x02\x8A\x8B\t\x02\x02\x02\x8B\x1D" +
    "\x03\x02\x02\x02\x8C\x8D\x05\x1C\x0F\x02\x8D\x8E\x07\"\x02\x02\x8E\x95" +
    "\x03\x02\x02\x02\x8F\x90\x05\x1C\x0F\x02\x90\x91\x07\"\x02\x02\x91\x92" +
    "\x07\x05\x02\x02\x92\x93\x05\x1E\x10\x02\x93\x95\x03\x02\x02\x02\x94\x8C" +
    "\x03\x02\x02\x02\x94\x8F\x03\x02\x02\x02\x95\x1F\x03\x02\x02\x02\x96\x97" +
    "\b\x11\x01\x02\x97\x9B\x07!\x02\x02\x98\x9B\x07#\x02\x02\x99\x9B\x05$" +
    "\x13\x02\x9A\x96\x03\x02\x02\x02\x9A\x98\x03\x02\x02\x02\x9A\x99\x03\x02" +
    "\x02\x02\x9B\xAD\x03\x02\x02\x02\x9C\x9D\f\x07\x02\x02\x9D\x9E\x07\x06" +
    "\x02\x02\x9E\xAC\x05 \x11\b\x9F\xA0\f\x06\x02\x02\xA0\xA1\x07\x07\x02" +
    "\x02\xA1\xAC\x05 \x11\x07\xA2\xA3\f\x05\x02\x02\xA3\xA4\x07\b\x02\x02" +
    "\xA4\xAC\x05 \x11\x06\xA5\xA6\f\x04\x02\x02\xA6\xA7\x07\t\x02\x02\xA7" +
    "\xAC\x05 \x11\x05\xA8\xA9\f\x03\x02\x02\xA9\xAA\x07\n\x02\x02\xAA\xAC" +
    "\x05 \x11\x04\xAB\x9C\x03\x02\x02\x02\xAB\x9F\x03\x02\x02\x02\xAB\xA2" +
    "\x03\x02\x02\x02\xAB\xA5\x03\x02\x02\x02\xAB\xA8\x03\x02\x02\x02\xAC\xAF" +
    "\x03\x02\x02\x02\xAD\xAB\x03\x02\x02\x02\xAD\xAE\x03\x02\x02\x02\xAE!" +
    "\x03\x02\x02\x02\xAF\xAD\x03\x02\x02\x02\xB0\xB6\x05 \x11\x02\xB1\xB2" +
    "\x05 \x11\x02\xB2\xB3\x07\x05\x02\x02\xB3\xB4\x05\"\x12\x02\xB4\xB6\x03" +
    "\x02\x02\x02\xB5\xB0\x03\x02\x02\x02\xB5\xB1\x03\x02\x02\x02\xB6#\x03" +
    "\x02\x02\x02\xB7\xB8\x07\x07\x02\x02\xB8\xB9\x05 \x11\x02\xB9%\x03\x02" +
    "\x02\x02\x1027>DIOSx\x88\x94\x9A\xAB\xAD\xB5";
class DocumentContext extends ParserRuleContext_1.ParserRuleContext {
    BGNP() { return this.getToken(spelParser.BGNP, 0); }
    block() {
        return this.getRuleContext(0, BlockContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return spelParser.RULE_document; }
    // @Override
    enterRule(listener) {
        if (listener.enterDocument) {
            listener.enterDocument(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitDocument) {
            listener.exitDocument(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitDocument) {
            return visitor.visitDocument(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.DocumentContext = DocumentContext;
class Headless_documentContext extends ParserRuleContext_1.ParserRuleContext {
    block() {
        return this.getRuleContext(0, BlockContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return spelParser.RULE_headless_document; }
    // @Override
    enterRule(listener) {
        if (listener.enterHeadless_document) {
            listener.enterHeadless_document(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitHeadless_document) {
            listener.exitHeadless_document(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitHeadless_document) {
            return visitor.visitHeadless_document(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.Headless_documentContext = Headless_documentContext;
class BlockContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    block_item() {
        return this.getRuleContext(0, Block_itemContext);
    }
    block() {
        return this.tryGetRuleContext(0, BlockContext);
    }
    // @Override
    get ruleIndex() { return spelParser.RULE_block; }
    // @Override
    enterRule(listener) {
        if (listener.enterBlock) {
            listener.enterBlock(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitBlock) {
            listener.exitBlock(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitBlock) {
            return visitor.visitBlock(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.BlockContext = BlockContext;
class Block_itemContext extends ParserRuleContext_1.ParserRuleContext {
    statement() {
        return this.tryGetRuleContext(0, StatementContext);
    }
    declaration() {
        return this.tryGetRuleContext(0, DeclarationContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return spelParser.RULE_block_item; }
    // @Override
    enterRule(listener) {
        if (listener.enterBlock_item) {
            listener.enterBlock_item(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitBlock_item) {
            listener.exitBlock_item(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitBlock_item) {
            return visitor.visitBlock_item(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.Block_itemContext = Block_itemContext;
class StatementContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    assignment() {
        return this.tryGetRuleContext(0, AssignmentContext);
    }
    call() {
        return this.tryGetRuleContext(0, CallContext);
    }
    IMP() { return this.tryGetToken(spelParser.IMP, 0); }
    IDENTIFIER() { return this.tryGetToken(spelParser.IDENTIFIER, 0); }
    // @Override
    get ruleIndex() { return spelParser.RULE_statement; }
    // @Override
    enterRule(listener) {
        if (listener.enterStatement) {
            listener.enterStatement(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitStatement) {
            listener.exitStatement(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitStatement) {
            return visitor.visitStatement(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.StatementContext = StatementContext;
class List_of_statementsContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    statement() {
        return this.getRuleContext(0, StatementContext);
    }
    list_of_statements() {
        return this.tryGetRuleContext(0, List_of_statementsContext);
    }
    // @Override
    get ruleIndex() { return spelParser.RULE_list_of_statements; }
    // @Override
    enterRule(listener) {
        if (listener.enterList_of_statements) {
            listener.enterList_of_statements(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitList_of_statements) {
            listener.exitList_of_statements(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitList_of_statements) {
            return visitor.visitList_of_statements(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.List_of_statementsContext = List_of_statementsContext;
class DeclarationContext extends ParserRuleContext_1.ParserRuleContext {
    variable_declaration() {
        return this.tryGetRuleContext(0, Variable_declarationContext);
    }
    class_definition() {
        return this.tryGetRuleContext(0, Class_definitionContext);
    }
    function_definition() {
        return this.tryGetRuleContext(0, Function_definitionContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return spelParser.RULE_declaration; }
    // @Override
    enterRule(listener) {
        if (listener.enterDeclaration) {
            listener.enterDeclaration(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitDeclaration) {
            listener.exitDeclaration(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitDeclaration) {
            return visitor.visitDeclaration(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.DeclarationContext = DeclarationContext;
class List_of_declarationsContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    declaration() {
        return this.getRuleContext(0, DeclarationContext);
    }
    list_of_declarations() {
        return this.tryGetRuleContext(0, List_of_declarationsContext);
    }
    // @Override
    get ruleIndex() { return spelParser.RULE_list_of_declarations; }
    // @Override
    enterRule(listener) {
        if (listener.enterList_of_declarations) {
            listener.enterList_of_declarations(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitList_of_declarations) {
            listener.exitList_of_declarations(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitList_of_declarations) {
            return visitor.visitList_of_declarations(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.List_of_declarationsContext = List_of_declarationsContext;
class Variable_declarationContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    CRAFT() { return this.getToken(spelParser.CRAFT, 0); }
    BESTOW() { return this.getToken(spelParser.BESTOW, 0); }
    type() {
        return this.getRuleContext(0, TypeContext);
    }
    IDENTIFIER() { return this.getToken(spelParser.IDENTIFIER, 0); }
    expression() {
        return this.getRuleContext(0, ExpressionContext);
    }
    ARTIFACT() { return this.tryGetToken(spelParser.ARTIFACT, 0); }
    // @Override
    get ruleIndex() { return spelParser.RULE_variable_declaration; }
    // @Override
    enterRule(listener) {
        if (listener.enterVariable_declaration) {
            listener.enterVariable_declaration(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitVariable_declaration) {
            listener.exitVariable_declaration(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitVariable_declaration) {
            return visitor.visitVariable_declaration(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.Variable_declarationContext = Variable_declarationContext;
class Function_definitionContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    SPELL() { return this.getToken(spelParser.SPELL, 0); }
    SACRIFICE() { return this.getToken(spelParser.SACRIFICE, 0); }
    TERMINUS() { return this.getToken(spelParser.TERMINUS, 0); }
    type() {
        return this.getRuleContext(0, TypeContext);
    }
    IDENTIFIER() { return this.getToken(spelParser.IDENTIFIER, 0); }
    list_typed_identifiers() {
        return this.getRuleContext(0, List_typed_identifiersContext);
    }
    list_of_statements() {
        return this.getRuleContext(0, List_of_statementsContext);
    }
    // @Override
    get ruleIndex() { return spelParser.RULE_function_definition; }
    // @Override
    enterRule(listener) {
        if (listener.enterFunction_definition) {
            listener.enterFunction_definition(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitFunction_definition) {
            listener.exitFunction_definition(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitFunction_definition) {
            return visitor.visitFunction_definition(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.Function_definitionContext = Function_definitionContext;
class Class_definitionContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    BGNC() { return this.getToken(spelParser.BGNC, 0); }
    ENC() { return this.getToken(spelParser.ENC, 0); }
    IDENTIFIER() { return this.getToken(spelParser.IDENTIFIER, 0); }
    list_of_declarations() {
        return this.getRuleContext(0, List_of_declarationsContext);
    }
    // @Override
    get ruleIndex() { return spelParser.RULE_class_definition; }
    // @Override
    enterRule(listener) {
        if (listener.enterClass_definition) {
            listener.enterClass_definition(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitClass_definition) {
            listener.exitClass_definition(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitClass_definition) {
            return visitor.visitClass_definition(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.Class_definitionContext = Class_definitionContext;
class AssignmentContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    ENCHANT() { return this.getToken(spelParser.ENCHANT, 0); }
    WITH() { return this.getToken(spelParser.WITH, 0); }
    IDENTIFIER(i) {
        if (i === undefined) {
            return this.getTokens(spelParser.IDENTIFIER);
        }
        else {
            return this.getToken(spelParser.IDENTIFIER, i);
        }
    }
    expression() {
        return this.getRuleContext(0, ExpressionContext);
    }
    OF() { return this.tryGetToken(spelParser.OF, 0); }
    // @Override
    get ruleIndex() { return spelParser.RULE_assignment; }
    // @Override
    enterRule(listener) {
        if (listener.enterAssignment) {
            listener.enterAssignment(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitAssignment) {
            listener.exitAssignment(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitAssignment) {
            return visitor.visitAssignment(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.AssignmentContext = AssignmentContext;
class CallContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    CAST() { return this.getToken(spelParser.CAST, 0); }
    IDENTIFIER(i) {
        if (i === undefined) {
            return this.getTokens(spelParser.IDENTIFIER);
        }
        else {
            return this.getToken(spelParser.IDENTIFIER, i);
        }
    }
    SACRIFICE() { return this.getToken(spelParser.SACRIFICE, 0); }
    list_expressions() {
        return this.getRuleContext(0, List_expressionsContext);
    }
    OF() { return this.tryGetToken(spelParser.OF, 0); }
    // @Override
    get ruleIndex() { return spelParser.RULE_call; }
    // @Override
    enterRule(listener) {
        if (listener.enterCall) {
            listener.enterCall(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitCall) {
            listener.exitCall(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitCall) {
            return visitor.visitCall(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.CallContext = CallContext;
class TypeContext extends ParserRuleContext_1.ParserRuleContext {
    POINTS() { return this.tryGetToken(spelParser.POINTS, 0); }
    PRECISE() { return this.tryGetToken(spelParser.PRECISE, 0); }
    RUNE() { return this.tryGetToken(spelParser.RUNE, 0); }
    ABSOLUTE() { return this.tryGetToken(spelParser.ABSOLUTE, 0); }
    TOME() { return this.tryGetToken(spelParser.TOME, 0); }
    IDENTIFIER() { return this.tryGetToken(spelParser.IDENTIFIER, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return spelParser.RULE_type; }
    // @Override
    enterRule(listener) {
        if (listener.enterType) {
            listener.enterType(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitType) {
            listener.exitType(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitType) {
            return visitor.visitType(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.TypeContext = TypeContext;
class List_typed_identifiersContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    type() {
        return this.getRuleContext(0, TypeContext);
    }
    IDENTIFIER() { return this.getToken(spelParser.IDENTIFIER, 0); }
    list_typed_identifiers() {
        return this.tryGetRuleContext(0, List_typed_identifiersContext);
    }
    // @Override
    get ruleIndex() { return spelParser.RULE_list_typed_identifiers; }
    // @Override
    enterRule(listener) {
        if (listener.enterList_typed_identifiers) {
            listener.enterList_typed_identifiers(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitList_typed_identifiers) {
            listener.exitList_typed_identifiers(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitList_typed_identifiers) {
            return visitor.visitList_typed_identifiers(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.List_typed_identifiersContext = List_typed_identifiersContext;
class ExpressionContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    NUMBER() { return this.tryGetToken(spelParser.NUMBER, 0); }
    STRING() { return this.tryGetToken(spelParser.STRING, 0); }
    minus_expression() {
        return this.tryGetRuleContext(0, Minus_expressionContext);
    }
    expression(i) {
        if (i === undefined) {
            return this.getRuleContexts(ExpressionContext);
        }
        else {
            return this.getRuleContext(i, ExpressionContext);
        }
    }
    // @Override
    get ruleIndex() { return spelParser.RULE_expression; }
    // @Override
    enterRule(listener) {
        if (listener.enterExpression) {
            listener.enterExpression(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitExpression) {
            listener.exitExpression(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitExpression) {
            return visitor.visitExpression(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.ExpressionContext = ExpressionContext;
class List_expressionsContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    expression() {
        return this.getRuleContext(0, ExpressionContext);
    }
    list_expressions() {
        return this.tryGetRuleContext(0, List_expressionsContext);
    }
    // @Override
    get ruleIndex() { return spelParser.RULE_list_expressions; }
    // @Override
    enterRule(listener) {
        if (listener.enterList_expressions) {
            listener.enterList_expressions(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitList_expressions) {
            listener.exitList_expressions(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitList_expressions) {
            return visitor.visitList_expressions(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.List_expressionsContext = List_expressionsContext;
class Minus_expressionContext extends ParserRuleContext_1.ParserRuleContext {
    expression() {
        return this.getRuleContext(0, ExpressionContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return spelParser.RULE_minus_expression; }
    // @Override
    enterRule(listener) {
        if (listener.enterMinus_expression) {
            listener.enterMinus_expression(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitMinus_expression) {
            listener.exitMinus_expression(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitMinus_expression) {
            return visitor.visitMinus_expression(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.Minus_expressionContext = Minus_expressionContext;
//# sourceMappingURL=spelParser.js.map