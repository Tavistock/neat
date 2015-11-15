// Compiled by ClojureScript 1.7.122 {:static-fns true, :optimize-constants true}
goog.provide('sablono.interpreter');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('sablono.util');
goog.require('goog.object');

/**
 * @interface
 */
sablono.interpreter.IInterpreter = function(){};

/**
 * Interpret a Clojure data structure as a React fn call.
 */
sablono.interpreter.interpret = (function sablono$interpreter$interpret(this$){
if((!((this$ == null))) && (!((this$.sablono$interpreter$IInterpreter$interpret$arity$1 == null)))){
return this$.sablono$interpreter$IInterpreter$interpret$arity$1(this$);
} else {
var x__5216__auto__ = (((this$ == null))?null:this$);
var m__5217__auto__ = (sablono.interpreter.interpret[goog.typeOf(x__5216__auto__)]);
if(!((m__5217__auto__ == null))){
return (m__5217__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5217__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5217__auto__.call(null,this$));
} else {
var m__5217__auto____$1 = (sablono.interpreter.interpret["_"]);
if(!((m__5217__auto____$1 == null))){
return (m__5217__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__5217__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__5217__auto____$1.call(null,this$));
} else {
throw cljs.core.missing_protocol("IInterpreter.interpret",this$);
}
}
}
});

sablono.interpreter.wrap_form_element = (function sablono$interpreter$wrap_form_element(ctor,display_name){
var G__21141 = (function (){var G__21145 = {"getDisplayName": (function (){
return cljs.core.name(display_name);
}), "getInitialState": (function (){
var this$ = this;
return {"value": (this$.props["value"])};
}), "onChange": (function (e){
var this$ = this;
var handler = (this$.props["onChange"]);
if((handler == null)){
return null;
} else {
(handler.cljs$core$IFn$_invoke$arity$1 ? handler.cljs$core$IFn$_invoke$arity$1(e) : handler.call(null,e));

return this$.setState({"value": e.target.value});
}
}), "componentWillReceiveProps": (function (new_props){
var this$ = this;
return this$.setState({"value": (new_props["value"])});
}), "render": (function (){
var this$ = this;
var props = {};
var G__21146_21149 = props;
var G__21147_21150 = this$.props;
var G__21148_21151 = {"value": (this$.state["value"]), "onChange": (this$["onChange"]), "children": (this$.props["children"])};
goog.object.extend(G__21146_21149,G__21147_21150,G__21148_21151);

return (ctor.cljs$core$IFn$_invoke$arity$1 ? ctor.cljs$core$IFn$_invoke$arity$1(props) : ctor.call(null,props));
})};
return React.createClass(G__21145);
})();
return React.createFactory(G__21141);
});
sablono.interpreter.input = sablono.interpreter.wrap_form_element(React.DOM.input,"input");
sablono.interpreter.option = sablono.interpreter.wrap_form_element(React.DOM.option,"option");
sablono.interpreter.textarea = sablono.interpreter.wrap_form_element(React.DOM.textarea,"textarea");
sablono.interpreter.create_element = (function sablono$interpreter$create_element(var_args){
var args__5626__auto__ = [];
var len__5619__auto___21155 = arguments.length;
var i__5620__auto___21156 = (0);
while(true){
if((i__5620__auto___21156 < len__5619__auto___21155)){
args__5626__auto__.push((arguments[i__5620__auto___21156]));

var G__21157 = (i__5620__auto___21156 + (1));
i__5620__auto___21156 = G__21157;
continue;
} else {
}
break;
}

var argseq__5627__auto__ = ((((2) < args__5626__auto__.length))?(new cljs.core.IndexedSeq(args__5626__auto__.slice((2)),(0))):null);
return sablono.interpreter.create_element.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5627__auto__);
});

sablono.interpreter.create_element.cljs$core$IFn$_invoke$arity$variadic = (function (type,props,children){
return (cljs.core.truth_(sablono.util.wrapped_type_QMARK_(type))?cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$input,sablono.interpreter.input,cljs.core.cst$kw$option,sablono.interpreter.option,cljs.core.cst$kw$textarea,sablono.interpreter.textarea], null),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(type)):cljs.core.partial.cljs$core$IFn$_invoke$arity$2(React.createElement,cljs.core.name(type))).call(null,props,(((cljs.core.sequential_QMARK_(children)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(children))))?cljs.core.first(children):children));
});

sablono.interpreter.create_element.cljs$lang$maxFixedArity = (2);

sablono.interpreter.create_element.cljs$lang$applyTo = (function (seq21152){
var G__21153 = cljs.core.first(seq21152);
var seq21152__$1 = cljs.core.next(seq21152);
var G__21154 = cljs.core.first(seq21152__$1);
var seq21152__$2 = cljs.core.next(seq21152__$1);
return sablono.interpreter.create_element.cljs$core$IFn$_invoke$arity$variadic(G__21153,G__21154,seq21152__$2);
});
sablono.interpreter.attributes = (function sablono$interpreter$attributes(attrs){
var attrs__$1 = cljs.core.clj__GT_js(sablono.util.html_to_dom_attrs(attrs));
var class$ = attrs__$1.className;
var class$__$1 = ((cljs.core.array_QMARK_(class$))?clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",class$):class$);
if(cljs.core.truth_(clojure.string.blank_QMARK_(class$__$1))){
delete attrs__$1["className"];
} else {
attrs__$1.className = class$__$1;
}

return attrs__$1;
});
/**
 * Render an element vector as a HTML element.
 */
sablono.interpreter.element = (function sablono$interpreter$element(element__$1){
var vec__21159 = sablono.util.normalize_element(element__$1);
var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21159,(0),null);
var attrs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21159,(1),null);
var content = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21159,(2),null);
var js_attrs = sablono.interpreter.attributes(attrs);
if((cljs.core.sequential_QMARK_(content)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(content)))){
return sablono.interpreter.create_element.cljs$core$IFn$_invoke$arity$variadic(type,js_attrs,cljs.core.array_seq([sablono.interpreter.interpret(cljs.core.first(content))], 0));
} else {
if(cljs.core.truth_(content)){
return sablono.interpreter.create_element.cljs$core$IFn$_invoke$arity$variadic(type,js_attrs,cljs.core.array_seq([sablono.interpreter.interpret(content)], 0));
} else {
return sablono.interpreter.create_element.cljs$core$IFn$_invoke$arity$variadic(type,js_attrs,cljs.core.array_seq([null], 0));

}
}
});
sablono.interpreter.interpret_seq = (function sablono$interpreter$interpret_seq(s){
return cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(sablono.interpreter.interpret,s));
});
cljs.core.Cons.prototype.sablono$interpreter$IInterpreter$ = true;

cljs.core.Cons.prototype.sablono$interpreter$IInterpreter$interpret$arity$1 = (function (this$){
var this$__$1 = this;
return sablono.interpreter.interpret_seq(this$__$1);
});

cljs.core.ChunkedSeq.prototype.sablono$interpreter$IInterpreter$ = true;

cljs.core.ChunkedSeq.prototype.sablono$interpreter$IInterpreter$interpret$arity$1 = (function (this$){
var this$__$1 = this;
return sablono.interpreter.interpret_seq(this$__$1);
});

cljs.core.LazySeq.prototype.sablono$interpreter$IInterpreter$ = true;

cljs.core.LazySeq.prototype.sablono$interpreter$IInterpreter$interpret$arity$1 = (function (this$){
var this$__$1 = this;
return sablono.interpreter.interpret_seq(this$__$1);
});

cljs.core.List.prototype.sablono$interpreter$IInterpreter$ = true;

cljs.core.List.prototype.sablono$interpreter$IInterpreter$interpret$arity$1 = (function (this$){
var this$__$1 = this;
return sablono.interpreter.interpret_seq(this$__$1);
});

cljs.core.IndexedSeq.prototype.sablono$interpreter$IInterpreter$ = true;

cljs.core.IndexedSeq.prototype.sablono$interpreter$IInterpreter$interpret$arity$1 = (function (this$){
var this$__$1 = this;
return sablono.interpreter.interpret_seq(this$__$1);
});

cljs.core.Subvec.prototype.sablono$interpreter$IInterpreter$ = true;

cljs.core.Subvec.prototype.sablono$interpreter$IInterpreter$interpret$arity$1 = (function (this$){
var this$__$1 = this;
return sablono.interpreter.element(this$__$1);
});

cljs.core.PersistentVector.prototype.sablono$interpreter$IInterpreter$ = true;

cljs.core.PersistentVector.prototype.sablono$interpreter$IInterpreter$interpret$arity$1 = (function (this$){
var this$__$1 = this;
return sablono.interpreter.element(this$__$1);
});

(sablono.interpreter.IInterpreter["_"] = true);

(sablono.interpreter.interpret["_"] = (function (this$){
return this$;
}));

(sablono.interpreter.IInterpreter["null"] = true);

(sablono.interpreter.interpret["null"] = (function (this$){
return null;
}));
