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
return (function (state_11346){
var state_val_11347 = (state_11346[(1)]);
if((state_val_11347 === (1))){
var inst_11317 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_11318 = [cljs.core.cst$kw$species,(0),cljs.core.cst$kw$genomes,(0)];
var inst_11319 = (new cljs.core.PersistentVector(null,4,(5),inst_11317,inst_11318,null));
var inst_11320 = pool;
var inst_11321 = inst_11319;
var state_11346__$1 = (function (){var statearr_11348 = state_11346;
(statearr_11348[(7)] = inst_11320);

(statearr_11348[(8)] = inst_11321);

return statearr_11348;
})();
var statearr_11349_11366 = state_11346__$1;
(statearr_11349_11366[(2)] = null);

(statearr_11349_11366[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_11347 === (2))){
var inst_11320 = (state_11346[(7)]);
var inst_11321 = (state_11346[(8)]);
var inst_11323 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(neat.state.app_state,cljs.core.assoc,cljs.core.cst$kw$pool,inst_11320);
var inst_11324 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(inst_11320,inst_11321);
var inst_11325 = cljs.core.cst$kw$settings.cljs$core$IFn$_invoke$arity$1(inst_11320);
var inst_11326 = neat.network.network(inst_11324,inst_11325);
var inst_11327 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(neat.state.app_state,cljs.core.assoc,cljs.core.cst$kw$loc,inst_11321);
var inst_11328 = (interact.cljs$core$IFn$_invoke$arity$1 ? interact.cljs$core$IFn$_invoke$arity$1(inst_11326) : interact.call(null,inst_11326));
var state_11346__$1 = (function (){var statearr_11350 = state_11346;
(statearr_11350[(9)] = inst_11323);

(statearr_11350[(10)] = inst_11327);

return statearr_11350;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_11346__$1,(4),inst_11328);
} else {
if((state_val_11347 === (3))){
var inst_11344 = (state_11346[(2)]);
var state_11346__$1 = state_11346;
return cljs.core.async.impl.ioc_helpers.return_chan(state_11346__$1,inst_11344);
} else {
if((state_val_11347 === (4))){
var inst_11331 = (state_11346[(11)]);
var inst_11332 = (state_11346[(12)]);
var inst_11320 = (state_11346[(7)]);
var inst_11321 = (state_11346[(8)]);
var inst_11330 = (state_11346[(2)]);
var inst_11331__$1 = cljs.core.update_in.cljs$core$IFn$_invoke$arity$5(inst_11320,inst_11321,cljs.core.assoc,cljs.core.cst$kw$fitness,inst_11330);
var inst_11332__$1 = (neat.runner.next_loc.cljs$core$IFn$_invoke$arity$2 ? neat.runner.next_loc.cljs$core$IFn$_invoke$arity$2(inst_11331__$1,inst_11321) : neat.runner.next_loc.call(null,inst_11331__$1,inst_11321));
var state_11346__$1 = (function (){var statearr_11351 = state_11346;
(statearr_11351[(11)] = inst_11331__$1);

(statearr_11351[(12)] = inst_11332__$1);

return statearr_11351;
})();
if(cljs.core.truth_(inst_11332__$1)){
var statearr_11352_11367 = state_11346__$1;
(statearr_11352_11367[(1)] = (5));

} else {
var statearr_11353_11368 = state_11346__$1;
(statearr_11353_11368[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_11347 === (5))){
var inst_11331 = (state_11346[(11)]);
var inst_11332 = (state_11346[(12)]);
var inst_11320 = inst_11331;
var inst_11321 = inst_11332;
var state_11346__$1 = (function (){var statearr_11354 = state_11346;
(statearr_11354[(7)] = inst_11320);

(statearr_11354[(8)] = inst_11321);

return statearr_11354;
})();
var statearr_11355_11369 = state_11346__$1;
(statearr_11355_11369[(2)] = null);

(statearr_11355_11369[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_11347 === (6))){
var inst_11331 = (state_11346[(11)]);
var inst_11336 = neat.pool.step(inst_11331);
var inst_11337 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_11338 = [cljs.core.cst$kw$species,(0),cljs.core.cst$kw$genomes,(0)];
var inst_11339 = (new cljs.core.PersistentVector(null,4,(5),inst_11337,inst_11338,null));
var inst_11320 = inst_11336;
var inst_11321 = inst_11339;
var state_11346__$1 = (function (){var statearr_11356 = state_11346;
(statearr_11356[(7)] = inst_11320);

(statearr_11356[(8)] = inst_11321);

return statearr_11356;
})();
var statearr_11357_11370 = state_11346__$1;
(statearr_11357_11370[(2)] = null);

(statearr_11357_11370[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_11347 === (7))){
var inst_11342 = (state_11346[(2)]);
var state_11346__$1 = state_11346;
var statearr_11358_11371 = state_11346__$1;
(statearr_11358_11371[(2)] = inst_11342);

(statearr_11358_11371[(1)] = (3));


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
var statearr_11362 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_11362[(0)] = neat$runner$runner_$_state_machine__8504__auto__);

(statearr_11362[(1)] = (1));

return statearr_11362;
});
var neat$runner$runner_$_state_machine__8504__auto____1 = (function (state_11346){
while(true){
var ret_value__8505__auto__ = (function (){try{while(true){
var result__8506__auto__ = switch__8503__auto__(state_11346);
if(cljs.core.keyword_identical_QMARK_(result__8506__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__8506__auto__;
}
break;
}
}catch (e11363){if((e11363 instanceof Object)){
var ex__8507__auto__ = e11363;
var statearr_11364_11372 = state_11346;
(statearr_11364_11372[(5)] = ex__8507__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_11346);

return cljs.core.cst$kw$recur;
} else {
throw e11363;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__8505__auto__,cljs.core.cst$kw$recur)){
var G__11373 = state_11346;
state_11346 = G__11373;
continue;
} else {
return ret_value__8505__auto__;
}
break;
}
});
neat$runner$runner_$_state_machine__8504__auto__ = function(state_11346){
switch(arguments.length){
case 0:
return neat$runner$runner_$_state_machine__8504__auto____0.call(this);
case 1:
return neat$runner$runner_$_state_machine__8504__auto____1.call(this,state_11346);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
neat$runner$runner_$_state_machine__8504__auto__.cljs$core$IFn$_invoke$arity$0 = neat$runner$runner_$_state_machine__8504__auto____0;
neat$runner$runner_$_state_machine__8504__auto__.cljs$core$IFn$_invoke$arity$1 = neat$runner$runner_$_state_machine__8504__auto____1;
return neat$runner$runner_$_state_machine__8504__auto__;
})()
;})(switch__8503__auto__,c__8570__auto__,interact))
})();
var state__8572__auto__ = (function (){var statearr_11365 = (f__8571__auto__.cljs$core$IFn$_invoke$arity$0 ? f__8571__auto__.cljs$core$IFn$_invoke$arity$0() : f__8571__auto__.call(null));
(statearr_11365[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8570__auto__);

return statearr_11365;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__8572__auto__);
});})(c__8570__auto__,interact))
);

return c__8570__auto__;
});
neat.runner.next_loc = (function neat$runner$next_loc(pool,p__11374){
var vec__11376 = p__11374;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11376,(0),null);
var sp = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11376,(1),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11376,(2),null);
var gn = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11376,(3),null);
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
