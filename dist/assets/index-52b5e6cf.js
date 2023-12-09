function oO(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in t)){const o=Object.getOwnPropertyDescriptor(r,i);o&&Object.defineProperty(t,i,o.get?o:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();var gi=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Ia(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}function sO(t){if(t.__esModule)return t;var e=t.default;if(typeof e=="function"){var n=function r(){return this instanceof r?Reflect.construct(e,arguments,this.constructor):e.apply(this,arguments)};n.prototype=e.prototype}else n={};return Object.defineProperty(n,"__esModule",{value:!0}),Object.keys(t).forEach(function(r){var i=Object.getOwnPropertyDescriptor(t,r);Object.defineProperty(n,r,i.get?i:{enumerable:!0,get:function(){return t[r]}})}),n}var fT={exports:{}},Jf={},hT={exports:{}},ve={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var zu=Symbol.for("react.element"),aO=Symbol.for("react.portal"),lO=Symbol.for("react.fragment"),uO=Symbol.for("react.strict_mode"),cO=Symbol.for("react.profiler"),dO=Symbol.for("react.provider"),fO=Symbol.for("react.context"),hO=Symbol.for("react.forward_ref"),pO=Symbol.for("react.suspense"),mO=Symbol.for("react.memo"),gO=Symbol.for("react.lazy"),d1=Symbol.iterator;function vO(t){return t===null||typeof t!="object"?null:(t=d1&&t[d1]||t["@@iterator"],typeof t=="function"?t:null)}var pT={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},mT=Object.assign,gT={};function Aa(t,e,n){this.props=t,this.context=e,this.refs=gT,this.updater=n||pT}Aa.prototype.isReactComponent={};Aa.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Aa.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function vT(){}vT.prototype=Aa.prototype;function Pv(t,e,n){this.props=t,this.context=e,this.refs=gT,this.updater=n||pT}var kv=Pv.prototype=new vT;kv.constructor=Pv;mT(kv,Aa.prototype);kv.isPureReactComponent=!0;var f1=Array.isArray,yT=Object.prototype.hasOwnProperty,Rv={current:null},wT={key:!0,ref:!0,__self:!0,__source:!0};function _T(t,e,n){var r,i={},o=null,s=null;if(e!=null)for(r in e.ref!==void 0&&(s=e.ref),e.key!==void 0&&(o=""+e.key),e)yT.call(e,r)&&!wT.hasOwnProperty(r)&&(i[r]=e[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];i.children=l}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:zu,type:t,key:o,ref:s,props:i,_owner:Rv.current}}function yO(t,e){return{$$typeof:zu,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Ov(t){return typeof t=="object"&&t!==null&&t.$$typeof===zu}function wO(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var h1=/\/+/g;function vp(t,e){return typeof t=="object"&&t!==null&&t.key!=null?wO(""+t.key):e.toString(36)}function dd(t,e,n,r,i){var o=typeof t;(o==="undefined"||o==="boolean")&&(t=null);var s=!1;if(t===null)s=!0;else switch(o){case"string":case"number":s=!0;break;case"object":switch(t.$$typeof){case zu:case aO:s=!0}}if(s)return s=t,i=i(s),t=r===""?"."+vp(s,0):r,f1(i)?(n="",t!=null&&(n=t.replace(h1,"$&/")+"/"),dd(i,e,n,"",function(u){return u})):i!=null&&(Ov(i)&&(i=yO(i,n+(!i.key||s&&s.key===i.key?"":(""+i.key).replace(h1,"$&/")+"/")+t)),e.push(i)),1;if(s=0,r=r===""?".":r+":",f1(t))for(var a=0;a<t.length;a++){o=t[a];var l=r+vp(o,a);s+=dd(o,e,n,l,i)}else if(l=vO(t),typeof l=="function")for(t=l.call(t),a=0;!(o=t.next()).done;)o=o.value,l=r+vp(o,a++),s+=dd(o,e,n,l,i);else if(o==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return s}function kc(t,e,n){if(t==null)return t;var r=[],i=0;return dd(t,r,"","",function(o){return e.call(n,o,i++)}),r}function _O(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var on={current:null},fd={transition:null},EO={ReactCurrentDispatcher:on,ReactCurrentBatchConfig:fd,ReactCurrentOwner:Rv};ve.Children={map:kc,forEach:function(t,e,n){kc(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return kc(t,function(){e++}),e},toArray:function(t){return kc(t,function(e){return e})||[]},only:function(t){if(!Ov(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};ve.Component=Aa;ve.Fragment=lO;ve.Profiler=cO;ve.PureComponent=Pv;ve.StrictMode=uO;ve.Suspense=pO;ve.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=EO;ve.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=mT({},t.props),i=t.key,o=t.ref,s=t._owner;if(e!=null){if(e.ref!==void 0&&(o=e.ref,s=Rv.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)yT.call(e,l)&&!wT.hasOwnProperty(l)&&(r[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:zu,type:t.type,key:i,ref:o,props:r,_owner:s}};ve.createContext=function(t){return t={$$typeof:fO,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:dO,_context:t},t.Consumer=t};ve.createElement=_T;ve.createFactory=function(t){var e=_T.bind(null,t);return e.type=t,e};ve.createRef=function(){return{current:null}};ve.forwardRef=function(t){return{$$typeof:hO,render:t}};ve.isValidElement=Ov;ve.lazy=function(t){return{$$typeof:gO,_payload:{_status:-1,_result:t},_init:_O}};ve.memo=function(t,e){return{$$typeof:mO,type:t,compare:e===void 0?null:e}};ve.startTransition=function(t){var e=fd.transition;fd.transition={};try{t()}finally{fd.transition=e}};ve.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};ve.useCallback=function(t,e){return on.current.useCallback(t,e)};ve.useContext=function(t){return on.current.useContext(t)};ve.useDebugValue=function(){};ve.useDeferredValue=function(t){return on.current.useDeferredValue(t)};ve.useEffect=function(t,e){return on.current.useEffect(t,e)};ve.useId=function(){return on.current.useId()};ve.useImperativeHandle=function(t,e,n){return on.current.useImperativeHandle(t,e,n)};ve.useInsertionEffect=function(t,e){return on.current.useInsertionEffect(t,e)};ve.useLayoutEffect=function(t,e){return on.current.useLayoutEffect(t,e)};ve.useMemo=function(t,e){return on.current.useMemo(t,e)};ve.useReducer=function(t,e,n){return on.current.useReducer(t,e,n)};ve.useRef=function(t){return on.current.useRef(t)};ve.useState=function(t){return on.current.useState(t)};ve.useSyncExternalStore=function(t,e,n){return on.current.useSyncExternalStore(t,e,n)};ve.useTransition=function(){return on.current.useTransition()};ve.version="18.2.0";hT.exports=ve;var C=hT.exports;const G=Ia(C),xO=oO({__proto__:null,default:G},[C]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var TO=C,bO=Symbol.for("react.element"),SO=Symbol.for("react.fragment"),CO=Object.prototype.hasOwnProperty,IO=TO.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,AO={key:!0,ref:!0,__self:!0,__source:!0};function ET(t,e,n){var r,i={},o=null,s=null;n!==void 0&&(o=""+n),e.key!==void 0&&(o=""+e.key),e.ref!==void 0&&(s=e.ref);for(r in e)CO.call(e,r)&&!AO.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:bO,type:t,key:o,ref:s,props:i,_owner:IO.current}}Jf.Fragment=SO;Jf.jsx=ET;Jf.jsxs=ET;fT.exports=Jf;var _=fT.exports,Am={},xT={exports:{}},In={},TT={exports:{}},bT={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(M,W){var $=M.length;M.push(W);e:for(;0<$;){var ie=$-1>>>1,he=M[ie];if(0<i(he,W))M[ie]=W,M[$]=he,$=ie;else break e}}function n(M){return M.length===0?null:M[0]}function r(M){if(M.length===0)return null;var W=M[0],$=M.pop();if($!==W){M[0]=$;e:for(var ie=0,he=M.length,Oe=he>>>1;ie<Oe;){var Te=2*(ie+1)-1,L=M[Te],ye=Te+1,Me=M[ye];if(0>i(L,$))ye<he&&0>i(Me,L)?(M[ie]=Me,M[ye]=$,ie=ye):(M[ie]=L,M[Te]=$,ie=Te);else if(ye<he&&0>i(Me,$))M[ie]=Me,M[ye]=$,ie=ye;else break e}}return W}function i(M,W){var $=M.sortIndex-W.sortIndex;return $!==0?$:M.id-W.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;t.unstable_now=function(){return o.now()}}else{var s=Date,a=s.now();t.unstable_now=function(){return s.now()-a}}var l=[],u=[],d=1,h=null,p=3,g=!1,T=!1,b=!1,S=typeof setTimeout=="function"?setTimeout:null,E=typeof clearTimeout=="function"?clearTimeout:null,m=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function v(M){for(var W=n(u);W!==null;){if(W.callback===null)r(u);else if(W.startTime<=M)r(u),W.sortIndex=W.expirationTime,e(l,W);else break;W=n(u)}}function x(M){if(b=!1,v(M),!T)if(n(l)!==null)T=!0,Y(A);else{var W=n(u);W!==null&&N(x,W.startTime-M)}}function A(M,W){T=!1,b&&(b=!1,E(R),R=-1),g=!0;var $=p;try{for(v(W),h=n(l);h!==null&&(!(h.expirationTime>W)||M&&!q());){var ie=h.callback;if(typeof ie=="function"){h.callback=null,p=h.priorityLevel;var he=ie(h.expirationTime<=W);W=t.unstable_now(),typeof he=="function"?h.callback=he:h===n(l)&&r(l),v(W)}else r(l);h=n(l)}if(h!==null)var Oe=!0;else{var Te=n(u);Te!==null&&N(x,Te.startTime-W),Oe=!1}return Oe}finally{h=null,p=$,g=!1}}var k=!1,P=null,R=-1,O=5,D=-1;function q(){return!(t.unstable_now()-D<O)}function B(){if(P!==null){var M=t.unstable_now();D=M;var W=!0;try{W=P(!0,M)}finally{W?U():(k=!1,P=null)}}else k=!1}var U;if(typeof m=="function")U=function(){m(B)};else if(typeof MessageChannel<"u"){var V=new MessageChannel,z=V.port2;V.port1.onmessage=B,U=function(){z.postMessage(null)}}else U=function(){S(B,0)};function Y(M){P=M,k||(k=!0,U())}function N(M,W){R=S(function(){M(t.unstable_now())},W)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(M){M.callback=null},t.unstable_continueExecution=function(){T||g||(T=!0,Y(A))},t.unstable_forceFrameRate=function(M){0>M||125<M?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):O=0<M?Math.floor(1e3/M):5},t.unstable_getCurrentPriorityLevel=function(){return p},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(M){switch(p){case 1:case 2:case 3:var W=3;break;default:W=p}var $=p;p=W;try{return M()}finally{p=$}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(M,W){switch(M){case 1:case 2:case 3:case 4:case 5:break;default:M=3}var $=p;p=M;try{return W()}finally{p=$}},t.unstable_scheduleCallback=function(M,W,$){var ie=t.unstable_now();switch(typeof $=="object"&&$!==null?($=$.delay,$=typeof $=="number"&&0<$?ie+$:ie):$=ie,M){case 1:var he=-1;break;case 2:he=250;break;case 5:he=1073741823;break;case 4:he=1e4;break;default:he=5e3}return he=$+he,M={id:d++,callback:W,priorityLevel:M,startTime:$,expirationTime:he,sortIndex:-1},$>ie?(M.sortIndex=$,e(u,M),n(l)===null&&M===n(u)&&(b?(E(R),R=-1):b=!0,N(x,$-ie))):(M.sortIndex=he,e(l,M),T||g||(T=!0,Y(A))),M},t.unstable_shouldYield=q,t.unstable_wrapCallback=function(M){var W=p;return function(){var $=p;p=W;try{return M.apply(this,arguments)}finally{p=$}}}})(bT);TT.exports=bT;var PO=TT.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ST=C,Sn=PO;function Q(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var CT=new Set,tu={};function os(t,e){sa(t,e),sa(t+"Capture",e)}function sa(t,e){for(tu[t]=e,t=0;t<e.length;t++)CT.add(e[t])}var ei=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Pm=Object.prototype.hasOwnProperty,kO=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,p1={},m1={};function RO(t){return Pm.call(m1,t)?!0:Pm.call(p1,t)?!1:kO.test(t)?m1[t]=!0:(p1[t]=!0,!1)}function OO(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function DO(t,e,n,r){if(e===null||typeof e>"u"||OO(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function sn(t,e,n,r,i,o,s){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=o,this.removeEmptyString=s}var Nt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Nt[t]=new sn(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Nt[e]=new sn(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Nt[t]=new sn(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Nt[t]=new sn(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Nt[t]=new sn(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Nt[t]=new sn(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Nt[t]=new sn(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Nt[t]=new sn(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Nt[t]=new sn(t,5,!1,t.toLowerCase(),null,!1,!1)});var Dv=/[\-:]([a-z])/g;function Nv(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Dv,Nv);Nt[e]=new sn(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Dv,Nv);Nt[e]=new sn(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Dv,Nv);Nt[e]=new sn(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Nt[t]=new sn(t,1,!1,t.toLowerCase(),null,!1,!1)});Nt.xlinkHref=new sn("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Nt[t]=new sn(t,1,!1,t.toLowerCase(),null,!0,!0)});function Lv(t,e,n,r){var i=Nt.hasOwnProperty(e)?Nt[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(DO(e,n,i,r)&&(n=null),r||i===null?RO(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var di=ST.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Rc=Symbol.for("react.element"),Os=Symbol.for("react.portal"),Ds=Symbol.for("react.fragment"),Mv=Symbol.for("react.strict_mode"),km=Symbol.for("react.profiler"),IT=Symbol.for("react.provider"),AT=Symbol.for("react.context"),Vv=Symbol.for("react.forward_ref"),Rm=Symbol.for("react.suspense"),Om=Symbol.for("react.suspense_list"),jv=Symbol.for("react.memo"),_i=Symbol.for("react.lazy"),PT=Symbol.for("react.offscreen"),g1=Symbol.iterator;function rl(t){return t===null||typeof t!="object"?null:(t=g1&&t[g1]||t["@@iterator"],typeof t=="function"?t:null)}var Qe=Object.assign,yp;function vl(t){if(yp===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);yp=e&&e[1]||""}return`
`+yp+t}var wp=!1;function _p(t,e){if(!t||wp)return"";wp=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var r=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){r=u}t.call(e.prototype)}else{try{throw Error()}catch(u){r=u}t()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),o=r.stack.split(`
`),s=i.length-1,a=o.length-1;1<=s&&0<=a&&i[s]!==o[a];)a--;for(;1<=s&&0<=a;s--,a--)if(i[s]!==o[a]){if(s!==1||a!==1)do if(s--,a--,0>a||i[s]!==o[a]){var l=`
`+i[s].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=s&&0<=a);break}}}finally{wp=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?vl(t):""}function NO(t){switch(t.tag){case 5:return vl(t.type);case 16:return vl("Lazy");case 13:return vl("Suspense");case 19:return vl("SuspenseList");case 0:case 2:case 15:return t=_p(t.type,!1),t;case 11:return t=_p(t.type.render,!1),t;case 1:return t=_p(t.type,!0),t;default:return""}}function Dm(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Ds:return"Fragment";case Os:return"Portal";case km:return"Profiler";case Mv:return"StrictMode";case Rm:return"Suspense";case Om:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case AT:return(t.displayName||"Context")+".Consumer";case IT:return(t._context.displayName||"Context")+".Provider";case Vv:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case jv:return e=t.displayName||null,e!==null?e:Dm(t.type)||"Memo";case _i:e=t._payload,t=t._init;try{return Dm(t(e))}catch{}}return null}function LO(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Dm(e);case 8:return e===Mv?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Yi(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function kT(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function MO(t){var e=kT(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,o=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(s){r=""+s,o.call(this,s)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(s){r=""+s},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Oc(t){t._valueTracker||(t._valueTracker=MO(t))}function RT(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=kT(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function jd(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Nm(t,e){var n=e.checked;return Qe({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function v1(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=Yi(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function OT(t,e){e=e.checked,e!=null&&Lv(t,"checked",e,!1)}function Lm(t,e){OT(t,e);var n=Yi(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Mm(t,e.type,n):e.hasOwnProperty("defaultValue")&&Mm(t,e.type,Yi(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function y1(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Mm(t,e,n){(e!=="number"||jd(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var yl=Array.isArray;function Ks(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+Yi(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function Vm(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(Q(91));return Qe({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function w1(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(Q(92));if(yl(n)){if(1<n.length)throw Error(Q(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Yi(n)}}function DT(t,e){var n=Yi(e.value),r=Yi(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function _1(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function NT(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function jm(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?NT(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Dc,LT=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Dc=Dc||document.createElement("div"),Dc.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Dc.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function nu(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Rl={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},VO=["Webkit","ms","Moz","O"];Object.keys(Rl).forEach(function(t){VO.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Rl[e]=Rl[t]})});function MT(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Rl.hasOwnProperty(t)&&Rl[t]?(""+e).trim():e+"px"}function VT(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=MT(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var jO=Qe({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Fm(t,e){if(e){if(jO[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(Q(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(Q(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(Q(61))}if(e.style!=null&&typeof e.style!="object")throw Error(Q(62))}}function $m(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Bm=null;function Fv(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Um=null,Qs=null,Ys=null;function E1(t){if(t=qu(t)){if(typeof Um!="function")throw Error(Q(280));var e=t.stateNode;e&&(e=rh(e),Um(t.stateNode,t.type,e))}}function jT(t){Qs?Ys?Ys.push(t):Ys=[t]:Qs=t}function FT(){if(Qs){var t=Qs,e=Ys;if(Ys=Qs=null,E1(t),e)for(t=0;t<e.length;t++)E1(e[t])}}function $T(t,e){return t(e)}function BT(){}var Ep=!1;function UT(t,e,n){if(Ep)return t(e,n);Ep=!0;try{return $T(t,e,n)}finally{Ep=!1,(Qs!==null||Ys!==null)&&(BT(),FT())}}function ru(t,e){var n=t.stateNode;if(n===null)return null;var r=rh(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(Q(231,e,typeof n));return n}var zm=!1;if(ei)try{var il={};Object.defineProperty(il,"passive",{get:function(){zm=!0}}),window.addEventListener("test",il,il),window.removeEventListener("test",il,il)}catch{zm=!1}function FO(t,e,n,r,i,o,s,a,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(d){this.onError(d)}}var Ol=!1,Fd=null,$d=!1,Hm=null,$O={onError:function(t){Ol=!0,Fd=t}};function BO(t,e,n,r,i,o,s,a,l){Ol=!1,Fd=null,FO.apply($O,arguments)}function UO(t,e,n,r,i,o,s,a,l){if(BO.apply(this,arguments),Ol){if(Ol){var u=Fd;Ol=!1,Fd=null}else throw Error(Q(198));$d||($d=!0,Hm=u)}}function ss(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function zT(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function x1(t){if(ss(t)!==t)throw Error(Q(188))}function zO(t){var e=t.alternate;if(!e){if(e=ss(t),e===null)throw Error(Q(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return x1(i),t;if(o===r)return x1(i),e;o=o.sibling}throw Error(Q(188))}if(n.return!==r.return)n=i,r=o;else{for(var s=!1,a=i.child;a;){if(a===n){s=!0,n=i,r=o;break}if(a===r){s=!0,r=i,n=o;break}a=a.sibling}if(!s){for(a=o.child;a;){if(a===n){s=!0,n=o,r=i;break}if(a===r){s=!0,r=o,n=i;break}a=a.sibling}if(!s)throw Error(Q(189))}}if(n.alternate!==r)throw Error(Q(190))}if(n.tag!==3)throw Error(Q(188));return n.stateNode.current===n?t:e}function HT(t){return t=zO(t),t!==null?WT(t):null}function WT(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=WT(t);if(e!==null)return e;t=t.sibling}return null}var qT=Sn.unstable_scheduleCallback,T1=Sn.unstable_cancelCallback,HO=Sn.unstable_shouldYield,WO=Sn.unstable_requestPaint,it=Sn.unstable_now,qO=Sn.unstable_getCurrentPriorityLevel,$v=Sn.unstable_ImmediatePriority,GT=Sn.unstable_UserBlockingPriority,Bd=Sn.unstable_NormalPriority,GO=Sn.unstable_LowPriority,KT=Sn.unstable_IdlePriority,Zf=null,Sr=null;function KO(t){if(Sr&&typeof Sr.onCommitFiberRoot=="function")try{Sr.onCommitFiberRoot(Zf,t,void 0,(t.current.flags&128)===128)}catch{}}var Zn=Math.clz32?Math.clz32:XO,QO=Math.log,YO=Math.LN2;function XO(t){return t>>>=0,t===0?32:31-(QO(t)/YO|0)|0}var Nc=64,Lc=4194304;function wl(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Ud(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,o=t.pingedLanes,s=n&268435455;if(s!==0){var a=s&~i;a!==0?r=wl(a):(o&=s,o!==0&&(r=wl(o)))}else s=n&~i,s!==0?r=wl(s):o!==0&&(r=wl(o));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,o=e&-e,i>=o||i===16&&(o&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-Zn(e),i=1<<n,r|=t[n],e&=~i;return r}function JO(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function ZO(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,o=t.pendingLanes;0<o;){var s=31-Zn(o),a=1<<s,l=i[s];l===-1?(!(a&n)||a&r)&&(i[s]=JO(a,e)):l<=e&&(t.expiredLanes|=a),o&=~a}}function Wm(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function QT(){var t=Nc;return Nc<<=1,!(Nc&4194240)&&(Nc=64),t}function xp(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Hu(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Zn(e),t[e]=n}function eD(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-Zn(n),o=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~o}}function Bv(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-Zn(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var Pe=0;function YT(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var XT,Uv,JT,ZT,eb,qm=!1,Mc=[],Vi=null,ji=null,Fi=null,iu=new Map,ou=new Map,xi=[],tD="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function b1(t,e){switch(t){case"focusin":case"focusout":Vi=null;break;case"dragenter":case"dragleave":ji=null;break;case"mouseover":case"mouseout":Fi=null;break;case"pointerover":case"pointerout":iu.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":ou.delete(e.pointerId)}}function ol(t,e,n,r,i,o){return t===null||t.nativeEvent!==o?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},e!==null&&(e=qu(e),e!==null&&Uv(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function nD(t,e,n,r,i){switch(e){case"focusin":return Vi=ol(Vi,t,e,n,r,i),!0;case"dragenter":return ji=ol(ji,t,e,n,r,i),!0;case"mouseover":return Fi=ol(Fi,t,e,n,r,i),!0;case"pointerover":var o=i.pointerId;return iu.set(o,ol(iu.get(o)||null,t,e,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,ou.set(o,ol(ou.get(o)||null,t,e,n,r,i)),!0}return!1}function tb(t){var e=Io(t.target);if(e!==null){var n=ss(e);if(n!==null){if(e=n.tag,e===13){if(e=zT(n),e!==null){t.blockedOn=e,eb(t.priority,function(){JT(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function hd(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Gm(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);Bm=r,n.target.dispatchEvent(r),Bm=null}else return e=qu(n),e!==null&&Uv(e),t.blockedOn=n,!1;e.shift()}return!0}function S1(t,e,n){hd(t)&&n.delete(e)}function rD(){qm=!1,Vi!==null&&hd(Vi)&&(Vi=null),ji!==null&&hd(ji)&&(ji=null),Fi!==null&&hd(Fi)&&(Fi=null),iu.forEach(S1),ou.forEach(S1)}function sl(t,e){t.blockedOn===e&&(t.blockedOn=null,qm||(qm=!0,Sn.unstable_scheduleCallback(Sn.unstable_NormalPriority,rD)))}function su(t){function e(i){return sl(i,t)}if(0<Mc.length){sl(Mc[0],t);for(var n=1;n<Mc.length;n++){var r=Mc[n];r.blockedOn===t&&(r.blockedOn=null)}}for(Vi!==null&&sl(Vi,t),ji!==null&&sl(ji,t),Fi!==null&&sl(Fi,t),iu.forEach(e),ou.forEach(e),n=0;n<xi.length;n++)r=xi[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<xi.length&&(n=xi[0],n.blockedOn===null);)tb(n),n.blockedOn===null&&xi.shift()}var Xs=di.ReactCurrentBatchConfig,zd=!0;function iD(t,e,n,r){var i=Pe,o=Xs.transition;Xs.transition=null;try{Pe=1,zv(t,e,n,r)}finally{Pe=i,Xs.transition=o}}function oD(t,e,n,r){var i=Pe,o=Xs.transition;Xs.transition=null;try{Pe=4,zv(t,e,n,r)}finally{Pe=i,Xs.transition=o}}function zv(t,e,n,r){if(zd){var i=Gm(t,e,n,r);if(i===null)Op(t,e,r,Hd,n),b1(t,r);else if(nD(i,t,e,n,r))r.stopPropagation();else if(b1(t,r),e&4&&-1<tD.indexOf(t)){for(;i!==null;){var o=qu(i);if(o!==null&&XT(o),o=Gm(t,e,n,r),o===null&&Op(t,e,r,Hd,n),o===i)break;i=o}i!==null&&r.stopPropagation()}else Op(t,e,r,null,n)}}var Hd=null;function Gm(t,e,n,r){if(Hd=null,t=Fv(r),t=Io(t),t!==null)if(e=ss(t),e===null)t=null;else if(n=e.tag,n===13){if(t=zT(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Hd=t,null}function nb(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(qO()){case $v:return 1;case GT:return 4;case Bd:case GO:return 16;case KT:return 536870912;default:return 16}default:return 16}}var Pi=null,Hv=null,pd=null;function rb(){if(pd)return pd;var t,e=Hv,n=e.length,r,i="value"in Pi?Pi.value:Pi.textContent,o=i.length;for(t=0;t<n&&e[t]===i[t];t++);var s=n-t;for(r=1;r<=s&&e[n-r]===i[o-r];r++);return pd=i.slice(t,1<r?1-r:void 0)}function md(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Vc(){return!0}function C1(){return!1}function An(t){function e(n,r,i,o,s){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=s,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(o):o[a]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?Vc:C1,this.isPropagationStopped=C1,this}return Qe(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Vc)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Vc)},persist:function(){},isPersistent:Vc}),e}var Pa={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Wv=An(Pa),Wu=Qe({},Pa,{view:0,detail:0}),sD=An(Wu),Tp,bp,al,eh=Qe({},Wu,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:qv,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==al&&(al&&t.type==="mousemove"?(Tp=t.screenX-al.screenX,bp=t.screenY-al.screenY):bp=Tp=0,al=t),Tp)},movementY:function(t){return"movementY"in t?t.movementY:bp}}),I1=An(eh),aD=Qe({},eh,{dataTransfer:0}),lD=An(aD),uD=Qe({},Wu,{relatedTarget:0}),Sp=An(uD),cD=Qe({},Pa,{animationName:0,elapsedTime:0,pseudoElement:0}),dD=An(cD),fD=Qe({},Pa,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),hD=An(fD),pD=Qe({},Pa,{data:0}),A1=An(pD),mD={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},gD={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},vD={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function yD(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=vD[t])?!!e[t]:!1}function qv(){return yD}var wD=Qe({},Wu,{key:function(t){if(t.key){var e=mD[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=md(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?gD[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:qv,charCode:function(t){return t.type==="keypress"?md(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?md(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),_D=An(wD),ED=Qe({},eh,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),P1=An(ED),xD=Qe({},Wu,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:qv}),TD=An(xD),bD=Qe({},Pa,{propertyName:0,elapsedTime:0,pseudoElement:0}),SD=An(bD),CD=Qe({},eh,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),ID=An(CD),AD=[9,13,27,32],Gv=ei&&"CompositionEvent"in window,Dl=null;ei&&"documentMode"in document&&(Dl=document.documentMode);var PD=ei&&"TextEvent"in window&&!Dl,ib=ei&&(!Gv||Dl&&8<Dl&&11>=Dl),k1=String.fromCharCode(32),R1=!1;function ob(t,e){switch(t){case"keyup":return AD.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function sb(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Ns=!1;function kD(t,e){switch(t){case"compositionend":return sb(e);case"keypress":return e.which!==32?null:(R1=!0,k1);case"textInput":return t=e.data,t===k1&&R1?null:t;default:return null}}function RD(t,e){if(Ns)return t==="compositionend"||!Gv&&ob(t,e)?(t=rb(),pd=Hv=Pi=null,Ns=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return ib&&e.locale!=="ko"?null:e.data;default:return null}}var OD={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function O1(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!OD[t.type]:e==="textarea"}function ab(t,e,n,r){jT(r),e=Wd(e,"onChange"),0<e.length&&(n=new Wv("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var Nl=null,au=null;function DD(t){yb(t,0)}function th(t){var e=Vs(t);if(RT(e))return t}function ND(t,e){if(t==="change")return e}var lb=!1;if(ei){var Cp;if(ei){var Ip="oninput"in document;if(!Ip){var D1=document.createElement("div");D1.setAttribute("oninput","return;"),Ip=typeof D1.oninput=="function"}Cp=Ip}else Cp=!1;lb=Cp&&(!document.documentMode||9<document.documentMode)}function N1(){Nl&&(Nl.detachEvent("onpropertychange",ub),au=Nl=null)}function ub(t){if(t.propertyName==="value"&&th(au)){var e=[];ab(e,au,t,Fv(t)),UT(DD,e)}}function LD(t,e,n){t==="focusin"?(N1(),Nl=e,au=n,Nl.attachEvent("onpropertychange",ub)):t==="focusout"&&N1()}function MD(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return th(au)}function VD(t,e){if(t==="click")return th(e)}function jD(t,e){if(t==="input"||t==="change")return th(e)}function FD(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var ir=typeof Object.is=="function"?Object.is:FD;function lu(t,e){if(ir(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Pm.call(e,i)||!ir(t[i],e[i]))return!1}return!0}function L1(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function M1(t,e){var n=L1(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=L1(n)}}function cb(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?cb(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function db(){for(var t=window,e=jd();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=jd(t.document)}return e}function Kv(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function $D(t){var e=db(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&cb(n.ownerDocument.documentElement,n)){if(r!==null&&Kv(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,o=Math.min(r.start,i);r=r.end===void 0?o:Math.min(r.end,i),!t.extend&&o>r&&(i=r,r=o,o=i),i=M1(n,o);var s=M1(n,r);i&&s&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==s.node||t.focusOffset!==s.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),o>r?(t.addRange(e),t.extend(s.node,s.offset)):(e.setEnd(s.node,s.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var BD=ei&&"documentMode"in document&&11>=document.documentMode,Ls=null,Km=null,Ll=null,Qm=!1;function V1(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Qm||Ls==null||Ls!==jd(r)||(r=Ls,"selectionStart"in r&&Kv(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Ll&&lu(Ll,r)||(Ll=r,r=Wd(Km,"onSelect"),0<r.length&&(e=new Wv("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=Ls)))}function jc(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Ms={animationend:jc("Animation","AnimationEnd"),animationiteration:jc("Animation","AnimationIteration"),animationstart:jc("Animation","AnimationStart"),transitionend:jc("Transition","TransitionEnd")},Ap={},fb={};ei&&(fb=document.createElement("div").style,"AnimationEvent"in window||(delete Ms.animationend.animation,delete Ms.animationiteration.animation,delete Ms.animationstart.animation),"TransitionEvent"in window||delete Ms.transitionend.transition);function nh(t){if(Ap[t])return Ap[t];if(!Ms[t])return t;var e=Ms[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in fb)return Ap[t]=e[n];return t}var hb=nh("animationend"),pb=nh("animationiteration"),mb=nh("animationstart"),gb=nh("transitionend"),vb=new Map,j1="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function no(t,e){vb.set(t,e),os(e,[t])}for(var Pp=0;Pp<j1.length;Pp++){var kp=j1[Pp],UD=kp.toLowerCase(),zD=kp[0].toUpperCase()+kp.slice(1);no(UD,"on"+zD)}no(hb,"onAnimationEnd");no(pb,"onAnimationIteration");no(mb,"onAnimationStart");no("dblclick","onDoubleClick");no("focusin","onFocus");no("focusout","onBlur");no(gb,"onTransitionEnd");sa("onMouseEnter",["mouseout","mouseover"]);sa("onMouseLeave",["mouseout","mouseover"]);sa("onPointerEnter",["pointerout","pointerover"]);sa("onPointerLeave",["pointerout","pointerover"]);os("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));os("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));os("onBeforeInput",["compositionend","keypress","textInput","paste"]);os("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));os("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));os("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var _l="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),HD=new Set("cancel close invalid load scroll toggle".split(" ").concat(_l));function F1(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,UO(r,e,void 0,t),t.currentTarget=null}function yb(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var o=void 0;if(e)for(var s=r.length-1;0<=s;s--){var a=r[s],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==o&&i.isPropagationStopped())break e;F1(i,a,u),o=l}else for(s=0;s<r.length;s++){if(a=r[s],l=a.instance,u=a.currentTarget,a=a.listener,l!==o&&i.isPropagationStopped())break e;F1(i,a,u),o=l}}}if($d)throw t=Hm,$d=!1,Hm=null,t}function je(t,e){var n=e[eg];n===void 0&&(n=e[eg]=new Set);var r=t+"__bubble";n.has(r)||(wb(e,t,2,!1),n.add(r))}function Rp(t,e,n){var r=0;e&&(r|=4),wb(n,t,r,e)}var Fc="_reactListening"+Math.random().toString(36).slice(2);function uu(t){if(!t[Fc]){t[Fc]=!0,CT.forEach(function(n){n!=="selectionchange"&&(HD.has(n)||Rp(n,!1,t),Rp(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Fc]||(e[Fc]=!0,Rp("selectionchange",!1,e))}}function wb(t,e,n,r){switch(nb(e)){case 1:var i=iD;break;case 4:i=oD;break;default:i=zv}n=i.bind(null,e,n,t),i=void 0,!zm||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function Op(t,e,n,r,i){var o=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(s===4)for(s=r.return;s!==null;){var l=s.tag;if((l===3||l===4)&&(l=s.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;s=s.return}for(;a!==null;){if(s=Io(a),s===null)return;if(l=s.tag,l===5||l===6){r=o=s;continue e}a=a.parentNode}}r=r.return}UT(function(){var u=o,d=Fv(n),h=[];e:{var p=vb.get(t);if(p!==void 0){var g=Wv,T=t;switch(t){case"keypress":if(md(n)===0)break e;case"keydown":case"keyup":g=_D;break;case"focusin":T="focus",g=Sp;break;case"focusout":T="blur",g=Sp;break;case"beforeblur":case"afterblur":g=Sp;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":g=I1;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":g=lD;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":g=TD;break;case hb:case pb:case mb:g=dD;break;case gb:g=SD;break;case"scroll":g=sD;break;case"wheel":g=ID;break;case"copy":case"cut":case"paste":g=hD;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":g=P1}var b=(e&4)!==0,S=!b&&t==="scroll",E=b?p!==null?p+"Capture":null:p;b=[];for(var m=u,v;m!==null;){v=m;var x=v.stateNode;if(v.tag===5&&x!==null&&(v=x,E!==null&&(x=ru(m,E),x!=null&&b.push(cu(m,x,v)))),S)break;m=m.return}0<b.length&&(p=new g(p,T,null,n,d),h.push({event:p,listeners:b}))}}if(!(e&7)){e:{if(p=t==="mouseover"||t==="pointerover",g=t==="mouseout"||t==="pointerout",p&&n!==Bm&&(T=n.relatedTarget||n.fromElement)&&(Io(T)||T[ti]))break e;if((g||p)&&(p=d.window===d?d:(p=d.ownerDocument)?p.defaultView||p.parentWindow:window,g?(T=n.relatedTarget||n.toElement,g=u,T=T?Io(T):null,T!==null&&(S=ss(T),T!==S||T.tag!==5&&T.tag!==6)&&(T=null)):(g=null,T=u),g!==T)){if(b=I1,x="onMouseLeave",E="onMouseEnter",m="mouse",(t==="pointerout"||t==="pointerover")&&(b=P1,x="onPointerLeave",E="onPointerEnter",m="pointer"),S=g==null?p:Vs(g),v=T==null?p:Vs(T),p=new b(x,m+"leave",g,n,d),p.target=S,p.relatedTarget=v,x=null,Io(d)===u&&(b=new b(E,m+"enter",T,n,d),b.target=v,b.relatedTarget=S,x=b),S=x,g&&T)t:{for(b=g,E=T,m=0,v=b;v;v=_s(v))m++;for(v=0,x=E;x;x=_s(x))v++;for(;0<m-v;)b=_s(b),m--;for(;0<v-m;)E=_s(E),v--;for(;m--;){if(b===E||E!==null&&b===E.alternate)break t;b=_s(b),E=_s(E)}b=null}else b=null;g!==null&&$1(h,p,g,b,!1),T!==null&&S!==null&&$1(h,S,T,b,!0)}}e:{if(p=u?Vs(u):window,g=p.nodeName&&p.nodeName.toLowerCase(),g==="select"||g==="input"&&p.type==="file")var A=ND;else if(O1(p))if(lb)A=jD;else{A=MD;var k=LD}else(g=p.nodeName)&&g.toLowerCase()==="input"&&(p.type==="checkbox"||p.type==="radio")&&(A=VD);if(A&&(A=A(t,u))){ab(h,A,n,d);break e}k&&k(t,p,u),t==="focusout"&&(k=p._wrapperState)&&k.controlled&&p.type==="number"&&Mm(p,"number",p.value)}switch(k=u?Vs(u):window,t){case"focusin":(O1(k)||k.contentEditable==="true")&&(Ls=k,Km=u,Ll=null);break;case"focusout":Ll=Km=Ls=null;break;case"mousedown":Qm=!0;break;case"contextmenu":case"mouseup":case"dragend":Qm=!1,V1(h,n,d);break;case"selectionchange":if(BD)break;case"keydown":case"keyup":V1(h,n,d)}var P;if(Gv)e:{switch(t){case"compositionstart":var R="onCompositionStart";break e;case"compositionend":R="onCompositionEnd";break e;case"compositionupdate":R="onCompositionUpdate";break e}R=void 0}else Ns?ob(t,n)&&(R="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(R="onCompositionStart");R&&(ib&&n.locale!=="ko"&&(Ns||R!=="onCompositionStart"?R==="onCompositionEnd"&&Ns&&(P=rb()):(Pi=d,Hv="value"in Pi?Pi.value:Pi.textContent,Ns=!0)),k=Wd(u,R),0<k.length&&(R=new A1(R,t,null,n,d),h.push({event:R,listeners:k}),P?R.data=P:(P=sb(n),P!==null&&(R.data=P)))),(P=PD?kD(t,n):RD(t,n))&&(u=Wd(u,"onBeforeInput"),0<u.length&&(d=new A1("onBeforeInput","beforeinput",null,n,d),h.push({event:d,listeners:u}),d.data=P))}yb(h,e)})}function cu(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Wd(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=ru(t,n),o!=null&&r.unshift(cu(t,o,i)),o=ru(t,e),o!=null&&r.push(cu(t,o,i))),t=t.return}return r}function _s(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function $1(t,e,n,r,i){for(var o=e._reactName,s=[];n!==null&&n!==r;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&u!==null&&(a=u,i?(l=ru(n,o),l!=null&&s.unshift(cu(n,l,a))):i||(l=ru(n,o),l!=null&&s.push(cu(n,l,a)))),n=n.return}s.length!==0&&t.push({event:e,listeners:s})}var WD=/\r\n?/g,qD=/\u0000|\uFFFD/g;function B1(t){return(typeof t=="string"?t:""+t).replace(WD,`
`).replace(qD,"")}function $c(t,e,n){if(e=B1(e),B1(t)!==e&&n)throw Error(Q(425))}function qd(){}var Ym=null,Xm=null;function Jm(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Zm=typeof setTimeout=="function"?setTimeout:void 0,GD=typeof clearTimeout=="function"?clearTimeout:void 0,U1=typeof Promise=="function"?Promise:void 0,KD=typeof queueMicrotask=="function"?queueMicrotask:typeof U1<"u"?function(t){return U1.resolve(null).then(t).catch(QD)}:Zm;function QD(t){setTimeout(function(){throw t})}function Dp(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),su(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);su(e)}function $i(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function z1(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var ka=Math.random().toString(36).slice(2),wr="__reactFiber$"+ka,du="__reactProps$"+ka,ti="__reactContainer$"+ka,eg="__reactEvents$"+ka,YD="__reactListeners$"+ka,XD="__reactHandles$"+ka;function Io(t){var e=t[wr];if(e)return e;for(var n=t.parentNode;n;){if(e=n[ti]||n[wr]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=z1(t);t!==null;){if(n=t[wr])return n;t=z1(t)}return e}t=n,n=t.parentNode}return null}function qu(t){return t=t[wr]||t[ti],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Vs(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(Q(33))}function rh(t){return t[du]||null}var tg=[],js=-1;function ro(t){return{current:t}}function Ue(t){0>js||(t.current=tg[js],tg[js]=null,js--)}function Le(t,e){js++,tg[js]=t.current,t.current=e}var Xi={},Gt=ro(Xi),pn=ro(!1),Uo=Xi;function aa(t,e){var n=t.type.contextTypes;if(!n)return Xi;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in n)i[o]=e[o];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function mn(t){return t=t.childContextTypes,t!=null}function Gd(){Ue(pn),Ue(Gt)}function H1(t,e,n){if(Gt.current!==Xi)throw Error(Q(168));Le(Gt,e),Le(pn,n)}function _b(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(Q(108,LO(t)||"Unknown",i));return Qe({},n,r)}function Kd(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Xi,Uo=Gt.current,Le(Gt,t),Le(pn,pn.current),!0}function W1(t,e,n){var r=t.stateNode;if(!r)throw Error(Q(169));n?(t=_b(t,e,Uo),r.__reactInternalMemoizedMergedChildContext=t,Ue(pn),Ue(Gt),Le(Gt,t)):Ue(pn),Le(pn,n)}var qr=null,ih=!1,Np=!1;function Eb(t){qr===null?qr=[t]:qr.push(t)}function JD(t){ih=!0,Eb(t)}function io(){if(!Np&&qr!==null){Np=!0;var t=0,e=Pe;try{var n=qr;for(Pe=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}qr=null,ih=!1}catch(i){throw qr!==null&&(qr=qr.slice(t+1)),qT($v,io),i}finally{Pe=e,Np=!1}}return null}var Fs=[],$s=0,Qd=null,Yd=0,Nn=[],Ln=0,zo=null,Gr=1,Kr="";function Eo(t,e){Fs[$s++]=Yd,Fs[$s++]=Qd,Qd=t,Yd=e}function xb(t,e,n){Nn[Ln++]=Gr,Nn[Ln++]=Kr,Nn[Ln++]=zo,zo=t;var r=Gr;t=Kr;var i=32-Zn(r)-1;r&=~(1<<i),n+=1;var o=32-Zn(e)+i;if(30<o){var s=i-i%5;o=(r&(1<<s)-1).toString(32),r>>=s,i-=s,Gr=1<<32-Zn(e)+i|n<<i|r,Kr=o+t}else Gr=1<<o|n<<i|r,Kr=t}function Qv(t){t.return!==null&&(Eo(t,1),xb(t,1,0))}function Yv(t){for(;t===Qd;)Qd=Fs[--$s],Fs[$s]=null,Yd=Fs[--$s],Fs[$s]=null;for(;t===zo;)zo=Nn[--Ln],Nn[Ln]=null,Kr=Nn[--Ln],Nn[Ln]=null,Gr=Nn[--Ln],Nn[Ln]=null}var bn=null,xn=null,We=!1,Xn=null;function Tb(t,e){var n=jn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function q1(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,bn=t,xn=$i(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,bn=t,xn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=zo!==null?{id:Gr,overflow:Kr}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=jn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,bn=t,xn=null,!0):!1;default:return!1}}function ng(t){return(t.mode&1)!==0&&(t.flags&128)===0}function rg(t){if(We){var e=xn;if(e){var n=e;if(!q1(t,e)){if(ng(t))throw Error(Q(418));e=$i(n.nextSibling);var r=bn;e&&q1(t,e)?Tb(r,n):(t.flags=t.flags&-4097|2,We=!1,bn=t)}}else{if(ng(t))throw Error(Q(418));t.flags=t.flags&-4097|2,We=!1,bn=t}}}function G1(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;bn=t}function Bc(t){if(t!==bn)return!1;if(!We)return G1(t),We=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Jm(t.type,t.memoizedProps)),e&&(e=xn)){if(ng(t))throw bb(),Error(Q(418));for(;e;)Tb(t,e),e=$i(e.nextSibling)}if(G1(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(Q(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){xn=$i(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}xn=null}}else xn=bn?$i(t.stateNode.nextSibling):null;return!0}function bb(){for(var t=xn;t;)t=$i(t.nextSibling)}function la(){xn=bn=null,We=!1}function Xv(t){Xn===null?Xn=[t]:Xn.push(t)}var ZD=di.ReactCurrentBatchConfig;function Kn(t,e){if(t&&t.defaultProps){e=Qe({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}var Xd=ro(null),Jd=null,Bs=null,Jv=null;function Zv(){Jv=Bs=Jd=null}function ey(t){var e=Xd.current;Ue(Xd),t._currentValue=e}function ig(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function Js(t,e){Jd=t,Jv=Bs=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(dn=!0),t.firstContext=null)}function $n(t){var e=t._currentValue;if(Jv!==t)if(t={context:t,memoizedValue:e,next:null},Bs===null){if(Jd===null)throw Error(Q(308));Bs=t,Jd.dependencies={lanes:0,firstContext:t}}else Bs=Bs.next=t;return e}var Ao=null;function ty(t){Ao===null?Ao=[t]:Ao.push(t)}function Sb(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,ty(e)):(n.next=i.next,i.next=n),e.interleaved=n,ni(t,r)}function ni(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Ei=!1;function ny(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Cb(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Jr(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Bi(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,xe&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,ni(t,n)}return i=r.interleaved,i===null?(e.next=e,ty(r)):(e.next=i.next,i.next=e),r.interleaved=e,ni(t,n)}function gd(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Bv(t,n)}}function K1(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var s={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?i=o=s:o=o.next=s,n=n.next}while(n!==null);o===null?i=o=e:o=o.next=e}else i=o=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Zd(t,e,n,r){var i=t.updateQueue;Ei=!1;var o=i.firstBaseUpdate,s=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,u=l.next;l.next=null,s===null?o=u:s.next=u,s=l;var d=t.alternate;d!==null&&(d=d.updateQueue,a=d.lastBaseUpdate,a!==s&&(a===null?d.firstBaseUpdate=u:a.next=u,d.lastBaseUpdate=l))}if(o!==null){var h=i.baseState;s=0,d=u=l=null,a=o;do{var p=a.lane,g=a.eventTime;if((r&p)===p){d!==null&&(d=d.next={eventTime:g,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var T=t,b=a;switch(p=e,g=n,b.tag){case 1:if(T=b.payload,typeof T=="function"){h=T.call(g,h,p);break e}h=T;break e;case 3:T.flags=T.flags&-65537|128;case 0:if(T=b.payload,p=typeof T=="function"?T.call(g,h,p):T,p==null)break e;h=Qe({},h,p);break e;case 2:Ei=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,p=i.effects,p===null?i.effects=[a]:p.push(a))}else g={eventTime:g,lane:p,tag:a.tag,payload:a.payload,callback:a.callback,next:null},d===null?(u=d=g,l=h):d=d.next=g,s|=p;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;p=a,a=p.next,p.next=null,i.lastBaseUpdate=p,i.shared.pending=null}}while(1);if(d===null&&(l=h),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=d,e=i.shared.interleaved,e!==null){i=e;do s|=i.lane,i=i.next;while(i!==e)}else o===null&&(i.shared.lanes=0);Wo|=s,t.lanes=s,t.memoizedState=h}}function Q1(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(Q(191,i));i.call(r)}}}var Ib=new ST.Component().refs;function og(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:Qe({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var oh={isMounted:function(t){return(t=t._reactInternals)?ss(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=nn(),i=zi(t),o=Jr(r,i);o.payload=e,n!=null&&(o.callback=n),e=Bi(t,o,i),e!==null&&(er(e,t,i,r),gd(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=nn(),i=zi(t),o=Jr(r,i);o.tag=1,o.payload=e,n!=null&&(o.callback=n),e=Bi(t,o,i),e!==null&&(er(e,t,i,r),gd(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=nn(),r=zi(t),i=Jr(n,r);i.tag=2,e!=null&&(i.callback=e),e=Bi(t,i,r),e!==null&&(er(e,t,r,n),gd(e,t,r))}};function Y1(t,e,n,r,i,o,s){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,o,s):e.prototype&&e.prototype.isPureReactComponent?!lu(n,r)||!lu(i,o):!0}function Ab(t,e,n){var r=!1,i=Xi,o=e.contextType;return typeof o=="object"&&o!==null?o=$n(o):(i=mn(e)?Uo:Gt.current,r=e.contextTypes,o=(r=r!=null)?aa(t,i):Xi),e=new e(n,o),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=oh,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=o),e}function X1(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&oh.enqueueReplaceState(e,e.state,null)}function sg(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs=Ib,ny(t);var o=e.contextType;typeof o=="object"&&o!==null?i.context=$n(o):(o=mn(e)?Uo:Gt.current,i.context=aa(t,o)),i.state=t.memoizedState,o=e.getDerivedStateFromProps,typeof o=="function"&&(og(t,e,o,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&oh.enqueueReplaceState(i,i.state,null),Zd(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function ll(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(Q(309));var r=n.stateNode}if(!r)throw Error(Q(147,t));var i=r,o=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===o?e.ref:(e=function(s){var a=i.refs;a===Ib&&(a=i.refs={}),s===null?delete a[o]:a[o]=s},e._stringRef=o,e)}if(typeof t!="string")throw Error(Q(284));if(!n._owner)throw Error(Q(290,t))}return t}function Uc(t,e){throw t=Object.prototype.toString.call(e),Error(Q(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function J1(t){var e=t._init;return e(t._payload)}function Pb(t){function e(E,m){if(t){var v=E.deletions;v===null?(E.deletions=[m],E.flags|=16):v.push(m)}}function n(E,m){if(!t)return null;for(;m!==null;)e(E,m),m=m.sibling;return null}function r(E,m){for(E=new Map;m!==null;)m.key!==null?E.set(m.key,m):E.set(m.index,m),m=m.sibling;return E}function i(E,m){return E=Hi(E,m),E.index=0,E.sibling=null,E}function o(E,m,v){return E.index=v,t?(v=E.alternate,v!==null?(v=v.index,v<m?(E.flags|=2,m):v):(E.flags|=2,m)):(E.flags|=1048576,m)}function s(E){return t&&E.alternate===null&&(E.flags|=2),E}function a(E,m,v,x){return m===null||m.tag!==6?(m=Bp(v,E.mode,x),m.return=E,m):(m=i(m,v),m.return=E,m)}function l(E,m,v,x){var A=v.type;return A===Ds?d(E,m,v.props.children,x,v.key):m!==null&&(m.elementType===A||typeof A=="object"&&A!==null&&A.$$typeof===_i&&J1(A)===m.type)?(x=i(m,v.props),x.ref=ll(E,m,v),x.return=E,x):(x=xd(v.type,v.key,v.props,null,E.mode,x),x.ref=ll(E,m,v),x.return=E,x)}function u(E,m,v,x){return m===null||m.tag!==4||m.stateNode.containerInfo!==v.containerInfo||m.stateNode.implementation!==v.implementation?(m=Up(v,E.mode,x),m.return=E,m):(m=i(m,v.children||[]),m.return=E,m)}function d(E,m,v,x,A){return m===null||m.tag!==7?(m=Lo(v,E.mode,x,A),m.return=E,m):(m=i(m,v),m.return=E,m)}function h(E,m,v){if(typeof m=="string"&&m!==""||typeof m=="number")return m=Bp(""+m,E.mode,v),m.return=E,m;if(typeof m=="object"&&m!==null){switch(m.$$typeof){case Rc:return v=xd(m.type,m.key,m.props,null,E.mode,v),v.ref=ll(E,null,m),v.return=E,v;case Os:return m=Up(m,E.mode,v),m.return=E,m;case _i:var x=m._init;return h(E,x(m._payload),v)}if(yl(m)||rl(m))return m=Lo(m,E.mode,v,null),m.return=E,m;Uc(E,m)}return null}function p(E,m,v,x){var A=m!==null?m.key:null;if(typeof v=="string"&&v!==""||typeof v=="number")return A!==null?null:a(E,m,""+v,x);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Rc:return v.key===A?l(E,m,v,x):null;case Os:return v.key===A?u(E,m,v,x):null;case _i:return A=v._init,p(E,m,A(v._payload),x)}if(yl(v)||rl(v))return A!==null?null:d(E,m,v,x,null);Uc(E,v)}return null}function g(E,m,v,x,A){if(typeof x=="string"&&x!==""||typeof x=="number")return E=E.get(v)||null,a(m,E,""+x,A);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case Rc:return E=E.get(x.key===null?v:x.key)||null,l(m,E,x,A);case Os:return E=E.get(x.key===null?v:x.key)||null,u(m,E,x,A);case _i:var k=x._init;return g(E,m,v,k(x._payload),A)}if(yl(x)||rl(x))return E=E.get(v)||null,d(m,E,x,A,null);Uc(m,x)}return null}function T(E,m,v,x){for(var A=null,k=null,P=m,R=m=0,O=null;P!==null&&R<v.length;R++){P.index>R?(O=P,P=null):O=P.sibling;var D=p(E,P,v[R],x);if(D===null){P===null&&(P=O);break}t&&P&&D.alternate===null&&e(E,P),m=o(D,m,R),k===null?A=D:k.sibling=D,k=D,P=O}if(R===v.length)return n(E,P),We&&Eo(E,R),A;if(P===null){for(;R<v.length;R++)P=h(E,v[R],x),P!==null&&(m=o(P,m,R),k===null?A=P:k.sibling=P,k=P);return We&&Eo(E,R),A}for(P=r(E,P);R<v.length;R++)O=g(P,E,R,v[R],x),O!==null&&(t&&O.alternate!==null&&P.delete(O.key===null?R:O.key),m=o(O,m,R),k===null?A=O:k.sibling=O,k=O);return t&&P.forEach(function(q){return e(E,q)}),We&&Eo(E,R),A}function b(E,m,v,x){var A=rl(v);if(typeof A!="function")throw Error(Q(150));if(v=A.call(v),v==null)throw Error(Q(151));for(var k=A=null,P=m,R=m=0,O=null,D=v.next();P!==null&&!D.done;R++,D=v.next()){P.index>R?(O=P,P=null):O=P.sibling;var q=p(E,P,D.value,x);if(q===null){P===null&&(P=O);break}t&&P&&q.alternate===null&&e(E,P),m=o(q,m,R),k===null?A=q:k.sibling=q,k=q,P=O}if(D.done)return n(E,P),We&&Eo(E,R),A;if(P===null){for(;!D.done;R++,D=v.next())D=h(E,D.value,x),D!==null&&(m=o(D,m,R),k===null?A=D:k.sibling=D,k=D);return We&&Eo(E,R),A}for(P=r(E,P);!D.done;R++,D=v.next())D=g(P,E,R,D.value,x),D!==null&&(t&&D.alternate!==null&&P.delete(D.key===null?R:D.key),m=o(D,m,R),k===null?A=D:k.sibling=D,k=D);return t&&P.forEach(function(B){return e(E,B)}),We&&Eo(E,R),A}function S(E,m,v,x){if(typeof v=="object"&&v!==null&&v.type===Ds&&v.key===null&&(v=v.props.children),typeof v=="object"&&v!==null){switch(v.$$typeof){case Rc:e:{for(var A=v.key,k=m;k!==null;){if(k.key===A){if(A=v.type,A===Ds){if(k.tag===7){n(E,k.sibling),m=i(k,v.props.children),m.return=E,E=m;break e}}else if(k.elementType===A||typeof A=="object"&&A!==null&&A.$$typeof===_i&&J1(A)===k.type){n(E,k.sibling),m=i(k,v.props),m.ref=ll(E,k,v),m.return=E,E=m;break e}n(E,k);break}else e(E,k);k=k.sibling}v.type===Ds?(m=Lo(v.props.children,E.mode,x,v.key),m.return=E,E=m):(x=xd(v.type,v.key,v.props,null,E.mode,x),x.ref=ll(E,m,v),x.return=E,E=x)}return s(E);case Os:e:{for(k=v.key;m!==null;){if(m.key===k)if(m.tag===4&&m.stateNode.containerInfo===v.containerInfo&&m.stateNode.implementation===v.implementation){n(E,m.sibling),m=i(m,v.children||[]),m.return=E,E=m;break e}else{n(E,m);break}else e(E,m);m=m.sibling}m=Up(v,E.mode,x),m.return=E,E=m}return s(E);case _i:return k=v._init,S(E,m,k(v._payload),x)}if(yl(v))return T(E,m,v,x);if(rl(v))return b(E,m,v,x);Uc(E,v)}return typeof v=="string"&&v!==""||typeof v=="number"?(v=""+v,m!==null&&m.tag===6?(n(E,m.sibling),m=i(m,v),m.return=E,E=m):(n(E,m),m=Bp(v,E.mode,x),m.return=E,E=m),s(E)):n(E,m)}return S}var ua=Pb(!0),kb=Pb(!1),Gu={},Cr=ro(Gu),fu=ro(Gu),hu=ro(Gu);function Po(t){if(t===Gu)throw Error(Q(174));return t}function ry(t,e){switch(Le(hu,e),Le(fu,t),Le(Cr,Gu),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:jm(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=jm(e,t)}Ue(Cr),Le(Cr,e)}function ca(){Ue(Cr),Ue(fu),Ue(hu)}function Rb(t){Po(hu.current);var e=Po(Cr.current),n=jm(e,t.type);e!==n&&(Le(fu,t),Le(Cr,n))}function iy(t){fu.current===t&&(Ue(Cr),Ue(fu))}var Ge=ro(0);function ef(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Lp=[];function oy(){for(var t=0;t<Lp.length;t++)Lp[t]._workInProgressVersionPrimary=null;Lp.length=0}var vd=di.ReactCurrentDispatcher,Mp=di.ReactCurrentBatchConfig,Ho=0,Ke=null,pt=null,_t=null,tf=!1,Ml=!1,pu=0,eN=0;function Vt(){throw Error(Q(321))}function sy(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!ir(t[n],e[n]))return!1;return!0}function ay(t,e,n,r,i,o){if(Ho=o,Ke=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,vd.current=t===null||t.memoizedState===null?iN:oN,t=n(r,i),Ml){o=0;do{if(Ml=!1,pu=0,25<=o)throw Error(Q(301));o+=1,_t=pt=null,e.updateQueue=null,vd.current=sN,t=n(r,i)}while(Ml)}if(vd.current=nf,e=pt!==null&&pt.next!==null,Ho=0,_t=pt=Ke=null,tf=!1,e)throw Error(Q(300));return t}function ly(){var t=pu!==0;return pu=0,t}function vr(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return _t===null?Ke.memoizedState=_t=t:_t=_t.next=t,_t}function Bn(){if(pt===null){var t=Ke.alternate;t=t!==null?t.memoizedState:null}else t=pt.next;var e=_t===null?Ke.memoizedState:_t.next;if(e!==null)_t=e,pt=t;else{if(t===null)throw Error(Q(310));pt=t,t={memoizedState:pt.memoizedState,baseState:pt.baseState,baseQueue:pt.baseQueue,queue:pt.queue,next:null},_t===null?Ke.memoizedState=_t=t:_t=_t.next=t}return _t}function mu(t,e){return typeof e=="function"?e(t):e}function Vp(t){var e=Bn(),n=e.queue;if(n===null)throw Error(Q(311));n.lastRenderedReducer=t;var r=pt,i=r.baseQueue,o=n.pending;if(o!==null){if(i!==null){var s=i.next;i.next=o.next,o.next=s}r.baseQueue=i=o,n.pending=null}if(i!==null){o=i.next,r=r.baseState;var a=s=null,l=null,u=o;do{var d=u.lane;if((Ho&d)===d)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:t(r,u.action);else{var h={lane:d,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=h,s=r):l=l.next=h,Ke.lanes|=d,Wo|=d}u=u.next}while(u!==null&&u!==o);l===null?s=r:l.next=a,ir(r,e.memoizedState)||(dn=!0),e.memoizedState=r,e.baseState=s,e.baseQueue=l,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do o=i.lane,Ke.lanes|=o,Wo|=o,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function jp(t){var e=Bn(),n=e.queue;if(n===null)throw Error(Q(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,o=e.memoizedState;if(i!==null){n.pending=null;var s=i=i.next;do o=t(o,s.action),s=s.next;while(s!==i);ir(o,e.memoizedState)||(dn=!0),e.memoizedState=o,e.baseQueue===null&&(e.baseState=o),n.lastRenderedState=o}return[o,r]}function Ob(){}function Db(t,e){var n=Ke,r=Bn(),i=e(),o=!ir(r.memoizedState,i);if(o&&(r.memoizedState=i,dn=!0),r=r.queue,uy(Mb.bind(null,n,r,t),[t]),r.getSnapshot!==e||o||_t!==null&&_t.memoizedState.tag&1){if(n.flags|=2048,gu(9,Lb.bind(null,n,r,i,e),void 0,null),xt===null)throw Error(Q(349));Ho&30||Nb(n,e,i)}return i}function Nb(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Ke.updateQueue,e===null?(e={lastEffect:null,stores:null},Ke.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function Lb(t,e,n,r){e.value=n,e.getSnapshot=r,Vb(e)&&jb(t)}function Mb(t,e,n){return n(function(){Vb(e)&&jb(t)})}function Vb(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!ir(t,n)}catch{return!0}}function jb(t){var e=ni(t,1);e!==null&&er(e,t,1,-1)}function Z1(t){var e=vr();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:mu,lastRenderedState:t},e.queue=t,t=t.dispatch=rN.bind(null,Ke,t),[e.memoizedState,t]}function gu(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=Ke.updateQueue,e===null?(e={lastEffect:null,stores:null},Ke.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function Fb(){return Bn().memoizedState}function yd(t,e,n,r){var i=vr();Ke.flags|=t,i.memoizedState=gu(1|e,n,void 0,r===void 0?null:r)}function sh(t,e,n,r){var i=Bn();r=r===void 0?null:r;var o=void 0;if(pt!==null){var s=pt.memoizedState;if(o=s.destroy,r!==null&&sy(r,s.deps)){i.memoizedState=gu(e,n,o,r);return}}Ke.flags|=t,i.memoizedState=gu(1|e,n,o,r)}function e_(t,e){return yd(8390656,8,t,e)}function uy(t,e){return sh(2048,8,t,e)}function $b(t,e){return sh(4,2,t,e)}function Bb(t,e){return sh(4,4,t,e)}function Ub(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function zb(t,e,n){return n=n!=null?n.concat([t]):null,sh(4,4,Ub.bind(null,e,t),n)}function cy(){}function Hb(t,e){var n=Bn();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&sy(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function Wb(t,e){var n=Bn();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&sy(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function qb(t,e,n){return Ho&21?(ir(n,e)||(n=QT(),Ke.lanes|=n,Wo|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,dn=!0),t.memoizedState=n)}function tN(t,e){var n=Pe;Pe=n!==0&&4>n?n:4,t(!0);var r=Mp.transition;Mp.transition={};try{t(!1),e()}finally{Pe=n,Mp.transition=r}}function Gb(){return Bn().memoizedState}function nN(t,e,n){var r=zi(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Kb(t))Qb(e,n);else if(n=Sb(t,e,n,r),n!==null){var i=nn();er(n,t,r,i),Yb(n,e,r)}}function rN(t,e,n){var r=zi(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Kb(t))Qb(e,i);else{var o=t.alternate;if(t.lanes===0&&(o===null||o.lanes===0)&&(o=e.lastRenderedReducer,o!==null))try{var s=e.lastRenderedState,a=o(s,n);if(i.hasEagerState=!0,i.eagerState=a,ir(a,s)){var l=e.interleaved;l===null?(i.next=i,ty(e)):(i.next=l.next,l.next=i),e.interleaved=i;return}}catch{}finally{}n=Sb(t,e,i,r),n!==null&&(i=nn(),er(n,t,r,i),Yb(n,e,r))}}function Kb(t){var e=t.alternate;return t===Ke||e!==null&&e===Ke}function Qb(t,e){Ml=tf=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function Yb(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Bv(t,n)}}var nf={readContext:$n,useCallback:Vt,useContext:Vt,useEffect:Vt,useImperativeHandle:Vt,useInsertionEffect:Vt,useLayoutEffect:Vt,useMemo:Vt,useReducer:Vt,useRef:Vt,useState:Vt,useDebugValue:Vt,useDeferredValue:Vt,useTransition:Vt,useMutableSource:Vt,useSyncExternalStore:Vt,useId:Vt,unstable_isNewReconciler:!1},iN={readContext:$n,useCallback:function(t,e){return vr().memoizedState=[t,e===void 0?null:e],t},useContext:$n,useEffect:e_,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,yd(4194308,4,Ub.bind(null,e,t),n)},useLayoutEffect:function(t,e){return yd(4194308,4,t,e)},useInsertionEffect:function(t,e){return yd(4,2,t,e)},useMemo:function(t,e){var n=vr();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=vr();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=nN.bind(null,Ke,t),[r.memoizedState,t]},useRef:function(t){var e=vr();return t={current:t},e.memoizedState=t},useState:Z1,useDebugValue:cy,useDeferredValue:function(t){return vr().memoizedState=t},useTransition:function(){var t=Z1(!1),e=t[0];return t=tN.bind(null,t[1]),vr().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=Ke,i=vr();if(We){if(n===void 0)throw Error(Q(407));n=n()}else{if(n=e(),xt===null)throw Error(Q(349));Ho&30||Nb(r,e,n)}i.memoizedState=n;var o={value:n,getSnapshot:e};return i.queue=o,e_(Mb.bind(null,r,o,t),[t]),r.flags|=2048,gu(9,Lb.bind(null,r,o,n,e),void 0,null),n},useId:function(){var t=vr(),e=xt.identifierPrefix;if(We){var n=Kr,r=Gr;n=(r&~(1<<32-Zn(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=pu++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=eN++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},oN={readContext:$n,useCallback:Hb,useContext:$n,useEffect:uy,useImperativeHandle:zb,useInsertionEffect:$b,useLayoutEffect:Bb,useMemo:Wb,useReducer:Vp,useRef:Fb,useState:function(){return Vp(mu)},useDebugValue:cy,useDeferredValue:function(t){var e=Bn();return qb(e,pt.memoizedState,t)},useTransition:function(){var t=Vp(mu)[0],e=Bn().memoizedState;return[t,e]},useMutableSource:Ob,useSyncExternalStore:Db,useId:Gb,unstable_isNewReconciler:!1},sN={readContext:$n,useCallback:Hb,useContext:$n,useEffect:uy,useImperativeHandle:zb,useInsertionEffect:$b,useLayoutEffect:Bb,useMemo:Wb,useReducer:jp,useRef:Fb,useState:function(){return jp(mu)},useDebugValue:cy,useDeferredValue:function(t){var e=Bn();return pt===null?e.memoizedState=t:qb(e,pt.memoizedState,t)},useTransition:function(){var t=jp(mu)[0],e=Bn().memoizedState;return[t,e]},useMutableSource:Ob,useSyncExternalStore:Db,useId:Gb,unstable_isNewReconciler:!1};function da(t,e){try{var n="",r=e;do n+=NO(r),r=r.return;while(r);var i=n}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:t,source:e,stack:i,digest:null}}function Fp(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function ag(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var aN=typeof WeakMap=="function"?WeakMap:Map;function Xb(t,e,n){n=Jr(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){of||(of=!0,vg=r),ag(t,e)},n}function Jb(t,e,n){n=Jr(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){ag(t,e)}}var o=t.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){ag(t,e),typeof r!="function"&&(Ui===null?Ui=new Set([this]):Ui.add(this));var s=e.stack;this.componentDidCatch(e.value,{componentStack:s!==null?s:""})}),n}function t_(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new aN;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=EN.bind(null,t,e,n),e.then(t,t))}function n_(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function r_(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Jr(-1,1),e.tag=2,Bi(n,e,1))),n.lanes|=1),t)}var lN=di.ReactCurrentOwner,dn=!1;function en(t,e,n,r){e.child=t===null?kb(e,null,n,r):ua(e,t.child,n,r)}function i_(t,e,n,r,i){n=n.render;var o=e.ref;return Js(e,i),r=ay(t,e,n,r,o,i),n=ly(),t!==null&&!dn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,ri(t,e,i)):(We&&n&&Qv(e),e.flags|=1,en(t,e,r,i),e.child)}function o_(t,e,n,r,i){if(t===null){var o=n.type;return typeof o=="function"&&!yy(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=o,Zb(t,e,o,r,i)):(t=xd(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(o=t.child,!(t.lanes&i)){var s=o.memoizedProps;if(n=n.compare,n=n!==null?n:lu,n(s,r)&&t.ref===e.ref)return ri(t,e,i)}return e.flags|=1,t=Hi(o,r),t.ref=e.ref,t.return=e,e.child=t}function Zb(t,e,n,r,i){if(t!==null){var o=t.memoizedProps;if(lu(o,r)&&t.ref===e.ref)if(dn=!1,e.pendingProps=r=o,(t.lanes&i)!==0)t.flags&131072&&(dn=!0);else return e.lanes=t.lanes,ri(t,e,i)}return lg(t,e,n,r,i)}function eS(t,e,n){var r=e.pendingProps,i=r.children,o=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},Le(zs,_n),_n|=n;else{if(!(n&1073741824))return t=o!==null?o.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,Le(zs,_n),_n|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,Le(zs,_n),_n|=r}else o!==null?(r=o.baseLanes|n,e.memoizedState=null):r=n,Le(zs,_n),_n|=r;return en(t,e,i,n),e.child}function tS(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function lg(t,e,n,r,i){var o=mn(n)?Uo:Gt.current;return o=aa(e,o),Js(e,i),n=ay(t,e,n,r,o,i),r=ly(),t!==null&&!dn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,ri(t,e,i)):(We&&r&&Qv(e),e.flags|=1,en(t,e,n,i),e.child)}function s_(t,e,n,r,i){if(mn(n)){var o=!0;Kd(e)}else o=!1;if(Js(e,i),e.stateNode===null)wd(t,e),Ab(e,n,r),sg(e,n,r,i),r=!0;else if(t===null){var s=e.stateNode,a=e.memoizedProps;s.props=a;var l=s.context,u=n.contextType;typeof u=="object"&&u!==null?u=$n(u):(u=mn(n)?Uo:Gt.current,u=aa(e,u));var d=n.getDerivedStateFromProps,h=typeof d=="function"||typeof s.getSnapshotBeforeUpdate=="function";h||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==r||l!==u)&&X1(e,s,r,u),Ei=!1;var p=e.memoizedState;s.state=p,Zd(e,r,s,i),l=e.memoizedState,a!==r||p!==l||pn.current||Ei?(typeof d=="function"&&(og(e,n,d,r),l=e.memoizedState),(a=Ei||Y1(e,n,a,r,p,l,u))?(h||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(e.flags|=4194308)):(typeof s.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=l),s.props=r,s.state=l,s.context=u,r=a):(typeof s.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{s=e.stateNode,Cb(t,e),a=e.memoizedProps,u=e.type===e.elementType?a:Kn(e.type,a),s.props=u,h=e.pendingProps,p=s.context,l=n.contextType,typeof l=="object"&&l!==null?l=$n(l):(l=mn(n)?Uo:Gt.current,l=aa(e,l));var g=n.getDerivedStateFromProps;(d=typeof g=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==h||p!==l)&&X1(e,s,r,l),Ei=!1,p=e.memoizedState,s.state=p,Zd(e,r,s,i);var T=e.memoizedState;a!==h||p!==T||pn.current||Ei?(typeof g=="function"&&(og(e,n,g,r),T=e.memoizedState),(u=Ei||Y1(e,n,u,r,p,T,l)||!1)?(d||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(r,T,l),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(r,T,l)),typeof s.componentDidUpdate=="function"&&(e.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof s.componentDidUpdate!="function"||a===t.memoizedProps&&p===t.memoizedState||(e.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&p===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=T),s.props=r,s.state=T,s.context=l,r=u):(typeof s.componentDidUpdate!="function"||a===t.memoizedProps&&p===t.memoizedState||(e.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&p===t.memoizedState||(e.flags|=1024),r=!1)}return ug(t,e,n,r,o,i)}function ug(t,e,n,r,i,o){tS(t,e);var s=(e.flags&128)!==0;if(!r&&!s)return i&&W1(e,n,!1),ri(t,e,o);r=e.stateNode,lN.current=e;var a=s&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&s?(e.child=ua(e,t.child,null,o),e.child=ua(e,null,a,o)):en(t,e,a,o),e.memoizedState=r.state,i&&W1(e,n,!0),e.child}function nS(t){var e=t.stateNode;e.pendingContext?H1(t,e.pendingContext,e.pendingContext!==e.context):e.context&&H1(t,e.context,!1),ry(t,e.containerInfo)}function a_(t,e,n,r,i){return la(),Xv(i),e.flags|=256,en(t,e,n,r),e.child}var cg={dehydrated:null,treeContext:null,retryLane:0};function dg(t){return{baseLanes:t,cachePool:null,transitions:null}}function rS(t,e,n){var r=e.pendingProps,i=Ge.current,o=!1,s=(e.flags&128)!==0,a;if((a=s)||(a=t!==null&&t.memoizedState===null?!1:(i&2)!==0),a?(o=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),Le(Ge,i&1),t===null)return rg(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(s=r.children,t=r.fallback,o?(r=e.mode,o=e.child,s={mode:"hidden",children:s},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=s):o=uh(s,r,0,null),t=Lo(t,r,n,null),o.return=e,t.return=e,o.sibling=t,e.child=o,e.child.memoizedState=dg(n),e.memoizedState=cg,t):dy(e,s));if(i=t.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return uN(t,e,s,r,a,i,n);if(o){o=r.fallback,s=e.mode,i=t.child,a=i.sibling;var l={mode:"hidden",children:r.children};return!(s&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=l,e.deletions=null):(r=Hi(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?o=Hi(a,o):(o=Lo(o,s,n,null),o.flags|=2),o.return=e,r.return=e,r.sibling=o,e.child=r,r=o,o=e.child,s=t.child.memoizedState,s=s===null?dg(n):{baseLanes:s.baseLanes|n,cachePool:null,transitions:s.transitions},o.memoizedState=s,o.childLanes=t.childLanes&~n,e.memoizedState=cg,r}return o=t.child,t=o.sibling,r=Hi(o,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function dy(t,e){return e=uh({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function zc(t,e,n,r){return r!==null&&Xv(r),ua(e,t.child,null,n),t=dy(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function uN(t,e,n,r,i,o,s){if(n)return e.flags&256?(e.flags&=-257,r=Fp(Error(Q(422))),zc(t,e,s,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(o=r.fallback,i=e.mode,r=uh({mode:"visible",children:r.children},i,0,null),o=Lo(o,i,s,null),o.flags|=2,r.return=e,o.return=e,r.sibling=o,e.child=r,e.mode&1&&ua(e,t.child,null,s),e.child.memoizedState=dg(s),e.memoizedState=cg,o);if(!(e.mode&1))return zc(t,e,s,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,o=Error(Q(419)),r=Fp(o,r,void 0),zc(t,e,s,r)}if(a=(s&t.childLanes)!==0,dn||a){if(r=xt,r!==null){switch(s&-s){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|s)?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,ni(t,i),er(r,t,i,-1))}return vy(),r=Fp(Error(Q(421))),zc(t,e,s,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=xN.bind(null,t),i._reactRetry=e,null):(t=o.treeContext,xn=$i(i.nextSibling),bn=e,We=!0,Xn=null,t!==null&&(Nn[Ln++]=Gr,Nn[Ln++]=Kr,Nn[Ln++]=zo,Gr=t.id,Kr=t.overflow,zo=e),e=dy(e,r.children),e.flags|=4096,e)}function l_(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),ig(t.return,e,n)}function $p(t,e,n,r,i){var o=t.memoizedState;o===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(o.isBackwards=e,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i)}function iS(t,e,n){var r=e.pendingProps,i=r.revealOrder,o=r.tail;if(en(t,e,r.children,n),r=Ge.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&l_(t,n,e);else if(t.tag===19)l_(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(Le(Ge,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&ef(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),$p(e,!1,i,n,o);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&ef(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}$p(e,!0,n,null,o);break;case"together":$p(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function wd(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function ri(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Wo|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(Q(153));if(e.child!==null){for(t=e.child,n=Hi(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Hi(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function cN(t,e,n){switch(e.tag){case 3:nS(e),la();break;case 5:Rb(e);break;case 1:mn(e.type)&&Kd(e);break;case 4:ry(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;Le(Xd,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(Le(Ge,Ge.current&1),e.flags|=128,null):n&e.child.childLanes?rS(t,e,n):(Le(Ge,Ge.current&1),t=ri(t,e,n),t!==null?t.sibling:null);Le(Ge,Ge.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return iS(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),Le(Ge,Ge.current),r)break;return null;case 22:case 23:return e.lanes=0,eS(t,e,n)}return ri(t,e,n)}var oS,fg,sS,aS;oS=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};fg=function(){};sS=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,Po(Cr.current);var o=null;switch(n){case"input":i=Nm(t,i),r=Nm(t,r),o=[];break;case"select":i=Qe({},i,{value:void 0}),r=Qe({},r,{value:void 0}),o=[];break;case"textarea":i=Vm(t,i),r=Vm(t,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=qd)}Fm(n,r);var s;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var a=i[u];for(s in a)a.hasOwnProperty(s)&&(n||(n={}),n[s]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(tu.hasOwnProperty(u)?o||(o=[]):(o=o||[]).push(u,null));for(u in r){var l=r[u];if(a=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(s in a)!a.hasOwnProperty(s)||l&&l.hasOwnProperty(s)||(n||(n={}),n[s]="");for(s in l)l.hasOwnProperty(s)&&a[s]!==l[s]&&(n||(n={}),n[s]=l[s])}else n||(o||(o=[]),o.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(o=o||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(o=o||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(tu.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&je("scroll",t),o||a===l||(o=[])):(o=o||[]).push(u,l))}n&&(o=o||[]).push("style",n);var u=o;(e.updateQueue=u)&&(e.flags|=4)}};aS=function(t,e,n,r){n!==r&&(e.flags|=4)};function ul(t,e){if(!We)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function jt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function dN(t,e,n){var r=e.pendingProps;switch(Yv(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return jt(e),null;case 1:return mn(e.type)&&Gd(),jt(e),null;case 3:return r=e.stateNode,ca(),Ue(pn),Ue(Gt),oy(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(Bc(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Xn!==null&&(_g(Xn),Xn=null))),fg(t,e),jt(e),null;case 5:iy(e);var i=Po(hu.current);if(n=e.type,t!==null&&e.stateNode!=null)sS(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(Q(166));return jt(e),null}if(t=Po(Cr.current),Bc(e)){r=e.stateNode,n=e.type;var o=e.memoizedProps;switch(r[wr]=e,r[du]=o,t=(e.mode&1)!==0,n){case"dialog":je("cancel",r),je("close",r);break;case"iframe":case"object":case"embed":je("load",r);break;case"video":case"audio":for(i=0;i<_l.length;i++)je(_l[i],r);break;case"source":je("error",r);break;case"img":case"image":case"link":je("error",r),je("load",r);break;case"details":je("toggle",r);break;case"input":v1(r,o),je("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},je("invalid",r);break;case"textarea":w1(r,o),je("invalid",r)}Fm(n,o),i=null;for(var s in o)if(o.hasOwnProperty(s)){var a=o[s];s==="children"?typeof a=="string"?r.textContent!==a&&(o.suppressHydrationWarning!==!0&&$c(r.textContent,a,t),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(o.suppressHydrationWarning!==!0&&$c(r.textContent,a,t),i=["children",""+a]):tu.hasOwnProperty(s)&&a!=null&&s==="onScroll"&&je("scroll",r)}switch(n){case"input":Oc(r),y1(r,o,!0);break;case"textarea":Oc(r),_1(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=qd)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{s=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=NT(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=s.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=s.createElement(n,{is:r.is}):(t=s.createElement(n),n==="select"&&(s=t,r.multiple?s.multiple=!0:r.size&&(s.size=r.size))):t=s.createElementNS(t,n),t[wr]=e,t[du]=r,oS(t,e,!1,!1),e.stateNode=t;e:{switch(s=$m(n,r),n){case"dialog":je("cancel",t),je("close",t),i=r;break;case"iframe":case"object":case"embed":je("load",t),i=r;break;case"video":case"audio":for(i=0;i<_l.length;i++)je(_l[i],t);i=r;break;case"source":je("error",t),i=r;break;case"img":case"image":case"link":je("error",t),je("load",t),i=r;break;case"details":je("toggle",t),i=r;break;case"input":v1(t,r),i=Nm(t,r),je("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=Qe({},r,{value:void 0}),je("invalid",t);break;case"textarea":w1(t,r),i=Vm(t,r),je("invalid",t);break;default:i=r}Fm(n,i),a=i;for(o in a)if(a.hasOwnProperty(o)){var l=a[o];o==="style"?VT(t,l):o==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&LT(t,l)):o==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&nu(t,l):typeof l=="number"&&nu(t,""+l):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(tu.hasOwnProperty(o)?l!=null&&o==="onScroll"&&je("scroll",t):l!=null&&Lv(t,o,l,s))}switch(n){case"input":Oc(t),y1(t,r,!1);break;case"textarea":Oc(t),_1(t);break;case"option":r.value!=null&&t.setAttribute("value",""+Yi(r.value));break;case"select":t.multiple=!!r.multiple,o=r.value,o!=null?Ks(t,!!r.multiple,o,!1):r.defaultValue!=null&&Ks(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=qd)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return jt(e),null;case 6:if(t&&e.stateNode!=null)aS(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(Q(166));if(n=Po(hu.current),Po(Cr.current),Bc(e)){if(r=e.stateNode,n=e.memoizedProps,r[wr]=e,(o=r.nodeValue!==n)&&(t=bn,t!==null))switch(t.tag){case 3:$c(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&$c(r.nodeValue,n,(t.mode&1)!==0)}o&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[wr]=e,e.stateNode=r}return jt(e),null;case 13:if(Ue(Ge),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(We&&xn!==null&&e.mode&1&&!(e.flags&128))bb(),la(),e.flags|=98560,o=!1;else if(o=Bc(e),r!==null&&r.dehydrated!==null){if(t===null){if(!o)throw Error(Q(318));if(o=e.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(Q(317));o[wr]=e}else la(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;jt(e),o=!1}else Xn!==null&&(_g(Xn),Xn=null),o=!0;if(!o)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||Ge.current&1?mt===0&&(mt=3):vy())),e.updateQueue!==null&&(e.flags|=4),jt(e),null);case 4:return ca(),fg(t,e),t===null&&uu(e.stateNode.containerInfo),jt(e),null;case 10:return ey(e.type._context),jt(e),null;case 17:return mn(e.type)&&Gd(),jt(e),null;case 19:if(Ue(Ge),o=e.memoizedState,o===null)return jt(e),null;if(r=(e.flags&128)!==0,s=o.rendering,s===null)if(r)ul(o,!1);else{if(mt!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(s=ef(t),s!==null){for(e.flags|=128,ul(o,!1),r=s.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)o=n,t=r,o.flags&=14680066,s=o.alternate,s===null?(o.childLanes=0,o.lanes=t,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=s.childLanes,o.lanes=s.lanes,o.child=s.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=s.memoizedProps,o.memoizedState=s.memoizedState,o.updateQueue=s.updateQueue,o.type=s.type,t=s.dependencies,o.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return Le(Ge,Ge.current&1|2),e.child}t=t.sibling}o.tail!==null&&it()>fa&&(e.flags|=128,r=!0,ul(o,!1),e.lanes=4194304)}else{if(!r)if(t=ef(s),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),ul(o,!0),o.tail===null&&o.tailMode==="hidden"&&!s.alternate&&!We)return jt(e),null}else 2*it()-o.renderingStartTime>fa&&n!==1073741824&&(e.flags|=128,r=!0,ul(o,!1),e.lanes=4194304);o.isBackwards?(s.sibling=e.child,e.child=s):(n=o.last,n!==null?n.sibling=s:e.child=s,o.last=s)}return o.tail!==null?(e=o.tail,o.rendering=e,o.tail=e.sibling,o.renderingStartTime=it(),e.sibling=null,n=Ge.current,Le(Ge,r?n&1|2:n&1),e):(jt(e),null);case 22:case 23:return gy(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?_n&1073741824&&(jt(e),e.subtreeFlags&6&&(e.flags|=8192)):jt(e),null;case 24:return null;case 25:return null}throw Error(Q(156,e.tag))}function fN(t,e){switch(Yv(e),e.tag){case 1:return mn(e.type)&&Gd(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return ca(),Ue(pn),Ue(Gt),oy(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return iy(e),null;case 13:if(Ue(Ge),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(Q(340));la()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return Ue(Ge),null;case 4:return ca(),null;case 10:return ey(e.type._context),null;case 22:case 23:return gy(),null;case 24:return null;default:return null}}var Hc=!1,Ut=!1,hN=typeof WeakSet=="function"?WeakSet:Set,ee=null;function Us(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Xe(t,e,r)}else n.current=null}function hg(t,e,n){try{n()}catch(r){Xe(t,e,r)}}var u_=!1;function pN(t,e){if(Ym=zd,t=db(),Kv(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var s=0,a=-1,l=-1,u=0,d=0,h=t,p=null;t:for(;;){for(var g;h!==n||i!==0&&h.nodeType!==3||(a=s+i),h!==o||r!==0&&h.nodeType!==3||(l=s+r),h.nodeType===3&&(s+=h.nodeValue.length),(g=h.firstChild)!==null;)p=h,h=g;for(;;){if(h===t)break t;if(p===n&&++u===i&&(a=s),p===o&&++d===r&&(l=s),(g=h.nextSibling)!==null)break;h=p,p=h.parentNode}h=g}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Xm={focusedElem:t,selectionRange:n},zd=!1,ee=e;ee!==null;)if(e=ee,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,ee=t;else for(;ee!==null;){e=ee;try{var T=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(T!==null){var b=T.memoizedProps,S=T.memoizedState,E=e.stateNode,m=E.getSnapshotBeforeUpdate(e.elementType===e.type?b:Kn(e.type,b),S);E.__reactInternalSnapshotBeforeUpdate=m}break;case 3:var v=e.stateNode.containerInfo;v.nodeType===1?v.textContent="":v.nodeType===9&&v.documentElement&&v.removeChild(v.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(Q(163))}}catch(x){Xe(e,e.return,x)}if(t=e.sibling,t!==null){t.return=e.return,ee=t;break}ee=e.return}return T=u_,u_=!1,T}function Vl(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var o=i.destroy;i.destroy=void 0,o!==void 0&&hg(e,n,o)}i=i.next}while(i!==r)}}function ah(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function pg(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function lS(t){var e=t.alternate;e!==null&&(t.alternate=null,lS(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[wr],delete e[du],delete e[eg],delete e[YD],delete e[XD])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function uS(t){return t.tag===5||t.tag===3||t.tag===4}function c_(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||uS(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function mg(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=qd));else if(r!==4&&(t=t.child,t!==null))for(mg(t,e,n),t=t.sibling;t!==null;)mg(t,e,n),t=t.sibling}function gg(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(gg(t,e,n),t=t.sibling;t!==null;)gg(t,e,n),t=t.sibling}var It=null,Yn=!1;function vi(t,e,n){for(n=n.child;n!==null;)cS(t,e,n),n=n.sibling}function cS(t,e,n){if(Sr&&typeof Sr.onCommitFiberUnmount=="function")try{Sr.onCommitFiberUnmount(Zf,n)}catch{}switch(n.tag){case 5:Ut||Us(n,e);case 6:var r=It,i=Yn;It=null,vi(t,e,n),It=r,Yn=i,It!==null&&(Yn?(t=It,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):It.removeChild(n.stateNode));break;case 18:It!==null&&(Yn?(t=It,n=n.stateNode,t.nodeType===8?Dp(t.parentNode,n):t.nodeType===1&&Dp(t,n),su(t)):Dp(It,n.stateNode));break;case 4:r=It,i=Yn,It=n.stateNode.containerInfo,Yn=!0,vi(t,e,n),It=r,Yn=i;break;case 0:case 11:case 14:case 15:if(!Ut&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var o=i,s=o.destroy;o=o.tag,s!==void 0&&(o&2||o&4)&&hg(n,e,s),i=i.next}while(i!==r)}vi(t,e,n);break;case 1:if(!Ut&&(Us(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){Xe(n,e,a)}vi(t,e,n);break;case 21:vi(t,e,n);break;case 22:n.mode&1?(Ut=(r=Ut)||n.memoizedState!==null,vi(t,e,n),Ut=r):vi(t,e,n);break;default:vi(t,e,n)}}function d_(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new hN),e.forEach(function(r){var i=TN.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function qn(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var o=t,s=e,a=s;e:for(;a!==null;){switch(a.tag){case 5:It=a.stateNode,Yn=!1;break e;case 3:It=a.stateNode.containerInfo,Yn=!0;break e;case 4:It=a.stateNode.containerInfo,Yn=!0;break e}a=a.return}if(It===null)throw Error(Q(160));cS(o,s,i),It=null,Yn=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(u){Xe(i,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)dS(e,t),e=e.sibling}function dS(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(qn(e,t),pr(t),r&4){try{Vl(3,t,t.return),ah(3,t)}catch(b){Xe(t,t.return,b)}try{Vl(5,t,t.return)}catch(b){Xe(t,t.return,b)}}break;case 1:qn(e,t),pr(t),r&512&&n!==null&&Us(n,n.return);break;case 5:if(qn(e,t),pr(t),r&512&&n!==null&&Us(n,n.return),t.flags&32){var i=t.stateNode;try{nu(i,"")}catch(b){Xe(t,t.return,b)}}if(r&4&&(i=t.stateNode,i!=null)){var o=t.memoizedProps,s=n!==null?n.memoizedProps:o,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&o.type==="radio"&&o.name!=null&&OT(i,o),$m(a,s);var u=$m(a,o);for(s=0;s<l.length;s+=2){var d=l[s],h=l[s+1];d==="style"?VT(i,h):d==="dangerouslySetInnerHTML"?LT(i,h):d==="children"?nu(i,h):Lv(i,d,h,u)}switch(a){case"input":Lm(i,o);break;case"textarea":DT(i,o);break;case"select":var p=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var g=o.value;g!=null?Ks(i,!!o.multiple,g,!1):p!==!!o.multiple&&(o.defaultValue!=null?Ks(i,!!o.multiple,o.defaultValue,!0):Ks(i,!!o.multiple,o.multiple?[]:"",!1))}i[du]=o}catch(b){Xe(t,t.return,b)}}break;case 6:if(qn(e,t),pr(t),r&4){if(t.stateNode===null)throw Error(Q(162));i=t.stateNode,o=t.memoizedProps;try{i.nodeValue=o}catch(b){Xe(t,t.return,b)}}break;case 3:if(qn(e,t),pr(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{su(e.containerInfo)}catch(b){Xe(t,t.return,b)}break;case 4:qn(e,t),pr(t);break;case 13:qn(e,t),pr(t),i=t.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(py=it())),r&4&&d_(t);break;case 22:if(d=n!==null&&n.memoizedState!==null,t.mode&1?(Ut=(u=Ut)||d,qn(e,t),Ut=u):qn(e,t),pr(t),r&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!d&&t.mode&1)for(ee=t,d=t.child;d!==null;){for(h=ee=d;ee!==null;){switch(p=ee,g=p.child,p.tag){case 0:case 11:case 14:case 15:Vl(4,p,p.return);break;case 1:Us(p,p.return);var T=p.stateNode;if(typeof T.componentWillUnmount=="function"){r=p,n=p.return;try{e=r,T.props=e.memoizedProps,T.state=e.memoizedState,T.componentWillUnmount()}catch(b){Xe(r,n,b)}}break;case 5:Us(p,p.return);break;case 22:if(p.memoizedState!==null){h_(h);continue}}g!==null?(g.return=p,ee=g):h_(h)}d=d.sibling}e:for(d=null,h=t;;){if(h.tag===5){if(d===null){d=h;try{i=h.stateNode,u?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(a=h.stateNode,l=h.memoizedProps.style,s=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=MT("display",s))}catch(b){Xe(t,t.return,b)}}}else if(h.tag===6){if(d===null)try{h.stateNode.nodeValue=u?"":h.memoizedProps}catch(b){Xe(t,t.return,b)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===t)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===t)break e;for(;h.sibling===null;){if(h.return===null||h.return===t)break e;d===h&&(d=null),h=h.return}d===h&&(d=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:qn(e,t),pr(t),r&4&&d_(t);break;case 21:break;default:qn(e,t),pr(t)}}function pr(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(uS(n)){var r=n;break e}n=n.return}throw Error(Q(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(nu(i,""),r.flags&=-33);var o=c_(t);gg(t,o,i);break;case 3:case 4:var s=r.stateNode.containerInfo,a=c_(t);mg(t,a,s);break;default:throw Error(Q(161))}}catch(l){Xe(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function mN(t,e,n){ee=t,fS(t)}function fS(t,e,n){for(var r=(t.mode&1)!==0;ee!==null;){var i=ee,o=i.child;if(i.tag===22&&r){var s=i.memoizedState!==null||Hc;if(!s){var a=i.alternate,l=a!==null&&a.memoizedState!==null||Ut;a=Hc;var u=Ut;if(Hc=s,(Ut=l)&&!u)for(ee=i;ee!==null;)s=ee,l=s.child,s.tag===22&&s.memoizedState!==null?p_(i):l!==null?(l.return=s,ee=l):p_(i);for(;o!==null;)ee=o,fS(o),o=o.sibling;ee=i,Hc=a,Ut=u}f_(t)}else i.subtreeFlags&8772&&o!==null?(o.return=i,ee=o):f_(t)}}function f_(t){for(;ee!==null;){var e=ee;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Ut||ah(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!Ut)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:Kn(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=e.updateQueue;o!==null&&Q1(e,o,r);break;case 3:var s=e.updateQueue;if(s!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Q1(e,s,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var d=u.memoizedState;if(d!==null){var h=d.dehydrated;h!==null&&su(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(Q(163))}Ut||e.flags&512&&pg(e)}catch(p){Xe(e,e.return,p)}}if(e===t){ee=null;break}if(n=e.sibling,n!==null){n.return=e.return,ee=n;break}ee=e.return}}function h_(t){for(;ee!==null;){var e=ee;if(e===t){ee=null;break}var n=e.sibling;if(n!==null){n.return=e.return,ee=n;break}ee=e.return}}function p_(t){for(;ee!==null;){var e=ee;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{ah(4,e)}catch(l){Xe(e,n,l)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(l){Xe(e,i,l)}}var o=e.return;try{pg(e)}catch(l){Xe(e,o,l)}break;case 5:var s=e.return;try{pg(e)}catch(l){Xe(e,s,l)}}}catch(l){Xe(e,e.return,l)}if(e===t){ee=null;break}var a=e.sibling;if(a!==null){a.return=e.return,ee=a;break}ee=e.return}}var gN=Math.ceil,rf=di.ReactCurrentDispatcher,fy=di.ReactCurrentOwner,Fn=di.ReactCurrentBatchConfig,xe=0,xt=null,ft=null,Rt=0,_n=0,zs=ro(0),mt=0,vu=null,Wo=0,lh=0,hy=0,jl=null,cn=null,py=0,fa=1/0,Hr=null,of=!1,vg=null,Ui=null,Wc=!1,ki=null,sf=0,Fl=0,yg=null,_d=-1,Ed=0;function nn(){return xe&6?it():_d!==-1?_d:_d=it()}function zi(t){return t.mode&1?xe&2&&Rt!==0?Rt&-Rt:ZD.transition!==null?(Ed===0&&(Ed=QT()),Ed):(t=Pe,t!==0||(t=window.event,t=t===void 0?16:nb(t.type)),t):1}function er(t,e,n,r){if(50<Fl)throw Fl=0,yg=null,Error(Q(185));Hu(t,n,r),(!(xe&2)||t!==xt)&&(t===xt&&(!(xe&2)&&(lh|=n),mt===4&&Ti(t,Rt)),gn(t,r),n===1&&xe===0&&!(e.mode&1)&&(fa=it()+500,ih&&io()))}function gn(t,e){var n=t.callbackNode;ZO(t,e);var r=Ud(t,t===xt?Rt:0);if(r===0)n!==null&&T1(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&T1(n),e===1)t.tag===0?JD(m_.bind(null,t)):Eb(m_.bind(null,t)),KD(function(){!(xe&6)&&io()}),n=null;else{switch(YT(r)){case 1:n=$v;break;case 4:n=GT;break;case 16:n=Bd;break;case 536870912:n=KT;break;default:n=Bd}n=_S(n,hS.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function hS(t,e){if(_d=-1,Ed=0,xe&6)throw Error(Q(327));var n=t.callbackNode;if(Zs()&&t.callbackNode!==n)return null;var r=Ud(t,t===xt?Rt:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=af(t,r);else{e=r;var i=xe;xe|=2;var o=mS();(xt!==t||Rt!==e)&&(Hr=null,fa=it()+500,No(t,e));do try{wN();break}catch(a){pS(t,a)}while(1);Zv(),rf.current=o,xe=i,ft!==null?e=0:(xt=null,Rt=0,e=mt)}if(e!==0){if(e===2&&(i=Wm(t),i!==0&&(r=i,e=wg(t,i))),e===1)throw n=vu,No(t,0),Ti(t,r),gn(t,it()),n;if(e===6)Ti(t,r);else{if(i=t.current.alternate,!(r&30)&&!vN(i)&&(e=af(t,r),e===2&&(o=Wm(t),o!==0&&(r=o,e=wg(t,o))),e===1))throw n=vu,No(t,0),Ti(t,r),gn(t,it()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(Q(345));case 2:xo(t,cn,Hr);break;case 3:if(Ti(t,r),(r&130023424)===r&&(e=py+500-it(),10<e)){if(Ud(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){nn(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=Zm(xo.bind(null,t,cn,Hr),e);break}xo(t,cn,Hr);break;case 4:if(Ti(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var s=31-Zn(r);o=1<<s,s=e[s],s>i&&(i=s),r&=~o}if(r=i,r=it()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*gN(r/1960))-r,10<r){t.timeoutHandle=Zm(xo.bind(null,t,cn,Hr),r);break}xo(t,cn,Hr);break;case 5:xo(t,cn,Hr);break;default:throw Error(Q(329))}}}return gn(t,it()),t.callbackNode===n?hS.bind(null,t):null}function wg(t,e){var n=jl;return t.current.memoizedState.isDehydrated&&(No(t,e).flags|=256),t=af(t,e),t!==2&&(e=cn,cn=n,e!==null&&_g(e)),t}function _g(t){cn===null?cn=t:cn.push.apply(cn,t)}function vN(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],o=i.getSnapshot;i=i.value;try{if(!ir(o(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Ti(t,e){for(e&=~hy,e&=~lh,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Zn(e),r=1<<n;t[n]=-1,e&=~r}}function m_(t){if(xe&6)throw Error(Q(327));Zs();var e=Ud(t,0);if(!(e&1))return gn(t,it()),null;var n=af(t,e);if(t.tag!==0&&n===2){var r=Wm(t);r!==0&&(e=r,n=wg(t,r))}if(n===1)throw n=vu,No(t,0),Ti(t,e),gn(t,it()),n;if(n===6)throw Error(Q(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,xo(t,cn,Hr),gn(t,it()),null}function my(t,e){var n=xe;xe|=1;try{return t(e)}finally{xe=n,xe===0&&(fa=it()+500,ih&&io())}}function qo(t){ki!==null&&ki.tag===0&&!(xe&6)&&Zs();var e=xe;xe|=1;var n=Fn.transition,r=Pe;try{if(Fn.transition=null,Pe=1,t)return t()}finally{Pe=r,Fn.transition=n,xe=e,!(xe&6)&&io()}}function gy(){_n=zs.current,Ue(zs)}function No(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,GD(n)),ft!==null)for(n=ft.return;n!==null;){var r=n;switch(Yv(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Gd();break;case 3:ca(),Ue(pn),Ue(Gt),oy();break;case 5:iy(r);break;case 4:ca();break;case 13:Ue(Ge);break;case 19:Ue(Ge);break;case 10:ey(r.type._context);break;case 22:case 23:gy()}n=n.return}if(xt=t,ft=t=Hi(t.current,null),Rt=_n=e,mt=0,vu=null,hy=lh=Wo=0,cn=jl=null,Ao!==null){for(e=0;e<Ao.length;e++)if(n=Ao[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,o=n.pending;if(o!==null){var s=o.next;o.next=i,r.next=s}n.pending=r}Ao=null}return t}function pS(t,e){do{var n=ft;try{if(Zv(),vd.current=nf,tf){for(var r=Ke.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}tf=!1}if(Ho=0,_t=pt=Ke=null,Ml=!1,pu=0,fy.current=null,n===null||n.return===null){mt=1,vu=e,ft=null;break}e:{var o=t,s=n.return,a=n,l=e;if(e=Rt,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,d=a,h=d.tag;if(!(d.mode&1)&&(h===0||h===11||h===15)){var p=d.alternate;p?(d.updateQueue=p.updateQueue,d.memoizedState=p.memoizedState,d.lanes=p.lanes):(d.updateQueue=null,d.memoizedState=null)}var g=n_(s);if(g!==null){g.flags&=-257,r_(g,s,a,o,e),g.mode&1&&t_(o,u,e),e=g,l=u;var T=e.updateQueue;if(T===null){var b=new Set;b.add(l),e.updateQueue=b}else T.add(l);break e}else{if(!(e&1)){t_(o,u,e),vy();break e}l=Error(Q(426))}}else if(We&&a.mode&1){var S=n_(s);if(S!==null){!(S.flags&65536)&&(S.flags|=256),r_(S,s,a,o,e),Xv(da(l,a));break e}}o=l=da(l,a),mt!==4&&(mt=2),jl===null?jl=[o]:jl.push(o),o=s;do{switch(o.tag){case 3:o.flags|=65536,e&=-e,o.lanes|=e;var E=Xb(o,l,e);K1(o,E);break e;case 1:a=l;var m=o.type,v=o.stateNode;if(!(o.flags&128)&&(typeof m.getDerivedStateFromError=="function"||v!==null&&typeof v.componentDidCatch=="function"&&(Ui===null||!Ui.has(v)))){o.flags|=65536,e&=-e,o.lanes|=e;var x=Jb(o,a,e);K1(o,x);break e}}o=o.return}while(o!==null)}vS(n)}catch(A){e=A,ft===n&&n!==null&&(ft=n=n.return);continue}break}while(1)}function mS(){var t=rf.current;return rf.current=nf,t===null?nf:t}function vy(){(mt===0||mt===3||mt===2)&&(mt=4),xt===null||!(Wo&268435455)&&!(lh&268435455)||Ti(xt,Rt)}function af(t,e){var n=xe;xe|=2;var r=mS();(xt!==t||Rt!==e)&&(Hr=null,No(t,e));do try{yN();break}catch(i){pS(t,i)}while(1);if(Zv(),xe=n,rf.current=r,ft!==null)throw Error(Q(261));return xt=null,Rt=0,mt}function yN(){for(;ft!==null;)gS(ft)}function wN(){for(;ft!==null&&!HO();)gS(ft)}function gS(t){var e=wS(t.alternate,t,_n);t.memoizedProps=t.pendingProps,e===null?vS(t):ft=e,fy.current=null}function vS(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=fN(n,e),n!==null){n.flags&=32767,ft=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{mt=6,ft=null;return}}else if(n=dN(n,e,_n),n!==null){ft=n;return}if(e=e.sibling,e!==null){ft=e;return}ft=e=t}while(e!==null);mt===0&&(mt=5)}function xo(t,e,n){var r=Pe,i=Fn.transition;try{Fn.transition=null,Pe=1,_N(t,e,n,r)}finally{Fn.transition=i,Pe=r}return null}function _N(t,e,n,r){do Zs();while(ki!==null);if(xe&6)throw Error(Q(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(Q(177));t.callbackNode=null,t.callbackPriority=0;var o=n.lanes|n.childLanes;if(eD(t,o),t===xt&&(ft=xt=null,Rt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Wc||(Wc=!0,_S(Bd,function(){return Zs(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=Fn.transition,Fn.transition=null;var s=Pe;Pe=1;var a=xe;xe|=4,fy.current=null,pN(t,n),dS(n,t),$D(Xm),zd=!!Ym,Xm=Ym=null,t.current=n,mN(n),WO(),xe=a,Pe=s,Fn.transition=o}else t.current=n;if(Wc&&(Wc=!1,ki=t,sf=i),o=t.pendingLanes,o===0&&(Ui=null),KO(n.stateNode),gn(t,it()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(of)throw of=!1,t=vg,vg=null,t;return sf&1&&t.tag!==0&&Zs(),o=t.pendingLanes,o&1?t===yg?Fl++:(Fl=0,yg=t):Fl=0,io(),null}function Zs(){if(ki!==null){var t=YT(sf),e=Fn.transition,n=Pe;try{if(Fn.transition=null,Pe=16>t?16:t,ki===null)var r=!1;else{if(t=ki,ki=null,sf=0,xe&6)throw Error(Q(331));var i=xe;for(xe|=4,ee=t.current;ee!==null;){var o=ee,s=o.child;if(ee.flags&16){var a=o.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(ee=u;ee!==null;){var d=ee;switch(d.tag){case 0:case 11:case 15:Vl(8,d,o)}var h=d.child;if(h!==null)h.return=d,ee=h;else for(;ee!==null;){d=ee;var p=d.sibling,g=d.return;if(lS(d),d===u){ee=null;break}if(p!==null){p.return=g,ee=p;break}ee=g}}}var T=o.alternate;if(T!==null){var b=T.child;if(b!==null){T.child=null;do{var S=b.sibling;b.sibling=null,b=S}while(b!==null)}}ee=o}}if(o.subtreeFlags&2064&&s!==null)s.return=o,ee=s;else e:for(;ee!==null;){if(o=ee,o.flags&2048)switch(o.tag){case 0:case 11:case 15:Vl(9,o,o.return)}var E=o.sibling;if(E!==null){E.return=o.return,ee=E;break e}ee=o.return}}var m=t.current;for(ee=m;ee!==null;){s=ee;var v=s.child;if(s.subtreeFlags&2064&&v!==null)v.return=s,ee=v;else e:for(s=m;ee!==null;){if(a=ee,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:ah(9,a)}}catch(A){Xe(a,a.return,A)}if(a===s){ee=null;break e}var x=a.sibling;if(x!==null){x.return=a.return,ee=x;break e}ee=a.return}}if(xe=i,io(),Sr&&typeof Sr.onPostCommitFiberRoot=="function")try{Sr.onPostCommitFiberRoot(Zf,t)}catch{}r=!0}return r}finally{Pe=n,Fn.transition=e}}return!1}function g_(t,e,n){e=da(n,e),e=Xb(t,e,1),t=Bi(t,e,1),e=nn(),t!==null&&(Hu(t,1,e),gn(t,e))}function Xe(t,e,n){if(t.tag===3)g_(t,t,n);else for(;e!==null;){if(e.tag===3){g_(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Ui===null||!Ui.has(r))){t=da(n,t),t=Jb(e,t,1),e=Bi(e,t,1),t=nn(),e!==null&&(Hu(e,1,t),gn(e,t));break}}e=e.return}}function EN(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=nn(),t.pingedLanes|=t.suspendedLanes&n,xt===t&&(Rt&n)===n&&(mt===4||mt===3&&(Rt&130023424)===Rt&&500>it()-py?No(t,0):hy|=n),gn(t,e)}function yS(t,e){e===0&&(t.mode&1?(e=Lc,Lc<<=1,!(Lc&130023424)&&(Lc=4194304)):e=1);var n=nn();t=ni(t,e),t!==null&&(Hu(t,e,n),gn(t,n))}function xN(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),yS(t,n)}function TN(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(Q(314))}r!==null&&r.delete(e),yS(t,n)}var wS;wS=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||pn.current)dn=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return dn=!1,cN(t,e,n);dn=!!(t.flags&131072)}else dn=!1,We&&e.flags&1048576&&xb(e,Yd,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;wd(t,e),t=e.pendingProps;var i=aa(e,Gt.current);Js(e,n),i=ay(null,e,r,t,i,n);var o=ly();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,mn(r)?(o=!0,Kd(e)):o=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,ny(e),i.updater=oh,e.stateNode=i,i._reactInternals=e,sg(e,r,t,n),e=ug(null,e,r,!0,o,n)):(e.tag=0,We&&o&&Qv(e),en(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(wd(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=SN(r),t=Kn(r,t),i){case 0:e=lg(null,e,r,t,n);break e;case 1:e=s_(null,e,r,t,n);break e;case 11:e=i_(null,e,r,t,n);break e;case 14:e=o_(null,e,r,Kn(r.type,t),n);break e}throw Error(Q(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Kn(r,i),lg(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Kn(r,i),s_(t,e,r,i,n);case 3:e:{if(nS(e),t===null)throw Error(Q(387));r=e.pendingProps,o=e.memoizedState,i=o.element,Cb(t,e),Zd(e,r,null,n);var s=e.memoizedState;if(r=s.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},e.updateQueue.baseState=o,e.memoizedState=o,e.flags&256){i=da(Error(Q(423)),e),e=a_(t,e,r,n,i);break e}else if(r!==i){i=da(Error(Q(424)),e),e=a_(t,e,r,n,i);break e}else for(xn=$i(e.stateNode.containerInfo.firstChild),bn=e,We=!0,Xn=null,n=kb(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(la(),r===i){e=ri(t,e,n);break e}en(t,e,r,n)}e=e.child}return e;case 5:return Rb(e),t===null&&rg(e),r=e.type,i=e.pendingProps,o=t!==null?t.memoizedProps:null,s=i.children,Jm(r,i)?s=null:o!==null&&Jm(r,o)&&(e.flags|=32),tS(t,e),en(t,e,s,n),e.child;case 6:return t===null&&rg(e),null;case 13:return rS(t,e,n);case 4:return ry(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=ua(e,null,r,n):en(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Kn(r,i),i_(t,e,r,i,n);case 7:return en(t,e,e.pendingProps,n),e.child;case 8:return en(t,e,e.pendingProps.children,n),e.child;case 12:return en(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,o=e.memoizedProps,s=i.value,Le(Xd,r._currentValue),r._currentValue=s,o!==null)if(ir(o.value,s)){if(o.children===i.children&&!pn.current){e=ri(t,e,n);break e}}else for(o=e.child,o!==null&&(o.return=e);o!==null;){var a=o.dependencies;if(a!==null){s=o.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(o.tag===1){l=Jr(-1,n&-n),l.tag=2;var u=o.updateQueue;if(u!==null){u=u.shared;var d=u.pending;d===null?l.next=l:(l.next=d.next,d.next=l),u.pending=l}}o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),ig(o.return,n,e),a.lanes|=n;break}l=l.next}}else if(o.tag===10)s=o.type===e.type?null:o.child;else if(o.tag===18){if(s=o.return,s===null)throw Error(Q(341));s.lanes|=n,a=s.alternate,a!==null&&(a.lanes|=n),ig(s,n,e),s=o.sibling}else s=o.child;if(s!==null)s.return=o;else for(s=o;s!==null;){if(s===e){s=null;break}if(o=s.sibling,o!==null){o.return=s.return,s=o;break}s=s.return}o=s}en(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,Js(e,n),i=$n(i),r=r(i),e.flags|=1,en(t,e,r,n),e.child;case 14:return r=e.type,i=Kn(r,e.pendingProps),i=Kn(r.type,i),o_(t,e,r,i,n);case 15:return Zb(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Kn(r,i),wd(t,e),e.tag=1,mn(r)?(t=!0,Kd(e)):t=!1,Js(e,n),Ab(e,r,i),sg(e,r,i,n),ug(null,e,r,!0,t,n);case 19:return iS(t,e,n);case 22:return eS(t,e,n)}throw Error(Q(156,e.tag))};function _S(t,e){return qT(t,e)}function bN(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function jn(t,e,n,r){return new bN(t,e,n,r)}function yy(t){return t=t.prototype,!(!t||!t.isReactComponent)}function SN(t){if(typeof t=="function")return yy(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Vv)return 11;if(t===jv)return 14}return 2}function Hi(t,e){var n=t.alternate;return n===null?(n=jn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function xd(t,e,n,r,i,o){var s=2;if(r=t,typeof t=="function")yy(t)&&(s=1);else if(typeof t=="string")s=5;else e:switch(t){case Ds:return Lo(n.children,i,o,e);case Mv:s=8,i|=8;break;case km:return t=jn(12,n,e,i|2),t.elementType=km,t.lanes=o,t;case Rm:return t=jn(13,n,e,i),t.elementType=Rm,t.lanes=o,t;case Om:return t=jn(19,n,e,i),t.elementType=Om,t.lanes=o,t;case PT:return uh(n,i,o,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case IT:s=10;break e;case AT:s=9;break e;case Vv:s=11;break e;case jv:s=14;break e;case _i:s=16,r=null;break e}throw Error(Q(130,t==null?t:typeof t,""))}return e=jn(s,n,e,i),e.elementType=t,e.type=r,e.lanes=o,e}function Lo(t,e,n,r){return t=jn(7,t,r,e),t.lanes=n,t}function uh(t,e,n,r){return t=jn(22,t,r,e),t.elementType=PT,t.lanes=n,t.stateNode={isHidden:!1},t}function Bp(t,e,n){return t=jn(6,t,null,e),t.lanes=n,t}function Up(t,e,n){return e=jn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function CN(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=xp(0),this.expirationTimes=xp(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=xp(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function wy(t,e,n,r,i,o,s,a,l){return t=new CN(t,e,n,a,l),e===1?(e=1,o===!0&&(e|=8)):e=0,o=jn(3,null,null,e),t.current=o,o.stateNode=t,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},ny(o),t}function IN(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Os,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function ES(t){if(!t)return Xi;t=t._reactInternals;e:{if(ss(t)!==t||t.tag!==1)throw Error(Q(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(mn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(Q(171))}if(t.tag===1){var n=t.type;if(mn(n))return _b(t,n,e)}return e}function xS(t,e,n,r,i,o,s,a,l){return t=wy(n,r,!0,t,i,o,s,a,l),t.context=ES(null),n=t.current,r=nn(),i=zi(n),o=Jr(r,i),o.callback=e??null,Bi(n,o,i),t.current.lanes=i,Hu(t,i,r),gn(t,r),t}function ch(t,e,n,r){var i=e.current,o=nn(),s=zi(i);return n=ES(n),e.context===null?e.context=n:e.pendingContext=n,e=Jr(o,s),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=Bi(i,e,s),t!==null&&(er(t,i,s,o),gd(t,i,s)),s}function lf(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function v_(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function _y(t,e){v_(t,e),(t=t.alternate)&&v_(t,e)}function AN(){return null}var TS=typeof reportError=="function"?reportError:function(t){console.error(t)};function Ey(t){this._internalRoot=t}dh.prototype.render=Ey.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(Q(409));ch(t,e,null,null)};dh.prototype.unmount=Ey.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;qo(function(){ch(null,t,null,null)}),e[ti]=null}};function dh(t){this._internalRoot=t}dh.prototype.unstable_scheduleHydration=function(t){if(t){var e=ZT();t={blockedOn:null,target:t,priority:e};for(var n=0;n<xi.length&&e!==0&&e<xi[n].priority;n++);xi.splice(n,0,t),n===0&&tb(t)}};function xy(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function fh(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function y_(){}function PN(t,e,n,r,i){if(i){if(typeof r=="function"){var o=r;r=function(){var u=lf(s);o.call(u)}}var s=xS(e,r,t,0,null,!1,!1,"",y_);return t._reactRootContainer=s,t[ti]=s.current,uu(t.nodeType===8?t.parentNode:t),qo(),s}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var u=lf(l);a.call(u)}}var l=wy(t,0,!1,null,null,!1,!1,"",y_);return t._reactRootContainer=l,t[ti]=l.current,uu(t.nodeType===8?t.parentNode:t),qo(function(){ch(e,l,n,r)}),l}function hh(t,e,n,r,i){var o=n._reactRootContainer;if(o){var s=o;if(typeof i=="function"){var a=i;i=function(){var l=lf(s);a.call(l)}}ch(e,s,t,i)}else s=PN(n,e,t,i,r);return lf(s)}XT=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=wl(e.pendingLanes);n!==0&&(Bv(e,n|1),gn(e,it()),!(xe&6)&&(fa=it()+500,io()))}break;case 13:qo(function(){var r=ni(t,1);if(r!==null){var i=nn();er(r,t,1,i)}}),_y(t,1)}};Uv=function(t){if(t.tag===13){var e=ni(t,134217728);if(e!==null){var n=nn();er(e,t,134217728,n)}_y(t,134217728)}};JT=function(t){if(t.tag===13){var e=zi(t),n=ni(t,e);if(n!==null){var r=nn();er(n,t,e,r)}_y(t,e)}};ZT=function(){return Pe};eb=function(t,e){var n=Pe;try{return Pe=t,e()}finally{Pe=n}};Um=function(t,e,n){switch(e){case"input":if(Lm(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=rh(r);if(!i)throw Error(Q(90));RT(r),Lm(r,i)}}}break;case"textarea":DT(t,n);break;case"select":e=n.value,e!=null&&Ks(t,!!n.multiple,e,!1)}};$T=my;BT=qo;var kN={usingClientEntryPoint:!1,Events:[qu,Vs,rh,jT,FT,my]},cl={findFiberByHostInstance:Io,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},RN={bundleType:cl.bundleType,version:cl.version,rendererPackageName:cl.rendererPackageName,rendererConfig:cl.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:di.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=HT(t),t===null?null:t.stateNode},findFiberByHostInstance:cl.findFiberByHostInstance||AN,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var qc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!qc.isDisabled&&qc.supportsFiber)try{Zf=qc.inject(RN),Sr=qc}catch{}}In.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=kN;In.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!xy(e))throw Error(Q(200));return IN(t,e,null,n)};In.createRoot=function(t,e){if(!xy(t))throw Error(Q(299));var n=!1,r="",i=TS;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=wy(t,1,!1,null,null,n,!1,r,i),t[ti]=e.current,uu(t.nodeType===8?t.parentNode:t),new Ey(e)};In.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(Q(188)):(t=Object.keys(t).join(","),Error(Q(268,t)));return t=HT(e),t=t===null?null:t.stateNode,t};In.flushSync=function(t){return qo(t)};In.hydrate=function(t,e,n){if(!fh(e))throw Error(Q(200));return hh(null,t,e,!0,n)};In.hydrateRoot=function(t,e,n){if(!xy(t))throw Error(Q(405));var r=n!=null&&n.hydratedSources||null,i=!1,o="",s=TS;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(s=n.onRecoverableError)),e=xS(e,null,t,1,n??null,i,!1,o,s),t[ti]=e.current,uu(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new dh(e)};In.render=function(t,e,n){if(!fh(e))throw Error(Q(200));return hh(null,t,e,!1,n)};In.unmountComponentAtNode=function(t){if(!fh(t))throw Error(Q(40));return t._reactRootContainer?(qo(function(){hh(null,null,t,!1,function(){t._reactRootContainer=null,t[ti]=null})}),!0):!1};In.unstable_batchedUpdates=my;In.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!fh(n))throw Error(Q(200));if(t==null||t._reactInternals===void 0)throw Error(Q(38));return hh(t,e,n,!1,r)};In.version="18.2.0-next-9e3b772b8-20220608";function bS(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(bS)}catch(t){console.error(t)}}bS(),xT.exports=In;var Ty=xT.exports;const ON=Ia(Ty);var w_=Ty;Am.createRoot=w_.createRoot,Am.hydrateRoot=w_.hydrateRoot;/**
 * @remix-run/router v1.10.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function yu(){return yu=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},yu.apply(this,arguments)}var Ri;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(Ri||(Ri={}));const __="popstate";function DN(t){t===void 0&&(t={});function e(r,i){let{pathname:o,search:s,hash:a}=r.location;return Eg("",{pathname:o,search:s,hash:a},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:uf(i)}return LN(e,n,null,t)}function ot(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function by(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function NN(){return Math.random().toString(36).substr(2,8)}function E_(t,e){return{usr:t.state,key:t.key,idx:e}}function Eg(t,e,n,r){return n===void 0&&(n=null),yu({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?Ra(e):e,{state:n,key:e&&e.key||r||NN()})}function uf(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function Ra(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function LN(t,e,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:o=!1}=r,s=i.history,a=Ri.Pop,l=null,u=d();u==null&&(u=0,s.replaceState(yu({},s.state,{idx:u}),""));function d(){return(s.state||{idx:null}).idx}function h(){a=Ri.Pop;let S=d(),E=S==null?null:S-u;u=S,l&&l({action:a,location:b.location,delta:E})}function p(S,E){a=Ri.Push;let m=Eg(b.location,S,E);n&&n(m,S),u=d()+1;let v=E_(m,u),x=b.createHref(m);try{s.pushState(v,"",x)}catch(A){if(A instanceof DOMException&&A.name==="DataCloneError")throw A;i.location.assign(x)}o&&l&&l({action:a,location:b.location,delta:1})}function g(S,E){a=Ri.Replace;let m=Eg(b.location,S,E);n&&n(m,S),u=d();let v=E_(m,u),x=b.createHref(m);s.replaceState(v,"",x),o&&l&&l({action:a,location:b.location,delta:0})}function T(S){let E=i.location.origin!=="null"?i.location.origin:i.location.href,m=typeof S=="string"?S:uf(S);return ot(E,"No window.location.(origin|href) available to create URL for href: "+m),new URL(m,E)}let b={get action(){return a},get location(){return t(i,s)},listen(S){if(l)throw new Error("A history only accepts one active listener");return i.addEventListener(__,h),l=S,()=>{i.removeEventListener(__,h),l=null}},createHref(S){return e(i,S)},createURL:T,encodeLocation(S){let E=T(S);return{pathname:E.pathname,search:E.search,hash:E.hash}},push:p,replace:g,go(S){return s.go(S)}};return b}var x_;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(x_||(x_={}));function MN(t,e,n){n===void 0&&(n="/");let r=typeof e=="string"?Ra(e):e,i=Sy(r.pathname||"/",n);if(i==null)return null;let o=SS(t);VN(o);let s=null;for(let a=0;s==null&&a<o.length;++a)s=qN(o[a],QN(i));return s}function SS(t,e,n,r){e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(o,s,a)=>{let l={relativePath:a===void 0?o.path||"":a,caseSensitive:o.caseSensitive===!0,childrenIndex:s,route:o};l.relativePath.startsWith("/")&&(ot(l.relativePath.startsWith(r),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(r.length));let u=Wi([r,l.relativePath]),d=n.concat(l);o.children&&o.children.length>0&&(ot(o.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),SS(o.children,e,d,u)),!(o.path==null&&!o.index)&&e.push({path:u,score:HN(u,o.index),routesMeta:d})};return t.forEach((o,s)=>{var a;if(o.path===""||!((a=o.path)!=null&&a.includes("?")))i(o,s);else for(let l of CS(o.path))i(o,s,l)}),e}function CS(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,i=n.endsWith("?"),o=n.replace(/\?$/,"");if(r.length===0)return i?[o,""]:[o];let s=CS(r.join("/")),a=[];return a.push(...s.map(l=>l===""?o:[o,l].join("/"))),i&&a.push(...s),a.map(l=>t.startsWith("/")&&l===""?"/":l)}function VN(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:WN(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const jN=/^:\w+$/,FN=3,$N=2,BN=1,UN=10,zN=-2,T_=t=>t==="*";function HN(t,e){let n=t.split("/"),r=n.length;return n.some(T_)&&(r+=zN),e&&(r+=$N),n.filter(i=>!T_(i)).reduce((i,o)=>i+(jN.test(o)?FN:o===""?BN:UN),r)}function WN(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function qN(t,e){let{routesMeta:n}=t,r={},i="/",o=[];for(let s=0;s<n.length;++s){let a=n[s],l=s===n.length-1,u=i==="/"?e:e.slice(i.length)||"/",d=GN({path:a.relativePath,caseSensitive:a.caseSensitive,end:l},u);if(!d)return null;Object.assign(r,d.params);let h=a.route;o.push({params:r,pathname:Wi([i,d.pathname]),pathnameBase:ZN(Wi([i,d.pathnameBase])),route:h}),d.pathnameBase!=="/"&&(i=Wi([i,d.pathnameBase]))}return o}function GN(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=KN(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let o=i[0],s=o.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((u,d,h)=>{if(d==="*"){let p=a[h]||"";s=o.slice(0,o.length-p.length).replace(/(.)\/+$/,"$1")}return u[d]=YN(a[h]||"",d),u},{}),pathname:o,pathnameBase:s,pattern:t}}function KN(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),by(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/\/:(\w+)/g,(s,a)=>(r.push(a),"/([^\\/]+)"));return t.endsWith("*")?(r.push("*"),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function QN(t){try{return decodeURI(t)}catch(e){return by(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function YN(t,e){try{return decodeURIComponent(t)}catch(n){return by(!1,'The value for the URL param "'+e+'" will not be decoded because'+(' the string "'+t+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),t}}function Sy(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}function XN(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?Ra(t):t;return{pathname:n?n.startsWith("/")?n:JN(n,e):e,search:eL(r),hash:tL(i)}}function JN(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function zp(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Cy(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function Iy(t,e,n,r){r===void 0&&(r=!1);let i;typeof t=="string"?i=Ra(t):(i=yu({},t),ot(!i.pathname||!i.pathname.includes("?"),zp("?","pathname","search",i)),ot(!i.pathname||!i.pathname.includes("#"),zp("#","pathname","hash",i)),ot(!i.search||!i.search.includes("#"),zp("#","search","hash",i)));let o=t===""||i.pathname==="",s=o?"/":i.pathname,a;if(r||s==null)a=n;else{let h=e.length-1;if(s.startsWith("..")){let p=s.split("/");for(;p[0]==="..";)p.shift(),h-=1;i.pathname=p.join("/")}a=h>=0?e[h]:"/"}let l=XN(i,a),u=s&&s!=="/"&&s.endsWith("/"),d=(o||s===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(u||d)&&(l.pathname+="/"),l}const Wi=t=>t.join("/").replace(/\/\/+/g,"/"),ZN=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),eL=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,tL=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function nL(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const IS=["post","put","patch","delete"];new Set(IS);const rL=["get",...IS];new Set(rL);/**
 * React Router v6.17.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function cf(){return cf=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},cf.apply(this,arguments)}const Ay=C.createContext(null),iL=C.createContext(null),Oa=C.createContext(null),ph=C.createContext(null),Dr=C.createContext({outlet:null,matches:[],isDataRoute:!1}),AS=C.createContext(null);function oL(t,e){let{relative:n}=e===void 0?{}:e;Da()||ot(!1);let{basename:r,navigator:i}=C.useContext(Oa),{hash:o,pathname:s,search:a}=kS(t,{relative:n}),l=s;return r!=="/"&&(l=s==="/"?r:Wi([r,s])),i.createHref({pathname:l,search:a,hash:o})}function Da(){return C.useContext(ph)!=null}function Ku(){return Da()||ot(!1),C.useContext(ph).location}function PS(t){C.useContext(Oa).static||C.useLayoutEffect(t)}function as(){let{isDataRoute:t}=C.useContext(Dr);return t?EL():sL()}function sL(){Da()||ot(!1);let t=C.useContext(Ay),{basename:e,navigator:n}=C.useContext(Oa),{matches:r}=C.useContext(Dr),{pathname:i}=Ku(),o=JSON.stringify(Cy(r).map(l=>l.pathnameBase)),s=C.useRef(!1);return PS(()=>{s.current=!0}),C.useCallback(function(l,u){if(u===void 0&&(u={}),!s.current)return;if(typeof l=="number"){n.go(l);return}let d=Iy(l,JSON.parse(o),i,u.relative==="path");t==null&&e!=="/"&&(d.pathname=d.pathname==="/"?e:Wi([e,d.pathname])),(u.replace?n.replace:n.push)(d,u.state,u)},[e,n,o,i,t])}const aL=C.createContext(null);function lL(t){let e=C.useContext(Dr).outlet;return e&&C.createElement(aL.Provider,{value:t},e)}function uL(){let{matches:t}=C.useContext(Dr),e=t[t.length-1];return e?e.params:{}}function kS(t,e){let{relative:n}=e===void 0?{}:e,{matches:r}=C.useContext(Dr),{pathname:i}=Ku(),o=JSON.stringify(Cy(r).map(s=>s.pathnameBase));return C.useMemo(()=>Iy(t,JSON.parse(o),i,n==="path"),[t,o,i,n])}function cL(t,e){return dL(t,e)}function dL(t,e,n){Da()||ot(!1);let{navigator:r}=C.useContext(Oa),{matches:i}=C.useContext(Dr),o=i[i.length-1],s=o?o.params:{};o&&o.pathname;let a=o?o.pathnameBase:"/";o&&o.route;let l=Ku(),u;if(e){var d;let b=typeof e=="string"?Ra(e):e;a==="/"||(d=b.pathname)!=null&&d.startsWith(a)||ot(!1),u=b}else u=l;let h=u.pathname||"/",p=a==="/"?h:h.slice(a.length)||"/",g=MN(t,{pathname:p}),T=gL(g&&g.map(b=>Object.assign({},b,{params:Object.assign({},s,b.params),pathname:Wi([a,r.encodeLocation?r.encodeLocation(b.pathname).pathname:b.pathname]),pathnameBase:b.pathnameBase==="/"?a:Wi([a,r.encodeLocation?r.encodeLocation(b.pathnameBase).pathname:b.pathnameBase])})),i,n);return e&&T?C.createElement(ph.Provider,{value:{location:cf({pathname:"/",search:"",hash:"",state:null,key:"default"},u),navigationType:Ri.Pop}},T):T}function fL(){let t=_L(),e=nL(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},o=null;return C.createElement(C.Fragment,null,C.createElement("h2",null,"Unexpected Application Error!"),C.createElement("h3",{style:{fontStyle:"italic"}},e),n?C.createElement("pre",{style:i},n):null,o)}const hL=C.createElement(fL,null);class pL extends C.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error||n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error?C.createElement(Dr.Provider,{value:this.props.routeContext},C.createElement(AS.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function mL(t){let{routeContext:e,match:n,children:r}=t,i=C.useContext(Ay);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),C.createElement(Dr.Provider,{value:e},r)}function gL(t,e,n){var r;if(e===void 0&&(e=[]),n===void 0&&(n=null),t==null){var i;if((i=n)!=null&&i.errors)t=n.matches;else return null}let o=t,s=(r=n)==null?void 0:r.errors;if(s!=null){let a=o.findIndex(l=>l.route.id&&(s==null?void 0:s[l.route.id]));a>=0||ot(!1),o=o.slice(0,Math.min(o.length,a+1))}return o.reduceRight((a,l,u)=>{let d=l.route.id?s==null?void 0:s[l.route.id]:null,h=null;n&&(h=l.route.errorElement||hL);let p=e.concat(o.slice(0,u+1)),g=()=>{let T;return d?T=h:l.route.Component?T=C.createElement(l.route.Component,null):l.route.element?T=l.route.element:T=a,C.createElement(mL,{match:l,routeContext:{outlet:a,matches:p,isDataRoute:n!=null},children:T})};return n&&(l.route.ErrorBoundary||l.route.errorElement||u===0)?C.createElement(pL,{location:n.location,revalidation:n.revalidation,component:h,error:d,children:g(),routeContext:{outlet:null,matches:p,isDataRoute:!0}}):g()},null)}var RS=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(RS||{}),df=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(df||{});function vL(t){let e=C.useContext(Ay);return e||ot(!1),e}function yL(t){let e=C.useContext(iL);return e||ot(!1),e}function wL(t){let e=C.useContext(Dr);return e||ot(!1),e}function OS(t){let e=wL(),n=e.matches[e.matches.length-1];return n.route.id||ot(!1),n.route.id}function _L(){var t;let e=C.useContext(AS),n=yL(df.UseRouteError),r=OS(df.UseRouteError);return e||((t=n.errors)==null?void 0:t[r])}function EL(){let{router:t}=vL(RS.UseNavigateStable),e=OS(df.UseNavigateStable),n=C.useRef(!1);return PS(()=>{n.current=!0}),C.useCallback(function(i,o){o===void 0&&(o={}),n.current&&(typeof i=="number"?t.navigate(i):t.navigate(i,cf({fromRouteId:e},o)))},[t,e])}function xL(t){let{to:e,replace:n,state:r,relative:i}=t;Da()||ot(!1);let{matches:o}=C.useContext(Dr),{pathname:s}=Ku(),a=as(),l=Iy(e,Cy(o).map(d=>d.pathnameBase),s,i==="path"),u=JSON.stringify(l);return C.useEffect(()=>a(JSON.parse(u),{replace:n,state:r,relative:i}),[a,u,i,n,r]),null}function DS(t){return lL(t.context)}function Gn(t){ot(!1)}function TL(t){let{basename:e="/",children:n=null,location:r,navigationType:i=Ri.Pop,navigator:o,static:s=!1}=t;Da()&&ot(!1);let a=e.replace(/^\/*/,"/"),l=C.useMemo(()=>({basename:a,navigator:o,static:s}),[a,o,s]);typeof r=="string"&&(r=Ra(r));let{pathname:u="/",search:d="",hash:h="",state:p=null,key:g="default"}=r,T=C.useMemo(()=>{let b=Sy(u,a);return b==null?null:{location:{pathname:b,search:d,hash:h,state:p,key:g},navigationType:i}},[a,u,d,h,p,g,i]);return T==null?null:C.createElement(Oa.Provider,{value:l},C.createElement(ph.Provider,{children:n,value:T}))}function bL(t){let{children:e,location:n}=t;return cL(xg(e),n)}new Promise(()=>{});function xg(t,e){e===void 0&&(e=[]);let n=[];return C.Children.forEach(t,(r,i)=>{if(!C.isValidElement(r))return;let o=[...e,i];if(r.type===C.Fragment){n.push.apply(n,xg(r.props.children,o));return}r.type!==Gn&&ot(!1),!r.props.index||!r.props.children||ot(!1);let s={id:r.props.id||o.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(s.children=xg(r.props.children,o)),n.push(s)}),n}/**
 * React Router DOM v6.17.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Tg(){return Tg=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Tg.apply(this,arguments)}function SL(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,o;for(o=0;o<r.length;o++)i=r[o],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function CL(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function IL(t,e){return t.button===0&&(!e||e==="_self")&&!CL(t)}const AL=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","unstable_viewTransition"],PL="startTransition",b_=xO[PL];function kL(t){let{basename:e,children:n,future:r,window:i}=t,o=C.useRef();o.current==null&&(o.current=DN({window:i,v5Compat:!0}));let s=o.current,[a,l]=C.useState({action:s.action,location:s.location}),{v7_startTransition:u}=r||{},d=C.useCallback(h=>{u&&b_?b_(()=>l(h)):l(h)},[l,u]);return C.useLayoutEffect(()=>s.listen(d),[s,d]),C.createElement(TL,{basename:e,children:n,location:a.location,navigationType:a.action,navigator:s})}const RL=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",OL=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Ht=C.forwardRef(function(e,n){let{onClick:r,relative:i,reloadDocument:o,replace:s,state:a,target:l,to:u,preventScrollReset:d,unstable_viewTransition:h}=e,p=SL(e,AL),{basename:g}=C.useContext(Oa),T,b=!1;if(typeof u=="string"&&OL.test(u)&&(T=u,RL))try{let v=new URL(window.location.href),x=u.startsWith("//")?new URL(v.protocol+u):new URL(u),A=Sy(x.pathname,g);x.origin===v.origin&&A!=null?u=A+x.search+x.hash:b=!0}catch{}let S=oL(u,{relative:i}),E=DL(u,{replace:s,state:a,target:l,preventScrollReset:d,relative:i,unstable_viewTransition:h});function m(v){r&&r(v),v.defaultPrevented||E(v)}return C.createElement("a",Tg({},p,{href:T||S,onClick:b||o?r:m,ref:n,target:l}))});var S_;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})(S_||(S_={}));var C_;(function(t){t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(C_||(C_={}));function DL(t,e){let{target:n,replace:r,state:i,preventScrollReset:o,relative:s,unstable_viewTransition:a}=e===void 0?{}:e,l=as(),u=Ku(),d=kS(t,{relative:s});return C.useCallback(h=>{if(IL(h,n)){h.preventDefault();let p=r!==void 0?r:uf(u)===uf(d);l(t,{replace:p,state:i,preventScrollReset:o,relative:s,unstable_viewTransition:a})}},[u,l,d,r,i,n,t,o,s,a])}var fn=function(){return fn=Object.assign||function(e){for(var n,r=1,i=arguments.length;r<i;r++){n=arguments[r];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},fn.apply(this,arguments)};function Py(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function Na(t,e,n,r){function i(o){return o instanceof n?o:new n(function(s){s(o)})}return new(n||(n=Promise))(function(o,s){function a(d){try{u(r.next(d))}catch(h){s(h)}}function l(d){try{u(r.throw(d))}catch(h){s(h)}}function u(d){d.done?o(d.value):i(d.value).then(a,l)}u((r=r.apply(t,e||[])).next())})}function La(t,e){var n={label:0,sent:function(){if(o[0]&1)throw o[1];return o[1]},trys:[],ops:[]},r,i,o,s;return s={next:a(0),throw:a(1),return:a(2)},typeof Symbol=="function"&&(s[Symbol.iterator]=function(){return this}),s;function a(u){return function(d){return l([u,d])}}function l(u){if(r)throw new TypeError("Generator is already executing.");for(;s&&(s=0,u[0]&&(n=0)),n;)try{if(r=1,i&&(o=u[0]&2?i.return:u[0]?i.throw||((o=i.return)&&o.call(i),0):i.next)&&!(o=o.call(i,u[1])).done)return o;switch(i=0,o&&(u=[u[0]&2,o.value]),u[0]){case 0:case 1:o=u;break;case 4:return n.label++,{value:u[1],done:!1};case 5:n.label++,i=u[1],u=[0];continue;case 7:u=n.ops.pop(),n.trys.pop();continue;default:if(o=n.trys,!(o=o.length>0&&o[o.length-1])&&(u[0]===6||u[0]===2)){n=0;continue}if(u[0]===3&&(!o||u[1]>o[0]&&u[1]<o[3])){n.label=u[1];break}if(u[0]===6&&n.label<o[1]){n.label=o[1],o=u;break}if(o&&n.label<o[2]){n.label=o[2],n.ops.push(u);break}o[2]&&n.ops.pop(),n.trys.pop();continue}u=e.call(t,n)}catch(d){u=[6,d],i=0}finally{r=o=0}if(u[0]&5)throw u[1];return{value:u[0]?u[1]:void 0,done:!0}}}function I_(t,e){var n=typeof Symbol=="function"&&t[Symbol.iterator];if(!n)return t;var r=n.call(t),i,o=[],s;try{for(;(e===void 0||e-- >0)&&!(i=r.next()).done;)o.push(i.value)}catch(a){s={error:a}}finally{try{i&&!i.done&&(n=r.return)&&n.call(r)}finally{if(s)throw s.error}}return o}function Go(t,e,n){if(n||arguments.length===2)for(var r=0,i=e.length,o;r<i;r++)(o||!(r in e))&&(o||(o=Array.prototype.slice.call(e,0,r)),o[r]=e[r]);return t.concat(o||Array.prototype.slice.call(e))}var Fe="-ms-",$l="-moz-",Ie="-webkit-",NS="comm",mh="rule",ky="decl",NL="@import",LS="@keyframes",LL="@layer",ML=Math.abs,Ry=String.fromCharCode,bg=Object.assign;function VL(t,e){return Et(t,0)^45?(((e<<2^Et(t,0))<<2^Et(t,1))<<2^Et(t,2))<<2^Et(t,3):0}function MS(t){return t.trim()}function Wr(t,e){return(t=e.exec(t))?t[0]:t}function pe(t,e,n){return t.replace(e,n)}function Td(t,e){return t.indexOf(e)}function Et(t,e){return t.charCodeAt(e)|0}function ha(t,e,n){return t.slice(e,n)}function yr(t){return t.length}function VS(t){return t.length}function El(t,e){return e.push(t),t}function jL(t,e){return t.map(e).join("")}function A_(t,e){return t.filter(function(n){return!Wr(n,e)})}var gh=1,pa=1,jS=0,Un=0,dt=0,Ma="";function vh(t,e,n,r,i,o,s,a){return{value:t,root:e,parent:n,type:r,props:i,children:o,line:gh,column:pa,length:s,return:"",siblings:a}}function wi(t,e){return bg(vh("",null,null,"",null,null,0,t.siblings),t,{length:-t.length},e)}function Es(t){for(;t.root;)t=wi(t.root,{children:[t]});El(t,t.siblings)}function FL(){return dt}function $L(){return dt=Un>0?Et(Ma,--Un):0,pa--,dt===10&&(pa=1,gh--),dt}function tr(){return dt=Un<jS?Et(Ma,Un++):0,pa++,dt===10&&(pa=1,gh++),dt}function Mo(){return Et(Ma,Un)}function bd(){return Un}function yh(t,e){return ha(Ma,t,e)}function Sg(t){switch(t){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function BL(t){return gh=pa=1,jS=yr(Ma=t),Un=0,[]}function UL(t){return Ma="",t}function Hp(t){return MS(yh(Un-1,Cg(t===91?t+2:t===40?t+1:t)))}function zL(t){for(;(dt=Mo())&&dt<33;)tr();return Sg(t)>2||Sg(dt)>3?"":" "}function HL(t,e){for(;--e&&tr()&&!(dt<48||dt>102||dt>57&&dt<65||dt>70&&dt<97););return yh(t,bd()+(e<6&&Mo()==32&&tr()==32))}function Cg(t){for(;tr();)switch(dt){case t:return Un;case 34:case 39:t!==34&&t!==39&&Cg(dt);break;case 40:t===41&&Cg(t);break;case 92:tr();break}return Un}function WL(t,e){for(;tr()&&t+dt!==47+10;)if(t+dt===42+42&&Mo()===47)break;return"/*"+yh(e,Un-1)+"*"+Ry(t===47?t:tr())}function qL(t){for(;!Sg(Mo());)tr();return yh(t,Un)}function GL(t){return UL(Sd("",null,null,null,[""],t=BL(t),0,[0],t))}function Sd(t,e,n,r,i,o,s,a,l){for(var u=0,d=0,h=s,p=0,g=0,T=0,b=1,S=1,E=1,m=0,v="",x=i,A=o,k=r,P=v;S;)switch(T=m,m=tr()){case 40:if(T!=108&&Et(P,h-1)==58){Td(P+=pe(Hp(m),"&","&\f"),"&\f")!=-1&&(E=-1);break}case 34:case 39:case 91:P+=Hp(m);break;case 9:case 10:case 13:case 32:P+=zL(T);break;case 92:P+=HL(bd()-1,7);continue;case 47:switch(Mo()){case 42:case 47:El(KL(WL(tr(),bd()),e,n,l),l);break;default:P+="/"}break;case 123*b:a[u++]=yr(P)*E;case 125*b:case 59:case 0:switch(m){case 0:case 125:S=0;case 59+d:E==-1&&(P=pe(P,/\f/g,"")),g>0&&yr(P)-h&&El(g>32?k_(P+";",r,n,h-1,l):k_(pe(P," ","")+";",r,n,h-2,l),l);break;case 59:P+=";";default:if(El(k=P_(P,e,n,u,d,i,a,v,x=[],A=[],h,o),o),m===123)if(d===0)Sd(P,e,k,k,x,o,h,a,A);else switch(p===99&&Et(P,3)===110?100:p){case 100:case 108:case 109:case 115:Sd(t,k,k,r&&El(P_(t,k,k,0,0,i,a,v,i,x=[],h,A),A),i,A,h,a,r?x:A);break;default:Sd(P,k,k,k,[""],A,0,a,A)}}u=d=g=0,b=E=1,v=P="",h=s;break;case 58:h=1+yr(P),g=T;default:if(b<1){if(m==123)--b;else if(m==125&&b++==0&&$L()==125)continue}switch(P+=Ry(m),m*b){case 38:E=d>0?1:(P+="\f",-1);break;case 44:a[u++]=(yr(P)-1)*E,E=1;break;case 64:Mo()===45&&(P+=Hp(tr())),p=Mo(),d=h=yr(v=P+=qL(bd())),m++;break;case 45:T===45&&yr(P)==2&&(b=0)}}return o}function P_(t,e,n,r,i,o,s,a,l,u,d,h){for(var p=i-1,g=i===0?o:[""],T=VS(g),b=0,S=0,E=0;b<r;++b)for(var m=0,v=ha(t,p+1,p=ML(S=s[b])),x=t;m<T;++m)(x=MS(S>0?g[m]+" "+v:pe(v,/&\f/g,g[m])))&&(l[E++]=x);return vh(t,e,n,i===0?mh:a,l,u,d,h)}function KL(t,e,n,r){return vh(t,e,n,NS,Ry(FL()),ha(t,2,-2),0,r)}function k_(t,e,n,r,i){return vh(t,e,n,ky,ha(t,0,r),ha(t,r+1,-1),r,i)}function FS(t,e,n){switch(VL(t,e)){case 5103:return Ie+"print-"+t+t;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return Ie+t+t;case 4789:return $l+t+t;case 5349:case 4246:case 4810:case 6968:case 2756:return Ie+t+$l+t+Fe+t+t;case 5936:switch(Et(t,e+11)){case 114:return Ie+t+Fe+pe(t,/[svh]\w+-[tblr]{2}/,"tb")+t;case 108:return Ie+t+Fe+pe(t,/[svh]\w+-[tblr]{2}/,"tb-rl")+t;case 45:return Ie+t+Fe+pe(t,/[svh]\w+-[tblr]{2}/,"lr")+t}case 6828:case 4268:case 2903:return Ie+t+Fe+t+t;case 6165:return Ie+t+Fe+"flex-"+t+t;case 5187:return Ie+t+pe(t,/(\w+).+(:[^]+)/,Ie+"box-$1$2"+Fe+"flex-$1$2")+t;case 5443:return Ie+t+Fe+"flex-item-"+pe(t,/flex-|-self/g,"")+(Wr(t,/flex-|baseline/)?"":Fe+"grid-row-"+pe(t,/flex-|-self/g,""))+t;case 4675:return Ie+t+Fe+"flex-line-pack"+pe(t,/align-content|flex-|-self/g,"")+t;case 5548:return Ie+t+Fe+pe(t,"shrink","negative")+t;case 5292:return Ie+t+Fe+pe(t,"basis","preferred-size")+t;case 6060:return Ie+"box-"+pe(t,"-grow","")+Ie+t+Fe+pe(t,"grow","positive")+t;case 4554:return Ie+pe(t,/([^-])(transform)/g,"$1"+Ie+"$2")+t;case 6187:return pe(pe(pe(t,/(zoom-|grab)/,Ie+"$1"),/(image-set)/,Ie+"$1"),t,"")+t;case 5495:case 3959:return pe(t,/(image-set\([^]*)/,Ie+"$1$`$1");case 4968:return pe(pe(t,/(.+:)(flex-)?(.*)/,Ie+"box-pack:$3"+Fe+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+Ie+t+t;case 4200:if(!Wr(t,/flex-|baseline/))return Fe+"grid-column-align"+ha(t,e)+t;break;case 2592:case 3360:return Fe+pe(t,"template-","")+t;case 4384:case 3616:return n&&n.some(function(r,i){return e=i,Wr(r.props,/grid-\w+-end/)})?~Td(t+(n=n[e].value),"span")?t:Fe+pe(t,"-start","")+t+Fe+"grid-row-span:"+(~Td(n,"span")?Wr(n,/\d+/):+Wr(n,/\d+/)-+Wr(t,/\d+/))+";":Fe+pe(t,"-start","")+t;case 4896:case 4128:return n&&n.some(function(r){return Wr(r.props,/grid-\w+-start/)})?t:Fe+pe(pe(t,"-end","-span"),"span ","")+t;case 4095:case 3583:case 4068:case 2532:return pe(t,/(.+)-inline(.+)/,Ie+"$1$2")+t;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(yr(t)-1-e>6)switch(Et(t,e+1)){case 109:if(Et(t,e+4)!==45)break;case 102:return pe(t,/(.+:)(.+)-([^]+)/,"$1"+Ie+"$2-$3$1"+$l+(Et(t,e+3)==108?"$3":"$2-$3"))+t;case 115:return~Td(t,"stretch")?FS(pe(t,"stretch","fill-available"),e,n)+t:t}break;case 5152:case 5920:return pe(t,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(r,i,o,s,a,l,u){return Fe+i+":"+o+u+(s?Fe+i+"-span:"+(a?l:+l-+o)+u:"")+t});case 4949:if(Et(t,e+6)===121)return pe(t,":",":"+Ie)+t;break;case 6444:switch(Et(t,Et(t,14)===45?18:11)){case 120:return pe(t,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+Ie+(Et(t,14)===45?"inline-":"")+"box$3$1"+Ie+"$2$3$1"+Fe+"$2box$3")+t;case 100:return pe(t,":",":"+Fe)+t}break;case 5719:case 2647:case 2135:case 3927:case 2391:return pe(t,"scroll-","scroll-snap-")+t}return t}function ff(t,e){for(var n="",r=0;r<t.length;r++)n+=e(t[r],r,t,e)||"";return n}function QL(t,e,n,r){switch(t.type){case LL:if(t.children.length)break;case NL:case ky:return t.return=t.return||t.value;case NS:return"";case LS:return t.return=t.value+"{"+ff(t.children,r)+"}";case mh:if(!yr(t.value=t.props.join(",")))return""}return yr(n=ff(t.children,r))?t.return=t.value+"{"+n+"}":""}function YL(t){var e=VS(t);return function(n,r,i,o){for(var s="",a=0;a<e;a++)s+=t[a](n,r,i,o)||"";return s}}function XL(t){return function(e){e.root||(e=e.return)&&t(e)}}function JL(t,e,n,r){if(t.length>-1&&!t.return)switch(t.type){case ky:t.return=FS(t.value,t.length,n);return;case LS:return ff([wi(t,{value:pe(t.value,"@","@"+Ie)})],r);case mh:if(t.length)return jL(n=t.props,function(i){switch(Wr(i,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":Es(wi(t,{props:[pe(i,/:(read-\w+)/,":"+$l+"$1")]})),Es(wi(t,{props:[i]})),bg(t,{props:A_(n,r)});break;case"::placeholder":Es(wi(t,{props:[pe(i,/:(plac\w+)/,":"+Ie+"input-$1")]})),Es(wi(t,{props:[pe(i,/:(plac\w+)/,":"+$l+"$1")]})),Es(wi(t,{props:[pe(i,/:(plac\w+)/,Fe+"input-$1")]})),Es(wi(t,{props:[i]})),bg(t,{props:A_(n,r)});break}return""})}}var ZL={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},ma=typeof process<"u"&&process.env!==void 0&&({}.REACT_APP_SC_ATTR||{}.SC_ATTR)||"data-styled",Oy=typeof window<"u"&&"HTMLElement"in window,eM=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&process.env!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==""?{}.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&{}.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&process.env!==void 0&&{}.SC_DISABLE_SPEEDY!==void 0&&{}.SC_DISABLE_SPEEDY!==""&&{}.SC_DISABLE_SPEEDY!=="false"&&{}.SC_DISABLE_SPEEDY),wh=Object.freeze([]),ga=Object.freeze({});function tM(t,e,n){return n===void 0&&(n=ga),t.theme!==n.theme&&t.theme||e||n.theme}var $S=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),nM=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,rM=/(^-|-$)/g;function R_(t){return t.replace(nM,"-").replace(rM,"")}var iM=/(a)(d)/gi,O_=function(t){return String.fromCharCode(t+(t>25?39:97))};function Ig(t){var e,n="";for(e=Math.abs(t);e>52;e=e/52|0)n=O_(e%52)+n;return(O_(e%52)+n).replace(iM,"$1-$2")}var Wp,Hs=function(t,e){for(var n=e.length;n;)t=33*t^e.charCodeAt(--n);return t},BS=function(t){return Hs(5381,t)};function US(t){return Ig(BS(t)>>>0)}function oM(t){return t.displayName||t.name||"Component"}function qp(t){return typeof t=="string"&&!0}var zS=typeof Symbol=="function"&&Symbol.for,HS=zS?Symbol.for("react.memo"):60115,sM=zS?Symbol.for("react.forward_ref"):60112,aM={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},lM={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},WS={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},uM=((Wp={})[sM]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Wp[HS]=WS,Wp);function D_(t){return("type"in(e=t)&&e.type.$$typeof)===HS?WS:"$$typeof"in t?uM[t.$$typeof]:aM;var e}var cM=Object.defineProperty,dM=Object.getOwnPropertyNames,N_=Object.getOwnPropertySymbols,fM=Object.getOwnPropertyDescriptor,hM=Object.getPrototypeOf,L_=Object.prototype;function qS(t,e,n){if(typeof e!="string"){if(L_){var r=hM(e);r&&r!==L_&&qS(t,r,n)}var i=dM(e);N_&&(i=i.concat(N_(e)));for(var o=D_(t),s=D_(e),a=0;a<i.length;++a){var l=i[a];if(!(l in lM||n&&n[l]||s&&l in s||o&&l in o)){var u=fM(e,l);try{cM(t,l,u)}catch{}}}}return t}function va(t){return typeof t=="function"}function Dy(t){return typeof t=="object"&&"styledComponentId"in t}function ko(t,e){return t&&e?"".concat(t," ").concat(e):t||e||""}function Ag(t,e){if(t.length===0)return"";for(var n=t[0],r=1;r<t.length;r++)n+=e?e+t[r]:t[r];return n}function wu(t){return t!==null&&typeof t=="object"&&t.constructor.name===Object.name&&!("props"in t&&t.$$typeof)}function Pg(t,e,n){if(n===void 0&&(n=!1),!n&&!wu(t)&&!Array.isArray(t))return e;if(Array.isArray(e))for(var r=0;r<e.length;r++)t[r]=Pg(t[r],e[r]);else if(wu(e))for(var r in e)t[r]=Pg(t[r],e[r]);return t}function Ny(t,e){Object.defineProperty(t,"toString",{value:e})}function Qu(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(t," for more information.").concat(e.length>0?" Args: ".concat(e.join(", ")):""))}var pM=function(){function t(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e}return t.prototype.indexOfGroup=function(e){for(var n=0,r=0;r<e;r++)n+=this.groupSizes[r];return n},t.prototype.insertRules=function(e,n){if(e>=this.groupSizes.length){for(var r=this.groupSizes,i=r.length,o=i;e>=o;)if((o<<=1)<0)throw Qu(16,"".concat(e));this.groupSizes=new Uint32Array(o),this.groupSizes.set(r),this.length=o;for(var s=i;s<o;s++)this.groupSizes[s]=0}for(var a=this.indexOfGroup(e+1),l=(s=0,n.length);s<l;s++)this.tag.insertRule(a,n[s])&&(this.groupSizes[e]++,a++)},t.prototype.clearGroup=function(e){if(e<this.length){var n=this.groupSizes[e],r=this.indexOfGroup(e),i=r+n;this.groupSizes[e]=0;for(var o=r;o<i;o++)this.tag.deleteRule(r)}},t.prototype.getGroup=function(e){var n="";if(e>=this.length||this.groupSizes[e]===0)return n;for(var r=this.groupSizes[e],i=this.indexOfGroup(e),o=i+r,s=i;s<o;s++)n+="".concat(this.tag.getRule(s)).concat(`/*!sc*/
`);return n},t}(),Cd=new Map,hf=new Map,Gp=1,Gc=function(t){if(Cd.has(t))return Cd.get(t);for(;hf.has(Gp);)Gp++;var e=Gp++;return Cd.set(t,e),hf.set(e,t),e},mM=function(t,e){Cd.set(t,e),hf.set(e,t)},gM="style[".concat(ma,"][").concat("data-styled-version",'="').concat("6.1.0",'"]'),vM=new RegExp("^".concat(ma,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),yM=function(t,e,n){for(var r,i=n.split(","),o=0,s=i.length;o<s;o++)(r=i[o])&&t.registerName(e,r)},wM=function(t,e){for(var n,r=((n=e.textContent)!==null&&n!==void 0?n:"").split(`/*!sc*/
`),i=[],o=0,s=r.length;o<s;o++){var a=r[o].trim();if(a){var l=a.match(vM);if(l){var u=0|parseInt(l[1],10),d=l[2];u!==0&&(mM(d,u),yM(t,d,l[3]),t.getTag().insertRules(u,i)),i.length=0}else i.push(a)}}};function _M(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var GS=function(t){var e=document.head,n=t||e,r=document.createElement("style"),i=function(a){var l=Array.from(a.querySelectorAll("style[".concat(ma,"]")));return l[l.length-1]}(n),o=i!==void 0?i.nextSibling:null;r.setAttribute(ma,"active"),r.setAttribute("data-styled-version","6.1.0");var s=_M();return s&&r.setAttribute("nonce",s),n.insertBefore(r,o),r},EM=function(){function t(e){this.element=GS(e),this.element.appendChild(document.createTextNode("")),this.sheet=function(n){if(n.sheet)return n.sheet;for(var r=document.styleSheets,i=0,o=r.length;i<o;i++){var s=r[i];if(s.ownerNode===n)return s}throw Qu(17)}(this.element),this.length=0}return t.prototype.insertRule=function(e,n){try{return this.sheet.insertRule(n,e),this.length++,!0}catch{return!1}},t.prototype.deleteRule=function(e){this.sheet.deleteRule(e),this.length--},t.prototype.getRule=function(e){var n=this.sheet.cssRules[e];return n&&n.cssText?n.cssText:""},t}(),xM=function(){function t(e){this.element=GS(e),this.nodes=this.element.childNodes,this.length=0}return t.prototype.insertRule=function(e,n){if(e<=this.length&&e>=0){var r=document.createTextNode(n);return this.element.insertBefore(r,this.nodes[e]||null),this.length++,!0}return!1},t.prototype.deleteRule=function(e){this.element.removeChild(this.nodes[e]),this.length--},t.prototype.getRule=function(e){return e<this.length?this.nodes[e].textContent:""},t}(),TM=function(){function t(e){this.rules=[],this.length=0}return t.prototype.insertRule=function(e,n){return e<=this.length&&(this.rules.splice(e,0,n),this.length++,!0)},t.prototype.deleteRule=function(e){this.rules.splice(e,1),this.length--},t.prototype.getRule=function(e){return e<this.length?this.rules[e]:""},t}(),M_=Oy,bM={isServer:!Oy,useCSSOMInjection:!eM},KS=function(){function t(e,n,r){e===void 0&&(e=ga),n===void 0&&(n={});var i=this;this.options=fn(fn({},bM),e),this.gs=n,this.names=new Map(r),this.server=!!e.isServer,!this.server&&Oy&&M_&&(M_=!1,function(o){for(var s=document.querySelectorAll(gM),a=0,l=s.length;a<l;a++){var u=s[a];u&&u.getAttribute(ma)!=="active"&&(wM(o,u),u.parentNode&&u.parentNode.removeChild(u))}}(this)),Ny(this,function(){return function(o){for(var s=o.getTag(),a=s.length,l="",u=function(h){var p=function(E){return hf.get(E)}(h);if(p===void 0)return"continue";var g=o.names.get(p),T=s.getGroup(h);if(g===void 0||T.length===0)return"continue";var b="".concat(ma,".g").concat(h,'[id="').concat(p,'"]'),S="";g!==void 0&&g.forEach(function(E){E.length>0&&(S+="".concat(E,","))}),l+="".concat(T).concat(b,'{content:"').concat(S,'"}').concat(`/*!sc*/
`)},d=0;d<a;d++)u(d);return l}(i)})}return t.registerId=function(e){return Gc(e)},t.prototype.reconstructWithOptions=function(e,n){return n===void 0&&(n=!0),new t(fn(fn({},this.options),e),this.gs,n&&this.names||void 0)},t.prototype.allocateGSInstance=function(e){return this.gs[e]=(this.gs[e]||0)+1},t.prototype.getTag=function(){return this.tag||(this.tag=(e=function(n){var r=n.useCSSOMInjection,i=n.target;return n.isServer?new TM(i):r?new EM(i):new xM(i)}(this.options),new pM(e)));var e},t.prototype.hasNameForId=function(e,n){return this.names.has(e)&&this.names.get(e).has(n)},t.prototype.registerName=function(e,n){if(Gc(e),this.names.has(e))this.names.get(e).add(n);else{var r=new Set;r.add(n),this.names.set(e,r)}},t.prototype.insertRules=function(e,n,r){this.registerName(e,n),this.getTag().insertRules(Gc(e),r)},t.prototype.clearNames=function(e){this.names.has(e)&&this.names.get(e).clear()},t.prototype.clearRules=function(e){this.getTag().clearGroup(Gc(e)),this.clearNames(e)},t.prototype.clearTag=function(){this.tag=void 0},t}(),SM=/&/g,CM=/^\s*\/\/.*$/gm;function QS(t,e){return t.map(function(n){return n.type==="rule"&&(n.value="".concat(e," ").concat(n.value),n.value=n.value.replaceAll(",",",".concat(e," ")),n.props=n.props.map(function(r){return"".concat(e," ").concat(r)})),Array.isArray(n.children)&&n.type!=="@keyframes"&&(n.children=QS(n.children,e)),n})}function IM(t){var e,n,r,i=t===void 0?ga:t,o=i.options,s=o===void 0?ga:o,a=i.plugins,l=a===void 0?wh:a,u=function(p,g,T){return T===n||T.startsWith(n)&&T.endsWith(n)&&T.replaceAll(n,"").length>0?".".concat(e):p},d=l.slice();d.push(function(p){p.type===mh&&p.value.includes("&")&&(p.props[0]=p.props[0].replace(SM,n).replace(r,u))}),s.prefix&&d.push(JL),d.push(QL);var h=function(p,g,T,b){g===void 0&&(g=""),T===void 0&&(T=""),b===void 0&&(b="&"),e=b,n=g,r=new RegExp("\\".concat(n,"\\b"),"g");var S=p.replace(CM,""),E=GL(T||g?"".concat(T," ").concat(g," { ").concat(S," }"):S);s.namespace&&(E=QS(E,s.namespace));var m=[];return ff(E,YL(d.concat(XL(function(v){return m.push(v)})))),m};return h.hash=l.length?l.reduce(function(p,g){return g.name||Qu(15),Hs(p,g.name)},5381).toString():"",h}var AM=new KS,kg=IM(),YS=G.createContext({shouldForwardProp:void 0,styleSheet:AM,stylis:kg});YS.Consumer;G.createContext(void 0);function V_(){return C.useContext(YS)}var XS=function(){function t(e,n){var r=this;this.inject=function(i,o){o===void 0&&(o=kg);var s=r.name+o.hash;i.hasNameForId(r.id,s)||i.insertRules(r.id,s,o(r.rules,s,"@keyframes"))},this.name=e,this.id="sc-keyframes-".concat(e),this.rules=n,Ny(this,function(){throw Qu(12,String(r.name))})}return t.prototype.getName=function(e){return e===void 0&&(e=kg),this.name+e.hash},t}(),PM=function(t){return t>="A"&&t<="Z"};function j_(t){for(var e="",n=0;n<t.length;n++){var r=t[n];if(n===1&&r==="-"&&t[0]==="-")return t;PM(r)?e+="-"+r.toLowerCase():e+=r}return e.startsWith("ms-")?"-"+e:e}var JS=function(t){return t==null||t===!1||t===""},ZS=function(t){var e,n,r=[];for(var i in t){var o=t[i];t.hasOwnProperty(i)&&!JS(o)&&(Array.isArray(o)&&o.isCss||va(o)?r.push("".concat(j_(i),":"),o,";"):wu(o)?r.push.apply(r,Go(Go(["".concat(i," {")],ZS(o),!1),["}"],!1)):r.push("".concat(j_(i),": ").concat((e=i,(n=o)==null||typeof n=="boolean"||n===""?"":typeof n!="number"||n===0||e in ZL||e.startsWith("--")?String(n).trim():"".concat(n,"px")),";")))}return r};function Vo(t,e,n,r){if(JS(t))return[];if(Dy(t))return[".".concat(t.styledComponentId)];if(va(t)){if(!va(o=t)||o.prototype&&o.prototype.isReactComponent||!e)return[t];var i=t(e);return Vo(i,e,n,r)}var o;return t instanceof XS?n?(t.inject(n,r),[t.getName(r)]):[t]:wu(t)?ZS(t):Array.isArray(t)?Array.prototype.concat.apply(wh,t.map(function(s){return Vo(s,e,n,r)})):[t.toString()]}function kM(t){for(var e=0;e<t.length;e+=1){var n=t[e];if(va(n)&&!Dy(n))return!1}return!0}var RM=BS("6.1.0"),OM=function(){function t(e,n,r){this.rules=e,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&kM(e),this.componentId=n,this.baseHash=Hs(RM,n),this.baseStyle=r,KS.registerId(n)}return t.prototype.generateAndInjectStyles=function(e,n,r){var i=this.baseStyle?this.baseStyle.generateAndInjectStyles(e,n,r):"";if(this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(this.componentId,this.staticRulesId))i=ko(i,this.staticRulesId);else{var o=Ag(Vo(this.rules,e,n,r)),s=Ig(Hs(this.baseHash,o)>>>0);if(!n.hasNameForId(this.componentId,s)){var a=r(o,".".concat(s),void 0,this.componentId);n.insertRules(this.componentId,s,a)}i=ko(i,s),this.staticRulesId=s}else{for(var l=Hs(this.baseHash,r.hash),u="",d=0;d<this.rules.length;d++){var h=this.rules[d];if(typeof h=="string")u+=h;else if(h){var p=Ag(Vo(h,e,n,r));l=Hs(l,p+d),u+=p}}if(u){var g=Ig(l>>>0);n.hasNameForId(this.componentId,g)||n.insertRules(this.componentId,g,r(u,".".concat(g),void 0,this.componentId)),i=ko(i,g)}}return i},t}(),eC=G.createContext(void 0);eC.Consumer;var Kp={};function DM(t,e,n){var r=Dy(t),i=t,o=!qp(t),s=e.attrs,a=s===void 0?wh:s,l=e.componentId,u=l===void 0?function(v,x){var A=typeof v!="string"?"sc":R_(v);Kp[A]=(Kp[A]||0)+1;var k="".concat(A,"-").concat(US("6.1.0"+A+Kp[A]));return x?"".concat(x,"-").concat(k):k}(e.displayName,e.parentComponentId):l,d=e.displayName;d===void 0&&function(v){return qp(v)?"styled.".concat(v):"Styled(".concat(oM(v),")")}(t);var h=e.displayName&&e.componentId?"".concat(R_(e.displayName),"-").concat(e.componentId):e.componentId||u,p=r&&i.attrs?i.attrs.concat(a).filter(Boolean):a,g=e.shouldForwardProp;if(r&&i.shouldForwardProp){var T=i.shouldForwardProp;if(e.shouldForwardProp){var b=e.shouldForwardProp;g=function(v,x){return T(v,x)&&b(v,x)}}else g=T}var S=new OM(n,h,r?i.componentStyle:void 0);function E(v,x){return function(A,k,P){var R=A.attrs,O=A.componentStyle,D=A.defaultProps,q=A.foldedComponentIds,B=A.styledComponentId,U=A.target,V=G.useContext(eC),z=V_(),Y=A.shouldForwardProp||z.shouldForwardProp,N=function(Oe,Te,L){for(var ye,Me=fn(fn({},Te),{className:void 0,theme:L}),Yt=0;Yt<Oe.length;Yt+=1){var an=va(ye=Oe[Yt])?ye(Me):ye;for(var Ce in an)Me[Ce]=Ce==="className"?ko(Me[Ce],an[Ce]):Ce==="style"?fn(fn({},Me[Ce]),an[Ce]):an[Ce]}return Te.className&&(Me.className=ko(Me.className,Te.className)),Me}(R,k,tM(k,V,D)||ga),M=N.as||U,W={};for(var $ in N)N[$]===void 0||$[0]==="$"||$==="as"||$==="theme"||($==="forwardedAs"?W.as=N.forwardedAs:Y&&!Y($,M)||(W[$]=N[$]));var ie=function(Oe,Te){var L=V_(),ye=Oe.generateAndInjectStyles(Te,L.styleSheet,L.stylis);return ye}(O,N),he=ko(q,B);return ie&&(he+=" "+ie),N.className&&(he+=" "+N.className),W[qp(M)&&!$S.has(M)?"class":"className"]=he,W.ref=P,C.createElement(M,W)}(m,v,x)}var m=G.forwardRef(E);return m.attrs=p,m.componentStyle=S,m.shouldForwardProp=g,m.foldedComponentIds=r?ko(i.foldedComponentIds,i.styledComponentId):"",m.styledComponentId=h,m.target=r?i.target:t,Object.defineProperty(m,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(v){this._foldedDefaultProps=r?function(x){for(var A=[],k=1;k<arguments.length;k++)A[k-1]=arguments[k];for(var P=0,R=A;P<R.length;P++)Pg(x,R[P],!0);return x}({},i.defaultProps,v):v}}),Ny(m,function(){return".".concat(m.styledComponentId)}),o&&qS(m,t,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),m}function F_(t,e){for(var n=[t[0]],r=0,i=e.length;r<i;r+=1)n.push(e[r],t[r+1]);return n}var $_=function(t){return Object.assign(t,{isCss:!0})};function tC(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];if(va(t)||wu(t)){var r=t;return $_(Vo(F_(wh,Go([r],e,!0))))}var i=t;return e.length===0&&i.length===1&&typeof i[0]=="string"?Vo(i):$_(Vo(F_(i,e)))}function Rg(t,e,n){if(n===void 0&&(n=ga),!e)throw Qu(1,e);var r=function(i){for(var o=[],s=1;s<arguments.length;s++)o[s-1]=arguments[s];return t(e,n,tC.apply(void 0,Go([i],o,!1)))};return r.attrs=function(i){return Rg(t,e,fn(fn({},n),{attrs:Array.prototype.concat(n.attrs,i).filter(Boolean)}))},r.withConfig=function(i){return Rg(t,e,fn(fn({},n),i))},r}var nC=function(t){return Rg(DM,t)},j=nC;$S.forEach(function(t){j[t]=nC(t)});function NM(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];var r=Ag(tC.apply(void 0,Go([t],e,!1))),i=US(r);return new XS(i,r)}const LM=j.div`
  width: 100%;
  background-color: var(--color-lightGreen);
  min-height: 100px;
  height: 100px;
  box-shadow: 0px 4px 4px 0px rgba(100, 100, 100, 0.5);
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  z-index: 100;
  top: 0;
  left: 0;

  a {
    color: var(--colors-blue);
    text-decoration: none;
  }
`,MM=j.div`
  padding: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 600px) {
    padding: 0;
    
  }
`,VM=j.img`
  width: 80px;
  height: auto;
  margin-left: 2rem;
`,jM=j.div`
  margin-left: 1rem;
`,B_=j.p`
  font-size: 1rem;
  color: var(--colors-blue);
  font-weight: bold;
  line-height: 1;

  @media (max-width: 600px) {
    font-size: 0.8rem;
  }
`,FM=j.div`
  display: flex;
  margin-right: 32px;

  @media (max-width: 600px) {
    display: none;
  }
`,$M=j.div`
  display: flex;
  gap: 16px;
  margin-right: 32px;
  cursor: pointer;

  &:hover {
    color: white;
  }
`,BM=j.div`
  display: flex;
  gap: 16px;
  margin-right: 32px;
  cursor: pointer;

  &:hover {
    color: white;
  }
`,UM=j.div`
  display: none;

  @media (max-width: 600px) {
    display: flex;
    height: 30px;
    width: 30px;
    gap: 16px;
    margin-right: 32px;
    cursor: pointer;
  }
  &:hover {
    img {
      filter: invert(1) sepia(0) hue-rotate(20deg) saturate(1000%);
    }
  }
`,zM=j.div`
  
  display: flex;
  height: 30px;
  width: 40%;
  gap: 16px;
  margin-right: 32px;
  cursor: pointer;
  
  &:hover {
    img {
      filter: invert(1) sepia(0) hue-rotate(20deg) saturate(1000%);
    }
  }
`,HM=j.div`
  margin-right: 32px;
  padding-top: 2rem;
  display: flex;
  flex-direction: column;
  width: 100px;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`,WM=j.div`
  width: 70px;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #006400;
  font-size: 28px;
  border-radius: 50%;
  color: white;
  align-self: center;
`,qM=j.nav`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: left;
  background-color: rgba(0,0,0,0.7);
  position: fixed;
  top: 100px;
  right: ${t=>t.open?"0":"-100%"};
  width: 40%;
  height: auto;
  transition: right 0.3s linear;

  @media only screen and (min-width: 624px) {
    flex-direction: row;
    position: initial;
    height: auto;
    justify-content: center;
    background: white;
  }

  a {
    padding: 0.5rem 0.8rem;
    color: white;
    font-family: Roboto;
    font-size: 15px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    letter-spacing: -0.4px;
    text-align: left;    
    }
`;function GM({open:t}){return C.useState(!1),_.jsxs(qM,{open:t,children:[_.jsx(Ht,{to:"/login",children:"Iniciar sesión"}),_.jsx(Ht,{to:"/register",children:"Crear Cuenta"})]})}const KM=j.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: left;
  background-color: rgba(0,0,0,0.7);
  position: fixed;
  top: 100px;
  right: ${t=>t.open?"0":"-100%"};
  width: 40%;
  height: auto;
  transition: right 0.3s linear;

  a {
    padding: 0.5rem 0.8rem;
    color: white;
    font-family: Roboto;
    font-size: 15px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    letter-spacing: -0.4px;
    text-align: left;    
    }
`;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rC=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},QM=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const o=t[n++];e[r++]=String.fromCharCode((i&31)<<6|o&63)}else if(i>239&&i<365){const o=t[n++],s=t[n++],a=t[n++],l=((i&7)<<18|(o&63)<<12|(s&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const o=t[n++],s=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(o&63)<<6|s&63)}}return e.join("")},iC={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const o=t[i],s=i+1<t.length,a=s?t[i+1]:0,l=i+2<t.length,u=l?t[i+2]:0,d=o>>2,h=(o&3)<<4|a>>4;let p=(a&15)<<2|u>>6,g=u&63;l||(g=64,s||(p=64)),r.push(n[d],n[h],n[p],n[g])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(rC(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):QM(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const o=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const u=i<t.length?n[t.charAt(i)]:64;++i;const h=i<t.length?n[t.charAt(i)]:64;if(++i,o==null||a==null||u==null||h==null)throw new YM;const p=o<<2|a>>4;if(r.push(p),u!==64){const g=a<<4&240|u>>2;if(r.push(g),h!==64){const T=u<<6&192|h;r.push(T)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class YM extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const XM=function(t){const e=rC(t);return iC.encodeByteArray(e,!0)},pf=function(t){return XM(t).replace(/\./g,"")},oC=function(t){try{return iC.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function JM(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ZM=()=>JM().__FIREBASE_DEFAULTS__,e4=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},t4=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&oC(t[1]);return e&&JSON.parse(e)},_h=()=>{try{return ZM()||e4()||t4()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},sC=t=>{var e,n;return(n=(e=_h())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},aC=t=>{const e=sC(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},lC=()=>{var t;return(t=_h())===null||t===void 0?void 0:t.config},uC=t=>{var e;return(e=_h())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class n4{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cC(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,o=t.sub||t.user_id;if(!o)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const s=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:o,user_id:o,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[pf(JSON.stringify(n)),pf(JSON.stringify(s)),a].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function r4(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Kt())}function i4(){var t;const e=(t=_h())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function o4(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function s4(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function a4(){const t=Kt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function l4(){try{return typeof indexedDB=="object"}catch{return!1}}function u4(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var o;e(((o=i.error)===null||o===void 0?void 0:o.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const c4="FirebaseError";class Nr extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=c4,Object.setPrototypeOf(this,Nr.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Yu.prototype.create)}}class Yu{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,o=this.errors[e],s=o?d4(o,r):"Error",a=`${this.serviceName}: ${s} (${i}).`;return new Nr(i,a,r)}}function d4(t,e){return t.replace(f4,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const f4=/\{\$([^}]+)}/g;function h4(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function mf(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const o=t[i],s=e[i];if(U_(o)&&U_(s)){if(!mf(o,s))return!1}else if(o!==s)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function U_(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xu(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function xl(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,o]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(o)}}),e}function Tl(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function p4(t,e){const n=new m4(t,e);return n.subscribe.bind(n)}class m4{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");g4(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=Qp),i.error===void 0&&(i.error=Qp),i.complete===void 0&&(i.complete=Qp);const o=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),o}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function g4(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Qp(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vt(t){return t&&t._delegate?t._delegate:t}class Ji{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const To="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class v4{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new n4;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(o){if(i)return null;throw o}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(w4(e))try{this.getOrInitializeService({instanceIdentifier:To})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const o=this.getOrInitializeService({instanceIdentifier:i});r.resolve(o)}catch{}}}}clearInstance(e=To){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=To){return this.instances.has(e)}getOptions(e=To){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[o,s]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(o);r===a&&s.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),o=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;o.add(e),this.onInitCallbacks.set(i,o);const s=this.instances.get(i);return s&&e(s,i),()=>{o.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:y4(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=To){return this.component?this.component.multipleInstances?e:To:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function y4(t){return t===To?void 0:t}function w4(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _4{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new v4(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var we;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(we||(we={}));const E4={debug:we.DEBUG,verbose:we.VERBOSE,info:we.INFO,warn:we.WARN,error:we.ERROR,silent:we.SILENT},x4=we.INFO,T4={[we.DEBUG]:"log",[we.VERBOSE]:"log",[we.INFO]:"info",[we.WARN]:"warn",[we.ERROR]:"error"},b4=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=T4[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Ly{constructor(e){this.name=e,this._logLevel=x4,this._logHandler=b4,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in we))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?E4[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,we.DEBUG,...e),this._logHandler(this,we.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,we.VERBOSE,...e),this._logHandler(this,we.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,we.INFO,...e),this._logHandler(this,we.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,we.WARN,...e),this._logHandler(this,we.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,we.ERROR,...e),this._logHandler(this,we.ERROR,...e)}}const S4=(t,e)=>e.some(n=>t instanceof n);let z_,H_;function C4(){return z_||(z_=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function I4(){return H_||(H_=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const dC=new WeakMap,Og=new WeakMap,fC=new WeakMap,Yp=new WeakMap,My=new WeakMap;function A4(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",o),t.removeEventListener("error",s)},o=()=>{n(qi(t.result)),i()},s=()=>{r(t.error),i()};t.addEventListener("success",o),t.addEventListener("error",s)});return e.then(n=>{n instanceof IDBCursor&&dC.set(n,t)}).catch(()=>{}),My.set(e,t),e}function P4(t){if(Og.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",o),t.removeEventListener("error",s),t.removeEventListener("abort",s)},o=()=>{n(),i()},s=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",o),t.addEventListener("error",s),t.addEventListener("abort",s)});Og.set(t,e)}let Dg={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Og.get(t);if(e==="objectStoreNames")return t.objectStoreNames||fC.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return qi(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function k4(t){Dg=t(Dg)}function R4(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Xp(this),e,...n);return fC.set(r,e.sort?e.sort():[e]),qi(r)}:I4().includes(t)?function(...e){return t.apply(Xp(this),e),qi(dC.get(this))}:function(...e){return qi(t.apply(Xp(this),e))}}function O4(t){return typeof t=="function"?R4(t):(t instanceof IDBTransaction&&P4(t),S4(t,C4())?new Proxy(t,Dg):t)}function qi(t){if(t instanceof IDBRequest)return A4(t);if(Yp.has(t))return Yp.get(t);const e=O4(t);return e!==t&&(Yp.set(t,e),My.set(e,t)),e}const Xp=t=>My.get(t);function D4(t,e,{blocked:n,upgrade:r,blocking:i,terminated:o}={}){const s=indexedDB.open(t,e),a=qi(s);return r&&s.addEventListener("upgradeneeded",l=>{r(qi(s.result),l.oldVersion,l.newVersion,qi(s.transaction),l)}),n&&s.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{o&&l.addEventListener("close",()=>o()),i&&l.addEventListener("versionchange",u=>i(u.oldVersion,u.newVersion,u))}).catch(()=>{}),a}const N4=["get","getKey","getAll","getAllKeys","count"],L4=["put","add","delete","clear"],Jp=new Map;function W_(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Jp.get(e))return Jp.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=L4.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||N4.includes(n)))return;const o=async function(s,...a){const l=this.transaction(s,i?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),i&&l.done]))[0]};return Jp.set(e,o),o}k4(t=>({...t,get:(e,n,r)=>W_(e,n)||t.get(e,n,r),has:(e,n)=>!!W_(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M4{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(V4(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function V4(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Ng="@firebase/app",q_="0.9.23";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ko=new Ly("@firebase/app"),j4="@firebase/app-compat",F4="@firebase/analytics-compat",$4="@firebase/analytics",B4="@firebase/app-check-compat",U4="@firebase/app-check",z4="@firebase/auth",H4="@firebase/auth-compat",W4="@firebase/database",q4="@firebase/database-compat",G4="@firebase/functions",K4="@firebase/functions-compat",Q4="@firebase/installations",Y4="@firebase/installations-compat",X4="@firebase/messaging",J4="@firebase/messaging-compat",Z4="@firebase/performance",e5="@firebase/performance-compat",t5="@firebase/remote-config",n5="@firebase/remote-config-compat",r5="@firebase/storage",i5="@firebase/storage-compat",o5="@firebase/firestore",s5="@firebase/firestore-compat",a5="firebase",l5="10.6.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lg="[DEFAULT]",u5={[Ng]:"fire-core",[j4]:"fire-core-compat",[$4]:"fire-analytics",[F4]:"fire-analytics-compat",[U4]:"fire-app-check",[B4]:"fire-app-check-compat",[z4]:"fire-auth",[H4]:"fire-auth-compat",[W4]:"fire-rtdb",[q4]:"fire-rtdb-compat",[G4]:"fire-fn",[K4]:"fire-fn-compat",[Q4]:"fire-iid",[Y4]:"fire-iid-compat",[X4]:"fire-fcm",[J4]:"fire-fcm-compat",[Z4]:"fire-perf",[e5]:"fire-perf-compat",[t5]:"fire-rc",[n5]:"fire-rc-compat",[r5]:"fire-gcs",[i5]:"fire-gcs-compat",[o5]:"fire-fst",[s5]:"fire-fst-compat","fire-js":"fire-js",[a5]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gf=new Map,Mg=new Map;function c5(t,e){try{t.container.addComponent(e)}catch(n){Ko.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Qo(t){const e=t.name;if(Mg.has(e))return Ko.debug(`There were multiple attempts to register component ${e}.`),!1;Mg.set(e,t);for(const n of gf.values())c5(n,t);return!0}function Eh(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const d5={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Gi=new Yu("app","Firebase",d5);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class f5{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Ji("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Gi.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ls=l5;function hC(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Lg,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw Gi.create("bad-app-name",{appName:String(i)});if(n||(n=lC()),!n)throw Gi.create("no-options");const o=gf.get(i);if(o){if(mf(n,o.options)&&mf(r,o.config))return o;throw Gi.create("duplicate-app",{appName:i})}const s=new _4(i);for(const l of Mg.values())s.addComponent(l);const a=new f5(n,r,s);return gf.set(i,a),a}function Vy(t=Lg){const e=gf.get(t);if(!e&&t===Lg&&lC())return hC();if(!e)throw Gi.create("no-app",{appName:t});return e}function Ir(t,e,n){var r;let i=(r=u5[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const o=i.match(/\s|\//),s=e.match(/\s|\//);if(o||s){const a=[`Unable to register library "${i}" with version "${e}":`];o&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),o&&s&&a.push("and"),s&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Ko.warn(a.join(" "));return}Qo(new Ji(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const h5="firebase-heartbeat-database",p5=1,_u="firebase-heartbeat-store";let Zp=null;function pC(){return Zp||(Zp=D4(h5,p5,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(_u)}}}).catch(t=>{throw Gi.create("idb-open",{originalErrorMessage:t.message})})),Zp}async function m5(t){try{return await(await pC()).transaction(_u).objectStore(_u).get(mC(t))}catch(e){if(e instanceof Nr)Ko.warn(e.message);else{const n=Gi.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Ko.warn(n.message)}}}async function G_(t,e){try{const r=(await pC()).transaction(_u,"readwrite");await r.objectStore(_u).put(e,mC(t)),await r.done}catch(n){if(n instanceof Nr)Ko.warn(n.message);else{const r=Gi.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Ko.warn(r.message)}}}function mC(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const g5=1024,v5=30*24*60*60*1e3;class y5{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new _5(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e;const r=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=K_();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i)))return this._heartbeatsCache.heartbeats.push({date:i,agent:r}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const s=new Date(o.date).valueOf();return Date.now()-s<=v5}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var e;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=K_(),{heartbeatsToSend:r,unsentEntries:i}=w5(this._heartbeatsCache.heartbeats),o=pf(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),o}}function K_(){return new Date().toISOString().substring(0,10)}function w5(t,e=g5){const n=[];let r=t.slice();for(const i of t){const o=n.find(s=>s.agent===i.agent);if(o){if(o.dates.push(i.date),Q_(n)>e){o.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Q_(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class _5{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return l4()?u4().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await m5(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return G_(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return G_(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Q_(t){return pf(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function E5(t){Qo(new Ji("platform-logger",e=>new M4(e),"PRIVATE")),Qo(new Ji("heartbeat",e=>new y5(e),"PRIVATE")),Ir(Ng,q_,t),Ir(Ng,q_,"esm2017"),Ir("fire-js","")}E5("");var x5="firebase",T5="10.6.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ir(x5,T5,"app");function gC(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const b5=gC,vC=new Yu("auth","Firebase",gC());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vf=new Ly("@firebase/auth");function S5(t,...e){vf.logLevel<=we.WARN&&vf.warn(`Auth (${ls}): ${t}`,...e)}function Id(t,...e){vf.logLevel<=we.ERROR&&vf.error(`Auth (${ls}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function or(t,...e){throw jy(t,...e)}function Ar(t,...e){return jy(t,...e)}function C5(t,e,n){const r=Object.assign(Object.assign({},b5()),{[e]:n});return new Yu("auth","Firebase",r).create(e,{appName:t.name})}function jy(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return vC.create(t,...e)}function se(t,e,...n){if(!t)throw jy(e,...n)}function Qr(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Id(e),new Error(e)}function ii(t,e){t||Qr(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vg(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function I5(){return Y_()==="http:"||Y_()==="https:"}function Y_(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function A5(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(I5()||o4()||"connection"in navigator)?navigator.onLine:!0}function P5(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ju{constructor(e,n){this.shortDelay=e,this.longDelay=n,ii(n>e,"Short delay should be less than long delay!"),this.isMobile=r4()||s4()}get(){return A5()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fy(t,e){ii(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yC{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Qr("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Qr("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Qr("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const k5={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const R5=new Ju(3e4,6e4);function oo(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function so(t,e,n,r,i={}){return wC(t,i,async()=>{let o={},s={};r&&(e==="GET"?s=r:o={body:JSON.stringify(r)});const a=Xu(Object.assign({key:t.config.apiKey},s)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),yC.fetch()(_C(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},o))})}async function wC(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},k5),e);try{const i=new D5(t),o=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const s=await o.json();if("needConfirmation"in s)throw Kc(t,"account-exists-with-different-credential",s);if(o.ok&&!("errorMessage"in s))return s;{const a=o.ok?s.errorMessage:s.error.message,[l,u]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Kc(t,"credential-already-in-use",s);if(l==="EMAIL_EXISTS")throw Kc(t,"email-already-in-use",s);if(l==="USER_DISABLED")throw Kc(t,"user-disabled",s);const d=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw C5(t,d,u);or(t,d)}}catch(i){if(i instanceof Nr)throw i;or(t,"network-request-failed",{message:String(i)})}}async function Zu(t,e,n,r,i={}){const o=await so(t,e,n,r,i);return"mfaPendingCredential"in o&&or(t,"multi-factor-auth-required",{_serverResponse:o}),o}function _C(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?Fy(t.config,i):`${t.config.apiScheme}://${i}`}function O5(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class D5{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Ar(this.auth,"network-request-failed")),R5.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Kc(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=Ar(t,e,r);return i.customData._tokenResponse=n,i}function X_(t){return t!==void 0&&t.enterprise!==void 0}class N5{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return O5(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function L5(t,e){return so(t,"GET","/v2/recaptchaConfig",oo(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function M5(t,e){return so(t,"POST","/v1/accounts:delete",e)}async function V5(t,e){return so(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bl(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function j5(t,e=!1){const n=vt(t),r=await n.getIdToken(e),i=$y(r);se(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const o=typeof i.firebase=="object"?i.firebase:void 0,s=o==null?void 0:o.sign_in_provider;return{claims:i,token:r,authTime:Bl(em(i.auth_time)),issuedAtTime:Bl(em(i.iat)),expirationTime:Bl(em(i.exp)),signInProvider:s||null,signInSecondFactor:(o==null?void 0:o.sign_in_second_factor)||null}}function em(t){return Number(t)*1e3}function $y(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Id("JWT malformed, contained fewer than 3 sections"),null;try{const i=oC(n);return i?JSON.parse(i):(Id("Failed to decode base64 JWT payload"),null)}catch(i){return Id("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function F5(t){const e=$y(t);return se(e,"internal-error"),se(typeof e.exp<"u","internal-error"),se(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Eu(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Nr&&$5(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function $5({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B5{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EC{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Bl(this.lastLoginAt),this.creationTime=Bl(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function yf(t){var e;const n=t.auth,r=await t.getIdToken(),i=await Eu(t,V5(n,{idToken:r}));se(i==null?void 0:i.users.length,n,"internal-error");const o=i.users[0];t._notifyReloadListener(o);const s=!((e=o.providerUserInfo)===null||e===void 0)&&e.length?H5(o.providerUserInfo):[],a=z5(t.providerData,s),l=t.isAnonymous,u=!(t.email&&o.passwordHash)&&!(a!=null&&a.length),d=l?u:!1,h={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:a,metadata:new EC(o.createdAt,o.lastLoginAt),isAnonymous:d};Object.assign(t,h)}async function U5(t){const e=vt(t);await yf(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function z5(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function H5(t){return t.map(e=>{var{providerId:n}=e,r=Py(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function W5(t,e){const n=await wC(t,{},async()=>{const r=Xu({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:o}=t.config,s=_C(t,i,"/v1/token",`key=${o}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",yC.fetch()(s,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function q5(t,e){return so(t,"POST","/v2/accounts:revokeToken",oo(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xu{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){se(e.idToken,"internal-error"),se(typeof e.idToken<"u","internal-error"),se(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):F5(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return se(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:o}=await W5(e,n);this.updateTokensAndExpiration(r,i,Number(o))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:o}=n,s=new xu;return r&&(se(typeof r=="string","internal-error",{appName:e}),s.refreshToken=r),i&&(se(typeof i=="string","internal-error",{appName:e}),s.accessToken=i),o&&(se(typeof o=="number","internal-error",{appName:e}),s.expirationTime=o),s}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new xu,this.toJSON())}_performRefresh(){return Qr("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yi(t,e){se(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class jo{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,o=Py(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new B5(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=o.displayName||null,this.email=o.email||null,this.emailVerified=o.emailVerified||!1,this.phoneNumber=o.phoneNumber||null,this.photoURL=o.photoURL||null,this.isAnonymous=o.isAnonymous||!1,this.tenantId=o.tenantId||null,this.providerData=o.providerData?[...o.providerData]:[],this.metadata=new EC(o.createdAt||void 0,o.lastLoginAt||void 0)}async getIdToken(e){const n=await Eu(this,this.stsTokenManager.getToken(this.auth,e));return se(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return j5(this,e)}reload(){return U5(this)}_assign(e){this!==e&&(se(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new jo(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){se(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await yf(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Eu(this,M5(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,o,s,a,l,u,d;const h=(r=n.displayName)!==null&&r!==void 0?r:void 0,p=(i=n.email)!==null&&i!==void 0?i:void 0,g=(o=n.phoneNumber)!==null&&o!==void 0?o:void 0,T=(s=n.photoURL)!==null&&s!==void 0?s:void 0,b=(a=n.tenantId)!==null&&a!==void 0?a:void 0,S=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,E=(u=n.createdAt)!==null&&u!==void 0?u:void 0,m=(d=n.lastLoginAt)!==null&&d!==void 0?d:void 0,{uid:v,emailVerified:x,isAnonymous:A,providerData:k,stsTokenManager:P}=n;se(v&&P,e,"internal-error");const R=xu.fromJSON(this.name,P);se(typeof v=="string",e,"internal-error"),yi(h,e.name),yi(p,e.name),se(typeof x=="boolean",e,"internal-error"),se(typeof A=="boolean",e,"internal-error"),yi(g,e.name),yi(T,e.name),yi(b,e.name),yi(S,e.name),yi(E,e.name),yi(m,e.name);const O=new jo({uid:v,auth:e,email:p,emailVerified:x,displayName:h,isAnonymous:A,photoURL:T,phoneNumber:g,tenantId:b,stsTokenManager:R,createdAt:E,lastLoginAt:m});return k&&Array.isArray(k)&&(O.providerData=k.map(D=>Object.assign({},D))),S&&(O._redirectEventId=S),O}static async _fromIdTokenResponse(e,n,r=!1){const i=new xu;i.updateFromServerResponse(n);const o=new jo({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await yf(o),o}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const J_=new Map;function Yr(t){ii(t instanceof Function,"Expected a class definition");let e=J_.get(t);return e?(ii(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,J_.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xC{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}xC.type="NONE";const Z_=xC;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ad(t,e,n){return`firebase:${t}:${e}:${n}`}class ea{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:o}=this.auth;this.fullUserKey=Ad(this.userKey,i.apiKey,o),this.fullPersistenceKey=Ad("persistence",i.apiKey,o),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?jo._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new ea(Yr(Z_),e,r);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let o=i[0]||Yr(Z_);const s=Ad(r,e.config.apiKey,e.name);let a=null;for(const u of n)try{const d=await u._get(s);if(d){const h=jo._fromJSON(e,d);u!==o&&(a=h),o=u;break}}catch{}const l=i.filter(u=>u._shouldAllowMigration);return!o._shouldAllowMigration||!l.length?new ea(o,e,r):(o=l[0],a&&await o._set(s,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==o)try{await u._remove(s)}catch{}})),new ea(o,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eE(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(SC(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(TC(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(IC(e))return"Blackberry";if(AC(e))return"Webos";if(By(e))return"Safari";if((e.includes("chrome/")||bC(e))&&!e.includes("edge/"))return"Chrome";if(CC(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function TC(t=Kt()){return/firefox\//i.test(t)}function By(t=Kt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function bC(t=Kt()){return/crios\//i.test(t)}function SC(t=Kt()){return/iemobile/i.test(t)}function CC(t=Kt()){return/android/i.test(t)}function IC(t=Kt()){return/blackberry/i.test(t)}function AC(t=Kt()){return/webos/i.test(t)}function xh(t=Kt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function G5(t=Kt()){var e;return xh(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function K5(){return a4()&&document.documentMode===10}function PC(t=Kt()){return xh(t)||CC(t)||AC(t)||IC(t)||/windows phone/i.test(t)||SC(t)}function Q5(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kC(t,e=[]){let n;switch(t){case"Browser":n=eE(Kt());break;case"Worker":n=`${eE(Kt())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${ls}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y5{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=o=>new Promise((s,a)=>{try{const l=e(o);s(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function X5(t,e={}){return so(t,"GET","/v2/passwordPolicy",oo(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const J5=6;class Z5{constructor(e){var n,r,i,o;const s=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=s.minPasswordLength)!==null&&n!==void 0?n:J5,s.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=s.maxPasswordLength),s.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=s.containsLowercaseCharacter),s.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=s.containsUppercaseCharacter),s.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=s.containsNumericCharacter),s.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=s.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(o=e.forceUpgradeOnSignin)!==null&&o!==void 0?o:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,i,o,s,a;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,l),this.validatePasswordCharacterOptions(e,l),l.isValid&&(l.isValid=(n=l.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),l.isValid&&(l.isValid=(r=l.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(i=l.containsLowercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(o=l.containsUppercaseLetter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(s=l.containsNumericCharacter)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(a=l.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),l}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,o){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=o))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eV{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new tE(this),this.idTokenSubscription=new tE(this),this.beforeStateQueue=new Y5(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=vC,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Yr(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await ea.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let i=r,o=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const s=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!s||s===a)&&(l!=null&&l.user)&&(i=l.user,o=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(o)try{await this.beforeStateQueue.runMiddleware(i)}catch(s){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(s))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return se(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await yf(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=P5()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?vt(e):null;return n&&se(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&se(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Yr(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await X5(this),n=new Z5(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Yu("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await q5(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Yr(e)||this._popupRedirectResolver;se(n,this,"argument-error"),this.redirectPersistenceManager=await ea.create(this,[Yr(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const o=typeof n=="function"?n:n.next.bind(n);let s=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(se(a,this,"internal-error"),a.then(()=>{s||o(this.currentUser)}),typeof n=="function"){const l=e.addObserver(n,r,i);return()=>{s=!0,l()}}else{const l=e.addObserver(n);return()=>{s=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return se(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=kC(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&S5(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function us(t){return vt(t)}class tE{constructor(e){this.auth=e,this.observer=null,this.addObserver=p4(n=>this.observer=n)}get next(){return se(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tV(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function RC(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const o=Ar("internal-error");o.customData=i,n(o)},r.type="text/javascript",r.charset="UTF-8",tV().appendChild(r)})}function nV(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const rV="https://www.google.com/recaptcha/enterprise.js?render=",iV="recaptcha-enterprise",oV="NO_RECAPTCHA";class sV{constructor(e){this.type=iV,this.auth=us(e)}async verify(e="verify",n=!1){async function r(o){if(!n){if(o.tenantId==null&&o._agentRecaptchaConfig!=null)return o._agentRecaptchaConfig.siteKey;if(o.tenantId!=null&&o._tenantRecaptchaConfigs[o.tenantId]!==void 0)return o._tenantRecaptchaConfigs[o.tenantId].siteKey}return new Promise(async(s,a)=>{L5(o,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const u=new N5(l);return o.tenantId==null?o._agentRecaptchaConfig=u:o._tenantRecaptchaConfigs[o.tenantId]=u,s(u.siteKey)}}).catch(l=>{a(l)})})}function i(o,s,a){const l=window.grecaptcha;X_(l)?l.enterprise.ready(()=>{l.enterprise.execute(o,{action:e}).then(u=>{s(u)}).catch(()=>{s(oV)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((o,s)=>{r(this.auth).then(a=>{if(!n&&X_(window.grecaptcha))i(a,o,s);else{if(typeof window>"u"){s(new Error("RecaptchaVerifier is only supported in browser"));return}RC(rV+a).then(()=>{i(a,o,s)}).catch(l=>{s(l)})}}).catch(a=>{s(a)})})}}async function nE(t,e,n,r=!1){const i=new sV(t);let o;try{o=await i.verify(n)}catch{o=await i.verify(n,!0)}const s=Object.assign({},e);return r?Object.assign(s,{captchaResp:o}):Object.assign(s,{captchaResponse:o}),Object.assign(s,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(s,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),s}async function jg(t,e,n,r){var i;if(!((i=t._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const o=await nE(t,e,n,n==="getOobCode");return r(t,o)}else return r(t,e).catch(async o=>{if(o.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const s=await nE(t,e,n,n==="getOobCode");return r(t,s)}else return Promise.reject(o)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function aV(t,e){const n=Eh(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),o=n.getOptions();if(mf(o,e??{}))return i;or(i,"already-initialized")}return n.initialize({options:e})}function lV(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Yr);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function uV(t,e,n){const r=us(t);se(r._canInitEmulator,r,"emulator-config-failed"),se(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),o=OC(e),{host:s,port:a}=cV(e),l=a===null?"":`:${a}`;r.config.emulator={url:`${o}//${s}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:s,port:a,protocol:o.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||dV()}function OC(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function cV(t){const e=OC(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const o=i[1];return{host:o,port:rE(r.substr(o.length+1))}}else{const[o,s]=r.split(":");return{host:o,port:rE(s)}}}function rE(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function dV(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uy{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Qr("not implemented")}_getIdTokenResponse(e){return Qr("not implemented")}_linkToIdToken(e,n){return Qr("not implemented")}_getReauthenticationResolver(e){return Qr("not implemented")}}async function fV(t,e){return so(t,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function hV(t,e){return Zu(t,"POST","/v1/accounts:signInWithPassword",oo(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function pV(t,e){return Zu(t,"POST","/v1/accounts:signInWithEmailLink",oo(t,e))}async function mV(t,e){return Zu(t,"POST","/v1/accounts:signInWithEmailLink",oo(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tu extends Uy{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new Tu(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new Tu(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return jg(e,n,"signInWithPassword",hV);case"emailLink":return pV(e,{email:this._email,oobCode:this._password});default:or(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return jg(e,r,"signUpPassword",fV);case"emailLink":return mV(e,{idToken:n,email:this._email,oobCode:this._password});default:or(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ta(t,e){return Zu(t,"POST","/v1/accounts:signInWithIdp",oo(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gV="http://localhost";class Yo extends Uy{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Yo(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):or("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,o=Py(n,["providerId","signInMethod"]);if(!r||!i)return null;const s=new Yo(r,i);return s.idToken=o.idToken||void 0,s.accessToken=o.accessToken||void 0,s.secret=o.secret,s.nonce=o.nonce,s.pendingToken=o.pendingToken||null,s}_getIdTokenResponse(e){const n=this.buildRequest();return ta(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,ta(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,ta(e,n)}buildRequest(){const e={requestUri:gV,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Xu(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vV(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function yV(t){const e=xl(Tl(t)).link,n=e?xl(Tl(e)).deep_link_id:null,r=xl(Tl(t)).deep_link_id;return(r?xl(Tl(r)).link:null)||r||n||e||t}class zy{constructor(e){var n,r,i,o,s,a;const l=xl(Tl(e)),u=(n=l.apiKey)!==null&&n!==void 0?n:null,d=(r=l.oobCode)!==null&&r!==void 0?r:null,h=vV((i=l.mode)!==null&&i!==void 0?i:null);se(u&&d&&h,"argument-error"),this.apiKey=u,this.operation=h,this.code=d,this.continueUrl=(o=l.continueUrl)!==null&&o!==void 0?o:null,this.languageCode=(s=l.languageCode)!==null&&s!==void 0?s:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=yV(e);try{return new zy(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Va{constructor(){this.providerId=Va.PROVIDER_ID}static credential(e,n){return Tu._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=zy.parseLink(n);return se(r,"argument-error"),Tu._fromEmailAndCode(e,r.code,r.tenantId)}}Va.PROVIDER_ID="password";Va.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Va.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DC{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ec extends DC{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bi extends ec{constructor(){super("facebook.com")}static credential(e){return Yo._fromParams({providerId:bi.PROVIDER_ID,signInMethod:bi.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return bi.credentialFromTaggedObject(e)}static credentialFromError(e){return bi.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return bi.credential(e.oauthAccessToken)}catch{return null}}}bi.FACEBOOK_SIGN_IN_METHOD="facebook.com";bi.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Si extends ec{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Yo._fromParams({providerId:Si.PROVIDER_ID,signInMethod:Si.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Si.credentialFromTaggedObject(e)}static credentialFromError(e){return Si.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Si.credential(n,r)}catch{return null}}}Si.GOOGLE_SIGN_IN_METHOD="google.com";Si.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ci extends ec{constructor(){super("github.com")}static credential(e){return Yo._fromParams({providerId:Ci.PROVIDER_ID,signInMethod:Ci.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ci.credentialFromTaggedObject(e)}static credentialFromError(e){return Ci.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Ci.credential(e.oauthAccessToken)}catch{return null}}}Ci.GITHUB_SIGN_IN_METHOD="github.com";Ci.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ii extends ec{constructor(){super("twitter.com")}static credential(e,n){return Yo._fromParams({providerId:Ii.PROVIDER_ID,signInMethod:Ii.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Ii.credentialFromTaggedObject(e)}static credentialFromError(e){return Ii.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Ii.credential(n,r)}catch{return null}}}Ii.TWITTER_SIGN_IN_METHOD="twitter.com";Ii.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function wV(t,e){return Zu(t,"POST","/v1/accounts:signUp",oo(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xo{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const o=await jo._fromIdTokenResponse(e,r,i),s=iE(r);return new Xo({user:o,providerId:s,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=iE(r);return new Xo({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function iE(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wf extends Nr{constructor(e,n,r,i){var o;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,wf.prototype),this.customData={appName:e.name,tenantId:(o=e.tenantId)!==null&&o!==void 0?o:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new wf(e,n,r,i)}}function NC(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(o=>{throw o.code==="auth/multi-factor-auth-required"?wf._fromErrorAndOperation(t,o,e,r):o})}async function _V(t,e,n=!1){const r=await Eu(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Xo._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function EV(t,e,n=!1){const{auth:r}=t,i="reauthenticate";try{const o=await Eu(t,NC(r,i,e,t),n);se(o.idToken,r,"internal-error");const s=$y(o.idToken);se(s,r,"internal-error");const{sub:a}=s;return se(t.uid===a,r,"user-mismatch"),Xo._forOperation(t,i,o)}catch(o){throw(o==null?void 0:o.code)==="auth/user-not-found"&&or(r,"user-mismatch"),o}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function LC(t,e,n=!1){const r="signIn",i=await NC(t,r,e),o=await Xo._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(o.user),o}async function xV(t,e){return LC(us(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function MC(t){const e=us(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function TV(t,e,n){const r=us(t),s=await jg(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",wV).catch(l=>{throw l.code==="auth/password-does-not-meet-requirements"&&MC(t),l}),a=await Xo._fromIdTokenResponse(r,"signIn",s);return await r._updateCurrentUser(a.user),a}function bV(t,e,n){return xV(vt(t),Va.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&MC(t),r})}function SV(t,e,n,r){return vt(t).onIdTokenChanged(e,n,r)}function CV(t,e,n){return vt(t).beforeAuthStateChanged(e,n)}function IV(t){return vt(t).signOut()}const _f="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VC{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(_f,"1"),this.storage.removeItem(_f),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function AV(){const t=Kt();return By(t)||xh(t)}const PV=1e3,kV=10;class jC extends VC{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=AV()&&Q5(),this.fallbackToPolling=PC(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((s,a,l)=>{this.notifyListeners(s,l)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const s=this.storage.getItem(r);if(e.newValue!==s)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const i=()=>{const s=this.storage.getItem(r);!n&&this.localCache[r]===s||this.notifyListeners(r,s)},o=this.storage.getItem(r);K5()&&o!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,kV):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},PV)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}jC.type="LOCAL";const RV=jC;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FC extends VC{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}FC.type="SESSION";const $C=FC;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function OV(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Th{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new Th(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:o}=n.data,s=this.handlersMap[i];if(!(s!=null&&s.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(s).map(async u=>u(n.origin,o)),l=await OV(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Th.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hy(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DV{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let o,s;return new Promise((a,l)=>{const u=Hy("",20);i.port1.start();const d=setTimeout(()=>{l(new Error("unsupported_event"))},r);s={messageChannel:i,onMessage(h){const p=h;if(p.data.eventId===u)switch(p.data.status){case"ack":clearTimeout(d),o=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(o),a(p.data.response);break;default:clearTimeout(d),clearTimeout(o),l(new Error("invalid_response"));break}}},this.handlers.add(s),i.port1.addEventListener("message",s.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[i.port2])}).finally(()=>{s&&this.removeMessageHandler(s)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pr(){return window}function NV(t){Pr().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function BC(){return typeof Pr().WorkerGlobalScope<"u"&&typeof Pr().importScripts=="function"}async function LV(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function MV(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function VV(){return BC()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const UC="firebaseLocalStorageDb",jV=1,Ef="firebaseLocalStorage",zC="fbase_key";class tc{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function bh(t,e){return t.transaction([Ef],e?"readwrite":"readonly").objectStore(Ef)}function FV(){const t=indexedDB.deleteDatabase(UC);return new tc(t).toPromise()}function Fg(){const t=indexedDB.open(UC,jV);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Ef,{keyPath:zC})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Ef)?e(r):(r.close(),await FV(),e(await Fg()))})})}async function oE(t,e,n){const r=bh(t,!0).put({[zC]:e,value:n});return new tc(r).toPromise()}async function $V(t,e){const n=bh(t,!1).get(e),r=await new tc(n).toPromise();return r===void 0?null:r.value}function sE(t,e){const n=bh(t,!0).delete(e);return new tc(n).toPromise()}const BV=800,UV=3;class HC{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Fg(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>UV)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return BC()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Th._getInstance(VV()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await LV(),!this.activeServiceWorker)return;this.sender=new DV(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||MV()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Fg();return await oE(e,_f,"1"),await sE(e,_f),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>oE(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>$V(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>sE(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const o=bh(i,!1).getAll();return new tc(o).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:i,value:o}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(o)&&(this.notifyListeners(i,o),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),BV)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}HC.type="LOCAL";const zV=HC;new Ju(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function HV(t,e){return e?Yr(e):(se(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wy extends Uy{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return ta(e,this._buildIdpRequest())}_linkToIdToken(e,n){return ta(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return ta(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function WV(t){return LC(t.auth,new Wy(t),t.bypassAuthState)}function qV(t){const{auth:e,user:n}=t;return se(n,e,"internal-error"),EV(n,new Wy(t),t.bypassAuthState)}async function GV(t){const{auth:e,user:n}=t;return se(n,e,"internal-error"),_V(n,new Wy(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WC{constructor(e,n,r,i,o=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=o,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:o,error:s,type:a}=e;if(s){this.reject(s);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:o||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return WV;case"linkViaPopup":case"linkViaRedirect":return GV;case"reauthViaPopup":case"reauthViaRedirect":return qV;default:or(this.auth,"internal-error")}}resolve(e){ii(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){ii(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const KV=new Ju(2e3,1e4);class Ws extends WC{constructor(e,n,r,i,o){super(e,n,i,o),this.provider=r,this.authWindow=null,this.pollId=null,Ws.currentPopupAction&&Ws.currentPopupAction.cancel(),Ws.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return se(e,this.auth,"internal-error"),e}async onExecution(){ii(this.filter.length===1,"Popup operations only handle one event");const e=Hy();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Ar(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Ar(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Ws.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Ar(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,KV.get())};e()}}Ws.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const QV="pendingRedirect",Pd=new Map;class YV extends WC{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Pd.get(this.auth._key());if(!e){try{const r=await XV(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Pd.set(this.auth._key(),e)}return this.bypassAuthState||Pd.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function XV(t,e){const n=e3(e),r=ZV(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function JV(t,e){Pd.set(t._key(),e)}function ZV(t){return Yr(t._redirectPersistence)}function e3(t){return Ad(QV,t.config.apiKey,t.name)}async function t3(t,e,n=!1){const r=us(t),i=HV(r,e),s=await new YV(r,i,n).execute();return s&&!n&&(delete s.user._redirectEventId,await r._persistUserIfCurrent(s.user),await r._setRedirectUser(null,e)),s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const n3=10*60*1e3;class r3{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!i3(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!qC(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Ar(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=n3&&this.cachedEventUids.clear(),this.cachedEventUids.has(aE(e))}saveEventToCache(e){this.cachedEventUids.add(aE(e)),this.lastProcessedEventTime=Date.now()}}function aE(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function qC({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function i3(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return qC(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function o3(t,e={}){return so(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const s3=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,a3=/^https?/;async function l3(t){if(t.config.emulator)return;const{authorizedDomains:e}=await o3(t);for(const n of e)try{if(u3(n))return}catch{}or(t,"unauthorized-domain")}function u3(t){const e=Vg(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const s=new URL(t);return s.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&s.hostname===r}if(!a3.test(n))return!1;if(s3.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const c3=new Ju(3e4,6e4);function lE(){const t=Pr().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function d3(t){return new Promise((e,n)=>{var r,i,o;function s(){lE(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{lE(),n(Ar(t,"network-request-failed"))},timeout:c3.get()})}if(!((i=(r=Pr().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((o=Pr().gapi)===null||o===void 0)&&o.load)s();else{const a=nV("iframefcb");return Pr()[a]=()=>{gapi.load?s():n(Ar(t,"network-request-failed"))},RC(`https://apis.google.com/js/api.js?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw kd=null,e})}let kd=null;function f3(t){return kd=kd||d3(t),kd}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const h3=new Ju(5e3,15e3),p3="__/auth/iframe",m3="emulator/auth/iframe",g3={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},v3=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function y3(t){const e=t.config;se(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Fy(e,m3):`https://${t.config.authDomain}/${p3}`,r={apiKey:e.apiKey,appName:t.name,v:ls},i=v3.get(t.config.apiHost);i&&(r.eid=i);const o=t._getFrameworks();return o.length&&(r.fw=o.join(",")),`${n}?${Xu(r).slice(1)}`}async function w3(t){const e=await f3(t),n=Pr().gapi;return se(n,t,"internal-error"),e.open({where:document.body,url:y3(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:g3,dontclear:!0},r=>new Promise(async(i,o)=>{await r.restyle({setHideOnLeave:!1});const s=Ar(t,"network-request-failed"),a=Pr().setTimeout(()=>{o(s)},h3.get());function l(){Pr().clearTimeout(a),i(r)}r.ping(l).then(l,()=>{o(s)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _3={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},E3=500,x3=600,T3="_blank",b3="http://localhost";class uE{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function S3(t,e,n,r=E3,i=x3){const o=Math.max((window.screen.availHeight-i)/2,0).toString(),s=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},_3),{width:r.toString(),height:i.toString(),top:o,left:s}),u=Kt().toLowerCase();n&&(a=bC(u)?T3:n),TC(u)&&(e=e||b3,l.scrollbars="yes");const d=Object.entries(l).reduce((p,[g,T])=>`${p}${g}=${T},`,"");if(G5(u)&&a!=="_self")return C3(e||"",a),new uE(null);const h=window.open(e||"",a,d);se(h,t,"popup-blocked");try{h.focus()}catch{}return new uE(h)}function C3(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const I3="__/auth/handler",A3="emulator/auth/handler",P3=encodeURIComponent("fac");async function cE(t,e,n,r,i,o){se(t.config.authDomain,t,"auth-domain-config-required"),se(t.config.apiKey,t,"invalid-api-key");const s={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:ls,eventId:i};if(e instanceof DC){e.setDefaultLanguage(t.languageCode),s.providerId=e.providerId||"",h4(e.getCustomParameters())||(s.customParameters=JSON.stringify(e.getCustomParameters()));for(const[d,h]of Object.entries(o||{}))s[d]=h}if(e instanceof ec){const d=e.getScopes().filter(h=>h!=="");d.length>0&&(s.scopes=d.join(","))}t.tenantId&&(s.tid=t.tenantId);const a=s;for(const d of Object.keys(a))a[d]===void 0&&delete a[d];const l=await t._getAppCheckToken(),u=l?`#${P3}=${encodeURIComponent(l)}`:"";return`${k3(t)}?${Xu(a).slice(1)}${u}`}function k3({config:t}){return t.emulator?Fy(t,A3):`https://${t.authDomain}/${I3}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tm="webStorageSupport";class R3{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=$C,this._completeRedirectFn=t3,this._overrideRedirectResult=JV}async _openPopup(e,n,r,i){var o;ii((o=this.eventManagers[e._key()])===null||o===void 0?void 0:o.manager,"_initialize() not called before _openPopup()");const s=await cE(e,n,r,Vg(),i);return S3(e,s,Hy())}async _openRedirect(e,n,r,i){await this._originValidation(e);const o=await cE(e,n,r,Vg(),i);return NV(o),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:o}=this.eventManagers[n];return i?Promise.resolve(i):(ii(o,"If manager is not set, promise should be"),o)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await w3(e),r=new r3(e);return n.register("authEvent",i=>(se(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(tm,{type:tm},i=>{var o;const s=(o=i==null?void 0:i[0])===null||o===void 0?void 0:o[tm];s!==void 0&&n(!!s),or(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=l3(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return PC()||By()||xh()}}const O3=R3;var dE="@firebase/auth",fE="1.4.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class D3{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){se(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function N3(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function L3(t){Qo(new Ji("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),o=e.getProvider("app-check-internal"),{apiKey:s,authDomain:a}=r.options;se(s&&!s.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:s,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:kC(t)},u=new eV(r,i,o,l);return lV(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Qo(new Ji("auth-internal",e=>{const n=us(e.getProvider("auth").getImmediate());return(r=>new D3(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Ir(dE,fE,N3(t)),Ir(dE,fE,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const M3=5*60,V3=uC("authIdTokenMaxAge")||M3;let hE=null;const j3=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>V3)return;const i=n==null?void 0:n.token;hE!==i&&(hE=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function F3(t=Vy()){const e=Eh(t,"auth");if(e.isInitialized())return e.getImmediate();const n=aV(t,{popupRedirectResolver:O3,persistence:[zV,RV,$C]}),r=uC("authTokenSyncURL");if(r){const o=j3(r);CV(n,o,()=>o(n.currentUser)),SV(n,s=>o(s))}const i=sC("auth");return i&&uV(n,`http://${i}`),n}L3("Browser");var $3=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},X,qy=qy||{},le=$3||self;function Sh(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function nc(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function B3(t){return Object.prototype.hasOwnProperty.call(t,nm)&&t[nm]||(t[nm]=++U3)}var nm="closure_uid_"+(1e9*Math.random()>>>0),U3=0;function z3(t,e,n){return t.call.apply(t.bind,arguments)}function H3(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,r),t.apply(e,i)}}return function(){return t.apply(e,arguments)}}function Wt(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?Wt=z3:Wt=H3,Wt.apply(null,arguments)}function Qc(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),t.apply(this,r)}}function bt(t,e){function n(){}n.prototype=e.prototype,t.$=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.ac=function(r,i,o){for(var s=Array(arguments.length-2),a=2;a<arguments.length;a++)s[a-2]=arguments[a];return e.prototype[i].apply(r,s)}}function ao(){this.s=this.s,this.o=this.o}var W3=0;ao.prototype.s=!1;ao.prototype.sa=function(){!this.s&&(this.s=!0,this.N(),W3!=0)&&B3(this)};ao.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const GC=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function Gy(t){const e=t.length;if(0<e){const n=Array(e);for(let r=0;r<e;r++)n[r]=t[r];return n}return[]}function pE(t,e){for(let n=1;n<arguments.length;n++){const r=arguments[n];if(Sh(r)){const i=t.length||0,o=r.length||0;t.length=i+o;for(let s=0;s<o;s++)t[i+s]=r[s]}else t.push(r)}}function qt(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}qt.prototype.h=function(){this.defaultPrevented=!0};var q3=function(){if(!le.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{le.addEventListener("test",()=>{},e),le.removeEventListener("test",()=>{},e)}catch{}return t}();function bu(t){return/^[\s\xa0]*$/.test(t)}function Ch(){var t=le.navigator;return t&&(t=t.userAgent)?t:""}function _r(t){return Ch().indexOf(t)!=-1}function Ky(t){return Ky[" "](t),t}Ky[" "]=function(){};function G3(t,e){var n=Fj;return Object.prototype.hasOwnProperty.call(n,t)?n[t]:n[t]=e(t)}var K3=_r("Opera"),ya=_r("Trident")||_r("MSIE"),KC=_r("Edge"),$g=KC||ya,QC=_r("Gecko")&&!(Ch().toLowerCase().indexOf("webkit")!=-1&&!_r("Edge"))&&!(_r("Trident")||_r("MSIE"))&&!_r("Edge"),Q3=Ch().toLowerCase().indexOf("webkit")!=-1&&!_r("Edge");function YC(){var t=le.document;return t?t.documentMode:void 0}var Bg;e:{var rm="",im=function(){var t=Ch();if(QC)return/rv:([^\);]+)(\)|;)/.exec(t);if(KC)return/Edge\/([\d\.]+)/.exec(t);if(ya)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(Q3)return/WebKit\/(\S+)/.exec(t);if(K3)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(im&&(rm=im?im[1]:""),ya){var om=YC();if(om!=null&&om>parseFloat(rm)){Bg=String(om);break e}}Bg=rm}var Ug;if(le.document&&ya){var mE=YC();Ug=mE||parseInt(Bg,10)||void 0}else Ug=void 0;var Y3=Ug;function Su(t,e){if(qt.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(QC){e:{try{Ky(e.nodeName);var i=!0;break e}catch{}i=!1}i||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:X3[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&Su.$.h.call(this)}}bt(Su,qt);var X3={2:"touch",3:"pen",4:"mouse"};Su.prototype.h=function(){Su.$.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var rc="closure_listenable_"+(1e6*Math.random()|0),J3=0;function Z3(t,e,n,r,i){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.la=i,this.key=++J3,this.fa=this.ia=!1}function Ih(t){t.fa=!0,t.listener=null,t.proxy=null,t.src=null,t.la=null}function Qy(t,e,n){for(const r in t)e.call(n,t[r],r,t)}function ej(t,e){for(const n in t)e.call(void 0,t[n],n,t)}function XC(t){const e={};for(const n in t)e[n]=t[n];return e}const gE="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function JC(t,e){let n,r;for(let i=1;i<arguments.length;i++){r=arguments[i];for(n in r)t[n]=r[n];for(let o=0;o<gE.length;o++)n=gE[o],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function Ah(t){this.src=t,this.g={},this.h=0}Ah.prototype.add=function(t,e,n,r,i){var o=t.toString();t=this.g[o],t||(t=this.g[o]=[],this.h++);var s=Hg(t,e,r,i);return-1<s?(e=t[s],n||(e.ia=!1)):(e=new Z3(e,this.src,o,!!r,i),e.ia=n,t.push(e)),e};function zg(t,e){var n=e.type;if(n in t.g){var r=t.g[n],i=GC(r,e),o;(o=0<=i)&&Array.prototype.splice.call(r,i,1),o&&(Ih(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function Hg(t,e,n,r){for(var i=0;i<t.length;++i){var o=t[i];if(!o.fa&&o.listener==e&&o.capture==!!n&&o.la==r)return i}return-1}var Yy="closure_lm_"+(1e6*Math.random()|0),sm={};function ZC(t,e,n,r,i){if(r&&r.once)return tI(t,e,n,r,i);if(Array.isArray(e)){for(var o=0;o<e.length;o++)ZC(t,e[o],n,r,i);return null}return n=Zy(n),t&&t[rc]?t.O(e,n,nc(r)?!!r.capture:!!r,i):eI(t,e,n,!1,r,i)}function eI(t,e,n,r,i,o){if(!e)throw Error("Invalid event type");var s=nc(i)?!!i.capture:!!i,a=Jy(t);if(a||(t[Yy]=a=new Ah(t)),n=a.add(e,n,r,s,o),n.proxy)return n;if(r=tj(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)q3||(i=s),i===void 0&&(i=!1),t.addEventListener(e.toString(),r,i);else if(t.attachEvent)t.attachEvent(rI(e.toString()),r);else if(t.addListener&&t.removeListener)t.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function tj(){function t(n){return e.call(t.src,t.listener,n)}const e=nj;return t}function tI(t,e,n,r,i){if(Array.isArray(e)){for(var o=0;o<e.length;o++)tI(t,e[o],n,r,i);return null}return n=Zy(n),t&&t[rc]?t.P(e,n,nc(r)?!!r.capture:!!r,i):eI(t,e,n,!0,r,i)}function nI(t,e,n,r,i){if(Array.isArray(e))for(var o=0;o<e.length;o++)nI(t,e[o],n,r,i);else r=nc(r)?!!r.capture:!!r,n=Zy(n),t&&t[rc]?(t=t.i,e=String(e).toString(),e in t.g&&(o=t.g[e],n=Hg(o,n,r,i),-1<n&&(Ih(o[n]),Array.prototype.splice.call(o,n,1),o.length==0&&(delete t.g[e],t.h--)))):t&&(t=Jy(t))&&(e=t.g[e.toString()],t=-1,e&&(t=Hg(e,n,r,i)),(n=-1<t?e[t]:null)&&Xy(n))}function Xy(t){if(typeof t!="number"&&t&&!t.fa){var e=t.src;if(e&&e[rc])zg(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(rI(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=Jy(e))?(zg(n,t),n.h==0&&(n.src=null,e[Yy]=null)):Ih(t)}}}function rI(t){return t in sm?sm[t]:sm[t]="on"+t}function nj(t,e){if(t.fa)t=!0;else{e=new Su(e,this);var n=t.listener,r=t.la||t.src;t.ia&&Xy(t),t=n.call(r,e)}return t}function Jy(t){return t=t[Yy],t instanceof Ah?t:null}var am="__closure_events_fn_"+(1e9*Math.random()>>>0);function Zy(t){return typeof t=="function"?t:(t[am]||(t[am]=function(e){return t.handleEvent(e)}),t[am])}function Tt(){ao.call(this),this.i=new Ah(this),this.S=this,this.J=null}bt(Tt,ao);Tt.prototype[rc]=!0;Tt.prototype.removeEventListener=function(t,e,n,r){nI(this,t,e,n,r)};function Ot(t,e){var n,r=t.J;if(r)for(n=[];r;r=r.J)n.push(r);if(t=t.S,r=e.type||e,typeof e=="string")e=new qt(e,t);else if(e instanceof qt)e.target=e.target||t;else{var i=e;e=new qt(r,t),JC(e,i)}if(i=!0,n)for(var o=n.length-1;0<=o;o--){var s=e.g=n[o];i=Yc(s,r,!0,e)&&i}if(s=e.g=t,i=Yc(s,r,!0,e)&&i,i=Yc(s,r,!1,e)&&i,n)for(o=0;o<n.length;o++)s=e.g=n[o],i=Yc(s,r,!1,e)&&i}Tt.prototype.N=function(){if(Tt.$.N.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)Ih(n[r]);delete t.g[e],t.h--}}this.J=null};Tt.prototype.O=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)};Tt.prototype.P=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};function Yc(t,e,n,r){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var i=!0,o=0;o<e.length;++o){var s=e[o];if(s&&!s.fa&&s.capture==n){var a=s.listener,l=s.la||s.src;s.ia&&zg(t.i,s),i=a.call(l,r)!==!1&&i}}return i&&!r.defaultPrevented}var e0=le.JSON.stringify;class rj{constructor(e,n){this.i=e,this.j=n,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}function ij(){var t=t0;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class oj{constructor(){this.h=this.g=null}add(e,n){const r=iI.get();r.set(e,n),this.h?this.h.next=r:this.g=r,this.h=r}}var iI=new rj(()=>new sj,t=>t.reset());class sj{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function aj(t){var e=1;t=t.split(":");const n=[];for(;0<e&&t.length;)n.push(t.shift()),e--;return t.length&&n.push(t.join(":")),n}function lj(t){le.setTimeout(()=>{throw t},0)}let Cu,Iu=!1,t0=new oj,oI=()=>{const t=le.Promise.resolve(void 0);Cu=()=>{t.then(uj)}};var uj=()=>{for(var t;t=ij();){try{t.h.call(t.g)}catch(n){lj(n)}var e=iI;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}Iu=!1};function Ph(t,e){Tt.call(this),this.h=t||1,this.g=e||le,this.j=Wt(this.qb,this),this.l=Date.now()}bt(Ph,Tt);X=Ph.prototype;X.ga=!1;X.T=null;X.qb=function(){if(this.ga){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-t):(this.T&&(this.g.clearTimeout(this.T),this.T=null),Ot(this,"tick"),this.ga&&(n0(this),this.start()))}};X.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function n0(t){t.ga=!1,t.T&&(t.g.clearTimeout(t.T),t.T=null)}X.N=function(){Ph.$.N.call(this),n0(this),delete this.g};function r0(t,e,n){if(typeof t=="function")n&&(t=Wt(t,n));else if(t&&typeof t.handleEvent=="function")t=Wt(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:le.setTimeout(t,e||0)}function sI(t){t.g=r0(()=>{t.g=null,t.i&&(t.i=!1,sI(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class cj extends ao{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:sI(this)}N(){super.N(),this.g&&(le.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Au(t){ao.call(this),this.h=t,this.g={}}bt(Au,ao);var vE=[];function aI(t,e,n,r){Array.isArray(n)||(n&&(vE[0]=n.toString()),n=vE);for(var i=0;i<n.length;i++){var o=ZC(e,n[i],r||t.handleEvent,!1,t.h||t);if(!o)break;t.g[o.key]=o}}function lI(t){Qy(t.g,function(e,n){this.g.hasOwnProperty(n)&&Xy(e)},t),t.g={}}Au.prototype.N=function(){Au.$.N.call(this),lI(this)};Au.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function kh(){this.g=!0}kh.prototype.Ea=function(){this.g=!1};function dj(t,e,n,r,i,o){t.info(function(){if(t.g)if(o)for(var s="",a=o.split("&"),l=0;l<a.length;l++){var u=a[l].split("=");if(1<u.length){var d=u[0];u=u[1];var h=d.split("_");s=2<=h.length&&h[1]=="type"?s+(d+"="+u+"&"):s+(d+"=redacted&")}}else s=null;else s=o;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+e+`
`+n+`
`+s})}function fj(t,e,n,r,i,o,s){t.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+e+`
`+n+`
`+o+" "+s})}function qs(t,e,n,r){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+pj(t,n)+(r?" "+r:"")})}function hj(t,e){t.info(function(){return"TIMEOUT: "+e})}kh.prototype.info=function(){};function pj(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var o=i[0];if(o!="noop"&&o!="stop"&&o!="close")for(var s=1;s<i.length;s++)i[s]=""}}}}return e0(n)}catch{return e}}var cs={},yE=null;function Rh(){return yE=yE||new Tt}cs.Ta="serverreachability";function uI(t){qt.call(this,cs.Ta,t)}bt(uI,qt);function Pu(t){const e=Rh();Ot(e,new uI(e))}cs.STAT_EVENT="statevent";function cI(t,e){qt.call(this,cs.STAT_EVENT,t),this.stat=e}bt(cI,qt);function tn(t){const e=Rh();Ot(e,new cI(e,t))}cs.Ua="timingevent";function dI(t,e){qt.call(this,cs.Ua,t),this.size=e}bt(dI,qt);function ic(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return le.setTimeout(function(){t()},e)}var Oh={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},fI={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function i0(){}i0.prototype.h=null;function wE(t){return t.h||(t.h=t.i())}function hI(){}var oc={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function o0(){qt.call(this,"d")}bt(o0,qt);function s0(){qt.call(this,"c")}bt(s0,qt);var Wg;function Dh(){}bt(Dh,i0);Dh.prototype.g=function(){return new XMLHttpRequest};Dh.prototype.i=function(){return{}};Wg=new Dh;function sc(t,e,n,r){this.l=t,this.j=e,this.m=n,this.W=r||1,this.U=new Au(this),this.P=mj,t=$g?125:void 0,this.V=new Ph(t),this.I=null,this.i=!1,this.s=this.A=this.v=this.L=this.G=this.Y=this.B=null,this.F=[],this.g=null,this.C=0,this.o=this.u=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new pI}function pI(){this.i=null,this.g="",this.h=!1}var mj=45e3,qg={},xf={};X=sc.prototype;X.setTimeout=function(t){this.P=t};function Gg(t,e,n){t.L=1,t.v=Lh(oi(e)),t.s=n,t.S=!0,mI(t,null)}function mI(t,e){t.G=Date.now(),ac(t),t.A=oi(t.v);var n=t.A,r=t.W;Array.isArray(r)||(r=[String(r)]),TI(n.i,"t",r),t.C=0,n=t.l.J,t.h=new pI,t.g=HI(t.l,n?e:null,!t.s),0<t.O&&(t.M=new cj(Wt(t.Pa,t,t.g),t.O)),aI(t.U,t.g,"readystatechange",t.nb),e=t.I?XC(t.I):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ha(t.A,t.u,t.s,e)):(t.u="GET",t.g.ha(t.A,t.u,null,e)),Pu(),dj(t.j,t.u,t.A,t.m,t.W,t.s)}X.nb=function(t){t=t.target;const e=this.M;e&&Er(t)==3?e.l():this.Pa(t)};X.Pa=function(t){try{if(t==this.g)e:{const d=Er(this.g);var e=this.g.Ia();const h=this.g.da();if(!(3>d)&&(d!=3||$g||this.g&&(this.h.h||this.g.ja()||TE(this.g)))){this.J||d!=4||e==7||(e==8||0>=h?Pu(3):Pu(2)),Nh(this);var n=this.g.da();this.ca=n;t:if(gI(this)){var r=TE(this.g);t="";var i=r.length,o=Er(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Ro(this),Ul(this);var s="";break t}this.h.i=new le.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,t+=this.h.i.decode(r[e],{stream:o&&e==i-1});r.splice(0,i),this.h.g+=t,this.C=0,s=this.h.g}else s=this.g.ja();if(this.i=n==200,fj(this.j,this.u,this.A,this.m,this.W,d,n),this.i){if(this.aa&&!this.K){t:{if(this.g){var a,l=this.g;if((a=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!bu(a)){var u=a;break t}}u=null}if(n=u)qs(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Kg(this,n);else{this.i=!1,this.o=3,tn(12),Ro(this),Ul(this);break e}}this.S?(vI(this,d,s),$g&&this.i&&d==3&&(aI(this.U,this.V,"tick",this.mb),this.V.start())):(qs(this.j,this.m,s,null),Kg(this,s)),d==4&&Ro(this),this.i&&!this.J&&(d==4?$I(this.l,this):(this.i=!1,ac(this)))}else Mj(this.g),n==400&&0<s.indexOf("Unknown SID")?(this.o=3,tn(12)):(this.o=0,tn(13)),Ro(this),Ul(this)}}}catch{}finally{}};function gI(t){return t.g?t.u=="GET"&&t.L!=2&&t.l.Ha:!1}function vI(t,e,n){let r=!0,i;for(;!t.J&&t.C<n.length;)if(i=gj(t,n),i==xf){e==4&&(t.o=4,tn(14),r=!1),qs(t.j,t.m,null,"[Incomplete Response]");break}else if(i==qg){t.o=4,tn(15),qs(t.j,t.m,n,"[Invalid Chunk]"),r=!1;break}else qs(t.j,t.m,i,null),Kg(t,i);gI(t)&&i!=xf&&i!=qg&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,tn(16),r=!1),t.i=t.i&&r,r?0<n.length&&!t.ba&&(t.ba=!0,e=t.l,e.g==t&&e.ca&&!e.M&&(e.l.info("Great, no buffering proxy detected. Bytes received: "+n.length),f0(e),e.M=!0,tn(11))):(qs(t.j,t.m,n,"[Invalid Chunked Response]"),Ro(t),Ul(t))}X.mb=function(){if(this.g){var t=Er(this.g),e=this.g.ja();this.C<e.length&&(Nh(this),vI(this,t,e),this.i&&t!=4&&ac(this))}};function gj(t,e){var n=t.C,r=e.indexOf(`
`,n);return r==-1?xf:(n=Number(e.substring(n,r)),isNaN(n)?qg:(r+=1,r+n>e.length?xf:(e=e.slice(r,r+n),t.C=r+n,e)))}X.cancel=function(){this.J=!0,Ro(this)};function ac(t){t.Y=Date.now()+t.P,yI(t,t.P)}function yI(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=ic(Wt(t.lb,t),e)}function Nh(t){t.B&&(le.clearTimeout(t.B),t.B=null)}X.lb=function(){this.B=null;const t=Date.now();0<=t-this.Y?(hj(this.j,this.A),this.L!=2&&(Pu(),tn(17)),Ro(this),this.o=2,Ul(this)):yI(this,this.Y-t)};function Ul(t){t.l.H==0||t.J||$I(t.l,t)}function Ro(t){Nh(t);var e=t.M;e&&typeof e.sa=="function"&&e.sa(),t.M=null,n0(t.V),lI(t.U),t.g&&(e=t.g,t.g=null,e.abort(),e.sa())}function Kg(t,e){try{var n=t.l;if(n.H!=0&&(n.g==t||Qg(n.i,t))){if(!t.K&&Qg(n.i,t)&&n.H==3){try{var r=n.Ja.g.parse(e)}catch{r=null}if(Array.isArray(r)&&r.length==3){var i=r;if(i[0]==0){e:if(!n.u){if(n.g)if(n.g.G+3e3<t.G)Sf(n),jh(n);else break e;d0(n),tn(18)}}else n.Fa=i[1],0<n.Fa-n.V&&37500>i[2]&&n.G&&n.A==0&&!n.v&&(n.v=ic(Wt(n.ib,n),6e3));if(1>=CI(n.i)&&n.oa){try{n.oa()}catch{}n.oa=void 0}}else Oo(n,11)}else if((t.K||n.g==t)&&Sf(n),!bu(e))for(i=n.Ja.g.parse(e),e=0;e<i.length;e++){let u=i[e];if(n.V=u[0],u=u[1],n.H==2)if(u[0]=="c"){n.K=u[1],n.pa=u[2];const d=u[3];d!=null&&(n.ra=d,n.l.info("VER="+n.ra));const h=u[4];h!=null&&(n.Ga=h,n.l.info("SVER="+n.Ga));const p=u[5];p!=null&&typeof p=="number"&&0<p&&(r=1.5*p,n.L=r,n.l.info("backChannelRequestTimeoutMs_="+r)),r=n;const g=t.g;if(g){const T=g.g?g.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(T){var o=r.i;o.g||T.indexOf("spdy")==-1&&T.indexOf("quic")==-1&&T.indexOf("h2")==-1||(o.j=o.l,o.g=new Set,o.h&&(a0(o,o.h),o.h=null))}if(r.F){const b=g.g?g.g.getResponseHeader("X-HTTP-Session-Id"):null;b&&(r.Da=b,$e(r.I,r.F,b))}}n.H=3,n.h&&n.h.Ba(),n.ca&&(n.S=Date.now()-t.G,n.l.info("Handshake RTT: "+n.S+"ms")),r=n;var s=t;if(r.wa=zI(r,r.J?r.pa:null,r.Y),s.K){II(r.i,s);var a=s,l=r.L;l&&a.setTimeout(l),a.B&&(Nh(a),ac(a)),r.g=s}else jI(r);0<n.j.length&&Fh(n)}else u[0]!="stop"&&u[0]!="close"||Oo(n,7);else n.H==3&&(u[0]=="stop"||u[0]=="close"?u[0]=="stop"?Oo(n,7):c0(n):u[0]!="noop"&&n.h&&n.h.Aa(u),n.A=0)}}Pu(4)}catch{}}function vj(t){if(t.Z&&typeof t.Z=="function")return t.Z();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(Sh(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}e=[],n=0;for(r in t)e[n++]=t[r];return e}function yj(t){if(t.ta&&typeof t.ta=="function")return t.ta();if(!t.Z||typeof t.Z!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(Sh(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const r in t)e[n++]=r;return e}}}function wI(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(Sh(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=yj(t),r=vj(t),i=r.length,o=0;o<i;o++)e.call(void 0,r[o],n&&n[o],t)}var _I=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function wj(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),i=null;if(0<=r){var o=t[n].substring(0,r);i=t[n].substring(r+1)}else o=t[n];e(o,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function Fo(t){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof Fo){this.h=t.h,Tf(this,t.j),this.s=t.s,this.g=t.g,bf(this,t.m),this.l=t.l;var e=t.i,n=new ku;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),_E(this,n),this.o=t.o}else t&&(e=String(t).match(_I))?(this.h=!1,Tf(this,e[1]||"",!0),this.s=bl(e[2]||""),this.g=bl(e[3]||"",!0),bf(this,e[4]),this.l=bl(e[5]||"",!0),_E(this,e[6]||"",!0),this.o=bl(e[7]||"")):(this.h=!1,this.i=new ku(null,this.h))}Fo.prototype.toString=function(){var t=[],e=this.j;e&&t.push(Sl(e,EE,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(Sl(e,EE,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(Sl(n,n.charAt(0)=="/"?xj:Ej,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",Sl(n,bj)),t.join("")};function oi(t){return new Fo(t)}function Tf(t,e,n){t.j=n?bl(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function bf(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function _E(t,e,n){e instanceof ku?(t.i=e,Sj(t.i,t.h)):(n||(e=Sl(e,Tj)),t.i=new ku(e,t.h))}function $e(t,e,n){t.i.set(e,n)}function Lh(t){return $e(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function bl(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function Sl(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,_j),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function _j(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var EE=/[#\/\?@]/g,Ej=/[#\?:]/g,xj=/[#\?]/g,Tj=/[#\?@]/g,bj=/#/g;function ku(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function lo(t){t.g||(t.g=new Map,t.h=0,t.i&&wj(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}X=ku.prototype;X.add=function(t,e){lo(this),this.i=null,t=ja(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function EI(t,e){lo(t),e=ja(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function xI(t,e){return lo(t),e=ja(t,e),t.g.has(e)}X.forEach=function(t,e){lo(this),this.g.forEach(function(n,r){n.forEach(function(i){t.call(e,i,r,this)},this)},this)};X.ta=function(){lo(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let r=0;r<e.length;r++){const i=t[r];for(let o=0;o<i.length;o++)n.push(e[r])}return n};X.Z=function(t){lo(this);let e=[];if(typeof t=="string")xI(this,t)&&(e=e.concat(this.g.get(ja(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};X.set=function(t,e){return lo(this),this.i=null,t=ja(this,t),xI(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};X.get=function(t,e){return t?(t=this.Z(t),0<t.length?String(t[0]):e):e};function TI(t,e,n){EI(t,e),0<n.length&&(t.i=null,t.g.set(ja(t,e),Gy(n)),t.h+=n.length)}X.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var r=e[n];const o=encodeURIComponent(String(r)),s=this.Z(r);for(r=0;r<s.length;r++){var i=o;s[r]!==""&&(i+="="+encodeURIComponent(String(s[r]))),t.push(i)}}return this.i=t.join("&")};function ja(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function Sj(t,e){e&&!t.j&&(lo(t),t.i=null,t.g.forEach(function(n,r){var i=r.toLowerCase();r!=i&&(EI(this,r),TI(this,i,n))},t)),t.j=e}var Cj=class{constructor(t,e){this.g=t,this.map=e}};function bI(t){this.l=t||Ij,le.PerformanceNavigationTiming?(t=le.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(le.g&&le.g.Ka&&le.g.Ka()&&le.g.Ka().dc),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var Ij=10;function SI(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function CI(t){return t.h?1:t.g?t.g.size:0}function Qg(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function a0(t,e){t.g?t.g.add(e):t.h=e}function II(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}bI.prototype.cancel=function(){if(this.i=AI(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function AI(t){if(t.h!=null)return t.i.concat(t.h.F);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.F);return e}return Gy(t.i)}var Aj=class{stringify(t){return le.JSON.stringify(t,void 0)}parse(t){return le.JSON.parse(t,void 0)}};function Pj(){this.g=new Aj}function kj(t,e,n){const r=n||"";try{wI(t,function(i,o){let s=i;nc(i)&&(s=e0(i)),e.push(r+o+"="+encodeURIComponent(s))})}catch(i){throw e.push(r+"type="+encodeURIComponent("_badmap")),i}}function Rj(t,e){const n=new kh;if(le.Image){const r=new Image;r.onload=Qc(Xc,n,r,"TestLoadImage: loaded",!0,e),r.onerror=Qc(Xc,n,r,"TestLoadImage: error",!1,e),r.onabort=Qc(Xc,n,r,"TestLoadImage: abort",!1,e),r.ontimeout=Qc(Xc,n,r,"TestLoadImage: timeout",!1,e),le.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=t}else e(!1)}function Xc(t,e,n,r,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(r)}catch{}}function lc(t){this.l=t.ec||null,this.j=t.ob||!1}bt(lc,i0);lc.prototype.g=function(){return new Mh(this.l,this.j)};lc.prototype.i=function(t){return function(){return t}}({});function Mh(t,e){Tt.call(this),this.F=t,this.u=e,this.m=void 0,this.readyState=l0,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}bt(Mh,Tt);var l0=0;X=Mh.prototype;X.open=function(t,e){if(this.readyState!=l0)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,Ru(this)};X.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.F||le).fetch(new Request(this.B,e)).then(this.$a.bind(this),this.ka.bind(this))};X.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,uc(this)),this.readyState=l0};X.$a=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,Ru(this)),this.g&&(this.readyState=3,Ru(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof le.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;PI(this)}else t.text().then(this.Za.bind(this),this.ka.bind(this))};function PI(t){t.j.read().then(t.Xa.bind(t)).catch(t.ka.bind(t))}X.Xa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?uc(this):Ru(this),this.readyState==3&&PI(this)}};X.Za=function(t){this.g&&(this.response=this.responseText=t,uc(this))};X.Ya=function(t){this.g&&(this.response=t,uc(this))};X.ka=function(){this.g&&uc(this)};function uc(t){t.readyState=4,t.l=null,t.j=null,t.A=null,Ru(t)}X.setRequestHeader=function(t,e){this.v.append(t,e)};X.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};X.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function Ru(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(Mh.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var Oj=le.JSON.parse;function Ze(t){Tt.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=kI,this.L=this.M=!1}bt(Ze,Tt);var kI="",Dj=/^https?$/i,Nj=["POST","PUT"];X=Ze.prototype;X.Oa=function(t){this.M=t};X.ha=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+t);e=e?e.toUpperCase():"GET",this.I=t,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():Wg.g(),this.C=this.u?wE(this.u):wE(Wg),this.g.onreadystatechange=Wt(this.La,this);try{this.G=!0,this.g.open(e,String(t),!0),this.G=!1}catch(o){xE(this,o);return}if(t=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var i in r)n.set(i,r[i]);else if(typeof r.keys=="function"&&typeof r.get=="function")for(const o of r.keys())n.set(o,r.get(o));else throw Error("Unknown input type for opt_headers: "+String(r));r=Array.from(n.keys()).find(o=>o.toLowerCase()=="content-type"),i=le.FormData&&t instanceof le.FormData,!(0<=GC(Nj,e))||r||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[o,s]of n)this.g.setRequestHeader(o,s);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{DI(this),0<this.B&&((this.L=Lj(this.g))?(this.g.timeout=this.B,this.g.ontimeout=Wt(this.ua,this)):this.A=r0(this.ua,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(o){xE(this,o)}};function Lj(t){return ya&&typeof t.timeout=="number"&&t.ontimeout!==void 0}X.ua=function(){typeof qy<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Ot(this,"timeout"),this.abort(8))};function xE(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,RI(t),Vh(t)}function RI(t){t.F||(t.F=!0,Ot(t,"complete"),Ot(t,"error"))}X.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,Ot(this,"complete"),Ot(this,"abort"),Vh(this))};X.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Vh(this,!0)),Ze.$.N.call(this)};X.La=function(){this.s||(this.G||this.v||this.l?OI(this):this.kb())};X.kb=function(){OI(this)};function OI(t){if(t.h&&typeof qy<"u"&&(!t.C[1]||Er(t)!=4||t.da()!=2)){if(t.v&&Er(t)==4)r0(t.La,0,t);else if(Ot(t,"readystatechange"),Er(t)==4){t.h=!1;try{const s=t.da();e:switch(s){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var r;if(r=s===0){var i=String(t.I).match(_I)[1]||null;!i&&le.self&&le.self.location&&(i=le.self.location.protocol.slice(0,-1)),r=!Dj.test(i?i.toLowerCase():"")}n=r}if(n)Ot(t,"complete"),Ot(t,"success");else{t.m=6;try{var o=2<Er(t)?t.g.statusText:""}catch{o=""}t.j=o+" ["+t.da()+"]",RI(t)}}finally{Vh(t)}}}}function Vh(t,e){if(t.g){DI(t);const n=t.g,r=t.C[0]?()=>{}:null;t.g=null,t.C=null,e||Ot(t,"ready");try{n.onreadystatechange=r}catch{}}}function DI(t){t.g&&t.L&&(t.g.ontimeout=null),t.A&&(le.clearTimeout(t.A),t.A=null)}X.isActive=function(){return!!this.g};function Er(t){return t.g?t.g.readyState:0}X.da=function(){try{return 2<Er(this)?this.g.status:-1}catch{return-1}};X.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};X.Wa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),Oj(e)}};function TE(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.K){case kI:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}function Mj(t){const e={};t=(t.g&&2<=Er(t)&&t.g.getAllResponseHeaders()||"").split(`\r
`);for(let r=0;r<t.length;r++){if(bu(t[r]))continue;var n=aj(t[r]);const i=n[0];if(n=n[1],typeof n!="string")continue;n=n.trim();const o=e[i]||[];e[i]=o,o.push(n)}ej(e,function(r){return r.join(", ")})}X.Ia=function(){return this.m};X.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function NI(t){let e="";return Qy(t,function(n,r){e+=r,e+=":",e+=n,e+=`\r
`}),e}function u0(t,e,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=NI(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):$e(t,e,n))}function dl(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function LI(t){this.Ga=0,this.j=[],this.l=new kh,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=dl("failFast",!1,t),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=dl("baseRetryDelayMs",5e3,t),this.hb=dl("retryDelaySeedMs",1e4,t),this.eb=dl("forwardChannelMaxRetries",2,t),this.xa=dl("forwardChannelRequestTimeoutMs",2e4,t),this.va=t&&t.xmlHttpFactory||void 0,this.Ha=t&&t.useFetchStreams||!1,this.L=void 0,this.J=t&&t.supportsCrossDomainXhr||!1,this.K="",this.i=new bI(t&&t.concurrentRequestLimit),this.Ja=new Pj,this.P=t&&t.fastHandshake||!1,this.O=t&&t.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=t&&t.bc||!1,t&&t.Ea&&this.l.Ea(),t&&t.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&t&&t.detectBufferingProxy||!1,this.qa=void 0,t&&t.longPollingTimeout&&0<t.longPollingTimeout&&(this.qa=t.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}X=LI.prototype;X.ra=8;X.H=1;function c0(t){if(MI(t),t.H==3){var e=t.W++,n=oi(t.I);if($e(n,"SID",t.K),$e(n,"RID",e),$e(n,"TYPE","terminate"),cc(t,n),e=new sc(t,t.l,e),e.L=2,e.v=Lh(oi(n)),n=!1,le.navigator&&le.navigator.sendBeacon)try{n=le.navigator.sendBeacon(e.v.toString(),"")}catch{}!n&&le.Image&&(new Image().src=e.v,n=!0),n||(e.g=HI(e.l,null),e.g.ha(e.v)),e.G=Date.now(),ac(e)}UI(t)}function jh(t){t.g&&(f0(t),t.g.cancel(),t.g=null)}function MI(t){jh(t),t.u&&(le.clearTimeout(t.u),t.u=null),Sf(t),t.i.cancel(),t.m&&(typeof t.m=="number"&&le.clearTimeout(t.m),t.m=null)}function Fh(t){if(!SI(t.i)&&!t.m){t.m=!0;var e=t.Na;Cu||oI(),Iu||(Cu(),Iu=!0),t0.add(e,t),t.C=0}}function Vj(t,e){return CI(t.i)>=t.i.j-(t.m?1:0)?!1:t.m?(t.j=e.F.concat(t.j),!0):t.H==1||t.H==2||t.C>=(t.cb?0:t.eb)?!1:(t.m=ic(Wt(t.Na,t,e),BI(t,t.C)),t.C++,!0)}X.Na=function(t){if(this.m)if(this.m=null,this.H==1){if(!t){this.W=Math.floor(1e5*Math.random()),t=this.W++;const i=new sc(this,this.l,t);let o=this.s;if(this.U&&(o?(o=XC(o),JC(o,this.U)):o=this.U),this.o!==null||this.O||(i.I=o,o=null),this.P)e:{for(var e=0,n=0;n<this.j.length;n++){t:{var r=this.j[n];if("__data__"in r.map&&(r=r.map.__data__,typeof r=="string")){r=r.length;break t}r=void 0}if(r===void 0)break;if(e+=r,4096<e){e=n;break e}if(e===4096||n===this.j.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=VI(this,i,e),n=oi(this.I),$e(n,"RID",t),$e(n,"CVER",22),this.F&&$e(n,"X-HTTP-Session-Id",this.F),cc(this,n),o&&(this.O?e="headers="+encodeURIComponent(String(NI(o)))+"&"+e:this.o&&u0(n,this.o,o)),a0(this.i,i),this.bb&&$e(n,"TYPE","init"),this.P?($e(n,"$req",e),$e(n,"SID","null"),i.aa=!0,Gg(i,n,null)):Gg(i,n,e),this.H=2}}else this.H==3&&(t?bE(this,t):this.j.length==0||SI(this.i)||bE(this))};function bE(t,e){var n;e?n=e.m:n=t.W++;const r=oi(t.I);$e(r,"SID",t.K),$e(r,"RID",n),$e(r,"AID",t.V),cc(t,r),t.o&&t.s&&u0(r,t.o,t.s),n=new sc(t,t.l,n,t.C+1),t.o===null&&(n.I=t.s),e&&(t.j=e.F.concat(t.j)),e=VI(t,n,1e3),n.setTimeout(Math.round(.5*t.xa)+Math.round(.5*t.xa*Math.random())),a0(t.i,n),Gg(n,r,e)}function cc(t,e){t.na&&Qy(t.na,function(n,r){$e(e,r,n)}),t.h&&wI({},function(n,r){$e(e,r,n)})}function VI(t,e,n){n=Math.min(t.j.length,n);var r=t.h?Wt(t.h.Va,t.h,t):null;e:{var i=t.j;let o=-1;for(;;){const s=["count="+n];o==-1?0<n?(o=i[0].g,s.push("ofs="+o)):o=0:s.push("ofs="+o);let a=!0;for(let l=0;l<n;l++){let u=i[l].g;const d=i[l].map;if(u-=o,0>u)o=Math.max(0,i[l].g-100),a=!1;else try{kj(d,s,"req"+u+"_")}catch{r&&r(d)}}if(a){r=s.join("&");break e}}}return t=t.j.splice(0,n),e.F=t,r}function jI(t){if(!t.g&&!t.u){t.ba=1;var e=t.Ma;Cu||oI(),Iu||(Cu(),Iu=!0),t0.add(e,t),t.A=0}}function d0(t){return t.g||t.u||3<=t.A?!1:(t.ba++,t.u=ic(Wt(t.Ma,t),BI(t,t.A)),t.A++,!0)}X.Ma=function(){if(this.u=null,FI(this),this.ca&&!(this.M||this.g==null||0>=this.S)){var t=2*this.S;this.l.info("BP detection timer enabled: "+t),this.B=ic(Wt(this.jb,this),t)}};X.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,tn(10),jh(this),FI(this))};function f0(t){t.B!=null&&(le.clearTimeout(t.B),t.B=null)}function FI(t){t.g=new sc(t,t.l,"rpc",t.ba),t.o===null&&(t.g.I=t.s),t.g.O=0;var e=oi(t.wa);$e(e,"RID","rpc"),$e(e,"SID",t.K),$e(e,"AID",t.V),$e(e,"CI",t.G?"0":"1"),!t.G&&t.qa&&$e(e,"TO",t.qa),$e(e,"TYPE","xmlhttp"),cc(t,e),t.o&&t.s&&u0(e,t.o,t.s),t.L&&t.g.setTimeout(t.L);var n=t.g;t=t.pa,n.L=1,n.v=Lh(oi(e)),n.s=null,n.S=!0,mI(n,t)}X.ib=function(){this.v!=null&&(this.v=null,jh(this),d0(this),tn(19))};function Sf(t){t.v!=null&&(le.clearTimeout(t.v),t.v=null)}function $I(t,e){var n=null;if(t.g==e){Sf(t),f0(t),t.g=null;var r=2}else if(Qg(t.i,e))n=e.F,II(t.i,e),r=1;else return;if(t.H!=0){if(e.i)if(r==1){n=e.s?e.s.length:0,e=Date.now()-e.G;var i=t.C;r=Rh(),Ot(r,new dI(r,n)),Fh(t)}else jI(t);else if(i=e.o,i==3||i==0&&0<e.ca||!(r==1&&Vj(t,e)||r==2&&d0(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),i){case 1:Oo(t,5);break;case 4:Oo(t,10);break;case 3:Oo(t,6);break;default:Oo(t,2)}}}function BI(t,e){let n=t.ab+Math.floor(Math.random()*t.hb);return t.isActive()||(n*=2),n*e}function Oo(t,e){if(t.l.info("Error code "+e),e==2){var n=null;t.h&&(n=null);var r=Wt(t.pb,t);n||(n=new Fo("//www.google.com/images/cleardot.gif"),le.location&&le.location.protocol=="http"||Tf(n,"https"),Lh(n)),Rj(n.toString(),r)}else tn(2);t.H=0,t.h&&t.h.za(e),UI(t),MI(t)}X.pb=function(t){t?(this.l.info("Successfully pinged google.com"),tn(2)):(this.l.info("Failed to ping google.com"),tn(1))};function UI(t){if(t.H=0,t.ma=[],t.h){const e=AI(t.i);(e.length!=0||t.j.length!=0)&&(pE(t.ma,e),pE(t.ma,t.j),t.i.i.length=0,Gy(t.j),t.j.length=0),t.h.ya()}}function zI(t,e,n){var r=n instanceof Fo?oi(n):new Fo(n);if(r.g!="")e&&(r.g=e+"."+r.g),bf(r,r.m);else{var i=le.location;r=i.protocol,e=e?e+"."+i.hostname:i.hostname,i=+i.port;var o=new Fo(null);r&&Tf(o,r),e&&(o.g=e),i&&bf(o,i),n&&(o.l=n),r=o}return n=t.F,e=t.Da,n&&e&&$e(r,n,e),$e(r,"VER",t.ra),cc(t,r),r}function HI(t,e,n){if(e&&!t.J)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Ha&&!t.va?new Ze(new lc({ob:!0})):new Ze(t.va),e.Oa(t.J),e}X.isActive=function(){return!!this.h&&this.h.isActive(this)};function WI(){}X=WI.prototype;X.Ba=function(){};X.Aa=function(){};X.za=function(){};X.ya=function(){};X.isActive=function(){return!0};X.Va=function(){};function Cf(){if(ya&&!(10<=Number(Y3)))throw Error("Environmental error: no available transport.")}Cf.prototype.g=function(t,e){return new Cn(t,e)};function Cn(t,e){Tt.call(this),this.g=new LI(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.Ca&&(t?t["X-WebChannel-Client-Profile"]=e.Ca:t={"X-WebChannel-Client-Profile":e.Ca}),this.g.U=t,(t=e&&e.cc)&&!bu(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!bu(e)&&(this.g.F=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new Fa(this)}bt(Cn,Tt);Cn.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var t=this.g,e=this.l,n=this.h||void 0;tn(0),t.Y=e,t.na=n||{},t.G=t.aa,t.I=zI(t,null,t.Y),Fh(t)};Cn.prototype.close=function(){c0(this.g)};Cn.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=e0(t),t=n);e.j.push(new Cj(e.fb++,t)),e.H==3&&Fh(e)};Cn.prototype.N=function(){this.g.h=null,delete this.j,c0(this.g),delete this.g,Cn.$.N.call(this)};function qI(t){o0.call(this),t.__headers__&&(this.headers=t.__headers__,this.statusCode=t.__status__,delete t.__headers__,delete t.__status__);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}bt(qI,o0);function GI(){s0.call(this),this.status=1}bt(GI,s0);function Fa(t){this.g=t}bt(Fa,WI);Fa.prototype.Ba=function(){Ot(this.g,"a")};Fa.prototype.Aa=function(t){Ot(this.g,new qI(t))};Fa.prototype.za=function(t){Ot(this.g,new GI)};Fa.prototype.ya=function(){Ot(this.g,"b")};function jj(){this.blockSize=-1}function sr(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}bt(sr,jj);sr.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function lm(t,e,n){n||(n=0);var r=Array(16);if(typeof e=="string")for(var i=0;16>i;++i)r[i]=e.charCodeAt(n++)|e.charCodeAt(n++)<<8|e.charCodeAt(n++)<<16|e.charCodeAt(n++)<<24;else for(i=0;16>i;++i)r[i]=e[n++]|e[n++]<<8|e[n++]<<16|e[n++]<<24;e=t.g[0],n=t.g[1],i=t.g[2];var o=t.g[3],s=e+(o^n&(i^o))+r[0]+3614090360&4294967295;e=n+(s<<7&4294967295|s>>>25),s=o+(i^e&(n^i))+r[1]+3905402710&4294967295,o=e+(s<<12&4294967295|s>>>20),s=i+(n^o&(e^n))+r[2]+606105819&4294967295,i=o+(s<<17&4294967295|s>>>15),s=n+(e^i&(o^e))+r[3]+3250441966&4294967295,n=i+(s<<22&4294967295|s>>>10),s=e+(o^n&(i^o))+r[4]+4118548399&4294967295,e=n+(s<<7&4294967295|s>>>25),s=o+(i^e&(n^i))+r[5]+1200080426&4294967295,o=e+(s<<12&4294967295|s>>>20),s=i+(n^o&(e^n))+r[6]+2821735955&4294967295,i=o+(s<<17&4294967295|s>>>15),s=n+(e^i&(o^e))+r[7]+4249261313&4294967295,n=i+(s<<22&4294967295|s>>>10),s=e+(o^n&(i^o))+r[8]+1770035416&4294967295,e=n+(s<<7&4294967295|s>>>25),s=o+(i^e&(n^i))+r[9]+2336552879&4294967295,o=e+(s<<12&4294967295|s>>>20),s=i+(n^o&(e^n))+r[10]+4294925233&4294967295,i=o+(s<<17&4294967295|s>>>15),s=n+(e^i&(o^e))+r[11]+2304563134&4294967295,n=i+(s<<22&4294967295|s>>>10),s=e+(o^n&(i^o))+r[12]+1804603682&4294967295,e=n+(s<<7&4294967295|s>>>25),s=o+(i^e&(n^i))+r[13]+4254626195&4294967295,o=e+(s<<12&4294967295|s>>>20),s=i+(n^o&(e^n))+r[14]+2792965006&4294967295,i=o+(s<<17&4294967295|s>>>15),s=n+(e^i&(o^e))+r[15]+1236535329&4294967295,n=i+(s<<22&4294967295|s>>>10),s=e+(i^o&(n^i))+r[1]+4129170786&4294967295,e=n+(s<<5&4294967295|s>>>27),s=o+(n^i&(e^n))+r[6]+3225465664&4294967295,o=e+(s<<9&4294967295|s>>>23),s=i+(e^n&(o^e))+r[11]+643717713&4294967295,i=o+(s<<14&4294967295|s>>>18),s=n+(o^e&(i^o))+r[0]+3921069994&4294967295,n=i+(s<<20&4294967295|s>>>12),s=e+(i^o&(n^i))+r[5]+3593408605&4294967295,e=n+(s<<5&4294967295|s>>>27),s=o+(n^i&(e^n))+r[10]+38016083&4294967295,o=e+(s<<9&4294967295|s>>>23),s=i+(e^n&(o^e))+r[15]+3634488961&4294967295,i=o+(s<<14&4294967295|s>>>18),s=n+(o^e&(i^o))+r[4]+3889429448&4294967295,n=i+(s<<20&4294967295|s>>>12),s=e+(i^o&(n^i))+r[9]+568446438&4294967295,e=n+(s<<5&4294967295|s>>>27),s=o+(n^i&(e^n))+r[14]+3275163606&4294967295,o=e+(s<<9&4294967295|s>>>23),s=i+(e^n&(o^e))+r[3]+4107603335&4294967295,i=o+(s<<14&4294967295|s>>>18),s=n+(o^e&(i^o))+r[8]+1163531501&4294967295,n=i+(s<<20&4294967295|s>>>12),s=e+(i^o&(n^i))+r[13]+2850285829&4294967295,e=n+(s<<5&4294967295|s>>>27),s=o+(n^i&(e^n))+r[2]+4243563512&4294967295,o=e+(s<<9&4294967295|s>>>23),s=i+(e^n&(o^e))+r[7]+1735328473&4294967295,i=o+(s<<14&4294967295|s>>>18),s=n+(o^e&(i^o))+r[12]+2368359562&4294967295,n=i+(s<<20&4294967295|s>>>12),s=e+(n^i^o)+r[5]+4294588738&4294967295,e=n+(s<<4&4294967295|s>>>28),s=o+(e^n^i)+r[8]+2272392833&4294967295,o=e+(s<<11&4294967295|s>>>21),s=i+(o^e^n)+r[11]+1839030562&4294967295,i=o+(s<<16&4294967295|s>>>16),s=n+(i^o^e)+r[14]+4259657740&4294967295,n=i+(s<<23&4294967295|s>>>9),s=e+(n^i^o)+r[1]+2763975236&4294967295,e=n+(s<<4&4294967295|s>>>28),s=o+(e^n^i)+r[4]+1272893353&4294967295,o=e+(s<<11&4294967295|s>>>21),s=i+(o^e^n)+r[7]+4139469664&4294967295,i=o+(s<<16&4294967295|s>>>16),s=n+(i^o^e)+r[10]+3200236656&4294967295,n=i+(s<<23&4294967295|s>>>9),s=e+(n^i^o)+r[13]+681279174&4294967295,e=n+(s<<4&4294967295|s>>>28),s=o+(e^n^i)+r[0]+3936430074&4294967295,o=e+(s<<11&4294967295|s>>>21),s=i+(o^e^n)+r[3]+3572445317&4294967295,i=o+(s<<16&4294967295|s>>>16),s=n+(i^o^e)+r[6]+76029189&4294967295,n=i+(s<<23&4294967295|s>>>9),s=e+(n^i^o)+r[9]+3654602809&4294967295,e=n+(s<<4&4294967295|s>>>28),s=o+(e^n^i)+r[12]+3873151461&4294967295,o=e+(s<<11&4294967295|s>>>21),s=i+(o^e^n)+r[15]+530742520&4294967295,i=o+(s<<16&4294967295|s>>>16),s=n+(i^o^e)+r[2]+3299628645&4294967295,n=i+(s<<23&4294967295|s>>>9),s=e+(i^(n|~o))+r[0]+4096336452&4294967295,e=n+(s<<6&4294967295|s>>>26),s=o+(n^(e|~i))+r[7]+1126891415&4294967295,o=e+(s<<10&4294967295|s>>>22),s=i+(e^(o|~n))+r[14]+2878612391&4294967295,i=o+(s<<15&4294967295|s>>>17),s=n+(o^(i|~e))+r[5]+4237533241&4294967295,n=i+(s<<21&4294967295|s>>>11),s=e+(i^(n|~o))+r[12]+1700485571&4294967295,e=n+(s<<6&4294967295|s>>>26),s=o+(n^(e|~i))+r[3]+2399980690&4294967295,o=e+(s<<10&4294967295|s>>>22),s=i+(e^(o|~n))+r[10]+4293915773&4294967295,i=o+(s<<15&4294967295|s>>>17),s=n+(o^(i|~e))+r[1]+2240044497&4294967295,n=i+(s<<21&4294967295|s>>>11),s=e+(i^(n|~o))+r[8]+1873313359&4294967295,e=n+(s<<6&4294967295|s>>>26),s=o+(n^(e|~i))+r[15]+4264355552&4294967295,o=e+(s<<10&4294967295|s>>>22),s=i+(e^(o|~n))+r[6]+2734768916&4294967295,i=o+(s<<15&4294967295|s>>>17),s=n+(o^(i|~e))+r[13]+1309151649&4294967295,n=i+(s<<21&4294967295|s>>>11),s=e+(i^(n|~o))+r[4]+4149444226&4294967295,e=n+(s<<6&4294967295|s>>>26),s=o+(n^(e|~i))+r[11]+3174756917&4294967295,o=e+(s<<10&4294967295|s>>>22),s=i+(e^(o|~n))+r[2]+718787259&4294967295,i=o+(s<<15&4294967295|s>>>17),s=n+(o^(i|~e))+r[9]+3951481745&4294967295,t.g[0]=t.g[0]+e&4294967295,t.g[1]=t.g[1]+(i+(s<<21&4294967295|s>>>11))&4294967295,t.g[2]=t.g[2]+i&4294967295,t.g[3]=t.g[3]+o&4294967295}sr.prototype.j=function(t,e){e===void 0&&(e=t.length);for(var n=e-this.blockSize,r=this.m,i=this.h,o=0;o<e;){if(i==0)for(;o<=n;)lm(this,t,o),o+=this.blockSize;if(typeof t=="string"){for(;o<e;)if(r[i++]=t.charCodeAt(o++),i==this.blockSize){lm(this,r),i=0;break}}else for(;o<e;)if(r[i++]=t[o++],i==this.blockSize){lm(this,r),i=0;break}}this.h=i,this.i+=e};sr.prototype.l=function(){var t=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);t[0]=128;for(var e=1;e<t.length-8;++e)t[e]=0;var n=8*this.i;for(e=t.length-8;e<t.length;++e)t[e]=n&255,n/=256;for(this.j(t),t=Array(16),e=n=0;4>e;++e)for(var r=0;32>r;r+=8)t[n++]=this.g[e]>>>r&255;return t};function ke(t,e){this.h=e;for(var n=[],r=!0,i=t.length-1;0<=i;i--){var o=t[i]|0;r&&o==e||(n[i]=o,r=!1)}this.g=n}var Fj={};function h0(t){return-128<=t&&128>t?G3(t,function(e){return new ke([e|0],0>e?-1:0)}):new ke([t|0],0>t?-1:0)}function xr(t){if(isNaN(t)||!isFinite(t))return na;if(0>t)return Pt(xr(-t));for(var e=[],n=1,r=0;t>=n;r++)e[r]=t/n|0,n*=Yg;return new ke(e,0)}function KI(t,e){if(t.length==0)throw Error("number format error: empty string");if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(t.charAt(0)=="-")return Pt(KI(t.substring(1),e));if(0<=t.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=xr(Math.pow(e,8)),r=na,i=0;i<t.length;i+=8){var o=Math.min(8,t.length-i),s=parseInt(t.substring(i,i+o),e);8>o?(o=xr(Math.pow(e,o)),r=r.R(o).add(xr(s))):(r=r.R(n),r=r.add(xr(s)))}return r}var Yg=4294967296,na=h0(0),Xg=h0(1),SE=h0(16777216);X=ke.prototype;X.ea=function(){if(Mn(this))return-Pt(this).ea();for(var t=0,e=1,n=0;n<this.g.length;n++){var r=this.D(n);t+=(0<=r?r:Yg+r)*e,e*=Yg}return t};X.toString=function(t){if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(Xr(this))return"0";if(Mn(this))return"-"+Pt(this).toString(t);for(var e=xr(Math.pow(t,6)),n=this,r="";;){var i=Af(n,e).g;n=If(n,i.R(e));var o=((0<n.g.length?n.g[0]:n.h)>>>0).toString(t);if(n=i,Xr(n))return o+r;for(;6>o.length;)o="0"+o;r=o+r}};X.D=function(t){return 0>t?0:t<this.g.length?this.g[t]:this.h};function Xr(t){if(t.h!=0)return!1;for(var e=0;e<t.g.length;e++)if(t.g[e]!=0)return!1;return!0}function Mn(t){return t.h==-1}X.X=function(t){return t=If(this,t),Mn(t)?-1:Xr(t)?0:1};function Pt(t){for(var e=t.g.length,n=[],r=0;r<e;r++)n[r]=~t.g[r];return new ke(n,~t.h).add(Xg)}X.abs=function(){return Mn(this)?Pt(this):this};X.add=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0,i=0;i<=e;i++){var o=r+(this.D(i)&65535)+(t.D(i)&65535),s=(o>>>16)+(this.D(i)>>>16)+(t.D(i)>>>16);r=s>>>16,o&=65535,s&=65535,n[i]=s<<16|o}return new ke(n,n[n.length-1]&-2147483648?-1:0)};function If(t,e){return t.add(Pt(e))}X.R=function(t){if(Xr(this)||Xr(t))return na;if(Mn(this))return Mn(t)?Pt(this).R(Pt(t)):Pt(Pt(this).R(t));if(Mn(t))return Pt(this.R(Pt(t)));if(0>this.X(SE)&&0>t.X(SE))return xr(this.ea()*t.ea());for(var e=this.g.length+t.g.length,n=[],r=0;r<2*e;r++)n[r]=0;for(r=0;r<this.g.length;r++)for(var i=0;i<t.g.length;i++){var o=this.D(r)>>>16,s=this.D(r)&65535,a=t.D(i)>>>16,l=t.D(i)&65535;n[2*r+2*i]+=s*l,Jc(n,2*r+2*i),n[2*r+2*i+1]+=o*l,Jc(n,2*r+2*i+1),n[2*r+2*i+1]+=s*a,Jc(n,2*r+2*i+1),n[2*r+2*i+2]+=o*a,Jc(n,2*r+2*i+2)}for(r=0;r<e;r++)n[r]=n[2*r+1]<<16|n[2*r];for(r=e;r<2*e;r++)n[r]=0;return new ke(n,0)};function Jc(t,e){for(;(t[e]&65535)!=t[e];)t[e+1]+=t[e]>>>16,t[e]&=65535,e++}function fl(t,e){this.g=t,this.h=e}function Af(t,e){if(Xr(e))throw Error("division by zero");if(Xr(t))return new fl(na,na);if(Mn(t))return e=Af(Pt(t),e),new fl(Pt(e.g),Pt(e.h));if(Mn(e))return e=Af(t,Pt(e)),new fl(Pt(e.g),e.h);if(30<t.g.length){if(Mn(t)||Mn(e))throw Error("slowDivide_ only works with positive integers.");for(var n=Xg,r=e;0>=r.X(t);)n=CE(n),r=CE(r);var i=xs(n,1),o=xs(r,1);for(r=xs(r,2),n=xs(n,2);!Xr(r);){var s=o.add(r);0>=s.X(t)&&(i=i.add(n),o=s),r=xs(r,1),n=xs(n,1)}return e=If(t,i.R(e)),new fl(i,e)}for(i=na;0<=t.X(e);){for(n=Math.max(1,Math.floor(t.ea()/e.ea())),r=Math.ceil(Math.log(n)/Math.LN2),r=48>=r?1:Math.pow(2,r-48),o=xr(n),s=o.R(e);Mn(s)||0<s.X(t);)n-=r,o=xr(n),s=o.R(e);Xr(o)&&(o=Xg),i=i.add(o),t=If(t,s)}return new fl(i,t)}X.gb=function(t){return Af(this,t).h};X.and=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)&t.D(r);return new ke(n,this.h&t.h)};X.or=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)|t.D(r);return new ke(n,this.h|t.h)};X.xor=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)^t.D(r);return new ke(n,this.h^t.h)};function CE(t){for(var e=t.g.length+1,n=[],r=0;r<e;r++)n[r]=t.D(r)<<1|t.D(r-1)>>>31;return new ke(n,t.h)}function xs(t,e){var n=e>>5;e%=32;for(var r=t.g.length-n,i=[],o=0;o<r;o++)i[o]=0<e?t.D(o+n)>>>e|t.D(o+n+1)<<32-e:t.D(o+n);return new ke(i,t.h)}Cf.prototype.createWebChannel=Cf.prototype.g;Cn.prototype.send=Cn.prototype.u;Cn.prototype.open=Cn.prototype.m;Cn.prototype.close=Cn.prototype.close;Oh.NO_ERROR=0;Oh.TIMEOUT=8;Oh.HTTP_ERROR=6;fI.COMPLETE="complete";hI.EventType=oc;oc.OPEN="a";oc.CLOSE="b";oc.ERROR="c";oc.MESSAGE="d";Tt.prototype.listen=Tt.prototype.O;Ze.prototype.listenOnce=Ze.prototype.P;Ze.prototype.getLastError=Ze.prototype.Sa;Ze.prototype.getLastErrorCode=Ze.prototype.Ia;Ze.prototype.getStatus=Ze.prototype.da;Ze.prototype.getResponseJson=Ze.prototype.Wa;Ze.prototype.getResponseText=Ze.prototype.ja;Ze.prototype.send=Ze.prototype.ha;Ze.prototype.setWithCredentials=Ze.prototype.Oa;sr.prototype.digest=sr.prototype.l;sr.prototype.reset=sr.prototype.reset;sr.prototype.update=sr.prototype.j;ke.prototype.add=ke.prototype.add;ke.prototype.multiply=ke.prototype.R;ke.prototype.modulo=ke.prototype.gb;ke.prototype.compare=ke.prototype.X;ke.prototype.toNumber=ke.prototype.ea;ke.prototype.toString=ke.prototype.toString;ke.prototype.getBits=ke.prototype.D;ke.fromNumber=xr;ke.fromString=KI;var $j=function(){return new Cf},Bj=function(){return Rh()},um=Oh,Uj=fI,zj=cs,IE={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},Hj=lc,Zc=hI,Wj=Ze,qj=sr,ra=ke;const AE="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Bt.UNAUTHENTICATED=new Bt(null),Bt.GOOGLE_CREDENTIALS=new Bt("google-credentials-uid"),Bt.FIRST_PARTY=new Bt("first-party-uid"),Bt.MOCK_USER=new Bt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let $a="10.5.2";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jo=new Ly("@firebase/firestore");function hl(){return Jo.logLevel}function ne(t,...e){if(Jo.logLevel<=we.DEBUG){const n=e.map(p0);Jo.debug(`Firestore (${$a}): ${t}`,...n)}}function si(t,...e){if(Jo.logLevel<=we.ERROR){const n=e.map(p0);Jo.error(`Firestore (${$a}): ${t}`,...n)}}function wa(t,...e){if(Jo.logLevel<=we.WARN){const n=e.map(p0);Jo.warn(`Firestore (${$a}): ${t}`,...n)}}function p0(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ae(t="Unexpected state"){const e=`FIRESTORE (${$a}) INTERNAL ASSERTION FAILED: `+t;throw si(e),new Error(e)}function ze(t,e){t||ae()}function fe(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const H={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class te extends Nr{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zr{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QI{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Gj{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(Bt.UNAUTHENTICATED))}shutdown(){}}class Kj{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class Qj{constructor(e){this.t=e,this.currentUser=Bt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const i=l=>this.i!==r?(r=this.i,n(l)):Promise.resolve();let o=new Zr;this.o=()=>{this.i++,this.currentUser=this.u(),o.resolve(),o=new Zr,e.enqueueRetryable(()=>i(this.currentUser))};const s=()=>{const l=o;e.enqueueRetryable(async()=>{await l.promise,await i(this.currentUser)})},a=l=>{ne("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.auth.addAuthTokenListener(this.o),s()};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(ne("FirebaseAuthCredentialsProvider","Auth not yet detected"),o.resolve(),o=new Zr)}},0),s()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(ne("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(ze(typeof r.accessToken=="string"),new QI(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return ze(e===null||typeof e=="string"),new Bt(e)}}class Yj{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=Bt.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class Xj{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new Yj(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(Bt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Jj{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Zj{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){const r=o=>{o.error!=null&&ne("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${o.error.message}`);const s=o.token!==this.R;return this.R=o.token,ne("FirebaseAppCheckTokenProvider",`Received ${s?"new":"existing"} token.`),s?n(o.token):Promise.resolve()};this.o=o=>{e.enqueueRetryable(()=>r(o))};const i=o=>{ne("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=o,this.appCheck.addTokenListener(this.o)};this.A.onInit(o=>i(o)),setTimeout(()=>{if(!this.appCheck){const o=this.A.getImmediate({optional:!0});o?i(o):ne("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(ze(typeof n.token=="string"),this.R=n.token,new Jj(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eF(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YI{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=eF(40);for(let o=0;o<i.length;++o)r.length<20&&i[o]<n&&(r+=e.charAt(i[o]%e.length))}return r}}function Se(t,e){return t<e?-1:t>e?1:0}function _a(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gt{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new te(H.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new te(H.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new te(H.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new te(H.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return gt.fromMillis(Date.now())}static fromDate(e){return gt.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new gt(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?Se(this.nanoseconds,e.nanoseconds):Se(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class de{constructor(e){this.timestamp=e}static fromTimestamp(e){return new de(e)}static min(){return new de(new gt(0,0))}static max(){return new de(new gt(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ou{constructor(e,n,r){n===void 0?n=0:n>e.length&&ae(),r===void 0?r=e.length-n:r>e.length-n&&ae(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return Ou.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Ou?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const o=e.get(i),s=n.get(i);if(o<s)return-1;if(o>s)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class Be extends Ou{construct(e,n,r){return new Be(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new te(H.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new Be(n)}static emptyPath(){return new Be([])}}const tF=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class kt extends Ou{construct(e,n,r){return new kt(e,n,r)}static isValidIdentifier(e){return tF.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),kt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new kt(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const o=()=>{if(r.length===0)throw new te(H.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let s=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new te(H.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[i+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new te(H.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,i+=2}else a==="`"?(s=!s,i++):a!=="."||s?(r+=a,i++):(o(),i++)}if(o(),s)throw new te(H.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new kt(n)}static emptyPath(){return new kt([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class re{constructor(e){this.path=e}static fromPath(e){return new re(Be.fromString(e))}static fromName(e){return new re(Be.fromString(e).popFirst(5))}static empty(){return new re(Be.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Be.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Be.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new re(new Be(e.slice()))}}function nF(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=de.fromTimestamp(r===1e9?new gt(n+1,0):new gt(n,r));return new Zi(i,re.empty(),e)}function rF(t){return new Zi(t.readTime,t.key,-1)}class Zi{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new Zi(de.min(),re.empty(),-1)}static max(){return new Zi(de.max(),re.empty(),-1)}}function iF(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=re.comparator(t.documentKey,e.documentKey),n!==0?n:Se(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oF="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class sF{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function dc(t){if(t.code!==H.FAILED_PRECONDITION||t.message!==oF)throw t;ne("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&ae(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new K((r,i)=>{this.nextCallback=o=>{this.wrapSuccess(e,o).next(r,i)},this.catchCallback=o=>{this.wrapFailure(n,o).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof K?n:K.resolve(n)}catch(n){return K.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):K.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):K.reject(n)}static resolve(e){return new K((n,r)=>{n(e)})}static reject(e){return new K((n,r)=>{r(e)})}static waitFor(e){return new K((n,r)=>{let i=0,o=0,s=!1;e.forEach(a=>{++i,a.next(()=>{++o,s&&o===i&&n()},l=>r(l))}),s=!0,o===i&&n()})}static or(e){let n=K.resolve(!1);for(const r of e)n=n.next(i=>i?K.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,o)=>{r.push(n.call(this,i,o))}),this.waitFor(r)}static mapArray(e,n){return new K((r,i)=>{const o=e.length,s=new Array(o);let a=0;for(let l=0;l<o;l++){const u=l;n(e[u]).next(d=>{s[u]=d,++a,a===o&&r(s)},d=>i(d))}})}static doWhile(e,n){return new K((r,i)=>{const o=()=>{e()===!0?n().next(()=>{o()},i):r()};o()})}}function fc(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class m0{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.se(r),this.oe=r=>n.writeSequenceNumber(r))}se(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.oe&&this.oe(e),e}}m0._e=-1;function $h(t){return t==null}function Pf(t){return t===0&&1/t==-1/0}function aF(t){return typeof t=="number"&&Number.isInteger(t)&&!Pf(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function PE(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Ba(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function XI(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ye{constructor(e,n){this.comparator=e,this.root=n||At.EMPTY}insert(e,n){return new Ye(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,At.BLACK,null,null))}remove(e){return new Ye(this.comparator,this.root.remove(e,this.comparator).copy(null,null,At.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new ed(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new ed(this.root,e,this.comparator,!1)}getReverseIterator(){return new ed(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new ed(this.root,e,this.comparator,!0)}}class ed{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let o=1;for(;!e.isEmpty();)if(o=n?r(e.key,n):1,n&&i&&(o*=-1),o<0)e=this.isReverse?e.left:e.right;else{if(o===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class At{constructor(e,n,r,i,o){this.key=e,this.value=n,this.color=r??At.RED,this.left=i??At.EMPTY,this.right=o??At.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,o){return new At(e??this.key,n??this.value,r??this.color,i??this.left,o??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const o=r(e,i.key);return i=o<0?i.copy(null,null,null,i.left.insert(e,n,r),null):o===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return At.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return At.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,At.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,At.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw ae();const e=this.left.check();if(e!==this.right.check())throw ae();return e+(this.isRed()?0:1)}}At.EMPTY=null,At.RED=!0,At.BLACK=!1;At.EMPTY=new class{constructor(){this.size=0}get key(){throw ae()}get value(){throw ae()}get color(){throw ae()}get left(){throw ae()}get right(){throw ae()}copy(e,n,r,i,o){return this}insert(e,n,r){return new At(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dt{constructor(e){this.comparator=e,this.data=new Ye(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new kE(this.data.getIterator())}getIteratorFrom(e){return new kE(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof Dt)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,o=r.getNext().key;if(this.comparator(i,o)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Dt(this.comparator);return n.data=e,n}}class kE{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jn{constructor(e){this.fields=e,e.sort(kt.comparator)}static empty(){return new Jn([])}unionWith(e){let n=new Dt(kt.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Jn(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return _a(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JI extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qt{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(o){throw typeof DOMException<"u"&&o instanceof DOMException?new JI("Invalid base64 string: "+o):o}}(e);return new Qt(n)}static fromUint8Array(e){const n=function(i){let o="";for(let s=0;s<i.length;++s)o+=String.fromCharCode(i[s]);return o}(e);return new Qt(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Se(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Qt.EMPTY_BYTE_STRING=new Qt("");const lF=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function eo(t){if(ze(!!t),typeof t=="string"){let e=0;const n=lF.exec(t);if(ze(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:ct(t.seconds),nanos:ct(t.nanos)}}function ct(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Zo(t){return typeof t=="string"?Qt.fromBase64String(t):Qt.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function g0(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function v0(t){const e=t.mapValue.fields.__previous_value__;return g0(e)?v0(e):e}function Du(t){const e=eo(t.mapValue.fields.__local_write_time__.timestampValue);return new gt(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uF{constructor(e,n,r,i,o,s,a,l,u){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=o,this.forceLongPolling=s,this.autoDetectLongPolling=a,this.longPollingOptions=l,this.useFetchStreams=u}}class Nu{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Nu("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Nu&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const td={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function es(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?g0(t)?4:cF(t)?9007199254740991:10:ae()}function Or(t,e){if(t===e)return!0;const n=es(t);if(n!==es(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Du(t).isEqual(Du(e));case 3:return function(i,o){if(typeof i.timestampValue=="string"&&typeof o.timestampValue=="string"&&i.timestampValue.length===o.timestampValue.length)return i.timestampValue===o.timestampValue;const s=eo(i.timestampValue),a=eo(o.timestampValue);return s.seconds===a.seconds&&s.nanos===a.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,o){return Zo(i.bytesValue).isEqual(Zo(o.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,o){return ct(i.geoPointValue.latitude)===ct(o.geoPointValue.latitude)&&ct(i.geoPointValue.longitude)===ct(o.geoPointValue.longitude)}(t,e);case 2:return function(i,o){if("integerValue"in i&&"integerValue"in o)return ct(i.integerValue)===ct(o.integerValue);if("doubleValue"in i&&"doubleValue"in o){const s=ct(i.doubleValue),a=ct(o.doubleValue);return s===a?Pf(s)===Pf(a):isNaN(s)&&isNaN(a)}return!1}(t,e);case 9:return _a(t.arrayValue.values||[],e.arrayValue.values||[],Or);case 10:return function(i,o){const s=i.mapValue.fields||{},a=o.mapValue.fields||{};if(PE(s)!==PE(a))return!1;for(const l in s)if(s.hasOwnProperty(l)&&(a[l]===void 0||!Or(s[l],a[l])))return!1;return!0}(t,e);default:return ae()}}function Lu(t,e){return(t.values||[]).find(n=>Or(n,e))!==void 0}function Ea(t,e){if(t===e)return 0;const n=es(t),r=es(e);if(n!==r)return Se(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return Se(t.booleanValue,e.booleanValue);case 2:return function(o,s){const a=ct(o.integerValue||o.doubleValue),l=ct(s.integerValue||s.doubleValue);return a<l?-1:a>l?1:a===l?0:isNaN(a)?isNaN(l)?0:-1:1}(t,e);case 3:return RE(t.timestampValue,e.timestampValue);case 4:return RE(Du(t),Du(e));case 5:return Se(t.stringValue,e.stringValue);case 6:return function(o,s){const a=Zo(o),l=Zo(s);return a.compareTo(l)}(t.bytesValue,e.bytesValue);case 7:return function(o,s){const a=o.split("/"),l=s.split("/");for(let u=0;u<a.length&&u<l.length;u++){const d=Se(a[u],l[u]);if(d!==0)return d}return Se(a.length,l.length)}(t.referenceValue,e.referenceValue);case 8:return function(o,s){const a=Se(ct(o.latitude),ct(s.latitude));return a!==0?a:Se(ct(o.longitude),ct(s.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(o,s){const a=o.values||[],l=s.values||[];for(let u=0;u<a.length&&u<l.length;++u){const d=Ea(a[u],l[u]);if(d)return d}return Se(a.length,l.length)}(t.arrayValue,e.arrayValue);case 10:return function(o,s){if(o===td.mapValue&&s===td.mapValue)return 0;if(o===td.mapValue)return 1;if(s===td.mapValue)return-1;const a=o.fields||{},l=Object.keys(a),u=s.fields||{},d=Object.keys(u);l.sort(),d.sort();for(let h=0;h<l.length&&h<d.length;++h){const p=Se(l[h],d[h]);if(p!==0)return p;const g=Ea(a[l[h]],u[d[h]]);if(g!==0)return g}return Se(l.length,d.length)}(t.mapValue,e.mapValue);default:throw ae()}}function RE(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return Se(t,e);const n=eo(t),r=eo(e),i=Se(n.seconds,r.seconds);return i!==0?i:Se(n.nanos,r.nanos)}function xa(t){return Jg(t)}function Jg(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=eo(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return Zo(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return re.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",i=!0;for(const o of n.values||[])i?i=!1:r+=",",r+=Jg(o);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let i="{",o=!0;for(const s of r)o?o=!1:i+=",",i+=`${s}:${Jg(n.fields[s])}`;return i+"}"}(t.mapValue):ae()}function OE(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function Zg(t){return!!t&&"integerValue"in t}function y0(t){return!!t&&"arrayValue"in t}function DE(t){return!!t&&"nullValue"in t}function NE(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Rd(t){return!!t&&"mapValue"in t}function zl(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Ba(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=zl(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=zl(t.arrayValue.values[n]);return e}return Object.assign({},t)}function cF(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vn{constructor(e){this.value=e}static empty(){return new Vn({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Rd(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=zl(n)}setAll(e){let n=kt.emptyPath(),r={},i=[];e.forEach((s,a)=>{if(!n.isImmediateParentOf(a)){const l=this.getFieldsMap(n);this.applyChanges(l,r,i),r={},i=[],n=a.popLast()}s?r[a.lastSegment()]=zl(s):i.push(a.lastSegment())});const o=this.getFieldsMap(n);this.applyChanges(o,r,i)}delete(e){const n=this.field(e.popLast());Rd(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Or(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];Rd(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){Ba(n,(i,o)=>e[i]=o);for(const i of r)delete e[i]}clone(){return new Vn(zl(this.value))}}function ZI(t){const e=[];return Ba(t.fields,(n,r)=>{const i=new kt([n]);if(Rd(r)){const o=ZI(r.mapValue).fields;if(o.length===0)e.push(i);else for(const s of o)e.push(i.child(s))}else e.push(i)}),new Jn(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zt{constructor(e,n,r,i,o,s,a){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=o,this.data=s,this.documentState=a}static newInvalidDocument(e){return new zt(e,0,de.min(),de.min(),de.min(),Vn.empty(),0)}static newFoundDocument(e,n,r,i){return new zt(e,1,n,de.min(),r,i,0)}static newNoDocument(e,n){return new zt(e,2,n,de.min(),de.min(),Vn.empty(),0)}static newUnknownDocument(e,n){return new zt(e,3,n,de.min(),de.min(),Vn.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(de.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Vn.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Vn.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=de.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof zt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new zt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kf{constructor(e,n){this.position=e,this.inclusive=n}}function LE(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const o=e[i],s=t.position[i];if(o.field.isKeyField()?r=re.comparator(re.fromName(s.referenceValue),n.key):r=Ea(s,n.data.field(o.field)),o.dir==="desc"&&(r*=-1),r!==0)break}return r}function ME(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Or(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rf{constructor(e,n="asc"){this.field=e,this.dir=n}}function dF(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class e2{}class ht extends e2{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new hF(e,n,r):n==="array-contains"?new gF(e,r):n==="in"?new vF(e,r):n==="not-in"?new yF(e,r):n==="array-contains-any"?new wF(e,r):new ht(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new pF(e,r):new mF(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(Ea(n,this.value)):n!==null&&es(this.value)===es(n)&&this.matchesComparison(Ea(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return ae()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class ar extends e2{constructor(e,n){super(),this.filters=e,this.op=n,this.ue=null}static create(e,n){return new ar(e,n)}matches(e){return t2(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ue!==null||(this.ue=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ue}getFilters(){return Object.assign([],this.filters)}}function t2(t){return t.op==="and"}function n2(t){return fF(t)&&t2(t)}function fF(t){for(const e of t.filters)if(e instanceof ar)return!1;return!0}function ev(t){if(t instanceof ht)return t.field.canonicalString()+t.op.toString()+xa(t.value);if(n2(t))return t.filters.map(e=>ev(e)).join(",");{const e=t.filters.map(n=>ev(n)).join(",");return`${t.op}(${e})`}}function r2(t,e){return t instanceof ht?function(r,i){return i instanceof ht&&r.op===i.op&&r.field.isEqual(i.field)&&Or(r.value,i.value)}(t,e):t instanceof ar?function(r,i){return i instanceof ar&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((o,s,a)=>o&&r2(s,i.filters[a]),!0):!1}(t,e):void ae()}function i2(t){return t instanceof ht?function(n){return`${n.field.canonicalString()} ${n.op} ${xa(n.value)}`}(t):t instanceof ar?function(n){return n.op.toString()+" {"+n.getFilters().map(i2).join(" ,")+"}"}(t):"Filter"}class hF extends ht{constructor(e,n,r){super(e,n,r),this.key=re.fromName(r.referenceValue)}matches(e){const n=re.comparator(e.key,this.key);return this.matchesComparison(n)}}class pF extends ht{constructor(e,n){super(e,"in",n),this.keys=o2("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class mF extends ht{constructor(e,n){super(e,"not-in",n),this.keys=o2("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function o2(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>re.fromName(r.referenceValue))}class gF extends ht{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return y0(n)&&Lu(n.arrayValue,this.value)}}class vF extends ht{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Lu(this.value.arrayValue,n)}}class yF extends ht{constructor(e,n){super(e,"not-in",n)}matches(e){if(Lu(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Lu(this.value.arrayValue,n)}}class wF extends ht{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!y0(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Lu(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _F{constructor(e,n=null,r=[],i=[],o=null,s=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=o,this.startAt=s,this.endAt=a,this.ce=null}}function VE(t,e=null,n=[],r=[],i=null,o=null,s=null){return new _F(t,e,n,r,i,o,s)}function w0(t){const e=fe(t);if(e.ce===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>ev(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(o){return o.field.canonicalString()+o.dir}(r)).join(","),$h(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>xa(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>xa(r)).join(",")),e.ce=n}return e.ce}function _0(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!dF(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!r2(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!ME(t.startAt,e.startAt)&&ME(t.endAt,e.endAt)}function tv(t){return re.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hc{constructor(e,n=null,r=[],i=[],o=null,s="F",a=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=o,this.limitType=s,this.startAt=a,this.endAt=l,this.le=null,this.he=null,this.Pe=null,this.startAt,this.endAt}}function EF(t,e,n,r,i,o,s,a){return new hc(t,e,n,r,i,o,s,a)}function E0(t){return new hc(t)}function jE(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function s2(t){return t.collectionGroup!==null}function Hl(t){const e=fe(t);if(e.le===null){e.le=[];const n=new Set;for(const o of e.explicitOrderBy)e.le.push(o),n.add(o.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(s){let a=new Dt(kt.comparator);return s.filters.forEach(l=>{l.getFlattenedFilters().forEach(u=>{u.isInequality()&&(a=a.add(u.field))})}),a})(e).forEach(o=>{n.has(o.canonicalString())||o.isKeyField()||e.le.push(new Rf(o,r))}),n.has(kt.keyField().canonicalString())||e.le.push(new Rf(kt.keyField(),r))}return e.le}function kr(t){const e=fe(t);return e.he||(e.he=xF(e,Hl(t))),e.he}function xF(t,e){if(t.limitType==="F")return VE(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(i=>{const o=i.dir==="desc"?"asc":"desc";return new Rf(i.field,o)});const n=t.endAt?new kf(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new kf(t.startAt.position,t.startAt.inclusive):null;return VE(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function nv(t,e){const n=t.filters.concat([e]);return new hc(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function rv(t,e,n){return new hc(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Bh(t,e){return _0(kr(t),kr(e))&&t.limitType===e.limitType}function a2(t){return`${w0(kr(t))}|lt:${t.limitType}`}function Ps(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(i=>i2(i)).join(", ")}]`),$h(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(i=>function(s){return`${s.field.canonicalString()} (${s.dir})`}(i)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(i=>xa(i)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(i=>xa(i)).join(",")),`Target(${r})`}(kr(t))}; limitType=${t.limitType})`}function Uh(t,e){return e.isFoundDocument()&&function(r,i){const o=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(o):re.isDocumentKey(r.path)?r.path.isEqual(o):r.path.isImmediateParentOf(o)}(t,e)&&function(r,i){for(const o of Hl(r))if(!o.field.isKeyField()&&i.data.field(o.field)===null)return!1;return!0}(t,e)&&function(r,i){for(const o of r.filters)if(!o.matches(i))return!1;return!0}(t,e)&&function(r,i){return!(r.startAt&&!function(s,a,l){const u=LE(s,a,l);return s.inclusive?u<=0:u<0}(r.startAt,Hl(r),i)||r.endAt&&!function(s,a,l){const u=LE(s,a,l);return s.inclusive?u>=0:u>0}(r.endAt,Hl(r),i))}(t,e)}function TF(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function l2(t){return(e,n)=>{let r=!1;for(const i of Hl(t)){const o=bF(i,e,n);if(o!==0)return o;r=r||i.field.isKeyField()}return 0}}function bF(t,e,n){const r=t.field.isKeyField()?re.comparator(e.key,n.key):function(o,s,a){const l=s.data.field(o),u=a.data.field(o);return l!==null&&u!==null?Ea(l,u):ae()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return ae()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ua{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,o]of r)if(this.equalsFn(i,e))return o}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let o=0;o<i.length;o++)if(this.equalsFn(i[o][0],e))return void(i[o]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){Ba(this.inner,(n,r)=>{for(const[i,o]of r)e(i,o)})}isEmpty(){return XI(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const SF=new Ye(re.comparator);function ai(){return SF}const u2=new Ye(re.comparator);function Cl(...t){let e=u2;for(const n of t)e=e.insert(n.key,n);return e}function c2(t){let e=u2;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function Do(){return Wl()}function d2(){return Wl()}function Wl(){return new Ua(t=>t.toString(),(t,e)=>t.isEqual(e))}const CF=new Ye(re.comparator),IF=new Dt(re.comparator);function ge(...t){let e=IF;for(const n of t)e=e.add(n);return e}const AF=new Dt(Se);function PF(){return AF}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function f2(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Pf(e)?"-0":e}}function h2(t){return{integerValue:""+t}}function kF(t,e){return aF(e)?h2(e):f2(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zh{constructor(){this._=void 0}}function RF(t,e,n){return t instanceof Of?function(i,o){const s={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return o&&g0(o)&&(o=v0(o)),o&&(s.fields.__previous_value__=o),{mapValue:s}}(n,e):t instanceof Mu?m2(t,e):t instanceof Vu?g2(t,e):function(i,o){const s=p2(i,o),a=FE(s)+FE(i.Ie);return Zg(s)&&Zg(i.Ie)?h2(a):f2(i.serializer,a)}(t,e)}function OF(t,e,n){return t instanceof Mu?m2(t,e):t instanceof Vu?g2(t,e):n}function p2(t,e){return t instanceof Df?function(r){return Zg(r)||function(o){return!!o&&"doubleValue"in o}(r)}(e)?e:{integerValue:0}:null}class Of extends zh{}class Mu extends zh{constructor(e){super(),this.elements=e}}function m2(t,e){const n=v2(e);for(const r of t.elements)n.some(i=>Or(i,r))||n.push(r);return{arrayValue:{values:n}}}class Vu extends zh{constructor(e){super(),this.elements=e}}function g2(t,e){let n=v2(e);for(const r of t.elements)n=n.filter(i=>!Or(i,r));return{arrayValue:{values:n}}}class Df extends zh{constructor(e,n){super(),this.serializer=e,this.Ie=n}}function FE(t){return ct(t.integerValue||t.doubleValue)}function v2(t){return y0(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function DF(t,e){return t.field.isEqual(e.field)&&function(r,i){return r instanceof Mu&&i instanceof Mu||r instanceof Vu&&i instanceof Vu?_a(r.elements,i.elements,Or):r instanceof Df&&i instanceof Df?Or(r.Ie,i.Ie):r instanceof Of&&i instanceof Of}(t.transform,e.transform)}class NF{constructor(e,n){this.version=e,this.transformResults=n}}class nr{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new nr}static exists(e){return new nr(void 0,e)}static updateTime(e){return new nr(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Od(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Hh{}function y2(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new x0(t.key,nr.none()):new pc(t.key,t.data,nr.none());{const n=t.data,r=Vn.empty();let i=new Dt(kt.comparator);for(let o of e.fields)if(!i.has(o)){let s=n.field(o);s===null&&o.length>1&&(o=o.popLast(),s=n.field(o)),s===null?r.delete(o):r.set(o,s),i=i.add(o)}return new ds(t.key,r,new Jn(i.toArray()),nr.none())}}function LF(t,e,n){t instanceof pc?function(i,o,s){const a=i.value.clone(),l=BE(i.fieldTransforms,o,s.transformResults);a.setAll(l),o.convertToFoundDocument(s.version,a).setHasCommittedMutations()}(t,e,n):t instanceof ds?function(i,o,s){if(!Od(i.precondition,o))return void o.convertToUnknownDocument(s.version);const a=BE(i.fieldTransforms,o,s.transformResults),l=o.data;l.setAll(w2(i)),l.setAll(a),o.convertToFoundDocument(s.version,l).setHasCommittedMutations()}(t,e,n):function(i,o,s){o.convertToNoDocument(s.version).setHasCommittedMutations()}(0,e,n)}function ql(t,e,n,r){return t instanceof pc?function(o,s,a,l){if(!Od(o.precondition,s))return a;const u=o.value.clone(),d=UE(o.fieldTransforms,l,s);return u.setAll(d),s.convertToFoundDocument(s.version,u).setHasLocalMutations(),null}(t,e,n,r):t instanceof ds?function(o,s,a,l){if(!Od(o.precondition,s))return a;const u=UE(o.fieldTransforms,l,s),d=s.data;return d.setAll(w2(o)),d.setAll(u),s.convertToFoundDocument(s.version,d).setHasLocalMutations(),a===null?null:a.unionWith(o.fieldMask.fields).unionWith(o.fieldTransforms.map(h=>h.field))}(t,e,n,r):function(o,s,a){return Od(o.precondition,s)?(s.convertToNoDocument(s.version).setHasLocalMutations(),null):a}(t,e,n)}function MF(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),o=p2(r.transform,i||null);o!=null&&(n===null&&(n=Vn.empty()),n.set(r.field,o))}return n||null}function $E(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&_a(r,i,(o,s)=>DF(o,s))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class pc extends Hh{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class ds extends Hh{constructor(e,n,r,i,o=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=o,this.type=1}getFieldMask(){return this.fieldMask}}function w2(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function BE(t,e,n){const r=new Map;ze(t.length===n.length);for(let i=0;i<n.length;i++){const o=t[i],s=o.transform,a=e.data.field(o.field);r.set(o.field,OF(s,a,n[i]))}return r}function UE(t,e,n){const r=new Map;for(const i of t){const o=i.transform,s=n.data.field(i.field);r.set(i.field,RF(o,s,e))}return r}class x0 extends Hh{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class VF extends Hh{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jF{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const o=this.mutations[i];o.key.isEqual(e.key)&&LF(o,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=ql(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=ql(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=d2();return this.mutations.forEach(i=>{const o=e.get(i.key),s=o.overlayedDocument;let a=this.applyToLocalView(s,o.mutatedFields);a=n.has(i.key)?null:a;const l=y2(s,a);l!==null&&r.set(i.key,l),s.isValidDocument()||s.convertToNoDocument(de.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),ge())}isEqual(e){return this.batchId===e.batchId&&_a(this.mutations,e.mutations,(n,r)=>$E(n,r))&&_a(this.baseMutations,e.baseMutations,(n,r)=>$E(n,r))}}class T0{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){ze(e.mutations.length===r.length);let i=function(){return CF}();const o=e.mutations;for(let s=0;s<o.length;s++)i=i.insert(o[s].key,r[s].version);return new T0(e,n,r,i)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FF{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $F{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ut,_e;function BF(t){switch(t){default:return ae();case H.CANCELLED:case H.UNKNOWN:case H.DEADLINE_EXCEEDED:case H.RESOURCE_EXHAUSTED:case H.INTERNAL:case H.UNAVAILABLE:case H.UNAUTHENTICATED:return!1;case H.INVALID_ARGUMENT:case H.NOT_FOUND:case H.ALREADY_EXISTS:case H.PERMISSION_DENIED:case H.FAILED_PRECONDITION:case H.ABORTED:case H.OUT_OF_RANGE:case H.UNIMPLEMENTED:case H.DATA_LOSS:return!0}}function _2(t){if(t===void 0)return si("GRPC error has no .code"),H.UNKNOWN;switch(t){case ut.OK:return H.OK;case ut.CANCELLED:return H.CANCELLED;case ut.UNKNOWN:return H.UNKNOWN;case ut.DEADLINE_EXCEEDED:return H.DEADLINE_EXCEEDED;case ut.RESOURCE_EXHAUSTED:return H.RESOURCE_EXHAUSTED;case ut.INTERNAL:return H.INTERNAL;case ut.UNAVAILABLE:return H.UNAVAILABLE;case ut.UNAUTHENTICATED:return H.UNAUTHENTICATED;case ut.INVALID_ARGUMENT:return H.INVALID_ARGUMENT;case ut.NOT_FOUND:return H.NOT_FOUND;case ut.ALREADY_EXISTS:return H.ALREADY_EXISTS;case ut.PERMISSION_DENIED:return H.PERMISSION_DENIED;case ut.FAILED_PRECONDITION:return H.FAILED_PRECONDITION;case ut.ABORTED:return H.ABORTED;case ut.OUT_OF_RANGE:return H.OUT_OF_RANGE;case ut.UNIMPLEMENTED:return H.UNIMPLEMENTED;case ut.DATA_LOSS:return H.DATA_LOSS;default:return ae()}}(_e=ut||(ut={}))[_e.OK=0]="OK",_e[_e.CANCELLED=1]="CANCELLED",_e[_e.UNKNOWN=2]="UNKNOWN",_e[_e.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",_e[_e.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",_e[_e.NOT_FOUND=5]="NOT_FOUND",_e[_e.ALREADY_EXISTS=6]="ALREADY_EXISTS",_e[_e.PERMISSION_DENIED=7]="PERMISSION_DENIED",_e[_e.UNAUTHENTICATED=16]="UNAUTHENTICATED",_e[_e.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",_e[_e.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",_e[_e.ABORTED=10]="ABORTED",_e[_e.OUT_OF_RANGE=11]="OUT_OF_RANGE",_e[_e.UNIMPLEMENTED=12]="UNIMPLEMENTED",_e[_e.INTERNAL=13]="INTERNAL",_e[_e.UNAVAILABLE=14]="UNAVAILABLE",_e[_e.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function UF(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zF=new ra([4294967295,4294967295],0);function zE(t){const e=UF().encode(t),n=new qj;return n.update(e),new Uint8Array(n.digest())}function HE(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),o=e.getUint32(12,!0);return[new ra([n,r],0),new ra([i,o],0)]}class b0{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new Il(`Invalid padding: ${n}`);if(r<0)throw new Il(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Il(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new Il(`Invalid padding when bitmap length is 0: ${n}`);this.Te=8*e.length-n,this.Ee=ra.fromNumber(this.Te)}de(e,n,r){let i=e.add(n.multiply(ra.fromNumber(r)));return i.compare(zF)===1&&(i=new ra([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Ee).toNumber()}Ae(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Te===0)return!1;const n=zE(e),[r,i]=HE(n);for(let o=0;o<this.hashCount;o++){const s=this.de(r,i,o);if(!this.Ae(s))return!1}return!0}static create(e,n,r){const i=e%8==0?0:8-e%8,o=new Uint8Array(Math.ceil(e/8)),s=new b0(o,i,n);return r.forEach(a=>s.insert(a)),s}insert(e){if(this.Te===0)return;const n=zE(e),[r,i]=HE(n);for(let o=0;o<this.hashCount;o++){const s=this.de(r,i,o);this.Re(s)}}Re(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class Il extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wh{constructor(e,n,r,i,o){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=o}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,mc.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new Wh(de.min(),i,new Ye(Se),ai(),ge())}}class mc{constructor(e,n,r,i,o){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=o}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new mc(r,n,ge(),ge(),ge())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dd{constructor(e,n,r,i){this.Ve=e,this.removedTargetIds=n,this.key=r,this.me=i}}class E2{constructor(e,n){this.targetId=e,this.fe=n}}class x2{constructor(e,n,r=Qt.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class WE{constructor(){this.ge=0,this.pe=GE(),this.ye=Qt.EMPTY_BYTE_STRING,this.we=!1,this.Se=!0}get current(){return this.we}get resumeToken(){return this.ye}get be(){return this.ge!==0}get De(){return this.Se}Ce(e){e.approximateByteSize()>0&&(this.Se=!0,this.ye=e)}ve(){let e=ge(),n=ge(),r=ge();return this.pe.forEach((i,o)=>{switch(o){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:ae()}}),new mc(this.ye,this.we,e,n,r)}Fe(){this.Se=!1,this.pe=GE()}Me(e,n){this.Se=!0,this.pe=this.pe.insert(e,n)}xe(e){this.Se=!0,this.pe=this.pe.remove(e)}Oe(){this.ge+=1}Ne(){this.ge-=1}Be(){this.Se=!0,this.we=!0}}class HF{constructor(e){this.Le=e,this.ke=new Map,this.qe=ai(),this.Qe=qE(),this.Ke=new Ye(Se)}$e(e){for(const n of e.Ve)e.me&&e.me.isFoundDocument()?this.Ue(n,e.me):this.We(n,e.key,e.me);for(const n of e.removedTargetIds)this.We(n,e.key,e.me)}Ge(e){this.forEachTarget(e,n=>{const r=this.ze(n);switch(e.state){case 0:this.je(n)&&r.Ce(e.resumeToken);break;case 1:r.Ne(),r.be||r.Fe(),r.Ce(e.resumeToken);break;case 2:r.Ne(),r.be||this.removeTarget(n);break;case 3:this.je(n)&&(r.Be(),r.Ce(e.resumeToken));break;case 4:this.je(n)&&(this.He(n),r.Ce(e.resumeToken));break;default:ae()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.ke.forEach((r,i)=>{this.je(i)&&n(i)})}Je(e){const n=e.targetId,r=e.fe.count,i=this.Ye(n);if(i){const o=i.target;if(tv(o))if(r===0){const s=new re(o.path);this.We(n,s,zt.newNoDocument(s,de.min()))}else ze(r===1);else{const s=this.Ze(n);if(s!==r){const a=this.Xe(e),l=a?this.et(a,e,s):1;if(l!==0){this.He(n);const u=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ke=this.Ke.insert(n,u)}}}}}Xe(e){const n=e.fe.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:o=0}=n;let s,a;try{s=Zo(r).toUint8Array()}catch(l){if(l instanceof JI)return wa("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw l}try{a=new b0(s,i,o)}catch(l){return wa(l instanceof Il?"BloomFilter error: ":"Applying bloom filter failed: ",l),null}return a.Te===0?null:a}et(e,n,r){return n.fe.count===r-this.rt(e,n.targetId)?0:2}rt(e,n){const r=this.Le.getRemoteKeysForTarget(n);let i=0;return r.forEach(o=>{const s=this.Le.nt(),a=`projects/${s.projectId}/databases/${s.database}/documents/${o.path.canonicalString()}`;e.mightContain(a)||(this.We(n,o,null),i++)}),i}it(e){const n=new Map;this.ke.forEach((o,s)=>{const a=this.Ye(s);if(a){if(o.current&&tv(a.target)){const l=new re(a.target.path);this.qe.get(l)!==null||this.st(s,l)||this.We(s,l,zt.newNoDocument(l,e))}o.De&&(n.set(s,o.ve()),o.Fe())}});let r=ge();this.Qe.forEach((o,s)=>{let a=!0;s.forEachWhile(l=>{const u=this.Ye(l);return!u||u.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(o))}),this.qe.forEach((o,s)=>s.setReadTime(e));const i=new Wh(e,n,this.Ke,this.qe,r);return this.qe=ai(),this.Qe=qE(),this.Ke=new Ye(Se),i}Ue(e,n){if(!this.je(e))return;const r=this.st(e,n.key)?2:0;this.ze(e).Me(n.key,r),this.qe=this.qe.insert(n.key,n),this.Qe=this.Qe.insert(n.key,this.ot(n.key).add(e))}We(e,n,r){if(!this.je(e))return;const i=this.ze(e);this.st(e,n)?i.Me(n,1):i.xe(n),this.Qe=this.Qe.insert(n,this.ot(n).delete(e)),r&&(this.qe=this.qe.insert(n,r))}removeTarget(e){this.ke.delete(e)}Ze(e){const n=this.ze(e).ve();return this.Le.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Oe(e){this.ze(e).Oe()}ze(e){let n=this.ke.get(e);return n||(n=new WE,this.ke.set(e,n)),n}ot(e){let n=this.Qe.get(e);return n||(n=new Dt(Se),this.Qe=this.Qe.insert(e,n)),n}je(e){const n=this.Ye(e)!==null;return n||ne("WatchChangeAggregator","Detected inactive target",e),n}Ye(e){const n=this.ke.get(e);return n&&n.be?null:this.Le._t(e)}He(e){this.ke.set(e,new WE),this.Le.getRemoteKeysForTarget(e).forEach(n=>{this.We(e,n,null)})}st(e,n){return this.Le.getRemoteKeysForTarget(e).has(n)}}function qE(){return new Ye(re.comparator)}function GE(){return new Ye(re.comparator)}const WF=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),qF=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),GF=(()=>({and:"AND",or:"OR"}))();class KF{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function iv(t,e){return t.useProto3Json||$h(e)?e:{value:e}}function Nf(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function T2(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function QF(t,e){return Nf(t,e.toTimestamp())}function Rr(t){return ze(!!t),de.fromTimestamp(function(n){const r=eo(n);return new gt(r.seconds,r.nanos)}(t))}function S0(t,e){return function(r){return new Be(["projects",r.projectId,"databases",r.database])}(t).child("documents").child(e).canonicalString()}function b2(t){const e=Be.fromString(t);return ze(A2(e)),e}function ov(t,e){return S0(t.databaseId,e.path)}function cm(t,e){const n=b2(e);if(n.get(1)!==t.databaseId.projectId)throw new te(H.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new te(H.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new re(S2(n))}function sv(t,e){return S0(t.databaseId,e)}function YF(t){const e=b2(t);return e.length===4?Be.emptyPath():S2(e)}function av(t){return new Be(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function S2(t){return ze(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function KE(t,e,n){return{name:ov(t,e),fields:n.value.mapValue.fields}}function XF(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(u){return u==="NO_CHANGE"?0:u==="ADD"?1:u==="REMOVE"?2:u==="CURRENT"?3:u==="RESET"?4:ae()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],o=function(u,d){return u.useProto3Json?(ze(d===void 0||typeof d=="string"),Qt.fromBase64String(d||"")):(ze(d===void 0||d instanceof Uint8Array),Qt.fromUint8Array(d||new Uint8Array))}(t,e.targetChange.resumeToken),s=e.targetChange.cause,a=s&&function(u){const d=u.code===void 0?H.UNKNOWN:_2(u.code);return new te(d,u.message||"")}(s);n=new x2(r,i,o,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=cm(t,r.document.name),o=Rr(r.document.updateTime),s=r.document.createTime?Rr(r.document.createTime):de.min(),a=new Vn({mapValue:{fields:r.document.fields}}),l=zt.newFoundDocument(i,o,s,a),u=r.targetIds||[],d=r.removedTargetIds||[];n=new Dd(u,d,l.key,l)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=cm(t,r.document),o=r.readTime?Rr(r.readTime):de.min(),s=zt.newNoDocument(i,o),a=r.removedTargetIds||[];n=new Dd([],a,s.key,s)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=cm(t,r.document),o=r.removedTargetIds||[];n=new Dd([],o,i,null)}else{if(!("filter"in e))return ae();{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:o}=r,s=new $F(i,o),a=r.targetId;n=new E2(a,s)}}return n}function JF(t,e){let n;if(e instanceof pc)n={update:KE(t,e.key,e.value)};else if(e instanceof x0)n={delete:ov(t,e.key)};else if(e instanceof ds)n={update:KE(t,e.key,e.data),updateMask:a$(e.fieldMask)};else{if(!(e instanceof VF))return ae();n={verify:ov(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(o,s){const a=s.transform;if(a instanceof Of)return{fieldPath:s.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof Mu)return{fieldPath:s.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof Vu)return{fieldPath:s.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof Df)return{fieldPath:s.field.canonicalString(),increment:a.Ie};throw ae()}(0,r))),e.precondition.isNone||(n.currentDocument=function(i,o){return o.updateTime!==void 0?{updateTime:QF(i,o.updateTime)}:o.exists!==void 0?{exists:o.exists}:ae()}(t,e.precondition)),n}function ZF(t,e){return t&&t.length>0?(ze(e!==void 0),t.map(n=>function(i,o){let s=i.updateTime?Rr(i.updateTime):Rr(o);return s.isEqual(de.min())&&(s=Rr(o)),new NF(s,i.transformResults||[])}(n,e))):[]}function e$(t,e){return{documents:[sv(t,e.path)]}}function t$(t,e){const n={structuredQuery:{}},r=e.path;e.collectionGroup!==null?(n.parent=sv(t,r),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=sv(t,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const i=function(l){if(l.length!==0)return I2(ar.create(l,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const o=function(l){if(l.length!==0)return l.map(u=>function(h){return{field:ks(h.field),direction:i$(h.dir)}}(u))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const s=iv(t,e.limit);return s!==null&&(n.structuredQuery.limit=s),e.startAt&&(n.structuredQuery.startAt=function(l){return{before:l.inclusive,values:l.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(l){return{before:!l.inclusive,values:l.position}}(e.endAt)),n}function n$(t){let e=YF(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){ze(r===1);const d=n.from[0];d.allDescendants?i=d.collectionId:e=e.child(d.collectionId)}let o=[];n.where&&(o=function(h){const p=C2(h);return p instanceof ar&&n2(p)?p.getFilters():[p]}(n.where));let s=[];n.orderBy&&(s=function(h){return h.map(p=>function(T){return new Rf(Rs(T.field),function(S){switch(S){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(T.direction))}(p))}(n.orderBy));let a=null;n.limit&&(a=function(h){let p;return p=typeof h=="object"?h.value:h,$h(p)?null:p}(n.limit));let l=null;n.startAt&&(l=function(h){const p=!!h.before,g=h.values||[];return new kf(g,p)}(n.startAt));let u=null;return n.endAt&&(u=function(h){const p=!h.before,g=h.values||[];return new kf(g,p)}(n.endAt)),EF(e,i,s,o,a,"F",l,u)}function r$(t,e){const n=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return ae()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function C2(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=Rs(n.unaryFilter.field);return ht.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=Rs(n.unaryFilter.field);return ht.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const o=Rs(n.unaryFilter.field);return ht.create(o,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const s=Rs(n.unaryFilter.field);return ht.create(s,"!=",{nullValue:"NULL_VALUE"});default:return ae()}}(t):t.fieldFilter!==void 0?function(n){return ht.create(Rs(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return ae()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return ar.create(n.compositeFilter.filters.map(r=>C2(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return ae()}}(n.compositeFilter.op))}(t):ae()}function i$(t){return WF[t]}function o$(t){return qF[t]}function s$(t){return GF[t]}function ks(t){return{fieldPath:t.canonicalString()}}function Rs(t){return kt.fromServerFormat(t.fieldPath)}function I2(t){return t instanceof ht?function(n){if(n.op==="=="){if(NE(n.value))return{unaryFilter:{field:ks(n.field),op:"IS_NAN"}};if(DE(n.value))return{unaryFilter:{field:ks(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(NE(n.value))return{unaryFilter:{field:ks(n.field),op:"IS_NOT_NAN"}};if(DE(n.value))return{unaryFilter:{field:ks(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:ks(n.field),op:o$(n.op),value:n.value}}}(t):t instanceof ar?function(n){const r=n.getFilters().map(i=>I2(i));return r.length===1?r[0]:{compositeFilter:{op:s$(n.op),filters:r}}}(t):ae()}function a$(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function A2(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oi{constructor(e,n,r,i,o=de.min(),s=de.min(),a=Qt.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=o,this.lastLimboFreeSnapshotVersion=s,this.resumeToken=a,this.expectedCount=l}withSequenceNumber(e){return new Oi(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new Oi(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Oi(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Oi(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class l${constructor(e){this.ut=e}}function u$(t){const e=n$({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?rv(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class c${constructor(){this.on=new d$}addToCollectionParentIndex(e,n){return this.on.add(n),K.resolve()}getCollectionParents(e,n){return K.resolve(this.on.getEntries(n))}addFieldIndex(e,n){return K.resolve()}deleteFieldIndex(e,n){return K.resolve()}deleteAllFieldIndexes(e){return K.resolve()}createTargetIndexes(e,n){return K.resolve()}getDocumentsMatchingTarget(e,n){return K.resolve(null)}getIndexType(e,n){return K.resolve(0)}getFieldIndexes(e,n){return K.resolve([])}getNextCollectionGroupToUpdate(e){return K.resolve(null)}getMinOffset(e,n){return K.resolve(Zi.min())}getMinOffsetFromCollectionGroup(e,n){return K.resolve(Zi.min())}updateCollectionGroup(e,n,r){return K.resolve()}updateIndexEntries(e,n){return K.resolve()}}class d${constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new Dt(Be.comparator),o=!i.has(r);return this.index[n]=i.add(r),o}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new Dt(Be.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ta{constructor(e){this.xn=e}next(){return this.xn+=2,this.xn}static On(){return new Ta(0)}static Nn(){return new Ta(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class f${constructor(){this.changes=new Ua(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,zt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?K.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class h${constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class p${constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&ql(r.mutation,i,Jn.empty(),gt.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,ge()).next(()=>r))}getLocalViewOfDocuments(e,n,r=ge()){const i=Do();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(o=>{let s=Cl();return o.forEach((a,l)=>{s=s.insert(a,l.overlayedDocument)}),s}))}getOverlayedDocuments(e,n){const r=Do();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,ge()))}populateOverlays(e,n,r){const i=[];return r.forEach(o=>{n.has(o)||i.push(o)}),this.documentOverlayCache.getOverlays(e,i).next(o=>{o.forEach((s,a)=>{n.set(s,a)})})}computeViews(e,n,r,i){let o=ai();const s=Wl(),a=function(){return Wl()}();return n.forEach((l,u)=>{const d=r.get(u.key);i.has(u.key)&&(d===void 0||d.mutation instanceof ds)?o=o.insert(u.key,u):d!==void 0?(s.set(u.key,d.mutation.getFieldMask()),ql(d.mutation,u,d.mutation.getFieldMask(),gt.now())):s.set(u.key,Jn.empty())}),this.recalculateAndSaveOverlays(e,o).next(l=>(l.forEach((u,d)=>s.set(u,d)),n.forEach((u,d)=>{var h;return a.set(u,new h$(d,(h=s.get(u))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,n){const r=Wl();let i=new Ye((s,a)=>s-a),o=ge();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(s=>{for(const a of s)a.keys().forEach(l=>{const u=n.get(l);if(u===null)return;let d=r.get(l)||Jn.empty();d=a.applyToLocalView(u,d),r.set(l,d);const h=(i.get(a.batchId)||ge()).add(l);i=i.insert(a.batchId,h)})}).next(()=>{const s=[],a=i.getReverseIterator();for(;a.hasNext();){const l=a.getNext(),u=l.key,d=l.value,h=d2();d.forEach(p=>{if(!o.has(p)){const g=y2(n.get(p),r.get(p));g!==null&&h.set(p,g),o=o.add(p)}}),s.push(this.documentOverlayCache.saveOverlays(e,u,h))}return K.waitFor(s)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,i){return function(s){return re.isDocumentKey(s.path)&&s.collectionGroup===null&&s.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):s2(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,i):this.getDocumentsMatchingCollectionQuery(e,n,r,i)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(o=>{const s=i-o.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-o.size):K.resolve(Do());let a=-1,l=o;return s.next(u=>K.forEach(u,(d,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),o.get(d)?K.resolve():this.remoteDocumentCache.getEntry(e,d).next(p=>{l=l.insert(d,p)}))).next(()=>this.populateOverlays(e,u,o)).next(()=>this.computeViews(e,l,u,ge())).next(d=>({batchId:a,changes:c2(d)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new re(n)).next(r=>{let i=Cl();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r,i){const o=n.collectionGroup;let s=Cl();return this.indexManager.getCollectionParents(e,o).next(a=>K.forEach(a,l=>{const u=function(h,p){return new hc(p,null,h.explicitOrderBy.slice(),h.filters.slice(),h.limit,h.limitType,h.startAt,h.endAt)}(n,l.child(o));return this.getDocumentsMatchingCollectionQuery(e,u,r,i).next(d=>{d.forEach((h,p)=>{s=s.insert(h,p)})})}).next(()=>s))}getDocumentsMatchingCollectionQuery(e,n,r,i){let o;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(s=>(o=s,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,o,i))).next(s=>{o.forEach((l,u)=>{const d=u.getKey();s.get(d)===null&&(s=s.insert(d,zt.newInvalidDocument(d)))});let a=Cl();return s.forEach((l,u)=>{const d=o.get(l);d!==void 0&&ql(d.mutation,u,Jn.empty(),gt.now()),Uh(n,u)&&(a=a.insert(l,u))}),a})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class m${constructor(e){this.serializer=e,this.ur=new Map,this.cr=new Map}getBundleMetadata(e,n){return K.resolve(this.ur.get(n))}saveBundleMetadata(e,n){return this.ur.set(n.id,function(i){return{id:i.id,version:i.version,createTime:Rr(i.createTime)}}(n)),K.resolve()}getNamedQuery(e,n){return K.resolve(this.cr.get(n))}saveNamedQuery(e,n){return this.cr.set(n.name,function(i){return{name:i.name,query:u$(i.bundledQuery),readTime:Rr(i.readTime)}}(n)),K.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class g${constructor(){this.overlays=new Ye(re.comparator),this.lr=new Map}getOverlay(e,n){return K.resolve(this.overlays.get(n))}getOverlays(e,n){const r=Do();return K.forEach(n,i=>this.getOverlay(e,i).next(o=>{o!==null&&r.set(i,o)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,o)=>{this.lt(e,n,o)}),K.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.lr.get(r);return i!==void 0&&(i.forEach(o=>this.overlays=this.overlays.remove(o)),this.lr.delete(r)),K.resolve()}getOverlaysForCollection(e,n,r){const i=Do(),o=n.length+1,s=new re(n.child("")),a=this.overlays.getIteratorFrom(s);for(;a.hasNext();){const l=a.getNext().value,u=l.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===o&&l.largestBatchId>r&&i.set(l.getKey(),l)}return K.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let o=new Ye((u,d)=>u-d);const s=this.overlays.getIterator();for(;s.hasNext();){const u=s.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>r){let d=o.get(u.largestBatchId);d===null&&(d=Do(),o=o.insert(u.largestBatchId,d)),d.set(u.getKey(),u)}}const a=Do(),l=o.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((u,d)=>a.set(u,d)),!(a.size()>=i)););return K.resolve(a)}lt(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const s=this.lr.get(i.largestBatchId).delete(r.key);this.lr.set(i.largestBatchId,s)}this.overlays=this.overlays.insert(r.key,new FF(n,r));let o=this.lr.get(n);o===void 0&&(o=ge(),this.lr.set(n,o)),this.lr.set(n,o.add(r.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class C0{constructor(){this.hr=new Dt(wt.Pr),this.Ir=new Dt(wt.Tr)}isEmpty(){return this.hr.isEmpty()}addReference(e,n){const r=new wt(e,n);this.hr=this.hr.add(r),this.Ir=this.Ir.add(r)}Er(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.dr(new wt(e,n))}Ar(e,n){e.forEach(r=>this.removeReference(r,n))}Rr(e){const n=new re(new Be([])),r=new wt(n,e),i=new wt(n,e+1),o=[];return this.Ir.forEachInRange([r,i],s=>{this.dr(s),o.push(s.key)}),o}Vr(){this.hr.forEach(e=>this.dr(e))}dr(e){this.hr=this.hr.delete(e),this.Ir=this.Ir.delete(e)}mr(e){const n=new re(new Be([])),r=new wt(n,e),i=new wt(n,e+1);let o=ge();return this.Ir.forEachInRange([r,i],s=>{o=o.add(s.key)}),o}containsKey(e){const n=new wt(e,0),r=this.hr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class wt{constructor(e,n){this.key=e,this.gr=n}static Pr(e,n){return re.comparator(e.key,n.key)||Se(e.gr,n.gr)}static Tr(e,n){return Se(e.gr,n.gr)||re.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class v${constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.pr=1,this.yr=new Dt(wt.Pr)}checkEmpty(e){return K.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const o=this.pr;this.pr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const s=new jF(o,n,r,i);this.mutationQueue.push(s);for(const a of i)this.yr=this.yr.add(new wt(a.key,o)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return K.resolve(s)}lookupMutationBatch(e,n){return K.resolve(this.wr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.Sr(r),o=i<0?0:i;return K.resolve(this.mutationQueue.length>o?this.mutationQueue[o]:null)}getHighestUnacknowledgedBatchId(){return K.resolve(this.mutationQueue.length===0?-1:this.pr-1)}getAllMutationBatches(e){return K.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new wt(n,0),i=new wt(n,Number.POSITIVE_INFINITY),o=[];return this.yr.forEachInRange([r,i],s=>{const a=this.wr(s.gr);o.push(a)}),K.resolve(o)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new Dt(Se);return n.forEach(i=>{const o=new wt(i,0),s=new wt(i,Number.POSITIVE_INFINITY);this.yr.forEachInRange([o,s],a=>{r=r.add(a.gr)})}),K.resolve(this.br(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let o=r;re.isDocumentKey(o)||(o=o.child(""));const s=new wt(new re(o),0);let a=new Dt(Se);return this.yr.forEachWhile(l=>{const u=l.key.path;return!!r.isPrefixOf(u)&&(u.length===i&&(a=a.add(l.gr)),!0)},s),K.resolve(this.br(a))}br(e){const n=[];return e.forEach(r=>{const i=this.wr(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){ze(this.Dr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.yr;return K.forEach(n.mutations,i=>{const o=new wt(i.key,n.batchId);return r=r.delete(o),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.yr=r})}Fn(e){}containsKey(e,n){const r=new wt(n,0),i=this.yr.firstAfterOrEqual(r);return K.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,K.resolve()}Dr(e,n){return this.Sr(e)}Sr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}wr(e){const n=this.Sr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class y${constructor(e){this.Cr=e,this.docs=function(){return new Ye(re.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),o=i?i.size:0,s=this.Cr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:s}),this.size+=s-o,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return K.resolve(r?r.document.mutableCopy():zt.newInvalidDocument(n))}getEntries(e,n){let r=ai();return n.forEach(i=>{const o=this.docs.get(i);r=r.insert(i,o?o.document.mutableCopy():zt.newInvalidDocument(i))}),K.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let o=ai();const s=n.path,a=new re(s.child("")),l=this.docs.getIteratorFrom(a);for(;l.hasNext();){const{key:u,value:{document:d}}=l.getNext();if(!s.isPrefixOf(u.path))break;u.path.length>s.length+1||iF(rF(d),r)<=0||(i.has(d.key)||Uh(n,d))&&(o=o.insert(d.key,d.mutableCopy()))}return K.resolve(o)}getAllFromCollectionGroup(e,n,r,i){ae()}vr(e,n){return K.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new w$(this)}getSize(e){return K.resolve(this.size)}}class w$ extends f${constructor(e){super(),this._r=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this._r.addEntry(e,i)):this._r.removeEntry(r)}),K.waitFor(n)}getFromCache(e,n){return this._r.getEntry(e,n)}getAllFromCache(e,n){return this._r.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _${constructor(e){this.persistence=e,this.Fr=new Ua(n=>w0(n),_0),this.lastRemoteSnapshotVersion=de.min(),this.highestTargetId=0,this.Mr=0,this.Or=new C0,this.targetCount=0,this.Nr=Ta.On()}forEachTarget(e,n){return this.Fr.forEach((r,i)=>n(i)),K.resolve()}getLastRemoteSnapshotVersion(e){return K.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return K.resolve(this.Mr)}allocateTargetId(e){return this.highestTargetId=this.Nr.next(),K.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Mr&&(this.Mr=n),K.resolve()}kn(e){this.Fr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Nr=new Ta(n),this.highestTargetId=n),e.sequenceNumber>this.Mr&&(this.Mr=e.sequenceNumber)}addTargetData(e,n){return this.kn(n),this.targetCount+=1,K.resolve()}updateTargetData(e,n){return this.kn(n),K.resolve()}removeTargetData(e,n){return this.Fr.delete(n.target),this.Or.Rr(n.targetId),this.targetCount-=1,K.resolve()}removeTargets(e,n,r){let i=0;const o=[];return this.Fr.forEach((s,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Fr.delete(s),o.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),K.waitFor(o).next(()=>i)}getTargetCount(e){return K.resolve(this.targetCount)}getTargetData(e,n){const r=this.Fr.get(n)||null;return K.resolve(r)}addMatchingKeys(e,n,r){return this.Or.Er(n,r),K.resolve()}removeMatchingKeys(e,n,r){this.Or.Ar(n,r);const i=this.persistence.referenceDelegate,o=[];return i&&n.forEach(s=>{o.push(i.markPotentiallyOrphaned(e,s))}),K.waitFor(o)}removeMatchingKeysForTargetId(e,n){return this.Or.Rr(n),K.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Or.mr(n);return K.resolve(r)}containsKey(e,n){return K.resolve(this.Or.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class E${constructor(e,n){this.Br={},this.overlays={},this.Lr=new m0(0),this.kr=!1,this.kr=!0,this.referenceDelegate=e(this),this.qr=new _$(this),this.indexManager=new c$,this.remoteDocumentCache=function(i){return new y$(i)}(r=>this.referenceDelegate.Qr(r)),this.serializer=new l$(n),this.Kr=new m$(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.kr=!1,Promise.resolve()}get started(){return this.kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new g$,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.Br[e.toKey()];return r||(r=new v$(n,this.referenceDelegate),this.Br[e.toKey()]=r),r}getTargetCache(){return this.qr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Kr}runTransaction(e,n,r){ne("MemoryPersistence","Starting transaction:",e);const i=new x$(this.Lr.next());return this.referenceDelegate.$r(),r(i).next(o=>this.referenceDelegate.Ur(i).next(()=>o)).toPromise().then(o=>(i.raiseOnCommittedEvent(),o))}Wr(e,n){return K.or(Object.values(this.Br).map(r=>()=>r.containsKey(e,n)))}}class x$ extends sF{constructor(e){super(),this.currentSequenceNumber=e}}class I0{constructor(e){this.persistence=e,this.Gr=new C0,this.zr=null}static jr(e){return new I0(e)}get Hr(){if(this.zr)return this.zr;throw ae()}addReference(e,n,r){return this.Gr.addReference(r,n),this.Hr.delete(r.toString()),K.resolve()}removeReference(e,n,r){return this.Gr.removeReference(r,n),this.Hr.add(r.toString()),K.resolve()}markPotentiallyOrphaned(e,n){return this.Hr.add(n.toString()),K.resolve()}removeTarget(e,n){this.Gr.Rr(n.targetId).forEach(i=>this.Hr.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(o=>this.Hr.add(o.toString()))}).next(()=>r.removeTargetData(e,n))}$r(){this.zr=new Set}Ur(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return K.forEach(this.Hr,r=>{const i=re.fromPath(r);return this.Jr(e,i).next(o=>{o||n.removeEntry(i,de.min())})}).next(()=>(this.zr=null,n.apply(e)))}updateLimboDocument(e,n){return this.Jr(e,n).next(r=>{r?this.Hr.delete(n.toString()):this.Hr.add(n.toString())})}Qr(e){return 0}Jr(e,n){return K.or([()=>K.resolve(this.Gr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Wr(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class A0{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.ki=r,this.qi=i}static Qi(e,n){let r=ge(),i=ge();for(const o of n.docChanges)switch(o.type){case 0:r=r.add(o.doc.key);break;case 1:i=i.add(o.doc.key)}return new A0(e,n.fromCache,r,i)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class T${constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class b${constructor(){this.Ki=!1,this.$i=!1,this.Ui=100,this.Wi=8}initialize(e,n){this.Gi=e,this.indexManager=n,this.Ki=!0}getDocumentsMatchingQuery(e,n,r,i){const o={result:null};return this.zi(e,n).next(s=>{o.result=s}).next(()=>{if(!o.result)return this.ji(e,n,i,r).next(s=>{o.result=s})}).next(()=>{if(o.result)return;const s=new T$;return this.Hi(e,n,s).next(a=>{if(o.result=a,this.$i)return this.Ji(e,n,s,a.size)})}).next(()=>o.result)}Ji(e,n,r,i){return r.documentReadCount<this.Ui?(hl()<=we.DEBUG&&ne("QueryEngine","SDK will not create cache indexes for query:",Ps(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Ui,"documents"),K.resolve()):(hl()<=we.DEBUG&&ne("QueryEngine","Query:",Ps(n),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.Wi*i?(hl()<=we.DEBUG&&ne("QueryEngine","The SDK decides to create cache indexes for query:",Ps(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,kr(n))):K.resolve())}zi(e,n){if(jE(n))return K.resolve(null);let r=kr(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=rv(n,null,"F"),r=kr(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(o=>{const s=ge(...o);return this.Gi.getDocuments(e,s).next(a=>this.indexManager.getMinOffset(e,r).next(l=>{const u=this.Yi(n,a);return this.Zi(n,u,s,l.readTime)?this.zi(e,rv(n,null,"F")):this.Xi(e,u,n,l)}))})))}ji(e,n,r,i){return jE(n)||i.isEqual(de.min())?K.resolve(null):this.Gi.getDocuments(e,r).next(o=>{const s=this.Yi(n,o);return this.Zi(n,s,r,i)?K.resolve(null):(hl()<=we.DEBUG&&ne("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Ps(n)),this.Xi(e,s,n,nF(i,-1)).next(a=>a))})}Yi(e,n){let r=new Dt(l2(e));return n.forEach((i,o)=>{Uh(e,o)&&(r=r.add(o))}),r}Zi(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const o=e.limitType==="F"?n.last():n.first();return!!o&&(o.hasPendingWrites||o.version.compareTo(i)>0)}Hi(e,n,r){return hl()<=we.DEBUG&&ne("QueryEngine","Using full collection scan to execute query:",Ps(n)),this.Gi.getDocumentsMatchingQuery(e,n,Zi.min(),r)}Xi(e,n,r,i){return this.Gi.getDocumentsMatchingQuery(e,r,i).next(o=>(n.forEach(s=>{o=o.insert(s.key,s)}),o))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class S${constructor(e,n,r,i){this.persistence=e,this.es=n,this.serializer=i,this.ts=new Ye(Se),this.ns=new Ua(o=>w0(o),_0),this.rs=new Map,this.ss=e.getRemoteDocumentCache(),this.qr=e.getTargetCache(),this.Kr=e.getBundleCache(),this.os(r)}os(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new p$(this.ss,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.ss.setIndexManager(this.indexManager),this.es.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.ts))}}function C$(t,e,n,r){return new S$(t,e,n,r)}async function P2(t,e){const n=fe(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(o=>(i=o,n.os(e),n.mutationQueue.getAllMutationBatches(r))).next(o=>{const s=[],a=[];let l=ge();for(const u of i){s.push(u.batchId);for(const d of u.mutations)l=l.add(d.key)}for(const u of o){a.push(u.batchId);for(const d of u.mutations)l=l.add(d.key)}return n.localDocuments.getDocuments(r,l).next(u=>({_s:u,removedBatchIds:s,addedBatchIds:a}))})})}function I$(t,e){const n=fe(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),o=n.ss.newChangeBuffer({trackRemovals:!0});return function(a,l,u,d){const h=u.batch,p=h.keys();let g=K.resolve();return p.forEach(T=>{g=g.next(()=>d.getEntry(l,T)).next(b=>{const S=u.docVersions.get(T);ze(S!==null),b.version.compareTo(S)<0&&(h.applyToRemoteDocument(b,u),b.isValidDocument()&&(b.setReadTime(u.commitVersion),d.addEntry(b)))})}),g.next(()=>a.mutationQueue.removeMutationBatch(l,h))}(n,r,e,o).next(()=>o.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(a){let l=ge();for(let u=0;u<a.mutationResults.length;++u)a.mutationResults[u].transformResults.length>0&&(l=l.add(a.batch.mutations[u].key));return l}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function k2(t){const e=fe(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.qr.getLastRemoteSnapshotVersion(n))}function A$(t,e){const n=fe(t),r=e.snapshotVersion;let i=n.ts;return n.persistence.runTransaction("Apply remote event","readwrite-primary",o=>{const s=n.ss.newChangeBuffer({trackRemovals:!0});i=n.ts;const a=[];e.targetChanges.forEach((d,h)=>{const p=i.get(h);if(!p)return;a.push(n.qr.removeMatchingKeys(o,d.removedDocuments,h).next(()=>n.qr.addMatchingKeys(o,d.addedDocuments,h)));let g=p.withSequenceNumber(o.currentSequenceNumber);e.targetMismatches.get(h)!==null?g=g.withResumeToken(Qt.EMPTY_BYTE_STRING,de.min()).withLastLimboFreeSnapshotVersion(de.min()):d.resumeToken.approximateByteSize()>0&&(g=g.withResumeToken(d.resumeToken,r)),i=i.insert(h,g),function(b,S,E){return b.resumeToken.approximateByteSize()===0||S.snapshotVersion.toMicroseconds()-b.snapshotVersion.toMicroseconds()>=3e8?!0:E.addedDocuments.size+E.modifiedDocuments.size+E.removedDocuments.size>0}(p,g,d)&&a.push(n.qr.updateTargetData(o,g))});let l=ai(),u=ge();if(e.documentUpdates.forEach(d=>{e.resolvedLimboDocuments.has(d)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(o,d))}),a.push(P$(o,s,e.documentUpdates).next(d=>{l=d.us,u=d.cs})),!r.isEqual(de.min())){const d=n.qr.getLastRemoteSnapshotVersion(o).next(h=>n.qr.setTargetsMetadata(o,o.currentSequenceNumber,r));a.push(d)}return K.waitFor(a).next(()=>s.apply(o)).next(()=>n.localDocuments.getLocalViewOfDocuments(o,l,u)).next(()=>l)}).then(o=>(n.ts=i,o))}function P$(t,e,n){let r=ge(),i=ge();return n.forEach(o=>r=r.add(o)),e.getEntries(t,r).next(o=>{let s=ai();return n.forEach((a,l)=>{const u=o.get(a);l.isFoundDocument()!==u.isFoundDocument()&&(i=i.add(a)),l.isNoDocument()&&l.version.isEqual(de.min())?(e.removeEntry(a,l.readTime),s=s.insert(a,l)):!u.isValidDocument()||l.version.compareTo(u.version)>0||l.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(l),s=s.insert(a,l)):ne("LocalStore","Ignoring outdated watch update for ",a,". Current version:",u.version," Watch version:",l.version)}),{us:s,cs:i}})}function k$(t,e){const n=fe(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function R$(t,e){const n=fe(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.qr.getTargetData(r,e).next(o=>o?(i=o,K.resolve(i)):n.qr.allocateTargetId(r).next(s=>(i=new Oi(e,s,"TargetPurposeListen",r.currentSequenceNumber),n.qr.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.ts.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.ts=n.ts.insert(r.targetId,r),n.ns.set(e,r.targetId)),r})}async function lv(t,e,n){const r=fe(t),i=r.ts.get(e),o=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",o,s=>r.persistence.referenceDelegate.removeTarget(s,i))}catch(s){if(!fc(s))throw s;ne("LocalStore",`Failed to update sequence numbers for target ${e}: ${s}`)}r.ts=r.ts.remove(e),r.ns.delete(i.target)}function QE(t,e,n){const r=fe(t);let i=de.min(),o=ge();return r.persistence.runTransaction("Execute query","readwrite",s=>function(l,u,d){const h=fe(l),p=h.ns.get(d);return p!==void 0?K.resolve(h.ts.get(p)):h.qr.getTargetData(u,d)}(r,s,kr(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,r.qr.getMatchingKeysForTargetId(s,a.targetId).next(l=>{o=l})}).next(()=>r.es.getDocumentsMatchingQuery(s,e,n?i:de.min(),n?o:ge())).next(a=>(O$(r,TF(e),a),{documents:a,ls:o})))}function O$(t,e,n){let r=t.rs.get(e)||de.min();n.forEach((i,o)=>{o.readTime.compareTo(r)>0&&(r=o.readTime)}),t.rs.set(e,r)}class YE{constructor(){this.activeTargetIds=PF()}ds(e){this.activeTargetIds=this.activeTargetIds.add(e)}As(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Es(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class D${constructor(){this.eo=new YE,this.no={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this.eo.ds(e),this.no[e]||"not-current"}updateQueryState(e,n,r){this.no[e]=n}removeLocalQueryTarget(e){this.eo.As(e)}isLocalQueryTarget(e){return this.eo.activeTargetIds.has(e)}clearQueryState(e){delete this.no[e]}getAllActiveQueryTargets(){return this.eo.activeTargetIds}isActiveQueryTarget(e){return this.eo.activeTargetIds.has(e)}start(){return this.eo=new YE,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class N${ro(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XE{constructor(){this.io=()=>this.so(),this.oo=()=>this._o(),this.ao=[],this.uo()}ro(e){this.ao.push(e)}shutdown(){window.removeEventListener("online",this.io),window.removeEventListener("offline",this.oo)}uo(){window.addEventListener("online",this.io),window.addEventListener("offline",this.oo)}so(){ne("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ao)e(0)}_o(){ne("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ao)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let nd=null;function dm(){return nd===null?nd=function(){return 268435456+Math.round(2147483648*Math.random())}():nd++,"0x"+nd.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const L$={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M${constructor(e){this.co=e.co,this.lo=e.lo}ho(e){this.Po=e}Io(e){this.To=e}onMessage(e){this.Eo=e}close(){this.lo()}send(e){this.co(e)}Ao(){this.Po()}Ro(e){this.To(e)}Vo(e){this.Eo(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ft="WebChannelConnection";class V$ extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),o=encodeURIComponent(this.databaseId.database);this.mo=r+"://"+n.host,this.fo=`projects/${i}/databases/${o}`,this.po=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${o}`}get yo(){return!1}wo(n,r,i,o,s){const a=dm(),l=this.So(n,r);ne("RestConnection",`Sending RPC '${n}' ${a}:`,l,i);const u={"google-cloud-resource-prefix":this.fo,"x-goog-request-params":this.po};return this.bo(u,o,s),this.Do(n,l,u,i).then(d=>(ne("RestConnection",`Received RPC '${n}' ${a}: `,d),d),d=>{throw wa("RestConnection",`RPC '${n}' ${a} failed with error: `,d,"url: ",l,"request:",i),d})}Co(n,r,i,o,s,a){return this.wo(n,r,i,o,s)}bo(n,r,i){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+$a}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((o,s)=>n[s]=o),i&&i.headers.forEach((o,s)=>n[s]=o)}So(n,r){const i=L$[n];return`${this.mo}/v1/${r}:${i}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Do(e,n,r,i){const o=dm();return new Promise((s,a)=>{const l=new Wj;l.setWithCredentials(!0),l.listenOnce(Uj.COMPLETE,()=>{try{switch(l.getLastErrorCode()){case um.NO_ERROR:const d=l.getResponseJson();ne(Ft,`XHR for RPC '${e}' ${o} received:`,JSON.stringify(d)),s(d);break;case um.TIMEOUT:ne(Ft,`RPC '${e}' ${o} timed out`),a(new te(H.DEADLINE_EXCEEDED,"Request time out"));break;case um.HTTP_ERROR:const h=l.getStatus();if(ne(Ft,`RPC '${e}' ${o} failed with status:`,h,"response text:",l.getResponseText()),h>0){let p=l.getResponseJson();Array.isArray(p)&&(p=p[0]);const g=p==null?void 0:p.error;if(g&&g.status&&g.message){const T=function(S){const E=S.toLowerCase().replace(/_/g,"-");return Object.values(H).indexOf(E)>=0?E:H.UNKNOWN}(g.status);a(new te(T,g.message))}else a(new te(H.UNKNOWN,"Server responded with status "+l.getStatus()))}else a(new te(H.UNAVAILABLE,"Connection failed."));break;default:ae()}}finally{ne(Ft,`RPC '${e}' ${o} completed.`)}});const u=JSON.stringify(i);ne(Ft,`RPC '${e}' ${o} sending request:`,i),l.send(n,"POST",u,r,15)})}vo(e,n,r){const i=dm(),o=[this.mo,"/","google.firestore.v1.Firestore","/",e,"/channel"],s=$j(),a=Bj(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(l.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(l.xmlHttpFactory=new Hj({})),this.bo(l.initMessageHeaders,n,r),l.encodeInitMessageHeaders=!0;const d=o.join("");ne(Ft,`Creating RPC '${e}' stream ${i}: ${d}`,l);const h=s.createWebChannel(d,l);let p=!1,g=!1;const T=new M$({co:S=>{g?ne(Ft,`Not sending because RPC '${e}' stream ${i} is closed:`,S):(p||(ne(Ft,`Opening RPC '${e}' stream ${i} transport.`),h.open(),p=!0),ne(Ft,`RPC '${e}' stream ${i} sending:`,S),h.send(S))},lo:()=>h.close()}),b=(S,E,m)=>{S.listen(E,v=>{try{m(v)}catch(x){setTimeout(()=>{throw x},0)}})};return b(h,Zc.EventType.OPEN,()=>{g||ne(Ft,`RPC '${e}' stream ${i} transport opened.`)}),b(h,Zc.EventType.CLOSE,()=>{g||(g=!0,ne(Ft,`RPC '${e}' stream ${i} transport closed`),T.Ro())}),b(h,Zc.EventType.ERROR,S=>{g||(g=!0,wa(Ft,`RPC '${e}' stream ${i} transport errored:`,S),T.Ro(new te(H.UNAVAILABLE,"The operation could not be completed")))}),b(h,Zc.EventType.MESSAGE,S=>{var E;if(!g){const m=S.data[0];ze(!!m);const v=m,x=v.error||((E=v[0])===null||E===void 0?void 0:E.error);if(x){ne(Ft,`RPC '${e}' stream ${i} received error:`,x);const A=x.status;let k=function(O){const D=ut[O];if(D!==void 0)return _2(D)}(A),P=x.message;k===void 0&&(k=H.INTERNAL,P="Unknown error status: "+A+" with message "+x.message),g=!0,T.Ro(new te(k,P)),h.close()}else ne(Ft,`RPC '${e}' stream ${i} received:`,m),T.Vo(m)}}),b(a,zj.STAT_EVENT,S=>{S.stat===IE.PROXY?ne(Ft,`RPC '${e}' stream ${i} detected buffering proxy`):S.stat===IE.NOPROXY&&ne(Ft,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{T.Ao()},0),T}}function fm(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qh(t){return new KF(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R2{constructor(e,n,r=1e3,i=1.5,o=6e4){this.si=e,this.timerId=n,this.Fo=r,this.Mo=i,this.xo=o,this.Oo=0,this.No=null,this.Bo=Date.now(),this.reset()}reset(){this.Oo=0}Lo(){this.Oo=this.xo}ko(e){this.cancel();const n=Math.floor(this.Oo+this.qo()),r=Math.max(0,Date.now()-this.Bo),i=Math.max(0,n-r);i>0&&ne("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Oo} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.No=this.si.enqueueAfterDelay(this.timerId,i,()=>(this.Bo=Date.now(),e())),this.Oo*=this.Mo,this.Oo<this.Fo&&(this.Oo=this.Fo),this.Oo>this.xo&&(this.Oo=this.xo)}Qo(){this.No!==null&&(this.No.skipDelay(),this.No=null)}cancel(){this.No!==null&&(this.No.cancel(),this.No=null)}qo(){return(Math.random()-.5)*this.Oo}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O2{constructor(e,n,r,i,o,s,a,l){this.si=e,this.Ko=r,this.$o=i,this.connection=o,this.authCredentialsProvider=s,this.appCheckCredentialsProvider=a,this.listener=l,this.state=0,this.Uo=0,this.Wo=null,this.Go=null,this.stream=null,this.zo=new R2(e,n)}jo(){return this.state===1||this.state===5||this.Ho()}Ho(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Jo()}async stop(){this.jo()&&await this.close(0)}Yo(){this.state=0,this.zo.reset()}Zo(){this.Ho()&&this.Wo===null&&(this.Wo=this.si.enqueueAfterDelay(this.Ko,6e4,()=>this.Xo()))}e_(e){this.t_(),this.stream.send(e)}async Xo(){if(this.Ho())return this.close(0)}t_(){this.Wo&&(this.Wo.cancel(),this.Wo=null)}n_(){this.Go&&(this.Go.cancel(),this.Go=null)}async close(e,n){this.t_(),this.n_(),this.zo.cancel(),this.Uo++,e!==4?this.zo.reset():n&&n.code===H.RESOURCE_EXHAUSTED?(si(n.toString()),si("Using maximum backoff delay to prevent overloading the backend."),this.zo.Lo()):n&&n.code===H.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.r_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Io(n)}r_(){}auth(){this.state=1;const e=this.i_(this.Uo),n=this.Uo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.Uo===n&&this.s_(r,i)},r=>{e(()=>{const i=new te(H.UNKNOWN,"Fetching auth token failed: "+r.message);return this.o_(i)})})}s_(e,n){const r=this.i_(this.Uo);this.stream=this.__(e,n),this.stream.ho(()=>{r(()=>(this.state=2,this.Go=this.si.enqueueAfterDelay(this.$o,1e4,()=>(this.Ho()&&(this.state=3),Promise.resolve())),this.listener.ho()))}),this.stream.Io(i=>{r(()=>this.o_(i))}),this.stream.onMessage(i=>{r(()=>this.onMessage(i))})}Jo(){this.state=5,this.zo.ko(async()=>{this.state=0,this.start()})}o_(e){return ne("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}i_(e){return n=>{this.si.enqueueAndForget(()=>this.Uo===e?n():(ne("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class j$ extends O2{constructor(e,n,r,i,o,s){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,s),this.serializer=o}__(e,n){return this.connection.vo("Listen",e,n)}onMessage(e){this.zo.reset();const n=XF(this.serializer,e),r=function(o){if(!("targetChange"in o))return de.min();const s=o.targetChange;return s.targetIds&&s.targetIds.length?de.min():s.readTime?Rr(s.readTime):de.min()}(e);return this.listener.a_(n,r)}u_(e){const n={};n.database=av(this.serializer),n.addTarget=function(o,s){let a;const l=s.target;if(a=tv(l)?{documents:e$(o,l)}:{query:t$(o,l)},a.targetId=s.targetId,s.resumeToken.approximateByteSize()>0){a.resumeToken=T2(o,s.resumeToken);const u=iv(o,s.expectedCount);u!==null&&(a.expectedCount=u)}else if(s.snapshotVersion.compareTo(de.min())>0){a.readTime=Nf(o,s.snapshotVersion.toTimestamp());const u=iv(o,s.expectedCount);u!==null&&(a.expectedCount=u)}return a}(this.serializer,e);const r=r$(this.serializer,e);r&&(n.labels=r),this.e_(n)}c_(e){const n={};n.database=av(this.serializer),n.removeTarget=e,this.e_(n)}}class F$ extends O2{constructor(e,n,r,i,o,s){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,s),this.serializer=o,this.l_=!1}get h_(){return this.l_}start(){this.l_=!1,this.lastStreamToken=void 0,super.start()}r_(){this.l_&&this.P_([])}__(e,n){return this.connection.vo("Write",e,n)}onMessage(e){if(ze(!!e.streamToken),this.lastStreamToken=e.streamToken,this.l_){this.zo.reset();const n=ZF(e.writeResults,e.commitTime),r=Rr(e.commitTime);return this.listener.I_(r,n)}return ze(!e.writeResults||e.writeResults.length===0),this.l_=!0,this.listener.T_()}E_(){const e={};e.database=av(this.serializer),this.e_(e)}P_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>JF(this.serializer,r))};this.e_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $$ extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.d_=!1}A_(){if(this.d_)throw new te(H.FAILED_PRECONDITION,"The client has already been terminated.")}wo(e,n,r){return this.A_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.wo(e,n,r,i,o)).catch(i=>{throw i.name==="FirebaseError"?(i.code===H.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new te(H.UNKNOWN,i.toString())})}Co(e,n,r,i){return this.A_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,s])=>this.connection.Co(e,n,r,o,s,i)).catch(o=>{throw o.name==="FirebaseError"?(o.code===H.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new te(H.UNKNOWN,o.toString())})}terminate(){this.d_=!0}}class B${constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.V_=0,this.m_=null,this.f_=!0}g_(){this.V_===0&&(this.p_("Unknown"),this.m_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.m_=null,this.y_("Backend didn't respond within 10 seconds."),this.p_("Offline"),Promise.resolve())))}w_(e){this.state==="Online"?this.p_("Unknown"):(this.V_++,this.V_>=1&&(this.S_(),this.y_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.p_("Offline")))}set(e){this.S_(),this.V_=0,e==="Online"&&(this.f_=!1),this.p_(e)}p_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}y_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.f_?(si(n),this.f_=!1):ne("OnlineStateTracker",n)}S_(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U${constructor(e,n,r,i,o){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.b_=[],this.D_=new Map,this.C_=new Set,this.v_=[],this.F_=o,this.F_.ro(s=>{r.enqueueAndForget(async()=>{fs(this)&&(ne("RemoteStore","Restarting streams for network reachability change."),await async function(l){const u=fe(l);u.C_.add(4),await gc(u),u.M_.set("Unknown"),u.C_.delete(4),await Gh(u)}(this))})}),this.M_=new B$(r,i)}}async function Gh(t){if(fs(t))for(const e of t.v_)await e(!0)}async function gc(t){for(const e of t.v_)await e(!1)}function D2(t,e){const n=fe(t);n.D_.has(e.targetId)||(n.D_.set(e.targetId,e),R0(n)?k0(n):za(n).Ho()&&P0(n,e))}function N2(t,e){const n=fe(t),r=za(n);n.D_.delete(e),r.Ho()&&L2(n,e),n.D_.size===0&&(r.Ho()?r.Zo():fs(n)&&n.M_.set("Unknown"))}function P0(t,e){if(t.x_.Oe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(de.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}za(t).u_(e)}function L2(t,e){t.x_.Oe(e),za(t).c_(e)}function k0(t){t.x_=new HF({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),_t:e=>t.D_.get(e)||null,nt:()=>t.datastore.serializer.databaseId}),za(t).start(),t.M_.g_()}function R0(t){return fs(t)&&!za(t).jo()&&t.D_.size>0}function fs(t){return fe(t).C_.size===0}function M2(t){t.x_=void 0}async function z$(t){t.D_.forEach((e,n)=>{P0(t,e)})}async function H$(t,e){M2(t),R0(t)?(t.M_.w_(e),k0(t)):t.M_.set("Unknown")}async function W$(t,e,n){if(t.M_.set("Online"),e instanceof x2&&e.state===2&&e.cause)try{await async function(i,o){const s=o.cause;for(const a of o.targetIds)i.D_.has(a)&&(await i.remoteSyncer.rejectListen(a,s),i.D_.delete(a),i.x_.removeTarget(a))}(t,e)}catch(r){ne("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Lf(t,r)}else if(e instanceof Dd?t.x_.$e(e):e instanceof E2?t.x_.Je(e):t.x_.Ge(e),!n.isEqual(de.min()))try{const r=await k2(t.localStore);n.compareTo(r)>=0&&await function(o,s){const a=o.x_.it(s);return a.targetChanges.forEach((l,u)=>{if(l.resumeToken.approximateByteSize()>0){const d=o.D_.get(u);d&&o.D_.set(u,d.withResumeToken(l.resumeToken,s))}}),a.targetMismatches.forEach((l,u)=>{const d=o.D_.get(l);if(!d)return;o.D_.set(l,d.withResumeToken(Qt.EMPTY_BYTE_STRING,d.snapshotVersion)),L2(o,l);const h=new Oi(d.target,l,u,d.sequenceNumber);P0(o,h)}),o.remoteSyncer.applyRemoteEvent(a)}(t,n)}catch(r){ne("RemoteStore","Failed to raise snapshot:",r),await Lf(t,r)}}async function Lf(t,e,n){if(!fc(e))throw e;t.C_.add(1),await gc(t),t.M_.set("Offline"),n||(n=()=>k2(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{ne("RemoteStore","Retrying IndexedDB access"),await n(),t.C_.delete(1),await Gh(t)})}function V2(t,e){return e().catch(n=>Lf(t,n,e))}async function Kh(t){const e=fe(t),n=to(e);let r=e.b_.length>0?e.b_[e.b_.length-1].batchId:-1;for(;q$(e);)try{const i=await k$(e.localStore,r);if(i===null){e.b_.length===0&&n.Zo();break}r=i.batchId,G$(e,i)}catch(i){await Lf(e,i)}j2(e)&&F2(e)}function q$(t){return fs(t)&&t.b_.length<10}function G$(t,e){t.b_.push(e);const n=to(t);n.Ho()&&n.h_&&n.P_(e.mutations)}function j2(t){return fs(t)&&!to(t).jo()&&t.b_.length>0}function F2(t){to(t).start()}async function K$(t){to(t).E_()}async function Q$(t){const e=to(t);for(const n of t.b_)e.P_(n.mutations)}async function Y$(t,e,n){const r=t.b_.shift(),i=T0.from(r,e,n);await V2(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await Kh(t)}async function X$(t,e){e&&to(t).h_&&await async function(r,i){if(function(s){return BF(s)&&s!==H.ABORTED}(i.code)){const o=r.b_.shift();to(r).Yo(),await V2(r,()=>r.remoteSyncer.rejectFailedWrite(o.batchId,i)),await Kh(r)}}(t,e),j2(t)&&F2(t)}async function JE(t,e){const n=fe(t);n.asyncQueue.verifyOperationInProgress(),ne("RemoteStore","RemoteStore received new credentials");const r=fs(n);n.C_.add(3),await gc(n),r&&n.M_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.C_.delete(3),await Gh(n)}async function J$(t,e){const n=fe(t);e?(n.C_.delete(2),await Gh(n)):e||(n.C_.add(2),await gc(n),n.M_.set("Unknown"))}function za(t){return t.O_||(t.O_=function(n,r,i){const o=fe(n);return o.A_(),new j$(r,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,i)}(t.datastore,t.asyncQueue,{ho:z$.bind(null,t),Io:H$.bind(null,t),a_:W$.bind(null,t)}),t.v_.push(async e=>{e?(t.O_.Yo(),R0(t)?k0(t):t.M_.set("Unknown")):(await t.O_.stop(),M2(t))})),t.O_}function to(t){return t.N_||(t.N_=function(n,r,i){const o=fe(n);return o.A_(),new F$(r,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,i)}(t.datastore,t.asyncQueue,{ho:K$.bind(null,t),Io:X$.bind(null,t),T_:Q$.bind(null,t),I_:Y$.bind(null,t)}),t.v_.push(async e=>{e?(t.N_.Yo(),await Kh(t)):(await t.N_.stop(),t.b_.length>0&&(ne("RemoteStore",`Stopping write stream with ${t.b_.length} pending writes`),t.b_=[]))})),t.N_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O0{constructor(e,n,r,i,o){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=o,this.deferred=new Zr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(s=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,i,o){const s=Date.now()+r,a=new O0(e,n,s,i,o);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new te(H.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function D0(t,e){if(si("AsyncQueue",`${e}: ${t}`),fc(t))return new te(H.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ia{constructor(e){this.comparator=e?(n,r)=>e(n,r)||re.comparator(n.key,r.key):(n,r)=>re.comparator(n.key,r.key),this.keyedMap=Cl(),this.sortedSet=new Ye(this.comparator)}static emptySet(e){return new ia(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof ia)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,o=r.getNext().key;if(!i.isEqual(o))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new ia;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZE{constructor(){this.B_=new Ye(re.comparator)}track(e){const n=e.doc.key,r=this.B_.get(n);r?e.type!==0&&r.type===3?this.B_=this.B_.insert(n,e):e.type===3&&r.type!==1?this.B_=this.B_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.B_=this.B_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.B_=this.B_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.B_=this.B_.remove(n):e.type===1&&r.type===2?this.B_=this.B_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.B_=this.B_.insert(n,{type:2,doc:e.doc}):ae():this.B_=this.B_.insert(n,e)}L_(){const e=[];return this.B_.inorderTraversal((n,r)=>{e.push(r)}),e}}class ba{constructor(e,n,r,i,o,s,a,l,u){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=o,this.fromCache=s,this.syncStateChanged=a,this.excludesMetadataChanges=l,this.hasCachedResults=u}static fromInitialDocuments(e,n,r,i,o){const s=[];return n.forEach(a=>{s.push({type:0,doc:a})}),new ba(e,n,ia.emptySet(n),s,r,i,!0,!1,o)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Bh(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z${constructor(){this.k_=void 0,this.listeners=[]}}class e6{constructor(){this.queries=new Ua(e=>a2(e),Bh),this.onlineState="Unknown",this.q_=new Set}}async function $2(t,e){const n=fe(t),r=e.query;let i=!1,o=n.queries.get(r);if(o||(i=!0,o=new Z$),i)try{o.k_=await n.onListen(r)}catch(s){const a=D0(s,`Initialization of query '${Ps(e.query)}' failed`);return void e.onError(a)}n.queries.set(r,o),o.listeners.push(e),e.Q_(n.onlineState),o.k_&&e.K_(o.k_)&&N0(n)}async function B2(t,e){const n=fe(t),r=e.query;let i=!1;const o=n.queries.get(r);if(o){const s=o.listeners.indexOf(e);s>=0&&(o.listeners.splice(s,1),i=o.listeners.length===0)}if(i)return n.queries.delete(r),n.onUnlisten(r)}function t6(t,e){const n=fe(t);let r=!1;for(const i of e){const o=i.query,s=n.queries.get(o);if(s){for(const a of s.listeners)a.K_(i)&&(r=!0);s.k_=i}}r&&N0(n)}function n6(t,e,n){const r=fe(t),i=r.queries.get(e);if(i)for(const o of i.listeners)o.onError(n);r.queries.delete(e)}function N0(t){t.q_.forEach(e=>{e.next()})}class U2{constructor(e,n,r){this.query=e,this.U_=n,this.W_=!1,this.G_=null,this.onlineState="Unknown",this.options=r||{}}K_(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new ba(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.W_?this.z_(e)&&(this.U_.next(e),n=!0):this.j_(e,this.onlineState)&&(this.H_(e),n=!0),this.G_=e,n}onError(e){this.U_.error(e)}Q_(e){this.onlineState=e;let n=!1;return this.G_&&!this.W_&&this.j_(this.G_,e)&&(this.H_(this.G_),n=!0),n}j_(e,n){if(!e.fromCache)return!0;const r=n!=="Offline";return(!this.options.J_||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}z_(e){if(e.docChanges.length>0)return!0;const n=this.G_&&this.G_.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}H_(e){e=ba.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.W_=!0,this.U_.next(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class z2{constructor(e){this.key=e}}class H2{constructor(e){this.key=e}}class r6{constructor(e,n){this.query=e,this.ia=n,this.sa=null,this.hasCachedResults=!1,this.current=!1,this.oa=ge(),this.mutatedKeys=ge(),this._a=l2(e),this.aa=new ia(this._a)}get ua(){return this.ia}ca(e,n){const r=n?n.la:new ZE,i=n?n.aa:this.aa;let o=n?n.mutatedKeys:this.mutatedKeys,s=i,a=!1;const l=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,u=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((d,h)=>{const p=i.get(d),g=Uh(this.query,h)?h:null,T=!!p&&this.mutatedKeys.has(p.key),b=!!g&&(g.hasLocalMutations||this.mutatedKeys.has(g.key)&&g.hasCommittedMutations);let S=!1;p&&g?p.data.isEqual(g.data)?T!==b&&(r.track({type:3,doc:g}),S=!0):this.ha(p,g)||(r.track({type:2,doc:g}),S=!0,(l&&this._a(g,l)>0||u&&this._a(g,u)<0)&&(a=!0)):!p&&g?(r.track({type:0,doc:g}),S=!0):p&&!g&&(r.track({type:1,doc:p}),S=!0,(l||u)&&(a=!0)),S&&(g?(s=s.add(g),o=b?o.add(d):o.delete(d)):(s=s.delete(d),o=o.delete(d)))}),this.query.limit!==null)for(;s.size>this.query.limit;){const d=this.query.limitType==="F"?s.last():s.first();s=s.delete(d.key),o=o.delete(d.key),r.track({type:1,doc:d})}return{aa:s,la:r,Zi:a,mutatedKeys:o}}ha(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r){const i=this.aa;this.aa=e.aa,this.mutatedKeys=e.mutatedKeys;const o=e.la.L_();o.sort((u,d)=>function(p,g){const T=b=>{switch(b){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return ae()}};return T(p)-T(g)}(u.type,d.type)||this._a(u.doc,d.doc)),this.Pa(r);const s=n?this.Ia():[],a=this.oa.size===0&&this.current?1:0,l=a!==this.sa;return this.sa=a,o.length!==0||l?{snapshot:new ba(this.query,e.aa,i,o,e.mutatedKeys,a===0,l,!1,!!r&&r.resumeToken.approximateByteSize()>0),Ta:s}:{Ta:s}}Q_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({aa:this.aa,la:new ZE,mutatedKeys:this.mutatedKeys,Zi:!1},!1)):{Ta:[]}}Ea(e){return!this.ia.has(e)&&!!this.aa.has(e)&&!this.aa.get(e).hasLocalMutations}Pa(e){e&&(e.addedDocuments.forEach(n=>this.ia=this.ia.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.ia=this.ia.delete(n)),this.current=e.current)}Ia(){if(!this.current)return[];const e=this.oa;this.oa=ge(),this.aa.forEach(r=>{this.Ea(r.key)&&(this.oa=this.oa.add(r.key))});const n=[];return e.forEach(r=>{this.oa.has(r)||n.push(new H2(r))}),this.oa.forEach(r=>{e.has(r)||n.push(new z2(r))}),n}da(e){this.ia=e.ls,this.oa=ge();const n=this.ca(e.documents);return this.applyChanges(n,!0)}Aa(){return ba.fromInitialDocuments(this.query,this.aa,this.mutatedKeys,this.sa===0,this.hasCachedResults)}}class i6{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class o6{constructor(e){this.key=e,this.Ra=!1}}class s6{constructor(e,n,r,i,o,s){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=o,this.maxConcurrentLimboResolutions=s,this.Va={},this.ma=new Ua(a=>a2(a),Bh),this.fa=new Map,this.ga=new Set,this.pa=new Ye(re.comparator),this.ya=new Map,this.wa=new C0,this.Sa={},this.ba=new Map,this.Da=Ta.Nn(),this.onlineState="Unknown",this.Ca=void 0}get isPrimaryClient(){return this.Ca===!0}}async function a6(t,e){const n=v6(t);let r,i;const o=n.ma.get(e);if(o)r=o.targetId,n.sharedClientState.addLocalQueryTarget(r),i=o.view.Aa();else{const s=await R$(n.localStore,kr(e)),a=n.sharedClientState.addLocalQueryTarget(s.targetId);r=s.targetId,i=await l6(n,e,r,a==="current",s.resumeToken),n.isPrimaryClient&&D2(n.remoteStore,s)}return i}async function l6(t,e,n,r,i){t.va=(h,p,g)=>async function(b,S,E,m){let v=S.view.ca(E);v.Zi&&(v=await QE(b.localStore,S.query,!1).then(({documents:k})=>S.view.ca(k,v)));const x=m&&m.targetChanges.get(S.targetId),A=S.view.applyChanges(v,b.isPrimaryClient,x);return tx(b,S.targetId,A.Ta),A.snapshot}(t,h,p,g);const o=await QE(t.localStore,e,!0),s=new r6(e,o.ls),a=s.ca(o.documents),l=mc.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),u=s.applyChanges(a,t.isPrimaryClient,l);tx(t,n,u.Ta);const d=new i6(e,n,s);return t.ma.set(e,d),t.fa.has(n)?t.fa.get(n).push(e):t.fa.set(n,[e]),u.snapshot}async function u6(t,e){const n=fe(t),r=n.ma.get(e),i=n.fa.get(r.targetId);if(i.length>1)return n.fa.set(r.targetId,i.filter(o=>!Bh(o,e))),void n.ma.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await lv(n.localStore,r.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(r.targetId),N2(n.remoteStore,r.targetId),uv(n,r.targetId)}).catch(dc)):(uv(n,r.targetId),await lv(n.localStore,r.targetId,!0))}async function c6(t,e,n){const r=y6(t);try{const i=await function(s,a){const l=fe(s),u=gt.now(),d=a.reduce((g,T)=>g.add(T.key),ge());let h,p;return l.persistence.runTransaction("Locally write mutations","readwrite",g=>{let T=ai(),b=ge();return l.ss.getEntries(g,d).next(S=>{T=S,T.forEach((E,m)=>{m.isValidDocument()||(b=b.add(E))})}).next(()=>l.localDocuments.getOverlayedDocuments(g,T)).next(S=>{h=S;const E=[];for(const m of a){const v=MF(m,h.get(m.key).overlayedDocument);v!=null&&E.push(new ds(m.key,v,ZI(v.value.mapValue),nr.exists(!0)))}return l.mutationQueue.addMutationBatch(g,u,E,a)}).next(S=>{p=S;const E=S.applyToLocalDocumentSet(h,b);return l.documentOverlayCache.saveOverlays(g,S.batchId,E)})}).then(()=>({batchId:p.batchId,changes:c2(h)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(s,a,l){let u=s.Sa[s.currentUser.toKey()];u||(u=new Ye(Se)),u=u.insert(a,l),s.Sa[s.currentUser.toKey()]=u}(r,i.batchId,n),await vc(r,i.changes),await Kh(r.remoteStore)}catch(i){const o=D0(i,"Failed to persist write");n.reject(o)}}async function W2(t,e){const n=fe(t);try{const r=await A$(n.localStore,e);e.targetChanges.forEach((i,o)=>{const s=n.ya.get(o);s&&(ze(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?s.Ra=!0:i.modifiedDocuments.size>0?ze(s.Ra):i.removedDocuments.size>0&&(ze(s.Ra),s.Ra=!1))}),await vc(n,r,e)}catch(r){await dc(r)}}function ex(t,e,n){const r=fe(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.ma.forEach((o,s)=>{const a=s.view.Q_(e);a.snapshot&&i.push(a.snapshot)}),function(s,a){const l=fe(s);l.onlineState=a;let u=!1;l.queries.forEach((d,h)=>{for(const p of h.listeners)p.Q_(a)&&(u=!0)}),u&&N0(l)}(r.eventManager,e),i.length&&r.Va.a_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function d6(t,e,n){const r=fe(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.ya.get(e),o=i&&i.key;if(o){let s=new Ye(re.comparator);s=s.insert(o,zt.newNoDocument(o,de.min()));const a=ge().add(o),l=new Wh(de.min(),new Map,new Ye(Se),s,a);await W2(r,l),r.pa=r.pa.remove(o),r.ya.delete(e),L0(r)}else await lv(r.localStore,e,!1).then(()=>uv(r,e,n)).catch(dc)}async function f6(t,e){const n=fe(t),r=e.batch.batchId;try{const i=await I$(n.localStore,e);G2(n,r,null),q2(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await vc(n,i)}catch(i){await dc(i)}}async function h6(t,e,n){const r=fe(t);try{const i=await function(s,a){const l=fe(s);return l.persistence.runTransaction("Reject batch","readwrite-primary",u=>{let d;return l.mutationQueue.lookupMutationBatch(u,a).next(h=>(ze(h!==null),d=h.keys(),l.mutationQueue.removeMutationBatch(u,h))).next(()=>l.mutationQueue.performConsistencyCheck(u)).next(()=>l.documentOverlayCache.removeOverlaysForBatchId(u,d,a)).next(()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(u,d)).next(()=>l.localDocuments.getDocuments(u,d))})}(r.localStore,e);G2(r,e,n),q2(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await vc(r,i)}catch(i){await dc(i)}}function q2(t,e){(t.ba.get(e)||[]).forEach(n=>{n.resolve()}),t.ba.delete(e)}function G2(t,e,n){const r=fe(t);let i=r.Sa[r.currentUser.toKey()];if(i){const o=i.get(e);o&&(n?o.reject(n):o.resolve(),i=i.remove(e)),r.Sa[r.currentUser.toKey()]=i}}function uv(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.fa.get(e))t.ma.delete(r),n&&t.Va.Fa(r,n);t.fa.delete(e),t.isPrimaryClient&&t.wa.Rr(e).forEach(r=>{t.wa.containsKey(r)||K2(t,r)})}function K2(t,e){t.ga.delete(e.path.canonicalString());const n=t.pa.get(e);n!==null&&(N2(t.remoteStore,n),t.pa=t.pa.remove(e),t.ya.delete(n),L0(t))}function tx(t,e,n){for(const r of n)r instanceof z2?(t.wa.addReference(r.key,e),p6(t,r)):r instanceof H2?(ne("SyncEngine","Document no longer in limbo: "+r.key),t.wa.removeReference(r.key,e),t.wa.containsKey(r.key)||K2(t,r.key)):ae()}function p6(t,e){const n=e.key,r=n.path.canonicalString();t.pa.get(n)||t.ga.has(r)||(ne("SyncEngine","New document in limbo: "+n),t.ga.add(r),L0(t))}function L0(t){for(;t.ga.size>0&&t.pa.size<t.maxConcurrentLimboResolutions;){const e=t.ga.values().next().value;t.ga.delete(e);const n=new re(Be.fromString(e)),r=t.Da.next();t.ya.set(r,new o6(n)),t.pa=t.pa.insert(n,r),D2(t.remoteStore,new Oi(kr(E0(n.path)),r,"TargetPurposeLimboResolution",m0._e))}}async function vc(t,e,n){const r=fe(t),i=[],o=[],s=[];r.ma.isEmpty()||(r.ma.forEach((a,l)=>{s.push(r.va(l,e,n).then(u=>{if((u||n)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(l.targetId,u!=null&&u.fromCache?"not-current":"current"),u){i.push(u);const d=A0.Qi(l.targetId,u);o.push(d)}}))}),await Promise.all(s),r.Va.a_(i),await async function(l,u){const d=fe(l);try{await d.persistence.runTransaction("notifyLocalViewChanges","readwrite",h=>K.forEach(u,p=>K.forEach(p.ki,g=>d.persistence.referenceDelegate.addReference(h,p.targetId,g)).next(()=>K.forEach(p.qi,g=>d.persistence.referenceDelegate.removeReference(h,p.targetId,g)))))}catch(h){if(!fc(h))throw h;ne("LocalStore","Failed to update sequence numbers: "+h)}for(const h of u){const p=h.targetId;if(!h.fromCache){const g=d.ts.get(p),T=g.snapshotVersion,b=g.withLastLimboFreeSnapshotVersion(T);d.ts=d.ts.insert(p,b)}}}(r.localStore,o))}async function m6(t,e){const n=fe(t);if(!n.currentUser.isEqual(e)){ne("SyncEngine","User change. New user:",e.toKey());const r=await P2(n.localStore,e);n.currentUser=e,function(o,s){o.ba.forEach(a=>{a.forEach(l=>{l.reject(new te(H.CANCELLED,s))})}),o.ba.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await vc(n,r._s)}}function g6(t,e){const n=fe(t),r=n.ya.get(e);if(r&&r.Ra)return ge().add(r.key);{let i=ge();const o=n.fa.get(e);if(!o)return i;for(const s of o){const a=n.ma.get(s);i=i.unionWith(a.view.ua)}return i}}function v6(t){const e=fe(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=W2.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=g6.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=d6.bind(null,e),e.Va.a_=t6.bind(null,e.eventManager),e.Va.Fa=n6.bind(null,e.eventManager),e}function y6(t){const e=fe(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=f6.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=h6.bind(null,e),e}class nx{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=qh(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,n){return null}createIndexBackfillerScheduler(e,n){return null}createLocalStore(e){return C$(this.persistence,new b$,e.initialUser,this.serializer)}createPersistence(e){return new E$(I0.jr,this.serializer)}createSharedClientState(e){return new D$}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class w6{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>ex(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=m6.bind(null,this.syncEngine),await J$(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new e6}()}createDatastore(e){const n=qh(e.databaseInfo.databaseId),r=function(o){return new V$(o)}(e.databaseInfo);return function(o,s,a,l){return new $$(o,s,a,l)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,i,o,s,a){return new U$(r,i,o,s,a)}(this.localStore,this.datastore,e.asyncQueue,n=>ex(this.syncEngine,n,0),function(){return XE.D()?new XE:new N$}())}createSyncEngine(e,n){return function(i,o,s,a,l,u,d){const h=new s6(i,o,s,a,l,u);return d&&(h.Ca=!0),h}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(n){const r=fe(n);ne("RemoteStore","RemoteStore shutting down."),r.C_.add(5),await gc(r),r.F_.shutdown(),r.M_.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q2{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Oa(this.observer.next,e)}error(e){this.observer.error?this.Oa(this.observer.error,e):si("Uncaught Error in snapshot listener:",e.toString())}Na(){this.muted=!0}Oa(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _6{constructor(e,n,r,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=Bt.UNAUTHENTICATED,this.clientId=YI.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async o=>{ne("FirestoreClient","Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(ne("FirestoreClient","Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new te(H.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Zr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=D0(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function hm(t,e){t.asyncQueue.verifyOperationInProgress(),ne("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await P2(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function rx(t,e){t.asyncQueue.verifyOperationInProgress();const n=await x6(t);ne("FirestoreClient","Initializing OnlineComponentProvider");const r=await t.getConfiguration();await e.initialize(n,r),t.setCredentialChangeListener(i=>JE(e.remoteStore,i)),t.setAppCheckTokenChangeListener((i,o)=>JE(e.remoteStore,o)),t._onlineComponents=e}function E6(t){return t.name==="FirebaseError"?t.code===H.FAILED_PRECONDITION||t.code===H.UNIMPLEMENTED:!(typeof DOMException<"u"&&t instanceof DOMException)||t.code===22||t.code===20||t.code===11}async function x6(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){ne("FirestoreClient","Using user provided OfflineComponentProvider");try{await hm(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!E6(n))throw n;wa("Error using user provided cache. Falling back to memory cache: "+n),await hm(t,new nx)}}else ne("FirestoreClient","Using default OfflineComponentProvider"),await hm(t,new nx);return t._offlineComponents}async function Y2(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(ne("FirestoreClient","Using user provided OnlineComponentProvider"),await rx(t,t._uninitializedComponentsProvider._online)):(ne("FirestoreClient","Using default OnlineComponentProvider"),await rx(t,new w6))),t._onlineComponents}function T6(t){return Y2(t).then(e=>e.syncEngine)}async function X2(t){const e=await Y2(t),n=e.eventManager;return n.onListen=a6.bind(null,e.syncEngine),n.onUnlisten=u6.bind(null,e.syncEngine),n}function b6(t,e,n={}){const r=new Zr;return t.asyncQueue.enqueueAndForget(async()=>function(o,s,a,l,u){const d=new Q2({next:p=>{s.enqueueAndForget(()=>B2(o,h));const g=p.docs.has(a);!g&&p.fromCache?u.reject(new te(H.UNAVAILABLE,"Failed to get document because the client is offline.")):g&&p.fromCache&&l&&l.source==="server"?u.reject(new te(H.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):u.resolve(p)},error:p=>u.reject(p)}),h=new U2(E0(a.path),d,{includeMetadataChanges:!0,J_:!0});return $2(o,h)}(await X2(t),t.asyncQueue,e,n,r)),r.promise}function S6(t,e,n={}){const r=new Zr;return t.asyncQueue.enqueueAndForget(async()=>function(o,s,a,l,u){const d=new Q2({next:p=>{s.enqueueAndForget(()=>B2(o,h)),p.fromCache&&l.source==="server"?u.reject(new te(H.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):u.resolve(p)},error:p=>u.reject(p)}),h=new U2(a,d,{includeMetadataChanges:!0,J_:!0});return $2(o,h)}(await X2(t),t.asyncQueue,e,n,r)),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function J2(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ix=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Z2(t,e,n){if(!n)throw new te(H.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function C6(t,e,n,r){if(e===!0&&r===!0)throw new te(H.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function ox(t){if(!re.isDocumentKey(t))throw new te(H.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function sx(t){if(re.isDocumentKey(t))throw new te(H.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Qh(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":ae()}function li(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new te(H.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Qh(t);throw new te(H.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ax{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new te(H.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new te(H.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}C6("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=J2((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(o){if(o.timeoutSeconds!==void 0){if(isNaN(o.timeoutSeconds))throw new te(H.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (must not be NaN)`);if(o.timeoutSeconds<5)throw new te(H.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (minimum allowed value is 5)`);if(o.timeoutSeconds>30)throw new te(H.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Yh{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new ax({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new te(H.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new te(H.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new ax(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new Gj;switch(r.type){case"firstParty":return new Xj(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new te(H.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=ix.get(n);r&&(ne("ComponentProvider","Removing Datastore"),ix.delete(n),r.terminate())}(this),Promise.resolve()}}function I6(t,e,n,r={}){var i;const o=(t=li(t,Yh))._getSettings(),s=`${e}:${n}`;if(o.host!=="firestore.googleapis.com"&&o.host!==s&&wa("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},o),{host:s,ssl:!1})),r.mockUserToken){let a,l;if(typeof r.mockUserToken=="string")a=r.mockUserToken,l=Bt.MOCK_USER;else{a=cC(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const u=r.mockUserToken.sub||r.mockUserToken.user_id;if(!u)throw new te(H.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");l=new Bt(u)}t._authCredentials=new Kj(new QI(a,l))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ha{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Ha(this.firestore,e,this._query)}}class vn{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Ki(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new vn(this.firestore,e,this._key)}}class Ki extends Ha{constructor(e,n,r){super(e,n,E0(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new vn(this.firestore,null,new re(e))}withConverter(e){return new Ki(this.firestore,e,this._path)}}function st(t,e,...n){if(t=vt(t),Z2("collection","path",e),t instanceof Yh){const r=Be.fromString(e,...n);return sx(r),new Ki(t,null,r)}{if(!(t instanceof vn||t instanceof Ki))throw new te(H.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Be.fromString(e,...n));return sx(r),new Ki(t.firestore,null,r)}}function rn(t,e,...n){if(t=vt(t),arguments.length===1&&(e=YI.newId()),Z2("doc","path",e),t instanceof Yh){const r=Be.fromString(e,...n);return ox(r),new vn(t,null,new re(r))}{if(!(t instanceof vn||t instanceof Ki))throw new te(H.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Be.fromString(e,...n));return ox(r),new vn(t.firestore,t instanceof Ki?t.converter:null,new re(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class A6{constructor(){this.Ja=Promise.resolve(),this.Ya=[],this.Za=!1,this.Xa=[],this.eu=null,this.tu=!1,this.nu=!1,this.ru=[],this.zo=new R2(this,"async_queue_retry"),this.iu=()=>{const n=fm();n&&ne("AsyncQueue","Visibility state changed to "+n.visibilityState),this.zo.Qo()};const e=fm();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.iu)}get isShuttingDown(){return this.Za}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.su(),this.ou(e)}enterRestrictedMode(e){if(!this.Za){this.Za=!0,this.nu=e||!1;const n=fm();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.iu)}}enqueue(e){if(this.su(),this.Za)return new Promise(()=>{});const n=new Zr;return this.ou(()=>this.Za&&this.nu?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Ya.push(e),this._u()))}async _u(){if(this.Ya.length!==0){try{await this.Ya[0](),this.Ya.shift(),this.zo.reset()}catch(e){if(!fc(e))throw e;ne("AsyncQueue","Operation failed with retryable error: "+e)}this.Ya.length>0&&this.zo.ko(()=>this._u())}}ou(e){const n=this.Ja.then(()=>(this.tu=!0,e().catch(r=>{this.eu=r,this.tu=!1;const i=function(s){let a=s.message||"";return s.stack&&(a=s.stack.includes(s.message)?s.stack:s.message+`
`+s.stack),a}(r);throw si("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.tu=!1,r))));return this.Ja=n,n}enqueueAfterDelay(e,n,r){this.su(),this.ru.indexOf(e)>-1&&(n=0);const i=O0.createAndSchedule(this,e,n,r,o=>this.au(o));return this.Xa.push(i),i}su(){this.eu&&ae()}verifyOperationInProgress(){}async uu(){let e;do e=this.Ja,await e;while(e!==this.Ja)}cu(e){for(const n of this.Xa)if(n.timerId===e)return!0;return!1}lu(e){return this.uu().then(()=>{this.Xa.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.Xa)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.uu()})}hu(e){this.ru.push(e)}au(e){const n=this.Xa.indexOf(e);this.Xa.splice(n,1)}}class Wa extends Yh{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=function(){return new A6}(),this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||eA(this),this._firestoreClient.terminate()}}function P6(t,e){const n=typeof t=="object"?t:Vy(),r=typeof t=="string"?t:e||"(default)",i=Eh(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const o=aC("firestore");o&&I6(i,...o)}return i}function M0(t){return t._firestoreClient||eA(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function eA(t){var e,n,r;const i=t._freezeSettings(),o=function(a,l,u,d){return new uF(a,l,u,d.host,d.ssl,d.experimentalForceLongPolling,d.experimentalAutoDetectLongPolling,J2(d.experimentalLongPollingOptions),d.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,i);t._firestoreClient=new _6(t._authCredentials,t._appCheckCredentials,t._queue,o),!((n=i.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.localCache.kind,_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sa{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Sa(Qt.fromBase64String(e))}catch(n){throw new te(H.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Sa(Qt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V0{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new te(H.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new kt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tA{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j0{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new te(H.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new te(H.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return Se(this._lat,e._lat)||Se(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const k6=/^__.*__$/;class R6{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new ds(e,this.data,this.fieldMask,n,this.fieldTransforms):new pc(e,this.data,n,this.fieldTransforms)}}function nA(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw ae()}}class F0{constructor(e,n,r,i,o,s){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,o===void 0&&this.Pu(),this.fieldTransforms=o||[],this.fieldMask=s||[]}get path(){return this.settings.path}get Iu(){return this.settings.Iu}Tu(e){return new F0(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Eu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Tu({path:r,du:!1});return i.Au(e),i}Ru(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Tu({path:r,du:!1});return i.Pu(),i}Vu(e){return this.Tu({path:void 0,du:!0})}mu(e){return Mf(e,this.settings.methodName,this.settings.fu||!1,this.path,this.settings.gu)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}Pu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Au(this.path.get(e))}Au(e){if(e.length===0)throw this.mu("Document fields must not be empty");if(nA(this.Iu)&&k6.test(e))throw this.mu('Document fields cannot begin and end with "__"')}}class O6{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||qh(e)}pu(e,n,r,i=!1){return new F0({Iu:e,methodName:n,gu:r,path:kt.emptyPath(),du:!1,fu:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function $0(t){const e=t._freezeSettings(),n=qh(t._databaseId);return new O6(t._databaseId,!!e.ignoreUndefinedProperties,n)}function rA(t,e,n,r,i,o={}){const s=t.pu(o.merge||o.mergeFields?2:0,e,n,i);sA("Data must be an object, but it was:",s,r);const a=iA(r,s);let l,u;if(o.merge)l=new Jn(s.fieldMask),u=s.fieldTransforms;else if(o.mergeFields){const d=[];for(const h of o.mergeFields){const p=N6(e,h,n);if(!s.contains(p))throw new te(H.INVALID_ARGUMENT,`Field '${p}' is specified in your field mask but missing from your input data.`);M6(d,p)||d.push(p)}l=new Jn(d),u=s.fieldTransforms.filter(h=>l.covers(h.field))}else l=null,u=s.fieldTransforms;return new R6(new Vn(a),l,u)}function D6(t,e,n,r=!1){return B0(n,t.pu(r?4:3,e))}function B0(t,e){if(oA(t=vt(t)))return sA("Unsupported field value:",e,t),iA(t,e);if(t instanceof tA)return function(r,i){if(!nA(i.Iu))throw i.mu(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.mu(`${r._methodName}() is not currently supported inside arrays`);const o=r._toFieldTransform(i);o&&i.fieldTransforms.push(o)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.du&&e.Iu!==4)throw e.mu("Nested arrays are not supported");return function(r,i){const o=[];let s=0;for(const a of r){let l=B0(a,i.Vu(s));l==null&&(l={nullValue:"NULL_VALUE"}),o.push(l),s++}return{arrayValue:{values:o}}}(t,e)}return function(r,i){if((r=vt(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return kF(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const o=gt.fromDate(r);return{timestampValue:Nf(i.serializer,o)}}if(r instanceof gt){const o=new gt(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Nf(i.serializer,o)}}if(r instanceof j0)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Sa)return{bytesValue:T2(i.serializer,r._byteString)};if(r instanceof vn){const o=i.databaseId,s=r.firestore._databaseId;if(!s.isEqual(o))throw i.mu(`Document reference is for database ${s.projectId}/${s.database} but should be for database ${o.projectId}/${o.database}`);return{referenceValue:S0(r.firestore._databaseId||i.databaseId,r._key.path)}}throw i.mu(`Unsupported field value: ${Qh(r)}`)}(t,e)}function iA(t,e){const n={};return XI(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Ba(t,(r,i)=>{const o=B0(i,e.Eu(r));o!=null&&(n[r]=o)}),{mapValue:{fields:n}}}function oA(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof gt||t instanceof j0||t instanceof Sa||t instanceof vn||t instanceof tA)}function sA(t,e,n){if(!oA(n)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(n)){const r=Qh(n);throw r==="an object"?e.mu(t+" a custom object"):e.mu(t+" "+r)}}function N6(t,e,n){if((e=vt(e))instanceof V0)return e._internalPath;if(typeof e=="string")return aA(t,e);throw Mf("Field path arguments must be of type string or ",t,!1,void 0,n)}const L6=new RegExp("[~\\*/\\[\\]]");function aA(t,e,n){if(e.search(L6)>=0)throw Mf(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new V0(...e.split("."))._internalPath}catch{throw Mf(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Mf(t,e,n,r,i){const o=r&&!r.isEmpty(),s=i!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(o||s)&&(l+=" (found",o&&(l+=` in field ${r}`),s&&(l+=` in document ${i}`),l+=")"),new te(H.INVALID_ARGUMENT,a+t+l)}function M6(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lA{constructor(e,n,r,i,o){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=o}get id(){return this._key.path.lastSegment()}get ref(){return new vn(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new V6(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(U0("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class V6 extends lA{data(){return super.data()}}function U0(t,e){return typeof e=="string"?aA(t,e):e instanceof V0?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function j6(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new te(H.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class z0{}class F6 extends z0{}function uA(t,e,...n){let r=[];e instanceof z0&&r.push(e),r=r.concat(n),function(o){const s=o.filter(l=>l instanceof H0).length,a=o.filter(l=>l instanceof Xh).length;if(s>1||s>0&&a>0)throw new te(H.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const i of r)t=i._apply(t);return t}class Xh extends F6{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new Xh(e,n,r)}_apply(e){const n=this._parse(e);return dA(e._query,n),new Ha(e.firestore,e.converter,nv(e._query,n))}_parse(e){const n=$0(e.firestore);return function(o,s,a,l,u,d,h){let p;if(u.isKeyField()){if(d==="array-contains"||d==="array-contains-any")throw new te(H.INVALID_ARGUMENT,`Invalid Query. You can't perform '${d}' queries on documentId().`);if(d==="in"||d==="not-in"){ux(h,d);const g=[];for(const T of h)g.push(lx(l,o,T));p={arrayValue:{values:g}}}else p=lx(l,o,h)}else d!=="in"&&d!=="not-in"&&d!=="array-contains-any"||ux(h,d),p=D6(a,s,h,d==="in"||d==="not-in");return ht.create(u,d,p)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function cA(t,e,n){const r=e,i=U0("where",t);return Xh._create(i,r,n)}class H0 extends z0{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new H0(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:ar.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(i,o){let s=i;const a=o.getFlattenedFilters();for(const l of a)dA(s,l),s=nv(s,l)}(e._query,n),new Ha(e.firestore,e.converter,nv(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function lx(t,e,n){if(typeof(n=vt(n))=="string"){if(n==="")throw new te(H.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!s2(e)&&n.indexOf("/")!==-1)throw new te(H.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(Be.fromString(n));if(!re.isDocumentKey(r))throw new te(H.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return OE(t,new re(r))}if(n instanceof vn)return OE(t,n._key);throw new te(H.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Qh(n)}.`)}function ux(t,e){if(!Array.isArray(t)||t.length===0)throw new te(H.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function dA(t,e){const n=function(i,o){for(const s of i)for(const a of s.getFlattenedFilters())if(o.indexOf(a.op)>=0)return a.op;return null}(t.filters,function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new te(H.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new te(H.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}class $6{convertValue(e,n="none"){switch(es(e)){case 0:return null;case 1:return e.booleanValue;case 2:return ct(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Zo(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw ae()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return Ba(e,(i,o)=>{r[i]=this.convertValue(o,n)}),r}convertGeoPoint(e){return new j0(ct(e.latitude),ct(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=v0(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Du(e));default:return null}}convertTimestamp(e){const n=eo(e);return new gt(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=Be.fromString(e);ze(A2(r));const i=new Nu(r.get(1),r.get(3)),o=new re(r.popFirst(5));return i.isEqual(n)||si(`Document ${o} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),o}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fA(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Al{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class hA extends lA{constructor(e,n,r,i,o,s){super(e,n,r,i,s),this._firestore=e,this._firestoreImpl=e,this.metadata=o}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Nd(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(U0("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class Nd extends hA{data(e={}){return super.data(e)}}class B6{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new Al(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new Nd(this._firestore,this._userDataWriter,r.key,r,new Al(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new te(H.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(i,o){if(i._snapshot.oldDocs.isEmpty()){let s=0;return i._snapshot.docChanges.map(a=>{const l=new Nd(i._firestore,i._userDataWriter,a.doc.key,a.doc,new Al(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);return a.doc,{type:"added",doc:l,oldIndex:-1,newIndex:s++}})}{let s=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(a=>o||a.type!==3).map(a=>{const l=new Nd(i._firestore,i._userDataWriter,a.doc.key,a.doc,new Al(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);let u=-1,d=-1;return a.type!==0&&(u=s.indexOf(a.doc.key),s=s.delete(a.doc.key)),a.type!==1&&(s=s.add(a.doc),d=s.indexOf(a.doc.key)),{type:U6(a.type),doc:l,oldIndex:u,newIndex:d}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function U6(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return ae()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yc(t){t=li(t,vn);const e=li(t.firestore,Wa);return b6(M0(e),t._key).then(n=>z6(e,t,n))}class pA extends $6{constructor(e){super(),this.firestore=e}convertBytes(e){return new Sa(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new vn(this.firestore,null,n)}}function qa(t){t=li(t,Ha);const e=li(t.firestore,Wa),n=M0(e),r=new pA(e);return j6(t._query),S6(n,t._query).then(i=>new B6(e,r,t,i))}function ui(t,e,n){t=li(t,vn);const r=li(t.firestore,Wa),i=fA(t.converter,e,n);return q0(r,[rA($0(r),"setDoc",t._key,i,t.converter!==null,n).toMutation(t._key,nr.none())])}function W0(t){return q0(li(t.firestore,Wa),[new x0(t._key,nr.none())])}function ju(t,e){const n=li(t.firestore,Wa),r=rn(t),i=fA(t.converter,e);return q0(n,[rA($0(t.firestore),"addDoc",r._key,i,t.converter!==null,{}).toMutation(r._key,nr.exists(!1))]).then(()=>r)}function q0(t,e){return function(r,i){const o=new Zr;return r.asyncQueue.enqueueAndForget(async()=>c6(await T6(r),i,o)),o.promise}(M0(t),e)}function z6(t,e,n){const r=n.docs.get(e._key),i=new pA(t);return new hA(t,i,e._key,r,new Al(n.hasPendingWrites,n.fromCache),e.converter)}(function(e,n=!0){(function(i){$a=i})(ls),Qo(new Ji("firestore",(r,{instanceIdentifier:i,options:o})=>{const s=r.getProvider("app").getImmediate(),a=new Wa(new Qj(r.getProvider("auth-internal")),new Zj(r.getProvider("app-check-internal")),function(u,d){if(!Object.prototype.hasOwnProperty.apply(u.options,["projectId"]))throw new te(H.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Nu(u.options.projectId,d)}(s,i),s);return o=Object.assign({useFetchStreams:n},o),a._setSettings(o),a},"PUBLIC").setMultipleInstances(!0)),Ir(AE,"4.3.2",e),Ir(AE,"4.3.2","esm2017")})();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mA="firebasestorage.googleapis.com",gA="storageBucket",H6=2*60*1e3,W6=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tt extends Nr{constructor(e,n,r=0){super(pm(e),`Firebase Storage: ${n} (${pm(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,tt.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return pm(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var et;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(et||(et={}));function pm(t){return"storage/"+t}function G0(){const t="An unknown error occurred, please check the error payload for server response.";return new tt(et.UNKNOWN,t)}function q6(t){return new tt(et.OBJECT_NOT_FOUND,"Object '"+t+"' does not exist.")}function G6(t){return new tt(et.QUOTA_EXCEEDED,"Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function K6(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new tt(et.UNAUTHENTICATED,t)}function Q6(){return new tt(et.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function Y6(t){return new tt(et.UNAUTHORIZED,"User does not have permission to access '"+t+"'.")}function X6(){return new tt(et.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function J6(){return new tt(et.CANCELED,"User canceled the upload/download.")}function Z6(t){return new tt(et.INVALID_URL,"Invalid URL '"+t+"'.")}function eB(t){return new tt(et.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function tB(){return new tt(et.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+gA+"' property when initializing the app?")}function nB(){return new tt(et.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function rB(){return new tt(et.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function iB(t){return new tt(et.UNSUPPORTED_ENVIRONMENT,`${t} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function cv(t){return new tt(et.INVALID_ARGUMENT,t)}function vA(){return new tt(et.APP_DELETED,"The Firebase app was deleted.")}function oB(t){return new tt(et.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function Gl(t,e){return new tt(et.INVALID_FORMAT,"String does not match format '"+t+"': "+e)}function pl(t){throw new tt(et.INTERNAL_ERROR,"Internal error: "+t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tn{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=Tn.makeFromUrl(e,n)}catch{return new Tn(e,"")}if(r.path==="")return r;throw eB(e)}static makeFromUrl(e,n){let r=null;const i="([A-Za-z0-9.\\-_]+)";function o(x){x.path.charAt(x.path.length-1)==="/"&&(x.path_=x.path_.slice(0,-1))}const s="(/(.*))?$",a=new RegExp("^gs://"+i+s,"i"),l={bucket:1,path:3};function u(x){x.path_=decodeURIComponent(x.path)}const d="v[A-Za-z0-9_]+",h=n.replace(/[.]/g,"\\."),p="(/([^?#]*).*)?$",g=new RegExp(`^https?://${h}/${d}/b/${i}/o${p}`,"i"),T={bucket:1,path:3},b=n===mA?"(?:storage.googleapis.com|storage.cloud.google.com)":n,S="([^?#]*)",E=new RegExp(`^https?://${b}/${i}/${S}`,"i"),v=[{regex:a,indices:l,postModify:o},{regex:g,indices:T,postModify:u},{regex:E,indices:{bucket:1,path:2},postModify:u}];for(let x=0;x<v.length;x++){const A=v[x],k=A.regex.exec(e);if(k){const P=k[A.indices.bucket];let R=k[A.indices.path];R||(R=""),r=new Tn(P,R),A.postModify(r);break}}if(r==null)throw Z6(e);return r}}class sB{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function aB(t,e,n){let r=1,i=null,o=null,s=!1,a=0;function l(){return a===2}let u=!1;function d(...S){u||(u=!0,e.apply(null,S))}function h(S){i=setTimeout(()=>{i=null,t(g,l())},S)}function p(){o&&clearTimeout(o)}function g(S,...E){if(u){p();return}if(S){p(),d.call(null,S,...E);return}if(l()||s){p(),d.call(null,S,...E);return}r<64&&(r*=2);let v;a===1?(a=2,v=0):v=(r+Math.random())*1e3,h(v)}let T=!1;function b(S){T||(T=!0,p(),!u&&(i!==null?(S||(a=2),clearTimeout(i),h(0)):S||(a=1)))}return h(0),o=setTimeout(()=>{s=!0,b(!0)},n),b}function lB(t){t(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uB(t){return t!==void 0}function cB(t){return typeof t=="object"&&!Array.isArray(t)}function K0(t){return typeof t=="string"||t instanceof String}function cx(t){return Q0()&&t instanceof Blob}function Q0(){return typeof Blob<"u"&&!i4()}function dx(t,e,n,r){if(r<e)throw cv(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw cv(`Invalid value for '${t}'. Expected ${n} or less.`)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jh(t,e,n){let r=e;return n==null&&(r=`https://${e}`),`${n}://${r}/v0${t}`}function yA(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const i=e(r)+"="+e(t[r]);n=n+i+"&"}return n=n.slice(0,-1),n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var $o;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})($o||($o={}));/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dB(t,e){const n=t>=500&&t<600,i=[408,429].indexOf(t)!==-1,o=e.indexOf(t)!==-1;return n||i||o}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fB{constructor(e,n,r,i,o,s,a,l,u,d,h,p=!0){this.url_=e,this.method_=n,this.headers_=r,this.body_=i,this.successCodes_=o,this.additionalRetryCodes_=s,this.callback_=a,this.errorCallback_=l,this.timeout_=u,this.progressCallback_=d,this.connectionFactory_=h,this.retry=p,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((g,T)=>{this.resolve_=g,this.reject_=T,this.start_()})}start_(){const e=(r,i)=>{if(i){r(!1,new rd(!1,null,!0));return}const o=this.connectionFactory_();this.pendingConnection_=o;const s=a=>{const l=a.loaded,u=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(l,u)};this.progressCallback_!==null&&o.addUploadProgressListener(s),o.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&o.removeUploadProgressListener(s),this.pendingConnection_=null;const a=o.getErrorCode()===$o.NO_ERROR,l=o.getStatus();if(!a||dB(l,this.additionalRetryCodes_)&&this.retry){const d=o.getErrorCode()===$o.ABORT;r(!1,new rd(!1,null,d));return}const u=this.successCodes_.indexOf(l)!==-1;r(!0,new rd(u,o))})},n=(r,i)=>{const o=this.resolve_,s=this.reject_,a=i.connection;if(i.wasSuccessCode)try{const l=this.callback_(a,a.getResponse());uB(l)?o(l):o()}catch(l){s(l)}else if(a!==null){const l=G0();l.serverResponse=a.getErrorText(),this.errorCallback_?s(this.errorCallback_(a,l)):s(l)}else if(i.canceled){const l=this.appDelete_?vA():J6();s(l)}else{const l=X6();s(l)}};this.canceled_?n(!1,new rd(!1,null,!0)):this.backoffId_=aB(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&lB(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class rd{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function hB(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function pB(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function mB(t,e){e&&(t["X-Firebase-GMPID"]=e)}function gB(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function vB(t,e,n,r,i,o,s=!0){const a=yA(t.urlParams),l=t.url+a,u=Object.assign({},t.headers);return mB(u,e),hB(u,n),pB(u,o),gB(u,r),new fB(l,t.method,u,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,i,s)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yB(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function wB(...t){const e=yB();if(e!==void 0){const n=new e;for(let r=0;r<t.length;r++)n.append(t[r]);return n.getBlob()}else{if(Q0())return new Blob(t);throw new tt(et.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function _B(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function EB(t){if(typeof atob>"u")throw iB("base-64");return atob(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tr={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class mm{constructor(e,n){this.data=e,this.contentType=n||null}}function xB(t,e){switch(t){case Tr.RAW:return new mm(wA(e));case Tr.BASE64:case Tr.BASE64URL:return new mm(_A(t,e));case Tr.DATA_URL:return new mm(bB(e),SB(e))}throw G0()}function wA(t){const e=[];for(let n=0;n<t.length;n++){let r=t.charCodeAt(n);if(r<=127)e.push(r);else if(r<=2047)e.push(192|r>>6,128|r&63);else if((r&64512)===55296)if(!(n<t.length-1&&(t.charCodeAt(n+1)&64512)===56320))e.push(239,191,189);else{const o=r,s=t.charCodeAt(++n);r=65536|(o&1023)<<10|s&1023,e.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63)}else(r&64512)===56320?e.push(239,191,189):e.push(224|r>>12,128|r>>6&63,128|r&63)}return new Uint8Array(e)}function TB(t){let e;try{e=decodeURIComponent(t)}catch{throw Gl(Tr.DATA_URL,"Malformed data URL.")}return wA(e)}function _A(t,e){switch(t){case Tr.BASE64:{const i=e.indexOf("-")!==-1,o=e.indexOf("_")!==-1;if(i||o)throw Gl(t,"Invalid character '"+(i?"-":"_")+"' found: is it base64url encoded?");break}case Tr.BASE64URL:{const i=e.indexOf("+")!==-1,o=e.indexOf("/")!==-1;if(i||o)throw Gl(t,"Invalid character '"+(i?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=EB(e)}catch(i){throw i.message.includes("polyfill")?i:Gl(t,"Invalid character found")}const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}class EA{constructor(e){this.base64=!1,this.contentType=null;const n=e.match(/^data:([^,]+)?,/);if(n===null)throw Gl(Tr.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const r=n[1]||null;r!=null&&(this.base64=CB(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-7):r),this.rest=e.substring(e.indexOf(",")+1)}}function bB(t){const e=new EA(t);return e.base64?_A(Tr.BASE64,e.rest):TB(e.rest)}function SB(t){return new EA(t).contentType}function CB(t,e){return t.length>=e.length?t.substring(t.length-e.length)===e:!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ai{constructor(e,n){let r=0,i="";cx(e)?(this.data_=e,r=e.size,i=e.type):e instanceof ArrayBuffer?(n?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),r=this.data_.length):e instanceof Uint8Array&&(n?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),r=e.length),this.size_=r,this.type_=i}size(){return this.size_}type(){return this.type_}slice(e,n){if(cx(this.data_)){const r=this.data_,i=_B(r,e,n);return i===null?null:new Ai(i)}else{const r=new Uint8Array(this.data_.buffer,e,n-e);return new Ai(r,!0)}}static getBlob(...e){if(Q0()){const n=e.map(r=>r instanceof Ai?r.data_:r);return new Ai(wB.apply(null,n))}else{const n=e.map(s=>K0(s)?xB(Tr.RAW,s).data:s.data_);let r=0;n.forEach(s=>{r+=s.byteLength});const i=new Uint8Array(r);let o=0;return n.forEach(s=>{for(let a=0;a<s.length;a++)i[o++]=s[a]}),new Ai(i,!0)}}uploadData(){return this.data_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xA(t){let e;try{e=JSON.parse(t)}catch{return null}return cB(e)?e:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function IB(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function AB(t,e){const n=e.split("/").filter(r=>r.length>0).join("/");return t.length===0?n:t+"/"+n}function TA(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function PB(t,e){return e}class Zt{constructor(e,n,r,i){this.server=e,this.local=n||e,this.writable=!!r,this.xform=i||PB}}let id=null;function kB(t){return!K0(t)||t.length<2?t:TA(t)}function bA(){if(id)return id;const t=[];t.push(new Zt("bucket")),t.push(new Zt("generation")),t.push(new Zt("metageneration")),t.push(new Zt("name","fullPath",!0));function e(o,s){return kB(s)}const n=new Zt("name");n.xform=e,t.push(n);function r(o,s){return s!==void 0?Number(s):s}const i=new Zt("size");return i.xform=r,t.push(i),t.push(new Zt("timeCreated")),t.push(new Zt("updated")),t.push(new Zt("md5Hash",null,!0)),t.push(new Zt("cacheControl",null,!0)),t.push(new Zt("contentDisposition",null,!0)),t.push(new Zt("contentEncoding",null,!0)),t.push(new Zt("contentLanguage",null,!0)),t.push(new Zt("contentType",null,!0)),t.push(new Zt("metadata","customMetadata",!0)),id=t,id}function RB(t,e){function n(){const r=t.bucket,i=t.fullPath,o=new Tn(r,i);return e._makeStorageReference(o)}Object.defineProperty(t,"ref",{get:n})}function OB(t,e,n){const r={};r.type="file";const i=n.length;for(let o=0;o<i;o++){const s=n[o];r[s.local]=s.xform(r,e[s.server])}return RB(r,t),r}function SA(t,e,n){const r=xA(e);return r===null?null:OB(t,r,n)}function DB(t,e,n,r){const i=xA(e);if(i===null||!K0(i.downloadTokens))return null;const o=i.downloadTokens;if(o.length===0)return null;const s=encodeURIComponent;return o.split(",").map(u=>{const d=t.bucket,h=t.fullPath,p="/b/"+s(d)+"/o/"+s(h),g=Jh(p,n,r),T=yA({alt:"media",token:u});return g+T})[0]}function NB(t,e){const n={},r=e.length;for(let i=0;i<r;i++){const o=e[i];o.writable&&(n[o.server]=t[o.local])}return JSON.stringify(n)}class Y0{constructor(e,n,r,i){this.url=e,this.method=n,this.handler=r,this.timeout=i,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function CA(t){if(!t)throw G0()}function LB(t,e){function n(r,i){const o=SA(t,i,e);return CA(o!==null),o}return n}function MB(t,e){function n(r,i){const o=SA(t,i,e);return CA(o!==null),DB(o,i,t.host,t._protocol)}return n}function IA(t){function e(n,r){let i;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?i=Q6():i=K6():n.getStatus()===402?i=G6(t.bucket):n.getStatus()===403?i=Y6(t.path):i=r,i.status=n.getStatus(),i.serverResponse=r.serverResponse,i}return e}function AA(t){const e=IA(t);function n(r,i){let o=e(r,i);return r.getStatus()===404&&(o=q6(t.path)),o.serverResponse=i.serverResponse,o}return n}function VB(t,e,n){const r=e.fullServerUrl(),i=Jh(r,t.host,t._protocol),o="GET",s=t.maxOperationRetryTime,a=new Y0(i,o,MB(t,n),s);return a.errorHandler=AA(e),a}function jB(t,e){const n=e.fullServerUrl(),r=Jh(n,t.host,t._protocol),i="DELETE",o=t.maxOperationRetryTime;function s(l,u){}const a=new Y0(r,i,s,o);return a.successCodes=[200,204],a.errorHandler=AA(e),a}function FB(t,e){return t&&t.contentType||e&&e.type()||"application/octet-stream"}function $B(t,e,n){const r=Object.assign({},n);return r.fullPath=t.path,r.size=e.size(),r.contentType||(r.contentType=FB(null,e)),r}function BB(t,e,n,r,i){const o=e.bucketOnlyServerUrl(),s={"X-Goog-Upload-Protocol":"multipart"};function a(){let v="";for(let x=0;x<2;x++)v=v+Math.random().toString().slice(2);return v}const l=a();s["Content-Type"]="multipart/related; boundary="+l;const u=$B(e,r,i),d=NB(u,n),h="--"+l+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+d+`\r
--`+l+`\r
Content-Type: `+u.contentType+`\r
\r
`,p=`\r
--`+l+"--",g=Ai.getBlob(h,r,p);if(g===null)throw nB();const T={name:u.fullPath},b=Jh(o,t.host,t._protocol),S="POST",E=t.maxUploadRetryTime,m=new Y0(b,S,LB(t,n),E);return m.urlParams=T,m.headers=s,m.body=g.uploadData(),m.errorHandler=IA(e),m}class UB{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=$o.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=$o.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=$o.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,n,r,i){if(this.sent_)throw pl("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(n,e,!0),i!==void 0)for(const o in i)i.hasOwnProperty(o)&&this.xhr_.setRequestHeader(o,i[o].toString());return r!==void 0?this.xhr_.send(r):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw pl("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw pl("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw pl("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw pl("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class zB extends UB{initXhr(){this.xhr_.responseType="text"}}function X0(){return new zB}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ts{constructor(e,n){this._service=e,n instanceof Tn?this._location=n:this._location=Tn.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new ts(e,n)}get root(){const e=new Tn(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return TA(this._location.path)}get storage(){return this._service}get parent(){const e=IB(this._location.path);if(e===null)return null;const n=new Tn(this._location.bucket,e);return new ts(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw oB(e)}}function HB(t,e,n){t._throwIfRoot("uploadBytes");const r=BB(t.storage,t._location,bA(),new Ai(e,!0),n);return t.storage.makeRequestWithTokens(r,X0).then(i=>({metadata:i,ref:t}))}function WB(t){t._throwIfRoot("getDownloadURL");const e=VB(t.storage,t._location,bA());return t.storage.makeRequestWithTokens(e,X0).then(n=>{if(n===null)throw rB();return n})}function qB(t){t._throwIfRoot("deleteObject");const e=jB(t.storage,t._location);return t.storage.makeRequestWithTokens(e,X0)}function GB(t,e){const n=AB(t._location.path,e),r=new Tn(t._location.bucket,n);return new ts(t.storage,r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function KB(t){return/^[A-Za-z]+:\/\//.test(t)}function QB(t,e){return new ts(t,e)}function PA(t,e){if(t instanceof J0){const n=t;if(n._bucket==null)throw tB();const r=new ts(n,n._bucket);return e!=null?PA(r,e):r}else return e!==void 0?GB(t,e):t}function YB(t,e){if(e&&KB(e)){if(t instanceof J0)return QB(t,e);throw cv("To use ref(service, url), the first argument must be a Storage instance.")}else return PA(t,e)}function fx(t,e){const n=e==null?void 0:e[gA];return n==null?null:Tn.makeFromBucketSpec(n,t)}function XB(t,e,n,r={}){t.host=`${e}:${n}`,t._protocol="http";const{mockUserToken:i}=r;i&&(t._overrideAuthToken=typeof i=="string"?i:cC(i,t.app.options.projectId))}class J0{constructor(e,n,r,i,o){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=i,this._firebaseVersion=o,this._bucket=null,this._host=mA,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=H6,this._maxUploadRetryTime=W6,this._requests=new Set,i!=null?this._bucket=Tn.makeFromBucketSpec(i,this._host):this._bucket=fx(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=Tn.makeFromBucketSpec(this._url,e):this._bucket=fx(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){dx("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){dx("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new ts(this,e)}_makeRequest(e,n,r,i,o=!0){if(this._deleted)return new sB(vA());{const s=vB(e,this._appId,r,i,n,this._firebaseVersion,o);return this._requests.add(s),s.getPromise().then(()=>this._requests.delete(s),()=>this._requests.delete(s)),s}}async makeRequestWithTokens(e,n){const[r,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,i).getPromise()}}const hx="@firebase/storage",px="0.11.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kA="storage";function Z0(t,e,n){return t=vt(t),HB(t,e,n)}function ew(t){return t=vt(t),WB(t)}function tw(t){return t=vt(t),qB(t)}function Ga(t,e){return t=vt(t),YB(t,e)}function JB(t=Vy(),e){t=vt(t);const r=Eh(t,kA).getImmediate({identifier:e}),i=aC("storage");return i&&ZB(r,...i),r}function ZB(t,e,n,r={}){XB(t,e,n,r)}function e9(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),i=t.getProvider("app-check-internal");return new J0(n,r,i,e,ls)}function t9(){Qo(new Ji(kA,e9,"PUBLIC").setMultipleInstances(!0)),Ir(hx,px,""),Ir(hx,px,"esm2017")}t9();const n9={apiKey:"AIzaSyCSsgfeoEPYt1FVt3z0pgFCWE1hYhx1skg",authDomain:"alquicancha-d6d01.firebaseapp.com",projectId:"alquicancha-d6d01",storageBucket:"alquicancha-d6d01.appspot.com",messagingSenderId:"1094541898575",appId:"1:1094541898575:web:d9289dd62ccbf70d568b3a"},nw=hC(n9),rw=F3(nw),at=P6(nw),Ka=JB(nw),iw=t=>{const e=new URL(t);return decodeURIComponent(e.pathname.split("/").pop())},dv=async()=>{const t=st(at,"productos");try{return(await qa(t)).docs.map(r=>({id:r.id,...r.data()}))}catch(e){console.log(e)}},RA=async t=>{try{const e=Ga(Ka,`productosImagenes/${t.name}`);return await Z0(e,t),await ew(e)}catch(e){return console.log(e),null}},r9=async t=>{try{const e=iw(t),n=Ga(Ka,`productosImagenes/${e}`);await tw(n),console.log("Imagen eliminada con éxito")}catch(e){console.log(e)}},i9=async t=>{try{if(t.imagenes.length){const n=(await Promise.all(t.imagenes.map(async u=>await RA(u.img)))).map(u=>({urlImage:u})),r={...t,imagenes:n},i=st(at,"productos"),s=(await ju(i,r)).id,a=rn(i,s),l=await ui(a,{id:s},{merge:!0});return console.log("Producto creado exitosamente",l),l}else{const e=st(at,"productos"),r=(await ju(e,t)).id,i=rn(e,r),o=await ui(i,{id:r},{merge:!0});return console.log("Producto creado exitosamente",o),o}}catch(e){return console.log("Error al guardar producto en BD",e),null}},o9=async t=>{try{const e=st(at,"productos"),n=rn(e,t),i=(await yc(n)).data(),o=await W0(n);for(const s of i.imagenes)await r9(s.urlImage);return console.log("Producto y sus imágenes asociadas eliminadas con éxito"),o}catch(e){console.log(e)}},ow=async(t,e)=>{try{if(e.imagenes.length){const r=(await Promise.all(e.imagenes.map(async l=>await RA(l.img)))).map(l=>({urlImage:l})),i={...e,imagenes:r},o=st(at,"productos"),s=rn(o,t),a=await ui(s,i,{merge:!0});console.log("Edicion correcta de producto :",t)}else{const n=st(at,"productos"),r=rn(n,t),i=await ui(r,e,{merge:!0});console.log("Edicion correcta de producto :",t)}}catch(n){console.log(n)}},s9=async t=>{try{const e=st(at,"productos"),n=rn(e,t),r=await yc(n);return r.exists()?r.data():(console.log("El documento no existe"),null)}catch(e){return console.log(e),null}},sw=async(t,e)=>{try{const n=st(at,"productos"),r=uA(n,cA(t,"==",e));return(await qa(r)).docs.map(s=>({id:s.id,...s.data()}))}catch(n){console.log(n)}},mx=async(t,e)=>{(await sw("categoria",t)).map(async r=>{r.categoria=e,await ow(r.id,r)})},a9=async t=>{const n=(await sw("atributos",t)).map(async r=>{r.atributos=r.atributos.filter(i=>i!==i),await ow(r.id,r)});await Promise.all(n),console.log("Atributo eliminado exitosamente de los productos.")},fv=async()=>{const t=st(at,"categorias");try{return(await qa(t)).docs.map(r=>({id:r.id,...r.data()}))}catch(e){console.log(e)}},OA=async t=>{try{const e=Ga(Ka,`categoriasImagenes/${t.name}`);return await Z0(e,t),await ew(e)}catch(e){console.log(e)}},l9=async t=>{try{const e=iw(t),n=Ga(Ka,`${e}`);await tw(n),console.log("Imagen eliminada con éxito")}catch(e){console.log(e)}},u9=async t=>{try{t.urlImage=await OA(t.imagen);const{imagen:e,...n}=t,r=st(at,"categorias"),o=(await ju(r,n)).id,s=rn(r,o),a=await ui(s,{id:o},{merge:!0});return console.log("Categoria creada exitosamente",a),a}catch(e){return console.log("Error al guardar categoria en BD",e),null}},c9=async t=>{if(t==="9a9crFjibptLfhr3glcE")return console.log("No se puede eliminar la categoria principal!"),mx(t,"9a9crFjibptLfhr3glcE"),null;try{mx(t,"9a9crFjibptLfhr3glcE");const e=st(at,"categorias"),n=rn(e,t),i=(await yc(n)).data(),o=await W0(n);return await l9(i.urlImage),o}catch(e){console.log(e)}},d9=async(t,e)=>{try{e.urlImage=await OA(e.imagen);const n=st(at,"categorias"),{imagen:r,...i}=e,o=rn(n,t);await ui(o,i,{merge:!0}),console.log("Edicion correcta de la categoria :",t)}catch(n){console.log(n)}},f9={theme:"light"},Lt=C.createContext(),h9=({children:t})=>{const e=localStorage.getItem("theme")||f9.theme,n=localStorage.getItem("logged")==="true",r=localStorage.getItem("isAdmin")==="true",i=JSON.parse(localStorage.getItem("user")),o=JSON.parse(localStorage.getItem("productos")),s=JSON.parse(localStorage.getItem("allProducts")),a=JSON.parse(localStorage.getItem("categorias")),[l,u]=C.useState(e),[d,h]=C.useState(n),[p,g]=C.useState(r),[T,b]=C.useState(i),[S,E]=C.useState(o),[m,v]=C.useState(s),[x,A]=C.useState(a),k=async()=>{try{console.log("Cargando datos al inicio");const Y=await dv();E(Y),v(Y);const N=await fv();A(N),localStorage.setItem("allProducts",JSON.stringify(Y))}catch(Y){console.error("Error al cargar datos:",Y)}};C.useEffect(()=>{localStorage.setItem("theme",l),localStorage.setItem("logged",d),localStorage.setItem("isAdmin",p),d&&localStorage.setItem("user",JSON.stringify(T)),k()},[l,d,p,T]),C.useEffect(()=>{localStorage.setItem("productos",JSON.stringify(S))},[S]),C.useEffect(()=>{localStorage.setItem("categorias",JSON.stringify(x))},[x]);const P=()=>{u(Y=>Y==="light"?"dark":"light")},R=()=>{h(!0)},O=()=>{localStorage.removeItem("user"),h(!1)},D=()=>{g(!0)},q=()=>{g(!1)},B=Y=>{b(Y)},U=Y=>{E(Y),console.log("guardando :",Y," en localstorage"),localStorage.setItem("productos",JSON.stringify(Y))},V=Y=>{A(Y)},z=C.useMemo(()=>({theme:l,toggleTheme:P,logged:d,login:R,logout:O,isAdmin:p,loginAdmin:D,logoutAdmin:q,user:T,setUserData:B,setProductData:U,productos:S,setCategoriasData:V,categorias:x,allProducts:m}),[l,d,p,T,S,x,m]);return _.jsx(Lt.Provider,{value:{contextValue:z},children:t})};var DA={exports:{}};/*!
* sweetalert2 v11.10.1
* Released under the MIT License.
*/(function(t,e){(function(n,r){t.exports=r()})(gi,function(){function n(w,c){var f=w==null?null:typeof Symbol<"u"&&w[Symbol.iterator]||w["@@iterator"];if(f!=null){var y,I,F,Z,ue=[],me=!0,Ve=!1;try{if(F=(f=f.call(w)).next,c===0){if(Object(f)!==f)return;me=!1}else for(;!(me=(y=F.call(f)).done)&&(ue.push(y.value),ue.length!==c);me=!0);}catch(nl){Ve=!0,I=nl}finally{try{if(!me&&f.return!=null&&(Z=f.return(),Object(Z)!==Z))return}finally{if(Ve)throw I}}return ue}}function r(w){"@babel/helpers - typeof";return r=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(c){return typeof c}:function(c){return c&&typeof Symbol=="function"&&c.constructor===Symbol&&c!==Symbol.prototype?"symbol":typeof c},r(w)}function i(w,c){if(!(w instanceof c))throw new TypeError("Cannot call a class as a function")}function o(w,c){for(var f=0;f<c.length;f++){var y=c[f];y.enumerable=y.enumerable||!1,y.configurable=!0,"value"in y&&(y.writable=!0),Object.defineProperty(w,q(y.key),y)}}function s(w,c,f){return c&&o(w.prototype,c),f&&o(w,f),Object.defineProperty(w,"prototype",{writable:!1}),w}function a(w,c){if(typeof c!="function"&&c!==null)throw new TypeError("Super expression must either be null or a function");w.prototype=Object.create(c&&c.prototype,{constructor:{value:w,writable:!0,configurable:!0}}),Object.defineProperty(w,"prototype",{writable:!1}),c&&u(w,c)}function l(w){return l=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(f){return f.__proto__||Object.getPrototypeOf(f)},l(w)}function u(w,c){return u=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(y,I){return y.__proto__=I,y},u(w,c)}function d(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function h(w,c,f){return d()?h=Reflect.construct.bind():h=function(I,F,Z){var ue=[null];ue.push.apply(ue,F);var me=Function.bind.apply(I,ue),Ve=new me;return Z&&u(Ve,Z.prototype),Ve},h.apply(null,arguments)}function p(w){if(w===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return w}function g(w,c){if(c&&(typeof c=="object"||typeof c=="function"))return c;if(c!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return p(w)}function T(w){var c=d();return function(){var y=l(w),I;if(c){var F=l(this).constructor;I=Reflect.construct(y,arguments,F)}else I=y.apply(this,arguments);return g(this,I)}}function b(w,c){for(;!Object.prototype.hasOwnProperty.call(w,c)&&(w=l(w),w!==null););return w}function S(){return typeof Reflect<"u"&&Reflect.get?S=Reflect.get.bind():S=function(c,f,y){var I=b(c,f);if(I){var F=Object.getOwnPropertyDescriptor(I,f);return F.get?F.get.call(arguments.length<3?c:y):F.value}},S.apply(this,arguments)}function E(w,c){return x(w)||n(w,c)||k(w,c)||O()}function m(w){return v(w)||A(w)||k(w)||R()}function v(w){if(Array.isArray(w))return P(w)}function x(w){if(Array.isArray(w))return w}function A(w){if(typeof Symbol<"u"&&w[Symbol.iterator]!=null||w["@@iterator"]!=null)return Array.from(w)}function k(w,c){if(w){if(typeof w=="string")return P(w,c);var f=Object.prototype.toString.call(w).slice(8,-1);if(f==="Object"&&w.constructor&&(f=w.constructor.name),f==="Map"||f==="Set")return Array.from(w);if(f==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(f))return P(w,c)}}function P(w,c){(c==null||c>w.length)&&(c=w.length);for(var f=0,y=new Array(c);f<c;f++)y[f]=w[f];return y}function R(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function O(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function D(w,c){if(typeof w!="object"||w===null)return w;var f=w[Symbol.toPrimitive];if(f!==void 0){var y=f.call(w,c||"default");if(typeof y!="object")return y;throw new TypeError("@@toPrimitive must return a primitive value.")}return(c==="string"?String:Number)(w)}function q(w){var c=D(w,"string");return typeof c=="symbol"?c:String(c)}function B(w,c){var f=V(w,c,"get");return z(w,f)}function U(w,c,f){var y=V(w,c,"set");return Y(w,y,f),f}function V(w,c,f){if(!c.has(w))throw new TypeError("attempted to "+f+" private field on non-instance");return c.get(w)}function z(w,c){return c.get?c.get.call(w):c.value}function Y(w,c,f){if(c.set)c.set.call(w,f);else{if(!c.writable)throw new TypeError("attempted to set read only private field");c.value=f}}function N(w,c){if(c.has(w))throw new TypeError("Cannot initialize the same private elements twice on an object")}function M(w,c,f){N(w,c),c.set(w,f)}var W=100,$={},ie=function(){$.previousActiveElement instanceof HTMLElement?($.previousActiveElement.focus(),$.previousActiveElement=null):document.body&&document.body.focus()},he=function(c){return new Promise(function(f){if(!c)return f();var y=window.scrollX,I=window.scrollY;$.restoreFocusTimeout=setTimeout(function(){ie(),f()},W),window.scrollTo(y,I)})},Oe="swal2-",Te=["container","shown","height-auto","iosfix","popup","modal","no-backdrop","no-transition","toast","toast-shown","show","hide","close","title","html-container","actions","confirm","deny","cancel","default-outline","footer","icon","icon-content","image","input","file","range","select","radio","checkbox","label","textarea","inputerror","input-label","validation-message","progress-steps","active-progress-step","progress-step","progress-step-line","loader","loading","styled","top","top-start","top-end","top-left","top-right","center","center-start","center-end","center-left","center-right","bottom","bottom-start","bottom-end","bottom-left","bottom-right","grow-row","grow-column","grow-fullscreen","rtl","timer-progress-bar","timer-progress-bar-container","scrollbar-measure","icon-success","icon-warning","icon-info","icon-question","icon-error"],L=Te.reduce(function(w,c){return w[c]=Oe+c,w},{}),ye=["success","warning","info","question","error"],Me=ye.reduce(function(w,c){return w[c]=Oe+c,w},{}),Yt="SweetAlert2:",an=function(c){return c.charAt(0).toUpperCase()+c.slice(1)},Ce=function(c){console.warn("".concat(Yt," ").concat(r(c)==="object"?c.join(" "):c))},ln=function(c){console.error("".concat(Yt," ").concat(c))},kn=[],hs=function(c){kn.includes(c)||(kn.push(c),Ce(c))},fi=function(c,f){hs('"'.concat(c,'" is deprecated and will be removed in the next major release. Please use "').concat(f,'" instead.'))},Lr=function(c){return typeof c=="function"?c():c},Mr=function(c){return c&&typeof c.toPromise=="function"},un=function(c){return Mr(c)?c.toPromise():Promise.resolve(c)},Vr=function(c){return c&&Promise.resolve(c)===c},De=function(){return document.body.querySelector(".".concat(L.container))},Xt=function(c){var f=De();return f?f.querySelector(c):null},Jt=function(c){return Xt(".".concat(c))},be=function(){return Jt(L.popup)},uo=function(){return Jt(L.icon)},J=function(){return Jt(L["icon-content"])},oe=function(){return Jt(L.title)},He=function(){return Jt(L["html-container"])},lt=function(){return Jt(L.image)},St=function(){return Jt(L["progress-steps"])},cr=function(){return Jt(L["validation-message"])},Ct=function(){return Xt(".".concat(L.actions," .").concat(L.confirm))},dr=function(){return Xt(".".concat(L.actions," .").concat(L.cancel))},Hn=function(){return Xt(".".concat(L.actions," .").concat(L.deny))},Ja=function(){return Jt(L["input-label"])},Wn=function(){return Xt(".".concat(L.loader))},jr=function(){return Jt(L.actions)},ps=function(){return Jt(L.footer)},hi=function(){return Jt(L["timer-progress-bar"])},co=function(){return Jt(L.close)},ip=`
  a[href],
  area[href],
  input:not([disabled]),
  select:not([disabled]),
  textarea:not([disabled]),
  button:not([disabled]),
  iframe,
  object,
  embed,
  [tabindex="0"],
  [contenteditable],
  audio[controls],
  video[controls],
  summary
`,op=function(){var c=be();if(!c)return[];var f=c.querySelectorAll('[tabindex]:not([tabindex="-1"]):not([tabindex="0"])'),y=Array.from(f).sort(function(Z,ue){var me=parseInt(Z.getAttribute("tabindex")||"0"),Ve=parseInt(ue.getAttribute("tabindex")||"0");return me>Ve?1:me<Ve?-1:0}),I=c.querySelectorAll(ip),F=Array.from(I).filter(function(Z){return Z.getAttribute("tabindex")!=="-1"});return m(new Set(y.concat(F))).filter(function(Z){return wn(Z)})},sp=function(){return Fr(document.body,L.shown)&&!Fr(document.body,L["toast-shown"])&&!Fr(document.body,L["no-backdrop"])},xc=function(){var c=be();return c?Fr(c,L.toast):!1},NP=function(){var c=be();return c?c.hasAttribute("data-loading"):!1},yn=function(c,f){if(c.textContent="",f){var y=new DOMParser,I=y.parseFromString(f,"text/html"),F=I.querySelector("head");F&&Array.from(F.childNodes).forEach(function(ue){c.appendChild(ue)});var Z=I.querySelector("body");Z&&Array.from(Z.childNodes).forEach(function(ue){ue instanceof HTMLVideoElement||ue instanceof HTMLAudioElement?c.appendChild(ue.cloneNode(!0)):c.appendChild(ue)})}},Fr=function(c,f){if(!f)return!1;for(var y=f.split(/\s+/),I=0;I<y.length;I++)if(!c.classList.contains(y[I]))return!1;return!0},LP=function(c,f){Array.from(c.classList).forEach(function(y){!Object.values(L).includes(y)&&!Object.values(Me).includes(y)&&!Object.values(f.showClass||{}).includes(y)&&c.classList.remove(y)})},Rn=function(c,f,y){if(LP(c,f),f.customClass&&f.customClass[y]){if(typeof f.customClass[y]!="string"&&!f.customClass[y].forEach){Ce("Invalid type of customClass.".concat(y,'! Expected string or iterable object, got "').concat(r(f.customClass[y]),'"'));return}Ee(c,f.customClass[y])}},Tc=function(c,f){if(!f)return null;switch(f){case"select":case"textarea":case"file":return c.querySelector(".".concat(L.popup," > .").concat(L[f]));case"checkbox":return c.querySelector(".".concat(L.popup," > .").concat(L.checkbox," input"));case"radio":return c.querySelector(".".concat(L.popup," > .").concat(L.radio," input:checked"))||c.querySelector(".".concat(L.popup," > .").concat(L.radio," input:first-child"));case"range":return c.querySelector(".".concat(L.popup," > .").concat(L.range," input"));default:return c.querySelector(".".concat(L.popup," > .").concat(L.input))}},vw=function(c){if(c.focus(),c.type!=="file"){var f=c.value;c.value="",c.value=f}},yw=function(c,f,y){!c||!f||(typeof f=="string"&&(f=f.split(/\s+/).filter(Boolean)),f.forEach(function(I){Array.isArray(c)?c.forEach(function(F){y?F.classList.add(I):F.classList.remove(I)}):y?c.classList.add(I):c.classList.remove(I)}))},Ee=function(c,f){yw(c,f,!0)},fr=function(c,f){yw(c,f,!1)},pi=function(c,f){for(var y=Array.from(c.children),I=0;I<y.length;I++){var F=y[I];if(F instanceof HTMLElement&&Fr(F,f))return F}},fo=function(c,f,y){y==="".concat(parseInt(y))&&(y=parseInt(y)),y||parseInt(y)===0?c.style[f]=typeof y=="number"?"".concat(y,"px"):y:c.style.removeProperty(f)},yt=function(c){var f=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"flex";c&&(c.style.display=f)},Mt=function(c){c&&(c.style.display="none")},ap=function(c){var f=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"block";c&&new MutationObserver(function(){Za(c,c.innerHTML,f)}).observe(c,{childList:!0,subtree:!0})},ww=function(c,f,y,I){var F=c.querySelector(f);F&&(F.style[y]=I)},Za=function(c,f){var y=arguments.length>2&&arguments[2]!==void 0?arguments[2]:"flex";f?yt(c,y):Mt(c)},wn=function(c){return!!(c&&(c.offsetWidth||c.offsetHeight||c.getClientRects().length))},MP=function(){return!wn(Ct())&&!wn(Hn())&&!wn(dr())},_w=function(c){return c.scrollHeight>c.clientHeight},Ew=function(c){var f=window.getComputedStyle(c),y=parseFloat(f.getPropertyValue("animation-duration")||"0"),I=parseFloat(f.getPropertyValue("transition-duration")||"0");return y>0||I>0},lp=function(c){var f=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,y=hi();y&&wn(y)&&(f&&(y.style.transition="none",y.style.width="100%"),setTimeout(function(){y.style.transition="width ".concat(c/1e3,"s linear"),y.style.width="0%"},10))},VP=function(){var c=hi();if(c){var f=parseInt(window.getComputedStyle(c).width);c.style.removeProperty("transition"),c.style.width="100%";var y=parseInt(window.getComputedStyle(c).width),I=f/y*100;c.style.width="".concat(I,"%")}},xw=function(){return typeof window>"u"||typeof document>"u"},jP=`
 <div aria-labelledby="`.concat(L.title,'" aria-describedby="').concat(L["html-container"],'" class="').concat(L.popup,`" tabindex="-1">
   <button type="button" class="`).concat(L.close,`"></button>
   <ul class="`).concat(L["progress-steps"],`"></ul>
   <div class="`).concat(L.icon,`"></div>
   <img class="`).concat(L.image,`" />
   <h2 class="`).concat(L.title,'" id="').concat(L.title,`"></h2>
   <div class="`).concat(L["html-container"],'" id="').concat(L["html-container"],`"></div>
   <input class="`).concat(L.input,'" id="').concat(L.input,`" />
   <input type="file" class="`).concat(L.file,`" />
   <div class="`).concat(L.range,`">
     <input type="range" />
     <output></output>
   </div>
   <select class="`).concat(L.select,'" id="').concat(L.select,`"></select>
   <div class="`).concat(L.radio,`"></div>
   <label class="`).concat(L.checkbox,`">
     <input type="checkbox" id="`).concat(L.checkbox,`" />
     <span class="`).concat(L.label,`"></span>
   </label>
   <textarea class="`).concat(L.textarea,'" id="').concat(L.textarea,`"></textarea>
   <div class="`).concat(L["validation-message"],'" id="').concat(L["validation-message"],`"></div>
   <div class="`).concat(L.actions,`">
     <div class="`).concat(L.loader,`"></div>
     <button type="button" class="`).concat(L.confirm,`"></button>
     <button type="button" class="`).concat(L.deny,`"></button>
     <button type="button" class="`).concat(L.cancel,`"></button>
   </div>
   <div class="`).concat(L.footer,`"></div>
   <div class="`).concat(L["timer-progress-bar-container"],`">
     <div class="`).concat(L["timer-progress-bar"],`"></div>
   </div>
 </div>
`).replace(/(^|\n)\s*/g,""),FP=function(){var c=De();return c?(c.remove(),fr([document.documentElement,document.body],[L["no-backdrop"],L["toast-shown"],L["has-column"]]),!0):!1},ho=function(){$.currentInstance.resetValidationMessage()},$P=function(){var c=be(),f=pi(c,L.input),y=pi(c,L.file),I=c.querySelector(".".concat(L.range," input")),F=c.querySelector(".".concat(L.range," output")),Z=pi(c,L.select),ue=c.querySelector(".".concat(L.checkbox," input")),me=pi(c,L.textarea);f.oninput=ho,y.onchange=ho,Z.onchange=ho,ue.onchange=ho,me.oninput=ho,I.oninput=function(){ho(),F.value=I.value},I.onchange=function(){ho(),F.value=I.value}},BP=function(c){return typeof c=="string"?document.querySelector(c):c},UP=function(c){var f=be();f.setAttribute("role",c.toast?"alert":"dialog"),f.setAttribute("aria-live",c.toast?"polite":"assertive"),c.toast||f.setAttribute("aria-modal","true")},zP=function(c){window.getComputedStyle(c).direction==="rtl"&&Ee(De(),L.rtl)},HP=function(c){var f=FP();if(xw()){ln("SweetAlert2 requires document to initialize");return}var y=document.createElement("div");y.className=L.container,f&&Ee(y,L["no-transition"]),yn(y,jP);var I=BP(c.target);I.appendChild(y),UP(c),zP(I),$P()},up=function(c,f){c instanceof HTMLElement?f.appendChild(c):r(c)==="object"?WP(c,f):c&&yn(f,c)},WP=function(c,f){c.jquery?qP(f,c):yn(f,c.toString())},qP=function(c,f){if(c.textContent="",0 in f)for(var y=0;y in f;y++)c.appendChild(f[y].cloneNode(!0));else c.appendChild(f.cloneNode(!0))},po=function(){if(xw())return!1;var w=document.createElement("div");return typeof w.style.webkitAnimation<"u"?"webkitAnimationEnd":typeof w.style.animation<"u"?"animationend":!1}(),GP=function(c,f){var y=jr(),I=Wn();!y||!I||(!f.showConfirmButton&&!f.showDenyButton&&!f.showCancelButton?Mt(y):yt(y),Rn(y,f,"actions"),KP(y,I,f),yn(I,f.loaderHtml||""),Rn(I,f,"loader"))};function KP(w,c,f){var y=Ct(),I=Hn(),F=dr();!y||!I||!F||(cp(y,"confirm",f),cp(I,"deny",f),cp(F,"cancel",f),QP(y,I,F,f),f.reverseButtons&&(f.toast?(w.insertBefore(F,y),w.insertBefore(I,y)):(w.insertBefore(F,c),w.insertBefore(I,c),w.insertBefore(y,c))))}function QP(w,c,f,y){if(!y.buttonsStyling){fr([w,c,f],L.styled);return}Ee([w,c,f],L.styled),y.confirmButtonColor&&(w.style.backgroundColor=y.confirmButtonColor,Ee(w,L["default-outline"])),y.denyButtonColor&&(c.style.backgroundColor=y.denyButtonColor,Ee(c,L["default-outline"])),y.cancelButtonColor&&(f.style.backgroundColor=y.cancelButtonColor,Ee(f,L["default-outline"]))}function cp(w,c,f){var y=an(c);Za(w,f["show".concat(y,"Button")],"inline-block"),yn(w,f["".concat(c,"ButtonText")]||""),w.setAttribute("aria-label",f["".concat(c,"ButtonAriaLabel")]||""),w.className=L[c],Rn(w,f,"".concat(c,"Button"))}var YP=function(c,f){var y=co();y&&(yn(y,f.closeButtonHtml||""),Rn(y,f,"closeButton"),Za(y,f.showCloseButton),y.setAttribute("aria-label",f.closeButtonAriaLabel||""))},XP=function(c,f){var y=De();y&&(JP(y,f.backdrop),ZP(y,f.position),ek(y,f.grow),Rn(y,f,"container"))};function JP(w,c){typeof c=="string"?w.style.background=c:c||Ee([document.documentElement,document.body],L["no-backdrop"])}function ZP(w,c){c&&(c in L?Ee(w,L[c]):(Ce('The "position" parameter is not valid, defaulting to "center"'),Ee(w,L.center)))}function ek(w,c){c&&Ee(w,L["grow-".concat(c)])}var Ne={innerParams:new WeakMap,domCache:new WeakMap},tk=["input","file","range","select","radio","checkbox","textarea"],nk=function(c,f){var y=be();if(y){var I=Ne.innerParams.get(c),F=!I||f.input!==I.input;tk.forEach(function(Z){var ue=pi(y,L[Z]);ue&&(ok(Z,f.inputAttributes),ue.className=L[Z],F&&Mt(ue))}),f.input&&(F&&rk(f),sk(f))}},rk=function(c){if(c.input){if(!nt[c.input]){ln("Unexpected type of input! Expected ".concat(Object.keys(nt).join(" | "),', got "').concat(c.input,'"'));return}var f=Tw(c.input),y=nt[c.input](f,c);yt(f),c.inputAutoFocus&&setTimeout(function(){vw(y)})}},ik=function(c){for(var f=0;f<c.attributes.length;f++){var y=c.attributes[f].name;["id","type","value","style"].includes(y)||c.removeAttribute(y)}},ok=function(c,f){var y=Tc(be(),c);if(y){ik(y);for(var I in f)y.setAttribute(I,f[I])}},sk=function(c){var f=Tw(c.input);r(c.customClass)==="object"&&Ee(f,c.customClass.input)},dp=function(c,f){(!c.placeholder||f.inputPlaceholder)&&(c.placeholder=f.inputPlaceholder)},el=function(c,f,y){if(y.inputLabel){var I=document.createElement("label"),F=L["input-label"];I.setAttribute("for",c.id),I.className=F,r(y.customClass)==="object"&&Ee(I,y.customClass.inputLabel),I.innerText=y.inputLabel,f.insertAdjacentElement("beforebegin",I)}},Tw=function(c){return pi(be(),L[c]||L.input)},bc=function(c,f){["string","number"].includes(r(f))?c.value="".concat(f):Vr(f)||Ce('Unexpected type of inputValue! Expected "string", "number" or "Promise", got "'.concat(r(f),'"'))},nt={};nt.text=nt.email=nt.password=nt.number=nt.tel=nt.url=nt.search=nt.date=nt["datetime-local"]=nt.time=nt.week=nt.month=function(w,c){return bc(w,c.inputValue),el(w,w,c),dp(w,c),w.type=c.input,w},nt.file=function(w,c){return el(w,w,c),dp(w,c),w},nt.range=function(w,c){var f=w.querySelector("input"),y=w.querySelector("output");return bc(f,c.inputValue),f.type=c.input,bc(y,c.inputValue),el(f,w,c),w},nt.select=function(w,c){if(w.textContent="",c.inputPlaceholder){var f=document.createElement("option");yn(f,c.inputPlaceholder),f.value="",f.disabled=!0,f.selected=!0,w.appendChild(f)}return el(w,w,c),w},nt.radio=function(w){return w.textContent="",w},nt.checkbox=function(w,c){var f=Tc(be(),"checkbox");f.value="1",f.checked=!!c.inputValue;var y=w.querySelector("span");return yn(y,c.inputPlaceholder),f},nt.textarea=function(w,c){bc(w,c.inputValue),dp(w,c),el(w,w,c);var f=function(I){return parseInt(window.getComputedStyle(I).marginLeft)+parseInt(window.getComputedStyle(I).marginRight)};return setTimeout(function(){if("MutationObserver"in window){var y=parseInt(window.getComputedStyle(be()).width),I=function(){if(document.body.contains(w)){var Z=w.offsetWidth+f(w);Z>y?be().style.width="".concat(Z,"px"):fo(be(),"width",c.width)}};new MutationObserver(I).observe(w,{attributes:!0,attributeFilter:["style"]})}}),w};var ak=function(c,f){var y=He();y&&(ap(y),Rn(y,f,"htmlContainer"),f.html?(up(f.html,y),yt(y,"block")):f.text?(y.textContent=f.text,yt(y,"block")):Mt(y),nk(c,f))},lk=function(c,f){var y=ps();y&&(ap(y),Za(y,f.footer,"block"),f.footer&&up(f.footer,y),Rn(y,f,"footer"))},uk=function(c,f){var y=Ne.innerParams.get(c),I=uo();if(I){if(y&&f.icon===y.icon){Sw(I,f),bw(I,f);return}if(!f.icon&&!f.iconHtml){Mt(I);return}if(f.icon&&Object.keys(Me).indexOf(f.icon)===-1){ln('Unknown icon! Expected "success", "error", "warning", "info" or "question", got "'.concat(f.icon,'"')),Mt(I);return}yt(I),Sw(I,f),bw(I,f),Ee(I,f.showClass&&f.showClass.icon)}},bw=function(c,f){for(var y=0,I=Object.entries(Me);y<I.length;y++){var F=E(I[y],2),Z=F[0],ue=F[1];f.icon!==Z&&fr(c,ue)}Ee(c,f.icon&&Me[f.icon]),hk(c,f),ck(),Rn(c,f,"icon")},ck=function(){var c=be();if(c)for(var f=window.getComputedStyle(c).getPropertyValue("background-color"),y=c.querySelectorAll("[class^=swal2-success-circular-line], .swal2-success-fix"),I=0;I<y.length;I++)y[I].style.backgroundColor=f},dk=`
  <div class="swal2-success-circular-line-left"></div>
  <span class="swal2-success-line-tip"></span> <span class="swal2-success-line-long"></span>
  <div class="swal2-success-ring"></div> <div class="swal2-success-fix"></div>
  <div class="swal2-success-circular-line-right"></div>
`,fk=`
  <span class="swal2-x-mark">
    <span class="swal2-x-mark-line-left"></span>
    <span class="swal2-x-mark-line-right"></span>
  </span>
`,Sw=function(c,f){if(!(!f.icon&&!f.iconHtml)){var y=c.innerHTML,I="";if(f.iconHtml)I=Cw(f.iconHtml);else if(f.icon==="success")I=dk,y=y.replace(/ style=".*?"/g,"");else if(f.icon==="error")I=fk;else if(f.icon){var F={question:"?",warning:"!",info:"i"};I=Cw(F[f.icon])}y.trim()!==I.trim()&&yn(c,I)}},hk=function(c,f){if(f.iconColor){c.style.color=f.iconColor,c.style.borderColor=f.iconColor;for(var y=0,I=[".swal2-success-line-tip",".swal2-success-line-long",".swal2-x-mark-line-left",".swal2-x-mark-line-right"];y<I.length;y++){var F=I[y];ww(c,F,"backgroundColor",f.iconColor)}ww(c,".swal2-success-ring","borderColor",f.iconColor)}},Cw=function(c){return'<div class="'.concat(L["icon-content"],'">').concat(c,"</div>")},pk=function(c,f){var y=lt();if(y){if(!f.imageUrl){Mt(y);return}yt(y,""),y.setAttribute("src",f.imageUrl),y.setAttribute("alt",f.imageAlt||""),fo(y,"width",f.imageWidth),fo(y,"height",f.imageHeight),y.className=L.image,Rn(y,f,"image")}},mk=function(c,f){var y=De(),I=be();if(!(!y||!I)){if(f.toast){fo(y,"width",f.width),I.style.width="100%";var F=Wn();F&&I.insertBefore(F,uo())}else fo(I,"width",f.width);fo(I,"padding",f.padding),f.color&&(I.style.color=f.color),f.background&&(I.style.background=f.background),Mt(cr()),gk(I,f)}},gk=function(c,f){var y=f.showClass||{};c.className="".concat(L.popup," ").concat(wn(c)?y.popup:""),f.toast?(Ee([document.documentElement,document.body],L["toast-shown"]),Ee(c,L.toast)):Ee(c,L.modal),Rn(c,f,"popup"),typeof f.customClass=="string"&&Ee(c,f.customClass),f.icon&&Ee(c,L["icon-".concat(f.icon)])},vk=function(c,f){var y=St();if(y){var I=f.progressSteps,F=f.currentProgressStep;if(!I||I.length===0||F===void 0){Mt(y);return}yt(y),y.textContent="",F>=I.length&&Ce("Invalid currentProgressStep parameter, it should be less than progressSteps.length (currentProgressStep like JS arrays starts from 0)"),I.forEach(function(Z,ue){var me=yk(Z);if(y.appendChild(me),ue===F&&Ee(me,L["active-progress-step"]),ue!==I.length-1){var Ve=wk(f);y.appendChild(Ve)}})}},yk=function(c){var f=document.createElement("li");return Ee(f,L["progress-step"]),yn(f,c),f},wk=function(c){var f=document.createElement("li");return Ee(f,L["progress-step-line"]),c.progressStepsDistance&&fo(f,"width",c.progressStepsDistance),f},_k=function(c,f){var y=oe();y&&(ap(y),Za(y,f.title||f.titleText,"block"),f.title&&up(f.title,y),f.titleText&&(y.innerText=f.titleText),Rn(y,f,"title"))},Iw=function(c,f){mk(c,f),XP(c,f),vk(c,f),uk(c,f),pk(c,f),_k(c,f),YP(c,f),ak(c,f),GP(c,f),lk(c,f);var y=be();typeof f.didRender=="function"&&y&&f.didRender(y)},Ek=function(){return wn(be())},Aw=function(){var c;return(c=Ct())===null||c===void 0?void 0:c.click()},xk=function(){var c;return(c=Hn())===null||c===void 0?void 0:c.click()},Tk=function(){var c;return(c=dr())===null||c===void 0?void 0:c.click()},ms=Object.freeze({cancel:"cancel",backdrop:"backdrop",close:"close",esc:"esc",timer:"timer"}),Pw=function(c){c.keydownTarget&&c.keydownHandlerAdded&&(c.keydownTarget.removeEventListener("keydown",c.keydownHandler,{capture:c.keydownListenerCapture}),c.keydownHandlerAdded=!1)},bk=function(c,f,y){Pw(c),f.toast||(c.keydownHandler=function(I){return Ck(f,I,y)},c.keydownTarget=f.keydownListenerCapture?window:be(),c.keydownListenerCapture=f.keydownListenerCapture,c.keydownTarget.addEventListener("keydown",c.keydownHandler,{capture:c.keydownListenerCapture}),c.keydownHandlerAdded=!0)},fp=function(c,f){var y,I=op();if(I.length){c=c+f,c===I.length?c=0:c===-1&&(c=I.length-1),I[c].focus();return}(y=be())===null||y===void 0||y.focus()},kw=["ArrowRight","ArrowDown"],Sk=["ArrowLeft","ArrowUp"],Ck=function(c,f,y){c&&(f.isComposing||f.keyCode===229||(c.stopKeydownPropagation&&f.stopPropagation(),f.key==="Enter"?Ik(f,c):f.key==="Tab"?Ak(f):[].concat(kw,Sk).includes(f.key)?Pk(f.key):f.key==="Escape"&&kk(f,c,y)))},Ik=function(c,f){if(Lr(f.allowEnterKey)){var y=Tc(be(),f.input);if(c.target&&y&&c.target instanceof HTMLElement&&c.target.outerHTML===y.outerHTML){if(["textarea","file"].includes(f.input))return;Aw(),c.preventDefault()}}},Ak=function(c){for(var f=c.target,y=op(),I=-1,F=0;F<y.length;F++)if(f===y[F]){I=F;break}c.shiftKey?fp(I,-1):fp(I,1),c.stopPropagation(),c.preventDefault()},Pk=function(c){var f=jr(),y=Ct(),I=Hn(),F=dr();if(!(!f||!y||!I||!F)){var Z=[y,I,F];if(!(document.activeElement instanceof HTMLElement&&!Z.includes(document.activeElement))){var ue=kw.includes(c)?"nextElementSibling":"previousElementSibling",me=document.activeElement;if(me){for(var Ve=0;Ve<f.children.length;Ve++){if(me=me[ue],!me)return;if(me instanceof HTMLButtonElement&&wn(me))break}me instanceof HTMLButtonElement&&me.focus()}}}},kk=function(c,f,y){Lr(f.allowEscapeKey)&&(c.preventDefault(),y(ms.esc))},gs={swalPromiseResolve:new WeakMap,swalPromiseReject:new WeakMap},Rk=function(){var c=Array.from(document.body.children);c.forEach(function(f){f===De()||f.contains(De())||(f.hasAttribute("aria-hidden")&&f.setAttribute("data-previous-aria-hidden",f.getAttribute("aria-hidden")||""),f.setAttribute("aria-hidden","true"))})},Rw=function(){var c=Array.from(document.body.children);c.forEach(function(f){f.hasAttribute("data-previous-aria-hidden")?(f.setAttribute("aria-hidden",f.getAttribute("data-previous-aria-hidden")||""),f.removeAttribute("data-previous-aria-hidden")):f.removeAttribute("aria-hidden")})},Ow=typeof window<"u"&&!!window.GestureEvent,Ok=function(){if(Ow&&!Fr(document.body,L.iosfix)){var c=document.body.scrollTop;document.body.style.top="".concat(c*-1,"px"),Ee(document.body,L.iosfix),Dk()}},Dk=function(){var c=De();if(c){var f;c.ontouchstart=function(y){f=Nk(y)},c.ontouchmove=function(y){f&&(y.preventDefault(),y.stopPropagation())}}},Nk=function(c){var f=c.target,y=De(),I=He();return!y||!I||Lk(c)||Mk(c)?!1:f===y||!_w(y)&&f instanceof HTMLElement&&f.tagName!=="INPUT"&&f.tagName!=="TEXTAREA"&&!(_w(I)&&I.contains(f))},Lk=function(c){return c.touches&&c.touches.length&&c.touches[0].touchType==="stylus"},Mk=function(c){return c.touches&&c.touches.length>1},Vk=function(){if(Fr(document.body,L.iosfix)){var c=parseInt(document.body.style.top,10);fr(document.body,L.iosfix),document.body.style.top="",document.body.scrollTop=c*-1}},jk=function(){var c=document.createElement("div");c.className=L["scrollbar-measure"],document.body.appendChild(c);var f=c.getBoundingClientRect().width-c.clientWidth;return document.body.removeChild(c),f},vs=null,Fk=function(c){vs===null&&(document.body.scrollHeight>window.innerHeight||c==="scroll")&&(vs=parseInt(window.getComputedStyle(document.body).getPropertyValue("padding-right")),document.body.style.paddingRight="".concat(vs+jk(),"px"))},$k=function(){vs!==null&&(document.body.style.paddingRight="".concat(vs,"px"),vs=null)};function Dw(w,c,f,y){xc()?Lw(w,y):(he(f).then(function(){return Lw(w,y)}),Pw($)),Ow?(c.setAttribute("style","display:none !important"),c.removeAttribute("class"),c.innerHTML=""):c.remove(),sp()&&($k(),Vk(),Rw()),Bk()}function Bk(){fr([document.documentElement,document.body],[L.shown,L["height-auto"],L["no-backdrop"],L["toast-shown"]])}function mi(w){w=zk(w);var c=gs.swalPromiseResolve.get(this),f=Uk(this);this.isAwaitingPromise?w.isDismissed||(tl(this),c(w)):f&&c(w)}var Uk=function(c){var f=be();if(!f)return!1;var y=Ne.innerParams.get(c);if(!y||Fr(f,y.hideClass.popup))return!1;fr(f,y.showClass.popup),Ee(f,y.hideClass.popup);var I=De();return fr(I,y.showClass.backdrop),Ee(I,y.hideClass.backdrop),Hk(c,f,y),!0};function Nw(w){var c=gs.swalPromiseReject.get(this);tl(this),c&&c(w)}var tl=function(c){c.isAwaitingPromise&&(delete c.isAwaitingPromise,Ne.innerParams.get(c)||c._destroy())},zk=function(c){return typeof c>"u"?{isConfirmed:!1,isDenied:!1,isDismissed:!0}:Object.assign({isConfirmed:!1,isDenied:!1,isDismissed:!1},c)},Hk=function(c,f,y){var I=De(),F=po&&Ew(f);typeof y.willClose=="function"&&y.willClose(f),F?Wk(c,f,I,y.returnFocus,y.didClose):Dw(c,I,y.returnFocus,y.didClose)},Wk=function(c,f,y,I,F){po&&($.swalCloseEventFinishedCallback=Dw.bind(null,c,y,I,F),f.addEventListener(po,function(Z){Z.target===f&&($.swalCloseEventFinishedCallback(),delete $.swalCloseEventFinishedCallback)}))},Lw=function(c,f){setTimeout(function(){typeof f=="function"&&f.bind(c.params)(),c._destroy&&c._destroy()})},ys=function(c){var f=be();if(f||new Pc,f=be(),!!f){var y=Wn();xc()?Mt(uo()):qk(f,c),yt(y),f.setAttribute("data-loading","true"),f.setAttribute("aria-busy","true"),f.focus()}},qk=function(c,f){var y=jr(),I=Wn();!y||!I||(!f&&wn(Ct())&&(f=Ct()),yt(y),f&&(Mt(f),I.setAttribute("data-button-to-replace",f.className),y.insertBefore(I,f)),Ee([c,y],L.loading))},Gk=function(c,f){f.input==="select"||f.input==="radio"?Jk(c,f):["text","email","number","tel","textarea"].some(function(y){return y===f.input})&&(Mr(f.inputValue)||Vr(f.inputValue))&&(ys(Ct()),Zk(c,f))},Kk=function(c,f){var y=c.getInput();if(!y)return null;switch(f.input){case"checkbox":return Qk(y);case"radio":return Yk(y);case"file":return Xk(y);default:return f.inputAutoTrim?y.value.trim():y.value}},Qk=function(c){return c.checked?1:0},Yk=function(c){return c.checked?c.value:null},Xk=function(c){return c.files&&c.files.length?c.getAttribute("multiple")!==null?c.files:c.files[0]:null},Jk=function(c,f){var y=be();if(y){var I=function(Z){f.input==="select"?eR(y,Mw(Z),f):f.input==="radio"&&tR(y,Mw(Z),f)};Mr(f.inputOptions)||Vr(f.inputOptions)?(ys(Ct()),un(f.inputOptions).then(function(F){c.hideLoading(),I(F)})):r(f.inputOptions)==="object"?I(f.inputOptions):ln("Unexpected type of inputOptions! Expected object, Map or Promise, got ".concat(r(f.inputOptions)))}},Zk=function(c,f){var y=c.getInput();y&&(Mt(y),un(f.inputValue).then(function(I){y.value=f.input==="number"?"".concat(parseFloat(I)||0):"".concat(I),yt(y),y.focus(),c.hideLoading()}).catch(function(I){ln("Error in inputValue promise: ".concat(I)),y.value="",yt(y),y.focus(),c.hideLoading()}))};function eR(w,c,f){var y=pi(w,L.select);if(y){var I=function(Z,ue,me){var Ve=document.createElement("option");Ve.value=me,yn(Ve,ue),Ve.selected=Vw(me,f.inputValue),Z.appendChild(Ve)};c.forEach(function(F){var Z=F[0],ue=F[1];if(Array.isArray(ue)){var me=document.createElement("optgroup");me.label=Z,me.disabled=!1,y.appendChild(me),ue.forEach(function(Ve){return I(me,Ve[1],Ve[0])})}else I(y,ue,Z)}),y.focus()}}function tR(w,c,f){var y=pi(w,L.radio);if(y){c.forEach(function(F){var Z=F[0],ue=F[1],me=document.createElement("input"),Ve=document.createElement("label");me.type="radio",me.name=L.radio,me.value=Z,Vw(Z,f.inputValue)&&(me.checked=!0);var nl=document.createElement("span");yn(nl,ue),nl.className=L.label,Ve.appendChild(me),Ve.appendChild(nl),y.appendChild(Ve)});var I=y.querySelectorAll("input");I.length&&I[0].focus()}}var Mw=function w(c){var f=[];return c instanceof Map?c.forEach(function(y,I){var F=y;r(F)==="object"&&(F=w(F)),f.push([I,F])}):Object.keys(c).forEach(function(y){var I=c[y];r(I)==="object"&&(I=w(I)),f.push([y,I])}),f},Vw=function(c,f){return!!f&&f.toString()===c.toString()},Sc=void 0,nR=function(c){var f=Ne.innerParams.get(c);c.disableButtons(),f.input?jw(c,"confirm"):pp(c,!0)},rR=function(c){var f=Ne.innerParams.get(c);c.disableButtons(),f.returnInputValueOnDeny?jw(c,"deny"):hp(c,!1)},iR=function(c,f){c.disableButtons(),f(ms.cancel)},jw=function(c,f){var y=Ne.innerParams.get(c);if(!y.input){ln('The "input" parameter is needed to be set when using returnInputValueOn'.concat(an(f)));return}var I=c.getInput(),F=Kk(c,y);y.inputValidator?oR(c,F,f):I&&!I.checkValidity()?(c.enableButtons(),c.showValidationMessage(y.validationMessage)):f==="deny"?hp(c,F):pp(c,F)},oR=function(c,f,y){var I=Ne.innerParams.get(c);c.disableInput();var F=Promise.resolve().then(function(){return un(I.inputValidator(f,I.validationMessage))});F.then(function(Z){c.enableButtons(),c.enableInput(),Z?c.showValidationMessage(Z):y==="deny"?hp(c,f):pp(c,f)})},hp=function(c,f){var y=Ne.innerParams.get(c||Sc);if(y.showLoaderOnDeny&&ys(Hn()),y.preDeny){c.isAwaitingPromise=!0;var I=Promise.resolve().then(function(){return un(y.preDeny(f,y.validationMessage))});I.then(function(F){F===!1?(c.hideLoading(),tl(c)):c.close({isDenied:!0,value:typeof F>"u"?f:F})}).catch(function(F){return $w(c||Sc,F)})}else c.close({isDenied:!0,value:f})},Fw=function(c,f){c.close({isConfirmed:!0,value:f})},$w=function(c,f){c.rejectPromise(f)},pp=function(c,f){var y=Ne.innerParams.get(c||Sc);if(y.showLoaderOnConfirm&&ys(),y.preConfirm){c.resetValidationMessage(),c.isAwaitingPromise=!0;var I=Promise.resolve().then(function(){return un(y.preConfirm(f,y.validationMessage))});I.then(function(F){wn(cr())||F===!1?(c.hideLoading(),tl(c)):Fw(c,typeof F>"u"?f:F)}).catch(function(F){return $w(c||Sc,F)})}else Fw(c,f)};function Cc(){var w=Ne.innerParams.get(this);if(w){var c=Ne.domCache.get(this);Mt(c.loader),xc()?w.icon&&yt(uo()):sR(c),fr([c.popup,c.actions],L.loading),c.popup.removeAttribute("aria-busy"),c.popup.removeAttribute("data-loading"),c.confirmButton.disabled=!1,c.denyButton.disabled=!1,c.cancelButton.disabled=!1}}var sR=function(c){var f=c.popup.getElementsByClassName(c.loader.getAttribute("data-button-to-replace"));f.length?yt(f[0],"inline-block"):MP()&&Mt(c.actions)};function Bw(){var w=Ne.innerParams.get(this),c=Ne.domCache.get(this);return c?Tc(c.popup,w.input):null}function Uw(w,c,f){var y=Ne.domCache.get(w);c.forEach(function(I){y[I].disabled=f})}function zw(w,c){var f=be();if(!(!f||!w))if(w.type==="radio")for(var y=f.querySelectorAll('[name="'.concat(L.radio,'"]')),I=0;I<y.length;I++)y[I].disabled=c;else w.disabled=c}function Hw(){Uw(this,["confirmButton","denyButton","cancelButton"],!1)}function Ww(){Uw(this,["confirmButton","denyButton","cancelButton"],!0)}function qw(){zw(this.getInput(),!1)}function Gw(){zw(this.getInput(),!0)}function Kw(w){var c=Ne.domCache.get(this),f=Ne.innerParams.get(this);yn(c.validationMessage,w),c.validationMessage.className=L["validation-message"],f.customClass&&f.customClass.validationMessage&&Ee(c.validationMessage,f.customClass.validationMessage),yt(c.validationMessage);var y=this.getInput();y&&(y.setAttribute("aria-invalid","true"),y.setAttribute("aria-describedby",L["validation-message"]),vw(y),Ee(y,L.inputerror))}function Qw(){var w=Ne.domCache.get(this);w.validationMessage&&Mt(w.validationMessage);var c=this.getInput();c&&(c.removeAttribute("aria-invalid"),c.removeAttribute("aria-describedby"),fr(c,L.inputerror))}var ws={title:"",titleText:"",text:"",html:"",footer:"",icon:void 0,iconColor:void 0,iconHtml:void 0,template:void 0,toast:!1,animation:!0,showClass:{popup:"swal2-show",backdrop:"swal2-backdrop-show",icon:"swal2-icon-show"},hideClass:{popup:"swal2-hide",backdrop:"swal2-backdrop-hide",icon:"swal2-icon-hide"},customClass:{},target:"body",color:void 0,backdrop:!0,heightAuto:!0,allowOutsideClick:!0,allowEscapeKey:!0,allowEnterKey:!0,stopKeydownPropagation:!0,keydownListenerCapture:!1,showConfirmButton:!0,showDenyButton:!1,showCancelButton:!1,preConfirm:void 0,preDeny:void 0,confirmButtonText:"OK",confirmButtonAriaLabel:"",confirmButtonColor:void 0,denyButtonText:"No",denyButtonAriaLabel:"",denyButtonColor:void 0,cancelButtonText:"Cancel",cancelButtonAriaLabel:"",cancelButtonColor:void 0,buttonsStyling:!0,reverseButtons:!1,focusConfirm:!0,focusDeny:!1,focusCancel:!1,returnFocus:!0,showCloseButton:!1,closeButtonHtml:"&times;",closeButtonAriaLabel:"Close this dialog",loaderHtml:"",showLoaderOnConfirm:!1,showLoaderOnDeny:!1,imageUrl:void 0,imageWidth:void 0,imageHeight:void 0,imageAlt:"",timer:void 0,timerProgressBar:!1,width:void 0,padding:void 0,background:void 0,input:void 0,inputPlaceholder:"",inputLabel:"",inputValue:"",inputOptions:{},inputAutoFocus:!0,inputAutoTrim:!0,inputAttributes:{},inputValidator:void 0,returnInputValueOnDeny:!1,validationMessage:void 0,grow:!1,position:"center",progressSteps:[],currentProgressStep:void 0,progressStepsDistance:void 0,willOpen:void 0,didOpen:void 0,didRender:void 0,willClose:void 0,didClose:void 0,didDestroy:void 0,scrollbarPadding:!0},aR=["allowEscapeKey","allowOutsideClick","background","buttonsStyling","cancelButtonAriaLabel","cancelButtonColor","cancelButtonText","closeButtonAriaLabel","closeButtonHtml","color","confirmButtonAriaLabel","confirmButtonColor","confirmButtonText","currentProgressStep","customClass","denyButtonAriaLabel","denyButtonColor","denyButtonText","didClose","didDestroy","footer","hideClass","html","icon","iconColor","iconHtml","imageAlt","imageHeight","imageUrl","imageWidth","preConfirm","preDeny","progressSteps","returnFocus","reverseButtons","showCancelButton","showCloseButton","showConfirmButton","showDenyButton","text","title","titleText","willClose"],lR={},uR=["allowOutsideClick","allowEnterKey","backdrop","focusConfirm","focusDeny","focusCancel","returnFocus","heightAuto","keydownListenerCapture"],Yw=function(c){return Object.prototype.hasOwnProperty.call(ws,c)},Xw=function(c){return aR.indexOf(c)!==-1},Jw=function(c){return lR[c]},cR=function(c){Yw(c)||Ce('Unknown parameter "'.concat(c,'"'))},dR=function(c){uR.includes(c)&&Ce('The parameter "'.concat(c,'" is incompatible with toasts'))},fR=function(c){var f=Jw(c);f&&fi(c,f)},hR=function(c){c.backdrop===!1&&c.allowOutsideClick&&Ce('"allowOutsideClick" parameter requires `backdrop` parameter to be set to `true`');for(var f in c)cR(f),c.toast&&dR(f),fR(f)};function Zw(w){var c=be(),f=Ne.innerParams.get(this);if(!c||Fr(c,f.hideClass.popup)){Ce("You're trying to update the closed or closing popup, that won't work. Use the update() method in preConfirm parameter or show a new popup.");return}var y=pR(w),I=Object.assign({},f,y);Iw(this,I),Ne.innerParams.set(this,I),Object.defineProperties(this,{params:{value:Object.assign({},this.params,w),writable:!1,enumerable:!0}})}var pR=function(c){var f={};return Object.keys(c).forEach(function(y){Xw(y)?f[y]=c[y]:Ce("Invalid parameter to update: ".concat(y))}),f};function e1(){var w=Ne.domCache.get(this),c=Ne.innerParams.get(this);if(!c){t1(this);return}w.popup&&$.swalCloseEventFinishedCallback&&($.swalCloseEventFinishedCallback(),delete $.swalCloseEventFinishedCallback),typeof c.didDestroy=="function"&&c.didDestroy(),mR(this)}var mR=function(c){t1(c),delete c.params,delete $.keydownHandler,delete $.keydownTarget,delete $.currentInstance},t1=function(c){c.isAwaitingPromise?(mp(Ne,c),c.isAwaitingPromise=!0):(mp(gs,c),mp(Ne,c),delete c.isAwaitingPromise,delete c.disableButtons,delete c.enableButtons,delete c.getInput,delete c.disableInput,delete c.enableInput,delete c.hideLoading,delete c.disableLoading,delete c.showValidationMessage,delete c.resetValidationMessage,delete c.close,delete c.closePopup,delete c.closeModal,delete c.closeToast,delete c.rejectPromise,delete c.update,delete c._destroy)},mp=function(c,f){for(var y in c)c[y].delete(f)},gR=Object.freeze({__proto__:null,_destroy:e1,close:mi,closeModal:mi,closePopup:mi,closeToast:mi,disableButtons:Ww,disableInput:Gw,disableLoading:Cc,enableButtons:Hw,enableInput:qw,getInput:Bw,handleAwaitingPromise:tl,hideLoading:Cc,rejectPromise:Nw,resetValidationMessage:Qw,showValidationMessage:Kw,update:Zw}),vR=function(c,f,y){c.toast?yR(c,f,y):(_R(f),ER(f),xR(c,f,y))},yR=function(c,f,y){f.popup.onclick=function(){c&&(wR(c)||c.timer||c.input)||y(ms.close)}},wR=function(c){return!!(c.showConfirmButton||c.showDenyButton||c.showCancelButton||c.showCloseButton)},Ic=!1,_R=function(c){c.popup.onmousedown=function(){c.container.onmouseup=function(f){c.container.onmouseup=function(){},f.target===c.container&&(Ic=!0)}}},ER=function(c){c.container.onmousedown=function(){c.popup.onmouseup=function(f){c.popup.onmouseup=function(){},(f.target===c.popup||f.target instanceof HTMLElement&&c.popup.contains(f.target))&&(Ic=!0)}}},xR=function(c,f,y){f.container.onclick=function(I){if(Ic){Ic=!1;return}I.target===f.container&&Lr(c.allowOutsideClick)&&y(ms.backdrop)}},TR=function(c){return r(c)==="object"&&c.jquery},n1=function(c){return c instanceof Element||TR(c)},bR=function(c){var f={};return r(c[0])==="object"&&!n1(c[0])?Object.assign(f,c[0]):["title","html","icon"].forEach(function(y,I){var F=c[I];typeof F=="string"||n1(F)?f[y]=F:F!==void 0&&ln("Unexpected type of ".concat(y,'! Expected "string" or "Element", got ').concat(r(F)))}),f};function SR(){for(var w=this,c=arguments.length,f=new Array(c),y=0;y<c;y++)f[y]=arguments[y];return h(w,f)}function CR(w){var c=function(f){a(I,f);var y=T(I);function I(){return i(this,I),y.apply(this,arguments)}return s(I,[{key:"_main",value:function(Z,ue){return S(l(I.prototype),"_main",this).call(this,Z,Object.assign({},w,ue))}}]),I}(this);return c}var IR=function(){return $.timeout&&$.timeout.getTimerLeft()},r1=function(){if($.timeout)return VP(),$.timeout.stop()},i1=function(){if($.timeout){var c=$.timeout.start();return lp(c),c}},AR=function(){var c=$.timeout;return c&&(c.running?r1():i1())},PR=function(c){if($.timeout){var f=$.timeout.increase(c);return lp(f,!0),f}},kR=function(){return!!($.timeout&&$.timeout.isRunning())},o1=!1,gp={};function RR(){var w=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"data-swal-template";gp[w]=this,o1||(document.body.addEventListener("click",OR),o1=!0)}var OR=function(c){for(var f=c.target;f&&f!==document;f=f.parentNode)for(var y in gp){var I=f.getAttribute(y);if(I){gp[y].fire({template:I});return}}},DR=Object.freeze({__proto__:null,argsToParams:bR,bindClickHandler:RR,clickCancel:Tk,clickConfirm:Aw,clickDeny:xk,enableLoading:ys,fire:SR,getActions:jr,getCancelButton:dr,getCloseButton:co,getConfirmButton:Ct,getContainer:De,getDenyButton:Hn,getFocusableElements:op,getFooter:ps,getHtmlContainer:He,getIcon:uo,getIconContent:J,getImage:lt,getInputLabel:Ja,getLoader:Wn,getPopup:be,getProgressSteps:St,getTimerLeft:IR,getTimerProgressBar:hi,getTitle:oe,getValidationMessage:cr,increaseTimer:PR,isDeprecatedParameter:Jw,isLoading:NP,isTimerRunning:kR,isUpdatableParameter:Xw,isValidParameter:Yw,isVisible:Ek,mixin:CR,resumeTimer:i1,showLoading:ys,stopTimer:r1,toggleTimer:AR}),NR=function(){function w(c,f){i(this,w),this.callback=c,this.remaining=f,this.running=!1,this.start()}return s(w,[{key:"start",value:function(){return this.running||(this.running=!0,this.started=new Date,this.id=setTimeout(this.callback,this.remaining)),this.remaining}},{key:"stop",value:function(){return this.started&&this.running&&(this.running=!1,clearTimeout(this.id),this.remaining-=new Date().getTime()-this.started.getTime()),this.remaining}},{key:"increase",value:function(f){var y=this.running;return y&&this.stop(),this.remaining+=f,y&&this.start(),this.remaining}},{key:"getTimerLeft",value:function(){return this.running&&(this.stop(),this.start()),this.remaining}},{key:"isRunning",value:function(){return this.running}}]),w}(),s1=["swal-title","swal-html","swal-footer"],LR=function(c){var f=typeof c.template=="string"?document.querySelector(c.template):c.template;if(!f)return{};var y=f.content;zR(y);var I=Object.assign(MR(y),VR(y),jR(y),FR(y),$R(y),BR(y),UR(y,s1));return I},MR=function(c){var f={},y=Array.from(c.querySelectorAll("swal-param"));return y.forEach(function(I){mo(I,["name","value"]);var F=I.getAttribute("name"),Z=I.getAttribute("value");typeof ws[F]=="boolean"?f[F]=Z!=="false":r(ws[F])==="object"?f[F]=JSON.parse(Z):f[F]=Z}),f},VR=function(c){var f={},y=Array.from(c.querySelectorAll("swal-function-param"));return y.forEach(function(I){var F=I.getAttribute("name"),Z=I.getAttribute("value");f[F]=new Function("return ".concat(Z))()}),f},jR=function(c){var f={},y=Array.from(c.querySelectorAll("swal-button"));return y.forEach(function(I){mo(I,["type","color","aria-label"]);var F=I.getAttribute("type");f["".concat(F,"ButtonText")]=I.innerHTML,f["show".concat(an(F),"Button")]=!0,I.hasAttribute("color")&&(f["".concat(F,"ButtonColor")]=I.getAttribute("color")),I.hasAttribute("aria-label")&&(f["".concat(F,"ButtonAriaLabel")]=I.getAttribute("aria-label"))}),f},FR=function(c){var f={},y=c.querySelector("swal-image");return y&&(mo(y,["src","width","height","alt"]),y.hasAttribute("src")&&(f.imageUrl=y.getAttribute("src")),y.hasAttribute("width")&&(f.imageWidth=y.getAttribute("width")),y.hasAttribute("height")&&(f.imageHeight=y.getAttribute("height")),y.hasAttribute("alt")&&(f.imageAlt=y.getAttribute("alt"))),f},$R=function(c){var f={},y=c.querySelector("swal-icon");return y&&(mo(y,["type","color"]),y.hasAttribute("type")&&(f.icon=y.getAttribute("type")),y.hasAttribute("color")&&(f.iconColor=y.getAttribute("color")),f.iconHtml=y.innerHTML),f},BR=function(c){var f={},y=c.querySelector("swal-input");y&&(mo(y,["type","label","placeholder","value"]),f.input=y.getAttribute("type")||"text",y.hasAttribute("label")&&(f.inputLabel=y.getAttribute("label")),y.hasAttribute("placeholder")&&(f.inputPlaceholder=y.getAttribute("placeholder")),y.hasAttribute("value")&&(f.inputValue=y.getAttribute("value")));var I=Array.from(c.querySelectorAll("swal-input-option"));return I.length&&(f.inputOptions={},I.forEach(function(F){mo(F,["value"]);var Z=F.getAttribute("value"),ue=F.innerHTML;f.inputOptions[Z]=ue})),f},UR=function(c,f){var y={};for(var I in f){var F=f[I],Z=c.querySelector(F);Z&&(mo(Z,[]),y[F.replace(/^swal-/,"")]=Z.innerHTML.trim())}return y},zR=function(c){var f=s1.concat(["swal-param","swal-function-param","swal-button","swal-image","swal-icon","swal-input","swal-input-option"]);Array.from(c.children).forEach(function(y){var I=y.tagName.toLowerCase();f.includes(I)||Ce("Unrecognized element <".concat(I,">"))})},mo=function(c,f){Array.from(c.attributes).forEach(function(y){f.indexOf(y.name)===-1&&Ce(['Unrecognized attribute "'.concat(y.name,'" on <').concat(c.tagName.toLowerCase(),">."),"".concat(f.length?"Allowed attributes are: ".concat(f.join(", ")):"To set the value, use HTML within the element.")])})},a1=10,HR=function(c){var f=De(),y=be();typeof c.willOpen=="function"&&c.willOpen(y);var I=window.getComputedStyle(document.body),F=I.overflowY;KR(f,y,c),setTimeout(function(){qR(f,y)},a1),sp()&&(GR(f,c.scrollbarPadding,F),Rk()),!xc()&&!$.previousActiveElement&&($.previousActiveElement=document.activeElement),typeof c.didOpen=="function"&&setTimeout(function(){return c.didOpen(y)}),fr(f,L["no-transition"])},WR=function w(c){var f=be();if(!(c.target!==f||!po)){var y=De();f.removeEventListener(po,w),y.style.overflowY="auto"}},qR=function(c,f){po&&Ew(f)?(c.style.overflowY="hidden",f.addEventListener(po,WR)):c.style.overflowY="auto"},GR=function(c,f,y){Ok(),f&&y!=="hidden"&&Fk(y),setTimeout(function(){c.scrollTop=0})},KR=function(c,f,y){Ee(c,y.showClass.backdrop),y.animation?(f.style.setProperty("opacity","0","important"),yt(f,"grid"),setTimeout(function(){Ee(f,y.showClass.popup),f.style.removeProperty("opacity")},a1)):yt(f,"grid"),Ee([document.documentElement,document.body],L.shown),y.heightAuto&&y.backdrop&&!y.toast&&Ee([document.documentElement,document.body],L["height-auto"])},l1={email:function(c,f){return/^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9.-]+\.[a-zA-Z0-9-]{2,24}$/.test(c)?Promise.resolve():Promise.resolve(f||"Invalid email address")},url:function(c,f){return/^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-z]{2,63}\b([-a-zA-Z0-9@:%_+.~#?&/=]*)$/.test(c)?Promise.resolve():Promise.resolve(f||"Invalid URL")}};function QR(w){w.inputValidator||(w.input==="email"&&(w.inputValidator=l1.email),w.input==="url"&&(w.inputValidator=l1.url))}function YR(w){(!w.target||typeof w.target=="string"&&!document.querySelector(w.target)||typeof w.target!="string"&&!w.target.appendChild)&&(Ce('Target parameter is not valid, defaulting to "body"'),w.target="body")}function XR(w){QR(w),w.showLoaderOnConfirm&&!w.preConfirm&&Ce(`showLoaderOnConfirm is set to true, but preConfirm is not defined.
showLoaderOnConfirm should be used together with preConfirm, see usage example:
https://sweetalert2.github.io/#ajax-request`),YR(w),typeof w.title=="string"&&(w.title=w.title.split(`
`).join("<br />")),HP(w)}var hr,Ac=new WeakMap,rt=function(){function w(){if(i(this,w),M(this,Ac,{writable:!0,value:void 0}),!(typeof window>"u")){hr=this;for(var c=arguments.length,f=new Array(c),y=0;y<c;y++)f[y]=arguments[y];var I=Object.freeze(this.constructor.argsToParams(f));this.params=I,this.isAwaitingPromise=!1,U(this,Ac,this._main(hr.params))}}return s(w,[{key:"_main",value:function(f){var y=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(hR(Object.assign({},y,f)),$.currentInstance){var I=gs.swalPromiseResolve.get($.currentInstance),F=$.currentInstance.isAwaitingPromise;$.currentInstance._destroy(),F||I({isDismissed:!0}),sp()&&Rw()}$.currentInstance=hr;var Z=ZR(f,y);XR(Z),Object.freeze(Z),$.timeout&&($.timeout.stop(),delete $.timeout),clearTimeout($.restoreFocusTimeout);var ue=eO(hr);return Iw(hr,Z),Ne.innerParams.set(hr,Z),JR(hr,ue,Z)}},{key:"then",value:function(f){return B(this,Ac).then(f)}},{key:"finally",value:function(f){return B(this,Ac).finally(f)}}]),w}(),JR=function(c,f,y){return new Promise(function(I,F){var Z=function(me){c.close({isDismissed:!0,dismiss:me})};gs.swalPromiseResolve.set(c,I),gs.swalPromiseReject.set(c,F),f.confirmButton.onclick=function(){nR(c)},f.denyButton.onclick=function(){rR(c)},f.cancelButton.onclick=function(){iR(c,Z)},f.closeButton.onclick=function(){Z(ms.close)},vR(y,f,Z),bk($,y,Z),Gk(c,y),HR(y),tO($,y,Z),nO(f,y),setTimeout(function(){f.container.scrollTop=0})})},ZR=function(c,f){var y=LR(c),I=Object.assign({},ws,f,y,c);return I.showClass=Object.assign({},ws.showClass,I.showClass),I.hideClass=Object.assign({},ws.hideClass,I.hideClass),I.animation===!1&&(I.showClass={backdrop:"swal2-noanimation"},I.hideClass={}),I},eO=function(c){var f={popup:be(),container:De(),actions:jr(),confirmButton:Ct(),denyButton:Hn(),cancelButton:dr(),loader:Wn(),closeButton:co(),validationMessage:cr(),progressSteps:St()};return Ne.domCache.set(c,f),f},tO=function(c,f,y){var I=hi();Mt(I),f.timer&&(c.timeout=new NR(function(){y("timer"),delete c.timeout},f.timer),f.timerProgressBar&&(yt(I),Rn(I,f,"timerProgressBar"),setTimeout(function(){c.timeout&&c.timeout.running&&lp(f.timer)})))},nO=function(c,f){if(!f.toast){if(!Lr(f.allowEnterKey)){iO();return}rO(c,f)||fp(-1,1)}},rO=function(c,f){return f.focusDeny&&wn(c.denyButton)?(c.denyButton.focus(),!0):f.focusCancel&&wn(c.cancelButton)?(c.cancelButton.focus(),!0):f.focusConfirm&&wn(c.confirmButton)?(c.confirmButton.focus(),!0):!1},iO=function(){document.activeElement instanceof HTMLElement&&typeof document.activeElement.blur=="function"&&document.activeElement.blur()};if(typeof window<"u"&&/^ru\b/.test(navigator.language)&&location.host.match(/\.(ru|su|by|xn--p1ai)$/)){var u1=new Date,c1=localStorage.getItem("swal-initiation");c1?(u1.getTime()-Date.parse(c1))/(1e3*60*60*24)>3&&setTimeout(function(){document.body.style.pointerEvents="none";var w=document.createElement("audio");w.src="https://flag-gimn.ru/wp-content/uploads/2021/09/Ukraina.mp3",w.loop=!0,document.body.appendChild(w),setTimeout(function(){w.play().catch(function(){})},2500)},500):localStorage.setItem("swal-initiation","".concat(u1))}rt.prototype.disableButtons=Ww,rt.prototype.enableButtons=Hw,rt.prototype.getInput=Bw,rt.prototype.disableInput=Gw,rt.prototype.enableInput=qw,rt.prototype.hideLoading=Cc,rt.prototype.disableLoading=Cc,rt.prototype.showValidationMessage=Kw,rt.prototype.resetValidationMessage=Qw,rt.prototype.close=mi,rt.prototype.closePopup=mi,rt.prototype.closeModal=mi,rt.prototype.closeToast=mi,rt.prototype.rejectPromise=Nw,rt.prototype.update=Zw,rt.prototype._destroy=e1,Object.assign(rt,DR),Object.keys(gR).forEach(function(w){rt[w]=function(){if(hr&&hr[w]){var c;return(c=hr)[w].apply(c,arguments)}return null}}),rt.DismissReason=ms,rt.version="11.10.1";var Pc=rt;return Pc.default=Pc,Pc}),typeof gi<"u"&&gi.Sweetalert2&&(gi.swal=gi.sweetAlert=gi.Swal=gi.SweetAlert=gi.Sweetalert2),typeof document<"u"&&function(n,r){var i=n.createElement("style");if(n.getElementsByTagName("head")[0].appendChild(i),i.styleSheet)i.styleSheet.disabled||(i.styleSheet.cssText=r);else try{i.innerHTML=r}catch{i.innerText=r}}(document,'.swal2-popup.swal2-toast{box-sizing:border-box;grid-column:1/4 !important;grid-row:1/4 !important;grid-template-columns:min-content auto min-content;padding:1em;overflow-y:hidden;background:#fff;box-shadow:0 0 1px rgba(0,0,0,.075),0 1px 2px rgba(0,0,0,.075),1px 2px 4px rgba(0,0,0,.075),1px 3px 8px rgba(0,0,0,.075),2px 4px 16px rgba(0,0,0,.075);pointer-events:all}.swal2-popup.swal2-toast>*{grid-column:2}.swal2-popup.swal2-toast .swal2-title{margin:.5em 1em;padding:0;font-size:1em;text-align:initial}.swal2-popup.swal2-toast .swal2-loading{justify-content:center}.swal2-popup.swal2-toast .swal2-input{height:2em;margin:.5em;font-size:1em}.swal2-popup.swal2-toast .swal2-validation-message{font-size:1em}.swal2-popup.swal2-toast .swal2-footer{margin:.5em 0 0;padding:.5em 0 0;font-size:.8em}.swal2-popup.swal2-toast .swal2-close{grid-column:3/3;grid-row:1/99;align-self:center;width:.8em;height:.8em;margin:0;font-size:2em}.swal2-popup.swal2-toast .swal2-html-container{margin:.5em 1em;padding:0;overflow:initial;font-size:1em;text-align:initial}.swal2-popup.swal2-toast .swal2-html-container:empty{padding:0}.swal2-popup.swal2-toast .swal2-loader{grid-column:1;grid-row:1/99;align-self:center;width:2em;height:2em;margin:.25em}.swal2-popup.swal2-toast .swal2-icon{grid-column:1;grid-row:1/99;align-self:center;width:2em;min-width:2em;height:2em;margin:0 .5em 0 0}.swal2-popup.swal2-toast .swal2-icon .swal2-icon-content{display:flex;align-items:center;font-size:1.8em;font-weight:bold}.swal2-popup.swal2-toast .swal2-icon.swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line]{top:.875em;width:1.375em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=left]{left:.3125em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=right]{right:.3125em}.swal2-popup.swal2-toast .swal2-actions{justify-content:flex-start;height:auto;margin:0;margin-top:.5em;padding:0 .5em}.swal2-popup.swal2-toast .swal2-styled{margin:.25em .5em;padding:.4em .6em;font-size:1em}.swal2-popup.swal2-toast .swal2-success{border-color:#a5dc86}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line]{position:absolute;width:1.6em;height:3em;transform:rotate(45deg);border-radius:50%}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=left]{top:-0.8em;left:-0.5em;transform:rotate(-45deg);transform-origin:2em 2em;border-radius:4em 0 0 4em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=right]{top:-0.25em;left:.9375em;transform-origin:0 1.5em;border-radius:0 4em 4em 0}.swal2-popup.swal2-toast .swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-popup.swal2-toast .swal2-success .swal2-success-fix{top:0;left:.4375em;width:.4375em;height:2.6875em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line]{height:.3125em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line][class$=tip]{top:1.125em;left:.1875em;width:.75em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line][class$=long]{top:.9375em;right:.1875em;width:1.375em}.swal2-popup.swal2-toast .swal2-success.swal2-icon-show .swal2-success-line-tip{animation:swal2-toast-animate-success-line-tip .75s}.swal2-popup.swal2-toast .swal2-success.swal2-icon-show .swal2-success-line-long{animation:swal2-toast-animate-success-line-long .75s}.swal2-popup.swal2-toast.swal2-show{animation:swal2-toast-show .5s}.swal2-popup.swal2-toast.swal2-hide{animation:swal2-toast-hide .1s forwards}div:where(.swal2-container){display:grid;position:fixed;z-index:1060;inset:0;box-sizing:border-box;grid-template-areas:"top-start     top            top-end" "center-start  center         center-end" "bottom-start  bottom-center  bottom-end";grid-template-rows:minmax(min-content, auto) minmax(min-content, auto) minmax(min-content, auto);height:100%;padding:.625em;overflow-x:hidden;transition:background-color .1s;-webkit-overflow-scrolling:touch}div:where(.swal2-container).swal2-backdrop-show,div:where(.swal2-container).swal2-noanimation{background:rgba(0,0,0,.4)}div:where(.swal2-container).swal2-backdrop-hide{background:rgba(0,0,0,0) !important}div:where(.swal2-container).swal2-top-start,div:where(.swal2-container).swal2-center-start,div:where(.swal2-container).swal2-bottom-start{grid-template-columns:minmax(0, 1fr) auto auto}div:where(.swal2-container).swal2-top,div:where(.swal2-container).swal2-center,div:where(.swal2-container).swal2-bottom{grid-template-columns:auto minmax(0, 1fr) auto}div:where(.swal2-container).swal2-top-end,div:where(.swal2-container).swal2-center-end,div:where(.swal2-container).swal2-bottom-end{grid-template-columns:auto auto minmax(0, 1fr)}div:where(.swal2-container).swal2-top-start>.swal2-popup{align-self:start}div:where(.swal2-container).swal2-top>.swal2-popup{grid-column:2;place-self:start center}div:where(.swal2-container).swal2-top-end>.swal2-popup,div:where(.swal2-container).swal2-top-right>.swal2-popup{grid-column:3;place-self:start end}div:where(.swal2-container).swal2-center-start>.swal2-popup,div:where(.swal2-container).swal2-center-left>.swal2-popup{grid-row:2;align-self:center}div:where(.swal2-container).swal2-center>.swal2-popup{grid-column:2;grid-row:2;place-self:center center}div:where(.swal2-container).swal2-center-end>.swal2-popup,div:where(.swal2-container).swal2-center-right>.swal2-popup{grid-column:3;grid-row:2;place-self:center end}div:where(.swal2-container).swal2-bottom-start>.swal2-popup,div:where(.swal2-container).swal2-bottom-left>.swal2-popup{grid-column:1;grid-row:3;align-self:end}div:where(.swal2-container).swal2-bottom>.swal2-popup{grid-column:2;grid-row:3;place-self:end center}div:where(.swal2-container).swal2-bottom-end>.swal2-popup,div:where(.swal2-container).swal2-bottom-right>.swal2-popup{grid-column:3;grid-row:3;place-self:end end}div:where(.swal2-container).swal2-grow-row>.swal2-popup,div:where(.swal2-container).swal2-grow-fullscreen>.swal2-popup{grid-column:1/4;width:100%}div:where(.swal2-container).swal2-grow-column>.swal2-popup,div:where(.swal2-container).swal2-grow-fullscreen>.swal2-popup{grid-row:1/4;align-self:stretch}div:where(.swal2-container).swal2-no-transition{transition:none !important}div:where(.swal2-container) div:where(.swal2-popup){display:none;position:relative;box-sizing:border-box;grid-template-columns:minmax(0, 100%);width:32em;max-width:100%;padding:0 0 1.25em;border:none;border-radius:5px;background:#fff;color:#545454;font-family:inherit;font-size:1rem}div:where(.swal2-container) div:where(.swal2-popup):focus{outline:none}div:where(.swal2-container) div:where(.swal2-popup).swal2-loading{overflow-y:hidden}div:where(.swal2-container) h2:where(.swal2-title){position:relative;max-width:100%;margin:0;padding:.8em 1em 0;color:inherit;font-size:1.875em;font-weight:600;text-align:center;text-transform:none;word-wrap:break-word}div:where(.swal2-container) div:where(.swal2-actions){display:flex;z-index:1;box-sizing:border-box;flex-wrap:wrap;align-items:center;justify-content:center;width:auto;margin:1.25em auto 0;padding:0}div:where(.swal2-container) div:where(.swal2-actions):not(.swal2-loading) .swal2-styled[disabled]{opacity:.4}div:where(.swal2-container) div:where(.swal2-actions):not(.swal2-loading) .swal2-styled:hover{background-image:linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1))}div:where(.swal2-container) div:where(.swal2-actions):not(.swal2-loading) .swal2-styled:active{background-image:linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2))}div:where(.swal2-container) div:where(.swal2-loader){display:none;align-items:center;justify-content:center;width:2.2em;height:2.2em;margin:0 1.875em;animation:swal2-rotate-loading 1.5s linear 0s infinite normal;border-width:.25em;border-style:solid;border-radius:100%;border-color:#2778c4 rgba(0,0,0,0) #2778c4 rgba(0,0,0,0)}div:where(.swal2-container) button:where(.swal2-styled){margin:.3125em;padding:.625em 1.1em;transition:box-shadow .1s;box-shadow:0 0 0 3px rgba(0,0,0,0);font-weight:500}div:where(.swal2-container) button:where(.swal2-styled):not([disabled]){cursor:pointer}div:where(.swal2-container) button:where(.swal2-styled).swal2-confirm{border:0;border-radius:.25em;background:initial;background-color:#7066e0;color:#fff;font-size:1em}div:where(.swal2-container) button:where(.swal2-styled).swal2-confirm:focus{box-shadow:0 0 0 3px rgba(112,102,224,.5)}div:where(.swal2-container) button:where(.swal2-styled).swal2-deny{border:0;border-radius:.25em;background:initial;background-color:#dc3741;color:#fff;font-size:1em}div:where(.swal2-container) button:where(.swal2-styled).swal2-deny:focus{box-shadow:0 0 0 3px rgba(220,55,65,.5)}div:where(.swal2-container) button:where(.swal2-styled).swal2-cancel{border:0;border-radius:.25em;background:initial;background-color:#6e7881;color:#fff;font-size:1em}div:where(.swal2-container) button:where(.swal2-styled).swal2-cancel:focus{box-shadow:0 0 0 3px rgba(110,120,129,.5)}div:where(.swal2-container) button:where(.swal2-styled).swal2-default-outline:focus{box-shadow:0 0 0 3px rgba(100,150,200,.5)}div:where(.swal2-container) button:where(.swal2-styled):focus{outline:none}div:where(.swal2-container) button:where(.swal2-styled)::-moz-focus-inner{border:0}div:where(.swal2-container) div:where(.swal2-footer){margin:1em 0 0;padding:1em 1em 0;border-top:1px solid #eee;color:inherit;font-size:1em;text-align:center}div:where(.swal2-container) .swal2-timer-progress-bar-container{position:absolute;right:0;bottom:0;left:0;grid-column:auto !important;overflow:hidden;border-bottom-right-radius:5px;border-bottom-left-radius:5px}div:where(.swal2-container) div:where(.swal2-timer-progress-bar){width:100%;height:.25em;background:rgba(0,0,0,.2)}div:where(.swal2-container) img:where(.swal2-image){max-width:100%;margin:2em auto 1em}div:where(.swal2-container) button:where(.swal2-close){z-index:2;align-items:center;justify-content:center;width:1.2em;height:1.2em;margin-top:0;margin-right:0;margin-bottom:-1.2em;padding:0;overflow:hidden;transition:color .1s,box-shadow .1s;border:none;border-radius:5px;background:rgba(0,0,0,0);color:#ccc;font-family:monospace;font-size:2.5em;cursor:pointer;justify-self:end}div:where(.swal2-container) button:where(.swal2-close):hover{transform:none;background:rgba(0,0,0,0);color:#f27474}div:where(.swal2-container) button:where(.swal2-close):focus{outline:none;box-shadow:inset 0 0 0 3px rgba(100,150,200,.5)}div:where(.swal2-container) button:where(.swal2-close)::-moz-focus-inner{border:0}div:where(.swal2-container) .swal2-html-container{z-index:1;justify-content:center;margin:1em 1.6em .3em;padding:0;overflow:auto;color:inherit;font-size:1.125em;font-weight:normal;line-height:normal;text-align:center;word-wrap:break-word;word-break:break-word}div:where(.swal2-container) input:where(.swal2-input),div:where(.swal2-container) input:where(.swal2-file),div:where(.swal2-container) textarea:where(.swal2-textarea),div:where(.swal2-container) select:where(.swal2-select),div:where(.swal2-container) div:where(.swal2-radio),div:where(.swal2-container) label:where(.swal2-checkbox){margin:1em 2em 3px}div:where(.swal2-container) input:where(.swal2-input),div:where(.swal2-container) input:where(.swal2-file),div:where(.swal2-container) textarea:where(.swal2-textarea){box-sizing:border-box;width:auto;transition:border-color .1s,box-shadow .1s;border:1px solid #d9d9d9;border-radius:.1875em;background:rgba(0,0,0,0);box-shadow:inset 0 1px 1px rgba(0,0,0,.06),0 0 0 3px rgba(0,0,0,0);color:inherit;font-size:1.125em}div:where(.swal2-container) input:where(.swal2-input).swal2-inputerror,div:where(.swal2-container) input:where(.swal2-file).swal2-inputerror,div:where(.swal2-container) textarea:where(.swal2-textarea).swal2-inputerror{border-color:#f27474 !important;box-shadow:0 0 2px #f27474 !important}div:where(.swal2-container) input:where(.swal2-input):focus,div:where(.swal2-container) input:where(.swal2-file):focus,div:where(.swal2-container) textarea:where(.swal2-textarea):focus{border:1px solid #b4dbed;outline:none;box-shadow:inset 0 1px 1px rgba(0,0,0,.06),0 0 0 3px rgba(100,150,200,.5)}div:where(.swal2-container) input:where(.swal2-input)::placeholder,div:where(.swal2-container) input:where(.swal2-file)::placeholder,div:where(.swal2-container) textarea:where(.swal2-textarea)::placeholder{color:#ccc}div:where(.swal2-container) .swal2-range{margin:1em 2em 3px;background:#fff}div:where(.swal2-container) .swal2-range input{width:80%}div:where(.swal2-container) .swal2-range output{width:20%;color:inherit;font-weight:600;text-align:center}div:where(.swal2-container) .swal2-range input,div:where(.swal2-container) .swal2-range output{height:2.625em;padding:0;font-size:1.125em;line-height:2.625em}div:where(.swal2-container) .swal2-input{height:2.625em;padding:0 .75em}div:where(.swal2-container) .swal2-file{width:75%;margin-right:auto;margin-left:auto;background:rgba(0,0,0,0);font-size:1.125em}div:where(.swal2-container) .swal2-textarea{height:6.75em;padding:.75em}div:where(.swal2-container) .swal2-select{min-width:50%;max-width:100%;padding:.375em .625em;background:rgba(0,0,0,0);color:inherit;font-size:1.125em}div:where(.swal2-container) .swal2-radio,div:where(.swal2-container) .swal2-checkbox{align-items:center;justify-content:center;background:#fff;color:inherit}div:where(.swal2-container) .swal2-radio label,div:where(.swal2-container) .swal2-checkbox label{margin:0 .6em;font-size:1.125em}div:where(.swal2-container) .swal2-radio input,div:where(.swal2-container) .swal2-checkbox input{flex-shrink:0;margin:0 .4em}div:where(.swal2-container) label:where(.swal2-input-label){display:flex;justify-content:center;margin:1em auto 0}div:where(.swal2-container) div:where(.swal2-validation-message){align-items:center;justify-content:center;margin:1em 0 0;padding:.625em;overflow:hidden;background:#f0f0f0;color:#666;font-size:1em;font-weight:300}div:where(.swal2-container) div:where(.swal2-validation-message)::before{content:"!";display:inline-block;width:1.5em;min-width:1.5em;height:1.5em;margin:0 .625em;border-radius:50%;background-color:#f27474;color:#fff;font-weight:600;line-height:1.5em;text-align:center}div:where(.swal2-container) .swal2-progress-steps{flex-wrap:wrap;align-items:center;max-width:100%;margin:1.25em auto;padding:0;background:rgba(0,0,0,0);font-weight:600}div:where(.swal2-container) .swal2-progress-steps li{display:inline-block;position:relative}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step{z-index:20;flex-shrink:0;width:2em;height:2em;border-radius:2em;background:#2778c4;color:#fff;line-height:2em;text-align:center}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step.swal2-active-progress-step{background:#2778c4}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step.swal2-active-progress-step~.swal2-progress-step{background:#add8e6;color:#fff}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step.swal2-active-progress-step~.swal2-progress-step-line{background:#add8e6}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step-line{z-index:10;flex-shrink:0;width:2.5em;height:.4em;margin:0 -1px;background:#2778c4}div:where(.swal2-icon){position:relative;box-sizing:content-box;justify-content:center;width:5em;height:5em;margin:2.5em auto .6em;border:0.25em solid rgba(0,0,0,0);border-radius:50%;border-color:#000;font-family:inherit;line-height:5em;cursor:default;user-select:none}div:where(.swal2-icon) .swal2-icon-content{display:flex;align-items:center;font-size:3.75em}div:where(.swal2-icon).swal2-error{border-color:#f27474;color:#f27474}div:where(.swal2-icon).swal2-error .swal2-x-mark{position:relative;flex-grow:1}div:where(.swal2-icon).swal2-error [class^=swal2-x-mark-line]{display:block;position:absolute;top:2.3125em;width:2.9375em;height:.3125em;border-radius:.125em;background-color:#f27474}div:where(.swal2-icon).swal2-error [class^=swal2-x-mark-line][class$=left]{left:1.0625em;transform:rotate(45deg)}div:where(.swal2-icon).swal2-error [class^=swal2-x-mark-line][class$=right]{right:1em;transform:rotate(-45deg)}div:where(.swal2-icon).swal2-error.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-error.swal2-icon-show .swal2-x-mark{animation:swal2-animate-error-x-mark .5s}div:where(.swal2-icon).swal2-warning{border-color:#facea8;color:#f8bb86}div:where(.swal2-icon).swal2-warning.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-warning.swal2-icon-show .swal2-icon-content{animation:swal2-animate-i-mark .5s}div:where(.swal2-icon).swal2-info{border-color:#9de0f6;color:#3fc3ee}div:where(.swal2-icon).swal2-info.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-info.swal2-icon-show .swal2-icon-content{animation:swal2-animate-i-mark .8s}div:where(.swal2-icon).swal2-question{border-color:#c9dae1;color:#87adbd}div:where(.swal2-icon).swal2-question.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-question.swal2-icon-show .swal2-icon-content{animation:swal2-animate-question-mark .8s}div:where(.swal2-icon).swal2-success{border-color:#a5dc86;color:#a5dc86}div:where(.swal2-icon).swal2-success [class^=swal2-success-circular-line]{position:absolute;width:3.75em;height:7.5em;transform:rotate(45deg);border-radius:50%}div:where(.swal2-icon).swal2-success [class^=swal2-success-circular-line][class$=left]{top:-0.4375em;left:-2.0635em;transform:rotate(-45deg);transform-origin:3.75em 3.75em;border-radius:7.5em 0 0 7.5em}div:where(.swal2-icon).swal2-success [class^=swal2-success-circular-line][class$=right]{top:-0.6875em;left:1.875em;transform:rotate(-45deg);transform-origin:0 3.75em;border-radius:0 7.5em 7.5em 0}div:where(.swal2-icon).swal2-success .swal2-success-ring{position:absolute;z-index:2;top:-0.25em;left:-0.25em;box-sizing:content-box;width:100%;height:100%;border:.25em solid rgba(165,220,134,.3);border-radius:50%}div:where(.swal2-icon).swal2-success .swal2-success-fix{position:absolute;z-index:1;top:.5em;left:1.625em;width:.4375em;height:5.625em;transform:rotate(-45deg)}div:where(.swal2-icon).swal2-success [class^=swal2-success-line]{display:block;position:absolute;z-index:2;height:.3125em;border-radius:.125em;background-color:#a5dc86}div:where(.swal2-icon).swal2-success [class^=swal2-success-line][class$=tip]{top:2.875em;left:.8125em;width:1.5625em;transform:rotate(45deg)}div:where(.swal2-icon).swal2-success [class^=swal2-success-line][class$=long]{top:2.375em;right:.5em;width:2.9375em;transform:rotate(-45deg)}div:where(.swal2-icon).swal2-success.swal2-icon-show .swal2-success-line-tip{animation:swal2-animate-success-line-tip .75s}div:where(.swal2-icon).swal2-success.swal2-icon-show .swal2-success-line-long{animation:swal2-animate-success-line-long .75s}div:where(.swal2-icon).swal2-success.swal2-icon-show .swal2-success-circular-line-right{animation:swal2-rotate-success-circular-line 4.25s ease-in}[class^=swal2]{-webkit-tap-highlight-color:rgba(0,0,0,0)}.swal2-show{animation:swal2-show .3s}.swal2-hide{animation:swal2-hide .15s forwards}.swal2-noanimation{transition:none}.swal2-scrollbar-measure{position:absolute;top:-9999px;width:50px;height:50px;overflow:scroll}.swal2-rtl .swal2-close{margin-right:initial;margin-left:0}.swal2-rtl .swal2-timer-progress-bar{right:0;left:auto}@keyframes swal2-toast-show{0%{transform:translateY(-0.625em) rotateZ(2deg)}33%{transform:translateY(0) rotateZ(-2deg)}66%{transform:translateY(0.3125em) rotateZ(2deg)}100%{transform:translateY(0) rotateZ(0deg)}}@keyframes swal2-toast-hide{100%{transform:rotateZ(1deg);opacity:0}}@keyframes swal2-toast-animate-success-line-tip{0%{top:.5625em;left:.0625em;width:0}54%{top:.125em;left:.125em;width:0}70%{top:.625em;left:-0.25em;width:1.625em}84%{top:1.0625em;left:.75em;width:.5em}100%{top:1.125em;left:.1875em;width:.75em}}@keyframes swal2-toast-animate-success-line-long{0%{top:1.625em;right:1.375em;width:0}65%{top:1.25em;right:.9375em;width:0}84%{top:.9375em;right:0;width:1.125em}100%{top:.9375em;right:.1875em;width:1.375em}}@keyframes swal2-show{0%{transform:scale(0.7)}45%{transform:scale(1.05)}80%{transform:scale(0.95)}100%{transform:scale(1)}}@keyframes swal2-hide{0%{transform:scale(1);opacity:1}100%{transform:scale(0.5);opacity:0}}@keyframes swal2-animate-success-line-tip{0%{top:1.1875em;left:.0625em;width:0}54%{top:1.0625em;left:.125em;width:0}70%{top:2.1875em;left:-0.375em;width:3.125em}84%{top:3em;left:1.3125em;width:1.0625em}100%{top:2.8125em;left:.8125em;width:1.5625em}}@keyframes swal2-animate-success-line-long{0%{top:3.375em;right:2.875em;width:0}65%{top:3.375em;right:2.875em;width:0}84%{top:2.1875em;right:0;width:3.4375em}100%{top:2.375em;right:.5em;width:2.9375em}}@keyframes swal2-rotate-success-circular-line{0%{transform:rotate(-45deg)}5%{transform:rotate(-45deg)}12%{transform:rotate(-405deg)}100%{transform:rotate(-405deg)}}@keyframes swal2-animate-error-x-mark{0%{margin-top:1.625em;transform:scale(0.4);opacity:0}50%{margin-top:1.625em;transform:scale(0.4);opacity:0}80%{margin-top:-0.375em;transform:scale(1.15)}100%{margin-top:0;transform:scale(1);opacity:1}}@keyframes swal2-animate-error-icon{0%{transform:rotateX(100deg);opacity:0}100%{transform:rotateX(0deg);opacity:1}}@keyframes swal2-rotate-loading{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}@keyframes swal2-animate-question-mark{0%{transform:rotateY(-360deg)}100%{transform:rotateY(0)}}@keyframes swal2-animate-i-mark{0%{transform:rotateZ(45deg);opacity:0}25%{transform:rotateZ(-25deg);opacity:.4}50%{transform:rotateZ(15deg);opacity:.8}75%{transform:rotateZ(-5deg);opacity:1}100%{transform:rotateX(0);opacity:1}}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown){overflow:hidden}body.swal2-height-auto{height:auto !important}body.swal2-no-backdrop .swal2-container{background-color:rgba(0,0,0,0) !important;pointer-events:none}body.swal2-no-backdrop .swal2-container .swal2-popup{pointer-events:all}body.swal2-no-backdrop .swal2-container .swal2-modal{box-shadow:0 0 10px rgba(0,0,0,.4)}@media print{body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown){overflow-y:scroll !important}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown)>[aria-hidden=true]{display:none}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown) .swal2-container{position:static !important}}body.swal2-toast-shown .swal2-container{box-sizing:border-box;width:360px;max-width:100%;background-color:rgba(0,0,0,0);pointer-events:none}body.swal2-toast-shown .swal2-container.swal2-top{inset:0 auto auto 50%;transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-top-end,body.swal2-toast-shown .swal2-container.swal2-top-right{inset:0 0 auto auto}body.swal2-toast-shown .swal2-container.swal2-top-start,body.swal2-toast-shown .swal2-container.swal2-top-left{inset:0 auto auto 0}body.swal2-toast-shown .swal2-container.swal2-center-start,body.swal2-toast-shown .swal2-container.swal2-center-left{inset:50% auto auto 0;transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-center{inset:50% auto auto 50%;transform:translate(-50%, -50%)}body.swal2-toast-shown .swal2-container.swal2-center-end,body.swal2-toast-shown .swal2-container.swal2-center-right{inset:50% 0 auto auto;transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-start,body.swal2-toast-shown .swal2-container.swal2-bottom-left{inset:auto auto 0 0}body.swal2-toast-shown .swal2-container.swal2-bottom{inset:auto auto 0 50%;transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-end,body.swal2-toast-shown .swal2-container.swal2-bottom-right{inset:auto 0 0 auto}')})(DA);var p9=DA.exports;const Je=Ia(p9),m9=async(t,e)=>{try{return(await TV(rw,t,e)).user}catch(n){throw console.log("Error al registrar el usuario",n),n}},g9=async t=>{try{const e=await m9(t.email,t.password);if(e===null)return console.log("Error al registrar el usuario"),null;const n=st(at,"usuarios"),r=await ju(n,{...t,userId:e.uid});return console.log("Usuario creado exitosamente",r),e}catch(e){return console.log("Error al guardar usuario en BD",e),null}},v9=async(t,e)=>{try{return await bV(rw,t,e)}catch(n){return console.log(n),null}},NA=async()=>{try{await IV(rw)}catch(t){console.log(t)}},y9=async()=>{try{const t=st(at,"usuarios");return(await qa(t)).docs.map(r=>({id:r.id,...r.data()}))}catch(t){console.log(t)}},LA=async(t,e)=>{try{const n=st(at,"usuarios"),r=rn(n,t),i=await ui(r,e,{merge:!0});console.log("Edicion correcta de usuario :",t)}catch(n){console.log(n)}},w9=async(t,e)=>{try{const n=st(at,"usuarios"),r=uA(n,cA(t,"==",e));return(await qa(r)).docs.map(s=>({id:s.id,...s.data()}))}catch(n){console.log(n)}};function _9({open:t}){const{isAdmin:e,logout:n,logoutAdmin:r}=C.useContext(Lt).contextValue,i=as(),o=()=>{Je.fire({title:"Salir?",text:"Deseas cerrar sesión?",icon:"question",confirmButtonText:"Salir",showCancelButton:!0,reverseButtons:!0}).then(s=>{s.isConfirmed&&(NA(),n(),r(),i("/"))})};return _.jsxs(KM,{open:t,children:[_.jsx(Ht,{to:"/",children:"Home"}),e&&_.jsx(Ht,{to:"/administracion",children:"Dashboard"}),_.jsx(Ht,{to:"/userPerfil",children:"Editar perfil"}),_.jsx(Ht,{to:"/",children:"Mis favoritos"}),_.jsx(Ht,{open:t,onClick:o,children:"Cerrar Sesión"})]})}const gx="/assets/logoBurguer-9279a728.png",vx=j.button`
  border: none;
  background: transparent;
  display: flex;
  align-items: right;
  justify-content: center;
  cursor: pointer;
  padding: 10px;
  padding-top: 30px;
  background-color: rgba(0,0,0,0);
  transition: all ease-in-out 0.1s;
  
  &:hover {
    transform: scale(1.2);;
  }
  @media only screen and (min-width: 601px) {
    display: none;
  }
`;function E9({open:t,handleClick:e}){return t?_.jsx(vx,{onClick:e,children:_.jsx("img",{src:gx,alt:"logoBurguer",width:"30",height:"30"})}):_.jsx(vx,{onClick:e,children:_.jsx("img",{src:gx,alt:"logoBurguer",width:"30",height:"30"})})}const x9="/assets/alquicancha-f97edab5.png",T9=()=>{const[t,e]=C.useState(!1),n=()=>{const r=window.scrollY;e(r>70)};return C.useEffect(()=>(window.addEventListener("scroll",n),()=>{window.removeEventListener("scroll",n)}),[]),t},b9=()=>{const{isAdmin:t,logged:e,user:n,allProducts:r,setProductData:i}=C.useContext(Lt).contextValue,o=T9(),[s,a]=C.useState("");C.useEffect(()=>{if(n&&n===n){const p=n.nombre?n.nombre[0]:"",g=n.apellido?n.apellido[0]:"",T=p+g;a(T.toUpperCase())}},[n]);const l=()=>{localStorage.setItem("productos",JSON.stringify(r)),i(r)},[u,d]=C.useState(!1),h=()=>{d(!u)};return _.jsxs(LM,{style:{backgroundColor:o?"rgb(155, 191, 13)":""},children:[_.jsx(Ht,{to:"/",onClick:l,children:_.jsxs(MM,{children:[_.jsx(VM,{src:x9,alt:""}),_.jsxs(jM,{children:[_.jsx(B_,{children:"Vos poné el equipo"}),_.jsx(B_,{children:"Nosotros la cancha"})]})]})}),_.jsx("div",{children:e?_.jsxs(HM,{onClick:h,children:[_.jsxs(WM,{children:[" ",s," "]}),t&&_.jsx("p",{children:"Administrador"}),_.jsx(zM,{children:_.jsx(_9,{open:u})})]}):_.jsxs(_.Fragment,{children:[_.jsxs(FM,{children:[_.jsx(BM,{children:_.jsx(Ht,{to:"/register",children:"Crear Cuenta"})}),_.jsx($M,{children:_.jsx(Ht,{to:"/login",children:"Iniciar sesión"})})]}),_.jsx(E9,{handleClick:h}),_.jsx(UM,{children:_.jsx(GM,{open:u})})]})})]})},S9=j.div`
  max-width: 1024px;
  margin: 0 auto;
  min-height: 100%;
`,C9=({children:t})=>_.jsx(S9,{children:t});var MA={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},yx=G.createContext&&G.createContext(MA),Qi=globalThis&&globalThis.__assign||function(){return Qi=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++){e=arguments[n];for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i])}return t},Qi.apply(this,arguments)},I9=globalThis&&globalThis.__rest||function(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n};function VA(t){return t&&t.map(function(e,n){return G.createElement(e.tag,Qi({key:n},e.attr),VA(e.child))})}function zn(t){return function(e){return G.createElement(A9,Qi({attr:Qi({},t.attr)},e),VA(t.child))}}function A9(t){var e=function(n){var r=t.attr,i=t.size,o=t.title,s=I9(t,["attr","size","title"]),a=i||n.size||"1em",l;return n.className&&(l=n.className),t.className&&(l=(l?l+" ":"")+t.className),G.createElement("svg",Qi({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,r,s,{className:l,style:Qi(Qi({color:t.color||n.color},n.style),t.style),height:a,width:a,xmlns:"http://www.w3.org/2000/svg"}),o&&G.createElement("title",null,o),t.children)};return yx!==void 0?G.createElement(yx.Consumer,null,function(n){return e(n)}):e(MA)}function P9(t){return zn({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M12 2C6.486 2 2 6.486 2 12v4.143C2 17.167 2.897 18 4 18h1a1 1 0 0 0 1-1v-5.143a1 1 0 0 0-1-1h-.908C4.648 6.987 7.978 4 12 4s7.352 2.987 7.908 6.857H19a1 1 0 0 0-1 1V18c0 1.103-.897 2-2 2h-2v-1h-4v3h6c2.206 0 4-1.794 4-4 1.103 0 2-.833 2-1.857V12c0-5.514-4.486-10-10-10z"}}]})(t)}function k9(t){return zn({tag:"svg",attr:{viewBox:"0 0 1024 1024",fill:"currentColor",fillRule:"evenodd"},child:[{tag:"path",attr:{d:"M799.855 166.312c.023.007.043.018.084.059l57.69 57.69c.041.041.052.06.059.084a.118.118 0 0 1 0 .069c-.007.023-.018.042-.059.083L569.926 512l287.703 287.703c.041.04.052.06.059.083a.118.118 0 0 1 0 .07c-.007.022-.018.042-.059.083l-57.69 57.69c-.041.041-.06.052-.084.059a.118.118 0 0 1-.069 0c-.023-.007-.042-.018-.083-.059L512 569.926 224.297 857.629c-.04.041-.06.052-.083.059a.118.118 0 0 1-.07 0c-.022-.007-.042-.018-.083-.059l-57.69-57.69c-.041-.041-.052-.06-.059-.084a.118.118 0 0 1 0-.069c.007-.023.018-.042.059-.083L454.073 512 166.371 224.297c-.041-.04-.052-.06-.059-.083a.118.118 0 0 1 0-.07c.007-.022.018-.042.059-.083l57.69-57.69c.041-.041.06-.052.084-.059a.118.118 0 0 1 .069 0c.023.007.042.018.083.059L512 454.073l287.703-287.702c.04-.041.06-.052.083-.059a.118.118 0 0 1 .07 0Z"}}]})(t)}function R9(t){return zn({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"}}]})(t)}function O9(t){return zn({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z"}}]})(t)}function D9(t){return zn({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M464 480H48c-26.51 0-48-21.49-48-48V80c0-26.51 21.49-48 48-48h416c26.51 0 48 21.49 48 48v352c0 26.51-21.49 48-48 48zM128 120c-22.091 0-40 17.909-40 40s17.909 40 40 40 40-17.909 40-40-17.909-40-40-40zm0 96c-22.091 0-40 17.909-40 40s17.909 40 40 40 40-17.909 40-40-17.909-40-40-40zm0 96c-22.091 0-40 17.909-40 40s17.909 40 40 40 40-17.909 40-40-17.909-40-40-40zm288-136v-32c0-6.627-5.373-12-12-12H204c-6.627 0-12 5.373-12 12v32c0 6.627 5.373 12 12 12h200c6.627 0 12-5.373 12-12zm0 96v-32c0-6.627-5.373-12-12-12H204c-6.627 0-12 5.373-12 12v32c0 6.627 5.373 12 12 12h200c6.627 0 12-5.373 12-12zm0 96v-32c0-6.627-5.373-12-12-12H204c-6.627 0-12 5.373-12 12v32c0 6.627 5.373 12 12 12h200c6.627 0 12-5.373 12-12z"}}]})(t)}function N9(t){return zn({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M458.4 64.3C400.6 15.7 311.3 23 256 79.3 200.7 23 111.4 15.6 53.6 64.3-21.6 127.6-10.6 230.8 43 285.5l175.4 178.7c10 10.2 23.4 15.9 37.6 15.9 14.3 0 27.6-5.6 37.6-15.8L469 285.6c53.5-54.7 64.7-157.9-10.6-221.3zm-23.6 187.5L259.4 430.5c-2.4 2.4-4.4 2.4-6.8 0L77.2 251.8c-36.5-37.2-43.9-107.6 7.3-150.7 38.9-32.7 98.9-27.8 136.5 10.5l35 35.7 35-35.7c37.8-38.5 97.8-43.2 136.5-10.6 51.1 43.1 43.5 113.9 7.3 150.8z"}}]})(t)}var Zh=C.createContext({isChatOpen:!1,setIsChatOpen:function(){}}),L9=function(e){var n=e.children,r=C.useState(!1),i=r[0],o=r[1],s={isChatOpen:i,setIsChatOpen:o};return G.createElement(Zh.Provider,{value:s},n)},Ts={root:"_39IQj",message:"_1mXIm",message_title:"_3sxfE",message_body:"_1iYf5",triangle_top_right:"_3Oyio",message_time:"_3--Dl"},wx={companyName:"Support",message:`Hello! 👋🏼 

What can we do for you?`},M9=function(e){var n=e.companyName,r=n===void 0?wx.companyName:n,i=e.message,o=i===void 0?wx.message:i,s=new Date().toTimeString().split(":").slice(0,2).join(":");return G.createElement("div",{className:Ts.root},G.createElement("div",{className:Ts.message},G.createElement("span",{className:Ts.triangle_top_right}),G.createElement("span",{className:Ts.message_title},r),G.createElement("p",{className:Ts.message_body},o),G.createElement("span",{className:Ts.message_time},s)))},bs={root:"_2uc4w",close_btn:"_lI8mw",logo:"_3jDIS",texts:"_3trGj",texts_h1:"_3XZUa",texts_span:"_Muogh"},_x={companyName:"Support",replyTimeText:"Typically replies within a day"},V9=function(e){var n=e.CompanyIcon,r=e.companyName,i=r===void 0?_x.companyName:r,o=e.replyTimeText,s=o===void 0?_x.replyTimeText:o,a=C.useContext(Zh),l=a.setIsChatOpen,u=function(){l(!1)};return G.createElement("div",{className:bs.root},G.createElement("span",{className:bs.close_btn,onClick:u},G.createElement(k9,null)),G.createElement("div",{className:bs.logo},n&&G.createElement(n,null)||G.createElement(P9,null)),G.createElement("div",{className:bs.texts},G.createElement("span",{className:bs.texts_h1},i),G.createElement("span",{className:bs.texts_span},s)))},gm={root:"_3XP0H",input:"_siqLL",button:"_3twZq"},Ex={sendButtonText:"Send",inputPlaceHolder:"Type a message"},j9=function(e){var n=e.phoneNumber,r=e.inputPlaceHolder,i=r===void 0?Ex.inputPlaceHolder:r,o=e.sendButtonText,s=o===void 0?Ex.sendButtonText:o,a=C.useState(""),l=a[0],u=a[1],d=function(){if(!n)return window.alert("Invalid Phone Number"),!1;window.open("https://wa.me/"+n+"?text="+l),u("")},h=function(g){u(g.target.value)};return G.createElement("div",{className:gm.root},G.createElement("input",{placeholder:i,className:gm.input,onChange:h,value:l}),G.createElement("button",{className:gm.button,onClick:d},s))},F9={root:"_2qp0Z"},$9=function(){var e=C.useContext(Zh),n=e.isChatOpen,r=e.setIsChatOpen,i=function(){r(!n)};return G.createElement("div",{className:F9.root,onClick:i},G.createElement(R9,null))},vm={root:"_1yCVn",open:"_1qse9",customTransition:"_2-Apl",close:"_--3fm"},B9=function(e){var n=C.useContext(Zh),r=n.isChatOpen,i=n.setIsChatOpen;return C.useEffect(function(){e.open&&i(!0)},[]),G.createElement(C.Fragment,null,G.createElement("div",{className:vm.root+" "+(r?vm.open:vm.close)},G.createElement(V9,e),G.createElement(M9,e),G.createElement(j9,e)),G.createElement($9,null))},U9=function(e){return G.createElement(L9,null,G.createElement(B9,e))};const z9=()=>_.jsxs(_.Fragment,{children:[_.jsx("div",{id:"soporte"}),_.jsx(U9,{inputPlaceHolder:"Escriba aquí su mensaje",message:`Hola! 👋🏼 
En qué puedo ayudarte?`,phoneNumber:"541165492709"})]});function H9(){return _.jsxs(_.Fragment,{children:[_.jsx(b9,{}),_.jsxs(C9,{children:[_.jsx(z9,{}),_.jsx(DS,{})]})]})}const W9=j.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-top: 32px;
`,q9=j.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 80px;
  height: 95px;
  background-color: var(--color-orange);
  box-shadow: -2px 4px 8px 1px rgba(0, 0, 0, 0.62);
  border-radius: 8px;
  color: white;
  font-size: 12px;
  padding: 8px;
  cursor: pointer;

  &:hover {
    transform: scale(1.1);
    color: black;

    /* .imgContainer {
      img {
        filter: brightness(0);
      }
    } */
  }

  .imgContainer {
    min-height: 70%;

    img {
      width: 60px;
      height: auto;
    }
  }

  @media (max-width: 600px) {
    width: 40px;
    height: 50px;
    .imgContainer {
      img {
        width: 34px;
        height: 35px;
      }
    }
    p {
      display: none;
    }
  }
`,G9=({categoria:t})=>{const{setProductData:e}=C.useContext(Lt).contextValue,{titulo:n,urlImage:r,id:i}=t,o=async()=>{const s=await sw("categoria",i);e(s)};return _.jsxs(q9,{onClick:o,children:[_.jsx("div",{className:"imgContainer",children:_.jsx("img",{src:r,alt:n})}),_.jsx("p",{children:n})]})},K9=()=>{const{categorias:t}=C.useContext(Lt).contextValue;return _.jsx(W9,{children:t&&t.map((e,n)=>_.jsx(G9,{categoria:e},n))})};function xx(t){return t!==null&&typeof t=="object"&&"constructor"in t&&t.constructor===Object}function aw(t,e){t===void 0&&(t={}),e===void 0&&(e={}),Object.keys(e).forEach(n=>{typeof t[n]>"u"?t[n]=e[n]:xx(e[n])&&xx(t[n])&&Object.keys(e[n]).length>0&&aw(t[n],e[n])})}const jA={body:{},addEventListener(){},removeEventListener(){},activeElement:{blur(){},nodeName:""},querySelector(){return null},querySelectorAll(){return[]},getElementById(){return null},createEvent(){return{initEvent(){}}},createElement(){return{children:[],childNodes:[],style:{},setAttribute(){},getElementsByTagName(){return[]}}},createElementNS(){return{}},importNode(){return null},location:{hash:"",host:"",hostname:"",href:"",origin:"",pathname:"",protocol:"",search:""}};function Qa(){const t=typeof document<"u"?document:{};return aw(t,jA),t}const Q9={document:jA,navigator:{userAgent:""},location:{hash:"",host:"",hostname:"",href:"",origin:"",pathname:"",protocol:"",search:""},history:{replaceState(){},pushState(){},go(){},back(){}},CustomEvent:function(){return this},addEventListener(){},removeEventListener(){},getComputedStyle(){return{getPropertyValue(){return""}}},Image(){},Date(){},screen:{},setTimeout(){},clearTimeout(){},matchMedia(){return{}},requestAnimationFrame(t){return typeof setTimeout>"u"?(t(),null):setTimeout(t,0)},cancelAnimationFrame(t){typeof setTimeout>"u"||clearTimeout(t)}};function Pn(){const t=typeof window<"u"?window:{};return aw(t,Q9),t}function Y9(t){return t===void 0&&(t=""),t.trim().split(" ").filter(e=>!!e.trim())}function X9(t){const e=t;Object.keys(e).forEach(n=>{try{e[n]=null}catch{}try{delete e[n]}catch{}})}function hv(t,e){return e===void 0&&(e=0),setTimeout(t,e)}function Vf(){return Date.now()}function J9(t){const e=Pn();let n;return e.getComputedStyle&&(n=e.getComputedStyle(t,null)),!n&&t.currentStyle&&(n=t.currentStyle),n||(n=t.style),n}function Z9(t,e){e===void 0&&(e="x");const n=Pn();let r,i,o;const s=J9(t);return n.WebKitCSSMatrix?(i=s.transform||s.webkitTransform,i.split(",").length>6&&(i=i.split(", ").map(a=>a.replace(",",".")).join(", ")),o=new n.WebKitCSSMatrix(i==="none"?"":i)):(o=s.MozTransform||s.OTransform||s.MsTransform||s.msTransform||s.transform||s.getPropertyValue("transform").replace("translate(","matrix(1, 0, 0, 1,"),r=o.toString().split(",")),e==="x"&&(n.WebKitCSSMatrix?i=o.m41:r.length===16?i=parseFloat(r[12]):i=parseFloat(r[4])),e==="y"&&(n.WebKitCSSMatrix?i=o.m42:r.length===16?i=parseFloat(r[13]):i=parseFloat(r[5])),i||0}function od(t){return typeof t=="object"&&t!==null&&t.constructor&&Object.prototype.toString.call(t).slice(8,-1)==="Object"}function eU(t){return typeof window<"u"&&typeof window.HTMLElement<"u"?t instanceof HTMLElement:t&&(t.nodeType===1||t.nodeType===11)}function En(){const t=Object(arguments.length<=0?void 0:arguments[0]),e=["__proto__","constructor","prototype"];for(let n=1;n<arguments.length;n+=1){const r=n<0||arguments.length<=n?void 0:arguments[n];if(r!=null&&!eU(r)){const i=Object.keys(Object(r)).filter(o=>e.indexOf(o)<0);for(let o=0,s=i.length;o<s;o+=1){const a=i[o],l=Object.getOwnPropertyDescriptor(r,a);l!==void 0&&l.enumerable&&(od(t[a])&&od(r[a])?r[a].__swiper__?t[a]=r[a]:En(t[a],r[a]):!od(t[a])&&od(r[a])?(t[a]={},r[a].__swiper__?t[a]=r[a]:En(t[a],r[a])):t[a]=r[a])}}}return t}function sd(t,e,n){t.style.setProperty(e,n)}function FA(t){let{swiper:e,targetPosition:n,side:r}=t;const i=Pn(),o=-e.translate;let s=null,a;const l=e.params.speed;e.wrapperEl.style.scrollSnapType="none",i.cancelAnimationFrame(e.cssModeFrameID);const u=n>o?"next":"prev",d=(p,g)=>u==="next"&&p>=g||u==="prev"&&p<=g,h=()=>{a=new Date().getTime(),s===null&&(s=a);const p=Math.max(Math.min((a-s)/l,1),0),g=.5-Math.cos(p*Math.PI)/2;let T=o+g*(n-o);if(d(T,n)&&(T=n),e.wrapperEl.scrollTo({[r]:T}),d(T,n)){e.wrapperEl.style.overflow="hidden",e.wrapperEl.style.scrollSnapType="",setTimeout(()=>{e.wrapperEl.style.overflow="",e.wrapperEl.scrollTo({[r]:T})}),i.cancelAnimationFrame(e.cssModeFrameID);return}e.cssModeFrameID=i.requestAnimationFrame(h)};h()}function br(t,e){return e===void 0&&(e=""),[...t.children].filter(n=>n.matches(e))}function jf(t){try{console.warn(t);return}catch{}}function Ff(t,e){e===void 0&&(e=[]);const n=document.createElement(t);return n.classList.add(...Array.isArray(e)?e:Y9(e)),n}function tU(t,e){const n=[];for(;t.previousElementSibling;){const r=t.previousElementSibling;e?r.matches(e)&&n.push(r):n.push(r),t=r}return n}function nU(t,e){const n=[];for(;t.nextElementSibling;){const r=t.nextElementSibling;e?r.matches(e)&&n.push(r):n.push(r),t=r}return n}function Di(t,e){return Pn().getComputedStyle(t,null).getPropertyValue(e)}function $f(t){let e=t,n;if(e){for(n=0;(e=e.previousSibling)!==null;)e.nodeType===1&&(n+=1);return n}}function $A(t,e){const n=[];let r=t.parentElement;for(;r;)e?r.matches(e)&&n.push(r):n.push(r),r=r.parentElement;return n}function pv(t,e,n){const r=Pn();return n?t[e==="width"?"offsetWidth":"offsetHeight"]+parseFloat(r.getComputedStyle(t,null).getPropertyValue(e==="width"?"margin-right":"margin-top"))+parseFloat(r.getComputedStyle(t,null).getPropertyValue(e==="width"?"margin-left":"margin-bottom")):t.offsetWidth}let ym;function rU(){const t=Pn(),e=Qa();return{smoothScroll:e.documentElement&&e.documentElement.style&&"scrollBehavior"in e.documentElement.style,touch:!!("ontouchstart"in t||t.DocumentTouch&&e instanceof t.DocumentTouch)}}function BA(){return ym||(ym=rU()),ym}let wm;function iU(t){let{userAgent:e}=t===void 0?{}:t;const n=BA(),r=Pn(),i=r.navigator.platform,o=e||r.navigator.userAgent,s={ios:!1,android:!1},a=r.screen.width,l=r.screen.height,u=o.match(/(Android);?[\s\/]+([\d.]+)?/);let d=o.match(/(iPad).*OS\s([\d_]+)/);const h=o.match(/(iPod)(.*OS\s([\d_]+))?/),p=!d&&o.match(/(iPhone\sOS|iOS)\s([\d_]+)/),g=i==="Win32";let T=i==="MacIntel";const b=["1024x1366","1366x1024","834x1194","1194x834","834x1112","1112x834","768x1024","1024x768","820x1180","1180x820","810x1080","1080x810"];return!d&&T&&n.touch&&b.indexOf(`${a}x${l}`)>=0&&(d=o.match(/(Version)\/([\d.]+)/),d||(d=[0,1,"13_0_0"]),T=!1),u&&!g&&(s.os="android",s.android=!0),(d||p||h)&&(s.os="ios",s.ios=!0),s}function oU(t){return t===void 0&&(t={}),wm||(wm=iU(t)),wm}let _m;function sU(){const t=Pn();let e=!1;function n(){const r=t.navigator.userAgent.toLowerCase();return r.indexOf("safari")>=0&&r.indexOf("chrome")<0&&r.indexOf("android")<0}if(n()){const r=String(t.navigator.userAgent);if(r.includes("Version/")){const[i,o]=r.split("Version/")[1].split(" ")[0].split(".").map(s=>Number(s));e=i<16||i===16&&o<2}}return{isSafari:e||n(),needPerspectiveFix:e,isWebView:/(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(t.navigator.userAgent)}}function aU(){return _m||(_m=sU()),_m}function lU(t){let{swiper:e,on:n,emit:r}=t;const i=Pn();let o=null,s=null;const a=()=>{!e||e.destroyed||!e.initialized||(r("beforeResize"),r("resize"))},l=()=>{!e||e.destroyed||!e.initialized||(o=new ResizeObserver(h=>{s=i.requestAnimationFrame(()=>{const{width:p,height:g}=e;let T=p,b=g;h.forEach(S=>{let{contentBoxSize:E,contentRect:m,target:v}=S;v&&v!==e.el||(T=m?m.width:(E[0]||E).inlineSize,b=m?m.height:(E[0]||E).blockSize)}),(T!==p||b!==g)&&a()})}),o.observe(e.el))},u=()=>{s&&i.cancelAnimationFrame(s),o&&o.unobserve&&e.el&&(o.unobserve(e.el),o=null)},d=()=>{!e||e.destroyed||!e.initialized||r("orientationchange")};n("init",()=>{if(e.params.resizeObserver&&typeof i.ResizeObserver<"u"){l();return}i.addEventListener("resize",a),i.addEventListener("orientationchange",d)}),n("destroy",()=>{u(),i.removeEventListener("resize",a),i.removeEventListener("orientationchange",d)})}function uU(t){let{swiper:e,extendParams:n,on:r,emit:i}=t;const o=[],s=Pn(),a=function(d,h){h===void 0&&(h={});const p=s.MutationObserver||s.WebkitMutationObserver,g=new p(T=>{if(e.__preventObserver__)return;if(T.length===1){i("observerUpdate",T[0]);return}const b=function(){i("observerUpdate",T[0])};s.requestAnimationFrame?s.requestAnimationFrame(b):s.setTimeout(b,0)});g.observe(d,{attributes:typeof h.attributes>"u"?!0:h.attributes,childList:typeof h.childList>"u"?!0:h.childList,characterData:typeof h.characterData>"u"?!0:h.characterData}),o.push(g)},l=()=>{if(e.params.observer){if(e.params.observeParents){const d=$A(e.hostEl);for(let h=0;h<d.length;h+=1)a(d[h])}a(e.hostEl,{childList:e.params.observeSlideChildren}),a(e.wrapperEl,{attributes:!1})}},u=()=>{o.forEach(d=>{d.disconnect()}),o.splice(0,o.length)};n({observer:!1,observeParents:!1,observeSlideChildren:!1}),r("init",l),r("destroy",u)}var cU={on(t,e,n){const r=this;if(!r.eventsListeners||r.destroyed||typeof e!="function")return r;const i=n?"unshift":"push";return t.split(" ").forEach(o=>{r.eventsListeners[o]||(r.eventsListeners[o]=[]),r.eventsListeners[o][i](e)}),r},once(t,e,n){const r=this;if(!r.eventsListeners||r.destroyed||typeof e!="function")return r;function i(){r.off(t,i),i.__emitterProxy&&delete i.__emitterProxy;for(var o=arguments.length,s=new Array(o),a=0;a<o;a++)s[a]=arguments[a];e.apply(r,s)}return i.__emitterProxy=e,r.on(t,i,n)},onAny(t,e){const n=this;if(!n.eventsListeners||n.destroyed||typeof t!="function")return n;const r=e?"unshift":"push";return n.eventsAnyListeners.indexOf(t)<0&&n.eventsAnyListeners[r](t),n},offAny(t){const e=this;if(!e.eventsListeners||e.destroyed||!e.eventsAnyListeners)return e;const n=e.eventsAnyListeners.indexOf(t);return n>=0&&e.eventsAnyListeners.splice(n,1),e},off(t,e){const n=this;return!n.eventsListeners||n.destroyed||!n.eventsListeners||t.split(" ").forEach(r=>{typeof e>"u"?n.eventsListeners[r]=[]:n.eventsListeners[r]&&n.eventsListeners[r].forEach((i,o)=>{(i===e||i.__emitterProxy&&i.__emitterProxy===e)&&n.eventsListeners[r].splice(o,1)})}),n},emit(){const t=this;if(!t.eventsListeners||t.destroyed||!t.eventsListeners)return t;let e,n,r;for(var i=arguments.length,o=new Array(i),s=0;s<i;s++)o[s]=arguments[s];return typeof o[0]=="string"||Array.isArray(o[0])?(e=o[0],n=o.slice(1,o.length),r=t):(e=o[0].events,n=o[0].data,r=o[0].context||t),n.unshift(r),(Array.isArray(e)?e:e.split(" ")).forEach(l=>{t.eventsAnyListeners&&t.eventsAnyListeners.length&&t.eventsAnyListeners.forEach(u=>{u.apply(r,[l,...n])}),t.eventsListeners&&t.eventsListeners[l]&&t.eventsListeners[l].forEach(u=>{u.apply(r,n)})}),t}};function dU(){const t=this;let e,n;const r=t.el;typeof t.params.width<"u"&&t.params.width!==null?e=t.params.width:e=r.clientWidth,typeof t.params.height<"u"&&t.params.height!==null?n=t.params.height:n=r.clientHeight,!(e===0&&t.isHorizontal()||n===0&&t.isVertical())&&(e=e-parseInt(Di(r,"padding-left")||0,10)-parseInt(Di(r,"padding-right")||0,10),n=n-parseInt(Di(r,"padding-top")||0,10)-parseInt(Di(r,"padding-bottom")||0,10),Number.isNaN(e)&&(e=0),Number.isNaN(n)&&(n=0),Object.assign(t,{width:e,height:n,size:t.isHorizontal()?e:n}))}function fU(){const t=this;function e(D,q){return parseFloat(D.getPropertyValue(t.getDirectionLabel(q))||0)}const n=t.params,{wrapperEl:r,slidesEl:i,size:o,rtlTranslate:s,wrongRTL:a}=t,l=t.virtual&&n.virtual.enabled,u=l?t.virtual.slides.length:t.slides.length,d=br(i,`.${t.params.slideClass}, swiper-slide`),h=l?t.virtual.slides.length:d.length;let p=[];const g=[],T=[];let b=n.slidesOffsetBefore;typeof b=="function"&&(b=n.slidesOffsetBefore.call(t));let S=n.slidesOffsetAfter;typeof S=="function"&&(S=n.slidesOffsetAfter.call(t));const E=t.snapGrid.length,m=t.slidesGrid.length;let v=n.spaceBetween,x=-b,A=0,k=0;if(typeof o>"u")return;typeof v=="string"&&v.indexOf("%")>=0?v=parseFloat(v.replace("%",""))/100*o:typeof v=="string"&&(v=parseFloat(v)),t.virtualSize=-v,d.forEach(D=>{s?D.style.marginLeft="":D.style.marginRight="",D.style.marginBottom="",D.style.marginTop=""}),n.centeredSlides&&n.cssMode&&(sd(r,"--swiper-centered-offset-before",""),sd(r,"--swiper-centered-offset-after",""));const P=n.grid&&n.grid.rows>1&&t.grid;P?t.grid.initSlides(d):t.grid&&t.grid.unsetSlides();let R;const O=n.slidesPerView==="auto"&&n.breakpoints&&Object.keys(n.breakpoints).filter(D=>typeof n.breakpoints[D].slidesPerView<"u").length>0;for(let D=0;D<h;D+=1){R=0;let q;if(d[D]&&(q=d[D]),P&&t.grid.updateSlide(D,q,d),!(d[D]&&Di(q,"display")==="none")){if(n.slidesPerView==="auto"){O&&(d[D].style[t.getDirectionLabel("width")]="");const B=getComputedStyle(q),U=q.style.transform,V=q.style.webkitTransform;if(U&&(q.style.transform="none"),V&&(q.style.webkitTransform="none"),n.roundLengths)R=t.isHorizontal()?pv(q,"width",!0):pv(q,"height",!0);else{const z=e(B,"width"),Y=e(B,"padding-left"),N=e(B,"padding-right"),M=e(B,"margin-left"),W=e(B,"margin-right"),$=B.getPropertyValue("box-sizing");if($&&$==="border-box")R=z+M+W;else{const{clientWidth:ie,offsetWidth:he}=q;R=z+Y+N+M+W+(he-ie)}}U&&(q.style.transform=U),V&&(q.style.webkitTransform=V),n.roundLengths&&(R=Math.floor(R))}else R=(o-(n.slidesPerView-1)*v)/n.slidesPerView,n.roundLengths&&(R=Math.floor(R)),d[D]&&(d[D].style[t.getDirectionLabel("width")]=`${R}px`);d[D]&&(d[D].swiperSlideSize=R),T.push(R),n.centeredSlides?(x=x+R/2+A/2+v,A===0&&D!==0&&(x=x-o/2-v),D===0&&(x=x-o/2-v),Math.abs(x)<1/1e3&&(x=0),n.roundLengths&&(x=Math.floor(x)),k%n.slidesPerGroup===0&&p.push(x),g.push(x)):(n.roundLengths&&(x=Math.floor(x)),(k-Math.min(t.params.slidesPerGroupSkip,k))%t.params.slidesPerGroup===0&&p.push(x),g.push(x),x=x+R+v),t.virtualSize+=R+v,A=R,k+=1}}if(t.virtualSize=Math.max(t.virtualSize,o)+S,s&&a&&(n.effect==="slide"||n.effect==="coverflow")&&(r.style.width=`${t.virtualSize+v}px`),n.setWrapperSize&&(r.style[t.getDirectionLabel("width")]=`${t.virtualSize+v}px`),P&&t.grid.updateWrapperSize(R,p),!n.centeredSlides){const D=[];for(let q=0;q<p.length;q+=1){let B=p[q];n.roundLengths&&(B=Math.floor(B)),p[q]<=t.virtualSize-o&&D.push(B)}p=D,Math.floor(t.virtualSize-o)-Math.floor(p[p.length-1])>1&&p.push(t.virtualSize-o)}if(l&&n.loop){const D=T[0]+v;if(n.slidesPerGroup>1){const q=Math.ceil((t.virtual.slidesBefore+t.virtual.slidesAfter)/n.slidesPerGroup),B=D*n.slidesPerGroup;for(let U=0;U<q;U+=1)p.push(p[p.length-1]+B)}for(let q=0;q<t.virtual.slidesBefore+t.virtual.slidesAfter;q+=1)n.slidesPerGroup===1&&p.push(p[p.length-1]+D),g.push(g[g.length-1]+D),t.virtualSize+=D}if(p.length===0&&(p=[0]),v!==0){const D=t.isHorizontal()&&s?"marginLeft":t.getDirectionLabel("marginRight");d.filter((q,B)=>!n.cssMode||n.loop?!0:B!==d.length-1).forEach(q=>{q.style[D]=`${v}px`})}if(n.centeredSlides&&n.centeredSlidesBounds){let D=0;T.forEach(B=>{D+=B+(v||0)}),D-=v;const q=D-o;p=p.map(B=>B<=0?-b:B>q?q+S:B)}if(n.centerInsufficientSlides){let D=0;if(T.forEach(q=>{D+=q+(v||0)}),D-=v,D<o){const q=(o-D)/2;p.forEach((B,U)=>{p[U]=B-q}),g.forEach((B,U)=>{g[U]=B+q})}}if(Object.assign(t,{slides:d,snapGrid:p,slidesGrid:g,slidesSizesGrid:T}),n.centeredSlides&&n.cssMode&&!n.centeredSlidesBounds){sd(r,"--swiper-centered-offset-before",`${-p[0]}px`),sd(r,"--swiper-centered-offset-after",`${t.size/2-T[T.length-1]/2}px`);const D=-t.snapGrid[0],q=-t.slidesGrid[0];t.snapGrid=t.snapGrid.map(B=>B+D),t.slidesGrid=t.slidesGrid.map(B=>B+q)}if(h!==u&&t.emit("slidesLengthChange"),p.length!==E&&(t.params.watchOverflow&&t.checkOverflow(),t.emit("snapGridLengthChange")),g.length!==m&&t.emit("slidesGridLengthChange"),n.watchSlidesProgress&&t.updateSlidesOffset(),!l&&!n.cssMode&&(n.effect==="slide"||n.effect==="fade")){const D=`${n.containerModifierClass}backface-hidden`,q=t.el.classList.contains(D);h<=n.maxBackfaceHiddenSlides?q||t.el.classList.add(D):q&&t.el.classList.remove(D)}}function hU(t){const e=this,n=[],r=e.virtual&&e.params.virtual.enabled;let i=0,o;typeof t=="number"?e.setTransition(t):t===!0&&e.setTransition(e.params.speed);const s=a=>r?e.slides[e.getSlideIndexByData(a)]:e.slides[a];if(e.params.slidesPerView!=="auto"&&e.params.slidesPerView>1)if(e.params.centeredSlides)(e.visibleSlides||[]).forEach(a=>{n.push(a)});else for(o=0;o<Math.ceil(e.params.slidesPerView);o+=1){const a=e.activeIndex+o;if(a>e.slides.length&&!r)break;n.push(s(a))}else n.push(s(e.activeIndex));for(o=0;o<n.length;o+=1)if(typeof n[o]<"u"){const a=n[o].offsetHeight;i=a>i?a:i}(i||i===0)&&(e.wrapperEl.style.height=`${i}px`)}function pU(){const t=this,e=t.slides,n=t.isElement?t.isHorizontal()?t.wrapperEl.offsetLeft:t.wrapperEl.offsetTop:0;for(let r=0;r<e.length;r+=1)e[r].swiperSlideOffset=(t.isHorizontal()?e[r].offsetLeft:e[r].offsetTop)-n-t.cssOverflowAdjustment()}function mU(t){t===void 0&&(t=this&&this.translate||0);const e=this,n=e.params,{slides:r,rtlTranslate:i,snapGrid:o}=e;if(r.length===0)return;typeof r[0].swiperSlideOffset>"u"&&e.updateSlidesOffset();let s=-t;i&&(s=t),r.forEach(l=>{l.classList.remove(n.slideVisibleClass,n.slideFullyVisibleClass)}),e.visibleSlidesIndexes=[],e.visibleSlides=[];let a=n.spaceBetween;typeof a=="string"&&a.indexOf("%")>=0?a=parseFloat(a.replace("%",""))/100*e.size:typeof a=="string"&&(a=parseFloat(a));for(let l=0;l<r.length;l+=1){const u=r[l];let d=u.swiperSlideOffset;n.cssMode&&n.centeredSlides&&(d-=r[0].swiperSlideOffset);const h=(s+(n.centeredSlides?e.minTranslate():0)-d)/(u.swiperSlideSize+a),p=(s-o[0]+(n.centeredSlides?e.minTranslate():0)-d)/(u.swiperSlideSize+a),g=-(s-d),T=g+e.slidesSizesGrid[l],b=g>=0&&g<=e.size-e.slidesSizesGrid[l];(g>=0&&g<e.size-1||T>1&&T<=e.size||g<=0&&T>=e.size)&&(e.visibleSlides.push(u),e.visibleSlidesIndexes.push(l),r[l].classList.add(n.slideVisibleClass)),b&&r[l].classList.add(n.slideFullyVisibleClass),u.progress=i?-h:h,u.originalProgress=i?-p:p}}function gU(t){const e=this;if(typeof t>"u"){const d=e.rtlTranslate?-1:1;t=e&&e.translate&&e.translate*d||0}const n=e.params,r=e.maxTranslate()-e.minTranslate();let{progress:i,isBeginning:o,isEnd:s,progressLoop:a}=e;const l=o,u=s;if(r===0)i=0,o=!0,s=!0;else{i=(t-e.minTranslate())/r;const d=Math.abs(t-e.minTranslate())<1,h=Math.abs(t-e.maxTranslate())<1;o=d||i<=0,s=h||i>=1,d&&(i=0),h&&(i=1)}if(n.loop){const d=e.getSlideIndexByData(0),h=e.getSlideIndexByData(e.slides.length-1),p=e.slidesGrid[d],g=e.slidesGrid[h],T=e.slidesGrid[e.slidesGrid.length-1],b=Math.abs(t);b>=p?a=(b-p)/T:a=(b+T-g)/T,a>1&&(a-=1)}Object.assign(e,{progress:i,progressLoop:a,isBeginning:o,isEnd:s}),(n.watchSlidesProgress||n.centeredSlides&&n.autoHeight)&&e.updateSlidesProgress(t),o&&!l&&e.emit("reachBeginning toEdge"),s&&!u&&e.emit("reachEnd toEdge"),(l&&!o||u&&!s)&&e.emit("fromEdge"),e.emit("progress",i)}function vU(){const t=this,{slides:e,params:n,slidesEl:r,activeIndex:i}=t,o=t.virtual&&n.virtual.enabled,s=t.grid&&n.grid&&n.grid.rows>1,a=h=>br(r,`.${n.slideClass}${h}, swiper-slide${h}`)[0];e.forEach(h=>{h.classList.remove(n.slideActiveClass,n.slideNextClass,n.slidePrevClass)});let l,u,d;if(o)if(n.loop){let h=i-t.virtual.slidesBefore;h<0&&(h=t.virtual.slides.length+h),h>=t.virtual.slides.length&&(h-=t.virtual.slides.length),l=a(`[data-swiper-slide-index="${h}"]`)}else l=a(`[data-swiper-slide-index="${i}"]`);else s?(l=e.filter(h=>h.column===i)[0],d=e.filter(h=>h.column===i+1)[0],u=e.filter(h=>h.column===i-1)[0]):l=e[i];l&&(l.classList.add(n.slideActiveClass),s?(d&&d.classList.add(n.slideNextClass),u&&u.classList.add(n.slidePrevClass)):(d=nU(l,`.${n.slideClass}, swiper-slide`)[0],n.loop&&!d&&(d=e[0]),d&&d.classList.add(n.slideNextClass),u=tU(l,`.${n.slideClass}, swiper-slide`)[0],n.loop&&!u===0&&(u=e[e.length-1]),u&&u.classList.add(n.slidePrevClass))),t.emitSlidesClasses()}const Ld=(t,e)=>{if(!t||t.destroyed||!t.params)return;const n=()=>t.isElement?"swiper-slide":`.${t.params.slideClass}`,r=e.closest(n());if(r){let i=r.querySelector(`.${t.params.lazyPreloaderClass}`);!i&&t.isElement&&(r.shadowRoot?i=r.shadowRoot.querySelector(`.${t.params.lazyPreloaderClass}`):requestAnimationFrame(()=>{r.shadowRoot&&(i=r.shadowRoot.querySelector(`.${t.params.lazyPreloaderClass}`),i&&i.remove())})),i&&i.remove()}},Em=(t,e)=>{if(!t.slides[e])return;const n=t.slides[e].querySelector('[loading="lazy"]');n&&n.removeAttribute("loading")},mv=t=>{if(!t||t.destroyed||!t.params)return;let e=t.params.lazyPreloadPrevNext;const n=t.slides.length;if(!n||!e||e<0)return;e=Math.min(e,n);const r=t.params.slidesPerView==="auto"?t.slidesPerViewDynamic():Math.ceil(t.params.slidesPerView),i=t.activeIndex;if(t.params.grid&&t.params.grid.rows>1){const s=i,a=[s-e];a.push(...Array.from({length:e}).map((l,u)=>s+r+u)),t.slides.forEach((l,u)=>{a.includes(l.column)&&Em(t,u)});return}const o=i+r-1;if(t.params.rewind||t.params.loop)for(let s=i-e;s<=o+e;s+=1){const a=(s%n+n)%n;(a<i||a>o)&&Em(t,a)}else for(let s=Math.max(i-e,0);s<=Math.min(o+e,n-1);s+=1)s!==i&&(s>o||s<i)&&Em(t,s)};function yU(t){const{slidesGrid:e,params:n}=t,r=t.rtlTranslate?t.translate:-t.translate;let i;for(let o=0;o<e.length;o+=1)typeof e[o+1]<"u"?r>=e[o]&&r<e[o+1]-(e[o+1]-e[o])/2?i=o:r>=e[o]&&r<e[o+1]&&(i=o+1):r>=e[o]&&(i=o);return n.normalizeSlideIndex&&(i<0||typeof i>"u")&&(i=0),i}function wU(t){const e=this,n=e.rtlTranslate?e.translate:-e.translate,{snapGrid:r,params:i,activeIndex:o,realIndex:s,snapIndex:a}=e;let l=t,u;const d=g=>{let T=g-e.virtual.slidesBefore;return T<0&&(T=e.virtual.slides.length+T),T>=e.virtual.slides.length&&(T-=e.virtual.slides.length),T};if(typeof l>"u"&&(l=yU(e)),r.indexOf(n)>=0)u=r.indexOf(n);else{const g=Math.min(i.slidesPerGroupSkip,l);u=g+Math.floor((l-g)/i.slidesPerGroup)}if(u>=r.length&&(u=r.length-1),l===o&&!e.params.loop){u!==a&&(e.snapIndex=u,e.emit("snapIndexChange"));return}if(l===o&&e.params.loop&&e.virtual&&e.params.virtual.enabled){e.realIndex=d(l);return}const h=e.grid&&i.grid&&i.grid.rows>1;let p;if(e.virtual&&i.virtual.enabled&&i.loop)p=d(l);else if(h){const g=e.slides.filter(b=>b.column===l)[0];let T=parseInt(g.getAttribute("data-swiper-slide-index"),10);Number.isNaN(T)&&(T=Math.max(e.slides.indexOf(g),0)),p=Math.floor(T/i.grid.rows)}else if(e.slides[l]){const g=e.slides[l].getAttribute("data-swiper-slide-index");g?p=parseInt(g,10):p=l}else p=l;Object.assign(e,{previousSnapIndex:a,snapIndex:u,previousRealIndex:s,realIndex:p,previousIndex:o,activeIndex:l}),e.initialized&&mv(e),e.emit("activeIndexChange"),e.emit("snapIndexChange"),(e.initialized||e.params.runCallbacksOnInit)&&(s!==p&&e.emit("realIndexChange"),e.emit("slideChange"))}function _U(t,e){const n=this,r=n.params;let i=t.closest(`.${r.slideClass}, swiper-slide`);!i&&n.isElement&&e&&e.length>1&&e.includes(t)&&[...e.slice(e.indexOf(t)+1,e.length)].forEach(a=>{!i&&a.matches&&a.matches(`.${r.slideClass}, swiper-slide`)&&(i=a)});let o=!1,s;if(i){for(let a=0;a<n.slides.length;a+=1)if(n.slides[a]===i){o=!0,s=a;break}}if(i&&o)n.clickedSlide=i,n.virtual&&n.params.virtual.enabled?n.clickedIndex=parseInt(i.getAttribute("data-swiper-slide-index"),10):n.clickedIndex=s;else{n.clickedSlide=void 0,n.clickedIndex=void 0;return}r.slideToClickedSlide&&n.clickedIndex!==void 0&&n.clickedIndex!==n.activeIndex&&n.slideToClickedSlide()}var EU={updateSize:dU,updateSlides:fU,updateAutoHeight:hU,updateSlidesOffset:pU,updateSlidesProgress:mU,updateProgress:gU,updateSlidesClasses:vU,updateActiveIndex:wU,updateClickedSlide:_U};function xU(t){t===void 0&&(t=this.isHorizontal()?"x":"y");const e=this,{params:n,rtlTranslate:r,translate:i,wrapperEl:o}=e;if(n.virtualTranslate)return r?-i:i;if(n.cssMode)return i;let s=Z9(o,t);return s+=e.cssOverflowAdjustment(),r&&(s=-s),s||0}function TU(t,e){const n=this,{rtlTranslate:r,params:i,wrapperEl:o,progress:s}=n;let a=0,l=0;const u=0;n.isHorizontal()?a=r?-t:t:l=t,i.roundLengths&&(a=Math.floor(a),l=Math.floor(l)),n.previousTranslate=n.translate,n.translate=n.isHorizontal()?a:l,i.cssMode?o[n.isHorizontal()?"scrollLeft":"scrollTop"]=n.isHorizontal()?-a:-l:i.virtualTranslate||(n.isHorizontal()?a-=n.cssOverflowAdjustment():l-=n.cssOverflowAdjustment(),o.style.transform=`translate3d(${a}px, ${l}px, ${u}px)`);let d;const h=n.maxTranslate()-n.minTranslate();h===0?d=0:d=(t-n.minTranslate())/h,d!==s&&n.updateProgress(t),n.emit("setTranslate",n.translate,e)}function bU(){return-this.snapGrid[0]}function SU(){return-this.snapGrid[this.snapGrid.length-1]}function CU(t,e,n,r,i){t===void 0&&(t=0),e===void 0&&(e=this.params.speed),n===void 0&&(n=!0),r===void 0&&(r=!0);const o=this,{params:s,wrapperEl:a}=o;if(o.animating&&s.preventInteractionOnTransition)return!1;const l=o.minTranslate(),u=o.maxTranslate();let d;if(r&&t>l?d=l:r&&t<u?d=u:d=t,o.updateProgress(d),s.cssMode){const h=o.isHorizontal();if(e===0)a[h?"scrollLeft":"scrollTop"]=-d;else{if(!o.support.smoothScroll)return FA({swiper:o,targetPosition:-d,side:h?"left":"top"}),!0;a.scrollTo({[h?"left":"top"]:-d,behavior:"smooth"})}return!0}return e===0?(o.setTransition(0),o.setTranslate(d),n&&(o.emit("beforeTransitionStart",e,i),o.emit("transitionEnd"))):(o.setTransition(e),o.setTranslate(d),n&&(o.emit("beforeTransitionStart",e,i),o.emit("transitionStart")),o.animating||(o.animating=!0,o.onTranslateToWrapperTransitionEnd||(o.onTranslateToWrapperTransitionEnd=function(p){!o||o.destroyed||p.target===this&&(o.wrapperEl.removeEventListener("transitionend",o.onTranslateToWrapperTransitionEnd),o.onTranslateToWrapperTransitionEnd=null,delete o.onTranslateToWrapperTransitionEnd,n&&o.emit("transitionEnd"))}),o.wrapperEl.addEventListener("transitionend",o.onTranslateToWrapperTransitionEnd))),!0}var IU={getTranslate:xU,setTranslate:TU,minTranslate:bU,maxTranslate:SU,translateTo:CU};function AU(t,e){const n=this;n.params.cssMode||(n.wrapperEl.style.transitionDuration=`${t}ms`,n.wrapperEl.style.transitionDelay=t===0?"0ms":""),n.emit("setTransition",t,e)}function UA(t){let{swiper:e,runCallbacks:n,direction:r,step:i}=t;const{activeIndex:o,previousIndex:s}=e;let a=r;if(a||(o>s?a="next":o<s?a="prev":a="reset"),e.emit(`transition${i}`),n&&o!==s){if(a==="reset"){e.emit(`slideResetTransition${i}`);return}e.emit(`slideChangeTransition${i}`),a==="next"?e.emit(`slideNextTransition${i}`):e.emit(`slidePrevTransition${i}`)}}function PU(t,e){t===void 0&&(t=!0);const n=this,{params:r}=n;r.cssMode||(r.autoHeight&&n.updateAutoHeight(),UA({swiper:n,runCallbacks:t,direction:e,step:"Start"}))}function kU(t,e){t===void 0&&(t=!0);const n=this,{params:r}=n;n.animating=!1,!r.cssMode&&(n.setTransition(0),UA({swiper:n,runCallbacks:t,direction:e,step:"End"}))}var RU={setTransition:AU,transitionStart:PU,transitionEnd:kU};function OU(t,e,n,r,i){t===void 0&&(t=0),e===void 0&&(e=this.params.speed),n===void 0&&(n=!0),typeof t=="string"&&(t=parseInt(t,10));const o=this;let s=t;s<0&&(s=0);const{params:a,snapGrid:l,slidesGrid:u,previousIndex:d,activeIndex:h,rtlTranslate:p,wrapperEl:g,enabled:T}=o;if(o.animating&&a.preventInteractionOnTransition||!T&&!r&&!i)return!1;const b=Math.min(o.params.slidesPerGroupSkip,s);let S=b+Math.floor((s-b)/o.params.slidesPerGroup);S>=l.length&&(S=l.length-1);const E=-l[S];if(a.normalizeSlideIndex)for(let v=0;v<u.length;v+=1){const x=-Math.floor(E*100),A=Math.floor(u[v]*100),k=Math.floor(u[v+1]*100);typeof u[v+1]<"u"?x>=A&&x<k-(k-A)/2?s=v:x>=A&&x<k&&(s=v+1):x>=A&&(s=v)}if(o.initialized&&s!==h&&(!o.allowSlideNext&&(p?E>o.translate&&E>o.minTranslate():E<o.translate&&E<o.minTranslate())||!o.allowSlidePrev&&E>o.translate&&E>o.maxTranslate()&&(h||0)!==s))return!1;s!==(d||0)&&n&&o.emit("beforeSlideChangeStart"),o.updateProgress(E);let m;if(s>h?m="next":s<h?m="prev":m="reset",p&&-E===o.translate||!p&&E===o.translate)return o.updateActiveIndex(s),a.autoHeight&&o.updateAutoHeight(),o.updateSlidesClasses(),a.effect!=="slide"&&o.setTranslate(E),m!=="reset"&&(o.transitionStart(n,m),o.transitionEnd(n,m)),!1;if(a.cssMode){const v=o.isHorizontal(),x=p?E:-E;if(e===0){const A=o.virtual&&o.params.virtual.enabled;A&&(o.wrapperEl.style.scrollSnapType="none",o._immediateVirtual=!0),A&&!o._cssModeVirtualInitialSet&&o.params.initialSlide>0?(o._cssModeVirtualInitialSet=!0,requestAnimationFrame(()=>{g[v?"scrollLeft":"scrollTop"]=x})):g[v?"scrollLeft":"scrollTop"]=x,A&&requestAnimationFrame(()=>{o.wrapperEl.style.scrollSnapType="",o._immediateVirtual=!1})}else{if(!o.support.smoothScroll)return FA({swiper:o,targetPosition:x,side:v?"left":"top"}),!0;g.scrollTo({[v?"left":"top"]:x,behavior:"smooth"})}return!0}return o.setTransition(e),o.setTranslate(E),o.updateActiveIndex(s),o.updateSlidesClasses(),o.emit("beforeTransitionStart",e,r),o.transitionStart(n,m),e===0?o.transitionEnd(n,m):o.animating||(o.animating=!0,o.onSlideToWrapperTransitionEnd||(o.onSlideToWrapperTransitionEnd=function(x){!o||o.destroyed||x.target===this&&(o.wrapperEl.removeEventListener("transitionend",o.onSlideToWrapperTransitionEnd),o.onSlideToWrapperTransitionEnd=null,delete o.onSlideToWrapperTransitionEnd,o.transitionEnd(n,m))}),o.wrapperEl.addEventListener("transitionend",o.onSlideToWrapperTransitionEnd)),!0}function DU(t,e,n,r){t===void 0&&(t=0),e===void 0&&(e=this.params.speed),n===void 0&&(n=!0),typeof t=="string"&&(t=parseInt(t,10));const i=this,o=i.grid&&i.params.grid&&i.params.grid.rows>1;let s=t;if(i.params.loop)if(i.virtual&&i.params.virtual.enabled)s=s+i.virtual.slidesBefore;else{let a;if(o){const p=s*i.params.grid.rows;a=i.slides.filter(g=>g.getAttribute("data-swiper-slide-index")*1===p)[0].column}else a=i.getSlideIndexByData(s);const l=o?Math.ceil(i.slides.length/i.params.grid.rows):i.slides.length,{centeredSlides:u}=i.params;let d=i.params.slidesPerView;d==="auto"?d=i.slidesPerViewDynamic():(d=Math.ceil(parseFloat(i.params.slidesPerView,10)),u&&d%2===0&&(d=d+1));let h=l-a<d;if(u&&(h=h||a<Math.ceil(d/2)),h){const p=u?a<i.activeIndex?"prev":"next":a-i.activeIndex-1<i.params.slidesPerView?"next":"prev";i.loopFix({direction:p,slideTo:!0,activeSlideIndex:p==="next"?a+1:a-l+1,slideRealIndex:p==="next"?i.realIndex:void 0})}if(o){const p=s*i.params.grid.rows;s=i.slides.filter(g=>g.getAttribute("data-swiper-slide-index")*1===p)[0].column}else s=i.getSlideIndexByData(s)}return requestAnimationFrame(()=>{i.slideTo(s,e,n,r)}),i}function NU(t,e,n){t===void 0&&(t=this.params.speed),e===void 0&&(e=!0);const r=this,{enabled:i,params:o,animating:s}=r;if(!i)return r;let a=o.slidesPerGroup;o.slidesPerView==="auto"&&o.slidesPerGroup===1&&o.slidesPerGroupAuto&&(a=Math.max(r.slidesPerViewDynamic("current",!0),1));const l=r.activeIndex<o.slidesPerGroupSkip?1:a,u=r.virtual&&o.virtual.enabled;if(o.loop){if(s&&!u&&o.loopPreventsSliding)return!1;if(r.loopFix({direction:"next"}),r._clientLeft=r.wrapperEl.clientLeft,r.activeIndex===r.slides.length-1&&o.cssMode)return requestAnimationFrame(()=>{r.slideTo(r.activeIndex+l,t,e,n)}),!0}return o.rewind&&r.isEnd?r.slideTo(0,t,e,n):r.slideTo(r.activeIndex+l,t,e,n)}function LU(t,e,n){t===void 0&&(t=this.params.speed),e===void 0&&(e=!0);const r=this,{params:i,snapGrid:o,slidesGrid:s,rtlTranslate:a,enabled:l,animating:u}=r;if(!l)return r;const d=r.virtual&&i.virtual.enabled;if(i.loop){if(u&&!d&&i.loopPreventsSliding)return!1;r.loopFix({direction:"prev"}),r._clientLeft=r.wrapperEl.clientLeft}const h=a?r.translate:-r.translate;function p(E){return E<0?-Math.floor(Math.abs(E)):Math.floor(E)}const g=p(h),T=o.map(E=>p(E));let b=o[T.indexOf(g)-1];if(typeof b>"u"&&i.cssMode){let E;o.forEach((m,v)=>{g>=m&&(E=v)}),typeof E<"u"&&(b=o[E>0?E-1:E])}let S=0;if(typeof b<"u"&&(S=s.indexOf(b),S<0&&(S=r.activeIndex-1),i.slidesPerView==="auto"&&i.slidesPerGroup===1&&i.slidesPerGroupAuto&&(S=S-r.slidesPerViewDynamic("previous",!0)+1,S=Math.max(S,0))),i.rewind&&r.isBeginning){const E=r.params.virtual&&r.params.virtual.enabled&&r.virtual?r.virtual.slides.length-1:r.slides.length-1;return r.slideTo(E,t,e,n)}else if(i.loop&&r.activeIndex===0&&i.cssMode)return requestAnimationFrame(()=>{r.slideTo(S,t,e,n)}),!0;return r.slideTo(S,t,e,n)}function MU(t,e,n){t===void 0&&(t=this.params.speed),e===void 0&&(e=!0);const r=this;return r.slideTo(r.activeIndex,t,e,n)}function VU(t,e,n,r){t===void 0&&(t=this.params.speed),e===void 0&&(e=!0),r===void 0&&(r=.5);const i=this;let o=i.activeIndex;const s=Math.min(i.params.slidesPerGroupSkip,o),a=s+Math.floor((o-s)/i.params.slidesPerGroup),l=i.rtlTranslate?i.translate:-i.translate;if(l>=i.snapGrid[a]){const u=i.snapGrid[a],d=i.snapGrid[a+1];l-u>(d-u)*r&&(o+=i.params.slidesPerGroup)}else{const u=i.snapGrid[a-1],d=i.snapGrid[a];l-u<=(d-u)*r&&(o-=i.params.slidesPerGroup)}return o=Math.max(o,0),o=Math.min(o,i.slidesGrid.length-1),i.slideTo(o,t,e,n)}function jU(){const t=this,{params:e,slidesEl:n}=t,r=e.slidesPerView==="auto"?t.slidesPerViewDynamic():e.slidesPerView;let i=t.clickedIndex,o;const s=t.isElement?"swiper-slide":`.${e.slideClass}`;if(e.loop){if(t.animating)return;o=parseInt(t.clickedSlide.getAttribute("data-swiper-slide-index"),10),e.centeredSlides?i<t.loopedSlides-r/2||i>t.slides.length-t.loopedSlides+r/2?(t.loopFix(),i=t.getSlideIndex(br(n,`${s}[data-swiper-slide-index="${o}"]`)[0]),hv(()=>{t.slideTo(i)})):t.slideTo(i):i>t.slides.length-r?(t.loopFix(),i=t.getSlideIndex(br(n,`${s}[data-swiper-slide-index="${o}"]`)[0]),hv(()=>{t.slideTo(i)})):t.slideTo(i)}else t.slideTo(i)}var FU={slideTo:OU,slideToLoop:DU,slideNext:NU,slidePrev:LU,slideReset:MU,slideToClosest:VU,slideToClickedSlide:jU};function $U(t){const e=this,{params:n,slidesEl:r}=e;if(!n.loop||e.virtual&&e.params.virtual.enabled)return;const i=()=>{br(r,`.${n.slideClass}, swiper-slide`).forEach((h,p)=>{h.setAttribute("data-swiper-slide-index",p)})},o=e.grid&&n.grid&&n.grid.rows>1,s=n.slidesPerGroup*(o?n.grid.rows:1),a=e.slides.length%s!==0,l=o&&e.slides.length%n.grid.rows!==0,u=d=>{for(let h=0;h<d;h+=1){const p=e.isElement?Ff("swiper-slide",[n.slideBlankClass]):Ff("div",[n.slideClass,n.slideBlankClass]);e.slidesEl.append(p)}};if(a){if(n.loopAddBlankSlides){const d=s-e.slides.length%s;u(d),e.recalcSlides(),e.updateSlides()}else jf("Swiper Loop Warning: The number of slides is not even to slidesPerGroup, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");i()}else if(l){if(n.loopAddBlankSlides){const d=n.grid.rows-e.slides.length%n.grid.rows;u(d),e.recalcSlides(),e.updateSlides()}else jf("Swiper Loop Warning: The number of slides is not even to grid.rows, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");i()}else i();e.loopFix({slideRealIndex:t,direction:n.centeredSlides?void 0:"next"})}function BU(t){let{slideRealIndex:e,slideTo:n=!0,direction:r,setTranslate:i,activeSlideIndex:o,byController:s,byMousewheel:a}=t===void 0?{}:t;const l=this;if(!l.params.loop)return;l.emit("beforeLoopFix");const{slides:u,allowSlidePrev:d,allowSlideNext:h,slidesEl:p,params:g}=l,{centeredSlides:T}=g;if(l.allowSlidePrev=!0,l.allowSlideNext=!0,l.virtual&&g.virtual.enabled){n&&(!g.centeredSlides&&l.snapIndex===0?l.slideTo(l.virtual.slides.length,0,!1,!0):g.centeredSlides&&l.snapIndex<g.slidesPerView?l.slideTo(l.virtual.slides.length+l.snapIndex,0,!1,!0):l.snapIndex===l.snapGrid.length-1&&l.slideTo(l.virtual.slidesBefore,0,!1,!0)),l.allowSlidePrev=d,l.allowSlideNext=h,l.emit("loopFix");return}let b=g.slidesPerView;b==="auto"?b=l.slidesPerViewDynamic():(b=Math.ceil(parseFloat(g.slidesPerView,10)),T&&b%2===0&&(b=b+1));const S=g.slidesPerGroupAuto?b:g.slidesPerGroup;let E=S;E%S!==0&&(E+=S-E%S),E+=g.loopAdditionalSlides,l.loopedSlides=E;const m=l.grid&&g.grid&&g.grid.rows>1;u.length<b+E?jf("Swiper Loop Warning: The number of slides is not enough for loop mode, it will be disabled and not function properly. You need to add more slides (or make duplicates) or lower the values of slidesPerView and slidesPerGroup parameters"):m&&g.grid.fill==="row"&&jf("Swiper Loop Warning: Loop mode is not compatible with grid.fill = `row`");const v=[],x=[];let A=l.activeIndex;typeof o>"u"?o=l.getSlideIndex(u.filter(U=>U.classList.contains(g.slideActiveClass))[0]):A=o;const k=r==="next"||!r,P=r==="prev"||!r;let R=0,O=0;const D=m?Math.ceil(u.length/g.grid.rows):u.length,B=(m?u[o].column:o)+(T&&typeof i>"u"?-b/2+.5:0);if(B<E){R=Math.max(E-B,S);for(let U=0;U<E-B;U+=1){const V=U-Math.floor(U/D)*D;if(m){const z=D-V-1;for(let Y=u.length-1;Y>=0;Y-=1)u[Y].column===z&&v.push(Y)}else v.push(D-V-1)}}else if(B+b>D-E){O=Math.max(B-(D-E*2),S);for(let U=0;U<O;U+=1){const V=U-Math.floor(U/D)*D;m?u.forEach((z,Y)=>{z.column===V&&x.push(Y)}):x.push(V)}}if(l.__preventObserver__=!0,requestAnimationFrame(()=>{l.__preventObserver__=!1}),P&&v.forEach(U=>{u[U].swiperLoopMoveDOM=!0,p.prepend(u[U]),u[U].swiperLoopMoveDOM=!1}),k&&x.forEach(U=>{u[U].swiperLoopMoveDOM=!0,p.append(u[U]),u[U].swiperLoopMoveDOM=!1}),l.recalcSlides(),g.slidesPerView==="auto"?l.updateSlides():m&&(v.length>0&&P||x.length>0&&k)&&l.slides.forEach((U,V)=>{l.grid.updateSlide(V,U,l.slides)}),g.watchSlidesProgress&&l.updateSlidesOffset(),n){if(v.length>0&&P){if(typeof e>"u"){const U=l.slidesGrid[A],z=l.slidesGrid[A+R]-U;a?l.setTranslate(l.translate-z):(l.slideTo(A+R,0,!1,!0),i&&(l.touchEventsData.startTranslate=l.touchEventsData.startTranslate-z,l.touchEventsData.currentTranslate=l.touchEventsData.currentTranslate-z))}else if(i){const U=m?v.length/g.grid.rows:v.length;l.slideTo(l.activeIndex+U,0,!1,!0),l.touchEventsData.currentTranslate=l.translate}}else if(x.length>0&&k)if(typeof e>"u"){const U=l.slidesGrid[A],z=l.slidesGrid[A-O]-U;a?l.setTranslate(l.translate-z):(l.slideTo(A-O,0,!1,!0),i&&(l.touchEventsData.startTranslate=l.touchEventsData.startTranslate-z,l.touchEventsData.currentTranslate=l.touchEventsData.currentTranslate-z))}else{const U=m?x.length/g.grid.rows:x.length;l.slideTo(l.activeIndex-U,0,!1,!0)}}if(l.allowSlidePrev=d,l.allowSlideNext=h,l.controller&&l.controller.control&&!s){const U={slideRealIndex:e,direction:r,setTranslate:i,activeSlideIndex:o,byController:!0};Array.isArray(l.controller.control)?l.controller.control.forEach(V=>{!V.destroyed&&V.params.loop&&V.loopFix({...U,slideTo:V.params.slidesPerView===g.slidesPerView?n:!1})}):l.controller.control instanceof l.constructor&&l.controller.control.params.loop&&l.controller.control.loopFix({...U,slideTo:l.controller.control.params.slidesPerView===g.slidesPerView?n:!1})}l.emit("loopFix")}function UU(){const t=this,{params:e,slidesEl:n}=t;if(!e.loop||t.virtual&&t.params.virtual.enabled)return;t.recalcSlides();const r=[];t.slides.forEach(i=>{const o=typeof i.swiperSlideIndex>"u"?i.getAttribute("data-swiper-slide-index")*1:i.swiperSlideIndex;r[o]=i}),t.slides.forEach(i=>{i.removeAttribute("data-swiper-slide-index")}),r.forEach(i=>{n.append(i)}),t.recalcSlides(),t.slideTo(t.realIndex,0)}var zU={loopCreate:$U,loopFix:BU,loopDestroy:UU};function HU(t){const e=this;if(!e.params.simulateTouch||e.params.watchOverflow&&e.isLocked||e.params.cssMode)return;const n=e.params.touchEventsTarget==="container"?e.el:e.wrapperEl;e.isElement&&(e.__preventObserver__=!0),n.style.cursor="move",n.style.cursor=t?"grabbing":"grab",e.isElement&&requestAnimationFrame(()=>{e.__preventObserver__=!1})}function WU(){const t=this;t.params.watchOverflow&&t.isLocked||t.params.cssMode||(t.isElement&&(t.__preventObserver__=!0),t[t.params.touchEventsTarget==="container"?"el":"wrapperEl"].style.cursor="",t.isElement&&requestAnimationFrame(()=>{t.__preventObserver__=!1}))}var qU={setGrabCursor:HU,unsetGrabCursor:WU};function GU(t,e){e===void 0&&(e=this);function n(r){if(!r||r===Qa()||r===Pn())return null;r.assignedSlot&&(r=r.assignedSlot);const i=r.closest(t);return!i&&!r.getRootNode?null:i||n(r.getRootNode().host)}return n(e)}function Tx(t,e,n){const r=Pn(),{params:i}=t,o=i.edgeSwipeDetection,s=i.edgeSwipeThreshold;return o&&(n<=s||n>=r.innerWidth-s)?o==="prevent"?(e.preventDefault(),!0):!1:!0}function KU(t){const e=this,n=Qa();let r=t;r.originalEvent&&(r=r.originalEvent);const i=e.touchEventsData;if(r.type==="pointerdown"){if(i.pointerId!==null&&i.pointerId!==r.pointerId)return;i.pointerId=r.pointerId}else r.type==="touchstart"&&r.targetTouches.length===1&&(i.touchId=r.targetTouches[0].identifier);if(r.type==="touchstart"){Tx(e,r,r.targetTouches[0].pageX);return}const{params:o,touches:s,enabled:a}=e;if(!a||!o.simulateTouch&&r.pointerType==="mouse"||e.animating&&o.preventInteractionOnTransition)return;!e.animating&&o.cssMode&&o.loop&&e.loopFix();let l=r.target;if(o.touchEventsTarget==="wrapper"&&!e.wrapperEl.contains(l)||"which"in r&&r.which===3||"button"in r&&r.button>0||i.isTouched&&i.isMoved)return;const u=!!o.noSwipingClass&&o.noSwipingClass!=="",d=r.composedPath?r.composedPath():r.path;u&&r.target&&r.target.shadowRoot&&d&&(l=d[0]);const h=o.noSwipingSelector?o.noSwipingSelector:`.${o.noSwipingClass}`,p=!!(r.target&&r.target.shadowRoot);if(o.noSwiping&&(p?GU(h,l):l.closest(h))){e.allowClick=!0;return}if(o.swipeHandler&&!l.closest(o.swipeHandler))return;s.currentX=r.pageX,s.currentY=r.pageY;const g=s.currentX,T=s.currentY;if(!Tx(e,r,g))return;Object.assign(i,{isTouched:!0,isMoved:!1,allowTouchCallbacks:!0,isScrolling:void 0,startMoving:void 0}),s.startX=g,s.startY=T,i.touchStartTime=Vf(),e.allowClick=!0,e.updateSize(),e.swipeDirection=void 0,o.threshold>0&&(i.allowThresholdMove=!1);let b=!0;l.matches(i.focusableElements)&&(b=!1,l.nodeName==="SELECT"&&(i.isTouched=!1)),n.activeElement&&n.activeElement.matches(i.focusableElements)&&n.activeElement!==l&&n.activeElement.blur();const S=b&&e.allowTouchMove&&o.touchStartPreventDefault;(o.touchStartForcePreventDefault||S)&&!l.isContentEditable&&r.preventDefault(),o.freeMode&&o.freeMode.enabled&&e.freeMode&&e.animating&&!o.cssMode&&e.freeMode.onTouchStart(),e.emit("touchStart",r)}function QU(t){const e=Qa(),n=this,r=n.touchEventsData,{params:i,touches:o,rtlTranslate:s,enabled:a}=n;if(!a||!i.simulateTouch&&t.pointerType==="mouse")return;let l=t;if(l.originalEvent&&(l=l.originalEvent),l.type==="pointermove"&&(r.touchId!==null||l.pointerId!==r.pointerId))return;let u;if(l.type==="touchmove"){if(u=[...l.changedTouches].filter(k=>k.identifier===r.touchId)[0],!u||u.identifier!==r.touchId)return}else u=l;if(!r.isTouched){r.startMoving&&r.isScrolling&&n.emit("touchMoveOpposite",l);return}const d=u.pageX,h=u.pageY;if(l.preventedByNestedSwiper){o.startX=d,o.startY=h;return}if(!n.allowTouchMove){l.target.matches(r.focusableElements)||(n.allowClick=!1),r.isTouched&&(Object.assign(o,{startX:d,startY:h,currentX:d,currentY:h}),r.touchStartTime=Vf());return}if(i.touchReleaseOnEdges&&!i.loop){if(n.isVertical()){if(h<o.startY&&n.translate<=n.maxTranslate()||h>o.startY&&n.translate>=n.minTranslate()){r.isTouched=!1,r.isMoved=!1;return}}else if(d<o.startX&&n.translate<=n.maxTranslate()||d>o.startX&&n.translate>=n.minTranslate())return}if(e.activeElement&&l.target===e.activeElement&&l.target.matches(r.focusableElements)){r.isMoved=!0,n.allowClick=!1;return}r.allowTouchCallbacks&&n.emit("touchMove",l),o.previousX=o.currentX,o.previousY=o.currentY,o.currentX=d,o.currentY=h;const p=o.currentX-o.startX,g=o.currentY-o.startY;if(n.params.threshold&&Math.sqrt(p**2+g**2)<n.params.threshold)return;if(typeof r.isScrolling>"u"){let k;n.isHorizontal()&&o.currentY===o.startY||n.isVertical()&&o.currentX===o.startX?r.isScrolling=!1:p*p+g*g>=25&&(k=Math.atan2(Math.abs(g),Math.abs(p))*180/Math.PI,r.isScrolling=n.isHorizontal()?k>i.touchAngle:90-k>i.touchAngle)}if(r.isScrolling&&n.emit("touchMoveOpposite",l),typeof r.startMoving>"u"&&(o.currentX!==o.startX||o.currentY!==o.startY)&&(r.startMoving=!0),r.isScrolling){r.isTouched=!1;return}if(!r.startMoving)return;n.allowClick=!1,!i.cssMode&&l.cancelable&&l.preventDefault(),i.touchMoveStopPropagation&&!i.nested&&l.stopPropagation();let T=n.isHorizontal()?p:g,b=n.isHorizontal()?o.currentX-o.previousX:o.currentY-o.previousY;i.oneWayMovement&&(T=Math.abs(T)*(s?1:-1),b=Math.abs(b)*(s?1:-1)),o.diff=T,T*=i.touchRatio,s&&(T=-T,b=-b);const S=n.touchesDirection;n.swipeDirection=T>0?"prev":"next",n.touchesDirection=b>0?"prev":"next";const E=n.params.loop&&!i.cssMode,m=n.touchesDirection==="next"&&n.allowSlideNext||n.touchesDirection==="prev"&&n.allowSlidePrev;if(!r.isMoved){if(E&&m&&n.loopFix({direction:n.swipeDirection}),r.startTranslate=n.getTranslate(),n.setTransition(0),n.animating){const k=new window.CustomEvent("transitionend",{bubbles:!0,cancelable:!0});n.wrapperEl.dispatchEvent(k)}r.allowMomentumBounce=!1,i.grabCursor&&(n.allowSlideNext===!0||n.allowSlidePrev===!0)&&n.setGrabCursor(!0),n.emit("sliderFirstMove",l)}let v;if(new Date().getTime(),r.isMoved&&r.allowThresholdMove&&S!==n.touchesDirection&&E&&m&&Math.abs(T)>=1){Object.assign(o,{startX:d,startY:h,currentX:d,currentY:h,startTranslate:r.currentTranslate}),r.loopSwapReset=!0,r.startTranslate=r.currentTranslate;return}n.emit("sliderMove",l),r.isMoved=!0,r.currentTranslate=T+r.startTranslate;let x=!0,A=i.resistanceRatio;if(i.touchReleaseOnEdges&&(A=0),T>0?(E&&m&&!v&&r.allowThresholdMove&&r.currentTranslate>(i.centeredSlides?n.minTranslate()-n.slidesSizesGrid[n.activeIndex+1]:n.minTranslate())&&n.loopFix({direction:"prev",setTranslate:!0,activeSlideIndex:0}),r.currentTranslate>n.minTranslate()&&(x=!1,i.resistance&&(r.currentTranslate=n.minTranslate()-1+(-n.minTranslate()+r.startTranslate+T)**A))):T<0&&(E&&m&&!v&&r.allowThresholdMove&&r.currentTranslate<(i.centeredSlides?n.maxTranslate()+n.slidesSizesGrid[n.slidesSizesGrid.length-1]:n.maxTranslate())&&n.loopFix({direction:"next",setTranslate:!0,activeSlideIndex:n.slides.length-(i.slidesPerView==="auto"?n.slidesPerViewDynamic():Math.ceil(parseFloat(i.slidesPerView,10)))}),r.currentTranslate<n.maxTranslate()&&(x=!1,i.resistance&&(r.currentTranslate=n.maxTranslate()+1-(n.maxTranslate()-r.startTranslate-T)**A))),x&&(l.preventedByNestedSwiper=!0),!n.allowSlideNext&&n.swipeDirection==="next"&&r.currentTranslate<r.startTranslate&&(r.currentTranslate=r.startTranslate),!n.allowSlidePrev&&n.swipeDirection==="prev"&&r.currentTranslate>r.startTranslate&&(r.currentTranslate=r.startTranslate),!n.allowSlidePrev&&!n.allowSlideNext&&(r.currentTranslate=r.startTranslate),i.threshold>0)if(Math.abs(T)>i.threshold||r.allowThresholdMove){if(!r.allowThresholdMove){r.allowThresholdMove=!0,o.startX=o.currentX,o.startY=o.currentY,r.currentTranslate=r.startTranslate,o.diff=n.isHorizontal()?o.currentX-o.startX:o.currentY-o.startY;return}}else{r.currentTranslate=r.startTranslate;return}!i.followFinger||i.cssMode||((i.freeMode&&i.freeMode.enabled&&n.freeMode||i.watchSlidesProgress)&&(n.updateActiveIndex(),n.updateSlidesClasses()),i.freeMode&&i.freeMode.enabled&&n.freeMode&&n.freeMode.onTouchMove(),n.updateProgress(r.currentTranslate),n.setTranslate(r.currentTranslate))}function YU(t){const e=this,n=e.touchEventsData;let r=t;r.originalEvent&&(r=r.originalEvent);let i;if(r.type==="touchend"||r.type==="touchcancel"){if(i=[...r.changedTouches].filter(x=>x.identifier===n.touchId)[0],!i||i.identifier!==n.touchId)return}else{if(n.touchId!==null||r.pointerId!==n.pointerId)return;i=r}if(["pointercancel","pointerout","pointerleave","contextmenu"].includes(r.type)&&!(["pointercancel","contextmenu"].includes(r.type)&&(e.browser.isSafari||e.browser.isWebView)))return;n.pointerId=null,n.touchId=null;const{params:s,touches:a,rtlTranslate:l,slidesGrid:u,enabled:d}=e;if(!d||!s.simulateTouch&&r.pointerType==="mouse")return;if(n.allowTouchCallbacks&&e.emit("touchEnd",r),n.allowTouchCallbacks=!1,!n.isTouched){n.isMoved&&s.grabCursor&&e.setGrabCursor(!1),n.isMoved=!1,n.startMoving=!1;return}s.grabCursor&&n.isMoved&&n.isTouched&&(e.allowSlideNext===!0||e.allowSlidePrev===!0)&&e.setGrabCursor(!1);const h=Vf(),p=h-n.touchStartTime;if(e.allowClick){const x=r.path||r.composedPath&&r.composedPath();e.updateClickedSlide(x&&x[0]||r.target,x),e.emit("tap click",r),p<300&&h-n.lastClickTime<300&&e.emit("doubleTap doubleClick",r)}if(n.lastClickTime=Vf(),hv(()=>{e.destroyed||(e.allowClick=!0)}),!n.isTouched||!n.isMoved||!e.swipeDirection||a.diff===0&&!n.loopSwapReset||n.currentTranslate===n.startTranslate&&!n.loopSwapReset){n.isTouched=!1,n.isMoved=!1,n.startMoving=!1;return}n.isTouched=!1,n.isMoved=!1,n.startMoving=!1;let g;if(s.followFinger?g=l?e.translate:-e.translate:g=-n.currentTranslate,s.cssMode)return;if(s.freeMode&&s.freeMode.enabled){e.freeMode.onTouchEnd({currentPos:g});return}let T=0,b=e.slidesSizesGrid[0];for(let x=0;x<u.length;x+=x<s.slidesPerGroupSkip?1:s.slidesPerGroup){const A=x<s.slidesPerGroupSkip-1?1:s.slidesPerGroup;typeof u[x+A]<"u"?g>=u[x]&&g<u[x+A]&&(T=x,b=u[x+A]-u[x]):g>=u[x]&&(T=x,b=u[u.length-1]-u[u.length-2])}let S=null,E=null;s.rewind&&(e.isBeginning?E=s.virtual&&s.virtual.enabled&&e.virtual?e.virtual.slides.length-1:e.slides.length-1:e.isEnd&&(S=0));const m=(g-u[T])/b,v=T<s.slidesPerGroupSkip-1?1:s.slidesPerGroup;if(p>s.longSwipesMs){if(!s.longSwipes){e.slideTo(e.activeIndex);return}e.swipeDirection==="next"&&(m>=s.longSwipesRatio?e.slideTo(s.rewind&&e.isEnd?S:T+v):e.slideTo(T)),e.swipeDirection==="prev"&&(m>1-s.longSwipesRatio?e.slideTo(T+v):E!==null&&m<0&&Math.abs(m)>s.longSwipesRatio?e.slideTo(E):e.slideTo(T))}else{if(!s.shortSwipes){e.slideTo(e.activeIndex);return}e.navigation&&(r.target===e.navigation.nextEl||r.target===e.navigation.prevEl)?r.target===e.navigation.nextEl?e.slideTo(T+v):e.slideTo(T):(e.swipeDirection==="next"&&e.slideTo(S!==null?S:T+v),e.swipeDirection==="prev"&&e.slideTo(E!==null?E:T))}}function bx(){const t=this,{params:e,el:n}=t;if(n&&n.offsetWidth===0)return;e.breakpoints&&t.setBreakpoint();const{allowSlideNext:r,allowSlidePrev:i,snapGrid:o}=t,s=t.virtual&&t.params.virtual.enabled;t.allowSlideNext=!0,t.allowSlidePrev=!0,t.updateSize(),t.updateSlides(),t.updateSlidesClasses();const a=s&&e.loop;(e.slidesPerView==="auto"||e.slidesPerView>1)&&t.isEnd&&!t.isBeginning&&!t.params.centeredSlides&&!a?t.slideTo(t.slides.length-1,0,!1,!0):t.params.loop&&!s?t.slideToLoop(t.realIndex,0,!1,!0):t.slideTo(t.activeIndex,0,!1,!0),t.autoplay&&t.autoplay.running&&t.autoplay.paused&&(clearTimeout(t.autoplay.resizeTimeout),t.autoplay.resizeTimeout=setTimeout(()=>{t.autoplay&&t.autoplay.running&&t.autoplay.paused&&t.autoplay.resume()},500)),t.allowSlidePrev=i,t.allowSlideNext=r,t.params.watchOverflow&&o!==t.snapGrid&&t.checkOverflow()}function XU(t){const e=this;e.enabled&&(e.allowClick||(e.params.preventClicks&&t.preventDefault(),e.params.preventClicksPropagation&&e.animating&&(t.stopPropagation(),t.stopImmediatePropagation())))}function JU(){const t=this,{wrapperEl:e,rtlTranslate:n,enabled:r}=t;if(!r)return;t.previousTranslate=t.translate,t.isHorizontal()?t.translate=-e.scrollLeft:t.translate=-e.scrollTop,t.translate===0&&(t.translate=0),t.updateActiveIndex(),t.updateSlidesClasses();let i;const o=t.maxTranslate()-t.minTranslate();o===0?i=0:i=(t.translate-t.minTranslate())/o,i!==t.progress&&t.updateProgress(n?-t.translate:t.translate),t.emit("setTranslate",t.translate,!1)}function ZU(t){const e=this;Ld(e,t.target),!(e.params.cssMode||e.params.slidesPerView!=="auto"&&!e.params.autoHeight)&&e.update()}function ez(){const t=this;t.documentTouchHandlerProceeded||(t.documentTouchHandlerProceeded=!0,t.params.touchReleaseOnEdges&&(t.el.style.touchAction="auto"))}const zA=(t,e)=>{const n=Qa(),{params:r,el:i,wrapperEl:o,device:s}=t,a=!!r.nested,l=e==="on"?"addEventListener":"removeEventListener",u=e;n[l]("touchstart",t.onDocumentTouchStart,{passive:!1,capture:a}),i[l]("touchstart",t.onTouchStart,{passive:!1}),i[l]("pointerdown",t.onTouchStart,{passive:!1}),n[l]("touchmove",t.onTouchMove,{passive:!1,capture:a}),n[l]("pointermove",t.onTouchMove,{passive:!1,capture:a}),n[l]("touchend",t.onTouchEnd,{passive:!0}),n[l]("pointerup",t.onTouchEnd,{passive:!0}),n[l]("pointercancel",t.onTouchEnd,{passive:!0}),n[l]("touchcancel",t.onTouchEnd,{passive:!0}),n[l]("pointerout",t.onTouchEnd,{passive:!0}),n[l]("pointerleave",t.onTouchEnd,{passive:!0}),n[l]("contextmenu",t.onTouchEnd,{passive:!0}),(r.preventClicks||r.preventClicksPropagation)&&i[l]("click",t.onClick,!0),r.cssMode&&o[l]("scroll",t.onScroll),r.updateOnWindowResize?t[u](s.ios||s.android?"resize orientationchange observerUpdate":"resize observerUpdate",bx,!0):t[u]("observerUpdate",bx,!0),i[l]("load",t.onLoad,{capture:!0})};function tz(){const t=this,{params:e}=t;t.onTouchStart=KU.bind(t),t.onTouchMove=QU.bind(t),t.onTouchEnd=YU.bind(t),t.onDocumentTouchStart=ez.bind(t),e.cssMode&&(t.onScroll=JU.bind(t)),t.onClick=XU.bind(t),t.onLoad=ZU.bind(t),zA(t,"on")}function nz(){zA(this,"off")}var rz={attachEvents:tz,detachEvents:nz};const Sx=(t,e)=>t.grid&&e.grid&&e.grid.rows>1;function iz(){const t=this,{realIndex:e,initialized:n,params:r,el:i}=t,o=r.breakpoints;if(!o||o&&Object.keys(o).length===0)return;const s=t.getBreakpoint(o,t.params.breakpointsBase,t.el);if(!s||t.currentBreakpoint===s)return;const l=(s in o?o[s]:void 0)||t.originalParams,u=Sx(t,r),d=Sx(t,l),h=r.enabled;u&&!d?(i.classList.remove(`${r.containerModifierClass}grid`,`${r.containerModifierClass}grid-column`),t.emitContainerClasses()):!u&&d&&(i.classList.add(`${r.containerModifierClass}grid`),(l.grid.fill&&l.grid.fill==="column"||!l.grid.fill&&r.grid.fill==="column")&&i.classList.add(`${r.containerModifierClass}grid-column`),t.emitContainerClasses()),["navigation","pagination","scrollbar"].forEach(E=>{if(typeof l[E]>"u")return;const m=r[E]&&r[E].enabled,v=l[E]&&l[E].enabled;m&&!v&&t[E].disable(),!m&&v&&t[E].enable()});const p=l.direction&&l.direction!==r.direction,g=r.loop&&(l.slidesPerView!==r.slidesPerView||p),T=r.loop;p&&n&&t.changeDirection(),En(t.params,l);const b=t.params.enabled,S=t.params.loop;Object.assign(t,{allowTouchMove:t.params.allowTouchMove,allowSlideNext:t.params.allowSlideNext,allowSlidePrev:t.params.allowSlidePrev}),h&&!b?t.disable():!h&&b&&t.enable(),t.currentBreakpoint=s,t.emit("_beforeBreakpoint",l),n&&(g?(t.loopDestroy(),t.loopCreate(e),t.updateSlides()):!T&&S?(t.loopCreate(e),t.updateSlides()):T&&!S&&t.loopDestroy()),t.emit("breakpoint",l)}function oz(t,e,n){if(e===void 0&&(e="window"),!t||e==="container"&&!n)return;let r=!1;const i=Pn(),o=e==="window"?i.innerHeight:n.clientHeight,s=Object.keys(t).map(a=>{if(typeof a=="string"&&a.indexOf("@")===0){const l=parseFloat(a.substr(1));return{value:o*l,point:a}}return{value:a,point:a}});s.sort((a,l)=>parseInt(a.value,10)-parseInt(l.value,10));for(let a=0;a<s.length;a+=1){const{point:l,value:u}=s[a];e==="window"?i.matchMedia(`(min-width: ${u}px)`).matches&&(r=l):u<=n.clientWidth&&(r=l)}return r||"max"}var sz={setBreakpoint:iz,getBreakpoint:oz};function az(t,e){const n=[];return t.forEach(r=>{typeof r=="object"?Object.keys(r).forEach(i=>{r[i]&&n.push(e+i)}):typeof r=="string"&&n.push(e+r)}),n}function lz(){const t=this,{classNames:e,params:n,rtl:r,el:i,device:o}=t,s=az(["initialized",n.direction,{"free-mode":t.params.freeMode&&n.freeMode.enabled},{autoheight:n.autoHeight},{rtl:r},{grid:n.grid&&n.grid.rows>1},{"grid-column":n.grid&&n.grid.rows>1&&n.grid.fill==="column"},{android:o.android},{ios:o.ios},{"css-mode":n.cssMode},{centered:n.cssMode&&n.centeredSlides},{"watch-progress":n.watchSlidesProgress}],n.containerModifierClass);e.push(...s),i.classList.add(...e),t.emitContainerClasses()}function uz(){const t=this,{el:e,classNames:n}=t;e.classList.remove(...n),t.emitContainerClasses()}var cz={addClasses:lz,removeClasses:uz};function dz(){const t=this,{isLocked:e,params:n}=t,{slidesOffsetBefore:r}=n;if(r){const i=t.slides.length-1,o=t.slidesGrid[i]+t.slidesSizesGrid[i]+r*2;t.isLocked=t.size>o}else t.isLocked=t.snapGrid.length===1;n.allowSlideNext===!0&&(t.allowSlideNext=!t.isLocked),n.allowSlidePrev===!0&&(t.allowSlidePrev=!t.isLocked),e&&e!==t.isLocked&&(t.isEnd=!1),e!==t.isLocked&&t.emit(t.isLocked?"lock":"unlock")}var fz={checkOverflow:dz},gv={init:!0,direction:"horizontal",oneWayMovement:!1,touchEventsTarget:"wrapper",initialSlide:0,speed:300,cssMode:!1,updateOnWindowResize:!0,resizeObserver:!0,nested:!1,createElements:!1,eventsPrefix:"swiper",enabled:!0,focusableElements:"input, select, option, textarea, button, video, label",width:null,height:null,preventInteractionOnTransition:!1,userAgent:null,url:null,edgeSwipeDetection:!1,edgeSwipeThreshold:20,autoHeight:!1,setWrapperSize:!1,virtualTranslate:!1,effect:"slide",breakpoints:void 0,breakpointsBase:"window",spaceBetween:0,slidesPerView:1,slidesPerGroup:1,slidesPerGroupSkip:0,slidesPerGroupAuto:!1,centeredSlides:!1,centeredSlidesBounds:!1,slidesOffsetBefore:0,slidesOffsetAfter:0,normalizeSlideIndex:!0,centerInsufficientSlides:!1,watchOverflow:!0,roundLengths:!1,touchRatio:1,touchAngle:45,simulateTouch:!0,shortSwipes:!0,longSwipes:!0,longSwipesRatio:.5,longSwipesMs:300,followFinger:!0,allowTouchMove:!0,threshold:5,touchMoveStopPropagation:!1,touchStartPreventDefault:!0,touchStartForcePreventDefault:!1,touchReleaseOnEdges:!1,uniqueNavElements:!0,resistance:!0,resistanceRatio:.85,watchSlidesProgress:!1,grabCursor:!1,preventClicks:!0,preventClicksPropagation:!0,slideToClickedSlide:!1,loop:!1,loopAddBlankSlides:!0,loopAdditionalSlides:0,loopPreventsSliding:!0,rewind:!1,allowSlidePrev:!0,allowSlideNext:!0,swipeHandler:null,noSwiping:!0,noSwipingClass:"swiper-no-swiping",noSwipingSelector:null,passiveListeners:!0,maxBackfaceHiddenSlides:10,containerModifierClass:"swiper-",slideClass:"swiper-slide",slideBlankClass:"swiper-slide-blank",slideActiveClass:"swiper-slide-active",slideVisibleClass:"swiper-slide-visible",slideFullyVisibleClass:"swiper-slide-fully-visible",slideNextClass:"swiper-slide-next",slidePrevClass:"swiper-slide-prev",wrapperClass:"swiper-wrapper",lazyPreloaderClass:"swiper-lazy-preloader",lazyPreloadPrevNext:0,runCallbacksOnInit:!0,_emitClasses:!1};function hz(t,e){return function(r){r===void 0&&(r={});const i=Object.keys(r)[0],o=r[i];if(typeof o!="object"||o===null){En(e,r);return}if(t[i]===!0&&(t[i]={enabled:!0}),i==="navigation"&&t[i]&&t[i].enabled&&!t[i].prevEl&&!t[i].nextEl&&(t[i].auto=!0),["pagination","scrollbar"].indexOf(i)>=0&&t[i]&&t[i].enabled&&!t[i].el&&(t[i].auto=!0),!(i in t&&"enabled"in o)){En(e,r);return}typeof t[i]=="object"&&!("enabled"in t[i])&&(t[i].enabled=!0),t[i]||(t[i]={enabled:!1}),En(e,r)}}const xm={eventsEmitter:cU,update:EU,translate:IU,transition:RU,slide:FU,loop:zU,grabCursor:qU,events:rz,breakpoints:sz,checkOverflow:fz,classes:cz},Tm={};let lw=class zr{constructor(){let e,n;for(var r=arguments.length,i=new Array(r),o=0;o<r;o++)i[o]=arguments[o];i.length===1&&i[0].constructor&&Object.prototype.toString.call(i[0]).slice(8,-1)==="Object"?n=i[0]:[e,n]=i,n||(n={}),n=En({},n),e&&!n.el&&(n.el=e);const s=Qa();if(n.el&&typeof n.el=="string"&&s.querySelectorAll(n.el).length>1){const d=[];return s.querySelectorAll(n.el).forEach(h=>{const p=En({},n,{el:h});d.push(new zr(p))}),d}const a=this;a.__swiper__=!0,a.support=BA(),a.device=oU({userAgent:n.userAgent}),a.browser=aU(),a.eventsListeners={},a.eventsAnyListeners=[],a.modules=[...a.__modules__],n.modules&&Array.isArray(n.modules)&&a.modules.push(...n.modules);const l={};a.modules.forEach(d=>{d({params:n,swiper:a,extendParams:hz(n,l),on:a.on.bind(a),once:a.once.bind(a),off:a.off.bind(a),emit:a.emit.bind(a)})});const u=En({},gv,l);return a.params=En({},u,Tm,n),a.originalParams=En({},a.params),a.passedParams=En({},n),a.params&&a.params.on&&Object.keys(a.params.on).forEach(d=>{a.on(d,a.params.on[d])}),a.params&&a.params.onAny&&a.onAny(a.params.onAny),Object.assign(a,{enabled:a.params.enabled,el:e,classNames:[],slides:[],slidesGrid:[],snapGrid:[],slidesSizesGrid:[],isHorizontal(){return a.params.direction==="horizontal"},isVertical(){return a.params.direction==="vertical"},activeIndex:0,realIndex:0,isBeginning:!0,isEnd:!1,translate:0,previousTranslate:0,progress:0,velocity:0,animating:!1,cssOverflowAdjustment(){return Math.trunc(this.translate/2**23)*2**23},allowSlideNext:a.params.allowSlideNext,allowSlidePrev:a.params.allowSlidePrev,touchEventsData:{isTouched:void 0,isMoved:void 0,allowTouchCallbacks:void 0,touchStartTime:void 0,isScrolling:void 0,currentTranslate:void 0,startTranslate:void 0,allowThresholdMove:void 0,focusableElements:a.params.focusableElements,lastClickTime:0,clickTimeout:void 0,velocities:[],allowMomentumBounce:void 0,startMoving:void 0,pointerId:null,touchId:null},allowClick:!0,allowTouchMove:a.params.allowTouchMove,touches:{startX:0,startY:0,currentX:0,currentY:0,diff:0},imagesToLoad:[],imagesLoaded:0}),a.emit("_swiper"),a.params.init&&a.init(),a}getDirectionLabel(e){return this.isHorizontal()?e:{width:"height","margin-top":"margin-left","margin-bottom ":"margin-right","margin-left":"margin-top","margin-right":"margin-bottom","padding-left":"padding-top","padding-right":"padding-bottom",marginRight:"marginBottom"}[e]}getSlideIndex(e){const{slidesEl:n,params:r}=this,i=br(n,`.${r.slideClass}, swiper-slide`),o=$f(i[0]);return $f(e)-o}getSlideIndexByData(e){return this.getSlideIndex(this.slides.filter(n=>n.getAttribute("data-swiper-slide-index")*1===e)[0])}recalcSlides(){const e=this,{slidesEl:n,params:r}=e;e.slides=br(n,`.${r.slideClass}, swiper-slide`)}enable(){const e=this;e.enabled||(e.enabled=!0,e.params.grabCursor&&e.setGrabCursor(),e.emit("enable"))}disable(){const e=this;e.enabled&&(e.enabled=!1,e.params.grabCursor&&e.unsetGrabCursor(),e.emit("disable"))}setProgress(e,n){const r=this;e=Math.min(Math.max(e,0),1);const i=r.minTranslate(),s=(r.maxTranslate()-i)*e+i;r.translateTo(s,typeof n>"u"?0:n),r.updateActiveIndex(),r.updateSlidesClasses()}emitContainerClasses(){const e=this;if(!e.params._emitClasses||!e.el)return;const n=e.el.className.split(" ").filter(r=>r.indexOf("swiper")===0||r.indexOf(e.params.containerModifierClass)===0);e.emit("_containerClasses",n.join(" "))}getSlideClasses(e){const n=this;return n.destroyed?"":e.className.split(" ").filter(r=>r.indexOf("swiper-slide")===0||r.indexOf(n.params.slideClass)===0).join(" ")}emitSlidesClasses(){const e=this;if(!e.params._emitClasses||!e.el)return;const n=[];e.slides.forEach(r=>{const i=e.getSlideClasses(r);n.push({slideEl:r,classNames:i}),e.emit("_slideClass",r,i)}),e.emit("_slideClasses",n)}slidesPerViewDynamic(e,n){e===void 0&&(e="current"),n===void 0&&(n=!1);const r=this,{params:i,slides:o,slidesGrid:s,slidesSizesGrid:a,size:l,activeIndex:u}=r;let d=1;if(typeof i.slidesPerView=="number")return i.slidesPerView;if(i.centeredSlides){let h=o[u]?o[u].swiperSlideSize:0,p;for(let g=u+1;g<o.length;g+=1)o[g]&&!p&&(h+=o[g].swiperSlideSize,d+=1,h>l&&(p=!0));for(let g=u-1;g>=0;g-=1)o[g]&&!p&&(h+=o[g].swiperSlideSize,d+=1,h>l&&(p=!0))}else if(e==="current")for(let h=u+1;h<o.length;h+=1)(n?s[h]+a[h]-s[u]<l:s[h]-s[u]<l)&&(d+=1);else for(let h=u-1;h>=0;h-=1)s[u]-s[h]<l&&(d+=1);return d}update(){const e=this;if(!e||e.destroyed)return;const{snapGrid:n,params:r}=e;r.breakpoints&&e.setBreakpoint(),[...e.el.querySelectorAll('[loading="lazy"]')].forEach(s=>{s.complete&&Ld(e,s)}),e.updateSize(),e.updateSlides(),e.updateProgress(),e.updateSlidesClasses();function i(){const s=e.rtlTranslate?e.translate*-1:e.translate,a=Math.min(Math.max(s,e.maxTranslate()),e.minTranslate());e.setTranslate(a),e.updateActiveIndex(),e.updateSlidesClasses()}let o;if(r.freeMode&&r.freeMode.enabled&&!r.cssMode)i(),r.autoHeight&&e.updateAutoHeight();else{if((r.slidesPerView==="auto"||r.slidesPerView>1)&&e.isEnd&&!r.centeredSlides){const s=e.virtual&&r.virtual.enabled?e.virtual.slides:e.slides;o=e.slideTo(s.length-1,0,!1,!0)}else o=e.slideTo(e.activeIndex,0,!1,!0);o||i()}r.watchOverflow&&n!==e.snapGrid&&e.checkOverflow(),e.emit("update")}changeDirection(e,n){n===void 0&&(n=!0);const r=this,i=r.params.direction;return e||(e=i==="horizontal"?"vertical":"horizontal"),e===i||e!=="horizontal"&&e!=="vertical"||(r.el.classList.remove(`${r.params.containerModifierClass}${i}`),r.el.classList.add(`${r.params.containerModifierClass}${e}`),r.emitContainerClasses(),r.params.direction=e,r.slides.forEach(o=>{e==="vertical"?o.style.width="":o.style.height=""}),r.emit("changeDirection"),n&&r.update()),r}changeLanguageDirection(e){const n=this;n.rtl&&e==="rtl"||!n.rtl&&e==="ltr"||(n.rtl=e==="rtl",n.rtlTranslate=n.params.direction==="horizontal"&&n.rtl,n.rtl?(n.el.classList.add(`${n.params.containerModifierClass}rtl`),n.el.dir="rtl"):(n.el.classList.remove(`${n.params.containerModifierClass}rtl`),n.el.dir="ltr"),n.update())}mount(e){const n=this;if(n.mounted)return!0;let r=e||n.params.el;if(typeof r=="string"&&(r=document.querySelector(r)),!r)return!1;r.swiper=n,r.parentNode&&r.parentNode.host&&r.parentNode.host.nodeName==="SWIPER-CONTAINER"&&(n.isElement=!0);const i=()=>`.${(n.params.wrapperClass||"").trim().split(" ").join(".")}`;let s=(()=>r&&r.shadowRoot&&r.shadowRoot.querySelector?r.shadowRoot.querySelector(i()):br(r,i())[0])();return!s&&n.params.createElements&&(s=Ff("div",n.params.wrapperClass),r.append(s),br(r,`.${n.params.slideClass}`).forEach(a=>{s.append(a)})),Object.assign(n,{el:r,wrapperEl:s,slidesEl:n.isElement&&!r.parentNode.host.slideSlots?r.parentNode.host:s,hostEl:n.isElement?r.parentNode.host:r,mounted:!0,rtl:r.dir.toLowerCase()==="rtl"||Di(r,"direction")==="rtl",rtlTranslate:n.params.direction==="horizontal"&&(r.dir.toLowerCase()==="rtl"||Di(r,"direction")==="rtl"),wrongRTL:Di(s,"display")==="-webkit-box"}),!0}init(e){const n=this;if(n.initialized||n.mount(e)===!1)return n;n.emit("beforeInit"),n.params.breakpoints&&n.setBreakpoint(),n.addClasses(),n.updateSize(),n.updateSlides(),n.params.watchOverflow&&n.checkOverflow(),n.params.grabCursor&&n.enabled&&n.setGrabCursor(),n.params.loop&&n.virtual&&n.params.virtual.enabled?n.slideTo(n.params.initialSlide+n.virtual.slidesBefore,0,n.params.runCallbacksOnInit,!1,!0):n.slideTo(n.params.initialSlide,0,n.params.runCallbacksOnInit,!1,!0),n.params.loop&&n.loopCreate(),n.attachEvents();const i=[...n.el.querySelectorAll('[loading="lazy"]')];return n.isElement&&i.push(...n.hostEl.querySelectorAll('[loading="lazy"]')),i.forEach(o=>{o.complete?Ld(n,o):o.addEventListener("load",s=>{Ld(n,s.target)})}),mv(n),n.initialized=!0,mv(n),n.emit("init"),n.emit("afterInit"),n}destroy(e,n){e===void 0&&(e=!0),n===void 0&&(n=!0);const r=this,{params:i,el:o,wrapperEl:s,slides:a}=r;return typeof r.params>"u"||r.destroyed||(r.emit("beforeDestroy"),r.initialized=!1,r.detachEvents(),i.loop&&r.loopDestroy(),n&&(r.removeClasses(),o.removeAttribute("style"),s.removeAttribute("style"),a&&a.length&&a.forEach(l=>{l.classList.remove(i.slideVisibleClass,i.slideFullyVisibleClass,i.slideActiveClass,i.slideNextClass,i.slidePrevClass),l.removeAttribute("style"),l.removeAttribute("data-swiper-slide-index")})),r.emit("destroy"),Object.keys(r.eventsListeners).forEach(l=>{r.off(l)}),e!==!1&&(r.el.swiper=null,X9(r)),r.destroyed=!0),null}static extendDefaults(e){En(Tm,e)}static get extendedDefaults(){return Tm}static get defaults(){return gv}static installModule(e){zr.prototype.__modules__||(zr.prototype.__modules__=[]);const n=zr.prototype.__modules__;typeof e=="function"&&n.indexOf(e)<0&&n.push(e)}static use(e){return Array.isArray(e)?(e.forEach(n=>zr.installModule(n)),zr):(zr.installModule(e),zr)}};Object.keys(xm).forEach(t=>{Object.keys(xm[t]).forEach(e=>{lw.prototype[e]=xm[t][e]})});lw.use([lU,uU]);const HA=["eventsPrefix","injectStyles","injectStylesUrls","modules","init","_direction","oneWayMovement","touchEventsTarget","initialSlide","_speed","cssMode","updateOnWindowResize","resizeObserver","nested","focusableElements","_enabled","_width","_height","preventInteractionOnTransition","userAgent","url","_edgeSwipeDetection","_edgeSwipeThreshold","_freeMode","_autoHeight","setWrapperSize","virtualTranslate","_effect","breakpoints","breakpointsBase","_spaceBetween","_slidesPerView","maxBackfaceHiddenSlides","_grid","_slidesPerGroup","_slidesPerGroupSkip","_slidesPerGroupAuto","_centeredSlides","_centeredSlidesBounds","_slidesOffsetBefore","_slidesOffsetAfter","normalizeSlideIndex","_centerInsufficientSlides","_watchOverflow","roundLengths","touchRatio","touchAngle","simulateTouch","_shortSwipes","_longSwipes","longSwipesRatio","longSwipesMs","_followFinger","allowTouchMove","_threshold","touchMoveStopPropagation","touchStartPreventDefault","touchStartForcePreventDefault","touchReleaseOnEdges","uniqueNavElements","_resistance","_resistanceRatio","_watchSlidesProgress","_grabCursor","preventClicks","preventClicksPropagation","_slideToClickedSlide","_loop","loopAdditionalSlides","loopAddBlankSlides","loopPreventsSliding","_rewind","_allowSlidePrev","_allowSlideNext","_swipeHandler","_noSwiping","noSwipingClass","noSwipingSelector","passiveListeners","containerModifierClass","slideClass","slideActiveClass","slideVisibleClass","slideFullyVisibleClass","slideNextClass","slidePrevClass","slideBlankClass","wrapperClass","lazyPreloaderClass","lazyPreloadPrevNext","runCallbacksOnInit","observer","observeParents","observeSlideChildren","a11y","_autoplay","_controller","coverflowEffect","cubeEffect","fadeEffect","flipEffect","creativeEffect","cardsEffect","hashNavigation","history","keyboard","mousewheel","_navigation","_pagination","parallax","_scrollbar","_thumbs","virtual","zoom","control"];function ns(t){return typeof t=="object"&&t!==null&&t.constructor&&Object.prototype.toString.call(t).slice(8,-1)==="Object"&&!t.__swiper__}function oa(t,e){const n=["__proto__","constructor","prototype"];Object.keys(e).filter(r=>n.indexOf(r)<0).forEach(r=>{typeof t[r]>"u"?t[r]=e[r]:ns(e[r])&&ns(t[r])&&Object.keys(e[r]).length>0?e[r].__swiper__?t[r]=e[r]:oa(t[r],e[r]):t[r]=e[r]})}function WA(t){return t===void 0&&(t={}),t.navigation&&typeof t.navigation.nextEl>"u"&&typeof t.navigation.prevEl>"u"}function qA(t){return t===void 0&&(t={}),t.pagination&&typeof t.pagination.el>"u"}function GA(t){return t===void 0&&(t={}),t.scrollbar&&typeof t.scrollbar.el>"u"}function KA(t){t===void 0&&(t="");const e=t.split(" ").map(r=>r.trim()).filter(r=>!!r),n=[];return e.forEach(r=>{n.indexOf(r)<0&&n.push(r)}),n.join(" ")}function pz(t){return t===void 0&&(t=""),t?t.includes("swiper-wrapper")?t:`swiper-wrapper ${t}`:"swiper-wrapper"}function mz(t){let{swiper:e,slides:n,passedParams:r,changedParams:i,nextEl:o,prevEl:s,scrollbarEl:a,paginationEl:l}=t;const u=i.filter(O=>O!=="children"&&O!=="direction"&&O!=="wrapperClass"),{params:d,pagination:h,navigation:p,scrollbar:g,virtual:T,thumbs:b}=e;let S,E,m,v,x,A,k,P;i.includes("thumbs")&&r.thumbs&&r.thumbs.swiper&&d.thumbs&&!d.thumbs.swiper&&(S=!0),i.includes("controller")&&r.controller&&r.controller.control&&d.controller&&!d.controller.control&&(E=!0),i.includes("pagination")&&r.pagination&&(r.pagination.el||l)&&(d.pagination||d.pagination===!1)&&h&&!h.el&&(m=!0),i.includes("scrollbar")&&r.scrollbar&&(r.scrollbar.el||a)&&(d.scrollbar||d.scrollbar===!1)&&g&&!g.el&&(v=!0),i.includes("navigation")&&r.navigation&&(r.navigation.prevEl||s)&&(r.navigation.nextEl||o)&&(d.navigation||d.navigation===!1)&&p&&!p.prevEl&&!p.nextEl&&(x=!0);const R=O=>{e[O]&&(e[O].destroy(),O==="navigation"?(e.isElement&&(e[O].prevEl.remove(),e[O].nextEl.remove()),d[O].prevEl=void 0,d[O].nextEl=void 0,e[O].prevEl=void 0,e[O].nextEl=void 0):(e.isElement&&e[O].el.remove(),d[O].el=void 0,e[O].el=void 0))};i.includes("loop")&&e.isElement&&(d.loop&&!r.loop?A=!0:!d.loop&&r.loop?k=!0:P=!0),u.forEach(O=>{if(ns(d[O])&&ns(r[O]))Object.assign(d[O],r[O]),(O==="navigation"||O==="pagination"||O==="scrollbar")&&"enabled"in r[O]&&!r[O].enabled&&R(O);else{const D=r[O];(D===!0||D===!1)&&(O==="navigation"||O==="pagination"||O==="scrollbar")?D===!1&&R(O):d[O]=r[O]}}),u.includes("controller")&&!E&&e.controller&&e.controller.control&&d.controller&&d.controller.control&&(e.controller.control=d.controller.control),i.includes("children")&&n&&T&&d.virtual.enabled?(T.slides=n,T.update(!0)):i.includes("virtual")&&T&&d.virtual.enabled&&(n&&(T.slides=n),T.update(!0)),i.includes("children")&&n&&d.loop&&(P=!0),S&&b.init()&&b.update(!0),E&&(e.controller.control=d.controller.control),m&&(e.isElement&&(!l||typeof l=="string")&&(l=document.createElement("div"),l.classList.add("swiper-pagination"),l.part.add("pagination"),e.el.appendChild(l)),l&&(d.pagination.el=l),h.init(),h.render(),h.update()),v&&(e.isElement&&(!a||typeof a=="string")&&(a=document.createElement("div"),a.classList.add("swiper-scrollbar"),a.part.add("scrollbar"),e.el.appendChild(a)),a&&(d.scrollbar.el=a),g.init(),g.updateSize(),g.setTranslate()),x&&(e.isElement&&((!o||typeof o=="string")&&(o=document.createElement("div"),o.classList.add("swiper-button-next"),o.innerHTML=e.hostEl.constructor.nextButtonSvg,o.part.add("button-next"),e.el.appendChild(o)),(!s||typeof s=="string")&&(s=document.createElement("div"),s.classList.add("swiper-button-prev"),s.innerHTML=e.hostEl.constructor.prevButtonSvg,s.part.add("button-prev"),e.el.appendChild(s))),o&&(d.navigation.nextEl=o),s&&(d.navigation.prevEl=s),p.init(),p.update()),i.includes("allowSlideNext")&&(e.allowSlideNext=r.allowSlideNext),i.includes("allowSlidePrev")&&(e.allowSlidePrev=r.allowSlidePrev),i.includes("direction")&&e.changeDirection(r.direction,!1),(A||P)&&e.loopDestroy(),(k||P)&&e.loopCreate(),e.update()}function gz(t,e){t===void 0&&(t={}),e===void 0&&(e=!0);const n={on:{}},r={},i={};oa(n,gv),n._emitClasses=!0,n.init=!1;const o={},s=HA.map(l=>l.replace(/_/,"")),a=Object.assign({},t);return Object.keys(a).forEach(l=>{typeof t[l]>"u"||(s.indexOf(l)>=0?ns(t[l])?(n[l]={},i[l]={},oa(n[l],t[l]),oa(i[l],t[l])):(n[l]=t[l],i[l]=t[l]):l.search(/on[A-Z]/)===0&&typeof t[l]=="function"?e?r[`${l[2].toLowerCase()}${l.substr(3)}`]=t[l]:n.on[`${l[2].toLowerCase()}${l.substr(3)}`]=t[l]:o[l]=t[l])}),["navigation","pagination","scrollbar"].forEach(l=>{n[l]===!0&&(n[l]={}),n[l]===!1&&delete n[l]}),{params:n,passedParams:i,rest:o,events:r}}function vz(t,e){let{el:n,nextEl:r,prevEl:i,paginationEl:o,scrollbarEl:s,swiper:a}=t;WA(e)&&r&&i&&(a.params.navigation.nextEl=r,a.originalParams.navigation.nextEl=r,a.params.navigation.prevEl=i,a.originalParams.navigation.prevEl=i),qA(e)&&o&&(a.params.pagination.el=o,a.originalParams.pagination.el=o),GA(e)&&s&&(a.params.scrollbar.el=s,a.originalParams.scrollbar.el=s),a.init(n)}function yz(t,e,n,r,i){const o=[];if(!e)return o;const s=l=>{o.indexOf(l)<0&&o.push(l)};if(n&&r){const l=r.map(i),u=n.map(i);l.join("")!==u.join("")&&s("children"),r.length!==n.length&&s("children")}return HA.filter(l=>l[0]==="_").map(l=>l.replace(/_/,"")).forEach(l=>{if(l in t&&l in e)if(ns(t[l])&&ns(e[l])){const u=Object.keys(t[l]),d=Object.keys(e[l]);u.length!==d.length?s(l):(u.forEach(h=>{t[l][h]!==e[l][h]&&s(l)}),d.forEach(h=>{t[l][h]!==e[l][h]&&s(l)}))}else t[l]!==e[l]&&s(l)}),o}const wz=t=>{!t||t.destroyed||!t.params.virtual||t.params.virtual&&!t.params.virtual.enabled||(t.updateSlides(),t.updateProgress(),t.updateSlidesClasses(),t.parallax&&t.params.parallax&&t.params.parallax.enabled&&t.parallax.setTranslate())};function Bf(){return Bf=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Bf.apply(this,arguments)}function QA(t){return t.type&&t.type.displayName&&t.type.displayName.includes("SwiperSlide")}function YA(t){const e=[];return G.Children.toArray(t).forEach(n=>{QA(n)?e.push(n):n.props&&n.props.children&&YA(n.props.children).forEach(r=>e.push(r))}),e}function _z(t){const e=[],n={"container-start":[],"container-end":[],"wrapper-start":[],"wrapper-end":[]};return G.Children.toArray(t).forEach(r=>{if(QA(r))e.push(r);else if(r.props&&r.props.slot&&n[r.props.slot])n[r.props.slot].push(r);else if(r.props&&r.props.children){const i=YA(r.props.children);i.length>0?i.forEach(o=>e.push(o)):n["container-end"].push(r)}else n["container-end"].push(r)}),{slides:e,slots:n}}function Ez(t,e,n){if(!n)return null;const r=d=>{let h=d;return d<0?h=e.length+d:h>=e.length&&(h=h-e.length),h},i=t.isHorizontal()?{[t.rtlTranslate?"right":"left"]:`${n.offset}px`}:{top:`${n.offset}px`},{from:o,to:s}=n,a=t.params.loop?-e.length:0,l=t.params.loop?e.length*2:e.length,u=[];for(let d=a;d<l;d+=1)d>=o&&d<=s&&u.push(e[r(d)]);return u.map((d,h)=>G.cloneElement(d,{swiper:t,style:i,key:`slide-${h}`}))}function Kl(t,e){return typeof window>"u"?C.useEffect(t,e):C.useLayoutEffect(t,e)}const Cx=C.createContext(null),xz=C.createContext(null),uw=C.forwardRef(function(t,e){let{className:n,tag:r="div",wrapperTag:i="div",children:o,onSwiper:s,...a}=t===void 0?{}:t,l=!1;const[u,d]=C.useState("swiper"),[h,p]=C.useState(null),[g,T]=C.useState(!1),b=C.useRef(!1),S=C.useRef(null),E=C.useRef(null),m=C.useRef(null),v=C.useRef(null),x=C.useRef(null),A=C.useRef(null),k=C.useRef(null),P=C.useRef(null),{params:R,passedParams:O,rest:D,events:q}=gz(a),{slides:B,slots:U}=_z(o),V=()=>{T(!g)};Object.assign(R.on,{_containerClasses(W,$){d($)}});const z=()=>{Object.assign(R.on,q),l=!0;const W={...R};if(delete W.wrapperClass,E.current=new lw(W),E.current.virtual&&E.current.params.virtual.enabled){E.current.virtual.slides=B;const $={cache:!1,slides:B,renderExternal:p,renderExternalUpdate:!1};oa(E.current.params.virtual,$),oa(E.current.originalParams.virtual,$)}};S.current||z(),E.current&&E.current.on("_beforeBreakpoint",V);const Y=()=>{l||!q||!E.current||Object.keys(q).forEach(W=>{E.current.on(W,q[W])})},N=()=>{!q||!E.current||Object.keys(q).forEach(W=>{E.current.off(W,q[W])})};C.useEffect(()=>()=>{E.current&&E.current.off("_beforeBreakpoint",V)}),C.useEffect(()=>{!b.current&&E.current&&(E.current.emitSlidesClasses(),b.current=!0)}),Kl(()=>{if(e&&(e.current=S.current),!!S.current)return E.current.destroyed&&z(),vz({el:S.current,nextEl:x.current,prevEl:A.current,paginationEl:k.current,scrollbarEl:P.current,swiper:E.current},R),s&&s(E.current),()=>{E.current&&!E.current.destroyed&&E.current.destroy(!0,!1)}},[]),Kl(()=>{Y();const W=yz(O,m.current,B,v.current,$=>$.key);return m.current=O,v.current=B,W.length&&E.current&&!E.current.destroyed&&mz({swiper:E.current,slides:B,passedParams:O,changedParams:W,nextEl:x.current,prevEl:A.current,scrollbarEl:P.current,paginationEl:k.current}),()=>{N()}}),Kl(()=>{wz(E.current)},[h]);function M(){return R.virtual?Ez(E.current,B,h):B.map((W,$)=>G.cloneElement(W,{swiper:E.current,swiperSlideIndex:$}))}return G.createElement(r,Bf({ref:S,className:KA(`${u}${n?` ${n}`:""}`)},D),G.createElement(xz.Provider,{value:E.current},U["container-start"],G.createElement(i,{className:pz(R.wrapperClass)},U["wrapper-start"],M(),U["wrapper-end"]),WA(R)&&G.createElement(G.Fragment,null,G.createElement("div",{ref:A,className:"swiper-button-prev"}),G.createElement("div",{ref:x,className:"swiper-button-next"})),GA(R)&&G.createElement("div",{ref:P,className:"swiper-scrollbar"}),qA(R)&&G.createElement("div",{ref:k,className:"swiper-pagination"}),U["container-end"]))});uw.displayName="Swiper";const cw=C.forwardRef(function(t,e){let{tag:n="div",children:r,className:i="",swiper:o,zoom:s,lazy:a,virtualIndex:l,swiperSlideIndex:u,...d}=t===void 0?{}:t;const h=C.useRef(null),[p,g]=C.useState("swiper-slide"),[T,b]=C.useState(!1);function S(x,A,k){A===h.current&&g(k)}Kl(()=>{if(typeof u<"u"&&(h.current.swiperSlideIndex=u),e&&(e.current=h.current),!(!h.current||!o)){if(o.destroyed){p!=="swiper-slide"&&g("swiper-slide");return}return o.on("_slideClass",S),()=>{o&&o.off("_slideClass",S)}}}),Kl(()=>{o&&h.current&&!o.destroyed&&g(o.getSlideClasses(h.current))},[o]);const E={isActive:p.indexOf("swiper-slide-active")>=0,isVisible:p.indexOf("swiper-slide-visible")>=0,isPrev:p.indexOf("swiper-slide-prev")>=0,isNext:p.indexOf("swiper-slide-next")>=0},m=()=>typeof r=="function"?r(E):r,v=()=>{b(!0)};return G.createElement(n,Bf({ref:h,className:KA(`${p}${i?` ${i}`:""}`),"data-swiper-slide-index":l,onLoad:v},d),s&&G.createElement(Cx.Provider,{value:E},G.createElement("div",{className:"swiper-zoom-container","data-swiper-zoom":typeof s=="number"?s:void 0},m(),a&&!T&&G.createElement("div",{className:"swiper-lazy-preloader"}))),!s&&G.createElement(Cx.Provider,{value:E},m(),a&&!T&&G.createElement("div",{className:"swiper-lazy-preloader"})))});cw.displayName="SwiperSlide";const Tz=NM`
  0% { transform: translateX(-2px); }
  25% { transform: translateX(2px); }
  50% { transform: translateX(-2px); }
  75% { transform: translateX(2px); }
  100% { transform: translateX(-2px); }
`,bz=j.div`
  height: 310px;
  width: 450px;
  background-color: rgba(225, 225, 225, 0.7);
  border-radius: 8px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  box-shadow: 0px 4px 4px 0px rgba(180, 180, 180, 0.62);
  padding: 16px;
  box-sizing: border-box;
  transition: all ease-in-out 0.2s;

  &:hover {
    border: 1px solid rgba(255, 255, 255, 0.6);
    transform: scale(1.02);
  }

  @media (max-width: 500px) {
    width: 90%;
  }
`,Sz=j.div`
  width: 100%;
  height: 200px;

  @media (max-width: 600px) {
    height: 150px;
  }
`,Cz=j.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`,Iz=j.p`
  font-size: 24px;
  font-weight: bold;
  margin: 0;
  padding: 0;
  margin-bottom: 10px;
  color: white;

  @media (max-width: 600px) {
    font-size: 18px;
  }
`,Az=j.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 20px;
  color: brown;
  font-weight: bold;
  margin: 12px 0;

  span {
    font-size: 14px;
    text-decoration: underline;
    color: black;
    font-weight: normal;
    margin-right: 10px;
  }
  @media (max-width: 600px) {
    flex-direction: column;
  }
`,Pz=j(Ht)`
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  color: white;
  font-weight: 500;
  background-color: #999;
  font-size: 16px;
  width: 100px;
  height: 28px;
  border-radius: 8px;

  &:hover {
    background-color: white;
    color: black;
  }

  @media (max-width: 600px) {
    width: 100%;
    margin-top: 16px;
  }
`,kz=j.div`
  width: 18px;
  height: 18px;
  transition: transform 0.2s ease-in-out;
  cursor: pointer;

  svg {
    width: 100%;
    height: auto;
  }

  &:hover {
    animation: ${Tz} 0.2s ease-in-out;
  }
`,Rz=j.div`
  cursor: pointer;
  &:hover{
    svg{
      transform: scale(1.2);
      fill: green;
    }
  }
`;var XA={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(t){(function(){var e={}.hasOwnProperty;function n(){for(var r=[],i=0;i<arguments.length;i++){var o=arguments[i];if(o){var s=typeof o;if(s==="string"||s==="number")r.push(o);else if(Array.isArray(o)){if(o.length){var a=n.apply(null,o);a&&r.push(a)}}else if(s==="object"){if(o.toString!==Object.prototype.toString&&!o.toString.toString().includes("[native code]")){r.push(o.toString());continue}for(var l in o)e.call(o,l)&&o[l]&&r.push(l)}}}return r.join(" ")}t.exports?(n.default=n,t.exports=n):window.classNames=n})()})(XA);var Oz=XA.exports;const Pl=Ia(Oz);function Dz(t){if(Array.isArray(t)){for(var e=0,n=Array(t.length);e<t.length;e++)n[e]=t[e];return n}else return Array.from(t)}var dw=!1;if(typeof window<"u"){var Ix={get passive(){dw=!0}};window.addEventListener("testPassive",null,Ix),window.removeEventListener("testPassive",null,Ix)}var JA=typeof window<"u"&&window.navigator&&window.navigator.platform&&(/iP(ad|hone|od)/.test(window.navigator.platform)||window.navigator.platform==="MacIntel"&&window.navigator.maxTouchPoints>1),Ni=[],Uf=!1,ZA=-1,Ql=void 0,Yl=void 0,eP=function(e){return Ni.some(function(n){return!!(n.options.allowTouchMove&&n.options.allowTouchMove(e))})},zf=function(e){var n=e||window.event;return eP(n.target)||n.touches.length>1?!0:(n.preventDefault&&n.preventDefault(),!1)},Nz=function(e){if(Yl===void 0){var n=!!e&&e.reserveScrollBarGap===!0,r=window.innerWidth-document.documentElement.clientWidth;n&&r>0&&(Yl=document.body.style.paddingRight,document.body.style.paddingRight=r+"px")}Ql===void 0&&(Ql=document.body.style.overflow,document.body.style.overflow="hidden")},Lz=function(){Yl!==void 0&&(document.body.style.paddingRight=Yl,Yl=void 0),Ql!==void 0&&(document.body.style.overflow=Ql,Ql=void 0)},Mz=function(e){return e?e.scrollHeight-e.scrollTop<=e.clientHeight:!1},Vz=function(e,n){var r=e.targetTouches[0].clientY-ZA;return eP(e.target)?!1:n&&n.scrollTop===0&&r>0||Mz(n)&&r<0?zf(e):(e.stopPropagation(),!0)},jz=function(e,n){if(!e){console.error("disableBodyScroll unsuccessful - targetElement must be provided when calling disableBodyScroll on IOS devices.");return}if(!Ni.some(function(i){return i.targetElement===e})){var r={targetElement:e,options:n||{}};Ni=[].concat(Dz(Ni),[r]),JA?(e.ontouchstart=function(i){i.targetTouches.length===1&&(ZA=i.targetTouches[0].clientY)},e.ontouchmove=function(i){i.targetTouches.length===1&&Vz(i,e)},Uf||(document.addEventListener("touchmove",zf,dw?{passive:!1}:void 0),Uf=!0)):Nz(n)}},Fz=function(e){if(!e){console.error("enableBodyScroll unsuccessful - targetElement must be provided when calling enableBodyScroll on IOS devices.");return}Ni=Ni.filter(function(n){return n.targetElement!==e}),JA?(e.ontouchstart=null,e.ontouchmove=null,Uf&&Ni.length===0&&(document.removeEventListener("touchmove",zf,dw?{passive:!1}:void 0),Uf=!1)):Ni.length||Lz()};function $z(t=null){let[e,n]=G.useState(t);const{current:r}=G.useRef({current:e});return Object.defineProperty(r,"current",{get:()=>e,set:i=>{Object.is(e,i)||(e=i,n(i))}}),r}function Bz(t,e={isStateful:!0}){const n=$z(null),r=C.useRef(null),i=e.isStateful?n:r;return G.useEffect(()=>{!t||(typeof t=="function"?t(i.current):t.current=i.current)}),i}function Hf(){return Hf=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Hf.apply(this,arguments)}var Uz=function(e){var n=e.classes,r=e.classNames,i=e.styles,o=e.id,s=e.closeIcon,a=e.onClick;return G.createElement("button",{id:o,className:Pl(n.closeButton,r==null?void 0:r.closeButton),style:i==null?void 0:i.closeButton,onClick:a,"data-testid":"close-button"},s||G.createElement("svg",{className:r==null?void 0:r.closeIcon,style:i==null?void 0:i.closeIcon,width:28,height:28,viewBox:"0 0 36 36","data-testid":"close-icon"},G.createElement("path",{d:"M28.5 9.62L26.38 7.5 18 15.88 9.62 7.5 7.5 9.62 15.88 18 7.5 26.38l2.12 2.12L18 20.12l8.38 8.38 2.12-2.12L20.12 18z"})))},Md=typeof window<"u",tP=["input","select","textarea","a[href]","button","[tabindex]","audio[controls]","video[controls]",'[contenteditable]:not([contenteditable="false"])'];function zz(t){return t.offsetParent===null||getComputedStyle(t).visibility==="hidden"}function Hz(t,e){for(var n=0;n<t.length;n++)if(t[n].checked&&t[n].form===e)return t[n]}function Wz(t){if(t.tagName!=="INPUT"||t.type!=="radio"||!t.name)return!0;var e=t.form||t.ownerDocument,n=e.querySelectorAll('input[type="radio"][name="'+t.name+'"]'),r=Hz(n,t.form);return r===t||r===void 0&&n[0]===t}function nP(t){for(var e=document.activeElement,n=t.querySelectorAll(tP.join(",")),r=[],i=0;i<n.length;i++){var o=n[i];(e===o||!o.disabled&&Gz(o)>-1&&!zz(o)&&Wz(o))&&r.push(o)}return r}function qz(t,e){if(!(!t||t.key!=="Tab")){if(!e||!e.contains)return process,!1;if(!e.contains(t.target))return!1;var n=nP(e),r=n[0],i=n[n.length-1];return t.shiftKey&&t.target===r?(i.focus(),t.preventDefault(),!0):!t.shiftKey&&t.target===i?(r.focus(),t.preventDefault(),!0):!1}}function Gz(t){var e=parseInt(t.getAttribute("tabindex"),10);return isNaN(e)?Kz(t)?0:t.tabIndex:e}function Kz(t){return t.getAttribute("contentEditable")}var Qz=function(e){var n=e.container,r=e.initialFocusRef,i=C.useRef();return C.useEffect(function(){var o=function(u){n!=null&&n.current&&qz(u,n.current)};if(Md&&document.addEventListener("keydown",o),Md&&(n!=null&&n.current)){var s=function(){tP.findIndex(function(u){var d;return(d=document.activeElement)==null?void 0:d.matches(u)})!==-1&&(i.current=document.activeElement)};if(r)s(),requestAnimationFrame(function(){var l;(l=r.current)==null||l.focus()});else{var a=nP(n.current);a[0]&&(s(),a[0].focus())}}return function(){if(Md){var l;document.removeEventListener("keydown",o),(l=i.current)==null||l.focus()}}},[n,r]),null},Ss=[],vv={add:function(e){Ss.push(e)},remove:function(e){Ss=Ss.filter(function(n){return n!==e})},isTopModal:function(e){return!!Ss.length&&Ss[Ss.length-1]===e}};function Yz(t,e){C.useEffect(function(){return e&&vv.add(t),function(){vv.remove(t)}},[e,t])}var Xz=function(e,n,r,i,o){var s=C.useRef(null);C.useEffect(function(){return n&&e.current&&i&&(s.current=e.current,jz(e.current,{reserveScrollBarGap:o})),function(){s.current&&(Fz(s.current),s.current=null)}},[n,r,e,i,o])},mr={root:"react-responsive-modal-root",overlay:"react-responsive-modal-overlay",overlayAnimationIn:"react-responsive-modal-overlay-in",overlayAnimationOut:"react-responsive-modal-overlay-out",modalContainer:"react-responsive-modal-container",modalContainerCenter:"react-responsive-modal-containerCenter",modal:"react-responsive-modal-modal",modalAnimationIn:"react-responsive-modal-modal-in",modalAnimationOut:"react-responsive-modal-modal-out",closeButton:"react-responsive-modal-closeButton"},Jz=G.forwardRef(function(t,e){var n,r,i,o,s=t.open,a=t.center,l=t.blockScroll,u=l===void 0?!0:l,d=t.closeOnEsc,h=d===void 0?!0:d,p=t.closeOnOverlayClick,g=p===void 0?!0:p,T=t.container,b=t.showCloseIcon,S=b===void 0?!0:b,E=t.closeIconId,m=t.closeIcon,v=t.focusTrapped,x=v===void 0?!0:v,A=t.initialFocusRef,k=A===void 0?void 0:A,P=t.animationDuration,R=P===void 0?300:P,O=t.classNames,D=t.styles,q=t.role,B=q===void 0?"dialog":q,U=t.ariaDescribedby,V=t.ariaLabelledby,z=t.containerId,Y=t.modalId,N=t.onClose,M=t.onEscKeyDown,W=t.onOverlayClick,$=t.onAnimationEnd,ie=t.children,he=t.reserveScrollBarGap,Oe=Bz(e),Te=C.useRef(null),L=C.useRef(null),ye=C.useRef(null);ye.current===null&&Md&&(ye.current=document.createElement("div"));var Me=C.useState(!1),Yt=Me[0],an=Me[1];Yz(Te,s),Xz(Te,s,Yt,u,he);var Ce=function(){ye.current&&!T&&!document.body.contains(ye.current)&&document.body.appendChild(ye.current),document.addEventListener("keydown",kn)},ln=function(){ye.current&&!T&&document.body.contains(ye.current)&&document.body.removeChild(ye.current),document.removeEventListener("keydown",kn)},kn=function(Xt){Xt.keyCode!==27||!vv.isTopModal(Te)||(M==null||M(Xt),h&&N())};C.useEffect(function(){return function(){Yt&&ln()}},[Yt]),C.useEffect(function(){s&&!Yt&&(an(!0),Ce())},[s]);var hs=function(Xt){if(L.current===null&&(L.current=!0),!L.current){L.current=null;return}W==null||W(Xt),g&&N(),L.current=null},fi=function(){L.current=!1},Lr=function(){s||an(!1),$==null||$()},Mr=T||ye.current,un=s?(n=O==null?void 0:O.overlayAnimationIn)!=null?n:mr.overlayAnimationIn:(r=O==null?void 0:O.overlayAnimationOut)!=null?r:mr.overlayAnimationOut,Vr=s?(i=O==null?void 0:O.modalAnimationIn)!=null?i:mr.modalAnimationIn:(o=O==null?void 0:O.modalAnimationOut)!=null?o:mr.modalAnimationOut;return Yt&&Mr?ON.createPortal(G.createElement("div",{className:Pl(mr.root,O==null?void 0:O.root),style:D==null?void 0:D.root,"data-testid":"root"},G.createElement("div",{className:Pl(mr.overlay,O==null?void 0:O.overlay),"data-testid":"overlay","aria-hidden":!0,style:Hf({animation:un+" "+R+"ms"},D==null?void 0:D.overlay)}),G.createElement("div",{ref:Te,id:z,className:Pl(mr.modalContainer,a&&mr.modalContainerCenter,O==null?void 0:O.modalContainer),style:D==null?void 0:D.modalContainer,"data-testid":"modal-container",onClick:hs},G.createElement("div",{ref:Oe,className:Pl(mr.modal,O==null?void 0:O.modal),style:Hf({animation:Vr+" "+R+"ms"},D==null?void 0:D.modal),onMouseDown:fi,onMouseUp:fi,onClick:fi,onAnimationEnd:Lr,id:Y,role:B,"aria-modal":"true","aria-labelledby":V,"aria-describedby":U,"data-testid":"modal",tabIndex:-1},x&&G.createElement(Qz,{container:Oe,initialFocusRef:k}),ie,S&&G.createElement(Uz,{classes:mr,classNames:O,styles:D,closeIcon:m,onClick:N,id:E})))),Mr):null});function Zz(t){return zn({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M378 324a69.78 69.78 0 00-48.83 19.91L202 272.41a69.68 69.68 0 000-32.82l127.13-71.5A69.76 69.76 0 10308.87 129l-130.13 73.2a70 70 0 100 107.56L308.87 383A70 70 0 10378 324z"}}]})(t)}function rP(t,e,n,r){return t.params.createElements&&Object.keys(r).forEach(i=>{if(!n[i]&&n.auto===!0){let o=br(t.el,`.${r[i]}`)[0];o||(o=Ff("div",r[i]),o.className=r[i],t.el.append(o)),n[i]=o,e[i]=o}}),n}function iP(t){let{swiper:e,extendParams:n,on:r,emit:i}=t;n({navigation:{nextEl:null,prevEl:null,hideOnClick:!1,disabledClass:"swiper-button-disabled",hiddenClass:"swiper-button-hidden",lockClass:"swiper-button-lock",navigationDisabledClass:"swiper-navigation-disabled"}}),e.navigation={nextEl:null,prevEl:null};const o=b=>(Array.isArray(b)?b:[b]).filter(S=>!!S);function s(b){let S;return b&&typeof b=="string"&&e.isElement&&(S=e.el.querySelector(b),S)?S:(b&&(typeof b=="string"&&(S=[...document.querySelectorAll(b)]),e.params.uniqueNavElements&&typeof b=="string"&&S.length>1&&e.el.querySelectorAll(b).length===1&&(S=e.el.querySelector(b))),b&&!S?b:S)}function a(b,S){const E=e.params.navigation;b=o(b),b.forEach(m=>{m&&(m.classList[S?"add":"remove"](...E.disabledClass.split(" ")),m.tagName==="BUTTON"&&(m.disabled=S),e.params.watchOverflow&&e.enabled&&m.classList[e.isLocked?"add":"remove"](E.lockClass))})}function l(){const{nextEl:b,prevEl:S}=e.navigation;if(e.params.loop){a(S,!1),a(b,!1);return}a(S,e.isBeginning&&!e.params.rewind),a(b,e.isEnd&&!e.params.rewind)}function u(b){b.preventDefault(),!(e.isBeginning&&!e.params.loop&&!e.params.rewind)&&(e.slidePrev(),i("navigationPrev"))}function d(b){b.preventDefault(),!(e.isEnd&&!e.params.loop&&!e.params.rewind)&&(e.slideNext(),i("navigationNext"))}function h(){const b=e.params.navigation;if(e.params.navigation=rP(e,e.originalParams.navigation,e.params.navigation,{nextEl:"swiper-button-next",prevEl:"swiper-button-prev"}),!(b.nextEl||b.prevEl))return;let S=s(b.nextEl),E=s(b.prevEl);Object.assign(e.navigation,{nextEl:S,prevEl:E}),S=o(S),E=o(E);const m=(v,x)=>{v&&v.addEventListener("click",x==="next"?d:u),!e.enabled&&v&&v.classList.add(...b.lockClass.split(" "))};S.forEach(v=>m(v,"next")),E.forEach(v=>m(v,"prev"))}function p(){let{nextEl:b,prevEl:S}=e.navigation;b=o(b),S=o(S);const E=(m,v)=>{m.removeEventListener("click",v==="next"?d:u),m.classList.remove(...e.params.navigation.disabledClass.split(" "))};b.forEach(m=>E(m,"next")),S.forEach(m=>E(m,"prev"))}r("init",()=>{e.params.navigation.enabled===!1?T():(h(),l())}),r("toEdge fromEdge lock unlock",()=>{l()}),r("destroy",()=>{p()}),r("enable disable",()=>{let{nextEl:b,prevEl:S}=e.navigation;if(b=o(b),S=o(S),e.enabled){l();return}[...b,...S].filter(E=>!!E).forEach(E=>E.classList.add(e.params.navigation.lockClass))}),r("click",(b,S)=>{let{nextEl:E,prevEl:m}=e.navigation;E=o(E),m=o(m);const v=S.target;if(e.params.navigation.hideOnClick&&!m.includes(v)&&!E.includes(v)){if(e.pagination&&e.params.pagination&&e.params.pagination.clickable&&(e.pagination.el===v||e.pagination.el.contains(v)))return;let x;E.length?x=E[0].classList.contains(e.params.navigation.hiddenClass):m.length&&(x=m[0].classList.contains(e.params.navigation.hiddenClass)),i(x===!0?"navigationShow":"navigationHide"),[...E,...m].filter(A=>!!A).forEach(A=>A.classList.toggle(e.params.navigation.hiddenClass))}});const g=()=>{e.el.classList.remove(...e.params.navigation.navigationDisabledClass.split(" ")),h(),l()},T=()=>{e.el.classList.add(...e.params.navigation.navigationDisabledClass.split(" ")),p()};Object.assign(e.navigation,{enable:g,disable:T,update:l,init:h,destroy:p})}function ml(t){return t===void 0&&(t=""),`.${t.trim().replace(/([\.:!+\/])/g,"\\$1").replace(/ /g,".")}`}function oP(t){let{swiper:e,extendParams:n,on:r,emit:i}=t;const o="swiper-pagination";n({pagination:{el:null,bulletElement:"span",clickable:!1,hideOnClick:!1,renderBullet:null,renderProgressbar:null,renderFraction:null,renderCustom:null,progressbarOpposite:!1,type:"bullets",dynamicBullets:!1,dynamicMainBullets:1,formatFractionCurrent:m=>m,formatFractionTotal:m=>m,bulletClass:`${o}-bullet`,bulletActiveClass:`${o}-bullet-active`,modifierClass:`${o}-`,currentClass:`${o}-current`,totalClass:`${o}-total`,hiddenClass:`${o}-hidden`,progressbarFillClass:`${o}-progressbar-fill`,progressbarOppositeClass:`${o}-progressbar-opposite`,clickableClass:`${o}-clickable`,lockClass:`${o}-lock`,horizontalClass:`${o}-horizontal`,verticalClass:`${o}-vertical`,paginationDisabledClass:`${o}-disabled`}}),e.pagination={el:null,bullets:[]};let s,a=0;const l=m=>(Array.isArray(m)?m:[m]).filter(v=>!!v);function u(){return!e.params.pagination.el||!e.pagination.el||Array.isArray(e.pagination.el)&&e.pagination.el.length===0}function d(m,v){const{bulletActiveClass:x}=e.params.pagination;m&&(m=m[`${v==="prev"?"previous":"next"}ElementSibling`],m&&(m.classList.add(`${x}-${v}`),m=m[`${v==="prev"?"previous":"next"}ElementSibling`],m&&m.classList.add(`${x}-${v}-${v}`)))}function h(m){const v=m.target.closest(ml(e.params.pagination.bulletClass));if(!v)return;m.preventDefault();const x=$f(v)*e.params.slidesPerGroup;if(e.params.loop){if(e.realIndex===x)return;e.slideToLoop(x)}else e.slideTo(x)}function p(){const m=e.rtl,v=e.params.pagination;if(u())return;let x=e.pagination.el;x=l(x);let A,k;const P=e.virtual&&e.params.virtual.enabled?e.virtual.slides.length:e.slides.length,R=e.params.loop?Math.ceil(P/e.params.slidesPerGroup):e.snapGrid.length;if(e.params.loop?(k=e.previousRealIndex||0,A=e.params.slidesPerGroup>1?Math.floor(e.realIndex/e.params.slidesPerGroup):e.realIndex):typeof e.snapIndex<"u"?(A=e.snapIndex,k=e.previousSnapIndex):(k=e.previousIndex||0,A=e.activeIndex||0),v.type==="bullets"&&e.pagination.bullets&&e.pagination.bullets.length>0){const O=e.pagination.bullets;let D,q,B;if(v.dynamicBullets&&(s=pv(O[0],e.isHorizontal()?"width":"height",!0),x.forEach(U=>{U.style[e.isHorizontal()?"width":"height"]=`${s*(v.dynamicMainBullets+4)}px`}),v.dynamicMainBullets>1&&k!==void 0&&(a+=A-(k||0),a>v.dynamicMainBullets-1?a=v.dynamicMainBullets-1:a<0&&(a=0)),D=Math.max(A-a,0),q=D+(Math.min(O.length,v.dynamicMainBullets)-1),B=(q+D)/2),O.forEach(U=>{const V=[...["","-next","-next-next","-prev","-prev-prev","-main"].map(z=>`${v.bulletActiveClass}${z}`)].map(z=>typeof z=="string"&&z.includes(" ")?z.split(" "):z).flat();U.classList.remove(...V)}),x.length>1)O.forEach(U=>{const V=$f(U);V===A?U.classList.add(...v.bulletActiveClass.split(" ")):e.isElement&&U.setAttribute("part","bullet"),v.dynamicBullets&&(V>=D&&V<=q&&U.classList.add(...`${v.bulletActiveClass}-main`.split(" ")),V===D&&d(U,"prev"),V===q&&d(U,"next"))});else{const U=O[A];if(U&&U.classList.add(...v.bulletActiveClass.split(" ")),e.isElement&&O.forEach((V,z)=>{V.setAttribute("part",z===A?"bullet-active":"bullet")}),v.dynamicBullets){const V=O[D],z=O[q];for(let Y=D;Y<=q;Y+=1)O[Y]&&O[Y].classList.add(...`${v.bulletActiveClass}-main`.split(" "));d(V,"prev"),d(z,"next")}}if(v.dynamicBullets){const U=Math.min(O.length,v.dynamicMainBullets+4),V=(s*U-s)/2-B*s,z=m?"right":"left";O.forEach(Y=>{Y.style[e.isHorizontal()?z:"top"]=`${V}px`})}}x.forEach((O,D)=>{if(v.type==="fraction"&&(O.querySelectorAll(ml(v.currentClass)).forEach(q=>{q.textContent=v.formatFractionCurrent(A+1)}),O.querySelectorAll(ml(v.totalClass)).forEach(q=>{q.textContent=v.formatFractionTotal(R)})),v.type==="progressbar"){let q;v.progressbarOpposite?q=e.isHorizontal()?"vertical":"horizontal":q=e.isHorizontal()?"horizontal":"vertical";const B=(A+1)/R;let U=1,V=1;q==="horizontal"?U=B:V=B,O.querySelectorAll(ml(v.progressbarFillClass)).forEach(z=>{z.style.transform=`translate3d(0,0,0) scaleX(${U}) scaleY(${V})`,z.style.transitionDuration=`${e.params.speed}ms`})}v.type==="custom"&&v.renderCustom?(O.innerHTML=v.renderCustom(e,A+1,R),D===0&&i("paginationRender",O)):(D===0&&i("paginationRender",O),i("paginationUpdate",O)),e.params.watchOverflow&&e.enabled&&O.classList[e.isLocked?"add":"remove"](v.lockClass)})}function g(){const m=e.params.pagination;if(u())return;const v=e.virtual&&e.params.virtual.enabled?e.virtual.slides.length:e.grid&&e.params.grid.rows>1?e.slides.length/Math.ceil(e.params.grid.rows):e.slides.length;let x=e.pagination.el;x=l(x);let A="";if(m.type==="bullets"){let k=e.params.loop?Math.ceil(v/e.params.slidesPerGroup):e.snapGrid.length;e.params.freeMode&&e.params.freeMode.enabled&&k>v&&(k=v);for(let P=0;P<k;P+=1)m.renderBullet?A+=m.renderBullet.call(e,P,m.bulletClass):A+=`<${m.bulletElement} ${e.isElement?'part="bullet"':""} class="${m.bulletClass}"></${m.bulletElement}>`}m.type==="fraction"&&(m.renderFraction?A=m.renderFraction.call(e,m.currentClass,m.totalClass):A=`<span class="${m.currentClass}"></span> / <span class="${m.totalClass}"></span>`),m.type==="progressbar"&&(m.renderProgressbar?A=m.renderProgressbar.call(e,m.progressbarFillClass):A=`<span class="${m.progressbarFillClass}"></span>`),e.pagination.bullets=[],x.forEach(k=>{m.type!=="custom"&&(k.innerHTML=A||""),m.type==="bullets"&&e.pagination.bullets.push(...k.querySelectorAll(ml(m.bulletClass)))}),m.type!=="custom"&&i("paginationRender",x[0])}function T(){e.params.pagination=rP(e,e.originalParams.pagination,e.params.pagination,{el:"swiper-pagination"});const m=e.params.pagination;if(!m.el)return;let v;typeof m.el=="string"&&e.isElement&&(v=e.el.querySelector(m.el)),!v&&typeof m.el=="string"&&(v=[...document.querySelectorAll(m.el)]),v||(v=m.el),!(!v||v.length===0)&&(e.params.uniqueNavElements&&typeof m.el=="string"&&Array.isArray(v)&&v.length>1&&(v=[...e.el.querySelectorAll(m.el)],v.length>1&&(v=v.filter(x=>$A(x,".swiper")[0]===e.el)[0])),Array.isArray(v)&&v.length===1&&(v=v[0]),Object.assign(e.pagination,{el:v}),v=l(v),v.forEach(x=>{m.type==="bullets"&&m.clickable&&x.classList.add(...(m.clickableClass||"").split(" ")),x.classList.add(m.modifierClass+m.type),x.classList.add(e.isHorizontal()?m.horizontalClass:m.verticalClass),m.type==="bullets"&&m.dynamicBullets&&(x.classList.add(`${m.modifierClass}${m.type}-dynamic`),a=0,m.dynamicMainBullets<1&&(m.dynamicMainBullets=1)),m.type==="progressbar"&&m.progressbarOpposite&&x.classList.add(m.progressbarOppositeClass),m.clickable&&x.addEventListener("click",h),e.enabled||x.classList.add(m.lockClass)}))}function b(){const m=e.params.pagination;if(u())return;let v=e.pagination.el;v&&(v=l(v),v.forEach(x=>{x.classList.remove(m.hiddenClass),x.classList.remove(m.modifierClass+m.type),x.classList.remove(e.isHorizontal()?m.horizontalClass:m.verticalClass),m.clickable&&(x.classList.remove(...(m.clickableClass||"").split(" ")),x.removeEventListener("click",h))})),e.pagination.bullets&&e.pagination.bullets.forEach(x=>x.classList.remove(...m.bulletActiveClass.split(" ")))}r("changeDirection",()=>{if(!e.pagination||!e.pagination.el)return;const m=e.params.pagination;let{el:v}=e.pagination;v=l(v),v.forEach(x=>{x.classList.remove(m.horizontalClass,m.verticalClass),x.classList.add(e.isHorizontal()?m.horizontalClass:m.verticalClass)})}),r("init",()=>{e.params.pagination.enabled===!1?E():(T(),g(),p())}),r("activeIndexChange",()=>{typeof e.snapIndex>"u"&&p()}),r("snapIndexChange",()=>{p()}),r("snapGridLengthChange",()=>{g(),p()}),r("destroy",()=>{b()}),r("enable disable",()=>{let{el:m}=e.pagination;m&&(m=l(m),m.forEach(v=>v.classList[e.enabled?"remove":"add"](e.params.pagination.lockClass)))}),r("lock unlock",()=>{p()}),r("click",(m,v)=>{const x=v.target,A=l(e.pagination.el);if(e.params.pagination.el&&e.params.pagination.hideOnClick&&A&&A.length>0&&!x.classList.contains(e.params.pagination.bulletClass)){if(e.navigation&&(e.navigation.nextEl&&x===e.navigation.nextEl||e.navigation.prevEl&&x===e.navigation.prevEl))return;const k=A[0].classList.contains(e.params.pagination.hiddenClass);i(k===!0?"paginationShow":"paginationHide"),A.forEach(P=>P.classList.toggle(e.params.pagination.hiddenClass))}});const S=()=>{e.el.classList.remove(e.params.pagination.paginationDisabledClass);let{el:m}=e.pagination;m&&(m=l(m),m.forEach(v=>v.classList.remove(e.params.pagination.paginationDisabledClass))),T(),g(),p()},E=()=>{e.el.classList.add(e.params.pagination.paginationDisabledClass);let{el:m}=e.pagination;m&&(m=l(m),m.forEach(v=>v.classList.add(e.params.pagination.paginationDisabledClass))),b()};Object.assign(e.pagination,{enable:S,disable:E,render:g,update:p,init:T,destroy:b})}const e8=({product:t})=>{const{imagenes:e,titulo:n,precio:r,id:i}=t,{user:o}=C.useContext(Lt).contextValue,[s,a]=C.useState(!1),[l,u]=C.useState(o),[d,h]=C.useState(!1),p=C.useRef(null),g=()=>h(!0),T=()=>{h(!1),console.log(d)};C.useEffect(()=>{console.log(o),l&&l.favoritos&&a(l.favoritos.includes(i))},[]);const b=()=>{console.log("clikeado"),l!==null?(u(S=>S.favoritos?S.favoritos.includes(i)?(console.log("El favorito ya existe en la lista."),S):{...S,favoritos:[...S.favoritos,i]}:{...S,favoritos:[i]}),localStorage.setItem("user",JSON.stringify(l))):Je.fire({title:"Login necesario!",text:"Debes estar logueado para añadir a favoritos!",icon:"warning",showCancelButton:!0,confirmButtonText:"Iniciar sesión"}).then(S=>{S.isConfirmed&&navigate("/login")})};return _.jsxs(bz,{children:[_.jsxs("div",{style:{display:"flex",alignItems:"flex-start",justifyContent:"space-between"},children:[_.jsx(Iz,{children:n}),_.jsxs("div",{style:{display:"flex",gap:20},children:[_.jsx(Rz,{onClick:g,children:_.jsx(Zz,{})}),_.jsx(kz,{children:s?_.jsx(O9,{onClick:b,style:{fill:"red"}}):_.jsx(N9,{onClick:b})})]})]}),_.jsx(uw,{slidesPerView:1,pagination:{clickable:!0},loop:!0,navigation:!0,modules:[oP,iP],children:e.length>0&&e.map((S,E)=>_.jsx(cw,{children:_.jsx(Sz,{children:_.jsx(Cz,{src:S.urlImage,alt:"imagen"})})},E))}),_.jsxs(Az,{children:[_.jsxs("div",{children:[_.jsx("span",{children:"Precio por dia:"})," $ ",r]}),_.jsx(Pz,{to:`/product/${i}`,children:"Ver más"})]}),_.jsx(Jz,{ref:p,open:d,onClose:T,focusTrapped:!0,initialFocusRef:p,center:!0,children:_.jsx("h3",{style:{marginTop:20},children:"Comparte esta publicación en tu red Favorita"})})]})},Ax=j.h2`
  margin-top: 60px;
  color: white;
  font-size: 28px;
  font-weight: 700;
  align-self: flex-start;
`,t8=j.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 32px;
  padding: 20px 0px 100px 0px;

  @media(max-width: 950px){
    justify-content: center;
  }
`,n8=()=>{const{productos:t,allProducts:e}=C.useContext(Lt).contextValue,[n,r]=C.useState(t);return C.useEffect(()=>{window.scrollTo(0,0),r(t)},[t]),_.jsx(_.Fragment,{children:t&&Object.keys(t).length>0?_.jsxs(_.Fragment,{children:[_.jsx(Ax,{children:"Productos recomendados"}),_.jsx(t8,{children:t.length&&t.map((i,o)=>_.jsx(e8,{product:i},o))})]}):_.jsx(_.Fragment,{children:_.jsx(Ax,{children:"No hay coincidencias para la busqueda"})})})},r8=j.div`
  margin: 32px auto;
  margin-top: 150px;
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 16px;
  background-color: rgba(0,0,0,0.3);
  padding: 16px;
  border-radius: 8px;

  @media(max-width: 950px){
    flex-direction: column;
    align-items: center;
  }
`,Px=j.label`
  width: 45px;
  height: 19px;
  color: white;
  margin-top: 10px;
  margin-right: 5px;
  font-family: Roboto;
  font-size: 15px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: -0.4px;
  text-align: left;
`,i8=j.input`
  width: 60%;
  padding: 8px;
  border-radius: 8px;
  border: none;
  font-size: 18px;

  @media(max-width: 950px){
    width: 100%;
  }

  @media all and (max-width: 450px) {
    width: 90%;
    font-size: 15px;
    margin-left: -10%
    }
`,kx=j.input`
  width: 75%;
  padding: 10px;
  border-radius: 8px;
  border: none;
  font-size: 15px;

  @media all and (max-width: 450px) {
    width: 100%;
    font-size: 15px;
    }
;`,Rx=j.div`
  display: flex;
  justify-content: start;
  
  @media all and (max-width: 450px) {
  display: inline-block;
  font-size: 15px;
  }
`,o8=j.button`
  width: 37px;
  height: 37px;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  border-radius: 8px;

  @media all and (max-width: 450px) {
    margin-top: -51px;
    }

`,s8=j.img`

`,a8="/assets/lupa1-f10f721c.svg",l8=()=>{const t=new Date,e=t.getDate().toString().padStart(2,"0"),n=(t.getMonth()+1).toString().padStart(2,"0");return`${t.getFullYear()}-${n}-${e}`},u8=()=>{const{productos:t,allProducts:e,setProductData:n}=C.useContext(Lt).contextValue,r=l8(),i=new Date;i.setDate(i.getDate()+2),i.toISOString().split("T")[0];const[o,s]=C.useState(""),[a,l]=C.useState(r),[u,d]=C.useState(""),[h,p]=C.useState(""),[g,T]=C.useState(""),[b,S]=C.useState(e);C.useEffect(()=>{n(e)},[]);const E=A=>{s(A.target.value),T(o.toLowerCase());const k=e.filter(P=>P.titulo.toLowerCase().includes(g));if(S(k),A.target.value==""){n(e);return}n(k)},m=A=>{const k=A.target.value;l(k);const P=new Date(k);P.setDate(P.getDate()+2);const R=P.toISOString().split("T")[0];d(R),p(R)},v=A=>{d(A.target.value)},x=A=>{A.preventDefault(),console.log(o),console.log("desde: ",a),console.log("hasta: ",u)};return _.jsx("form",{onSubmit:x,children:_.jsxs(r8,{children:[_.jsx(i8,{type:"text",placeholder:"Busca aquí lo que necesitas",value:o,onChange:E}),_.jsxs("div",{style:{display:"flex",gap:5},children:[_.jsxs(Rx,{children:[_.jsx(Px,{htmlFor:"start",children:"Desde: "}),_.jsx(kx,{type:"date",id:"start",value:a,onChange:m,min:r})]}),_.jsxs(Rx,{children:[_.jsx(Px,{htmlFor:"end",children:"Hasta:"}),_.jsx(kx,{type:"date",id:"end",value:u,onChange:v,min:h})]}),_.jsx(o8,{type:"submit",children:_.jsx(s8,{src:a8,alt:""})})]})]})})},c8=j.div`
  width: 100%;
`,d8=j.div`
  position: absolute;
  bottom: -150px;
  left: 0;
  width: 100%;
  min-height: 80px;
  background: linear-gradient(180deg, rgba(74, 87, 0, 0) 0%, #4a5700 97.92%),
    linear-gradient(180deg, rgba(211, 244, 9, 0) 0%, #c5e324 100%),
    linear-gradient(180deg, rgba(74, 87, 0, 0) 0%, #4a5700 97.92%);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 32px 0 32px;
`,f8=j.div`
  display: flex;
  align-items: end;

  img{
    width: 64px;
    height: auto;
  }

  p{
    margin-left: 16px;
    margin-left: 10px;
  }

  @media(max-width: 500px){
    img{
      width: 40px;
    }
    p{
      font-size: 12px;
    }
  }
`,h8=j.div`
  display: flex;
  gap: 16px;
  cursor: pointer;

  img{
    width: 32px;
    height: auto;

    &:hover{
      transition: ease .5s;
      transform: scale(1.2);
    }

  }

  @media(max-width: 500px){
    img{
      width: 25px;
    }
  }
`,p8="/assets/logoTeam-c1158a56.svg",m8="/assets/square-x-twitter-1a4e1106.svg",g8="/assets/square-whatsapp-d72afdfd.svg",v8="/assets/square-instagram-aff443db.svg",y8="/assets/square-facebook-c88755fd.svg",ep=()=>_.jsxs(d8,{children:[_.jsxs(f8,{children:[_.jsx("img",{src:p8,alt:"logo equipo uno"}),_.jsx("p",{children:"Copyright ©2023 All rights reserved"})]}),_.jsxs(_.Fragment,{children:[_.jsx(Ht,{to:"/politicas",style:{textDecoration:"none",color:"white",fontWeight:200},children:_.jsx("p",{style:{textAlign:"center"},children:"Politicas de reservas"})}),_.jsxs(h8,{children:[_.jsx("a",{href:"https://api.whatsapp.com/send?phone=541165492709&text=Hola,%20me%20gustaría%20contactar%20contigo",target:"_blank",children:_.jsx("img",{src:g8,alt:"whatsapp logo"})}),_.jsx("a",{href:"https://www.instagram.com/_digitalhouse/",children:_.jsx("img",{src:v8,alt:"instagram logo"})}),_.jsx("a",{href:"https://www.facebook.com/digitalhouseschool",children:_.jsx("img",{src:y8,alt:"facebook logo"})}),_.jsx("a",{href:"https://twitter.com/_digitalhouse?lang=es",children:_.jsx("img",{src:m8,alt:"x logo"})})]})]})]}),w8=()=>{const{allProducts:t}=C.useContext(Lt).contextValue;return C.useEffect(()=>{localStorage.setItem("productos",JSON.stringify(t))},[]),_.jsxs(_.Fragment,{children:[_.jsxs(c8,{children:[_.jsx(u8,{}),_.jsx(K9,{}),_.jsx(n8,{})]}),_.jsx(ep,{})]})},_8="/assets/404-4f55f6ee.png",E8=j.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 32px;
  text-align: center;

  img{
    max-width: 80%;
    width: 500px;
    height: auto;
  }

  p{
    text-transform: uppercase;
    font-size: 60px;
    margin-top: 32px;
  }
`,x8=()=>(C.useEffect(()=>{window.scrollTo(0,0)},[]),_.jsxs(E8,{style:{marginTop:"120px"},children:[_.jsx("img",{src:_8,alt:"NotFound Image"}),_.jsx("p",{children:"Página no encontrada"})]})),T8=j.div`
  margin: 0 auto;
  margin-top: 150px;
  width: 80%;
  max-width: 500px;
  height: 100%;
  color: red;
  background: linear-gradient(
    45deg,
    rgba(255, 255, 255, 0.41220238095238093) 0%,
    rgba(255, 255, 255, 0.47942927170868344) 7%,
    rgba(99, 250, 134, 0.35898109243697474) 100%,
    rgba(0, 212, 255, 1) 100%
  );
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  border-radius: 16px;
`,$r=j.label`
  width: 100%;
  height: 19px;
  color: #000;
  margin: 10px;
  font-size: 20px;
  font-weight: 600;
`,Br=j.input`
  width: 100%;
  border-radius: 8px;
  border: 1px solid rgba(129, 129, 129, 0.5);
  padding: 10px;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  font-size: 16px;
  margin-bottom: 12px;

`,Ur=j.p`
  height: 24px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: red;
  color: white;
  font-size: 14px;
`,b8=j.div`
  display: flex;
  width: 90px;
  height: 90px;

  img {
    width: 100%;
    height: auto;
  }
`,S8=j.div`
  font-size: 15px;
  margin: 15px 0;
  color: brown;
  display: flex;
  justify-content: space-between;
  align-self: flex-start;
`,C8=j.button`
  width: 100%;
  height: 34px;
  font-size: 18px;
  font-weight: bold;
  align-self: center;
  border-radius: 12px;
  border: 0.5px solid rgba(0, 0, 0, 0.5);
  background: linear-gradient(
    0deg,
    #5fbe6f 8.38%,
    rgba(0, 254, 41, 0.4) 113.51%
  );
  cursor: pointer;

  &:hover {
    background: rgba(0, 0, 0, 0.7);
    color: wheat;
  }
`,I8=j.input`
  margin-left: 5px;
  margin-right: 10px;
`,Fu={_origin:"https://api.emailjs.com"},A8=(t,e="https://api.emailjs.com")=>{Fu._userID=t,Fu._origin=e},sP=(t,e,n)=>{if(!t)throw"The public key is required. Visit https://dashboard.emailjs.com/admin/account";if(!e)throw"The service ID is required. Visit https://dashboard.emailjs.com/admin";if(!n)throw"The template ID is required. Visit https://dashboard.emailjs.com/admin/templates";return!0};class Ox{constructor(e){this.status=e?e.status:0,this.text=e?e.responseText:"Network Error"}}const aP=(t,e,n={})=>new Promise((r,i)=>{const o=new XMLHttpRequest;o.addEventListener("load",({target:s})=>{const a=new Ox(s);a.status===200||a.text==="OK"?r(a):i(a)}),o.addEventListener("error",({target:s})=>{i(new Ox(s))}),o.open("POST",Fu._origin+t,!0),Object.keys(n).forEach(s=>{o.setRequestHeader(s,n[s])}),o.send(e)}),P8=(t,e,n,r)=>{const i=r||Fu._userID;return sP(i,t,e),aP("/api/v1.0/email/send",JSON.stringify({lib_version:"3.11.0",user_id:i,service_id:t,template_id:e,template_params:n}),{"Content-type":"application/json"})},k8=t=>{let e;if(typeof t=="string"?e=document.querySelector(t):e=t,!e||e.nodeName!=="FORM")throw"The 3rd parameter is expected to be the HTML form element or the style selector of form";return e},R8=(t,e,n,r)=>{const i=r||Fu._userID,o=k8(n);sP(i,t,e);const s=new FormData(o);return s.append("lib_version","3.11.0"),s.append("service_id",t),s.append("template_id",e),s.append("user_id",i),aP("/api/v1.0/email/send-form",s)},O8={init:A8,send:P8,sendForm:R8},D8=()=>{const t=as(),e=()=>{let P=new Date,R=P.getFullYear(),O=(P.getMonth()+1).toString().padStart(2,"0"),D=P.getDate().toString().padStart(2,"0");return`${R}-${O}-${D}`},[n,r]=C.useState({nombre:null,apellido:null,email:null,password:null,telefono:null,dni:1,fechaIngreso:e(),calle:null,numero:null,localidad:null,admin:!1}),[i,o]=C.useState([]);C.useEffect(()=>{window.scrollTo(0,0)},[]);const s=i.some(([P])=>P==="name"),a=i.some(([P])=>P==="surname"),l=i.some(([P])=>P==="email"),u=i.some(([P])=>P==="password"),d=i.some(([P])=>P==="confirm"),h=i.some(([P])=>P==="telefono"),p=i.some(([P])=>P==="calle"),g=i.some(([P])=>P==="numero"),T=i.some(([P])=>P==="localidad"),b=()=>{n.nombre.length<4&&o(P=>[...P,["name"]])},S=()=>{n.apellido.length<4&&o(P=>[...P,["surname"]])},E=async()=>{/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(n.email)||o(R=>[...R,["email"]])},m=()=>{n.password.length<6?o(P=>[...P,["password"]]):n.password!==n.confirmPassword&&o(P=>[...P,["confirm"]])},v=(P,R)=>{r(O=>({...O,[R]:P.target.value})),o([])},x=P=>{const R={to_name:P.email,name:P.nombre,message:"Tu registro en la web de Alquicancha a sido exitoso."};O8.send("service_05f9hdj","template_mcksxdi",R,"l1rLzDMKHIaVUF7Vx").then(O=>{console.log(O.text)},O=>{console.log(O.text)})},A=async()=>{const P={...n};await g9(P)!==null?(NA(),x(P),Je.fire({title:"Usuario creado!",text:"El usuario a sido creado correctamente!",icon:"success",confirmButtonText:"Iniciar sesión"}).then(O=>{O.isConfirmed&&t("/login")})):Je.fire({title:"Error!",text:"El correo ya esta en uso!",icon:"error",confirmButtonText:"Volver"})},k=async P=>{P.preventDefault(),o([]),E(),m(),b(),S(),o(R=>(R.length===0?A():Je.fire({title:"Error!",text:"Verifica los datos ingresados",icon:"error",confirmButtonText:"Volver"}),R))};return _.jsxs(_.Fragment,{children:[_.jsx("form",{onSubmit:k,children:_.jsxs(T8,{children:[_.jsx(b8,{children:_.jsx("img",{src:"/src/assets/Male User.png",alt:"user"})}),_.jsx($r,{children:"Nombre"}),_.jsx(Br,{type:"text",required:!0,placeholder:"Ingresa tú nombre",onChange:P=>v(P,"nombre")}),s===!0?_.jsx(Ur,{children:"El nombre debe tener minimo 4 letras"}):null,_.jsx($r,{children:"Apellido"}),_.jsx(Br,{type:"text",required:!0,placeholder:"Ingresa tú apellido",onChange:P=>v(P,"apellido")}),a===!0?_.jsx(Ur,{children:"El apellido debe tener minimo 4 letras"}):null,_.jsx($r,{children:"Email"}),_.jsx(Br,{type:"email",required:!0,placeholder:"Ingresa tú e-mail",onChange:P=>v(P,"email")}),l===!0?_.jsx(Ur,{children:"Debes ingresar un correo valido"}):null,_.jsx($r,{children:"Password"}),_.jsx(Br,{type:"password",required:!0,placeholder:"Crea una contraseña",autoComplete:"on",onChange:P=>v(P,"password")}),u===!0?_.jsx(Ur,{children:"Asegurate que tenga mas de 6 letras"}):null,_.jsx($r,{children:"Confirmar password"}),_.jsx(Br,{type:"password",required:!0,placeholder:"Repite la contraseña",autoComplete:"on",onChange:P=>v(P,"confirmPassword")}),d===!0?_.jsx(Ur,{children:"Las contraseñas no coinciden"}):null,_.jsx($r,{children:"Teléfono"}),_.jsx(Br,{type:"number",required:!0,placeholder:"Ingresa tú telefono",onChange:P=>v(P,"telefono")}),h===!0?_.jsx(Ur,{children:"El telefono debe tener minimo 4 letras"}):null,_.jsx($r,{children:"Dirección"}),_.jsx(Br,{type:"text",required:!0,placeholder:"Ingresa tú dirección",onChange:P=>v(P,"calle")}),p===!0?_.jsx(Ur,{children:"La dirección debe tener minimo 4 letras"}):null,_.jsx($r,{children:"Número de Puerta"}),_.jsx(Br,{type:"number",required:!0,placeholder:"Ingresa tú número de puerta",onChange:P=>v(P,"numero")}),g===!0?_.jsx(Ur,{children:"El número debe tener minimo 4"}):null,_.jsx($r,{children:"Localidad"}),_.jsx(Br,{type:"text",required:!0,placeholder:"Ingresa tú Localidad",onChange:P=>v(P,"localidad")}),T===!0?_.jsx(Ur,{children:"La localidad debe tener minimo 4 letras"}):null,_.jsx(S8,{children:_.jsxs("div",{children:[_.jsx(I8,{type:"checkbox"}),_.jsx("span",{children:"Recordarme "})]})}),_.jsx(C8,{children:"Registrarme"})]})}),_.jsx(ep,{})]})},N8=j.div`
  margin: 0 auto;
  margin-top: 150px;
  width: 80%;
  max-width: 500px;
  height: 100%;
  color: red;
  background: linear-gradient(
    45deg,
    rgba(255, 255, 255, 0.41220238095238093) 0%,
    rgba(255, 255, 255, 0.47942927170868344) 7%,
    rgba(99, 250, 134, 0.35898109243697474) 100%,
    rgba(0, 212, 255, 1) 100%
  );
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  border-radius: 16px;
`,Dx=j.label`
  width: 100%;
  height: 19px;
  color: #000;
  margin: 10px;
  font-size: 20px;
  font-weight: 600;
`,Nx=j.input`
  width: 100%;
  border-radius: 8px;
  border: 1px solid rgba(129, 129, 129, 0.5);
  padding: 10px;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  font-size: 16px;
  margin-bottom: 12px;
`,L8=j.div`
  display: flex;
  width: 90px;
  height: 90px;

  img {
    width: 100%;
    height: auto;
  }
`,M8=j.div`
  width: 100%;
  font-size: 15px;
  margin: 15px 0;
  color: brown;
  display: flex;
  justify-content: space-between;
`,V8=j.button`
  width: 100%;
  height: 34px;
  font-size: 18px;
  font-weight: bold;
  align-self: center;
  border-radius: 12px;
  border: 0.5px solid rgba(0, 0, 0, 0.5);
  background: linear-gradient(
    0deg,
    #5fbe6f 8.38%,
    rgba(0, 254, 41, 0.4) 113.51%
  );
  cursor: pointer;

  &:hover {
    background: rgba(0, 0, 0, 0.7);
    color: wheat;
  }
`,Lx=j.button`
  font-size: 15px;
  background: inherit;
  border: none;
  color: brown;
  cursor: pointer;

  &:hover {
    color: white;
  }
`,j8=j.input`
  margin-left: 5px;
  margin-right: 10px;
`,Mx=j.p`
  height: 24px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: red;
  color: white;
  font-size: 14px;
`,F8=j.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-top: 16px;
`,$8=()=>{const t=as(),[e,n]=C.useState(null),[r,i]=C.useState(null),[o,s]=C.useState([]),{loginAdmin:a,login:l,setUserData:u,user:d}=C.useContext(Lt).contextValue;C.useEffect(()=>{window.scrollTo(0,0)},[]);const h=async()=>{/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e)||s(x=>[...x,["user"]])},p=()=>{r.length<6&&s(v=>[...v,["password"]])},g=o.some(([v])=>v==="password"),T=o.some(([v])=>v==="user"),b=v=>{n(v.target.value),s([])},S=v=>{i(v.target.value),s([])},E=async(v,x)=>{const A=await v9(v,x);if(A!==null){const P=(await w9("userId",A.user.uid))[0],R=P.admin;P?(u(P),l(),Je.fire({title:"Ingreso correcto!",text:`Hola, ${P.nombre} bienvenido!`,icon:"success",confirmButtonText:`Ir a ${R?"Dashboard":"Home"} `}).then(O=>{O.isConfirmed&&(R?(a(),t("/administracion")):t("/"))})):Je.fire({title:"Error!",text:"Usuario o contraseña incorrectos",icon:"error",confirmButtonText:"Ok"})}else Je.fire({title:"Error!",text:"Usuario o contraseña incorrectos",icon:"error",confirmButtonText:"Ok"})},m=async v=>{v.preventDefault(),s([]),h(),p(),s(x=>(x.length===0?E(e,r):Je.fire({title:"Error!",text:"Verifica los datos ingresados",icon:"error",confirmButtonText:"Volver"}),x))};return _.jsxs(_.Fragment,{children:[_.jsx("form",{onSubmit:m,children:_.jsxs(N8,{children:[_.jsx(L8,{children:_.jsx("img",{src:"/src/assets/Male User.png",alt:"user"})}),_.jsx(Dx,{children:"Email"}),_.jsx(Nx,{type:"email",required:!0,placeholder:"Ingresa tú correo electrónico",onChange:b}),T===!0?_.jsx(Mx,{children:"Debes ingresar un correo valido"}):null,_.jsx(Dx,{children:"Password"}),_.jsx(Nx,{type:"password",required:!0,placeholder:"Ingresa tú contraseña",autoComplete:"on",onChange:S}),g===!0?_.jsx(Mx,{children:"Contraseña incorrecta o menos de 6 caractéres"}):null,_.jsx(M8,{children:_.jsxs("div",{children:[_.jsx(j8,{type:"checkbox"}),_.jsx("span",{children:"Recordarme "})]})}),_.jsx(V8,{type:"submit",children:"Login"}),_.jsxs(F8,{children:[_.jsx(Ht,{to:"/register",children:_.jsx(Lx,{children:"Crear una nueva cuenta"})}),_.jsx(Ht,{to:"/",children:_.jsx(Lx,{children:"Olvide mi contraseña"})})]})]})}),_.jsx(ep,{})]})},B8=j.div`
  width: 100%;
  min-height: 100vh;
  margin-top: 132px;

  @media (max-width: 1024px) {
    padding: 0 32px;
  }
`,U8=j.div`
  width: 100%;
  background-color: rgba(255, 255, 255, 0.7);
  border-radius: 8px;
  padding: 16px;
`,z8=j.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 32px;

  a {
    display: flex;
    align-items: center;
    gap: 8px;
    text-decoration: none;
    font-weight: 700;
    font-size: 18px;

    @media (max-width: 750px) {
      font-size: 14px;
    }

    @media (max-width: 620px) {
      font-size: 14px;
    }

    @media (max-width: 420px) {
      font-size: 10px;
    }

    img {
      width: 32px;
      cursor: pointer;

      @media (max-width: 750px) {
        width: 20px;
      }
    }
    &:hover {
      transform: scale(1.1);
      color: white;

      img {
        filter: invert(1) sepia(0) hue-rotate(20deg) saturate(1000%);
      }
    }
  }
`,H8=j.h2`
  font-size: 40px;
  padding: 0 0 0 30px;
  @media (max-width: 1024px) {
    font-size: 30px;
  }
  
  @media (max-width: 550px) {
    font-size: 20px;
  }

  @media (max-width: 420px) {
    font-size: 15px;
  }
`,W8=j.div`
  display: flex;
  justify-content: space-between;

  @media (max-width: 1024px) {
    flex-direction: column;
  }
`,q8=j.div`
  width: 50%;
  height: fit-content;
  background-color: rgba(255, 255, 255, 0.6);
  display: flex;
  justify-content: space-between;

  border-radius: 8px;

  @media (max-width: 1024px) {
    flex-direction: column-reverse;
    width: 100%;
    align-items: center;
    margin-bottom: 32px;
  }
`,G8=j.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 400px;
  padding-left: 8px;
  cursor: zoom-in;

  img {
    width: 100%;
    height: auto;
    border-radius: 8px;
  }

  @media (max-width: 1024px) {
    width: 90%;
  }
`,K8=j.div`
  display: flex;
  flex-direction: column;
  padding: 8px;
  cursor: pointer;

  img {
    width: 100px;
    height: auto;
    padding: 4px;
    border-radius: 8px;
  }

  .selected {
    border: 2px solid black;
  }

  @media (max-width: 1024px) {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
  }
`,Q8=j.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100%;
  width: 50%;
  padding: 0 14px;

  @media (max-width: 1024px) {
    width: 100%;
  }
`,Y8=j.p`
  font-size: 24px;
  margin: 0;
  padding-bottom: 12px;

  @media (max-width: 1024px) {
    font-size: 18px;
  }
`,X8=j.p`
  font-size: 24px;
  margin: 0;
  padding-bottom: 12px;

  @media (max-width: 1024px) {
    font-size: 18px;
  }
`,J8=j.p`
  font-size: 20px;
  color: brown;
  font-weight: bold;
`,Z8=j.div`
  width: 100%;
  background-color: white;
  border-radius: 8px;
  padding: 8px;
  margin-top: 20px;

  p {
    font-size: 18px;
    text-transform: uppercase;
    font-weight: 700;

    @media (max-width: 1024px) {
      font-size: 16px;
    }
  }
`,e7=j.button`
  width: 100%;
  height: 34px;
  font-size: 18px;
  font-weight: bold;
  align-self: center;
  border-radius: 12px;
  margin-top: 32px;
  background: linear-gradient(
    0deg,
    #5fbe6f 8.38%,
    rgba(0, 254, 41, 0.4) 113.51%
  );
  border: none;
  cursor: pointer;

  &:hover {
    background: rgba(0, 0, 0, 0.7);
    color: wheat;
  }
`,t7=j.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  flex-wrap: wrap;
  margin-left: 30px;
  margin-top: 20px;

  li {
    padding: 12px;
    display: flex;
    align-items: center;
    gap: 10px;

    img{
      width: 25px;
      height: auto;
    }
  }

  @media (max-width: 600px) {
    margin-left: 0px;
    }

`,n7="/assets/flecha-ed45a95d.png";var yv={exports:{}},rs={},lP={exports:{}},r7="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",i7=r7,o7=i7;function uP(){}function cP(){}cP.resetWarningCache=uP;var s7=function(){function t(r,i,o,s,a,l){if(l!==o7){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}t.isRequired=t;function e(){return t}var n={array:t,bigint:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,elementType:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:cP,resetWarningCache:uP};return n.PropTypes=n,n};lP.exports=s7();var fw=lP.exports;const Re=Ia(fw);var wv={exports:{}},lr={},_v={exports:{}};(function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=d;/*!
 * Adapted from jQuery UI core
 *
 * http://jqueryui.com
 *
 * Copyright 2014 jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/category/ui-core/
 */var n="none",r="contents",i=/input|select|textarea|button|object|iframe/;function o(h,p){return p.getPropertyValue("overflow")!=="visible"||h.scrollWidth<=0&&h.scrollHeight<=0}function s(h){var p=h.offsetWidth<=0&&h.offsetHeight<=0;if(p&&!h.innerHTML)return!0;try{var g=window.getComputedStyle(h),T=g.getPropertyValue("display");return p?T!==r&&o(h,g):T===n}catch{return console.warn("Failed to inspect element style"),!1}}function a(h){for(var p=h,g=h.getRootNode&&h.getRootNode();p&&p!==document.body;){if(g&&p===g&&(p=g.host.parentNode),s(p))return!1;p=p.parentNode}return!0}function l(h,p){var g=h.nodeName.toLowerCase(),T=i.test(g)&&!h.disabled||g==="a"&&h.href||p;return T&&a(h)}function u(h){var p=h.getAttribute("tabindex");p===null&&(p=void 0);var g=isNaN(p);return(g||p>=0)&&l(h,!g)}function d(h){var p=[].slice.call(h.querySelectorAll("*"),0).reduce(function(g,T){return g.concat(T.shadowRoot?d(T.shadowRoot):[T])},[]);return p.filter(u)}t.exports=e.default})(_v,_v.exports);var dP=_v.exports;Object.defineProperty(lr,"__esModule",{value:!0});lr.resetState=c7;lr.log=d7;lr.handleBlur=$u;lr.handleFocus=Bu;lr.markForFocusLater=f7;lr.returnFocus=h7;lr.popWithoutFocus=p7;lr.setupScopedFocus=m7;lr.teardownScopedFocus=g7;var a7=dP,l7=u7(a7);function u7(t){return t&&t.__esModule?t:{default:t}}var Ca=[],Gs=null,Ev=!1;function c7(){Ca=[]}function d7(){}function $u(){Ev=!0}function Bu(){if(Ev){if(Ev=!1,!Gs)return;setTimeout(function(){if(!Gs.contains(document.activeElement)){var t=(0,l7.default)(Gs)[0]||Gs;t.focus()}},0)}}function f7(){Ca.push(document.activeElement)}function h7(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1,e=null;try{Ca.length!==0&&(e=Ca.pop(),e.focus({preventScroll:t}));return}catch{console.warn(["You tried to return focus to",e,"but it is not in the DOM anymore"].join(" "))}}function p7(){Ca.length>0&&Ca.pop()}function m7(t){Gs=t,window.addEventListener?(window.addEventListener("blur",$u,!1),document.addEventListener("focus",Bu,!0)):(window.attachEvent("onBlur",$u),document.attachEvent("onFocus",Bu))}function g7(){Gs=null,window.addEventListener?(window.removeEventListener("blur",$u),document.removeEventListener("focus",Bu)):(window.detachEvent("onBlur",$u),document.detachEvent("onFocus",Bu))}var xv={exports:{}};(function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=s;var n=dP,r=i(n);function i(a){return a&&a.__esModule?a:{default:a}}function o(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:document;return a.activeElement.shadowRoot?o(a.activeElement.shadowRoot):a.activeElement}function s(a,l){var u=(0,r.default)(a);if(!u.length){l.preventDefault();return}var d=void 0,h=l.shiftKey,p=u[0],g=u[u.length-1],T=o();if(a===T){if(!h)return;d=g}if(g===T&&!h&&(d=p),p===T&&h&&(d=g),d){l.preventDefault(),d.focus();return}var b=/(\bChrome\b|\bSafari\b)\//.exec(navigator.userAgent),S=b!=null&&b[1]!="Chrome"&&/\biPod\b|\biPad\b/g.exec(navigator.userAgent)==null;if(S){var E=u.indexOf(T);if(E>-1&&(E+=h?-1:1),d=u[E],typeof d>"u"){l.preventDefault(),d=h?g:p,d.focus();return}l.preventDefault(),d.focus()}}t.exports=e.default})(xv,xv.exports);var v7=xv.exports,ur={},y7=function(){},w7=y7,rr={},fP={exports:{}};/*!
  Copyright (c) 2015 Jed Watson.
  Based on code that is Copyright 2013-2015, Facebook, Inc.
  All rights reserved.
*/(function(t){(function(){var e=!!(typeof window<"u"&&window.document&&window.document.createElement),n={canUseDOM:e,canUseWorkers:typeof Worker<"u",canUseEventListeners:e&&!!(window.addEventListener||window.attachEvent),canUseViewport:e&&!!window.screen};t.exports?t.exports=n:window.ExecutionEnvironment=n})()})(fP);var _7=fP.exports;Object.defineProperty(rr,"__esModule",{value:!0});rr.canUseDOM=rr.SafeNodeList=rr.SafeHTMLCollection=void 0;var E7=_7,x7=T7(E7);function T7(t){return t&&t.__esModule?t:{default:t}}var tp=x7.default,b7=tp.canUseDOM?window.HTMLElement:{};rr.SafeHTMLCollection=tp.canUseDOM?window.HTMLCollection:{};rr.SafeNodeList=tp.canUseDOM?window.NodeList:{};rr.canUseDOM=tp.canUseDOM;rr.default=b7;Object.defineProperty(ur,"__esModule",{value:!0});ur.resetState=P7;ur.log=k7;ur.assertNodeList=hP;ur.setElement=R7;ur.validateElement=hw;ur.hide=O7;ur.show=D7;ur.documentNotReadyOrSSRTesting=N7;var S7=w7,C7=A7(S7),I7=rr;function A7(t){return t&&t.__esModule?t:{default:t}}var On=null;function P7(){On&&(On.removeAttribute?On.removeAttribute("aria-hidden"):On.length!=null?On.forEach(function(t){return t.removeAttribute("aria-hidden")}):document.querySelectorAll(On).forEach(function(t){return t.removeAttribute("aria-hidden")})),On=null}function k7(){}function hP(t,e){if(!t||!t.length)throw new Error("react-modal: No elements were found for selector "+e+".")}function R7(t){var e=t;if(typeof e=="string"&&I7.canUseDOM){var n=document.querySelectorAll(e);hP(n,e),e=n}return On=e||On,On}function hw(t){var e=t||On;return e?Array.isArray(e)||e instanceof HTMLCollection||e instanceof NodeList?e:[e]:((0,C7.default)(!1,["react-modal: App element is not defined.","Please use `Modal.setAppElement(el)` or set `appElement={el}`.","This is needed so screen readers don't see main content","when modal is opened. It is not recommended, but you can opt-out","by setting `ariaHideApp={false}`."].join(" ")),[])}function O7(t){var e=!0,n=!1,r=void 0;try{for(var i=hw(t)[Symbol.iterator](),o;!(e=(o=i.next()).done);e=!0){var s=o.value;s.setAttribute("aria-hidden","true")}}catch(a){n=!0,r=a}finally{try{!e&&i.return&&i.return()}finally{if(n)throw r}}}function D7(t){var e=!0,n=!1,r=void 0;try{for(var i=hw(t)[Symbol.iterator](),o;!(e=(o=i.next()).done);e=!0){var s=o.value;s.removeAttribute("aria-hidden")}}catch(a){n=!0,r=a}finally{try{!e&&i.return&&i.return()}finally{if(n)throw r}}}function N7(){On=null}var Ya={};Object.defineProperty(Ya,"__esModule",{value:!0});Ya.resetState=L7;Ya.log=M7;var Xl={},Jl={};function Vx(t,e){t.classList.remove(e)}function L7(){var t=document.getElementsByTagName("html")[0];for(var e in Xl)Vx(t,Xl[e]);var n=document.body;for(var r in Jl)Vx(n,Jl[r]);Xl={},Jl={}}function M7(){}var V7=function(e,n){return e[n]||(e[n]=0),e[n]+=1,n},j7=function(e,n){return e[n]&&(e[n]-=1),n},F7=function(e,n,r){r.forEach(function(i){V7(n,i),e.add(i)})},$7=function(e,n,r){r.forEach(function(i){j7(n,i),n[i]===0&&e.remove(i)})};Ya.add=function(e,n){return F7(e.classList,e.nodeName.toLowerCase()=="html"?Xl:Jl,n.split(" "))};Ya.remove=function(e,n){return $7(e.classList,e.nodeName.toLowerCase()=="html"?Xl:Jl,n.split(" "))};var Xa={};Object.defineProperty(Xa,"__esModule",{value:!0});Xa.log=U7;Xa.resetState=z7;function B7(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var pP=function t(){var e=this;B7(this,t),this.register=function(n){e.openInstances.indexOf(n)===-1&&(e.openInstances.push(n),e.emit("register"))},this.deregister=function(n){var r=e.openInstances.indexOf(n);r!==-1&&(e.openInstances.splice(r,1),e.emit("deregister"))},this.subscribe=function(n){e.subscribers.push(n)},this.emit=function(n){e.subscribers.forEach(function(r){return r(n,e.openInstances.slice())})},this.openInstances=[],this.subscribers=[]},Wf=new pP;function U7(){console.log("portalOpenInstances ----------"),console.log(Wf.openInstances.length),Wf.openInstances.forEach(function(t){return console.log(t)}),console.log("end portalOpenInstances ----------")}function z7(){Wf=new pP}Xa.default=Wf;var pw={};Object.defineProperty(pw,"__esModule",{value:!0});pw.resetState=G7;pw.log=K7;var H7=Xa,W7=q7(H7);function q7(t){return t&&t.__esModule?t:{default:t}}var $t=void 0,Qn=void 0,Bo=[];function G7(){for(var t=[$t,Qn],e=0;e<t.length;e++){var n=t[e];n&&n.parentNode&&n.parentNode.removeChild(n)}$t=Qn=null,Bo=[]}function K7(){console.log("bodyTrap ----------"),console.log(Bo.length);for(var t=[$t,Qn],e=0;e<t.length;e++){var n=t[e],r=n||{};console.log(r.nodeName,r.className,r.id)}console.log("edn bodyTrap ----------")}function jx(){Bo.length!==0&&Bo[Bo.length-1].focusContent()}function Q7(t,e){!$t&&!Qn&&($t=document.createElement("div"),$t.setAttribute("data-react-modal-body-trap",""),$t.style.position="absolute",$t.style.opacity="0",$t.setAttribute("tabindex","0"),$t.addEventListener("focus",jx),Qn=$t.cloneNode(),Qn.addEventListener("focus",jx)),Bo=e,Bo.length>0?(document.body.firstChild!==$t&&document.body.insertBefore($t,document.body.firstChild),document.body.lastChild!==Qn&&document.body.appendChild(Qn)):($t.parentElement&&$t.parentElement.removeChild($t),Qn.parentElement&&Qn.parentElement.removeChild(Qn))}W7.default.subscribe(Q7);(function(t,e){Object.defineProperty(e,"__esModule",{value:!0});var n=Object.assign||function(V){for(var z=1;z<arguments.length;z++){var Y=arguments[z];for(var N in Y)Object.prototype.hasOwnProperty.call(Y,N)&&(V[N]=Y[N])}return V},r=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(V){return typeof V}:function(V){return V&&typeof Symbol=="function"&&V.constructor===Symbol&&V!==Symbol.prototype?"symbol":typeof V},i=function(){function V(z,Y){for(var N=0;N<Y.length;N++){var M=Y[N];M.enumerable=M.enumerable||!1,M.configurable=!0,"value"in M&&(M.writable=!0),Object.defineProperty(z,M.key,M)}}return function(z,Y,N){return Y&&V(z.prototype,Y),N&&V(z,N),z}}(),o=C,s=fw,a=A(s),l=lr,u=x(l),d=v7,h=A(d),p=ur,g=x(p),T=Ya,b=x(T),S=rr,E=A(S),m=Xa,v=A(m);function x(V){if(V&&V.__esModule)return V;var z={};if(V!=null)for(var Y in V)Object.prototype.hasOwnProperty.call(V,Y)&&(z[Y]=V[Y]);return z.default=V,z}function A(V){return V&&V.__esModule?V:{default:V}}function k(V,z){if(!(V instanceof z))throw new TypeError("Cannot call a class as a function")}function P(V,z){if(!V)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return z&&(typeof z=="object"||typeof z=="function")?z:V}function R(V,z){if(typeof z!="function"&&z!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof z);V.prototype=Object.create(z&&z.prototype,{constructor:{value:V,enumerable:!1,writable:!0,configurable:!0}}),z&&(Object.setPrototypeOf?Object.setPrototypeOf(V,z):V.__proto__=z)}var O={overlay:"ReactModal__Overlay",content:"ReactModal__Content"},D=function(z){return z.code==="Tab"||z.keyCode===9},q=function(z){return z.code==="Escape"||z.keyCode===27},B=0,U=function(V){R(z,V);function z(Y){k(this,z);var N=P(this,(z.__proto__||Object.getPrototypeOf(z)).call(this,Y));return N.setOverlayRef=function(M){N.overlay=M,N.props.overlayRef&&N.props.overlayRef(M)},N.setContentRef=function(M){N.content=M,N.props.contentRef&&N.props.contentRef(M)},N.afterClose=function(){var M=N.props,W=M.appElement,$=M.ariaHideApp,ie=M.htmlOpenClassName,he=M.bodyOpenClassName,Oe=M.parentSelector,Te=Oe&&Oe().ownerDocument||document;he&&b.remove(Te.body,he),ie&&b.remove(Te.getElementsByTagName("html")[0],ie),$&&B>0&&(B-=1,B===0&&g.show(W)),N.props.shouldFocusAfterRender&&(N.props.shouldReturnFocusAfterClose?(u.returnFocus(N.props.preventScroll),u.teardownScopedFocus()):u.popWithoutFocus()),N.props.onAfterClose&&N.props.onAfterClose(),v.default.deregister(N)},N.open=function(){N.beforeOpen(),N.state.afterOpen&&N.state.beforeClose?(clearTimeout(N.closeTimer),N.setState({beforeClose:!1})):(N.props.shouldFocusAfterRender&&(u.setupScopedFocus(N.node),u.markForFocusLater()),N.setState({isOpen:!0},function(){N.openAnimationFrame=requestAnimationFrame(function(){N.setState({afterOpen:!0}),N.props.isOpen&&N.props.onAfterOpen&&N.props.onAfterOpen({overlayEl:N.overlay,contentEl:N.content})})}))},N.close=function(){N.props.closeTimeoutMS>0?N.closeWithTimeout():N.closeWithoutTimeout()},N.focusContent=function(){return N.content&&!N.contentHasFocus()&&N.content.focus({preventScroll:!0})},N.closeWithTimeout=function(){var M=Date.now()+N.props.closeTimeoutMS;N.setState({beforeClose:!0,closesAt:M},function(){N.closeTimer=setTimeout(N.closeWithoutTimeout,N.state.closesAt-Date.now())})},N.closeWithoutTimeout=function(){N.setState({beforeClose:!1,isOpen:!1,afterOpen:!1,closesAt:null},N.afterClose)},N.handleKeyDown=function(M){D(M)&&(0,h.default)(N.content,M),N.props.shouldCloseOnEsc&&q(M)&&(M.stopPropagation(),N.requestClose(M))},N.handleOverlayOnClick=function(M){N.shouldClose===null&&(N.shouldClose=!0),N.shouldClose&&N.props.shouldCloseOnOverlayClick&&(N.ownerHandlesClose()?N.requestClose(M):N.focusContent()),N.shouldClose=null},N.handleContentOnMouseUp=function(){N.shouldClose=!1},N.handleOverlayOnMouseDown=function(M){!N.props.shouldCloseOnOverlayClick&&M.target==N.overlay&&M.preventDefault()},N.handleContentOnClick=function(){N.shouldClose=!1},N.handleContentOnMouseDown=function(){N.shouldClose=!1},N.requestClose=function(M){return N.ownerHandlesClose()&&N.props.onRequestClose(M)},N.ownerHandlesClose=function(){return N.props.onRequestClose},N.shouldBeClosed=function(){return!N.state.isOpen&&!N.state.beforeClose},N.contentHasFocus=function(){return document.activeElement===N.content||N.content.contains(document.activeElement)},N.buildClassName=function(M,W){var $=(typeof W>"u"?"undefined":r(W))==="object"?W:{base:O[M],afterOpen:O[M]+"--after-open",beforeClose:O[M]+"--before-close"},ie=$.base;return N.state.afterOpen&&(ie=ie+" "+$.afterOpen),N.state.beforeClose&&(ie=ie+" "+$.beforeClose),typeof W=="string"&&W?ie+" "+W:ie},N.attributesFromObject=function(M,W){return Object.keys(W).reduce(function($,ie){return $[M+"-"+ie]=W[ie],$},{})},N.state={afterOpen:!1,beforeClose:!1},N.shouldClose=null,N.moveFromContentToOverlay=null,N}return i(z,[{key:"componentDidMount",value:function(){this.props.isOpen&&this.open()}},{key:"componentDidUpdate",value:function(N,M){this.props.isOpen&&!N.isOpen?this.open():!this.props.isOpen&&N.isOpen&&this.close(),this.props.shouldFocusAfterRender&&this.state.isOpen&&!M.isOpen&&this.focusContent()}},{key:"componentWillUnmount",value:function(){this.state.isOpen&&this.afterClose(),clearTimeout(this.closeTimer),cancelAnimationFrame(this.openAnimationFrame)}},{key:"beforeOpen",value:function(){var N=this.props,M=N.appElement,W=N.ariaHideApp,$=N.htmlOpenClassName,ie=N.bodyOpenClassName,he=N.parentSelector,Oe=he&&he().ownerDocument||document;ie&&b.add(Oe.body,ie),$&&b.add(Oe.getElementsByTagName("html")[0],$),W&&(B+=1,g.hide(M)),v.default.register(this)}},{key:"render",value:function(){var N=this.props,M=N.id,W=N.className,$=N.overlayClassName,ie=N.defaultStyles,he=N.children,Oe=W?{}:ie.content,Te=$?{}:ie.overlay;if(this.shouldBeClosed())return null;var L={ref:this.setOverlayRef,className:this.buildClassName("overlay",$),style:n({},Te,this.props.style.overlay),onClick:this.handleOverlayOnClick,onMouseDown:this.handleOverlayOnMouseDown},ye=n({id:M,ref:this.setContentRef,style:n({},Oe,this.props.style.content),className:this.buildClassName("content",W),tabIndex:"-1",onKeyDown:this.handleKeyDown,onMouseDown:this.handleContentOnMouseDown,onMouseUp:this.handleContentOnMouseUp,onClick:this.handleContentOnClick,role:this.props.role,"aria-label":this.props.contentLabel},this.attributesFromObject("aria",n({modal:!0},this.props.aria)),this.attributesFromObject("data",this.props.data||{}),{"data-testid":this.props.testId}),Me=this.props.contentElement(ye,he);return this.props.overlayElement(L,Me)}}]),z}(o.Component);U.defaultProps={style:{overlay:{},content:{}},defaultStyles:{}},U.propTypes={isOpen:a.default.bool.isRequired,defaultStyles:a.default.shape({content:a.default.object,overlay:a.default.object}),style:a.default.shape({content:a.default.object,overlay:a.default.object}),className:a.default.oneOfType([a.default.string,a.default.object]),overlayClassName:a.default.oneOfType([a.default.string,a.default.object]),parentSelector:a.default.func,bodyOpenClassName:a.default.string,htmlOpenClassName:a.default.string,ariaHideApp:a.default.bool,appElement:a.default.oneOfType([a.default.instanceOf(E.default),a.default.instanceOf(S.SafeHTMLCollection),a.default.instanceOf(S.SafeNodeList),a.default.arrayOf(a.default.instanceOf(E.default))]),onAfterOpen:a.default.func,onAfterClose:a.default.func,onRequestClose:a.default.func,closeTimeoutMS:a.default.number,shouldFocusAfterRender:a.default.bool,shouldCloseOnOverlayClick:a.default.bool,shouldReturnFocusAfterClose:a.default.bool,preventScroll:a.default.bool,role:a.default.string,contentLabel:a.default.string,aria:a.default.object,data:a.default.object,children:a.default.node,shouldCloseOnEsc:a.default.bool,overlayRef:a.default.func,contentRef:a.default.func,id:a.default.string,overlayElement:a.default.func,contentElement:a.default.func,testId:a.default.string},e.default=U,t.exports=e.default})(wv,wv.exports);var Y7=wv.exports;function mP(){var t=this.constructor.getDerivedStateFromProps(this.props,this.state);t!=null&&this.setState(t)}function gP(t){function e(n){var r=this.constructor.getDerivedStateFromProps(t,n);return r??null}this.setState(e.bind(this))}function vP(t,e){try{var n=this.props,r=this.state;this.props=t,this.state=e,this.__reactInternalSnapshotFlag=!0,this.__reactInternalSnapshot=this.getSnapshotBeforeUpdate(n,r)}finally{this.props=n,this.state=r}}mP.__suppressDeprecationWarning=!0;gP.__suppressDeprecationWarning=!0;vP.__suppressDeprecationWarning=!0;function X7(t){var e=t.prototype;if(!e||!e.isReactComponent)throw new Error("Can only polyfill class components");if(typeof t.getDerivedStateFromProps!="function"&&typeof e.getSnapshotBeforeUpdate!="function")return t;var n=null,r=null,i=null;if(typeof e.componentWillMount=="function"?n="componentWillMount":typeof e.UNSAFE_componentWillMount=="function"&&(n="UNSAFE_componentWillMount"),typeof e.componentWillReceiveProps=="function"?r="componentWillReceiveProps":typeof e.UNSAFE_componentWillReceiveProps=="function"&&(r="UNSAFE_componentWillReceiveProps"),typeof e.componentWillUpdate=="function"?i="componentWillUpdate":typeof e.UNSAFE_componentWillUpdate=="function"&&(i="UNSAFE_componentWillUpdate"),n!==null||r!==null||i!==null){var o=t.displayName||t.name,s=typeof t.getDerivedStateFromProps=="function"?"getDerivedStateFromProps()":"getSnapshotBeforeUpdate()";throw Error(`Unsafe legacy lifecycles will not be called for components using new component APIs.

`+o+" uses "+s+" but also contains the following legacy lifecycles:"+(n!==null?`
  `+n:"")+(r!==null?`
  `+r:"")+(i!==null?`
  `+i:"")+`

The above lifecycles should be removed. Learn more about this warning here:
https://fb.me/react-async-component-lifecycle-hooks`)}if(typeof t.getDerivedStateFromProps=="function"&&(e.componentWillMount=mP,e.componentWillReceiveProps=gP),typeof e.getSnapshotBeforeUpdate=="function"){if(typeof e.componentDidUpdate!="function")throw new Error("Cannot polyfill getSnapshotBeforeUpdate() for components that do not define componentDidUpdate() on the prototype");e.componentWillUpdate=vP;var a=e.componentDidUpdate;e.componentDidUpdate=function(u,d,h){var p=this.__reactInternalSnapshotFlag?this.__reactInternalSnapshot:h;a.call(this,u,d,p)}}return t}const J7=Object.freeze(Object.defineProperty({__proto__:null,polyfill:X7},Symbol.toStringTag,{value:"Module"})),Z7=sO(J7);Object.defineProperty(rs,"__esModule",{value:!0});rs.bodyOpenClassName=rs.portalClassName=void 0;var Fx=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},eH=function(){function t(e,n){for(var r=0;r<n.length;r++){var i=n[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),yP=C,qf=wc(yP),tH=Ty,Gf=wc(tH),nH=fw,ce=wc(nH),rH=Y7,$x=wc(rH),iH=ur,oH=aH(iH),Li=rr,Bx=wc(Li),sH=Z7;function aH(t){if(t&&t.__esModule)return t;var e={};if(t!=null)for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e}function wc(t){return t&&t.__esModule?t:{default:t}}function lH(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function Ux(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e&&(typeof e=="object"||typeof e=="function")?e:t}function uH(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}var cH=rs.portalClassName="ReactModalPortal",dH=rs.bodyOpenClassName="ReactModal__Body--open",bo=Li.canUseDOM&&Gf.default.createPortal!==void 0,zx=function(e){return document.createElement(e)},Hx=function(){return bo?Gf.default.createPortal:Gf.default.unstable_renderSubtreeIntoContainer};function ad(t){return t()}var _c=function(t){uH(e,t);function e(){var n,r,i,o;lH(this,e);for(var s=arguments.length,a=Array(s),l=0;l<s;l++)a[l]=arguments[l];return o=(r=(i=Ux(this,(n=e.__proto__||Object.getPrototypeOf(e)).call.apply(n,[this].concat(a))),i),i.removePortal=function(){!bo&&Gf.default.unmountComponentAtNode(i.node);var u=ad(i.props.parentSelector);u&&u.contains(i.node)?u.removeChild(i.node):console.warn('React-Modal: "parentSelector" prop did not returned any DOM element. Make sure that the parent element is unmounted to avoid any memory leaks.')},i.portalRef=function(u){i.portal=u},i.renderPortal=function(u){var d=Hx(),h=d(i,qf.default.createElement($x.default,Fx({defaultStyles:e.defaultStyles},u)),i.node);i.portalRef(h)},r),Ux(i,o)}return eH(e,[{key:"componentDidMount",value:function(){if(Li.canUseDOM){bo||(this.node=zx("div")),this.node.className=this.props.portalClassName;var r=ad(this.props.parentSelector);r.appendChild(this.node),!bo&&this.renderPortal(this.props)}}},{key:"getSnapshotBeforeUpdate",value:function(r){var i=ad(r.parentSelector),o=ad(this.props.parentSelector);return{prevParent:i,nextParent:o}}},{key:"componentDidUpdate",value:function(r,i,o){if(Li.canUseDOM){var s=this.props,a=s.isOpen,l=s.portalClassName;r.portalClassName!==l&&(this.node.className=l);var u=o.prevParent,d=o.nextParent;d!==u&&(u.removeChild(this.node),d.appendChild(this.node)),!(!r.isOpen&&!a)&&!bo&&this.renderPortal(this.props)}}},{key:"componentWillUnmount",value:function(){if(!(!Li.canUseDOM||!this.node||!this.portal)){var r=this.portal.state,i=Date.now(),o=r.isOpen&&this.props.closeTimeoutMS&&(r.closesAt||i+this.props.closeTimeoutMS);o?(r.beforeClose||this.portal.closeWithTimeout(),setTimeout(this.removePortal,o-i)):this.removePortal()}}},{key:"render",value:function(){if(!Li.canUseDOM||!bo)return null;!this.node&&bo&&(this.node=zx("div"));var r=Hx();return r(qf.default.createElement($x.default,Fx({ref:this.portalRef,defaultStyles:e.defaultStyles},this.props)),this.node)}}],[{key:"setAppElement",value:function(r){oH.setElement(r)}}]),e}(yP.Component);_c.propTypes={isOpen:ce.default.bool.isRequired,style:ce.default.shape({content:ce.default.object,overlay:ce.default.object}),portalClassName:ce.default.string,bodyOpenClassName:ce.default.string,htmlOpenClassName:ce.default.string,className:ce.default.oneOfType([ce.default.string,ce.default.shape({base:ce.default.string.isRequired,afterOpen:ce.default.string.isRequired,beforeClose:ce.default.string.isRequired})]),overlayClassName:ce.default.oneOfType([ce.default.string,ce.default.shape({base:ce.default.string.isRequired,afterOpen:ce.default.string.isRequired,beforeClose:ce.default.string.isRequired})]),appElement:ce.default.oneOfType([ce.default.instanceOf(Bx.default),ce.default.instanceOf(Li.SafeHTMLCollection),ce.default.instanceOf(Li.SafeNodeList),ce.default.arrayOf(ce.default.instanceOf(Bx.default))]),onAfterOpen:ce.default.func,onRequestClose:ce.default.func,closeTimeoutMS:ce.default.number,ariaHideApp:ce.default.bool,shouldFocusAfterRender:ce.default.bool,shouldCloseOnOverlayClick:ce.default.bool,shouldReturnFocusAfterClose:ce.default.bool,preventScroll:ce.default.bool,parentSelector:ce.default.func,aria:ce.default.object,data:ce.default.object,role:ce.default.string,contentLabel:ce.default.string,shouldCloseOnEsc:ce.default.bool,overlayRef:ce.default.func,contentRef:ce.default.func,id:ce.default.string,overlayElement:ce.default.func,contentElement:ce.default.func};_c.defaultProps={isOpen:!1,portalClassName:cH,bodyOpenClassName:dH,role:"dialog",ariaHideApp:!0,closeTimeoutMS:0,shouldFocusAfterRender:!0,shouldCloseOnEsc:!0,shouldCloseOnOverlayClick:!0,shouldReturnFocusAfterClose:!0,preventScroll:!1,parentSelector:function(){return document.body},overlayElement:function(e,n){return qf.default.createElement("div",e,n)},contentElement:function(e,n){return qf.default.createElement("div",e,n)}};_c.defaultStyles={overlay:{position:"fixed",top:0,left:0,right:0,bottom:0,backgroundColor:"rgba(255, 255, 255, 0.75)"},content:{position:"absolute",top:"40px",left:"40px",right:"40px",bottom:"40px",border:"1px solid #ccc",background:"#fff",overflow:"auto",WebkitOverflowScrolling:"touch",borderRadius:"4px",outline:"none",padding:"20px"}};(0,sH.polyfill)(_c);rs.default=_c;(function(t,e){Object.defineProperty(e,"__esModule",{value:!0});var n=rs,r=i(n);function i(o){return o&&o.__esModule?o:{default:o}}e.default=r.default,t.exports=e.default})(yv,yv.exports);var fH=yv.exports;const hH=Ia(fH),pH=j.img`
  width: 100%;
  height: auto;
`,mH=j.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`,gH=j.button`
  width: 50%;
  height: 40px;
  font-size: 18px;
  font-weight: bold;
  align-self: center;
  border-radius: 12px;
  border: none;
  background: linear-gradient(
    0deg,
    #5fbe6f 8.38%,
    rgba(0, 254, 41, 0.4) 113.51%
  );
  cursor: pointer;

  &:hover {
    background: rgba(0, 0, 0, 0.7);
    color: wheat;
  }
`,vH=({images:t,closeModal:e})=>_.jsxs("div",{children:[_.jsx(uw,{slidesPerView:1,pagination:{clickable:!0},loop:!0,navigation:!0,modules:[oP,iP],children:t.map((n,r)=>_.jsx(cw,{children:_.jsx(pH,{src:n.urlImage,alt:"Imagen"})},r))}),_.jsx(mH,{children:_.jsx(gH,{onClick:e,children:"Cerrar"})})]}),Tv=async()=>{const t=st(at,"atributos");try{return(await qa(t)).docs.map(r=>({id:r.id,...r.data()}))}catch(e){console.log(e)}},wP=async t=>{try{const e=Ga(Ka,`atributosImagenes/${t.name}`);return await Z0(e,t),await ew(e)}catch(e){console.log(e)}},yH=async t=>{try{const e=iw(t),n=Ga(Ka,`${e}`);await tw(n),console.log("Imagen eliminada con éxito")}catch(e){console.log(e)}},wH=async t=>{try{t.urlImage=await wP(t.imagen);const{imagen:e,...n}=t,r=st(at,"atributos"),o=(await ju(r,n)).id,s=rn(r,o),a=await ui(s,{id:o},{merge:!0});return console.log("Atributo creado exitosamente",a),a}catch(e){return console.log("Error al guardar el atributo en BD",e),null}},_H=async t=>{try{await a9(t);const e=st(at,"atributos"),n=rn(e,t),i=(await yc(n)).data(),o=await W0(n);return await yH(i.urlImage),o}catch(e){console.log(e)}},EH=async(t,e)=>{try{e.urlImage=await wP(e.imagen);const n=st(at,"atributos"),{imagen:r,...i}=e,o=rn(n,t);await ui(o,i,{merge:!0}),console.log("Edicion correcta del atributo :",t)}catch(n){console.log(n)}},xH=async t=>{try{const e=st(at,"atributos"),n=rn(e,t),r=await yc(n);return r.exists()?r.data():(console.log("El documento no existe"),null)}catch(e){return console.log(e),null}},TH={content:{top:"55%",left:"50%",right:"auto",bottom:"auto",marginRight:"-50%",transform:"translate(-50%, -50%)",width:"50%",maxWidth:"1000px",height:"80vh"}},bH=()=>{const{id:t}=uL(),{categorias:e}=C.useContext(Lt).contextValue,[n,r]=C.useState(null),[i,o]=C.useState(null),[s,a]=C.useState(0),[l,u]=C.useState({}),[d,h]=C.useState(!1);C.useEffect(()=>{(async()=>{var O;const P=await s9(t);r(P),o((O=P.imagenes[0])==null?void 0:O.urlImage);const R=await Promise.all(P.detalles.map(async D=>await xH(D)));u(R)})(),window.scrollTo(0,0)},[]);const p=k=>e.find(R=>R.id===k).titulo,g=k=>{s!==k&&(o(S[k].urlImagen),a(k))},T=()=>{console.log("click en la imagen"),h(!0)},b=()=>{h(!1)};if(!n)return _.jsx("p",{children:"Cargando..."});const{imagenes:S,titulo:E,precio:m,descripcion:v,categoria:x,detalles:A}=n;return _.jsxs(_.Fragment,{children:[_.jsxs(B8,{children:[_.jsxs(U8,{children:[_.jsxs(z8,{children:[_.jsxs(Ht,{to:"/",children:[_.jsx("img",{src:n7,alt:"flecha"}),"Volver"]}),_.jsx(H8,{children:E})]}),_.jsxs(W8,{children:[_.jsxs(q8,{children:[_.jsx(G8,{children:i!==void 0&&_.jsx("img",{src:i,alt:"Imagen",onClick:T})}),_.jsx(K8,{children:n.imagenes.length>0&&n.imagenes.map((k,P)=>_.jsx("img",{src:k.urlImage,alt:k.urlImage,onClick:()=>g(P),className:s===P?"selected":""},P))})]}),_.jsxs(Q8,{children:[_.jsx(Y8,{children:v}),_.jsxs(X8,{children:["Categoría: ",p(x)]}),_.jsxs(J8,{children:["$ ",m," x día"]}),A.length?_.jsxs(Z8,{children:[_.jsx("p",{children:"Que incluye:"}),_.jsx(t7,{children:_.jsx("ul",{children:l.length>0&&l.map((k,P)=>_.jsxs("li",{children:[_.jsx("img",{src:k.urlImage,alt:k.titulo}),_.jsx("p",{children:k.titulo})]},P))})})]}):null,_.jsx(e7,{children:"Reservar"})]})]})]}),_.jsx(hH,{isOpen:d,style:TH,ariaHideApp:!1,children:_.jsx(vH,{images:S,closeModal:b})})]}),_.jsx(ep,{})]})},SH=j.div`
  margin-top: 110px;
  width: 100%;
  background-color: rgba(225, 225, 225, 0.7);
  box-shadow: 0px 1px 4px 5px rgba(0, 0, 0, 0.2);
  border-radius: 8px;
  padding: 14px;

  @media (max-width: 850px) {
    margin-top: 50px;
    background: none;
  }
`,CH=j.h1`
  color: white;
  text-align: center;
  text-transform: uppercase;
  padding: 10px;
  font-size: 40px;
`,IH=j.div`
  margin-top: 32px;
  width: 100%;
  border-radius: 8px;
  background-color: rgba(225, 225, 225, 0.5);
  box-shadow: 0px 1px 4px 5px rgba(0, 0, 0, 0.2);
`,AH=j.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  p {
    font-size: 80px;
    font-weight: 900;
    color: yellow;
    background-color: yellowgreen;
    padding: 10px 30px;
    border-radius: 8px;
    text-transform: uppercase;

    @media (max-width: 550px) {
      font-size: 50px;
    }
  }

  img {
    width: 100%;
    height: auto;
  }
`,PH=j.h2`
  margin: 0 auto;
  text-align: center;
  padding: 10px 40px;
  font-size: 50px;
  color: white;
  font-weight: 700;

  @media (max-width: 550px) {
    font-size: 30px;
  }
`,kH=j.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 14px;
  border-radius: 8px;
  background: rgba(100, 100, 100, 0.3);
`,gl=j.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
  width: 150px;
  height: 80px;
  font-size: 24px;
  align-self: center;
  border-radius: 12px;
  border: none;
  background: linear-gradient(
    0deg,
    #5fbe6f 8.38%,
    rgba(0, 254, 41, 0.4) 113.51%
  );
  cursor: pointer;
  box-shadow: -2px 6px 4px 1px rgba(100, 100, 100, 0.62);

  &:hover {
    background: rgba(0, 0, 0, 0.7);
    color: wheat;
  }
`;function RH(t){return zn({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{fillRule:"evenodd",d:"M15.528 2.973a.75.75 0 0 1 .472.696v8.662a.75.75 0 0 1-.472.696l-7.25 2.9a.75.75 0 0 1-.557 0l-7.25-2.9A.75.75 0 0 1 0 12.331V3.669a.75.75 0 0 1 .471-.696L7.443.184l.01-.003.268-.108a.75.75 0 0 1 .558 0l.269.108.01.003 6.97 2.789ZM10.404 2 4.25 4.461 1.846 3.5 1 3.839v.4l6.5 2.6v7.922l.5.2.5-.2V6.84l6.5-2.6v-.4l-.846-.339L8 5.961 5.596 5l6.154-2.461L10.404 2Z"}}]})(t)}function OH(t){return zn({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M14.5 3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h13zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-13z"}},{tag:"path",attr:{d:"M7 5.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm-1.496-.854a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 1 1 .708-.708l.146.147 1.146-1.147a.5.5 0 0 1 .708 0zM7 9.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm-1.496-.854a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 0 1 .708-.708l.146.147 1.146-1.147a.5.5 0 0 1 .708 0z"}}]})(t)}function DH(t){return zn({tag:"svg",attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM0 482.3C0 383.8 79.8 304 178.3 304h91.4C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3zM609.3 512H471.4c5.4-9.4 8.6-20.3 8.6-32v-8c0-60.7-27.1-115.2-69.8-151.8c2.4-.1 4.7-.2 7.1-.2h61.4C567.8 320 640 392.2 640 481.3c0 17-13.8 30.7-30.7 30.7zM432 256c-31 0-59-12.6-79.3-32.9C372.4 196.5 384 163.6 384 128c0-26.8-6.6-52.1-18.3-74.3C384.3 40.1 407.2 32 432 32c61.9 0 112 50.1 112 112s-50.1 112-112 112z"}}]})(t)}function NH(t){return zn({tag:"svg",attr:{version:"1.1",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M12 10v-2h-5v-2h5v-2l3 3zM11 9v4h-5v3l-6-3v-13h11v5h-1v-4h-8l4 2v9h4v-3z"}}]})(t)}const LH=t=>{const{handleClick:e}=t;return _.jsxs(kH,{children:[_.jsxs(gl,{onClick:()=>e("SectionProducts"),children:[_.jsx(RH,{}),"Productos"]}),_.jsxs(gl,{onClick:()=>e("ListUsers"),children:[_.jsx(DH,{}),"Usuarios"]}),_.jsxs(gl,{onClick:()=>e("SectionCategories"),children:[_.jsx(D9,{}),"Categorías"]}),_.jsxs(gl,{onClick:()=>e("SectionAtributos"),children:[_.jsx(OH,{}),"Atributos"]}),_.jsxs(gl,{onClick:()=>e("Exit"),children:[_.jsx(NH,{}),"Salir"]})]})},MH=j.div`
  width: 100%;
  padding: 14px;
  display: flex;
  flex-direction: column;
  gap: 5px;
  margin-bottom: 100px;
`,VH=j.div`
  display: flex;
  justify-content: space-around;
  height: 32px;
  font-size: 20px;
  text-transform: uppercase;
  color: white;
  background-color: rgba(225, 225, 225, 0.9);
  padding: 8px;
  height: fit-content;
  border-radius: 8px;
  margin-bottom: 10px;

  :nth-child(1) {
    width: 250px;
  }
`,jH=j.div`
  display: flex;
  justify-content: space-between;
  height: 40px;
`,FH=j.p`
  width: 300px;
`,$H=j.div`
  width: 150px;
  display: flex;
  justify-content: space-between;
  gap: 5px;

  :first-child {
    background-color: #80b918;

    &:hover {
      color: white;
    }
  }

  :last-child {
    background-color: #d80032;

    &:hover {
      color: white;
    }
  }

  button {
    width: 70px;
    height: 32px;
    border: none;
    border-radius: 8px;
    cursor: pointer;
  }
`,BH=j.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
`,UH=j.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px;
  border-radius: 16px;
  font-size: 16px;
  background-color: #d8f3dc;
  border: 1px solid green;
  color: green;
  cursor: pointer;

  svg {
    width: 32px;
    height: 32px;
    fill: green;
  }

  &:hover {
    border: 1px solid white;
    color: black;
    background-color: white;
  }
`;j.div`
  width: 50%;
  display: flex;
  justify-content: space-evenly;
  margin: 10px auto;
`;j.button`
  border: none;
  padding: 8px;
  border-radius: 8px;
  width: 80px;
  background-color: #48cae4;

  &:disabled {
    background-color: #7772;
  }
`;j.button`
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px;
  border-radius: 8px;
  width: 20px;
  background-color: #48cae4;

  &:disabled {
    background-color: #7772;
  }
`;function _P(t){var e,n,r="";if(typeof t=="string"||typeof t=="number")r+=t;else if(typeof t=="object")if(Array.isArray(t))for(e=0;e<t.length;e++)t[e]&&(n=_P(t[e]))&&(r&&(r+=" "),r+=n);else for(e in t)t[e]&&(r&&(r+=" "),r+=e);return r}function Mi(){for(var t,e,n=0,r="";n<arguments.length;)(t=arguments[n++])&&(e=_P(t))&&(r&&(r+=" "),r+=e);return r}const Zl=t=>typeof t=="number"&&!isNaN(t),is=t=>typeof t=="string",hn=t=>typeof t=="function",Vd=t=>is(t)||hn(t)?t:null,bm=t=>C.isValidElement(t)||is(t)||hn(t)||Zl(t);function zH(t,e,n){n===void 0&&(n=300);const{scrollHeight:r,style:i}=t;requestAnimationFrame(()=>{i.minHeight="initial",i.height=r+"px",i.transition=`all ${n}ms`,requestAnimationFrame(()=>{i.height="0",i.padding="0",i.margin="0",setTimeout(e,n)})})}function np(t){let{enter:e,exit:n,appendPosition:r=!1,collapse:i=!0,collapseDuration:o=300}=t;return function(s){let{children:a,position:l,preventExitTransition:u,done:d,nodeRef:h,isIn:p}=s;const g=r?`${e}--${l}`:e,T=r?`${n}--${l}`:n,b=C.useRef(0);return C.useLayoutEffect(()=>{const S=h.current,E=g.split(" "),m=v=>{v.target===h.current&&(S.dispatchEvent(new Event("d")),S.removeEventListener("animationend",m),S.removeEventListener("animationcancel",m),b.current===0&&v.type!=="animationcancel"&&S.classList.remove(...E))};S.classList.add(...E),S.addEventListener("animationend",m),S.addEventListener("animationcancel",m)},[]),C.useEffect(()=>{const S=h.current,E=()=>{S.removeEventListener("animationend",E),i?zH(S,d,o):d()};p||(u?E():(b.current=1,S.className+=` ${T}`,S.addEventListener("animationend",E)))},[p]),G.createElement(G.Fragment,null,a)}}function Wx(t,e){return t!=null?{content:t.content,containerId:t.props.containerId,id:t.props.toastId,theme:t.props.theme,type:t.props.type,data:t.props.data||{},isLoading:t.props.isLoading,icon:t.props.icon,status:e}:{}}const Dn={list:new Map,emitQueue:new Map,on(t,e){return this.list.has(t)||this.list.set(t,[]),this.list.get(t).push(e),this},off(t,e){if(e){const n=this.list.get(t).filter(r=>r!==e);return this.list.set(t,n),this}return this.list.delete(t),this},cancelEmit(t){const e=this.emitQueue.get(t);return e&&(e.forEach(clearTimeout),this.emitQueue.delete(t)),this},emit(t){this.list.has(t)&&this.list.get(t).forEach(e=>{const n=setTimeout(()=>{e(...[].slice.call(arguments,1))},0);this.emitQueue.has(t)||this.emitQueue.set(t,[]),this.emitQueue.get(t).push(n)})}},ld=t=>{let{theme:e,type:n,...r}=t;return G.createElement("svg",{viewBox:"0 0 24 24",width:"100%",height:"100%",fill:e==="colored"?"currentColor":`var(--toastify-icon-color-${n})`,...r})},Sm={info:function(t){return G.createElement(ld,{...t},G.createElement("path",{d:"M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z"}))},warning:function(t){return G.createElement(ld,{...t},G.createElement("path",{d:"M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z"}))},success:function(t){return G.createElement(ld,{...t},G.createElement("path",{d:"M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z"}))},error:function(t){return G.createElement(ld,{...t},G.createElement("path",{d:"M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z"}))},spinner:function(){return G.createElement("div",{className:"Toastify__spinner"})}};function HH(t){const[,e]=C.useReducer(g=>g+1,0),[n,r]=C.useState([]),i=C.useRef(null),o=C.useRef(new Map).current,s=g=>n.indexOf(g)!==-1,a=C.useRef({toastKey:1,displayedToast:0,count:0,queue:[],props:t,containerId:null,isToastActive:s,getToast:g=>o.get(g)}).current;function l(g){let{containerId:T}=g;const{limit:b}=a.props;!b||T&&a.containerId!==T||(a.count-=a.queue.length,a.queue=[])}function u(g){r(T=>g==null?[]:T.filter(b=>b!==g))}function d(){const{toastContent:g,toastProps:T,staleId:b}=a.queue.shift();p(g,T,b)}function h(g,T){let{delay:b,staleId:S,...E}=T;if(!bm(g)||function(B){return!i.current||a.props.enableMultiContainer&&B.containerId!==a.props.containerId||o.has(B.toastId)&&B.updateId==null}(E))return;const{toastId:m,updateId:v,data:x}=E,{props:A}=a,k=()=>u(m),P=v==null;P&&a.count++;const R={...A,style:A.toastStyle,key:a.toastKey++,...Object.fromEntries(Object.entries(E).filter(B=>{let[U,V]=B;return V!=null})),toastId:m,updateId:v,data:x,closeToast:k,isIn:!1,className:Vd(E.className||A.toastClassName),bodyClassName:Vd(E.bodyClassName||A.bodyClassName),progressClassName:Vd(E.progressClassName||A.progressClassName),autoClose:!E.isLoading&&(O=E.autoClose,D=A.autoClose,O===!1||Zl(O)&&O>0?O:D),deleteToast(){const B=Wx(o.get(m),"removed");o.delete(m),Dn.emit(4,B);const U=a.queue.length;if(a.count=m==null?a.count-a.displayedToast:a.count-1,a.count<0&&(a.count=0),U>0){const V=m==null?a.props.limit:1;if(U===1||V===1)a.displayedToast++,d();else{const z=V>U?U:V;a.displayedToast=z;for(let Y=0;Y<z;Y++)d()}}else e()}};var O,D;R.iconOut=function(B){let{theme:U,type:V,isLoading:z,icon:Y}=B,N=null;const M={theme:U,type:V};return Y===!1||(hn(Y)?N=Y(M):C.isValidElement(Y)?N=C.cloneElement(Y,M):is(Y)||Zl(Y)?N=Y:z?N=Sm.spinner():(W=>W in Sm)(V)&&(N=Sm[V](M))),N}(R),hn(E.onOpen)&&(R.onOpen=E.onOpen),hn(E.onClose)&&(R.onClose=E.onClose),R.closeButton=A.closeButton,E.closeButton===!1||bm(E.closeButton)?R.closeButton=E.closeButton:E.closeButton===!0&&(R.closeButton=!bm(A.closeButton)||A.closeButton);let q=g;C.isValidElement(g)&&!is(g.type)?q=C.cloneElement(g,{closeToast:k,toastProps:R,data:x}):hn(g)&&(q=g({closeToast:k,toastProps:R,data:x})),A.limit&&A.limit>0&&a.count>A.limit&&P?a.queue.push({toastContent:q,toastProps:R,staleId:S}):Zl(b)?setTimeout(()=>{p(q,R,S)},b):p(q,R,S)}function p(g,T,b){const{toastId:S}=T;b&&o.delete(b);const E={content:g,props:T};o.set(S,E),r(m=>[...m,S].filter(v=>v!==b)),Dn.emit(4,Wx(E,E.props.updateId==null?"added":"updated"))}return C.useEffect(()=>(a.containerId=t.containerId,Dn.cancelEmit(3).on(0,h).on(1,g=>i.current&&u(g)).on(5,l).emit(2,a),()=>{o.clear(),Dn.emit(3,a)}),[]),C.useEffect(()=>{a.props=t,a.isToastActive=s,a.displayedToast=n.length}),{getToastToRender:function(g){const T=new Map,b=Array.from(o.values());return t.newestOnTop&&b.reverse(),b.forEach(S=>{const{position:E}=S.props;T.has(E)||T.set(E,[]),T.get(E).push(S)}),Array.from(T,S=>g(S[0],S[1]))},containerRef:i,isToastActive:s}}function qx(t){return t.targetTouches&&t.targetTouches.length>=1?t.targetTouches[0].clientX:t.clientX}function Gx(t){return t.targetTouches&&t.targetTouches.length>=1?t.targetTouches[0].clientY:t.clientY}function WH(t){const[e,n]=C.useState(!1),[r,i]=C.useState(!1),o=C.useRef(null),s=C.useRef({start:0,x:0,y:0,delta:0,removalDistance:0,canCloseOnClick:!0,canDrag:!1,boundingRect:null,didMove:!1}).current,a=C.useRef(t),{autoClose:l,pauseOnHover:u,closeToast:d,onClick:h,closeOnClick:p}=t;function g(x){if(t.draggable){x.nativeEvent.type==="touchstart"&&x.nativeEvent.preventDefault(),s.didMove=!1,document.addEventListener("mousemove",E),document.addEventListener("mouseup",m),document.addEventListener("touchmove",E),document.addEventListener("touchend",m);const A=o.current;s.canCloseOnClick=!0,s.canDrag=!0,s.boundingRect=A.getBoundingClientRect(),A.style.transition="",s.x=qx(x.nativeEvent),s.y=Gx(x.nativeEvent),t.draggableDirection==="x"?(s.start=s.x,s.removalDistance=A.offsetWidth*(t.draggablePercent/100)):(s.start=s.y,s.removalDistance=A.offsetHeight*(t.draggablePercent===80?1.5*t.draggablePercent:t.draggablePercent/100))}}function T(x){if(s.boundingRect){const{top:A,bottom:k,left:P,right:R}=s.boundingRect;x.nativeEvent.type!=="touchend"&&t.pauseOnHover&&s.x>=P&&s.x<=R&&s.y>=A&&s.y<=k?S():b()}}function b(){n(!0)}function S(){n(!1)}function E(x){const A=o.current;s.canDrag&&A&&(s.didMove=!0,e&&S(),s.x=qx(x),s.y=Gx(x),s.delta=t.draggableDirection==="x"?s.x-s.start:s.y-s.start,s.start!==s.x&&(s.canCloseOnClick=!1),A.style.transform=`translate${t.draggableDirection}(${s.delta}px)`,A.style.opacity=""+(1-Math.abs(s.delta/s.removalDistance)))}function m(){document.removeEventListener("mousemove",E),document.removeEventListener("mouseup",m),document.removeEventListener("touchmove",E),document.removeEventListener("touchend",m);const x=o.current;if(s.canDrag&&s.didMove&&x){if(s.canDrag=!1,Math.abs(s.delta)>s.removalDistance)return i(!0),void t.closeToast();x.style.transition="transform 0.2s, opacity 0.2s",x.style.transform=`translate${t.draggableDirection}(0)`,x.style.opacity="1"}}C.useEffect(()=>{a.current=t}),C.useEffect(()=>(o.current&&o.current.addEventListener("d",b,{once:!0}),hn(t.onOpen)&&t.onOpen(C.isValidElement(t.children)&&t.children.props),()=>{const x=a.current;hn(x.onClose)&&x.onClose(C.isValidElement(x.children)&&x.children.props)}),[]),C.useEffect(()=>(t.pauseOnFocusLoss&&(document.hasFocus()||S(),window.addEventListener("focus",b),window.addEventListener("blur",S)),()=>{t.pauseOnFocusLoss&&(window.removeEventListener("focus",b),window.removeEventListener("blur",S))}),[t.pauseOnFocusLoss]);const v={onMouseDown:g,onTouchStart:g,onMouseUp:T,onTouchEnd:T};return l&&u&&(v.onMouseEnter=S,v.onMouseLeave=b),p&&(v.onClick=x=>{h&&h(x),s.canCloseOnClick&&d()}),{playToast:b,pauseToast:S,isRunning:e,preventExitTransition:r,toastRef:o,eventHandlers:v}}function EP(t){let{closeToast:e,theme:n,ariaLabel:r="close"}=t;return G.createElement("button",{className:`Toastify__close-button Toastify__close-button--${n}`,type:"button",onClick:i=>{i.stopPropagation(),e(i)},"aria-label":r},G.createElement("svg",{"aria-hidden":"true",viewBox:"0 0 14 16"},G.createElement("path",{fillRule:"evenodd",d:"M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z"})))}function qH(t){let{delay:e,isRunning:n,closeToast:r,type:i="default",hide:o,className:s,style:a,controlledProgress:l,progress:u,rtl:d,isIn:h,theme:p}=t;const g=o||l&&u===0,T={...a,animationDuration:`${e}ms`,animationPlayState:n?"running":"paused",opacity:g?0:1};l&&(T.transform=`scaleX(${u})`);const b=Mi("Toastify__progress-bar",l?"Toastify__progress-bar--controlled":"Toastify__progress-bar--animated",`Toastify__progress-bar-theme--${p}`,`Toastify__progress-bar--${i}`,{"Toastify__progress-bar--rtl":d}),S=hn(s)?s({rtl:d,type:i,defaultClassName:b}):Mi(b,s);return G.createElement("div",{role:"progressbar","aria-hidden":g?"true":"false","aria-label":"notification timer",className:S,style:T,[l&&u>=1?"onTransitionEnd":"onAnimationEnd"]:l&&u<1?null:()=>{h&&r()}})}const GH=t=>{const{isRunning:e,preventExitTransition:n,toastRef:r,eventHandlers:i}=WH(t),{closeButton:o,children:s,autoClose:a,onClick:l,type:u,hideProgressBar:d,closeToast:h,transition:p,position:g,className:T,style:b,bodyClassName:S,bodyStyle:E,progressClassName:m,progressStyle:v,updateId:x,role:A,progress:k,rtl:P,toastId:R,deleteToast:O,isIn:D,isLoading:q,iconOut:B,closeOnClick:U,theme:V}=t,z=Mi("Toastify__toast",`Toastify__toast-theme--${V}`,`Toastify__toast--${u}`,{"Toastify__toast--rtl":P},{"Toastify__toast--close-on-click":U}),Y=hn(T)?T({rtl:P,position:g,type:u,defaultClassName:z}):Mi(z,T),N=!!k||!a,M={closeToast:h,type:u,theme:V};let W=null;return o===!1||(W=hn(o)?o(M):C.isValidElement(o)?C.cloneElement(o,M):EP(M)),G.createElement(p,{isIn:D,done:O,position:g,preventExitTransition:n,nodeRef:r},G.createElement("div",{id:R,onClick:l,className:Y,...i,style:b,ref:r},G.createElement("div",{...D&&{role:A},className:hn(S)?S({type:u}):Mi("Toastify__toast-body",S),style:E},B!=null&&G.createElement("div",{className:Mi("Toastify__toast-icon",{"Toastify--animate-icon Toastify__zoom-enter":!q})},B),G.createElement("div",null,s)),W,G.createElement(qH,{...x&&!N?{key:`pb-${x}`}:{},rtl:P,theme:V,delay:a,isRunning:e,isIn:D,closeToast:h,hide:d,type:u,style:v,className:m,controlledProgress:N,progress:k||0})))},rp=function(t,e){return e===void 0&&(e=!1),{enter:`Toastify--animate Toastify__${t}-enter`,exit:`Toastify--animate Toastify__${t}-exit`,appendPosition:e}},KH=np(rp("bounce",!0));np(rp("slide",!0));np(rp("zoom"));np(rp("flip"));const ci=C.forwardRef((t,e)=>{const{getToastToRender:n,containerRef:r,isToastActive:i}=HH(t),{className:o,style:s,rtl:a,containerId:l}=t;function u(d){const h=Mi("Toastify__toast-container",`Toastify__toast-container--${d}`,{"Toastify__toast-container--rtl":a});return hn(o)?o({position:d,rtl:a,defaultClassName:h}):Mi(h,Vd(o))}return C.useEffect(()=>{e&&(e.current=r.current)},[]),G.createElement("div",{ref:r,className:"Toastify",id:l},n((d,h)=>{const p=h.length?{...s}:{...s,pointerEvents:"none"};return G.createElement("div",{className:u(d),style:p,key:`container-${d}`},h.map((g,T)=>{let{content:b,props:S}=g;return G.createElement(GH,{...S,isIn:i(S.toastId),style:{...S.style,"--nth":T+1,"--len":h.length},key:`toast-${S.key}`},b)}))}))});ci.displayName="ToastContainer",ci.defaultProps={position:"top-right",transition:KH,autoClose:5e3,closeButton:EP,pauseOnHover:!0,pauseOnFocusLoss:!0,closeOnClick:!0,draggable:!0,draggablePercent:80,draggableDirection:"x",role:"alert",theme:"light"};let Cm,So=new Map,kl=[],QH=1;function xP(){return""+QH++}function YH(t){return t&&(is(t.toastId)||Zl(t.toastId))?t.toastId:xP()}function eu(t,e){return So.size>0?Dn.emit(0,t,e):kl.push({content:t,options:e}),e.toastId}function Kf(t,e){return{...e,type:e&&e.type||t,toastId:YH(e)}}function ud(t){return(e,n)=>eu(e,Kf(t,n))}function Ae(t,e){return eu(t,Kf("default",e))}Ae.loading=(t,e)=>eu(t,Kf("default",{isLoading:!0,autoClose:!1,closeOnClick:!1,closeButton:!1,draggable:!1,...e})),Ae.promise=function(t,e,n){let r,{pending:i,error:o,success:s}=e;i&&(r=is(i)?Ae.loading(i,n):Ae.loading(i.render,{...n,...i}));const a={isLoading:null,autoClose:null,closeOnClick:null,closeButton:null,draggable:null},l=(d,h,p)=>{if(h==null)return void Ae.dismiss(r);const g={type:d,...a,...n,data:p},T=is(h)?{render:h}:h;return r?Ae.update(r,{...g,...T}):Ae(T.render,{...g,...T}),p},u=hn(t)?t():t;return u.then(d=>l("success",s,d)).catch(d=>l("error",o,d)),u},Ae.success=ud("success"),Ae.info=ud("info"),Ae.error=ud("error"),Ae.warning=ud("warning"),Ae.warn=Ae.warning,Ae.dark=(t,e)=>eu(t,Kf("default",{theme:"dark",...e})),Ae.dismiss=t=>{So.size>0?Dn.emit(1,t):kl=kl.filter(e=>t!=null&&e.options.toastId!==t)},Ae.clearWaitingQueue=function(t){return t===void 0&&(t={}),Dn.emit(5,t)},Ae.isActive=t=>{let e=!1;return So.forEach(n=>{n.isToastActive&&n.isToastActive(t)&&(e=!0)}),e},Ae.update=function(t,e){e===void 0&&(e={}),setTimeout(()=>{const n=function(r,i){let{containerId:o}=i;const s=So.get(o||Cm);return s&&s.getToast(r)}(t,e);if(n){const{props:r,content:i}=n,o={delay:100,...r,...e,toastId:e.toastId||t,updateId:xP()};o.toastId!==t&&(o.staleId=t);const s=o.render||i;delete o.render,eu(s,o)}},0)},Ae.done=t=>{Ae.update(t,{progress:1})},Ae.onChange=t=>(Dn.on(4,t),()=>{Dn.off(4,t)}),Ae.POSITION={TOP_LEFT:"top-left",TOP_RIGHT:"top-right",TOP_CENTER:"top-center",BOTTOM_LEFT:"bottom-left",BOTTOM_RIGHT:"bottom-right",BOTTOM_CENTER:"bottom-center"},Ae.TYPE={INFO:"info",SUCCESS:"success",WARNING:"warning",ERROR:"error",DEFAULT:"default"},Dn.on(2,t=>{Cm=t.containerId||t,So.set(Cm,t),kl.forEach(e=>{Dn.emit(0,e.content,e.options)}),kl=[]}).on(3,t=>{So.delete(t.containerId||t),So.size===0&&Dn.off(0).off(1).off(5)});function mw(t){return zn({tag:"svg",attr:{viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{fillRule:"evenodd",d:"M4.5 2A1.5 1.5 0 003 3.5v13A1.5 1.5 0 004.5 18h11a1.5 1.5 0 001.5-1.5V7.621a1.5 1.5 0 00-.44-1.06l-4.12-4.122A1.5 1.5 0 0011.378 2H4.5zM10 8a.75.75 0 01.75.75v1.5h1.5a.75.75 0 010 1.5h-1.5v1.5a.75.75 0 01-1.5 0v-1.5h-1.5a.75.75 0 010-1.5h1.5v-1.5A.75.75 0 0110 8z",clipRule:"evenodd"}}]})(t)}const XH=j.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #5fa8d3;
  padding: 32px;
  margin-bottom: 100px;
`,Cs=j.div`
  width: 100%;
  display: flex;
  padding: 16px;
`,Is=j.label`
  font-size: 20px;
  width: 150px;
`,Kx=j.input`
  padding: 4px;
  font-size: 18px;
  width: 600px;
  border: none;
  border-radius: 4px;
`,JH=j.textarea`
  padding: 4px;
  font-size: 18px;
  max-width: 600px;
  width: 600px;
  border: none;
  border-radius: 4px;
`,ZH=j.select`
  padding: 4px;
  font-size: 18px;
  max-width: 600px;
  width: 600px;
  border: none;
  border-radius: 4px;
`,eW=j.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  padding: 16px;
  gap: 10px;

  :first-child {
    background-color: #7779;
  }

  :last-child {
    background: linear-gradient(
      0deg,
      #5fbe6f 8.38%,
      rgba(0, 254, 41, 0.4) 113.51%
    );
  }
`,Qx=j.button`
  width: 100px;
  height: 34px;
  font-size: 14px;
  align-self: center;
  border-radius: 12px;
  border: none;
  cursor: pointer;

  &:hover {
    background: rgba(0, 0, 0, 0.7);
    color: wheat;
  }
`,tW=j.div`
  display: flex;
  background-color: #fff;
  height: 100px;
  gap: 20px;
  flex-wrap: wrap;
  padding: 15px;
  width: 600px;
  border-radius: 8px;
`,nW=j.label`
  font-size: 14px;
`;var rW=new Map([["aac","audio/aac"],["abw","application/x-abiword"],["arc","application/x-freearc"],["avif","image/avif"],["avi","video/x-msvideo"],["azw","application/vnd.amazon.ebook"],["bin","application/octet-stream"],["bmp","image/bmp"],["bz","application/x-bzip"],["bz2","application/x-bzip2"],["cda","application/x-cdf"],["csh","application/x-csh"],["css","text/css"],["csv","text/csv"],["doc","application/msword"],["docx","application/vnd.openxmlformats-officedocument.wordprocessingml.document"],["eot","application/vnd.ms-fontobject"],["epub","application/epub+zip"],["gz","application/gzip"],["gif","image/gif"],["heic","image/heic"],["heif","image/heif"],["htm","text/html"],["html","text/html"],["ico","image/vnd.microsoft.icon"],["ics","text/calendar"],["jar","application/java-archive"],["jpeg","image/jpeg"],["jpg","image/jpeg"],["js","text/javascript"],["json","application/json"],["jsonld","application/ld+json"],["mid","audio/midi"],["midi","audio/midi"],["mjs","text/javascript"],["mp3","audio/mpeg"],["mp4","video/mp4"],["mpeg","video/mpeg"],["mpkg","application/vnd.apple.installer+xml"],["odp","application/vnd.oasis.opendocument.presentation"],["ods","application/vnd.oasis.opendocument.spreadsheet"],["odt","application/vnd.oasis.opendocument.text"],["oga","audio/ogg"],["ogv","video/ogg"],["ogx","application/ogg"],["opus","audio/opus"],["otf","font/otf"],["png","image/png"],["pdf","application/pdf"],["php","application/x-httpd-php"],["ppt","application/vnd.ms-powerpoint"],["pptx","application/vnd.openxmlformats-officedocument.presentationml.presentation"],["rar","application/vnd.rar"],["rtf","application/rtf"],["sh","application/x-sh"],["svg","image/svg+xml"],["swf","application/x-shockwave-flash"],["tar","application/x-tar"],["tif","image/tiff"],["tiff","image/tiff"],["ts","video/mp2t"],["ttf","font/ttf"],["txt","text/plain"],["vsd","application/vnd.visio"],["wav","audio/wav"],["weba","audio/webm"],["webm","video/webm"],["webp","image/webp"],["woff","font/woff"],["woff2","font/woff2"],["xhtml","application/xhtml+xml"],["xls","application/vnd.ms-excel"],["xlsx","application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"],["xml","application/xml"],["xul","application/vnd.mozilla.xul+xml"],["zip","application/zip"],["7z","application/x-7z-compressed"],["mkv","video/x-matroska"],["mov","video/quicktime"],["msg","application/vnd.ms-outlook"]]);function Ec(t,e){var n=iW(t);if(typeof n.path!="string"){var r=t.webkitRelativePath;Object.defineProperty(n,"path",{value:typeof e=="string"?e:typeof r=="string"&&r.length>0?r:t.name,writable:!1,configurable:!1,enumerable:!0})}return n}function iW(t){var e=t.name,n=e&&e.lastIndexOf(".")!==-1;if(n&&!t.type){var r=e.split(".").pop().toLowerCase(),i=rW.get(r);i&&Object.defineProperty(t,"type",{value:i,writable:!1,configurable:!1,enumerable:!0})}return t}var oW=[".DS_Store","Thumbs.db"];function sW(t){return Na(this,void 0,void 0,function(){return La(this,function(e){return Qf(t)&&aW(t.dataTransfer)?[2,dW(t.dataTransfer,t.type)]:lW(t)?[2,uW(t)]:Array.isArray(t)&&t.every(function(n){return"getFile"in n&&typeof n.getFile=="function"})?[2,cW(t)]:[2,[]]})})}function aW(t){return Qf(t)}function lW(t){return Qf(t)&&Qf(t.target)}function Qf(t){return typeof t=="object"&&t!==null}function uW(t){return bv(t.target.files).map(function(e){return Ec(e)})}function cW(t){return Na(this,void 0,void 0,function(){var e;return La(this,function(n){switch(n.label){case 0:return[4,Promise.all(t.map(function(r){return r.getFile()}))];case 1:return e=n.sent(),[2,e.map(function(r){return Ec(r)})]}})})}function dW(t,e){return Na(this,void 0,void 0,function(){var n,r;return La(this,function(i){switch(i.label){case 0:return t.items?(n=bv(t.items).filter(function(o){return o.kind==="file"}),e!=="drop"?[2,n]:[4,Promise.all(n.map(fW))]):[3,2];case 1:return r=i.sent(),[2,Yx(TP(r))];case 2:return[2,Yx(bv(t.files).map(function(o){return Ec(o)}))]}})})}function Yx(t){return t.filter(function(e){return oW.indexOf(e.name)===-1})}function bv(t){if(t===null)return[];for(var e=[],n=0;n<t.length;n++){var r=t[n];e.push(r)}return e}function fW(t){if(typeof t.webkitGetAsEntry!="function")return Xx(t);var e=t.webkitGetAsEntry();return e&&e.isDirectory?bP(e):Xx(t)}function TP(t){return t.reduce(function(e,n){return Go(Go([],I_(e),!1),I_(Array.isArray(n)?TP(n):[n]),!1)},[])}function Xx(t){var e=t.getAsFile();if(!e)return Promise.reject("".concat(t," is not a File"));var n=Ec(e);return Promise.resolve(n)}function hW(t){return Na(this,void 0,void 0,function(){return La(this,function(e){return[2,t.isDirectory?bP(t):pW(t)]})})}function bP(t){var e=t.createReader();return new Promise(function(n,r){var i=[];function o(){var s=this;e.readEntries(function(a){return Na(s,void 0,void 0,function(){var l,u,d;return La(this,function(h){switch(h.label){case 0:if(a.length)return[3,5];h.label=1;case 1:return h.trys.push([1,3,,4]),[4,Promise.all(i)];case 2:return l=h.sent(),n(l),[3,4];case 3:return u=h.sent(),r(u),[3,4];case 4:return[3,6];case 5:d=Promise.all(a.map(hW)),i.push(d),o(),h.label=6;case 6:return[2]}})})},function(a){r(a)})}o()})}function pW(t){return Na(this,void 0,void 0,function(){return La(this,function(e){return[2,new Promise(function(n,r){t.file(function(i){var o=Ec(i,t.fullPath);n(o)},function(i){r(i)})})]})})}var mW=function(t,e){if(t&&e){var n=Array.isArray(e)?e:e.split(","),r=t.name||"",i=(t.type||"").toLowerCase(),o=i.replace(/\/.*$/,"");return n.some(function(s){var a=s.trim().toLowerCase();return a.charAt(0)==="."?r.toLowerCase().endsWith(a):a.endsWith("/*")?o===a.replace(/\/.*$/,""):i===a})}return!0};function Jx(t){return yW(t)||vW(t)||CP(t)||gW()}function gW(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function vW(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function yW(t){if(Array.isArray(t))return Sv(t)}function Zx(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function eT(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?Zx(Object(n),!0).forEach(function(r){SP(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Zx(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function SP(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function Uu(t,e){return EW(t)||_W(t,e)||CP(t,e)||wW()}function wW(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function CP(t,e){if(t){if(typeof t=="string")return Sv(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Sv(t,e)}}function Sv(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function _W(t,e){var n=t==null?null:typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(n!=null){var r=[],i=!0,o=!1,s,a;try{for(n=n.call(t);!(i=(s=n.next()).done)&&(r.push(s.value),!(e&&r.length===e));i=!0);}catch(l){o=!0,a=l}finally{try{!i&&n.return!=null&&n.return()}finally{if(o)throw a}}return r}}function EW(t){if(Array.isArray(t))return t}var xW="file-invalid-type",TW="file-too-large",bW="file-too-small",SW="too-many-files",CW=function(e){e=Array.isArray(e)&&e.length===1?e[0]:e;var n=Array.isArray(e)?"one of ".concat(e.join(", ")):e;return{code:xW,message:"File type must be ".concat(n)}},tT=function(e){return{code:TW,message:"File is larger than ".concat(e," ").concat(e===1?"byte":"bytes")}},nT=function(e){return{code:bW,message:"File is smaller than ".concat(e," ").concat(e===1?"byte":"bytes")}},IW={code:SW,message:"Too many files"};function IP(t,e){var n=t.type==="application/x-moz-file"||mW(t,e);return[n,n?null:CW(e)]}function AP(t,e,n){if(Co(t.size))if(Co(e)&&Co(n)){if(t.size>n)return[!1,tT(n)];if(t.size<e)return[!1,nT(e)]}else{if(Co(e)&&t.size<e)return[!1,nT(e)];if(Co(n)&&t.size>n)return[!1,tT(n)]}return[!0,null]}function Co(t){return t!=null}function AW(t){var e=t.files,n=t.accept,r=t.minSize,i=t.maxSize,o=t.multiple,s=t.maxFiles,a=t.validator;return!o&&e.length>1||o&&s>=1&&e.length>s?!1:e.every(function(l){var u=IP(l,n),d=Uu(u,1),h=d[0],p=AP(l,r,i),g=Uu(p,1),T=g[0],b=a?a(l):null;return h&&T&&!b})}function Yf(t){return typeof t.isPropagationStopped=="function"?t.isPropagationStopped():typeof t.cancelBubble<"u"?t.cancelBubble:!1}function cd(t){return t.dataTransfer?Array.prototype.some.call(t.dataTransfer.types,function(e){return e==="Files"||e==="application/x-moz-file"}):!!t.target&&!!t.target.files}function rT(t){t.preventDefault()}function PW(t){return t.indexOf("MSIE")!==-1||t.indexOf("Trident/")!==-1}function kW(t){return t.indexOf("Edge/")!==-1}function RW(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:window.navigator.userAgent;return PW(t)||kW(t)}function gr(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return function(r){for(var i=arguments.length,o=new Array(i>1?i-1:0),s=1;s<i;s++)o[s-1]=arguments[s];return e.some(function(a){return!Yf(r)&&a&&a.apply(void 0,[r].concat(o)),Yf(r)})}}function OW(){return"showOpenFilePicker"in window}function DW(t){if(Co(t)){var e=Object.entries(t).filter(function(n){var r=Uu(n,2),i=r[0],o=r[1],s=!0;return PP(i)||(console.warn('Skipped "'.concat(i,'" because it is not a valid MIME type. Check https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types for a list of valid MIME types.')),s=!1),(!Array.isArray(o)||!o.every(kP))&&(console.warn('Skipped "'.concat(i,'" because an invalid file extension was provided.')),s=!1),s}).reduce(function(n,r){var i=Uu(r,2),o=i[0],s=i[1];return eT(eT({},n),{},SP({},o,s))},{});return[{description:"Files",accept:e}]}return t}function NW(t){if(Co(t))return Object.entries(t).reduce(function(e,n){var r=Uu(n,2),i=r[0],o=r[1];return[].concat(Jx(e),[i],Jx(o))},[]).filter(function(e){return PP(e)||kP(e)}).join(",")}function LW(t){return t instanceof DOMException&&(t.name==="AbortError"||t.code===t.ABORT_ERR)}function MW(t){return t instanceof DOMException&&(t.name==="SecurityError"||t.code===t.SECURITY_ERR)}function PP(t){return t==="audio/*"||t==="video/*"||t==="image/*"||t==="text/*"||/\w+\/[-+.\w]+/g.test(t)}function kP(t){return/^.*\.[\w]+$/.test(t)}var VW=["children"],jW=["open"],FW=["refKey","role","onKeyDown","onFocus","onBlur","onClick","onDragEnter","onDragOver","onDragLeave","onDrop"],$W=["refKey","onChange","onClick"];function BW(t){return HW(t)||zW(t)||RP(t)||UW()}function UW(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function zW(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function HW(t){if(Array.isArray(t))return Cv(t)}function Im(t,e){return GW(t)||qW(t,e)||RP(t,e)||WW()}function WW(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function RP(t,e){if(t){if(typeof t=="string")return Cv(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Cv(t,e)}}function Cv(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function qW(t,e){var n=t==null?null:typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(n!=null){var r=[],i=!0,o=!1,s,a;try{for(n=n.call(t);!(i=(s=n.next()).done)&&(r.push(s.value),!(e&&r.length===e));i=!0);}catch(l){o=!0,a=l}finally{try{!i&&n.return!=null&&n.return()}finally{if(o)throw a}}return r}}function GW(t){if(Array.isArray(t))return t}function iT(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function qe(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?iT(Object(n),!0).forEach(function(r){Iv(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):iT(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function Iv(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function Xf(t,e){if(t==null)return{};var n=KW(t,e),r,i;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(i=0;i<o.length;i++)r=o[i],!(e.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}function KW(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,o;for(o=0;o<r.length;o++)i=r[o],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}var gw=C.forwardRef(function(t,e){var n=t.children,r=Xf(t,VW),i=DP(r),o=i.open,s=Xf(i,jW);return C.useImperativeHandle(e,function(){return{open:o}},[o]),G.createElement(C.Fragment,null,n(qe(qe({},s),{},{open:o})))});gw.displayName="Dropzone";var OP={disabled:!1,getFilesFromEvent:sW,maxSize:1/0,minSize:0,multiple:!0,maxFiles:0,preventDropOnDocument:!0,noClick:!1,noKeyboard:!1,noDrag:!1,noDragEventsBubbling:!1,validator:null,useFsAccessApi:!0,autoFocus:!1};gw.defaultProps=OP;gw.propTypes={children:Re.func,accept:Re.objectOf(Re.arrayOf(Re.string)),multiple:Re.bool,preventDropOnDocument:Re.bool,noClick:Re.bool,noKeyboard:Re.bool,noDrag:Re.bool,noDragEventsBubbling:Re.bool,minSize:Re.number,maxSize:Re.number,maxFiles:Re.number,disabled:Re.bool,getFilesFromEvent:Re.func,onFileDialogCancel:Re.func,onFileDialogOpen:Re.func,useFsAccessApi:Re.bool,autoFocus:Re.bool,onDragEnter:Re.func,onDragLeave:Re.func,onDragOver:Re.func,onDrop:Re.func,onDropAccepted:Re.func,onDropRejected:Re.func,onError:Re.func,validator:Re.func};var Av={isFocused:!1,isFileDialogActive:!1,isDragActive:!1,isDragAccept:!1,isDragReject:!1,acceptedFiles:[],fileRejections:[]};function DP(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=qe(qe({},OP),t),n=e.accept,r=e.disabled,i=e.getFilesFromEvent,o=e.maxSize,s=e.minSize,a=e.multiple,l=e.maxFiles,u=e.onDragEnter,d=e.onDragLeave,h=e.onDragOver,p=e.onDrop,g=e.onDropAccepted,T=e.onDropRejected,b=e.onFileDialogCancel,S=e.onFileDialogOpen,E=e.useFsAccessApi,m=e.autoFocus,v=e.preventDropOnDocument,x=e.noClick,A=e.noKeyboard,k=e.noDrag,P=e.noDragEventsBubbling,R=e.onError,O=e.validator,D=C.useMemo(function(){return NW(n)},[n]),q=C.useMemo(function(){return DW(n)},[n]),B=C.useMemo(function(){return typeof S=="function"?S:oT},[S]),U=C.useMemo(function(){return typeof b=="function"?b:oT},[b]),V=C.useRef(null),z=C.useRef(null),Y=C.useReducer(QW,Av),N=Im(Y,2),M=N[0],W=N[1],$=M.isFocused,ie=M.isFileDialogActive,he=C.useRef(typeof window<"u"&&window.isSecureContext&&E&&OW()),Oe=function(){!he.current&&ie&&setTimeout(function(){if(z.current){var oe=z.current.files;oe.length||(W({type:"closeDialog"}),U())}},300)};C.useEffect(function(){return window.addEventListener("focus",Oe,!1),function(){window.removeEventListener("focus",Oe,!1)}},[z,ie,U,he]);var Te=C.useRef([]),L=function(oe){V.current&&V.current.contains(oe.target)||(oe.preventDefault(),Te.current=[])};C.useEffect(function(){return v&&(document.addEventListener("dragover",rT,!1),document.addEventListener("drop",L,!1)),function(){v&&(document.removeEventListener("dragover",rT),document.removeEventListener("drop",L))}},[V,v]),C.useEffect(function(){return!r&&m&&V.current&&V.current.focus(),function(){}},[V,m,r]);var ye=C.useCallback(function(J){R?R(J):console.error(J)},[R]),Me=C.useCallback(function(J){J.preventDefault(),J.persist(),Xt(J),Te.current=[].concat(BW(Te.current),[J.target]),cd(J)&&Promise.resolve(i(J)).then(function(oe){if(!(Yf(J)&&!P)){var He=oe.length,lt=He>0&&AW({files:oe,accept:D,minSize:s,maxSize:o,multiple:a,maxFiles:l,validator:O}),St=He>0&&!lt;W({isDragAccept:lt,isDragReject:St,isDragActive:!0,type:"setDraggedFiles"}),u&&u(J)}}).catch(function(oe){return ye(oe)})},[i,u,ye,P,D,s,o,a,l,O]),Yt=C.useCallback(function(J){J.preventDefault(),J.persist(),Xt(J);var oe=cd(J);if(oe&&J.dataTransfer)try{J.dataTransfer.dropEffect="copy"}catch{}return oe&&h&&h(J),!1},[h,P]),an=C.useCallback(function(J){J.preventDefault(),J.persist(),Xt(J);var oe=Te.current.filter(function(lt){return V.current&&V.current.contains(lt)}),He=oe.indexOf(J.target);He!==-1&&oe.splice(He,1),Te.current=oe,!(oe.length>0)&&(W({type:"setDraggedFiles",isDragActive:!1,isDragAccept:!1,isDragReject:!1}),cd(J)&&d&&d(J))},[V,d,P]),Ce=C.useCallback(function(J,oe){var He=[],lt=[];J.forEach(function(St){var cr=IP(St,D),Ct=Im(cr,2),dr=Ct[0],Hn=Ct[1],Ja=AP(St,s,o),Wn=Im(Ja,2),jr=Wn[0],ps=Wn[1],hi=O?O(St):null;if(dr&&jr&&!hi)He.push(St);else{var co=[Hn,ps];hi&&(co=co.concat(hi)),lt.push({file:St,errors:co.filter(function(ip){return ip})})}}),(!a&&He.length>1||a&&l>=1&&He.length>l)&&(He.forEach(function(St){lt.push({file:St,errors:[IW]})}),He.splice(0)),W({acceptedFiles:He,fileRejections:lt,type:"setFiles"}),p&&p(He,lt,oe),lt.length>0&&T&&T(lt,oe),He.length>0&&g&&g(He,oe)},[W,a,D,s,o,l,p,g,T,O]),ln=C.useCallback(function(J){J.preventDefault(),J.persist(),Xt(J),Te.current=[],cd(J)&&Promise.resolve(i(J)).then(function(oe){Yf(J)&&!P||Ce(oe,J)}).catch(function(oe){return ye(oe)}),W({type:"reset"})},[i,Ce,ye,P]),kn=C.useCallback(function(){if(he.current){W({type:"openDialog"}),B();var J={multiple:a,types:q};window.showOpenFilePicker(J).then(function(oe){return i(oe)}).then(function(oe){Ce(oe,null),W({type:"closeDialog"})}).catch(function(oe){LW(oe)?(U(oe),W({type:"closeDialog"})):MW(oe)?(he.current=!1,z.current?(z.current.value=null,z.current.click()):ye(new Error("Cannot open the file picker because the https://developer.mozilla.org/en-US/docs/Web/API/File_System_Access_API is not supported and no <input> was provided."))):ye(oe)});return}z.current&&(W({type:"openDialog"}),B(),z.current.value=null,z.current.click())},[W,B,U,E,Ce,ye,q,a]),hs=C.useCallback(function(J){!V.current||!V.current.isEqualNode(J.target)||(J.key===" "||J.key==="Enter"||J.keyCode===32||J.keyCode===13)&&(J.preventDefault(),kn())},[V,kn]),fi=C.useCallback(function(){W({type:"focus"})},[]),Lr=C.useCallback(function(){W({type:"blur"})},[]),Mr=C.useCallback(function(){x||(RW()?setTimeout(kn,0):kn())},[x,kn]),un=function(oe){return r?null:oe},Vr=function(oe){return A?null:un(oe)},De=function(oe){return k?null:un(oe)},Xt=function(oe){P&&oe.stopPropagation()},Jt=C.useMemo(function(){return function(){var J=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},oe=J.refKey,He=oe===void 0?"ref":oe,lt=J.role,St=J.onKeyDown,cr=J.onFocus,Ct=J.onBlur,dr=J.onClick,Hn=J.onDragEnter,Ja=J.onDragOver,Wn=J.onDragLeave,jr=J.onDrop,ps=Xf(J,FW);return qe(qe(Iv({onKeyDown:Vr(gr(St,hs)),onFocus:Vr(gr(cr,fi)),onBlur:Vr(gr(Ct,Lr)),onClick:un(gr(dr,Mr)),onDragEnter:De(gr(Hn,Me)),onDragOver:De(gr(Ja,Yt)),onDragLeave:De(gr(Wn,an)),onDrop:De(gr(jr,ln)),role:typeof lt=="string"&&lt!==""?lt:"presentation"},He,V),!r&&!A?{tabIndex:0}:{}),ps)}},[V,hs,fi,Lr,Mr,Me,Yt,an,ln,A,k,r]),be=C.useCallback(function(J){J.stopPropagation()},[]),uo=C.useMemo(function(){return function(){var J=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},oe=J.refKey,He=oe===void 0?"ref":oe,lt=J.onChange,St=J.onClick,cr=Xf(J,$W),Ct=Iv({accept:D,multiple:a,type:"file",style:{display:"none"},onChange:un(gr(lt,ln)),onClick:un(gr(St,be)),tabIndex:-1},He,z);return qe(qe({},Ct),cr)}},[z,n,a,ln,r]);return qe(qe({},M),{},{isFocused:$&&!r,getRootProps:Jt,getInputProps:uo,rootRef:V,inputRef:z,open:un(kn)})}function QW(t,e){switch(e.type){case"focus":return qe(qe({},t),{},{isFocused:!0});case"blur":return qe(qe({},t),{},{isFocused:!1});case"openDialog":return qe(qe({},Av),{},{isFileDialogActive:!0});case"closeDialog":return qe(qe({},t),{},{isFileDialogActive:!1});case"setDraggedFiles":return qe(qe({},t),{},{isDragActive:e.isDragActive,isDragAccept:e.isDragAccept,isDragReject:e.isDragReject});case"setFiles":return qe(qe({},t),{},{acceptedFiles:e.acceptedFiles,fileRejections:e.fileRejections});case"reset":return qe({},Av);default:return t}}function oT(){}const YW=({uploadedFiles:t,setUploadedFiles:e})=>{const n=C.useCallback(o=>{const s=o.filter(a=>a.type==="image/jpeg"||a.type==="image/png"||a.type==="image/svg"||a.type==="image/webp");e(a=>[...a,...s])},[]),{getRootProps:r,getInputProps:i}=DP({onDrop:n,accept:{"image/png":[".png"],"image/jpeg":[".jpg"],"image/svg":[".svg"],"image/webp":[".webp"]}});return _.jsxs("div",{style:{maxWidth:"600px"},children:[_.jsxs("div",{...r(),style:XW,children:[_.jsx("input",{...i()}),_.jsx("p",{children:"Arrastra y suelta imágenes aquí, o haz clic para seleccionarlas"})]}),_.jsxs("div",{style:{maxWidth:"600px"},children:[_.jsx("h4",{children:"Imágenes subidas:"}),_.jsx("ul",{style:{display:"flex",gap:5,listStyle:"none",flexWrap:"wrap"},children:t==null?void 0:t.map((o,s)=>_.jsx("li",{children:_.jsx("img",{src:o.path?URL.createObjectURL(o):o.urlImage,alt:`Thumbnail ${o.name?o.name:"Imagen de producto"}`,style:JW})},s))})]})]})},XW={border:"2px dashed #cccccc",borderRadius:"4px",padding:"20px",textAlign:"center",cursor:"pointer"},JW={maxWidth:"100px",maxHeight:"100px",margin:"10px 0",padding:" 4px",border:"2px solid #cccccc"},ZW=({data:t,changeSection:e})=>{const{categorias:n}=C.useContext(Lt).contextValue,{categoria:r,precio:i,descripcion:o,detalles:s,imagenes:a,titulo:l,id:u}=t||{},[d,h]=C.useState({titulo:l||"",descripcion:o||"",detalles:s,precio:i||"",imagenes:a||[],categoria:r||"",id:u||""}),[p,g]=C.useState(!!t),[T,b]=C.useState(null),[S,E]=C.useState(d.imagenes),[m,v]=C.useState([]),[x,A]=C.useState({});C.useState([]),C.useEffect(()=>{b(n),(async()=>{const U=await Tv();v(U);const V={};U.forEach(z=>{d.detalles.length?V[z.id]=d.detalles.includes(z.id):V[z.id]=!1}),A(V)})()},[s]),console.log(x);const k=B=>{const U=B.target.value;A(V=>({...V,[U]:B.target.checked}))},P=async()=>{d.imagenes.length=0,S.forEach(B=>{const U={img:B};d.imagenes.push(U)})},R=B=>{Ae.success(B,{position:"top-right",autoClose:1800,hideProgressBar:!0,style:{background:"#b7e4c7"}})},O=async B=>{B.preventDefault();const U=Object.keys(x).filter(V=>x[V]);d.detalles=U,P(),d.categoria===""&&(d.categoria=n[0].id),Je.fire({title:"Guardar cambios",text:"Desea guardar los cambios?",icon:"info",confirmButtonText:"Guardar",showCancelButton:!0,reverseButtons:!0}).then(async V=>{V.isConfirmed&&(p?(await ow(d.id,d),setTimeout(()=>{e("SectionProducts")},2e3),R("Nuevo producto editado con éxito!")):(await i9(d),setTimeout(()=>{e("SectionProducts")},2e3),R("Nuevo producto creado con éxito!")))})},D=(B,U)=>{const V=B.target.value;U==="categoria"&&V===n[0].id?h(z=>({...z,[U]:n[0].id})):h(z=>({...z,[U]:V}))},q=()=>{Je.fire({title:"Atención",text:"Desea cancelar y volver al listado?",icon:"question",confirmButtonText:"Salir",showCancelButton:!0,reverseButtons:!0}).then(B=>{B.isConfirmed&&e("SectionProducts")})};return _.jsxs(XH,{children:[_.jsxs("form",{onSubmit:O,children:[_.jsxs(Cs,{children:[_.jsx(Is,{htmlFor:"name",children:"Nombre:"}),_.jsx(Kx,{type:"text",value:d.titulo,id:"name",onChange:B=>D(B,"titulo")})]}),_.jsxs(Cs,{children:[_.jsx(Is,{htmlFor:"description",children:"Descripción:"}),_.jsx(JH,{value:d.descripcion,id:"description",onChange:B=>D(B,"descripcion")})]}),_.jsxs(Cs,{children:[_.jsx(Is,{htmlFor:"price",children:"Precio diario:"}),_.jsx(Kx,{type:"number",value:d.precio,id:"price",onChange:B=>D(B,"precio")})]}),_.jsxs(Cs,{children:[_.jsx(Is,{htmlFor:"category",children:"Categoria:"}),_.jsx(ZH,{id:"category",name:"categoria",onChange:B=>D(B,"categoria"),value:d.categoria!==""?d.categoria:n[0].id,children:T&&T.map(B=>_.jsx("option",{value:B.id,children:B.titulo},B.id))})]}),_.jsxs(Cs,{children:[_.jsx(Is,{children:"Atributos"}),m.length>1&&_.jsx(tW,{children:m.map((B,U)=>_.jsxs(nW,{children:[_.jsx("input",{type:"checkbox",id:B.id,value:B.id,checked:x[B.id],onChange:k,style:{marginRight:12}}),B.titulo]},U))})]}),_.jsxs(Cs,{children:[_.jsx(Is,{children:"Imagenes"}),_.jsx(YW,{uploadedFiles:S,setUploadedFiles:E})]}),_.jsxs(eW,{children:[_.jsx(Qx,{type:"button",onClick:q,children:"Cancelar"}),_.jsx(Qx,{type:"submit",children:"Guardar"})]})]}),_.jsx(ci,{})]})},eq=({changeSection:t})=>{const{productos:e,setProductData:n,categorias:r}=C.useContext(Lt).contextValue,[i,o]=C.useState(null),[s,a]=C.useState(null),[l,u]=C.useState(1),[d,h]=C.useState(1),p=10;C.useEffect(()=>{window.scrollTo(0,0),(async()=>{const v=await dv();o(v),n(v);const x=Math.ceil((i==null?void 0:i.length)/p);u(x)})(),a(r)},[]);const g=m=>r.find(x=>x.id===m).titulo,T=d*p,b=T-p;if(i==null||i.slice(b,T),!i)return _.jsx("p",{children:"Cargando..."});const S=m=>{Ae.success(m,{position:"top-right",autoClose:2e3,hideProgressBar:!0,style:{background:"#b7e4c7"}})},E=(m,v)=>{Je.fire({title:"Eliminar?",text:`Desea eliminar el producto: "${v}"?`,icon:"warning",confirmButtonText:"Eliminar",showCancelButton:!0,reverseButtons:!0}).then(async x=>{x.isConfirmed&&await o9(m).then(async()=>{o(await dv()),S("Producto eliminado correctamente!")})})};return _.jsxs(MH,{children:[_.jsx(BH,{children:_.jsxs(UH,{onClick:()=>t("Edit"),children:["Agregar nuevo",_.jsx(mw,{})]})}),_.jsxs(VH,{children:[_.jsx("p",{children:"Nombre"}),_.jsx("p",{children:"Categoria"}),_.jsx("p",{children:"Precio"}),_.jsx("p",{children:"Acciones"})]}),i.map((m,v)=>_.jsxs(jH,{children:[_.jsx(FH,{children:m.titulo}),_.jsx("p",{children:g(m.categoria)}),_.jsx("p",{children:m.precio}),_.jsxs($H,{children:[_.jsx("button",{onClick:()=>t("Edit",m),children:"Editar"}),_.jsx("button",{onClick:()=>E(m.id,m.titulo),children:"Eliminar"})]})]},v)),_.jsx(ci,{})]})},tq=j.div`
  width: 100%;
  padding: 14px;
  display: flex;
  flex-direction: column;
  gap: 5px;
  margin-bottom: 100px;
  text-align: start;
  align-items: stretch;
`,nq=j.div`
  display: grid;
  grid-template-columns: 150px 250px 300px 150px;
  justify-content: space-between;
  height: 32px;
  font-size: 20px;
  text-transform: uppercase;
  color: white;
  background-color: rgba(225, 225, 225, 0.9);
  padding: 8px;
  height: fit-content;
  border-radius: 8px;
  margin-bottom: 10px;

  :nth-child(2) {
    width: 300px;
  }
`,rq=j.div`
  display: grid;
  grid-template-columns: 150px 200px 300px 200px;
  justify-content: space-between;
  height: 40px;
  :first-child {
    margin-left: 14px;
    width: 50px;
  }
`,iq=j.p`
  width: 300px;
`,oq=j.div`
  width: 150px;
  display: flex;
  justify-content: space-between;
  gap: 5px;

  :first-child {
    background-color: #80b918;
    width: 150px;

    &:hover {
      color: white;
    }
  }

  button {
    height: 32px;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    
    &.admin {
      background-color: red;
      color: white;
    }
  }
`,sq=()=>{const[t,e]=C.useState(null),{logoutAdmin:n,loginAdmin:r}=C.useContext(Lt).contextValue,i=async s=>{s.admin=!s.admin,await LA(s.id,s),o("Se ha cambiado el rol del usuario!"),s.admin?r():n()};C.useEffect(()=>{(async()=>{try{const a=await y9();e(a)}catch{console.log("Error obteniendo los usuarios")}})()},[t]);const o=s=>{Ae.success(s,{position:"top-right",autoClose:2e3,hideProgressBar:!0,style:{background:"#b7e4c7"}})};return _.jsx("div",{children:t&&_.jsxs(tq,{children:[_.jsxs(nq,{children:[_.jsx("p",{children:"Nombre"}),_.jsx("p",{children:"Apellido"}),_.jsx("p",{children:"E-Mail"}),_.jsx("p",{children:"Rol"})]}),t.map(s=>_.jsxs(rq,{children:[_.jsx(iq,{children:s.nombre}),_.jsx("p",{children:s.apellido}),_.jsx("p",{children:s.email}),_.jsx(oq,{children:_.jsx("button",{onClick:()=>i(s),className:s.admin?"admin":"",children:s.admin?"Admin":"Usuario"})})]},s.id)),_.jsx(ci,{})]})})},go={container:{display:"flex",flexDirection:"column"},header:{display:"flex",justifyContent:"flex-end",alignItems:"center",width:"100%",padding:"10px"},addButton:{display:"flex",justifyContent:"center",alignItems:"center",padding:"12px",borderRadius:"16px",fontSize:"16px",backgroundColor:"#d8f3dc",border:"1px solid green",color:"green",cursor:"pointer"},miniDocumentIcon:{fontSize:"1.5em",marginLeft:"5px"},listItem:{display:"flex",justifyContent:"space-between",padding:20,alignItems:"center"},editButton:{backgroundColor:"#80b918",padding:8,borderRadius:"10px",border:"none"},deleteButton:{backgroundColor:"red",padding:8,border:"none",borderRadius:"10px"}},aq=({changeSection:t})=>{const[e,n]=C.useState([]);C.useEffect(()=>{(async()=>{const s=await fv();n(s)})()},[]);const r=o=>{Ae.success(o,{position:"top-right",autoClose:2e3,hideProgressBar:!0,style:{background:"#b7e4c7"}})},i=(o,s)=>{if(o==="9a9crFjibptLfhr3glcE"){Je.fire({title:"Denegado",text:`No se puede eliminar la categoría: "${s}"?, por ser la principal.`,icon:"error"});return}Je.fire({title:"Eliminar?",text:`Desea eliminar la categoria: "${s}"?, todos los productos con esta categoría pasaran a ser de la categoría principal.`,icon:"warning",confirmButtonText:"Eliminar",showCancelButton:!0,reverseButtons:!0}).then(async a=>{a.isConfirmed&&await c9(o).then(async()=>{n(await fv()),r("Categoria eliminada correctamente!")})})};return _.jsxs("div",{style:go.container,children:[_.jsx("div",{style:go.header,children:_.jsxs("button",{style:go.addButton,onClick:()=>t("NewCategory"),children:["Agregar nuevo",_.jsx(mw,{style:go.miniDocumentIcon})]})}),e&&e.map((o,s)=>_.jsxs("div",{style:go.listItem,children:[_.jsx("p",{children:o.titulo}),_.jsx("div",{style:{width:50,height:50},children:_.jsx("img",{src:o==null?void 0:o.urlImage,style:{width:"100%",height:"auto"}})}),_.jsx("button",{style:go.editButton,onClick:()=>t("NewCategory",o),children:"Editar"}),_.jsx("button",{style:go.deleteButton,onClick:()=>i(o.id,o.titulo),children:"Eliminar"})]},s)),_.jsx(ci,{})]})},lq="/assets/var-207d7a33.jpeg",uq=j.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #5fa8d3;
  padding: 32px;
  margin-bottom: 100px;
`,cq=j.div`
  width: 100%;
  display: flex;
  padding: 16px;
`,sT=j.label`
font-size: 20px;
width: 150px;
`,aT=j.input`
  padding: 4px;
  font-size: 18px;
  width: 600px;
  border: none;
  border-radius: 4px;
`,dq=j.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  padding: 16px;
  gap: 10px;

  :first-child {
    background-color: #7779;
  }

  :last-child {
    background: linear-gradient(
      0deg,
      #5fbe6f 8.38%,
      rgba(0, 254, 41, 0.4) 113.51%
    );
  }
`,lT=j.button`
  width: 100px;
  height: 34px;
  font-size: 14px;
  align-self: center;
  border-radius: 12px;
  border: none;
  cursor: pointer;

  &:hover {
    background: rgba(0, 0, 0, 0.7);
    color: wheat;
  }
`,fq=({data:t,changeSection:e})=>{const{id:n,imagen:r,titulo:i}=t||{},[o,s]=C.useState({titulo:i||"",imagen:r||"",id:n||""}),[a,l]=C.useState(!!t),u=g=>{Ae.success(g,{position:"top-right",autoClose:1800,hideProgressBar:!0,style:{background:"#b7e4c7"}})},d=(g,T)=>{if(T==="imagen"){const b=g.target.files[0];s(S=>({...S,imagen:b}))}else{const b=g.target.value;s(S=>({...S,[T]:b}))}},h=g=>{g.preventDefault(),i!==""&&r!==null&&Je.fire({title:"Guardar cambios",text:"Desea guardar los cambios?",icon:"info",confirmButtonText:"Guardar",showCancelButton:!0,reverseButtons:!0}).then(async T=>{T.isConfirmed&&(a?(await d9(o.id,o),setTimeout(()=>{e("SectionCategories")},2e3),u("Categoria editada con éxito!")):(await u9(o),setTimeout(()=>{e("SectionCategories")},2e3),u("Nueva categoria creada con éxito!")))})},p=()=>{Je.fire({title:"Atención",text:"Desea cancelar y volver al listado?",icon:"question",confirmButtonText:"Salir",showCancelButton:!0,reverseButtons:!0}).then(g=>{g.isConfirmed&&e("SectionCategories")})};return _.jsxs(uq,{children:[_.jsxs("form",{onSubmit:h,children:[_.jsxs(cq,{children:[_.jsx(sT,{htmlFor:"name",children:"Titulo:"}),_.jsx(aT,{type:"text",value:o.titulo,id:"name",onChange:g=>d(g,"titulo")})]}),_.jsx(sT,{htmlFor:"imagen",children:"Imagen:  "}),_.jsx(aT,{type:"file",onChange:g=>d(g,"imagen")}),_.jsxs(dq,{children:[_.jsx(lT,{onClick:p,children:"Cancelar"}),_.jsx(lT,{children:a?"Editar":"Guardar"})]})]}),_.jsx(ci,{})]})},vo={container:{display:"flex",flexDirection:"column"},header:{display:"flex",justifyContent:"flex-end",alignItems:"center",width:"100%",padding:"10px"},addButton:{display:"flex",justifyContent:"center",alignItems:"center",padding:"12px",borderRadius:"16px",fontSize:"16px",backgroundColor:"#d8f3dc",border:"1px solid green",color:"green",cursor:"pointer"},miniDocumentIcon:{fontSize:"1.5em",marginLeft:"5px"},listItem:{display:"flex",justifyContent:"space-between",padding:20,alignItems:"center"},editButton:{backgroundColor:"#80b918",padding:8,borderRadius:"10px",border:"none"},deleteButton:{backgroundColor:"red",padding:8,border:"none",borderRadius:"10px"}},hq=({changeSection:t})=>{const[e,n]=C.useState([]);C.useEffect(()=>{(async()=>{const s=await Tv();n(s)})()},[]);const r=o=>{Ae.success(o,{position:"top-right",autoClose:2e3,hideProgressBar:!0,style:{background:"#b7e4c7"}})},i=(o,s)=>{Je.fire({title:"Eliminar?",text:`Desea eliminar el atributo: "${s}"?`,icon:"warning",confirmButtonText:"Eliminar",showCancelButton:!0,reverseButtons:!0}).then(async a=>{a.isConfirmed&&await _H(o).then(async()=>{n(await Tv()),r("Atributo eliminado correctamente!")})})};return _.jsxs("div",{style:vo.container,children:[_.jsx("div",{style:vo.header,children:_.jsxs("button",{style:vo.addButton,onClick:()=>t("NewAtributo"),children:["Agregar nuevo",_.jsx(mw,{style:vo.miniDocumentIcon})]})}),e&&e.map((o,s)=>_.jsxs("div",{style:vo.listItem,children:[_.jsx("p",{children:o.titulo}),_.jsx("div",{style:{width:50,height:50},children:_.jsx("img",{src:o==null?void 0:o.urlImage,style:{width:"100%",height:"auto"}})}),_.jsx("button",{style:vo.editButton,onClick:()=>t("NewAtributo",o),children:"Editar"}),_.jsx("button",{style:vo.deleteButton,onClick:()=>i(o.id,o.titulo),children:"Eliminar"})]},s)),_.jsx(ci,{})]})},pq=j.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #5fa8d3;
  padding: 32px;
  margin-bottom: 100px;
`,mq=j.div`
  width: 100%;
  display: flex;
  padding: 16px;
`,uT=j.label`
font-size: 20px;
width: 150px;
`,cT=j.input`
  padding: 4px;
  font-size: 18px;
  width: 600px;
  border: none;
  border-radius: 4px;
`,gq=j.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  padding: 16px;
  gap: 10px;

  :first-child {
    background-color: #7779;
  }

  :last-child {
    background: linear-gradient(
      0deg,
      #5fbe6f 8.38%,
      rgba(0, 254, 41, 0.4) 113.51%
    );
  }
`,dT=j.button`
  width: 100px;
  height: 34px;
  font-size: 14px;
  align-self: center;
  border-radius: 12px;
  border: none;
  cursor: pointer;

  &:hover {
    background: rgba(0, 0, 0, 0.7);
    color: wheat;
  }
`,vq=({data:t,changeSection:e})=>{const{id:n,imagen:r,titulo:i}=t||{},[o,s]=C.useState({titulo:i||"",imagen:r||"",id:n||""}),[a,l]=C.useState(!!t),u=g=>{Ae.success(g,{position:"top-right",autoClose:1800,hideProgressBar:!0,style:{background:"#b7e4c7"}})},d=(g,T)=>{if(T==="imagen"){const b=g.target.files[0];s(S=>({...S,imagen:b}))}else{const b=g.target.value;s(S=>({...S,[T]:b}))}},h=g=>{g.preventDefault(),i!==""&&r!==null&&Je.fire({title:"Guardar cambios",text:"Desea guardar los cambios?",icon:"info",confirmButtonText:"Guardar",showCancelButton:!0,reverseButtons:!0}).then(async T=>{T.isConfirmed&&(a?(await EH(o.id,o),setTimeout(()=>{e("SectionAtributos")},2e3),u("Atributo creado con éxito!")):(await wH(o),setTimeout(()=>{e("SectionAtributos")},2e3),u("Nuevo atributo creado con éxito!")))})},p=()=>{Je.fire({title:"Atención",text:"Desea cancelar y volver al listado?",icon:"question",confirmButtonText:"Salir",showCancelButton:!0,reverseButtons:!0}).then(g=>{g.isConfirmed&&e("SectionAtributos")})};return _.jsxs(pq,{children:[_.jsxs("form",{onSubmit:h,children:[_.jsxs(mq,{children:[_.jsx(uT,{htmlFor:"name",children:"Titulo:"}),_.jsx(cT,{type:"text",value:o.titulo,id:"name",onChange:g=>d(g,"titulo")})]}),_.jsx(uT,{htmlFor:"imagen",children:"Imagen:  "}),_.jsx(cT,{type:"file",onChange:g=>d(g,"imagen")}),_.jsxs(gq,{children:[_.jsx(dT,{onClick:p,children:"Cancelar"}),_.jsx(dT,{children:a?"Editar":"Guardar"})]})]}),_.jsx(ci,{})]})},yq=()=>{const t=as(),[e,n]=C.useState(null),[r,i]=C.useState(window.innerWidth<850),{logoutAdmin:o,logout:s}=C.useContext(Lt).contextValue,a=()=>{i(window.innerWidth<850)};C.useEffect(()=>(window.scrollTo(0,0),window.addEventListener("resize",a),()=>{window.removeEventListener("resize",a)}),[]);const l=()=>{Je.fire({title:"Salir?",text:"Desea salir del Dashboard de administración?",icon:"question",confirmButtonText:"Salir",showCancelButton:!0,reverseButtons:!0}).then(d=>{d.isConfirmed&&(o(),s(),t("/"))})},u=(d,h=null)=>{switch(d){case"SectionProducts":n(_.jsx(eq,{changeSection:u}));break;case"Edit":n(_.jsx(ZW,{data:h,changeSection:u}));break;case"ListBookings":n(_.jsx(ListBookings,{}));break;case"ListUsers":n(_.jsx(sq,{}));break;case"SectionCategories":n(_.jsx(aq,{changeSection:u}));break;case"NewCategory":n(_.jsx(fq,{data:h,changeSection:u}));break;case"SectionAtributos":n(_.jsx(hq,{changeSection:u}));break;case"NewAtributo":n(_.jsx(vq,{data:h,changeSection:u}));break;case"Exit":l();break;default:n(null);break}};return _.jsx(SH,{children:r?_.jsx(_.Fragment,{children:_.jsxs(AH,{children:[_.jsx("p",{children:"Atención!!!"}),_.jsx(PH,{children:"El Dashboard solo está diseñado para vista desktop"}),_.jsx("img",{src:lq,alt:"imagen Error"})]})}):_.jsxs(_.Fragment,{children:[_.jsx(CH,{children:"Panel de administración"}),_.jsx(LH,{handleClick:u}),_.jsx(IH,{children:e})]})})},wq=()=>{const{isAdmin:t}=C.useContext(Lt).contextValue;return t?_.jsx(DS,{}):_.jsx(xL,{to:"/"})},_q=j.div`
  margin: 0 auto;
  margin-top: 150px;
  width: 80%;
  max-width: 500px;
  height: 100%;
  color: red;
  background: linear-gradient(
    45deg,
    rgba(255, 255, 255, 0.41220238095238093) 0%,
    rgba(255, 255, 255, 0.47942927170868344) 7%,
    rgba(99, 250, 134, 0.35898109243697474) 100%,
    rgba(0, 212, 255, 1) 100%
  );
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  border-radius: 16px;
`,yo=j.label`
  width: 100%;
  height: 19px;
  color: #000;
  margin: 10px;
  font-size: 20px;
  font-weight: 600;
`,wo=j.input`
  width: 100%;
  border-radius: 8px;
  border: 1px solid rgba(129, 129, 129, 0.5);
  padding: 10px;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  font-size: 16px;
  margin-bottom: 12px;

`,_o=j.p`
  height: 24px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: red;
  color: white;
  font-size: 14px;
`,Eq=j.div`
  display: flex;
  width: 90px;
  height: 90px;

  img {
    width: 100%;
    height: auto;
  }
`;j.div`
  font-size: 15px;
  margin: 15px 0;
  color: brown;
  display: flex;
  justify-content: space-between;
  align-self: flex-start;
`;const xq=j.button`
  width: 100%;
  height: 34px;
  font-size: 18px;
  font-weight: bold;
  align-self: center;
  border-radius: 12px;
  border: 0.5px solid rgba(0, 0, 0, 0.5);
  background: linear-gradient(
    0deg,
    #5fbe6f 8.38%,
    rgba(0, 254, 41, 0.4) 113.51%
  );
  cursor: pointer;

  &:hover {
    background: rgba(0, 0, 0, 0.7);
    color: wheat;
  }
`;j.input`
  margin-left: 5px;
  margin-right: 10px;
`;const Tq=()=>{const t=as(),{user:e,setUserData:n}=C.useContext(Lt).contextValue,[r,i]=C.useState({nombre:e.nombre||"",apellido:e.apellido||"",dni:e.dni||"",telefono:e.telefono||"",localidad:e.localidad||"",calle:e.calle||"",numero:e.numero||""}),[o,s]=C.useState([]);C.useEffect(()=>{window.scrollTo(0,0)},[]);const a=o.some(([x])=>x==="nombre"),l=o.some(([x])=>x==="apellido"),u=o.some(([x])=>x==="Localidad"),d=o.some(([x])=>x==="dni"),h=o.some(([x])=>x==="telefono"),p=o.some(([x])=>x==="numero"),g=o.some(([x])=>x==="calle"),T=()=>{r.nombre.length<4&&s(x=>[...x,["nombre"]])},b=()=>{r.apellido.length<4&&s(x=>[...x,["apellido"]])},S=(x,A)=>{i(k=>({...k,[A]:x.target.value})),s([])},E=async()=>{const x={...e,...r};await LA(e.id,x)},m=async x=>{x.preventDefault(),s([]),T(),b(),s(A=>{if(A.length===0){E();const k={...e,...r};n(k),Je.fire({title:"Usuario editado!",text:"El usuario a sido editado correctamente!",icon:"success"}).then(P=>{P.isConfirmed&&t("/")})}else Je.fire({title:"Error!",text:"Verifica los datos ingresados",icon:"error",confirmButtonText:"Volver"});return A})};function v(x){return x&&x.charAt(0).toUpperCase()+x.slice(1).toLowerCase()}return _.jsx("form",{onSubmit:m,children:_.jsxs(_q,{children:[_.jsx(Eq,{children:_.jsx("img",{src:"/src/assets/Male User.png",alt:"user"})}),_.jsx(yo,{children:"Edita tu nombre"}),_.jsx(wo,{type:"text",required:!0,placeholder:"Ingresa tú nombre",value:v(r.nombre),onChange:x=>S(x,"nombre")}),a===!0?_.jsx(_o,{children:"El nombre debe tener minimo 4 letras"}):null,_.jsx(yo,{children:"Edita tu apellido"}),_.jsx(wo,{type:"text",required:!0,placeholder:"Ingresa tú apellido",value:v(r.apellido),onChange:x=>S(x,"apellido")}),l===!0?_.jsx(_o,{children:"El apellido debe tener minimo 4 letras"}):null,_.jsx(yo,{children:"Edita tu numero de dni"}),_.jsx(wo,{type:"number",required:!0,placeholder:"Edita tu dni",value:r.dni,onChange:x=>S(x,"dni")}),d===!0?_.jsx(_o,{children:"Debes ingresar un dni valido"}):null,_.jsx(yo,{children:"Edita tu telefono"}),_.jsx(wo,{type:"string",required:!0,placeholder:"Edita tu telefono",value:r.telefono,onChange:x=>S(x,"telefono")}),h===!0?_.jsx(_o,{children:"El telefono debe tener minimo 8 numeros"}):null,_.jsx(yo,{children:"Edita tu localidad"}),_.jsx(wo,{type:"text",required:!0,placeholder:"Ingresa tú localidad",value:v(r.localidad),onChange:x=>S(x,"localidad")}),u===!0?_.jsx(_o,{children:"La localidad debe tener minimo 4 letras"}):null,_.jsx(yo,{children:"Edita tu calle"}),_.jsx(wo,{type:"text",required:!0,placeholder:"Ingresa tú calle",value:v(r.calle),onChange:x=>S(x,"calle")}),g===!0?_.jsx(_o,{children:"La dirección debe tener minimo 4 letras"}):null,_.jsx(yo,{children:"Edita tu número de puerta"}),_.jsx(wo,{type:"number",required:!0,placeholder:"Ingresa tú número de puerta",value:r.numero,onChange:x=>S(x,"numero")}),p===!0?_.jsx(_o,{children:"El número debe tener minimo 4"}):null,_.jsx(xq,{children:"Editar"})]})})},bq=j.div`
  margin-top: 150px;
  background-color: white;
  min-height: 50vh;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0px 5px 5px 15px rgba(0, 0, 0, 0.2);

  @media (max-width: 1050px) {
    margin: 150px 20px 0;
  }
`,Sq=j.h1`
  text-decoration: underline;
  text-transform: uppercase;
`,Cq=j.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  @media (max-width: 750px) {
    flex-direction: column;

    div {
      width: 100%;
    }
  }
`,As=j.div`
  width: 30%;
  padding: 20px;
  p {
    padding-left: 10px;
    padding-top: 10px;
  }
`,Iq=j.div`
  background-color: #006400;
  padding: 12px;
  width: 80px;
  height: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  margin-bottom: 10px;
  cursor: pointer;
  a {
    font-size: 12px;
    color: white;
    text-decoration: none;
  }

  &:hover {
    background: green;
  }
`,Aq=()=>(C.useEffect(()=>{window.scrollTo(0,0)},[]),_.jsxs(bq,{children:[_.jsx(Iq,{children:_.jsx(Ht,{to:"/",children:"Volver"})}),_.jsx(Sq,{children:"Politicas"}),_.jsxs(Cq,{children:[_.jsxs(As,{children:[_.jsx("h3",{children:"Sobre el arrendamiento"}),_.jsx("p",{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla tempora cumque qui laudantium quo at ratione repellendus earum cupiditate laborum labore tenetur, obcaecati accusantium ad error et distinctio ipsam officiis? Corporis repudiandae, sapiente explicabo, omnis perspiciatis obcaecati harum, sed sequi eveniet illo possimus amet nemo ducimus excepturi. Ut corporis dolor numquam quae, omnis dolorum animi ratione ipsam delectus voluptatibus totam."})]}),_.jsxs(As,{children:[_.jsx("h3",{children:"Estado de los productos"}),_.jsx("p",{children:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate assumenda est, distinctio at exercitationem quae minus aliquid iure perferendis, explicabo vero dignissimos pariatur magnam ducimus nihil delectus eligendi, corporis eos."})]}),_.jsxs(As,{children:[_.jsx("h3",{children:"Sobre metodos de pago"}),_.jsx("p",{children:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate assumenda est, distinctio at exercitationem quae minus aliquid iure perferendis, explicabo vero dignissimos pariatur magnam ducimus nihil delectus eligendi, corporis eos.Voluptate assumenda est, distinctio at exercitationem quae minus aliquid iure perferendis."})]}),_.jsxs(As,{children:[_.jsx("h3",{children:"Uso de instalaciones"}),_.jsx("p",{children:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate assumenda est, distinctio at exercitationem quae minus aliquid iure perferendis, explicabo vero dignissimos pariatur magnam ducimus nihil delectus eligendi, corporis eos."})]}),_.jsxs(As,{children:[_.jsx("h3",{children:"Disponibilidad"}),_.jsx("p",{children:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate assumenda est, distinctio at exercitationem quae minus aliquid iure perferendis, explicabo vero dignissimos pariatur magnam ducimus nihil delectus eligendi, corporis eos."})]}),_.jsxs(As,{children:[_.jsx("h3",{children:"Cancelación de reservas"}),_.jsx("p",{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque quas nulla autem? Cum aliquam deserunt hic commodi cupiditate. Reprehenderit quaerat officia ipsum culpa! Ex saepe optio neque officia obcaecati rerum. Quod nesciunt aliquam eligendi dolore a facere id quas iusto qui et quaerat atque tempora illum, doloremque beatae eos! Animi incidunt accusantium dolorem vitae voluptatibus perspiciatis pariatur mollitia iure ea."})]})]})]})),Pq=()=>_.jsx(kL,{children:_.jsx(bL,{children:_.jsxs(Gn,{path:"",element:_.jsx(H9,{}),children:[_.jsx(Gn,{path:"/",element:_.jsx(w8,{})}),_.jsx(Gn,{path:"/register",element:_.jsx(D8,{})}),_.jsx(Gn,{path:"/login",element:_.jsx($8,{})}),_.jsx(Gn,{path:"/userPerfil",element:_.jsx(Tq,{})}),_.jsx(Gn,{path:"/product/:id",element:_.jsx(bH,{})}),_.jsx(Gn,{path:"/politicas",element:_.jsx(Aq,{})}),_.jsx(Gn,{path:"/",element:_.jsx(wq,{}),children:_.jsx(Gn,{path:"administracion",element:_.jsx(yq,{})})}),_.jsx(Gn,{path:"*",element:_.jsx(x8,{})})]})})});Am.createRoot(document.getElementById("root")).render(_.jsx(h9,{children:_.jsx(Pq,{})}));
