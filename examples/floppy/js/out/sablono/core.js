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
var G__20955__delegate = function (args){
if(cljs.core.map_QMARK_(cljs.core.first(args))){
var vec__20954 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,cljs.core.rest(args));
var tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20954,(0),null);
var body = cljs.core.nthnext(vec__20954,(1));
if(cljs.core.map_QMARK_(cljs.core.first(body))){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.vector,tag,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.first(body),cljs.core.first(args)], 0)),cljs.core.rest(body));
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.vector,tag,cljs.core.first(args),body);
}
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,args);
}
};
var G__20955 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__20956__i = 0, G__20956__a = new Array(arguments.length -  0);
while (G__20956__i < G__20956__a.length) {G__20956__a[G__20956__i] = arguments[G__20956__i + 0]; ++G__20956__i;}
  args = new cljs.core.IndexedSeq(G__20956__a,0);
} 
return G__20955__delegate.call(this,args);};
G__20955.cljs$lang$maxFixedArity = 0;
G__20955.cljs$lang$applyTo = (function (arglist__20957){
var args = cljs.core.seq(arglist__20957);
return G__20955__delegate(args);
});
G__20955.cljs$core$IFn$_invoke$arity$variadic = G__20955__delegate;
return G__20955;
})()
;
});
sablono.core.update_arglists = (function sablono$core$update_arglists(arglists){
var iter__5333__auto__ = (function sablono$core$update_arglists_$_iter__20964(s__20965){
return (new cljs.core.LazySeq(null,(function (){
var s__20965__$1 = s__20965;
while(true){
var temp__4425__auto__ = cljs.core.seq(s__20965__$1);
if(temp__4425__auto__){
var s__20965__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(s__20965__$2)){
var c__5331__auto__ = cljs.core.chunk_first(s__20965__$2);
var size__5332__auto__ = cljs.core.count(c__5331__auto__);
var b__20967 = cljs.core.chunk_buffer(size__5332__auto__);
if((function (){var i__20966 = (0);
while(true){
if((i__20966 < size__5332__auto__)){
var args = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__5331__auto__,i__20966);
cljs.core.chunk_append(b__20967,cljs.core.vec(cljs.core.cons(cljs.core.cst$sym$attr_DASH_map_QMARK_,args)));

var G__20970 = (i__20966 + (1));
i__20966 = G__20970;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__20967),sablono$core$update_arglists_$_iter__20964(cljs.core.chunk_rest(s__20965__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__20967),null);
}
} else {
var args = cljs.core.first(s__20965__$2);
return cljs.core.cons(cljs.core.vec(cljs.core.cons(cljs.core.cst$sym$attr_DASH_map_QMARK_,args)),sablono$core$update_arglists_$_iter__20964(cljs.core.rest(s__20965__$2)));
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
var len__5619__auto___20978 = arguments.length;
var i__5620__auto___20979 = (0);
while(true){
if((i__5620__auto___20979 < len__5619__auto___20978)){
args__5626__auto__.push((arguments[i__5620__auto___20979]));

var G__20980 = (i__5620__auto___20979 + (1));
i__5620__auto___20979 = G__20980;
continue;
} else {
}
break;
}

var argseq__5627__auto__ = ((((0) < args__5626__auto__.length))?(new cljs.core.IndexedSeq(args__5626__auto__.slice((0)),(0))):null);
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(argseq__5627__auto__);
});

sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic = (function (styles){
var iter__5333__auto__ = (function sablono$core$iter__20972(s__20973){
return (new cljs.core.LazySeq(null,(function (){
var s__20973__$1 = s__20973;
while(true){
var temp__4425__auto__ = cljs.core.seq(s__20973__$1);
if(temp__4425__auto__){
var s__20973__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(s__20973__$2)){
var c__5331__auto__ = cljs.core.chunk_first(s__20973__$2);
var size__5332__auto__ = cljs.core.count(c__5331__auto__);
var b__20975 = cljs.core.chunk_buffer(size__5332__auto__);
if((function (){var i__20974 = (0);
while(true){
if((i__20974 < size__5332__auto__)){
var style = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__5331__auto__,i__20974);
cljs.core.chunk_append(b__20975,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$link,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$type,"text/css",cljs.core.cst$kw$href,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([style], 0)),cljs.core.cst$kw$rel,"stylesheet"], null)], null));

var G__20981 = (i__20974 + (1));
i__20974 = G__20981;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__20975),sablono$core$iter__20972(cljs.core.chunk_rest(s__20973__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__20975),null);
}
} else {
var style = cljs.core.first(s__20973__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$link,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$type,"text/css",cljs.core.cst$kw$href,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([style], 0)),cljs.core.cst$kw$rel,"stylesheet"], null)], null),sablono$core$iter__20972(cljs.core.rest(s__20973__$2)));
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

sablono.core.include_css.cljs$lang$applyTo = (function (seq20971){
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq20971));
});
/**
 * Include the JavaScript library at `src`.
 */
sablono.core.include_js = (function sablono$core$include_js(src){
var G__20986 = goog.dom.getDocument().body;
var G__20987 = (function (){var G__20988 = "script";
var G__20989 = {"src": src};
return goog.dom.createDom(G__20988,G__20989);
})();
return goog.dom.appendChild(G__20986,G__20987);
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
sablono.core.link_to20990 = (function sablono$core$link_to20990(var_args){
var args__5626__auto__ = [];
var len__5619__auto___20993 = arguments.length;
var i__5620__auto___20994 = (0);
while(true){
if((i__5620__auto___20994 < len__5619__auto___20993)){
args__5626__auto__.push((arguments[i__5620__auto___20994]));

var G__20995 = (i__5620__auto___20994 + (1));
i__5620__auto___20994 = G__20995;
continue;
} else {
}
break;
}

var argseq__5627__auto__ = ((((1) < args__5626__auto__.length))?(new cljs.core.IndexedSeq(args__5626__auto__.slice((1)),(0))):null);
return sablono.core.link_to20990.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5627__auto__);
});

sablono.core.link_to20990.cljs$core$IFn$_invoke$arity$variadic = (function (url,content){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$href,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([url], 0))], null),content], null);
});

sablono.core.link_to20990.cljs$lang$maxFixedArity = (1);

sablono.core.link_to20990.cljs$lang$applyTo = (function (seq20991){
var G__20992 = cljs.core.first(seq20991);
var seq20991__$1 = cljs.core.next(seq20991);
return sablono.core.link_to20990.cljs$core$IFn$_invoke$arity$variadic(G__20992,seq20991__$1);
});

sablono.core.link_to = sablono.core.wrap_attrs(sablono.core.link_to20990);
/**
 * Wraps some content in a HTML hyperlink with the supplied e-mail
 *   address. If no content provided use the e-mail address as content.
 */
sablono.core.mail_to20996 = (function sablono$core$mail_to20996(var_args){
var args__5626__auto__ = [];
var len__5619__auto___21001 = arguments.length;
var i__5620__auto___21002 = (0);
while(true){
if((i__5620__auto___21002 < len__5619__auto___21001)){
args__5626__auto__.push((arguments[i__5620__auto___21002]));

var G__21003 = (i__5620__auto___21002 + (1));
i__5620__auto___21002 = G__21003;
continue;
} else {
}
break;
}

var argseq__5627__auto__ = ((((1) < args__5626__auto__.length))?(new cljs.core.IndexedSeq(args__5626__auto__.slice((1)),(0))):null);
return sablono.core.mail_to20996.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5627__auto__);
});

sablono.core.mail_to20996.cljs$core$IFn$_invoke$arity$variadic = (function (e_mail,p__20999){
var vec__21000 = p__20999;
var content = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21000,(0),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$href,[cljs.core.str("mailto:"),cljs.core.str(e_mail)].join('')], null),(function (){var or__4561__auto__ = content;
if(cljs.core.truth_(or__4561__auto__)){
return or__4561__auto__;
} else {
return e_mail;
}
})()], null);
});

sablono.core.mail_to20996.cljs$lang$maxFixedArity = (1);

sablono.core.mail_to20996.cljs$lang$applyTo = (function (seq20997){
var G__20998 = cljs.core.first(seq20997);
var seq20997__$1 = cljs.core.next(seq20997);
return sablono.core.mail_to20996.cljs$core$IFn$_invoke$arity$variadic(G__20998,seq20997__$1);
});

sablono.core.mail_to = sablono.core.wrap_attrs(sablono.core.mail_to20996);
/**
 * Wrap a collection in an unordered list.
 */
sablono.core.unordered_list21004 = (function sablono$core$unordered_list21004(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ul,(function (){var iter__5333__auto__ = (function sablono$core$unordered_list21004_$_iter__21011(s__21012){
return (new cljs.core.LazySeq(null,(function (){
var s__21012__$1 = s__21012;
while(true){
var temp__4425__auto__ = cljs.core.seq(s__21012__$1);
if(temp__4425__auto__){
var s__21012__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(s__21012__$2)){
var c__5331__auto__ = cljs.core.chunk_first(s__21012__$2);
var size__5332__auto__ = cljs.core.count(c__5331__auto__);
var b__21014 = cljs.core.chunk_buffer(size__5332__auto__);
if((function (){var i__21013 = (0);
while(true){
if((i__21013 < size__5332__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__5331__auto__,i__21013);
cljs.core.chunk_append(b__21014,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,x], null));

var G__21017 = (i__21013 + (1));
i__21013 = G__21017;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__21014),sablono$core$unordered_list21004_$_iter__21011(cljs.core.chunk_rest(s__21012__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__21014),null);
}
} else {
var x = cljs.core.first(s__21012__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,x], null),sablono$core$unordered_list21004_$_iter__21011(cljs.core.rest(s__21012__$2)));
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

sablono.core.unordered_list = sablono.core.wrap_attrs(sablono.core.unordered_list21004);
/**
 * Wrap a collection in an ordered list.
 */
sablono.core.ordered_list21018 = (function sablono$core$ordered_list21018(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ol,(function (){var iter__5333__auto__ = (function sablono$core$ordered_list21018_$_iter__21025(s__21026){
return (new cljs.core.LazySeq(null,(function (){
var s__21026__$1 = s__21026;
while(true){
var temp__4425__auto__ = cljs.core.seq(s__21026__$1);
if(temp__4425__auto__){
var s__21026__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(s__21026__$2)){
var c__5331__auto__ = cljs.core.chunk_first(s__21026__$2);
var size__5332__auto__ = cljs.core.count(c__5331__auto__);
var b__21028 = cljs.core.chunk_buffer(size__5332__auto__);
if((function (){var i__21027 = (0);
while(true){
if((i__21027 < size__5332__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__5331__auto__,i__21027);
cljs.core.chunk_append(b__21028,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,x], null));

var G__21031 = (i__21027 + (1));
i__21027 = G__21031;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__21028),sablono$core$ordered_list21018_$_iter__21025(cljs.core.chunk_rest(s__21026__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__21028),null);
}
} else {
var x = cljs.core.first(s__21026__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,x], null),sablono$core$ordered_list21018_$_iter__21025(cljs.core.rest(s__21026__$2)));
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

sablono.core.ordered_list = sablono.core.wrap_attrs(sablono.core.ordered_list21018);
/**
 * Create an image element.
 */
sablono.core.image21032 = (function sablono$core$image21032(var_args){
var args21033 = [];
var len__5619__auto___21036 = arguments.length;
var i__5620__auto___21037 = (0);
while(true){
if((i__5620__auto___21037 < len__5619__auto___21036)){
args21033.push((arguments[i__5620__auto___21037]));

var G__21038 = (i__5620__auto___21037 + (1));
i__5620__auto___21037 = G__21038;
continue;
} else {
}
break;
}

var G__21035 = args21033.length;
switch (G__21035) {
case 1:
return sablono.core.image21032.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.image21032.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21033.length)].join('')));

}
});

sablono.core.image21032.cljs$core$IFn$_invoke$arity$1 = (function (src){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$img,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$src,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([src], 0))], null)], null);
});

sablono.core.image21032.cljs$core$IFn$_invoke$arity$2 = (function (src,alt){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$img,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$src,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([src], 0)),cljs.core.cst$kw$alt,alt], null)], null);
});

sablono.core.image21032.cljs$lang$maxFixedArity = 2;

sablono.core.image = sablono.core.wrap_attrs(sablono.core.image21032);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
 * Create a field name from the supplied argument the current field group.
 */
sablono.core.make_name = (function sablono$core$make_name(name){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (p1__21040_SHARP_,p2__21041_SHARP_){
return [cljs.core.str(p1__21040_SHARP_),cljs.core.str("["),cljs.core.str(p2__21041_SHARP_),cljs.core.str("]")].join('');
}),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(sablono.core._STAR_group_STAR_,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([name], 0))));
});
/**
 * Create a field id from the supplied argument and current field group.
 */
sablono.core.make_id = (function sablono$core$make_id(name){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (p1__21042_SHARP_,p2__21043_SHARP_){
return [cljs.core.str(p1__21042_SHARP_),cljs.core.str("-"),cljs.core.str(p2__21043_SHARP_)].join('');
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
sablono.core.color_field21044 = (function sablono$core$color_field21044(var_args){
var args21045 = [];
var len__5619__auto___21112 = arguments.length;
var i__5620__auto___21113 = (0);
while(true){
if((i__5620__auto___21113 < len__5619__auto___21112)){
args21045.push((arguments[i__5620__auto___21113]));

var G__21114 = (i__5620__auto___21113 + (1));
i__5620__auto___21113 = G__21114;
continue;
} else {
}
break;
}

var G__21047 = args21045.length;
switch (G__21047) {
case 1:
return sablono.core.color_field21044.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.color_field21044.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21045.length)].join('')));

}
});

sablono.core.color_field21044.cljs$core$IFn$_invoke$arity$1 = (function (name__11952__auto__){
return sablono.core.color_field21044.cljs$core$IFn$_invoke$arity$2(name__11952__auto__,null);
});

sablono.core.color_field21044.cljs$core$IFn$_invoke$arity$2 = (function (name__11952__auto__,value__11953__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$color)].join(''),name__11952__auto__,value__11953__auto__);
});

sablono.core.color_field21044.cljs$lang$maxFixedArity = 2;

sablono.core.color_field = sablono.core.wrap_attrs(sablono.core.color_field21044);

/**
 * Creates a date input field.
 */
sablono.core.date_field21048 = (function sablono$core$date_field21048(var_args){
var args21049 = [];
var len__5619__auto___21116 = arguments.length;
var i__5620__auto___21117 = (0);
while(true){
if((i__5620__auto___21117 < len__5619__auto___21116)){
args21049.push((arguments[i__5620__auto___21117]));

var G__21118 = (i__5620__auto___21117 + (1));
i__5620__auto___21117 = G__21118;
continue;
} else {
}
break;
}

var G__21051 = args21049.length;
switch (G__21051) {
case 1:
return sablono.core.date_field21048.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.date_field21048.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21049.length)].join('')));

}
});

sablono.core.date_field21048.cljs$core$IFn$_invoke$arity$1 = (function (name__11952__auto__){
return sablono.core.date_field21048.cljs$core$IFn$_invoke$arity$2(name__11952__auto__,null);
});

sablono.core.date_field21048.cljs$core$IFn$_invoke$arity$2 = (function (name__11952__auto__,value__11953__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$date)].join(''),name__11952__auto__,value__11953__auto__);
});

sablono.core.date_field21048.cljs$lang$maxFixedArity = 2;

sablono.core.date_field = sablono.core.wrap_attrs(sablono.core.date_field21048);

/**
 * Creates a datetime input field.
 */
sablono.core.datetime_field21052 = (function sablono$core$datetime_field21052(var_args){
var args21053 = [];
var len__5619__auto___21120 = arguments.length;
var i__5620__auto___21121 = (0);
while(true){
if((i__5620__auto___21121 < len__5619__auto___21120)){
args21053.push((arguments[i__5620__auto___21121]));

var G__21122 = (i__5620__auto___21121 + (1));
i__5620__auto___21121 = G__21122;
continue;
} else {
}
break;
}

var G__21055 = args21053.length;
switch (G__21055) {
case 1:
return sablono.core.datetime_field21052.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_field21052.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21053.length)].join('')));

}
});

sablono.core.datetime_field21052.cljs$core$IFn$_invoke$arity$1 = (function (name__11952__auto__){
return sablono.core.datetime_field21052.cljs$core$IFn$_invoke$arity$2(name__11952__auto__,null);
});

sablono.core.datetime_field21052.cljs$core$IFn$_invoke$arity$2 = (function (name__11952__auto__,value__11953__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$datetime)].join(''),name__11952__auto__,value__11953__auto__);
});

sablono.core.datetime_field21052.cljs$lang$maxFixedArity = 2;

sablono.core.datetime_field = sablono.core.wrap_attrs(sablono.core.datetime_field21052);

/**
 * Creates a datetime-local input field.
 */
sablono.core.datetime_local_field21056 = (function sablono$core$datetime_local_field21056(var_args){
var args21057 = [];
var len__5619__auto___21124 = arguments.length;
var i__5620__auto___21125 = (0);
while(true){
if((i__5620__auto___21125 < len__5619__auto___21124)){
args21057.push((arguments[i__5620__auto___21125]));

var G__21126 = (i__5620__auto___21125 + (1));
i__5620__auto___21125 = G__21126;
continue;
} else {
}
break;
}

var G__21059 = args21057.length;
switch (G__21059) {
case 1:
return sablono.core.datetime_local_field21056.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_local_field21056.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21057.length)].join('')));

}
});

sablono.core.datetime_local_field21056.cljs$core$IFn$_invoke$arity$1 = (function (name__11952__auto__){
return sablono.core.datetime_local_field21056.cljs$core$IFn$_invoke$arity$2(name__11952__auto__,null);
});

sablono.core.datetime_local_field21056.cljs$core$IFn$_invoke$arity$2 = (function (name__11952__auto__,value__11953__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$datetime_DASH_local)].join(''),name__11952__auto__,value__11953__auto__);
});

sablono.core.datetime_local_field21056.cljs$lang$maxFixedArity = 2;

sablono.core.datetime_local_field = sablono.core.wrap_attrs(sablono.core.datetime_local_field21056);

/**
 * Creates a email input field.
 */
sablono.core.email_field21060 = (function sablono$core$email_field21060(var_args){
var args21061 = [];
var len__5619__auto___21128 = arguments.length;
var i__5620__auto___21129 = (0);
while(true){
if((i__5620__auto___21129 < len__5619__auto___21128)){
args21061.push((arguments[i__5620__auto___21129]));

var G__21130 = (i__5620__auto___21129 + (1));
i__5620__auto___21129 = G__21130;
continue;
} else {
}
break;
}

var G__21063 = args21061.length;
switch (G__21063) {
case 1:
return sablono.core.email_field21060.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.email_field21060.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21061.length)].join('')));

}
});

sablono.core.email_field21060.cljs$core$IFn$_invoke$arity$1 = (function (name__11952__auto__){
return sablono.core.email_field21060.cljs$core$IFn$_invoke$arity$2(name__11952__auto__,null);
});

sablono.core.email_field21060.cljs$core$IFn$_invoke$arity$2 = (function (name__11952__auto__,value__11953__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$email)].join(''),name__11952__auto__,value__11953__auto__);
});

sablono.core.email_field21060.cljs$lang$maxFixedArity = 2;

sablono.core.email_field = sablono.core.wrap_attrs(sablono.core.email_field21060);

/**
 * Creates a file input field.
 */
sablono.core.file_field21064 = (function sablono$core$file_field21064(var_args){
var args21065 = [];
var len__5619__auto___21132 = arguments.length;
var i__5620__auto___21133 = (0);
while(true){
if((i__5620__auto___21133 < len__5619__auto___21132)){
args21065.push((arguments[i__5620__auto___21133]));

var G__21134 = (i__5620__auto___21133 + (1));
i__5620__auto___21133 = G__21134;
continue;
} else {
}
break;
}

var G__21067 = args21065.length;
switch (G__21067) {
case 1:
return sablono.core.file_field21064.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.file_field21064.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21065.length)].join('')));

}
});

sablono.core.file_field21064.cljs$core$IFn$_invoke$arity$1 = (function (name__11952__auto__){
return sablono.core.file_field21064.cljs$core$IFn$_invoke$arity$2(name__11952__auto__,null);
});

sablono.core.file_field21064.cljs$core$IFn$_invoke$arity$2 = (function (name__11952__auto__,value__11953__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$file)].join(''),name__11952__auto__,value__11953__auto__);
});

sablono.core.file_field21064.cljs$lang$maxFixedArity = 2;

sablono.core.file_field = sablono.core.wrap_attrs(sablono.core.file_field21064);

/**
 * Creates a hidden input field.
 */
sablono.core.hidden_field21068 = (function sablono$core$hidden_field21068(var_args){
var args21069 = [];
var len__5619__auto___21136 = arguments.length;
var i__5620__auto___21137 = (0);
while(true){
if((i__5620__auto___21137 < len__5619__auto___21136)){
args21069.push((arguments[i__5620__auto___21137]));

var G__21138 = (i__5620__auto___21137 + (1));
i__5620__auto___21137 = G__21138;
continue;
} else {
}
break;
}

var G__21071 = args21069.length;
switch (G__21071) {
case 1:
return sablono.core.hidden_field21068.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.hidden_field21068.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21069.length)].join('')));

}
});

sablono.core.hidden_field21068.cljs$core$IFn$_invoke$arity$1 = (function (name__11952__auto__){
return sablono.core.hidden_field21068.cljs$core$IFn$_invoke$arity$2(name__11952__auto__,null);
});

sablono.core.hidden_field21068.cljs$core$IFn$_invoke$arity$2 = (function (name__11952__auto__,value__11953__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$hidden)].join(''),name__11952__auto__,value__11953__auto__);
});

sablono.core.hidden_field21068.cljs$lang$maxFixedArity = 2;

sablono.core.hidden_field = sablono.core.wrap_attrs(sablono.core.hidden_field21068);

/**
 * Creates a month input field.
 */
sablono.core.month_field21072 = (function sablono$core$month_field21072(var_args){
var args21073 = [];
var len__5619__auto___21140 = arguments.length;
var i__5620__auto___21141 = (0);
while(true){
if((i__5620__auto___21141 < len__5619__auto___21140)){
args21073.push((arguments[i__5620__auto___21141]));

var G__21142 = (i__5620__auto___21141 + (1));
i__5620__auto___21141 = G__21142;
continue;
} else {
}
break;
}

var G__21075 = args21073.length;
switch (G__21075) {
case 1:
return sablono.core.month_field21072.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.month_field21072.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21073.length)].join('')));

}
});

sablono.core.month_field21072.cljs$core$IFn$_invoke$arity$1 = (function (name__11952__auto__){
return sablono.core.month_field21072.cljs$core$IFn$_invoke$arity$2(name__11952__auto__,null);
});

sablono.core.month_field21072.cljs$core$IFn$_invoke$arity$2 = (function (name__11952__auto__,value__11953__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$month)].join(''),name__11952__auto__,value__11953__auto__);
});

sablono.core.month_field21072.cljs$lang$maxFixedArity = 2;

sablono.core.month_field = sablono.core.wrap_attrs(sablono.core.month_field21072);

/**
 * Creates a number input field.
 */
sablono.core.number_field21076 = (function sablono$core$number_field21076(var_args){
var args21077 = [];
var len__5619__auto___21144 = arguments.length;
var i__5620__auto___21145 = (0);
while(true){
if((i__5620__auto___21145 < len__5619__auto___21144)){
args21077.push((arguments[i__5620__auto___21145]));

var G__21146 = (i__5620__auto___21145 + (1));
i__5620__auto___21145 = G__21146;
continue;
} else {
}
break;
}

var G__21079 = args21077.length;
switch (G__21079) {
case 1:
return sablono.core.number_field21076.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.number_field21076.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21077.length)].join('')));

}
});

sablono.core.number_field21076.cljs$core$IFn$_invoke$arity$1 = (function (name__11952__auto__){
return sablono.core.number_field21076.cljs$core$IFn$_invoke$arity$2(name__11952__auto__,null);
});

sablono.core.number_field21076.cljs$core$IFn$_invoke$arity$2 = (function (name__11952__auto__,value__11953__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$number)].join(''),name__11952__auto__,value__11953__auto__);
});

sablono.core.number_field21076.cljs$lang$maxFixedArity = 2;

sablono.core.number_field = sablono.core.wrap_attrs(sablono.core.number_field21076);

/**
 * Creates a password input field.
 */
sablono.core.password_field21080 = (function sablono$core$password_field21080(var_args){
var args21081 = [];
var len__5619__auto___21148 = arguments.length;
var i__5620__auto___21149 = (0);
while(true){
if((i__5620__auto___21149 < len__5619__auto___21148)){
args21081.push((arguments[i__5620__auto___21149]));

var G__21150 = (i__5620__auto___21149 + (1));
i__5620__auto___21149 = G__21150;
continue;
} else {
}
break;
}

var G__21083 = args21081.length;
switch (G__21083) {
case 1:
return sablono.core.password_field21080.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.password_field21080.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21081.length)].join('')));

}
});

sablono.core.password_field21080.cljs$core$IFn$_invoke$arity$1 = (function (name__11952__auto__){
return sablono.core.password_field21080.cljs$core$IFn$_invoke$arity$2(name__11952__auto__,null);
});

sablono.core.password_field21080.cljs$core$IFn$_invoke$arity$2 = (function (name__11952__auto__,value__11953__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$password)].join(''),name__11952__auto__,value__11953__auto__);
});

sablono.core.password_field21080.cljs$lang$maxFixedArity = 2;

sablono.core.password_field = sablono.core.wrap_attrs(sablono.core.password_field21080);

/**
 * Creates a range input field.
 */
sablono.core.range_field21084 = (function sablono$core$range_field21084(var_args){
var args21085 = [];
var len__5619__auto___21152 = arguments.length;
var i__5620__auto___21153 = (0);
while(true){
if((i__5620__auto___21153 < len__5619__auto___21152)){
args21085.push((arguments[i__5620__auto___21153]));

var G__21154 = (i__5620__auto___21153 + (1));
i__5620__auto___21153 = G__21154;
continue;
} else {
}
break;
}

var G__21087 = args21085.length;
switch (G__21087) {
case 1:
return sablono.core.range_field21084.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.range_field21084.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21085.length)].join('')));

}
});

sablono.core.range_field21084.cljs$core$IFn$_invoke$arity$1 = (function (name__11952__auto__){
return sablono.core.range_field21084.cljs$core$IFn$_invoke$arity$2(name__11952__auto__,null);
});

sablono.core.range_field21084.cljs$core$IFn$_invoke$arity$2 = (function (name__11952__auto__,value__11953__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$range)].join(''),name__11952__auto__,value__11953__auto__);
});

sablono.core.range_field21084.cljs$lang$maxFixedArity = 2;

sablono.core.range_field = sablono.core.wrap_attrs(sablono.core.range_field21084);

/**
 * Creates a search input field.
 */
sablono.core.search_field21088 = (function sablono$core$search_field21088(var_args){
var args21089 = [];
var len__5619__auto___21156 = arguments.length;
var i__5620__auto___21157 = (0);
while(true){
if((i__5620__auto___21157 < len__5619__auto___21156)){
args21089.push((arguments[i__5620__auto___21157]));

var G__21158 = (i__5620__auto___21157 + (1));
i__5620__auto___21157 = G__21158;
continue;
} else {
}
break;
}

var G__21091 = args21089.length;
switch (G__21091) {
case 1:
return sablono.core.search_field21088.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.search_field21088.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21089.length)].join('')));

}
});

sablono.core.search_field21088.cljs$core$IFn$_invoke$arity$1 = (function (name__11952__auto__){
return sablono.core.search_field21088.cljs$core$IFn$_invoke$arity$2(name__11952__auto__,null);
});

sablono.core.search_field21088.cljs$core$IFn$_invoke$arity$2 = (function (name__11952__auto__,value__11953__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$search)].join(''),name__11952__auto__,value__11953__auto__);
});

sablono.core.search_field21088.cljs$lang$maxFixedArity = 2;

sablono.core.search_field = sablono.core.wrap_attrs(sablono.core.search_field21088);

/**
 * Creates a tel input field.
 */
sablono.core.tel_field21092 = (function sablono$core$tel_field21092(var_args){
var args21093 = [];
var len__5619__auto___21160 = arguments.length;
var i__5620__auto___21161 = (0);
while(true){
if((i__5620__auto___21161 < len__5619__auto___21160)){
args21093.push((arguments[i__5620__auto___21161]));

var G__21162 = (i__5620__auto___21161 + (1));
i__5620__auto___21161 = G__21162;
continue;
} else {
}
break;
}

var G__21095 = args21093.length;
switch (G__21095) {
case 1:
return sablono.core.tel_field21092.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.tel_field21092.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21093.length)].join('')));

}
});

sablono.core.tel_field21092.cljs$core$IFn$_invoke$arity$1 = (function (name__11952__auto__){
return sablono.core.tel_field21092.cljs$core$IFn$_invoke$arity$2(name__11952__auto__,null);
});

sablono.core.tel_field21092.cljs$core$IFn$_invoke$arity$2 = (function (name__11952__auto__,value__11953__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$tel)].join(''),name__11952__auto__,value__11953__auto__);
});

sablono.core.tel_field21092.cljs$lang$maxFixedArity = 2;

sablono.core.tel_field = sablono.core.wrap_attrs(sablono.core.tel_field21092);

/**
 * Creates a text input field.
 */
sablono.core.text_field21096 = (function sablono$core$text_field21096(var_args){
var args21097 = [];
var len__5619__auto___21164 = arguments.length;
var i__5620__auto___21165 = (0);
while(true){
if((i__5620__auto___21165 < len__5619__auto___21164)){
args21097.push((arguments[i__5620__auto___21165]));

var G__21166 = (i__5620__auto___21165 + (1));
i__5620__auto___21165 = G__21166;
continue;
} else {
}
break;
}

var G__21099 = args21097.length;
switch (G__21099) {
case 1:
return sablono.core.text_field21096.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_field21096.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21097.length)].join('')));

}
});

sablono.core.text_field21096.cljs$core$IFn$_invoke$arity$1 = (function (name__11952__auto__){
return sablono.core.text_field21096.cljs$core$IFn$_invoke$arity$2(name__11952__auto__,null);
});

sablono.core.text_field21096.cljs$core$IFn$_invoke$arity$2 = (function (name__11952__auto__,value__11953__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$text)].join(''),name__11952__auto__,value__11953__auto__);
});

sablono.core.text_field21096.cljs$lang$maxFixedArity = 2;

sablono.core.text_field = sablono.core.wrap_attrs(sablono.core.text_field21096);

/**
 * Creates a time input field.
 */
sablono.core.time_field21100 = (function sablono$core$time_field21100(var_args){
var args21101 = [];
var len__5619__auto___21168 = arguments.length;
var i__5620__auto___21169 = (0);
while(true){
if((i__5620__auto___21169 < len__5619__auto___21168)){
args21101.push((arguments[i__5620__auto___21169]));

var G__21170 = (i__5620__auto___21169 + (1));
i__5620__auto___21169 = G__21170;
continue;
} else {
}
break;
}

var G__21103 = args21101.length;
switch (G__21103) {
case 1:
return sablono.core.time_field21100.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.time_field21100.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21101.length)].join('')));

}
});

sablono.core.time_field21100.cljs$core$IFn$_invoke$arity$1 = (function (name__11952__auto__){
return sablono.core.time_field21100.cljs$core$IFn$_invoke$arity$2(name__11952__auto__,null);
});

sablono.core.time_field21100.cljs$core$IFn$_invoke$arity$2 = (function (name__11952__auto__,value__11953__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$time)].join(''),name__11952__auto__,value__11953__auto__);
});

sablono.core.time_field21100.cljs$lang$maxFixedArity = 2;

sablono.core.time_field = sablono.core.wrap_attrs(sablono.core.time_field21100);

/**
 * Creates a url input field.
 */
sablono.core.url_field21104 = (function sablono$core$url_field21104(var_args){
var args21105 = [];
var len__5619__auto___21172 = arguments.length;
var i__5620__auto___21173 = (0);
while(true){
if((i__5620__auto___21173 < len__5619__auto___21172)){
args21105.push((arguments[i__5620__auto___21173]));

var G__21174 = (i__5620__auto___21173 + (1));
i__5620__auto___21173 = G__21174;
continue;
} else {
}
break;
}

var G__21107 = args21105.length;
switch (G__21107) {
case 1:
return sablono.core.url_field21104.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.url_field21104.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21105.length)].join('')));

}
});

sablono.core.url_field21104.cljs$core$IFn$_invoke$arity$1 = (function (name__11952__auto__){
return sablono.core.url_field21104.cljs$core$IFn$_invoke$arity$2(name__11952__auto__,null);
});

sablono.core.url_field21104.cljs$core$IFn$_invoke$arity$2 = (function (name__11952__auto__,value__11953__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$url)].join(''),name__11952__auto__,value__11953__auto__);
});

sablono.core.url_field21104.cljs$lang$maxFixedArity = 2;

sablono.core.url_field = sablono.core.wrap_attrs(sablono.core.url_field21104);

/**
 * Creates a week input field.
 */
sablono.core.week_field21108 = (function sablono$core$week_field21108(var_args){
var args21109 = [];
var len__5619__auto___21176 = arguments.length;
var i__5620__auto___21177 = (0);
while(true){
if((i__5620__auto___21177 < len__5619__auto___21176)){
args21109.push((arguments[i__5620__auto___21177]));

var G__21178 = (i__5620__auto___21177 + (1));
i__5620__auto___21177 = G__21178;
continue;
} else {
}
break;
}

var G__21111 = args21109.length;
switch (G__21111) {
case 1:
return sablono.core.week_field21108.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.week_field21108.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21109.length)].join('')));

}
});

sablono.core.week_field21108.cljs$core$IFn$_invoke$arity$1 = (function (name__11952__auto__){
return sablono.core.week_field21108.cljs$core$IFn$_invoke$arity$2(name__11952__auto__,null);
});

sablono.core.week_field21108.cljs$core$IFn$_invoke$arity$2 = (function (name__11952__auto__,value__11953__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$week)].join(''),name__11952__auto__,value__11953__auto__);
});

sablono.core.week_field21108.cljs$lang$maxFixedArity = 2;

sablono.core.week_field = sablono.core.wrap_attrs(sablono.core.week_field21108);
sablono.core.file_upload = sablono.core.file_field;
/**
 * Creates a check box.
 */
sablono.core.check_box21180 = (function sablono$core$check_box21180(var_args){
var args21181 = [];
var len__5619__auto___21184 = arguments.length;
var i__5620__auto___21185 = (0);
while(true){
if((i__5620__auto___21185 < len__5619__auto___21184)){
args21181.push((arguments[i__5620__auto___21185]));

var G__21186 = (i__5620__auto___21185 + (1));
i__5620__auto___21185 = G__21186;
continue;
} else {
}
break;
}

var G__21183 = args21181.length;
switch (G__21183) {
case 1:
return sablono.core.check_box21180.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.check_box21180.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.check_box21180.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21181.length)].join('')));

}
});

sablono.core.check_box21180.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.check_box21180.cljs$core$IFn$_invoke$arity$2(name,null);
});

sablono.core.check_box21180.cljs$core$IFn$_invoke$arity$2 = (function (name,checked_QMARK_){
return sablono.core.check_box21180.cljs$core$IFn$_invoke$arity$3(name,checked_QMARK_,"true");
});

sablono.core.check_box21180.cljs$core$IFn$_invoke$arity$3 = (function (name,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$type,"checkbox",cljs.core.cst$kw$name,sablono.core.make_name(name),cljs.core.cst$kw$id,sablono.core.make_id(name),cljs.core.cst$kw$value,value,cljs.core.cst$kw$checked,checked_QMARK_], null)], null);
});

sablono.core.check_box21180.cljs$lang$maxFixedArity = 3;

sablono.core.check_box = sablono.core.wrap_attrs(sablono.core.check_box21180);
/**
 * Creates a radio button.
 */
sablono.core.radio_button21188 = (function sablono$core$radio_button21188(var_args){
var args21189 = [];
var len__5619__auto___21192 = arguments.length;
var i__5620__auto___21193 = (0);
while(true){
if((i__5620__auto___21193 < len__5619__auto___21192)){
args21189.push((arguments[i__5620__auto___21193]));

var G__21194 = (i__5620__auto___21193 + (1));
i__5620__auto___21193 = G__21194;
continue;
} else {
}
break;
}

var G__21191 = args21189.length;
switch (G__21191) {
case 1:
return sablono.core.radio_button21188.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.radio_button21188.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.radio_button21188.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21189.length)].join('')));

}
});

sablono.core.radio_button21188.cljs$core$IFn$_invoke$arity$1 = (function (group){
return sablono.core.radio_button21188.cljs$core$IFn$_invoke$arity$2(group,null);
});

sablono.core.radio_button21188.cljs$core$IFn$_invoke$arity$2 = (function (group,checked_QMARK_){
return sablono.core.radio_button21188.cljs$core$IFn$_invoke$arity$3(group,checked_QMARK_,"true");
});

sablono.core.radio_button21188.cljs$core$IFn$_invoke$arity$3 = (function (group,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$type,"radio",cljs.core.cst$kw$name,sablono.core.make_name(group),cljs.core.cst$kw$id,sablono.core.make_id([cljs.core.str(sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([group], 0))),cljs.core.str("-"),cljs.core.str(sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([value], 0)))].join('')),cljs.core.cst$kw$value,value,cljs.core.cst$kw$checked,checked_QMARK_], null)], null);
});

sablono.core.radio_button21188.cljs$lang$maxFixedArity = 3;

sablono.core.radio_button = sablono.core.wrap_attrs(sablono.core.radio_button21188);
sablono.core.hash_key = (function sablono$core$hash_key(x){
var G__21197 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([x], 0));
return goog.string.hashCode(G__21197);
});
/**
 * Creates a seq of option tags from a collection.
 */
sablono.core.select_options21198 = (function sablono$core$select_options21198(coll){
var iter__5333__auto__ = (function sablono$core$select_options21198_$_iter__21209(s__21210){
return (new cljs.core.LazySeq(null,(function (){
var s__21210__$1 = s__21210;
while(true){
var temp__4425__auto__ = cljs.core.seq(s__21210__$1);
if(temp__4425__auto__){
var s__21210__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(s__21210__$2)){
var c__5331__auto__ = cljs.core.chunk_first(s__21210__$2);
var size__5332__auto__ = cljs.core.count(c__5331__auto__);
var b__21212 = cljs.core.chunk_buffer(size__5332__auto__);
if((function (){var i__21211 = (0);
while(true){
if((i__21211 < size__5332__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__5331__auto__,i__21211);
cljs.core.chunk_append(b__21212,((cljs.core.sequential_QMARK_(x))?(function (){var vec__21217 = x;
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21217,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21217,(1),null);
var disabled_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21217,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$(disabled_QMARK_);
if(cljs.core.sequential_QMARK_(val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$optgroup,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$key,sablono.core.hash_key(text),cljs.core.cst$kw$label,text], null),sablono$core$select_options21198(val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$option,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$disabled,disabled_QMARK___$1,cljs.core.cst$kw$key,sablono.core.hash_key(val),cljs.core.cst$kw$value,val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$option,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$key,sablono.core.hash_key(x),cljs.core.cst$kw$value,x], null),x], null)));

var G__21219 = (i__21211 + (1));
i__21211 = G__21219;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__21212),sablono$core$select_options21198_$_iter__21209(cljs.core.chunk_rest(s__21210__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__21212),null);
}
} else {
var x = cljs.core.first(s__21210__$2);
return cljs.core.cons(((cljs.core.sequential_QMARK_(x))?(function (){var vec__21218 = x;
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21218,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21218,(1),null);
var disabled_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21218,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$(disabled_QMARK_);
if(cljs.core.sequential_QMARK_(val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$optgroup,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$key,sablono.core.hash_key(text),cljs.core.cst$kw$label,text], null),sablono$core$select_options21198(val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$option,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$disabled,disabled_QMARK___$1,cljs.core.cst$kw$key,sablono.core.hash_key(val),cljs.core.cst$kw$value,val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$option,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$key,sablono.core.hash_key(x),cljs.core.cst$kw$value,x], null),x], null)),sablono$core$select_options21198_$_iter__21209(cljs.core.rest(s__21210__$2)));
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

sablono.core.select_options = sablono.core.wrap_attrs(sablono.core.select_options21198);
/**
 * Creates a drop-down box using the <select> tag.
 */
sablono.core.drop_down21220 = (function sablono$core$drop_down21220(var_args){
var args21221 = [];
var len__5619__auto___21224 = arguments.length;
var i__5620__auto___21225 = (0);
while(true){
if((i__5620__auto___21225 < len__5619__auto___21224)){
args21221.push((arguments[i__5620__auto___21225]));

var G__21226 = (i__5620__auto___21225 + (1));
i__5620__auto___21225 = G__21226;
continue;
} else {
}
break;
}

var G__21223 = args21221.length;
switch (G__21223) {
case 2:
return sablono.core.drop_down21220.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.drop_down21220.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21221.length)].join('')));

}
});

sablono.core.drop_down21220.cljs$core$IFn$_invoke$arity$2 = (function (name,options){
return sablono.core.drop_down21220.cljs$core$IFn$_invoke$arity$3(name,options,null);
});

sablono.core.drop_down21220.cljs$core$IFn$_invoke$arity$3 = (function (name,options,selected){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$select,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,sablono.core.make_name(name),cljs.core.cst$kw$id,sablono.core.make_id(name)], null),(sablono.core.select_options.cljs$core$IFn$_invoke$arity$2 ? sablono.core.select_options.cljs$core$IFn$_invoke$arity$2(options,selected) : sablono.core.select_options.call(null,options,selected))], null);
});

sablono.core.drop_down21220.cljs$lang$maxFixedArity = 3;

sablono.core.drop_down = sablono.core.wrap_attrs(sablono.core.drop_down21220);
/**
 * Creates a text area element.
 */
sablono.core.text_area21228 = (function sablono$core$text_area21228(var_args){
var args21229 = [];
var len__5619__auto___21232 = arguments.length;
var i__5620__auto___21233 = (0);
while(true){
if((i__5620__auto___21233 < len__5619__auto___21232)){
args21229.push((arguments[i__5620__auto___21233]));

var G__21234 = (i__5620__auto___21233 + (1));
i__5620__auto___21233 = G__21234;
continue;
} else {
}
break;
}

var G__21231 = args21229.length;
switch (G__21231) {
case 1:
return sablono.core.text_area21228.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_area21228.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21229.length)].join('')));

}
});

sablono.core.text_area21228.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.text_area21228.cljs$core$IFn$_invoke$arity$2(name,null);
});

sablono.core.text_area21228.cljs$core$IFn$_invoke$arity$2 = (function (name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$textarea,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$name,sablono.core.make_name(name),cljs.core.cst$kw$id,sablono.core.make_id(name),cljs.core.cst$kw$value,value], null)], null);
});

sablono.core.text_area21228.cljs$lang$maxFixedArity = 2;

sablono.core.text_area = sablono.core.wrap_attrs(sablono.core.text_area21228);
/**
 * Creates a label for an input field with the supplied name.
 */
sablono.core.label21236 = (function sablono$core$label21236(name,text){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$label,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$htmlFor,sablono.core.make_id(name)], null),text], null);
});

sablono.core.label = sablono.core.wrap_attrs(sablono.core.label21236);
/**
 * Creates a submit button.
 */
sablono.core.submit_button21237 = (function sablono$core$submit_button21237(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,"submit",cljs.core.cst$kw$value,text], null)], null);
});

sablono.core.submit_button = sablono.core.wrap_attrs(sablono.core.submit_button21237);
/**
 * Creates a form reset button.
 */
sablono.core.reset_button21238 = (function sablono$core$reset_button21238(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,"reset",cljs.core.cst$kw$value,text], null)], null);
});

sablono.core.reset_button = sablono.core.wrap_attrs(sablono.core.reset_button21238);
/**
 * Create a form that points to a particular method and route.
 *   e.g. (form-to [:put "/post"]
 *       ...)
 */
sablono.core.form_to21239 = (function sablono$core$form_to21239(var_args){
var args__5626__auto__ = [];
var len__5619__auto___21247 = arguments.length;
var i__5620__auto___21248 = (0);
while(true){
if((i__5620__auto___21248 < len__5619__auto___21247)){
args__5626__auto__.push((arguments[i__5620__auto___21248]));

var G__21249 = (i__5620__auto___21248 + (1));
i__5620__auto___21248 = G__21249;
continue;
} else {
}
break;
}

var argseq__5627__auto__ = ((((1) < args__5626__auto__.length))?(new cljs.core.IndexedSeq(args__5626__auto__.slice((1)),(0))):null);
return sablono.core.form_to21239.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5627__auto__);
});

sablono.core.form_to21239.cljs$core$IFn$_invoke$arity$variadic = (function (p__21242,body){
var vec__21243 = p__21242;
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21243,(0),null);
var action = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21243,(1),null);
var method_str = clojure.string.upper_case(cljs.core.name(method));
var action_uri = sablono.util.to_uri(action);
return cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$get,null,cljs.core.cst$kw$post,null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$form,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$method,method_str,cljs.core.cst$kw$action,action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$form,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$method,"POST",cljs.core.cst$kw$action,action_uri], null),(function (){var G__21244 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,(3735928559)], null);
var G__21245 = "_method";
var G__21246 = method_str;
return (sablono.core.hidden_field.cljs$core$IFn$_invoke$arity$3 ? sablono.core.hidden_field.cljs$core$IFn$_invoke$arity$3(G__21244,G__21245,G__21246) : sablono.core.hidden_field.call(null,G__21244,G__21245,G__21246));
})()], null)),body));
});

sablono.core.form_to21239.cljs$lang$maxFixedArity = (1);

sablono.core.form_to21239.cljs$lang$applyTo = (function (seq21240){
var G__21241 = cljs.core.first(seq21240);
var seq21240__$1 = cljs.core.next(seq21240);
return sablono.core.form_to21239.cljs$core$IFn$_invoke$arity$variadic(G__21241,seq21240__$1);
});

sablono.core.form_to = sablono.core.wrap_attrs(sablono.core.form_to21239);
