// Compiled by ClojureScript 1.7.122 {:static-fns true, :optimize-constants true}
goog.provide('neat.floppy');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('neat.interaction');
goog.require('neat.runner');
neat.floppy.settings = new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$stale_DASH_species,(15),cljs.core.cst$kw$population,(50),cljs.core.cst$kw$inputs,(301),cljs.core.cst$kw$outputs,(1),cljs.core.cst$kw$max_DASH_nodes,(600),cljs.core.cst$kw$cross_DASH_over,0.5], null);
neat.floppy.locate = (function neat$floppy$locate(pipe){
var pipe__$1 = (pipe[(0)]);
var left = pipe__$1.offsetLeft;
var top = (function (){var G__23115 = (pipe__$1.children[(0)]).style.height.slice((0),(-2));
return window.parseInt(G__23115);
})();
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [left,top], null);
});
neat.floppy.block = (21);
neat.floppy.width = window.pipewidth;
neat.floppy.total_width = (15);
neat.floppy.height = window.pipeheight;
neat.floppy.total_height = (20);
neat.floppy.see = (function neat$floppy$see(left,top,width,height,repr){
var top_SHARP_ = (function (){var G__23120 = (top / neat.floppy.block);
return Math.floor(G__23120);
})();
var height_SHARP_ = (function (){var G__23121 = (height / neat.floppy.block);
return Math.floor(G__23121);
})();
var bot_SHARP_ = (neat.floppy.total_height - (height_SHARP_ + top_SHARP_));
var left_SHARP_ = (function (){var G__23122 = (left / neat.floppy.block);
return Math.floor(G__23122);
})();
var width_SHARP_ = (function (){var G__23123 = (width / neat.floppy.block);
return Math.floor(G__23123);
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
var left_SHARP_ = (function (){var G__23126 = (left / neat.floppy.block);
return Math.floor(G__23126);
})();
var top = floppy.offsetTop;
var top_SHARP_ = (function (){var G__23127 = (top / neat.floppy.block);
return Math.round(G__23127);
})();
var location = ((top_SHARP_ * neat.floppy.total_width) + left_SHARP_);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.vec(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((neat.floppy.total_height * neat.floppy.total_width),(0))),location,(1));
});
neat.floppy.floor = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(((neat.floppy.total_height - (1)) * neat.floppy.total_width),(0)),cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(neat.floppy.total_width,(-1)));
neat.floppy.complex = (function neat$floppy$complex(x,y){
if(cljs.core.empty_QMARK_(y)){
return x;
} else {
return cljs.core.map.cljs$core$IFn$_invoke$arity$3((function (p1__23128_SHARP_,p2__23129_SHARP_){
if((p1__23128_SHARP_ === (0))){
return p2__23129_SHARP_;
} else {
return p1__23128_SHARP_;
}
}),x,y);
}
});
neat.floppy.read = (function neat$floppy$read(){
var pipes = window.pipes;
var locations = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(pipes.map(neat.floppy.locate));
var floppy = neat.floppy.see_floppy();
return neat.floppy.complex(neat.floppy.floor,cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(neat.floppy.complex,floppy,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (pipes,locations,floppy){
return (function (p__23132){
var vec__23133 = p__23132;
var left = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23133,(0),null);
var top = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23133,(1),null);
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
return (function (state_23154){
var state_val_23155 = (state_23154[(1)]);
if((state_val_23155 === (1))){
var inst_23149 = cljs.core.async.timeout((2000));
var state_23154__$1 = state_23154;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_23154__$1,(2),inst_23149);
} else {
if((state_val_23155 === (2))){
var inst_23151 = (state_23154[(2)]);
var inst_23152 = neat.floppy.screen_click();
var state_23154__$1 = (function (){var statearr_23156 = state_23154;
(statearr_23156[(7)] = inst_23151);

return statearr_23156;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_23154__$1,inst_23152);
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
var statearr_23160 = [null,null,null,null,null,null,null,null];
(statearr_23160[(0)] = neat$floppy$start_BANG__$_state_machine__8504__auto__);

(statearr_23160[(1)] = (1));

return statearr_23160;
});
var neat$floppy$start_BANG__$_state_machine__8504__auto____1 = (function (state_23154){
while(true){
var ret_value__8505__auto__ = (function (){try{while(true){
var result__8506__auto__ = switch__8503__auto__(state_23154);
if(cljs.core.keyword_identical_QMARK_(result__8506__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__8506__auto__;
}
break;
}
}catch (e23161){if((e23161 instanceof Object)){
var ex__8507__auto__ = e23161;
var statearr_23162_23164 = state_23154;
(statearr_23162_23164[(5)] = ex__8507__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_23154);

return cljs.core.cst$kw$recur;
} else {
throw e23161;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__8505__auto__,cljs.core.cst$kw$recur)){
var G__23165 = state_23154;
state_23154 = G__23165;
continue;
} else {
return ret_value__8505__auto__;
}
break;
}
});
neat$floppy$start_BANG__$_state_machine__8504__auto__ = function(state_23154){
switch(arguments.length){
case 0:
return neat$floppy$start_BANG__$_state_machine__8504__auto____0.call(this);
case 1:
return neat$floppy$start_BANG__$_state_machine__8504__auto____1.call(this,state_23154);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
neat$floppy$start_BANG__$_state_machine__8504__auto__.cljs$core$IFn$_invoke$arity$0 = neat$floppy$start_BANG__$_state_machine__8504__auto____0;
neat$floppy$start_BANG__$_state_machine__8504__auto__.cljs$core$IFn$_invoke$arity$1 = neat$floppy$start_BANG__$_state_machine__8504__auto____1;
return neat$floppy$start_BANG__$_state_machine__8504__auto__;
})()
;})(switch__8503__auto__,c__8570__auto__))
})();
var state__8572__auto__ = (function (){var statearr_23163 = (f__8571__auto__.cljs$core$IFn$_invoke$arity$0 ? f__8571__auto__.cljs$core$IFn$_invoke$arity$0() : f__8571__auto__.call(null));
(statearr_23163[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8570__auto__);

return statearr_23163;
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
return (function (state_23188){
var state_val_23189 = (state_23188[(1)]);
if((state_val_23189 === (1))){
var inst_23182 = cljs.core.async.timeout((3000));
var state_23188__$1 = state_23188;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_23188__$1,(2),inst_23182);
} else {
if((state_val_23189 === (2))){
var inst_23184 = (state_23188[(2)]);
var inst_23185 = document.getElementById("replay");
var inst_23186 = inst_23185.click();
var state_23188__$1 = (function (){var statearr_23190 = state_23188;
(statearr_23190[(7)] = inst_23184);

return statearr_23190;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_23188__$1,inst_23186);
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
var statearr_23194 = [null,null,null,null,null,null,null,null];
(statearr_23194[(0)] = neat$floppy$restart_BANG__$_state_machine__8504__auto__);

(statearr_23194[(1)] = (1));

return statearr_23194;
});
var neat$floppy$restart_BANG__$_state_machine__8504__auto____1 = (function (state_23188){
while(true){
var ret_value__8505__auto__ = (function (){try{while(true){
var result__8506__auto__ = switch__8503__auto__(state_23188);
if(cljs.core.keyword_identical_QMARK_(result__8506__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__8506__auto__;
}
break;
}
}catch (e23195){if((e23195 instanceof Object)){
var ex__8507__auto__ = e23195;
var statearr_23196_23198 = state_23188;
(statearr_23196_23198[(5)] = ex__8507__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_23188);

return cljs.core.cst$kw$recur;
} else {
throw e23195;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__8505__auto__,cljs.core.cst$kw$recur)){
var G__23199 = state_23188;
state_23188 = G__23199;
continue;
} else {
return ret_value__8505__auto__;
}
break;
}
});
neat$floppy$restart_BANG__$_state_machine__8504__auto__ = function(state_23188){
switch(arguments.length){
case 0:
return neat$floppy$restart_BANG__$_state_machine__8504__auto____0.call(this);
case 1:
return neat$floppy$restart_BANG__$_state_machine__8504__auto____1.call(this,state_23188);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
neat$floppy$restart_BANG__$_state_machine__8504__auto__.cljs$core$IFn$_invoke$arity$0 = neat$floppy$restart_BANG__$_state_machine__8504__auto____0;
neat$floppy$restart_BANG__$_state_machine__8504__auto__.cljs$core$IFn$_invoke$arity$1 = neat$floppy$restart_BANG__$_state_machine__8504__auto____1;
return neat$floppy$restart_BANG__$_state_machine__8504__auto__;
})()
;})(switch__8503__auto__,c__8570__auto__))
})();
var state__8572__auto__ = (function (){var statearr_23197 = (f__8571__auto__.cljs$core$IFn$_invoke$arity$0 ? f__8571__auto__.cljs$core$IFn$_invoke$arity$0() : f__8571__auto__.call(null));
(statearr_23197[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8570__auto__);

return statearr_23197;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__8572__auto__);
});})(c__8570__auto__))
);

return c__8570__auto__;
});
neat.floppy.interactions = new cljs.core.PersistentArrayMap(null, 8, [cljs.core.cst$kw$read,neat.floppy.read,cljs.core.cst$kw$score,cljs.core.inc,cljs.core.cst$kw$game_DASH_over_QMARK_,(function (){
return cljs.core.identity(dead);
}),cljs.core.cst$kw$start_BANG_,neat.floppy.start_BANG_,cljs.core.cst$kw$restart_BANG_,neat.floppy.restart_BANG_,cljs.core.cst$kw$controls,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [neat.floppy.screen_click], null),cljs.core.cst$kw$commands,neat.interaction.commands,cljs.core.cst$kw$wait,(200)], null);
