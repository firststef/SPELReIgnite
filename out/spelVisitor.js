"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SourceRange = exports.SpelError = exports.SpelVisitor = void 0;
const AbstractParseTreeVisitor_1 = require("antlr4ts/tree/AbstractParseTreeVisitor");
const spelParser_1 = require("./antlr_generated/spelParser");
const antlr4ts_1 = require("antlr4ts");
const spelLexer_1 = require("./antlr_generated/spelLexer");
const errorListener_1 = require("./errorListener");
/*
function getSourceRange(antlr4::tree::TerminalNode* node) {
    return getSourceRange(node->getSymbol());
}
function getSourceRange(const antlr4::ParserRuleContext* rule) {
    return getSourceRange(rule->start, rule->stop);
}
*/
function getSourceRange(start, stop) {
    if (stop == null) {
        stop = start;
    }
    let start_index = 0;
    let size = 1;
    if (start) {
        start_index = start.startIndex;
        size = start.startIndex - start_index + 1;
    }
    if (stop) {
        const stop_index = stop.startIndex;
        size = (stop_index >= start_index ? stop_index - start_index : start_index - stop_index) + 1;
    }
    return new SourceRange(start_index, size);
}
class SourceRange {
    constructor(start, size) {
        this.start = start;
        this.size = size;
    }
}
exports.SourceRange = SourceRange;
class SpelError {
    constructor(range, msg) {
        this.range = range;
        this.message = msg;
    }
}
exports.SpelError = SpelError;
class SpelException {
    constructor(msg, object) {
        this.error = msg;
        this.object = object;
    }
}
class TypedId {
    constructor(name, typeName) {
        this.name = name;
        this.typeName = typeName;
        this.toString = () => JSON.stringify(this);
        this.type = "TypedId";
    }
}
class BasicTypeExpression {
    constructor(value, typeName) {
        this.value = value;
        this.typeName = typeName;
        this.toString = () => JSON.stringify(this);
        this.type = "BasicTypeExpression";
    }
}
class MinusExpression {
    constructor(value) {
        this.value = value;
        this.toString = () => JSON.stringify(this);
        this.type = "MinusExpression";
    }
}
class BinaryExpression {
    constructor(operation, lExpr, rExpr) {
        this.operation = operation;
        this.lExpr = lExpr;
        this.rExpr = rExpr;
        this.toString = () => JSON.stringify(this);
        this.type = "BinaryExpression";
    }
}
class ParenExpression {
    constructor(expr) {
        this.expr = expr;
        this.toString = () => JSON.stringify(this);
        this.type = "ParenExpression";
    }
}
class FieldExpression {
    constructor(field, expr) {
        this.field = field;
        this.expr = expr;
        this.toString = () => JSON.stringify(this);
        this.type = "FieldExpression";
    }
}
class NamedExpression {
    constructor(name) {
        this.name = name;
        this.toString = () => JSON.stringify(this);
        this.type = "NamedExpression";
    }
}
class Call {
    constructor(expr, params) {
        this.expr = expr;
        this.params = params;
        this.toString = () => JSON.stringify(this);
        this.type = "Call";
    }
}
class Assignment {
    constructor(expr, value) {
        this.expr = expr;
        this.value = value;
        this.toString = () => JSON.stringify(this);
        this.type = "Assignment";
    }
}
class Modification {
    constructor(expr, value) {
        this.expr = expr;
        this.value = value;
        this.toString = () => JSON.stringify(this);
        this.type = "Modification";
    }
}
class Import {
    constructor(file) {
        this.file = file;
        this.toString = () => JSON.stringify(this);
        this.type = "Import";
    }
}
class NoneStatement {
    constructor() {
        this.toString = () => JSON.stringify(this);
        this.type = "NoneStatement";
    }
}
class WhileStatement {
    constructor(expr, stmts) {
        this.expr = expr;
        this.stmts = stmts;
        this.toString = () => JSON.stringify(this);
        this.type = "WhileStatement";
    }
}
class AnyStatement {
    constructor(value) {
        this.value = value;
        this.toString = () => JSON.stringify(this);
        this.type = "AnyStatement";
    }
}
class ReleaseStatement {
    constructor(from) {
        this.from = from;
        this.toString = () => JSON.stringify(this);
        this.type = "ReleaseStatement";
    }
}
class MoveStatement {
    constructor(object, from, to) {
        this.object = object;
        this.from = from;
        this.to = to;
        this.toString = () => JSON.stringify(this);
        this.type = "MoveStatement";
    }
}
class CreateStatement {
    constructor(object, holder) {
        this.object = object;
        this.holder = holder;
        this.toString = () => JSON.stringify(this);
        this.type = "CreateStatement";
    }
}
class PrintStatement {
    constructor(message, tone) {
        this.message = message;
        this.tone = tone;
        this.toString = () => JSON.stringify(this);
        this.type = "PrintStatement";
    }
}
class ClassDefinition {
    constructor(name, declarations) {
        this.name = name;
        this.declarations = declarations;
        this.toString = () => JSON.stringify(this);
        this.type = "ClassDefinition";
    }
}
class FunctionDefinition {
    constructor(name, params, statements) {
        this.name = name;
        this.params = params;
        this.statements = statements;
        this.toString = () => JSON.stringify(this);
        this.type = "FunctionDefinition";
    }
}
class VariableDeclaration {
    constructor(name, typeName, isConst, expr) {
        this.name = name;
        this.typeName = typeName;
        this.isConst = isConst;
        this.expr = expr;
        this.toString = () => JSON.stringify(this);
        this.type = "VariableDeclaration";
    }
}
class BlockItem {
    constructor(which, declaration, statement) {
        this.which = which;
        this.declaration = declaration;
        this.statement = statement;
        this.toString = () => JSON.stringify(this);
        this.type = "BlockItem";
    }
}
class Block {
    constructor(items) {
        this.items = items;
        this.toString = () => JSON.stringify(this);
        this.type = "Block";
    }
}
class Document {
    constructor(block, declrBlock) {
        this.block = block;
        this.declrBlock = declrBlock;
        this.toString = () => JSON.stringify(this);
        this.type = "Document";
    }
}
function catcher(target, propertyKey, descriptor) {
    const originalMethod = descriptor.value;
    descriptor.value = function (...args) {
        try {
            return originalMethod.apply(this, args);
        }
        catch (e) {
            if (e instanceof SpelException) {
                e.object.le(e.error);
                return undefined;
            }
            else {
                throw e;
            }
        }
    };
}
class SpelVisitor extends AbstractParseTreeVisitor_1.AbstractParseTreeVisitor {
    constructor() {
        super(...arguments);
        this.NEW_LINE = '\n';
        this.errors = new Array();
    }
    defaultResult() {
        return;
    }
    le(e) {
        if (e != "" && e != null) {
            this.errors.push(new SpelError(new SourceRange(0, 0), e));
        }
    }
    lv(e) {
        this.errors.push(e);
    }
    check(value, message = undefined) {
        if (!value) {
            throw new SpelException(message, this);
        }
        return value;
    }
    checkNull(ctx, field_check, what) {
        if (ctx == null) {
            throw new SpelException(`ctx was null: ${what}`, this);
        }
        if (field_check(ctx) == null) {
            throw new SpelException(`field was null: ${what}`, this);
        }
    }
    ok() {
        return this.errors.length == 0;
    }
    compile(code, headless = true) {
        if (code.length == 0) {
            return {
                "status": "error",
                "errors": [new SpelError(new SourceRange(0, 0), "empty string is not a valid program")]
            };
        }
        this.clear();
        // Create the lexer and parser
        let inputStream = antlr4ts_1.CharStreams.fromString(code);
        let lexer = new spelLexer_1.spelLexer(inputStream);
        lexer.removeErrorListeners();
        let tokenStream = new antlr4ts_1.CommonTokenStream(lexer);
        let parser = new spelParser_1.spelParser(tokenStream);
        parser.removeErrorListeners();
        const listener = new errorListener_1.ErrorListener(this);
        parser.addErrorListener(listener);
        lexer.addErrorListener(listener);
        try {
            let res;
            if (headless) {
                const tree = parser.document();
                res = this.visit(tree);
            }
            else {
                const tree = parser.headless_document();
                res = this.visit(tree);
            }
            let errs = this.errors;
            if (this.ok()) {
                return {
                    status: 'ok',
                    result: res
                };
            }
            else {
                return {
                    status: 'error',
                    errors: errs
                };
            }
        }
        catch (e) {
            if (e != "" && e != null) {
                this.errors.push(new SpelError(new SourceRange(0, 0), e.toString()));
            }
            let errs = this.errors;
            return {
                status: 'fatal',
                errors: errs
            };
        }
    }
    visitDocument(ctx) {
        let $ = this;
        $.checkNull(ctx, ctx => ctx._program, 'block');
        let block = this.visitBlock(ctx._program);
        $.check(block);
        let declrBlock = ctx._declr_block ? this.visitBlock(ctx._declr_block) : undefined;
        return new Document(block, declrBlock);
    }
    visitHeadless_document(ctx) {
        let $ = this;
        $.checkNull(ctx, ctx => ctx.block(), 'block');
        return new Document(this.visitBlock(ctx.block()));
    }
    visitBlock(ctx) {
        let $ = this;
        $.checkNull(ctx, () => true, "block");
        let items = [];
        for (let bi of ctx.block_item()) {
            let block_item = this.visitBlock_item(bi);
            items = items.concat([block_item]);
        }
        return new Block(items);
    }
    visitBlock_item(ctx) {
        let $ = this;
        if (ctx.statement()) {
            return new BlockItem('statement', undefined, this.visitStatement(ctx.statement()));
        }
        if (ctx.declaration()) {
            return new BlockItem('declaration', this.visitDeclaration(ctx.declaration()));
        }
        $.unreachable("blockitem did not have a statement or declaration");
    }
    visitStatement(ctx) {
        let $ = this;
        if (ctx.assignment()) {
            return $.visitAssignment(ctx.assignment());
        }
        if (ctx.call()) {
            return $.visitCall(ctx.call());
        }
        if (ctx.import_statement()) {
            return $.visitImport_statement(ctx.import_statement());
        }
        if (ctx.none_statement()) {
            return $.visitNone_statement(ctx.none_statement());
        }
        if (ctx.while_statement()) {
            return $.visitWhile_statement(ctx.while_statement());
        }
        if (ctx.print_statement()) {
            return $.visitPrint_statement(ctx.print_statement());
        }
        if (ctx.create_statement()) {
            return $.visitCreate_statement(ctx.create_statement());
        }
        if (ctx.release_statement()) {
            return $.visitRelease_statement(ctx.release_statement());
        }
        if (ctx.move_statement()) {
            return $.visitMove_statement(ctx.move_statement());
        }
        // if (ctx.any_statement()){
        //     return $.visitAny_statement(ctx.any_statement());
        // }
        throw new SpelException("No valid statement found", $);
    }
    visitImport_statement(ctx) {
        let $ = this;
        $.checkNull(ctx, ctx => ctx.IDENTIFIER(), 'path');
        let imp = new Import(ctx.IDENTIFIER().text);
        return imp;
    }
    visitNone_statement(ctx) {
        return new NoneStatement();
    }
    visitWhile_statement(ctx) {
        let $ = this;
        $.checkNull(ctx, (ctx) => ctx._expr, "expr");
        const expr = $.visitExpression(ctx._expr);
        $.check(expr);
        const stmts = $.visitList_of_statements(ctx._stmts);
        // $.check(stmts);
        return new WhileStatement(expr, stmts);
    }
    // @catcher
    // visitAny_statement(ctx: Any_statementContext): AnyStatement {
    //     let $ = this;
    //     $.checkNull(ctx, (ctx) => ctx, "identifiers");
    //     let out = '';
    //     ctx.IDENTIFIER().map(el => el.toString().toLowerCase()).forEach(function (el, idx) {
    //         var add = el.toLowerCase();
    //         out += (idx === 0 ? add : add[0].toUpperCase() + add.slice(1));
    //     });
    //     return new AnyStatement(out);
    // }
    visitRelease_statement(ctx) {
        let $ = this;
        $.checkNull(ctx, (ctx) => ctx._where, "where");
        return new ReleaseStatement($.visitHolder(ctx._where));
    }
    visitMove_statement(ctx) {
        let $ = this;
        $.checkNull(ctx, (ctx) => ctx._object, "object");
        $.checkNull(ctx, (ctx) => ctx._to, "to");
        let obj = $.visitExpression(ctx._object);
        $.check(obj);
        return new MoveStatement(obj, ctx._from ? $.visitHolder(ctx._from) : '', $.visitHolder(ctx._to));
    }
    visitCreate_statement(ctx) {
        let $ = this;
        $.checkNull(ctx, (ctx) => ctx._object, "object");
        $.checkNull(ctx, (ctx) => ctx._where, "where");
        return new CreateStatement(ctx._object.text, $.visitHolder(ctx._where));
    }
    visitHolder(ctx) {
        return ctx.IDENTIFIER().map(el => el.text).join(' ');
    }
    visitPrint_statement(ctx) {
        let $ = this;
        $.checkNull(ctx, (ctx) => ctx._msg, "message");
        $.checkNull(ctx, (ctx) => ctx._tone, "tone");
        return new PrintStatement(ctx._msg.text.slice(1, -1), ctx._tone.text);
    }
    visitList_of_statements(ctx) {
        let $ = this;
        $.checkNull(ctx, ctx => ctx.statement(), 'statements');
        let statement = this.visitStatement(ctx.statement());
        $.check(statement);
        let stmts = [statement];
        let list_of_statements = ctx._next ? this.visitList_of_statements(ctx._next) : undefined;
        if (list_of_statements) {
            stmts = stmts.concat(list_of_statements);
        }
        return stmts;
    }
    visitDeclaration(ctx) {
        let $ = this;
        if (ctx == null) {
            throw new SpelException("no valid declaration found", this);
        }
        if (ctx.variable_declaration()) {
            return $.visitVariable_declaration(ctx.variable_declaration());
        }
        if (ctx.class_definition()) {
            return $.visitClass_definition(ctx.class_definition());
        }
        if (ctx.function_definition()) {
            return $.visitFunction_definition(ctx.function_definition());
        }
    }
    visitList_of_declarations(ctx) {
        let $ = this;
        $.checkNull(ctx, ctx => ctx.declaration(), 'declaration');
        let declaration = $.visitDeclaration(ctx.declaration());
        $.check(declaration);
        let decls = [declaration];
        let list_of_declarations = ctx._next ? $.visitList_of_declarations(ctx._next) : undefined;
        if (list_of_declarations) {
            decls = decls.concat(list_of_declarations);
        }
        return decls;
    }
    visitVariable_declaration(ctx) {
        let $ = this;
        $.checkNull(ctx, ctx => ctx.IDENTIFIER(), 'name');
        let expr;
        if (ctx.expression()) {
            expr = $.visitExpression(ctx.expression());
        }
        return new VariableDeclaration(ctx._name.text, ctx._arg_type.text, ctx.ARTIFACT() != undefined, expr);
    }
    visitFunction_definition(ctx) {
        let $ = this;
        $.checkNull(ctx, ctx => ctx.IDENTIFIER(), 'name');
        let params = $.visitList_typed_identifiers(ctx.list_typed_identifiers());
        let statements = $.visitList_of_statements(ctx.list_of_statements());
        $.check(params);
        $.check(statements);
        return new FunctionDefinition(ctx._func_type.text, params, statements);
    }
    visitClass_definition(ctx) {
        let $ = this;
        $.checkNull(ctx, ctx => ctx.list_of_declarations(), 'declarations');
        let declarations = this.visitList_of_declarations(ctx.list_of_declarations());
        $.check(declarations);
        return new ClassDefinition(ctx._name.text, declarations);
    }
    visitAssignment(ctx) {
        let $ = this;
        $.checkNull(ctx, ctx => ctx._expr, 'expr');
        $.checkNull(ctx, ctx => ctx._value, 'value');
        let value = this.visitExpression(ctx._value);
        let expr = this.visitExpression(ctx._expr);
        $.check(value);
        $.check(expr);
        let assign = new Assignment(expr, value);
        return assign;
    }
    visitModification(ctx) {
        let $ = this;
        $.checkNull(ctx, ctx => ctx._expr, 'expr');
        $.checkNull(ctx, ctx => ctx._value, 'value');
        let value = this.visitExpression(ctx._value);
        let expr = this.visitExpression(ctx._expr);
        $.check(value);
        $.check(expr);
        let mod = new Modification(expr, value);
        return mod;
    }
    visitCall(ctx) {
        let $ = this;
        $.checkNull(ctx, ctx => ctx._expr, 'expression');
        let expr = this.visitExpression(ctx._expr);
        let params;
        if (ctx._params) {
            params = this.visitList_expressions(ctx._params);
            $.check(expr);
        }
        $.check(expr);
        return new Call(expr, params);
    }
    visitTerminal(ctx) {
        return ctx.toString(); //todo
    }
    visitList_typed_identifiers(ctx) {
        let $ = this;
        $.checkNull(ctx, ctx => ctx._next, 'params');
        let tps = [new TypedId(ctx._name.text, ctx._type.text)];
        let list_of_types = ctx._next ? this.visitList_typed_identifiers(ctx._next) : undefined;
        if (list_of_types) {
            tps = tps.concat(list_of_types);
        }
        return tps;
    }
    visitExpression(ctx) {
        let $ = this;
        $.checkNull(ctx, () => true, 'ctx');
        if (ctx._basic_type_t) {
            return this.visitBasic_type_expression(ctx._basic_type_t);
        }
        if (ctx._named_expression_t) {
            return this.visitNamed_expression(ctx._named_expression_t);
        }
        if (ctx._minus_expression_t) {
            return this.visitMinus_expression(ctx._minus_expression_t);
        }
        if (ctx._paren_expression_t) {
            return this.visitParen_expression(ctx._paren_expression_t);
        }
        if (ctx._field_expression_t) {
            return this.visitField_expression(ctx._field_expression_t);
        }
        if (ctx._call_expression_t) {
            return this.visitCall(ctx._call_expression_t);
        }
        if (ctx._modifaction_expression_t) {
            return this.visitModification(ctx._modifaction_expression_t);
        }
        let lexpr = this.visitExpression(ctx._lexpr);
        let rexpr = this.visitExpression(ctx._rexpr);
        $.check(lexpr);
        $.check(rexpr);
        let binary = new BinaryExpression(ctx._sign.text, lexpr, rexpr);
        return binary;
    }
    visitList_expressions(ctx) {
        let $ = this;
        $.checkNull(ctx, ctx => ctx._next, 'params');
        let expr = this.visitExpression(ctx.expression());
        $.check(expr);
        let exprs = [expr];
        let list_of_expressions = ctx._next ? this.visitList_expressions(ctx._next) : undefined;
        if (list_of_expressions) {
            exprs = exprs.concat(list_of_expressions);
        }
        return exprs;
    }
    visitBasic_type_expression(ctx) {
        if (ctx.NUMBER()) {
            return new BasicTypeExpression(ctx._number_type.text, 'number');
        }
        else if (ctx.STRING()) {
            return new BasicTypeExpression(ctx._number_type.text, 'string');
        }
    }
    visitMinus_expression(ctx) {
        let expr = this.visitExpression(ctx.expression());
        return new MinusExpression(expr);
    }
    visitParen_expression(ctx) {
        let expr = this.visitExpression(ctx.expression());
        return new ParenExpression(expr);
    }
    visitField_expression(ctx) {
        let expr = this.visitExpression(ctx.expression());
        return new FieldExpression(ctx.IDENTIFIER().text, expr);
    }
    visitNamed_expression(ctx) {
        return new NamedExpression(ctx.IDENTIFIER().text);
    }
    clear() {
        this.errors.length = 0;
    }
    unreachable(msg) {
        this.check(false, msg);
    }
}
__decorate([
    catcher
], SpelVisitor.prototype, "visitDocument", null);
__decorate([
    catcher
], SpelVisitor.prototype, "visitHeadless_document", null);
__decorate([
    catcher
], SpelVisitor.prototype, "visitBlock", null);
__decorate([
    catcher
], SpelVisitor.prototype, "visitBlock_item", null);
__decorate([
    catcher
], SpelVisitor.prototype, "visitStatement", null);
__decorate([
    catcher
], SpelVisitor.prototype, "visitImport_statement", null);
__decorate([
    catcher
], SpelVisitor.prototype, "visitNone_statement", null);
__decorate([
    catcher
], SpelVisitor.prototype, "visitWhile_statement", null);
__decorate([
    catcher
], SpelVisitor.prototype, "visitRelease_statement", null);
__decorate([
    catcher
], SpelVisitor.prototype, "visitMove_statement", null);
__decorate([
    catcher
], SpelVisitor.prototype, "visitCreate_statement", null);
__decorate([
    catcher
], SpelVisitor.prototype, "visitPrint_statement", null);
__decorate([
    catcher
], SpelVisitor.prototype, "visitList_of_statements", null);
__decorate([
    catcher
], SpelVisitor.prototype, "visitDeclaration", null);
__decorate([
    catcher
], SpelVisitor.prototype, "visitList_of_declarations", null);
__decorate([
    catcher
], SpelVisitor.prototype, "visitVariable_declaration", null);
__decorate([
    catcher
], SpelVisitor.prototype, "visitFunction_definition", null);
__decorate([
    catcher
], SpelVisitor.prototype, "visitClass_definition", null);
__decorate([
    catcher
], SpelVisitor.prototype, "visitAssignment", null);
__decorate([
    catcher
], SpelVisitor.prototype, "visitModification", null);
__decorate([
    catcher
], SpelVisitor.prototype, "visitCall", null);
__decorate([
    catcher
], SpelVisitor.prototype, "visitTerminal", null);
__decorate([
    catcher
], SpelVisitor.prototype, "visitList_typed_identifiers", null);
__decorate([
    catcher
], SpelVisitor.prototype, "visitExpression", null);
__decorate([
    catcher
], SpelVisitor.prototype, "visitList_expressions", null);
__decorate([
    catcher
], SpelVisitor.prototype, "visitBasic_type_expression", null);
__decorate([
    catcher
], SpelVisitor.prototype, "visitMinus_expression", null);
__decorate([
    catcher
], SpelVisitor.prototype, "visitParen_expression", null);
__decorate([
    catcher
], SpelVisitor.prototype, "visitField_expression", null);
__decorate([
    catcher
], SpelVisitor.prototype, "visitNamed_expression", null);
exports.SpelVisitor = SpelVisitor;
//# sourceMappingURL=spelVisitor.js.map