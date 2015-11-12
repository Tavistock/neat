// Compiled by ClojureScript 1.7.122 {:static-fns true, :optimize-constants true}
goog.provide('neat.core');
goog.require('cljs.core');
goog.require('neat.state');
goog.require('neat.pool');
goog.require('sablono.core');
goog.require('neat.runner');
goog.require('neat.floppy');
goog.require('om.core');
cljs.core.enable_console_print_BANG_();
neat.core.floppy_QMARK_ = document.getElementById("floppy");
if(cljs.core.truth_(neat.core.floppy_QMARK_)){
if(typeof neat.core.run_BANG__BANG_ !== 'undefined'){
} else {
neat.core.run_BANG__BANG_ = neat.runner.runner(neat.pool.pool(neat.floppy.settings),neat.floppy.interactions);
}
} else {
}
neat.core.hud;
neat.core.main = (function neat$core$main(){
return om.core.root(neat.core.hud,neat.state.app_state,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$target,document.getElementById("app")], null));
});
neat.core.vision = (function neat$core$vision(data){
var scale = (5);
var scaler = ((function (scale){
return (function (n){
return ((n * scale) + scale);
});})(scale))
;
var type = ((function (scale,scaler){
return (function (v){
var pred__23347 = cljs.core._EQ_;
var expr__23348 = v;
if(cljs.core.truth_((pred__23347.cljs$core$IFn$_invoke$arity$2 ? pred__23347.cljs$core$IFn$_invoke$arity$2((0),expr__23348) : pred__23347.call(null,(0),expr__23348)))){
return "zero";
} else {
if(cljs.core.truth_((pred__23347.cljs$core$IFn$_invoke$arity$2 ? pred__23347.cljs$core$IFn$_invoke$arity$2((1),expr__23348) : pred__23347.call(null,(1),expr__23348)))){
return "pos";
} else {
if(cljs.core.truth_((pred__23347.cljs$core$IFn$_invoke$arity$2 ? pred__23347.cljs$core$IFn$_invoke$arity$2((-1),expr__23348) : pred__23347.call(null,(-1),expr__23348)))){
return "neg";
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__23348)].join('')));
}
}
}
});})(scale,scaler))
;
var width = cljs.core.cst$kw$x.cljs$core$IFn$_invoke$arity$1(data);
var rows = cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,cljs.core.partition.cljs$core$IFn$_invoke$arity$2(width,cljs.core.cst$kw$inputs.cljs$core$IFn$_invoke$arity$1(data)));
var height = cljs.core.count(rows);
var G__23419 = "p";
var G__23420 = null;
var G__23421 = "Inputs: ";
var G__23422 = (function (){var G__23423 = "svg";
var G__23424 = {"width": scaler(width), "height": scaler(height), "className": "vision"};
var G__23425 = cljs.core.into_array.cljs$core$IFn$_invoke$arity$1((function (){var iter__5333__auto__ = ((function (G__23423,G__23424,G__23419,G__23420,G__23421,scale,scaler,type,width,rows,height){
return (function neat$core$vision_$_iter__23426(s__23427){
return (new cljs.core.LazySeq(null,((function (G__23423,G__23424,G__23419,G__23420,G__23421,scale,scaler,type,width,rows,height){
return (function (){
var s__23427__$1 = s__23427;
while(true){
var temp__4425__auto__ = cljs.core.seq(s__23427__$1);
if(temp__4425__auto__){
var s__23427__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(s__23427__$2)){
var c__5331__auto__ = cljs.core.chunk_first(s__23427__$2);
var size__5332__auto__ = cljs.core.count(c__5331__auto__);
var b__23429 = cljs.core.chunk_buffer(size__5332__auto__);
if((function (){var i__23428 = (0);
while(true){
if((i__23428 < size__5332__auto__)){
var vec__23462 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__5331__auto__,i__23428);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23462,(0),null);
var row = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23462,(1),null);
cljs.core.chunk_append(b__23429,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1((function (){var iter__5333__auto__ = ((function (i__23428,vec__23462,y,row,c__5331__auto__,size__5332__auto__,b__23429,s__23427__$2,temp__4425__auto__,G__23423,G__23424,G__23419,G__23420,G__23421,scale,scaler,type,width,rows,height){
return (function neat$core$vision_$_iter__23426_$_iter__23463(s__23464){
return (new cljs.core.LazySeq(null,((function (i__23428,vec__23462,y,row,c__5331__auto__,size__5332__auto__,b__23429,s__23427__$2,temp__4425__auto__,G__23423,G__23424,G__23419,G__23420,G__23421,scale,scaler,type,width,rows,height){
return (function (){
var s__23464__$1 = s__23464;
while(true){
var temp__4425__auto____$1 = cljs.core.seq(s__23464__$1);
if(temp__4425__auto____$1){
var s__23464__$2 = temp__4425__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__23464__$2)){
var c__5331__auto____$1 = cljs.core.chunk_first(s__23464__$2);
var size__5332__auto____$1 = cljs.core.count(c__5331__auto____$1);
var b__23466 = cljs.core.chunk_buffer(size__5332__auto____$1);
if((function (){var i__23465 = (0);
while(true){
if((i__23465 < size__5332__auto____$1)){
var vec__23473 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__5331__auto____$1,i__23465);
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23473,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23473,(1),null);
cljs.core.chunk_append(b__23466,sablono.interpreter.interpret((function (){var vec__23474 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(scaler,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null));
var x__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23474,(0),null);
var y__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23474,(1),null);
var class$ = type(v);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$circle,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$cx,x__$1,cljs.core.cst$kw$cy,y__$1,cljs.core.cst$kw$r,(2),cljs.core.cst$kw$class,class$], null),null], null);
})()));

var G__23492 = (i__23465 + (1));
i__23465 = G__23492;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__23466),neat$core$vision_$_iter__23426_$_iter__23463(cljs.core.chunk_rest(s__23464__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__23466),null);
}
} else {
var vec__23475 = cljs.core.first(s__23464__$2);
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23475,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23475,(1),null);
return cljs.core.cons(sablono.interpreter.interpret((function (){var vec__23476 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(scaler,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null));
var x__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23476,(0),null);
var y__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23476,(1),null);
var class$ = type(v);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$circle,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$cx,x__$1,cljs.core.cst$kw$cy,y__$1,cljs.core.cst$kw$r,(2),cljs.core.cst$kw$class,class$], null),null], null);
})()),neat$core$vision_$_iter__23426_$_iter__23463(cljs.core.rest(s__23464__$2)));
}
} else {
return null;
}
break;
}
});})(i__23428,vec__23462,y,row,c__5331__auto__,size__5332__auto__,b__23429,s__23427__$2,temp__4425__auto__,G__23423,G__23424,G__23419,G__23420,G__23421,scale,scaler,type,width,rows,height))
,null,null));
});})(i__23428,vec__23462,y,row,c__5331__auto__,size__5332__auto__,b__23429,s__23427__$2,temp__4425__auto__,G__23423,G__23424,G__23419,G__23420,G__23421,scale,scaler,type,width,rows,height))
;
return iter__5333__auto__(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,row));
})()));

var G__23493 = (i__23428 + (1));
i__23428 = G__23493;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__23429),neat$core$vision_$_iter__23426(cljs.core.chunk_rest(s__23427__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__23429),null);
}
} else {
var vec__23477 = cljs.core.first(s__23427__$2);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23477,(0),null);
var row = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23477,(1),null);
return cljs.core.cons(cljs.core.into_array.cljs$core$IFn$_invoke$arity$1((function (){var iter__5333__auto__ = ((function (vec__23477,y,row,s__23427__$2,temp__4425__auto__,G__23423,G__23424,G__23419,G__23420,G__23421,scale,scaler,type,width,rows,height){
return (function neat$core$vision_$_iter__23426_$_iter__23478(s__23479){
return (new cljs.core.LazySeq(null,((function (vec__23477,y,row,s__23427__$2,temp__4425__auto__,G__23423,G__23424,G__23419,G__23420,G__23421,scale,scaler,type,width,rows,height){
return (function (){
var s__23479__$1 = s__23479;
while(true){
var temp__4425__auto____$1 = cljs.core.seq(s__23479__$1);
if(temp__4425__auto____$1){
var s__23479__$2 = temp__4425__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__23479__$2)){
var c__5331__auto__ = cljs.core.chunk_first(s__23479__$2);
var size__5332__auto__ = cljs.core.count(c__5331__auto__);
var b__23481 = cljs.core.chunk_buffer(size__5332__auto__);
if((function (){var i__23480 = (0);
while(true){
if((i__23480 < size__5332__auto__)){
var vec__23488 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__5331__auto__,i__23480);
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23488,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23488,(1),null);
cljs.core.chunk_append(b__23481,sablono.interpreter.interpret((function (){var vec__23489 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(scaler,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null));
var x__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23489,(0),null);
var y__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23489,(1),null);
var class$ = type(v);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$circle,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$cx,x__$1,cljs.core.cst$kw$cy,y__$1,cljs.core.cst$kw$r,(2),cljs.core.cst$kw$class,class$], null),null], null);
})()));

var G__23494 = (i__23480 + (1));
i__23480 = G__23494;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__23481),neat$core$vision_$_iter__23426_$_iter__23478(cljs.core.chunk_rest(s__23479__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__23481),null);
}
} else {
var vec__23490 = cljs.core.first(s__23479__$2);
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23490,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23490,(1),null);
return cljs.core.cons(sablono.interpreter.interpret((function (){var vec__23491 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(scaler,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null));
var x__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23491,(0),null);
var y__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23491,(1),null);
var class$ = type(v);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$circle,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$cx,x__$1,cljs.core.cst$kw$cy,y__$1,cljs.core.cst$kw$r,(2),cljs.core.cst$kw$class,class$], null),null], null);
})()),neat$core$vision_$_iter__23426_$_iter__23478(cljs.core.rest(s__23479__$2)));
}
} else {
return null;
}
break;
}
});})(vec__23477,y,row,s__23427__$2,temp__4425__auto__,G__23423,G__23424,G__23419,G__23420,G__23421,scale,scaler,type,width,rows,height))
,null,null));
});})(vec__23477,y,row,s__23427__$2,temp__4425__auto__,G__23423,G__23424,G__23419,G__23420,G__23421,scale,scaler,type,width,rows,height))
;
return iter__5333__auto__(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,row));
})()),neat$core$vision_$_iter__23426(cljs.core.rest(s__23427__$2)));
}
} else {
return null;
}
break;
}
});})(G__23423,G__23424,G__23419,G__23420,G__23421,scale,scaler,type,width,rows,height))
,null,null));
});})(G__23423,G__23424,G__23419,G__23420,G__23421,scale,scaler,type,width,rows,height))
;
return iter__5333__auto__(rows);
})());
return React.createElement(G__23423,G__23424,G__23425);
})();
return React.createElement(G__23419,G__23420,G__23421,G__23422);
});
neat.core.hud = (function neat$core$hud(app,owner){
if(typeof neat.core.t_neat$core23522 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
neat.core.t_neat$core23522 = (function (hud,app,owner,meta23523){
this.hud = hud;
this.app = app;
this.owner = owner;
this.meta23523 = meta23523;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
neat.core.t_neat$core23522.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23524,meta23523__$1){
var self__ = this;
var _23524__$1 = this;
return (new neat.core.t_neat$core23522(self__.hud,self__.app,self__.owner,meta23523__$1));
});

neat.core.t_neat$core23522.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23524){
var self__ = this;
var _23524__$1 = this;
return self__.meta23523;
});

neat.core.t_neat$core23522.prototype.om$core$IRender$ = true;

neat.core.t_neat$core23522.prototype.om$core$IRender$render$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var map__23525 = self__.app;
var map__23525__$1 = ((((!((map__23525 == null)))?((((map__23525.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23525.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23525):map__23525);
var inputs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23525__$1,cljs.core.cst$kw$inputs);
var outputs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23525__$1,cljs.core.cst$kw$outputs);
var loc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23525__$1,cljs.core.cst$kw$loc);
var fitness = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23525__$1,cljs.core.cst$kw$fitness);
var pool = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23525__$1,cljs.core.cst$kw$pool);
var vec__23526 = loc;
var ___$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23526,(0),null);
var sp_n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23526,(1),null);
var ___$3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23526,(2),null);
var gn_n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23526,(3),null);
var map__23527 = pool;
var map__23527__$1 = ((((!((map__23527 == null)))?((((map__23527.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23527.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23527):map__23527);
var generation = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23527__$1,cljs.core.cst$kw$generation);
var species = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23527__$1,cljs.core.cst$kw$species);
var app_vision = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$inputs,inputs,cljs.core.cst$kw$x,(15)], null);
var G__23538 = "div";
var G__23539 = null;
var G__23540 = (function (){var attrs23530 = [cljs.core.str("Current =>")].join('');
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"p",((cljs.core.map_QMARK_(attrs23530))?sablono.interpreter.attributes(attrs23530):null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs23530))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs23530)], null))));
})();
var G__23541 = (function (){var attrs23531 = [cljs.core.str("Species: ("),cljs.core.str((sp_n + (1))),cljs.core.str("/"),cljs.core.str(cljs.core.count(species)),cljs.core.str(")")].join('');
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"p",((cljs.core.map_QMARK_(attrs23531))?sablono.interpreter.attributes(attrs23531):null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs23531))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs23531)], null))));
})();
var G__23542 = (function (){var attrs23532 = [cljs.core.str("Genome: ("),cljs.core.str((gn_n + (1))),cljs.core.str("/"),cljs.core.str(cljs.core.count(cljs.core.cst$kw$genomes.cljs$core$IFn$_invoke$arity$1(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(species,sp_n)))),cljs.core.str(")")].join('');
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"p",((cljs.core.map_QMARK_(attrs23532))?sablono.interpreter.attributes(attrs23532):null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs23532))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs23532)], null))));
})();
var G__23543 = (function (){var attrs23533 = [cljs.core.str("Fitness: "),cljs.core.str(fitness)].join('');
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"p",((cljs.core.map_QMARK_(attrs23533))?sablono.interpreter.attributes(attrs23533):null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs23533))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs23533)], null))));
})();
var G__23544 = (function (){var attrs23534 = [cljs.core.str("Generation: "),cljs.core.str(generation)].join('');
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"p",((cljs.core.map_QMARK_(attrs23534))?sablono.interpreter.attributes(attrs23534):null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs23534))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs23534)], null))));
})();
var G__23545 = sablono.interpreter.interpret(neat.core.vision(app_vision));
var G__23546 = (function (){var attrs23535 = [cljs.core.str("Outputs: "),cljs.core.str(outputs)].join('');
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"p",((cljs.core.map_QMARK_(attrs23535))?sablono.interpreter.attributes(attrs23535):null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs23535))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs23535)], null))));
})();
var G__23547 = (function (){var attrs23536 = [cljs.core.str("Population: "),cljs.core.str(cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.count,cljs.core.cst$kw$genomes),species)))].join('');
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"p",((cljs.core.map_QMARK_(attrs23536))?sablono.interpreter.attributes(attrs23536):null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs23536))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs23536)], null))));
})();
var G__23548 = (function (){var attrs23537 = [cljs.core.str("Max Fitness: "),cljs.core.str(cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core.max,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$fitness,cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$genomes,cljs.core.array_seq([species], 0)))))].join('');
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"p",((cljs.core.map_QMARK_(attrs23537))?sablono.interpreter.attributes(attrs23537):null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs23537))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs23537)], null))));
})();
return React.createElement(G__23538,G__23539,G__23540,G__23541,G__23542,G__23543,G__23544,G__23545,G__23546,G__23547,G__23548);
});

neat.core.t_neat$core23522.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$hud,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$app,cljs.core.cst$sym$owner], null)))], null)),cljs.core.cst$sym$app,cljs.core.cst$sym$owner,cljs.core.cst$sym$meta23523], null);
});

neat.core.t_neat$core23522.cljs$lang$type = true;

neat.core.t_neat$core23522.cljs$lang$ctorStr = "neat.core/t_neat$core23522";

neat.core.t_neat$core23522.cljs$lang$ctorPrWriter = (function (this__5159__auto__,writer__5160__auto__,opt__5161__auto__){
return cljs.core._write(writer__5160__auto__,"neat.core/t_neat$core23522");
});

neat.core.__GT_t_neat$core23522 = (function neat$core$hud_$___GT_t_neat$core23522(hud__$1,app__$1,owner__$1,meta23523){
return (new neat.core.t_neat$core23522(hud__$1,app__$1,owner__$1,meta23523));
});

}

return (new neat.core.t_neat$core23522(neat$core$hud,app,owner,cljs.core.PersistentArrayMap.EMPTY));
});
