(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[629],{8566:function(e,t,n){"use strict";var i=n(930),o=n(5696),a=n(7980);Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t,n=e.src,s=e.sizes,l=e.unoptimized,m=void 0!==l&&l,p=e.priority,w=void 0!==p&&p,J=e.loading,T=e.lazyRoot,k=void 0===T?null:T,E=e.lazyBoundary,V=e.className,R=e.quality,O=e.width,P=e.height,z=e.style,A=e.objectFit,D=e.objectPosition,N=e.onLoadingComplete,L=e.placeholder,j=void 0===L?"empty":L,M=e.blurDataURL,W=d(e,["src","sizes","unoptimized","priority","loading","lazyRoot","lazyBoundary","className","quality","width","height","style","objectFit","objectPosition","onLoadingComplete","placeholder","blurDataURL"]),q=u.useContext(g.ImageConfigContext),H=u.useMemo((function(){var e=y||q||f.imageConfigDefault,t=[].concat(a(e.deviceSizes),a(e.imageSizes)).sort((function(e,t){return e-t})),n=e.deviceSizes.sort((function(e,t){return e-t}));return r({},e,{allSizes:t,deviceSizes:n})}),[q]),B=W,U=s?"responsive":"intrinsic";"layout"in B&&(B.layout&&(U=B.layout),delete B.layout);var F=_;if("loader"in B){if(B.loader){var G=B.loader;F=function(e){e.config;var t=d(e,["config"]);return G(t)}}delete B.loader}var Z="";if(function(e){return"object"===typeof e&&(S(e)||function(e){return void 0!==e.src}(e))}(n)){var K=S(n)?n.default:n;if(!K.src)throw new Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ".concat(JSON.stringify(K)));if(M=M||K.blurDataURL,Z=K.src,(!U||"fill"!==U)&&(P=P||K.height,O=O||K.width,!K.height||!K.width))throw new Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ".concat(JSON.stringify(K)))}var X=!w&&("lazy"===J||"undefined"===typeof J);((n="string"===typeof n?n:Z).startsWith("data:")||n.startsWith("blob:"))&&(m=!0,X=!1);v.has(n)&&(X=!1);H.unoptimized&&(m=!0);var Y,Q=u.useState(!1),$=o(Q,2),ee=$[0],te=$[1],ne=h.useIntersection({rootRef:k,rootMargin:E||"200px",disabled:!X}),ie=o(ne,3),oe=ie[0],ae=ie[1],re=ie[2],se=!X||ae,le={boxSizing:"border-box",display:"block",overflow:"hidden",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},de={boxSizing:"border-box",display:"block",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},ue=!1,ce={position:"absolute",top:0,left:0,bottom:0,right:0,boxSizing:"border-box",padding:0,border:"none",margin:"auto",display:"block",width:0,height:0,minWidth:"100%",maxWidth:"100%",minHeight:"100%",maxHeight:"100%",objectFit:A,objectPosition:D},fe=I(O),he=I(P),ge=I(R);0;var me=Object.assign({},z,ce),pe="blur"!==j||ee?{}:{backgroundSize:A||"cover",backgroundPosition:D||"0% 0%",filter:"blur(20px)",backgroundImage:'url("'.concat(M,'")')};if("fill"===U)le.display="block",le.position="absolute",le.top=0,le.left=0,le.bottom=0,le.right=0;else if("undefined"!==typeof fe&&"undefined"!==typeof he){var ye=he/fe,ve=isNaN(ye)?"100%":"".concat(100*ye,"%");"responsive"===U?(le.display="block",le.position="relative",ue=!0,de.paddingTop=ve):"intrinsic"===U?(le.display="inline-block",le.position="relative",le.maxWidth="100%",ue=!0,de.maxWidth="100%",Y="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27".concat(fe,"%27%20height=%27").concat(he,"%27/%3e")):"fixed"===U&&(le.display="inline-block",le.position="relative",le.width=fe,le.height=he)}else 0;var be={src:b,srcSet:void 0,sizes:void 0};se&&(be=C({config:H,src:n,unoptimized:m,layout:U,width:fe,quality:ge,sizes:s,loader:F}));var we=n;0;0;var Se=(i(t={},"imagesrcset",be.srcSet),i(t,"imagesizes",be.sizes),i(t,"crossOrigin",B.crossOrigin),t),Ce=u.default.useLayoutEffect,Ie=u.useRef(N),_e=u.useRef(n);u.useEffect((function(){Ie.current=N}),[N]),Ce((function(){_e.current!==n&&(re(),_e.current=n)}),[re,n]);var Je=r({isLazy:X,imgAttributes:be,heightInt:he,widthInt:fe,qualityInt:ge,layout:U,className:V,imgStyle:me,blurStyle:pe,loading:J,config:H,unoptimized:m,placeholder:j,loader:F,srcString:we,onLoadingCompleteRef:Ie,setBlurComplete:te,setIntersection:oe,isVisible:se,noscriptSizes:s},B);return u.default.createElement(u.default.Fragment,null,u.default.createElement("span",{style:le},ue?u.default.createElement("span",{style:de},Y?u.default.createElement("img",{style:{display:"block",maxWidth:"100%",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},alt:"","aria-hidden":!0,src:Y}):null):null,u.default.createElement(x,Object.assign({},Je))),w?u.default.createElement(c.default,null,u.default.createElement("link",Object.assign({key:"__nimg-"+be.src+be.srcSet+be.sizes,rel:"preload",as:"image",href:be.srcSet?void 0:be.src},Se))):null)};var r=n(6495).Z,s=n(2648).Z,l=n(1598).Z,d=n(7273).Z,u=l(n(1720)),c=s(n(2717)),f=n(8187),h=n(639),g=n(9239),m=(n(9475),n(4969));function p(e){return"/"===e[0]?e.slice(1):e}var y={deviceSizes:[640,1080,1920],imageSizes:[16,32,48,64,96,128,256,384],path:"/lite/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!1},v=new Set,b=(new Map,"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7");var w=new Map([["default",function(e){var t=e.config,n=e.src,i=e.width,o=e.quality;return n.endsWith(".svg")&&!t.dangerouslyAllowSVG?n:"".concat(m.normalizePathTrailingSlash(t.path),"?url=").concat(encodeURIComponent(n),"&w=").concat(i,"&q=").concat(o||75)}],["imgix",function(e){var t=e.config,n=e.src,i=e.width,o=e.quality,a=new URL("".concat(t.path).concat(p(n))),r=a.searchParams;return r.set("auto",r.getAll("auto").join(",")||"format"),r.set("fit",r.get("fit")||"max"),r.set("w",r.get("w")||i.toString()),o&&r.set("q",o.toString()),a.href}],["cloudinary",function(e){var t=e.config,n=e.src,i=["f_auto","c_limit","w_"+e.width,"q_"+(e.quality||"auto")].join(",")+"/";return"".concat(t.path).concat(i).concat(p(n))}],["akamai",function(e){var t=e.config,n=e.src,i=e.width;return"".concat(t.path).concat(p(n),"?imwidth=").concat(i)}],["custom",function(e){var t=e.src;throw new Error('Image with src "'.concat(t,'" is missing "loader" prop.')+"\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader")}]]);function S(e){return void 0!==e.default}function C(e){var t=e.config,n=e.src,i=e.unoptimized,o=e.layout,r=e.width,s=e.quality,l=e.sizes,d=e.loader;if(i)return{src:n,srcSet:void 0,sizes:void 0};var u=function(e,t,n,i){var o=e.deviceSizes,r=e.allSizes;if(i&&("fill"===n||"responsive"===n)){for(var s,l=/(^|\s)(1?\d?\d)vw/g,d=[];s=l.exec(i);s)d.push(parseInt(s[2]));if(d.length){var u=.01*Math.min.apply(Math,d);return{widths:r.filter((function(e){return e>=o[0]*u})),kind:"w"}}return{widths:r,kind:"w"}}return"number"!==typeof t||"fill"===n||"responsive"===n?{widths:o,kind:"w"}:{widths:a(new Set([t,2*t].map((function(e){return r.find((function(t){return t>=e}))||r[r.length-1]})))),kind:"x"}}(t,r,o,l),c=u.widths,f=u.kind,h=c.length-1;return{sizes:l||"w"!==f?l:"100vw",srcSet:c.map((function(e,i){return"".concat(d({config:t,src:n,quality:s,width:e})," ").concat("w"===f?e:i+1).concat(f)})).join(", "),src:d({config:t,src:n,quality:s,width:c[h]})}}function I(e){return"number"===typeof e?e:"string"===typeof e?parseInt(e,10):void 0}function _(e){var t,n=(null==(t=e.config)?void 0:t.loader)||"default",i=w.get(n);if(i)return i(e);throw new Error('Unknown "loader" found in "next.config.js". Expected: '.concat(f.VALID_LOADERS.join(", "),". Received: ").concat(n))}function J(e,t,n,i,o,a){e&&e.src!==b&&e["data-loaded-src"]!==t&&(e["data-loaded-src"]=t,("decode"in e?e.decode():Promise.resolve()).catch((function(){})).then((function(){if(e.parentNode&&(v.add(t),"blur"===i&&a(!0),null==o?void 0:o.current)){var n=e.naturalWidth,r=e.naturalHeight;o.current({naturalWidth:n,naturalHeight:r})}})))}var x=function(e){var t=e.imgAttributes,n=(e.heightInt,e.widthInt),i=e.qualityInt,o=e.layout,a=e.className,s=e.imgStyle,l=e.blurStyle,c=e.isLazy,f=e.placeholder,h=e.loading,g=e.srcString,m=e.config,p=e.unoptimized,y=e.loader,v=e.onLoadingCompleteRef,b=e.setBlurComplete,w=e.setIntersection,S=e.onLoad,I=e.onError,_=(e.isVisible,e.noscriptSizes),x=d(e,["imgAttributes","heightInt","widthInt","qualityInt","layout","className","imgStyle","blurStyle","isLazy","placeholder","loading","srcString","config","unoptimized","loader","onLoadingCompleteRef","setBlurComplete","setIntersection","onLoad","onError","isVisible","noscriptSizes"]);return h=c?"lazy":h,u.default.createElement(u.default.Fragment,null,u.default.createElement("img",Object.assign({},x,t,{decoding:"async","data-nimg":o,className:a,style:r({},s,l),ref:u.useCallback((function(e){w(e),(null==e?void 0:e.complete)&&J(e,g,0,f,v,b)}),[w,g,o,f,v,b]),onLoad:function(e){J(e.currentTarget,g,0,f,v,b),S&&S(e)},onError:function(e){"blur"===f&&b(!0),I&&I(e)}})),(c||"blur"===f)&&u.default.createElement("noscript",null,u.default.createElement("img",Object.assign({},x,C({config:m,src:g,unoptimized:p,layout:o,width:n,quality:i,sizes:_,loader:y}),{decoding:"async","data-nimg":o,style:s,className:a,loading:h}))))};("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&"undefined"===typeof t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},3579:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){var n=a.default,o=(null==t?void 0:t.suspense)?{}:{loading:function(e){e.error,e.isLoading;return e.pastDelay,null}};e instanceof Promise?o.loader=function(){return e}:"function"===typeof e?o.loader=e:"object"===typeof e&&(o=i({},o,e));if((o=i({},o,t)).suspense)throw new Error("Invalid suspense option usage in next/dynamic. Read more: https://nextjs.org/docs/messages/invalid-dynamic-suspense");o.suspense&&(delete o.ssr,delete o.loading);o.loadableGenerated&&delete(o=i({},o,o.loadableGenerated)).loadableGenerated;if("boolean"===typeof o.ssr&&!o.suspense){if(!o.ssr)return delete o.ssr,r(n,o);delete o.ssr}return n(o)},t.noSSR=r;var i=n(6495).Z,o=n(2648).Z,a=(o(n(1720)),o(n(3668)));function r(e,t){return delete t.webpack,delete t.modules,e(t)}("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&"undefined"===typeof t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},3982:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.LoadableContext=void 0;var i=(0,n(2648).Z)(n(1720)).default.createContext(null);t.LoadableContext=i},3668:function(e,t,n){"use strict";var i=n(3227),o=n(8361);function a(e,t){var n="undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=function(e,t){if(!e)return;if("string"===typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return r(e,t)}(e))||t&&e&&"number"===typeof e.length){n&&(e=n);var i=0,o=function(){};return{s:o,n:function(){return i>=e.length?{done:!0}:{done:!1,value:e[i++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,s=!0,l=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return s=e.done,e},e:function(e){l=!0,a=e},f:function(){try{s||null==n.return||n.return()}finally{if(l)throw a}}}}function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,i=new Array(t);n<t;n++)i[n]=e[n];return i}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var s=n(6495).Z,l=(0,n(2648).Z)(n(1720)),d=n(3982),u=n(1849).useSyncExternalStore,c=[],f=[],h=!1;function g(e){var t=e(),n={loading:!0,loaded:null,error:null};return n.promise=t.then((function(e){return n.loading=!1,n.loaded=e,e})).catch((function(e){throw n.loading=!1,n.error=e,e})),n}var m=function(){function e(t,n){i(this,e),this._loadFn=t,this._opts=n,this._callbacks=new Set,this._delay=null,this._timeout=null,this.retry()}return o(e,[{key:"promise",value:function(){return this._res.promise}},{key:"retry",value:function(){var e=this;this._clearTimeouts(),this._res=this._loadFn(this._opts.loader),this._state={pastDelay:!1,timedOut:!1};var t=this._res,n=this._opts;t.loading&&("number"===typeof n.delay&&(0===n.delay?this._state.pastDelay=!0:this._delay=setTimeout((function(){e._update({pastDelay:!0})}),n.delay)),"number"===typeof n.timeout&&(this._timeout=setTimeout((function(){e._update({timedOut:!0})}),n.timeout))),this._res.promise.then((function(){e._update({}),e._clearTimeouts()})).catch((function(t){e._update({}),e._clearTimeouts()})),this._update({})}},{key:"_update",value:function(e){this._state=s({},this._state,{error:this._res.error,loaded:this._res.loaded,loading:this._res.loading},e),this._callbacks.forEach((function(e){return e()}))}},{key:"_clearTimeouts",value:function(){clearTimeout(this._delay),clearTimeout(this._timeout)}},{key:"getCurrentValue",value:function(){return this._state}},{key:"subscribe",value:function(e){var t=this;return this._callbacks.add(e),function(){t._callbacks.delete(e)}}}]),e}();function p(e){return function(e,t){var n=Object.assign({loader:null,loading:null,delay:200,timeout:null,webpack:null,modules:null,suspense:!1},t);n.suspense&&(n.lazy=l.default.lazy(n.loader));var i=null;function o(){if(!i){var t=new m(e,n);i={getCurrentValue:t.getCurrentValue.bind(t),subscribe:t.subscribe.bind(t),retry:t.retry.bind(t),promise:t.promise.bind(t)}}return i.promise()}if(!h){var r=n.webpack?n.webpack():n.modules;r&&f.push((function(e){var t,n=a(r);try{for(n.s();!(t=n.n()).done;){var i=t.value;if(-1!==e.indexOf(i))return o()}}catch(s){n.e(s)}finally{n.f()}}))}function c(){o();var e=l.default.useContext(d.LoadableContext);e&&Array.isArray(n.modules)&&n.modules.forEach((function(t){e(t)}))}var g=n.suspense?function(e,t){return c(),l.default.createElement(n.lazy,s({},e,{ref:t}))}:function(e,t){c();var o=u(i.subscribe,i.getCurrentValue,i.getCurrentValue);return l.default.useImperativeHandle(t,(function(){return{retry:i.retry}}),[]),l.default.useMemo((function(){return o.loading||o.error?l.default.createElement(n.loading,{isLoading:o.loading,pastDelay:o.pastDelay,timedOut:o.timedOut,error:o.error,retry:i.retry}):o.loaded?l.default.createElement((t=o.loaded)&&t.__esModule?t.default:t,e):null;var t}),[e,o])};return g.preload=function(){return o()},g.displayName="LoadableComponent",l.default.forwardRef(g)}(g,e)}function y(e,t){for(var n=[];e.length;){var i=e.pop();n.push(i(t))}return Promise.all(n).then((function(){if(e.length)return y(e,t)}))}p.preloadAll=function(){return new Promise((function(e,t){y(c).then(e,t)}))},p.preloadReady=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return new Promise((function(t){var n=function(){return h=!0,t()};y(f,e).then(n,n)}))},window.__NEXT_PRELOADREADY=p.preloadReady;var v=p;t.default=v},930:function(e){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e},e.exports.default=e.exports,e.exports.__esModule=!0},5152:function(e,t,n){e.exports=n(3579)},5675:function(e,t,n){e.exports=n(8566)},7651:function(e,t,n){"use strict";var i=n(1720);var o="function"===typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e===1/t)||e!==e&&t!==t},a=i.useState,r=i.useEffect,s=i.useLayoutEffect,l=i.useDebugValue;function d(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!o(e,n)}catch(i){return!0}}var u="undefined"===typeof window||"undefined"===typeof window.document||"undefined"===typeof window.document.createElement?function(e,t){return t()}:function(e,t){var n=t(),i=a({inst:{value:n,getSnapshot:t}}),o=i[0].inst,u=i[1];return s((function(){o.value=n,o.getSnapshot=t,d(o)&&u({inst:o})}),[e,n,t]),r((function(){return d(o)&&u({inst:o}),e((function(){d(o)&&u({inst:o})}))}),[e]),l(n),n};t.useSyncExternalStore=void 0!==i.useSyncExternalStore?i.useSyncExternalStore:u},1849:function(e,t,n){"use strict";e.exports=n(7651)},6549:function(){"use strict";!function(){function e(e){var t=this;this.isOnValue=!1,this.initialized=!1,this.intervals=[],this.configKey=e,this.scannableTargets=[],this.scannableTargetsCount=0,this.visibleElementsMap=[],this.resetConfigStatus=function(){return t.status={coordinates:{domnode:{tl:[0,0],tr:[0,0],br:[0,0],bl:[0,0]},viewport:{tl:[0,0],tr:[0,0],br:[0,0],bl:[0,0]}},strict:!1,spa:!1,ignoreScrollDepth:!1,debug:{console:!1,overlay:!1,level:3,overlays:{}},timeInterval:1.5,activity:{scrollDepth:0,maxVertical:0,timeOnPage:0,timeInUnknownState:0,timeInView:0,scrolled:!1,dnp:0,vpp:0,pollingPoints:0,readingPoints:0,increment:100,read:!1,averageReadSpeed:5,initialTime:0,totalTime:0,numberOfCalls:0},thresholds:{viewport:25,domNode:30,minVertical:50,readingPoint:400,domPolling:100,minTimeInView:3,maxTimeInView:20,scrollDepth:0,percentagePoint:30,maxCalls:3}},!0},this.getConfig=function(){return t.status},this.setConfig=function(){return!t.isOnValue&&("undefined"===typeof window.readJSConfig?(t.console("Error: Cannot find Read JS config object readJSConfig",1),!1):(t.configKey&&window.readJSConfig[t.configKey]?t.readJSConfig=window.readJSConfig[t.configKey]:t.readJSConfig=window.readJSConfig,"boolean"===typeof t.readJSConfig.spa&&(t.status.spa=t.readJSConfig.spa),"boolean"===typeof t.readJSConfig.strict&&(t.status.strict=t.readJSConfig.strict),"boolean"===typeof t.readJSConfig.ignoreScrollDepth&&(t.status.ignoreScrollDepth=t.readJSConfig.ignoreScrollDepth),t.readJSConfig.debug&&("boolean"===typeof t.readJSConfig.debug.console&&(t.status.debug.console=t.readJSConfig.debug.console),"boolean"===typeof t.readJSConfig.debug.overlay&&(t.status.debug.overlay=t.readJSConfig.debug.overlay)),"number"===typeof t.readJSConfig.timeInterval&&(t.status.timeInterval=t.readJSConfig.timeInterval),t.readJSConfig.activity&&("number"===typeof t.readJSConfig.activity.increment&&(t.status.activity.increment=t.readJSConfig.activity.increment),"number"===typeof t.readJSConfig.activity.averageReadSpeed&&(t.status.activity.averageReadSpeed=t.readJSConfig.activity.averageReadSpeed)),t.readJSConfig.thresholds&&("number"===typeof t.readJSConfig.thresholds.viewport&&(t.status.thresholds.viewport=t.readJSConfig.thresholds.viewport),"number"===typeof t.readJSConfig.thresholds.domNode&&(t.status.thresholds.domNode=t.readJSConfig.thresholds.domNode),"number"===typeof t.readJSConfig.thresholds.readingPoint&&(t.status.thresholds.readingPoint=t.readJSConfig.thresholds.readingPoint),"number"===typeof t.readJSConfig.thresholds.domPolling&&(t.status.thresholds.domPolling=t.readJSConfig.thresholds.domPolling),"number"===typeof t.readJSConfig.thresholds.timeInView&&(t.status.thresholds.timeInView=t.readJSConfig.thresholds.timeInView),"number"===typeof t.readJSConfig.thresholds.minTimeInView&&(t.status.thresholds.minTimeInView=t.readJSConfig.thresholds.minTimeInView),"number"===typeof t.readJSConfig.thresholds.maxTimeInView&&(t.status.thresholds.maxTimeInView=t.readJSConfig.thresholds.maxTimeInView),"number"===typeof t.readJSConfig.thresholds.minVertical&&(t.status.thresholds.minVertical=t.readJSConfig.thresholds.minVertical),"number"===typeof t.readJSConfig.thresholds.percentagePoint&&(t.status.thresholds.percentagePoint=t.readJSConfig.thresholds.percentagePoint),"number"===typeof t.readJSConfig.thresholds.maxCalls&&(t.status.thresholds.maxCalls=t.readJSConfig.thresholds.maxCalls)),"string"!==typeof t.readJSConfig.el?(t.console("ERROR: readJS.initialize() expected el to be a string",1),!1):"function"===typeof t.readJSConfig.cb||(t.console("ERROR: readJS.setConfig() expected a callback function",1),!1)))},this.initialize=function(e){return"function"!==typeof e?(t.console("ERROR: readJS.initialize() expected a callback function",1),!1):(t.callback=e,t.configKey&&window.readJSConfig[t.configKey]?t.readJSConfig=window.readJSConfig[t.configKey]:t.readJSConfig=window.readJSConfig,"string"!==typeof t.readJSConfig.el?(t.console("ERROR: readJS.initialize() expected el to be a string or object",1),!1):(t.setInitialTime(),t.isOnValue=!0,t.stopPolling(),t.readingWorker=window.setInterval(t.checkActivity,1e3*t.status.timeInterval),t.intervals.push(t.readingWorker),t.console("readJS: starting interval ID",t.readingWorker,1),t.inDebugMode(document.location.href),!0))},this.setInitialTime=function(){t.status.activity.initialTime=(new Date).getTime()},this.calculateTotalTime=function(){if(t.status.activity.initialTime){var e=(new Date).getTime(),n=t.status.activity.totalTime;t.status.activity.totalTime=parseInt(n)+parseInt(e)-parseInt(t.status.activity.initialTime),t.setInitialTime()}return t.status.activity.totalTime>0?t.status.activity.totalTime:(t.console("ERROR: readJS.calculateTotalTIme() - initialTime not set",1),!1)},this.getScannableTargets=function(e){var n=document.querySelectorAll(e);return 0===n.length?(t.console("ERROR: readJS.getScannableTargets(cssSelector) - No elements by that CSS selector!",1),!1):(t.scannableTargets=[],t.scannableTargets=Array.prototype.slice.call(n),t.scannableTargetsCount=t.scannableTargets.length,t.scannableTargets)},this.visibleScannableTargets=function(e){if("undefined"!==typeof e&&e.length>0){var n=[];if(t.visibleElementsMap=[],1==e.length){var i=t.inView(e[0],!1);(i.dom_node_viewport_percent>t.status.thresholds.viewport||i.dom_node_inview_percent>80)&&(n.push(e[0]),t.visibleElementsMap.push(0))}else for(var o=0;o<e.length;o++)t.inView(e[o],!1).dom_node_inview_percent>80&&(n.push(e[o]),t.visibleElementsMap.push(o));return n.length>3?(t.console("ERROR: readJS.visibleScannableTargets() - More than 3 elements visible!",1),!1):n}return t.console("ERROR: readJS.visibleScannableTargets() - No scannableTargets found!",1),!1},this.getIntervals=function(){return t.intervals},this.checkActivity=function(){var e=t.status.timeInterval;t.status.activity.timeOnPage+=e,t.status.activity.timeInUnknownState+=e,t.status.activity.readingPoints+=e,t.detectForScroll(),t.endConditionsChecked()},this.endConditionsChecked=function(){if(t.isUpdateRequired()){var e=t.visibleScannableTargets(t.scannableTargets);if(e&&e.length>0)return t.domNode=e[0],t.inView(t.domNode),t.addPoints(),t.hasRead(),!0}return!1},this.detectForScroll=function(){return!!t.status.activity.scrolled&&(t.status.activity.scrolled=!1,t.reactivate(),t.console("detected scroll: ".concat(t.status.activity.timeOnPage," seconds"),3),!0)},this.console=function(e,n){return!!(t.status.debug.console&&n<=t.status.debug.level)&&(console.log(t.readingWorker,e),!0)},this.getText=function(e){try{for(var n="",i=e.childNodes.length,o=0;o<i;o++){var a=e.childNodes[o];8!==a.nodeType&&(n+=1!==a.nodeType?a.nodeValue:t.getText(a))}return n.replace(/[\t\n\r]+/g,"").replace(/\s+/g," ").trim()}catch(r){return t.console(r,1),!1}},this.hasRead=function(){if(!t.status.ignoreScrollDepth&&t.status.activity.scrollDepth<t.status.thresholds.scrollDepth)return t.console("Has not read yet because user didn't pass scrollDepth threshold",3),t.report(),!1;if(t.status.strict&&t.status.activity.dnp<t.status.thresholds.domNode)return t.console("STRICT MODE: not enough of dom node is in view",3),t.report(),!1;if(t.status.activity.readingPoints<=t.status.thresholds.readingPoint)return t.console("Not enough points scored for callback",3),t.report(),!1;if(t.status.activity.timeInView<t.status.thresholds.timeInView)return t.console("Not enough time in view for callback",3),t.report(),!1;t.callback({timeInView:t.status.activity.timeInView,timeOnPage:t.status.activity.timeOnPage,domNode:t.domNode}),t.status.activity.numberOfCalls++,t.scannableTargets.splice(t.visibleElementsMap[0],1);var e=!1;return 1===t.scannableTargetsCount&&t.scannableTargets.length<=0?(t.console("readJS: stopping because the user has read the article ".concat(t.status.activity.readingPoints),2),e=!0):t.status.activity.numberOfCalls>=t.status.thresholds.maxCalls?(t.console("scannedJS: stopping because the user has scanned the maximum number of headlines ".concat(t.status.thresholds.maxCalls),2),e=!0):t.scannableTargets.length<=0&&(t.console("scannedJS: stopping because the user has scanned all available headlines ".concat(t.status.activity.numberOfCalls),2),e=!0),e&&(t.removeListeners(),t.stopPolling()),!0},this.stopPolling=function(){t.readingWorker&&(window.clearInterval(t.readingWorker),t.console("readJS: ending interval ID ".concat(t.readingWorker),3),delete t.readingWorker)},this.report=function(){t.console("readingPoints: ".concat(t.status.activity.readingPoints," timeInView: ").concat(t.status.activity.timeInView," readingPointThreshold: ").concat(t.status.thresholds.readingPoint," timeInViewThreshold: ").concat(t.status.thresholds.timeInView))},this.addPoints=function(){return!!t.inViewport(t.domNode)&&(t.status.activity.dnp>t.status.thresholds.domNode&&(t.status.activity.readingPoints+=t.status.activity.increment),t.status.activity.vpp>t.status.thresholds.viewport&&(t.status.activity.readingPoints+=t.status.activity.increment),t.status.activity.readingPoints)},this.isUpdateRequired=function(){return t.status.activity.pollingPoints+=100*Math.pow(.9,t.status.activity.timeInUnknownState),t.status.activity.pollingPoints>=t.status.thresholds.domPolling&&(t.console("readJS: analyzing the DOM at ".concat(t.status.activity.timeOnPage," seconds; current polling points: ").concat(t.status.activity.pollingPoints),3),t.status.activity.pollingPoints=0,!0)},this.reactivate=function(){t.console("readJS: reactivating refresh rate",3),t.status.activity.timeInUnknownState=0,t.status.activity.pollingPoints+=t.status.activity.increment},this.inDebugMode=function(e){var n=e.split("?")[1];if("string"!==typeof n)return!1;n.match(/overlay=true/)&&(t.status.debug.overlay=!0),n.match(/console=true/)&&(t.status.debug.console=!0);var i=n.match(/level=([0-3])/);return i&&(t.status.debug.level=parseInt(i[1],10)),!0},this.inViewport=function(e){var t=e.getBoundingClientRect();return t.bottom>0&&t.right>0&&t.left<window.innerWidth&&t.top<window.innerHeight},this.getScrollInfo=function(){var e;document.body.scrollTop?e=document.body.scrollTop:document.documentElement.scrollTop&&(e=document.documentElement.scrollTop);var n=Math.abs(e)+window.innerHeight;return n>t.status.activity.scrollDepth&&(t.status.activity.scrollDepth=n),!0},this.removeDomNode=function(e){var t=document.getElementById(e);return!!t&&(t.parentNode.removeChild(t),t=null,!0)},this.removeOverlays=function(){t.removeDomNode("viewport_inview"),t.removeDomNode("overlap_inview"),t.removeDomNode("domnode_inview"),t.removeDomNode("scroll_depth_marker")},this.getVisibilityProperties=function(){var e,t;return"undefined"!==typeof document.hidden?(e="hidden",t="visibilitychange"):"undefined"!==typeof document.mozHidden?(e="mozHidden",t="mozvisibilitychange"):"undefined"!==typeof document.msHidden?(e="msHidden",t="msvisibilitychange"):"undefined"!==typeof document.webkitHidden&&(e="webkitHidden",t="webkitvisibilitychange"),{hiddenProp:e,eventName:t}},this.handleVisibilityChange=function(){var e=t.getVisibilityProperties().hiddenProp;document[e]?(t.console("readJS: pausing after detecting focus to another tab",2),t.stopPolling(),t.calculateTotalTime()):(t.console("readJS: reinitializing after detecting tab is in focus",2),t.initialize(t.callback))},this.inView=function(e){var n=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],i={tl:[],br:[]};i.tl[0]=Math.abs(document.body.scrollLeft||document.documentElement.scrollLeft),i.tl[1]=Math.abs(document.body.scrollTop||document.documentElement.scrollTop),i.br[0]=i.tl[0]+window.innerWidth,i.br[1]=i.tl[1]+window.innerHeight,i.width=window.innerWidth,i.height=window.innerHeight,i.area=i.width*i.height,n&&(t.status.coordinates.viewport=i);var o={tl:[],br:[]},a=e.getBoundingClientRect(),r="undefined"===typeof window.scrollX?parseInt(window.pageXOffset,10):parseInt(window.scrollX,10),s="undefined"===typeof window.scrollY?parseInt(window.pageYOffset,10):parseInt(window.scrollY,10);if(o.tl[0]=a.left+r,o.tl[1]=a.top+s,o.br[0]=o.tl[0]+a.width,o.br[1]=o.tl[1]+a.height,n&&(t.status.coordinates.domnode=o,t.getScrollInfo(),t.status.thresholds.scrollDepth=Math.abs(o.tl[1])+a.height*t.status.thresholds.minVertical/100),!t.inViewport(e))return{dom_node_inview_percent:0,dom_node_viewport_percent:0};var l={tl:[],br:[]};l.tl[0]=o.tl[0]>=i.tl[0]?o.tl[0]:i.tl[0],l.tl[1]=o.tl[1]>=i.tl[1]?o.tl[1]:i.tl[1],l.br[0]=o.br[0]<=i.br[0]?o.br[0]:i.br[0],l.br[1]=o.br[1]<=i.br[1]?o.br[1]:i.br[1],l.width=Math.abs(l.tl[0]-l.br[0]),l.height=Math.abs(l.tl[1]-l.br[1]);var d=Math.abs((o.tl[0]-o.br[0])*(o.tl[1]-o.br[1])),u=Math.abs(l.width*l.height),c=u/d*100,f=u/i.area*100;n&&(t.status.activity.dnp=c,t.status.activity.vpp=f,t.renderOverlays(i,o,a,l));var h={dom_node_inview_percent:c,dom_node_viewport_percent:f};return t.status.strict&&(c<t.status.thresholds.domNode||f<t.status.thresholds.viewport)||!n||(t.status.activity.timeInView+=t.status.timeInterval),h},this.renderOverlays=function(e,n,i,o){var a,r,s,l,d;if(!t.status.debug.overlay)return!1;t.status.debug.overlays.vui||((r=document.createElement("DIV")).id="viewport_inview",r.style.position="absolute",r.style.background="red",r.style.opacity="0.5",r.style.zIndex=9999,document.body.appendChild(r),t.status.debug.overlays.vui=r),t.status.debug.overlays.dui||((a=document.createElement("DIV")).id="domnode_inview",a.style.position="absolute",a.style.background="blue",a.style.opacity="0.5",a.style.zIndex=9999,document.body.appendChild(a),t.status.debug.overlays.dui=a),t.status.debug.overlays.oui||((s=document.createElement("DIV")).id="overlap_inview",document.body.appendChild(s),s.style.position="absolute",s.style.background="#4B0082",s.style.opacity="0.5",s.style.zIndex=9999,t.status.debug.overlays.oui=s),t.status.debug.overlays.sdmui||((d=document.createElement("DIV")).id="scroll_depth_marker",d.style.position="absolute",d.style.background="black",d.style.width="100%",d.style.height="4px",d.style.opacity="0.5",d.style.zIndex=9999,document.body.appendChild(d),t.status.debug.overlays.sdmui=d),t.status.debug.overlays.sdui||((l=document.createElement("DIV")).style.position="fixed",l.style.bottom="2em",l.style.right="2em",l.style.zIndex=1e4,l.style.background="#fff",l.style.border="1px solid #000",l.id="scrollinfo",document.body.appendChild(l),t.status.debug.overlays.sdui=l),(r=t.status.debug.overlays.vui).style.left=e.tl[0]+"px",r.style.top=e.tl[1]+"px",r.style.width=e.width+"px",r.style.height=e.height+"px",(a=t.status.debug.overlays.dui).style.left=n.tl[0]+"px",a.style.top=n.tl[1]+"px",a.style.width=i.width+"px",a.style.height=i.height+"px",(s=t.status.debug.overlays.oui).style.left=o.tl[0]+"px",s.style.top=o.tl[1]+"px",s.style.width=o.width+"px",s.style.height=o.height+"px",(d=t.status.debug.overlays.sdmui).style.left="0px",d.style.top=Math.floor(t.status.thresholds.scrollDepth)+"px",(l=t.status.debug.overlays.sdui).innerHTML="<ul><li>Scroll Depth Peak:"+t.status.activity.scrollDepth+"</li><li>Element Top: "+parseInt(t.status.coordinates.domnode.tl[1],10)+"</li><li>Element Bottom: "+parseInt(t.status.coordinates.domnode.br[1],10)+"</li><li>Scroll Depth Threshold: "+parseInt(t.status.thresholds.scrollDepth,10)+"</li></ul>"},this.handleScroll=function(){t.status.activity.scrolled=!0},this.handleClick=function(){t.status.activity.readingPoints+=t.status.activity.increment,t.reactivate()},this.handleLoad=function(){try{t.getScannableTargets(t.readJSConfig.el),t.domNode=document.querySelector(t.readJSConfig.el),t.setTimeInViewThreshold(),t.domNode.addEventListener("click",t.handleClick),t.visibleScannableTargets(t.scannableTargets)}catch(e){return t.console(e),!1}},this.setTimeInViewThreshold=function(){if("number"===typeof t.status.thresholds.timeInView)return!1;var e=t.getText(t.domNode).split(" ").length,n=t.status.activity.averageReadSpeed;return t.status.thresholds.timeInView=Math.floor(e*(t.status.thresholds.percentagePoint/100)/n),t.status.thresholds.minTimeInView>t.status.thresholds.timeInView?t.status.thresholds.timeInView=t.status.thresholds.minTimeInView:t.status.thresholds.timeInView>t.status.thresholds.maxTimeInView&&(t.status.thresholds.timeInView=t.status.thresholds.maxTimeInView),!0},this.removeListeners=function(){window.removeEventListener("scroll",t.handleScroll),window.removeEventListener("load",t.handleLoad),"undefined"!==typeof t.domNode&&t.domNode.removeEventListener("click",t.handleClick),document.removeEventListener(t.getVisibilityProperties().eventName,t.handleVisibilityChange,!1)},this.isOn=function(){return t.isOnValue},this.turnOff=function(){return!!t.isOnValue&&(t.removeListeners(),t.console("readJS: has been asked to stop midway and has complied",1),t.stopPolling(),t.removeOverlays(),t.status.activity.read=!1,t.isOnValue=!1,!0)},this.checkGooglebot=function(e){return new RegExp("Googlebot").test(e)},this.turnOn=function(){return!t.isOnValue&&(!(navigator&&navigator.userAgent&&t.checkGooglebot(navigator.userAgent))&&(t.resetConfigStatus(),t.setConfig(),t.initialized&&!t.readJSConfig.spa?(t.console("ERROR: Not a SPA. Cannot turnOn() again on the same web page",1),!1):"undefined"===typeof t.readJSConfig?(t.console("ERROR: Could not find callback and/or domNode css selector in window.readJSConfig",1),!1):"string"!==typeof t.readJSConfig.el?(t.console("ERROR:  readJSConfig expected el to be a string",1),!1):"function"!==typeof t.readJSConfig.cb?(t.console("ERROR: readJSConfig expected a callback function",1),!1):(window.addEventListener("scroll",t.handleScroll),document.addEventListener(t.getVisibilityProperties().eventName,t.handleVisibilityChange,!1),t.status.spa?t.handleLoad():window.addEventListener("load",t.handleLoad),t.initialize(t.readJSConfig.cb),t.isOnValue=!0,t.initialized||(t.handleVisibilityChange(),t.initialized=!0),!0)))}}"undefined"!==typeof window&&(window.readJS=new e("read"),window.scannedJS=new e("scanned"),"undefined"!==typeof readJSConfig&&!0!==readJSConfig.spa?readJSConfig.scanned||readJSConfig.read?(readJSConfig.scanned&&window.scannedJS.turnOn(),readJSConfig.read&&window.readJS.turnOn()):window.readJS.turnOn():(window.readJS&&window.readJS.resetConfigStatus(),window.scannedJS&&window.scannedJS.resetConfigStatus()))}()}}]);