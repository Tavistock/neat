// Compiled by ClojureScript 1.7.122 {:static-fns true, :optimize-constants true}
goog.provide('neat.floppy');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('neat.interaction');
goog.require('neat.runner');
neat.floppy.settings = new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$stale_DASH_species,(15),cljs.core.cst$kw$population,(50),cljs.core.cst$kw$inputs,(301),cljs.core.cst$kw$outputs,(1),cljs.core.cst$kw$max_DASH_nodes,(601),cljs.core.cst$kw$cross_DASH_over,0.5], null);
neat.floppy.locate = (function neat$floppy$locate(pipe){
var pipe__$1 = (pipe[(0)]);
var left = pipe__$1.offsetLeft;
var top = (function (){var G__11386 = (pipe__$1.children[(0)]).style.height.slice((0),(-2));
return window.parseInt(G__11386);
})();
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [left,top], null);
});
neat.floppy.block = (21);
neat.floppy.width = window.pipewidth;
neat.floppy.total_width = (15);
neat.floppy.height = window.pipeheight;
neat.floppy.total_height = (20);
neat.floppy.see = (function neat$floppy$see(left,top,width,height,repr){
var top_SHARP_ = (function (){var G__11391 = (top / neat.floppy.block);
return Math.floor(G__11391);
})();
var height_SHARP_ = (function (){var G__11392 = (height / neat.floppy.block);
return Math.floor(G__11392);
})();
var bot_SHARP_ = (neat.floppy.total_height - (height_SHARP_ + top_SHARP_));
var left_SHARP_ = (function (){var G__11393 = (left / neat.floppy.block);
return Math.floor(G__11393);
})();
var width_SHARP_ = (function (){var G__11394 = (width / neat.floppy.block);
return Math.floor(G__11394);
})();
var right_SHARP_ = (neat.floppy.total_width - (left_SHARP_ + width_SHARP_));
var piped = cljs.core.take.cljs$core$IFn$_invoke$arity$2(neat.floppy.total_width,cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(left_SHARP_,(0)),cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(width_SHARP_,repr),cljs.core.array_seq([cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(right_SHARP_,(0))], 0)));
var unpiped = cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(neat.floppy.total_width,(0));
if((left_SHARP_ > neat.floppy.total_width)){
return cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((neat.floppy.total_height * neat.floppy.total_width),(0));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(top_SHARP_,piped),cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(height_SHARP_,unpiped),cljs.core.array_seq([cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(bot_SHARP_,piped)], 0)));
}
});
neat.floppy.see_pipe = (function neat$floppy$see_pipe(left,top){
return neat.floppy.see(left,top,neat.floppy.width,neat.floppy.height,(-1));
});
neat.floppy.see_floppy = (function neat$floppy$see_floppy(){
var floppy = document.getElementById("player");
var left = floppy.offsetLeft;
var left_SHARP_ = (function (){var G__11397 = (left / neat.floppy.block);
return Math.floor(G__11397);
})();
var top = floppy.offsetTop;
var top_SHARP_ = (function (){var G__11398 = (top / neat.floppy.block);
return Math.round(G__11398);
})();
var location = ((top_SHARP_ * neat.floppy.total_width) + left_SHARP_);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.vec(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((neat.floppy.total_height * neat.floppy.total_width),(0))),location,(1));
});
neat.floppy.floor = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(((neat.floppy.total_height - (1)) * neat.floppy.total_width),(0)),cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(neat.floppy.total_width,(-1)));
neat.floppy.complex = (function neat$floppy$complex(x,y){
if(cljs.core.empty_QMARK_(y)){
return x;
} else {
return cljs.core.map.cljs$core$IFn$_invoke$arity$3((function (p1__11399_SHARP_,p2__11400_SHARP_){
if((p1__11399_SHARP_ === (0))){
return p2__11400_SHARP_;
} else {
return p1__11399_SHARP_;
}
}),x,y);
}
});
neat.floppy.read = (function neat$floppy$read(){
var pipes = window.pipes;
var locations = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(pipes.map(neat.floppy.locate));
var floppy = neat.floppy.see_floppy();
return neat.floppy.complex(neat.floppy.floor,cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(neat.floppy.complex,floppy,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (pipes,locations,floppy){
return (function (p__11403){
var vec__11404 = p__11403;
var left = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11404,(0),null);
var top = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11404,(1),null);
return neat.floppy.see_pipe(left,top);
});})(pipes,locations,floppy))
,locations)));
});
neat.floppy.screen_click = (function neat$floppy$screen_click(){
return screenClick();
});
neat.floppy.start_BANG_ = (function neat$floppy$start_BANG_(){
var c__8570__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__8570__auto__){
return (function (){
var f__8571__auto__ = (function (){var switch__8503__auto__ = ((function (c__8570__auto__){
return (function (state_11425){
var state_val_11426 = (state_11425[(1)]);
if((state_val_11426 === (1))){
var inst_11420 = cljs.core.async.timeout((2000));
var state_11425__$1 = state_11425;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_11425__$1,(2),inst_11420);
} else {
if((state_val_11426 === (2))){
var inst_11422 = (state_11425[(2)]);
var inst_11423 = neat.floppy.screen_click();
var state_11425__$1 = (function (){var statearr_11427 = state_11425;
(statearr_11427[(7)] = inst_11422);

return statearr_11427;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_11425__$1,inst_11423);
} else {
return null;
}
}
});})(c__8570__auto__))
;
return ((function (switch__8503__auto__,c__8570__auto__){
return (function() {
var neat$floppy$start_BANG__$_state_machine__8504__auto__ = null;
var neat$floppy$start_BANG__$_state_machine__8504__auto____0 = (function (){
var statearr_11431 = [null,null,null,null,null,null,null,null];
(statearr_11431[(0)] = neat$floppy$start_BANG__$_state_machine__8504__auto__);

(statearr_11431[(1)] = (1));

return statearr_11431;
});
var neat$floppy$start_BANG__$_state_machine__8504__auto____1 = (function (state_11425){
while(true){
var ret_value__8505__auto__ = (function (){try{while(true){
var result__8506__auto__ = switch__8503__auto__(state_11425);
if(cljs.core.keyword_identical_QMARK_(result__8506__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__8506__auto__;
}
break;
}
}catch (e11432){if((e11432 instanceof Object)){
var ex__8507__auto__ = e11432;
var statearr_11433_11435 = state_11425;
(statearr_11433_11435[(5)] = ex__8507__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_11425);

return cljs.core.cst$kw$recur;
} else {
throw e11432;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__8505__auto__,cljs.core.cst$kw$recur)){
var G__11436 = state_11425;
state_11425 = G__11436;
continue;
} else {
return ret_value__8505__auto__;
}
break;
}
});
neat$floppy$start_BANG__$_state_machine__8504__auto__ = function(state_11425){
switch(arguments.length){
case 0:
return neat$floppy$start_BANG__$_state_machine__8504__auto____0.call(this);
case 1:
return neat$floppy$start_BANG__$_state_machine__8504__auto____1.call(this,state_11425);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
neat$floppy$start_BANG__$_state_machine__8504__auto__.cljs$core$IFn$_invoke$arity$0 = neat$floppy$start_BANG__$_state_machine__8504__auto____0;
neat$floppy$start_BANG__$_state_machine__8504__auto__.cljs$core$IFn$_invoke$arity$1 = neat$floppy$start_BANG__$_state_machine__8504__auto____1;
return neat$floppy$start_BANG__$_state_machine__8504__auto__;
})()
;})(switch__8503__auto__,c__8570__auto__))
})();
var state__8572__auto__ = (function (){var statearr_11434 = (f__8571__auto__.cljs$core$IFn$_invoke$arity$0 ? f__8571__auto__.cljs$core$IFn$_invoke$arity$0() : f__8571__auto__.call(null));
(statearr_11434[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8570__auto__);

return statearr_11434;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__8572__auto__);
});})(c__8570__auto__))
);

return c__8570__auto__;
});
neat.floppy.restart_BANG_ = (function neat$floppy$restart_BANG_(){
var c__8570__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__8570__auto__){
return (function (){
var f__8571__auto__ = (function (){var switch__8503__auto__ = ((function (c__8570__auto__){
return (function (state_11459){
var state_val_11460 = (state_11459[(1)]);
if((state_val_11460 === (1))){
var inst_11453 = cljs.core.async.timeout((3000));
var state_11459__$1 = state_11459;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_11459__$1,(2),inst_11453);
} else {
if((state_val_11460 === (2))){
var inst_11455 = (state_11459[(2)]);
var inst_11456 = document.getElementById("replay");
var inst_11457 = inst_11456.click();
var state_11459__$1 = (function (){var statearr_11461 = state_11459;
(statearr_11461[(7)] = inst_11455);

return statearr_11461;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_11459__$1,inst_11457);
} else {
return null;
}
}
});})(c__8570__auto__))
;
return ((function (switch__8503__auto__,c__8570__auto__){
return (function() {
var neat$floppy$restart_BANG__$_state_machine__8504__auto__ = null;
var neat$floppy$restart_BANG__$_state_machine__8504__auto____0 = (function (){
var statearr_11465 = [null,null,null,null,null,null,null,null];
(statearr_11465[(0)] = neat$floppy$restart_BANG__$_state_machine__8504__auto__);

(statearr_11465[(1)] = (1));

return statearr_11465;
});
var neat$floppy$restart_BANG__$_state_machine__8504__auto____1 = (function (state_11459){
while(true){
var ret_value__8505__auto__ = (function (){try{while(true){
var result__8506__auto__ = switch__8503__auto__(state_11459);
if(cljs.core.keyword_identical_QMARK_(result__8506__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__8506__auto__;
}
break;
}
}catch (e11466){if((e11466 instanceof Object)){
var ex__8507__auto__ = e11466;
var statearr_11467_11469 = state_11459;
(statearr_11467_11469[(5)] = ex__8507__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_11459);

return cljs.core.cst$kw$recur;
} else {
throw e11466;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__8505__auto__,cljs.core.cst$kw$recur)){
var G__11470 = state_11459;
state_11459 = G__11470;
continue;
} else {
return ret_value__8505__auto__;
}
break;
}
});
neat$floppy$restart_BANG__$_state_machine__8504__auto__ = function(state_11459){
switch(arguments.length){
case 0:
return neat$floppy$restart_BANG__$_state_machine__8504__auto____0.call(this);
case 1:
return neat$floppy$restart_BANG__$_state_machine__8504__auto____1.call(this,state_11459);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
neat$floppy$restart_BANG__$_state_machine__8504__auto__.cljs$core$IFn$_invoke$arity$0 = neat$floppy$restart_BANG__$_state_machine__8504__auto____0;
neat$floppy$restart_BANG__$_state_machine__8504__auto__.cljs$core$IFn$_invoke$arity$1 = neat$floppy$restart_BANG__$_state_machine__8504__auto____1;
return neat$floppy$restart_BANG__$_state_machine__8504__auto__;
})()
;})(switch__8503__auto__,c__8570__auto__))
})();
var state__8572__auto__ = (function (){var statearr_11468 = (f__8571__auto__.cljs$core$IFn$_invoke$arity$0 ? f__8571__auto__.cljs$core$IFn$_invoke$arity$0() : f__8571__auto__.call(null));
(statearr_11468[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8570__auto__);

return statearr_11468;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__8572__auto__);
});})(c__8570__auto__))
);

return c__8570__auto__;
});
neat.floppy.interactions = new cljs.core.PersistentArrayMap(null, 8, [cljs.core.cst$kw$read,neat.floppy.read,cljs.core.cst$kw$score,cljs.core.inc,cljs.core.cst$kw$game_DASH_over_QMARK_,(function (){
return cljs.core.identity(dead);
}),cljs.core.cst$kw$start_BANG_,neat.floppy.start_BANG_,cljs.core.cst$kw$restart_BANG_,neat.floppy.restart_BANG_,cljs.core.cst$kw$controls,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [neat.floppy.screen_click], null),cljs.core.cst$kw$commands,neat.interaction.commands,cljs.core.cst$kw$wait,(200)], null);
