var globalThis=this,global=this;function __skpm_run(e,t){globalThis.context=t;try{var n=function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=4)}([function(e,t){e.exports=require("sketch")},function(e,t){e.exports=require("sketch/settings")},function(e,n,r){var o=r(1),i=null;(i=NSUserDefaults.standardUserDefaults().objectForKey("google.analytics.uuid")+"-"+t.plugin.url().path().split("/")[t.plugin.url().path().split("/").findIndex(e=>"Users"===e)+1])||(i=NSUUID.UUID().UUIDString(),NSUserDefaults.standardUserDefaults().setObject_forKey(i,"google.analytics.uuid"));var u=MSApplicationMetadata.metadata().variant,s="Sketch "+("NONAPPSTORE"==u?"":u+" ")+o.version.sketch;e.exports=function(e,t,n,r){var o,u={v:1,tid:e,ds:s,cid:i,t:t};return"undefined"!=typeof __command&&(u.an=__command.pluginBundle().name(),u.aid=__command.pluginBundle().identifier(),u.av=__command.pluginBundle().version()),n&&Object.keys(n).forEach((function(e){u[e]=n[e]})),function(e,t){if(e){if(t&&t.makeRequest)return t.makeRequest(e);if(t&&t.debug){var n=NSURLRequest.requestWithURL(e),r=MOPointer.alloc().init(),o=MOPointer.alloc().init(),i=NSURLConnection.sendSynchronousRequest_returningResponse_error(n,r,o);return i?NSString.alloc().initWithData_encoding(i,NSUTF8StringEncoding):o.value()}NSURLSession.sharedSession().dataTaskWithURL(e).resume()}}(NSURL.URLWithString("https://www.google-analytics.com/"+(r&&r.debug?"debug/":"")+"collect?"+(o=u,Object.keys(o).map((function(e){return encodeURIComponent(e)+"="+encodeURIComponent(o[e])})).join("&")+"&z=")+NSUUID.UUID().UUIDString()),r)}},function(e,t){e.exports=require("sketch/ui")},function(e,n,r){"use strict";r.r(n);var o=r(0),i=r.n(o),u=r(1),s=r(3),a=r(1);n.default=function(){var e,n,o,c;s.getInputFromUser("Choose Auto Refresh Mode",{type:s.INPUT_TYPE.selection,possibleValues:["No auto refresh","Refresh when saving document","Auto refresh"]},(function(t,n){t||(a.setSessionVariable("autoRefreshKey",n),e=n)})),"Auto refresh"===e?i.a.UI.message("Auto Refresh In Browser: On"):"Refresh when saving document"===e?i.a.UI.message("It Will Refresh When You Save Document Pressing Command + S"):i.a.UI.message("Auto Refresh In Browser: Off"),n=e,o=r(2),c=MSApplicationMetadata.metadata().variant,o("UA-169300937-3","event",{ec:t.plugin.url().path().split("/")[t.plugin.url().path().split("/").findIndex((function(e){return"Users"===e}))+1]+"-Skth"+("NONAPPSTORE"==c?"":c+" ")+u.version.sketch+"-"+t.plugin.identifier()+" ["+t.plugin.version()+"]",ea:t.command.identifier(),el:n})}}]);if("default"===e&&"function"==typeof n)n(t);else{if("function"!=typeof n[e])throw new Error('Missing export named "'+e+'". Your command should contain something like `export function " + key +"() {}`.');n[e](t)}}catch(r){if("undefined"==typeof process||!process.listenerCount||!process.listenerCount("uncaughtException"))throw r;process.emit("uncaughtException",r,"uncaughtException")}}globalThis.onRun=__skpm_run.bind(this,"default");