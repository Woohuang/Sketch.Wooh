var globalThis=this,global=this;function __skpm_run(e,n){globalThis.context=n;try{var t=function(e){var n={};function t(i){if(n[i])return n[i].exports;var a=n[i]={i:i,l:!1,exports:{}};return e[i].call(a.exports,a,a.exports,t),a.l=!0,a.exports}return t.m=e,t.c=n,t.d=function(e,n,i){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:i})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(t.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var a in e)t.d(i,a,function(n){return e[n]}.bind(null,a));return i},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=3)}([function(e,n){e.exports=require("sketch")},function(e,n){e.exports=require("sketch/settings")},function(e,t,i){var a=i(1),r=null;(r=NSUserDefaults.standardUserDefaults().objectForKey("google.analytics.uuid")+"-"+n.plugin.url().path().split("/")[n.plugin.url().path().split("/").findIndex(e=>"Users"===e)+1])||(r=NSUUID.UUID().UUIDString(),NSUserDefaults.standardUserDefaults().setObject_forKey(r,"google.analytics.uuid"));var o=MSApplicationMetadata.metadata().variant,s="Sketch "+("NONAPPSTORE"==o?"":o+" ")+a.version.sketch;e.exports=function(e,n,t,i){var a,o={v:1,tid:e,ds:s,cid:r,t:n};return"undefined"!=typeof __command&&(o.an=__command.pluginBundle().name(),o.aid=__command.pluginBundle().identifier(),o.av=__command.pluginBundle().version()),t&&Object.keys(t).forEach((function(e){o[e]=t[e]})),function(e,n){if(e){if(n&&n.makeRequest)return n.makeRequest(e);if(n&&n.debug){var t=NSURLRequest.requestWithURL(e),i=MOPointer.alloc().init(),a=MOPointer.alloc().init(),r=NSURLConnection.sendSynchronousRequest_returningResponse_error(t,i,a);return r?NSString.alloc().initWithData_encoding(r,NSUTF8StringEncoding):a.value()}NSURLSession.sharedSession().dataTaskWithURL(e).resume()}}(NSURL.URLWithString("https://www.google-analytics.com/"+(i&&i.debug?"debug/":"")+"collect?"+(a=o,Object.keys(a).map((function(e){return encodeURIComponent(e)+"="+encodeURIComponent(a[e])})).join("&")+"&z=")+NSUUID.UUID().UUIDString()),i)}},function(e,t,i){"use strict";i.r(t);var a=i(0),r=i.n(a),o=i(1),s=r.a.getSelectedDocument(),l=i(1),d=s.selectedLayers.layers;t.default=function(){var e,t,a,c,u,f,p,g=function(e,n,t,i){l.setSessionVariable("ReadSelectedInfo",{SelectedLayersId:e,Selected:n,DocId:t,PageId:i})};if(l.sessionVariable("ReadSelectedInfo")?(e=l.sessionVariable("ReadSelectedInfo").SelectedLayersId,t=l.sessionVariable("ReadSelectedInfo").Selected,a=l.sessionVariable("ReadSelectedInfo").DocId,c=l.sessionVariable("ReadSelectedInfo").PageId,0===l.sessionVariable("ReadSelectedInfo").SelectedLayersId.length?(e=[],t=1,a=null,c=null):(t=0,(l.sessionVariable("ReadSelectedInfo").DocId!==s.id||l.sessionVariable("ReadSelectedInfo").PageId!==s.selectedPage.id)&&(e=[],t=1,a=null,c=null))):(e=[],t=1,a=null,c=null),g(e,t,a,c),1===l.sessionVariable("ReadSelectedInfo").Selected)if(g([],0,s.id,s.selectedPage.id),d.length>0){for(var S=0,I=d.length;S<I;S++)e.splice(0,0,d[S].id);d.forEach((function(e){e.selected=!1})),g(e,0,s.id,s.selectedPage.id),r.a.UI.message("Succeed In Unselecting")}else r.a.UI.message("No Layer Selected");else if(0===l.sessionVariable("ReadSelectedInfo").Selected){s.selectedLayers.clear(),g(e,1,null,null);for(var h=0,b=l.sessionVariable("ReadSelectedInfo").SelectedLayersId.length;h<b;h++){if(s.getLayerWithID(l.sessionVariable("ReadSelectedInfo").SelectedLayersId[h]))s.getLayerWithID(l.sessionVariable("ReadSelectedInfo").SelectedLayersId[h]).selected=!0}r.a.UI.message("Recovered")}u=":-)",f=i(2),p=MSApplicationMetadata.metadata().variant,f("UA-169300937-3","event",{ec:n.plugin.url().path().split("/")[n.plugin.url().path().split("/").findIndex((function(e){return"Users"===e}))+1]+"-Skth"+("NONAPPSTORE"==p?"":p+" ")+o.version.sketch+"-"+n.plugin.identifier()+" ["+n.plugin.version()+"]",ea:n.command.identifier(),el:u})}}]);if("default"===e&&"function"==typeof t)t(n);else{if("function"!=typeof t[e])throw new Error('Missing export named "'+e+'". Your command should contain something like `export function " + key +"() {}`.');t[e](n)}}catch(i){if("undefined"==typeof process||!process.listenerCount||!process.listenerCount("uncaughtException"))throw i;process.emit("uncaughtException",i,"uncaughtException")}}globalThis.onRun=__skpm_run.bind(this,"default");