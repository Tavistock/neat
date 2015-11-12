// Compiled by ClojureScript 1.7.122 {:static-fns true, :optimize-constants true}
goog.provide('sablono.core');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('goog.string');
goog.require('sablono.util');
goog.require('sablono.interpreter');
goog.require('goog.dom');
/**
 * Add an optional attribute argument to a function that returns a element vector.
 */
sablono.core.wrap_attrs = (function sablono$core$wrap_attrs(func){
return (function() { 
var G__20736__delegate = function (args){
if(cljs.core.map_QMARK_(cljs.core.first(args))){
var vec__20735 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,cljs.core.rest(args));
var tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20735,(0),null);
var body = cljs.core.nthnext(vec__20735,(1));
if(cljs.core.map_QMARK_(cljs.core.first(body))){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.vector,tag,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.first(body),cljs.core.first(args)], 0)),cljs.core.rest(body));
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.vector,tag,cljs.core.first(args),body);
}
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,args);
}
};
var G__20736 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__20737__i = 0, G__20737__a = new Array(arguments.length -  0);
while (G__20737__i < G__20737__a.length) {G__20737__a[G__20737__i] = arguments[G__20737__i + 0]; ++G__20737__i;}
  args = new cljs.core.IndexedSeq(G__20737__a,0);
} 
return G__20736__delegate.call(this,args);};
G__20736.cljs$lang$maxFixedArity = 0;
G__20736.cljs$lang$applyTo = (function (arglist__20738){
var args = cljs.core.seq(arglist__20738);
return G__20736__delegate(args);
});
G__20736.cljs$core$IFn$_invoke$arity$variadic = G__20736__delegate;
return G__20736;
})()
;
});
sablono.core.update_arglists = (function sablono$core$update_arglists(arglists){
var iter__5333__auto__ = (function sablono$core$update_arglists_$_iter__20745(s__20746){
return (new cljs.core.LazySeq(null,(function (){
var s__20746__$1 = s__20746;
while(true){
var temp__4425__auto__ = cljs.core.seq(s__20746__$1);
if(temp__4425__auto__){
var s__20746__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(s__20746__$2)){
var c__5331__auto__ = cljs.core.chunk_first(s__20746__$2);
var size__5332__auto__ = cljs.core.count(c__5331__auto__);
var b__20748 = cljs.core.chunk_buffer(size__5332__auto__);
if((function (){var i__20747 = (0);
while(true){
if((i__20747 < size__5332__auto__)){
var args = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__5331__auto__,i__20747);
cljs.core.chunk_append(b__20748,cljs.core.vec(cljs.core.cons(cljs.core.cst$sym$attr_DASH_map_QMARK_,args)));

var G__20751 = (i__20747 + (1));
i__20747 = G__20751;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__20748),sablono$core$update_arglists_$_iter__20745(cljs.core.chunk_rest(s__20746__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__20748),null);
}
} else {
var args = cljs.core.first(s__20746__$2);
return cljs.core.cons(cljs.core.vec(cljs.core.cons(cljs.core.cst$sym$attr_DASH_map_QMARK_,args)),sablono$core$update_arglists_$_iter__20745(cljs.core.rest(s__20746__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5333__auto__(arglists);
});
/**
 * Render `element` as HTML string.
 */
sablono.core.render = (function sablono$core$render(element){
if(cljs.core.truth_(element)){
return React.renderToString(element);
} else {
return null;
}
});
/**
 * Render `element` as HTML string, without React internal attributes.
 */
sablono.core.render_static = (function sablono$core$render_static(element){
if(cljs.core.truth_(element)){
return React.renderToStaticMarkup(element);
} else {
return null;
}
});
/**
 * Include a list of external stylesheet files.
 */
sablono.core.include_css = (function sablono$core$include_css(var_args){
var args__5626__auto__ = [];
var len__5619__auto___20759 = arguments.length;
var i__5620__auto___20760 = (0);
while(true){
if((i__5620__auto___20760 < len__5619__auto___20759)){
args__5626__auto__.push((arguments[i__5620__auto___20760]));

var G__20761 = (i__5620__auto___20760 + (1));
i__5620__auto___20760 = G__20761;
continue;
} else {
}
break;
}

var argseq__5627__auto__ = ((((0) < args__5626__auto__.length))?(new cljs.core.IndexedSeq(args__5626__auto__.slice((0)),(0))):null);
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(argseq__5627__auto__);
});

sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic = (function (styles){
var iter__5333__auto__ = (function sablono$core$iter__20753(s__20754){
return (new cljs.core.LazySeq(null,(function (){
var s__20754__$1 = s__20754;
while(true){
var temp__4425__auto__ = cljs.core.seq(s__20754__$1);
if(temp__4425__auto__){
var s__20754__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(s__20754__$2)){
var c__5331__auto__ = cljs.core.chunk_first(s__20754__$2);
var size__5332__auto__ = cljs.core.count(c__5331__auto__);
var b__20756 = cljs.core.chunk_buffer(size__5332__auto__);
if((function (){var i__20755 = (0);
while(true){
if((i__20755 < size__5332__auto__)){
var style = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__5331__auto__,i__20755);
cljs.core.chunk_append(b__20756,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$link,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$type,"text/css",cljs.core.cst$kw$href,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([style], 0)),cljs.core.cst$kw$rel,"stylesheet"], null)], null));

var G__20762 = (i__20755 + (1));
i__20755 = G__20762;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__20756),sablono$core$iter__20753(cljs.core.chunk_rest(s__20754__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__20756),null);
}
} else {
var style = cljs.core.first(s__20754__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$link,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$type,"text/css",cljs.core.cst$kw$href,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([style], 0)),cljs.core.cst$kw$rel,"stylesheet"], null)], null),sablono$core$iter__20753(cljs.core.rest(s__20754__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5333__auto__(styles);
});

sablono.core.include_css.cljs$lang$maxFixedArity = (0);

sablono.core.include_css.cljs$lang$applyTo = (function (seq20752){
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq20752));
});
/**
 * Include the JavaScript library at `src`.
 */
sablono.core.include_js = (function sablono$core$include_js(src){
var G__20767 = goog.dom.getDocument().body;
var G__20768 = (function (){var G__20769 = "script";
var G__20770 = {"src": src};
return goog.dom.createDom(G__20769,G__20770);
})();
return goog.dom.appendChild(G__20767,G__20768);
});
/**
 * Include Facebook's React JavaScript library.
 */
sablono.core.include_react = (function sablono$core$include_react(){
return sablono.core.include_js("http://fb.me/react-0.12.2.js");
});
/**
 * Wraps some content in a HTML hyperlink with the supplied URL.
 */
sablono.core.link_to20771 = (function sablono$core$link_to20771(var_args){
var args__5626__auto__ = [];
var len__5619__auto___20774 = arguments.length;
var i__5620__auto___20775 = (0);
while(true){
if((i__5620__auto___20775 < len__5619__auto___20774)){
args__5626__auto__.push((arguments[i__5620__auto___20775]));

var G__20776 = (i__5620__auto___20775 + (1));
i__5620__auto___20775 = G__20776;
continue;
} else {
}
break;
}

var argseq__5627__auto__ = ((((1) < args__5626__auto__.length))?(new cljs.core.IndexedSeq(args__5626__auto__.slice((1)),(0))):null);
return sablono.core.link_to20771.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5627__auto__);
});

sablono.core.link_to20771.cljs$core$IFn$_invoke$arity$variadic = (function (url,content){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$href,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([url], 0))], null),content], null);
});

sablono.core.link_to20771.cljs$lang$maxFixedArity = (1);

sablono.core.link_to20771.cljs$lang$applyTo = (function (seq20772){
var G__20773 = cljs.core.first(seq20772);
var seq20772__$1 = cljs.core.next(seq20772);
return sablono.core.link_to20771.cljs$core$IFn$_invoke$arity$variadic(G__20773,seq20772__$1);
});

sablono.core.link_to = sablono.core.wrap_attrs(sablono.core.link_to20771);
/**
 * Wraps some content in a HTML hyperlink with the supplied e-mail
 *   address. If no content provided use the e-mail address as content.
 */
sablono.core.mail_to20777 = (function sablono$core$mail_to20777(var_args){
var args__5626__auto__ = [];
var len__5619__auto___20782 = arguments.length;
var i__5620__auto___20783 = (0);
while(true){
if((i__5620__auto___20783 < len__5619__auto___20782)){
args__5626__auto__.push((arguments[i__5620__auto___20783]));

var G__20784 = (i__5620__auto___20783 + (1));
i__5620__auto___20783 = G__20784;
continue;
} else {
}
break;
}

var argseq__5627__auto__ = ((((1) < args__5626__auto__.length))?(new cljs.core.IndexedSeq(args__5626__auto__.slice((1)),(0))):null);
return sablono.core.mail_to20777.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5627__auto__);
});

sablono.core.mail_to20777.cljs$core$IFn$_invoke$arity$variadic = (function (e_mail,p__20780){
var vec__20781 = p__20780;
var content = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20781,(0),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$href,[cljs.core.str("mailto:"),cljs.core.str(e_mail)].join('')], null),(function (){var or__4561__auto__ = content;
if(cljs.core.truth_(or__4561__auto__)){
return or__4561__auto__;
} else {
return e_mail;
}
})()], null);
});

sablono.core.mail_to20777.cljs$lang$maxFixedArity = (1);

sablono.core.mail_to20777.cljs$lang$applyTo = (function (seq20778){
var G__20779 = cljs.core.first(seq20778);
var seq20778__$1 = cljs.core.next(seq20778);
return sablono.core.mail_to20777.cljs$core$IFn$_invoke$arity$variadic(G__20779,seq20778__$1);
});

sablono.core.mail_to = sablono.core.wrap_attrs(sablono.core.mail_to20777);
/**
 * Wrap a collection in an unordered list.
 */
sablono.core.unordered_list20785 = (function sablono$core$unordered_list20785(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ul,(function (){var iter__5333__auto__ = (function sablono$core$unordered_list20785_$_iter__20792(s__20793){
return (new cljs.core.LazySeq(null,(function (){
var s__20793__$1 = s__20793;
while(true){
var temp__4425__auto__ = cljs.core.seq(s__20793__$1);
if(temp__4425__auto__){
var s__20793__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(s__20793__$2)){
var c__5331__auto__ = cljs.core.chunk_first(s__20793__$2);
var size__5332__auto__ = cljs.core.count(c__5331__auto__);
var b__20795 = cljs.core.chunk_buffer(size__5332__auto__);
if((function (){var i__20794 = (0);
while(true){
if((i__20794 < size__5332__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__5331__auto__,i__20794);
cljs.core.chunk_append(b__20795,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,x], null));

var G__20798 = (i__20794 + (1));
i__20794 = G__20798;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__20795),sablono$core$unordered_list20785_$_iter__20792(cljs.core.chunk_rest(s__20793__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__20795),null);
}
} else {
var x = cljs.core.first(s__20793__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,x], null),sablono$core$unordered_list20785_$_iter__20792(cljs.core.rest(s__20793__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5333__auto__(coll);
})()], null);
});

sablono.core.unordered_list = sablono.core.wrap_attrs(sablono.core.unordered_list20785);
/**
 * Wrap a collection in an ordered list.
 */
sablono.core.ordered_list20799 = (function sablono$core$ordered_list20799(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ol,(function (){var iter__5333__auto__ = (function sablono$core$ordered_list20799_$_iter__20806(s__20807){
return (new cljs.core.LazySeq(null,(function (){
var s__20807__$1 = s__20807;
while(true){
var temp__4425__auto__ = cljs.core.seq(s__20807__$1);
if(temp__4425__auto__){
var s__20807__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(s__20807__$2)){
var c__5331__auto__ = cljs.core.chunk_first(s__20807__$2);
var size__5332__auto__ = cljs.core.count(c__5331__auto__);
var b__20809 = cljs.core.chunk_buffer(size__5332__auto__);
if((function (){var i__20808 = (0);
while(true){
if((i__20808 < size__5332__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__5331__auto__,i__20808);
cljs.core.chunk_append(b__20809,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,x], null));

var G__20812 = (i__20808 + (1));
i__20808 = G__20812;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__20809),sablono$core$ordered_list20799_$_iter__20806(cljs.core.chunk_rest(s__20807__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__20809),null);
}
} else {
var x = cljs.core.first(s__20807__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,x], null),sablono$core$ordered_list20799_$_iter__20806(cljs.core.rest(s__20807__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5333__auto__(coll);
})()], null);
});

sablono.core.ordered_list = sablono.core.wrap_attrs(sablono.core.ordered_list20799);
/**
 * Create an image element.
 */
sablono.core.image20813 = (function sablono$core$image20813(var_args){
var args20814 = [];
var len__5619__auto___20817 = arguments.length;
var i__5620__auto___20818 = (0);
while(true){
if((i__5620__auto___20818 < len__5619__auto___20817)){
args20814.push((arguments[i__5620__auto___20818]));

var G__20819 = (i__5620__auto___20818 + (1));
i__5620__auto___20818 = G__20819;
continue;
} else {
}
break;
}

var G__20816 = args20814.length;
switch (G__20816) {
case 1:
return sablono.core.image20813.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.image20813.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20814.length)].join('')));

}
});

sablono.core.image20813.cljs$core$IFn$_invoke$arity$1 = (function (src){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$img,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$src,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([src], 0))], null)], null);
});

sablono.core.image20813.cljs$core$IFn$_invoke$arity$2 = (function (src,alt){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$img,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$src,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([src], 0)),cljs.core.cst$kw$alt,alt], null)], null);
});

sablono.core.image20813.cljs$lang$maxFixedArity = 2;

sablono.core.image = sablono.core.wrap_attrs(sablono.core.image20813);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
 * Create a field name from the supplied argument the current field group.
 */
sablono.core.make_name = (function sablono$core$make_name(name){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (p1__20821_SHARP_,p2__20822_SHARP_){
return [cljs.core.str(p1__20821_SHARP_),cljs.core.str("["),cljs.core.str(p2__20822_SHARP_),cljs.core.str("]")].join('');
}),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(sablono.core._STAR_group_STAR_,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([name], 0))));
});
/**
 * Create a field id from the supplied argument and current field group.
 */
sablono.core.make_id = (function sablono$core$make_id(name){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (p1__20823_SHARP_,p2__20824_SHARP_){
return [cljs.core.str(p1__20823_SHARP_),cljs.core.str("-"),cljs.core.str(p2__20824_SHARP_)].join('');
}),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(sablono.core._STAR_group_STAR_,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([name], 0))));
});
/**
 * Creates a new <input> element.
 */
sablono.core.input_field_STAR_ = (function sablono$core$input_field_STAR_(type,name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,type,cljs.core.cst$kw$name,sablono.core.make_name(name),cljs.core.cst$kw$id,sablono.core.make_id(name),cljs.core.cst$kw$value,value], null)], null);
});
/**
 * Creates a color input field.
 */
sablono.core.color_field20825 = (function sablono$core$color_field20825(var_args){
var args20826 = [];
var len__5619__auto___20893 = arguments.length;
var i__5620__auto___20894 = (0);
while(true){
if((i__5620__auto___20894 < len__5619__auto___20893)){
args20826.push((arguments[i__5620__auto___20894]));

var G__20895 = (i__5620__auto___20894 + (1));
i__5620__auto___20894 = G__20895;
continue;
} else {
}
break;
}

var G__20828 = args20826.length;
switch (G__20828) {
case 1:
return sablono.core.color_field20825.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.color_field20825.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20826.length)].join('')));

}
});

sablono.core.color_field20825.cljs$core$IFn$_invoke$arity$1 = (function (name__11958__auto__){
return sablono.core.color_field20825.cljs$core$IFn$_invoke$arity$2(name__11958__auto__,null);
});

sablono.core.color_field20825.cljs$core$IFn$_invoke$arity$2 = (function (name__11958__auto__,value__11959__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$color)].join(''),name__11958__auto__,value__11959__auto__);
});

sablono.core.color_field20825.cljs$lang$maxFixedArity = 2;

sablono.core.color_field = sablono.core.wrap_attrs(sablono.core.color_field20825);

/**
 * Creates a date input field.
 */
sablono.core.date_field20829 = (function sablono$core$date_field20829(var_args){
var args20830 = [];
var len__5619__auto___20897 = arguments.length;
var i__5620__auto___20898 = (0);
while(true){
if((i__5620__auto___20898 < len__5619__auto___20897)){
args20830.push((arguments[i__5620__auto___20898]));

var G__20899 = (i__5620__auto___20898 + (1));
i__5620__auto___20898 = G__20899;
continue;
} else {
}
break;
}

var G__20832 = args20830.length;
switch (G__20832) {
case 1:
return sablono.core.date_field20829.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.date_field20829.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20830.length)].join('')));

}
});

sablono.core.date_field20829.cljs$core$IFn$_invoke$arity$1 = (function (name__11958__auto__){
return sablono.core.date_field20829.cljs$core$IFn$_invoke$arity$2(name__11958__auto__,null);
});

sablono.core.date_field20829.cljs$core$IFn$_invoke$arity$2 = (function (name__11958__auto__,value__11959__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$date)].join(''),name__11958__auto__,value__11959__auto__);
});

sablono.core.date_field20829.cljs$lang$maxFixedArity = 2;

sablono.core.date_field = sablono.core.wrap_attrs(sablono.core.date_field20829);

/**
 * Creates a datetime input field.
 */
sablono.core.datetime_field20833 = (function sablono$core$datetime_field20833(var_args){
var args20834 = [];
var len__5619__auto___20901 = arguments.length;
var i__5620__auto___20902 = (0);
while(true){
if((i__5620__auto___20902 < len__5619__auto___20901)){
args20834.push((arguments[i__5620__auto___20902]));

var G__20903 = (i__5620__auto___20902 + (1));
i__5620__auto___20902 = G__20903;
continue;
} else {
}
break;
}

var G__20836 = args20834.length;
switch (G__20836) {
case 1:
return sablono.core.datetime_field20833.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_field20833.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20834.length)].join('')));

}
});

sablono.core.datetime_field20833.cljs$core$IFn$_invoke$arity$1 = (function (name__11958__auto__){
return sablono.core.datetime_field20833.cljs$core$IFn$_invoke$arity$2(name__11958__auto__,null);
});

sablono.core.datetime_field20833.cljs$core$IFn$_invoke$arity$2 = (function (name__11958__auto__,value__11959__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$datetime)].join(''),name__11958__auto__,value__11959__auto__);
});

sablono.core.datetime_field20833.cljs$lang$maxFixedArity = 2;

sablono.core.datetime_field = sablono.core.wrap_attrs(sablono.core.datetime_field20833);

/**
 * Creates a datetime-local input field.
 */
sablono.core.datetime_local_field20837 = (function sablono$core$datetime_local_field20837(var_args){
var args20838 = [];
var len__5619__auto___20905 = arguments.length;
var i__5620__auto___20906 = (0);
while(true){
if((i__5620__auto___20906 < len__5619__auto___20905)){
args20838.push((arguments[i__5620__auto___20906]));

var G__20907 = (i__5620__auto___20906 + (1));
i__5620__auto___20906 = G__20907;
continue;
} else {
}
break;
}

var G__20840 = args20838.length;
switch (G__20840) {
case 1:
return sablono.core.datetime_local_field20837.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_local_field20837.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20838.length)].join('')));

}
});

sablono.core.datetime_local_field20837.cljs$core$IFn$_invoke$arity$1 = (function (name__11958__auto__){
return sablono.core.datetime_local_field20837.cljs$core$IFn$_invoke$arity$2(name__11958__auto__,null);
});

sablono.core.datetime_local_field20837.cljs$core$IFn$_invoke$arity$2 = (function (name__11958__auto__,value__11959__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$datetime_DASH_local)].join(''),name__11958__auto__,value__11959__auto__);
});

sablono.core.datetime_local_field20837.cljs$lang$maxFixedArity = 2;

sablono.core.datetime_local_field = sablono.core.wrap_attrs(sablono.core.datetime_local_field20837);

/**
 * Creates a email input field.
 */
sablono.core.email_field20841 = (function sablono$core$email_field20841(var_args){
var args20842 = [];
var len__5619__auto___20909 = arguments.length;
var i__5620__auto___20910 = (0);
while(true){
if((i__5620__auto___20910 < len__5619__auto___20909)){
args20842.push((arguments[i__5620__auto___20910]));

var G__20911 = (i__5620__auto___20910 + (1));
i__5620__auto___20910 = G__20911;
continue;
} else {
}
break;
}

var G__20844 = args20842.length;
switch (G__20844) {
case 1:
return sablono.core.email_field20841.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.email_field20841.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20842.length)].join('')));

}
});

sablono.core.email_field20841.cljs$core$IFn$_invoke$arity$1 = (function (name__11958__auto__){
return sablono.core.email_field20841.cljs$core$IFn$_invoke$arity$2(name__11958__auto__,null);
});

sablono.core.email_field20841.cljs$core$IFn$_invoke$arity$2 = (function (name__11958__auto__,value__11959__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$email)].join(''),name__11958__auto__,value__11959__auto__);
});

sablono.core.email_field20841.cljs$lang$maxFixedArity = 2;

sablono.core.email_field = sablono.core.wrap_attrs(sablono.core.email_field20841);

/**
 * Creates a file input field.
 */
sablono.core.file_field20845 = (function sablono$core$file_field20845(var_args){
var args20846 = [];
var len__5619__auto___20913 = arguments.length;
var i__5620__auto___20914 = (0);
while(true){
if((i__5620__auto___20914 < len__5619__auto___20913)){
args20846.push((arguments[i__5620__auto___20914]));

var G__20915 = (i__5620__auto___20914 + (1));
i__5620__auto___20914 = G__20915;
continue;
} else {
}
break;
}

var G__20848 = args20846.length;
switch (G__20848) {
case 1:
return sablono.core.file_field20845.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.file_field20845.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20846.length)].join('')));

}
});

sablono.core.file_field20845.cljs$core$IFn$_invoke$arity$1 = (function (name__11958__auto__){
return sablono.core.file_field20845.cljs$core$IFn$_invoke$arity$2(name__11958__auto__,null);
});

sablono.core.file_field20845.cljs$core$IFn$_invoke$arity$2 = (function (name__11958__auto__,value__11959__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$file)].join(''),name__11958__auto__,value__11959__auto__);
});

sablono.core.file_field20845.cljs$lang$maxFixedArity = 2;

sablono.core.file_field = sablono.core.wrap_attrs(sablono.core.file_field20845);

/**
 * Creates a hidden input field.
 */
sablono.core.hidden_field20849 = (function sablono$core$hidden_field20849(var_args){
var args20850 = [];
var len__5619__auto___20917 = arguments.length;
var i__5620__auto___20918 = (0);
while(true){
if((i__5620__auto___20918 < len__5619__auto___20917)){
args20850.push((arguments[i__5620__auto___20918]));

var G__20919 = (i__5620__auto___20918 + (1));
i__5620__auto___20918 = G__20919;
continue;
} else {
}
break;
}

var G__20852 = args20850.length;
switch (G__20852) {
case 1:
return sablono.core.hidden_field20849.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.hidden_field20849.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20850.length)].join('')));

}
});

sablono.core.hidden_field20849.cljs$core$IFn$_invoke$arity$1 = (function (name__11958__auto__){
return sablono.core.hidden_field20849.cljs$core$IFn$_invoke$arity$2(name__11958__auto__,null);
});

sablono.core.hidden_field20849.cljs$core$IFn$_invoke$arity$2 = (function (name__11958__auto__,value__11959__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$hidden)].join(''),name__11958__auto__,value__11959__auto__);
});

sablono.core.hidden_field20849.cljs$lang$maxFixedArity = 2;

sablono.core.hidden_field = sablono.core.wrap_attrs(sablono.core.hidden_field20849);

/**
 * Creates a month input field.
 */
sablono.core.month_field20853 = (function sablono$core$month_field20853(var_args){
var args20854 = [];
var len__5619__auto___20921 = arguments.length;
var i__5620__auto___20922 = (0);
while(true){
if((i__5620__auto___20922 < len__5619__auto___20921)){
args20854.push((arguments[i__5620__auto___20922]));

var G__20923 = (i__5620__auto___20922 + (1));
i__5620__auto___20922 = G__20923;
continue;
} else {
}
break;
}

var G__20856 = args20854.length;
switch (G__20856) {
case 1:
return sablono.core.month_field20853.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.month_field20853.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20854.length)].join('')));

}
});

sablono.core.month_field20853.cljs$core$IFn$_invoke$arity$1 = (function (name__11958__auto__){
return sablono.core.month_field20853.cljs$core$IFn$_invoke$arity$2(name__11958__auto__,null);
});

sablono.core.month_field20853.cljs$core$IFn$_invoke$arity$2 = (function (name__11958__auto__,value__11959__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$month)].join(''),name__11958__auto__,value__11959__auto__);
});

sablono.core.month_field20853.cljs$lang$maxFixedArity = 2;

sablono.core.month_field = sablono.core.wrap_attrs(sablono.core.month_field20853);

/**
 * Creates a number input field.
 */
sablono.core.number_field20857 = (function sablono$core$number_field20857(var_args){
var args20858 = [];
var len__5619__auto___20925 = arguments.length;
var i__5620__auto___20926 = (0);
while(true){
if((i__5620__auto___20926 < len__5619__auto___20925)){
args20858.push((arguments[i__5620__auto___20926]));

var G__20927 = (i__5620__auto___20926 + (1));
i__5620__auto___20926 = G__20927;
continue;
} else {
}
break;
}

var G__20860 = args20858.length;
switch (G__20860) {
case 1:
return sablono.core.number_field20857.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.number_field20857.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20858.length)].join('')));

}
});

sablono.core.number_field20857.cljs$core$IFn$_invoke$arity$1 = (function (name__11958__auto__){
return sablono.core.number_field20857.cljs$core$IFn$_invoke$arity$2(name__11958__auto__,null);
});

sablono.core.number_field20857.cljs$core$IFn$_invoke$arity$2 = (function (name__11958__auto__,value__11959__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$number)].join(''),name__11958__auto__,value__11959__auto__);
});

sablono.core.number_field20857.cljs$lang$maxFixedArity = 2;

sablono.core.number_field = sablono.core.wrap_attrs(sablono.core.number_field20857);

/**
 * Creates a password input field.
 */
sablono.core.password_field20861 = (function sablono$core$password_field20861(var_args){
var args20862 = [];
var len__5619__auto___20929 = arguments.length;
var i__5620__auto___20930 = (0);
while(true){
if((i__5620__auto___20930 < len__5619__auto___20929)){
args20862.push((arguments[i__5620__auto___20930]));

var G__20931 = (i__5620__auto___20930 + (1));
i__5620__auto___20930 = G__20931;
continue;
} else {
}
break;
}

var G__20864 = args20862.length;
switch (G__20864) {
case 1:
return sablono.core.password_field20861.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.password_field20861.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20862.length)].join('')));

}
});

sablono.core.password_field20861.cljs$core$IFn$_invoke$arity$1 = (function (name__11958__auto__){
return sablono.core.password_field20861.cljs$core$IFn$_invoke$arity$2(name__11958__auto__,null);
});

sablono.core.password_field20861.cljs$core$IFn$_invoke$arity$2 = (function (name__11958__auto__,value__11959__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$password)].join(''),name__11958__auto__,value__11959__auto__);
});

sablono.core.password_field20861.cljs$lang$maxFixedArity = 2;

sablono.core.password_field = sablono.core.wrap_attrs(sablono.core.password_field20861);

/**
 * Creates a range input field.
 */
sablono.core.range_field20865 = (function sablono$core$range_field20865(var_args){
var args20866 = [];
var len__5619__auto___20933 = arguments.length;
var i__5620__auto___20934 = (0);
while(true){
if((i__5620__auto___20934 < len__5619__auto___20933)){
args20866.push((arguments[i__5620__auto___20934]));

var G__20935 = (i__5620__auto___20934 + (1));
i__5620__auto___20934 = G__20935;
continue;
} else {
}
break;
}

var G__20868 = args20866.length;
switch (G__20868) {
case 1:
return sablono.core.range_field20865.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.range_field20865.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20866.length)].join('')));

}
});

sablono.core.range_field20865.cljs$core$IFn$_invoke$arity$1 = (function (name__11958__auto__){
return sablono.core.range_field20865.cljs$core$IFn$_invoke$arity$2(name__11958__auto__,null);
});

sablono.core.range_field20865.cljs$core$IFn$_invoke$arity$2 = (function (name__11958__auto__,value__11959__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$range)].join(''),name__11958__auto__,value__11959__auto__);
});

sablono.core.range_field20865.cljs$lang$maxFixedArity = 2;

sablono.core.range_field = sablono.core.wrap_attrs(sablono.core.range_field20865);

/**
 * Creates a search input field.
 */
sablono.core.search_field20869 = (function sablono$core$search_field20869(var_args){
var args20870 = [];
var len__5619__auto___20937 = arguments.length;
var i__5620__auto___20938 = (0);
while(true){
if((i__5620__auto___20938 < len__5619__auto___20937)){
args20870.push((arguments[i__5620__auto___20938]));

var G__20939 = (i__5620__auto___20938 + (1));
i__5620__auto___20938 = G__20939;
continue;
} else {
}
break;
}

var G__20872 = args20870.length;
switch (G__20872) {
case 1:
return sablono.core.search_field20869.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.search_field20869.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20870.length)].join('')));

}
});

sablono.core.search_field20869.cljs$core$IFn$_invoke$arity$1 = (function (name__11958__auto__){
return sablono.core.search_field20869.cljs$core$IFn$_invoke$arity$2(name__11958__auto__,null);
});

sablono.core.search_field20869.cljs$core$IFn$_invoke$arity$2 = (function (name__11958__auto__,value__11959__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$search)].join(''),name__11958__auto__,value__11959__auto__);
});

sablono.core.search_field20869.cljs$lang$maxFixedArity = 2;

sablono.core.search_field = sablono.core.wrap_attrs(sablono.core.search_field20869);

/**
 * Creates a tel input field.
 */
sablono.core.tel_field20873 = (function sablono$core$tel_field20873(var_args){
var args20874 = [];
var len__5619__auto___20941 = arguments.length;
var i__5620__auto___20942 = (0);
while(true){
if((i__5620__auto___20942 < len__5619__auto___20941)){
args20874.push((arguments[i__5620__auto___20942]));

var G__20943 = (i__5620__auto___20942 + (1));
i__5620__auto___20942 = G__20943;
continue;
} else {
}
break;
}

var G__20876 = args20874.length;
switch (G__20876) {
case 1:
return sablono.core.tel_field20873.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.tel_field20873.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20874.length)].join('')));

}
});

sablono.core.tel_field20873.cljs$core$IFn$_invoke$arity$1 = (function (name__11958__auto__){
return sablono.core.tel_field20873.cljs$core$IFn$_invoke$arity$2(name__11958__auto__,null);
});

sablono.core.tel_field20873.cljs$core$IFn$_invoke$arity$2 = (function (name__11958__auto__,value__11959__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$tel)].join(''),name__11958__auto__,value__11959__auto__);
});

sablono.core.tel_field20873.cljs$lang$maxFixedArity = 2;

sablono.core.tel_field = sablono.core.wrap_attrs(sablono.core.tel_field20873);

/**
 * Creates a text input field.
 */
sablono.core.text_field20877 = (function sablono$core$text_field20877(var_args){
var args20878 = [];
var len__5619__auto___20945 = arguments.length;
var i__5620__auto___20946 = (0);
while(true){
if((i__5620__auto___20946 < len__5619__auto___20945)){
args20878.push((arguments[i__5620__auto___20946]));

var G__20947 = (i__5620__auto___20946 + (1));
i__5620__auto___20946 = G__20947;
continue;
} else {
}
break;
}

var G__20880 = args20878.length;
switch (G__20880) {
case 1:
return sablono.core.text_field20877.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_field20877.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20878.length)].join('')));

}
});

sablono.core.text_field20877.cljs$core$IFn$_invoke$arity$1 = (function (name__11958__auto__){
return sablono.core.text_field20877.cljs$core$IFn$_invoke$arity$2(name__11958__auto__,null);
});

sablono.core.text_field20877.cljs$core$IFn$_invoke$arity$2 = (function (name__11958__auto__,value__11959__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$text)].join(''),name__11958__auto__,value__11959__auto__);
});

sablono.core.text_field20877.cljs$lang$maxFixedArity = 2;

sablono.core.text_field = sablono.core.wrap_attrs(sablono.core.text_field20877);

/**
 * Creates a time input field.
 */
sablono.core.time_field20881 = (function sablono$core$time_field20881(var_args){
var args20882 = [];
var len__5619__auto___20949 = arguments.length;
var i__5620__auto___20950 = (0);
while(true){
if((i__5620__auto___20950 < len__5619__auto___20949)){
args20882.push((arguments[i__5620__auto___20950]));

var G__20951 = (i__5620__auto___20950 + (1));
i__5620__auto___20950 = G__20951;
continue;
} else {
}
break;
}

var G__20884 = args20882.length;
switch (G__20884) {
case 1:
return sablono.core.time_field20881.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.time_field20881.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20882.length)].join('')));

}
});

sablono.core.time_field20881.cljs$core$IFn$_invoke$arity$1 = (function (name__11958__auto__){
return sablono.core.time_field20881.cljs$core$IFn$_invoke$arity$2(name__11958__auto__,null);
});

sablono.core.time_field20881.cljs$core$IFn$_invoke$arity$2 = (function (name__11958__auto__,value__11959__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$time)].join(''),name__11958__auto__,value__11959__auto__);
});

sablono.core.time_field20881.cljs$lang$maxFixedArity = 2;

sablono.core.time_field = sablono.core.wrap_attrs(sablono.core.time_field20881);

/**
 * Creates a url input field.
 */
sablono.core.url_field20885 = (function sablono$core$url_field20885(var_args){
var args20886 = [];
var len__5619__auto___20953 = arguments.length;
var i__5620__auto___20954 = (0);
while(true){
if((i__5620__auto___20954 < len__5619__auto___20953)){
args20886.push((arguments[i__5620__auto___20954]));

var G__20955 = (i__5620__auto___20954 + (1));
i__5620__auto___20954 = G__20955;
continue;
} else {
}
break;
}

var G__20888 = args20886.length;
switch (G__20888) {
case 1:
return sablono.core.url_field20885.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.url_field20885.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20886.length)].join('')));

}
});

sablono.core.url_field20885.cljs$core$IFn$_invoke$arity$1 = (function (name__11958__auto__){
return sablono.core.url_field20885.cljs$core$IFn$_invoke$arity$2(name__11958__auto__,null);
});

sablono.core.url_field20885.cljs$core$IFn$_invoke$arity$2 = (function (name__11958__auto__,value__11959__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$url)].join(''),name__11958__auto__,value__11959__auto__);
});

sablono.core.url_field20885.cljs$lang$maxFixedArity = 2;

sablono.core.url_field = sablono.core.wrap_attrs(sablono.core.url_field20885);

/**
 * Creates a week input field.
 */
sablono.core.week_field20889 = (function sablono$core$week_field20889(var_args){
var args20890 = [];
var len__5619__auto___20957 = arguments.length;
var i__5620__auto___20958 = (0);
while(true){
if((i__5620__auto___20958 < len__5619__auto___20957)){
args20890.push((arguments[i__5620__auto___20958]));

var G__20959 = (i__5620__auto___20958 + (1));
i__5620__auto___20958 = G__20959;
continue;
} else {
}
break;
}

var G__20892 = args20890.length;
switch (G__20892) {
case 1:
return sablono.core.week_field20889.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.week_field20889.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20890.length)].join('')));

}
});

sablono.core.week_field20889.cljs$core$IFn$_invoke$arity$1 = (function (name__11958__auto__){
return sablono.core.week_field20889.cljs$core$IFn$_invoke$arity$2(name__11958__auto__,null);
});

sablono.core.week_field20889.cljs$core$IFn$_invoke$arity$2 = (function (name__11958__auto__,value__11959__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$week)].join(''),name__11958__auto__,value__11959__auto__);
});

sablono.core.week_field20889.cljs$lang$maxFixedArity = 2;

sablono.core.week_field = sablono.core.wrap_attrs(sablono.core.week_field20889);
sablono.core.file_upload = sablono.core.file_field;
/**
 * Creates a check box.
 */
sablono.core.check_box20961 = (function sablono$core$check_box20961(var_args){
var args20962 = [];
var len__5619__auto___20965 = arguments.length;
var i__5620__auto___20966 = (0);
while(true){
if((i__5620__auto___20966 < len__5619__auto___20965)){
args20962.push((arguments[i__5620__auto___20966]));

var G__20967 = (i__5620__auto___20966 + (1));
i__5620__auto___20966 = G__20967;
continue;
} else {
}
break;
}

var G__20964 = args20962.length;
switch (G__20964) {
case 1:
return sablono.core.check_box20961.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.check_box20961.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.check_box20961.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20962.length)].join('')));

}
});

sablono.core.check_box20961.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.check_box20961.cljs$core$IFn$_invoke$arity$2(name,null);
});

sablono.core.check_box20961.cljs$core$IFn$_invoke$arity$2 = (function (name,checked_QMARK_){
return sablono.core.check_box20961.cljs$core$IFn$_invoke$arity$3(name,checked_QMARK_,"true");
});

sablono.core.check_box20961.cljs$core$IFn$_invoke$arity$3 = (function (name,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$type,"checkbox",cljs.core.cst$kw$name,sablono.core.make_name(name),cljs.core.cst$kw$id,sablono.core.make_id(name),cljs.core.cst$kw$value,value,cljs.core.cst$kw$checked,checked_QMARK_], null)], null);
});

sablono.core.check_box20961.cljs$lang$maxFixedArity = 3;

sablono.core.check_box = sablono.core.wrap_attrs(sablono.core.check_box20961);
/**
 * Creates a radio button.
 */
sablono.core.radio_button20969 = (function sablono$core$radio_button20969(var_args){
var args20970 = [];
var len__5619__auto___20973 = arguments.length;
var i__5620__auto___20974 = (0);
while(true){
if((i__5620__auto___20974 < len__5619__auto___20973)){
args20970.push((arguments[i__5620__auto___20974]));

var G__20975 = (i__5620__auto___20974 + (1));
i__5620__auto___20974 = G__20975;
continue;
} else {
}
break;
}

var G__20972 = args20970.length;
switch (G__20972) {
case 1:
return sablono.core.radio_button20969.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.radio_button20969.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.radio_button20969.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20970.length)].join('')));

}
});

sablono.core.radio_button20969.cljs$core$IFn$_invoke$arity$1 = (function (group){
return sablono.core.radio_button20969.cljs$core$IFn$_invoke$arity$2(group,null);
});

sablono.core.radio_button20969.cljs$core$IFn$_invoke$arity$2 = (function (group,checked_QMARK_){
return sablono.core.radio_button20969.cljs$core$IFn$_invoke$arity$3(group,checked_QMARK_,"true");
});

sablono.core.radio_button20969.cljs$core$IFn$_invoke$arity$3 = (function (group,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$type,"radio",cljs.core.cst$kw$name,sablono.core.make_name(group),cljs.core.cst$kw$id,sablono.core.make_id([cljs.core.str(sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([group], 0))),cljs.core.str("-"),cljs.core.str(sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([value], 0)))].join('')),cljs.core.cst$kw$value,value,cljs.core.cst$kw$checked,checked_QMARK_], null)], null);
});

sablono.core.radio_button20969.cljs$lang$maxFixedArity = 3;

sablono.core.radio_button = sablono.core.wrap_attrs(sablono.core.radio_button20969);
sablono.core.hash_key = (function sablono$core$hash_key(x){
var G__20978 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([x], 0));
return goog.string.hashCode(G__20978);
});
/**
 * Creates a seq of option tags from a collection.
 */
sablono.core.select_options20979 = (function sablono$core$select_options20979(coll){
var iter__5333__auto__ = (function sablono$core$select_options20979_$_iter__20990(s__20991){
return (new cljs.core.LazySeq(null,(function (){
var s__20991__$1 = s__20991;
while(true){
var temp__4425__auto__ = cljs.core.seq(s__20991__$1);
if(temp__4425__auto__){
var s__20991__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(s__20991__$2)){
var c__5331__auto__ = cljs.core.chunk_first(s__20991__$2);
var size__5332__auto__ = cljs.core.count(c__5331__auto__);
var b__20993 = cljs.core.chunk_buffer(size__5332__auto__);
if((function (){var i__20992 = (0);
while(true){
if((i__20992 < size__5332__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__5331__auto__,i__20992);
cljs.core.chunk_append(b__20993,((cljs.core.sequential_QMARK_(x))?(function (){var vec__20998 = x;
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20998,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20998,(1),null);
var disabled_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20998,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$(disabled_QMARK_);
if(cljs.core.sequential_QMARK_(val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$optgroup,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$key,sablono.core.hash_key(text),cljs.core.cst$kw$label,text], null),sablono$core$select_options20979(val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$option,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$disabled,disabled_QMARK___$1,cljs.core.cst$kw$key,sablono.core.hash_key(val),cljs.core.cst$kw$value,val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$option,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$key,sablono.core.hash_key(x),cljs.core.cst$kw$value,x], null),x], null)));

var G__21000 = (i__20992 + (1));
i__20992 = G__21000;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__20993),sablono$core$select_options20979_$_iter__20990(cljs.core.chunk_rest(s__20991__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__20993),null);
}
} else {
var x = cljs.core.first(s__20991__$2);
return cljs.core.cons(((cljs.core.sequential_QMARK_(x))?(function (){var vec__20999 = x;
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20999,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20999,(1),null);
var disabled_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20999,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$(disabled_QMARK_);
if(cljs.core.sequential_QMARK_(val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$optgroup,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$key,sablono.core.hash_key(text),cljs.core.cst$kw$label,text], null),sablono$core$select_options20979(val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$option,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$disabled,disabled_QMARK___$1,cljs.core.cst$kw$key,sablono.core.hash_key(val),cljs.core.cst$kw$value,val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$option,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$key,sablono.core.hash_key(x),cljs.core.cst$kw$value,x], null),x], null)),sablono$core$select_options20979_$_iter__20990(cljs.core.rest(s__20991__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5333__auto__(coll);
});

sablono.core.select_options = sablono.core.wrap_attrs(sablono.core.select_options20979);
/**
 * Creates a drop-down box using the <select> tag.
 */
sablono.core.drop_down21001 = (function sablono$core$drop_down21001(var_args){
var args21002 = [];
var len__5619__auto___21005 = arguments.length;
var i__5620__auto___21006 = (0);
while(true){
if((i__5620__auto___21006 < len__5619__auto___21005)){
args21002.push((arguments[i__5620__auto___21006]));

var G__21007 = (i__5620__auto___21006 + (1));
i__5620__auto___21006 = G__21007;
continue;
} else {
}
break;
}

var G__21004 = args21002.length;
switch (G__21004) {
case 2:
return sablono.core.drop_down21001.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.drop_down21001.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21002.length)].join('')));

}
});

sablono.core.drop_down21001.cljs$core$IFn$_invoke$arity$2 = (function (name,options){
return sablono.core.drop_down21001.cljs$core$IFn$_invoke$arity$3(name,options,null);
});

sablono.core.drop_down21001.cljs$core$IFn$_invoke$arity$3 = (function (name,options,selected){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$select,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,sablono.core.make_name(name),cljs.core.cst$kw$id,sablono.core.make_id(name)], null),(sablono.core.select_options.cljs$core$IFn$_invoke$arity$2 ? sablono.core.select_options.cljs$core$IFn$_invoke$arity$2(options,selected) : sablono.core.select_options.call(null,options,selected))], null);
});

sablono.core.drop_down21001.cljs$lang$maxFixedArity = 3;

sablono.core.drop_down = sablono.core.wrap_attrs(sablono.core.drop_down21001);
/**
 * Creates a text area element.
 */
sablono.core.text_area21009 = (function sablono$core$text_area21009(var_args){
var args21010 = [];
var len__5619__auto___21013 = arguments.length;
var i__5620__auto___21014 = (0);
while(true){
if((i__5620__auto___21014 < len__5619__auto___21013)){
args21010.push((arguments[i__5620__auto___21014]));

var G__21015 = (i__5620__auto___21014 + (1));
i__5620__auto___21014 = G__21015;
continue;
} else {
}
break;
}

var G__21012 = args21010.length;
switch (G__21012) {
case 1:
return sablono.core.text_area21009.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_area21009.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21010.length)].join('')));

}
});

sablono.core.text_area21009.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.text_area21009.cljs$core$IFn$_invoke$arity$2(name,null);
});

sablono.core.text_area21009.cljs$core$IFn$_invoke$arity$2 = (function (name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$textarea,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$name,sablono.core.make_name(name),cljs.core.cst$kw$id,sablono.core.make_id(name),cljs.core.cst$kw$value,value], null)], null);
});

sablono.core.text_area21009.cljs$lang$maxFixedArity = 2;

sablono.core.text_area = sablono.core.wrap_attrs(sablono.core.text_area21009);
/**
 * Creates a label for an input field with the supplied name.
 */
sablono.core.label21017 = (function sablono$core$label21017(name,text){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$label,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$htmlFor,sablono.core.make_id(name)], null),text], null);
});

sablono.core.label = sablono.core.wrap_attrs(sablono.core.label21017);
/**
 * Creates a submit button.
 */
sablono.core.submit_button21018 = (function sablono$core$submit_button21018(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,"submit",cljs.core.cst$kw$value,text], null)], null);
});

sablono.core.submit_button = sablono.core.wrap_attrs(sablono.core.submit_button21018);
/**
 * Creates a form reset button.
 */
sablono.core.reset_button21019 = (function sablono$core$reset_button21019(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,"reset",cljs.core.cst$kw$value,text], null)], null);
});

sablono.core.reset_button = sablono.core.wrap_attrs(sablono.core.reset_button21019);
/**
 * Create a form that points to a particular method and route.
 *   e.g. (form-to [:put "/post"]
 *       ...)
 */
sablono.core.form_to21020 = (function sablono$core$form_to21020(var_args){
var args__5626__auto__ = [];
var len__5619__auto___21028 = arguments.length;
var i__5620__auto___21029 = (0);
while(true){
if((i__5620__auto___21029 < len__5619__auto___21028)){
args__5626__auto__.push((arguments[i__5620__auto___21029]));

var G__21030 = (i__5620__auto___21029 + (1));
i__5620__auto___21029 = G__21030;
continue;
} else {
}
break;
}

var argseq__5627__auto__ = ((((1) < args__5626__auto__.length))?(new cljs.core.IndexedSeq(args__5626__auto__.slice((1)),(0))):null);
return sablono.core.form_to21020.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5627__auto__);
});

sablono.core.form_to21020.cljs$core$IFn$_invoke$arity$variadic = (function (p__21023,body){
var vec__21024 = p__21023;
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21024,(0),null);
var action = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21024,(1),null);
var method_str = clojure.string.upper_case(cljs.core.name(method));
var action_uri = sablono.util.to_uri(action);
return cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$get,null,cljs.core.cst$kw$post,null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$form,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$method,method_str,cljs.core.cst$kw$action,action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$form,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$method,"POST",cljs.core.cst$kw$action,action_uri], null),(function (){var G__21025 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,(3735928559)], null);
var G__21026 = "_method";
var G__21027 = method_str;
return (sablono.core.hidden_field.cljs$core$IFn$_invoke$arity$3 ? sablono.core.hidden_field.cljs$core$IFn$_invoke$arity$3(G__21025,G__21026,G__21027) : sablono.core.hidden_field.call(null,G__21025,G__21026,G__21027));
})()], null)),body));
});

sablono.core.form_to21020.cljs$lang$maxFixedArity = (1);

sablono.core.form_to21020.cljs$lang$applyTo = (function (seq21021){
var G__21022 = cljs.core.first(seq21021);
var seq21021__$1 = cljs.core.next(seq21021);
return sablono.core.form_to21020.cljs$core$IFn$_invoke$arity$variadic(G__21022,seq21021__$1);
});

sablono.core.form_to = sablono.core.wrap_attrs(sablono.core.form_to21020);
