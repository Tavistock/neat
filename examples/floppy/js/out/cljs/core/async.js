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
var args15147 = [];
var len__5619__auto___15153 = arguments.length;
var i__5620__auto___15154 = (0);
while(true){
if((i__5620__auto___15154 < len__5619__auto___15153)){
args15147.push((arguments[i__5620__auto___15154]));

var G__15155 = (i__5620__auto___15154 + (1));
i__5620__auto___15154 = G__15155;
continue;
} else {
}
break;
}

var G__15149 = args15147.length;
switch (G__15149) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15147.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async15150 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15150 = (function (f,blockable,meta15151){
this.f = f;
this.blockable = blockable;
this.meta15151 = meta15151;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async15150.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15152,meta15151__$1){
var self__ = this;
var _15152__$1 = this;
return (new cljs.core.async.t_cljs$core$async15150(self__.f,self__.blockable,meta15151__$1));
});

cljs.core.async.t_cljs$core$async15150.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15152){
var self__ = this;
var _15152__$1 = this;
return self__.meta15151;
});

cljs.core.async.t_cljs$core$async15150.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async15150.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async15150.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async15150.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async15150.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$blockable,cljs.core.cst$sym$meta15151], null);
});

cljs.core.async.t_cljs$core$async15150.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async15150.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15150";

cljs.core.async.t_cljs$core$async15150.cljs$lang$ctorPrWriter = (function (this__5159__auto__,writer__5160__auto__,opt__5161__auto__){
return cljs.core._write(writer__5160__auto__,"cljs.core.async/t_cljs$core$async15150");
});

cljs.core.async.__GT_t_cljs$core$async15150 = (function cljs$core$async$__GT_t_cljs$core$async15150(f__$1,blockable__$1,meta15151){
return (new cljs.core.async.t_cljs$core$async15150(f__$1,blockable__$1,meta15151));
});

}

return (new cljs.core.async.t_cljs$core$async15150(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var args15159 = [];
var len__5619__auto___15162 = arguments.length;
var i__5620__auto___15163 = (0);
while(true){
if((i__5620__auto___15163 < len__5619__auto___15162)){
args15159.push((arguments[i__5620__auto___15163]));

var G__15164 = (i__5620__auto___15163 + (1));
i__5620__auto___15163 = G__15164;
continue;
} else {
}
break;
}

var G__15161 = args15159.length;
switch (G__15161) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15159.length)].join('')));

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
var args15166 = [];
var len__5619__auto___15169 = arguments.length;
var i__5620__auto___15170 = (0);
while(true){
if((i__5620__auto___15170 < len__5619__auto___15169)){
args15166.push((arguments[i__5620__auto___15170]));

var G__15171 = (i__5620__auto___15170 + (1));
i__5620__auto___15170 = G__15171;
continue;
} else {
}
break;
}

var G__15168 = args15166.length;
switch (G__15168) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15166.length)].join('')));

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
var args15173 = [];
var len__5619__auto___15176 = arguments.length;
var i__5620__auto___15177 = (0);
while(true){
if((i__5620__auto___15177 < len__5619__auto___15176)){
args15173.push((arguments[i__5620__auto___15177]));

var G__15178 = (i__5620__auto___15177 + (1));
i__5620__auto___15177 = G__15178;
continue;
} else {
}
break;
}

var G__15175 = args15173.length;
switch (G__15175) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15173.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_15180 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(ret) : cljs.core.deref.call(null,ret));
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_15180) : fn1.call(null,val_15180));
} else {
cljs.core.async.impl.dispatch.run(((function (val_15180,ret){
return (function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_15180) : fn1.call(null,val_15180));
});})(val_15180,ret))
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
var args15181 = [];
var len__5619__auto___15184 = arguments.length;
var i__5620__auto___15185 = (0);
while(true){
if((i__5620__auto___15185 < len__5619__auto___15184)){
args15181.push((arguments[i__5620__auto___15185]));

var G__15186 = (i__5620__auto___15185 + (1));
i__5620__auto___15185 = G__15186;
continue;
} else {
}
break;
}

var G__15183 = args15181.length;
switch (G__15183) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15181.length)].join('')));

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
var n__5464__auto___15188 = n;
var x_15189 = (0);
while(true){
if((x_15189 < n__5464__auto___15188)){
(a[x_15189] = (0));

var G__15190 = (x_15189 + (1));
x_15189 = G__15190;
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

var G__15191 = (i + (1));
i = G__15191;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true) : cljs.core.atom.call(null,true));
if(typeof cljs.core.async.t_cljs$core$async15195 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15195 = (function (alt_flag,flag,meta15196){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta15196 = meta15196;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async15195.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_15197,meta15196__$1){
var self__ = this;
var _15197__$1 = this;
return (new cljs.core.async.t_cljs$core$async15195(self__.alt_flag,self__.flag,meta15196__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async15195.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_15197){
var self__ = this;
var _15197__$1 = this;
return self__.meta15196;
});})(flag))
;

cljs.core.async.t_cljs$core$async15195.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async15195.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(self__.flag) : cljs.core.deref.call(null,self__.flag));
});})(flag))
;

cljs.core.async.t_cljs$core$async15195.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async15195.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(self__.flag,null) : cljs.core.reset_BANG_.call(null,self__.flag,null));

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async15195.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$alt_DASH_flag,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$private,true,cljs.core.cst$kw$arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),cljs.core.cst$sym$flag,cljs.core.cst$sym$meta15196], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async15195.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async15195.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15195";

cljs.core.async.t_cljs$core$async15195.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__5159__auto__,writer__5160__auto__,opt__5161__auto__){
return cljs.core._write(writer__5160__auto__,"cljs.core.async/t_cljs$core$async15195");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async15195 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async15195(alt_flag__$1,flag__$1,meta15196){
return (new cljs.core.async.t_cljs$core$async15195(alt_flag__$1,flag__$1,meta15196));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async15195(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async15201 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15201 = (function (alt_handler,flag,cb,meta15202){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta15202 = meta15202;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async15201.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15203,meta15202__$1){
var self__ = this;
var _15203__$1 = this;
return (new cljs.core.async.t_cljs$core$async15201(self__.alt_handler,self__.flag,self__.cb,meta15202__$1));
});

cljs.core.async.t_cljs$core$async15201.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15203){
var self__ = this;
var _15203__$1 = this;
return self__.meta15202;
});

cljs.core.async.t_cljs$core$async15201.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async15201.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
});

cljs.core.async.t_cljs$core$async15201.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async15201.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async15201.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$alt_DASH_handler,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$private,true,cljs.core.cst$kw$arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$flag,cljs.core.cst$sym$cb], null)))], null)),cljs.core.cst$sym$flag,cljs.core.cst$sym$cb,cljs.core.cst$sym$meta15202], null);
});

cljs.core.async.t_cljs$core$async15201.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async15201.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15201";

cljs.core.async.t_cljs$core$async15201.cljs$lang$ctorPrWriter = (function (this__5159__auto__,writer__5160__auto__,opt__5161__auto__){
return cljs.core._write(writer__5160__auto__,"cljs.core.async/t_cljs$core$async15201");
});

cljs.core.async.__GT_t_cljs$core$async15201 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async15201(alt_handler__$1,flag__$1,cb__$1,meta15202){
return (new cljs.core.async.t_cljs$core$async15201(alt_handler__$1,flag__$1,cb__$1,meta15202));
});

}

return (new cljs.core.async.t_cljs$core$async15201(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__15204_SHARP_){
var G__15208 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__15204_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__15208) : fret.call(null,G__15208));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__15205_SHARP_){
var G__15209 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__15205_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__15209) : fret.call(null,G__15209));
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
var G__15210 = (i + (1));
i = G__15210;
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
var len__5619__auto___15216 = arguments.length;
var i__5620__auto___15217 = (0);
while(true){
if((i__5620__auto___15217 < len__5619__auto___15216)){
args__5626__auto__.push((arguments[i__5620__auto___15217]));

var G__15218 = (i__5620__auto___15217 + (1));
i__5620__auto___15217 = G__15218;
continue;
} else {
}
break;
}

var argseq__5627__auto__ = ((((1) < args__5626__auto__.length))?(new cljs.core.IndexedSeq(args__5626__auto__.slice((1)),(0))):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5627__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__15213){
var map__15214 = p__15213;
var map__15214__$1 = ((((!((map__15214 == null)))?((((map__15214.cljs$lang$protocol_mask$partition0$ & (64))) || (map__15214.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15214):map__15214);
var opts = map__15214__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq15211){
var G__15212 = cljs.core.first(seq15211);
var seq15211__$1 = cljs.core.next(seq15211);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__15212,seq15211__$1);
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
var args15219 = [];
var len__5619__auto___15269 = arguments.length;
var i__5620__auto___15270 = (0);
while(true){
if((i__5620__auto___15270 < len__5619__auto___15269)){
args15219.push((arguments[i__5620__auto___15270]));

var G__15271 = (i__5620__auto___15270 + (1));
i__5620__auto___15270 = G__15271;
continue;
} else {
}
break;
}

var G__15221 = args15219.length;
switch (G__15221) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15219.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__8570__auto___15273 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__8570__auto___15273){
return (function (){
var f__8571__auto__ = (function (){var switch__8503__auto__ = ((function (c__8570__auto___15273){
return (function (state_15245){
var state_val_15246 = (state_15245[(1)]);
if((state_val_15246 === (7))){
var inst_15241 = (state_15245[(2)]);
var state_15245__$1 = state_15245;
var statearr_15247_15274 = state_15245__$1;
(statearr_15247_15274[(2)] = inst_15241);

(statearr_15247_15274[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15246 === (1))){
var state_15245__$1 = state_15245;
var statearr_15248_15275 = state_15245__$1;
(statearr_15248_15275[(2)] = null);

(statearr_15248_15275[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15246 === (4))){
var inst_15224 = (state_15245[(7)]);
var inst_15224__$1 = (state_15245[(2)]);
var inst_15225 = (inst_15224__$1 == null);
var state_15245__$1 = (function (){var statearr_15249 = state_15245;
(statearr_15249[(7)] = inst_15224__$1);

return statearr_15249;
})();
if(cljs.core.truth_(inst_15225)){
var statearr_15250_15276 = state_15245__$1;
(statearr_15250_15276[(1)] = (5));

} else {
var statearr_15251_15277 = state_15245__$1;
(statearr_15251_15277[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15246 === (13))){
var state_15245__$1 = state_15245;
var statearr_15252_15278 = state_15245__$1;
(statearr_15252_15278[(2)] = null);

(statearr_15252_15278[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15246 === (6))){
var inst_15224 = (state_15245[(7)]);
var state_15245__$1 = state_15245;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15245__$1,(11),to,inst_15224);
} else {
if((state_val_15246 === (3))){
var inst_15243 = (state_15245[(2)]);
var state_15245__$1 = state_15245;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15245__$1,inst_15243);
} else {
if((state_val_15246 === (12))){
var state_15245__$1 = state_15245;
var statearr_15253_15279 = state_15245__$1;
(statearr_15253_15279[(2)] = null);

(statearr_15253_15279[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15246 === (2))){
var state_15245__$1 = state_15245;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15245__$1,(4),from);
} else {
if((state_val_15246 === (11))){
var inst_15234 = (state_15245[(2)]);
var state_15245__$1 = state_15245;
if(cljs.core.truth_(inst_15234)){
var statearr_15254_15280 = state_15245__$1;
(statearr_15254_15280[(1)] = (12));

} else {
var statearr_15255_15281 = state_15245__$1;
(statearr_15255_15281[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15246 === (9))){
var state_15245__$1 = state_15245;
var statearr_15256_15282 = state_15245__$1;
(statearr_15256_15282[(2)] = null);

(statearr_15256_15282[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15246 === (5))){
var state_15245__$1 = state_15245;
if(cljs.core.truth_(close_QMARK_)){
var statearr_15257_15283 = state_15245__$1;
(statearr_15257_15283[(1)] = (8));

} else {
var statearr_15258_15284 = state_15245__$1;
(statearr_15258_15284[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15246 === (14))){
var inst_15239 = (state_15245[(2)]);
var state_15245__$1 = state_15245;
var statearr_15259_15285 = state_15245__$1;
(statearr_15259_15285[(2)] = inst_15239);

(statearr_15259_15285[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15246 === (10))){
var inst_15231 = (state_15245[(2)]);
var state_15245__$1 = state_15245;
var statearr_15260_15286 = state_15245__$1;
(statearr_15260_15286[(2)] = inst_15231);

(statearr_15260_15286[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15246 === (8))){
var inst_15228 = cljs.core.async.close_BANG_(to);
var state_15245__$1 = state_15245;
var statearr_15261_15287 = state_15245__$1;
(statearr_15261_15287[(2)] = inst_15228);

(statearr_15261_15287[(1)] = (10));


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
});})(c__8570__auto___15273))
;
return ((function (switch__8503__auto__,c__8570__auto___15273){
return (function() {
var cljs$core$async$state_machine__8504__auto__ = null;
var cljs$core$async$state_machine__8504__auto____0 = (function (){
var statearr_15265 = [null,null,null,null,null,null,null,null];
(statearr_15265[(0)] = cljs$core$async$state_machine__8504__auto__);

(statearr_15265[(1)] = (1));

return statearr_15265;
});
var cljs$core$async$state_machine__8504__auto____1 = (function (state_15245){
while(true){
var ret_value__8505__auto__ = (function (){try{while(true){
var result__8506__auto__ = switch__8503__auto__(state_15245);
if(cljs.core.keyword_identical_QMARK_(result__8506__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__8506__auto__;
}
break;
}
}catch (e15266){if((e15266 instanceof Object)){
var ex__8507__auto__ = e15266;
var statearr_15267_15288 = state_15245;
(statearr_15267_15288[(5)] = ex__8507__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_15245);

return cljs.core.cst$kw$recur;
} else {
throw e15266;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__8505__auto__,cljs.core.cst$kw$recur)){
var G__15289 = state_15245;
state_15245 = G__15289;
continue;
} else {
return ret_value__8505__auto__;
}
break;
}
});
cljs$core$async$state_machine__8504__auto__ = function(state_15245){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__8504__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__8504__auto____1.call(this,state_15245);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__8504__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__8504__auto____0;
cljs$core$async$state_machine__8504__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__8504__auto____1;
return cljs$core$async$state_machine__8504__auto__;
})()
;})(switch__8503__auto__,c__8570__auto___15273))
})();
var state__8572__auto__ = (function (){var statearr_15268 = (f__8571__auto__.cljs$core$IFn$_invoke$arity$0 ? f__8571__auto__.cljs$core$IFn$_invoke$arity$0() : f__8571__auto__.call(null));
(statearr_15268[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8570__auto___15273);

return statearr_15268;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__8572__auto__);
});})(c__8570__auto___15273))
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
return (function (p__15473){
var vec__15474 = p__15473;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15474,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15474,(1),null);
var job = vec__15474;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__8570__auto___15656 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__8570__auto___15656,res,vec__15474,v,p,job,jobs,results){
return (function (){
var f__8571__auto__ = (function (){var switch__8503__auto__ = ((function (c__8570__auto___15656,res,vec__15474,v,p,job,jobs,results){
return (function (state_15479){
var state_val_15480 = (state_15479[(1)]);
if((state_val_15480 === (1))){
var state_15479__$1 = state_15479;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15479__$1,(2),res,v);
} else {
if((state_val_15480 === (2))){
var inst_15476 = (state_15479[(2)]);
var inst_15477 = cljs.core.async.close_BANG_(res);
var state_15479__$1 = (function (){var statearr_15481 = state_15479;
(statearr_15481[(7)] = inst_15476);

return statearr_15481;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_15479__$1,inst_15477);
} else {
return null;
}
}
});})(c__8570__auto___15656,res,vec__15474,v,p,job,jobs,results))
;
return ((function (switch__8503__auto__,c__8570__auto___15656,res,vec__15474,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__8504__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__8504__auto____0 = (function (){
var statearr_15485 = [null,null,null,null,null,null,null,null];
(statearr_15485[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__8504__auto__);

(statearr_15485[(1)] = (1));

return statearr_15485;
});
var cljs$core$async$pipeline_STAR__$_state_machine__8504__auto____1 = (function (state_15479){
while(true){
var ret_value__8505__auto__ = (function (){try{while(true){
var result__8506__auto__ = switch__8503__auto__(state_15479);
if(cljs.core.keyword_identical_QMARK_(result__8506__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__8506__auto__;
}
break;
}
}catch (e15486){if((e15486 instanceof Object)){
var ex__8507__auto__ = e15486;
var statearr_15487_15657 = state_15479;
(statearr_15487_15657[(5)] = ex__8507__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_15479);

return cljs.core.cst$kw$recur;
} else {
throw e15486;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__8505__auto__,cljs.core.cst$kw$recur)){
var G__15658 = state_15479;
state_15479 = G__15658;
continue;
} else {
return ret_value__8505__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__8504__auto__ = function(state_15479){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__8504__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__8504__auto____1.call(this,state_15479);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__8504__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__8504__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__8504__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__8504__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__8504__auto__;
})()
;})(switch__8503__auto__,c__8570__auto___15656,res,vec__15474,v,p,job,jobs,results))
})();
var state__8572__auto__ = (function (){var statearr_15488 = (f__8571__auto__.cljs$core$IFn$_invoke$arity$0 ? f__8571__auto__.cljs$core$IFn$_invoke$arity$0() : f__8571__auto__.call(null));
(statearr_15488[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8570__auto___15656);

return statearr_15488;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__8572__auto__);
});})(c__8570__auto___15656,res,vec__15474,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__15489){
var vec__15490 = p__15489;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15490,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15490,(1),null);
var job = vec__15490;
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
var n__5464__auto___15659 = n;
var __15660 = (0);
while(true){
if((__15660 < n__5464__auto___15659)){
var G__15491_15661 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__15491_15661) {
case "compute":
var c__8570__auto___15663 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__15660,c__8570__auto___15663,G__15491_15661,n__5464__auto___15659,jobs,results,process,async){
return (function (){
var f__8571__auto__ = (function (){var switch__8503__auto__ = ((function (__15660,c__8570__auto___15663,G__15491_15661,n__5464__auto___15659,jobs,results,process,async){
return (function (state_15504){
var state_val_15505 = (state_15504[(1)]);
if((state_val_15505 === (1))){
var state_15504__$1 = state_15504;
var statearr_15506_15664 = state_15504__$1;
(statearr_15506_15664[(2)] = null);

(statearr_15506_15664[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15505 === (2))){
var state_15504__$1 = state_15504;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15504__$1,(4),jobs);
} else {
if((state_val_15505 === (3))){
var inst_15502 = (state_15504[(2)]);
var state_15504__$1 = state_15504;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15504__$1,inst_15502);
} else {
if((state_val_15505 === (4))){
var inst_15494 = (state_15504[(2)]);
var inst_15495 = process(inst_15494);
var state_15504__$1 = state_15504;
if(cljs.core.truth_(inst_15495)){
var statearr_15507_15665 = state_15504__$1;
(statearr_15507_15665[(1)] = (5));

} else {
var statearr_15508_15666 = state_15504__$1;
(statearr_15508_15666[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15505 === (5))){
var state_15504__$1 = state_15504;
var statearr_15509_15667 = state_15504__$1;
(statearr_15509_15667[(2)] = null);

(statearr_15509_15667[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15505 === (6))){
var state_15504__$1 = state_15504;
var statearr_15510_15668 = state_15504__$1;
(statearr_15510_15668[(2)] = null);

(statearr_15510_15668[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15505 === (7))){
var inst_15500 = (state_15504[(2)]);
var state_15504__$1 = state_15504;
var statearr_15511_15669 = state_15504__$1;
(statearr_15511_15669[(2)] = inst_15500);

(statearr_15511_15669[(1)] = (3));


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
});})(__15660,c__8570__auto___15663,G__15491_15661,n__5464__auto___15659,jobs,results,process,async))
;
return ((function (__15660,switch__8503__auto__,c__8570__auto___15663,G__15491_15661,n__5464__auto___15659,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__8504__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__8504__auto____0 = (function (){
var statearr_15515 = [null,null,null,null,null,null,null];
(statearr_15515[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__8504__auto__);

(statearr_15515[(1)] = (1));

return statearr_15515;
});
var cljs$core$async$pipeline_STAR__$_state_machine__8504__auto____1 = (function (state_15504){
while(true){
var ret_value__8505__auto__ = (function (){try{while(true){
var result__8506__auto__ = switch__8503__auto__(state_15504);
if(cljs.core.keyword_identical_QMARK_(result__8506__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__8506__auto__;
}
break;
}
}catch (e15516){if((e15516 instanceof Object)){
var ex__8507__auto__ = e15516;
var statearr_15517_15670 = state_15504;
(statearr_15517_15670[(5)] = ex__8507__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_15504);

return cljs.core.cst$kw$recur;
} else {
throw e15516;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__8505__auto__,cljs.core.cst$kw$recur)){
var G__15671 = state_15504;
state_15504 = G__15671;
continue;
} else {
return ret_value__8505__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__8504__auto__ = function(state_15504){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__8504__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__8504__auto____1.call(this,state_15504);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__8504__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__8504__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__8504__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__8504__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__8504__auto__;
})()
;})(__15660,switch__8503__auto__,c__8570__auto___15663,G__15491_15661,n__5464__auto___15659,jobs,results,process,async))
})();
var state__8572__auto__ = (function (){var statearr_15518 = (f__8571__auto__.cljs$core$IFn$_invoke$arity$0 ? f__8571__auto__.cljs$core$IFn$_invoke$arity$0() : f__8571__auto__.call(null));
(statearr_15518[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8570__auto___15663);

return statearr_15518;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__8572__auto__);
});})(__15660,c__8570__auto___15663,G__15491_15661,n__5464__auto___15659,jobs,results,process,async))
);


break;
case "async":
var c__8570__auto___15672 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__15660,c__8570__auto___15672,G__15491_15661,n__5464__auto___15659,jobs,results,process,async){
return (function (){
var f__8571__auto__ = (function (){var switch__8503__auto__ = ((function (__15660,c__8570__auto___15672,G__15491_15661,n__5464__auto___15659,jobs,results,process,async){
return (function (state_15531){
var state_val_15532 = (state_15531[(1)]);
if((state_val_15532 === (1))){
var state_15531__$1 = state_15531;
var statearr_15533_15673 = state_15531__$1;
(statearr_15533_15673[(2)] = null);

(statearr_15533_15673[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15532 === (2))){
var state_15531__$1 = state_15531;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15531__$1,(4),jobs);
} else {
if((state_val_15532 === (3))){
var inst_15529 = (state_15531[(2)]);
var state_15531__$1 = state_15531;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15531__$1,inst_15529);
} else {
if((state_val_15532 === (4))){
var inst_15521 = (state_15531[(2)]);
var inst_15522 = async(inst_15521);
var state_15531__$1 = state_15531;
if(cljs.core.truth_(inst_15522)){
var statearr_15534_15674 = state_15531__$1;
(statearr_15534_15674[(1)] = (5));

} else {
var statearr_15535_15675 = state_15531__$1;
(statearr_15535_15675[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15532 === (5))){
var state_15531__$1 = state_15531;
var statearr_15536_15676 = state_15531__$1;
(statearr_15536_15676[(2)] = null);

(statearr_15536_15676[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15532 === (6))){
var state_15531__$1 = state_15531;
var statearr_15537_15677 = state_15531__$1;
(statearr_15537_15677[(2)] = null);

(statearr_15537_15677[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15532 === (7))){
var inst_15527 = (state_15531[(2)]);
var state_15531__$1 = state_15531;
var statearr_15538_15678 = state_15531__$1;
(statearr_15538_15678[(2)] = inst_15527);

(statearr_15538_15678[(1)] = (3));


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
});})(__15660,c__8570__auto___15672,G__15491_15661,n__5464__auto___15659,jobs,results,process,async))
;
return ((function (__15660,switch__8503__auto__,c__8570__auto___15672,G__15491_15661,n__5464__auto___15659,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__8504__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__8504__auto____0 = (function (){
var statearr_15542 = [null,null,null,null,null,null,null];
(statearr_15542[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__8504__auto__);

(statearr_15542[(1)] = (1));

return statearr_15542;
});
var cljs$core$async$pipeline_STAR__$_state_machine__8504__auto____1 = (function (state_15531){
while(true){
var ret_value__8505__auto__ = (function (){try{while(true){
var result__8506__auto__ = switch__8503__auto__(state_15531);
if(cljs.core.keyword_identical_QMARK_(result__8506__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__8506__auto__;
}
break;
}
}catch (e15543){if((e15543 instanceof Object)){
var ex__8507__auto__ = e15543;
var statearr_15544_15679 = state_15531;
(statearr_15544_15679[(5)] = ex__8507__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_15531);

return cljs.core.cst$kw$recur;
} else {
throw e15543;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__8505__auto__,cljs.core.cst$kw$recur)){
var G__15680 = state_15531;
state_15531 = G__15680;
continue;
} else {
return ret_value__8505__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__8504__auto__ = function(state_15531){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__8504__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__8504__auto____1.call(this,state_15531);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__8504__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__8504__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__8504__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__8504__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__8504__auto__;
})()
;})(__15660,switch__8503__auto__,c__8570__auto___15672,G__15491_15661,n__5464__auto___15659,jobs,results,process,async))
})();
var state__8572__auto__ = (function (){var statearr_15545 = (f__8571__auto__.cljs$core$IFn$_invoke$arity$0 ? f__8571__auto__.cljs$core$IFn$_invoke$arity$0() : f__8571__auto__.call(null));
(statearr_15545[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8570__auto___15672);

return statearr_15545;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__8572__auto__);
});})(__15660,c__8570__auto___15672,G__15491_15661,n__5464__auto___15659,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__15681 = (__15660 + (1));
__15660 = G__15681;
continue;
} else {
}
break;
}

var c__8570__auto___15682 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__8570__auto___15682,jobs,results,process,async){
return (function (){
var f__8571__auto__ = (function (){var switch__8503__auto__ = ((function (c__8570__auto___15682,jobs,results,process,async){
return (function (state_15567){
var state_val_15568 = (state_15567[(1)]);
if((state_val_15568 === (1))){
var state_15567__$1 = state_15567;
var statearr_15569_15683 = state_15567__$1;
(statearr_15569_15683[(2)] = null);

(statearr_15569_15683[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15568 === (2))){
var state_15567__$1 = state_15567;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15567__$1,(4),from);
} else {
if((state_val_15568 === (3))){
var inst_15565 = (state_15567[(2)]);
var state_15567__$1 = state_15567;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15567__$1,inst_15565);
} else {
if((state_val_15568 === (4))){
var inst_15548 = (state_15567[(7)]);
var inst_15548__$1 = (state_15567[(2)]);
var inst_15549 = (inst_15548__$1 == null);
var state_15567__$1 = (function (){var statearr_15570 = state_15567;
(statearr_15570[(7)] = inst_15548__$1);

return statearr_15570;
})();
if(cljs.core.truth_(inst_15549)){
var statearr_15571_15684 = state_15567__$1;
(statearr_15571_15684[(1)] = (5));

} else {
var statearr_15572_15685 = state_15567__$1;
(statearr_15572_15685[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15568 === (5))){
var inst_15551 = cljs.core.async.close_BANG_(jobs);
var state_15567__$1 = state_15567;
var statearr_15573_15686 = state_15567__$1;
(statearr_15573_15686[(2)] = inst_15551);

(statearr_15573_15686[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15568 === (6))){
var inst_15548 = (state_15567[(7)]);
var inst_15553 = (state_15567[(8)]);
var inst_15553__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_15554 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_15555 = [inst_15548,inst_15553__$1];
var inst_15556 = (new cljs.core.PersistentVector(null,2,(5),inst_15554,inst_15555,null));
var state_15567__$1 = (function (){var statearr_15574 = state_15567;
(statearr_15574[(8)] = inst_15553__$1);

return statearr_15574;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15567__$1,(8),jobs,inst_15556);
} else {
if((state_val_15568 === (7))){
var inst_15563 = (state_15567[(2)]);
var state_15567__$1 = state_15567;
var statearr_15575_15687 = state_15567__$1;
(statearr_15575_15687[(2)] = inst_15563);

(statearr_15575_15687[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15568 === (8))){
var inst_15553 = (state_15567[(8)]);
var inst_15558 = (state_15567[(2)]);
var state_15567__$1 = (function (){var statearr_15576 = state_15567;
(statearr_15576[(9)] = inst_15558);

return statearr_15576;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15567__$1,(9),results,inst_15553);
} else {
if((state_val_15568 === (9))){
var inst_15560 = (state_15567[(2)]);
var state_15567__$1 = (function (){var statearr_15577 = state_15567;
(statearr_15577[(10)] = inst_15560);

return statearr_15577;
})();
var statearr_15578_15688 = state_15567__$1;
(statearr_15578_15688[(2)] = null);

(statearr_15578_15688[(1)] = (2));


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
});})(c__8570__auto___15682,jobs,results,process,async))
;
return ((function (switch__8503__auto__,c__8570__auto___15682,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__8504__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__8504__auto____0 = (function (){
var statearr_15582 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_15582[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__8504__auto__);

(statearr_15582[(1)] = (1));

return statearr_15582;
});
var cljs$core$async$pipeline_STAR__$_state_machine__8504__auto____1 = (function (state_15567){
while(true){
var ret_value__8505__auto__ = (function (){try{while(true){
var result__8506__auto__ = switch__8503__auto__(state_15567);
if(cljs.core.keyword_identical_QMARK_(result__8506__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__8506__auto__;
}
break;
}
}catch (e15583){if((e15583 instanceof Object)){
var ex__8507__auto__ = e15583;
var statearr_15584_15689 = state_15567;
(statearr_15584_15689[(5)] = ex__8507__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_15567);

return cljs.core.cst$kw$recur;
} else {
throw e15583;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__8505__auto__,cljs.core.cst$kw$recur)){
var G__15690 = state_15567;
state_15567 = G__15690;
continue;
} else {
return ret_value__8505__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__8504__auto__ = function(state_15567){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__8504__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__8504__auto____1.call(this,state_15567);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__8504__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__8504__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__8504__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__8504__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__8504__auto__;
})()
;})(switch__8503__auto__,c__8570__auto___15682,jobs,results,process,async))
})();
var state__8572__auto__ = (function (){var statearr_15585 = (f__8571__auto__.cljs$core$IFn$_invoke$arity$0 ? f__8571__auto__.cljs$core$IFn$_invoke$arity$0() : f__8571__auto__.call(null));
(statearr_15585[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8570__auto___15682);

return statearr_15585;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__8572__auto__);
});})(c__8570__auto___15682,jobs,results,process,async))
);


var c__8570__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__8570__auto__,jobs,results,process,async){
return (function (){
var f__8571__auto__ = (function (){var switch__8503__auto__ = ((function (c__8570__auto__,jobs,results,process,async){
return (function (state_15623){
var state_val_15624 = (state_15623[(1)]);
if((state_val_15624 === (7))){
var inst_15619 = (state_15623[(2)]);
var state_15623__$1 = state_15623;
var statearr_15625_15691 = state_15623__$1;
(statearr_15625_15691[(2)] = inst_15619);

(statearr_15625_15691[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15624 === (20))){
var state_15623__$1 = state_15623;
var statearr_15626_15692 = state_15623__$1;
(statearr_15626_15692[(2)] = null);

(statearr_15626_15692[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15624 === (1))){
var state_15623__$1 = state_15623;
var statearr_15627_15693 = state_15623__$1;
(statearr_15627_15693[(2)] = null);

(statearr_15627_15693[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15624 === (4))){
var inst_15588 = (state_15623[(7)]);
var inst_15588__$1 = (state_15623[(2)]);
var inst_15589 = (inst_15588__$1 == null);
var state_15623__$1 = (function (){var statearr_15628 = state_15623;
(statearr_15628[(7)] = inst_15588__$1);

return statearr_15628;
})();
if(cljs.core.truth_(inst_15589)){
var statearr_15629_15694 = state_15623__$1;
(statearr_15629_15694[(1)] = (5));

} else {
var statearr_15630_15695 = state_15623__$1;
(statearr_15630_15695[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15624 === (15))){
var inst_15601 = (state_15623[(8)]);
var state_15623__$1 = state_15623;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15623__$1,(18),to,inst_15601);
} else {
if((state_val_15624 === (21))){
var inst_15614 = (state_15623[(2)]);
var state_15623__$1 = state_15623;
var statearr_15631_15696 = state_15623__$1;
(statearr_15631_15696[(2)] = inst_15614);

(statearr_15631_15696[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15624 === (13))){
var inst_15616 = (state_15623[(2)]);
var state_15623__$1 = (function (){var statearr_15632 = state_15623;
(statearr_15632[(9)] = inst_15616);

return statearr_15632;
})();
var statearr_15633_15697 = state_15623__$1;
(statearr_15633_15697[(2)] = null);

(statearr_15633_15697[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15624 === (6))){
var inst_15588 = (state_15623[(7)]);
var state_15623__$1 = state_15623;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15623__$1,(11),inst_15588);
} else {
if((state_val_15624 === (17))){
var inst_15609 = (state_15623[(2)]);
var state_15623__$1 = state_15623;
if(cljs.core.truth_(inst_15609)){
var statearr_15634_15698 = state_15623__$1;
(statearr_15634_15698[(1)] = (19));

} else {
var statearr_15635_15699 = state_15623__$1;
(statearr_15635_15699[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15624 === (3))){
var inst_15621 = (state_15623[(2)]);
var state_15623__$1 = state_15623;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15623__$1,inst_15621);
} else {
if((state_val_15624 === (12))){
var inst_15598 = (state_15623[(10)]);
var state_15623__$1 = state_15623;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15623__$1,(14),inst_15598);
} else {
if((state_val_15624 === (2))){
var state_15623__$1 = state_15623;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15623__$1,(4),results);
} else {
if((state_val_15624 === (19))){
var state_15623__$1 = state_15623;
var statearr_15636_15700 = state_15623__$1;
(statearr_15636_15700[(2)] = null);

(statearr_15636_15700[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15624 === (11))){
var inst_15598 = (state_15623[(2)]);
var state_15623__$1 = (function (){var statearr_15637 = state_15623;
(statearr_15637[(10)] = inst_15598);

return statearr_15637;
})();
var statearr_15638_15701 = state_15623__$1;
(statearr_15638_15701[(2)] = null);

(statearr_15638_15701[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15624 === (9))){
var state_15623__$1 = state_15623;
var statearr_15639_15702 = state_15623__$1;
(statearr_15639_15702[(2)] = null);

(statearr_15639_15702[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15624 === (5))){
var state_15623__$1 = state_15623;
if(cljs.core.truth_(close_QMARK_)){
var statearr_15640_15703 = state_15623__$1;
(statearr_15640_15703[(1)] = (8));

} else {
var statearr_15641_15704 = state_15623__$1;
(statearr_15641_15704[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15624 === (14))){
var inst_15603 = (state_15623[(11)]);
var inst_15601 = (state_15623[(8)]);
var inst_15601__$1 = (state_15623[(2)]);
var inst_15602 = (inst_15601__$1 == null);
var inst_15603__$1 = cljs.core.not(inst_15602);
var state_15623__$1 = (function (){var statearr_15642 = state_15623;
(statearr_15642[(11)] = inst_15603__$1);

(statearr_15642[(8)] = inst_15601__$1);

return statearr_15642;
})();
if(inst_15603__$1){
var statearr_15643_15705 = state_15623__$1;
(statearr_15643_15705[(1)] = (15));

} else {
var statearr_15644_15706 = state_15623__$1;
(statearr_15644_15706[(1)] = (16));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15624 === (16))){
var inst_15603 = (state_15623[(11)]);
var state_15623__$1 = state_15623;
var statearr_15645_15707 = state_15623__$1;
(statearr_15645_15707[(2)] = inst_15603);

(statearr_15645_15707[(1)] = (17));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15624 === (10))){
var inst_15595 = (state_15623[(2)]);
var state_15623__$1 = state_15623;
var statearr_15646_15708 = state_15623__$1;
(statearr_15646_15708[(2)] = inst_15595);

(statearr_15646_15708[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15624 === (18))){
var inst_15606 = (state_15623[(2)]);
var state_15623__$1 = state_15623;
var statearr_15647_15709 = state_15623__$1;
(statearr_15647_15709[(2)] = inst_15606);

(statearr_15647_15709[(1)] = (17));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15624 === (8))){
var inst_15592 = cljs.core.async.close_BANG_(to);
var state_15623__$1 = state_15623;
var statearr_15648_15710 = state_15623__$1;
(statearr_15648_15710[(2)] = inst_15592);

(statearr_15648_15710[(1)] = (10));


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
var statearr_15652 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15652[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__8504__auto__);

(statearr_15652[(1)] = (1));

return statearr_15652;
});
var cljs$core$async$pipeline_STAR__$_state_machine__8504__auto____1 = (function (state_15623){
while(true){
var ret_value__8505__auto__ = (function (){try{while(true){
var result__8506__auto__ = switch__8503__auto__(state_15623);
if(cljs.core.keyword_identical_QMARK_(result__8506__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__8506__auto__;
}
break;
}
}catch (e15653){if((e15653 instanceof Object)){
var ex__8507__auto__ = e15653;
var statearr_15654_15711 = state_15623;
(statearr_15654_15711[(5)] = ex__8507__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_15623);

return cljs.core.cst$kw$recur;
} else {
throw e15653;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__8505__auto__,cljs.core.cst$kw$recur)){
var G__15712 = state_15623;
state_15623 = G__15712;
continue;
} else {
return ret_value__8505__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__8504__auto__ = function(state_15623){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__8504__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__8504__auto____1.call(this,state_15623);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__8504__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__8504__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__8504__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__8504__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__8504__auto__;
})()
;})(switch__8503__auto__,c__8570__auto__,jobs,results,process,async))
})();
var state__8572__auto__ = (function (){var statearr_15655 = (f__8571__auto__.cljs$core$IFn$_invoke$arity$0 ? f__8571__auto__.cljs$core$IFn$_invoke$arity$0() : f__8571__auto__.call(null));
(statearr_15655[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8570__auto__);

return statearr_15655;
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
var args15713 = [];
var len__5619__auto___15716 = arguments.length;
var i__5620__auto___15717 = (0);
while(true){
if((i__5620__auto___15717 < len__5619__auto___15716)){
args15713.push((arguments[i__5620__auto___15717]));

var G__15718 = (i__5620__auto___15717 + (1));
i__5620__auto___15717 = G__15718;
continue;
} else {
}
break;
}

var G__15715 = args15713.length;
switch (G__15715) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15713.length)].join('')));

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
var args15720 = [];
var len__5619__auto___15723 = arguments.length;
var i__5620__auto___15724 = (0);
while(true){
if((i__5620__auto___15724 < len__5619__auto___15723)){
args15720.push((arguments[i__5620__auto___15724]));

var G__15725 = (i__5620__auto___15724 + (1));
i__5620__auto___15724 = G__15725;
continue;
} else {
}
break;
}

var G__15722 = args15720.length;
switch (G__15722) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15720.length)].join('')));

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
var args15727 = [];
var len__5619__auto___15780 = arguments.length;
var i__5620__auto___15781 = (0);
while(true){
if((i__5620__auto___15781 < len__5619__auto___15780)){
args15727.push((arguments[i__5620__auto___15781]));

var G__15782 = (i__5620__auto___15781 + (1));
i__5620__auto___15781 = G__15782;
continue;
} else {
}
break;
}

var G__15729 = args15727.length;
switch (G__15729) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15727.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__8570__auto___15784 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__8570__auto___15784,tc,fc){
return (function (){
var f__8571__auto__ = (function (){var switch__8503__auto__ = ((function (c__8570__auto___15784,tc,fc){
return (function (state_15755){
var state_val_15756 = (state_15755[(1)]);
if((state_val_15756 === (7))){
var inst_15751 = (state_15755[(2)]);
var state_15755__$1 = state_15755;
var statearr_15757_15785 = state_15755__$1;
(statearr_15757_15785[(2)] = inst_15751);

(statearr_15757_15785[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15756 === (1))){
var state_15755__$1 = state_15755;
var statearr_15758_15786 = state_15755__$1;
(statearr_15758_15786[(2)] = null);

(statearr_15758_15786[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15756 === (4))){
var inst_15732 = (state_15755[(7)]);
var inst_15732__$1 = (state_15755[(2)]);
var inst_15733 = (inst_15732__$1 == null);
var state_15755__$1 = (function (){var statearr_15759 = state_15755;
(statearr_15759[(7)] = inst_15732__$1);

return statearr_15759;
})();
if(cljs.core.truth_(inst_15733)){
var statearr_15760_15787 = state_15755__$1;
(statearr_15760_15787[(1)] = (5));

} else {
var statearr_15761_15788 = state_15755__$1;
(statearr_15761_15788[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15756 === (13))){
var state_15755__$1 = state_15755;
var statearr_15762_15789 = state_15755__$1;
(statearr_15762_15789[(2)] = null);

(statearr_15762_15789[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15756 === (6))){
var inst_15732 = (state_15755[(7)]);
var inst_15738 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_15732) : p.call(null,inst_15732));
var state_15755__$1 = state_15755;
if(cljs.core.truth_(inst_15738)){
var statearr_15763_15790 = state_15755__$1;
(statearr_15763_15790[(1)] = (9));

} else {
var statearr_15764_15791 = state_15755__$1;
(statearr_15764_15791[(1)] = (10));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15756 === (3))){
var inst_15753 = (state_15755[(2)]);
var state_15755__$1 = state_15755;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15755__$1,inst_15753);
} else {
if((state_val_15756 === (12))){
var state_15755__$1 = state_15755;
var statearr_15765_15792 = state_15755__$1;
(statearr_15765_15792[(2)] = null);

(statearr_15765_15792[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15756 === (2))){
var state_15755__$1 = state_15755;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15755__$1,(4),ch);
} else {
if((state_val_15756 === (11))){
var inst_15732 = (state_15755[(7)]);
var inst_15742 = (state_15755[(2)]);
var state_15755__$1 = state_15755;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15755__$1,(8),inst_15742,inst_15732);
} else {
if((state_val_15756 === (9))){
var state_15755__$1 = state_15755;
var statearr_15766_15793 = state_15755__$1;
(statearr_15766_15793[(2)] = tc);

(statearr_15766_15793[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15756 === (5))){
var inst_15735 = cljs.core.async.close_BANG_(tc);
var inst_15736 = cljs.core.async.close_BANG_(fc);
var state_15755__$1 = (function (){var statearr_15767 = state_15755;
(statearr_15767[(8)] = inst_15735);

return statearr_15767;
})();
var statearr_15768_15794 = state_15755__$1;
(statearr_15768_15794[(2)] = inst_15736);

(statearr_15768_15794[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15756 === (14))){
var inst_15749 = (state_15755[(2)]);
var state_15755__$1 = state_15755;
var statearr_15769_15795 = state_15755__$1;
(statearr_15769_15795[(2)] = inst_15749);

(statearr_15769_15795[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15756 === (10))){
var state_15755__$1 = state_15755;
var statearr_15770_15796 = state_15755__$1;
(statearr_15770_15796[(2)] = fc);

(statearr_15770_15796[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15756 === (8))){
var inst_15744 = (state_15755[(2)]);
var state_15755__$1 = state_15755;
if(cljs.core.truth_(inst_15744)){
var statearr_15771_15797 = state_15755__$1;
(statearr_15771_15797[(1)] = (12));

} else {
var statearr_15772_15798 = state_15755__$1;
(statearr_15772_15798[(1)] = (13));

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
});})(c__8570__auto___15784,tc,fc))
;
return ((function (switch__8503__auto__,c__8570__auto___15784,tc,fc){
return (function() {
var cljs$core$async$state_machine__8504__auto__ = null;
var cljs$core$async$state_machine__8504__auto____0 = (function (){
var statearr_15776 = [null,null,null,null,null,null,null,null,null];
(statearr_15776[(0)] = cljs$core$async$state_machine__8504__auto__);

(statearr_15776[(1)] = (1));

return statearr_15776;
});
var cljs$core$async$state_machine__8504__auto____1 = (function (state_15755){
while(true){
var ret_value__8505__auto__ = (function (){try{while(true){
var result__8506__auto__ = switch__8503__auto__(state_15755);
if(cljs.core.keyword_identical_QMARK_(result__8506__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__8506__auto__;
}
break;
}
}catch (e15777){if((e15777 instanceof Object)){
var ex__8507__auto__ = e15777;
var statearr_15778_15799 = state_15755;
(statearr_15778_15799[(5)] = ex__8507__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_15755);

return cljs.core.cst$kw$recur;
} else {
throw e15777;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__8505__auto__,cljs.core.cst$kw$recur)){
var G__15800 = state_15755;
state_15755 = G__15800;
continue;
} else {
return ret_value__8505__auto__;
}
break;
}
});
cljs$core$async$state_machine__8504__auto__ = function(state_15755){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__8504__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__8504__auto____1.call(this,state_15755);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__8504__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__8504__auto____0;
cljs$core$async$state_machine__8504__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__8504__auto____1;
return cljs$core$async$state_machine__8504__auto__;
})()
;})(switch__8503__auto__,c__8570__auto___15784,tc,fc))
})();
var state__8572__auto__ = (function (){var statearr_15779 = (f__8571__auto__.cljs$core$IFn$_invoke$arity$0 ? f__8571__auto__.cljs$core$IFn$_invoke$arity$0() : f__8571__auto__.call(null));
(statearr_15779[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8570__auto___15784);

return statearr_15779;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__8572__auto__);
});})(c__8570__auto___15784,tc,fc))
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
return (function (state_15864){
var state_val_15865 = (state_15864[(1)]);
if((state_val_15865 === (7))){
var inst_15860 = (state_15864[(2)]);
var state_15864__$1 = state_15864;
var statearr_15866_15887 = state_15864__$1;
(statearr_15866_15887[(2)] = inst_15860);

(statearr_15866_15887[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15865 === (1))){
var inst_15844 = init;
var state_15864__$1 = (function (){var statearr_15867 = state_15864;
(statearr_15867[(7)] = inst_15844);

return statearr_15867;
})();
var statearr_15868_15888 = state_15864__$1;
(statearr_15868_15888[(2)] = null);

(statearr_15868_15888[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15865 === (4))){
var inst_15847 = (state_15864[(8)]);
var inst_15847__$1 = (state_15864[(2)]);
var inst_15848 = (inst_15847__$1 == null);
var state_15864__$1 = (function (){var statearr_15869 = state_15864;
(statearr_15869[(8)] = inst_15847__$1);

return statearr_15869;
})();
if(cljs.core.truth_(inst_15848)){
var statearr_15870_15889 = state_15864__$1;
(statearr_15870_15889[(1)] = (5));

} else {
var statearr_15871_15890 = state_15864__$1;
(statearr_15871_15890[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15865 === (6))){
var inst_15851 = (state_15864[(9)]);
var inst_15847 = (state_15864[(8)]);
var inst_15844 = (state_15864[(7)]);
var inst_15851__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_15844,inst_15847) : f.call(null,inst_15844,inst_15847));
var inst_15852 = cljs.core.reduced_QMARK_(inst_15851__$1);
var state_15864__$1 = (function (){var statearr_15872 = state_15864;
(statearr_15872[(9)] = inst_15851__$1);

return statearr_15872;
})();
if(inst_15852){
var statearr_15873_15891 = state_15864__$1;
(statearr_15873_15891[(1)] = (8));

} else {
var statearr_15874_15892 = state_15864__$1;
(statearr_15874_15892[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15865 === (3))){
var inst_15862 = (state_15864[(2)]);
var state_15864__$1 = state_15864;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15864__$1,inst_15862);
} else {
if((state_val_15865 === (2))){
var state_15864__$1 = state_15864;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15864__$1,(4),ch);
} else {
if((state_val_15865 === (9))){
var inst_15851 = (state_15864[(9)]);
var inst_15844 = inst_15851;
var state_15864__$1 = (function (){var statearr_15875 = state_15864;
(statearr_15875[(7)] = inst_15844);

return statearr_15875;
})();
var statearr_15876_15893 = state_15864__$1;
(statearr_15876_15893[(2)] = null);

(statearr_15876_15893[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15865 === (5))){
var inst_15844 = (state_15864[(7)]);
var state_15864__$1 = state_15864;
var statearr_15877_15894 = state_15864__$1;
(statearr_15877_15894[(2)] = inst_15844);

(statearr_15877_15894[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15865 === (10))){
var inst_15858 = (state_15864[(2)]);
var state_15864__$1 = state_15864;
var statearr_15878_15895 = state_15864__$1;
(statearr_15878_15895[(2)] = inst_15858);

(statearr_15878_15895[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15865 === (8))){
var inst_15851 = (state_15864[(9)]);
var inst_15854 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(inst_15851) : cljs.core.deref.call(null,inst_15851));
var state_15864__$1 = state_15864;
var statearr_15879_15896 = state_15864__$1;
(statearr_15879_15896[(2)] = inst_15854);

(statearr_15879_15896[(1)] = (10));


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
var statearr_15883 = [null,null,null,null,null,null,null,null,null,null];
(statearr_15883[(0)] = cljs$core$async$reduce_$_state_machine__8504__auto__);

(statearr_15883[(1)] = (1));

return statearr_15883;
});
var cljs$core$async$reduce_$_state_machine__8504__auto____1 = (function (state_15864){
while(true){
var ret_value__8505__auto__ = (function (){try{while(true){
var result__8506__auto__ = switch__8503__auto__(state_15864);
if(cljs.core.keyword_identical_QMARK_(result__8506__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__8506__auto__;
}
break;
}
}catch (e15884){if((e15884 instanceof Object)){
var ex__8507__auto__ = e15884;
var statearr_15885_15897 = state_15864;
(statearr_15885_15897[(5)] = ex__8507__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_15864);

return cljs.core.cst$kw$recur;
} else {
throw e15884;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__8505__auto__,cljs.core.cst$kw$recur)){
var G__15898 = state_15864;
state_15864 = G__15898;
continue;
} else {
return ret_value__8505__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__8504__auto__ = function(state_15864){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__8504__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__8504__auto____1.call(this,state_15864);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__8504__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__8504__auto____0;
cljs$core$async$reduce_$_state_machine__8504__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__8504__auto____1;
return cljs$core$async$reduce_$_state_machine__8504__auto__;
})()
;})(switch__8503__auto__,c__8570__auto__))
})();
var state__8572__auto__ = (function (){var statearr_15886 = (f__8571__auto__.cljs$core$IFn$_invoke$arity$0 ? f__8571__auto__.cljs$core$IFn$_invoke$arity$0() : f__8571__auto__.call(null));
(statearr_15886[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8570__auto__);

return statearr_15886;
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
var args15899 = [];
var len__5619__auto___15951 = arguments.length;
var i__5620__auto___15952 = (0);
while(true){
if((i__5620__auto___15952 < len__5619__auto___15951)){
args15899.push((arguments[i__5620__auto___15952]));

var G__15953 = (i__5620__auto___15952 + (1));
i__5620__auto___15952 = G__15953;
continue;
} else {
}
break;
}

var G__15901 = args15899.length;
switch (G__15901) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15899.length)].join('')));

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
return (function (state_15926){
var state_val_15927 = (state_15926[(1)]);
if((state_val_15927 === (7))){
var inst_15908 = (state_15926[(2)]);
var state_15926__$1 = state_15926;
var statearr_15928_15955 = state_15926__$1;
(statearr_15928_15955[(2)] = inst_15908);

(statearr_15928_15955[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15927 === (1))){
var inst_15902 = cljs.core.seq(coll);
var inst_15903 = inst_15902;
var state_15926__$1 = (function (){var statearr_15929 = state_15926;
(statearr_15929[(7)] = inst_15903);

return statearr_15929;
})();
var statearr_15930_15956 = state_15926__$1;
(statearr_15930_15956[(2)] = null);

(statearr_15930_15956[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15927 === (4))){
var inst_15903 = (state_15926[(7)]);
var inst_15906 = cljs.core.first(inst_15903);
var state_15926__$1 = state_15926;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15926__$1,(7),ch,inst_15906);
} else {
if((state_val_15927 === (13))){
var inst_15920 = (state_15926[(2)]);
var state_15926__$1 = state_15926;
var statearr_15931_15957 = state_15926__$1;
(statearr_15931_15957[(2)] = inst_15920);

(statearr_15931_15957[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15927 === (6))){
var inst_15911 = (state_15926[(2)]);
var state_15926__$1 = state_15926;
if(cljs.core.truth_(inst_15911)){
var statearr_15932_15958 = state_15926__$1;
(statearr_15932_15958[(1)] = (8));

} else {
var statearr_15933_15959 = state_15926__$1;
(statearr_15933_15959[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15927 === (3))){
var inst_15924 = (state_15926[(2)]);
var state_15926__$1 = state_15926;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15926__$1,inst_15924);
} else {
if((state_val_15927 === (12))){
var state_15926__$1 = state_15926;
var statearr_15934_15960 = state_15926__$1;
(statearr_15934_15960[(2)] = null);

(statearr_15934_15960[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15927 === (2))){
var inst_15903 = (state_15926[(7)]);
var state_15926__$1 = state_15926;
if(cljs.core.truth_(inst_15903)){
var statearr_15935_15961 = state_15926__$1;
(statearr_15935_15961[(1)] = (4));

} else {
var statearr_15936_15962 = state_15926__$1;
(statearr_15936_15962[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15927 === (11))){
var inst_15917 = cljs.core.async.close_BANG_(ch);
var state_15926__$1 = state_15926;
var statearr_15937_15963 = state_15926__$1;
(statearr_15937_15963[(2)] = inst_15917);

(statearr_15937_15963[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15927 === (9))){
var state_15926__$1 = state_15926;
if(cljs.core.truth_(close_QMARK_)){
var statearr_15938_15964 = state_15926__$1;
(statearr_15938_15964[(1)] = (11));

} else {
var statearr_15939_15965 = state_15926__$1;
(statearr_15939_15965[(1)] = (12));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15927 === (5))){
var inst_15903 = (state_15926[(7)]);
var state_15926__$1 = state_15926;
var statearr_15940_15966 = state_15926__$1;
(statearr_15940_15966[(2)] = inst_15903);

(statearr_15940_15966[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15927 === (10))){
var inst_15922 = (state_15926[(2)]);
var state_15926__$1 = state_15926;
var statearr_15941_15967 = state_15926__$1;
(statearr_15941_15967[(2)] = inst_15922);

(statearr_15941_15967[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15927 === (8))){
var inst_15903 = (state_15926[(7)]);
var inst_15913 = cljs.core.next(inst_15903);
var inst_15903__$1 = inst_15913;
var state_15926__$1 = (function (){var statearr_15942 = state_15926;
(statearr_15942[(7)] = inst_15903__$1);

return statearr_15942;
})();
var statearr_15943_15968 = state_15926__$1;
(statearr_15943_15968[(2)] = null);

(statearr_15943_15968[(1)] = (2));


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
var statearr_15947 = [null,null,null,null,null,null,null,null];
(statearr_15947[(0)] = cljs$core$async$state_machine__8504__auto__);

(statearr_15947[(1)] = (1));

return statearr_15947;
});
var cljs$core$async$state_machine__8504__auto____1 = (function (state_15926){
while(true){
var ret_value__8505__auto__ = (function (){try{while(true){
var result__8506__auto__ = switch__8503__auto__(state_15926);
if(cljs.core.keyword_identical_QMARK_(result__8506__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__8506__auto__;
}
break;
}
}catch (e15948){if((e15948 instanceof Object)){
var ex__8507__auto__ = e15948;
var statearr_15949_15969 = state_15926;
(statearr_15949_15969[(5)] = ex__8507__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_15926);

return cljs.core.cst$kw$recur;
} else {
throw e15948;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__8505__auto__,cljs.core.cst$kw$recur)){
var G__15970 = state_15926;
state_15926 = G__15970;
continue;
} else {
return ret_value__8505__auto__;
}
break;
}
});
cljs$core$async$state_machine__8504__auto__ = function(state_15926){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__8504__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__8504__auto____1.call(this,state_15926);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__8504__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__8504__auto____0;
cljs$core$async$state_machine__8504__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__8504__auto____1;
return cljs$core$async$state_machine__8504__auto__;
})()
;})(switch__8503__auto__,c__8570__auto__))
})();
var state__8572__auto__ = (function (){var statearr_15950 = (f__8571__auto__.cljs$core$IFn$_invoke$arity$0 ? f__8571__auto__.cljs$core$IFn$_invoke$arity$0() : f__8571__auto__.call(null));
(statearr_15950[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8570__auto__);

return statearr_15950;
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
var cs = (function (){var G__16195 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__16195) : cljs.core.atom.call(null,G__16195));
})();
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async16196 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16196 = (function (mult,ch,cs,meta16197){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta16197 = meta16197;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async16196.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_16198,meta16197__$1){
var self__ = this;
var _16198__$1 = this;
return (new cljs.core.async.t_cljs$core$async16196(self__.mult,self__.ch,self__.cs,meta16197__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async16196.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_16198){
var self__ = this;
var _16198__$1 = this;
return self__.meta16197;
});})(cs))
;

cljs.core.async.t_cljs$core$async16196.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async16196.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async16196.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async16196.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async16196.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async16196.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__16199_16419 = self__.cs;
var G__16200_16420 = cljs.core.PersistentArrayMap.EMPTY;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__16199_16419,G__16200_16420) : cljs.core.reset_BANG_.call(null,G__16199_16419,G__16200_16420));

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async16196.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$mult,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$ch], null))),cljs.core.cst$kw$doc,"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),cljs.core.cst$sym$ch,cljs.core.cst$sym$cs,cljs.core.cst$sym$meta16197], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async16196.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async16196.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16196";

cljs.core.async.t_cljs$core$async16196.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__5159__auto__,writer__5160__auto__,opt__5161__auto__){
return cljs.core._write(writer__5160__auto__,"cljs.core.async/t_cljs$core$async16196");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async16196 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async16196(mult__$1,ch__$1,cs__$1,meta16197){
return (new cljs.core.async.t_cljs$core$async16196(mult__$1,ch__$1,cs__$1,meta16197));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async16196(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__8570__auto___16421 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__8570__auto___16421,cs,m,dchan,dctr,done){
return (function (){
var f__8571__auto__ = (function (){var switch__8503__auto__ = ((function (c__8570__auto___16421,cs,m,dchan,dctr,done){
return (function (state_16331){
var state_val_16332 = (state_16331[(1)]);
if((state_val_16332 === (7))){
var inst_16327 = (state_16331[(2)]);
var state_16331__$1 = state_16331;
var statearr_16333_16422 = state_16331__$1;
(statearr_16333_16422[(2)] = inst_16327);

(statearr_16333_16422[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16332 === (20))){
var inst_16232 = (state_16331[(7)]);
var inst_16242 = cljs.core.first(inst_16232);
var inst_16243 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16242,(0),null);
var inst_16244 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16242,(1),null);
var state_16331__$1 = (function (){var statearr_16334 = state_16331;
(statearr_16334[(8)] = inst_16243);

return statearr_16334;
})();
if(cljs.core.truth_(inst_16244)){
var statearr_16335_16423 = state_16331__$1;
(statearr_16335_16423[(1)] = (22));

} else {
var statearr_16336_16424 = state_16331__$1;
(statearr_16336_16424[(1)] = (23));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16332 === (27))){
var inst_16272 = (state_16331[(9)]);
var inst_16279 = (state_16331[(10)]);
var inst_16274 = (state_16331[(11)]);
var inst_16203 = (state_16331[(12)]);
var inst_16279__$1 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_16272,inst_16274);
var inst_16280 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_16279__$1,inst_16203,done);
var state_16331__$1 = (function (){var statearr_16337 = state_16331;
(statearr_16337[(10)] = inst_16279__$1);

return statearr_16337;
})();
if(cljs.core.truth_(inst_16280)){
var statearr_16338_16425 = state_16331__$1;
(statearr_16338_16425[(1)] = (30));

} else {
var statearr_16339_16426 = state_16331__$1;
(statearr_16339_16426[(1)] = (31));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16332 === (1))){
var state_16331__$1 = state_16331;
var statearr_16340_16427 = state_16331__$1;
(statearr_16340_16427[(2)] = null);

(statearr_16340_16427[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16332 === (24))){
var inst_16232 = (state_16331[(7)]);
var inst_16249 = (state_16331[(2)]);
var inst_16250 = cljs.core.next(inst_16232);
var inst_16212 = inst_16250;
var inst_16213 = null;
var inst_16214 = (0);
var inst_16215 = (0);
var state_16331__$1 = (function (){var statearr_16341 = state_16331;
(statearr_16341[(13)] = inst_16212);

(statearr_16341[(14)] = inst_16215);

(statearr_16341[(15)] = inst_16213);

(statearr_16341[(16)] = inst_16214);

(statearr_16341[(17)] = inst_16249);

return statearr_16341;
})();
var statearr_16342_16428 = state_16331__$1;
(statearr_16342_16428[(2)] = null);

(statearr_16342_16428[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16332 === (39))){
var state_16331__$1 = state_16331;
var statearr_16346_16429 = state_16331__$1;
(statearr_16346_16429[(2)] = null);

(statearr_16346_16429[(1)] = (41));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16332 === (4))){
var inst_16203 = (state_16331[(12)]);
var inst_16203__$1 = (state_16331[(2)]);
var inst_16204 = (inst_16203__$1 == null);
var state_16331__$1 = (function (){var statearr_16347 = state_16331;
(statearr_16347[(12)] = inst_16203__$1);

return statearr_16347;
})();
if(cljs.core.truth_(inst_16204)){
var statearr_16348_16430 = state_16331__$1;
(statearr_16348_16430[(1)] = (5));

} else {
var statearr_16349_16431 = state_16331__$1;
(statearr_16349_16431[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16332 === (15))){
var inst_16212 = (state_16331[(13)]);
var inst_16215 = (state_16331[(14)]);
var inst_16213 = (state_16331[(15)]);
var inst_16214 = (state_16331[(16)]);
var inst_16228 = (state_16331[(2)]);
var inst_16229 = (inst_16215 + (1));
var tmp16343 = inst_16212;
var tmp16344 = inst_16213;
var tmp16345 = inst_16214;
var inst_16212__$1 = tmp16343;
var inst_16213__$1 = tmp16344;
var inst_16214__$1 = tmp16345;
var inst_16215__$1 = inst_16229;
var state_16331__$1 = (function (){var statearr_16350 = state_16331;
(statearr_16350[(13)] = inst_16212__$1);

(statearr_16350[(14)] = inst_16215__$1);

(statearr_16350[(15)] = inst_16213__$1);

(statearr_16350[(18)] = inst_16228);

(statearr_16350[(16)] = inst_16214__$1);

return statearr_16350;
})();
var statearr_16351_16432 = state_16331__$1;
(statearr_16351_16432[(2)] = null);

(statearr_16351_16432[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16332 === (21))){
var inst_16253 = (state_16331[(2)]);
var state_16331__$1 = state_16331;
var statearr_16355_16433 = state_16331__$1;
(statearr_16355_16433[(2)] = inst_16253);

(statearr_16355_16433[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16332 === (31))){
var inst_16279 = (state_16331[(10)]);
var inst_16283 = done(null);
var inst_16284 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_16279);
var state_16331__$1 = (function (){var statearr_16356 = state_16331;
(statearr_16356[(19)] = inst_16283);

return statearr_16356;
})();
var statearr_16357_16434 = state_16331__$1;
(statearr_16357_16434[(2)] = inst_16284);

(statearr_16357_16434[(1)] = (32));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16332 === (32))){
var inst_16272 = (state_16331[(9)]);
var inst_16271 = (state_16331[(20)]);
var inst_16273 = (state_16331[(21)]);
var inst_16274 = (state_16331[(11)]);
var inst_16286 = (state_16331[(2)]);
var inst_16287 = (inst_16274 + (1));
var tmp16352 = inst_16272;
var tmp16353 = inst_16271;
var tmp16354 = inst_16273;
var inst_16271__$1 = tmp16353;
var inst_16272__$1 = tmp16352;
var inst_16273__$1 = tmp16354;
var inst_16274__$1 = inst_16287;
var state_16331__$1 = (function (){var statearr_16358 = state_16331;
(statearr_16358[(9)] = inst_16272__$1);

(statearr_16358[(22)] = inst_16286);

(statearr_16358[(20)] = inst_16271__$1);

(statearr_16358[(21)] = inst_16273__$1);

(statearr_16358[(11)] = inst_16274__$1);

return statearr_16358;
})();
var statearr_16359_16435 = state_16331__$1;
(statearr_16359_16435[(2)] = null);

(statearr_16359_16435[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16332 === (40))){
var inst_16299 = (state_16331[(23)]);
var inst_16303 = done(null);
var inst_16304 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_16299);
var state_16331__$1 = (function (){var statearr_16360 = state_16331;
(statearr_16360[(24)] = inst_16303);

return statearr_16360;
})();
var statearr_16361_16436 = state_16331__$1;
(statearr_16361_16436[(2)] = inst_16304);

(statearr_16361_16436[(1)] = (41));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16332 === (33))){
var inst_16290 = (state_16331[(25)]);
var inst_16292 = cljs.core.chunked_seq_QMARK_(inst_16290);
var state_16331__$1 = state_16331;
if(inst_16292){
var statearr_16362_16437 = state_16331__$1;
(statearr_16362_16437[(1)] = (36));

} else {
var statearr_16363_16438 = state_16331__$1;
(statearr_16363_16438[(1)] = (37));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16332 === (13))){
var inst_16222 = (state_16331[(26)]);
var inst_16225 = cljs.core.async.close_BANG_(inst_16222);
var state_16331__$1 = state_16331;
var statearr_16364_16439 = state_16331__$1;
(statearr_16364_16439[(2)] = inst_16225);

(statearr_16364_16439[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16332 === (22))){
var inst_16243 = (state_16331[(8)]);
var inst_16246 = cljs.core.async.close_BANG_(inst_16243);
var state_16331__$1 = state_16331;
var statearr_16365_16440 = state_16331__$1;
(statearr_16365_16440[(2)] = inst_16246);

(statearr_16365_16440[(1)] = (24));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16332 === (36))){
var inst_16290 = (state_16331[(25)]);
var inst_16294 = cljs.core.chunk_first(inst_16290);
var inst_16295 = cljs.core.chunk_rest(inst_16290);
var inst_16296 = cljs.core.count(inst_16294);
var inst_16271 = inst_16295;
var inst_16272 = inst_16294;
var inst_16273 = inst_16296;
var inst_16274 = (0);
var state_16331__$1 = (function (){var statearr_16366 = state_16331;
(statearr_16366[(9)] = inst_16272);

(statearr_16366[(20)] = inst_16271);

(statearr_16366[(21)] = inst_16273);

(statearr_16366[(11)] = inst_16274);

return statearr_16366;
})();
var statearr_16367_16441 = state_16331__$1;
(statearr_16367_16441[(2)] = null);

(statearr_16367_16441[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16332 === (41))){
var inst_16290 = (state_16331[(25)]);
var inst_16306 = (state_16331[(2)]);
var inst_16307 = cljs.core.next(inst_16290);
var inst_16271 = inst_16307;
var inst_16272 = null;
var inst_16273 = (0);
var inst_16274 = (0);
var state_16331__$1 = (function (){var statearr_16368 = state_16331;
(statearr_16368[(9)] = inst_16272);

(statearr_16368[(20)] = inst_16271);

(statearr_16368[(21)] = inst_16273);

(statearr_16368[(11)] = inst_16274);

(statearr_16368[(27)] = inst_16306);

return statearr_16368;
})();
var statearr_16369_16442 = state_16331__$1;
(statearr_16369_16442[(2)] = null);

(statearr_16369_16442[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16332 === (43))){
var state_16331__$1 = state_16331;
var statearr_16370_16443 = state_16331__$1;
(statearr_16370_16443[(2)] = null);

(statearr_16370_16443[(1)] = (44));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16332 === (29))){
var inst_16315 = (state_16331[(2)]);
var state_16331__$1 = state_16331;
var statearr_16371_16444 = state_16331__$1;
(statearr_16371_16444[(2)] = inst_16315);

(statearr_16371_16444[(1)] = (26));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16332 === (44))){
var inst_16324 = (state_16331[(2)]);
var state_16331__$1 = (function (){var statearr_16372 = state_16331;
(statearr_16372[(28)] = inst_16324);

return statearr_16372;
})();
var statearr_16373_16445 = state_16331__$1;
(statearr_16373_16445[(2)] = null);

(statearr_16373_16445[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16332 === (6))){
var inst_16263 = (state_16331[(29)]);
var inst_16262 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cs) : cljs.core.deref.call(null,cs));
var inst_16263__$1 = cljs.core.keys(inst_16262);
var inst_16264 = cljs.core.count(inst_16263__$1);
var inst_16265 = (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,inst_16264) : cljs.core.reset_BANG_.call(null,dctr,inst_16264));
var inst_16270 = cljs.core.seq(inst_16263__$1);
var inst_16271 = inst_16270;
var inst_16272 = null;
var inst_16273 = (0);
var inst_16274 = (0);
var state_16331__$1 = (function (){var statearr_16374 = state_16331;
(statearr_16374[(9)] = inst_16272);

(statearr_16374[(30)] = inst_16265);

(statearr_16374[(20)] = inst_16271);

(statearr_16374[(21)] = inst_16273);

(statearr_16374[(29)] = inst_16263__$1);

(statearr_16374[(11)] = inst_16274);

return statearr_16374;
})();
var statearr_16375_16446 = state_16331__$1;
(statearr_16375_16446[(2)] = null);

(statearr_16375_16446[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16332 === (28))){
var inst_16271 = (state_16331[(20)]);
var inst_16290 = (state_16331[(25)]);
var inst_16290__$1 = cljs.core.seq(inst_16271);
var state_16331__$1 = (function (){var statearr_16376 = state_16331;
(statearr_16376[(25)] = inst_16290__$1);

return statearr_16376;
})();
if(inst_16290__$1){
var statearr_16377_16447 = state_16331__$1;
(statearr_16377_16447[(1)] = (33));

} else {
var statearr_16378_16448 = state_16331__$1;
(statearr_16378_16448[(1)] = (34));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16332 === (25))){
var inst_16273 = (state_16331[(21)]);
var inst_16274 = (state_16331[(11)]);
var inst_16276 = (inst_16274 < inst_16273);
var inst_16277 = inst_16276;
var state_16331__$1 = state_16331;
if(cljs.core.truth_(inst_16277)){
var statearr_16379_16449 = state_16331__$1;
(statearr_16379_16449[(1)] = (27));

} else {
var statearr_16380_16450 = state_16331__$1;
(statearr_16380_16450[(1)] = (28));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16332 === (34))){
var state_16331__$1 = state_16331;
var statearr_16381_16451 = state_16331__$1;
(statearr_16381_16451[(2)] = null);

(statearr_16381_16451[(1)] = (35));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16332 === (17))){
var state_16331__$1 = state_16331;
var statearr_16382_16452 = state_16331__$1;
(statearr_16382_16452[(2)] = null);

(statearr_16382_16452[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16332 === (3))){
var inst_16329 = (state_16331[(2)]);
var state_16331__$1 = state_16331;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16331__$1,inst_16329);
} else {
if((state_val_16332 === (12))){
var inst_16258 = (state_16331[(2)]);
var state_16331__$1 = state_16331;
var statearr_16383_16453 = state_16331__$1;
(statearr_16383_16453[(2)] = inst_16258);

(statearr_16383_16453[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16332 === (2))){
var state_16331__$1 = state_16331;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16331__$1,(4),ch);
} else {
if((state_val_16332 === (23))){
var state_16331__$1 = state_16331;
var statearr_16384_16454 = state_16331__$1;
(statearr_16384_16454[(2)] = null);

(statearr_16384_16454[(1)] = (24));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16332 === (35))){
var inst_16313 = (state_16331[(2)]);
var state_16331__$1 = state_16331;
var statearr_16385_16455 = state_16331__$1;
(statearr_16385_16455[(2)] = inst_16313);

(statearr_16385_16455[(1)] = (29));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16332 === (19))){
var inst_16232 = (state_16331[(7)]);
var inst_16236 = cljs.core.chunk_first(inst_16232);
var inst_16237 = cljs.core.chunk_rest(inst_16232);
var inst_16238 = cljs.core.count(inst_16236);
var inst_16212 = inst_16237;
var inst_16213 = inst_16236;
var inst_16214 = inst_16238;
var inst_16215 = (0);
var state_16331__$1 = (function (){var statearr_16386 = state_16331;
(statearr_16386[(13)] = inst_16212);

(statearr_16386[(14)] = inst_16215);

(statearr_16386[(15)] = inst_16213);

(statearr_16386[(16)] = inst_16214);

return statearr_16386;
})();
var statearr_16387_16456 = state_16331__$1;
(statearr_16387_16456[(2)] = null);

(statearr_16387_16456[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16332 === (11))){
var inst_16212 = (state_16331[(13)]);
var inst_16232 = (state_16331[(7)]);
var inst_16232__$1 = cljs.core.seq(inst_16212);
var state_16331__$1 = (function (){var statearr_16388 = state_16331;
(statearr_16388[(7)] = inst_16232__$1);

return statearr_16388;
})();
if(inst_16232__$1){
var statearr_16389_16457 = state_16331__$1;
(statearr_16389_16457[(1)] = (16));

} else {
var statearr_16390_16458 = state_16331__$1;
(statearr_16390_16458[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16332 === (9))){
var inst_16260 = (state_16331[(2)]);
var state_16331__$1 = state_16331;
var statearr_16391_16459 = state_16331__$1;
(statearr_16391_16459[(2)] = inst_16260);

(statearr_16391_16459[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16332 === (5))){
var inst_16210 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cs) : cljs.core.deref.call(null,cs));
var inst_16211 = cljs.core.seq(inst_16210);
var inst_16212 = inst_16211;
var inst_16213 = null;
var inst_16214 = (0);
var inst_16215 = (0);
var state_16331__$1 = (function (){var statearr_16392 = state_16331;
(statearr_16392[(13)] = inst_16212);

(statearr_16392[(14)] = inst_16215);

(statearr_16392[(15)] = inst_16213);

(statearr_16392[(16)] = inst_16214);

return statearr_16392;
})();
var statearr_16393_16460 = state_16331__$1;
(statearr_16393_16460[(2)] = null);

(statearr_16393_16460[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16332 === (14))){
var state_16331__$1 = state_16331;
var statearr_16394_16461 = state_16331__$1;
(statearr_16394_16461[(2)] = null);

(statearr_16394_16461[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16332 === (45))){
var inst_16321 = (state_16331[(2)]);
var state_16331__$1 = state_16331;
var statearr_16395_16462 = state_16331__$1;
(statearr_16395_16462[(2)] = inst_16321);

(statearr_16395_16462[(1)] = (44));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16332 === (26))){
var inst_16263 = (state_16331[(29)]);
var inst_16317 = (state_16331[(2)]);
var inst_16318 = cljs.core.seq(inst_16263);
var state_16331__$1 = (function (){var statearr_16396 = state_16331;
(statearr_16396[(31)] = inst_16317);

return statearr_16396;
})();
if(inst_16318){
var statearr_16397_16463 = state_16331__$1;
(statearr_16397_16463[(1)] = (42));

} else {
var statearr_16398_16464 = state_16331__$1;
(statearr_16398_16464[(1)] = (43));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16332 === (16))){
var inst_16232 = (state_16331[(7)]);
var inst_16234 = cljs.core.chunked_seq_QMARK_(inst_16232);
var state_16331__$1 = state_16331;
if(inst_16234){
var statearr_16399_16465 = state_16331__$1;
(statearr_16399_16465[(1)] = (19));

} else {
var statearr_16400_16466 = state_16331__$1;
(statearr_16400_16466[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16332 === (38))){
var inst_16310 = (state_16331[(2)]);
var state_16331__$1 = state_16331;
var statearr_16401_16467 = state_16331__$1;
(statearr_16401_16467[(2)] = inst_16310);

(statearr_16401_16467[(1)] = (35));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16332 === (30))){
var state_16331__$1 = state_16331;
var statearr_16402_16468 = state_16331__$1;
(statearr_16402_16468[(2)] = null);

(statearr_16402_16468[(1)] = (32));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16332 === (10))){
var inst_16215 = (state_16331[(14)]);
var inst_16213 = (state_16331[(15)]);
var inst_16221 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_16213,inst_16215);
var inst_16222 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16221,(0),null);
var inst_16223 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16221,(1),null);
var state_16331__$1 = (function (){var statearr_16403 = state_16331;
(statearr_16403[(26)] = inst_16222);

return statearr_16403;
})();
if(cljs.core.truth_(inst_16223)){
var statearr_16404_16469 = state_16331__$1;
(statearr_16404_16469[(1)] = (13));

} else {
var statearr_16405_16470 = state_16331__$1;
(statearr_16405_16470[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16332 === (18))){
var inst_16256 = (state_16331[(2)]);
var state_16331__$1 = state_16331;
var statearr_16406_16471 = state_16331__$1;
(statearr_16406_16471[(2)] = inst_16256);

(statearr_16406_16471[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16332 === (42))){
var state_16331__$1 = state_16331;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16331__$1,(45),dchan);
} else {
if((state_val_16332 === (37))){
var inst_16290 = (state_16331[(25)]);
var inst_16299 = (state_16331[(23)]);
var inst_16203 = (state_16331[(12)]);
var inst_16299__$1 = cljs.core.first(inst_16290);
var inst_16300 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_16299__$1,inst_16203,done);
var state_16331__$1 = (function (){var statearr_16407 = state_16331;
(statearr_16407[(23)] = inst_16299__$1);

return statearr_16407;
})();
if(cljs.core.truth_(inst_16300)){
var statearr_16408_16472 = state_16331__$1;
(statearr_16408_16472[(1)] = (39));

} else {
var statearr_16409_16473 = state_16331__$1;
(statearr_16409_16473[(1)] = (40));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16332 === (8))){
var inst_16215 = (state_16331[(14)]);
var inst_16214 = (state_16331[(16)]);
var inst_16217 = (inst_16215 < inst_16214);
var inst_16218 = inst_16217;
var state_16331__$1 = state_16331;
if(cljs.core.truth_(inst_16218)){
var statearr_16410_16474 = state_16331__$1;
(statearr_16410_16474[(1)] = (10));

} else {
var statearr_16411_16475 = state_16331__$1;
(statearr_16411_16475[(1)] = (11));

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
});})(c__8570__auto___16421,cs,m,dchan,dctr,done))
;
return ((function (switch__8503__auto__,c__8570__auto___16421,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__8504__auto__ = null;
var cljs$core$async$mult_$_state_machine__8504__auto____0 = (function (){
var statearr_16415 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16415[(0)] = cljs$core$async$mult_$_state_machine__8504__auto__);

(statearr_16415[(1)] = (1));

return statearr_16415;
});
var cljs$core$async$mult_$_state_machine__8504__auto____1 = (function (state_16331){
while(true){
var ret_value__8505__auto__ = (function (){try{while(true){
var result__8506__auto__ = switch__8503__auto__(state_16331);
if(cljs.core.keyword_identical_QMARK_(result__8506__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__8506__auto__;
}
break;
}
}catch (e16416){if((e16416 instanceof Object)){
var ex__8507__auto__ = e16416;
var statearr_16417_16476 = state_16331;
(statearr_16417_16476[(5)] = ex__8507__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_16331);

return cljs.core.cst$kw$recur;
} else {
throw e16416;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__8505__auto__,cljs.core.cst$kw$recur)){
var G__16477 = state_16331;
state_16331 = G__16477;
continue;
} else {
return ret_value__8505__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__8504__auto__ = function(state_16331){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__8504__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__8504__auto____1.call(this,state_16331);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__8504__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__8504__auto____0;
cljs$core$async$mult_$_state_machine__8504__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__8504__auto____1;
return cljs$core$async$mult_$_state_machine__8504__auto__;
})()
;})(switch__8503__auto__,c__8570__auto___16421,cs,m,dchan,dctr,done))
})();
var state__8572__auto__ = (function (){var statearr_16418 = (f__8571__auto__.cljs$core$IFn$_invoke$arity$0 ? f__8571__auto__.cljs$core$IFn$_invoke$arity$0() : f__8571__auto__.call(null));
(statearr_16418[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8570__auto___16421);

return statearr_16418;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__8572__auto__);
});})(c__8570__auto___16421,cs,m,dchan,dctr,done))
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
var args16478 = [];
var len__5619__auto___16481 = arguments.length;
var i__5620__auto___16482 = (0);
while(true){
if((i__5620__auto___16482 < len__5619__auto___16481)){
args16478.push((arguments[i__5620__auto___16482]));

var G__16483 = (i__5620__auto___16482 + (1));
i__5620__auto___16482 = G__16483;
continue;
} else {
}
break;
}

var G__16480 = args16478.length;
switch (G__16480) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16478.length)].join('')));

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
var len__5619__auto___16495 = arguments.length;
var i__5620__auto___16496 = (0);
while(true){
if((i__5620__auto___16496 < len__5619__auto___16495)){
args__5626__auto__.push((arguments[i__5620__auto___16496]));

var G__16497 = (i__5620__auto___16496 + (1));
i__5620__auto___16496 = G__16497;
continue;
} else {
}
break;
}

var argseq__5627__auto__ = ((((3) < args__5626__auto__.length))?(new cljs.core.IndexedSeq(args__5626__auto__.slice((3)),(0))):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5627__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__16489){
var map__16490 = p__16489;
var map__16490__$1 = ((((!((map__16490 == null)))?((((map__16490.cljs$lang$protocol_mask$partition0$ & (64))) || (map__16490.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16490):map__16490);
var opts = map__16490__$1;
var statearr_16492_16498 = state;
(statearr_16492_16498[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4425__auto__ = cljs.core.async.do_alts(((function (map__16490,map__16490__$1,opts){
return (function (val){
var statearr_16493_16499 = state;
(statearr_16493_16499[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
});})(map__16490,map__16490__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4425__auto__)){
var cb = temp__4425__auto__;
var statearr_16494_16500 = state;
(statearr_16494_16500[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cb) : cljs.core.deref.call(null,cb)));


return cljs.core.cst$kw$recur;
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq16485){
var G__16486 = cljs.core.first(seq16485);
var seq16485__$1 = cljs.core.next(seq16485);
var G__16487 = cljs.core.first(seq16485__$1);
var seq16485__$2 = cljs.core.next(seq16485__$1);
var G__16488 = cljs.core.first(seq16485__$2);
var seq16485__$3 = cljs.core.next(seq16485__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__16486,G__16487,G__16488,seq16485__$3);
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
var cs = (function (){var G__16667 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__16667) : cljs.core.atom.call(null,G__16667));
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
if(typeof cljs.core.async.t_cljs$core$async16668 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16668 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta16669){
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
this.meta16669 = meta16669;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async16668.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_16670,meta16669__$1){
var self__ = this;
var _16670__$1 = this;
return (new cljs.core.async.t_cljs$core$async16668(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta16669__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async16668.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_16670){
var self__ = this;
var _16670__$1 = this;
return self__.meta16669;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async16668.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async16668.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async16668.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async16668.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async16668.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async16668.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__16671_16833 = self__.cs;
var G__16672_16834 = cljs.core.PersistentArrayMap.EMPTY;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__16671_16833,G__16672_16834) : cljs.core.reset_BANG_.call(null,G__16671_16833,G__16672_16834));

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async16668.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async16668.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async16668.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$change,cljs.core.with_meta(cljs.core.cst$sym$mix,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$out], null))),cljs.core.cst$kw$doc,"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),cljs.core.cst$sym$solo_DASH_mode,cljs.core.cst$sym$pick,cljs.core.cst$sym$cs,cljs.core.cst$sym$calc_DASH_state,cljs.core.cst$sym$out,cljs.core.cst$sym$changed,cljs.core.cst$sym$solo_DASH_modes,cljs.core.cst$sym$attrs,cljs.core.cst$sym$meta16669], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async16668.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async16668.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16668";

cljs.core.async.t_cljs$core$async16668.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__5159__auto__,writer__5160__auto__,opt__5161__auto__){
return cljs.core._write(writer__5160__auto__,"cljs.core.async/t_cljs$core$async16668");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async16668 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async16668(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta16669){
return (new cljs.core.async.t_cljs$core$async16668(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta16669));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async16668(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__8570__auto___16835 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__8570__auto___16835,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__8571__auto__ = (function (){var switch__8503__auto__ = ((function (c__8570__auto___16835,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_16770){
var state_val_16771 = (state_16770[(1)]);
if((state_val_16771 === (7))){
var inst_16688 = (state_16770[(2)]);
var state_16770__$1 = state_16770;
var statearr_16772_16836 = state_16770__$1;
(statearr_16772_16836[(2)] = inst_16688);

(statearr_16772_16836[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16771 === (20))){
var inst_16700 = (state_16770[(7)]);
var state_16770__$1 = state_16770;
var statearr_16773_16837 = state_16770__$1;
(statearr_16773_16837[(2)] = inst_16700);

(statearr_16773_16837[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16771 === (27))){
var state_16770__$1 = state_16770;
var statearr_16774_16838 = state_16770__$1;
(statearr_16774_16838[(2)] = null);

(statearr_16774_16838[(1)] = (28));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16771 === (1))){
var inst_16676 = (state_16770[(8)]);
var inst_16676__$1 = calc_state();
var inst_16678 = (inst_16676__$1 == null);
var inst_16679 = cljs.core.not(inst_16678);
var state_16770__$1 = (function (){var statearr_16775 = state_16770;
(statearr_16775[(8)] = inst_16676__$1);

return statearr_16775;
})();
if(inst_16679){
var statearr_16776_16839 = state_16770__$1;
(statearr_16776_16839[(1)] = (2));

} else {
var statearr_16777_16840 = state_16770__$1;
(statearr_16777_16840[(1)] = (3));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16771 === (24))){
var inst_16744 = (state_16770[(9)]);
var inst_16723 = (state_16770[(10)]);
var inst_16730 = (state_16770[(11)]);
var inst_16744__$1 = (inst_16723.cljs$core$IFn$_invoke$arity$1 ? inst_16723.cljs$core$IFn$_invoke$arity$1(inst_16730) : inst_16723.call(null,inst_16730));
var state_16770__$1 = (function (){var statearr_16778 = state_16770;
(statearr_16778[(9)] = inst_16744__$1);

return statearr_16778;
})();
if(cljs.core.truth_(inst_16744__$1)){
var statearr_16779_16841 = state_16770__$1;
(statearr_16779_16841[(1)] = (29));

} else {
var statearr_16780_16842 = state_16770__$1;
(statearr_16780_16842[(1)] = (30));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16771 === (4))){
var inst_16691 = (state_16770[(2)]);
var state_16770__$1 = state_16770;
if(cljs.core.truth_(inst_16691)){
var statearr_16781_16843 = state_16770__$1;
(statearr_16781_16843[(1)] = (8));

} else {
var statearr_16782_16844 = state_16770__$1;
(statearr_16782_16844[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16771 === (15))){
var inst_16717 = (state_16770[(2)]);
var state_16770__$1 = state_16770;
if(cljs.core.truth_(inst_16717)){
var statearr_16783_16845 = state_16770__$1;
(statearr_16783_16845[(1)] = (19));

} else {
var statearr_16784_16846 = state_16770__$1;
(statearr_16784_16846[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16771 === (21))){
var inst_16722 = (state_16770[(12)]);
var inst_16722__$1 = (state_16770[(2)]);
var inst_16723 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16722__$1,cljs.core.cst$kw$solos);
var inst_16724 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16722__$1,cljs.core.cst$kw$mutes);
var inst_16725 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16722__$1,cljs.core.cst$kw$reads);
var state_16770__$1 = (function (){var statearr_16785 = state_16770;
(statearr_16785[(13)] = inst_16724);

(statearr_16785[(10)] = inst_16723);

(statearr_16785[(12)] = inst_16722__$1);

return statearr_16785;
})();
return cljs.core.async.ioc_alts_BANG_(state_16770__$1,(22),inst_16725);
} else {
if((state_val_16771 === (31))){
var inst_16752 = (state_16770[(2)]);
var state_16770__$1 = state_16770;
if(cljs.core.truth_(inst_16752)){
var statearr_16786_16847 = state_16770__$1;
(statearr_16786_16847[(1)] = (32));

} else {
var statearr_16787_16848 = state_16770__$1;
(statearr_16787_16848[(1)] = (33));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16771 === (32))){
var inst_16729 = (state_16770[(14)]);
var state_16770__$1 = state_16770;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16770__$1,(35),out,inst_16729);
} else {
if((state_val_16771 === (33))){
var inst_16722 = (state_16770[(12)]);
var inst_16700 = inst_16722;
var state_16770__$1 = (function (){var statearr_16788 = state_16770;
(statearr_16788[(7)] = inst_16700);

return statearr_16788;
})();
var statearr_16789_16849 = state_16770__$1;
(statearr_16789_16849[(2)] = null);

(statearr_16789_16849[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16771 === (13))){
var inst_16700 = (state_16770[(7)]);
var inst_16707 = inst_16700.cljs$lang$protocol_mask$partition0$;
var inst_16708 = (inst_16707 & (64));
var inst_16709 = inst_16700.cljs$core$ISeq$;
var inst_16710 = (inst_16708) || (inst_16709);
var state_16770__$1 = state_16770;
if(cljs.core.truth_(inst_16710)){
var statearr_16790_16850 = state_16770__$1;
(statearr_16790_16850[(1)] = (16));

} else {
var statearr_16791_16851 = state_16770__$1;
(statearr_16791_16851[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16771 === (22))){
var inst_16729 = (state_16770[(14)]);
var inst_16730 = (state_16770[(11)]);
var inst_16728 = (state_16770[(2)]);
var inst_16729__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16728,(0),null);
var inst_16730__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16728,(1),null);
var inst_16731 = (inst_16729__$1 == null);
var inst_16732 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_16730__$1,change);
var inst_16733 = (inst_16731) || (inst_16732);
var state_16770__$1 = (function (){var statearr_16792 = state_16770;
(statearr_16792[(14)] = inst_16729__$1);

(statearr_16792[(11)] = inst_16730__$1);

return statearr_16792;
})();
if(cljs.core.truth_(inst_16733)){
var statearr_16793_16852 = state_16770__$1;
(statearr_16793_16852[(1)] = (23));

} else {
var statearr_16794_16853 = state_16770__$1;
(statearr_16794_16853[(1)] = (24));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16771 === (36))){
var inst_16722 = (state_16770[(12)]);
var inst_16700 = inst_16722;
var state_16770__$1 = (function (){var statearr_16795 = state_16770;
(statearr_16795[(7)] = inst_16700);

return statearr_16795;
})();
var statearr_16796_16854 = state_16770__$1;
(statearr_16796_16854[(2)] = null);

(statearr_16796_16854[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16771 === (29))){
var inst_16744 = (state_16770[(9)]);
var state_16770__$1 = state_16770;
var statearr_16797_16855 = state_16770__$1;
(statearr_16797_16855[(2)] = inst_16744);

(statearr_16797_16855[(1)] = (31));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16771 === (6))){
var state_16770__$1 = state_16770;
var statearr_16798_16856 = state_16770__$1;
(statearr_16798_16856[(2)] = false);

(statearr_16798_16856[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16771 === (28))){
var inst_16740 = (state_16770[(2)]);
var inst_16741 = calc_state();
var inst_16700 = inst_16741;
var state_16770__$1 = (function (){var statearr_16799 = state_16770;
(statearr_16799[(15)] = inst_16740);

(statearr_16799[(7)] = inst_16700);

return statearr_16799;
})();
var statearr_16800_16857 = state_16770__$1;
(statearr_16800_16857[(2)] = null);

(statearr_16800_16857[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16771 === (25))){
var inst_16766 = (state_16770[(2)]);
var state_16770__$1 = state_16770;
var statearr_16801_16858 = state_16770__$1;
(statearr_16801_16858[(2)] = inst_16766);

(statearr_16801_16858[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16771 === (34))){
var inst_16764 = (state_16770[(2)]);
var state_16770__$1 = state_16770;
var statearr_16802_16859 = state_16770__$1;
(statearr_16802_16859[(2)] = inst_16764);

(statearr_16802_16859[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16771 === (17))){
var state_16770__$1 = state_16770;
var statearr_16803_16860 = state_16770__$1;
(statearr_16803_16860[(2)] = false);

(statearr_16803_16860[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16771 === (3))){
var state_16770__$1 = state_16770;
var statearr_16804_16861 = state_16770__$1;
(statearr_16804_16861[(2)] = false);

(statearr_16804_16861[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16771 === (12))){
var inst_16768 = (state_16770[(2)]);
var state_16770__$1 = state_16770;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16770__$1,inst_16768);
} else {
if((state_val_16771 === (2))){
var inst_16676 = (state_16770[(8)]);
var inst_16681 = inst_16676.cljs$lang$protocol_mask$partition0$;
var inst_16682 = (inst_16681 & (64));
var inst_16683 = inst_16676.cljs$core$ISeq$;
var inst_16684 = (inst_16682) || (inst_16683);
var state_16770__$1 = state_16770;
if(cljs.core.truth_(inst_16684)){
var statearr_16805_16862 = state_16770__$1;
(statearr_16805_16862[(1)] = (5));

} else {
var statearr_16806_16863 = state_16770__$1;
(statearr_16806_16863[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16771 === (23))){
var inst_16729 = (state_16770[(14)]);
var inst_16735 = (inst_16729 == null);
var state_16770__$1 = state_16770;
if(cljs.core.truth_(inst_16735)){
var statearr_16807_16864 = state_16770__$1;
(statearr_16807_16864[(1)] = (26));

} else {
var statearr_16808_16865 = state_16770__$1;
(statearr_16808_16865[(1)] = (27));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16771 === (35))){
var inst_16755 = (state_16770[(2)]);
var state_16770__$1 = state_16770;
if(cljs.core.truth_(inst_16755)){
var statearr_16809_16866 = state_16770__$1;
(statearr_16809_16866[(1)] = (36));

} else {
var statearr_16810_16867 = state_16770__$1;
(statearr_16810_16867[(1)] = (37));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16771 === (19))){
var inst_16700 = (state_16770[(7)]);
var inst_16719 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_16700);
var state_16770__$1 = state_16770;
var statearr_16811_16868 = state_16770__$1;
(statearr_16811_16868[(2)] = inst_16719);

(statearr_16811_16868[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16771 === (11))){
var inst_16700 = (state_16770[(7)]);
var inst_16704 = (inst_16700 == null);
var inst_16705 = cljs.core.not(inst_16704);
var state_16770__$1 = state_16770;
if(inst_16705){
var statearr_16812_16869 = state_16770__$1;
(statearr_16812_16869[(1)] = (13));

} else {
var statearr_16813_16870 = state_16770__$1;
(statearr_16813_16870[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16771 === (9))){
var inst_16676 = (state_16770[(8)]);
var state_16770__$1 = state_16770;
var statearr_16814_16871 = state_16770__$1;
(statearr_16814_16871[(2)] = inst_16676);

(statearr_16814_16871[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16771 === (5))){
var state_16770__$1 = state_16770;
var statearr_16815_16872 = state_16770__$1;
(statearr_16815_16872[(2)] = true);

(statearr_16815_16872[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16771 === (14))){
var state_16770__$1 = state_16770;
var statearr_16816_16873 = state_16770__$1;
(statearr_16816_16873[(2)] = false);

(statearr_16816_16873[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16771 === (26))){
var inst_16730 = (state_16770[(11)]);
var inst_16737 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_16730);
var state_16770__$1 = state_16770;
var statearr_16817_16874 = state_16770__$1;
(statearr_16817_16874[(2)] = inst_16737);

(statearr_16817_16874[(1)] = (28));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16771 === (16))){
var state_16770__$1 = state_16770;
var statearr_16818_16875 = state_16770__$1;
(statearr_16818_16875[(2)] = true);

(statearr_16818_16875[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16771 === (38))){
var inst_16760 = (state_16770[(2)]);
var state_16770__$1 = state_16770;
var statearr_16819_16876 = state_16770__$1;
(statearr_16819_16876[(2)] = inst_16760);

(statearr_16819_16876[(1)] = (34));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16771 === (30))){
var inst_16724 = (state_16770[(13)]);
var inst_16723 = (state_16770[(10)]);
var inst_16730 = (state_16770[(11)]);
var inst_16747 = cljs.core.empty_QMARK_(inst_16723);
var inst_16748 = (inst_16724.cljs$core$IFn$_invoke$arity$1 ? inst_16724.cljs$core$IFn$_invoke$arity$1(inst_16730) : inst_16724.call(null,inst_16730));
var inst_16749 = cljs.core.not(inst_16748);
var inst_16750 = (inst_16747) && (inst_16749);
var state_16770__$1 = state_16770;
var statearr_16820_16877 = state_16770__$1;
(statearr_16820_16877[(2)] = inst_16750);

(statearr_16820_16877[(1)] = (31));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16771 === (10))){
var inst_16676 = (state_16770[(8)]);
var inst_16696 = (state_16770[(2)]);
var inst_16697 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16696,cljs.core.cst$kw$solos);
var inst_16698 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16696,cljs.core.cst$kw$mutes);
var inst_16699 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16696,cljs.core.cst$kw$reads);
var inst_16700 = inst_16676;
var state_16770__$1 = (function (){var statearr_16821 = state_16770;
(statearr_16821[(16)] = inst_16697);

(statearr_16821[(7)] = inst_16700);

(statearr_16821[(17)] = inst_16698);

(statearr_16821[(18)] = inst_16699);

return statearr_16821;
})();
var statearr_16822_16878 = state_16770__$1;
(statearr_16822_16878[(2)] = null);

(statearr_16822_16878[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16771 === (18))){
var inst_16714 = (state_16770[(2)]);
var state_16770__$1 = state_16770;
var statearr_16823_16879 = state_16770__$1;
(statearr_16823_16879[(2)] = inst_16714);

(statearr_16823_16879[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16771 === (37))){
var state_16770__$1 = state_16770;
var statearr_16824_16880 = state_16770__$1;
(statearr_16824_16880[(2)] = null);

(statearr_16824_16880[(1)] = (38));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16771 === (8))){
var inst_16676 = (state_16770[(8)]);
var inst_16693 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_16676);
var state_16770__$1 = state_16770;
var statearr_16825_16881 = state_16770__$1;
(statearr_16825_16881[(2)] = inst_16693);

(statearr_16825_16881[(1)] = (10));


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
});})(c__8570__auto___16835,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__8503__auto__,c__8570__auto___16835,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__8504__auto__ = null;
var cljs$core$async$mix_$_state_machine__8504__auto____0 = (function (){
var statearr_16829 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16829[(0)] = cljs$core$async$mix_$_state_machine__8504__auto__);

(statearr_16829[(1)] = (1));

return statearr_16829;
});
var cljs$core$async$mix_$_state_machine__8504__auto____1 = (function (state_16770){
while(true){
var ret_value__8505__auto__ = (function (){try{while(true){
var result__8506__auto__ = switch__8503__auto__(state_16770);
if(cljs.core.keyword_identical_QMARK_(result__8506__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__8506__auto__;
}
break;
}
}catch (e16830){if((e16830 instanceof Object)){
var ex__8507__auto__ = e16830;
var statearr_16831_16882 = state_16770;
(statearr_16831_16882[(5)] = ex__8507__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_16770);

return cljs.core.cst$kw$recur;
} else {
throw e16830;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__8505__auto__,cljs.core.cst$kw$recur)){
var G__16883 = state_16770;
state_16770 = G__16883;
continue;
} else {
return ret_value__8505__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__8504__auto__ = function(state_16770){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__8504__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__8504__auto____1.call(this,state_16770);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__8504__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__8504__auto____0;
cljs$core$async$mix_$_state_machine__8504__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__8504__auto____1;
return cljs$core$async$mix_$_state_machine__8504__auto__;
})()
;})(switch__8503__auto__,c__8570__auto___16835,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__8572__auto__ = (function (){var statearr_16832 = (f__8571__auto__.cljs$core$IFn$_invoke$arity$0 ? f__8571__auto__.cljs$core$IFn$_invoke$arity$0() : f__8571__auto__.call(null));
(statearr_16832[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8570__auto___16835);

return statearr_16832;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__8572__auto__);
});})(c__8570__auto___16835,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var args16884 = [];
var len__5619__auto___16887 = arguments.length;
var i__5620__auto___16888 = (0);
while(true){
if((i__5620__auto___16888 < len__5619__auto___16887)){
args16884.push((arguments[i__5620__auto___16888]));

var G__16889 = (i__5620__auto___16888 + (1));
i__5620__auto___16888 = G__16889;
continue;
} else {
}
break;
}

var G__16886 = args16884.length;
switch (G__16886) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16884.length)].join('')));

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
var args16892 = [];
var len__5619__auto___17020 = arguments.length;
var i__5620__auto___17021 = (0);
while(true){
if((i__5620__auto___17021 < len__5619__auto___17020)){
args16892.push((arguments[i__5620__auto___17021]));

var G__17022 = (i__5620__auto___17021 + (1));
i__5620__auto___17021 = G__17022;
continue;
} else {
}
break;
}

var G__16894 = args16892.length;
switch (G__16894) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16892.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = (function (){var G__16895 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__16895) : cljs.core.atom.call(null,G__16895));
})();
var ensure_mult = ((function (mults){
return (function (topic){
var or__4561__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(mults) : cljs.core.deref.call(null,mults)),topic);
if(cljs.core.truth_(or__4561__auto__)){
return or__4561__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,((function (or__4561__auto__,mults){
return (function (p1__16891_SHARP_){
if(cljs.core.truth_((p1__16891_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__16891_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__16891_SHARP_.call(null,topic)))){
return p1__16891_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__16891_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
});})(or__4561__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async16896 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16896 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta16897){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta16897 = meta16897;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async16896.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_16898,meta16897__$1){
var self__ = this;
var _16898__$1 = this;
return (new cljs.core.async.t_cljs$core$async16896(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta16897__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async16896.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_16898){
var self__ = this;
var _16898__$1 = this;
return self__.meta16897;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async16896.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async16896.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async16896.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async16896.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async16896.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async16896.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__16899 = self__.mults;
var G__16900 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__16899,G__16900) : cljs.core.reset_BANG_.call(null,G__16899,G__16900));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async16896.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async16896.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$ch,cljs.core.cst$sym$topic_DASH_fn,cljs.core.cst$sym$buf_DASH_fn,cljs.core.cst$sym$mults,cljs.core.cst$sym$ensure_DASH_mult,cljs.core.cst$sym$meta16897], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async16896.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async16896.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16896";

cljs.core.async.t_cljs$core$async16896.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__5159__auto__,writer__5160__auto__,opt__5161__auto__){
return cljs.core._write(writer__5160__auto__,"cljs.core.async/t_cljs$core$async16896");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async16896 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async16896(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta16897){
return (new cljs.core.async.t_cljs$core$async16896(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta16897));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async16896(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__8570__auto___17024 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__8570__auto___17024,mults,ensure_mult,p){
return (function (){
var f__8571__auto__ = (function (){var switch__8503__auto__ = ((function (c__8570__auto___17024,mults,ensure_mult,p){
return (function (state_16972){
var state_val_16973 = (state_16972[(1)]);
if((state_val_16973 === (7))){
var inst_16968 = (state_16972[(2)]);
var state_16972__$1 = state_16972;
var statearr_16974_17025 = state_16972__$1;
(statearr_16974_17025[(2)] = inst_16968);

(statearr_16974_17025[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16973 === (20))){
var state_16972__$1 = state_16972;
var statearr_16975_17026 = state_16972__$1;
(statearr_16975_17026[(2)] = null);

(statearr_16975_17026[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16973 === (1))){
var state_16972__$1 = state_16972;
var statearr_16976_17027 = state_16972__$1;
(statearr_16976_17027[(2)] = null);

(statearr_16976_17027[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16973 === (24))){
var inst_16951 = (state_16972[(7)]);
var inst_16960 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_16951);
var state_16972__$1 = state_16972;
var statearr_16977_17028 = state_16972__$1;
(statearr_16977_17028[(2)] = inst_16960);

(statearr_16977_17028[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16973 === (4))){
var inst_16903 = (state_16972[(8)]);
var inst_16903__$1 = (state_16972[(2)]);
var inst_16904 = (inst_16903__$1 == null);
var state_16972__$1 = (function (){var statearr_16978 = state_16972;
(statearr_16978[(8)] = inst_16903__$1);

return statearr_16978;
})();
if(cljs.core.truth_(inst_16904)){
var statearr_16979_17029 = state_16972__$1;
(statearr_16979_17029[(1)] = (5));

} else {
var statearr_16980_17030 = state_16972__$1;
(statearr_16980_17030[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16973 === (15))){
var inst_16945 = (state_16972[(2)]);
var state_16972__$1 = state_16972;
var statearr_16981_17031 = state_16972__$1;
(statearr_16981_17031[(2)] = inst_16945);

(statearr_16981_17031[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16973 === (21))){
var inst_16965 = (state_16972[(2)]);
var state_16972__$1 = (function (){var statearr_16982 = state_16972;
(statearr_16982[(9)] = inst_16965);

return statearr_16982;
})();
var statearr_16983_17032 = state_16972__$1;
(statearr_16983_17032[(2)] = null);

(statearr_16983_17032[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16973 === (13))){
var inst_16927 = (state_16972[(10)]);
var inst_16929 = cljs.core.chunked_seq_QMARK_(inst_16927);
var state_16972__$1 = state_16972;
if(inst_16929){
var statearr_16984_17033 = state_16972__$1;
(statearr_16984_17033[(1)] = (16));

} else {
var statearr_16985_17034 = state_16972__$1;
(statearr_16985_17034[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16973 === (22))){
var inst_16957 = (state_16972[(2)]);
var state_16972__$1 = state_16972;
if(cljs.core.truth_(inst_16957)){
var statearr_16986_17035 = state_16972__$1;
(statearr_16986_17035[(1)] = (23));

} else {
var statearr_16987_17036 = state_16972__$1;
(statearr_16987_17036[(1)] = (24));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16973 === (6))){
var inst_16951 = (state_16972[(7)]);
var inst_16953 = (state_16972[(11)]);
var inst_16903 = (state_16972[(8)]);
var inst_16951__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_16903) : topic_fn.call(null,inst_16903));
var inst_16952 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(mults) : cljs.core.deref.call(null,mults));
var inst_16953__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16952,inst_16951__$1);
var state_16972__$1 = (function (){var statearr_16988 = state_16972;
(statearr_16988[(7)] = inst_16951__$1);

(statearr_16988[(11)] = inst_16953__$1);

return statearr_16988;
})();
if(cljs.core.truth_(inst_16953__$1)){
var statearr_16989_17037 = state_16972__$1;
(statearr_16989_17037[(1)] = (19));

} else {
var statearr_16990_17038 = state_16972__$1;
(statearr_16990_17038[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16973 === (25))){
var inst_16962 = (state_16972[(2)]);
var state_16972__$1 = state_16972;
var statearr_16991_17039 = state_16972__$1;
(statearr_16991_17039[(2)] = inst_16962);

(statearr_16991_17039[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16973 === (17))){
var inst_16927 = (state_16972[(10)]);
var inst_16936 = cljs.core.first(inst_16927);
var inst_16937 = cljs.core.async.muxch_STAR_(inst_16936);
var inst_16938 = cljs.core.async.close_BANG_(inst_16937);
var inst_16939 = cljs.core.next(inst_16927);
var inst_16913 = inst_16939;
var inst_16914 = null;
var inst_16915 = (0);
var inst_16916 = (0);
var state_16972__$1 = (function (){var statearr_16992 = state_16972;
(statearr_16992[(12)] = inst_16938);

(statearr_16992[(13)] = inst_16913);

(statearr_16992[(14)] = inst_16916);

(statearr_16992[(15)] = inst_16915);

(statearr_16992[(16)] = inst_16914);

return statearr_16992;
})();
var statearr_16993_17040 = state_16972__$1;
(statearr_16993_17040[(2)] = null);

(statearr_16993_17040[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16973 === (3))){
var inst_16970 = (state_16972[(2)]);
var state_16972__$1 = state_16972;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16972__$1,inst_16970);
} else {
if((state_val_16973 === (12))){
var inst_16947 = (state_16972[(2)]);
var state_16972__$1 = state_16972;
var statearr_16994_17041 = state_16972__$1;
(statearr_16994_17041[(2)] = inst_16947);

(statearr_16994_17041[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16973 === (2))){
var state_16972__$1 = state_16972;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16972__$1,(4),ch);
} else {
if((state_val_16973 === (23))){
var state_16972__$1 = state_16972;
var statearr_16995_17042 = state_16972__$1;
(statearr_16995_17042[(2)] = null);

(statearr_16995_17042[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16973 === (19))){
var inst_16953 = (state_16972[(11)]);
var inst_16903 = (state_16972[(8)]);
var inst_16955 = cljs.core.async.muxch_STAR_(inst_16953);
var state_16972__$1 = state_16972;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16972__$1,(22),inst_16955,inst_16903);
} else {
if((state_val_16973 === (11))){
var inst_16927 = (state_16972[(10)]);
var inst_16913 = (state_16972[(13)]);
var inst_16927__$1 = cljs.core.seq(inst_16913);
var state_16972__$1 = (function (){var statearr_16996 = state_16972;
(statearr_16996[(10)] = inst_16927__$1);

return statearr_16996;
})();
if(inst_16927__$1){
var statearr_16997_17043 = state_16972__$1;
(statearr_16997_17043[(1)] = (13));

} else {
var statearr_16998_17044 = state_16972__$1;
(statearr_16998_17044[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16973 === (9))){
var inst_16949 = (state_16972[(2)]);
var state_16972__$1 = state_16972;
var statearr_16999_17045 = state_16972__$1;
(statearr_16999_17045[(2)] = inst_16949);

(statearr_16999_17045[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16973 === (5))){
var inst_16910 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(mults) : cljs.core.deref.call(null,mults));
var inst_16911 = cljs.core.vals(inst_16910);
var inst_16912 = cljs.core.seq(inst_16911);
var inst_16913 = inst_16912;
var inst_16914 = null;
var inst_16915 = (0);
var inst_16916 = (0);
var state_16972__$1 = (function (){var statearr_17000 = state_16972;
(statearr_17000[(13)] = inst_16913);

(statearr_17000[(14)] = inst_16916);

(statearr_17000[(15)] = inst_16915);

(statearr_17000[(16)] = inst_16914);

return statearr_17000;
})();
var statearr_17001_17046 = state_16972__$1;
(statearr_17001_17046[(2)] = null);

(statearr_17001_17046[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16973 === (14))){
var state_16972__$1 = state_16972;
var statearr_17005_17047 = state_16972__$1;
(statearr_17005_17047[(2)] = null);

(statearr_17005_17047[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16973 === (16))){
var inst_16927 = (state_16972[(10)]);
var inst_16931 = cljs.core.chunk_first(inst_16927);
var inst_16932 = cljs.core.chunk_rest(inst_16927);
var inst_16933 = cljs.core.count(inst_16931);
var inst_16913 = inst_16932;
var inst_16914 = inst_16931;
var inst_16915 = inst_16933;
var inst_16916 = (0);
var state_16972__$1 = (function (){var statearr_17006 = state_16972;
(statearr_17006[(13)] = inst_16913);

(statearr_17006[(14)] = inst_16916);

(statearr_17006[(15)] = inst_16915);

(statearr_17006[(16)] = inst_16914);

return statearr_17006;
})();
var statearr_17007_17048 = state_16972__$1;
(statearr_17007_17048[(2)] = null);

(statearr_17007_17048[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16973 === (10))){
var inst_16913 = (state_16972[(13)]);
var inst_16916 = (state_16972[(14)]);
var inst_16915 = (state_16972[(15)]);
var inst_16914 = (state_16972[(16)]);
var inst_16921 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_16914,inst_16916);
var inst_16922 = cljs.core.async.muxch_STAR_(inst_16921);
var inst_16923 = cljs.core.async.close_BANG_(inst_16922);
var inst_16924 = (inst_16916 + (1));
var tmp17002 = inst_16913;
var tmp17003 = inst_16915;
var tmp17004 = inst_16914;
var inst_16913__$1 = tmp17002;
var inst_16914__$1 = tmp17004;
var inst_16915__$1 = tmp17003;
var inst_16916__$1 = inst_16924;
var state_16972__$1 = (function (){var statearr_17008 = state_16972;
(statearr_17008[(13)] = inst_16913__$1);

(statearr_17008[(14)] = inst_16916__$1);

(statearr_17008[(17)] = inst_16923);

(statearr_17008[(15)] = inst_16915__$1);

(statearr_17008[(16)] = inst_16914__$1);

return statearr_17008;
})();
var statearr_17009_17049 = state_16972__$1;
(statearr_17009_17049[(2)] = null);

(statearr_17009_17049[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16973 === (18))){
var inst_16942 = (state_16972[(2)]);
var state_16972__$1 = state_16972;
var statearr_17010_17050 = state_16972__$1;
(statearr_17010_17050[(2)] = inst_16942);

(statearr_17010_17050[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16973 === (8))){
var inst_16916 = (state_16972[(14)]);
var inst_16915 = (state_16972[(15)]);
var inst_16918 = (inst_16916 < inst_16915);
var inst_16919 = inst_16918;
var state_16972__$1 = state_16972;
if(cljs.core.truth_(inst_16919)){
var statearr_17011_17051 = state_16972__$1;
(statearr_17011_17051[(1)] = (10));

} else {
var statearr_17012_17052 = state_16972__$1;
(statearr_17012_17052[(1)] = (11));

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
});})(c__8570__auto___17024,mults,ensure_mult,p))
;
return ((function (switch__8503__auto__,c__8570__auto___17024,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__8504__auto__ = null;
var cljs$core$async$state_machine__8504__auto____0 = (function (){
var statearr_17016 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17016[(0)] = cljs$core$async$state_machine__8504__auto__);

(statearr_17016[(1)] = (1));

return statearr_17016;
});
var cljs$core$async$state_machine__8504__auto____1 = (function (state_16972){
while(true){
var ret_value__8505__auto__ = (function (){try{while(true){
var result__8506__auto__ = switch__8503__auto__(state_16972);
if(cljs.core.keyword_identical_QMARK_(result__8506__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__8506__auto__;
}
break;
}
}catch (e17017){if((e17017 instanceof Object)){
var ex__8507__auto__ = e17017;
var statearr_17018_17053 = state_16972;
(statearr_17018_17053[(5)] = ex__8507__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_16972);

return cljs.core.cst$kw$recur;
} else {
throw e17017;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__8505__auto__,cljs.core.cst$kw$recur)){
var G__17054 = state_16972;
state_16972 = G__17054;
continue;
} else {
return ret_value__8505__auto__;
}
break;
}
});
cljs$core$async$state_machine__8504__auto__ = function(state_16972){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__8504__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__8504__auto____1.call(this,state_16972);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__8504__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__8504__auto____0;
cljs$core$async$state_machine__8504__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__8504__auto____1;
return cljs$core$async$state_machine__8504__auto__;
})()
;})(switch__8503__auto__,c__8570__auto___17024,mults,ensure_mult,p))
})();
var state__8572__auto__ = (function (){var statearr_17019 = (f__8571__auto__.cljs$core$IFn$_invoke$arity$0 ? f__8571__auto__.cljs$core$IFn$_invoke$arity$0() : f__8571__auto__.call(null));
(statearr_17019[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8570__auto___17024);

return statearr_17019;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__8572__auto__);
});})(c__8570__auto___17024,mults,ensure_mult,p))
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
var args17055 = [];
var len__5619__auto___17058 = arguments.length;
var i__5620__auto___17059 = (0);
while(true){
if((i__5620__auto___17059 < len__5619__auto___17058)){
args17055.push((arguments[i__5620__auto___17059]));

var G__17060 = (i__5620__auto___17059 + (1));
i__5620__auto___17059 = G__17060;
continue;
} else {
}
break;
}

var G__17057 = args17055.length;
switch (G__17057) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17055.length)].join('')));

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
var args17062 = [];
var len__5619__auto___17065 = arguments.length;
var i__5620__auto___17066 = (0);
while(true){
if((i__5620__auto___17066 < len__5619__auto___17065)){
args17062.push((arguments[i__5620__auto___17066]));

var G__17067 = (i__5620__auto___17066 + (1));
i__5620__auto___17066 = G__17067;
continue;
} else {
}
break;
}

var G__17064 = args17062.length;
switch (G__17064) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17062.length)].join('')));

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
var args17069 = [];
var len__5619__auto___17140 = arguments.length;
var i__5620__auto___17141 = (0);
while(true){
if((i__5620__auto___17141 < len__5619__auto___17140)){
args17069.push((arguments[i__5620__auto___17141]));

var G__17142 = (i__5620__auto___17141 + (1));
i__5620__auto___17141 = G__17142;
continue;
} else {
}
break;
}

var G__17071 = args17069.length;
switch (G__17071) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17069.length)].join('')));

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
var c__8570__auto___17144 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__8570__auto___17144,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__8571__auto__ = (function (){var switch__8503__auto__ = ((function (c__8570__auto___17144,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_17110){
var state_val_17111 = (state_17110[(1)]);
if((state_val_17111 === (7))){
var state_17110__$1 = state_17110;
var statearr_17112_17145 = state_17110__$1;
(statearr_17112_17145[(2)] = null);

(statearr_17112_17145[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17111 === (1))){
var state_17110__$1 = state_17110;
var statearr_17113_17146 = state_17110__$1;
(statearr_17113_17146[(2)] = null);

(statearr_17113_17146[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17111 === (4))){
var inst_17074 = (state_17110[(7)]);
var inst_17076 = (inst_17074 < cnt);
var state_17110__$1 = state_17110;
if(cljs.core.truth_(inst_17076)){
var statearr_17114_17147 = state_17110__$1;
(statearr_17114_17147[(1)] = (6));

} else {
var statearr_17115_17148 = state_17110__$1;
(statearr_17115_17148[(1)] = (7));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17111 === (15))){
var inst_17106 = (state_17110[(2)]);
var state_17110__$1 = state_17110;
var statearr_17116_17149 = state_17110__$1;
(statearr_17116_17149[(2)] = inst_17106);

(statearr_17116_17149[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17111 === (13))){
var inst_17099 = cljs.core.async.close_BANG_(out);
var state_17110__$1 = state_17110;
var statearr_17117_17150 = state_17110__$1;
(statearr_17117_17150[(2)] = inst_17099);

(statearr_17117_17150[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17111 === (6))){
var state_17110__$1 = state_17110;
var statearr_17118_17151 = state_17110__$1;
(statearr_17118_17151[(2)] = null);

(statearr_17118_17151[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17111 === (3))){
var inst_17108 = (state_17110[(2)]);
var state_17110__$1 = state_17110;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17110__$1,inst_17108);
} else {
if((state_val_17111 === (12))){
var inst_17096 = (state_17110[(8)]);
var inst_17096__$1 = (state_17110[(2)]);
var inst_17097 = cljs.core.some(cljs.core.nil_QMARK_,inst_17096__$1);
var state_17110__$1 = (function (){var statearr_17119 = state_17110;
(statearr_17119[(8)] = inst_17096__$1);

return statearr_17119;
})();
if(cljs.core.truth_(inst_17097)){
var statearr_17120_17152 = state_17110__$1;
(statearr_17120_17152[(1)] = (13));

} else {
var statearr_17121_17153 = state_17110__$1;
(statearr_17121_17153[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17111 === (2))){
var inst_17073 = (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cnt) : cljs.core.reset_BANG_.call(null,dctr,cnt));
var inst_17074 = (0);
var state_17110__$1 = (function (){var statearr_17122 = state_17110;
(statearr_17122[(7)] = inst_17074);

(statearr_17122[(9)] = inst_17073);

return statearr_17122;
})();
var statearr_17123_17154 = state_17110__$1;
(statearr_17123_17154[(2)] = null);

(statearr_17123_17154[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17111 === (11))){
var inst_17074 = (state_17110[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_17110,(10),Object,null,(9));
var inst_17083 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_17074) : chs__$1.call(null,inst_17074));
var inst_17084 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_17074) : done.call(null,inst_17074));
var inst_17085 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_17083,inst_17084);
var state_17110__$1 = state_17110;
var statearr_17124_17155 = state_17110__$1;
(statearr_17124_17155[(2)] = inst_17085);


cljs.core.async.impl.ioc_helpers.process_exception(state_17110__$1);

return cljs.core.cst$kw$recur;
} else {
if((state_val_17111 === (9))){
var inst_17074 = (state_17110[(7)]);
var inst_17087 = (state_17110[(2)]);
var inst_17088 = (inst_17074 + (1));
var inst_17074__$1 = inst_17088;
var state_17110__$1 = (function (){var statearr_17125 = state_17110;
(statearr_17125[(7)] = inst_17074__$1);

(statearr_17125[(10)] = inst_17087);

return statearr_17125;
})();
var statearr_17126_17156 = state_17110__$1;
(statearr_17126_17156[(2)] = null);

(statearr_17126_17156[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17111 === (5))){
var inst_17094 = (state_17110[(2)]);
var state_17110__$1 = (function (){var statearr_17127 = state_17110;
(statearr_17127[(11)] = inst_17094);

return statearr_17127;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17110__$1,(12),dchan);
} else {
if((state_val_17111 === (14))){
var inst_17096 = (state_17110[(8)]);
var inst_17101 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_17096);
var state_17110__$1 = state_17110;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17110__$1,(16),out,inst_17101);
} else {
if((state_val_17111 === (16))){
var inst_17103 = (state_17110[(2)]);
var state_17110__$1 = (function (){var statearr_17128 = state_17110;
(statearr_17128[(12)] = inst_17103);

return statearr_17128;
})();
var statearr_17129_17157 = state_17110__$1;
(statearr_17129_17157[(2)] = null);

(statearr_17129_17157[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17111 === (10))){
var inst_17078 = (state_17110[(2)]);
var inst_17079 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_17110__$1 = (function (){var statearr_17130 = state_17110;
(statearr_17130[(13)] = inst_17078);

return statearr_17130;
})();
var statearr_17131_17158 = state_17110__$1;
(statearr_17131_17158[(2)] = inst_17079);


cljs.core.async.impl.ioc_helpers.process_exception(state_17110__$1);

return cljs.core.cst$kw$recur;
} else {
if((state_val_17111 === (8))){
var inst_17092 = (state_17110[(2)]);
var state_17110__$1 = state_17110;
var statearr_17132_17159 = state_17110__$1;
(statearr_17132_17159[(2)] = inst_17092);

(statearr_17132_17159[(1)] = (5));


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
});})(c__8570__auto___17144,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__8503__auto__,c__8570__auto___17144,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__8504__auto__ = null;
var cljs$core$async$state_machine__8504__auto____0 = (function (){
var statearr_17136 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17136[(0)] = cljs$core$async$state_machine__8504__auto__);

(statearr_17136[(1)] = (1));

return statearr_17136;
});
var cljs$core$async$state_machine__8504__auto____1 = (function (state_17110){
while(true){
var ret_value__8505__auto__ = (function (){try{while(true){
var result__8506__auto__ = switch__8503__auto__(state_17110);
if(cljs.core.keyword_identical_QMARK_(result__8506__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__8506__auto__;
}
break;
}
}catch (e17137){if((e17137 instanceof Object)){
var ex__8507__auto__ = e17137;
var statearr_17138_17160 = state_17110;
(statearr_17138_17160[(5)] = ex__8507__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_17110);

return cljs.core.cst$kw$recur;
} else {
throw e17137;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__8505__auto__,cljs.core.cst$kw$recur)){
var G__17161 = state_17110;
state_17110 = G__17161;
continue;
} else {
return ret_value__8505__auto__;
}
break;
}
});
cljs$core$async$state_machine__8504__auto__ = function(state_17110){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__8504__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__8504__auto____1.call(this,state_17110);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__8504__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__8504__auto____0;
cljs$core$async$state_machine__8504__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__8504__auto____1;
return cljs$core$async$state_machine__8504__auto__;
})()
;})(switch__8503__auto__,c__8570__auto___17144,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__8572__auto__ = (function (){var statearr_17139 = (f__8571__auto__.cljs$core$IFn$_invoke$arity$0 ? f__8571__auto__.cljs$core$IFn$_invoke$arity$0() : f__8571__auto__.call(null));
(statearr_17139[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8570__auto___17144);

return statearr_17139;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__8572__auto__);
});})(c__8570__auto___17144,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var args17163 = [];
var len__5619__auto___17219 = arguments.length;
var i__5620__auto___17220 = (0);
while(true){
if((i__5620__auto___17220 < len__5619__auto___17219)){
args17163.push((arguments[i__5620__auto___17220]));

var G__17221 = (i__5620__auto___17220 + (1));
i__5620__auto___17220 = G__17221;
continue;
} else {
}
break;
}

var G__17165 = args17163.length;
switch (G__17165) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17163.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__8570__auto___17223 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__8570__auto___17223,out){
return (function (){
var f__8571__auto__ = (function (){var switch__8503__auto__ = ((function (c__8570__auto___17223,out){
return (function (state_17195){
var state_val_17196 = (state_17195[(1)]);
if((state_val_17196 === (7))){
var inst_17175 = (state_17195[(7)]);
var inst_17174 = (state_17195[(8)]);
var inst_17174__$1 = (state_17195[(2)]);
var inst_17175__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_17174__$1,(0),null);
var inst_17176 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_17174__$1,(1),null);
var inst_17177 = (inst_17175__$1 == null);
var state_17195__$1 = (function (){var statearr_17197 = state_17195;
(statearr_17197[(7)] = inst_17175__$1);

(statearr_17197[(9)] = inst_17176);

(statearr_17197[(8)] = inst_17174__$1);

return statearr_17197;
})();
if(cljs.core.truth_(inst_17177)){
var statearr_17198_17224 = state_17195__$1;
(statearr_17198_17224[(1)] = (8));

} else {
var statearr_17199_17225 = state_17195__$1;
(statearr_17199_17225[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17196 === (1))){
var inst_17166 = cljs.core.vec(chs);
var inst_17167 = inst_17166;
var state_17195__$1 = (function (){var statearr_17200 = state_17195;
(statearr_17200[(10)] = inst_17167);

return statearr_17200;
})();
var statearr_17201_17226 = state_17195__$1;
(statearr_17201_17226[(2)] = null);

(statearr_17201_17226[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17196 === (4))){
var inst_17167 = (state_17195[(10)]);
var state_17195__$1 = state_17195;
return cljs.core.async.ioc_alts_BANG_(state_17195__$1,(7),inst_17167);
} else {
if((state_val_17196 === (6))){
var inst_17191 = (state_17195[(2)]);
var state_17195__$1 = state_17195;
var statearr_17202_17227 = state_17195__$1;
(statearr_17202_17227[(2)] = inst_17191);

(statearr_17202_17227[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17196 === (3))){
var inst_17193 = (state_17195[(2)]);
var state_17195__$1 = state_17195;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17195__$1,inst_17193);
} else {
if((state_val_17196 === (2))){
var inst_17167 = (state_17195[(10)]);
var inst_17169 = cljs.core.count(inst_17167);
var inst_17170 = (inst_17169 > (0));
var state_17195__$1 = state_17195;
if(cljs.core.truth_(inst_17170)){
var statearr_17204_17228 = state_17195__$1;
(statearr_17204_17228[(1)] = (4));

} else {
var statearr_17205_17229 = state_17195__$1;
(statearr_17205_17229[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17196 === (11))){
var inst_17167 = (state_17195[(10)]);
var inst_17184 = (state_17195[(2)]);
var tmp17203 = inst_17167;
var inst_17167__$1 = tmp17203;
var state_17195__$1 = (function (){var statearr_17206 = state_17195;
(statearr_17206[(10)] = inst_17167__$1);

(statearr_17206[(11)] = inst_17184);

return statearr_17206;
})();
var statearr_17207_17230 = state_17195__$1;
(statearr_17207_17230[(2)] = null);

(statearr_17207_17230[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17196 === (9))){
var inst_17175 = (state_17195[(7)]);
var state_17195__$1 = state_17195;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17195__$1,(11),out,inst_17175);
} else {
if((state_val_17196 === (5))){
var inst_17189 = cljs.core.async.close_BANG_(out);
var state_17195__$1 = state_17195;
var statearr_17208_17231 = state_17195__$1;
(statearr_17208_17231[(2)] = inst_17189);

(statearr_17208_17231[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17196 === (10))){
var inst_17187 = (state_17195[(2)]);
var state_17195__$1 = state_17195;
var statearr_17209_17232 = state_17195__$1;
(statearr_17209_17232[(2)] = inst_17187);

(statearr_17209_17232[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17196 === (8))){
var inst_17175 = (state_17195[(7)]);
var inst_17176 = (state_17195[(9)]);
var inst_17174 = (state_17195[(8)]);
var inst_17167 = (state_17195[(10)]);
var inst_17179 = (function (){var cs = inst_17167;
var vec__17172 = inst_17174;
var v = inst_17175;
var c = inst_17176;
return ((function (cs,vec__17172,v,c,inst_17175,inst_17176,inst_17174,inst_17167,state_val_17196,c__8570__auto___17223,out){
return (function (p1__17162_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__17162_SHARP_);
});
;})(cs,vec__17172,v,c,inst_17175,inst_17176,inst_17174,inst_17167,state_val_17196,c__8570__auto___17223,out))
})();
var inst_17180 = cljs.core.filterv(inst_17179,inst_17167);
var inst_17167__$1 = inst_17180;
var state_17195__$1 = (function (){var statearr_17210 = state_17195;
(statearr_17210[(10)] = inst_17167__$1);

return statearr_17210;
})();
var statearr_17211_17233 = state_17195__$1;
(statearr_17211_17233[(2)] = null);

(statearr_17211_17233[(1)] = (2));


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
});})(c__8570__auto___17223,out))
;
return ((function (switch__8503__auto__,c__8570__auto___17223,out){
return (function() {
var cljs$core$async$state_machine__8504__auto__ = null;
var cljs$core$async$state_machine__8504__auto____0 = (function (){
var statearr_17215 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17215[(0)] = cljs$core$async$state_machine__8504__auto__);

(statearr_17215[(1)] = (1));

return statearr_17215;
});
var cljs$core$async$state_machine__8504__auto____1 = (function (state_17195){
while(true){
var ret_value__8505__auto__ = (function (){try{while(true){
var result__8506__auto__ = switch__8503__auto__(state_17195);
if(cljs.core.keyword_identical_QMARK_(result__8506__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__8506__auto__;
}
break;
}
}catch (e17216){if((e17216 instanceof Object)){
var ex__8507__auto__ = e17216;
var statearr_17217_17234 = state_17195;
(statearr_17217_17234[(5)] = ex__8507__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_17195);

return cljs.core.cst$kw$recur;
} else {
throw e17216;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__8505__auto__,cljs.core.cst$kw$recur)){
var G__17235 = state_17195;
state_17195 = G__17235;
continue;
} else {
return ret_value__8505__auto__;
}
break;
}
});
cljs$core$async$state_machine__8504__auto__ = function(state_17195){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__8504__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__8504__auto____1.call(this,state_17195);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__8504__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__8504__auto____0;
cljs$core$async$state_machine__8504__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__8504__auto____1;
return cljs$core$async$state_machine__8504__auto__;
})()
;})(switch__8503__auto__,c__8570__auto___17223,out))
})();
var state__8572__auto__ = (function (){var statearr_17218 = (f__8571__auto__.cljs$core$IFn$_invoke$arity$0 ? f__8571__auto__.cljs$core$IFn$_invoke$arity$0() : f__8571__auto__.call(null));
(statearr_17218[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8570__auto___17223);

return statearr_17218;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__8572__auto__);
});})(c__8570__auto___17223,out))
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
var args17236 = [];
var len__5619__auto___17285 = arguments.length;
var i__5620__auto___17286 = (0);
while(true){
if((i__5620__auto___17286 < len__5619__auto___17285)){
args17236.push((arguments[i__5620__auto___17286]));

var G__17287 = (i__5620__auto___17286 + (1));
i__5620__auto___17286 = G__17287;
continue;
} else {
}
break;
}

var G__17238 = args17236.length;
switch (G__17238) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17236.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__8570__auto___17289 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__8570__auto___17289,out){
return (function (){
var f__8571__auto__ = (function (){var switch__8503__auto__ = ((function (c__8570__auto___17289,out){
return (function (state_17262){
var state_val_17263 = (state_17262[(1)]);
if((state_val_17263 === (7))){
var inst_17244 = (state_17262[(7)]);
var inst_17244__$1 = (state_17262[(2)]);
var inst_17245 = (inst_17244__$1 == null);
var inst_17246 = cljs.core.not(inst_17245);
var state_17262__$1 = (function (){var statearr_17264 = state_17262;
(statearr_17264[(7)] = inst_17244__$1);

return statearr_17264;
})();
if(inst_17246){
var statearr_17265_17290 = state_17262__$1;
(statearr_17265_17290[(1)] = (8));

} else {
var statearr_17266_17291 = state_17262__$1;
(statearr_17266_17291[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17263 === (1))){
var inst_17239 = (0);
var state_17262__$1 = (function (){var statearr_17267 = state_17262;
(statearr_17267[(8)] = inst_17239);

return statearr_17267;
})();
var statearr_17268_17292 = state_17262__$1;
(statearr_17268_17292[(2)] = null);

(statearr_17268_17292[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17263 === (4))){
var state_17262__$1 = state_17262;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17262__$1,(7),ch);
} else {
if((state_val_17263 === (6))){
var inst_17257 = (state_17262[(2)]);
var state_17262__$1 = state_17262;
var statearr_17269_17293 = state_17262__$1;
(statearr_17269_17293[(2)] = inst_17257);

(statearr_17269_17293[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17263 === (3))){
var inst_17259 = (state_17262[(2)]);
var inst_17260 = cljs.core.async.close_BANG_(out);
var state_17262__$1 = (function (){var statearr_17270 = state_17262;
(statearr_17270[(9)] = inst_17259);

return statearr_17270;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_17262__$1,inst_17260);
} else {
if((state_val_17263 === (2))){
var inst_17239 = (state_17262[(8)]);
var inst_17241 = (inst_17239 < n);
var state_17262__$1 = state_17262;
if(cljs.core.truth_(inst_17241)){
var statearr_17271_17294 = state_17262__$1;
(statearr_17271_17294[(1)] = (4));

} else {
var statearr_17272_17295 = state_17262__$1;
(statearr_17272_17295[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17263 === (11))){
var inst_17239 = (state_17262[(8)]);
var inst_17249 = (state_17262[(2)]);
var inst_17250 = (inst_17239 + (1));
var inst_17239__$1 = inst_17250;
var state_17262__$1 = (function (){var statearr_17273 = state_17262;
(statearr_17273[(8)] = inst_17239__$1);

(statearr_17273[(10)] = inst_17249);

return statearr_17273;
})();
var statearr_17274_17296 = state_17262__$1;
(statearr_17274_17296[(2)] = null);

(statearr_17274_17296[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17263 === (9))){
var state_17262__$1 = state_17262;
var statearr_17275_17297 = state_17262__$1;
(statearr_17275_17297[(2)] = null);

(statearr_17275_17297[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17263 === (5))){
var state_17262__$1 = state_17262;
var statearr_17276_17298 = state_17262__$1;
(statearr_17276_17298[(2)] = null);

(statearr_17276_17298[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17263 === (10))){
var inst_17254 = (state_17262[(2)]);
var state_17262__$1 = state_17262;
var statearr_17277_17299 = state_17262__$1;
(statearr_17277_17299[(2)] = inst_17254);

(statearr_17277_17299[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17263 === (8))){
var inst_17244 = (state_17262[(7)]);
var state_17262__$1 = state_17262;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17262__$1,(11),out,inst_17244);
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
});})(c__8570__auto___17289,out))
;
return ((function (switch__8503__auto__,c__8570__auto___17289,out){
return (function() {
var cljs$core$async$state_machine__8504__auto__ = null;
var cljs$core$async$state_machine__8504__auto____0 = (function (){
var statearr_17281 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_17281[(0)] = cljs$core$async$state_machine__8504__auto__);

(statearr_17281[(1)] = (1));

return statearr_17281;
});
var cljs$core$async$state_machine__8504__auto____1 = (function (state_17262){
while(true){
var ret_value__8505__auto__ = (function (){try{while(true){
var result__8506__auto__ = switch__8503__auto__(state_17262);
if(cljs.core.keyword_identical_QMARK_(result__8506__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__8506__auto__;
}
break;
}
}catch (e17282){if((e17282 instanceof Object)){
var ex__8507__auto__ = e17282;
var statearr_17283_17300 = state_17262;
(statearr_17283_17300[(5)] = ex__8507__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_17262);

return cljs.core.cst$kw$recur;
} else {
throw e17282;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__8505__auto__,cljs.core.cst$kw$recur)){
var G__17301 = state_17262;
state_17262 = G__17301;
continue;
} else {
return ret_value__8505__auto__;
}
break;
}
});
cljs$core$async$state_machine__8504__auto__ = function(state_17262){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__8504__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__8504__auto____1.call(this,state_17262);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__8504__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__8504__auto____0;
cljs$core$async$state_machine__8504__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__8504__auto____1;
return cljs$core$async$state_machine__8504__auto__;
})()
;})(switch__8503__auto__,c__8570__auto___17289,out))
})();
var state__8572__auto__ = (function (){var statearr_17284 = (f__8571__auto__.cljs$core$IFn$_invoke$arity$0 ? f__8571__auto__.cljs$core$IFn$_invoke$arity$0() : f__8571__auto__.call(null));
(statearr_17284[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8570__auto___17289);

return statearr_17284;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__8572__auto__);
});})(c__8570__auto___17289,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async17311 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17311 = (function (map_LT_,f,ch,meta17312){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta17312 = meta17312;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async17311.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17313,meta17312__$1){
var self__ = this;
var _17313__$1 = this;
return (new cljs.core.async.t_cljs$core$async17311(self__.map_LT_,self__.f,self__.ch,meta17312__$1));
});

cljs.core.async.t_cljs$core$async17311.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17313){
var self__ = this;
var _17313__$1 = this;
return self__.meta17312;
});

cljs.core.async.t_cljs$core$async17311.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async17311.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async17311.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t_cljs$core$async17311.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async17311.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async17314 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17314 = (function (map_LT_,f,ch,meta17312,_,fn1,meta17315){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta17312 = meta17312;
this._ = _;
this.fn1 = fn1;
this.meta17315 = meta17315;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async17314.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_17316,meta17315__$1){
var self__ = this;
var _17316__$1 = this;
return (new cljs.core.async.t_cljs$core$async17314(self__.map_LT_,self__.f,self__.ch,self__.meta17312,self__._,self__.fn1,meta17315__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async17314.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_17316){
var self__ = this;
var _17316__$1 = this;
return self__.meta17315;
});})(___$1))
;

cljs.core.async.t_cljs$core$async17314.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async17314.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async17314.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async17314.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__17302_SHARP_){
var G__17317 = (((p1__17302_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__17302_SHARP_) : self__.f.call(null,p1__17302_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__17317) : f1.call(null,G__17317));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async17314.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$map_LT_,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$ch], null))),cljs.core.cst$kw$doc,"Deprecated - this function will be removed. Use transducer instead"], null)),cljs.core.cst$sym$f,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta17312,cljs.core.with_meta(cljs.core.cst$sym$_,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tag,cljs.core.cst$sym$cljs$core$async_SLASH_t_cljs$core$async17311], null)),cljs.core.cst$sym$fn1,cljs.core.cst$sym$meta17315], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async17314.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async17314.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17314";

cljs.core.async.t_cljs$core$async17314.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__5159__auto__,writer__5160__auto__,opt__5161__auto__){
return cljs.core._write(writer__5160__auto__,"cljs.core.async/t_cljs$core$async17314");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async17314 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async17314(map_LT___$1,f__$1,ch__$1,meta17312__$1,___$2,fn1__$1,meta17315){
return (new cljs.core.async.t_cljs$core$async17314(map_LT___$1,f__$1,ch__$1,meta17312__$1,___$2,fn1__$1,meta17315));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async17314(self__.map_LT_,self__.f,self__.ch,self__.meta17312,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4549__auto__ = ret;
if(cljs.core.truth_(and__4549__auto__)){
return !(((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(ret) : cljs.core.deref.call(null,ret)) == null));
} else {
return and__4549__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__17318 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(ret) : cljs.core.deref.call(null,ret));
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__17318) : self__.f.call(null,G__17318));
})());
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async17311.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async17311.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async17311.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$map_LT_,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$ch], null))),cljs.core.cst$kw$doc,"Deprecated - this function will be removed. Use transducer instead"], null)),cljs.core.cst$sym$f,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta17312], null);
});

cljs.core.async.t_cljs$core$async17311.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async17311.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17311";

cljs.core.async.t_cljs$core$async17311.cljs$lang$ctorPrWriter = (function (this__5159__auto__,writer__5160__auto__,opt__5161__auto__){
return cljs.core._write(writer__5160__auto__,"cljs.core.async/t_cljs$core$async17311");
});

cljs.core.async.__GT_t_cljs$core$async17311 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async17311(map_LT___$1,f__$1,ch__$1,meta17312){
return (new cljs.core.async.t_cljs$core$async17311(map_LT___$1,f__$1,ch__$1,meta17312));
});

}

return (new cljs.core.async.t_cljs$core$async17311(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async17322 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17322 = (function (map_GT_,f,ch,meta17323){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta17323 = meta17323;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async17322.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17324,meta17323__$1){
var self__ = this;
var _17324__$1 = this;
return (new cljs.core.async.t_cljs$core$async17322(self__.map_GT_,self__.f,self__.ch,meta17323__$1));
});

cljs.core.async.t_cljs$core$async17322.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17324){
var self__ = this;
var _17324__$1 = this;
return self__.meta17323;
});

cljs.core.async.t_cljs$core$async17322.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async17322.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async17322.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async17322.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async17322.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async17322.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
});

cljs.core.async.t_cljs$core$async17322.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$map_GT_,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$ch], null))),cljs.core.cst$kw$doc,"Deprecated - this function will be removed. Use transducer instead"], null)),cljs.core.cst$sym$f,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta17323], null);
});

cljs.core.async.t_cljs$core$async17322.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async17322.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17322";

cljs.core.async.t_cljs$core$async17322.cljs$lang$ctorPrWriter = (function (this__5159__auto__,writer__5160__auto__,opt__5161__auto__){
return cljs.core._write(writer__5160__auto__,"cljs.core.async/t_cljs$core$async17322");
});

cljs.core.async.__GT_t_cljs$core$async17322 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async17322(map_GT___$1,f__$1,ch__$1,meta17323){
return (new cljs.core.async.t_cljs$core$async17322(map_GT___$1,f__$1,ch__$1,meta17323));
});

}

return (new cljs.core.async.t_cljs$core$async17322(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async17328 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17328 = (function (filter_GT_,p,ch,meta17329){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta17329 = meta17329;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async17328.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17330,meta17329__$1){
var self__ = this;
var _17330__$1 = this;
return (new cljs.core.async.t_cljs$core$async17328(self__.filter_GT_,self__.p,self__.ch,meta17329__$1));
});

cljs.core.async.t_cljs$core$async17328.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17330){
var self__ = this;
var _17330__$1 = this;
return self__.meta17329;
});

cljs.core.async.t_cljs$core$async17328.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async17328.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async17328.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t_cljs$core$async17328.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async17328.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async17328.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async17328.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
});

cljs.core.async.t_cljs$core$async17328.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$filter_GT_,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$p,cljs.core.cst$sym$ch], null))),cljs.core.cst$kw$doc,"Deprecated - this function will be removed. Use transducer instead"], null)),cljs.core.cst$sym$p,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta17329], null);
});

cljs.core.async.t_cljs$core$async17328.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async17328.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17328";

cljs.core.async.t_cljs$core$async17328.cljs$lang$ctorPrWriter = (function (this__5159__auto__,writer__5160__auto__,opt__5161__auto__){
return cljs.core._write(writer__5160__auto__,"cljs.core.async/t_cljs$core$async17328");
});

cljs.core.async.__GT_t_cljs$core$async17328 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async17328(filter_GT___$1,p__$1,ch__$1,meta17329){
return (new cljs.core.async.t_cljs$core$async17328(filter_GT___$1,p__$1,ch__$1,meta17329));
});

}

return (new cljs.core.async.t_cljs$core$async17328(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var args17331 = [];
var len__5619__auto___17375 = arguments.length;
var i__5620__auto___17376 = (0);
while(true){
if((i__5620__auto___17376 < len__5619__auto___17375)){
args17331.push((arguments[i__5620__auto___17376]));

var G__17377 = (i__5620__auto___17376 + (1));
i__5620__auto___17376 = G__17377;
continue;
} else {
}
break;
}

var G__17333 = args17331.length;
switch (G__17333) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17331.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__8570__auto___17379 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__8570__auto___17379,out){
return (function (){
var f__8571__auto__ = (function (){var switch__8503__auto__ = ((function (c__8570__auto___17379,out){
return (function (state_17354){
var state_val_17355 = (state_17354[(1)]);
if((state_val_17355 === (7))){
var inst_17350 = (state_17354[(2)]);
var state_17354__$1 = state_17354;
var statearr_17356_17380 = state_17354__$1;
(statearr_17356_17380[(2)] = inst_17350);

(statearr_17356_17380[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17355 === (1))){
var state_17354__$1 = state_17354;
var statearr_17357_17381 = state_17354__$1;
(statearr_17357_17381[(2)] = null);

(statearr_17357_17381[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17355 === (4))){
var inst_17336 = (state_17354[(7)]);
var inst_17336__$1 = (state_17354[(2)]);
var inst_17337 = (inst_17336__$1 == null);
var state_17354__$1 = (function (){var statearr_17358 = state_17354;
(statearr_17358[(7)] = inst_17336__$1);

return statearr_17358;
})();
if(cljs.core.truth_(inst_17337)){
var statearr_17359_17382 = state_17354__$1;
(statearr_17359_17382[(1)] = (5));

} else {
var statearr_17360_17383 = state_17354__$1;
(statearr_17360_17383[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17355 === (6))){
var inst_17336 = (state_17354[(7)]);
var inst_17341 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_17336) : p.call(null,inst_17336));
var state_17354__$1 = state_17354;
if(cljs.core.truth_(inst_17341)){
var statearr_17361_17384 = state_17354__$1;
(statearr_17361_17384[(1)] = (8));

} else {
var statearr_17362_17385 = state_17354__$1;
(statearr_17362_17385[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17355 === (3))){
var inst_17352 = (state_17354[(2)]);
var state_17354__$1 = state_17354;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17354__$1,inst_17352);
} else {
if((state_val_17355 === (2))){
var state_17354__$1 = state_17354;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17354__$1,(4),ch);
} else {
if((state_val_17355 === (11))){
var inst_17344 = (state_17354[(2)]);
var state_17354__$1 = state_17354;
var statearr_17363_17386 = state_17354__$1;
(statearr_17363_17386[(2)] = inst_17344);

(statearr_17363_17386[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17355 === (9))){
var state_17354__$1 = state_17354;
var statearr_17364_17387 = state_17354__$1;
(statearr_17364_17387[(2)] = null);

(statearr_17364_17387[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17355 === (5))){
var inst_17339 = cljs.core.async.close_BANG_(out);
var state_17354__$1 = state_17354;
var statearr_17365_17388 = state_17354__$1;
(statearr_17365_17388[(2)] = inst_17339);

(statearr_17365_17388[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17355 === (10))){
var inst_17347 = (state_17354[(2)]);
var state_17354__$1 = (function (){var statearr_17366 = state_17354;
(statearr_17366[(8)] = inst_17347);

return statearr_17366;
})();
var statearr_17367_17389 = state_17354__$1;
(statearr_17367_17389[(2)] = null);

(statearr_17367_17389[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17355 === (8))){
var inst_17336 = (state_17354[(7)]);
var state_17354__$1 = state_17354;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17354__$1,(11),out,inst_17336);
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
});})(c__8570__auto___17379,out))
;
return ((function (switch__8503__auto__,c__8570__auto___17379,out){
return (function() {
var cljs$core$async$state_machine__8504__auto__ = null;
var cljs$core$async$state_machine__8504__auto____0 = (function (){
var statearr_17371 = [null,null,null,null,null,null,null,null,null];
(statearr_17371[(0)] = cljs$core$async$state_machine__8504__auto__);

(statearr_17371[(1)] = (1));

return statearr_17371;
});
var cljs$core$async$state_machine__8504__auto____1 = (function (state_17354){
while(true){
var ret_value__8505__auto__ = (function (){try{while(true){
var result__8506__auto__ = switch__8503__auto__(state_17354);
if(cljs.core.keyword_identical_QMARK_(result__8506__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__8506__auto__;
}
break;
}
}catch (e17372){if((e17372 instanceof Object)){
var ex__8507__auto__ = e17372;
var statearr_17373_17390 = state_17354;
(statearr_17373_17390[(5)] = ex__8507__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_17354);

return cljs.core.cst$kw$recur;
} else {
throw e17372;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__8505__auto__,cljs.core.cst$kw$recur)){
var G__17391 = state_17354;
state_17354 = G__17391;
continue;
} else {
return ret_value__8505__auto__;
}
break;
}
});
cljs$core$async$state_machine__8504__auto__ = function(state_17354){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__8504__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__8504__auto____1.call(this,state_17354);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__8504__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__8504__auto____0;
cljs$core$async$state_machine__8504__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__8504__auto____1;
return cljs$core$async$state_machine__8504__auto__;
})()
;})(switch__8503__auto__,c__8570__auto___17379,out))
})();
var state__8572__auto__ = (function (){var statearr_17374 = (f__8571__auto__.cljs$core$IFn$_invoke$arity$0 ? f__8571__auto__.cljs$core$IFn$_invoke$arity$0() : f__8571__auto__.call(null));
(statearr_17374[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8570__auto___17379);

return statearr_17374;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__8572__auto__);
});})(c__8570__auto___17379,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args17392 = [];
var len__5619__auto___17395 = arguments.length;
var i__5620__auto___17396 = (0);
while(true){
if((i__5620__auto___17396 < len__5619__auto___17395)){
args17392.push((arguments[i__5620__auto___17396]));

var G__17397 = (i__5620__auto___17396 + (1));
i__5620__auto___17396 = G__17397;
continue;
} else {
}
break;
}

var G__17394 = args17392.length;
switch (G__17394) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17392.length)].join('')));

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
return (function (state_17564){
var state_val_17565 = (state_17564[(1)]);
if((state_val_17565 === (7))){
var inst_17560 = (state_17564[(2)]);
var state_17564__$1 = state_17564;
var statearr_17566_17607 = state_17564__$1;
(statearr_17566_17607[(2)] = inst_17560);

(statearr_17566_17607[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17565 === (20))){
var inst_17530 = (state_17564[(7)]);
var inst_17541 = (state_17564[(2)]);
var inst_17542 = cljs.core.next(inst_17530);
var inst_17516 = inst_17542;
var inst_17517 = null;
var inst_17518 = (0);
var inst_17519 = (0);
var state_17564__$1 = (function (){var statearr_17567 = state_17564;
(statearr_17567[(8)] = inst_17518);

(statearr_17567[(9)] = inst_17516);

(statearr_17567[(10)] = inst_17517);

(statearr_17567[(11)] = inst_17519);

(statearr_17567[(12)] = inst_17541);

return statearr_17567;
})();
var statearr_17568_17608 = state_17564__$1;
(statearr_17568_17608[(2)] = null);

(statearr_17568_17608[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17565 === (1))){
var state_17564__$1 = state_17564;
var statearr_17569_17609 = state_17564__$1;
(statearr_17569_17609[(2)] = null);

(statearr_17569_17609[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17565 === (4))){
var inst_17505 = (state_17564[(13)]);
var inst_17505__$1 = (state_17564[(2)]);
var inst_17506 = (inst_17505__$1 == null);
var state_17564__$1 = (function (){var statearr_17570 = state_17564;
(statearr_17570[(13)] = inst_17505__$1);

return statearr_17570;
})();
if(cljs.core.truth_(inst_17506)){
var statearr_17571_17610 = state_17564__$1;
(statearr_17571_17610[(1)] = (5));

} else {
var statearr_17572_17611 = state_17564__$1;
(statearr_17572_17611[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17565 === (15))){
var state_17564__$1 = state_17564;
var statearr_17576_17612 = state_17564__$1;
(statearr_17576_17612[(2)] = null);

(statearr_17576_17612[(1)] = (16));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17565 === (21))){
var state_17564__$1 = state_17564;
var statearr_17577_17613 = state_17564__$1;
(statearr_17577_17613[(2)] = null);

(statearr_17577_17613[(1)] = (23));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17565 === (13))){
var inst_17518 = (state_17564[(8)]);
var inst_17516 = (state_17564[(9)]);
var inst_17517 = (state_17564[(10)]);
var inst_17519 = (state_17564[(11)]);
var inst_17526 = (state_17564[(2)]);
var inst_17527 = (inst_17519 + (1));
var tmp17573 = inst_17518;
var tmp17574 = inst_17516;
var tmp17575 = inst_17517;
var inst_17516__$1 = tmp17574;
var inst_17517__$1 = tmp17575;
var inst_17518__$1 = tmp17573;
var inst_17519__$1 = inst_17527;
var state_17564__$1 = (function (){var statearr_17578 = state_17564;
(statearr_17578[(8)] = inst_17518__$1);

(statearr_17578[(9)] = inst_17516__$1);

(statearr_17578[(10)] = inst_17517__$1);

(statearr_17578[(11)] = inst_17519__$1);

(statearr_17578[(14)] = inst_17526);

return statearr_17578;
})();
var statearr_17579_17614 = state_17564__$1;
(statearr_17579_17614[(2)] = null);

(statearr_17579_17614[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17565 === (22))){
var state_17564__$1 = state_17564;
var statearr_17580_17615 = state_17564__$1;
(statearr_17580_17615[(2)] = null);

(statearr_17580_17615[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17565 === (6))){
var inst_17505 = (state_17564[(13)]);
var inst_17514 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_17505) : f.call(null,inst_17505));
var inst_17515 = cljs.core.seq(inst_17514);
var inst_17516 = inst_17515;
var inst_17517 = null;
var inst_17518 = (0);
var inst_17519 = (0);
var state_17564__$1 = (function (){var statearr_17581 = state_17564;
(statearr_17581[(8)] = inst_17518);

(statearr_17581[(9)] = inst_17516);

(statearr_17581[(10)] = inst_17517);

(statearr_17581[(11)] = inst_17519);

return statearr_17581;
})();
var statearr_17582_17616 = state_17564__$1;
(statearr_17582_17616[(2)] = null);

(statearr_17582_17616[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17565 === (17))){
var inst_17530 = (state_17564[(7)]);
var inst_17534 = cljs.core.chunk_first(inst_17530);
var inst_17535 = cljs.core.chunk_rest(inst_17530);
var inst_17536 = cljs.core.count(inst_17534);
var inst_17516 = inst_17535;
var inst_17517 = inst_17534;
var inst_17518 = inst_17536;
var inst_17519 = (0);
var state_17564__$1 = (function (){var statearr_17583 = state_17564;
(statearr_17583[(8)] = inst_17518);

(statearr_17583[(9)] = inst_17516);

(statearr_17583[(10)] = inst_17517);

(statearr_17583[(11)] = inst_17519);

return statearr_17583;
})();
var statearr_17584_17617 = state_17564__$1;
(statearr_17584_17617[(2)] = null);

(statearr_17584_17617[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17565 === (3))){
var inst_17562 = (state_17564[(2)]);
var state_17564__$1 = state_17564;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17564__$1,inst_17562);
} else {
if((state_val_17565 === (12))){
var inst_17550 = (state_17564[(2)]);
var state_17564__$1 = state_17564;
var statearr_17585_17618 = state_17564__$1;
(statearr_17585_17618[(2)] = inst_17550);

(statearr_17585_17618[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17565 === (2))){
var state_17564__$1 = state_17564;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17564__$1,(4),in$);
} else {
if((state_val_17565 === (23))){
var inst_17558 = (state_17564[(2)]);
var state_17564__$1 = state_17564;
var statearr_17586_17619 = state_17564__$1;
(statearr_17586_17619[(2)] = inst_17558);

(statearr_17586_17619[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17565 === (19))){
var inst_17545 = (state_17564[(2)]);
var state_17564__$1 = state_17564;
var statearr_17587_17620 = state_17564__$1;
(statearr_17587_17620[(2)] = inst_17545);

(statearr_17587_17620[(1)] = (16));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17565 === (11))){
var inst_17516 = (state_17564[(9)]);
var inst_17530 = (state_17564[(7)]);
var inst_17530__$1 = cljs.core.seq(inst_17516);
var state_17564__$1 = (function (){var statearr_17588 = state_17564;
(statearr_17588[(7)] = inst_17530__$1);

return statearr_17588;
})();
if(inst_17530__$1){
var statearr_17589_17621 = state_17564__$1;
(statearr_17589_17621[(1)] = (14));

} else {
var statearr_17590_17622 = state_17564__$1;
(statearr_17590_17622[(1)] = (15));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17565 === (9))){
var inst_17552 = (state_17564[(2)]);
var inst_17553 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_17564__$1 = (function (){var statearr_17591 = state_17564;
(statearr_17591[(15)] = inst_17552);

return statearr_17591;
})();
if(cljs.core.truth_(inst_17553)){
var statearr_17592_17623 = state_17564__$1;
(statearr_17592_17623[(1)] = (21));

} else {
var statearr_17593_17624 = state_17564__$1;
(statearr_17593_17624[(1)] = (22));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17565 === (5))){
var inst_17508 = cljs.core.async.close_BANG_(out);
var state_17564__$1 = state_17564;
var statearr_17594_17625 = state_17564__$1;
(statearr_17594_17625[(2)] = inst_17508);

(statearr_17594_17625[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17565 === (14))){
var inst_17530 = (state_17564[(7)]);
var inst_17532 = cljs.core.chunked_seq_QMARK_(inst_17530);
var state_17564__$1 = state_17564;
if(inst_17532){
var statearr_17595_17626 = state_17564__$1;
(statearr_17595_17626[(1)] = (17));

} else {
var statearr_17596_17627 = state_17564__$1;
(statearr_17596_17627[(1)] = (18));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17565 === (16))){
var inst_17548 = (state_17564[(2)]);
var state_17564__$1 = state_17564;
var statearr_17597_17628 = state_17564__$1;
(statearr_17597_17628[(2)] = inst_17548);

(statearr_17597_17628[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17565 === (10))){
var inst_17517 = (state_17564[(10)]);
var inst_17519 = (state_17564[(11)]);
var inst_17524 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_17517,inst_17519);
var state_17564__$1 = state_17564;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17564__$1,(13),out,inst_17524);
} else {
if((state_val_17565 === (18))){
var inst_17530 = (state_17564[(7)]);
var inst_17539 = cljs.core.first(inst_17530);
var state_17564__$1 = state_17564;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17564__$1,(20),out,inst_17539);
} else {
if((state_val_17565 === (8))){
var inst_17518 = (state_17564[(8)]);
var inst_17519 = (state_17564[(11)]);
var inst_17521 = (inst_17519 < inst_17518);
var inst_17522 = inst_17521;
var state_17564__$1 = state_17564;
if(cljs.core.truth_(inst_17522)){
var statearr_17598_17629 = state_17564__$1;
(statearr_17598_17629[(1)] = (10));

} else {
var statearr_17599_17630 = state_17564__$1;
(statearr_17599_17630[(1)] = (11));

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
var statearr_17603 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17603[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__8504__auto__);

(statearr_17603[(1)] = (1));

return statearr_17603;
});
var cljs$core$async$mapcat_STAR__$_state_machine__8504__auto____1 = (function (state_17564){
while(true){
var ret_value__8505__auto__ = (function (){try{while(true){
var result__8506__auto__ = switch__8503__auto__(state_17564);
if(cljs.core.keyword_identical_QMARK_(result__8506__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__8506__auto__;
}
break;
}
}catch (e17604){if((e17604 instanceof Object)){
var ex__8507__auto__ = e17604;
var statearr_17605_17631 = state_17564;
(statearr_17605_17631[(5)] = ex__8507__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_17564);

return cljs.core.cst$kw$recur;
} else {
throw e17604;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__8505__auto__,cljs.core.cst$kw$recur)){
var G__17632 = state_17564;
state_17564 = G__17632;
continue;
} else {
return ret_value__8505__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__8504__auto__ = function(state_17564){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__8504__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__8504__auto____1.call(this,state_17564);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__8504__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__8504__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__8504__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__8504__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__8504__auto__;
})()
;})(switch__8503__auto__,c__8570__auto__))
})();
var state__8572__auto__ = (function (){var statearr_17606 = (f__8571__auto__.cljs$core$IFn$_invoke$arity$0 ? f__8571__auto__.cljs$core$IFn$_invoke$arity$0() : f__8571__auto__.call(null));
(statearr_17606[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8570__auto__);

return statearr_17606;
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
var args17633 = [];
var len__5619__auto___17636 = arguments.length;
var i__5620__auto___17637 = (0);
while(true){
if((i__5620__auto___17637 < len__5619__auto___17636)){
args17633.push((arguments[i__5620__auto___17637]));

var G__17638 = (i__5620__auto___17637 + (1));
i__5620__auto___17637 = G__17638;
continue;
} else {
}
break;
}

var G__17635 = args17633.length;
switch (G__17635) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17633.length)].join('')));

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
var args17640 = [];
var len__5619__auto___17643 = arguments.length;
var i__5620__auto___17644 = (0);
while(true){
if((i__5620__auto___17644 < len__5619__auto___17643)){
args17640.push((arguments[i__5620__auto___17644]));

var G__17645 = (i__5620__auto___17644 + (1));
i__5620__auto___17644 = G__17645;
continue;
} else {
}
break;
}

var G__17642 = args17640.length;
switch (G__17642) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17640.length)].join('')));

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
var args17647 = [];
var len__5619__auto___17698 = arguments.length;
var i__5620__auto___17699 = (0);
while(true){
if((i__5620__auto___17699 < len__5619__auto___17698)){
args17647.push((arguments[i__5620__auto___17699]));

var G__17700 = (i__5620__auto___17699 + (1));
i__5620__auto___17699 = G__17700;
continue;
} else {
}
break;
}

var G__17649 = args17647.length;
switch (G__17649) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17647.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__8570__auto___17702 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__8570__auto___17702,out){
return (function (){
var f__8571__auto__ = (function (){var switch__8503__auto__ = ((function (c__8570__auto___17702,out){
return (function (state_17673){
var state_val_17674 = (state_17673[(1)]);
if((state_val_17674 === (7))){
var inst_17668 = (state_17673[(2)]);
var state_17673__$1 = state_17673;
var statearr_17675_17703 = state_17673__$1;
(statearr_17675_17703[(2)] = inst_17668);

(statearr_17675_17703[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17674 === (1))){
var inst_17650 = null;
var state_17673__$1 = (function (){var statearr_17676 = state_17673;
(statearr_17676[(7)] = inst_17650);

return statearr_17676;
})();
var statearr_17677_17704 = state_17673__$1;
(statearr_17677_17704[(2)] = null);

(statearr_17677_17704[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17674 === (4))){
var inst_17653 = (state_17673[(8)]);
var inst_17653__$1 = (state_17673[(2)]);
var inst_17654 = (inst_17653__$1 == null);
var inst_17655 = cljs.core.not(inst_17654);
var state_17673__$1 = (function (){var statearr_17678 = state_17673;
(statearr_17678[(8)] = inst_17653__$1);

return statearr_17678;
})();
if(inst_17655){
var statearr_17679_17705 = state_17673__$1;
(statearr_17679_17705[(1)] = (5));

} else {
var statearr_17680_17706 = state_17673__$1;
(statearr_17680_17706[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17674 === (6))){
var state_17673__$1 = state_17673;
var statearr_17681_17707 = state_17673__$1;
(statearr_17681_17707[(2)] = null);

(statearr_17681_17707[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17674 === (3))){
var inst_17670 = (state_17673[(2)]);
var inst_17671 = cljs.core.async.close_BANG_(out);
var state_17673__$1 = (function (){var statearr_17682 = state_17673;
(statearr_17682[(9)] = inst_17670);

return statearr_17682;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_17673__$1,inst_17671);
} else {
if((state_val_17674 === (2))){
var state_17673__$1 = state_17673;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17673__$1,(4),ch);
} else {
if((state_val_17674 === (11))){
var inst_17653 = (state_17673[(8)]);
var inst_17662 = (state_17673[(2)]);
var inst_17650 = inst_17653;
var state_17673__$1 = (function (){var statearr_17683 = state_17673;
(statearr_17683[(7)] = inst_17650);

(statearr_17683[(10)] = inst_17662);

return statearr_17683;
})();
var statearr_17684_17708 = state_17673__$1;
(statearr_17684_17708[(2)] = null);

(statearr_17684_17708[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17674 === (9))){
var inst_17653 = (state_17673[(8)]);
var state_17673__$1 = state_17673;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17673__$1,(11),out,inst_17653);
} else {
if((state_val_17674 === (5))){
var inst_17653 = (state_17673[(8)]);
var inst_17650 = (state_17673[(7)]);
var inst_17657 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_17653,inst_17650);
var state_17673__$1 = state_17673;
if(inst_17657){
var statearr_17686_17709 = state_17673__$1;
(statearr_17686_17709[(1)] = (8));

} else {
var statearr_17687_17710 = state_17673__$1;
(statearr_17687_17710[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17674 === (10))){
var inst_17665 = (state_17673[(2)]);
var state_17673__$1 = state_17673;
var statearr_17688_17711 = state_17673__$1;
(statearr_17688_17711[(2)] = inst_17665);

(statearr_17688_17711[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17674 === (8))){
var inst_17650 = (state_17673[(7)]);
var tmp17685 = inst_17650;
var inst_17650__$1 = tmp17685;
var state_17673__$1 = (function (){var statearr_17689 = state_17673;
(statearr_17689[(7)] = inst_17650__$1);

return statearr_17689;
})();
var statearr_17690_17712 = state_17673__$1;
(statearr_17690_17712[(2)] = null);

(statearr_17690_17712[(1)] = (2));


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
});})(c__8570__auto___17702,out))
;
return ((function (switch__8503__auto__,c__8570__auto___17702,out){
return (function() {
var cljs$core$async$state_machine__8504__auto__ = null;
var cljs$core$async$state_machine__8504__auto____0 = (function (){
var statearr_17694 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_17694[(0)] = cljs$core$async$state_machine__8504__auto__);

(statearr_17694[(1)] = (1));

return statearr_17694;
});
var cljs$core$async$state_machine__8504__auto____1 = (function (state_17673){
while(true){
var ret_value__8505__auto__ = (function (){try{while(true){
var result__8506__auto__ = switch__8503__auto__(state_17673);
if(cljs.core.keyword_identical_QMARK_(result__8506__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__8506__auto__;
}
break;
}
}catch (e17695){if((e17695 instanceof Object)){
var ex__8507__auto__ = e17695;
var statearr_17696_17713 = state_17673;
(statearr_17696_17713[(5)] = ex__8507__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_17673);

return cljs.core.cst$kw$recur;
} else {
throw e17695;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__8505__auto__,cljs.core.cst$kw$recur)){
var G__17714 = state_17673;
state_17673 = G__17714;
continue;
} else {
return ret_value__8505__auto__;
}
break;
}
});
cljs$core$async$state_machine__8504__auto__ = function(state_17673){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__8504__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__8504__auto____1.call(this,state_17673);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__8504__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__8504__auto____0;
cljs$core$async$state_machine__8504__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__8504__auto____1;
return cljs$core$async$state_machine__8504__auto__;
})()
;})(switch__8503__auto__,c__8570__auto___17702,out))
})();
var state__8572__auto__ = (function (){var statearr_17697 = (f__8571__auto__.cljs$core$IFn$_invoke$arity$0 ? f__8571__auto__.cljs$core$IFn$_invoke$arity$0() : f__8571__auto__.call(null));
(statearr_17697[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8570__auto___17702);

return statearr_17697;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__8572__auto__);
});})(c__8570__auto___17702,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args17715 = [];
var len__5619__auto___17785 = arguments.length;
var i__5620__auto___17786 = (0);
while(true){
if((i__5620__auto___17786 < len__5619__auto___17785)){
args17715.push((arguments[i__5620__auto___17786]));

var G__17787 = (i__5620__auto___17786 + (1));
i__5620__auto___17786 = G__17787;
continue;
} else {
}
break;
}

var G__17717 = args17715.length;
switch (G__17717) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17715.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__8570__auto___17789 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__8570__auto___17789,out){
return (function (){
var f__8571__auto__ = (function (){var switch__8503__auto__ = ((function (c__8570__auto___17789,out){
return (function (state_17755){
var state_val_17756 = (state_17755[(1)]);
if((state_val_17756 === (7))){
var inst_17751 = (state_17755[(2)]);
var state_17755__$1 = state_17755;
var statearr_17757_17790 = state_17755__$1;
(statearr_17757_17790[(2)] = inst_17751);

(statearr_17757_17790[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17756 === (1))){
var inst_17718 = (new Array(n));
var inst_17719 = inst_17718;
var inst_17720 = (0);
var state_17755__$1 = (function (){var statearr_17758 = state_17755;
(statearr_17758[(7)] = inst_17720);

(statearr_17758[(8)] = inst_17719);

return statearr_17758;
})();
var statearr_17759_17791 = state_17755__$1;
(statearr_17759_17791[(2)] = null);

(statearr_17759_17791[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17756 === (4))){
var inst_17723 = (state_17755[(9)]);
var inst_17723__$1 = (state_17755[(2)]);
var inst_17724 = (inst_17723__$1 == null);
var inst_17725 = cljs.core.not(inst_17724);
var state_17755__$1 = (function (){var statearr_17760 = state_17755;
(statearr_17760[(9)] = inst_17723__$1);

return statearr_17760;
})();
if(inst_17725){
var statearr_17761_17792 = state_17755__$1;
(statearr_17761_17792[(1)] = (5));

} else {
var statearr_17762_17793 = state_17755__$1;
(statearr_17762_17793[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17756 === (15))){
var inst_17745 = (state_17755[(2)]);
var state_17755__$1 = state_17755;
var statearr_17763_17794 = state_17755__$1;
(statearr_17763_17794[(2)] = inst_17745);

(statearr_17763_17794[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17756 === (13))){
var state_17755__$1 = state_17755;
var statearr_17764_17795 = state_17755__$1;
(statearr_17764_17795[(2)] = null);

(statearr_17764_17795[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17756 === (6))){
var inst_17720 = (state_17755[(7)]);
var inst_17741 = (inst_17720 > (0));
var state_17755__$1 = state_17755;
if(cljs.core.truth_(inst_17741)){
var statearr_17765_17796 = state_17755__$1;
(statearr_17765_17796[(1)] = (12));

} else {
var statearr_17766_17797 = state_17755__$1;
(statearr_17766_17797[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17756 === (3))){
var inst_17753 = (state_17755[(2)]);
var state_17755__$1 = state_17755;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17755__$1,inst_17753);
} else {
if((state_val_17756 === (12))){
var inst_17719 = (state_17755[(8)]);
var inst_17743 = cljs.core.vec(inst_17719);
var state_17755__$1 = state_17755;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17755__$1,(15),out,inst_17743);
} else {
if((state_val_17756 === (2))){
var state_17755__$1 = state_17755;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17755__$1,(4),ch);
} else {
if((state_val_17756 === (11))){
var inst_17735 = (state_17755[(2)]);
var inst_17736 = (new Array(n));
var inst_17719 = inst_17736;
var inst_17720 = (0);
var state_17755__$1 = (function (){var statearr_17767 = state_17755;
(statearr_17767[(7)] = inst_17720);

(statearr_17767[(10)] = inst_17735);

(statearr_17767[(8)] = inst_17719);

return statearr_17767;
})();
var statearr_17768_17798 = state_17755__$1;
(statearr_17768_17798[(2)] = null);

(statearr_17768_17798[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17756 === (9))){
var inst_17719 = (state_17755[(8)]);
var inst_17733 = cljs.core.vec(inst_17719);
var state_17755__$1 = state_17755;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17755__$1,(11),out,inst_17733);
} else {
if((state_val_17756 === (5))){
var inst_17720 = (state_17755[(7)]);
var inst_17728 = (state_17755[(11)]);
var inst_17723 = (state_17755[(9)]);
var inst_17719 = (state_17755[(8)]);
var inst_17727 = (inst_17719[inst_17720] = inst_17723);
var inst_17728__$1 = (inst_17720 + (1));
var inst_17729 = (inst_17728__$1 < n);
var state_17755__$1 = (function (){var statearr_17769 = state_17755;
(statearr_17769[(11)] = inst_17728__$1);

(statearr_17769[(12)] = inst_17727);

return statearr_17769;
})();
if(cljs.core.truth_(inst_17729)){
var statearr_17770_17799 = state_17755__$1;
(statearr_17770_17799[(1)] = (8));

} else {
var statearr_17771_17800 = state_17755__$1;
(statearr_17771_17800[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17756 === (14))){
var inst_17748 = (state_17755[(2)]);
var inst_17749 = cljs.core.async.close_BANG_(out);
var state_17755__$1 = (function (){var statearr_17773 = state_17755;
(statearr_17773[(13)] = inst_17748);

return statearr_17773;
})();
var statearr_17774_17801 = state_17755__$1;
(statearr_17774_17801[(2)] = inst_17749);

(statearr_17774_17801[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17756 === (10))){
var inst_17739 = (state_17755[(2)]);
var state_17755__$1 = state_17755;
var statearr_17775_17802 = state_17755__$1;
(statearr_17775_17802[(2)] = inst_17739);

(statearr_17775_17802[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17756 === (8))){
var inst_17728 = (state_17755[(11)]);
var inst_17719 = (state_17755[(8)]);
var tmp17772 = inst_17719;
var inst_17719__$1 = tmp17772;
var inst_17720 = inst_17728;
var state_17755__$1 = (function (){var statearr_17776 = state_17755;
(statearr_17776[(7)] = inst_17720);

(statearr_17776[(8)] = inst_17719__$1);

return statearr_17776;
})();
var statearr_17777_17803 = state_17755__$1;
(statearr_17777_17803[(2)] = null);

(statearr_17777_17803[(1)] = (2));


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
});})(c__8570__auto___17789,out))
;
return ((function (switch__8503__auto__,c__8570__auto___17789,out){
return (function() {
var cljs$core$async$state_machine__8504__auto__ = null;
var cljs$core$async$state_machine__8504__auto____0 = (function (){
var statearr_17781 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17781[(0)] = cljs$core$async$state_machine__8504__auto__);

(statearr_17781[(1)] = (1));

return statearr_17781;
});
var cljs$core$async$state_machine__8504__auto____1 = (function (state_17755){
while(true){
var ret_value__8505__auto__ = (function (){try{while(true){
var result__8506__auto__ = switch__8503__auto__(state_17755);
if(cljs.core.keyword_identical_QMARK_(result__8506__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__8506__auto__;
}
break;
}
}catch (e17782){if((e17782 instanceof Object)){
var ex__8507__auto__ = e17782;
var statearr_17783_17804 = state_17755;
(statearr_17783_17804[(5)] = ex__8507__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_17755);

return cljs.core.cst$kw$recur;
} else {
throw e17782;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__8505__auto__,cljs.core.cst$kw$recur)){
var G__17805 = state_17755;
state_17755 = G__17805;
continue;
} else {
return ret_value__8505__auto__;
}
break;
}
});
cljs$core$async$state_machine__8504__auto__ = function(state_17755){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__8504__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__8504__auto____1.call(this,state_17755);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__8504__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__8504__auto____0;
cljs$core$async$state_machine__8504__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__8504__auto____1;
return cljs$core$async$state_machine__8504__auto__;
})()
;})(switch__8503__auto__,c__8570__auto___17789,out))
})();
var state__8572__auto__ = (function (){var statearr_17784 = (f__8571__auto__.cljs$core$IFn$_invoke$arity$0 ? f__8571__auto__.cljs$core$IFn$_invoke$arity$0() : f__8571__auto__.call(null));
(statearr_17784[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8570__auto___17789);

return statearr_17784;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__8572__auto__);
});})(c__8570__auto___17789,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args17806 = [];
var len__5619__auto___17880 = arguments.length;
var i__5620__auto___17881 = (0);
while(true){
if((i__5620__auto___17881 < len__5619__auto___17880)){
args17806.push((arguments[i__5620__auto___17881]));

var G__17882 = (i__5620__auto___17881 + (1));
i__5620__auto___17881 = G__17882;
continue;
} else {
}
break;
}

var G__17808 = args17806.length;
switch (G__17808) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17806.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__8570__auto___17884 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__8570__auto___17884,out){
return (function (){
var f__8571__auto__ = (function (){var switch__8503__auto__ = ((function (c__8570__auto___17884,out){
return (function (state_17850){
var state_val_17851 = (state_17850[(1)]);
if((state_val_17851 === (7))){
var inst_17846 = (state_17850[(2)]);
var state_17850__$1 = state_17850;
var statearr_17852_17885 = state_17850__$1;
(statearr_17852_17885[(2)] = inst_17846);

(statearr_17852_17885[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17851 === (1))){
var inst_17809 = [];
var inst_17810 = inst_17809;
var inst_17811 = cljs.core.cst$kw$cljs$core$async_SLASH_nothing;
var state_17850__$1 = (function (){var statearr_17853 = state_17850;
(statearr_17853[(7)] = inst_17811);

(statearr_17853[(8)] = inst_17810);

return statearr_17853;
})();
var statearr_17854_17886 = state_17850__$1;
(statearr_17854_17886[(2)] = null);

(statearr_17854_17886[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17851 === (4))){
var inst_17814 = (state_17850[(9)]);
var inst_17814__$1 = (state_17850[(2)]);
var inst_17815 = (inst_17814__$1 == null);
var inst_17816 = cljs.core.not(inst_17815);
var state_17850__$1 = (function (){var statearr_17855 = state_17850;
(statearr_17855[(9)] = inst_17814__$1);

return statearr_17855;
})();
if(inst_17816){
var statearr_17856_17887 = state_17850__$1;
(statearr_17856_17887[(1)] = (5));

} else {
var statearr_17857_17888 = state_17850__$1;
(statearr_17857_17888[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17851 === (15))){
var inst_17840 = (state_17850[(2)]);
var state_17850__$1 = state_17850;
var statearr_17858_17889 = state_17850__$1;
(statearr_17858_17889[(2)] = inst_17840);

(statearr_17858_17889[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17851 === (13))){
var state_17850__$1 = state_17850;
var statearr_17859_17890 = state_17850__$1;
(statearr_17859_17890[(2)] = null);

(statearr_17859_17890[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17851 === (6))){
var inst_17810 = (state_17850[(8)]);
var inst_17835 = inst_17810.length;
var inst_17836 = (inst_17835 > (0));
var state_17850__$1 = state_17850;
if(cljs.core.truth_(inst_17836)){
var statearr_17860_17891 = state_17850__$1;
(statearr_17860_17891[(1)] = (12));

} else {
var statearr_17861_17892 = state_17850__$1;
(statearr_17861_17892[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17851 === (3))){
var inst_17848 = (state_17850[(2)]);
var state_17850__$1 = state_17850;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17850__$1,inst_17848);
} else {
if((state_val_17851 === (12))){
var inst_17810 = (state_17850[(8)]);
var inst_17838 = cljs.core.vec(inst_17810);
var state_17850__$1 = state_17850;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17850__$1,(15),out,inst_17838);
} else {
if((state_val_17851 === (2))){
var state_17850__$1 = state_17850;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17850__$1,(4),ch);
} else {
if((state_val_17851 === (11))){
var inst_17814 = (state_17850[(9)]);
var inst_17818 = (state_17850[(10)]);
var inst_17828 = (state_17850[(2)]);
var inst_17829 = [];
var inst_17830 = inst_17829.push(inst_17814);
var inst_17810 = inst_17829;
var inst_17811 = inst_17818;
var state_17850__$1 = (function (){var statearr_17862 = state_17850;
(statearr_17862[(7)] = inst_17811);

(statearr_17862[(11)] = inst_17828);

(statearr_17862[(8)] = inst_17810);

(statearr_17862[(12)] = inst_17830);

return statearr_17862;
})();
var statearr_17863_17893 = state_17850__$1;
(statearr_17863_17893[(2)] = null);

(statearr_17863_17893[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17851 === (9))){
var inst_17810 = (state_17850[(8)]);
var inst_17826 = cljs.core.vec(inst_17810);
var state_17850__$1 = state_17850;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17850__$1,(11),out,inst_17826);
} else {
if((state_val_17851 === (5))){
var inst_17811 = (state_17850[(7)]);
var inst_17814 = (state_17850[(9)]);
var inst_17818 = (state_17850[(10)]);
var inst_17818__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_17814) : f.call(null,inst_17814));
var inst_17819 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_17818__$1,inst_17811);
var inst_17820 = cljs.core.keyword_identical_QMARK_(inst_17811,cljs.core.cst$kw$cljs$core$async_SLASH_nothing);
var inst_17821 = (inst_17819) || (inst_17820);
var state_17850__$1 = (function (){var statearr_17864 = state_17850;
(statearr_17864[(10)] = inst_17818__$1);

return statearr_17864;
})();
if(cljs.core.truth_(inst_17821)){
var statearr_17865_17894 = state_17850__$1;
(statearr_17865_17894[(1)] = (8));

} else {
var statearr_17866_17895 = state_17850__$1;
(statearr_17866_17895[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17851 === (14))){
var inst_17843 = (state_17850[(2)]);
var inst_17844 = cljs.core.async.close_BANG_(out);
var state_17850__$1 = (function (){var statearr_17868 = state_17850;
(statearr_17868[(13)] = inst_17843);

return statearr_17868;
})();
var statearr_17869_17896 = state_17850__$1;
(statearr_17869_17896[(2)] = inst_17844);

(statearr_17869_17896[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17851 === (10))){
var inst_17833 = (state_17850[(2)]);
var state_17850__$1 = state_17850;
var statearr_17870_17897 = state_17850__$1;
(statearr_17870_17897[(2)] = inst_17833);

(statearr_17870_17897[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17851 === (8))){
var inst_17810 = (state_17850[(8)]);
var inst_17814 = (state_17850[(9)]);
var inst_17818 = (state_17850[(10)]);
var inst_17823 = inst_17810.push(inst_17814);
var tmp17867 = inst_17810;
var inst_17810__$1 = tmp17867;
var inst_17811 = inst_17818;
var state_17850__$1 = (function (){var statearr_17871 = state_17850;
(statearr_17871[(7)] = inst_17811);

(statearr_17871[(14)] = inst_17823);

(statearr_17871[(8)] = inst_17810__$1);

return statearr_17871;
})();
var statearr_17872_17898 = state_17850__$1;
(statearr_17872_17898[(2)] = null);

(statearr_17872_17898[(1)] = (2));


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
});})(c__8570__auto___17884,out))
;
return ((function (switch__8503__auto__,c__8570__auto___17884,out){
return (function() {
var cljs$core$async$state_machine__8504__auto__ = null;
var cljs$core$async$state_machine__8504__auto____0 = (function (){
var statearr_17876 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17876[(0)] = cljs$core$async$state_machine__8504__auto__);

(statearr_17876[(1)] = (1));

return statearr_17876;
});
var cljs$core$async$state_machine__8504__auto____1 = (function (state_17850){
while(true){
var ret_value__8505__auto__ = (function (){try{while(true){
var result__8506__auto__ = switch__8503__auto__(state_17850);
if(cljs.core.keyword_identical_QMARK_(result__8506__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__8506__auto__;
}
break;
}
}catch (e17877){if((e17877 instanceof Object)){
var ex__8507__auto__ = e17877;
var statearr_17878_17899 = state_17850;
(statearr_17878_17899[(5)] = ex__8507__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_17850);

return cljs.core.cst$kw$recur;
} else {
throw e17877;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__8505__auto__,cljs.core.cst$kw$recur)){
var G__17900 = state_17850;
state_17850 = G__17900;
continue;
} else {
return ret_value__8505__auto__;
}
break;
}
});
cljs$core$async$state_machine__8504__auto__ = function(state_17850){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__8504__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__8504__auto____1.call(this,state_17850);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__8504__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__8504__auto____0;
cljs$core$async$state_machine__8504__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__8504__auto____1;
return cljs$core$async$state_machine__8504__auto__;
})()
;})(switch__8503__auto__,c__8570__auto___17884,out))
})();
var state__8572__auto__ = (function (){var statearr_17879 = (f__8571__auto__.cljs$core$IFn$_invoke$arity$0 ? f__8571__auto__.cljs$core$IFn$_invoke$arity$0() : f__8571__auto__.call(null));
(statearr_17879[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8570__auto___17884);

return statearr_17879;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__8572__auto__);
});})(c__8570__auto___17884,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;
