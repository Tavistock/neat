// Compiled by ClojureScript 1.7.122 {:static-fns true, :optimize-constants true}
goog.provide('om.core');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('om.dom');
goog.require('goog.dom.dataset');
goog.require('goog.object');
goog.require('goog.ui.IdGenerator');
om.core._STAR_parent_STAR_ = null;
om.core._STAR_instrument_STAR_ = null;
om.core._STAR_descriptor_STAR_ = null;
om.core._STAR_state_STAR_ = null;
om.core._STAR_root_key_STAR_ = null;

/**
 * @interface
 */
om.core.IDisplayName = function(){};

om.core.display_name = (function om$core$display_name(this$){
if((!((this$ == null))) && (!((this$.om$core$IDisplayName$display_name$arity$1 == null)))){
return this$.om$core$IDisplayName$display_name$arity$1(this$);
} else {
var x__5216__auto__ = (((this$ == null))?null:this$);
var m__5217__auto__ = (om.core.display_name[goog.typeOf(x__5216__auto__)]);
if(!((m__5217__auto__ == null))){
return (m__5217__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5217__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5217__auto__.call(null,this$));
} else {
var m__5217__auto____$1 = (om.core.display_name["_"]);
if(!((m__5217__auto____$1 == null))){
return (m__5217__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__5217__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__5217__auto____$1.call(null,this$));
} else {
throw cljs.core.missing_protocol("IDisplayName.display-name",this$);
}
}
}
});


/**
 * @interface
 */
om.core.IInitState = function(){};

om.core.init_state = (function om$core$init_state(this$){
if((!((this$ == null))) && (!((this$.om$core$IInitState$init_state$arity$1 == null)))){
return this$.om$core$IInitState$init_state$arity$1(this$);
} else {
var x__5216__auto__ = (((this$ == null))?null:this$);
var m__5217__auto__ = (om.core.init_state[goog.typeOf(x__5216__auto__)]);
if(!((m__5217__auto__ == null))){
return (m__5217__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5217__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5217__auto__.call(null,this$));
} else {
var m__5217__auto____$1 = (om.core.init_state["_"]);
if(!((m__5217__auto____$1 == null))){
return (m__5217__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__5217__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__5217__auto____$1.call(null,this$));
} else {
throw cljs.core.missing_protocol("IInitState.init-state",this$);
}
}
}
});


/**
 * @interface
 */
om.core.IShouldUpdate = function(){};

om.core.should_update = (function om$core$should_update(this$,next_props,next_state){
if((!((this$ == null))) && (!((this$.om$core$IShouldUpdate$should_update$arity$3 == null)))){
return this$.om$core$IShouldUpdate$should_update$arity$3(this$,next_props,next_state);
} else {
var x__5216__auto__ = (((this$ == null))?null:this$);
var m__5217__auto__ = (om.core.should_update[goog.typeOf(x__5216__auto__)]);
if(!((m__5217__auto__ == null))){
return (m__5217__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5217__auto__.cljs$core$IFn$_invoke$arity$3(this$,next_props,next_state) : m__5217__auto__.call(null,this$,next_props,next_state));
} else {
var m__5217__auto____$1 = (om.core.should_update["_"]);
if(!((m__5217__auto____$1 == null))){
return (m__5217__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__5217__auto____$1.cljs$core$IFn$_invoke$arity$3(this$,next_props,next_state) : m__5217__auto____$1.call(null,this$,next_props,next_state));
} else {
throw cljs.core.missing_protocol("IShouldUpdate.should-update",this$);
}
}
}
});


/**
 * @interface
 */
om.core.IWillMount = function(){};

om.core.will_mount = (function om$core$will_mount(this$){
if((!((this$ == null))) && (!((this$.om$core$IWillMount$will_mount$arity$1 == null)))){
return this$.om$core$IWillMount$will_mount$arity$1(this$);
} else {
var x__5216__auto__ = (((this$ == null))?null:this$);
var m__5217__auto__ = (om.core.will_mount[goog.typeOf(x__5216__auto__)]);
if(!((m__5217__auto__ == null))){
return (m__5217__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5217__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5217__auto__.call(null,this$));
} else {
var m__5217__auto____$1 = (om.core.will_mount["_"]);
if(!((m__5217__auto____$1 == null))){
return (m__5217__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__5217__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__5217__auto____$1.call(null,this$));
} else {
throw cljs.core.missing_protocol("IWillMount.will-mount",this$);
}
}
}
});


/**
 * @interface
 */
om.core.IDidMount = function(){};

om.core.did_mount = (function om$core$did_mount(this$){
if((!((this$ == null))) && (!((this$.om$core$IDidMount$did_mount$arity$1 == null)))){
return this$.om$core$IDidMount$did_mount$arity$1(this$);
} else {
var x__5216__auto__ = (((this$ == null))?null:this$);
var m__5217__auto__ = (om.core.did_mount[goog.typeOf(x__5216__auto__)]);
if(!((m__5217__auto__ == null))){
return (m__5217__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5217__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5217__auto__.call(null,this$));
} else {
var m__5217__auto____$1 = (om.core.did_mount["_"]);
if(!((m__5217__auto____$1 == null))){
return (m__5217__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__5217__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__5217__auto____$1.call(null,this$));
} else {
throw cljs.core.missing_protocol("IDidMount.did-mount",this$);
}
}
}
});


/**
 * @interface
 */
om.core.IWillUnmount = function(){};

om.core.will_unmount = (function om$core$will_unmount(this$){
if((!((this$ == null))) && (!((this$.om$core$IWillUnmount$will_unmount$arity$1 == null)))){
return this$.om$core$IWillUnmount$will_unmount$arity$1(this$);
} else {
var x__5216__auto__ = (((this$ == null))?null:this$);
var m__5217__auto__ = (om.core.will_unmount[goog.typeOf(x__5216__auto__)]);
if(!((m__5217__auto__ == null))){
return (m__5217__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5217__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5217__auto__.call(null,this$));
} else {
var m__5217__auto____$1 = (om.core.will_unmount["_"]);
if(!((m__5217__auto____$1 == null))){
return (m__5217__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__5217__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__5217__auto____$1.call(null,this$));
} else {
throw cljs.core.missing_protocol("IWillUnmount.will-unmount",this$);
}
}
}
});


/**
 * @interface
 */
om.core.IWillUpdate = function(){};

om.core.will_update = (function om$core$will_update(this$,next_props,next_state){
if((!((this$ == null))) && (!((this$.om$core$IWillUpdate$will_update$arity$3 == null)))){
return this$.om$core$IWillUpdate$will_update$arity$3(this$,next_props,next_state);
} else {
var x__5216__auto__ = (((this$ == null))?null:this$);
var m__5217__auto__ = (om.core.will_update[goog.typeOf(x__5216__auto__)]);
if(!((m__5217__auto__ == null))){
return (m__5217__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5217__auto__.cljs$core$IFn$_invoke$arity$3(this$,next_props,next_state) : m__5217__auto__.call(null,this$,next_props,next_state));
} else {
var m__5217__auto____$1 = (om.core.will_update["_"]);
if(!((m__5217__auto____$1 == null))){
return (m__5217__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__5217__auto____$1.cljs$core$IFn$_invoke$arity$3(this$,next_props,next_state) : m__5217__auto____$1.call(null,this$,next_props,next_state));
} else {
throw cljs.core.missing_protocol("IWillUpdate.will-update",this$);
}
}
}
});


/**
 * @interface
 */
om.core.IDidUpdate = function(){};

om.core.did_update = (function om$core$did_update(this$,prev_props,prev_state){
if((!((this$ == null))) && (!((this$.om$core$IDidUpdate$did_update$arity$3 == null)))){
return this$.om$core$IDidUpdate$did_update$arity$3(this$,prev_props,prev_state);
} else {
var x__5216__auto__ = (((this$ == null))?null:this$);
var m__5217__auto__ = (om.core.did_update[goog.typeOf(x__5216__auto__)]);
if(!((m__5217__auto__ == null))){
return (m__5217__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5217__auto__.cljs$core$IFn$_invoke$arity$3(this$,prev_props,prev_state) : m__5217__auto__.call(null,this$,prev_props,prev_state));
} else {
var m__5217__auto____$1 = (om.core.did_update["_"]);
if(!((m__5217__auto____$1 == null))){
return (m__5217__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__5217__auto____$1.cljs$core$IFn$_invoke$arity$3(this$,prev_props,prev_state) : m__5217__auto____$1.call(null,this$,prev_props,prev_state));
} else {
throw cljs.core.missing_protocol("IDidUpdate.did-update",this$);
}
}
}
});


/**
 * @interface
 */
om.core.IWillReceiveProps = function(){};

om.core.will_receive_props = (function om$core$will_receive_props(this$,next_props){
if((!((this$ == null))) && (!((this$.om$core$IWillReceiveProps$will_receive_props$arity$2 == null)))){
return this$.om$core$IWillReceiveProps$will_receive_props$arity$2(this$,next_props);
} else {
var x__5216__auto__ = (((this$ == null))?null:this$);
var m__5217__auto__ = (om.core.will_receive_props[goog.typeOf(x__5216__auto__)]);
if(!((m__5217__auto__ == null))){
return (m__5217__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5217__auto__.cljs$core$IFn$_invoke$arity$2(this$,next_props) : m__5217__auto__.call(null,this$,next_props));
} else {
var m__5217__auto____$1 = (om.core.will_receive_props["_"]);
if(!((m__5217__auto____$1 == null))){
return (m__5217__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__5217__auto____$1.cljs$core$IFn$_invoke$arity$2(this$,next_props) : m__5217__auto____$1.call(null,this$,next_props));
} else {
throw cljs.core.missing_protocol("IWillReceiveProps.will-receive-props",this$);
}
}
}
});


/**
 * @interface
 */
om.core.IRender = function(){};

om.core.render = (function om$core$render(this$){
if((!((this$ == null))) && (!((this$.om$core$IRender$render$arity$1 == null)))){
return this$.om$core$IRender$render$arity$1(this$);
} else {
var x__5216__auto__ = (((this$ == null))?null:this$);
var m__5217__auto__ = (om.core.render[goog.typeOf(x__5216__auto__)]);
if(!((m__5217__auto__ == null))){
return (m__5217__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5217__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5217__auto__.call(null,this$));
} else {
var m__5217__auto____$1 = (om.core.render["_"]);
if(!((m__5217__auto____$1 == null))){
return (m__5217__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__5217__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__5217__auto____$1.call(null,this$));
} else {
throw cljs.core.missing_protocol("IRender.render",this$);
}
}
}
});


/**
 * @interface
 */
om.core.IRenderProps = function(){};

om.core.render_props = (function om$core$render_props(this$,props,state){
if((!((this$ == null))) && (!((this$.om$core$IRenderProps$render_props$arity$3 == null)))){
return this$.om$core$IRenderProps$render_props$arity$3(this$,props,state);
} else {
var x__5216__auto__ = (((this$ == null))?null:this$);
var m__5217__auto__ = (om.core.render_props[goog.typeOf(x__5216__auto__)]);
if(!((m__5217__auto__ == null))){
return (m__5217__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5217__auto__.cljs$core$IFn$_invoke$arity$3(this$,props,state) : m__5217__auto__.call(null,this$,props,state));
} else {
var m__5217__auto____$1 = (om.core.render_props["_"]);
if(!((m__5217__auto____$1 == null))){
return (m__5217__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__5217__auto____$1.cljs$core$IFn$_invoke$arity$3(this$,props,state) : m__5217__auto____$1.call(null,this$,props,state));
} else {
throw cljs.core.missing_protocol("IRenderProps.render-props",this$);
}
}
}
});


/**
 * @interface
 */
om.core.IRenderState = function(){};

om.core.render_state = (function om$core$render_state(this$,state){
if((!((this$ == null))) && (!((this$.om$core$IRenderState$render_state$arity$2 == null)))){
return this$.om$core$IRenderState$render_state$arity$2(this$,state);
} else {
var x__5216__auto__ = (((this$ == null))?null:this$);
var m__5217__auto__ = (om.core.render_state[goog.typeOf(x__5216__auto__)]);
if(!((m__5217__auto__ == null))){
return (m__5217__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5217__auto__.cljs$core$IFn$_invoke$arity$2(this$,state) : m__5217__auto__.call(null,this$,state));
} else {
var m__5217__auto____$1 = (om.core.render_state["_"]);
if(!((m__5217__auto____$1 == null))){
return (m__5217__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__5217__auto____$1.cljs$core$IFn$_invoke$arity$2(this$,state) : m__5217__auto____$1.call(null,this$,state));
} else {
throw cljs.core.missing_protocol("IRenderState.render-state",this$);
}
}
}
});


/**
 * @interface
 */
om.core.ICheckState = function(){};


/**
 * @interface
 */
om.core.IOmSwap = function(){};

om.core._om_swap_BANG_ = (function om$core$_om_swap_BANG_(this$,cursor,korks,f,tag){
if((!((this$ == null))) && (!((this$.om$core$IOmSwap$_om_swap_BANG_$arity$5 == null)))){
return this$.om$core$IOmSwap$_om_swap_BANG_$arity$5(this$,cursor,korks,f,tag);
} else {
var x__5216__auto__ = (((this$ == null))?null:this$);
var m__5217__auto__ = (om.core._om_swap_BANG_[goog.typeOf(x__5216__auto__)]);
if(!((m__5217__auto__ == null))){
return (m__5217__auto__.cljs$core$IFn$_invoke$arity$5 ? m__5217__auto__.cljs$core$IFn$_invoke$arity$5(this$,cursor,korks,f,tag) : m__5217__auto__.call(null,this$,cursor,korks,f,tag));
} else {
var m__5217__auto____$1 = (om.core._om_swap_BANG_["_"]);
if(!((m__5217__auto____$1 == null))){
return (m__5217__auto____$1.cljs$core$IFn$_invoke$arity$5 ? m__5217__auto____$1.cljs$core$IFn$_invoke$arity$5(this$,cursor,korks,f,tag) : m__5217__auto____$1.call(null,this$,cursor,korks,f,tag));
} else {
throw cljs.core.missing_protocol("IOmSwap.-om-swap!",this$);
}
}
}
});


/**
 * @interface
 */
om.core.IGetState = function(){};

om.core._get_state = (function om$core$_get_state(var_args){
var args13847 = [];
var len__5619__auto___13850 = arguments.length;
var i__5620__auto___13851 = (0);
while(true){
if((i__5620__auto___13851 < len__5619__auto___13850)){
args13847.push((arguments[i__5620__auto___13851]));

var G__13852 = (i__5620__auto___13851 + (1));
i__5620__auto___13851 = G__13852;
continue;
} else {
}
break;
}

var G__13849 = args13847.length;
switch (G__13849) {
case 1:
return om.core._get_state.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om.core._get_state.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13847.length)].join('')));

}
});

om.core._get_state.cljs$core$IFn$_invoke$arity$1 = (function (this$){
if((!((this$ == null))) && (!((this$.om$core$IGetState$_get_state$arity$1 == null)))){
return this$.om$core$IGetState$_get_state$arity$1(this$);
} else {
var x__5216__auto__ = (((this$ == null))?null:this$);
var m__5217__auto__ = (om.core._get_state[goog.typeOf(x__5216__auto__)]);
if(!((m__5217__auto__ == null))){
return (m__5217__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5217__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5217__auto__.call(null,this$));
} else {
var m__5217__auto____$1 = (om.core._get_state["_"]);
if(!((m__5217__auto____$1 == null))){
return (m__5217__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__5217__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__5217__auto____$1.call(null,this$));
} else {
throw cljs.core.missing_protocol("IGetState.-get-state",this$);
}
}
}
});

om.core._get_state.cljs$core$IFn$_invoke$arity$2 = (function (this$,ks){
if((!((this$ == null))) && (!((this$.om$core$IGetState$_get_state$arity$2 == null)))){
return this$.om$core$IGetState$_get_state$arity$2(this$,ks);
} else {
var x__5216__auto__ = (((this$ == null))?null:this$);
var m__5217__auto__ = (om.core._get_state[goog.typeOf(x__5216__auto__)]);
if(!((m__5217__auto__ == null))){
return (m__5217__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5217__auto__.cljs$core$IFn$_invoke$arity$2(this$,ks) : m__5217__auto__.call(null,this$,ks));
} else {
var m__5217__auto____$1 = (om.core._get_state["_"]);
if(!((m__5217__auto____$1 == null))){
return (m__5217__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__5217__auto____$1.cljs$core$IFn$_invoke$arity$2(this$,ks) : m__5217__auto____$1.call(null,this$,ks));
} else {
throw cljs.core.missing_protocol("IGetState.-get-state",this$);
}
}
}
});

om.core._get_state.cljs$lang$maxFixedArity = 2;


/**
 * @interface
 */
om.core.IGetRenderState = function(){};

om.core._get_render_state = (function om$core$_get_render_state(var_args){
var args13854 = [];
var len__5619__auto___13857 = arguments.length;
var i__5620__auto___13858 = (0);
while(true){
if((i__5620__auto___13858 < len__5619__auto___13857)){
args13854.push((arguments[i__5620__auto___13858]));

var G__13859 = (i__5620__auto___13858 + (1));
i__5620__auto___13858 = G__13859;
continue;
} else {
}
break;
}

var G__13856 = args13854.length;
switch (G__13856) {
case 1:
return om.core._get_render_state.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om.core._get_render_state.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13854.length)].join('')));

}
});

om.core._get_render_state.cljs$core$IFn$_invoke$arity$1 = (function (this$){
if((!((this$ == null))) && (!((this$.om$core$IGetRenderState$_get_render_state$arity$1 == null)))){
return this$.om$core$IGetRenderState$_get_render_state$arity$1(this$);
} else {
var x__5216__auto__ = (((this$ == null))?null:this$);
var m__5217__auto__ = (om.core._get_render_state[goog.typeOf(x__5216__auto__)]);
if(!((m__5217__auto__ == null))){
return (m__5217__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5217__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5217__auto__.call(null,this$));
} else {
var m__5217__auto____$1 = (om.core._get_render_state["_"]);
if(!((m__5217__auto____$1 == null))){
return (m__5217__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__5217__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__5217__auto____$1.call(null,this$));
} else {
throw cljs.core.missing_protocol("IGetRenderState.-get-render-state",this$);
}
}
}
});

om.core._get_render_state.cljs$core$IFn$_invoke$arity$2 = (function (this$,ks){
if((!((this$ == null))) && (!((this$.om$core$IGetRenderState$_get_render_state$arity$2 == null)))){
return this$.om$core$IGetRenderState$_get_render_state$arity$2(this$,ks);
} else {
var x__5216__auto__ = (((this$ == null))?null:this$);
var m__5217__auto__ = (om.core._get_render_state[goog.typeOf(x__5216__auto__)]);
if(!((m__5217__auto__ == null))){
return (m__5217__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5217__auto__.cljs$core$IFn$_invoke$arity$2(this$,ks) : m__5217__auto__.call(null,this$,ks));
} else {
var m__5217__auto____$1 = (om.core._get_render_state["_"]);
if(!((m__5217__auto____$1 == null))){
return (m__5217__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__5217__auto____$1.cljs$core$IFn$_invoke$arity$2(this$,ks) : m__5217__auto____$1.call(null,this$,ks));
} else {
throw cljs.core.missing_protocol("IGetRenderState.-get-render-state",this$);
}
}
}
});

om.core._get_render_state.cljs$lang$maxFixedArity = 2;


/**
 * @interface
 */
om.core.ISetState = function(){};

om.core._set_state_BANG_ = (function om$core$_set_state_BANG_(var_args){
var args13861 = [];
var len__5619__auto___13864 = arguments.length;
var i__5620__auto___13865 = (0);
while(true){
if((i__5620__auto___13865 < len__5619__auto___13864)){
args13861.push((arguments[i__5620__auto___13865]));

var G__13866 = (i__5620__auto___13865 + (1));
i__5620__auto___13865 = G__13866;
continue;
} else {
}
break;
}

var G__13863 = args13861.length;
switch (G__13863) {
case 3:
return om.core._set_state_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return om.core._set_state_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13861.length)].join('')));

}
});

om.core._set_state_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (this$,val,render){
if((!((this$ == null))) && (!((this$.om$core$ISetState$_set_state_BANG_$arity$3 == null)))){
return this$.om$core$ISetState$_set_state_BANG_$arity$3(this$,val,render);
} else {
var x__5216__auto__ = (((this$ == null))?null:this$);
var m__5217__auto__ = (om.core._set_state_BANG_[goog.typeOf(x__5216__auto__)]);
if(!((m__5217__auto__ == null))){
return (m__5217__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5217__auto__.cljs$core$IFn$_invoke$arity$3(this$,val,render) : m__5217__auto__.call(null,this$,val,render));
} else {
var m__5217__auto____$1 = (om.core._set_state_BANG_["_"]);
if(!((m__5217__auto____$1 == null))){
return (m__5217__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__5217__auto____$1.cljs$core$IFn$_invoke$arity$3(this$,val,render) : m__5217__auto____$1.call(null,this$,val,render));
} else {
throw cljs.core.missing_protocol("ISetState.-set-state!",this$);
}
}
}
});

om.core._set_state_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (this$,ks,val,render){
if((!((this$ == null))) && (!((this$.om$core$ISetState$_set_state_BANG_$arity$4 == null)))){
return this$.om$core$ISetState$_set_state_BANG_$arity$4(this$,ks,val,render);
} else {
var x__5216__auto__ = (((this$ == null))?null:this$);
var m__5217__auto__ = (om.core._set_state_BANG_[goog.typeOf(x__5216__auto__)]);
if(!((m__5217__auto__ == null))){
return (m__5217__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5217__auto__.cljs$core$IFn$_invoke$arity$4(this$,ks,val,render) : m__5217__auto__.call(null,this$,ks,val,render));
} else {
var m__5217__auto____$1 = (om.core._set_state_BANG_["_"]);
if(!((m__5217__auto____$1 == null))){
return (m__5217__auto____$1.cljs$core$IFn$_invoke$arity$4 ? m__5217__auto____$1.cljs$core$IFn$_invoke$arity$4(this$,ks,val,render) : m__5217__auto____$1.call(null,this$,ks,val,render));
} else {
throw cljs.core.missing_protocol("ISetState.-set-state!",this$);
}
}
}
});

om.core._set_state_BANG_.cljs$lang$maxFixedArity = 4;


/**
 * @interface
 */
om.core.IRenderQueue = function(){};

om.core._get_queue = (function om$core$_get_queue(this$){
if((!((this$ == null))) && (!((this$.om$core$IRenderQueue$_get_queue$arity$1 == null)))){
return this$.om$core$IRenderQueue$_get_queue$arity$1(this$);
} else {
var x__5216__auto__ = (((this$ == null))?null:this$);
var m__5217__auto__ = (om.core._get_queue[goog.typeOf(x__5216__auto__)]);
if(!((m__5217__auto__ == null))){
return (m__5217__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5217__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5217__auto__.call(null,this$));
} else {
var m__5217__auto____$1 = (om.core._get_queue["_"]);
if(!((m__5217__auto____$1 == null))){
return (m__5217__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__5217__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__5217__auto____$1.call(null,this$));
} else {
throw cljs.core.missing_protocol("IRenderQueue.-get-queue",this$);
}
}
}
});

om.core._queue_render_BANG_ = (function om$core$_queue_render_BANG_(this$,c){
if((!((this$ == null))) && (!((this$.om$core$IRenderQueue$_queue_render_BANG_$arity$2 == null)))){
return this$.om$core$IRenderQueue$_queue_render_BANG_$arity$2(this$,c);
} else {
var x__5216__auto__ = (((this$ == null))?null:this$);
var m__5217__auto__ = (om.core._queue_render_BANG_[goog.typeOf(x__5216__auto__)]);
if(!((m__5217__auto__ == null))){
return (m__5217__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5217__auto__.cljs$core$IFn$_invoke$arity$2(this$,c) : m__5217__auto__.call(null,this$,c));
} else {
var m__5217__auto____$1 = (om.core._queue_render_BANG_["_"]);
if(!((m__5217__auto____$1 == null))){
return (m__5217__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__5217__auto____$1.cljs$core$IFn$_invoke$arity$2(this$,c) : m__5217__auto____$1.call(null,this$,c));
} else {
throw cljs.core.missing_protocol("IRenderQueue.-queue-render!",this$);
}
}
}
});

om.core._empty_queue_BANG_ = (function om$core$_empty_queue_BANG_(this$){
if((!((this$ == null))) && (!((this$.om$core$IRenderQueue$_empty_queue_BANG_$arity$1 == null)))){
return this$.om$core$IRenderQueue$_empty_queue_BANG_$arity$1(this$);
} else {
var x__5216__auto__ = (((this$ == null))?null:this$);
var m__5217__auto__ = (om.core._empty_queue_BANG_[goog.typeOf(x__5216__auto__)]);
if(!((m__5217__auto__ == null))){
return (m__5217__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5217__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5217__auto__.call(null,this$));
} else {
var m__5217__auto____$1 = (om.core._empty_queue_BANG_["_"]);
if(!((m__5217__auto____$1 == null))){
return (m__5217__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__5217__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__5217__auto____$1.call(null,this$));
} else {
throw cljs.core.missing_protocol("IRenderQueue.-empty-queue!",this$);
}
}
}
});


/**
 * @interface
 */
om.core.IValue = function(){};

om.core._value = (function om$core$_value(x){
if((!((x == null))) && (!((x.om$core$IValue$_value$arity$1 == null)))){
return x.om$core$IValue$_value$arity$1(x);
} else {
var x__5216__auto__ = (((x == null))?null:x);
var m__5217__auto__ = (om.core._value[goog.typeOf(x__5216__auto__)]);
if(!((m__5217__auto__ == null))){
return (m__5217__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5217__auto__.cljs$core$IFn$_invoke$arity$1(x) : m__5217__auto__.call(null,x));
} else {
var m__5217__auto____$1 = (om.core._value["_"]);
if(!((m__5217__auto____$1 == null))){
return (m__5217__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__5217__auto____$1.cljs$core$IFn$_invoke$arity$1(x) : m__5217__auto____$1.call(null,x));
} else {
throw cljs.core.missing_protocol("IValue.-value",x);
}
}
}
});

(om.core.IValue["_"] = true);

(om.core._value["_"] = (function (x){
return x;
}));

/**
 * @interface
 */
om.core.ICursor = function(){};

om.core._path = (function om$core$_path(cursor){
if((!((cursor == null))) && (!((cursor.om$core$ICursor$_path$arity$1 == null)))){
return cursor.om$core$ICursor$_path$arity$1(cursor);
} else {
var x__5216__auto__ = (((cursor == null))?null:cursor);
var m__5217__auto__ = (om.core._path[goog.typeOf(x__5216__auto__)]);
if(!((m__5217__auto__ == null))){
return (m__5217__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5217__auto__.cljs$core$IFn$_invoke$arity$1(cursor) : m__5217__auto__.call(null,cursor));
} else {
var m__5217__auto____$1 = (om.core._path["_"]);
if(!((m__5217__auto____$1 == null))){
return (m__5217__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__5217__auto____$1.cljs$core$IFn$_invoke$arity$1(cursor) : m__5217__auto____$1.call(null,cursor));
} else {
throw cljs.core.missing_protocol("ICursor.-path",cursor);
}
}
}
});

om.core._state = (function om$core$_state(cursor){
if((!((cursor == null))) && (!((cursor.om$core$ICursor$_state$arity$1 == null)))){
return cursor.om$core$ICursor$_state$arity$1(cursor);
} else {
var x__5216__auto__ = (((cursor == null))?null:cursor);
var m__5217__auto__ = (om.core._state[goog.typeOf(x__5216__auto__)]);
if(!((m__5217__auto__ == null))){
return (m__5217__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5217__auto__.cljs$core$IFn$_invoke$arity$1(cursor) : m__5217__auto__.call(null,cursor));
} else {
var m__5217__auto____$1 = (om.core._state["_"]);
if(!((m__5217__auto____$1 == null))){
return (m__5217__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__5217__auto____$1.cljs$core$IFn$_invoke$arity$1(cursor) : m__5217__auto____$1.call(null,cursor));
} else {
throw cljs.core.missing_protocol("ICursor.-state",cursor);
}
}
}
});


/**
 * @interface
 */
om.core.IToCursor = function(){};

om.core._to_cursor = (function om$core$_to_cursor(var_args){
var args13868 = [];
var len__5619__auto___13871 = arguments.length;
var i__5620__auto___13872 = (0);
while(true){
if((i__5620__auto___13872 < len__5619__auto___13871)){
args13868.push((arguments[i__5620__auto___13872]));

var G__13873 = (i__5620__auto___13872 + (1));
i__5620__auto___13872 = G__13873;
continue;
} else {
}
break;
}

var G__13870 = args13868.length;
switch (G__13870) {
case 2:
return om.core._to_cursor.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.core._to_cursor.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13868.length)].join('')));

}
});

om.core._to_cursor.cljs$core$IFn$_invoke$arity$2 = (function (value,state){
if((!((value == null))) && (!((value.om$core$IToCursor$_to_cursor$arity$2 == null)))){
return value.om$core$IToCursor$_to_cursor$arity$2(value,state);
} else {
var x__5216__auto__ = (((value == null))?null:value);
var m__5217__auto__ = (om.core._to_cursor[goog.typeOf(x__5216__auto__)]);
if(!((m__5217__auto__ == null))){
return (m__5217__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5217__auto__.cljs$core$IFn$_invoke$arity$2(value,state) : m__5217__auto__.call(null,value,state));
} else {
var m__5217__auto____$1 = (om.core._to_cursor["_"]);
if(!((m__5217__auto____$1 == null))){
return (m__5217__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__5217__auto____$1.cljs$core$IFn$_invoke$arity$2(value,state) : m__5217__auto____$1.call(null,value,state));
} else {
throw cljs.core.missing_protocol("IToCursor.-to-cursor",value);
}
}
}
});

om.core._to_cursor.cljs$core$IFn$_invoke$arity$3 = (function (value,state,path){
if((!((value == null))) && (!((value.om$core$IToCursor$_to_cursor$arity$3 == null)))){
return value.om$core$IToCursor$_to_cursor$arity$3(value,state,path);
} else {
var x__5216__auto__ = (((value == null))?null:value);
var m__5217__auto__ = (om.core._to_cursor[goog.typeOf(x__5216__auto__)]);
if(!((m__5217__auto__ == null))){
return (m__5217__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5217__auto__.cljs$core$IFn$_invoke$arity$3(value,state,path) : m__5217__auto__.call(null,value,state,path));
} else {
var m__5217__auto____$1 = (om.core._to_cursor["_"]);
if(!((m__5217__auto____$1 == null))){
return (m__5217__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__5217__auto____$1.cljs$core$IFn$_invoke$arity$3(value,state,path) : m__5217__auto____$1.call(null,value,state,path));
} else {
throw cljs.core.missing_protocol("IToCursor.-to-cursor",value);
}
}
}
});

om.core._to_cursor.cljs$lang$maxFixedArity = 3;


/**
 * @interface
 */
om.core.ICursorDerive = function(){};

om.core._derive = (function om$core$_derive(cursor,derived,state,path){
if((!((cursor == null))) && (!((cursor.om$core$ICursorDerive$_derive$arity$4 == null)))){
return cursor.om$core$ICursorDerive$_derive$arity$4(cursor,derived,state,path);
} else {
var x__5216__auto__ = (((cursor == null))?null:cursor);
var m__5217__auto__ = (om.core._derive[goog.typeOf(x__5216__auto__)]);
if(!((m__5217__auto__ == null))){
return (m__5217__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5217__auto__.cljs$core$IFn$_invoke$arity$4(cursor,derived,state,path) : m__5217__auto__.call(null,cursor,derived,state,path));
} else {
var m__5217__auto____$1 = (om.core._derive["_"]);
if(!((m__5217__auto____$1 == null))){
return (m__5217__auto____$1.cljs$core$IFn$_invoke$arity$4 ? m__5217__auto____$1.cljs$core$IFn$_invoke$arity$4(cursor,derived,state,path) : m__5217__auto____$1.call(null,cursor,derived,state,path));
} else {
throw cljs.core.missing_protocol("ICursorDerive.-derive",cursor);
}
}
}
});

om.core.to_cursor;
(om.core.ICursorDerive["_"] = true);

(om.core._derive["_"] = (function (this$,derived,state,path){
return (om.core.to_cursor.cljs$core$IFn$_invoke$arity$3 ? om.core.to_cursor.cljs$core$IFn$_invoke$arity$3(derived,state,path) : om.core.to_cursor.call(null,derived,state,path));
}));
om.core.path = (function om$core$path(cursor){
return om.core._path(cursor);
});
om.core.value = (function om$core$value(cursor){
return om.core._value(cursor);
});
om.core.state = (function om$core$state(cursor){
return om.core._state(cursor);
});

/**
 * @interface
 */
om.core.ITransact = function(){};

om.core._transact_BANG_ = (function om$core$_transact_BANG_(cursor,korks,f,tag){
if((!((cursor == null))) && (!((cursor.om$core$ITransact$_transact_BANG_$arity$4 == null)))){
return cursor.om$core$ITransact$_transact_BANG_$arity$4(cursor,korks,f,tag);
} else {
var x__5216__auto__ = (((cursor == null))?null:cursor);
var m__5217__auto__ = (om.core._transact_BANG_[goog.typeOf(x__5216__auto__)]);
if(!((m__5217__auto__ == null))){
return (m__5217__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5217__auto__.cljs$core$IFn$_invoke$arity$4(cursor,korks,f,tag) : m__5217__auto__.call(null,cursor,korks,f,tag));
} else {
var m__5217__auto____$1 = (om.core._transact_BANG_["_"]);
if(!((m__5217__auto____$1 == null))){
return (m__5217__auto____$1.cljs$core$IFn$_invoke$arity$4 ? m__5217__auto____$1.cljs$core$IFn$_invoke$arity$4(cursor,korks,f,tag) : m__5217__auto____$1.call(null,cursor,korks,f,tag));
} else {
throw cljs.core.missing_protocol("ITransact.-transact!",cursor);
}
}
}
});


/**
 * @interface
 */
om.core.INotify = function(){};

om.core._listen_BANG_ = (function om$core$_listen_BANG_(x,key,tx_listen){
if((!((x == null))) && (!((x.om$core$INotify$_listen_BANG_$arity$3 == null)))){
return x.om$core$INotify$_listen_BANG_$arity$3(x,key,tx_listen);
} else {
var x__5216__auto__ = (((x == null))?null:x);
var m__5217__auto__ = (om.core._listen_BANG_[goog.typeOf(x__5216__auto__)]);
if(!((m__5217__auto__ == null))){
return (m__5217__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5217__auto__.cljs$core$IFn$_invoke$arity$3(x,key,tx_listen) : m__5217__auto__.call(null,x,key,tx_listen));
} else {
var m__5217__auto____$1 = (om.core._listen_BANG_["_"]);
if(!((m__5217__auto____$1 == null))){
return (m__5217__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__5217__auto____$1.cljs$core$IFn$_invoke$arity$3(x,key,tx_listen) : m__5217__auto____$1.call(null,x,key,tx_listen));
} else {
throw cljs.core.missing_protocol("INotify.-listen!",x);
}
}
}
});

om.core._unlisten_BANG_ = (function om$core$_unlisten_BANG_(x,key){
if((!((x == null))) && (!((x.om$core$INotify$_unlisten_BANG_$arity$2 == null)))){
return x.om$core$INotify$_unlisten_BANG_$arity$2(x,key);
} else {
var x__5216__auto__ = (((x == null))?null:x);
var m__5217__auto__ = (om.core._unlisten_BANG_[goog.typeOf(x__5216__auto__)]);
if(!((m__5217__auto__ == null))){
return (m__5217__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5217__auto__.cljs$core$IFn$_invoke$arity$2(x,key) : m__5217__auto__.call(null,x,key));
} else {
var m__5217__auto____$1 = (om.core._unlisten_BANG_["_"]);
if(!((m__5217__auto____$1 == null))){
return (m__5217__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__5217__auto____$1.cljs$core$IFn$_invoke$arity$2(x,key) : m__5217__auto____$1.call(null,x,key));
} else {
throw cljs.core.missing_protocol("INotify.-unlisten!",x);
}
}
}
});

om.core._notify_BANG_ = (function om$core$_notify_BANG_(x,tx_data,root_cursor){
if((!((x == null))) && (!((x.om$core$INotify$_notify_BANG_$arity$3 == null)))){
return x.om$core$INotify$_notify_BANG_$arity$3(x,tx_data,root_cursor);
} else {
var x__5216__auto__ = (((x == null))?null:x);
var m__5217__auto__ = (om.core._notify_BANG_[goog.typeOf(x__5216__auto__)]);
if(!((m__5217__auto__ == null))){
return (m__5217__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5217__auto__.cljs$core$IFn$_invoke$arity$3(x,tx_data,root_cursor) : m__5217__auto__.call(null,x,tx_data,root_cursor));
} else {
var m__5217__auto____$1 = (om.core._notify_BANG_["_"]);
if(!((m__5217__auto____$1 == null))){
return (m__5217__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__5217__auto____$1.cljs$core$IFn$_invoke$arity$3(x,tx_data,root_cursor) : m__5217__auto____$1.call(null,x,tx_data,root_cursor));
} else {
throw cljs.core.missing_protocol("INotify.-notify!",x);
}
}
}
});


/**
 * @interface
 */
om.core.IRootProperties = function(){};

om.core._set_property_BANG_ = (function om$core$_set_property_BANG_(this$,id,p,val){
if((!((this$ == null))) && (!((this$.om$core$IRootProperties$_set_property_BANG_$arity$4 == null)))){
return this$.om$core$IRootProperties$_set_property_BANG_$arity$4(this$,id,p,val);
} else {
var x__5216__auto__ = (((this$ == null))?null:this$);
var m__5217__auto__ = (om.core._set_property_BANG_[goog.typeOf(x__5216__auto__)]);
if(!((m__5217__auto__ == null))){
return (m__5217__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5217__auto__.cljs$core$IFn$_invoke$arity$4(this$,id,p,val) : m__5217__auto__.call(null,this$,id,p,val));
} else {
var m__5217__auto____$1 = (om.core._set_property_BANG_["_"]);
if(!((m__5217__auto____$1 == null))){
return (m__5217__auto____$1.cljs$core$IFn$_invoke$arity$4 ? m__5217__auto____$1.cljs$core$IFn$_invoke$arity$4(this$,id,p,val) : m__5217__auto____$1.call(null,this$,id,p,val));
} else {
throw cljs.core.missing_protocol("IRootProperties.-set-property!",this$);
}
}
}
});

om.core._remove_property_BANG_ = (function om$core$_remove_property_BANG_(this$,id,p){
if((!((this$ == null))) && (!((this$.om$core$IRootProperties$_remove_property_BANG_$arity$3 == null)))){
return this$.om$core$IRootProperties$_remove_property_BANG_$arity$3(this$,id,p);
} else {
var x__5216__auto__ = (((this$ == null))?null:this$);
var m__5217__auto__ = (om.core._remove_property_BANG_[goog.typeOf(x__5216__auto__)]);
if(!((m__5217__auto__ == null))){
return (m__5217__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5217__auto__.cljs$core$IFn$_invoke$arity$3(this$,id,p) : m__5217__auto__.call(null,this$,id,p));
} else {
var m__5217__auto____$1 = (om.core._remove_property_BANG_["_"]);
if(!((m__5217__auto____$1 == null))){
return (m__5217__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__5217__auto____$1.cljs$core$IFn$_invoke$arity$3(this$,id,p) : m__5217__auto____$1.call(null,this$,id,p));
} else {
throw cljs.core.missing_protocol("IRootProperties.-remove-property!",this$);
}
}
}
});

om.core._remove_properties_BANG_ = (function om$core$_remove_properties_BANG_(this$,id){
if((!((this$ == null))) && (!((this$.om$core$IRootProperties$_remove_properties_BANG_$arity$2 == null)))){
return this$.om$core$IRootProperties$_remove_properties_BANG_$arity$2(this$,id);
} else {
var x__5216__auto__ = (((this$ == null))?null:this$);
var m__5217__auto__ = (om.core._remove_properties_BANG_[goog.typeOf(x__5216__auto__)]);
if(!((m__5217__auto__ == null))){
return (m__5217__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5217__auto__.cljs$core$IFn$_invoke$arity$2(this$,id) : m__5217__auto__.call(null,this$,id));
} else {
var m__5217__auto____$1 = (om.core._remove_properties_BANG_["_"]);
if(!((m__5217__auto____$1 == null))){
return (m__5217__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__5217__auto____$1.cljs$core$IFn$_invoke$arity$2(this$,id) : m__5217__auto____$1.call(null,this$,id));
} else {
throw cljs.core.missing_protocol("IRootProperties.-remove-properties!",this$);
}
}
}
});

om.core._get_property = (function om$core$_get_property(this$,id,p){
if((!((this$ == null))) && (!((this$.om$core$IRootProperties$_get_property$arity$3 == null)))){
return this$.om$core$IRootProperties$_get_property$arity$3(this$,id,p);
} else {
var x__5216__auto__ = (((this$ == null))?null:this$);
var m__5217__auto__ = (om.core._get_property[goog.typeOf(x__5216__auto__)]);
if(!((m__5217__auto__ == null))){
return (m__5217__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5217__auto__.cljs$core$IFn$_invoke$arity$3(this$,id,p) : m__5217__auto__.call(null,this$,id,p));
} else {
var m__5217__auto____$1 = (om.core._get_property["_"]);
if(!((m__5217__auto____$1 == null))){
return (m__5217__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__5217__auto____$1.cljs$core$IFn$_invoke$arity$3(this$,id,p) : m__5217__auto____$1.call(null,this$,id,p));
} else {
throw cljs.core.missing_protocol("IRootProperties.-get-property",this$);
}
}
}
});


/**
 * @interface
 */
om.core.IRootKey = function(){};

om.core._root_key = (function om$core$_root_key(cursor){
if((!((cursor == null))) && (!((cursor.om$core$IRootKey$_root_key$arity$1 == null)))){
return cursor.om$core$IRootKey$_root_key$arity$1(cursor);
} else {
var x__5216__auto__ = (((cursor == null))?null:cursor);
var m__5217__auto__ = (om.core._root_key[goog.typeOf(x__5216__auto__)]);
if(!((m__5217__auto__ == null))){
return (m__5217__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5217__auto__.cljs$core$IFn$_invoke$arity$1(cursor) : m__5217__auto__.call(null,cursor));
} else {
var m__5217__auto____$1 = (om.core._root_key["_"]);
if(!((m__5217__auto____$1 == null))){
return (m__5217__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__5217__auto____$1.cljs$core$IFn$_invoke$arity$1(cursor) : m__5217__auto____$1.call(null,cursor));
} else {
throw cljs.core.missing_protocol("IRootKey.-root-key",cursor);
}
}
}
});


/**
 * @interface
 */
om.core.IAdapt = function(){};

om.core._adapt = (function om$core$_adapt(this$,other){
if((!((this$ == null))) && (!((this$.om$core$IAdapt$_adapt$arity$2 == null)))){
return this$.om$core$IAdapt$_adapt$arity$2(this$,other);
} else {
var x__5216__auto__ = (((this$ == null))?null:this$);
var m__5217__auto__ = (om.core._adapt[goog.typeOf(x__5216__auto__)]);
if(!((m__5217__auto__ == null))){
return (m__5217__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5217__auto__.cljs$core$IFn$_invoke$arity$2(this$,other) : m__5217__auto__.call(null,this$,other));
} else {
var m__5217__auto____$1 = (om.core._adapt["_"]);
if(!((m__5217__auto____$1 == null))){
return (m__5217__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__5217__auto____$1.cljs$core$IFn$_invoke$arity$2(this$,other) : m__5217__auto____$1.call(null,this$,other));
} else {
throw cljs.core.missing_protocol("IAdapt.-adapt",this$);
}
}
}
});

(om.core.IAdapt["_"] = true);

(om.core._adapt["_"] = (function (_,other){
return other;
}));
om.core.adapt = (function om$core$adapt(x,other){
return om.core._adapt(x,other);
});

/**
 * @interface
 */
om.core.IOmRef = function(){};

om.core._add_dep_BANG_ = (function om$core$_add_dep_BANG_(this$,c){
if((!((this$ == null))) && (!((this$.om$core$IOmRef$_add_dep_BANG_$arity$2 == null)))){
return this$.om$core$IOmRef$_add_dep_BANG_$arity$2(this$,c);
} else {
var x__5216__auto__ = (((this$ == null))?null:this$);
var m__5217__auto__ = (om.core._add_dep_BANG_[goog.typeOf(x__5216__auto__)]);
if(!((m__5217__auto__ == null))){
return (m__5217__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5217__auto__.cljs$core$IFn$_invoke$arity$2(this$,c) : m__5217__auto__.call(null,this$,c));
} else {
var m__5217__auto____$1 = (om.core._add_dep_BANG_["_"]);
if(!((m__5217__auto____$1 == null))){
return (m__5217__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__5217__auto____$1.cljs$core$IFn$_invoke$arity$2(this$,c) : m__5217__auto____$1.call(null,this$,c));
} else {
throw cljs.core.missing_protocol("IOmRef.-add-dep!",this$);
}
}
}
});

om.core._remove_dep_BANG_ = (function om$core$_remove_dep_BANG_(this$,c){
if((!((this$ == null))) && (!((this$.om$core$IOmRef$_remove_dep_BANG_$arity$2 == null)))){
return this$.om$core$IOmRef$_remove_dep_BANG_$arity$2(this$,c);
} else {
var x__5216__auto__ = (((this$ == null))?null:this$);
var m__5217__auto__ = (om.core._remove_dep_BANG_[goog.typeOf(x__5216__auto__)]);
if(!((m__5217__auto__ == null))){
return (m__5217__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5217__auto__.cljs$core$IFn$_invoke$arity$2(this$,c) : m__5217__auto__.call(null,this$,c));
} else {
var m__5217__auto____$1 = (om.core._remove_dep_BANG_["_"]);
if(!((m__5217__auto____$1 == null))){
return (m__5217__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__5217__auto____$1.cljs$core$IFn$_invoke$arity$2(this$,c) : m__5217__auto____$1.call(null,this$,c));
} else {
throw cljs.core.missing_protocol("IOmRef.-remove-dep!",this$);
}
}
}
});

om.core._refresh_deps_BANG_ = (function om$core$_refresh_deps_BANG_(this$){
if((!((this$ == null))) && (!((this$.om$core$IOmRef$_refresh_deps_BANG_$arity$1 == null)))){
return this$.om$core$IOmRef$_refresh_deps_BANG_$arity$1(this$);
} else {
var x__5216__auto__ = (((this$ == null))?null:this$);
var m__5217__auto__ = (om.core._refresh_deps_BANG_[goog.typeOf(x__5216__auto__)]);
if(!((m__5217__auto__ == null))){
return (m__5217__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5217__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5217__auto__.call(null,this$));
} else {
var m__5217__auto____$1 = (om.core._refresh_deps_BANG_["_"]);
if(!((m__5217__auto____$1 == null))){
return (m__5217__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__5217__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__5217__auto____$1.call(null,this$));
} else {
throw cljs.core.missing_protocol("IOmRef.-refresh-deps!",this$);
}
}
}
});

om.core._get_deps = (function om$core$_get_deps(this$){
if((!((this$ == null))) && (!((this$.om$core$IOmRef$_get_deps$arity$1 == null)))){
return this$.om$core$IOmRef$_get_deps$arity$1(this$);
} else {
var x__5216__auto__ = (((this$ == null))?null:this$);
var m__5217__auto__ = (om.core._get_deps[goog.typeOf(x__5216__auto__)]);
if(!((m__5217__auto__ == null))){
return (m__5217__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5217__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5217__auto__.call(null,this$));
} else {
var m__5217__auto____$1 = (om.core._get_deps["_"]);
if(!((m__5217__auto____$1 == null))){
return (m__5217__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__5217__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__5217__auto____$1.call(null,this$));
} else {
throw cljs.core.missing_protocol("IOmRef.-get-deps",this$);
}
}
}
});

om.core.notify_STAR_;
om.core.transact_STAR_ = (function om$core$transact_STAR_(state,cursor,korks,f,tag){
var old_state = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(state) : cljs.core.deref.call(null,state));
var path = cljs.core.into.cljs$core$IFn$_invoke$arity$2(om.core.path(cursor),korks);
var ret = ((((!((state == null)))?(((false) || (state.om$core$IOmSwap$))?true:(((!state.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(om.core.IOmSwap,state):false)):cljs.core.native_satisfies_QMARK_(om.core.IOmSwap,state)))?om.core._om_swap_BANG_(state,cursor,korks,f,tag):((cljs.core.empty_QMARK_(path))?cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(state,f):cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.update_in,path,f)
));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ret,cljs.core.cst$kw$om$core_SLASH_defer)){
return null;
} else {
var tx_data = new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$path,path,cljs.core.cst$kw$old_DASH_value,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(old_state,path),cljs.core.cst$kw$new_DASH_value,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(state) : cljs.core.deref.call(null,state)),path),cljs.core.cst$kw$old_DASH_state,old_state,cljs.core.cst$kw$new_DASH_state,(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(state) : cljs.core.deref.call(null,state))], null);
if(!((tag == null))){
var G__13879 = cursor;
var G__13880 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(tx_data,cljs.core.cst$kw$tag,tag);
return (om.core.notify_STAR_.cljs$core$IFn$_invoke$arity$2 ? om.core.notify_STAR_.cljs$core$IFn$_invoke$arity$2(G__13879,G__13880) : om.core.notify_STAR_.call(null,G__13879,G__13880));
} else {
return (om.core.notify_STAR_.cljs$core$IFn$_invoke$arity$2 ? om.core.notify_STAR_.cljs$core$IFn$_invoke$arity$2(cursor,tx_data) : om.core.notify_STAR_.call(null,cursor,tx_data));
}
}
});
om.core.cursor_QMARK_ = (function om$core$cursor_QMARK_(x){
if(!((x == null))){
if((false) || (x.om$core$ICursor$)){
return true;
} else {
if((!x.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(om.core.ICursor,x);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(om.core.ICursor,x);
}
});
om.core.component_QMARK_ = (function om$core$component_QMARK_(x){
return (x["isOmComponent"]);
});
om.core.children = (function om$core$children(node){
var c = node.props.children;
if(cljs.core.ifn_QMARK_(c)){
return node.props.children = (c.cljs$core$IFn$_invoke$arity$1 ? c.cljs$core$IFn$_invoke$arity$1(node) : c.call(null,node));
} else {
return c;
}
});
/**
 * Given an owning Pure node return the Om props. Analogous to React
 * component props.
 */
om.core.get_props = (function om$core$get_props(var_args){
var args13883 = [];
var len__5619__auto___13887 = arguments.length;
var i__5620__auto___13888 = (0);
while(true){
if((i__5620__auto___13888 < len__5619__auto___13887)){
args13883.push((arguments[i__5620__auto___13888]));

var G__13889 = (i__5620__auto___13888 + (1));
i__5620__auto___13888 = G__13889;
continue;
} else {
}
break;
}

var G__13885 = args13883.length;
switch (G__13885) {
case 1:
return om.core.get_props.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om.core.get_props.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13883.length)].join('')));

}
});

om.core.get_props.cljs$core$IFn$_invoke$arity$1 = (function (x){
if(cljs.core.truth_(om.core.component_QMARK_(x))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(cljs.core.cst$sym$component_QMARK_,cljs.core.cst$sym$x)], 0)))].join('')));
}

return (x.props["__om_cursor"]);
});

om.core.get_props.cljs$core$IFn$_invoke$arity$2 = (function (x,korks){
if(cljs.core.truth_(om.core.component_QMARK_(x))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(cljs.core.cst$sym$component_QMARK_,cljs.core.cst$sym$x)], 0)))].join('')));
}

var korks__$1 = ((cljs.core.sequential_QMARK_(korks))?korks:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [korks], null));
var G__13886 = (x.props["__om_cursor"]);
var G__13886__$1 = ((cljs.core.seq(korks__$1))?cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(G__13886,korks__$1):G__13886);
return G__13886__$1;
});

om.core.get_props.cljs$lang$maxFixedArity = 2;
/**
 * Returns the component local state of an owning component. owner is
 * the component. An optional key or sequence of keys may be given to
 * extract a specific value. Always returns pending state.
 */
om.core.get_state = (function om$core$get_state(var_args){
var args13891 = [];
var len__5619__auto___13894 = arguments.length;
var i__5620__auto___13895 = (0);
while(true){
if((i__5620__auto___13895 < len__5619__auto___13894)){
args13891.push((arguments[i__5620__auto___13895]));

var G__13896 = (i__5620__auto___13895 + (1));
i__5620__auto___13895 = G__13896;
continue;
} else {
}
break;
}

var G__13893 = args13891.length;
switch (G__13893) {
case 1:
return om.core.get_state.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om.core.get_state.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13891.length)].join('')));

}
});

om.core.get_state.cljs$core$IFn$_invoke$arity$1 = (function (owner){
if(cljs.core.truth_(om.core.component_QMARK_(owner))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(cljs.core.cst$sym$component_QMARK_,cljs.core.cst$sym$owner)], 0)))].join('')));
}

return om.core._get_state.cljs$core$IFn$_invoke$arity$1(owner);
});

om.core.get_state.cljs$core$IFn$_invoke$arity$2 = (function (owner,korks){
if(cljs.core.truth_(om.core.component_QMARK_(owner))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(cljs.core.cst$sym$component_QMARK_,cljs.core.cst$sym$owner)], 0)))].join('')));
}

var ks = ((cljs.core.sequential_QMARK_(korks))?korks:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [korks], null));
return om.core._get_state.cljs$core$IFn$_invoke$arity$2(owner,ks);
});

om.core.get_state.cljs$lang$maxFixedArity = 2;
/**
 * Takes an owner and returns a map of global shared values for a
 * render loop. An optional key or sequence of keys may be given to
 * extract a specific value.
 */
om.core.get_shared = (function om$core$get_shared(var_args){
var args13898 = [];
var len__5619__auto___13901 = arguments.length;
var i__5620__auto___13902 = (0);
while(true){
if((i__5620__auto___13902 < len__5619__auto___13901)){
args13898.push((arguments[i__5620__auto___13902]));

var G__13903 = (i__5620__auto___13902 + (1));
i__5620__auto___13902 = G__13903;
continue;
} else {
}
break;
}

var G__13900 = args13898.length;
switch (G__13900) {
case 1:
return om.core.get_shared.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om.core.get_shared.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13898.length)].join('')));

}
});

om.core.get_shared.cljs$core$IFn$_invoke$arity$1 = (function (owner){
if((owner == null)){
return null;
} else {
return (owner.props["__om_shared"]);
}
});

om.core.get_shared.cljs$core$IFn$_invoke$arity$2 = (function (owner,korks){
if(!(cljs.core.sequential_QMARK_(korks))){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(om.core.get_shared.cljs$core$IFn$_invoke$arity$1(owner),korks);
} else {
if(cljs.core.empty_QMARK_(korks)){
return om.core.get_shared.cljs$core$IFn$_invoke$arity$1(owner);
} else {
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(om.core.get_shared.cljs$core$IFn$_invoke$arity$1(owner),korks);

}
}
});

om.core.get_shared.cljs$lang$maxFixedArity = 2;
om.core.merge_pending_state = (function om$core$merge_pending_state(owner){
var state = owner.state;
var temp__4425__auto__ = (state["__om_pending_state"]);
if(cljs.core.truth_(temp__4425__auto__)){
var pending_state = temp__4425__auto__;
var G__13906 = state;
(G__13906["__om_prev_state"] = (state["__om_state"]));

(G__13906["__om_state"] = pending_state);

(G__13906["__om_pending_state"] = null);

return G__13906;
} else {
return null;
}
});
om.core.merge_props_state = (function om$core$merge_props_state(var_args){
var args13907 = [];
var len__5619__auto___13910 = arguments.length;
var i__5620__auto___13911 = (0);
while(true){
if((i__5620__auto___13911 < len__5619__auto___13910)){
args13907.push((arguments[i__5620__auto___13911]));

var G__13912 = (i__5620__auto___13911 + (1));
i__5620__auto___13911 = G__13912;
continue;
} else {
}
break;
}

var G__13909 = args13907.length;
switch (G__13909) {
case 1:
return om.core.merge_props_state.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om.core.merge_props_state.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13907.length)].join('')));

}
});

om.core.merge_props_state.cljs$core$IFn$_invoke$arity$1 = (function (owner){
return om.core.merge_props_state.cljs$core$IFn$_invoke$arity$2(owner,null);
});

om.core.merge_props_state.cljs$core$IFn$_invoke$arity$2 = (function (owner,props){
var props__$1 = (function (){var or__4561__auto__ = props;
if(cljs.core.truth_(or__4561__auto__)){
return or__4561__auto__;
} else {
return owner.props;
}
})();
var temp__4425__auto__ = (props__$1["__om_state"]);
if(cljs.core.truth_(temp__4425__auto__)){
var props_state = temp__4425__auto__;
var state = owner.state;
(state["__om_pending_state"] = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([(function (){var or__4561__auto__ = (state["__om_pending_state"]);
if(cljs.core.truth_(or__4561__auto__)){
return or__4561__auto__;
} else {
return (state["__om_state"]);
}
})(),props_state], 0)));

return (props__$1["__om_state"] = null);
} else {
return null;
}
});

om.core.merge_props_state.cljs$lang$maxFixedArity = 2;
om.core.ref_changed_QMARK_ = (function om$core$ref_changed_QMARK_(ref){
var val = om.core.value(ref);
var val_SINGLEQUOTE_ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$3((function (){var G__13915 = om.core.state(ref);
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__13915) : cljs.core.deref.call(null,G__13915));
})(),om.core.path(ref),cljs.core.cst$kw$om$core_SLASH_not_DASH_found);
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(val,val_SINGLEQUOTE_);
});
om.core.update_refs = (function om$core$update_refs(c){
var cstate = c.state;
var refs = (cstate["__om_refs"]);
if((cljs.core.count(refs) === (0))){
return null;
} else {
return (cstate["__om_refs"] = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (cstate,refs){
return (function (ref){
var ref_val = om.core.value(ref);
var ref_state = om.core.state(ref);
var ref_path = om.core.path(ref);
var ref_val_SINGLEQUOTE_ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$3((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(ref_state) : cljs.core.deref.call(null,ref_state)),ref_path,cljs.core.cst$kw$om$core_SLASH_not_DASH_found);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(ref_val,cljs.core.cst$kw$om$core_SLASH_not_DASH_found)){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(ref_val,ref_val_SINGLEQUOTE_)){
return om.core.adapt(ref,(om.core.to_cursor.cljs$core$IFn$_invoke$arity$3 ? om.core.to_cursor.cljs$core$IFn$_invoke$arity$3(ref_val_SINGLEQUOTE_,ref_state,ref_path) : om.core.to_cursor.call(null,ref_val_SINGLEQUOTE_,ref_state,ref_path)));
} else {
return ref;
}
} else {
return null;
}
});})(cstate,refs))
,refs))));
}
});
om.core.unobserve;
om.core.pure_methods = cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$componentDidUpdate,cljs.core.cst$kw$isOmComponent,cljs.core.cst$kw$componentWillUnmount,cljs.core.cst$kw$componentWillReceiveProps,cljs.core.cst$kw$shouldComponentUpdate,cljs.core.cst$kw$render,cljs.core.cst$kw$componentWillUpdate,cljs.core.cst$kw$getInitialState,cljs.core.cst$kw$componentDidMount,cljs.core.cst$kw$getDisplayName,cljs.core.cst$kw$componentWillMount],[(function (prev_props,prev_state){
var this$ = this;
var c = om.core.children(this$);
if(((!((c == null)))?(((false) || (c.om$core$IDidUpdate$))?true:(((!c.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(om.core.IDidUpdate,c):false)):cljs.core.native_satisfies_QMARK_(om.core.IDidUpdate,c))){
var state_13938 = this$.state;
om.core.did_update(c,om.core.get_props.cljs$core$IFn$_invoke$arity$1({"props": prev_props, "isOmComponent": true}),(function (){var or__4561__auto__ = (state_13938["__om_prev_state"]);
if(cljs.core.truth_(or__4561__auto__)){
return or__4561__auto__;
} else {
return (state_13938["__om_state"]);
}
})());
} else {
}

return (this$.state["__om_prev_state"] = null);
}),true,(function (){
var this$ = this;
var c = om.core.children(this$);
var cursor = (this$.props["__om_cursor"]);
if(((!((c == null)))?(((false) || (c.om$core$IWillUnmount$))?true:(((!c.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(om.core.IWillUnmount,c):false)):cljs.core.native_satisfies_QMARK_(om.core.IWillUnmount,c))){
om.core.will_unmount(c);
} else {
}

var temp__4425__auto__ = cljs.core.seq((this$.state["__om_refs"]));
if(temp__4425__auto__){
var refs = temp__4425__auto__;
var seq__13919 = cljs.core.seq(refs);
var chunk__13920 = null;
var count__13921 = (0);
var i__13922 = (0);
while(true){
if((i__13922 < count__13921)){
var ref = chunk__13920.cljs$core$IIndexed$_nth$arity$2(null,i__13922);
(om.core.unobserve.cljs$core$IFn$_invoke$arity$2 ? om.core.unobserve.cljs$core$IFn$_invoke$arity$2(this$,ref) : om.core.unobserve.call(null,this$,ref));

var G__13939 = seq__13919;
var G__13940 = chunk__13920;
var G__13941 = count__13921;
var G__13942 = (i__13922 + (1));
seq__13919 = G__13939;
chunk__13920 = G__13940;
count__13921 = G__13941;
i__13922 = G__13942;
continue;
} else {
var temp__4425__auto____$1 = cljs.core.seq(seq__13919);
if(temp__4425__auto____$1){
var seq__13919__$1 = temp__4425__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__13919__$1)){
var c__5364__auto__ = cljs.core.chunk_first(seq__13919__$1);
var G__13943 = cljs.core.chunk_rest(seq__13919__$1);
var G__13944 = c__5364__auto__;
var G__13945 = cljs.core.count(c__5364__auto__);
var G__13946 = (0);
seq__13919 = G__13943;
chunk__13920 = G__13944;
count__13921 = G__13945;
i__13922 = G__13946;
continue;
} else {
var ref = cljs.core.first(seq__13919__$1);
(om.core.unobserve.cljs$core$IFn$_invoke$arity$2 ? om.core.unobserve.cljs$core$IFn$_invoke$arity$2(this$,ref) : om.core.unobserve.call(null,this$,ref));

var G__13947 = cljs.core.next(seq__13919__$1);
var G__13948 = null;
var G__13949 = (0);
var G__13950 = (0);
seq__13919 = G__13947;
chunk__13920 = G__13948;
count__13921 = G__13949;
i__13922 = G__13950;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
}),(function (next_props){
var this$ = this;
var c = om.core.children(this$);
if(((!((c == null)))?(((false) || (c.om$core$IWillReceiveProps$))?true:(((!c.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(om.core.IWillReceiveProps,c):false)):cljs.core.native_satisfies_QMARK_(om.core.IWillReceiveProps,c))){
return om.core.will_receive_props(c,om.core.get_props.cljs$core$IFn$_invoke$arity$1({"props": next_props, "isOmComponent": true}));
} else {
return null;
}
}),(function (next_props,next_state){
var this$ = this;
var props = this$.props;
var state = this$.state;
var c = om.core.children(this$);
om.core.merge_props_state.cljs$core$IFn$_invoke$arity$2(this$,next_props);

if(((!((c == null)))?(((false) || (c.om$core$IShouldUpdate$))?true:(((!c.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(om.core.IShouldUpdate,c):false)):cljs.core.native_satisfies_QMARK_(om.core.IShouldUpdate,c))){
return om.core.should_update(c,om.core.get_props.cljs$core$IFn$_invoke$arity$1({"props": next_props, "isOmComponent": true}),om.core._get_state.cljs$core$IFn$_invoke$arity$1(this$));
} else {
var cursor = (props["__om_cursor"]);
var next_cursor = (next_props["__om_cursor"]);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(om.core._value(cursor),om.core._value(next_cursor))){
return true;
} else {
if(cljs.core.truth_((function (){var and__4549__auto__ = om.core.cursor_QMARK_(cursor);
if(cljs.core.truth_(and__4549__auto__)){
var and__4549__auto____$1 = om.core.cursor_QMARK_(next_cursor);
if(cljs.core.truth_(and__4549__auto____$1)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(om.core._path(cursor),om.core._path(next_cursor));
} else {
return and__4549__auto____$1;
}
} else {
return and__4549__auto__;
}
})())){
return true;
} else {
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(om.core._get_state.cljs$core$IFn$_invoke$arity$1(this$),om.core._get_render_state.cljs$core$IFn$_invoke$arity$1(this$))){
return true;
} else {
if(cljs.core.truth_((function (){var and__4549__auto__ = !((cljs.core.count((state["__om_refs"])) === (0)));
if(and__4549__auto__){
return cljs.core.some(((function (and__4549__auto__,cursor,next_cursor,props,state,c,this$){
return (function (p1__13916_SHARP_){
return om.core.ref_changed_QMARK_(p1__13916_SHARP_);
});})(and__4549__auto__,cursor,next_cursor,props,state,c,this$))
,(state["__om_refs"]));
} else {
return and__4549__auto__;
}
})())){
return true;
} else {
if(!(((props["__om_index"]) === (next_props["__om_index"])))){
return true;
} else {
return false;

}
}
}
}
}
}
}),(function (){
var this$ = this;
var c = om.core.children(this$);
var props = this$.props;
var _STAR_parent_STAR_13925 = om.core._STAR_parent_STAR_;
var _STAR_state_STAR_13926 = om.core._STAR_state_STAR_;
var _STAR_instrument_STAR_13927 = om.core._STAR_instrument_STAR_;
var _STAR_descriptor_STAR_13928 = om.core._STAR_descriptor_STAR_;
var _STAR_root_key_STAR_13929 = om.core._STAR_root_key_STAR_;
om.core._STAR_parent_STAR_ = this$;

om.core._STAR_state_STAR_ = (props["__om_app_state"]);

om.core._STAR_instrument_STAR_ = (props["__om_instrument"]);

om.core._STAR_descriptor_STAR_ = (props["__om_descriptor"]);

om.core._STAR_root_key_STAR_ = (props["__om_root_key"]);

try{if(((!((c == null)))?(((false) || (c.om$core$IRender$))?true:(((!c.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(om.core.IRender,c):false)):cljs.core.native_satisfies_QMARK_(om.core.IRender,c))){
return om.core.render(c);
} else {
if(((!((c == null)))?(((false) || (c.om$core$IRenderProps$))?true:(((!c.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(om.core.IRenderProps,c):false)):cljs.core.native_satisfies_QMARK_(om.core.IRenderProps,c))){
return om.core.render_props(c,(props["__om_cursor"]),om.core.get_state.cljs$core$IFn$_invoke$arity$1(this$));
} else {
if(((!((c == null)))?(((false) || (c.om$core$IRenderState$))?true:(((!c.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(om.core.IRenderState,c):false)):cljs.core.native_satisfies_QMARK_(om.core.IRenderState,c))){
return om.core.render_state(c,om.core.get_state.cljs$core$IFn$_invoke$arity$1(this$));
} else {
return c;

}
}
}
}finally {om.core._STAR_root_key_STAR_ = _STAR_root_key_STAR_13929;

om.core._STAR_descriptor_STAR_ = _STAR_descriptor_STAR_13928;

om.core._STAR_instrument_STAR_ = _STAR_instrument_STAR_13927;

om.core._STAR_state_STAR_ = _STAR_state_STAR_13926;

om.core._STAR_parent_STAR_ = _STAR_parent_STAR_13925;
}}),(function (next_props,next_state){
var this$ = this;
var c_13951 = om.core.children(this$);
if(((!((c_13951 == null)))?(((false) || (c_13951.om$core$IWillUpdate$))?true:(((!c_13951.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(om.core.IWillUpdate,c_13951):false)):cljs.core.native_satisfies_QMARK_(om.core.IWillUpdate,c_13951))){
var state_13952 = this$.state;
om.core.will_update(c_13951,om.core.get_props.cljs$core$IFn$_invoke$arity$1({"props": next_props, "isOmComponent": true}),om.core._get_state.cljs$core$IFn$_invoke$arity$1(this$));
} else {
}

om.core.merge_pending_state(this$);

return om.core.update_refs(this$);
}),(function (){
var this$ = this;
var c = om.core.children(this$);
var props = this$.props;
var istate = (function (){var or__4561__auto__ = (props["__om_init_state"]);
if(cljs.core.truth_(or__4561__auto__)){
return or__4561__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
var id = cljs.core.cst$kw$om$core_SLASH_id.cljs$core$IFn$_invoke$arity$1(istate);
var ret = {"__om_id": (function (){var or__4561__auto__ = id;
if(cljs.core.truth_(or__4561__auto__)){
return or__4561__auto__;
} else {
return goog.ui.IdGenerator.getInstance().getNextUniqueId();
}
})(), "__om_state": cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([((((!((c == null)))?(((false) || (c.om$core$IInitState$))?true:(((!c.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(om.core.IInitState,c):false)):cljs.core.native_satisfies_QMARK_(om.core.IInitState,c)))?om.core.init_state(c):null),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(istate,cljs.core.cst$kw$om$core_SLASH_id)], 0))};
(props["__om_init_state"] = null);

return ret;
}),(function (){
var this$ = this;
var c = om.core.children(this$);
var cursor = (this$.props["__om_cursor"]);
if(((!((c == null)))?(((false) || (c.om$core$IDidMount$))?true:(((!c.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(om.core.IDidMount,c):false)):cljs.core.native_satisfies_QMARK_(om.core.IDidMount,c))){
return om.core.did_mount(c);
} else {
return null;
}
}),(function (){
var this$ = this;
var c = om.core.children(this$);
if(((!((c == null)))?(((false) || (c.om$core$IDisplayName$))?true:(((!c.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(om.core.IDisplayName,c):false)):cljs.core.native_satisfies_QMARK_(om.core.IDisplayName,c))){
return om.core.display_name(c);
} else {
return null;
}
}),(function (){
var this$ = this;
om.core.merge_props_state.cljs$core$IFn$_invoke$arity$1(this$);

var c_13953 = om.core.children(this$);
if(((!((c_13953 == null)))?(((false) || (c_13953.om$core$IWillMount$))?true:(((!c_13953.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(om.core.IWillMount,c_13953):false)):cljs.core.native_satisfies_QMARK_(om.core.IWillMount,c_13953))){
om.core.will_mount(c_13953);
} else {
}

return om.core.merge_pending_state(this$);
})]);
om.core.specify_state_methods_BANG_ = (function om$core$specify_state_methods_BANG_(obj){
var x13955 = obj;
x13955.om$core$ISetState$ = true;

x13955.om$core$ISetState$_set_state_BANG_$arity$3 = ((function (x13955){
return (function (this$,val,render){
var this$__$1 = this;
var props = this$__$1.props;
var app_state = (props["__om_app_state"]);
(this$__$1.state["__om_pending_state"] = val);

if(cljs.core.truth_((function (){var and__4549__auto__ = !((app_state == null));
if(and__4549__auto__){
return render;
} else {
return and__4549__auto__;
}
})())){
return om.core._queue_render_BANG_(app_state,this$__$1);
} else {
return null;
}
});})(x13955))
;

x13955.om$core$ISetState$_set_state_BANG_$arity$4 = ((function (x13955){
return (function (this$,ks,val,render){
var this$__$1 = this;
var props = this$__$1.props;
var state = this$__$1.state;
var pstate = om.core._get_state.cljs$core$IFn$_invoke$arity$1(this$__$1);
var app_state = (props["__om_app_state"]);
(state["__om_pending_state"] = cljs.core.assoc_in(pstate,ks,val));

if(cljs.core.truth_((function (){var and__4549__auto__ = !((app_state == null));
if(and__4549__auto__){
return render;
} else {
return and__4549__auto__;
}
})())){
return om.core._queue_render_BANG_(app_state,this$__$1);
} else {
return null;
}
});})(x13955))
;

x13955.om$core$IGetRenderState$ = true;

x13955.om$core$IGetRenderState$_get_render_state$arity$1 = ((function (x13955){
return (function (this$){
var this$__$1 = this;
return (this$__$1.state["__om_state"]);
});})(x13955))
;

x13955.om$core$IGetRenderState$_get_render_state$arity$2 = ((function (x13955){
return (function (this$,ks){
var this$__$1 = this;
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(om.core._get_render_state.cljs$core$IFn$_invoke$arity$1(this$__$1),ks);
});})(x13955))
;

x13955.om$core$IGetState$ = true;

x13955.om$core$IGetState$_get_state$arity$1 = ((function (x13955){
return (function (this$){
var this$__$1 = this;
var state = this$__$1.state;
var or__4561__auto__ = (state["__om_pending_state"]);
if(cljs.core.truth_(or__4561__auto__)){
return or__4561__auto__;
} else {
return (state["__om_state"]);
}
});})(x13955))
;

x13955.om$core$IGetState$_get_state$arity$2 = ((function (x13955){
return (function (this$,ks){
var this$__$1 = this;
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(om.core._get_state.cljs$core$IFn$_invoke$arity$1(this$__$1),ks);
});})(x13955))
;

return x13955;
});
om.core.pure_descriptor = om.core.specify_state_methods_BANG_(cljs.core.clj__GT_js(om.core.pure_methods));
om.core.get_node;
om.core.react_id = (function om$core$react_id(x){
var id = (function (){var G__13958 = (om.core.get_node.cljs$core$IFn$_invoke$arity$1 ? om.core.get_node.cljs$core$IFn$_invoke$arity$1(x) : om.core.get_node.call(null,x));
var G__13959 = "reactid";
return goog.dom.dataset.get(G__13958,G__13959);
})();
if(cljs.core.truth_(id)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$sym$id], 0)))].join('')));
}

return id;
});
om.core.get_gstate = (function om$core$get_gstate(owner){
return (owner.props["__om_app_state"]);
});
om.core.no_local_merge_pending_state = (function om$core$no_local_merge_pending_state(owner){
var gstate = om.core.get_gstate(owner);
var spath = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$state_DASH_map,om.core.react_id(owner)], null);
var states = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(gstate) : cljs.core.deref.call(null,gstate)),spath);
if(cljs.core.truth_(cljs.core.cst$kw$pending_DASH_state.cljs$core$IFn$_invoke$arity$1(states))){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(gstate,cljs.core.update_in,spath,((function (gstate,spath,states){
return (function (states__$1){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(states__$1,cljs.core.cst$kw$previous_DASH_state,cljs.core.cst$kw$render_DASH_state.cljs$core$IFn$_invoke$arity$1(states__$1)),cljs.core.cst$kw$render_DASH_state,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$render_DASH_state.cljs$core$IFn$_invoke$arity$1(states__$1),cljs.core.cst$kw$pending_DASH_state.cljs$core$IFn$_invoke$arity$1(states__$1)], 0))),cljs.core.cst$kw$pending_DASH_state);
});})(gstate,spath,states))
);
} else {
return null;
}
});
om.core.mounted_QMARK_;
om.core.no_local_state_methods = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(om.core.pure_methods,cljs.core.cst$kw$getInitialState,(function (){
var this$ = this;
var c = om.core.children(this$);
var props = this$.props;
var istate = (function (){var or__4561__auto__ = (props["__om_init_state"]);
if(cljs.core.truth_(or__4561__auto__)){
return or__4561__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
var om_id = (function (){var or__4561__auto__ = cljs.core.cst$kw$om$core_SLASH_id.cljs$core$IFn$_invoke$arity$1(istate);
if(cljs.core.truth_(or__4561__auto__)){
return or__4561__auto__;
} else {
return goog.ui.IdGenerator.getInstance().getNextUniqueId();
}
})();
var state = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(istate,cljs.core.cst$kw$om$core_SLASH_id),((((!((c == null)))?(((false) || (c.om$core$IInitState$))?true:(((!c.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(om.core.IInitState,c):false)):cljs.core.native_satisfies_QMARK_(om.core.IInitState,c)))?om.core.init_state(c):null)], 0));
(props["__om_init_state"] = null);

return {"__om_id": om_id};
}),cljs.core.array_seq([cljs.core.cst$kw$componentDidMount,(function (){
var this$ = this;
var c = om.core.children(this$);
var cursor = (this$.props["__om_cursor"]);
var spath = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$state_DASH_map,om.core.react_id(this$),cljs.core.cst$kw$render_DASH_state], null);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(om.core.get_gstate(this$),cljs.core.assoc_in,spath,om.core.state);

if(((!((c == null)))?(((false) || (c.om$core$IDidMount$))?true:(((!c.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(om.core.IDidMount,c):false)):cljs.core.native_satisfies_QMARK_(om.core.IDidMount,c))){
return om.core.did_mount(c);
} else {
return null;
}
}),cljs.core.cst$kw$componentWillMount,(function (){
var this$ = this;
om.core.merge_props_state.cljs$core$IFn$_invoke$arity$1(this$);

var c_13970 = om.core.children(this$);
if(((!((c_13970 == null)))?(((false) || (c_13970.om$core$IWillMount$))?true:(((!c_13970.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(om.core.IWillMount,c_13970):false)):cljs.core.native_satisfies_QMARK_(om.core.IWillMount,c_13970))){
om.core.will_mount(c_13970);
} else {
}

if(cljs.core.truth_((om.core.mounted_QMARK_.cljs$core$IFn$_invoke$arity$1 ? om.core.mounted_QMARK_.cljs$core$IFn$_invoke$arity$1(this$) : om.core.mounted_QMARK_.call(null,this$)))){
return om.core.no_local_merge_pending_state(this$);
} else {
return null;
}
}),cljs.core.cst$kw$componentWillUnmount,(function (){
var this$ = this;
var c = om.core.children(this$);
if(((!((c == null)))?(((false) || (c.om$core$IWillUnmount$))?true:(((!c.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(om.core.IWillUnmount,c):false)):cljs.core.native_satisfies_QMARK_(om.core.IWillUnmount,c))){
om.core.will_unmount(c);
} else {
}

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(om.core.get_gstate(this$),cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$state_DASH_map], null),cljs.core.dissoc,cljs.core.array_seq([om.core.react_id(this$)], 0));

var temp__4425__auto__ = cljs.core.seq((this$.state["__om_refs"]));
if(temp__4425__auto__){
var refs = temp__4425__auto__;
var seq__13964 = cljs.core.seq(refs);
var chunk__13965 = null;
var count__13966 = (0);
var i__13967 = (0);
while(true){
if((i__13967 < count__13966)){
var ref = chunk__13965.cljs$core$IIndexed$_nth$arity$2(null,i__13967);
(om.core.unobserve.cljs$core$IFn$_invoke$arity$2 ? om.core.unobserve.cljs$core$IFn$_invoke$arity$2(this$,ref) : om.core.unobserve.call(null,this$,ref));

var G__13971 = seq__13964;
var G__13972 = chunk__13965;
var G__13973 = count__13966;
var G__13974 = (i__13967 + (1));
seq__13964 = G__13971;
chunk__13965 = G__13972;
count__13966 = G__13973;
i__13967 = G__13974;
continue;
} else {
var temp__4425__auto____$1 = cljs.core.seq(seq__13964);
if(temp__4425__auto____$1){
var seq__13964__$1 = temp__4425__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__13964__$1)){
var c__5364__auto__ = cljs.core.chunk_first(seq__13964__$1);
var G__13975 = cljs.core.chunk_rest(seq__13964__$1);
var G__13976 = c__5364__auto__;
var G__13977 = cljs.core.count(c__5364__auto__);
var G__13978 = (0);
seq__13964 = G__13975;
chunk__13965 = G__13976;
count__13966 = G__13977;
i__13967 = G__13978;
continue;
} else {
var ref = cljs.core.first(seq__13964__$1);
(om.core.unobserve.cljs$core$IFn$_invoke$arity$2 ? om.core.unobserve.cljs$core$IFn$_invoke$arity$2(this$,ref) : om.core.unobserve.call(null,this$,ref));

var G__13979 = cljs.core.next(seq__13964__$1);
var G__13980 = null;
var G__13981 = (0);
var G__13982 = (0);
seq__13964 = G__13979;
chunk__13965 = G__13980;
count__13966 = G__13981;
i__13967 = G__13982;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
}),cljs.core.cst$kw$componentWillUpdate,(function (next_props,next_state){
var this$ = this;
var props_13983 = this$.props;
var c_13984 = om.core.children(this$);
if(((!((c_13984 == null)))?(((false) || (c_13984.om$core$IWillUpdate$))?true:(((!c_13984.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(om.core.IWillUpdate,c_13984):false)):cljs.core.native_satisfies_QMARK_(om.core.IWillUpdate,c_13984))){
var state_13985 = this$.state;
om.core.will_update(c_13984,om.core.get_props.cljs$core$IFn$_invoke$arity$1({"props": next_props, "isOmComponent": true}),om.core._get_state.cljs$core$IFn$_invoke$arity$1(this$));
} else {
}

om.core.no_local_merge_pending_state(this$);

return om.core.update_refs(this$);
}),cljs.core.cst$kw$componentDidUpdate,(function (prev_props,prev_state){
var this$ = this;
var c = om.core.children(this$);
var gstate = om.core.get_gstate(this$);
var states = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(gstate) : cljs.core.deref.call(null,gstate)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$state_DASH_map,om.core.react_id(this$)], null));
var spath = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$state_DASH_map,om.core.react_id(this$)], null);
if(((!((c == null)))?(((false) || (c.om$core$IDidUpdate$))?true:(((!c.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(om.core.IDidUpdate,c):false)):cljs.core.native_satisfies_QMARK_(om.core.IDidUpdate,c))){
var state_13986 = this$.state;
om.core.did_update(c,om.core.get_props.cljs$core$IFn$_invoke$arity$1({"props": prev_props, "isOmComponent": true}),(function (){var or__4561__auto__ = cljs.core.cst$kw$previous_DASH_state.cljs$core$IFn$_invoke$arity$1(states);
if(cljs.core.truth_(or__4561__auto__)){
return or__4561__auto__;
} else {
return cljs.core.cst$kw$render_DASH_state.cljs$core$IFn$_invoke$arity$1(states);
}
})());
} else {
}

if(cljs.core.truth_(cljs.core.cst$kw$previous_DASH_state.cljs$core$IFn$_invoke$arity$1(states))){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(gstate,cljs.core.update_in,spath,cljs.core.dissoc,cljs.core.array_seq([cljs.core.cst$kw$previous_DASH_state], 0));
} else {
return null;
}
})], 0));
om.core.no_local_descriptor = (function om$core$no_local_descriptor(methods$){
var x13990 = cljs.core.clj__GT_js(methods$);
x13990.om$core$ISetState$ = true;

x13990.om$core$ISetState$_set_state_BANG_$arity$3 = ((function (x13990){
return (function (this$,val,render){
var this$__$1 = this;
var gstate = om.core.get_gstate(this$__$1);
var spath = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$state_DASH_map,om.core.react_id(this$__$1),cljs.core.cst$kw$pending_DASH_state], null);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(om.core.get_gstate(this$__$1),cljs.core.assoc_in,spath,val);

if(cljs.core.truth_((function (){var and__4549__auto__ = !((gstate == null));
if(and__4549__auto__){
return render;
} else {
return and__4549__auto__;
}
})())){
return om.core._queue_render_BANG_(gstate,this$__$1);
} else {
return null;
}
});})(x13990))
;

x13990.om$core$ISetState$_set_state_BANG_$arity$4 = ((function (x13990){
return (function (this$,ks,val,render){
var this$__$1 = this;
return om.core._set_state_BANG_.cljs$core$IFn$_invoke$arity$3(this$__$1,cljs.core.assoc_in(om.core._get_state.cljs$core$IFn$_invoke$arity$1(this$__$1),ks,val),render);
});})(x13990))
;

x13990.om$core$IGetRenderState$ = true;

x13990.om$core$IGetRenderState$_get_render_state$arity$1 = ((function (x13990){
return (function (this$){
var this$__$1 = this;
var spath = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$state_DASH_map,om.core.react_id(this$__$1),cljs.core.cst$kw$render_DASH_state], null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((function (){var G__13991 = om.core.get_gstate(this$__$1);
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__13991) : cljs.core.deref.call(null,G__13991));
})(),spath);
});})(x13990))
;

x13990.om$core$IGetRenderState$_get_render_state$arity$2 = ((function (x13990){
return (function (this$,ks){
var this$__$1 = this;
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(om.core._get_render_state.cljs$core$IFn$_invoke$arity$1(this$__$1),ks);
});})(x13990))
;

x13990.om$core$IGetState$ = true;

x13990.om$core$IGetState$_get_state$arity$1 = ((function (x13990){
return (function (this$){
var this$__$1 = this;
if(cljs.core.truth_((om.core.mounted_QMARK_.cljs$core$IFn$_invoke$arity$1 ? om.core.mounted_QMARK_.cljs$core$IFn$_invoke$arity$1(this$__$1) : om.core.mounted_QMARK_.call(null,this$__$1)))){
var spath = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$state_DASH_map,om.core.react_id(this$__$1)], null);
var states = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((function (){var G__13992 = om.core.get_gstate(this$__$1);
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__13992) : cljs.core.deref.call(null,G__13992));
})(),spath);
var or__4561__auto__ = cljs.core.cst$kw$pending_DASH_state.cljs$core$IFn$_invoke$arity$1(states);
if(cljs.core.truth_(or__4561__auto__)){
return or__4561__auto__;
} else {
return cljs.core.cst$kw$render_DASH_state.cljs$core$IFn$_invoke$arity$1(states);
}
} else {
return (this$__$1.props["__om_init_state"]);
}
});})(x13990))
;

x13990.om$core$IGetState$_get_state$arity$2 = ((function (x13990){
return (function (this$,ks){
var this$__$1 = this;
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(om.core._get_state.cljs$core$IFn$_invoke$arity$1(this$__$1),ks);
});})(x13990))
;

return x13990;
});
om.core.valid_QMARK_ = (function om$core$valid_QMARK_(x){
if(((!((x == null)))?(((false) || (x.om$core$ICursor$))?true:(((!x.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(om.core.ICursor,x):false)):cljs.core.native_satisfies_QMARK_(om.core.ICursor,x))){
return !(cljs.core.keyword_identical_QMARK_((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(x) : cljs.core.deref.call(null,x)),cljs.core.cst$kw$om$core_SLASH_invalid));
} else {
return true;
}
});

/**
* @constructor
 * @implements {om.core.IValue}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.ICollection}
 * @implements {om.core.ITransact}
 * @implements {cljs.core.IEmptyableCollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {om.core.ICursor}
 * @implements {cljs.core.IDeref}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
om.core.MapCursor = (function (value,state,path){
this.value = value;
this.state = state;
this.path = path;
this.cljs$lang$protocol_mask$partition0$ = 2163640079;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
om.core.MapCursor.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this$,k){
var self__ = this;
var this$__$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this$__$1,k,null);
});

om.core.MapCursor.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this$,k,not_found){
var self__ = this;
var this$__$1 = this;
var v = cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(self__.value,k,cljs.core.cst$kw$om$core_SLASH_not_DASH_found);
if(!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(v,cljs.core.cst$kw$om$core_SLASH_not_DASH_found))){
return om.core._derive(this$__$1,v,self__.state,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(self__.path,k));
} else {
return not_found;
}
});

om.core.MapCursor.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (_,f,init){
var self__ = this;
var ___$1 = this;
return cljs.core._kv_reduce(self__.value,f,init);
});

om.core.MapCursor.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (_,writer,opts){
var self__ = this;
var ___$1 = this;
return cljs.core._pr_writer(self__.value,writer,opts);
});

om.core.MapCursor.prototype.om$core$ICursor$ = true;

om.core.MapCursor.prototype.om$core$ICursor$_path$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.path;
});

om.core.MapCursor.prototype.om$core$ICursor$_state$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.state;
});

om.core.MapCursor.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.meta(self__.value);
});

om.core.MapCursor.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (new om.core.MapCursor(self__.value,self__.state,self__.path));
});

om.core.MapCursor.prototype.cljs$core$ICounted$_count$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core._count(self__.value);
});

om.core.MapCursor.prototype.cljs$core$IHash$_hash$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.hash(self__.value);
});

om.core.MapCursor.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (_,other){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(om.core.cursor_QMARK_(other))){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.value,om.core._value(other));
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.value,other);
}
});

om.core.MapCursor.prototype.om$core$IValue$ = true;

om.core.MapCursor.prototype.om$core$IValue$_value$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.value;
});

om.core.MapCursor.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (new om.core.MapCursor(cljs.core.empty(self__.value),self__.state,self__.path));
});

om.core.MapCursor.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (_,k){
var self__ = this;
var ___$1 = this;
return (new om.core.MapCursor(cljs.core._dissoc(self__.value,k),self__.state,self__.path));
});

om.core.MapCursor.prototype.om$core$ITransact$ = true;

om.core.MapCursor.prototype.om$core$ITransact$_transact_BANG_$arity$4 = (function (this$,korks,f,tag){
var self__ = this;
var this$__$1 = this;
return om.core.transact_STAR_(self__.state,this$__$1,korks,f,tag);
});

om.core.MapCursor.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (_,k){
var self__ = this;
var ___$1 = this;
return cljs.core._contains_key_QMARK_(self__.value,k);
});

om.core.MapCursor.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (_,k,v){
var self__ = this;
var ___$1 = this;
return (new om.core.MapCursor(cljs.core._assoc(self__.value,k,v),self__.state,self__.path));
});

om.core.MapCursor.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if((cljs.core.count(self__.value) > (0))){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (this$__$1){
return (function (p__13996){
var vec__13997 = p__13996;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13997,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13997,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,om.core._derive(this$__$1,v,self__.state,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(self__.path,k))], null);
});})(this$__$1))
,self__.value);
} else {
return null;
}
});

om.core.MapCursor.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_,new_meta){
var self__ = this;
var ___$1 = this;
return (new om.core.MapCursor(cljs.core.with_meta(self__.value,new_meta),self__.state,self__.path));
});

om.core.MapCursor.prototype.cljs$core$ICollection$_conj$arity$2 = (function (_,o){
var self__ = this;
var ___$1 = this;
return (new om.core.MapCursor(cljs.core._conj(self__.value,o),self__.state,self__.path));
});

om.core.MapCursor.prototype.call = (function() {
var G__13998 = null;
var G__13998__2 = (function (self__,k){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return this$.cljs$core$ILookup$_lookup$arity$2(null,k);
});
var G__13998__3 = (function (self__,k,not_found){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return this$.cljs$core$ILookup$_lookup$arity$3(null,k,not_found);
});
G__13998 = function(self__,k,not_found){
switch(arguments.length){
case 2:
return G__13998__2.call(this,self__,k);
case 3:
return G__13998__3.call(this,self__,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__13998.cljs$core$IFn$_invoke$arity$2 = G__13998__2;
G__13998.cljs$core$IFn$_invoke$arity$3 = G__13998__3;
return G__13998;
})()
;

om.core.MapCursor.prototype.apply = (function (self__,args13995){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args13995)));
});

om.core.MapCursor.prototype.cljs$core$IFn$_invoke$arity$1 = (function (k){
var self__ = this;
var this$ = this;
return this$.cljs$core$ILookup$_lookup$arity$2(null,k);
});

om.core.MapCursor.prototype.cljs$core$IFn$_invoke$arity$2 = (function (k,not_found){
var self__ = this;
var this$ = this;
return this$.cljs$core$ILookup$_lookup$arity$3(null,k,not_found);
});

om.core.MapCursor.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$3((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(self__.state) : cljs.core.deref.call(null,self__.state)),self__.path,cljs.core.cst$kw$om$core_SLASH_invalid);
});

om.core.MapCursor.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$value,cljs.core.cst$sym$state,cljs.core.cst$sym$path], null);
});

om.core.MapCursor.cljs$lang$type = true;

om.core.MapCursor.cljs$lang$ctorStr = "om.core/MapCursor";

om.core.MapCursor.cljs$lang$ctorPrWriter = (function (this__5159__auto__,writer__5160__auto__,opt__5161__auto__){
return cljs.core._write(writer__5160__auto__,"om.core/MapCursor");
});

om.core.__GT_MapCursor = (function om$core$__GT_MapCursor(value,state,path){
return (new om.core.MapCursor(value,state,path));
});


/**
* @constructor
 * @implements {om.core.IValue}
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.ICollection}
 * @implements {om.core.ITransact}
 * @implements {cljs.core.IEmptyableCollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IStack}
 * @implements {om.core.ICursor}
 * @implements {cljs.core.IDeref}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.ISequential}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.ILookup}
*/
om.core.IndexedCursor = (function (value,state,path){
this.value = value;
this.state = state;
this.path = path;
this.cljs$lang$protocol_mask$partition0$ = 2180424479;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
om.core.IndexedCursor.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return cljs.core._nth.cljs$core$IFn$_invoke$arity$3(this$__$1,n,null);
});

om.core.IndexedCursor.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
return cljs.core._nth.cljs$core$IFn$_invoke$arity$3(this$__$1,n,not_found);
});

om.core.IndexedCursor.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (_,f,init){
var self__ = this;
var ___$1 = this;
return cljs.core._kv_reduce(self__.value,f,init);
});

om.core.IndexedCursor.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return om.core._derive(this$__$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(self__.value,n),self__.state,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(self__.path,n));
});

om.core.IndexedCursor.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
if((n < cljs.core._count(self__.value))){
return om.core._derive(this$__$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$3(self__.value,n,not_found),self__.state,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(self__.path,n));
} else {
return not_found;
}
});

om.core.IndexedCursor.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (_,writer,opts){
var self__ = this;
var ___$1 = this;
return cljs.core._pr_writer(self__.value,writer,opts);
});

om.core.IndexedCursor.prototype.om$core$ICursor$ = true;

om.core.IndexedCursor.prototype.om$core$ICursor$_path$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.path;
});

om.core.IndexedCursor.prototype.om$core$ICursor$_state$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.state;
});

om.core.IndexedCursor.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.meta(self__.value);
});

om.core.IndexedCursor.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (new om.core.IndexedCursor(self__.value,self__.state,self__.path));
});

om.core.IndexedCursor.prototype.cljs$core$ICounted$_count$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core._count(self__.value);
});

om.core.IndexedCursor.prototype.cljs$core$IStack$_peek$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return om.core._derive(this$__$1,cljs.core._peek(self__.value),self__.state,self__.path);
});

om.core.IndexedCursor.prototype.cljs$core$IStack$_pop$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return om.core._derive(this$__$1,cljs.core._pop(self__.value),self__.state,self__.path);
});

om.core.IndexedCursor.prototype.cljs$core$IHash$_hash$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.hash(self__.value);
});

om.core.IndexedCursor.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (_,other){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(om.core.cursor_QMARK_(other))){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.value,om.core._value(other));
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.value,other);
}
});

om.core.IndexedCursor.prototype.om$core$IValue$ = true;

om.core.IndexedCursor.prototype.om$core$IValue$_value$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.value;
});

om.core.IndexedCursor.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (new om.core.IndexedCursor(cljs.core.empty(self__.value),self__.state,self__.path));
});

om.core.IndexedCursor.prototype.om$core$ITransact$ = true;

om.core.IndexedCursor.prototype.om$core$ITransact$_transact_BANG_$arity$4 = (function (this$,korks,f,tag){
var self__ = this;
var this$__$1 = this;
return om.core.transact_STAR_(self__.state,this$__$1,korks,f,tag);
});

om.core.IndexedCursor.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (_,k){
var self__ = this;
var ___$1 = this;
return cljs.core._contains_key_QMARK_(self__.value,k);
});

om.core.IndexedCursor.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this$,n,v){
var self__ = this;
var this$__$1 = this;
return om.core._derive(this$__$1,cljs.core._assoc_n(self__.value,n,v),self__.state,self__.path);
});

om.core.IndexedCursor.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if((cljs.core.count(self__.value) > (0))){
return cljs.core.map.cljs$core$IFn$_invoke$arity$3(((function (this$__$1){
return (function (v,i){
return om.core._derive(this$__$1,v,self__.state,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(self__.path,i));
});})(this$__$1))
,self__.value,cljs.core.range.cljs$core$IFn$_invoke$arity$0());
} else {
return null;
}
});

om.core.IndexedCursor.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_,new_meta){
var self__ = this;
var ___$1 = this;
return (new om.core.IndexedCursor(cljs.core.with_meta(self__.value,new_meta),self__.state,self__.path));
});

om.core.IndexedCursor.prototype.cljs$core$ICollection$_conj$arity$2 = (function (_,o){
var self__ = this;
var ___$1 = this;
return (new om.core.IndexedCursor(cljs.core._conj(self__.value,o),self__.state,self__.path));
});

om.core.IndexedCursor.prototype.call = (function() {
var G__14000 = null;
var G__14000__2 = (function (self__,k){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return this$.cljs$core$ILookup$_lookup$arity$2(null,k);
});
var G__14000__3 = (function (self__,k,not_found){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return this$.cljs$core$ILookup$_lookup$arity$3(null,k,not_found);
});
G__14000 = function(self__,k,not_found){
switch(arguments.length){
case 2:
return G__14000__2.call(this,self__,k);
case 3:
return G__14000__3.call(this,self__,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__14000.cljs$core$IFn$_invoke$arity$2 = G__14000__2;
G__14000.cljs$core$IFn$_invoke$arity$3 = G__14000__3;
return G__14000;
})()
;

om.core.IndexedCursor.prototype.apply = (function (self__,args13999){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args13999)));
});

om.core.IndexedCursor.prototype.cljs$core$IFn$_invoke$arity$1 = (function (k){
var self__ = this;
var this$ = this;
return this$.cljs$core$ILookup$_lookup$arity$2(null,k);
});

om.core.IndexedCursor.prototype.cljs$core$IFn$_invoke$arity$2 = (function (k,not_found){
var self__ = this;
var this$ = this;
return this$.cljs$core$ILookup$_lookup$arity$3(null,k,not_found);
});

om.core.IndexedCursor.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$3((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(self__.state) : cljs.core.deref.call(null,self__.state)),self__.path,cljs.core.cst$kw$om$core_SLASH_invalid);
});

om.core.IndexedCursor.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$value,cljs.core.cst$sym$state,cljs.core.cst$sym$path], null);
});

om.core.IndexedCursor.cljs$lang$type = true;

om.core.IndexedCursor.cljs$lang$ctorStr = "om.core/IndexedCursor";

om.core.IndexedCursor.cljs$lang$ctorPrWriter = (function (this__5159__auto__,writer__5160__auto__,opt__5161__auto__){
return cljs.core._write(writer__5160__auto__,"om.core/IndexedCursor");
});

om.core.__GT_IndexedCursor = (function om$core$__GT_IndexedCursor(value,state,path){
return (new om.core.IndexedCursor(value,state,path));
});

om.core.to_cursor_STAR_ = (function om$core$to_cursor_STAR_(val,state,path){
var x14002 = cljs.core.clone(val);
x14002.cljs$core$IDeref$ = true;

x14002.cljs$core$IDeref$_deref$arity$1 = ((function (x14002){
return (function (this$){
var this$__$1 = this;
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$3((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(state) : cljs.core.deref.call(null,state)),path,cljs.core.cst$kw$om$core_SLASH_invalid);
});})(x14002))
;

x14002.om$core$ICursor$ = true;

x14002.om$core$ICursor$_path$arity$1 = ((function (x14002){
return (function (_){
var ___$1 = this;
return path;
});})(x14002))
;

x14002.om$core$ICursor$_state$arity$1 = ((function (x14002){
return (function (_){
var ___$1 = this;
return state;
});})(x14002))
;

x14002.om$core$ITransact$ = true;

x14002.om$core$ITransact$_transact_BANG_$arity$4 = ((function (x14002){
return (function (this$,korks,f,tag){
var this$__$1 = this;
return om.core.transact_STAR_(state,this$__$1,korks,f,tag);
});})(x14002))
;

x14002.cljs$core$IEquiv$ = true;

x14002.cljs$core$IEquiv$_equiv$arity$2 = ((function (x14002){
return (function (_,other){
var ___$1 = this;
if(cljs.core.truth_(om.core.cursor_QMARK_(other))){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(val,om.core._value(other));
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(val,other);
}
});})(x14002))
;

return x14002;
});
om.core.to_cursor = (function om$core$to_cursor(var_args){
var args14003 = [];
var len__5619__auto___14008 = arguments.length;
var i__5620__auto___14009 = (0);
while(true){
if((i__5620__auto___14009 < len__5619__auto___14008)){
args14003.push((arguments[i__5620__auto___14009]));

var G__14010 = (i__5620__auto___14009 + (1));
i__5620__auto___14009 = G__14010;
continue;
} else {
}
break;
}

var G__14005 = args14003.length;
switch (G__14005) {
case 1:
return om.core.to_cursor.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om.core.to_cursor.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.core.to_cursor.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14003.length)].join('')));

}
});

om.core.to_cursor.cljs$core$IFn$_invoke$arity$1 = (function (val){
return om.core.to_cursor.cljs$core$IFn$_invoke$arity$3(val,null,cljs.core.PersistentVector.EMPTY);
});

om.core.to_cursor.cljs$core$IFn$_invoke$arity$2 = (function (val,state){
return om.core.to_cursor.cljs$core$IFn$_invoke$arity$3(val,state,cljs.core.PersistentVector.EMPTY);
});

om.core.to_cursor.cljs$core$IFn$_invoke$arity$3 = (function (val,state,path){
if(cljs.core.truth_(om.core.cursor_QMARK_(val))){
return val;
} else {
if(((!((val == null)))?(((false) || (val.om$core$IToCursor$))?true:(((!val.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(om.core.IToCursor,val):false)):cljs.core.native_satisfies_QMARK_(om.core.IToCursor,val))){
return om.core._to_cursor.cljs$core$IFn$_invoke$arity$3(val,state,path);
} else {
if(cljs.core.indexed_QMARK_(val)){
return (new om.core.IndexedCursor(val,state,path));
} else {
if(cljs.core.map_QMARK_(val)){
return (new om.core.MapCursor(val,state,path));
} else {
if(((!((val == null)))?((((val.cljs$lang$protocol_mask$partition1$ & (8192))) || (val.cljs$core$ICloneable$))?true:(((!val.cljs$lang$protocol_mask$partition1$))?cljs.core.native_satisfies_QMARK_(cljs.core.ICloneable,val):false)):cljs.core.native_satisfies_QMARK_(cljs.core.ICloneable,val))){
return om.core.to_cursor_STAR_(val,state,path);
} else {
return val;

}
}
}
}
}
});

om.core.to_cursor.cljs$lang$maxFixedArity = 3;
om.core.notify_STAR_ = (function om$core$notify_STAR_(cursor,tx_data){
var state = om.core._state(cursor);
return om.core._notify_BANG_(state,tx_data,om.core.to_cursor.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(state) : cljs.core.deref.call(null,state)),state));
});
om.core.commit_BANG_;

om.core.id;

om.core.refresh_props_BANG_;
/**
 * Given an application state atom return a root cursor for it.
 */
om.core.root_cursor = (function om$core$root_cursor(atom){
if(((!((atom == null)))?((((atom.cljs$lang$protocol_mask$partition0$ & (32768))) || (atom.cljs$core$IDeref$))?true:(((!atom.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,atom):false)):cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,atom))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(cljs.core.cst$sym$satisfies_QMARK_,cljs.core.cst$sym$IDeref,cljs.core.cst$sym$atom)], 0)))].join('')));
}

return om.core.to_cursor.cljs$core$IFn$_invoke$arity$3((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(atom) : cljs.core.deref.call(null,atom)),atom,cljs.core.PersistentVector.EMPTY);
});
om.core._refs = (function (){var G__14014 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__14014) : cljs.core.atom.call(null,G__14014));
})();
om.core.ref_sub_cursor = (function om$core$ref_sub_cursor(x,parent){
var x14020 = cljs.core.clone(x);
x14020.cljs$core$ICloneable$ = true;

x14020.cljs$core$ICloneable$_clone$arity$1 = ((function (x14020){
return (function (this$){
var this$__$1 = this;
return om$core$ref_sub_cursor(cljs.core.clone(x),parent);
});})(x14020))
;

x14020.om$core$IAdapt$ = true;

x14020.om$core$IAdapt$_adapt$arity$2 = ((function (x14020){
return (function (this$,other){
var this$__$1 = this;
return om$core$ref_sub_cursor(om.core.adapt(x,other),parent);
});})(x14020))
;

x14020.om$core$ICursorDerive$ = true;

x14020.om$core$ICursorDerive$_derive$arity$4 = ((function (x14020){
return (function (this$,derived,state,path){
var this$__$1 = this;
var cursor_SINGLEQUOTE_ = om.core.to_cursor.cljs$core$IFn$_invoke$arity$3(derived,state,path);
if(cljs.core.truth_(om.core.cursor_QMARK_(cursor_SINGLEQUOTE_))){
return om.core.adapt(this$__$1,cursor_SINGLEQUOTE_);
} else {
return cursor_SINGLEQUOTE_;
}
});})(x14020))
;

x14020.om$core$ITransact$ = true;

x14020.om$core$ITransact$_transact_BANG_$arity$4 = ((function (x14020){
return (function (cursor,korks,f,tag){
var cursor__$1 = this;
(om.core.commit_BANG_.cljs$core$IFn$_invoke$arity$3 ? om.core.commit_BANG_.cljs$core$IFn$_invoke$arity$3(cursor__$1,korks,f) : om.core.commit_BANG_.call(null,cursor__$1,korks,f));

return om.core._refresh_deps_BANG_(parent);
});})(x14020))
;

return x14020;
});
om.core.ref_cursor_QMARK_ = (function om$core$ref_cursor_QMARK_(x){
if(!((x == null))){
if((false) || (x.om$core$IOmRef$)){
return true;
} else {
if((!x.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(om.core.IOmRef,x);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(om.core.IOmRef,x);
}
});
/**
 * Given a cursor return a reference cursor that inherits all of the
 *   properties and methods of the cursor. Reference cursors may be
 *   observed via om.core/observe.
 */
om.core.ref_cursor = (function om$core$ref_cursor(cursor){
if(cljs.core.truth_(om.core.cursor_QMARK_(cursor))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(cljs.core.cst$sym$cursor_QMARK_,cljs.core.cst$sym$cursor)], 0)))].join('')));
}

if(cljs.core.truth_(om.core.ref_cursor_QMARK_(cursor))){
return cursor;
} else {
var path = om.core.path(cursor);
var storage = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(om.core._refs,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [path], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,(function (){var G__14029 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__14029) : cljs.core.atom.call(null,G__14029));
})())),path);
var x14030 = cljs.core.clone(cursor);
x14030.om$core$ICursorDerive$ = true;

x14030.om$core$ICursorDerive$_derive$arity$4 = ((function (x14030,path,storage){
return (function (this$,derived,state,path__$1){
var this$__$1 = this;
var cursor_SINGLEQUOTE_ = om.core.to_cursor.cljs$core$IFn$_invoke$arity$3(derived,state,path__$1);
if(cljs.core.truth_(om.core.cursor_QMARK_(cursor_SINGLEQUOTE_))){
return om.core.ref_sub_cursor(cursor_SINGLEQUOTE_,this$__$1);
} else {
return cursor_SINGLEQUOTE_;
}
});})(x14030,path,storage))
;

x14030.om$core$IOmRef$ = true;

x14030.om$core$IOmRef$_add_dep_BANG_$arity$2 = ((function (x14030,path,storage){
return (function (_,c){
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(storage,cljs.core.assoc,(om.core.id.cljs$core$IFn$_invoke$arity$1 ? om.core.id.cljs$core$IFn$_invoke$arity$1(c) : om.core.id.call(null,c)),c);
});})(x14030,path,storage))
;

x14030.om$core$IOmRef$_remove_dep_BANG_$arity$2 = ((function (x14030,path,storage){
return (function (_,c){
var ___$1 = this;
var m = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(storage,cljs.core.dissoc,(om.core.id.cljs$core$IFn$_invoke$arity$1 ? om.core.id.cljs$core$IFn$_invoke$arity$1(c) : om.core.id.call(null,c)));
if((cljs.core.count(m) === (0))){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(om.core._refs,cljs.core.dissoc,path);
} else {
return null;
}
});})(x14030,path,storage))
;

x14030.om$core$IOmRef$_refresh_deps_BANG_$arity$1 = ((function (x14030,path,storage){
return (function (_){
var ___$1 = this;
var seq__14031 = cljs.core.seq(cljs.core.vals((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(storage) : cljs.core.deref.call(null,storage))));
var chunk__14032 = null;
var count__14033 = (0);
var i__14034 = (0);
while(true){
if((i__14034 < count__14033)){
var c = chunk__14032.cljs$core$IIndexed$_nth$arity$2(null,i__14034);
om.core._queue_render_BANG_(om.core.state(cursor),c);

var G__14035 = seq__14031;
var G__14036 = chunk__14032;
var G__14037 = count__14033;
var G__14038 = (i__14034 + (1));
seq__14031 = G__14035;
chunk__14032 = G__14036;
count__14033 = G__14037;
i__14034 = G__14038;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq(seq__14031);
if(temp__4425__auto__){
var seq__14031__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__14031__$1)){
var c__5364__auto__ = cljs.core.chunk_first(seq__14031__$1);
var G__14039 = cljs.core.chunk_rest(seq__14031__$1);
var G__14040 = c__5364__auto__;
var G__14041 = cljs.core.count(c__5364__auto__);
var G__14042 = (0);
seq__14031 = G__14039;
chunk__14032 = G__14040;
count__14033 = G__14041;
i__14034 = G__14042;
continue;
} else {
var c = cljs.core.first(seq__14031__$1);
om.core._queue_render_BANG_(om.core.state(cursor),c);

var G__14043 = cljs.core.next(seq__14031__$1);
var G__14044 = null;
var G__14045 = (0);
var G__14046 = (0);
seq__14031 = G__14043;
chunk__14032 = G__14044;
count__14033 = G__14045;
i__14034 = G__14046;
continue;
}
} else {
return null;
}
}
break;
}
});})(x14030,path,storage))
;

x14030.om$core$IOmRef$_get_deps$arity$1 = ((function (x14030,path,storage){
return (function (_){
var ___$1 = this;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(storage) : cljs.core.deref.call(null,storage));
});})(x14030,path,storage))
;

x14030.om$core$ITransact$ = true;

x14030.om$core$ITransact$_transact_BANG_$arity$4 = ((function (x14030,path,storage){
return (function (cursor__$1,korks,f,tag){
var cursor__$2 = this;
(om.core.commit_BANG_.cljs$core$IFn$_invoke$arity$3 ? om.core.commit_BANG_.cljs$core$IFn$_invoke$arity$3(cursor__$2,korks,f) : om.core.commit_BANG_.call(null,cursor__$2,korks,f));

return om.core._refresh_deps_BANG_(cursor__$2);
});})(x14030,path,storage))
;

return x14030;
}
});
om.core.add_ref_to_component_BANG_ = (function om$core$add_ref_to_component_BANG_(c,ref){
var state = c.state;
var refs = (function (){var or__4561__auto__ = (state["__om_refs"]);
if(cljs.core.truth_(or__4561__auto__)){
return or__4561__auto__;
} else {
return cljs.core.PersistentHashSet.EMPTY;
}
})();
if(cljs.core.contains_QMARK_(refs,ref)){
return null;
} else {
return (state["__om_refs"] = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(refs,ref));
}
});
om.core.remove_ref_from_component_BANG_ = (function om$core$remove_ref_from_component_BANG_(c,ref){
var state = c.state;
var refs = (state["__om_refs"]);
if(cljs.core.contains_QMARK_(refs,ref)){
return (state["__om_refs"] = cljs.core.disj.cljs$core$IFn$_invoke$arity$2(refs,ref));
} else {
return null;
}
});
/**
 * Given a component and a reference cursor have the component observe
 *   the reference cursor for any data changes.
 */
om.core.observe = (function om$core$observe(c,ref){
if(cljs.core.truth_(om.core.component_QMARK_(c))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(cljs.core.cst$sym$component_QMARK_,cljs.core.cst$sym$c)], 0)))].join('')));
}

if(cljs.core.truth_(om.core.cursor_QMARK_(ref))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(cljs.core.cst$sym$cursor_QMARK_,cljs.core.cst$sym$ref)], 0)))].join('')));
}

if(cljs.core.truth_(om.core.ref_cursor_QMARK_(ref))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(cljs.core.cst$sym$ref_DASH_cursor_QMARK_,cljs.core.cst$sym$ref)], 0)))].join('')));
}

om.core.add_ref_to_component_BANG_(c,ref);

om.core._add_dep_BANG_(ref,c);

return ref;
});
om.core.unobserve = (function om$core$unobserve(c,ref){
om.core.remove_ref_from_component_BANG_(c,ref);

om.core._remove_dep_BANG_(ref,c);

return ref;
});
om.core.refresh_queued = false;
om.core.refresh_set = (function (){var G__14047 = cljs.core.PersistentHashSet.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__14047) : cljs.core.atom.call(null,G__14047));
})();
om.core.get_renderT = (function om$core$get_renderT(state){
var or__4561__auto__ = state.om$render$T;
if(cljs.core.truth_(or__4561__auto__)){
return or__4561__auto__;
} else {
return (0);
}
});
/**
 * Force a render of *all* roots. Usage of this function is almost
 *   never recommended.
 */
om.core.render_all = (function om$core$render_all(var_args){
var args14048 = [];
var len__5619__auto___14055 = arguments.length;
var i__5620__auto___14056 = (0);
while(true){
if((i__5620__auto___14056 < len__5619__auto___14055)){
args14048.push((arguments[i__5620__auto___14056]));

var G__14057 = (i__5620__auto___14056 + (1));
i__5620__auto___14056 = G__14057;
continue;
} else {
}
break;
}

var G__14050 = args14048.length;
switch (G__14050) {
case 0:
return om.core.render_all.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return om.core.render_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14048.length)].join('')));

}
});

om.core.render_all.cljs$core$IFn$_invoke$arity$0 = (function (){
return om.core.render_all.cljs$core$IFn$_invoke$arity$1(null);
});

om.core.render_all.cljs$core$IFn$_invoke$arity$1 = (function (state){
om.core.refresh_queued = false;

var seq__14051_14059 = cljs.core.seq((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(om.core.refresh_set) : cljs.core.deref.call(null,om.core.refresh_set)));
var chunk__14052_14060 = null;
var count__14053_14061 = (0);
var i__14054_14062 = (0);
while(true){
if((i__14054_14062 < count__14053_14061)){
var f_14063 = chunk__14052_14060.cljs$core$IIndexed$_nth$arity$2(null,i__14054_14062);
(f_14063.cljs$core$IFn$_invoke$arity$0 ? f_14063.cljs$core$IFn$_invoke$arity$0() : f_14063.call(null));

var G__14064 = seq__14051_14059;
var G__14065 = chunk__14052_14060;
var G__14066 = count__14053_14061;
var G__14067 = (i__14054_14062 + (1));
seq__14051_14059 = G__14064;
chunk__14052_14060 = G__14065;
count__14053_14061 = G__14066;
i__14054_14062 = G__14067;
continue;
} else {
var temp__4425__auto___14068 = cljs.core.seq(seq__14051_14059);
if(temp__4425__auto___14068){
var seq__14051_14069__$1 = temp__4425__auto___14068;
if(cljs.core.chunked_seq_QMARK_(seq__14051_14069__$1)){
var c__5364__auto___14070 = cljs.core.chunk_first(seq__14051_14069__$1);
var G__14071 = cljs.core.chunk_rest(seq__14051_14069__$1);
var G__14072 = c__5364__auto___14070;
var G__14073 = cljs.core.count(c__5364__auto___14070);
var G__14074 = (0);
seq__14051_14059 = G__14071;
chunk__14052_14060 = G__14072;
count__14053_14061 = G__14073;
i__14054_14062 = G__14074;
continue;
} else {
var f_14075 = cljs.core.first(seq__14051_14069__$1);
(f_14075.cljs$core$IFn$_invoke$arity$0 ? f_14075.cljs$core$IFn$_invoke$arity$0() : f_14075.call(null));

var G__14076 = cljs.core.next(seq__14051_14069__$1);
var G__14077 = null;
var G__14078 = (0);
var G__14079 = (0);
seq__14051_14059 = G__14076;
chunk__14052_14060 = G__14077;
count__14053_14061 = G__14078;
i__14054_14062 = G__14079;
continue;
}
} else {
}
}
break;
}

if((state == null)){
return null;
} else {
return state.om$render$T = (om.core.get_renderT(state) + (1));
}
});

om.core.render_all.cljs$lang$maxFixedArity = 1;
om.core.roots = (function (){var G__14080 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__14080) : cljs.core.atom.call(null,G__14080));
})();
om.core.valid_component_QMARK_ = (function om$core$valid_component_QMARK_(x,f){
if((function (){var or__4561__auto__ = ((!((x == null)))?(((false) || (x.om$core$IRender$))?true:(((!x.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(om.core.IRender,x):false)):cljs.core.native_satisfies_QMARK_(om.core.IRender,x));
if(or__4561__auto__){
return or__4561__auto__;
} else {
var or__4561__auto____$1 = ((!((x == null)))?(((false) || (x.om$core$IRenderProps$))?true:(((!x.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(om.core.IRenderProps,x):false)):cljs.core.native_satisfies_QMARK_(om.core.IRenderProps,x));
if(or__4561__auto____$1){
return or__4561__auto____$1;
} else {
if(!((x == null))){
if((false) || (x.om$core$IRenderState$)){
return true;
} else {
if((!x.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(om.core.IRenderState,x);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(om.core.IRenderState,x);
}
}
}
})()){
return null;
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("Invalid Om component fn, "),cljs.core.str(f.name),cljs.core.str(" does not return valid instance")].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(cljs.core.cst$sym$or,cljs.core.list(cljs.core.cst$sym$satisfies_QMARK_,cljs.core.cst$sym$IRender,cljs.core.cst$sym$x),cljs.core.list(cljs.core.cst$sym$satisfies_QMARK_,cljs.core.cst$sym$IRenderProps,cljs.core.cst$sym$x),cljs.core.list(cljs.core.cst$sym$satisfies_QMARK_,cljs.core.cst$sym$IRenderState,cljs.core.cst$sym$x))], 0)))].join('')));
}
});
om.core.valid_opts_QMARK_ = (function om$core$valid_opts_QMARK_(m){
return cljs.core.every_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 11, [cljs.core.cst$kw$descriptor,null,cljs.core.cst$kw$fn,null,cljs.core.cst$kw$instrument,null,cljs.core.cst$kw$react_DASH_key,null,cljs.core.cst$kw$key,null,cljs.core.cst$kw$init_DASH_state,null,cljs.core.cst$kw$state,null,cljs.core.cst$kw$key_DASH_fn,null,cljs.core.cst$kw$opts,null,cljs.core.cst$kw$om$core_SLASH_index,null,cljs.core.cst$kw$shared,null], null), null),cljs.core.keys(m));
});
om.core.id = (function om$core$id(owner){
return (owner.state["__om_id"]);
});
om.core.get_descriptor = (function om$core$get_descriptor(var_args){
var args14091 = [];
var len__5619__auto___14095 = arguments.length;
var i__5620__auto___14096 = (0);
while(true){
if((i__5620__auto___14096 < len__5619__auto___14095)){
args14091.push((arguments[i__5620__auto___14096]));

var G__14097 = (i__5620__auto___14096 + (1));
i__5620__auto___14096 = G__14097;
continue;
} else {
}
break;
}

var G__14093 = args14091.length;
switch (G__14093) {
case 1:
return om.core.get_descriptor.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om.core.get_descriptor.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14091.length)].join('')));

}
});

om.core.get_descriptor.cljs$core$IFn$_invoke$arity$1 = (function (f){
return om.core.get_descriptor.cljs$core$IFn$_invoke$arity$2(f,null);
});

om.core.get_descriptor.cljs$core$IFn$_invoke$arity$2 = (function (f,descriptor){
var rdesc_14099 = (function (){var or__4561__auto__ = descriptor;
if(cljs.core.truth_(or__4561__auto__)){
return or__4561__auto__;
} else {
var or__4561__auto____$1 = om.core._STAR_descriptor_STAR_;
if(cljs.core.truth_(or__4561__auto____$1)){
return or__4561__auto____$1;
} else {
return om.core.pure_descriptor;
}
}
})();
if(((goog.object.get(f,"om$descriptor") == null)) || (!((rdesc_14099 === goog.object.get(f,"om$tag"))))){
var factory_14100 = (function (){var G__14094 = React.createClass(rdesc_14099);
return React.createFactory(G__14094);
})();
goog.object.set(f,"om$descriptor",factory_14100);

goog.object.set(f,"om$tag",rdesc_14099);
} else {
}

return goog.object.get(f,"om$descriptor");
});

om.core.get_descriptor.cljs$lang$maxFixedArity = 2;
om.core.getf = (function om$core$getf(var_args){
var args14101 = [];
var len__5619__auto___14104 = arguments.length;
var i__5620__auto___14105 = (0);
while(true){
if((i__5620__auto___14105 < len__5619__auto___14104)){
args14101.push((arguments[i__5620__auto___14105]));

var G__14106 = (i__5620__auto___14105 + (1));
i__5620__auto___14105 = G__14106;
continue;
} else {
}
break;
}

var G__14103 = args14101.length;
switch (G__14103) {
case 2:
return om.core.getf.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.core.getf.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14101.length)].join('')));

}
});

om.core.getf.cljs$core$IFn$_invoke$arity$2 = (function (f,cursor){
if((f instanceof cljs.core.MultiFn)){
var dv = f.dispatch_fn.call(null,cursor,null);
return cljs.core.get_method(f,dv);
} else {
return f;
}
});

om.core.getf.cljs$core$IFn$_invoke$arity$3 = (function (f,cursor,opts){
if((f instanceof cljs.core.MultiFn)){
var dv = f.dispatch_fn.call(null,cursor,null,opts);
return cljs.core.get_method(f,dv);
} else {
return f;
}
});

om.core.getf.cljs$lang$maxFixedArity = 3;
om.core.build_STAR_ = (function om$core$build_STAR_(var_args){
var args14108 = [];
var len__5619__auto___14115 = arguments.length;
var i__5620__auto___14116 = (0);
while(true){
if((i__5620__auto___14116 < len__5619__auto___14115)){
args14108.push((arguments[i__5620__auto___14116]));

var G__14117 = (i__5620__auto___14116 + (1));
i__5620__auto___14116 = G__14117;
continue;
} else {
}
break;
}

var G__14110 = args14108.length;
switch (G__14110) {
case 2:
return om.core.build_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.core.build_STAR_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14108.length)].join('')));

}
});

om.core.build_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (f,cursor){
return om.core.build_STAR_.cljs$core$IFn$_invoke$arity$3(f,cursor,null);
});

om.core.build_STAR_.cljs$core$IFn$_invoke$arity$3 = (function (f,cursor,m){
if(cljs.core.ifn_QMARK_(f)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(cljs.core.cst$sym$ifn_QMARK_,cljs.core.cst$sym$f)], 0)))].join('')));
}

if(((m == null)) || (cljs.core.map_QMARK_(m))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(cljs.core.cst$sym$or,cljs.core.list(cljs.core.cst$sym$nil_QMARK_,cljs.core.cst$sym$m),cljs.core.list(cljs.core.cst$sym$map_QMARK_,cljs.core.cst$sym$m))], 0)))].join('')));
}

if(cljs.core.truth_(om.core.valid_opts_QMARK_(m))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.str,"build options contains invalid keys, only :key, :key-fn :react-key, ",":fn, :init-state, :state, and :opts allowed, given ",cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(", ",cljs.core.keys(m)))),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(cljs.core.cst$sym$valid_DASH_opts_QMARK_,cljs.core.cst$sym$m)], 0)))].join('')));
}

if((m == null)){
var shared = om.core.get_shared.cljs$core$IFn$_invoke$arity$1(om.core._STAR_parent_STAR_);
var ctor = om.core.get_descriptor.cljs$core$IFn$_invoke$arity$1(om.core.getf.cljs$core$IFn$_invoke$arity$2(f,cursor));
var G__14111 = {"__om_cursor": cursor, "__om_shared": shared, "__om_root_key": om.core._STAR_root_key_STAR_, "__om_app_state": om.core._STAR_state_STAR_, "__om_descriptor": om.core._STAR_descriptor_STAR_, "__om_instrument": om.core._STAR_instrument_STAR_, "children": ((function (shared,ctor){
return (function (this$){
var ret = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(cursor,this$) : f.call(null,cursor,this$));
om.core.valid_component_QMARK_(ret,f);

return ret;
});})(shared,ctor))
};
return (ctor.cljs$core$IFn$_invoke$arity$1 ? ctor.cljs$core$IFn$_invoke$arity$1(G__14111) : ctor.call(null,G__14111));
} else {
var map__14112 = m;
var map__14112__$1 = ((((!((map__14112 == null)))?((((map__14112.cljs$lang$protocol_mask$partition0$ & (64))) || (map__14112.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14112):map__14112);
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14112__$1,cljs.core.cst$kw$key);
var key_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14112__$1,cljs.core.cst$kw$key_DASH_fn);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14112__$1,cljs.core.cst$kw$state);
var init_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14112__$1,cljs.core.cst$kw$init_DASH_state);
var opts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14112__$1,cljs.core.cst$kw$opts);
var dataf = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,cljs.core.cst$kw$fn);
var cursor_SINGLEQUOTE_ = ((!((dataf == null)))?(function (){var temp__4423__auto__ = cljs.core.cst$kw$om$core_SLASH_index.cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4423__auto__)){
var i = temp__4423__auto__;
return (dataf.cljs$core$IFn$_invoke$arity$2 ? dataf.cljs$core$IFn$_invoke$arity$2(cursor,i) : dataf.call(null,cursor,i));
} else {
return (dataf.cljs$core$IFn$_invoke$arity$1 ? dataf.cljs$core$IFn$_invoke$arity$1(cursor) : dataf.call(null,cursor));
}
})():cursor);
var rkey = ((!((key == null)))?cljs.core.get.cljs$core$IFn$_invoke$arity$2(cursor_SINGLEQUOTE_,key):((!((key_fn == null)))?(key_fn.cljs$core$IFn$_invoke$arity$1 ? key_fn.cljs$core$IFn$_invoke$arity$1(cursor_SINGLEQUOTE_) : key_fn.call(null,cursor_SINGLEQUOTE_)):cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,cljs.core.cst$kw$react_DASH_key)
));
var shared = (function (){var or__4561__auto__ = cljs.core.cst$kw$shared.cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4561__auto__)){
return or__4561__auto__;
} else {
return om.core.get_shared.cljs$core$IFn$_invoke$arity$1(om.core._STAR_parent_STAR_);
}
})();
var ctor = om.core.get_descriptor.cljs$core$IFn$_invoke$arity$2(om.core.getf.cljs$core$IFn$_invoke$arity$3(f,cursor_SINGLEQUOTE_,opts),cljs.core.cst$kw$descriptor.cljs$core$IFn$_invoke$arity$1(m));
var G__14114 = {"__om_state": state, "__om_instrument": om.core._STAR_instrument_STAR_, "children": (((opts == null))?((function (map__14112,map__14112__$1,key,key_fn,state,init_state,opts,dataf,cursor_SINGLEQUOTE_,rkey,shared,ctor){
return (function (this$){
var ret = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(cursor_SINGLEQUOTE_,this$) : f.call(null,cursor_SINGLEQUOTE_,this$));
om.core.valid_component_QMARK_(ret,f);

return ret;
});})(map__14112,map__14112__$1,key,key_fn,state,init_state,opts,dataf,cursor_SINGLEQUOTE_,rkey,shared,ctor))
:((function (map__14112,map__14112__$1,key,key_fn,state,init_state,opts,dataf,cursor_SINGLEQUOTE_,rkey,shared,ctor){
return (function (this$){
var ret = (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(cursor_SINGLEQUOTE_,this$,opts) : f.call(null,cursor_SINGLEQUOTE_,this$,opts));
om.core.valid_component_QMARK_(ret,f);

return ret;
});})(map__14112,map__14112__$1,key,key_fn,state,init_state,opts,dataf,cursor_SINGLEQUOTE_,rkey,shared,ctor))
), "__om_init_state": init_state, "key": (function (){var or__4561__auto__ = rkey;
if(cljs.core.truth_(or__4561__auto__)){
return or__4561__auto__;
} else {
return undefined;
}
})(), "__om_app_state": om.core._STAR_state_STAR_, "__om_cursor": cursor_SINGLEQUOTE_, "__om_index": cljs.core.cst$kw$om$core_SLASH_index.cljs$core$IFn$_invoke$arity$1(m), "__om_shared": shared, "__om_descriptor": om.core._STAR_descriptor_STAR_, "__om_root_key": om.core._STAR_root_key_STAR_};
return (ctor.cljs$core$IFn$_invoke$arity$1 ? ctor.cljs$core$IFn$_invoke$arity$1(G__14114) : ctor.call(null,G__14114));

}
});

om.core.build_STAR_.cljs$lang$maxFixedArity = 3;
/**
 * Builds an Om component. Takes an IRender/IRenderState instance
 * returning function f, a value, and an optional third argument
 * which may be a map of build specifications.
 * 
 * f - is a function of 2 or 3 arguments. The first argument can be
 * any value and the second argument will be the owning pure node.
 * If a map of options m is passed in this will be the third
 * argument. f must return at a minimum an IRender or IRenderState
 * instance, this instance may implement other React life cycle
 * protocols.
 * 
 * x - any value
 * 
 * m - a map the following keys are allowed:
 * 
 *   :key        - a keyword that should be used to look up the key used by
 *                 React itself when rendering sequential things.
 *   :react-key  - an explicit react key
 *   :fn         - a function to apply to the data before invoking f.
 *   :init-state - a map of initial state to pass to the component.
 *   :state      - a map of state to pass to the component, will be merged in.
 *   :opts       - a map of values. Can be used to pass side information down
 *                 the render tree.
 *   :descriptor - a JS object of React methods, will be used to
 *                 construct a React class per Om component function
 *                 encountered. defaults to pure-descriptor.
 * 
 * Example:
 * 
 *   (build list-of-gadgets x
 *      {:init-state {:event-chan ...
 *                    :narble ...}})
 *   
 */
om.core.build = (function om$core$build(var_args){
var args14119 = [];
var len__5619__auto___14122 = arguments.length;
var i__5620__auto___14123 = (0);
while(true){
if((i__5620__auto___14123 < len__5619__auto___14122)){
args14119.push((arguments[i__5620__auto___14123]));

var G__14124 = (i__5620__auto___14123 + (1));
i__5620__auto___14123 = G__14124;
continue;
} else {
}
break;
}

var G__14121 = args14119.length;
switch (G__14121) {
case 2:
return om.core.build.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.core.build.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14119.length)].join('')));

}
});

om.core.build.cljs$core$IFn$_invoke$arity$2 = (function (f,x){
return om.core.build.cljs$core$IFn$_invoke$arity$3(f,x,null);
});

om.core.build.cljs$core$IFn$_invoke$arity$3 = (function (f,x,m){
if(cljs.core.ifn_QMARK_(f)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(cljs.core.cst$sym$ifn_QMARK_,cljs.core.cst$sym$f)], 0)))].join('')));
}

if(((m == null)) || (cljs.core.map_QMARK_(m))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(cljs.core.cst$sym$or,cljs.core.list(cljs.core.cst$sym$nil_QMARK_,cljs.core.cst$sym$m),cljs.core.list(cljs.core.cst$sym$map_QMARK_,cljs.core.cst$sym$m))], 0)))].join('')));
}

if(!((om.core._STAR_instrument_STAR_ == null))){
var ret = (om.core._STAR_instrument_STAR_.cljs$core$IFn$_invoke$arity$3 ? om.core._STAR_instrument_STAR_.cljs$core$IFn$_invoke$arity$3(f,x,m) : om.core._STAR_instrument_STAR_.call(null,f,x,m));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ret,cljs.core.cst$kw$om$core_SLASH_pass)){
return om.core.build_STAR_.cljs$core$IFn$_invoke$arity$3(f,x,m);
} else {
return ret;
}
} else {
return om.core.build_STAR_.cljs$core$IFn$_invoke$arity$3(f,x,m);
}
});

om.core.build.cljs$lang$maxFixedArity = 3;
/**
 * Build a sequence of components. f is the component constructor
 * function, xs a sequence of values, and m a map of options the
 * same as provided to om.core/build.
 */
om.core.build_all = (function om$core$build_all(var_args){
var args14126 = [];
var len__5619__auto___14129 = arguments.length;
var i__5620__auto___14130 = (0);
while(true){
if((i__5620__auto___14130 < len__5619__auto___14129)){
args14126.push((arguments[i__5620__auto___14130]));

var G__14131 = (i__5620__auto___14130 + (1));
i__5620__auto___14130 = G__14131;
continue;
} else {
}
break;
}

var G__14128 = args14126.length;
switch (G__14128) {
case 2:
return om.core.build_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.core.build_all.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14126.length)].join('')));

}
});

om.core.build_all.cljs$core$IFn$_invoke$arity$2 = (function (f,xs){
return om.core.build_all.cljs$core$IFn$_invoke$arity$3(f,xs,null);
});

om.core.build_all.cljs$core$IFn$_invoke$arity$3 = (function (f,xs,m){
if(cljs.core.ifn_QMARK_(f)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(cljs.core.cst$sym$ifn_QMARK_,cljs.core.cst$sym$f)], 0)))].join('')));
}

if(((m == null)) || (cljs.core.map_QMARK_(m))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(cljs.core.cst$sym$or,cljs.core.list(cljs.core.cst$sym$nil_QMARK_,cljs.core.cst$sym$m),cljs.core.list(cljs.core.cst$sym$map_QMARK_,cljs.core.cst$sym$m))], 0)))].join('')));
}

return cljs.core.map.cljs$core$IFn$_invoke$arity$3((function (x,i){
return om.core.build.cljs$core$IFn$_invoke$arity$3(f,x,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,cljs.core.cst$kw$om$core_SLASH_index,i));
}),xs,cljs.core.range.cljs$core$IFn$_invoke$arity$0());
});

om.core.build_all.cljs$lang$maxFixedArity = 3;
om.core.setup = (function om$core$setup(state,key,tx_listen){
if(((!((state == null)))?(((false) || (state.om$core$INotify$))?true:(((!state.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(om.core.INotify,state):false)):cljs.core.native_satisfies_QMARK_(om.core.INotify,state))){
} else {
var properties_14155 = (function (){var G__14145 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__14145) : cljs.core.atom.call(null,G__14145));
})();
var listeners_14156 = (function (){var G__14146 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__14146) : cljs.core.atom.call(null,G__14146));
})();
var render_queue_14157 = (function (){var G__14147 = cljs.core.PersistentHashSet.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__14147) : cljs.core.atom.call(null,G__14147));
})();
var x14148_14158 = state;
x14148_14158.om$core$IRootProperties$ = true;

x14148_14158.om$core$IRootProperties$_set_property_BANG_$arity$4 = ((function (x14148_14158,properties_14155,listeners_14156,render_queue_14157){
return (function (_,id,k,v){
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(properties_14155,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,k], null),v);
});})(x14148_14158,properties_14155,listeners_14156,render_queue_14157))
;

x14148_14158.om$core$IRootProperties$_remove_property_BANG_$arity$3 = ((function (x14148_14158,properties_14155,listeners_14156,render_queue_14157){
return (function (_,id,k){
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(properties_14155,cljs.core.dissoc,id,k);
});})(x14148_14158,properties_14155,listeners_14156,render_queue_14157))
;

x14148_14158.om$core$IRootProperties$_remove_properties_BANG_$arity$2 = ((function (x14148_14158,properties_14155,listeners_14156,render_queue_14157){
return (function (_,id){
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(properties_14155,cljs.core.dissoc,id);
});})(x14148_14158,properties_14155,listeners_14156,render_queue_14157))
;

x14148_14158.om$core$IRootProperties$_get_property$arity$3 = ((function (x14148_14158,properties_14155,listeners_14156,render_queue_14157){
return (function (_,id,k){
var ___$1 = this;
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(properties_14155) : cljs.core.deref.call(null,properties_14155)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,k], null));
});})(x14148_14158,properties_14155,listeners_14156,render_queue_14157))
;

x14148_14158.om$core$INotify$ = true;

x14148_14158.om$core$INotify$_listen_BANG_$arity$3 = ((function (x14148_14158,properties_14155,listeners_14156,render_queue_14157){
return (function (this$,key__$1,tx_listen__$1){
var this$__$1 = this;
if((tx_listen__$1 == null)){
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(listeners_14156,cljs.core.assoc,key__$1,tx_listen__$1);
}

return this$__$1;
});})(x14148_14158,properties_14155,listeners_14156,render_queue_14157))
;

x14148_14158.om$core$INotify$_unlisten_BANG_$arity$2 = ((function (x14148_14158,properties_14155,listeners_14156,render_queue_14157){
return (function (this$,key__$1){
var this$__$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(listeners_14156,cljs.core.dissoc,key__$1);

return this$__$1;
});})(x14148_14158,properties_14155,listeners_14156,render_queue_14157))
;

x14148_14158.om$core$INotify$_notify_BANG_$arity$3 = ((function (x14148_14158,properties_14155,listeners_14156,render_queue_14157){
return (function (this$,tx_data,root_cursor){
var this$__$1 = this;
var seq__14149_14159 = cljs.core.seq((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(listeners_14156) : cljs.core.deref.call(null,listeners_14156)));
var chunk__14150_14160 = null;
var count__14151_14161 = (0);
var i__14152_14162 = (0);
while(true){
if((i__14152_14162 < count__14151_14161)){
var vec__14153_14163 = chunk__14150_14160.cljs$core$IIndexed$_nth$arity$2(null,i__14152_14162);
var __14164 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14153_14163,(0),null);
var f_14165 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14153_14163,(1),null);
(f_14165.cljs$core$IFn$_invoke$arity$2 ? f_14165.cljs$core$IFn$_invoke$arity$2(tx_data,root_cursor) : f_14165.call(null,tx_data,root_cursor));

var G__14166 = seq__14149_14159;
var G__14167 = chunk__14150_14160;
var G__14168 = count__14151_14161;
var G__14169 = (i__14152_14162 + (1));
seq__14149_14159 = G__14166;
chunk__14150_14160 = G__14167;
count__14151_14161 = G__14168;
i__14152_14162 = G__14169;
continue;
} else {
var temp__4425__auto___14170 = cljs.core.seq(seq__14149_14159);
if(temp__4425__auto___14170){
var seq__14149_14171__$1 = temp__4425__auto___14170;
if(cljs.core.chunked_seq_QMARK_(seq__14149_14171__$1)){
var c__5364__auto___14172 = cljs.core.chunk_first(seq__14149_14171__$1);
var G__14173 = cljs.core.chunk_rest(seq__14149_14171__$1);
var G__14174 = c__5364__auto___14172;
var G__14175 = cljs.core.count(c__5364__auto___14172);
var G__14176 = (0);
seq__14149_14159 = G__14173;
chunk__14150_14160 = G__14174;
count__14151_14161 = G__14175;
i__14152_14162 = G__14176;
continue;
} else {
var vec__14154_14177 = cljs.core.first(seq__14149_14171__$1);
var __14178 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14154_14177,(0),null);
var f_14179 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14154_14177,(1),null);
(f_14179.cljs$core$IFn$_invoke$arity$2 ? f_14179.cljs$core$IFn$_invoke$arity$2(tx_data,root_cursor) : f_14179.call(null,tx_data,root_cursor));

var G__14180 = cljs.core.next(seq__14149_14171__$1);
var G__14181 = null;
var G__14182 = (0);
var G__14183 = (0);
seq__14149_14159 = G__14180;
chunk__14150_14160 = G__14181;
count__14151_14161 = G__14182;
i__14152_14162 = G__14183;
continue;
}
} else {
}
}
break;
}

return this$__$1;
});})(x14148_14158,properties_14155,listeners_14156,render_queue_14157))
;

x14148_14158.om$core$IRenderQueue$ = true;

x14148_14158.om$core$IRenderQueue$_get_queue$arity$1 = ((function (x14148_14158,properties_14155,listeners_14156,render_queue_14157){
return (function (this$){
var this$__$1 = this;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(render_queue_14157) : cljs.core.deref.call(null,render_queue_14157));
});})(x14148_14158,properties_14155,listeners_14156,render_queue_14157))
;

x14148_14158.om$core$IRenderQueue$_queue_render_BANG_$arity$2 = ((function (x14148_14158,properties_14155,listeners_14156,render_queue_14157){
return (function (this$,c){
var this$__$1 = this;
if(cljs.core.contains_QMARK_((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(render_queue_14157) : cljs.core.deref.call(null,render_queue_14157)),c)){
return null;
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(render_queue_14157,cljs.core.conj,c);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(this$__$1,cljs.core.identity);
}
});})(x14148_14158,properties_14155,listeners_14156,render_queue_14157))
;

x14148_14158.om$core$IRenderQueue$_empty_queue_BANG_$arity$1 = ((function (x14148_14158,properties_14155,listeners_14156,render_queue_14157){
return (function (this$){
var this$__$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(render_queue_14157,cljs.core.empty);
});})(x14148_14158,properties_14155,listeners_14156,render_queue_14157))
;

}

return om.core._listen_BANG_(state,key,tx_listen);
});
om.core.tear_down = (function om$core$tear_down(state,key){
return om.core._unlisten_BANG_(state,key);
});
om.core.tag_root_key = (function om$core$tag_root_key(cursor,root_key){
if(cljs.core.truth_(om.core.cursor_QMARK_(cursor))){
var x14189 = cljs.core.clone(cursor);
x14189.cljs$core$ICloneable$ = true;

x14189.cljs$core$ICloneable$_clone$arity$1 = ((function (x14189){
return (function (this$){
var this$__$1 = this;
return om$core$tag_root_key(cljs.core.clone(cursor),root_key);
});})(x14189))
;

x14189.om$core$IAdapt$ = true;

x14189.om$core$IAdapt$_adapt$arity$2 = ((function (x14189){
return (function (this$,other){
var this$__$1 = this;
return om$core$tag_root_key(om.core.adapt(cursor,other),root_key);
});})(x14189))
;

x14189.om$core$IRootKey$ = true;

x14189.om$core$IRootKey$_root_key$arity$1 = ((function (x14189){
return (function (this$){
var this$__$1 = this;
return root_key;
});})(x14189))
;

return x14189;
} else {
return cursor;
}
});
/**
 * Take a component constructor function f, value an immutable tree of
 * associative data structures optionally an wrapped in an IAtom
 * instance, and a map of options and installs an Om/React render
 * loop.
 * 
 * f must return an instance that at a minimum implements IRender or
 * IRenderState (it may implement other React life cycle protocols). f
 * must take at least two arguments, the root cursor and the owning pure
 * node. A cursor is just the original data wrapped in an ICursor
 * instance which maintains path information. Only one root render
 * loop allowed per target element. om.core/root is idempotent, if
 * called again on the same target element the previous render loop
 * will be replaced.
 * 
 * Options may also include any key allowed by om.core/build to
 * customize f. In addition om.core/root supports the following
 * special options:
 * 
 * :target     - (required) a DOM element. 
 * :shared     - data to be shared by all components, see om.core/get-shared
 * :tx-listen  - a function that will listen in in transactions, should
 *               take 2 arguments - the first a map containing the
 *               path, old and new state at path, old and new global
 *               state, and transaction tag if provided.
 * :instrument - a function of three arguments that if provided will
 *               intercept all calls to om.core/build. This function should
 *               correspond to the three arity version of om.core/build.
 * :adapt      - a function to adapt the root cursor
 * :raf        - override requestAnimationFrame based rendering. If
 *               false setTimeout will be use. If given a function
 *               will be invoked instead.
 * 
 * Example:
 * 
 * (root
 *   (fn [data owner]
 *     ...)
 *   {:message :hello}
 *   {:target js/document.body})
 */
om.core.root = (function om$core$root(f,value,p__14190){
var map__14259 = p__14190;
var map__14259__$1 = ((((!((map__14259 == null)))?((((map__14259.cljs$lang$protocol_mask$partition0$ & (64))) || (map__14259.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14259):map__14259);
var options = map__14259__$1;
var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14259__$1,cljs.core.cst$kw$target);
var tx_listen = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14259__$1,cljs.core.cst$kw$tx_DASH_listen);
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14259__$1,cljs.core.cst$kw$path);
var instrument = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14259__$1,cljs.core.cst$kw$instrument);
var descriptor = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14259__$1,cljs.core.cst$kw$descriptor);
var adapt = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14259__$1,cljs.core.cst$kw$adapt);
var raf = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14259__$1,cljs.core.cst$kw$raf);
if(cljs.core.ifn_QMARK_(f)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("First argument must be a function"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(cljs.core.cst$sym$ifn_QMARK_,cljs.core.cst$sym$f)], 0)))].join('')));
}

if(!((target == null))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("No target specified to om.core/root"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(cljs.core.cst$sym$not,cljs.core.list(cljs.core.cst$sym$nil_QMARK_,cljs.core.cst$sym$target))], 0)))].join('')));
}

var roots_SINGLEQUOTE__14327 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(om.core.roots) : cljs.core.deref.call(null,om.core.roots));
if(cljs.core.contains_QMARK_(roots_SINGLEQUOTE__14327,target)){
cljs.core.get.cljs$core$IFn$_invoke$arity$2(roots_SINGLEQUOTE__14327,target).call(null);
} else {
}

var watch_key = cljs.core.gensym.cljs$core$IFn$_invoke$arity$0();
var state = ((((!((value == null)))?((((value.cljs$lang$protocol_mask$partition1$ & (16384))) || (value.cljs$core$IAtom$))?true:(((!value.cljs$lang$protocol_mask$partition1$))?cljs.core.native_satisfies_QMARK_(cljs.core.IAtom,value):false)):cljs.core.native_satisfies_QMARK_(cljs.core.IAtom,value)))?value:(cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(value) : cljs.core.atom.call(null,value)));
var state__$1 = om.core.setup(state,watch_key,tx_listen);
var adapt__$1 = (function (){var or__4561__auto__ = adapt;
if(cljs.core.truth_(or__4561__auto__)){
return or__4561__auto__;
} else {
return cljs.core.identity;
}
})();
var m = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(options,cljs.core.cst$kw$target,cljs.core.array_seq([cljs.core.cst$kw$tx_DASH_listen,cljs.core.cst$kw$path,cljs.core.cst$kw$adapt,cljs.core.cst$kw$raf], 0));
var ret = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null) : cljs.core.atom.call(null,null));
var rootf = ((function (watch_key,state,state__$1,adapt__$1,m,ret,map__14259,map__14259__$1,options,target,tx_listen,path,instrument,descriptor,adapt,raf){
return (function om$core$root_$_rootf(){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(om.core.refresh_set,cljs.core.disj,om$core$root_$_rootf);

var value__$1 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(state__$1) : cljs.core.deref.call(null,state__$1));
var cursor = (function (){var G__14293 = om.core.tag_root_key((((path == null))?om.core.to_cursor.cljs$core$IFn$_invoke$arity$3(value__$1,state__$1,cljs.core.PersistentVector.EMPTY):om.core.to_cursor.cljs$core$IFn$_invoke$arity$3(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(value__$1,path),state__$1,path)),watch_key);
return (adapt__$1.cljs$core$IFn$_invoke$arity$1 ? adapt__$1.cljs$core$IFn$_invoke$arity$1(G__14293) : adapt__$1.call(null,G__14293));
})();
if(cljs.core.truth_(om.core._get_property(state__$1,watch_key,cljs.core.cst$kw$skip_DASH_render_DASH_root))){
} else {
om.core._set_property_BANG_(state__$1,watch_key,cljs.core.cst$kw$skip_DASH_render_DASH_root,true);

var c_14328 = om.dom.render((function (){var _STAR_descriptor_STAR_14294 = om.core._STAR_descriptor_STAR_;
var _STAR_instrument_STAR_14295 = om.core._STAR_instrument_STAR_;
var _STAR_state_STAR_14296 = om.core._STAR_state_STAR_;
var _STAR_root_key_STAR_14297 = om.core._STAR_root_key_STAR_;
om.core._STAR_descriptor_STAR_ = descriptor;

om.core._STAR_instrument_STAR_ = instrument;

om.core._STAR_state_STAR_ = state__$1;

om.core._STAR_root_key_STAR_ = watch_key;

try{return om.core.build.cljs$core$IFn$_invoke$arity$3(f,cursor,m);
}finally {om.core._STAR_root_key_STAR_ = _STAR_root_key_STAR_14297;

om.core._STAR_state_STAR_ = _STAR_state_STAR_14296;

om.core._STAR_instrument_STAR_ = _STAR_instrument_STAR_14295;

om.core._STAR_descriptor_STAR_ = _STAR_descriptor_STAR_14294;
}})(),target);
if(((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(ret) : cljs.core.deref.call(null,ret)) == null)){
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(ret,c_14328) : cljs.core.reset_BANG_.call(null,ret,c_14328));
} else {
}
}

var queue_14329 = om.core._get_queue(state__$1);
om.core._empty_queue_BANG_(state__$1);

if(cljs.core.empty_QMARK_(queue_14329)){
} else {
var seq__14298_14330 = cljs.core.seq(queue_14329);
var chunk__14299_14331 = null;
var count__14300_14332 = (0);
var i__14301_14333 = (0);
while(true){
if((i__14301_14333 < count__14300_14332)){
var c_14334 = chunk__14299_14331.cljs$core$IIndexed$_nth$arity$2(null,i__14301_14333);
if(cljs.core.truth_(c_14334.isMounted())){
var temp__4425__auto___14335 = (c_14334.state["__om_next_cursor"]);
if(cljs.core.truth_(temp__4425__auto___14335)){
var next_props_14336 = temp__4425__auto___14335;
(c_14334.props["__om_cursor"] = next_props_14336);

(c_14334.state["__om_next_cursor"] = null);
} else {
}

if(cljs.core.truth_((function (){var or__4561__auto__ = !((function (){var G__14303 = om.core.children(c_14334);
if(!((G__14303 == null))){
if((false) || (G__14303.om$core$ICheckState$)){
return true;
} else {
if((!G__14303.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(om.core.ICheckState,G__14303);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(om.core.ICheckState,G__14303);
}
})());
if(or__4561__auto__){
return or__4561__auto__;
} else {
return c_14334.shouldComponentUpdate(c_14334.props,c_14334.state);
}
})())){
c_14334.forceUpdate();
} else {
}
} else {
}

var G__14337 = seq__14298_14330;
var G__14338 = chunk__14299_14331;
var G__14339 = count__14300_14332;
var G__14340 = (i__14301_14333 + (1));
seq__14298_14330 = G__14337;
chunk__14299_14331 = G__14338;
count__14300_14332 = G__14339;
i__14301_14333 = G__14340;
continue;
} else {
var temp__4425__auto___14341 = cljs.core.seq(seq__14298_14330);
if(temp__4425__auto___14341){
var seq__14298_14342__$1 = temp__4425__auto___14341;
if(cljs.core.chunked_seq_QMARK_(seq__14298_14342__$1)){
var c__5364__auto___14343 = cljs.core.chunk_first(seq__14298_14342__$1);
var G__14344 = cljs.core.chunk_rest(seq__14298_14342__$1);
var G__14345 = c__5364__auto___14343;
var G__14346 = cljs.core.count(c__5364__auto___14343);
var G__14347 = (0);
seq__14298_14330 = G__14344;
chunk__14299_14331 = G__14345;
count__14300_14332 = G__14346;
i__14301_14333 = G__14347;
continue;
} else {
var c_14348 = cljs.core.first(seq__14298_14342__$1);
if(cljs.core.truth_(c_14348.isMounted())){
var temp__4425__auto___14349__$1 = (c_14348.state["__om_next_cursor"]);
if(cljs.core.truth_(temp__4425__auto___14349__$1)){
var next_props_14350 = temp__4425__auto___14349__$1;
(c_14348.props["__om_cursor"] = next_props_14350);

(c_14348.state["__om_next_cursor"] = null);
} else {
}

if(cljs.core.truth_((function (){var or__4561__auto__ = !((function (){var G__14305 = om.core.children(c_14348);
if(!((G__14305 == null))){
if((false) || (G__14305.om$core$ICheckState$)){
return true;
} else {
if((!G__14305.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(om.core.ICheckState,G__14305);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(om.core.ICheckState,G__14305);
}
})());
if(or__4561__auto__){
return or__4561__auto__;
} else {
return c_14348.shouldComponentUpdate(c_14348.props,c_14348.state);
}
})())){
c_14348.forceUpdate();
} else {
}
} else {
}

var G__14351 = cljs.core.next(seq__14298_14342__$1);
var G__14352 = null;
var G__14353 = (0);
var G__14354 = (0);
seq__14298_14330 = G__14351;
chunk__14299_14331 = G__14352;
count__14300_14332 = G__14353;
i__14301_14333 = G__14354;
continue;
}
} else {
}
}
break;
}
}

var _refs_14355 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(om.core._refs) : cljs.core.deref.call(null,om.core._refs));
if(cljs.core.empty_QMARK_(_refs_14355)){
} else {
var seq__14306_14356 = cljs.core.seq(_refs_14355);
var chunk__14307_14357 = null;
var count__14308_14358 = (0);
var i__14309_14359 = (0);
while(true){
if((i__14309_14359 < count__14308_14358)){
var vec__14310_14360 = chunk__14307_14357.cljs$core$IIndexed$_nth$arity$2(null,i__14309_14359);
var path_14361__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14310_14360,(0),null);
var cs_14362 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14310_14360,(1),null);
var cs_14363__$1 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cs_14362) : cljs.core.deref.call(null,cs_14362));
var seq__14311_14364 = cljs.core.seq(cs_14363__$1);
var chunk__14312_14365 = null;
var count__14313_14366 = (0);
var i__14314_14367 = (0);
while(true){
if((i__14314_14367 < count__14313_14366)){
var vec__14315_14368 = chunk__14312_14365.cljs$core$IIndexed$_nth$arity$2(null,i__14314_14367);
var id_14369 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14315_14368,(0),null);
var c_14370 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14315_14368,(1),null);
if(cljs.core.truth_(c_14370.shouldComponentUpdate(c_14370.props,c_14370.state))){
c_14370.forceUpdate();
} else {
}

var G__14371 = seq__14311_14364;
var G__14372 = chunk__14312_14365;
var G__14373 = count__14313_14366;
var G__14374 = (i__14314_14367 + (1));
seq__14311_14364 = G__14371;
chunk__14312_14365 = G__14372;
count__14313_14366 = G__14373;
i__14314_14367 = G__14374;
continue;
} else {
var temp__4425__auto___14375 = cljs.core.seq(seq__14311_14364);
if(temp__4425__auto___14375){
var seq__14311_14376__$1 = temp__4425__auto___14375;
if(cljs.core.chunked_seq_QMARK_(seq__14311_14376__$1)){
var c__5364__auto___14377 = cljs.core.chunk_first(seq__14311_14376__$1);
var G__14378 = cljs.core.chunk_rest(seq__14311_14376__$1);
var G__14379 = c__5364__auto___14377;
var G__14380 = cljs.core.count(c__5364__auto___14377);
var G__14381 = (0);
seq__14311_14364 = G__14378;
chunk__14312_14365 = G__14379;
count__14313_14366 = G__14380;
i__14314_14367 = G__14381;
continue;
} else {
var vec__14316_14382 = cljs.core.first(seq__14311_14376__$1);
var id_14383 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14316_14382,(0),null);
var c_14384 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14316_14382,(1),null);
if(cljs.core.truth_(c_14384.shouldComponentUpdate(c_14384.props,c_14384.state))){
c_14384.forceUpdate();
} else {
}

var G__14385 = cljs.core.next(seq__14311_14376__$1);
var G__14386 = null;
var G__14387 = (0);
var G__14388 = (0);
seq__14311_14364 = G__14385;
chunk__14312_14365 = G__14386;
count__14313_14366 = G__14387;
i__14314_14367 = G__14388;
continue;
}
} else {
}
}
break;
}

var G__14389 = seq__14306_14356;
var G__14390 = chunk__14307_14357;
var G__14391 = count__14308_14358;
var G__14392 = (i__14309_14359 + (1));
seq__14306_14356 = G__14389;
chunk__14307_14357 = G__14390;
count__14308_14358 = G__14391;
i__14309_14359 = G__14392;
continue;
} else {
var temp__4425__auto___14393 = cljs.core.seq(seq__14306_14356);
if(temp__4425__auto___14393){
var seq__14306_14394__$1 = temp__4425__auto___14393;
if(cljs.core.chunked_seq_QMARK_(seq__14306_14394__$1)){
var c__5364__auto___14395 = cljs.core.chunk_first(seq__14306_14394__$1);
var G__14396 = cljs.core.chunk_rest(seq__14306_14394__$1);
var G__14397 = c__5364__auto___14395;
var G__14398 = cljs.core.count(c__5364__auto___14395);
var G__14399 = (0);
seq__14306_14356 = G__14396;
chunk__14307_14357 = G__14397;
count__14308_14358 = G__14398;
i__14309_14359 = G__14399;
continue;
} else {
var vec__14317_14400 = cljs.core.first(seq__14306_14394__$1);
var path_14401__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14317_14400,(0),null);
var cs_14402 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14317_14400,(1),null);
var cs_14403__$1 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cs_14402) : cljs.core.deref.call(null,cs_14402));
var seq__14318_14404 = cljs.core.seq(cs_14403__$1);
var chunk__14319_14405 = null;
var count__14320_14406 = (0);
var i__14321_14407 = (0);
while(true){
if((i__14321_14407 < count__14320_14406)){
var vec__14322_14408 = chunk__14319_14405.cljs$core$IIndexed$_nth$arity$2(null,i__14321_14407);
var id_14409 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14322_14408,(0),null);
var c_14410 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14322_14408,(1),null);
if(cljs.core.truth_(c_14410.shouldComponentUpdate(c_14410.props,c_14410.state))){
c_14410.forceUpdate();
} else {
}

var G__14411 = seq__14318_14404;
var G__14412 = chunk__14319_14405;
var G__14413 = count__14320_14406;
var G__14414 = (i__14321_14407 + (1));
seq__14318_14404 = G__14411;
chunk__14319_14405 = G__14412;
count__14320_14406 = G__14413;
i__14321_14407 = G__14414;
continue;
} else {
var temp__4425__auto___14415__$1 = cljs.core.seq(seq__14318_14404);
if(temp__4425__auto___14415__$1){
var seq__14318_14416__$1 = temp__4425__auto___14415__$1;
if(cljs.core.chunked_seq_QMARK_(seq__14318_14416__$1)){
var c__5364__auto___14417 = cljs.core.chunk_first(seq__14318_14416__$1);
var G__14418 = cljs.core.chunk_rest(seq__14318_14416__$1);
var G__14419 = c__5364__auto___14417;
var G__14420 = cljs.core.count(c__5364__auto___14417);
var G__14421 = (0);
seq__14318_14404 = G__14418;
chunk__14319_14405 = G__14419;
count__14320_14406 = G__14420;
i__14321_14407 = G__14421;
continue;
} else {
var vec__14323_14422 = cljs.core.first(seq__14318_14416__$1);
var id_14423 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14323_14422,(0),null);
var c_14424 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14323_14422,(1),null);
if(cljs.core.truth_(c_14424.shouldComponentUpdate(c_14424.props,c_14424.state))){
c_14424.forceUpdate();
} else {
}

var G__14425 = cljs.core.next(seq__14318_14416__$1);
var G__14426 = null;
var G__14427 = (0);
var G__14428 = (0);
seq__14318_14404 = G__14425;
chunk__14319_14405 = G__14426;
count__14320_14406 = G__14427;
i__14321_14407 = G__14428;
continue;
}
} else {
}
}
break;
}

var G__14429 = cljs.core.next(seq__14306_14394__$1);
var G__14430 = null;
var G__14431 = (0);
var G__14432 = (0);
seq__14306_14356 = G__14429;
chunk__14307_14357 = G__14430;
count__14308_14358 = G__14431;
i__14309_14359 = G__14432;
continue;
}
} else {
}
}
break;
}
}

return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(ret) : cljs.core.deref.call(null,ret));
});})(watch_key,state,state__$1,adapt__$1,m,ret,map__14259,map__14259__$1,options,target,tx_listen,path,instrument,descriptor,adapt,raf))
;
cljs.core.add_watch(state__$1,watch_key,((function (watch_key,state,state__$1,adapt__$1,m,ret,rootf,map__14259,map__14259__$1,options,target,tx_listen,path,instrument,descriptor,adapt,raf){
return (function (_,___$1,o,n){
if((cljs.core.not(om.core._get_property(state__$1,watch_key,cljs.core.cst$kw$ignore))) && (!((o === n)))){
om.core._set_property_BANG_(state__$1,watch_key,cljs.core.cst$kw$skip_DASH_render_DASH_root,false);
} else {
}

om.core._set_property_BANG_(state__$1,watch_key,cljs.core.cst$kw$ignore,false);

if(cljs.core.contains_QMARK_((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(om.core.refresh_set) : cljs.core.deref.call(null,om.core.refresh_set)),rootf)){
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(om.core.refresh_set,cljs.core.conj,rootf);
}

if(cljs.core.truth_(om.core.refresh_queued)){
return null;
} else {
om.core.refresh_queued = true;

if(cljs.core.fn_QMARK_(raf)){
return (raf.cljs$core$IFn$_invoke$arity$0 ? raf.cljs$core$IFn$_invoke$arity$0() : raf.call(null));
} else {
if((raf === false) || (!(typeof requestAnimationFrame !== 'undefined'))){
var G__14324 = ((function (watch_key,state,state__$1,adapt__$1,m,ret,rootf,map__14259,map__14259__$1,options,target,tx_listen,path,instrument,descriptor,adapt,raf){
return (function (){
return om.core.render_all.cljs$core$IFn$_invoke$arity$1(state__$1);
});})(watch_key,state,state__$1,adapt__$1,m,ret,rootf,map__14259,map__14259__$1,options,target,tx_listen,path,instrument,descriptor,adapt,raf))
;
var G__14325 = (16);
return setTimeout(G__14324,G__14325);
} else {
var G__14326 = ((function (watch_key,state,state__$1,adapt__$1,m,ret,rootf,map__14259,map__14259__$1,options,target,tx_listen,path,instrument,descriptor,adapt,raf){
return (function (){
return om.core.render_all.cljs$core$IFn$_invoke$arity$1(state__$1);
});})(watch_key,state,state__$1,adapt__$1,m,ret,rootf,map__14259,map__14259__$1,options,target,tx_listen,path,instrument,descriptor,adapt,raf))
;
return requestAnimationFrame(G__14326);

}
}
}
});})(watch_key,state,state__$1,adapt__$1,m,ret,rootf,map__14259,map__14259__$1,options,target,tx_listen,path,instrument,descriptor,adapt,raf))
);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(om.core.roots,cljs.core.assoc,target,((function (watch_key,state,state__$1,adapt__$1,m,ret,rootf,map__14259,map__14259__$1,options,target,tx_listen,path,instrument,descriptor,adapt,raf){
return (function (){
om.core._remove_properties_BANG_(state__$1,watch_key);

cljs.core.remove_watch(state__$1,watch_key);

om.core.tear_down(state__$1,watch_key);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(om.core.refresh_set,cljs.core.disj,rootf);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(om.core.roots,cljs.core.dissoc,target);

return React.unmountComponentAtNode(target);
});})(watch_key,state,state__$1,adapt__$1,m,ret,rootf,map__14259,map__14259__$1,options,target,tx_listen,path,instrument,descriptor,adapt,raf))
);

return rootf();
});
/**
 * Given a DOM target remove its render loop if one exists.
 */
om.core.detach_root = (function om$core$detach_root(target){
if(cljs.core.truth_(goog.dom.isElement(target))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(cljs.core.cst$sym$gdom_SLASH_isElement,cljs.core.cst$sym$target)], 0)))].join('')));
}

var temp__4425__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(om.core.roots) : cljs.core.deref.call(null,om.core.roots)),target);
if(cljs.core.truth_(temp__4425__auto__)){
var f = temp__4425__auto__;
return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
} else {
return null;
}
});
om.core.transactable_QMARK_ = (function om$core$transactable_QMARK_(x){
if(!((x == null))){
if((false) || (x.om$core$ITransact$)){
return true;
} else {
if((!x.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(om.core.ITransact,x);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(om.core.ITransact,x);
}
});
/**
 * Given a tag, a cursor, an optional list of keys ks, mutate the tree
 *   at the path specified by the cursor + the optional keys by applying
 *   f to the specified value in the tree. An Om re-render will be
 *   triggered.
 */
om.core.transact_BANG_ = (function om$core$transact_BANG_(var_args){
var args14435 = [];
var len__5619__auto___14438 = arguments.length;
var i__5620__auto___14439 = (0);
while(true){
if((i__5620__auto___14439 < len__5619__auto___14438)){
args14435.push((arguments[i__5620__auto___14439]));

var G__14440 = (i__5620__auto___14439 + (1));
i__5620__auto___14439 = G__14440;
continue;
} else {
}
break;
}

var G__14437 = args14435.length;
switch (G__14437) {
case 2:
return om.core.transact_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.core.transact_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return om.core.transact_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14435.length)].join('')));

}
});

om.core.transact_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (cursor,f){
return om.core.transact_BANG_.cljs$core$IFn$_invoke$arity$4(cursor,cljs.core.PersistentVector.EMPTY,f,null);
});

om.core.transact_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (cursor,korks,f){
return om.core.transact_BANG_.cljs$core$IFn$_invoke$arity$4(cursor,korks,f,null);
});

om.core.transact_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (cursor,korks,f,tag){
if(cljs.core.truth_(om.core.transactable_QMARK_(cursor))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(cljs.core.cst$sym$transactable_QMARK_,cljs.core.cst$sym$cursor)], 0)))].join('')));
}

if(cljs.core.ifn_QMARK_(f)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(cljs.core.cst$sym$ifn_QMARK_,cljs.core.cst$sym$f)], 0)))].join('')));
}

var korks__$1 = (((korks == null))?cljs.core.PersistentVector.EMPTY:((cljs.core.sequential_QMARK_(korks))?korks:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [korks], null)
));
return om.core._transact_BANG_(cursor,korks__$1,f,tag);
});

om.core.transact_BANG_.cljs$lang$maxFixedArity = 4;
/**
 * Like transact! but no function provided, instead a replacement
 *   value is given.
 */
om.core.update_BANG_ = (function om$core$update_BANG_(var_args){
var args14442 = [];
var len__5619__auto___14445 = arguments.length;
var i__5620__auto___14446 = (0);
while(true){
if((i__5620__auto___14446 < len__5619__auto___14445)){
args14442.push((arguments[i__5620__auto___14446]));

var G__14447 = (i__5620__auto___14446 + (1));
i__5620__auto___14446 = G__14447;
continue;
} else {
}
break;
}

var G__14444 = args14442.length;
switch (G__14444) {
case 2:
return om.core.update_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return om.core.update_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14442.length)].join('')));

}
});

om.core.update_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (cursor,v){
if(cljs.core.truth_(om.core.cursor_QMARK_(cursor))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(cljs.core.cst$sym$cursor_QMARK_,cljs.core.cst$sym$cursor)], 0)))].join('')));
}

return om.core.transact_BANG_.cljs$core$IFn$_invoke$arity$4(cursor,cljs.core.PersistentVector.EMPTY,(function (_){
return v;
}),null);
});

om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (cursor,korks,v){
if(cljs.core.truth_(om.core.cursor_QMARK_(cursor))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(cljs.core.cst$sym$cursor_QMARK_,cljs.core.cst$sym$cursor)], 0)))].join('')));
}

return om.core.transact_BANG_.cljs$core$IFn$_invoke$arity$4(cursor,korks,(function (_){
return v;
}),null);
});

om.core.update_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (cursor,korks,v,tag){
if(cljs.core.truth_(om.core.cursor_QMARK_(cursor))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(cljs.core.cst$sym$cursor_QMARK_,cljs.core.cst$sym$cursor)], 0)))].join('')));
}

return om.core.transact_BANG_.cljs$core$IFn$_invoke$arity$4(cursor,korks,(function (_){
return v;
}),tag);
});

om.core.update_BANG_.cljs$lang$maxFixedArity = 4;
/**
 * EXPERIMENTAL: Like transact! but does not schedule a re-render or
 *   create a transact event.
 */
om.core.commit_BANG_ = (function om$core$commit_BANG_(cursor,korks,f){
if(cljs.core.truth_(om.core.cursor_QMARK_(cursor))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(cljs.core.cst$sym$cursor_QMARK_,cljs.core.cst$sym$cursor)], 0)))].join('')));
}

if(cljs.core.ifn_QMARK_(f)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(cljs.core.cst$sym$ifn_QMARK_,cljs.core.cst$sym$f)], 0)))].join('')));
}

var key = ((((!((cursor == null)))?(((false) || (cursor.om$core$IRootKey$))?true:(((!cursor.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(om.core.IRootKey,cursor):false)):cljs.core.native_satisfies_QMARK_(om.core.IRootKey,cursor)))?om.core._root_key(cursor):null);
var app_state = om.core.state(cursor);
var korks__$1 = (((korks == null))?cljs.core.PersistentVector.EMPTY:((cljs.core.sequential_QMARK_(korks))?korks:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [korks], null)
));
var cpath = om.core.path(cursor);
var rpath = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cpath,korks__$1);
if(cljs.core.truth_(key)){
om.core._set_property_BANG_(app_state,key,cljs.core.cst$kw$ignore,true);
} else {
}

if(cljs.core.empty_QMARK_(rpath)){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(app_state,f);
} else {
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app_state,cljs.core.update_in,rpath,f);
}
});
/**
 * A helper function to get at React DOM refs. Given a owning pure node
 *   extract the DOM ref specified by name.
 */
om.core.get_node = (function om$core$get_node(var_args){
var args14451 = [];
var len__5619__auto___14455 = arguments.length;
var i__5620__auto___14456 = (0);
while(true){
if((i__5620__auto___14456 < len__5619__auto___14455)){
args14451.push((arguments[i__5620__auto___14456]));

var G__14457 = (i__5620__auto___14456 + (1));
i__5620__auto___14456 = G__14457;
continue;
} else {
}
break;
}

var G__14453 = args14451.length;
switch (G__14453) {
case 1:
return om.core.get_node.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om.core.get_node.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14451.length)].join('')));

}
});

om.core.get_node.cljs$core$IFn$_invoke$arity$1 = (function (owner){
return owner.getDOMNode();
});

om.core.get_node.cljs$core$IFn$_invoke$arity$2 = (function (owner,name){
if(typeof name === 'string'){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(cljs.core.cst$sym$string_QMARK_,cljs.core.cst$sym$name)], 0)))].join('')));
}

var G__14454 = owner.refs;
var G__14454__$1 = (((G__14454 == null))?null:(G__14454[name]));
var G__14454__$2 = (((G__14454__$1 == null))?null:G__14454__$1.getDOMNode());
return G__14454__$2;
});

om.core.get_node.cljs$lang$maxFixedArity = 2;
/**
 * A helper function to get at React refs. Given an owning pure node extract
 *   the ref specified by name.
 */
om.core.get_ref = (function om$core$get_ref(owner,name){
if(cljs.core.truth_(om.core.component_QMARK_(owner))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(cljs.core.cst$sym$component_QMARK_,cljs.core.cst$sym$owner)], 0)))].join('')));
}

if(typeof name === 'string'){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(cljs.core.cst$sym$string_QMARK_,cljs.core.cst$sym$name)], 0)))].join('')));
}

var G__14460 = owner.refs;
var G__14460__$1 = (((G__14460 == null))?null:goog.object.get(G__14460,name));
return G__14460__$1;
});
/**
 * Return true if the backing React component is mounted into the DOM.
 */
om.core.mounted_QMARK_ = (function om$core$mounted_QMARK_(owner){
return owner.isMounted();
});
/**
 * Takes a pure owning component, a sequential list of keys and value and
 * sets the state of the component. Conceptually analagous to React
 * setState. Will schedule an Om re-render.
 */
om.core.set_state_BANG_ = (function om$core$set_state_BANG_(var_args){
var args14461 = [];
var len__5619__auto___14464 = arguments.length;
var i__5620__auto___14465 = (0);
while(true){
if((i__5620__auto___14465 < len__5619__auto___14464)){
args14461.push((arguments[i__5620__auto___14465]));

var G__14466 = (i__5620__auto___14465 + (1));
i__5620__auto___14465 = G__14466;
continue;
} else {
}
break;
}

var G__14463 = args14461.length;
switch (G__14463) {
case 2:
return om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14461.length)].join('')));

}
});

om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (owner,v){
if(cljs.core.truth_(om.core.component_QMARK_(owner))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(cljs.core.cst$sym$component_QMARK_,cljs.core.cst$sym$owner)], 0)))].join('')));
}

return om.core._set_state_BANG_.cljs$core$IFn$_invoke$arity$3(owner,v,true);
});

om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (owner,korks,v){
if(cljs.core.truth_(om.core.component_QMARK_(owner))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(cljs.core.cst$sym$component_QMARK_,cljs.core.cst$sym$owner)], 0)))].join('')));
}

var ks = ((cljs.core.sequential_QMARK_(korks))?korks:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [korks], null));
return om.core._set_state_BANG_.cljs$core$IFn$_invoke$arity$4(owner,ks,v,true);
});

om.core.set_state_BANG_.cljs$lang$maxFixedArity = 3;
/**
 * EXPERIMENTAL: Same as set-state! but does not trigger re-render.
 */
om.core.set_state_nr_BANG_ = (function om$core$set_state_nr_BANG_(var_args){
var args14468 = [];
var len__5619__auto___14471 = arguments.length;
var i__5620__auto___14472 = (0);
while(true){
if((i__5620__auto___14472 < len__5619__auto___14471)){
args14468.push((arguments[i__5620__auto___14472]));

var G__14473 = (i__5620__auto___14472 + (1));
i__5620__auto___14472 = G__14473;
continue;
} else {
}
break;
}

var G__14470 = args14468.length;
switch (G__14470) {
case 2:
return om.core.set_state_nr_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.core.set_state_nr_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14468.length)].join('')));

}
});

om.core.set_state_nr_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (owner,v){
if(cljs.core.truth_(om.core.component_QMARK_(owner))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(cljs.core.cst$sym$component_QMARK_,cljs.core.cst$sym$owner)], 0)))].join('')));
}

return om.core._set_state_BANG_.cljs$core$IFn$_invoke$arity$3(owner,v,false);
});

om.core.set_state_nr_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (owner,korks,v){
if(cljs.core.truth_(om.core.component_QMARK_(owner))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(cljs.core.cst$sym$component_QMARK_,cljs.core.cst$sym$owner)], 0)))].join('')));
}

var ks = ((cljs.core.sequential_QMARK_(korks))?korks:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [korks], null));
return om.core._set_state_BANG_.cljs$core$IFn$_invoke$arity$4(owner,ks,v,false);
});

om.core.set_state_nr_BANG_.cljs$lang$maxFixedArity = 3;
/**
 * Takes a pure owning component, a sequential list of keys and a
 * function to transition the state of the component. Conceptually
 * analagous to React setState. Will schedule an Om re-render.
 */
om.core.update_state_BANG_ = (function om$core$update_state_BANG_(var_args){
var args14475 = [];
var len__5619__auto___14480 = arguments.length;
var i__5620__auto___14481 = (0);
while(true){
if((i__5620__auto___14481 < len__5619__auto___14480)){
args14475.push((arguments[i__5620__auto___14481]));

var G__14482 = (i__5620__auto___14481 + (1));
i__5620__auto___14481 = G__14482;
continue;
} else {
}
break;
}

var G__14477 = args14475.length;
switch (G__14477) {
case 2:
return om.core.update_state_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.core.update_state_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14475.length)].join('')));

}
});

om.core.update_state_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (owner,f){
if(cljs.core.truth_(om.core.component_QMARK_(owner))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(cljs.core.cst$sym$component_QMARK_,cljs.core.cst$sym$owner)], 0)))].join('')));
}

if(cljs.core.ifn_QMARK_(f)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(cljs.core.cst$sym$ifn_QMARK_,cljs.core.cst$sym$f)], 0)))].join('')));
}

return om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$2(owner,(function (){var G__14478 = om.core.get_state.cljs$core$IFn$_invoke$arity$1(owner);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__14478) : f.call(null,G__14478));
})());
});

om.core.update_state_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (owner,korks,f){
if(cljs.core.truth_(om.core.component_QMARK_(owner))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(cljs.core.cst$sym$component_QMARK_,cljs.core.cst$sym$owner)], 0)))].join('')));
}

if(cljs.core.ifn_QMARK_(f)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(cljs.core.cst$sym$ifn_QMARK_,cljs.core.cst$sym$f)], 0)))].join('')));
}

return om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$3(owner,korks,(function (){var G__14479 = om.core.get_state.cljs$core$IFn$_invoke$arity$2(owner,korks);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__14479) : f.call(null,G__14479));
})());
});

om.core.update_state_BANG_.cljs$lang$maxFixedArity = 3;
/**
 * EXPERIMENTAL: Same as update-state! but does not trigger re-render.
 */
om.core.update_state_nr_BANG_ = (function om$core$update_state_nr_BANG_(var_args){
var args14484 = [];
var len__5619__auto___14489 = arguments.length;
var i__5620__auto___14490 = (0);
while(true){
if((i__5620__auto___14490 < len__5619__auto___14489)){
args14484.push((arguments[i__5620__auto___14490]));

var G__14491 = (i__5620__auto___14490 + (1));
i__5620__auto___14490 = G__14491;
continue;
} else {
}
break;
}

var G__14486 = args14484.length;
switch (G__14486) {
case 2:
return om.core.update_state_nr_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.core.update_state_nr_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14484.length)].join('')));

}
});

om.core.update_state_nr_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (owner,f){
if(cljs.core.truth_(om.core.component_QMARK_(owner))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(cljs.core.cst$sym$component_QMARK_,cljs.core.cst$sym$owner)], 0)))].join('')));
}

if(cljs.core.ifn_QMARK_(f)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(cljs.core.cst$sym$ifn_QMARK_,cljs.core.cst$sym$f)], 0)))].join('')));
}

return om.core.set_state_nr_BANG_.cljs$core$IFn$_invoke$arity$2(owner,(function (){var G__14487 = om.core.get_state.cljs$core$IFn$_invoke$arity$1(owner);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__14487) : f.call(null,G__14487));
})());
});

om.core.update_state_nr_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (owner,korks,f){
if(cljs.core.truth_(om.core.component_QMARK_(owner))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(cljs.core.cst$sym$component_QMARK_,cljs.core.cst$sym$owner)], 0)))].join('')));
}

if(cljs.core.ifn_QMARK_(f)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(cljs.core.cst$sym$ifn_QMARK_,cljs.core.cst$sym$f)], 0)))].join('')));
}

return om.core.set_state_nr_BANG_.cljs$core$IFn$_invoke$arity$3(owner,korks,(function (){var G__14488 = om.core.get_state.cljs$core$IFn$_invoke$arity$2(owner,korks);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__14488) : f.call(null,G__14488));
})());
});

om.core.update_state_nr_BANG_.cljs$lang$maxFixedArity = 3;
/**
 * Utility to re-render an owner.
 */
om.core.refresh_BANG_ = (function om$core$refresh_BANG_(owner){
if(cljs.core.truth_(om.core.component_QMARK_(owner))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(cljs.core.cst$sym$component_QMARK_,cljs.core.cst$sym$owner)], 0)))].join('')));
}

return om.core.update_state_BANG_.cljs$core$IFn$_invoke$arity$2(owner,cljs.core.identity);
});
/**
 * Takes a pure owning component and an optional key or sequential
 * list of keys and returns a property in the component local state if
 * it exists. Always returns the rendered state, not the pending
 * state.
 */
om.core.get_render_state = (function om$core$get_render_state(var_args){
var args14493 = [];
var len__5619__auto___14496 = arguments.length;
var i__5620__auto___14497 = (0);
while(true){
if((i__5620__auto___14497 < len__5619__auto___14496)){
args14493.push((arguments[i__5620__auto___14497]));

var G__14498 = (i__5620__auto___14497 + (1));
i__5620__auto___14497 = G__14498;
continue;
} else {
}
break;
}

var G__14495 = args14493.length;
switch (G__14495) {
case 1:
return om.core.get_render_state.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om.core.get_render_state.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14493.length)].join('')));

}
});

om.core.get_render_state.cljs$core$IFn$_invoke$arity$1 = (function (owner){
if(cljs.core.truth_(om.core.component_QMARK_(owner))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(cljs.core.cst$sym$component_QMARK_,cljs.core.cst$sym$owner)], 0)))].join('')));
}

return om.core._get_render_state.cljs$core$IFn$_invoke$arity$1(owner);
});

om.core.get_render_state.cljs$core$IFn$_invoke$arity$2 = (function (owner,korks){
if(cljs.core.truth_(om.core.component_QMARK_(owner))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(cljs.core.cst$sym$component_QMARK_,cljs.core.cst$sym$owner)], 0)))].join('')));
}

var ks = ((cljs.core.sequential_QMARK_(korks))?korks:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [korks], null));
return om.core._get_render_state.cljs$core$IFn$_invoke$arity$2(owner,ks);
});

om.core.get_render_state.cljs$lang$maxFixedArity = 2;
