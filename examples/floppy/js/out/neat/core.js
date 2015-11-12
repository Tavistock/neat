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
var floppy_pool_13439 = neat.pool.pool(neat.floppy.settings);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(neat.state.app_state,cljs.core.assoc,cljs.core.cst$kw$ui,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$width,(15),cljs.core.cst$kw$scale,(8),cljs.core.cst$kw$frame,(0)], null));

if(typeof neat.core.run_BANG__BANG_ !== 'undefined'){
} else {
neat.core.run_BANG__BANG_ = neat.runner.runner(floppy_pool_13439,neat.floppy.interactions);
}
} else {
}
neat.core.hud;
neat.core.main = (function neat$core$main(){
return om.core.root(neat.core.hud,neat.state.app_state,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$target,document.getElementById("app")], null));
});
neat.core.loc__GT_grid = (function neat$core$loc__GT_grid(loc,width,height){
var x_STAR_ = cljs.core.mod(loc,width);
var y_STAR_ = cljs.core.quot(loc,width);
var x = (x_STAR_ + (width * cljs.core.quot(y_STAR_,height)));
var y = cljs.core.mod(y_STAR_,height);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null);
});
neat.core.network_comp = (function neat$core$network_comp(data,owner){
if(typeof neat.core.t_neat$core13471 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
neat.core.t_neat$core13471 = (function (network_comp,data,owner,meta13472){
this.network_comp = network_comp;
this.data = data;
this.owner = owner;
this.meta13472 = meta13472;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
neat.core.t_neat$core13471.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13473,meta13472__$1){
var self__ = this;
var _13473__$1 = this;
return (new neat.core.t_neat$core13471(self__.network_comp,self__.data,self__.owner,meta13472__$1));
});

neat.core.t_neat$core13471.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13473){
var self__ = this;
var _13473__$1 = this;
return self__.meta13472;
});

neat.core.t_neat$core13471.prototype.om$core$IRender$ = true;

neat.core.t_neat$core13471.prototype.om$core$IRender$render$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var map__13474 = self__.data;
var map__13474__$1 = ((((!((map__13474 == null)))?((((map__13474.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13474.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13474):map__13474);
var network = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13474__$1,cljs.core.cst$kw$network);
var ui = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13474__$1,cljs.core.cst$kw$ui);
var map__13475 = ui;
var map__13475__$1 = ((((!((map__13475 == null)))?((((map__13475.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13475.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13475):map__13475);
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13475__$1,cljs.core.cst$kw$width);
var scale = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13475__$1,cljs.core.cst$kw$scale);
var map__13476 = network;
var map__13476__$1 = ((((!((map__13476 == null)))?((((map__13476.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13476.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13476):map__13476);
var neurons = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13476__$1,cljs.core.cst$kw$neurons);
var settings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13476__$1,cljs.core.cst$kw$settings);
var map__13477 = settings;
var map__13477__$1 = ((((!((map__13477 == null)))?((((map__13477.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13477.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13477):map__13477);
var inputs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13477__$1,cljs.core.cst$kw$inputs);
var max_nodes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13477__$1,cljs.core.cst$kw$max_DASH_nodes);
var vision = (inputs - (1));
var scaler = ((function (map__13474,map__13474__$1,network,ui,map__13475,map__13475__$1,width,scale,map__13476,map__13476__$1,neurons,settings,map__13477,map__13477__$1,inputs,max_nodes,vision,___$1){
return (function (n){
return ((n * scale) + scale);
});})(map__13474,map__13474__$1,network,ui,map__13475,map__13475__$1,width,scale,map__13476,map__13476__$1,neurons,settings,map__13477,map__13477__$1,inputs,max_nodes,vision,___$1))
;
var type = ((function (map__13474,map__13474__$1,network,ui,map__13475,map__13475__$1,width,scale,map__13476,map__13476__$1,neurons,settings,map__13477,map__13477__$1,inputs,max_nodes,vision,scaler,___$1){
return (function (v){
var pred__13482 = cljs.core._EQ_;
var expr__13483 = cljs.core.compare(v,(0));
if(cljs.core.truth_((pred__13482.cljs$core$IFn$_invoke$arity$2 ? pred__13482.cljs$core$IFn$_invoke$arity$2((0),expr__13483) : pred__13482.call(null,(0),expr__13483)))){
return "zero";
} else {
if(cljs.core.truth_((pred__13482.cljs$core$IFn$_invoke$arity$2 ? pred__13482.cljs$core$IFn$_invoke$arity$2((1),expr__13483) : pred__13482.call(null,(1),expr__13483)))){
return "pos";
} else {
if(cljs.core.truth_((pred__13482.cljs$core$IFn$_invoke$arity$2 ? pred__13482.cljs$core$IFn$_invoke$arity$2((-1),expr__13483) : pred__13482.call(null,(-1),expr__13483)))){
return "neg";
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__13483)].join('')));
}
}
}
});})(map__13474,map__13474__$1,network,ui,map__13475,map__13475__$1,width,scale,map__13476,map__13476__$1,neurons,settings,map__13477,map__13477__$1,inputs,max_nodes,vision,scaler,___$1))
;
var located = cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$value,neurons));
var height = cljs.core.quot(vision,width);
var G__13485 = "svg";
var G__13486 = {"width": scaler((width * (cljs.core.quot(cljs.core.count(neurons),(height * width)) + (1)))), "height": scaler(height), "className": "vision"};
var G__13487 = cljs.core.into_array.cljs$core$IFn$_invoke$arity$1((function (){var iter__5333__auto__ = ((function (G__13485,G__13486,map__13474,map__13474__$1,network,ui,map__13475,map__13475__$1,width,scale,map__13476,map__13476__$1,neurons,settings,map__13477,map__13477__$1,inputs,max_nodes,vision,scaler,type,located,height,___$1){
return (function neat$core$network_comp_$_iter__13488(s__13489){
return (new cljs.core.LazySeq(null,((function (G__13485,G__13486,map__13474,map__13474__$1,network,ui,map__13475,map__13475__$1,width,scale,map__13476,map__13476__$1,neurons,settings,map__13477,map__13477__$1,inputs,max_nodes,vision,scaler,type,located,height,___$1){
return (function (){
var s__13489__$1 = s__13489;
while(true){
var temp__4425__auto__ = cljs.core.seq(s__13489__$1);
if(temp__4425__auto__){
var s__13489__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(s__13489__$2)){
var c__5331__auto__ = cljs.core.chunk_first(s__13489__$2);
var size__5332__auto__ = cljs.core.count(c__5331__auto__);
var b__13491 = cljs.core.chunk_buffer(size__5332__auto__);
if((function (){var i__13490 = (0);
while(true){
if((i__13490 < size__5332__auto__)){
var vec__13498 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__5331__auto__,i__13490);
var loc = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13498,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13498,(1),null);
cljs.core.chunk_append(b__13491,sablono.interpreter.interpret((function (){var vec__13499 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(scaler,neat.core.loc__GT_grid(loc,width,height));
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13499,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13499,(1),null);
var class$ = type(v);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$circle,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$cx,x,cljs.core.cst$kw$cy,y,cljs.core.cst$kw$r,cljs.core.quot(scale,(3)),cljs.core.cst$kw$class,class$], null),null], null);
})()));

var G__13502 = (i__13490 + (1));
i__13490 = G__13502;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__13491),neat$core$network_comp_$_iter__13488(cljs.core.chunk_rest(s__13489__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__13491),null);
}
} else {
var vec__13500 = cljs.core.first(s__13489__$2);
var loc = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13500,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13500,(1),null);
return cljs.core.cons(sablono.interpreter.interpret((function (){var vec__13501 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(scaler,neat.core.loc__GT_grid(loc,width,height));
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13501,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13501,(1),null);
var class$ = type(v);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$circle,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$cx,x,cljs.core.cst$kw$cy,y,cljs.core.cst$kw$r,cljs.core.quot(scale,(3)),cljs.core.cst$kw$class,class$], null),null], null);
})()),neat$core$network_comp_$_iter__13488(cljs.core.rest(s__13489__$2)));
}
} else {
return null;
}
break;
}
});})(G__13485,G__13486,map__13474,map__13474__$1,network,ui,map__13475,map__13475__$1,width,scale,map__13476,map__13476__$1,neurons,settings,map__13477,map__13477__$1,inputs,max_nodes,vision,scaler,type,located,height,___$1))
,null,null));
});})(G__13485,G__13486,map__13474,map__13474__$1,network,ui,map__13475,map__13475__$1,width,scale,map__13476,map__13476__$1,neurons,settings,map__13477,map__13477__$1,inputs,max_nodes,vision,scaler,type,located,height,___$1))
;
return iter__5333__auto__(located);
})());
return React.createElement(G__13485,G__13486,G__13487);
});

neat.core.t_neat$core13471.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$network_DASH_comp,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$data,cljs.core.cst$sym$owner], null)))], null)),cljs.core.cst$sym$data,cljs.core.cst$sym$owner,cljs.core.cst$sym$meta13472], null);
});

neat.core.t_neat$core13471.cljs$lang$type = true;

neat.core.t_neat$core13471.cljs$lang$ctorStr = "neat.core/t_neat$core13471";

neat.core.t_neat$core13471.cljs$lang$ctorPrWriter = (function (this__5159__auto__,writer__5160__auto__,opt__5161__auto__){
return cljs.core._write(writer__5160__auto__,"neat.core/t_neat$core13471");
});

neat.core.__GT_t_neat$core13471 = (function neat$core$network_comp_$___GT_t_neat$core13471(network_comp__$1,data__$1,owner__$1,meta13472){
return (new neat.core.t_neat$core13471(network_comp__$1,data__$1,owner__$1,meta13472));
});

}

return (new neat.core.t_neat$core13471(neat$core$network_comp,data,owner,cljs.core.PersistentArrayMap.EMPTY));
});
neat.core.hud = (function neat$core$hud(app,owner){
if(typeof neat.core.t_neat$core13532 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
neat.core.t_neat$core13532 = (function (hud,app,owner,meta13533){
this.hud = hud;
this.app = app;
this.owner = owner;
this.meta13533 = meta13533;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
neat.core.t_neat$core13532.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13534,meta13533__$1){
var self__ = this;
var _13534__$1 = this;
return (new neat.core.t_neat$core13532(self__.hud,self__.app,self__.owner,meta13533__$1));
});

neat.core.t_neat$core13532.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13534){
var self__ = this;
var _13534__$1 = this;
return self__.meta13533;
});

neat.core.t_neat$core13532.prototype.om$core$IRender$ = true;

neat.core.t_neat$core13532.prototype.om$core$IRender$render$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var map__13535 = self__.app;
var map__13535__$1 = ((((!((map__13535 == null)))?((((map__13535.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13535.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13535):map__13535);
var inputs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13535__$1,cljs.core.cst$kw$inputs);
var outputs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13535__$1,cljs.core.cst$kw$outputs);
var loc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13535__$1,cljs.core.cst$kw$loc);
var fitness = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13535__$1,cljs.core.cst$kw$fitness);
var pool = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13535__$1,cljs.core.cst$kw$pool);
var network = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13535__$1,cljs.core.cst$kw$network);
var ui = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13535__$1,cljs.core.cst$kw$ui);
var vec__13536 = loc;
var ___$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13536,(0),null);
var sp_n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13536,(1),null);
var ___$3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13536,(2),null);
var gn_n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13536,(3),null);
var map__13537 = pool;
var map__13537__$1 = ((((!((map__13537 == null)))?((((map__13537.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13537.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13537):map__13537);
var generation = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13537__$1,cljs.core.cst$kw$generation);
var species = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13537__$1,cljs.core.cst$kw$species);
var app_vision = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$inputs,inputs], null);
var G__13549 = "div";
var G__13550 = null;
var G__13551 = (function (){var attrs13540 = [cljs.core.str("Current =>")].join('');
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"p",((cljs.core.map_QMARK_(attrs13540))?sablono.interpreter.attributes(attrs13540):null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs13540))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs13540)], null))));
})();
var G__13552 = (function (){var attrs13541 = [cljs.core.str("Species: ("),cljs.core.str((sp_n + (1))),cljs.core.str("/"),cljs.core.str(cljs.core.count(species)),cljs.core.str(")")].join('');
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"p",((cljs.core.map_QMARK_(attrs13541))?sablono.interpreter.attributes(attrs13541):null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs13541))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs13541)], null))));
})();
var G__13553 = (function (){var attrs13542 = [cljs.core.str("Genome: ("),cljs.core.str((gn_n + (1))),cljs.core.str("/"),cljs.core.str(cljs.core.count(cljs.core.cst$kw$genomes.cljs$core$IFn$_invoke$arity$1(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(species,sp_n)))),cljs.core.str(")")].join('');
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"p",((cljs.core.map_QMARK_(attrs13542))?sablono.interpreter.attributes(attrs13542):null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs13542))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs13542)], null))));
})();
var G__13554 = (function (){var attrs13543 = [cljs.core.str("Fitness: "),cljs.core.str(fitness)].join('');
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"p",((cljs.core.map_QMARK_(attrs13543))?sablono.interpreter.attributes(attrs13543):null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs13543))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs13543)], null))));
})();
var G__13555 = (function (){var attrs13544 = [cljs.core.str("Generation: "),cljs.core.str(generation)].join('');
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"p",((cljs.core.map_QMARK_(attrs13544))?sablono.interpreter.attributes(attrs13544):null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs13544))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs13544)], null))));
})();
var G__13556 = sablono.interpreter.interpret(om.core.build.cljs$core$IFn$_invoke$arity$2(neat.core.network_comp,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$ui,ui,cljs.core.cst$kw$network,network], null)));
var G__13557 = (function (){var attrs13545 = [cljs.core.str("Outputs: "),cljs.core.str(outputs)].join('');
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"p",((cljs.core.map_QMARK_(attrs13545))?sablono.interpreter.attributes(attrs13545):null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs13545))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs13545)], null))));
})();
var G__13558 = (function (){var attrs13546 = [cljs.core.str("Population: "),cljs.core.str(cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.count,cljs.core.cst$kw$genomes),species)))].join('');
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"p",((cljs.core.map_QMARK_(attrs13546))?sablono.interpreter.attributes(attrs13546):null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs13546))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs13546)], null))));
})();
var G__13559 = (function (){var attrs13547 = [cljs.core.str("Max Fitness: "),cljs.core.str(cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core.max,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$fitness,cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$genomes,cljs.core.array_seq([species], 0)))))].join('');
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"p",((cljs.core.map_QMARK_(attrs13547))?sablono.interpreter.attributes(attrs13547):null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs13547))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs13547)], null))));
})();
var G__13560 = (function (){var attrs13548 = [cljs.core.str("frame:"),cljs.core.str(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(self__.app,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ui,cljs.core.cst$kw$frame], null)))].join('');
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"p",((cljs.core.map_QMARK_(attrs13548))?sablono.interpreter.attributes(attrs13548):null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs13548))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs13548)], null))));
})();
return React.createElement(G__13549,G__13550,G__13551,G__13552,G__13553,G__13554,G__13555,G__13556,G__13557,G__13558,G__13559,G__13560);
});

neat.core.t_neat$core13532.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$hud,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$app,cljs.core.cst$sym$owner], null)))], null)),cljs.core.cst$sym$app,cljs.core.cst$sym$owner,cljs.core.cst$sym$meta13533], null);
});

neat.core.t_neat$core13532.cljs$lang$type = true;

neat.core.t_neat$core13532.cljs$lang$ctorStr = "neat.core/t_neat$core13532";

neat.core.t_neat$core13532.cljs$lang$ctorPrWriter = (function (this__5159__auto__,writer__5160__auto__,opt__5161__auto__){
return cljs.core._write(writer__5160__auto__,"neat.core/t_neat$core13532");
});

neat.core.__GT_t_neat$core13532 = (function neat$core$hud_$___GT_t_neat$core13532(hud__$1,app__$1,owner__$1,meta13533){
return (new neat.core.t_neat$core13532(hud__$1,app__$1,owner__$1,meta13533));
});

}

return (new neat.core.t_neat$core13532(neat$core$hud,app,owner,cljs.core.PersistentArrayMap.EMPTY));
});
