var globalThis=this,global=this;function __skpm_run(e,t){globalThis.context=t;try{var n=function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=4)}([function(e,t){e.exports=require("sketch")},function(e,t){e.exports=require("sketch/settings")},function(e,t){e.exports=require("sketch/dom")},function(e,t,n){var r=n(1),o=null;(o=NSUserDefaults.standardUserDefaults().objectForKey("google.analytics.uuid"))||(o=NSUUID.UUID().UUIDString(),NSUserDefaults.standardUserDefaults().setObject_forKey(o,"google.analytics.uuid"));var i=MSApplicationMetadata.metadata().variant,a="Sketch "+("NONAPPSTORE"==i?"":i+" ")+r.version.sketch;e.exports=function(e,t,n,r){var i,u={v:1,tid:e,ds:a,cid:o,t:t};return"undefined"!=typeof __command&&(u.an=__command.pluginBundle().name(),u.aid=__command.pluginBundle().identifier(),u.av=__command.pluginBundle().version()),n&&Object.keys(n).forEach((function(e){u[e]=n[e]})),function(e,t){if(e){if(t&&t.makeRequest)return t.makeRequest(e);if(t&&t.debug){var n=NSURLRequest.requestWithURL(e),r=MOPointer.alloc().init(),o=MOPointer.alloc().init(),i=NSURLConnection.sendSynchronousRequest_returningResponse_error(n,r,o);return i?NSString.alloc().initWithData_encoding(i,NSUTF8StringEncoding):o.value()}NSURLSession.sharedSession().dataTaskWithURL(e).resume()}}(NSURL.URLWithString("https://www.google-analytics.com/"+(r&&r.debug?"debug/":"")+"collect?"+(i=u,Object.keys(i).map((function(e){return encodeURIComponent(e)+"="+encodeURIComponent(i[e])})).join("&")+"&z=")+NSUUID.UUID().UUIDString()),r)}},function(e,n,r){"use strict";r.r(n);var o=r(0),i=r.n(o),a=r(1),u=i.a.getSelectedDocument(),s=u.selectedLayers.layers;r(2).SymbolInstance,n.default=function(){var e,n,o,c=NSPasteboard.generalPasteboard().stringForType(NSPasteboardTypeString).split("_.0._.0._.0._"),l=c[0],d=u.getLayerWithID(l).overrides,f=d.length,p=0;s.forEach((function(e){if(c[1]&&c[2]&&(e.frame.width=c[1],e.frame.height=c[2]),"SymbolInstance"===e.type)for(var t=0;t<f;t++)!0===e.overrides[t].editable&&e.overrides[t].affectedLayer.type===d[t].affectedLayer.type&&"Text"!==d[t].affectedLayer.type&&(e.setOverrideValue(e.overrides[t],d[t].value),p=1)})),1===p?i.a.UI.message("Succeed In Pasting"):i.a.UI.message("Fail In Following The Not Similar Symbol"),e="NormalResult",n=r(3),o=MSApplicationMetadata.metadata().variant,n("UA-169300937-3","event",{ec:"Sketch "+("NONAPPSTORE"==o?"":o+" ")+a.version.sketch+"-"+t.plugin.identifier()+" [v"+t.plugin.version()+"] ",ea:t.command.identifier(),el:e})}}]);if("default"===e&&"function"==typeof n)n(t);else{if("function"!=typeof n[e])throw new Error('Missing export named "'+e+'". Your command should contain something like `export function " + key +"() {}`.');n[e](t)}}catch(r){if("undefined"==typeof process||!process.listenerCount||!process.listenerCount("uncaughtException"))throw r;process.emit("uncaughtException",r,"uncaughtException")}}globalThis.onRun=__skpm_run.bind(this,"default");