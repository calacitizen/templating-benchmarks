!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):"object"==typeof exports?exports.tmpl=e():t.tmpl=e()}(this,function(){return function(t){function e(r){if(n[r])return n[r].exports;var i=n[r]={exports:{},id:r,loaded:!1};return t[r].call(i.exports,i,i.exports,e),i.loaded=!0,i.exports}var n={};return e.m=t,e.c=n,e.p="",e(0)}([function(t,e,n){var r=n(1),i=n(15);t.exports={parse:r.parse,traverse:function(t,e){return{handle:function(n,i){r.traverse(t,e).when(n,i)}}},getHTML:i}},function(t,e,n){var r=n(2),i=n(3),a=n(4),o=n(5);t.exports={_astTypes:["tag","text","directive","comment","style","script"],_modules:{"if":n(8),"for":n(12),include:n(13),partial:n(14)},_regex:{forVariables:/\{\{ ?(.*?) ?\}\}/g},safeReplaceCaseReg:/\r|\n|\t|\/\*[\s\S]*?\*\//g,safeReplaceCasePlace:"",_includeStack:{},_tagStack:[],parse:function(t,e){var n=new r.DefaultHandler(e||this.defaultHandler,{ignoreWhitespace:!0}),i=new r.Parser(n);return i.parseComplete(t),n.dom},_traverseTagAttributes:function(t,e){var n=i.clone(t);return i.eachObject(n,function(t){return this._traverseText({data:t},e)}.bind(this))},_moduleMatcher:function(t){return void 0!==this._modules[t.name]?this._modules[t.name].module:!1},_replaceAllUncertainStuff:function(t){return t.trim().replace(this.safeReplaceSingleQuotesReg,this.safeReplaceSingleQuotesPlace).replace(this.safeReplaceCaseReg,this.safeReplaceCasePlace)},_searchForVars:function(t){return i.mapForLoop(t,function(t){return t.split(this._regex.forVariables).join("")}.bind(this))},_replaceAndCreateStatements:function(t,e,n){return i.mapForLoop(t,function(t){return ssCheck=a.checkStatementForInners(t,e,n),ssCheck.isVar?this._createDataVar(t,ssCheck.value):this._createDataText(t)}.bind(this))},_replaceMatch:function(t,e){var n,r=/\{\{ ?(.*?) ?\}\}/g,i=this._replaceAllUncertainStuff(t.data),a=i.match(r),o=t;return a&&(n=this._searchForVars(a)),o.data=i.split(r),n?o.data=this._replaceAndCreateStatements(o.data,e,n):o.data=this._createDataText(o.data[0]),o},_lookForStatements:function(t,e){return this._replaceMatch(t,e)},_whatMethodShouldYouUse:function(t){return this._isTag(t.type)?this._modules[t.name]?this._traverseModule:this._traverseTag:this._isText(t.type)?this._traverseText:void 0},actionOnMainArray:function(t,e){if(void 0!==e)if(e.length>0)for(var n=0;n<e.length;n++)t.concat(this.actionOnMainArray(t,e[n]));else t.push(e);return e=null,t},_collect:function(t,e,n){var r=t.call(this,e,n);return this.isTagInclude(e.name)?void(this._includeStack[e.attribs.name]=r):r},traversingAST:function(t,e){for(var n,r,i=[],a=0;a<t.length;a++)n=this._whatMethodShouldYouUse(t[a]),n&&(r=this._collect(n,t[a],e),void 0!==r&&i.push(r));return o.every(i)},traverse:function(t,e,n){return this.traversingAST(t,e).when(function(t){return this.actionOnMainArray([],t)}.bind(this),function(t){throw new Error(t)})},_loadModuleFunction:function(t,e,n){var r=t(e,n),i=r.call(this);return i?i:void 0},_generatorFunctionForTags:function(t,e){return t.children=this.actionOnMainArray([],e),t},traverseTagWithChildren:function(t,e){return this.traversingAST(t.children,e).when(function(e){return this._generatorFunctionForTags(t,e)}.bind(this),function(t){throw new Error(t)})},_traverseTag:function(t,e){var n,r=this._traverseTagAttributes(t.attribs,e),i=this._createTag(t.name,t.data,t.raw,r,t.children);return i.children&&i.children.length>0?this.traverseTagWithChildren(i,e):(n=o.make(),n.keep(this._generatorFunctionForTags(i)),n.promise)},_traverseModule:function(t,e){var n=this._moduleMatcher(t);return this._loadModuleFunction(n,t,e)},_traverseText:function(t,e){var t=i.clone(t),n=o.make();return t.hasOwnProperty("type")?(n.keep(this._lookForStatements(t,e)),n.promise):this._lookForStatements(t,e)},_isTag:function(t){return"tag"===t},_isText:function(t){return"text"===t},isTagInclude:function(t){return"include"===t},_createDataVar:function(t,e){return{type:"var",name:t,value:e}},_createDataText:function(t){return{type:"text",value:t}},_createTag:function(t,e,n,r,i){return{name:t,data:e,raw:n,attribs:r,children:i,type:"tag"}},defaultHandler:function(t,e){if(t)throw new Error(t)}}},function(t,e,n){(function(n,r){!function(){function i(){return"object"==typeof e&&"object"==typeof t&&"string"==typeof n&&"string"==typeof r}function a(t,e){this._options=e?e:{},void 0==this._options.includeLocation&&(this._options.includeLocation=!1),this.validateHandler(t),this._handler=t,this.reset()}function o(t){o.super_.call(this,t,{ignoreWhitespace:!0,verbose:!1,enforceEmptyTags:!1})}function s(t,e){this.reset(),this._options=e?e:{},void 0==this._options.ignoreWhitespace&&(this._options.ignoreWhitespace=!1),void 0==this._options.verbose&&(this._options.verbose=!0),void 0==this._options.enforceEmptyTags&&(this._options.enforceEmptyTags=!0),"function"==typeof t&&(this._callback=t)}function c(t,e){var n=function(){};n.prototype=e.prototype,t.super_=e,t.prototype=new n,t.prototype.constructor=t}if(!i()){if(this.Tautologistics){if(this.Tautologistics.NodeHtmlParser)return}else this.Tautologistics={};this.Tautologistics.NodeHtmlParser={},e=this.Tautologistics.NodeHtmlParser}var l={Text:"text",Directive:"directive",Comment:"comment",Script:"script",Style:"style",Tag:"tag"};a._reTrim=/(^\s+|\s+$)/g,a._reTrimComment=/(^\!--|--$)/g,a._reWhitespace=/\s/g,a._reTagName=/^\s*(\/?)\s*([^\s\/]+)/,a._reAttrib=/([^=<>\"\'\s]+)\s*=\s*"([^"]*)"|([^=<>\"\'\s]+)\s*=\s*'([^']*)'|([^=<>\"\'\s]+)\s*=\s*([^'"\s]+)|([^=<>\"\'\s\/]+)/g,a._reTags=/[\<\>]/g,a.prototype.parseComplete=function(t){this.reset(),this.parseChunk(t),this.done()},a.prototype.parseChunk=function(t){this._done&&this.handleError(new Error("Attempted to parse chunk after parsing already done")),this._buffer+=t,this.parseTags()},a.prototype.done=function(){if(!this._done){if(this._done=!0,this._buffer.length){var t=this._buffer;this._buffer="";var e={raw:t,data:this._parseState==l.Text?t:t.replace(a._reTrim,""),type:this._parseState};(this._parseState==l.Tag||this._parseState==l.Script||this._parseState==l.Style)&&(e.name=this.parseTagName(e.data)),this.parseAttribs(e),this._elements.push(e)}this.writeHandler(),this._handler.done()}},a.prototype.reset=function(){this._buffer="",this._done=!1,this._elements=[],this._elementsCurrent=0,this._current=0,this._next=0,this._location={row:0,col:0,charOffset:0,inBuffer:0},this._parseState=l.Text,this._prevTagSep="",this._tagStack=[],this._handler.reset()},a.prototype._options=null,a.prototype._handler=null,a.prototype._buffer=null,a.prototype._done=!1,a.prototype._elements=null,a.prototype._elementsCurrent=0,a.prototype._current=0,a.prototype._next=0,a.prototype._location=null,a.prototype._parseState=l.Text,a.prototype._prevTagSep="",a.prototype._tagStack=null,a.prototype.parseTagAttribs=function(t){for(var e=t.length,n=0;e>n;){var r=t[n++];(r.type==l.Tag||r.type==l.Script||r.type==l.style)&&this.parseAttribs(r)}return t},a.prototype.parseAttribs=function(t){if(t.type==l.Script||t.type==l.Style||t.type==l.Tag){var e=t.data.split(a._reWhitespace,1)[0],n=t.data.substring(e.length);if(!(n.length<1)){var r;for(a._reAttrib.lastIndex=0;r=a._reAttrib.exec(n);)void 0==t.attribs&&(t.attribs={}),"string"==typeof r[1]&&r[1].length?t.attribs[r[1]]=r[2]:"string"==typeof r[3]&&r[3].length?t.attribs[r[3].toString()]=r[4].toString():"string"==typeof r[5]&&r[5].length?t.attribs[r[5]]=r[6]:"string"==typeof r[7]&&r[7].length&&(t.attribs[r[7]]=r[7])}}},a.prototype.parseTagName=function(t){if(null==t||""==t)return"";var e=a._reTagName.exec(t);return e?(e[1]?"/":"")+e[2]:""},a.prototype.parseTags=function(){for(var t=this._buffer.length-1;a._reTags.test(this._buffer);){this._next=a._reTags.lastIndex-1;var e=this._buffer.charAt(this._next),n=this._buffer.substring(this._current,this._next),r={raw:n,data:this._parseState==l.Text?n:n.replace(a._reTrim,""),type:this._parseState},i=this.parseTagName(r.data);if(this._tagStack.length)if(this._tagStack[this._tagStack.length-1]==l.Script){if("/script"==i.toLowerCase())this._tagStack.pop();else if(0!=r.raw.indexOf("!--")&&(r.type=l.Text,this._elements.length&&this._elements[this._elements.length-1].type==l.Text)){var o=this._elements[this._elements.length-1];o.raw=o.data=o.raw+this._prevTagSep+r.raw,r.raw=r.data=""}}else if(this._tagStack[this._tagStack.length-1]==l.Style){if("/style"==i.toLowerCase())this._tagStack.pop();else if(0!=r.raw.indexOf("!--"))if(r.type=l.Text,this._elements.length&&this._elements[this._elements.length-1].type==l.Text){var o=this._elements[this._elements.length-1];""!=r.raw?(o.raw=o.data=o.raw+this._prevTagSep+r.raw,r.raw=r.data=""):o.raw=o.data=o.raw+this._prevTagSep}else""!=r.raw&&(r.raw=r.data=r.raw)}else if(this._tagStack[this._tagStack.length-1]==l.Comment){var s=r.raw.length;if("-"==r.raw.charAt(s-2)&&"-"==r.raw.charAt(s-1)&&">"==e)if(this._tagStack.pop(),this._elements.length&&this._elements[this._elements.length-1].type==l.Comment){var o=this._elements[this._elements.length-1];o.raw=o.data=(o.raw+r.raw).replace(a._reTrimComment,""),r.raw=r.data="",r.type=l.Text}else r.type=l.Comment;else if(r.type=l.Comment,this._elements.length&&this._elements[this._elements.length-1].type==l.Comment){var o=this._elements[this._elements.length-1];o.raw=o.data=o.raw+r.raw+e,r.raw=r.data="",r.type=l.Text}else r.raw=r.data=r.raw+e}if(r.type==l.Tag){r.name=i;var c=i.toLowerCase();if(0==r.raw.indexOf("!--")){r.type=l.Comment,delete r.name;var s=r.raw.length;"-"==r.raw.charAt(s-1)&&"-"==r.raw.charAt(s-2)&&">"==e?r.raw=r.data=r.raw.replace(a._reTrimComment,""):(r.raw+=e,this._tagStack.push(l.Comment))}else 0==r.raw.indexOf("!")||0==r.raw.indexOf("?")?r.type=l.Directive:"script"==c?(r.type=l.Script,"/"!=r.data.charAt(r.data.length-1)&&this._tagStack.push(l.Script)):"/script"==c?r.type=l.Script:"style"==c?(r.type=l.Style,"/"!=r.data.charAt(r.data.length-1)&&this._tagStack.push(l.Style)):"/style"==c&&(r.type=l.Style);r.name&&"/"==r.name.charAt(0)&&(r.data=r.name)}(""!=r.raw||r.type!=l.Text)&&(this._options.includeLocation&&!r.location&&(r.location=this.getLocation(r.type==l.Tag)),this.parseAttribs(r),this._elements.push(r),r.type!=l.Text&&r.type!=l.Comment&&r.type!=l.Directive&&"/"==r.data.charAt(r.data.length-1)&&this._elements.push({raw:"/"+r.name,data:"/"+r.name,name:"/"+r.name,type:r.type})),this._parseState="<"==e?l.Tag:l.Text,this._current=this._next+1,this._prevTagSep=e}this._options.includeLocation&&(this.getLocation(),this._location.row+=this._location.inBuffer,this._location.inBuffer=0,this._location.charOffset=0),this._buffer=this._current<=t?this._buffer.substring(this._current):"",this._current=0,this.writeHandler()},a.prototype.getLocation=function(t){for(var e,n=this._location,r=this._current-(t?1:0),i=t&&0==n.charOffset&&0==this._current;n.charOffset<r;n.charOffset++)e=this._buffer.charAt(n.charOffset),"\n"==e?(n.inBuffer++,n.col=0):"\r"!=e&&n.col++;return{line:n.row+n.inBuffer+1,col:n.col+(i?0:1)}},a.prototype.validateHandler=function(t){if("object"!=typeof t)throw new Error("Handler is not an object");if("function"!=typeof t.reset)throw new Error("Handler method 'reset' is invalid");if("function"!=typeof t.done)throw new Error("Handler method 'done' is invalid");if("function"!=typeof t.writeTag)throw new Error("Handler method 'writeTag' is invalid");if("function"!=typeof t.writeText)throw new Error("Handler method 'writeText' is invalid");if("function"!=typeof t.writeComment)throw new Error("Handler method 'writeComment' is invalid");if("function"!=typeof t.writeDirective)throw new Error("Handler method 'writeDirective' is invalid")},a.prototype.writeHandler=function(t){if(t=!!t,!this._tagStack.length||t)for(;this._elements.length;){var e=this._elements.shift();switch(e.type){case l.Comment:this._handler.writeComment(e);break;case l.Directive:this._handler.writeDirective(e);break;case l.Text:this._handler.writeText(e);break;default:this._handler.writeTag(e)}}},a.prototype.handleError=function(t){if("function"!=typeof this._handler.error)throw t;this._handler.error(t)},c(o,s),o.prototype.done=function(){var t,e={},n=h.getElementsByTagName(function(t){return"rss"==t||"feed"==t},this.dom,!1);if(n.length&&(t=n[0]),t){if("rss"==t.name){e.type="rss",t=t.children[0],e.id="";try{e.title=h.getElementsByTagName("title",t.children,!1)[0].children[0].data}catch(r){}try{e.link=h.getElementsByTagName("link",t.children,!1)[0].children[0].data}catch(r){}try{e.description=h.getElementsByTagName("description",t.children,!1)[0].children[0].data}catch(r){}try{e.updated=new Date(h.getElementsByTagName("lastBuildDate",t.children,!1)[0].children[0].data)}catch(r){}try{e.author=h.getElementsByTagName("managingEditor",t.children,!1)[0].children[0].data}catch(r){}e.items=[],h.getElementsByTagName("item",t.children).forEach(function(t,n,r){var i={};try{i.id=h.getElementsByTagName("guid",t.children,!1)[0].children[0].data}catch(a){}try{i.title=h.getElementsByTagName("title",t.children,!1)[0].children[0].data}catch(a){}try{i.link=h.getElementsByTagName("link",t.children,!1)[0].children[0].data}catch(a){}try{i.description=h.getElementsByTagName("description",t.children,!1)[0].children[0].data}catch(a){}try{i.pubDate=new Date(h.getElementsByTagName("pubDate",t.children,!1)[0].children[0].data)}catch(a){}e.items.push(i)})}else{e.type="atom";try{e.id=h.getElementsByTagName("id",t.children,!1)[0].children[0].data}catch(r){}try{e.title=h.getElementsByTagName("title",t.children,!1)[0].children[0].data}catch(r){}try{e.link=h.getElementsByTagName("link",t.children,!1)[0].attribs.href}catch(r){}try{e.description=h.getElementsByTagName("subtitle",t.children,!1)[0].children[0].data}catch(r){}try{e.updated=new Date(h.getElementsByTagName("updated",t.children,!1)[0].children[0].data)}catch(r){}try{e.author=h.getElementsByTagName("email",t.children,!0)[0].children[0].data}catch(r){}e.items=[],h.getElementsByTagName("entry",t.children).forEach(function(t,n,r){var i={};try{i.id=h.getElementsByTagName("id",t.children,!1)[0].children[0].data}catch(a){}try{i.title=h.getElementsByTagName("title",t.children,!1)[0].children[0].data}catch(a){}try{i.link=h.getElementsByTagName("link",t.children,!1)[0].attribs.href}catch(a){}try{i.description=h.getElementsByTagName("summary",t.children,!1)[0].children[0].data}catch(a){}try{i.pubDate=new Date(h.getElementsByTagName("updated",t.children,!1)[0].children[0].data)}catch(a){}e.items.push(i)})}this.dom=e}o.super_.prototype.done.call(this)},s._emptyTags={area:1,base:1,basefont:1,br:1,col:1,frame:1,hr:1,img:1,input:1,isindex:1,link:1,meta:1,param:1,embed:1},s.reWhitespace=/^\s*$/,s.prototype.dom=null,s.prototype.reset=function(){this.dom=[],this._done=!1,this._tagStack=[],this._tagStack.last=function(){return this.length?this[this.length-1]:null}},s.prototype.done=function(){this._done=!0,this.handleCallback(null)},s.prototype.writeTag=function(t){this.handleElement(t)},s.prototype.writeText=function(t){this._options.ignoreWhitespace&&s.reWhitespace.test(t.data)||this.handleElement(t)},s.prototype.writeComment=function(t){this.handleElement(t)},s.prototype.writeDirective=function(t){this.handleElement(t)},s.prototype.error=function(t){this.handleCallback(t)},s.prototype._options=null,s.prototype._callback=null,s.prototype._done=!1,s.prototype._tagStack=null,s.prototype.handleCallback=function(t){if("function"==typeof this._callback)this._callback(t,this.dom);else if(t)throw t},s.prototype.isEmptyTag=function(t){var e=t.name.toLowerCase();return"/"==e.charAt(0)&&(e=e.substring(1)),this._options.enforceEmptyTags&&!!s._emptyTags[e]},s.prototype.handleElement=function(t){if(this._done&&this.handleCallback(new Error("Writing to the handler after done() called is not allowed without a reset()")),this._options.verbose||(delete t.raw,("tag"==t.type||"script"==t.type||"style"==t.type)&&delete t.data),this._tagStack.last())if(t.type!=l.Text&&t.type!=l.Comment&&t.type!=l.Directive)if("/"==t.name.charAt(0)){var e=t.name.substring(1);if(!this.isEmptyTag(t)){for(var n=this._tagStack.length-1;n>-1&&this._tagStack[n--].name!=e;);if(n>-1||this._tagStack[0].name==e)for(;n<this._tagStack.length-1;)this._tagStack.pop()}}else this._tagStack.last().children||(this._tagStack.last().children=[]),this._tagStack.last().children.push(t),this.isEmptyTag(t)||this._tagStack.push(t);else this._tagStack.last().children||(this._tagStack.last().children=[]),this._tagStack.last().children.push(t);else t.type!=l.Text&&t.type!=l.Comment&&t.type!=l.Directive?"/"!=t.name.charAt(0)&&(this.dom.push(t),this.isEmptyTag(t)||this._tagStack.push(t)):this.dom.push(t)};var h={testElement:function(t,e){if(!e)return!1;for(var n in t)if("tag_name"==n){if("tag"!=e.type&&"script"!=e.type&&"style"!=e.type)return!1;if(!t.tag_name(e.name))return!1}else if("tag_type"==n){if(!t.tag_type(e.type))return!1}else if("tag_contains"==n){if("text"!=e.type&&"comment"!=e.type&&"directive"!=e.type)return!1;if(!t.tag_contains(e.data))return!1}else if(!e.attribs||!t[n](e.attribs[n]))return!1;return!0},getElements:function(t,e,n,r){function i(t){return function(e){return e==t}}if(n=void 0===n||null===n||!!n,r=isNaN(parseInt(r))?-1:parseInt(r),!e)return[];var a,o=[];for(var s in t)"function"!=typeof t[s]&&(t[s]=i(t[s]));if(h.testElement(t,e)&&o.push(e),r>=0&&o.length>=r)return o;if(n&&e.children)a=e.children;else{if(!(e instanceof Array))return o;a=e}for(var c=0;c<a.length&&(o=o.concat(h.getElements(t,a[c],n,r)),!(r>=0&&o.length>=r));c++);return o},getElementById:function(t,e,n){var r=h.getElements({id:t},e,n,1);return r.length?r[0]:null},getElementsByTagName:function(t,e,n,r){return h.getElements({tag_name:t},e,n,r)},getElementsByTagType:function(t,e,n,r){return h.getElements({tag_type:t},e,n,r)}};e.Parser=a,e.DefaultHandler=s,e.RssHandler=o,e.ElementType=l,e.DomUtils=h}()}).call(e,"/index.js","/")},function(t,e){(function(e){t.exports={mapForLoop:function(t,e){for(var n=t.length,r=new Array(n),i=0;n>i;i++)r[i]=e(t[i],i,t);return r},eachObject:function(t,e){for(value in t)t.hasOwnProperty(value)&&(t[value]=e(t[value]));return t},inArray:function(t,e){for(var n=0;n<t.length;n++)if(t[n]===e)return!0;return!1},isNode:function(){return"[object process]"===Object.prototype.toString.call(e.process)},clone:function n(t){function e(t,e,n){var r,i,a={};for(r in e)i=e[r],r in t&&(t[r]===i||r in a&&a[r]===i)||(t[r]=n?n(i):i);return t}if(!t||"object"!=typeof t||"[object Function]"===Object.prototype.toString.call(t))return t;if(t.nodeType&&"cloneNode"in t)return t.cloneNode(!0);if(t instanceof Date)return new Date(t.getTime());if(t instanceof RegExp)return new RegExp(t);var r,i,a;if(t instanceof Array)for(r=[],i=0,a=t.length;a>i;++i)i in t&&r.push(n(t[i]));else r=t.constructor?new t.constructor:{};return e(r,t,n)}}}).call(e,function(){return this}())},function(t,e,n){var r=n(3);t.exports={checkStatementForInners:function(t,e,n){function i(t,e,n){return t?{isVar:t,name:n,value:e}:{isVar:t,value:e}}var a,o=".",s=t.split(o),c=r.inArray(n,t);if(s.length>1){for(var l=0;l<s.length;l++)e.hasOwnProperty(s[l])&&0===l?a=e[s[l]]:a&&a.hasOwnProperty(s[l])&&(a=a[s[l]]);return i(c,a,t)}return c===!0?i(c,e[t],t):i(c,t)}}},function(t,e,n){(function(e){var n=function(){"use strict";function t(t,n){t.forEach(function(t){e(t,n)})}return"function"!=typeof e&&(e=function(t,e){return setTimeout(function(){t(e)},0)}),{make:function r(){function e(t,e,n){var r="keep"===t?o:a;r[r.length]="function"!=typeof e?n[t]:function(t){try{var r=e(t);r&&r.is_promise===!0?r.when(n.keep,n["break"]):n.keep(r)}catch(i){n["break"](i)}}}function n(e,n,r){if("pending"!==s)throw"overpromise";i=n,s=e,t(r,i),o.length=0,a.length=0}var i,a=[],o=[],s="pending";return{"break":function(t){n("broken",t,a)},keep:function(t){n("kept",t,o)},promise:{is_promise:!0,when:function(n,c){var l=r();switch(s){case"pending":e("keep",n,l),e("break",c,l);break;case"kept":e("keep",n,l),t(o,i);break;case"broken":e("break",c,l),t(a,i)}return l.promise}}}},every:function(t){var e=t.length,r=[],i=n.make();return e?t.forEach(function(t,n){t.when(function(t){r[n]=t,e-=1,0===e&&i.keep(r)},function(t){e=NaN,i["break"](t)})}):i["break"](t),i.promise},first:function(t){function e(){i-=1,0!==i||r||a["break"]()}var r=!1,i=t.length,a=n.make();return 0===i?a["break"](t):t.forEach(function(t){t.when(function(t){r||(r=!0,a.keep(t)),e()},e)}),a.promise},any:function(t){function e(){r-=1,0===r&&a.keep(i)}var r=t.length,i=[],a=n.make();return r?t.forEach(function(t,n){t.when(function(t){i[n]=t,e()},e)}):a.keep(i),a.promise},kept:function(t){var e=n.make();return e.keep(t),e.promise},broken:function(t){var e=n.make();return e["break"](t),e.promise}}}();t.exports=n}).call(e,n(6).setImmediate)},function(t,e,n){(function(t,r){function i(t,e){this._id=t,this._clearFn=e}var a=n(7).nextTick,o=Function.prototype.apply,s=Array.prototype.slice,c={},l=0;e.setTimeout=function(){return new i(o.call(setTimeout,window,arguments),clearTimeout)},e.setInterval=function(){return new i(o.call(setInterval,window,arguments),clearInterval)},e.clearTimeout=e.clearInterval=function(t){t.close()},i.prototype.unref=i.prototype.ref=function(){},i.prototype.close=function(){this._clearFn.call(window,this._id)},e.enroll=function(t,e){clearTimeout(t._idleTimeoutId),t._idleTimeout=e},e.unenroll=function(t){clearTimeout(t._idleTimeoutId),t._idleTimeout=-1},e._unrefActive=e.active=function(t){clearTimeout(t._idleTimeoutId);var e=t._idleTimeout;e>=0&&(t._idleTimeoutId=setTimeout(function(){t._onTimeout&&t._onTimeout()},e))},e.setImmediate="function"==typeof t?t:function(t){var n=l++,r=arguments.length<2?!1:s.call(arguments,1);return c[n]=!0,a(function(){c[n]&&(r?t.apply(null,r):t.call(null),e.clearImmediate(n))}),n},e.clearImmediate="function"==typeof r?r:function(t){delete c[t]}}).call(e,n(6).setImmediate,n(6).clearImmediate)},function(t,e){function n(){l=!1,o.length?c=o.concat(c):h=-1,c.length&&r()}function r(){if(!l){var t=setTimeout(n);l=!0;for(var e=c.length;e;){for(o=c,c=[];++h<e;)o[h].run();h=-1,e=c.length}o=null,l=!1,clearTimeout(t)}}function i(t,e){this.fun=t,this.array=e}function a(){}var o,s=t.exports={},c=[],l=!1,h=-1;s.nextTick=function(t){var e=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)e[n-1]=arguments[n];c.push(new i(t,e)),1!==c.length||l||setTimeout(r,0)},i.prototype.run=function(){this.fun.apply(null,this.array)},s.title="browser",s.browser=!0,s.env={},s.argv=[],s.version="",s.versions={},s.on=a,s.addListener=a,s.once=a,s.off=a,s.removeListener=a,s.removeAllListeners=a,s.emit=a,s.binding=function(t){throw new Error("process.binding is not supported")},s.cwd=function(){return"/"},s.chdir=function(t){throw new Error("process.chdir is not supported")},s.umask=function(){return 0}},function(t,e,n){var r=(n(9),n(11)),i=n(5);t.exports={module:function(t,e){function n(t){for(var e=0;e<c.operators.length;e++)t=t.replace(c.operators[e].name,c.operators[e].value);return t}function a(t){for(var e=t.match(/([A-z]+)/g),n=e.length,r=[],i=0;n>i;){var a=e[i++];r.indexOf(a)<0&&r.push(a)}return r}function o(t,e){return Function.apply(null,e.concat("return "+t))}function s(n){var r=i.make();return n?void 0!==t.children&&this.traversingAST(t.children,e).when(function(t){r.keep(t)},function(t){throw new Error(t)}):r.keep(void 0),r.promise}var c={operators:[{name:" lt ",value:"<"},{name:" gt ",value:">"},{name:" le ",value:"<="},{name:" ge ",value:">="}]},l=n(t.attribs.data.trim()),h=a(l),u=o(l,h);return function(){return void 0!==t.children?s.call(this,u.apply(this,r(h,e))):void 0}}}},function(t,e,n){var r=n(10);t.exports=function(t,e){function n(t,e,n){var i=r(n);if(e.length>t+1&&"object"!==i&&"array"!==i&&"length"!==e[t+1])throw new Error("У значения "+e[t]+" нет свойства: "+e[t+1]);return i}console.log(t);for(var i,a=".",o=t.split(a),s=0;s<o.length;s++)0===s?chase=e[o[s]]:chase=chase[o[s]],i=n(s,o,chase);return i}},function(t,e){t.exports=function(t){for(var e=function(t){if(null===t)return"null";if(t&&(1===t.nodeType||9===t.nodeType))return"element";var e=Object.prototype.toString.call(t),n=e.match(/\[object (.*?)\]/)[1].toLowerCase();if("number"===n){if(isNaN(t))return"nan";if(!isFinite(t))return"infinity"}return n},n=["Null","Undefined","Object","Array","String","Number","Boolean","Function","RegExp","Element","NaN","Infinite"],r=function(t){e["is"+t]=function(n){return e(n)===t.toLowerCase()}},i=0;i<n.length;i++)r(n[i]);return e(t)}},function(t,e,n){var r=n(4);t.exports=function(t,e){for(var n,i=[],a=0;a<t.length;a++)e.hasOwnProperty(t[a])&&(n=r.checkStatementForInners(t[a],e,t),n.isVar===!0&&i.push(n.value));return i}},function(t,e,n){var r=(n(9),n(4)),i=n(10),a=n(3),o=n(5);t.exports={module:function(t,e){function n(t){var e=t.split(m.key);return e.length>1?{key:e[0],value:e[1]}:{key:void 0,value:e[0]}}function s(t,e,n,r){return e[r.value]=t[n],r.key&&(e[r.key]=n),e}function c(e,n){for(var r=[],i=0;i<e.length;i++)r.push(this.traversingAST(a.clone(t.children),s(e,n,i,u)));return o.every(r)}function l(e,n){var r=[];for(var i in e)e.hasOwnProperty(i)&&r.push(this.traversingAST(a.clone(t.children),s(e,n,i,u)));return o.every(r)}function h(t){var n,r=t.value,o=a.clone(e),s=d[i(r)];if(void 0===s)throw new Error("Wrong type in for statement arguments");return n=d[i(r)].call(this,r,o),n.when(function(t){return this.actionOnMainArray([],t)}.bind(this),function(t){throw new Error(t)}),n}var u,p,f=t.attribs.data.trim(),d={array:c,object:l},m={splittingKey:" in ",key:" as "},g=f.split(m.splittingKey);if(g.length<2)throw new Error("Wrong arguments in for statement");if(p=r.checkStatementForInners(g[1],e,[g[1]]),!p.value)throw new Error(p.name+" variable is undefined");return u=n(g[0]),function(){return void 0!==t.children?h.call(this,p):void 0}}}},function(t,e,n){var r,i=n(5),a=n(3);t.exports={module:function(o,s,c){function l(t){var e=new XMLHttpRequest;return e.open("GET",t),e.send(),e}function h(t){var e,n=i.make();try{e=requirejs("fs")}catch(r){throw new Error("There is no requirejs for node included")}return e.readFile("./"+t,function(t,e){t?n["break"](t):n.keep(this.parse(e))}.bind(this)),n.promise}function u(t){var e=i.make();return t.onreadystatechange=function(){4==t.readyState&&200==t.status&&e.keep(this.parse(t.responseText))}.bind(this),e.promise}function p(t){return s[m]=t,s}function f(){return _===!1?(d=l(y),u.call(this,d).when(p)):h.call(this,y).when(p)}var d,m=o.attribs.name.trim(),g=o.attribs.template.trim(),y=g+".tmpl",_=a.isNode();return _===!1&&(r=function(){return{}}.call(e,n,e,t),!(void 0!==r&&(t.exports=r))),function(){return f.call(this)}}}},function(t,e,n){var r=n(5),i=n(3);t.exports={module:function(t,e){function n(t){var e=r.make(),n=i.clone(t);return this._includeStack[o].when(function(t){t[o]?(c[s]=n[a],this.traversingAST(t[o],c).when(function(t){e.keep(t)},function(t){throw new Error(t)})):e["break"]('Include tag for "'+o+'" is not found!')}.bind(this),function(t){throw new Error(t)}),e.promise}var a=t.attribs.data.trim(),o=t.attribs.template.trim(),s="root",c={};return function(){return n.call(this,e)}}}},function(t,e){t.exports=function(t){function e(t){var e="";if(void 0!==t)if(void 0!==t.type)e+=t.value;else for(var n=0;n<t.length;n++)void 0!==t[n].value&&(e+=t[n].value);return e}function n(t){var n="";if(void 0!==t)for(var r in t)t.hasOwnProperty(r)&&(n=" "+r+'="'+e(t[r].data)+'"');return n}function r(t){return"text"===t.type?e(t.data):"<"+t.name+n(t.attribs)+">"+i(t.children)+"</"+t.name+">"}function i(t){var e="";if(void 0!==t)for(var n=0;n<t.length;n++)e+=r(t[n]);return e}var a=i(t);return a}}])});