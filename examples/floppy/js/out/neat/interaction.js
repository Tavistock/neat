// Compiled by ClojureScript 1.7.122 {:static-fns true, :optimize-constants true}
goog.provide('neat.interaction');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('neat.network');
goog.require('neat.state');
neat.interaction.interact_map = new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$read,null,cljs.core.cst$kw$score,null,cljs.core.cst$kw$game_DASH_over_QMARK_,null,cljs.core.cst$kw$start_BANG_,null,cljs.core.cst$kw$restart_BANG_,null,cljs.core.cst$kw$controls,null,cljs.core.cst$kw$commands,null], null);
neat.interaction.interact = (function neat$interaction$interact(interaction){
var map__10922 = interaction;
var map__10922__$1 = ((((!((map__10922 == null)))?((((map__10922.cljs$lang$protocol_mask$partition0$ & (64))) || (map__10922.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__10922):map__10922);
var wait = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10922__$1,cljs.core.cst$kw$wait);
var commands = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10922__$1,cljs.core.cst$kw$commands);
var read = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10922__$1,cljs.core.cst$kw$read);
var score = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10922__$1,cljs.core.cst$kw$score);
var game_over_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10922__$1,cljs.core.cst$kw$game_DASH_over_QMARK_);
var start_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10922__$1,cljs.core.cst$kw$start_BANG_);
var restart_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10922__$1,cljs.core.cst$kw$restart_BANG_);
var controls = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10922__$1,cljs.core.cst$kw$controls);
return ((function (map__10922,map__10922__$1,wait,commands,read,score,game_over_QMARK_,start_BANG_,restart_BANG_,controls){
return (function (network){
var c__8570__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__8570__auto__,map__10922,map__10922__$1,wait,commands,read,score,game_over_QMARK_,start_BANG_,restart_BANG_,controls){
return (function (){
var f__8571__auto__ = (function (){var switch__8503__auto__ = ((function (c__8570__auto__,map__10922,map__10922__$1,wait,commands,read,score,game_over_QMARK_,start_BANG_,restart_BANG_,controls){
return (function (state_10959){
var state_val_10960 = (state_10959[(1)]);
if((state_val_10960 === (1))){
var inst_10924 = (start_BANG_.cljs$core$IFn$_invoke$arity$0 ? start_BANG_.cljs$core$IFn$_invoke$arity$0() : start_BANG_.call(null));
var state_10959__$1 = state_10959;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_10959__$1,(2),inst_10924);
} else {
if((state_val_10960 === (2))){
var inst_10926 = (state_10959[(2)]);
var inst_10927 = (0);
var inst_10928 = network;
var state_10959__$1 = (function (){var statearr_10961 = state_10959;
(statearr_10961[(7)] = inst_10928);

(statearr_10961[(8)] = inst_10926);

(statearr_10961[(9)] = inst_10927);

return statearr_10961;
})();
var statearr_10962_10979 = state_10959__$1;
(statearr_10962_10979[(2)] = null);

(statearr_10962_10979[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_10960 === (3))){
var inst_10927 = (state_10959[(9)]);
var inst_10930 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(neat.state.app_state,cljs.core.assoc,cljs.core.cst$kw$fitness,inst_10927);
var inst_10931 = (game_over_QMARK_.cljs$core$IFn$_invoke$arity$0 ? game_over_QMARK_.cljs$core$IFn$_invoke$arity$0() : game_over_QMARK_.call(null));
var state_10959__$1 = (function (){var statearr_10963 = state_10959;
(statearr_10963[(10)] = inst_10930);

return statearr_10963;
})();
if(cljs.core.truth_(inst_10931)){
var statearr_10964_10980 = state_10959__$1;
(statearr_10964_10980[(1)] = (5));

} else {
var statearr_10965_10981 = state_10959__$1;
(statearr_10965_10981[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_10960 === (4))){
var inst_10957 = (state_10959[(2)]);
var state_10959__$1 = state_10959;
return cljs.core.async.impl.ioc_helpers.return_chan(state_10959__$1,inst_10957);
} else {
if((state_val_10960 === (5))){
var inst_10933 = (restart_BANG_.cljs$core$IFn$_invoke$arity$0 ? restart_BANG_.cljs$core$IFn$_invoke$arity$0() : restart_BANG_.call(null));
var state_10959__$1 = state_10959;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_10959__$1,(8),inst_10933);
} else {
if((state_val_10960 === (6))){
var inst_10928 = (state_10959[(7)]);
var inst_10938 = (state_10959[(11)]);
var inst_10927 = (state_10959[(9)]);
var inst_10937 = (read.cljs$core$IFn$_invoke$arity$0 ? read.cljs$core$IFn$_invoke$arity$0() : read.call(null));
var inst_10938__$1 = neat.network.step(inst_10928,inst_10937);
var inst_10939 = neat.network.outputs(inst_10938__$1);
var inst_10940 = (commands.cljs$core$IFn$_invoke$arity$2 ? commands.cljs$core$IFn$_invoke$arity$2(inst_10939,controls) : commands.call(null,inst_10939,controls));
var inst_10941 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(neat.state.app_state,cljs.core.assoc,cljs.core.cst$kw$network,inst_10938__$1,cljs.core.array_seq([cljs.core.cst$kw$inputs,inst_10937,cljs.core.cst$kw$outputs,inst_10939], 0));
var inst_10942 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_10943 = [cljs.core.cst$kw$ui,cljs.core.cst$kw$frame];
var inst_10944 = (new cljs.core.PersistentVector(null,2,(5),inst_10942,inst_10943,null));
var inst_10945 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(neat.state.app_state,cljs.core.update_in,inst_10944,cljs.core.inc);
var inst_10946 = (function (){var fitness = inst_10927;
var network__$1 = inst_10928;
var inputs = inst_10937;
var network_STAR_ = inst_10938__$1;
var outputs = inst_10939;
var cmds = inst_10940;
return ((function (fitness,network__$1,inputs,network_STAR_,outputs,cmds,inst_10928,inst_10938,inst_10927,inst_10937,inst_10938__$1,inst_10939,inst_10940,inst_10941,inst_10942,inst_10943,inst_10944,inst_10945,state_val_10960,c__8570__auto__,map__10922,map__10922__$1,wait,commands,read,score,game_over_QMARK_,start_BANG_,restart_BANG_,controls){
return (function (p1__10864_SHARP_){
return (p1__10864_SHARP_.cljs$core$IFn$_invoke$arity$0 ? p1__10864_SHARP_.cljs$core$IFn$_invoke$arity$0() : p1__10864_SHARP_.call(null));
});
;})(fitness,network__$1,inputs,network_STAR_,outputs,cmds,inst_10928,inst_10938,inst_10927,inst_10937,inst_10938__$1,inst_10939,inst_10940,inst_10941,inst_10942,inst_10943,inst_10944,inst_10945,state_val_10960,c__8570__auto__,map__10922,map__10922__$1,wait,commands,read,score,game_over_QMARK_,start_BANG_,restart_BANG_,controls))
})();
var inst_10947 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(inst_10946,inst_10940);
var inst_10948 = cljs.core.dorun.cljs$core$IFn$_invoke$arity$1(inst_10947);
var inst_10949 = cljs.core.async.timeout(wait);
var state_10959__$1 = (function (){var statearr_10966 = state_10959;
(statearr_10966[(12)] = inst_10945);

(statearr_10966[(11)] = inst_10938__$1);

(statearr_10966[(13)] = inst_10948);

(statearr_10966[(14)] = inst_10941);

return statearr_10966;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_10959__$1,(9),inst_10949);
} else {
if((state_val_10960 === (7))){
var inst_10955 = (state_10959[(2)]);
var state_10959__$1 = state_10959;
var statearr_10967_10982 = state_10959__$1;
(statearr_10967_10982[(2)] = inst_10955);

(statearr_10967_10982[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_10960 === (8))){
var inst_10927 = (state_10959[(9)]);
var inst_10935 = (state_10959[(2)]);
var state_10959__$1 = (function (){var statearr_10968 = state_10959;
(statearr_10968[(15)] = inst_10935);

return statearr_10968;
})();
var statearr_10969_10983 = state_10959__$1;
(statearr_10969_10983[(2)] = inst_10927);

(statearr_10969_10983[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_10960 === (9))){
var inst_10938 = (state_10959[(11)]);
var inst_10927 = (state_10959[(9)]);
var inst_10951 = (state_10959[(2)]);
var inst_10952 = (score.cljs$core$IFn$_invoke$arity$1 ? score.cljs$core$IFn$_invoke$arity$1(inst_10927) : score.call(null,inst_10927));
var inst_10927__$1 = inst_10952;
var inst_10928 = inst_10938;
var state_10959__$1 = (function (){var statearr_10970 = state_10959;
(statearr_10970[(7)] = inst_10928);

(statearr_10970[(16)] = inst_10951);

(statearr_10970[(9)] = inst_10927__$1);

return statearr_10970;
})();
var statearr_10971_10984 = state_10959__$1;
(statearr_10971_10984[(2)] = null);

(statearr_10971_10984[(1)] = (3));


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
});})(c__8570__auto__,map__10922,map__10922__$1,wait,commands,read,score,game_over_QMARK_,start_BANG_,restart_BANG_,controls))
;
return ((function (switch__8503__auto__,c__8570__auto__,map__10922,map__10922__$1,wait,commands,read,score,game_over_QMARK_,start_BANG_,restart_BANG_,controls){
return (function() {
var neat$interaction$interact_$_state_machine__8504__auto__ = null;
var neat$interaction$interact_$_state_machine__8504__auto____0 = (function (){
var statearr_10975 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_10975[(0)] = neat$interaction$interact_$_state_machine__8504__auto__);

(statearr_10975[(1)] = (1));

return statearr_10975;
});
var neat$interaction$interact_$_state_machine__8504__auto____1 = (function (state_10959){
while(true){
var ret_value__8505__auto__ = (function (){try{while(true){
var result__8506__auto__ = switch__8503__auto__(state_10959);
if(cljs.core.keyword_identical_QMARK_(result__8506__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__8506__auto__;
}
break;
}
}catch (e10976){if((e10976 instanceof Object)){
var ex__8507__auto__ = e10976;
var statearr_10977_10985 = state_10959;
(statearr_10977_10985[(5)] = ex__8507__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_10959);

return cljs.core.cst$kw$recur;
} else {
throw e10976;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__8505__auto__,cljs.core.cst$kw$recur)){
var G__10986 = state_10959;
state_10959 = G__10986;
continue;
} else {
return ret_value__8505__auto__;
}
break;
}
});
neat$interaction$interact_$_state_machine__8504__auto__ = function(state_10959){
switch(arguments.length){
case 0:
return neat$interaction$interact_$_state_machine__8504__auto____0.call(this);
case 1:
return neat$interaction$interact_$_state_machine__8504__auto____1.call(this,state_10959);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
neat$interaction$interact_$_state_machine__8504__auto__.cljs$core$IFn$_invoke$arity$0 = neat$interaction$interact_$_state_machine__8504__auto____0;
neat$interaction$interact_$_state_machine__8504__auto__.cljs$core$IFn$_invoke$arity$1 = neat$interaction$interact_$_state_machine__8504__auto____1;
return neat$interaction$interact_$_state_machine__8504__auto__;
})()
;})(switch__8503__auto__,c__8570__auto__,map__10922,map__10922__$1,wait,commands,read,score,game_over_QMARK_,start_BANG_,restart_BANG_,controls))
})();
var state__8572__auto__ = (function (){var statearr_10978 = (f__8571__auto__.cljs$core$IFn$_invoke$arity$0 ? f__8571__auto__.cljs$core$IFn$_invoke$arity$0() : f__8571__auto__.call(null));
(statearr_10978[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8570__auto__);

return statearr_10978;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__8572__auto__);
});})(c__8570__auto__,map__10922,map__10922__$1,wait,commands,read,score,game_over_QMARK_,start_BANG_,restart_BANG_,controls))
);

return c__8570__auto__;
});
;})(map__10922,map__10922__$1,wait,commands,read,score,game_over_QMARK_,start_BANG_,restart_BANG_,controls))
});
neat.interaction.commands = (function neat$interaction$commands(outputs,controls){
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,cljs.core.map.cljs$core$IFn$_invoke$arity$3((function (p1__10987_SHARP_,p2__10988_SHARP_){
if(cljs.core.truth_(p1__10987_SHARP_)){
return p2__10988_SHARP_;
} else {
return null;
}
}),outputs,controls));
});
neat.interaction.debug_commands = (function neat$interaction$debug_commands(o,c){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([o], 0));

return neat.interaction.commands(o,c);
});
