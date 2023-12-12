/*! For license information please see 67fce129.68966f24.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[477504],{842862:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>i,contentTitle:()=>s,default:()=>f,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var n=t(824246),u=t(511151);const o={id:"plugin-kubernetes-backend.kubernetesbuilder.getclustersupplier",title:"KubernetesBuilder.getClusterSupplier()",description:"API reference for KubernetesBuilder.getClusterSupplier()"},s=void 0,c={id:"reference/plugin-kubernetes-backend.kubernetesbuilder.getclustersupplier",title:"KubernetesBuilder.getClusterSupplier()",description:"API reference for KubernetesBuilder.getClusterSupplier()",source:"@site/../docs/reference/plugin-kubernetes-backend.kubernetesbuilder.getclustersupplier.md",sourceDirName:"reference",slug:"/reference/plugin-kubernetes-backend.kubernetesbuilder.getclustersupplier",permalink:"/docs/reference/plugin-kubernetes-backend.kubernetesbuilder.getclustersupplier",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/plugin-kubernetes-backend.kubernetesbuilder.getclustersupplier.md",tags:[],version:"current",frontMatter:{id:"plugin-kubernetes-backend.kubernetesbuilder.getclustersupplier",title:"KubernetesBuilder.getClusterSupplier()",description:"API reference for KubernetesBuilder.getClusterSupplier()"}},i={},l=[];function a(e){const r=Object.assign({p:"p",a:"a",code:"code",strong:"strong",pre:"pre"},(0,u.ah)(),e.components);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.a,{href:"/docs/reference/",children:"Home"})," > ",(0,n.jsx)(r.a,{href:"/docs/reference/plugin-kubernetes-backend",children:(0,n.jsx)(r.code,{children:"@backstage/plugin-kubernetes-backend"})})," > ",(0,n.jsx)(r.a,{href:"/docs/reference/plugin-kubernetes-backend.kubernetesbuilder",children:(0,n.jsx)(r.code,{children:"KubernetesBuilder"})})," > ",(0,n.jsx)(r.a,{href:"/docs/reference/plugin-kubernetes-backend.kubernetesbuilder.getclustersupplier",children:(0,n.jsx)(r.code,{children:"getClusterSupplier"})})]}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"Signature:"})}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-typescript",children:"protected getClusterSupplier(): KubernetesClustersSupplier;\n"})}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"Returns:"})}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.a,{href:"/docs/reference/plugin-kubernetes-backend.kubernetesclusterssupplier",children:"KubernetesClustersSupplier"})})]})}const f=function(e={}){const{wrapper:r}=Object.assign({},(0,u.ah)(),e.components);return r?(0,n.jsx)(r,Object.assign({},e,{children:(0,n.jsx)(a,e)})):a(e)}},371426:(e,r,t)=>{var n=t(827378),u=Symbol.for("react.element"),o=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,c=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i={key:!0,ref:!0,__self:!0,__source:!0};function l(e,r,t){var n,o={},l=null,a=null;for(n in void 0!==t&&(l=""+t),void 0!==r.key&&(l=""+r.key),void 0!==r.ref&&(a=r.ref),r)s.call(r,n)&&!i.hasOwnProperty(n)&&(o[n]=r[n]);if(e&&e.defaultProps)for(n in r=e.defaultProps)void 0===o[n]&&(o[n]=r[n]);return{$$typeof:u,type:e,key:l,ref:a,props:o,_owner:c.current}}r.Fragment=o,r.jsx=l,r.jsxs=l},541535:(e,r)=>{var t=Symbol.for("react.element"),n=Symbol.for("react.portal"),u=Symbol.for("react.fragment"),o=Symbol.for("react.strict_mode"),s=Symbol.for("react.profiler"),c=Symbol.for("react.provider"),i=Symbol.for("react.context"),l=Symbol.for("react.forward_ref"),a=Symbol.for("react.suspense"),f=Symbol.for("react.memo"),p=Symbol.for("react.lazy"),d=Symbol.iterator;var b={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},y=Object.assign,h={};function k(e,r,t){this.props=e,this.context=r,this.refs=h,this.updater=t||b}function _(){}function g(e,r,t){this.props=e,this.context=r,this.refs=h,this.updater=t||b}k.prototype.isReactComponent={},k.prototype.setState=function(e,r){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,r,"setState")},k.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},_.prototype=k.prototype;var m=g.prototype=new _;m.constructor=g,y(m,k.prototype),m.isPureReactComponent=!0;var v=Array.isArray,S=Object.prototype.hasOwnProperty,j={current:null},x={key:!0,ref:!0,__self:!0,__source:!0};function C(e,r,n){var u,o={},s=null,c=null;if(null!=r)for(u in void 0!==r.ref&&(c=r.ref),void 0!==r.key&&(s=""+r.key),r)S.call(r,u)&&!x.hasOwnProperty(u)&&(o[u]=r[u]);var i=arguments.length-2;if(1===i)o.children=n;else if(1<i){for(var l=Array(i),a=0;a<i;a++)l[a]=arguments[a+2];o.children=l}if(e&&e.defaultProps)for(u in i=e.defaultProps)void 0===o[u]&&(o[u]=i[u]);return{$$typeof:t,type:e,key:s,ref:c,props:o,_owner:j.current}}function E(e){return"object"==typeof e&&null!==e&&e.$$typeof===t}var w=/\/+/g;function R(e,r){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var r={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return r[e]}))}(""+e.key):r.toString(36)}function $(e,r,u,o,s){var c=typeof e;"undefined"!==c&&"boolean"!==c||(e=null);var i=!1;if(null===e)i=!0;else switch(c){case"string":case"number":i=!0;break;case"object":switch(e.$$typeof){case t:case n:i=!0}}if(i)return s=s(i=e),e=""===o?"."+R(i,0):o,v(s)?(u="",null!=e&&(u=e.replace(w,"$&/")+"/"),$(s,r,u,"",(function(e){return e}))):null!=s&&(E(s)&&(s=function(e,r){return{$$typeof:t,type:e.type,key:r,ref:e.ref,props:e.props,_owner:e._owner}}(s,u+(!s.key||i&&i.key===s.key?"":(""+s.key).replace(w,"$&/")+"/")+e)),r.push(s)),1;if(i=0,o=""===o?".":o+":",v(e))for(var l=0;l<e.length;l++){var a=o+R(c=e[l],l);i+=$(c,r,u,a,s)}else if(a=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=d&&e[d]||e["@@iterator"])?e:null}(e),"function"==typeof a)for(e=a.call(e),l=0;!(c=e.next()).done;)i+=$(c=c.value,r,u,a=o+R(c,l++),s);else if("object"===c)throw r=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===r?"object with keys {"+Object.keys(e).join(", ")+"}":r)+"). If you meant to render a collection of children, use an array instead.");return i}function O(e,r,t){if(null==e)return e;var n=[],u=0;return $(e,n,"","",(function(e){return r.call(t,e,u++)})),n}function P(e){if(-1===e._status){var r=e._result;(r=r()).then((function(r){0!==e._status&&-1!==e._status||(e._status=1,e._result=r)}),(function(r){0!==e._status&&-1!==e._status||(e._status=2,e._result=r)})),-1===e._status&&(e._status=0,e._result=r)}if(1===e._status)return e._result.default;throw e._result}var I={current:null},T={transition:null},A={ReactCurrentDispatcher:I,ReactCurrentBatchConfig:T,ReactCurrentOwner:j};r.Children={map:O,forEach:function(e,r,t){O(e,(function(){r.apply(this,arguments)}),t)},count:function(e){var r=0;return O(e,(function(){r++})),r},toArray:function(e){return O(e,(function(e){return e}))||[]},only:function(e){if(!E(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},r.Component=k,r.Fragment=u,r.Profiler=s,r.PureComponent=g,r.StrictMode=o,r.Suspense=a,r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=A,r.cloneElement=function(e,r,n){if(null==e)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var u=y({},e.props),o=e.key,s=e.ref,c=e._owner;if(null!=r){if(void 0!==r.ref&&(s=r.ref,c=j.current),void 0!==r.key&&(o=""+r.key),e.type&&e.type.defaultProps)var i=e.type.defaultProps;for(l in r)S.call(r,l)&&!x.hasOwnProperty(l)&&(u[l]=void 0===r[l]&&void 0!==i?i[l]:r[l])}var l=arguments.length-2;if(1===l)u.children=n;else if(1<l){i=Array(l);for(var a=0;a<l;a++)i[a]=arguments[a+2];u.children=i}return{$$typeof:t,type:e.type,key:o,ref:s,props:u,_owner:c}},r.createContext=function(e){return(e={$$typeof:i,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null}).Provider={$$typeof:c,_context:e},e.Consumer=e},r.createElement=C,r.createFactory=function(e){var r=C.bind(null,e);return r.type=e,r},r.createRef=function(){return{current:null}},r.forwardRef=function(e){return{$$typeof:l,render:e}},r.isValidElement=E,r.lazy=function(e){return{$$typeof:p,_payload:{_status:-1,_result:e},_init:P}},r.memo=function(e,r){return{$$typeof:f,type:e,compare:void 0===r?null:r}},r.startTransition=function(e){var r=T.transition;T.transition={};try{e()}finally{T.transition=r}},r.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")},r.useCallback=function(e,r){return I.current.useCallback(e,r)},r.useContext=function(e){return I.current.useContext(e)},r.useDebugValue=function(){},r.useDeferredValue=function(e){return I.current.useDeferredValue(e)},r.useEffect=function(e,r){return I.current.useEffect(e,r)},r.useId=function(){return I.current.useId()},r.useImperativeHandle=function(e,r,t){return I.current.useImperativeHandle(e,r,t)},r.useInsertionEffect=function(e,r){return I.current.useInsertionEffect(e,r)},r.useLayoutEffect=function(e,r){return I.current.useLayoutEffect(e,r)},r.useMemo=function(e,r){return I.current.useMemo(e,r)},r.useReducer=function(e,r,t){return I.current.useReducer(e,r,t)},r.useRef=function(e){return I.current.useRef(e)},r.useState=function(e){return I.current.useState(e)},r.useSyncExternalStore=function(e,r,t){return I.current.useSyncExternalStore(e,r,t)},r.useTransition=function(){return I.current.useTransition()},r.version="18.2.0"},827378:(e,r,t)=>{e.exports=t(541535)},824246:(e,r,t)=>{e.exports=t(371426)},511151:(e,r,t)=>{t.d(r,{Zo:()=>c,ah:()=>o});var n=t(667294);const u=n.createContext({});function o(e){const r=n.useContext(u);return n.useMemo((()=>"function"==typeof e?e(r):{...r,...e}),[r,e])}const s={};function c({components:e,children:r,disableParentContext:t}){let c;return c=t?"function"==typeof e?e({}):e||s:o(e),n.createElement(u.Provider,{value:c},r)}}}]);