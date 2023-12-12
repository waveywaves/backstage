/*! For license information please see 596f5f8c.a1578ead.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[548105],{2821:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>s,default:()=>l,frontMatter:()=>i,metadata:()=>c,toc:()=>a});var r=t(824246),o=t(511151);const i={id:"plugin-jenkins-backend.defaultjenkinsinfoprovider.getinstance",title:"DefaultJenkinsInfoProvider.getInstance()",description:"API reference for DefaultJenkinsInfoProvider.getInstance()"},s=void 0,c={id:"reference/plugin-jenkins-backend.defaultjenkinsinfoprovider.getinstance",title:"DefaultJenkinsInfoProvider.getInstance()",description:"API reference for DefaultJenkinsInfoProvider.getInstance()",source:"@site/../docs/reference/plugin-jenkins-backend.defaultjenkinsinfoprovider.getinstance.md",sourceDirName:"reference",slug:"/reference/plugin-jenkins-backend.defaultjenkinsinfoprovider.getinstance",permalink:"/docs/reference/plugin-jenkins-backend.defaultjenkinsinfoprovider.getinstance",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/plugin-jenkins-backend.defaultjenkinsinfoprovider.getinstance.md",tags:[],version:"current",frontMatter:{id:"plugin-jenkins-backend.defaultjenkinsinfoprovider.getinstance",title:"DefaultJenkinsInfoProvider.getInstance()",description:"API reference for DefaultJenkinsInfoProvider.getInstance()"}},u={},a=[{value:"Parameters",id:"parameters",level:2}];function f(e){const n=Object.assign({p:"p",a:"a",code:"code",strong:"strong",pre:"pre",h2:"h2",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td"},(0,o.ah)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/docs/reference/",children:"Home"})," > ",(0,r.jsx)(n.a,{href:"/docs/reference/plugin-jenkins-backend",children:(0,r.jsx)(n.code,{children:"@backstage/plugin-jenkins-backend"})})," > ",(0,r.jsx)(n.a,{href:"/docs/reference/plugin-jenkins-backend.defaultjenkinsinfoprovider",children:(0,r.jsx)(n.code,{children:"DefaultJenkinsInfoProvider"})})," > ",(0,r.jsx)(n.a,{href:"/docs/reference/plugin-jenkins-backend.defaultjenkinsinfoprovider.getinstance",children:(0,r.jsx)(n.code,{children:"getInstance"})})]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Signature:"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-typescript",children:"getInstance(opt: {\n        entityRef: CompoundEntityRef;\n        jobFullName?: string;\n        backstageToken?: string;\n    }): Promise<JenkinsInfo>;\n"})}),"\n",(0,r.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Parameter"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"opt"}),(0,r.jsxs)(n.td,{children:["{ entityRef: ",(0,r.jsx)(n.a,{href:"/docs/reference/catalog-model.compoundentityref",children:"CompoundEntityRef"}),"; jobFullName?: string; backstageToken?: string; }"]}),(0,r.jsx)(n.td,{})]})})]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Returns:"})}),"\n",(0,r.jsxs)(n.p,{children:["Promise<",(0,r.jsx)(n.a,{href:"/docs/reference/plugin-jenkins-backend.jenkinsinfo",children:"JenkinsInfo"}),">"]})]})}const l=function(e={}){const{wrapper:n}=Object.assign({},(0,o.ah)(),e.components);return n?(0,r.jsx)(n,Object.assign({},e,{children:(0,r.jsx)(f,e)})):f(e)}},371426:(e,n,t)=>{var r=t(827378),o=Symbol.for("react.element"),i=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,c=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,u={key:!0,ref:!0,__self:!0,__source:!0};function a(e,n,t){var r,i={},a=null,f=null;for(r in void 0!==t&&(a=""+t),void 0!==n.key&&(a=""+n.key),void 0!==n.ref&&(f=n.ref),n)s.call(n,r)&&!u.hasOwnProperty(r)&&(i[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps)void 0===i[r]&&(i[r]=n[r]);return{$$typeof:o,type:e,key:a,ref:f,props:i,_owner:c.current}}n.Fragment=i,n.jsx=a,n.jsxs=a},541535:(e,n)=>{var t=Symbol.for("react.element"),r=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),i=Symbol.for("react.strict_mode"),s=Symbol.for("react.profiler"),c=Symbol.for("react.provider"),u=Symbol.for("react.context"),a=Symbol.for("react.forward_ref"),f=Symbol.for("react.suspense"),l=Symbol.for("react.memo"),d=Symbol.for("react.lazy"),p=Symbol.iterator;var y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},h=Object.assign,k={};function b(e,n,t){this.props=e,this.context=n,this.refs=k,this.updater=t||y}function j(){}function m(e,n,t){this.props=e,this.context=n,this.refs=k,this.updater=t||y}b.prototype.isReactComponent={},b.prototype.setState=function(e,n){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,n,"setState")},b.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},j.prototype=b.prototype;var g=m.prototype=new j;g.constructor=m,h(g,b.prototype),g.isPureReactComponent=!0;var v=Array.isArray,_=Object.prototype.hasOwnProperty,x={current:null},S={key:!0,ref:!0,__self:!0,__source:!0};function E(e,n,r){var o,i={},s=null,c=null;if(null!=n)for(o in void 0!==n.ref&&(c=n.ref),void 0!==n.key&&(s=""+n.key),n)_.call(n,o)&&!S.hasOwnProperty(o)&&(i[o]=n[o]);var u=arguments.length-2;if(1===u)i.children=r;else if(1<u){for(var a=Array(u),f=0;f<u;f++)a[f]=arguments[f+2];i.children=a}if(e&&e.defaultProps)for(o in u=e.defaultProps)void 0===i[o]&&(i[o]=u[o]);return{$$typeof:t,type:e,key:s,ref:c,props:i,_owner:x.current}}function I(e){return"object"==typeof e&&null!==e&&e.$$typeof===t}var P=/\/+/g;function R(e,n){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var n={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return n[e]}))}(""+e.key):n.toString(36)}function w(e,n,o,i,s){var c=typeof e;"undefined"!==c&&"boolean"!==c||(e=null);var u=!1;if(null===e)u=!0;else switch(c){case"string":case"number":u=!0;break;case"object":switch(e.$$typeof){case t:case r:u=!0}}if(u)return s=s(u=e),e=""===i?"."+R(u,0):i,v(s)?(o="",null!=e&&(o=e.replace(P,"$&/")+"/"),w(s,n,o,"",(function(e){return e}))):null!=s&&(I(s)&&(s=function(e,n){return{$$typeof:t,type:e.type,key:n,ref:e.ref,props:e.props,_owner:e._owner}}(s,o+(!s.key||u&&u.key===s.key?"":(""+s.key).replace(P,"$&/")+"/")+e)),n.push(s)),1;if(u=0,i=""===i?".":i+":",v(e))for(var a=0;a<e.length;a++){var f=i+R(c=e[a],a);u+=w(c,n,o,f,s)}else if(f=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=p&&e[p]||e["@@iterator"])?e:null}(e),"function"==typeof f)for(e=f.call(e),a=0;!(c=e.next()).done;)u+=w(c=c.value,n,o,f=i+R(c,a++),s);else if("object"===c)throw n=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===n?"object with keys {"+Object.keys(e).join(", ")+"}":n)+"). If you meant to render a collection of children, use an array instead.");return u}function C(e,n,t){if(null==e)return e;var r=[],o=0;return w(e,r,"","",(function(e){return n.call(t,e,o++)})),r}function $(e){if(-1===e._status){var n=e._result;(n=n()).then((function(n){0!==e._status&&-1!==e._status||(e._status=1,e._result=n)}),(function(n){0!==e._status&&-1!==e._status||(e._status=2,e._result=n)})),-1===e._status&&(e._status=0,e._result=n)}if(1===e._status)return e._result.default;throw e._result}var O={current:null},D={transition:null},T={ReactCurrentDispatcher:O,ReactCurrentBatchConfig:D,ReactCurrentOwner:x};n.Children={map:C,forEach:function(e,n,t){C(e,(function(){n.apply(this,arguments)}),t)},count:function(e){var n=0;return C(e,(function(){n++})),n},toArray:function(e){return C(e,(function(e){return e}))||[]},only:function(e){if(!I(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},n.Component=b,n.Fragment=o,n.Profiler=s,n.PureComponent=m,n.StrictMode=i,n.Suspense=f,n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=T,n.cloneElement=function(e,n,r){if(null==e)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var o=h({},e.props),i=e.key,s=e.ref,c=e._owner;if(null!=n){if(void 0!==n.ref&&(s=n.ref,c=x.current),void 0!==n.key&&(i=""+n.key),e.type&&e.type.defaultProps)var u=e.type.defaultProps;for(a in n)_.call(n,a)&&!S.hasOwnProperty(a)&&(o[a]=void 0===n[a]&&void 0!==u?u[a]:n[a])}var a=arguments.length-2;if(1===a)o.children=r;else if(1<a){u=Array(a);for(var f=0;f<a;f++)u[f]=arguments[f+2];o.children=u}return{$$typeof:t,type:e.type,key:i,ref:s,props:o,_owner:c}},n.createContext=function(e){return(e={$$typeof:u,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null}).Provider={$$typeof:c,_context:e},e.Consumer=e},n.createElement=E,n.createFactory=function(e){var n=E.bind(null,e);return n.type=e,n},n.createRef=function(){return{current:null}},n.forwardRef=function(e){return{$$typeof:a,render:e}},n.isValidElement=I,n.lazy=function(e){return{$$typeof:d,_payload:{_status:-1,_result:e},_init:$}},n.memo=function(e,n){return{$$typeof:l,type:e,compare:void 0===n?null:n}},n.startTransition=function(e){var n=D.transition;D.transition={};try{e()}finally{D.transition=n}},n.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")},n.useCallback=function(e,n){return O.current.useCallback(e,n)},n.useContext=function(e){return O.current.useContext(e)},n.useDebugValue=function(){},n.useDeferredValue=function(e){return O.current.useDeferredValue(e)},n.useEffect=function(e,n){return O.current.useEffect(e,n)},n.useId=function(){return O.current.useId()},n.useImperativeHandle=function(e,n,t){return O.current.useImperativeHandle(e,n,t)},n.useInsertionEffect=function(e,n){return O.current.useInsertionEffect(e,n)},n.useLayoutEffect=function(e,n){return O.current.useLayoutEffect(e,n)},n.useMemo=function(e,n){return O.current.useMemo(e,n)},n.useReducer=function(e,n,t){return O.current.useReducer(e,n,t)},n.useRef=function(e){return O.current.useRef(e)},n.useState=function(e){return O.current.useState(e)},n.useSyncExternalStore=function(e,n,t){return O.current.useSyncExternalStore(e,n,t)},n.useTransition=function(){return O.current.useTransition()},n.version="18.2.0"},827378:(e,n,t)=>{e.exports=t(541535)},824246:(e,n,t)=>{e.exports=t(371426)},511151:(e,n,t)=>{t.d(n,{Zo:()=>c,ah:()=>i});var r=t(667294);const o=r.createContext({});function i(e){const n=r.useContext(o);return r.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const s={};function c({components:e,children:n,disableParentContext:t}){let c;return c=t?"function"==typeof e?e({}):e||s:i(e),r.createElement(o.Provider,{value:c},n)}}}]);