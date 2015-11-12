// Compiled by ClojureScript 1.7.122 {:static-fns true, :optimize-constants true}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var args14928 = [];
var len__5619__auto___14934 = arguments.length;
var i__5620__auto___14935 = (0);
while(true){
if((i__5620__auto___14935 < len__5619__auto___14934)){
args14928.push((arguments[i__5620__auto___14935]));

var G__14936 = (i__5620__auto___14935 + (1));
i__5620__auto___14935 = G__14936;
continue;
} else {
}
break;
}

var G__14930 = args14928.length;
switch (G__14930) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14928.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async14931 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14931 = (function (f,blockable,meta14932){
this.f = f;
this.blockable = blockable;
this.meta14932 = meta14932;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async14931.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14933,meta14932__$1){
var self__ = this;
var _14933__$1 = this;
return (new cljs.core.async.t_cljs$core$async14931(self__.f,self__.blockable,meta14932__$1));
});

cljs.core.async.t_cljs$core$async14931.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14933){
var self__ = this;
var _14933__$1 = this;
return self__.meta14932;
});

cljs.core.async.t_cljs$core$async14931.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async14931.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async14931.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async14931.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async14931.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$blockable,cljs.core.cst$sym$meta14932], null);
});

cljs.core.async.t_cljs$core$async14931.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async14931.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14931";

cljs.core.async.t_cljs$core$async14931.cljs$lang$ctorPrWriter = (function (this__5159__auto__,writer__5160__auto__,opt__5161__auto__){
return cljs.core._write(writer__5160__auto__,"cljs.core.async/t_cljs$core$async14931");
});

cljs.core.async.__GT_t_cljs$core$async14931 = (function cljs$core$async$__GT_t_cljs$core$async14931(f__$1,blockable__$1,meta14932){
return (new cljs.core.async.t_cljs$core$async14931(f__$1,blockable__$1,meta14932));
});

}

return (new cljs.core.async.t_cljs$core$async14931(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;
/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if((false) || (buff.cljs$core$async$impl$protocols$UnblockingBuffer$)){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var args14940 = [];
var len__5619__auto___14943 = arguments.length;
var i__5620__auto___14944 = (0);
while(true){
if((i__5620__auto___14944 < len__5619__auto___14943)){
args14940.push((arguments[i__5620__auto___14944]));

var G__14945 = (i__5620__auto___14944 + (1));
i__5620__auto___14944 = G__14945;
continue;
} else {
}
break;
}

var G__14942 = args14940.length;
switch (G__14942) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14940.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$sym$buf_DASH_or_DASH_n], 0)))].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;
/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var args14947 = [];
var len__5619__auto___14950 = arguments.length;
var i__5620__auto___14951 = (0);
while(true){
if((i__5620__auto___14951 < len__5619__auto___14950)){
args14947.push((arguments[i__5620__auto___14951]));

var G__14952 = (i__5620__auto___14951 + (1));
i__5620__auto___14951 = G__14952;
continue;
} else {
}
break;
}

var G__14949 = args14947.length;
switch (G__14949) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14947.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;
/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var args14954 = [];
var len__5619__auto___14957 = arguments.length;
var i__5620__auto___14958 = (0);
while(true){
if((i__5620__auto___14958 < len__5619__auto___14957)){
args14954.push((arguments[i__5620__auto___14958]));

var G__14959 = (i__5620__auto___14958 + (1));
i__5620__auto___14958 = G__14959;
continue;
} else {
}
break;
}

var G__14956 = args14954.length;
switch (G__14956) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14954.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_14961 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(ret) : cljs.core.deref.call(null,ret));
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_14961) : fn1.call(null,val_14961));
} else {
cljs.core.async.impl.dispatch.run(((function (val_14961,ret){
return (function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_14961) : fn1.call(null,val_14961));
});})(val_14961,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;
cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var args14962 = [];
var len__5619__auto___14965 = arguments.length;
var i__5620__auto___14966 = (0);
while(true){
if((i__5620__auto___14966 < len__5619__auto___14965)){
args14962.push((arguments[i__5620__auto___14966]));

var G__14967 = (i__5620__auto___14966 + (1));
i__5620__auto___14966 = G__14967;
continue;
} else {
}
break;
}

var G__14964 = args14962.length;
switch (G__14964) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14962.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4423__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4423__auto__)){
var ret = temp__4423__auto__;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(ret) : cljs.core.deref.call(null,ret));
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4423__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__4423__auto__)){
var retb = temp__4423__auto__;
var ret = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(retb) : cljs.core.deref.call(null,retb));
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run(((function (ret,retb,temp__4423__auto__){
return (function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
});})(ret,retb,temp__4423__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;
cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__5464__auto___14969 = n;
var x_14970 = (0);
while(true){
if((x_14970 < n__5464__auto___14969)){
(a[x_14970] = (0));

var G__14971 = (x_14970 + (1));
x_14970 = G__14971;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(i,n)){
return a;
} else {
var j = cljs.core.rand_int(i);
(a[i] = (a[j]));

(a[j] = i);

var G__14972 = (i + (1));
i = G__14972;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true) : cljs.core.atom.call(null,true));
if(typeof cljs.core.async.t_cljs$core$async14976 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14976 = (function (alt_flag,flag,meta14977){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta14977 = meta14977;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async14976.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_14978,meta14977__$1){
var self__ = this;
var _14978__$1 = this;
return (new cljs.core.async.t_cljs$core$async14976(self__.alt_flag,self__.flag,meta14977__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async14976.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_14978){
var self__ = this;
var _14978__$1 = this;
return self__.meta14977;
});})(flag))
;

cljs.core.async.t_cljs$core$async14976.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async14976.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(self__.flag) : cljs.core.deref.call(null,self__.flag));
});})(flag))
;

cljs.core.async.t_cljs$core$async14976.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async14976.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(self__.flag,null) : cljs.core.reset_BANG_.call(null,self__.flag,null));

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async14976.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$alt_DASH_flag,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$private,true,cljs.core.cst$kw$arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),cljs.core.cst$sym$flag,cljs.core.cst$sym$meta14977], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async14976.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async14976.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14976";

cljs.core.async.t_cljs$core$async14976.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__5159__auto__,writer__5160__auto__,opt__5161__auto__){
return cljs.core._write(writer__5160__auto__,"cljs.core.async/t_cljs$core$async14976");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async14976 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async14976(alt_flag__$1,flag__$1,meta14977){
return (new cljs.core.async.t_cljs$core$async14976(alt_flag__$1,flag__$1,meta14977));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async14976(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async14982 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14982 = (function (alt_handler,flag,cb,meta14983){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta14983 = meta14983;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async14982.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14984,meta14983__$1){
var self__ = this;
var _14984__$1 = this;
return (new cljs.core.async.t_cljs$core$async14982(self__.alt_handler,self__.flag,self__.cb,meta14983__$1));
});

cljs.core.async.t_cljs$core$async14982.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14984){
var self__ = this;
var _14984__$1 = this;
return self__.meta14983;
});

cljs.core.async.t_cljs$core$async14982.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async14982.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
});

cljs.core.async.t_cljs$core$async14982.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async14982.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async14982.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$alt_DASH_handler,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$private,true,cljs.core.cst$kw$arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$flag,cljs.core.cst$sym$cb], null)))], null)),cljs.core.cst$sym$flag,cljs.core.cst$sym$cb,cljs.core.cst$sym$meta14983], null);
});

cljs.core.async.t_cljs$core$async14982.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async14982.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14982";

cljs.core.async.t_cljs$core$async14982.cljs$lang$ctorPrWriter = (function (this__5159__auto__,writer__5160__auto__,opt__5161__auto__){
return cljs.core._write(writer__5160__auto__,"cljs.core.async/t_cljs$core$async14982");
});

cljs.core.async.__GT_t_cljs$core$async14982 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async14982(alt_handler__$1,flag__$1,cb__$1,meta14983){
return (new cljs.core.async.t_cljs$core$async14982(alt_handler__$1,flag__$1,cb__$1,meta14983));
});

}

return (new cljs.core.async.t_cljs$core$async14982(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = cljs.core.cst$kw$priority.cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__14985_SHARP_){
var G__14989 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__14985_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__14989) : fret.call(null,G__14989));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__14986_SHARP_){
var G__14990 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__14986_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__14990) : fret.call(null,G__14990));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(vbox) : cljs.core.deref.call(null,vbox)),(function (){var or__4561__auto__ = wport;
if(cljs.core.truth_(or__4561__auto__)){
return or__4561__auto__;
} else {
return port;
}
})()], null));
} else {
var G__14991 = (i + (1));
i = G__14991;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4561__auto__ = ret;
if(cljs.core.truth_(or__4561__auto__)){
return or__4561__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,cljs.core.cst$kw$default)){
var temp__4425__auto__ = (function (){var and__4549__auto__ = cljs.core.async.impl.protocols.active_QMARK_(flag);
if(cljs.core.truth_(and__4549__auto__)){
return cljs.core.async.impl.protocols.commit(flag);
} else {
return and__4549__auto__;
}
})();
if(cljs.core.truth_(temp__4425__auto__)){
var got = temp__4425__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$default.cljs$core$IFn$_invoke$arity$1(opts),cljs.core.cst$kw$default], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__5626__auto__ = [];
var len__5619__auto___14997 = arguments.length;
var i__5620__auto___14998 = (0);
while(true){
if((i__5620__auto___14998 < len__5619__auto___14997)){
args__5626__auto__.push((arguments[i__5620__auto___14998]));

var G__14999 = (i__5620__auto___14998 + (1));
i__5620__auto___14998 = G__14999;
continue;
} else {
}
break;
}

var argseq__5627__auto__ = ((((1) < args__5626__auto__.length))?(new cljs.core.IndexedSeq(args__5626__auto__.slice((1)),(0))):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5627__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__14994){
var map__14995 = p__14994;
var map__14995__$1 = ((((!((map__14995 == null)))?((((map__14995.cljs$lang$protocol_mask$partition0$ & (64))) || (map__14995.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14995):map__14995);
var opts = map__14995__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq14992){
var G__14993 = cljs.core.first(seq14992);
var seq14992__$1 = cljs.core.next(seq14992);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__14993,seq14992__$1);
});
/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(ret) : cljs.core.deref.call(null,ret));
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(ret) : cljs.core.deref.call(null,ret));
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var args15000 = [];
var len__5619__auto___15050 = arguments.length;
var i__5620__auto___15051 = (0);
while(true){
if((i__5620__auto___15051 < len__5619__auto___15050)){
args15000.push((arguments[i__5620__auto___15051]));

var G__15052 = (i__5620__auto___15051 + (1));
i__5620__auto___15051 = G__15052;
continue;
} else {
}
break;
}

var G__15002 = args15000.length;
switch (G__15002) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15000.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__8570__auto___15054 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__8570__auto___15054){
return (function (){
var f__8571__auto__ = (function (){var switch__8503__auto__ = ((function (c__8570__auto___15054){
return (function (state_15026){
var state_val_15027 = (state_15026[(1)]);
if((state_val_15027 === (7))){
var inst_15022 = (state_15026[(2)]);
var state_15026__$1 = state_15026;
var statearr_15028_15055 = state_15026__$1;
(statearr_15028_15055[(2)] = inst_15022);

(statearr_15028_15055[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15027 === (1))){
var state_15026__$1 = state_15026;
var statearr_15029_15056 = state_15026__$1;
(statearr_15029_15056[(2)] = null);

(statearr_15029_15056[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15027 === (4))){
var inst_15005 = (state_15026[(7)]);
var inst_15005__$1 = (state_15026[(2)]);
var inst_15006 = (inst_15005__$1 == null);
var state_15026__$1 = (function (){var statearr_15030 = state_15026;
(statearr_15030[(7)] = inst_15005__$1);

return statearr_15030;
})();
if(cljs.core.truth_(inst_15006)){
var statearr_15031_15057 = state_15026__$1;
(statearr_15031_15057[(1)] = (5));

} else {
var statearr_15032_15058 = state_15026__$1;
(statearr_15032_15058[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15027 === (13))){
var state_15026__$1 = state_15026;
var statearr_15033_15059 = state_15026__$1;
(statearr_15033_15059[(2)] = null);

(statearr_15033_15059[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15027 === (6))){
var inst_15005 = (state_15026[(7)]);
var state_15026__$1 = state_15026;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15026__$1,(11),to,inst_15005);
} else {
if((state_val_15027 === (3))){
var inst_15024 = (state_15026[(2)]);
var state_15026__$1 = state_15026;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15026__$1,inst_15024);
} else {
if((state_val_15027 === (12))){
var state_15026__$1 = state_15026;
var statearr_15034_15060 = state_15026__$1;
(statearr_15034_15060[(2)] = null);

(statearr_15034_15060[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15027 === (2))){
var state_15026__$1 = state_15026;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15026__$1,(4),from);
} else {
if((state_val_15027 === (11))){
var inst_15015 = (state_15026[(2)]);
var state_15026__$1 = state_15026;
if(cljs.core.truth_(inst_15015)){
var statearr_15035_15061 = state_15026__$1;
(statearr_15035_15061[(1)] = (12));

} else {
var statearr_15036_15062 = state_15026__$1;
(statearr_15036_15062[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15027 === (9))){
var state_15026__$1 = state_15026;
var statearr_15037_15063 = state_15026__$1;
(statearr_15037_15063[(2)] = null);

(statearr_15037_15063[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15027 === (5))){
var state_15026__$1 = state_15026;
if(cljs.core.truth_(close_QMARK_)){
var statearr_15038_15064 = state_15026__$1;
(statearr_15038_15064[(1)] = (8));

} else {
var statearr_15039_15065 = state_15026__$1;
(statearr_15039_15065[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15027 === (14))){
var inst_15020 = (state_15026[(2)]);
var state_15026__$1 = state_15026;
var statearr_15040_15066 = state_15026__$1;
(statearr_15040_15066[(2)] = inst_15020);

(statearr_15040_15066[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15027 === (10))){
var inst_15012 = (state_15026[(2)]);
var state_15026__$1 = state_15026;
var statearr_15041_15067 = state_15026__$1;
(statearr_15041_15067[(2)] = inst_15012);

(statearr_15041_15067[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15027 === (8))){
var inst_15009 = cljs.core.async.close_BANG_(to);
var state_15026__$1 = state_15026;
var statearr_15042_15068 = state_15026__$1;
(statearr_15042_15068[(2)] = inst_15009);

(statearr_15042_15068[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__8570__auto___15054))
;
return ((function (switch__8503__auto__,c__8570__auto___15054){
return (function() {
var cljs$core$async$state_machine__8504__auto__ = null;
var cljs$core$async$state_machine__8504__auto____0 = (function (){
var statearr_15046 = [null,null,null,null,null,null,null,null];
(statearr_15046[(0)] = cljs$core$async$state_machine__8504__auto__);

(statearr_15046[(1)] = (1));

return statearr_15046;
});
var cljs$core$async$state_machine__8504__auto____1 = (function (state_15026){
while(true){
var ret_value__8505__auto__ = (function (){try{while(true){
var result__8506__auto__ = switch__8503__auto__(state_15026);
if(cljs.core.keyword_identical_QMARK_(result__8506__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__8506__auto__;
}
break;
}
}catch (e15047){if((e15047 instanceof Object)){
var ex__8507__auto__ = e15047;
var statearr_15048_15069 = state_15026;
(statearr_15048_15069[(5)] = ex__8507__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_15026);

return cljs.core.cst$kw$recur;
} else {
throw e15047;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__8505__auto__,cljs.core.cst$kw$recur)){
var G__15070 = state_15026;
state_15026 = G__15070;
continue;
} else {
return ret_value__8505__auto__;
}
break;
}
});
cljs$core$async$state_machine__8504__auto__ = function(state_15026){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__8504__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__8504__auto____1.call(this,state_15026);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__8504__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__8504__auto____0;
cljs$core$async$state_machine__8504__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__8504__auto____1;
return cljs$core$async$state_machine__8504__auto__;
})()
;})(switch__8503__auto__,c__8570__auto___15054))
})();
var state__8572__auto__ = (function (){var statearr_15049 = (f__8571__auto__.cljs$core$IFn$_invoke$arity$0 ? f__8571__auto__.cljs$core$IFn$_invoke$arity$0() : f__8571__auto__.call(null));
(statearr_15049[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8570__auto___15054);

return statearr_15049;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__8572__auto__);
});})(c__8570__auto___15054))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;
cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(cljs.core.cst$sym$pos_QMARK_,cljs.core.cst$sym$n)], 0)))].join('')));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process = ((function (jobs,results){
return (function (p__15254){
var vec__15255 = p__15254;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15255,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15255,(1),null);
var job = vec__15255;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__8570__auto___15437 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__8570__auto___15437,res,vec__15255,v,p,job,jobs,results){
return (function (){
var f__8571__auto__ = (function (){var switch__8503__auto__ = ((function (c__8570__auto___15437,res,vec__15255,v,p,job,jobs,results){
return (function (state_15260){
var state_val_15261 = (state_15260[(1)]);
if((state_val_15261 === (1))){
var state_15260__$1 = state_15260;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15260__$1,(2),res,v);
} else {
if((state_val_15261 === (2))){
var inst_15257 = (state_15260[(2)]);
var inst_15258 = cljs.core.async.close_BANG_(res);
var state_15260__$1 = (function (){var statearr_15262 = state_15260;
(statearr_15262[(7)] = inst_15257);

return statearr_15262;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_15260__$1,inst_15258);
} else {
return null;
}
}
});})(c__8570__auto___15437,res,vec__15255,v,p,job,jobs,results))
;
return ((function (switch__8503__auto__,c__8570__auto___15437,res,vec__15255,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__8504__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__8504__auto____0 = (function (){
var statearr_15266 = [null,null,null,null,null,null,null,null];
(statearr_15266[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__8504__auto__);

(statearr_15266[(1)] = (1));

return statearr_15266;
});
var cljs$core$async$pipeline_STAR__$_state_machine__8504__auto____1 = (function (state_15260){
while(true){
var ret_value__8505__auto__ = (function (){try{while(true){
var result__8506__auto__ = switch__8503__auto__(state_15260);
if(cljs.core.keyword_identical_QMARK_(result__8506__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__8506__auto__;
}
break;
}
}catch (e15267){if((e15267 instanceof Object)){
var ex__8507__auto__ = e15267;
var statearr_15268_15438 = state_15260;
(statearr_15268_15438[(5)] = ex__8507__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_15260);

return cljs.core.cst$kw$recur;
} else {
throw e15267;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__8505__auto__,cljs.core.cst$kw$recur)){
var G__15439 = state_15260;
state_15260 = G__15439;
continue;
} else {
return ret_value__8505__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__8504__auto__ = function(state_15260){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__8504__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__8504__auto____1.call(this,state_15260);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__8504__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__8504__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__8504__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__8504__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__8504__auto__;
})()
;})(switch__8503__auto__,c__8570__auto___15437,res,vec__15255,v,p,job,jobs,results))
})();
var state__8572__auto__ = (function (){var statearr_15269 = (f__8571__auto__.cljs$core$IFn$_invoke$arity$0 ? f__8571__auto__.cljs$core$IFn$_invoke$arity$0() : f__8571__auto__.call(null));
(statearr_15269[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8570__auto___15437);

return statearr_15269;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__8572__auto__);
});})(c__8570__auto___15437,res,vec__15255,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__15270){
var vec__15271 = p__15270;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15271,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15271,(1),null);
var job = vec__15271;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});})(jobs,results,process))
;
var n__5464__auto___15440 = n;
var __15441 = (0);
while(true){
if((__15441 < n__5464__auto___15440)){
var G__15272_15442 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__15272_15442) {
case "compute":
var c__8570__auto___15444 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__15441,c__8570__auto___15444,G__15272_15442,n__5464__auto___15440,jobs,results,process,async){
return (function (){
var f__8571__auto__ = (function (){var switch__8503__auto__ = ((function (__15441,c__8570__auto___15444,G__15272_15442,n__5464__auto___15440,jobs,results,process,async){
return (function (state_15285){
var state_val_15286 = (state_15285[(1)]);
if((state_val_15286 === (1))){
var state_15285__$1 = state_15285;
var statearr_15287_15445 = state_15285__$1;
(statearr_15287_15445[(2)] = null);

(statearr_15287_15445[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15286 === (2))){
var state_15285__$1 = state_15285;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15285__$1,(4),jobs);
} else {
if((state_val_15286 === (3))){
var inst_15283 = (state_15285[(2)]);
var state_15285__$1 = state_15285;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15285__$1,inst_15283);
} else {
if((state_val_15286 === (4))){
var inst_15275 = (state_15285[(2)]);
var inst_15276 = process(inst_15275);
var state_15285__$1 = state_15285;
if(cljs.core.truth_(inst_15276)){
var statearr_15288_15446 = state_15285__$1;
(statearr_15288_15446[(1)] = (5));

} else {
var statearr_15289_15447 = state_15285__$1;
(statearr_15289_15447[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15286 === (5))){
var state_15285__$1 = state_15285;
var statearr_15290_15448 = state_15285__$1;
(statearr_15290_15448[(2)] = null);

(statearr_15290_15448[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15286 === (6))){
var state_15285__$1 = state_15285;
var statearr_15291_15449 = state_15285__$1;
(statearr_15291_15449[(2)] = null);

(statearr_15291_15449[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15286 === (7))){
var inst_15281 = (state_15285[(2)]);
var state_15285__$1 = state_15285;
var statearr_15292_15450 = state_15285__$1;
(statearr_15292_15450[(2)] = inst_15281);

(statearr_15292_15450[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
});})(__15441,c__8570__auto___15444,G__15272_15442,n__5464__auto___15440,jobs,results,process,async))
;
return ((function (__15441,switch__8503__auto__,c__8570__auto___15444,G__15272_15442,n__5464__auto___15440,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__8504__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__8504__auto____0 = (function (){
var statearr_15296 = [null,null,null,null,null,null,null];
(statearr_15296[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__8504__auto__);

(statearr_15296[(1)] = (1));

return statearr_15296;
});
var cljs$core$async$pipeline_STAR__$_state_machine__8504__auto____1 = (function (state_15285){
while(true){
var ret_value__8505__auto__ = (function (){try{while(true){
var result__8506__auto__ = switch__8503__auto__(state_15285);
if(cljs.core.keyword_identical_QMARK_(result__8506__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__8506__auto__;
}
break;
}
}catch (e15297){if((e15297 instanceof Object)){
var ex__8507__auto__ = e15297;
var statearr_15298_15451 = state_15285;
(statearr_15298_15451[(5)] = ex__8507__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_15285);

return cljs.core.cst$kw$recur;
} else {
throw e15297;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__8505__auto__,cljs.core.cst$kw$recur)){
var G__15452 = state_15285;
state_15285 = G__15452;
continue;
} else {
return ret_value__8505__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__8504__auto__ = function(state_15285){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__8504__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__8504__auto____1.call(this,state_15285);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__8504__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__8504__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__8504__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__8504__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__8504__auto__;
})()
;})(__15441,switch__8503__auto__,c__8570__auto___15444,G__15272_15442,n__5464__auto___15440,jobs,results,process,async))
})();
var state__8572__auto__ = (function (){var statearr_15299 = (f__8571__auto__.cljs$core$IFn$_invoke$arity$0 ? f__8571__auto__.cljs$core$IFn$_invoke$arity$0() : f__8571__auto__.call(null));
(statearr_15299[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8570__auto___15444);

return statearr_15299;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__8572__auto__);
});})(__15441,c__8570__auto___15444,G__15272_15442,n__5464__auto___15440,jobs,results,process,async))
);


break;
case "async":
var c__8570__auto___15453 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__15441,c__8570__auto___15453,G__15272_15442,n__5464__auto___15440,jobs,results,process,async){
return (function (){
var f__8571__auto__ = (function (){var switch__8503__auto__ = ((function (__15441,c__8570__auto___15453,G__15272_15442,n__5464__auto___15440,jobs,results,process,async){
return (function (state_15312){
var state_val_15313 = (state_15312[(1)]);
if((state_val_15313 === (1))){
var state_15312__$1 = state_15312;
var statearr_15314_15454 = state_15312__$1;
(statearr_15314_15454[(2)] = null);

(statearr_15314_15454[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15313 === (2))){
var state_15312__$1 = state_15312;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15312__$1,(4),jobs);
} else {
if((state_val_15313 === (3))){
var inst_15310 = (state_15312[(2)]);
var state_15312__$1 = state_15312;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15312__$1,inst_15310);
} else {
if((state_val_15313 === (4))){
var inst_15302 = (state_15312[(2)]);
var inst_15303 = async(inst_15302);
var state_15312__$1 = state_15312;
if(cljs.core.truth_(inst_15303)){
var statearr_15315_15455 = state_15312__$1;
(statearr_15315_15455[(1)] = (5));

} else {
var statearr_15316_15456 = state_15312__$1;
(statearr_15316_15456[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15313 === (5))){
var state_15312__$1 = state_15312;
var statearr_15317_15457 = state_15312__$1;
(statearr_15317_15457[(2)] = null);

(statearr_15317_15457[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15313 === (6))){
var state_15312__$1 = state_15312;
var statearr_15318_15458 = state_15312__$1;
(statearr_15318_15458[(2)] = null);

(statearr_15318_15458[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15313 === (7))){
var inst_15308 = (state_15312[(2)]);
var state_15312__$1 = state_15312;
var statearr_15319_15459 = state_15312__$1;
(statearr_15319_15459[(2)] = inst_15308);

(statearr_15319_15459[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
});})(__15441,c__8570__auto___15453,G__15272_15442,n__5464__auto___15440,jobs,results,process,async))
;
return ((function (__15441,switch__8503__auto__,c__8570__auto___15453,G__15272_15442,n__5464__auto___15440,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__8504__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__8504__auto____0 = (function (){
var statearr_15323 = [null,null,null,null,null,null,null];
(statearr_15323[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__8504__auto__);

(statearr_15323[(1)] = (1));

return statearr_15323;
});
var cljs$core$async$pipeline_STAR__$_state_machine__8504__auto____1 = (function (state_15312){
while(true){
var ret_value__8505__auto__ = (function (){try{while(true){
var result__8506__auto__ = switch__8503__auto__(state_15312);
if(cljs.core.keyword_identical_QMARK_(result__8506__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__8506__auto__;
}
break;
}
}catch (e15324){if((e15324 instanceof Object)){
var ex__8507__auto__ = e15324;
var statearr_15325_15460 = state_15312;
(statearr_15325_15460[(5)] = ex__8507__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_15312);

return cljs.core.cst$kw$recur;
} else {
throw e15324;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__8505__auto__,cljs.core.cst$kw$recur)){
var G__15461 = state_15312;
state_15312 = G__15461;
continue;
} else {
return ret_value__8505__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__8504__auto__ = function(state_15312){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__8504__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__8504__auto____1.call(this,state_15312);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__8504__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__8504__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__8504__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__8504__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__8504__auto__;
})()
;})(__15441,switch__8503__auto__,c__8570__auto___15453,G__15272_15442,n__5464__auto___15440,jobs,results,process,async))
})();
var state__8572__auto__ = (function (){var statearr_15326 = (f__8571__auto__.cljs$core$IFn$_invoke$arity$0 ? f__8571__auto__.cljs$core$IFn$_invoke$arity$0() : f__8571__auto__.call(null));
(statearr_15326[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8570__auto___15453);

return statearr_15326;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__8572__auto__);
});})(__15441,c__8570__auto___15453,G__15272_15442,n__5464__auto___15440,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__15462 = (__15441 + (1));
__15441 = G__15462;
continue;
} else {
}
break;
}

var c__8570__auto___15463 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__8570__auto___15463,jobs,results,process,async){
return (function (){
var f__8571__auto__ = (function (){var switch__8503__auto__ = ((function (c__8570__auto___15463,jobs,results,process,async){
return (function (state_15348){
var state_val_15349 = (state_15348[(1)]);
if((state_val_15349 === (1))){
var state_15348__$1 = state_15348;
var statearr_15350_15464 = state_15348__$1;
(statearr_15350_15464[(2)] = null);

(statearr_15350_15464[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15349 === (2))){
var state_15348__$1 = state_15348;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15348__$1,(4),from);
} else {
if((state_val_15349 === (3))){
var inst_15346 = (state_15348[(2)]);
var state_15348__$1 = state_15348;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15348__$1,inst_15346);
} else {
if((state_val_15349 === (4))){
var inst_15329 = (state_15348[(7)]);
var inst_15329__$1 = (state_15348[(2)]);
var inst_15330 = (inst_15329__$1 == null);
var state_15348__$1 = (function (){var statearr_15351 = state_15348;
(statearr_15351[(7)] = inst_15329__$1);

return statearr_15351;
})();
if(cljs.core.truth_(inst_15330)){
var statearr_15352_15465 = state_15348__$1;
(statearr_15352_15465[(1)] = (5));

} else {
var statearr_15353_15466 = state_15348__$1;
(statearr_15353_15466[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15349 === (5))){
var inst_15332 = cljs.core.async.close_BANG_(jobs);
var state_15348__$1 = state_15348;
var statearr_15354_15467 = state_15348__$1;
(statearr_15354_15467[(2)] = inst_15332);

(statearr_15354_15467[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15349 === (6))){
var inst_15334 = (state_15348[(8)]);
var inst_15329 = (state_15348[(7)]);
var inst_15334__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_15335 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_15336 = [inst_15329,inst_15334__$1];
var inst_15337 = (new cljs.core.PersistentVector(null,2,(5),inst_15335,inst_15336,null));
var state_15348__$1 = (function (){var statearr_15355 = state_15348;
(statearr_15355[(8)] = inst_15334__$1);

return statearr_15355;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15348__$1,(8),jobs,inst_15337);
} else {
if((state_val_15349 === (7))){
var inst_15344 = (state_15348[(2)]);
var state_15348__$1 = state_15348;
var statearr_15356_15468 = state_15348__$1;
(statearr_15356_15468[(2)] = inst_15344);

(statearr_15356_15468[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15349 === (8))){
var inst_15334 = (state_15348[(8)]);
var inst_15339 = (state_15348[(2)]);
var state_15348__$1 = (function (){var statearr_15357 = state_15348;
(statearr_15357[(9)] = inst_15339);

return statearr_15357;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15348__$1,(9),results,inst_15334);
} else {
if((state_val_15349 === (9))){
var inst_15341 = (state_15348[(2)]);
var state_15348__$1 = (function (){var statearr_15358 = state_15348;
(statearr_15358[(10)] = inst_15341);

return statearr_15358;
})();
var statearr_15359_15469 = state_15348__$1;
(statearr_15359_15469[(2)] = null);

(statearr_15359_15469[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
});})(c__8570__auto___15463,jobs,results,process,async))
;
return ((function (switch__8503__auto__,c__8570__auto___15463,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__8504__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__8504__auto____0 = (function (){
var statearr_15363 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_15363[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__8504__auto__);

(statearr_15363[(1)] = (1));

return statearr_15363;
});
var cljs$core$async$pipeline_STAR__$_state_machine__8504__auto____1 = (function (state_15348){
while(true){
var ret_value__8505__auto__ = (function (){try{while(true){
var result__8506__auto__ = switch__8503__auto__(state_15348);
if(cljs.core.keyword_identical_QMARK_(result__8506__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__8506__auto__;
}
break;
}
}catch (e15364){if((e15364 instanceof Object)){
var ex__8507__auto__ = e15364;
var statearr_15365_15470 = state_15348;
(statearr_15365_15470[(5)] = ex__8507__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_15348);

return cljs.core.cst$kw$recur;
} else {
throw e15364;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__8505__auto__,cljs.core.cst$kw$recur)){
var G__15471 = state_15348;
state_15348 = G__15471;
continue;
} else {
return ret_value__8505__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__8504__auto__ = function(state_15348){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__8504__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__8504__auto____1.call(this,state_15348);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__8504__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__8504__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__8504__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__8504__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__8504__auto__;
})()
;})(switch__8503__auto__,c__8570__auto___15463,jobs,results,process,async))
})();
var state__8572__auto__ = (function (){var statearr_15366 = (f__8571__auto__.cljs$core$IFn$_invoke$arity$0 ? f__8571__auto__.cljs$core$IFn$_invoke$arity$0() : f__8571__auto__.call(null));
(statearr_15366[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8570__auto___15463);

return statearr_15366;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__8572__auto__);
});})(c__8570__auto___15463,jobs,results,process,async))
);


var c__8570__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__8570__auto__,jobs,results,process,async){
return (function (){
var f__8571__auto__ = (function (){var switch__8503__auto__ = ((function (c__8570__auto__,jobs,results,process,async){
return (function (state_15404){
var state_val_15405 = (state_15404[(1)]);
if((state_val_15405 === (7))){
var inst_15400 = (state_15404[(2)]);
var state_15404__$1 = state_15404;
var statearr_15406_15472 = state_15404__$1;
(statearr_15406_15472[(2)] = inst_15400);

(statearr_15406_15472[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15405 === (20))){
var state_15404__$1 = state_15404;
var statearr_15407_15473 = state_15404__$1;
(statearr_15407_15473[(2)] = null);

(statearr_15407_15473[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15405 === (1))){
var state_15404__$1 = state_15404;
var statearr_15408_15474 = state_15404__$1;
(statearr_15408_15474[(2)] = null);

(statearr_15408_15474[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15405 === (4))){
var inst_15369 = (state_15404[(7)]);
var inst_15369__$1 = (state_15404[(2)]);
var inst_15370 = (inst_15369__$1 == null);
var state_15404__$1 = (function (){var statearr_15409 = state_15404;
(statearr_15409[(7)] = inst_15369__$1);

return statearr_15409;
})();
if(cljs.core.truth_(inst_15370)){
var statearr_15410_15475 = state_15404__$1;
(statearr_15410_15475[(1)] = (5));

} else {
var statearr_15411_15476 = state_15404__$1;
(statearr_15411_15476[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15405 === (15))){
var inst_15382 = (state_15404[(8)]);
var state_15404__$1 = state_15404;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15404__$1,(18),to,inst_15382);
} else {
if((state_val_15405 === (21))){
var inst_15395 = (state_15404[(2)]);
var state_15404__$1 = state_15404;
var statearr_15412_15477 = state_15404__$1;
(statearr_15412_15477[(2)] = inst_15395);

(statearr_15412_15477[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15405 === (13))){
var inst_15397 = (state_15404[(2)]);
var state_15404__$1 = (function (){var statearr_15413 = state_15404;
(statearr_15413[(9)] = inst_15397);

return statearr_15413;
})();
var statearr_15414_15478 = state_15404__$1;
(statearr_15414_15478[(2)] = null);

(statearr_15414_15478[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15405 === (6))){
var inst_15369 = (state_15404[(7)]);
var state_15404__$1 = state_15404;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15404__$1,(11),inst_15369);
} else {
if((state_val_15405 === (17))){
var inst_15390 = (state_15404[(2)]);
var state_15404__$1 = state_15404;
if(cljs.core.truth_(inst_15390)){
var statearr_15415_15479 = state_15404__$1;
(statearr_15415_15479[(1)] = (19));

} else {
var statearr_15416_15480 = state_15404__$1;
(statearr_15416_15480[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15405 === (3))){
var inst_15402 = (state_15404[(2)]);
var state_15404__$1 = state_15404;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15404__$1,inst_15402);
} else {
if((state_val_15405 === (12))){
var inst_15379 = (state_15404[(10)]);
var state_15404__$1 = state_15404;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15404__$1,(14),inst_15379);
} else {
if((state_val_15405 === (2))){
var state_15404__$1 = state_15404;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15404__$1,(4),results);
} else {
if((state_val_15405 === (19))){
var state_15404__$1 = state_15404;
var statearr_15417_15481 = state_15404__$1;
(statearr_15417_15481[(2)] = null);

(statearr_15417_15481[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15405 === (11))){
var inst_15379 = (state_15404[(2)]);
var state_15404__$1 = (function (){var statearr_15418 = state_15404;
(statearr_15418[(10)] = inst_15379);

return statearr_15418;
})();
var statearr_15419_15482 = state_15404__$1;
(statearr_15419_15482[(2)] = null);

(statearr_15419_15482[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15405 === (9))){
var state_15404__$1 = state_15404;
var statearr_15420_15483 = state_15404__$1;
(statearr_15420_15483[(2)] = null);

(statearr_15420_15483[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15405 === (5))){
var state_15404__$1 = state_15404;
if(cljs.core.truth_(close_QMARK_)){
var statearr_15421_15484 = state_15404__$1;
(statearr_15421_15484[(1)] = (8));

} else {
var statearr_15422_15485 = state_15404__$1;
(statearr_15422_15485[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15405 === (14))){
var inst_15382 = (state_15404[(8)]);
var inst_15384 = (state_15404[(11)]);
var inst_15382__$1 = (state_15404[(2)]);
var inst_15383 = (inst_15382__$1 == null);
var inst_15384__$1 = cljs.core.not(inst_15383);
var state_15404__$1 = (function (){var statearr_15423 = state_15404;
(statearr_15423[(8)] = inst_15382__$1);

(statearr_15423[(11)] = inst_15384__$1);

return statearr_15423;
})();
if(inst_15384__$1){
var statearr_15424_15486 = state_15404__$1;
(statearr_15424_15486[(1)] = (15));

} else {
var statearr_15425_15487 = state_15404__$1;
(statearr_15425_15487[(1)] = (16));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15405 === (16))){
var inst_15384 = (state_15404[(11)]);
var state_15404__$1 = state_15404;
var statearr_15426_15488 = state_15404__$1;
(statearr_15426_15488[(2)] = inst_15384);

(statearr_15426_15488[(1)] = (17));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15405 === (10))){
var inst_15376 = (state_15404[(2)]);
var state_15404__$1 = state_15404;
var statearr_15427_15489 = state_15404__$1;
(statearr_15427_15489[(2)] = inst_15376);

(statearr_15427_15489[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15405 === (18))){
var inst_15387 = (state_15404[(2)]);
var state_15404__$1 = state_15404;
var statearr_15428_15490 = state_15404__$1;
(statearr_15428_15490[(2)] = inst_15387);

(statearr_15428_15490[(1)] = (17));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15405 === (8))){
var inst_15373 = cljs.core.async.close_BANG_(to);
var state_15404__$1 = state_15404;
var statearr_15429_15491 = state_15404__$1;
(statearr_15429_15491[(2)] = inst_15373);

(statearr_15429_15491[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__8570__auto__,jobs,results,process,async))
;
return ((function (switch__8503__auto__,c__8570__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__8504__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__8504__auto____0 = (function (){
var statearr_15433 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15433[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__8504__auto__);

(statearr_15433[(1)] = (1));

return statearr_15433;
});
var cljs$core$async$pipeline_STAR__$_state_machine__8504__auto____1 = (function (state_15404){
while(true){
var ret_value__8505__auto__ = (function (){try{while(true){
var result__8506__auto__ = switch__8503__auto__(state_15404);
if(cljs.core.keyword_identical_QMARK_(result__8506__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__8506__auto__;
}
break;
}
}catch (e15434){if((e15434 instanceof Object)){
var ex__8507__auto__ = e15434;
var statearr_15435_15492 = state_15404;
(statearr_15435_15492[(5)] = ex__8507__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_15404);

return cljs.core.cst$kw$recur;
} else {
throw e15434;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__8505__auto__,cljs.core.cst$kw$recur)){
var G__15493 = state_15404;
state_15404 = G__15493;
continue;
} else {
return ret_value__8505__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__8504__auto__ = function(state_15404){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__8504__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__8504__auto____1.call(this,state_15404);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__8504__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__8504__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__8504__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__8504__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__8504__auto__;
})()
;})(switch__8503__auto__,c__8570__auto__,jobs,results,process,async))
})();
var state__8572__auto__ = (function (){var statearr_15436 = (f__8571__auto__.cljs$core$IFn$_invoke$arity$0 ? f__8571__auto__.cljs$core$IFn$_invoke$arity$0() : f__8571__auto__.call(null));
(statearr_15436[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8570__auto__);

return statearr_15436;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__8572__auto__);
});})(c__8570__auto__,jobs,results,process,async))
);

return c__8570__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var args15494 = [];
var len__5619__auto___15497 = arguments.length;
var i__5620__auto___15498 = (0);
while(true){
if((i__5620__auto___15498 < len__5619__auto___15497)){
args15494.push((arguments[i__5620__auto___15498]));

var G__15499 = (i__5620__auto___15498 + (1));
i__5620__auto___15498 = G__15499;
continue;
} else {
}
break;
}

var G__15496 = args15494.length;
switch (G__15496) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15494.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,cljs.core.cst$kw$async);
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var args15501 = [];
var len__5619__auto___15504 = arguments.length;
var i__5620__auto___15505 = (0);
while(true){
if((i__5620__auto___15505 < len__5619__auto___15504)){
args15501.push((arguments[i__5620__auto___15505]));

var G__15506 = (i__5620__auto___15505 + (1));
i__5620__auto___15505 = G__15506;
continue;
} else {
}
break;
}

var G__15503 = args15501.length;
switch (G__15503) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15501.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,cljs.core.cst$kw$compute);
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;
/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var args15508 = [];
var len__5619__auto___15561 = arguments.length;
var i__5620__auto___15562 = (0);
while(true){
if((i__5620__auto___15562 < len__5619__auto___15561)){
args15508.push((arguments[i__5620__auto___15562]));

var G__15563 = (i__5620__auto___15562 + (1));
i__5620__auto___15562 = G__15563;
continue;
} else {
}
break;
}

var G__15510 = args15508.length;
switch (G__15510) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15508.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__8570__auto___15565 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__8570__auto___15565,tc,fc){
return (function (){
var f__8571__auto__ = (function (){var switch__8503__auto__ = ((function (c__8570__auto___15565,tc,fc){
return (function (state_15536){
var state_val_15537 = (state_15536[(1)]);
if((state_val_15537 === (7))){
var inst_15532 = (state_15536[(2)]);
var state_15536__$1 = state_15536;
var statearr_15538_15566 = state_15536__$1;
(statearr_15538_15566[(2)] = inst_15532);

(statearr_15538_15566[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15537 === (1))){
var state_15536__$1 = state_15536;
var statearr_15539_15567 = state_15536__$1;
(statearr_15539_15567[(2)] = null);

(statearr_15539_15567[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15537 === (4))){
var inst_15513 = (state_15536[(7)]);
var inst_15513__$1 = (state_15536[(2)]);
var inst_15514 = (inst_15513__$1 == null);
var state_15536__$1 = (function (){var statearr_15540 = state_15536;
(statearr_15540[(7)] = inst_15513__$1);

return statearr_15540;
})();
if(cljs.core.truth_(inst_15514)){
var statearr_15541_15568 = state_15536__$1;
(statearr_15541_15568[(1)] = (5));

} else {
var statearr_15542_15569 = state_15536__$1;
(statearr_15542_15569[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15537 === (13))){
var state_15536__$1 = state_15536;
var statearr_15543_15570 = state_15536__$1;
(statearr_15543_15570[(2)] = null);

(statearr_15543_15570[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15537 === (6))){
var inst_15513 = (state_15536[(7)]);
var inst_15519 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_15513) : p.call(null,inst_15513));
var state_15536__$1 = state_15536;
if(cljs.core.truth_(inst_15519)){
var statearr_15544_15571 = state_15536__$1;
(statearr_15544_15571[(1)] = (9));

} else {
var statearr_15545_15572 = state_15536__$1;
(statearr_15545_15572[(1)] = (10));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15537 === (3))){
var inst_15534 = (state_15536[(2)]);
var state_15536__$1 = state_15536;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15536__$1,inst_15534);
} else {
if((state_val_15537 === (12))){
var state_15536__$1 = state_15536;
var statearr_15546_15573 = state_15536__$1;
(statearr_15546_15573[(2)] = null);

(statearr_15546_15573[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15537 === (2))){
var state_15536__$1 = state_15536;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15536__$1,(4),ch);
} else {
if((state_val_15537 === (11))){
var inst_15513 = (state_15536[(7)]);
var inst_15523 = (state_15536[(2)]);
var state_15536__$1 = state_15536;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15536__$1,(8),inst_15523,inst_15513);
} else {
if((state_val_15537 === (9))){
var state_15536__$1 = state_15536;
var statearr_15547_15574 = state_15536__$1;
(statearr_15547_15574[(2)] = tc);

(statearr_15547_15574[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15537 === (5))){
var inst_15516 = cljs.core.async.close_BANG_(tc);
var inst_15517 = cljs.core.async.close_BANG_(fc);
var state_15536__$1 = (function (){var statearr_15548 = state_15536;
(statearr_15548[(8)] = inst_15516);

return statearr_15548;
})();
var statearr_15549_15575 = state_15536__$1;
(statearr_15549_15575[(2)] = inst_15517);

(statearr_15549_15575[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15537 === (14))){
var inst_15530 = (state_15536[(2)]);
var state_15536__$1 = state_15536;
var statearr_15550_15576 = state_15536__$1;
(statearr_15550_15576[(2)] = inst_15530);

(statearr_15550_15576[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15537 === (10))){
var state_15536__$1 = state_15536;
var statearr_15551_15577 = state_15536__$1;
(statearr_15551_15577[(2)] = fc);

(statearr_15551_15577[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15537 === (8))){
var inst_15525 = (state_15536[(2)]);
var state_15536__$1 = state_15536;
if(cljs.core.truth_(inst_15525)){
var statearr_15552_15578 = state_15536__$1;
(statearr_15552_15578[(1)] = (12));

} else {
var statearr_15553_15579 = state_15536__$1;
(statearr_15553_15579[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__8570__auto___15565,tc,fc))
;
return ((function (switch__8503__auto__,c__8570__auto___15565,tc,fc){
return (function() {
var cljs$core$async$state_machine__8504__auto__ = null;
var cljs$core$async$state_machine__8504__auto____0 = (function (){
var statearr_15557 = [null,null,null,null,null,null,null,null,null];
(statearr_15557[(0)] = cljs$core$async$state_machine__8504__auto__);

(statearr_15557[(1)] = (1));

return statearr_15557;
});
var cljs$core$async$state_machine__8504__auto____1 = (function (state_15536){
while(true){
var ret_value__8505__auto__ = (function (){try{while(true){
var result__8506__auto__ = switch__8503__auto__(state_15536);
if(cljs.core.keyword_identical_QMARK_(result__8506__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__8506__auto__;
}
break;
}
}catch (e15558){if((e15558 instanceof Object)){
var ex__8507__auto__ = e15558;
var statearr_15559_15580 = state_15536;
(statearr_15559_15580[(5)] = ex__8507__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_15536);

return cljs.core.cst$kw$recur;
} else {
throw e15558;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__8505__auto__,cljs.core.cst$kw$recur)){
var G__15581 = state_15536;
state_15536 = G__15581;
continue;
} else {
return ret_value__8505__auto__;
}
break;
}
});
cljs$core$async$state_machine__8504__auto__ = function(state_15536){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__8504__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__8504__auto____1.call(this,state_15536);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__8504__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__8504__auto____0;
cljs$core$async$state_machine__8504__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__8504__auto____1;
return cljs$core$async$state_machine__8504__auto__;
})()
;})(switch__8503__auto__,c__8570__auto___15565,tc,fc))
})();
var state__8572__auto__ = (function (){var statearr_15560 = (f__8571__auto__.cljs$core$IFn$_invoke$arity$0 ? f__8571__auto__.cljs$core$IFn$_invoke$arity$0() : f__8571__auto__.call(null));
(statearr_15560[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8570__auto___15565);

return statearr_15560;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__8572__auto__);
});})(c__8570__auto___15565,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;
/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__8570__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__8570__auto__){
return (function (){
var f__8571__auto__ = (function (){var switch__8503__auto__ = ((function (c__8570__auto__){
return (function (state_15645){
var state_val_15646 = (state_15645[(1)]);
if((state_val_15646 === (7))){
var inst_15641 = (state_15645[(2)]);
var state_15645__$1 = state_15645;
var statearr_15647_15668 = state_15645__$1;
(statearr_15647_15668[(2)] = inst_15641);

(statearr_15647_15668[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15646 === (1))){
var inst_15625 = init;
var state_15645__$1 = (function (){var statearr_15648 = state_15645;
(statearr_15648[(7)] = inst_15625);

return statearr_15648;
})();
var statearr_15649_15669 = state_15645__$1;
(statearr_15649_15669[(2)] = null);

(statearr_15649_15669[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15646 === (4))){
var inst_15628 = (state_15645[(8)]);
var inst_15628__$1 = (state_15645[(2)]);
var inst_15629 = (inst_15628__$1 == null);
var state_15645__$1 = (function (){var statearr_15650 = state_15645;
(statearr_15650[(8)] = inst_15628__$1);

return statearr_15650;
})();
if(cljs.core.truth_(inst_15629)){
var statearr_15651_15670 = state_15645__$1;
(statearr_15651_15670[(1)] = (5));

} else {
var statearr_15652_15671 = state_15645__$1;
(statearr_15652_15671[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15646 === (6))){
var inst_15628 = (state_15645[(8)]);
var inst_15632 = (state_15645[(9)]);
var inst_15625 = (state_15645[(7)]);
var inst_15632__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_15625,inst_15628) : f.call(null,inst_15625,inst_15628));
var inst_15633 = cljs.core.reduced_QMARK_(inst_15632__$1);
var state_15645__$1 = (function (){var statearr_15653 = state_15645;
(statearr_15653[(9)] = inst_15632__$1);

return statearr_15653;
})();
if(inst_15633){
var statearr_15654_15672 = state_15645__$1;
(statearr_15654_15672[(1)] = (8));

} else {
var statearr_15655_15673 = state_15645__$1;
(statearr_15655_15673[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15646 === (3))){
var inst_15643 = (state_15645[(2)]);
var state_15645__$1 = state_15645;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15645__$1,inst_15643);
} else {
if((state_val_15646 === (2))){
var state_15645__$1 = state_15645;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15645__$1,(4),ch);
} else {
if((state_val_15646 === (9))){
var inst_15632 = (state_15645[(9)]);
var inst_15625 = inst_15632;
var state_15645__$1 = (function (){var statearr_15656 = state_15645;
(statearr_15656[(7)] = inst_15625);

return statearr_15656;
})();
var statearr_15657_15674 = state_15645__$1;
(statearr_15657_15674[(2)] = null);

(statearr_15657_15674[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15646 === (5))){
var inst_15625 = (state_15645[(7)]);
var state_15645__$1 = state_15645;
var statearr_15658_15675 = state_15645__$1;
(statearr_15658_15675[(2)] = inst_15625);

(statearr_15658_15675[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15646 === (10))){
var inst_15639 = (state_15645[(2)]);
var state_15645__$1 = state_15645;
var statearr_15659_15676 = state_15645__$1;
(statearr_15659_15676[(2)] = inst_15639);

(statearr_15659_15676[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15646 === (8))){
var inst_15632 = (state_15645[(9)]);
var inst_15635 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(inst_15632) : cljs.core.deref.call(null,inst_15632));
var state_15645__$1 = state_15645;
var statearr_15660_15677 = state_15645__$1;
(statearr_15660_15677[(2)] = inst_15635);

(statearr_15660_15677[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});})(c__8570__auto__))
;
return ((function (switch__8503__auto__,c__8570__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__8504__auto__ = null;
var cljs$core$async$reduce_$_state_machine__8504__auto____0 = (function (){
var statearr_15664 = [null,null,null,null,null,null,null,null,null,null];
(statearr_15664[(0)] = cljs$core$async$reduce_$_state_machine__8504__auto__);

(statearr_15664[(1)] = (1));

return statearr_15664;
});
var cljs$core$async$reduce_$_state_machine__8504__auto____1 = (function (state_15645){
while(true){
var ret_value__8505__auto__ = (function (){try{while(true){
var result__8506__auto__ = switch__8503__auto__(state_15645);
if(cljs.core.keyword_identical_QMARK_(result__8506__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__8506__auto__;
}
break;
}
}catch (e15665){if((e15665 instanceof Object)){
var ex__8507__auto__ = e15665;
var statearr_15666_15678 = state_15645;
(statearr_15666_15678[(5)] = ex__8507__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_15645);

return cljs.core.cst$kw$recur;
} else {
throw e15665;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__8505__auto__,cljs.core.cst$kw$recur)){
var G__15679 = state_15645;
state_15645 = G__15679;
continue;
} else {
return ret_value__8505__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__8504__auto__ = function(state_15645){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__8504__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__8504__auto____1.call(this,state_15645);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__8504__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__8504__auto____0;
cljs$core$async$reduce_$_state_machine__8504__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__8504__auto____1;
return cljs$core$async$reduce_$_state_machine__8504__auto__;
})()
;})(switch__8503__auto__,c__8570__auto__))
})();
var state__8572__auto__ = (function (){var statearr_15667 = (f__8571__auto__.cljs$core$IFn$_invoke$arity$0 ? f__8571__auto__.cljs$core$IFn$_invoke$arity$0() : f__8571__auto__.call(null));
(statearr_15667[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8570__auto__);

return statearr_15667;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__8572__auto__);
});})(c__8570__auto__))
);

return c__8570__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var args15680 = [];
var len__5619__auto___15732 = arguments.length;
var i__5620__auto___15733 = (0);
while(true){
if((i__5620__auto___15733 < len__5619__auto___15732)){
args15680.push((arguments[i__5620__auto___15733]));

var G__15734 = (i__5620__auto___15733 + (1));
i__5620__auto___15733 = G__15734;
continue;
} else {
}
break;
}

var G__15682 = args15680.length;
switch (G__15682) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15680.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__8570__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__8570__auto__){
return (function (){
var f__8571__auto__ = (function (){var switch__8503__auto__ = ((function (c__8570__auto__){
return (function (state_15707){
var state_val_15708 = (state_15707[(1)]);
if((state_val_15708 === (7))){
var inst_15689 = (state_15707[(2)]);
var state_15707__$1 = state_15707;
var statearr_15709_15736 = state_15707__$1;
(statearr_15709_15736[(2)] = inst_15689);

(statearr_15709_15736[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15708 === (1))){
var inst_15683 = cljs.core.seq(coll);
var inst_15684 = inst_15683;
var state_15707__$1 = (function (){var statearr_15710 = state_15707;
(statearr_15710[(7)] = inst_15684);

return statearr_15710;
})();
var statearr_15711_15737 = state_15707__$1;
(statearr_15711_15737[(2)] = null);

(statearr_15711_15737[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15708 === (4))){
var inst_15684 = (state_15707[(7)]);
var inst_15687 = cljs.core.first(inst_15684);
var state_15707__$1 = state_15707;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15707__$1,(7),ch,inst_15687);
} else {
if((state_val_15708 === (13))){
var inst_15701 = (state_15707[(2)]);
var state_15707__$1 = state_15707;
var statearr_15712_15738 = state_15707__$1;
(statearr_15712_15738[(2)] = inst_15701);

(statearr_15712_15738[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15708 === (6))){
var inst_15692 = (state_15707[(2)]);
var state_15707__$1 = state_15707;
if(cljs.core.truth_(inst_15692)){
var statearr_15713_15739 = state_15707__$1;
(statearr_15713_15739[(1)] = (8));

} else {
var statearr_15714_15740 = state_15707__$1;
(statearr_15714_15740[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15708 === (3))){
var inst_15705 = (state_15707[(2)]);
var state_15707__$1 = state_15707;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15707__$1,inst_15705);
} else {
if((state_val_15708 === (12))){
var state_15707__$1 = state_15707;
var statearr_15715_15741 = state_15707__$1;
(statearr_15715_15741[(2)] = null);

(statearr_15715_15741[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15708 === (2))){
var inst_15684 = (state_15707[(7)]);
var state_15707__$1 = state_15707;
if(cljs.core.truth_(inst_15684)){
var statearr_15716_15742 = state_15707__$1;
(statearr_15716_15742[(1)] = (4));

} else {
var statearr_15717_15743 = state_15707__$1;
(statearr_15717_15743[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15708 === (11))){
var inst_15698 = cljs.core.async.close_BANG_(ch);
var state_15707__$1 = state_15707;
var statearr_15718_15744 = state_15707__$1;
(statearr_15718_15744[(2)] = inst_15698);

(statearr_15718_15744[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15708 === (9))){
var state_15707__$1 = state_15707;
if(cljs.core.truth_(close_QMARK_)){
var statearr_15719_15745 = state_15707__$1;
(statearr_15719_15745[(1)] = (11));

} else {
var statearr_15720_15746 = state_15707__$1;
(statearr_15720_15746[(1)] = (12));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15708 === (5))){
var inst_15684 = (state_15707[(7)]);
var state_15707__$1 = state_15707;
var statearr_15721_15747 = state_15707__$1;
(statearr_15721_15747[(2)] = inst_15684);

(statearr_15721_15747[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15708 === (10))){
var inst_15703 = (state_15707[(2)]);
var state_15707__$1 = state_15707;
var statearr_15722_15748 = state_15707__$1;
(statearr_15722_15748[(2)] = inst_15703);

(statearr_15722_15748[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15708 === (8))){
var inst_15684 = (state_15707[(7)]);
var inst_15694 = cljs.core.next(inst_15684);
var inst_15684__$1 = inst_15694;
var state_15707__$1 = (function (){var statearr_15723 = state_15707;
(statearr_15723[(7)] = inst_15684__$1);

return statearr_15723;
})();
var statearr_15724_15749 = state_15707__$1;
(statearr_15724_15749[(2)] = null);

(statearr_15724_15749[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__8570__auto__))
;
return ((function (switch__8503__auto__,c__8570__auto__){
return (function() {
var cljs$core$async$state_machine__8504__auto__ = null;
var cljs$core$async$state_machine__8504__auto____0 = (function (){
var statearr_15728 = [null,null,null,null,null,null,null,null];
(statearr_15728[(0)] = cljs$core$async$state_machine__8504__auto__);

(statearr_15728[(1)] = (1));

return statearr_15728;
});
var cljs$core$async$state_machine__8504__auto____1 = (function (state_15707){
while(true){
var ret_value__8505__auto__ = (function (){try{while(true){
var result__8506__auto__ = switch__8503__auto__(state_15707);
if(cljs.core.keyword_identical_QMARK_(result__8506__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__8506__auto__;
}
break;
}
}catch (e15729){if((e15729 instanceof Object)){
var ex__8507__auto__ = e15729;
var statearr_15730_15750 = state_15707;
(statearr_15730_15750[(5)] = ex__8507__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_15707);

return cljs.core.cst$kw$recur;
} else {
throw e15729;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__8505__auto__,cljs.core.cst$kw$recur)){
var G__15751 = state_15707;
state_15707 = G__15751;
continue;
} else {
return ret_value__8505__auto__;
}
break;
}
});
cljs$core$async$state_machine__8504__auto__ = function(state_15707){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__8504__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__8504__auto____1.call(this,state_15707);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__8504__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__8504__auto____0;
cljs$core$async$state_machine__8504__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__8504__auto____1;
return cljs$core$async$state_machine__8504__auto__;
})()
;})(switch__8503__auto__,c__8570__auto__))
})();
var state__8572__auto__ = (function (){var statearr_15731 = (f__8571__auto__.cljs$core$IFn$_invoke$arity$0 ? f__8571__auto__.cljs$core$IFn$_invoke$arity$0() : f__8571__auto__.call(null));
(statearr_15731[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8570__auto__);

return statearr_15731;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__8572__auto__);
});})(c__8570__auto__))
);

return c__8570__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;
/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__5216__auto__ = (((_ == null))?null:_);
var m__5217__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__5216__auto__)]);
if(!((m__5217__auto__ == null))){
return (m__5217__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5217__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5217__auto__.call(null,_));
} else {
var m__5217__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__5217__auto____$1 == null))){
return (m__5217__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__5217__auto____$1.cljs$core$IFn$_invoke$arity$1(_) : m__5217__auto____$1.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__5216__auto__ = (((m == null))?null:m);
var m__5217__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__5216__auto__)]);
if(!((m__5217__auto__ == null))){
return (m__5217__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5217__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5217__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__5217__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__5217__auto____$1 == null))){
return (m__5217__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__5217__auto____$1.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5217__auto____$1.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__5216__auto__ = (((m == null))?null:m);
var m__5217__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__5216__auto__)]);
if(!((m__5217__auto__ == null))){
return (m__5217__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5217__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5217__auto__.call(null,m,ch));
} else {
var m__5217__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__5217__auto____$1 == null))){
return (m__5217__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__5217__auto____$1.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5217__auto____$1.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__5216__auto__ = (((m == null))?null:m);
var m__5217__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__5216__auto__)]);
if(!((m__5217__auto__ == null))){
return (m__5217__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5217__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5217__auto__.call(null,m));
} else {
var m__5217__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__5217__auto____$1 == null))){
return (m__5217__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__5217__auto____$1.cljs$core$IFn$_invoke$arity$1(m) : m__5217__auto____$1.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = (function (){var G__15976 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__15976) : cljs.core.atom.call(null,G__15976));
})();
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async15977 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15977 = (function (mult,ch,cs,meta15978){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta15978 = meta15978;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async15977.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_15979,meta15978__$1){
var self__ = this;
var _15979__$1 = this;
return (new cljs.core.async.t_cljs$core$async15977(self__.mult,self__.ch,self__.cs,meta15978__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async15977.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_15979){
var self__ = this;
var _15979__$1 = this;
return self__.meta15978;
});})(cs))
;

cljs.core.async.t_cljs$core$async15977.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async15977.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async15977.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async15977.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async15977.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async15977.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__15980_16200 = self__.cs;
var G__15981_16201 = cljs.core.PersistentArrayMap.EMPTY;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__15980_16200,G__15981_16201) : cljs.core.reset_BANG_.call(null,G__15980_16200,G__15981_16201));

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async15977.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$mult,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$ch], null))),cljs.core.cst$kw$doc,"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),cljs.core.cst$sym$ch,cljs.core.cst$sym$cs,cljs.core.cst$sym$meta15978], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async15977.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async15977.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15977";

cljs.core.async.t_cljs$core$async15977.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__5159__auto__,writer__5160__auto__,opt__5161__auto__){
return cljs.core._write(writer__5160__auto__,"cljs.core.async/t_cljs$core$async15977");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async15977 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async15977(mult__$1,ch__$1,cs__$1,meta15978){
return (new cljs.core.async.t_cljs$core$async15977(mult__$1,ch__$1,cs__$1,meta15978));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async15977(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null) : cljs.core.atom.call(null,null));
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__8570__auto___16202 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__8570__auto___16202,cs,m,dchan,dctr,done){
return (function (){
var f__8571__auto__ = (function (){var switch__8503__auto__ = ((function (c__8570__auto___16202,cs,m,dchan,dctr,done){
return (function (state_16112){
var state_val_16113 = (state_16112[(1)]);
if((state_val_16113 === (7))){
var inst_16108 = (state_16112[(2)]);
var state_16112__$1 = state_16112;
var statearr_16114_16203 = state_16112__$1;
(statearr_16114_16203[(2)] = inst_16108);

(statearr_16114_16203[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16113 === (20))){
var inst_16013 = (state_16112[(7)]);
var inst_16023 = cljs.core.first(inst_16013);
var inst_16024 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16023,(0),null);
var inst_16025 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16023,(1),null);
var state_16112__$1 = (function (){var statearr_16115 = state_16112;
(statearr_16115[(8)] = inst_16024);

return statearr_16115;
})();
if(cljs.core.truth_(inst_16025)){
var statearr_16116_16204 = state_16112__$1;
(statearr_16116_16204[(1)] = (22));

} else {
var statearr_16117_16205 = state_16112__$1;
(statearr_16117_16205[(1)] = (23));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16113 === (27))){
var inst_15984 = (state_16112[(9)]);
var inst_16055 = (state_16112[(10)]);
var inst_16053 = (state_16112[(11)]);
var inst_16060 = (state_16112[(12)]);
var inst_16060__$1 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_16053,inst_16055);
var inst_16061 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_16060__$1,inst_15984,done);
var state_16112__$1 = (function (){var statearr_16118 = state_16112;
(statearr_16118[(12)] = inst_16060__$1);

return statearr_16118;
})();
if(cljs.core.truth_(inst_16061)){
var statearr_16119_16206 = state_16112__$1;
(statearr_16119_16206[(1)] = (30));

} else {
var statearr_16120_16207 = state_16112__$1;
(statearr_16120_16207[(1)] = (31));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16113 === (1))){
var state_16112__$1 = state_16112;
var statearr_16121_16208 = state_16112__$1;
(statearr_16121_16208[(2)] = null);

(statearr_16121_16208[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16113 === (24))){
var inst_16013 = (state_16112[(7)]);
var inst_16030 = (state_16112[(2)]);
var inst_16031 = cljs.core.next(inst_16013);
var inst_15993 = inst_16031;
var inst_15994 = null;
var inst_15995 = (0);
var inst_15996 = (0);
var state_16112__$1 = (function (){var statearr_16122 = state_16112;
(statearr_16122[(13)] = inst_15993);

(statearr_16122[(14)] = inst_15996);

(statearr_16122[(15)] = inst_15994);

(statearr_16122[(16)] = inst_15995);

(statearr_16122[(17)] = inst_16030);

return statearr_16122;
})();
var statearr_16123_16209 = state_16112__$1;
(statearr_16123_16209[(2)] = null);

(statearr_16123_16209[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16113 === (39))){
var state_16112__$1 = state_16112;
var statearr_16127_16210 = state_16112__$1;
(statearr_16127_16210[(2)] = null);

(statearr_16127_16210[(1)] = (41));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16113 === (4))){
var inst_15984 = (state_16112[(9)]);
var inst_15984__$1 = (state_16112[(2)]);
var inst_15985 = (inst_15984__$1 == null);
var state_16112__$1 = (function (){var statearr_16128 = state_16112;
(statearr_16128[(9)] = inst_15984__$1);

return statearr_16128;
})();
if(cljs.core.truth_(inst_15985)){
var statearr_16129_16211 = state_16112__$1;
(statearr_16129_16211[(1)] = (5));

} else {
var statearr_16130_16212 = state_16112__$1;
(statearr_16130_16212[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16113 === (15))){
var inst_15993 = (state_16112[(13)]);
var inst_15996 = (state_16112[(14)]);
var inst_15994 = (state_16112[(15)]);
var inst_15995 = (state_16112[(16)]);
var inst_16009 = (state_16112[(2)]);
var inst_16010 = (inst_15996 + (1));
var tmp16124 = inst_15993;
var tmp16125 = inst_15994;
var tmp16126 = inst_15995;
var inst_15993__$1 = tmp16124;
var inst_15994__$1 = tmp16125;
var inst_15995__$1 = tmp16126;
var inst_15996__$1 = inst_16010;
var state_16112__$1 = (function (){var statearr_16131 = state_16112;
(statearr_16131[(13)] = inst_15993__$1);

(statearr_16131[(14)] = inst_15996__$1);

(statearr_16131[(15)] = inst_15994__$1);

(statearr_16131[(16)] = inst_15995__$1);

(statearr_16131[(18)] = inst_16009);

return statearr_16131;
})();
var statearr_16132_16213 = state_16112__$1;
(statearr_16132_16213[(2)] = null);

(statearr_16132_16213[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16113 === (21))){
var inst_16034 = (state_16112[(2)]);
var state_16112__$1 = state_16112;
var statearr_16136_16214 = state_16112__$1;
(statearr_16136_16214[(2)] = inst_16034);

(statearr_16136_16214[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16113 === (31))){
var inst_16060 = (state_16112[(12)]);
var inst_16064 = done(null);
var inst_16065 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_16060);
var state_16112__$1 = (function (){var statearr_16137 = state_16112;
(statearr_16137[(19)] = inst_16064);

return statearr_16137;
})();
var statearr_16138_16215 = state_16112__$1;
(statearr_16138_16215[(2)] = inst_16065);

(statearr_16138_16215[(1)] = (32));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16113 === (32))){
var inst_16055 = (state_16112[(10)]);
var inst_16053 = (state_16112[(11)]);
var inst_16052 = (state_16112[(20)]);
var inst_16054 = (state_16112[(21)]);
var inst_16067 = (state_16112[(2)]);
var inst_16068 = (inst_16055 + (1));
var tmp16133 = inst_16053;
var tmp16134 = inst_16052;
var tmp16135 = inst_16054;
var inst_16052__$1 = tmp16134;
var inst_16053__$1 = tmp16133;
var inst_16054__$1 = tmp16135;
var inst_16055__$1 = inst_16068;
var state_16112__$1 = (function (){var statearr_16139 = state_16112;
(statearr_16139[(10)] = inst_16055__$1);

(statearr_16139[(11)] = inst_16053__$1);

(statearr_16139[(20)] = inst_16052__$1);

(statearr_16139[(22)] = inst_16067);

(statearr_16139[(21)] = inst_16054__$1);

return statearr_16139;
})();
var statearr_16140_16216 = state_16112__$1;
(statearr_16140_16216[(2)] = null);

(statearr_16140_16216[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16113 === (40))){
var inst_16080 = (state_16112[(23)]);
var inst_16084 = done(null);
var inst_16085 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_16080);
var state_16112__$1 = (function (){var statearr_16141 = state_16112;
(statearr_16141[(24)] = inst_16084);

return statearr_16141;
})();
var statearr_16142_16217 = state_16112__$1;
(statearr_16142_16217[(2)] = inst_16085);

(statearr_16142_16217[(1)] = (41));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16113 === (33))){
var inst_16071 = (state_16112[(25)]);
var inst_16073 = cljs.core.chunked_seq_QMARK_(inst_16071);
var state_16112__$1 = state_16112;
if(inst_16073){
var statearr_16143_16218 = state_16112__$1;
(statearr_16143_16218[(1)] = (36));

} else {
var statearr_16144_16219 = state_16112__$1;
(statearr_16144_16219[(1)] = (37));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16113 === (13))){
var inst_16003 = (state_16112[(26)]);
var inst_16006 = cljs.core.async.close_BANG_(inst_16003);
var state_16112__$1 = state_16112;
var statearr_16145_16220 = state_16112__$1;
(statearr_16145_16220[(2)] = inst_16006);

(statearr_16145_16220[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16113 === (22))){
var inst_16024 = (state_16112[(8)]);
var inst_16027 = cljs.core.async.close_BANG_(inst_16024);
var state_16112__$1 = state_16112;
var statearr_16146_16221 = state_16112__$1;
(statearr_16146_16221[(2)] = inst_16027);

(statearr_16146_16221[(1)] = (24));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16113 === (36))){
var inst_16071 = (state_16112[(25)]);
var inst_16075 = cljs.core.chunk_first(inst_16071);
var inst_16076 = cljs.core.chunk_rest(inst_16071);
var inst_16077 = cljs.core.count(inst_16075);
var inst_16052 = inst_16076;
var inst_16053 = inst_16075;
var inst_16054 = inst_16077;
var inst_16055 = (0);
var state_16112__$1 = (function (){var statearr_16147 = state_16112;
(statearr_16147[(10)] = inst_16055);

(statearr_16147[(11)] = inst_16053);

(statearr_16147[(20)] = inst_16052);

(statearr_16147[(21)] = inst_16054);

return statearr_16147;
})();
var statearr_16148_16222 = state_16112__$1;
(statearr_16148_16222[(2)] = null);

(statearr_16148_16222[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16113 === (41))){
var inst_16071 = (state_16112[(25)]);
var inst_16087 = (state_16112[(2)]);
var inst_16088 = cljs.core.next(inst_16071);
var inst_16052 = inst_16088;
var inst_16053 = null;
var inst_16054 = (0);
var inst_16055 = (0);
var state_16112__$1 = (function (){var statearr_16149 = state_16112;
(statearr_16149[(27)] = inst_16087);

(statearr_16149[(10)] = inst_16055);

(statearr_16149[(11)] = inst_16053);

(statearr_16149[(20)] = inst_16052);

(statearr_16149[(21)] = inst_16054);

return statearr_16149;
})();
var statearr_16150_16223 = state_16112__$1;
(statearr_16150_16223[(2)] = null);

(statearr_16150_16223[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16113 === (43))){
var state_16112__$1 = state_16112;
var statearr_16151_16224 = state_16112__$1;
(statearr_16151_16224[(2)] = null);

(statearr_16151_16224[(1)] = (44));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16113 === (29))){
var inst_16096 = (state_16112[(2)]);
var state_16112__$1 = state_16112;
var statearr_16152_16225 = state_16112__$1;
(statearr_16152_16225[(2)] = inst_16096);

(statearr_16152_16225[(1)] = (26));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16113 === (44))){
var inst_16105 = (state_16112[(2)]);
var state_16112__$1 = (function (){var statearr_16153 = state_16112;
(statearr_16153[(28)] = inst_16105);

return statearr_16153;
})();
var statearr_16154_16226 = state_16112__$1;
(statearr_16154_16226[(2)] = null);

(statearr_16154_16226[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16113 === (6))){
var inst_16044 = (state_16112[(29)]);
var inst_16043 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cs) : cljs.core.deref.call(null,cs));
var inst_16044__$1 = cljs.core.keys(inst_16043);
var inst_16045 = cljs.core.count(inst_16044__$1);
var inst_16046 = (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,inst_16045) : cljs.core.reset_BANG_.call(null,dctr,inst_16045));
var inst_16051 = cljs.core.seq(inst_16044__$1);
var inst_16052 = inst_16051;
var inst_16053 = null;
var inst_16054 = (0);
var inst_16055 = (0);
var state_16112__$1 = (function (){var statearr_16155 = state_16112;
(statearr_16155[(10)] = inst_16055);

(statearr_16155[(11)] = inst_16053);

(statearr_16155[(20)] = inst_16052);

(statearr_16155[(29)] = inst_16044__$1);

(statearr_16155[(21)] = inst_16054);

(statearr_16155[(30)] = inst_16046);

return statearr_16155;
})();
var statearr_16156_16227 = state_16112__$1;
(statearr_16156_16227[(2)] = null);

(statearr_16156_16227[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16113 === (28))){
var inst_16071 = (state_16112[(25)]);
var inst_16052 = (state_16112[(20)]);
var inst_16071__$1 = cljs.core.seq(inst_16052);
var state_16112__$1 = (function (){var statearr_16157 = state_16112;
(statearr_16157[(25)] = inst_16071__$1);

return statearr_16157;
})();
if(inst_16071__$1){
var statearr_16158_16228 = state_16112__$1;
(statearr_16158_16228[(1)] = (33));

} else {
var statearr_16159_16229 = state_16112__$1;
(statearr_16159_16229[(1)] = (34));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16113 === (25))){
var inst_16055 = (state_16112[(10)]);
var inst_16054 = (state_16112[(21)]);
var inst_16057 = (inst_16055 < inst_16054);
var inst_16058 = inst_16057;
var state_16112__$1 = state_16112;
if(cljs.core.truth_(inst_16058)){
var statearr_16160_16230 = state_16112__$1;
(statearr_16160_16230[(1)] = (27));

} else {
var statearr_16161_16231 = state_16112__$1;
(statearr_16161_16231[(1)] = (28));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16113 === (34))){
var state_16112__$1 = state_16112;
var statearr_16162_16232 = state_16112__$1;
(statearr_16162_16232[(2)] = null);

(statearr_16162_16232[(1)] = (35));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16113 === (17))){
var state_16112__$1 = state_16112;
var statearr_16163_16233 = state_16112__$1;
(statearr_16163_16233[(2)] = null);

(statearr_16163_16233[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16113 === (3))){
var inst_16110 = (state_16112[(2)]);
var state_16112__$1 = state_16112;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16112__$1,inst_16110);
} else {
if((state_val_16113 === (12))){
var inst_16039 = (state_16112[(2)]);
var state_16112__$1 = state_16112;
var statearr_16164_16234 = state_16112__$1;
(statearr_16164_16234[(2)] = inst_16039);

(statearr_16164_16234[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16113 === (2))){
var state_16112__$1 = state_16112;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16112__$1,(4),ch);
} else {
if((state_val_16113 === (23))){
var state_16112__$1 = state_16112;
var statearr_16165_16235 = state_16112__$1;
(statearr_16165_16235[(2)] = null);

(statearr_16165_16235[(1)] = (24));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16113 === (35))){
var inst_16094 = (state_16112[(2)]);
var state_16112__$1 = state_16112;
var statearr_16166_16236 = state_16112__$1;
(statearr_16166_16236[(2)] = inst_16094);

(statearr_16166_16236[(1)] = (29));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16113 === (19))){
var inst_16013 = (state_16112[(7)]);
var inst_16017 = cljs.core.chunk_first(inst_16013);
var inst_16018 = cljs.core.chunk_rest(inst_16013);
var inst_16019 = cljs.core.count(inst_16017);
var inst_15993 = inst_16018;
var inst_15994 = inst_16017;
var inst_15995 = inst_16019;
var inst_15996 = (0);
var state_16112__$1 = (function (){var statearr_16167 = state_16112;
(statearr_16167[(13)] = inst_15993);

(statearr_16167[(14)] = inst_15996);

(statearr_16167[(15)] = inst_15994);

(statearr_16167[(16)] = inst_15995);

return statearr_16167;
})();
var statearr_16168_16237 = state_16112__$1;
(statearr_16168_16237[(2)] = null);

(statearr_16168_16237[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16113 === (11))){
var inst_15993 = (state_16112[(13)]);
var inst_16013 = (state_16112[(7)]);
var inst_16013__$1 = cljs.core.seq(inst_15993);
var state_16112__$1 = (function (){var statearr_16169 = state_16112;
(statearr_16169[(7)] = inst_16013__$1);

return statearr_16169;
})();
if(inst_16013__$1){
var statearr_16170_16238 = state_16112__$1;
(statearr_16170_16238[(1)] = (16));

} else {
var statearr_16171_16239 = state_16112__$1;
(statearr_16171_16239[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16113 === (9))){
var inst_16041 = (state_16112[(2)]);
var state_16112__$1 = state_16112;
var statearr_16172_16240 = state_16112__$1;
(statearr_16172_16240[(2)] = inst_16041);

(statearr_16172_16240[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16113 === (5))){
var inst_15991 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cs) : cljs.core.deref.call(null,cs));
var inst_15992 = cljs.core.seq(inst_15991);
var inst_15993 = inst_15992;
var inst_15994 = null;
var inst_15995 = (0);
var inst_15996 = (0);
var state_16112__$1 = (function (){var statearr_16173 = state_16112;
(statearr_16173[(13)] = inst_15993);

(statearr_16173[(14)] = inst_15996);

(statearr_16173[(15)] = inst_15994);

(statearr_16173[(16)] = inst_15995);

return statearr_16173;
})();
var statearr_16174_16241 = state_16112__$1;
(statearr_16174_16241[(2)] = null);

(statearr_16174_16241[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16113 === (14))){
var state_16112__$1 = state_16112;
var statearr_16175_16242 = state_16112__$1;
(statearr_16175_16242[(2)] = null);

(statearr_16175_16242[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16113 === (45))){
var inst_16102 = (state_16112[(2)]);
var state_16112__$1 = state_16112;
var statearr_16176_16243 = state_16112__$1;
(statearr_16176_16243[(2)] = inst_16102);

(statearr_16176_16243[(1)] = (44));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16113 === (26))){
var inst_16044 = (state_16112[(29)]);
var inst_16098 = (state_16112[(2)]);
var inst_16099 = cljs.core.seq(inst_16044);
var state_16112__$1 = (function (){var statearr_16177 = state_16112;
(statearr_16177[(31)] = inst_16098);

return statearr_16177;
})();
if(inst_16099){
var statearr_16178_16244 = state_16112__$1;
(statearr_16178_16244[(1)] = (42));

} else {
var statearr_16179_16245 = state_16112__$1;
(statearr_16179_16245[(1)] = (43));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16113 === (16))){
var inst_16013 = (state_16112[(7)]);
var inst_16015 = cljs.core.chunked_seq_QMARK_(inst_16013);
var state_16112__$1 = state_16112;
if(inst_16015){
var statearr_16180_16246 = state_16112__$1;
(statearr_16180_16246[(1)] = (19));

} else {
var statearr_16181_16247 = state_16112__$1;
(statearr_16181_16247[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16113 === (38))){
var inst_16091 = (state_16112[(2)]);
var state_16112__$1 = state_16112;
var statearr_16182_16248 = state_16112__$1;
(statearr_16182_16248[(2)] = inst_16091);

(statearr_16182_16248[(1)] = (35));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16113 === (30))){
var state_16112__$1 = state_16112;
var statearr_16183_16249 = state_16112__$1;
(statearr_16183_16249[(2)] = null);

(statearr_16183_16249[(1)] = (32));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16113 === (10))){
var inst_15996 = (state_16112[(14)]);
var inst_15994 = (state_16112[(15)]);
var inst_16002 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_15994,inst_15996);
var inst_16003 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16002,(0),null);
var inst_16004 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16002,(1),null);
var state_16112__$1 = (function (){var statearr_16184 = state_16112;
(statearr_16184[(26)] = inst_16003);

return statearr_16184;
})();
if(cljs.core.truth_(inst_16004)){
var statearr_16185_16250 = state_16112__$1;
(statearr_16185_16250[(1)] = (13));

} else {
var statearr_16186_16251 = state_16112__$1;
(statearr_16186_16251[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16113 === (18))){
var inst_16037 = (state_16112[(2)]);
var state_16112__$1 = state_16112;
var statearr_16187_16252 = state_16112__$1;
(statearr_16187_16252[(2)] = inst_16037);

(statearr_16187_16252[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16113 === (42))){
var state_16112__$1 = state_16112;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16112__$1,(45),dchan);
} else {
if((state_val_16113 === (37))){
var inst_16071 = (state_16112[(25)]);
var inst_15984 = (state_16112[(9)]);
var inst_16080 = (state_16112[(23)]);
var inst_16080__$1 = cljs.core.first(inst_16071);
var inst_16081 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_16080__$1,inst_15984,done);
var state_16112__$1 = (function (){var statearr_16188 = state_16112;
(statearr_16188[(23)] = inst_16080__$1);

return statearr_16188;
})();
if(cljs.core.truth_(inst_16081)){
var statearr_16189_16253 = state_16112__$1;
(statearr_16189_16253[(1)] = (39));

} else {
var statearr_16190_16254 = state_16112__$1;
(statearr_16190_16254[(1)] = (40));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16113 === (8))){
var inst_15996 = (state_16112[(14)]);
var inst_15995 = (state_16112[(16)]);
var inst_15998 = (inst_15996 < inst_15995);
var inst_15999 = inst_15998;
var state_16112__$1 = state_16112;
if(cljs.core.truth_(inst_15999)){
var statearr_16191_16255 = state_16112__$1;
(statearr_16191_16255[(1)] = (10));

} else {
var statearr_16192_16256 = state_16112__$1;
(statearr_16192_16256[(1)] = (11));

}

return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__8570__auto___16202,cs,m,dchan,dctr,done))
;
return ((function (switch__8503__auto__,c__8570__auto___16202,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__8504__auto__ = null;
var cljs$core$async$mult_$_state_machine__8504__auto____0 = (function (){
var statearr_16196 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16196[(0)] = cljs$core$async$mult_$_state_machine__8504__auto__);

(statearr_16196[(1)] = (1));

return statearr_16196;
});
var cljs$core$async$mult_$_state_machine__8504__auto____1 = (function (state_16112){
while(true){
var ret_value__8505__auto__ = (function (){try{while(true){
var result__8506__auto__ = switch__8503__auto__(state_16112);
if(cljs.core.keyword_identical_QMARK_(result__8506__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__8506__auto__;
}
break;
}
}catch (e16197){if((e16197 instanceof Object)){
var ex__8507__auto__ = e16197;
var statearr_16198_16257 = state_16112;
(statearr_16198_16257[(5)] = ex__8507__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_16112);

return cljs.core.cst$kw$recur;
} else {
throw e16197;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__8505__auto__,cljs.core.cst$kw$recur)){
var G__16258 = state_16112;
state_16112 = G__16258;
continue;
} else {
return ret_value__8505__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__8504__auto__ = function(state_16112){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__8504__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__8504__auto____1.call(this,state_16112);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__8504__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__8504__auto____0;
cljs$core$async$mult_$_state_machine__8504__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__8504__auto____1;
return cljs$core$async$mult_$_state_machine__8504__auto__;
})()
;})(switch__8503__auto__,c__8570__auto___16202,cs,m,dchan,dctr,done))
})();
var state__8572__auto__ = (function (){var statearr_16199 = (f__8571__auto__.cljs$core$IFn$_invoke$arity$0 ? f__8571__auto__.cljs$core$IFn$_invoke$arity$0() : f__8571__auto__.call(null));
(statearr_16199[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8570__auto___16202);

return statearr_16199;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__8572__auto__);
});})(c__8570__auto___16202,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var args16259 = [];
var len__5619__auto___16262 = arguments.length;
var i__5620__auto___16263 = (0);
while(true){
if((i__5620__auto___16263 < len__5619__auto___16262)){
args16259.push((arguments[i__5620__auto___16263]));

var G__16264 = (i__5620__auto___16263 + (1));
i__5620__auto___16263 = G__16264;
continue;
} else {
}
break;
}

var G__16261 = args16259.length;
switch (G__16261) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16259.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;
/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__5216__auto__ = (((m == null))?null:m);
var m__5217__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__5216__auto__)]);
if(!((m__5217__auto__ == null))){
return (m__5217__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5217__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5217__auto__.call(null,m,ch));
} else {
var m__5217__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__5217__auto____$1 == null))){
return (m__5217__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__5217__auto____$1.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5217__auto____$1.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__5216__auto__ = (((m == null))?null:m);
var m__5217__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__5216__auto__)]);
if(!((m__5217__auto__ == null))){
return (m__5217__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5217__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5217__auto__.call(null,m,ch));
} else {
var m__5217__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__5217__auto____$1 == null))){
return (m__5217__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__5217__auto____$1.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5217__auto____$1.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__5216__auto__ = (((m == null))?null:m);
var m__5217__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__5216__auto__)]);
if(!((m__5217__auto__ == null))){
return (m__5217__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5217__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5217__auto__.call(null,m));
} else {
var m__5217__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__5217__auto____$1 == null))){
return (m__5217__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__5217__auto____$1.cljs$core$IFn$_invoke$arity$1(m) : m__5217__auto____$1.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__5216__auto__ = (((m == null))?null:m);
var m__5217__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__5216__auto__)]);
if(!((m__5217__auto__ == null))){
return (m__5217__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5217__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5217__auto__.call(null,m,state_map));
} else {
var m__5217__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__5217__auto____$1 == null))){
return (m__5217__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__5217__auto____$1.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5217__auto____$1.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__5216__auto__ = (((m == null))?null:m);
var m__5217__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__5216__auto__)]);
if(!((m__5217__auto__ == null))){
return (m__5217__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5217__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5217__auto__.call(null,m,mode));
} else {
var m__5217__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__5217__auto____$1 == null))){
return (m__5217__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__5217__auto____$1.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5217__auto____$1.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__5626__auto__ = [];
var len__5619__auto___16276 = arguments.length;
var i__5620__auto___16277 = (0);
while(true){
if((i__5620__auto___16277 < len__5619__auto___16276)){
args__5626__auto__.push((arguments[i__5620__auto___16277]));

var G__16278 = (i__5620__auto___16277 + (1));
i__5620__auto___16277 = G__16278;
continue;
} else {
}
break;
}

var argseq__5627__auto__ = ((((3) < args__5626__auto__.length))?(new cljs.core.IndexedSeq(args__5626__auto__.slice((3)),(0))):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5627__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__16270){
var map__16271 = p__16270;
var map__16271__$1 = ((((!((map__16271 == null)))?((((map__16271.cljs$lang$protocol_mask$partition0$ & (64))) || (map__16271.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16271):map__16271);
var opts = map__16271__$1;
var statearr_16273_16279 = state;
(statearr_16273_16279[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4425__auto__ = cljs.core.async.do_alts(((function (map__16271,map__16271__$1,opts){
return (function (val){
var statearr_16274_16280 = state;
(statearr_16274_16280[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
});})(map__16271,map__16271__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4425__auto__)){
var cb = temp__4425__auto__;
var statearr_16275_16281 = state;
(statearr_16275_16281[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cb) : cljs.core.deref.call(null,cb)));


return cljs.core.cst$kw$recur;
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq16266){
var G__16267 = cljs.core.first(seq16266);
var seq16266__$1 = cljs.core.next(seq16266);
var G__16268 = cljs.core.first(seq16266__$1);
var seq16266__$2 = cljs.core.next(seq16266__$1);
var G__16269 = cljs.core.first(seq16266__$2);
var seq16266__$3 = cljs.core.next(seq16266__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__16267,G__16268,G__16269,seq16266__$3);
});
/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = (function (){var G__16448 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__16448) : cljs.core.atom.call(null,G__16448));
})();
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$pause,null,cljs.core.cst$kw$mute,null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,cljs.core.cst$kw$solo);
var solo_mode = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$mute) : cljs.core.atom.call(null,cljs.core.cst$kw$mute));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv(((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cs) : cljs.core.deref.call(null,cs));
var mode = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(solo_mode) : cljs.core.deref.call(null,solo_mode));
var solos = pick(cljs.core.cst$kw$solo,chs);
var pauses = pick(cljs.core.cst$kw$pause,chs);
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$solos,solos,cljs.core.cst$kw$mutes,pick(cljs.core.cst$kw$mute,chs),cljs.core.cst$kw$reads,cljs.core.conj.cljs$core$IFn$_invoke$arity$2((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,cljs.core.cst$kw$pause)) && (!(cljs.core.empty_QMARK_(solos))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async16449 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16449 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta16450){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta16450 = meta16450;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async16449.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_16451,meta16450__$1){
var self__ = this;
var _16451__$1 = this;
return (new cljs.core.async.t_cljs$core$async16449(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta16450__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async16449.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_16451){
var self__ = this;
var _16451__$1 = this;
return self__.meta16450;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async16449.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async16449.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async16449.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async16449.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async16449.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async16449.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__16452_16614 = self__.cs;
var G__16453_16615 = cljs.core.PersistentArrayMap.EMPTY;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__16452_16614,G__16453_16615) : cljs.core.reset_BANG_.call(null,G__16452_16614,G__16453_16615));

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async16449.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async16449.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(cljs.core.cst$sym$solo_DASH_modes,cljs.core.cst$sym$mode)], 0)))].join('')));
}

(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(self__.solo_mode,mode) : cljs.core.reset_BANG_.call(null,self__.solo_mode,mode));

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async16449.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$change,cljs.core.with_meta(cljs.core.cst$sym$mix,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$out], null))),cljs.core.cst$kw$doc,"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),cljs.core.cst$sym$solo_DASH_mode,cljs.core.cst$sym$pick,cljs.core.cst$sym$cs,cljs.core.cst$sym$calc_DASH_state,cljs.core.cst$sym$out,cljs.core.cst$sym$changed,cljs.core.cst$sym$solo_DASH_modes,cljs.core.cst$sym$attrs,cljs.core.cst$sym$meta16450], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async16449.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async16449.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16449";

cljs.core.async.t_cljs$core$async16449.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__5159__auto__,writer__5160__auto__,opt__5161__auto__){
return cljs.core._write(writer__5160__auto__,"cljs.core.async/t_cljs$core$async16449");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async16449 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async16449(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta16450){
return (new cljs.core.async.t_cljs$core$async16449(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta16450));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async16449(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__8570__auto___16616 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__8570__auto___16616,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__8571__auto__ = (function (){var switch__8503__auto__ = ((function (c__8570__auto___16616,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_16551){
var state_val_16552 = (state_16551[(1)]);
if((state_val_16552 === (7))){
var inst_16469 = (state_16551[(2)]);
var state_16551__$1 = state_16551;
var statearr_16553_16617 = state_16551__$1;
(statearr_16553_16617[(2)] = inst_16469);

(statearr_16553_16617[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16552 === (20))){
var inst_16481 = (state_16551[(7)]);
var state_16551__$1 = state_16551;
var statearr_16554_16618 = state_16551__$1;
(statearr_16554_16618[(2)] = inst_16481);

(statearr_16554_16618[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16552 === (27))){
var state_16551__$1 = state_16551;
var statearr_16555_16619 = state_16551__$1;
(statearr_16555_16619[(2)] = null);

(statearr_16555_16619[(1)] = (28));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16552 === (1))){
var inst_16457 = (state_16551[(8)]);
var inst_16457__$1 = calc_state();
var inst_16459 = (inst_16457__$1 == null);
var inst_16460 = cljs.core.not(inst_16459);
var state_16551__$1 = (function (){var statearr_16556 = state_16551;
(statearr_16556[(8)] = inst_16457__$1);

return statearr_16556;
})();
if(inst_16460){
var statearr_16557_16620 = state_16551__$1;
(statearr_16557_16620[(1)] = (2));

} else {
var statearr_16558_16621 = state_16551__$1;
(statearr_16558_16621[(1)] = (3));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16552 === (24))){
var inst_16504 = (state_16551[(9)]);
var inst_16511 = (state_16551[(10)]);
var inst_16525 = (state_16551[(11)]);
var inst_16525__$1 = (inst_16504.cljs$core$IFn$_invoke$arity$1 ? inst_16504.cljs$core$IFn$_invoke$arity$1(inst_16511) : inst_16504.call(null,inst_16511));
var state_16551__$1 = (function (){var statearr_16559 = state_16551;
(statearr_16559[(11)] = inst_16525__$1);

return statearr_16559;
})();
if(cljs.core.truth_(inst_16525__$1)){
var statearr_16560_16622 = state_16551__$1;
(statearr_16560_16622[(1)] = (29));

} else {
var statearr_16561_16623 = state_16551__$1;
(statearr_16561_16623[(1)] = (30));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16552 === (4))){
var inst_16472 = (state_16551[(2)]);
var state_16551__$1 = state_16551;
if(cljs.core.truth_(inst_16472)){
var statearr_16562_16624 = state_16551__$1;
(statearr_16562_16624[(1)] = (8));

} else {
var statearr_16563_16625 = state_16551__$1;
(statearr_16563_16625[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16552 === (15))){
var inst_16498 = (state_16551[(2)]);
var state_16551__$1 = state_16551;
if(cljs.core.truth_(inst_16498)){
var statearr_16564_16626 = state_16551__$1;
(statearr_16564_16626[(1)] = (19));

} else {
var statearr_16565_16627 = state_16551__$1;
(statearr_16565_16627[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16552 === (21))){
var inst_16503 = (state_16551[(12)]);
var inst_16503__$1 = (state_16551[(2)]);
var inst_16504 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16503__$1,cljs.core.cst$kw$solos);
var inst_16505 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16503__$1,cljs.core.cst$kw$mutes);
var inst_16506 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16503__$1,cljs.core.cst$kw$reads);
var state_16551__$1 = (function (){var statearr_16566 = state_16551;
(statearr_16566[(9)] = inst_16504);

(statearr_16566[(12)] = inst_16503__$1);

(statearr_16566[(13)] = inst_16505);

return statearr_16566;
})();
return cljs.core.async.ioc_alts_BANG_(state_16551__$1,(22),inst_16506);
} else {
if((state_val_16552 === (31))){
var inst_16533 = (state_16551[(2)]);
var state_16551__$1 = state_16551;
if(cljs.core.truth_(inst_16533)){
var statearr_16567_16628 = state_16551__$1;
(statearr_16567_16628[(1)] = (32));

} else {
var statearr_16568_16629 = state_16551__$1;
(statearr_16568_16629[(1)] = (33));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16552 === (32))){
var inst_16510 = (state_16551[(14)]);
var state_16551__$1 = state_16551;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16551__$1,(35),out,inst_16510);
} else {
if((state_val_16552 === (33))){
var inst_16503 = (state_16551[(12)]);
var inst_16481 = inst_16503;
var state_16551__$1 = (function (){var statearr_16569 = state_16551;
(statearr_16569[(7)] = inst_16481);

return statearr_16569;
})();
var statearr_16570_16630 = state_16551__$1;
(statearr_16570_16630[(2)] = null);

(statearr_16570_16630[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16552 === (13))){
var inst_16481 = (state_16551[(7)]);
var inst_16488 = inst_16481.cljs$lang$protocol_mask$partition0$;
var inst_16489 = (inst_16488 & (64));
var inst_16490 = inst_16481.cljs$core$ISeq$;
var inst_16491 = (inst_16489) || (inst_16490);
var state_16551__$1 = state_16551;
if(cljs.core.truth_(inst_16491)){
var statearr_16571_16631 = state_16551__$1;
(statearr_16571_16631[(1)] = (16));

} else {
var statearr_16572_16632 = state_16551__$1;
(statearr_16572_16632[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16552 === (22))){
var inst_16510 = (state_16551[(14)]);
var inst_16511 = (state_16551[(10)]);
var inst_16509 = (state_16551[(2)]);
var inst_16510__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16509,(0),null);
var inst_16511__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16509,(1),null);
var inst_16512 = (inst_16510__$1 == null);
var inst_16513 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_16511__$1,change);
var inst_16514 = (inst_16512) || (inst_16513);
var state_16551__$1 = (function (){var statearr_16573 = state_16551;
(statearr_16573[(14)] = inst_16510__$1);

(statearr_16573[(10)] = inst_16511__$1);

return statearr_16573;
})();
if(cljs.core.truth_(inst_16514)){
var statearr_16574_16633 = state_16551__$1;
(statearr_16574_16633[(1)] = (23));

} else {
var statearr_16575_16634 = state_16551__$1;
(statearr_16575_16634[(1)] = (24));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16552 === (36))){
var inst_16503 = (state_16551[(12)]);
var inst_16481 = inst_16503;
var state_16551__$1 = (function (){var statearr_16576 = state_16551;
(statearr_16576[(7)] = inst_16481);

return statearr_16576;
})();
var statearr_16577_16635 = state_16551__$1;
(statearr_16577_16635[(2)] = null);

(statearr_16577_16635[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16552 === (29))){
var inst_16525 = (state_16551[(11)]);
var state_16551__$1 = state_16551;
var statearr_16578_16636 = state_16551__$1;
(statearr_16578_16636[(2)] = inst_16525);

(statearr_16578_16636[(1)] = (31));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16552 === (6))){
var state_16551__$1 = state_16551;
var statearr_16579_16637 = state_16551__$1;
(statearr_16579_16637[(2)] = false);

(statearr_16579_16637[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16552 === (28))){
var inst_16521 = (state_16551[(2)]);
var inst_16522 = calc_state();
var inst_16481 = inst_16522;
var state_16551__$1 = (function (){var statearr_16580 = state_16551;
(statearr_16580[(7)] = inst_16481);

(statearr_16580[(15)] = inst_16521);

return statearr_16580;
})();
var statearr_16581_16638 = state_16551__$1;
(statearr_16581_16638[(2)] = null);

(statearr_16581_16638[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16552 === (25))){
var inst_16547 = (state_16551[(2)]);
var state_16551__$1 = state_16551;
var statearr_16582_16639 = state_16551__$1;
(statearr_16582_16639[(2)] = inst_16547);

(statearr_16582_16639[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16552 === (34))){
var inst_16545 = (state_16551[(2)]);
var state_16551__$1 = state_16551;
var statearr_16583_16640 = state_16551__$1;
(statearr_16583_16640[(2)] = inst_16545);

(statearr_16583_16640[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16552 === (17))){
var state_16551__$1 = state_16551;
var statearr_16584_16641 = state_16551__$1;
(statearr_16584_16641[(2)] = false);

(statearr_16584_16641[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16552 === (3))){
var state_16551__$1 = state_16551;
var statearr_16585_16642 = state_16551__$1;
(statearr_16585_16642[(2)] = false);

(statearr_16585_16642[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16552 === (12))){
var inst_16549 = (state_16551[(2)]);
var state_16551__$1 = state_16551;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16551__$1,inst_16549);
} else {
if((state_val_16552 === (2))){
var inst_16457 = (state_16551[(8)]);
var inst_16462 = inst_16457.cljs$lang$protocol_mask$partition0$;
var inst_16463 = (inst_16462 & (64));
var inst_16464 = inst_16457.cljs$core$ISeq$;
var inst_16465 = (inst_16463) || (inst_16464);
var state_16551__$1 = state_16551;
if(cljs.core.truth_(inst_16465)){
var statearr_16586_16643 = state_16551__$1;
(statearr_16586_16643[(1)] = (5));

} else {
var statearr_16587_16644 = state_16551__$1;
(statearr_16587_16644[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16552 === (23))){
var inst_16510 = (state_16551[(14)]);
var inst_16516 = (inst_16510 == null);
var state_16551__$1 = state_16551;
if(cljs.core.truth_(inst_16516)){
var statearr_16588_16645 = state_16551__$1;
(statearr_16588_16645[(1)] = (26));

} else {
var statearr_16589_16646 = state_16551__$1;
(statearr_16589_16646[(1)] = (27));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16552 === (35))){
var inst_16536 = (state_16551[(2)]);
var state_16551__$1 = state_16551;
if(cljs.core.truth_(inst_16536)){
var statearr_16590_16647 = state_16551__$1;
(statearr_16590_16647[(1)] = (36));

} else {
var statearr_16591_16648 = state_16551__$1;
(statearr_16591_16648[(1)] = (37));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16552 === (19))){
var inst_16481 = (state_16551[(7)]);
var inst_16500 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_16481);
var state_16551__$1 = state_16551;
var statearr_16592_16649 = state_16551__$1;
(statearr_16592_16649[(2)] = inst_16500);

(statearr_16592_16649[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16552 === (11))){
var inst_16481 = (state_16551[(7)]);
var inst_16485 = (inst_16481 == null);
var inst_16486 = cljs.core.not(inst_16485);
var state_16551__$1 = state_16551;
if(inst_16486){
var statearr_16593_16650 = state_16551__$1;
(statearr_16593_16650[(1)] = (13));

} else {
var statearr_16594_16651 = state_16551__$1;
(statearr_16594_16651[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16552 === (9))){
var inst_16457 = (state_16551[(8)]);
var state_16551__$1 = state_16551;
var statearr_16595_16652 = state_16551__$1;
(statearr_16595_16652[(2)] = inst_16457);

(statearr_16595_16652[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16552 === (5))){
var state_16551__$1 = state_16551;
var statearr_16596_16653 = state_16551__$1;
(statearr_16596_16653[(2)] = true);

(statearr_16596_16653[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16552 === (14))){
var state_16551__$1 = state_16551;
var statearr_16597_16654 = state_16551__$1;
(statearr_16597_16654[(2)] = false);

(statearr_16597_16654[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16552 === (26))){
var inst_16511 = (state_16551[(10)]);
var inst_16518 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_16511);
var state_16551__$1 = state_16551;
var statearr_16598_16655 = state_16551__$1;
(statearr_16598_16655[(2)] = inst_16518);

(statearr_16598_16655[(1)] = (28));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16552 === (16))){
var state_16551__$1 = state_16551;
var statearr_16599_16656 = state_16551__$1;
(statearr_16599_16656[(2)] = true);

(statearr_16599_16656[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16552 === (38))){
var inst_16541 = (state_16551[(2)]);
var state_16551__$1 = state_16551;
var statearr_16600_16657 = state_16551__$1;
(statearr_16600_16657[(2)] = inst_16541);

(statearr_16600_16657[(1)] = (34));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16552 === (30))){
var inst_16504 = (state_16551[(9)]);
var inst_16511 = (state_16551[(10)]);
var inst_16505 = (state_16551[(13)]);
var inst_16528 = cljs.core.empty_QMARK_(inst_16504);
var inst_16529 = (inst_16505.cljs$core$IFn$_invoke$arity$1 ? inst_16505.cljs$core$IFn$_invoke$arity$1(inst_16511) : inst_16505.call(null,inst_16511));
var inst_16530 = cljs.core.not(inst_16529);
var inst_16531 = (inst_16528) && (inst_16530);
var state_16551__$1 = state_16551;
var statearr_16601_16658 = state_16551__$1;
(statearr_16601_16658[(2)] = inst_16531);

(statearr_16601_16658[(1)] = (31));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16552 === (10))){
var inst_16457 = (state_16551[(8)]);
var inst_16477 = (state_16551[(2)]);
var inst_16478 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16477,cljs.core.cst$kw$solos);
var inst_16479 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16477,cljs.core.cst$kw$mutes);
var inst_16480 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16477,cljs.core.cst$kw$reads);
var inst_16481 = inst_16457;
var state_16551__$1 = (function (){var statearr_16602 = state_16551;
(statearr_16602[(7)] = inst_16481);

(statearr_16602[(16)] = inst_16479);

(statearr_16602[(17)] = inst_16480);

(statearr_16602[(18)] = inst_16478);

return statearr_16602;
})();
var statearr_16603_16659 = state_16551__$1;
(statearr_16603_16659[(2)] = null);

(statearr_16603_16659[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16552 === (18))){
var inst_16495 = (state_16551[(2)]);
var state_16551__$1 = state_16551;
var statearr_16604_16660 = state_16551__$1;
(statearr_16604_16660[(2)] = inst_16495);

(statearr_16604_16660[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16552 === (37))){
var state_16551__$1 = state_16551;
var statearr_16605_16661 = state_16551__$1;
(statearr_16605_16661[(2)] = null);

(statearr_16605_16661[(1)] = (38));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16552 === (8))){
var inst_16457 = (state_16551[(8)]);
var inst_16474 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_16457);
var state_16551__$1 = state_16551;
var statearr_16606_16662 = state_16551__$1;
(statearr_16606_16662[(2)] = inst_16474);

(statearr_16606_16662[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__8570__auto___16616,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__8503__auto__,c__8570__auto___16616,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__8504__auto__ = null;
var cljs$core$async$mix_$_state_machine__8504__auto____0 = (function (){
var statearr_16610 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16610[(0)] = cljs$core$async$mix_$_state_machine__8504__auto__);

(statearr_16610[(1)] = (1));

return statearr_16610;
});
var cljs$core$async$mix_$_state_machine__8504__auto____1 = (function (state_16551){
while(true){
var ret_value__8505__auto__ = (function (){try{while(true){
var result__8506__auto__ = switch__8503__auto__(state_16551);
if(cljs.core.keyword_identical_QMARK_(result__8506__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__8506__auto__;
}
break;
}
}catch (e16611){if((e16611 instanceof Object)){
var ex__8507__auto__ = e16611;
var statearr_16612_16663 = state_16551;
(statearr_16612_16663[(5)] = ex__8507__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_16551);

return cljs.core.cst$kw$recur;
} else {
throw e16611;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__8505__auto__,cljs.core.cst$kw$recur)){
var G__16664 = state_16551;
state_16551 = G__16664;
continue;
} else {
return ret_value__8505__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__8504__auto__ = function(state_16551){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__8504__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__8504__auto____1.call(this,state_16551);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__8504__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__8504__auto____0;
cljs$core$async$mix_$_state_machine__8504__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__8504__auto____1;
return cljs$core$async$mix_$_state_machine__8504__auto__;
})()
;})(switch__8503__auto__,c__8570__auto___16616,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__8572__auto__ = (function (){var statearr_16613 = (f__8571__auto__.cljs$core$IFn$_invoke$arity$0 ? f__8571__auto__.cljs$core$IFn$_invoke$arity$0() : f__8571__auto__.call(null));
(statearr_16613[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8570__auto___16616);

return statearr_16613;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__8572__auto__);
});})(c__8570__auto___16616,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__5216__auto__ = (((p == null))?null:p);
var m__5217__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__5216__auto__)]);
if(!((m__5217__auto__ == null))){
return (m__5217__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5217__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5217__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__5217__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__5217__auto____$1 == null))){
return (m__5217__auto____$1.cljs$core$IFn$_invoke$arity$4 ? m__5217__auto____$1.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5217__auto____$1.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__5216__auto__ = (((p == null))?null:p);
var m__5217__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__5216__auto__)]);
if(!((m__5217__auto__ == null))){
return (m__5217__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5217__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5217__auto__.call(null,p,v,ch));
} else {
var m__5217__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__5217__auto____$1 == null))){
return (m__5217__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__5217__auto____$1.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5217__auto____$1.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args16665 = [];
var len__5619__auto___16668 = arguments.length;
var i__5620__auto___16669 = (0);
while(true){
if((i__5620__auto___16669 < len__5619__auto___16668)){
args16665.push((arguments[i__5620__auto___16669]));

var G__16670 = (i__5620__auto___16669 + (1));
i__5620__auto___16669 = G__16670;
continue;
} else {
}
break;
}

var G__16667 = args16665.length;
switch (G__16667) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16665.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__5216__auto__ = (((p == null))?null:p);
var m__5217__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5216__auto__)]);
if(!((m__5217__auto__ == null))){
return (m__5217__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5217__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5217__auto__.call(null,p));
} else {
var m__5217__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__5217__auto____$1 == null))){
return (m__5217__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__5217__auto____$1.cljs$core$IFn$_invoke$arity$1(p) : m__5217__auto____$1.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__5216__auto__ = (((p == null))?null:p);
var m__5217__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5216__auto__)]);
if(!((m__5217__auto__ == null))){
return (m__5217__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5217__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5217__auto__.call(null,p,v));
} else {
var m__5217__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__5217__auto____$1 == null))){
return (m__5217__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__5217__auto____$1.cljs$core$IFn$_invoke$arity$2(p,v) : m__5217__auto____$1.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;

/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var args16673 = [];
var len__5619__auto___16801 = arguments.length;
var i__5620__auto___16802 = (0);
while(true){
if((i__5620__auto___16802 < len__5619__auto___16801)){
args16673.push((arguments[i__5620__auto___16802]));

var G__16803 = (i__5620__auto___16802 + (1));
i__5620__auto___16802 = G__16803;
continue;
} else {
}
break;
}

var G__16675 = args16673.length;
switch (G__16675) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16673.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = (function (){var G__16676 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__16676) : cljs.core.atom.call(null,G__16676));
})();
var ensure_mult = ((function (mults){
return (function (topic){
var or__4561__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(mults) : cljs.core.deref.call(null,mults)),topic);
if(cljs.core.truth_(or__4561__auto__)){
return or__4561__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,((function (or__4561__auto__,mults){
return (function (p1__16672_SHARP_){
if(cljs.core.truth_((p1__16672_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__16672_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__16672_SHARP_.call(null,topic)))){
return p1__16672_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__16672_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
});})(or__4561__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async16677 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16677 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta16678){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta16678 = meta16678;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async16677.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_16679,meta16678__$1){
var self__ = this;
var _16679__$1 = this;
return (new cljs.core.async.t_cljs$core$async16677(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta16678__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async16677.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_16679){
var self__ = this;
var _16679__$1 = this;
return self__.meta16678;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async16677.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async16677.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async16677.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async16677.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async16677.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4425__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(self__.mults) : cljs.core.deref.call(null,self__.mults)),topic);
if(cljs.core.truth_(temp__4425__auto__)){
var m = temp__4425__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async16677.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__16680 = self__.mults;
var G__16681 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__16680,G__16681) : cljs.core.reset_BANG_.call(null,G__16680,G__16681));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async16677.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async16677.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$ch,cljs.core.cst$sym$topic_DASH_fn,cljs.core.cst$sym$buf_DASH_fn,cljs.core.cst$sym$mults,cljs.core.cst$sym$ensure_DASH_mult,cljs.core.cst$sym$meta16678], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async16677.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async16677.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16677";

cljs.core.async.t_cljs$core$async16677.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__5159__auto__,writer__5160__auto__,opt__5161__auto__){
return cljs.core._write(writer__5160__auto__,"cljs.core.async/t_cljs$core$async16677");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async16677 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async16677(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta16678){
return (new cljs.core.async.t_cljs$core$async16677(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta16678));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async16677(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__8570__auto___16805 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__8570__auto___16805,mults,ensure_mult,p){
return (function (){
var f__8571__auto__ = (function (){var switch__8503__auto__ = ((function (c__8570__auto___16805,mults,ensure_mult,p){
return (function (state_16753){
var state_val_16754 = (state_16753[(1)]);
if((state_val_16754 === (7))){
var inst_16749 = (state_16753[(2)]);
var state_16753__$1 = state_16753;
var statearr_16755_16806 = state_16753__$1;
(statearr_16755_16806[(2)] = inst_16749);

(statearr_16755_16806[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16754 === (20))){
var state_16753__$1 = state_16753;
var statearr_16756_16807 = state_16753__$1;
(statearr_16756_16807[(2)] = null);

(statearr_16756_16807[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16754 === (1))){
var state_16753__$1 = state_16753;
var statearr_16757_16808 = state_16753__$1;
(statearr_16757_16808[(2)] = null);

(statearr_16757_16808[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16754 === (24))){
var inst_16732 = (state_16753[(7)]);
var inst_16741 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_16732);
var state_16753__$1 = state_16753;
var statearr_16758_16809 = state_16753__$1;
(statearr_16758_16809[(2)] = inst_16741);

(statearr_16758_16809[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16754 === (4))){
var inst_16684 = (state_16753[(8)]);
var inst_16684__$1 = (state_16753[(2)]);
var inst_16685 = (inst_16684__$1 == null);
var state_16753__$1 = (function (){var statearr_16759 = state_16753;
(statearr_16759[(8)] = inst_16684__$1);

return statearr_16759;
})();
if(cljs.core.truth_(inst_16685)){
var statearr_16760_16810 = state_16753__$1;
(statearr_16760_16810[(1)] = (5));

} else {
var statearr_16761_16811 = state_16753__$1;
(statearr_16761_16811[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16754 === (15))){
var inst_16726 = (state_16753[(2)]);
var state_16753__$1 = state_16753;
var statearr_16762_16812 = state_16753__$1;
(statearr_16762_16812[(2)] = inst_16726);

(statearr_16762_16812[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16754 === (21))){
var inst_16746 = (state_16753[(2)]);
var state_16753__$1 = (function (){var statearr_16763 = state_16753;
(statearr_16763[(9)] = inst_16746);

return statearr_16763;
})();
var statearr_16764_16813 = state_16753__$1;
(statearr_16764_16813[(2)] = null);

(statearr_16764_16813[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16754 === (13))){
var inst_16708 = (state_16753[(10)]);
var inst_16710 = cljs.core.chunked_seq_QMARK_(inst_16708);
var state_16753__$1 = state_16753;
if(inst_16710){
var statearr_16765_16814 = state_16753__$1;
(statearr_16765_16814[(1)] = (16));

} else {
var statearr_16766_16815 = state_16753__$1;
(statearr_16766_16815[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16754 === (22))){
var inst_16738 = (state_16753[(2)]);
var state_16753__$1 = state_16753;
if(cljs.core.truth_(inst_16738)){
var statearr_16767_16816 = state_16753__$1;
(statearr_16767_16816[(1)] = (23));

} else {
var statearr_16768_16817 = state_16753__$1;
(statearr_16768_16817[(1)] = (24));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16754 === (6))){
var inst_16684 = (state_16753[(8)]);
var inst_16734 = (state_16753[(11)]);
var inst_16732 = (state_16753[(7)]);
var inst_16732__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_16684) : topic_fn.call(null,inst_16684));
var inst_16733 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(mults) : cljs.core.deref.call(null,mults));
var inst_16734__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16733,inst_16732__$1);
var state_16753__$1 = (function (){var statearr_16769 = state_16753;
(statearr_16769[(11)] = inst_16734__$1);

(statearr_16769[(7)] = inst_16732__$1);

return statearr_16769;
})();
if(cljs.core.truth_(inst_16734__$1)){
var statearr_16770_16818 = state_16753__$1;
(statearr_16770_16818[(1)] = (19));

} else {
var statearr_16771_16819 = state_16753__$1;
(statearr_16771_16819[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16754 === (25))){
var inst_16743 = (state_16753[(2)]);
var state_16753__$1 = state_16753;
var statearr_16772_16820 = state_16753__$1;
(statearr_16772_16820[(2)] = inst_16743);

(statearr_16772_16820[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16754 === (17))){
var inst_16708 = (state_16753[(10)]);
var inst_16717 = cljs.core.first(inst_16708);
var inst_16718 = cljs.core.async.muxch_STAR_(inst_16717);
var inst_16719 = cljs.core.async.close_BANG_(inst_16718);
var inst_16720 = cljs.core.next(inst_16708);
var inst_16694 = inst_16720;
var inst_16695 = null;
var inst_16696 = (0);
var inst_16697 = (0);
var state_16753__$1 = (function (){var statearr_16773 = state_16753;
(statearr_16773[(12)] = inst_16697);

(statearr_16773[(13)] = inst_16696);

(statearr_16773[(14)] = inst_16694);

(statearr_16773[(15)] = inst_16719);

(statearr_16773[(16)] = inst_16695);

return statearr_16773;
})();
var statearr_16774_16821 = state_16753__$1;
(statearr_16774_16821[(2)] = null);

(statearr_16774_16821[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16754 === (3))){
var inst_16751 = (state_16753[(2)]);
var state_16753__$1 = state_16753;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16753__$1,inst_16751);
} else {
if((state_val_16754 === (12))){
var inst_16728 = (state_16753[(2)]);
var state_16753__$1 = state_16753;
var statearr_16775_16822 = state_16753__$1;
(statearr_16775_16822[(2)] = inst_16728);

(statearr_16775_16822[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16754 === (2))){
var state_16753__$1 = state_16753;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16753__$1,(4),ch);
} else {
if((state_val_16754 === (23))){
var state_16753__$1 = state_16753;
var statearr_16776_16823 = state_16753__$1;
(statearr_16776_16823[(2)] = null);

(statearr_16776_16823[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16754 === (19))){
var inst_16684 = (state_16753[(8)]);
var inst_16734 = (state_16753[(11)]);
var inst_16736 = cljs.core.async.muxch_STAR_(inst_16734);
var state_16753__$1 = state_16753;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16753__$1,(22),inst_16736,inst_16684);
} else {
if((state_val_16754 === (11))){
var inst_16694 = (state_16753[(14)]);
var inst_16708 = (state_16753[(10)]);
var inst_16708__$1 = cljs.core.seq(inst_16694);
var state_16753__$1 = (function (){var statearr_16777 = state_16753;
(statearr_16777[(10)] = inst_16708__$1);

return statearr_16777;
})();
if(inst_16708__$1){
var statearr_16778_16824 = state_16753__$1;
(statearr_16778_16824[(1)] = (13));

} else {
var statearr_16779_16825 = state_16753__$1;
(statearr_16779_16825[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16754 === (9))){
var inst_16730 = (state_16753[(2)]);
var state_16753__$1 = state_16753;
var statearr_16780_16826 = state_16753__$1;
(statearr_16780_16826[(2)] = inst_16730);

(statearr_16780_16826[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16754 === (5))){
var inst_16691 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(mults) : cljs.core.deref.call(null,mults));
var inst_16692 = cljs.core.vals(inst_16691);
var inst_16693 = cljs.core.seq(inst_16692);
var inst_16694 = inst_16693;
var inst_16695 = null;
var inst_16696 = (0);
var inst_16697 = (0);
var state_16753__$1 = (function (){var statearr_16781 = state_16753;
(statearr_16781[(12)] = inst_16697);

(statearr_16781[(13)] = inst_16696);

(statearr_16781[(14)] = inst_16694);

(statearr_16781[(16)] = inst_16695);

return statearr_16781;
})();
var statearr_16782_16827 = state_16753__$1;
(statearr_16782_16827[(2)] = null);

(statearr_16782_16827[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16754 === (14))){
var state_16753__$1 = state_16753;
var statearr_16786_16828 = state_16753__$1;
(statearr_16786_16828[(2)] = null);

(statearr_16786_16828[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16754 === (16))){
var inst_16708 = (state_16753[(10)]);
var inst_16712 = cljs.core.chunk_first(inst_16708);
var inst_16713 = cljs.core.chunk_rest(inst_16708);
var inst_16714 = cljs.core.count(inst_16712);
var inst_16694 = inst_16713;
var inst_16695 = inst_16712;
var inst_16696 = inst_16714;
var inst_16697 = (0);
var state_16753__$1 = (function (){var statearr_16787 = state_16753;
(statearr_16787[(12)] = inst_16697);

(statearr_16787[(13)] = inst_16696);

(statearr_16787[(14)] = inst_16694);

(statearr_16787[(16)] = inst_16695);

return statearr_16787;
})();
var statearr_16788_16829 = state_16753__$1;
(statearr_16788_16829[(2)] = null);

(statearr_16788_16829[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16754 === (10))){
var inst_16697 = (state_16753[(12)]);
var inst_16696 = (state_16753[(13)]);
var inst_16694 = (state_16753[(14)]);
var inst_16695 = (state_16753[(16)]);
var inst_16702 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_16695,inst_16697);
var inst_16703 = cljs.core.async.muxch_STAR_(inst_16702);
var inst_16704 = cljs.core.async.close_BANG_(inst_16703);
var inst_16705 = (inst_16697 + (1));
var tmp16783 = inst_16696;
var tmp16784 = inst_16694;
var tmp16785 = inst_16695;
var inst_16694__$1 = tmp16784;
var inst_16695__$1 = tmp16785;
var inst_16696__$1 = tmp16783;
var inst_16697__$1 = inst_16705;
var state_16753__$1 = (function (){var statearr_16789 = state_16753;
(statearr_16789[(12)] = inst_16697__$1);

(statearr_16789[(13)] = inst_16696__$1);

(statearr_16789[(14)] = inst_16694__$1);

(statearr_16789[(17)] = inst_16704);

(statearr_16789[(16)] = inst_16695__$1);

return statearr_16789;
})();
var statearr_16790_16830 = state_16753__$1;
(statearr_16790_16830[(2)] = null);

(statearr_16790_16830[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16754 === (18))){
var inst_16723 = (state_16753[(2)]);
var state_16753__$1 = state_16753;
var statearr_16791_16831 = state_16753__$1;
(statearr_16791_16831[(2)] = inst_16723);

(statearr_16791_16831[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16754 === (8))){
var inst_16697 = (state_16753[(12)]);
var inst_16696 = (state_16753[(13)]);
var inst_16699 = (inst_16697 < inst_16696);
var inst_16700 = inst_16699;
var state_16753__$1 = state_16753;
if(cljs.core.truth_(inst_16700)){
var statearr_16792_16832 = state_16753__$1;
(statearr_16792_16832[(1)] = (10));

} else {
var statearr_16793_16833 = state_16753__$1;
(statearr_16793_16833[(1)] = (11));

}

return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__8570__auto___16805,mults,ensure_mult,p))
;
return ((function (switch__8503__auto__,c__8570__auto___16805,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__8504__auto__ = null;
var cljs$core$async$state_machine__8504__auto____0 = (function (){
var statearr_16797 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16797[(0)] = cljs$core$async$state_machine__8504__auto__);

(statearr_16797[(1)] = (1));

return statearr_16797;
});
var cljs$core$async$state_machine__8504__auto____1 = (function (state_16753){
while(true){
var ret_value__8505__auto__ = (function (){try{while(true){
var result__8506__auto__ = switch__8503__auto__(state_16753);
if(cljs.core.keyword_identical_QMARK_(result__8506__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__8506__auto__;
}
break;
}
}catch (e16798){if((e16798 instanceof Object)){
var ex__8507__auto__ = e16798;
var statearr_16799_16834 = state_16753;
(statearr_16799_16834[(5)] = ex__8507__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_16753);

return cljs.core.cst$kw$recur;
} else {
throw e16798;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__8505__auto__,cljs.core.cst$kw$recur)){
var G__16835 = state_16753;
state_16753 = G__16835;
continue;
} else {
return ret_value__8505__auto__;
}
break;
}
});
cljs$core$async$state_machine__8504__auto__ = function(state_16753){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__8504__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__8504__auto____1.call(this,state_16753);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__8504__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__8504__auto____0;
cljs$core$async$state_machine__8504__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__8504__auto____1;
return cljs$core$async$state_machine__8504__auto__;
})()
;})(switch__8503__auto__,c__8570__auto___16805,mults,ensure_mult,p))
})();
var state__8572__auto__ = (function (){var statearr_16800 = (f__8571__auto__.cljs$core$IFn$_invoke$arity$0 ? f__8571__auto__.cljs$core$IFn$_invoke$arity$0() : f__8571__auto__.call(null));
(statearr_16800[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8570__auto___16805);

return statearr_16800;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__8572__auto__);
});})(c__8570__auto___16805,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;
/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var args16836 = [];
var len__5619__auto___16839 = arguments.length;
var i__5620__auto___16840 = (0);
while(true){
if((i__5620__auto___16840 < len__5619__auto___16839)){
args16836.push((arguments[i__5620__auto___16840]));

var G__16841 = (i__5620__auto___16840 + (1));
i__5620__auto___16840 = G__16841;
continue;
} else {
}
break;
}

var G__16838 = args16836.length;
switch (G__16838) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16836.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;
/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var args16843 = [];
var len__5619__auto___16846 = arguments.length;
var i__5620__auto___16847 = (0);
while(true){
if((i__5620__auto___16847 < len__5619__auto___16846)){
args16843.push((arguments[i__5620__auto___16847]));

var G__16848 = (i__5620__auto___16847 + (1));
i__5620__auto___16847 = G__16848;
continue;
} else {
}
break;
}

var G__16845 = args16843.length;
switch (G__16845) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16843.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1(p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2(p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;
/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var args16850 = [];
var len__5619__auto___16921 = arguments.length;
var i__5620__auto___16922 = (0);
while(true){
if((i__5620__auto___16922 < len__5619__auto___16921)){
args16850.push((arguments[i__5620__auto___16922]));

var G__16923 = (i__5620__auto___16922 + (1));
i__5620__auto___16922 = G__16923;
continue;
} else {
}
break;
}

var G__16852 = args16850.length;
switch (G__16852) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16850.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null) : cljs.core.atom.call(null,null));
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
var c__8570__auto___16925 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__8570__auto___16925,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__8571__auto__ = (function (){var switch__8503__auto__ = ((function (c__8570__auto___16925,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_16891){
var state_val_16892 = (state_16891[(1)]);
if((state_val_16892 === (7))){
var state_16891__$1 = state_16891;
var statearr_16893_16926 = state_16891__$1;
(statearr_16893_16926[(2)] = null);

(statearr_16893_16926[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16892 === (1))){
var state_16891__$1 = state_16891;
var statearr_16894_16927 = state_16891__$1;
(statearr_16894_16927[(2)] = null);

(statearr_16894_16927[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16892 === (4))){
var inst_16855 = (state_16891[(7)]);
var inst_16857 = (inst_16855 < cnt);
var state_16891__$1 = state_16891;
if(cljs.core.truth_(inst_16857)){
var statearr_16895_16928 = state_16891__$1;
(statearr_16895_16928[(1)] = (6));

} else {
var statearr_16896_16929 = state_16891__$1;
(statearr_16896_16929[(1)] = (7));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16892 === (15))){
var inst_16887 = (state_16891[(2)]);
var state_16891__$1 = state_16891;
var statearr_16897_16930 = state_16891__$1;
(statearr_16897_16930[(2)] = inst_16887);

(statearr_16897_16930[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16892 === (13))){
var inst_16880 = cljs.core.async.close_BANG_(out);
var state_16891__$1 = state_16891;
var statearr_16898_16931 = state_16891__$1;
(statearr_16898_16931[(2)] = inst_16880);

(statearr_16898_16931[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16892 === (6))){
var state_16891__$1 = state_16891;
var statearr_16899_16932 = state_16891__$1;
(statearr_16899_16932[(2)] = null);

(statearr_16899_16932[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16892 === (3))){
var inst_16889 = (state_16891[(2)]);
var state_16891__$1 = state_16891;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16891__$1,inst_16889);
} else {
if((state_val_16892 === (12))){
var inst_16877 = (state_16891[(8)]);
var inst_16877__$1 = (state_16891[(2)]);
var inst_16878 = cljs.core.some(cljs.core.nil_QMARK_,inst_16877__$1);
var state_16891__$1 = (function (){var statearr_16900 = state_16891;
(statearr_16900[(8)] = inst_16877__$1);

return statearr_16900;
})();
if(cljs.core.truth_(inst_16878)){
var statearr_16901_16933 = state_16891__$1;
(statearr_16901_16933[(1)] = (13));

} else {
var statearr_16902_16934 = state_16891__$1;
(statearr_16902_16934[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16892 === (2))){
var inst_16854 = (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cnt) : cljs.core.reset_BANG_.call(null,dctr,cnt));
var inst_16855 = (0);
var state_16891__$1 = (function (){var statearr_16903 = state_16891;
(statearr_16903[(7)] = inst_16855);

(statearr_16903[(9)] = inst_16854);

return statearr_16903;
})();
var statearr_16904_16935 = state_16891__$1;
(statearr_16904_16935[(2)] = null);

(statearr_16904_16935[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16892 === (11))){
var inst_16855 = (state_16891[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_16891,(10),Object,null,(9));
var inst_16864 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_16855) : chs__$1.call(null,inst_16855));
var inst_16865 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_16855) : done.call(null,inst_16855));
var inst_16866 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_16864,inst_16865);
var state_16891__$1 = state_16891;
var statearr_16905_16936 = state_16891__$1;
(statearr_16905_16936[(2)] = inst_16866);


cljs.core.async.impl.ioc_helpers.process_exception(state_16891__$1);

return cljs.core.cst$kw$recur;
} else {
if((state_val_16892 === (9))){
var inst_16855 = (state_16891[(7)]);
var inst_16868 = (state_16891[(2)]);
var inst_16869 = (inst_16855 + (1));
var inst_16855__$1 = inst_16869;
var state_16891__$1 = (function (){var statearr_16906 = state_16891;
(statearr_16906[(10)] = inst_16868);

(statearr_16906[(7)] = inst_16855__$1);

return statearr_16906;
})();
var statearr_16907_16937 = state_16891__$1;
(statearr_16907_16937[(2)] = null);

(statearr_16907_16937[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16892 === (5))){
var inst_16875 = (state_16891[(2)]);
var state_16891__$1 = (function (){var statearr_16908 = state_16891;
(statearr_16908[(11)] = inst_16875);

return statearr_16908;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16891__$1,(12),dchan);
} else {
if((state_val_16892 === (14))){
var inst_16877 = (state_16891[(8)]);
var inst_16882 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_16877);
var state_16891__$1 = state_16891;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16891__$1,(16),out,inst_16882);
} else {
if((state_val_16892 === (16))){
var inst_16884 = (state_16891[(2)]);
var state_16891__$1 = (function (){var statearr_16909 = state_16891;
(statearr_16909[(12)] = inst_16884);

return statearr_16909;
})();
var statearr_16910_16938 = state_16891__$1;
(statearr_16910_16938[(2)] = null);

(statearr_16910_16938[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16892 === (10))){
var inst_16859 = (state_16891[(2)]);
var inst_16860 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_16891__$1 = (function (){var statearr_16911 = state_16891;
(statearr_16911[(13)] = inst_16859);

return statearr_16911;
})();
var statearr_16912_16939 = state_16891__$1;
(statearr_16912_16939[(2)] = inst_16860);


cljs.core.async.impl.ioc_helpers.process_exception(state_16891__$1);

return cljs.core.cst$kw$recur;
} else {
if((state_val_16892 === (8))){
var inst_16873 = (state_16891[(2)]);
var state_16891__$1 = state_16891;
var statearr_16913_16940 = state_16891__$1;
(statearr_16913_16940[(2)] = inst_16873);

(statearr_16913_16940[(1)] = (5));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__8570__auto___16925,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__8503__auto__,c__8570__auto___16925,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__8504__auto__ = null;
var cljs$core$async$state_machine__8504__auto____0 = (function (){
var statearr_16917 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16917[(0)] = cljs$core$async$state_machine__8504__auto__);

(statearr_16917[(1)] = (1));

return statearr_16917;
});
var cljs$core$async$state_machine__8504__auto____1 = (function (state_16891){
while(true){
var ret_value__8505__auto__ = (function (){try{while(true){
var result__8506__auto__ = switch__8503__auto__(state_16891);
if(cljs.core.keyword_identical_QMARK_(result__8506__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__8506__auto__;
}
break;
}
}catch (e16918){if((e16918 instanceof Object)){
var ex__8507__auto__ = e16918;
var statearr_16919_16941 = state_16891;
(statearr_16919_16941[(5)] = ex__8507__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_16891);

return cljs.core.cst$kw$recur;
} else {
throw e16918;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__8505__auto__,cljs.core.cst$kw$recur)){
var G__16942 = state_16891;
state_16891 = G__16942;
continue;
} else {
return ret_value__8505__auto__;
}
break;
}
});
cljs$core$async$state_machine__8504__auto__ = function(state_16891){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__8504__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__8504__auto____1.call(this,state_16891);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__8504__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__8504__auto____0;
cljs$core$async$state_machine__8504__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__8504__auto____1;
return cljs$core$async$state_machine__8504__auto__;
})()
;})(switch__8503__auto__,c__8570__auto___16925,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__8572__auto__ = (function (){var statearr_16920 = (f__8571__auto__.cljs$core$IFn$_invoke$arity$0 ? f__8571__auto__.cljs$core$IFn$_invoke$arity$0() : f__8571__auto__.call(null));
(statearr_16920[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8570__auto___16925);

return statearr_16920;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__8572__auto__);
});})(c__8570__auto___16925,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;
/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var args16944 = [];
var len__5619__auto___17000 = arguments.length;
var i__5620__auto___17001 = (0);
while(true){
if((i__5620__auto___17001 < len__5619__auto___17000)){
args16944.push((arguments[i__5620__auto___17001]));

var G__17002 = (i__5620__auto___17001 + (1));
i__5620__auto___17001 = G__17002;
continue;
} else {
}
break;
}

var G__16946 = args16944.length;
switch (G__16946) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16944.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__8570__auto___17004 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__8570__auto___17004,out){
return (function (){
var f__8571__auto__ = (function (){var switch__8503__auto__ = ((function (c__8570__auto___17004,out){
return (function (state_16976){
var state_val_16977 = (state_16976[(1)]);
if((state_val_16977 === (7))){
var inst_16955 = (state_16976[(7)]);
var inst_16956 = (state_16976[(8)]);
var inst_16955__$1 = (state_16976[(2)]);
var inst_16956__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16955__$1,(0),null);
var inst_16957 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16955__$1,(1),null);
var inst_16958 = (inst_16956__$1 == null);
var state_16976__$1 = (function (){var statearr_16978 = state_16976;
(statearr_16978[(7)] = inst_16955__$1);

(statearr_16978[(8)] = inst_16956__$1);

(statearr_16978[(9)] = inst_16957);

return statearr_16978;
})();
if(cljs.core.truth_(inst_16958)){
var statearr_16979_17005 = state_16976__$1;
(statearr_16979_17005[(1)] = (8));

} else {
var statearr_16980_17006 = state_16976__$1;
(statearr_16980_17006[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16977 === (1))){
var inst_16947 = cljs.core.vec(chs);
var inst_16948 = inst_16947;
var state_16976__$1 = (function (){var statearr_16981 = state_16976;
(statearr_16981[(10)] = inst_16948);

return statearr_16981;
})();
var statearr_16982_17007 = state_16976__$1;
(statearr_16982_17007[(2)] = null);

(statearr_16982_17007[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16977 === (4))){
var inst_16948 = (state_16976[(10)]);
var state_16976__$1 = state_16976;
return cljs.core.async.ioc_alts_BANG_(state_16976__$1,(7),inst_16948);
} else {
if((state_val_16977 === (6))){
var inst_16972 = (state_16976[(2)]);
var state_16976__$1 = state_16976;
var statearr_16983_17008 = state_16976__$1;
(statearr_16983_17008[(2)] = inst_16972);

(statearr_16983_17008[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16977 === (3))){
var inst_16974 = (state_16976[(2)]);
var state_16976__$1 = state_16976;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16976__$1,inst_16974);
} else {
if((state_val_16977 === (2))){
var inst_16948 = (state_16976[(10)]);
var inst_16950 = cljs.core.count(inst_16948);
var inst_16951 = (inst_16950 > (0));
var state_16976__$1 = state_16976;
if(cljs.core.truth_(inst_16951)){
var statearr_16985_17009 = state_16976__$1;
(statearr_16985_17009[(1)] = (4));

} else {
var statearr_16986_17010 = state_16976__$1;
(statearr_16986_17010[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16977 === (11))){
var inst_16948 = (state_16976[(10)]);
var inst_16965 = (state_16976[(2)]);
var tmp16984 = inst_16948;
var inst_16948__$1 = tmp16984;
var state_16976__$1 = (function (){var statearr_16987 = state_16976;
(statearr_16987[(11)] = inst_16965);

(statearr_16987[(10)] = inst_16948__$1);

return statearr_16987;
})();
var statearr_16988_17011 = state_16976__$1;
(statearr_16988_17011[(2)] = null);

(statearr_16988_17011[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16977 === (9))){
var inst_16956 = (state_16976[(8)]);
var state_16976__$1 = state_16976;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16976__$1,(11),out,inst_16956);
} else {
if((state_val_16977 === (5))){
var inst_16970 = cljs.core.async.close_BANG_(out);
var state_16976__$1 = state_16976;
var statearr_16989_17012 = state_16976__$1;
(statearr_16989_17012[(2)] = inst_16970);

(statearr_16989_17012[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16977 === (10))){
var inst_16968 = (state_16976[(2)]);
var state_16976__$1 = state_16976;
var statearr_16990_17013 = state_16976__$1;
(statearr_16990_17013[(2)] = inst_16968);

(statearr_16990_17013[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16977 === (8))){
var inst_16955 = (state_16976[(7)]);
var inst_16948 = (state_16976[(10)]);
var inst_16956 = (state_16976[(8)]);
var inst_16957 = (state_16976[(9)]);
var inst_16960 = (function (){var cs = inst_16948;
var vec__16953 = inst_16955;
var v = inst_16956;
var c = inst_16957;
return ((function (cs,vec__16953,v,c,inst_16955,inst_16948,inst_16956,inst_16957,state_val_16977,c__8570__auto___17004,out){
return (function (p1__16943_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__16943_SHARP_);
});
;})(cs,vec__16953,v,c,inst_16955,inst_16948,inst_16956,inst_16957,state_val_16977,c__8570__auto___17004,out))
})();
var inst_16961 = cljs.core.filterv(inst_16960,inst_16948);
var inst_16948__$1 = inst_16961;
var state_16976__$1 = (function (){var statearr_16991 = state_16976;
(statearr_16991[(10)] = inst_16948__$1);

return statearr_16991;
})();
var statearr_16992_17014 = state_16976__$1;
(statearr_16992_17014[(2)] = null);

(statearr_16992_17014[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__8570__auto___17004,out))
;
return ((function (switch__8503__auto__,c__8570__auto___17004,out){
return (function() {
var cljs$core$async$state_machine__8504__auto__ = null;
var cljs$core$async$state_machine__8504__auto____0 = (function (){
var statearr_16996 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16996[(0)] = cljs$core$async$state_machine__8504__auto__);

(statearr_16996[(1)] = (1));

return statearr_16996;
});
var cljs$core$async$state_machine__8504__auto____1 = (function (state_16976){
while(true){
var ret_value__8505__auto__ = (function (){try{while(true){
var result__8506__auto__ = switch__8503__auto__(state_16976);
if(cljs.core.keyword_identical_QMARK_(result__8506__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__8506__auto__;
}
break;
}
}catch (e16997){if((e16997 instanceof Object)){
var ex__8507__auto__ = e16997;
var statearr_16998_17015 = state_16976;
(statearr_16998_17015[(5)] = ex__8507__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_16976);

return cljs.core.cst$kw$recur;
} else {
throw e16997;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__8505__auto__,cljs.core.cst$kw$recur)){
var G__17016 = state_16976;
state_16976 = G__17016;
continue;
} else {
return ret_value__8505__auto__;
}
break;
}
});
cljs$core$async$state_machine__8504__auto__ = function(state_16976){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__8504__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__8504__auto____1.call(this,state_16976);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__8504__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__8504__auto____0;
cljs$core$async$state_machine__8504__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__8504__auto____1;
return cljs$core$async$state_machine__8504__auto__;
})()
;})(switch__8503__auto__,c__8570__auto___17004,out))
})();
var state__8572__auto__ = (function (){var statearr_16999 = (f__8571__auto__.cljs$core$IFn$_invoke$arity$0 ? f__8571__auto__.cljs$core$IFn$_invoke$arity$0() : f__8571__auto__.call(null));
(statearr_16999[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8570__auto___17004);

return statearr_16999;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__8572__auto__);
});})(c__8570__auto___17004,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;
/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var args17017 = [];
var len__5619__auto___17066 = arguments.length;
var i__5620__auto___17067 = (0);
while(true){
if((i__5620__auto___17067 < len__5619__auto___17066)){
args17017.push((arguments[i__5620__auto___17067]));

var G__17068 = (i__5620__auto___17067 + (1));
i__5620__auto___17067 = G__17068;
continue;
} else {
}
break;
}

var G__17019 = args17017.length;
switch (G__17019) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17017.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__8570__auto___17070 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__8570__auto___17070,out){
return (function (){
var f__8571__auto__ = (function (){var switch__8503__auto__ = ((function (c__8570__auto___17070,out){
return (function (state_17043){
var state_val_17044 = (state_17043[(1)]);
if((state_val_17044 === (7))){
var inst_17025 = (state_17043[(7)]);
var inst_17025__$1 = (state_17043[(2)]);
var inst_17026 = (inst_17025__$1 == null);
var inst_17027 = cljs.core.not(inst_17026);
var state_17043__$1 = (function (){var statearr_17045 = state_17043;
(statearr_17045[(7)] = inst_17025__$1);

return statearr_17045;
})();
if(inst_17027){
var statearr_17046_17071 = state_17043__$1;
(statearr_17046_17071[(1)] = (8));

} else {
var statearr_17047_17072 = state_17043__$1;
(statearr_17047_17072[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17044 === (1))){
var inst_17020 = (0);
var state_17043__$1 = (function (){var statearr_17048 = state_17043;
(statearr_17048[(8)] = inst_17020);

return statearr_17048;
})();
var statearr_17049_17073 = state_17043__$1;
(statearr_17049_17073[(2)] = null);

(statearr_17049_17073[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17044 === (4))){
var state_17043__$1 = state_17043;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17043__$1,(7),ch);
} else {
if((state_val_17044 === (6))){
var inst_17038 = (state_17043[(2)]);
var state_17043__$1 = state_17043;
var statearr_17050_17074 = state_17043__$1;
(statearr_17050_17074[(2)] = inst_17038);

(statearr_17050_17074[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17044 === (3))){
var inst_17040 = (state_17043[(2)]);
var inst_17041 = cljs.core.async.close_BANG_(out);
var state_17043__$1 = (function (){var statearr_17051 = state_17043;
(statearr_17051[(9)] = inst_17040);

return statearr_17051;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_17043__$1,inst_17041);
} else {
if((state_val_17044 === (2))){
var inst_17020 = (state_17043[(8)]);
var inst_17022 = (inst_17020 < n);
var state_17043__$1 = state_17043;
if(cljs.core.truth_(inst_17022)){
var statearr_17052_17075 = state_17043__$1;
(statearr_17052_17075[(1)] = (4));

} else {
var statearr_17053_17076 = state_17043__$1;
(statearr_17053_17076[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17044 === (11))){
var inst_17020 = (state_17043[(8)]);
var inst_17030 = (state_17043[(2)]);
var inst_17031 = (inst_17020 + (1));
var inst_17020__$1 = inst_17031;
var state_17043__$1 = (function (){var statearr_17054 = state_17043;
(statearr_17054[(10)] = inst_17030);

(statearr_17054[(8)] = inst_17020__$1);

return statearr_17054;
})();
var statearr_17055_17077 = state_17043__$1;
(statearr_17055_17077[(2)] = null);

(statearr_17055_17077[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17044 === (9))){
var state_17043__$1 = state_17043;
var statearr_17056_17078 = state_17043__$1;
(statearr_17056_17078[(2)] = null);

(statearr_17056_17078[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17044 === (5))){
var state_17043__$1 = state_17043;
var statearr_17057_17079 = state_17043__$1;
(statearr_17057_17079[(2)] = null);

(statearr_17057_17079[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17044 === (10))){
var inst_17035 = (state_17043[(2)]);
var state_17043__$1 = state_17043;
var statearr_17058_17080 = state_17043__$1;
(statearr_17058_17080[(2)] = inst_17035);

(statearr_17058_17080[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17044 === (8))){
var inst_17025 = (state_17043[(7)]);
var state_17043__$1 = state_17043;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17043__$1,(11),out,inst_17025);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__8570__auto___17070,out))
;
return ((function (switch__8503__auto__,c__8570__auto___17070,out){
return (function() {
var cljs$core$async$state_machine__8504__auto__ = null;
var cljs$core$async$state_machine__8504__auto____0 = (function (){
var statearr_17062 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_17062[(0)] = cljs$core$async$state_machine__8504__auto__);

(statearr_17062[(1)] = (1));

return statearr_17062;
});
var cljs$core$async$state_machine__8504__auto____1 = (function (state_17043){
while(true){
var ret_value__8505__auto__ = (function (){try{while(true){
var result__8506__auto__ = switch__8503__auto__(state_17043);
if(cljs.core.keyword_identical_QMARK_(result__8506__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__8506__auto__;
}
break;
}
}catch (e17063){if((e17063 instanceof Object)){
var ex__8507__auto__ = e17063;
var statearr_17064_17081 = state_17043;
(statearr_17064_17081[(5)] = ex__8507__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_17043);

return cljs.core.cst$kw$recur;
} else {
throw e17063;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__8505__auto__,cljs.core.cst$kw$recur)){
var G__17082 = state_17043;
state_17043 = G__17082;
continue;
} else {
return ret_value__8505__auto__;
}
break;
}
});
cljs$core$async$state_machine__8504__auto__ = function(state_17043){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__8504__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__8504__auto____1.call(this,state_17043);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__8504__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__8504__auto____0;
cljs$core$async$state_machine__8504__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__8504__auto____1;
return cljs$core$async$state_machine__8504__auto__;
})()
;})(switch__8503__auto__,c__8570__auto___17070,out))
})();
var state__8572__auto__ = (function (){var statearr_17065 = (f__8571__auto__.cljs$core$IFn$_invoke$arity$0 ? f__8571__auto__.cljs$core$IFn$_invoke$arity$0() : f__8571__auto__.call(null));
(statearr_17065[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8570__auto___17070);

return statearr_17065;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__8572__auto__);
});})(c__8570__auto___17070,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async17092 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17092 = (function (map_LT_,f,ch,meta17093){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta17093 = meta17093;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async17092.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17094,meta17093__$1){
var self__ = this;
var _17094__$1 = this;
return (new cljs.core.async.t_cljs$core$async17092(self__.map_LT_,self__.f,self__.ch,meta17093__$1));
});

cljs.core.async.t_cljs$core$async17092.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17094){
var self__ = this;
var _17094__$1 = this;
return self__.meta17093;
});

cljs.core.async.t_cljs$core$async17092.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async17092.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async17092.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t_cljs$core$async17092.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async17092.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async17095 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17095 = (function (map_LT_,f,ch,meta17093,_,fn1,meta17096){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta17093 = meta17093;
this._ = _;
this.fn1 = fn1;
this.meta17096 = meta17096;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async17095.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_17097,meta17096__$1){
var self__ = this;
var _17097__$1 = this;
return (new cljs.core.async.t_cljs$core$async17095(self__.map_LT_,self__.f,self__.ch,self__.meta17093,self__._,self__.fn1,meta17096__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async17095.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_17097){
var self__ = this;
var _17097__$1 = this;
return self__.meta17096;
});})(___$1))
;

cljs.core.async.t_cljs$core$async17095.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async17095.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async17095.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async17095.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__17083_SHARP_){
var G__17098 = (((p1__17083_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__17083_SHARP_) : self__.f.call(null,p1__17083_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__17098) : f1.call(null,G__17098));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async17095.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$map_LT_,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$ch], null))),cljs.core.cst$kw$doc,"Deprecated - this function will be removed. Use transducer instead"], null)),cljs.core.cst$sym$f,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta17093,cljs.core.with_meta(cljs.core.cst$sym$_,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tag,cljs.core.cst$sym$cljs$core$async_SLASH_t_cljs$core$async17092], null)),cljs.core.cst$sym$fn1,cljs.core.cst$sym$meta17096], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async17095.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async17095.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17095";

cljs.core.async.t_cljs$core$async17095.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__5159__auto__,writer__5160__auto__,opt__5161__auto__){
return cljs.core._write(writer__5160__auto__,"cljs.core.async/t_cljs$core$async17095");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async17095 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async17095(map_LT___$1,f__$1,ch__$1,meta17093__$1,___$2,fn1__$1,meta17096){
return (new cljs.core.async.t_cljs$core$async17095(map_LT___$1,f__$1,ch__$1,meta17093__$1,___$2,fn1__$1,meta17096));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async17095(self__.map_LT_,self__.f,self__.ch,self__.meta17093,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4549__auto__ = ret;
if(cljs.core.truth_(and__4549__auto__)){
return !(((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(ret) : cljs.core.deref.call(null,ret)) == null));
} else {
return and__4549__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__17099 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(ret) : cljs.core.deref.call(null,ret));
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__17099) : self__.f.call(null,G__17099));
})());
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async17092.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async17092.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async17092.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$map_LT_,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$ch], null))),cljs.core.cst$kw$doc,"Deprecated - this function will be removed. Use transducer instead"], null)),cljs.core.cst$sym$f,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta17093], null);
});

cljs.core.async.t_cljs$core$async17092.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async17092.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17092";

cljs.core.async.t_cljs$core$async17092.cljs$lang$ctorPrWriter = (function (this__5159__auto__,writer__5160__auto__,opt__5161__auto__){
return cljs.core._write(writer__5160__auto__,"cljs.core.async/t_cljs$core$async17092");
});

cljs.core.async.__GT_t_cljs$core$async17092 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async17092(map_LT___$1,f__$1,ch__$1,meta17093){
return (new cljs.core.async.t_cljs$core$async17092(map_LT___$1,f__$1,ch__$1,meta17093));
});

}

return (new cljs.core.async.t_cljs$core$async17092(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async17103 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17103 = (function (map_GT_,f,ch,meta17104){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta17104 = meta17104;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async17103.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17105,meta17104__$1){
var self__ = this;
var _17105__$1 = this;
return (new cljs.core.async.t_cljs$core$async17103(self__.map_GT_,self__.f,self__.ch,meta17104__$1));
});

cljs.core.async.t_cljs$core$async17103.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17105){
var self__ = this;
var _17105__$1 = this;
return self__.meta17104;
});

cljs.core.async.t_cljs$core$async17103.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async17103.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async17103.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async17103.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async17103.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async17103.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
});

cljs.core.async.t_cljs$core$async17103.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$map_GT_,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$ch], null))),cljs.core.cst$kw$doc,"Deprecated - this function will be removed. Use transducer instead"], null)),cljs.core.cst$sym$f,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta17104], null);
});

cljs.core.async.t_cljs$core$async17103.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async17103.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17103";

cljs.core.async.t_cljs$core$async17103.cljs$lang$ctorPrWriter = (function (this__5159__auto__,writer__5160__auto__,opt__5161__auto__){
return cljs.core._write(writer__5160__auto__,"cljs.core.async/t_cljs$core$async17103");
});

cljs.core.async.__GT_t_cljs$core$async17103 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async17103(map_GT___$1,f__$1,ch__$1,meta17104){
return (new cljs.core.async.t_cljs$core$async17103(map_GT___$1,f__$1,ch__$1,meta17104));
});

}

return (new cljs.core.async.t_cljs$core$async17103(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async17109 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17109 = (function (filter_GT_,p,ch,meta17110){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta17110 = meta17110;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async17109.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17111,meta17110__$1){
var self__ = this;
var _17111__$1 = this;
return (new cljs.core.async.t_cljs$core$async17109(self__.filter_GT_,self__.p,self__.ch,meta17110__$1));
});

cljs.core.async.t_cljs$core$async17109.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17111){
var self__ = this;
var _17111__$1 = this;
return self__.meta17110;
});

cljs.core.async.t_cljs$core$async17109.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async17109.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async17109.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t_cljs$core$async17109.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async17109.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async17109.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async17109.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
});

cljs.core.async.t_cljs$core$async17109.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$filter_GT_,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$p,cljs.core.cst$sym$ch], null))),cljs.core.cst$kw$doc,"Deprecated - this function will be removed. Use transducer instead"], null)),cljs.core.cst$sym$p,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta17110], null);
});

cljs.core.async.t_cljs$core$async17109.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async17109.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17109";

cljs.core.async.t_cljs$core$async17109.cljs$lang$ctorPrWriter = (function (this__5159__auto__,writer__5160__auto__,opt__5161__auto__){
return cljs.core._write(writer__5160__auto__,"cljs.core.async/t_cljs$core$async17109");
});

cljs.core.async.__GT_t_cljs$core$async17109 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async17109(filter_GT___$1,p__$1,ch__$1,meta17110){
return (new cljs.core.async.t_cljs$core$async17109(filter_GT___$1,p__$1,ch__$1,meta17110));
});

}

return (new cljs.core.async.t_cljs$core$async17109(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var args17112 = [];
var len__5619__auto___17156 = arguments.length;
var i__5620__auto___17157 = (0);
while(true){
if((i__5620__auto___17157 < len__5619__auto___17156)){
args17112.push((arguments[i__5620__auto___17157]));

var G__17158 = (i__5620__auto___17157 + (1));
i__5620__auto___17157 = G__17158;
continue;
} else {
}
break;
}

var G__17114 = args17112.length;
switch (G__17114) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17112.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__8570__auto___17160 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__8570__auto___17160,out){
return (function (){
var f__8571__auto__ = (function (){var switch__8503__auto__ = ((function (c__8570__auto___17160,out){
return (function (state_17135){
var state_val_17136 = (state_17135[(1)]);
if((state_val_17136 === (7))){
var inst_17131 = (state_17135[(2)]);
var state_17135__$1 = state_17135;
var statearr_17137_17161 = state_17135__$1;
(statearr_17137_17161[(2)] = inst_17131);

(statearr_17137_17161[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17136 === (1))){
var state_17135__$1 = state_17135;
var statearr_17138_17162 = state_17135__$1;
(statearr_17138_17162[(2)] = null);

(statearr_17138_17162[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17136 === (4))){
var inst_17117 = (state_17135[(7)]);
var inst_17117__$1 = (state_17135[(2)]);
var inst_17118 = (inst_17117__$1 == null);
var state_17135__$1 = (function (){var statearr_17139 = state_17135;
(statearr_17139[(7)] = inst_17117__$1);

return statearr_17139;
})();
if(cljs.core.truth_(inst_17118)){
var statearr_17140_17163 = state_17135__$1;
(statearr_17140_17163[(1)] = (5));

} else {
var statearr_17141_17164 = state_17135__$1;
(statearr_17141_17164[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17136 === (6))){
var inst_17117 = (state_17135[(7)]);
var inst_17122 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_17117) : p.call(null,inst_17117));
var state_17135__$1 = state_17135;
if(cljs.core.truth_(inst_17122)){
var statearr_17142_17165 = state_17135__$1;
(statearr_17142_17165[(1)] = (8));

} else {
var statearr_17143_17166 = state_17135__$1;
(statearr_17143_17166[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17136 === (3))){
var inst_17133 = (state_17135[(2)]);
var state_17135__$1 = state_17135;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17135__$1,inst_17133);
} else {
if((state_val_17136 === (2))){
var state_17135__$1 = state_17135;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17135__$1,(4),ch);
} else {
if((state_val_17136 === (11))){
var inst_17125 = (state_17135[(2)]);
var state_17135__$1 = state_17135;
var statearr_17144_17167 = state_17135__$1;
(statearr_17144_17167[(2)] = inst_17125);

(statearr_17144_17167[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17136 === (9))){
var state_17135__$1 = state_17135;
var statearr_17145_17168 = state_17135__$1;
(statearr_17145_17168[(2)] = null);

(statearr_17145_17168[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17136 === (5))){
var inst_17120 = cljs.core.async.close_BANG_(out);
var state_17135__$1 = state_17135;
var statearr_17146_17169 = state_17135__$1;
(statearr_17146_17169[(2)] = inst_17120);

(statearr_17146_17169[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17136 === (10))){
var inst_17128 = (state_17135[(2)]);
var state_17135__$1 = (function (){var statearr_17147 = state_17135;
(statearr_17147[(8)] = inst_17128);

return statearr_17147;
})();
var statearr_17148_17170 = state_17135__$1;
(statearr_17148_17170[(2)] = null);

(statearr_17148_17170[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17136 === (8))){
var inst_17117 = (state_17135[(7)]);
var state_17135__$1 = state_17135;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17135__$1,(11),out,inst_17117);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__8570__auto___17160,out))
;
return ((function (switch__8503__auto__,c__8570__auto___17160,out){
return (function() {
var cljs$core$async$state_machine__8504__auto__ = null;
var cljs$core$async$state_machine__8504__auto____0 = (function (){
var statearr_17152 = [null,null,null,null,null,null,null,null,null];
(statearr_17152[(0)] = cljs$core$async$state_machine__8504__auto__);

(statearr_17152[(1)] = (1));

return statearr_17152;
});
var cljs$core$async$state_machine__8504__auto____1 = (function (state_17135){
while(true){
var ret_value__8505__auto__ = (function (){try{while(true){
var result__8506__auto__ = switch__8503__auto__(state_17135);
if(cljs.core.keyword_identical_QMARK_(result__8506__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__8506__auto__;
}
break;
}
}catch (e17153){if((e17153 instanceof Object)){
var ex__8507__auto__ = e17153;
var statearr_17154_17171 = state_17135;
(statearr_17154_17171[(5)] = ex__8507__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_17135);

return cljs.core.cst$kw$recur;
} else {
throw e17153;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__8505__auto__,cljs.core.cst$kw$recur)){
var G__17172 = state_17135;
state_17135 = G__17172;
continue;
} else {
return ret_value__8505__auto__;
}
break;
}
});
cljs$core$async$state_machine__8504__auto__ = function(state_17135){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__8504__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__8504__auto____1.call(this,state_17135);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__8504__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__8504__auto____0;
cljs$core$async$state_machine__8504__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__8504__auto____1;
return cljs$core$async$state_machine__8504__auto__;
})()
;})(switch__8503__auto__,c__8570__auto___17160,out))
})();
var state__8572__auto__ = (function (){var statearr_17155 = (f__8571__auto__.cljs$core$IFn$_invoke$arity$0 ? f__8571__auto__.cljs$core$IFn$_invoke$arity$0() : f__8571__auto__.call(null));
(statearr_17155[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8570__auto___17160);

return statearr_17155;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__8572__auto__);
});})(c__8570__auto___17160,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args17173 = [];
var len__5619__auto___17176 = arguments.length;
var i__5620__auto___17177 = (0);
while(true){
if((i__5620__auto___17177 < len__5619__auto___17176)){
args17173.push((arguments[i__5620__auto___17177]));

var G__17178 = (i__5620__auto___17177 + (1));
i__5620__auto___17177 = G__17178;
continue;
} else {
}
break;
}

var G__17175 = args17173.length;
switch (G__17175) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17173.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;
cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__8570__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__8570__auto__){
return (function (){
var f__8571__auto__ = (function (){var switch__8503__auto__ = ((function (c__8570__auto__){
return (function (state_17345){
var state_val_17346 = (state_17345[(1)]);
if((state_val_17346 === (7))){
var inst_17341 = (state_17345[(2)]);
var state_17345__$1 = state_17345;
var statearr_17347_17388 = state_17345__$1;
(statearr_17347_17388[(2)] = inst_17341);

(statearr_17347_17388[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17346 === (20))){
var inst_17311 = (state_17345[(7)]);
var inst_17322 = (state_17345[(2)]);
var inst_17323 = cljs.core.next(inst_17311);
var inst_17297 = inst_17323;
var inst_17298 = null;
var inst_17299 = (0);
var inst_17300 = (0);
var state_17345__$1 = (function (){var statearr_17348 = state_17345;
(statearr_17348[(8)] = inst_17298);

(statearr_17348[(9)] = inst_17300);

(statearr_17348[(10)] = inst_17297);

(statearr_17348[(11)] = inst_17299);

(statearr_17348[(12)] = inst_17322);

return statearr_17348;
})();
var statearr_17349_17389 = state_17345__$1;
(statearr_17349_17389[(2)] = null);

(statearr_17349_17389[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17346 === (1))){
var state_17345__$1 = state_17345;
var statearr_17350_17390 = state_17345__$1;
(statearr_17350_17390[(2)] = null);

(statearr_17350_17390[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17346 === (4))){
var inst_17286 = (state_17345[(13)]);
var inst_17286__$1 = (state_17345[(2)]);
var inst_17287 = (inst_17286__$1 == null);
var state_17345__$1 = (function (){var statearr_17351 = state_17345;
(statearr_17351[(13)] = inst_17286__$1);

return statearr_17351;
})();
if(cljs.core.truth_(inst_17287)){
var statearr_17352_17391 = state_17345__$1;
(statearr_17352_17391[(1)] = (5));

} else {
var statearr_17353_17392 = state_17345__$1;
(statearr_17353_17392[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17346 === (15))){
var state_17345__$1 = state_17345;
var statearr_17357_17393 = state_17345__$1;
(statearr_17357_17393[(2)] = null);

(statearr_17357_17393[(1)] = (16));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17346 === (21))){
var state_17345__$1 = state_17345;
var statearr_17358_17394 = state_17345__$1;
(statearr_17358_17394[(2)] = null);

(statearr_17358_17394[(1)] = (23));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17346 === (13))){
var inst_17298 = (state_17345[(8)]);
var inst_17300 = (state_17345[(9)]);
var inst_17297 = (state_17345[(10)]);
var inst_17299 = (state_17345[(11)]);
var inst_17307 = (state_17345[(2)]);
var inst_17308 = (inst_17300 + (1));
var tmp17354 = inst_17298;
var tmp17355 = inst_17297;
var tmp17356 = inst_17299;
var inst_17297__$1 = tmp17355;
var inst_17298__$1 = tmp17354;
var inst_17299__$1 = tmp17356;
var inst_17300__$1 = inst_17308;
var state_17345__$1 = (function (){var statearr_17359 = state_17345;
(statearr_17359[(8)] = inst_17298__$1);

(statearr_17359[(9)] = inst_17300__$1);

(statearr_17359[(10)] = inst_17297__$1);

(statearr_17359[(11)] = inst_17299__$1);

(statearr_17359[(14)] = inst_17307);

return statearr_17359;
})();
var statearr_17360_17395 = state_17345__$1;
(statearr_17360_17395[(2)] = null);

(statearr_17360_17395[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17346 === (22))){
var state_17345__$1 = state_17345;
var statearr_17361_17396 = state_17345__$1;
(statearr_17361_17396[(2)] = null);

(statearr_17361_17396[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17346 === (6))){
var inst_17286 = (state_17345[(13)]);
var inst_17295 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_17286) : f.call(null,inst_17286));
var inst_17296 = cljs.core.seq(inst_17295);
var inst_17297 = inst_17296;
var inst_17298 = null;
var inst_17299 = (0);
var inst_17300 = (0);
var state_17345__$1 = (function (){var statearr_17362 = state_17345;
(statearr_17362[(8)] = inst_17298);

(statearr_17362[(9)] = inst_17300);

(statearr_17362[(10)] = inst_17297);

(statearr_17362[(11)] = inst_17299);

return statearr_17362;
})();
var statearr_17363_17397 = state_17345__$1;
(statearr_17363_17397[(2)] = null);

(statearr_17363_17397[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17346 === (17))){
var inst_17311 = (state_17345[(7)]);
var inst_17315 = cljs.core.chunk_first(inst_17311);
var inst_17316 = cljs.core.chunk_rest(inst_17311);
var inst_17317 = cljs.core.count(inst_17315);
var inst_17297 = inst_17316;
var inst_17298 = inst_17315;
var inst_17299 = inst_17317;
var inst_17300 = (0);
var state_17345__$1 = (function (){var statearr_17364 = state_17345;
(statearr_17364[(8)] = inst_17298);

(statearr_17364[(9)] = inst_17300);

(statearr_17364[(10)] = inst_17297);

(statearr_17364[(11)] = inst_17299);

return statearr_17364;
})();
var statearr_17365_17398 = state_17345__$1;
(statearr_17365_17398[(2)] = null);

(statearr_17365_17398[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17346 === (3))){
var inst_17343 = (state_17345[(2)]);
var state_17345__$1 = state_17345;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17345__$1,inst_17343);
} else {
if((state_val_17346 === (12))){
var inst_17331 = (state_17345[(2)]);
var state_17345__$1 = state_17345;
var statearr_17366_17399 = state_17345__$1;
(statearr_17366_17399[(2)] = inst_17331);

(statearr_17366_17399[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17346 === (2))){
var state_17345__$1 = state_17345;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17345__$1,(4),in$);
} else {
if((state_val_17346 === (23))){
var inst_17339 = (state_17345[(2)]);
var state_17345__$1 = state_17345;
var statearr_17367_17400 = state_17345__$1;
(statearr_17367_17400[(2)] = inst_17339);

(statearr_17367_17400[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17346 === (19))){
var inst_17326 = (state_17345[(2)]);
var state_17345__$1 = state_17345;
var statearr_17368_17401 = state_17345__$1;
(statearr_17368_17401[(2)] = inst_17326);

(statearr_17368_17401[(1)] = (16));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17346 === (11))){
var inst_17311 = (state_17345[(7)]);
var inst_17297 = (state_17345[(10)]);
var inst_17311__$1 = cljs.core.seq(inst_17297);
var state_17345__$1 = (function (){var statearr_17369 = state_17345;
(statearr_17369[(7)] = inst_17311__$1);

return statearr_17369;
})();
if(inst_17311__$1){
var statearr_17370_17402 = state_17345__$1;
(statearr_17370_17402[(1)] = (14));

} else {
var statearr_17371_17403 = state_17345__$1;
(statearr_17371_17403[(1)] = (15));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17346 === (9))){
var inst_17333 = (state_17345[(2)]);
var inst_17334 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_17345__$1 = (function (){var statearr_17372 = state_17345;
(statearr_17372[(15)] = inst_17333);

return statearr_17372;
})();
if(cljs.core.truth_(inst_17334)){
var statearr_17373_17404 = state_17345__$1;
(statearr_17373_17404[(1)] = (21));

} else {
var statearr_17374_17405 = state_17345__$1;
(statearr_17374_17405[(1)] = (22));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17346 === (5))){
var inst_17289 = cljs.core.async.close_BANG_(out);
var state_17345__$1 = state_17345;
var statearr_17375_17406 = state_17345__$1;
(statearr_17375_17406[(2)] = inst_17289);

(statearr_17375_17406[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17346 === (14))){
var inst_17311 = (state_17345[(7)]);
var inst_17313 = cljs.core.chunked_seq_QMARK_(inst_17311);
var state_17345__$1 = state_17345;
if(inst_17313){
var statearr_17376_17407 = state_17345__$1;
(statearr_17376_17407[(1)] = (17));

} else {
var statearr_17377_17408 = state_17345__$1;
(statearr_17377_17408[(1)] = (18));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17346 === (16))){
var inst_17329 = (state_17345[(2)]);
var state_17345__$1 = state_17345;
var statearr_17378_17409 = state_17345__$1;
(statearr_17378_17409[(2)] = inst_17329);

(statearr_17378_17409[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17346 === (10))){
var inst_17298 = (state_17345[(8)]);
var inst_17300 = (state_17345[(9)]);
var inst_17305 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_17298,inst_17300);
var state_17345__$1 = state_17345;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17345__$1,(13),out,inst_17305);
} else {
if((state_val_17346 === (18))){
var inst_17311 = (state_17345[(7)]);
var inst_17320 = cljs.core.first(inst_17311);
var state_17345__$1 = state_17345;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17345__$1,(20),out,inst_17320);
} else {
if((state_val_17346 === (8))){
var inst_17300 = (state_17345[(9)]);
var inst_17299 = (state_17345[(11)]);
var inst_17302 = (inst_17300 < inst_17299);
var inst_17303 = inst_17302;
var state_17345__$1 = state_17345;
if(cljs.core.truth_(inst_17303)){
var statearr_17379_17410 = state_17345__$1;
(statearr_17379_17410[(1)] = (10));

} else {
var statearr_17380_17411 = state_17345__$1;
(statearr_17380_17411[(1)] = (11));

}

return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__8570__auto__))
;
return ((function (switch__8503__auto__,c__8570__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__8504__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__8504__auto____0 = (function (){
var statearr_17384 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17384[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__8504__auto__);

(statearr_17384[(1)] = (1));

return statearr_17384;
});
var cljs$core$async$mapcat_STAR__$_state_machine__8504__auto____1 = (function (state_17345){
while(true){
var ret_value__8505__auto__ = (function (){try{while(true){
var result__8506__auto__ = switch__8503__auto__(state_17345);
if(cljs.core.keyword_identical_QMARK_(result__8506__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__8506__auto__;
}
break;
}
}catch (e17385){if((e17385 instanceof Object)){
var ex__8507__auto__ = e17385;
var statearr_17386_17412 = state_17345;
(statearr_17386_17412[(5)] = ex__8507__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_17345);

return cljs.core.cst$kw$recur;
} else {
throw e17385;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__8505__auto__,cljs.core.cst$kw$recur)){
var G__17413 = state_17345;
state_17345 = G__17413;
continue;
} else {
return ret_value__8505__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__8504__auto__ = function(state_17345){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__8504__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__8504__auto____1.call(this,state_17345);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__8504__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__8504__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__8504__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__8504__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__8504__auto__;
})()
;})(switch__8503__auto__,c__8570__auto__))
})();
var state__8572__auto__ = (function (){var statearr_17387 = (f__8571__auto__.cljs$core$IFn$_invoke$arity$0 ? f__8571__auto__.cljs$core$IFn$_invoke$arity$0() : f__8571__auto__.call(null));
(statearr_17387[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8570__auto__);

return statearr_17387;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__8572__auto__);
});})(c__8570__auto__))
);

return c__8570__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args17414 = [];
var len__5619__auto___17417 = arguments.length;
var i__5620__auto___17418 = (0);
while(true){
if((i__5620__auto___17418 < len__5619__auto___17417)){
args17414.push((arguments[i__5620__auto___17418]));

var G__17419 = (i__5620__auto___17418 + (1));
i__5620__auto___17418 = G__17419;
continue;
} else {
}
break;
}

var G__17416 = args17414.length;
switch (G__17416) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17414.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var args17421 = [];
var len__5619__auto___17424 = arguments.length;
var i__5620__auto___17425 = (0);
while(true){
if((i__5620__auto___17425 < len__5619__auto___17424)){
args17421.push((arguments[i__5620__auto___17425]));

var G__17426 = (i__5620__auto___17425 + (1));
i__5620__auto___17425 = G__17426;
continue;
} else {
}
break;
}

var G__17423 = args17421.length;
switch (G__17423) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17421.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var args17428 = [];
var len__5619__auto___17479 = arguments.length;
var i__5620__auto___17480 = (0);
while(true){
if((i__5620__auto___17480 < len__5619__auto___17479)){
args17428.push((arguments[i__5620__auto___17480]));

var G__17481 = (i__5620__auto___17480 + (1));
i__5620__auto___17480 = G__17481;
continue;
} else {
}
break;
}

var G__17430 = args17428.length;
switch (G__17430) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17428.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__8570__auto___17483 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__8570__auto___17483,out){
return (function (){
var f__8571__auto__ = (function (){var switch__8503__auto__ = ((function (c__8570__auto___17483,out){
return (function (state_17454){
var state_val_17455 = (state_17454[(1)]);
if((state_val_17455 === (7))){
var inst_17449 = (state_17454[(2)]);
var state_17454__$1 = state_17454;
var statearr_17456_17484 = state_17454__$1;
(statearr_17456_17484[(2)] = inst_17449);

(statearr_17456_17484[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17455 === (1))){
var inst_17431 = null;
var state_17454__$1 = (function (){var statearr_17457 = state_17454;
(statearr_17457[(7)] = inst_17431);

return statearr_17457;
})();
var statearr_17458_17485 = state_17454__$1;
(statearr_17458_17485[(2)] = null);

(statearr_17458_17485[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17455 === (4))){
var inst_17434 = (state_17454[(8)]);
var inst_17434__$1 = (state_17454[(2)]);
var inst_17435 = (inst_17434__$1 == null);
var inst_17436 = cljs.core.not(inst_17435);
var state_17454__$1 = (function (){var statearr_17459 = state_17454;
(statearr_17459[(8)] = inst_17434__$1);

return statearr_17459;
})();
if(inst_17436){
var statearr_17460_17486 = state_17454__$1;
(statearr_17460_17486[(1)] = (5));

} else {
var statearr_17461_17487 = state_17454__$1;
(statearr_17461_17487[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17455 === (6))){
var state_17454__$1 = state_17454;
var statearr_17462_17488 = state_17454__$1;
(statearr_17462_17488[(2)] = null);

(statearr_17462_17488[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17455 === (3))){
var inst_17451 = (state_17454[(2)]);
var inst_17452 = cljs.core.async.close_BANG_(out);
var state_17454__$1 = (function (){var statearr_17463 = state_17454;
(statearr_17463[(9)] = inst_17451);

return statearr_17463;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_17454__$1,inst_17452);
} else {
if((state_val_17455 === (2))){
var state_17454__$1 = state_17454;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17454__$1,(4),ch);
} else {
if((state_val_17455 === (11))){
var inst_17434 = (state_17454[(8)]);
var inst_17443 = (state_17454[(2)]);
var inst_17431 = inst_17434;
var state_17454__$1 = (function (){var statearr_17464 = state_17454;
(statearr_17464[(10)] = inst_17443);

(statearr_17464[(7)] = inst_17431);

return statearr_17464;
})();
var statearr_17465_17489 = state_17454__$1;
(statearr_17465_17489[(2)] = null);

(statearr_17465_17489[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17455 === (9))){
var inst_17434 = (state_17454[(8)]);
var state_17454__$1 = state_17454;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17454__$1,(11),out,inst_17434);
} else {
if((state_val_17455 === (5))){
var inst_17434 = (state_17454[(8)]);
var inst_17431 = (state_17454[(7)]);
var inst_17438 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_17434,inst_17431);
var state_17454__$1 = state_17454;
if(inst_17438){
var statearr_17467_17490 = state_17454__$1;
(statearr_17467_17490[(1)] = (8));

} else {
var statearr_17468_17491 = state_17454__$1;
(statearr_17468_17491[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17455 === (10))){
var inst_17446 = (state_17454[(2)]);
var state_17454__$1 = state_17454;
var statearr_17469_17492 = state_17454__$1;
(statearr_17469_17492[(2)] = inst_17446);

(statearr_17469_17492[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17455 === (8))){
var inst_17431 = (state_17454[(7)]);
var tmp17466 = inst_17431;
var inst_17431__$1 = tmp17466;
var state_17454__$1 = (function (){var statearr_17470 = state_17454;
(statearr_17470[(7)] = inst_17431__$1);

return statearr_17470;
})();
var statearr_17471_17493 = state_17454__$1;
(statearr_17471_17493[(2)] = null);

(statearr_17471_17493[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__8570__auto___17483,out))
;
return ((function (switch__8503__auto__,c__8570__auto___17483,out){
return (function() {
var cljs$core$async$state_machine__8504__auto__ = null;
var cljs$core$async$state_machine__8504__auto____0 = (function (){
var statearr_17475 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_17475[(0)] = cljs$core$async$state_machine__8504__auto__);

(statearr_17475[(1)] = (1));

return statearr_17475;
});
var cljs$core$async$state_machine__8504__auto____1 = (function (state_17454){
while(true){
var ret_value__8505__auto__ = (function (){try{while(true){
var result__8506__auto__ = switch__8503__auto__(state_17454);
if(cljs.core.keyword_identical_QMARK_(result__8506__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__8506__auto__;
}
break;
}
}catch (e17476){if((e17476 instanceof Object)){
var ex__8507__auto__ = e17476;
var statearr_17477_17494 = state_17454;
(statearr_17477_17494[(5)] = ex__8507__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_17454);

return cljs.core.cst$kw$recur;
} else {
throw e17476;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__8505__auto__,cljs.core.cst$kw$recur)){
var G__17495 = state_17454;
state_17454 = G__17495;
continue;
} else {
return ret_value__8505__auto__;
}
break;
}
});
cljs$core$async$state_machine__8504__auto__ = function(state_17454){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__8504__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__8504__auto____1.call(this,state_17454);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__8504__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__8504__auto____0;
cljs$core$async$state_machine__8504__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__8504__auto____1;
return cljs$core$async$state_machine__8504__auto__;
})()
;})(switch__8503__auto__,c__8570__auto___17483,out))
})();
var state__8572__auto__ = (function (){var statearr_17478 = (f__8571__auto__.cljs$core$IFn$_invoke$arity$0 ? f__8571__auto__.cljs$core$IFn$_invoke$arity$0() : f__8571__auto__.call(null));
(statearr_17478[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8570__auto___17483);

return statearr_17478;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__8572__auto__);
});})(c__8570__auto___17483,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args17496 = [];
var len__5619__auto___17566 = arguments.length;
var i__5620__auto___17567 = (0);
while(true){
if((i__5620__auto___17567 < len__5619__auto___17566)){
args17496.push((arguments[i__5620__auto___17567]));

var G__17568 = (i__5620__auto___17567 + (1));
i__5620__auto___17567 = G__17568;
continue;
} else {
}
break;
}

var G__17498 = args17496.length;
switch (G__17498) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17496.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__8570__auto___17570 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__8570__auto___17570,out){
return (function (){
var f__8571__auto__ = (function (){var switch__8503__auto__ = ((function (c__8570__auto___17570,out){
return (function (state_17536){
var state_val_17537 = (state_17536[(1)]);
if((state_val_17537 === (7))){
var inst_17532 = (state_17536[(2)]);
var state_17536__$1 = state_17536;
var statearr_17538_17571 = state_17536__$1;
(statearr_17538_17571[(2)] = inst_17532);

(statearr_17538_17571[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17537 === (1))){
var inst_17499 = (new Array(n));
var inst_17500 = inst_17499;
var inst_17501 = (0);
var state_17536__$1 = (function (){var statearr_17539 = state_17536;
(statearr_17539[(7)] = inst_17500);

(statearr_17539[(8)] = inst_17501);

return statearr_17539;
})();
var statearr_17540_17572 = state_17536__$1;
(statearr_17540_17572[(2)] = null);

(statearr_17540_17572[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17537 === (4))){
var inst_17504 = (state_17536[(9)]);
var inst_17504__$1 = (state_17536[(2)]);
var inst_17505 = (inst_17504__$1 == null);
var inst_17506 = cljs.core.not(inst_17505);
var state_17536__$1 = (function (){var statearr_17541 = state_17536;
(statearr_17541[(9)] = inst_17504__$1);

return statearr_17541;
})();
if(inst_17506){
var statearr_17542_17573 = state_17536__$1;
(statearr_17542_17573[(1)] = (5));

} else {
var statearr_17543_17574 = state_17536__$1;
(statearr_17543_17574[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17537 === (15))){
var inst_17526 = (state_17536[(2)]);
var state_17536__$1 = state_17536;
var statearr_17544_17575 = state_17536__$1;
(statearr_17544_17575[(2)] = inst_17526);

(statearr_17544_17575[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17537 === (13))){
var state_17536__$1 = state_17536;
var statearr_17545_17576 = state_17536__$1;
(statearr_17545_17576[(2)] = null);

(statearr_17545_17576[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17537 === (6))){
var inst_17501 = (state_17536[(8)]);
var inst_17522 = (inst_17501 > (0));
var state_17536__$1 = state_17536;
if(cljs.core.truth_(inst_17522)){
var statearr_17546_17577 = state_17536__$1;
(statearr_17546_17577[(1)] = (12));

} else {
var statearr_17547_17578 = state_17536__$1;
(statearr_17547_17578[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17537 === (3))){
var inst_17534 = (state_17536[(2)]);
var state_17536__$1 = state_17536;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17536__$1,inst_17534);
} else {
if((state_val_17537 === (12))){
var inst_17500 = (state_17536[(7)]);
var inst_17524 = cljs.core.vec(inst_17500);
var state_17536__$1 = state_17536;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17536__$1,(15),out,inst_17524);
} else {
if((state_val_17537 === (2))){
var state_17536__$1 = state_17536;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17536__$1,(4),ch);
} else {
if((state_val_17537 === (11))){
var inst_17516 = (state_17536[(2)]);
var inst_17517 = (new Array(n));
var inst_17500 = inst_17517;
var inst_17501 = (0);
var state_17536__$1 = (function (){var statearr_17548 = state_17536;
(statearr_17548[(10)] = inst_17516);

(statearr_17548[(7)] = inst_17500);

(statearr_17548[(8)] = inst_17501);

return statearr_17548;
})();
var statearr_17549_17579 = state_17536__$1;
(statearr_17549_17579[(2)] = null);

(statearr_17549_17579[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17537 === (9))){
var inst_17500 = (state_17536[(7)]);
var inst_17514 = cljs.core.vec(inst_17500);
var state_17536__$1 = state_17536;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17536__$1,(11),out,inst_17514);
} else {
if((state_val_17537 === (5))){
var inst_17500 = (state_17536[(7)]);
var inst_17509 = (state_17536[(11)]);
var inst_17501 = (state_17536[(8)]);
var inst_17504 = (state_17536[(9)]);
var inst_17508 = (inst_17500[inst_17501] = inst_17504);
var inst_17509__$1 = (inst_17501 + (1));
var inst_17510 = (inst_17509__$1 < n);
var state_17536__$1 = (function (){var statearr_17550 = state_17536;
(statearr_17550[(12)] = inst_17508);

(statearr_17550[(11)] = inst_17509__$1);

return statearr_17550;
})();
if(cljs.core.truth_(inst_17510)){
var statearr_17551_17580 = state_17536__$1;
(statearr_17551_17580[(1)] = (8));

} else {
var statearr_17552_17581 = state_17536__$1;
(statearr_17552_17581[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17537 === (14))){
var inst_17529 = (state_17536[(2)]);
var inst_17530 = cljs.core.async.close_BANG_(out);
var state_17536__$1 = (function (){var statearr_17554 = state_17536;
(statearr_17554[(13)] = inst_17529);

return statearr_17554;
})();
var statearr_17555_17582 = state_17536__$1;
(statearr_17555_17582[(2)] = inst_17530);

(statearr_17555_17582[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17537 === (10))){
var inst_17520 = (state_17536[(2)]);
var state_17536__$1 = state_17536;
var statearr_17556_17583 = state_17536__$1;
(statearr_17556_17583[(2)] = inst_17520);

(statearr_17556_17583[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17537 === (8))){
var inst_17500 = (state_17536[(7)]);
var inst_17509 = (state_17536[(11)]);
var tmp17553 = inst_17500;
var inst_17500__$1 = tmp17553;
var inst_17501 = inst_17509;
var state_17536__$1 = (function (){var statearr_17557 = state_17536;
(statearr_17557[(7)] = inst_17500__$1);

(statearr_17557[(8)] = inst_17501);

return statearr_17557;
})();
var statearr_17558_17584 = state_17536__$1;
(statearr_17558_17584[(2)] = null);

(statearr_17558_17584[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__8570__auto___17570,out))
;
return ((function (switch__8503__auto__,c__8570__auto___17570,out){
return (function() {
var cljs$core$async$state_machine__8504__auto__ = null;
var cljs$core$async$state_machine__8504__auto____0 = (function (){
var statearr_17562 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17562[(0)] = cljs$core$async$state_machine__8504__auto__);

(statearr_17562[(1)] = (1));

return statearr_17562;
});
var cljs$core$async$state_machine__8504__auto____1 = (function (state_17536){
while(true){
var ret_value__8505__auto__ = (function (){try{while(true){
var result__8506__auto__ = switch__8503__auto__(state_17536);
if(cljs.core.keyword_identical_QMARK_(result__8506__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__8506__auto__;
}
break;
}
}catch (e17563){if((e17563 instanceof Object)){
var ex__8507__auto__ = e17563;
var statearr_17564_17585 = state_17536;
(statearr_17564_17585[(5)] = ex__8507__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_17536);

return cljs.core.cst$kw$recur;
} else {
throw e17563;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__8505__auto__,cljs.core.cst$kw$recur)){
var G__17586 = state_17536;
state_17536 = G__17586;
continue;
} else {
return ret_value__8505__auto__;
}
break;
}
});
cljs$core$async$state_machine__8504__auto__ = function(state_17536){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__8504__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__8504__auto____1.call(this,state_17536);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__8504__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__8504__auto____0;
cljs$core$async$state_machine__8504__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__8504__auto____1;
return cljs$core$async$state_machine__8504__auto__;
})()
;})(switch__8503__auto__,c__8570__auto___17570,out))
})();
var state__8572__auto__ = (function (){var statearr_17565 = (f__8571__auto__.cljs$core$IFn$_invoke$arity$0 ? f__8571__auto__.cljs$core$IFn$_invoke$arity$0() : f__8571__auto__.call(null));
(statearr_17565[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8570__auto___17570);

return statearr_17565;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__8572__auto__);
});})(c__8570__auto___17570,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args17587 = [];
var len__5619__auto___17661 = arguments.length;
var i__5620__auto___17662 = (0);
while(true){
if((i__5620__auto___17662 < len__5619__auto___17661)){
args17587.push((arguments[i__5620__auto___17662]));

var G__17663 = (i__5620__auto___17662 + (1));
i__5620__auto___17662 = G__17663;
continue;
} else {
}
break;
}

var G__17589 = args17587.length;
switch (G__17589) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17587.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__8570__auto___17665 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__8570__auto___17665,out){
return (function (){
var f__8571__auto__ = (function (){var switch__8503__auto__ = ((function (c__8570__auto___17665,out){
return (function (state_17631){
var state_val_17632 = (state_17631[(1)]);
if((state_val_17632 === (7))){
var inst_17627 = (state_17631[(2)]);
var state_17631__$1 = state_17631;
var statearr_17633_17666 = state_17631__$1;
(statearr_17633_17666[(2)] = inst_17627);

(statearr_17633_17666[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17632 === (1))){
var inst_17590 = [];
var inst_17591 = inst_17590;
var inst_17592 = cljs.core.cst$kw$cljs$core$async_SLASH_nothing;
var state_17631__$1 = (function (){var statearr_17634 = state_17631;
(statearr_17634[(7)] = inst_17591);

(statearr_17634[(8)] = inst_17592);

return statearr_17634;
})();
var statearr_17635_17667 = state_17631__$1;
(statearr_17635_17667[(2)] = null);

(statearr_17635_17667[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17632 === (4))){
var inst_17595 = (state_17631[(9)]);
var inst_17595__$1 = (state_17631[(2)]);
var inst_17596 = (inst_17595__$1 == null);
var inst_17597 = cljs.core.not(inst_17596);
var state_17631__$1 = (function (){var statearr_17636 = state_17631;
(statearr_17636[(9)] = inst_17595__$1);

return statearr_17636;
})();
if(inst_17597){
var statearr_17637_17668 = state_17631__$1;
(statearr_17637_17668[(1)] = (5));

} else {
var statearr_17638_17669 = state_17631__$1;
(statearr_17638_17669[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17632 === (15))){
var inst_17621 = (state_17631[(2)]);
var state_17631__$1 = state_17631;
var statearr_17639_17670 = state_17631__$1;
(statearr_17639_17670[(2)] = inst_17621);

(statearr_17639_17670[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17632 === (13))){
var state_17631__$1 = state_17631;
var statearr_17640_17671 = state_17631__$1;
(statearr_17640_17671[(2)] = null);

(statearr_17640_17671[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17632 === (6))){
var inst_17591 = (state_17631[(7)]);
var inst_17616 = inst_17591.length;
var inst_17617 = (inst_17616 > (0));
var state_17631__$1 = state_17631;
if(cljs.core.truth_(inst_17617)){
var statearr_17641_17672 = state_17631__$1;
(statearr_17641_17672[(1)] = (12));

} else {
var statearr_17642_17673 = state_17631__$1;
(statearr_17642_17673[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17632 === (3))){
var inst_17629 = (state_17631[(2)]);
var state_17631__$1 = state_17631;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17631__$1,inst_17629);
} else {
if((state_val_17632 === (12))){
var inst_17591 = (state_17631[(7)]);
var inst_17619 = cljs.core.vec(inst_17591);
var state_17631__$1 = state_17631;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17631__$1,(15),out,inst_17619);
} else {
if((state_val_17632 === (2))){
var state_17631__$1 = state_17631;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17631__$1,(4),ch);
} else {
if((state_val_17632 === (11))){
var inst_17595 = (state_17631[(9)]);
var inst_17599 = (state_17631[(10)]);
var inst_17609 = (state_17631[(2)]);
var inst_17610 = [];
var inst_17611 = inst_17610.push(inst_17595);
var inst_17591 = inst_17610;
var inst_17592 = inst_17599;
var state_17631__$1 = (function (){var statearr_17643 = state_17631;
(statearr_17643[(7)] = inst_17591);

(statearr_17643[(8)] = inst_17592);

(statearr_17643[(11)] = inst_17609);

(statearr_17643[(12)] = inst_17611);

return statearr_17643;
})();
var statearr_17644_17674 = state_17631__$1;
(statearr_17644_17674[(2)] = null);

(statearr_17644_17674[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17632 === (9))){
var inst_17591 = (state_17631[(7)]);
var inst_17607 = cljs.core.vec(inst_17591);
var state_17631__$1 = state_17631;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17631__$1,(11),out,inst_17607);
} else {
if((state_val_17632 === (5))){
var inst_17592 = (state_17631[(8)]);
var inst_17595 = (state_17631[(9)]);
var inst_17599 = (state_17631[(10)]);
var inst_17599__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_17595) : f.call(null,inst_17595));
var inst_17600 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_17599__$1,inst_17592);
var inst_17601 = cljs.core.keyword_identical_QMARK_(inst_17592,cljs.core.cst$kw$cljs$core$async_SLASH_nothing);
var inst_17602 = (inst_17600) || (inst_17601);
var state_17631__$1 = (function (){var statearr_17645 = state_17631;
(statearr_17645[(10)] = inst_17599__$1);

return statearr_17645;
})();
if(cljs.core.truth_(inst_17602)){
var statearr_17646_17675 = state_17631__$1;
(statearr_17646_17675[(1)] = (8));

} else {
var statearr_17647_17676 = state_17631__$1;
(statearr_17647_17676[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17632 === (14))){
var inst_17624 = (state_17631[(2)]);
var inst_17625 = cljs.core.async.close_BANG_(out);
var state_17631__$1 = (function (){var statearr_17649 = state_17631;
(statearr_17649[(13)] = inst_17624);

return statearr_17649;
})();
var statearr_17650_17677 = state_17631__$1;
(statearr_17650_17677[(2)] = inst_17625);

(statearr_17650_17677[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17632 === (10))){
var inst_17614 = (state_17631[(2)]);
var state_17631__$1 = state_17631;
var statearr_17651_17678 = state_17631__$1;
(statearr_17651_17678[(2)] = inst_17614);

(statearr_17651_17678[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17632 === (8))){
var inst_17591 = (state_17631[(7)]);
var inst_17595 = (state_17631[(9)]);
var inst_17599 = (state_17631[(10)]);
var inst_17604 = inst_17591.push(inst_17595);
var tmp17648 = inst_17591;
var inst_17591__$1 = tmp17648;
var inst_17592 = inst_17599;
var state_17631__$1 = (function (){var statearr_17652 = state_17631;
(statearr_17652[(14)] = inst_17604);

(statearr_17652[(7)] = inst_17591__$1);

(statearr_17652[(8)] = inst_17592);

return statearr_17652;
})();
var statearr_17653_17679 = state_17631__$1;
(statearr_17653_17679[(2)] = null);

(statearr_17653_17679[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__8570__auto___17665,out))
;
return ((function (switch__8503__auto__,c__8570__auto___17665,out){
return (function() {
var cljs$core$async$state_machine__8504__auto__ = null;
var cljs$core$async$state_machine__8504__auto____0 = (function (){
var statearr_17657 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17657[(0)] = cljs$core$async$state_machine__8504__auto__);

(statearr_17657[(1)] = (1));

return statearr_17657;
});
var cljs$core$async$state_machine__8504__auto____1 = (function (state_17631){
while(true){
var ret_value__8505__auto__ = (function (){try{while(true){
var result__8506__auto__ = switch__8503__auto__(state_17631);
if(cljs.core.keyword_identical_QMARK_(result__8506__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__8506__auto__;
}
break;
}
}catch (e17658){if((e17658 instanceof Object)){
var ex__8507__auto__ = e17658;
var statearr_17659_17680 = state_17631;
(statearr_17659_17680[(5)] = ex__8507__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_17631);

return cljs.core.cst$kw$recur;
} else {
throw e17658;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__8505__auto__,cljs.core.cst$kw$recur)){
var G__17681 = state_17631;
state_17631 = G__17681;
continue;
} else {
return ret_value__8505__auto__;
}
break;
}
});
cljs$core$async$state_machine__8504__auto__ = function(state_17631){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__8504__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__8504__auto____1.call(this,state_17631);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__8504__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__8504__auto____0;
cljs$core$async$state_machine__8504__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__8504__auto____1;
return cljs$core$async$state_machine__8504__auto__;
})()
;})(switch__8503__auto__,c__8570__auto___17665,out))
})();
var state__8572__auto__ = (function (){var statearr_17660 = (f__8571__auto__.cljs$core$IFn$_invoke$arity$0 ? f__8571__auto__.cljs$core$IFn$_invoke$arity$0() : f__8571__auto__.call(null));
(statearr_17660[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8570__auto___17665);

return statearr_17660;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__8572__auto__);
});})(c__8570__auto___17665,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;
