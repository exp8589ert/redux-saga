/*! For license information please see a0ed4192.75aa2a09.js.LICENSE.txt */
"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[888],{2525:function(e){var t=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable;function a(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach((function(e){r[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(a){return!1}}()?Object.assign:function(e,o){for(var i,c,l=a(e),s=1;s<arguments.length;s++){for(var u in i=Object(arguments[s]))n.call(i,u)&&(l[u]=i[u]);if(t){c=t(i);for(var p=0;p<c.length;p++)r.call(i,c[p])&&(l[c[p]]=i[c[p]])}}return l}},1535:function(e,t,n){var r=n(2525),a="function"==typeof Symbol&&Symbol.for,o=a?Symbol.for("react.element"):60103,i=a?Symbol.for("react.portal"):60106,c=a?Symbol.for("react.fragment"):60107,l=a?Symbol.for("react.strict_mode"):60108,s=a?Symbol.for("react.profiler"):60114,u=a?Symbol.for("react.provider"):60109,p=a?Symbol.for("react.context"):60110,f=a?Symbol.for("react.forward_ref"):60112,d=a?Symbol.for("react.suspense"):60113,h=a?Symbol.for("react.suspense_list"):60120,m=a?Symbol.for("react.memo"):60115,y=a?Symbol.for("react.lazy"):60116;a&&Symbol.for("react.fundamental"),a&&Symbol.for("react.responder"),a&&Symbol.for("react.scope");var g="function"==typeof Symbol&&Symbol.iterator;function k(e){for(var t=e.message,n="https://reactjs.org/docs/error-decoder.html?invariant="+t,r=1;r<arguments.length;r++)n+="&args[]="+encodeURIComponent(arguments[r]);return e.message="Minified React error #"+t+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings. ",e}var b={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},v={};function w(e,t,n){this.props=e,this.context=t,this.refs=v,this.updater=n||b}function j(){}function N(e,t,n){this.props=e,this.context=t,this.refs=v,this.updater=n||b}w.prototype.isReactComponent={},w.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw k(Error(85));this.updater.enqueueSetState(this,e,t,"setState")},w.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},j.prototype=w.prototype;var x=N.prototype=new j;x.constructor=N,r(x,w.prototype),x.isPureReactComponent=!0;var E={current:null},C={suspense:null},O={current:null},S=Object.prototype.hasOwnProperty,P={key:!0,ref:!0,__self:!0,__source:!0};function A(e,t,n){var r,a={},i=null,c=null;if(null!=t)for(r in void 0!==t.ref&&(c=t.ref),void 0!==t.key&&(i=""+t.key),t)S.call(t,r)&&!P.hasOwnProperty(r)&&(a[r]=t[r]);var l=arguments.length-2;if(1===l)a.children=n;else if(1<l){for(var s=Array(l),u=0;u<l;u++)s[u]=arguments[u+2];a.children=s}if(e&&e.defaultProps)for(r in l=e.defaultProps)void 0===a[r]&&(a[r]=l[r]);return{$$typeof:o,type:e,key:i,ref:c,props:a,_owner:O.current}}function _(e){return"object"==typeof e&&null!==e&&e.$$typeof===o}var D=/\/+/g,T=[];function R(e,t,n,r){if(T.length){var a=T.pop();return a.result=e,a.keyPrefix=t,a.func=n,a.context=r,a.count=0,a}return{result:e,keyPrefix:t,func:n,context:r,count:0}}function q(e){e.result=null,e.keyPrefix=null,e.func=null,e.context=null,e.count=0,10>T.length&&T.push(e)}function $(e,t,n,r){var a=typeof e;"undefined"!==a&&"boolean"!==a||(e=null);var c=!1;if(null===e)c=!0;else switch(a){case"string":case"number":c=!0;break;case"object":switch(e.$$typeof){case o:case i:c=!0}}if(c)return n(r,e,""===t?"."+F(e,0):t),1;if(c=0,t=""===t?".":t+":",Array.isArray(e))for(var l=0;l<e.length;l++){var s=t+F(a=e[l],l);c+=$(a,s,n,r)}else if(null===e||"object"!=typeof e?s=null:s="function"==typeof(s=g&&e[g]||e["@@iterator"])?s:null,"function"==typeof s)for(e=s.call(e),l=0;!(a=e.next()).done;)c+=$(a=a.value,s=t+F(a,l++),n,r);else if("object"===a)throw n=""+e,k(Error(31),"[object Object]"===n?"object with keys {"+Object.keys(e).join(", ")+"}":n,"");return c}function I(e,t,n){return null==e?0:$(e,"",t,n)}function F(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+(""+e).replace(/[=:]/g,(function(e){return t[e]}))}(e.key):t.toString(36)}function G(e,t){e.func.call(e.context,t,e.count++)}function U(e,t,n){var r=e.result,a=e.keyPrefix;e=e.func.call(e.context,t,e.count++),Array.isArray(e)?M(e,r,n,(function(e){return e})):null!=e&&(_(e)&&(e=function(e,t){return{$$typeof:o,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(e,a+(!e.key||t&&t.key===e.key?"":(""+e.key).replace(D,"$&/")+"/")+n)),r.push(e))}function M(e,t,n,r,a){var o="";null!=n&&(o=(""+n).replace(D,"$&/")+"/"),I(e,U,t=R(t,o,r,a)),q(t)}function L(){var e=E.current;if(null===e)throw k(Error(321));return e}var W={Children:{map:function(e,t,n){if(null==e)return e;var r=[];return M(e,r,null,t,n),r},forEach:function(e,t,n){if(null==e)return e;I(e,G,t=R(null,null,t,n)),q(t)},count:function(e){return I(e,(function(){return null}),null)},toArray:function(e){var t=[];return M(e,t,null,(function(e){return e})),t},only:function(e){if(!_(e))throw k(Error(143));return e}},createRef:function(){return{current:null}},Component:w,PureComponent:N,createContext:function(e,t){return void 0===t&&(t=null),(e={$$typeof:p,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:u,_context:e},e.Consumer=e},forwardRef:function(e){return{$$typeof:f,render:e}},lazy:function(e){return{$$typeof:y,_ctor:e,_status:-1,_result:null}},memo:function(e,t){return{$$typeof:m,type:e,compare:void 0===t?null:t}},useCallback:function(e,t){return L().useCallback(e,t)},useContext:function(e,t){return L().useContext(e,t)},useEffect:function(e,t){return L().useEffect(e,t)},useImperativeHandle:function(e,t,n){return L().useImperativeHandle(e,t,n)},useDebugValue:function(){},useLayoutEffect:function(e,t){return L().useLayoutEffect(e,t)},useMemo:function(e,t){return L().useMemo(e,t)},useReducer:function(e,t,n){return L().useReducer(e,t,n)},useRef:function(e){return L().useRef(e)},useState:function(e){return L().useState(e)},Fragment:c,Profiler:s,StrictMode:l,Suspense:d,unstable_SuspenseList:h,createElement:A,cloneElement:function(e,t,n){if(null==e)throw k(Error(267),e);var a=r({},e.props),i=e.key,c=e.ref,l=e._owner;if(null!=t){if(void 0!==t.ref&&(c=t.ref,l=O.current),void 0!==t.key&&(i=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(u in t)S.call(t,u)&&!P.hasOwnProperty(u)&&(a[u]=void 0===t[u]&&void 0!==s?s[u]:t[u])}var u=arguments.length-2;if(1===u)a.children=n;else if(1<u){s=Array(u);for(var p=0;p<u;p++)s[p]=arguments[p+2];a.children=s}return{$$typeof:o,type:e.type,key:i,ref:c,props:a,_owner:l}},createFactory:function(e){var t=A.bind(null,e);return t.type=e,t},isValidElement:_,version:"16.10.2",unstable_withSuspenseConfig:function(e,t){var n=C.suspense;C.suspense=void 0===t?null:t;try{e()}finally{C.suspense=n}},__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:{ReactCurrentDispatcher:E,ReactCurrentBatchConfig:C,ReactCurrentOwner:O,IsSomeRendererActing:{current:!1},assign:r}},B={default:W},J=B&&W||B;e.exports=J.default||J},7378:function(e,t,n){n(1535)},3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),f=s(n),d=a,h=f["".concat(l,".").concat(d)]||f[d]||p[d]||o;return n?r.createElement(h,i(i({ref:t},u),{},{components:n})):r.createElement(h,i({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=f;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},9817:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return l},metadata:function(){return s},toc:function(){return u},default:function(){return f}});var r=n(7462),a=n(3366),o=(n(7378),n(3905)),i=["components"],c={title:"Declarative Effects",hide_title:!0},l="Declarative Effects",s={unversionedId:"basics/DeclarativeEffects",id:"basics/DeclarativeEffects",isDocsHomePage:!1,title:"Declarative Effects",description:"In redux-saga, Sagas are implemented using Generator functions. To express the Saga logic, we yield plain JavaScript Objects from the Generator. We call those Objects Effects. An Effect is an object that contains some information to be interpreted by the middleware. You can view Effects like instructions to the middleware to perform some operation (e.g., invoke some asynchronous function, dispatch an action to the store, etc.).",source:"@site/../docs/basics/DeclarativeEffects.md",sourceDirName:"basics",slug:"/basics/DeclarativeEffects",permalink:"/docs/basics/DeclarativeEffects",editUrl:"https://github.com/redux-saga/redux-saga/edit/master/docs/../docs/basics/DeclarativeEffects.md",tags:[],version:"current",frontMatter:{title:"Declarative Effects",hide_title:!0},sidebar:"docs",previous:{title:"Saga Background",permalink:"/docs/introduction/SagaBackground"},next:{title:"Dispatching Actions",permalink:"/docs/basics/DispatchingActions"}},u=[],p={toc:u};function f(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"declarative-effects"},"Declarative Effects"),(0,o.kt)("p",null,"In ",(0,o.kt)("inlineCode",{parentName:"p"},"redux-saga"),", Sagas are implemented using Generator functions. To express the Saga logic, we yield plain JavaScript Objects from the Generator. We call those Objects ",(0,o.kt)("a",{parentName:"p",href:"https://redux-saga.js.org/docs/api/#effect-creators"},(0,o.kt)("em",{parentName:"a"},"Effects")),". An Effect is an object that contains some information to be interpreted by the middleware. You can view Effects like instructions to the middleware to perform some operation (e.g., invoke some asynchronous function, dispatch an action to the store, etc.)."),(0,o.kt)("p",null,"To create Effects, you use the functions provided by the library in the ",(0,o.kt)("inlineCode",{parentName:"p"},"redux-saga/effects")," package."),(0,o.kt)("p",null,"In this section and the following, we will introduce some basic Effects. And see how the concept allows the Sagas to be easily tested."),(0,o.kt)("p",null,"Sagas can yield Effects in multiple forms. The easiest way is to yield a Promise."),(0,o.kt)("p",null,"For example suppose we have a Saga that watches a ",(0,o.kt)("inlineCode",{parentName:"p"},"PRODUCTS_REQUESTED")," action. On each matching action, it starts a task to fetch a list of products from a server."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"import { takeEvery } from 'redux-saga/effects'\nimport Api from './path/to/api'\n\nfunction* watchFetchProducts() {\n  yield takeEvery('PRODUCTS_REQUESTED', fetchProducts)\n}\n\nfunction* fetchProducts() {\n  const products = yield Api.fetch('/products')\n  console.log(products)\n}\n")),(0,o.kt)("p",null,"In the example above, we are invoking ",(0,o.kt)("inlineCode",{parentName:"p"},"Api.fetch")," directly from inside the Generator (In Generator functions, any expression at the right of ",(0,o.kt)("inlineCode",{parentName:"p"},"yield")," is evaluated then the result is yielded to the caller)."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"Api.fetch('/products')")," triggers an AJAX request and returns a Promise that will resolve with the resolved response, the AJAX request will be executed immediately. Simple and idiomatic, but..."),(0,o.kt)("p",null,"Suppose we want to test the generator above:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"const iterator = fetchProducts()\nassert.deepEqual(iterator.next().value, ??) // what do we expect ?\n")),(0,o.kt)("p",null,"We want to check the result of the first value yielded by the generator. In our case it's the result of running ",(0,o.kt)("inlineCode",{parentName:"p"},"Api.fetch('/products')")," which is a Promise . Executing the real service during tests is neither a viable nor practical approach, so we have to ",(0,o.kt)("em",{parentName:"p"},"mock")," the ",(0,o.kt)("inlineCode",{parentName:"p"},"Api.fetch")," function, i.e. we'll have to replace the real function with a fake one which doesn't actually run the AJAX request but only checks that we've called ",(0,o.kt)("inlineCode",{parentName:"p"},"Api.fetch")," with the right arguments (",(0,o.kt)("inlineCode",{parentName:"p"},"'/products'")," in our case)."),(0,o.kt)("p",null,"Mocks make testing more difficult and less reliable. On the other hand, functions that return values are easier to test, since we can use a simple ",(0,o.kt)("inlineCode",{parentName:"p"},"equal()")," to check the result. This is the way to write the most reliable tests."),(0,o.kt)("p",null,"Not convinced? I encourage you to read ",(0,o.kt)("a",{parentName:"p",href:"https://medium.com/javascript-scene/what-every-unit-test-needs-f6cd34d9836d#.4ttnnzpgc"},"Eric Elliott's article"),":"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"(...)",(0,o.kt)("inlineCode",{parentName:"p"},"equal()"),", by nature answers the two most important questions every unit test must answer,\nbut most don\u2019t:"),(0,o.kt)("ul",{parentName:"blockquote"},(0,o.kt)("li",{parentName:"ul"},"What is the actual output?"),(0,o.kt)("li",{parentName:"ul"},"What is the expected output?")),(0,o.kt)("p",{parentName:"blockquote"},"If you finish a test without answering those two questions, you don\u2019t have a real unit test. You have a sloppy, half-baked test.")),(0,o.kt)("p",null,"What we actually need to do is make sure the ",(0,o.kt)("inlineCode",{parentName:"p"},"fetchProducts")," task yields a call with the right function and the right arguments."),(0,o.kt)("p",null,"Instead of invoking the asynchronous function directly from inside the Generator, ",(0,o.kt)("strong",{parentName:"p"},"we can yield only a description of the function invocation"),". i.e. We'll yield an object which looks like"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"// Effect -> call the function Api.fetch with `./products` as argument\n{\n  CALL: {\n    fn: Api.fetch,\n    args: ['./products']\n  }\n}\n")),(0,o.kt)("p",null,"Put another way, the Generator will yield plain Objects containing ",(0,o.kt)("em",{parentName:"p"},"instructions"),", and the ",(0,o.kt)("inlineCode",{parentName:"p"},"redux-saga")," middleware will take care of executing those instructions and giving back the result of their execution to the Generator. This way, when testing the Generator, all we need to do is to check that it yields the expected instruction by doing a simple ",(0,o.kt)("inlineCode",{parentName:"p"},"deepEqual")," on the yielded Object."),(0,o.kt)("p",null,"For this reason, the library provides a different way to perform asynchronous calls."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"import { call } from 'redux-saga/effects'\n\nfunction* fetchProducts() {\n  const products = yield call(Api.fetch, '/products')\n  // ...\n}\n")),(0,o.kt)("p",null,"We're using now the ",(0,o.kt)("inlineCode",{parentName:"p"},"call(fn, ...args)")," function. ",(0,o.kt)("strong",{parentName:"p"},"The difference from the preceding example is that now we're not executing the fetch call immediately, instead, ",(0,o.kt)("inlineCode",{parentName:"strong"},"call")," creates a description of the effect"),". Just as in Redux you use action creators to create a plain object describing the action that will get executed by the Store, ",(0,o.kt)("inlineCode",{parentName:"p"},"call")," creates a plain object describing the function call. The redux-saga middleware takes care of executing the function call and resuming the generator with the resolved response."),(0,o.kt)("p",null,"This allows us to easily test the Generator outside the Redux environment. Because ",(0,o.kt)("inlineCode",{parentName:"p"},"call")," is just a function which returns a plain Object."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"import { call } from 'redux-saga/effects'\nimport Api from '...'\n\nconst iterator = fetchProducts()\n\n// expects a call instruction\nassert.deepEqual(\n  iterator.next().value,\n  call(Api.fetch, '/products'),\n  \"fetchProducts should yield an Effect call(Api.fetch, './products')\"\n)\n")),(0,o.kt)("p",null,"Now we don't need to mock anything, and a basic equality test will suffice."),(0,o.kt)("p",null,"The advantage of those ",(0,o.kt)("em",{parentName:"p"},"declarative calls")," is that we can test all the logic inside a Saga by iterating over the Generator and doing a ",(0,o.kt)("inlineCode",{parentName:"p"},"deepEqual")," test on the values yielded successively. This is a real benefit, as your complex asynchronous operations are no longer black boxes, and you can test in detail their operational logic no matter how complex it is."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"call")," also supports invoking object methods, you can provide a ",(0,o.kt)("inlineCode",{parentName:"p"},"this")," context to the invoked functions using the following form:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"yield call([obj, obj.method], arg1, arg2, ...) // as if we did obj.method(arg1, arg2 ...)\n")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"apply")," is an alias for the method invocation form"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"yield apply(obj, obj.method, [arg1, arg2, ...])\n")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"call")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"apply")," are well suited for functions that return Promise results. Another function ",(0,o.kt)("inlineCode",{parentName:"p"},"cps")," can be used to handle Node style functions (e.g. ",(0,o.kt)("inlineCode",{parentName:"p"},"fn(...args, callback)")," where ",(0,o.kt)("inlineCode",{parentName:"p"},"callback")," is of the form ",(0,o.kt)("inlineCode",{parentName:"p"},"(error, result) => ()"),"). ",(0,o.kt)("inlineCode",{parentName:"p"},"cps")," stands for Continuation Passing Style."),(0,o.kt)("p",null,"For example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"import { cps } from 'redux-saga/effects'\n\nconst content = yield cps(readFile, '/path/to/file')\n")),(0,o.kt)("p",null,"And of course you can test it just like you test ",(0,o.kt)("inlineCode",{parentName:"p"},"call"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"import { cps } from 'redux-saga/effects'\n\nconst iterator = fetchSaga()\nassert.deepEqual(iterator.next().value, cps(readFile, '/path/to/file') )\n")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"cps")," also supports the same method invocation form as ",(0,o.kt)("inlineCode",{parentName:"p"},"call"),"."),(0,o.kt)("p",null,"A full list of declarative effects can be found in the ",(0,o.kt)("a",{parentName:"p",href:"https://redux-saga.js.org/docs/api/#effect-creators"},"API reference"),"."))}f.isMDXComponent=!0}}]);