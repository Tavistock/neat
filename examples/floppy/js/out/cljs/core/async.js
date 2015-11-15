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
var args14975 = [];
var len__5619__auto___14981 = arguments.length;
var i__5620__auto___14982 = (0);
while(true){
if((i__5620__auto___14982 < len__5619__auto___14981)){
args14975.push((arguments[i__5620__auto___14982]));

var G__14983 = (i__5620__auto___14982 + (1));
i__5620__auto___14982 = G__14983;
continue;
} else {
}
break;
}

var G__14977 = args14975.length;
switch (G__14977) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14975.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async14978 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14978 = (function (f,blockable,meta14979){
this.f = f;
this.blockable = blockable;
this.meta14979 = meta14979;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async14978.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14980,meta14979__$1){
var self__ = this;
var _14980__$1 = this;
return (new cljs.core.async.t_cljs$core$async14978(self__.f,self__.blockable,meta14979__$1));
});

cljs.core.async.t_cljs$core$async14978.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14980){
var self__ = this;
var _14980__$1 = this;
return self__.meta14979;
});

cljs.core.async.t_cljs$core$async14978.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async14978.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async14978.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async14978.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async14978.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$blockable,cljs.core.cst$sym$meta14979], null);
});

cljs.core.async.t_cljs$core$async14978.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async14978.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14978";

cljs.core.async.t_cljs$core$async14978.cljs$lang$ctorPrWriter = (function (this__5159__auto__,writer__5160__auto__,opt__5161__auto__){
return cljs.core._write(writer__5160__auto__,"cljs.core.async/t_cljs$core$async14978");
});

cljs.core.async.__GT_t_cljs$core$async14978 = (function cljs$core$async$__GT_t_cljs$core$async14978(f__$1,blockable__$1,meta14979){
return (new cljs.core.async.t_cljs$core$async14978(f__$1,blockable__$1,meta14979));
});

}

return (new cljs.core.async.t_cljs$core$async14978(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var args14987 = [];
var len__5619__auto___14990 = arguments.length;
var i__5620__auto___14991 = (0);
while(true){
if((i__5620__auto___14991 < len__5619__auto___14990)){
args14987.push((arguments[i__5620__auto___14991]));

var G__14992 = (i__5620__auto___14991 + (1));
i__5620__auto___14991 = G__14992;
continue;
} else {
}
break;
}

var G__14989 = args14987.length;
switch (G__14989) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14987.length)].join('')));

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
var args14994 = [];
var len__5619__auto___14997 = arguments.length;
var i__5620__auto___14998 = (0);
while(true){
if((i__5620__auto___14998 < len__5619__auto___14997)){
args14994.push((arguments[i__5620__auto___14998]));

var G__14999 = (i__5620__auto___14998 + (1));
i__5620__auto___14998 = G__14999;
continue;
} else {
}
break;
}

var G__14996 = args14994.length;
switch (G__14996) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14994.length)].join('')));

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
var args15001 = [];
var len__5619__auto___15004 = arguments.length;
var i__5620__auto___15005 = (0);
while(true){
if((i__5620__auto___15005 < len__5619__auto___15004)){
args15001.push((arguments[i__5620__auto___15005]));

var G__15006 = (i__5620__auto___15005 + (1));
i__5620__auto___15005 = G__15006;
continue;
} else {
}
break;
}

var G__15003 = args15001.length;
switch (G__15003) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15001.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_15008 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(ret) : cljs.core.deref.call(null,ret));
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_15008) : fn1.call(null,val_15008));
} else {
cljs.core.async.impl.dispatch.run(((function (val_15008,ret){
return (function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_15008) : fn1.call(null,val_15008));
});})(val_15008,ret))
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
var args15009 = [];
var len__5619__auto___15012 = arguments.length;
var i__5620__auto___15013 = (0);
while(true){
if((i__5620__auto___15013 < len__5619__auto___15012)){
args15009.push((arguments[i__5620__auto___15013]));

var G__15014 = (i__5620__auto___15013 + (1));
i__5620__auto___15013 = G__15014;
continue;
} else {
}
break;
}

var G__15011 = args15009.length;
switch (G__15011) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15009.length)].join('')));

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
var n__5464__auto___15016 = n;
var x_15017 = (0);
while(true){
if((x_15017 < n__5464__auto___15016)){
(a[x_15017] = (0));

var G__15018 = (x_15017 + (1));
x_15017 = G__15018;
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

var G__15019 = (i + (1));
i = G__15019;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true) : cljs.core.atom.call(null,true));
if(typeof cljs.core.async.t_cljs$core$async15023 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15023 = (function (alt_flag,flag,meta15024){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta15024 = meta15024;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async15023.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_15025,meta15024__$1){
var self__ = this;
var _15025__$1 = this;
return (new cljs.core.async.t_cljs$core$async15023(self__.alt_flag,self__.flag,meta15024__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async15023.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_15025){
var self__ = this;
var _15025__$1 = this;
return self__.meta15024;
});})(flag))
;

cljs.core.async.t_cljs$core$async15023.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async15023.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(self__.flag) : cljs.core.deref.call(null,self__.flag));
});})(flag))
;

cljs.core.async.t_cljs$core$async15023.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async15023.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(self__.flag,null) : cljs.core.reset_BANG_.call(null,self__.flag,null));

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async15023.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$alt_DASH_flag,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$private,true,cljs.core.cst$kw$arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),cljs.core.cst$sym$flag,cljs.core.cst$sym$meta15024], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async15023.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async15023.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15023";

cljs.core.async.t_cljs$core$async15023.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__5159__auto__,writer__5160__auto__,opt__5161__auto__){
return cljs.core._write(writer__5160__auto__,"cljs.core.async/t_cljs$core$async15023");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async15023 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async15023(alt_flag__$1,flag__$1,meta15024){
return (new cljs.core.async.t_cljs$core$async15023(alt_flag__$1,flag__$1,meta15024));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async15023(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async15029 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15029 = (function (alt_handler,flag,cb,meta15030){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta15030 = meta15030;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async15029.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15031,meta15030__$1){
var self__ = this;
var _15031__$1 = this;
return (new cljs.core.async.t_cljs$core$async15029(self__.alt_handler,self__.flag,self__.cb,meta15030__$1));
});

cljs.core.async.t_cljs$core$async15029.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15031){
var self__ = this;
var _15031__$1 = this;
return self__.meta15030;
});

cljs.core.async.t_cljs$core$async15029.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async15029.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
});

cljs.core.async.t_cljs$core$async15029.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async15029.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async15029.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$alt_DASH_handler,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$private,true,cljs.core.cst$kw$arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$flag,cljs.core.cst$sym$cb], null)))], null)),cljs.core.cst$sym$flag,cljs.core.cst$sym$cb,cljs.core.cst$sym$meta15030], null);
});

cljs.core.async.t_cljs$core$async15029.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async15029.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15029";

cljs.core.async.t_cljs$core$async15029.cljs$lang$ctorPrWriter = (function (this__5159__auto__,writer__5160__auto__,opt__5161__auto__){
return cljs.core._write(writer__5160__auto__,"cljs.core.async/t_cljs$core$async15029");
});

cljs.core.async.__GT_t_cljs$core$async15029 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async15029(alt_handler__$1,flag__$1,cb__$1,meta15030){
return (new cljs.core.async.t_cljs$core$async15029(alt_handler__$1,flag__$1,cb__$1,meta15030));
});

}

return (new cljs.core.async.t_cljs$core$async15029(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__15032_SHARP_){
var G__15036 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__15032_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__15036) : fret.call(null,G__15036));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__15033_SHARP_){
var G__15037 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__15033_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__15037) : fret.call(null,G__15037));
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
var G__15038 = (i + (1));
i = G__15038;
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
var len__5619__auto___15044 = arguments.length;
var i__5620__auto___15045 = (0);
while(true){
if((i__5620__auto___15045 < len__5619__auto___15044)){
args__5626__auto__.push((arguments[i__5620__auto___15045]));

var G__15046 = (i__5620__auto___15045 + (1));
i__5620__auto___15045 = G__15046;
continue;
} else {
}
break;
}

var argseq__5627__auto__ = ((((1) < args__5626__auto__.length))?(new cljs.core.IndexedSeq(args__5626__auto__.slice((1)),(0))):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5627__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__15041){
var map__15042 = p__15041;
var map__15042__$1 = ((((!((map__15042 == null)))?((((map__15042.cljs$lang$protocol_mask$partition0$ & (64))) || (map__15042.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15042):map__15042);
var opts = map__15042__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq15039){
var G__15040 = cljs.core.first(seq15039);
var seq15039__$1 = cljs.core.next(seq15039);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__15040,seq15039__$1);
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
var args15047 = [];
var len__5619__auto___15097 = arguments.length;
var i__5620__auto___15098 = (0);
while(true){
if((i__5620__auto___15098 < len__5619__auto___15097)){
args15047.push((arguments[i__5620__auto___15098]));

var G__15099 = (i__5620__auto___15098 + (1));
i__5620__auto___15098 = G__15099;
continue;
} else {
}
break;
}

var G__15049 = args15047.length;
switch (G__15049) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15047.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__8570__auto___15101 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__8570__auto___15101){
return (function (){
var f__8571__auto__ = (function (){var switch__8503__auto__ = ((function (c__8570__auto___15101){
return (function (state_15073){
var state_val_15074 = (state_15073[(1)]);
if((state_val_15074 === (7))){
var inst_15069 = (state_15073[(2)]);
var state_15073__$1 = state_15073;
var statearr_15075_15102 = state_15073__$1;
(statearr_15075_15102[(2)] = inst_15069);

(statearr_15075_15102[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15074 === (1))){
var state_15073__$1 = state_15073;
var statearr_15076_15103 = state_15073__$1;
(statearr_15076_15103[(2)] = null);

(statearr_15076_15103[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15074 === (4))){
var inst_15052 = (state_15073[(7)]);
var inst_15052__$1 = (state_15073[(2)]);
var inst_15053 = (inst_15052__$1 == null);
var state_15073__$1 = (function (){var statearr_15077 = state_15073;
(statearr_15077[(7)] = inst_15052__$1);

return statearr_15077;
})();
if(cljs.core.truth_(inst_15053)){
var statearr_15078_15104 = state_15073__$1;
(statearr_15078_15104[(1)] = (5));

} else {
var statearr_15079_15105 = state_15073__$1;
(statearr_15079_15105[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15074 === (13))){
var state_15073__$1 = state_15073;
var statearr_15080_15106 = state_15073__$1;
(statearr_15080_15106[(2)] = null);

(statearr_15080_15106[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15074 === (6))){
var inst_15052 = (state_15073[(7)]);
var state_15073__$1 = state_15073;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15073__$1,(11),to,inst_15052);
} else {
if((state_val_15074 === (3))){
var inst_15071 = (state_15073[(2)]);
var state_15073__$1 = state_15073;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15073__$1,inst_15071);
} else {
if((state_val_15074 === (12))){
var state_15073__$1 = state_15073;
var statearr_15081_15107 = state_15073__$1;
(statearr_15081_15107[(2)] = null);

(statearr_15081_15107[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15074 === (2))){
var state_15073__$1 = state_15073;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15073__$1,(4),from);
} else {
if((state_val_15074 === (11))){
var inst_15062 = (state_15073[(2)]);
var state_15073__$1 = state_15073;
if(cljs.core.truth_(inst_15062)){
var statearr_15082_15108 = state_15073__$1;
(statearr_15082_15108[(1)] = (12));

} else {
var statearr_15083_15109 = state_15073__$1;
(statearr_15083_15109[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15074 === (9))){
var state_15073__$1 = state_15073;
var statearr_15084_15110 = state_15073__$1;
(statearr_15084_15110[(2)] = null);

(statearr_15084_15110[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15074 === (5))){
var state_15073__$1 = state_15073;
if(cljs.core.truth_(close_QMARK_)){
var statearr_15085_15111 = state_15073__$1;
(statearr_15085_15111[(1)] = (8));

} else {
var statearr_15086_15112 = state_15073__$1;
(statearr_15086_15112[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15074 === (14))){
var inst_15067 = (state_15073[(2)]);
var state_15073__$1 = state_15073;
var statearr_15087_15113 = state_15073__$1;
(statearr_15087_15113[(2)] = inst_15067);

(statearr_15087_15113[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15074 === (10))){
var inst_15059 = (state_15073[(2)]);
var state_15073__$1 = state_15073;
var statearr_15088_15114 = state_15073__$1;
(statearr_15088_15114[(2)] = inst_15059);

(statearr_15088_15114[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15074 === (8))){
var inst_15056 = cljs.core.async.close_BANG_(to);
var state_15073__$1 = state_15073;
var statearr_15089_15115 = state_15073__$1;
(statearr_15089_15115[(2)] = inst_15056);

(statearr_15089_15115[(1)] = (10));


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
});})(c__8570__auto___15101))
;
return ((function (switch__8503__auto__,c__8570__auto___15101){
return (function() {
var cljs$core$async$state_machine__8504__auto__ = null;
var cljs$core$async$state_machine__8504__auto____0 = (function (){
var statearr_15093 = [null,null,null,null,null,null,null,null];
(statearr_15093[(0)] = cljs$core$async$state_machine__8504__auto__);

(statearr_15093[(1)] = (1));

return statearr_15093;
});
var cljs$core$async$state_machine__8504__auto____1 = (function (state_15073){
while(true){
var ret_value__8505__auto__ = (function (){try{while(true){
var result__8506__auto__ = switch__8503__auto__(state_15073);
if(cljs.core.keyword_identical_QMARK_(result__8506__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__8506__auto__;
}
break;
}
}catch (e15094){if((e15094 instanceof Object)){
var ex__8507__auto__ = e15094;
var statearr_15095_15116 = state_15073;
(statearr_15095_15116[(5)] = ex__8507__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_15073);

return cljs.core.cst$kw$recur;
} else {
throw e15094;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__8505__auto__,cljs.core.cst$kw$recur)){
var G__15117 = state_15073;
state_15073 = G__15117;
continue;
} else {
return ret_value__8505__auto__;
}
break;
}
});
cljs$core$async$state_machine__8504__auto__ = function(state_15073){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__8504__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__8504__auto____1.call(this,state_15073);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__8504__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__8504__auto____0;
cljs$core$async$state_machine__8504__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__8504__auto____1;
return cljs$core$async$state_machine__8504__auto__;
})()
;})(switch__8503__auto__,c__8570__auto___15101))
})();
var state__8572__auto__ = (function (){var statearr_15096 = (f__8571__auto__.cljs$core$IFn$_invoke$arity$0 ? f__8571__auto__.cljs$core$IFn$_invoke$arity$0() : f__8571__auto__.call(null));
(statearr_15096[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8570__auto___15101);

return statearr_15096;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__8572__auto__);
});})(c__8570__auto___15101))
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
return (function (p__15301){
var vec__15302 = p__15301;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15302,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15302,(1),null);
var job = vec__15302;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__8570__auto___15484 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__8570__auto___15484,res,vec__15302,v,p,job,jobs,results){
return (function (){
var f__8571__auto__ = (function (){var switch__8503__auto__ = ((function (c__8570__auto___15484,res,vec__15302,v,p,job,jobs,results){
return (function (state_15307){
var state_val_15308 = (state_15307[(1)]);
if((state_val_15308 === (1))){
var state_15307__$1 = state_15307;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15307__$1,(2),res,v);
} else {
if((state_val_15308 === (2))){
var inst_15304 = (state_15307[(2)]);
var inst_15305 = cljs.core.async.close_BANG_(res);
var state_15307__$1 = (function (){var statearr_15309 = state_15307;
(statearr_15309[(7)] = inst_15304);

return statearr_15309;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_15307__$1,inst_15305);
} else {
return null;
}
}
});})(c__8570__auto___15484,res,vec__15302,v,p,job,jobs,results))
;
return ((function (switch__8503__auto__,c__8570__auto___15484,res,vec__15302,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__8504__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__8504__auto____0 = (function (){
var statearr_15313 = [null,null,null,null,null,null,null,null];
(statearr_15313[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__8504__auto__);

(statearr_15313[(1)] = (1));

return statearr_15313;
});
var cljs$core$async$pipeline_STAR__$_state_machine__8504__auto____1 = (function (state_15307){
while(true){
var ret_value__8505__auto__ = (function (){try{while(true){
var result__8506__auto__ = switch__8503__auto__(state_15307);
if(cljs.core.keyword_identical_QMARK_(result__8506__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__8506__auto__;
}
break;
}
}catch (e15314){if((e15314 instanceof Object)){
var ex__8507__auto__ = e15314;
var statearr_15315_15485 = state_15307;
(statearr_15315_15485[(5)] = ex__8507__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_15307);

return cljs.core.cst$kw$recur;
} else {
throw e15314;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__8505__auto__,cljs.core.cst$kw$recur)){
var G__15486 = state_15307;
state_15307 = G__15486;
continue;
} else {
return ret_value__8505__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__8504__auto__ = function(state_15307){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__8504__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__8504__auto____1.call(this,state_15307);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__8504__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__8504__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__8504__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__8504__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__8504__auto__;
})()
;})(switch__8503__auto__,c__8570__auto___15484,res,vec__15302,v,p,job,jobs,results))
})();
var state__8572__auto__ = (function (){var statearr_15316 = (f__8571__auto__.cljs$core$IFn$_invoke$arity$0 ? f__8571__auto__.cljs$core$IFn$_invoke$arity$0() : f__8571__auto__.call(null));
(statearr_15316[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8570__auto___15484);

return statearr_15316;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__8572__auto__);
});})(c__8570__auto___15484,res,vec__15302,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__15317){
var vec__15318 = p__15317;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15318,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15318,(1),null);
var job = vec__15318;
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
var n__5464__auto___15487 = n;
var __15488 = (0);
while(true){
if((__15488 < n__5464__auto___15487)){
var G__15319_15489 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__15319_15489) {
case "compute":
var c__8570__auto___15491 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__15488,c__8570__auto___15491,G__15319_15489,n__5464__auto___15487,jobs,results,process,async){
return (function (){
var f__8571__auto__ = (function (){var switch__8503__auto__ = ((function (__15488,c__8570__auto___15491,G__15319_15489,n__5464__auto___15487,jobs,results,process,async){
return (function (state_15332){
var state_val_15333 = (state_15332[(1)]);
if((state_val_15333 === (1))){
var state_15332__$1 = state_15332;
var statearr_15334_15492 = state_15332__$1;
(statearr_15334_15492[(2)] = null);

(statearr_15334_15492[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15333 === (2))){
var state_15332__$1 = state_15332;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15332__$1,(4),jobs);
} else {
if((state_val_15333 === (3))){
var inst_15330 = (state_15332[(2)]);
var state_15332__$1 = state_15332;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15332__$1,inst_15330);
} else {
if((state_val_15333 === (4))){
var inst_15322 = (state_15332[(2)]);
var inst_15323 = process(inst_15322);
var state_15332__$1 = state_15332;
if(cljs.core.truth_(inst_15323)){
var statearr_15335_15493 = state_15332__$1;
(statearr_15335_15493[(1)] = (5));

} else {
var statearr_15336_15494 = state_15332__$1;
(statearr_15336_15494[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15333 === (5))){
var state_15332__$1 = state_15332;
var statearr_15337_15495 = state_15332__$1;
(statearr_15337_15495[(2)] = null);

(statearr_15337_15495[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15333 === (6))){
var state_15332__$1 = state_15332;
var statearr_15338_15496 = state_15332__$1;
(statearr_15338_15496[(2)] = null);

(statearr_15338_15496[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15333 === (7))){
var inst_15328 = (state_15332[(2)]);
var state_15332__$1 = state_15332;
var statearr_15339_15497 = state_15332__$1;
(statearr_15339_15497[(2)] = inst_15328);

(statearr_15339_15497[(1)] = (3));


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
});})(__15488,c__8570__auto___15491,G__15319_15489,n__5464__auto___15487,jobs,results,process,async))
;
return ((function (__15488,switch__8503__auto__,c__8570__auto___15491,G__15319_15489,n__5464__auto___15487,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__8504__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__8504__auto____0 = (function (){
var statearr_15343 = [null,null,null,null,null,null,null];
(statearr_15343[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__8504__auto__);

(statearr_15343[(1)] = (1));

return statearr_15343;
});
var cljs$core$async$pipeline_STAR__$_state_machine__8504__auto____1 = (function (state_15332){
while(true){
var ret_value__8505__auto__ = (function (){try{while(true){
var result__8506__auto__ = switch__8503__auto__(state_15332);
if(cljs.core.keyword_identical_QMARK_(result__8506__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__8506__auto__;
}
break;
}
}catch (e15344){if((e15344 instanceof Object)){
var ex__8507__auto__ = e15344;
var statearr_15345_15498 = state_15332;
(statearr_15345_15498[(5)] = ex__8507__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_15332);

return cljs.core.cst$kw$recur;
} else {
throw e15344;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__8505__auto__,cljs.core.cst$kw$recur)){
var G__15499 = state_15332;
state_15332 = G__15499;
continue;
} else {
return ret_value__8505__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__8504__auto__ = function(state_15332){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__8504__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__8504__auto____1.call(this,state_15332);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__8504__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__8504__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__8504__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__8504__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__8504__auto__;
})()
;})(__15488,switch__8503__auto__,c__8570__auto___15491,G__15319_15489,n__5464__auto___15487,jobs,results,process,async))
})();
var state__8572__auto__ = (function (){var statearr_15346 = (f__8571__auto__.cljs$core$IFn$_invoke$arity$0 ? f__8571__auto__.cljs$core$IFn$_invoke$arity$0() : f__8571__auto__.call(null));
(statearr_15346[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8570__auto___15491);

return statearr_15346;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__8572__auto__);
});})(__15488,c__8570__auto___15491,G__15319_15489,n__5464__auto___15487,jobs,results,process,async))
);


break;
case "async":
var c__8570__auto___15500 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__15488,c__8570__auto___15500,G__15319_15489,n__5464__auto___15487,jobs,results,process,async){
return (function (){
var f__8571__auto__ = (function (){var switch__8503__auto__ = ((function (__15488,c__8570__auto___15500,G__15319_15489,n__5464__auto___15487,jobs,results,process,async){
return (function (state_15359){
var state_val_15360 = (state_15359[(1)]);
if((state_val_15360 === (1))){
var state_15359__$1 = state_15359;
var statearr_15361_15501 = state_15359__$1;
(statearr_15361_15501[(2)] = null);

(statearr_15361_15501[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15360 === (2))){
var state_15359__$1 = state_15359;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15359__$1,(4),jobs);
} else {
if((state_val_15360 === (3))){
var inst_15357 = (state_15359[(2)]);
var state_15359__$1 = state_15359;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15359__$1,inst_15357);
} else {
if((state_val_15360 === (4))){
var inst_15349 = (state_15359[(2)]);
var inst_15350 = async(inst_15349);
var state_15359__$1 = state_15359;
if(cljs.core.truth_(inst_15350)){
var statearr_15362_15502 = state_15359__$1;
(statearr_15362_15502[(1)] = (5));

} else {
var statearr_15363_15503 = state_15359__$1;
(statearr_15363_15503[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15360 === (5))){
var state_15359__$1 = state_15359;
var statearr_15364_15504 = state_15359__$1;
(statearr_15364_15504[(2)] = null);

(statearr_15364_15504[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15360 === (6))){
var state_15359__$1 = state_15359;
var statearr_15365_15505 = state_15359__$1;
(statearr_15365_15505[(2)] = null);

(statearr_15365_15505[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15360 === (7))){
var inst_15355 = (state_15359[(2)]);
var state_15359__$1 = state_15359;
var statearr_15366_15506 = state_15359__$1;
(statearr_15366_15506[(2)] = inst_15355);

(statearr_15366_15506[(1)] = (3));


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
});})(__15488,c__8570__auto___15500,G__15319_15489,n__5464__auto___15487,jobs,results,process,async))
;
return ((function (__15488,switch__8503__auto__,c__8570__auto___15500,G__15319_15489,n__5464__auto___15487,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__8504__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__8504__auto____0 = (function (){
var statearr_15370 = [null,null,null,null,null,null,null];
(statearr_15370[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__8504__auto__);

(statearr_15370[(1)] = (1));

return statearr_15370;
});
var cljs$core$async$pipeline_STAR__$_state_machine__8504__auto____1 = (function (state_15359){
while(true){
var ret_value__8505__auto__ = (function (){try{while(true){
var result__8506__auto__ = switch__8503__auto__(state_15359);
if(cljs.core.keyword_identical_QMARK_(result__8506__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__8506__auto__;
}
break;
}
}catch (e15371){if((e15371 instanceof Object)){
var ex__8507__auto__ = e15371;
var statearr_15372_15507 = state_15359;
(statearr_15372_15507[(5)] = ex__8507__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_15359);

return cljs.core.cst$kw$recur;
} else {
throw e15371;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__8505__auto__,cljs.core.cst$kw$recur)){
var G__15508 = state_15359;
state_15359 = G__15508;
continue;
} else {
return ret_value__8505__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__8504__auto__ = function(state_15359){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__8504__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__8504__auto____1.call(this,state_15359);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__8504__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__8504__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__8504__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__8504__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__8504__auto__;
})()
;})(__15488,switch__8503__auto__,c__8570__auto___15500,G__15319_15489,n__5464__auto___15487,jobs,results,process,async))
})();
var state__8572__auto__ = (function (){var statearr_15373 = (f__8571__auto__.cljs$core$IFn$_invoke$arity$0 ? f__8571__auto__.cljs$core$IFn$_invoke$arity$0() : f__8571__auto__.call(null));
(statearr_15373[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8570__auto___15500);

return statearr_15373;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__8572__auto__);
});})(__15488,c__8570__auto___15500,G__15319_15489,n__5464__auto___15487,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__15509 = (__15488 + (1));
__15488 = G__15509;
continue;
} else {
}
break;
}

var c__8570__auto___15510 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__8570__auto___15510,jobs,results,process,async){
return (function (){
var f__8571__auto__ = (function (){var switch__8503__auto__ = ((function (c__8570__auto___15510,jobs,results,process,async){
return (function (state_15395){
var state_val_15396 = (state_15395[(1)]);
if((state_val_15396 === (1))){
var state_15395__$1 = state_15395;
var statearr_15397_15511 = state_15395__$1;
(statearr_15397_15511[(2)] = null);

(statearr_15397_15511[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15396 === (2))){
var state_15395__$1 = state_15395;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15395__$1,(4),from);
} else {
if((state_val_15396 === (3))){
var inst_15393 = (state_15395[(2)]);
var state_15395__$1 = state_15395;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15395__$1,inst_15393);
} else {
if((state_val_15396 === (4))){
var inst_15376 = (state_15395[(7)]);
var inst_15376__$1 = (state_15395[(2)]);
var inst_15377 = (inst_15376__$1 == null);
var state_15395__$1 = (function (){var statearr_15398 = state_15395;
(statearr_15398[(7)] = inst_15376__$1);

return statearr_15398;
})();
if(cljs.core.truth_(inst_15377)){
var statearr_15399_15512 = state_15395__$1;
(statearr_15399_15512[(1)] = (5));

} else {
var statearr_15400_15513 = state_15395__$1;
(statearr_15400_15513[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15396 === (5))){
var inst_15379 = cljs.core.async.close_BANG_(jobs);
var state_15395__$1 = state_15395;
var statearr_15401_15514 = state_15395__$1;
(statearr_15401_15514[(2)] = inst_15379);

(statearr_15401_15514[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15396 === (6))){
var inst_15381 = (state_15395[(8)]);
var inst_15376 = (state_15395[(7)]);
var inst_15381__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_15382 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_15383 = [inst_15376,inst_15381__$1];
var inst_15384 = (new cljs.core.PersistentVector(null,2,(5),inst_15382,inst_15383,null));
var state_15395__$1 = (function (){var statearr_15402 = state_15395;
(statearr_15402[(8)] = inst_15381__$1);

return statearr_15402;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15395__$1,(8),jobs,inst_15384);
} else {
if((state_val_15396 === (7))){
var inst_15391 = (state_15395[(2)]);
var state_15395__$1 = state_15395;
var statearr_15403_15515 = state_15395__$1;
(statearr_15403_15515[(2)] = inst_15391);

(statearr_15403_15515[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15396 === (8))){
var inst_15381 = (state_15395[(8)]);
var inst_15386 = (state_15395[(2)]);
var state_15395__$1 = (function (){var statearr_15404 = state_15395;
(statearr_15404[(9)] = inst_15386);

return statearr_15404;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15395__$1,(9),results,inst_15381);
} else {
if((state_val_15396 === (9))){
var inst_15388 = (state_15395[(2)]);
var state_15395__$1 = (function (){var statearr_15405 = state_15395;
(statearr_15405[(10)] = inst_15388);

return statearr_15405;
})();
var statearr_15406_15516 = state_15395__$1;
(statearr_15406_15516[(2)] = null);

(statearr_15406_15516[(1)] = (2));


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
});})(c__8570__auto___15510,jobs,results,process,async))
;
return ((function (switch__8503__auto__,c__8570__auto___15510,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__8504__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__8504__auto____0 = (function (){
var statearr_15410 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_15410[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__8504__auto__);

(statearr_15410[(1)] = (1));

return statearr_15410;
});
var cljs$core$async$pipeline_STAR__$_state_machine__8504__auto____1 = (function (state_15395){
while(true){
var ret_value__8505__auto__ = (function (){try{while(true){
var result__8506__auto__ = switch__8503__auto__(state_15395);
if(cljs.core.keyword_identical_QMARK_(result__8506__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__8506__auto__;
}
break;
}
}catch (e15411){if((e15411 instanceof Object)){
var ex__8507__auto__ = e15411;
var statearr_15412_15517 = state_15395;
(statearr_15412_15517[(5)] = ex__8507__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_15395);

return cljs.core.cst$kw$recur;
} else {
throw e15411;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__8505__auto__,cljs.core.cst$kw$recur)){
var G__15518 = state_15395;
state_15395 = G__15518;
continue;
} else {
return ret_value__8505__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__8504__auto__ = function(state_15395){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__8504__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__8504__auto____1.call(this,state_15395);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__8504__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__8504__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__8504__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__8504__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__8504__auto__;
})()
;})(switch__8503__auto__,c__8570__auto___15510,jobs,results,process,async))
})();
var state__8572__auto__ = (function (){var statearr_15413 = (f__8571__auto__.cljs$core$IFn$_invoke$arity$0 ? f__8571__auto__.cljs$core$IFn$_invoke$arity$0() : f__8571__auto__.call(null));
(statearr_15413[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8570__auto___15510);

return statearr_15413;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__8572__auto__);
});})(c__8570__auto___15510,jobs,results,process,async))
);


var c__8570__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__8570__auto__,jobs,results,process,async){
return (function (){
var f__8571__auto__ = (function (){var switch__8503__auto__ = ((function (c__8570__auto__,jobs,results,process,async){
return (function (state_15451){
var state_val_15452 = (state_15451[(1)]);
if((state_val_15452 === (7))){
var inst_15447 = (state_15451[(2)]);
var state_15451__$1 = state_15451;
var statearr_15453_15519 = state_15451__$1;
(statearr_15453_15519[(2)] = inst_15447);

(statearr_15453_15519[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15452 === (20))){
var state_15451__$1 = state_15451;
var statearr_15454_15520 = state_15451__$1;
(statearr_15454_15520[(2)] = null);

(statearr_15454_15520[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15452 === (1))){
var state_15451__$1 = state_15451;
var statearr_15455_15521 = state_15451__$1;
(statearr_15455_15521[(2)] = null);

(statearr_15455_15521[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15452 === (4))){
var inst_15416 = (state_15451[(7)]);
var inst_15416__$1 = (state_15451[(2)]);
var inst_15417 = (inst_15416__$1 == null);
var state_15451__$1 = (function (){var statearr_15456 = state_15451;
(statearr_15456[(7)] = inst_15416__$1);

return statearr_15456;
})();
if(cljs.core.truth_(inst_15417)){
var statearr_15457_15522 = state_15451__$1;
(statearr_15457_15522[(1)] = (5));

} else {
var statearr_15458_15523 = state_15451__$1;
(statearr_15458_15523[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15452 === (15))){
var inst_15429 = (state_15451[(8)]);
var state_15451__$1 = state_15451;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15451__$1,(18),to,inst_15429);
} else {
if((state_val_15452 === (21))){
var inst_15442 = (state_15451[(2)]);
var state_15451__$1 = state_15451;
var statearr_15459_15524 = state_15451__$1;
(statearr_15459_15524[(2)] = inst_15442);

(statearr_15459_15524[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15452 === (13))){
var inst_15444 = (state_15451[(2)]);
var state_15451__$1 = (function (){var statearr_15460 = state_15451;
(statearr_15460[(9)] = inst_15444);

return statearr_15460;
})();
var statearr_15461_15525 = state_15451__$1;
(statearr_15461_15525[(2)] = null);

(statearr_15461_15525[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15452 === (6))){
var inst_15416 = (state_15451[(7)]);
var state_15451__$1 = state_15451;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15451__$1,(11),inst_15416);
} else {
if((state_val_15452 === (17))){
var inst_15437 = (state_15451[(2)]);
var state_15451__$1 = state_15451;
if(cljs.core.truth_(inst_15437)){
var statearr_15462_15526 = state_15451__$1;
(statearr_15462_15526[(1)] = (19));

} else {
var statearr_15463_15527 = state_15451__$1;
(statearr_15463_15527[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15452 === (3))){
var inst_15449 = (state_15451[(2)]);
var state_15451__$1 = state_15451;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15451__$1,inst_15449);
} else {
if((state_val_15452 === (12))){
var inst_15426 = (state_15451[(10)]);
var state_15451__$1 = state_15451;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15451__$1,(14),inst_15426);
} else {
if((state_val_15452 === (2))){
var state_15451__$1 = state_15451;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15451__$1,(4),results);
} else {
if((state_val_15452 === (19))){
var state_15451__$1 = state_15451;
var statearr_15464_15528 = state_15451__$1;
(statearr_15464_15528[(2)] = null);

(statearr_15464_15528[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15452 === (11))){
var inst_15426 = (state_15451[(2)]);
var state_15451__$1 = (function (){var statearr_15465 = state_15451;
(statearr_15465[(10)] = inst_15426);

return statearr_15465;
})();
var statearr_15466_15529 = state_15451__$1;
(statearr_15466_15529[(2)] = null);

(statearr_15466_15529[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15452 === (9))){
var state_15451__$1 = state_15451;
var statearr_15467_15530 = state_15451__$1;
(statearr_15467_15530[(2)] = null);

(statearr_15467_15530[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15452 === (5))){
var state_15451__$1 = state_15451;
if(cljs.core.truth_(close_QMARK_)){
var statearr_15468_15531 = state_15451__$1;
(statearr_15468_15531[(1)] = (8));

} else {
var statearr_15469_15532 = state_15451__$1;
(statearr_15469_15532[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15452 === (14))){
var inst_15429 = (state_15451[(8)]);
var inst_15431 = (state_15451[(11)]);
var inst_15429__$1 = (state_15451[(2)]);
var inst_15430 = (inst_15429__$1 == null);
var inst_15431__$1 = cljs.core.not(inst_15430);
var state_15451__$1 = (function (){var statearr_15470 = state_15451;
(statearr_15470[(8)] = inst_15429__$1);

(statearr_15470[(11)] = inst_15431__$1);

return statearr_15470;
})();
if(inst_15431__$1){
var statearr_15471_15533 = state_15451__$1;
(statearr_15471_15533[(1)] = (15));

} else {
var statearr_15472_15534 = state_15451__$1;
(statearr_15472_15534[(1)] = (16));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15452 === (16))){
var inst_15431 = (state_15451[(11)]);
var state_15451__$1 = state_15451;
var statearr_15473_15535 = state_15451__$1;
(statearr_15473_15535[(2)] = inst_15431);

(statearr_15473_15535[(1)] = (17));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15452 === (10))){
var inst_15423 = (state_15451[(2)]);
var state_15451__$1 = state_15451;
var statearr_15474_15536 = state_15451__$1;
(statearr_15474_15536[(2)] = inst_15423);

(statearr_15474_15536[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15452 === (18))){
var inst_15434 = (state_15451[(2)]);
var state_15451__$1 = state_15451;
var statearr_15475_15537 = state_15451__$1;
(statearr_15475_15537[(2)] = inst_15434);

(statearr_15475_15537[(1)] = (17));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15452 === (8))){
var inst_15420 = cljs.core.async.close_BANG_(to);
var state_15451__$1 = state_15451;
var statearr_15476_15538 = state_15451__$1;
(statearr_15476_15538[(2)] = inst_15420);

(statearr_15476_15538[(1)] = (10));


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
var statearr_15480 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15480[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__8504__auto__);

(statearr_15480[(1)] = (1));

return statearr_15480;
});
var cljs$core$async$pipeline_STAR__$_state_machine__8504__auto____1 = (function (state_15451){
while(true){
var ret_value__8505__auto__ = (function (){try{while(true){
var result__8506__auto__ = switch__8503__auto__(state_15451);
if(cljs.core.keyword_identical_QMARK_(result__8506__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__8506__auto__;
}
break;
}
}catch (e15481){if((e15481 instanceof Object)){
var ex__8507__auto__ = e15481;
var statearr_15482_15539 = state_15451;
(statearr_15482_15539[(5)] = ex__8507__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_15451);

return cljs.core.cst$kw$recur;
} else {
throw e15481;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__8505__auto__,cljs.core.cst$kw$recur)){
var G__15540 = state_15451;
state_15451 = G__15540;
continue;
} else {
return ret_value__8505__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__8504__auto__ = function(state_15451){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__8504__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__8504__auto____1.call(this,state_15451);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__8504__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__8504__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__8504__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__8504__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__8504__auto__;
})()
;})(switch__8503__auto__,c__8570__auto__,jobs,results,process,async))
})();
var state__8572__auto__ = (function (){var statearr_15483 = (f__8571__auto__.cljs$core$IFn$_invoke$arity$0 ? f__8571__auto__.cljs$core$IFn$_invoke$arity$0() : f__8571__auto__.call(null));
(statearr_15483[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8570__auto__);

return statearr_15483;
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
var args15541 = [];
var len__5619__auto___15544 = arguments.length;
var i__5620__auto___15545 = (0);
while(true){
if((i__5620__auto___15545 < len__5619__auto___15544)){
args15541.push((arguments[i__5620__auto___15545]));

var G__15546 = (i__5620__auto___15545 + (1));
i__5620__auto___15545 = G__15546;
continue;
} else {
}
break;
}

var G__15543 = args15541.length;
switch (G__15543) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15541.length)].join('')));

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
var args15548 = [];
var len__5619__auto___15551 = arguments.length;
var i__5620__auto___15552 = (0);
while(true){
if((i__5620__auto___15552 < len__5619__auto___15551)){
args15548.push((arguments[i__5620__auto___15552]));

var G__15553 = (i__5620__auto___15552 + (1));
i__5620__auto___15552 = G__15553;
continue;
} else {
}
break;
}

var G__15550 = args15548.length;
switch (G__15550) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15548.length)].join('')));

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
var args15555 = [];
var len__5619__auto___15608 = arguments.length;
var i__5620__auto___15609 = (0);
while(true){
if((i__5620__auto___15609 < len__5619__auto___15608)){
args15555.push((arguments[i__5620__auto___15609]));

var G__15610 = (i__5620__auto___15609 + (1));
i__5620__auto___15609 = G__15610;
continue;
} else {
}
break;
}

var G__15557 = args15555.length;
switch (G__15557) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15555.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__8570__auto___15612 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__8570__auto___15612,tc,fc){
return (function (){
var f__8571__auto__ = (function (){var switch__8503__auto__ = ((function (c__8570__auto___15612,tc,fc){
return (function (state_15583){
var state_val_15584 = (state_15583[(1)]);
if((state_val_15584 === (7))){
var inst_15579 = (state_15583[(2)]);
var state_15583__$1 = state_15583;
var statearr_15585_15613 = state_15583__$1;
(statearr_15585_15613[(2)] = inst_15579);

(statearr_15585_15613[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15584 === (1))){
var state_15583__$1 = state_15583;
var statearr_15586_15614 = state_15583__$1;
(statearr_15586_15614[(2)] = null);

(statearr_15586_15614[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15584 === (4))){
var inst_15560 = (state_15583[(7)]);
var inst_15560__$1 = (state_15583[(2)]);
var inst_15561 = (inst_15560__$1 == null);
var state_15583__$1 = (function (){var statearr_15587 = state_15583;
(statearr_15587[(7)] = inst_15560__$1);

return statearr_15587;
})();
if(cljs.core.truth_(inst_15561)){
var statearr_15588_15615 = state_15583__$1;
(statearr_15588_15615[(1)] = (5));

} else {
var statearr_15589_15616 = state_15583__$1;
(statearr_15589_15616[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15584 === (13))){
var state_15583__$1 = state_15583;
var statearr_15590_15617 = state_15583__$1;
(statearr_15590_15617[(2)] = null);

(statearr_15590_15617[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15584 === (6))){
var inst_15560 = (state_15583[(7)]);
var inst_15566 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_15560) : p.call(null,inst_15560));
var state_15583__$1 = state_15583;
if(cljs.core.truth_(inst_15566)){
var statearr_15591_15618 = state_15583__$1;
(statearr_15591_15618[(1)] = (9));

} else {
var statearr_15592_15619 = state_15583__$1;
(statearr_15592_15619[(1)] = (10));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15584 === (3))){
var inst_15581 = (state_15583[(2)]);
var state_15583__$1 = state_15583;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15583__$1,inst_15581);
} else {
if((state_val_15584 === (12))){
var state_15583__$1 = state_15583;
var statearr_15593_15620 = state_15583__$1;
(statearr_15593_15620[(2)] = null);

(statearr_15593_15620[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15584 === (2))){
var state_15583__$1 = state_15583;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15583__$1,(4),ch);
} else {
if((state_val_15584 === (11))){
var inst_15560 = (state_15583[(7)]);
var inst_15570 = (state_15583[(2)]);
var state_15583__$1 = state_15583;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15583__$1,(8),inst_15570,inst_15560);
} else {
if((state_val_15584 === (9))){
var state_15583__$1 = state_15583;
var statearr_15594_15621 = state_15583__$1;
(statearr_15594_15621[(2)] = tc);

(statearr_15594_15621[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15584 === (5))){
var inst_15563 = cljs.core.async.close_BANG_(tc);
var inst_15564 = cljs.core.async.close_BANG_(fc);
var state_15583__$1 = (function (){var statearr_15595 = state_15583;
(statearr_15595[(8)] = inst_15563);

return statearr_15595;
})();
var statearr_15596_15622 = state_15583__$1;
(statearr_15596_15622[(2)] = inst_15564);

(statearr_15596_15622[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15584 === (14))){
var inst_15577 = (state_15583[(2)]);
var state_15583__$1 = state_15583;
var statearr_15597_15623 = state_15583__$1;
(statearr_15597_15623[(2)] = inst_15577);

(statearr_15597_15623[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15584 === (10))){
var state_15583__$1 = state_15583;
var statearr_15598_15624 = state_15583__$1;
(statearr_15598_15624[(2)] = fc);

(statearr_15598_15624[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15584 === (8))){
var inst_15572 = (state_15583[(2)]);
var state_15583__$1 = state_15583;
if(cljs.core.truth_(inst_15572)){
var statearr_15599_15625 = state_15583__$1;
(statearr_15599_15625[(1)] = (12));

} else {
var statearr_15600_15626 = state_15583__$1;
(statearr_15600_15626[(1)] = (13));

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
});})(c__8570__auto___15612,tc,fc))
;
return ((function (switch__8503__auto__,c__8570__auto___15612,tc,fc){
return (function() {
var cljs$core$async$state_machine__8504__auto__ = null;
var cljs$core$async$state_machine__8504__auto____0 = (function (){
var statearr_15604 = [null,null,null,null,null,null,null,null,null];
(statearr_15604[(0)] = cljs$core$async$state_machine__8504__auto__);

(statearr_15604[(1)] = (1));

return statearr_15604;
});
var cljs$core$async$state_machine__8504__auto____1 = (function (state_15583){
while(true){
var ret_value__8505__auto__ = (function (){try{while(true){
var result__8506__auto__ = switch__8503__auto__(state_15583);
if(cljs.core.keyword_identical_QMARK_(result__8506__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__8506__auto__;
}
break;
}
}catch (e15605){if((e15605 instanceof Object)){
var ex__8507__auto__ = e15605;
var statearr_15606_15627 = state_15583;
(statearr_15606_15627[(5)] = ex__8507__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_15583);

return cljs.core.cst$kw$recur;
} else {
throw e15605;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__8505__auto__,cljs.core.cst$kw$recur)){
var G__15628 = state_15583;
state_15583 = G__15628;
continue;
} else {
return ret_value__8505__auto__;
}
break;
}
});
cljs$core$async$state_machine__8504__auto__ = function(state_15583){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__8504__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__8504__auto____1.call(this,state_15583);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__8504__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__8504__auto____0;
cljs$core$async$state_machine__8504__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__8504__auto____1;
return cljs$core$async$state_machine__8504__auto__;
})()
;})(switch__8503__auto__,c__8570__auto___15612,tc,fc))
})();
var state__8572__auto__ = (function (){var statearr_15607 = (f__8571__auto__.cljs$core$IFn$_invoke$arity$0 ? f__8571__auto__.cljs$core$IFn$_invoke$arity$0() : f__8571__auto__.call(null));
(statearr_15607[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8570__auto___15612);

return statearr_15607;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__8572__auto__);
});})(c__8570__auto___15612,tc,fc))
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
return (function (state_15692){
var state_val_15693 = (state_15692[(1)]);
if((state_val_15693 === (7))){
var inst_15688 = (state_15692[(2)]);
var state_15692__$1 = state_15692;
var statearr_15694_15715 = state_15692__$1;
(statearr_15694_15715[(2)] = inst_15688);

(statearr_15694_15715[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15693 === (1))){
var inst_15672 = init;
var state_15692__$1 = (function (){var statearr_15695 = state_15692;
(statearr_15695[(7)] = inst_15672);

return statearr_15695;
})();
var statearr_15696_15716 = state_15692__$1;
(statearr_15696_15716[(2)] = null);

(statearr_15696_15716[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15693 === (4))){
var inst_15675 = (state_15692[(8)]);
var inst_15675__$1 = (state_15692[(2)]);
var inst_15676 = (inst_15675__$1 == null);
var state_15692__$1 = (function (){var statearr_15697 = state_15692;
(statearr_15697[(8)] = inst_15675__$1);

return statearr_15697;
})();
if(cljs.core.truth_(inst_15676)){
var statearr_15698_15717 = state_15692__$1;
(statearr_15698_15717[(1)] = (5));

} else {
var statearr_15699_15718 = state_15692__$1;
(statearr_15699_15718[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15693 === (6))){
var inst_15675 = (state_15692[(8)]);
var inst_15679 = (state_15692[(9)]);
var inst_15672 = (state_15692[(7)]);
var inst_15679__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_15672,inst_15675) : f.call(null,inst_15672,inst_15675));
var inst_15680 = cljs.core.reduced_QMARK_(inst_15679__$1);
var state_15692__$1 = (function (){var statearr_15700 = state_15692;
(statearr_15700[(9)] = inst_15679__$1);

return statearr_15700;
})();
if(inst_15680){
var statearr_15701_15719 = state_15692__$1;
(statearr_15701_15719[(1)] = (8));

} else {
var statearr_15702_15720 = state_15692__$1;
(statearr_15702_15720[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15693 === (3))){
var inst_15690 = (state_15692[(2)]);
var state_15692__$1 = state_15692;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15692__$1,inst_15690);
} else {
if((state_val_15693 === (2))){
var state_15692__$1 = state_15692;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15692__$1,(4),ch);
} else {
if((state_val_15693 === (9))){
var inst_15679 = (state_15692[(9)]);
var inst_15672 = inst_15679;
var state_15692__$1 = (function (){var statearr_15703 = state_15692;
(statearr_15703[(7)] = inst_15672);

return statearr_15703;
})();
var statearr_15704_15721 = state_15692__$1;
(statearr_15704_15721[(2)] = null);

(statearr_15704_15721[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15693 === (5))){
var inst_15672 = (state_15692[(7)]);
var state_15692__$1 = state_15692;
var statearr_15705_15722 = state_15692__$1;
(statearr_15705_15722[(2)] = inst_15672);

(statearr_15705_15722[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15693 === (10))){
var inst_15686 = (state_15692[(2)]);
var state_15692__$1 = state_15692;
var statearr_15706_15723 = state_15692__$1;
(statearr_15706_15723[(2)] = inst_15686);

(statearr_15706_15723[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15693 === (8))){
var inst_15679 = (state_15692[(9)]);
var inst_15682 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(inst_15679) : cljs.core.deref.call(null,inst_15679));
var state_15692__$1 = state_15692;
var statearr_15707_15724 = state_15692__$1;
(statearr_15707_15724[(2)] = inst_15682);

(statearr_15707_15724[(1)] = (10));


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
var statearr_15711 = [null,null,null,null,null,null,null,null,null,null];
(statearr_15711[(0)] = cljs$core$async$reduce_$_state_machine__8504__auto__);

(statearr_15711[(1)] = (1));

return statearr_15711;
});
var cljs$core$async$reduce_$_state_machine__8504__auto____1 = (function (state_15692){
while(true){
var ret_value__8505__auto__ = (function (){try{while(true){
var result__8506__auto__ = switch__8503__auto__(state_15692);
if(cljs.core.keyword_identical_QMARK_(result__8506__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__8506__auto__;
}
break;
}
}catch (e15712){if((e15712 instanceof Object)){
var ex__8507__auto__ = e15712;
var statearr_15713_15725 = state_15692;
(statearr_15713_15725[(5)] = ex__8507__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_15692);

return cljs.core.cst$kw$recur;
} else {
throw e15712;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__8505__auto__,cljs.core.cst$kw$recur)){
var G__15726 = state_15692;
state_15692 = G__15726;
continue;
} else {
return ret_value__8505__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__8504__auto__ = function(state_15692){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__8504__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__8504__auto____1.call(this,state_15692);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__8504__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__8504__auto____0;
cljs$core$async$reduce_$_state_machine__8504__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__8504__auto____1;
return cljs$core$async$reduce_$_state_machine__8504__auto__;
})()
;})(switch__8503__auto__,c__8570__auto__))
})();
var state__8572__auto__ = (function (){var statearr_15714 = (f__8571__auto__.cljs$core$IFn$_invoke$arity$0 ? f__8571__auto__.cljs$core$IFn$_invoke$arity$0() : f__8571__auto__.call(null));
(statearr_15714[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8570__auto__);

return statearr_15714;
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
var args15727 = [];
var len__5619__auto___15779 = arguments.length;
var i__5620__auto___15780 = (0);
while(true){
if((i__5620__auto___15780 < len__5619__auto___15779)){
args15727.push((arguments[i__5620__auto___15780]));

var G__15781 = (i__5620__auto___15780 + (1));
i__5620__auto___15780 = G__15781;
continue;
} else {
}
break;
}

var G__15729 = args15727.length;
switch (G__15729) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15727.length)].join('')));

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
return (function (state_15754){
var state_val_15755 = (state_15754[(1)]);
if((state_val_15755 === (7))){
var inst_15736 = (state_15754[(2)]);
var state_15754__$1 = state_15754;
var statearr_15756_15783 = state_15754__$1;
(statearr_15756_15783[(2)] = inst_15736);

(statearr_15756_15783[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15755 === (1))){
var inst_15730 = cljs.core.seq(coll);
var inst_15731 = inst_15730;
var state_15754__$1 = (function (){var statearr_15757 = state_15754;
(statearr_15757[(7)] = inst_15731);

return statearr_15757;
})();
var statearr_15758_15784 = state_15754__$1;
(statearr_15758_15784[(2)] = null);

(statearr_15758_15784[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15755 === (4))){
var inst_15731 = (state_15754[(7)]);
var inst_15734 = cljs.core.first(inst_15731);
var state_15754__$1 = state_15754;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15754__$1,(7),ch,inst_15734);
} else {
if((state_val_15755 === (13))){
var inst_15748 = (state_15754[(2)]);
var state_15754__$1 = state_15754;
var statearr_15759_15785 = state_15754__$1;
(statearr_15759_15785[(2)] = inst_15748);

(statearr_15759_15785[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15755 === (6))){
var inst_15739 = (state_15754[(2)]);
var state_15754__$1 = state_15754;
if(cljs.core.truth_(inst_15739)){
var statearr_15760_15786 = state_15754__$1;
(statearr_15760_15786[(1)] = (8));

} else {
var statearr_15761_15787 = state_15754__$1;
(statearr_15761_15787[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15755 === (3))){
var inst_15752 = (state_15754[(2)]);
var state_15754__$1 = state_15754;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15754__$1,inst_15752);
} else {
if((state_val_15755 === (12))){
var state_15754__$1 = state_15754;
var statearr_15762_15788 = state_15754__$1;
(statearr_15762_15788[(2)] = null);

(statearr_15762_15788[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15755 === (2))){
var inst_15731 = (state_15754[(7)]);
var state_15754__$1 = state_15754;
if(cljs.core.truth_(inst_15731)){
var statearr_15763_15789 = state_15754__$1;
(statearr_15763_15789[(1)] = (4));

} else {
var statearr_15764_15790 = state_15754__$1;
(statearr_15764_15790[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15755 === (11))){
var inst_15745 = cljs.core.async.close_BANG_(ch);
var state_15754__$1 = state_15754;
var statearr_15765_15791 = state_15754__$1;
(statearr_15765_15791[(2)] = inst_15745);

(statearr_15765_15791[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15755 === (9))){
var state_15754__$1 = state_15754;
if(cljs.core.truth_(close_QMARK_)){
var statearr_15766_15792 = state_15754__$1;
(statearr_15766_15792[(1)] = (11));

} else {
var statearr_15767_15793 = state_15754__$1;
(statearr_15767_15793[(1)] = (12));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15755 === (5))){
var inst_15731 = (state_15754[(7)]);
var state_15754__$1 = state_15754;
var statearr_15768_15794 = state_15754__$1;
(statearr_15768_15794[(2)] = inst_15731);

(statearr_15768_15794[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15755 === (10))){
var inst_15750 = (state_15754[(2)]);
var state_15754__$1 = state_15754;
var statearr_15769_15795 = state_15754__$1;
(statearr_15769_15795[(2)] = inst_15750);

(statearr_15769_15795[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15755 === (8))){
var inst_15731 = (state_15754[(7)]);
var inst_15741 = cljs.core.next(inst_15731);
var inst_15731__$1 = inst_15741;
var state_15754__$1 = (function (){var statearr_15770 = state_15754;
(statearr_15770[(7)] = inst_15731__$1);

return statearr_15770;
})();
var statearr_15771_15796 = state_15754__$1;
(statearr_15771_15796[(2)] = null);

(statearr_15771_15796[(1)] = (2));


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
var statearr_15775 = [null,null,null,null,null,null,null,null];
(statearr_15775[(0)] = cljs$core$async$state_machine__8504__auto__);

(statearr_15775[(1)] = (1));

return statearr_15775;
});
var cljs$core$async$state_machine__8504__auto____1 = (function (state_15754){
while(true){
var ret_value__8505__auto__ = (function (){try{while(true){
var result__8506__auto__ = switch__8503__auto__(state_15754);
if(cljs.core.keyword_identical_QMARK_(result__8506__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__8506__auto__;
}
break;
}
}catch (e15776){if((e15776 instanceof Object)){
var ex__8507__auto__ = e15776;
var statearr_15777_15797 = state_15754;
(statearr_15777_15797[(5)] = ex__8507__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_15754);

return cljs.core.cst$kw$recur;
} else {
throw e15776;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__8505__auto__,cljs.core.cst$kw$recur)){
var G__15798 = state_15754;
state_15754 = G__15798;
continue;
} else {
return ret_value__8505__auto__;
}
break;
}
});
cljs$core$async$state_machine__8504__auto__ = function(state_15754){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__8504__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__8504__auto____1.call(this,state_15754);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__8504__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__8504__auto____0;
cljs$core$async$state_machine__8504__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__8504__auto____1;
return cljs$core$async$state_machine__8504__auto__;
})()
;})(switch__8503__auto__,c__8570__auto__))
})();
var state__8572__auto__ = (function (){var statearr_15778 = (f__8571__auto__.cljs$core$IFn$_invoke$arity$0 ? f__8571__auto__.cljs$core$IFn$_invoke$arity$0() : f__8571__auto__.call(null));
(statearr_15778[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8570__auto__);

return statearr_15778;
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
var cs = (function (){var G__16023 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__16023) : cljs.core.atom.call(null,G__16023));
})();
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async16024 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16024 = (function (mult,ch,cs,meta16025){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta16025 = meta16025;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async16024.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_16026,meta16025__$1){
var self__ = this;
var _16026__$1 = this;
return (new cljs.core.async.t_cljs$core$async16024(self__.mult,self__.ch,self__.cs,meta16025__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async16024.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_16026){
var self__ = this;
var _16026__$1 = this;
return self__.meta16025;
});})(cs))
;

cljs.core.async.t_cljs$core$async16024.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async16024.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async16024.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async16024.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async16024.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async16024.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__16027_16247 = self__.cs;
var G__16028_16248 = cljs.core.PersistentArrayMap.EMPTY;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__16027_16247,G__16028_16248) : cljs.core.reset_BANG_.call(null,G__16027_16247,G__16028_16248));

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async16024.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$mult,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$ch], null))),cljs.core.cst$kw$doc,"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),cljs.core.cst$sym$ch,cljs.core.cst$sym$cs,cljs.core.cst$sym$meta16025], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async16024.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async16024.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16024";

cljs.core.async.t_cljs$core$async16024.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__5159__auto__,writer__5160__auto__,opt__5161__auto__){
return cljs.core._write(writer__5160__auto__,"cljs.core.async/t_cljs$core$async16024");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async16024 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async16024(mult__$1,ch__$1,cs__$1,meta16025){
return (new cljs.core.async.t_cljs$core$async16024(mult__$1,ch__$1,cs__$1,meta16025));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async16024(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__8570__auto___16249 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__8570__auto___16249,cs,m,dchan,dctr,done){
return (function (){
var f__8571__auto__ = (function (){var switch__8503__auto__ = ((function (c__8570__auto___16249,cs,m,dchan,dctr,done){
return (function (state_16159){
var state_val_16160 = (state_16159[(1)]);
if((state_val_16160 === (7))){
var inst_16155 = (state_16159[(2)]);
var state_16159__$1 = state_16159;
var statearr_16161_16250 = state_16159__$1;
(statearr_16161_16250[(2)] = inst_16155);

(statearr_16161_16250[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16160 === (20))){
var inst_16060 = (state_16159[(7)]);
var inst_16070 = cljs.core.first(inst_16060);
var inst_16071 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16070,(0),null);
var inst_16072 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16070,(1),null);
var state_16159__$1 = (function (){var statearr_16162 = state_16159;
(statearr_16162[(8)] = inst_16071);

return statearr_16162;
})();
if(cljs.core.truth_(inst_16072)){
var statearr_16163_16251 = state_16159__$1;
(statearr_16163_16251[(1)] = (22));

} else {
var statearr_16164_16252 = state_16159__$1;
(statearr_16164_16252[(1)] = (23));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16160 === (27))){
var inst_16102 = (state_16159[(9)]);
var inst_16100 = (state_16159[(10)]);
var inst_16031 = (state_16159[(11)]);
var inst_16107 = (state_16159[(12)]);
var inst_16107__$1 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_16100,inst_16102);
var inst_16108 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_16107__$1,inst_16031,done);
var state_16159__$1 = (function (){var statearr_16165 = state_16159;
(statearr_16165[(12)] = inst_16107__$1);

return statearr_16165;
})();
if(cljs.core.truth_(inst_16108)){
var statearr_16166_16253 = state_16159__$1;
(statearr_16166_16253[(1)] = (30));

} else {
var statearr_16167_16254 = state_16159__$1;
(statearr_16167_16254[(1)] = (31));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16160 === (1))){
var state_16159__$1 = state_16159;
var statearr_16168_16255 = state_16159__$1;
(statearr_16168_16255[(2)] = null);

(statearr_16168_16255[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16160 === (24))){
var inst_16060 = (state_16159[(7)]);
var inst_16077 = (state_16159[(2)]);
var inst_16078 = cljs.core.next(inst_16060);
var inst_16040 = inst_16078;
var inst_16041 = null;
var inst_16042 = (0);
var inst_16043 = (0);
var state_16159__$1 = (function (){var statearr_16169 = state_16159;
(statearr_16169[(13)] = inst_16077);

(statearr_16169[(14)] = inst_16043);

(statearr_16169[(15)] = inst_16042);

(statearr_16169[(16)] = inst_16041);

(statearr_16169[(17)] = inst_16040);

return statearr_16169;
})();
var statearr_16170_16256 = state_16159__$1;
(statearr_16170_16256[(2)] = null);

(statearr_16170_16256[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16160 === (39))){
var state_16159__$1 = state_16159;
var statearr_16174_16257 = state_16159__$1;
(statearr_16174_16257[(2)] = null);

(statearr_16174_16257[(1)] = (41));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16160 === (4))){
var inst_16031 = (state_16159[(11)]);
var inst_16031__$1 = (state_16159[(2)]);
var inst_16032 = (inst_16031__$1 == null);
var state_16159__$1 = (function (){var statearr_16175 = state_16159;
(statearr_16175[(11)] = inst_16031__$1);

return statearr_16175;
})();
if(cljs.core.truth_(inst_16032)){
var statearr_16176_16258 = state_16159__$1;
(statearr_16176_16258[(1)] = (5));

} else {
var statearr_16177_16259 = state_16159__$1;
(statearr_16177_16259[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16160 === (15))){
var inst_16043 = (state_16159[(14)]);
var inst_16042 = (state_16159[(15)]);
var inst_16041 = (state_16159[(16)]);
var inst_16040 = (state_16159[(17)]);
var inst_16056 = (state_16159[(2)]);
var inst_16057 = (inst_16043 + (1));
var tmp16171 = inst_16042;
var tmp16172 = inst_16041;
var tmp16173 = inst_16040;
var inst_16040__$1 = tmp16173;
var inst_16041__$1 = tmp16172;
var inst_16042__$1 = tmp16171;
var inst_16043__$1 = inst_16057;
var state_16159__$1 = (function (){var statearr_16178 = state_16159;
(statearr_16178[(14)] = inst_16043__$1);

(statearr_16178[(15)] = inst_16042__$1);

(statearr_16178[(16)] = inst_16041__$1);

(statearr_16178[(17)] = inst_16040__$1);

(statearr_16178[(18)] = inst_16056);

return statearr_16178;
})();
var statearr_16179_16260 = state_16159__$1;
(statearr_16179_16260[(2)] = null);

(statearr_16179_16260[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16160 === (21))){
var inst_16081 = (state_16159[(2)]);
var state_16159__$1 = state_16159;
var statearr_16183_16261 = state_16159__$1;
(statearr_16183_16261[(2)] = inst_16081);

(statearr_16183_16261[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16160 === (31))){
var inst_16107 = (state_16159[(12)]);
var inst_16111 = done(null);
var inst_16112 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_16107);
var state_16159__$1 = (function (){var statearr_16184 = state_16159;
(statearr_16184[(19)] = inst_16111);

return statearr_16184;
})();
var statearr_16185_16262 = state_16159__$1;
(statearr_16185_16262[(2)] = inst_16112);

(statearr_16185_16262[(1)] = (32));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16160 === (32))){
var inst_16102 = (state_16159[(9)]);
var inst_16099 = (state_16159[(20)]);
var inst_16101 = (state_16159[(21)]);
var inst_16100 = (state_16159[(10)]);
var inst_16114 = (state_16159[(2)]);
var inst_16115 = (inst_16102 + (1));
var tmp16180 = inst_16099;
var tmp16181 = inst_16101;
var tmp16182 = inst_16100;
var inst_16099__$1 = tmp16180;
var inst_16100__$1 = tmp16182;
var inst_16101__$1 = tmp16181;
var inst_16102__$1 = inst_16115;
var state_16159__$1 = (function (){var statearr_16186 = state_16159;
(statearr_16186[(9)] = inst_16102__$1);

(statearr_16186[(20)] = inst_16099__$1);

(statearr_16186[(21)] = inst_16101__$1);

(statearr_16186[(10)] = inst_16100__$1);

(statearr_16186[(22)] = inst_16114);

return statearr_16186;
})();
var statearr_16187_16263 = state_16159__$1;
(statearr_16187_16263[(2)] = null);

(statearr_16187_16263[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16160 === (40))){
var inst_16127 = (state_16159[(23)]);
var inst_16131 = done(null);
var inst_16132 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_16127);
var state_16159__$1 = (function (){var statearr_16188 = state_16159;
(statearr_16188[(24)] = inst_16131);

return statearr_16188;
})();
var statearr_16189_16264 = state_16159__$1;
(statearr_16189_16264[(2)] = inst_16132);

(statearr_16189_16264[(1)] = (41));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16160 === (33))){
var inst_16118 = (state_16159[(25)]);
var inst_16120 = cljs.core.chunked_seq_QMARK_(inst_16118);
var state_16159__$1 = state_16159;
if(inst_16120){
var statearr_16190_16265 = state_16159__$1;
(statearr_16190_16265[(1)] = (36));

} else {
var statearr_16191_16266 = state_16159__$1;
(statearr_16191_16266[(1)] = (37));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16160 === (13))){
var inst_16050 = (state_16159[(26)]);
var inst_16053 = cljs.core.async.close_BANG_(inst_16050);
var state_16159__$1 = state_16159;
var statearr_16192_16267 = state_16159__$1;
(statearr_16192_16267[(2)] = inst_16053);

(statearr_16192_16267[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16160 === (22))){
var inst_16071 = (state_16159[(8)]);
var inst_16074 = cljs.core.async.close_BANG_(inst_16071);
var state_16159__$1 = state_16159;
var statearr_16193_16268 = state_16159__$1;
(statearr_16193_16268[(2)] = inst_16074);

(statearr_16193_16268[(1)] = (24));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16160 === (36))){
var inst_16118 = (state_16159[(25)]);
var inst_16122 = cljs.core.chunk_first(inst_16118);
var inst_16123 = cljs.core.chunk_rest(inst_16118);
var inst_16124 = cljs.core.count(inst_16122);
var inst_16099 = inst_16123;
var inst_16100 = inst_16122;
var inst_16101 = inst_16124;
var inst_16102 = (0);
var state_16159__$1 = (function (){var statearr_16194 = state_16159;
(statearr_16194[(9)] = inst_16102);

(statearr_16194[(20)] = inst_16099);

(statearr_16194[(21)] = inst_16101);

(statearr_16194[(10)] = inst_16100);

return statearr_16194;
})();
var statearr_16195_16269 = state_16159__$1;
(statearr_16195_16269[(2)] = null);

(statearr_16195_16269[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16160 === (41))){
var inst_16118 = (state_16159[(25)]);
var inst_16134 = (state_16159[(2)]);
var inst_16135 = cljs.core.next(inst_16118);
var inst_16099 = inst_16135;
var inst_16100 = null;
var inst_16101 = (0);
var inst_16102 = (0);
var state_16159__$1 = (function (){var statearr_16196 = state_16159;
(statearr_16196[(27)] = inst_16134);

(statearr_16196[(9)] = inst_16102);

(statearr_16196[(20)] = inst_16099);

(statearr_16196[(21)] = inst_16101);

(statearr_16196[(10)] = inst_16100);

return statearr_16196;
})();
var statearr_16197_16270 = state_16159__$1;
(statearr_16197_16270[(2)] = null);

(statearr_16197_16270[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16160 === (43))){
var state_16159__$1 = state_16159;
var statearr_16198_16271 = state_16159__$1;
(statearr_16198_16271[(2)] = null);

(statearr_16198_16271[(1)] = (44));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16160 === (29))){
var inst_16143 = (state_16159[(2)]);
var state_16159__$1 = state_16159;
var statearr_16199_16272 = state_16159__$1;
(statearr_16199_16272[(2)] = inst_16143);

(statearr_16199_16272[(1)] = (26));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16160 === (44))){
var inst_16152 = (state_16159[(2)]);
var state_16159__$1 = (function (){var statearr_16200 = state_16159;
(statearr_16200[(28)] = inst_16152);

return statearr_16200;
})();
var statearr_16201_16273 = state_16159__$1;
(statearr_16201_16273[(2)] = null);

(statearr_16201_16273[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16160 === (6))){
var inst_16091 = (state_16159[(29)]);
var inst_16090 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cs) : cljs.core.deref.call(null,cs));
var inst_16091__$1 = cljs.core.keys(inst_16090);
var inst_16092 = cljs.core.count(inst_16091__$1);
var inst_16093 = (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,inst_16092) : cljs.core.reset_BANG_.call(null,dctr,inst_16092));
var inst_16098 = cljs.core.seq(inst_16091__$1);
var inst_16099 = inst_16098;
var inst_16100 = null;
var inst_16101 = (0);
var inst_16102 = (0);
var state_16159__$1 = (function (){var statearr_16202 = state_16159;
(statearr_16202[(30)] = inst_16093);

(statearr_16202[(9)] = inst_16102);

(statearr_16202[(29)] = inst_16091__$1);

(statearr_16202[(20)] = inst_16099);

(statearr_16202[(21)] = inst_16101);

(statearr_16202[(10)] = inst_16100);

return statearr_16202;
})();
var statearr_16203_16274 = state_16159__$1;
(statearr_16203_16274[(2)] = null);

(statearr_16203_16274[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16160 === (28))){
var inst_16118 = (state_16159[(25)]);
var inst_16099 = (state_16159[(20)]);
var inst_16118__$1 = cljs.core.seq(inst_16099);
var state_16159__$1 = (function (){var statearr_16204 = state_16159;
(statearr_16204[(25)] = inst_16118__$1);

return statearr_16204;
})();
if(inst_16118__$1){
var statearr_16205_16275 = state_16159__$1;
(statearr_16205_16275[(1)] = (33));

} else {
var statearr_16206_16276 = state_16159__$1;
(statearr_16206_16276[(1)] = (34));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16160 === (25))){
var inst_16102 = (state_16159[(9)]);
var inst_16101 = (state_16159[(21)]);
var inst_16104 = (inst_16102 < inst_16101);
var inst_16105 = inst_16104;
var state_16159__$1 = state_16159;
if(cljs.core.truth_(inst_16105)){
var statearr_16207_16277 = state_16159__$1;
(statearr_16207_16277[(1)] = (27));

} else {
var statearr_16208_16278 = state_16159__$1;
(statearr_16208_16278[(1)] = (28));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16160 === (34))){
var state_16159__$1 = state_16159;
var statearr_16209_16279 = state_16159__$1;
(statearr_16209_16279[(2)] = null);

(statearr_16209_16279[(1)] = (35));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16160 === (17))){
var state_16159__$1 = state_16159;
var statearr_16210_16280 = state_16159__$1;
(statearr_16210_16280[(2)] = null);

(statearr_16210_16280[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16160 === (3))){
var inst_16157 = (state_16159[(2)]);
var state_16159__$1 = state_16159;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16159__$1,inst_16157);
} else {
if((state_val_16160 === (12))){
var inst_16086 = (state_16159[(2)]);
var state_16159__$1 = state_16159;
var statearr_16211_16281 = state_16159__$1;
(statearr_16211_16281[(2)] = inst_16086);

(statearr_16211_16281[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16160 === (2))){
var state_16159__$1 = state_16159;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16159__$1,(4),ch);
} else {
if((state_val_16160 === (23))){
var state_16159__$1 = state_16159;
var statearr_16212_16282 = state_16159__$1;
(statearr_16212_16282[(2)] = null);

(statearr_16212_16282[(1)] = (24));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16160 === (35))){
var inst_16141 = (state_16159[(2)]);
var state_16159__$1 = state_16159;
var statearr_16213_16283 = state_16159__$1;
(statearr_16213_16283[(2)] = inst_16141);

(statearr_16213_16283[(1)] = (29));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16160 === (19))){
var inst_16060 = (state_16159[(7)]);
var inst_16064 = cljs.core.chunk_first(inst_16060);
var inst_16065 = cljs.core.chunk_rest(inst_16060);
var inst_16066 = cljs.core.count(inst_16064);
var inst_16040 = inst_16065;
var inst_16041 = inst_16064;
var inst_16042 = inst_16066;
var inst_16043 = (0);
var state_16159__$1 = (function (){var statearr_16214 = state_16159;
(statearr_16214[(14)] = inst_16043);

(statearr_16214[(15)] = inst_16042);

(statearr_16214[(16)] = inst_16041);

(statearr_16214[(17)] = inst_16040);

return statearr_16214;
})();
var statearr_16215_16284 = state_16159__$1;
(statearr_16215_16284[(2)] = null);

(statearr_16215_16284[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16160 === (11))){
var inst_16060 = (state_16159[(7)]);
var inst_16040 = (state_16159[(17)]);
var inst_16060__$1 = cljs.core.seq(inst_16040);
var state_16159__$1 = (function (){var statearr_16216 = state_16159;
(statearr_16216[(7)] = inst_16060__$1);

return statearr_16216;
})();
if(inst_16060__$1){
var statearr_16217_16285 = state_16159__$1;
(statearr_16217_16285[(1)] = (16));

} else {
var statearr_16218_16286 = state_16159__$1;
(statearr_16218_16286[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16160 === (9))){
var inst_16088 = (state_16159[(2)]);
var state_16159__$1 = state_16159;
var statearr_16219_16287 = state_16159__$1;
(statearr_16219_16287[(2)] = inst_16088);

(statearr_16219_16287[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16160 === (5))){
var inst_16038 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cs) : cljs.core.deref.call(null,cs));
var inst_16039 = cljs.core.seq(inst_16038);
var inst_16040 = inst_16039;
var inst_16041 = null;
var inst_16042 = (0);
var inst_16043 = (0);
var state_16159__$1 = (function (){var statearr_16220 = state_16159;
(statearr_16220[(14)] = inst_16043);

(statearr_16220[(15)] = inst_16042);

(statearr_16220[(16)] = inst_16041);

(statearr_16220[(17)] = inst_16040);

return statearr_16220;
})();
var statearr_16221_16288 = state_16159__$1;
(statearr_16221_16288[(2)] = null);

(statearr_16221_16288[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16160 === (14))){
var state_16159__$1 = state_16159;
var statearr_16222_16289 = state_16159__$1;
(statearr_16222_16289[(2)] = null);

(statearr_16222_16289[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16160 === (45))){
var inst_16149 = (state_16159[(2)]);
var state_16159__$1 = state_16159;
var statearr_16223_16290 = state_16159__$1;
(statearr_16223_16290[(2)] = inst_16149);

(statearr_16223_16290[(1)] = (44));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16160 === (26))){
var inst_16091 = (state_16159[(29)]);
var inst_16145 = (state_16159[(2)]);
var inst_16146 = cljs.core.seq(inst_16091);
var state_16159__$1 = (function (){var statearr_16224 = state_16159;
(statearr_16224[(31)] = inst_16145);

return statearr_16224;
})();
if(inst_16146){
var statearr_16225_16291 = state_16159__$1;
(statearr_16225_16291[(1)] = (42));

} else {
var statearr_16226_16292 = state_16159__$1;
(statearr_16226_16292[(1)] = (43));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16160 === (16))){
var inst_16060 = (state_16159[(7)]);
var inst_16062 = cljs.core.chunked_seq_QMARK_(inst_16060);
var state_16159__$1 = state_16159;
if(inst_16062){
var statearr_16227_16293 = state_16159__$1;
(statearr_16227_16293[(1)] = (19));

} else {
var statearr_16228_16294 = state_16159__$1;
(statearr_16228_16294[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16160 === (38))){
var inst_16138 = (state_16159[(2)]);
var state_16159__$1 = state_16159;
var statearr_16229_16295 = state_16159__$1;
(statearr_16229_16295[(2)] = inst_16138);

(statearr_16229_16295[(1)] = (35));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16160 === (30))){
var state_16159__$1 = state_16159;
var statearr_16230_16296 = state_16159__$1;
(statearr_16230_16296[(2)] = null);

(statearr_16230_16296[(1)] = (32));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16160 === (10))){
var inst_16043 = (state_16159[(14)]);
var inst_16041 = (state_16159[(16)]);
var inst_16049 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_16041,inst_16043);
var inst_16050 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16049,(0),null);
var inst_16051 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16049,(1),null);
var state_16159__$1 = (function (){var statearr_16231 = state_16159;
(statearr_16231[(26)] = inst_16050);

return statearr_16231;
})();
if(cljs.core.truth_(inst_16051)){
var statearr_16232_16297 = state_16159__$1;
(statearr_16232_16297[(1)] = (13));

} else {
var statearr_16233_16298 = state_16159__$1;
(statearr_16233_16298[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16160 === (18))){
var inst_16084 = (state_16159[(2)]);
var state_16159__$1 = state_16159;
var statearr_16234_16299 = state_16159__$1;
(statearr_16234_16299[(2)] = inst_16084);

(statearr_16234_16299[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16160 === (42))){
var state_16159__$1 = state_16159;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16159__$1,(45),dchan);
} else {
if((state_val_16160 === (37))){
var inst_16118 = (state_16159[(25)]);
var inst_16127 = (state_16159[(23)]);
var inst_16031 = (state_16159[(11)]);
var inst_16127__$1 = cljs.core.first(inst_16118);
var inst_16128 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_16127__$1,inst_16031,done);
var state_16159__$1 = (function (){var statearr_16235 = state_16159;
(statearr_16235[(23)] = inst_16127__$1);

return statearr_16235;
})();
if(cljs.core.truth_(inst_16128)){
var statearr_16236_16300 = state_16159__$1;
(statearr_16236_16300[(1)] = (39));

} else {
var statearr_16237_16301 = state_16159__$1;
(statearr_16237_16301[(1)] = (40));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16160 === (8))){
var inst_16043 = (state_16159[(14)]);
var inst_16042 = (state_16159[(15)]);
var inst_16045 = (inst_16043 < inst_16042);
var inst_16046 = inst_16045;
var state_16159__$1 = state_16159;
if(cljs.core.truth_(inst_16046)){
var statearr_16238_16302 = state_16159__$1;
(statearr_16238_16302[(1)] = (10));

} else {
var statearr_16239_16303 = state_16159__$1;
(statearr_16239_16303[(1)] = (11));

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
});})(c__8570__auto___16249,cs,m,dchan,dctr,done))
;
return ((function (switch__8503__auto__,c__8570__auto___16249,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__8504__auto__ = null;
var cljs$core$async$mult_$_state_machine__8504__auto____0 = (function (){
var statearr_16243 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16243[(0)] = cljs$core$async$mult_$_state_machine__8504__auto__);

(statearr_16243[(1)] = (1));

return statearr_16243;
});
var cljs$core$async$mult_$_state_machine__8504__auto____1 = (function (state_16159){
while(true){
var ret_value__8505__auto__ = (function (){try{while(true){
var result__8506__auto__ = switch__8503__auto__(state_16159);
if(cljs.core.keyword_identical_QMARK_(result__8506__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__8506__auto__;
}
break;
}
}catch (e16244){if((e16244 instanceof Object)){
var ex__8507__auto__ = e16244;
var statearr_16245_16304 = state_16159;
(statearr_16245_16304[(5)] = ex__8507__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_16159);

return cljs.core.cst$kw$recur;
} else {
throw e16244;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__8505__auto__,cljs.core.cst$kw$recur)){
var G__16305 = state_16159;
state_16159 = G__16305;
continue;
} else {
return ret_value__8505__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__8504__auto__ = function(state_16159){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__8504__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__8504__auto____1.call(this,state_16159);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__8504__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__8504__auto____0;
cljs$core$async$mult_$_state_machine__8504__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__8504__auto____1;
return cljs$core$async$mult_$_state_machine__8504__auto__;
})()
;})(switch__8503__auto__,c__8570__auto___16249,cs,m,dchan,dctr,done))
})();
var state__8572__auto__ = (function (){var statearr_16246 = (f__8571__auto__.cljs$core$IFn$_invoke$arity$0 ? f__8571__auto__.cljs$core$IFn$_invoke$arity$0() : f__8571__auto__.call(null));
(statearr_16246[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8570__auto___16249);

return statearr_16246;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__8572__auto__);
});})(c__8570__auto___16249,cs,m,dchan,dctr,done))
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
var args16306 = [];
var len__5619__auto___16309 = arguments.length;
var i__5620__auto___16310 = (0);
while(true){
if((i__5620__auto___16310 < len__5619__auto___16309)){
args16306.push((arguments[i__5620__auto___16310]));

var G__16311 = (i__5620__auto___16310 + (1));
i__5620__auto___16310 = G__16311;
continue;
} else {
}
break;
}

var G__16308 = args16306.length;
switch (G__16308) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16306.length)].join('')));

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
var len__5619__auto___16323 = arguments.length;
var i__5620__auto___16324 = (0);
while(true){
if((i__5620__auto___16324 < len__5619__auto___16323)){
args__5626__auto__.push((arguments[i__5620__auto___16324]));

var G__16325 = (i__5620__auto___16324 + (1));
i__5620__auto___16324 = G__16325;
continue;
} else {
}
break;
}

var argseq__5627__auto__ = ((((3) < args__5626__auto__.length))?(new cljs.core.IndexedSeq(args__5626__auto__.slice((3)),(0))):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5627__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__16317){
var map__16318 = p__16317;
var map__16318__$1 = ((((!((map__16318 == null)))?((((map__16318.cljs$lang$protocol_mask$partition0$ & (64))) || (map__16318.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16318):map__16318);
var opts = map__16318__$1;
var statearr_16320_16326 = state;
(statearr_16320_16326[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4425__auto__ = cljs.core.async.do_alts(((function (map__16318,map__16318__$1,opts){
return (function (val){
var statearr_16321_16327 = state;
(statearr_16321_16327[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
});})(map__16318,map__16318__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4425__auto__)){
var cb = temp__4425__auto__;
var statearr_16322_16328 = state;
(statearr_16322_16328[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cb) : cljs.core.deref.call(null,cb)));


return cljs.core.cst$kw$recur;
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq16313){
var G__16314 = cljs.core.first(seq16313);
var seq16313__$1 = cljs.core.next(seq16313);
var G__16315 = cljs.core.first(seq16313__$1);
var seq16313__$2 = cljs.core.next(seq16313__$1);
var G__16316 = cljs.core.first(seq16313__$2);
var seq16313__$3 = cljs.core.next(seq16313__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__16314,G__16315,G__16316,seq16313__$3);
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
var cs = (function (){var G__16495 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__16495) : cljs.core.atom.call(null,G__16495));
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
if(typeof cljs.core.async.t_cljs$core$async16496 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16496 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta16497){
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
this.meta16497 = meta16497;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async16496.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_16498,meta16497__$1){
var self__ = this;
var _16498__$1 = this;
return (new cljs.core.async.t_cljs$core$async16496(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta16497__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async16496.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_16498){
var self__ = this;
var _16498__$1 = this;
return self__.meta16497;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async16496.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async16496.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async16496.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async16496.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async16496.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async16496.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__16499_16661 = self__.cs;
var G__16500_16662 = cljs.core.PersistentArrayMap.EMPTY;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__16499_16661,G__16500_16662) : cljs.core.reset_BANG_.call(null,G__16499_16661,G__16500_16662));

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async16496.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async16496.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async16496.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$change,cljs.core.with_meta(cljs.core.cst$sym$mix,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$out], null))),cljs.core.cst$kw$doc,"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),cljs.core.cst$sym$solo_DASH_mode,cljs.core.cst$sym$pick,cljs.core.cst$sym$cs,cljs.core.cst$sym$calc_DASH_state,cljs.core.cst$sym$out,cljs.core.cst$sym$changed,cljs.core.cst$sym$solo_DASH_modes,cljs.core.cst$sym$attrs,cljs.core.cst$sym$meta16497], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async16496.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async16496.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16496";

cljs.core.async.t_cljs$core$async16496.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__5159__auto__,writer__5160__auto__,opt__5161__auto__){
return cljs.core._write(writer__5160__auto__,"cljs.core.async/t_cljs$core$async16496");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async16496 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async16496(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta16497){
return (new cljs.core.async.t_cljs$core$async16496(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta16497));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async16496(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__8570__auto___16663 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__8570__auto___16663,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__8571__auto__ = (function (){var switch__8503__auto__ = ((function (c__8570__auto___16663,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_16598){
var state_val_16599 = (state_16598[(1)]);
if((state_val_16599 === (7))){
var inst_16516 = (state_16598[(2)]);
var state_16598__$1 = state_16598;
var statearr_16600_16664 = state_16598__$1;
(statearr_16600_16664[(2)] = inst_16516);

(statearr_16600_16664[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16599 === (20))){
var inst_16528 = (state_16598[(7)]);
var state_16598__$1 = state_16598;
var statearr_16601_16665 = state_16598__$1;
(statearr_16601_16665[(2)] = inst_16528);

(statearr_16601_16665[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16599 === (27))){
var state_16598__$1 = state_16598;
var statearr_16602_16666 = state_16598__$1;
(statearr_16602_16666[(2)] = null);

(statearr_16602_16666[(1)] = (28));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16599 === (1))){
var inst_16504 = (state_16598[(8)]);
var inst_16504__$1 = calc_state();
var inst_16506 = (inst_16504__$1 == null);
var inst_16507 = cljs.core.not(inst_16506);
var state_16598__$1 = (function (){var statearr_16603 = state_16598;
(statearr_16603[(8)] = inst_16504__$1);

return statearr_16603;
})();
if(inst_16507){
var statearr_16604_16667 = state_16598__$1;
(statearr_16604_16667[(1)] = (2));

} else {
var statearr_16605_16668 = state_16598__$1;
(statearr_16605_16668[(1)] = (3));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16599 === (24))){
var inst_16558 = (state_16598[(9)]);
var inst_16551 = (state_16598[(10)]);
var inst_16572 = (state_16598[(11)]);
var inst_16572__$1 = (inst_16551.cljs$core$IFn$_invoke$arity$1 ? inst_16551.cljs$core$IFn$_invoke$arity$1(inst_16558) : inst_16551.call(null,inst_16558));
var state_16598__$1 = (function (){var statearr_16606 = state_16598;
(statearr_16606[(11)] = inst_16572__$1);

return statearr_16606;
})();
if(cljs.core.truth_(inst_16572__$1)){
var statearr_16607_16669 = state_16598__$1;
(statearr_16607_16669[(1)] = (29));

} else {
var statearr_16608_16670 = state_16598__$1;
(statearr_16608_16670[(1)] = (30));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16599 === (4))){
var inst_16519 = (state_16598[(2)]);
var state_16598__$1 = state_16598;
if(cljs.core.truth_(inst_16519)){
var statearr_16609_16671 = state_16598__$1;
(statearr_16609_16671[(1)] = (8));

} else {
var statearr_16610_16672 = state_16598__$1;
(statearr_16610_16672[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16599 === (15))){
var inst_16545 = (state_16598[(2)]);
var state_16598__$1 = state_16598;
if(cljs.core.truth_(inst_16545)){
var statearr_16611_16673 = state_16598__$1;
(statearr_16611_16673[(1)] = (19));

} else {
var statearr_16612_16674 = state_16598__$1;
(statearr_16612_16674[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16599 === (21))){
var inst_16550 = (state_16598[(12)]);
var inst_16550__$1 = (state_16598[(2)]);
var inst_16551 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16550__$1,cljs.core.cst$kw$solos);
var inst_16552 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16550__$1,cljs.core.cst$kw$mutes);
var inst_16553 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16550__$1,cljs.core.cst$kw$reads);
var state_16598__$1 = (function (){var statearr_16613 = state_16598;
(statearr_16613[(12)] = inst_16550__$1);

(statearr_16613[(13)] = inst_16552);

(statearr_16613[(10)] = inst_16551);

return statearr_16613;
})();
return cljs.core.async.ioc_alts_BANG_(state_16598__$1,(22),inst_16553);
} else {
if((state_val_16599 === (31))){
var inst_16580 = (state_16598[(2)]);
var state_16598__$1 = state_16598;
if(cljs.core.truth_(inst_16580)){
var statearr_16614_16675 = state_16598__$1;
(statearr_16614_16675[(1)] = (32));

} else {
var statearr_16615_16676 = state_16598__$1;
(statearr_16615_16676[(1)] = (33));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16599 === (32))){
var inst_16557 = (state_16598[(14)]);
var state_16598__$1 = state_16598;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16598__$1,(35),out,inst_16557);
} else {
if((state_val_16599 === (33))){
var inst_16550 = (state_16598[(12)]);
var inst_16528 = inst_16550;
var state_16598__$1 = (function (){var statearr_16616 = state_16598;
(statearr_16616[(7)] = inst_16528);

return statearr_16616;
})();
var statearr_16617_16677 = state_16598__$1;
(statearr_16617_16677[(2)] = null);

(statearr_16617_16677[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16599 === (13))){
var inst_16528 = (state_16598[(7)]);
var inst_16535 = inst_16528.cljs$lang$protocol_mask$partition0$;
var inst_16536 = (inst_16535 & (64));
var inst_16537 = inst_16528.cljs$core$ISeq$;
var inst_16538 = (inst_16536) || (inst_16537);
var state_16598__$1 = state_16598;
if(cljs.core.truth_(inst_16538)){
var statearr_16618_16678 = state_16598__$1;
(statearr_16618_16678[(1)] = (16));

} else {
var statearr_16619_16679 = state_16598__$1;
(statearr_16619_16679[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16599 === (22))){
var inst_16558 = (state_16598[(9)]);
var inst_16557 = (state_16598[(14)]);
var inst_16556 = (state_16598[(2)]);
var inst_16557__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16556,(0),null);
var inst_16558__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16556,(1),null);
var inst_16559 = (inst_16557__$1 == null);
var inst_16560 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_16558__$1,change);
var inst_16561 = (inst_16559) || (inst_16560);
var state_16598__$1 = (function (){var statearr_16620 = state_16598;
(statearr_16620[(9)] = inst_16558__$1);

(statearr_16620[(14)] = inst_16557__$1);

return statearr_16620;
})();
if(cljs.core.truth_(inst_16561)){
var statearr_16621_16680 = state_16598__$1;
(statearr_16621_16680[(1)] = (23));

} else {
var statearr_16622_16681 = state_16598__$1;
(statearr_16622_16681[(1)] = (24));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16599 === (36))){
var inst_16550 = (state_16598[(12)]);
var inst_16528 = inst_16550;
var state_16598__$1 = (function (){var statearr_16623 = state_16598;
(statearr_16623[(7)] = inst_16528);

return statearr_16623;
})();
var statearr_16624_16682 = state_16598__$1;
(statearr_16624_16682[(2)] = null);

(statearr_16624_16682[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16599 === (29))){
var inst_16572 = (state_16598[(11)]);
var state_16598__$1 = state_16598;
var statearr_16625_16683 = state_16598__$1;
(statearr_16625_16683[(2)] = inst_16572);

(statearr_16625_16683[(1)] = (31));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16599 === (6))){
var state_16598__$1 = state_16598;
var statearr_16626_16684 = state_16598__$1;
(statearr_16626_16684[(2)] = false);

(statearr_16626_16684[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16599 === (28))){
var inst_16568 = (state_16598[(2)]);
var inst_16569 = calc_state();
var inst_16528 = inst_16569;
var state_16598__$1 = (function (){var statearr_16627 = state_16598;
(statearr_16627[(7)] = inst_16528);

(statearr_16627[(15)] = inst_16568);

return statearr_16627;
})();
var statearr_16628_16685 = state_16598__$1;
(statearr_16628_16685[(2)] = null);

(statearr_16628_16685[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16599 === (25))){
var inst_16594 = (state_16598[(2)]);
var state_16598__$1 = state_16598;
var statearr_16629_16686 = state_16598__$1;
(statearr_16629_16686[(2)] = inst_16594);

(statearr_16629_16686[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16599 === (34))){
var inst_16592 = (state_16598[(2)]);
var state_16598__$1 = state_16598;
var statearr_16630_16687 = state_16598__$1;
(statearr_16630_16687[(2)] = inst_16592);

(statearr_16630_16687[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16599 === (17))){
var state_16598__$1 = state_16598;
var statearr_16631_16688 = state_16598__$1;
(statearr_16631_16688[(2)] = false);

(statearr_16631_16688[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16599 === (3))){
var state_16598__$1 = state_16598;
var statearr_16632_16689 = state_16598__$1;
(statearr_16632_16689[(2)] = false);

(statearr_16632_16689[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16599 === (12))){
var inst_16596 = (state_16598[(2)]);
var state_16598__$1 = state_16598;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16598__$1,inst_16596);
} else {
if((state_val_16599 === (2))){
var inst_16504 = (state_16598[(8)]);
var inst_16509 = inst_16504.cljs$lang$protocol_mask$partition0$;
var inst_16510 = (inst_16509 & (64));
var inst_16511 = inst_16504.cljs$core$ISeq$;
var inst_16512 = (inst_16510) || (inst_16511);
var state_16598__$1 = state_16598;
if(cljs.core.truth_(inst_16512)){
var statearr_16633_16690 = state_16598__$1;
(statearr_16633_16690[(1)] = (5));

} else {
var statearr_16634_16691 = state_16598__$1;
(statearr_16634_16691[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16599 === (23))){
var inst_16557 = (state_16598[(14)]);
var inst_16563 = (inst_16557 == null);
var state_16598__$1 = state_16598;
if(cljs.core.truth_(inst_16563)){
var statearr_16635_16692 = state_16598__$1;
(statearr_16635_16692[(1)] = (26));

} else {
var statearr_16636_16693 = state_16598__$1;
(statearr_16636_16693[(1)] = (27));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16599 === (35))){
var inst_16583 = (state_16598[(2)]);
var state_16598__$1 = state_16598;
if(cljs.core.truth_(inst_16583)){
var statearr_16637_16694 = state_16598__$1;
(statearr_16637_16694[(1)] = (36));

} else {
var statearr_16638_16695 = state_16598__$1;
(statearr_16638_16695[(1)] = (37));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16599 === (19))){
var inst_16528 = (state_16598[(7)]);
var inst_16547 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_16528);
var state_16598__$1 = state_16598;
var statearr_16639_16696 = state_16598__$1;
(statearr_16639_16696[(2)] = inst_16547);

(statearr_16639_16696[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16599 === (11))){
var inst_16528 = (state_16598[(7)]);
var inst_16532 = (inst_16528 == null);
var inst_16533 = cljs.core.not(inst_16532);
var state_16598__$1 = state_16598;
if(inst_16533){
var statearr_16640_16697 = state_16598__$1;
(statearr_16640_16697[(1)] = (13));

} else {
var statearr_16641_16698 = state_16598__$1;
(statearr_16641_16698[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16599 === (9))){
var inst_16504 = (state_16598[(8)]);
var state_16598__$1 = state_16598;
var statearr_16642_16699 = state_16598__$1;
(statearr_16642_16699[(2)] = inst_16504);

(statearr_16642_16699[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16599 === (5))){
var state_16598__$1 = state_16598;
var statearr_16643_16700 = state_16598__$1;
(statearr_16643_16700[(2)] = true);

(statearr_16643_16700[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16599 === (14))){
var state_16598__$1 = state_16598;
var statearr_16644_16701 = state_16598__$1;
(statearr_16644_16701[(2)] = false);

(statearr_16644_16701[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16599 === (26))){
var inst_16558 = (state_16598[(9)]);
var inst_16565 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_16558);
var state_16598__$1 = state_16598;
var statearr_16645_16702 = state_16598__$1;
(statearr_16645_16702[(2)] = inst_16565);

(statearr_16645_16702[(1)] = (28));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16599 === (16))){
var state_16598__$1 = state_16598;
var statearr_16646_16703 = state_16598__$1;
(statearr_16646_16703[(2)] = true);

(statearr_16646_16703[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16599 === (38))){
var inst_16588 = (state_16598[(2)]);
var state_16598__$1 = state_16598;
var statearr_16647_16704 = state_16598__$1;
(statearr_16647_16704[(2)] = inst_16588);

(statearr_16647_16704[(1)] = (34));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16599 === (30))){
var inst_16558 = (state_16598[(9)]);
var inst_16552 = (state_16598[(13)]);
var inst_16551 = (state_16598[(10)]);
var inst_16575 = cljs.core.empty_QMARK_(inst_16551);
var inst_16576 = (inst_16552.cljs$core$IFn$_invoke$arity$1 ? inst_16552.cljs$core$IFn$_invoke$arity$1(inst_16558) : inst_16552.call(null,inst_16558));
var inst_16577 = cljs.core.not(inst_16576);
var inst_16578 = (inst_16575) && (inst_16577);
var state_16598__$1 = state_16598;
var statearr_16648_16705 = state_16598__$1;
(statearr_16648_16705[(2)] = inst_16578);

(statearr_16648_16705[(1)] = (31));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16599 === (10))){
var inst_16504 = (state_16598[(8)]);
var inst_16524 = (state_16598[(2)]);
var inst_16525 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16524,cljs.core.cst$kw$solos);
var inst_16526 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16524,cljs.core.cst$kw$mutes);
var inst_16527 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16524,cljs.core.cst$kw$reads);
var inst_16528 = inst_16504;
var state_16598__$1 = (function (){var statearr_16649 = state_16598;
(statearr_16649[(7)] = inst_16528);

(statearr_16649[(16)] = inst_16527);

(statearr_16649[(17)] = inst_16526);

(statearr_16649[(18)] = inst_16525);

return statearr_16649;
})();
var statearr_16650_16706 = state_16598__$1;
(statearr_16650_16706[(2)] = null);

(statearr_16650_16706[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16599 === (18))){
var inst_16542 = (state_16598[(2)]);
var state_16598__$1 = state_16598;
var statearr_16651_16707 = state_16598__$1;
(statearr_16651_16707[(2)] = inst_16542);

(statearr_16651_16707[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16599 === (37))){
var state_16598__$1 = state_16598;
var statearr_16652_16708 = state_16598__$1;
(statearr_16652_16708[(2)] = null);

(statearr_16652_16708[(1)] = (38));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16599 === (8))){
var inst_16504 = (state_16598[(8)]);
var inst_16521 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_16504);
var state_16598__$1 = state_16598;
var statearr_16653_16709 = state_16598__$1;
(statearr_16653_16709[(2)] = inst_16521);

(statearr_16653_16709[(1)] = (10));


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
});})(c__8570__auto___16663,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__8503__auto__,c__8570__auto___16663,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__8504__auto__ = null;
var cljs$core$async$mix_$_state_machine__8504__auto____0 = (function (){
var statearr_16657 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16657[(0)] = cljs$core$async$mix_$_state_machine__8504__auto__);

(statearr_16657[(1)] = (1));

return statearr_16657;
});
var cljs$core$async$mix_$_state_machine__8504__auto____1 = (function (state_16598){
while(true){
var ret_value__8505__auto__ = (function (){try{while(true){
var result__8506__auto__ = switch__8503__auto__(state_16598);
if(cljs.core.keyword_identical_QMARK_(result__8506__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__8506__auto__;
}
break;
}
}catch (e16658){if((e16658 instanceof Object)){
var ex__8507__auto__ = e16658;
var statearr_16659_16710 = state_16598;
(statearr_16659_16710[(5)] = ex__8507__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_16598);

return cljs.core.cst$kw$recur;
} else {
throw e16658;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__8505__auto__,cljs.core.cst$kw$recur)){
var G__16711 = state_16598;
state_16598 = G__16711;
continue;
} else {
return ret_value__8505__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__8504__auto__ = function(state_16598){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__8504__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__8504__auto____1.call(this,state_16598);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__8504__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__8504__auto____0;
cljs$core$async$mix_$_state_machine__8504__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__8504__auto____1;
return cljs$core$async$mix_$_state_machine__8504__auto__;
})()
;})(switch__8503__auto__,c__8570__auto___16663,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__8572__auto__ = (function (){var statearr_16660 = (f__8571__auto__.cljs$core$IFn$_invoke$arity$0 ? f__8571__auto__.cljs$core$IFn$_invoke$arity$0() : f__8571__auto__.call(null));
(statearr_16660[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8570__auto___16663);

return statearr_16660;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__8572__auto__);
});})(c__8570__auto___16663,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var args16712 = [];
var len__5619__auto___16715 = arguments.length;
var i__5620__auto___16716 = (0);
while(true){
if((i__5620__auto___16716 < len__5619__auto___16715)){
args16712.push((arguments[i__5620__auto___16716]));

var G__16717 = (i__5620__auto___16716 + (1));
i__5620__auto___16716 = G__16717;
continue;
} else {
}
break;
}

var G__16714 = args16712.length;
switch (G__16714) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16712.length)].join('')));

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
var args16720 = [];
var len__5619__auto___16848 = arguments.length;
var i__5620__auto___16849 = (0);
while(true){
if((i__5620__auto___16849 < len__5619__auto___16848)){
args16720.push((arguments[i__5620__auto___16849]));

var G__16850 = (i__5620__auto___16849 + (1));
i__5620__auto___16849 = G__16850;
continue;
} else {
}
break;
}

var G__16722 = args16720.length;
switch (G__16722) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16720.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = (function (){var G__16723 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__16723) : cljs.core.atom.call(null,G__16723));
})();
var ensure_mult = ((function (mults){
return (function (topic){
var or__4561__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(mults) : cljs.core.deref.call(null,mults)),topic);
if(cljs.core.truth_(or__4561__auto__)){
return or__4561__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,((function (or__4561__auto__,mults){
return (function (p1__16719_SHARP_){
if(cljs.core.truth_((p1__16719_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__16719_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__16719_SHARP_.call(null,topic)))){
return p1__16719_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__16719_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
});})(or__4561__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async16724 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16724 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta16725){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta16725 = meta16725;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async16724.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_16726,meta16725__$1){
var self__ = this;
var _16726__$1 = this;
return (new cljs.core.async.t_cljs$core$async16724(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta16725__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async16724.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_16726){
var self__ = this;
var _16726__$1 = this;
return self__.meta16725;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async16724.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async16724.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async16724.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async16724.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async16724.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async16724.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__16727 = self__.mults;
var G__16728 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__16727,G__16728) : cljs.core.reset_BANG_.call(null,G__16727,G__16728));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async16724.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async16724.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$ch,cljs.core.cst$sym$topic_DASH_fn,cljs.core.cst$sym$buf_DASH_fn,cljs.core.cst$sym$mults,cljs.core.cst$sym$ensure_DASH_mult,cljs.core.cst$sym$meta16725], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async16724.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async16724.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16724";

cljs.core.async.t_cljs$core$async16724.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__5159__auto__,writer__5160__auto__,opt__5161__auto__){
return cljs.core._write(writer__5160__auto__,"cljs.core.async/t_cljs$core$async16724");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async16724 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async16724(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta16725){
return (new cljs.core.async.t_cljs$core$async16724(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta16725));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async16724(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__8570__auto___16852 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__8570__auto___16852,mults,ensure_mult,p){
return (function (){
var f__8571__auto__ = (function (){var switch__8503__auto__ = ((function (c__8570__auto___16852,mults,ensure_mult,p){
return (function (state_16800){
var state_val_16801 = (state_16800[(1)]);
if((state_val_16801 === (7))){
var inst_16796 = (state_16800[(2)]);
var state_16800__$1 = state_16800;
var statearr_16802_16853 = state_16800__$1;
(statearr_16802_16853[(2)] = inst_16796);

(statearr_16802_16853[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16801 === (20))){
var state_16800__$1 = state_16800;
var statearr_16803_16854 = state_16800__$1;
(statearr_16803_16854[(2)] = null);

(statearr_16803_16854[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16801 === (1))){
var state_16800__$1 = state_16800;
var statearr_16804_16855 = state_16800__$1;
(statearr_16804_16855[(2)] = null);

(statearr_16804_16855[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16801 === (24))){
var inst_16779 = (state_16800[(7)]);
var inst_16788 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_16779);
var state_16800__$1 = state_16800;
var statearr_16805_16856 = state_16800__$1;
(statearr_16805_16856[(2)] = inst_16788);

(statearr_16805_16856[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16801 === (4))){
var inst_16731 = (state_16800[(8)]);
var inst_16731__$1 = (state_16800[(2)]);
var inst_16732 = (inst_16731__$1 == null);
var state_16800__$1 = (function (){var statearr_16806 = state_16800;
(statearr_16806[(8)] = inst_16731__$1);

return statearr_16806;
})();
if(cljs.core.truth_(inst_16732)){
var statearr_16807_16857 = state_16800__$1;
(statearr_16807_16857[(1)] = (5));

} else {
var statearr_16808_16858 = state_16800__$1;
(statearr_16808_16858[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16801 === (15))){
var inst_16773 = (state_16800[(2)]);
var state_16800__$1 = state_16800;
var statearr_16809_16859 = state_16800__$1;
(statearr_16809_16859[(2)] = inst_16773);

(statearr_16809_16859[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16801 === (21))){
var inst_16793 = (state_16800[(2)]);
var state_16800__$1 = (function (){var statearr_16810 = state_16800;
(statearr_16810[(9)] = inst_16793);

return statearr_16810;
})();
var statearr_16811_16860 = state_16800__$1;
(statearr_16811_16860[(2)] = null);

(statearr_16811_16860[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16801 === (13))){
var inst_16755 = (state_16800[(10)]);
var inst_16757 = cljs.core.chunked_seq_QMARK_(inst_16755);
var state_16800__$1 = state_16800;
if(inst_16757){
var statearr_16812_16861 = state_16800__$1;
(statearr_16812_16861[(1)] = (16));

} else {
var statearr_16813_16862 = state_16800__$1;
(statearr_16813_16862[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16801 === (22))){
var inst_16785 = (state_16800[(2)]);
var state_16800__$1 = state_16800;
if(cljs.core.truth_(inst_16785)){
var statearr_16814_16863 = state_16800__$1;
(statearr_16814_16863[(1)] = (23));

} else {
var statearr_16815_16864 = state_16800__$1;
(statearr_16815_16864[(1)] = (24));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16801 === (6))){
var inst_16731 = (state_16800[(8)]);
var inst_16781 = (state_16800[(11)]);
var inst_16779 = (state_16800[(7)]);
var inst_16779__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_16731) : topic_fn.call(null,inst_16731));
var inst_16780 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(mults) : cljs.core.deref.call(null,mults));
var inst_16781__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16780,inst_16779__$1);
var state_16800__$1 = (function (){var statearr_16816 = state_16800;
(statearr_16816[(11)] = inst_16781__$1);

(statearr_16816[(7)] = inst_16779__$1);

return statearr_16816;
})();
if(cljs.core.truth_(inst_16781__$1)){
var statearr_16817_16865 = state_16800__$1;
(statearr_16817_16865[(1)] = (19));

} else {
var statearr_16818_16866 = state_16800__$1;
(statearr_16818_16866[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16801 === (25))){
var inst_16790 = (state_16800[(2)]);
var state_16800__$1 = state_16800;
var statearr_16819_16867 = state_16800__$1;
(statearr_16819_16867[(2)] = inst_16790);

(statearr_16819_16867[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16801 === (17))){
var inst_16755 = (state_16800[(10)]);
var inst_16764 = cljs.core.first(inst_16755);
var inst_16765 = cljs.core.async.muxch_STAR_(inst_16764);
var inst_16766 = cljs.core.async.close_BANG_(inst_16765);
var inst_16767 = cljs.core.next(inst_16755);
var inst_16741 = inst_16767;
var inst_16742 = null;
var inst_16743 = (0);
var inst_16744 = (0);
var state_16800__$1 = (function (){var statearr_16820 = state_16800;
(statearr_16820[(12)] = inst_16741);

(statearr_16820[(13)] = inst_16744);

(statearr_16820[(14)] = inst_16766);

(statearr_16820[(15)] = inst_16743);

(statearr_16820[(16)] = inst_16742);

return statearr_16820;
})();
var statearr_16821_16868 = state_16800__$1;
(statearr_16821_16868[(2)] = null);

(statearr_16821_16868[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16801 === (3))){
var inst_16798 = (state_16800[(2)]);
var state_16800__$1 = state_16800;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16800__$1,inst_16798);
} else {
if((state_val_16801 === (12))){
var inst_16775 = (state_16800[(2)]);
var state_16800__$1 = state_16800;
var statearr_16822_16869 = state_16800__$1;
(statearr_16822_16869[(2)] = inst_16775);

(statearr_16822_16869[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16801 === (2))){
var state_16800__$1 = state_16800;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16800__$1,(4),ch);
} else {
if((state_val_16801 === (23))){
var state_16800__$1 = state_16800;
var statearr_16823_16870 = state_16800__$1;
(statearr_16823_16870[(2)] = null);

(statearr_16823_16870[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16801 === (19))){
var inst_16731 = (state_16800[(8)]);
var inst_16781 = (state_16800[(11)]);
var inst_16783 = cljs.core.async.muxch_STAR_(inst_16781);
var state_16800__$1 = state_16800;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16800__$1,(22),inst_16783,inst_16731);
} else {
if((state_val_16801 === (11))){
var inst_16741 = (state_16800[(12)]);
var inst_16755 = (state_16800[(10)]);
var inst_16755__$1 = cljs.core.seq(inst_16741);
var state_16800__$1 = (function (){var statearr_16824 = state_16800;
(statearr_16824[(10)] = inst_16755__$1);

return statearr_16824;
})();
if(inst_16755__$1){
var statearr_16825_16871 = state_16800__$1;
(statearr_16825_16871[(1)] = (13));

} else {
var statearr_16826_16872 = state_16800__$1;
(statearr_16826_16872[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16801 === (9))){
var inst_16777 = (state_16800[(2)]);
var state_16800__$1 = state_16800;
var statearr_16827_16873 = state_16800__$1;
(statearr_16827_16873[(2)] = inst_16777);

(statearr_16827_16873[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16801 === (5))){
var inst_16738 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(mults) : cljs.core.deref.call(null,mults));
var inst_16739 = cljs.core.vals(inst_16738);
var inst_16740 = cljs.core.seq(inst_16739);
var inst_16741 = inst_16740;
var inst_16742 = null;
var inst_16743 = (0);
var inst_16744 = (0);
var state_16800__$1 = (function (){var statearr_16828 = state_16800;
(statearr_16828[(12)] = inst_16741);

(statearr_16828[(13)] = inst_16744);

(statearr_16828[(15)] = inst_16743);

(statearr_16828[(16)] = inst_16742);

return statearr_16828;
})();
var statearr_16829_16874 = state_16800__$1;
(statearr_16829_16874[(2)] = null);

(statearr_16829_16874[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16801 === (14))){
var state_16800__$1 = state_16800;
var statearr_16833_16875 = state_16800__$1;
(statearr_16833_16875[(2)] = null);

(statearr_16833_16875[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16801 === (16))){
var inst_16755 = (state_16800[(10)]);
var inst_16759 = cljs.core.chunk_first(inst_16755);
var inst_16760 = cljs.core.chunk_rest(inst_16755);
var inst_16761 = cljs.core.count(inst_16759);
var inst_16741 = inst_16760;
var inst_16742 = inst_16759;
var inst_16743 = inst_16761;
var inst_16744 = (0);
var state_16800__$1 = (function (){var statearr_16834 = state_16800;
(statearr_16834[(12)] = inst_16741);

(statearr_16834[(13)] = inst_16744);

(statearr_16834[(15)] = inst_16743);

(statearr_16834[(16)] = inst_16742);

return statearr_16834;
})();
var statearr_16835_16876 = state_16800__$1;
(statearr_16835_16876[(2)] = null);

(statearr_16835_16876[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16801 === (10))){
var inst_16741 = (state_16800[(12)]);
var inst_16744 = (state_16800[(13)]);
var inst_16743 = (state_16800[(15)]);
var inst_16742 = (state_16800[(16)]);
var inst_16749 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_16742,inst_16744);
var inst_16750 = cljs.core.async.muxch_STAR_(inst_16749);
var inst_16751 = cljs.core.async.close_BANG_(inst_16750);
var inst_16752 = (inst_16744 + (1));
var tmp16830 = inst_16741;
var tmp16831 = inst_16743;
var tmp16832 = inst_16742;
var inst_16741__$1 = tmp16830;
var inst_16742__$1 = tmp16832;
var inst_16743__$1 = tmp16831;
var inst_16744__$1 = inst_16752;
var state_16800__$1 = (function (){var statearr_16836 = state_16800;
(statearr_16836[(12)] = inst_16741__$1);

(statearr_16836[(13)] = inst_16744__$1);

(statearr_16836[(15)] = inst_16743__$1);

(statearr_16836[(17)] = inst_16751);

(statearr_16836[(16)] = inst_16742__$1);

return statearr_16836;
})();
var statearr_16837_16877 = state_16800__$1;
(statearr_16837_16877[(2)] = null);

(statearr_16837_16877[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16801 === (18))){
var inst_16770 = (state_16800[(2)]);
var state_16800__$1 = state_16800;
var statearr_16838_16878 = state_16800__$1;
(statearr_16838_16878[(2)] = inst_16770);

(statearr_16838_16878[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16801 === (8))){
var inst_16744 = (state_16800[(13)]);
var inst_16743 = (state_16800[(15)]);
var inst_16746 = (inst_16744 < inst_16743);
var inst_16747 = inst_16746;
var state_16800__$1 = state_16800;
if(cljs.core.truth_(inst_16747)){
var statearr_16839_16879 = state_16800__$1;
(statearr_16839_16879[(1)] = (10));

} else {
var statearr_16840_16880 = state_16800__$1;
(statearr_16840_16880[(1)] = (11));

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
});})(c__8570__auto___16852,mults,ensure_mult,p))
;
return ((function (switch__8503__auto__,c__8570__auto___16852,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__8504__auto__ = null;
var cljs$core$async$state_machine__8504__auto____0 = (function (){
var statearr_16844 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16844[(0)] = cljs$core$async$state_machine__8504__auto__);

(statearr_16844[(1)] = (1));

return statearr_16844;
});
var cljs$core$async$state_machine__8504__auto____1 = (function (state_16800){
while(true){
var ret_value__8505__auto__ = (function (){try{while(true){
var result__8506__auto__ = switch__8503__auto__(state_16800);
if(cljs.core.keyword_identical_QMARK_(result__8506__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__8506__auto__;
}
break;
}
}catch (e16845){if((e16845 instanceof Object)){
var ex__8507__auto__ = e16845;
var statearr_16846_16881 = state_16800;
(statearr_16846_16881[(5)] = ex__8507__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_16800);

return cljs.core.cst$kw$recur;
} else {
throw e16845;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__8505__auto__,cljs.core.cst$kw$recur)){
var G__16882 = state_16800;
state_16800 = G__16882;
continue;
} else {
return ret_value__8505__auto__;
}
break;
}
});
cljs$core$async$state_machine__8504__auto__ = function(state_16800){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__8504__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__8504__auto____1.call(this,state_16800);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__8504__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__8504__auto____0;
cljs$core$async$state_machine__8504__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__8504__auto____1;
return cljs$core$async$state_machine__8504__auto__;
})()
;})(switch__8503__auto__,c__8570__auto___16852,mults,ensure_mult,p))
})();
var state__8572__auto__ = (function (){var statearr_16847 = (f__8571__auto__.cljs$core$IFn$_invoke$arity$0 ? f__8571__auto__.cljs$core$IFn$_invoke$arity$0() : f__8571__auto__.call(null));
(statearr_16847[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8570__auto___16852);

return statearr_16847;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__8572__auto__);
});})(c__8570__auto___16852,mults,ensure_mult,p))
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
var args16883 = [];
var len__5619__auto___16886 = arguments.length;
var i__5620__auto___16887 = (0);
while(true){
if((i__5620__auto___16887 < len__5619__auto___16886)){
args16883.push((arguments[i__5620__auto___16887]));

var G__16888 = (i__5620__auto___16887 + (1));
i__5620__auto___16887 = G__16888;
continue;
} else {
}
break;
}

var G__16885 = args16883.length;
switch (G__16885) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16883.length)].join('')));

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
var args16890 = [];
var len__5619__auto___16893 = arguments.length;
var i__5620__auto___16894 = (0);
while(true){
if((i__5620__auto___16894 < len__5619__auto___16893)){
args16890.push((arguments[i__5620__auto___16894]));

var G__16895 = (i__5620__auto___16894 + (1));
i__5620__auto___16894 = G__16895;
continue;
} else {
}
break;
}

var G__16892 = args16890.length;
switch (G__16892) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16890.length)].join('')));

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
var args16897 = [];
var len__5619__auto___16968 = arguments.length;
var i__5620__auto___16969 = (0);
while(true){
if((i__5620__auto___16969 < len__5619__auto___16968)){
args16897.push((arguments[i__5620__auto___16969]));

var G__16970 = (i__5620__auto___16969 + (1));
i__5620__auto___16969 = G__16970;
continue;
} else {
}
break;
}

var G__16899 = args16897.length;
switch (G__16899) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16897.length)].join('')));

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
var c__8570__auto___16972 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__8570__auto___16972,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__8571__auto__ = (function (){var switch__8503__auto__ = ((function (c__8570__auto___16972,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_16938){
var state_val_16939 = (state_16938[(1)]);
if((state_val_16939 === (7))){
var state_16938__$1 = state_16938;
var statearr_16940_16973 = state_16938__$1;
(statearr_16940_16973[(2)] = null);

(statearr_16940_16973[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16939 === (1))){
var state_16938__$1 = state_16938;
var statearr_16941_16974 = state_16938__$1;
(statearr_16941_16974[(2)] = null);

(statearr_16941_16974[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16939 === (4))){
var inst_16902 = (state_16938[(7)]);
var inst_16904 = (inst_16902 < cnt);
var state_16938__$1 = state_16938;
if(cljs.core.truth_(inst_16904)){
var statearr_16942_16975 = state_16938__$1;
(statearr_16942_16975[(1)] = (6));

} else {
var statearr_16943_16976 = state_16938__$1;
(statearr_16943_16976[(1)] = (7));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16939 === (15))){
var inst_16934 = (state_16938[(2)]);
var state_16938__$1 = state_16938;
var statearr_16944_16977 = state_16938__$1;
(statearr_16944_16977[(2)] = inst_16934);

(statearr_16944_16977[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16939 === (13))){
var inst_16927 = cljs.core.async.close_BANG_(out);
var state_16938__$1 = state_16938;
var statearr_16945_16978 = state_16938__$1;
(statearr_16945_16978[(2)] = inst_16927);

(statearr_16945_16978[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16939 === (6))){
var state_16938__$1 = state_16938;
var statearr_16946_16979 = state_16938__$1;
(statearr_16946_16979[(2)] = null);

(statearr_16946_16979[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16939 === (3))){
var inst_16936 = (state_16938[(2)]);
var state_16938__$1 = state_16938;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16938__$1,inst_16936);
} else {
if((state_val_16939 === (12))){
var inst_16924 = (state_16938[(8)]);
var inst_16924__$1 = (state_16938[(2)]);
var inst_16925 = cljs.core.some(cljs.core.nil_QMARK_,inst_16924__$1);
var state_16938__$1 = (function (){var statearr_16947 = state_16938;
(statearr_16947[(8)] = inst_16924__$1);

return statearr_16947;
})();
if(cljs.core.truth_(inst_16925)){
var statearr_16948_16980 = state_16938__$1;
(statearr_16948_16980[(1)] = (13));

} else {
var statearr_16949_16981 = state_16938__$1;
(statearr_16949_16981[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16939 === (2))){
var inst_16901 = (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cnt) : cljs.core.reset_BANG_.call(null,dctr,cnt));
var inst_16902 = (0);
var state_16938__$1 = (function (){var statearr_16950 = state_16938;
(statearr_16950[(9)] = inst_16901);

(statearr_16950[(7)] = inst_16902);

return statearr_16950;
})();
var statearr_16951_16982 = state_16938__$1;
(statearr_16951_16982[(2)] = null);

(statearr_16951_16982[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16939 === (11))){
var inst_16902 = (state_16938[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_16938,(10),Object,null,(9));
var inst_16911 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_16902) : chs__$1.call(null,inst_16902));
var inst_16912 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_16902) : done.call(null,inst_16902));
var inst_16913 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_16911,inst_16912);
var state_16938__$1 = state_16938;
var statearr_16952_16983 = state_16938__$1;
(statearr_16952_16983[(2)] = inst_16913);


cljs.core.async.impl.ioc_helpers.process_exception(state_16938__$1);

return cljs.core.cst$kw$recur;
} else {
if((state_val_16939 === (9))){
var inst_16902 = (state_16938[(7)]);
var inst_16915 = (state_16938[(2)]);
var inst_16916 = (inst_16902 + (1));
var inst_16902__$1 = inst_16916;
var state_16938__$1 = (function (){var statearr_16953 = state_16938;
(statearr_16953[(10)] = inst_16915);

(statearr_16953[(7)] = inst_16902__$1);

return statearr_16953;
})();
var statearr_16954_16984 = state_16938__$1;
(statearr_16954_16984[(2)] = null);

(statearr_16954_16984[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16939 === (5))){
var inst_16922 = (state_16938[(2)]);
var state_16938__$1 = (function (){var statearr_16955 = state_16938;
(statearr_16955[(11)] = inst_16922);

return statearr_16955;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16938__$1,(12),dchan);
} else {
if((state_val_16939 === (14))){
var inst_16924 = (state_16938[(8)]);
var inst_16929 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_16924);
var state_16938__$1 = state_16938;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16938__$1,(16),out,inst_16929);
} else {
if((state_val_16939 === (16))){
var inst_16931 = (state_16938[(2)]);
var state_16938__$1 = (function (){var statearr_16956 = state_16938;
(statearr_16956[(12)] = inst_16931);

return statearr_16956;
})();
var statearr_16957_16985 = state_16938__$1;
(statearr_16957_16985[(2)] = null);

(statearr_16957_16985[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16939 === (10))){
var inst_16906 = (state_16938[(2)]);
var inst_16907 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_16938__$1 = (function (){var statearr_16958 = state_16938;
(statearr_16958[(13)] = inst_16906);

return statearr_16958;
})();
var statearr_16959_16986 = state_16938__$1;
(statearr_16959_16986[(2)] = inst_16907);


cljs.core.async.impl.ioc_helpers.process_exception(state_16938__$1);

return cljs.core.cst$kw$recur;
} else {
if((state_val_16939 === (8))){
var inst_16920 = (state_16938[(2)]);
var state_16938__$1 = state_16938;
var statearr_16960_16987 = state_16938__$1;
(statearr_16960_16987[(2)] = inst_16920);

(statearr_16960_16987[(1)] = (5));


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
});})(c__8570__auto___16972,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__8503__auto__,c__8570__auto___16972,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__8504__auto__ = null;
var cljs$core$async$state_machine__8504__auto____0 = (function (){
var statearr_16964 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16964[(0)] = cljs$core$async$state_machine__8504__auto__);

(statearr_16964[(1)] = (1));

return statearr_16964;
});
var cljs$core$async$state_machine__8504__auto____1 = (function (state_16938){
while(true){
var ret_value__8505__auto__ = (function (){try{while(true){
var result__8506__auto__ = switch__8503__auto__(state_16938);
if(cljs.core.keyword_identical_QMARK_(result__8506__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__8506__auto__;
}
break;
}
}catch (e16965){if((e16965 instanceof Object)){
var ex__8507__auto__ = e16965;
var statearr_16966_16988 = state_16938;
(statearr_16966_16988[(5)] = ex__8507__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_16938);

return cljs.core.cst$kw$recur;
} else {
throw e16965;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__8505__auto__,cljs.core.cst$kw$recur)){
var G__16989 = state_16938;
state_16938 = G__16989;
continue;
} else {
return ret_value__8505__auto__;
}
break;
}
});
cljs$core$async$state_machine__8504__auto__ = function(state_16938){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__8504__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__8504__auto____1.call(this,state_16938);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__8504__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__8504__auto____0;
cljs$core$async$state_machine__8504__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__8504__auto____1;
return cljs$core$async$state_machine__8504__auto__;
})()
;})(switch__8503__auto__,c__8570__auto___16972,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__8572__auto__ = (function (){var statearr_16967 = (f__8571__auto__.cljs$core$IFn$_invoke$arity$0 ? f__8571__auto__.cljs$core$IFn$_invoke$arity$0() : f__8571__auto__.call(null));
(statearr_16967[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8570__auto___16972);

return statearr_16967;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__8572__auto__);
});})(c__8570__auto___16972,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var args16991 = [];
var len__5619__auto___17047 = arguments.length;
var i__5620__auto___17048 = (0);
while(true){
if((i__5620__auto___17048 < len__5619__auto___17047)){
args16991.push((arguments[i__5620__auto___17048]));

var G__17049 = (i__5620__auto___17048 + (1));
i__5620__auto___17048 = G__17049;
continue;
} else {
}
break;
}

var G__16993 = args16991.length;
switch (G__16993) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16991.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__8570__auto___17051 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__8570__auto___17051,out){
return (function (){
var f__8571__auto__ = (function (){var switch__8503__auto__ = ((function (c__8570__auto___17051,out){
return (function (state_17023){
var state_val_17024 = (state_17023[(1)]);
if((state_val_17024 === (7))){
var inst_17003 = (state_17023[(7)]);
var inst_17002 = (state_17023[(8)]);
var inst_17002__$1 = (state_17023[(2)]);
var inst_17003__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_17002__$1,(0),null);
var inst_17004 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_17002__$1,(1),null);
var inst_17005 = (inst_17003__$1 == null);
var state_17023__$1 = (function (){var statearr_17025 = state_17023;
(statearr_17025[(7)] = inst_17003__$1);

(statearr_17025[(8)] = inst_17002__$1);

(statearr_17025[(9)] = inst_17004);

return statearr_17025;
})();
if(cljs.core.truth_(inst_17005)){
var statearr_17026_17052 = state_17023__$1;
(statearr_17026_17052[(1)] = (8));

} else {
var statearr_17027_17053 = state_17023__$1;
(statearr_17027_17053[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17024 === (1))){
var inst_16994 = cljs.core.vec(chs);
var inst_16995 = inst_16994;
var state_17023__$1 = (function (){var statearr_17028 = state_17023;
(statearr_17028[(10)] = inst_16995);

return statearr_17028;
})();
var statearr_17029_17054 = state_17023__$1;
(statearr_17029_17054[(2)] = null);

(statearr_17029_17054[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17024 === (4))){
var inst_16995 = (state_17023[(10)]);
var state_17023__$1 = state_17023;
return cljs.core.async.ioc_alts_BANG_(state_17023__$1,(7),inst_16995);
} else {
if((state_val_17024 === (6))){
var inst_17019 = (state_17023[(2)]);
var state_17023__$1 = state_17023;
var statearr_17030_17055 = state_17023__$1;
(statearr_17030_17055[(2)] = inst_17019);

(statearr_17030_17055[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17024 === (3))){
var inst_17021 = (state_17023[(2)]);
var state_17023__$1 = state_17023;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17023__$1,inst_17021);
} else {
if((state_val_17024 === (2))){
var inst_16995 = (state_17023[(10)]);
var inst_16997 = cljs.core.count(inst_16995);
var inst_16998 = (inst_16997 > (0));
var state_17023__$1 = state_17023;
if(cljs.core.truth_(inst_16998)){
var statearr_17032_17056 = state_17023__$1;
(statearr_17032_17056[(1)] = (4));

} else {
var statearr_17033_17057 = state_17023__$1;
(statearr_17033_17057[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17024 === (11))){
var inst_16995 = (state_17023[(10)]);
var inst_17012 = (state_17023[(2)]);
var tmp17031 = inst_16995;
var inst_16995__$1 = tmp17031;
var state_17023__$1 = (function (){var statearr_17034 = state_17023;
(statearr_17034[(11)] = inst_17012);

(statearr_17034[(10)] = inst_16995__$1);

return statearr_17034;
})();
var statearr_17035_17058 = state_17023__$1;
(statearr_17035_17058[(2)] = null);

(statearr_17035_17058[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17024 === (9))){
var inst_17003 = (state_17023[(7)]);
var state_17023__$1 = state_17023;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17023__$1,(11),out,inst_17003);
} else {
if((state_val_17024 === (5))){
var inst_17017 = cljs.core.async.close_BANG_(out);
var state_17023__$1 = state_17023;
var statearr_17036_17059 = state_17023__$1;
(statearr_17036_17059[(2)] = inst_17017);

(statearr_17036_17059[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17024 === (10))){
var inst_17015 = (state_17023[(2)]);
var state_17023__$1 = state_17023;
var statearr_17037_17060 = state_17023__$1;
(statearr_17037_17060[(2)] = inst_17015);

(statearr_17037_17060[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17024 === (8))){
var inst_17003 = (state_17023[(7)]);
var inst_17002 = (state_17023[(8)]);
var inst_17004 = (state_17023[(9)]);
var inst_16995 = (state_17023[(10)]);
var inst_17007 = (function (){var cs = inst_16995;
var vec__17000 = inst_17002;
var v = inst_17003;
var c = inst_17004;
return ((function (cs,vec__17000,v,c,inst_17003,inst_17002,inst_17004,inst_16995,state_val_17024,c__8570__auto___17051,out){
return (function (p1__16990_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__16990_SHARP_);
});
;})(cs,vec__17000,v,c,inst_17003,inst_17002,inst_17004,inst_16995,state_val_17024,c__8570__auto___17051,out))
})();
var inst_17008 = cljs.core.filterv(inst_17007,inst_16995);
var inst_16995__$1 = inst_17008;
var state_17023__$1 = (function (){var statearr_17038 = state_17023;
(statearr_17038[(10)] = inst_16995__$1);

return statearr_17038;
})();
var statearr_17039_17061 = state_17023__$1;
(statearr_17039_17061[(2)] = null);

(statearr_17039_17061[(1)] = (2));


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
});})(c__8570__auto___17051,out))
;
return ((function (switch__8503__auto__,c__8570__auto___17051,out){
return (function() {
var cljs$core$async$state_machine__8504__auto__ = null;
var cljs$core$async$state_machine__8504__auto____0 = (function (){
var statearr_17043 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17043[(0)] = cljs$core$async$state_machine__8504__auto__);

(statearr_17043[(1)] = (1));

return statearr_17043;
});
var cljs$core$async$state_machine__8504__auto____1 = (function (state_17023){
while(true){
var ret_value__8505__auto__ = (function (){try{while(true){
var result__8506__auto__ = switch__8503__auto__(state_17023);
if(cljs.core.keyword_identical_QMARK_(result__8506__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__8506__auto__;
}
break;
}
}catch (e17044){if((e17044 instanceof Object)){
var ex__8507__auto__ = e17044;
var statearr_17045_17062 = state_17023;
(statearr_17045_17062[(5)] = ex__8507__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_17023);

return cljs.core.cst$kw$recur;
} else {
throw e17044;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__8505__auto__,cljs.core.cst$kw$recur)){
var G__17063 = state_17023;
state_17023 = G__17063;
continue;
} else {
return ret_value__8505__auto__;
}
break;
}
});
cljs$core$async$state_machine__8504__auto__ = function(state_17023){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__8504__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__8504__auto____1.call(this,state_17023);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__8504__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__8504__auto____0;
cljs$core$async$state_machine__8504__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__8504__auto____1;
return cljs$core$async$state_machine__8504__auto__;
})()
;})(switch__8503__auto__,c__8570__auto___17051,out))
})();
var state__8572__auto__ = (function (){var statearr_17046 = (f__8571__auto__.cljs$core$IFn$_invoke$arity$0 ? f__8571__auto__.cljs$core$IFn$_invoke$arity$0() : f__8571__auto__.call(null));
(statearr_17046[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8570__auto___17051);

return statearr_17046;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__8572__auto__);
});})(c__8570__auto___17051,out))
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
var args17064 = [];
var len__5619__auto___17113 = arguments.length;
var i__5620__auto___17114 = (0);
while(true){
if((i__5620__auto___17114 < len__5619__auto___17113)){
args17064.push((arguments[i__5620__auto___17114]));

var G__17115 = (i__5620__auto___17114 + (1));
i__5620__auto___17114 = G__17115;
continue;
} else {
}
break;
}

var G__17066 = args17064.length;
switch (G__17066) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17064.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__8570__auto___17117 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__8570__auto___17117,out){
return (function (){
var f__8571__auto__ = (function (){var switch__8503__auto__ = ((function (c__8570__auto___17117,out){
return (function (state_17090){
var state_val_17091 = (state_17090[(1)]);
if((state_val_17091 === (7))){
var inst_17072 = (state_17090[(7)]);
var inst_17072__$1 = (state_17090[(2)]);
var inst_17073 = (inst_17072__$1 == null);
var inst_17074 = cljs.core.not(inst_17073);
var state_17090__$1 = (function (){var statearr_17092 = state_17090;
(statearr_17092[(7)] = inst_17072__$1);

return statearr_17092;
})();
if(inst_17074){
var statearr_17093_17118 = state_17090__$1;
(statearr_17093_17118[(1)] = (8));

} else {
var statearr_17094_17119 = state_17090__$1;
(statearr_17094_17119[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17091 === (1))){
var inst_17067 = (0);
var state_17090__$1 = (function (){var statearr_17095 = state_17090;
(statearr_17095[(8)] = inst_17067);

return statearr_17095;
})();
var statearr_17096_17120 = state_17090__$1;
(statearr_17096_17120[(2)] = null);

(statearr_17096_17120[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17091 === (4))){
var state_17090__$1 = state_17090;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17090__$1,(7),ch);
} else {
if((state_val_17091 === (6))){
var inst_17085 = (state_17090[(2)]);
var state_17090__$1 = state_17090;
var statearr_17097_17121 = state_17090__$1;
(statearr_17097_17121[(2)] = inst_17085);

(statearr_17097_17121[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17091 === (3))){
var inst_17087 = (state_17090[(2)]);
var inst_17088 = cljs.core.async.close_BANG_(out);
var state_17090__$1 = (function (){var statearr_17098 = state_17090;
(statearr_17098[(9)] = inst_17087);

return statearr_17098;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_17090__$1,inst_17088);
} else {
if((state_val_17091 === (2))){
var inst_17067 = (state_17090[(8)]);
var inst_17069 = (inst_17067 < n);
var state_17090__$1 = state_17090;
if(cljs.core.truth_(inst_17069)){
var statearr_17099_17122 = state_17090__$1;
(statearr_17099_17122[(1)] = (4));

} else {
var statearr_17100_17123 = state_17090__$1;
(statearr_17100_17123[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17091 === (11))){
var inst_17067 = (state_17090[(8)]);
var inst_17077 = (state_17090[(2)]);
var inst_17078 = (inst_17067 + (1));
var inst_17067__$1 = inst_17078;
var state_17090__$1 = (function (){var statearr_17101 = state_17090;
(statearr_17101[(10)] = inst_17077);

(statearr_17101[(8)] = inst_17067__$1);

return statearr_17101;
})();
var statearr_17102_17124 = state_17090__$1;
(statearr_17102_17124[(2)] = null);

(statearr_17102_17124[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17091 === (9))){
var state_17090__$1 = state_17090;
var statearr_17103_17125 = state_17090__$1;
(statearr_17103_17125[(2)] = null);

(statearr_17103_17125[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17091 === (5))){
var state_17090__$1 = state_17090;
var statearr_17104_17126 = state_17090__$1;
(statearr_17104_17126[(2)] = null);

(statearr_17104_17126[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17091 === (10))){
var inst_17082 = (state_17090[(2)]);
var state_17090__$1 = state_17090;
var statearr_17105_17127 = state_17090__$1;
(statearr_17105_17127[(2)] = inst_17082);

(statearr_17105_17127[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17091 === (8))){
var inst_17072 = (state_17090[(7)]);
var state_17090__$1 = state_17090;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17090__$1,(11),out,inst_17072);
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
});})(c__8570__auto___17117,out))
;
return ((function (switch__8503__auto__,c__8570__auto___17117,out){
return (function() {
var cljs$core$async$state_machine__8504__auto__ = null;
var cljs$core$async$state_machine__8504__auto____0 = (function (){
var statearr_17109 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_17109[(0)] = cljs$core$async$state_machine__8504__auto__);

(statearr_17109[(1)] = (1));

return statearr_17109;
});
var cljs$core$async$state_machine__8504__auto____1 = (function (state_17090){
while(true){
var ret_value__8505__auto__ = (function (){try{while(true){
var result__8506__auto__ = switch__8503__auto__(state_17090);
if(cljs.core.keyword_identical_QMARK_(result__8506__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__8506__auto__;
}
break;
}
}catch (e17110){if((e17110 instanceof Object)){
var ex__8507__auto__ = e17110;
var statearr_17111_17128 = state_17090;
(statearr_17111_17128[(5)] = ex__8507__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_17090);

return cljs.core.cst$kw$recur;
} else {
throw e17110;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__8505__auto__,cljs.core.cst$kw$recur)){
var G__17129 = state_17090;
state_17090 = G__17129;
continue;
} else {
return ret_value__8505__auto__;
}
break;
}
});
cljs$core$async$state_machine__8504__auto__ = function(state_17090){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__8504__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__8504__auto____1.call(this,state_17090);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__8504__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__8504__auto____0;
cljs$core$async$state_machine__8504__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__8504__auto____1;
return cljs$core$async$state_machine__8504__auto__;
})()
;})(switch__8503__auto__,c__8570__auto___17117,out))
})();
var state__8572__auto__ = (function (){var statearr_17112 = (f__8571__auto__.cljs$core$IFn$_invoke$arity$0 ? f__8571__auto__.cljs$core$IFn$_invoke$arity$0() : f__8571__auto__.call(null));
(statearr_17112[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8570__auto___17117);

return statearr_17112;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__8572__auto__);
});})(c__8570__auto___17117,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async17139 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17139 = (function (map_LT_,f,ch,meta17140){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta17140 = meta17140;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async17139.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17141,meta17140__$1){
var self__ = this;
var _17141__$1 = this;
return (new cljs.core.async.t_cljs$core$async17139(self__.map_LT_,self__.f,self__.ch,meta17140__$1));
});

cljs.core.async.t_cljs$core$async17139.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17141){
var self__ = this;
var _17141__$1 = this;
return self__.meta17140;
});

cljs.core.async.t_cljs$core$async17139.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async17139.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async17139.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t_cljs$core$async17139.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async17139.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async17142 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17142 = (function (map_LT_,f,ch,meta17140,_,fn1,meta17143){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta17140 = meta17140;
this._ = _;
this.fn1 = fn1;
this.meta17143 = meta17143;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async17142.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_17144,meta17143__$1){
var self__ = this;
var _17144__$1 = this;
return (new cljs.core.async.t_cljs$core$async17142(self__.map_LT_,self__.f,self__.ch,self__.meta17140,self__._,self__.fn1,meta17143__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async17142.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_17144){
var self__ = this;
var _17144__$1 = this;
return self__.meta17143;
});})(___$1))
;

cljs.core.async.t_cljs$core$async17142.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async17142.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async17142.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async17142.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__17130_SHARP_){
var G__17145 = (((p1__17130_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__17130_SHARP_) : self__.f.call(null,p1__17130_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__17145) : f1.call(null,G__17145));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async17142.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$map_LT_,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$ch], null))),cljs.core.cst$kw$doc,"Deprecated - this function will be removed. Use transducer instead"], null)),cljs.core.cst$sym$f,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta17140,cljs.core.with_meta(cljs.core.cst$sym$_,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tag,cljs.core.cst$sym$cljs$core$async_SLASH_t_cljs$core$async17139], null)),cljs.core.cst$sym$fn1,cljs.core.cst$sym$meta17143], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async17142.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async17142.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17142";

cljs.core.async.t_cljs$core$async17142.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__5159__auto__,writer__5160__auto__,opt__5161__auto__){
return cljs.core._write(writer__5160__auto__,"cljs.core.async/t_cljs$core$async17142");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async17142 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async17142(map_LT___$1,f__$1,ch__$1,meta17140__$1,___$2,fn1__$1,meta17143){
return (new cljs.core.async.t_cljs$core$async17142(map_LT___$1,f__$1,ch__$1,meta17140__$1,___$2,fn1__$1,meta17143));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async17142(self__.map_LT_,self__.f,self__.ch,self__.meta17140,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4549__auto__ = ret;
if(cljs.core.truth_(and__4549__auto__)){
return !(((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(ret) : cljs.core.deref.call(null,ret)) == null));
} else {
return and__4549__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__17146 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(ret) : cljs.core.deref.call(null,ret));
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__17146) : self__.f.call(null,G__17146));
})());
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async17139.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async17139.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async17139.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$map_LT_,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$ch], null))),cljs.core.cst$kw$doc,"Deprecated - this function will be removed. Use transducer instead"], null)),cljs.core.cst$sym$f,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta17140], null);
});

cljs.core.async.t_cljs$core$async17139.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async17139.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17139";

cljs.core.async.t_cljs$core$async17139.cljs$lang$ctorPrWriter = (function (this__5159__auto__,writer__5160__auto__,opt__5161__auto__){
return cljs.core._write(writer__5160__auto__,"cljs.core.async/t_cljs$core$async17139");
});

cljs.core.async.__GT_t_cljs$core$async17139 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async17139(map_LT___$1,f__$1,ch__$1,meta17140){
return (new cljs.core.async.t_cljs$core$async17139(map_LT___$1,f__$1,ch__$1,meta17140));
});

}

return (new cljs.core.async.t_cljs$core$async17139(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async17150 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17150 = (function (map_GT_,f,ch,meta17151){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta17151 = meta17151;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async17150.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17152,meta17151__$1){
var self__ = this;
var _17152__$1 = this;
return (new cljs.core.async.t_cljs$core$async17150(self__.map_GT_,self__.f,self__.ch,meta17151__$1));
});

cljs.core.async.t_cljs$core$async17150.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17152){
var self__ = this;
var _17152__$1 = this;
return self__.meta17151;
});

cljs.core.async.t_cljs$core$async17150.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async17150.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async17150.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async17150.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async17150.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async17150.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
});

cljs.core.async.t_cljs$core$async17150.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$map_GT_,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$ch], null))),cljs.core.cst$kw$doc,"Deprecated - this function will be removed. Use transducer instead"], null)),cljs.core.cst$sym$f,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta17151], null);
});

cljs.core.async.t_cljs$core$async17150.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async17150.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17150";

cljs.core.async.t_cljs$core$async17150.cljs$lang$ctorPrWriter = (function (this__5159__auto__,writer__5160__auto__,opt__5161__auto__){
return cljs.core._write(writer__5160__auto__,"cljs.core.async/t_cljs$core$async17150");
});

cljs.core.async.__GT_t_cljs$core$async17150 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async17150(map_GT___$1,f__$1,ch__$1,meta17151){
return (new cljs.core.async.t_cljs$core$async17150(map_GT___$1,f__$1,ch__$1,meta17151));
});

}

return (new cljs.core.async.t_cljs$core$async17150(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async17156 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17156 = (function (filter_GT_,p,ch,meta17157){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta17157 = meta17157;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async17156.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17158,meta17157__$1){
var self__ = this;
var _17158__$1 = this;
return (new cljs.core.async.t_cljs$core$async17156(self__.filter_GT_,self__.p,self__.ch,meta17157__$1));
});

cljs.core.async.t_cljs$core$async17156.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17158){
var self__ = this;
var _17158__$1 = this;
return self__.meta17157;
});

cljs.core.async.t_cljs$core$async17156.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async17156.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async17156.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t_cljs$core$async17156.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async17156.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async17156.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async17156.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
});

cljs.core.async.t_cljs$core$async17156.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$filter_GT_,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$p,cljs.core.cst$sym$ch], null))),cljs.core.cst$kw$doc,"Deprecated - this function will be removed. Use transducer instead"], null)),cljs.core.cst$sym$p,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta17157], null);
});

cljs.core.async.t_cljs$core$async17156.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async17156.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17156";

cljs.core.async.t_cljs$core$async17156.cljs$lang$ctorPrWriter = (function (this__5159__auto__,writer__5160__auto__,opt__5161__auto__){
return cljs.core._write(writer__5160__auto__,"cljs.core.async/t_cljs$core$async17156");
});

cljs.core.async.__GT_t_cljs$core$async17156 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async17156(filter_GT___$1,p__$1,ch__$1,meta17157){
return (new cljs.core.async.t_cljs$core$async17156(filter_GT___$1,p__$1,ch__$1,meta17157));
});

}

return (new cljs.core.async.t_cljs$core$async17156(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var args17159 = [];
var len__5619__auto___17203 = arguments.length;
var i__5620__auto___17204 = (0);
while(true){
if((i__5620__auto___17204 < len__5619__auto___17203)){
args17159.push((arguments[i__5620__auto___17204]));

var G__17205 = (i__5620__auto___17204 + (1));
i__5620__auto___17204 = G__17205;
continue;
} else {
}
break;
}

var G__17161 = args17159.length;
switch (G__17161) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17159.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__8570__auto___17207 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__8570__auto___17207,out){
return (function (){
var f__8571__auto__ = (function (){var switch__8503__auto__ = ((function (c__8570__auto___17207,out){
return (function (state_17182){
var state_val_17183 = (state_17182[(1)]);
if((state_val_17183 === (7))){
var inst_17178 = (state_17182[(2)]);
var state_17182__$1 = state_17182;
var statearr_17184_17208 = state_17182__$1;
(statearr_17184_17208[(2)] = inst_17178);

(statearr_17184_17208[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17183 === (1))){
var state_17182__$1 = state_17182;
var statearr_17185_17209 = state_17182__$1;
(statearr_17185_17209[(2)] = null);

(statearr_17185_17209[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17183 === (4))){
var inst_17164 = (state_17182[(7)]);
var inst_17164__$1 = (state_17182[(2)]);
var inst_17165 = (inst_17164__$1 == null);
var state_17182__$1 = (function (){var statearr_17186 = state_17182;
(statearr_17186[(7)] = inst_17164__$1);

return statearr_17186;
})();
if(cljs.core.truth_(inst_17165)){
var statearr_17187_17210 = state_17182__$1;
(statearr_17187_17210[(1)] = (5));

} else {
var statearr_17188_17211 = state_17182__$1;
(statearr_17188_17211[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17183 === (6))){
var inst_17164 = (state_17182[(7)]);
var inst_17169 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_17164) : p.call(null,inst_17164));
var state_17182__$1 = state_17182;
if(cljs.core.truth_(inst_17169)){
var statearr_17189_17212 = state_17182__$1;
(statearr_17189_17212[(1)] = (8));

} else {
var statearr_17190_17213 = state_17182__$1;
(statearr_17190_17213[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17183 === (3))){
var inst_17180 = (state_17182[(2)]);
var state_17182__$1 = state_17182;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17182__$1,inst_17180);
} else {
if((state_val_17183 === (2))){
var state_17182__$1 = state_17182;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17182__$1,(4),ch);
} else {
if((state_val_17183 === (11))){
var inst_17172 = (state_17182[(2)]);
var state_17182__$1 = state_17182;
var statearr_17191_17214 = state_17182__$1;
(statearr_17191_17214[(2)] = inst_17172);

(statearr_17191_17214[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17183 === (9))){
var state_17182__$1 = state_17182;
var statearr_17192_17215 = state_17182__$1;
(statearr_17192_17215[(2)] = null);

(statearr_17192_17215[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17183 === (5))){
var inst_17167 = cljs.core.async.close_BANG_(out);
var state_17182__$1 = state_17182;
var statearr_17193_17216 = state_17182__$1;
(statearr_17193_17216[(2)] = inst_17167);

(statearr_17193_17216[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17183 === (10))){
var inst_17175 = (state_17182[(2)]);
var state_17182__$1 = (function (){var statearr_17194 = state_17182;
(statearr_17194[(8)] = inst_17175);

return statearr_17194;
})();
var statearr_17195_17217 = state_17182__$1;
(statearr_17195_17217[(2)] = null);

(statearr_17195_17217[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17183 === (8))){
var inst_17164 = (state_17182[(7)]);
var state_17182__$1 = state_17182;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17182__$1,(11),out,inst_17164);
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
});})(c__8570__auto___17207,out))
;
return ((function (switch__8503__auto__,c__8570__auto___17207,out){
return (function() {
var cljs$core$async$state_machine__8504__auto__ = null;
var cljs$core$async$state_machine__8504__auto____0 = (function (){
var statearr_17199 = [null,null,null,null,null,null,null,null,null];
(statearr_17199[(0)] = cljs$core$async$state_machine__8504__auto__);

(statearr_17199[(1)] = (1));

return statearr_17199;
});
var cljs$core$async$state_machine__8504__auto____1 = (function (state_17182){
while(true){
var ret_value__8505__auto__ = (function (){try{while(true){
var result__8506__auto__ = switch__8503__auto__(state_17182);
if(cljs.core.keyword_identical_QMARK_(result__8506__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__8506__auto__;
}
break;
}
}catch (e17200){if((e17200 instanceof Object)){
var ex__8507__auto__ = e17200;
var statearr_17201_17218 = state_17182;
(statearr_17201_17218[(5)] = ex__8507__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_17182);

return cljs.core.cst$kw$recur;
} else {
throw e17200;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__8505__auto__,cljs.core.cst$kw$recur)){
var G__17219 = state_17182;
state_17182 = G__17219;
continue;
} else {
return ret_value__8505__auto__;
}
break;
}
});
cljs$core$async$state_machine__8504__auto__ = function(state_17182){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__8504__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__8504__auto____1.call(this,state_17182);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__8504__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__8504__auto____0;
cljs$core$async$state_machine__8504__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__8504__auto____1;
return cljs$core$async$state_machine__8504__auto__;
})()
;})(switch__8503__auto__,c__8570__auto___17207,out))
})();
var state__8572__auto__ = (function (){var statearr_17202 = (f__8571__auto__.cljs$core$IFn$_invoke$arity$0 ? f__8571__auto__.cljs$core$IFn$_invoke$arity$0() : f__8571__auto__.call(null));
(statearr_17202[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8570__auto___17207);

return statearr_17202;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__8572__auto__);
});})(c__8570__auto___17207,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args17220 = [];
var len__5619__auto___17223 = arguments.length;
var i__5620__auto___17224 = (0);
while(true){
if((i__5620__auto___17224 < len__5619__auto___17223)){
args17220.push((arguments[i__5620__auto___17224]));

var G__17225 = (i__5620__auto___17224 + (1));
i__5620__auto___17224 = G__17225;
continue;
} else {
}
break;
}

var G__17222 = args17220.length;
switch (G__17222) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17220.length)].join('')));

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
return (function (state_17392){
var state_val_17393 = (state_17392[(1)]);
if((state_val_17393 === (7))){
var inst_17388 = (state_17392[(2)]);
var state_17392__$1 = state_17392;
var statearr_17394_17435 = state_17392__$1;
(statearr_17394_17435[(2)] = inst_17388);

(statearr_17394_17435[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17393 === (20))){
var inst_17358 = (state_17392[(7)]);
var inst_17369 = (state_17392[(2)]);
var inst_17370 = cljs.core.next(inst_17358);
var inst_17344 = inst_17370;
var inst_17345 = null;
var inst_17346 = (0);
var inst_17347 = (0);
var state_17392__$1 = (function (){var statearr_17395 = state_17392;
(statearr_17395[(8)] = inst_17345);

(statearr_17395[(9)] = inst_17369);

(statearr_17395[(10)] = inst_17346);

(statearr_17395[(11)] = inst_17347);

(statearr_17395[(12)] = inst_17344);

return statearr_17395;
})();
var statearr_17396_17436 = state_17392__$1;
(statearr_17396_17436[(2)] = null);

(statearr_17396_17436[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17393 === (1))){
var state_17392__$1 = state_17392;
var statearr_17397_17437 = state_17392__$1;
(statearr_17397_17437[(2)] = null);

(statearr_17397_17437[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17393 === (4))){
var inst_17333 = (state_17392[(13)]);
var inst_17333__$1 = (state_17392[(2)]);
var inst_17334 = (inst_17333__$1 == null);
var state_17392__$1 = (function (){var statearr_17398 = state_17392;
(statearr_17398[(13)] = inst_17333__$1);

return statearr_17398;
})();
if(cljs.core.truth_(inst_17334)){
var statearr_17399_17438 = state_17392__$1;
(statearr_17399_17438[(1)] = (5));

} else {
var statearr_17400_17439 = state_17392__$1;
(statearr_17400_17439[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17393 === (15))){
var state_17392__$1 = state_17392;
var statearr_17404_17440 = state_17392__$1;
(statearr_17404_17440[(2)] = null);

(statearr_17404_17440[(1)] = (16));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17393 === (21))){
var state_17392__$1 = state_17392;
var statearr_17405_17441 = state_17392__$1;
(statearr_17405_17441[(2)] = null);

(statearr_17405_17441[(1)] = (23));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17393 === (13))){
var inst_17345 = (state_17392[(8)]);
var inst_17346 = (state_17392[(10)]);
var inst_17347 = (state_17392[(11)]);
var inst_17344 = (state_17392[(12)]);
var inst_17354 = (state_17392[(2)]);
var inst_17355 = (inst_17347 + (1));
var tmp17401 = inst_17345;
var tmp17402 = inst_17346;
var tmp17403 = inst_17344;
var inst_17344__$1 = tmp17403;
var inst_17345__$1 = tmp17401;
var inst_17346__$1 = tmp17402;
var inst_17347__$1 = inst_17355;
var state_17392__$1 = (function (){var statearr_17406 = state_17392;
(statearr_17406[(8)] = inst_17345__$1);

(statearr_17406[(10)] = inst_17346__$1);

(statearr_17406[(14)] = inst_17354);

(statearr_17406[(11)] = inst_17347__$1);

(statearr_17406[(12)] = inst_17344__$1);

return statearr_17406;
})();
var statearr_17407_17442 = state_17392__$1;
(statearr_17407_17442[(2)] = null);

(statearr_17407_17442[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17393 === (22))){
var state_17392__$1 = state_17392;
var statearr_17408_17443 = state_17392__$1;
(statearr_17408_17443[(2)] = null);

(statearr_17408_17443[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17393 === (6))){
var inst_17333 = (state_17392[(13)]);
var inst_17342 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_17333) : f.call(null,inst_17333));
var inst_17343 = cljs.core.seq(inst_17342);
var inst_17344 = inst_17343;
var inst_17345 = null;
var inst_17346 = (0);
var inst_17347 = (0);
var state_17392__$1 = (function (){var statearr_17409 = state_17392;
(statearr_17409[(8)] = inst_17345);

(statearr_17409[(10)] = inst_17346);

(statearr_17409[(11)] = inst_17347);

(statearr_17409[(12)] = inst_17344);

return statearr_17409;
})();
var statearr_17410_17444 = state_17392__$1;
(statearr_17410_17444[(2)] = null);

(statearr_17410_17444[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17393 === (17))){
var inst_17358 = (state_17392[(7)]);
var inst_17362 = cljs.core.chunk_first(inst_17358);
var inst_17363 = cljs.core.chunk_rest(inst_17358);
var inst_17364 = cljs.core.count(inst_17362);
var inst_17344 = inst_17363;
var inst_17345 = inst_17362;
var inst_17346 = inst_17364;
var inst_17347 = (0);
var state_17392__$1 = (function (){var statearr_17411 = state_17392;
(statearr_17411[(8)] = inst_17345);

(statearr_17411[(10)] = inst_17346);

(statearr_17411[(11)] = inst_17347);

(statearr_17411[(12)] = inst_17344);

return statearr_17411;
})();
var statearr_17412_17445 = state_17392__$1;
(statearr_17412_17445[(2)] = null);

(statearr_17412_17445[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17393 === (3))){
var inst_17390 = (state_17392[(2)]);
var state_17392__$1 = state_17392;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17392__$1,inst_17390);
} else {
if((state_val_17393 === (12))){
var inst_17378 = (state_17392[(2)]);
var state_17392__$1 = state_17392;
var statearr_17413_17446 = state_17392__$1;
(statearr_17413_17446[(2)] = inst_17378);

(statearr_17413_17446[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17393 === (2))){
var state_17392__$1 = state_17392;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17392__$1,(4),in$);
} else {
if((state_val_17393 === (23))){
var inst_17386 = (state_17392[(2)]);
var state_17392__$1 = state_17392;
var statearr_17414_17447 = state_17392__$1;
(statearr_17414_17447[(2)] = inst_17386);

(statearr_17414_17447[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17393 === (19))){
var inst_17373 = (state_17392[(2)]);
var state_17392__$1 = state_17392;
var statearr_17415_17448 = state_17392__$1;
(statearr_17415_17448[(2)] = inst_17373);

(statearr_17415_17448[(1)] = (16));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17393 === (11))){
var inst_17358 = (state_17392[(7)]);
var inst_17344 = (state_17392[(12)]);
var inst_17358__$1 = cljs.core.seq(inst_17344);
var state_17392__$1 = (function (){var statearr_17416 = state_17392;
(statearr_17416[(7)] = inst_17358__$1);

return statearr_17416;
})();
if(inst_17358__$1){
var statearr_17417_17449 = state_17392__$1;
(statearr_17417_17449[(1)] = (14));

} else {
var statearr_17418_17450 = state_17392__$1;
(statearr_17418_17450[(1)] = (15));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17393 === (9))){
var inst_17380 = (state_17392[(2)]);
var inst_17381 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_17392__$1 = (function (){var statearr_17419 = state_17392;
(statearr_17419[(15)] = inst_17380);

return statearr_17419;
})();
if(cljs.core.truth_(inst_17381)){
var statearr_17420_17451 = state_17392__$1;
(statearr_17420_17451[(1)] = (21));

} else {
var statearr_17421_17452 = state_17392__$1;
(statearr_17421_17452[(1)] = (22));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17393 === (5))){
var inst_17336 = cljs.core.async.close_BANG_(out);
var state_17392__$1 = state_17392;
var statearr_17422_17453 = state_17392__$1;
(statearr_17422_17453[(2)] = inst_17336);

(statearr_17422_17453[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17393 === (14))){
var inst_17358 = (state_17392[(7)]);
var inst_17360 = cljs.core.chunked_seq_QMARK_(inst_17358);
var state_17392__$1 = state_17392;
if(inst_17360){
var statearr_17423_17454 = state_17392__$1;
(statearr_17423_17454[(1)] = (17));

} else {
var statearr_17424_17455 = state_17392__$1;
(statearr_17424_17455[(1)] = (18));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17393 === (16))){
var inst_17376 = (state_17392[(2)]);
var state_17392__$1 = state_17392;
var statearr_17425_17456 = state_17392__$1;
(statearr_17425_17456[(2)] = inst_17376);

(statearr_17425_17456[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17393 === (10))){
var inst_17345 = (state_17392[(8)]);
var inst_17347 = (state_17392[(11)]);
var inst_17352 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_17345,inst_17347);
var state_17392__$1 = state_17392;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17392__$1,(13),out,inst_17352);
} else {
if((state_val_17393 === (18))){
var inst_17358 = (state_17392[(7)]);
var inst_17367 = cljs.core.first(inst_17358);
var state_17392__$1 = state_17392;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17392__$1,(20),out,inst_17367);
} else {
if((state_val_17393 === (8))){
var inst_17346 = (state_17392[(10)]);
var inst_17347 = (state_17392[(11)]);
var inst_17349 = (inst_17347 < inst_17346);
var inst_17350 = inst_17349;
var state_17392__$1 = state_17392;
if(cljs.core.truth_(inst_17350)){
var statearr_17426_17457 = state_17392__$1;
(statearr_17426_17457[(1)] = (10));

} else {
var statearr_17427_17458 = state_17392__$1;
(statearr_17427_17458[(1)] = (11));

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
var statearr_17431 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17431[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__8504__auto__);

(statearr_17431[(1)] = (1));

return statearr_17431;
});
var cljs$core$async$mapcat_STAR__$_state_machine__8504__auto____1 = (function (state_17392){
while(true){
var ret_value__8505__auto__ = (function (){try{while(true){
var result__8506__auto__ = switch__8503__auto__(state_17392);
if(cljs.core.keyword_identical_QMARK_(result__8506__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__8506__auto__;
}
break;
}
}catch (e17432){if((e17432 instanceof Object)){
var ex__8507__auto__ = e17432;
var statearr_17433_17459 = state_17392;
(statearr_17433_17459[(5)] = ex__8507__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_17392);

return cljs.core.cst$kw$recur;
} else {
throw e17432;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__8505__auto__,cljs.core.cst$kw$recur)){
var G__17460 = state_17392;
state_17392 = G__17460;
continue;
} else {
return ret_value__8505__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__8504__auto__ = function(state_17392){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__8504__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__8504__auto____1.call(this,state_17392);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__8504__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__8504__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__8504__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__8504__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__8504__auto__;
})()
;})(switch__8503__auto__,c__8570__auto__))
})();
var state__8572__auto__ = (function (){var statearr_17434 = (f__8571__auto__.cljs$core$IFn$_invoke$arity$0 ? f__8571__auto__.cljs$core$IFn$_invoke$arity$0() : f__8571__auto__.call(null));
(statearr_17434[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8570__auto__);

return statearr_17434;
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
var args17461 = [];
var len__5619__auto___17464 = arguments.length;
var i__5620__auto___17465 = (0);
while(true){
if((i__5620__auto___17465 < len__5619__auto___17464)){
args17461.push((arguments[i__5620__auto___17465]));

var G__17466 = (i__5620__auto___17465 + (1));
i__5620__auto___17465 = G__17466;
continue;
} else {
}
break;
}

var G__17463 = args17461.length;
switch (G__17463) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17461.length)].join('')));

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
var args17468 = [];
var len__5619__auto___17471 = arguments.length;
var i__5620__auto___17472 = (0);
while(true){
if((i__5620__auto___17472 < len__5619__auto___17471)){
args17468.push((arguments[i__5620__auto___17472]));

var G__17473 = (i__5620__auto___17472 + (1));
i__5620__auto___17472 = G__17473;
continue;
} else {
}
break;
}

var G__17470 = args17468.length;
switch (G__17470) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17468.length)].join('')));

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
var args17475 = [];
var len__5619__auto___17526 = arguments.length;
var i__5620__auto___17527 = (0);
while(true){
if((i__5620__auto___17527 < len__5619__auto___17526)){
args17475.push((arguments[i__5620__auto___17527]));

var G__17528 = (i__5620__auto___17527 + (1));
i__5620__auto___17527 = G__17528;
continue;
} else {
}
break;
}

var G__17477 = args17475.length;
switch (G__17477) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17475.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__8570__auto___17530 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__8570__auto___17530,out){
return (function (){
var f__8571__auto__ = (function (){var switch__8503__auto__ = ((function (c__8570__auto___17530,out){
return (function (state_17501){
var state_val_17502 = (state_17501[(1)]);
if((state_val_17502 === (7))){
var inst_17496 = (state_17501[(2)]);
var state_17501__$1 = state_17501;
var statearr_17503_17531 = state_17501__$1;
(statearr_17503_17531[(2)] = inst_17496);

(statearr_17503_17531[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17502 === (1))){
var inst_17478 = null;
var state_17501__$1 = (function (){var statearr_17504 = state_17501;
(statearr_17504[(7)] = inst_17478);

return statearr_17504;
})();
var statearr_17505_17532 = state_17501__$1;
(statearr_17505_17532[(2)] = null);

(statearr_17505_17532[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17502 === (4))){
var inst_17481 = (state_17501[(8)]);
var inst_17481__$1 = (state_17501[(2)]);
var inst_17482 = (inst_17481__$1 == null);
var inst_17483 = cljs.core.not(inst_17482);
var state_17501__$1 = (function (){var statearr_17506 = state_17501;
(statearr_17506[(8)] = inst_17481__$1);

return statearr_17506;
})();
if(inst_17483){
var statearr_17507_17533 = state_17501__$1;
(statearr_17507_17533[(1)] = (5));

} else {
var statearr_17508_17534 = state_17501__$1;
(statearr_17508_17534[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17502 === (6))){
var state_17501__$1 = state_17501;
var statearr_17509_17535 = state_17501__$1;
(statearr_17509_17535[(2)] = null);

(statearr_17509_17535[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17502 === (3))){
var inst_17498 = (state_17501[(2)]);
var inst_17499 = cljs.core.async.close_BANG_(out);
var state_17501__$1 = (function (){var statearr_17510 = state_17501;
(statearr_17510[(9)] = inst_17498);

return statearr_17510;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_17501__$1,inst_17499);
} else {
if((state_val_17502 === (2))){
var state_17501__$1 = state_17501;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17501__$1,(4),ch);
} else {
if((state_val_17502 === (11))){
var inst_17481 = (state_17501[(8)]);
var inst_17490 = (state_17501[(2)]);
var inst_17478 = inst_17481;
var state_17501__$1 = (function (){var statearr_17511 = state_17501;
(statearr_17511[(10)] = inst_17490);

(statearr_17511[(7)] = inst_17478);

return statearr_17511;
})();
var statearr_17512_17536 = state_17501__$1;
(statearr_17512_17536[(2)] = null);

(statearr_17512_17536[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17502 === (9))){
var inst_17481 = (state_17501[(8)]);
var state_17501__$1 = state_17501;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17501__$1,(11),out,inst_17481);
} else {
if((state_val_17502 === (5))){
var inst_17481 = (state_17501[(8)]);
var inst_17478 = (state_17501[(7)]);
var inst_17485 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_17481,inst_17478);
var state_17501__$1 = state_17501;
if(inst_17485){
var statearr_17514_17537 = state_17501__$1;
(statearr_17514_17537[(1)] = (8));

} else {
var statearr_17515_17538 = state_17501__$1;
(statearr_17515_17538[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17502 === (10))){
var inst_17493 = (state_17501[(2)]);
var state_17501__$1 = state_17501;
var statearr_17516_17539 = state_17501__$1;
(statearr_17516_17539[(2)] = inst_17493);

(statearr_17516_17539[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17502 === (8))){
var inst_17478 = (state_17501[(7)]);
var tmp17513 = inst_17478;
var inst_17478__$1 = tmp17513;
var state_17501__$1 = (function (){var statearr_17517 = state_17501;
(statearr_17517[(7)] = inst_17478__$1);

return statearr_17517;
})();
var statearr_17518_17540 = state_17501__$1;
(statearr_17518_17540[(2)] = null);

(statearr_17518_17540[(1)] = (2));


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
});})(c__8570__auto___17530,out))
;
return ((function (switch__8503__auto__,c__8570__auto___17530,out){
return (function() {
var cljs$core$async$state_machine__8504__auto__ = null;
var cljs$core$async$state_machine__8504__auto____0 = (function (){
var statearr_17522 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_17522[(0)] = cljs$core$async$state_machine__8504__auto__);

(statearr_17522[(1)] = (1));

return statearr_17522;
});
var cljs$core$async$state_machine__8504__auto____1 = (function (state_17501){
while(true){
var ret_value__8505__auto__ = (function (){try{while(true){
var result__8506__auto__ = switch__8503__auto__(state_17501);
if(cljs.core.keyword_identical_QMARK_(result__8506__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__8506__auto__;
}
break;
}
}catch (e17523){if((e17523 instanceof Object)){
var ex__8507__auto__ = e17523;
var statearr_17524_17541 = state_17501;
(statearr_17524_17541[(5)] = ex__8507__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_17501);

return cljs.core.cst$kw$recur;
} else {
throw e17523;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__8505__auto__,cljs.core.cst$kw$recur)){
var G__17542 = state_17501;
state_17501 = G__17542;
continue;
} else {
return ret_value__8505__auto__;
}
break;
}
});
cljs$core$async$state_machine__8504__auto__ = function(state_17501){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__8504__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__8504__auto____1.call(this,state_17501);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__8504__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__8504__auto____0;
cljs$core$async$state_machine__8504__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__8504__auto____1;
return cljs$core$async$state_machine__8504__auto__;
})()
;})(switch__8503__auto__,c__8570__auto___17530,out))
})();
var state__8572__auto__ = (function (){var statearr_17525 = (f__8571__auto__.cljs$core$IFn$_invoke$arity$0 ? f__8571__auto__.cljs$core$IFn$_invoke$arity$0() : f__8571__auto__.call(null));
(statearr_17525[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8570__auto___17530);

return statearr_17525;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__8572__auto__);
});})(c__8570__auto___17530,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args17543 = [];
var len__5619__auto___17613 = arguments.length;
var i__5620__auto___17614 = (0);
while(true){
if((i__5620__auto___17614 < len__5619__auto___17613)){
args17543.push((arguments[i__5620__auto___17614]));

var G__17615 = (i__5620__auto___17614 + (1));
i__5620__auto___17614 = G__17615;
continue;
} else {
}
break;
}

var G__17545 = args17543.length;
switch (G__17545) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17543.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__8570__auto___17617 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__8570__auto___17617,out){
return (function (){
var f__8571__auto__ = (function (){var switch__8503__auto__ = ((function (c__8570__auto___17617,out){
return (function (state_17583){
var state_val_17584 = (state_17583[(1)]);
if((state_val_17584 === (7))){
var inst_17579 = (state_17583[(2)]);
var state_17583__$1 = state_17583;
var statearr_17585_17618 = state_17583__$1;
(statearr_17585_17618[(2)] = inst_17579);

(statearr_17585_17618[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17584 === (1))){
var inst_17546 = (new Array(n));
var inst_17547 = inst_17546;
var inst_17548 = (0);
var state_17583__$1 = (function (){var statearr_17586 = state_17583;
(statearr_17586[(7)] = inst_17548);

(statearr_17586[(8)] = inst_17547);

return statearr_17586;
})();
var statearr_17587_17619 = state_17583__$1;
(statearr_17587_17619[(2)] = null);

(statearr_17587_17619[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17584 === (4))){
var inst_17551 = (state_17583[(9)]);
var inst_17551__$1 = (state_17583[(2)]);
var inst_17552 = (inst_17551__$1 == null);
var inst_17553 = cljs.core.not(inst_17552);
var state_17583__$1 = (function (){var statearr_17588 = state_17583;
(statearr_17588[(9)] = inst_17551__$1);

return statearr_17588;
})();
if(inst_17553){
var statearr_17589_17620 = state_17583__$1;
(statearr_17589_17620[(1)] = (5));

} else {
var statearr_17590_17621 = state_17583__$1;
(statearr_17590_17621[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17584 === (15))){
var inst_17573 = (state_17583[(2)]);
var state_17583__$1 = state_17583;
var statearr_17591_17622 = state_17583__$1;
(statearr_17591_17622[(2)] = inst_17573);

(statearr_17591_17622[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17584 === (13))){
var state_17583__$1 = state_17583;
var statearr_17592_17623 = state_17583__$1;
(statearr_17592_17623[(2)] = null);

(statearr_17592_17623[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17584 === (6))){
var inst_17548 = (state_17583[(7)]);
var inst_17569 = (inst_17548 > (0));
var state_17583__$1 = state_17583;
if(cljs.core.truth_(inst_17569)){
var statearr_17593_17624 = state_17583__$1;
(statearr_17593_17624[(1)] = (12));

} else {
var statearr_17594_17625 = state_17583__$1;
(statearr_17594_17625[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17584 === (3))){
var inst_17581 = (state_17583[(2)]);
var state_17583__$1 = state_17583;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17583__$1,inst_17581);
} else {
if((state_val_17584 === (12))){
var inst_17547 = (state_17583[(8)]);
var inst_17571 = cljs.core.vec(inst_17547);
var state_17583__$1 = state_17583;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17583__$1,(15),out,inst_17571);
} else {
if((state_val_17584 === (2))){
var state_17583__$1 = state_17583;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17583__$1,(4),ch);
} else {
if((state_val_17584 === (11))){
var inst_17563 = (state_17583[(2)]);
var inst_17564 = (new Array(n));
var inst_17547 = inst_17564;
var inst_17548 = (0);
var state_17583__$1 = (function (){var statearr_17595 = state_17583;
(statearr_17595[(10)] = inst_17563);

(statearr_17595[(7)] = inst_17548);

(statearr_17595[(8)] = inst_17547);

return statearr_17595;
})();
var statearr_17596_17626 = state_17583__$1;
(statearr_17596_17626[(2)] = null);

(statearr_17596_17626[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17584 === (9))){
var inst_17547 = (state_17583[(8)]);
var inst_17561 = cljs.core.vec(inst_17547);
var state_17583__$1 = state_17583;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17583__$1,(11),out,inst_17561);
} else {
if((state_val_17584 === (5))){
var inst_17551 = (state_17583[(9)]);
var inst_17556 = (state_17583[(11)]);
var inst_17548 = (state_17583[(7)]);
var inst_17547 = (state_17583[(8)]);
var inst_17555 = (inst_17547[inst_17548] = inst_17551);
var inst_17556__$1 = (inst_17548 + (1));
var inst_17557 = (inst_17556__$1 < n);
var state_17583__$1 = (function (){var statearr_17597 = state_17583;
(statearr_17597[(12)] = inst_17555);

(statearr_17597[(11)] = inst_17556__$1);

return statearr_17597;
})();
if(cljs.core.truth_(inst_17557)){
var statearr_17598_17627 = state_17583__$1;
(statearr_17598_17627[(1)] = (8));

} else {
var statearr_17599_17628 = state_17583__$1;
(statearr_17599_17628[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17584 === (14))){
var inst_17576 = (state_17583[(2)]);
var inst_17577 = cljs.core.async.close_BANG_(out);
var state_17583__$1 = (function (){var statearr_17601 = state_17583;
(statearr_17601[(13)] = inst_17576);

return statearr_17601;
})();
var statearr_17602_17629 = state_17583__$1;
(statearr_17602_17629[(2)] = inst_17577);

(statearr_17602_17629[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17584 === (10))){
var inst_17567 = (state_17583[(2)]);
var state_17583__$1 = state_17583;
var statearr_17603_17630 = state_17583__$1;
(statearr_17603_17630[(2)] = inst_17567);

(statearr_17603_17630[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17584 === (8))){
var inst_17556 = (state_17583[(11)]);
var inst_17547 = (state_17583[(8)]);
var tmp17600 = inst_17547;
var inst_17547__$1 = tmp17600;
var inst_17548 = inst_17556;
var state_17583__$1 = (function (){var statearr_17604 = state_17583;
(statearr_17604[(7)] = inst_17548);

(statearr_17604[(8)] = inst_17547__$1);

return statearr_17604;
})();
var statearr_17605_17631 = state_17583__$1;
(statearr_17605_17631[(2)] = null);

(statearr_17605_17631[(1)] = (2));


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
});})(c__8570__auto___17617,out))
;
return ((function (switch__8503__auto__,c__8570__auto___17617,out){
return (function() {
var cljs$core$async$state_machine__8504__auto__ = null;
var cljs$core$async$state_machine__8504__auto____0 = (function (){
var statearr_17609 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17609[(0)] = cljs$core$async$state_machine__8504__auto__);

(statearr_17609[(1)] = (1));

return statearr_17609;
});
var cljs$core$async$state_machine__8504__auto____1 = (function (state_17583){
while(true){
var ret_value__8505__auto__ = (function (){try{while(true){
var result__8506__auto__ = switch__8503__auto__(state_17583);
if(cljs.core.keyword_identical_QMARK_(result__8506__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__8506__auto__;
}
break;
}
}catch (e17610){if((e17610 instanceof Object)){
var ex__8507__auto__ = e17610;
var statearr_17611_17632 = state_17583;
(statearr_17611_17632[(5)] = ex__8507__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_17583);

return cljs.core.cst$kw$recur;
} else {
throw e17610;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__8505__auto__,cljs.core.cst$kw$recur)){
var G__17633 = state_17583;
state_17583 = G__17633;
continue;
} else {
return ret_value__8505__auto__;
}
break;
}
});
cljs$core$async$state_machine__8504__auto__ = function(state_17583){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__8504__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__8504__auto____1.call(this,state_17583);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__8504__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__8504__auto____0;
cljs$core$async$state_machine__8504__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__8504__auto____1;
return cljs$core$async$state_machine__8504__auto__;
})()
;})(switch__8503__auto__,c__8570__auto___17617,out))
})();
var state__8572__auto__ = (function (){var statearr_17612 = (f__8571__auto__.cljs$core$IFn$_invoke$arity$0 ? f__8571__auto__.cljs$core$IFn$_invoke$arity$0() : f__8571__auto__.call(null));
(statearr_17612[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8570__auto___17617);

return statearr_17612;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__8572__auto__);
});})(c__8570__auto___17617,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args17634 = [];
var len__5619__auto___17708 = arguments.length;
var i__5620__auto___17709 = (0);
while(true){
if((i__5620__auto___17709 < len__5619__auto___17708)){
args17634.push((arguments[i__5620__auto___17709]));

var G__17710 = (i__5620__auto___17709 + (1));
i__5620__auto___17709 = G__17710;
continue;
} else {
}
break;
}

var G__17636 = args17634.length;
switch (G__17636) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17634.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__8570__auto___17712 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__8570__auto___17712,out){
return (function (){
var f__8571__auto__ = (function (){var switch__8503__auto__ = ((function (c__8570__auto___17712,out){
return (function (state_17678){
var state_val_17679 = (state_17678[(1)]);
if((state_val_17679 === (7))){
var inst_17674 = (state_17678[(2)]);
var state_17678__$1 = state_17678;
var statearr_17680_17713 = state_17678__$1;
(statearr_17680_17713[(2)] = inst_17674);

(statearr_17680_17713[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17679 === (1))){
var inst_17637 = [];
var inst_17638 = inst_17637;
var inst_17639 = cljs.core.cst$kw$cljs$core$async_SLASH_nothing;
var state_17678__$1 = (function (){var statearr_17681 = state_17678;
(statearr_17681[(7)] = inst_17639);

(statearr_17681[(8)] = inst_17638);

return statearr_17681;
})();
var statearr_17682_17714 = state_17678__$1;
(statearr_17682_17714[(2)] = null);

(statearr_17682_17714[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17679 === (4))){
var inst_17642 = (state_17678[(9)]);
var inst_17642__$1 = (state_17678[(2)]);
var inst_17643 = (inst_17642__$1 == null);
var inst_17644 = cljs.core.not(inst_17643);
var state_17678__$1 = (function (){var statearr_17683 = state_17678;
(statearr_17683[(9)] = inst_17642__$1);

return statearr_17683;
})();
if(inst_17644){
var statearr_17684_17715 = state_17678__$1;
(statearr_17684_17715[(1)] = (5));

} else {
var statearr_17685_17716 = state_17678__$1;
(statearr_17685_17716[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17679 === (15))){
var inst_17668 = (state_17678[(2)]);
var state_17678__$1 = state_17678;
var statearr_17686_17717 = state_17678__$1;
(statearr_17686_17717[(2)] = inst_17668);

(statearr_17686_17717[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17679 === (13))){
var state_17678__$1 = state_17678;
var statearr_17687_17718 = state_17678__$1;
(statearr_17687_17718[(2)] = null);

(statearr_17687_17718[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17679 === (6))){
var inst_17638 = (state_17678[(8)]);
var inst_17663 = inst_17638.length;
var inst_17664 = (inst_17663 > (0));
var state_17678__$1 = state_17678;
if(cljs.core.truth_(inst_17664)){
var statearr_17688_17719 = state_17678__$1;
(statearr_17688_17719[(1)] = (12));

} else {
var statearr_17689_17720 = state_17678__$1;
(statearr_17689_17720[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17679 === (3))){
var inst_17676 = (state_17678[(2)]);
var state_17678__$1 = state_17678;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17678__$1,inst_17676);
} else {
if((state_val_17679 === (12))){
var inst_17638 = (state_17678[(8)]);
var inst_17666 = cljs.core.vec(inst_17638);
var state_17678__$1 = state_17678;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17678__$1,(15),out,inst_17666);
} else {
if((state_val_17679 === (2))){
var state_17678__$1 = state_17678;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17678__$1,(4),ch);
} else {
if((state_val_17679 === (11))){
var inst_17642 = (state_17678[(9)]);
var inst_17646 = (state_17678[(10)]);
var inst_17656 = (state_17678[(2)]);
var inst_17657 = [];
var inst_17658 = inst_17657.push(inst_17642);
var inst_17638 = inst_17657;
var inst_17639 = inst_17646;
var state_17678__$1 = (function (){var statearr_17690 = state_17678;
(statearr_17690[(11)] = inst_17658);

(statearr_17690[(12)] = inst_17656);

(statearr_17690[(7)] = inst_17639);

(statearr_17690[(8)] = inst_17638);

return statearr_17690;
})();
var statearr_17691_17721 = state_17678__$1;
(statearr_17691_17721[(2)] = null);

(statearr_17691_17721[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17679 === (9))){
var inst_17638 = (state_17678[(8)]);
var inst_17654 = cljs.core.vec(inst_17638);
var state_17678__$1 = state_17678;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17678__$1,(11),out,inst_17654);
} else {
if((state_val_17679 === (5))){
var inst_17642 = (state_17678[(9)]);
var inst_17646 = (state_17678[(10)]);
var inst_17639 = (state_17678[(7)]);
var inst_17646__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_17642) : f.call(null,inst_17642));
var inst_17647 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_17646__$1,inst_17639);
var inst_17648 = cljs.core.keyword_identical_QMARK_(inst_17639,cljs.core.cst$kw$cljs$core$async_SLASH_nothing);
var inst_17649 = (inst_17647) || (inst_17648);
var state_17678__$1 = (function (){var statearr_17692 = state_17678;
(statearr_17692[(10)] = inst_17646__$1);

return statearr_17692;
})();
if(cljs.core.truth_(inst_17649)){
var statearr_17693_17722 = state_17678__$1;
(statearr_17693_17722[(1)] = (8));

} else {
var statearr_17694_17723 = state_17678__$1;
(statearr_17694_17723[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17679 === (14))){
var inst_17671 = (state_17678[(2)]);
var inst_17672 = cljs.core.async.close_BANG_(out);
var state_17678__$1 = (function (){var statearr_17696 = state_17678;
(statearr_17696[(13)] = inst_17671);

return statearr_17696;
})();
var statearr_17697_17724 = state_17678__$1;
(statearr_17697_17724[(2)] = inst_17672);

(statearr_17697_17724[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17679 === (10))){
var inst_17661 = (state_17678[(2)]);
var state_17678__$1 = state_17678;
var statearr_17698_17725 = state_17678__$1;
(statearr_17698_17725[(2)] = inst_17661);

(statearr_17698_17725[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17679 === (8))){
var inst_17642 = (state_17678[(9)]);
var inst_17646 = (state_17678[(10)]);
var inst_17638 = (state_17678[(8)]);
var inst_17651 = inst_17638.push(inst_17642);
var tmp17695 = inst_17638;
var inst_17638__$1 = tmp17695;
var inst_17639 = inst_17646;
var state_17678__$1 = (function (){var statearr_17699 = state_17678;
(statearr_17699[(14)] = inst_17651);

(statearr_17699[(7)] = inst_17639);

(statearr_17699[(8)] = inst_17638__$1);

return statearr_17699;
})();
var statearr_17700_17726 = state_17678__$1;
(statearr_17700_17726[(2)] = null);

(statearr_17700_17726[(1)] = (2));


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
});})(c__8570__auto___17712,out))
;
return ((function (switch__8503__auto__,c__8570__auto___17712,out){
return (function() {
var cljs$core$async$state_machine__8504__auto__ = null;
var cljs$core$async$state_machine__8504__auto____0 = (function (){
var statearr_17704 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17704[(0)] = cljs$core$async$state_machine__8504__auto__);

(statearr_17704[(1)] = (1));

return statearr_17704;
});
var cljs$core$async$state_machine__8504__auto____1 = (function (state_17678){
while(true){
var ret_value__8505__auto__ = (function (){try{while(true){
var result__8506__auto__ = switch__8503__auto__(state_17678);
if(cljs.core.keyword_identical_QMARK_(result__8506__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__8506__auto__;
}
break;
}
}catch (e17705){if((e17705 instanceof Object)){
var ex__8507__auto__ = e17705;
var statearr_17706_17727 = state_17678;
(statearr_17706_17727[(5)] = ex__8507__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_17678);

return cljs.core.cst$kw$recur;
} else {
throw e17705;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__8505__auto__,cljs.core.cst$kw$recur)){
var G__17728 = state_17678;
state_17678 = G__17728;
continue;
} else {
return ret_value__8505__auto__;
}
break;
}
});
cljs$core$async$state_machine__8504__auto__ = function(state_17678){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__8504__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__8504__auto____1.call(this,state_17678);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__8504__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__8504__auto____0;
cljs$core$async$state_machine__8504__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__8504__auto____1;
return cljs$core$async$state_machine__8504__auto__;
})()
;})(switch__8503__auto__,c__8570__auto___17712,out))
})();
var state__8572__auto__ = (function (){var statearr_17707 = (f__8571__auto__.cljs$core$IFn$_invoke$arity$0 ? f__8571__auto__.cljs$core$IFn$_invoke$arity$0() : f__8571__auto__.call(null));
(statearr_17707[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8570__auto___17712);

return statearr_17707;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__8572__auto__);
});})(c__8570__auto___17712,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;
