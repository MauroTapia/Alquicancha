function kk(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in t)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(t,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();var Kr=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function yf(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}function Rk(t){if(t.__esModule)return t;var e=t.default;if(typeof e=="function"){var n=function r(){return this instanceof r?Reflect.construct(e,arguments,this.constructor):e.apply(this,arguments)};n.prototype=e.prototype}else n={};return Object.defineProperty(n,"__esModule",{value:!0}),Object.keys(t).forEach(function(r){var i=Object.getOwnPropertyDescriptor(t,r);Object.defineProperty(n,r,i.get?i:{enumerable:!0,get:function(){return t[r]}})}),n}var YE={exports:{}},vf={},XE={exports:{}},pe={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var uc=Symbol.for("react.element"),Ok=Symbol.for("react.portal"),Dk=Symbol.for("react.fragment"),Nk=Symbol.for("react.strict_mode"),Lk=Symbol.for("react.profiler"),Mk=Symbol.for("react.provider"),Vk=Symbol.for("react.context"),jk=Symbol.for("react.forward_ref"),Fk=Symbol.for("react.suspense"),$k=Symbol.for("react.memo"),Bk=Symbol.for("react.lazy"),i0=Symbol.iterator;function Uk(t){return t===null||typeof t!="object"?null:(t=i0&&t[i0]||t["@@iterator"],typeof t=="function"?t:null)}var JE={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},ZE=Object.assign,eT={};function ra(t,e,n){this.props=t,this.context=e,this.refs=eT,this.updater=n||JE}ra.prototype.isReactComponent={};ra.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};ra.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function tT(){}tT.prototype=ra.prototype;function $g(t,e,n){this.props=t,this.context=e,this.refs=eT,this.updater=n||JE}var Bg=$g.prototype=new tT;Bg.constructor=$g;ZE(Bg,ra.prototype);Bg.isPureReactComponent=!0;var s0=Array.isArray,nT=Object.prototype.hasOwnProperty,Ug={current:null},rT={key:!0,ref:!0,__self:!0,__source:!0};function iT(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)nT.call(e,r)&&!rT.hasOwnProperty(r)&&(i[r]=e[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),c=0;c<a;c++)l[c]=arguments[c+2];i.children=l}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:uc,type:t,key:s,ref:o,props:i,_owner:Ug.current}}function zk(t,e){return{$$typeof:uc,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function zg(t){return typeof t=="object"&&t!==null&&t.$$typeof===uc}function Hk(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var o0=/\/+/g;function Dh(t,e){return typeof t=="object"&&t!==null&&t.key!=null?Hk(""+t.key):e.toString(36)}function Du(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case uc:case Ok:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+Dh(o,0):r,s0(i)?(n="",t!=null&&(n=t.replace(o0,"$&/")+"/"),Du(i,e,n,"",function(c){return c})):i!=null&&(zg(i)&&(i=zk(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(o0,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",s0(t))for(var a=0;a<t.length;a++){s=t[a];var l=r+Dh(s,a);o+=Du(s,e,n,l,i)}else if(l=Uk(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=r+Dh(s,a++),o+=Du(s,e,n,l,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Xc(t,e,n){if(t==null)return t;var r=[],i=0;return Du(t,r,"","",function(s){return e.call(n,s,i++)}),r}function Wk(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Gt={current:null},Nu={transition:null},qk={ReactCurrentDispatcher:Gt,ReactCurrentBatchConfig:Nu,ReactCurrentOwner:Ug};pe.Children={map:Xc,forEach:function(t,e,n){Xc(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Xc(t,function(){e++}),e},toArray:function(t){return Xc(t,function(e){return e})||[]},only:function(t){if(!zg(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};pe.Component=ra;pe.Fragment=Dk;pe.Profiler=Lk;pe.PureComponent=$g;pe.StrictMode=Nk;pe.Suspense=Fk;pe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=qk;pe.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=ZE({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Ug.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)nT.call(e,l)&&!rT.hasOwnProperty(l)&&(r[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var c=0;c<l;c++)a[c]=arguments[c+2];r.children=a}return{$$typeof:uc,type:t.type,key:i,ref:s,props:r,_owner:o}};pe.createContext=function(t){return t={$$typeof:Vk,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:Mk,_context:t},t.Consumer=t};pe.createElement=iT;pe.createFactory=function(t){var e=iT.bind(null,t);return e.type=t,e};pe.createRef=function(){return{current:null}};pe.forwardRef=function(t){return{$$typeof:jk,render:t}};pe.isValidElement=zg;pe.lazy=function(t){return{$$typeof:Bk,_payload:{_status:-1,_result:t},_init:Wk}};pe.memo=function(t,e){return{$$typeof:$k,type:t,compare:e===void 0?null:e}};pe.startTransition=function(t){var e=Nu.transition;Nu.transition={};try{t()}finally{Nu.transition=e}};pe.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};pe.useCallback=function(t,e){return Gt.current.useCallback(t,e)};pe.useContext=function(t){return Gt.current.useContext(t)};pe.useDebugValue=function(){};pe.useDeferredValue=function(t){return Gt.current.useDeferredValue(t)};pe.useEffect=function(t,e){return Gt.current.useEffect(t,e)};pe.useId=function(){return Gt.current.useId()};pe.useImperativeHandle=function(t,e,n){return Gt.current.useImperativeHandle(t,e,n)};pe.useInsertionEffect=function(t,e){return Gt.current.useInsertionEffect(t,e)};pe.useLayoutEffect=function(t,e){return Gt.current.useLayoutEffect(t,e)};pe.useMemo=function(t,e){return Gt.current.useMemo(t,e)};pe.useReducer=function(t,e,n){return Gt.current.useReducer(t,e,n)};pe.useRef=function(t){return Gt.current.useRef(t)};pe.useState=function(t){return Gt.current.useState(t)};pe.useSyncExternalStore=function(t,e,n){return Gt.current.useSyncExternalStore(t,e,n)};pe.useTransition=function(){return Gt.current.useTransition()};pe.version="18.2.0";XE.exports=pe;var A=XE.exports;const te=yf(A),Gk=kk({__proto__:null,default:te},[A]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Kk=A,Qk=Symbol.for("react.element"),Yk=Symbol.for("react.fragment"),Xk=Object.prototype.hasOwnProperty,Jk=Kk.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Zk={key:!0,ref:!0,__self:!0,__source:!0};function sT(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)Xk.call(e,r)&&!Zk.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:Qk,type:t,key:s,ref:o,props:i,_owner:Jk.current}}vf.Fragment=Yk;vf.jsx=sT;vf.jsxs=sT;YE.exports=vf;var T=YE.exports,Up={},oT={exports:{}},vn={},aT={exports:{}},lT={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(D,B){var K=D.length;D.push(B);e:for(;0<K;){var re=K-1>>>1,ue=D[re];if(0<i(ue,B))D[re]=B,D[K]=ue,K=re;else break e}}function n(D){return D.length===0?null:D[0]}function r(D){if(D.length===0)return null;var B=D[0],K=D.pop();if(K!==B){D[0]=K;e:for(var re=0,ue=D.length,ke=ue>>>1;re<ke;){var fe=2*(re+1)-1,nt=D[fe],ve=fe+1,lt=D[ve];if(0>i(nt,K))ve<ue&&0>i(lt,nt)?(D[re]=lt,D[ve]=K,re=ve):(D[re]=nt,D[fe]=K,re=fe);else if(ve<ue&&0>i(lt,K))D[re]=lt,D[ve]=K,re=ve;else break e}}return B}function i(D,B){var K=D.sortIndex-B.sortIndex;return K!==0?K:D.id-B.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],c=[],u=1,h=null,m=3,v=!1,x=!1,g=!1,S=typeof setTimeout=="function"?setTimeout:null,w=typeof clearTimeout=="function"?clearTimeout:null,p=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function y(D){for(var B=n(c);B!==null;){if(B.callback===null)r(c);else if(B.startTime<=D)r(c),B.sortIndex=B.expirationTime,e(l,B);else break;B=n(c)}}function E(D){if(g=!1,y(D),!x)if(n(l)!==null)x=!0,q(C);else{var B=n(c);B!==null&&k(E,B.startTime-D)}}function C(D,B){x=!1,g&&(g=!1,w(R),R=-1),v=!0;var K=m;try{for(y(B),h=n(l);h!==null&&(!(h.expirationTime>B)||D&&!U());){var re=h.callback;if(typeof re=="function"){h.callback=null,m=h.priorityLevel;var ue=re(h.expirationTime<=B);B=t.unstable_now(),typeof ue=="function"?h.callback=ue:h===n(l)&&r(l),y(B)}else r(l);h=n(l)}if(h!==null)var ke=!0;else{var fe=n(c);fe!==null&&k(E,fe.startTime-B),ke=!1}return ke}finally{h=null,m=K,v=!1}}var I=!1,P=null,R=-1,N=5,O=-1;function U(){return!(t.unstable_now()-O<N)}function W(){if(P!==null){var D=t.unstable_now();O=D;var B=!0;try{B=P(!0,D)}finally{B?F():(I=!1,P=null)}}else I=!1}var F;if(typeof p=="function")F=function(){p(W)};else if(typeof MessageChannel<"u"){var M=new MessageChannel,V=M.port2;M.port1.onmessage=W,F=function(){V.postMessage(null)}}else F=function(){S(W,0)};function q(D){P=D,I||(I=!0,F())}function k(D,B){R=S(function(){D(t.unstable_now())},B)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(D){D.callback=null},t.unstable_continueExecution=function(){x||v||(x=!0,q(C))},t.unstable_forceFrameRate=function(D){0>D||125<D?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):N=0<D?Math.floor(1e3/D):5},t.unstable_getCurrentPriorityLevel=function(){return m},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(D){switch(m){case 1:case 2:case 3:var B=3;break;default:B=m}var K=m;m=B;try{return D()}finally{m=K}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(D,B){switch(D){case 1:case 2:case 3:case 4:case 5:break;default:D=3}var K=m;m=D;try{return B()}finally{m=K}},t.unstable_scheduleCallback=function(D,B,K){var re=t.unstable_now();switch(typeof K=="object"&&K!==null?(K=K.delay,K=typeof K=="number"&&0<K?re+K:re):K=re,D){case 1:var ue=-1;break;case 2:ue=250;break;case 5:ue=1073741823;break;case 4:ue=1e4;break;default:ue=5e3}return ue=K+ue,D={id:u++,callback:B,priorityLevel:D,startTime:K,expirationTime:ue,sortIndex:-1},K>re?(D.sortIndex=K,e(c,D),n(l)===null&&D===n(c)&&(g?(w(R),R=-1):g=!0,k(E,K-re))):(D.sortIndex=ue,e(l,D),x||v||(x=!0,q(C))),D},t.unstable_shouldYield=U,t.unstable_wrapCallback=function(D){var B=m;return function(){var K=m;m=B;try{return D.apply(this,arguments)}finally{m=K}}}})(lT);aT.exports=lT;var eR=aT.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var cT=A,gn=eR;function H(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var uT=new Set,Sl={};function Ds(t,e){No(t,e),No(t+"Capture",e)}function No(t,e){for(Sl[t]=e,t=0;t<e.length;t++)uT.add(e[t])}var Mr=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),zp=Object.prototype.hasOwnProperty,tR=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,a0={},l0={};function nR(t){return zp.call(l0,t)?!0:zp.call(a0,t)?!1:tR.test(t)?l0[t]=!0:(a0[t]=!0,!1)}function rR(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function iR(t,e,n,r){if(e===null||typeof e>"u"||rR(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Kt(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Pt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Pt[t]=new Kt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Pt[e]=new Kt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Pt[t]=new Kt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Pt[t]=new Kt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Pt[t]=new Kt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Pt[t]=new Kt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Pt[t]=new Kt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Pt[t]=new Kt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Pt[t]=new Kt(t,5,!1,t.toLowerCase(),null,!1,!1)});var Hg=/[\-:]([a-z])/g;function Wg(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Hg,Wg);Pt[e]=new Kt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Hg,Wg);Pt[e]=new Kt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Hg,Wg);Pt[e]=new Kt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Pt[t]=new Kt(t,1,!1,t.toLowerCase(),null,!1,!1)});Pt.xlinkHref=new Kt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Pt[t]=new Kt(t,1,!1,t.toLowerCase(),null,!0,!0)});function qg(t,e,n,r){var i=Pt.hasOwnProperty(e)?Pt[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(iR(e,n,i,r)&&(n=null),r||i===null?nR(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var Wr=cT.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Jc=Symbol.for("react.element"),so=Symbol.for("react.portal"),oo=Symbol.for("react.fragment"),Gg=Symbol.for("react.strict_mode"),Hp=Symbol.for("react.profiler"),dT=Symbol.for("react.provider"),fT=Symbol.for("react.context"),Kg=Symbol.for("react.forward_ref"),Wp=Symbol.for("react.suspense"),qp=Symbol.for("react.suspense_list"),Qg=Symbol.for("react.memo"),Jr=Symbol.for("react.lazy"),hT=Symbol.for("react.offscreen"),c0=Symbol.iterator;function Aa(t){return t===null||typeof t!="object"?null:(t=c0&&t[c0]||t["@@iterator"],typeof t=="function"?t:null)}var We=Object.assign,Nh;function za(t){if(Nh===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Nh=e&&e[1]||""}return`
`+Nh+t}var Lh=!1;function Mh(t,e){if(!t||Lh)return"";Lh=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var r=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){r=c}t.call(e.prototype)}else{try{throw Error()}catch(c){r=c}t()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var i=c.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a]){var l=`
`+i[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{Lh=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?za(t):""}function sR(t){switch(t.tag){case 5:return za(t.type);case 16:return za("Lazy");case 13:return za("Suspense");case 19:return za("SuspenseList");case 0:case 2:case 15:return t=Mh(t.type,!1),t;case 11:return t=Mh(t.type.render,!1),t;case 1:return t=Mh(t.type,!0),t;default:return""}}function Gp(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case oo:return"Fragment";case so:return"Portal";case Hp:return"Profiler";case Gg:return"StrictMode";case Wp:return"Suspense";case qp:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case fT:return(t.displayName||"Context")+".Consumer";case dT:return(t._context.displayName||"Context")+".Provider";case Kg:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Qg:return e=t.displayName||null,e!==null?e:Gp(t.type)||"Memo";case Jr:e=t._payload,t=t._init;try{return Gp(t(e))}catch{}}return null}function oR(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Gp(e);case 8:return e===Gg?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Ii(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function pT(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function aR(t){var e=pT(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Zc(t){t._valueTracker||(t._valueTracker=aR(t))}function mT(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=pT(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function sd(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Kp(t,e){var n=e.checked;return We({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function u0(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=Ii(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function gT(t,e){e=e.checked,e!=null&&qg(t,"checked",e,!1)}function Qp(t,e){gT(t,e);var n=Ii(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Yp(t,e.type,n):e.hasOwnProperty("defaultValue")&&Yp(t,e.type,Ii(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function d0(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Yp(t,e,n){(e!=="number"||sd(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Ha=Array.isArray;function To(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+Ii(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function Xp(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(H(91));return We({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function f0(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(H(92));if(Ha(n)){if(1<n.length)throw Error(H(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Ii(n)}}function yT(t,e){var n=Ii(e.value),r=Ii(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function h0(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function vT(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Jp(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?vT(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var eu,wT=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(eu=eu||document.createElement("div"),eu.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=eu.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function bl(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var nl={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},lR=["Webkit","ms","Moz","O"];Object.keys(nl).forEach(function(t){lR.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),nl[e]=nl[t]})});function _T(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||nl.hasOwnProperty(t)&&nl[t]?(""+e).trim():e+"px"}function ET(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=_T(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var cR=We({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Zp(t,e){if(e){if(cR[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(H(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(H(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(H(61))}if(e.style!=null&&typeof e.style!="object")throw Error(H(62))}}function em(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var tm=null;function Yg(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var nm=null,xo=null,So=null;function p0(t){if(t=hc(t)){if(typeof nm!="function")throw Error(H(280));var e=t.stateNode;e&&(e=xf(e),nm(t.stateNode,t.type,e))}}function TT(t){xo?So?So.push(t):So=[t]:xo=t}function xT(){if(xo){var t=xo,e=So;if(So=xo=null,p0(t),e)for(t=0;t<e.length;t++)p0(e[t])}}function ST(t,e){return t(e)}function bT(){}var Vh=!1;function CT(t,e,n){if(Vh)return t(e,n);Vh=!0;try{return ST(t,e,n)}finally{Vh=!1,(xo!==null||So!==null)&&(bT(),xT())}}function Cl(t,e){var n=t.stateNode;if(n===null)return null;var r=xf(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(H(231,e,typeof n));return n}var rm=!1;if(Mr)try{var Pa={};Object.defineProperty(Pa,"passive",{get:function(){rm=!0}}),window.addEventListener("test",Pa,Pa),window.removeEventListener("test",Pa,Pa)}catch{rm=!1}function uR(t,e,n,r,i,s,o,a,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(u){this.onError(u)}}var rl=!1,od=null,ad=!1,im=null,dR={onError:function(t){rl=!0,od=t}};function fR(t,e,n,r,i,s,o,a,l){rl=!1,od=null,uR.apply(dR,arguments)}function hR(t,e,n,r,i,s,o,a,l){if(fR.apply(this,arguments),rl){if(rl){var c=od;rl=!1,od=null}else throw Error(H(198));ad||(ad=!0,im=c)}}function Ns(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function IT(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function m0(t){if(Ns(t)!==t)throw Error(H(188))}function pR(t){var e=t.alternate;if(!e){if(e=Ns(t),e===null)throw Error(H(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return m0(i),t;if(s===r)return m0(i),e;s=s.sibling}throw Error(H(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o)throw Error(H(189))}}if(n.alternate!==r)throw Error(H(190))}if(n.tag!==3)throw Error(H(188));return n.stateNode.current===n?t:e}function AT(t){return t=pR(t),t!==null?PT(t):null}function PT(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=PT(t);if(e!==null)return e;t=t.sibling}return null}var kT=gn.unstable_scheduleCallback,g0=gn.unstable_cancelCallback,mR=gn.unstable_shouldYield,gR=gn.unstable_requestPaint,et=gn.unstable_now,yR=gn.unstable_getCurrentPriorityLevel,Xg=gn.unstable_ImmediatePriority,RT=gn.unstable_UserBlockingPriority,ld=gn.unstable_NormalPriority,vR=gn.unstable_LowPriority,OT=gn.unstable_IdlePriority,wf=null,cr=null;function wR(t){if(cr&&typeof cr.onCommitFiberRoot=="function")try{cr.onCommitFiberRoot(wf,t,void 0,(t.current.flags&128)===128)}catch{}}var Fn=Math.clz32?Math.clz32:TR,_R=Math.log,ER=Math.LN2;function TR(t){return t>>>=0,t===0?32:31-(_R(t)/ER|0)|0}var tu=64,nu=4194304;function Wa(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function cd(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~i;a!==0?r=Wa(a):(s&=o,s!==0&&(r=Wa(s)))}else o=n&~i,o!==0?r=Wa(o):s!==0&&(r=Wa(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-Fn(e),i=1<<n,r|=t[n],e&=~i;return r}function xR(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function SR(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-Fn(s),a=1<<o,l=i[o];l===-1?(!(a&n)||a&r)&&(i[o]=xR(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function sm(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function DT(){var t=tu;return tu<<=1,!(tu&4194240)&&(tu=64),t}function jh(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function dc(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Fn(e),t[e]=n}function bR(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-Fn(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function Jg(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-Fn(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var xe=0;function NT(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var LT,Zg,MT,VT,jT,om=!1,ru=[],pi=null,mi=null,gi=null,Il=new Map,Al=new Map,ei=[],CR="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function y0(t,e){switch(t){case"focusin":case"focusout":pi=null;break;case"dragenter":case"dragleave":mi=null;break;case"mouseover":case"mouseout":gi=null;break;case"pointerover":case"pointerout":Il.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Al.delete(e.pointerId)}}function ka(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=hc(e),e!==null&&Zg(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function IR(t,e,n,r,i){switch(e){case"focusin":return pi=ka(pi,t,e,n,r,i),!0;case"dragenter":return mi=ka(mi,t,e,n,r,i),!0;case"mouseover":return gi=ka(gi,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return Il.set(s,ka(Il.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,Al.set(s,ka(Al.get(s)||null,t,e,n,r,i)),!0}return!1}function FT(t){var e=ts(t.target);if(e!==null){var n=Ns(e);if(n!==null){if(e=n.tag,e===13){if(e=IT(n),e!==null){t.blockedOn=e,jT(t.priority,function(){MT(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Lu(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=am(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);tm=r,n.target.dispatchEvent(r),tm=null}else return e=hc(n),e!==null&&Zg(e),t.blockedOn=n,!1;e.shift()}return!0}function v0(t,e,n){Lu(t)&&n.delete(e)}function AR(){om=!1,pi!==null&&Lu(pi)&&(pi=null),mi!==null&&Lu(mi)&&(mi=null),gi!==null&&Lu(gi)&&(gi=null),Il.forEach(v0),Al.forEach(v0)}function Ra(t,e){t.blockedOn===e&&(t.blockedOn=null,om||(om=!0,gn.unstable_scheduleCallback(gn.unstable_NormalPriority,AR)))}function Pl(t){function e(i){return Ra(i,t)}if(0<ru.length){Ra(ru[0],t);for(var n=1;n<ru.length;n++){var r=ru[n];r.blockedOn===t&&(r.blockedOn=null)}}for(pi!==null&&Ra(pi,t),mi!==null&&Ra(mi,t),gi!==null&&Ra(gi,t),Il.forEach(e),Al.forEach(e),n=0;n<ei.length;n++)r=ei[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<ei.length&&(n=ei[0],n.blockedOn===null);)FT(n),n.blockedOn===null&&ei.shift()}var bo=Wr.ReactCurrentBatchConfig,ud=!0;function PR(t,e,n,r){var i=xe,s=bo.transition;bo.transition=null;try{xe=1,ey(t,e,n,r)}finally{xe=i,bo.transition=s}}function kR(t,e,n,r){var i=xe,s=bo.transition;bo.transition=null;try{xe=4,ey(t,e,n,r)}finally{xe=i,bo.transition=s}}function ey(t,e,n,r){if(ud){var i=am(t,e,n,r);if(i===null)Kh(t,e,r,dd,n),y0(t,r);else if(IR(i,t,e,n,r))r.stopPropagation();else if(y0(t,r),e&4&&-1<CR.indexOf(t)){for(;i!==null;){var s=hc(i);if(s!==null&&LT(s),s=am(t,e,n,r),s===null&&Kh(t,e,r,dd,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else Kh(t,e,r,null,n)}}var dd=null;function am(t,e,n,r){if(dd=null,t=Yg(r),t=ts(t),t!==null)if(e=Ns(t),e===null)t=null;else if(n=e.tag,n===13){if(t=IT(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return dd=t,null}function $T(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(yR()){case Xg:return 1;case RT:return 4;case ld:case vR:return 16;case OT:return 536870912;default:return 16}default:return 16}}var ai=null,ty=null,Mu=null;function BT(){if(Mu)return Mu;var t,e=ty,n=e.length,r,i="value"in ai?ai.value:ai.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return Mu=i.slice(t,1<r?1-r:void 0)}function Vu(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function iu(){return!0}function w0(){return!1}function wn(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?iu:w0,this.isPropagationStopped=w0,this}return We(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=iu)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=iu)},persist:function(){},isPersistent:iu}),e}var ia={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ny=wn(ia),fc=We({},ia,{view:0,detail:0}),RR=wn(fc),Fh,$h,Oa,_f=We({},fc,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ry,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Oa&&(Oa&&t.type==="mousemove"?(Fh=t.screenX-Oa.screenX,$h=t.screenY-Oa.screenY):$h=Fh=0,Oa=t),Fh)},movementY:function(t){return"movementY"in t?t.movementY:$h}}),_0=wn(_f),OR=We({},_f,{dataTransfer:0}),DR=wn(OR),NR=We({},fc,{relatedTarget:0}),Bh=wn(NR),LR=We({},ia,{animationName:0,elapsedTime:0,pseudoElement:0}),MR=wn(LR),VR=We({},ia,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),jR=wn(VR),FR=We({},ia,{data:0}),E0=wn(FR),$R={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},BR={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},UR={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function zR(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=UR[t])?!!e[t]:!1}function ry(){return zR}var HR=We({},fc,{key:function(t){if(t.key){var e=$R[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Vu(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?BR[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ry,charCode:function(t){return t.type==="keypress"?Vu(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Vu(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),WR=wn(HR),qR=We({},_f,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),T0=wn(qR),GR=We({},fc,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ry}),KR=wn(GR),QR=We({},ia,{propertyName:0,elapsedTime:0,pseudoElement:0}),YR=wn(QR),XR=We({},_f,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),JR=wn(XR),ZR=[9,13,27,32],iy=Mr&&"CompositionEvent"in window,il=null;Mr&&"documentMode"in document&&(il=document.documentMode);var eO=Mr&&"TextEvent"in window&&!il,UT=Mr&&(!iy||il&&8<il&&11>=il),x0=String.fromCharCode(32),S0=!1;function zT(t,e){switch(t){case"keyup":return ZR.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function HT(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var ao=!1;function tO(t,e){switch(t){case"compositionend":return HT(e);case"keypress":return e.which!==32?null:(S0=!0,x0);case"textInput":return t=e.data,t===x0&&S0?null:t;default:return null}}function nO(t,e){if(ao)return t==="compositionend"||!iy&&zT(t,e)?(t=BT(),Mu=ty=ai=null,ao=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return UT&&e.locale!=="ko"?null:e.data;default:return null}}var rO={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function b0(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!rO[t.type]:e==="textarea"}function WT(t,e,n,r){TT(r),e=fd(e,"onChange"),0<e.length&&(n=new ny("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var sl=null,kl=null;function iO(t){nx(t,0)}function Ef(t){var e=uo(t);if(mT(e))return t}function sO(t,e){if(t==="change")return e}var qT=!1;if(Mr){var Uh;if(Mr){var zh="oninput"in document;if(!zh){var C0=document.createElement("div");C0.setAttribute("oninput","return;"),zh=typeof C0.oninput=="function"}Uh=zh}else Uh=!1;qT=Uh&&(!document.documentMode||9<document.documentMode)}function I0(){sl&&(sl.detachEvent("onpropertychange",GT),kl=sl=null)}function GT(t){if(t.propertyName==="value"&&Ef(kl)){var e=[];WT(e,kl,t,Yg(t)),CT(iO,e)}}function oO(t,e,n){t==="focusin"?(I0(),sl=e,kl=n,sl.attachEvent("onpropertychange",GT)):t==="focusout"&&I0()}function aO(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Ef(kl)}function lO(t,e){if(t==="click")return Ef(e)}function cO(t,e){if(t==="input"||t==="change")return Ef(e)}function uO(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Hn=typeof Object.is=="function"?Object.is:uO;function Rl(t,e){if(Hn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!zp.call(e,i)||!Hn(t[i],e[i]))return!1}return!0}function A0(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function P0(t,e){var n=A0(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=A0(n)}}function KT(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?KT(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function QT(){for(var t=window,e=sd();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=sd(t.document)}return e}function sy(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function dO(t){var e=QT(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&KT(n.ownerDocument.documentElement,n)){if(r!==null&&sy(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=P0(n,s);var o=P0(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var fO=Mr&&"documentMode"in document&&11>=document.documentMode,lo=null,lm=null,ol=null,cm=!1;function k0(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;cm||lo==null||lo!==sd(r)||(r=lo,"selectionStart"in r&&sy(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),ol&&Rl(ol,r)||(ol=r,r=fd(lm,"onSelect"),0<r.length&&(e=new ny("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=lo)))}function su(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var co={animationend:su("Animation","AnimationEnd"),animationiteration:su("Animation","AnimationIteration"),animationstart:su("Animation","AnimationStart"),transitionend:su("Transition","TransitionEnd")},Hh={},YT={};Mr&&(YT=document.createElement("div").style,"AnimationEvent"in window||(delete co.animationend.animation,delete co.animationiteration.animation,delete co.animationstart.animation),"TransitionEvent"in window||delete co.transitionend.transition);function Tf(t){if(Hh[t])return Hh[t];if(!co[t])return t;var e=co[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in YT)return Hh[t]=e[n];return t}var XT=Tf("animationend"),JT=Tf("animationiteration"),ZT=Tf("animationstart"),ex=Tf("transitionend"),tx=new Map,R0="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Di(t,e){tx.set(t,e),Ds(e,[t])}for(var Wh=0;Wh<R0.length;Wh++){var qh=R0[Wh],hO=qh.toLowerCase(),pO=qh[0].toUpperCase()+qh.slice(1);Di(hO,"on"+pO)}Di(XT,"onAnimationEnd");Di(JT,"onAnimationIteration");Di(ZT,"onAnimationStart");Di("dblclick","onDoubleClick");Di("focusin","onFocus");Di("focusout","onBlur");Di(ex,"onTransitionEnd");No("onMouseEnter",["mouseout","mouseover"]);No("onMouseLeave",["mouseout","mouseover"]);No("onPointerEnter",["pointerout","pointerover"]);No("onPointerLeave",["pointerout","pointerover"]);Ds("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Ds("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Ds("onBeforeInput",["compositionend","keypress","textInput","paste"]);Ds("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Ds("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Ds("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var qa="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),mO=new Set("cancel close invalid load scroll toggle".split(" ").concat(qa));function O0(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,hR(r,e,void 0,t),t.currentTarget=null}function nx(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var a=r[o],l=a.instance,c=a.currentTarget;if(a=a.listener,l!==s&&i.isPropagationStopped())break e;O0(i,a,c),s=l}else for(o=0;o<r.length;o++){if(a=r[o],l=a.instance,c=a.currentTarget,a=a.listener,l!==s&&i.isPropagationStopped())break e;O0(i,a,c),s=l}}}if(ad)throw t=im,ad=!1,im=null,t}function Oe(t,e){var n=e[pm];n===void 0&&(n=e[pm]=new Set);var r=t+"__bubble";n.has(r)||(rx(e,t,2,!1),n.add(r))}function Gh(t,e,n){var r=0;e&&(r|=4),rx(n,t,r,e)}var ou="_reactListening"+Math.random().toString(36).slice(2);function Ol(t){if(!t[ou]){t[ou]=!0,uT.forEach(function(n){n!=="selectionchange"&&(mO.has(n)||Gh(n,!1,t),Gh(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[ou]||(e[ou]=!0,Gh("selectionchange",!1,e))}}function rx(t,e,n,r){switch($T(e)){case 1:var i=PR;break;case 4:i=kR;break;default:i=ey}n=i.bind(null,e,n,t),i=void 0,!rm||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function Kh(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;o=o.return}for(;a!==null;){if(o=ts(a),o===null)return;if(l=o.tag,l===5||l===6){r=s=o;continue e}a=a.parentNode}}r=r.return}CT(function(){var c=s,u=Yg(n),h=[];e:{var m=tx.get(t);if(m!==void 0){var v=ny,x=t;switch(t){case"keypress":if(Vu(n)===0)break e;case"keydown":case"keyup":v=WR;break;case"focusin":x="focus",v=Bh;break;case"focusout":x="blur",v=Bh;break;case"beforeblur":case"afterblur":v=Bh;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":v=_0;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":v=DR;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":v=KR;break;case XT:case JT:case ZT:v=MR;break;case ex:v=YR;break;case"scroll":v=RR;break;case"wheel":v=JR;break;case"copy":case"cut":case"paste":v=jR;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":v=T0}var g=(e&4)!==0,S=!g&&t==="scroll",w=g?m!==null?m+"Capture":null:m;g=[];for(var p=c,y;p!==null;){y=p;var E=y.stateNode;if(y.tag===5&&E!==null&&(y=E,w!==null&&(E=Cl(p,w),E!=null&&g.push(Dl(p,E,y)))),S)break;p=p.return}0<g.length&&(m=new v(m,x,null,n,u),h.push({event:m,listeners:g}))}}if(!(e&7)){e:{if(m=t==="mouseover"||t==="pointerover",v=t==="mouseout"||t==="pointerout",m&&n!==tm&&(x=n.relatedTarget||n.fromElement)&&(ts(x)||x[Vr]))break e;if((v||m)&&(m=u.window===u?u:(m=u.ownerDocument)?m.defaultView||m.parentWindow:window,v?(x=n.relatedTarget||n.toElement,v=c,x=x?ts(x):null,x!==null&&(S=Ns(x),x!==S||x.tag!==5&&x.tag!==6)&&(x=null)):(v=null,x=c),v!==x)){if(g=_0,E="onMouseLeave",w="onMouseEnter",p="mouse",(t==="pointerout"||t==="pointerover")&&(g=T0,E="onPointerLeave",w="onPointerEnter",p="pointer"),S=v==null?m:uo(v),y=x==null?m:uo(x),m=new g(E,p+"leave",v,n,u),m.target=S,m.relatedTarget=y,E=null,ts(u)===c&&(g=new g(w,p+"enter",x,n,u),g.target=y,g.relatedTarget=S,E=g),S=E,v&&x)t:{for(g=v,w=x,p=0,y=g;y;y=Zs(y))p++;for(y=0,E=w;E;E=Zs(E))y++;for(;0<p-y;)g=Zs(g),p--;for(;0<y-p;)w=Zs(w),y--;for(;p--;){if(g===w||w!==null&&g===w.alternate)break t;g=Zs(g),w=Zs(w)}g=null}else g=null;v!==null&&D0(h,m,v,g,!1),x!==null&&S!==null&&D0(h,S,x,g,!0)}}e:{if(m=c?uo(c):window,v=m.nodeName&&m.nodeName.toLowerCase(),v==="select"||v==="input"&&m.type==="file")var C=sO;else if(b0(m))if(qT)C=cO;else{C=aO;var I=oO}else(v=m.nodeName)&&v.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(C=lO);if(C&&(C=C(t,c))){WT(h,C,n,u);break e}I&&I(t,m,c),t==="focusout"&&(I=m._wrapperState)&&I.controlled&&m.type==="number"&&Yp(m,"number",m.value)}switch(I=c?uo(c):window,t){case"focusin":(b0(I)||I.contentEditable==="true")&&(lo=I,lm=c,ol=null);break;case"focusout":ol=lm=lo=null;break;case"mousedown":cm=!0;break;case"contextmenu":case"mouseup":case"dragend":cm=!1,k0(h,n,u);break;case"selectionchange":if(fO)break;case"keydown":case"keyup":k0(h,n,u)}var P;if(iy)e:{switch(t){case"compositionstart":var R="onCompositionStart";break e;case"compositionend":R="onCompositionEnd";break e;case"compositionupdate":R="onCompositionUpdate";break e}R=void 0}else ao?zT(t,n)&&(R="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(R="onCompositionStart");R&&(UT&&n.locale!=="ko"&&(ao||R!=="onCompositionStart"?R==="onCompositionEnd"&&ao&&(P=BT()):(ai=u,ty="value"in ai?ai.value:ai.textContent,ao=!0)),I=fd(c,R),0<I.length&&(R=new E0(R,t,null,n,u),h.push({event:R,listeners:I}),P?R.data=P:(P=HT(n),P!==null&&(R.data=P)))),(P=eO?tO(t,n):nO(t,n))&&(c=fd(c,"onBeforeInput"),0<c.length&&(u=new E0("onBeforeInput","beforeinput",null,n,u),h.push({event:u,listeners:c}),u.data=P))}nx(h,e)})}function Dl(t,e,n){return{instance:t,listener:e,currentTarget:n}}function fd(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=Cl(t,n),s!=null&&r.unshift(Dl(t,s,i)),s=Cl(t,e),s!=null&&r.push(Dl(t,s,i))),t=t.return}return r}function Zs(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function D0(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var a=n,l=a.alternate,c=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&c!==null&&(a=c,i?(l=Cl(n,s),l!=null&&o.unshift(Dl(n,l,a))):i||(l=Cl(n,s),l!=null&&o.push(Dl(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var gO=/\r\n?/g,yO=/\u0000|\uFFFD/g;function N0(t){return(typeof t=="string"?t:""+t).replace(gO,`
`).replace(yO,"")}function au(t,e,n){if(e=N0(e),N0(t)!==e&&n)throw Error(H(425))}function hd(){}var um=null,dm=null;function fm(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var hm=typeof setTimeout=="function"?setTimeout:void 0,vO=typeof clearTimeout=="function"?clearTimeout:void 0,L0=typeof Promise=="function"?Promise:void 0,wO=typeof queueMicrotask=="function"?queueMicrotask:typeof L0<"u"?function(t){return L0.resolve(null).then(t).catch(_O)}:hm;function _O(t){setTimeout(function(){throw t})}function Qh(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),Pl(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Pl(e)}function yi(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function M0(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var sa=Math.random().toString(36).slice(2),rr="__reactFiber$"+sa,Nl="__reactProps$"+sa,Vr="__reactContainer$"+sa,pm="__reactEvents$"+sa,EO="__reactListeners$"+sa,TO="__reactHandles$"+sa;function ts(t){var e=t[rr];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Vr]||n[rr]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=M0(t);t!==null;){if(n=t[rr])return n;t=M0(t)}return e}t=n,n=t.parentNode}return null}function hc(t){return t=t[rr]||t[Vr],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function uo(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(H(33))}function xf(t){return t[Nl]||null}var mm=[],fo=-1;function Ni(t){return{current:t}}function Me(t){0>fo||(t.current=mm[fo],mm[fo]=null,fo--)}function Pe(t,e){fo++,mm[fo]=t.current,t.current=e}var Ai={},$t=Ni(Ai),nn=Ni(!1),gs=Ai;function Lo(t,e){var n=t.type.contextTypes;if(!n)return Ai;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function rn(t){return t=t.childContextTypes,t!=null}function pd(){Me(nn),Me($t)}function V0(t,e,n){if($t.current!==Ai)throw Error(H(168));Pe($t,e),Pe(nn,n)}function ix(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(H(108,oR(t)||"Unknown",i));return We({},n,r)}function md(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Ai,gs=$t.current,Pe($t,t),Pe(nn,nn.current),!0}function j0(t,e,n){var r=t.stateNode;if(!r)throw Error(H(169));n?(t=ix(t,e,gs),r.__reactInternalMemoizedMergedChildContext=t,Me(nn),Me($t),Pe($t,t)):Me(nn),Pe(nn,n)}var Ar=null,Sf=!1,Yh=!1;function sx(t){Ar===null?Ar=[t]:Ar.push(t)}function xO(t){Sf=!0,sx(t)}function Li(){if(!Yh&&Ar!==null){Yh=!0;var t=0,e=xe;try{var n=Ar;for(xe=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}Ar=null,Sf=!1}catch(i){throw Ar!==null&&(Ar=Ar.slice(t+1)),kT(Xg,Li),i}finally{xe=e,Yh=!1}}return null}var ho=[],po=0,gd=null,yd=0,xn=[],Sn=0,ys=null,Pr=1,kr="";function Qi(t,e){ho[po++]=yd,ho[po++]=gd,gd=t,yd=e}function ox(t,e,n){xn[Sn++]=Pr,xn[Sn++]=kr,xn[Sn++]=ys,ys=t;var r=Pr;t=kr;var i=32-Fn(r)-1;r&=~(1<<i),n+=1;var s=32-Fn(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Pr=1<<32-Fn(e)+i|n<<i|r,kr=s+t}else Pr=1<<s|n<<i|r,kr=t}function oy(t){t.return!==null&&(Qi(t,1),ox(t,1,0))}function ay(t){for(;t===gd;)gd=ho[--po],ho[po]=null,yd=ho[--po],ho[po]=null;for(;t===ys;)ys=xn[--Sn],xn[Sn]=null,kr=xn[--Sn],xn[Sn]=null,Pr=xn[--Sn],xn[Sn]=null}var mn=null,hn=null,je=!1,Vn=null;function ax(t,e){var n=In(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function F0(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,mn=t,hn=yi(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,mn=t,hn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=ys!==null?{id:Pr,overflow:kr}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=In(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,mn=t,hn=null,!0):!1;default:return!1}}function gm(t){return(t.mode&1)!==0&&(t.flags&128)===0}function ym(t){if(je){var e=hn;if(e){var n=e;if(!F0(t,e)){if(gm(t))throw Error(H(418));e=yi(n.nextSibling);var r=mn;e&&F0(t,e)?ax(r,n):(t.flags=t.flags&-4097|2,je=!1,mn=t)}}else{if(gm(t))throw Error(H(418));t.flags=t.flags&-4097|2,je=!1,mn=t}}}function $0(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;mn=t}function lu(t){if(t!==mn)return!1;if(!je)return $0(t),je=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!fm(t.type,t.memoizedProps)),e&&(e=hn)){if(gm(t))throw lx(),Error(H(418));for(;e;)ax(t,e),e=yi(e.nextSibling)}if($0(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(H(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){hn=yi(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}hn=null}}else hn=mn?yi(t.stateNode.nextSibling):null;return!0}function lx(){for(var t=hn;t;)t=yi(t.nextSibling)}function Mo(){hn=mn=null,je=!1}function ly(t){Vn===null?Vn=[t]:Vn.push(t)}var SO=Wr.ReactCurrentBatchConfig;function Nn(t,e){if(t&&t.defaultProps){e=We({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}var vd=Ni(null),wd=null,mo=null,cy=null;function uy(){cy=mo=wd=null}function dy(t){var e=vd.current;Me(vd),t._currentValue=e}function vm(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function Co(t,e){wd=t,cy=mo=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Zt=!0),t.firstContext=null)}function Pn(t){var e=t._currentValue;if(cy!==t)if(t={context:t,memoizedValue:e,next:null},mo===null){if(wd===null)throw Error(H(308));mo=t,wd.dependencies={lanes:0,firstContext:t}}else mo=mo.next=t;return e}var ns=null;function fy(t){ns===null?ns=[t]:ns.push(t)}function cx(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,fy(e)):(n.next=i.next,i.next=n),e.interleaved=n,jr(t,r)}function jr(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Zr=!1;function hy(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function ux(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Nr(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function vi(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,ye&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,jr(t,n)}return i=r.interleaved,i===null?(e.next=e,fy(r)):(e.next=i.next,i.next=e),r.interleaved=e,jr(t,n)}function ju(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Jg(t,n)}}function B0(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function _d(t,e,n,r){var i=t.updateQueue;Zr=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,c=l.next;l.next=null,o===null?s=c:o.next=c,o=l;var u=t.alternate;u!==null&&(u=u.updateQueue,a=u.lastBaseUpdate,a!==o&&(a===null?u.firstBaseUpdate=c:a.next=c,u.lastBaseUpdate=l))}if(s!==null){var h=i.baseState;o=0,u=c=l=null,a=s;do{var m=a.lane,v=a.eventTime;if((r&m)===m){u!==null&&(u=u.next={eventTime:v,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var x=t,g=a;switch(m=e,v=n,g.tag){case 1:if(x=g.payload,typeof x=="function"){h=x.call(v,h,m);break e}h=x;break e;case 3:x.flags=x.flags&-65537|128;case 0:if(x=g.payload,m=typeof x=="function"?x.call(v,h,m):x,m==null)break e;h=We({},h,m);break e;case 2:Zr=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,m=i.effects,m===null?i.effects=[a]:m.push(a))}else v={eventTime:v,lane:m,tag:a.tag,payload:a.payload,callback:a.callback,next:null},u===null?(c=u=v,l=h):u=u.next=v,o|=m;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;m=a,a=m.next,m.next=null,i.lastBaseUpdate=m,i.shared.pending=null}}while(1);if(u===null&&(l=h),i.baseState=l,i.firstBaseUpdate=c,i.lastBaseUpdate=u,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);ws|=o,t.lanes=o,t.memoizedState=h}}function U0(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(H(191,i));i.call(r)}}}var dx=new cT.Component().refs;function wm(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:We({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var bf={isMounted:function(t){return(t=t._reactInternals)?Ns(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=qt(),i=_i(t),s=Nr(r,i);s.payload=e,n!=null&&(s.callback=n),e=vi(t,s,i),e!==null&&($n(e,t,i,r),ju(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=qt(),i=_i(t),s=Nr(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=vi(t,s,i),e!==null&&($n(e,t,i,r),ju(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=qt(),r=_i(t),i=Nr(n,r);i.tag=2,e!=null&&(i.callback=e),e=vi(t,i,r),e!==null&&($n(e,t,r,n),ju(e,t,r))}};function z0(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!Rl(n,r)||!Rl(i,s):!0}function fx(t,e,n){var r=!1,i=Ai,s=e.contextType;return typeof s=="object"&&s!==null?s=Pn(s):(i=rn(e)?gs:$t.current,r=e.contextTypes,s=(r=r!=null)?Lo(t,i):Ai),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=bf,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function H0(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&bf.enqueueReplaceState(e,e.state,null)}function _m(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs=dx,hy(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=Pn(s):(s=rn(e)?gs:$t.current,i.context=Lo(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(wm(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&bf.enqueueReplaceState(i,i.state,null),_d(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function Da(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(H(309));var r=n.stateNode}if(!r)throw Error(H(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=i.refs;a===dx&&(a=i.refs={}),o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(H(284));if(!n._owner)throw Error(H(290,t))}return t}function cu(t,e){throw t=Object.prototype.toString.call(e),Error(H(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function W0(t){var e=t._init;return e(t._payload)}function hx(t){function e(w,p){if(t){var y=w.deletions;y===null?(w.deletions=[p],w.flags|=16):y.push(p)}}function n(w,p){if(!t)return null;for(;p!==null;)e(w,p),p=p.sibling;return null}function r(w,p){for(w=new Map;p!==null;)p.key!==null?w.set(p.key,p):w.set(p.index,p),p=p.sibling;return w}function i(w,p){return w=Ei(w,p),w.index=0,w.sibling=null,w}function s(w,p,y){return w.index=y,t?(y=w.alternate,y!==null?(y=y.index,y<p?(w.flags|=2,p):y):(w.flags|=2,p)):(w.flags|=1048576,p)}function o(w){return t&&w.alternate===null&&(w.flags|=2),w}function a(w,p,y,E){return p===null||p.tag!==6?(p=rp(y,w.mode,E),p.return=w,p):(p=i(p,y),p.return=w,p)}function l(w,p,y,E){var C=y.type;return C===oo?u(w,p,y.props.children,E,y.key):p!==null&&(p.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===Jr&&W0(C)===p.type)?(E=i(p,y.props),E.ref=Da(w,p,y),E.return=w,E):(E=Hu(y.type,y.key,y.props,null,w.mode,E),E.ref=Da(w,p,y),E.return=w,E)}function c(w,p,y,E){return p===null||p.tag!==4||p.stateNode.containerInfo!==y.containerInfo||p.stateNode.implementation!==y.implementation?(p=ip(y,w.mode,E),p.return=w,p):(p=i(p,y.children||[]),p.return=w,p)}function u(w,p,y,E,C){return p===null||p.tag!==7?(p=cs(y,w.mode,E,C),p.return=w,p):(p=i(p,y),p.return=w,p)}function h(w,p,y){if(typeof p=="string"&&p!==""||typeof p=="number")return p=rp(""+p,w.mode,y),p.return=w,p;if(typeof p=="object"&&p!==null){switch(p.$$typeof){case Jc:return y=Hu(p.type,p.key,p.props,null,w.mode,y),y.ref=Da(w,null,p),y.return=w,y;case so:return p=ip(p,w.mode,y),p.return=w,p;case Jr:var E=p._init;return h(w,E(p._payload),y)}if(Ha(p)||Aa(p))return p=cs(p,w.mode,y,null),p.return=w,p;cu(w,p)}return null}function m(w,p,y,E){var C=p!==null?p.key:null;if(typeof y=="string"&&y!==""||typeof y=="number")return C!==null?null:a(w,p,""+y,E);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case Jc:return y.key===C?l(w,p,y,E):null;case so:return y.key===C?c(w,p,y,E):null;case Jr:return C=y._init,m(w,p,C(y._payload),E)}if(Ha(y)||Aa(y))return C!==null?null:u(w,p,y,E,null);cu(w,y)}return null}function v(w,p,y,E,C){if(typeof E=="string"&&E!==""||typeof E=="number")return w=w.get(y)||null,a(p,w,""+E,C);if(typeof E=="object"&&E!==null){switch(E.$$typeof){case Jc:return w=w.get(E.key===null?y:E.key)||null,l(p,w,E,C);case so:return w=w.get(E.key===null?y:E.key)||null,c(p,w,E,C);case Jr:var I=E._init;return v(w,p,y,I(E._payload),C)}if(Ha(E)||Aa(E))return w=w.get(y)||null,u(p,w,E,C,null);cu(p,E)}return null}function x(w,p,y,E){for(var C=null,I=null,P=p,R=p=0,N=null;P!==null&&R<y.length;R++){P.index>R?(N=P,P=null):N=P.sibling;var O=m(w,P,y[R],E);if(O===null){P===null&&(P=N);break}t&&P&&O.alternate===null&&e(w,P),p=s(O,p,R),I===null?C=O:I.sibling=O,I=O,P=N}if(R===y.length)return n(w,P),je&&Qi(w,R),C;if(P===null){for(;R<y.length;R++)P=h(w,y[R],E),P!==null&&(p=s(P,p,R),I===null?C=P:I.sibling=P,I=P);return je&&Qi(w,R),C}for(P=r(w,P);R<y.length;R++)N=v(P,w,R,y[R],E),N!==null&&(t&&N.alternate!==null&&P.delete(N.key===null?R:N.key),p=s(N,p,R),I===null?C=N:I.sibling=N,I=N);return t&&P.forEach(function(U){return e(w,U)}),je&&Qi(w,R),C}function g(w,p,y,E){var C=Aa(y);if(typeof C!="function")throw Error(H(150));if(y=C.call(y),y==null)throw Error(H(151));for(var I=C=null,P=p,R=p=0,N=null,O=y.next();P!==null&&!O.done;R++,O=y.next()){P.index>R?(N=P,P=null):N=P.sibling;var U=m(w,P,O.value,E);if(U===null){P===null&&(P=N);break}t&&P&&U.alternate===null&&e(w,P),p=s(U,p,R),I===null?C=U:I.sibling=U,I=U,P=N}if(O.done)return n(w,P),je&&Qi(w,R),C;if(P===null){for(;!O.done;R++,O=y.next())O=h(w,O.value,E),O!==null&&(p=s(O,p,R),I===null?C=O:I.sibling=O,I=O);return je&&Qi(w,R),C}for(P=r(w,P);!O.done;R++,O=y.next())O=v(P,w,R,O.value,E),O!==null&&(t&&O.alternate!==null&&P.delete(O.key===null?R:O.key),p=s(O,p,R),I===null?C=O:I.sibling=O,I=O);return t&&P.forEach(function(W){return e(w,W)}),je&&Qi(w,R),C}function S(w,p,y,E){if(typeof y=="object"&&y!==null&&y.type===oo&&y.key===null&&(y=y.props.children),typeof y=="object"&&y!==null){switch(y.$$typeof){case Jc:e:{for(var C=y.key,I=p;I!==null;){if(I.key===C){if(C=y.type,C===oo){if(I.tag===7){n(w,I.sibling),p=i(I,y.props.children),p.return=w,w=p;break e}}else if(I.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===Jr&&W0(C)===I.type){n(w,I.sibling),p=i(I,y.props),p.ref=Da(w,I,y),p.return=w,w=p;break e}n(w,I);break}else e(w,I);I=I.sibling}y.type===oo?(p=cs(y.props.children,w.mode,E,y.key),p.return=w,w=p):(E=Hu(y.type,y.key,y.props,null,w.mode,E),E.ref=Da(w,p,y),E.return=w,w=E)}return o(w);case so:e:{for(I=y.key;p!==null;){if(p.key===I)if(p.tag===4&&p.stateNode.containerInfo===y.containerInfo&&p.stateNode.implementation===y.implementation){n(w,p.sibling),p=i(p,y.children||[]),p.return=w,w=p;break e}else{n(w,p);break}else e(w,p);p=p.sibling}p=ip(y,w.mode,E),p.return=w,w=p}return o(w);case Jr:return I=y._init,S(w,p,I(y._payload),E)}if(Ha(y))return x(w,p,y,E);if(Aa(y))return g(w,p,y,E);cu(w,y)}return typeof y=="string"&&y!==""||typeof y=="number"?(y=""+y,p!==null&&p.tag===6?(n(w,p.sibling),p=i(p,y),p.return=w,w=p):(n(w,p),p=rp(y,w.mode,E),p.return=w,w=p),o(w)):n(w,p)}return S}var Vo=hx(!0),px=hx(!1),pc={},ur=Ni(pc),Ll=Ni(pc),Ml=Ni(pc);function rs(t){if(t===pc)throw Error(H(174));return t}function py(t,e){switch(Pe(Ml,e),Pe(Ll,t),Pe(ur,pc),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Jp(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Jp(e,t)}Me(ur),Pe(ur,e)}function jo(){Me(ur),Me(Ll),Me(Ml)}function mx(t){rs(Ml.current);var e=rs(ur.current),n=Jp(e,t.type);e!==n&&(Pe(Ll,t),Pe(ur,n))}function my(t){Ll.current===t&&(Me(ur),Me(Ll))}var ze=Ni(0);function Ed(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Xh=[];function gy(){for(var t=0;t<Xh.length;t++)Xh[t]._workInProgressVersionPrimary=null;Xh.length=0}var Fu=Wr.ReactCurrentDispatcher,Jh=Wr.ReactCurrentBatchConfig,vs=0,He=null,ct=null,pt=null,Td=!1,al=!1,Vl=0,bO=0;function Rt(){throw Error(H(321))}function yy(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Hn(t[n],e[n]))return!1;return!0}function vy(t,e,n,r,i,s){if(vs=s,He=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Fu.current=t===null||t.memoizedState===null?PO:kO,t=n(r,i),al){s=0;do{if(al=!1,Vl=0,25<=s)throw Error(H(301));s+=1,pt=ct=null,e.updateQueue=null,Fu.current=RO,t=n(r,i)}while(al)}if(Fu.current=xd,e=ct!==null&&ct.next!==null,vs=0,pt=ct=He=null,Td=!1,e)throw Error(H(300));return t}function wy(){var t=Vl!==0;return Vl=0,t}function tr(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return pt===null?He.memoizedState=pt=t:pt=pt.next=t,pt}function kn(){if(ct===null){var t=He.alternate;t=t!==null?t.memoizedState:null}else t=ct.next;var e=pt===null?He.memoizedState:pt.next;if(e!==null)pt=e,ct=t;else{if(t===null)throw Error(H(310));ct=t,t={memoizedState:ct.memoizedState,baseState:ct.baseState,baseQueue:ct.baseQueue,queue:ct.queue,next:null},pt===null?He.memoizedState=pt=t:pt=pt.next=t}return pt}function jl(t,e){return typeof e=="function"?e(t):e}function Zh(t){var e=kn(),n=e.queue;if(n===null)throw Error(H(311));n.lastRenderedReducer=t;var r=ct,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var a=o=null,l=null,c=s;do{var u=c.lane;if((vs&u)===u)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:t(r,c.action);else{var h={lane:u,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(a=l=h,o=r):l=l.next=h,He.lanes|=u,ws|=u}c=c.next}while(c!==null&&c!==s);l===null?o=r:l.next=a,Hn(r,e.memoizedState)||(Zt=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=l,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,He.lanes|=s,ws|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function ep(t){var e=kn(),n=e.queue;if(n===null)throw Error(H(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);Hn(s,e.memoizedState)||(Zt=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function gx(){}function yx(t,e){var n=He,r=kn(),i=e(),s=!Hn(r.memoizedState,i);if(s&&(r.memoizedState=i,Zt=!0),r=r.queue,_y(_x.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||pt!==null&&pt.memoizedState.tag&1){if(n.flags|=2048,Fl(9,wx.bind(null,n,r,i,e),void 0,null),yt===null)throw Error(H(349));vs&30||vx(n,e,i)}return i}function vx(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=He.updateQueue,e===null?(e={lastEffect:null,stores:null},He.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function wx(t,e,n,r){e.value=n,e.getSnapshot=r,Ex(e)&&Tx(t)}function _x(t,e,n){return n(function(){Ex(e)&&Tx(t)})}function Ex(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Hn(t,n)}catch{return!0}}function Tx(t){var e=jr(t,1);e!==null&&$n(e,t,1,-1)}function q0(t){var e=tr();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:jl,lastRenderedState:t},e.queue=t,t=t.dispatch=AO.bind(null,He,t),[e.memoizedState,t]}function Fl(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=He.updateQueue,e===null?(e={lastEffect:null,stores:null},He.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function xx(){return kn().memoizedState}function $u(t,e,n,r){var i=tr();He.flags|=t,i.memoizedState=Fl(1|e,n,void 0,r===void 0?null:r)}function Cf(t,e,n,r){var i=kn();r=r===void 0?null:r;var s=void 0;if(ct!==null){var o=ct.memoizedState;if(s=o.destroy,r!==null&&yy(r,o.deps)){i.memoizedState=Fl(e,n,s,r);return}}He.flags|=t,i.memoizedState=Fl(1|e,n,s,r)}function G0(t,e){return $u(8390656,8,t,e)}function _y(t,e){return Cf(2048,8,t,e)}function Sx(t,e){return Cf(4,2,t,e)}function bx(t,e){return Cf(4,4,t,e)}function Cx(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Ix(t,e,n){return n=n!=null?n.concat([t]):null,Cf(4,4,Cx.bind(null,e,t),n)}function Ey(){}function Ax(t,e){var n=kn();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&yy(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function Px(t,e){var n=kn();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&yy(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function kx(t,e,n){return vs&21?(Hn(n,e)||(n=DT(),He.lanes|=n,ws|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Zt=!0),t.memoizedState=n)}function CO(t,e){var n=xe;xe=n!==0&&4>n?n:4,t(!0);var r=Jh.transition;Jh.transition={};try{t(!1),e()}finally{xe=n,Jh.transition=r}}function Rx(){return kn().memoizedState}function IO(t,e,n){var r=_i(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Ox(t))Dx(e,n);else if(n=cx(t,e,n,r),n!==null){var i=qt();$n(n,t,r,i),Nx(n,e,r)}}function AO(t,e,n){var r=_i(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Ox(t))Dx(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(i.hasEagerState=!0,i.eagerState=a,Hn(a,o)){var l=e.interleaved;l===null?(i.next=i,fy(e)):(i.next=l.next,l.next=i),e.interleaved=i;return}}catch{}finally{}n=cx(t,e,i,r),n!==null&&(i=qt(),$n(n,t,r,i),Nx(n,e,r))}}function Ox(t){var e=t.alternate;return t===He||e!==null&&e===He}function Dx(t,e){al=Td=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function Nx(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Jg(t,n)}}var xd={readContext:Pn,useCallback:Rt,useContext:Rt,useEffect:Rt,useImperativeHandle:Rt,useInsertionEffect:Rt,useLayoutEffect:Rt,useMemo:Rt,useReducer:Rt,useRef:Rt,useState:Rt,useDebugValue:Rt,useDeferredValue:Rt,useTransition:Rt,useMutableSource:Rt,useSyncExternalStore:Rt,useId:Rt,unstable_isNewReconciler:!1},PO={readContext:Pn,useCallback:function(t,e){return tr().memoizedState=[t,e===void 0?null:e],t},useContext:Pn,useEffect:G0,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,$u(4194308,4,Cx.bind(null,e,t),n)},useLayoutEffect:function(t,e){return $u(4194308,4,t,e)},useInsertionEffect:function(t,e){return $u(4,2,t,e)},useMemo:function(t,e){var n=tr();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=tr();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=IO.bind(null,He,t),[r.memoizedState,t]},useRef:function(t){var e=tr();return t={current:t},e.memoizedState=t},useState:q0,useDebugValue:Ey,useDeferredValue:function(t){return tr().memoizedState=t},useTransition:function(){var t=q0(!1),e=t[0];return t=CO.bind(null,t[1]),tr().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=He,i=tr();if(je){if(n===void 0)throw Error(H(407));n=n()}else{if(n=e(),yt===null)throw Error(H(349));vs&30||vx(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,G0(_x.bind(null,r,s,t),[t]),r.flags|=2048,Fl(9,wx.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=tr(),e=yt.identifierPrefix;if(je){var n=kr,r=Pr;n=(r&~(1<<32-Fn(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=Vl++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=bO++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},kO={readContext:Pn,useCallback:Ax,useContext:Pn,useEffect:_y,useImperativeHandle:Ix,useInsertionEffect:Sx,useLayoutEffect:bx,useMemo:Px,useReducer:Zh,useRef:xx,useState:function(){return Zh(jl)},useDebugValue:Ey,useDeferredValue:function(t){var e=kn();return kx(e,ct.memoizedState,t)},useTransition:function(){var t=Zh(jl)[0],e=kn().memoizedState;return[t,e]},useMutableSource:gx,useSyncExternalStore:yx,useId:Rx,unstable_isNewReconciler:!1},RO={readContext:Pn,useCallback:Ax,useContext:Pn,useEffect:_y,useImperativeHandle:Ix,useInsertionEffect:Sx,useLayoutEffect:bx,useMemo:Px,useReducer:ep,useRef:xx,useState:function(){return ep(jl)},useDebugValue:Ey,useDeferredValue:function(t){var e=kn();return ct===null?e.memoizedState=t:kx(e,ct.memoizedState,t)},useTransition:function(){var t=ep(jl)[0],e=kn().memoizedState;return[t,e]},useMutableSource:gx,useSyncExternalStore:yx,useId:Rx,unstable_isNewReconciler:!1};function Fo(t,e){try{var n="",r=e;do n+=sR(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function tp(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Em(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var OO=typeof WeakMap=="function"?WeakMap:Map;function Lx(t,e,n){n=Nr(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){bd||(bd=!0,Rm=r),Em(t,e)},n}function Mx(t,e,n){n=Nr(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){Em(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Em(t,e),typeof r!="function"&&(wi===null?wi=new Set([this]):wi.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function K0(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new OO;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=qO.bind(null,t,e,n),e.then(t,t))}function Q0(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Y0(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Nr(-1,1),e.tag=2,vi(n,e,1))),n.lanes|=1),t)}var DO=Wr.ReactCurrentOwner,Zt=!1;function Ht(t,e,n,r){e.child=t===null?px(e,null,n,r):Vo(e,t.child,n,r)}function X0(t,e,n,r,i){n=n.render;var s=e.ref;return Co(e,i),r=vy(t,e,n,r,s,i),n=wy(),t!==null&&!Zt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Fr(t,e,i)):(je&&n&&oy(e),e.flags|=1,Ht(t,e,r,i),e.child)}function J0(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!Py(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,Vx(t,e,s,r,i)):(t=Hu(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:Rl,n(o,r)&&t.ref===e.ref)return Fr(t,e,i)}return e.flags|=1,t=Ei(s,r),t.ref=e.ref,t.return=e,e.child=t}function Vx(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(Rl(s,r)&&t.ref===e.ref)if(Zt=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(Zt=!0);else return e.lanes=t.lanes,Fr(t,e,i)}return Tm(t,e,n,r,i)}function jx(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},Pe(yo,dn),dn|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,Pe(yo,dn),dn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,Pe(yo,dn),dn|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,Pe(yo,dn),dn|=r;return Ht(t,e,i,n),e.child}function Fx(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Tm(t,e,n,r,i){var s=rn(n)?gs:$t.current;return s=Lo(e,s),Co(e,i),n=vy(t,e,n,r,s,i),r=wy(),t!==null&&!Zt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Fr(t,e,i)):(je&&r&&oy(e),e.flags|=1,Ht(t,e,n,i),e.child)}function Z0(t,e,n,r,i){if(rn(n)){var s=!0;md(e)}else s=!1;if(Co(e,i),e.stateNode===null)Bu(t,e),fx(e,n,r),_m(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=Pn(c):(c=rn(n)?gs:$t.current,c=Lo(e,c));var u=n.getDerivedStateFromProps,h=typeof u=="function"||typeof o.getSnapshotBeforeUpdate=="function";h||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||l!==c)&&H0(e,o,r,c),Zr=!1;var m=e.memoizedState;o.state=m,_d(e,r,o,i),l=e.memoizedState,a!==r||m!==l||nn.current||Zr?(typeof u=="function"&&(wm(e,n,u,r),l=e.memoizedState),(a=Zr||z0(e,n,a,r,m,l,c))?(h||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=l),o.props=r,o.state=l,o.context=c,r=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,ux(t,e),a=e.memoizedProps,c=e.type===e.elementType?a:Nn(e.type,a),o.props=c,h=e.pendingProps,m=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=Pn(l):(l=rn(n)?gs:$t.current,l=Lo(e,l));var v=n.getDerivedStateFromProps;(u=typeof v=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==h||m!==l)&&H0(e,o,r,l),Zr=!1,m=e.memoizedState,o.state=m,_d(e,r,o,i);var x=e.memoizedState;a!==h||m!==x||nn.current||Zr?(typeof v=="function"&&(wm(e,n,v,r),x=e.memoizedState),(c=Zr||z0(e,n,c,r,m,x,l)||!1)?(u||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,x,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,x,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&m===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&m===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=x),o.props=r,o.state=x,o.context=l,r=c):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&m===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&m===t.memoizedState||(e.flags|=1024),r=!1)}return xm(t,e,n,r,s,i)}function xm(t,e,n,r,i,s){Fx(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&j0(e,n,!1),Fr(t,e,s);r=e.stateNode,DO.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=Vo(e,t.child,null,s),e.child=Vo(e,null,a,s)):Ht(t,e,a,s),e.memoizedState=r.state,i&&j0(e,n,!0),e.child}function $x(t){var e=t.stateNode;e.pendingContext?V0(t,e.pendingContext,e.pendingContext!==e.context):e.context&&V0(t,e.context,!1),py(t,e.containerInfo)}function e_(t,e,n,r,i){return Mo(),ly(i),e.flags|=256,Ht(t,e,n,r),e.child}var Sm={dehydrated:null,treeContext:null,retryLane:0};function bm(t){return{baseLanes:t,cachePool:null,transitions:null}}function Bx(t,e,n){var r=e.pendingProps,i=ze.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(i&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),Pe(ze,i&1),t===null)return ym(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Pf(o,r,0,null),t=cs(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=bm(n),e.memoizedState=Sm,t):Ty(e,o));if(i=t.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return NO(t,e,o,r,a,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,a=i.sibling;var l={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=l,e.deletions=null):(r=Ei(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?s=Ei(a,s):(s=cs(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?bm(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=Sm,r}return s=t.child,t=s.sibling,r=Ei(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function Ty(t,e){return e=Pf({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function uu(t,e,n,r){return r!==null&&ly(r),Vo(e,t.child,null,n),t=Ty(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function NO(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=tp(Error(H(422))),uu(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=Pf({mode:"visible",children:r.children},i,0,null),s=cs(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&Vo(e,t.child,null,o),e.child.memoizedState=bm(o),e.memoizedState=Sm,s);if(!(e.mode&1))return uu(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,s=Error(H(419)),r=tp(s,r,void 0),uu(t,e,o,r)}if(a=(o&t.childLanes)!==0,Zt||a){if(r=yt,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,jr(t,i),$n(r,t,i,-1))}return Ay(),r=tp(Error(H(421))),uu(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=GO.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,hn=yi(i.nextSibling),mn=e,je=!0,Vn=null,t!==null&&(xn[Sn++]=Pr,xn[Sn++]=kr,xn[Sn++]=ys,Pr=t.id,kr=t.overflow,ys=e),e=Ty(e,r.children),e.flags|=4096,e)}function t_(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),vm(t.return,e,n)}function np(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function Ux(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(Ht(t,e,r.children,n),r=ze.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&t_(t,n,e);else if(t.tag===19)t_(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(Pe(ze,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&Ed(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),np(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&Ed(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}np(e,!0,n,null,s);break;case"together":np(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Bu(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Fr(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),ws|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(H(153));if(e.child!==null){for(t=e.child,n=Ei(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Ei(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function LO(t,e,n){switch(e.tag){case 3:$x(e),Mo();break;case 5:mx(e);break;case 1:rn(e.type)&&md(e);break;case 4:py(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;Pe(vd,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(Pe(ze,ze.current&1),e.flags|=128,null):n&e.child.childLanes?Bx(t,e,n):(Pe(ze,ze.current&1),t=Fr(t,e,n),t!==null?t.sibling:null);Pe(ze,ze.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return Ux(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),Pe(ze,ze.current),r)break;return null;case 22:case 23:return e.lanes=0,jx(t,e,n)}return Fr(t,e,n)}var zx,Cm,Hx,Wx;zx=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Cm=function(){};Hx=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,rs(ur.current);var s=null;switch(n){case"input":i=Kp(t,i),r=Kp(t,r),s=[];break;case"select":i=We({},i,{value:void 0}),r=We({},r,{value:void 0}),s=[];break;case"textarea":i=Xp(t,i),r=Xp(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=hd)}Zp(n,r);var o;n=null;for(c in i)if(!r.hasOwnProperty(c)&&i.hasOwnProperty(c)&&i[c]!=null)if(c==="style"){var a=i[c];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Sl.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in r){var l=r[c];if(a=i!=null?i[c]:void 0,r.hasOwnProperty(c)&&l!==a&&(l!=null||a!=null))if(c==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Sl.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&Oe("scroll",t),s||a===l||(s=[])):(s=s||[]).push(c,l))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};Wx=function(t,e,n,r){n!==r&&(e.flags|=4)};function Na(t,e){if(!je)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function Ot(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function MO(t,e,n){var r=e.pendingProps;switch(ay(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ot(e),null;case 1:return rn(e.type)&&pd(),Ot(e),null;case 3:return r=e.stateNode,jo(),Me(nn),Me($t),gy(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(lu(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Vn!==null&&(Nm(Vn),Vn=null))),Cm(t,e),Ot(e),null;case 5:my(e);var i=rs(Ml.current);if(n=e.type,t!==null&&e.stateNode!=null)Hx(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(H(166));return Ot(e),null}if(t=rs(ur.current),lu(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[rr]=e,r[Nl]=s,t=(e.mode&1)!==0,n){case"dialog":Oe("cancel",r),Oe("close",r);break;case"iframe":case"object":case"embed":Oe("load",r);break;case"video":case"audio":for(i=0;i<qa.length;i++)Oe(qa[i],r);break;case"source":Oe("error",r);break;case"img":case"image":case"link":Oe("error",r),Oe("load",r);break;case"details":Oe("toggle",r);break;case"input":u0(r,s),Oe("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},Oe("invalid",r);break;case"textarea":f0(r,s),Oe("invalid",r)}Zp(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?r.textContent!==a&&(s.suppressHydrationWarning!==!0&&au(r.textContent,a,t),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&au(r.textContent,a,t),i=["children",""+a]):Sl.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&Oe("scroll",r)}switch(n){case"input":Zc(r),d0(r,s,!0);break;case"textarea":Zc(r),h0(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=hd)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=vT(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[rr]=e,t[Nl]=r,zx(t,e,!1,!1),e.stateNode=t;e:{switch(o=em(n,r),n){case"dialog":Oe("cancel",t),Oe("close",t),i=r;break;case"iframe":case"object":case"embed":Oe("load",t),i=r;break;case"video":case"audio":for(i=0;i<qa.length;i++)Oe(qa[i],t);i=r;break;case"source":Oe("error",t),i=r;break;case"img":case"image":case"link":Oe("error",t),Oe("load",t),i=r;break;case"details":Oe("toggle",t),i=r;break;case"input":u0(t,r),i=Kp(t,r),Oe("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=We({},r,{value:void 0}),Oe("invalid",t);break;case"textarea":f0(t,r),i=Xp(t,r),Oe("invalid",t);break;default:i=r}Zp(n,i),a=i;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?ET(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&wT(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&bl(t,l):typeof l=="number"&&bl(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Sl.hasOwnProperty(s)?l!=null&&s==="onScroll"&&Oe("scroll",t):l!=null&&qg(t,s,l,o))}switch(n){case"input":Zc(t),d0(t,r,!1);break;case"textarea":Zc(t),h0(t);break;case"option":r.value!=null&&t.setAttribute("value",""+Ii(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?To(t,!!r.multiple,s,!1):r.defaultValue!=null&&To(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=hd)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Ot(e),null;case 6:if(t&&e.stateNode!=null)Wx(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(H(166));if(n=rs(Ml.current),rs(ur.current),lu(e)){if(r=e.stateNode,n=e.memoizedProps,r[rr]=e,(s=r.nodeValue!==n)&&(t=mn,t!==null))switch(t.tag){case 3:au(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&au(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[rr]=e,e.stateNode=r}return Ot(e),null;case 13:if(Me(ze),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(je&&hn!==null&&e.mode&1&&!(e.flags&128))lx(),Mo(),e.flags|=98560,s=!1;else if(s=lu(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(H(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(H(317));s[rr]=e}else Mo(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Ot(e),s=!1}else Vn!==null&&(Nm(Vn),Vn=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||ze.current&1?ut===0&&(ut=3):Ay())),e.updateQueue!==null&&(e.flags|=4),Ot(e),null);case 4:return jo(),Cm(t,e),t===null&&Ol(e.stateNode.containerInfo),Ot(e),null;case 10:return dy(e.type._context),Ot(e),null;case 17:return rn(e.type)&&pd(),Ot(e),null;case 19:if(Me(ze),s=e.memoizedState,s===null)return Ot(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)Na(s,!1);else{if(ut!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=Ed(t),o!==null){for(e.flags|=128,Na(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return Pe(ze,ze.current&1|2),e.child}t=t.sibling}s.tail!==null&&et()>$o&&(e.flags|=128,r=!0,Na(s,!1),e.lanes=4194304)}else{if(!r)if(t=Ed(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Na(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!je)return Ot(e),null}else 2*et()-s.renderingStartTime>$o&&n!==1073741824&&(e.flags|=128,r=!0,Na(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=et(),e.sibling=null,n=ze.current,Pe(ze,r?n&1|2:n&1),e):(Ot(e),null);case 22:case 23:return Iy(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?dn&1073741824&&(Ot(e),e.subtreeFlags&6&&(e.flags|=8192)):Ot(e),null;case 24:return null;case 25:return null}throw Error(H(156,e.tag))}function VO(t,e){switch(ay(e),e.tag){case 1:return rn(e.type)&&pd(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return jo(),Me(nn),Me($t),gy(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return my(e),null;case 13:if(Me(ze),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(H(340));Mo()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return Me(ze),null;case 4:return jo(),null;case 10:return dy(e.type._context),null;case 22:case 23:return Iy(),null;case 24:return null;default:return null}}var du=!1,Mt=!1,jO=typeof WeakSet=="function"?WeakSet:Set,X=null;function go(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Ge(t,e,r)}else n.current=null}function Im(t,e,n){try{n()}catch(r){Ge(t,e,r)}}var n_=!1;function FO(t,e){if(um=ud,t=QT(),sy(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,c=0,u=0,h=t,m=null;t:for(;;){for(var v;h!==n||i!==0&&h.nodeType!==3||(a=o+i),h!==s||r!==0&&h.nodeType!==3||(l=o+r),h.nodeType===3&&(o+=h.nodeValue.length),(v=h.firstChild)!==null;)m=h,h=v;for(;;){if(h===t)break t;if(m===n&&++c===i&&(a=o),m===s&&++u===r&&(l=o),(v=h.nextSibling)!==null)break;h=m,m=h.parentNode}h=v}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(dm={focusedElem:t,selectionRange:n},ud=!1,X=e;X!==null;)if(e=X,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,X=t;else for(;X!==null;){e=X;try{var x=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(x!==null){var g=x.memoizedProps,S=x.memoizedState,w=e.stateNode,p=w.getSnapshotBeforeUpdate(e.elementType===e.type?g:Nn(e.type,g),S);w.__reactInternalSnapshotBeforeUpdate=p}break;case 3:var y=e.stateNode.containerInfo;y.nodeType===1?y.textContent="":y.nodeType===9&&y.documentElement&&y.removeChild(y.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(H(163))}}catch(E){Ge(e,e.return,E)}if(t=e.sibling,t!==null){t.return=e.return,X=t;break}X=e.return}return x=n_,n_=!1,x}function ll(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&Im(e,n,s)}i=i.next}while(i!==r)}}function If(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function Am(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function qx(t){var e=t.alternate;e!==null&&(t.alternate=null,qx(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[rr],delete e[Nl],delete e[pm],delete e[EO],delete e[TO])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Gx(t){return t.tag===5||t.tag===3||t.tag===4}function r_(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Gx(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Pm(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=hd));else if(r!==4&&(t=t.child,t!==null))for(Pm(t,e,n),t=t.sibling;t!==null;)Pm(t,e,n),t=t.sibling}function km(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(km(t,e,n),t=t.sibling;t!==null;)km(t,e,n),t=t.sibling}var Tt=null,Mn=!1;function Qr(t,e,n){for(n=n.child;n!==null;)Kx(t,e,n),n=n.sibling}function Kx(t,e,n){if(cr&&typeof cr.onCommitFiberUnmount=="function")try{cr.onCommitFiberUnmount(wf,n)}catch{}switch(n.tag){case 5:Mt||go(n,e);case 6:var r=Tt,i=Mn;Tt=null,Qr(t,e,n),Tt=r,Mn=i,Tt!==null&&(Mn?(t=Tt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Tt.removeChild(n.stateNode));break;case 18:Tt!==null&&(Mn?(t=Tt,n=n.stateNode,t.nodeType===8?Qh(t.parentNode,n):t.nodeType===1&&Qh(t,n),Pl(t)):Qh(Tt,n.stateNode));break;case 4:r=Tt,i=Mn,Tt=n.stateNode.containerInfo,Mn=!0,Qr(t,e,n),Tt=r,Mn=i;break;case 0:case 11:case 14:case 15:if(!Mt&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Im(n,e,o),i=i.next}while(i!==r)}Qr(t,e,n);break;case 1:if(!Mt&&(go(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){Ge(n,e,a)}Qr(t,e,n);break;case 21:Qr(t,e,n);break;case 22:n.mode&1?(Mt=(r=Mt)||n.memoizedState!==null,Qr(t,e,n),Mt=r):Qr(t,e,n);break;default:Qr(t,e,n)}}function i_(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new jO),e.forEach(function(r){var i=KO.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Dn(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:Tt=a.stateNode,Mn=!1;break e;case 3:Tt=a.stateNode.containerInfo,Mn=!0;break e;case 4:Tt=a.stateNode.containerInfo,Mn=!0;break e}a=a.return}if(Tt===null)throw Error(H(160));Kx(s,o,i),Tt=null,Mn=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(c){Ge(i,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)Qx(e,t),e=e.sibling}function Qx(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Dn(e,t),Jn(t),r&4){try{ll(3,t,t.return),If(3,t)}catch(g){Ge(t,t.return,g)}try{ll(5,t,t.return)}catch(g){Ge(t,t.return,g)}}break;case 1:Dn(e,t),Jn(t),r&512&&n!==null&&go(n,n.return);break;case 5:if(Dn(e,t),Jn(t),r&512&&n!==null&&go(n,n.return),t.flags&32){var i=t.stateNode;try{bl(i,"")}catch(g){Ge(t,t.return,g)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&gT(i,s),em(a,o);var c=em(a,s);for(o=0;o<l.length;o+=2){var u=l[o],h=l[o+1];u==="style"?ET(i,h):u==="dangerouslySetInnerHTML"?wT(i,h):u==="children"?bl(i,h):qg(i,u,h,c)}switch(a){case"input":Qp(i,s);break;case"textarea":yT(i,s);break;case"select":var m=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var v=s.value;v!=null?To(i,!!s.multiple,v,!1):m!==!!s.multiple&&(s.defaultValue!=null?To(i,!!s.multiple,s.defaultValue,!0):To(i,!!s.multiple,s.multiple?[]:"",!1))}i[Nl]=s}catch(g){Ge(t,t.return,g)}}break;case 6:if(Dn(e,t),Jn(t),r&4){if(t.stateNode===null)throw Error(H(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(g){Ge(t,t.return,g)}}break;case 3:if(Dn(e,t),Jn(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Pl(e.containerInfo)}catch(g){Ge(t,t.return,g)}break;case 4:Dn(e,t),Jn(t);break;case 13:Dn(e,t),Jn(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(by=et())),r&4&&i_(t);break;case 22:if(u=n!==null&&n.memoizedState!==null,t.mode&1?(Mt=(c=Mt)||u,Dn(e,t),Mt=c):Dn(e,t),Jn(t),r&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!u&&t.mode&1)for(X=t,u=t.child;u!==null;){for(h=X=u;X!==null;){switch(m=X,v=m.child,m.tag){case 0:case 11:case 14:case 15:ll(4,m,m.return);break;case 1:go(m,m.return);var x=m.stateNode;if(typeof x.componentWillUnmount=="function"){r=m,n=m.return;try{e=r,x.props=e.memoizedProps,x.state=e.memoizedState,x.componentWillUnmount()}catch(g){Ge(r,n,g)}}break;case 5:go(m,m.return);break;case 22:if(m.memoizedState!==null){o_(h);continue}}v!==null?(v.return=m,X=v):o_(h)}u=u.sibling}e:for(u=null,h=t;;){if(h.tag===5){if(u===null){u=h;try{i=h.stateNode,c?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=h.stateNode,l=h.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=_T("display",o))}catch(g){Ge(t,t.return,g)}}}else if(h.tag===6){if(u===null)try{h.stateNode.nodeValue=c?"":h.memoizedProps}catch(g){Ge(t,t.return,g)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===t)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===t)break e;for(;h.sibling===null;){if(h.return===null||h.return===t)break e;u===h&&(u=null),h=h.return}u===h&&(u=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:Dn(e,t),Jn(t),r&4&&i_(t);break;case 21:break;default:Dn(e,t),Jn(t)}}function Jn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(Gx(n)){var r=n;break e}n=n.return}throw Error(H(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(bl(i,""),r.flags&=-33);var s=r_(t);km(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,a=r_(t);Pm(t,a,o);break;default:throw Error(H(161))}}catch(l){Ge(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function $O(t,e,n){X=t,Yx(t)}function Yx(t,e,n){for(var r=(t.mode&1)!==0;X!==null;){var i=X,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||du;if(!o){var a=i.alternate,l=a!==null&&a.memoizedState!==null||Mt;a=du;var c=Mt;if(du=o,(Mt=l)&&!c)for(X=i;X!==null;)o=X,l=o.child,o.tag===22&&o.memoizedState!==null?a_(i):l!==null?(l.return=o,X=l):a_(i);for(;s!==null;)X=s,Yx(s),s=s.sibling;X=i,du=a,Mt=c}s_(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,X=s):s_(t)}}function s_(t){for(;X!==null;){var e=X;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Mt||If(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!Mt)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:Nn(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&U0(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}U0(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var u=c.memoizedState;if(u!==null){var h=u.dehydrated;h!==null&&Pl(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(H(163))}Mt||e.flags&512&&Am(e)}catch(m){Ge(e,e.return,m)}}if(e===t){X=null;break}if(n=e.sibling,n!==null){n.return=e.return,X=n;break}X=e.return}}function o_(t){for(;X!==null;){var e=X;if(e===t){X=null;break}var n=e.sibling;if(n!==null){n.return=e.return,X=n;break}X=e.return}}function a_(t){for(;X!==null;){var e=X;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{If(4,e)}catch(l){Ge(e,n,l)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(l){Ge(e,i,l)}}var s=e.return;try{Am(e)}catch(l){Ge(e,s,l)}break;case 5:var o=e.return;try{Am(e)}catch(l){Ge(e,o,l)}}}catch(l){Ge(e,e.return,l)}if(e===t){X=null;break}var a=e.sibling;if(a!==null){a.return=e.return,X=a;break}X=e.return}}var BO=Math.ceil,Sd=Wr.ReactCurrentDispatcher,xy=Wr.ReactCurrentOwner,An=Wr.ReactCurrentBatchConfig,ye=0,yt=null,ot=null,Ct=0,dn=0,yo=Ni(0),ut=0,$l=null,ws=0,Af=0,Sy=0,cl=null,Xt=null,by=0,$o=1/0,Cr=null,bd=!1,Rm=null,wi=null,fu=!1,li=null,Cd=0,ul=0,Om=null,Uu=-1,zu=0;function qt(){return ye&6?et():Uu!==-1?Uu:Uu=et()}function _i(t){return t.mode&1?ye&2&&Ct!==0?Ct&-Ct:SO.transition!==null?(zu===0&&(zu=DT()),zu):(t=xe,t!==0||(t=window.event,t=t===void 0?16:$T(t.type)),t):1}function $n(t,e,n,r){if(50<ul)throw ul=0,Om=null,Error(H(185));dc(t,n,r),(!(ye&2)||t!==yt)&&(t===yt&&(!(ye&2)&&(Af|=n),ut===4&&ti(t,Ct)),sn(t,r),n===1&&ye===0&&!(e.mode&1)&&($o=et()+500,Sf&&Li()))}function sn(t,e){var n=t.callbackNode;SR(t,e);var r=cd(t,t===yt?Ct:0);if(r===0)n!==null&&g0(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&g0(n),e===1)t.tag===0?xO(l_.bind(null,t)):sx(l_.bind(null,t)),wO(function(){!(ye&6)&&Li()}),n=null;else{switch(NT(r)){case 1:n=Xg;break;case 4:n=RT;break;case 16:n=ld;break;case 536870912:n=OT;break;default:n=ld}n=iS(n,Xx.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function Xx(t,e){if(Uu=-1,zu=0,ye&6)throw Error(H(327));var n=t.callbackNode;if(Io()&&t.callbackNode!==n)return null;var r=cd(t,t===yt?Ct:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=Id(t,r);else{e=r;var i=ye;ye|=2;var s=Zx();(yt!==t||Ct!==e)&&(Cr=null,$o=et()+500,ls(t,e));do try{HO();break}catch(a){Jx(t,a)}while(1);uy(),Sd.current=s,ye=i,ot!==null?e=0:(yt=null,Ct=0,e=ut)}if(e!==0){if(e===2&&(i=sm(t),i!==0&&(r=i,e=Dm(t,i))),e===1)throw n=$l,ls(t,0),ti(t,r),sn(t,et()),n;if(e===6)ti(t,r);else{if(i=t.current.alternate,!(r&30)&&!UO(i)&&(e=Id(t,r),e===2&&(s=sm(t),s!==0&&(r=s,e=Dm(t,s))),e===1))throw n=$l,ls(t,0),ti(t,r),sn(t,et()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(H(345));case 2:Yi(t,Xt,Cr);break;case 3:if(ti(t,r),(r&130023424)===r&&(e=by+500-et(),10<e)){if(cd(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){qt(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=hm(Yi.bind(null,t,Xt,Cr),e);break}Yi(t,Xt,Cr);break;case 4:if(ti(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-Fn(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=et()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*BO(r/1960))-r,10<r){t.timeoutHandle=hm(Yi.bind(null,t,Xt,Cr),r);break}Yi(t,Xt,Cr);break;case 5:Yi(t,Xt,Cr);break;default:throw Error(H(329))}}}return sn(t,et()),t.callbackNode===n?Xx.bind(null,t):null}function Dm(t,e){var n=cl;return t.current.memoizedState.isDehydrated&&(ls(t,e).flags|=256),t=Id(t,e),t!==2&&(e=Xt,Xt=n,e!==null&&Nm(e)),t}function Nm(t){Xt===null?Xt=t:Xt.push.apply(Xt,t)}function UO(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!Hn(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function ti(t,e){for(e&=~Sy,e&=~Af,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Fn(e),r=1<<n;t[n]=-1,e&=~r}}function l_(t){if(ye&6)throw Error(H(327));Io();var e=cd(t,0);if(!(e&1))return sn(t,et()),null;var n=Id(t,e);if(t.tag!==0&&n===2){var r=sm(t);r!==0&&(e=r,n=Dm(t,r))}if(n===1)throw n=$l,ls(t,0),ti(t,e),sn(t,et()),n;if(n===6)throw Error(H(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Yi(t,Xt,Cr),sn(t,et()),null}function Cy(t,e){var n=ye;ye|=1;try{return t(e)}finally{ye=n,ye===0&&($o=et()+500,Sf&&Li())}}function _s(t){li!==null&&li.tag===0&&!(ye&6)&&Io();var e=ye;ye|=1;var n=An.transition,r=xe;try{if(An.transition=null,xe=1,t)return t()}finally{xe=r,An.transition=n,ye=e,!(ye&6)&&Li()}}function Iy(){dn=yo.current,Me(yo)}function ls(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,vO(n)),ot!==null)for(n=ot.return;n!==null;){var r=n;switch(ay(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&pd();break;case 3:jo(),Me(nn),Me($t),gy();break;case 5:my(r);break;case 4:jo();break;case 13:Me(ze);break;case 19:Me(ze);break;case 10:dy(r.type._context);break;case 22:case 23:Iy()}n=n.return}if(yt=t,ot=t=Ei(t.current,null),Ct=dn=e,ut=0,$l=null,Sy=Af=ws=0,Xt=cl=null,ns!==null){for(e=0;e<ns.length;e++)if(n=ns[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}ns=null}return t}function Jx(t,e){do{var n=ot;try{if(uy(),Fu.current=xd,Td){for(var r=He.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Td=!1}if(vs=0,pt=ct=He=null,al=!1,Vl=0,xy.current=null,n===null||n.return===null){ut=1,$l=e,ot=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=Ct,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,u=a,h=u.tag;if(!(u.mode&1)&&(h===0||h===11||h===15)){var m=u.alternate;m?(u.updateQueue=m.updateQueue,u.memoizedState=m.memoizedState,u.lanes=m.lanes):(u.updateQueue=null,u.memoizedState=null)}var v=Q0(o);if(v!==null){v.flags&=-257,Y0(v,o,a,s,e),v.mode&1&&K0(s,c,e),e=v,l=c;var x=e.updateQueue;if(x===null){var g=new Set;g.add(l),e.updateQueue=g}else x.add(l);break e}else{if(!(e&1)){K0(s,c,e),Ay();break e}l=Error(H(426))}}else if(je&&a.mode&1){var S=Q0(o);if(S!==null){!(S.flags&65536)&&(S.flags|=256),Y0(S,o,a,s,e),ly(Fo(l,a));break e}}s=l=Fo(l,a),ut!==4&&(ut=2),cl===null?cl=[s]:cl.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var w=Lx(s,l,e);B0(s,w);break e;case 1:a=l;var p=s.type,y=s.stateNode;if(!(s.flags&128)&&(typeof p.getDerivedStateFromError=="function"||y!==null&&typeof y.componentDidCatch=="function"&&(wi===null||!wi.has(y)))){s.flags|=65536,e&=-e,s.lanes|=e;var E=Mx(s,a,e);B0(s,E);break e}}s=s.return}while(s!==null)}tS(n)}catch(C){e=C,ot===n&&n!==null&&(ot=n=n.return);continue}break}while(1)}function Zx(){var t=Sd.current;return Sd.current=xd,t===null?xd:t}function Ay(){(ut===0||ut===3||ut===2)&&(ut=4),yt===null||!(ws&268435455)&&!(Af&268435455)||ti(yt,Ct)}function Id(t,e){var n=ye;ye|=2;var r=Zx();(yt!==t||Ct!==e)&&(Cr=null,ls(t,e));do try{zO();break}catch(i){Jx(t,i)}while(1);if(uy(),ye=n,Sd.current=r,ot!==null)throw Error(H(261));return yt=null,Ct=0,ut}function zO(){for(;ot!==null;)eS(ot)}function HO(){for(;ot!==null&&!mR();)eS(ot)}function eS(t){var e=rS(t.alternate,t,dn);t.memoizedProps=t.pendingProps,e===null?tS(t):ot=e,xy.current=null}function tS(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=VO(n,e),n!==null){n.flags&=32767,ot=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{ut=6,ot=null;return}}else if(n=MO(n,e,dn),n!==null){ot=n;return}if(e=e.sibling,e!==null){ot=e;return}ot=e=t}while(e!==null);ut===0&&(ut=5)}function Yi(t,e,n){var r=xe,i=An.transition;try{An.transition=null,xe=1,WO(t,e,n,r)}finally{An.transition=i,xe=r}return null}function WO(t,e,n,r){do Io();while(li!==null);if(ye&6)throw Error(H(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(H(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(bR(t,s),t===yt&&(ot=yt=null,Ct=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||fu||(fu=!0,iS(ld,function(){return Io(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=An.transition,An.transition=null;var o=xe;xe=1;var a=ye;ye|=4,xy.current=null,FO(t,n),Qx(n,t),dO(dm),ud=!!um,dm=um=null,t.current=n,$O(n),gR(),ye=a,xe=o,An.transition=s}else t.current=n;if(fu&&(fu=!1,li=t,Cd=i),s=t.pendingLanes,s===0&&(wi=null),wR(n.stateNode),sn(t,et()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(bd)throw bd=!1,t=Rm,Rm=null,t;return Cd&1&&t.tag!==0&&Io(),s=t.pendingLanes,s&1?t===Om?ul++:(ul=0,Om=t):ul=0,Li(),null}function Io(){if(li!==null){var t=NT(Cd),e=An.transition,n=xe;try{if(An.transition=null,xe=16>t?16:t,li===null)var r=!1;else{if(t=li,li=null,Cd=0,ye&6)throw Error(H(331));var i=ye;for(ye|=4,X=t.current;X!==null;){var s=X,o=s.child;if(X.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var c=a[l];for(X=c;X!==null;){var u=X;switch(u.tag){case 0:case 11:case 15:ll(8,u,s)}var h=u.child;if(h!==null)h.return=u,X=h;else for(;X!==null;){u=X;var m=u.sibling,v=u.return;if(qx(u),u===c){X=null;break}if(m!==null){m.return=v,X=m;break}X=v}}}var x=s.alternate;if(x!==null){var g=x.child;if(g!==null){x.child=null;do{var S=g.sibling;g.sibling=null,g=S}while(g!==null)}}X=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,X=o;else e:for(;X!==null;){if(s=X,s.flags&2048)switch(s.tag){case 0:case 11:case 15:ll(9,s,s.return)}var w=s.sibling;if(w!==null){w.return=s.return,X=w;break e}X=s.return}}var p=t.current;for(X=p;X!==null;){o=X;var y=o.child;if(o.subtreeFlags&2064&&y!==null)y.return=o,X=y;else e:for(o=p;X!==null;){if(a=X,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:If(9,a)}}catch(C){Ge(a,a.return,C)}if(a===o){X=null;break e}var E=a.sibling;if(E!==null){E.return=a.return,X=E;break e}X=a.return}}if(ye=i,Li(),cr&&typeof cr.onPostCommitFiberRoot=="function")try{cr.onPostCommitFiberRoot(wf,t)}catch{}r=!0}return r}finally{xe=n,An.transition=e}}return!1}function c_(t,e,n){e=Fo(n,e),e=Lx(t,e,1),t=vi(t,e,1),e=qt(),t!==null&&(dc(t,1,e),sn(t,e))}function Ge(t,e,n){if(t.tag===3)c_(t,t,n);else for(;e!==null;){if(e.tag===3){c_(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(wi===null||!wi.has(r))){t=Fo(n,t),t=Mx(e,t,1),e=vi(e,t,1),t=qt(),e!==null&&(dc(e,1,t),sn(e,t));break}}e=e.return}}function qO(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=qt(),t.pingedLanes|=t.suspendedLanes&n,yt===t&&(Ct&n)===n&&(ut===4||ut===3&&(Ct&130023424)===Ct&&500>et()-by?ls(t,0):Sy|=n),sn(t,e)}function nS(t,e){e===0&&(t.mode&1?(e=nu,nu<<=1,!(nu&130023424)&&(nu=4194304)):e=1);var n=qt();t=jr(t,e),t!==null&&(dc(t,e,n),sn(t,n))}function GO(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),nS(t,n)}function KO(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(H(314))}r!==null&&r.delete(e),nS(t,n)}var rS;rS=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||nn.current)Zt=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return Zt=!1,LO(t,e,n);Zt=!!(t.flags&131072)}else Zt=!1,je&&e.flags&1048576&&ox(e,yd,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;Bu(t,e),t=e.pendingProps;var i=Lo(e,$t.current);Co(e,n),i=vy(null,e,r,t,i,n);var s=wy();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,rn(r)?(s=!0,md(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,hy(e),i.updater=bf,e.stateNode=i,i._reactInternals=e,_m(e,r,t,n),e=xm(null,e,r,!0,s,n)):(e.tag=0,je&&s&&oy(e),Ht(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(Bu(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=YO(r),t=Nn(r,t),i){case 0:e=Tm(null,e,r,t,n);break e;case 1:e=Z0(null,e,r,t,n);break e;case 11:e=X0(null,e,r,t,n);break e;case 14:e=J0(null,e,r,Nn(r.type,t),n);break e}throw Error(H(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Nn(r,i),Tm(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Nn(r,i),Z0(t,e,r,i,n);case 3:e:{if($x(e),t===null)throw Error(H(387));r=e.pendingProps,s=e.memoizedState,i=s.element,ux(t,e),_d(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=Fo(Error(H(423)),e),e=e_(t,e,r,n,i);break e}else if(r!==i){i=Fo(Error(H(424)),e),e=e_(t,e,r,n,i);break e}else for(hn=yi(e.stateNode.containerInfo.firstChild),mn=e,je=!0,Vn=null,n=px(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Mo(),r===i){e=Fr(t,e,n);break e}Ht(t,e,r,n)}e=e.child}return e;case 5:return mx(e),t===null&&ym(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,fm(r,i)?o=null:s!==null&&fm(r,s)&&(e.flags|=32),Fx(t,e),Ht(t,e,o,n),e.child;case 6:return t===null&&ym(e),null;case 13:return Bx(t,e,n);case 4:return py(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=Vo(e,null,r,n):Ht(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Nn(r,i),X0(t,e,r,i,n);case 7:return Ht(t,e,e.pendingProps,n),e.child;case 8:return Ht(t,e,e.pendingProps.children,n),e.child;case 12:return Ht(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,Pe(vd,r._currentValue),r._currentValue=o,s!==null)if(Hn(s.value,o)){if(s.children===i.children&&!nn.current){e=Fr(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(s.tag===1){l=Nr(-1,n&-n),l.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var u=c.pending;u===null?l.next=l:(l.next=u.next,u.next=l),c.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),vm(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(H(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),vm(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}Ht(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,Co(e,n),i=Pn(i),r=r(i),e.flags|=1,Ht(t,e,r,n),e.child;case 14:return r=e.type,i=Nn(r,e.pendingProps),i=Nn(r.type,i),J0(t,e,r,i,n);case 15:return Vx(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Nn(r,i),Bu(t,e),e.tag=1,rn(r)?(t=!0,md(e)):t=!1,Co(e,n),fx(e,r,i),_m(e,r,i,n),xm(null,e,r,!0,t,n);case 19:return Ux(t,e,n);case 22:return jx(t,e,n)}throw Error(H(156,e.tag))};function iS(t,e){return kT(t,e)}function QO(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function In(t,e,n,r){return new QO(t,e,n,r)}function Py(t){return t=t.prototype,!(!t||!t.isReactComponent)}function YO(t){if(typeof t=="function")return Py(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Kg)return 11;if(t===Qg)return 14}return 2}function Ei(t,e){var n=t.alternate;return n===null?(n=In(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Hu(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")Py(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case oo:return cs(n.children,i,s,e);case Gg:o=8,i|=8;break;case Hp:return t=In(12,n,e,i|2),t.elementType=Hp,t.lanes=s,t;case Wp:return t=In(13,n,e,i),t.elementType=Wp,t.lanes=s,t;case qp:return t=In(19,n,e,i),t.elementType=qp,t.lanes=s,t;case hT:return Pf(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case dT:o=10;break e;case fT:o=9;break e;case Kg:o=11;break e;case Qg:o=14;break e;case Jr:o=16,r=null;break e}throw Error(H(130,t==null?t:typeof t,""))}return e=In(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function cs(t,e,n,r){return t=In(7,t,r,e),t.lanes=n,t}function Pf(t,e,n,r){return t=In(22,t,r,e),t.elementType=hT,t.lanes=n,t.stateNode={isHidden:!1},t}function rp(t,e,n){return t=In(6,t,null,e),t.lanes=n,t}function ip(t,e,n){return e=In(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function XO(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=jh(0),this.expirationTimes=jh(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=jh(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function ky(t,e,n,r,i,s,o,a,l){return t=new XO(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=In(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},hy(s),t}function JO(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:so,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function sS(t){if(!t)return Ai;t=t._reactInternals;e:{if(Ns(t)!==t||t.tag!==1)throw Error(H(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(rn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(H(171))}if(t.tag===1){var n=t.type;if(rn(n))return ix(t,n,e)}return e}function oS(t,e,n,r,i,s,o,a,l){return t=ky(n,r,!0,t,i,s,o,a,l),t.context=sS(null),n=t.current,r=qt(),i=_i(n),s=Nr(r,i),s.callback=e??null,vi(n,s,i),t.current.lanes=i,dc(t,i,r),sn(t,r),t}function kf(t,e,n,r){var i=e.current,s=qt(),o=_i(i);return n=sS(n),e.context===null?e.context=n:e.pendingContext=n,e=Nr(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=vi(i,e,o),t!==null&&($n(t,i,o,s),ju(t,i,o)),o}function Ad(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function u_(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Ry(t,e){u_(t,e),(t=t.alternate)&&u_(t,e)}function ZO(){return null}var aS=typeof reportError=="function"?reportError:function(t){console.error(t)};function Oy(t){this._internalRoot=t}Rf.prototype.render=Oy.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(H(409));kf(t,e,null,null)};Rf.prototype.unmount=Oy.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;_s(function(){kf(null,t,null,null)}),e[Vr]=null}};function Rf(t){this._internalRoot=t}Rf.prototype.unstable_scheduleHydration=function(t){if(t){var e=VT();t={blockedOn:null,target:t,priority:e};for(var n=0;n<ei.length&&e!==0&&e<ei[n].priority;n++);ei.splice(n,0,t),n===0&&FT(t)}};function Dy(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Of(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function d_(){}function eD(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var c=Ad(o);s.call(c)}}var o=oS(e,r,t,0,null,!1,!1,"",d_);return t._reactRootContainer=o,t[Vr]=o.current,Ol(t.nodeType===8?t.parentNode:t),_s(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var c=Ad(l);a.call(c)}}var l=ky(t,0,!1,null,null,!1,!1,"",d_);return t._reactRootContainer=l,t[Vr]=l.current,Ol(t.nodeType===8?t.parentNode:t),_s(function(){kf(e,l,n,r)}),l}function Df(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var a=i;i=function(){var l=Ad(o);a.call(l)}}kf(e,o,t,i)}else o=eD(n,e,t,i,r);return Ad(o)}LT=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Wa(e.pendingLanes);n!==0&&(Jg(e,n|1),sn(e,et()),!(ye&6)&&($o=et()+500,Li()))}break;case 13:_s(function(){var r=jr(t,1);if(r!==null){var i=qt();$n(r,t,1,i)}}),Ry(t,1)}};Zg=function(t){if(t.tag===13){var e=jr(t,134217728);if(e!==null){var n=qt();$n(e,t,134217728,n)}Ry(t,134217728)}};MT=function(t){if(t.tag===13){var e=_i(t),n=jr(t,e);if(n!==null){var r=qt();$n(n,t,e,r)}Ry(t,e)}};VT=function(){return xe};jT=function(t,e){var n=xe;try{return xe=t,e()}finally{xe=n}};nm=function(t,e,n){switch(e){case"input":if(Qp(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=xf(r);if(!i)throw Error(H(90));mT(r),Qp(r,i)}}}break;case"textarea":yT(t,n);break;case"select":e=n.value,e!=null&&To(t,!!n.multiple,e,!1)}};ST=Cy;bT=_s;var tD={usingClientEntryPoint:!1,Events:[hc,uo,xf,TT,xT,Cy]},La={findFiberByHostInstance:ts,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},nD={bundleType:La.bundleType,version:La.version,rendererPackageName:La.rendererPackageName,rendererConfig:La.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Wr.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=AT(t),t===null?null:t.stateNode},findFiberByHostInstance:La.findFiberByHostInstance||ZO,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var hu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!hu.isDisabled&&hu.supportsFiber)try{wf=hu.inject(nD),cr=hu}catch{}}vn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=tD;vn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Dy(e))throw Error(H(200));return JO(t,e,null,n)};vn.createRoot=function(t,e){if(!Dy(t))throw Error(H(299));var n=!1,r="",i=aS;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=ky(t,1,!1,null,null,n,!1,r,i),t[Vr]=e.current,Ol(t.nodeType===8?t.parentNode:t),new Oy(e)};vn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(H(188)):(t=Object.keys(t).join(","),Error(H(268,t)));return t=AT(e),t=t===null?null:t.stateNode,t};vn.flushSync=function(t){return _s(t)};vn.hydrate=function(t,e,n){if(!Of(e))throw Error(H(200));return Df(null,t,e,!0,n)};vn.hydrateRoot=function(t,e,n){if(!Dy(t))throw Error(H(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=aS;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=oS(e,null,t,1,n??null,i,!1,s,o),t[Vr]=e.current,Ol(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new Rf(e)};vn.render=function(t,e,n){if(!Of(e))throw Error(H(200));return Df(null,t,e,!1,n)};vn.unmountComponentAtNode=function(t){if(!Of(t))throw Error(H(40));return t._reactRootContainer?(_s(function(){Df(null,null,t,!1,function(){t._reactRootContainer=null,t[Vr]=null})}),!0):!1};vn.unstable_batchedUpdates=Cy;vn.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!Of(n))throw Error(H(200));if(t==null||t._reactInternals===void 0)throw Error(H(38));return Df(t,e,n,!1,r)};vn.version="18.2.0-next-9e3b772b8-20220608";function lS(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(lS)}catch(t){console.error(t)}}lS(),oT.exports=vn;var cS=oT.exports,f_=cS;Up.createRoot=f_.createRoot,Up.hydrateRoot=f_.hydrateRoot;/**
 * @remix-run/router v1.10.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Bl(){return Bl=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Bl.apply(this,arguments)}var ci;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(ci||(ci={}));const h_="popstate";function rD(t){t===void 0&&(t={});function e(r,i){let{pathname:s,search:o,hash:a}=r.location;return Lm("",{pathname:s,search:o,hash:a},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:Pd(i)}return sD(e,n,null,t)}function tt(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function Ny(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function iD(){return Math.random().toString(36).substr(2,8)}function p_(t,e){return{usr:t.state,key:t.key,idx:e}}function Lm(t,e,n,r){return n===void 0&&(n=null),Bl({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?oa(e):e,{state:n,key:e&&e.key||r||iD()})}function Pd(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function oa(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function sD(t,e,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,a=ci.Pop,l=null,c=u();c==null&&(c=0,o.replaceState(Bl({},o.state,{idx:c}),""));function u(){return(o.state||{idx:null}).idx}function h(){a=ci.Pop;let S=u(),w=S==null?null:S-c;c=S,l&&l({action:a,location:g.location,delta:w})}function m(S,w){a=ci.Push;let p=Lm(g.location,S,w);n&&n(p,S),c=u()+1;let y=p_(p,c),E=g.createHref(p);try{o.pushState(y,"",E)}catch(C){if(C instanceof DOMException&&C.name==="DataCloneError")throw C;i.location.assign(E)}s&&l&&l({action:a,location:g.location,delta:1})}function v(S,w){a=ci.Replace;let p=Lm(g.location,S,w);n&&n(p,S),c=u();let y=p_(p,c),E=g.createHref(p);o.replaceState(y,"",E),s&&l&&l({action:a,location:g.location,delta:0})}function x(S){let w=i.location.origin!=="null"?i.location.origin:i.location.href,p=typeof S=="string"?S:Pd(S);return tt(w,"No window.location.(origin|href) available to create URL for href: "+p),new URL(p,w)}let g={get action(){return a},get location(){return t(i,o)},listen(S){if(l)throw new Error("A history only accepts one active listener");return i.addEventListener(h_,h),l=S,()=>{i.removeEventListener(h_,h),l=null}},createHref(S){return e(i,S)},createURL:x,encodeLocation(S){let w=x(S);return{pathname:w.pathname,search:w.search,hash:w.hash}},push:m,replace:v,go(S){return o.go(S)}};return g}var m_;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(m_||(m_={}));function oD(t,e,n){n===void 0&&(n="/");let r=typeof e=="string"?oa(e):e,i=Ly(r.pathname||"/",n);if(i==null)return null;let s=uS(t);aD(s);let o=null;for(let a=0;o==null&&a<s.length;++a)o=gD(s[a],wD(i));return o}function uS(t,e,n,r){e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,o,a)=>{let l={relativePath:a===void 0?s.path||"":a,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};l.relativePath.startsWith("/")&&(tt(l.relativePath.startsWith(r),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(r.length));let c=Ti([r,l.relativePath]),u=n.concat(l);s.children&&s.children.length>0&&(tt(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),uS(s.children,e,u,c)),!(s.path==null&&!s.index)&&e.push({path:c,score:pD(c,s.index),routesMeta:u})};return t.forEach((s,o)=>{var a;if(s.path===""||!((a=s.path)!=null&&a.includes("?")))i(s,o);else for(let l of dS(s.path))i(s,o,l)}),e}function dS(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let o=dS(r.join("/")),a=[];return a.push(...o.map(l=>l===""?s:[s,l].join("/"))),i&&a.push(...o),a.map(l=>t.startsWith("/")&&l===""?"/":l)}function aD(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:mD(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const lD=/^:\w+$/,cD=3,uD=2,dD=1,fD=10,hD=-2,g_=t=>t==="*";function pD(t,e){let n=t.split("/"),r=n.length;return n.some(g_)&&(r+=hD),e&&(r+=uD),n.filter(i=>!g_(i)).reduce((i,s)=>i+(lD.test(s)?cD:s===""?dD:fD),r)}function mD(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function gD(t,e){let{routesMeta:n}=t,r={},i="/",s=[];for(let o=0;o<n.length;++o){let a=n[o],l=o===n.length-1,c=i==="/"?e:e.slice(i.length)||"/",u=yD({path:a.relativePath,caseSensitive:a.caseSensitive,end:l},c);if(!u)return null;Object.assign(r,u.params);let h=a.route;s.push({params:r,pathname:Ti([i,u.pathname]),pathnameBase:xD(Ti([i,u.pathnameBase])),route:h}),u.pathnameBase!=="/"&&(i=Ti([i,u.pathnameBase]))}return s}function yD(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=vD(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((c,u,h)=>{if(u==="*"){let m=a[h]||"";o=s.slice(0,s.length-m.length).replace(/(.)\/+$/,"$1")}return c[u]=_D(a[h]||"",u),c},{}),pathname:s,pathnameBase:o,pattern:t}}function vD(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),Ny(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/\/:(\w+)/g,(o,a)=>(r.push(a),"/([^\\/]+)"));return t.endsWith("*")?(r.push("*"),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function wD(t){try{return decodeURI(t)}catch(e){return Ny(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function _D(t,e){try{return decodeURIComponent(t)}catch(n){return Ny(!1,'The value for the URL param "'+e+'" will not be decoded because'+(' the string "'+t+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),t}}function Ly(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}function ED(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?oa(t):t;return{pathname:n?n.startsWith("/")?n:TD(n,e):e,search:SD(r),hash:bD(i)}}function TD(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function sp(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function My(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function Vy(t,e,n,r){r===void 0&&(r=!1);let i;typeof t=="string"?i=oa(t):(i=Bl({},t),tt(!i.pathname||!i.pathname.includes("?"),sp("?","pathname","search",i)),tt(!i.pathname||!i.pathname.includes("#"),sp("#","pathname","hash",i)),tt(!i.search||!i.search.includes("#"),sp("#","search","hash",i)));let s=t===""||i.pathname==="",o=s?"/":i.pathname,a;if(r||o==null)a=n;else{let h=e.length-1;if(o.startsWith("..")){let m=o.split("/");for(;m[0]==="..";)m.shift(),h-=1;i.pathname=m.join("/")}a=h>=0?e[h]:"/"}let l=ED(i,a),c=o&&o!=="/"&&o.endsWith("/"),u=(s||o===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(c||u)&&(l.pathname+="/"),l}const Ti=t=>t.join("/").replace(/\/\/+/g,"/"),xD=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),SD=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,bD=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function CD(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const fS=["post","put","patch","delete"];new Set(fS);const ID=["get",...fS];new Set(ID);/**
 * React Router v6.17.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function kd(){return kd=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},kd.apply(this,arguments)}const jy=A.createContext(null),AD=A.createContext(null),aa=A.createContext(null),Nf=A.createContext(null),vr=A.createContext({outlet:null,matches:[],isDataRoute:!1}),hS=A.createContext(null);function PD(t,e){let{relative:n}=e===void 0?{}:e;la()||tt(!1);let{basename:r,navigator:i}=A.useContext(aa),{hash:s,pathname:o,search:a}=mS(t,{relative:n}),l=o;return r!=="/"&&(l=o==="/"?r:Ti([r,o])),i.createHref({pathname:l,search:a,hash:s})}function la(){return A.useContext(Nf)!=null}function mc(){return la()||tt(!1),A.useContext(Nf).location}function pS(t){A.useContext(aa).static||A.useLayoutEffect(t)}function Ls(){let{isDataRoute:t}=A.useContext(vr);return t?WD():kD()}function kD(){la()||tt(!1);let t=A.useContext(jy),{basename:e,navigator:n}=A.useContext(aa),{matches:r}=A.useContext(vr),{pathname:i}=mc(),s=JSON.stringify(My(r).map(l=>l.pathnameBase)),o=A.useRef(!1);return pS(()=>{o.current=!0}),A.useCallback(function(l,c){if(c===void 0&&(c={}),!o.current)return;if(typeof l=="number"){n.go(l);return}let u=Vy(l,JSON.parse(s),i,c.relative==="path");t==null&&e!=="/"&&(u.pathname=u.pathname==="/"?e:Ti([e,u.pathname])),(c.replace?n.replace:n.push)(u,c.state,c)},[e,n,s,i,t])}const RD=A.createContext(null);function OD(t){let e=A.useContext(vr).outlet;return e&&A.createElement(RD.Provider,{value:t},e)}function DD(){let{matches:t}=A.useContext(vr),e=t[t.length-1];return e?e.params:{}}function mS(t,e){let{relative:n}=e===void 0?{}:e,{matches:r}=A.useContext(vr),{pathname:i}=mc(),s=JSON.stringify(My(r).map(o=>o.pathnameBase));return A.useMemo(()=>Vy(t,JSON.parse(s),i,n==="path"),[t,s,i,n])}function ND(t,e){return LD(t,e)}function LD(t,e,n){la()||tt(!1);let{navigator:r}=A.useContext(aa),{matches:i}=A.useContext(vr),s=i[i.length-1],o=s?s.params:{};s&&s.pathname;let a=s?s.pathnameBase:"/";s&&s.route;let l=mc(),c;if(e){var u;let g=typeof e=="string"?oa(e):e;a==="/"||(u=g.pathname)!=null&&u.startsWith(a)||tt(!1),c=g}else c=l;let h=c.pathname||"/",m=a==="/"?h:h.slice(a.length)||"/",v=oD(t,{pathname:m}),x=$D(v&&v.map(g=>Object.assign({},g,{params:Object.assign({},o,g.params),pathname:Ti([a,r.encodeLocation?r.encodeLocation(g.pathname).pathname:g.pathname]),pathnameBase:g.pathnameBase==="/"?a:Ti([a,r.encodeLocation?r.encodeLocation(g.pathnameBase).pathname:g.pathnameBase])})),i,n);return e&&x?A.createElement(Nf.Provider,{value:{location:kd({pathname:"/",search:"",hash:"",state:null,key:"default"},c),navigationType:ci.Pop}},x):x}function MD(){let t=HD(),e=CD(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},s=null;return A.createElement(A.Fragment,null,A.createElement("h2",null,"Unexpected Application Error!"),A.createElement("h3",{style:{fontStyle:"italic"}},e),n?A.createElement("pre",{style:i},n):null,s)}const VD=A.createElement(MD,null);class jD extends A.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error||n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error?A.createElement(vr.Provider,{value:this.props.routeContext},A.createElement(hS.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function FD(t){let{routeContext:e,match:n,children:r}=t,i=A.useContext(jy);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),A.createElement(vr.Provider,{value:e},r)}function $D(t,e,n){var r;if(e===void 0&&(e=[]),n===void 0&&(n=null),t==null){var i;if((i=n)!=null&&i.errors)t=n.matches;else return null}let s=t,o=(r=n)==null?void 0:r.errors;if(o!=null){let a=s.findIndex(l=>l.route.id&&(o==null?void 0:o[l.route.id]));a>=0||tt(!1),s=s.slice(0,Math.min(s.length,a+1))}return s.reduceRight((a,l,c)=>{let u=l.route.id?o==null?void 0:o[l.route.id]:null,h=null;n&&(h=l.route.errorElement||VD);let m=e.concat(s.slice(0,c+1)),v=()=>{let x;return u?x=h:l.route.Component?x=A.createElement(l.route.Component,null):l.route.element?x=l.route.element:x=a,A.createElement(FD,{match:l,routeContext:{outlet:a,matches:m,isDataRoute:n!=null},children:x})};return n&&(l.route.ErrorBoundary||l.route.errorElement||c===0)?A.createElement(jD,{location:n.location,revalidation:n.revalidation,component:h,error:u,children:v(),routeContext:{outlet:null,matches:m,isDataRoute:!0}}):v()},null)}var gS=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(gS||{}),Rd=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(Rd||{});function BD(t){let e=A.useContext(jy);return e||tt(!1),e}function UD(t){let e=A.useContext(AD);return e||tt(!1),e}function zD(t){let e=A.useContext(vr);return e||tt(!1),e}function yS(t){let e=zD(),n=e.matches[e.matches.length-1];return n.route.id||tt(!1),n.route.id}function HD(){var t;let e=A.useContext(hS),n=UD(Rd.UseRouteError),r=yS(Rd.UseRouteError);return e||((t=n.errors)==null?void 0:t[r])}function WD(){let{router:t}=BD(gS.UseNavigateStable),e=yS(Rd.UseNavigateStable),n=A.useRef(!1);return pS(()=>{n.current=!0}),A.useCallback(function(i,s){s===void 0&&(s={}),n.current&&(typeof i=="number"?t.navigate(i):t.navigate(i,kd({fromRouteId:e},s)))},[t,e])}function qD(t){let{to:e,replace:n,state:r,relative:i}=t;la()||tt(!1);let{matches:s}=A.useContext(vr),{pathname:o}=mc(),a=Ls(),l=Vy(e,My(s).map(u=>u.pathnameBase),o,i==="path"),c=JSON.stringify(l);return A.useEffect(()=>a(JSON.parse(c),{replace:n,state:r,relative:i}),[a,c,i,n,r]),null}function vS(t){return OD(t.context)}function er(t){tt(!1)}function GD(t){let{basename:e="/",children:n=null,location:r,navigationType:i=ci.Pop,navigator:s,static:o=!1}=t;la()&&tt(!1);let a=e.replace(/^\/*/,"/"),l=A.useMemo(()=>({basename:a,navigator:s,static:o}),[a,s,o]);typeof r=="string"&&(r=oa(r));let{pathname:c="/",search:u="",hash:h="",state:m=null,key:v="default"}=r,x=A.useMemo(()=>{let g=Ly(c,a);return g==null?null:{location:{pathname:g,search:u,hash:h,state:m,key:v},navigationType:i}},[a,c,u,h,m,v,i]);return x==null?null:A.createElement(aa.Provider,{value:l},A.createElement(Nf.Provider,{children:n,value:x}))}function KD(t){let{children:e,location:n}=t;return ND(Mm(e),n)}new Promise(()=>{});function Mm(t,e){e===void 0&&(e=[]);let n=[];return A.Children.forEach(t,(r,i)=>{if(!A.isValidElement(r))return;let s=[...e,i];if(r.type===A.Fragment){n.push.apply(n,Mm(r.props.children,s));return}r.type!==er&&tt(!1),!r.props.index||!r.props.children||tt(!1);let o={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=Mm(r.props.children,s)),n.push(o)}),n}/**
 * React Router DOM v6.17.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Vm(){return Vm=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Vm.apply(this,arguments)}function QD(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function YD(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function XD(t,e){return t.button===0&&(!e||e==="_self")&&!YD(t)}const JD=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","unstable_viewTransition"],ZD="startTransition",y_=Gk[ZD];function eN(t){let{basename:e,children:n,future:r,window:i}=t,s=A.useRef();s.current==null&&(s.current=rD({window:i,v5Compat:!0}));let o=s.current,[a,l]=A.useState({action:o.action,location:o.location}),{v7_startTransition:c}=r||{},u=A.useCallback(h=>{c&&y_?y_(()=>l(h)):l(h)},[l,c]);return A.useLayoutEffect(()=>o.listen(u),[o,u]),A.createElement(GD,{basename:e,children:n,location:a.location,navigationType:a.action,navigator:o})}const tN=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",nN=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Jt=A.forwardRef(function(e,n){let{onClick:r,relative:i,reloadDocument:s,replace:o,state:a,target:l,to:c,preventScrollReset:u,unstable_viewTransition:h}=e,m=QD(e,JD),{basename:v}=A.useContext(aa),x,g=!1;if(typeof c=="string"&&nN.test(c)&&(x=c,tN))try{let y=new URL(window.location.href),E=c.startsWith("//")?new URL(y.protocol+c):new URL(c),C=Ly(E.pathname,v);E.origin===y.origin&&C!=null?c=C+E.search+E.hash:g=!0}catch{}let S=PD(c,{relative:i}),w=rN(c,{replace:o,state:a,target:l,preventScrollReset:u,relative:i,unstable_viewTransition:h});function p(y){r&&r(y),y.defaultPrevented||w(y)}return A.createElement("a",Vm({},m,{href:x||S,onClick:g||s?r:p,ref:n,target:l}))});var v_;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})(v_||(v_={}));var w_;(function(t){t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(w_||(w_={}));function rN(t,e){let{target:n,replace:r,state:i,preventScrollReset:s,relative:o,unstable_viewTransition:a}=e===void 0?{}:e,l=Ls(),c=mc(),u=mS(t,{relative:o});return A.useCallback(h=>{if(XD(h,n)){h.preventDefault();let m=r!==void 0?r:Pd(c)===Pd(u);l(t,{replace:m,state:i,preventScrollReset:s,relative:o,unstable_viewTransition:a})}},[c,l,u,r,i,n,t,s,o,a])}var en=function(){return en=Object.assign||function(e){for(var n,r=1,i=arguments.length;r<i;r++){n=arguments[r];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(e[s]=n[s])}return e},en.apply(this,arguments)};function Fy(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function ca(t,e,n,r){function i(s){return s instanceof n?s:new n(function(o){o(s)})}return new(n||(n=Promise))(function(s,o){function a(u){try{c(r.next(u))}catch(h){o(h)}}function l(u){try{c(r.throw(u))}catch(h){o(h)}}function c(u){u.done?s(u.value):i(u.value).then(a,l)}c((r=r.apply(t,e||[])).next())})}function ua(t,e){var n={label:0,sent:function(){if(s[0]&1)throw s[1];return s[1]},trys:[],ops:[]},r,i,s,o;return o={next:a(0),throw:a(1),return:a(2)},typeof Symbol=="function"&&(o[Symbol.iterator]=function(){return this}),o;function a(c){return function(u){return l([c,u])}}function l(c){if(r)throw new TypeError("Generator is already executing.");for(;o&&(o=0,c[0]&&(n=0)),n;)try{if(r=1,i&&(s=c[0]&2?i.return:c[0]?i.throw||((s=i.return)&&s.call(i),0):i.next)&&!(s=s.call(i,c[1])).done)return s;switch(i=0,s&&(c=[c[0]&2,s.value]),c[0]){case 0:case 1:s=c;break;case 4:return n.label++,{value:c[1],done:!1};case 5:n.label++,i=c[1],c=[0];continue;case 7:c=n.ops.pop(),n.trys.pop();continue;default:if(s=n.trys,!(s=s.length>0&&s[s.length-1])&&(c[0]===6||c[0]===2)){n=0;continue}if(c[0]===3&&(!s||c[1]>s[0]&&c[1]<s[3])){n.label=c[1];break}if(c[0]===6&&n.label<s[1]){n.label=s[1],s=c;break}if(s&&n.label<s[2]){n.label=s[2],n.ops.push(c);break}s[2]&&n.ops.pop(),n.trys.pop();continue}c=e.call(t,n)}catch(u){c=[6,u],i=0}finally{r=s=0}if(c[0]&5)throw c[1];return{value:c[0]?c[1]:void 0,done:!0}}}function __(t,e){var n=typeof Symbol=="function"&&t[Symbol.iterator];if(!n)return t;var r=n.call(t),i,s=[],o;try{for(;(e===void 0||e-- >0)&&!(i=r.next()).done;)s.push(i.value)}catch(a){o={error:a}}finally{try{i&&!i.done&&(n=r.return)&&n.call(r)}finally{if(o)throw o.error}}return s}function Bo(t,e,n){if(n||arguments.length===2)for(var r=0,i=e.length,s;r<i;r++)(s||!(r in e))&&(s||(s=Array.prototype.slice.call(e,0,r)),s[r]=e[r]);return t.concat(s||Array.prototype.slice.call(e))}var De="-ms-",dl="-moz-",Te="-webkit-",wS="comm",Lf="rule",$y="decl",iN="@import",_S="@keyframes",sN="@layer",oN=Math.abs,By=String.fromCharCode,jm=Object.assign;function aN(t,e){return mt(t,0)^45?(((e<<2^mt(t,0))<<2^mt(t,1))<<2^mt(t,2))<<2^mt(t,3):0}function ES(t){return t.trim()}function Ir(t,e){return(t=e.exec(t))?t[0]:t}function de(t,e,n){return t.replace(e,n)}function Wu(t,e){return t.indexOf(e)}function mt(t,e){return t.charCodeAt(e)|0}function Uo(t,e,n){return t.slice(e,n)}function nr(t){return t.length}function TS(t){return t.length}function Ga(t,e){return e.push(t),t}function lN(t,e){return t.map(e).join("")}function E_(t,e){return t.filter(function(n){return!Ir(n,e)})}var Mf=1,zo=1,xS=0,Rn=0,st=0,da="";function Vf(t,e,n,r,i,s,o,a){return{value:t,root:e,parent:n,type:r,props:i,children:s,line:Mf,column:zo,length:o,return:"",siblings:a}}function Xr(t,e){return jm(Vf("",null,null,"",null,null,0,t.siblings),t,{length:-t.length},e)}function eo(t){for(;t.root;)t=Xr(t.root,{children:[t]});Ga(t,t.siblings)}function cN(){return st}function uN(){return st=Rn>0?mt(da,--Rn):0,zo--,st===10&&(zo=1,Mf--),st}function Bn(){return st=Rn<xS?mt(da,Rn++):0,zo++,st===10&&(zo=1,Mf++),st}function us(){return mt(da,Rn)}function qu(){return Rn}function jf(t,e){return Uo(da,t,e)}function Fm(t){switch(t){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function dN(t){return Mf=zo=1,xS=nr(da=t),Rn=0,[]}function fN(t){return da="",t}function op(t){return ES(jf(Rn-1,$m(t===91?t+2:t===40?t+1:t)))}function hN(t){for(;(st=us())&&st<33;)Bn();return Fm(t)>2||Fm(st)>3?"":" "}function pN(t,e){for(;--e&&Bn()&&!(st<48||st>102||st>57&&st<65||st>70&&st<97););return jf(t,qu()+(e<6&&us()==32&&Bn()==32))}function $m(t){for(;Bn();)switch(st){case t:return Rn;case 34:case 39:t!==34&&t!==39&&$m(st);break;case 40:t===41&&$m(t);break;case 92:Bn();break}return Rn}function mN(t,e){for(;Bn()&&t+st!==47+10;)if(t+st===42+42&&us()===47)break;return"/*"+jf(e,Rn-1)+"*"+By(t===47?t:Bn())}function gN(t){for(;!Fm(us());)Bn();return jf(t,Rn)}function yN(t){return fN(Gu("",null,null,null,[""],t=dN(t),0,[0],t))}function Gu(t,e,n,r,i,s,o,a,l){for(var c=0,u=0,h=o,m=0,v=0,x=0,g=1,S=1,w=1,p=0,y="",E=i,C=s,I=r,P=y;S;)switch(x=p,p=Bn()){case 40:if(x!=108&&mt(P,h-1)==58){Wu(P+=de(op(p),"&","&\f"),"&\f")!=-1&&(w=-1);break}case 34:case 39:case 91:P+=op(p);break;case 9:case 10:case 13:case 32:P+=hN(x);break;case 92:P+=pN(qu()-1,7);continue;case 47:switch(us()){case 42:case 47:Ga(vN(mN(Bn(),qu()),e,n,l),l);break;default:P+="/"}break;case 123*g:a[c++]=nr(P)*w;case 125*g:case 59:case 0:switch(p){case 0:case 125:S=0;case 59+u:w==-1&&(P=de(P,/\f/g,"")),v>0&&nr(P)-h&&Ga(v>32?x_(P+";",r,n,h-1,l):x_(de(P," ","")+";",r,n,h-2,l),l);break;case 59:P+=";";default:if(Ga(I=T_(P,e,n,c,u,i,a,y,E=[],C=[],h,s),s),p===123)if(u===0)Gu(P,e,I,I,E,s,h,a,C);else switch(m===99&&mt(P,3)===110?100:m){case 100:case 108:case 109:case 115:Gu(t,I,I,r&&Ga(T_(t,I,I,0,0,i,a,y,i,E=[],h,C),C),i,C,h,a,r?E:C);break;default:Gu(P,I,I,I,[""],C,0,a,C)}}c=u=v=0,g=w=1,y=P="",h=o;break;case 58:h=1+nr(P),v=x;default:if(g<1){if(p==123)--g;else if(p==125&&g++==0&&uN()==125)continue}switch(P+=By(p),p*g){case 38:w=u>0?1:(P+="\f",-1);break;case 44:a[c++]=(nr(P)-1)*w,w=1;break;case 64:us()===45&&(P+=op(Bn())),m=us(),u=h=nr(y=P+=gN(qu())),p++;break;case 45:x===45&&nr(P)==2&&(g=0)}}return s}function T_(t,e,n,r,i,s,o,a,l,c,u,h){for(var m=i-1,v=i===0?s:[""],x=TS(v),g=0,S=0,w=0;g<r;++g)for(var p=0,y=Uo(t,m+1,m=oN(S=o[g])),E=t;p<x;++p)(E=ES(S>0?v[p]+" "+y:de(y,/&\f/g,v[p])))&&(l[w++]=E);return Vf(t,e,n,i===0?Lf:a,l,c,u,h)}function vN(t,e,n,r){return Vf(t,e,n,wS,By(cN()),Uo(t,2,-2),0,r)}function x_(t,e,n,r,i){return Vf(t,e,n,$y,Uo(t,0,r),Uo(t,r+1,-1),r,i)}function SS(t,e,n){switch(aN(t,e)){case 5103:return Te+"print-"+t+t;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return Te+t+t;case 4789:return dl+t+t;case 5349:case 4246:case 4810:case 6968:case 2756:return Te+t+dl+t+De+t+t;case 5936:switch(mt(t,e+11)){case 114:return Te+t+De+de(t,/[svh]\w+-[tblr]{2}/,"tb")+t;case 108:return Te+t+De+de(t,/[svh]\w+-[tblr]{2}/,"tb-rl")+t;case 45:return Te+t+De+de(t,/[svh]\w+-[tblr]{2}/,"lr")+t}case 6828:case 4268:case 2903:return Te+t+De+t+t;case 6165:return Te+t+De+"flex-"+t+t;case 5187:return Te+t+de(t,/(\w+).+(:[^]+)/,Te+"box-$1$2"+De+"flex-$1$2")+t;case 5443:return Te+t+De+"flex-item-"+de(t,/flex-|-self/g,"")+(Ir(t,/flex-|baseline/)?"":De+"grid-row-"+de(t,/flex-|-self/g,""))+t;case 4675:return Te+t+De+"flex-line-pack"+de(t,/align-content|flex-|-self/g,"")+t;case 5548:return Te+t+De+de(t,"shrink","negative")+t;case 5292:return Te+t+De+de(t,"basis","preferred-size")+t;case 6060:return Te+"box-"+de(t,"-grow","")+Te+t+De+de(t,"grow","positive")+t;case 4554:return Te+de(t,/([^-])(transform)/g,"$1"+Te+"$2")+t;case 6187:return de(de(de(t,/(zoom-|grab)/,Te+"$1"),/(image-set)/,Te+"$1"),t,"")+t;case 5495:case 3959:return de(t,/(image-set\([^]*)/,Te+"$1$`$1");case 4968:return de(de(t,/(.+:)(flex-)?(.*)/,Te+"box-pack:$3"+De+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+Te+t+t;case 4200:if(!Ir(t,/flex-|baseline/))return De+"grid-column-align"+Uo(t,e)+t;break;case 2592:case 3360:return De+de(t,"template-","")+t;case 4384:case 3616:return n&&n.some(function(r,i){return e=i,Ir(r.props,/grid-\w+-end/)})?~Wu(t+(n=n[e].value),"span")?t:De+de(t,"-start","")+t+De+"grid-row-span:"+(~Wu(n,"span")?Ir(n,/\d+/):+Ir(n,/\d+/)-+Ir(t,/\d+/))+";":De+de(t,"-start","")+t;case 4896:case 4128:return n&&n.some(function(r){return Ir(r.props,/grid-\w+-start/)})?t:De+de(de(t,"-end","-span"),"span ","")+t;case 4095:case 3583:case 4068:case 2532:return de(t,/(.+)-inline(.+)/,Te+"$1$2")+t;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(nr(t)-1-e>6)switch(mt(t,e+1)){case 109:if(mt(t,e+4)!==45)break;case 102:return de(t,/(.+:)(.+)-([^]+)/,"$1"+Te+"$2-$3$1"+dl+(mt(t,e+3)==108?"$3":"$2-$3"))+t;case 115:return~Wu(t,"stretch")?SS(de(t,"stretch","fill-available"),e,n)+t:t}break;case 5152:case 5920:return de(t,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(r,i,s,o,a,l,c){return De+i+":"+s+c+(o?De+i+"-span:"+(a?l:+l-+s)+c:"")+t});case 4949:if(mt(t,e+6)===121)return de(t,":",":"+Te)+t;break;case 6444:switch(mt(t,mt(t,14)===45?18:11)){case 120:return de(t,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+Te+(mt(t,14)===45?"inline-":"")+"box$3$1"+Te+"$2$3$1"+De+"$2box$3")+t;case 100:return de(t,":",":"+De)+t}break;case 5719:case 2647:case 2135:case 3927:case 2391:return de(t,"scroll-","scroll-snap-")+t}return t}function Od(t,e){for(var n="",r=0;r<t.length;r++)n+=e(t[r],r,t,e)||"";return n}function wN(t,e,n,r){switch(t.type){case sN:if(t.children.length)break;case iN:case $y:return t.return=t.return||t.value;case wS:return"";case _S:return t.return=t.value+"{"+Od(t.children,r)+"}";case Lf:if(!nr(t.value=t.props.join(",")))return""}return nr(n=Od(t.children,r))?t.return=t.value+"{"+n+"}":""}function _N(t){var e=TS(t);return function(n,r,i,s){for(var o="",a=0;a<e;a++)o+=t[a](n,r,i,s)||"";return o}}function EN(t){return function(e){e.root||(e=e.return)&&t(e)}}function TN(t,e,n,r){if(t.length>-1&&!t.return)switch(t.type){case $y:t.return=SS(t.value,t.length,n);return;case _S:return Od([Xr(t,{value:de(t.value,"@","@"+Te)})],r);case Lf:if(t.length)return lN(n=t.props,function(i){switch(Ir(i,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":eo(Xr(t,{props:[de(i,/:(read-\w+)/,":"+dl+"$1")]})),eo(Xr(t,{props:[i]})),jm(t,{props:E_(n,r)});break;case"::placeholder":eo(Xr(t,{props:[de(i,/:(plac\w+)/,":"+Te+"input-$1")]})),eo(Xr(t,{props:[de(i,/:(plac\w+)/,":"+dl+"$1")]})),eo(Xr(t,{props:[de(i,/:(plac\w+)/,De+"input-$1")]})),eo(Xr(t,{props:[i]})),jm(t,{props:E_(n,r)});break}return""})}}var xN={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Ho=typeof process<"u"&&process.env!==void 0&&({}.REACT_APP_SC_ATTR||{}.SC_ATTR)||"data-styled",Uy=typeof window<"u"&&"HTMLElement"in window,SN=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&process.env!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==""?{}.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&{}.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&process.env!==void 0&&{}.SC_DISABLE_SPEEDY!==void 0&&{}.SC_DISABLE_SPEEDY!==""&&{}.SC_DISABLE_SPEEDY!=="false"&&{}.SC_DISABLE_SPEEDY),Ff=Object.freeze([]),Wo=Object.freeze({});function bN(t,e,n){return n===void 0&&(n=Wo),t.theme!==n.theme&&t.theme||e||n.theme}var bS=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),CN=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,IN=/(^-|-$)/g;function S_(t){return t.replace(CN,"-").replace(IN,"")}var AN=/(a)(d)/gi,b_=function(t){return String.fromCharCode(t+(t>25?39:97))};function Bm(t){var e,n="";for(e=Math.abs(t);e>52;e=e/52|0)n=b_(e%52)+n;return(b_(e%52)+n).replace(AN,"$1-$2")}var ap,vo=function(t,e){for(var n=e.length;n;)t=33*t^e.charCodeAt(--n);return t},CS=function(t){return vo(5381,t)};function PN(t){return Bm(CS(t)>>>0)}function kN(t){return t.displayName||t.name||"Component"}function lp(t){return typeof t=="string"&&!0}var IS=typeof Symbol=="function"&&Symbol.for,AS=IS?Symbol.for("react.memo"):60115,RN=IS?Symbol.for("react.forward_ref"):60112,ON={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},DN={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},PS={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},NN=((ap={})[RN]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},ap[AS]=PS,ap);function C_(t){return("type"in(e=t)&&e.type.$$typeof)===AS?PS:"$$typeof"in t?NN[t.$$typeof]:ON;var e}var LN=Object.defineProperty,MN=Object.getOwnPropertyNames,I_=Object.getOwnPropertySymbols,VN=Object.getOwnPropertyDescriptor,jN=Object.getPrototypeOf,A_=Object.prototype;function kS(t,e,n){if(typeof e!="string"){if(A_){var r=jN(e);r&&r!==A_&&kS(t,r,n)}var i=MN(e);I_&&(i=i.concat(I_(e)));for(var s=C_(t),o=C_(e),a=0;a<i.length;++a){var l=i[a];if(!(l in DN||n&&n[l]||o&&l in o||s&&l in s)){var c=VN(e,l);try{LN(t,l,c)}catch{}}}}return t}function qo(t){return typeof t=="function"}function zy(t){return typeof t=="object"&&"styledComponentId"in t}function is(t,e){return t&&e?"".concat(t," ").concat(e):t||e||""}function P_(t,e){if(t.length===0)return"";for(var n=t[0],r=1;r<t.length;r++)n+=e?e+t[r]:t[r];return n}function Ul(t){return t!==null&&typeof t=="object"&&t.constructor.name===Object.name&&!("props"in t&&t.$$typeof)}function Um(t,e,n){if(n===void 0&&(n=!1),!n&&!Ul(t)&&!Array.isArray(t))return e;if(Array.isArray(e))for(var r=0;r<e.length;r++)t[r]=Um(t[r],e[r]);else if(Ul(e))for(var r in e)t[r]=Um(t[r],e[r]);return t}function Hy(t,e){Object.defineProperty(t,"toString",{value:e})}function gc(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(t," for more information.").concat(e.length>0?" Args: ".concat(e.join(", ")):""))}var FN=function(){function t(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e}return t.prototype.indexOfGroup=function(e){for(var n=0,r=0;r<e;r++)n+=this.groupSizes[r];return n},t.prototype.insertRules=function(e,n){if(e>=this.groupSizes.length){for(var r=this.groupSizes,i=r.length,s=i;e>=s;)if((s<<=1)<0)throw gc(16,"".concat(e));this.groupSizes=new Uint32Array(s),this.groupSizes.set(r),this.length=s;for(var o=i;o<s;o++)this.groupSizes[o]=0}for(var a=this.indexOfGroup(e+1),l=(o=0,n.length);o<l;o++)this.tag.insertRule(a,n[o])&&(this.groupSizes[e]++,a++)},t.prototype.clearGroup=function(e){if(e<this.length){var n=this.groupSizes[e],r=this.indexOfGroup(e),i=r+n;this.groupSizes[e]=0;for(var s=r;s<i;s++)this.tag.deleteRule(r)}},t.prototype.getGroup=function(e){var n="";if(e>=this.length||this.groupSizes[e]===0)return n;for(var r=this.groupSizes[e],i=this.indexOfGroup(e),s=i+r,o=i;o<s;o++)n+="".concat(this.tag.getRule(o)).concat(`/*!sc*/
`);return n},t}(),Ku=new Map,Dd=new Map,cp=1,pu=function(t){if(Ku.has(t))return Ku.get(t);for(;Dd.has(cp);)cp++;var e=cp++;return Ku.set(t,e),Dd.set(e,t),e},$N=function(t,e){Ku.set(t,e),Dd.set(e,t)},BN="style[".concat(Ho,"][").concat("data-styled-version",'="').concat("6.1.0",'"]'),UN=new RegExp("^".concat(Ho,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),zN=function(t,e,n){for(var r,i=n.split(","),s=0,o=i.length;s<o;s++)(r=i[s])&&t.registerName(e,r)},HN=function(t,e){for(var n,r=((n=e.textContent)!==null&&n!==void 0?n:"").split(`/*!sc*/
`),i=[],s=0,o=r.length;s<o;s++){var a=r[s].trim();if(a){var l=a.match(UN);if(l){var c=0|parseInt(l[1],10),u=l[2];c!==0&&($N(u,c),zN(t,u,l[3]),t.getTag().insertRules(c,i)),i.length=0}else i.push(a)}}};function WN(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var RS=function(t){var e=document.head,n=t||e,r=document.createElement("style"),i=function(a){var l=Array.from(a.querySelectorAll("style[".concat(Ho,"]")));return l[l.length-1]}(n),s=i!==void 0?i.nextSibling:null;r.setAttribute(Ho,"active"),r.setAttribute("data-styled-version","6.1.0");var o=WN();return o&&r.setAttribute("nonce",o),n.insertBefore(r,s),r},qN=function(){function t(e){this.element=RS(e),this.element.appendChild(document.createTextNode("")),this.sheet=function(n){if(n.sheet)return n.sheet;for(var r=document.styleSheets,i=0,s=r.length;i<s;i++){var o=r[i];if(o.ownerNode===n)return o}throw gc(17)}(this.element),this.length=0}return t.prototype.insertRule=function(e,n){try{return this.sheet.insertRule(n,e),this.length++,!0}catch{return!1}},t.prototype.deleteRule=function(e){this.sheet.deleteRule(e),this.length--},t.prototype.getRule=function(e){var n=this.sheet.cssRules[e];return n&&n.cssText?n.cssText:""},t}(),GN=function(){function t(e){this.element=RS(e),this.nodes=this.element.childNodes,this.length=0}return t.prototype.insertRule=function(e,n){if(e<=this.length&&e>=0){var r=document.createTextNode(n);return this.element.insertBefore(r,this.nodes[e]||null),this.length++,!0}return!1},t.prototype.deleteRule=function(e){this.element.removeChild(this.nodes[e]),this.length--},t.prototype.getRule=function(e){return e<this.length?this.nodes[e].textContent:""},t}(),KN=function(){function t(e){this.rules=[],this.length=0}return t.prototype.insertRule=function(e,n){return e<=this.length&&(this.rules.splice(e,0,n),this.length++,!0)},t.prototype.deleteRule=function(e){this.rules.splice(e,1),this.length--},t.prototype.getRule=function(e){return e<this.length?this.rules[e]:""},t}(),k_=Uy,QN={isServer:!Uy,useCSSOMInjection:!SN},OS=function(){function t(e,n,r){e===void 0&&(e=Wo),n===void 0&&(n={});var i=this;this.options=en(en({},QN),e),this.gs=n,this.names=new Map(r),this.server=!!e.isServer,!this.server&&Uy&&k_&&(k_=!1,function(s){for(var o=document.querySelectorAll(BN),a=0,l=o.length;a<l;a++){var c=o[a];c&&c.getAttribute(Ho)!=="active"&&(HN(s,c),c.parentNode&&c.parentNode.removeChild(c))}}(this)),Hy(this,function(){return function(s){for(var o=s.getTag(),a=o.length,l="",c=function(h){var m=function(w){return Dd.get(w)}(h);if(m===void 0)return"continue";var v=s.names.get(m),x=o.getGroup(h);if(v===void 0||x.length===0)return"continue";var g="".concat(Ho,".g").concat(h,'[id="').concat(m,'"]'),S="";v!==void 0&&v.forEach(function(w){w.length>0&&(S+="".concat(w,","))}),l+="".concat(x).concat(g,'{content:"').concat(S,'"}').concat(`/*!sc*/
`)},u=0;u<a;u++)c(u);return l}(i)})}return t.registerId=function(e){return pu(e)},t.prototype.reconstructWithOptions=function(e,n){return n===void 0&&(n=!0),new t(en(en({},this.options),e),this.gs,n&&this.names||void 0)},t.prototype.allocateGSInstance=function(e){return this.gs[e]=(this.gs[e]||0)+1},t.prototype.getTag=function(){return this.tag||(this.tag=(e=function(n){var r=n.useCSSOMInjection,i=n.target;return n.isServer?new KN(i):r?new qN(i):new GN(i)}(this.options),new FN(e)));var e},t.prototype.hasNameForId=function(e,n){return this.names.has(e)&&this.names.get(e).has(n)},t.prototype.registerName=function(e,n){if(pu(e),this.names.has(e))this.names.get(e).add(n);else{var r=new Set;r.add(n),this.names.set(e,r)}},t.prototype.insertRules=function(e,n,r){this.registerName(e,n),this.getTag().insertRules(pu(e),r)},t.prototype.clearNames=function(e){this.names.has(e)&&this.names.get(e).clear()},t.prototype.clearRules=function(e){this.getTag().clearGroup(pu(e)),this.clearNames(e)},t.prototype.clearTag=function(){this.tag=void 0},t}(),YN=/&/g,XN=/^\s*\/\/.*$/gm;function DS(t,e){return t.map(function(n){return n.type==="rule"&&(n.value="".concat(e," ").concat(n.value),n.value=n.value.replaceAll(",",",".concat(e," ")),n.props=n.props.map(function(r){return"".concat(e," ").concat(r)})),Array.isArray(n.children)&&n.type!=="@keyframes"&&(n.children=DS(n.children,e)),n})}function JN(t){var e,n,r,i=t===void 0?Wo:t,s=i.options,o=s===void 0?Wo:s,a=i.plugins,l=a===void 0?Ff:a,c=function(m,v,x){return x===n||x.startsWith(n)&&x.endsWith(n)&&x.replaceAll(n,"").length>0?".".concat(e):m},u=l.slice();u.push(function(m){m.type===Lf&&m.value.includes("&")&&(m.props[0]=m.props[0].replace(YN,n).replace(r,c))}),o.prefix&&u.push(TN),u.push(wN);var h=function(m,v,x,g){v===void 0&&(v=""),x===void 0&&(x=""),g===void 0&&(g="&"),e=g,n=v,r=new RegExp("\\".concat(n,"\\b"),"g");var S=m.replace(XN,""),w=yN(x||v?"".concat(x," ").concat(v," { ").concat(S," }"):S);o.namespace&&(w=DS(w,o.namespace));var p=[];return Od(w,_N(u.concat(EN(function(y){return p.push(y)})))),p};return h.hash=l.length?l.reduce(function(m,v){return v.name||gc(15),vo(m,v.name)},5381).toString():"",h}var ZN=new OS,zm=JN(),NS=te.createContext({shouldForwardProp:void 0,styleSheet:ZN,stylis:zm});NS.Consumer;te.createContext(void 0);function R_(){return A.useContext(NS)}var eL=function(){function t(e,n){var r=this;this.inject=function(i,s){s===void 0&&(s=zm);var o=r.name+s.hash;i.hasNameForId(r.id,o)||i.insertRules(r.id,o,s(r.rules,o,"@keyframes"))},this.name=e,this.id="sc-keyframes-".concat(e),this.rules=n,Hy(this,function(){throw gc(12,String(r.name))})}return t.prototype.getName=function(e){return e===void 0&&(e=zm),this.name+e.hash},t}(),tL=function(t){return t>="A"&&t<="Z"};function O_(t){for(var e="",n=0;n<t.length;n++){var r=t[n];if(n===1&&r==="-"&&t[0]==="-")return t;tL(r)?e+="-"+r.toLowerCase():e+=r}return e.startsWith("ms-")?"-"+e:e}var LS=function(t){return t==null||t===!1||t===""},MS=function(t){var e,n,r=[];for(var i in t){var s=t[i];t.hasOwnProperty(i)&&!LS(s)&&(Array.isArray(s)&&s.isCss||qo(s)?r.push("".concat(O_(i),":"),s,";"):Ul(s)?r.push.apply(r,Bo(Bo(["".concat(i," {")],MS(s),!1),["}"],!1)):r.push("".concat(O_(i),": ").concat((e=i,(n=s)==null||typeof n=="boolean"||n===""?"":typeof n!="number"||n===0||e in xN||e.startsWith("--")?String(n).trim():"".concat(n,"px")),";")))}return r};function ds(t,e,n,r){if(LS(t))return[];if(zy(t))return[".".concat(t.styledComponentId)];if(qo(t)){if(!qo(s=t)||s.prototype&&s.prototype.isReactComponent||!e)return[t];var i=t(e);return ds(i,e,n,r)}var s;return t instanceof eL?n?(t.inject(n,r),[t.getName(r)]):[t]:Ul(t)?MS(t):Array.isArray(t)?Array.prototype.concat.apply(Ff,t.map(function(o){return ds(o,e,n,r)})):[t.toString()]}function nL(t){for(var e=0;e<t.length;e+=1){var n=t[e];if(qo(n)&&!zy(n))return!1}return!0}var rL=CS("6.1.0"),iL=function(){function t(e,n,r){this.rules=e,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&nL(e),this.componentId=n,this.baseHash=vo(rL,n),this.baseStyle=r,OS.registerId(n)}return t.prototype.generateAndInjectStyles=function(e,n,r){var i=this.baseStyle?this.baseStyle.generateAndInjectStyles(e,n,r):"";if(this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(this.componentId,this.staticRulesId))i=is(i,this.staticRulesId);else{var s=P_(ds(this.rules,e,n,r)),o=Bm(vo(this.baseHash,s)>>>0);if(!n.hasNameForId(this.componentId,o)){var a=r(s,".".concat(o),void 0,this.componentId);n.insertRules(this.componentId,o,a)}i=is(i,o),this.staticRulesId=o}else{for(var l=vo(this.baseHash,r.hash),c="",u=0;u<this.rules.length;u++){var h=this.rules[u];if(typeof h=="string")c+=h;else if(h){var m=P_(ds(h,e,n,r));l=vo(l,m+u),c+=m}}if(c){var v=Bm(l>>>0);n.hasNameForId(this.componentId,v)||n.insertRules(this.componentId,v,r(c,".".concat(v),void 0,this.componentId)),i=is(i,v)}}return i},t}(),VS=te.createContext(void 0);VS.Consumer;var up={};function sL(t,e,n){var r=zy(t),i=t,s=!lp(t),o=e.attrs,a=o===void 0?Ff:o,l=e.componentId,c=l===void 0?function(y,E){var C=typeof y!="string"?"sc":S_(y);up[C]=(up[C]||0)+1;var I="".concat(C,"-").concat(PN("6.1.0"+C+up[C]));return E?"".concat(E,"-").concat(I):I}(e.displayName,e.parentComponentId):l,u=e.displayName;u===void 0&&function(y){return lp(y)?"styled.".concat(y):"Styled(".concat(kN(y),")")}(t);var h=e.displayName&&e.componentId?"".concat(S_(e.displayName),"-").concat(e.componentId):e.componentId||c,m=r&&i.attrs?i.attrs.concat(a).filter(Boolean):a,v=e.shouldForwardProp;if(r&&i.shouldForwardProp){var x=i.shouldForwardProp;if(e.shouldForwardProp){var g=e.shouldForwardProp;v=function(y,E){return x(y,E)&&g(y,E)}}else v=x}var S=new iL(n,h,r?i.componentStyle:void 0);function w(y,E){return function(C,I,P){var R=C.attrs,N=C.componentStyle,O=C.defaultProps,U=C.foldedComponentIds,W=C.styledComponentId,F=C.target,M=te.useContext(VS),V=R_(),q=C.shouldForwardProp||V.shouldForwardProp,k=function(ke,fe,nt){for(var ve,lt=en(en({},fe),{className:void 0,theme:nt}),cn=0;cn<ke.length;cn+=1){var un=qo(ve=ke[cn])?ve(lt):ve;for(var kt in un)lt[kt]=kt==="className"?is(lt[kt],un[kt]):kt==="style"?en(en({},lt[kt]),un[kt]):un[kt]}return fe.className&&(lt.className=is(lt.className,fe.className)),lt}(R,I,bN(I,M,O)||Wo),D=k.as||F,B={};for(var K in k)k[K]===void 0||K[0]==="$"||K==="as"||K==="theme"||(K==="forwardedAs"?B.as=k.forwardedAs:q&&!q(K,D)||(B[K]=k[K]));var re=function(ke,fe){var nt=R_(),ve=ke.generateAndInjectStyles(fe,nt.styleSheet,nt.stylis);return ve}(N,k),ue=is(U,W);return re&&(ue+=" "+re),k.className&&(ue+=" "+k.className),B[lp(D)&&!bS.has(D)?"class":"className"]=ue,B.ref=P,A.createElement(D,B)}(p,y,E)}var p=te.forwardRef(w);return p.attrs=m,p.componentStyle=S,p.shouldForwardProp=v,p.foldedComponentIds=r?is(i.foldedComponentIds,i.styledComponentId):"",p.styledComponentId=h,p.target=r?i.target:t,Object.defineProperty(p,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(y){this._foldedDefaultProps=r?function(E){for(var C=[],I=1;I<arguments.length;I++)C[I-1]=arguments[I];for(var P=0,R=C;P<R.length;P++)Um(E,R[P],!0);return E}({},i.defaultProps,y):y}}),Hy(p,function(){return".".concat(p.styledComponentId)}),s&&kS(p,t,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),p}function D_(t,e){for(var n=[t[0]],r=0,i=e.length;r<i;r+=1)n.push(e[r],t[r+1]);return n}var N_=function(t){return Object.assign(t,{isCss:!0})};function oL(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];if(qo(t)||Ul(t)){var r=t;return N_(ds(D_(Ff,Bo([r],e,!0))))}var i=t;return e.length===0&&i.length===1&&typeof i[0]=="string"?ds(i):N_(ds(D_(i,e)))}function Hm(t,e,n){if(n===void 0&&(n=Wo),!e)throw gc(1,e);var r=function(i){for(var s=[],o=1;o<arguments.length;o++)s[o-1]=arguments[o];return t(e,n,oL.apply(void 0,Bo([i],s,!1)))};return r.attrs=function(i){return Hm(t,e,en(en({},n),{attrs:Array.prototype.concat(n.attrs,i).filter(Boolean)}))},r.withConfig=function(i){return Hm(t,e,en(en({},n),i))},r}var jS=function(t){return Hm(sL,t)},j=jS;bS.forEach(function(t){j[t]=jS(t)});const aL=j.div`
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
`,lL=j.div`
  padding: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 600px) {
    padding: 0;
    
  }
`,cL=j.img`
  width: 80px;
  height: auto;
  margin-left: 2rem;
`,uL=j.div`
  margin-left: 1rem;
`,L_=j.p`
  font-size: 1rem;
  color: var(--colors-blue);
  font-weight: bold;
  line-height: 1;

  @media (max-width: 600px) {
    font-size: 0.8rem;
  }
`,dL=j.div`
  display: flex;
  margin-right: 32px;

  @media (max-width: 600px) {
    display: none;
  }
`,fL=j.div`
  display: flex;
  gap: 16px;
  margin-right: 32px;
  cursor: pointer;

  &:hover {
    color: white;
  }
`,hL=j.div`
  display: flex;
  gap: 16px;
  margin-right: 32px;
  cursor: pointer;

  &:hover {
    color: white;
  }
`,pL=j.div`
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
`,mL=j.div`
  
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
`,gL=j.div`
  margin-right: 32px;
  padding-top: 2rem;
  display: flex;
  flex-direction: column;
  width: 100px;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`,yL=j.div`
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
`,vL=j.nav`
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
`;function wL({open:t}){return A.useState(!1),T.jsxs(vL,{open:t,children:[T.jsx(Jt,{to:"/login",children:"Iniciar sesión"}),T.jsx(Jt,{to:"/register",children:"Crear Cuenta"})]})}const _L=j.div`
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
 */const FS=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},EL=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],l=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},$S={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,l=i+2<t.length,c=l?t[i+2]:0,u=s>>2,h=(s&3)<<4|a>>4;let m=(a&15)<<2|c>>6,v=c&63;l||(v=64,o||(m=64)),r.push(n[u],n[h],n[m],n[v])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(FS(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):EL(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const c=i<t.length?n[t.charAt(i)]:64;++i;const h=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||c==null||h==null)throw new TL;const m=s<<2|a>>4;if(r.push(m),c!==64){const v=a<<4&240|c>>2;if(r.push(v),h!==64){const x=c<<6&192|h;r.push(x)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class TL extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const xL=function(t){const e=FS(t);return $S.encodeByteArray(e,!0)},Nd=function(t){return xL(t).replace(/\./g,"")},BS=function(t){try{return $S.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function SL(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const bL=()=>SL().__FIREBASE_DEFAULTS__,CL=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},IL=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&BS(t[1]);return e&&JSON.parse(e)},$f=()=>{try{return bL()||CL()||IL()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},US=t=>{var e,n;return(n=(e=$f())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},zS=t=>{const e=US(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},HS=()=>{var t;return(t=$f())===null||t===void 0?void 0:t.config},WS=t=>{var e;return(e=$f())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class AL{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function qS(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[Nd(JSON.stringify(n)),Nd(JSON.stringify(o)),a].join(".")}/**
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
 */function Bt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function PL(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Bt())}function kL(){var t;const e=(t=$f())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function RL(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function OL(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function DL(){const t=Bt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function NL(){try{return typeof indexedDB=="object"}catch{return!1}}function LL(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
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
 */const ML="FirebaseError";class wr extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=ML,Object.setPrototypeOf(this,wr.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,yc.prototype.create)}}class yc{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?VL(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new wr(i,a,r)}}function VL(t,e){return t.replace(jL,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const jL=/\{\$([^}]+)}/g;function FL(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Ld(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(M_(s)&&M_(o)){if(!Ld(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function M_(t){return t!==null&&typeof t=="object"}/**
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
 */function vc(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Ka(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function Qa(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function $L(t,e){const n=new BL(t,e);return n.subscribe.bind(n)}class BL{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");UL(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=dp),i.error===void 0&&(i.error=dp),i.complete===void 0&&(i.complete=dp);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function UL(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function dp(){}/**
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
 */function vt(t){return t&&t._delegate?t._delegate:t}class Pi{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Xi="[DEFAULT]";/**
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
 */class zL{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new AL;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(WL(e))try{this.getOrInitializeService({instanceIdentifier:Xi})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=Xi){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Xi){return this.instances.has(e)}getOptions(e=Xi){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:HL(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Xi){return this.component?this.component.multipleInstances?e:Xi:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function HL(t){return t===Xi?void 0:t}function WL(t){return t.instantiationMode==="EAGER"}/**
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
 */class qL{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new zL(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var me;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(me||(me={}));const GL={debug:me.DEBUG,verbose:me.VERBOSE,info:me.INFO,warn:me.WARN,error:me.ERROR,silent:me.SILENT},KL=me.INFO,QL={[me.DEBUG]:"log",[me.VERBOSE]:"log",[me.INFO]:"info",[me.WARN]:"warn",[me.ERROR]:"error"},YL=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=QL[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Wy{constructor(e){this.name=e,this._logLevel=KL,this._logHandler=YL,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in me))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?GL[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,me.DEBUG,...e),this._logHandler(this,me.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,me.VERBOSE,...e),this._logHandler(this,me.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,me.INFO,...e),this._logHandler(this,me.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,me.WARN,...e),this._logHandler(this,me.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,me.ERROR,...e),this._logHandler(this,me.ERROR,...e)}}const XL=(t,e)=>e.some(n=>t instanceof n);let V_,j_;function JL(){return V_||(V_=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function ZL(){return j_||(j_=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const GS=new WeakMap,Wm=new WeakMap,KS=new WeakMap,fp=new WeakMap,qy=new WeakMap;function eM(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(xi(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&GS.set(n,t)}).catch(()=>{}),qy.set(e,t),e}function tM(t){if(Wm.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});Wm.set(t,e)}let qm={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Wm.get(t);if(e==="objectStoreNames")return t.objectStoreNames||KS.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return xi(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function nM(t){qm=t(qm)}function rM(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(hp(this),e,...n);return KS.set(r,e.sort?e.sort():[e]),xi(r)}:ZL().includes(t)?function(...e){return t.apply(hp(this),e),xi(GS.get(this))}:function(...e){return xi(t.apply(hp(this),e))}}function iM(t){return typeof t=="function"?rM(t):(t instanceof IDBTransaction&&tM(t),XL(t,JL())?new Proxy(t,qm):t)}function xi(t){if(t instanceof IDBRequest)return eM(t);if(fp.has(t))return fp.get(t);const e=iM(t);return e!==t&&(fp.set(t,e),qy.set(e,t)),e}const hp=t=>qy.get(t);function sM(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=xi(o);return r&&o.addEventListener("upgradeneeded",l=>{r(xi(o.result),l.oldVersion,l.newVersion,xi(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",c=>i(c.oldVersion,c.newVersion,c))}).catch(()=>{}),a}const oM=["get","getKey","getAll","getAllKeys","count"],aM=["put","add","delete","clear"],pp=new Map;function F_(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(pp.get(e))return pp.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=aM.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||oM.includes(n)))return;const s=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let c=l.store;return r&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),i&&l.done]))[0]};return pp.set(e,s),s}nM(t=>({...t,get:(e,n,r)=>F_(e,n)||t.get(e,n,r),has:(e,n)=>!!F_(e,n)||t.has(e,n)}));/**
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
 */class lM{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(cM(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function cM(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Gm="@firebase/app",$_="0.9.23";/**
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
 */const Es=new Wy("@firebase/app"),uM="@firebase/app-compat",dM="@firebase/analytics-compat",fM="@firebase/analytics",hM="@firebase/app-check-compat",pM="@firebase/app-check",mM="@firebase/auth",gM="@firebase/auth-compat",yM="@firebase/database",vM="@firebase/database-compat",wM="@firebase/functions",_M="@firebase/functions-compat",EM="@firebase/installations",TM="@firebase/installations-compat",xM="@firebase/messaging",SM="@firebase/messaging-compat",bM="@firebase/performance",CM="@firebase/performance-compat",IM="@firebase/remote-config",AM="@firebase/remote-config-compat",PM="@firebase/storage",kM="@firebase/storage-compat",RM="@firebase/firestore",OM="@firebase/firestore-compat",DM="firebase",NM="10.6.0";/**
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
 */const Km="[DEFAULT]",LM={[Gm]:"fire-core",[uM]:"fire-core-compat",[fM]:"fire-analytics",[dM]:"fire-analytics-compat",[pM]:"fire-app-check",[hM]:"fire-app-check-compat",[mM]:"fire-auth",[gM]:"fire-auth-compat",[yM]:"fire-rtdb",[vM]:"fire-rtdb-compat",[wM]:"fire-fn",[_M]:"fire-fn-compat",[EM]:"fire-iid",[TM]:"fire-iid-compat",[xM]:"fire-fcm",[SM]:"fire-fcm-compat",[bM]:"fire-perf",[CM]:"fire-perf-compat",[IM]:"fire-rc",[AM]:"fire-rc-compat",[PM]:"fire-gcs",[kM]:"fire-gcs-compat",[RM]:"fire-fst",[OM]:"fire-fst-compat","fire-js":"fire-js",[DM]:"fire-js-all"};/**
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
 */const Md=new Map,Qm=new Map;function MM(t,e){try{t.container.addComponent(e)}catch(n){Es.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Ts(t){const e=t.name;if(Qm.has(e))return Es.debug(`There were multiple attempts to register component ${e}.`),!1;Qm.set(e,t);for(const n of Md.values())MM(n,t);return!0}function Bf(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const VM={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Si=new yc("app","Firebase",VM);/**
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
 */class jM{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Pi("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Si.create("app-deleted",{appName:this._name})}}/**
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
 */const Ms=NM;function QS(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Km,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw Si.create("bad-app-name",{appName:String(i)});if(n||(n=HS()),!n)throw Si.create("no-options");const s=Md.get(i);if(s){if(Ld(n,s.options)&&Ld(r,s.config))return s;throw Si.create("duplicate-app",{appName:i})}const o=new qL(i);for(const l of Qm.values())o.addComponent(l);const a=new jM(n,r,o);return Md.set(i,a),a}function Gy(t=Km){const e=Md.get(t);if(!e&&t===Km&&HS())return QS();if(!e)throw Si.create("no-app",{appName:t});return e}function dr(t,e,n){var r;let i=(r=LM[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Es.warn(a.join(" "));return}Ts(new Pi(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const FM="firebase-heartbeat-database",$M=1,zl="firebase-heartbeat-store";let mp=null;function YS(){return mp||(mp=sM(FM,$M,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(zl)}}}).catch(t=>{throw Si.create("idb-open",{originalErrorMessage:t.message})})),mp}async function BM(t){try{return await(await YS()).transaction(zl).objectStore(zl).get(XS(t))}catch(e){if(e instanceof wr)Es.warn(e.message);else{const n=Si.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Es.warn(n.message)}}}async function B_(t,e){try{const r=(await YS()).transaction(zl,"readwrite");await r.objectStore(zl).put(e,XS(t)),await r.done}catch(n){if(n instanceof wr)Es.warn(n.message);else{const r=Si.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Es.warn(r.message)}}}function XS(t){return`${t.name}!${t.options.appId}`}/**
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
 */const UM=1024,zM=30*24*60*60*1e3;class HM{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new qM(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e;const r=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=U_();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(s=>s.date===i)))return this._heartbeatsCache.heartbeats.push({date:i,agent:r}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(s=>{const o=new Date(s.date).valueOf();return Date.now()-o<=zM}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var e;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=U_(),{heartbeatsToSend:r,unsentEntries:i}=WM(this._heartbeatsCache.heartbeats),s=Nd(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function U_(){return new Date().toISOString().substring(0,10)}function WM(t,e=UM){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),z_(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),z_(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class qM{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return NL()?LL().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await BM(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return B_(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return B_(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function z_(t){return Nd(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function GM(t){Ts(new Pi("platform-logger",e=>new lM(e),"PRIVATE")),Ts(new Pi("heartbeat",e=>new HM(e),"PRIVATE")),dr(Gm,$_,t),dr(Gm,$_,"esm2017"),dr("fire-js","")}GM("");var KM="firebase",QM="10.6.0";/**
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
 */dr(KM,QM,"app");function JS(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const YM=JS,ZS=new yc("auth","Firebase",JS());/**
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
 */const Vd=new Wy("@firebase/auth");function XM(t,...e){Vd.logLevel<=me.WARN&&Vd.warn(`Auth (${Ms}): ${t}`,...e)}function Qu(t,...e){Vd.logLevel<=me.ERROR&&Vd.error(`Auth (${Ms}): ${t}`,...e)}/**
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
 */function Wn(t,...e){throw Ky(t,...e)}function fr(t,...e){return Ky(t,...e)}function JM(t,e,n){const r=Object.assign(Object.assign({},YM()),{[e]:n});return new yc("auth","Firebase",r).create(e,{appName:t.name})}function Ky(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return ZS.create(t,...e)}function ie(t,e,...n){if(!t)throw Ky(e,...n)}function Rr(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Qu(e),new Error(e)}function $r(t,e){t||Rr(e)}/**
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
 */function Ym(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function ZM(){return H_()==="http:"||H_()==="https:"}function H_(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function e4(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(ZM()||RL()||"connection"in navigator)?navigator.onLine:!0}function t4(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class wc{constructor(e,n){this.shortDelay=e,this.longDelay=n,$r(n>e,"Short delay should be less than long delay!"),this.isMobile=PL()||OL()}get(){return e4()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Qy(t,e){$r(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class eb{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Rr("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Rr("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Rr("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const n4={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const r4=new wc(3e4,6e4);function Mi(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Vi(t,e,n,r,i={}){return tb(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=vc(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),eb.fetch()(nb(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},s))})}async function tb(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},n4),e);try{const i=new s4(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw mu(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[l,c]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw mu(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw mu(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw mu(t,"user-disabled",o);const u=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw JM(t,u,c);Wn(t,u)}}catch(i){if(i instanceof wr)throw i;Wn(t,"network-request-failed",{message:String(i)})}}async function _c(t,e,n,r,i={}){const s=await Vi(t,e,n,r,i);return"mfaPendingCredential"in s&&Wn(t,"multi-factor-auth-required",{_serverResponse:s}),s}function nb(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?Qy(t.config,i):`${t.config.apiScheme}://${i}`}function i4(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class s4{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(fr(this.auth,"network-request-failed")),r4.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function mu(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=fr(t,e,r);return i.customData._tokenResponse=n,i}function W_(t){return t!==void 0&&t.enterprise!==void 0}class o4{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return i4(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function a4(t,e){return Vi(t,"GET","/v2/recaptchaConfig",Mi(t,e))}/**
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
 */async function l4(t,e){return Vi(t,"POST","/v1/accounts:delete",e)}async function c4(t,e){return Vi(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function fl(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function u4(t,e=!1){const n=vt(t),r=await n.getIdToken(e),i=Yy(r);ie(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:fl(gp(i.auth_time)),issuedAtTime:fl(gp(i.iat)),expirationTime:fl(gp(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function gp(t){return Number(t)*1e3}function Yy(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Qu("JWT malformed, contained fewer than 3 sections"),null;try{const i=BS(n);return i?JSON.parse(i):(Qu("Failed to decode base64 JWT payload"),null)}catch(i){return Qu("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function d4(t){const e=Yy(t);return ie(e,"internal-error"),ie(typeof e.exp<"u","internal-error"),ie(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Hl(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof wr&&f4(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function f4({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class h4{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class rb{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=fl(this.lastLoginAt),this.creationTime=fl(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function jd(t){var e;const n=t.auth,r=await t.getIdToken(),i=await Hl(t,c4(n,{idToken:r}));ie(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?g4(s.providerUserInfo):[],a=m4(t.providerData,o),l=t.isAnonymous,c=!(t.email&&s.passwordHash)&&!(a!=null&&a.length),u=l?c:!1,h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new rb(s.createdAt,s.lastLoginAt),isAnonymous:u};Object.assign(t,h)}async function p4(t){const e=vt(t);await jd(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function m4(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function g4(t){return t.map(e=>{var{providerId:n}=e,r=Fy(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function y4(t,e){const n=await tb(t,{},async()=>{const r=vc({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=nb(t,i,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",eb.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function v4(t,e){return Vi(t,"POST","/v2/accounts:revokeToken",Mi(t,e))}/**
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
 */class Wl{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){ie(e.idToken,"internal-error"),ie(typeof e.idToken<"u","internal-error"),ie(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):d4(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return ie(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await y4(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new Wl;return r&&(ie(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(ie(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(ie(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Wl,this.toJSON())}_performRefresh(){return Rr("not implemented")}}/**
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
 */function Yr(t,e){ie(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class fs{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=Fy(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new h4(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new rb(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await Hl(this,this.stsTokenManager.getToken(this.auth,e));return ie(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return u4(this,e)}reload(){return p4(this)}_assign(e){this!==e&&(ie(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new fs(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){ie(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await jd(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Hl(this,l4(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,a,l,c,u;const h=(r=n.displayName)!==null&&r!==void 0?r:void 0,m=(i=n.email)!==null&&i!==void 0?i:void 0,v=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,x=(o=n.photoURL)!==null&&o!==void 0?o:void 0,g=(a=n.tenantId)!==null&&a!==void 0?a:void 0,S=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,w=(c=n.createdAt)!==null&&c!==void 0?c:void 0,p=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:y,emailVerified:E,isAnonymous:C,providerData:I,stsTokenManager:P}=n;ie(y&&P,e,"internal-error");const R=Wl.fromJSON(this.name,P);ie(typeof y=="string",e,"internal-error"),Yr(h,e.name),Yr(m,e.name),ie(typeof E=="boolean",e,"internal-error"),ie(typeof C=="boolean",e,"internal-error"),Yr(v,e.name),Yr(x,e.name),Yr(g,e.name),Yr(S,e.name),Yr(w,e.name),Yr(p,e.name);const N=new fs({uid:y,auth:e,email:m,emailVerified:E,displayName:h,isAnonymous:C,photoURL:x,phoneNumber:v,tenantId:g,stsTokenManager:R,createdAt:w,lastLoginAt:p});return I&&Array.isArray(I)&&(N.providerData=I.map(O=>Object.assign({},O))),S&&(N._redirectEventId=S),N}static async _fromIdTokenResponse(e,n,r=!1){const i=new Wl;i.updateFromServerResponse(n);const s=new fs({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await jd(s),s}}/**
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
 */const q_=new Map;function Or(t){$r(t instanceof Function,"Expected a class definition");let e=q_.get(t);return e?($r(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,q_.set(t,e),e)}/**
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
 */class ib{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}ib.type="NONE";const G_=ib;/**
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
 */function Yu(t,e,n){return`firebase:${t}:${e}:${n}`}class Ao{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=Yu(this.userKey,i.apiKey,s),this.fullPersistenceKey=Yu("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?fs._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Ao(Or(G_),e,r);const i=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let s=i[0]||Or(G_);const o=Yu(r,e.config.apiKey,e.name);let a=null;for(const c of n)try{const u=await c._get(o);if(u){const h=fs._fromJSON(e,u);c!==s&&(a=h),s=c;break}}catch{}const l=i.filter(c=>c._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new Ao(s,e,r):(s=l[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async c=>{if(c!==s)try{await c._remove(o)}catch{}})),new Ao(s,e,r))}}/**
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
 */function K_(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(ab(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(sb(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(cb(e))return"Blackberry";if(ub(e))return"Webos";if(Xy(e))return"Safari";if((e.includes("chrome/")||ob(e))&&!e.includes("edge/"))return"Chrome";if(lb(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function sb(t=Bt()){return/firefox\//i.test(t)}function Xy(t=Bt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function ob(t=Bt()){return/crios\//i.test(t)}function ab(t=Bt()){return/iemobile/i.test(t)}function lb(t=Bt()){return/android/i.test(t)}function cb(t=Bt()){return/blackberry/i.test(t)}function ub(t=Bt()){return/webos/i.test(t)}function Uf(t=Bt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function w4(t=Bt()){var e;return Uf(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function _4(){return DL()&&document.documentMode===10}function db(t=Bt()){return Uf(t)||lb(t)||ub(t)||cb(t)||/windows phone/i.test(t)||ab(t)}function E4(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function fb(t,e=[]){let n;switch(t){case"Browser":n=K_(Bt());break;case"Worker":n=`${K_(Bt())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Ms}/${r}`}/**
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
 */class T4{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,a)=>{try{const l=e(s);o(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function x4(t,e={}){return Vi(t,"GET","/v2/passwordPolicy",Mi(t,e))}/**
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
 */const S4=6;class b4{constructor(e){var n,r,i,s;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:S4,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,i,s,o,a;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,l),this.validatePasswordCharacterOptions(e,l),l.isValid&&(l.isValid=(n=l.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),l.isValid&&(l.isValid=(r=l.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(i=l.containsLowercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(s=l.containsUppercaseLetter)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(o=l.containsNumericCharacter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(a=l.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),l}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
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
 */class C4{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Q_(this),this.idTokenSubscription=new Q_(this),this.beforeStateQueue=new T4(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=ZS,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Or(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await Ao.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(i=l.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return ie(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await jd(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=t4()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?vt(e):null;return n&&ie(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&ie(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Or(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await x4(this),n=new b4(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new yc("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await v4(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Or(e)||this._popupRedirectResolver;ie(n,this,"argument-error"),this.redirectPersistenceManager=await Ao.create(this,[Or(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(ie(a,this,"internal-error"),a.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const l=e.addObserver(n,r,i);return()=>{o=!0,l()}}else{const l=e.addObserver(n);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return ie(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=fb(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&XM(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Vs(t){return vt(t)}class Q_{constructor(e){this.auth=e,this.observer=null,this.addObserver=$L(n=>this.observer=n)}get next(){return ie(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */function I4(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function hb(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=fr("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",I4().appendChild(r)})}function A4(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const P4="https://www.google.com/recaptcha/enterprise.js?render=",k4="recaptcha-enterprise",R4="NO_RECAPTCHA";class O4{constructor(e){this.type=k4,this.auth=Vs(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,a)=>{a4(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const c=new o4(l);return s.tenantId==null?s._agentRecaptchaConfig=c:s._tenantRecaptchaConfigs[s.tenantId]=c,o(c.siteKey)}}).catch(l=>{a(l)})})}function i(s,o,a){const l=window.grecaptcha;W_(l)?l.enterprise.ready(()=>{l.enterprise.execute(s,{action:e}).then(c=>{o(c)}).catch(()=>{o(R4)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,o)=>{r(this.auth).then(a=>{if(!n&&W_(window.grecaptcha))i(a,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}hb(P4+a).then(()=>{i(a,s,o)}).catch(l=>{o(l)})}}).catch(a=>{o(a)})})}}async function Y_(t,e,n,r=!1){const i=new O4(t);let s;try{s=await i.verify(n)}catch{s=await i.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function Xm(t,e,n,r){var i;if(!((i=t._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const s=await Y_(t,e,n,n==="getOobCode");return r(t,s)}else return r(t,e).catch(async s=>{if(s.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await Y_(t,e,n,n==="getOobCode");return r(t,o)}else return Promise.reject(s)})}/**
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
 */function D4(t,e){const n=Bf(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(Ld(s,e??{}))return i;Wn(i,"already-initialized")}return n.initialize({options:e})}function N4(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Or);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function L4(t,e,n){const r=Vs(t);ie(r._canInitEmulator,r,"emulator-config-failed"),ie(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),s=pb(e),{host:o,port:a}=M4(e),l=a===null?"":`:${a}`;r.config.emulator={url:`${s}//${o}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||V4()}function pb(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function M4(t){const e=pb(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:X_(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:X_(o)}}}function X_(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function V4(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class Jy{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Rr("not implemented")}_getIdTokenResponse(e){return Rr("not implemented")}_linkToIdToken(e,n){return Rr("not implemented")}_getReauthenticationResolver(e){return Rr("not implemented")}}async function j4(t,e){return Vi(t,"POST","/v1/accounts:signUp",e)}/**
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
 */async function F4(t,e){return _c(t,"POST","/v1/accounts:signInWithPassword",Mi(t,e))}/**
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
 */async function $4(t,e){return _c(t,"POST","/v1/accounts:signInWithEmailLink",Mi(t,e))}async function B4(t,e){return _c(t,"POST","/v1/accounts:signInWithEmailLink",Mi(t,e))}/**
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
 */class ql extends Jy{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new ql(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new ql(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Xm(e,n,"signInWithPassword",F4);case"emailLink":return $4(e,{email:this._email,oobCode:this._password});default:Wn(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Xm(e,r,"signUpPassword",j4);case"emailLink":return B4(e,{idToken:n,email:this._email,oobCode:this._password});default:Wn(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function Po(t,e){return _c(t,"POST","/v1/accounts:signInWithIdp",Mi(t,e))}/**
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
 */const U4="http://localhost";class xs extends Jy{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new xs(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Wn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=Fy(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new xs(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Po(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Po(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Po(e,n)}buildRequest(){const e={requestUri:U4,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=vc(n)}return e}}/**
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
 */function z4(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function H4(t){const e=Ka(Qa(t)).link,n=e?Ka(Qa(e)).deep_link_id:null,r=Ka(Qa(t)).deep_link_id;return(r?Ka(Qa(r)).link:null)||r||n||e||t}class Zy{constructor(e){var n,r,i,s,o,a;const l=Ka(Qa(e)),c=(n=l.apiKey)!==null&&n!==void 0?n:null,u=(r=l.oobCode)!==null&&r!==void 0?r:null,h=z4((i=l.mode)!==null&&i!==void 0?i:null);ie(c&&u&&h,"argument-error"),this.apiKey=c,this.operation=h,this.code=u,this.continueUrl=(s=l.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=H4(e);try{return new Zy(n)}catch{return null}}}/**
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
 */class fa{constructor(){this.providerId=fa.PROVIDER_ID}static credential(e,n){return ql._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Zy.parseLink(n);return ie(r,"argument-error"),ql._fromEmailAndCode(e,r.code,r.tenantId)}}fa.PROVIDER_ID="password";fa.EMAIL_PASSWORD_SIGN_IN_METHOD="password";fa.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class mb{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Ec extends mb{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class ni extends Ec{constructor(){super("facebook.com")}static credential(e){return xs._fromParams({providerId:ni.PROVIDER_ID,signInMethod:ni.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ni.credentialFromTaggedObject(e)}static credentialFromError(e){return ni.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ni.credential(e.oauthAccessToken)}catch{return null}}}ni.FACEBOOK_SIGN_IN_METHOD="facebook.com";ni.PROVIDER_ID="facebook.com";/**
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
 */class ri extends Ec{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return xs._fromParams({providerId:ri.PROVIDER_ID,signInMethod:ri.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return ri.credentialFromTaggedObject(e)}static credentialFromError(e){return ri.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return ri.credential(n,r)}catch{return null}}}ri.GOOGLE_SIGN_IN_METHOD="google.com";ri.PROVIDER_ID="google.com";/**
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
 */class ii extends Ec{constructor(){super("github.com")}static credential(e){return xs._fromParams({providerId:ii.PROVIDER_ID,signInMethod:ii.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ii.credentialFromTaggedObject(e)}static credentialFromError(e){return ii.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ii.credential(e.oauthAccessToken)}catch{return null}}}ii.GITHUB_SIGN_IN_METHOD="github.com";ii.PROVIDER_ID="github.com";/**
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
 */class si extends Ec{constructor(){super("twitter.com")}static credential(e,n){return xs._fromParams({providerId:si.PROVIDER_ID,signInMethod:si.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return si.credentialFromTaggedObject(e)}static credentialFromError(e){return si.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return si.credential(n,r)}catch{return null}}}si.TWITTER_SIGN_IN_METHOD="twitter.com";si.PROVIDER_ID="twitter.com";/**
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
 */async function W4(t,e){return _c(t,"POST","/v1/accounts:signUp",Mi(t,e))}/**
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
 */class Ss{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await fs._fromIdTokenResponse(e,r,i),o=J_(r);return new Ss({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=J_(r);return new Ss({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function J_(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class Fd extends wr{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Fd.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new Fd(e,n,r,i)}}function gb(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Fd._fromErrorAndOperation(t,s,e,r):s})}async function q4(t,e,n=!1){const r=await Hl(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Ss._forOperation(t,"link",r)}/**
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
 */async function G4(t,e,n=!1){const{auth:r}=t,i="reauthenticate";try{const s=await Hl(t,gb(r,i,e,t),n);ie(s.idToken,r,"internal-error");const o=Yy(s.idToken);ie(o,r,"internal-error");const{sub:a}=o;return ie(t.uid===a,r,"user-mismatch"),Ss._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&Wn(r,"user-mismatch"),s}}/**
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
 */async function yb(t,e,n=!1){const r="signIn",i=await gb(t,r,e),s=await Ss._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function K4(t,e){return yb(Vs(t),e)}/**
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
 */async function vb(t){const e=Vs(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function Q4(t,e,n){const r=Vs(t),o=await Xm(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",W4).catch(l=>{throw l.code==="auth/password-does-not-meet-requirements"&&vb(t),l}),a=await Ss._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(a.user),a}function Y4(t,e,n){return K4(vt(t),fa.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&vb(t),r})}function X4(t,e,n,r){return vt(t).onIdTokenChanged(e,n,r)}function J4(t,e,n){return vt(t).beforeAuthStateChanged(e,n)}function Z4(t){return vt(t).signOut()}const $d="__sak";/**
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
 */class wb{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem($d,"1"),this.storage.removeItem($d),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function e5(){const t=Bt();return Xy(t)||Uf(t)}const t5=1e3,n5=10;class _b extends wb{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=e5()&&E4(),this.fallbackToPolling=db(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);_4()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,n5):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},t5)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}_b.type="LOCAL";const r5=_b;/**
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
 */class Eb extends wb{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Eb.type="SESSION";const Tb=Eb;/**
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
 */function i5(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class zf{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new zf(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async c=>c(n.origin,s)),l=await i5(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}zf.receivers=[];/**
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
 */function ev(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class s5{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,l)=>{const c=ev("",20);i.port1.start();const u=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(h){const m=h;if(m.data.eventId===c)switch(m.data.status){case"ack":clearTimeout(u),s=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(m.data.response);break;default:clearTimeout(u),clearTimeout(s),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function hr(){return window}function o5(t){hr().location.href=t}/**
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
 */function xb(){return typeof hr().WorkerGlobalScope<"u"&&typeof hr().importScripts=="function"}async function a5(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function l5(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function c5(){return xb()?self:null}/**
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
 */const Sb="firebaseLocalStorageDb",u5=1,Bd="firebaseLocalStorage",bb="fbase_key";class Tc{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Hf(t,e){return t.transaction([Bd],e?"readwrite":"readonly").objectStore(Bd)}function d5(){const t=indexedDB.deleteDatabase(Sb);return new Tc(t).toPromise()}function Jm(){const t=indexedDB.open(Sb,u5);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Bd,{keyPath:bb})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Bd)?e(r):(r.close(),await d5(),e(await Jm()))})})}async function Z_(t,e,n){const r=Hf(t,!0).put({[bb]:e,value:n});return new Tc(r).toPromise()}async function f5(t,e){const n=Hf(t,!1).get(e),r=await new Tc(n).toPromise();return r===void 0?null:r.value}function e1(t,e){const n=Hf(t,!0).delete(e);return new Tc(n).toPromise()}const h5=800,p5=3;class Cb{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Jm(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>p5)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return xb()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=zf._getInstance(c5()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await a5(),!this.activeServiceWorker)return;this.sender=new s5(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||l5()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Jm();return await Z_(e,$d,"1"),await e1(e,$d),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Z_(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>f5(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>e1(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=Hf(i,!1).getAll();return new Tc(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),h5)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Cb.type="LOCAL";const m5=Cb;new wc(3e4,6e4);/**
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
 */function g5(t,e){return e?Or(e):(ie(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class tv extends Jy{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Po(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Po(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Po(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function y5(t){return yb(t.auth,new tv(t),t.bypassAuthState)}function v5(t){const{auth:e,user:n}=t;return ie(n,e,"internal-error"),G4(n,new tv(t),t.bypassAuthState)}async function w5(t){const{auth:e,user:n}=t;return ie(n,e,"internal-error"),q4(n,new tv(t),t.bypassAuthState)}/**
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
 */class Ib{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return y5;case"linkViaPopup":case"linkViaRedirect":return w5;case"reauthViaPopup":case"reauthViaRedirect":return v5;default:Wn(this.auth,"internal-error")}}resolve(e){$r(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){$r(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const _5=new wc(2e3,1e4);class wo extends Ib{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,wo.currentPopupAction&&wo.currentPopupAction.cancel(),wo.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return ie(e,this.auth,"internal-error"),e}async onExecution(){$r(this.filter.length===1,"Popup operations only handle one event");const e=ev();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(fr(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(fr(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,wo.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(fr(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,_5.get())};e()}}wo.currentPopupAction=null;/**
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
 */const E5="pendingRedirect",Xu=new Map;class T5 extends Ib{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Xu.get(this.auth._key());if(!e){try{const r=await x5(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Xu.set(this.auth._key(),e)}return this.bypassAuthState||Xu.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function x5(t,e){const n=C5(e),r=b5(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function S5(t,e){Xu.set(t._key(),e)}function b5(t){return Or(t._redirectPersistence)}function C5(t){return Yu(E5,t.config.apiKey,t.name)}async function I5(t,e,n=!1){const r=Vs(t),i=g5(r,e),o=await new T5(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const A5=10*60*1e3;class P5{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!k5(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!Ab(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(fr(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=A5&&this.cachedEventUids.clear(),this.cachedEventUids.has(t1(e))}saveEventToCache(e){this.cachedEventUids.add(t1(e)),this.lastProcessedEventTime=Date.now()}}function t1(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Ab({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function k5(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Ab(t);default:return!1}}/**
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
 */async function R5(t,e={}){return Vi(t,"GET","/v1/projects",e)}/**
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
 */const O5=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,D5=/^https?/;async function N5(t){if(t.config.emulator)return;const{authorizedDomains:e}=await R5(t);for(const n of e)try{if(L5(n))return}catch{}Wn(t,"unauthorized-domain")}function L5(t){const e=Ym(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!D5.test(n))return!1;if(O5.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const M5=new wc(3e4,6e4);function n1(){const t=hr().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function V5(t){return new Promise((e,n)=>{var r,i,s;function o(){n1(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{n1(),n(fr(t,"network-request-failed"))},timeout:M5.get()})}if(!((i=(r=hr().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=hr().gapi)===null||s===void 0)&&s.load)o();else{const a=A4("iframefcb");return hr()[a]=()=>{gapi.load?o():n(fr(t,"network-request-failed"))},hb(`https://apis.google.com/js/api.js?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw Ju=null,e})}let Ju=null;function j5(t){return Ju=Ju||V5(t),Ju}/**
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
 */const F5=new wc(5e3,15e3),$5="__/auth/iframe",B5="emulator/auth/iframe",U5={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},z5=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function H5(t){const e=t.config;ie(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Qy(e,B5):`https://${t.config.authDomain}/${$5}`,r={apiKey:e.apiKey,appName:t.name,v:Ms},i=z5.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${vc(r).slice(1)}`}async function W5(t){const e=await j5(t),n=hr().gapi;return ie(n,t,"internal-error"),e.open({where:document.body,url:H5(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:U5,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=fr(t,"network-request-failed"),a=hr().setTimeout(()=>{s(o)},F5.get());function l(){hr().clearTimeout(a),i(r)}r.ping(l).then(l,()=>{s(o)})}))}/**
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
 */const q5={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},G5=500,K5=600,Q5="_blank",Y5="http://localhost";class r1{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function X5(t,e,n,r=G5,i=K5){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},q5),{width:r.toString(),height:i.toString(),top:s,left:o}),c=Bt().toLowerCase();n&&(a=ob(c)?Q5:n),sb(c)&&(e=e||Y5,l.scrollbars="yes");const u=Object.entries(l).reduce((m,[v,x])=>`${m}${v}=${x},`,"");if(w4(c)&&a!=="_self")return J5(e||"",a),new r1(null);const h=window.open(e||"",a,u);ie(h,t,"popup-blocked");try{h.focus()}catch{}return new r1(h)}function J5(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const Z5="__/auth/handler",eV="emulator/auth/handler",tV=encodeURIComponent("fac");async function i1(t,e,n,r,i,s){ie(t.config.authDomain,t,"auth-domain-config-required"),ie(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Ms,eventId:i};if(e instanceof mb){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",FL(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[u,h]of Object.entries(s||{}))o[u]=h}if(e instanceof Ec){const u=e.getScopes().filter(h=>h!=="");u.length>0&&(o.scopes=u.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const u of Object.keys(a))a[u]===void 0&&delete a[u];const l=await t._getAppCheckToken(),c=l?`#${tV}=${encodeURIComponent(l)}`:"";return`${nV(t)}?${vc(a).slice(1)}${c}`}function nV({config:t}){return t.emulator?Qy(t,eV):`https://${t.authDomain}/${Z5}`}/**
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
 */const yp="webStorageSupport";class rV{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Tb,this._completeRedirectFn=I5,this._overrideRedirectResult=S5}async _openPopup(e,n,r,i){var s;$r((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await i1(e,n,r,Ym(),i);return X5(e,o,ev())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await i1(e,n,r,Ym(),i);return o5(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):($r(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await W5(e),r=new P5(e);return n.register("authEvent",i=>(ie(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(yp,{type:yp},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[yp];o!==void 0&&n(!!o),Wn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=N5(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return db()||Xy()||Uf()}}const iV=rV;var s1="@firebase/auth",o1="1.4.0";/**
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
 */class sV{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){ie(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function oV(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function aV(t){Ts(new Pi("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;ie(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:fb(t)},c=new C4(r,i,s,l);return N4(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Ts(new Pi("auth-internal",e=>{const n=Vs(e.getProvider("auth").getImmediate());return(r=>new sV(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),dr(s1,o1,oV(t)),dr(s1,o1,"esm2017")}/**
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
 */const lV=5*60,cV=WS("authIdTokenMaxAge")||lV;let a1=null;const uV=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>cV)return;const i=n==null?void 0:n.token;a1!==i&&(a1=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function dV(t=Gy()){const e=Bf(t,"auth");if(e.isInitialized())return e.getImmediate();const n=D4(t,{popupRedirectResolver:iV,persistence:[m5,r5,Tb]}),r=WS("authTokenSyncURL");if(r){const s=uV(r);J4(n,s,()=>s(n.currentUser)),X4(n,o=>s(o))}const i=US("auth");return i&&L4(n,`http://${i}`),n}aV("Browser");var fV=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},Q,nv=nv||{},oe=fV||self;function Wf(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function xc(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function hV(t){return Object.prototype.hasOwnProperty.call(t,vp)&&t[vp]||(t[vp]=++pV)}var vp="closure_uid_"+(1e9*Math.random()>>>0),pV=0;function mV(t,e,n){return t.call.apply(t.bind,arguments)}function gV(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,r),t.apply(e,i)}}return function(){return t.apply(e,arguments)}}function jt(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?jt=mV:jt=gV,jt.apply(null,arguments)}function gu(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),t.apply(this,r)}}function _t(t,e){function n(){}n.prototype=e.prototype,t.$=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.ac=function(r,i,s){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[i].apply(r,o)}}function ji(){this.s=this.s,this.o=this.o}var yV=0;ji.prototype.s=!1;ji.prototype.sa=function(){!this.s&&(this.s=!0,this.N(),yV!=0)&&hV(this)};ji.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const Pb=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function rv(t){const e=t.length;if(0<e){const n=Array(e);for(let r=0;r<e;r++)n[r]=t[r];return n}return[]}function l1(t,e){for(let n=1;n<arguments.length;n++){const r=arguments[n];if(Wf(r)){const i=t.length||0,s=r.length||0;t.length=i+s;for(let o=0;o<s;o++)t[i+o]=r[o]}else t.push(r)}}function Ft(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}Ft.prototype.h=function(){this.defaultPrevented=!0};var vV=function(){if(!oe.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{oe.addEventListener("test",()=>{},e),oe.removeEventListener("test",()=>{},e)}catch{}return t}();function Gl(t){return/^[\s\xa0]*$/.test(t)}function qf(){var t=oe.navigator;return t&&(t=t.userAgent)?t:""}function ir(t){return qf().indexOf(t)!=-1}function iv(t){return iv[" "](t),t}iv[" "]=function(){};function wV(t,e){var n=dj;return Object.prototype.hasOwnProperty.call(n,t)?n[t]:n[t]=e(t)}var _V=ir("Opera"),Go=ir("Trident")||ir("MSIE"),kb=ir("Edge"),Zm=kb||Go,Rb=ir("Gecko")&&!(qf().toLowerCase().indexOf("webkit")!=-1&&!ir("Edge"))&&!(ir("Trident")||ir("MSIE"))&&!ir("Edge"),EV=qf().toLowerCase().indexOf("webkit")!=-1&&!ir("Edge");function Ob(){var t=oe.document;return t?t.documentMode:void 0}var eg;e:{var wp="",_p=function(){var t=qf();if(Rb)return/rv:([^\);]+)(\)|;)/.exec(t);if(kb)return/Edge\/([\d\.]+)/.exec(t);if(Go)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(EV)return/WebKit\/(\S+)/.exec(t);if(_V)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(_p&&(wp=_p?_p[1]:""),Go){var Ep=Ob();if(Ep!=null&&Ep>parseFloat(wp)){eg=String(Ep);break e}}eg=wp}var tg;if(oe.document&&Go){var c1=Ob();tg=c1||parseInt(eg,10)||void 0}else tg=void 0;var TV=tg;function Kl(t,e){if(Ft.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(Rb){e:{try{iv(e.nodeName);var i=!0;break e}catch{}i=!1}i||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:xV[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&Kl.$.h.call(this)}}_t(Kl,Ft);var xV={2:"touch",3:"pen",4:"mouse"};Kl.prototype.h=function(){Kl.$.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var Sc="closure_listenable_"+(1e6*Math.random()|0),SV=0;function bV(t,e,n,r,i){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.la=i,this.key=++SV,this.fa=this.ia=!1}function Gf(t){t.fa=!0,t.listener=null,t.proxy=null,t.src=null,t.la=null}function sv(t,e,n){for(const r in t)e.call(n,t[r],r,t)}function CV(t,e){for(const n in t)e.call(void 0,t[n],n,t)}function Db(t){const e={};for(const n in t)e[n]=t[n];return e}const u1="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Nb(t,e){let n,r;for(let i=1;i<arguments.length;i++){r=arguments[i];for(n in r)t[n]=r[n];for(let s=0;s<u1.length;s++)n=u1[s],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function Kf(t){this.src=t,this.g={},this.h=0}Kf.prototype.add=function(t,e,n,r,i){var s=t.toString();t=this.g[s],t||(t=this.g[s]=[],this.h++);var o=rg(t,e,r,i);return-1<o?(e=t[o],n||(e.ia=!1)):(e=new bV(e,this.src,s,!!r,i),e.ia=n,t.push(e)),e};function ng(t,e){var n=e.type;if(n in t.g){var r=t.g[n],i=Pb(r,e),s;(s=0<=i)&&Array.prototype.splice.call(r,i,1),s&&(Gf(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function rg(t,e,n,r){for(var i=0;i<t.length;++i){var s=t[i];if(!s.fa&&s.listener==e&&s.capture==!!n&&s.la==r)return i}return-1}var ov="closure_lm_"+(1e6*Math.random()|0),Tp={};function Lb(t,e,n,r,i){if(r&&r.once)return Vb(t,e,n,r,i);if(Array.isArray(e)){for(var s=0;s<e.length;s++)Lb(t,e[s],n,r,i);return null}return n=cv(n),t&&t[Sc]?t.O(e,n,xc(r)?!!r.capture:!!r,i):Mb(t,e,n,!1,r,i)}function Mb(t,e,n,r,i,s){if(!e)throw Error("Invalid event type");var o=xc(i)?!!i.capture:!!i,a=lv(t);if(a||(t[ov]=a=new Kf(t)),n=a.add(e,n,r,o,s),n.proxy)return n;if(r=IV(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)vV||(i=o),i===void 0&&(i=!1),t.addEventListener(e.toString(),r,i);else if(t.attachEvent)t.attachEvent(Fb(e.toString()),r);else if(t.addListener&&t.removeListener)t.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function IV(){function t(n){return e.call(t.src,t.listener,n)}const e=AV;return t}function Vb(t,e,n,r,i){if(Array.isArray(e)){for(var s=0;s<e.length;s++)Vb(t,e[s],n,r,i);return null}return n=cv(n),t&&t[Sc]?t.P(e,n,xc(r)?!!r.capture:!!r,i):Mb(t,e,n,!0,r,i)}function jb(t,e,n,r,i){if(Array.isArray(e))for(var s=0;s<e.length;s++)jb(t,e[s],n,r,i);else r=xc(r)?!!r.capture:!!r,n=cv(n),t&&t[Sc]?(t=t.i,e=String(e).toString(),e in t.g&&(s=t.g[e],n=rg(s,n,r,i),-1<n&&(Gf(s[n]),Array.prototype.splice.call(s,n,1),s.length==0&&(delete t.g[e],t.h--)))):t&&(t=lv(t))&&(e=t.g[e.toString()],t=-1,e&&(t=rg(e,n,r,i)),(n=-1<t?e[t]:null)&&av(n))}function av(t){if(typeof t!="number"&&t&&!t.fa){var e=t.src;if(e&&e[Sc])ng(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(Fb(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=lv(e))?(ng(n,t),n.h==0&&(n.src=null,e[ov]=null)):Gf(t)}}}function Fb(t){return t in Tp?Tp[t]:Tp[t]="on"+t}function AV(t,e){if(t.fa)t=!0;else{e=new Kl(e,this);var n=t.listener,r=t.la||t.src;t.ia&&av(t),t=n.call(r,e)}return t}function lv(t){return t=t[ov],t instanceof Kf?t:null}var xp="__closure_events_fn_"+(1e9*Math.random()>>>0);function cv(t){return typeof t=="function"?t:(t[xp]||(t[xp]=function(e){return t.handleEvent(e)}),t[xp])}function wt(){ji.call(this),this.i=new Kf(this),this.S=this,this.J=null}_t(wt,ji);wt.prototype[Sc]=!0;wt.prototype.removeEventListener=function(t,e,n,r){jb(this,t,e,n,r)};function It(t,e){var n,r=t.J;if(r)for(n=[];r;r=r.J)n.push(r);if(t=t.S,r=e.type||e,typeof e=="string")e=new Ft(e,t);else if(e instanceof Ft)e.target=e.target||t;else{var i=e;e=new Ft(r,t),Nb(e,i)}if(i=!0,n)for(var s=n.length-1;0<=s;s--){var o=e.g=n[s];i=yu(o,r,!0,e)&&i}if(o=e.g=t,i=yu(o,r,!0,e)&&i,i=yu(o,r,!1,e)&&i,n)for(s=0;s<n.length;s++)o=e.g=n[s],i=yu(o,r,!1,e)&&i}wt.prototype.N=function(){if(wt.$.N.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)Gf(n[r]);delete t.g[e],t.h--}}this.J=null};wt.prototype.O=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)};wt.prototype.P=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};function yu(t,e,n,r){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var i=!0,s=0;s<e.length;++s){var o=e[s];if(o&&!o.fa&&o.capture==n){var a=o.listener,l=o.la||o.src;o.ia&&ng(t.i,o),i=a.call(l,r)!==!1&&i}}return i&&!r.defaultPrevented}var uv=oe.JSON.stringify;class PV{constructor(e,n){this.i=e,this.j=n,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}function kV(){var t=dv;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class RV{constructor(){this.h=this.g=null}add(e,n){const r=$b.get();r.set(e,n),this.h?this.h.next=r:this.g=r,this.h=r}}var $b=new PV(()=>new OV,t=>t.reset());class OV{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function DV(t){var e=1;t=t.split(":");const n=[];for(;0<e&&t.length;)n.push(t.shift()),e--;return t.length&&n.push(t.join(":")),n}function NV(t){oe.setTimeout(()=>{throw t},0)}let Ql,Yl=!1,dv=new RV,Bb=()=>{const t=oe.Promise.resolve(void 0);Ql=()=>{t.then(LV)}};var LV=()=>{for(var t;t=kV();){try{t.h.call(t.g)}catch(n){NV(n)}var e=$b;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}Yl=!1};function Qf(t,e){wt.call(this),this.h=t||1,this.g=e||oe,this.j=jt(this.qb,this),this.l=Date.now()}_t(Qf,wt);Q=Qf.prototype;Q.ga=!1;Q.T=null;Q.qb=function(){if(this.ga){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-t):(this.T&&(this.g.clearTimeout(this.T),this.T=null),It(this,"tick"),this.ga&&(fv(this),this.start()))}};Q.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function fv(t){t.ga=!1,t.T&&(t.g.clearTimeout(t.T),t.T=null)}Q.N=function(){Qf.$.N.call(this),fv(this),delete this.g};function hv(t,e,n){if(typeof t=="function")n&&(t=jt(t,n));else if(t&&typeof t.handleEvent=="function")t=jt(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:oe.setTimeout(t,e||0)}function Ub(t){t.g=hv(()=>{t.g=null,t.i&&(t.i=!1,Ub(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class MV extends ji{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:Ub(this)}N(){super.N(),this.g&&(oe.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Xl(t){ji.call(this),this.h=t,this.g={}}_t(Xl,ji);var d1=[];function zb(t,e,n,r){Array.isArray(n)||(n&&(d1[0]=n.toString()),n=d1);for(var i=0;i<n.length;i++){var s=Lb(e,n[i],r||t.handleEvent,!1,t.h||t);if(!s)break;t.g[s.key]=s}}function Hb(t){sv(t.g,function(e,n){this.g.hasOwnProperty(n)&&av(e)},t),t.g={}}Xl.prototype.N=function(){Xl.$.N.call(this),Hb(this)};Xl.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function Yf(){this.g=!0}Yf.prototype.Ea=function(){this.g=!1};function VV(t,e,n,r,i,s){t.info(function(){if(t.g)if(s)for(var o="",a=s.split("&"),l=0;l<a.length;l++){var c=a[l].split("=");if(1<c.length){var u=c[0];c=c[1];var h=u.split("_");o=2<=h.length&&h[1]=="type"?o+(u+"="+c+"&"):o+(u+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+e+`
`+n+`
`+o})}function jV(t,e,n,r,i,s,o){t.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+e+`
`+n+`
`+s+" "+o})}function _o(t,e,n,r){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+$V(t,n)+(r?" "+r:"")})}function FV(t,e){t.info(function(){return"TIMEOUT: "+e})}Yf.prototype.info=function(){};function $V(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if(s!="noop"&&s!="stop"&&s!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return uv(n)}catch{return e}}var js={},f1=null;function Xf(){return f1=f1||new wt}js.Ta="serverreachability";function Wb(t){Ft.call(this,js.Ta,t)}_t(Wb,Ft);function Jl(t){const e=Xf();It(e,new Wb(e))}js.STAT_EVENT="statevent";function qb(t,e){Ft.call(this,js.STAT_EVENT,t),this.stat=e}_t(qb,Ft);function Wt(t){const e=Xf();It(e,new qb(e,t))}js.Ua="timingevent";function Gb(t,e){Ft.call(this,js.Ua,t),this.size=e}_t(Gb,Ft);function bc(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return oe.setTimeout(function(){t()},e)}var Jf={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},Kb={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function pv(){}pv.prototype.h=null;function h1(t){return t.h||(t.h=t.i())}function Qb(){}var Cc={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function mv(){Ft.call(this,"d")}_t(mv,Ft);function gv(){Ft.call(this,"c")}_t(gv,Ft);var ig;function Zf(){}_t(Zf,pv);Zf.prototype.g=function(){return new XMLHttpRequest};Zf.prototype.i=function(){return{}};ig=new Zf;function Ic(t,e,n,r){this.l=t,this.j=e,this.m=n,this.W=r||1,this.U=new Xl(this),this.P=BV,t=Zm?125:void 0,this.V=new Qf(t),this.I=null,this.i=!1,this.s=this.A=this.v=this.L=this.G=this.Y=this.B=null,this.F=[],this.g=null,this.C=0,this.o=this.u=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new Yb}function Yb(){this.i=null,this.g="",this.h=!1}var BV=45e3,sg={},Ud={};Q=Ic.prototype;Q.setTimeout=function(t){this.P=t};function og(t,e,n){t.L=1,t.v=th(Br(e)),t.s=n,t.S=!0,Xb(t,null)}function Xb(t,e){t.G=Date.now(),Ac(t),t.A=Br(t.v);var n=t.A,r=t.W;Array.isArray(r)||(r=[String(r)]),sC(n.i,"t",r),t.C=0,n=t.l.J,t.h=new Yb,t.g=CC(t.l,n?e:null,!t.s),0<t.O&&(t.M=new MV(jt(t.Pa,t,t.g),t.O)),zb(t.U,t.g,"readystatechange",t.nb),e=t.I?Db(t.I):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ha(t.A,t.u,t.s,e)):(t.u="GET",t.g.ha(t.A,t.u,null,e)),Jl(),VV(t.j,t.u,t.A,t.m,t.W,t.s)}Q.nb=function(t){t=t.target;const e=this.M;e&&sr(t)==3?e.l():this.Pa(t)};Q.Pa=function(t){try{if(t==this.g)e:{const u=sr(this.g);var e=this.g.Ia();const h=this.g.da();if(!(3>u)&&(u!=3||Zm||this.g&&(this.h.h||this.g.ja()||y1(this.g)))){this.J||u!=4||e==7||(e==8||0>=h?Jl(3):Jl(2)),eh(this);var n=this.g.da();this.ca=n;t:if(Jb(this)){var r=y1(this.g);t="";var i=r.length,s=sr(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){ss(this),hl(this);var o="";break t}this.h.i=new oe.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,t+=this.h.i.decode(r[e],{stream:s&&e==i-1});r.splice(0,i),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.ja();if(this.i=n==200,jV(this.j,this.u,this.A,this.m,this.W,u,n),this.i){if(this.aa&&!this.K){t:{if(this.g){var a,l=this.g;if((a=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Gl(a)){var c=a;break t}}c=null}if(n=c)_o(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,ag(this,n);else{this.i=!1,this.o=3,Wt(12),ss(this),hl(this);break e}}this.S?(Zb(this,u,o),Zm&&this.i&&u==3&&(zb(this.U,this.V,"tick",this.mb),this.V.start())):(_o(this.j,this.m,o,null),ag(this,o)),u==4&&ss(this),this.i&&!this.J&&(u==4?TC(this.l,this):(this.i=!1,Ac(this)))}else lj(this.g),n==400&&0<o.indexOf("Unknown SID")?(this.o=3,Wt(12)):(this.o=0,Wt(13)),ss(this),hl(this)}}}catch{}finally{}};function Jb(t){return t.g?t.u=="GET"&&t.L!=2&&t.l.Ha:!1}function Zb(t,e,n){let r=!0,i;for(;!t.J&&t.C<n.length;)if(i=UV(t,n),i==Ud){e==4&&(t.o=4,Wt(14),r=!1),_o(t.j,t.m,null,"[Incomplete Response]");break}else if(i==sg){t.o=4,Wt(15),_o(t.j,t.m,n,"[Invalid Chunk]"),r=!1;break}else _o(t.j,t.m,i,null),ag(t,i);Jb(t)&&i!=Ud&&i!=sg&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,Wt(16),r=!1),t.i=t.i&&r,r?0<n.length&&!t.ba&&(t.ba=!0,e=t.l,e.g==t&&e.ca&&!e.M&&(e.l.info("Great, no buffering proxy detected. Bytes received: "+n.length),Tv(e),e.M=!0,Wt(11))):(_o(t.j,t.m,n,"[Invalid Chunked Response]"),ss(t),hl(t))}Q.mb=function(){if(this.g){var t=sr(this.g),e=this.g.ja();this.C<e.length&&(eh(this),Zb(this,t,e),this.i&&t!=4&&Ac(this))}};function UV(t,e){var n=t.C,r=e.indexOf(`
`,n);return r==-1?Ud:(n=Number(e.substring(n,r)),isNaN(n)?sg:(r+=1,r+n>e.length?Ud:(e=e.slice(r,r+n),t.C=r+n,e)))}Q.cancel=function(){this.J=!0,ss(this)};function Ac(t){t.Y=Date.now()+t.P,eC(t,t.P)}function eC(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=bc(jt(t.lb,t),e)}function eh(t){t.B&&(oe.clearTimeout(t.B),t.B=null)}Q.lb=function(){this.B=null;const t=Date.now();0<=t-this.Y?(FV(this.j,this.A),this.L!=2&&(Jl(),Wt(17)),ss(this),this.o=2,hl(this)):eC(this,this.Y-t)};function hl(t){t.l.H==0||t.J||TC(t.l,t)}function ss(t){eh(t);var e=t.M;e&&typeof e.sa=="function"&&e.sa(),t.M=null,fv(t.V),Hb(t.U),t.g&&(e=t.g,t.g=null,e.abort(),e.sa())}function ag(t,e){try{var n=t.l;if(n.H!=0&&(n.g==t||lg(n.i,t))){if(!t.K&&lg(n.i,t)&&n.H==3){try{var r=n.Ja.g.parse(e)}catch{r=null}if(Array.isArray(r)&&r.length==3){var i=r;if(i[0]==0){e:if(!n.u){if(n.g)if(n.g.G+3e3<t.G)Wd(n),ih(n);else break e;Ev(n),Wt(18)}}else n.Fa=i[1],0<n.Fa-n.V&&37500>i[2]&&n.G&&n.A==0&&!n.v&&(n.v=bc(jt(n.ib,n),6e3));if(1>=lC(n.i)&&n.oa){try{n.oa()}catch{}n.oa=void 0}}else os(n,11)}else if((t.K||n.g==t)&&Wd(n),!Gl(e))for(i=n.Ja.g.parse(e),e=0;e<i.length;e++){let c=i[e];if(n.V=c[0],c=c[1],n.H==2)if(c[0]=="c"){n.K=c[1],n.pa=c[2];const u=c[3];u!=null&&(n.ra=u,n.l.info("VER="+n.ra));const h=c[4];h!=null&&(n.Ga=h,n.l.info("SVER="+n.Ga));const m=c[5];m!=null&&typeof m=="number"&&0<m&&(r=1.5*m,n.L=r,n.l.info("backChannelRequestTimeoutMs_="+r)),r=n;const v=t.g;if(v){const x=v.g?v.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(x){var s=r.i;s.g||x.indexOf("spdy")==-1&&x.indexOf("quic")==-1&&x.indexOf("h2")==-1||(s.j=s.l,s.g=new Set,s.h&&(yv(s,s.h),s.h=null))}if(r.F){const g=v.g?v.g.getResponseHeader("X-HTTP-Session-Id"):null;g&&(r.Da=g,Ne(r.I,r.F,g))}}n.H=3,n.h&&n.h.Ba(),n.ca&&(n.S=Date.now()-t.G,n.l.info("Handshake RTT: "+n.S+"ms")),r=n;var o=t;if(r.wa=bC(r,r.J?r.pa:null,r.Y),o.K){cC(r.i,o);var a=o,l=r.L;l&&a.setTimeout(l),a.B&&(eh(a),Ac(a)),r.g=o}else _C(r);0<n.j.length&&sh(n)}else c[0]!="stop"&&c[0]!="close"||os(n,7);else n.H==3&&(c[0]=="stop"||c[0]=="close"?c[0]=="stop"?os(n,7):_v(n):c[0]!="noop"&&n.h&&n.h.Aa(c),n.A=0)}}Jl(4)}catch{}}function zV(t){if(t.Z&&typeof t.Z=="function")return t.Z();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(Wf(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}e=[],n=0;for(r in t)e[n++]=t[r];return e}function HV(t){if(t.ta&&typeof t.ta=="function")return t.ta();if(!t.Z||typeof t.Z!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(Wf(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const r in t)e[n++]=r;return e}}}function tC(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(Wf(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=HV(t),r=zV(t),i=r.length,s=0;s<i;s++)e.call(void 0,r[s],n&&n[s],t)}var nC=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function WV(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),i=null;if(0<=r){var s=t[n].substring(0,r);i=t[n].substring(r+1)}else s=t[n];e(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function hs(t){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof hs){this.h=t.h,zd(this,t.j),this.s=t.s,this.g=t.g,Hd(this,t.m),this.l=t.l;var e=t.i,n=new Zl;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),p1(this,n),this.o=t.o}else t&&(e=String(t).match(nC))?(this.h=!1,zd(this,e[1]||"",!0),this.s=Ya(e[2]||""),this.g=Ya(e[3]||"",!0),Hd(this,e[4]),this.l=Ya(e[5]||"",!0),p1(this,e[6]||"",!0),this.o=Ya(e[7]||"")):(this.h=!1,this.i=new Zl(null,this.h))}hs.prototype.toString=function(){var t=[],e=this.j;e&&t.push(Xa(e,m1,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(Xa(e,m1,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(Xa(n,n.charAt(0)=="/"?KV:GV,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",Xa(n,YV)),t.join("")};function Br(t){return new hs(t)}function zd(t,e,n){t.j=n?Ya(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function Hd(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function p1(t,e,n){e instanceof Zl?(t.i=e,XV(t.i,t.h)):(n||(e=Xa(e,QV)),t.i=new Zl(e,t.h))}function Ne(t,e,n){t.i.set(e,n)}function th(t){return Ne(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function Ya(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function Xa(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,qV),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function qV(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var m1=/[#\/\?@]/g,GV=/[#\?:]/g,KV=/[#\?]/g,QV=/[#\?@]/g,YV=/#/g;function Zl(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function Fi(t){t.g||(t.g=new Map,t.h=0,t.i&&WV(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}Q=Zl.prototype;Q.add=function(t,e){Fi(this),this.i=null,t=ha(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function rC(t,e){Fi(t),e=ha(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function iC(t,e){return Fi(t),e=ha(t,e),t.g.has(e)}Q.forEach=function(t,e){Fi(this),this.g.forEach(function(n,r){n.forEach(function(i){t.call(e,i,r,this)},this)},this)};Q.ta=function(){Fi(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let r=0;r<e.length;r++){const i=t[r];for(let s=0;s<i.length;s++)n.push(e[r])}return n};Q.Z=function(t){Fi(this);let e=[];if(typeof t=="string")iC(this,t)&&(e=e.concat(this.g.get(ha(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};Q.set=function(t,e){return Fi(this),this.i=null,t=ha(this,t),iC(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};Q.get=function(t,e){return t?(t=this.Z(t),0<t.length?String(t[0]):e):e};function sC(t,e,n){rC(t,e),0<n.length&&(t.i=null,t.g.set(ha(t,e),rv(n)),t.h+=n.length)}Q.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var r=e[n];const s=encodeURIComponent(String(r)),o=this.Z(r);for(r=0;r<o.length;r++){var i=s;o[r]!==""&&(i+="="+encodeURIComponent(String(o[r]))),t.push(i)}}return this.i=t.join("&")};function ha(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function XV(t,e){e&&!t.j&&(Fi(t),t.i=null,t.g.forEach(function(n,r){var i=r.toLowerCase();r!=i&&(rC(this,r),sC(this,i,n))},t)),t.j=e}var JV=class{constructor(t,e){this.g=t,this.map=e}};function oC(t){this.l=t||ZV,oe.PerformanceNavigationTiming?(t=oe.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(oe.g&&oe.g.Ka&&oe.g.Ka()&&oe.g.Ka().dc),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var ZV=10;function aC(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function lC(t){return t.h?1:t.g?t.g.size:0}function lg(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function yv(t,e){t.g?t.g.add(e):t.h=e}function cC(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}oC.prototype.cancel=function(){if(this.i=uC(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function uC(t){if(t.h!=null)return t.i.concat(t.h.F);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.F);return e}return rv(t.i)}var ej=class{stringify(t){return oe.JSON.stringify(t,void 0)}parse(t){return oe.JSON.parse(t,void 0)}};function tj(){this.g=new ej}function nj(t,e,n){const r=n||"";try{tC(t,function(i,s){let o=i;xc(i)&&(o=uv(i)),e.push(r+s+"="+encodeURIComponent(o))})}catch(i){throw e.push(r+"type="+encodeURIComponent("_badmap")),i}}function rj(t,e){const n=new Yf;if(oe.Image){const r=new Image;r.onload=gu(vu,n,r,"TestLoadImage: loaded",!0,e),r.onerror=gu(vu,n,r,"TestLoadImage: error",!1,e),r.onabort=gu(vu,n,r,"TestLoadImage: abort",!1,e),r.ontimeout=gu(vu,n,r,"TestLoadImage: timeout",!1,e),oe.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=t}else e(!1)}function vu(t,e,n,r,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(r)}catch{}}function Pc(t){this.l=t.ec||null,this.j=t.ob||!1}_t(Pc,pv);Pc.prototype.g=function(){return new nh(this.l,this.j)};Pc.prototype.i=function(t){return function(){return t}}({});function nh(t,e){wt.call(this),this.F=t,this.u=e,this.m=void 0,this.readyState=vv,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}_t(nh,wt);var vv=0;Q=nh.prototype;Q.open=function(t,e){if(this.readyState!=vv)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,ec(this)};Q.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.F||oe).fetch(new Request(this.B,e)).then(this.$a.bind(this),this.ka.bind(this))};Q.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,kc(this)),this.readyState=vv};Q.$a=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,ec(this)),this.g&&(this.readyState=3,ec(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof oe.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;dC(this)}else t.text().then(this.Za.bind(this),this.ka.bind(this))};function dC(t){t.j.read().then(t.Xa.bind(t)).catch(t.ka.bind(t))}Q.Xa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?kc(this):ec(this),this.readyState==3&&dC(this)}};Q.Za=function(t){this.g&&(this.response=this.responseText=t,kc(this))};Q.Ya=function(t){this.g&&(this.response=t,kc(this))};Q.ka=function(){this.g&&kc(this)};function kc(t){t.readyState=4,t.l=null,t.j=null,t.A=null,ec(t)}Q.setRequestHeader=function(t,e){this.v.append(t,e)};Q.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};Q.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function ec(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(nh.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var ij=oe.JSON.parse;function Ke(t){wt.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=fC,this.L=this.M=!1}_t(Ke,wt);var fC="",sj=/^https?$/i,oj=["POST","PUT"];Q=Ke.prototype;Q.Oa=function(t){this.M=t};Q.ha=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+t);e=e?e.toUpperCase():"GET",this.I=t,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():ig.g(),this.C=this.u?h1(this.u):h1(ig),this.g.onreadystatechange=jt(this.La,this);try{this.G=!0,this.g.open(e,String(t),!0),this.G=!1}catch(s){g1(this,s);return}if(t=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var i in r)n.set(i,r[i]);else if(typeof r.keys=="function"&&typeof r.get=="function")for(const s of r.keys())n.set(s,r.get(s));else throw Error("Unknown input type for opt_headers: "+String(r));r=Array.from(n.keys()).find(s=>s.toLowerCase()=="content-type"),i=oe.FormData&&t instanceof oe.FormData,!(0<=Pb(oj,e))||r||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[s,o]of n)this.g.setRequestHeader(s,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{mC(this),0<this.B&&((this.L=aj(this.g))?(this.g.timeout=this.B,this.g.ontimeout=jt(this.ua,this)):this.A=hv(this.ua,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(s){g1(this,s)}};function aj(t){return Go&&typeof t.timeout=="number"&&t.ontimeout!==void 0}Q.ua=function(){typeof nv<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,It(this,"timeout"),this.abort(8))};function g1(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,hC(t),rh(t)}function hC(t){t.F||(t.F=!0,It(t,"complete"),It(t,"error"))}Q.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,It(this,"complete"),It(this,"abort"),rh(this))};Q.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),rh(this,!0)),Ke.$.N.call(this)};Q.La=function(){this.s||(this.G||this.v||this.l?pC(this):this.kb())};Q.kb=function(){pC(this)};function pC(t){if(t.h&&typeof nv<"u"&&(!t.C[1]||sr(t)!=4||t.da()!=2)){if(t.v&&sr(t)==4)hv(t.La,0,t);else if(It(t,"readystatechange"),sr(t)==4){t.h=!1;try{const o=t.da();e:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var r;if(r=o===0){var i=String(t.I).match(nC)[1]||null;!i&&oe.self&&oe.self.location&&(i=oe.self.location.protocol.slice(0,-1)),r=!sj.test(i?i.toLowerCase():"")}n=r}if(n)It(t,"complete"),It(t,"success");else{t.m=6;try{var s=2<sr(t)?t.g.statusText:""}catch{s=""}t.j=s+" ["+t.da()+"]",hC(t)}}finally{rh(t)}}}}function rh(t,e){if(t.g){mC(t);const n=t.g,r=t.C[0]?()=>{}:null;t.g=null,t.C=null,e||It(t,"ready");try{n.onreadystatechange=r}catch{}}}function mC(t){t.g&&t.L&&(t.g.ontimeout=null),t.A&&(oe.clearTimeout(t.A),t.A=null)}Q.isActive=function(){return!!this.g};function sr(t){return t.g?t.g.readyState:0}Q.da=function(){try{return 2<sr(this)?this.g.status:-1}catch{return-1}};Q.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};Q.Wa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),ij(e)}};function y1(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.K){case fC:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}function lj(t){const e={};t=(t.g&&2<=sr(t)&&t.g.getAllResponseHeaders()||"").split(`\r
`);for(let r=0;r<t.length;r++){if(Gl(t[r]))continue;var n=DV(t[r]);const i=n[0];if(n=n[1],typeof n!="string")continue;n=n.trim();const s=e[i]||[];e[i]=s,s.push(n)}CV(e,function(r){return r.join(", ")})}Q.Ia=function(){return this.m};Q.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function gC(t){let e="";return sv(t,function(n,r){e+=r,e+=":",e+=n,e+=`\r
`}),e}function wv(t,e,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=gC(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):Ne(t,e,n))}function Ma(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function yC(t){this.Ga=0,this.j=[],this.l=new Yf,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=Ma("failFast",!1,t),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=Ma("baseRetryDelayMs",5e3,t),this.hb=Ma("retryDelaySeedMs",1e4,t),this.eb=Ma("forwardChannelMaxRetries",2,t),this.xa=Ma("forwardChannelRequestTimeoutMs",2e4,t),this.va=t&&t.xmlHttpFactory||void 0,this.Ha=t&&t.useFetchStreams||!1,this.L=void 0,this.J=t&&t.supportsCrossDomainXhr||!1,this.K="",this.i=new oC(t&&t.concurrentRequestLimit),this.Ja=new tj,this.P=t&&t.fastHandshake||!1,this.O=t&&t.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=t&&t.bc||!1,t&&t.Ea&&this.l.Ea(),t&&t.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&t&&t.detectBufferingProxy||!1,this.qa=void 0,t&&t.longPollingTimeout&&0<t.longPollingTimeout&&(this.qa=t.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}Q=yC.prototype;Q.ra=8;Q.H=1;function _v(t){if(vC(t),t.H==3){var e=t.W++,n=Br(t.I);if(Ne(n,"SID",t.K),Ne(n,"RID",e),Ne(n,"TYPE","terminate"),Rc(t,n),e=new Ic(t,t.l,e),e.L=2,e.v=th(Br(n)),n=!1,oe.navigator&&oe.navigator.sendBeacon)try{n=oe.navigator.sendBeacon(e.v.toString(),"")}catch{}!n&&oe.Image&&(new Image().src=e.v,n=!0),n||(e.g=CC(e.l,null),e.g.ha(e.v)),e.G=Date.now(),Ac(e)}SC(t)}function ih(t){t.g&&(Tv(t),t.g.cancel(),t.g=null)}function vC(t){ih(t),t.u&&(oe.clearTimeout(t.u),t.u=null),Wd(t),t.i.cancel(),t.m&&(typeof t.m=="number"&&oe.clearTimeout(t.m),t.m=null)}function sh(t){if(!aC(t.i)&&!t.m){t.m=!0;var e=t.Na;Ql||Bb(),Yl||(Ql(),Yl=!0),dv.add(e,t),t.C=0}}function cj(t,e){return lC(t.i)>=t.i.j-(t.m?1:0)?!1:t.m?(t.j=e.F.concat(t.j),!0):t.H==1||t.H==2||t.C>=(t.cb?0:t.eb)?!1:(t.m=bc(jt(t.Na,t,e),xC(t,t.C)),t.C++,!0)}Q.Na=function(t){if(this.m)if(this.m=null,this.H==1){if(!t){this.W=Math.floor(1e5*Math.random()),t=this.W++;const i=new Ic(this,this.l,t);let s=this.s;if(this.U&&(s?(s=Db(s),Nb(s,this.U)):s=this.U),this.o!==null||this.O||(i.I=s,s=null),this.P)e:{for(var e=0,n=0;n<this.j.length;n++){t:{var r=this.j[n];if("__data__"in r.map&&(r=r.map.__data__,typeof r=="string")){r=r.length;break t}r=void 0}if(r===void 0)break;if(e+=r,4096<e){e=n;break e}if(e===4096||n===this.j.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=wC(this,i,e),n=Br(this.I),Ne(n,"RID",t),Ne(n,"CVER",22),this.F&&Ne(n,"X-HTTP-Session-Id",this.F),Rc(this,n),s&&(this.O?e="headers="+encodeURIComponent(String(gC(s)))+"&"+e:this.o&&wv(n,this.o,s)),yv(this.i,i),this.bb&&Ne(n,"TYPE","init"),this.P?(Ne(n,"$req",e),Ne(n,"SID","null"),i.aa=!0,og(i,n,null)):og(i,n,e),this.H=2}}else this.H==3&&(t?v1(this,t):this.j.length==0||aC(this.i)||v1(this))};function v1(t,e){var n;e?n=e.m:n=t.W++;const r=Br(t.I);Ne(r,"SID",t.K),Ne(r,"RID",n),Ne(r,"AID",t.V),Rc(t,r),t.o&&t.s&&wv(r,t.o,t.s),n=new Ic(t,t.l,n,t.C+1),t.o===null&&(n.I=t.s),e&&(t.j=e.F.concat(t.j)),e=wC(t,n,1e3),n.setTimeout(Math.round(.5*t.xa)+Math.round(.5*t.xa*Math.random())),yv(t.i,n),og(n,r,e)}function Rc(t,e){t.na&&sv(t.na,function(n,r){Ne(e,r,n)}),t.h&&tC({},function(n,r){Ne(e,r,n)})}function wC(t,e,n){n=Math.min(t.j.length,n);var r=t.h?jt(t.h.Va,t.h,t):null;e:{var i=t.j;let s=-1;for(;;){const o=["count="+n];s==-1?0<n?(s=i[0].g,o.push("ofs="+s)):s=0:o.push("ofs="+s);let a=!0;for(let l=0;l<n;l++){let c=i[l].g;const u=i[l].map;if(c-=s,0>c)s=Math.max(0,i[l].g-100),a=!1;else try{nj(u,o,"req"+c+"_")}catch{r&&r(u)}}if(a){r=o.join("&");break e}}}return t=t.j.splice(0,n),e.F=t,r}function _C(t){if(!t.g&&!t.u){t.ba=1;var e=t.Ma;Ql||Bb(),Yl||(Ql(),Yl=!0),dv.add(e,t),t.A=0}}function Ev(t){return t.g||t.u||3<=t.A?!1:(t.ba++,t.u=bc(jt(t.Ma,t),xC(t,t.A)),t.A++,!0)}Q.Ma=function(){if(this.u=null,EC(this),this.ca&&!(this.M||this.g==null||0>=this.S)){var t=2*this.S;this.l.info("BP detection timer enabled: "+t),this.B=bc(jt(this.jb,this),t)}};Q.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,Wt(10),ih(this),EC(this))};function Tv(t){t.B!=null&&(oe.clearTimeout(t.B),t.B=null)}function EC(t){t.g=new Ic(t,t.l,"rpc",t.ba),t.o===null&&(t.g.I=t.s),t.g.O=0;var e=Br(t.wa);Ne(e,"RID","rpc"),Ne(e,"SID",t.K),Ne(e,"AID",t.V),Ne(e,"CI",t.G?"0":"1"),!t.G&&t.qa&&Ne(e,"TO",t.qa),Ne(e,"TYPE","xmlhttp"),Rc(t,e),t.o&&t.s&&wv(e,t.o,t.s),t.L&&t.g.setTimeout(t.L);var n=t.g;t=t.pa,n.L=1,n.v=th(Br(e)),n.s=null,n.S=!0,Xb(n,t)}Q.ib=function(){this.v!=null&&(this.v=null,ih(this),Ev(this),Wt(19))};function Wd(t){t.v!=null&&(oe.clearTimeout(t.v),t.v=null)}function TC(t,e){var n=null;if(t.g==e){Wd(t),Tv(t),t.g=null;var r=2}else if(lg(t.i,e))n=e.F,cC(t.i,e),r=1;else return;if(t.H!=0){if(e.i)if(r==1){n=e.s?e.s.length:0,e=Date.now()-e.G;var i=t.C;r=Xf(),It(r,new Gb(r,n)),sh(t)}else _C(t);else if(i=e.o,i==3||i==0&&0<e.ca||!(r==1&&cj(t,e)||r==2&&Ev(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),i){case 1:os(t,5);break;case 4:os(t,10);break;case 3:os(t,6);break;default:os(t,2)}}}function xC(t,e){let n=t.ab+Math.floor(Math.random()*t.hb);return t.isActive()||(n*=2),n*e}function os(t,e){if(t.l.info("Error code "+e),e==2){var n=null;t.h&&(n=null);var r=jt(t.pb,t);n||(n=new hs("//www.google.com/images/cleardot.gif"),oe.location&&oe.location.protocol=="http"||zd(n,"https"),th(n)),rj(n.toString(),r)}else Wt(2);t.H=0,t.h&&t.h.za(e),SC(t),vC(t)}Q.pb=function(t){t?(this.l.info("Successfully pinged google.com"),Wt(2)):(this.l.info("Failed to ping google.com"),Wt(1))};function SC(t){if(t.H=0,t.ma=[],t.h){const e=uC(t.i);(e.length!=0||t.j.length!=0)&&(l1(t.ma,e),l1(t.ma,t.j),t.i.i.length=0,rv(t.j),t.j.length=0),t.h.ya()}}function bC(t,e,n){var r=n instanceof hs?Br(n):new hs(n);if(r.g!="")e&&(r.g=e+"."+r.g),Hd(r,r.m);else{var i=oe.location;r=i.protocol,e=e?e+"."+i.hostname:i.hostname,i=+i.port;var s=new hs(null);r&&zd(s,r),e&&(s.g=e),i&&Hd(s,i),n&&(s.l=n),r=s}return n=t.F,e=t.Da,n&&e&&Ne(r,n,e),Ne(r,"VER",t.ra),Rc(t,r),r}function CC(t,e,n){if(e&&!t.J)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Ha&&!t.va?new Ke(new Pc({ob:!0})):new Ke(t.va),e.Oa(t.J),e}Q.isActive=function(){return!!this.h&&this.h.isActive(this)};function IC(){}Q=IC.prototype;Q.Ba=function(){};Q.Aa=function(){};Q.za=function(){};Q.ya=function(){};Q.isActive=function(){return!0};Q.Va=function(){};function qd(){if(Go&&!(10<=Number(TV)))throw Error("Environmental error: no available transport.")}qd.prototype.g=function(t,e){return new yn(t,e)};function yn(t,e){wt.call(this),this.g=new yC(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.Ca&&(t?t["X-WebChannel-Client-Profile"]=e.Ca:t={"X-WebChannel-Client-Profile":e.Ca}),this.g.U=t,(t=e&&e.cc)&&!Gl(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!Gl(e)&&(this.g.F=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new pa(this)}_t(yn,wt);yn.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var t=this.g,e=this.l,n=this.h||void 0;Wt(0),t.Y=e,t.na=n||{},t.G=t.aa,t.I=bC(t,null,t.Y),sh(t)};yn.prototype.close=function(){_v(this.g)};yn.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=uv(t),t=n);e.j.push(new JV(e.fb++,t)),e.H==3&&sh(e)};yn.prototype.N=function(){this.g.h=null,delete this.j,_v(this.g),delete this.g,yn.$.N.call(this)};function AC(t){mv.call(this),t.__headers__&&(this.headers=t.__headers__,this.statusCode=t.__status__,delete t.__headers__,delete t.__status__);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}_t(AC,mv);function PC(){gv.call(this),this.status=1}_t(PC,gv);function pa(t){this.g=t}_t(pa,IC);pa.prototype.Ba=function(){It(this.g,"a")};pa.prototype.Aa=function(t){It(this.g,new AC(t))};pa.prototype.za=function(t){It(this.g,new PC)};pa.prototype.ya=function(){It(this.g,"b")};function uj(){this.blockSize=-1}function qn(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}_t(qn,uj);qn.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function Sp(t,e,n){n||(n=0);var r=Array(16);if(typeof e=="string")for(var i=0;16>i;++i)r[i]=e.charCodeAt(n++)|e.charCodeAt(n++)<<8|e.charCodeAt(n++)<<16|e.charCodeAt(n++)<<24;else for(i=0;16>i;++i)r[i]=e[n++]|e[n++]<<8|e[n++]<<16|e[n++]<<24;e=t.g[0],n=t.g[1],i=t.g[2];var s=t.g[3],o=e+(s^n&(i^s))+r[0]+3614090360&4294967295;e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[1]+3905402710&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[2]+606105819&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[3]+3250441966&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(s^n&(i^s))+r[4]+4118548399&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[5]+1200080426&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[6]+2821735955&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[7]+4249261313&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(s^n&(i^s))+r[8]+1770035416&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[9]+2336552879&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[10]+4294925233&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[11]+2304563134&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(s^n&(i^s))+r[12]+1804603682&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[13]+4254626195&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[14]+2792965006&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[15]+1236535329&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(i^s&(n^i))+r[1]+4129170786&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[6]+3225465664&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[11]+643717713&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[0]+3921069994&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(n^i))+r[5]+3593408605&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[10]+38016083&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[15]+3634488961&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[4]+3889429448&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(n^i))+r[9]+568446438&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[14]+3275163606&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[3]+4107603335&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[8]+1163531501&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(n^i))+r[13]+2850285829&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[2]+4243563512&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[7]+1735328473&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[12]+2368359562&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(n^i^s)+r[5]+4294588738&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[8]+2272392833&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[11]+1839030562&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[14]+4259657740&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^s)+r[1]+2763975236&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[4]+1272893353&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[7]+4139469664&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[10]+3200236656&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^s)+r[13]+681279174&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[0]+3936430074&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[3]+3572445317&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[6]+76029189&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^s)+r[9]+3654602809&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[12]+3873151461&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[15]+530742520&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[2]+3299628645&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(i^(n|~s))+r[0]+4096336452&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[7]+1126891415&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[14]+2878612391&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[5]+4237533241&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~s))+r[12]+1700485571&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[3]+2399980690&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[10]+4293915773&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[1]+2240044497&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~s))+r[8]+1873313359&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[15]+4264355552&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[6]+2734768916&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[13]+1309151649&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~s))+r[4]+4149444226&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[11]+3174756917&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[2]+718787259&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[9]+3951481745&4294967295,t.g[0]=t.g[0]+e&4294967295,t.g[1]=t.g[1]+(i+(o<<21&4294967295|o>>>11))&4294967295,t.g[2]=t.g[2]+i&4294967295,t.g[3]=t.g[3]+s&4294967295}qn.prototype.j=function(t,e){e===void 0&&(e=t.length);for(var n=e-this.blockSize,r=this.m,i=this.h,s=0;s<e;){if(i==0)for(;s<=n;)Sp(this,t,s),s+=this.blockSize;if(typeof t=="string"){for(;s<e;)if(r[i++]=t.charCodeAt(s++),i==this.blockSize){Sp(this,r),i=0;break}}else for(;s<e;)if(r[i++]=t[s++],i==this.blockSize){Sp(this,r),i=0;break}}this.h=i,this.i+=e};qn.prototype.l=function(){var t=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);t[0]=128;for(var e=1;e<t.length-8;++e)t[e]=0;var n=8*this.i;for(e=t.length-8;e<t.length;++e)t[e]=n&255,n/=256;for(this.j(t),t=Array(16),e=n=0;4>e;++e)for(var r=0;32>r;r+=8)t[n++]=this.g[e]>>>r&255;return t};function Se(t,e){this.h=e;for(var n=[],r=!0,i=t.length-1;0<=i;i--){var s=t[i]|0;r&&s==e||(n[i]=s,r=!1)}this.g=n}var dj={};function xv(t){return-128<=t&&128>t?wV(t,function(e){return new Se([e|0],0>e?-1:0)}):new Se([t|0],0>t?-1:0)}function or(t){if(isNaN(t)||!isFinite(t))return ko;if(0>t)return St(or(-t));for(var e=[],n=1,r=0;t>=n;r++)e[r]=t/n|0,n*=cg;return new Se(e,0)}function kC(t,e){if(t.length==0)throw Error("number format error: empty string");if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(t.charAt(0)=="-")return St(kC(t.substring(1),e));if(0<=t.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=or(Math.pow(e,8)),r=ko,i=0;i<t.length;i+=8){var s=Math.min(8,t.length-i),o=parseInt(t.substring(i,i+s),e);8>s?(s=or(Math.pow(e,s)),r=r.R(s).add(or(o))):(r=r.R(n),r=r.add(or(o)))}return r}var cg=4294967296,ko=xv(0),ug=xv(1),w1=xv(16777216);Q=Se.prototype;Q.ea=function(){if(bn(this))return-St(this).ea();for(var t=0,e=1,n=0;n<this.g.length;n++){var r=this.D(n);t+=(0<=r?r:cg+r)*e,e*=cg}return t};Q.toString=function(t){if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(Dr(this))return"0";if(bn(this))return"-"+St(this).toString(t);for(var e=or(Math.pow(t,6)),n=this,r="";;){var i=Kd(n,e).g;n=Gd(n,i.R(e));var s=((0<n.g.length?n.g[0]:n.h)>>>0).toString(t);if(n=i,Dr(n))return s+r;for(;6>s.length;)s="0"+s;r=s+r}};Q.D=function(t){return 0>t?0:t<this.g.length?this.g[t]:this.h};function Dr(t){if(t.h!=0)return!1;for(var e=0;e<t.g.length;e++)if(t.g[e]!=0)return!1;return!0}function bn(t){return t.h==-1}Q.X=function(t){return t=Gd(this,t),bn(t)?-1:Dr(t)?0:1};function St(t){for(var e=t.g.length,n=[],r=0;r<e;r++)n[r]=~t.g[r];return new Se(n,~t.h).add(ug)}Q.abs=function(){return bn(this)?St(this):this};Q.add=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0,i=0;i<=e;i++){var s=r+(this.D(i)&65535)+(t.D(i)&65535),o=(s>>>16)+(this.D(i)>>>16)+(t.D(i)>>>16);r=o>>>16,s&=65535,o&=65535,n[i]=o<<16|s}return new Se(n,n[n.length-1]&-2147483648?-1:0)};function Gd(t,e){return t.add(St(e))}Q.R=function(t){if(Dr(this)||Dr(t))return ko;if(bn(this))return bn(t)?St(this).R(St(t)):St(St(this).R(t));if(bn(t))return St(this.R(St(t)));if(0>this.X(w1)&&0>t.X(w1))return or(this.ea()*t.ea());for(var e=this.g.length+t.g.length,n=[],r=0;r<2*e;r++)n[r]=0;for(r=0;r<this.g.length;r++)for(var i=0;i<t.g.length;i++){var s=this.D(r)>>>16,o=this.D(r)&65535,a=t.D(i)>>>16,l=t.D(i)&65535;n[2*r+2*i]+=o*l,wu(n,2*r+2*i),n[2*r+2*i+1]+=s*l,wu(n,2*r+2*i+1),n[2*r+2*i+1]+=o*a,wu(n,2*r+2*i+1),n[2*r+2*i+2]+=s*a,wu(n,2*r+2*i+2)}for(r=0;r<e;r++)n[r]=n[2*r+1]<<16|n[2*r];for(r=e;r<2*e;r++)n[r]=0;return new Se(n,0)};function wu(t,e){for(;(t[e]&65535)!=t[e];)t[e+1]+=t[e]>>>16,t[e]&=65535,e++}function Va(t,e){this.g=t,this.h=e}function Kd(t,e){if(Dr(e))throw Error("division by zero");if(Dr(t))return new Va(ko,ko);if(bn(t))return e=Kd(St(t),e),new Va(St(e.g),St(e.h));if(bn(e))return e=Kd(t,St(e)),new Va(St(e.g),e.h);if(30<t.g.length){if(bn(t)||bn(e))throw Error("slowDivide_ only works with positive integers.");for(var n=ug,r=e;0>=r.X(t);)n=_1(n),r=_1(r);var i=to(n,1),s=to(r,1);for(r=to(r,2),n=to(n,2);!Dr(r);){var o=s.add(r);0>=o.X(t)&&(i=i.add(n),s=o),r=to(r,1),n=to(n,1)}return e=Gd(t,i.R(e)),new Va(i,e)}for(i=ko;0<=t.X(e);){for(n=Math.max(1,Math.floor(t.ea()/e.ea())),r=Math.ceil(Math.log(n)/Math.LN2),r=48>=r?1:Math.pow(2,r-48),s=or(n),o=s.R(e);bn(o)||0<o.X(t);)n-=r,s=or(n),o=s.R(e);Dr(s)&&(s=ug),i=i.add(s),t=Gd(t,o)}return new Va(i,t)}Q.gb=function(t){return Kd(this,t).h};Q.and=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)&t.D(r);return new Se(n,this.h&t.h)};Q.or=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)|t.D(r);return new Se(n,this.h|t.h)};Q.xor=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)^t.D(r);return new Se(n,this.h^t.h)};function _1(t){for(var e=t.g.length+1,n=[],r=0;r<e;r++)n[r]=t.D(r)<<1|t.D(r-1)>>>31;return new Se(n,t.h)}function to(t,e){var n=e>>5;e%=32;for(var r=t.g.length-n,i=[],s=0;s<r;s++)i[s]=0<e?t.D(s+n)>>>e|t.D(s+n+1)<<32-e:t.D(s+n);return new Se(i,t.h)}qd.prototype.createWebChannel=qd.prototype.g;yn.prototype.send=yn.prototype.u;yn.prototype.open=yn.prototype.m;yn.prototype.close=yn.prototype.close;Jf.NO_ERROR=0;Jf.TIMEOUT=8;Jf.HTTP_ERROR=6;Kb.COMPLETE="complete";Qb.EventType=Cc;Cc.OPEN="a";Cc.CLOSE="b";Cc.ERROR="c";Cc.MESSAGE="d";wt.prototype.listen=wt.prototype.O;Ke.prototype.listenOnce=Ke.prototype.P;Ke.prototype.getLastError=Ke.prototype.Sa;Ke.prototype.getLastErrorCode=Ke.prototype.Ia;Ke.prototype.getStatus=Ke.prototype.da;Ke.prototype.getResponseJson=Ke.prototype.Wa;Ke.prototype.getResponseText=Ke.prototype.ja;Ke.prototype.send=Ke.prototype.ha;Ke.prototype.setWithCredentials=Ke.prototype.Oa;qn.prototype.digest=qn.prototype.l;qn.prototype.reset=qn.prototype.reset;qn.prototype.update=qn.prototype.j;Se.prototype.add=Se.prototype.add;Se.prototype.multiply=Se.prototype.R;Se.prototype.modulo=Se.prototype.gb;Se.prototype.compare=Se.prototype.X;Se.prototype.toNumber=Se.prototype.ea;Se.prototype.toString=Se.prototype.toString;Se.prototype.getBits=Se.prototype.D;Se.fromNumber=or;Se.fromString=kC;var fj=function(){return new qd},hj=function(){return Xf()},bp=Jf,pj=Kb,mj=js,E1={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},gj=Pc,_u=Qb,yj=Ke,vj=qn,Ro=Se;const T1="@firebase/firestore";/**
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
 */class Lt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Lt.UNAUTHENTICATED=new Lt(null),Lt.GOOGLE_CREDENTIALS=new Lt("google-credentials-uid"),Lt.FIRST_PARTY=new Lt("first-party-uid"),Lt.MOCK_USER=new Lt("mock-user");/**
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
 */let ma="10.5.2";/**
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
 */const bs=new Wy("@firebase/firestore");function ja(){return bs.logLevel}function Z(t,...e){if(bs.logLevel<=me.DEBUG){const n=e.map(Sv);bs.debug(`Firestore (${ma}): ${t}`,...n)}}function Ur(t,...e){if(bs.logLevel<=me.ERROR){const n=e.map(Sv);bs.error(`Firestore (${ma}): ${t}`,...n)}}function Ko(t,...e){if(bs.logLevel<=me.WARN){const n=e.map(Sv);bs.warn(`Firestore (${ma}): ${t}`,...n)}}function Sv(t){if(typeof t=="string")return t;try{/**
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
 */function se(t="Unexpected state"){const e=`FIRESTORE (${ma}) INTERNAL ASSERTION FAILED: `+t;throw Ur(e),new Error(e)}function Ve(t,e){t||se()}function ce(t,e){return t}/**
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
 */const $={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class J extends wr{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Lr{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class RC{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class wj{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(Lt.UNAUTHENTICATED))}shutdown(){}}class _j{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class Ej{constructor(e){this.t=e,this.currentUser=Lt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const i=l=>this.i!==r?(r=this.i,n(l)):Promise.resolve();let s=new Lr;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new Lr,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const l=s;e.enqueueRetryable(async()=>{await l.promise,await i(this.currentUser)})},a=l=>{Z("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(Z("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new Lr)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(Z("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Ve(typeof r.accessToken=="string"),new RC(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return Ve(e===null||typeof e=="string"),new Lt(e)}}class Tj{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=Lt.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class xj{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new Tj(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(Lt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Sj{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class bj{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){const r=s=>{s.error!=null&&Z("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.R;return this.R=s.token,Z("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{Z("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?i(s):Z("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Ve(typeof n.token=="string"),this.R=n.token,new Sj(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
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
 */function Cj(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */class OC{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=Cj(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%e.length))}return r}}function Ee(t,e){return t<e?-1:t>e?1:0}function Qo(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
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
 */class dt{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new J($.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new J($.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new J($.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new J($.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return dt.fromMillis(Date.now())}static fromDate(e){return dt.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new dt(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?Ee(this.nanoseconds,e.nanoseconds):Ee(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class le{constructor(e){this.timestamp=e}static fromTimestamp(e){return new le(e)}static min(){return new le(new dt(0,0))}static max(){return new le(new dt(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class tc{constructor(e,n,r){n===void 0?n=0:n>e.length&&se(),r===void 0?r=e.length-n:r>e.length-n&&se(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return tc.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof tc?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=e.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class Le extends tc{construct(e,n,r){return new Le(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new J($.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new Le(n)}static emptyPath(){return new Le([])}}const Ij=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class bt extends tc{construct(e,n,r){return new bt(e,n,r)}static isValidIdentifier(e){return Ij.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),bt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new bt(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new J($.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new J($.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[i+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new J($.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(r+=a,i++):(s(),i++)}if(s(),o)throw new J($.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new bt(n)}static emptyPath(){return new bt([])}}/**
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
 */class ne{constructor(e){this.path=e}static fromPath(e){return new ne(Le.fromString(e))}static fromName(e){return new ne(Le.fromString(e).popFirst(5))}static empty(){return new ne(Le.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Le.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Le.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new ne(new Le(e.slice()))}}function Aj(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=le.fromTimestamp(r===1e9?new dt(n+1,0):new dt(n,r));return new ki(i,ne.empty(),e)}function Pj(t){return new ki(t.readTime,t.key,-1)}class ki{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new ki(le.min(),ne.empty(),-1)}static max(){return new ki(le.max(),ne.empty(),-1)}}function kj(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=ne.comparator(t.documentKey,e.documentKey),n!==0?n:Ee(t.largestBatchId,e.largestBatchId))}/**
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
 */const Rj="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Oj{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function Oc(t){if(t.code!==$.FAILED_PRECONDITION||t.message!==Rj)throw t;Z("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class z{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&se(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new z((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof z?n:z.resolve(n)}catch(n){return z.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):z.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):z.reject(n)}static resolve(e){return new z((n,r)=>{n(e)})}static reject(e){return new z((n,r)=>{r(e)})}static waitFor(e){return new z((n,r)=>{let i=0,s=0,o=!1;e.forEach(a=>{++i,a.next(()=>{++s,o&&s===i&&n()},l=>r(l))}),o=!0,s===i&&n()})}static or(e){let n=z.resolve(!1);for(const r of e)n=n.next(i=>i?z.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new z((r,i)=>{const s=e.length,o=new Array(s);let a=0;for(let l=0;l<s;l++){const c=l;n(e[c]).next(u=>{o[c]=u,++a,a===s&&r(o)},u=>i(u))}})}static doWhile(e,n){return new z((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}function Dc(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class bv{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.se(r),this.oe=r=>n.writeSequenceNumber(r))}se(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.oe&&this.oe(e),e}}bv._e=-1;function oh(t){return t==null}function Qd(t){return t===0&&1/t==-1/0}function Dj(t){return typeof t=="number"&&Number.isInteger(t)&&!Qd(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */function x1(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function ga(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function DC(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */class qe{constructor(e,n){this.comparator=e,this.root=n||xt.EMPTY}insert(e,n){return new qe(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,xt.BLACK,null,null))}remove(e){return new qe(this.comparator,this.root.remove(e,this.comparator).copy(null,null,xt.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Eu(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Eu(this.root,e,this.comparator,!1)}getReverseIterator(){return new Eu(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Eu(this.root,e,this.comparator,!0)}}class Eu{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class xt{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??xt.RED,this.left=i??xt.EMPTY,this.right=s??xt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new xt(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return xt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return xt.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,xt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,xt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw se();const e=this.left.check();if(e!==this.right.check())throw se();return e+(this.isRed()?0:1)}}xt.EMPTY=null,xt.RED=!0,xt.BLACK=!1;xt.EMPTY=new class{constructor(){this.size=0}get key(){throw se()}get value(){throw se()}get color(){throw se()}get left(){throw se()}get right(){throw se()}copy(e,n,r,i,s){return this}insert(e,n,r){return new xt(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class At{constructor(e){this.comparator=e,this.data=new qe(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new S1(this.data.getIterator())}getIteratorFrom(e){return new S1(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof At)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new At(this.comparator);return n.data=e,n}}class S1{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class jn{constructor(e){this.fields=e,e.sort(bt.comparator)}static empty(){return new jn([])}unionWith(e){let n=new At(bt.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new jn(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Qo(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class NC extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class Ut{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new NC("Invalid base64 string: "+s):s}}(e);return new Ut(n)}static fromUint8Array(e){const n=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(e);return new Ut(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Ee(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Ut.EMPTY_BYTE_STRING=new Ut("");const Nj=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Ri(t){if(Ve(!!t),typeof t=="string"){let e=0;const n=Nj.exec(t);if(Ve(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:it(t.seconds),nanos:it(t.nanos)}}function it(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Cs(t){return typeof t=="string"?Ut.fromBase64String(t):Ut.fromUint8Array(t)}/**
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
 */function Cv(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Iv(t){const e=t.mapValue.fields.__previous_value__;return Cv(e)?Iv(e):e}function nc(t){const e=Ri(t.mapValue.fields.__local_write_time__.timestampValue);return new dt(e.seconds,e.nanos)}/**
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
 */class Lj{constructor(e,n,r,i,s,o,a,l,c){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=l,this.useFetchStreams=c}}class rc{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new rc("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof rc&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const Tu={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Is(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Cv(t)?4:Mj(t)?9007199254740991:10:se()}function gr(t,e){if(t===e)return!0;const n=Is(t);if(n!==Is(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return nc(t).isEqual(nc(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=Ri(i.timestampValue),a=Ri(s.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,s){return Cs(i.bytesValue).isEqual(Cs(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,s){return it(i.geoPointValue.latitude)===it(s.geoPointValue.latitude)&&it(i.geoPointValue.longitude)===it(s.geoPointValue.longitude)}(t,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return it(i.integerValue)===it(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=it(i.doubleValue),a=it(s.doubleValue);return o===a?Qd(o)===Qd(a):isNaN(o)&&isNaN(a)}return!1}(t,e);case 9:return Qo(t.arrayValue.values||[],e.arrayValue.values||[],gr);case 10:return function(i,s){const o=i.mapValue.fields||{},a=s.mapValue.fields||{};if(x1(o)!==x1(a))return!1;for(const l in o)if(o.hasOwnProperty(l)&&(a[l]===void 0||!gr(o[l],a[l])))return!1;return!0}(t,e);default:return se()}}function ic(t,e){return(t.values||[]).find(n=>gr(n,e))!==void 0}function Yo(t,e){if(t===e)return 0;const n=Is(t),r=Is(e);if(n!==r)return Ee(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return Ee(t.booleanValue,e.booleanValue);case 2:return function(s,o){const a=it(s.integerValue||s.doubleValue),l=it(o.integerValue||o.doubleValue);return a<l?-1:a>l?1:a===l?0:isNaN(a)?isNaN(l)?0:-1:1}(t,e);case 3:return b1(t.timestampValue,e.timestampValue);case 4:return b1(nc(t),nc(e));case 5:return Ee(t.stringValue,e.stringValue);case 6:return function(s,o){const a=Cs(s),l=Cs(o);return a.compareTo(l)}(t.bytesValue,e.bytesValue);case 7:return function(s,o){const a=s.split("/"),l=o.split("/");for(let c=0;c<a.length&&c<l.length;c++){const u=Ee(a[c],l[c]);if(u!==0)return u}return Ee(a.length,l.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,o){const a=Ee(it(s.latitude),it(o.latitude));return a!==0?a:Ee(it(s.longitude),it(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(s,o){const a=s.values||[],l=o.values||[];for(let c=0;c<a.length&&c<l.length;++c){const u=Yo(a[c],l[c]);if(u)return u}return Ee(a.length,l.length)}(t.arrayValue,e.arrayValue);case 10:return function(s,o){if(s===Tu.mapValue&&o===Tu.mapValue)return 0;if(s===Tu.mapValue)return 1;if(o===Tu.mapValue)return-1;const a=s.fields||{},l=Object.keys(a),c=o.fields||{},u=Object.keys(c);l.sort(),u.sort();for(let h=0;h<l.length&&h<u.length;++h){const m=Ee(l[h],u[h]);if(m!==0)return m;const v=Yo(a[l[h]],c[u[h]]);if(v!==0)return v}return Ee(l.length,u.length)}(t.mapValue,e.mapValue);default:throw se()}}function b1(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return Ee(t,e);const n=Ri(t),r=Ri(e),i=Ee(n.seconds,r.seconds);return i!==0?i:Ee(n.nanos,r.nanos)}function Xo(t){return dg(t)}function dg(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=Ri(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return Cs(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return ne.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",i=!0;for(const s of n.values||[])i?i=!1:r+=",",r+=dg(s);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let i="{",s=!0;for(const o of r)s?s=!1:i+=",",i+=`${o}:${dg(n.fields[o])}`;return i+"}"}(t.mapValue):se()}function C1(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function fg(t){return!!t&&"integerValue"in t}function Av(t){return!!t&&"arrayValue"in t}function I1(t){return!!t&&"nullValue"in t}function A1(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Zu(t){return!!t&&"mapValue"in t}function pl(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return ga(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=pl(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=pl(t.arrayValue.values[n]);return e}return Object.assign({},t)}function Mj(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class Cn{constructor(e){this.value=e}static empty(){return new Cn({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Zu(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=pl(n)}setAll(e){let n=bt.emptyPath(),r={},i=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const l=this.getFieldsMap(n);this.applyChanges(l,r,i),r={},i=[],n=a.popLast()}o?r[a.lastSegment()]=pl(o):i.push(a.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());Zu(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return gr(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];Zu(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){ga(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new Cn(pl(this.value))}}function LC(t){const e=[];return ga(t.fields,(n,r)=>{const i=new bt([n]);if(Zu(r)){const s=LC(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new jn(e)}/**
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
 */class Vt{constructor(e,n,r,i,s,o,a){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=a}static newInvalidDocument(e){return new Vt(e,0,le.min(),le.min(),le.min(),Cn.empty(),0)}static newFoundDocument(e,n,r,i){return new Vt(e,1,n,le.min(),r,i,0)}static newNoDocument(e,n){return new Vt(e,2,n,le.min(),le.min(),Cn.empty(),0)}static newUnknownDocument(e,n){return new Vt(e,3,n,le.min(),le.min(),Cn.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(le.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Cn.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Cn.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=le.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Vt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Vt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Yd{constructor(e,n){this.position=e,this.inclusive=n}}function P1(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=ne.comparator(ne.fromName(o.referenceValue),n.key):r=Yo(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function k1(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!gr(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class Xd{constructor(e,n="asc"){this.field=e,this.dir=n}}function Vj(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class MC{}class at extends MC{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new Fj(e,n,r):n==="array-contains"?new Uj(e,r):n==="in"?new zj(e,r):n==="not-in"?new Hj(e,r):n==="array-contains-any"?new Wj(e,r):new at(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new $j(e,r):new Bj(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(Yo(n,this.value)):n!==null&&Is(this.value)===Is(n)&&this.matchesComparison(Yo(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return se()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Gn extends MC{constructor(e,n){super(),this.filters=e,this.op=n,this.ue=null}static create(e,n){return new Gn(e,n)}matches(e){return VC(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ue!==null||(this.ue=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ue}getFilters(){return Object.assign([],this.filters)}}function VC(t){return t.op==="and"}function jC(t){return jj(t)&&VC(t)}function jj(t){for(const e of t.filters)if(e instanceof Gn)return!1;return!0}function hg(t){if(t instanceof at)return t.field.canonicalString()+t.op.toString()+Xo(t.value);if(jC(t))return t.filters.map(e=>hg(e)).join(",");{const e=t.filters.map(n=>hg(n)).join(",");return`${t.op}(${e})`}}function FC(t,e){return t instanceof at?function(r,i){return i instanceof at&&r.op===i.op&&r.field.isEqual(i.field)&&gr(r.value,i.value)}(t,e):t instanceof Gn?function(r,i){return i instanceof Gn&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,o,a)=>s&&FC(o,i.filters[a]),!0):!1}(t,e):void se()}function $C(t){return t instanceof at?function(n){return`${n.field.canonicalString()} ${n.op} ${Xo(n.value)}`}(t):t instanceof Gn?function(n){return n.op.toString()+" {"+n.getFilters().map($C).join(" ,")+"}"}(t):"Filter"}class Fj extends at{constructor(e,n,r){super(e,n,r),this.key=ne.fromName(r.referenceValue)}matches(e){const n=ne.comparator(e.key,this.key);return this.matchesComparison(n)}}class $j extends at{constructor(e,n){super(e,"in",n),this.keys=BC("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class Bj extends at{constructor(e,n){super(e,"not-in",n),this.keys=BC("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function BC(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>ne.fromName(r.referenceValue))}class Uj extends at{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Av(n)&&ic(n.arrayValue,this.value)}}class zj extends at{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&ic(this.value.arrayValue,n)}}class Hj extends at{constructor(e,n){super(e,"not-in",n)}matches(e){if(ic(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!ic(this.value.arrayValue,n)}}class Wj extends at{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Av(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>ic(this.value.arrayValue,r))}}/**
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
 */class qj{constructor(e,n=null,r=[],i=[],s=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=a,this.ce=null}}function R1(t,e=null,n=[],r=[],i=null,s=null,o=null){return new qj(t,e,n,r,i,s,o)}function Pv(t){const e=ce(t);if(e.ce===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>hg(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),oh(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>Xo(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>Xo(r)).join(",")),e.ce=n}return e.ce}function kv(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!Vj(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!FC(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!k1(t.startAt,e.startAt)&&k1(t.endAt,e.endAt)}function pg(t){return ne.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
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
 */class Nc{constructor(e,n=null,r=[],i=[],s=null,o="F",a=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=l,this.le=null,this.he=null,this.Pe=null,this.startAt,this.endAt}}function Gj(t,e,n,r,i,s,o,a){return new Nc(t,e,n,r,i,s,o,a)}function Rv(t){return new Nc(t)}function O1(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function UC(t){return t.collectionGroup!==null}function ml(t){const e=ce(t);if(e.le===null){e.le=[];const n=new Set;for(const s of e.explicitOrderBy)e.le.push(s),n.add(s.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let a=new At(bt.comparator);return o.filters.forEach(l=>{l.getFlattenedFilters().forEach(c=>{c.isInequality()&&(a=a.add(c.field))})}),a})(e).forEach(s=>{n.has(s.canonicalString())||s.isKeyField()||e.le.push(new Xd(s,r))}),n.has(bt.keyField().canonicalString())||e.le.push(new Xd(bt.keyField(),r))}return e.le}function pr(t){const e=ce(t);return e.he||(e.he=Kj(e,ml(t))),e.he}function Kj(t,e){if(t.limitType==="F")return R1(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new Xd(i.field,s)});const n=t.endAt?new Yd(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new Yd(t.startAt.position,t.startAt.inclusive):null;return R1(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function mg(t,e){const n=t.filters.concat([e]);return new Nc(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function gg(t,e,n){return new Nc(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function ah(t,e){return kv(pr(t),pr(e))&&t.limitType===e.limitType}function zC(t){return`${Pv(pr(t))}|lt:${t.limitType}`}function no(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(i=>$C(i)).join(", ")}]`),oh(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(i=>Xo(i)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(i=>Xo(i)).join(",")),`Target(${r})`}(pr(t))}; limitType=${t.limitType})`}function lh(t,e){return e.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):ne.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(t,e)&&function(r,i){for(const s of ml(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(t,e)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(t,e)&&function(r,i){return!(r.startAt&&!function(o,a,l){const c=P1(o,a,l);return o.inclusive?c<=0:c<0}(r.startAt,ml(r),i)||r.endAt&&!function(o,a,l){const c=P1(o,a,l);return o.inclusive?c>=0:c>0}(r.endAt,ml(r),i))}(t,e)}function Qj(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function HC(t){return(e,n)=>{let r=!1;for(const i of ml(t)){const s=Yj(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function Yj(t,e,n){const r=t.field.isKeyField()?ne.comparator(e.key,n.key):function(s,o,a){const l=o.data.field(s),c=a.data.field(s);return l!==null&&c!==null?Yo(l,c):se()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return se()}}/**
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
 */class ya{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){ga(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return DC(this.inner)}size(){return this.innerSize}}/**
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
 */const Xj=new qe(ne.comparator);function zr(){return Xj}const WC=new qe(ne.comparator);function Ja(...t){let e=WC;for(const n of t)e=e.insert(n.key,n);return e}function qC(t){let e=WC;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function as(){return gl()}function GC(){return gl()}function gl(){return new ya(t=>t.toString(),(t,e)=>t.isEqual(e))}const Jj=new qe(ne.comparator),Zj=new At(ne.comparator);function he(...t){let e=Zj;for(const n of t)e=e.add(n);return e}const eF=new At(Ee);function tF(){return eF}/**
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
 */function KC(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Qd(e)?"-0":e}}function QC(t){return{integerValue:""+t}}function nF(t,e){return Dj(e)?QC(e):KC(t,e)}/**
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
 */class ch{constructor(){this._=void 0}}function rF(t,e,n){return t instanceof Jd?function(i,s){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&Cv(s)&&(s=Iv(s)),s&&(o.fields.__previous_value__=s),{mapValue:o}}(n,e):t instanceof sc?XC(t,e):t instanceof oc?JC(t,e):function(i,s){const o=YC(i,s),a=D1(o)+D1(i.Ie);return fg(o)&&fg(i.Ie)?QC(a):KC(i.serializer,a)}(t,e)}function iF(t,e,n){return t instanceof sc?XC(t,e):t instanceof oc?JC(t,e):n}function YC(t,e){return t instanceof Zd?function(r){return fg(r)||function(s){return!!s&&"doubleValue"in s}(r)}(e)?e:{integerValue:0}:null}class Jd extends ch{}class sc extends ch{constructor(e){super(),this.elements=e}}function XC(t,e){const n=ZC(e);for(const r of t.elements)n.some(i=>gr(i,r))||n.push(r);return{arrayValue:{values:n}}}class oc extends ch{constructor(e){super(),this.elements=e}}function JC(t,e){let n=ZC(e);for(const r of t.elements)n=n.filter(i=>!gr(i,r));return{arrayValue:{values:n}}}class Zd extends ch{constructor(e,n){super(),this.serializer=e,this.Ie=n}}function D1(t){return it(t.integerValue||t.doubleValue)}function ZC(t){return Av(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function sF(t,e){return t.field.isEqual(e.field)&&function(r,i){return r instanceof sc&&i instanceof sc||r instanceof oc&&i instanceof oc?Qo(r.elements,i.elements,gr):r instanceof Zd&&i instanceof Zd?gr(r.Ie,i.Ie):r instanceof Jd&&i instanceof Jd}(t.transform,e.transform)}class oF{constructor(e,n){this.version=e,this.transformResults=n}}class Un{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Un}static exists(e){return new Un(void 0,e)}static updateTime(e){return new Un(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function ed(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class uh{}function eI(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new Ov(t.key,Un.none()):new Lc(t.key,t.data,Un.none());{const n=t.data,r=Cn.empty();let i=new At(bt.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new Fs(t.key,r,new jn(i.toArray()),Un.none())}}function aF(t,e,n){t instanceof Lc?function(i,s,o){const a=i.value.clone(),l=L1(i.fieldTransforms,s,o.transformResults);a.setAll(l),s.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(t,e,n):t instanceof Fs?function(i,s,o){if(!ed(i.precondition,s))return void s.convertToUnknownDocument(o.version);const a=L1(i.fieldTransforms,s,o.transformResults),l=s.data;l.setAll(tI(i)),l.setAll(a),s.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function yl(t,e,n,r){return t instanceof Lc?function(s,o,a,l){if(!ed(s.precondition,o))return a;const c=s.value.clone(),u=M1(s.fieldTransforms,l,o);return c.setAll(u),o.convertToFoundDocument(o.version,c).setHasLocalMutations(),null}(t,e,n,r):t instanceof Fs?function(s,o,a,l){if(!ed(s.precondition,o))return a;const c=M1(s.fieldTransforms,l,o),u=o.data;return u.setAll(tI(s)),u.setAll(c),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),a===null?null:a.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(h=>h.field))}(t,e,n,r):function(s,o,a){return ed(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(t,e,n)}function lF(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=YC(r.transform,i||null);s!=null&&(n===null&&(n=Cn.empty()),n.set(r.field,s))}return n||null}function N1(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&Qo(r,i,(s,o)=>sF(s,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Lc extends uh{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Fs extends uh{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function tI(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function L1(t,e,n){const r=new Map;Ve(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,a=e.data.field(s.field);r.set(s.field,iF(o,a,n[i]))}return r}function M1(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,rF(s,o,e))}return r}class Ov extends uh{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class cF extends uh{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class uF{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&aF(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=yl(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=yl(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=GC();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let a=this.applyToLocalView(o,s.mutatedFields);a=n.has(i.key)?null:a;const l=eI(o,a);l!==null&&r.set(i.key,l),o.isValidDocument()||o.convertToNoDocument(le.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),he())}isEqual(e){return this.batchId===e.batchId&&Qo(this.mutations,e.mutations,(n,r)=>N1(n,r))&&Qo(this.baseMutations,e.baseMutations,(n,r)=>N1(n,r))}}class Dv{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){Ve(e.mutations.length===r.length);let i=function(){return Jj}();const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new Dv(e,n,r,i)}}/**
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
 */class dF{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class fF{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
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
 */var rt,ge;function hF(t){switch(t){default:return se();case $.CANCELLED:case $.UNKNOWN:case $.DEADLINE_EXCEEDED:case $.RESOURCE_EXHAUSTED:case $.INTERNAL:case $.UNAVAILABLE:case $.UNAUTHENTICATED:return!1;case $.INVALID_ARGUMENT:case $.NOT_FOUND:case $.ALREADY_EXISTS:case $.PERMISSION_DENIED:case $.FAILED_PRECONDITION:case $.ABORTED:case $.OUT_OF_RANGE:case $.UNIMPLEMENTED:case $.DATA_LOSS:return!0}}function nI(t){if(t===void 0)return Ur("GRPC error has no .code"),$.UNKNOWN;switch(t){case rt.OK:return $.OK;case rt.CANCELLED:return $.CANCELLED;case rt.UNKNOWN:return $.UNKNOWN;case rt.DEADLINE_EXCEEDED:return $.DEADLINE_EXCEEDED;case rt.RESOURCE_EXHAUSTED:return $.RESOURCE_EXHAUSTED;case rt.INTERNAL:return $.INTERNAL;case rt.UNAVAILABLE:return $.UNAVAILABLE;case rt.UNAUTHENTICATED:return $.UNAUTHENTICATED;case rt.INVALID_ARGUMENT:return $.INVALID_ARGUMENT;case rt.NOT_FOUND:return $.NOT_FOUND;case rt.ALREADY_EXISTS:return $.ALREADY_EXISTS;case rt.PERMISSION_DENIED:return $.PERMISSION_DENIED;case rt.FAILED_PRECONDITION:return $.FAILED_PRECONDITION;case rt.ABORTED:return $.ABORTED;case rt.OUT_OF_RANGE:return $.OUT_OF_RANGE;case rt.UNIMPLEMENTED:return $.UNIMPLEMENTED;case rt.DATA_LOSS:return $.DATA_LOSS;default:return se()}}(ge=rt||(rt={}))[ge.OK=0]="OK",ge[ge.CANCELLED=1]="CANCELLED",ge[ge.UNKNOWN=2]="UNKNOWN",ge[ge.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ge[ge.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ge[ge.NOT_FOUND=5]="NOT_FOUND",ge[ge.ALREADY_EXISTS=6]="ALREADY_EXISTS",ge[ge.PERMISSION_DENIED=7]="PERMISSION_DENIED",ge[ge.UNAUTHENTICATED=16]="UNAUTHENTICATED",ge[ge.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ge[ge.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ge[ge.ABORTED=10]="ABORTED",ge[ge.OUT_OF_RANGE=11]="OUT_OF_RANGE",ge[ge.UNIMPLEMENTED=12]="UNIMPLEMENTED",ge[ge.INTERNAL=13]="INTERNAL",ge[ge.UNAVAILABLE=14]="UNAVAILABLE",ge[ge.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function pF(){return new TextEncoder}/**
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
 */const mF=new Ro([4294967295,4294967295],0);function V1(t){const e=pF().encode(t),n=new vj;return n.update(e),new Uint8Array(n.digest())}function j1(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new Ro([n,r],0),new Ro([i,s],0)]}class Nv{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new Za(`Invalid padding: ${n}`);if(r<0)throw new Za(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Za(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new Za(`Invalid padding when bitmap length is 0: ${n}`);this.Te=8*e.length-n,this.Ee=Ro.fromNumber(this.Te)}de(e,n,r){let i=e.add(n.multiply(Ro.fromNumber(r)));return i.compare(mF)===1&&(i=new Ro([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Ee).toNumber()}Ae(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Te===0)return!1;const n=V1(e),[r,i]=j1(n);for(let s=0;s<this.hashCount;s++){const o=this.de(r,i,s);if(!this.Ae(o))return!1}return!0}static create(e,n,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new Nv(s,i,n);return r.forEach(a=>o.insert(a)),o}insert(e){if(this.Te===0)return;const n=V1(e),[r,i]=j1(n);for(let s=0;s<this.hashCount;s++){const o=this.de(r,i,s);this.Re(o)}}Re(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class Za extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class dh{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,Mc.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new dh(le.min(),i,new qe(Ee),zr(),he())}}class Mc{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new Mc(r,n,he(),he(),he())}}/**
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
 */class td{constructor(e,n,r,i){this.Ve=e,this.removedTargetIds=n,this.key=r,this.me=i}}class rI{constructor(e,n){this.targetId=e,this.fe=n}}class iI{constructor(e,n,r=Ut.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class F1{constructor(){this.ge=0,this.pe=B1(),this.ye=Ut.EMPTY_BYTE_STRING,this.we=!1,this.Se=!0}get current(){return this.we}get resumeToken(){return this.ye}get be(){return this.ge!==0}get De(){return this.Se}Ce(e){e.approximateByteSize()>0&&(this.Se=!0,this.ye=e)}ve(){let e=he(),n=he(),r=he();return this.pe.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:se()}}),new Mc(this.ye,this.we,e,n,r)}Fe(){this.Se=!1,this.pe=B1()}Me(e,n){this.Se=!0,this.pe=this.pe.insert(e,n)}xe(e){this.Se=!0,this.pe=this.pe.remove(e)}Oe(){this.ge+=1}Ne(){this.ge-=1}Be(){this.Se=!0,this.we=!0}}class gF{constructor(e){this.Le=e,this.ke=new Map,this.qe=zr(),this.Qe=$1(),this.Ke=new qe(Ee)}$e(e){for(const n of e.Ve)e.me&&e.me.isFoundDocument()?this.Ue(n,e.me):this.We(n,e.key,e.me);for(const n of e.removedTargetIds)this.We(n,e.key,e.me)}Ge(e){this.forEachTarget(e,n=>{const r=this.ze(n);switch(e.state){case 0:this.je(n)&&r.Ce(e.resumeToken);break;case 1:r.Ne(),r.be||r.Fe(),r.Ce(e.resumeToken);break;case 2:r.Ne(),r.be||this.removeTarget(n);break;case 3:this.je(n)&&(r.Be(),r.Ce(e.resumeToken));break;case 4:this.je(n)&&(this.He(n),r.Ce(e.resumeToken));break;default:se()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.ke.forEach((r,i)=>{this.je(i)&&n(i)})}Je(e){const n=e.targetId,r=e.fe.count,i=this.Ye(n);if(i){const s=i.target;if(pg(s))if(r===0){const o=new ne(s.path);this.We(n,o,Vt.newNoDocument(o,le.min()))}else Ve(r===1);else{const o=this.Ze(n);if(o!==r){const a=this.Xe(e),l=a?this.et(a,e,o):1;if(l!==0){this.He(n);const c=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ke=this.Ke.insert(n,c)}}}}}Xe(e){const n=e.fe.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=n;let o,a;try{o=Cs(r).toUint8Array()}catch(l){if(l instanceof NC)return Ko("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw l}try{a=new Nv(o,i,s)}catch(l){return Ko(l instanceof Za?"BloomFilter error: ":"Applying bloom filter failed: ",l),null}return a.Te===0?null:a}et(e,n,r){return n.fe.count===r-this.rt(e,n.targetId)?0:2}rt(e,n){const r=this.Le.getRemoteKeysForTarget(n);let i=0;return r.forEach(s=>{const o=this.Le.nt(),a=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;e.mightContain(a)||(this.We(n,s,null),i++)}),i}it(e){const n=new Map;this.ke.forEach((s,o)=>{const a=this.Ye(o);if(a){if(s.current&&pg(a.target)){const l=new ne(a.target.path);this.qe.get(l)!==null||this.st(o,l)||this.We(o,l,Vt.newNoDocument(l,e))}s.De&&(n.set(o,s.ve()),s.Fe())}});let r=he();this.Qe.forEach((s,o)=>{let a=!0;o.forEachWhile(l=>{const c=this.Ye(l);return!c||c.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(s))}),this.qe.forEach((s,o)=>o.setReadTime(e));const i=new dh(e,n,this.Ke,this.qe,r);return this.qe=zr(),this.Qe=$1(),this.Ke=new qe(Ee),i}Ue(e,n){if(!this.je(e))return;const r=this.st(e,n.key)?2:0;this.ze(e).Me(n.key,r),this.qe=this.qe.insert(n.key,n),this.Qe=this.Qe.insert(n.key,this.ot(n.key).add(e))}We(e,n,r){if(!this.je(e))return;const i=this.ze(e);this.st(e,n)?i.Me(n,1):i.xe(n),this.Qe=this.Qe.insert(n,this.ot(n).delete(e)),r&&(this.qe=this.qe.insert(n,r))}removeTarget(e){this.ke.delete(e)}Ze(e){const n=this.ze(e).ve();return this.Le.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Oe(e){this.ze(e).Oe()}ze(e){let n=this.ke.get(e);return n||(n=new F1,this.ke.set(e,n)),n}ot(e){let n=this.Qe.get(e);return n||(n=new At(Ee),this.Qe=this.Qe.insert(e,n)),n}je(e){const n=this.Ye(e)!==null;return n||Z("WatchChangeAggregator","Detected inactive target",e),n}Ye(e){const n=this.ke.get(e);return n&&n.be?null:this.Le._t(e)}He(e){this.ke.set(e,new F1),this.Le.getRemoteKeysForTarget(e).forEach(n=>{this.We(e,n,null)})}st(e,n){return this.Le.getRemoteKeysForTarget(e).has(n)}}function $1(){return new qe(ne.comparator)}function B1(){return new qe(ne.comparator)}const yF=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),vF=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),wF=(()=>({and:"AND",or:"OR"}))();class _F{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function yg(t,e){return t.useProto3Json||oh(e)?e:{value:e}}function ef(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function sI(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function EF(t,e){return ef(t,e.toTimestamp())}function mr(t){return Ve(!!t),le.fromTimestamp(function(n){const r=Ri(n);return new dt(r.seconds,r.nanos)}(t))}function Lv(t,e){return function(r){return new Le(["projects",r.projectId,"databases",r.database])}(t).child("documents").child(e).canonicalString()}function oI(t){const e=Le.fromString(t);return Ve(uI(e)),e}function vg(t,e){return Lv(t.databaseId,e.path)}function Cp(t,e){const n=oI(e);if(n.get(1)!==t.databaseId.projectId)throw new J($.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new J($.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new ne(aI(n))}function wg(t,e){return Lv(t.databaseId,e)}function TF(t){const e=oI(t);return e.length===4?Le.emptyPath():aI(e)}function _g(t){return new Le(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function aI(t){return Ve(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function U1(t,e,n){return{name:vg(t,e),fields:n.value.mapValue.fields}}function xF(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:se()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(c,u){return c.useProto3Json?(Ve(u===void 0||typeof u=="string"),Ut.fromBase64String(u||"")):(Ve(u===void 0||u instanceof Uint8Array),Ut.fromUint8Array(u||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(c){const u=c.code===void 0?$.UNKNOWN:nI(c.code);return new J(u,c.message||"")}(o);n=new iI(r,i,s,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=Cp(t,r.document.name),s=mr(r.document.updateTime),o=r.document.createTime?mr(r.document.createTime):le.min(),a=new Cn({mapValue:{fields:r.document.fields}}),l=Vt.newFoundDocument(i,s,o,a),c=r.targetIds||[],u=r.removedTargetIds||[];n=new td(c,u,l.key,l)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=Cp(t,r.document),s=r.readTime?mr(r.readTime):le.min(),o=Vt.newNoDocument(i,s),a=r.removedTargetIds||[];n=new td([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=Cp(t,r.document),s=r.removedTargetIds||[];n=new td([],s,i,null)}else{if(!("filter"in e))return se();{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new fF(i,s),a=r.targetId;n=new rI(a,o)}}return n}function SF(t,e){let n;if(e instanceof Lc)n={update:U1(t,e.key,e.value)};else if(e instanceof Ov)n={delete:vg(t,e.key)};else if(e instanceof Fs)n={update:U1(t,e.key,e.data),updateMask:DF(e.fieldMask)};else{if(!(e instanceof cF))return se();n={verify:vg(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(s,o){const a=o.transform;if(a instanceof Jd)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof sc)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof oc)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof Zd)return{fieldPath:o.field.canonicalString(),increment:a.Ie};throw se()}(0,r))),e.precondition.isNone||(n.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:EF(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:se()}(t,e.precondition)),n}function bF(t,e){return t&&t.length>0?(Ve(e!==void 0),t.map(n=>function(i,s){let o=i.updateTime?mr(i.updateTime):mr(s);return o.isEqual(le.min())&&(o=mr(s)),new oF(o,i.transformResults||[])}(n,e))):[]}function CF(t,e){return{documents:[wg(t,e.path)]}}function IF(t,e){const n={structuredQuery:{}},r=e.path;e.collectionGroup!==null?(n.parent=wg(t,r),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=wg(t,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const i=function(l){if(l.length!==0)return cI(Gn.create(l,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const s=function(l){if(l.length!==0)return l.map(c=>function(h){return{field:ro(h.field),direction:kF(h.dir)}}(c))}(e.orderBy);s&&(n.structuredQuery.orderBy=s);const o=yg(t,e.limit);return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt=function(l){return{before:l.inclusive,values:l.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(l){return{before:!l.inclusive,values:l.position}}(e.endAt)),n}function AF(t){let e=TF(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){Ve(r===1);const u=n.from[0];u.allDescendants?i=u.collectionId:e=e.child(u.collectionId)}let s=[];n.where&&(s=function(h){const m=lI(h);return m instanceof Gn&&jC(m)?m.getFilters():[m]}(n.where));let o=[];n.orderBy&&(o=function(h){return h.map(m=>function(x){return new Xd(io(x.field),function(S){switch(S){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(x.direction))}(m))}(n.orderBy));let a=null;n.limit&&(a=function(h){let m;return m=typeof h=="object"?h.value:h,oh(m)?null:m}(n.limit));let l=null;n.startAt&&(l=function(h){const m=!!h.before,v=h.values||[];return new Yd(v,m)}(n.startAt));let c=null;return n.endAt&&(c=function(h){const m=!h.before,v=h.values||[];return new Yd(v,m)}(n.endAt)),Gj(e,i,o,s,a,"F",l,c)}function PF(t,e){const n=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return se()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function lI(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=io(n.unaryFilter.field);return at.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=io(n.unaryFilter.field);return at.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=io(n.unaryFilter.field);return at.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=io(n.unaryFilter.field);return at.create(o,"!=",{nullValue:"NULL_VALUE"});default:return se()}}(t):t.fieldFilter!==void 0?function(n){return at.create(io(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return se()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return Gn.create(n.compositeFilter.filters.map(r=>lI(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return se()}}(n.compositeFilter.op))}(t):se()}function kF(t){return yF[t]}function RF(t){return vF[t]}function OF(t){return wF[t]}function ro(t){return{fieldPath:t.canonicalString()}}function io(t){return bt.fromServerFormat(t.fieldPath)}function cI(t){return t instanceof at?function(n){if(n.op==="=="){if(A1(n.value))return{unaryFilter:{field:ro(n.field),op:"IS_NAN"}};if(I1(n.value))return{unaryFilter:{field:ro(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(A1(n.value))return{unaryFilter:{field:ro(n.field),op:"IS_NOT_NAN"}};if(I1(n.value))return{unaryFilter:{field:ro(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:ro(n.field),op:RF(n.op),value:n.value}}}(t):t instanceof Gn?function(n){const r=n.getFilters().map(i=>cI(i));return r.length===1?r[0]:{compositeFilter:{op:OF(n.op),filters:r}}}(t):se()}function DF(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function uI(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */class ui{constructor(e,n,r,i,s=le.min(),o=le.min(),a=Ut.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=l}withSequenceNumber(e){return new ui(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new ui(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new ui(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new ui(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class NF{constructor(e){this.ut=e}}function LF(t){const e=AF({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?gg(e,e.limit,"L"):e}/**
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
 */class MF{constructor(){this.on=new VF}addToCollectionParentIndex(e,n){return this.on.add(n),z.resolve()}getCollectionParents(e,n){return z.resolve(this.on.getEntries(n))}addFieldIndex(e,n){return z.resolve()}deleteFieldIndex(e,n){return z.resolve()}deleteAllFieldIndexes(e){return z.resolve()}createTargetIndexes(e,n){return z.resolve()}getDocumentsMatchingTarget(e,n){return z.resolve(null)}getIndexType(e,n){return z.resolve(0)}getFieldIndexes(e,n){return z.resolve([])}getNextCollectionGroupToUpdate(e){return z.resolve(null)}getMinOffset(e,n){return z.resolve(ki.min())}getMinOffsetFromCollectionGroup(e,n){return z.resolve(ki.min())}updateCollectionGroup(e,n,r){return z.resolve()}updateIndexEntries(e,n){return z.resolve()}}class VF{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new At(Le.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new At(Le.comparator)).toArray()}}/**
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
 */class Jo{constructor(e){this.xn=e}next(){return this.xn+=2,this.xn}static On(){return new Jo(0)}static Nn(){return new Jo(-1)}}/**
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
 */class jF{constructor(){this.changes=new ya(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Vt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?z.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class FF{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class $F{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&yl(r.mutation,i,jn.empty(),dt.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,he()).next(()=>r))}getLocalViewOfDocuments(e,n,r=he()){const i=as();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=Ja();return s.forEach((a,l)=>{o=o.insert(a,l.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=as();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,he()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,r,i){let s=zr();const o=gl(),a=function(){return gl()}();return n.forEach((l,c)=>{const u=r.get(c.key);i.has(c.key)&&(u===void 0||u.mutation instanceof Fs)?s=s.insert(c.key,c):u!==void 0?(o.set(c.key,u.mutation.getFieldMask()),yl(u.mutation,c,u.mutation.getFieldMask(),dt.now())):o.set(c.key,jn.empty())}),this.recalculateAndSaveOverlays(e,s).next(l=>(l.forEach((c,u)=>o.set(c,u)),n.forEach((c,u)=>{var h;return a.set(c,new FF(u,(h=o.get(c))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,n){const r=gl();let i=new qe((o,a)=>o-a),s=he();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(l=>{const c=n.get(l);if(c===null)return;let u=r.get(l)||jn.empty();u=a.applyToLocalView(c,u),r.set(l,u);const h=(i.get(a.batchId)||he()).add(l);i=i.insert(a.batchId,h)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const l=a.getNext(),c=l.key,u=l.value,h=GC();u.forEach(m=>{if(!s.has(m)){const v=eI(n.get(m),r.get(m));v!==null&&h.set(m,v),s=s.add(m)}}),o.push(this.documentOverlayCache.saveOverlays(e,c,h))}return z.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,i){return function(o){return ne.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):UC(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,i):this.getDocumentsMatchingCollectionQuery(e,n,r,i)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):z.resolve(as());let a=-1,l=s;return o.next(c=>z.forEach(c,(u,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),s.get(u)?z.resolve():this.remoteDocumentCache.getEntry(e,u).next(m=>{l=l.insert(u,m)}))).next(()=>this.populateOverlays(e,c,s)).next(()=>this.computeViews(e,l,c,he())).next(u=>({batchId:a,changes:qC(u)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new ne(n)).next(r=>{let i=Ja();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r,i){const s=n.collectionGroup;let o=Ja();return this.indexManager.getCollectionParents(e,s).next(a=>z.forEach(a,l=>{const c=function(h,m){return new Nc(m,null,h.explicitOrderBy.slice(),h.filters.slice(),h.limit,h.limitType,h.startAt,h.endAt)}(n,l.child(s));return this.getDocumentsMatchingCollectionQuery(e,c,r,i).next(u=>{u.forEach((h,m)=>{o=o.insert(h,m)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(s=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,s,i))).next(o=>{s.forEach((l,c)=>{const u=c.getKey();o.get(u)===null&&(o=o.insert(u,Vt.newInvalidDocument(u)))});let a=Ja();return o.forEach((l,c)=>{const u=s.get(l);u!==void 0&&yl(u.mutation,c,jn.empty(),dt.now()),lh(n,c)&&(a=a.insert(l,c))}),a})}}/**
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
 */class BF{constructor(e){this.serializer=e,this.ur=new Map,this.cr=new Map}getBundleMetadata(e,n){return z.resolve(this.ur.get(n))}saveBundleMetadata(e,n){return this.ur.set(n.id,function(i){return{id:i.id,version:i.version,createTime:mr(i.createTime)}}(n)),z.resolve()}getNamedQuery(e,n){return z.resolve(this.cr.get(n))}saveNamedQuery(e,n){return this.cr.set(n.name,function(i){return{name:i.name,query:LF(i.bundledQuery),readTime:mr(i.readTime)}}(n)),z.resolve()}}/**
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
 */class UF{constructor(){this.overlays=new qe(ne.comparator),this.lr=new Map}getOverlay(e,n){return z.resolve(this.overlays.get(n))}getOverlays(e,n){const r=as();return z.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.lt(e,n,s)}),z.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.lr.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.lr.delete(r)),z.resolve()}getOverlaysForCollection(e,n,r){const i=as(),s=n.length+1,o=new ne(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const l=a.getNext().value,c=l.getKey();if(!n.isPrefixOf(c.path))break;c.path.length===s&&l.largestBatchId>r&&i.set(l.getKey(),l)}return z.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new qe((c,u)=>c-u);const o=this.overlays.getIterator();for(;o.hasNext();){const c=o.getNext().value;if(c.getKey().getCollectionGroup()===n&&c.largestBatchId>r){let u=s.get(c.largestBatchId);u===null&&(u=as(),s=s.insert(c.largestBatchId,u)),u.set(c.getKey(),c)}}const a=as(),l=s.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((c,u)=>a.set(c,u)),!(a.size()>=i)););return z.resolve(a)}lt(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.lr.get(i.largestBatchId).delete(r.key);this.lr.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new dF(n,r));let s=this.lr.get(n);s===void 0&&(s=he(),this.lr.set(n,s)),this.lr.set(n,s.add(r.key))}}/**
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
 */class Mv{constructor(){this.hr=new At(ht.Pr),this.Ir=new At(ht.Tr)}isEmpty(){return this.hr.isEmpty()}addReference(e,n){const r=new ht(e,n);this.hr=this.hr.add(r),this.Ir=this.Ir.add(r)}Er(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.dr(new ht(e,n))}Ar(e,n){e.forEach(r=>this.removeReference(r,n))}Rr(e){const n=new ne(new Le([])),r=new ht(n,e),i=new ht(n,e+1),s=[];return this.Ir.forEachInRange([r,i],o=>{this.dr(o),s.push(o.key)}),s}Vr(){this.hr.forEach(e=>this.dr(e))}dr(e){this.hr=this.hr.delete(e),this.Ir=this.Ir.delete(e)}mr(e){const n=new ne(new Le([])),r=new ht(n,e),i=new ht(n,e+1);let s=he();return this.Ir.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new ht(e,0),r=this.hr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class ht{constructor(e,n){this.key=e,this.gr=n}static Pr(e,n){return ne.comparator(e.key,n.key)||Ee(e.gr,n.gr)}static Tr(e,n){return Ee(e.gr,n.gr)||ne.comparator(e.key,n.key)}}/**
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
 */class zF{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.pr=1,this.yr=new At(ht.Pr)}checkEmpty(e){return z.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.pr;this.pr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new uF(s,n,r,i);this.mutationQueue.push(o);for(const a of i)this.yr=this.yr.add(new ht(a.key,s)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return z.resolve(o)}lookupMutationBatch(e,n){return z.resolve(this.wr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.Sr(r),s=i<0?0:i;return z.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return z.resolve(this.mutationQueue.length===0?-1:this.pr-1)}getAllMutationBatches(e){return z.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new ht(n,0),i=new ht(n,Number.POSITIVE_INFINITY),s=[];return this.yr.forEachInRange([r,i],o=>{const a=this.wr(o.gr);s.push(a)}),z.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new At(Ee);return n.forEach(i=>{const s=new ht(i,0),o=new ht(i,Number.POSITIVE_INFINITY);this.yr.forEachInRange([s,o],a=>{r=r.add(a.gr)})}),z.resolve(this.br(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;ne.isDocumentKey(s)||(s=s.child(""));const o=new ht(new ne(s),0);let a=new At(Ee);return this.yr.forEachWhile(l=>{const c=l.key.path;return!!r.isPrefixOf(c)&&(c.length===i&&(a=a.add(l.gr)),!0)},o),z.resolve(this.br(a))}br(e){const n=[];return e.forEach(r=>{const i=this.wr(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){Ve(this.Dr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.yr;return z.forEach(n.mutations,i=>{const s=new ht(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.yr=r})}Fn(e){}containsKey(e,n){const r=new ht(n,0),i=this.yr.firstAfterOrEqual(r);return z.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,z.resolve()}Dr(e,n){return this.Sr(e)}Sr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}wr(e){const n=this.Sr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class HF{constructor(e){this.Cr=e,this.docs=function(){return new qe(ne.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.Cr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return z.resolve(r?r.document.mutableCopy():Vt.newInvalidDocument(n))}getEntries(e,n){let r=zr();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():Vt.newInvalidDocument(i))}),z.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let s=zr();const o=n.path,a=new ne(o.child("")),l=this.docs.getIteratorFrom(a);for(;l.hasNext();){const{key:c,value:{document:u}}=l.getNext();if(!o.isPrefixOf(c.path))break;c.path.length>o.length+1||kj(Pj(u),r)<=0||(i.has(u.key)||lh(n,u))&&(s=s.insert(u.key,u.mutableCopy()))}return z.resolve(s)}getAllFromCollectionGroup(e,n,r,i){se()}vr(e,n){return z.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new WF(this)}getSize(e){return z.resolve(this.size)}}class WF extends jF{constructor(e){super(),this._r=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this._r.addEntry(e,i)):this._r.removeEntry(r)}),z.waitFor(n)}getFromCache(e,n){return this._r.getEntry(e,n)}getAllFromCache(e,n){return this._r.getEntries(e,n)}}/**
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
 */class qF{constructor(e){this.persistence=e,this.Fr=new ya(n=>Pv(n),kv),this.lastRemoteSnapshotVersion=le.min(),this.highestTargetId=0,this.Mr=0,this.Or=new Mv,this.targetCount=0,this.Nr=Jo.On()}forEachTarget(e,n){return this.Fr.forEach((r,i)=>n(i)),z.resolve()}getLastRemoteSnapshotVersion(e){return z.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return z.resolve(this.Mr)}allocateTargetId(e){return this.highestTargetId=this.Nr.next(),z.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Mr&&(this.Mr=n),z.resolve()}kn(e){this.Fr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Nr=new Jo(n),this.highestTargetId=n),e.sequenceNumber>this.Mr&&(this.Mr=e.sequenceNumber)}addTargetData(e,n){return this.kn(n),this.targetCount+=1,z.resolve()}updateTargetData(e,n){return this.kn(n),z.resolve()}removeTargetData(e,n){return this.Fr.delete(n.target),this.Or.Rr(n.targetId),this.targetCount-=1,z.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.Fr.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Fr.delete(o),s.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),z.waitFor(s).next(()=>i)}getTargetCount(e){return z.resolve(this.targetCount)}getTargetData(e,n){const r=this.Fr.get(n)||null;return z.resolve(r)}addMatchingKeys(e,n,r){return this.Or.Er(n,r),z.resolve()}removeMatchingKeys(e,n,r){this.Or.Ar(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),z.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.Or.Rr(n),z.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Or.mr(n);return z.resolve(r)}containsKey(e,n){return z.resolve(this.Or.containsKey(n))}}/**
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
 */class GF{constructor(e,n){this.Br={},this.overlays={},this.Lr=new bv(0),this.kr=!1,this.kr=!0,this.referenceDelegate=e(this),this.qr=new qF(this),this.indexManager=new MF,this.remoteDocumentCache=function(i){return new HF(i)}(r=>this.referenceDelegate.Qr(r)),this.serializer=new NF(n),this.Kr=new BF(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.kr=!1,Promise.resolve()}get started(){return this.kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new UF,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.Br[e.toKey()];return r||(r=new zF(n,this.referenceDelegate),this.Br[e.toKey()]=r),r}getTargetCache(){return this.qr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Kr}runTransaction(e,n,r){Z("MemoryPersistence","Starting transaction:",e);const i=new KF(this.Lr.next());return this.referenceDelegate.$r(),r(i).next(s=>this.referenceDelegate.Ur(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Wr(e,n){return z.or(Object.values(this.Br).map(r=>()=>r.containsKey(e,n)))}}class KF extends Oj{constructor(e){super(),this.currentSequenceNumber=e}}class Vv{constructor(e){this.persistence=e,this.Gr=new Mv,this.zr=null}static jr(e){return new Vv(e)}get Hr(){if(this.zr)return this.zr;throw se()}addReference(e,n,r){return this.Gr.addReference(r,n),this.Hr.delete(r.toString()),z.resolve()}removeReference(e,n,r){return this.Gr.removeReference(r,n),this.Hr.add(r.toString()),z.resolve()}markPotentiallyOrphaned(e,n){return this.Hr.add(n.toString()),z.resolve()}removeTarget(e,n){this.Gr.Rr(n.targetId).forEach(i=>this.Hr.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.Hr.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}$r(){this.zr=new Set}Ur(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return z.forEach(this.Hr,r=>{const i=ne.fromPath(r);return this.Jr(e,i).next(s=>{s||n.removeEntry(i,le.min())})}).next(()=>(this.zr=null,n.apply(e)))}updateLimboDocument(e,n){return this.Jr(e,n).next(r=>{r?this.Hr.delete(n.toString()):this.Hr.add(n.toString())})}Qr(e){return 0}Jr(e,n){return z.or([()=>z.resolve(this.Gr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Wr(e,n)])}}/**
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
 */class jv{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.ki=r,this.qi=i}static Qi(e,n){let r=he(),i=he();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new jv(e,n.fromCache,r,i)}}/**
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
 */class QF{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class YF{constructor(){this.Ki=!1,this.$i=!1,this.Ui=100,this.Wi=8}initialize(e,n){this.Gi=e,this.indexManager=n,this.Ki=!0}getDocumentsMatchingQuery(e,n,r,i){const s={result:null};return this.zi(e,n).next(o=>{s.result=o}).next(()=>{if(!s.result)return this.ji(e,n,i,r).next(o=>{s.result=o})}).next(()=>{if(s.result)return;const o=new QF;return this.Hi(e,n,o).next(a=>{if(s.result=a,this.$i)return this.Ji(e,n,o,a.size)})}).next(()=>s.result)}Ji(e,n,r,i){return r.documentReadCount<this.Ui?(ja()<=me.DEBUG&&Z("QueryEngine","SDK will not create cache indexes for query:",no(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Ui,"documents"),z.resolve()):(ja()<=me.DEBUG&&Z("QueryEngine","Query:",no(n),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.Wi*i?(ja()<=me.DEBUG&&Z("QueryEngine","The SDK decides to create cache indexes for query:",no(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,pr(n))):z.resolve())}zi(e,n){if(O1(n))return z.resolve(null);let r=pr(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=gg(n,null,"F"),r=pr(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=he(...s);return this.Gi.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(l=>{const c=this.Yi(n,a);return this.Zi(n,c,o,l.readTime)?this.zi(e,gg(n,null,"F")):this.Xi(e,c,n,l)}))})))}ji(e,n,r,i){return O1(n)||i.isEqual(le.min())?z.resolve(null):this.Gi.getDocuments(e,r).next(s=>{const o=this.Yi(n,s);return this.Zi(n,o,r,i)?z.resolve(null):(ja()<=me.DEBUG&&Z("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),no(n)),this.Xi(e,o,n,Aj(i,-1)).next(a=>a))})}Yi(e,n){let r=new At(HC(e));return n.forEach((i,s)=>{lh(e,s)&&(r=r.add(s))}),r}Zi(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Hi(e,n,r){return ja()<=me.DEBUG&&Z("QueryEngine","Using full collection scan to execute query:",no(n)),this.Gi.getDocumentsMatchingQuery(e,n,ki.min(),r)}Xi(e,n,r,i){return this.Gi.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
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
 */class XF{constructor(e,n,r,i){this.persistence=e,this.es=n,this.serializer=i,this.ts=new qe(Ee),this.ns=new ya(s=>Pv(s),kv),this.rs=new Map,this.ss=e.getRemoteDocumentCache(),this.qr=e.getTargetCache(),this.Kr=e.getBundleCache(),this.os(r)}os(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new $F(this.ss,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.ss.setIndexManager(this.indexManager),this.es.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.ts))}}function JF(t,e,n,r){return new XF(t,e,n,r)}async function dI(t,e){const n=ce(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.os(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],a=[];let l=he();for(const c of i){o.push(c.batchId);for(const u of c.mutations)l=l.add(u.key)}for(const c of s){a.push(c.batchId);for(const u of c.mutations)l=l.add(u.key)}return n.localDocuments.getDocuments(r,l).next(c=>({_s:c,removedBatchIds:o,addedBatchIds:a}))})})}function ZF(t,e){const n=ce(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.ss.newChangeBuffer({trackRemovals:!0});return function(a,l,c,u){const h=c.batch,m=h.keys();let v=z.resolve();return m.forEach(x=>{v=v.next(()=>u.getEntry(l,x)).next(g=>{const S=c.docVersions.get(x);Ve(S!==null),g.version.compareTo(S)<0&&(h.applyToRemoteDocument(g,c),g.isValidDocument()&&(g.setReadTime(c.commitVersion),u.addEntry(g)))})}),v.next(()=>a.mutationQueue.removeMutationBatch(l,h))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(a){let l=he();for(let c=0;c<a.mutationResults.length;++c)a.mutationResults[c].transformResults.length>0&&(l=l.add(a.batch.mutations[c].key));return l}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function fI(t){const e=ce(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.qr.getLastRemoteSnapshotVersion(n))}function e$(t,e){const n=ce(t),r=e.snapshotVersion;let i=n.ts;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.ss.newChangeBuffer({trackRemovals:!0});i=n.ts;const a=[];e.targetChanges.forEach((u,h)=>{const m=i.get(h);if(!m)return;a.push(n.qr.removeMatchingKeys(s,u.removedDocuments,h).next(()=>n.qr.addMatchingKeys(s,u.addedDocuments,h)));let v=m.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(h)!==null?v=v.withResumeToken(Ut.EMPTY_BYTE_STRING,le.min()).withLastLimboFreeSnapshotVersion(le.min()):u.resumeToken.approximateByteSize()>0&&(v=v.withResumeToken(u.resumeToken,r)),i=i.insert(h,v),function(g,S,w){return g.resumeToken.approximateByteSize()===0||S.snapshotVersion.toMicroseconds()-g.snapshotVersion.toMicroseconds()>=3e8?!0:w.addedDocuments.size+w.modifiedDocuments.size+w.removedDocuments.size>0}(m,v,u)&&a.push(n.qr.updateTargetData(s,v))});let l=zr(),c=he();if(e.documentUpdates.forEach(u=>{e.resolvedLimboDocuments.has(u)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(s,u))}),a.push(t$(s,o,e.documentUpdates).next(u=>{l=u.us,c=u.cs})),!r.isEqual(le.min())){const u=n.qr.getLastRemoteSnapshotVersion(s).next(h=>n.qr.setTargetsMetadata(s,s.currentSequenceNumber,r));a.push(u)}return z.waitFor(a).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,l,c)).next(()=>l)}).then(s=>(n.ts=i,s))}function t$(t,e,n){let r=he(),i=he();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=zr();return n.forEach((a,l)=>{const c=s.get(a);l.isFoundDocument()!==c.isFoundDocument()&&(i=i.add(a)),l.isNoDocument()&&l.version.isEqual(le.min())?(e.removeEntry(a,l.readTime),o=o.insert(a,l)):!c.isValidDocument()||l.version.compareTo(c.version)>0||l.version.compareTo(c.version)===0&&c.hasPendingWrites?(e.addEntry(l),o=o.insert(a,l)):Z("LocalStore","Ignoring outdated watch update for ",a,". Current version:",c.version," Watch version:",l.version)}),{us:o,cs:i}})}function n$(t,e){const n=ce(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function r$(t,e){const n=ce(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.qr.getTargetData(r,e).next(s=>s?(i=s,z.resolve(i)):n.qr.allocateTargetId(r).next(o=>(i=new ui(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.qr.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.ts.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.ts=n.ts.insert(r.targetId,r),n.ns.set(e,r.targetId)),r})}async function Eg(t,e,n){const r=ce(t),i=r.ts.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!Dc(o))throw o;Z("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.ts=r.ts.remove(e),r.ns.delete(i.target)}function z1(t,e,n){const r=ce(t);let i=le.min(),s=he();return r.persistence.runTransaction("Execute query","readwrite",o=>function(l,c,u){const h=ce(l),m=h.ns.get(u);return m!==void 0?z.resolve(h.ts.get(m)):h.qr.getTargetData(c,u)}(r,o,pr(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,r.qr.getMatchingKeysForTargetId(o,a.targetId).next(l=>{s=l})}).next(()=>r.es.getDocumentsMatchingQuery(o,e,n?i:le.min(),n?s:he())).next(a=>(i$(r,Qj(e),a),{documents:a,ls:s})))}function i$(t,e,n){let r=t.rs.get(e)||le.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.rs.set(e,r)}class H1{constructor(){this.activeTargetIds=tF()}ds(e){this.activeTargetIds=this.activeTargetIds.add(e)}As(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Es(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class s${constructor(){this.eo=new H1,this.no={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this.eo.ds(e),this.no[e]||"not-current"}updateQueryState(e,n,r){this.no[e]=n}removeLocalQueryTarget(e){this.eo.As(e)}isLocalQueryTarget(e){return this.eo.activeTargetIds.has(e)}clearQueryState(e){delete this.no[e]}getAllActiveQueryTargets(){return this.eo.activeTargetIds}isActiveQueryTarget(e){return this.eo.activeTargetIds.has(e)}start(){return this.eo=new H1,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class o${ro(e){}shutdown(){}}/**
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
 */class W1{constructor(){this.io=()=>this.so(),this.oo=()=>this._o(),this.ao=[],this.uo()}ro(e){this.ao.push(e)}shutdown(){window.removeEventListener("online",this.io),window.removeEventListener("offline",this.oo)}uo(){window.addEventListener("online",this.io),window.addEventListener("offline",this.oo)}so(){Z("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ao)e(0)}_o(){Z("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ao)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let xu=null;function Ip(){return xu===null?xu=function(){return 268435456+Math.round(2147483648*Math.random())}():xu++,"0x"+xu.toString(16)}/**
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
 */const a$={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class l${constructor(e){this.co=e.co,this.lo=e.lo}ho(e){this.Po=e}Io(e){this.To=e}onMessage(e){this.Eo=e}close(){this.lo()}send(e){this.co(e)}Ao(){this.Po()}Ro(e){this.To(e)}Vo(e){this.Eo(e)}}/**
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
 */const Dt="WebChannelConnection";class c$ extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.mo=r+"://"+n.host,this.fo=`projects/${i}/databases/${s}`,this.po=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${s}`}get yo(){return!1}wo(n,r,i,s,o){const a=Ip(),l=this.So(n,r);Z("RestConnection",`Sending RPC '${n}' ${a}:`,l,i);const c={"google-cloud-resource-prefix":this.fo,"x-goog-request-params":this.po};return this.bo(c,s,o),this.Do(n,l,c,i).then(u=>(Z("RestConnection",`Received RPC '${n}' ${a}: `,u),u),u=>{throw Ko("RestConnection",`RPC '${n}' ${a} failed with error: `,u,"url: ",l,"request:",i),u})}Co(n,r,i,s,o,a){return this.wo(n,r,i,s,o)}bo(n,r,i){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+ma}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((s,o)=>n[o]=s),i&&i.headers.forEach((s,o)=>n[o]=s)}So(n,r){const i=a$[n];return`${this.mo}/v1/${r}:${i}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Do(e,n,r,i){const s=Ip();return new Promise((o,a)=>{const l=new yj;l.setWithCredentials(!0),l.listenOnce(pj.COMPLETE,()=>{try{switch(l.getLastErrorCode()){case bp.NO_ERROR:const u=l.getResponseJson();Z(Dt,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(u)),o(u);break;case bp.TIMEOUT:Z(Dt,`RPC '${e}' ${s} timed out`),a(new J($.DEADLINE_EXCEEDED,"Request time out"));break;case bp.HTTP_ERROR:const h=l.getStatus();if(Z(Dt,`RPC '${e}' ${s} failed with status:`,h,"response text:",l.getResponseText()),h>0){let m=l.getResponseJson();Array.isArray(m)&&(m=m[0]);const v=m==null?void 0:m.error;if(v&&v.status&&v.message){const x=function(S){const w=S.toLowerCase().replace(/_/g,"-");return Object.values($).indexOf(w)>=0?w:$.UNKNOWN}(v.status);a(new J(x,v.message))}else a(new J($.UNKNOWN,"Server responded with status "+l.getStatus()))}else a(new J($.UNAVAILABLE,"Connection failed."));break;default:se()}}finally{Z(Dt,`RPC '${e}' ${s} completed.`)}});const c=JSON.stringify(i);Z(Dt,`RPC '${e}' ${s} sending request:`,i),l.send(n,"POST",c,r,15)})}vo(e,n,r){const i=Ip(),s=[this.mo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=fj(),a=hj(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},c=this.longPollingOptions.timeoutSeconds;c!==void 0&&(l.longPollingTimeout=Math.round(1e3*c)),this.useFetchStreams&&(l.xmlHttpFactory=new gj({})),this.bo(l.initMessageHeaders,n,r),l.encodeInitMessageHeaders=!0;const u=s.join("");Z(Dt,`Creating RPC '${e}' stream ${i}: ${u}`,l);const h=o.createWebChannel(u,l);let m=!1,v=!1;const x=new l$({co:S=>{v?Z(Dt,`Not sending because RPC '${e}' stream ${i} is closed:`,S):(m||(Z(Dt,`Opening RPC '${e}' stream ${i} transport.`),h.open(),m=!0),Z(Dt,`RPC '${e}' stream ${i} sending:`,S),h.send(S))},lo:()=>h.close()}),g=(S,w,p)=>{S.listen(w,y=>{try{p(y)}catch(E){setTimeout(()=>{throw E},0)}})};return g(h,_u.EventType.OPEN,()=>{v||Z(Dt,`RPC '${e}' stream ${i} transport opened.`)}),g(h,_u.EventType.CLOSE,()=>{v||(v=!0,Z(Dt,`RPC '${e}' stream ${i} transport closed`),x.Ro())}),g(h,_u.EventType.ERROR,S=>{v||(v=!0,Ko(Dt,`RPC '${e}' stream ${i} transport errored:`,S),x.Ro(new J($.UNAVAILABLE,"The operation could not be completed")))}),g(h,_u.EventType.MESSAGE,S=>{var w;if(!v){const p=S.data[0];Ve(!!p);const y=p,E=y.error||((w=y[0])===null||w===void 0?void 0:w.error);if(E){Z(Dt,`RPC '${e}' stream ${i} received error:`,E);const C=E.status;let I=function(N){const O=rt[N];if(O!==void 0)return nI(O)}(C),P=E.message;I===void 0&&(I=$.INTERNAL,P="Unknown error status: "+C+" with message "+E.message),v=!0,x.Ro(new J(I,P)),h.close()}else Z(Dt,`RPC '${e}' stream ${i} received:`,p),x.Vo(p)}}),g(a,mj.STAT_EVENT,S=>{S.stat===E1.PROXY?Z(Dt,`RPC '${e}' stream ${i} detected buffering proxy`):S.stat===E1.NOPROXY&&Z(Dt,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{x.Ao()},0),x}}function Ap(){return typeof document<"u"?document:null}/**
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
 */function fh(t){return new _F(t,!0)}/**
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
 */class hI{constructor(e,n,r=1e3,i=1.5,s=6e4){this.si=e,this.timerId=n,this.Fo=r,this.Mo=i,this.xo=s,this.Oo=0,this.No=null,this.Bo=Date.now(),this.reset()}reset(){this.Oo=0}Lo(){this.Oo=this.xo}ko(e){this.cancel();const n=Math.floor(this.Oo+this.qo()),r=Math.max(0,Date.now()-this.Bo),i=Math.max(0,n-r);i>0&&Z("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Oo} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.No=this.si.enqueueAfterDelay(this.timerId,i,()=>(this.Bo=Date.now(),e())),this.Oo*=this.Mo,this.Oo<this.Fo&&(this.Oo=this.Fo),this.Oo>this.xo&&(this.Oo=this.xo)}Qo(){this.No!==null&&(this.No.skipDelay(),this.No=null)}cancel(){this.No!==null&&(this.No.cancel(),this.No=null)}qo(){return(Math.random()-.5)*this.Oo}}/**
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
 */class pI{constructor(e,n,r,i,s,o,a,l){this.si=e,this.Ko=r,this.$o=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=l,this.state=0,this.Uo=0,this.Wo=null,this.Go=null,this.stream=null,this.zo=new hI(e,n)}jo(){return this.state===1||this.state===5||this.Ho()}Ho(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Jo()}async stop(){this.jo()&&await this.close(0)}Yo(){this.state=0,this.zo.reset()}Zo(){this.Ho()&&this.Wo===null&&(this.Wo=this.si.enqueueAfterDelay(this.Ko,6e4,()=>this.Xo()))}e_(e){this.t_(),this.stream.send(e)}async Xo(){if(this.Ho())return this.close(0)}t_(){this.Wo&&(this.Wo.cancel(),this.Wo=null)}n_(){this.Go&&(this.Go.cancel(),this.Go=null)}async close(e,n){this.t_(),this.n_(),this.zo.cancel(),this.Uo++,e!==4?this.zo.reset():n&&n.code===$.RESOURCE_EXHAUSTED?(Ur(n.toString()),Ur("Using maximum backoff delay to prevent overloading the backend."),this.zo.Lo()):n&&n.code===$.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.r_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Io(n)}r_(){}auth(){this.state=1;const e=this.i_(this.Uo),n=this.Uo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.Uo===n&&this.s_(r,i)},r=>{e(()=>{const i=new J($.UNKNOWN,"Fetching auth token failed: "+r.message);return this.o_(i)})})}s_(e,n){const r=this.i_(this.Uo);this.stream=this.__(e,n),this.stream.ho(()=>{r(()=>(this.state=2,this.Go=this.si.enqueueAfterDelay(this.$o,1e4,()=>(this.Ho()&&(this.state=3),Promise.resolve())),this.listener.ho()))}),this.stream.Io(i=>{r(()=>this.o_(i))}),this.stream.onMessage(i=>{r(()=>this.onMessage(i))})}Jo(){this.state=5,this.zo.ko(async()=>{this.state=0,this.start()})}o_(e){return Z("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}i_(e){return n=>{this.si.enqueueAndForget(()=>this.Uo===e?n():(Z("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class u$ extends pI{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}__(e,n){return this.connection.vo("Listen",e,n)}onMessage(e){this.zo.reset();const n=xF(this.serializer,e),r=function(s){if(!("targetChange"in s))return le.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?le.min():o.readTime?mr(o.readTime):le.min()}(e);return this.listener.a_(n,r)}u_(e){const n={};n.database=_g(this.serializer),n.addTarget=function(s,o){let a;const l=o.target;if(a=pg(l)?{documents:CF(s,l)}:{query:IF(s,l)},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=sI(s,o.resumeToken);const c=yg(s,o.expectedCount);c!==null&&(a.expectedCount=c)}else if(o.snapshotVersion.compareTo(le.min())>0){a.readTime=ef(s,o.snapshotVersion.toTimestamp());const c=yg(s,o.expectedCount);c!==null&&(a.expectedCount=c)}return a}(this.serializer,e);const r=PF(this.serializer,e);r&&(n.labels=r),this.e_(n)}c_(e){const n={};n.database=_g(this.serializer),n.removeTarget=e,this.e_(n)}}class d$ extends pI{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s,this.l_=!1}get h_(){return this.l_}start(){this.l_=!1,this.lastStreamToken=void 0,super.start()}r_(){this.l_&&this.P_([])}__(e,n){return this.connection.vo("Write",e,n)}onMessage(e){if(Ve(!!e.streamToken),this.lastStreamToken=e.streamToken,this.l_){this.zo.reset();const n=bF(e.writeResults,e.commitTime),r=mr(e.commitTime);return this.listener.I_(r,n)}return Ve(!e.writeResults||e.writeResults.length===0),this.l_=!0,this.listener.T_()}E_(){const e={};e.database=_g(this.serializer),this.e_(e)}P_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>SF(this.serializer,r))};this.e_(n)}}/**
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
 */class f$ extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.d_=!1}A_(){if(this.d_)throw new J($.FAILED_PRECONDITION,"The client has already been terminated.")}wo(e,n,r){return this.A_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,s])=>this.connection.wo(e,n,r,i,s)).catch(i=>{throw i.name==="FirebaseError"?(i.code===$.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new J($.UNKNOWN,i.toString())})}Co(e,n,r,i){return this.A_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.Co(e,n,r,s,o,i)).catch(s=>{throw s.name==="FirebaseError"?(s.code===$.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new J($.UNKNOWN,s.toString())})}terminate(){this.d_=!0}}class h${constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.V_=0,this.m_=null,this.f_=!0}g_(){this.V_===0&&(this.p_("Unknown"),this.m_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.m_=null,this.y_("Backend didn't respond within 10 seconds."),this.p_("Offline"),Promise.resolve())))}w_(e){this.state==="Online"?this.p_("Unknown"):(this.V_++,this.V_>=1&&(this.S_(),this.y_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.p_("Offline")))}set(e){this.S_(),this.V_=0,e==="Online"&&(this.f_=!1),this.p_(e)}p_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}y_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.f_?(Ur(n),this.f_=!1):Z("OnlineStateTracker",n)}S_(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}}/**
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
 */class p${constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.b_=[],this.D_=new Map,this.C_=new Set,this.v_=[],this.F_=s,this.F_.ro(o=>{r.enqueueAndForget(async()=>{$s(this)&&(Z("RemoteStore","Restarting streams for network reachability change."),await async function(l){const c=ce(l);c.C_.add(4),await Vc(c),c.M_.set("Unknown"),c.C_.delete(4),await hh(c)}(this))})}),this.M_=new h$(r,i)}}async function hh(t){if($s(t))for(const e of t.v_)await e(!0)}async function Vc(t){for(const e of t.v_)await e(!1)}function mI(t,e){const n=ce(t);n.D_.has(e.targetId)||(n.D_.set(e.targetId,e),Bv(n)?$v(n):va(n).Ho()&&Fv(n,e))}function gI(t,e){const n=ce(t),r=va(n);n.D_.delete(e),r.Ho()&&yI(n,e),n.D_.size===0&&(r.Ho()?r.Zo():$s(n)&&n.M_.set("Unknown"))}function Fv(t,e){if(t.x_.Oe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(le.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}va(t).u_(e)}function yI(t,e){t.x_.Oe(e),va(t).c_(e)}function $v(t){t.x_=new gF({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),_t:e=>t.D_.get(e)||null,nt:()=>t.datastore.serializer.databaseId}),va(t).start(),t.M_.g_()}function Bv(t){return $s(t)&&!va(t).jo()&&t.D_.size>0}function $s(t){return ce(t).C_.size===0}function vI(t){t.x_=void 0}async function m$(t){t.D_.forEach((e,n)=>{Fv(t,e)})}async function g$(t,e){vI(t),Bv(t)?(t.M_.w_(e),$v(t)):t.M_.set("Unknown")}async function y$(t,e,n){if(t.M_.set("Online"),e instanceof iI&&e.state===2&&e.cause)try{await async function(i,s){const o=s.cause;for(const a of s.targetIds)i.D_.has(a)&&(await i.remoteSyncer.rejectListen(a,o),i.D_.delete(a),i.x_.removeTarget(a))}(t,e)}catch(r){Z("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await tf(t,r)}else if(e instanceof td?t.x_.$e(e):e instanceof rI?t.x_.Je(e):t.x_.Ge(e),!n.isEqual(le.min()))try{const r=await fI(t.localStore);n.compareTo(r)>=0&&await function(s,o){const a=s.x_.it(o);return a.targetChanges.forEach((l,c)=>{if(l.resumeToken.approximateByteSize()>0){const u=s.D_.get(c);u&&s.D_.set(c,u.withResumeToken(l.resumeToken,o))}}),a.targetMismatches.forEach((l,c)=>{const u=s.D_.get(l);if(!u)return;s.D_.set(l,u.withResumeToken(Ut.EMPTY_BYTE_STRING,u.snapshotVersion)),yI(s,l);const h=new ui(u.target,l,c,u.sequenceNumber);Fv(s,h)}),s.remoteSyncer.applyRemoteEvent(a)}(t,n)}catch(r){Z("RemoteStore","Failed to raise snapshot:",r),await tf(t,r)}}async function tf(t,e,n){if(!Dc(e))throw e;t.C_.add(1),await Vc(t),t.M_.set("Offline"),n||(n=()=>fI(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{Z("RemoteStore","Retrying IndexedDB access"),await n(),t.C_.delete(1),await hh(t)})}function wI(t,e){return e().catch(n=>tf(t,n,e))}async function ph(t){const e=ce(t),n=Oi(e);let r=e.b_.length>0?e.b_[e.b_.length-1].batchId:-1;for(;v$(e);)try{const i=await n$(e.localStore,r);if(i===null){e.b_.length===0&&n.Zo();break}r=i.batchId,w$(e,i)}catch(i){await tf(e,i)}_I(e)&&EI(e)}function v$(t){return $s(t)&&t.b_.length<10}function w$(t,e){t.b_.push(e);const n=Oi(t);n.Ho()&&n.h_&&n.P_(e.mutations)}function _I(t){return $s(t)&&!Oi(t).jo()&&t.b_.length>0}function EI(t){Oi(t).start()}async function _$(t){Oi(t).E_()}async function E$(t){const e=Oi(t);for(const n of t.b_)e.P_(n.mutations)}async function T$(t,e,n){const r=t.b_.shift(),i=Dv.from(r,e,n);await wI(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await ph(t)}async function x$(t,e){e&&Oi(t).h_&&await async function(r,i){if(function(o){return hF(o)&&o!==$.ABORTED}(i.code)){const s=r.b_.shift();Oi(r).Yo(),await wI(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await ph(r)}}(t,e),_I(t)&&EI(t)}async function q1(t,e){const n=ce(t);n.asyncQueue.verifyOperationInProgress(),Z("RemoteStore","RemoteStore received new credentials");const r=$s(n);n.C_.add(3),await Vc(n),r&&n.M_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.C_.delete(3),await hh(n)}async function S$(t,e){const n=ce(t);e?(n.C_.delete(2),await hh(n)):e||(n.C_.add(2),await Vc(n),n.M_.set("Unknown"))}function va(t){return t.O_||(t.O_=function(n,r,i){const s=ce(n);return s.A_(),new u$(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{ho:m$.bind(null,t),Io:g$.bind(null,t),a_:y$.bind(null,t)}),t.v_.push(async e=>{e?(t.O_.Yo(),Bv(t)?$v(t):t.M_.set("Unknown")):(await t.O_.stop(),vI(t))})),t.O_}function Oi(t){return t.N_||(t.N_=function(n,r,i){const s=ce(n);return s.A_(),new d$(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{ho:_$.bind(null,t),Io:x$.bind(null,t),T_:E$.bind(null,t),I_:T$.bind(null,t)}),t.v_.push(async e=>{e?(t.N_.Yo(),await ph(t)):(await t.N_.stop(),t.b_.length>0&&(Z("RemoteStore",`Stopping write stream with ${t.b_.length} pending writes`),t.b_=[]))})),t.N_}/**
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
 */class Uv{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new Lr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,a=new Uv(e,n,o,i,s);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new J($.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function zv(t,e){if(Ur("AsyncQueue",`${e}: ${t}`),Dc(t))return new J($.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class Oo{constructor(e){this.comparator=e?(n,r)=>e(n,r)||ne.comparator(n.key,r.key):(n,r)=>ne.comparator(n.key,r.key),this.keyedMap=Ja(),this.sortedSet=new qe(this.comparator)}static emptySet(e){return new Oo(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Oo)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new Oo;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
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
 */class G1{constructor(){this.B_=new qe(ne.comparator)}track(e){const n=e.doc.key,r=this.B_.get(n);r?e.type!==0&&r.type===3?this.B_=this.B_.insert(n,e):e.type===3&&r.type!==1?this.B_=this.B_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.B_=this.B_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.B_=this.B_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.B_=this.B_.remove(n):e.type===1&&r.type===2?this.B_=this.B_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.B_=this.B_.insert(n,{type:2,doc:e.doc}):se():this.B_=this.B_.insert(n,e)}L_(){const e=[];return this.B_.inorderTraversal((n,r)=>{e.push(r)}),e}}class Zo{constructor(e,n,r,i,s,o,a,l,c){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=l,this.hasCachedResults=c}static fromInitialDocuments(e,n,r,i,s){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new Zo(e,n,Oo.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&ah(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
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
 */class b${constructor(){this.k_=void 0,this.listeners=[]}}class C${constructor(){this.queries=new ya(e=>zC(e),ah),this.onlineState="Unknown",this.q_=new Set}}async function TI(t,e){const n=ce(t),r=e.query;let i=!1,s=n.queries.get(r);if(s||(i=!0,s=new b$),i)try{s.k_=await n.onListen(r)}catch(o){const a=zv(o,`Initialization of query '${no(e.query)}' failed`);return void e.onError(a)}n.queries.set(r,s),s.listeners.push(e),e.Q_(n.onlineState),s.k_&&e.K_(s.k_)&&Hv(n)}async function xI(t,e){const n=ce(t),r=e.query;let i=!1;const s=n.queries.get(r);if(s){const o=s.listeners.indexOf(e);o>=0&&(s.listeners.splice(o,1),i=s.listeners.length===0)}if(i)return n.queries.delete(r),n.onUnlisten(r)}function I$(t,e){const n=ce(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const a of o.listeners)a.K_(i)&&(r=!0);o.k_=i}}r&&Hv(n)}function A$(t,e,n){const r=ce(t),i=r.queries.get(e);if(i)for(const s of i.listeners)s.onError(n);r.queries.delete(e)}function Hv(t){t.q_.forEach(e=>{e.next()})}class SI{constructor(e,n,r){this.query=e,this.U_=n,this.W_=!1,this.G_=null,this.onlineState="Unknown",this.options=r||{}}K_(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new Zo(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.W_?this.z_(e)&&(this.U_.next(e),n=!0):this.j_(e,this.onlineState)&&(this.H_(e),n=!0),this.G_=e,n}onError(e){this.U_.error(e)}Q_(e){this.onlineState=e;let n=!1;return this.G_&&!this.W_&&this.j_(this.G_,e)&&(this.H_(this.G_),n=!0),n}j_(e,n){if(!e.fromCache)return!0;const r=n!=="Offline";return(!this.options.J_||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}z_(e){if(e.docChanges.length>0)return!0;const n=this.G_&&this.G_.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}H_(e){e=Zo.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.W_=!0,this.U_.next(e)}}/**
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
 */class bI{constructor(e){this.key=e}}class CI{constructor(e){this.key=e}}class P${constructor(e,n){this.query=e,this.ia=n,this.sa=null,this.hasCachedResults=!1,this.current=!1,this.oa=he(),this.mutatedKeys=he(),this._a=HC(e),this.aa=new Oo(this._a)}get ua(){return this.ia}ca(e,n){const r=n?n.la:new G1,i=n?n.aa:this.aa;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,a=!1;const l=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,c=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((u,h)=>{const m=i.get(u),v=lh(this.query,h)?h:null,x=!!m&&this.mutatedKeys.has(m.key),g=!!v&&(v.hasLocalMutations||this.mutatedKeys.has(v.key)&&v.hasCommittedMutations);let S=!1;m&&v?m.data.isEqual(v.data)?x!==g&&(r.track({type:3,doc:v}),S=!0):this.ha(m,v)||(r.track({type:2,doc:v}),S=!0,(l&&this._a(v,l)>0||c&&this._a(v,c)<0)&&(a=!0)):!m&&v?(r.track({type:0,doc:v}),S=!0):m&&!v&&(r.track({type:1,doc:m}),S=!0,(l||c)&&(a=!0)),S&&(v?(o=o.add(v),s=g?s.add(u):s.delete(u)):(o=o.delete(u),s=s.delete(u)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const u=this.query.limitType==="F"?o.last():o.first();o=o.delete(u.key),s=s.delete(u.key),r.track({type:1,doc:u})}return{aa:o,la:r,Zi:a,mutatedKeys:s}}ha(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r){const i=this.aa;this.aa=e.aa,this.mutatedKeys=e.mutatedKeys;const s=e.la.L_();s.sort((c,u)=>function(m,v){const x=g=>{switch(g){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return se()}};return x(m)-x(v)}(c.type,u.type)||this._a(c.doc,u.doc)),this.Pa(r);const o=n?this.Ia():[],a=this.oa.size===0&&this.current?1:0,l=a!==this.sa;return this.sa=a,s.length!==0||l?{snapshot:new Zo(this.query,e.aa,i,s,e.mutatedKeys,a===0,l,!1,!!r&&r.resumeToken.approximateByteSize()>0),Ta:o}:{Ta:o}}Q_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({aa:this.aa,la:new G1,mutatedKeys:this.mutatedKeys,Zi:!1},!1)):{Ta:[]}}Ea(e){return!this.ia.has(e)&&!!this.aa.has(e)&&!this.aa.get(e).hasLocalMutations}Pa(e){e&&(e.addedDocuments.forEach(n=>this.ia=this.ia.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.ia=this.ia.delete(n)),this.current=e.current)}Ia(){if(!this.current)return[];const e=this.oa;this.oa=he(),this.aa.forEach(r=>{this.Ea(r.key)&&(this.oa=this.oa.add(r.key))});const n=[];return e.forEach(r=>{this.oa.has(r)||n.push(new CI(r))}),this.oa.forEach(r=>{e.has(r)||n.push(new bI(r))}),n}da(e){this.ia=e.ls,this.oa=he();const n=this.ca(e.documents);return this.applyChanges(n,!0)}Aa(){return Zo.fromInitialDocuments(this.query,this.aa,this.mutatedKeys,this.sa===0,this.hasCachedResults)}}class k${constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class R${constructor(e){this.key=e,this.Ra=!1}}class O${constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.Va={},this.ma=new ya(a=>zC(a),ah),this.fa=new Map,this.ga=new Set,this.pa=new qe(ne.comparator),this.ya=new Map,this.wa=new Mv,this.Sa={},this.ba=new Map,this.Da=Jo.Nn(),this.onlineState="Unknown",this.Ca=void 0}get isPrimaryClient(){return this.Ca===!0}}async function D$(t,e){const n=z$(t);let r,i;const s=n.ma.get(e);if(s)r=s.targetId,n.sharedClientState.addLocalQueryTarget(r),i=s.view.Aa();else{const o=await r$(n.localStore,pr(e)),a=n.sharedClientState.addLocalQueryTarget(o.targetId);r=o.targetId,i=await N$(n,e,r,a==="current",o.resumeToken),n.isPrimaryClient&&mI(n.remoteStore,o)}return i}async function N$(t,e,n,r,i){t.va=(h,m,v)=>async function(g,S,w,p){let y=S.view.ca(w);y.Zi&&(y=await z1(g.localStore,S.query,!1).then(({documents:I})=>S.view.ca(I,y)));const E=p&&p.targetChanges.get(S.targetId),C=S.view.applyChanges(y,g.isPrimaryClient,E);return Q1(g,S.targetId,C.Ta),C.snapshot}(t,h,m,v);const s=await z1(t.localStore,e,!0),o=new P$(e,s.ls),a=o.ca(s.documents),l=Mc.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),c=o.applyChanges(a,t.isPrimaryClient,l);Q1(t,n,c.Ta);const u=new k$(e,n,o);return t.ma.set(e,u),t.fa.has(n)?t.fa.get(n).push(e):t.fa.set(n,[e]),c.snapshot}async function L$(t,e){const n=ce(t),r=n.ma.get(e),i=n.fa.get(r.targetId);if(i.length>1)return n.fa.set(r.targetId,i.filter(s=>!ah(s,e))),void n.ma.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await Eg(n.localStore,r.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(r.targetId),gI(n.remoteStore,r.targetId),Tg(n,r.targetId)}).catch(Oc)):(Tg(n,r.targetId),await Eg(n.localStore,r.targetId,!0))}async function M$(t,e,n){const r=H$(t);try{const i=await function(o,a){const l=ce(o),c=dt.now(),u=a.reduce((v,x)=>v.add(x.key),he());let h,m;return l.persistence.runTransaction("Locally write mutations","readwrite",v=>{let x=zr(),g=he();return l.ss.getEntries(v,u).next(S=>{x=S,x.forEach((w,p)=>{p.isValidDocument()||(g=g.add(w))})}).next(()=>l.localDocuments.getOverlayedDocuments(v,x)).next(S=>{h=S;const w=[];for(const p of a){const y=lF(p,h.get(p.key).overlayedDocument);y!=null&&w.push(new Fs(p.key,y,LC(y.value.mapValue),Un.exists(!0)))}return l.mutationQueue.addMutationBatch(v,c,w,a)}).next(S=>{m=S;const w=S.applyToLocalDocumentSet(h,g);return l.documentOverlayCache.saveOverlays(v,S.batchId,w)})}).then(()=>({batchId:m.batchId,changes:qC(h)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(o,a,l){let c=o.Sa[o.currentUser.toKey()];c||(c=new qe(Ee)),c=c.insert(a,l),o.Sa[o.currentUser.toKey()]=c}(r,i.batchId,n),await jc(r,i.changes),await ph(r.remoteStore)}catch(i){const s=zv(i,"Failed to persist write");n.reject(s)}}async function II(t,e){const n=ce(t);try{const r=await e$(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.ya.get(s);o&&(Ve(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.Ra=!0:i.modifiedDocuments.size>0?Ve(o.Ra):i.removedDocuments.size>0&&(Ve(o.Ra),o.Ra=!1))}),await jc(n,r,e)}catch(r){await Oc(r)}}function K1(t,e,n){const r=ce(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.ma.forEach((s,o)=>{const a=o.view.Q_(e);a.snapshot&&i.push(a.snapshot)}),function(o,a){const l=ce(o);l.onlineState=a;let c=!1;l.queries.forEach((u,h)=>{for(const m of h.listeners)m.Q_(a)&&(c=!0)}),c&&Hv(l)}(r.eventManager,e),i.length&&r.Va.a_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function V$(t,e,n){const r=ce(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.ya.get(e),s=i&&i.key;if(s){let o=new qe(ne.comparator);o=o.insert(s,Vt.newNoDocument(s,le.min()));const a=he().add(s),l=new dh(le.min(),new Map,new qe(Ee),o,a);await II(r,l),r.pa=r.pa.remove(s),r.ya.delete(e),Wv(r)}else await Eg(r.localStore,e,!1).then(()=>Tg(r,e,n)).catch(Oc)}async function j$(t,e){const n=ce(t),r=e.batch.batchId;try{const i=await ZF(n.localStore,e);PI(n,r,null),AI(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await jc(n,i)}catch(i){await Oc(i)}}async function F$(t,e,n){const r=ce(t);try{const i=await function(o,a){const l=ce(o);return l.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let u;return l.mutationQueue.lookupMutationBatch(c,a).next(h=>(Ve(h!==null),u=h.keys(),l.mutationQueue.removeMutationBatch(c,h))).next(()=>l.mutationQueue.performConsistencyCheck(c)).next(()=>l.documentOverlayCache.removeOverlaysForBatchId(c,u,a)).next(()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,u)).next(()=>l.localDocuments.getDocuments(c,u))})}(r.localStore,e);PI(r,e,n),AI(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await jc(r,i)}catch(i){await Oc(i)}}function AI(t,e){(t.ba.get(e)||[]).forEach(n=>{n.resolve()}),t.ba.delete(e)}function PI(t,e,n){const r=ce(t);let i=r.Sa[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.Sa[r.currentUser.toKey()]=i}}function Tg(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.fa.get(e))t.ma.delete(r),n&&t.Va.Fa(r,n);t.fa.delete(e),t.isPrimaryClient&&t.wa.Rr(e).forEach(r=>{t.wa.containsKey(r)||kI(t,r)})}function kI(t,e){t.ga.delete(e.path.canonicalString());const n=t.pa.get(e);n!==null&&(gI(t.remoteStore,n),t.pa=t.pa.remove(e),t.ya.delete(n),Wv(t))}function Q1(t,e,n){for(const r of n)r instanceof bI?(t.wa.addReference(r.key,e),$$(t,r)):r instanceof CI?(Z("SyncEngine","Document no longer in limbo: "+r.key),t.wa.removeReference(r.key,e),t.wa.containsKey(r.key)||kI(t,r.key)):se()}function $$(t,e){const n=e.key,r=n.path.canonicalString();t.pa.get(n)||t.ga.has(r)||(Z("SyncEngine","New document in limbo: "+n),t.ga.add(r),Wv(t))}function Wv(t){for(;t.ga.size>0&&t.pa.size<t.maxConcurrentLimboResolutions;){const e=t.ga.values().next().value;t.ga.delete(e);const n=new ne(Le.fromString(e)),r=t.Da.next();t.ya.set(r,new R$(n)),t.pa=t.pa.insert(n,r),mI(t.remoteStore,new ui(pr(Rv(n.path)),r,"TargetPurposeLimboResolution",bv._e))}}async function jc(t,e,n){const r=ce(t),i=[],s=[],o=[];r.ma.isEmpty()||(r.ma.forEach((a,l)=>{o.push(r.va(l,e,n).then(c=>{if((c||n)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(l.targetId,c!=null&&c.fromCache?"not-current":"current"),c){i.push(c);const u=jv.Qi(l.targetId,c);s.push(u)}}))}),await Promise.all(o),r.Va.a_(i),await async function(l,c){const u=ce(l);try{await u.persistence.runTransaction("notifyLocalViewChanges","readwrite",h=>z.forEach(c,m=>z.forEach(m.ki,v=>u.persistence.referenceDelegate.addReference(h,m.targetId,v)).next(()=>z.forEach(m.qi,v=>u.persistence.referenceDelegate.removeReference(h,m.targetId,v)))))}catch(h){if(!Dc(h))throw h;Z("LocalStore","Failed to update sequence numbers: "+h)}for(const h of c){const m=h.targetId;if(!h.fromCache){const v=u.ts.get(m),x=v.snapshotVersion,g=v.withLastLimboFreeSnapshotVersion(x);u.ts=u.ts.insert(m,g)}}}(r.localStore,s))}async function B$(t,e){const n=ce(t);if(!n.currentUser.isEqual(e)){Z("SyncEngine","User change. New user:",e.toKey());const r=await dI(n.localStore,e);n.currentUser=e,function(s,o){s.ba.forEach(a=>{a.forEach(l=>{l.reject(new J($.CANCELLED,o))})}),s.ba.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await jc(n,r._s)}}function U$(t,e){const n=ce(t),r=n.ya.get(e);if(r&&r.Ra)return he().add(r.key);{let i=he();const s=n.fa.get(e);if(!s)return i;for(const o of s){const a=n.ma.get(o);i=i.unionWith(a.view.ua)}return i}}function z$(t){const e=ce(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=II.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=U$.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=V$.bind(null,e),e.Va.a_=I$.bind(null,e.eventManager),e.Va.Fa=A$.bind(null,e.eventManager),e}function H$(t){const e=ce(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=j$.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=F$.bind(null,e),e}class Y1{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=fh(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,n){return null}createIndexBackfillerScheduler(e,n){return null}createLocalStore(e){return JF(this.persistence,new YF,e.initialUser,this.serializer)}createPersistence(e){return new GF(Vv.jr,this.serializer)}createSharedClientState(e){return new s$}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class W${async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>K1(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=B$.bind(null,this.syncEngine),await S$(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new C$}()}createDatastore(e){const n=fh(e.databaseInfo.databaseId),r=function(s){return new c$(s)}(e.databaseInfo);return function(s,o,a,l){return new f$(s,o,a,l)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,i,s,o,a){return new p$(r,i,s,o,a)}(this.localStore,this.datastore,e.asyncQueue,n=>K1(this.syncEngine,n,0),function(){return W1.D()?new W1:new o$}())}createSyncEngine(e,n){return function(i,s,o,a,l,c,u){const h=new O$(i,s,o,a,l,c);return u&&(h.Ca=!0),h}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(n){const r=ce(n);Z("RemoteStore","RemoteStore shutting down."),r.C_.add(5),await Vc(r),r.F_.shutdown(),r.M_.set("Unknown")}(this.remoteStore)}}/**
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
 */class RI{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Oa(this.observer.next,e)}error(e){this.observer.error?this.Oa(this.observer.error,e):Ur("Uncaught Error in snapshot listener:",e.toString())}Na(){this.muted=!0}Oa(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
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
 */class q${constructor(e,n,r,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=Lt.UNAUTHENTICATED,this.clientId=OC.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async s=>{Z("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(r,s=>(Z("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new J($.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Lr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=zv(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Pp(t,e){t.asyncQueue.verifyOperationInProgress(),Z("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await dI(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function X1(t,e){t.asyncQueue.verifyOperationInProgress();const n=await K$(t);Z("FirestoreClient","Initializing OnlineComponentProvider");const r=await t.getConfiguration();await e.initialize(n,r),t.setCredentialChangeListener(i=>q1(e.remoteStore,i)),t.setAppCheckTokenChangeListener((i,s)=>q1(e.remoteStore,s)),t._onlineComponents=e}function G$(t){return t.name==="FirebaseError"?t.code===$.FAILED_PRECONDITION||t.code===$.UNIMPLEMENTED:!(typeof DOMException<"u"&&t instanceof DOMException)||t.code===22||t.code===20||t.code===11}async function K$(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){Z("FirestoreClient","Using user provided OfflineComponentProvider");try{await Pp(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!G$(n))throw n;Ko("Error using user provided cache. Falling back to memory cache: "+n),await Pp(t,new Y1)}}else Z("FirestoreClient","Using default OfflineComponentProvider"),await Pp(t,new Y1);return t._offlineComponents}async function OI(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(Z("FirestoreClient","Using user provided OnlineComponentProvider"),await X1(t,t._uninitializedComponentsProvider._online)):(Z("FirestoreClient","Using default OnlineComponentProvider"),await X1(t,new W$))),t._onlineComponents}function Q$(t){return OI(t).then(e=>e.syncEngine)}async function DI(t){const e=await OI(t),n=e.eventManager;return n.onListen=D$.bind(null,e.syncEngine),n.onUnlisten=L$.bind(null,e.syncEngine),n}function Y$(t,e,n={}){const r=new Lr;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,a,l,c){const u=new RI({next:m=>{o.enqueueAndForget(()=>xI(s,h));const v=m.docs.has(a);!v&&m.fromCache?c.reject(new J($.UNAVAILABLE,"Failed to get document because the client is offline.")):v&&m.fromCache&&l&&l.source==="server"?c.reject(new J($.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):c.resolve(m)},error:m=>c.reject(m)}),h=new SI(Rv(a.path),u,{includeMetadataChanges:!0,J_:!0});return TI(s,h)}(await DI(t),t.asyncQueue,e,n,r)),r.promise}function X$(t,e,n={}){const r=new Lr;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,a,l,c){const u=new RI({next:m=>{o.enqueueAndForget(()=>xI(s,h)),m.fromCache&&l.source==="server"?c.reject(new J($.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):c.resolve(m)},error:m=>c.reject(m)}),h=new SI(a,u,{includeMetadataChanges:!0,J_:!0});return TI(s,h)}(await DI(t),t.asyncQueue,e,n,r)),r.promise}/**
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
 */function NI(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
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
 */const J1=new Map;/**
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
 */function LI(t,e,n){if(!n)throw new J($.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function J$(t,e,n,r){if(e===!0&&r===!0)throw new J($.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Z1(t){if(!ne.isDocumentKey(t))throw new J($.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function eE(t){if(ne.isDocumentKey(t))throw new J($.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function mh(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":se()}function Hr(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new J($.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=mh(t);throw new J($.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */class tE{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new J($.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new J($.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}J$("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=NI((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new J($.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new J($.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new J($.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class gh{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new tE({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new J($.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new J($.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new tE(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new wj;switch(r.type){case"firstParty":return new xj(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new J($.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=J1.get(n);r&&(Z("ComponentProvider","Removing Datastore"),J1.delete(n),r.terminate())}(this),Promise.resolve()}}function Z$(t,e,n,r={}){var i;const s=(t=Hr(t,gh))._getSettings(),o=`${e}:${n}`;if(s.host!=="firestore.googleapis.com"&&s.host!==o&&Ko("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),r.mockUserToken){let a,l;if(typeof r.mockUserToken=="string")a=r.mockUserToken,l=Lt.MOCK_USER;else{a=qS(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const c=r.mockUserToken.sub||r.mockUserToken.user_id;if(!c)throw new J($.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");l=new Lt(c)}t._authCredentials=new _j(new RC(a,l))}}/**
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
 */class wa{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new wa(this.firestore,e,this._query)}}class on{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new bi(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new on(this.firestore,e,this._key)}}class bi extends wa{constructor(e,n,r){super(e,n,Rv(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new on(this.firestore,null,new ne(e))}withConverter(e){return new bi(this.firestore,e,this._path)}}function an(t,e,...n){if(t=vt(t),LI("collection","path",e),t instanceof gh){const r=Le.fromString(e,...n);return eE(r),new bi(t,null,r)}{if(!(t instanceof on||t instanceof bi))throw new J($.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Le.fromString(e,...n));return eE(r),new bi(t.firestore,null,r)}}function yr(t,e,...n){if(t=vt(t),arguments.length===1&&(e=OC.newId()),LI("doc","path",e),t instanceof gh){const r=Le.fromString(e,...n);return Z1(r),new on(t,null,new ne(r))}{if(!(t instanceof on||t instanceof bi))throw new J($.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Le.fromString(e,...n));return Z1(r),new on(t.firestore,t instanceof bi?t.converter:null,new ne(r))}}/**
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
 */class e3{constructor(){this.Ja=Promise.resolve(),this.Ya=[],this.Za=!1,this.Xa=[],this.eu=null,this.tu=!1,this.nu=!1,this.ru=[],this.zo=new hI(this,"async_queue_retry"),this.iu=()=>{const n=Ap();n&&Z("AsyncQueue","Visibility state changed to "+n.visibilityState),this.zo.Qo()};const e=Ap();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.iu)}get isShuttingDown(){return this.Za}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.su(),this.ou(e)}enterRestrictedMode(e){if(!this.Za){this.Za=!0,this.nu=e||!1;const n=Ap();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.iu)}}enqueue(e){if(this.su(),this.Za)return new Promise(()=>{});const n=new Lr;return this.ou(()=>this.Za&&this.nu?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Ya.push(e),this._u()))}async _u(){if(this.Ya.length!==0){try{await this.Ya[0](),this.Ya.shift(),this.zo.reset()}catch(e){if(!Dc(e))throw e;Z("AsyncQueue","Operation failed with retryable error: "+e)}this.Ya.length>0&&this.zo.ko(()=>this._u())}}ou(e){const n=this.Ja.then(()=>(this.tu=!0,e().catch(r=>{this.eu=r,this.tu=!1;const i=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(r);throw Ur("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.tu=!1,r))));return this.Ja=n,n}enqueueAfterDelay(e,n,r){this.su(),this.ru.indexOf(e)>-1&&(n=0);const i=Uv.createAndSchedule(this,e,n,r,s=>this.au(s));return this.Xa.push(i),i}su(){this.eu&&se()}verifyOperationInProgress(){}async uu(){let e;do e=this.Ja,await e;while(e!==this.Ja)}cu(e){for(const n of this.Xa)if(n.timerId===e)return!0;return!1}lu(e){return this.uu().then(()=>{this.Xa.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.Xa)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.uu()})}hu(e){this.ru.push(e)}au(e){const n=this.Xa.indexOf(e);this.Xa.splice(n,1)}}class _a extends gh{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=function(){return new e3}(),this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||MI(this),this._firestoreClient.terminate()}}function t3(t,e){const n=typeof t=="object"?t:Gy(),r=typeof t=="string"?t:e||"(default)",i=Bf(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=zS("firestore");s&&Z$(i,...s)}return i}function qv(t){return t._firestoreClient||MI(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function MI(t){var e,n,r;const i=t._freezeSettings(),s=function(a,l,c,u){return new Lj(a,l,c,u.host,u.ssl,u.experimentalForceLongPolling,u.experimentalAutoDetectLongPolling,NI(u.experimentalLongPollingOptions),u.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,i);t._firestoreClient=new q$(t._authCredentials,t._appCheckCredentials,t._queue,s),!((n=i.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.localCache.kind,_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider})}/**
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
 */class ea{constructor(e){this._byteString=e}static fromBase64String(e){try{return new ea(Ut.fromBase64String(e))}catch(n){throw new J($.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new ea(Ut.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class Gv{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new J($.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new bt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class VI{constructor(e){this._methodName=e}}/**
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
 */class Kv{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new J($.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new J($.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return Ee(this._lat,e._lat)||Ee(this._long,e._long)}}/**
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
 */const n3=/^__.*__$/;class r3{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Fs(e,this.data,this.fieldMask,n,this.fieldTransforms):new Lc(e,this.data,n,this.fieldTransforms)}}function jI(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw se()}}class Qv{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.Pu(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Iu(){return this.settings.Iu}Tu(e){return new Qv(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Eu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Tu({path:r,du:!1});return i.Au(e),i}Ru(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Tu({path:r,du:!1});return i.Pu(),i}Vu(e){return this.Tu({path:void 0,du:!0})}mu(e){return nf(e,this.settings.methodName,this.settings.fu||!1,this.path,this.settings.gu)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}Pu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Au(this.path.get(e))}Au(e){if(e.length===0)throw this.mu("Document fields must not be empty");if(jI(this.Iu)&&n3.test(e))throw this.mu('Document fields cannot begin and end with "__"')}}class i3{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||fh(e)}pu(e,n,r,i=!1){return new Qv({Iu:e,methodName:n,gu:r,path:bt.emptyPath(),du:!1,fu:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Yv(t){const e=t._freezeSettings(),n=fh(t._databaseId);return new i3(t._databaseId,!!e.ignoreUndefinedProperties,n)}function FI(t,e,n,r,i,s={}){const o=t.pu(s.merge||s.mergeFields?2:0,e,n,i);UI("Data must be an object, but it was:",o,r);const a=$I(r,o);let l,c;if(s.merge)l=new jn(o.fieldMask),c=o.fieldTransforms;else if(s.mergeFields){const u=[];for(const h of s.mergeFields){const m=o3(e,h,n);if(!o.contains(m))throw new J($.INVALID_ARGUMENT,`Field '${m}' is specified in your field mask but missing from your input data.`);l3(u,m)||u.push(m)}l=new jn(u),c=o.fieldTransforms.filter(h=>l.covers(h.field))}else l=null,c=o.fieldTransforms;return new r3(new Cn(a),l,c)}function s3(t,e,n,r=!1){return Xv(n,t.pu(r?4:3,e))}function Xv(t,e){if(BI(t=vt(t)))return UI("Unsupported field value:",e,t),$I(t,e);if(t instanceof VI)return function(r,i){if(!jI(i.Iu))throw i.mu(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.mu(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.du&&e.Iu!==4)throw e.mu("Nested arrays are not supported");return function(r,i){const s=[];let o=0;for(const a of r){let l=Xv(a,i.Vu(o));l==null&&(l={nullValue:"NULL_VALUE"}),s.push(l),o++}return{arrayValue:{values:s}}}(t,e)}return function(r,i){if((r=vt(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return nF(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=dt.fromDate(r);return{timestampValue:ef(i.serializer,s)}}if(r instanceof dt){const s=new dt(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:ef(i.serializer,s)}}if(r instanceof Kv)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof ea)return{bytesValue:sI(i.serializer,r._byteString)};if(r instanceof on){const s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i.mu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:Lv(r.firestore._databaseId||i.databaseId,r._key.path)}}throw i.mu(`Unsupported field value: ${mh(r)}`)}(t,e)}function $I(t,e){const n={};return DC(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):ga(t,(r,i)=>{const s=Xv(i,e.Eu(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function BI(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof dt||t instanceof Kv||t instanceof ea||t instanceof on||t instanceof VI)}function UI(t,e,n){if(!BI(n)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(n)){const r=mh(n);throw r==="an object"?e.mu(t+" a custom object"):e.mu(t+" "+r)}}function o3(t,e,n){if((e=vt(e))instanceof Gv)return e._internalPath;if(typeof e=="string")return zI(t,e);throw nf("Field path arguments must be of type string or ",t,!1,void 0,n)}const a3=new RegExp("[~\\*/\\[\\]]");function zI(t,e,n){if(e.search(a3)>=0)throw nf(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Gv(...e.split("."))._internalPath}catch{throw nf(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function nf(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(s||o)&&(l+=" (found",s&&(l+=` in field ${r}`),o&&(l+=` in document ${i}`),l+=")"),new J($.INVALID_ARGUMENT,a+t+l)}function l3(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */class HI{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new on(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new c3(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(Jv("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class c3 extends HI{data(){return super.data()}}function Jv(t,e){return typeof e=="string"?zI(t,e):e instanceof Gv?e._internalPath:e._delegate._internalPath}/**
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
 */function u3(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new J($.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Zv{}class d3 extends Zv{}function f3(t,e,...n){let r=[];e instanceof Zv&&r.push(e),r=r.concat(n),function(s){const o=s.filter(l=>l instanceof ew).length,a=s.filter(l=>l instanceof yh).length;if(o>1||o>0&&a>0)throw new J($.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const i of r)t=i._apply(t);return t}class yh extends d3{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new yh(e,n,r)}_apply(e){const n=this._parse(e);return WI(e._query,n),new wa(e.firestore,e.converter,mg(e._query,n))}_parse(e){const n=Yv(e.firestore);return function(s,o,a,l,c,u,h){let m;if(c.isKeyField()){if(u==="array-contains"||u==="array-contains-any")throw new J($.INVALID_ARGUMENT,`Invalid Query. You can't perform '${u}' queries on documentId().`);if(u==="in"||u==="not-in"){rE(h,u);const v=[];for(const x of h)v.push(nE(l,s,x));m={arrayValue:{values:v}}}else m=nE(l,s,h)}else u!=="in"&&u!=="not-in"&&u!=="array-contains-any"||rE(h,u),m=s3(a,o,h,u==="in"||u==="not-in");return at.create(c,u,m)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function h3(t,e,n){const r=e,i=Jv("where",t);return yh._create(i,r,n)}class ew extends Zv{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new ew(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:Gn.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(i,s){let o=i;const a=s.getFlattenedFilters();for(const l of a)WI(o,l),o=mg(o,l)}(e._query,n),new wa(e.firestore,e.converter,mg(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function nE(t,e,n){if(typeof(n=vt(n))=="string"){if(n==="")throw new J($.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!UC(e)&&n.indexOf("/")!==-1)throw new J($.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(Le.fromString(n));if(!ne.isDocumentKey(r))throw new J($.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return C1(t,new ne(r))}if(n instanceof on)return C1(t,n._key);throw new J($.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${mh(n)}.`)}function rE(t,e){if(!Array.isArray(t)||t.length===0)throw new J($.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function WI(t,e){const n=function(i,s){for(const o of i)for(const a of o.getFlattenedFilters())if(s.indexOf(a.op)>=0)return a.op;return null}(t.filters,function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new J($.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new J($.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}class p3{convertValue(e,n="none"){switch(Is(e)){case 0:return null;case 1:return e.booleanValue;case 2:return it(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Cs(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw se()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return ga(e,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertGeoPoint(e){return new Kv(it(e.latitude),it(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=Iv(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(nc(e));default:return null}}convertTimestamp(e){const n=Ri(e);return new dt(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=Le.fromString(e);Ve(uI(r));const i=new rc(r.get(1),r.get(3)),s=new ne(r.popFirst(5));return i.isEqual(n)||Ur(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
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
 */function qI(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}/**
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
 */class el{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class GI extends HI{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new nd(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(Jv("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class nd extends GI{data(e={}){return super.data(e)}}class m3{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new el(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new nd(this._firestore,this._userDataWriter,r.key,r,new el(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new J($.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map(a=>{const l=new nd(i._firestore,i._userDataWriter,a.doc.key,a.doc,new el(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);return a.doc,{type:"added",doc:l,oldIndex:-1,newIndex:o++}})}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(a=>s||a.type!==3).map(a=>{const l=new nd(i._firestore,i._userDataWriter,a.doc.key,a.doc,new el(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);let c=-1,u=-1;return a.type!==0&&(c=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),u=o.indexOf(a.doc.key)),{type:g3(a.type),doc:l,oldIndex:c,newIndex:u}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function g3(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return se()}}/**
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
 */function y3(t){t=Hr(t,on);const e=Hr(t.firestore,_a);return Y$(qv(e),t._key).then(n=>v3(e,t,n))}class KI extends p3{constructor(e){super(),this.firestore=e}convertBytes(e){return new ea(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new on(this.firestore,null,n)}}function vh(t){t=Hr(t,wa);const e=Hr(t.firestore,_a),n=qv(e),r=new KI(e);return u3(t._query),X$(n,t._query).then(i=>new m3(e,r,t,i))}function ta(t,e,n){t=Hr(t,on);const r=Hr(t.firestore,_a),i=qI(t.converter,e,n);return tw(r,[FI(Yv(r),"setDoc",t._key,i,t.converter!==null,n).toMutation(t._key,Un.none())])}function QI(t){return tw(Hr(t.firestore,_a),[new Ov(t._key,Un.none())])}function rf(t,e){const n=Hr(t.firestore,_a),r=yr(t),i=qI(t.converter,e);return tw(n,[FI(Yv(t.firestore),"addDoc",r._key,i,t.converter!==null,{}).toMutation(r._key,Un.exists(!1))]).then(()=>r)}function tw(t,e){return function(r,i){const s=new Lr;return r.asyncQueue.enqueueAndForget(async()=>M$(await Q$(r),i,s)),s.promise}(qv(t),e)}function v3(t,e,n){const r=n.docs.get(e._key),i=new KI(t);return new GI(t,i,e._key,r,new el(n.hasPendingWrites,n.fromCache),e.converter)}(function(e,n=!0){(function(i){ma=i})(Ms),Ts(new Pi("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),a=new _a(new Ej(r.getProvider("auth-internal")),new bj(r.getProvider("app-check-internal")),function(c,u){if(!Object.prototype.hasOwnProperty.apply(c.options,["projectId"]))throw new J($.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new rc(c.options.projectId,u)}(o,i),o);return s=Object.assign({useFetchStreams:n},s),a._setSettings(s),a},"PUBLIC").setMultipleInstances(!0)),dr(T1,"4.3.2",e),dr(T1,"4.3.2","esm2017")})();/**
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
 */const YI="firebasestorage.googleapis.com",XI="storageBucket",w3=2*60*1e3,_3=10*60*1e3;/**
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
 */class Ye extends wr{constructor(e,n,r=0){super(kp(e),`Firebase Storage: ${n} (${kp(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,Ye.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return kp(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var Qe;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(Qe||(Qe={}));function kp(t){return"storage/"+t}function nw(){const t="An unknown error occurred, please check the error payload for server response.";return new Ye(Qe.UNKNOWN,t)}function E3(t){return new Ye(Qe.OBJECT_NOT_FOUND,"Object '"+t+"' does not exist.")}function T3(t){return new Ye(Qe.QUOTA_EXCEEDED,"Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function x3(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new Ye(Qe.UNAUTHENTICATED,t)}function S3(){return new Ye(Qe.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function b3(t){return new Ye(Qe.UNAUTHORIZED,"User does not have permission to access '"+t+"'.")}function C3(){return new Ye(Qe.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function I3(){return new Ye(Qe.CANCELED,"User canceled the upload/download.")}function A3(t){return new Ye(Qe.INVALID_URL,"Invalid URL '"+t+"'.")}function P3(t){return new Ye(Qe.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function k3(){return new Ye(Qe.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+XI+"' property when initializing the app?")}function R3(){return new Ye(Qe.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function O3(){return new Ye(Qe.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function D3(t){return new Ye(Qe.UNSUPPORTED_ENVIRONMENT,`${t} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function xg(t){return new Ye(Qe.INVALID_ARGUMENT,t)}function JI(){return new Ye(Qe.APP_DELETED,"The Firebase app was deleted.")}function N3(t){return new Ye(Qe.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function vl(t,e){return new Ye(Qe.INVALID_FORMAT,"String does not match format '"+t+"': "+e)}function Fa(t){throw new Ye(Qe.INTERNAL_ERROR,"Internal error: "+t)}/**
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
 */class pn{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=pn.makeFromUrl(e,n)}catch{return new pn(e,"")}if(r.path==="")return r;throw P3(e)}static makeFromUrl(e,n){let r=null;const i="([A-Za-z0-9.\\-_]+)";function s(E){E.path.charAt(E.path.length-1)==="/"&&(E.path_=E.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+i+o,"i"),l={bucket:1,path:3};function c(E){E.path_=decodeURIComponent(E.path)}const u="v[A-Za-z0-9_]+",h=n.replace(/[.]/g,"\\."),m="(/([^?#]*).*)?$",v=new RegExp(`^https?://${h}/${u}/b/${i}/o${m}`,"i"),x={bucket:1,path:3},g=n===YI?"(?:storage.googleapis.com|storage.cloud.google.com)":n,S="([^?#]*)",w=new RegExp(`^https?://${g}/${i}/${S}`,"i"),y=[{regex:a,indices:l,postModify:s},{regex:v,indices:x,postModify:c},{regex:w,indices:{bucket:1,path:2},postModify:c}];for(let E=0;E<y.length;E++){const C=y[E],I=C.regex.exec(e);if(I){const P=I[C.indices.bucket];let R=I[C.indices.path];R||(R=""),r=new pn(P,R),C.postModify(r);break}}if(r==null)throw A3(e);return r}}class L3{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
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
 */function M3(t,e,n){let r=1,i=null,s=null,o=!1,a=0;function l(){return a===2}let c=!1;function u(...S){c||(c=!0,e.apply(null,S))}function h(S){i=setTimeout(()=>{i=null,t(v,l())},S)}function m(){s&&clearTimeout(s)}function v(S,...w){if(c){m();return}if(S){m(),u.call(null,S,...w);return}if(l()||o){m(),u.call(null,S,...w);return}r<64&&(r*=2);let y;a===1?(a=2,y=0):y=(r+Math.random())*1e3,h(y)}let x=!1;function g(S){x||(x=!0,m(),!c&&(i!==null?(S||(a=2),clearTimeout(i),h(0)):S||(a=1)))}return h(0),s=setTimeout(()=>{o=!0,g(!0)},n),g}function V3(t){t(!1)}/**
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
 */function j3(t){return t!==void 0}function F3(t){return typeof t=="object"&&!Array.isArray(t)}function rw(t){return typeof t=="string"||t instanceof String}function iE(t){return iw()&&t instanceof Blob}function iw(){return typeof Blob<"u"&&!kL()}function sE(t,e,n,r){if(r<e)throw xg(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw xg(`Invalid value for '${t}'. Expected ${n} or less.`)}/**
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
 */function sw(t,e,n){let r=e;return n==null&&(r=`https://${e}`),`${n}://${r}/v0${t}`}function ZI(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const i=e(r)+"="+e(t[r]);n=n+i+"&"}return n=n.slice(0,-1),n}/**
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
 */var ps;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(ps||(ps={}));/**
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
 */function $3(t,e){const n=t>=500&&t<600,i=[408,429].indexOf(t)!==-1,s=e.indexOf(t)!==-1;return n||i||s}/**
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
 */class B3{constructor(e,n,r,i,s,o,a,l,c,u,h,m=!0){this.url_=e,this.method_=n,this.headers_=r,this.body_=i,this.successCodes_=s,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=l,this.timeout_=c,this.progressCallback_=u,this.connectionFactory_=h,this.retry=m,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((v,x)=>{this.resolve_=v,this.reject_=x,this.start_()})}start_(){const e=(r,i)=>{if(i){r(!1,new Su(!1,null,!0));return}const s=this.connectionFactory_();this.pendingConnection_=s;const o=a=>{const l=a.loaded,c=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(l,c)};this.progressCallback_!==null&&s.addUploadProgressListener(o),s.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&s.removeUploadProgressListener(o),this.pendingConnection_=null;const a=s.getErrorCode()===ps.NO_ERROR,l=s.getStatus();if(!a||$3(l,this.additionalRetryCodes_)&&this.retry){const u=s.getErrorCode()===ps.ABORT;r(!1,new Su(!1,null,u));return}const c=this.successCodes_.indexOf(l)!==-1;r(!0,new Su(c,s))})},n=(r,i)=>{const s=this.resolve_,o=this.reject_,a=i.connection;if(i.wasSuccessCode)try{const l=this.callback_(a,a.getResponse());j3(l)?s(l):s()}catch(l){o(l)}else if(a!==null){const l=nw();l.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,l)):o(l)}else if(i.canceled){const l=this.appDelete_?JI():I3();o(l)}else{const l=C3();o(l)}};this.canceled_?n(!1,new Su(!1,null,!0)):this.backoffId_=M3(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&V3(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class Su{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function U3(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function z3(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function H3(t,e){e&&(t["X-Firebase-GMPID"]=e)}function W3(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function q3(t,e,n,r,i,s,o=!0){const a=ZI(t.urlParams),l=t.url+a,c=Object.assign({},t.headers);return H3(c,e),U3(c,n),z3(c,s),W3(c,r),new B3(l,t.method,c,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,i,o)}/**
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
 */function G3(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function K3(...t){const e=G3();if(e!==void 0){const n=new e;for(let r=0;r<t.length;r++)n.append(t[r]);return n.getBlob()}else{if(iw())return new Blob(t);throw new Ye(Qe.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function Q3(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}/**
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
 */function Y3(t){if(typeof atob>"u")throw D3("base-64");return atob(t)}/**
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
 */const ar={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class Rp{constructor(e,n){this.data=e,this.contentType=n||null}}function X3(t,e){switch(t){case ar.RAW:return new Rp(e2(e));case ar.BASE64:case ar.BASE64URL:return new Rp(t2(t,e));case ar.DATA_URL:return new Rp(Z3(e),eB(e))}throw nw()}function e2(t){const e=[];for(let n=0;n<t.length;n++){let r=t.charCodeAt(n);if(r<=127)e.push(r);else if(r<=2047)e.push(192|r>>6,128|r&63);else if((r&64512)===55296)if(!(n<t.length-1&&(t.charCodeAt(n+1)&64512)===56320))e.push(239,191,189);else{const s=r,o=t.charCodeAt(++n);r=65536|(s&1023)<<10|o&1023,e.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63)}else(r&64512)===56320?e.push(239,191,189):e.push(224|r>>12,128|r>>6&63,128|r&63)}return new Uint8Array(e)}function J3(t){let e;try{e=decodeURIComponent(t)}catch{throw vl(ar.DATA_URL,"Malformed data URL.")}return e2(e)}function t2(t,e){switch(t){case ar.BASE64:{const i=e.indexOf("-")!==-1,s=e.indexOf("_")!==-1;if(i||s)throw vl(t,"Invalid character '"+(i?"-":"_")+"' found: is it base64url encoded?");break}case ar.BASE64URL:{const i=e.indexOf("+")!==-1,s=e.indexOf("/")!==-1;if(i||s)throw vl(t,"Invalid character '"+(i?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=Y3(e)}catch(i){throw i.message.includes("polyfill")?i:vl(t,"Invalid character found")}const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}class n2{constructor(e){this.base64=!1,this.contentType=null;const n=e.match(/^data:([^,]+)?,/);if(n===null)throw vl(ar.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const r=n[1]||null;r!=null&&(this.base64=tB(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-7):r),this.rest=e.substring(e.indexOf(",")+1)}}function Z3(t){const e=new n2(t);return e.base64?t2(ar.BASE64,e.rest):J3(e.rest)}function eB(t){return new n2(t).contentType}function tB(t,e){return t.length>=e.length?t.substring(t.length-e.length)===e:!1}/**
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
 */class oi{constructor(e,n){let r=0,i="";iE(e)?(this.data_=e,r=e.size,i=e.type):e instanceof ArrayBuffer?(n?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),r=this.data_.length):e instanceof Uint8Array&&(n?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),r=e.length),this.size_=r,this.type_=i}size(){return this.size_}type(){return this.type_}slice(e,n){if(iE(this.data_)){const r=this.data_,i=Q3(r,e,n);return i===null?null:new oi(i)}else{const r=new Uint8Array(this.data_.buffer,e,n-e);return new oi(r,!0)}}static getBlob(...e){if(iw()){const n=e.map(r=>r instanceof oi?r.data_:r);return new oi(K3.apply(null,n))}else{const n=e.map(o=>rw(o)?X3(ar.RAW,o).data:o.data_);let r=0;n.forEach(o=>{r+=o.byteLength});const i=new Uint8Array(r);let s=0;return n.forEach(o=>{for(let a=0;a<o.length;a++)i[s++]=o[a]}),new oi(i,!0)}}uploadData(){return this.data_}}/**
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
 */function r2(t){let e;try{e=JSON.parse(t)}catch{return null}return F3(e)?e:null}/**
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
 */function nB(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function rB(t,e){const n=e.split("/").filter(r=>r.length>0).join("/");return t.length===0?n:t+"/"+n}function i2(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
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
 */function iB(t,e){return e}class zt{constructor(e,n,r,i){this.server=e,this.local=n||e,this.writable=!!r,this.xform=i||iB}}let bu=null;function sB(t){return!rw(t)||t.length<2?t:i2(t)}function s2(){if(bu)return bu;const t=[];t.push(new zt("bucket")),t.push(new zt("generation")),t.push(new zt("metageneration")),t.push(new zt("name","fullPath",!0));function e(s,o){return sB(o)}const n=new zt("name");n.xform=e,t.push(n);function r(s,o){return o!==void 0?Number(o):o}const i=new zt("size");return i.xform=r,t.push(i),t.push(new zt("timeCreated")),t.push(new zt("updated")),t.push(new zt("md5Hash",null,!0)),t.push(new zt("cacheControl",null,!0)),t.push(new zt("contentDisposition",null,!0)),t.push(new zt("contentEncoding",null,!0)),t.push(new zt("contentLanguage",null,!0)),t.push(new zt("contentType",null,!0)),t.push(new zt("metadata","customMetadata",!0)),bu=t,bu}function oB(t,e){function n(){const r=t.bucket,i=t.fullPath,s=new pn(r,i);return e._makeStorageReference(s)}Object.defineProperty(t,"ref",{get:n})}function aB(t,e,n){const r={};r.type="file";const i=n.length;for(let s=0;s<i;s++){const o=n[s];r[o.local]=o.xform(r,e[o.server])}return oB(r,t),r}function o2(t,e,n){const r=r2(e);return r===null?null:aB(t,r,n)}function lB(t,e,n,r){const i=r2(e);if(i===null||!rw(i.downloadTokens))return null;const s=i.downloadTokens;if(s.length===0)return null;const o=encodeURIComponent;return s.split(",").map(c=>{const u=t.bucket,h=t.fullPath,m="/b/"+o(u)+"/o/"+o(h),v=sw(m,n,r),x=ZI({alt:"media",token:c});return v+x})[0]}function cB(t,e){const n={},r=e.length;for(let i=0;i<r;i++){const s=e[i];s.writable&&(n[s.server]=t[s.local])}return JSON.stringify(n)}class a2{constructor(e,n,r,i){this.url=e,this.method=n,this.handler=r,this.timeout=i,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
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
 */function l2(t){if(!t)throw nw()}function uB(t,e){function n(r,i){const s=o2(t,i,e);return l2(s!==null),s}return n}function dB(t,e){function n(r,i){const s=o2(t,i,e);return l2(s!==null),lB(s,i,t.host,t._protocol)}return n}function c2(t){function e(n,r){let i;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?i=S3():i=x3():n.getStatus()===402?i=T3(t.bucket):n.getStatus()===403?i=b3(t.path):i=r,i.status=n.getStatus(),i.serverResponse=r.serverResponse,i}return e}function fB(t){const e=c2(t);function n(r,i){let s=e(r,i);return r.getStatus()===404&&(s=E3(t.path)),s.serverResponse=i.serverResponse,s}return n}function hB(t,e,n){const r=e.fullServerUrl(),i=sw(r,t.host,t._protocol),s="GET",o=t.maxOperationRetryTime,a=new a2(i,s,dB(t,n),o);return a.errorHandler=fB(e),a}function pB(t,e){return t&&t.contentType||e&&e.type()||"application/octet-stream"}function mB(t,e,n){const r=Object.assign({},n);return r.fullPath=t.path,r.size=e.size(),r.contentType||(r.contentType=pB(null,e)),r}function gB(t,e,n,r,i){const s=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function a(){let y="";for(let E=0;E<2;E++)y=y+Math.random().toString().slice(2);return y}const l=a();o["Content-Type"]="multipart/related; boundary="+l;const c=mB(e,r,i),u=cB(c,n),h="--"+l+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+u+`\r
--`+l+`\r
Content-Type: `+c.contentType+`\r
\r
`,m=`\r
--`+l+"--",v=oi.getBlob(h,r,m);if(v===null)throw R3();const x={name:c.fullPath},g=sw(s,t.host,t._protocol),S="POST",w=t.maxUploadRetryTime,p=new a2(g,S,uB(t,n),w);return p.urlParams=x,p.headers=o,p.body=v.uploadData(),p.errorHandler=c2(e),p}class yB{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=ps.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=ps.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=ps.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,n,r,i){if(this.sent_)throw Fa("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(n,e,!0),i!==void 0)for(const s in i)i.hasOwnProperty(s)&&this.xhr_.setRequestHeader(s,i[s].toString());return r!==void 0?this.xhr_.send(r):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw Fa("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw Fa("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw Fa("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw Fa("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class vB extends yB{initXhr(){this.xhr_.responseType="text"}}function u2(){return new vB}/**
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
 */class As{constructor(e,n){this._service=e,n instanceof pn?this._location=n:this._location=pn.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new As(e,n)}get root(){const e=new pn(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return i2(this._location.path)}get storage(){return this._service}get parent(){const e=nB(this._location.path);if(e===null)return null;const n=new pn(this._location.bucket,e);return new As(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw N3(e)}}function wB(t,e,n){t._throwIfRoot("uploadBytes");const r=gB(t.storage,t._location,s2(),new oi(e,!0),n);return t.storage.makeRequestWithTokens(r,u2).then(i=>({metadata:i,ref:t}))}function _B(t){t._throwIfRoot("getDownloadURL");const e=hB(t.storage,t._location,s2());return t.storage.makeRequestWithTokens(e,u2).then(n=>{if(n===null)throw O3();return n})}function EB(t,e){const n=rB(t._location.path,e),r=new pn(t._location.bucket,n);return new As(t.storage,r)}/**
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
 */function TB(t){return/^[A-Za-z]+:\/\//.test(t)}function xB(t,e){return new As(t,e)}function d2(t,e){if(t instanceof ow){const n=t;if(n._bucket==null)throw k3();const r=new As(n,n._bucket);return e!=null?d2(r,e):r}else return e!==void 0?EB(t,e):t}function SB(t,e){if(e&&TB(e)){if(t instanceof ow)return xB(t,e);throw xg("To use ref(service, url), the first argument must be a Storage instance.")}else return d2(t,e)}function oE(t,e){const n=e==null?void 0:e[XI];return n==null?null:pn.makeFromBucketSpec(n,t)}function bB(t,e,n,r={}){t.host=`${e}:${n}`,t._protocol="http";const{mockUserToken:i}=r;i&&(t._overrideAuthToken=typeof i=="string"?i:qS(i,t.app.options.projectId))}class ow{constructor(e,n,r,i,s){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=i,this._firebaseVersion=s,this._bucket=null,this._host=YI,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=w3,this._maxUploadRetryTime=_3,this._requests=new Set,i!=null?this._bucket=pn.makeFromBucketSpec(i,this._host):this._bucket=oE(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=pn.makeFromBucketSpec(this._url,e):this._bucket=oE(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){sE("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){sE("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new As(this,e)}_makeRequest(e,n,r,i,s=!0){if(this._deleted)return new L3(JI());{const o=q3(e,this._appId,r,i,n,this._firebaseVersion,s);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[r,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,i).getPromise()}}const aE="@firebase/storage",lE="0.11.2";/**
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
 */const f2="storage";function h2(t,e,n){return t=vt(t),wB(t,e,n)}function p2(t){return t=vt(t),_B(t)}function m2(t,e){return t=vt(t),SB(t,e)}function CB(t=Gy(),e){t=vt(t);const r=Bf(t,f2).getImmediate({identifier:e}),i=zS("storage");return i&&IB(r,...i),r}function IB(t,e,n,r={}){bB(t,e,n,r)}function AB(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),i=t.getProvider("app-check-internal");return new ow(n,r,i,e,Ms)}function PB(){Ts(new Pi(f2,AB,"PUBLIC").setMultipleInstances(!0)),dr(aE,lE,""),dr(aE,lE,"esm2017")}PB();const kB={apiKey:"AIzaSyCSsgfeoEPYt1FVt3z0pgFCWE1hYhx1skg",authDomain:"alquicancha-d6d01.firebaseapp.com",projectId:"alquicancha-d6d01",storageBucket:"alquicancha-d6d01.appspot.com",messagingSenderId:"1094541898575",appId:"1:1094541898575:web:d9289dd62ccbf70d568b3a"},aw=QS(kB),lw=dV(aw),ln=t3(aw),g2=CB(aw),Sg=async()=>{const t=an(ln,"productos");try{return(await vh(t)).docs.map(r=>({id:r.id,...r.data()}))}catch(e){console.log(e)}},RB=async t=>{try{const e=m2(g2,`productosImagenes/${t.name}`);return await h2(e,t),await p2(e)}catch(e){return console.log(e),null}},OB=async t=>{try{if(t.imagenes.length){const n=(await Promise.all(t.imagenes.map(async c=>await RB(c.img)))).map(c=>({urlImage:c})),r={...t,imagenes:n},i=an(ln,"productos"),o=(await rf(i,r)).id,a=yr(i,o),l=await ta(a,{id:o},{merge:!0});return console.log("Producto creado exitosamente",l),l}else{const e=an(ln,"productos"),r=(await rf(e,t)).id,i=yr(e,r),s=await ta(i,{id:r},{merge:!0});return console.log("Producto creado exitosamente",s),s}}catch(e){return console.log("Error al guardar producto en BD",e),null}},DB=async t=>{try{const e=an(ln,"productos"),n=yr(e,t);return await QI(n)}catch(e){console.log(e)}},NB=async(t,e)=>{try{const n=an(ln,"productos"),r=yr(n,t),i=await ta(r,e,{merge:!0});console.log("Edicion correcta de producto :",t)}catch(n){console.log(n)}},LB=async t=>{try{const e=an(ln,"productos"),n=yr(e,t),r=await y3(n);return r.exists()?r.data():(console.log("El documento no existe"),null)}catch(e){return console.log(e),null}},bg=async()=>{const t=an(ln,"categorias");try{return(await vh(t)).docs.map(r=>({id:r.id,...r.data()}))}catch(e){console.log(e)}},y2=async t=>{try{const e=m2(g2,`categoriasImagenes/${t.name}`);return await h2(e,t),await p2(e)}catch(e){console.log(e)}},MB=async t=>{try{t.urlImage=await y2(t.imagen);const{imagen:e,...n}=t,r=an(ln,"categorias"),s=(await rf(r,n)).id,o=yr(r,s),a=await ta(o,{id:s},{merge:!0});return console.log("Categoria creada exitosamente",a),a}catch(e){return console.log("Error al guardar categoria en BD",e),null}},VB=async t=>{if(t==="9a9crFjibptLfhr3glcE")return console.log("No se puede eliminar la categoria principal!"),null;try{const e=an(ln,"categorias"),n=yr(e,t);return await QI(n)}catch(e){console.log(e)}},jB=async(t,e)=>{try{e.urlImage=await y2(e.imagen);const n=an(ln,"categorias"),{imagen:r,...i}=e,s=yr(n,t);await ta(s,i,{merge:!0}),console.log("Edicion correcta de la categoria :",t)}catch(n){console.log(n)}},FB={theme:"light"},On=A.createContext(),$B=({children:t})=>{const e=localStorage.getItem("theme")||FB.theme,n=localStorage.getItem("logged")==="true",r=localStorage.getItem("isAdmin")==="true",i=JSON.parse(localStorage.getItem("user")),s=JSON.parse(localStorage.getItem("productos")),o=JSON.parse(localStorage.getItem("categorias")),[a,l]=A.useState(e),[c,u]=A.useState(n),[h,m]=A.useState(r),[v,x]=A.useState(i),[g,S]=A.useState(s),[w,p]=A.useState(o);A.useEffect(()=>{const W=async()=>{const M=await Sg();S(M)},F=async()=>{const M=await bg();p(M)};W(),F(),localStorage.setItem("theme",a),localStorage.setItem("logged",c),localStorage.setItem("isAdmin",h),localStorage.setItem("user",JSON.stringify(v))},[a,c,h,v]),A.useEffect(()=>{localStorage.setItem("productos",JSON.stringify(g))},[g]),A.useEffect(()=>{localStorage.setItem("categorias",JSON.stringify(w))},[w]);const y=()=>{l(W=>W==="light"?"dark":"light")},E=()=>{u(!0)},C=()=>{u(!1)},I=()=>{m(!0)},P=()=>{m(!1)},R=W=>{x(W)},N=W=>{S(W)},O=W=>{p(W)},U=A.useMemo(()=>({theme:a,toggleTheme:y,logged:c,login:E,logout:C,isAdmin:h,loginAdmin:I,logoutAdmin:P,user:v,setUserData:R,setProductData:N,productos:g,setCategoriasData:O,categorias:w}),[a,c,h,v,g,w]);return T.jsx(On.Provider,{value:{contextValue:U},children:t})};var v2={exports:{}};/*!
* sweetalert2 v11.9.0
* Released under the MIT License.
*/(function(t,e){(function(n,r){t.exports=r()})(Kr,function(){function n(d,f){var _=i(d,f,"get");return s(d,_)}function r(d,f,_){var b=i(d,f,"set");return o(d,b,_),_}function i(d,f,_){if(!f.has(d))throw new TypeError("attempted to "+_+" private field on non-instance");return f.get(d)}function s(d,f){return f.get?f.get.call(d):f.value}function o(d,f,_){if(f.set)f.set.call(d,_);else{if(!f.writable)throw new TypeError("attempted to set read only private field");f.value=_}}function a(d,f){if(f.has(d))throw new TypeError("Cannot initialize the same private elements twice on an object")}function l(d,f,_){a(d,f),f.set(d,_)}const c=100,u={},h=()=>{u.previousActiveElement instanceof HTMLElement?(u.previousActiveElement.focus(),u.previousActiveElement=null):document.body&&document.body.focus()},m=d=>new Promise(f=>{if(!d)return f();const _=window.scrollX,b=window.scrollY;u.restoreFocusTimeout=setTimeout(()=>{h(),f()},c),window.scrollTo(_,b)}),v="swal2-",g=["container","shown","height-auto","iosfix","popup","modal","no-backdrop","no-transition","toast","toast-shown","show","hide","close","title","html-container","actions","confirm","deny","cancel","default-outline","footer","icon","icon-content","image","input","file","range","select","radio","checkbox","label","textarea","inputerror","input-label","validation-message","progress-steps","active-progress-step","progress-step","progress-step-line","loader","loading","styled","top","top-start","top-end","top-left","top-right","center","center-start","center-end","center-left","center-right","bottom","bottom-start","bottom-end","bottom-left","bottom-right","grow-row","grow-column","grow-fullscreen","rtl","timer-progress-bar","timer-progress-bar-container","scrollbar-measure","icon-success","icon-warning","icon-info","icon-question","icon-error"].reduce((d,f)=>(d[f]=v+f,d),{}),w=["success","warning","info","question","error"].reduce((d,f)=>(d[f]=v+f,d),{}),p="SweetAlert2:",y=d=>d.charAt(0).toUpperCase()+d.slice(1),E=d=>{console.warn("".concat(p," ").concat(typeof d=="object"?d.join(" "):d))},C=d=>{console.error("".concat(p," ").concat(d))},I=[],P=d=>{I.includes(d)||(I.push(d),E(d))},R=(d,f)=>{P('"'.concat(d,'" is deprecated and will be removed in the next major release. Please use "').concat(f,'" instead.'))},N=d=>typeof d=="function"?d():d,O=d=>d&&typeof d.toPromise=="function",U=d=>O(d)?d.toPromise():Promise.resolve(d),W=d=>d&&Promise.resolve(d)===d,F=()=>document.body.querySelector(".".concat(g.container)),M=d=>{const f=F();return f?f.querySelector(d):null},V=d=>M(".".concat(d)),q=()=>V(g.popup),k=()=>V(g.icon),D=()=>V(g["icon-content"]),B=()=>V(g.title),K=()=>V(g["html-container"]),re=()=>V(g.image),ue=()=>V(g["progress-steps"]),ke=()=>V(g["validation-message"]),fe=()=>M(".".concat(g.actions," .").concat(g.confirm)),nt=()=>M(".".concat(g.actions," .").concat(g.cancel)),ve=()=>M(".".concat(g.actions," .").concat(g.deny)),lt=()=>V(g["input-label"]),cn=()=>M(".".concat(g.loader)),un=()=>V(g.actions),kt=()=>V(g.footer),_r=()=>V(g["timer-progress-bar"]),Yn=()=>V(g.close),zc=`
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
`,Bs=()=>{const d=q();if(!d)return[];const f=d.querySelectorAll('[tabindex]:not([tabindex="-1"]):not([tabindex="0"])'),_=Array.from(f).sort((ee,_e)=>{const Re=parseInt(ee.getAttribute("tabindex")||"0"),Be=parseInt(_e.getAttribute("tabindex")||"0");return Re>Be?1:Re<Be?-1:0}),b=d.querySelectorAll(zc),L=Array.from(b).filter(ee=>ee.getAttribute("tabindex")!=="-1");return[...new Set(_.concat(L))].filter(ee=>ft(ee))},Us=()=>Qt(document.body,g.shown)&&!Qt(document.body,g["toast-shown"])&&!Qt(document.body,g["no-backdrop"]),$i=()=>{const d=q();return d?Qt(d,g.toast):!1},qr=()=>{const d=q();return d?d.hasAttribute("data-loading"):!1},Et=(d,f)=>{if(d.textContent="",f){const b=new DOMParser().parseFromString(f,"text/html"),L=b.querySelector("head");L&&Array.from(L.childNodes).forEach(_e=>{d.appendChild(_e)});const ee=b.querySelector("body");ee&&Array.from(ee.childNodes).forEach(_e=>{_e instanceof HTMLVideoElement||_e instanceof HTMLAudioElement?d.appendChild(_e.cloneNode(!0)):d.appendChild(_e)})}},Qt=(d,f)=>{if(!f)return!1;const _=f.split(/\s+/);for(let b=0;b<_.length;b++)if(!d.classList.contains(_[b]))return!1;return!0},zs=(d,f)=>{Array.from(d.classList).forEach(_=>{!Object.values(g).includes(_)&&!Object.values(w).includes(_)&&!Object.values(f.showClass||{}).includes(_)&&d.classList.remove(_)})},Yt=(d,f,_)=>{if(zs(d,f),f.customClass&&f.customClass[_]){if(typeof f.customClass[_]!="string"&&!f.customClass[_].forEach){E("Invalid type of customClass.".concat(_,'! Expected string or iterable object, got "').concat(typeof f.customClass[_],'"'));return}G(d,f.customClass[_])}},Hs=(d,f)=>{if(!f)return null;switch(f){case"select":case"textarea":case"file":return d.querySelector(".".concat(g.popup," > .").concat(g[f]));case"checkbox":return d.querySelector(".".concat(g.popup," > .").concat(g.checkbox," input"));case"radio":return d.querySelector(".".concat(g.popup," > .").concat(g.radio," input:checked"))||d.querySelector(".".concat(g.popup," > .").concat(g.radio," input:first-child"));case"range":return d.querySelector(".".concat(g.popup," > .").concat(g.range," input"));default:return d.querySelector(".".concat(g.popup," > .").concat(g.input))}},Hc=d=>{if(d.focus(),d.type!=="file"){const f=d.value;d.value="",d.value=f}},Y=(d,f,_)=>{!d||!f||(typeof f=="string"&&(f=f.split(/\s+/).filter(Boolean)),f.forEach(b=>{Array.isArray(d)?d.forEach(L=>{_?L.classList.add(b):L.classList.remove(b)}):_?d.classList.add(b):d.classList.remove(b)}))},G=(d,f)=>{Y(d,f,!0)},we=(d,f)=>{Y(d,f,!1)},Ie=(d,f)=>{const _=Array.from(d.children);for(let b=0;b<_.length;b++){const L=_[b];if(L instanceof HTMLElement&&Qt(L,f))return L}},Xe=(d,f,_)=>{_==="".concat(parseInt(_))&&(_=parseInt(_)),_||parseInt(_)===0?d.style[f]=typeof _=="number"?"".concat(_,"px"):_:d.style.removeProperty(f)},Fe=function(d){let f=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"flex";d&&(d.style.display=f)},$e=d=>{d&&(d.style.display="none")},Bi=function(d){let f=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"block";d&&new MutationObserver(()=>{Er(d,d.innerHTML,f)}).observe(d,{childList:!0,subtree:!0})},Ws=(d,f,_,b)=>{const L=d.querySelector(f);L&&(L.style[_]=b)},Er=function(d,f){let _=arguments.length>2&&arguments[2]!==void 0?arguments[2]:"flex";f?Fe(d,_):$e(d)},ft=d=>!!(d&&(d.offsetWidth||d.offsetHeight||d.getClientRects().length)),Sa=()=>!ft(fe())&&!ft(ve())&&!ft(nt()),qs=d=>d.scrollHeight>d.clientHeight,Gs=d=>{const f=window.getComputedStyle(d),_=parseFloat(f.getPropertyValue("animation-duration")||"0"),b=parseFloat(f.getPropertyValue("transition-duration")||"0");return _>0||b>0},Ui=function(d){let f=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;const _=_r();_&&ft(_)&&(f&&(_.style.transition="none",_.style.width="100%"),setTimeout(()=>{_.style.transition="width ".concat(d/1e3,"s linear"),_.style.width="0%"},10))},xh=()=>{const d=_r();if(!d)return;const f=parseInt(window.getComputedStyle(d).width);d.style.removeProperty("transition"),d.style.width="100%";const _=parseInt(window.getComputedStyle(d).width),b=f/_*100;d.style.width="".concat(b,"%")},yw=()=>typeof window>"u"||typeof document>"u",uA=`
 <div aria-labelledby="`.concat(g.title,'" aria-describedby="').concat(g["html-container"],'" class="').concat(g.popup,`" tabindex="-1">
   <button type="button" class="`).concat(g.close,`"></button>
   <ul class="`).concat(g["progress-steps"],`"></ul>
   <div class="`).concat(g.icon,`"></div>
   <img class="`).concat(g.image,`" />
   <h2 class="`).concat(g.title,'" id="').concat(g.title,`"></h2>
   <div class="`).concat(g["html-container"],'" id="').concat(g["html-container"],`"></div>
   <input class="`).concat(g.input,'" id="').concat(g.input,`" />
   <input type="file" class="`).concat(g.file,`" />
   <div class="`).concat(g.range,`">
     <input type="range" />
     <output></output>
   </div>
   <select class="`).concat(g.select,'" id="').concat(g.select,`"></select>
   <div class="`).concat(g.radio,`"></div>
   <label class="`).concat(g.checkbox,`">
     <input type="checkbox" id="`).concat(g.checkbox,`" />
     <span class="`).concat(g.label,`"></span>
   </label>
   <textarea class="`).concat(g.textarea,'" id="').concat(g.textarea,`"></textarea>
   <div class="`).concat(g["validation-message"],'" id="').concat(g["validation-message"],`"></div>
   <div class="`).concat(g.actions,`">
     <div class="`).concat(g.loader,`"></div>
     <button type="button" class="`).concat(g.confirm,`"></button>
     <button type="button" class="`).concat(g.deny,`"></button>
     <button type="button" class="`).concat(g.cancel,`"></button>
   </div>
   <div class="`).concat(g.footer,`"></div>
   <div class="`).concat(g["timer-progress-bar-container"],`">
     <div class="`).concat(g["timer-progress-bar"],`"></div>
   </div>
 </div>
`).replace(/(^|\n)\s*/g,""),dA=()=>{const d=F();return d?(d.remove(),we([document.documentElement,document.body],[g["no-backdrop"],g["toast-shown"],g["has-column"]]),!0):!1},zi=()=>{u.currentInstance.resetValidationMessage()},fA=()=>{const d=q(),f=Ie(d,g.input),_=Ie(d,g.file),b=d.querySelector(".".concat(g.range," input")),L=d.querySelector(".".concat(g.range," output")),ee=Ie(d,g.select),_e=d.querySelector(".".concat(g.checkbox," input")),Re=Ie(d,g.textarea);f.oninput=zi,_.onchange=zi,ee.onchange=zi,_e.onchange=zi,Re.oninput=zi,b.oninput=()=>{zi(),L.value=b.value},b.onchange=()=>{zi(),L.value=b.value}},hA=d=>typeof d=="string"?document.querySelector(d):d,pA=d=>{const f=q();f.setAttribute("role",d.toast?"alert":"dialog"),f.setAttribute("aria-live",d.toast?"polite":"assertive"),d.toast||f.setAttribute("aria-modal","true")},mA=d=>{window.getComputedStyle(d).direction==="rtl"&&G(F(),g.rtl)},gA=d=>{const f=dA();if(yw()){C("SweetAlert2 requires document to initialize");return}const _=document.createElement("div");_.className=g.container,f&&G(_,g["no-transition"]),Et(_,uA);const b=hA(d.target);b.appendChild(_),pA(d),mA(b),fA()},Sh=(d,f)=>{d instanceof HTMLElement?f.appendChild(d):typeof d=="object"?yA(d,f):d&&Et(f,d)},yA=(d,f)=>{d.jquery?vA(f,d):Et(f,d.toString())},vA=(d,f)=>{if(d.textContent="",0 in f)for(let _=0;_ in f;_++)d.appendChild(f[_].cloneNode(!0));else d.appendChild(f.cloneNode(!0))},Hi=(()=>{if(yw())return!1;const d=document.createElement("div");return typeof d.style.webkitAnimation<"u"?"webkitAnimationEnd":typeof d.style.animation<"u"?"animationend":!1})(),wA=(d,f)=>{const _=un(),b=cn();!_||!b||(!f.showConfirmButton&&!f.showDenyButton&&!f.showCancelButton?$e(_):Fe(_),Yt(_,f,"actions"),_A(_,b,f),Et(b,f.loaderHtml||""),Yt(b,f,"loader"))};function _A(d,f,_){const b=fe(),L=ve(),ee=nt();!b||!L||!ee||(bh(b,"confirm",_),bh(L,"deny",_),bh(ee,"cancel",_),EA(b,L,ee,_),_.reverseButtons&&(_.toast?(d.insertBefore(ee,b),d.insertBefore(L,b)):(d.insertBefore(ee,f),d.insertBefore(L,f),d.insertBefore(b,f))))}function EA(d,f,_,b){if(!b.buttonsStyling){we([d,f,_],g.styled);return}G([d,f,_],g.styled),b.confirmButtonColor&&(d.style.backgroundColor=b.confirmButtonColor,G(d,g["default-outline"])),b.denyButtonColor&&(f.style.backgroundColor=b.denyButtonColor,G(f,g["default-outline"])),b.cancelButtonColor&&(_.style.backgroundColor=b.cancelButtonColor,G(_,g["default-outline"]))}function bh(d,f,_){const b=y(f);Er(d,_["show".concat(b,"Button")],"inline-block"),Et(d,_["".concat(f,"ButtonText")]||""),d.setAttribute("aria-label",_["".concat(f,"ButtonAriaLabel")]||""),d.className=g[f],Yt(d,_,"".concat(f,"Button"))}const TA=(d,f)=>{const _=Yn();_&&(Et(_,f.closeButtonHtml||""),Yt(_,f,"closeButton"),Er(_,f.showCloseButton),_.setAttribute("aria-label",f.closeButtonAriaLabel||""))},xA=(d,f)=>{const _=F();_&&(SA(_,f.backdrop),bA(_,f.position),CA(_,f.grow),Yt(_,f,"container"))};function SA(d,f){typeof f=="string"?d.style.background=f:f||G([document.documentElement,document.body],g["no-backdrop"])}function bA(d,f){f&&(f in g?G(d,g[f]):(E('The "position" parameter is not valid, defaulting to "center"'),G(d,g.center)))}function CA(d,f){f&&G(d,g["grow-".concat(f)])}var Ae={innerParams:new WeakMap,domCache:new WeakMap};const IA=["input","file","range","select","radio","checkbox","textarea"],AA=(d,f)=>{const _=q();if(!_)return;const b=Ae.innerParams.get(d),L=!b||f.input!==b.input;IA.forEach(ee=>{const _e=Ie(_,g[ee]);_e&&(RA(ee,f.inputAttributes),_e.className=g[ee],L&&$e(_e))}),f.input&&(L&&PA(f),OA(f))},PA=d=>{if(!d.input)return;if(!Je[d.input]){C("Unexpected type of input! Expected ".concat(Object.keys(Je).join(" | "),', got "').concat(d.input,'"'));return}const f=vw(d.input),_=Je[d.input](f,d);Fe(f),d.inputAutoFocus&&setTimeout(()=>{Hc(_)})},kA=d=>{for(let f=0;f<d.attributes.length;f++){const _=d.attributes[f].name;["id","type","value","style"].includes(_)||d.removeAttribute(_)}},RA=(d,f)=>{const _=Hs(q(),d);if(_){kA(_);for(const b in f)_.setAttribute(b,f[b])}},OA=d=>{const f=vw(d.input);typeof d.customClass=="object"&&G(f,d.customClass.input)},Ch=(d,f)=>{(!d.placeholder||f.inputPlaceholder)&&(d.placeholder=f.inputPlaceholder)},ba=(d,f,_)=>{if(_.inputLabel){const b=document.createElement("label"),L=g["input-label"];b.setAttribute("for",d.id),b.className=L,typeof _.customClass=="object"&&G(b,_.customClass.inputLabel),b.innerText=_.inputLabel,f.insertAdjacentElement("beforebegin",b)}},vw=d=>Ie(q(),g[d]||g.input),Wc=(d,f)=>{["string","number"].includes(typeof f)?d.value="".concat(f):W(f)||E('Unexpected type of inputValue! Expected "string", "number" or "Promise", got "'.concat(typeof f,'"'))},Je={};Je.text=Je.email=Je.password=Je.number=Je.tel=Je.url=Je.search=Je.date=Je["datetime-local"]=Je.time=Je.week=Je.month=(d,f)=>(Wc(d,f.inputValue),ba(d,d,f),Ch(d,f),d.type=f.input,d),Je.file=(d,f)=>(ba(d,d,f),Ch(d,f),d),Je.range=(d,f)=>{const _=d.querySelector("input"),b=d.querySelector("output");return Wc(_,f.inputValue),_.type=f.input,Wc(b,f.inputValue),ba(_,d,f),d},Je.select=(d,f)=>{if(d.textContent="",f.inputPlaceholder){const _=document.createElement("option");Et(_,f.inputPlaceholder),_.value="",_.disabled=!0,_.selected=!0,d.appendChild(_)}return ba(d,d,f),d},Je.radio=d=>(d.textContent="",d),Je.checkbox=(d,f)=>{const _=Hs(q(),"checkbox");_.value="1",_.checked=!!f.inputValue;const b=d.querySelector("span");return Et(b,f.inputPlaceholder),_},Je.textarea=(d,f)=>{Wc(d,f.inputValue),Ch(d,f),ba(d,d,f);const _=b=>parseInt(window.getComputedStyle(b).marginLeft)+parseInt(window.getComputedStyle(b).marginRight);return setTimeout(()=>{if("MutationObserver"in window){const b=parseInt(window.getComputedStyle(q()).width),L=()=>{if(!document.body.contains(d))return;const ee=d.offsetWidth+_(d);ee>b?q().style.width="".concat(ee,"px"):Xe(q(),"width",f.width)};new MutationObserver(L).observe(d,{attributes:!0,attributeFilter:["style"]})}}),d};const DA=(d,f)=>{const _=K();_&&(Bi(_),Yt(_,f,"htmlContainer"),f.html?(Sh(f.html,_),Fe(_,"block")):f.text?(_.textContent=f.text,Fe(_,"block")):$e(_),AA(d,f))},NA=(d,f)=>{const _=kt();_&&(Bi(_),Er(_,f.footer,"block"),f.footer&&Sh(f.footer,_),Yt(_,f,"footer"))},LA=(d,f)=>{const _=Ae.innerParams.get(d),b=k();if(b){if(_&&f.icon===_.icon){_w(b,f),ww(b,f);return}if(!f.icon&&!f.iconHtml){$e(b);return}if(f.icon&&Object.keys(w).indexOf(f.icon)===-1){C('Unknown icon! Expected "success", "error", "warning", "info" or "question", got "'.concat(f.icon,'"')),$e(b);return}Fe(b),_w(b,f),ww(b,f),G(b,f.showClass&&f.showClass.icon)}},ww=(d,f)=>{for(const[_,b]of Object.entries(w))f.icon!==_&&we(d,b);G(d,f.icon&&w[f.icon]),FA(d,f),MA(),Yt(d,f,"icon")},MA=()=>{const d=q();if(!d)return;const f=window.getComputedStyle(d).getPropertyValue("background-color"),_=d.querySelectorAll("[class^=swal2-success-circular-line], .swal2-success-fix");for(let b=0;b<_.length;b++)_[b].style.backgroundColor=f},VA=`
  <div class="swal2-success-circular-line-left"></div>
  <span class="swal2-success-line-tip"></span> <span class="swal2-success-line-long"></span>
  <div class="swal2-success-ring"></div> <div class="swal2-success-fix"></div>
  <div class="swal2-success-circular-line-right"></div>
`,jA=`
  <span class="swal2-x-mark">
    <span class="swal2-x-mark-line-left"></span>
    <span class="swal2-x-mark-line-right"></span>
  </span>
`,_w=(d,f)=>{if(!f.icon&&!f.iconHtml)return;let _=d.innerHTML,b="";f.iconHtml?b=Ew(f.iconHtml):f.icon==="success"?(b=VA,_=_.replace(/ style=".*?"/g,"")):f.icon==="error"?b=jA:f.icon&&(b=Ew({question:"?",warning:"!",info:"i"}[f.icon])),_.trim()!==b.trim()&&Et(d,b)},FA=(d,f)=>{if(f.iconColor){d.style.color=f.iconColor,d.style.borderColor=f.iconColor;for(const _ of[".swal2-success-line-tip",".swal2-success-line-long",".swal2-x-mark-line-left",".swal2-x-mark-line-right"])Ws(d,_,"backgroundColor",f.iconColor);Ws(d,".swal2-success-ring","borderColor",f.iconColor)}},Ew=d=>'<div class="'.concat(g["icon-content"],'">').concat(d,"</div>"),$A=(d,f)=>{const _=re();if(_){if(!f.imageUrl){$e(_);return}Fe(_,""),_.setAttribute("src",f.imageUrl),_.setAttribute("alt",f.imageAlt||""),Xe(_,"width",f.imageWidth),Xe(_,"height",f.imageHeight),_.className=g.image,Yt(_,f,"image")}},BA=(d,f)=>{const _=F(),b=q();if(!(!_||!b)){if(f.toast){Xe(_,"width",f.width),b.style.width="100%";const L=cn();L&&b.insertBefore(L,k())}else Xe(b,"width",f.width);Xe(b,"padding",f.padding),f.color&&(b.style.color=f.color),f.background&&(b.style.background=f.background),$e(ke()),UA(b,f)}},UA=(d,f)=>{const _=f.showClass||{};d.className="".concat(g.popup," ").concat(ft(d)?_.popup:""),f.toast?(G([document.documentElement,document.body],g["toast-shown"]),G(d,g.toast)):G(d,g.modal),Yt(d,f,"popup"),typeof f.customClass=="string"&&G(d,f.customClass),f.icon&&G(d,g["icon-".concat(f.icon)])},zA=(d,f)=>{const _=ue();if(!_)return;const{progressSteps:b,currentProgressStep:L}=f;if(!b||b.length===0||L===void 0){$e(_);return}Fe(_),_.textContent="",L>=b.length&&E("Invalid currentProgressStep parameter, it should be less than progressSteps.length (currentProgressStep like JS arrays starts from 0)"),b.forEach((ee,_e)=>{const Re=HA(ee);if(_.appendChild(Re),_e===L&&G(Re,g["active-progress-step"]),_e!==b.length-1){const Be=WA(f);_.appendChild(Be)}})},HA=d=>{const f=document.createElement("li");return G(f,g["progress-step"]),Et(f,d),f},WA=d=>{const f=document.createElement("li");return G(f,g["progress-step-line"]),d.progressStepsDistance&&Xe(f,"width",d.progressStepsDistance),f},qA=(d,f)=>{const _=B();_&&(Bi(_),Er(_,f.title||f.titleText,"block"),f.title&&Sh(f.title,_),f.titleText&&(_.innerText=f.titleText),Yt(_,f,"title"))},Tw=(d,f)=>{BA(d,f),xA(d,f),zA(d,f),LA(d,f),$A(d,f),qA(d,f),TA(d,f),DA(d,f),wA(d,f),NA(d,f);const _=q();typeof f.didRender=="function"&&_&&f.didRender(_)},GA=()=>ft(q()),xw=()=>{var d;return(d=fe())===null||d===void 0?void 0:d.click()},KA=()=>{var d;return(d=ve())===null||d===void 0?void 0:d.click()},QA=()=>{var d;return(d=nt())===null||d===void 0?void 0:d.click()},Ks=Object.freeze({cancel:"cancel",backdrop:"backdrop",close:"close",esc:"esc",timer:"timer"}),Sw=d=>{d.keydownTarget&&d.keydownHandlerAdded&&(d.keydownTarget.removeEventListener("keydown",d.keydownHandler,{capture:d.keydownListenerCapture}),d.keydownHandlerAdded=!1)},YA=(d,f,_)=>{Sw(d),f.toast||(d.keydownHandler=b=>JA(f,b,_),d.keydownTarget=f.keydownListenerCapture?window:q(),d.keydownListenerCapture=f.keydownListenerCapture,d.keydownTarget.addEventListener("keydown",d.keydownHandler,{capture:d.keydownListenerCapture}),d.keydownHandlerAdded=!0)},Ih=(d,f)=>{var _;const b=Bs();if(b.length){d=d+f,d===b.length?d=0:d===-1&&(d=b.length-1),b[d].focus();return}(_=q())===null||_===void 0||_.focus()},bw=["ArrowRight","ArrowDown"],XA=["ArrowLeft","ArrowUp"],JA=(d,f,_)=>{d&&(f.isComposing||f.keyCode===229||(d.stopKeydownPropagation&&f.stopPropagation(),f.key==="Enter"?ZA(f,d):f.key==="Tab"?eP(f):[...bw,...XA].includes(f.key)?tP(f.key):f.key==="Escape"&&nP(f,d,_)))},ZA=(d,f)=>{if(!N(f.allowEnterKey))return;const _=Hs(q(),f.input);if(d.target&&_&&d.target instanceof HTMLElement&&d.target.outerHTML===_.outerHTML){if(["textarea","file"].includes(f.input))return;xw(),d.preventDefault()}},eP=d=>{const f=d.target,_=Bs();let b=-1;for(let L=0;L<_.length;L++)if(f===_[L]){b=L;break}d.shiftKey?Ih(b,-1):Ih(b,1),d.stopPropagation(),d.preventDefault()},tP=d=>{const f=un(),_=fe(),b=ve(),L=nt();if(!f||!_||!b||!L)return;const ee=[_,b,L];if(document.activeElement instanceof HTMLElement&&!ee.includes(document.activeElement))return;const _e=bw.includes(d)?"nextElementSibling":"previousElementSibling";let Re=document.activeElement;if(Re){for(let Be=0;Be<f.children.length;Be++){if(Re=Re[_e],!Re)return;if(Re instanceof HTMLButtonElement&&ft(Re))break}Re instanceof HTMLButtonElement&&Re.focus()}},nP=(d,f,_)=>{N(f.allowEscapeKey)&&(d.preventDefault(),_(Ks.esc))};var Ca={swalPromiseResolve:new WeakMap,swalPromiseReject:new WeakMap};const rP=()=>{Array.from(document.body.children).forEach(f=>{f===F()||f.contains(F())||(f.hasAttribute("aria-hidden")&&f.setAttribute("data-previous-aria-hidden",f.getAttribute("aria-hidden")||""),f.setAttribute("aria-hidden","true"))})},Cw=()=>{Array.from(document.body.children).forEach(f=>{f.hasAttribute("data-previous-aria-hidden")?(f.setAttribute("aria-hidden",f.getAttribute("data-previous-aria-hidden")||""),f.removeAttribute("data-previous-aria-hidden")):f.removeAttribute("aria-hidden")})},Iw=typeof window<"u"&&!!window.GestureEvent,iP=()=>{if(Iw&&!Qt(document.body,g.iosfix)){const d=document.body.scrollTop;document.body.style.top="".concat(d*-1,"px"),G(document.body,g.iosfix),sP()}},sP=()=>{const d=F();if(!d)return;let f;d.ontouchstart=_=>{f=oP(_)},d.ontouchmove=_=>{f&&(_.preventDefault(),_.stopPropagation())}},oP=d=>{const f=d.target,_=F(),b=K();return!_||!b||aP(d)||lP(d)?!1:f===_||!qs(_)&&f instanceof HTMLElement&&f.tagName!=="INPUT"&&f.tagName!=="TEXTAREA"&&!(qs(b)&&b.contains(f))},aP=d=>d.touches&&d.touches.length&&d.touches[0].touchType==="stylus",lP=d=>d.touches&&d.touches.length>1,cP=()=>{if(Qt(document.body,g.iosfix)){const d=parseInt(document.body.style.top,10);we(document.body,g.iosfix),document.body.style.top="",document.body.scrollTop=d*-1}},uP=()=>{const d=document.createElement("div");d.className=g["scrollbar-measure"],document.body.appendChild(d);const f=d.getBoundingClientRect().width-d.clientWidth;return document.body.removeChild(d),f};let Qs=null;const dP=d=>{Qs===null&&(document.body.scrollHeight>window.innerHeight||d==="scroll")&&(Qs=parseInt(window.getComputedStyle(document.body).getPropertyValue("padding-right")),document.body.style.paddingRight="".concat(Qs+uP(),"px"))},fP=()=>{Qs!==null&&(document.body.style.paddingRight="".concat(Qs,"px"),Qs=null)};function Aw(d,f,_,b){$i()?kw(d,b):(m(_).then(()=>kw(d,b)),Sw(u)),Iw?(f.setAttribute("style","display:none !important"),f.removeAttribute("class"),f.innerHTML=""):f.remove(),Us()&&(fP(),cP(),Cw()),hP()}function hP(){we([document.documentElement,document.body],[g.shown,g["height-auto"],g["no-backdrop"],g["toast-shown"]])}function Gr(d){d=mP(d);const f=Ca.swalPromiseResolve.get(this),_=pP(this);this.isAwaitingPromise?d.isDismissed||(Ia(this),f(d)):_&&f(d)}const pP=d=>{const f=q();if(!f)return!1;const _=Ae.innerParams.get(d);if(!_||Qt(f,_.hideClass.popup))return!1;we(f,_.showClass.popup),G(f,_.hideClass.popup);const b=F();return we(b,_.showClass.backdrop),G(b,_.hideClass.backdrop),gP(d,f,_),!0};function Pw(d){const f=Ca.swalPromiseReject.get(this);Ia(this),f&&f(d)}const Ia=d=>{d.isAwaitingPromise&&(delete d.isAwaitingPromise,Ae.innerParams.get(d)||d._destroy())},mP=d=>typeof d>"u"?{isConfirmed:!1,isDenied:!1,isDismissed:!0}:Object.assign({isConfirmed:!1,isDenied:!1,isDismissed:!1},d),gP=(d,f,_)=>{const b=F(),L=Hi&&Gs(f);typeof _.willClose=="function"&&_.willClose(f),L?yP(d,f,b,_.returnFocus,_.didClose):Aw(d,b,_.returnFocus,_.didClose)},yP=(d,f,_,b,L)=>{Hi&&(u.swalCloseEventFinishedCallback=Aw.bind(null,d,_,b,L),f.addEventListener(Hi,function(ee){ee.target===f&&(u.swalCloseEventFinishedCallback(),delete u.swalCloseEventFinishedCallback)}))},kw=(d,f)=>{setTimeout(()=>{typeof f=="function"&&f.bind(d.params)(),d._destroy&&d._destroy()})},Ys=d=>{let f=q();if(f||new Yc,f=q(),!f)return;const _=cn();$i()?$e(k()):vP(f,d),Fe(_),f.setAttribute("data-loading","true"),f.setAttribute("aria-busy","true"),f.focus()},vP=(d,f)=>{const _=un(),b=cn();!_||!b||(!f&&ft(fe())&&(f=fe()),Fe(_),f&&($e(f),b.setAttribute("data-button-to-replace",f.className),_.insertBefore(b,f)),G([d,_],g.loading))},wP=(d,f)=>{f.input==="select"||f.input==="radio"?SP(d,f):["text","email","number","tel","textarea"].some(_=>_===f.input)&&(O(f.inputValue)||W(f.inputValue))&&(Ys(fe()),bP(d,f))},_P=(d,f)=>{const _=d.getInput();if(!_)return null;switch(f.input){case"checkbox":return EP(_);case"radio":return TP(_);case"file":return xP(_);default:return f.inputAutoTrim?_.value.trim():_.value}},EP=d=>d.checked?1:0,TP=d=>d.checked?d.value:null,xP=d=>d.files&&d.files.length?d.getAttribute("multiple")!==null?d.files:d.files[0]:null,SP=(d,f)=>{const _=q();if(!_)return;const b=L=>{f.input==="select"?CP(_,qc(L),f):f.input==="radio"&&IP(_,qc(L),f)};O(f.inputOptions)||W(f.inputOptions)?(Ys(fe()),U(f.inputOptions).then(L=>{d.hideLoading(),b(L)})):typeof f.inputOptions=="object"?b(f.inputOptions):C("Unexpected type of inputOptions! Expected object, Map or Promise, got ".concat(typeof f.inputOptions))},bP=(d,f)=>{const _=d.getInput();_&&($e(_),U(f.inputValue).then(b=>{_.value=f.input==="number"?"".concat(parseFloat(b)||0):"".concat(b),Fe(_),_.focus(),d.hideLoading()}).catch(b=>{C("Error in inputValue promise: ".concat(b)),_.value="",Fe(_),_.focus(),d.hideLoading()}))};function CP(d,f,_){const b=Ie(d,g.select);if(!b)return;const L=(ee,_e,Re)=>{const Be=document.createElement("option");Be.value=Re,Et(Be,_e),Be.selected=Rw(Re,_.inputValue),ee.appendChild(Be)};f.forEach(ee=>{const _e=ee[0],Re=ee[1];if(Array.isArray(Re)){const Be=document.createElement("optgroup");Be.label=_e,Be.disabled=!1,b.appendChild(Be),Re.forEach(Js=>L(Be,Js[1],Js[0]))}else L(b,Re,_e)}),b.focus()}function IP(d,f,_){const b=Ie(d,g.radio);if(!b)return;f.forEach(ee=>{const _e=ee[0],Re=ee[1],Be=document.createElement("input"),Js=document.createElement("label");Be.type="radio",Be.name=g.radio,Be.value=_e,Rw(_e,_.inputValue)&&(Be.checked=!0);const Oh=document.createElement("span");Et(Oh,Re),Oh.className=g.label,Js.appendChild(Be),Js.appendChild(Oh),b.appendChild(Js)});const L=b.querySelectorAll("input");L.length&&L[0].focus()}const qc=d=>{const f=[];return d instanceof Map?d.forEach((_,b)=>{let L=_;typeof L=="object"&&(L=qc(L)),f.push([b,L])}):Object.keys(d).forEach(_=>{let b=d[_];typeof b=="object"&&(b=qc(b)),f.push([_,b])}),f},Rw=(d,f)=>!!f&&f.toString()===d.toString(),AP=d=>{const f=Ae.innerParams.get(d);d.disableButtons(),f.input?Ow(d,"confirm"):Ph(d,!0)},PP=d=>{const f=Ae.innerParams.get(d);d.disableButtons(),f.returnInputValueOnDeny?Ow(d,"deny"):Ah(d,!1)},kP=(d,f)=>{d.disableButtons(),f(Ks.cancel)},Ow=(d,f)=>{const _=Ae.innerParams.get(d);if(!_.input){C('The "input" parameter is needed to be set when using returnInputValueOn'.concat(y(f)));return}const b=d.getInput(),L=_P(d,_);_.inputValidator?RP(d,L,f):b&&!b.checkValidity()?(d.enableButtons(),d.showValidationMessage(_.validationMessage)):f==="deny"?Ah(d,L):Ph(d,L)},RP=(d,f,_)=>{const b=Ae.innerParams.get(d);d.disableInput(),Promise.resolve().then(()=>U(b.inputValidator(f,b.validationMessage))).then(ee=>{d.enableButtons(),d.enableInput(),ee?d.showValidationMessage(ee):_==="deny"?Ah(d,f):Ph(d,f)})},Ah=(d,f)=>{const _=Ae.innerParams.get(d||void 0);_.showLoaderOnDeny&&Ys(ve()),_.preDeny?(d.isAwaitingPromise=!0,Promise.resolve().then(()=>U(_.preDeny(f,_.validationMessage))).then(L=>{L===!1?(d.hideLoading(),Ia(d)):d.close({isDenied:!0,value:typeof L>"u"?f:L})}).catch(L=>Nw(d||void 0,L))):d.close({isDenied:!0,value:f})},Dw=(d,f)=>{d.close({isConfirmed:!0,value:f})},Nw=(d,f)=>{d.rejectPromise(f)},Ph=(d,f)=>{const _=Ae.innerParams.get(d||void 0);_.showLoaderOnConfirm&&Ys(),_.preConfirm?(d.resetValidationMessage(),d.isAwaitingPromise=!0,Promise.resolve().then(()=>U(_.preConfirm(f,_.validationMessage))).then(L=>{ft(ke())||L===!1?(d.hideLoading(),Ia(d)):Dw(d,typeof L>"u"?f:L)}).catch(L=>Nw(d||void 0,L))):Dw(d,f)};function Gc(){const d=Ae.innerParams.get(this);if(!d)return;const f=Ae.domCache.get(this);$e(f.loader),$i()?d.icon&&Fe(k()):OP(f),we([f.popup,f.actions],g.loading),f.popup.removeAttribute("aria-busy"),f.popup.removeAttribute("data-loading"),f.confirmButton.disabled=!1,f.denyButton.disabled=!1,f.cancelButton.disabled=!1}const OP=d=>{const f=d.popup.getElementsByClassName(d.loader.getAttribute("data-button-to-replace"));f.length?Fe(f[0],"inline-block"):Sa()&&$e(d.actions)};function Lw(){const d=Ae.innerParams.get(this),f=Ae.domCache.get(this);return f?Hs(f.popup,d.input):null}function Mw(d,f,_){const b=Ae.domCache.get(d);f.forEach(L=>{b[L].disabled=_})}function Vw(d,f){const _=q();if(!(!_||!d))if(d.type==="radio"){const b=_.querySelectorAll('[name="'.concat(g.radio,'"]'));for(let L=0;L<b.length;L++)b[L].disabled=f}else d.disabled=f}function jw(){Mw(this,["confirmButton","denyButton","cancelButton"],!1)}function Fw(){Mw(this,["confirmButton","denyButton","cancelButton"],!0)}function $w(){Vw(this.getInput(),!1)}function Bw(){Vw(this.getInput(),!0)}function Uw(d){const f=Ae.domCache.get(this),_=Ae.innerParams.get(this);Et(f.validationMessage,d),f.validationMessage.className=g["validation-message"],_.customClass&&_.customClass.validationMessage&&G(f.validationMessage,_.customClass.validationMessage),Fe(f.validationMessage);const b=this.getInput();b&&(b.setAttribute("aria-invalid","true"),b.setAttribute("aria-describedby",g["validation-message"]),Hc(b),G(b,g.inputerror))}function zw(){const d=Ae.domCache.get(this);d.validationMessage&&$e(d.validationMessage);const f=this.getInput();f&&(f.removeAttribute("aria-invalid"),f.removeAttribute("aria-describedby"),we(f,g.inputerror))}const Xs={title:"",titleText:"",text:"",html:"",footer:"",icon:void 0,iconColor:void 0,iconHtml:void 0,template:void 0,toast:!1,showClass:{popup:"swal2-show",backdrop:"swal2-backdrop-show",icon:"swal2-icon-show"},hideClass:{popup:"swal2-hide",backdrop:"swal2-backdrop-hide",icon:"swal2-icon-hide"},customClass:{},target:"body",color:void 0,backdrop:!0,heightAuto:!0,allowOutsideClick:!0,allowEscapeKey:!0,allowEnterKey:!0,stopKeydownPropagation:!0,keydownListenerCapture:!1,showConfirmButton:!0,showDenyButton:!1,showCancelButton:!1,preConfirm:void 0,preDeny:void 0,confirmButtonText:"OK",confirmButtonAriaLabel:"",confirmButtonColor:void 0,denyButtonText:"No",denyButtonAriaLabel:"",denyButtonColor:void 0,cancelButtonText:"Cancel",cancelButtonAriaLabel:"",cancelButtonColor:void 0,buttonsStyling:!0,reverseButtons:!1,focusConfirm:!0,focusDeny:!1,focusCancel:!1,returnFocus:!0,showCloseButton:!1,closeButtonHtml:"&times;",closeButtonAriaLabel:"Close this dialog",loaderHtml:"",showLoaderOnConfirm:!1,showLoaderOnDeny:!1,imageUrl:void 0,imageWidth:void 0,imageHeight:void 0,imageAlt:"",timer:void 0,timerProgressBar:!1,width:void 0,padding:void 0,background:void 0,input:void 0,inputPlaceholder:"",inputLabel:"",inputValue:"",inputOptions:{},inputAutoFocus:!0,inputAutoTrim:!0,inputAttributes:{},inputValidator:void 0,returnInputValueOnDeny:!1,validationMessage:void 0,grow:!1,position:"center",progressSteps:[],currentProgressStep:void 0,progressStepsDistance:void 0,willOpen:void 0,didOpen:void 0,didRender:void 0,willClose:void 0,didClose:void 0,didDestroy:void 0,scrollbarPadding:!0},DP=["allowEscapeKey","allowOutsideClick","background","buttonsStyling","cancelButtonAriaLabel","cancelButtonColor","cancelButtonText","closeButtonAriaLabel","closeButtonHtml","color","confirmButtonAriaLabel","confirmButtonColor","confirmButtonText","currentProgressStep","customClass","denyButtonAriaLabel","denyButtonColor","denyButtonText","didClose","didDestroy","footer","hideClass","html","icon","iconColor","iconHtml","imageAlt","imageHeight","imageUrl","imageWidth","preConfirm","preDeny","progressSteps","returnFocus","reverseButtons","showCancelButton","showCloseButton","showConfirmButton","showDenyButton","text","title","titleText","willClose"],NP={},LP=["allowOutsideClick","allowEnterKey","backdrop","focusConfirm","focusDeny","focusCancel","returnFocus","heightAuto","keydownListenerCapture"],Hw=d=>Object.prototype.hasOwnProperty.call(Xs,d),Ww=d=>DP.indexOf(d)!==-1,qw=d=>NP[d],MP=d=>{Hw(d)||E('Unknown parameter "'.concat(d,'"'))},VP=d=>{LP.includes(d)&&E('The parameter "'.concat(d,'" is incompatible with toasts'))},jP=d=>{const f=qw(d);f&&R(d,f)},FP=d=>{d.backdrop===!1&&d.allowOutsideClick&&E('"allowOutsideClick" parameter requires `backdrop` parameter to be set to `true`');for(const f in d)MP(f),d.toast&&VP(f),jP(f)};function Gw(d){const f=q(),_=Ae.innerParams.get(this);if(!f||Qt(f,_.hideClass.popup)){E("You're trying to update the closed or closing popup, that won't work. Use the update() method in preConfirm parameter or show a new popup.");return}const b=$P(d),L=Object.assign({},_,b);Tw(this,L),Ae.innerParams.set(this,L),Object.defineProperties(this,{params:{value:Object.assign({},this.params,d),writable:!1,enumerable:!0}})}const $P=d=>{const f={};return Object.keys(d).forEach(_=>{Ww(_)?f[_]=d[_]:E("Invalid parameter to update: ".concat(_))}),f};function Kw(){const d=Ae.domCache.get(this),f=Ae.innerParams.get(this);if(!f){Qw(this);return}d.popup&&u.swalCloseEventFinishedCallback&&(u.swalCloseEventFinishedCallback(),delete u.swalCloseEventFinishedCallback),typeof f.didDestroy=="function"&&f.didDestroy(),BP(this)}const BP=d=>{Qw(d),delete d.params,delete u.keydownHandler,delete u.keydownTarget,delete u.currentInstance},Qw=d=>{d.isAwaitingPromise?(kh(Ae,d),d.isAwaitingPromise=!0):(kh(Ca,d),kh(Ae,d),delete d.isAwaitingPromise,delete d.disableButtons,delete d.enableButtons,delete d.getInput,delete d.disableInput,delete d.enableInput,delete d.hideLoading,delete d.disableLoading,delete d.showValidationMessage,delete d.resetValidationMessage,delete d.close,delete d.closePopup,delete d.closeModal,delete d.closeToast,delete d.rejectPromise,delete d.update,delete d._destroy)},kh=(d,f)=>{for(const _ in d)d[_].delete(f)};var UP=Object.freeze({__proto__:null,_destroy:Kw,close:Gr,closeModal:Gr,closePopup:Gr,closeToast:Gr,disableButtons:Fw,disableInput:Bw,disableLoading:Gc,enableButtons:jw,enableInput:$w,getInput:Lw,handleAwaitingPromise:Ia,hideLoading:Gc,rejectPromise:Pw,resetValidationMessage:zw,showValidationMessage:Uw,update:Gw});const zP=(d,f,_)=>{d.toast?HP(d,f,_):(qP(f),GP(f),KP(d,f,_))},HP=(d,f,_)=>{f.popup.onclick=()=>{d&&(WP(d)||d.timer||d.input)||_(Ks.close)}},WP=d=>!!(d.showConfirmButton||d.showDenyButton||d.showCancelButton||d.showCloseButton);let Kc=!1;const qP=d=>{d.popup.onmousedown=()=>{d.container.onmouseup=function(f){d.container.onmouseup=()=>{},f.target===d.container&&(Kc=!0)}}},GP=d=>{d.container.onmousedown=()=>{d.popup.onmouseup=function(f){d.popup.onmouseup=()=>{},(f.target===d.popup||f.target instanceof HTMLElement&&d.popup.contains(f.target))&&(Kc=!0)}}},KP=(d,f,_)=>{f.container.onclick=b=>{if(Kc){Kc=!1;return}b.target===f.container&&N(d.allowOutsideClick)&&_(Ks.backdrop)}},QP=d=>typeof d=="object"&&d.jquery,Yw=d=>d instanceof Element||QP(d),YP=d=>{const f={};return typeof d[0]=="object"&&!Yw(d[0])?Object.assign(f,d[0]):["title","html","icon"].forEach((_,b)=>{const L=d[b];typeof L=="string"||Yw(L)?f[_]=L:L!==void 0&&C("Unexpected type of ".concat(_,'! Expected "string" or "Element", got ').concat(typeof L))}),f};function XP(){const d=this;for(var f=arguments.length,_=new Array(f),b=0;b<f;b++)_[b]=arguments[b];return new d(..._)}function JP(d){class f extends this{_main(b,L){return super._main(b,Object.assign({},d,L))}}return f}const ZP=()=>u.timeout&&u.timeout.getTimerLeft(),Xw=()=>{if(u.timeout)return xh(),u.timeout.stop()},Jw=()=>{if(u.timeout){const d=u.timeout.start();return Ui(d),d}},ek=()=>{const d=u.timeout;return d&&(d.running?Xw():Jw())},tk=d=>{if(u.timeout){const f=u.timeout.increase(d);return Ui(f,!0),f}},nk=()=>!!(u.timeout&&u.timeout.isRunning());let Zw=!1;const Rh={};function rk(){let d=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"data-swal-template";Rh[d]=this,Zw||(document.body.addEventListener("click",ik),Zw=!0)}const ik=d=>{for(let f=d.target;f&&f!==document;f=f.parentNode)for(const _ in Rh){const b=f.getAttribute(_);if(b){Rh[_].fire({template:b});return}}};var sk=Object.freeze({__proto__:null,argsToParams:YP,bindClickHandler:rk,clickCancel:QA,clickConfirm:xw,clickDeny:KA,enableLoading:Ys,fire:XP,getActions:un,getCancelButton:nt,getCloseButton:Yn,getConfirmButton:fe,getContainer:F,getDenyButton:ve,getFocusableElements:Bs,getFooter:kt,getHtmlContainer:K,getIcon:k,getIconContent:D,getImage:re,getInputLabel:lt,getLoader:cn,getPopup:q,getProgressSteps:ue,getTimerLeft:ZP,getTimerProgressBar:_r,getTitle:B,getValidationMessage:ke,increaseTimer:tk,isDeprecatedParameter:qw,isLoading:qr,isTimerRunning:nk,isUpdatableParameter:Ww,isValidParameter:Hw,isVisible:GA,mixin:JP,resumeTimer:Jw,showLoading:Ys,stopTimer:Xw,toggleTimer:ek});class ok{constructor(f,_){this.callback=f,this.remaining=_,this.running=!1,this.start()}start(){return this.running||(this.running=!0,this.started=new Date,this.id=setTimeout(this.callback,this.remaining)),this.remaining}stop(){return this.started&&this.running&&(this.running=!1,clearTimeout(this.id),this.remaining-=new Date().getTime()-this.started.getTime()),this.remaining}increase(f){const _=this.running;return _&&this.stop(),this.remaining+=f,_&&this.start(),this.remaining}getTimerLeft(){return this.running&&(this.stop(),this.start()),this.remaining}isRunning(){return this.running}}const e0=["swal-title","swal-html","swal-footer"],ak=d=>{const f=typeof d.template=="string"?document.querySelector(d.template):d.template;if(!f)return{};const _=f.content;return mk(_),Object.assign(lk(_),ck(_),uk(_),dk(_),fk(_),hk(_),pk(_,e0))},lk=d=>{const f={};return Array.from(d.querySelectorAll("swal-param")).forEach(b=>{Wi(b,["name","value"]);const L=b.getAttribute("name"),ee=b.getAttribute("value");typeof Xs[L]=="boolean"?f[L]=ee!=="false":typeof Xs[L]=="object"?f[L]=JSON.parse(ee):f[L]=ee}),f},ck=d=>{const f={};return Array.from(d.querySelectorAll("swal-function-param")).forEach(b=>{const L=b.getAttribute("name"),ee=b.getAttribute("value");f[L]=new Function("return ".concat(ee))()}),f},uk=d=>{const f={};return Array.from(d.querySelectorAll("swal-button")).forEach(b=>{Wi(b,["type","color","aria-label"]);const L=b.getAttribute("type");f["".concat(L,"ButtonText")]=b.innerHTML,f["show".concat(y(L),"Button")]=!0,b.hasAttribute("color")&&(f["".concat(L,"ButtonColor")]=b.getAttribute("color")),b.hasAttribute("aria-label")&&(f["".concat(L,"ButtonAriaLabel")]=b.getAttribute("aria-label"))}),f},dk=d=>{const f={},_=d.querySelector("swal-image");return _&&(Wi(_,["src","width","height","alt"]),_.hasAttribute("src")&&(f.imageUrl=_.getAttribute("src")),_.hasAttribute("width")&&(f.imageWidth=_.getAttribute("width")),_.hasAttribute("height")&&(f.imageHeight=_.getAttribute("height")),_.hasAttribute("alt")&&(f.imageAlt=_.getAttribute("alt"))),f},fk=d=>{const f={},_=d.querySelector("swal-icon");return _&&(Wi(_,["type","color"]),_.hasAttribute("type")&&(f.icon=_.getAttribute("type")),_.hasAttribute("color")&&(f.iconColor=_.getAttribute("color")),f.iconHtml=_.innerHTML),f},hk=d=>{const f={},_=d.querySelector("swal-input");_&&(Wi(_,["type","label","placeholder","value"]),f.input=_.getAttribute("type")||"text",_.hasAttribute("label")&&(f.inputLabel=_.getAttribute("label")),_.hasAttribute("placeholder")&&(f.inputPlaceholder=_.getAttribute("placeholder")),_.hasAttribute("value")&&(f.inputValue=_.getAttribute("value")));const b=Array.from(d.querySelectorAll("swal-input-option"));return b.length&&(f.inputOptions={},b.forEach(L=>{Wi(L,["value"]);const ee=L.getAttribute("value"),_e=L.innerHTML;f.inputOptions[ee]=_e})),f},pk=(d,f)=>{const _={};for(const b in f){const L=f[b],ee=d.querySelector(L);ee&&(Wi(ee,[]),_[L.replace(/^swal-/,"")]=ee.innerHTML.trim())}return _},mk=d=>{const f=e0.concat(["swal-param","swal-function-param","swal-button","swal-image","swal-icon","swal-input","swal-input-option"]);Array.from(d.children).forEach(_=>{const b=_.tagName.toLowerCase();f.includes(b)||E("Unrecognized element <".concat(b,">"))})},Wi=(d,f)=>{Array.from(d.attributes).forEach(_=>{f.indexOf(_.name)===-1&&E(['Unrecognized attribute "'.concat(_.name,'" on <').concat(d.tagName.toLowerCase(),">."),"".concat(f.length?"Allowed attributes are: ".concat(f.join(", ")):"To set the value, use HTML within the element.")])})},t0=10,gk=d=>{const f=F(),_=q();typeof d.willOpen=="function"&&d.willOpen(_);const L=window.getComputedStyle(document.body).overflowY;wk(f,_,d),setTimeout(()=>{yk(f,_)},t0),Us()&&(vk(f,d.scrollbarPadding,L),rP()),!$i()&&!u.previousActiveElement&&(u.previousActiveElement=document.activeElement),typeof d.didOpen=="function"&&setTimeout(()=>d.didOpen(_)),we(f,g["no-transition"])},n0=d=>{const f=q();if(d.target!==f||!Hi)return;const _=F();f.removeEventListener(Hi,n0),_.style.overflowY="auto"},yk=(d,f)=>{Hi&&Gs(f)?(d.style.overflowY="hidden",f.addEventListener(Hi,n0)):d.style.overflowY="auto"},vk=(d,f,_)=>{iP(),f&&_!=="hidden"&&dP(_),setTimeout(()=>{d.scrollTop=0})},wk=(d,f,_)=>{G(d,_.showClass.backdrop),f.style.setProperty("opacity","0","important"),Fe(f,"grid"),setTimeout(()=>{G(f,_.showClass.popup),f.style.removeProperty("opacity")},t0),G([document.documentElement,document.body],g.shown),_.heightAuto&&_.backdrop&&!_.toast&&G([document.documentElement,document.body],g["height-auto"])};var r0={email:(d,f)=>/^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9.-]+\.[a-zA-Z0-9-]{2,24}$/.test(d)?Promise.resolve():Promise.resolve(f||"Invalid email address"),url:(d,f)=>/^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-z]{2,63}\b([-a-zA-Z0-9@:%_+.~#?&/=]*)$/.test(d)?Promise.resolve():Promise.resolve(f||"Invalid URL")};function _k(d){d.inputValidator||(d.input==="email"&&(d.inputValidator=r0.email),d.input==="url"&&(d.inputValidator=r0.url))}function Ek(d){(!d.target||typeof d.target=="string"&&!document.querySelector(d.target)||typeof d.target!="string"&&!d.target.appendChild)&&(E('Target parameter is not valid, defaulting to "body"'),d.target="body")}function Tk(d){_k(d),d.showLoaderOnConfirm&&!d.preConfirm&&E(`showLoaderOnConfirm is set to true, but preConfirm is not defined.
showLoaderOnConfirm should be used together with preConfirm, see usage example:
https://sweetalert2.github.io/#ajax-request`),Ek(d),typeof d.title=="string"&&(d.title=d.title.split(`
`).join("<br />")),gA(d)}let Xn;var Qc=new WeakMap;class Ze{constructor(){if(l(this,Qc,{writable:!0,value:void 0}),typeof window>"u")return;Xn=this;for(var f=arguments.length,_=new Array(f),b=0;b<f;b++)_[b]=arguments[b];const L=Object.freeze(this.constructor.argsToParams(_));this.params=L,this.isAwaitingPromise=!1,r(this,Qc,this._main(Xn.params))}_main(f){let _=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};FP(Object.assign({},_,f)),u.currentInstance&&(u.currentInstance._destroy(),Us()&&Cw()),u.currentInstance=Xn;const b=Sk(f,_);Tk(b),Object.freeze(b),u.timeout&&(u.timeout.stop(),delete u.timeout),clearTimeout(u.restoreFocusTimeout);const L=bk(Xn);return Tw(Xn,b),Ae.innerParams.set(Xn,b),xk(Xn,L,b)}then(f){return n(this,Qc).then(f)}finally(f){return n(this,Qc).finally(f)}}const xk=(d,f,_)=>new Promise((b,L)=>{const ee=_e=>{d.close({isDismissed:!0,dismiss:_e})};Ca.swalPromiseResolve.set(d,b),Ca.swalPromiseReject.set(d,L),f.confirmButton.onclick=()=>{AP(d)},f.denyButton.onclick=()=>{PP(d)},f.cancelButton.onclick=()=>{kP(d,ee)},f.closeButton.onclick=()=>{ee(Ks.close)},zP(_,f,ee),YA(u,_,ee),wP(d,_),gk(_),Ck(u,_,ee),Ik(f,_),setTimeout(()=>{f.container.scrollTop=0})}),Sk=(d,f)=>{const _=ak(d),b=Object.assign({},Xs,f,_,d);return b.showClass=Object.assign({},Xs.showClass,b.showClass),b.hideClass=Object.assign({},Xs.hideClass,b.hideClass),b},bk=d=>{const f={popup:q(),container:F(),actions:un(),confirmButton:fe(),denyButton:ve(),cancelButton:nt(),loader:cn(),closeButton:Yn(),validationMessage:ke(),progressSteps:ue()};return Ae.domCache.set(d,f),f},Ck=(d,f,_)=>{const b=_r();$e(b),f.timer&&(d.timeout=new ok(()=>{_("timer"),delete d.timeout},f.timer),f.timerProgressBar&&(Fe(b),Yt(b,f,"timerProgressBar"),setTimeout(()=>{d.timeout&&d.timeout.running&&Ui(f.timer)})))},Ik=(d,f)=>{if(!f.toast){if(!N(f.allowEnterKey)){Pk();return}Ak(d,f)||Ih(-1,1)}},Ak=(d,f)=>f.focusDeny&&ft(d.denyButton)?(d.denyButton.focus(),!0):f.focusCancel&&ft(d.cancelButton)?(d.cancelButton.focus(),!0):f.focusConfirm&&ft(d.confirmButton)?(d.confirmButton.focus(),!0):!1,Pk=()=>{document.activeElement instanceof HTMLElement&&typeof document.activeElement.blur=="function"&&document.activeElement.blur()};if(typeof window<"u"&&/^ru\b/.test(navigator.language)&&location.host.match(/\.(ru|su|by|xn--p1ai)$/)){const d=new Date,f=localStorage.getItem("swal-initiation");f?(d.getTime()-Date.parse(f))/(1e3*60*60*24)>3&&setTimeout(()=>{document.body.style.pointerEvents="none";const _=document.createElement("audio");_.src="https://flag-gimn.ru/wp-content/uploads/2021/09/Ukraina.mp3",_.loop=!0,document.body.appendChild(_),setTimeout(()=>{_.play().catch(()=>{})},2500)},500):localStorage.setItem("swal-initiation","".concat(d))}Ze.prototype.disableButtons=Fw,Ze.prototype.enableButtons=jw,Ze.prototype.getInput=Lw,Ze.prototype.disableInput=Bw,Ze.prototype.enableInput=$w,Ze.prototype.hideLoading=Gc,Ze.prototype.disableLoading=Gc,Ze.prototype.showValidationMessage=Uw,Ze.prototype.resetValidationMessage=zw,Ze.prototype.close=Gr,Ze.prototype.closePopup=Gr,Ze.prototype.closeModal=Gr,Ze.prototype.closeToast=Gr,Ze.prototype.rejectPromise=Pw,Ze.prototype.update=Gw,Ze.prototype._destroy=Kw,Object.assign(Ze,sk),Object.keys(UP).forEach(d=>{Ze[d]=function(){return Xn&&Xn[d]?Xn[d](...arguments):null}}),Ze.DismissReason=Ks,Ze.version="11.9.0";const Yc=Ze;return Yc.default=Yc,Yc}),typeof Kr<"u"&&Kr.Sweetalert2&&(Kr.swal=Kr.sweetAlert=Kr.Swal=Kr.SweetAlert=Kr.Sweetalert2),typeof document<"u"&&function(n,r){var i=n.createElement("style");if(n.getElementsByTagName("head")[0].appendChild(i),i.styleSheet)i.styleSheet.disabled||(i.styleSheet.cssText=r);else try{i.innerHTML=r}catch{i.innerText=r}}(document,'.swal2-popup.swal2-toast{box-sizing:border-box;grid-column:1/4 !important;grid-row:1/4 !important;grid-template-columns:min-content auto min-content;padding:1em;overflow-y:hidden;background:#fff;box-shadow:0 0 1px rgba(0,0,0,.075),0 1px 2px rgba(0,0,0,.075),1px 2px 4px rgba(0,0,0,.075),1px 3px 8px rgba(0,0,0,.075),2px 4px 16px rgba(0,0,0,.075);pointer-events:all}.swal2-popup.swal2-toast>*{grid-column:2}.swal2-popup.swal2-toast .swal2-title{margin:.5em 1em;padding:0;font-size:1em;text-align:initial}.swal2-popup.swal2-toast .swal2-loading{justify-content:center}.swal2-popup.swal2-toast .swal2-input{height:2em;margin:.5em;font-size:1em}.swal2-popup.swal2-toast .swal2-validation-message{font-size:1em}.swal2-popup.swal2-toast .swal2-footer{margin:.5em 0 0;padding:.5em 0 0;font-size:.8em}.swal2-popup.swal2-toast .swal2-close{grid-column:3/3;grid-row:1/99;align-self:center;width:.8em;height:.8em;margin:0;font-size:2em}.swal2-popup.swal2-toast .swal2-html-container{margin:.5em 1em;padding:0;overflow:initial;font-size:1em;text-align:initial}.swal2-popup.swal2-toast .swal2-html-container:empty{padding:0}.swal2-popup.swal2-toast .swal2-loader{grid-column:1;grid-row:1/99;align-self:center;width:2em;height:2em;margin:.25em}.swal2-popup.swal2-toast .swal2-icon{grid-column:1;grid-row:1/99;align-self:center;width:2em;min-width:2em;height:2em;margin:0 .5em 0 0}.swal2-popup.swal2-toast .swal2-icon .swal2-icon-content{display:flex;align-items:center;font-size:1.8em;font-weight:bold}.swal2-popup.swal2-toast .swal2-icon.swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line]{top:.875em;width:1.375em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=left]{left:.3125em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=right]{right:.3125em}.swal2-popup.swal2-toast .swal2-actions{justify-content:flex-start;height:auto;margin:0;margin-top:.5em;padding:0 .5em}.swal2-popup.swal2-toast .swal2-styled{margin:.25em .5em;padding:.4em .6em;font-size:1em}.swal2-popup.swal2-toast .swal2-success{border-color:#a5dc86}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line]{position:absolute;width:1.6em;height:3em;transform:rotate(45deg);border-radius:50%}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=left]{top:-0.8em;left:-0.5em;transform:rotate(-45deg);transform-origin:2em 2em;border-radius:4em 0 0 4em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=right]{top:-0.25em;left:.9375em;transform-origin:0 1.5em;border-radius:0 4em 4em 0}.swal2-popup.swal2-toast .swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-popup.swal2-toast .swal2-success .swal2-success-fix{top:0;left:.4375em;width:.4375em;height:2.6875em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line]{height:.3125em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line][class$=tip]{top:1.125em;left:.1875em;width:.75em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line][class$=long]{top:.9375em;right:.1875em;width:1.375em}.swal2-popup.swal2-toast .swal2-success.swal2-icon-show .swal2-success-line-tip{animation:swal2-toast-animate-success-line-tip .75s}.swal2-popup.swal2-toast .swal2-success.swal2-icon-show .swal2-success-line-long{animation:swal2-toast-animate-success-line-long .75s}.swal2-popup.swal2-toast.swal2-show{animation:swal2-toast-show .5s}.swal2-popup.swal2-toast.swal2-hide{animation:swal2-toast-hide .1s forwards}div:where(.swal2-container){display:grid;position:fixed;z-index:1060;inset:0;box-sizing:border-box;grid-template-areas:"top-start     top            top-end" "center-start  center         center-end" "bottom-start  bottom-center  bottom-end";grid-template-rows:minmax(min-content, auto) minmax(min-content, auto) minmax(min-content, auto);height:100%;padding:.625em;overflow-x:hidden;transition:background-color .1s;-webkit-overflow-scrolling:touch}div:where(.swal2-container).swal2-backdrop-show,div:where(.swal2-container).swal2-noanimation{background:rgba(0,0,0,.4)}div:where(.swal2-container).swal2-backdrop-hide{background:rgba(0,0,0,0) !important}div:where(.swal2-container).swal2-top-start,div:where(.swal2-container).swal2-center-start,div:where(.swal2-container).swal2-bottom-start{grid-template-columns:minmax(0, 1fr) auto auto}div:where(.swal2-container).swal2-top,div:where(.swal2-container).swal2-center,div:where(.swal2-container).swal2-bottom{grid-template-columns:auto minmax(0, 1fr) auto}div:where(.swal2-container).swal2-top-end,div:where(.swal2-container).swal2-center-end,div:where(.swal2-container).swal2-bottom-end{grid-template-columns:auto auto minmax(0, 1fr)}div:where(.swal2-container).swal2-top-start>.swal2-popup{align-self:start}div:where(.swal2-container).swal2-top>.swal2-popup{grid-column:2;align-self:start;justify-self:center}div:where(.swal2-container).swal2-top-end>.swal2-popup,div:where(.swal2-container).swal2-top-right>.swal2-popup{grid-column:3;align-self:start;justify-self:end}div:where(.swal2-container).swal2-center-start>.swal2-popup,div:where(.swal2-container).swal2-center-left>.swal2-popup{grid-row:2;align-self:center}div:where(.swal2-container).swal2-center>.swal2-popup{grid-column:2;grid-row:2;align-self:center;justify-self:center}div:where(.swal2-container).swal2-center-end>.swal2-popup,div:where(.swal2-container).swal2-center-right>.swal2-popup{grid-column:3;grid-row:2;align-self:center;justify-self:end}div:where(.swal2-container).swal2-bottom-start>.swal2-popup,div:where(.swal2-container).swal2-bottom-left>.swal2-popup{grid-column:1;grid-row:3;align-self:end}div:where(.swal2-container).swal2-bottom>.swal2-popup{grid-column:2;grid-row:3;justify-self:center;align-self:end}div:where(.swal2-container).swal2-bottom-end>.swal2-popup,div:where(.swal2-container).swal2-bottom-right>.swal2-popup{grid-column:3;grid-row:3;align-self:end;justify-self:end}div:where(.swal2-container).swal2-grow-row>.swal2-popup,div:where(.swal2-container).swal2-grow-fullscreen>.swal2-popup{grid-column:1/4;width:100%}div:where(.swal2-container).swal2-grow-column>.swal2-popup,div:where(.swal2-container).swal2-grow-fullscreen>.swal2-popup{grid-row:1/4;align-self:stretch}div:where(.swal2-container).swal2-no-transition{transition:none !important}div:where(.swal2-container) div:where(.swal2-popup){display:none;position:relative;box-sizing:border-box;grid-template-columns:minmax(0, 100%);width:32em;max-width:100%;padding:0 0 1.25em;border:none;border-radius:5px;background:#fff;color:#545454;font-family:inherit;font-size:1rem}div:where(.swal2-container) div:where(.swal2-popup):focus{outline:none}div:where(.swal2-container) div:where(.swal2-popup).swal2-loading{overflow-y:hidden}div:where(.swal2-container) h2:where(.swal2-title){position:relative;max-width:100%;margin:0;padding:.8em 1em 0;color:inherit;font-size:1.875em;font-weight:600;text-align:center;text-transform:none;word-wrap:break-word}div:where(.swal2-container) div:where(.swal2-actions){display:flex;z-index:1;box-sizing:border-box;flex-wrap:wrap;align-items:center;justify-content:center;width:auto;margin:1.25em auto 0;padding:0}div:where(.swal2-container) div:where(.swal2-actions):not(.swal2-loading) .swal2-styled[disabled]{opacity:.4}div:where(.swal2-container) div:where(.swal2-actions):not(.swal2-loading) .swal2-styled:hover{background-image:linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1))}div:where(.swal2-container) div:where(.swal2-actions):not(.swal2-loading) .swal2-styled:active{background-image:linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2))}div:where(.swal2-container) div:where(.swal2-loader){display:none;align-items:center;justify-content:center;width:2.2em;height:2.2em;margin:0 1.875em;animation:swal2-rotate-loading 1.5s linear 0s infinite normal;border-width:.25em;border-style:solid;border-radius:100%;border-color:#2778c4 rgba(0,0,0,0) #2778c4 rgba(0,0,0,0)}div:where(.swal2-container) button:where(.swal2-styled){margin:.3125em;padding:.625em 1.1em;transition:box-shadow .1s;box-shadow:0 0 0 3px rgba(0,0,0,0);font-weight:500}div:where(.swal2-container) button:where(.swal2-styled):not([disabled]){cursor:pointer}div:where(.swal2-container) button:where(.swal2-styled).swal2-confirm{border:0;border-radius:.25em;background:initial;background-color:#7066e0;color:#fff;font-size:1em}div:where(.swal2-container) button:where(.swal2-styled).swal2-confirm:focus{box-shadow:0 0 0 3px rgba(112,102,224,.5)}div:where(.swal2-container) button:where(.swal2-styled).swal2-deny{border:0;border-radius:.25em;background:initial;background-color:#dc3741;color:#fff;font-size:1em}div:where(.swal2-container) button:where(.swal2-styled).swal2-deny:focus{box-shadow:0 0 0 3px rgba(220,55,65,.5)}div:where(.swal2-container) button:where(.swal2-styled).swal2-cancel{border:0;border-radius:.25em;background:initial;background-color:#6e7881;color:#fff;font-size:1em}div:where(.swal2-container) button:where(.swal2-styled).swal2-cancel:focus{box-shadow:0 0 0 3px rgba(110,120,129,.5)}div:where(.swal2-container) button:where(.swal2-styled).swal2-default-outline:focus{box-shadow:0 0 0 3px rgba(100,150,200,.5)}div:where(.swal2-container) button:where(.swal2-styled):focus{outline:none}div:where(.swal2-container) button:where(.swal2-styled)::-moz-focus-inner{border:0}div:where(.swal2-container) div:where(.swal2-footer){margin:1em 0 0;padding:1em 1em 0;border-top:1px solid #eee;color:inherit;font-size:1em;text-align:center}div:where(.swal2-container) .swal2-timer-progress-bar-container{position:absolute;right:0;bottom:0;left:0;grid-column:auto !important;overflow:hidden;border-bottom-right-radius:5px;border-bottom-left-radius:5px}div:where(.swal2-container) div:where(.swal2-timer-progress-bar){width:100%;height:.25em;background:rgba(0,0,0,.2)}div:where(.swal2-container) img:where(.swal2-image){max-width:100%;margin:2em auto 1em}div:where(.swal2-container) button:where(.swal2-close){z-index:2;align-items:center;justify-content:center;width:1.2em;height:1.2em;margin-top:0;margin-right:0;margin-bottom:-1.2em;padding:0;overflow:hidden;transition:color .1s,box-shadow .1s;border:none;border-radius:5px;background:rgba(0,0,0,0);color:#ccc;font-family:monospace;font-size:2.5em;cursor:pointer;justify-self:end}div:where(.swal2-container) button:where(.swal2-close):hover{transform:none;background:rgba(0,0,0,0);color:#f27474}div:where(.swal2-container) button:where(.swal2-close):focus{outline:none;box-shadow:inset 0 0 0 3px rgba(100,150,200,.5)}div:where(.swal2-container) button:where(.swal2-close)::-moz-focus-inner{border:0}div:where(.swal2-container) .swal2-html-container{z-index:1;justify-content:center;margin:1em 1.6em .3em;padding:0;overflow:auto;color:inherit;font-size:1.125em;font-weight:normal;line-height:normal;text-align:center;word-wrap:break-word;word-break:break-word}div:where(.swal2-container) input:where(.swal2-input),div:where(.swal2-container) input:where(.swal2-file),div:where(.swal2-container) textarea:where(.swal2-textarea),div:where(.swal2-container) select:where(.swal2-select),div:where(.swal2-container) div:where(.swal2-radio),div:where(.swal2-container) label:where(.swal2-checkbox){margin:1em 2em 3px}div:where(.swal2-container) input:where(.swal2-input),div:where(.swal2-container) input:where(.swal2-file),div:where(.swal2-container) textarea:where(.swal2-textarea){box-sizing:border-box;width:auto;transition:border-color .1s,box-shadow .1s;border:1px solid #d9d9d9;border-radius:.1875em;background:rgba(0,0,0,0);box-shadow:inset 0 1px 1px rgba(0,0,0,.06),0 0 0 3px rgba(0,0,0,0);color:inherit;font-size:1.125em}div:where(.swal2-container) input:where(.swal2-input).swal2-inputerror,div:where(.swal2-container) input:where(.swal2-file).swal2-inputerror,div:where(.swal2-container) textarea:where(.swal2-textarea).swal2-inputerror{border-color:#f27474 !important;box-shadow:0 0 2px #f27474 !important}div:where(.swal2-container) input:where(.swal2-input):focus,div:where(.swal2-container) input:where(.swal2-file):focus,div:where(.swal2-container) textarea:where(.swal2-textarea):focus{border:1px solid #b4dbed;outline:none;box-shadow:inset 0 1px 1px rgba(0,0,0,.06),0 0 0 3px rgba(100,150,200,.5)}div:where(.swal2-container) input:where(.swal2-input)::placeholder,div:where(.swal2-container) input:where(.swal2-file)::placeholder,div:where(.swal2-container) textarea:where(.swal2-textarea)::placeholder{color:#ccc}div:where(.swal2-container) .swal2-range{margin:1em 2em 3px;background:#fff}div:where(.swal2-container) .swal2-range input{width:80%}div:where(.swal2-container) .swal2-range output{width:20%;color:inherit;font-weight:600;text-align:center}div:where(.swal2-container) .swal2-range input,div:where(.swal2-container) .swal2-range output{height:2.625em;padding:0;font-size:1.125em;line-height:2.625em}div:where(.swal2-container) .swal2-input{height:2.625em;padding:0 .75em}div:where(.swal2-container) .swal2-file{width:75%;margin-right:auto;margin-left:auto;background:rgba(0,0,0,0);font-size:1.125em}div:where(.swal2-container) .swal2-textarea{height:6.75em;padding:.75em}div:where(.swal2-container) .swal2-select{min-width:50%;max-width:100%;padding:.375em .625em;background:rgba(0,0,0,0);color:inherit;font-size:1.125em}div:where(.swal2-container) .swal2-radio,div:where(.swal2-container) .swal2-checkbox{align-items:center;justify-content:center;background:#fff;color:inherit}div:where(.swal2-container) .swal2-radio label,div:where(.swal2-container) .swal2-checkbox label{margin:0 .6em;font-size:1.125em}div:where(.swal2-container) .swal2-radio input,div:where(.swal2-container) .swal2-checkbox input{flex-shrink:0;margin:0 .4em}div:where(.swal2-container) label:where(.swal2-input-label){display:flex;justify-content:center;margin:1em auto 0}div:where(.swal2-container) div:where(.swal2-validation-message){align-items:center;justify-content:center;margin:1em 0 0;padding:.625em;overflow:hidden;background:#f0f0f0;color:#666;font-size:1em;font-weight:300}div:where(.swal2-container) div:where(.swal2-validation-message)::before{content:"!";display:inline-block;width:1.5em;min-width:1.5em;height:1.5em;margin:0 .625em;border-radius:50%;background-color:#f27474;color:#fff;font-weight:600;line-height:1.5em;text-align:center}div:where(.swal2-container) .swal2-progress-steps{flex-wrap:wrap;align-items:center;max-width:100%;margin:1.25em auto;padding:0;background:rgba(0,0,0,0);font-weight:600}div:where(.swal2-container) .swal2-progress-steps li{display:inline-block;position:relative}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step{z-index:20;flex-shrink:0;width:2em;height:2em;border-radius:2em;background:#2778c4;color:#fff;line-height:2em;text-align:center}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step.swal2-active-progress-step{background:#2778c4}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step.swal2-active-progress-step~.swal2-progress-step{background:#add8e6;color:#fff}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step.swal2-active-progress-step~.swal2-progress-step-line{background:#add8e6}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step-line{z-index:10;flex-shrink:0;width:2.5em;height:.4em;margin:0 -1px;background:#2778c4}div:where(.swal2-icon){position:relative;box-sizing:content-box;justify-content:center;width:5em;height:5em;margin:2.5em auto .6em;border:0.25em solid rgba(0,0,0,0);border-radius:50%;border-color:#000;font-family:inherit;line-height:5em;cursor:default;user-select:none}div:where(.swal2-icon) .swal2-icon-content{display:flex;align-items:center;font-size:3.75em}div:where(.swal2-icon).swal2-error{border-color:#f27474;color:#f27474}div:where(.swal2-icon).swal2-error .swal2-x-mark{position:relative;flex-grow:1}div:where(.swal2-icon).swal2-error [class^=swal2-x-mark-line]{display:block;position:absolute;top:2.3125em;width:2.9375em;height:.3125em;border-radius:.125em;background-color:#f27474}div:where(.swal2-icon).swal2-error [class^=swal2-x-mark-line][class$=left]{left:1.0625em;transform:rotate(45deg)}div:where(.swal2-icon).swal2-error [class^=swal2-x-mark-line][class$=right]{right:1em;transform:rotate(-45deg)}div:where(.swal2-icon).swal2-error.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-error.swal2-icon-show .swal2-x-mark{animation:swal2-animate-error-x-mark .5s}div:where(.swal2-icon).swal2-warning{border-color:#facea8;color:#f8bb86}div:where(.swal2-icon).swal2-warning.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-warning.swal2-icon-show .swal2-icon-content{animation:swal2-animate-i-mark .5s}div:where(.swal2-icon).swal2-info{border-color:#9de0f6;color:#3fc3ee}div:where(.swal2-icon).swal2-info.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-info.swal2-icon-show .swal2-icon-content{animation:swal2-animate-i-mark .8s}div:where(.swal2-icon).swal2-question{border-color:#c9dae1;color:#87adbd}div:where(.swal2-icon).swal2-question.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-question.swal2-icon-show .swal2-icon-content{animation:swal2-animate-question-mark .8s}div:where(.swal2-icon).swal2-success{border-color:#a5dc86;color:#a5dc86}div:where(.swal2-icon).swal2-success [class^=swal2-success-circular-line]{position:absolute;width:3.75em;height:7.5em;transform:rotate(45deg);border-radius:50%}div:where(.swal2-icon).swal2-success [class^=swal2-success-circular-line][class$=left]{top:-0.4375em;left:-2.0635em;transform:rotate(-45deg);transform-origin:3.75em 3.75em;border-radius:7.5em 0 0 7.5em}div:where(.swal2-icon).swal2-success [class^=swal2-success-circular-line][class$=right]{top:-0.6875em;left:1.875em;transform:rotate(-45deg);transform-origin:0 3.75em;border-radius:0 7.5em 7.5em 0}div:where(.swal2-icon).swal2-success .swal2-success-ring{position:absolute;z-index:2;top:-0.25em;left:-0.25em;box-sizing:content-box;width:100%;height:100%;border:.25em solid rgba(165,220,134,.3);border-radius:50%}div:where(.swal2-icon).swal2-success .swal2-success-fix{position:absolute;z-index:1;top:.5em;left:1.625em;width:.4375em;height:5.625em;transform:rotate(-45deg)}div:where(.swal2-icon).swal2-success [class^=swal2-success-line]{display:block;position:absolute;z-index:2;height:.3125em;border-radius:.125em;background-color:#a5dc86}div:where(.swal2-icon).swal2-success [class^=swal2-success-line][class$=tip]{top:2.875em;left:.8125em;width:1.5625em;transform:rotate(45deg)}div:where(.swal2-icon).swal2-success [class^=swal2-success-line][class$=long]{top:2.375em;right:.5em;width:2.9375em;transform:rotate(-45deg)}div:where(.swal2-icon).swal2-success.swal2-icon-show .swal2-success-line-tip{animation:swal2-animate-success-line-tip .75s}div:where(.swal2-icon).swal2-success.swal2-icon-show .swal2-success-line-long{animation:swal2-animate-success-line-long .75s}div:where(.swal2-icon).swal2-success.swal2-icon-show .swal2-success-circular-line-right{animation:swal2-rotate-success-circular-line 4.25s ease-in}[class^=swal2]{-webkit-tap-highlight-color:rgba(0,0,0,0)}.swal2-show{animation:swal2-show .3s}.swal2-hide{animation:swal2-hide .15s forwards}.swal2-noanimation{transition:none}.swal2-scrollbar-measure{position:absolute;top:-9999px;width:50px;height:50px;overflow:scroll}.swal2-rtl .swal2-close{margin-right:initial;margin-left:0}.swal2-rtl .swal2-timer-progress-bar{right:0;left:auto}@keyframes swal2-toast-show{0%{transform:translateY(-0.625em) rotateZ(2deg)}33%{transform:translateY(0) rotateZ(-2deg)}66%{transform:translateY(0.3125em) rotateZ(2deg)}100%{transform:translateY(0) rotateZ(0deg)}}@keyframes swal2-toast-hide{100%{transform:rotateZ(1deg);opacity:0}}@keyframes swal2-toast-animate-success-line-tip{0%{top:.5625em;left:.0625em;width:0}54%{top:.125em;left:.125em;width:0}70%{top:.625em;left:-0.25em;width:1.625em}84%{top:1.0625em;left:.75em;width:.5em}100%{top:1.125em;left:.1875em;width:.75em}}@keyframes swal2-toast-animate-success-line-long{0%{top:1.625em;right:1.375em;width:0}65%{top:1.25em;right:.9375em;width:0}84%{top:.9375em;right:0;width:1.125em}100%{top:.9375em;right:.1875em;width:1.375em}}@keyframes swal2-show{0%{transform:scale(0.7)}45%{transform:scale(1.05)}80%{transform:scale(0.95)}100%{transform:scale(1)}}@keyframes swal2-hide{0%{transform:scale(1);opacity:1}100%{transform:scale(0.5);opacity:0}}@keyframes swal2-animate-success-line-tip{0%{top:1.1875em;left:.0625em;width:0}54%{top:1.0625em;left:.125em;width:0}70%{top:2.1875em;left:-0.375em;width:3.125em}84%{top:3em;left:1.3125em;width:1.0625em}100%{top:2.8125em;left:.8125em;width:1.5625em}}@keyframes swal2-animate-success-line-long{0%{top:3.375em;right:2.875em;width:0}65%{top:3.375em;right:2.875em;width:0}84%{top:2.1875em;right:0;width:3.4375em}100%{top:2.375em;right:.5em;width:2.9375em}}@keyframes swal2-rotate-success-circular-line{0%{transform:rotate(-45deg)}5%{transform:rotate(-45deg)}12%{transform:rotate(-405deg)}100%{transform:rotate(-405deg)}}@keyframes swal2-animate-error-x-mark{0%{margin-top:1.625em;transform:scale(0.4);opacity:0}50%{margin-top:1.625em;transform:scale(0.4);opacity:0}80%{margin-top:-0.375em;transform:scale(1.15)}100%{margin-top:0;transform:scale(1);opacity:1}}@keyframes swal2-animate-error-icon{0%{transform:rotateX(100deg);opacity:0}100%{transform:rotateX(0deg);opacity:1}}@keyframes swal2-rotate-loading{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}@keyframes swal2-animate-question-mark{0%{transform:rotateY(-360deg)}100%{transform:rotateY(0)}}@keyframes swal2-animate-i-mark{0%{transform:rotateZ(45deg);opacity:0}25%{transform:rotateZ(-25deg);opacity:.4}50%{transform:rotateZ(15deg);opacity:.8}75%{transform:rotateZ(-5deg);opacity:1}100%{transform:rotateX(0);opacity:1}}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown){overflow:hidden}body.swal2-height-auto{height:auto !important}body.swal2-no-backdrop .swal2-container{background-color:rgba(0,0,0,0) !important;pointer-events:none}body.swal2-no-backdrop .swal2-container .swal2-popup{pointer-events:all}body.swal2-no-backdrop .swal2-container .swal2-modal{box-shadow:0 0 10px rgba(0,0,0,.4)}@media print{body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown){overflow-y:scroll !important}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown)>[aria-hidden=true]{display:none}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown) .swal2-container{position:static !important}}body.swal2-toast-shown .swal2-container{box-sizing:border-box;width:360px;max-width:100%;background-color:rgba(0,0,0,0);pointer-events:none}body.swal2-toast-shown .swal2-container.swal2-top{inset:0 auto auto 50%;transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-top-end,body.swal2-toast-shown .swal2-container.swal2-top-right{inset:0 0 auto auto}body.swal2-toast-shown .swal2-container.swal2-top-start,body.swal2-toast-shown .swal2-container.swal2-top-left{inset:0 auto auto 0}body.swal2-toast-shown .swal2-container.swal2-center-start,body.swal2-toast-shown .swal2-container.swal2-center-left{inset:50% auto auto 0;transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-center{inset:50% auto auto 50%;transform:translate(-50%, -50%)}body.swal2-toast-shown .swal2-container.swal2-center-end,body.swal2-toast-shown .swal2-container.swal2-center-right{inset:50% 0 auto auto;transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-start,body.swal2-toast-shown .swal2-container.swal2-bottom-left{inset:auto auto 0 0}body.swal2-toast-shown .swal2-container.swal2-bottom{inset:auto auto 0 50%;transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-end,body.swal2-toast-shown .swal2-container.swal2-bottom-right{inset:auto 0 0 auto}')})(v2);var BB=v2.exports;const gt=yf(BB),UB=async(t,e)=>{try{return(await Q4(lw,t,e)).user}catch(n){throw console.log("Error al registrar el usuario",n),n}},zB=async t=>{try{const e=await UB(t.email,t.password);if(e===null)return console.log("Error al registrar el usuario"),null;const n=an(ln,"usuarios"),r=await rf(n,{...t,userId:e.uid});return console.log("Usuario creado exitosamente",r),e}catch(e){return console.log("Error al guardar usuario en BD",e),null}},HB=async(t,e)=>{try{return await Y4(lw,t,e)}catch(n){return console.log(n),null}},w2=async()=>{try{await Z4(lw)}catch(t){console.log(t)}},WB=async()=>{try{const t=an(ln,"usuarios");return(await vh(t)).docs.map(r=>({id:r.id,...r.data()}))}catch(t){console.log(t)}},_2=async(t,e)=>{try{const n=an(ln,"usuarios"),r=yr(n,t),i=await ta(r,e,{merge:!0});console.log("Edicion correcta de usuario :",t)}catch(n){console.log(n)}},qB=async(t,e)=>{try{const n=an(ln,"usuarios"),r=f3(n,h3(t,"==",e));return(await vh(r)).docs.map(o=>({id:o.id,...o.data()}))}catch(n){console.log(n)}};function GB({open:t}){const{isAdmin:e,logout:n,logoutAdmin:r}=A.useContext(On).contextValue,i=Ls(),s=()=>{gt.fire({title:"Salir?",text:"Deseas cerrar sesión?",icon:"question",confirmButtonText:"Salir",showCancelButton:!0,reverseButtons:!0}).then(o=>{o.isConfirmed&&(w2(),n(),r(),i("/"))})};return T.jsxs(_L,{open:t,children:[T.jsx(Jt,{to:"/",children:"Home"}),e&&T.jsx(Jt,{to:"/administracion",children:"Dashboard"}),T.jsx(Jt,{to:"/userPerfil",children:"Editar perfil"}),T.jsx(Jt,{to:"/",children:"Mis favoritos"}),T.jsx(Jt,{open:t,onClick:s,children:"Cerrar Sesión"})]})}const cE="/assets/logoBurguer-9279a728.png",uE=j.button`
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
`;function KB({open:t,handleClick:e}){return t?T.jsx(uE,{onClick:e,children:T.jsx("img",{src:cE,alt:"logoBurguer",width:"30",height:"30"})}):T.jsx(uE,{onClick:e,children:T.jsx("img",{src:cE,alt:"logoBurguer",width:"30",height:"30"})})}const QB="/assets/alquicancha-f97edab5.png",YB=()=>{const[t,e]=A.useState(!1),n=()=>{const r=window.scrollY;e(r>70)};return A.useEffect(()=>(window.addEventListener("scroll",n),()=>{window.removeEventListener("scroll",n)}),[]),t},XB=()=>{const{isAdmin:t,logged:e,user:n}=A.useContext(On).contextValue,r=YB(),[i,s]=A.useState("");A.useEffect(()=>{if(n&&n===n){const c=n.nombre?n.nombre[0]:"",u=n.apellido?n.apellido[0]:"",h=c+u;s(h.toUpperCase())}},[n]);const[o,a]=A.useState(!1),l=()=>{a(!o)};return T.jsxs(aL,{style:{backgroundColor:r?"rgb(155, 191, 13)":""},children:[T.jsx(Jt,{to:"/",children:T.jsxs(lL,{children:[T.jsx(cL,{src:QB,alt:""}),T.jsxs(uL,{children:[T.jsx(L_,{children:"Vos poné el equipo"}),T.jsx(L_,{children:"Nosotros la cancha"})]})]})}),T.jsx("div",{children:e?T.jsxs(gL,{onClick:l,children:[T.jsxs(yL,{children:[" ",i," "]}),t&&T.jsx("p",{children:"Administrador"}),T.jsx(mL,{children:T.jsx(GB,{open:o})})]}):T.jsxs(T.Fragment,{children:[T.jsxs(dL,{children:[T.jsx(hL,{children:T.jsx(Jt,{to:"/register",children:"Crear Cuenta"})}),T.jsx(fL,{children:T.jsx(Jt,{to:"/login",children:"Iniciar sesión"})})]}),T.jsx(KB,{handleClick:l}),T.jsx(pL,{children:T.jsx(wL,{open:o})})]})})]})},JB=j.div`
  max-width: 1024px;
  margin: 0 auto;
  min-height: 100%;
`,ZB=({children:t})=>T.jsx(JB,{children:t});function eU(){return T.jsxs(T.Fragment,{children:[T.jsx(XB,{}),T.jsx(ZB,{children:T.jsx(vS,{})})]})}const tU=j.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-top: 32px;
`,nU=j.div`
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
`,rU=({categoria:t})=>{const{titulo:e,urlImage:n}=t;return T.jsxs(nU,{children:[T.jsx("div",{className:"imgContainer",children:T.jsx("img",{src:n,alt:e})}),T.jsx("p",{children:e})]})},iU=()=>{const{categorias:t}=A.useContext(On).contextValue;return T.jsx(tU,{children:t.map((e,n)=>T.jsx(rU,{categoria:e},n))})};function dE(t){return t!==null&&typeof t=="object"&&"constructor"in t&&t.constructor===Object}function cw(t,e){t===void 0&&(t={}),e===void 0&&(e={}),Object.keys(e).forEach(n=>{typeof t[n]>"u"?t[n]=e[n]:dE(e[n])&&dE(t[n])&&Object.keys(e[n]).length>0&&cw(t[n],e[n])})}const E2={body:{},addEventListener(){},removeEventListener(){},activeElement:{blur(){},nodeName:""},querySelector(){return null},querySelectorAll(){return[]},getElementById(){return null},createEvent(){return{initEvent(){}}},createElement(){return{children:[],childNodes:[],style:{},setAttribute(){},getElementsByTagName(){return[]}}},createElementNS(){return{}},importNode(){return null},location:{hash:"",host:"",hostname:"",href:"",origin:"",pathname:"",protocol:"",search:""}};function Ea(){const t=typeof document<"u"?document:{};return cw(t,E2),t}const sU={document:E2,navigator:{userAgent:""},location:{hash:"",host:"",hostname:"",href:"",origin:"",pathname:"",protocol:"",search:""},history:{replaceState(){},pushState(){},go(){},back(){}},CustomEvent:function(){return this},addEventListener(){},removeEventListener(){},getComputedStyle(){return{getPropertyValue(){return""}}},Image(){},Date(){},screen:{},setTimeout(){},clearTimeout(){},matchMedia(){return{}},requestAnimationFrame(t){return typeof setTimeout>"u"?(t(),null):setTimeout(t,0)},cancelAnimationFrame(t){typeof setTimeout>"u"||clearTimeout(t)}};function _n(){const t=typeof window<"u"?window:{};return cw(t,sU),t}function oU(t){return t===void 0&&(t=""),t.trim().split(" ").filter(e=>!!e.trim())}function aU(t){const e=t;Object.keys(e).forEach(n=>{try{e[n]=null}catch{}try{delete e[n]}catch{}})}function Cg(t,e){return e===void 0&&(e=0),setTimeout(t,e)}function sf(){return Date.now()}function lU(t){const e=_n();let n;return e.getComputedStyle&&(n=e.getComputedStyle(t,null)),!n&&t.currentStyle&&(n=t.currentStyle),n||(n=t.style),n}function cU(t,e){e===void 0&&(e="x");const n=_n();let r,i,s;const o=lU(t);return n.WebKitCSSMatrix?(i=o.transform||o.webkitTransform,i.split(",").length>6&&(i=i.split(", ").map(a=>a.replace(",",".")).join(", ")),s=new n.WebKitCSSMatrix(i==="none"?"":i)):(s=o.MozTransform||o.OTransform||o.MsTransform||o.msTransform||o.transform||o.getPropertyValue("transform").replace("translate(","matrix(1, 0, 0, 1,"),r=s.toString().split(",")),e==="x"&&(n.WebKitCSSMatrix?i=s.m41:r.length===16?i=parseFloat(r[12]):i=parseFloat(r[4])),e==="y"&&(n.WebKitCSSMatrix?i=s.m42:r.length===16?i=parseFloat(r[13]):i=parseFloat(r[5])),i||0}function Cu(t){return typeof t=="object"&&t!==null&&t.constructor&&Object.prototype.toString.call(t).slice(8,-1)==="Object"}function uU(t){return typeof window<"u"&&typeof window.HTMLElement<"u"?t instanceof HTMLElement:t&&(t.nodeType===1||t.nodeType===11)}function fn(){const t=Object(arguments.length<=0?void 0:arguments[0]),e=["__proto__","constructor","prototype"];for(let n=1;n<arguments.length;n+=1){const r=n<0||arguments.length<=n?void 0:arguments[n];if(r!=null&&!uU(r)){const i=Object.keys(Object(r)).filter(s=>e.indexOf(s)<0);for(let s=0,o=i.length;s<o;s+=1){const a=i[s],l=Object.getOwnPropertyDescriptor(r,a);l!==void 0&&l.enumerable&&(Cu(t[a])&&Cu(r[a])?r[a].__swiper__?t[a]=r[a]:fn(t[a],r[a]):!Cu(t[a])&&Cu(r[a])?(t[a]={},r[a].__swiper__?t[a]=r[a]:fn(t[a],r[a])):t[a]=r[a])}}}return t}function Iu(t,e,n){t.style.setProperty(e,n)}function T2(t){let{swiper:e,targetPosition:n,side:r}=t;const i=_n(),s=-e.translate;let o=null,a;const l=e.params.speed;e.wrapperEl.style.scrollSnapType="none",i.cancelAnimationFrame(e.cssModeFrameID);const c=n>s?"next":"prev",u=(m,v)=>c==="next"&&m>=v||c==="prev"&&m<=v,h=()=>{a=new Date().getTime(),o===null&&(o=a);const m=Math.max(Math.min((a-o)/l,1),0),v=.5-Math.cos(m*Math.PI)/2;let x=s+v*(n-s);if(u(x,n)&&(x=n),e.wrapperEl.scrollTo({[r]:x}),u(x,n)){e.wrapperEl.style.overflow="hidden",e.wrapperEl.style.scrollSnapType="",setTimeout(()=>{e.wrapperEl.style.overflow="",e.wrapperEl.scrollTo({[r]:x})}),i.cancelAnimationFrame(e.cssModeFrameID);return}e.cssModeFrameID=i.requestAnimationFrame(h)};h()}function lr(t,e){return e===void 0&&(e=""),[...t.children].filter(n=>n.matches(e))}function of(t){try{console.warn(t);return}catch{}}function af(t,e){e===void 0&&(e=[]);const n=document.createElement(t);return n.classList.add(...Array.isArray(e)?e:oU(e)),n}function dU(t,e){const n=[];for(;t.previousElementSibling;){const r=t.previousElementSibling;e?r.matches(e)&&n.push(r):n.push(r),t=r}return n}function fU(t,e){const n=[];for(;t.nextElementSibling;){const r=t.nextElementSibling;e?r.matches(e)&&n.push(r):n.push(r),t=r}return n}function di(t,e){return _n().getComputedStyle(t,null).getPropertyValue(e)}function lf(t){let e=t,n;if(e){for(n=0;(e=e.previousSibling)!==null;)e.nodeType===1&&(n+=1);return n}}function x2(t,e){const n=[];let r=t.parentElement;for(;r;)e?r.matches(e)&&n.push(r):n.push(r),r=r.parentElement;return n}function Ig(t,e,n){const r=_n();return n?t[e==="width"?"offsetWidth":"offsetHeight"]+parseFloat(r.getComputedStyle(t,null).getPropertyValue(e==="width"?"margin-right":"margin-top"))+parseFloat(r.getComputedStyle(t,null).getPropertyValue(e==="width"?"margin-left":"margin-bottom")):t.offsetWidth}let Op;function hU(){const t=_n(),e=Ea();return{smoothScroll:e.documentElement&&e.documentElement.style&&"scrollBehavior"in e.documentElement.style,touch:!!("ontouchstart"in t||t.DocumentTouch&&e instanceof t.DocumentTouch)}}function S2(){return Op||(Op=hU()),Op}let Dp;function pU(t){let{userAgent:e}=t===void 0?{}:t;const n=S2(),r=_n(),i=r.navigator.platform,s=e||r.navigator.userAgent,o={ios:!1,android:!1},a=r.screen.width,l=r.screen.height,c=s.match(/(Android);?[\s\/]+([\d.]+)?/);let u=s.match(/(iPad).*OS\s([\d_]+)/);const h=s.match(/(iPod)(.*OS\s([\d_]+))?/),m=!u&&s.match(/(iPhone\sOS|iOS)\s([\d_]+)/),v=i==="Win32";let x=i==="MacIntel";const g=["1024x1366","1366x1024","834x1194","1194x834","834x1112","1112x834","768x1024","1024x768","820x1180","1180x820","810x1080","1080x810"];return!u&&x&&n.touch&&g.indexOf(`${a}x${l}`)>=0&&(u=s.match(/(Version)\/([\d.]+)/),u||(u=[0,1,"13_0_0"]),x=!1),c&&!v&&(o.os="android",o.android=!0),(u||m||h)&&(o.os="ios",o.ios=!0),o}function mU(t){return t===void 0&&(t={}),Dp||(Dp=pU(t)),Dp}let Np;function gU(){const t=_n();let e=!1;function n(){const r=t.navigator.userAgent.toLowerCase();return r.indexOf("safari")>=0&&r.indexOf("chrome")<0&&r.indexOf("android")<0}if(n()){const r=String(t.navigator.userAgent);if(r.includes("Version/")){const[i,s]=r.split("Version/")[1].split(" ")[0].split(".").map(o=>Number(o));e=i<16||i===16&&s<2}}return{isSafari:e||n(),needPerspectiveFix:e,isWebView:/(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(t.navigator.userAgent)}}function yU(){return Np||(Np=gU()),Np}function vU(t){let{swiper:e,on:n,emit:r}=t;const i=_n();let s=null,o=null;const a=()=>{!e||e.destroyed||!e.initialized||(r("beforeResize"),r("resize"))},l=()=>{!e||e.destroyed||!e.initialized||(s=new ResizeObserver(h=>{o=i.requestAnimationFrame(()=>{const{width:m,height:v}=e;let x=m,g=v;h.forEach(S=>{let{contentBoxSize:w,contentRect:p,target:y}=S;y&&y!==e.el||(x=p?p.width:(w[0]||w).inlineSize,g=p?p.height:(w[0]||w).blockSize)}),(x!==m||g!==v)&&a()})}),s.observe(e.el))},c=()=>{o&&i.cancelAnimationFrame(o),s&&s.unobserve&&e.el&&(s.unobserve(e.el),s=null)},u=()=>{!e||e.destroyed||!e.initialized||r("orientationchange")};n("init",()=>{if(e.params.resizeObserver&&typeof i.ResizeObserver<"u"){l();return}i.addEventListener("resize",a),i.addEventListener("orientationchange",u)}),n("destroy",()=>{c(),i.removeEventListener("resize",a),i.removeEventListener("orientationchange",u)})}function wU(t){let{swiper:e,extendParams:n,on:r,emit:i}=t;const s=[],o=_n(),a=function(u,h){h===void 0&&(h={});const m=o.MutationObserver||o.WebkitMutationObserver,v=new m(x=>{if(e.__preventObserver__)return;if(x.length===1){i("observerUpdate",x[0]);return}const g=function(){i("observerUpdate",x[0])};o.requestAnimationFrame?o.requestAnimationFrame(g):o.setTimeout(g,0)});v.observe(u,{attributes:typeof h.attributes>"u"?!0:h.attributes,childList:typeof h.childList>"u"?!0:h.childList,characterData:typeof h.characterData>"u"?!0:h.characterData}),s.push(v)},l=()=>{if(e.params.observer){if(e.params.observeParents){const u=x2(e.hostEl);for(let h=0;h<u.length;h+=1)a(u[h])}a(e.hostEl,{childList:e.params.observeSlideChildren}),a(e.wrapperEl,{attributes:!1})}},c=()=>{s.forEach(u=>{u.disconnect()}),s.splice(0,s.length)};n({observer:!1,observeParents:!1,observeSlideChildren:!1}),r("init",l),r("destroy",c)}var _U={on(t,e,n){const r=this;if(!r.eventsListeners||r.destroyed||typeof e!="function")return r;const i=n?"unshift":"push";return t.split(" ").forEach(s=>{r.eventsListeners[s]||(r.eventsListeners[s]=[]),r.eventsListeners[s][i](e)}),r},once(t,e,n){const r=this;if(!r.eventsListeners||r.destroyed||typeof e!="function")return r;function i(){r.off(t,i),i.__emitterProxy&&delete i.__emitterProxy;for(var s=arguments.length,o=new Array(s),a=0;a<s;a++)o[a]=arguments[a];e.apply(r,o)}return i.__emitterProxy=e,r.on(t,i,n)},onAny(t,e){const n=this;if(!n.eventsListeners||n.destroyed||typeof t!="function")return n;const r=e?"unshift":"push";return n.eventsAnyListeners.indexOf(t)<0&&n.eventsAnyListeners[r](t),n},offAny(t){const e=this;if(!e.eventsListeners||e.destroyed||!e.eventsAnyListeners)return e;const n=e.eventsAnyListeners.indexOf(t);return n>=0&&e.eventsAnyListeners.splice(n,1),e},off(t,e){const n=this;return!n.eventsListeners||n.destroyed||!n.eventsListeners||t.split(" ").forEach(r=>{typeof e>"u"?n.eventsListeners[r]=[]:n.eventsListeners[r]&&n.eventsListeners[r].forEach((i,s)=>{(i===e||i.__emitterProxy&&i.__emitterProxy===e)&&n.eventsListeners[r].splice(s,1)})}),n},emit(){const t=this;if(!t.eventsListeners||t.destroyed||!t.eventsListeners)return t;let e,n,r;for(var i=arguments.length,s=new Array(i),o=0;o<i;o++)s[o]=arguments[o];return typeof s[0]=="string"||Array.isArray(s[0])?(e=s[0],n=s.slice(1,s.length),r=t):(e=s[0].events,n=s[0].data,r=s[0].context||t),n.unshift(r),(Array.isArray(e)?e:e.split(" ")).forEach(l=>{t.eventsAnyListeners&&t.eventsAnyListeners.length&&t.eventsAnyListeners.forEach(c=>{c.apply(r,[l,...n])}),t.eventsListeners&&t.eventsListeners[l]&&t.eventsListeners[l].forEach(c=>{c.apply(r,n)})}),t}};function EU(){const t=this;let e,n;const r=t.el;typeof t.params.width<"u"&&t.params.width!==null?e=t.params.width:e=r.clientWidth,typeof t.params.height<"u"&&t.params.height!==null?n=t.params.height:n=r.clientHeight,!(e===0&&t.isHorizontal()||n===0&&t.isVertical())&&(e=e-parseInt(di(r,"padding-left")||0,10)-parseInt(di(r,"padding-right")||0,10),n=n-parseInt(di(r,"padding-top")||0,10)-parseInt(di(r,"padding-bottom")||0,10),Number.isNaN(e)&&(e=0),Number.isNaN(n)&&(n=0),Object.assign(t,{width:e,height:n,size:t.isHorizontal()?e:n}))}function TU(){const t=this;function e(O,U){return parseFloat(O.getPropertyValue(t.getDirectionLabel(U))||0)}const n=t.params,{wrapperEl:r,slidesEl:i,size:s,rtlTranslate:o,wrongRTL:a}=t,l=t.virtual&&n.virtual.enabled,c=l?t.virtual.slides.length:t.slides.length,u=lr(i,`.${t.params.slideClass}, swiper-slide`),h=l?t.virtual.slides.length:u.length;let m=[];const v=[],x=[];let g=n.slidesOffsetBefore;typeof g=="function"&&(g=n.slidesOffsetBefore.call(t));let S=n.slidesOffsetAfter;typeof S=="function"&&(S=n.slidesOffsetAfter.call(t));const w=t.snapGrid.length,p=t.slidesGrid.length;let y=n.spaceBetween,E=-g,C=0,I=0;if(typeof s>"u")return;typeof y=="string"&&y.indexOf("%")>=0?y=parseFloat(y.replace("%",""))/100*s:typeof y=="string"&&(y=parseFloat(y)),t.virtualSize=-y,u.forEach(O=>{o?O.style.marginLeft="":O.style.marginRight="",O.style.marginBottom="",O.style.marginTop=""}),n.centeredSlides&&n.cssMode&&(Iu(r,"--swiper-centered-offset-before",""),Iu(r,"--swiper-centered-offset-after",""));const P=n.grid&&n.grid.rows>1&&t.grid;P?t.grid.initSlides(u):t.grid&&t.grid.unsetSlides();let R;const N=n.slidesPerView==="auto"&&n.breakpoints&&Object.keys(n.breakpoints).filter(O=>typeof n.breakpoints[O].slidesPerView<"u").length>0;for(let O=0;O<h;O+=1){R=0;let U;if(u[O]&&(U=u[O]),P&&t.grid.updateSlide(O,U,u),!(u[O]&&di(U,"display")==="none")){if(n.slidesPerView==="auto"){N&&(u[O].style[t.getDirectionLabel("width")]="");const W=getComputedStyle(U),F=U.style.transform,M=U.style.webkitTransform;if(F&&(U.style.transform="none"),M&&(U.style.webkitTransform="none"),n.roundLengths)R=t.isHorizontal()?Ig(U,"width",!0):Ig(U,"height",!0);else{const V=e(W,"width"),q=e(W,"padding-left"),k=e(W,"padding-right"),D=e(W,"margin-left"),B=e(W,"margin-right"),K=W.getPropertyValue("box-sizing");if(K&&K==="border-box")R=V+D+B;else{const{clientWidth:re,offsetWidth:ue}=U;R=V+q+k+D+B+(ue-re)}}F&&(U.style.transform=F),M&&(U.style.webkitTransform=M),n.roundLengths&&(R=Math.floor(R))}else R=(s-(n.slidesPerView-1)*y)/n.slidesPerView,n.roundLengths&&(R=Math.floor(R)),u[O]&&(u[O].style[t.getDirectionLabel("width")]=`${R}px`);u[O]&&(u[O].swiperSlideSize=R),x.push(R),n.centeredSlides?(E=E+R/2+C/2+y,C===0&&O!==0&&(E=E-s/2-y),O===0&&(E=E-s/2-y),Math.abs(E)<1/1e3&&(E=0),n.roundLengths&&(E=Math.floor(E)),I%n.slidesPerGroup===0&&m.push(E),v.push(E)):(n.roundLengths&&(E=Math.floor(E)),(I-Math.min(t.params.slidesPerGroupSkip,I))%t.params.slidesPerGroup===0&&m.push(E),v.push(E),E=E+R+y),t.virtualSize+=R+y,C=R,I+=1}}if(t.virtualSize=Math.max(t.virtualSize,s)+S,o&&a&&(n.effect==="slide"||n.effect==="coverflow")&&(r.style.width=`${t.virtualSize+y}px`),n.setWrapperSize&&(r.style[t.getDirectionLabel("width")]=`${t.virtualSize+y}px`),P&&t.grid.updateWrapperSize(R,m),!n.centeredSlides){const O=[];for(let U=0;U<m.length;U+=1){let W=m[U];n.roundLengths&&(W=Math.floor(W)),m[U]<=t.virtualSize-s&&O.push(W)}m=O,Math.floor(t.virtualSize-s)-Math.floor(m[m.length-1])>1&&m.push(t.virtualSize-s)}if(l&&n.loop){const O=x[0]+y;if(n.slidesPerGroup>1){const U=Math.ceil((t.virtual.slidesBefore+t.virtual.slidesAfter)/n.slidesPerGroup),W=O*n.slidesPerGroup;for(let F=0;F<U;F+=1)m.push(m[m.length-1]+W)}for(let U=0;U<t.virtual.slidesBefore+t.virtual.slidesAfter;U+=1)n.slidesPerGroup===1&&m.push(m[m.length-1]+O),v.push(v[v.length-1]+O),t.virtualSize+=O}if(m.length===0&&(m=[0]),y!==0){const O=t.isHorizontal()&&o?"marginLeft":t.getDirectionLabel("marginRight");u.filter((U,W)=>!n.cssMode||n.loop?!0:W!==u.length-1).forEach(U=>{U.style[O]=`${y}px`})}if(n.centeredSlides&&n.centeredSlidesBounds){let O=0;x.forEach(W=>{O+=W+(y||0)}),O-=y;const U=O-s;m=m.map(W=>W<=0?-g:W>U?U+S:W)}if(n.centerInsufficientSlides){let O=0;if(x.forEach(U=>{O+=U+(y||0)}),O-=y,O<s){const U=(s-O)/2;m.forEach((W,F)=>{m[F]=W-U}),v.forEach((W,F)=>{v[F]=W+U})}}if(Object.assign(t,{slides:u,snapGrid:m,slidesGrid:v,slidesSizesGrid:x}),n.centeredSlides&&n.cssMode&&!n.centeredSlidesBounds){Iu(r,"--swiper-centered-offset-before",`${-m[0]}px`),Iu(r,"--swiper-centered-offset-after",`${t.size/2-x[x.length-1]/2}px`);const O=-t.snapGrid[0],U=-t.slidesGrid[0];t.snapGrid=t.snapGrid.map(W=>W+O),t.slidesGrid=t.slidesGrid.map(W=>W+U)}if(h!==c&&t.emit("slidesLengthChange"),m.length!==w&&(t.params.watchOverflow&&t.checkOverflow(),t.emit("snapGridLengthChange")),v.length!==p&&t.emit("slidesGridLengthChange"),n.watchSlidesProgress&&t.updateSlidesOffset(),!l&&!n.cssMode&&(n.effect==="slide"||n.effect==="fade")){const O=`${n.containerModifierClass}backface-hidden`,U=t.el.classList.contains(O);h<=n.maxBackfaceHiddenSlides?U||t.el.classList.add(O):U&&t.el.classList.remove(O)}}function xU(t){const e=this,n=[],r=e.virtual&&e.params.virtual.enabled;let i=0,s;typeof t=="number"?e.setTransition(t):t===!0&&e.setTransition(e.params.speed);const o=a=>r?e.slides[e.getSlideIndexByData(a)]:e.slides[a];if(e.params.slidesPerView!=="auto"&&e.params.slidesPerView>1)if(e.params.centeredSlides)(e.visibleSlides||[]).forEach(a=>{n.push(a)});else for(s=0;s<Math.ceil(e.params.slidesPerView);s+=1){const a=e.activeIndex+s;if(a>e.slides.length&&!r)break;n.push(o(a))}else n.push(o(e.activeIndex));for(s=0;s<n.length;s+=1)if(typeof n[s]<"u"){const a=n[s].offsetHeight;i=a>i?a:i}(i||i===0)&&(e.wrapperEl.style.height=`${i}px`)}function SU(){const t=this,e=t.slides,n=t.isElement?t.isHorizontal()?t.wrapperEl.offsetLeft:t.wrapperEl.offsetTop:0;for(let r=0;r<e.length;r+=1)e[r].swiperSlideOffset=(t.isHorizontal()?e[r].offsetLeft:e[r].offsetTop)-n-t.cssOverflowAdjustment()}function bU(t){t===void 0&&(t=this&&this.translate||0);const e=this,n=e.params,{slides:r,rtlTranslate:i,snapGrid:s}=e;if(r.length===0)return;typeof r[0].swiperSlideOffset>"u"&&e.updateSlidesOffset();let o=-t;i&&(o=t),r.forEach(l=>{l.classList.remove(n.slideVisibleClass,n.slideFullyVisibleClass)}),e.visibleSlidesIndexes=[],e.visibleSlides=[];let a=n.spaceBetween;typeof a=="string"&&a.indexOf("%")>=0?a=parseFloat(a.replace("%",""))/100*e.size:typeof a=="string"&&(a=parseFloat(a));for(let l=0;l<r.length;l+=1){const c=r[l];let u=c.swiperSlideOffset;n.cssMode&&n.centeredSlides&&(u-=r[0].swiperSlideOffset);const h=(o+(n.centeredSlides?e.minTranslate():0)-u)/(c.swiperSlideSize+a),m=(o-s[0]+(n.centeredSlides?e.minTranslate():0)-u)/(c.swiperSlideSize+a),v=-(o-u),x=v+e.slidesSizesGrid[l],g=v>=0&&v<=e.size-e.slidesSizesGrid[l];(v>=0&&v<e.size-1||x>1&&x<=e.size||v<=0&&x>=e.size)&&(e.visibleSlides.push(c),e.visibleSlidesIndexes.push(l),r[l].classList.add(n.slideVisibleClass)),g&&r[l].classList.add(n.slideFullyVisibleClass),c.progress=i?-h:h,c.originalProgress=i?-m:m}}function CU(t){const e=this;if(typeof t>"u"){const u=e.rtlTranslate?-1:1;t=e&&e.translate&&e.translate*u||0}const n=e.params,r=e.maxTranslate()-e.minTranslate();let{progress:i,isBeginning:s,isEnd:o,progressLoop:a}=e;const l=s,c=o;if(r===0)i=0,s=!0,o=!0;else{i=(t-e.minTranslate())/r;const u=Math.abs(t-e.minTranslate())<1,h=Math.abs(t-e.maxTranslate())<1;s=u||i<=0,o=h||i>=1,u&&(i=0),h&&(i=1)}if(n.loop){const u=e.getSlideIndexByData(0),h=e.getSlideIndexByData(e.slides.length-1),m=e.slidesGrid[u],v=e.slidesGrid[h],x=e.slidesGrid[e.slidesGrid.length-1],g=Math.abs(t);g>=m?a=(g-m)/x:a=(g+x-v)/x,a>1&&(a-=1)}Object.assign(e,{progress:i,progressLoop:a,isBeginning:s,isEnd:o}),(n.watchSlidesProgress||n.centeredSlides&&n.autoHeight)&&e.updateSlidesProgress(t),s&&!l&&e.emit("reachBeginning toEdge"),o&&!c&&e.emit("reachEnd toEdge"),(l&&!s||c&&!o)&&e.emit("fromEdge"),e.emit("progress",i)}function IU(){const t=this,{slides:e,params:n,slidesEl:r,activeIndex:i}=t,s=t.virtual&&n.virtual.enabled,o=t.grid&&n.grid&&n.grid.rows>1,a=h=>lr(r,`.${n.slideClass}${h}, swiper-slide${h}`)[0];e.forEach(h=>{h.classList.remove(n.slideActiveClass,n.slideNextClass,n.slidePrevClass)});let l,c,u;if(s)if(n.loop){let h=i-t.virtual.slidesBefore;h<0&&(h=t.virtual.slides.length+h),h>=t.virtual.slides.length&&(h-=t.virtual.slides.length),l=a(`[data-swiper-slide-index="${h}"]`)}else l=a(`[data-swiper-slide-index="${i}"]`);else o?(l=e.filter(h=>h.column===i)[0],u=e.filter(h=>h.column===i+1)[0],c=e.filter(h=>h.column===i-1)[0]):l=e[i];l&&(l.classList.add(n.slideActiveClass),o?(u&&u.classList.add(n.slideNextClass),c&&c.classList.add(n.slidePrevClass)):(u=fU(l,`.${n.slideClass}, swiper-slide`)[0],n.loop&&!u&&(u=e[0]),u&&u.classList.add(n.slideNextClass),c=dU(l,`.${n.slideClass}, swiper-slide`)[0],n.loop&&!c===0&&(c=e[e.length-1]),c&&c.classList.add(n.slidePrevClass))),t.emitSlidesClasses()}const rd=(t,e)=>{if(!t||t.destroyed||!t.params)return;const n=()=>t.isElement?"swiper-slide":`.${t.params.slideClass}`,r=e.closest(n());if(r){let i=r.querySelector(`.${t.params.lazyPreloaderClass}`);!i&&t.isElement&&(r.shadowRoot?i=r.shadowRoot.querySelector(`.${t.params.lazyPreloaderClass}`):requestAnimationFrame(()=>{r.shadowRoot&&(i=r.shadowRoot.querySelector(`.${t.params.lazyPreloaderClass}`),i&&i.remove())})),i&&i.remove()}},Lp=(t,e)=>{if(!t.slides[e])return;const n=t.slides[e].querySelector('[loading="lazy"]');n&&n.removeAttribute("loading")},Ag=t=>{if(!t||t.destroyed||!t.params)return;let e=t.params.lazyPreloadPrevNext;const n=t.slides.length;if(!n||!e||e<0)return;e=Math.min(e,n);const r=t.params.slidesPerView==="auto"?t.slidesPerViewDynamic():Math.ceil(t.params.slidesPerView),i=t.activeIndex;if(t.params.grid&&t.params.grid.rows>1){const o=i,a=[o-e];a.push(...Array.from({length:e}).map((l,c)=>o+r+c)),t.slides.forEach((l,c)=>{a.includes(l.column)&&Lp(t,c)});return}const s=i+r-1;if(t.params.rewind||t.params.loop)for(let o=i-e;o<=s+e;o+=1){const a=(o%n+n)%n;(a<i||a>s)&&Lp(t,a)}else for(let o=Math.max(i-e,0);o<=Math.min(s+e,n-1);o+=1)o!==i&&(o>s||o<i)&&Lp(t,o)};function AU(t){const{slidesGrid:e,params:n}=t,r=t.rtlTranslate?t.translate:-t.translate;let i;for(let s=0;s<e.length;s+=1)typeof e[s+1]<"u"?r>=e[s]&&r<e[s+1]-(e[s+1]-e[s])/2?i=s:r>=e[s]&&r<e[s+1]&&(i=s+1):r>=e[s]&&(i=s);return n.normalizeSlideIndex&&(i<0||typeof i>"u")&&(i=0),i}function PU(t){const e=this,n=e.rtlTranslate?e.translate:-e.translate,{snapGrid:r,params:i,activeIndex:s,realIndex:o,snapIndex:a}=e;let l=t,c;const u=v=>{let x=v-e.virtual.slidesBefore;return x<0&&(x=e.virtual.slides.length+x),x>=e.virtual.slides.length&&(x-=e.virtual.slides.length),x};if(typeof l>"u"&&(l=AU(e)),r.indexOf(n)>=0)c=r.indexOf(n);else{const v=Math.min(i.slidesPerGroupSkip,l);c=v+Math.floor((l-v)/i.slidesPerGroup)}if(c>=r.length&&(c=r.length-1),l===s&&!e.params.loop){c!==a&&(e.snapIndex=c,e.emit("snapIndexChange"));return}if(l===s&&e.params.loop&&e.virtual&&e.params.virtual.enabled){e.realIndex=u(l);return}const h=e.grid&&i.grid&&i.grid.rows>1;let m;if(e.virtual&&i.virtual.enabled&&i.loop)m=u(l);else if(h){const v=e.slides.filter(g=>g.column===l)[0];let x=parseInt(v.getAttribute("data-swiper-slide-index"),10);Number.isNaN(x)&&(x=Math.max(e.slides.indexOf(v),0)),m=Math.floor(x/i.grid.rows)}else if(e.slides[l]){const v=e.slides[l].getAttribute("data-swiper-slide-index");v?m=parseInt(v,10):m=l}else m=l;Object.assign(e,{previousSnapIndex:a,snapIndex:c,previousRealIndex:o,realIndex:m,previousIndex:s,activeIndex:l}),e.initialized&&Ag(e),e.emit("activeIndexChange"),e.emit("snapIndexChange"),(e.initialized||e.params.runCallbacksOnInit)&&(o!==m&&e.emit("realIndexChange"),e.emit("slideChange"))}function kU(t,e){const n=this,r=n.params;let i=t.closest(`.${r.slideClass}, swiper-slide`);!i&&n.isElement&&e&&e.length>1&&e.includes(t)&&[...e.slice(e.indexOf(t)+1,e.length)].forEach(a=>{!i&&a.matches&&a.matches(`.${r.slideClass}, swiper-slide`)&&(i=a)});let s=!1,o;if(i){for(let a=0;a<n.slides.length;a+=1)if(n.slides[a]===i){s=!0,o=a;break}}if(i&&s)n.clickedSlide=i,n.virtual&&n.params.virtual.enabled?n.clickedIndex=parseInt(i.getAttribute("data-swiper-slide-index"),10):n.clickedIndex=o;else{n.clickedSlide=void 0,n.clickedIndex=void 0;return}r.slideToClickedSlide&&n.clickedIndex!==void 0&&n.clickedIndex!==n.activeIndex&&n.slideToClickedSlide()}var RU={updateSize:EU,updateSlides:TU,updateAutoHeight:xU,updateSlidesOffset:SU,updateSlidesProgress:bU,updateProgress:CU,updateSlidesClasses:IU,updateActiveIndex:PU,updateClickedSlide:kU};function OU(t){t===void 0&&(t=this.isHorizontal()?"x":"y");const e=this,{params:n,rtlTranslate:r,translate:i,wrapperEl:s}=e;if(n.virtualTranslate)return r?-i:i;if(n.cssMode)return i;let o=cU(s,t);return o+=e.cssOverflowAdjustment(),r&&(o=-o),o||0}function DU(t,e){const n=this,{rtlTranslate:r,params:i,wrapperEl:s,progress:o}=n;let a=0,l=0;const c=0;n.isHorizontal()?a=r?-t:t:l=t,i.roundLengths&&(a=Math.floor(a),l=Math.floor(l)),n.previousTranslate=n.translate,n.translate=n.isHorizontal()?a:l,i.cssMode?s[n.isHorizontal()?"scrollLeft":"scrollTop"]=n.isHorizontal()?-a:-l:i.virtualTranslate||(n.isHorizontal()?a-=n.cssOverflowAdjustment():l-=n.cssOverflowAdjustment(),s.style.transform=`translate3d(${a}px, ${l}px, ${c}px)`);let u;const h=n.maxTranslate()-n.minTranslate();h===0?u=0:u=(t-n.minTranslate())/h,u!==o&&n.updateProgress(t),n.emit("setTranslate",n.translate,e)}function NU(){return-this.snapGrid[0]}function LU(){return-this.snapGrid[this.snapGrid.length-1]}function MU(t,e,n,r,i){t===void 0&&(t=0),e===void 0&&(e=this.params.speed),n===void 0&&(n=!0),r===void 0&&(r=!0);const s=this,{params:o,wrapperEl:a}=s;if(s.animating&&o.preventInteractionOnTransition)return!1;const l=s.minTranslate(),c=s.maxTranslate();let u;if(r&&t>l?u=l:r&&t<c?u=c:u=t,s.updateProgress(u),o.cssMode){const h=s.isHorizontal();if(e===0)a[h?"scrollLeft":"scrollTop"]=-u;else{if(!s.support.smoothScroll)return T2({swiper:s,targetPosition:-u,side:h?"left":"top"}),!0;a.scrollTo({[h?"left":"top"]:-u,behavior:"smooth"})}return!0}return e===0?(s.setTransition(0),s.setTranslate(u),n&&(s.emit("beforeTransitionStart",e,i),s.emit("transitionEnd"))):(s.setTransition(e),s.setTranslate(u),n&&(s.emit("beforeTransitionStart",e,i),s.emit("transitionStart")),s.animating||(s.animating=!0,s.onTranslateToWrapperTransitionEnd||(s.onTranslateToWrapperTransitionEnd=function(m){!s||s.destroyed||m.target===this&&(s.wrapperEl.removeEventListener("transitionend",s.onTranslateToWrapperTransitionEnd),s.onTranslateToWrapperTransitionEnd=null,delete s.onTranslateToWrapperTransitionEnd,n&&s.emit("transitionEnd"))}),s.wrapperEl.addEventListener("transitionend",s.onTranslateToWrapperTransitionEnd))),!0}var VU={getTranslate:OU,setTranslate:DU,minTranslate:NU,maxTranslate:LU,translateTo:MU};function jU(t,e){const n=this;n.params.cssMode||(n.wrapperEl.style.transitionDuration=`${t}ms`,n.wrapperEl.style.transitionDelay=t===0?"0ms":""),n.emit("setTransition",t,e)}function b2(t){let{swiper:e,runCallbacks:n,direction:r,step:i}=t;const{activeIndex:s,previousIndex:o}=e;let a=r;if(a||(s>o?a="next":s<o?a="prev":a="reset"),e.emit(`transition${i}`),n&&s!==o){if(a==="reset"){e.emit(`slideResetTransition${i}`);return}e.emit(`slideChangeTransition${i}`),a==="next"?e.emit(`slideNextTransition${i}`):e.emit(`slidePrevTransition${i}`)}}function FU(t,e){t===void 0&&(t=!0);const n=this,{params:r}=n;r.cssMode||(r.autoHeight&&n.updateAutoHeight(),b2({swiper:n,runCallbacks:t,direction:e,step:"Start"}))}function $U(t,e){t===void 0&&(t=!0);const n=this,{params:r}=n;n.animating=!1,!r.cssMode&&(n.setTransition(0),b2({swiper:n,runCallbacks:t,direction:e,step:"End"}))}var BU={setTransition:jU,transitionStart:FU,transitionEnd:$U};function UU(t,e,n,r,i){t===void 0&&(t=0),e===void 0&&(e=this.params.speed),n===void 0&&(n=!0),typeof t=="string"&&(t=parseInt(t,10));const s=this;let o=t;o<0&&(o=0);const{params:a,snapGrid:l,slidesGrid:c,previousIndex:u,activeIndex:h,rtlTranslate:m,wrapperEl:v,enabled:x}=s;if(s.animating&&a.preventInteractionOnTransition||!x&&!r&&!i)return!1;const g=Math.min(s.params.slidesPerGroupSkip,o);let S=g+Math.floor((o-g)/s.params.slidesPerGroup);S>=l.length&&(S=l.length-1);const w=-l[S];if(a.normalizeSlideIndex)for(let y=0;y<c.length;y+=1){const E=-Math.floor(w*100),C=Math.floor(c[y]*100),I=Math.floor(c[y+1]*100);typeof c[y+1]<"u"?E>=C&&E<I-(I-C)/2?o=y:E>=C&&E<I&&(o=y+1):E>=C&&(o=y)}if(s.initialized&&o!==h&&(!s.allowSlideNext&&(m?w>s.translate&&w>s.minTranslate():w<s.translate&&w<s.minTranslate())||!s.allowSlidePrev&&w>s.translate&&w>s.maxTranslate()&&(h||0)!==o))return!1;o!==(u||0)&&n&&s.emit("beforeSlideChangeStart"),s.updateProgress(w);let p;if(o>h?p="next":o<h?p="prev":p="reset",m&&-w===s.translate||!m&&w===s.translate)return s.updateActiveIndex(o),a.autoHeight&&s.updateAutoHeight(),s.updateSlidesClasses(),a.effect!=="slide"&&s.setTranslate(w),p!=="reset"&&(s.transitionStart(n,p),s.transitionEnd(n,p)),!1;if(a.cssMode){const y=s.isHorizontal(),E=m?w:-w;if(e===0){const C=s.virtual&&s.params.virtual.enabled;C&&(s.wrapperEl.style.scrollSnapType="none",s._immediateVirtual=!0),C&&!s._cssModeVirtualInitialSet&&s.params.initialSlide>0?(s._cssModeVirtualInitialSet=!0,requestAnimationFrame(()=>{v[y?"scrollLeft":"scrollTop"]=E})):v[y?"scrollLeft":"scrollTop"]=E,C&&requestAnimationFrame(()=>{s.wrapperEl.style.scrollSnapType="",s._immediateVirtual=!1})}else{if(!s.support.smoothScroll)return T2({swiper:s,targetPosition:E,side:y?"left":"top"}),!0;v.scrollTo({[y?"left":"top"]:E,behavior:"smooth"})}return!0}return s.setTransition(e),s.setTranslate(w),s.updateActiveIndex(o),s.updateSlidesClasses(),s.emit("beforeTransitionStart",e,r),s.transitionStart(n,p),e===0?s.transitionEnd(n,p):s.animating||(s.animating=!0,s.onSlideToWrapperTransitionEnd||(s.onSlideToWrapperTransitionEnd=function(E){!s||s.destroyed||E.target===this&&(s.wrapperEl.removeEventListener("transitionend",s.onSlideToWrapperTransitionEnd),s.onSlideToWrapperTransitionEnd=null,delete s.onSlideToWrapperTransitionEnd,s.transitionEnd(n,p))}),s.wrapperEl.addEventListener("transitionend",s.onSlideToWrapperTransitionEnd)),!0}function zU(t,e,n,r){t===void 0&&(t=0),e===void 0&&(e=this.params.speed),n===void 0&&(n=!0),typeof t=="string"&&(t=parseInt(t,10));const i=this,s=i.grid&&i.params.grid&&i.params.grid.rows>1;let o=t;if(i.params.loop)if(i.virtual&&i.params.virtual.enabled)o=o+i.virtual.slidesBefore;else{let a;if(s){const m=o*i.params.grid.rows;a=i.slides.filter(v=>v.getAttribute("data-swiper-slide-index")*1===m)[0].column}else a=i.getSlideIndexByData(o);const l=s?Math.ceil(i.slides.length/i.params.grid.rows):i.slides.length,{centeredSlides:c}=i.params;let u=i.params.slidesPerView;u==="auto"?u=i.slidesPerViewDynamic():(u=Math.ceil(parseFloat(i.params.slidesPerView,10)),c&&u%2===0&&(u=u+1));let h=l-a<u;if(c&&(h=h||a<Math.ceil(u/2)),h){const m=c?a<i.activeIndex?"prev":"next":a-i.activeIndex-1<i.params.slidesPerView?"next":"prev";i.loopFix({direction:m,slideTo:!0,activeSlideIndex:m==="next"?a+1:a-l+1,slideRealIndex:m==="next"?i.realIndex:void 0})}if(s){const m=o*i.params.grid.rows;o=i.slides.filter(v=>v.getAttribute("data-swiper-slide-index")*1===m)[0].column}else o=i.getSlideIndexByData(o)}return requestAnimationFrame(()=>{i.slideTo(o,e,n,r)}),i}function HU(t,e,n){t===void 0&&(t=this.params.speed),e===void 0&&(e=!0);const r=this,{enabled:i,params:s,animating:o}=r;if(!i)return r;let a=s.slidesPerGroup;s.slidesPerView==="auto"&&s.slidesPerGroup===1&&s.slidesPerGroupAuto&&(a=Math.max(r.slidesPerViewDynamic("current",!0),1));const l=r.activeIndex<s.slidesPerGroupSkip?1:a,c=r.virtual&&s.virtual.enabled;if(s.loop){if(o&&!c&&s.loopPreventsSliding)return!1;if(r.loopFix({direction:"next"}),r._clientLeft=r.wrapperEl.clientLeft,r.activeIndex===r.slides.length-1&&s.cssMode)return requestAnimationFrame(()=>{r.slideTo(r.activeIndex+l,t,e,n)}),!0}return s.rewind&&r.isEnd?r.slideTo(0,t,e,n):r.slideTo(r.activeIndex+l,t,e,n)}function WU(t,e,n){t===void 0&&(t=this.params.speed),e===void 0&&(e=!0);const r=this,{params:i,snapGrid:s,slidesGrid:o,rtlTranslate:a,enabled:l,animating:c}=r;if(!l)return r;const u=r.virtual&&i.virtual.enabled;if(i.loop){if(c&&!u&&i.loopPreventsSliding)return!1;r.loopFix({direction:"prev"}),r._clientLeft=r.wrapperEl.clientLeft}const h=a?r.translate:-r.translate;function m(w){return w<0?-Math.floor(Math.abs(w)):Math.floor(w)}const v=m(h),x=s.map(w=>m(w));let g=s[x.indexOf(v)-1];if(typeof g>"u"&&i.cssMode){let w;s.forEach((p,y)=>{v>=p&&(w=y)}),typeof w<"u"&&(g=s[w>0?w-1:w])}let S=0;if(typeof g<"u"&&(S=o.indexOf(g),S<0&&(S=r.activeIndex-1),i.slidesPerView==="auto"&&i.slidesPerGroup===1&&i.slidesPerGroupAuto&&(S=S-r.slidesPerViewDynamic("previous",!0)+1,S=Math.max(S,0))),i.rewind&&r.isBeginning){const w=r.params.virtual&&r.params.virtual.enabled&&r.virtual?r.virtual.slides.length-1:r.slides.length-1;return r.slideTo(w,t,e,n)}else if(i.loop&&r.activeIndex===0&&i.cssMode)return requestAnimationFrame(()=>{r.slideTo(S,t,e,n)}),!0;return r.slideTo(S,t,e,n)}function qU(t,e,n){t===void 0&&(t=this.params.speed),e===void 0&&(e=!0);const r=this;return r.slideTo(r.activeIndex,t,e,n)}function GU(t,e,n,r){t===void 0&&(t=this.params.speed),e===void 0&&(e=!0),r===void 0&&(r=.5);const i=this;let s=i.activeIndex;const o=Math.min(i.params.slidesPerGroupSkip,s),a=o+Math.floor((s-o)/i.params.slidesPerGroup),l=i.rtlTranslate?i.translate:-i.translate;if(l>=i.snapGrid[a]){const c=i.snapGrid[a],u=i.snapGrid[a+1];l-c>(u-c)*r&&(s+=i.params.slidesPerGroup)}else{const c=i.snapGrid[a-1],u=i.snapGrid[a];l-c<=(u-c)*r&&(s-=i.params.slidesPerGroup)}return s=Math.max(s,0),s=Math.min(s,i.slidesGrid.length-1),i.slideTo(s,t,e,n)}function KU(){const t=this,{params:e,slidesEl:n}=t,r=e.slidesPerView==="auto"?t.slidesPerViewDynamic():e.slidesPerView;let i=t.clickedIndex,s;const o=t.isElement?"swiper-slide":`.${e.slideClass}`;if(e.loop){if(t.animating)return;s=parseInt(t.clickedSlide.getAttribute("data-swiper-slide-index"),10),e.centeredSlides?i<t.loopedSlides-r/2||i>t.slides.length-t.loopedSlides+r/2?(t.loopFix(),i=t.getSlideIndex(lr(n,`${o}[data-swiper-slide-index="${s}"]`)[0]),Cg(()=>{t.slideTo(i)})):t.slideTo(i):i>t.slides.length-r?(t.loopFix(),i=t.getSlideIndex(lr(n,`${o}[data-swiper-slide-index="${s}"]`)[0]),Cg(()=>{t.slideTo(i)})):t.slideTo(i)}else t.slideTo(i)}var QU={slideTo:UU,slideToLoop:zU,slideNext:HU,slidePrev:WU,slideReset:qU,slideToClosest:GU,slideToClickedSlide:KU};function YU(t){const e=this,{params:n,slidesEl:r}=e;if(!n.loop||e.virtual&&e.params.virtual.enabled)return;const i=()=>{lr(r,`.${n.slideClass}, swiper-slide`).forEach((h,m)=>{h.setAttribute("data-swiper-slide-index",m)})},s=e.grid&&n.grid&&n.grid.rows>1,o=n.slidesPerGroup*(s?n.grid.rows:1),a=e.slides.length%o!==0,l=s&&e.slides.length%n.grid.rows!==0,c=u=>{for(let h=0;h<u;h+=1){const m=e.isElement?af("swiper-slide",[n.slideBlankClass]):af("div",[n.slideClass,n.slideBlankClass]);e.slidesEl.append(m)}};if(a){if(n.loopAddBlankSlides){const u=o-e.slides.length%o;c(u),e.recalcSlides(),e.updateSlides()}else of("Swiper Loop Warning: The number of slides is not even to slidesPerGroup, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");i()}else if(l){if(n.loopAddBlankSlides){const u=n.grid.rows-e.slides.length%n.grid.rows;c(u),e.recalcSlides(),e.updateSlides()}else of("Swiper Loop Warning: The number of slides is not even to grid.rows, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");i()}else i();e.loopFix({slideRealIndex:t,direction:n.centeredSlides?void 0:"next"})}function XU(t){let{slideRealIndex:e,slideTo:n=!0,direction:r,setTranslate:i,activeSlideIndex:s,byController:o,byMousewheel:a}=t===void 0?{}:t;const l=this;if(!l.params.loop)return;l.emit("beforeLoopFix");const{slides:c,allowSlidePrev:u,allowSlideNext:h,slidesEl:m,params:v}=l,{centeredSlides:x}=v;if(l.allowSlidePrev=!0,l.allowSlideNext=!0,l.virtual&&v.virtual.enabled){n&&(!v.centeredSlides&&l.snapIndex===0?l.slideTo(l.virtual.slides.length,0,!1,!0):v.centeredSlides&&l.snapIndex<v.slidesPerView?l.slideTo(l.virtual.slides.length+l.snapIndex,0,!1,!0):l.snapIndex===l.snapGrid.length-1&&l.slideTo(l.virtual.slidesBefore,0,!1,!0)),l.allowSlidePrev=u,l.allowSlideNext=h,l.emit("loopFix");return}let g=v.slidesPerView;g==="auto"?g=l.slidesPerViewDynamic():(g=Math.ceil(parseFloat(v.slidesPerView,10)),x&&g%2===0&&(g=g+1));const S=v.slidesPerGroupAuto?g:v.slidesPerGroup;let w=S;w%S!==0&&(w+=S-w%S),w+=v.loopAdditionalSlides,l.loopedSlides=w;const p=l.grid&&v.grid&&v.grid.rows>1;c.length<g+w?of("Swiper Loop Warning: The number of slides is not enough for loop mode, it will be disabled and not function properly. You need to add more slides (or make duplicates) or lower the values of slidesPerView and slidesPerGroup parameters"):p&&v.grid.fill==="row"&&of("Swiper Loop Warning: Loop mode is not compatible with grid.fill = `row`");const y=[],E=[];let C=l.activeIndex;typeof s>"u"?s=l.getSlideIndex(c.filter(F=>F.classList.contains(v.slideActiveClass))[0]):C=s;const I=r==="next"||!r,P=r==="prev"||!r;let R=0,N=0;const O=p?Math.ceil(c.length/v.grid.rows):c.length,W=(p?c[s].column:s)+(x&&typeof i>"u"?-g/2+.5:0);if(W<w){R=Math.max(w-W,S);for(let F=0;F<w-W;F+=1){const M=F-Math.floor(F/O)*O;if(p){const V=O-M-1;for(let q=c.length-1;q>=0;q-=1)c[q].column===V&&y.push(q)}else y.push(O-M-1)}}else if(W+g>O-w){N=Math.max(W-(O-w*2),S);for(let F=0;F<N;F+=1){const M=F-Math.floor(F/O)*O;p?c.forEach((V,q)=>{V.column===M&&E.push(q)}):E.push(M)}}if(l.__preventObserver__=!0,requestAnimationFrame(()=>{l.__preventObserver__=!1}),P&&y.forEach(F=>{c[F].swiperLoopMoveDOM=!0,m.prepend(c[F]),c[F].swiperLoopMoveDOM=!1}),I&&E.forEach(F=>{c[F].swiperLoopMoveDOM=!0,m.append(c[F]),c[F].swiperLoopMoveDOM=!1}),l.recalcSlides(),v.slidesPerView==="auto"?l.updateSlides():p&&(y.length>0&&P||E.length>0&&I)&&l.slides.forEach((F,M)=>{l.grid.updateSlide(M,F,l.slides)}),v.watchSlidesProgress&&l.updateSlidesOffset(),n){if(y.length>0&&P){if(typeof e>"u"){const F=l.slidesGrid[C],V=l.slidesGrid[C+R]-F;a?l.setTranslate(l.translate-V):(l.slideTo(C+R,0,!1,!0),i&&(l.touchEventsData.startTranslate=l.touchEventsData.startTranslate-V,l.touchEventsData.currentTranslate=l.touchEventsData.currentTranslate-V))}else if(i){const F=p?y.length/v.grid.rows:y.length;l.slideTo(l.activeIndex+F,0,!1,!0),l.touchEventsData.currentTranslate=l.translate}}else if(E.length>0&&I)if(typeof e>"u"){const F=l.slidesGrid[C],V=l.slidesGrid[C-N]-F;a?l.setTranslate(l.translate-V):(l.slideTo(C-N,0,!1,!0),i&&(l.touchEventsData.startTranslate=l.touchEventsData.startTranslate-V,l.touchEventsData.currentTranslate=l.touchEventsData.currentTranslate-V))}else{const F=p?E.length/v.grid.rows:E.length;l.slideTo(l.activeIndex-F,0,!1,!0)}}if(l.allowSlidePrev=u,l.allowSlideNext=h,l.controller&&l.controller.control&&!o){const F={slideRealIndex:e,direction:r,setTranslate:i,activeSlideIndex:s,byController:!0};Array.isArray(l.controller.control)?l.controller.control.forEach(M=>{!M.destroyed&&M.params.loop&&M.loopFix({...F,slideTo:M.params.slidesPerView===v.slidesPerView?n:!1})}):l.controller.control instanceof l.constructor&&l.controller.control.params.loop&&l.controller.control.loopFix({...F,slideTo:l.controller.control.params.slidesPerView===v.slidesPerView?n:!1})}l.emit("loopFix")}function JU(){const t=this,{params:e,slidesEl:n}=t;if(!e.loop||t.virtual&&t.params.virtual.enabled)return;t.recalcSlides();const r=[];t.slides.forEach(i=>{const s=typeof i.swiperSlideIndex>"u"?i.getAttribute("data-swiper-slide-index")*1:i.swiperSlideIndex;r[s]=i}),t.slides.forEach(i=>{i.removeAttribute("data-swiper-slide-index")}),r.forEach(i=>{n.append(i)}),t.recalcSlides(),t.slideTo(t.realIndex,0)}var ZU={loopCreate:YU,loopFix:XU,loopDestroy:JU};function ez(t){const e=this;if(!e.params.simulateTouch||e.params.watchOverflow&&e.isLocked||e.params.cssMode)return;const n=e.params.touchEventsTarget==="container"?e.el:e.wrapperEl;e.isElement&&(e.__preventObserver__=!0),n.style.cursor="move",n.style.cursor=t?"grabbing":"grab",e.isElement&&requestAnimationFrame(()=>{e.__preventObserver__=!1})}function tz(){const t=this;t.params.watchOverflow&&t.isLocked||t.params.cssMode||(t.isElement&&(t.__preventObserver__=!0),t[t.params.touchEventsTarget==="container"?"el":"wrapperEl"].style.cursor="",t.isElement&&requestAnimationFrame(()=>{t.__preventObserver__=!1}))}var nz={setGrabCursor:ez,unsetGrabCursor:tz};function rz(t,e){e===void 0&&(e=this);function n(r){if(!r||r===Ea()||r===_n())return null;r.assignedSlot&&(r=r.assignedSlot);const i=r.closest(t);return!i&&!r.getRootNode?null:i||n(r.getRootNode().host)}return n(e)}function fE(t,e,n){const r=_n(),{params:i}=t,s=i.edgeSwipeDetection,o=i.edgeSwipeThreshold;return s&&(n<=o||n>=r.innerWidth-o)?s==="prevent"?(e.preventDefault(),!0):!1:!0}function iz(t){const e=this,n=Ea();let r=t;r.originalEvent&&(r=r.originalEvent);const i=e.touchEventsData;if(r.type==="pointerdown"){if(i.pointerId!==null&&i.pointerId!==r.pointerId)return;i.pointerId=r.pointerId}else r.type==="touchstart"&&r.targetTouches.length===1&&(i.touchId=r.targetTouches[0].identifier);if(r.type==="touchstart"){fE(e,r,r.targetTouches[0].pageX);return}const{params:s,touches:o,enabled:a}=e;if(!a||!s.simulateTouch&&r.pointerType==="mouse"||e.animating&&s.preventInteractionOnTransition)return;!e.animating&&s.cssMode&&s.loop&&e.loopFix();let l=r.target;if(s.touchEventsTarget==="wrapper"&&!e.wrapperEl.contains(l)||"which"in r&&r.which===3||"button"in r&&r.button>0||i.isTouched&&i.isMoved)return;const c=!!s.noSwipingClass&&s.noSwipingClass!=="",u=r.composedPath?r.composedPath():r.path;c&&r.target&&r.target.shadowRoot&&u&&(l=u[0]);const h=s.noSwipingSelector?s.noSwipingSelector:`.${s.noSwipingClass}`,m=!!(r.target&&r.target.shadowRoot);if(s.noSwiping&&(m?rz(h,l):l.closest(h))){e.allowClick=!0;return}if(s.swipeHandler&&!l.closest(s.swipeHandler))return;o.currentX=r.pageX,o.currentY=r.pageY;const v=o.currentX,x=o.currentY;if(!fE(e,r,v))return;Object.assign(i,{isTouched:!0,isMoved:!1,allowTouchCallbacks:!0,isScrolling:void 0,startMoving:void 0}),o.startX=v,o.startY=x,i.touchStartTime=sf(),e.allowClick=!0,e.updateSize(),e.swipeDirection=void 0,s.threshold>0&&(i.allowThresholdMove=!1);let g=!0;l.matches(i.focusableElements)&&(g=!1,l.nodeName==="SELECT"&&(i.isTouched=!1)),n.activeElement&&n.activeElement.matches(i.focusableElements)&&n.activeElement!==l&&n.activeElement.blur();const S=g&&e.allowTouchMove&&s.touchStartPreventDefault;(s.touchStartForcePreventDefault||S)&&!l.isContentEditable&&r.preventDefault(),s.freeMode&&s.freeMode.enabled&&e.freeMode&&e.animating&&!s.cssMode&&e.freeMode.onTouchStart(),e.emit("touchStart",r)}function sz(t){const e=Ea(),n=this,r=n.touchEventsData,{params:i,touches:s,rtlTranslate:o,enabled:a}=n;if(!a||!i.simulateTouch&&t.pointerType==="mouse")return;let l=t;if(l.originalEvent&&(l=l.originalEvent),l.type==="pointermove"&&(r.touchId!==null||l.pointerId!==r.pointerId))return;let c;if(l.type==="touchmove"){if(c=[...l.changedTouches].filter(I=>I.identifier===r.touchId)[0],!c||c.identifier!==r.touchId)return}else c=l;if(!r.isTouched){r.startMoving&&r.isScrolling&&n.emit("touchMoveOpposite",l);return}const u=c.pageX,h=c.pageY;if(l.preventedByNestedSwiper){s.startX=u,s.startY=h;return}if(!n.allowTouchMove){l.target.matches(r.focusableElements)||(n.allowClick=!1),r.isTouched&&(Object.assign(s,{startX:u,startY:h,currentX:u,currentY:h}),r.touchStartTime=sf());return}if(i.touchReleaseOnEdges&&!i.loop){if(n.isVertical()){if(h<s.startY&&n.translate<=n.maxTranslate()||h>s.startY&&n.translate>=n.minTranslate()){r.isTouched=!1,r.isMoved=!1;return}}else if(u<s.startX&&n.translate<=n.maxTranslate()||u>s.startX&&n.translate>=n.minTranslate())return}if(e.activeElement&&l.target===e.activeElement&&l.target.matches(r.focusableElements)){r.isMoved=!0,n.allowClick=!1;return}r.allowTouchCallbacks&&n.emit("touchMove",l),s.previousX=s.currentX,s.previousY=s.currentY,s.currentX=u,s.currentY=h;const m=s.currentX-s.startX,v=s.currentY-s.startY;if(n.params.threshold&&Math.sqrt(m**2+v**2)<n.params.threshold)return;if(typeof r.isScrolling>"u"){let I;n.isHorizontal()&&s.currentY===s.startY||n.isVertical()&&s.currentX===s.startX?r.isScrolling=!1:m*m+v*v>=25&&(I=Math.atan2(Math.abs(v),Math.abs(m))*180/Math.PI,r.isScrolling=n.isHorizontal()?I>i.touchAngle:90-I>i.touchAngle)}if(r.isScrolling&&n.emit("touchMoveOpposite",l),typeof r.startMoving>"u"&&(s.currentX!==s.startX||s.currentY!==s.startY)&&(r.startMoving=!0),r.isScrolling){r.isTouched=!1;return}if(!r.startMoving)return;n.allowClick=!1,!i.cssMode&&l.cancelable&&l.preventDefault(),i.touchMoveStopPropagation&&!i.nested&&l.stopPropagation();let x=n.isHorizontal()?m:v,g=n.isHorizontal()?s.currentX-s.previousX:s.currentY-s.previousY;i.oneWayMovement&&(x=Math.abs(x)*(o?1:-1),g=Math.abs(g)*(o?1:-1)),s.diff=x,x*=i.touchRatio,o&&(x=-x,g=-g);const S=n.touchesDirection;n.swipeDirection=x>0?"prev":"next",n.touchesDirection=g>0?"prev":"next";const w=n.params.loop&&!i.cssMode,p=n.touchesDirection==="next"&&n.allowSlideNext||n.touchesDirection==="prev"&&n.allowSlidePrev;if(!r.isMoved){if(w&&p&&n.loopFix({direction:n.swipeDirection}),r.startTranslate=n.getTranslate(),n.setTransition(0),n.animating){const I=new window.CustomEvent("transitionend",{bubbles:!0,cancelable:!0});n.wrapperEl.dispatchEvent(I)}r.allowMomentumBounce=!1,i.grabCursor&&(n.allowSlideNext===!0||n.allowSlidePrev===!0)&&n.setGrabCursor(!0),n.emit("sliderFirstMove",l)}let y;if(new Date().getTime(),r.isMoved&&r.allowThresholdMove&&S!==n.touchesDirection&&w&&p&&Math.abs(x)>=1){Object.assign(s,{startX:u,startY:h,currentX:u,currentY:h,startTranslate:r.currentTranslate}),r.loopSwapReset=!0,r.startTranslate=r.currentTranslate;return}n.emit("sliderMove",l),r.isMoved=!0,r.currentTranslate=x+r.startTranslate;let E=!0,C=i.resistanceRatio;if(i.touchReleaseOnEdges&&(C=0),x>0?(w&&p&&!y&&r.allowThresholdMove&&r.currentTranslate>(i.centeredSlides?n.minTranslate()-n.slidesSizesGrid[n.activeIndex+1]:n.minTranslate())&&n.loopFix({direction:"prev",setTranslate:!0,activeSlideIndex:0}),r.currentTranslate>n.minTranslate()&&(E=!1,i.resistance&&(r.currentTranslate=n.minTranslate()-1+(-n.minTranslate()+r.startTranslate+x)**C))):x<0&&(w&&p&&!y&&r.allowThresholdMove&&r.currentTranslate<(i.centeredSlides?n.maxTranslate()+n.slidesSizesGrid[n.slidesSizesGrid.length-1]:n.maxTranslate())&&n.loopFix({direction:"next",setTranslate:!0,activeSlideIndex:n.slides.length-(i.slidesPerView==="auto"?n.slidesPerViewDynamic():Math.ceil(parseFloat(i.slidesPerView,10)))}),r.currentTranslate<n.maxTranslate()&&(E=!1,i.resistance&&(r.currentTranslate=n.maxTranslate()+1-(n.maxTranslate()-r.startTranslate-x)**C))),E&&(l.preventedByNestedSwiper=!0),!n.allowSlideNext&&n.swipeDirection==="next"&&r.currentTranslate<r.startTranslate&&(r.currentTranslate=r.startTranslate),!n.allowSlidePrev&&n.swipeDirection==="prev"&&r.currentTranslate>r.startTranslate&&(r.currentTranslate=r.startTranslate),!n.allowSlidePrev&&!n.allowSlideNext&&(r.currentTranslate=r.startTranslate),i.threshold>0)if(Math.abs(x)>i.threshold||r.allowThresholdMove){if(!r.allowThresholdMove){r.allowThresholdMove=!0,s.startX=s.currentX,s.startY=s.currentY,r.currentTranslate=r.startTranslate,s.diff=n.isHorizontal()?s.currentX-s.startX:s.currentY-s.startY;return}}else{r.currentTranslate=r.startTranslate;return}!i.followFinger||i.cssMode||((i.freeMode&&i.freeMode.enabled&&n.freeMode||i.watchSlidesProgress)&&(n.updateActiveIndex(),n.updateSlidesClasses()),i.freeMode&&i.freeMode.enabled&&n.freeMode&&n.freeMode.onTouchMove(),n.updateProgress(r.currentTranslate),n.setTranslate(r.currentTranslate))}function oz(t){const e=this,n=e.touchEventsData;let r=t;r.originalEvent&&(r=r.originalEvent);let i;if(r.type==="touchend"||r.type==="touchcancel"){if(i=[...r.changedTouches].filter(E=>E.identifier===n.touchId)[0],!i||i.identifier!==n.touchId)return}else{if(n.touchId!==null||r.pointerId!==n.pointerId)return;i=r}if(["pointercancel","pointerout","pointerleave","contextmenu"].includes(r.type)&&!(["pointercancel","contextmenu"].includes(r.type)&&(e.browser.isSafari||e.browser.isWebView)))return;n.pointerId=null,n.touchId=null;const{params:o,touches:a,rtlTranslate:l,slidesGrid:c,enabled:u}=e;if(!u||!o.simulateTouch&&r.pointerType==="mouse")return;if(n.allowTouchCallbacks&&e.emit("touchEnd",r),n.allowTouchCallbacks=!1,!n.isTouched){n.isMoved&&o.grabCursor&&e.setGrabCursor(!1),n.isMoved=!1,n.startMoving=!1;return}o.grabCursor&&n.isMoved&&n.isTouched&&(e.allowSlideNext===!0||e.allowSlidePrev===!0)&&e.setGrabCursor(!1);const h=sf(),m=h-n.touchStartTime;if(e.allowClick){const E=r.path||r.composedPath&&r.composedPath();e.updateClickedSlide(E&&E[0]||r.target,E),e.emit("tap click",r),m<300&&h-n.lastClickTime<300&&e.emit("doubleTap doubleClick",r)}if(n.lastClickTime=sf(),Cg(()=>{e.destroyed||(e.allowClick=!0)}),!n.isTouched||!n.isMoved||!e.swipeDirection||a.diff===0&&!n.loopSwapReset||n.currentTranslate===n.startTranslate&&!n.loopSwapReset){n.isTouched=!1,n.isMoved=!1,n.startMoving=!1;return}n.isTouched=!1,n.isMoved=!1,n.startMoving=!1;let v;if(o.followFinger?v=l?e.translate:-e.translate:v=-n.currentTranslate,o.cssMode)return;if(o.freeMode&&o.freeMode.enabled){e.freeMode.onTouchEnd({currentPos:v});return}let x=0,g=e.slidesSizesGrid[0];for(let E=0;E<c.length;E+=E<o.slidesPerGroupSkip?1:o.slidesPerGroup){const C=E<o.slidesPerGroupSkip-1?1:o.slidesPerGroup;typeof c[E+C]<"u"?v>=c[E]&&v<c[E+C]&&(x=E,g=c[E+C]-c[E]):v>=c[E]&&(x=E,g=c[c.length-1]-c[c.length-2])}let S=null,w=null;o.rewind&&(e.isBeginning?w=o.virtual&&o.virtual.enabled&&e.virtual?e.virtual.slides.length-1:e.slides.length-1:e.isEnd&&(S=0));const p=(v-c[x])/g,y=x<o.slidesPerGroupSkip-1?1:o.slidesPerGroup;if(m>o.longSwipesMs){if(!o.longSwipes){e.slideTo(e.activeIndex);return}e.swipeDirection==="next"&&(p>=o.longSwipesRatio?e.slideTo(o.rewind&&e.isEnd?S:x+y):e.slideTo(x)),e.swipeDirection==="prev"&&(p>1-o.longSwipesRatio?e.slideTo(x+y):w!==null&&p<0&&Math.abs(p)>o.longSwipesRatio?e.slideTo(w):e.slideTo(x))}else{if(!o.shortSwipes){e.slideTo(e.activeIndex);return}e.navigation&&(r.target===e.navigation.nextEl||r.target===e.navigation.prevEl)?r.target===e.navigation.nextEl?e.slideTo(x+y):e.slideTo(x):(e.swipeDirection==="next"&&e.slideTo(S!==null?S:x+y),e.swipeDirection==="prev"&&e.slideTo(w!==null?w:x))}}function hE(){const t=this,{params:e,el:n}=t;if(n&&n.offsetWidth===0)return;e.breakpoints&&t.setBreakpoint();const{allowSlideNext:r,allowSlidePrev:i,snapGrid:s}=t,o=t.virtual&&t.params.virtual.enabled;t.allowSlideNext=!0,t.allowSlidePrev=!0,t.updateSize(),t.updateSlides(),t.updateSlidesClasses();const a=o&&e.loop;(e.slidesPerView==="auto"||e.slidesPerView>1)&&t.isEnd&&!t.isBeginning&&!t.params.centeredSlides&&!a?t.slideTo(t.slides.length-1,0,!1,!0):t.params.loop&&!o?t.slideToLoop(t.realIndex,0,!1,!0):t.slideTo(t.activeIndex,0,!1,!0),t.autoplay&&t.autoplay.running&&t.autoplay.paused&&(clearTimeout(t.autoplay.resizeTimeout),t.autoplay.resizeTimeout=setTimeout(()=>{t.autoplay&&t.autoplay.running&&t.autoplay.paused&&t.autoplay.resume()},500)),t.allowSlidePrev=i,t.allowSlideNext=r,t.params.watchOverflow&&s!==t.snapGrid&&t.checkOverflow()}function az(t){const e=this;e.enabled&&(e.allowClick||(e.params.preventClicks&&t.preventDefault(),e.params.preventClicksPropagation&&e.animating&&(t.stopPropagation(),t.stopImmediatePropagation())))}function lz(){const t=this,{wrapperEl:e,rtlTranslate:n,enabled:r}=t;if(!r)return;t.previousTranslate=t.translate,t.isHorizontal()?t.translate=-e.scrollLeft:t.translate=-e.scrollTop,t.translate===0&&(t.translate=0),t.updateActiveIndex(),t.updateSlidesClasses();let i;const s=t.maxTranslate()-t.minTranslate();s===0?i=0:i=(t.translate-t.minTranslate())/s,i!==t.progress&&t.updateProgress(n?-t.translate:t.translate),t.emit("setTranslate",t.translate,!1)}function cz(t){const e=this;rd(e,t.target),!(e.params.cssMode||e.params.slidesPerView!=="auto"&&!e.params.autoHeight)&&e.update()}function uz(){const t=this;t.documentTouchHandlerProceeded||(t.documentTouchHandlerProceeded=!0,t.params.touchReleaseOnEdges&&(t.el.style.touchAction="auto"))}const C2=(t,e)=>{const n=Ea(),{params:r,el:i,wrapperEl:s,device:o}=t,a=!!r.nested,l=e==="on"?"addEventListener":"removeEventListener",c=e;n[l]("touchstart",t.onDocumentTouchStart,{passive:!1,capture:a}),i[l]("touchstart",t.onTouchStart,{passive:!1}),i[l]("pointerdown",t.onTouchStart,{passive:!1}),n[l]("touchmove",t.onTouchMove,{passive:!1,capture:a}),n[l]("pointermove",t.onTouchMove,{passive:!1,capture:a}),n[l]("touchend",t.onTouchEnd,{passive:!0}),n[l]("pointerup",t.onTouchEnd,{passive:!0}),n[l]("pointercancel",t.onTouchEnd,{passive:!0}),n[l]("touchcancel",t.onTouchEnd,{passive:!0}),n[l]("pointerout",t.onTouchEnd,{passive:!0}),n[l]("pointerleave",t.onTouchEnd,{passive:!0}),n[l]("contextmenu",t.onTouchEnd,{passive:!0}),(r.preventClicks||r.preventClicksPropagation)&&i[l]("click",t.onClick,!0),r.cssMode&&s[l]("scroll",t.onScroll),r.updateOnWindowResize?t[c](o.ios||o.android?"resize orientationchange observerUpdate":"resize observerUpdate",hE,!0):t[c]("observerUpdate",hE,!0),i[l]("load",t.onLoad,{capture:!0})};function dz(){const t=this,{params:e}=t;t.onTouchStart=iz.bind(t),t.onTouchMove=sz.bind(t),t.onTouchEnd=oz.bind(t),t.onDocumentTouchStart=uz.bind(t),e.cssMode&&(t.onScroll=lz.bind(t)),t.onClick=az.bind(t),t.onLoad=cz.bind(t),C2(t,"on")}function fz(){C2(this,"off")}var hz={attachEvents:dz,detachEvents:fz};const pE=(t,e)=>t.grid&&e.grid&&e.grid.rows>1;function pz(){const t=this,{realIndex:e,initialized:n,params:r,el:i}=t,s=r.breakpoints;if(!s||s&&Object.keys(s).length===0)return;const o=t.getBreakpoint(s,t.params.breakpointsBase,t.el);if(!o||t.currentBreakpoint===o)return;const l=(o in s?s[o]:void 0)||t.originalParams,c=pE(t,r),u=pE(t,l),h=r.enabled;c&&!u?(i.classList.remove(`${r.containerModifierClass}grid`,`${r.containerModifierClass}grid-column`),t.emitContainerClasses()):!c&&u&&(i.classList.add(`${r.containerModifierClass}grid`),(l.grid.fill&&l.grid.fill==="column"||!l.grid.fill&&r.grid.fill==="column")&&i.classList.add(`${r.containerModifierClass}grid-column`),t.emitContainerClasses()),["navigation","pagination","scrollbar"].forEach(w=>{if(typeof l[w]>"u")return;const p=r[w]&&r[w].enabled,y=l[w]&&l[w].enabled;p&&!y&&t[w].disable(),!p&&y&&t[w].enable()});const m=l.direction&&l.direction!==r.direction,v=r.loop&&(l.slidesPerView!==r.slidesPerView||m),x=r.loop;m&&n&&t.changeDirection(),fn(t.params,l);const g=t.params.enabled,S=t.params.loop;Object.assign(t,{allowTouchMove:t.params.allowTouchMove,allowSlideNext:t.params.allowSlideNext,allowSlidePrev:t.params.allowSlidePrev}),h&&!g?t.disable():!h&&g&&t.enable(),t.currentBreakpoint=o,t.emit("_beforeBreakpoint",l),n&&(v?(t.loopDestroy(),t.loopCreate(e),t.updateSlides()):!x&&S?(t.loopCreate(e),t.updateSlides()):x&&!S&&t.loopDestroy()),t.emit("breakpoint",l)}function mz(t,e,n){if(e===void 0&&(e="window"),!t||e==="container"&&!n)return;let r=!1;const i=_n(),s=e==="window"?i.innerHeight:n.clientHeight,o=Object.keys(t).map(a=>{if(typeof a=="string"&&a.indexOf("@")===0){const l=parseFloat(a.substr(1));return{value:s*l,point:a}}return{value:a,point:a}});o.sort((a,l)=>parseInt(a.value,10)-parseInt(l.value,10));for(let a=0;a<o.length;a+=1){const{point:l,value:c}=o[a];e==="window"?i.matchMedia(`(min-width: ${c}px)`).matches&&(r=l):c<=n.clientWidth&&(r=l)}return r||"max"}var gz={setBreakpoint:pz,getBreakpoint:mz};function yz(t,e){const n=[];return t.forEach(r=>{typeof r=="object"?Object.keys(r).forEach(i=>{r[i]&&n.push(e+i)}):typeof r=="string"&&n.push(e+r)}),n}function vz(){const t=this,{classNames:e,params:n,rtl:r,el:i,device:s}=t,o=yz(["initialized",n.direction,{"free-mode":t.params.freeMode&&n.freeMode.enabled},{autoheight:n.autoHeight},{rtl:r},{grid:n.grid&&n.grid.rows>1},{"grid-column":n.grid&&n.grid.rows>1&&n.grid.fill==="column"},{android:s.android},{ios:s.ios},{"css-mode":n.cssMode},{centered:n.cssMode&&n.centeredSlides},{"watch-progress":n.watchSlidesProgress}],n.containerModifierClass);e.push(...o),i.classList.add(...e),t.emitContainerClasses()}function wz(){const t=this,{el:e,classNames:n}=t;e.classList.remove(...n),t.emitContainerClasses()}var _z={addClasses:vz,removeClasses:wz};function Ez(){const t=this,{isLocked:e,params:n}=t,{slidesOffsetBefore:r}=n;if(r){const i=t.slides.length-1,s=t.slidesGrid[i]+t.slidesSizesGrid[i]+r*2;t.isLocked=t.size>s}else t.isLocked=t.snapGrid.length===1;n.allowSlideNext===!0&&(t.allowSlideNext=!t.isLocked),n.allowSlidePrev===!0&&(t.allowSlidePrev=!t.isLocked),e&&e!==t.isLocked&&(t.isEnd=!1),e!==t.isLocked&&t.emit(t.isLocked?"lock":"unlock")}var Tz={checkOverflow:Ez},Pg={init:!0,direction:"horizontal",oneWayMovement:!1,touchEventsTarget:"wrapper",initialSlide:0,speed:300,cssMode:!1,updateOnWindowResize:!0,resizeObserver:!0,nested:!1,createElements:!1,eventsPrefix:"swiper",enabled:!0,focusableElements:"input, select, option, textarea, button, video, label",width:null,height:null,preventInteractionOnTransition:!1,userAgent:null,url:null,edgeSwipeDetection:!1,edgeSwipeThreshold:20,autoHeight:!1,setWrapperSize:!1,virtualTranslate:!1,effect:"slide",breakpoints:void 0,breakpointsBase:"window",spaceBetween:0,slidesPerView:1,slidesPerGroup:1,slidesPerGroupSkip:0,slidesPerGroupAuto:!1,centeredSlides:!1,centeredSlidesBounds:!1,slidesOffsetBefore:0,slidesOffsetAfter:0,normalizeSlideIndex:!0,centerInsufficientSlides:!1,watchOverflow:!0,roundLengths:!1,touchRatio:1,touchAngle:45,simulateTouch:!0,shortSwipes:!0,longSwipes:!0,longSwipesRatio:.5,longSwipesMs:300,followFinger:!0,allowTouchMove:!0,threshold:5,touchMoveStopPropagation:!1,touchStartPreventDefault:!0,touchStartForcePreventDefault:!1,touchReleaseOnEdges:!1,uniqueNavElements:!0,resistance:!0,resistanceRatio:.85,watchSlidesProgress:!1,grabCursor:!1,preventClicks:!0,preventClicksPropagation:!0,slideToClickedSlide:!1,loop:!1,loopAddBlankSlides:!0,loopAdditionalSlides:0,loopPreventsSliding:!0,rewind:!1,allowSlidePrev:!0,allowSlideNext:!0,swipeHandler:null,noSwiping:!0,noSwipingClass:"swiper-no-swiping",noSwipingSelector:null,passiveListeners:!0,maxBackfaceHiddenSlides:10,containerModifierClass:"swiper-",slideClass:"swiper-slide",slideBlankClass:"swiper-slide-blank",slideActiveClass:"swiper-slide-active",slideVisibleClass:"swiper-slide-visible",slideFullyVisibleClass:"swiper-slide-fully-visible",slideNextClass:"swiper-slide-next",slidePrevClass:"swiper-slide-prev",wrapperClass:"swiper-wrapper",lazyPreloaderClass:"swiper-lazy-preloader",lazyPreloadPrevNext:0,runCallbacksOnInit:!0,_emitClasses:!1};function xz(t,e){return function(r){r===void 0&&(r={});const i=Object.keys(r)[0],s=r[i];if(typeof s!="object"||s===null){fn(e,r);return}if(t[i]===!0&&(t[i]={enabled:!0}),i==="navigation"&&t[i]&&t[i].enabled&&!t[i].prevEl&&!t[i].nextEl&&(t[i].auto=!0),["pagination","scrollbar"].indexOf(i)>=0&&t[i]&&t[i].enabled&&!t[i].el&&(t[i].auto=!0),!(i in t&&"enabled"in s)){fn(e,r);return}typeof t[i]=="object"&&!("enabled"in t[i])&&(t[i].enabled=!0),t[i]||(t[i]={enabled:!1}),fn(e,r)}}const Mp={eventsEmitter:_U,update:RU,translate:VU,transition:BU,slide:QU,loop:ZU,grabCursor:nz,events:hz,breakpoints:gz,checkOverflow:Tz,classes:_z},Vp={};let uw=class br{constructor(){let e,n;for(var r=arguments.length,i=new Array(r),s=0;s<r;s++)i[s]=arguments[s];i.length===1&&i[0].constructor&&Object.prototype.toString.call(i[0]).slice(8,-1)==="Object"?n=i[0]:[e,n]=i,n||(n={}),n=fn({},n),e&&!n.el&&(n.el=e);const o=Ea();if(n.el&&typeof n.el=="string"&&o.querySelectorAll(n.el).length>1){const u=[];return o.querySelectorAll(n.el).forEach(h=>{const m=fn({},n,{el:h});u.push(new br(m))}),u}const a=this;a.__swiper__=!0,a.support=S2(),a.device=mU({userAgent:n.userAgent}),a.browser=yU(),a.eventsListeners={},a.eventsAnyListeners=[],a.modules=[...a.__modules__],n.modules&&Array.isArray(n.modules)&&a.modules.push(...n.modules);const l={};a.modules.forEach(u=>{u({params:n,swiper:a,extendParams:xz(n,l),on:a.on.bind(a),once:a.once.bind(a),off:a.off.bind(a),emit:a.emit.bind(a)})});const c=fn({},Pg,l);return a.params=fn({},c,Vp,n),a.originalParams=fn({},a.params),a.passedParams=fn({},n),a.params&&a.params.on&&Object.keys(a.params.on).forEach(u=>{a.on(u,a.params.on[u])}),a.params&&a.params.onAny&&a.onAny(a.params.onAny),Object.assign(a,{enabled:a.params.enabled,el:e,classNames:[],slides:[],slidesGrid:[],snapGrid:[],slidesSizesGrid:[],isHorizontal(){return a.params.direction==="horizontal"},isVertical(){return a.params.direction==="vertical"},activeIndex:0,realIndex:0,isBeginning:!0,isEnd:!1,translate:0,previousTranslate:0,progress:0,velocity:0,animating:!1,cssOverflowAdjustment(){return Math.trunc(this.translate/2**23)*2**23},allowSlideNext:a.params.allowSlideNext,allowSlidePrev:a.params.allowSlidePrev,touchEventsData:{isTouched:void 0,isMoved:void 0,allowTouchCallbacks:void 0,touchStartTime:void 0,isScrolling:void 0,currentTranslate:void 0,startTranslate:void 0,allowThresholdMove:void 0,focusableElements:a.params.focusableElements,lastClickTime:0,clickTimeout:void 0,velocities:[],allowMomentumBounce:void 0,startMoving:void 0,pointerId:null,touchId:null},allowClick:!0,allowTouchMove:a.params.allowTouchMove,touches:{startX:0,startY:0,currentX:0,currentY:0,diff:0},imagesToLoad:[],imagesLoaded:0}),a.emit("_swiper"),a.params.init&&a.init(),a}getDirectionLabel(e){return this.isHorizontal()?e:{width:"height","margin-top":"margin-left","margin-bottom ":"margin-right","margin-left":"margin-top","margin-right":"margin-bottom","padding-left":"padding-top","padding-right":"padding-bottom",marginRight:"marginBottom"}[e]}getSlideIndex(e){const{slidesEl:n,params:r}=this,i=lr(n,`.${r.slideClass}, swiper-slide`),s=lf(i[0]);return lf(e)-s}getSlideIndexByData(e){return this.getSlideIndex(this.slides.filter(n=>n.getAttribute("data-swiper-slide-index")*1===e)[0])}recalcSlides(){const e=this,{slidesEl:n,params:r}=e;e.slides=lr(n,`.${r.slideClass}, swiper-slide`)}enable(){const e=this;e.enabled||(e.enabled=!0,e.params.grabCursor&&e.setGrabCursor(),e.emit("enable"))}disable(){const e=this;e.enabled&&(e.enabled=!1,e.params.grabCursor&&e.unsetGrabCursor(),e.emit("disable"))}setProgress(e,n){const r=this;e=Math.min(Math.max(e,0),1);const i=r.minTranslate(),o=(r.maxTranslate()-i)*e+i;r.translateTo(o,typeof n>"u"?0:n),r.updateActiveIndex(),r.updateSlidesClasses()}emitContainerClasses(){const e=this;if(!e.params._emitClasses||!e.el)return;const n=e.el.className.split(" ").filter(r=>r.indexOf("swiper")===0||r.indexOf(e.params.containerModifierClass)===0);e.emit("_containerClasses",n.join(" "))}getSlideClasses(e){const n=this;return n.destroyed?"":e.className.split(" ").filter(r=>r.indexOf("swiper-slide")===0||r.indexOf(n.params.slideClass)===0).join(" ")}emitSlidesClasses(){const e=this;if(!e.params._emitClasses||!e.el)return;const n=[];e.slides.forEach(r=>{const i=e.getSlideClasses(r);n.push({slideEl:r,classNames:i}),e.emit("_slideClass",r,i)}),e.emit("_slideClasses",n)}slidesPerViewDynamic(e,n){e===void 0&&(e="current"),n===void 0&&(n=!1);const r=this,{params:i,slides:s,slidesGrid:o,slidesSizesGrid:a,size:l,activeIndex:c}=r;let u=1;if(typeof i.slidesPerView=="number")return i.slidesPerView;if(i.centeredSlides){let h=s[c]?s[c].swiperSlideSize:0,m;for(let v=c+1;v<s.length;v+=1)s[v]&&!m&&(h+=s[v].swiperSlideSize,u+=1,h>l&&(m=!0));for(let v=c-1;v>=0;v-=1)s[v]&&!m&&(h+=s[v].swiperSlideSize,u+=1,h>l&&(m=!0))}else if(e==="current")for(let h=c+1;h<s.length;h+=1)(n?o[h]+a[h]-o[c]<l:o[h]-o[c]<l)&&(u+=1);else for(let h=c-1;h>=0;h-=1)o[c]-o[h]<l&&(u+=1);return u}update(){const e=this;if(!e||e.destroyed)return;const{snapGrid:n,params:r}=e;r.breakpoints&&e.setBreakpoint(),[...e.el.querySelectorAll('[loading="lazy"]')].forEach(o=>{o.complete&&rd(e,o)}),e.updateSize(),e.updateSlides(),e.updateProgress(),e.updateSlidesClasses();function i(){const o=e.rtlTranslate?e.translate*-1:e.translate,a=Math.min(Math.max(o,e.maxTranslate()),e.minTranslate());e.setTranslate(a),e.updateActiveIndex(),e.updateSlidesClasses()}let s;if(r.freeMode&&r.freeMode.enabled&&!r.cssMode)i(),r.autoHeight&&e.updateAutoHeight();else{if((r.slidesPerView==="auto"||r.slidesPerView>1)&&e.isEnd&&!r.centeredSlides){const o=e.virtual&&r.virtual.enabled?e.virtual.slides:e.slides;s=e.slideTo(o.length-1,0,!1,!0)}else s=e.slideTo(e.activeIndex,0,!1,!0);s||i()}r.watchOverflow&&n!==e.snapGrid&&e.checkOverflow(),e.emit("update")}changeDirection(e,n){n===void 0&&(n=!0);const r=this,i=r.params.direction;return e||(e=i==="horizontal"?"vertical":"horizontal"),e===i||e!=="horizontal"&&e!=="vertical"||(r.el.classList.remove(`${r.params.containerModifierClass}${i}`),r.el.classList.add(`${r.params.containerModifierClass}${e}`),r.emitContainerClasses(),r.params.direction=e,r.slides.forEach(s=>{e==="vertical"?s.style.width="":s.style.height=""}),r.emit("changeDirection"),n&&r.update()),r}changeLanguageDirection(e){const n=this;n.rtl&&e==="rtl"||!n.rtl&&e==="ltr"||(n.rtl=e==="rtl",n.rtlTranslate=n.params.direction==="horizontal"&&n.rtl,n.rtl?(n.el.classList.add(`${n.params.containerModifierClass}rtl`),n.el.dir="rtl"):(n.el.classList.remove(`${n.params.containerModifierClass}rtl`),n.el.dir="ltr"),n.update())}mount(e){const n=this;if(n.mounted)return!0;let r=e||n.params.el;if(typeof r=="string"&&(r=document.querySelector(r)),!r)return!1;r.swiper=n,r.parentNode&&r.parentNode.host&&r.parentNode.host.nodeName==="SWIPER-CONTAINER"&&(n.isElement=!0);const i=()=>`.${(n.params.wrapperClass||"").trim().split(" ").join(".")}`;let o=(()=>r&&r.shadowRoot&&r.shadowRoot.querySelector?r.shadowRoot.querySelector(i()):lr(r,i())[0])();return!o&&n.params.createElements&&(o=af("div",n.params.wrapperClass),r.append(o),lr(r,`.${n.params.slideClass}`).forEach(a=>{o.append(a)})),Object.assign(n,{el:r,wrapperEl:o,slidesEl:n.isElement&&!r.parentNode.host.slideSlots?r.parentNode.host:o,hostEl:n.isElement?r.parentNode.host:r,mounted:!0,rtl:r.dir.toLowerCase()==="rtl"||di(r,"direction")==="rtl",rtlTranslate:n.params.direction==="horizontal"&&(r.dir.toLowerCase()==="rtl"||di(r,"direction")==="rtl"),wrongRTL:di(o,"display")==="-webkit-box"}),!0}init(e){const n=this;if(n.initialized||n.mount(e)===!1)return n;n.emit("beforeInit"),n.params.breakpoints&&n.setBreakpoint(),n.addClasses(),n.updateSize(),n.updateSlides(),n.params.watchOverflow&&n.checkOverflow(),n.params.grabCursor&&n.enabled&&n.setGrabCursor(),n.params.loop&&n.virtual&&n.params.virtual.enabled?n.slideTo(n.params.initialSlide+n.virtual.slidesBefore,0,n.params.runCallbacksOnInit,!1,!0):n.slideTo(n.params.initialSlide,0,n.params.runCallbacksOnInit,!1,!0),n.params.loop&&n.loopCreate(),n.attachEvents();const i=[...n.el.querySelectorAll('[loading="lazy"]')];return n.isElement&&i.push(...n.hostEl.querySelectorAll('[loading="lazy"]')),i.forEach(s=>{s.complete?rd(n,s):s.addEventListener("load",o=>{rd(n,o.target)})}),Ag(n),n.initialized=!0,Ag(n),n.emit("init"),n.emit("afterInit"),n}destroy(e,n){e===void 0&&(e=!0),n===void 0&&(n=!0);const r=this,{params:i,el:s,wrapperEl:o,slides:a}=r;return typeof r.params>"u"||r.destroyed||(r.emit("beforeDestroy"),r.initialized=!1,r.detachEvents(),i.loop&&r.loopDestroy(),n&&(r.removeClasses(),s.removeAttribute("style"),o.removeAttribute("style"),a&&a.length&&a.forEach(l=>{l.classList.remove(i.slideVisibleClass,i.slideFullyVisibleClass,i.slideActiveClass,i.slideNextClass,i.slidePrevClass),l.removeAttribute("style"),l.removeAttribute("data-swiper-slide-index")})),r.emit("destroy"),Object.keys(r.eventsListeners).forEach(l=>{r.off(l)}),e!==!1&&(r.el.swiper=null,aU(r)),r.destroyed=!0),null}static extendDefaults(e){fn(Vp,e)}static get extendedDefaults(){return Vp}static get defaults(){return Pg}static installModule(e){br.prototype.__modules__||(br.prototype.__modules__=[]);const n=br.prototype.__modules__;typeof e=="function"&&n.indexOf(e)<0&&n.push(e)}static use(e){return Array.isArray(e)?(e.forEach(n=>br.installModule(n)),br):(br.installModule(e),br)}};Object.keys(Mp).forEach(t=>{Object.keys(Mp[t]).forEach(e=>{uw.prototype[e]=Mp[t][e]})});uw.use([vU,wU]);const I2=["eventsPrefix","injectStyles","injectStylesUrls","modules","init","_direction","oneWayMovement","touchEventsTarget","initialSlide","_speed","cssMode","updateOnWindowResize","resizeObserver","nested","focusableElements","_enabled","_width","_height","preventInteractionOnTransition","userAgent","url","_edgeSwipeDetection","_edgeSwipeThreshold","_freeMode","_autoHeight","setWrapperSize","virtualTranslate","_effect","breakpoints","breakpointsBase","_spaceBetween","_slidesPerView","maxBackfaceHiddenSlides","_grid","_slidesPerGroup","_slidesPerGroupSkip","_slidesPerGroupAuto","_centeredSlides","_centeredSlidesBounds","_slidesOffsetBefore","_slidesOffsetAfter","normalizeSlideIndex","_centerInsufficientSlides","_watchOverflow","roundLengths","touchRatio","touchAngle","simulateTouch","_shortSwipes","_longSwipes","longSwipesRatio","longSwipesMs","_followFinger","allowTouchMove","_threshold","touchMoveStopPropagation","touchStartPreventDefault","touchStartForcePreventDefault","touchReleaseOnEdges","uniqueNavElements","_resistance","_resistanceRatio","_watchSlidesProgress","_grabCursor","preventClicks","preventClicksPropagation","_slideToClickedSlide","_loop","loopAdditionalSlides","loopAddBlankSlides","loopPreventsSliding","_rewind","_allowSlidePrev","_allowSlideNext","_swipeHandler","_noSwiping","noSwipingClass","noSwipingSelector","passiveListeners","containerModifierClass","slideClass","slideActiveClass","slideVisibleClass","slideFullyVisibleClass","slideNextClass","slidePrevClass","slideBlankClass","wrapperClass","lazyPreloaderClass","lazyPreloadPrevNext","runCallbacksOnInit","observer","observeParents","observeSlideChildren","a11y","_autoplay","_controller","coverflowEffect","cubeEffect","fadeEffect","flipEffect","creativeEffect","cardsEffect","hashNavigation","history","keyboard","mousewheel","_navigation","_pagination","parallax","_scrollbar","_thumbs","virtual","zoom","control"];function Ps(t){return typeof t=="object"&&t!==null&&t.constructor&&Object.prototype.toString.call(t).slice(8,-1)==="Object"&&!t.__swiper__}function Do(t,e){const n=["__proto__","constructor","prototype"];Object.keys(e).filter(r=>n.indexOf(r)<0).forEach(r=>{typeof t[r]>"u"?t[r]=e[r]:Ps(e[r])&&Ps(t[r])&&Object.keys(e[r]).length>0?e[r].__swiper__?t[r]=e[r]:Do(t[r],e[r]):t[r]=e[r]})}function A2(t){return t===void 0&&(t={}),t.navigation&&typeof t.navigation.nextEl>"u"&&typeof t.navigation.prevEl>"u"}function P2(t){return t===void 0&&(t={}),t.pagination&&typeof t.pagination.el>"u"}function k2(t){return t===void 0&&(t={}),t.scrollbar&&typeof t.scrollbar.el>"u"}function R2(t){t===void 0&&(t="");const e=t.split(" ").map(r=>r.trim()).filter(r=>!!r),n=[];return e.forEach(r=>{n.indexOf(r)<0&&n.push(r)}),n.join(" ")}function Sz(t){return t===void 0&&(t=""),t?t.includes("swiper-wrapper")?t:`swiper-wrapper ${t}`:"swiper-wrapper"}function bz(t){let{swiper:e,slides:n,passedParams:r,changedParams:i,nextEl:s,prevEl:o,scrollbarEl:a,paginationEl:l}=t;const c=i.filter(N=>N!=="children"&&N!=="direction"&&N!=="wrapperClass"),{params:u,pagination:h,navigation:m,scrollbar:v,virtual:x,thumbs:g}=e;let S,w,p,y,E,C,I,P;i.includes("thumbs")&&r.thumbs&&r.thumbs.swiper&&u.thumbs&&!u.thumbs.swiper&&(S=!0),i.includes("controller")&&r.controller&&r.controller.control&&u.controller&&!u.controller.control&&(w=!0),i.includes("pagination")&&r.pagination&&(r.pagination.el||l)&&(u.pagination||u.pagination===!1)&&h&&!h.el&&(p=!0),i.includes("scrollbar")&&r.scrollbar&&(r.scrollbar.el||a)&&(u.scrollbar||u.scrollbar===!1)&&v&&!v.el&&(y=!0),i.includes("navigation")&&r.navigation&&(r.navigation.prevEl||o)&&(r.navigation.nextEl||s)&&(u.navigation||u.navigation===!1)&&m&&!m.prevEl&&!m.nextEl&&(E=!0);const R=N=>{e[N]&&(e[N].destroy(),N==="navigation"?(e.isElement&&(e[N].prevEl.remove(),e[N].nextEl.remove()),u[N].prevEl=void 0,u[N].nextEl=void 0,e[N].prevEl=void 0,e[N].nextEl=void 0):(e.isElement&&e[N].el.remove(),u[N].el=void 0,e[N].el=void 0))};i.includes("loop")&&e.isElement&&(u.loop&&!r.loop?C=!0:!u.loop&&r.loop?I=!0:P=!0),c.forEach(N=>{if(Ps(u[N])&&Ps(r[N]))Object.assign(u[N],r[N]),(N==="navigation"||N==="pagination"||N==="scrollbar")&&"enabled"in r[N]&&!r[N].enabled&&R(N);else{const O=r[N];(O===!0||O===!1)&&(N==="navigation"||N==="pagination"||N==="scrollbar")?O===!1&&R(N):u[N]=r[N]}}),c.includes("controller")&&!w&&e.controller&&e.controller.control&&u.controller&&u.controller.control&&(e.controller.control=u.controller.control),i.includes("children")&&n&&x&&u.virtual.enabled?(x.slides=n,x.update(!0)):i.includes("virtual")&&x&&u.virtual.enabled&&(n&&(x.slides=n),x.update(!0)),i.includes("children")&&n&&u.loop&&(P=!0),S&&g.init()&&g.update(!0),w&&(e.controller.control=u.controller.control),p&&(e.isElement&&(!l||typeof l=="string")&&(l=document.createElement("div"),l.classList.add("swiper-pagination"),l.part.add("pagination"),e.el.appendChild(l)),l&&(u.pagination.el=l),h.init(),h.render(),h.update()),y&&(e.isElement&&(!a||typeof a=="string")&&(a=document.createElement("div"),a.classList.add("swiper-scrollbar"),a.part.add("scrollbar"),e.el.appendChild(a)),a&&(u.scrollbar.el=a),v.init(),v.updateSize(),v.setTranslate()),E&&(e.isElement&&((!s||typeof s=="string")&&(s=document.createElement("div"),s.classList.add("swiper-button-next"),s.innerHTML=e.hostEl.constructor.nextButtonSvg,s.part.add("button-next"),e.el.appendChild(s)),(!o||typeof o=="string")&&(o=document.createElement("div"),o.classList.add("swiper-button-prev"),o.innerHTML=e.hostEl.constructor.prevButtonSvg,o.part.add("button-prev"),e.el.appendChild(o))),s&&(u.navigation.nextEl=s),o&&(u.navigation.prevEl=o),m.init(),m.update()),i.includes("allowSlideNext")&&(e.allowSlideNext=r.allowSlideNext),i.includes("allowSlidePrev")&&(e.allowSlidePrev=r.allowSlidePrev),i.includes("direction")&&e.changeDirection(r.direction,!1),(C||P)&&e.loopDestroy(),(I||P)&&e.loopCreate(),e.update()}function Cz(t,e){t===void 0&&(t={}),e===void 0&&(e=!0);const n={on:{}},r={},i={};Do(n,Pg),n._emitClasses=!0,n.init=!1;const s={},o=I2.map(l=>l.replace(/_/,"")),a=Object.assign({},t);return Object.keys(a).forEach(l=>{typeof t[l]>"u"||(o.indexOf(l)>=0?Ps(t[l])?(n[l]={},i[l]={},Do(n[l],t[l]),Do(i[l],t[l])):(n[l]=t[l],i[l]=t[l]):l.search(/on[A-Z]/)===0&&typeof t[l]=="function"?e?r[`${l[2].toLowerCase()}${l.substr(3)}`]=t[l]:n.on[`${l[2].toLowerCase()}${l.substr(3)}`]=t[l]:s[l]=t[l])}),["navigation","pagination","scrollbar"].forEach(l=>{n[l]===!0&&(n[l]={}),n[l]===!1&&delete n[l]}),{params:n,passedParams:i,rest:s,events:r}}function Iz(t,e){let{el:n,nextEl:r,prevEl:i,paginationEl:s,scrollbarEl:o,swiper:a}=t;A2(e)&&r&&i&&(a.params.navigation.nextEl=r,a.originalParams.navigation.nextEl=r,a.params.navigation.prevEl=i,a.originalParams.navigation.prevEl=i),P2(e)&&s&&(a.params.pagination.el=s,a.originalParams.pagination.el=s),k2(e)&&o&&(a.params.scrollbar.el=o,a.originalParams.scrollbar.el=o),a.init(n)}function Az(t,e,n,r,i){const s=[];if(!e)return s;const o=l=>{s.indexOf(l)<0&&s.push(l)};if(n&&r){const l=r.map(i),c=n.map(i);l.join("")!==c.join("")&&o("children"),r.length!==n.length&&o("children")}return I2.filter(l=>l[0]==="_").map(l=>l.replace(/_/,"")).forEach(l=>{if(l in t&&l in e)if(Ps(t[l])&&Ps(e[l])){const c=Object.keys(t[l]),u=Object.keys(e[l]);c.length!==u.length?o(l):(c.forEach(h=>{t[l][h]!==e[l][h]&&o(l)}),u.forEach(h=>{t[l][h]!==e[l][h]&&o(l)}))}else t[l]!==e[l]&&o(l)}),s}const Pz=t=>{!t||t.destroyed||!t.params.virtual||t.params.virtual&&!t.params.virtual.enabled||(t.updateSlides(),t.updateProgress(),t.updateSlidesClasses(),t.parallax&&t.params.parallax&&t.params.parallax.enabled&&t.parallax.setTranslate())};function cf(){return cf=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},cf.apply(this,arguments)}function O2(t){return t.type&&t.type.displayName&&t.type.displayName.includes("SwiperSlide")}function D2(t){const e=[];return te.Children.toArray(t).forEach(n=>{O2(n)?e.push(n):n.props&&n.props.children&&D2(n.props.children).forEach(r=>e.push(r))}),e}function kz(t){const e=[],n={"container-start":[],"container-end":[],"wrapper-start":[],"wrapper-end":[]};return te.Children.toArray(t).forEach(r=>{if(O2(r))e.push(r);else if(r.props&&r.props.slot&&n[r.props.slot])n[r.props.slot].push(r);else if(r.props&&r.props.children){const i=D2(r.props.children);i.length>0?i.forEach(s=>e.push(s)):n["container-end"].push(r)}else n["container-end"].push(r)}),{slides:e,slots:n}}function Rz(t,e,n){if(!n)return null;const r=u=>{let h=u;return u<0?h=e.length+u:h>=e.length&&(h=h-e.length),h},i=t.isHorizontal()?{[t.rtlTranslate?"right":"left"]:`${n.offset}px`}:{top:`${n.offset}px`},{from:s,to:o}=n,a=t.params.loop?-e.length:0,l=t.params.loop?e.length*2:e.length,c=[];for(let u=a;u<l;u+=1)u>=s&&u<=o&&c.push(e[r(u)]);return c.map((u,h)=>te.cloneElement(u,{swiper:t,style:i,key:`slide-${h}`}))}function wl(t,e){return typeof window>"u"?A.useEffect(t,e):A.useLayoutEffect(t,e)}const mE=A.createContext(null),Oz=A.createContext(null),dw=A.forwardRef(function(t,e){let{className:n,tag:r="div",wrapperTag:i="div",children:s,onSwiper:o,...a}=t===void 0?{}:t,l=!1;const[c,u]=A.useState("swiper"),[h,m]=A.useState(null),[v,x]=A.useState(!1),g=A.useRef(!1),S=A.useRef(null),w=A.useRef(null),p=A.useRef(null),y=A.useRef(null),E=A.useRef(null),C=A.useRef(null),I=A.useRef(null),P=A.useRef(null),{params:R,passedParams:N,rest:O,events:U}=Cz(a),{slides:W,slots:F}=kz(s),M=()=>{x(!v)};Object.assign(R.on,{_containerClasses(B,K){u(K)}});const V=()=>{Object.assign(R.on,U),l=!0;const B={...R};if(delete B.wrapperClass,w.current=new uw(B),w.current.virtual&&w.current.params.virtual.enabled){w.current.virtual.slides=W;const K={cache:!1,slides:W,renderExternal:m,renderExternalUpdate:!1};Do(w.current.params.virtual,K),Do(w.current.originalParams.virtual,K)}};S.current||V(),w.current&&w.current.on("_beforeBreakpoint",M);const q=()=>{l||!U||!w.current||Object.keys(U).forEach(B=>{w.current.on(B,U[B])})},k=()=>{!U||!w.current||Object.keys(U).forEach(B=>{w.current.off(B,U[B])})};A.useEffect(()=>()=>{w.current&&w.current.off("_beforeBreakpoint",M)}),A.useEffect(()=>{!g.current&&w.current&&(w.current.emitSlidesClasses(),g.current=!0)}),wl(()=>{if(e&&(e.current=S.current),!!S.current)return w.current.destroyed&&V(),Iz({el:S.current,nextEl:E.current,prevEl:C.current,paginationEl:I.current,scrollbarEl:P.current,swiper:w.current},R),o&&o(w.current),()=>{w.current&&!w.current.destroyed&&w.current.destroy(!0,!1)}},[]),wl(()=>{q();const B=Az(N,p.current,W,y.current,K=>K.key);return p.current=N,y.current=W,B.length&&w.current&&!w.current.destroyed&&bz({swiper:w.current,slides:W,passedParams:N,changedParams:B,nextEl:E.current,prevEl:C.current,scrollbarEl:P.current,paginationEl:I.current}),()=>{k()}}),wl(()=>{Pz(w.current)},[h]);function D(){return R.virtual?Rz(w.current,W,h):W.map((B,K)=>te.cloneElement(B,{swiper:w.current,swiperSlideIndex:K}))}return te.createElement(r,cf({ref:S,className:R2(`${c}${n?` ${n}`:""}`)},O),te.createElement(Oz.Provider,{value:w.current},F["container-start"],te.createElement(i,{className:Sz(R.wrapperClass)},F["wrapper-start"],D(),F["wrapper-end"]),A2(R)&&te.createElement(te.Fragment,null,te.createElement("div",{ref:C,className:"swiper-button-prev"}),te.createElement("div",{ref:E,className:"swiper-button-next"})),k2(R)&&te.createElement("div",{ref:P,className:"swiper-scrollbar"}),P2(R)&&te.createElement("div",{ref:I,className:"swiper-pagination"}),F["container-end"]))});dw.displayName="Swiper";const fw=A.forwardRef(function(t,e){let{tag:n="div",children:r,className:i="",swiper:s,zoom:o,lazy:a,virtualIndex:l,swiperSlideIndex:c,...u}=t===void 0?{}:t;const h=A.useRef(null),[m,v]=A.useState("swiper-slide"),[x,g]=A.useState(!1);function S(E,C,I){C===h.current&&v(I)}wl(()=>{if(typeof c<"u"&&(h.current.swiperSlideIndex=c),e&&(e.current=h.current),!(!h.current||!s)){if(s.destroyed){m!=="swiper-slide"&&v("swiper-slide");return}return s.on("_slideClass",S),()=>{s&&s.off("_slideClass",S)}}}),wl(()=>{s&&h.current&&!s.destroyed&&v(s.getSlideClasses(h.current))},[s]);const w={isActive:m.indexOf("swiper-slide-active")>=0,isVisible:m.indexOf("swiper-slide-visible")>=0,isPrev:m.indexOf("swiper-slide-prev")>=0,isNext:m.indexOf("swiper-slide-next")>=0},p=()=>typeof r=="function"?r(w):r,y=()=>{g(!0)};return te.createElement(n,cf({ref:h,className:R2(`${m}${i?` ${i}`:""}`),"data-swiper-slide-index":l,onLoad:y},u),o&&te.createElement(mE.Provider,{value:w},te.createElement("div",{className:"swiper-zoom-container","data-swiper-zoom":typeof o=="number"?o:void 0},p(),a&&!x&&te.createElement("div",{className:"swiper-lazy-preloader"}))),!o&&te.createElement(mE.Provider,{value:w},p(),a&&!x&&te.createElement("div",{className:"swiper-lazy-preloader"})))});fw.displayName="SwiperSlide";const Dz=j.div`
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
`,Nz=j.div`
  width: 100%;
  height: 200px;

  @media (max-width: 600px) {
    height: 150px;
  }
`,Lz=j.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`,Mz=j.p`
  font-size: 24px;
  font-weight: bold;
  margin: 0;
  padding: 0;
  margin-bottom: 10px;
  color: white;

  @media (max-width: 600px) {
    font-size: 18px;
  }
`,Vz=j.div`
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
`,jz=j(Jt)`
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
`;function N2(t,e,n,r){return t.params.createElements&&Object.keys(r).forEach(i=>{if(!n[i]&&n.auto===!0){let s=lr(t.el,`.${r[i]}`)[0];s||(s=af("div",r[i]),s.className=r[i],t.el.append(s)),n[i]=s,e[i]=s}}),n}function L2(t){let{swiper:e,extendParams:n,on:r,emit:i}=t;n({navigation:{nextEl:null,prevEl:null,hideOnClick:!1,disabledClass:"swiper-button-disabled",hiddenClass:"swiper-button-hidden",lockClass:"swiper-button-lock",navigationDisabledClass:"swiper-navigation-disabled"}}),e.navigation={nextEl:null,prevEl:null};const s=g=>(Array.isArray(g)?g:[g]).filter(S=>!!S);function o(g){let S;return g&&typeof g=="string"&&e.isElement&&(S=e.el.querySelector(g),S)?S:(g&&(typeof g=="string"&&(S=[...document.querySelectorAll(g)]),e.params.uniqueNavElements&&typeof g=="string"&&S.length>1&&e.el.querySelectorAll(g).length===1&&(S=e.el.querySelector(g))),g&&!S?g:S)}function a(g,S){const w=e.params.navigation;g=s(g),g.forEach(p=>{p&&(p.classList[S?"add":"remove"](...w.disabledClass.split(" ")),p.tagName==="BUTTON"&&(p.disabled=S),e.params.watchOverflow&&e.enabled&&p.classList[e.isLocked?"add":"remove"](w.lockClass))})}function l(){const{nextEl:g,prevEl:S}=e.navigation;if(e.params.loop){a(S,!1),a(g,!1);return}a(S,e.isBeginning&&!e.params.rewind),a(g,e.isEnd&&!e.params.rewind)}function c(g){g.preventDefault(),!(e.isBeginning&&!e.params.loop&&!e.params.rewind)&&(e.slidePrev(),i("navigationPrev"))}function u(g){g.preventDefault(),!(e.isEnd&&!e.params.loop&&!e.params.rewind)&&(e.slideNext(),i("navigationNext"))}function h(){const g=e.params.navigation;if(e.params.navigation=N2(e,e.originalParams.navigation,e.params.navigation,{nextEl:"swiper-button-next",prevEl:"swiper-button-prev"}),!(g.nextEl||g.prevEl))return;let S=o(g.nextEl),w=o(g.prevEl);Object.assign(e.navigation,{nextEl:S,prevEl:w}),S=s(S),w=s(w);const p=(y,E)=>{y&&y.addEventListener("click",E==="next"?u:c),!e.enabled&&y&&y.classList.add(...g.lockClass.split(" "))};S.forEach(y=>p(y,"next")),w.forEach(y=>p(y,"prev"))}function m(){let{nextEl:g,prevEl:S}=e.navigation;g=s(g),S=s(S);const w=(p,y)=>{p.removeEventListener("click",y==="next"?u:c),p.classList.remove(...e.params.navigation.disabledClass.split(" "))};g.forEach(p=>w(p,"next")),S.forEach(p=>w(p,"prev"))}r("init",()=>{e.params.navigation.enabled===!1?x():(h(),l())}),r("toEdge fromEdge lock unlock",()=>{l()}),r("destroy",()=>{m()}),r("enable disable",()=>{let{nextEl:g,prevEl:S}=e.navigation;if(g=s(g),S=s(S),e.enabled){l();return}[...g,...S].filter(w=>!!w).forEach(w=>w.classList.add(e.params.navigation.lockClass))}),r("click",(g,S)=>{let{nextEl:w,prevEl:p}=e.navigation;w=s(w),p=s(p);const y=S.target;if(e.params.navigation.hideOnClick&&!p.includes(y)&&!w.includes(y)){if(e.pagination&&e.params.pagination&&e.params.pagination.clickable&&(e.pagination.el===y||e.pagination.el.contains(y)))return;let E;w.length?E=w[0].classList.contains(e.params.navigation.hiddenClass):p.length&&(E=p[0].classList.contains(e.params.navigation.hiddenClass)),i(E===!0?"navigationShow":"navigationHide"),[...w,...p].filter(C=>!!C).forEach(C=>C.classList.toggle(e.params.navigation.hiddenClass))}});const v=()=>{e.el.classList.remove(...e.params.navigation.navigationDisabledClass.split(" ")),h(),l()},x=()=>{e.el.classList.add(...e.params.navigation.navigationDisabledClass.split(" ")),m()};Object.assign(e.navigation,{enable:v,disable:x,update:l,init:h,destroy:m})}function $a(t){return t===void 0&&(t=""),`.${t.trim().replace(/([\.:!+\/])/g,"\\$1").replace(/ /g,".")}`}function M2(t){let{swiper:e,extendParams:n,on:r,emit:i}=t;const s="swiper-pagination";n({pagination:{el:null,bulletElement:"span",clickable:!1,hideOnClick:!1,renderBullet:null,renderProgressbar:null,renderFraction:null,renderCustom:null,progressbarOpposite:!1,type:"bullets",dynamicBullets:!1,dynamicMainBullets:1,formatFractionCurrent:p=>p,formatFractionTotal:p=>p,bulletClass:`${s}-bullet`,bulletActiveClass:`${s}-bullet-active`,modifierClass:`${s}-`,currentClass:`${s}-current`,totalClass:`${s}-total`,hiddenClass:`${s}-hidden`,progressbarFillClass:`${s}-progressbar-fill`,progressbarOppositeClass:`${s}-progressbar-opposite`,clickableClass:`${s}-clickable`,lockClass:`${s}-lock`,horizontalClass:`${s}-horizontal`,verticalClass:`${s}-vertical`,paginationDisabledClass:`${s}-disabled`}}),e.pagination={el:null,bullets:[]};let o,a=0;const l=p=>(Array.isArray(p)?p:[p]).filter(y=>!!y);function c(){return!e.params.pagination.el||!e.pagination.el||Array.isArray(e.pagination.el)&&e.pagination.el.length===0}function u(p,y){const{bulletActiveClass:E}=e.params.pagination;p&&(p=p[`${y==="prev"?"previous":"next"}ElementSibling`],p&&(p.classList.add(`${E}-${y}`),p=p[`${y==="prev"?"previous":"next"}ElementSibling`],p&&p.classList.add(`${E}-${y}-${y}`)))}function h(p){const y=p.target.closest($a(e.params.pagination.bulletClass));if(!y)return;p.preventDefault();const E=lf(y)*e.params.slidesPerGroup;if(e.params.loop){if(e.realIndex===E)return;e.slideToLoop(E)}else e.slideTo(E)}function m(){const p=e.rtl,y=e.params.pagination;if(c())return;let E=e.pagination.el;E=l(E);let C,I;const P=e.virtual&&e.params.virtual.enabled?e.virtual.slides.length:e.slides.length,R=e.params.loop?Math.ceil(P/e.params.slidesPerGroup):e.snapGrid.length;if(e.params.loop?(I=e.previousRealIndex||0,C=e.params.slidesPerGroup>1?Math.floor(e.realIndex/e.params.slidesPerGroup):e.realIndex):typeof e.snapIndex<"u"?(C=e.snapIndex,I=e.previousSnapIndex):(I=e.previousIndex||0,C=e.activeIndex||0),y.type==="bullets"&&e.pagination.bullets&&e.pagination.bullets.length>0){const N=e.pagination.bullets;let O,U,W;if(y.dynamicBullets&&(o=Ig(N[0],e.isHorizontal()?"width":"height",!0),E.forEach(F=>{F.style[e.isHorizontal()?"width":"height"]=`${o*(y.dynamicMainBullets+4)}px`}),y.dynamicMainBullets>1&&I!==void 0&&(a+=C-(I||0),a>y.dynamicMainBullets-1?a=y.dynamicMainBullets-1:a<0&&(a=0)),O=Math.max(C-a,0),U=O+(Math.min(N.length,y.dynamicMainBullets)-1),W=(U+O)/2),N.forEach(F=>{const M=[...["","-next","-next-next","-prev","-prev-prev","-main"].map(V=>`${y.bulletActiveClass}${V}`)].map(V=>typeof V=="string"&&V.includes(" ")?V.split(" "):V).flat();F.classList.remove(...M)}),E.length>1)N.forEach(F=>{const M=lf(F);M===C?F.classList.add(...y.bulletActiveClass.split(" ")):e.isElement&&F.setAttribute("part","bullet"),y.dynamicBullets&&(M>=O&&M<=U&&F.classList.add(...`${y.bulletActiveClass}-main`.split(" ")),M===O&&u(F,"prev"),M===U&&u(F,"next"))});else{const F=N[C];if(F&&F.classList.add(...y.bulletActiveClass.split(" ")),e.isElement&&N.forEach((M,V)=>{M.setAttribute("part",V===C?"bullet-active":"bullet")}),y.dynamicBullets){const M=N[O],V=N[U];for(let q=O;q<=U;q+=1)N[q]&&N[q].classList.add(...`${y.bulletActiveClass}-main`.split(" "));u(M,"prev"),u(V,"next")}}if(y.dynamicBullets){const F=Math.min(N.length,y.dynamicMainBullets+4),M=(o*F-o)/2-W*o,V=p?"right":"left";N.forEach(q=>{q.style[e.isHorizontal()?V:"top"]=`${M}px`})}}E.forEach((N,O)=>{if(y.type==="fraction"&&(N.querySelectorAll($a(y.currentClass)).forEach(U=>{U.textContent=y.formatFractionCurrent(C+1)}),N.querySelectorAll($a(y.totalClass)).forEach(U=>{U.textContent=y.formatFractionTotal(R)})),y.type==="progressbar"){let U;y.progressbarOpposite?U=e.isHorizontal()?"vertical":"horizontal":U=e.isHorizontal()?"horizontal":"vertical";const W=(C+1)/R;let F=1,M=1;U==="horizontal"?F=W:M=W,N.querySelectorAll($a(y.progressbarFillClass)).forEach(V=>{V.style.transform=`translate3d(0,0,0) scaleX(${F}) scaleY(${M})`,V.style.transitionDuration=`${e.params.speed}ms`})}y.type==="custom"&&y.renderCustom?(N.innerHTML=y.renderCustom(e,C+1,R),O===0&&i("paginationRender",N)):(O===0&&i("paginationRender",N),i("paginationUpdate",N)),e.params.watchOverflow&&e.enabled&&N.classList[e.isLocked?"add":"remove"](y.lockClass)})}function v(){const p=e.params.pagination;if(c())return;const y=e.virtual&&e.params.virtual.enabled?e.virtual.slides.length:e.grid&&e.params.grid.rows>1?e.slides.length/Math.ceil(e.params.grid.rows):e.slides.length;let E=e.pagination.el;E=l(E);let C="";if(p.type==="bullets"){let I=e.params.loop?Math.ceil(y/e.params.slidesPerGroup):e.snapGrid.length;e.params.freeMode&&e.params.freeMode.enabled&&I>y&&(I=y);for(let P=0;P<I;P+=1)p.renderBullet?C+=p.renderBullet.call(e,P,p.bulletClass):C+=`<${p.bulletElement} ${e.isElement?'part="bullet"':""} class="${p.bulletClass}"></${p.bulletElement}>`}p.type==="fraction"&&(p.renderFraction?C=p.renderFraction.call(e,p.currentClass,p.totalClass):C=`<span class="${p.currentClass}"></span> / <span class="${p.totalClass}"></span>`),p.type==="progressbar"&&(p.renderProgressbar?C=p.renderProgressbar.call(e,p.progressbarFillClass):C=`<span class="${p.progressbarFillClass}"></span>`),e.pagination.bullets=[],E.forEach(I=>{p.type!=="custom"&&(I.innerHTML=C||""),p.type==="bullets"&&e.pagination.bullets.push(...I.querySelectorAll($a(p.bulletClass)))}),p.type!=="custom"&&i("paginationRender",E[0])}function x(){e.params.pagination=N2(e,e.originalParams.pagination,e.params.pagination,{el:"swiper-pagination"});const p=e.params.pagination;if(!p.el)return;let y;typeof p.el=="string"&&e.isElement&&(y=e.el.querySelector(p.el)),!y&&typeof p.el=="string"&&(y=[...document.querySelectorAll(p.el)]),y||(y=p.el),!(!y||y.length===0)&&(e.params.uniqueNavElements&&typeof p.el=="string"&&Array.isArray(y)&&y.length>1&&(y=[...e.el.querySelectorAll(p.el)],y.length>1&&(y=y.filter(E=>x2(E,".swiper")[0]===e.el)[0])),Array.isArray(y)&&y.length===1&&(y=y[0]),Object.assign(e.pagination,{el:y}),y=l(y),y.forEach(E=>{p.type==="bullets"&&p.clickable&&E.classList.add(...(p.clickableClass||"").split(" ")),E.classList.add(p.modifierClass+p.type),E.classList.add(e.isHorizontal()?p.horizontalClass:p.verticalClass),p.type==="bullets"&&p.dynamicBullets&&(E.classList.add(`${p.modifierClass}${p.type}-dynamic`),a=0,p.dynamicMainBullets<1&&(p.dynamicMainBullets=1)),p.type==="progressbar"&&p.progressbarOpposite&&E.classList.add(p.progressbarOppositeClass),p.clickable&&E.addEventListener("click",h),e.enabled||E.classList.add(p.lockClass)}))}function g(){const p=e.params.pagination;if(c())return;let y=e.pagination.el;y&&(y=l(y),y.forEach(E=>{E.classList.remove(p.hiddenClass),E.classList.remove(p.modifierClass+p.type),E.classList.remove(e.isHorizontal()?p.horizontalClass:p.verticalClass),p.clickable&&(E.classList.remove(...(p.clickableClass||"").split(" ")),E.removeEventListener("click",h))})),e.pagination.bullets&&e.pagination.bullets.forEach(E=>E.classList.remove(...p.bulletActiveClass.split(" ")))}r("changeDirection",()=>{if(!e.pagination||!e.pagination.el)return;const p=e.params.pagination;let{el:y}=e.pagination;y=l(y),y.forEach(E=>{E.classList.remove(p.horizontalClass,p.verticalClass),E.classList.add(e.isHorizontal()?p.horizontalClass:p.verticalClass)})}),r("init",()=>{e.params.pagination.enabled===!1?w():(x(),v(),m())}),r("activeIndexChange",()=>{typeof e.snapIndex>"u"&&m()}),r("snapIndexChange",()=>{m()}),r("snapGridLengthChange",()=>{v(),m()}),r("destroy",()=>{g()}),r("enable disable",()=>{let{el:p}=e.pagination;p&&(p=l(p),p.forEach(y=>y.classList[e.enabled?"remove":"add"](e.params.pagination.lockClass)))}),r("lock unlock",()=>{m()}),r("click",(p,y)=>{const E=y.target,C=l(e.pagination.el);if(e.params.pagination.el&&e.params.pagination.hideOnClick&&C&&C.length>0&&!E.classList.contains(e.params.pagination.bulletClass)){if(e.navigation&&(e.navigation.nextEl&&E===e.navigation.nextEl||e.navigation.prevEl&&E===e.navigation.prevEl))return;const I=C[0].classList.contains(e.params.pagination.hiddenClass);i(I===!0?"paginationShow":"paginationHide"),C.forEach(P=>P.classList.toggle(e.params.pagination.hiddenClass))}});const S=()=>{e.el.classList.remove(e.params.pagination.paginationDisabledClass);let{el:p}=e.pagination;p&&(p=l(p),p.forEach(y=>y.classList.remove(e.params.pagination.paginationDisabledClass))),x(),v(),m()},w=()=>{e.el.classList.add(e.params.pagination.paginationDisabledClass);let{el:p}=e.pagination;p&&(p=l(p),p.forEach(y=>y.classList.add(e.params.pagination.paginationDisabledClass))),g()};Object.assign(e.pagination,{enable:S,disable:w,render:v,update:m,init:x,destroy:g})}const Fz=({product:t})=>{const{imagenes:e,titulo:n,precio:r,id:i}=t;return T.jsxs(Dz,{children:[T.jsx(Mz,{children:n}),T.jsx(dw,{slidesPerView:1,pagination:{clickable:!0},loop:!0,navigation:!0,modules:[M2,L2],children:e&&e.map((s,o)=>T.jsx(fw,{children:T.jsx(Nz,{children:T.jsx(Lz,{src:s.urlImage,alt:s.titulo})})},o))}),T.jsxs(Vz,{children:[T.jsxs("div",{children:[T.jsx("span",{children:"Precio por dia:"})," $ ",r]}),T.jsx(jz,{to:`/product/${i}`,children:"Ver más"})]})]})},$z=j.h2`
  margin-top: 60px;
  color: white;
  font-size: 28px;
  font-weight: 700;
  align-self: flex-start;
`,Bz=j.div`
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
`,Uz=(t,e)=>{const n=t==null?void 0:t.sort(()=>Math.random()-.5);return n==null?void 0:n.slice(0,e)},zz=()=>{const{productos:t}=A.useContext(On).contextValue,[e,n]=A.useState(null);return A.useEffect(()=>{window.scrollTo(0,0),n(Uz(t,10))},[]),T.jsxs(T.Fragment,{children:[T.jsx($z,{children:"Productos recomendados"}),T.jsx(Bz,{children:e&&e.map((r,i)=>T.jsx(Fz,{product:r},i))})]})},Hz=j.div`
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
`,gE=j.label`
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
`,Wz=j.input`
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
`,yE=j.input`
  width: 75%;
  padding: 10px;
  border-radius: 8px;
  border: none;
  font-size: 15px;

  @media all and (max-width: 450px) {
    width: 100%;
    font-size: 15px;
    }
;`,vE=j.div`
  display: flex;
  justify-content: start;
  
  @media all and (max-width: 450px) {
  display: inline-block;
  font-size: 15px;
  }
`,qz=j.button`
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

`,Gz=j.img`

`,Kz="/assets/lupa1-f10f721c.svg",Qz=()=>{const t=e=>{e.preventDefault()};return T.jsx("form",{onSubmit:t,children:T.jsxs(Hz,{children:[T.jsx(Wz,{type:"text",placeholder:"Busca aquí lo que necesitas"}),T.jsxs("div",{style:{display:"flex",gap:5},children:[T.jsxs(vE,{children:[T.jsx(gE,{htmlFor:"start",children:"Desde: "}),T.jsx(yE,{type:"date",id:"start"})]}),T.jsxs(vE,{children:[T.jsx(gE,{htmlFor:"end",children:"Hasta:"}),T.jsx(yE,{type:"date",id:"end"})]}),T.jsx(qz,{type:"submit",children:T.jsx(Gz,{src:Kz,alt:""})})]})]})})},Yz=j.div`
  width: 100%;
`,wE=[{id:1,title:"Cancha Futbol 7 Cesped",images:[{img:"/canchas/cancha7.webp",alt:"Cancha 7 cesped"},{img:"/canchas/dummy-image1.png",alt:"Cancha 7 cesped"},{img:"/canchas/dummy-image2.png",alt:"Cancha 7 cesped"},{img:"/canchas/dummy-image3.png",alt:"Cancha 7 cesped"},{img:"/canchas/dummy-image4.png",alt:"Cancha 7 cesped"}],description:"Cancha de futbol 7 exterior, pasto natural, totalmente cercada ",dayPrice:2e4,availability:{isAbalible:!0,dateStart:"",dateEnd:""},category:"Canchas",details:[{name:"Alcanzapelota",icon:"/icons/pelota.png"},{name:"Redes",icon:"/icons/redes.png"}]},{id:2,title:"Cancha Futbol 7 sintetico",images:[{img:"/canchas/cancha7Sintetico.jpeg",alt:"Cancha 7 sintetico"},{img:"/canchas/dummy-image1.png",alt:"Cancha 7 sintetico"},{img:"/canchas/dummy-image2.png",alt:"Cancha 7 sintetico"},{img:"/canchas/dummy-image3.png",alt:"Cancha 7 sintetico"},{img:"/canchas/dummy-image4.png",alt:"Cancha 7 sintetico"}],description:"Cancha de futbol 7 exterior, pasto sintetico, totalmente cercada ",dayPrice:18e3,availability:{isAbalible:!0,dateStart:"",dateEnd:""},category:"Canchas",details:[{name:"Redes",icon:"/icons/redes.png"},{name:"Iluminación",icon:"/icons/iluminacion.png"}]},{id:3,title:"Cancha Futbol 7 techada",images:[{img:"/canchas/cancha7Techada.jpeg",alt:"Cancha 7 techada"},{img:"/canchas/dummy-image1.png",alt:"Cancha 7 techada"},{img:"/canchas/dummy-image2.png",alt:"Cancha 7 techada"},{img:"/canchas/dummy-image3.png",alt:"Cancha 7 techada"},{img:"/canchas/dummy-image4.png",alt:"Cancha 7 techada"}],description:"Cancha de futbol 7 techada, pasto sintetico",dayPrice:28e3,availability:{isAbalible:!0,dateStart:"",dateEnd:""},category:"Canchas",details:[{name:"Redes",icon:"/icons/redes.png"},{name:"Iluminación",icon:"/icons/iluminacion.png"},{name:"Grabacion del partido",icon:"/icons/grabacion.png"}]},{id:4,title:"Cancha Futbol 11 exterior",images:[{img:"/canchas/cancha11.jpeg",alt:"Cancha 11 exterior"},{img:"/canchas/dummy-image1.png",alt:"Cancha 11 exterior"},{img:"/canchas/dummy-image2.png",alt:"Cancha 11 exterior"},{img:"/canchas/dummy-image3.png",alt:"Cancha 11 exterior"},{img:"/canchas/dummy-image4.png",alt:"Cancha 11 exterior"}],description:"Cancha de futbol 11, exterior, pasto natural, totalmente iluminada",dayPrice:38e3,availability:{isAbalible:!0,dateStart:"",dateEnd:""},category:"Canchas",details:[{name:"Alcanzapelotas",icon:"/icons/pelota.png"}]},{id:5,title:"Cancha Futbol 11 Sintetico",images:[{img:"/canchas/cancha11Sintetico.jpeg",alt:"Cancha 11 sintetico"},{img:"/canchas/dummy-image1.png",alt:"Cancha 11 sintetico"},{img:"/canchas/dummy-image2.png",alt:"Cancha 11 sintetico"},{img:"/canchas/dummy-image3.png",alt:"Cancha 11 sintetico"},{img:"/canchas/dummy-image4.png",alt:"Cancha 11 sintetico"}],description:"Cancha de futbol 11, exterior, pasto sintetico, totalmente iluminada y cercada, cuenta con tribuna para 100 personas",dayPrice:43e3,availability:{isAbalible:!0,dateStart:"",dateEnd:""},category:"Canchas",details:[{name:"Redes",icon:"/icons/redes.png"},{name:"Grabacion del partido",icon:"/icons/grabacion.png"},{name:"Alcanzapelota",icon:"/icons/pelota.png"}]},{id:6,title:"Cancha Futbol 11 Techada",images:[{img:"/canchas/cancha11Techada.jpg",alt:"Cancha 11 techada"},{img:"/canchas/dummy-image1.png",alt:"Cancha 11 techada"},{img:"/canchas/dummy-image2.png",alt:"Cancha 11 techada"},{img:"/canchas/dummy-image3.png",alt:"Cancha 11 techada"},{img:"/canchas/dummy-image4.png",alt:"Cancha 11 techada"}],description:"Cancha de futbol 11, techada, pasto sintetico",dayPrice:46e3,availability:{isAbalible:!0,dateStart:"",dateEnd:""},category:"Canchas",details:[{name:"Redes",icon:"/icons/redes.png"},{name:"Iluminación",icon:"/icons/iluminacion.png"}]},{id:7,title:"Cancha Basketball Exterior",images:[{img:"/canchas/canchaBasketExterior.jpeg",alt:"Cancha basket exterior"},{img:"/canchas/dummy-image1.png",alt:"Cancha basket exterior"},{img:"/canchas/dummy-image2.png",alt:"Cancha basket exterior"},{img:"/canchas/dummy-image3.png",alt:"Cancha basket exterior"},{img:"/canchas/dummy-image4.png",alt:"Cancha basket exterior"}],description:"Cancha de basketball exterior, cercada e iluminación",dayPrice:36e3,availability:{isAbalible:!0,dateStart:"",dateEnd:""},category:"Canchas",details:[]},{id:8,title:"Cancha Basketball Techada c/palcos",images:[{img:"/canchas/canchaBasketTechadaPalcos.jpeg",alt:"Cancha basket techada"},{img:"/canchas/dummy-image1.png",alt:"Cancha basket techada"},{img:"/canchas/dummy-image2.png",alt:"Cancha basket techada"},{img:"/canchas/dummy-image3.png",alt:"Cancha basket techada"},{img:"/canchas/dummy-image4.png",alt:"Cancha basket techada"}],description:"Cancha de basketball techada, palcos para 300 personas",dayPrice:56e3,availability:{isAbalible:!0,dateStart:"",dateEnd:""},category:"Canchas",details:[{name:"Redes",icon:"/icons/redes.png"},{name:"Iluminación",icon:"/icons/iluminacion.png"},{name:"Grabacion del partido",icon:"/icons/grabacion.png"},{name:"Alcanzapelota",icon:"/icons/pelota.png"}]},{id:9,title:"Cancha Voley Exterior",images:[{img:"/canchas/canchaBoleyExterior.jpeg",alt:"Cancha boley exterior"},{img:"/canchas/dummy-image1.png",alt:"Cancha boley exterior"},{img:"/canchas/dummy-image2.png",alt:"Cancha boley exterior"},{img:"/canchas/dummy-image3.png",alt:"Cancha boley exterior"},{img:"/canchas/dummy-image4.png",alt:"Cancha boley exterior"}],description:"Cancha de voley exterior",dayPrice:23e3,availability:{isAbalible:!0,dateStart:"",dateEnd:""},category:"Canchas",details:[{name:"Redes",icon:"/icons/redes.png"},{name:"Grabacion del partido",icon:"/icons/grabacion.png"}]},{id:10,title:"Cancha Voley Playa",images:[{img:"/canchas/canchaBoleyPlaya.jpeg",alt:"Cancha boley playa"},{img:"/canchas/dummy-image1.png",alt:"Cancha boley playa"},{img:"/canchas/dummy-image2.png",alt:"Cancha boley playa"},{img:"/canchas/dummy-image3.png",alt:"Cancha boley playa"},{img:"/canchas/dummy-image4.png",alt:"Cancha boley playa"}],description:"Cancha de Voley playa, arena 100% natural",dayPrice:36e3,availability:{isAbalible:!0,dateStart:"",dateEnd:""},category:"Canchas",details:[{name:"Redes",icon:"/icons/redes.png"},{name:"Iluminación",icon:"/icons/iluminacion.png"},{name:"Grabacion del partido",icon:"/icons/grabacion.png"},{name:"Alcanzapelota",icon:"/icons/pelota.png"}]},{id:11,title:"Cancha Voley Techada",images:[{img:"/canchas/canchaBoleyTechada.jpeg",alt:"Cancha boley techada"},{img:"/canchas/dummy-image1.png",alt:"Cancha boley techada"},{img:"/canchas/dummy-image2.png",alt:"Cancha boley techada"},{img:"/canchas/dummy-image3.png",alt:"Cancha boley techada"},{img:"/canchas/dummy-image4.png",alt:"Cancha boley techada"}],description:"Cancha de voley techada, palco para 500 personas. Ideal competencias internacionales",dayPrice:66e3,availability:{isAbalible:!0,dateStart:"",dateEnd:""},category:"Canchas",details:[{name:"Redes",icon:"/icons/redes.png"},{name:"Iluminación",icon:"/icons/iluminacion.png"},{name:"Alcanzapelota",icon:"/icons/pelota.png"}]},{id:12,title:"Cancha Multihuso Techada",images:[{img:"/canchas/canchaMultihusoTechada.png",alt:"Cancha multihuso"},{img:"/canchas/dummy-image1.png",alt:"Cancha multihuso"},{img:"/canchas/dummy-image2.png",alt:"Cancha multihuso"},{img:"/canchas/dummy-image3.png",alt:"Cancha multihuso"},{img:"/canchas/dummy-image4.png",alt:"Cancha multihuso"}],description:"Cancha de multihuso",dayPrice:49e3,availability:{isAbalible:!0,dateStart:"",dateEnd:""},category:"Canchas",details:[{name:"Iluminación",icon:"/icons/iluminacion.png"},{name:"Alcanzapelota",icon:"/icons/pelota.png"}]}],_E=[{id:1,data:{name:"Pepe",surname:"Lopez",email:"pepe@mail.com",password:"123456",phone:"22334456"},admin:!0},{id:1,data:{name:"Luis",surname:"Fernandez",email:"elfernandez@mail.com",password:"123456",phone:"22334456"},admin:!1}],EE=[{id:1,title:"Canchas",image:"./cancha.svg",alt:"Categoria Canchas",logo:"./cancha.svg"},{id:2,title:"Accesorios",image:"./ball.svg",alt:"Categoria Accesorios",logo:"./ball.svg"},{id:3,title:"Indumentaria",image:"./ropa.svg",alt:"Categoria Indumentaria",logo:"./ropa.svg"},{id:4,title:"Parrilleros",image:"./parrilla.svg",alt:"Categoria Parrilleros",logo:"./parrilla.svg"},{id:5,title:"Personal",image:"./arbitro.svg",alt:"Categoria Personal",logo:"./arbitro.svg"}],Xz=t=>{const e=localStorage.getItem(t);let n;if(e)try{return JSON.parse(e)}catch(r){return console.error("Error al parsear los datos de localStorage:",r),null}else try{switch(t){case"categories":localStorage.setItem(t,JSON.stringify(EE)),n=EE;break;case"users":localStorage.setItem(t,JSON.stringify(_E)),n=_E;break;case"products":localStorage.setItem(t,JSON.stringify(wE)),n=wE;break;default:break}return n}catch(r){return console.error("Error al obtener el JSON del archivo local:",r),null}},Jz=j.div`
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
`,Zz=j.div`
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
`,e6=j.div`
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
`,t6="/assets/logoTeam-c1158a56.svg",n6="/assets/square-x-twitter-1a4e1106.svg",r6="/assets/square-whatsapp-d72afdfd.svg",i6="/assets/square-instagram-aff443db.svg",s6="/assets/square-facebook-c88755fd.svg",wh=()=>T.jsxs(Jz,{children:[T.jsxs(Zz,{children:[T.jsx("img",{src:t6,alt:"logo equipo uno"}),T.jsx("p",{children:"Copyright ©2023 All rights reserved"})]}),T.jsxs(e6,{children:[T.jsx("a",{href:"",children:T.jsx("img",{src:r6,alt:"whatsapp logo"})}),T.jsx("a",{href:"https://www.instagram.com/_digitalhouse/",children:T.jsx("img",{src:i6,alt:"instagram logo"})}),T.jsx("a",{href:"https://www.facebook.com/digitalhouseschool",children:T.jsx("img",{src:s6,alt:"facebook logo"})}),T.jsx("a",{href:"https://twitter.com/_digitalhouse?lang=es",children:T.jsx("img",{src:n6,alt:"x logo"})})]})]}),o6=()=>(A.useEffect(()=>{Xz("products")},[]),T.jsxs(T.Fragment,{children:[T.jsxs(Yz,{children:[T.jsx(Qz,{}),T.jsx(iU,{}),T.jsx(zz,{})]}),T.jsx(wh,{})]})),a6="/assets/404-4f55f6ee.png",l6=j.div`
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
`,c6=()=>(A.useEffect(()=>{window.scrollTo(0,0)},[]),T.jsxs(l6,{style:{marginTop:"120px"},children:[T.jsx("img",{src:a6,alt:"NotFound Image"}),T.jsx("p",{children:"Página no encontrada"})]})),u6=j.div`
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
`,Tr=j.label`
  width: 100%;
  height: 19px;
  color: #000;
  margin: 10px;
  font-size: 20px;
  font-weight: 600;
`,xr=j.input`
  width: 100%;
  border-radius: 8px;
  border: 1px solid rgba(129, 129, 129, 0.5);
  padding: 10px;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  font-size: 16px;
  margin-bottom: 12px;

`,Sr=j.p`
  height: 24px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: red;
  color: white;
  font-size: 14px;
`,d6=j.div`
  display: flex;
  width: 90px;
  height: 90px;

  img {
    width: 100%;
    height: auto;
  }
`,f6=j.div`
  font-size: 15px;
  margin: 15px 0;
  color: brown;
  display: flex;
  justify-content: space-between;
  align-self: flex-start;
`,h6=j.button`
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
`,p6=j.input`
  margin-left: 5px;
  margin-right: 10px;
`,m6=()=>{const t=Ls(),e=()=>{let I=new Date,P=I.getFullYear(),R=(I.getMonth()+1).toString().padStart(2,"0"),N=I.getDate().toString().padStart(2,"0");return`${P}-${R}-${N}`},[n,r]=A.useState({nombre:null,apellido:null,email:null,password:null,telefono:null,dni:1,fechaIngreso:e(),calle:null,numero:null,localidad:null,admin:!1}),[i,s]=A.useState([]);A.useEffect(()=>{window.scrollTo(0,0)},[]);const o=i.some(([I])=>I==="name"),a=i.some(([I])=>I==="surname"),l=i.some(([I])=>I==="email"),c=i.some(([I])=>I==="password"),u=i.some(([I])=>I==="confirm"),h=i.some(([I])=>I==="telefono"),m=i.some(([I])=>I==="calle"),v=i.some(([I])=>I==="numero"),x=i.some(([I])=>I==="localidad"),g=()=>{n.nombre.length<4&&s(I=>[...I,["name"]])},S=()=>{n.apellido.length<4&&s(I=>[...I,["surname"]])},w=async()=>{/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(n.email)||s(P=>[...P,["email"]])},p=()=>{n.password.length<6?s(I=>[...I,["password"]]):n.password!==n.confirmPassword&&s(I=>[...I,["confirm"]])},y=(I,P)=>{r(R=>({...R,[P]:I.target.value})),s([])},E=async()=>{const I={...n};await zB(I)!==null?(w2(),gt.fire({title:"Usuario creado!",text:"El usuario a sido creado correctamente!",icon:"success",confirmButtonText:"Iniciar sesión"}).then(R=>{R.isConfirmed&&t("/login")})):gt.fire({title:"Error!",text:"El correo ya esta en uso!",icon:"error",confirmButtonText:"Volver"})},C=async I=>{I.preventDefault(),s([]),w(),p(),g(),S(),s(P=>(P.length===0?E():gt.fire({title:"Error!",text:"Verifica los datos ingresados",icon:"error",confirmButtonText:"Volver"}),P))};return T.jsxs(T.Fragment,{children:[T.jsx("form",{onSubmit:C,children:T.jsxs(u6,{children:[T.jsx(d6,{children:T.jsx("img",{src:"/src/assets/Male User.png",alt:"user"})}),T.jsx(Tr,{children:"Nombre"}),T.jsx(xr,{type:"text",required:!0,placeholder:"Ingresa tú nombre",onChange:I=>y(I,"nombre")}),o===!0?T.jsx(Sr,{children:"El nombre debe tener minimo 4 letras"}):null,T.jsx(Tr,{children:"Apellido"}),T.jsx(xr,{type:"text",required:!0,placeholder:"Ingresa tú apellido",onChange:I=>y(I,"apellido")}),a===!0?T.jsx(Sr,{children:"El apellido debe tener minimo 4 letras"}):null,T.jsx(Tr,{children:"Email"}),T.jsx(xr,{type:"email",required:!0,placeholder:"Ingresa tú e-mail",onChange:I=>y(I,"email")}),l===!0?T.jsx(Sr,{children:"Debes ingresar un correo valido"}):null,T.jsx(Tr,{children:"Password"}),T.jsx(xr,{type:"password",required:!0,placeholder:"Crea una contraseña",autoComplete:"on",onChange:I=>y(I,"password")}),c===!0?T.jsx(Sr,{children:"Asegurate que tenga mas de 6 letras"}):null,T.jsx(Tr,{children:"Confirmar password"}),T.jsx(xr,{type:"password",required:!0,placeholder:"Repite la contraseña",autoComplete:"on",onChange:I=>y(I,"confirmPassword")}),u===!0?T.jsx(Sr,{children:"Las contraseñas no coinciden"}):null,T.jsx(Tr,{children:"Teléfono"}),T.jsx(xr,{type:"number",required:!0,placeholder:"Ingresa tú telefono",onChange:I=>y(I,"telefono")}),h===!0?T.jsx(Sr,{children:"El telefono debe tener minimo 4 letras"}):null,T.jsx(Tr,{children:"Dirección"}),T.jsx(xr,{type:"text",required:!0,placeholder:"Ingresa tú dirección",onChange:I=>y(I,"calle")}),m===!0?T.jsx(Sr,{children:"La dirección debe tener minimo 4 letras"}):null,T.jsx(Tr,{children:"Número de Puerta"}),T.jsx(xr,{type:"number",required:!0,placeholder:"Ingresa tú número de puerta",onChange:I=>y(I,"numero")}),v===!0?T.jsx(Sr,{children:"El número debe tener minimo 4"}):null,T.jsx(Tr,{children:"Localidad"}),T.jsx(xr,{type:"text",required:!0,placeholder:"Ingresa tú Localidad",onChange:I=>y(I,"localidad")}),x===!0?T.jsx(Sr,{children:"La localidad debe tener minimo 4 letras"}):null,T.jsx(f6,{children:T.jsxs("div",{children:[T.jsx(p6,{type:"checkbox"}),T.jsx("span",{children:"Recordarme "})]})}),T.jsx(h6,{children:"Registrarme"})]})}),T.jsx(wh,{})]})},g6=j.div`
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
`,TE=j.label`
  width: 100%;
  height: 19px;
  color: #000;
  margin: 10px;
  font-size: 20px;
  font-weight: 600;
`,xE=j.input`
  width: 100%;
  border-radius: 8px;
  border: 1px solid rgba(129, 129, 129, 0.5);
  padding: 10px;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  font-size: 16px;
  margin-bottom: 12px;
`,y6=j.div`
  display: flex;
  width: 90px;
  height: 90px;

  img {
    width: 100%;
    height: auto;
  }
`,v6=j.div`
  width: 100%;
  font-size: 15px;
  margin: 15px 0;
  color: brown;
  display: flex;
  justify-content: space-between;
`,w6=j.button`
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
`,SE=j.button`
  font-size: 15px;
  background: inherit;
  border: none;
  color: brown;
  cursor: pointer;

  &:hover {
    color: white;
  }
`,_6=j.input`
  margin-left: 5px;
  margin-right: 10px;
`,bE=j.p`
  height: 24px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: red;
  color: white;
  font-size: 14px;
`,E6=j.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-top: 16px;
`,T6=()=>{const t=Ls(),[e,n]=A.useState(null),[r,i]=A.useState(null),[s,o]=A.useState([]),{loginAdmin:a,login:l,setUserData:c,user:u}=A.useContext(On).contextValue;A.useEffect(()=>{window.scrollTo(0,0)},[]);const h=async()=>{/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e)||o(E=>[...E,["user"]])},m=()=>{r.length<6&&o(y=>[...y,["password"]])},v=s.some(([y])=>y==="password"),x=s.some(([y])=>y==="user"),g=y=>{n(y.target.value),o([])},S=y=>{i(y.target.value),o([])},w=async(y,E)=>{const C=await HB(y,E);if(C!==null){const P=(await qB("userId",C.user.uid))[0],R=P.admin;P?(c(P),l(),gt.fire({title:"Ingreso correcto!",text:`Hola, ${P.nombre} bienvenido!`,icon:"success",confirmButtonText:`Ir a ${R?"Dashboard":"Home"} `}).then(N=>{N.isConfirmed&&(R?(a(),t("/administracion")):t("/"))})):gt.fire({title:"Error!",text:"Usuario o contraseña incorrectos",icon:"error",confirmButtonText:"Ok"})}else gt.fire({title:"Error!",text:"Usuario o contraseña incorrectos",icon:"error",confirmButtonText:"Ok"})},p=async y=>{y.preventDefault(),o([]),h(),m(),o(E=>(E.length===0?w(e,r):gt.fire({title:"Error!",text:"Verifica los datos ingresados",icon:"error",confirmButtonText:"Volver"}),E))};return T.jsxs(T.Fragment,{children:[T.jsx("form",{onSubmit:p,children:T.jsxs(g6,{children:[T.jsx(y6,{children:T.jsx("img",{src:"/src/assets/Male User.png",alt:"user"})}),T.jsx(TE,{children:"Email"}),T.jsx(xE,{type:"email",required:!0,placeholder:"Ingresa tú correo electrónico",onChange:g}),x===!0?T.jsx(bE,{children:"Debes ingresar un correo valido"}):null,T.jsx(TE,{children:"Password"}),T.jsx(xE,{type:"password",required:!0,placeholder:"Ingresa tú contraseña",autoComplete:"on",onChange:S}),v===!0?T.jsx(bE,{children:"Contraseña incorrecta o menos de 6 caractéres"}):null,T.jsx(v6,{children:T.jsxs("div",{children:[T.jsx(_6,{type:"checkbox"}),T.jsx("span",{children:"Recordarme "})]})}),T.jsx(w6,{type:"submit",children:"Login"}),T.jsxs(E6,{children:[T.jsx(Jt,{to:"/register",children:T.jsx(SE,{children:"Crear una nueva cuenta"})}),T.jsx(Jt,{to:"/",children:T.jsx(SE,{children:"Olvide mi contraseña"})})]})]})}),T.jsx(wh,{})]})},x6=j.div`
  width: 100%;
  min-height: 100vh;
  margin-top: 132px;

  @media (max-width: 1024px) {
    padding: 0 32px;
  }
`,S6=j.div`
  width: 100%;
  background-color: rgba(255, 255, 255, 0.7);
  border-radius: 8px;
  padding: 16px;
`,b6=j.div`
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
`,C6=j.h2`
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
`,I6=j.div`
  display: flex;
  justify-content: space-between;

  @media (max-width: 1024px) {
    flex-direction: column;
  }
`,A6=j.div`
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
`,P6=j.div`
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
`,k6=j.div`
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
`,R6=j.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100%;
  width: 50%;
  padding: 0 14px;

  @media (max-width: 1024px) {
    width: 100%;
  }
`,O6=j.p`
  font-size: 24px;
  margin: 0;
  padding-bottom: 12px;

  @media (max-width: 1024px) {
    font-size: 18px;
  }
`,D6=j.p`
  font-size: 24px;
  margin: 0;
  padding-bottom: 12px;

  @media (max-width: 1024px) {
    font-size: 18px;
  }
`,N6=j.p`
  font-size: 20px;
  color: brown;
  font-weight: bold;
`,L6=j.div`
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
`,M6=j.button`
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
`,V6=j.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  flex-wrap: wrap;
  margin-left: 30px;
  margin-top: 20px;

  li {
    padding: 12px;
  }
`,j6="/assets/flecha-ed45a95d.png";var kg={exports:{}},ks={},V2={exports:{}},F6="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",$6=F6,B6=$6;function j2(){}function F2(){}F2.resetWarningCache=j2;var U6=function(){function t(r,i,s,o,a,l){if(l!==B6){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}t.isRequired=t;function e(){return t}var n={array:t,bigint:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,elementType:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:F2,resetWarningCache:j2};return n.PropTypes=n,n};V2.exports=U6();var hw=V2.exports;const Ce=yf(hw);var Rg={exports:{}},Kn={},Og={exports:{}};(function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=u;/*!
 * Adapted from jQuery UI core
 *
 * http://jqueryui.com
 *
 * Copyright 2014 jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/category/ui-core/
 */var n="none",r="contents",i=/input|select|textarea|button|object|iframe/;function s(h,m){return m.getPropertyValue("overflow")!=="visible"||h.scrollWidth<=0&&h.scrollHeight<=0}function o(h){var m=h.offsetWidth<=0&&h.offsetHeight<=0;if(m&&!h.innerHTML)return!0;try{var v=window.getComputedStyle(h),x=v.getPropertyValue("display");return m?x!==r&&s(h,v):x===n}catch{return console.warn("Failed to inspect element style"),!1}}function a(h){for(var m=h,v=h.getRootNode&&h.getRootNode();m&&m!==document.body;){if(v&&m===v&&(m=v.host.parentNode),o(m))return!1;m=m.parentNode}return!0}function l(h,m){var v=h.nodeName.toLowerCase(),x=i.test(v)&&!h.disabled||v==="a"&&h.href||m;return x&&a(h)}function c(h){var m=h.getAttribute("tabindex");m===null&&(m=void 0);var v=isNaN(m);return(v||m>=0)&&l(h,!v)}function u(h){var m=[].slice.call(h.querySelectorAll("*"),0).reduce(function(v,x){return v.concat(x.shadowRoot?u(x.shadowRoot):[x])},[]);return m.filter(c)}t.exports=e.default})(Og,Og.exports);var $2=Og.exports;Object.defineProperty(Kn,"__esModule",{value:!0});Kn.resetState=q6;Kn.log=G6;Kn.handleBlur=ac;Kn.handleFocus=lc;Kn.markForFocusLater=K6;Kn.returnFocus=Q6;Kn.popWithoutFocus=Y6;Kn.setupScopedFocus=X6;Kn.teardownScopedFocus=J6;var z6=$2,H6=W6(z6);function W6(t){return t&&t.__esModule?t:{default:t}}var na=[],Eo=null,Dg=!1;function q6(){na=[]}function G6(){}function ac(){Dg=!0}function lc(){if(Dg){if(Dg=!1,!Eo)return;setTimeout(function(){if(!Eo.contains(document.activeElement)){var t=(0,H6.default)(Eo)[0]||Eo;t.focus()}},0)}}function K6(){na.push(document.activeElement)}function Q6(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1,e=null;try{na.length!==0&&(e=na.pop(),e.focus({preventScroll:t}));return}catch{console.warn(["You tried to return focus to",e,"but it is not in the DOM anymore"].join(" "))}}function Y6(){na.length>0&&na.pop()}function X6(t){Eo=t,window.addEventListener?(window.addEventListener("blur",ac,!1),document.addEventListener("focus",lc,!0)):(window.attachEvent("onBlur",ac),document.attachEvent("onFocus",lc))}function J6(){Eo=null,window.addEventListener?(window.removeEventListener("blur",ac),document.removeEventListener("focus",lc)):(window.detachEvent("onBlur",ac),document.detachEvent("onFocus",lc))}var Ng={exports:{}};(function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=o;var n=$2,r=i(n);function i(a){return a&&a.__esModule?a:{default:a}}function s(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:document;return a.activeElement.shadowRoot?s(a.activeElement.shadowRoot):a.activeElement}function o(a,l){var c=(0,r.default)(a);if(!c.length){l.preventDefault();return}var u=void 0,h=l.shiftKey,m=c[0],v=c[c.length-1],x=s();if(a===x){if(!h)return;u=v}if(v===x&&!h&&(u=m),m===x&&h&&(u=v),u){l.preventDefault(),u.focus();return}var g=/(\bChrome\b|\bSafari\b)\//.exec(navigator.userAgent),S=g!=null&&g[1]!="Chrome"&&/\biPod\b|\biPad\b/g.exec(navigator.userAgent)==null;if(S){var w=c.indexOf(x);if(w>-1&&(w+=h?-1:1),u=c[w],typeof u>"u"){l.preventDefault(),u=h?v:m,u.focus();return}l.preventDefault(),u.focus()}}t.exports=e.default})(Ng,Ng.exports);var Z6=Ng.exports,Qn={},e9=function(){},t9=e9,zn={},B2={exports:{}};/*!
  Copyright (c) 2015 Jed Watson.
  Based on code that is Copyright 2013-2015, Facebook, Inc.
  All rights reserved.
*/(function(t){(function(){var e=!!(typeof window<"u"&&window.document&&window.document.createElement),n={canUseDOM:e,canUseWorkers:typeof Worker<"u",canUseEventListeners:e&&!!(window.addEventListener||window.attachEvent),canUseViewport:e&&!!window.screen};t.exports?t.exports=n:window.ExecutionEnvironment=n})()})(B2);var n9=B2.exports;Object.defineProperty(zn,"__esModule",{value:!0});zn.canUseDOM=zn.SafeNodeList=zn.SafeHTMLCollection=void 0;var r9=n9,i9=s9(r9);function s9(t){return t&&t.__esModule?t:{default:t}}var _h=i9.default,o9=_h.canUseDOM?window.HTMLElement:{};zn.SafeHTMLCollection=_h.canUseDOM?window.HTMLCollection:{};zn.SafeNodeList=_h.canUseDOM?window.NodeList:{};zn.canUseDOM=_h.canUseDOM;zn.default=o9;Object.defineProperty(Qn,"__esModule",{value:!0});Qn.resetState=d9;Qn.log=f9;Qn.assertNodeList=U2;Qn.setElement=h9;Qn.validateElement=pw;Qn.hide=p9;Qn.show=m9;Qn.documentNotReadyOrSSRTesting=g9;var a9=t9,l9=u9(a9),c9=zn;function u9(t){return t&&t.__esModule?t:{default:t}}var En=null;function d9(){En&&(En.removeAttribute?En.removeAttribute("aria-hidden"):En.length!=null?En.forEach(function(t){return t.removeAttribute("aria-hidden")}):document.querySelectorAll(En).forEach(function(t){return t.removeAttribute("aria-hidden")})),En=null}function f9(){}function U2(t,e){if(!t||!t.length)throw new Error("react-modal: No elements were found for selector "+e+".")}function h9(t){var e=t;if(typeof e=="string"&&c9.canUseDOM){var n=document.querySelectorAll(e);U2(n,e),e=n}return En=e||En,En}function pw(t){var e=t||En;return e?Array.isArray(e)||e instanceof HTMLCollection||e instanceof NodeList?e:[e]:((0,l9.default)(!1,["react-modal: App element is not defined.","Please use `Modal.setAppElement(el)` or set `appElement={el}`.","This is needed so screen readers don't see main content","when modal is opened. It is not recommended, but you can opt-out","by setting `ariaHideApp={false}`."].join(" ")),[])}function p9(t){var e=!0,n=!1,r=void 0;try{for(var i=pw(t)[Symbol.iterator](),s;!(e=(s=i.next()).done);e=!0){var o=s.value;o.setAttribute("aria-hidden","true")}}catch(a){n=!0,r=a}finally{try{!e&&i.return&&i.return()}finally{if(n)throw r}}}function m9(t){var e=!0,n=!1,r=void 0;try{for(var i=pw(t)[Symbol.iterator](),s;!(e=(s=i.next()).done);e=!0){var o=s.value;o.removeAttribute("aria-hidden")}}catch(a){n=!0,r=a}finally{try{!e&&i.return&&i.return()}finally{if(n)throw r}}}function g9(){En=null}var Ta={};Object.defineProperty(Ta,"__esModule",{value:!0});Ta.resetState=y9;Ta.log=v9;var _l={},El={};function CE(t,e){t.classList.remove(e)}function y9(){var t=document.getElementsByTagName("html")[0];for(var e in _l)CE(t,_l[e]);var n=document.body;for(var r in El)CE(n,El[r]);_l={},El={}}function v9(){}var w9=function(e,n){return e[n]||(e[n]=0),e[n]+=1,n},_9=function(e,n){return e[n]&&(e[n]-=1),n},E9=function(e,n,r){r.forEach(function(i){w9(n,i),e.add(i)})},T9=function(e,n,r){r.forEach(function(i){_9(n,i),n[i]===0&&e.remove(i)})};Ta.add=function(e,n){return E9(e.classList,e.nodeName.toLowerCase()=="html"?_l:El,n.split(" "))};Ta.remove=function(e,n){return T9(e.classList,e.nodeName.toLowerCase()=="html"?_l:El,n.split(" "))};var xa={};Object.defineProperty(xa,"__esModule",{value:!0});xa.log=S9;xa.resetState=b9;function x9(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var z2=function t(){var e=this;x9(this,t),this.register=function(n){e.openInstances.indexOf(n)===-1&&(e.openInstances.push(n),e.emit("register"))},this.deregister=function(n){var r=e.openInstances.indexOf(n);r!==-1&&(e.openInstances.splice(r,1),e.emit("deregister"))},this.subscribe=function(n){e.subscribers.push(n)},this.emit=function(n){e.subscribers.forEach(function(r){return r(n,e.openInstances.slice())})},this.openInstances=[],this.subscribers=[]},uf=new z2;function S9(){console.log("portalOpenInstances ----------"),console.log(uf.openInstances.length),uf.openInstances.forEach(function(t){return console.log(t)}),console.log("end portalOpenInstances ----------")}function b9(){uf=new z2}xa.default=uf;var mw={};Object.defineProperty(mw,"__esModule",{value:!0});mw.resetState=P9;mw.log=k9;var C9=xa,I9=A9(C9);function A9(t){return t&&t.__esModule?t:{default:t}}var Nt=void 0,Ln=void 0,ms=[];function P9(){for(var t=[Nt,Ln],e=0;e<t.length;e++){var n=t[e];n&&n.parentNode&&n.parentNode.removeChild(n)}Nt=Ln=null,ms=[]}function k9(){console.log("bodyTrap ----------"),console.log(ms.length);for(var t=[Nt,Ln],e=0;e<t.length;e++){var n=t[e],r=n||{};console.log(r.nodeName,r.className,r.id)}console.log("edn bodyTrap ----------")}function IE(){ms.length!==0&&ms[ms.length-1].focusContent()}function R9(t,e){!Nt&&!Ln&&(Nt=document.createElement("div"),Nt.setAttribute("data-react-modal-body-trap",""),Nt.style.position="absolute",Nt.style.opacity="0",Nt.setAttribute("tabindex","0"),Nt.addEventListener("focus",IE),Ln=Nt.cloneNode(),Ln.addEventListener("focus",IE)),ms=e,ms.length>0?(document.body.firstChild!==Nt&&document.body.insertBefore(Nt,document.body.firstChild),document.body.lastChild!==Ln&&document.body.appendChild(Ln)):(Nt.parentElement&&Nt.parentElement.removeChild(Nt),Ln.parentElement&&Ln.parentElement.removeChild(Ln))}I9.default.subscribe(R9);(function(t,e){Object.defineProperty(e,"__esModule",{value:!0});var n=Object.assign||function(M){for(var V=1;V<arguments.length;V++){var q=arguments[V];for(var k in q)Object.prototype.hasOwnProperty.call(q,k)&&(M[k]=q[k])}return M},r=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(M){return typeof M}:function(M){return M&&typeof Symbol=="function"&&M.constructor===Symbol&&M!==Symbol.prototype?"symbol":typeof M},i=function(){function M(V,q){for(var k=0;k<q.length;k++){var D=q[k];D.enumerable=D.enumerable||!1,D.configurable=!0,"value"in D&&(D.writable=!0),Object.defineProperty(V,D.key,D)}}return function(V,q,k){return q&&M(V.prototype,q),k&&M(V,k),V}}(),s=A,o=hw,a=C(o),l=Kn,c=E(l),u=Z6,h=C(u),m=Qn,v=E(m),x=Ta,g=E(x),S=zn,w=C(S),p=xa,y=C(p);function E(M){if(M&&M.__esModule)return M;var V={};if(M!=null)for(var q in M)Object.prototype.hasOwnProperty.call(M,q)&&(V[q]=M[q]);return V.default=M,V}function C(M){return M&&M.__esModule?M:{default:M}}function I(M,V){if(!(M instanceof V))throw new TypeError("Cannot call a class as a function")}function P(M,V){if(!M)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return V&&(typeof V=="object"||typeof V=="function")?V:M}function R(M,V){if(typeof V!="function"&&V!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof V);M.prototype=Object.create(V&&V.prototype,{constructor:{value:M,enumerable:!1,writable:!0,configurable:!0}}),V&&(Object.setPrototypeOf?Object.setPrototypeOf(M,V):M.__proto__=V)}var N={overlay:"ReactModal__Overlay",content:"ReactModal__Content"},O=function(V){return V.code==="Tab"||V.keyCode===9},U=function(V){return V.code==="Escape"||V.keyCode===27},W=0,F=function(M){R(V,M);function V(q){I(this,V);var k=P(this,(V.__proto__||Object.getPrototypeOf(V)).call(this,q));return k.setOverlayRef=function(D){k.overlay=D,k.props.overlayRef&&k.props.overlayRef(D)},k.setContentRef=function(D){k.content=D,k.props.contentRef&&k.props.contentRef(D)},k.afterClose=function(){var D=k.props,B=D.appElement,K=D.ariaHideApp,re=D.htmlOpenClassName,ue=D.bodyOpenClassName,ke=D.parentSelector,fe=ke&&ke().ownerDocument||document;ue&&g.remove(fe.body,ue),re&&g.remove(fe.getElementsByTagName("html")[0],re),K&&W>0&&(W-=1,W===0&&v.show(B)),k.props.shouldFocusAfterRender&&(k.props.shouldReturnFocusAfterClose?(c.returnFocus(k.props.preventScroll),c.teardownScopedFocus()):c.popWithoutFocus()),k.props.onAfterClose&&k.props.onAfterClose(),y.default.deregister(k)},k.open=function(){k.beforeOpen(),k.state.afterOpen&&k.state.beforeClose?(clearTimeout(k.closeTimer),k.setState({beforeClose:!1})):(k.props.shouldFocusAfterRender&&(c.setupScopedFocus(k.node),c.markForFocusLater()),k.setState({isOpen:!0},function(){k.openAnimationFrame=requestAnimationFrame(function(){k.setState({afterOpen:!0}),k.props.isOpen&&k.props.onAfterOpen&&k.props.onAfterOpen({overlayEl:k.overlay,contentEl:k.content})})}))},k.close=function(){k.props.closeTimeoutMS>0?k.closeWithTimeout():k.closeWithoutTimeout()},k.focusContent=function(){return k.content&&!k.contentHasFocus()&&k.content.focus({preventScroll:!0})},k.closeWithTimeout=function(){var D=Date.now()+k.props.closeTimeoutMS;k.setState({beforeClose:!0,closesAt:D},function(){k.closeTimer=setTimeout(k.closeWithoutTimeout,k.state.closesAt-Date.now())})},k.closeWithoutTimeout=function(){k.setState({beforeClose:!1,isOpen:!1,afterOpen:!1,closesAt:null},k.afterClose)},k.handleKeyDown=function(D){O(D)&&(0,h.default)(k.content,D),k.props.shouldCloseOnEsc&&U(D)&&(D.stopPropagation(),k.requestClose(D))},k.handleOverlayOnClick=function(D){k.shouldClose===null&&(k.shouldClose=!0),k.shouldClose&&k.props.shouldCloseOnOverlayClick&&(k.ownerHandlesClose()?k.requestClose(D):k.focusContent()),k.shouldClose=null},k.handleContentOnMouseUp=function(){k.shouldClose=!1},k.handleOverlayOnMouseDown=function(D){!k.props.shouldCloseOnOverlayClick&&D.target==k.overlay&&D.preventDefault()},k.handleContentOnClick=function(){k.shouldClose=!1},k.handleContentOnMouseDown=function(){k.shouldClose=!1},k.requestClose=function(D){return k.ownerHandlesClose()&&k.props.onRequestClose(D)},k.ownerHandlesClose=function(){return k.props.onRequestClose},k.shouldBeClosed=function(){return!k.state.isOpen&&!k.state.beforeClose},k.contentHasFocus=function(){return document.activeElement===k.content||k.content.contains(document.activeElement)},k.buildClassName=function(D,B){var K=(typeof B>"u"?"undefined":r(B))==="object"?B:{base:N[D],afterOpen:N[D]+"--after-open",beforeClose:N[D]+"--before-close"},re=K.base;return k.state.afterOpen&&(re=re+" "+K.afterOpen),k.state.beforeClose&&(re=re+" "+K.beforeClose),typeof B=="string"&&B?re+" "+B:re},k.attributesFromObject=function(D,B){return Object.keys(B).reduce(function(K,re){return K[D+"-"+re]=B[re],K},{})},k.state={afterOpen:!1,beforeClose:!1},k.shouldClose=null,k.moveFromContentToOverlay=null,k}return i(V,[{key:"componentDidMount",value:function(){this.props.isOpen&&this.open()}},{key:"componentDidUpdate",value:function(k,D){this.props.isOpen&&!k.isOpen?this.open():!this.props.isOpen&&k.isOpen&&this.close(),this.props.shouldFocusAfterRender&&this.state.isOpen&&!D.isOpen&&this.focusContent()}},{key:"componentWillUnmount",value:function(){this.state.isOpen&&this.afterClose(),clearTimeout(this.closeTimer),cancelAnimationFrame(this.openAnimationFrame)}},{key:"beforeOpen",value:function(){var k=this.props,D=k.appElement,B=k.ariaHideApp,K=k.htmlOpenClassName,re=k.bodyOpenClassName,ue=k.parentSelector,ke=ue&&ue().ownerDocument||document;re&&g.add(ke.body,re),K&&g.add(ke.getElementsByTagName("html")[0],K),B&&(W+=1,v.hide(D)),y.default.register(this)}},{key:"render",value:function(){var k=this.props,D=k.id,B=k.className,K=k.overlayClassName,re=k.defaultStyles,ue=k.children,ke=B?{}:re.content,fe=K?{}:re.overlay;if(this.shouldBeClosed())return null;var nt={ref:this.setOverlayRef,className:this.buildClassName("overlay",K),style:n({},fe,this.props.style.overlay),onClick:this.handleOverlayOnClick,onMouseDown:this.handleOverlayOnMouseDown},ve=n({id:D,ref:this.setContentRef,style:n({},ke,this.props.style.content),className:this.buildClassName("content",B),tabIndex:"-1",onKeyDown:this.handleKeyDown,onMouseDown:this.handleContentOnMouseDown,onMouseUp:this.handleContentOnMouseUp,onClick:this.handleContentOnClick,role:this.props.role,"aria-label":this.props.contentLabel},this.attributesFromObject("aria",n({modal:!0},this.props.aria)),this.attributesFromObject("data",this.props.data||{}),{"data-testid":this.props.testId}),lt=this.props.contentElement(ve,ue);return this.props.overlayElement(nt,lt)}}]),V}(s.Component);F.defaultProps={style:{overlay:{},content:{}},defaultStyles:{}},F.propTypes={isOpen:a.default.bool.isRequired,defaultStyles:a.default.shape({content:a.default.object,overlay:a.default.object}),style:a.default.shape({content:a.default.object,overlay:a.default.object}),className:a.default.oneOfType([a.default.string,a.default.object]),overlayClassName:a.default.oneOfType([a.default.string,a.default.object]),parentSelector:a.default.func,bodyOpenClassName:a.default.string,htmlOpenClassName:a.default.string,ariaHideApp:a.default.bool,appElement:a.default.oneOfType([a.default.instanceOf(w.default),a.default.instanceOf(S.SafeHTMLCollection),a.default.instanceOf(S.SafeNodeList),a.default.arrayOf(a.default.instanceOf(w.default))]),onAfterOpen:a.default.func,onAfterClose:a.default.func,onRequestClose:a.default.func,closeTimeoutMS:a.default.number,shouldFocusAfterRender:a.default.bool,shouldCloseOnOverlayClick:a.default.bool,shouldReturnFocusAfterClose:a.default.bool,preventScroll:a.default.bool,role:a.default.string,contentLabel:a.default.string,aria:a.default.object,data:a.default.object,children:a.default.node,shouldCloseOnEsc:a.default.bool,overlayRef:a.default.func,contentRef:a.default.func,id:a.default.string,overlayElement:a.default.func,contentElement:a.default.func,testId:a.default.string},e.default=F,t.exports=e.default})(Rg,Rg.exports);var O9=Rg.exports;function H2(){var t=this.constructor.getDerivedStateFromProps(this.props,this.state);t!=null&&this.setState(t)}function W2(t){function e(n){var r=this.constructor.getDerivedStateFromProps(t,n);return r??null}this.setState(e.bind(this))}function q2(t,e){try{var n=this.props,r=this.state;this.props=t,this.state=e,this.__reactInternalSnapshotFlag=!0,this.__reactInternalSnapshot=this.getSnapshotBeforeUpdate(n,r)}finally{this.props=n,this.state=r}}H2.__suppressDeprecationWarning=!0;W2.__suppressDeprecationWarning=!0;q2.__suppressDeprecationWarning=!0;function D9(t){var e=t.prototype;if(!e||!e.isReactComponent)throw new Error("Can only polyfill class components");if(typeof t.getDerivedStateFromProps!="function"&&typeof e.getSnapshotBeforeUpdate!="function")return t;var n=null,r=null,i=null;if(typeof e.componentWillMount=="function"?n="componentWillMount":typeof e.UNSAFE_componentWillMount=="function"&&(n="UNSAFE_componentWillMount"),typeof e.componentWillReceiveProps=="function"?r="componentWillReceiveProps":typeof e.UNSAFE_componentWillReceiveProps=="function"&&(r="UNSAFE_componentWillReceiveProps"),typeof e.componentWillUpdate=="function"?i="componentWillUpdate":typeof e.UNSAFE_componentWillUpdate=="function"&&(i="UNSAFE_componentWillUpdate"),n!==null||r!==null||i!==null){var s=t.displayName||t.name,o=typeof t.getDerivedStateFromProps=="function"?"getDerivedStateFromProps()":"getSnapshotBeforeUpdate()";throw Error(`Unsafe legacy lifecycles will not be called for components using new component APIs.

`+s+" uses "+o+" but also contains the following legacy lifecycles:"+(n!==null?`
  `+n:"")+(r!==null?`
  `+r:"")+(i!==null?`
  `+i:"")+`

The above lifecycles should be removed. Learn more about this warning here:
https://fb.me/react-async-component-lifecycle-hooks`)}if(typeof t.getDerivedStateFromProps=="function"&&(e.componentWillMount=H2,e.componentWillReceiveProps=W2),typeof e.getSnapshotBeforeUpdate=="function"){if(typeof e.componentDidUpdate!="function")throw new Error("Cannot polyfill getSnapshotBeforeUpdate() for components that do not define componentDidUpdate() on the prototype");e.componentWillUpdate=q2;var a=e.componentDidUpdate;e.componentDidUpdate=function(c,u,h){var m=this.__reactInternalSnapshotFlag?this.__reactInternalSnapshot:h;a.call(this,c,u,m)}}return t}const N9=Object.freeze(Object.defineProperty({__proto__:null,polyfill:D9},Symbol.toStringTag,{value:"Module"})),L9=Rk(N9);Object.defineProperty(ks,"__esModule",{value:!0});ks.bodyOpenClassName=ks.portalClassName=void 0;var AE=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},M9=function(){function t(e,n){for(var r=0;r<n.length;r++){var i=n[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),G2=A,df=Fc(G2),V9=cS,ff=Fc(V9),j9=hw,ae=Fc(j9),F9=O9,PE=Fc(F9),$9=Qn,B9=z9($9),fi=zn,kE=Fc(fi),U9=L9;function z9(t){if(t&&t.__esModule)return t;var e={};if(t!=null)for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e}function Fc(t){return t&&t.__esModule?t:{default:t}}function H9(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function RE(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e&&(typeof e=="object"||typeof e=="function")?e:t}function W9(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}var q9=ks.portalClassName="ReactModalPortal",G9=ks.bodyOpenClassName="ReactModal__Body--open",Ji=fi.canUseDOM&&ff.default.createPortal!==void 0,OE=function(e){return document.createElement(e)},DE=function(){return Ji?ff.default.createPortal:ff.default.unstable_renderSubtreeIntoContainer};function Au(t){return t()}var $c=function(t){W9(e,t);function e(){var n,r,i,s;H9(this,e);for(var o=arguments.length,a=Array(o),l=0;l<o;l++)a[l]=arguments[l];return s=(r=(i=RE(this,(n=e.__proto__||Object.getPrototypeOf(e)).call.apply(n,[this].concat(a))),i),i.removePortal=function(){!Ji&&ff.default.unmountComponentAtNode(i.node);var c=Au(i.props.parentSelector);c&&c.contains(i.node)?c.removeChild(i.node):console.warn('React-Modal: "parentSelector" prop did not returned any DOM element. Make sure that the parent element is unmounted to avoid any memory leaks.')},i.portalRef=function(c){i.portal=c},i.renderPortal=function(c){var u=DE(),h=u(i,df.default.createElement(PE.default,AE({defaultStyles:e.defaultStyles},c)),i.node);i.portalRef(h)},r),RE(i,s)}return M9(e,[{key:"componentDidMount",value:function(){if(fi.canUseDOM){Ji||(this.node=OE("div")),this.node.className=this.props.portalClassName;var r=Au(this.props.parentSelector);r.appendChild(this.node),!Ji&&this.renderPortal(this.props)}}},{key:"getSnapshotBeforeUpdate",value:function(r){var i=Au(r.parentSelector),s=Au(this.props.parentSelector);return{prevParent:i,nextParent:s}}},{key:"componentDidUpdate",value:function(r,i,s){if(fi.canUseDOM){var o=this.props,a=o.isOpen,l=o.portalClassName;r.portalClassName!==l&&(this.node.className=l);var c=s.prevParent,u=s.nextParent;u!==c&&(c.removeChild(this.node),u.appendChild(this.node)),!(!r.isOpen&&!a)&&!Ji&&this.renderPortal(this.props)}}},{key:"componentWillUnmount",value:function(){if(!(!fi.canUseDOM||!this.node||!this.portal)){var r=this.portal.state,i=Date.now(),s=r.isOpen&&this.props.closeTimeoutMS&&(r.closesAt||i+this.props.closeTimeoutMS);s?(r.beforeClose||this.portal.closeWithTimeout(),setTimeout(this.removePortal,s-i)):this.removePortal()}}},{key:"render",value:function(){if(!fi.canUseDOM||!Ji)return null;!this.node&&Ji&&(this.node=OE("div"));var r=DE();return r(df.default.createElement(PE.default,AE({ref:this.portalRef,defaultStyles:e.defaultStyles},this.props)),this.node)}}],[{key:"setAppElement",value:function(r){B9.setElement(r)}}]),e}(G2.Component);$c.propTypes={isOpen:ae.default.bool.isRequired,style:ae.default.shape({content:ae.default.object,overlay:ae.default.object}),portalClassName:ae.default.string,bodyOpenClassName:ae.default.string,htmlOpenClassName:ae.default.string,className:ae.default.oneOfType([ae.default.string,ae.default.shape({base:ae.default.string.isRequired,afterOpen:ae.default.string.isRequired,beforeClose:ae.default.string.isRequired})]),overlayClassName:ae.default.oneOfType([ae.default.string,ae.default.shape({base:ae.default.string.isRequired,afterOpen:ae.default.string.isRequired,beforeClose:ae.default.string.isRequired})]),appElement:ae.default.oneOfType([ae.default.instanceOf(kE.default),ae.default.instanceOf(fi.SafeHTMLCollection),ae.default.instanceOf(fi.SafeNodeList),ae.default.arrayOf(ae.default.instanceOf(kE.default))]),onAfterOpen:ae.default.func,onRequestClose:ae.default.func,closeTimeoutMS:ae.default.number,ariaHideApp:ae.default.bool,shouldFocusAfterRender:ae.default.bool,shouldCloseOnOverlayClick:ae.default.bool,shouldReturnFocusAfterClose:ae.default.bool,preventScroll:ae.default.bool,parentSelector:ae.default.func,aria:ae.default.object,data:ae.default.object,role:ae.default.string,contentLabel:ae.default.string,shouldCloseOnEsc:ae.default.bool,overlayRef:ae.default.func,contentRef:ae.default.func,id:ae.default.string,overlayElement:ae.default.func,contentElement:ae.default.func};$c.defaultProps={isOpen:!1,portalClassName:q9,bodyOpenClassName:G9,role:"dialog",ariaHideApp:!0,closeTimeoutMS:0,shouldFocusAfterRender:!0,shouldCloseOnEsc:!0,shouldCloseOnOverlayClick:!0,shouldReturnFocusAfterClose:!0,preventScroll:!1,parentSelector:function(){return document.body},overlayElement:function(e,n){return df.default.createElement("div",e,n)},contentElement:function(e,n){return df.default.createElement("div",e,n)}};$c.defaultStyles={overlay:{position:"fixed",top:0,left:0,right:0,bottom:0,backgroundColor:"rgba(255, 255, 255, 0.75)"},content:{position:"absolute",top:"40px",left:"40px",right:"40px",bottom:"40px",border:"1px solid #ccc",background:"#fff",overflow:"auto",WebkitOverflowScrolling:"touch",borderRadius:"4px",outline:"none",padding:"20px"}};(0,U9.polyfill)($c);ks.default=$c;(function(t,e){Object.defineProperty(e,"__esModule",{value:!0});var n=ks,r=i(n);function i(s){return s&&s.__esModule?s:{default:s}}e.default=r.default,t.exports=e.default})(kg,kg.exports);var K9=kg.exports;const Q9=yf(K9),Y9=j.img`
  width: 100%;
  height: auto;
`,X9=j.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`,J9=j.button`
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
`,Z9=({images:t,closeModal:e})=>T.jsxs("div",{children:[T.jsx(dw,{slidesPerView:1,pagination:{clickable:!0},loop:!0,navigation:!0,modules:[M2,L2],children:t.map((n,r)=>T.jsx(fw,{children:T.jsx(Y9,{src:n.urlImage,alt:"Imagen"})},r))}),T.jsx(X9,{children:T.jsx(J9,{onClick:e,children:"Cerrar"})})]}),e8={content:{top:"55%",left:"50%",right:"auto",bottom:"auto",marginRight:"-50%",transform:"translate(-50%, -50%)",width:"50%",maxWidth:"1000px",height:"80vh"}},t8=()=>{var E;const{id:t}=DD(),{categorias:e}=A.useContext(On).contextValue,[n,r]=A.useState(null),[i,s]=A.useState(null),[o,a]=A.useState(0),[l,c]=A.useState(!1);A.useEffect(()=>{(async()=>{var P;const I=await LB(t);r(I),s((P=I.imagenes[0])==null?void 0:P.urlImage)})(),window.scrollTo(0,0)},[]);const u=C=>e.find(P=>P.id===C).titulo,h=C=>{o!==C&&(s(x[C].urlImagen),a(C))},m=()=>{console.log("click en la imagen"),c(!0)},v=()=>{c(!1)};if(!n)return T.jsx("p",{children:"Cargando..."});const{imagenes:x,titulo:g,precio:S,descripcion:w,categoria:p,detalles:y}=n;return T.jsxs(T.Fragment,{children:[T.jsxs(x6,{children:[T.jsxs(S6,{children:[T.jsxs(b6,{children:[T.jsxs(Jt,{to:"/",children:[T.jsx("img",{src:j6,alt:"flecha"}),"Volver"]}),T.jsx(C6,{children:g})]}),T.jsxs(I6,{children:[T.jsxs(A6,{children:[T.jsx(P6,{children:i&&T.jsx("img",{src:i,alt:"Imagen",onClick:m})}),T.jsx(k6,{children:(E=n.imagenes)==null?void 0:E.map((C,I)=>T.jsx("img",{src:C.urlImage,alt:C.urlImage,onClick:()=>h(I),className:o===I?"selected":""},I))})]}),T.jsxs(R6,{children:[T.jsx(O6,{children:w}),T.jsxs(D6,{children:["Categoría: ",u(p)]}),T.jsxs(N6,{children:["$ ",S," x día"]}),y.length?T.jsxs(L6,{children:[T.jsx("p",{children:"Que incluye:"}),T.jsx("ul",{children:T.jsx(V6,{children:y==null?void 0:y.map((C,I)=>T.jsxs("li",{children:[T.jsx("img",{src:C.icon}),T.jsx("p",{children:C.name})]},I))})})]}):null,T.jsx(M6,{children:"Reservar"})]})]})]}),T.jsx(Q9,{isOpen:l,style:e8,ariaHideApp:!1,children:T.jsx(Z9,{images:x,closeModal:v})})]}),T.jsx(wh,{})]})},n8=j.div`
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
`,r8=j.h1`
  color: white;
  text-align: center;
  text-transform: uppercase;
  padding: 10px;
  font-size: 40px;
`,i8=j.div`
  margin-top: 32px;
  width: 100%;
  border-radius: 8px;
  background-color: rgba(225, 225, 225, 0.5);
  box-shadow: 0px 1px 4px 5px rgba(0, 0, 0, 0.2);
`,s8=j.div`
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
`,o8=j.h2`
  margin: 0 auto;
  text-align: center;
  padding: 10px 40px;
  font-size: 50px;
  color: white;
  font-weight: 700;

  @media (max-width: 550px) {
    font-size: 30px;
  }
`,a8=j.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 14px;
  border-radius: 8px;
  background: rgba(100, 100, 100, 0.3);
`,Pu=j.button`
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
`;var K2={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},NE=te.createContext&&te.createContext(K2),Ci=globalThis&&globalThis.__assign||function(){return Ci=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++){e=arguments[n];for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i])}return t},Ci.apply(this,arguments)},l8=globalThis&&globalThis.__rest||function(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n};function Q2(t){return t&&t.map(function(e,n){return te.createElement(e.tag,Ci({key:n},e.attr),Q2(e.child))})}function Bc(t){return function(e){return te.createElement(c8,Ci({attr:Ci({},t.attr)},e),Q2(t.child))}}function c8(t){var e=function(n){var r=t.attr,i=t.size,s=t.title,o=l8(t,["attr","size","title"]),a=i||n.size||"1em",l;return n.className&&(l=n.className),t.className&&(l=(l?l+" ":"")+t.className),te.createElement("svg",Ci({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,r,o,{className:l,style:Ci(Ci({color:t.color||n.color},n.style),t.style),height:a,width:a,xmlns:"http://www.w3.org/2000/svg"}),s&&te.createElement("title",null,s),t.children)};return NE!==void 0?te.createElement(NE.Consumer,null,function(n){return e(n)}):e(K2)}function u8(t){return Bc({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{fillRule:"evenodd",d:"M15.528 2.973a.75.75 0 0 1 .472.696v8.662a.75.75 0 0 1-.472.696l-7.25 2.9a.75.75 0 0 1-.557 0l-7.25-2.9A.75.75 0 0 1 0 12.331V3.669a.75.75 0 0 1 .471-.696L7.443.184l.01-.003.268-.108a.75.75 0 0 1 .558 0l.269.108.01.003 6.97 2.789ZM10.404 2 4.25 4.461 1.846 3.5 1 3.839v.4l6.5 2.6v7.922l.5.2.5-.2V6.84l6.5-2.6v-.4l-.846-.339L8 5.961 5.596 5l6.154-2.461L10.404 2Z"}}]})(t)}function d8(t){return Bc({tag:"svg",attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM0 482.3C0 383.8 79.8 304 178.3 304h91.4C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3zM609.3 512H471.4c5.4-9.4 8.6-20.3 8.6-32v-8c0-60.7-27.1-115.2-69.8-151.8c2.4-.1 4.7-.2 7.1-.2h61.4C567.8 320 640 392.2 640 481.3c0 17-13.8 30.7-30.7 30.7zM432 256c-31 0-59-12.6-79.3-32.9C372.4 196.5 384 163.6 384 128c0-26.8-6.6-52.1-18.3-74.3C384.3 40.1 407.2 32 432 32c61.9 0 112 50.1 112 112s-50.1 112-112 112z"}}]})(t)}function f8(t){return Bc({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M464 480H48c-26.51 0-48-21.49-48-48V80c0-26.51 21.49-48 48-48h416c26.51 0 48 21.49 48 48v352c0 26.51-21.49 48-48 48zM128 120c-22.091 0-40 17.909-40 40s17.909 40 40 40 40-17.909 40-40-17.909-40-40-40zm0 96c-22.091 0-40 17.909-40 40s17.909 40 40 40 40-17.909 40-40-17.909-40-40-40zm0 96c-22.091 0-40 17.909-40 40s17.909 40 40 40 40-17.909 40-40-17.909-40-40-40zm288-136v-32c0-6.627-5.373-12-12-12H204c-6.627 0-12 5.373-12 12v32c0 6.627 5.373 12 12 12h200c6.627 0 12-5.373 12-12zm0 96v-32c0-6.627-5.373-12-12-12H204c-6.627 0-12 5.373-12 12v32c0 6.627 5.373 12 12 12h200c6.627 0 12-5.373 12-12zm0 96v-32c0-6.627-5.373-12-12-12H204c-6.627 0-12 5.373-12 12v32c0 6.627 5.373 12 12 12h200c6.627 0 12-5.373 12-12z"}}]})(t)}function h8(t){return Bc({tag:"svg",attr:{version:"1.1",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M12 10v-2h-5v-2h5v-2l3 3zM11 9v4h-5v3l-6-3v-13h11v5h-1v-4h-8l4 2v9h4v-3z"}}]})(t)}const p8=t=>{const{handleClick:e}=t;return T.jsxs(a8,{children:[T.jsxs(Pu,{onClick:()=>e("SectionProducts"),children:[T.jsx(u8,{}),"Productos"]}),T.jsxs(Pu,{onClick:()=>e("ListUsers"),children:[T.jsx(d8,{}),"Usuarios"]}),T.jsxs(Pu,{onClick:()=>e("SectionCategories"),children:[T.jsx(f8,{}),"Categorías"]}),T.jsxs(Pu,{onClick:()=>e("Exit"),children:[T.jsx(h8,{}),"Salir"]})]})},m8=j.div`
  width: 100%;
  padding: 14px;
  display: flex;
  flex-direction: column;
  gap: 5px;
  margin-bottom: 100px;
`,g8=j.div`
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
`,y8=j.div`
  display: flex;
  justify-content: space-between;
  height: 40px;
`,v8=j.p`
  width: 300px;
`,w8=j.div`
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
`,_8=j.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
`,E8=j.button`
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
`;function Y2(t){var e,n,r="";if(typeof t=="string"||typeof t=="number")r+=t;else if(typeof t=="object")if(Array.isArray(t))for(e=0;e<t.length;e++)t[e]&&(n=Y2(t[e]))&&(r&&(r+=" "),r+=n);else for(e in t)t[e]&&(r&&(r+=" "),r+=e);return r}function hi(){for(var t,e,n=0,r="";n<arguments.length;)(t=arguments[n++])&&(e=Y2(t))&&(r&&(r+=" "),r+=e);return r}const Tl=t=>typeof t=="number"&&!isNaN(t),Rs=t=>typeof t=="string",tn=t=>typeof t=="function",id=t=>Rs(t)||tn(t)?t:null,jp=t=>A.isValidElement(t)||Rs(t)||tn(t)||Tl(t);function T8(t,e,n){n===void 0&&(n=300);const{scrollHeight:r,style:i}=t;requestAnimationFrame(()=>{i.minHeight="initial",i.height=r+"px",i.transition=`all ${n}ms`,requestAnimationFrame(()=>{i.height="0",i.padding="0",i.margin="0",setTimeout(e,n)})})}function Eh(t){let{enter:e,exit:n,appendPosition:r=!1,collapse:i=!0,collapseDuration:s=300}=t;return function(o){let{children:a,position:l,preventExitTransition:c,done:u,nodeRef:h,isIn:m}=o;const v=r?`${e}--${l}`:e,x=r?`${n}--${l}`:n,g=A.useRef(0);return A.useLayoutEffect(()=>{const S=h.current,w=v.split(" "),p=y=>{y.target===h.current&&(S.dispatchEvent(new Event("d")),S.removeEventListener("animationend",p),S.removeEventListener("animationcancel",p),g.current===0&&y.type!=="animationcancel"&&S.classList.remove(...w))};S.classList.add(...w),S.addEventListener("animationend",p),S.addEventListener("animationcancel",p)},[]),A.useEffect(()=>{const S=h.current,w=()=>{S.removeEventListener("animationend",w),i?T8(S,u,s):u()};m||(c?w():(g.current=1,S.className+=` ${x}`,S.addEventListener("animationend",w)))},[m]),te.createElement(te.Fragment,null,a)}}function LE(t,e){return t!=null?{content:t.content,containerId:t.props.containerId,id:t.props.toastId,theme:t.props.theme,type:t.props.type,data:t.props.data||{},isLoading:t.props.isLoading,icon:t.props.icon,status:e}:{}}const Tn={list:new Map,emitQueue:new Map,on(t,e){return this.list.has(t)||this.list.set(t,[]),this.list.get(t).push(e),this},off(t,e){if(e){const n=this.list.get(t).filter(r=>r!==e);return this.list.set(t,n),this}return this.list.delete(t),this},cancelEmit(t){const e=this.emitQueue.get(t);return e&&(e.forEach(clearTimeout),this.emitQueue.delete(t)),this},emit(t){this.list.has(t)&&this.list.get(t).forEach(e=>{const n=setTimeout(()=>{e(...[].slice.call(arguments,1))},0);this.emitQueue.has(t)||this.emitQueue.set(t,[]),this.emitQueue.get(t).push(n)})}},ku=t=>{let{theme:e,type:n,...r}=t;return te.createElement("svg",{viewBox:"0 0 24 24",width:"100%",height:"100%",fill:e==="colored"?"currentColor":`var(--toastify-icon-color-${n})`,...r})},Fp={info:function(t){return te.createElement(ku,{...t},te.createElement("path",{d:"M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z"}))},warning:function(t){return te.createElement(ku,{...t},te.createElement("path",{d:"M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z"}))},success:function(t){return te.createElement(ku,{...t},te.createElement("path",{d:"M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z"}))},error:function(t){return te.createElement(ku,{...t},te.createElement("path",{d:"M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z"}))},spinner:function(){return te.createElement("div",{className:"Toastify__spinner"})}};function x8(t){const[,e]=A.useReducer(v=>v+1,0),[n,r]=A.useState([]),i=A.useRef(null),s=A.useRef(new Map).current,o=v=>n.indexOf(v)!==-1,a=A.useRef({toastKey:1,displayedToast:0,count:0,queue:[],props:t,containerId:null,isToastActive:o,getToast:v=>s.get(v)}).current;function l(v){let{containerId:x}=v;const{limit:g}=a.props;!g||x&&a.containerId!==x||(a.count-=a.queue.length,a.queue=[])}function c(v){r(x=>v==null?[]:x.filter(g=>g!==v))}function u(){const{toastContent:v,toastProps:x,staleId:g}=a.queue.shift();m(v,x,g)}function h(v,x){let{delay:g,staleId:S,...w}=x;if(!jp(v)||function(W){return!i.current||a.props.enableMultiContainer&&W.containerId!==a.props.containerId||s.has(W.toastId)&&W.updateId==null}(w))return;const{toastId:p,updateId:y,data:E}=w,{props:C}=a,I=()=>c(p),P=y==null;P&&a.count++;const R={...C,style:C.toastStyle,key:a.toastKey++,...Object.fromEntries(Object.entries(w).filter(W=>{let[F,M]=W;return M!=null})),toastId:p,updateId:y,data:E,closeToast:I,isIn:!1,className:id(w.className||C.toastClassName),bodyClassName:id(w.bodyClassName||C.bodyClassName),progressClassName:id(w.progressClassName||C.progressClassName),autoClose:!w.isLoading&&(N=w.autoClose,O=C.autoClose,N===!1||Tl(N)&&N>0?N:O),deleteToast(){const W=LE(s.get(p),"removed");s.delete(p),Tn.emit(4,W);const F=a.queue.length;if(a.count=p==null?a.count-a.displayedToast:a.count-1,a.count<0&&(a.count=0),F>0){const M=p==null?a.props.limit:1;if(F===1||M===1)a.displayedToast++,u();else{const V=M>F?F:M;a.displayedToast=V;for(let q=0;q<V;q++)u()}}else e()}};var N,O;R.iconOut=function(W){let{theme:F,type:M,isLoading:V,icon:q}=W,k=null;const D={theme:F,type:M};return q===!1||(tn(q)?k=q(D):A.isValidElement(q)?k=A.cloneElement(q,D):Rs(q)||Tl(q)?k=q:V?k=Fp.spinner():(B=>B in Fp)(M)&&(k=Fp[M](D))),k}(R),tn(w.onOpen)&&(R.onOpen=w.onOpen),tn(w.onClose)&&(R.onClose=w.onClose),R.closeButton=C.closeButton,w.closeButton===!1||jp(w.closeButton)?R.closeButton=w.closeButton:w.closeButton===!0&&(R.closeButton=!jp(C.closeButton)||C.closeButton);let U=v;A.isValidElement(v)&&!Rs(v.type)?U=A.cloneElement(v,{closeToast:I,toastProps:R,data:E}):tn(v)&&(U=v({closeToast:I,toastProps:R,data:E})),C.limit&&C.limit>0&&a.count>C.limit&&P?a.queue.push({toastContent:U,toastProps:R,staleId:S}):Tl(g)?setTimeout(()=>{m(U,R,S)},g):m(U,R,S)}function m(v,x,g){const{toastId:S}=x;g&&s.delete(g);const w={content:v,props:x};s.set(S,w),r(p=>[...p,S].filter(y=>y!==g)),Tn.emit(4,LE(w,w.props.updateId==null?"added":"updated"))}return A.useEffect(()=>(a.containerId=t.containerId,Tn.cancelEmit(3).on(0,h).on(1,v=>i.current&&c(v)).on(5,l).emit(2,a),()=>{s.clear(),Tn.emit(3,a)}),[]),A.useEffect(()=>{a.props=t,a.isToastActive=o,a.displayedToast=n.length}),{getToastToRender:function(v){const x=new Map,g=Array.from(s.values());return t.newestOnTop&&g.reverse(),g.forEach(S=>{const{position:w}=S.props;x.has(w)||x.set(w,[]),x.get(w).push(S)}),Array.from(x,S=>v(S[0],S[1]))},containerRef:i,isToastActive:o}}function ME(t){return t.targetTouches&&t.targetTouches.length>=1?t.targetTouches[0].clientX:t.clientX}function VE(t){return t.targetTouches&&t.targetTouches.length>=1?t.targetTouches[0].clientY:t.clientY}function S8(t){const[e,n]=A.useState(!1),[r,i]=A.useState(!1),s=A.useRef(null),o=A.useRef({start:0,x:0,y:0,delta:0,removalDistance:0,canCloseOnClick:!0,canDrag:!1,boundingRect:null,didMove:!1}).current,a=A.useRef(t),{autoClose:l,pauseOnHover:c,closeToast:u,onClick:h,closeOnClick:m}=t;function v(E){if(t.draggable){E.nativeEvent.type==="touchstart"&&E.nativeEvent.preventDefault(),o.didMove=!1,document.addEventListener("mousemove",w),document.addEventListener("mouseup",p),document.addEventListener("touchmove",w),document.addEventListener("touchend",p);const C=s.current;o.canCloseOnClick=!0,o.canDrag=!0,o.boundingRect=C.getBoundingClientRect(),C.style.transition="",o.x=ME(E.nativeEvent),o.y=VE(E.nativeEvent),t.draggableDirection==="x"?(o.start=o.x,o.removalDistance=C.offsetWidth*(t.draggablePercent/100)):(o.start=o.y,o.removalDistance=C.offsetHeight*(t.draggablePercent===80?1.5*t.draggablePercent:t.draggablePercent/100))}}function x(E){if(o.boundingRect){const{top:C,bottom:I,left:P,right:R}=o.boundingRect;E.nativeEvent.type!=="touchend"&&t.pauseOnHover&&o.x>=P&&o.x<=R&&o.y>=C&&o.y<=I?S():g()}}function g(){n(!0)}function S(){n(!1)}function w(E){const C=s.current;o.canDrag&&C&&(o.didMove=!0,e&&S(),o.x=ME(E),o.y=VE(E),o.delta=t.draggableDirection==="x"?o.x-o.start:o.y-o.start,o.start!==o.x&&(o.canCloseOnClick=!1),C.style.transform=`translate${t.draggableDirection}(${o.delta}px)`,C.style.opacity=""+(1-Math.abs(o.delta/o.removalDistance)))}function p(){document.removeEventListener("mousemove",w),document.removeEventListener("mouseup",p),document.removeEventListener("touchmove",w),document.removeEventListener("touchend",p);const E=s.current;if(o.canDrag&&o.didMove&&E){if(o.canDrag=!1,Math.abs(o.delta)>o.removalDistance)return i(!0),void t.closeToast();E.style.transition="transform 0.2s, opacity 0.2s",E.style.transform=`translate${t.draggableDirection}(0)`,E.style.opacity="1"}}A.useEffect(()=>{a.current=t}),A.useEffect(()=>(s.current&&s.current.addEventListener("d",g,{once:!0}),tn(t.onOpen)&&t.onOpen(A.isValidElement(t.children)&&t.children.props),()=>{const E=a.current;tn(E.onClose)&&E.onClose(A.isValidElement(E.children)&&E.children.props)}),[]),A.useEffect(()=>(t.pauseOnFocusLoss&&(document.hasFocus()||S(),window.addEventListener("focus",g),window.addEventListener("blur",S)),()=>{t.pauseOnFocusLoss&&(window.removeEventListener("focus",g),window.removeEventListener("blur",S))}),[t.pauseOnFocusLoss]);const y={onMouseDown:v,onTouchStart:v,onMouseUp:x,onTouchEnd:x};return l&&c&&(y.onMouseEnter=S,y.onMouseLeave=g),m&&(y.onClick=E=>{h&&h(E),o.canCloseOnClick&&u()}),{playToast:g,pauseToast:S,isRunning:e,preventExitTransition:r,toastRef:s,eventHandlers:y}}function X2(t){let{closeToast:e,theme:n,ariaLabel:r="close"}=t;return te.createElement("button",{className:`Toastify__close-button Toastify__close-button--${n}`,type:"button",onClick:i=>{i.stopPropagation(),e(i)},"aria-label":r},te.createElement("svg",{"aria-hidden":"true",viewBox:"0 0 14 16"},te.createElement("path",{fillRule:"evenodd",d:"M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z"})))}function b8(t){let{delay:e,isRunning:n,closeToast:r,type:i="default",hide:s,className:o,style:a,controlledProgress:l,progress:c,rtl:u,isIn:h,theme:m}=t;const v=s||l&&c===0,x={...a,animationDuration:`${e}ms`,animationPlayState:n?"running":"paused",opacity:v?0:1};l&&(x.transform=`scaleX(${c})`);const g=hi("Toastify__progress-bar",l?"Toastify__progress-bar--controlled":"Toastify__progress-bar--animated",`Toastify__progress-bar-theme--${m}`,`Toastify__progress-bar--${i}`,{"Toastify__progress-bar--rtl":u}),S=tn(o)?o({rtl:u,type:i,defaultClassName:g}):hi(g,o);return te.createElement("div",{role:"progressbar","aria-hidden":v?"true":"false","aria-label":"notification timer",className:S,style:x,[l&&c>=1?"onTransitionEnd":"onAnimationEnd"]:l&&c<1?null:()=>{h&&r()}})}const C8=t=>{const{isRunning:e,preventExitTransition:n,toastRef:r,eventHandlers:i}=S8(t),{closeButton:s,children:o,autoClose:a,onClick:l,type:c,hideProgressBar:u,closeToast:h,transition:m,position:v,className:x,style:g,bodyClassName:S,bodyStyle:w,progressClassName:p,progressStyle:y,updateId:E,role:C,progress:I,rtl:P,toastId:R,deleteToast:N,isIn:O,isLoading:U,iconOut:W,closeOnClick:F,theme:M}=t,V=hi("Toastify__toast",`Toastify__toast-theme--${M}`,`Toastify__toast--${c}`,{"Toastify__toast--rtl":P},{"Toastify__toast--close-on-click":F}),q=tn(x)?x({rtl:P,position:v,type:c,defaultClassName:V}):hi(V,x),k=!!I||!a,D={closeToast:h,type:c,theme:M};let B=null;return s===!1||(B=tn(s)?s(D):A.isValidElement(s)?A.cloneElement(s,D):X2(D)),te.createElement(m,{isIn:O,done:N,position:v,preventExitTransition:n,nodeRef:r},te.createElement("div",{id:R,onClick:l,className:q,...i,style:g,ref:r},te.createElement("div",{...O&&{role:C},className:tn(S)?S({type:c}):hi("Toastify__toast-body",S),style:w},W!=null&&te.createElement("div",{className:hi("Toastify__toast-icon",{"Toastify--animate-icon Toastify__zoom-enter":!U})},W),te.createElement("div",null,o)),B,te.createElement(b8,{...E&&!k?{key:`pb-${E}`}:{},rtl:P,theme:M,delay:a,isRunning:e,isIn:O,closeToast:h,hide:u,type:c,style:y,className:p,controlledProgress:k,progress:I||0})))},Th=function(t,e){return e===void 0&&(e=!1),{enter:`Toastify--animate Toastify__${t}-enter`,exit:`Toastify--animate Toastify__${t}-exit`,appendPosition:e}},I8=Eh(Th("bounce",!0));Eh(Th("slide",!0));Eh(Th("zoom"));Eh(Th("flip"));const Os=A.forwardRef((t,e)=>{const{getToastToRender:n,containerRef:r,isToastActive:i}=x8(t),{className:s,style:o,rtl:a,containerId:l}=t;function c(u){const h=hi("Toastify__toast-container",`Toastify__toast-container--${u}`,{"Toastify__toast-container--rtl":a});return tn(s)?s({position:u,rtl:a,defaultClassName:h}):hi(h,id(s))}return A.useEffect(()=>{e&&(e.current=r.current)},[]),te.createElement("div",{ref:r,className:"Toastify",id:l},n((u,h)=>{const m=h.length?{...o}:{...o,pointerEvents:"none"};return te.createElement("div",{className:c(u),style:m,key:`container-${u}`},h.map((v,x)=>{let{content:g,props:S}=v;return te.createElement(C8,{...S,isIn:i(S.toastId),style:{...S.style,"--nth":x+1,"--len":h.length},key:`toast-${S.key}`},g)}))}))});Os.displayName="ToastContainer",Os.defaultProps={position:"top-right",transition:I8,autoClose:5e3,closeButton:X2,pauseOnHover:!0,pauseOnFocusLoss:!0,closeOnClick:!0,draggable:!0,draggablePercent:80,draggableDirection:"x",role:"alert",theme:"light"};let $p,Zi=new Map,tl=[],A8=1;function J2(){return""+A8++}function P8(t){return t&&(Rs(t.toastId)||Tl(t.toastId))?t.toastId:J2()}function xl(t,e){return Zi.size>0?Tn.emit(0,t,e):tl.push({content:t,options:e}),e.toastId}function hf(t,e){return{...e,type:e&&e.type||t,toastId:P8(e)}}function Ru(t){return(e,n)=>xl(e,hf(t,n))}function be(t,e){return xl(t,hf("default",e))}be.loading=(t,e)=>xl(t,hf("default",{isLoading:!0,autoClose:!1,closeOnClick:!1,closeButton:!1,draggable:!1,...e})),be.promise=function(t,e,n){let r,{pending:i,error:s,success:o}=e;i&&(r=Rs(i)?be.loading(i,n):be.loading(i.render,{...n,...i}));const a={isLoading:null,autoClose:null,closeOnClick:null,closeButton:null,draggable:null},l=(u,h,m)=>{if(h==null)return void be.dismiss(r);const v={type:u,...a,...n,data:m},x=Rs(h)?{render:h}:h;return r?be.update(r,{...v,...x}):be(x.render,{...v,...x}),m},c=tn(t)?t():t;return c.then(u=>l("success",o,u)).catch(u=>l("error",s,u)),c},be.success=Ru("success"),be.info=Ru("info"),be.error=Ru("error"),be.warning=Ru("warning"),be.warn=be.warning,be.dark=(t,e)=>xl(t,hf("default",{theme:"dark",...e})),be.dismiss=t=>{Zi.size>0?Tn.emit(1,t):tl=tl.filter(e=>t!=null&&e.options.toastId!==t)},be.clearWaitingQueue=function(t){return t===void 0&&(t={}),Tn.emit(5,t)},be.isActive=t=>{let e=!1;return Zi.forEach(n=>{n.isToastActive&&n.isToastActive(t)&&(e=!0)}),e},be.update=function(t,e){e===void 0&&(e={}),setTimeout(()=>{const n=function(r,i){let{containerId:s}=i;const o=Zi.get(s||$p);return o&&o.getToast(r)}(t,e);if(n){const{props:r,content:i}=n,s={delay:100,...r,...e,toastId:e.toastId||t,updateId:J2()};s.toastId!==t&&(s.staleId=t);const o=s.render||i;delete s.render,xl(o,s)}},0)},be.done=t=>{be.update(t,{progress:1})},be.onChange=t=>(Tn.on(4,t),()=>{Tn.off(4,t)}),be.POSITION={TOP_LEFT:"top-left",TOP_RIGHT:"top-right",TOP_CENTER:"top-center",BOTTOM_LEFT:"bottom-left",BOTTOM_RIGHT:"bottom-right",BOTTOM_CENTER:"bottom-center"},be.TYPE={INFO:"info",SUCCESS:"success",WARNING:"warning",ERROR:"error",DEFAULT:"default"},Tn.on(2,t=>{$p=t.containerId||t,Zi.set($p,t),tl.forEach(e=>{Tn.emit(0,e.content,e.options)}),tl=[]}).on(3,t=>{Zi.delete(t.containerId||t),Zi.size===0&&Tn.off(0).off(1).off(5)});function k8(t){return Bc({tag:"svg",attr:{viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{fillRule:"evenodd",d:"M4.5 2A1.5 1.5 0 003 3.5v13A1.5 1.5 0 004.5 18h11a1.5 1.5 0 001.5-1.5V7.621a1.5 1.5 0 00-.44-1.06l-4.12-4.122A1.5 1.5 0 0011.378 2H4.5zM10 8a.75.75 0 01.75.75v1.5h1.5a.75.75 0 010 1.5h-1.5v1.5a.75.75 0 01-1.5 0v-1.5h-1.5a.75.75 0 010-1.5h1.5v-1.5A.75.75 0 0110 8z",clipRule:"evenodd"}}]})(t)}const R8=j.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #5fa8d3;
  padding: 32px;
  margin-bottom: 100px;
`,Ba=j.div`
  width: 100%;
  display: flex;
  padding: 16px;
`,Ua=j.label`
  font-size: 20px;
  width: 150px;
`,jE=j.input`
  padding: 4px;
  font-size: 18px;
  width: 600px;
  border: none;
  border-radius: 4px;
`,O8=j.textarea`
  padding: 4px;
  font-size: 18px;
  max-width: 600px;
  width: 600px;
  border: none;
  border-radius: 4px;
`,D8=j.select`
  padding: 4px;
  font-size: 18px;
  max-width: 600px;
  width: 600px;
  border: none;
  border-radius: 4px;
`,N8=j.div`
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
`,FE=j.button`
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
`;var L8=new Map([["aac","audio/aac"],["abw","application/x-abiword"],["arc","application/x-freearc"],["avif","image/avif"],["avi","video/x-msvideo"],["azw","application/vnd.amazon.ebook"],["bin","application/octet-stream"],["bmp","image/bmp"],["bz","application/x-bzip"],["bz2","application/x-bzip2"],["cda","application/x-cdf"],["csh","application/x-csh"],["css","text/css"],["csv","text/csv"],["doc","application/msword"],["docx","application/vnd.openxmlformats-officedocument.wordprocessingml.document"],["eot","application/vnd.ms-fontobject"],["epub","application/epub+zip"],["gz","application/gzip"],["gif","image/gif"],["heic","image/heic"],["heif","image/heif"],["htm","text/html"],["html","text/html"],["ico","image/vnd.microsoft.icon"],["ics","text/calendar"],["jar","application/java-archive"],["jpeg","image/jpeg"],["jpg","image/jpeg"],["js","text/javascript"],["json","application/json"],["jsonld","application/ld+json"],["mid","audio/midi"],["midi","audio/midi"],["mjs","text/javascript"],["mp3","audio/mpeg"],["mp4","video/mp4"],["mpeg","video/mpeg"],["mpkg","application/vnd.apple.installer+xml"],["odp","application/vnd.oasis.opendocument.presentation"],["ods","application/vnd.oasis.opendocument.spreadsheet"],["odt","application/vnd.oasis.opendocument.text"],["oga","audio/ogg"],["ogv","video/ogg"],["ogx","application/ogg"],["opus","audio/opus"],["otf","font/otf"],["png","image/png"],["pdf","application/pdf"],["php","application/x-httpd-php"],["ppt","application/vnd.ms-powerpoint"],["pptx","application/vnd.openxmlformats-officedocument.presentationml.presentation"],["rar","application/vnd.rar"],["rtf","application/rtf"],["sh","application/x-sh"],["svg","image/svg+xml"],["swf","application/x-shockwave-flash"],["tar","application/x-tar"],["tif","image/tiff"],["tiff","image/tiff"],["ts","video/mp2t"],["ttf","font/ttf"],["txt","text/plain"],["vsd","application/vnd.visio"],["wav","audio/wav"],["weba","audio/webm"],["webm","video/webm"],["webp","image/webp"],["woff","font/woff"],["woff2","font/woff2"],["xhtml","application/xhtml+xml"],["xls","application/vnd.ms-excel"],["xlsx","application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"],["xml","application/xml"],["xul","application/vnd.mozilla.xul+xml"],["zip","application/zip"],["7z","application/x-7z-compressed"],["mkv","video/x-matroska"],["mov","video/quicktime"],["msg","application/vnd.ms-outlook"]]);function Uc(t,e){var n=M8(t);if(typeof n.path!="string"){var r=t.webkitRelativePath;Object.defineProperty(n,"path",{value:typeof e=="string"?e:typeof r=="string"&&r.length>0?r:t.name,writable:!1,configurable:!1,enumerable:!0})}return n}function M8(t){var e=t.name,n=e&&e.lastIndexOf(".")!==-1;if(n&&!t.type){var r=e.split(".").pop().toLowerCase(),i=L8.get(r);i&&Object.defineProperty(t,"type",{value:i,writable:!1,configurable:!1,enumerable:!0})}return t}var V8=[".DS_Store","Thumbs.db"];function j8(t){return ca(this,void 0,void 0,function(){return ua(this,function(e){return pf(t)&&F8(t.dataTransfer)?[2,z8(t.dataTransfer,t.type)]:$8(t)?[2,B8(t)]:Array.isArray(t)&&t.every(function(n){return"getFile"in n&&typeof n.getFile=="function"})?[2,U8(t)]:[2,[]]})})}function F8(t){return pf(t)}function $8(t){return pf(t)&&pf(t.target)}function pf(t){return typeof t=="object"&&t!==null}function B8(t){return Lg(t.target.files).map(function(e){return Uc(e)})}function U8(t){return ca(this,void 0,void 0,function(){var e;return ua(this,function(n){switch(n.label){case 0:return[4,Promise.all(t.map(function(r){return r.getFile()}))];case 1:return e=n.sent(),[2,e.map(function(r){return Uc(r)})]}})})}function z8(t,e){return ca(this,void 0,void 0,function(){var n,r;return ua(this,function(i){switch(i.label){case 0:return t.items?(n=Lg(t.items).filter(function(s){return s.kind==="file"}),e!=="drop"?[2,n]:[4,Promise.all(n.map(H8))]):[3,2];case 1:return r=i.sent(),[2,$E(Z2(r))];case 2:return[2,$E(Lg(t.files).map(function(s){return Uc(s)}))]}})})}function $E(t){return t.filter(function(e){return V8.indexOf(e.name)===-1})}function Lg(t){if(t===null)return[];for(var e=[],n=0;n<t.length;n++){var r=t[n];e.push(r)}return e}function H8(t){if(typeof t.webkitGetAsEntry!="function")return BE(t);var e=t.webkitGetAsEntry();return e&&e.isDirectory?eA(e):BE(t)}function Z2(t){return t.reduce(function(e,n){return Bo(Bo([],__(e),!1),__(Array.isArray(n)?Z2(n):[n]),!1)},[])}function BE(t){var e=t.getAsFile();if(!e)return Promise.reject("".concat(t," is not a File"));var n=Uc(e);return Promise.resolve(n)}function W8(t){return ca(this,void 0,void 0,function(){return ua(this,function(e){return[2,t.isDirectory?eA(t):q8(t)]})})}function eA(t){var e=t.createReader();return new Promise(function(n,r){var i=[];function s(){var o=this;e.readEntries(function(a){return ca(o,void 0,void 0,function(){var l,c,u;return ua(this,function(h){switch(h.label){case 0:if(a.length)return[3,5];h.label=1;case 1:return h.trys.push([1,3,,4]),[4,Promise.all(i)];case 2:return l=h.sent(),n(l),[3,4];case 3:return c=h.sent(),r(c),[3,4];case 4:return[3,6];case 5:u=Promise.all(a.map(W8)),i.push(u),s(),h.label=6;case 6:return[2]}})})},function(a){r(a)})}s()})}function q8(t){return ca(this,void 0,void 0,function(){return ua(this,function(e){return[2,new Promise(function(n,r){t.file(function(i){var s=Uc(i,t.fullPath);n(s)},function(i){r(i)})})]})})}var G8=function(t,e){if(t&&e){var n=Array.isArray(e)?e:e.split(","),r=t.name||"",i=(t.type||"").toLowerCase(),s=i.replace(/\/.*$/,"");return n.some(function(o){var a=o.trim().toLowerCase();return a.charAt(0)==="."?r.toLowerCase().endsWith(a):a.endsWith("/*")?s===a.replace(/\/.*$/,""):i===a})}return!0};function UE(t){return Y8(t)||Q8(t)||nA(t)||K8()}function K8(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Q8(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function Y8(t){if(Array.isArray(t))return Mg(t)}function zE(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function HE(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?zE(Object(n),!0).forEach(function(r){tA(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):zE(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function tA(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function cc(t,e){return Z8(t)||J8(t,e)||nA(t,e)||X8()}function X8(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function nA(t,e){if(t){if(typeof t=="string")return Mg(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Mg(t,e)}}function Mg(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function J8(t,e){var n=t==null?null:typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(n!=null){var r=[],i=!0,s=!1,o,a;try{for(n=n.call(t);!(i=(o=n.next()).done)&&(r.push(o.value),!(e&&r.length===e));i=!0);}catch(l){s=!0,a=l}finally{try{!i&&n.return!=null&&n.return()}finally{if(s)throw a}}return r}}function Z8(t){if(Array.isArray(t))return t}var e7="file-invalid-type",t7="file-too-large",n7="file-too-small",r7="too-many-files",i7=function(e){e=Array.isArray(e)&&e.length===1?e[0]:e;var n=Array.isArray(e)?"one of ".concat(e.join(", ")):e;return{code:e7,message:"File type must be ".concat(n)}},WE=function(e){return{code:t7,message:"File is larger than ".concat(e," ").concat(e===1?"byte":"bytes")}},qE=function(e){return{code:n7,message:"File is smaller than ".concat(e," ").concat(e===1?"byte":"bytes")}},s7={code:r7,message:"Too many files"};function rA(t,e){var n=t.type==="application/x-moz-file"||G8(t,e);return[n,n?null:i7(e)]}function iA(t,e,n){if(es(t.size))if(es(e)&&es(n)){if(t.size>n)return[!1,WE(n)];if(t.size<e)return[!1,qE(e)]}else{if(es(e)&&t.size<e)return[!1,qE(e)];if(es(n)&&t.size>n)return[!1,WE(n)]}return[!0,null]}function es(t){return t!=null}function o7(t){var e=t.files,n=t.accept,r=t.minSize,i=t.maxSize,s=t.multiple,o=t.maxFiles,a=t.validator;return!s&&e.length>1||s&&o>=1&&e.length>o?!1:e.every(function(l){var c=rA(l,n),u=cc(c,1),h=u[0],m=iA(l,r,i),v=cc(m,1),x=v[0],g=a?a(l):null;return h&&x&&!g})}function mf(t){return typeof t.isPropagationStopped=="function"?t.isPropagationStopped():typeof t.cancelBubble<"u"?t.cancelBubble:!1}function Ou(t){return t.dataTransfer?Array.prototype.some.call(t.dataTransfer.types,function(e){return e==="Files"||e==="application/x-moz-file"}):!!t.target&&!!t.target.files}function GE(t){t.preventDefault()}function a7(t){return t.indexOf("MSIE")!==-1||t.indexOf("Trident/")!==-1}function l7(t){return t.indexOf("Edge/")!==-1}function c7(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:window.navigator.userAgent;return a7(t)||l7(t)}function Zn(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return function(r){for(var i=arguments.length,s=new Array(i>1?i-1:0),o=1;o<i;o++)s[o-1]=arguments[o];return e.some(function(a){return!mf(r)&&a&&a.apply(void 0,[r].concat(s)),mf(r)})}}function u7(){return"showOpenFilePicker"in window}function d7(t){if(es(t)){var e=Object.entries(t).filter(function(n){var r=cc(n,2),i=r[0],s=r[1],o=!0;return sA(i)||(console.warn('Skipped "'.concat(i,'" because it is not a valid MIME type. Check https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types for a list of valid MIME types.')),o=!1),(!Array.isArray(s)||!s.every(oA))&&(console.warn('Skipped "'.concat(i,'" because an invalid file extension was provided.')),o=!1),o}).reduce(function(n,r){var i=cc(r,2),s=i[0],o=i[1];return HE(HE({},n),{},tA({},s,o))},{});return[{description:"Files",accept:e}]}return t}function f7(t){if(es(t))return Object.entries(t).reduce(function(e,n){var r=cc(n,2),i=r[0],s=r[1];return[].concat(UE(e),[i],UE(s))},[]).filter(function(e){return sA(e)||oA(e)}).join(",")}function h7(t){return t instanceof DOMException&&(t.name==="AbortError"||t.code===t.ABORT_ERR)}function p7(t){return t instanceof DOMException&&(t.name==="SecurityError"||t.code===t.SECURITY_ERR)}function sA(t){return t==="audio/*"||t==="video/*"||t==="image/*"||t==="text/*"||/\w+\/[-+.\w]+/g.test(t)}function oA(t){return/^.*\.[\w]+$/.test(t)}var m7=["children"],g7=["open"],y7=["refKey","role","onKeyDown","onFocus","onBlur","onClick","onDragEnter","onDragOver","onDragLeave","onDrop"],v7=["refKey","onChange","onClick"];function w7(t){return T7(t)||E7(t)||aA(t)||_7()}function _7(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function E7(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function T7(t){if(Array.isArray(t))return Vg(t)}function Bp(t,e){return b7(t)||S7(t,e)||aA(t,e)||x7()}function x7(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function aA(t,e){if(t){if(typeof t=="string")return Vg(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Vg(t,e)}}function Vg(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function S7(t,e){var n=t==null?null:typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(n!=null){var r=[],i=!0,s=!1,o,a;try{for(n=n.call(t);!(i=(o=n.next()).done)&&(r.push(o.value),!(e&&r.length===e));i=!0);}catch(l){s=!0,a=l}finally{try{!i&&n.return!=null&&n.return()}finally{if(s)throw a}}return r}}function b7(t){if(Array.isArray(t))return t}function KE(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function Ue(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?KE(Object(n),!0).forEach(function(r){jg(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):KE(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function jg(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function gf(t,e){if(t==null)return{};var n=C7(t,e),r,i;if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);for(i=0;i<s.length;i++)r=s[i],!(e.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}function C7(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}var gw=A.forwardRef(function(t,e){var n=t.children,r=gf(t,m7),i=cA(r),s=i.open,o=gf(i,g7);return A.useImperativeHandle(e,function(){return{open:s}},[s]),te.createElement(A.Fragment,null,n(Ue(Ue({},o),{},{open:s})))});gw.displayName="Dropzone";var lA={disabled:!1,getFilesFromEvent:j8,maxSize:1/0,minSize:0,multiple:!0,maxFiles:0,preventDropOnDocument:!0,noClick:!1,noKeyboard:!1,noDrag:!1,noDragEventsBubbling:!1,validator:null,useFsAccessApi:!0,autoFocus:!1};gw.defaultProps=lA;gw.propTypes={children:Ce.func,accept:Ce.objectOf(Ce.arrayOf(Ce.string)),multiple:Ce.bool,preventDropOnDocument:Ce.bool,noClick:Ce.bool,noKeyboard:Ce.bool,noDrag:Ce.bool,noDragEventsBubbling:Ce.bool,minSize:Ce.number,maxSize:Ce.number,maxFiles:Ce.number,disabled:Ce.bool,getFilesFromEvent:Ce.func,onFileDialogCancel:Ce.func,onFileDialogOpen:Ce.func,useFsAccessApi:Ce.bool,autoFocus:Ce.bool,onDragEnter:Ce.func,onDragLeave:Ce.func,onDragOver:Ce.func,onDrop:Ce.func,onDropAccepted:Ce.func,onDropRejected:Ce.func,onError:Ce.func,validator:Ce.func};var Fg={isFocused:!1,isFileDialogActive:!1,isDragActive:!1,isDragAccept:!1,isDragReject:!1,acceptedFiles:[],fileRejections:[]};function cA(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=Ue(Ue({},lA),t),n=e.accept,r=e.disabled,i=e.getFilesFromEvent,s=e.maxSize,o=e.minSize,a=e.multiple,l=e.maxFiles,c=e.onDragEnter,u=e.onDragLeave,h=e.onDragOver,m=e.onDrop,v=e.onDropAccepted,x=e.onDropRejected,g=e.onFileDialogCancel,S=e.onFileDialogOpen,w=e.useFsAccessApi,p=e.autoFocus,y=e.preventDropOnDocument,E=e.noClick,C=e.noKeyboard,I=e.noDrag,P=e.noDragEventsBubbling,R=e.onError,N=e.validator,O=A.useMemo(function(){return f7(n)},[n]),U=A.useMemo(function(){return d7(n)},[n]),W=A.useMemo(function(){return typeof S=="function"?S:QE},[S]),F=A.useMemo(function(){return typeof g=="function"?g:QE},[g]),M=A.useRef(null),V=A.useRef(null),q=A.useReducer(I7,Fg),k=Bp(q,2),D=k[0],B=k[1],K=D.isFocused,re=D.isFileDialogActive,ue=A.useRef(typeof window<"u"&&window.isSecureContext&&w&&u7()),ke=function(){!ue.current&&re&&setTimeout(function(){if(V.current){var G=V.current.files;G.length||(B({type:"closeDialog"}),F())}},300)};A.useEffect(function(){return window.addEventListener("focus",ke,!1),function(){window.removeEventListener("focus",ke,!1)}},[V,re,F,ue]);var fe=A.useRef([]),nt=function(G){M.current&&M.current.contains(G.target)||(G.preventDefault(),fe.current=[])};A.useEffect(function(){return y&&(document.addEventListener("dragover",GE,!1),document.addEventListener("drop",nt,!1)),function(){y&&(document.removeEventListener("dragover",GE),document.removeEventListener("drop",nt))}},[M,y]),A.useEffect(function(){return!r&&p&&M.current&&M.current.focus(),function(){}},[M,p,r]);var ve=A.useCallback(function(Y){R?R(Y):console.error(Y)},[R]),lt=A.useCallback(function(Y){Y.preventDefault(),Y.persist(),zs(Y),fe.current=[].concat(w7(fe.current),[Y.target]),Ou(Y)&&Promise.resolve(i(Y)).then(function(G){if(!(mf(Y)&&!P)){var we=G.length,Ie=we>0&&o7({files:G,accept:O,minSize:o,maxSize:s,multiple:a,maxFiles:l,validator:N}),Xe=we>0&&!Ie;B({isDragAccept:Ie,isDragReject:Xe,isDragActive:!0,type:"setDraggedFiles"}),c&&c(Y)}}).catch(function(G){return ve(G)})},[i,c,ve,P,O,o,s,a,l,N]),cn=A.useCallback(function(Y){Y.preventDefault(),Y.persist(),zs(Y);var G=Ou(Y);if(G&&Y.dataTransfer)try{Y.dataTransfer.dropEffect="copy"}catch{}return G&&h&&h(Y),!1},[h,P]),un=A.useCallback(function(Y){Y.preventDefault(),Y.persist(),zs(Y);var G=fe.current.filter(function(Ie){return M.current&&M.current.contains(Ie)}),we=G.indexOf(Y.target);we!==-1&&G.splice(we,1),fe.current=G,!(G.length>0)&&(B({type:"setDraggedFiles",isDragActive:!1,isDragAccept:!1,isDragReject:!1}),Ou(Y)&&u&&u(Y))},[M,u,P]),kt=A.useCallback(function(Y,G){var we=[],Ie=[];Y.forEach(function(Xe){var Fe=rA(Xe,O),$e=Bp(Fe,2),Bi=$e[0],Ws=$e[1],Er=iA(Xe,o,s),ft=Bp(Er,2),Sa=ft[0],qs=ft[1],Gs=N?N(Xe):null;if(Bi&&Sa&&!Gs)we.push(Xe);else{var Ui=[Ws,qs];Gs&&(Ui=Ui.concat(Gs)),Ie.push({file:Xe,errors:Ui.filter(function(xh){return xh})})}}),(!a&&we.length>1||a&&l>=1&&we.length>l)&&(we.forEach(function(Xe){Ie.push({file:Xe,errors:[s7]})}),we.splice(0)),B({acceptedFiles:we,fileRejections:Ie,type:"setFiles"}),m&&m(we,Ie,G),Ie.length>0&&x&&x(Ie,G),we.length>0&&v&&v(we,G)},[B,a,O,o,s,l,m,v,x,N]),_r=A.useCallback(function(Y){Y.preventDefault(),Y.persist(),zs(Y),fe.current=[],Ou(Y)&&Promise.resolve(i(Y)).then(function(G){mf(Y)&&!P||kt(G,Y)}).catch(function(G){return ve(G)}),B({type:"reset"})},[i,kt,ve,P]),Yn=A.useCallback(function(){if(ue.current){B({type:"openDialog"}),W();var Y={multiple:a,types:U};window.showOpenFilePicker(Y).then(function(G){return i(G)}).then(function(G){kt(G,null),B({type:"closeDialog"})}).catch(function(G){h7(G)?(F(G),B({type:"closeDialog"})):p7(G)?(ue.current=!1,V.current?(V.current.value=null,V.current.click()):ve(new Error("Cannot open the file picker because the https://developer.mozilla.org/en-US/docs/Web/API/File_System_Access_API is not supported and no <input> was provided."))):ve(G)});return}V.current&&(B({type:"openDialog"}),W(),V.current.value=null,V.current.click())},[B,W,F,w,kt,ve,U,a]),zc=A.useCallback(function(Y){!M.current||!M.current.isEqualNode(Y.target)||(Y.key===" "||Y.key==="Enter"||Y.keyCode===32||Y.keyCode===13)&&(Y.preventDefault(),Yn())},[M,Yn]),Bs=A.useCallback(function(){B({type:"focus"})},[]),Us=A.useCallback(function(){B({type:"blur"})},[]),$i=A.useCallback(function(){E||(c7()?setTimeout(Yn,0):Yn())},[E,Yn]),qr=function(G){return r?null:G},Et=function(G){return C?null:qr(G)},Qt=function(G){return I?null:qr(G)},zs=function(G){P&&G.stopPropagation()},Yt=A.useMemo(function(){return function(){var Y=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},G=Y.refKey,we=G===void 0?"ref":G,Ie=Y.role,Xe=Y.onKeyDown,Fe=Y.onFocus,$e=Y.onBlur,Bi=Y.onClick,Ws=Y.onDragEnter,Er=Y.onDragOver,ft=Y.onDragLeave,Sa=Y.onDrop,qs=gf(Y,y7);return Ue(Ue(jg({onKeyDown:Et(Zn(Xe,zc)),onFocus:Et(Zn(Fe,Bs)),onBlur:Et(Zn($e,Us)),onClick:qr(Zn(Bi,$i)),onDragEnter:Qt(Zn(Ws,lt)),onDragOver:Qt(Zn(Er,cn)),onDragLeave:Qt(Zn(ft,un)),onDrop:Qt(Zn(Sa,_r)),role:typeof Ie=="string"&&Ie!==""?Ie:"presentation"},we,M),!r&&!C?{tabIndex:0}:{}),qs)}},[M,zc,Bs,Us,$i,lt,cn,un,_r,C,I,r]),Hs=A.useCallback(function(Y){Y.stopPropagation()},[]),Hc=A.useMemo(function(){return function(){var Y=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},G=Y.refKey,we=G===void 0?"ref":G,Ie=Y.onChange,Xe=Y.onClick,Fe=gf(Y,v7),$e=jg({accept:O,multiple:a,type:"file",style:{display:"none"},onChange:qr(Zn(Ie,_r)),onClick:qr(Zn(Xe,Hs)),tabIndex:-1},we,V);return Ue(Ue({},$e),Fe)}},[V,n,a,_r,r]);return Ue(Ue({},D),{},{isFocused:K&&!r,getRootProps:Yt,getInputProps:Hc,rootRef:M,inputRef:V,open:qr(Yn)})}function I7(t,e){switch(e.type){case"focus":return Ue(Ue({},t),{},{isFocused:!0});case"blur":return Ue(Ue({},t),{},{isFocused:!1});case"openDialog":return Ue(Ue({},Fg),{},{isFileDialogActive:!0});case"closeDialog":return Ue(Ue({},t),{},{isFileDialogActive:!1});case"setDraggedFiles":return Ue(Ue({},t),{},{isDragActive:e.isDragActive,isDragAccept:e.isDragAccept,isDragReject:e.isDragReject});case"setFiles":return Ue(Ue({},t),{},{acceptedFiles:e.acceptedFiles,fileRejections:e.fileRejections});case"reset":return Ue({},Fg);default:return t}}function QE(){}const A7=({uploadedFiles:t,setUploadedFiles:e})=>{const n=A.useCallback(s=>{const o=s.filter(a=>a.type==="image/jpeg"||a.type==="image/png"||a.type==="image/svg"||a.type==="image/webp");e(a=>[...a,...o])},[]),{getRootProps:r,getInputProps:i}=cA({onDrop:n,accept:{"image/png":[".png"],"image/jpeg":[".jpg"],"image/svg":[".svg"],"image/webp":[".webp"]}});return T.jsxs("div",{style:{maxWidth:"600px"},children:[T.jsxs("div",{...r(),style:P7,children:[T.jsx("input",{...i()}),T.jsx("p",{children:"Arrastra y suelta imágenes aquí, o haz clic para seleccionarlas"})]}),T.jsxs("div",{style:{maxWidth:"600px"},children:[T.jsx("h4",{children:"Imágenes subidas:"}),T.jsx("ul",{style:{display:"flex",gap:5,listStyle:"none",flexWrap:"wrap"},children:t==null?void 0:t.map((s,o)=>T.jsx("li",{children:T.jsx("img",{src:s.path?URL.createObjectURL(s):s.urlImage,alt:`Thumbnail ${s.name?s.name:"Imagen de producto"}`,style:k7})},o))})]})]})},P7={border:"2px dashed #cccccc",borderRadius:"4px",padding:"20px",textAlign:"center",cursor:"pointer"},k7={maxWidth:"100px",maxHeight:"100px",margin:"10px 0",padding:" 4px",border:"2px solid #cccccc"},R7=({data:t,changeSection:e})=>{const{categorias:n}=A.useContext(On).contextValue,{categoria:r,precio:i,descripcion:s,detalles:o,imagenes:a,titulo:l,id:c}=t||{},[u,h]=A.useState({titulo:l||"",descripcion:s||"",detalles:o||"",precio:i||"",imagenes:a||[],categoria:r||"",id:c||""}),[m,v]=A.useState(!!t),[x,g]=A.useState(null),[S,w]=A.useState(u.imagenes);A.useEffect(()=>{g(n)},[]);const p=async()=>{u.imagenes.length=0,S.forEach(P=>{const R={img:P};u.imagenes.push(R)})},y=P=>{be.success(P,{position:"top-right",autoClose:1800,hideProgressBar:!0,style:{background:"#b7e4c7"}})},E=async P=>{P.preventDefault(),p(),u.categoria===""&&(u.categoria=n[0].id),gt.fire({title:"Guardar cambios",text:"Desea guardar los cambios?",icon:"info",confirmButtonText:"Guardar",showCancelButton:!0,reverseButtons:!0}).then(async R=>{R.isConfirmed&&(m?(await NB(u.id,u),setTimeout(()=>{e("SectionProducts")},2e3),y("Nuevo producto editado con éxito!")):(await OB(u),setTimeout(()=>{e("SectionProducts")},2e3),y("Nuevo producto creado con éxito!")))})},C=(P,R)=>{const N=P.target.value;R==="categoria"&&N===n[0].id?h(O=>({...O,[R]:n[0].id})):h(O=>({...O,[R]:N}))},I=()=>{gt.fire({title:"Atención",text:"Desea cancelar y volver al listado?",icon:"question",confirmButtonText:"Salir",showCancelButton:!0,reverseButtons:!0}).then(P=>{P.isConfirmed&&e("SectionProducts")})};return T.jsxs(R8,{children:[T.jsxs("form",{onSubmit:E,children:[T.jsxs(Ba,{children:[T.jsx(Ua,{htmlFor:"name",children:"Nombre:"}),T.jsx(jE,{type:"text",value:u.titulo,id:"name",onChange:P=>C(P,"titulo")})]}),T.jsxs(Ba,{children:[T.jsx(Ua,{htmlFor:"description",children:"Descripción:"}),T.jsx(O8,{value:u.descripcion,id:"description",onChange:P=>C(P,"descripcion")})]}),T.jsxs(Ba,{children:[T.jsx(Ua,{htmlFor:"price",children:"Precio diario:"}),T.jsx(jE,{type:"number",value:u.precio,id:"price",onChange:P=>C(P,"precio")})]}),T.jsxs(Ba,{children:[T.jsx(Ua,{htmlFor:"category",children:"Categoria:"}),T.jsx(D8,{id:"category",name:"categoria",onChange:P=>C(P,"categoria"),value:u.categoria!==""?u.categoria:n[0].id,children:x&&x.map(P=>T.jsx("option",{value:P.id,children:P.titulo},P.id))})]}),T.jsxs(Ba,{children:[T.jsx(Ua,{children:"Imagenes"}),T.jsx(A7,{uploadedFiles:S,setUploadedFiles:w})]}),T.jsxs(N8,{children:[T.jsx(FE,{type:"button",onClick:I,children:"Cancelar"}),T.jsx(FE,{type:"submit",children:"Guardar"})]})]}),T.jsx(Os,{})]})},O7=({changeSection:t})=>{const{productos:e,setProductData:n,categorias:r}=A.useContext(On).contextValue,[i,s]=A.useState(null),[o,a]=A.useState(null),[l,c]=A.useState(1),[u,h]=A.useState(1),m=10;A.useEffect(()=>{window.scrollTo(0,0),(async()=>{const y=await Sg();s(y),n(y);const E=Math.ceil((i==null?void 0:i.length)/m);c(E)})(),a(r)},[]);const v=p=>r.find(E=>E.id===p).titulo,x=u*m,g=x-m;if(i==null||i.slice(g,x),!i)return T.jsx("p",{children:"Cargando..."});const S=p=>{be.success(p,{position:"top-right",autoClose:2e3,hideProgressBar:!0,style:{background:"#b7e4c7"}})},w=(p,y)=>{gt.fire({title:"Eliminar?",text:`Desea eliminar el producto: "${y}"?`,icon:"warning",confirmButtonText:"Eliminar",showCancelButton:!0,reverseButtons:!0}).then(async E=>{E.isConfirmed&&await DB(p).then(async()=>{s(await Sg()),S("Producto eliminado correctamente!")})})};return T.jsxs(m8,{children:[T.jsx(_8,{children:T.jsxs(E8,{onClick:()=>t("Edit"),children:["Agregar nuevo",T.jsx(k8,{})]})}),T.jsxs(g8,{children:[T.jsx("p",{children:"Nombre"}),T.jsx("p",{children:"Categoria"}),T.jsx("p",{children:"Precio"}),T.jsx("p",{children:"Acciones"})]}),i.map((p,y)=>T.jsxs(y8,{children:[T.jsx(v8,{children:p.titulo}),T.jsx("p",{children:v(p.categoria)}),T.jsx("p",{children:p.precio}),T.jsxs(w8,{children:[T.jsx("button",{onClick:()=>t("Edit",p),children:"Editar"}),T.jsx("button",{onClick:()=>w(p.id,p.titulo),children:"Eliminar"})]})]},y)),T.jsx(Os,{})]})},D7=j.div`
  width: 100%;
  padding: 14px;
  display: flex;
  flex-direction: column;
  gap: 5px;
  margin-bottom: 100px;
  text-align: start;
  align-items: stretch;
`,N7=j.div`
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

  :nth-child(2) {
    width: 300px;
  }
`,L7=j.div`
  display: flex;
  justify-content: space-between;
  height: 40px;
  :first-child {
    margin-left: 14px;
    width: 50px;
  }
`,M7=j.p`
  width: 300px;
`,V7=j.div`
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
`,j7=()=>{const[t,e]=A.useState(null),n=async i=>{i.admin=!i.admin,await _2(i.id,i),r("Se ha cambiado el rol del usuario!")};A.useEffect(()=>{(async()=>{try{const s=await WB();e(s)}catch{console.log("Error obteniendo los usuarios")}})()},[t]);const r=i=>{be.success(i,{position:"top-right",autoClose:2e3,hideProgressBar:!0,style:{background:"#b7e4c7"}})};return T.jsx("div",{children:t&&T.jsxs(D7,{children:[T.jsxs(N7,{children:[T.jsx("p",{children:"Nombre"}),T.jsx("p",{children:"Apellido"}),T.jsx("p",{children:"E-Mail"}),T.jsx("p",{children:"Rol"})]}),t.map(i=>T.jsxs(L7,{children:[T.jsx(M7,{children:i.nombre}),T.jsx("p",{children:i.apellido}),T.jsx("p",{children:i.email}),T.jsx(V7,{children:T.jsx("button",{onClick:()=>n(i),className:i.admin?"admin":"",children:i.admin?"Admin":"Usuario"})})]},i.id)),T.jsx(Os,{})]})})},F7=({changeSection:t})=>{const[e,n]=A.useState([]);A.useEffect(()=>{(async()=>{const o=await bg();n(o)})()},[]);const r=s=>{be.success(s,{position:"top-right",autoClose:2e3,hideProgressBar:!0,style:{background:"#b7e4c7"}})},i=(s,o)=>{if(s==="9a9crFjibptLfhr3glcE"){gt.fire({title:"Denegado",text:`No se puede eliminar la categoría: "${o}"?`,icon:"error"});return}gt.fire({title:"Eliminar?",text:`Desea eliminar la categoria: "${o}"?`,icon:"warning",confirmButtonText:"Eliminar",showCancelButton:!0,reverseButtons:!0}).then(async a=>{a.isConfirmed&&await VB(s).then(async()=>{n(await bg()),r("Categoria eliminada correctamente!")})})};return T.jsxs("div",{style:{display:"flex",flexDirection:"column"},children:[T.jsx("button",{style:{alignSelf:"flex-end",padding:8,margin:4},onClick:()=>t("NewCategory"),children:"Nueva"}),e&&e.map((s,o)=>T.jsxs("div",{style:{display:"flex",justifyContent:"space-between",padding:20,alignItems:"center"},children:[T.jsx("p",{children:s.titulo}),T.jsx("div",{style:{width:50,height:50},children:T.jsx("img",{src:s==null?void 0:s.urlImage,style:{width:"100%",height:"auto"}})}),T.jsx("button",{style:{backgroundColor:"green",padding:8},onClick:()=>t("NewCategory",s),children:"Editar"}),T.jsx("button",{style:{backgroundColor:"red",padding:8},onClick:()=>i(s.id,s.titulo),children:"Eliminar"})]},o)),T.jsx(Os,{})]})},$7="/assets/var-207d7a33.jpeg",B7=({data:t,changeSection:e})=>{const{id:n,imagen:r,titulo:i}=t||{},[s,o]=A.useState({titulo:i||"",imagen:r||"",id:n||""}),[a,l]=A.useState(!!t),c=v=>{be.success(v,{position:"top-right",autoClose:1800,hideProgressBar:!0,style:{background:"#b7e4c7"}})},u=(v,x)=>{if(x==="imagen"){const g=v.target.files[0];o(S=>({...S,imagen:g}))}else{const g=v.target.value;o(S=>({...S,[x]:g}))}},h=v=>{v.preventDefault(),i!==""&&r!==null&&gt.fire({title:"Guardar cambios",text:"Desea guardar los cambios?",icon:"info",confirmButtonText:"Guardar",showCancelButton:!0,reverseButtons:!0}).then(async x=>{x.isConfirmed&&(a?(await jB(s.id,s),setTimeout(()=>{e("SectionCategories")},2e3),c("Categoria editada con éxito!")):(await MB(s),setTimeout(()=>{e("SectionCategories")},2e3),c("Nueva categoria creada con éxito!")))})},m=()=>{gt.fire({title:"Atención",text:"Desea cancelar y volver al listado?",icon:"question",confirmButtonText:"Salir",showCancelButton:!0,reverseButtons:!0}).then(v=>{v.isConfirmed&&e("SectionCategories")})};return T.jsxs("div",{children:[T.jsxs("form",{onSubmit:h,style:{display:"flex",flexDirection:"column",gap:6,padding:20},children:[T.jsx("label",{htmlFor:"titulo",children:"Titulo"}),T.jsx("input",{type:"text",value:s.titulo,onChange:v=>u(v,"titulo")}),T.jsx("label",{htmlFor:"imagen",children:"Imagen"}),T.jsx("input",{type:"file",onChange:v=>u(v,"imagen")}),T.jsxs("div",{style:{display:"flex",justifyContent:"center",width:"100%"},children:[T.jsx("button",{style:{width:300,padding:10},onClick:m,children:"Cancelar"}),T.jsx("button",{style:{width:300,padding:10},children:a?"Editar":"Guardar"})]})]}),T.jsx(Os,{})]})},U7=()=>{const t=Ls(),[e,n]=A.useState(null),[r,i]=A.useState(window.innerWidth<850),{logoutAdmin:s,logout:o}=A.useContext(On).contextValue,a=()=>{i(window.innerWidth<850)};A.useEffect(()=>(window.scrollTo(0,0),window.addEventListener("resize",a),()=>{window.removeEventListener("resize",a)}),[]);const l=()=>{gt.fire({title:"Salir?",text:"Desea salir del Dashboard de administración?",icon:"question",confirmButtonText:"Salir",showCancelButton:!0,reverseButtons:!0}).then(u=>{u.isConfirmed&&(s(),o(),t("/"))})},c=(u,h=null)=>{switch(u){case"SectionProducts":n(T.jsx(O7,{changeSection:c}));break;case"Edit":n(T.jsx(R7,{data:h,changeSection:c}));break;case"ListBookings":n(T.jsx(ListBookings,{}));break;case"ListUsers":n(T.jsx(j7,{}));break;case"SectionCategories":n(T.jsx(F7,{changeSection:c}));break;case"NewCategory":n(T.jsx(B7,{data:h,changeSection:c}));break;case"Exit":l();break;default:n(null);break}};return T.jsx(n8,{children:r?T.jsx(T.Fragment,{children:T.jsxs(s8,{children:[T.jsx("p",{children:"Atención!!!"}),T.jsx(o8,{children:"El Dashboard solo está diseñado para vista desktop"}),T.jsx("img",{src:$7,alt:"imagen Error"})]})}):T.jsxs(T.Fragment,{children:[T.jsx(r8,{children:"Panel de administración"}),T.jsx(p8,{handleClick:c}),T.jsx(i8,{children:e})]})})},z7=()=>{const{isAdmin:t}=A.useContext(On).contextValue;return t?T.jsx(vS,{}):T.jsx(qD,{to:"/login"})},H7=j.div`
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
`,qi=j.label`
  width: 100%;
  height: 19px;
  color: #000;
  margin: 10px;
  font-size: 20px;
  font-weight: 600;
`,Gi=j.input`
  width: 100%;
  border-radius: 8px;
  border: 1px solid rgba(129, 129, 129, 0.5);
  padding: 10px;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  font-size: 16px;
  margin-bottom: 12px;

`,Ki=j.p`
  height: 24px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: red;
  color: white;
  font-size: 14px;
`,W7=j.div`
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
`;const q7=j.button`
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
`;const G7=()=>{const t=Ls(),{user:e,setUserData:n}=A.useContext(On).contextValue,[r,i]=A.useState({nombre:e.nombre||"",apellido:e.apellido||"",dni:e.dni||"",telefono:e.telefono||"",localidad:e.localidad||"",calle:e.calle||"",numero:e.numero||""}),[s,o]=A.useState([]);A.useEffect(()=>{window.scrollTo(0,0)},[]);const a=s.some(([E])=>E==="nombre"),l=s.some(([E])=>E==="apellido"),c=s.some(([E])=>E==="Localidad"),u=s.some(([E])=>E==="dni"),h=s.some(([E])=>E==="telefono"),m=s.some(([E])=>E==="numero"),v=s.some(([E])=>E==="calle"),x=()=>{r.nombre.length<4&&o(E=>[...E,["nombre"]])},g=()=>{r.apellido.length<4&&o(E=>[...E,["apellido"]])},S=(E,C)=>{i(I=>({...I,[C]:E.target.value})),o([])},w=async()=>{const E={...e,...r};await _2(e.id,E)},p=async E=>{E.preventDefault(),o([]),x(),g(),o(C=>{if(C.length===0){w();const I={...e,...r};n(I),gt.fire({title:"Usuario editado!",text:"El usuario a sido editado correctamente!",icon:"success"}).then(P=>{P.isConfirmed&&t("/")})}else gt.fire({title:"Error!",text:"Verifica los datos ingresados",icon:"error",confirmButtonText:"Volver"});return C})};function y(E){return E&&E.charAt(0).toUpperCase()+E.slice(1).toLowerCase()}return T.jsx("form",{onSubmit:p,children:T.jsxs(H7,{children:[T.jsx(W7,{children:T.jsx("img",{src:"/src/assets/Male User.png",alt:"user"})}),T.jsx(qi,{children:"Edita tu nombre"}),T.jsx(Gi,{type:"text",required:!0,placeholder:"Ingresa tú nombre",value:y(r.nombre),onChange:E=>S(E,"nombre")}),a===!0?T.jsx(Ki,{children:"El nombre debe tener minimo 4 letras"}):null,T.jsx(qi,{children:"Edita tu apellido"}),T.jsx(Gi,{type:"text",required:!0,placeholder:"Ingresa tú apellido",value:y(r.apellido),onChange:E=>S(E,"apellido")}),l===!0?T.jsx(Ki,{children:"El apellido debe tener minimo 4 letras"}):null,T.jsx(qi,{children:"Edita tu numero de dni"}),T.jsx(Gi,{type:"number",required:!0,placeholder:"Edita tu dni",value:r.dni,onChange:E=>S(E,"dni")}),u===!0?T.jsx(Ki,{children:"Debes ingresar un dni valido"}):null,T.jsx(qi,{children:"Edita tu telefono"}),T.jsx(Gi,{type:"string",required:!0,placeholder:"Edita tu telefono",value:r.telefono,onChange:E=>S(E,"telefono")}),h===!0?T.jsx(Ki,{children:"El telefono debe tener minimo 8 numeros"}):null,T.jsx(qi,{children:"Edita tu localidad"}),T.jsx(Gi,{type:"text",required:!0,placeholder:"Ingresa tú localidad",value:y(r.localidad),onChange:E=>S(E,"localidad")}),c===!0?T.jsx(Ki,{children:"La localidad debe tener minimo 4 letras"}):null,T.jsx(qi,{children:"Edita tu calle"}),T.jsx(Gi,{type:"text",required:!0,placeholder:"Ingresa tú calle",value:y(r.calle),onChange:E=>S(E,"calle")}),v===!0?T.jsx(Ki,{children:"La dirección debe tener minimo 4 letras"}):null,T.jsx(qi,{children:"Edita tu número de puerta"}),T.jsx(Gi,{type:"number",required:!0,placeholder:"Ingresa tú número de puerta",value:r.numero,onChange:E=>S(E,"numero")}),m===!0?T.jsx(Ki,{children:"El número debe tener minimo 4"}):null,T.jsx(q7,{children:"Editar"})]})})},K7=()=>T.jsx(eN,{children:T.jsx(KD,{children:T.jsxs(er,{path:"",element:T.jsx(eU,{}),children:[T.jsx(er,{path:"/",element:T.jsx(o6,{})}),T.jsx(er,{path:"/register",element:T.jsx(m6,{})}),T.jsx(er,{path:"/login",element:T.jsx(T6,{})}),T.jsx(er,{path:"/userPerfil",element:T.jsx(G7,{})}),T.jsx(er,{path:"/product/:id",element:T.jsx(t8,{})}),T.jsx(er,{path:"/",element:T.jsx(z7,{}),children:T.jsx(er,{path:"administracion",element:T.jsx(U7,{})})}),T.jsx(er,{path:"*",element:T.jsx(c6,{})})]})})});Up.createRoot(document.getElementById("root")).render(T.jsx($B,{children:T.jsx(K7,{})}));
