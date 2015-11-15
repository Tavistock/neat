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
neat.core.classify = (function neat$core$classify(v){
if((v == null)){
return "nil";
} else {
var pred__13443 = cljs.core._EQ_;
var expr__13444 = cljs.core.compare(v,(0));
if(cljs.core.truth_((pred__13443.cljs$core$IFn$_invoke$arity$2 ? pred__13443.cljs$core$IFn$_invoke$arity$2((0),expr__13444) : pred__13443.call(null,(0),expr__13444)))){
return "zero";
} else {
if(cljs.core.truth_((pred__13443.cljs$core$IFn$_invoke$arity$2 ? pred__13443.cljs$core$IFn$_invoke$arity$2((1),expr__13444) : pred__13443.call(null,(1),expr__13444)))){
return "pos";
} else {
if(cljs.core.truth_((pred__13443.cljs$core$IFn$_invoke$arity$2 ? pred__13443.cljs$core$IFn$_invoke$arity$2((-1),expr__13444) : pred__13443.call(null,(-1),expr__13444)))){
return "neg";
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__13444)].join('')));
}
}
}
}
});
neat.core.link = (function neat$core$link(p__13446,weight){
var vec__13452 = p__13446;
var vec__13453 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13452,(0),null);
var x1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13453,(0),null);
var y1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13453,(1),null);
var vec__13454 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13452,(1),null);
var x2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13454,(0),null);
var y2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13454,(1),null);
var locs = vec__13452;
var G__13455 = "line";
var G__13456 = {"key": locs, "x1": x1, "y1": y1, "x2": x2, "y2": y2, "className": neat.core.classify(weight)};
return React.createElement(G__13455,G__13456);
});
neat.core.node = (function neat$core$node(p__13457,scale,value){
var vec__13461 = p__13457;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13461,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13461,(1),null);
var loc = vec__13461;
var G__13462 = "rect";
var G__13463 = {"key": loc, "x": x, "y": y, "width": scale, "height": scale, "className": neat.core.classify(value)};
return React.createElement(G__13462,G__13463);
});
neat.core.link_info = (function neat$core$link_info(locations){
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p__13466){
var vec__13467 = p__13466;
var loc = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13467,(0),null);
var neuron = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13467,(1),null);
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (vec__13467,loc,neuron){
return (function (income){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [loc,cljs.core.cst$kw$into.cljs$core$IFn$_invoke$arity$1(income)], null),cljs.core.cst$kw$weight.cljs$core$IFn$_invoke$arity$1(income)], null);
});})(vec__13467,loc,neuron))
,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,cljs.core.cst$kw$incoming.cljs$core$IFn$_invoke$arity$1(neuron)));
}),cljs.core.array_seq([locations], 0));
});
neat.core.network_comp = (function neat$core$network_comp(data,owner){
if(typeof neat.core.t_neat$core13508 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {om.core.IShouldUpdate}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
neat.core.t_neat$core13508 = (function (network_comp,data,owner,meta13509){
this.network_comp = network_comp;
this.data = data;
this.owner = owner;
this.meta13509 = meta13509;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
neat.core.t_neat$core13508.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13510,meta13509__$1){
var self__ = this;
var _13510__$1 = this;
return (new neat.core.t_neat$core13508(self__.network_comp,self__.data,self__.owner,meta13509__$1));
});

neat.core.t_neat$core13508.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13510){
var self__ = this;
var _13510__$1 = this;
return self__.meta13509;
});

neat.core.t_neat$core13508.prototype.om$core$IShouldUpdate$ = true;

neat.core.t_neat$core13508.prototype.om$core$IShouldUpdate$should_update$arity$3 = (function (_,next_props,___$1){
var self__ = this;
var ___$2 = this;
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.mod(cljs.core.cst$kw$frame.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$ui.cljs$core$IFn$_invoke$arity$1(next_props)),(5)),(0));
});

neat.core.t_neat$core13508.prototype.om$core$IRender$ = true;

neat.core.t_neat$core13508.prototype.om$core$IRender$render$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var map__13511 = self__.data;
var map__13511__$1 = ((((!((map__13511 == null)))?((((map__13511.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13511.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13511):map__13511);
var network = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13511__$1,cljs.core.cst$kw$network);
var ui = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13511__$1,cljs.core.cst$kw$ui);
var map__13512 = ui;
var map__13512__$1 = ((((!((map__13512 == null)))?((((map__13512.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13512.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13512):map__13512);
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13512__$1,cljs.core.cst$kw$width);
var scale = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13512__$1,cljs.core.cst$kw$scale);
var map__13513 = network;
var map__13513__$1 = ((((!((map__13513 == null)))?((((map__13513.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13513.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13513):map__13513);
var neurons = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13513__$1,cljs.core.cst$kw$neurons);
var settings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13513__$1,cljs.core.cst$kw$settings);
var map__13514 = settings;
var map__13514__$1 = ((((!((map__13514 == null)))?((((map__13514.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13514.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13514):map__13514);
var inputs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13514__$1,cljs.core.cst$kw$inputs);
var max_nodes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13514__$1,cljs.core.cst$kw$max_DASH_nodes);
var column = (inputs - (1));
var scaler = ((function (map__13511,map__13511__$1,network,ui,map__13512,map__13512__$1,width,scale,map__13513,map__13513__$1,neurons,settings,map__13514,map__13514__$1,inputs,max_nodes,column,___$1){
return (function (n){
return ((n * scale) + scale);
});})(map__13511,map__13511__$1,network,ui,map__13512,map__13512__$1,width,scale,map__13513,map__13513__$1,neurons,settings,map__13514,map__13514__$1,inputs,max_nodes,column,___$1))
;
var locations = cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,neurons);
var height = cljs.core.quot(column,width);
var links = neat.core.link_info(locations);
var total_width = (width * (function (){var G__13519 = (cljs.core.count(neurons) / (height * width));
return Math.ceil(G__13519);
})());
var scaled = ((function (map__13511,map__13511__$1,network,ui,map__13512,map__13512__$1,width,scale,map__13513,map__13513__$1,neurons,settings,map__13514,map__13514__$1,inputs,max_nodes,column,scaler,locations,height,links,total_width,___$1){
return (function (n){
return cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),cljs.core.map.cljs$core$IFn$_invoke$arity$2(scaler,cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(((function (map__13511,map__13511__$1,network,ui,map__13512,map__13512__$1,width,scale,map__13513,map__13513__$1,neurons,settings,map__13514,map__13514__$1,inputs,max_nodes,column,scaler,locations,height,links,total_width,___$1){
return (function (x){
return neat.core.loc__GT_grid(x,width,height);
});})(map__13511,map__13511__$1,network,ui,map__13512,map__13512__$1,width,scale,map__13513,map__13513__$1,neurons,settings,map__13514,map__13514__$1,inputs,max_nodes,column,scaler,locations,height,links,total_width,___$1))
,cljs.core.array_seq([n], 0))));
});})(map__13511,map__13511__$1,network,ui,map__13512,map__13512__$1,width,scale,map__13513,map__13513__$1,neurons,settings,map__13514,map__13514__$1,inputs,max_nodes,column,scaler,locations,height,links,total_width,___$1))
;
var G__13520 = "svg";
var G__13521 = {"width": (scale + scaler(total_width)), "height": (scale + scaler(height)), "className": "vision"};
var G__13522 = cljs.core.into_array.cljs$core$IFn$_invoke$arity$1((function (){var iter__5333__auto__ = ((function (G__13520,G__13521,map__13511,map__13511__$1,network,ui,map__13512,map__13512__$1,width,scale,map__13513,map__13513__$1,neurons,settings,map__13514,map__13514__$1,inputs,max_nodes,column,scaler,locations,height,links,total_width,scaled,___$1){
return (function neat$core$network_comp_$_iter__13524(s__13525){
return (new cljs.core.LazySeq(null,((function (G__13520,G__13521,map__13511,map__13511__$1,network,ui,map__13512,map__13512__$1,width,scale,map__13513,map__13513__$1,neurons,settings,map__13514,map__13514__$1,inputs,max_nodes,column,scaler,locations,height,links,total_width,scaled,___$1){
return (function (){
var s__13525__$1 = s__13525;
while(true){
var temp__4425__auto__ = cljs.core.seq(s__13525__$1);
if(temp__4425__auto__){
var s__13525__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(s__13525__$2)){
var c__5331__auto__ = cljs.core.chunk_first(s__13525__$2);
var size__5332__auto__ = cljs.core.count(c__5331__auto__);
var b__13527 = cljs.core.chunk_buffer(size__5332__auto__);
if((function (){var i__13526 = (0);
while(true){
if((i__13526 < size__5332__auto__)){
var vec__13534 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__5331__auto__,i__13526);
var loc = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13534,(0),null);
var neuron = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13534,(1),null);
cljs.core.chunk_append(b__13527,sablono.interpreter.interpret((function (){var vec__13535 = scaled(cljs.core._conj(cljs.core.List.EMPTY,loc));
var coord = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13535,(0),null);
var value = cljs.core.cst$kw$value.cljs$core$IFn$_invoke$arity$1(neuron);
return neat.core.node(coord,scale,value);
})()));

var G__13548 = (i__13526 + (1));
i__13526 = G__13548;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__13527),neat$core$network_comp_$_iter__13524(cljs.core.chunk_rest(s__13525__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__13527),null);
}
} else {
var vec__13536 = cljs.core.first(s__13525__$2);
var loc = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13536,(0),null);
var neuron = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13536,(1),null);
return cljs.core.cons(sablono.interpreter.interpret((function (){var vec__13537 = scaled(cljs.core._conj(cljs.core.List.EMPTY,loc));
var coord = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13537,(0),null);
var value = cljs.core.cst$kw$value.cljs$core$IFn$_invoke$arity$1(neuron);
return neat.core.node(coord,scale,value);
})()),neat$core$network_comp_$_iter__13524(cljs.core.rest(s__13525__$2)));
}
} else {
return null;
}
break;
}
});})(G__13520,G__13521,map__13511,map__13511__$1,network,ui,map__13512,map__13512__$1,width,scale,map__13513,map__13513__$1,neurons,settings,map__13514,map__13514__$1,inputs,max_nodes,column,scaler,locations,height,links,total_width,scaled,___$1))
,null,null));
});})(G__13520,G__13521,map__13511,map__13511__$1,network,ui,map__13512,map__13512__$1,width,scale,map__13513,map__13513__$1,neurons,settings,map__13514,map__13514__$1,inputs,max_nodes,column,scaler,locations,height,links,total_width,scaled,___$1))
;
return iter__5333__auto__(locations);
})());
var G__13523 = cljs.core.into_array.cljs$core$IFn$_invoke$arity$1((function (){var iter__5333__auto__ = ((function (G__13520,G__13521,G__13522,map__13511,map__13511__$1,network,ui,map__13512,map__13512__$1,width,scale,map__13513,map__13513__$1,neurons,settings,map__13514,map__13514__$1,inputs,max_nodes,column,scaler,locations,height,links,total_width,scaled,___$1){
return (function neat$core$network_comp_$_iter__13538(s__13539){
return (new cljs.core.LazySeq(null,((function (G__13520,G__13521,G__13522,map__13511,map__13511__$1,network,ui,map__13512,map__13512__$1,width,scale,map__13513,map__13513__$1,neurons,settings,map__13514,map__13514__$1,inputs,max_nodes,column,scaler,locations,height,links,total_width,scaled,___$1){
return (function (){
var s__13539__$1 = s__13539;
while(true){
var temp__4425__auto__ = cljs.core.seq(s__13539__$1);
if(temp__4425__auto__){
var s__13539__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(s__13539__$2)){
var c__5331__auto__ = cljs.core.chunk_first(s__13539__$2);
var size__5332__auto__ = cljs.core.count(c__5331__auto__);
var b__13541 = cljs.core.chunk_buffer(size__5332__auto__);
if((function (){var i__13540 = (0);
while(true){
if((i__13540 < size__5332__auto__)){
var vec__13546 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__5331__auto__,i__13540);
var locs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13546,(0),null);
var weight = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13546,(1),null);
cljs.core.chunk_append(b__13541,sablono.interpreter.interpret((function (){var scaled_locs = scaled(locs);
return neat.core.link(scaled_locs,weight);
})()));

var G__13549 = (i__13540 + (1));
i__13540 = G__13549;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__13541),neat$core$network_comp_$_iter__13538(cljs.core.chunk_rest(s__13539__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__13541),null);
}
} else {
var vec__13547 = cljs.core.first(s__13539__$2);
var locs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13547,(0),null);
var weight = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13547,(1),null);
return cljs.core.cons(sablono.interpreter.interpret((function (){var scaled_locs = scaled(locs);
return neat.core.link(scaled_locs,weight);
})()),neat$core$network_comp_$_iter__13538(cljs.core.rest(s__13539__$2)));
}
} else {
return null;
}
break;
}
});})(G__13520,G__13521,G__13522,map__13511,map__13511__$1,network,ui,map__13512,map__13512__$1,width,scale,map__13513,map__13513__$1,neurons,settings,map__13514,map__13514__$1,inputs,max_nodes,column,scaler,locations,height,links,total_width,scaled,___$1))
,null,null));
});})(G__13520,G__13521,G__13522,map__13511,map__13511__$1,network,ui,map__13512,map__13512__$1,width,scale,map__13513,map__13513__$1,neurons,settings,map__13514,map__13514__$1,inputs,max_nodes,column,scaler,locations,height,links,total_width,scaled,___$1))
;
return iter__5333__auto__(links);
})());
return React.createElement(G__13520,G__13521,G__13522,G__13523);
});

neat.core.t_neat$core13508.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$network_DASH_comp,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$data,cljs.core.cst$sym$owner], null)))], null)),cljs.core.cst$sym$data,cljs.core.cst$sym$owner,cljs.core.cst$sym$meta13509], null);
});

neat.core.t_neat$core13508.cljs$lang$type = true;

neat.core.t_neat$core13508.cljs$lang$ctorStr = "neat.core/t_neat$core13508";

neat.core.t_neat$core13508.cljs$lang$ctorPrWriter = (function (this__5159__auto__,writer__5160__auto__,opt__5161__auto__){
return cljs.core._write(writer__5160__auto__,"neat.core/t_neat$core13508");
});

neat.core.__GT_t_neat$core13508 = (function neat$core$network_comp_$___GT_t_neat$core13508(network_comp__$1,data__$1,owner__$1,meta13509){
return (new neat.core.t_neat$core13508(network_comp__$1,data__$1,owner__$1,meta13509));
});

}

return (new neat.core.t_neat$core13508(neat$core$network_comp,data,owner,cljs.core.PersistentArrayMap.EMPTY));
});
neat.core.hud = (function neat$core$hud(app,owner){
if(typeof neat.core.t_neat$core13579 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
neat.core.t_neat$core13579 = (function (hud,app,owner,meta13580){
this.hud = hud;
this.app = app;
this.owner = owner;
this.meta13580 = meta13580;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
neat.core.t_neat$core13579.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13581,meta13580__$1){
var self__ = this;
var _13581__$1 = this;
return (new neat.core.t_neat$core13579(self__.hud,self__.app,self__.owner,meta13580__$1));
});

neat.core.t_neat$core13579.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13581){
var self__ = this;
var _13581__$1 = this;
return self__.meta13580;
});

neat.core.t_neat$core13579.prototype.om$core$IRender$ = true;

neat.core.t_neat$core13579.prototype.om$core$IRender$render$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var map__13582 = self__.app;
var map__13582__$1 = ((((!((map__13582 == null)))?((((map__13582.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13582.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13582):map__13582);
var inputs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13582__$1,cljs.core.cst$kw$inputs);
var outputs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13582__$1,cljs.core.cst$kw$outputs);
var loc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13582__$1,cljs.core.cst$kw$loc);
var fitness = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13582__$1,cljs.core.cst$kw$fitness);
var pool = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13582__$1,cljs.core.cst$kw$pool);
var network = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13582__$1,cljs.core.cst$kw$network);
var ui = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13582__$1,cljs.core.cst$kw$ui);
var vec__13583 = loc;
var ___$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13583,(0),null);
var sp_n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13583,(1),null);
var ___$3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13583,(2),null);
var gn_n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13583,(3),null);
var map__13584 = pool;
var map__13584__$1 = ((((!((map__13584 == null)))?((((map__13584.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13584.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13584):map__13584);
var generation = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13584__$1,cljs.core.cst$kw$generation);
var species = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13584__$1,cljs.core.cst$kw$species);
var G__13596 = "div";
var G__13597 = null;
var G__13598 = (function (){var attrs13587 = [cljs.core.str("Current =>")].join('');
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"p",((cljs.core.map_QMARK_(attrs13587))?sablono.interpreter.attributes(attrs13587):null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs13587))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs13587)], null))));
})();
var G__13599 = (function (){var attrs13588 = [cljs.core.str("Species: ("),cljs.core.str((sp_n + (1))),cljs.core.str("/"),cljs.core.str(cljs.core.count(species)),cljs.core.str(")")].join('');
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"p",((cljs.core.map_QMARK_(attrs13588))?sablono.interpreter.attributes(attrs13588):null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs13588))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs13588)], null))));
})();
var G__13600 = (function (){var attrs13589 = [cljs.core.str("Genome: ("),cljs.core.str((gn_n + (1))),cljs.core.str("/"),cljs.core.str(cljs.core.count(cljs.core.cst$kw$genomes.cljs$core$IFn$_invoke$arity$1(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(species,sp_n)))),cljs.core.str(")")].join('');
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"p",((cljs.core.map_QMARK_(attrs13589))?sablono.interpreter.attributes(attrs13589):null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs13589))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs13589)], null))));
})();
var G__13601 = (function (){var attrs13590 = [cljs.core.str("Fitness: "),cljs.core.str(fitness)].join('');
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"p",((cljs.core.map_QMARK_(attrs13590))?sablono.interpreter.attributes(attrs13590):null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs13590))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs13590)], null))));
})();
var G__13602 = (function (){var attrs13591 = [cljs.core.str("Generation: "),cljs.core.str(generation)].join('');
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"p",((cljs.core.map_QMARK_(attrs13591))?sablono.interpreter.attributes(attrs13591):null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs13591))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs13591)], null))));
})();
var G__13603 = sablono.interpreter.interpret(om.core.build.cljs$core$IFn$_invoke$arity$2(neat.core.network_comp,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$ui,ui,cljs.core.cst$kw$network,network], null)));
var G__13604 = (function (){var attrs13592 = [cljs.core.str("Outputs: "),cljs.core.str(outputs)].join('');
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"p",((cljs.core.map_QMARK_(attrs13592))?sablono.interpreter.attributes(attrs13592):null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs13592))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs13592)], null))));
})();
var G__13605 = (function (){var attrs13593 = [cljs.core.str("Population: "),cljs.core.str(cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.count,cljs.core.cst$kw$genomes),species)))].join('');
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"p",((cljs.core.map_QMARK_(attrs13593))?sablono.interpreter.attributes(attrs13593):null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs13593))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs13593)], null))));
})();
var G__13606 = (function (){var attrs13594 = [cljs.core.str("Max Fitness: "),cljs.core.str(cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core.max,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$fitness,cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$genomes,cljs.core.array_seq([species], 0)))))].join('');
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"p",((cljs.core.map_QMARK_(attrs13594))?sablono.interpreter.attributes(attrs13594):null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs13594))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs13594)], null))));
})();
var G__13607 = (function (){var attrs13595 = [cljs.core.str("frame:"),cljs.core.str(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(self__.app,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ui,cljs.core.cst$kw$frame], null)))].join('');
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"p",((cljs.core.map_QMARK_(attrs13595))?sablono.interpreter.attributes(attrs13595):null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs13595))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs13595)], null))));
})();
return React.createElement(G__13596,G__13597,G__13598,G__13599,G__13600,G__13601,G__13602,G__13603,G__13604,G__13605,G__13606,G__13607);
});

neat.core.t_neat$core13579.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$hud,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$app,cljs.core.cst$sym$owner], null)))], null)),cljs.core.cst$sym$app,cljs.core.cst$sym$owner,cljs.core.cst$sym$meta13580], null);
});

neat.core.t_neat$core13579.cljs$lang$type = true;

neat.core.t_neat$core13579.cljs$lang$ctorStr = "neat.core/t_neat$core13579";

neat.core.t_neat$core13579.cljs$lang$ctorPrWriter = (function (this__5159__auto__,writer__5160__auto__,opt__5161__auto__){
return cljs.core._write(writer__5160__auto__,"neat.core/t_neat$core13579");
});

neat.core.__GT_t_neat$core13579 = (function neat$core$hud_$___GT_t_neat$core13579(hud__$1,app__$1,owner__$1,meta13580){
return (new neat.core.t_neat$core13579(hud__$1,app__$1,owner__$1,meta13580));
});

}

return (new neat.core.t_neat$core13579(neat$core$hud,app,owner,cljs.core.PersistentArrayMap.EMPTY));
});
