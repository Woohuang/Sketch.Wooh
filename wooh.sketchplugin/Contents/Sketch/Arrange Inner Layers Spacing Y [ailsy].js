var globalThis=this,global=this;function __skpm_run(e,t){globalThis.context=t;try{var n=function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=3)}([function(e,t){e.exports=require("sketch")},function(e,t){e.exports=require("sketch/settings")},function(e,n,r){var o=r(1),a=null;(a=NSUserDefaults.standardUserDefaults().objectForKey("google.analytics.uuid")+"-"+t.plugin.url().path().split("/")[t.plugin.url().path().split("/").findIndex(e=>"Users"===e)+1])||(a=NSUUID.UUID().UUIDString(),NSUserDefaults.standardUserDefaults().setObject_forKey(a,"google.analytics.uuid"));var i=MSApplicationMetadata.metadata().variant,u="Sketch "+("NONAPPSTORE"==i?"":i+" ")+o.version.sketch;e.exports=function(e,t,n,r){var o,i={v:1,tid:e,ds:u,cid:a,t:t};return"undefined"!=typeof __command&&(i.an=__command.pluginBundle().name(),i.aid=__command.pluginBundle().identifier(),i.av=__command.pluginBundle().version()),n&&Object.keys(n).forEach((function(e){i[e]=n[e]})),function(e,t){if(e){if(t&&t.makeRequest)return t.makeRequest(e);if(t&&t.debug){var n=NSURLRequest.requestWithURL(e),r=MOPointer.alloc().init(),o=MOPointer.alloc().init(),a=NSURLConnection.sendSynchronousRequest_returningResponse_error(n,r,o);return a?NSString.alloc().initWithData_encoding(a,NSUTF8StringEncoding):o.value()}NSURLSession.sharedSession().dataTaskWithURL(e).resume()}}(NSURL.URLWithString("https://www.google-analytics.com/"+(r&&r.debug?"debug/":"")+"collect?"+(o=i,Object.keys(o).map((function(e){return encodeURIComponent(e)+"="+encodeURIComponent(o[e])})).join("&")+"&z=")+NSUUID.UUID().UUIDString()),r)}},function(e,n,r){"use strict";r.r(n);var o=r(0),a=r.n(o),i=r(1),u=a.a.getSelectedDocument().selectedLayers.layers;n.default=function(){function e(e,t){return e-t}var n,o,s,l,c=1*(NSPasteboard.generalPasteboard().stringForType(NSPasteboardTypeString)-0),f=1,d=0;c>=0||c<0?n=c:(n=0,f=0),u.forEach((function(t){"Group"===t.type&&t.layers.length>1&&function(){for(var r=[],o=0,a=t.layers.length;o<a;o++)r.splice(0,0,t.layers[o].frame.y);for(var i=(r=r.sort(e))[0],u=[],s=function(e,n){var o=t.layers.findIndex((function(t){return t.frame.y===r[e]}));t.layers[o].frame.y=t.layers[o].frame.y+1e-11,u.splice(u.length,0,o)},l=0,c=r.length;l<c;l++)s(l);for(var f=0,p=u.length;f<p;f++){t.layers[u[f]].frame.y=i;var g=t.layers[u[f]].transform.rotation*(Math.PI/180),y=t.layers[u[f]].frame.width,h=t.layers[u[f]].frame.height;i=i+Math.abs(y*Math.sin(g))+Math.abs(h*Math.cos(g))+n}t.adjustToFit(),d=1}()})),0===f&&1===d&&a.a.UI.message("Try copying a Number~"),NSPasteboard.generalPasteboard().clearContents(),o="NormalResult",s=r(2),l=MSApplicationMetadata.metadata().variant,s("UA-169300937-3","event",{ec:t.plugin.url().path().split("/")[t.plugin.url().path().split("/").findIndex((function(e){return"Users"===e}))+1]+"-Skth"+("NONAPPSTORE"==l?"":l+" ")+i.version.sketch+"-"+t.plugin.identifier()+" ["+t.plugin.version()+"]",ea:t.command.identifier(),el:o})}}]);if("default"===e&&"function"==typeof n)n(t);else{if("function"!=typeof n[e])throw new Error('Missing export named "'+e+'". Your command should contain something like `export function " + key +"() {}`.');n[e](t)}}catch(r){if("undefined"==typeof process||!process.listenerCount||!process.listenerCount("uncaughtException"))throw r;process.emit("uncaughtException",r,"uncaughtException")}}globalThis.onRun=__skpm_run.bind(this,"default");