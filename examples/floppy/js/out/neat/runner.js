// Compiled by ClojureScript 1.7.122 {:static-fns true, :optimize-constants true}
goog.provide('neat.runner');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('neat.interaction');
goog.require('neat.network');
goog.require('neat.pool');
goog.require('neat.state');
neat.runner.next_loc;
neat.runner.runner = (function neat$runner$runner(pool,interactions){
var interact = neat.interaction.interact(interactions);
var c__8570__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__8570__auto__,interact){
return (function (){
var f__8571__auto__ = (function (){var switch__8503__auto__ = ((function (c__8570__auto__,interact){
return (function (state_11353){
var state_val_11354 = (state_11353[(1)]);
if((state_val_11354 === (1))){
var inst_11324 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_11325 = [cljs.core.cst$kw$species,(0),cljs.core.cst$kw$genomes,(0)];
var inst_11326 = (new cljs.core.PersistentVector(null,4,(5),inst_11324,inst_11325,null));
var inst_11327 = pool;
var inst_11328 = inst_11326;
var state_11353__$1 = (function (){var statearr_11355 = state_11353;
(statearr_11355[(7)] = inst_11328);

(statearr_11355[(8)] = inst_11327);

return statearr_11355;
})();
var statearr_11356_11372 = state_11353__$1;
(statearr_11356_11372[(2)] = null);

(statearr_11356_11372[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_11354 === (2))){
var inst_11328 = (state_11353[(7)]);
var inst_11327 = (state_11353[(8)]);
var inst_11330 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(inst_11327,inst_11328);
var inst_11331 = cljs.core.cst$kw$settings.cljs$core$IFn$_invoke$arity$1(inst_11327);
var inst_11332 = neat.network.network(inst_11330,inst_11331);
var inst_11333 = (interact.cljs$core$IFn$_invoke$arity$1 ? interact.cljs$core$IFn$_invoke$arity$1(inst_11332) : interact.call(null,inst_11332));
var state_11353__$1 = state_11353;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_11353__$1,(4),inst_11333);
} else {
if((state_val_11354 === (3))){
var inst_11351 = (state_11353[(2)]);
var state_11353__$1 = state_11353;
return cljs.core.async.impl.ioc_helpers.return_chan(state_11353__$1,inst_11351);
} else {
if((state_val_11354 === (4))){
var inst_11328 = (state_11353[(7)]);
var inst_11337 = (state_11353[(9)]);
var inst_11336 = (state_11353[(10)]);
var inst_11327 = (state_11353[(8)]);
var inst_11335 = (state_11353[(2)]);
var inst_11336__$1 = cljs.core.update_in.cljs$core$IFn$_invoke$arity$5(inst_11327,inst_11328,cljs.core.assoc,cljs.core.cst$kw$fitness,inst_11335);
var inst_11337__$1 = (neat.runner.next_loc.cljs$core$IFn$_invoke$arity$2 ? neat.runner.next_loc.cljs$core$IFn$_invoke$arity$2(inst_11336__$1,inst_11328) : neat.runner.next_loc.call(null,inst_11336__$1,inst_11328));
var inst_11338 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(neat.state.app_state,cljs.core.assoc,cljs.core.cst$kw$pool,inst_11327);
var inst_11339 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(neat.state.app_state,cljs.core.assoc,cljs.core.cst$kw$loc,inst_11328);
var state_11353__$1 = (function (){var statearr_11357 = state_11353;
(statearr_11357[(9)] = inst_11337__$1);

(statearr_11357[(11)] = inst_11338);

(statearr_11357[(10)] = inst_11336__$1);

(statearr_11357[(12)] = inst_11339);

return statearr_11357;
})();
if(cljs.core.truth_(inst_11337__$1)){
var statearr_11358_11373 = state_11353__$1;
(statearr_11358_11373[(1)] = (5));

} else {
var statearr_11359_11374 = state_11353__$1;
(statearr_11359_11374[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_11354 === (5))){
var inst_11337 = (state_11353[(9)]);
var inst_11336 = (state_11353[(10)]);
var inst_11327 = inst_11336;
var inst_11328 = inst_11337;
var state_11353__$1 = (function (){var statearr_11360 = state_11353;
(statearr_11360[(7)] = inst_11328);

(statearr_11360[(8)] = inst_11327);

return statearr_11360;
})();
var statearr_11361_11375 = state_11353__$1;
(statearr_11361_11375[(2)] = null);

(statearr_11361_11375[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_11354 === (6))){
var inst_11336 = (state_11353[(10)]);
var inst_11343 = neat.pool.step(inst_11336);
var inst_11344 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_11345 = [cljs.core.cst$kw$species,(0),cljs.core.cst$kw$genomes,(0)];
var inst_11346 = (new cljs.core.PersistentVector(null,4,(5),inst_11344,inst_11345,null));
var inst_11327 = inst_11343;
var inst_11328 = inst_11346;
var state_11353__$1 = (function (){var statearr_11362 = state_11353;
(statearr_11362[(7)] = inst_11328);

(statearr_11362[(8)] = inst_11327);

return statearr_11362;
})();
var statearr_11363_11376 = state_11353__$1;
(statearr_11363_11376[(2)] = null);

(statearr_11363_11376[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_11354 === (7))){
var inst_11349 = (state_11353[(2)]);
var state_11353__$1 = state_11353;
var statearr_11364_11377 = state_11353__$1;
(statearr_11364_11377[(2)] = inst_11349);

(statearr_11364_11377[(1)] = (3));


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
});})(c__8570__auto__,interact))
;
return ((function (switch__8503__auto__,c__8570__auto__,interact){
return (function() {
var neat$runner$runner_$_state_machine__8504__auto__ = null;
var neat$runner$runner_$_state_machine__8504__auto____0 = (function (){
var statearr_11368 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_11368[(0)] = neat$runner$runner_$_state_machine__8504__auto__);

(statearr_11368[(1)] = (1));

return statearr_11368;
});
var neat$runner$runner_$_state_machine__8504__auto____1 = (function (state_11353){
while(true){
var ret_value__8505__auto__ = (function (){try{while(true){
var result__8506__auto__ = switch__8503__auto__(state_11353);
if(cljs.core.keyword_identical_QMARK_(result__8506__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__8506__auto__;
}
break;
}
}catch (e11369){if((e11369 instanceof Object)){
var ex__8507__auto__ = e11369;
var statearr_11370_11378 = state_11353;
(statearr_11370_11378[(5)] = ex__8507__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_11353);

return cljs.core.cst$kw$recur;
} else {
throw e11369;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__8505__auto__,cljs.core.cst$kw$recur)){
var G__11379 = state_11353;
state_11353 = G__11379;
continue;
} else {
return ret_value__8505__auto__;
}
break;
}
});
neat$runner$runner_$_state_machine__8504__auto__ = function(state_11353){
switch(arguments.length){
case 0:
return neat$runner$runner_$_state_machine__8504__auto____0.call(this);
case 1:
return neat$runner$runner_$_state_machine__8504__auto____1.call(this,state_11353);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
neat$runner$runner_$_state_machine__8504__auto__.cljs$core$IFn$_invoke$arity$0 = neat$runner$runner_$_state_machine__8504__auto____0;
neat$runner$runner_$_state_machine__8504__auto__.cljs$core$IFn$_invoke$arity$1 = neat$runner$runner_$_state_machine__8504__auto____1;
return neat$runner$runner_$_state_machine__8504__auto__;
})()
;})(switch__8503__auto__,c__8570__auto__,interact))
})();
var state__8572__auto__ = (function (){var statearr_11371 = (f__8571__auto__.cljs$core$IFn$_invoke$arity$0 ? f__8571__auto__.cljs$core$IFn$_invoke$arity$0() : f__8571__auto__.call(null));
(statearr_11371[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8570__auto__);

return statearr_11371;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__8572__auto__);
});})(c__8570__auto__,interact))
);

return c__8570__auto__;
});
neat.runner.next_loc = (function neat$runner$next_loc(pool,p__11380){
var vec__11382 = p__11380;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11382,(0),null);
var sp = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11382,(1),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11382,(2),null);
var gn = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11382,(3),null);
if(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(pool,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$species,sp,cljs.core.cst$kw$genomes,(gn + (1))], null)))){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$species,sp,cljs.core.cst$kw$genomes,(gn + (1))], null);
} else {
if(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(pool,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$species,(sp + (1)),cljs.core.cst$kw$genomes,(0)], null)))){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$species,(sp + (1)),cljs.core.cst$kw$genomes,(0)], null);
} else {
return null;
}
}
});
