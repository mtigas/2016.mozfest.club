/*! updated; 10-21-2016 05:19 PM */

!function(){function a(){var a=this;this.version="1.4.1",this.pageReady=function(){var b=a._PRStack||!1;if(!k.isArray(b))return!1;var c=h(b);c(),delete a._PRStack,j.PRExec=!0},this.site=new c(this),this.utils=new d(this),this.addUtil=function(b,c){a.utils.Add(b,c)}}function b(a,b,c){function d(a){a=a||"";var b=a.length>0&&j.reserved.indexOf(a)>-1?!0:!1;return b&&i("[AddConstructor] Error: Reserved word '"+a+"'"),b}if(b=k.trimStr(b),b.indexOf(".")>-1){b="."===b.charAt(0)?b.slice(1,b.length):b;for(var e=b.split("."),f=e.length,g=0;f>g;g++){var h=e[g];if(0===g&&d(h))return!1;a[h]||(a[h]=g!==f-1?{}:"function"!=typeof c?{}:c),a=a[h]}}else if(b.length>0&&!a[b]){if(d(b))return!1;"function"!=typeof c?(a[b]={},a=a[b]):(a[b]=c,a=a[b])}else{if(a[b])return i("[AddConstructor] Warning: Constructor already exists (constructor:"+b+"). Ignoring another instantiation."),!1;if(d(b))return!1;a=a[b]}if("object"==typeof c&&!k.isArray(c))for(var l in c)a[l]&&i("[AddConstructor] Warning: Overwriting '"+l+"' "+typeof a[l]+". (constructor:"+b+" )"),a[l]=c[l];return a}function c(a){var c=this;this.Add=function(a,d){return b(c,a,d)},this.OnPageReady=function(){var b=new e(c,a);return b.callback}(),this.OnDocReady=function(){var b=new f(c,a);return b.callback}()}function d(){var a=this;this.Add=function(c,d){return b(a,c,d)}}function e(a,b){this.callback=function(){var c=arguments,d=1===c.length?"":c[0],e=1===c.length?c[0]:c[1],f=d.length>0?!0:!1,h=f?a.Add(d,e):e;b.pageReady||function(){},j.PRExec?g(h):(b._PRStack||(b._PRStack=[]),b._PRStack.push({n:f?d:"GEN",t:h}))}}function f(a,b){this.callback=function(){var c=arguments,d=1===c.length?"":c[0],e=1===c.length?c[0]:c[1],f=d.length>0?!0:!1,i=f?a.Add(d,e):e;j.DRExec?g(i):(b._DRStack||(b._DRStack=[]),b._DRStack.push({n:f?d:"GEN",t:i}),j.docReadyTriggered||(j.docReadyTriggered=!0,DomReady.ready(function(){var a=b._DRStack||!1;if(!k.isArray(a))return!1;var c=h(a);c(),delete b._DRStack,j.DRExec=!0})))}}function g(a,b){b="function"==typeof b?b:!1;var c,d=function(){b&&b()};return c="function"==typeof a?function(){d(),a()}:a&&"function"==typeof a.init?function(){d(),a.init()}:function(){d()},b?c:void c()}function h(a){for(var b=0,c=a.length,d=[],e=function(){},f=function(a){var b=e;e=g(a,b)};c>=b;){var h=a[b];h&&"GEN"===h.n?(d.push(h),a.splice(b,1),c=a.length):b++}d=d.concat(a),c=d.length;for(var i=0;c>i;i++)f(d[i].t);return e}function i(a){window.console&&console.log&&console.log(a)}var j={reserved:"Add|OnPageReady|OnDocReady"};a.prototype={newInstance:function(){return new a}};var k={isArray:function(a){return a=a||!1,"[object Array]"===Object.prototype.toString.call(a)},trimStr:function(a){return a?a.toString().replace(/^\s+/,"").replace(/\s+$/,""):""}};window._$tartup=window.$tartup=function(){return new a}()}(),function(){function a(){if(!h&&(h=!0,i)){for(var a=0;a<i.length;a++)i[a].call(window,[]);i=[]}}function b(a){var b=window.onload;window.onload="function"!=typeof window.onload?a:function(){b&&b(),a()}}function c(){if(!g){if(g=!0,document.addEventListener&&!f.opera&&document.addEventListener("DOMContentLoaded",a,!1),f.msie&&window==top&&function(){if(!h){try{document.documentElement.doScroll("left")}catch(b){return void setTimeout(arguments.callee,0)}a()}}(),f.opera&&document.addEventListener("DOMContentLoaded",function(){if(!h){for(var b=0;b<document.styleSheets.length;b++)if(document.styleSheets[b].disabled)return void setTimeout(arguments.callee,0);a()}},!1),f.safari){var c;!function(){if(!h)if("loaded"!=document.readyState&&"complete"!=document.readyState)setTimeout(arguments.callee,0);else{if(void 0===c){for(var b=document.getElementsByTagName("link"),d=0;d<b.length;d++)"stylesheet"==b[d].getAttribute("rel")&&c++;b=document.getElementsByTagName("style"),c+=b.length}document.styleSheets.length!=c?setTimeout(arguments.callee,0):a()}}()}b(a)}}var d=window.DomReady={},e=navigator.userAgent.toLowerCase(),f={version:(e.match(/.+(?:rv|it|ra|ie)[\/: ]([\d.]+)/)||[])[1],safari:/webkit/.test(e),opera:/opera/.test(e),msie:/msie/.test(e)&&!/opera/.test(e),mozilla:/mozilla/.test(e)&&!/(compatible|webkit)/.test(e)},g=!1,h=!1,i=[];d.ready=function(a){c(),h?a.call(window,[]):i.push(function(){return a.call(window,[])})},c()}(),window.FOX_Plugins=window.FOX_Plugins||{};var DateTime=window.FOX_Plugins.DateTime=function(){var DateTime=function(date,formatStr){formatStr=formatStr||null;var i,obj={month:date.getMonth(),day:date.getDay(),year:date.getFullYear(),date:date.getDate(),hour:date.getHours(),minutes:date.getMinutes(),seconds:date.getSeconds(),ampm:date.getHours()<12?"am":"pm",fullStr:date.toString()},oldEnglish=function(n){if(n=n||"",n=n.toString(),n.length<1)return n;var s="",lastDigit=parseInt(n.charAt(n.length-1),10);switch(lastDigit){case 1:s="st";break;case 2:s="nd";break;case 3:s="rd";break;default:s="th"}return n+s},getMonthString=function(n,type){type=type||"full";var month=["January","February","March","April","May","June","July","August","September","October","November","December"],ret=month[n]||"";return"short"===type&&(ret=ret.slice(0,3)),ret},toStr=function(val){return val=isNaN(val)?"":val,val.toString()},getDayString=function(n,type){type=type||"full";var day=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],ret=day[n];return"short"===type&&(ret=ret.slice(0,3)),ret},replace={"${mm}":obj.month+1,"${month}":getMonthString(obj.month),"${month:short}":getMonthString(obj.month,"short"),"${day}":getDayString(obj.day),"${day:short}":getDayString(obj.day,"short"),"${yr}":obj.year,"${yr:short}":toStr(obj.year).substr(2),"${dd}":obj.date<10?"0"+toStr(obj.date):toStr(obj.date),"${ddTH}":oldEnglish(obj.date),"${hr}":obj.hour>12?obj.hour-12:obj.hour,"${hr:mil}":obj.hour<10?"0"+toStr(obj.hour):toStr(obj.hour),"${min}":obj.minutes<10?"0"+toStr(obj.minutes):toStr(obj.minutes),"${sec}":obj.seconds<10?"0"+toStr(obj.seconds):toStr(obj.seconds),"${ampm}":obj.ampm,"${AMPM}":obj.ampm.toUpperCase(),"${AmPm}":obj.ampm.charAt(0).toUpperCase()+obj.ampm.charAt(1)};for(i in replace)for(var idx=formatStr.indexOf(i);-1!==idx;)formatStr=formatStr.replace(i,replace[i]),idx=formatStr.indexOf(i);return formatStr};return DateTime}();!function(Modulr){return Modulr?void Modulr.define("FOX_Plugins:DateTime",function(){return window.FOX_Plugins.DateTime}):!1}(window.Modulr),window.FOX_Plugins=window.FOX_Plugins||{},FOX_Plugins.MediaOverlay=function($){var CONST={};CONST.domain="//global.fncstatic.com",CONST.size=[118,96,64,48,32,24,16],CONST.type={video:{type:"video",image:"/static/v/all/img/vd-overlay_${dim}.png"},slideshow:{type:"slideshow",image:"/static/v/all/img/ss-overlay_${dim}.png"},interactive:{type:"interactive",image:"/static/v/all/img/ia-overlay_${dim}.png"},freeform:{type:"interactive",image:"/static/v/all/img/ia-overlay_${dim}.png"},magnify:{type:"magnify",image:"/static/v/all/img/mg-overlay_${dim}.png"},listpage:{type:"listpage",image:"/static/v/all/img/lp-overlay_${dim}.png"},"list-article":{type:"listpage",image:"/static/v/all/img/lp-overlay_${dim}.png"}};var App=function(){};App.prototype.embed=function(config){var target=config.target,dim=(target.parent(),config.dim||!1),type=config.type;if(!target.attr("src"))return!1;if(!CONST.type[type])return!1;var trigger=function(){dim?setEmbed(config,dim):getDimensions(config,function(info){setEmbed(config,info)})},lazyImg=isLazyLoad(target);if(lazyImg){var lazyLoopIntv=!1,lazyLoop=function(){target.attr("src")===lazyImg?(trigger(),clearTimeout(lazyLoopIntv)):lazyLoopIntv=setTimeout(function(){lazyLoop()},800)};lazyLoop()}else trigger()};var setEmbed=function(config,dim){var target=config.target,parent=target.parent(),position=config.position||"bottom right",size=config.size||getSize(config,dim),edge=config.edge||getEdge(config,dim,size),type=config.type,responsive=config.responsive||!1,typeInfo=CONST.type[type];if(parent.hasClass("overlay-media")&&parent.attr("data-ovr"))return!1;var html=$('<div class="overlay-media" data-ovr="1"></div>');responsive?html.css({position:"relative"}):html.css({width:dim[0],height:dim[1],position:"relative"});var overlay=$('<div class="ovr ovr-'+size+'"></div>'),overlayImg=CONST.domain+typeInfo.image.replace("${dim}",size),css={background:"url('"+overlayImg+"') no-repeat center center",position:"absolute",width:size,height:size,"background-position":"0px 0px","z-index":1,opacity:0,"-webkit-transition":"opacity 0.3s","-moz-transition":"opacity 0.3s","-o-transition":"opacity 0.3s",transition:"opacity 0.3s"};switch(position){case"bottom left":css.left=edge[0]+"px",css.bottom=edge[1]+"px";break;case"top right":css.right=edge[0]+"px",css.top=edge[1]+"px";break;case"top left":css.left=edge[0]+"px",css.top=edge[1]+"px";break;case"center":css.left=edge[0]+"px",css.top=edge[1]+"px";break;default:css.right=edge[0]+"px",css.bottom=edge[1]+"px"}overlay.css(css),html.append(overlay),html.append(target.clone()),target.replaceWith(html),setTimeout(function(){parent.find(".ovr").css("opacity","1"),parent.find(".overlay-media").hover(function(){$(this).find(".ovr").css("background-position","0px -"+size+"px")},function(){$(this).find(".ovr").css("background-position","0px 0px")})},150),"function"==typeof config.onDone&&config.onDone()},isLazyLoad=function(elm){var ret=elm.attr("data-src")||elm.attr("dest_src")||!1;return ret},getDimensions=function(config,callback){var target=config.target,img=new Image,src=target.attr("src");return img.onload=function(){var dim=[target.width(),target.height()];callback(dim)},img.src=src,!1},getEdge=function(config,dim,size){var ret=[10,10],ratio=[.05,.05];return ret="center"===config.position?[Math.floor(.5*dim[0]-.5*size),Math.floor(.5*dim[1]-.5*size)]:[Math.floor(dim[0]*ratio[0]),Math.floor(dim[1]*ratio[1])]},getSize=function(config,dim){var x,ratio=.16,w=Math.floor(dim[0]*ratio),ret=!1;if(map=["118","96","64","48","32","24","16"],!isNaN(w))if(w>=map[0]&&(ret=map[0]),20>=w)ret=map[map.length-1];else for(x=0;x<map.length;x++){var val=map[x],nVal=map[x+1]?map[x+1]:0,diffH=Math.abs(val-w),diffL=Math.abs(val-nVal);if(val>=w&&w>nVal){ret=diffH>diffL?nVal:val;break}}return ret?ret:!1},MediaApp=App;return window.FOX_MediaIconOverlay=function($){var App=function(){this.deprecated=[],this.deprecatedAlert=!1};App.prototype.set=function(obj){var self=this;if(!obj)return!1;var config={};for(var i in obj)obj.hasOwnProperty(i)&&("elm"===i?config.target=obj[i].find("img:first"):config[i]=obj[i]);config.type=config.type||self.getType(obj.elm),config._legacy=!0,self.deprecatedAlert||(self.deprecatedAlert=!0,log("[FOX.MediaIconOverlay] Deprecated Implementation"),log("[FOX.MediaIconOverlay] Access Deprecated implementations @ window.FOX_MediaIconOverlay.deprecated")),self.deprecated.push(config);var newPlugin=new MediaApp;newPlugin.embed(config)},App.prototype.getType=function(holder){var ret=!1,types=CONST.type;for(var i in types)if(holder.hasClass(i+"-ct")){ret=types[i].type;break}return ret};var log=function(){var loggerON=window.location.search.indexOf("_log=y")?!0:!1;if(loggerON&&window.console)try{return console.log.apply(console,arguments)}catch(err){console.log(arguments)}};return new App}(jQuery),App}(jQuery),function(Modulr){return Modulr?void Modulr.define("FOX_Plugins:MediaIconOverlay",function(){return window.FOX_Plugins.MediaOverlay}):!1}(window.Modulr),function(){var n=this,t=n._,r={},e=Array.prototype,u=Object.prototype,i=Function.prototype,a=e.push,o=e.slice,c=e.concat,l=u.toString,f=u.hasOwnProperty,s=e.forEach,p=e.map,h=e.reduce,v=e.reduceRight,d=e.filter,g=e.every,m=e.some,y=e.indexOf,b=e.lastIndexOf,x=Array.isArray,_=Object.keys,j=i.bind,w=function(n){return n instanceof w?n:this instanceof w?void(this._wrapped=n):new w(n)};"undefined"!=typeof exports?("undefined"!=typeof module&&module.exports&&(exports=module.exports=w),exports._=w):n._=w,w.VERSION="1.4.4";var A=w.each=w.forEach=function(n,t,e){if(null!=n)if(s&&n.forEach===s)n.forEach(t,e);else if(n.length===+n.length){for(var u=0,i=n.length;i>u;u++)if(t.call(e,n[u],u,n)===r)return}else for(var a in n)if(w.has(n,a)&&t.call(e,n[a],a,n)===r)return};w.map=w.collect=function(n,t,r){var e=[];return null==n?e:p&&n.map===p?n.map(t,r):(A(n,function(n,u,i){e[e.length]=t.call(r,n,u,i)}),e)};var O="Reduce of empty array with no initial value";w.reduce=w.foldl=w.inject=function(n,t,r,e){var u=arguments.length>2;if(null==n&&(n=[]),h&&n.reduce===h)return e&&(t=w.bind(t,e)),u?n.reduce(t,r):n.reduce(t);if(A(n,function(n,i,a){u?r=t.call(e,r,n,i,a):(r=n,u=!0)}),!u)throw new TypeError(O);return r},w.reduceRight=w.foldr=function(n,t,r,e){var u=arguments.length>2;if(null==n&&(n=[]),v&&n.reduceRight===v)return e&&(t=w.bind(t,e)),u?n.reduceRight(t,r):n.reduceRight(t);var i=n.length;if(i!==+i){var a=w.keys(n);i=a.length}if(A(n,function(o,c,l){c=a?a[--i]:--i,u?r=t.call(e,r,n[c],c,l):(r=n[c],u=!0)}),!u)throw new TypeError(O);return r},w.find=w.detect=function(n,t,r){var e;return E(n,function(n,u,i){return t.call(r,n,u,i)?(e=n,!0):void 0}),e},w.filter=w.select=function(n,t,r){var e=[];return null==n?e:d&&n.filter===d?n.filter(t,r):(A(n,function(n,u,i){t.call(r,n,u,i)&&(e[e.length]=n)}),e)},w.reject=function(n,t,r){return w.filter(n,function(n,e,u){return!t.call(r,n,e,u)},r)},w.every=w.all=function(n,t,e){t||(t=w.identity);var u=!0;return null==n?u:g&&n.every===g?n.every(t,e):(A(n,function(n,i,a){return(u=u&&t.call(e,n,i,a))?void 0:r}),!!u)};var E=w.some=w.any=function(n,t,e){t||(t=w.identity);var u=!1;return null==n?u:m&&n.some===m?n.some(t,e):(A(n,function(n,i,a){return u||(u=t.call(e,n,i,a))?r:void 0}),!!u)};w.contains=w.include=function(n,t){return null==n?!1:y&&n.indexOf===y?-1!=n.indexOf(t):E(n,function(n){return n===t})},w.invoke=function(n,t){var r=o.call(arguments,2),e=w.isFunction(t);return w.map(n,function(n){return(e?t:n[t]).apply(n,r)})},w.pluck=function(n,t){return w.map(n,function(n){return n[t]})},w.where=function(n,t,r){return w.isEmpty(t)?r?null:[]:w[r?"find":"filter"](n,function(n){for(var r in t)if(t[r]!==n[r])return!1;return!0})},w.findWhere=function(n,t){return w.where(n,t,!0)},w.max=function(n,t,r){if(!t&&w.isArray(n)&&n[0]===+n[0]&&65535>n.length)return Math.max.apply(Math,n);if(!t&&w.isEmpty(n))return-1/0;var e={computed:-1/0,value:-1/0};return A(n,function(n,u,i){var a=t?t.call(r,n,u,i):n;a>=e.computed&&(e={value:n,computed:a})}),e.value},w.min=function(n,t,r){if(!t&&w.isArray(n)&&n[0]===+n[0]&&65535>n.length)return Math.min.apply(Math,n);if(!t&&w.isEmpty(n))return 1/0;var e={computed:1/0,value:1/0};return A(n,function(n,u,i){var a=t?t.call(r,n,u,i):n;e.computed>a&&(e={value:n,computed:a})}),e.value},w.shuffle=function(n){var t,r=0,e=[];return A(n,function(n){t=w.random(r++),e[r-1]=e[t],e[t]=n}),e};var k=function(n){return w.isFunction(n)?n:function(t){return t[n]}};w.sortBy=function(n,t,r){var e=k(t);return w.pluck(w.map(n,function(n,t,u){return{value:n,index:t,criteria:e.call(r,n,t,u)}}).sort(function(n,t){var r=n.criteria,e=t.criteria;if(r!==e){if(r>e||void 0===r)return 1;if(e>r||void 0===e)return-1}return n.index<t.index?-1:1}),"value")};var F=function(n,t,r,e){var u={},i=k(t||w.identity);return A(n,function(t,a){var o=i.call(r,t,a,n);e(u,o,t)}),u};w.groupBy=function(n,t,r){return F(n,t,r,function(n,t,r){(w.has(n,t)?n[t]:n[t]=[]).push(r)})},w.countBy=function(n,t,r){return F(n,t,r,function(n,t){w.has(n,t)||(n[t]=0),n[t]++})},w.sortedIndex=function(n,t,r,e){r=null==r?w.identity:k(r);for(var u=r.call(e,t),i=0,a=n.length;a>i;){var o=i+a>>>1;u>r.call(e,n[o])?i=o+1:a=o}return i},w.toArray=function(n){return n?w.isArray(n)?o.call(n):n.length===+n.length?w.map(n,w.identity):w.values(n):[]},w.size=function(n){return null==n?0:n.length===+n.length?n.length:w.keys(n).length},w.first=w.head=w.take=function(n,t,r){return null==n?void 0:null==t||r?n[0]:o.call(n,0,t)},w.initial=function(n,t,r){return o.call(n,0,n.length-(null==t||r?1:t))},w.last=function(n,t,r){return null==n?void 0:null==t||r?n[n.length-1]:o.call(n,Math.max(n.length-t,0))},w.rest=w.tail=w.drop=function(n,t,r){return o.call(n,null==t||r?1:t)},w.compact=function(n){return w.filter(n,w.identity)};var R=function(n,t,r){return A(n,function(n){w.isArray(n)?t?a.apply(r,n):R(n,t,r):r.push(n)}),r};w.flatten=function(n,t){return R(n,t,[])},w.without=function(n){return w.difference(n,o.call(arguments,1))},w.uniq=w.unique=function(n,t,r,e){w.isFunction(t)&&(e=r,r=t,t=!1);var u=r?w.map(n,r,e):n,i=[],a=[];return A(u,function(r,e){(t?e&&a[a.length-1]===r:w.contains(a,r))||(a.push(r),i.push(n[e]))}),i},w.union=function(){return w.uniq(c.apply(e,arguments))},w.intersection=function(n){var t=o.call(arguments,1);return w.filter(w.uniq(n),function(n){return w.every(t,function(t){return w.indexOf(t,n)>=0})})},w.difference=function(n){var t=c.apply(e,o.call(arguments,1));return w.filter(n,function(n){return!w.contains(t,n)})},w.zip=function(){for(var n=o.call(arguments),t=w.max(w.pluck(n,"length")),r=Array(t),e=0;t>e;e++)r[e]=w.pluck(n,""+e);return r},w.object=function(n,t){if(null==n)return{};for(var r={},e=0,u=n.length;u>e;e++)t?r[n[e]]=t[e]:r[n[e][0]]=n[e][1];return r},w.indexOf=function(n,t,r){if(null==n)return-1;var e=0,u=n.length;if(r){if("number"!=typeof r)return e=w.sortedIndex(n,t),n[e]===t?e:-1;e=0>r?Math.max(0,u+r):r}if(y&&n.indexOf===y)return n.indexOf(t,r);for(;u>e;e++)if(n[e]===t)return e;return-1},w.lastIndexOf=function(n,t,r){if(null==n)return-1;var e=null!=r;if(b&&n.lastIndexOf===b)return e?n.lastIndexOf(t,r):n.lastIndexOf(t);for(var u=e?r:n.length;u--;)if(n[u]===t)return u;return-1},w.range=function(n,t,r){1>=arguments.length&&(t=n||0,n=0),r=arguments[2]||1;for(var e=Math.max(Math.ceil((t-n)/r),0),u=0,i=Array(e);e>u;)i[u++]=n,n+=r;return i},w.bind=function(n,t){if(n.bind===j&&j)return j.apply(n,o.call(arguments,1));var r=o.call(arguments,2);return function(){return n.apply(t,r.concat(o.call(arguments)))}},w.partial=function(n){var t=o.call(arguments,1);return function(){return n.apply(this,t.concat(o.call(arguments)))}},w.bindAll=function(n){var t=o.call(arguments,1);return 0===t.length&&(t=w.functions(n)),A(t,function(t){n[t]=w.bind(n[t],n)}),n},w.memoize=function(n,t){var r={};return t||(t=w.identity),function(){var e=t.apply(this,arguments);return w.has(r,e)?r[e]:r[e]=n.apply(this,arguments)}},w.delay=function(n,t){var r=o.call(arguments,2);return setTimeout(function(){return n.apply(null,r)},t)},w.defer=function(n){return w.delay.apply(w,[n,1].concat(o.call(arguments,1)))},w.throttle=function(n,t){var r,e,u,i,a=0,o=function(){a=new Date,u=null,i=n.apply(r,e)};return function(){var c=new Date,l=t-(c-a);return r=this,e=arguments,0>=l?(clearTimeout(u),u=null,a=c,i=n.apply(r,e)):u||(u=setTimeout(o,l)),i}},w.debounce=function(n,t,r){var e,u;return function(){var i=this,a=arguments,o=function(){e=null,r||(u=n.apply(i,a))},c=r&&!e;return clearTimeout(e),e=setTimeout(o,t),c&&(u=n.apply(i,a)),u}},w.once=function(n){var t,r=!1;return function(){return r?t:(r=!0,t=n.apply(this,arguments),n=null,t)}},w.wrap=function(n,t){return function(){var r=[n];return a.apply(r,arguments),t.apply(this,r)}},w.compose=function(){var n=arguments;return function(){for(var t=arguments,r=n.length-1;r>=0;r--)t=[n[r].apply(this,t)];return t[0]}},w.after=function(n,t){return 0>=n?t():function(){return 1>--n?t.apply(this,arguments):void 0}},w.keys=_||function(n){if(n!==Object(n))throw new TypeError("Invalid object");var t=[];for(var r in n)w.has(n,r)&&(t[t.length]=r);return t},w.values=function(n){var t=[];for(var r in n)w.has(n,r)&&t.push(n[r]);return t},w.pairs=function(n){var t=[];for(var r in n)w.has(n,r)&&t.push([r,n[r]]);return t},w.invert=function(n){var t={};for(var r in n)w.has(n,r)&&(t[n[r]]=r);return t},w.functions=w.methods=function(n){var t=[];for(var r in n)w.isFunction(n[r])&&t.push(r);return t.sort()},w.extend=function(n){return A(o.call(arguments,1),function(t){if(t)for(var r in t)n[r]=t[r]}),n},w.pick=function(n){var t={},r=c.apply(e,o.call(arguments,1));return A(r,function(r){r in n&&(t[r]=n[r])}),t},w.omit=function(n){var t={},r=c.apply(e,o.call(arguments,1));for(var u in n)w.contains(r,u)||(t[u]=n[u]);return t},w.defaults=function(n){return A(o.call(arguments,1),function(t){if(t)for(var r in t)null==n[r]&&(n[r]=t[r])}),n},w.clone=function(n){return w.isObject(n)?w.isArray(n)?n.slice():w.extend({},n):n},w.tap=function(n,t){return t(n),n};var I=function(n,t,r,e){if(n===t)return 0!==n||1/n==1/t;if(null==n||null==t)return n===t;n instanceof w&&(n=n._wrapped),t instanceof w&&(t=t._wrapped);var u=l.call(n);if(u!=l.call(t))return!1;switch(u){case"[object String]":return n==t+"";case"[object Number]":return n!=+n?t!=+t:0==n?1/n==1/t:n==+t;case"[object Date]":case"[object Boolean]":return+n==+t;case"[object RegExp]":return n.source==t.source&&n.global==t.global&&n.multiline==t.multiline&&n.ignoreCase==t.ignoreCase}if("object"!=typeof n||"object"!=typeof t)return!1;for(var i=r.length;i--;)if(r[i]==n)return e[i]==t;r.push(n),e.push(t);var a=0,o=!0;if("[object Array]"==u){if(a=n.length,o=a==t.length)for(;a--&&(o=I(n[a],t[a],r,e)););}else{var c=n.constructor,f=t.constructor;if(c!==f&&!(w.isFunction(c)&&c instanceof c&&w.isFunction(f)&&f instanceof f))return!1;for(var s in n)if(w.has(n,s)&&(a++,!(o=w.has(t,s)&&I(n[s],t[s],r,e))))break;if(o){for(s in t)if(w.has(t,s)&&!a--)break;o=!a}}return r.pop(),e.pop(),o};w.isEqual=function(n,t){return I(n,t,[],[])},w.isEmpty=function(n){if(null==n)return!0;if(w.isArray(n)||w.isString(n))return 0===n.length;for(var t in n)if(w.has(n,t))return!1;return!0},w.isElement=function(n){return!(!n||1!==n.nodeType)},w.isArray=x||function(n){return"[object Array]"==l.call(n)},w.isObject=function(n){return n===Object(n)},A(["Arguments","Function","String","Number","Date","RegExp"],function(n){w["is"+n]=function(t){return l.call(t)=="[object "+n+"]"}}),w.isArguments(arguments)||(w.isArguments=function(n){return!(!n||!w.has(n,"callee"))}),"function"!=typeof/./&&(w.isFunction=function(n){return"function"==typeof n}),w.isFinite=function(n){return isFinite(n)&&!isNaN(parseFloat(n))},w.isNaN=function(n){return w.isNumber(n)&&n!=+n},w.isBoolean=function(n){return n===!0||n===!1||"[object Boolean]"==l.call(n)},w.isNull=function(n){return null===n},w.isUndefined=function(n){return void 0===n},w.has=function(n,t){return f.call(n,t)},w.noConflict=function(){return n._=t,this},w.identity=function(n){return n},w.times=function(n,t,r){for(var e=Array(n),u=0;n>u;u++)e[u]=t.call(r,u);return e},w.random=function(n,t){return null==t&&(t=n,n=0),n+Math.floor(Math.random()*(t-n+1))};var M={escape:{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","/":"&#x2F;"}};M.unescape=w.invert(M.escape);var S={escape:RegExp("["+w.keys(M.escape).join("")+"]","g"),unescape:RegExp("("+w.keys(M.unescape).join("|")+")","g")};w.each(["escape","unescape"],function(n){w[n]=function(t){return null==t?"":(""+t).replace(S[n],function(t){return M[n][t]})}}),w.result=function(n,t){if(null==n)return null;var r=n[t];return w.isFunction(r)?r.call(n):r},w.mixin=function(n){A(w.functions(n),function(t){var r=w[t]=n[t];w.prototype[t]=function(){var n=[this._wrapped];return a.apply(n,arguments),D.call(this,r.apply(w,n))}})};var N=0;w.uniqueId=function(n){var t=++N+"";return n?n+t:t},w.templateSettings={evaluate:/<%([\s\S]+?)%>/g,interpolate:/<%=([\s\S]+?)%>/g,escape:/<%-([\s\S]+?)%>/g};var T=/(.)^/,q={"'":"'","\\":"\\","\r":"r","\n":"n","	":"t","\u2028":"u2028","\u2029":"u2029"},B=/\\|'|\r|\n|\t|\u2028|\u2029/g;w.template=function(n,t,r){var e;r=w.defaults({},r,w.templateSettings);var u=RegExp([(r.escape||T).source,(r.interpolate||T).source,(r.evaluate||T).source].join("|")+"|$","g"),i=0,a="__p+='";n.replace(u,function(t,r,e,u,o){return a+=n.slice(i,o).replace(B,function(n){return"\\"+q[n]}),r&&(a+="'+\n((__t=("+r+"))==null?'':_.escape(__t))+\n'"),e&&(a+="'+\n((__t=("+e+"))==null?'':__t)+\n'"),u&&(a+="';\n"+u+"\n__p+='"),i=o+t.length,t}),a+="';\n",r.variable||(a="with(obj||{}){\n"+a+"}\n"),a="var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n"+a+"return __p;\n";try{e=Function(r.variable||"obj","_",a)}catch(o){throw o.source=a,o}if(t)return e(t,w);var c=function(n){return e.call(this,n,w)};return c.source="function("+(r.variable||"obj")+"){\n"+a+"}",c},w.chain=function(n){return w(n).chain()};var D=function(n){return this._chain?w(n).chain():n};w.mixin(w),A(["pop","push","reverse","shift","sort","splice","unshift"],function(n){var t=e[n];w.prototype[n]=function(){var r=this._wrapped;return t.apply(r,arguments),"shift"!=n&&"splice"!=n||0!==r.length||delete r[0],D.call(this,r)}}),A(["concat","join","slice"],function(n){var t=e[n];w.prototype[n]=function(){return D.call(this,t.apply(this._wrapped,arguments))}}),w.extend(w.prototype,{chain:function(){return this._chain=!0,this},value:function(){return this._wrapped}})}.call(this),window.FOX_AkamaiVideo=function(){function getQuery(param){var x,val=!1,query=window.location.search.substr(1),qArr=query.split("&"),len=qArr.length;for(x=0;len>x;x++){var pair=qArr[x].split("=");if(pair[0]===param){val=decodeURIComponent(pair[1]).toString();break}}return val}function log(){var loggerON=!0;if(loggerON&&window.console)try{return console.log.apply(console,arguments)}catch(err){console.log(arguments)}}var CONST={};CONST.playerName="embed",CONST.secure=window.location.protocol.indexOf("https")>-1?!0:!1,CONST.feedPath="/v/feed/video/${videoId}.js?template=fox",CONST.configUrl=function(){var playerPath=(window.location.host||window.location.hostname,"qa"===window.FOX_ENV_STATIC?"player/test":"player"),url=window.location.protocol+"//foxnewsplayer-a.akamaihd.net/"+playerPath+"/${version}/${playerPackage}/amp.foxnews.central.xml",params=[];return params.push("sec="+(CONST.secure?"1":"0")),params.push("site=${site}"),params.push("param=${configParam}"),params.push("ns=${namespace}"),url=[url,params.join("&")].join("?")}(),CONST.bundleUrl=function(){var playerPath="qa"===window.FOX_ENV_STATIC?"player/test":"player",ret=window.location.protocol+"//foxnewsplayer-a.akamaihd.net/"+playerPath+"/${version}/${playerPackage}/${playerPackage}.js",patch=getQuery("_prodpatch");return patch&&(log("patched version: "+patch),ret=window.location.protocol+"//foxnewsplayer-a.akamaihd.net/player/7.2.0004/amp.foxnews/amp.foxnews.prodpatch"+patch+".js"),ret}(),CONST.configSiteParam={foxnews:"fn",foxbusiness:"fb","live.foxbusiness":"fblive","latino.foxnews":"latino","insider.foxnews":"insider","imag.foxnews":"imag","nation.foxnews":"nation","ureport.foxnews":"ureport","magazine.foxnews":"magazine","radio.foxnews":"radio"};var App=function(){this.GET=new GET(this),this.API=new API(this),this.__vars={}},API=function(){var API=function(root){this.root=root};return API.prototype.setVersion=function(val){var self=this,root=self.root,vars=root.__vars,queryVersion=(root.GET,function(){var ver=getQuery("_ver");return ver?ver:!1}),version=window._FOX_VID_BUNDLE_VER||queryVersion()||val;vars._VERSION=version,vars._VERSION_INFO=function(){var ver=version.split("."),info={major:isNaN(ver[0])?-1:parseInt(ver[0],10),minor:isNaN(ver[1])?-1:parseInt(ver[1],10),sub:ver.slice(2).join(".")};return info}()},API.prototype.setVideoId=function(val){var self=this,root=self.root,vars=root.__vars;root.GET;vars._VIDEO_ID=val},API.prototype.getPageVars=function(){var self=this,root=self.root,GET=(root.__vars,root.GET),pageVars={};for(var i in GET)"function"==typeof GET[i]&&(pageVars[i]=GET[i]());return pageVars},API.prototype.getVar=function(type,data){var self=this,ret=!1,root=self.root,GET=(root.__vars,root.GET);return GET[type]&&(ret=GET[type](data)),ret},API.prototype.getQuery=function(param){var ret=getQuery(param);return ret},API.prototype.showShareEmbedOverlay=function(info){var self=this,root=self.root,body=$("body"),markup='<div class="share-panel embed">                    <h1>Embed</h1>                    <a href="#" title="Close">Close</a>                    <textarea>Embed code inserted here</textarea>                </div>',embed=body.find("> .share-panel.embed");0===embed.length&&($("body").prepend(markup),embed=body.find("> .share-panel.embed"),embed.find("textarea").unbind("focus").bind("focus",function(){var elm=$(this);elm.select(),elm.bind("mouseup",function(){return elm.unbind("mouseup"),!1})}),embed.find("> a:first").unbind("click").bind("click",function(evt){return evt.preventDefault(),embed.removeClass("show"),!1}),self._overlay_center||(self._overlay_center=!0,centerOverlay(embed,!0)));var textarea=embed.find("textarea"),domain="video."+root.GET.domain()+".com",siteLink=domain.indexOf("video.foxbusiness")>-1?"video.foxbusiness.com":"video.foxnews.com",videoId=root.GET.videoId(),code='<script type="text/javascript" src="http://'+domain+"/v/embed.js?id="+videoId+'&w=466&h=263"></script><noscript>Watch the latest video at <a href="http://'+siteLink+'">'+siteLink+"</a></noscript>";textarea.val(code),embed.addClass("show")},API.prototype.setPlayerMode=function(mode){return"html"===mode?"html-auto":mode},API.prototype.setOmniture=function(omtrVals){window.s_account=omtrVals.s_account;var src="//"+("qa"===window.FOX_ENV_STATIC?"qa.":"")+"global.fncstatic.com/static/isa/app/lib/omtr_code.js";LoadScript(src,function(){$.extend(window.omtr,omtrVals.merged),log("[VideoPlayer.Embed] Omniture omtr variable in video iframe:",window.omtr)})},API}(),GET=function(){var GET=function(root){this.root=root};return GET.prototype.videoId=function(){var self=this,root=self.root,vars=root.__vars,id=vars._VIDEO_ID||getQuery("id")||getQuery("video_id")||"";return id=/[0-9]/.test(id)?id:!1},GET.prototype.version=function(){var self=this,root=self.root,vars=root.__vars,ret=vars._VERSION?vars._VERSION:!1;return ret},GET.prototype.versionInfo=function(){var self=this,root=self.root,vars=root.__vars,ret=vars._VERSION_INFO?vars._VERSION_INFO:!1;return ret},GET.prototype.feed=function(){var self=this,ret=(self.root,self.videoId()?CONST.feedPath.replace("${videoId}",self.videoId()):"");return ret},GET.prototype.configUrl=function(site){var self=this,root=self.root,ret=(root.__vars,CONST.configUrl.replace("${version}",self.version()).replace(/\$\{playerPackage\}/g,self.playerPackage()).replace("${site}",site||self.site()).replace("${configParam}",self.configParam())),namespace=self.namespace();return ret=namespace?ret.replace("${namespace}",namespace):ret.replace("&ns=${namespace}","")},GET.prototype.bundleUrl=function(){var self=this,root=self.root,ret=(root.__vars,CONST.bundleUrl.replace("${version}",self.version()).replace(/\$\{playerPackage\}/g,self.playerPackage()));return ret},GET.prototype.playerName=function(queryOnly){var name=getQuery("pn");return name?name:queryOnly?null:CONST.playerName},GET.prototype.playerPackage=function(){var self=this,info=self.versionInfo(),ret="amp.foxnews";return info.major>=7&&info.minor>=29&&(ret="amp.premier"),ret},GET.prototype.mode=function(){var ret=!1,mode=getQuery("_vtcomp")||getQuery("mode");return ret=mode&&"y"===mode?"html":ret},GET.prototype.domain=function(custom){var loc=custom?custom:window.location.host||window.location.hostname,ret="foxnews";return idx("latino.",loc)?ret="latino.foxnews":idx("foxbusiness.",loc)||"fb"===getQuery("ais_domain")?ret="foxbusiness":idx("insider.",loc)?ret="insider.foxnews":idx("imag.",loc)?ret="imag.foxnews":idx("ureport.",loc)?ret="ureport.foxnews":idx("nation.foxnews",loc)?ret="nation.foxnews":idx("radio.foxnews",loc)&&(ret="radio.foxnews"),ret},GET.prototype.site=function(){var self=this,cust=getQuery("_xcf")||self.domain(getQuery("loc")),domain=cust||self.domain(),host=window.location.host||window.location.hostname,param=CONST.configSiteParam,ret=param.foxnews;return"foxbusiness"===domain&&host.indexOf("live.foxbusiness")>-1&&(domain="live.foxbusiness"),param[domain]&&(ret=param[domain]),ret},GET.prototype.hostname=function(){var param=CONST.configSiteParam,ret=getQuery("d")||!1,loc=getQuery("loc")||!1;return ret&&loc?ret=loc:ret||loc&&!param[loc]&&(ret=loc),ret},GET.prototype.configParam=function(inArray){for(var ret=getQuery("_cparam")||"",arr=ret.split(","),i=0;i<arr.length;i++)arr[i]=$.trim(arr[i]);
return inArray?arr:arr.join(",")},GET.prototype.namespace=function(){var ret=getQuery("_ns")||"";return ret},GET.prototype.shareURL=function(){var ret=decodeURIComponent(getQuery("_surl")||"");return ret},GET.prototype.shareTitle=function(){var ret=decodeURIComponent(getQuery("_stitle")||"");return ret},GET}(),idx=function(needle,haystack){var ret=haystack.indexOf(needle)>-1?!0:!1;return ret},centerOverlay=function(target,force){var listener=!1,body=$("body"),win=$(window),overlayW=target.outerWidth(),overlayH=target.outerHeight(),px=function(val){return val+"px"},topScroll=function(){var r,w=win.height(),s=win.scrollTop(),h=overlayH;return h=Math.floor(w/2-h/2),r=s+(0>h?0:h)},leftScroll=function(){var l=body.offset().left,w=body.width();return w=Math.floor(w/2-overlayW/2),l+w},trigger=function(){clearTimeout(listener),listener=setTimeout(function(){target.animate({top:px(topScroll()),left:leftScroll()},150,"swing")},150)};force&&target.css({top:px(topScroll()),left:leftScroll()});var hasOrientation="onorientationchange"in window?!0:!1;win.bind("resize",function(){trigger()}),hasOrientation&&win.bind("orientationchange",function(){trigger()})},LoadScript=function(){function App(src,callback){var loaded=!1,script=document.createElement("script"),scriptId=["video-load",src].join("||"),isOpera="undefined"!=typeof opera&&"[object Opera]"===opera.toString()?!0:!1,readyRegExp=/^(complete|loaded)$/,removeListener=function(node,func,name,ieName){node.detachEvent&&!isOpera?ieName&&node.detachEvent(ieName,func):node.removeEventListener(name,func,!1)},removeScriptListener=function(){removeListener(script,onLoad,"load","onreadystatechange"),removeListener(script,onError,"error")},onLoad=function(evt){if(!loaded&&"load"===evt.type||readyRegExp.test((evt.currentTarget||evt.srcElement).readyState)){for(loaded=!0;LOADED_SCRIPTS_QUEUE[scriptId].length>0;){var fn=LOADED_SCRIPTS_QUEUE[scriptId].shift();fn()}delete LOADED_SCRIPTS_QUEUE[scriptId],removeScriptListener()}},onError=function(){throwError("error loading script: "+src)};return LOADED_SCRIPTS[scriptId]?(LOADED_SCRIPTS_QUEUE[scriptId].push(function(){callback()}),!1):(LOADED_SCRIPTS[scriptId]=!0,LOADED_SCRIPTS_QUEUE[scriptId]=[function(){callback()}],script.type="text/javascript",script.charset="utf-8",script.async=!0,!script.attachEvent||script.attachEvent.toString&&script.attachEvent.toString().indexOf("[native code")<0||isOpera?(script.addEventListener("load",onLoad,!1),script.addEventListener("error",onError,!1)):script.attachEvent("onreadystatechange",onLoad),script.src=src,void document.getElementsByTagName("head")[0].appendChild(script))}var LOADED_SCRIPTS_QUEUE={},LOADED_SCRIPTS={};return App}(),PUBLIC_APP=function(){var APP=new App,PUBLIC_APP=function(){};return PUBLIC_APP.prototype.API=APP.API,new PUBLIC_APP}();return PUBLIC_APP}();var FOX_Video_Embed_APP=function($){var CONST={};CONST.AISVideos={1241186546001:{resourceID:"FoxNews"},1251429410001:{resourceID:"FoxBusiness"}},CONST.AISPlayerName="tve",CONST.playerName="embed";var App=(FOX_Video_Instance,function(){});App.prototype.init=function(info){info=info||{};var self=this,API=FOX_AkamaiVideo.API,target=$(".fox-video"),playerName=info.playerName||CONST.playerName;self._info=info;var config={app:{videoId:API.getVar("videoId"),embedded:!0},player:{params:{playerName:playerName},name:playerName,autoadvance:{enabled:!1},mediaanalytics:{dimensions:{device:"#{player.mode}",pageName:playerName}},flash:{vars:{show_sharing_overlay:"false",show_email_overlay:"false"}}}};info.config&&info.config.app&&$.extend(!0,config,{app:info.config.app}),info.config&&info.config.player&&$.extend(!0,config,{player:info.config.player}),config=self.setParams(config),FOX_Videos.API.embed(target,config)},App.prototype.setParams=function(config){var self=this,info=self._info,API=FOX_AkamaiVideo.API,AuthPlayerName=(API.getPageVars(),CONST.AISPlayerName),DST=AKAMAI_TIME_HELPER.isDST();if(("true"===getQuery("autoplay")||info.autoplay)&&$.extend(!0,config,{player:{autoplay:!0}}),"true"===getQuery("share")&&$.extend(!0,config,{player:{flash:{vars:{show_sharing_overlay:"true",show_email_overlay:"true"}}}}),CONST.AISVideos[config.app.videoId]){var AISConfig=CONST.AISVideos[config.app.videoId];$.extend(!0,config,{app:{ais:!0},player:{ais:{resourceID:AISConfig.resourceID},flash:{vars:{inpage_bitrate_index_limit:"2",core_player_name:AuthPlayerName,core_ad_player_name:AuthPlayerName,core_omniture_player_name:AuthPlayerName,core_omniture_account:"foxnewsmaven",live_timestamp_timezone_offset:DST.val?"-4":"-5"}}}})}return("false"===getQuery("ads")||info.ena===!1)&&$.extend(!0,config,{player:{ima:{enabled:!1}}}),info.events&&$.extend(!0,config,{app:{events:info.events}}),config};var getQuery=function(param){var x,val=!1,query=window.location.search.substr(1),qArr=query.split("&"),len=qArr.length;for(x=0;len>x;x++){var pair=qArr[x].split("=");if(pair[0]===param){val=decodeURIComponent(pair[1]).toString();break}}return val};return App}(jQuery);