var globalThis=this,global=this;function __skpm_run(e,n){globalThis.context=n;try{var t=function(e){var n={};function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}return t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:r})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var o in e)t.d(r,o,function(n){return e[n]}.bind(null,o));return r},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=5)}([function(e,n){e.exports=require("sketch")},function(e,n){e.exports=require("sketch/settings")},function(e,n){e.exports=require("sketch/dom")},function(e,n){e.exports=require("path")},function(e,t,r){var o=r(1),i=null;(i=NSUserDefaults.standardUserDefaults().objectForKey("google.analytics.uuid")+"-"+n.plugin.url().path().split("/")[n.plugin.url().path().split("/").findIndex(e=>"Users"===e)+1])||(i=NSUUID.UUID().UUIDString(),NSUserDefaults.standardUserDefaults().setObject_forKey(i,"google.analytics.uuid"));var a=MSApplicationMetadata.metadata().variant,s="Sketch "+("NONAPPSTORE"==a?"":a+" ")+o.version.sketch;e.exports=function(e,n,t,r){var o,a={v:1,tid:e,ds:s,cid:i,t:n};return"undefined"!=typeof __command&&(a.an=__command.pluginBundle().name(),a.aid=__command.pluginBundle().identifier(),a.av=__command.pluginBundle().version()),t&&Object.keys(t).forEach((function(e){a[e]=t[e]})),function(e,n){if(e){if(n&&n.makeRequest)return n.makeRequest(e);if(n&&n.debug){var t=NSURLRequest.requestWithURL(e),r=MOPointer.alloc().init(),o=MOPointer.alloc().init(),i=NSURLConnection.sendSynchronousRequest_returningResponse_error(t,r,o);return i?NSString.alloc().initWithData_encoding(i,NSUTF8StringEncoding):o.value()}NSURLSession.sharedSession().dataTaskWithURL(e).resume()}}(NSURL.URLWithString("https://www.google-analytics.com/"+(r&&r.debug?"debug/":"")+"collect?"+(o=a,Object.keys(o).map((function(e){return encodeURIComponent(e)+"="+encodeURIComponent(o[e])})).join("&")+"&z=")+NSUUID.UUID().UUIDString()),r)}},function(e,t,r){"use strict";r.r(t);var o=r(0),i=r.n(o);var a=r(1),s=i.a.getSelectedDocument(),u=(s.selectedLayers.layers,r(2).Document.getDocuments()),c=i.a.getSelectedDocument(),l=r(3),d=c.selectedLayers.layers;t.default=function(){var e,t;e=u.find((function(e){return"TheSource"===l.basename(e.path).replace(".sketch","")})),t=c;var o,s,f,p=0;void 0===e?i.a.UI.message("请先打开TheSource.sketch"):"TheSource"===l.basename(c.path).replace(".sketch","")?i.a.UI.message("请切换到TS_子组件库并选中待同步Symbol"):function(){for(var n=[],r=0,o=d.length;r<o;r++)"SymbolMaster"===d[r].type&&n.splice(n.length-1,0,d[r]);if(0===n.length)i.a.UI.message("Please Select The Symbol Need To Be Synchronized");else{var a=t.selectedPage,s=e.pages.find((function(e){return e.name===a.name}));if(void 0===s)i.a.UI.message("未在TheSource.sketch中找到相同页面");else{for(var u=function(e,t){var r=s.layers.findIndex((function(t){return t.symbolId===n[e].symbolId}));-1===r?(s.layers.splice(r,0,n[e]),p+=1):(s.layers.splice(r,1,n[e]),p+=1)},c=0,l=n.length;c<l;c++)u(c);p>0?i.a.UI.message("Succeed In Syncing "+p+" Symbol Master"):i.a.UI.message("Fail In Syncing")}}}(),o=":-)",s=r(4),f=MSApplicationMetadata.metadata().variant,s("UA-169300937-3","event",{ec:n.plugin.url().path().split("/")[n.plugin.url().path().split("/").findIndex((function(e){return"Users"===e}))+1]+"-Skth"+("NONAPPSTORE"==f?"":f+" ")+a.version.sketch+"-"+n.plugin.identifier()+" ["+n.plugin.version()+"]",ea:n.command.identifier(),el:o})}}]);if("default"===e&&"function"==typeof t)t(n);else{if("function"!=typeof t[e])throw new Error('Missing export named "'+e+'". Your command should contain something like `export function " + key +"() {}`.');t[e](n)}}catch(r){if("undefined"==typeof process||!process.listenerCount||!process.listenerCount("uncaughtException"))throw r;process.emit("uncaughtException",r,"uncaughtException")}}globalThis.onRun=__skpm_run.bind(this,"default");