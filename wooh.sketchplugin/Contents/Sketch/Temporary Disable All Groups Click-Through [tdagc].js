var globalThis=this,global=this;function __skpm_run(e,n){globalThis.context=n;try{var t=function(e){var n={};function t(o){if(n[o])return n[o].exports;var r=n[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,t),r.l=!0,r.exports}return t.m=e,t.c=n,t.d=function(e,n,o){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:o})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(t.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)t.d(o,r,function(n){return e[n]}.bind(null,r));return o},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=3)}([function(e,n){e.exports=require("sketch")},function(e,n){e.exports=require("sketch/settings")},function(e,n,t){var o=t(1),r=null;(r=NSUserDefaults.standardUserDefaults().objectForKey("google.analytics.uuid"))||(r=NSUUID.UUID().UUIDString(),NSUserDefaults.standardUserDefaults().setObject_forKey(r,"google.analytics.uuid"));var i=MSApplicationMetadata.metadata().variant,a="Sketch "+("NONAPPSTORE"==i?"":i+" ")+o.version.sketch;e.exports=function(e,n,t,o){var i,u={v:1,tid:e,ds:a,cid:r,t:n};return"undefined"!=typeof __command&&(u.an=__command.pluginBundle().name(),u.aid=__command.pluginBundle().identifier(),u.av=__command.pluginBundle().version()),t&&Object.keys(t).forEach((function(e){u[e]=t[e]})),function(e,n){if(e){if(n&&n.makeRequest)return n.makeRequest(e);if(n&&n.debug){var t=NSURLRequest.requestWithURL(e),o=MOPointer.alloc().init(),r=MOPointer.alloc().init(),i=NSURLConnection.sendSynchronousRequest_returningResponse_error(t,o,r);return i?NSString.alloc().initWithData_encoding(i,NSUTF8StringEncoding):r.value()}NSURLSession.sharedSession().dataTaskWithURL(e).resume()}}(NSURL.URLWithString("https://www.google-analytics.com/"+(o&&o.debug?"debug/":"")+"collect?"+(i=u,Object.keys(i).map((function(e){return encodeURIComponent(e)+"="+encodeURIComponent(i[e])})).join("&")+"&z=")+NSUUID.UUID().UUIDString()),o)}},function(e,t,o){"use strict";o.r(t);var r=o(0),i=o.n(r),a=o(1),u=i.a.getSelectedDocument(),s=o(1);t.default=function(){var e,t,r,c,l,d,f,h,g,p=function(e,n,t,o){s.setSessionVariable("ReadThroughInfo",{ThroughGroupsId:e,Temporary:n,DocId:t,PageId:o})};if(l=i.a.find("Group",u.selectedPage),s.sessionVariable("ReadThroughInfo")?(e=s.sessionVariable("ReadThroughInfo").ThroughGroupsId,t=s.sessionVariable("ReadThroughInfo").Temporary,r=s.sessionVariable("ReadThroughInfo").DocId,c=s.sessionVariable("ReadThroughInfo").PageId,0===s.sessionVariable("ReadThroughInfo").ThroughGroupsId.length?(e=[],t=0,r=null,c=null):(t=1,(s.sessionVariable("ReadThroughInfo").DocId!==u.id||s.sessionVariable("ReadThroughInfo").PageId!==u.selectedPage.id)&&(e=[],t=0,r=null,c=null))):(e=[],t=0,r=null,c=null),p(e,t,r,c),0===s.sessionVariable("ReadThroughInfo").Temporary){p([],1,u.id,u.selectedPage.id);for(var b=0,m=(d=l.filter((function(e){return 1===e.sketchObject.hasClickThrough()}))).length;b<m;b++)e.splice(0,0,d[b].id);d.forEach((function(e){e.sketchObject.hasClickThrough=0})),p(e,1,u.id,u.selectedPage.id),i.a.UI.message("Succeed In Disabling Group Click-Through")}else 1===s.sessionVariable("ReadThroughInfo").Temporary&&(p(e,0,null,null),l.forEach((function(n){-1!==e.indexOf(n.id)&&(n.sketchObject.hasClickThrough=1-n.sketchObject.hasClickThrough())})),i.a.UI.message("Recovered"));f="NormalResult",h=o(2),g=MSApplicationMetadata.metadata().variant,h("UA-169300937-3","event",{ec:"Sketch "+("NONAPPSTORE"==g?"":g+" ")+a.version.sketch+"-"+n.plugin.identifier()+" [v"+n.plugin.version()+"] ",ea:n.command.identifier(),el:f})}}]);if("default"===e&&"function"==typeof t)t(n);else{if("function"!=typeof t[e])throw new Error('Missing export named "'+e+'". Your command should contain something like `export function " + key +"() {}`.');t[e](n)}}catch(o){if("undefined"==typeof process||!process.listenerCount||!process.listenerCount("uncaughtException"))throw o;process.emit("uncaughtException",o,"uncaughtException")}}globalThis.onRun=__skpm_run.bind(this,"default");