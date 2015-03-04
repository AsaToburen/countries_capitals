!function(n,e){"use strict";function t(){function n(n,t){return e.extend(Object.create(n),t)}function t(n,e){var t=e.caseInsensitiveMatch,a={originalPath:n,regexp:n},r=a.keys=[];return n=n.replace(/([().])/g,"\\$1").replace(/(\/)?:(\w+)([\?\*])?/g,function(n,e,t,a){var i="?"===a?a:null,o="*"===a?a:null;return r.push({name:t,optional:!!i}),e=e||"",""+(i?"":e)+"(?:"+(i?e:"")+(o&&"(.+?)"||"([^/]+)")+(i||"")+")"+(i||"")}).replace(/([\/$\*])/g,"\\$1"),a.regexp=new RegExp("^"+n+"$",t?"i":""),a}var a={};this.when=function(n,r){var i=e.copy(r);if(e.isUndefined(i.reloadOnSearch)&&(i.reloadOnSearch=!0),e.isUndefined(i.caseInsensitiveMatch)&&(i.caseInsensitiveMatch=this.caseInsensitiveMatch),a[n]=e.extend(i,n&&t(n,i)),n){var o="/"==n[n.length-1]?n.substr(0,n.length-1):n+"/";a[o]=e.extend({redirectTo:n},t(o,i))}return this},this.caseInsensitiveMatch=!1,this.otherwise=function(n){return"string"==typeof n&&(n={redirectTo:n}),this.when(null,n),this},this.$get=["$rootScope","$location","$routeParams","$q","$injector","$templateRequest","$sce",function(t,r,i,o,u,l,c){function f(n,e){var t=e.keys,a={};if(!e.regexp)return null;var r=e.regexp.exec(n);if(!r)return null;for(var i=1,o=r.length;o>i;++i){var s=t[i-1],u=r[i];s&&u&&(a[s.name]=u)}return a}function v(n){var a=C.current;h=m(),$=h&&a&&h.$$route===a.$$route&&e.equals(h.pathParams,a.pathParams)&&!h.reloadOnSearch&&!g,$||!a&&!h||t.$broadcast("$routeChangeStart",h,a).defaultPrevented&&n&&n.preventDefault()}function d(){var n=C.current,a=h;$?(n.params=a.params,e.copy(n.params,i),t.$broadcast("$routeUpdate",n)):(a||n)&&(g=!1,C.current=a,a&&a.redirectTo&&(e.isString(a.redirectTo)?r.path(p(a.redirectTo,a.params)).search(a.params).replace():r.url(a.redirectTo(a.pathParams,r.path(),r.search())).replace()),o.when(a).then(function(){if(a){var n,t,r=e.extend({},a.resolve);return e.forEach(r,function(n,t){r[t]=e.isString(n)?u.get(n):u.invoke(n,null,null,t)}),e.isDefined(n=a.template)?e.isFunction(n)&&(n=n(a.params)):e.isDefined(t=a.templateUrl)&&(e.isFunction(t)&&(t=t(a.params)),t=c.getTrustedResourceUrl(t),e.isDefined(t)&&(a.loadedTemplateUrl=t,n=l(t))),e.isDefined(n)&&(r.$template=n),o.all(r)}}).then(function(r){a==C.current&&(a&&(a.locals=r,e.copy(a.params,i)),t.$broadcast("$routeChangeSuccess",a,n))},function(e){a==C.current&&t.$broadcast("$routeChangeError",a,n,e)}))}function m(){var t,i;return e.forEach(a,function(a){!i&&(t=f(r.path(),a))&&(i=n(a,{params:e.extend({},r.search(),t),pathParams:t}),i.$$route=a)}),i||a[null]&&n(a[null],{params:{},pathParams:{}})}function p(n,t){var a=[];return e.forEach((n||"").split(":"),function(n,e){if(0===e)a.push(n);else{var r=n.match(/(\w+)(?:[?*])?(.*)/),i=r[1];a.push(t[i]),a.push(r[2]||""),delete t[i]}}),a.join("")}var h,$,g=!1,C={routes:a,reload:function(){g=!0,t.$evalAsync(function(){v(),d()})},updateParams:function(n){if(!this.current||!this.current.$$route)throw s("norout","Tried updating route when with no current route");n=e.extend({},this.current.params,n),r.path(p(this.current.$$route.originalPath,n)),r.search(n)}};return t.$on("$locationChangeStart",v),t.$on("$locationChangeSuccess",d),C}]}function a(){this.$get=function(){return{}}}function r(n,t,a){return{restrict:"ECA",terminal:!0,priority:400,transclude:"element",link:function(r,i,o,s,u){function l(){d&&(a.cancel(d),d=null),f&&(f.$destroy(),f=null),v&&(d=a.leave(v),d.then(function(){d=null}),v=null)}function c(){var o=n.current&&n.current.locals,s=o&&o.$template;if(e.isDefined(s)){var c=r.$new(),d=n.current,h=u(c,function(n){a.enter(n,null,v||i).then(function(){!e.isDefined(m)||m&&!r.$eval(m)||t()}),l()});v=h,f=d.scope=c,f.$emit("$viewContentLoaded"),f.$eval(p)}else l()}var f,v,d,m=o.autoscroll,p=o.onload||"";r.$on("$routeChangeSuccess",c),c()}}}function i(n,e,t){return{restrict:"ECA",priority:-400,link:function(a,r){var i=t.current,o=i.locals;r.html(o.$template);var s=n(r.contents());if(i.controller){o.$scope=a;var u=e(i.controller,o);i.controllerAs&&(a[i.controllerAs]=u),r.data("$ngControllerController",u),r.children().data("$ngControllerController",u)}s(a)}}}var o=e.module("ngRoute",["ng"]).provider("$route",t),s=e.$$minErr("ngRoute");o.provider("$routeParams",a),o.directive("ngView",r),o.directive("ngView",i),r.$inject=["$route","$anchorScroll","$animate"],i.$inject=["$compile","$controller","$route"]}(window,window.angular),function(n,e,t){"use strict";e.module("ngAnimate",["ng"]).directive("ngAnimateChildren",function(){var n="$$ngAnimateChildren";return function(t,a,r){var i=r.ngAnimateChildren;e.isString(i)&&0===i.length?a.data(n,!0):t.$watch(i,function(e){a.data(n,!!e)})}}).factory("$$animateReflow",["$$rAF","$document",function(n,e){var t=e[0].body;return function(e){return n(function(){t.offsetWidth+1;e()})}}]).config(["$provide","$animateProvider",function(a,r){function i(n){for(var e=0;e<n.length;e++){var t=n[e];if(t.nodeType==h)return t}}function o(n){return n&&e.element(n)}function s(n){return e.element(i(n))}function u(n,e){return i(n)==i(e)}var l,c=e.noop,f=e.forEach,v=r.$$selectors,d=e.isArray,m=e.isString,p=e.isObject,h=1,$="$$ngAnimateState",g="$$ngAnimateChildren",C="ng-animate",y={running:!0};a.decorator("$animate",["$delegate","$$q","$injector","$sniffer","$rootElement","$$asyncCallback","$rootScope","$document","$templateRequest","$$jqLite",function(n,t,a,h,b,D,w,A,x,S){function k(n,e){var t=n.data($)||{};return e&&(t.running=!0,t.structural=!0,n.data($,t)),t.disabled||t.running&&t.structural}function E(n){var e,a=t.defer();return a.promise.$$cancelFn=function(){e&&e()},w.$$postDigest(function(){e=n(function(){a.resolve()})}),a.promise}function M(n){return p(n)?(n.tempClasses&&m(n.tempClasses)&&(n.tempClasses=n.tempClasses.split(/\s+/)),n):void 0}function P(n,e,t){t=t||{};var a={};f(t,function(n,e){f(e.split(" "),function(e){a[e]=n})});var r=Object.create(null);f((n.attr("class")||"").split(/\s+/),function(n){r[n]=!0});var i=[],o=[];return f(e&&e.classes||[],function(n,e){var t=r[e],s=a[e]||{};n===!1?(t||"addClass"==s.event)&&o.push(e):n===!0&&(t&&"removeClass"!=s.event||i.push(e))}),i.length+o.length>0&&[i.join(" "),o.join(" ")]}function T(n){if(n){var e=[],t={},r=n.substr(1).split(".");(h.transitions||h.animations)&&e.push(a.get(v[""]));for(var i=0;i<r.length;i++){var o=r[i],s=v[o];s&&!t[o]&&(e.push(a.get(s)),t[o]=!0)}return e}}function R(n,t,a,r){function i(n,e){var t=n[e],a=n["before"+e.charAt(0).toUpperCase()+e.substr(1)];return t||a?("leave"==e&&(a=t,t=null),D.push({event:e,fn:t}),C.push({event:e,fn:a}),!0):void 0}function o(e,t,i){function o(n){if(t){if((t[n]||c)(),++v<s.length)return;t=null}i()}var s=[];f(e,function(n){n.fn&&s.push(n)});var v=0;f(s,function(e,i){var s=function(){o(i)};switch(e.event){case"setClass":t.push(e.fn(n,u,l,s,r));break;case"animate":t.push(e.fn(n,a,r.from,r.to,s));break;case"addClass":t.push(e.fn(n,u||a,s,r));break;case"removeClass":t.push(e.fn(n,l||a,s,r));break;default:t.push(e.fn(n,s,r))}}),t&&0===t.length&&i()}var s=n[0];if(s){r&&(r.to=r.to||{},r.from=r.from||{});var u,l;d(a)&&(u=a[0],l=a[1],u?l?a=u+" "+l:(a=u,t="addClass"):(a=l,t="removeClass"));var v="setClass"==t,m=v||"addClass"==t||"removeClass"==t||"animate"==t,p=n.attr("class"),h=p+" "+a;if(U(h)){var $=c,g=[],C=[],y=c,b=[],D=[],w=(" "+h).replace(/\s+/g,".");return f(T(w),function(n){var e=i(n,t);!e&&v&&(i(n,"addClass"),i(n,"removeClass"))}),{node:s,event:t,className:a,isClassBased:m,isSetClassOperation:v,applyStyles:function(){r&&n.css(e.extend(r.from||{},r.to||{}))},before:function(n){$=n,o(C,g,function(){$=c,n()})},after:function(n){y=n,o(D,b,function(){y=c,n()})},cancel:function(){g&&(f(g,function(n){(n||c)(!0)}),$(!0)),b&&(f(b,function(n){(n||c)(!0)}),y(!0))}}}}}function F(n,t,a,r,i,o,s,u){function v(e){var r="$animate:"+e;w&&w[r]&&w[r].length>0&&D(function(){a.triggerHandler(r,{event:n,className:t})})}function d(){v("before")}function m(){v("after")}function p(){v("close"),u()}function h(){h.hasBeenRun||(h.hasBeenRun=!0,o())}function g(){if(!g.hasBeenRun){b&&b.applyStyles(),g.hasBeenRun=!0,s&&s.tempClasses&&f(s.tempClasses,function(n){l.removeClass(a,n)});var e=a.data($);e&&(b&&b.isClassBased?j(a,t):(D(function(){var e=a.data($)||{};F==e.index&&j(a,t,n)}),a.data($,e))),p()}}var y=c,b=R(a,n,t,s);if(!b)return h(),d(),m(),g(),y;n=b.event,t=b.className;var w=e.element._data(b.node);if(w=w&&w.events,r||(r=i?i.parent():a.parent()),B(a,r))return h(),d(),m(),g(),y;var A=a.data($)||{},x=A.active||{},S=A.totalActive||0,k=A.last,E=!1;if(S>0){var M=[];if(b.isClassBased){if("setClass"==k.event)M.push(k),j(a,t);else if(x[t]){var P=x[t];P.event==n?E=!0:(M.push(P),j(a,t))}}else if("leave"==n&&x["ng-leave"])E=!0;else{for(var T in x)M.push(x[T]);A={},j(a,!0)}M.length>0&&f(M,function(n){n.cancel()})}if(!b.isClassBased||b.isSetClassOperation||"animate"==n||E||(E="addClass"==n==a.hasClass(t)),E)return h(),d(),m(),p(),y;x=A.active||{},S=A.totalActive||0,"leave"==n&&a.one("$destroy",function(){var n=e.element(this),t=n.data($);if(t){var a=t.active["ng-leave"];a&&(a.cancel(),j(n,"ng-leave"))}}),l.addClass(a,C),s&&s.tempClasses&&f(s.tempClasses,function(n){l.addClass(a,n)});var F=N++;return S++,x[t]=b,a.data($,{last:b,active:x,index:F,totalActive:S}),d(),b.before(function(e){var r=a.data($);e=e||!r||!r.active[t]||b.isClassBased&&r.active[t].event!=n,h(),e===!0?g():(m(),b.after(g))}),b.cancel}function O(n){var t=i(n);if(t){var a=e.isFunction(t.getElementsByClassName)?t.getElementsByClassName(C):t.querySelectorAll("."+C);f(a,function(n){n=e.element(n);var t=n.data($);t&&t.active&&f(t.active,function(n){n.cancel()})})}}function j(n,e){if(u(n,b))y.disabled||(y.running=!1,y.structural=!1);else if(e){var t=n.data($)||{},a=e===!0;!a&&t.active&&t.active[e]&&(t.totalActive--,delete t.active[e]),(a||!t.totalActive)&&(l.removeClass(n,C),n.removeData($))}}function B(n,t){if(y.disabled)return!0;if(u(n,b))return y.running;var a,r,i;do{if(0===t.length)break;var o=u(t,b),s=o?y:t.data($)||{};if(s.disabled)return!0;if(o&&(i=!0),a!==!1){var l=t.data(g);e.isDefined(l)&&(a=l)}r=r||s.running||s.last&&!s.last.isClassBased}while(t=t.parent());return!i||!a&&r}l=S,b.data($,y);var I=w.$watch(function(){return x.totalPendingRequests},function(n){0===n&&(I(),w.$$postDigest(function(){w.$$postDigest(function(){y.running=!1})}))}),N=0,q=r.classNameFilter(),U=q?function(n){return q.test(n)}:function(){return!0};return{animate:function(n,e,t,a,r){return a=a||"ng-inline-animate",r=M(r)||{},r.from=t?e:null,r.to=t?t:e,E(function(e){return F("animate",a,s(n),null,null,c,r,e)})},enter:function(t,a,r,i){return i=M(i),t=e.element(t),a=o(a),r=o(r),k(t,!0),n.enter(t,a,r),E(function(n){return F("enter","ng-enter",s(t),a,r,c,i,n)})},leave:function(t,a){return a=M(a),t=e.element(t),O(t),k(t,!0),E(function(e){return F("leave","ng-leave",s(t),null,null,function(){n.leave(t)},a,e)})},move:function(t,a,r,i){return i=M(i),t=e.element(t),a=o(a),r=o(r),O(t),k(t,!0),n.move(t,a,r),E(function(n){return F("move","ng-move",s(t),a,r,c,i,n)})},addClass:function(n,e,t){return this.setClass(n,e,[],t)},removeClass:function(n,e,t){return this.setClass(n,[],e,t)},setClass:function(t,a,r,o){o=M(o);var u="$$animateClasses";if(t=e.element(t),t=s(t),k(t))return n.$$setClassImmediately(t,a,r,o);var l,c=t.data(u),v=!!c;return c||(c={},c.classes={}),l=c.classes,a=d(a)?a:a.split(" "),f(a,function(n){n&&n.length&&(l[n]=!0)}),r=d(r)?r:r.split(" "),f(r,function(n){n&&n.length&&(l[n]=!1)}),v?(o&&c.options&&(c.options=e.extend(c.options||{},o)),c.promise):(t.data(u,c={classes:l,options:o}),c.promise=E(function(e){var a=t.parent(),r=i(t),o=r.parentNode;if(!o||o.$$NG_REMOVED||r.$$NG_REMOVED)return void e();var s=t.data(u);t.removeData(u);var l=t.data($)||{},c=P(t,s,l.active);return c?F("setClass",c,t,a,null,function(){c[0]&&n.$$addClassImmediately(t,c[0]),c[1]&&n.$$removeClassImmediately(t,c[1])},s.options,e):e()}))},cancel:function(n){n.$$cancelFn()},enabled:function(n,e){switch(arguments.length){case 2:if(n)j(e);else{var t=e.data($)||{};t.disabled=!0,e.data($,t)}break;case 1:y.disabled=!n;break;default:n=!y.disabled}return!!n}}}]),r.register("",["$window","$sniffer","$timeout","$$animateReflow",function(a,r,o,s){function u(){j||(j=s(function(){z=[],j=null,L={}}))}function v(n,e){j&&j(),z.push(e),j=s(function(){f(z,function(n){n()}),z=[],j=null,L={}})}function p(n,t){var a=i(n);n=e.element(a),X.push(n);var r=Date.now()+t;Q>=r||(o.cancel(J),Q=r,J=o(function(){$(X),X=[]},t,!1))}function $(n){f(n,function(n){var e=n.data(K);e&&f(e.closeAnimationFns,function(n){n()})})}function g(n,e){var t=e?L[e]:null;if(!t){var r=0,i=0,o=0,s=0;f(n,function(n){if(n.nodeType==h){var e=a.getComputedStyle(n)||{},t=e[P+B];r=Math.max(C(t),r);var u=e[P+N];i=Math.max(C(u),i);{e[R+N]}s=Math.max(C(e[R+N]),s);var l=C(e[R+B]);l>0&&(l*=parseInt(e[R+q],10)||1),o=Math.max(l,o)}}),t={total:0,transitionDelay:i,transitionDuration:r,animationDelay:s,animationDuration:o},e&&(L[e]=t)}return t}function C(n){var e=0,t=m(n)?n.split(/\s*,\s*/):[];return f(t,function(n){e=Math.max(parseFloat(n)||0,e)}),e}function y(n){var e=n.parent(),t=e.data(V);return t||(e.data(V,++H),t=H),t+"-"+i(n).getAttribute("class")}function b(n,e,t,a){var r=["ng-enter","ng-leave","ng-move"].indexOf(t)>=0,o=y(e),s=o+" "+t,u=L[s]?++L[s].total:0,c={};if(u>0){var f=t+"-stagger",v=o+" "+f,d=!L[v];d&&l.addClass(e,f),c=g(e,v),d&&l.removeClass(e,f)}l.addClass(e,t);var m=e.data(K)||{},p=g(e,s),h=p.transitionDuration,$=p.animationDuration;if(r&&0===h&&0===$)return l.removeClass(e,t),!1;var C=a||r&&h>0,b=$>0&&c.animationDelay>0&&0===c.animationDuration,D=m.closeAnimationFns||[];e.data(K,{stagger:c,cacheKey:s,running:m.running||0,itemIndex:u,blockTransition:C,closeAnimationFns:D});var x=i(e);return C&&(w(x,!0),a&&e.css(a)),b&&A(x,!0),!0}function D(n,e,t,a,r){function s(){e.off(N,u),l.removeClass(e,d),l.removeClass(e,m),B&&o.cancel(B),E(e,t);var n=i(e);for(var a in $)n.style.removeProperty($[a])}function u(n){n.stopPropagation();var e=n.originalEvent||n,t=e.$manualTimeStamp||e.timeStamp||Date.now(),r=parseFloat(e.elapsedTime.toFixed(W));Math.max(t-I,0)>=R&&r>=M&&a()}var c=i(e),v=e.data(K);if(-1==c.getAttribute("class").indexOf(t)||!v)return void a();var d="",m="";f(t.split(" "),function(n,e){var t=(e>0?" ":"")+n;d+=t+"-active",m+=t+"-pending"});var h="",$=[],C=v.itemIndex,y=v.stagger,b=0;if(C>0){var D=0;y.transitionDelay>0&&0===y.transitionDuration&&(D=y.transitionDelay*C);var x=0;y.animationDelay>0&&0===y.animationDuration&&(x=y.animationDelay*C,$.push(O+"animation-play-state")),b=Math.round(100*Math.max(D,x))/100}b||(l.addClass(e,d),v.blockTransition&&w(c,!1));var S=v.cacheKey+" "+d,k=g(e,S),M=Math.max(k.transitionDuration,k.animationDuration);if(0===M)return l.removeClass(e,d),E(e,t),void a();!b&&r&&Object.keys(r).length>0&&(k.transitionDuration||(e.css("transition",k.animationDuration+"s linear all"),$.push("transition")),e.css(r));var P=Math.max(k.transitionDelay,k.animationDelay),R=P*G;if($.length>0){var j=c.getAttribute("style")||"";";"!==j.charAt(j.length-1)&&(j+=";"),c.setAttribute("style",j+" "+h)}var B,I=Date.now(),N=F+" "+T,q=(P+M)*_,U=(b+q)*G;return b>0&&(l.addClass(e,m),B=o(function(){B=null,k.transitionDuration>0&&w(c,!1),k.animationDuration>0&&A(c,!1),l.addClass(e,d),l.removeClass(e,m),r&&(0===k.transitionDuration&&e.css("transition",k.animationDuration+"s linear all"),e.css(r),$.push("transition"))},b*G,!1)),e.on(N,u),v.closeAnimationFns.push(function(){s(),a()}),v.running++,p(e,U),s}function w(n,e){n.style[P+I]=e?"none":""}function A(n,e){n.style[R+U]=e?"paused":""}function x(n,e,t,a){return b(n,e,t,a)?function(n){n&&E(e,t)}:void 0}function S(n,e,t,a,r){return e.data(K)?D(n,e,t,a,r):(E(e,t),void a())}function k(n,e,t,a,r){var i=x(n,e,t,r.from);if(!i)return u(),void a();var o=i;return v(e,function(){o=S(n,e,t,a,r.to)}),function(n){(o||c)(n)}}function E(n,e){l.removeClass(n,e);var t=n.data(K);t&&(t.running&&t.running--,t.running&&0!==t.running||n.removeData(K))}function M(n,e){var t="";return n=d(n)?n:n.split(/\s+/),f(n,function(n,a){n&&n.length>0&&(t+=(a>0?" ":"")+n+e)}),t}var P,T,R,F,O="";n.ontransitionend===t&&n.onwebkittransitionend!==t?(O="-webkit-",P="WebkitTransition",T="webkitTransitionEnd transitionend"):(P="transition",T="transitionend"),n.onanimationend===t&&n.onwebkitanimationend!==t?(O="-webkit-",R="WebkitAnimation",F="webkitAnimationEnd animationend"):(R="animation",F="animationend");var j,B="Duration",I="Property",N="Delay",q="IterationCount",U="PlayState",V="$$ngAnimateKey",K="$$ngAnimateCSS3Data",W=3,_=1.5,G=1e3,L={},H=0,z=[],J=null,Q=0,X=[];return{animate:function(n,e,t,a,r,i){return i=i||{},i.from=t,i.to=a,k("animate",n,e,r,i)},enter:function(n,e,t){return t=t||{},k("enter",n,"ng-enter",e,t)},leave:function(n,e,t){return t=t||{},k("leave",n,"ng-leave",e,t)},move:function(n,e,t){return t=t||{},k("move",n,"ng-move",e,t)},beforeSetClass:function(n,e,t,a,r){r=r||{};var i=M(t,"-remove")+" "+M(e,"-add"),o=x("setClass",n,i,r.from);return o?(v(n,a),o):(u(),void a())},beforeAddClass:function(n,e,t,a){a=a||{};var r=x("addClass",n,M(e,"-add"),a.from);return r?(v(n,t),r):(u(),void t())},beforeRemoveClass:function(n,e,t,a){a=a||{};var r=x("removeClass",n,M(e,"-remove"),a.from);return r?(v(n,t),r):(u(),void t())},setClass:function(n,e,t,a,r){r=r||{},t=M(t,"-remove"),e=M(e,"-add");var i=t+" "+e;return S("setClass",n,i,a,r.to)},addClass:function(n,e,t,a){return a=a||{},S("addClass",n,M(e,"-add"),t,a.to)},removeClass:function(n,e,t,a){return a=a||{},S("removeClass",n,M(e,"-remove"),t,a.to)}}}])}])}(window,window.angular);