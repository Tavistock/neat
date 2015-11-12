// Compiled by ClojureScript 1.7.122 {:static-fns true, :optimize-constants true}
goog.provide('neat.interaction');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('neat.network');
goog.require('neat.state');
neat.interaction.interact_map = new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$read,null,cljs.core.cst$kw$score,null,cljs.core.cst$kw$game_DASH_over_QMARK_,null,cljs.core.cst$kw$start_BANG_,null,cljs.core.cst$kw$restart_BANG_,null,cljs.core.cst$kw$controls,null,cljs.core.cst$kw$commands,null], null);
neat.interaction.interact = (function neat$interaction$interact(interaction){
var map__10918 = interaction;
var map__10918__$1 = ((((!((map__10918 == null)))?((((map__10918.cljs$lang$protocol_mask$partition0$ & (64))) || (map__10918.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__10918):map__10918);
var wait = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10918__$1,cljs.core.cst$kw$wait);
var commands = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10918__$1,cljs.core.cst$kw$commands);
var read = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10918__$1,cljs.core.cst$kw$read);
var score = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10918__$1,cljs.core.cst$kw$score);
var game_over_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10918__$1,cljs.core.cst$kw$game_DASH_over_QMARK_);
var start_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10918__$1,cljs.core.cst$kw$start_BANG_);
var restart_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10918__$1,cljs.core.cst$kw$restart_BANG_);
var controls = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10918__$1,cljs.core.cst$kw$controls);
return ((function (map__10918,map__10918__$1,wait,commands,read,score,game_over_QMARK_,start_BANG_,restart_BANG_,controls){
return (function (network){
var c__8570__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__8570__auto__,map__10918,map__10918__$1,wait,commands,read,score,game_over_QMARK_,start_BANG_,restart_BANG_,controls){
return (function (){
var f__8571__auto__ = (function (){var switch__8503__auto__ = ((function (c__8570__auto__,map__10918,map__10918__$1,wait,commands,read,score,game_over_QMARK_,start_BANG_,restart_BANG_,controls){
return (function (state_10951){
var state_val_10952 = (state_10951[(1)]);
if((state_val_10952 === (1))){
var inst_10920 = (start_BANG_.cljs$core$IFn$_invoke$arity$0 ? start_BANG_.cljs$core$IFn$_invoke$arity$0() : start_BANG_.call(null));
var state_10951__$1 = state_10951;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_10951__$1,(2),inst_10920);
} else {
if((state_val_10952 === (2))){
var inst_10922 = (state_10951[(2)]);
var inst_10923 = (0);
var inst_10924 = network;
var state_10951__$1 = (function (){var statearr_10953 = state_10951;
(statearr_10953[(7)] = inst_10924);

(statearr_10953[(8)] = inst_10923);

(statearr_10953[(9)] = inst_10922);

return statearr_10953;
})();
var statearr_10954_10971 = state_10951__$1;
(statearr_10954_10971[(2)] = null);

(statearr_10954_10971[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_10952 === (3))){
var inst_10923 = (state_10951[(8)]);
var inst_10926 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(neat.state.app_state,cljs.core.assoc,cljs.core.cst$kw$fitness,inst_10923);
var inst_10927 = (game_over_QMARK_.cljs$core$IFn$_invoke$arity$0 ? game_over_QMARK_.cljs$core$IFn$_invoke$arity$0() : game_over_QMARK_.call(null));
var state_10951__$1 = (function (){var statearr_10955 = state_10951;
(statearr_10955[(10)] = inst_10926);

return statearr_10955;
})();
if(cljs.core.truth_(inst_10927)){
var statearr_10956_10972 = state_10951__$1;
(statearr_10956_10972[(1)] = (5));

} else {
var statearr_10957_10973 = state_10951__$1;
(statearr_10957_10973[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_10952 === (4))){
var inst_10949 = (state_10951[(2)]);
var state_10951__$1 = state_10951;
return cljs.core.async.impl.ioc_helpers.return_chan(state_10951__$1,inst_10949);
} else {
if((state_val_10952 === (5))){
var inst_10929 = (restart_BANG_.cljs$core$IFn$_invoke$arity$0 ? restart_BANG_.cljs$core$IFn$_invoke$arity$0() : restart_BANG_.call(null));
var state_10951__$1 = state_10951;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_10951__$1,(8),inst_10929);
} else {
if((state_val_10952 === (6))){
var inst_10934 = (state_10951[(11)]);
var inst_10924 = (state_10951[(7)]);
var inst_10923 = (state_10951[(8)]);
var inst_10933 = (read.cljs$core$IFn$_invoke$arity$0 ? read.cljs$core$IFn$_invoke$arity$0() : read.call(null));
var inst_10934__$1 = neat.network.step(inst_10924,inst_10933);
var inst_10935 = neat.network.outputs(inst_10934__$1);
var inst_10936 = (commands.cljs$core$IFn$_invoke$arity$2 ? commands.cljs$core$IFn$_invoke$arity$2(inst_10935,controls) : commands.call(null,inst_10935,controls));
var inst_10937 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(neat.state.app_state,cljs.core.assoc,cljs.core.cst$kw$inputs,inst_10933,cljs.core.array_seq([cljs.core.cst$kw$outputs,inst_10935], 0));
var inst_10938 = (function (){var fitness = inst_10923;
var network__$1 = inst_10924;
var inputs = inst_10933;
var network_STAR_ = inst_10934__$1;
var outputs = inst_10935;
var cmds = inst_10936;
return ((function (fitness,network__$1,inputs,network_STAR_,outputs,cmds,inst_10934,inst_10924,inst_10923,inst_10933,inst_10934__$1,inst_10935,inst_10936,inst_10937,state_val_10952,c__8570__auto__,map__10918,map__10918__$1,wait,commands,read,score,game_over_QMARK_,start_BANG_,restart_BANG_,controls){
return (function (p1__10864_SHARP_){
return (p1__10864_SHARP_.cljs$core$IFn$_invoke$arity$0 ? p1__10864_SHARP_.cljs$core$IFn$_invoke$arity$0() : p1__10864_SHARP_.call(null));
});
;})(fitness,network__$1,inputs,network_STAR_,outputs,cmds,inst_10934,inst_10924,inst_10923,inst_10933,inst_10934__$1,inst_10935,inst_10936,inst_10937,state_val_10952,c__8570__auto__,map__10918,map__10918__$1,wait,commands,read,score,game_over_QMARK_,start_BANG_,restart_BANG_,controls))
})();
var inst_10939 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(inst_10938,inst_10936);
var inst_10940 = cljs.core.dorun.cljs$core$IFn$_invoke$arity$1(inst_10939);
var inst_10941 = cljs.core.async.timeout(wait);
var state_10951__$1 = (function (){var statearr_10958 = state_10951;
(statearr_10958[(12)] = inst_10937);

(statearr_10958[(13)] = inst_10940);

(statearr_10958[(11)] = inst_10934__$1);

return statearr_10958;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_10951__$1,(9),inst_10941);
} else {
if((state_val_10952 === (7))){
var inst_10947 = (state_10951[(2)]);
var state_10951__$1 = state_10951;
var statearr_10959_10974 = state_10951__$1;
(statearr_10959_10974[(2)] = inst_10947);

(statearr_10959_10974[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_10952 === (8))){
var inst_10923 = (state_10951[(8)]);
var inst_10931 = (state_10951[(2)]);
var state_10951__$1 = (function (){var statearr_10960 = state_10951;
(statearr_10960[(14)] = inst_10931);

return statearr_10960;
})();
var statearr_10961_10975 = state_10951__$1;
(statearr_10961_10975[(2)] = inst_10923);

(statearr_10961_10975[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_10952 === (9))){
var inst_10934 = (state_10951[(11)]);
var inst_10923 = (state_10951[(8)]);
var inst_10943 = (state_10951[(2)]);
var inst_10944 = (score.cljs$core$IFn$_invoke$arity$1 ? score.cljs$core$IFn$_invoke$arity$1(inst_10923) : score.call(null,inst_10923));
var inst_10923__$1 = inst_10944;
var inst_10924 = inst_10934;
var state_10951__$1 = (function (){var statearr_10962 = state_10951;
(statearr_10962[(7)] = inst_10924);

(statearr_10962[(15)] = inst_10943);

(statearr_10962[(8)] = inst_10923__$1);

return statearr_10962;
})();
var statearr_10963_10976 = state_10951__$1;
(statearr_10963_10976[(2)] = null);

(statearr_10963_10976[(1)] = (3));


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
});})(c__8570__auto__,map__10918,map__10918__$1,wait,commands,read,score,game_over_QMARK_,start_BANG_,restart_BANG_,controls))
;
return ((function (switch__8503__auto__,c__8570__auto__,map__10918,map__10918__$1,wait,commands,read,score,game_over_QMARK_,start_BANG_,restart_BANG_,controls){
return (function() {
var neat$interaction$interact_$_state_machine__8504__auto__ = null;
var neat$interaction$interact_$_state_machine__8504__auto____0 = (function (){
var statearr_10967 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_10967[(0)] = neat$interaction$interact_$_state_machine__8504__auto__);

(statearr_10967[(1)] = (1));

return statearr_10967;
});
var neat$interaction$interact_$_state_machine__8504__auto____1 = (function (state_10951){
while(true){
var ret_value__8505__auto__ = (function (){try{while(true){
var result__8506__auto__ = switch__8503__auto__(state_10951);
if(cljs.core.keyword_identical_QMARK_(result__8506__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__8506__auto__;
}
break;
}
}catch (e10968){if((e10968 instanceof Object)){
var ex__8507__auto__ = e10968;
var statearr_10969_10977 = state_10951;
(statearr_10969_10977[(5)] = ex__8507__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_10951);

return cljs.core.cst$kw$recur;
} else {
throw e10968;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__8505__auto__,cljs.core.cst$kw$recur)){
var G__10978 = state_10951;
state_10951 = G__10978;
continue;
} else {
return ret_value__8505__auto__;
}
break;
}
});
neat$interaction$interact_$_state_machine__8504__auto__ = function(state_10951){
switch(arguments.length){
case 0:
return neat$interaction$interact_$_state_machine__8504__auto____0.call(this);
case 1:
return neat$interaction$interact_$_state_machine__8504__auto____1.call(this,state_10951);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
neat$interaction$interact_$_state_machine__8504__auto__.cljs$core$IFn$_invoke$arity$0 = neat$interaction$interact_$_state_machine__8504__auto____0;
neat$interaction$interact_$_state_machine__8504__auto__.cljs$core$IFn$_invoke$arity$1 = neat$interaction$interact_$_state_machine__8504__auto____1;
return neat$interaction$interact_$_state_machine__8504__auto__;
})()
;})(switch__8503__auto__,c__8570__auto__,map__10918,map__10918__$1,wait,commands,read,score,game_over_QMARK_,start_BANG_,restart_BANG_,controls))
})();
var state__8572__auto__ = (function (){var statearr_10970 = (f__8571__auto__.cljs$core$IFn$_invoke$arity$0 ? f__8571__auto__.cljs$core$IFn$_invoke$arity$0() : f__8571__auto__.call(null));
(statearr_10970[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8570__auto__);

return statearr_10970;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__8572__auto__);
});})(c__8570__auto__,map__10918,map__10918__$1,wait,commands,read,score,game_over_QMARK_,start_BANG_,restart_BANG_,controls))
);

return c__8570__auto__;
});
;})(map__10918,map__10918__$1,wait,commands,read,score,game_over_QMARK_,start_BANG_,restart_BANG_,controls))
});
neat.interaction.commands = (function neat$interaction$commands(outputs,controls){
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,cljs.core.map.cljs$core$IFn$_invoke$arity$3((function (p1__10979_SHARP_,p2__10980_SHARP_){
if(cljs.core.truth_(p1__10979_SHARP_)){
return p2__10980_SHARP_;
} else {
return null;
}
}),outputs,controls));
});
neat.interaction.debug_commands = (function neat$interaction$debug_commands(o,c){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([o], 0));

return neat.interaction.commands(o,c);
});
