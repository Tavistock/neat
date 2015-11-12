// Compiled by ClojureScript 1.7.122 {:static-fns true, :optimize-constants true}
goog.provide('neat.util');
goog.require('cljs.core');
goog.require('goog.string.StringBuffer');
neat.util.rand_id = (function neat$util$rand_id(){
var f = (function neat$util$rand_id_$_f(){
return cljs.core.rand_int((16)).toString((16));
});
var g = (function neat$util$rand_id_$_g(){
return ((8) | ((3) & cljs.core.rand_int((15)))).toString((16));
});
return (new goog.string.StringBuffer(f(),f(),f(),f(),f(),f(),f(),f(),"-",f(),f(),f(),f(),"-4",f(),f(),f(),"-",g(),f(),f(),f(),"-",f(),f(),f(),f(),f(),f(),f(),f(),f(),f(),f(),f())).toString();
});
neat.util.sigmoid = (function neat$util$sigmoid(x){
return (((2) / ((1) + (function (){var G__7232 = (-4.9 * x);
return Math.exp(G__7232);
})())) - (1));
});
