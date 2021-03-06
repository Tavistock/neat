// Compiled by ClojureScript 1.7.122 {:static-fns true, :optimize-constants true}
goog.provide('neat.genome');
goog.require('cljs.core');
goog.require('clojure.set');
goog.require('neat.util');
goog.require('neat.settings');
neat.genome.base = (function neat$genome$base(settings,mutates){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(neat.settings.default_genome,cljs.core.cst$kw$settings,settings,cljs.core.array_seq([cljs.core.cst$kw$max_DASH_neurons,cljs.core.cst$kw$inputs.cljs$core$IFn$_invoke$arity$1(settings),cljs.core.cst$kw$mutate,mutates], 0));
});
neat.genome.mutate;

neat.genome.base;
neat.genome.genome = (function neat$genome$genome(var_args){
var args11036 = [];
var len__5619__auto___11040 = arguments.length;
var i__5620__auto___11041 = (0);
while(true){
if((i__5620__auto___11041 < len__5619__auto___11040)){
args11036.push((arguments[i__5620__auto___11041]));

var G__11042 = (i__5620__auto___11041 + (1));
i__5620__auto___11041 = G__11042;
continue;
} else {
}
break;
}

var G__11038 = args11036.length;
switch (G__11038) {
case 1:
return neat.genome.genome.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return neat.genome.genome.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11036.length)].join('')));

}
});

neat.genome.genome.cljs$core$IFn$_invoke$arity$1 = (function (settings){
return neat.genome.genome.cljs$core$IFn$_invoke$arity$2(settings,neat.settings.default_mutate);
});

neat.genome.genome.cljs$core$IFn$_invoke$arity$2 = (function (settings,mutates){
var G__11039 = (neat.genome.base.cljs$core$IFn$_invoke$arity$2 ? neat.genome.base.cljs$core$IFn$_invoke$arity$2(settings,mutates) : neat.genome.base.call(null,settings,mutates));
return (neat.genome.mutate.cljs$core$IFn$_invoke$arity$1 ? neat.genome.mutate.cljs$core$IFn$_invoke$arity$1(G__11039) : neat.genome.mutate.call(null,G__11039));
});

neat.genome.genome.cljs$lang$maxFixedArity = 2;
neat.genome.coin_flip = (function neat$genome$coin_flip(){
return cljs.core.rand_nth(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,false], null));
});
neat.genome.rand_neuron = (function neat$genome$rand_neuron(genes,inputs_QMARK_,settings){
var map__11049 = settings;
var map__11049__$1 = ((((!((map__11049 == null)))?((((map__11049.cljs$lang$protocol_mask$partition0$ & (64))) || (map__11049.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__11049):map__11049);
var inputs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11049__$1,cljs.core.cst$kw$inputs);
var outputs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11049__$1,cljs.core.cst$kw$outputs);
var max_nodes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11049__$1,cljs.core.cst$kw$max_DASH_nodes);
var candidates = clojure.set.union.cljs$core$IFn$_invoke$arity$variadic(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,cljs.core.range.cljs$core$IFn$_invoke$arity$1(inputs)),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,cljs.core.range.cljs$core$IFn$_invoke$arity$2(max_nodes,(max_nodes + outputs))),cljs.core.array_seq([cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(clojure.set.union,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (map__11049,map__11049__$1,inputs,outputs,max_nodes){
return (function (p__11051){
var map__11052 = p__11051;
var map__11052__$1 = ((((!((map__11052 == null)))?((((map__11052.cljs$lang$protocol_mask$partition0$ & (64))) || (map__11052.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__11052):map__11052);
var into = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11052__$1,cljs.core.cst$kw$into);
var out = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11052__$1,cljs.core.cst$kw$out);
return cljs.core.PersistentHashSet.fromArray([into,out], true);
});})(map__11049,map__11049__$1,inputs,outputs,max_nodes))
,genes))], 0));
var neurons = (cljs.core.truth_(inputs_QMARK_)?candidates:clojure.set.difference.cljs$core$IFn$_invoke$arity$2(candidates,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,cljs.core.range.cljs$core$IFn$_invoke$arity$1(inputs))));
return cljs.core.rand_nth(cljs.core.vec(neurons));
});
neat.genome.contains_link_QMARK_ = (function neat$genome$contains_link_QMARK_(genes,p__11054){
var map__11057 = p__11054;
var map__11057__$1 = ((((!((map__11057 == null)))?((((map__11057.cljs$lang$protocol_mask$partition0$ & (64))) || (map__11057.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__11057):map__11057);
var link = map__11057__$1;
var into = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11057__$1,cljs.core.cst$kw$into);
var out = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11057__$1,cljs.core.cst$kw$out);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(((function (map__11057,map__11057__$1,link,into,out){
return (function (l,r){
var or__4561__auto__ = l;
if(cljs.core.truth_(or__4561__auto__)){
return or__4561__auto__;
} else {
return r;
}
});})(map__11057,map__11057__$1,link,into,out))
,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (map__11057,map__11057__$1,link,into,out){
return (function (gene){
return (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$into.cljs$core$IFn$_invoke$arity$1(gene),into)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$out.cljs$core$IFn$_invoke$arity$1(gene),out));
});})(map__11057,map__11057__$1,link,into,out))
,genes));
});
neat.genome.mutate_link = (function neat$genome$mutate_link(genome,force_bias_QMARK_){
var map__11061 = genome;
var map__11061__$1 = ((((!((map__11061 == null)))?((((map__11061.cljs$lang$protocol_mask$partition0$ & (64))) || (map__11061.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__11061):map__11061);
var settings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11061__$1,cljs.core.cst$kw$settings);
var genes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11061__$1,cljs.core.cst$kw$genes);
var n1 = neat.genome.rand_neuron(genes,true,settings);
var n2 = neat.genome.rand_neuron(genes,false,settings);
var neuron = new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$out,n2,cljs.core.cst$kw$into,(cljs.core.truth_(force_bias_QMARK_)?cljs.core.cst$kw$inputs.cljs$core$IFn$_invoke$arity$1(settings):n1),cljs.core.cst$kw$innovation,neat.util.rand_id(),cljs.core.cst$kw$weight,(((4) * cljs.core.rand.cljs$core$IFn$_invoke$arity$0()) - (2)),cljs.core.cst$kw$enabled,true], null);
if(cljs.core.truth_(neat.genome.contains_link_QMARK_(genes,neuron))){
return genome;
} else {
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(genome,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$genes], null),cljs.core.conj,neuron);
}
});
neat.genome.mutate_toggle = (function neat$genome$mutate_toggle(genome,enable_QMARK_){
var map__11067 = genome;
var map__11067__$1 = ((((!((map__11067 == null)))?((((map__11067.cljs$lang$protocol_mask$partition0$ & (64))) || (map__11067.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__11067):map__11067);
var genes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11067__$1,cljs.core.cst$kw$genes);
var untoggled = cljs.core.count(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (map__11067,map__11067__$1,genes){
return (function (p1__11063_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$enabled.cljs$core$IFn$_invoke$arity$1(p1__11063_SHARP_),enable_QMARK_);
});})(map__11067,map__11067__$1,genes))
,genes));
var genome_STAR_ = cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(genome,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$genes], null),((function (map__11067,map__11067__$1,genes,untoggled){
return (function (p1__11064_SHARP_){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,p1__11064_SHARP_);
});})(map__11067,map__11067__$1,genes,untoggled))
);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(untoggled,(0))){
return genome_STAR_;
} else {
while(true){
var n = cljs.core.rand_int(cljs.core.count(genes));
var loc = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$genes,n,cljs.core.cst$kw$enabled], null);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(genome_STAR_,loc),enable_QMARK_)){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(genome_STAR_,loc,cljs.core.not);
} else {
continue;
}
break;
}
}
});
neat.genome.mutate_node = (function neat$genome$mutate_node(genome){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(cljs.core.cst$kw$genes.cljs$core$IFn$_invoke$arity$1(genome)),(0))){
return genome;
} else {
var n = cljs.core.rand_int(cljs.core.count(cljs.core.cst$kw$genes.cljs$core$IFn$_invoke$arity$1(genome)));
var gene = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$genes.cljs$core$IFn$_invoke$arity$1(genome),n);
var new_max = (cljs.core.cst$kw$max_DASH_neurons.cljs$core$IFn$_invoke$arity$1(genome) + (1));
var loc = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$genes,n,cljs.core.cst$kw$enabled], null);
if(cljs.core.not(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(genome,loc))){
return genome;
} else {
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(genome,loc,cljs.core.not),cljs.core.cst$kw$max_DASH_neurons,new_max),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$genes], null),cljs.core.conj,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([gene,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$out,new_max,cljs.core.cst$kw$weight,1.0,cljs.core.cst$kw$innovation,neat.util.rand_id()], null)], 0))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$genes], null),cljs.core.conj,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([gene,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$into,new_max,cljs.core.cst$kw$innovation,neat.util.rand_id()], null)], 0)));
}
}
});
neat.genome.mutate_point = (function neat$genome$mutate_point(genome){
var map__11071 = cljs.core.cst$kw$mutate.cljs$core$IFn$_invoke$arity$1(genome);
var map__11071__$1 = ((((!((map__11071 == null)))?((((map__11071.cljs$lang$protocol_mask$partition0$ & (64))) || (map__11071.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__11071):map__11071);
var perturb = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11071__$1,cljs.core.cst$kw$perturb);
var step = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11071__$1,cljs.core.cst$kw$step);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(genome,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$genes], null),cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.map,((function (map__11071,map__11071__$1,perturb,step){
return (function (gene){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(gene,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$weight], null),((function (map__11071,map__11071__$1,perturb,step){
return (function (weight){
if((cljs.core.rand.cljs$core$IFn$_invoke$arity$0() < perturb)){
return (weight + (((cljs.core.rand.cljs$core$IFn$_invoke$arity$0() * step) * (2)) - step));
} else {
return ((cljs.core.rand.cljs$core$IFn$_invoke$arity$0() * (4)) - (2));
}
});})(map__11071,map__11071__$1,perturb,step))
);
});})(map__11071,map__11071__$1,perturb,step))
));
});
neat.genome.scale_traits = (function neat$genome$scale_traits(mutate){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__11075){
var vec__11076 = p__11075;
var trait = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11076,(0),null);
var rate = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11076,(1),null);
if(cljs.core.truth_(neat.genome.coin_flip())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [trait,(rate * 0.95)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [trait,(rate * 1.05)], null);
}
}),mutate));
});
neat.genome.looper = (function neat$genome$looper(genome,p,func){
var genome__$1 = genome;
var p__$1 = p;
while(true){
if((p__$1 > (0))){
if((p__$1 > cljs.core.rand.cljs$core$IFn$_invoke$arity$0())){
var G__11077 = (func.cljs$core$IFn$_invoke$arity$1 ? func.cljs$core$IFn$_invoke$arity$1(genome__$1) : func.call(null,genome__$1));
var G__11078 = (p__$1 - (1));
genome__$1 = G__11077;
p__$1 = G__11078;
continue;
} else {
var G__11079 = genome__$1;
var G__11080 = (p__$1 - (1));
genome__$1 = G__11079;
p__$1 = G__11080;
continue;
}
} else {
return genome__$1;
}
break;
}
});
neat.genome.mutate = (function neat$genome$mutate(genome){
var $ = genome;
var $__$1 = cljs.core.update_in.cljs$core$IFn$_invoke$arity$3($,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$mutate], null),neat.genome.scale_traits);
var $__$2 = ((function ($,$__$1){
return (function (genome__$1){
if((cljs.core.rand.cljs$core$IFn$_invoke$arity$0() < cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(genome__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$mutate,cljs.core.cst$kw$connections], null)))){
return neat.genome.mutate_point(genome__$1);
} else {
return genome__$1;
}
});})($,$__$1))
.call(null,$__$1);
var $__$3 = neat.genome.looper($__$2,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2($__$2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$mutate,cljs.core.cst$kw$link], null)),((function ($,$__$1,$__$2){
return (function (p1__11081_SHARP_){
return neat.genome.mutate_link(p1__11081_SHARP_,false);
});})($,$__$1,$__$2))
);
var $__$4 = neat.genome.looper($__$3,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2($__$3,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$mutate,cljs.core.cst$kw$bias], null)),((function ($,$__$1,$__$2,$__$3){
return (function (p1__11082_SHARP_){
return neat.genome.mutate_link(p1__11082_SHARP_,true);
});})($,$__$1,$__$2,$__$3))
);
var $__$5 = neat.genome.looper($__$4,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2($__$4,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$mutate,cljs.core.cst$kw$node], null)),neat.genome.mutate_node);
var $__$6 = neat.genome.looper($__$5,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2($__$5,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$mutate,cljs.core.cst$kw$enable], null)),((function ($,$__$1,$__$2,$__$3,$__$4,$__$5){
return (function (p1__11083_SHARP_){
return neat.genome.mutate_toggle(p1__11083_SHARP_,true);
});})($,$__$1,$__$2,$__$3,$__$4,$__$5))
);
var $__$7 = neat.genome.looper($__$6,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2($__$6,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$mutate,cljs.core.cst$kw$disable], null)),((function ($,$__$1,$__$2,$__$3,$__$4,$__$5,$__$6){
return (function (p1__11084_SHARP_){
return neat.genome.mutate_toggle(p1__11084_SHARP_,false);
});})($,$__$1,$__$2,$__$3,$__$4,$__$5,$__$6))
);
return $__$7;
});
/**
 * g1 and g2 are genes
 */
neat.genome.disjunct = (function neat$genome$disjunct(g1,g2){
var set1 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$innovation,g1));
var set2 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$innovation,g2));
var diff1 = clojure.set.difference.cljs$core$IFn$_invoke$arity$2(set1,set2);
var diff2 = clojure.set.difference.cljs$core$IFn$_invoke$arity$2(set2,set1);
return ((cljs.core.count(diff1) + cljs.core.count(diff2)) / (function (){var x__4892__auto__ = cljs.core.count(g1);
var y__4893__auto__ = cljs.core.count(g2);
return ((x__4892__auto__ > y__4893__auto__) ? x__4892__auto__ : y__4893__auto__);
})());
});
neat.genome.abs = (function neat$genome$abs(n){
var x__4892__auto__ = n;
var y__4893__auto__ = (- n);
return ((x__4892__auto__ > y__4893__auto__) ? x__4892__auto__ : y__4893__auto__);
});
neat.genome.weights = (function neat$genome$weights(g1,g2){
var innov_weight = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.merge,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (gene){
return cljs.core.PersistentArrayMap.fromArray([cljs.core.cst$kw$innovation.cljs$core$IFn$_invoke$arity$1(gene),cljs.core.cst$kw$weight.cljs$core$IFn$_invoke$arity$1(gene)], true, false);
}),g1));
var G__11095 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null);
var vec__11097 = G__11095;
var sum = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11097,(0),null);
var coincident = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11097,(1),null);
var acc = vec__11097;
var G__11096 = g2;
var vec__11098 = G__11096;
var gene = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11098,(0),null);
var genes = cljs.core.nthnext(vec__11098,(1));
var G__11095__$1 = G__11095;
var G__11096__$1 = G__11096;
while(true){
var vec__11099 = G__11095__$1;
var sum__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11099,(0),null);
var coincident__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11099,(1),null);
var acc__$1 = vec__11099;
var vec__11100 = G__11096__$1;
var gene__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11100,(0),null);
var genes__$1 = cljs.core.nthnext(vec__11100,(1));
if(!((gene__$1 == null))){
var temp__4423__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(innov_weight,cljs.core.cst$kw$innovation.cljs$core$IFn$_invoke$arity$1(gene__$1));
if(cljs.core.truth_(temp__4423__auto__)){
var weight2 = temp__4423__auto__;
var sum_STAR_ = (sum__$1 + neat.genome.abs((cljs.core.cst$kw$weight.cljs$core$IFn$_invoke$arity$1(gene__$1) - weight2)));
var acc_STAR_ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sum_STAR_,(coincident__$1 + (1))], null);
var G__11101 = acc_STAR_;
var G__11102 = genes__$1;
G__11095__$1 = G__11101;
G__11096__$1 = G__11102;
continue;
} else {
var G__11103 = acc__$1;
var G__11104 = genes__$1;
G__11095__$1 = G__11103;
G__11096__$1 = G__11104;
continue;
}
} else {
return (sum__$1 / coincident__$1);
}
break;
}
});
neat.genome.same_QMARK_ = (function neat$genome$same_QMARK_(p__11105,p__11106){
var map__11111 = p__11105;
var map__11111__$1 = ((((!((map__11111 == null)))?((((map__11111.cljs$lang$protocol_mask$partition0$ & (64))) || (map__11111.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__11111):map__11111);
var g1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11111__$1,cljs.core.cst$kw$genes);
var map__11112 = p__11106;
var map__11112__$1 = ((((!((map__11112 == null)))?((((map__11112.cljs$lang$protocol_mask$partition0$ & (64))) || (map__11112.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__11112):map__11112);
var g2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11112__$1,cljs.core.cst$kw$genes);
return (((cljs.core.cst$kw$disjunct.cljs$core$IFn$_invoke$arity$1(neat.settings.delta) * neat.genome.disjunct(g1,g2)) + (cljs.core.cst$kw$weights.cljs$core$IFn$_invoke$arity$1(neat.settings.delta) * neat.genome.weights(g1,g2))) < cljs.core.cst$kw$threshold.cljs$core$IFn$_invoke$arity$1(neat.settings.delta));
});
neat.genome.crossover = (function neat$genome$crossover(g1,g2,settings){
if((cljs.core.cst$kw$fitness.cljs$core$IFn$_invoke$arity$1(g2) > cljs.core.cst$kw$fitness.cljs$core$IFn$_invoke$arity$1(g1))){
return neat$genome$crossover(g2,g1,settings);
} else {
var innov = cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core.merge,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__11115_SHARP_){
return cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$innovation.cljs$core$IFn$_invoke$arity$1(p1__11115_SHARP_)],[p1__11115_SHARP_]);
}),cljs.core.cst$kw$genes.cljs$core$IFn$_invoke$arity$1(g2)));
var $ = neat.genome.genome.cljs$core$IFn$_invoke$arity$1(settings);
var $__$1 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function ($,innov){
return (function (genome,gene){
var gene2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(innov,cljs.core.cst$kw$innovation.cljs$core$IFn$_invoke$arity$1(gene));
if(cljs.core.truth_((function (){var and__4549__auto__ = gene2;
if(cljs.core.truth_(and__4549__auto__)){
var and__4549__auto____$1 = cljs.core.cst$kw$enabled.cljs$core$IFn$_invoke$arity$1(gene2);
if(cljs.core.truth_(and__4549__auto____$1)){
return neat.genome.coin_flip();
} else {
return and__4549__auto____$1;
}
} else {
return and__4549__auto__;
}
})())){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(genome,cljs.core.cst$kw$genes,cljs.core.conj,gene2);
} else {
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(genome,cljs.core.cst$kw$genes,cljs.core.conj,gene);
}
});})($,innov))
,$,cljs.core.cst$kw$genes.cljs$core$IFn$_invoke$arity$1(g1));
var $__$2 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3($__$1,cljs.core.cst$kw$mutate,cljs.core.cst$kw$mutate.cljs$core$IFn$_invoke$arity$1(g1));
return $__$2;
}
});
