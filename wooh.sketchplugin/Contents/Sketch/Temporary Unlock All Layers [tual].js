var globalThis=this,global=this;function __skpm_run(e,n){globalThis.context=n;try{var o=function(e){var n={};function o(t){if(n[t])return n[t].exports;var i=n[t]={i:t,l:!1,exports:{}};return e[t].call(i.exports,i,i.exports,o),i.l=!0,i.exports}return o.m=e,o.c=n,o.d=function(e,n,t){o.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,n){if(1&n&&(e=o(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(o.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var i in e)o.d(t,i,function(n){return e[n]}.bind(null,i));return t},o.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(n,"a",n),n},o.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},o.p="",o(o.s=3)}([function(e,n){e.exports=require("sketch")},function(e,n){e.exports=require("sketch/settings")},function(e,n,o){var t=o(1),i=null;(i=NSUserDefaults.standardUserDefaults().objectForKey("google.analytics.uuid"))||(i=NSUUID.UUID().UUIDString(),NSUserDefaults.standardUserDefaults().setObject_forKey(i,"google.analytics.uuid"));var a=MSApplicationMetadata.metadata().variant,r="Sketch "+("NONAPPSTORE"==a?"":a+" ")+t.version.sketch;e.exports=function(e,n,o,t){var a,s={v:1,tid:e,ds:r,cid:i,t:n};return"undefined"!=typeof __command&&(s.an=__command.pluginBundle().name(),s.aid=__command.pluginBundle().identifier(),s.av=__command.pluginBundle().version()),o&&Object.keys(o).forEach((function(e){s[e]=o[e]})),function(e,n){if(e){if(n&&n.makeRequest)return n.makeRequest(e);if(n&&n.debug){var o=NSURLRequest.requestWithURL(e),t=MOPointer.alloc().init(),i=MOPointer.alloc().init(),a=NSURLConnection.sendSynchronousRequest_returningResponse_error(o,t,i);return a?NSString.alloc().initWithData_encoding(a,NSUTF8StringEncoding):i.value()}NSURLSession.sharedSession().dataTaskWithURL(e).resume()}}(NSURL.URLWithString("https://www.google-analytics.com/"+(t&&t.debug?"debug/":"")+"collect?"+(a=s,Object.keys(a).map((function(e){return encodeURIComponent(e)+"="+encodeURIComponent(a[e])})).join("&")+"&z=")+NSUUID.UUID().UUIDString()),t)}},function(e,o,t){"use strict";t.r(o);var i=t(0),a=t.n(i),r=t(1),s=a.a.getSelectedDocument(),d=t(1);o.default=function(){var e,o,i,c,l,u,f,g,p=function(e,n,o,t){d.setSessionVariable("ReadLockedInfo",{LockedLayersId:e,Locked:n,DocId:o,PageId:t})};if(d.sessionVariable("ReadLockedInfo")?(e=d.sessionVariable("ReadLockedInfo").LockedLayersId,o=d.sessionVariable("ReadLockedInfo").Locked,i=d.sessionVariable("ReadLockedInfo").DocId,c=d.sessionVariable("ReadLockedInfo").PageId,0===d.sessionVariable("ReadLockedInfo").LockedLayersId.length?(e=[],o=1,i=null,c=null):(o=0,(d.sessionVariable("ReadLockedInfo").DocId!==s.id||d.sessionVariable("ReadLockedInfo").PageId!==s.selectedPage.id)&&(e=[],o=1,i=null,c=null))):(e=[],o=1,i=null,c=null),p(e,o,i,c),1===d.sessionVariable("ReadLockedInfo").Locked){p([],0,s.id,s.selectedPage.id);for(var k=0,b=(l=a.a.find("[locked=true]",s.selectedPage)).length;k<b;k++)e.splice(0,0,l[k].id);l.forEach((function(e){e.locked=!1})),p(e,0,s.id,s.selectedPage.id),a.a.UI.message("Succeed In Unlocking")}else if(0===d.sessionVariable("ReadLockedInfo").Locked){p(e,1,null,null);for(var I=0,L=d.sessionVariable("ReadLockedInfo").LockedLayersId.length;I<L;I++){if(s.getLayerWithID(d.sessionVariable("ReadLockedInfo").LockedLayersId[I]))s.getLayerWithID(d.sessionVariable("ReadLockedInfo").LockedLayersId[I]).locked=!0}a.a.UI.message("Recovered")}u="NormalResult",f=t(2),g=MSApplicationMetadata.metadata().variant,f("UA-169300937-3","event",{ec:"Sketch "+("NONAPPSTORE"==g?"":g+" ")+r.version.sketch+"-"+n.plugin.identifier()+" [v"+n.plugin.version()+"] ",ea:n.command.identifier(),el:u})}}]);if("default"===e&&"function"==typeof o)o(n);else{if("function"!=typeof o[e])throw new Error('Missing export named "'+e+'". Your command should contain something like `export function " + key +"() {}`.');o[e](n)}}catch(t){if("undefined"==typeof process||!process.listenerCount||!process.listenerCount("uncaughtException"))throw t;process.emit("uncaughtException",t,"uncaughtException")}}globalThis.onRun=__skpm_run.bind(this,"default");