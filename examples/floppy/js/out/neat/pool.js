// Compiled by ClojureScript 1.7.122 {:static-fns true, :optimize-constants true}
goog.provide('neat.pool');
goog.require('cljs.core');
goog.require('neat.genome');
goog.require('neat.settings');
neat.pool.add_genome;

neat.pool.vec_pool;
neat.pool.pool = (function neat$pool$pool(settings){
var G__11119 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(neat.settings.default_pool,cljs.core.cst$kw$settings,settings,cljs.core.array_seq([cljs.core.cst$kw$species,cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(neat.pool.add_genome,cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (){
return neat.genome.genome.cljs$core$IFn$_invoke$arity$1(settings);
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$population.cljs$core$IFn$_invoke$arity$1(settings))))], 0));
return (neat.pool.vec_pool.cljs$core$IFn$_invoke$arity$1 ? neat.pool.vec_pool.cljs$core$IFn$_invoke$arity$1(G__11119) : neat.pool.vec_pool.call(null,G__11119));
});
neat.pool.cull;

neat.pool.cull_stale;

neat.pool.cull_weak;

neat.pool.fill_avg;

neat.pool.fill_rand;
neat.pool.step = (function neat$pool$step(pool){
var culled_pool = (function (){var G__11125 = (function (){var G__11126 = (neat.pool.cull.cljs$core$IFn$_invoke$arity$2 ? neat.pool.cull.cljs$core$IFn$_invoke$arity$2(false,pool) : neat.pool.cull.call(null,false,pool));
return (neat.pool.cull_stale.cljs$core$IFn$_invoke$arity$1 ? neat.pool.cull_stale.cljs$core$IFn$_invoke$arity$1(G__11126) : neat.pool.cull_stale.call(null,G__11126));
})();
return (neat.pool.cull_weak.cljs$core$IFn$_invoke$arity$1 ? neat.pool.cull_weak.cljs$core$IFn$_invoke$arity$1(G__11125) : neat.pool.cull_weak.call(null,G__11125));
})();
var avg_children = (neat.pool.fill_avg.cljs$core$IFn$_invoke$arity$1 ? neat.pool.fill_avg.cljs$core$IFn$_invoke$arity$1(culled_pool) : neat.pool.fill_avg.call(null,culled_pool));
var top_pool = (neat.pool.cull.cljs$core$IFn$_invoke$arity$2 ? neat.pool.cull.cljs$core$IFn$_invoke$arity$2(true,culled_pool) : neat.pool.cull.call(null,true,culled_pool));
var children = (neat.pool.fill_rand.cljs$core$IFn$_invoke$arity$2 ? neat.pool.fill_rand.cljs$core$IFn$_invoke$arity$2(top_pool,avg_children) : neat.pool.fill_rand.call(null,top_pool,avg_children));
var G__11127 = cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(top_pool,cljs.core.cst$kw$species,((function (culled_pool,avg_children,top_pool,children){
return (function (spp){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(neat.pool.add_genome,spp,children);
});})(culled_pool,avg_children,top_pool,children))
),cljs.core.cst$kw$generation,cljs.core.inc);
return (neat.pool.vec_pool.cljs$core$IFn$_invoke$arity$1 ? neat.pool.vec_pool.cljs$core$IFn$_invoke$arity$1(G__11127) : neat.pool.vec_pool.call(null,G__11127));
});
neat.pool.staleness;

neat.pool.ranked;

neat.pool.avg_rank;

neat.pool.total_avg_rank;

neat.pool.population;
neat.pool.cull_stale = (function neat$pool$cull_stale(pool){
var map__11135 = pool;
var map__11135__$1 = ((((!((map__11135 == null)))?((((map__11135.cljs$lang$protocol_mask$partition0$ & (64))) || (map__11135.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__11135):map__11135);
var spp = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11135__$1,cljs.core.cst$kw$species);
var max_fitness = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11135__$1,cljs.core.cst$kw$max_DASH_fitness);
var settings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11135__$1,cljs.core.cst$kw$settings);
var map__11136 = settings;
var map__11136__$1 = ((((!((map__11136 == null)))?((((map__11136.cljs$lang$protocol_mask$partition0$ & (64))) || (map__11136.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__11136):map__11136);
var stale_species = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11136__$1,cljs.core.cst$kw$stale_DASH_species);
var survived = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (map__11135,map__11135__$1,spp,max_fitness,settings,map__11136,map__11136__$1,stale_species){
return (function (p__11139){
var map__11140 = p__11139;
var map__11140__$1 = ((((!((map__11140 == null)))?((((map__11140.cljs$lang$protocol_mask$partition0$ & (64))) || (map__11140.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__11140):map__11140);
var staleness = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11140__$1,cljs.core.cst$kw$staleness);
var top_fitness = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11140__$1,cljs.core.cst$kw$top_DASH_fitness);
return ((staleness < stale_species)) || ((top_fitness >= max_fitness));
});})(map__11135,map__11135__$1,spp,max_fitness,settings,map__11136,map__11136__$1,stale_species))
,cljs.core.map.cljs$core$IFn$_invoke$arity$2(neat.pool.staleness,spp));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(pool,cljs.core.cst$kw$species,survived);
});
neat.pool.cull = (function neat$pool$cull(cut_to_one_QMARK_,pool){
var survived = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (sp){
var half = (function (){var G__11143 = (cljs.core.count(cljs.core.cst$kw$genomes.cljs$core$IFn$_invoke$arity$1(sp)) / (2));
return Math.ceil(G__11143);
})();
var remaining = (cljs.core.truth_(cut_to_one_QMARK_)?(1):half);
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(sp,cljs.core.cst$kw$genomes,cljs.core.partial.cljs$core$IFn$_invoke$arity$3(cljs.core.sort_by,cljs.core.cst$kw$fitness,cljs.core._GT_)),cljs.core.cst$kw$genomes,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.take,remaining));
}),cljs.core.cst$kw$species.cljs$core$IFn$_invoke$arity$1(pool));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(pool,cljs.core.cst$kw$species,survived);
});
neat.pool.cull_weak = (function neat$pool$cull_weak(pool){
var pop = cljs.core.cst$kw$population.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$settings.cljs$core$IFn$_invoke$arity$1(pool));
var ranked = (function (){var G__11149 = (neat.pool.ranked.cljs$core$IFn$_invoke$arity$1 ? neat.pool.ranked.cljs$core$IFn$_invoke$arity$1(pool) : neat.pool.ranked.call(null,pool));
return (neat.pool.avg_rank.cljs$core$IFn$_invoke$arity$1 ? neat.pool.avg_rank.cljs$core$IFn$_invoke$arity$1(G__11149) : neat.pool.avg_rank.call(null,G__11149));
})();
var total = (neat.pool.total_avg_rank.cljs$core$IFn$_invoke$arity$1 ? neat.pool.total_avg_rank.cljs$core$IFn$_invoke$arity$1(ranked) : neat.pool.total_avg_rank.call(null,ranked));
var survived = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (pop,ranked,total){
return (function (p__11150){
var map__11151 = p__11150;
var map__11151__$1 = ((((!((map__11151 == null)))?((((map__11151.cljs$lang$protocol_mask$partition0$ & (64))) || (map__11151.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__11151):map__11151);
var avg_rank = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11151__$1,cljs.core.cst$kw$avg_DASH_rank);
return ((function (){var G__11153 = ((avg_rank / total) * pop);
return Math.floor(G__11153);
})() >= (1));
});})(pop,ranked,total))
,cljs.core.cst$kw$species.cljs$core$IFn$_invoke$arity$1(ranked));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(pool,cljs.core.cst$kw$species,survived);
});
neat.pool.breed_child = (function neat$pool$breed_child(sp,settings){
var rand_genome = (function neat$pool$breed_child_$_rand_genome(sp__$1){
return cljs.core.rand_nth(cljs.core.vec(cljs.core.cst$kw$genomes.cljs$core$IFn$_invoke$arity$1(sp__$1)));
});
return neat.genome.mutate((((cljs.core.rand.cljs$core$IFn$_invoke$arity$0() < cljs.core.cst$kw$crossover.cljs$core$IFn$_invoke$arity$1(settings)))?(function (){var g1 = rand_genome(sp);
var g2 = rand_genome(sp);
return neat.genome.crossover(g1,g2,settings);
})():rand_genome(sp)));
});
neat.pool.fill_avg = (function neat$pool$fill_avg(pool){
var settings = cljs.core.cst$kw$settings.cljs$core$IFn$_invoke$arity$1(pool);
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (settings){
return (function (sp){
return neat.pool.breed_child(sp,settings);
});})(settings))
,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (settings){
return (function (){
return cljs.core.rand_nth(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,false], null));
});})(settings))
,cljs.core.cst$kw$species.cljs$core$IFn$_invoke$arity$1(pool))));
});
neat.pool.rand_child = (function neat$pool$rand_child(pool){
return neat.pool.breed_child(cljs.core.rand_nth(cljs.core.vec(cljs.core.cst$kw$species.cljs$core$IFn$_invoke$arity$1(pool))),cljs.core.cst$kw$settings.cljs$core$IFn$_invoke$arity$1(pool));
});
/**
 * fills children coll up to population with rand-children
 *   NOTE: meant to be used on a pool with only one genome in each species
 */
neat.pool.fill_rand = (function neat$pool$fill_rand(pool,children){
var children__$1 = children;
while(true){
if(((cljs.core.count(children__$1) + cljs.core.count(cljs.core.cst$kw$species.cljs$core$IFn$_invoke$arity$1(pool))) < cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(pool,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$settings,cljs.core.cst$kw$population], null)))){
var G__11154 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(children__$1,neat.pool.rand_child(pool));
children__$1 = G__11154;
continue;
} else {
return children__$1;
}
break;
}
});
neat.pool.add_genome = (function neat$pool$add_genome(spp,genome){
var acc = cljs.core.PersistentVector.EMPTY;
var G__11160 = spp;
var vec__11161 = G__11160;
var sp = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11161,(0),null);
var spp__$1 = cljs.core.nthnext(vec__11161,(1));
var acc__$1 = acc;
var G__11160__$1 = G__11160;
while(true){
var acc__$2 = acc__$1;
var vec__11162 = G__11160__$1;
var sp__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11162,(0),null);
var spp__$2 = cljs.core.nthnext(vec__11162,(1));
if(!((sp__$1 == null))){
if(cljs.core.truth_(neat.genome.same_QMARK_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(sp__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$genomes,(0)], null)),genome))){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc__$2,cljs.core.update.cljs$core$IFn$_invoke$arity$4(sp__$1,cljs.core.cst$kw$genomes,cljs.core.conj,genome)),spp__$2);
} else {
var G__11163 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc__$2,sp__$1);
var G__11164 = spp__$2;
acc__$1 = G__11163;
G__11160__$1 = G__11164;
continue;
}
} else {
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc__$2,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(neat.settings.default_sp,cljs.core.cst$kw$genomes,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [genome], null)));
}
break;
}
});
neat.pool.most_fit = (function neat$pool$most_fit(sp){
return cljs.core.first(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$fitness,cljs.core._GT_,cljs.core.cst$kw$genomes.cljs$core$IFn$_invoke$arity$1(sp)));
});
neat.pool.staleness = (function neat$pool$staleness(sp){
var fittest = neat.pool.most_fit(sp);
if((fittest > cljs.core.cst$kw$top_DASH_fitness.cljs$core$IFn$_invoke$arity$1(sp))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(sp,cljs.core.cst$kw$top_DASH_fitness,fittest),cljs.core.cst$kw$staleness,(0));
} else {
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(sp,cljs.core.cst$kw$staleness,cljs.core.inc);
}
});
neat.pool.sp_avg = (function neat$pool$sp_avg(sp){
var genomes = cljs.core.cst$kw$genomes.cljs$core$IFn$_invoke$arity$1(sp);
var total = cljs.core.count(genomes);
var sum = cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$rank,genomes));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(sp,cljs.core.cst$kw$avg_DASH_rank,(sum / total));
});
neat.pool.fitness_vecs = (function neat$pool$fitness_vecs(pool){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,(function (){var iter__5333__auto__ = (function neat$pool$fitness_vecs_$_iter__11215(s__11216){
return (new cljs.core.LazySeq(null,(function (){
var s__11216__$1 = s__11216;
while(true){
var temp__4425__auto__ = cljs.core.seq(s__11216__$1);
if(temp__4425__auto__){
var s__11216__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(s__11216__$2)){
var c__5331__auto__ = cljs.core.chunk_first(s__11216__$2);
var size__5332__auto__ = cljs.core.count(c__5331__auto__);
var b__11218 = cljs.core.chunk_buffer(size__5332__auto__);
if((function (){var i__11217 = (0);
while(true){
if((i__11217 < size__5332__auto__)){
var vec__11243 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__5331__auto__,i__11217);
var sidx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11243,(0),null);
var sp = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11243,(1),null);
cljs.core.chunk_append(b__11218,(function (){var iter__5333__auto__ = ((function (i__11217,vec__11243,sidx,sp,c__5331__auto__,size__5332__auto__,b__11218,s__11216__$2,temp__4425__auto__){
return (function neat$pool$fitness_vecs_$_iter__11215_$_iter__11244(s__11245){
return (new cljs.core.LazySeq(null,((function (i__11217,vec__11243,sidx,sp,c__5331__auto__,size__5332__auto__,b__11218,s__11216__$2,temp__4425__auto__){
return (function (){
var s__11245__$1 = s__11245;
while(true){
var temp__4425__auto____$1 = cljs.core.seq(s__11245__$1);
if(temp__4425__auto____$1){
var s__11245__$2 = temp__4425__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__11245__$2)){
var c__5331__auto____$1 = cljs.core.chunk_first(s__11245__$2);
var size__5332__auto____$1 = cljs.core.count(c__5331__auto____$1);
var b__11247 = cljs.core.chunk_buffer(size__5332__auto____$1);
if((function (){var i__11246 = (0);
while(true){
if((i__11246 < size__5332__auto____$1)){
var vec__11252 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__5331__auto____$1,i__11246);
var gidx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11252,(0),null);
var genome = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11252,(1),null);
cljs.core.chunk_append(b__11247,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sidx,gidx], null),cljs.core.cst$kw$fitness.cljs$core$IFn$_invoke$arity$1(genome)], null));

var G__11265 = (i__11246 + (1));
i__11246 = G__11265;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__11247),neat$pool$fitness_vecs_$_iter__11215_$_iter__11244(cljs.core.chunk_rest(s__11245__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__11247),null);
}
} else {
var vec__11253 = cljs.core.first(s__11245__$2);
var gidx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11253,(0),null);
var genome = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11253,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sidx,gidx], null),cljs.core.cst$kw$fitness.cljs$core$IFn$_invoke$arity$1(genome)], null),neat$pool$fitness_vecs_$_iter__11215_$_iter__11244(cljs.core.rest(s__11245__$2)));
}
} else {
return null;
}
break;
}
});})(i__11217,vec__11243,sidx,sp,c__5331__auto__,size__5332__auto__,b__11218,s__11216__$2,temp__4425__auto__))
,null,null));
});})(i__11217,vec__11243,sidx,sp,c__5331__auto__,size__5332__auto__,b__11218,s__11216__$2,temp__4425__auto__))
;
return iter__5333__auto__(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,cljs.core.cst$kw$genomes.cljs$core$IFn$_invoke$arity$1(sp)));
})());

var G__11266 = (i__11217 + (1));
i__11217 = G__11266;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__11218),neat$pool$fitness_vecs_$_iter__11215(cljs.core.chunk_rest(s__11216__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__11218),null);
}
} else {
var vec__11254 = cljs.core.first(s__11216__$2);
var sidx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11254,(0),null);
var sp = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11254,(1),null);
return cljs.core.cons((function (){var iter__5333__auto__ = ((function (vec__11254,sidx,sp,s__11216__$2,temp__4425__auto__){
return (function neat$pool$fitness_vecs_$_iter__11215_$_iter__11255(s__11256){
return (new cljs.core.LazySeq(null,((function (vec__11254,sidx,sp,s__11216__$2,temp__4425__auto__){
return (function (){
var s__11256__$1 = s__11256;
while(true){
var temp__4425__auto____$1 = cljs.core.seq(s__11256__$1);
if(temp__4425__auto____$1){
var s__11256__$2 = temp__4425__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__11256__$2)){
var c__5331__auto__ = cljs.core.chunk_first(s__11256__$2);
var size__5332__auto__ = cljs.core.count(c__5331__auto__);
var b__11258 = cljs.core.chunk_buffer(size__5332__auto__);
if((function (){var i__11257 = (0);
while(true){
if((i__11257 < size__5332__auto__)){
var vec__11263 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__5331__auto__,i__11257);
var gidx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11263,(0),null);
var genome = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11263,(1),null);
cljs.core.chunk_append(b__11258,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sidx,gidx], null),cljs.core.cst$kw$fitness.cljs$core$IFn$_invoke$arity$1(genome)], null));

var G__11267 = (i__11257 + (1));
i__11257 = G__11267;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__11258),neat$pool$fitness_vecs_$_iter__11215_$_iter__11255(cljs.core.chunk_rest(s__11256__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__11258),null);
}
} else {
var vec__11264 = cljs.core.first(s__11256__$2);
var gidx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11264,(0),null);
var genome = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11264,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sidx,gidx], null),cljs.core.cst$kw$fitness.cljs$core$IFn$_invoke$arity$1(genome)], null),neat$pool$fitness_vecs_$_iter__11215_$_iter__11255(cljs.core.rest(s__11256__$2)));
}
} else {
return null;
}
break;
}
});})(vec__11254,sidx,sp,s__11216__$2,temp__4425__auto__))
,null,null));
});})(vec__11254,sidx,sp,s__11216__$2,temp__4425__auto__))
;
return iter__5333__auto__(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,cljs.core.cst$kw$genomes.cljs$core$IFn$_invoke$arity$1(sp)));
})(),neat$pool$fitness_vecs_$_iter__11215(cljs.core.rest(s__11216__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5333__auto__(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,cljs.core.cst$kw$species.cljs$core$IFn$_invoke$arity$1(pool)));
})());
});
neat.pool.vec_pool = (function neat$pool$vec_pool(pool){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(pool,cljs.core.cst$kw$species,(function (spp){
return cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (sp){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(sp,cljs.core.cst$kw$genomes,cljs.core.vec);
}),spp));
}));
});
neat.pool.ranked = (function neat$pool$ranked(pool){
var ranks = cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,cljs.core.sort_by.cljs$core$IFn$_invoke$arity$3(cljs.core.second,cljs.core._LT_,neat.pool.fitness_vecs(pool))));
var pool_STAR_ = neat.pool.vec_pool(pool);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (ranks,pool_STAR_){
return (function (pool__$1,p__11271){
var vec__11272 = p__11271;
var rank = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11272,(0),null);
var vec__11273 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11272,(1),null);
var sp_n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11273,(0),null);
var gnm_n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11273,(1),null);
return cljs.core.assoc_in(pool__$1,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$species,sp_n,cljs.core.cst$kw$genomes,gnm_n,cljs.core.cst$kw$rank], null),rank);
});})(ranks,pool_STAR_))
,pool_STAR_,ranks);
});
neat.pool.avg_rank = (function neat$pool$avg_rank(pool){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(pool,cljs.core.cst$kw$species,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.map,neat.pool.sp_avg));
});
neat.pool.total_avg_rank = (function neat$pool$total_avg_rank(pool){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$avg_DASH_rank,cljs.core.cst$kw$species.cljs$core$IFn$_invoke$arity$1(pool)));
});
neat.pool.for_genome = (function neat$pool$for_genome(pool,func){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(pool,cljs.core.cst$kw$species,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.map,(function (sp){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(sp,cljs.core.cst$kw$genomes,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.map,(function (gnm){
return (func.cljs$core$IFn$_invoke$arity$1 ? func.cljs$core$IFn$_invoke$arity$1(gnm) : func.call(null,gnm));
})));
})));
});
neat.pool.rand_fitness = (function neat$pool$rand_fitness(pool){
return neat.pool.for_genome(pool,(function (gnm){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(gnm,cljs.core.cst$kw$fitness,cljs.core.rand_int((1000)));
}));
});
