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
var G__20783__delegate = function (args){
if(cljs.core.map_QMARK_(cljs.core.first(args))){
var vec__20782 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,cljs.core.rest(args));
var tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20782,(0),null);
var body = cljs.core.nthnext(vec__20782,(1));
if(cljs.core.map_QMARK_(cljs.core.first(body))){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.vector,tag,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.first(body),cljs.core.first(args)], 0)),cljs.core.rest(body));
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.vector,tag,cljs.core.first(args),body);
}
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,args);
}
};
var G__20783 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__20784__i = 0, G__20784__a = new Array(arguments.length -  0);
while (G__20784__i < G__20784__a.length) {G__20784__a[G__20784__i] = arguments[G__20784__i + 0]; ++G__20784__i;}
  args = new cljs.core.IndexedSeq(G__20784__a,0);
} 
return G__20783__delegate.call(this,args);};
G__20783.cljs$lang$maxFixedArity = 0;
G__20783.cljs$lang$applyTo = (function (arglist__20785){
var args = cljs.core.seq(arglist__20785);
return G__20783__delegate(args);
});
G__20783.cljs$core$IFn$_invoke$arity$variadic = G__20783__delegate;
return G__20783;
})()
;
});
sablono.core.update_arglists = (function sablono$core$update_arglists(arglists){
var iter__5333__auto__ = (function sablono$core$update_arglists_$_iter__20792(s__20793){
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
var args = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__5331__auto__,i__20794);
cljs.core.chunk_append(b__20795,cljs.core.vec(cljs.core.cons(cljs.core.cst$sym$attr_DASH_map_QMARK_,args)));

var G__20798 = (i__20794 + (1));
i__20794 = G__20798;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__20795),sablono$core$update_arglists_$_iter__20792(cljs.core.chunk_rest(s__20793__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__20795),null);
}
} else {
var args = cljs.core.first(s__20793__$2);
return cljs.core.cons(cljs.core.vec(cljs.core.cons(cljs.core.cst$sym$attr_DASH_map_QMARK_,args)),sablono$core$update_arglists_$_iter__20792(cljs.core.rest(s__20793__$2)));
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
var len__5619__auto___20806 = arguments.length;
var i__5620__auto___20807 = (0);
while(true){
if((i__5620__auto___20807 < len__5619__auto___20806)){
args__5626__auto__.push((arguments[i__5620__auto___20807]));

var G__20808 = (i__5620__auto___20807 + (1));
i__5620__auto___20807 = G__20808;
continue;
} else {
}
break;
}

var argseq__5627__auto__ = ((((0) < args__5626__auto__.length))?(new cljs.core.IndexedSeq(args__5626__auto__.slice((0)),(0))):null);
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(argseq__5627__auto__);
});

sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic = (function (styles){
var iter__5333__auto__ = (function sablono$core$iter__20800(s__20801){
return (new cljs.core.LazySeq(null,(function (){
var s__20801__$1 = s__20801;
while(true){
var temp__4425__auto__ = cljs.core.seq(s__20801__$1);
if(temp__4425__auto__){
var s__20801__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(s__20801__$2)){
var c__5331__auto__ = cljs.core.chunk_first(s__20801__$2);
var size__5332__auto__ = cljs.core.count(c__5331__auto__);
var b__20803 = cljs.core.chunk_buffer(size__5332__auto__);
if((function (){var i__20802 = (0);
while(true){
if((i__20802 < size__5332__auto__)){
var style = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__5331__auto__,i__20802);
cljs.core.chunk_append(b__20803,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$link,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$type,"text/css",cljs.core.cst$kw$href,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([style], 0)),cljs.core.cst$kw$rel,"stylesheet"], null)], null));

var G__20809 = (i__20802 + (1));
i__20802 = G__20809;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__20803),sablono$core$iter__20800(cljs.core.chunk_rest(s__20801__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__20803),null);
}
} else {
var style = cljs.core.first(s__20801__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$link,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$type,"text/css",cljs.core.cst$kw$href,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([style], 0)),cljs.core.cst$kw$rel,"stylesheet"], null)], null),sablono$core$iter__20800(cljs.core.rest(s__20801__$2)));
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

sablono.core.include_css.cljs$lang$applyTo = (function (seq20799){
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq20799));
});
/**
 * Include the JavaScript library at `src`.
 */
sablono.core.include_js = (function sablono$core$include_js(src){
var G__20814 = goog.dom.getDocument().body;
var G__20815 = (function (){var G__20816 = "script";
var G__20817 = {"src": src};
return goog.dom.createDom(G__20816,G__20817);
})();
return goog.dom.appendChild(G__20814,G__20815);
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
sablono.core.link_to20818 = (function sablono$core$link_to20818(var_args){
var args__5626__auto__ = [];
var len__5619__auto___20821 = arguments.length;
var i__5620__auto___20822 = (0);
while(true){
if((i__5620__auto___20822 < len__5619__auto___20821)){
args__5626__auto__.push((arguments[i__5620__auto___20822]));

var G__20823 = (i__5620__auto___20822 + (1));
i__5620__auto___20822 = G__20823;
continue;
} else {
}
break;
}

var argseq__5627__auto__ = ((((1) < args__5626__auto__.length))?(new cljs.core.IndexedSeq(args__5626__auto__.slice((1)),(0))):null);
return sablono.core.link_to20818.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5627__auto__);
});

sablono.core.link_to20818.cljs$core$IFn$_invoke$arity$variadic = (function (url,content){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$href,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([url], 0))], null),content], null);
});

sablono.core.link_to20818.cljs$lang$maxFixedArity = (1);

sablono.core.link_to20818.cljs$lang$applyTo = (function (seq20819){
var G__20820 = cljs.core.first(seq20819);
var seq20819__$1 = cljs.core.next(seq20819);
return sablono.core.link_to20818.cljs$core$IFn$_invoke$arity$variadic(G__20820,seq20819__$1);
});

sablono.core.link_to = sablono.core.wrap_attrs(sablono.core.link_to20818);
/**
 * Wraps some content in a HTML hyperlink with the supplied e-mail
 *   address. If no content provided use the e-mail address as content.
 */
sablono.core.mail_to20824 = (function sablono$core$mail_to20824(var_args){
var args__5626__auto__ = [];
var len__5619__auto___20829 = arguments.length;
var i__5620__auto___20830 = (0);
while(true){
if((i__5620__auto___20830 < len__5619__auto___20829)){
args__5626__auto__.push((arguments[i__5620__auto___20830]));

var G__20831 = (i__5620__auto___20830 + (1));
i__5620__auto___20830 = G__20831;
continue;
} else {
}
break;
}

var argseq__5627__auto__ = ((((1) < args__5626__auto__.length))?(new cljs.core.IndexedSeq(args__5626__auto__.slice((1)),(0))):null);
return sablono.core.mail_to20824.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5627__auto__);
});

sablono.core.mail_to20824.cljs$core$IFn$_invoke$arity$variadic = (function (e_mail,p__20827){
var vec__20828 = p__20827;
var content = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20828,(0),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$href,[cljs.core.str("mailto:"),cljs.core.str(e_mail)].join('')], null),(function (){var or__4561__auto__ = content;
if(cljs.core.truth_(or__4561__auto__)){
return or__4561__auto__;
} else {
return e_mail;
}
})()], null);
});

sablono.core.mail_to20824.cljs$lang$maxFixedArity = (1);

sablono.core.mail_to20824.cljs$lang$applyTo = (function (seq20825){
var G__20826 = cljs.core.first(seq20825);
var seq20825__$1 = cljs.core.next(seq20825);
return sablono.core.mail_to20824.cljs$core$IFn$_invoke$arity$variadic(G__20826,seq20825__$1);
});

sablono.core.mail_to = sablono.core.wrap_attrs(sablono.core.mail_to20824);
/**
 * Wrap a collection in an unordered list.
 */
sablono.core.unordered_list20832 = (function sablono$core$unordered_list20832(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ul,(function (){var iter__5333__auto__ = (function sablono$core$unordered_list20832_$_iter__20839(s__20840){
return (new cljs.core.LazySeq(null,(function (){
var s__20840__$1 = s__20840;
while(true){
var temp__4425__auto__ = cljs.core.seq(s__20840__$1);
if(temp__4425__auto__){
var s__20840__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(s__20840__$2)){
var c__5331__auto__ = cljs.core.chunk_first(s__20840__$2);
var size__5332__auto__ = cljs.core.count(c__5331__auto__);
var b__20842 = cljs.core.chunk_buffer(size__5332__auto__);
if((function (){var i__20841 = (0);
while(true){
if((i__20841 < size__5332__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__5331__auto__,i__20841);
cljs.core.chunk_append(b__20842,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,x], null));

var G__20845 = (i__20841 + (1));
i__20841 = G__20845;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__20842),sablono$core$unordered_list20832_$_iter__20839(cljs.core.chunk_rest(s__20840__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__20842),null);
}
} else {
var x = cljs.core.first(s__20840__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,x], null),sablono$core$unordered_list20832_$_iter__20839(cljs.core.rest(s__20840__$2)));
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

sablono.core.unordered_list = sablono.core.wrap_attrs(sablono.core.unordered_list20832);
/**
 * Wrap a collection in an ordered list.
 */
sablono.core.ordered_list20846 = (function sablono$core$ordered_list20846(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ol,(function (){var iter__5333__auto__ = (function sablono$core$ordered_list20846_$_iter__20853(s__20854){
return (new cljs.core.LazySeq(null,(function (){
var s__20854__$1 = s__20854;
while(true){
var temp__4425__auto__ = cljs.core.seq(s__20854__$1);
if(temp__4425__auto__){
var s__20854__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(s__20854__$2)){
var c__5331__auto__ = cljs.core.chunk_first(s__20854__$2);
var size__5332__auto__ = cljs.core.count(c__5331__auto__);
var b__20856 = cljs.core.chunk_buffer(size__5332__auto__);
if((function (){var i__20855 = (0);
while(true){
if((i__20855 < size__5332__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__5331__auto__,i__20855);
cljs.core.chunk_append(b__20856,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,x], null));

var G__20859 = (i__20855 + (1));
i__20855 = G__20859;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__20856),sablono$core$ordered_list20846_$_iter__20853(cljs.core.chunk_rest(s__20854__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__20856),null);
}
} else {
var x = cljs.core.first(s__20854__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,x], null),sablono$core$ordered_list20846_$_iter__20853(cljs.core.rest(s__20854__$2)));
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

sablono.core.ordered_list = sablono.core.wrap_attrs(sablono.core.ordered_list20846);
/**
 * Create an image element.
 */
sablono.core.image20860 = (function sablono$core$image20860(var_args){
var args20861 = [];
var len__5619__auto___20864 = arguments.length;
var i__5620__auto___20865 = (0);
while(true){
if((i__5620__auto___20865 < len__5619__auto___20864)){
args20861.push((arguments[i__5620__auto___20865]));

var G__20866 = (i__5620__auto___20865 + (1));
i__5620__auto___20865 = G__20866;
continue;
} else {
}
break;
}

var G__20863 = args20861.length;
switch (G__20863) {
case 1:
return sablono.core.image20860.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.image20860.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20861.length)].join('')));

}
});

sablono.core.image20860.cljs$core$IFn$_invoke$arity$1 = (function (src){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$img,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$src,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([src], 0))], null)], null);
});

sablono.core.image20860.cljs$core$IFn$_invoke$arity$2 = (function (src,alt){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$img,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$src,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([src], 0)),cljs.core.cst$kw$alt,alt], null)], null);
});

sablono.core.image20860.cljs$lang$maxFixedArity = 2;

sablono.core.image = sablono.core.wrap_attrs(sablono.core.image20860);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
 * Create a field name from the supplied argument the current field group.
 */
sablono.core.make_name = (function sablono$core$make_name(name){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (p1__20868_SHARP_,p2__20869_SHARP_){
return [cljs.core.str(p1__20868_SHARP_),cljs.core.str("["),cljs.core.str(p2__20869_SHARP_),cljs.core.str("]")].join('');
}),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(sablono.core._STAR_group_STAR_,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([name], 0))));
});
/**
 * Create a field id from the supplied argument and current field group.
 */
sablono.core.make_id = (function sablono$core$make_id(name){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (p1__20870_SHARP_,p2__20871_SHARP_){
return [cljs.core.str(p1__20870_SHARP_),cljs.core.str("-"),cljs.core.str(p2__20871_SHARP_)].join('');
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
sablono.core.color_field20872 = (function sablono$core$color_field20872(var_args){
var args20873 = [];
var len__5619__auto___20940 = arguments.length;
var i__5620__auto___20941 = (0);
while(true){
if((i__5620__auto___20941 < len__5619__auto___20940)){
args20873.push((arguments[i__5620__auto___20941]));

var G__20942 = (i__5620__auto___20941 + (1));
i__5620__auto___20941 = G__20942;
continue;
} else {
}
break;
}

var G__20875 = args20873.length;
switch (G__20875) {
case 1:
return sablono.core.color_field20872.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.color_field20872.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20873.length)].join('')));

}
});

sablono.core.color_field20872.cljs$core$IFn$_invoke$arity$1 = (function (name__11958__auto__){
return sablono.core.color_field20872.cljs$core$IFn$_invoke$arity$2(name__11958__auto__,null);
});

sablono.core.color_field20872.cljs$core$IFn$_invoke$arity$2 = (function (name__11958__auto__,value__11959__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$color)].join(''),name__11958__auto__,value__11959__auto__);
});

sablono.core.color_field20872.cljs$lang$maxFixedArity = 2;

sablono.core.color_field = sablono.core.wrap_attrs(sablono.core.color_field20872);

/**
 * Creates a date input field.
 */
sablono.core.date_field20876 = (function sablono$core$date_field20876(var_args){
var args20877 = [];
var len__5619__auto___20944 = arguments.length;
var i__5620__auto___20945 = (0);
while(true){
if((i__5620__auto___20945 < len__5619__auto___20944)){
args20877.push((arguments[i__5620__auto___20945]));

var G__20946 = (i__5620__auto___20945 + (1));
i__5620__auto___20945 = G__20946;
continue;
} else {
}
break;
}

var G__20879 = args20877.length;
switch (G__20879) {
case 1:
return sablono.core.date_field20876.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.date_field20876.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20877.length)].join('')));

}
});

sablono.core.date_field20876.cljs$core$IFn$_invoke$arity$1 = (function (name__11958__auto__){
return sablono.core.date_field20876.cljs$core$IFn$_invoke$arity$2(name__11958__auto__,null);
});

sablono.core.date_field20876.cljs$core$IFn$_invoke$arity$2 = (function (name__11958__auto__,value__11959__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$date)].join(''),name__11958__auto__,value__11959__auto__);
});

sablono.core.date_field20876.cljs$lang$maxFixedArity = 2;

sablono.core.date_field = sablono.core.wrap_attrs(sablono.core.date_field20876);

/**
 * Creates a datetime input field.
 */
sablono.core.datetime_field20880 = (function sablono$core$datetime_field20880(var_args){
var args20881 = [];
var len__5619__auto___20948 = arguments.length;
var i__5620__auto___20949 = (0);
while(true){
if((i__5620__auto___20949 < len__5619__auto___20948)){
args20881.push((arguments[i__5620__auto___20949]));

var G__20950 = (i__5620__auto___20949 + (1));
i__5620__auto___20949 = G__20950;
continue;
} else {
}
break;
}

var G__20883 = args20881.length;
switch (G__20883) {
case 1:
return sablono.core.datetime_field20880.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_field20880.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20881.length)].join('')));

}
});

sablono.core.datetime_field20880.cljs$core$IFn$_invoke$arity$1 = (function (name__11958__auto__){
return sablono.core.datetime_field20880.cljs$core$IFn$_invoke$arity$2(name__11958__auto__,null);
});

sablono.core.datetime_field20880.cljs$core$IFn$_invoke$arity$2 = (function (name__11958__auto__,value__11959__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$datetime)].join(''),name__11958__auto__,value__11959__auto__);
});

sablono.core.datetime_field20880.cljs$lang$maxFixedArity = 2;

sablono.core.datetime_field = sablono.core.wrap_attrs(sablono.core.datetime_field20880);

/**
 * Creates a datetime-local input field.
 */
sablono.core.datetime_local_field20884 = (function sablono$core$datetime_local_field20884(var_args){
var args20885 = [];
var len__5619__auto___20952 = arguments.length;
var i__5620__auto___20953 = (0);
while(true){
if((i__5620__auto___20953 < len__5619__auto___20952)){
args20885.push((arguments[i__5620__auto___20953]));

var G__20954 = (i__5620__auto___20953 + (1));
i__5620__auto___20953 = G__20954;
continue;
} else {
}
break;
}

var G__20887 = args20885.length;
switch (G__20887) {
case 1:
return sablono.core.datetime_local_field20884.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_local_field20884.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20885.length)].join('')));

}
});

sablono.core.datetime_local_field20884.cljs$core$IFn$_invoke$arity$1 = (function (name__11958__auto__){
return sablono.core.datetime_local_field20884.cljs$core$IFn$_invoke$arity$2(name__11958__auto__,null);
});

sablono.core.datetime_local_field20884.cljs$core$IFn$_invoke$arity$2 = (function (name__11958__auto__,value__11959__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$datetime_DASH_local)].join(''),name__11958__auto__,value__11959__auto__);
});

sablono.core.datetime_local_field20884.cljs$lang$maxFixedArity = 2;

sablono.core.datetime_local_field = sablono.core.wrap_attrs(sablono.core.datetime_local_field20884);

/**
 * Creates a email input field.
 */
sablono.core.email_field20888 = (function sablono$core$email_field20888(var_args){
var args20889 = [];
var len__5619__auto___20956 = arguments.length;
var i__5620__auto___20957 = (0);
while(true){
if((i__5620__auto___20957 < len__5619__auto___20956)){
args20889.push((arguments[i__5620__auto___20957]));

var G__20958 = (i__5620__auto___20957 + (1));
i__5620__auto___20957 = G__20958;
continue;
} else {
}
break;
}

var G__20891 = args20889.length;
switch (G__20891) {
case 1:
return sablono.core.email_field20888.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.email_field20888.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20889.length)].join('')));

}
});

sablono.core.email_field20888.cljs$core$IFn$_invoke$arity$1 = (function (name__11958__auto__){
return sablono.core.email_field20888.cljs$core$IFn$_invoke$arity$2(name__11958__auto__,null);
});

sablono.core.email_field20888.cljs$core$IFn$_invoke$arity$2 = (function (name__11958__auto__,value__11959__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$email)].join(''),name__11958__auto__,value__11959__auto__);
});

sablono.core.email_field20888.cljs$lang$maxFixedArity = 2;

sablono.core.email_field = sablono.core.wrap_attrs(sablono.core.email_field20888);

/**
 * Creates a file input field.
 */
sablono.core.file_field20892 = (function sablono$core$file_field20892(var_args){
var args20893 = [];
var len__5619__auto___20960 = arguments.length;
var i__5620__auto___20961 = (0);
while(true){
if((i__5620__auto___20961 < len__5619__auto___20960)){
args20893.push((arguments[i__5620__auto___20961]));

var G__20962 = (i__5620__auto___20961 + (1));
i__5620__auto___20961 = G__20962;
continue;
} else {
}
break;
}

var G__20895 = args20893.length;
switch (G__20895) {
case 1:
return sablono.core.file_field20892.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.file_field20892.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20893.length)].join('')));

}
});

sablono.core.file_field20892.cljs$core$IFn$_invoke$arity$1 = (function (name__11958__auto__){
return sablono.core.file_field20892.cljs$core$IFn$_invoke$arity$2(name__11958__auto__,null);
});

sablono.core.file_field20892.cljs$core$IFn$_invoke$arity$2 = (function (name__11958__auto__,value__11959__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$file)].join(''),name__11958__auto__,value__11959__auto__);
});

sablono.core.file_field20892.cljs$lang$maxFixedArity = 2;

sablono.core.file_field = sablono.core.wrap_attrs(sablono.core.file_field20892);

/**
 * Creates a hidden input field.
 */
sablono.core.hidden_field20896 = (function sablono$core$hidden_field20896(var_args){
var args20897 = [];
var len__5619__auto___20964 = arguments.length;
var i__5620__auto___20965 = (0);
while(true){
if((i__5620__auto___20965 < len__5619__auto___20964)){
args20897.push((arguments[i__5620__auto___20965]));

var G__20966 = (i__5620__auto___20965 + (1));
i__5620__auto___20965 = G__20966;
continue;
} else {
}
break;
}

var G__20899 = args20897.length;
switch (G__20899) {
case 1:
return sablono.core.hidden_field20896.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.hidden_field20896.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20897.length)].join('')));

}
});

sablono.core.hidden_field20896.cljs$core$IFn$_invoke$arity$1 = (function (name__11958__auto__){
return sablono.core.hidden_field20896.cljs$core$IFn$_invoke$arity$2(name__11958__auto__,null);
});

sablono.core.hidden_field20896.cljs$core$IFn$_invoke$arity$2 = (function (name__11958__auto__,value__11959__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$hidden)].join(''),name__11958__auto__,value__11959__auto__);
});

sablono.core.hidden_field20896.cljs$lang$maxFixedArity = 2;

sablono.core.hidden_field = sablono.core.wrap_attrs(sablono.core.hidden_field20896);

/**
 * Creates a month input field.
 */
sablono.core.month_field20900 = (function sablono$core$month_field20900(var_args){
var args20901 = [];
var len__5619__auto___20968 = arguments.length;
var i__5620__auto___20969 = (0);
while(true){
if((i__5620__auto___20969 < len__5619__auto___20968)){
args20901.push((arguments[i__5620__auto___20969]));

var G__20970 = (i__5620__auto___20969 + (1));
i__5620__auto___20969 = G__20970;
continue;
} else {
}
break;
}

var G__20903 = args20901.length;
switch (G__20903) {
case 1:
return sablono.core.month_field20900.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.month_field20900.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20901.length)].join('')));

}
});

sablono.core.month_field20900.cljs$core$IFn$_invoke$arity$1 = (function (name__11958__auto__){
return sablono.core.month_field20900.cljs$core$IFn$_invoke$arity$2(name__11958__auto__,null);
});

sablono.core.month_field20900.cljs$core$IFn$_invoke$arity$2 = (function (name__11958__auto__,value__11959__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$month)].join(''),name__11958__auto__,value__11959__auto__);
});

sablono.core.month_field20900.cljs$lang$maxFixedArity = 2;

sablono.core.month_field = sablono.core.wrap_attrs(sablono.core.month_field20900);

/**
 * Creates a number input field.
 */
sablono.core.number_field20904 = (function sablono$core$number_field20904(var_args){
var args20905 = [];
var len__5619__auto___20972 = arguments.length;
var i__5620__auto___20973 = (0);
while(true){
if((i__5620__auto___20973 < len__5619__auto___20972)){
args20905.push((arguments[i__5620__auto___20973]));

var G__20974 = (i__5620__auto___20973 + (1));
i__5620__auto___20973 = G__20974;
continue;
} else {
}
break;
}

var G__20907 = args20905.length;
switch (G__20907) {
case 1:
return sablono.core.number_field20904.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.number_field20904.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20905.length)].join('')));

}
});

sablono.core.number_field20904.cljs$core$IFn$_invoke$arity$1 = (function (name__11958__auto__){
return sablono.core.number_field20904.cljs$core$IFn$_invoke$arity$2(name__11958__auto__,null);
});

sablono.core.number_field20904.cljs$core$IFn$_invoke$arity$2 = (function (name__11958__auto__,value__11959__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$number)].join(''),name__11958__auto__,value__11959__auto__);
});

sablono.core.number_field20904.cljs$lang$maxFixedArity = 2;

sablono.core.number_field = sablono.core.wrap_attrs(sablono.core.number_field20904);

/**
 * Creates a password input field.
 */
sablono.core.password_field20908 = (function sablono$core$password_field20908(var_args){
var args20909 = [];
var len__5619__auto___20976 = arguments.length;
var i__5620__auto___20977 = (0);
while(true){
if((i__5620__auto___20977 < len__5619__auto___20976)){
args20909.push((arguments[i__5620__auto___20977]));

var G__20978 = (i__5620__auto___20977 + (1));
i__5620__auto___20977 = G__20978;
continue;
} else {
}
break;
}

var G__20911 = args20909.length;
switch (G__20911) {
case 1:
return sablono.core.password_field20908.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.password_field20908.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20909.length)].join('')));

}
});

sablono.core.password_field20908.cljs$core$IFn$_invoke$arity$1 = (function (name__11958__auto__){
return sablono.core.password_field20908.cljs$core$IFn$_invoke$arity$2(name__11958__auto__,null);
});

sablono.core.password_field20908.cljs$core$IFn$_invoke$arity$2 = (function (name__11958__auto__,value__11959__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$password)].join(''),name__11958__auto__,value__11959__auto__);
});

sablono.core.password_field20908.cljs$lang$maxFixedArity = 2;

sablono.core.password_field = sablono.core.wrap_attrs(sablono.core.password_field20908);

/**
 * Creates a range input field.
 */
sablono.core.range_field20912 = (function sablono$core$range_field20912(var_args){
var args20913 = [];
var len__5619__auto___20980 = arguments.length;
var i__5620__auto___20981 = (0);
while(true){
if((i__5620__auto___20981 < len__5619__auto___20980)){
args20913.push((arguments[i__5620__auto___20981]));

var G__20982 = (i__5620__auto___20981 + (1));
i__5620__auto___20981 = G__20982;
continue;
} else {
}
break;
}

var G__20915 = args20913.length;
switch (G__20915) {
case 1:
return sablono.core.range_field20912.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.range_field20912.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20913.length)].join('')));

}
});

sablono.core.range_field20912.cljs$core$IFn$_invoke$arity$1 = (function (name__11958__auto__){
return sablono.core.range_field20912.cljs$core$IFn$_invoke$arity$2(name__11958__auto__,null);
});

sablono.core.range_field20912.cljs$core$IFn$_invoke$arity$2 = (function (name__11958__auto__,value__11959__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$range)].join(''),name__11958__auto__,value__11959__auto__);
});

sablono.core.range_field20912.cljs$lang$maxFixedArity = 2;

sablono.core.range_field = sablono.core.wrap_attrs(sablono.core.range_field20912);

/**
 * Creates a search input field.
 */
sablono.core.search_field20916 = (function sablono$core$search_field20916(var_args){
var args20917 = [];
var len__5619__auto___20984 = arguments.length;
var i__5620__auto___20985 = (0);
while(true){
if((i__5620__auto___20985 < len__5619__auto___20984)){
args20917.push((arguments[i__5620__auto___20985]));

var G__20986 = (i__5620__auto___20985 + (1));
i__5620__auto___20985 = G__20986;
continue;
} else {
}
break;
}

var G__20919 = args20917.length;
switch (G__20919) {
case 1:
return sablono.core.search_field20916.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.search_field20916.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20917.length)].join('')));

}
});

sablono.core.search_field20916.cljs$core$IFn$_invoke$arity$1 = (function (name__11958__auto__){
return sablono.core.search_field20916.cljs$core$IFn$_invoke$arity$2(name__11958__auto__,null);
});

sablono.core.search_field20916.cljs$core$IFn$_invoke$arity$2 = (function (name__11958__auto__,value__11959__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$search)].join(''),name__11958__auto__,value__11959__auto__);
});

sablono.core.search_field20916.cljs$lang$maxFixedArity = 2;

sablono.core.search_field = sablono.core.wrap_attrs(sablono.core.search_field20916);

/**
 * Creates a tel input field.
 */
sablono.core.tel_field20920 = (function sablono$core$tel_field20920(var_args){
var args20921 = [];
var len__5619__auto___20988 = arguments.length;
var i__5620__auto___20989 = (0);
while(true){
if((i__5620__auto___20989 < len__5619__auto___20988)){
args20921.push((arguments[i__5620__auto___20989]));

var G__20990 = (i__5620__auto___20989 + (1));
i__5620__auto___20989 = G__20990;
continue;
} else {
}
break;
}

var G__20923 = args20921.length;
switch (G__20923) {
case 1:
return sablono.core.tel_field20920.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.tel_field20920.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20921.length)].join('')));

}
});

sablono.core.tel_field20920.cljs$core$IFn$_invoke$arity$1 = (function (name__11958__auto__){
return sablono.core.tel_field20920.cljs$core$IFn$_invoke$arity$2(name__11958__auto__,null);
});

sablono.core.tel_field20920.cljs$core$IFn$_invoke$arity$2 = (function (name__11958__auto__,value__11959__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$tel)].join(''),name__11958__auto__,value__11959__auto__);
});

sablono.core.tel_field20920.cljs$lang$maxFixedArity = 2;

sablono.core.tel_field = sablono.core.wrap_attrs(sablono.core.tel_field20920);

/**
 * Creates a text input field.
 */
sablono.core.text_field20924 = (function sablono$core$text_field20924(var_args){
var args20925 = [];
var len__5619__auto___20992 = arguments.length;
var i__5620__auto___20993 = (0);
while(true){
if((i__5620__auto___20993 < len__5619__auto___20992)){
args20925.push((arguments[i__5620__auto___20993]));

var G__20994 = (i__5620__auto___20993 + (1));
i__5620__auto___20993 = G__20994;
continue;
} else {
}
break;
}

var G__20927 = args20925.length;
switch (G__20927) {
case 1:
return sablono.core.text_field20924.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_field20924.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20925.length)].join('')));

}
});

sablono.core.text_field20924.cljs$core$IFn$_invoke$arity$1 = (function (name__11958__auto__){
return sablono.core.text_field20924.cljs$core$IFn$_invoke$arity$2(name__11958__auto__,null);
});

sablono.core.text_field20924.cljs$core$IFn$_invoke$arity$2 = (function (name__11958__auto__,value__11959__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$text)].join(''),name__11958__auto__,value__11959__auto__);
});

sablono.core.text_field20924.cljs$lang$maxFixedArity = 2;

sablono.core.text_field = sablono.core.wrap_attrs(sablono.core.text_field20924);

/**
 * Creates a time input field.
 */
sablono.core.time_field20928 = (function sablono$core$time_field20928(var_args){
var args20929 = [];
var len__5619__auto___20996 = arguments.length;
var i__5620__auto___20997 = (0);
while(true){
if((i__5620__auto___20997 < len__5619__auto___20996)){
args20929.push((arguments[i__5620__auto___20997]));

var G__20998 = (i__5620__auto___20997 + (1));
i__5620__auto___20997 = G__20998;
continue;
} else {
}
break;
}

var G__20931 = args20929.length;
switch (G__20931) {
case 1:
return sablono.core.time_field20928.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.time_field20928.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20929.length)].join('')));

}
});

sablono.core.time_field20928.cljs$core$IFn$_invoke$arity$1 = (function (name__11958__auto__){
return sablono.core.time_field20928.cljs$core$IFn$_invoke$arity$2(name__11958__auto__,null);
});

sablono.core.time_field20928.cljs$core$IFn$_invoke$arity$2 = (function (name__11958__auto__,value__11959__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$time)].join(''),name__11958__auto__,value__11959__auto__);
});

sablono.core.time_field20928.cljs$lang$maxFixedArity = 2;

sablono.core.time_field = sablono.core.wrap_attrs(sablono.core.time_field20928);

/**
 * Creates a url input field.
 */
sablono.core.url_field20932 = (function sablono$core$url_field20932(var_args){
var args20933 = [];
var len__5619__auto___21000 = arguments.length;
var i__5620__auto___21001 = (0);
while(true){
if((i__5620__auto___21001 < len__5619__auto___21000)){
args20933.push((arguments[i__5620__auto___21001]));

var G__21002 = (i__5620__auto___21001 + (1));
i__5620__auto___21001 = G__21002;
continue;
} else {
}
break;
}

var G__20935 = args20933.length;
switch (G__20935) {
case 1:
return sablono.core.url_field20932.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.url_field20932.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20933.length)].join('')));

}
});

sablono.core.url_field20932.cljs$core$IFn$_invoke$arity$1 = (function (name__11958__auto__){
return sablono.core.url_field20932.cljs$core$IFn$_invoke$arity$2(name__11958__auto__,null);
});

sablono.core.url_field20932.cljs$core$IFn$_invoke$arity$2 = (function (name__11958__auto__,value__11959__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$url)].join(''),name__11958__auto__,value__11959__auto__);
});

sablono.core.url_field20932.cljs$lang$maxFixedArity = 2;

sablono.core.url_field = sablono.core.wrap_attrs(sablono.core.url_field20932);

/**
 * Creates a week input field.
 */
sablono.core.week_field20936 = (function sablono$core$week_field20936(var_args){
var args20937 = [];
var len__5619__auto___21004 = arguments.length;
var i__5620__auto___21005 = (0);
while(true){
if((i__5620__auto___21005 < len__5619__auto___21004)){
args20937.push((arguments[i__5620__auto___21005]));

var G__21006 = (i__5620__auto___21005 + (1));
i__5620__auto___21005 = G__21006;
continue;
} else {
}
break;
}

var G__20939 = args20937.length;
switch (G__20939) {
case 1:
return sablono.core.week_field20936.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.week_field20936.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20937.length)].join('')));

}
});

sablono.core.week_field20936.cljs$core$IFn$_invoke$arity$1 = (function (name__11958__auto__){
return sablono.core.week_field20936.cljs$core$IFn$_invoke$arity$2(name__11958__auto__,null);
});

sablono.core.week_field20936.cljs$core$IFn$_invoke$arity$2 = (function (name__11958__auto__,value__11959__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$week)].join(''),name__11958__auto__,value__11959__auto__);
});

sablono.core.week_field20936.cljs$lang$maxFixedArity = 2;

sablono.core.week_field = sablono.core.wrap_attrs(sablono.core.week_field20936);
sablono.core.file_upload = sablono.core.file_field;
/**
 * Creates a check box.
 */
sablono.core.check_box21008 = (function sablono$core$check_box21008(var_args){
var args21009 = [];
var len__5619__auto___21012 = arguments.length;
var i__5620__auto___21013 = (0);
while(true){
if((i__5620__auto___21013 < len__5619__auto___21012)){
args21009.push((arguments[i__5620__auto___21013]));

var G__21014 = (i__5620__auto___21013 + (1));
i__5620__auto___21013 = G__21014;
continue;
} else {
}
break;
}

var G__21011 = args21009.length;
switch (G__21011) {
case 1:
return sablono.core.check_box21008.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.check_box21008.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.check_box21008.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21009.length)].join('')));

}
});

sablono.core.check_box21008.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.check_box21008.cljs$core$IFn$_invoke$arity$2(name,null);
});

sablono.core.check_box21008.cljs$core$IFn$_invoke$arity$2 = (function (name,checked_QMARK_){
return sablono.core.check_box21008.cljs$core$IFn$_invoke$arity$3(name,checked_QMARK_,"true");
});

sablono.core.check_box21008.cljs$core$IFn$_invoke$arity$3 = (function (name,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$type,"checkbox",cljs.core.cst$kw$name,sablono.core.make_name(name),cljs.core.cst$kw$id,sablono.core.make_id(name),cljs.core.cst$kw$value,value,cljs.core.cst$kw$checked,checked_QMARK_], null)], null);
});

sablono.core.check_box21008.cljs$lang$maxFixedArity = 3;

sablono.core.check_box = sablono.core.wrap_attrs(sablono.core.check_box21008);
/**
 * Creates a radio button.
 */
sablono.core.radio_button21016 = (function sablono$core$radio_button21016(var_args){
var args21017 = [];
var len__5619__auto___21020 = arguments.length;
var i__5620__auto___21021 = (0);
while(true){
if((i__5620__auto___21021 < len__5619__auto___21020)){
args21017.push((arguments[i__5620__auto___21021]));

var G__21022 = (i__5620__auto___21021 + (1));
i__5620__auto___21021 = G__21022;
continue;
} else {
}
break;
}

var G__21019 = args21017.length;
switch (G__21019) {
case 1:
return sablono.core.radio_button21016.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.radio_button21016.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.radio_button21016.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21017.length)].join('')));

}
});

sablono.core.radio_button21016.cljs$core$IFn$_invoke$arity$1 = (function (group){
return sablono.core.radio_button21016.cljs$core$IFn$_invoke$arity$2(group,null);
});

sablono.core.radio_button21016.cljs$core$IFn$_invoke$arity$2 = (function (group,checked_QMARK_){
return sablono.core.radio_button21016.cljs$core$IFn$_invoke$arity$3(group,checked_QMARK_,"true");
});

sablono.core.radio_button21016.cljs$core$IFn$_invoke$arity$3 = (function (group,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$type,"radio",cljs.core.cst$kw$name,sablono.core.make_name(group),cljs.core.cst$kw$id,sablono.core.make_id([cljs.core.str(sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([group], 0))),cljs.core.str("-"),cljs.core.str(sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([value], 0)))].join('')),cljs.core.cst$kw$value,value,cljs.core.cst$kw$checked,checked_QMARK_], null)], null);
});

sablono.core.radio_button21016.cljs$lang$maxFixedArity = 3;

sablono.core.radio_button = sablono.core.wrap_attrs(sablono.core.radio_button21016);
sablono.core.hash_key = (function sablono$core$hash_key(x){
var G__21025 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([x], 0));
return goog.string.hashCode(G__21025);
});
/**
 * Creates a seq of option tags from a collection.
 */
sablono.core.select_options21026 = (function sablono$core$select_options21026(coll){
var iter__5333__auto__ = (function sablono$core$select_options21026_$_iter__21037(s__21038){
return (new cljs.core.LazySeq(null,(function (){
var s__21038__$1 = s__21038;
while(true){
var temp__4425__auto__ = cljs.core.seq(s__21038__$1);
if(temp__4425__auto__){
var s__21038__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(s__21038__$2)){
var c__5331__auto__ = cljs.core.chunk_first(s__21038__$2);
var size__5332__auto__ = cljs.core.count(c__5331__auto__);
var b__21040 = cljs.core.chunk_buffer(size__5332__auto__);
if((function (){var i__21039 = (0);
while(true){
if((i__21039 < size__5332__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__5331__auto__,i__21039);
cljs.core.chunk_append(b__21040,((cljs.core.sequential_QMARK_(x))?(function (){var vec__21045 = x;
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21045,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21045,(1),null);
var disabled_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21045,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$(disabled_QMARK_);
if(cljs.core.sequential_QMARK_(val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$optgroup,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$key,sablono.core.hash_key(text),cljs.core.cst$kw$label,text], null),sablono$core$select_options21026(val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$option,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$disabled,disabled_QMARK___$1,cljs.core.cst$kw$key,sablono.core.hash_key(val),cljs.core.cst$kw$value,val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$option,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$key,sablono.core.hash_key(x),cljs.core.cst$kw$value,x], null),x], null)));

var G__21047 = (i__21039 + (1));
i__21039 = G__21047;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__21040),sablono$core$select_options21026_$_iter__21037(cljs.core.chunk_rest(s__21038__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__21040),null);
}
} else {
var x = cljs.core.first(s__21038__$2);
return cljs.core.cons(((cljs.core.sequential_QMARK_(x))?(function (){var vec__21046 = x;
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21046,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21046,(1),null);
var disabled_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21046,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$(disabled_QMARK_);
if(cljs.core.sequential_QMARK_(val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$optgroup,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$key,sablono.core.hash_key(text),cljs.core.cst$kw$label,text], null),sablono$core$select_options21026(val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$option,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$disabled,disabled_QMARK___$1,cljs.core.cst$kw$key,sablono.core.hash_key(val),cljs.core.cst$kw$value,val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$option,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$key,sablono.core.hash_key(x),cljs.core.cst$kw$value,x], null),x], null)),sablono$core$select_options21026_$_iter__21037(cljs.core.rest(s__21038__$2)));
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

sablono.core.select_options = sablono.core.wrap_attrs(sablono.core.select_options21026);
/**
 * Creates a drop-down box using the <select> tag.
 */
sablono.core.drop_down21048 = (function sablono$core$drop_down21048(var_args){
var args21049 = [];
var len__5619__auto___21052 = arguments.length;
var i__5620__auto___21053 = (0);
while(true){
if((i__5620__auto___21053 < len__5619__auto___21052)){
args21049.push((arguments[i__5620__auto___21053]));

var G__21054 = (i__5620__auto___21053 + (1));
i__5620__auto___21053 = G__21054;
continue;
} else {
}
break;
}

var G__21051 = args21049.length;
switch (G__21051) {
case 2:
return sablono.core.drop_down21048.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.drop_down21048.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21049.length)].join('')));

}
});

sablono.core.drop_down21048.cljs$core$IFn$_invoke$arity$2 = (function (name,options){
return sablono.core.drop_down21048.cljs$core$IFn$_invoke$arity$3(name,options,null);
});

sablono.core.drop_down21048.cljs$core$IFn$_invoke$arity$3 = (function (name,options,selected){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$select,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,sablono.core.make_name(name),cljs.core.cst$kw$id,sablono.core.make_id(name)], null),(sablono.core.select_options.cljs$core$IFn$_invoke$arity$2 ? sablono.core.select_options.cljs$core$IFn$_invoke$arity$2(options,selected) : sablono.core.select_options.call(null,options,selected))], null);
});

sablono.core.drop_down21048.cljs$lang$maxFixedArity = 3;

sablono.core.drop_down = sablono.core.wrap_attrs(sablono.core.drop_down21048);
/**
 * Creates a text area element.
 */
sablono.core.text_area21056 = (function sablono$core$text_area21056(var_args){
var args21057 = [];
var len__5619__auto___21060 = arguments.length;
var i__5620__auto___21061 = (0);
while(true){
if((i__5620__auto___21061 < len__5619__auto___21060)){
args21057.push((arguments[i__5620__auto___21061]));

var G__21062 = (i__5620__auto___21061 + (1));
i__5620__auto___21061 = G__21062;
continue;
} else {
}
break;
}

var G__21059 = args21057.length;
switch (G__21059) {
case 1:
return sablono.core.text_area21056.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_area21056.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21057.length)].join('')));

}
});

sablono.core.text_area21056.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.text_area21056.cljs$core$IFn$_invoke$arity$2(name,null);
});

sablono.core.text_area21056.cljs$core$IFn$_invoke$arity$2 = (function (name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$textarea,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$name,sablono.core.make_name(name),cljs.core.cst$kw$id,sablono.core.make_id(name),cljs.core.cst$kw$value,value], null)], null);
});

sablono.core.text_area21056.cljs$lang$maxFixedArity = 2;

sablono.core.text_area = sablono.core.wrap_attrs(sablono.core.text_area21056);
/**
 * Creates a label for an input field with the supplied name.
 */
sablono.core.label21064 = (function sablono$core$label21064(name,text){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$label,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$htmlFor,sablono.core.make_id(name)], null),text], null);
});

sablono.core.label = sablono.core.wrap_attrs(sablono.core.label21064);
/**
 * Creates a submit button.
 */
sablono.core.submit_button21065 = (function sablono$core$submit_button21065(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,"submit",cljs.core.cst$kw$value,text], null)], null);
});

sablono.core.submit_button = sablono.core.wrap_attrs(sablono.core.submit_button21065);
/**
 * Creates a form reset button.
 */
sablono.core.reset_button21066 = (function sablono$core$reset_button21066(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,"reset",cljs.core.cst$kw$value,text], null)], null);
});

sablono.core.reset_button = sablono.core.wrap_attrs(sablono.core.reset_button21066);
/**
 * Create a form that points to a particular method and route.
 *   e.g. (form-to [:put "/post"]
 *       ...)
 */
sablono.core.form_to21067 = (function sablono$core$form_to21067(var_args){
var args__5626__auto__ = [];
var len__5619__auto___21075 = arguments.length;
var i__5620__auto___21076 = (0);
while(true){
if((i__5620__auto___21076 < len__5619__auto___21075)){
args__5626__auto__.push((arguments[i__5620__auto___21076]));

var G__21077 = (i__5620__auto___21076 + (1));
i__5620__auto___21076 = G__21077;
continue;
} else {
}
break;
}

var argseq__5627__auto__ = ((((1) < args__5626__auto__.length))?(new cljs.core.IndexedSeq(args__5626__auto__.slice((1)),(0))):null);
return sablono.core.form_to21067.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5627__auto__);
});

sablono.core.form_to21067.cljs$core$IFn$_invoke$arity$variadic = (function (p__21070,body){
var vec__21071 = p__21070;
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21071,(0),null);
var action = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21071,(1),null);
var method_str = clojure.string.upper_case(cljs.core.name(method));
var action_uri = sablono.util.to_uri(action);
return cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$get,null,cljs.core.cst$kw$post,null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$form,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$method,method_str,cljs.core.cst$kw$action,action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$form,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$method,"POST",cljs.core.cst$kw$action,action_uri], null),(function (){var G__21072 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,(3735928559)], null);
var G__21073 = "_method";
var G__21074 = method_str;
return (sablono.core.hidden_field.cljs$core$IFn$_invoke$arity$3 ? sablono.core.hidden_field.cljs$core$IFn$_invoke$arity$3(G__21072,G__21073,G__21074) : sablono.core.hidden_field.call(null,G__21072,G__21073,G__21074));
})()], null)),body));
});

sablono.core.form_to21067.cljs$lang$maxFixedArity = (1);

sablono.core.form_to21067.cljs$lang$applyTo = (function (seq21068){
var G__21069 = cljs.core.first(seq21068);
var seq21068__$1 = cljs.core.next(seq21068);
return sablono.core.form_to21067.cljs$core$IFn$_invoke$arity$variadic(G__21069,seq21068__$1);
});

sablono.core.form_to = sablono.core.wrap_attrs(sablono.core.form_to21067);
