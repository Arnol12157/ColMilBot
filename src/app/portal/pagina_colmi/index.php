<!DOCTYPE html>

<style>
  .page-header{
    background-image: url("public_html/images/image30.jpeg");
    background-size: 100% 200px;
    background-repeat: no-repeat;
  }
</style>

<html ng-app="emi_page">
  <head>
    <script type="text/javascript" src="public_html/javascript/jquery.min.js"></script>
    <script type="text/javascript" src="public_html/javascript/jquery-ui-1.9.2.custom.js"></script>
    <script type="text/javascript" src="public_html/javascript/bootstrap.min.js" type="text/javascript"></script>
    <script type="text/javascript" src="public_html/javascript/angular.min.js"></script>
    <script type="text/javascript" src="public_html/javascript/eliminateBuyoutProcess.js"></script>
    <script type="text/javascript">
    /*
 angular-file-upload v2.5.0
 https://github.com/nervgh/angular-file-upload
*/

!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports["angular-file-upload"]=t():e["angular-file-upload"]=t()}(this,function(){return function(e){function t(o){if(n[o])return n[o].exports;var r=n[o]={exports:{},id:o,loaded:!1};return e[o].call(r.exports,r,r.exports,t),r.loaded=!0,r.exports}var n={};return t.m=e,t.c=n,t.p="",t(0)}([function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}var r=n(1),i=o(r),s=n(2),a=o(s),u=n(3),l=o(u),p=n(4),c=o(p),f=n(5),d=o(f),h=n(6),y=o(h),v=n(7),m=o(v),_=n(8),g=o(_),b=n(9),F=o(b),O=n(10),C=o(O),w=n(11),A=o(w),I=n(12),T=o(I),U=n(13),x=o(U);angular.module(i["default"].name,[]).value("fileUploaderOptions",a["default"]).factory("FileUploader",l["default"]).factory("FileLikeObject",c["default"]).factory("FileItem",d["default"]).factory("FileDirective",y["default"]).factory("FileSelect",m["default"]).factory("FileDrop",F["default"]).factory("FileOver",C["default"]).factory("Pipeline",g["default"]).directive("nvFileSelect",A["default"]).directive("nvFileDrop",T["default"]).directive("nvFileOver",x["default"]).run(["FileUploader","FileLikeObject","FileItem","FileDirective","FileSelect","FileDrop","FileOver","Pipeline",function(e,t,n,o,r,i,s,a){e.FileLikeObject=t,e.FileItem=n,e.FileDirective=o,e.FileSelect=r,e.FileDrop=i,e.FileOver=s,e.Pipeline=a}])},function(e,t){e.exports={name:"angularFileUpload"}},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]={url:"/",alias:"file",headers:{},queue:[],progress:0,autoUpload:!1,removeAfterUpload:!1,method:"POST",filters:[],formData:[],queueLimit:Number.MAX_VALUE,withCredentials:!1,disableMultipart:!1}},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t,n,o,i,a,u,g){var b=o.File,F=o.FormData,O=function(){function o(t){r(this,o);var n=p(e);c(this,n,t,{isUploading:!1,_nextIndex:0,_directives:{select:[],drop:[],over:[]}}),this.filters.unshift({name:"queueLimit",fn:this._queueLimitFilter}),this.filters.unshift({name:"folder",fn:this._folderFilter})}return o.prototype.addToQueue=function(e,t,n){var o=this,r=this.isArrayLikeObject(e)?Array.prototype.slice.call(e):[e],i=this._getFilters(n),l=this.queue.length,p=[],c=function d(){var e=r.shift();if(m(e))return f();var n=o.isFile(e)?e:new a(e),l=o._convertFiltersToPipes(i),c=new g(l),h=function(e){var t=e.pipe.originalFilter,n=s(e.args,2),r=n[0],i=n[1];o._onWhenAddingFileFailed(r,t,i),d()},y=function(e,t){var n=new u(o,e,t);p.push(n),o.queue.push(n),o._onAfterAddingFile(n),d()};c.onThrown=h,c.onSuccessful=y,c.exec(n,t)},f=function(){o.queue.length!==l&&(o._onAfterAddingAll(p),o.progress=o._getTotalProgress()),o._render(),o.autoUpload&&o.uploadAll()};c()},o.prototype.removeFromQueue=function(e){var t=this.getIndexOfItem(e),n=this.queue[t];n.isUploading&&n.cancel(),this.queue.splice(t,1),n._destroy(),this.progress=this._getTotalProgress()},o.prototype.clearQueue=function(){for(;this.queue.length;)this.queue[0].remove();this.progress=0},o.prototype.uploadItem=function(e){var t=this.getIndexOfItem(e),n=this.queue[t],o=this.isHTML5?"_xhrTransport":"_iframeTransport";n._prepareToUploading(),this.isUploading||(this._onBeforeUploadItem(n),n.isCancel||(n.isUploading=!0,this.isUploading=!0,this[o](n),this._render()))},o.prototype.cancelItem=function(e){var t=this,n=this.getIndexOfItem(e),o=this.queue[n],r=this.isHTML5?"_xhr":"_form";o&&(o.isCancel=!0,o.isUploading?o[r].abort():!function(){var e=[void 0,0,{}],n=function(){t._onCancelItem.apply(t,[o].concat(e)),t._onCompleteItem.apply(t,[o].concat(e))};i(n)}())},o.prototype.uploadAll=function(){var e=this.getNotUploadedItems().filter(function(e){return!e.isUploading});e.length&&(f(e,function(e){return e._prepareToUploading()}),e[0].upload())},o.prototype.cancelAll=function(){var e=this.getNotUploadedItems();f(e,function(e){return e.cancel()})},o.prototype.isFile=function(e){return this.constructor.isFile(e)},o.prototype.isFileLikeObject=function(e){return this.constructor.isFileLikeObject(e)},o.prototype.isArrayLikeObject=function(e){return this.constructor.isArrayLikeObject(e)},o.prototype.getIndexOfItem=function(e){return h(e)?e:this.queue.indexOf(e)},o.prototype.getNotUploadedItems=function(){return this.queue.filter(function(e){return!e.isUploaded})},o.prototype.getReadyItems=function(){return this.queue.filter(function(e){return e.isReady&&!e.isUploading}).sort(function(e,t){return e.index-t.index})},o.prototype.destroy=function(){var e=this;f(this._directives,function(t){f(e._directives[t],function(e){e.destroy()})})},o.prototype.onAfterAddingAll=function(e){},o.prototype.onAfterAddingFile=function(e){},o.prototype.onWhenAddingFileFailed=function(e,t,n){},o.prototype.onBeforeUploadItem=function(e){},o.prototype.onProgressItem=function(e,t){},o.prototype.onProgressAll=function(e){},o.prototype.onSuccessItem=function(e,t,n,o){},o.prototype.onErrorItem=function(e,t,n,o){},o.prototype.onCancelItem=function(e,t,n,o){},o.prototype.onCompleteItem=function(e,t,n,o){},o.prototype.onCompleteAll=function(){},o.prototype._getTotalProgress=function(e){if(this.removeAfterUpload)return e||0;var t=this.getNotUploadedItems().length,n=t?this.queue.length-t:this.queue.length,o=100/this.queue.length,r=(e||0)*o/100;return Math.round(n*o+r)},o.prototype._getFilters=function(e){if(!e)return this.filters;if(v(e))return e;var t=e.match(/[^\s,]+/g);return this.filters.filter(function(e){return-1!==t.indexOf(e.name)})},o.prototype._convertFiltersToPipes=function(e){var t=this;return e.map(function(e){var n=l(t,e.fn);return n.isAsync=3===e.fn.length,n.originalFilter=e,n})},o.prototype._render=function(){t.$$phase||t.$apply()},o.prototype._folderFilter=function(e){return!(!e.size&&!e.type)},o.prototype._queueLimitFilter=function(){return this.queue.length<this.queueLimit},o.prototype._isSuccessCode=function(e){return e>=200&&300>e||304===e},o.prototype._transformResponse=function(e,t){var o=this._headersGetter(t);return f(n.defaults.transformResponse,function(t){e=t(e,o)}),e},o.prototype._parseHeaders=function(e){var t,n,o,r={};return e?(f(e.split("\n"),function(e){o=e.indexOf(":"),t=e.slice(0,o).trim().toLowerCase(),n=e.slice(o+1).trim(),t&&(r[t]=r[t]?r[t]+", "+n:n)}),r):r},o.prototype._headersGetter=function(e){return function(t){return t?e[t.toLowerCase()]||null:e}},o.prototype._xhrTransport=function(e){var t,n=this,o=e._xhr=new XMLHttpRequest;if(e.disableMultipart?t=e._file:(t=new F,f(e.formData,function(e){f(e,function(e,n){t.append(n,e)})}),t.append(e.alias,e._file,e.file.name)),"number"!=typeof e._file.size)throw new TypeError("The file specified is no longer valid");o.upload.onprogress=function(t){var o=Math.round(t.lengthComputable?100*t.loaded/t.total:0);n._onProgressItem(e,o)},o.onload=function(){var t=n._parseHeaders(o.getAllResponseHeaders()),r=n._transformResponse(o.response,t),i=n._isSuccessCode(o.status)?"Success":"Error",s="_on"+i+"Item";n[s](e,r,o.status,t),n._onCompleteItem(e,r,o.status,t)},o.onerror=function(){var t=n._parseHeaders(o.getAllResponseHeaders()),r=n._transformResponse(o.response,t);n._onErrorItem(e,r,o.status,t),n._onCompleteItem(e,r,o.status,t)},o.onabort=function(){var t=n._parseHeaders(o.getAllResponseHeaders()),r=n._transformResponse(o.response,t);n._onCancelItem(e,r,o.status,t),n._onCompleteItem(e,r,o.status,t)},o.open(e.method,e.url,!0),o.withCredentials=e.withCredentials,f(e.headers,function(e,t){o.setRequestHeader(t,e)}),o.send(t)},o.prototype._iframeTransport=function(e){var t=this,n=_('<form style="display: none;" />'),o=_('<iframe name="iframeTransport'+Date.now()+'">'),r=e._input;e._form&&e._form.replaceWith(r),e._form=n,r.prop("name",e.alias),f(e.formData,function(e){f(e,function(e,t){var o=_('<input type="hidden" name="'+t+'" />');o.val(e),n.append(o)})}),n.prop({action:e.url,method:"POST",target:o.prop("name"),enctype:"multipart/form-data",encoding:"multipart/form-data"}),o.bind("load",function(){var n="",r=200;try{n=o[0].contentDocument.body.innerHTML}catch(i){r=500}var s={response:n,status:r,dummy:!0},a={},u=t._transformResponse(s.response,a);t._onSuccessItem(e,u,s.status,a),t._onCompleteItem(e,u,s.status,a)}),n.abort=function(){var i,s={status:0,dummy:!0},a={};o.unbind("load").prop("src","javascript:false;"),n.replaceWith(r),t._onCancelItem(e,i,s.status,a),t._onCompleteItem(e,i,s.status,a)},r.after(n),n.append(r).append(o),n[0].submit()},o.prototype._onWhenAddingFileFailed=function(e,t,n){this.onWhenAddingFileFailed(e,t,n)},o.prototype._onAfterAddingFile=function(e){this.onAfterAddingFile(e)},o.prototype._onAfterAddingAll=function(e){this.onAfterAddingAll(e)},o.prototype._onBeforeUploadItem=function(e){e._onBeforeUpload(),this.onBeforeUploadItem(e)},o.prototype._onProgressItem=function(e,t){var n=this._getTotalProgress(t);this.progress=n,e._onProgress(t),this.onProgressItem(e,t),this.onProgressAll(n),this._render()},o.prototype._onSuccessItem=function(e,t,n,o){e._onSuccess(t,n,o),this.onSuccessItem(e,t,n,o)},o.prototype._onErrorItem=function(e,t,n,o){e._onError(t,n,o),this.onErrorItem(e,t,n,o)},o.prototype._onCancelItem=function(e,t,n,o){e._onCancel(t,n,o),this.onCancelItem(e,t,n,o)},o.prototype._onCompleteItem=function(e,t,n,o){e._onComplete(t,n,o),this.onCompleteItem(e,t,n,o);var r=this.getReadyItems()[0];return this.isUploading=!1,y(r)?void r.upload():(this.onCompleteAll(),this.progress=this._getTotalProgress(),void this._render())},o.isFile=function(e){return b&&e instanceof b},o.isFileLikeObject=function(e){return e instanceof a},o.isArrayLikeObject=function(e){return d(e)&&"length"in e},o.inherit=function(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,e.super_=t},o}();return O.prototype.isHTML5=!(!b||!F),O.isHTML5=O.prototype.isHTML5,O}Object.defineProperty(t,"__esModule",{value:!0});var s=function(){function e(e,t){var n=[],o=!0,r=!1,i=void 0;try{for(var s,a=e[Symbol.iterator]();!(o=(s=a.next()).done)&&(n.push(s.value),!t||n.length!==t);o=!0);}catch(u){r=!0,i=u}finally{try{!o&&a["return"]&&a["return"]()}finally{if(r)throw i}}return n}return function(t,n){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return e(t,n);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}();t["default"]=i;var a=n(1),u=(o(a),angular),l=u.bind,p=u.copy,c=u.extend,f=u.forEach,d=u.isObject,h=u.isNumber,y=u.isDefined,v=u.isArray,m=u.isUndefined,_=u.element;i.$inject=["fileUploaderOptions","$rootScope","$http","$window","$timeout","FileLikeObject","FileItem","Pipeline"]},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(){return function(){function e(t){r(this,e);var n=l(t),o=n?t.value:t,i=p(o)?"FakePath":"Object",s="_createFrom"+i;this[s](o)}return e.prototype._createFromFakePath=function(e){this.lastModifiedDate=null,this.size=null,this.type="like/"+e.slice(e.lastIndexOf(".")+1).toLowerCase(),this.name=e.slice(e.lastIndexOf("/")+e.lastIndexOf("\\")+2)},e.prototype._createFromObject=function(e){this.lastModifiedDate=u(e.lastModifiedDate),this.size=e.size,this.type=e.type,this.name=e.name},e}()}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=i;var s=n(1),a=(o(s),angular),u=a.copy,l=a.isElement,p=a.isString},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){return function(){function n(e,o,i){r(this,n);var s=c(o),a=s?p(o):null,f=s?null:o;l(this,{url:e.url,alias:e.alias,headers:u(e.headers),formData:u(e.formData),removeAfterUpload:e.removeAfterUpload,withCredentials:e.withCredentials,disableMultipart:e.disableMultipart,method:e.method},i,{uploader:e,file:new t(o),isReady:!1,isUploading:!1,isUploaded:!1,isSuccess:!1,isCancel:!1,isError:!1,progress:0,index:null,_file:f,_input:a}),a&&this._replaceNode(a)}return n.prototype.upload=function(){try{this.uploader.uploadItem(this)}catch(e){var t=e.name+":"+e.message;this.uploader._onCompleteItem(this,t,e.code,[]),this.uploader._onErrorItem(this,t,e.code,[])}},n.prototype.cancel=function(){this.uploader.cancelItem(this)},n.prototype.remove=function(){this.uploader.removeFromQueue(this)},n.prototype.onBeforeUpload=function(){},n.prototype.onProgress=function(e){},n.prototype.onSuccess=function(e,t,n){},n.prototype.onError=function(e,t,n){},n.prototype.onCancel=function(e,t,n){},n.prototype.onComplete=function(e,t,n){},n.prototype._onBeforeUpload=function(){this.isReady=!0,this.isUploading=!1,this.isUploaded=!1,this.isSuccess=!1,this.isCancel=!1,this.isError=!1,this.progress=0,this.onBeforeUpload()},n.prototype._onProgress=function(e){this.progress=e,this.onProgress(e)},n.prototype._onSuccess=function(e,t,n){this.isReady=!1,this.isUploading=!1,this.isUploaded=!0,this.isSuccess=!0,this.isCancel=!1,this.isError=!1,this.progress=100,this.index=null,this.onSuccess(e,t,n)},n.prototype._onError=function(e,t,n){this.isReady=!1,this.isUploading=!1,this.isUploaded=!0,this.isSuccess=!1,this.isCancel=!1,this.isError=!0,this.progress=0,this.index=null,this.onError(e,t,n)},n.prototype._onCancel=function(e,t,n){this.isReady=!1,this.isUploading=!1,this.isUploaded=!1,this.isSuccess=!1,this.isCancel=!0,this.isError=!1,this.progress=0,this.index=null,this.onCancel(e,t,n)},n.prototype._onComplete=function(e,t,n){this.onComplete(e,t,n),this.removeAfterUpload&&this.remove()},n.prototype._destroy=function(){this._input&&this._input.remove(),this._form&&this._form.remove(),delete this._form,delete this._input},n.prototype._prepareToUploading=function(){this.index=this.index||++this.uploader._nextIndex,this.isReady=!0},n.prototype._replaceNode=function(t){var n=e(t.clone())(t.scope());n.prop("value",null),t.css("display","none"),t.after(n)},n}()}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=i;var s=n(1),a=(o(s),angular),u=a.copy,l=a.extend,p=a.element,c=a.isElement;i.$inject=["$compile","FileLikeObject"]},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(){var e=function(){function e(t){r(this,e),u(this,t),this.uploader._directives[this.prop].push(this),this._saveLinks(),this.bind()}return e.prototype.bind=function(){for(var e in this.events){var t=this.events[e];this.element.bind(e,this[t])}},e.prototype.unbind=function(){for(var e in this.events)this.element.unbind(e,this.events[e])},e.prototype.destroy=function(){var e=this.uploader._directives[this.prop].indexOf(this);this.uploader._directives[this.prop].splice(e,1),this.unbind()},e.prototype._saveLinks=function(){for(var e in this.events){var t=this.events[e];this[t]=this[t].bind(this)}},e}();return e.prototype.events={},e}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=i;var s=n(1),a=(o(s),angular),u=a.extend},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function a(e,t){return function(t){function n(e){r(this,n);var o=p(e,{events:{$destroy:"destroy",change:"onChange"},prop:"select"}),s=i(this,t.call(this,o));return s.uploader.isHTML5||s.element.removeAttr("multiple"),s.element.prop("value",null),s}return s(n,t),n.prototype.getOptions=function(){},n.prototype.getFilters=function(){},n.prototype.isEmptyAfterSelection=function(){return!!this.element.attr("multiple")},n.prototype.onChange=function(){var t=this.uploader.isHTML5?this.element[0].files:this.element[0],n=this.getOptions(),o=this.getFilters();this.uploader.isHTML5||this.destroy(),this.uploader.addToQueue(t,n,o),this.isEmptyAfterSelection()&&(this.element.prop("value",null),this.element.replaceWith(e(this.element.clone())(this.scope)))},n}(t)}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=a;var u=n(1),l=(o(u),angular),p=l.extend;a.$inject=["$compile","FileDirective"]},function(e,t){"use strict";function n(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e){return function(){function t(){var e=arguments.length<=0||void 0===arguments[0]?[]:arguments[0];o(this,t),this.pipes=e}return t.prototype.next=function(t){var o=this.pipes.shift();if(a(o))return void this.onSuccessful.apply(this,n(t));var r=new Error("The filter has not passed");if(r.pipe=o,r.args=t,o.isAsync){var i=e.defer(),u=s(this,this.next,t),l=s(this,this.onThrown,r);i.promise.then(u,l),o.apply(void 0,n(t).concat([i]))}else{var p=Boolean(o.apply(void 0,n(t)));p?this.next(t):this.onThrown(r)}},t.prototype.exec=function(){for(var e=arguments.length,t=Array(e),n=0;e>n;n++)t[n]=arguments[n];this.next(t)},t.prototype.onThrown=function(e){},t.prototype.onSuccessful=function(){},t}()}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=r;var i=angular,s=i.bind,a=i.isUndefined;r.$inject=["$q"]},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function a(e){return function(e){function t(n){r(this,t);var o=p(n,{events:{$destroy:"destroy",drop:"onDrop",dragover:"onDragOver",dragleave:"onDragLeave"},prop:"drop"});return i(this,e.call(this,o))}return s(t,e),t.prototype.getOptions=function(){},t.prototype.getFilters=function(){},t.prototype.onDrop=function(e){var t=this._getTransfer(e);if(t){var n=this.getOptions(),o=this.getFilters();this._preventAndStop(e),c(this.uploader._directives.over,this._removeOverClass,this),this.uploader.addToQueue(t.files,n,o)}},t.prototype.onDragOver=function(e){var t=this._getTransfer(e);this._haveFiles(t.types)&&(t.dropEffect="copy",this._preventAndStop(e),c(this.uploader._directives.over,this._addOverClass,this))},t.prototype.onDragLeave=function(e){e.currentTarget!==this.element[0]&&(this._preventAndStop(e),c(this.uploader._directives.over,this._removeOverClass,this))},t.prototype._getTransfer=function(e){return e.dataTransfer?e.dataTransfer:e.originalEvent.dataTransfer},t.prototype._preventAndStop=function(e){e.preventDefault(),e.stopPropagation()},t.prototype._haveFiles=function(e){return e?e.indexOf?-1!==e.indexOf("Files"):e.contains?e.contains("Files"):!1:!1},t.prototype._addOverClass=function(e){e.addOverClass()},t.prototype._removeOverClass=function(e){e.removeOverClass()},t}(e)}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=a;var u=n(1),l=(o(u),angular),p=l.extend,c=l.forEach;a.$inject=["FileDirective"]},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function a(e){return function(e){function t(n){r(this,t);var o=p(n,{events:{$destroy:"destroy"},prop:"over",overClass:"nv-file-over"});return i(this,e.call(this,o))}return s(t,e),t.prototype.addOverClass=function(){this.element.addClass(this.getOverClass())},t.prototype.removeOverClass=function(){this.element.removeClass(this.getOverClass())},t.prototype.getOverClass=function(){return this.overClass},t}(e)}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=a;var u=n(1),l=(o(u),angular),p=l.extend;a.$inject=["FileDirective"]},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}function r(e,t,n){return{link:function(o,r,i){var s=o.$eval(i.uploader);if(!(s instanceof t))throw new TypeError('"Uploader" must be an instance of FileUploader');var a=new n({uploader:s,element:r,scope:o});a.getOptions=e(i.options).bind(a,o),a.getFilters=function(){return i.filters}}}}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=r;var i=n(1);o(i);r.$inject=["$parse","FileUploader","FileSelect"]},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}function r(e,t,n){return{link:function(o,r,i){var s=o.$eval(i.uploader);if(!(s instanceof t))throw new TypeError('"Uploader" must be an instance of FileUploader');if(s.isHTML5){var a=new n({uploader:s,element:r});a.getOptions=e(i.options).bind(a,o),a.getFilters=function(){return i.filters}}}}}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=r;var i=n(1);o(i);r.$inject=["$parse","FileUploader","FileDrop"]},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}function r(e,t){return{link:function(n,o,r){var i=n.$eval(r.uploader);if(!(i instanceof e))throw new TypeError('"Uploader" must be an instance of FileUploader');var s=new t({uploader:i,element:o});s.getOverClass=function(){return r.overClass||s.overClass}}}}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=r;var i=n(1);o(i);r.$inject=["FileUploader","FileOver"]}])});
//# sourceMappingURL=angular-file-upload.min.js.map
    </script>
    
    <link href="public_html/style/bootstrap.min.css?v=2.0" rel="stylesheet" type="text/css"/>
    <link href="public_html/style/jquery-ui.min.css" rel="stylesheet" type="text/css"/>
    <link rel="stylesheet" href="css/templatemo_style.css">
        <link rel="stylesheet" href="css/templatemo_misc.css">
        <link rel="stylesheet" href="css/flexslider.css">
        <link rel="stylesheet" href="css/testimonails-slider.css">
      <link rel="stylesheet" href="css/custom.css">
        <link rel="stylesheet" href="css/font-awesome.css">



        <link href='http://fonts.googleapis.com/css?family=Open+Sans:300italic,400italic,600italic,700italic,800italic,400,300,600,700,800' rel='stylesheet' type='text/css'>

        

        <script src="js/vendor/modernizr-2.6.1-respond-1.1.0.min.js"></script>
        <script src="js/vendor/jquery.gmap3.min.js"></script>
        <script src="js/plugins.js"></script>
        <script src="js/main.js"></script>

    <script>
      //Angular module
      var emiPage = angular.module('emi_page', ['angularFileUpload']);

      emiPage.controller('pageController',function ($scope,$http,FileUploader,$timeout){
        $scope.titulo = '';
        $scope.contenido = '';
        $scope.user = '';
        $scope.pass = '';



        $scope.tableImage = [];
        var uploader = $scope.uploader = new FileUploader({
            url: 'upload.php'
        });

        uploader.filters.push({
            name: 'syncFilter',
            fn: function(item /*{File|FileLikeObject}*/, options) {
                console.log('syncFilter');
                return this.queue.length < 10;
            }
        });
      
        // an async filter
        uploader.filters.push({
            name: 'asyncFilter',
            fn: function(item /*{File|FileLikeObject}*/, options, deferred) {
                console.log('asyncFilter');
                setTimeout(deferred.resolve, 1e3);
            }
        });

        // CALLBACKS

        uploader.onWhenAddingFileFailed = function(item /*{File|FileLikeObject}*/, filter, options) {
            console.info('onWhenAddingFileFailed', item, filter, options);
        };
        uploader.onAfterAddingFile = function(fileItem) {
            console.info('onAfterAddingFile', fileItem);
        };
        uploader.onAfterAddingAll = function(addedFileItems) {
            console.info('onAfterAddingAll', addedFileItems);
        };
        uploader.onBeforeUploadItem = function(item) {
            console.info('onBeforeUploadItem', item);
        };
        uploader.onProgressItem = function(fileItem, progress) {
            console.info('onProgressItem', fileItem, progress);
        };
        uploader.onProgressAll = function(progress) {
            console.info('onProgressAll', progress);
        };
        uploader.onSuccessItem = function(fileItem, response, status, headers) {
            console.info('onSuccessItem', fileItem, response, status, headers);
        };
        uploader.onErrorItem = function(fileItem, response, status, headers) {
            console.info('onErrorItem', fileItem, response, status, headers);
        };
        uploader.onCancelItem = function(fileItem, response, status, headers) {
            console.info('onCancelItem', fileItem, response, status, headers);
        };
        uploader.onCompleteItem = function(fileItem, response, status, headers) {
            console.info('onCompleteItem', fileItem, response, status, headers);
            $scope.tableImage = response;
        };
        uploader.onCompleteAll = function() {
            console.info('onCompleteAll');
        };


        $scope.menuActive = 'bienvenida';
        $scope.readyFunction = function(){
          $http.get("emiAjax.php?action=getColmilNotas").success(function(data){
            $scope.titulo    = data[0].titulo;
            $scope.contenido = data[0].contenido;
          });
          $http.get("emiAjax.php?action=getImages").success(function(data){
              $scope.tableImage = data;
          });
          
        }
        $scope.guardarColomilNotas =function(titulo,contenido){
          $http.get("emiAjax.php?action=saveColmilNotas&titulo="+titulo+"&contenido="+contenido).success(function(data){
          }); 
        }
        $scope.menuAction = function (tab){
          $scope.menuActive = tab;
          if(tab == 'bienvenida' || tab == 'galeria'){
            setTimeout(function(){ set();}, 500);
            //setTimeout(set(), 1000)
            
          }
        }
        $scope.ingresar = function(user,pass){
          if(user=='admin' && pass=='emi2017'){
            $scope.menuAction('ingreso');
          }
          else{
            alert("Usuario o Contraseña incorrectas");
          }
        }


      });  
    </script>
  </head>
  <body ng-controller="pageController" ng-init="readyFunction()">
    <div id="top-header">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div class="home-account">
              <div class="col-md-20">
                <div class="logo">
                  <a href="#"><img src="images/ten.png" title="Grill Template" alt="Grill Website Template" > </a>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>



    <div>
      <nav class="navbar navbar-default">
        <div class="container-fluid">
          <!-- Brand and toggle get grouped for better mobile display -->
          <div class="navbar-header">
            <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
              <span class="sr-only">Toggle navigation</span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
            </button>
            <a class="navbar-brand"></a>
          </div>

          <!-- Collect the nav links, forms, and other content for toggling -->
          <div class="collapse navbar-collapse center-menu" id="bs-example-navbar-collapse-1">
            <ul class="nav navbar-nav">
              <li><a ng-clicK="menuAction('bienvenida')">Bienvenida</a></li>
              <li class="dropdown">
                <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Ingreso Postulación <span class="caret"></span></a>
                <ul class="dropdown-menu">
                  <li><a ng-clicK="menuAction('perfil')">Vacancias</a></li>
                  <li role="separator" class="divider"></li>
                  <li><a ng-clicK="menuAction('requisitos')">Centros y Requisitos</a></li>
                  <li role="separator" class="divider"></li>
                    <li><a ng-clicK="menuAction('proceso')">Proceso de Selección y Admisión</a></li>
                    <li role="separator" class="divider"></li>
                    <li><a ng-clicK="menuAction('beca')">Becas</a></li>
                    <li role="separator" class="divider">
                    <li><a ng-clicK="menuAction('egreso')">Perfil de Egreso</a></li>

                </ul>
              </li>

              <li class="dropdown">
                <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Armas del Ejercito <span class="caret"></span></a>
                <ul class="dropdown-menu">
                    <li><a ng-clicK="menuAction('inf')">Infantería</a></li>
                    <li role="separator" class="divider"></li>
                    <li><a ng-clicK="menuAction('cab')">Caballería</a></li>
                    <li role="separator" class="divider"></li>
                    <li><a ng-clicK="menuAction('art')">Artillería</a></li>
                    <li role="separator" class="divider"></li>
                    <li><a ng-clicK="menuAction('ing')">Ingeniería</a></li>
                    <li role="separator" class="divider"></li>
                    <li><a ng-clicK="menuAction('com')">Comunicaciones</a></li>
                    <li role="separator" class="divider"></li>
                    <li><a ng-clicK="menuAction('log')">Logística</a></li>


                </ul>
              </li>
              <li class="dropdown">
                <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">El Colegio Militar<span class="caret"></span></a>
                <ul class="dropdown-menu">
                    <li><a ng-clicK="menuAction('his')">Historia</a></li>
                    <li role="separator" class="divider"></li>
                    <li><a ng-clicK="menuAction('mis')">Misión y Visión</a></li>
                    <li role="separator" class="divider"></li>
                    <li><a ng-clicK="menuAction('him')">Himno</a></li>

                </ul>
              </li>

                <li><a ng-clicK="menuAction('galeria')">Paseo Fotografico</a></li>
                <li><a ng-clicK="menuAction('ColmiNotas')">ColmiNotas</a></li>
                <li><a ng-clicK="menuAction('contacto')">contacto</a></li>

            </ul>
            <!--form class="navbar-form navbar-left">
              <div class="form-group">
                <input type="text" class="form-control" placeholder="Search">
              </div>
              <button type="submit" class="btn btn-default">Submit</button>
            </form-->
            <!--ul class="nav navbar-nav navbar-right">
              <li><a href="#">Link</a></li>
              <li class="dropdown">
                <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Dropdown <span class="caret"></span></a>
                <ul class="dropdown-menu">
                  <li><a href="#">Action</a></li>
                  <li><a href="#">Another action</a></li>
                  <li><a href="#">Something else here</a></li>
                  <li role="separator" class="divider"></li>
                  <li><a href="#">Separated link</a></li>
                </ul>
              </li>
            </ul-->
          </div><!-- /.navbar-collapse -->
        </div><!-- /.container-fluid -->
      </nav>
    </div>

    <div align="center">
      <div class ='container row' id="bienvenida" ng-if="menuActive == 'bienvenida'">
        <?php include "bienvenida.php"; ?>
      </div>
      <div id="perfil" ng-if="menuActive == 'perfil'">
        <?php include "perfil.php"; ?>
      </div>
      <div id="perfil" ng-if="menuActive == 'requisitos'">
        <?php include "requisitos.php"; ?>
        </div>
        <div id="perfil" ng-if="menuActive == 'proceso'">
            <?php include "proceso.php"; ?>
        </div>
        <div id="perfil" ng-if="menuActive == 'beca'">
            <?php include "beca.php"; ?>
        </div>

        <div id="perfil" ng-if="menuActive == 'egreso'">
            <?php include "egreso.php"; ?>
        </div>
        <div id="perfil" ng-if="menuActive == 'inf'">
            <?php include "inf.php"; ?>
        </div>
        <div id="perfil" ng-if="menuActive == 'cab'">
            <?php include "cab.php"; ?>
        </div>
        <div id="perfil" ng-if="menuActive == 'log'">
            <?php include "log.php"; ?>
        </div>
        <div id="perfil" ng-if="menuActive == 'art'">
            <?php include "art.php"; ?>
        </div>
        <div id="perfil" ng-if="menuActive == 'com'">
            <?php include "com.php"; ?>
        </div>
        <div id="perfil" ng-if="menuActive == 'ing'">
            <?php include "ing.php"; ?>
        </div>
        <div id="perfil" ng-if="menuActive == 'single'">
            <?php include "single.php"; ?>
            </div>
        <div id="perfil" ng-if="menuActive == 'mis'">
            <?php include "mis.php"; ?>
        </div>
        <div id="perfil" ng-if="menuActive == 'his'">
            <?php include "his.php"; ?>
        </div>
        <div id="ingreso" ng-if="menuActive == 'ingreso'">
            <?php include "ingreso.php"; ?>

        </div>
        <div id="ColmiNotas" ng-if="menuActive == 'ColmiNotas'">
            <?php include "ColmiNotas.php"; ?>
        </div>
        <div id="perfil" ng-if="menuActive == 'him'">
            <?php include "him.php"; ?>
            </div>
            <div id="galeria" ng-if="menuActive == 'galeria'">
                <?php include "galeria.php"; ?>
           </div>
        <div id="login" ng-if="menuActive == 'login'">
            <?php include "login.php"; ?>
        </div>
        <div id="contacto" ng-if="menuActive == 'contacto'">
            <?php include "contacto.php"; ?>

</div>



        </div>
        <footer>
            <div class="container">
                <div class="top-footer">
                    <div class="row">


                    </div>
                </div>
                <div class="main-footer">
                    <div class="row">
                        <div class="col-md-6">
                                <h2 class="footer-title">Direccion</h2>
                                Estamos ubicado en la :
                                    <br>La Paz - Bolivia, Calacoto Calle 13


                        </div>


                        <div class="col-md-6">
                            <div class="more-info">
                                <h2 class="footer-title">Contacto</h2>
                                Para mas informacion puedes comunicarte:
                                <ul>
                                    <li><i class="fa fa-phone"></i>Telefono: 2145828</li>
                                    <li><i class="fa fa-globe"></i>www.colmil.edu.bo</li>
                                    <li><i class="fa fa-envelope"></i><a href="#">colegiomilitar17@hotmail.com</a></li>
                                </ul>
                            </div>
                            <div class="text-right"><a ng-clicK="menuAction('login')">Admin</a></div>
                        </div>
                    </div>
                </div>

            </div>

        </footer>


      <!--div id="carousel-example-generic" class="carousel slide" data-ride="carousel">
        
        <ol class="carousel-indicators">
          <li data-target="#carousel-example-generic" data-slide-to="0" class="active"></li>
          <li data-target="#carousel-example-generic" data-slide-to="1"></li>
          <li data-target="#carousel-example-generic" data-slide-to="2"></li>
        </ol>

        
        <div class="carousel-inner" role="listbox">
          <div class="item active">
            <img src="http://www.boliviaentusmanos.com/amarillas1/businesscard/imagenes/emi3.jpg" alt="Slide 1">
            <div class="carousel-caption">
              Caption Slide 1
            </div>
          </div>
          <div class="item">
            <img src="http://www.oui-iohe.org/assets/IGLU-EMI.jpg" alt="Slide 2">
            <div class="carousel-caption">
              Caption Slide 2
            </div>
          </div>
          <div class="item">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-9u_exMsfgGj3rfyOq7MQ5zsqWeQCRdWGrv8oqOIY0wta84C7Dw" alt="Slide 3">
            <div class="carousel-caption">
              Caption Slide 3
            </div>
          </div>        
        </div>

        
        <a class="left carousel-control" href="#carousel-example-generic" role="button" data-slide="prev">
          <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a class="right carousel-control" href="#carousel-example-generic" role="button" data-slide="next">
          <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      <</div-->

    </body>
  </html>
