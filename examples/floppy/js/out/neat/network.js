// Compiled by ClojureScript 1.7.122 {:static-fns true, :optimize-constants true}
goog.provide('neat.network');
goog.require('cljs.core');
goog.require('neat.util');
neat.network.neuron = (function neat$network$neuron(){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$incoming,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$value,0.0], null);
});
neat.network.neurons = (function neat$network$neurons(inputs,outputs,max_nodes){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (_){
return neat.network.neuron();
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(inputs)),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (_){
return null;
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1((max_nodes - inputs))),cljs.core.array_seq([cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (_){
return neat.network.neuron();
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(outputs))], 0)));
});
neat.network.gene__GT_neurons = (function neat$network$gene__GT_neurons(neurons,gene){
if(cljs.core.truth_(cljs.core.cst$kw$enabled.cljs$core$IFn$_invoke$arity$1(gene))){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(neurons,cljs.core.cst$kw$out.cljs$core$IFn$_invoke$arity$1(gene),(function (out){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4((function (){var or__4561__auto__ = out;
if(cljs.core.truth_(or__4561__auto__)){
return or__4561__auto__;
} else {
return neat.network.neuron();
}
})(),cljs.core.cst$kw$incoming,cljs.core.conj,gene);
})),cljs.core.cst$kw$into.cljs$core$IFn$_invoke$arity$1(gene),(function (in$){
var or__4561__auto__ = in$;
if(cljs.core.truth_(or__4561__auto__)){
return or__4561__auto__;
} else {
return neat.network.neuron();
}
}));
} else {
return neurons;
}
});
neat.network.network = (function neat$network$network(genome,p__7238){
var map__7241 = p__7238;
var map__7241__$1 = ((((!((map__7241 == null)))?((((map__7241.cljs$lang$protocol_mask$partition0$ & (64))) || (map__7241.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__7241):map__7241);
var settings = map__7241__$1;
var max_nodes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7241__$1,cljs.core.cst$kw$max_DASH_nodes);
var inputs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7241__$1,cljs.core.cst$kw$inputs);
var outputs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7241__$1,cljs.core.cst$kw$outputs);
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$neurons,cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(neat.network.gene__GT_neurons,neat.network.neurons(inputs,outputs,max_nodes),cljs.core.cst$kw$genes.cljs$core$IFn$_invoke$arity$1(genome)),cljs.core.cst$kw$settings,settings], null);
});
neat.network.zip_inputs = (function neat$network$zip_inputs(neurons,inputs){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ns,p__7245){
var vec__7246 = p__7245;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7246,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7246,(1),null);
return cljs.core.assoc_in(ns,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,cljs.core.cst$kw$value], null),v);
}),neurons,cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,cljs.core.range.cljs$core$IFn$_invoke$arity$0(),inputs));
});
neat.network.scale = (function neat$network$scale(p__7247){
var vec__7249 = p__7247;
var gene = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7249,(0),null);
var other = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7249,(1),null);
return (cljs.core.cst$kw$weight.cljs$core$IFn$_invoke$arity$1(gene) * cljs.core.cst$kw$value.cljs$core$IFn$_invoke$arity$1(other));
});
neat.network.score_neurons = (function neat$network$score_neurons(neurons){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (neurons__$1,idx){
var neuron = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(neurons__$1,idx);
var incoming = cljs.core.cst$kw$incoming.cljs$core$IFn$_invoke$arity$1(neuron);
if((cljs.core.count(incoming) > (0))){
return cljs.core.assoc_in(neurons__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [idx,cljs.core.cst$kw$value], null),neat.util.sigmoid(cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(neat.network.scale,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (neuron,incoming){
return (function (p1__7250_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[p1__7250_SHARP_,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(neurons__$1,cljs.core.cst$kw$into.cljs$core$IFn$_invoke$arity$1(p1__7250_SHARP_))],null));
});})(neuron,incoming))
,incoming)))));
} else {
return neurons__$1;
}
}),neurons,cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(neurons)));
});
neat.network.step = (function neat$network$step(network,inputs){
var inputs__$1 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.vec(inputs),(1));
var settings = cljs.core.cst$kw$settings.cljs$core$IFn$_invoke$arity$1(network);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(inputs__$1),cljs.core.cst$kw$inputs.cljs$core$IFn$_invoke$arity$1(settings))){
return cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["Incorrect number of neural network inputs."], 0));
} else {
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(network,cljs.core.cst$kw$neurons,((function (inputs__$1,settings){
return (function (ns){
return neat.network.score_neurons(neat.network.zip_inputs(ns,inputs__$1));
});})(inputs__$1,settings))
);
}
});
neat.network.outputs = (function neat$network$outputs(p__7251){
var map__7257 = p__7251;
var map__7257__$1 = ((((!((map__7257 == null)))?((((map__7257.cljs$lang$protocol_mask$partition0$ & (64))) || (map__7257.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__7257):map__7257);
var network = map__7257__$1;
var settings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7257__$1,cljs.core.cst$kw$settings);
var neurons = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7257__$1,cljs.core.cst$kw$neurons);
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (map__7257,map__7257__$1,network,settings,neurons){
return (function (p__7259){
var map__7260 = p__7259;
var map__7260__$1 = ((((!((map__7260 == null)))?((((map__7260.cljs$lang$protocol_mask$partition0$ & (64))) || (map__7260.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__7260):map__7260);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7260__$1,cljs.core.cst$kw$value);
if((value > (0))){
return true;
} else {
return null;
}
});})(map__7257,map__7257__$1,network,settings,neurons))
,cljs.core.take_last(cljs.core.cst$kw$outputs.cljs$core$IFn$_invoke$arity$1(settings),neurons));
});
