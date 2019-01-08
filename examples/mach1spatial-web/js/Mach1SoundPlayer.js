var Mach1SoundPlayer=function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=1)}([function(e,t){var n;n=function(){return this}();try{n=n||Function("return this")()||(0,eval)("this")}catch(e){"object"==typeof window&&(n=window)}e.exports=n},function(e,t,n){e.exports=n(2)},function(e,t,n){"use strict";n(3);let o={};e.exports=function(e,t){const n=2*e.length,r=new AudioContext;let i=this,u=b(n),c=b(n),a=b(n),f=b(n),l=b(e.length),s=!1,d=0,p=!1,h=!1,y=0,g=0;function b(e){return Array.apply(null,Array(e)).map(Number.prototype.valueOf,0)}function v(e,t){console.time("load file"+e),fetch(e,{method:"GET",responseType:"arrayBuffer",cache:"force-cache"}).then(e=>e.arrayBuffer()).then(t=>o[e]?Promise.resolve(o[e]):r.decodeAudioData(t)).then(n=>(l[Math.floor(t/2)]=n,o[e]||(o[e]=n),t)).then(t=>{console.log("Mach1Sound {path: "+e+", i: "+t+", "+(t+1)+"} loaded"),console.timeEnd("load file"+e),s=n==(d+=2)}).catch(e=>{console.warn(e)})}function m(){if(i.isReady()&&p)for(let e=0;e<u.length;++e)c[e].gain.value=a[e]}this.isReady=function(){return s&&!h},this.isPlaying=function(){return p},this.play=function(e=!1,t=i.currentTime()){!this.isReady()||p||h||(function(e,t){if(i.isReady()&&!p){for(let e=0,t=0;t<l.length;++t,e+=2)u[e]=r.createBufferSource(),u[e].buffer=l[t],c[e]=r.createGain(),c[e].gain.value=0,f[e]=r.createPanner(),f[e].setPosition(-1,0,0),f[e].panningModel="equalpower",u[e].connect(f[e]),f[e].connect(c[e]),c[e].connect(r.destination),u[e+1]=r.createBufferSource(),u[e+1].buffer=l[t],c[e+1]=r.createGain(),c[e+1].gain.value=0,f[e+1]=r.createPanner(),f[e+1].setPosition(1,0,0),f[e+1].panningModel="equalpower",u[e+1].connect(f[e+1]),f[e+1].connect(c[e+1]),c[e+1].connect(r.destination);for(let o=0;o<n;++o)u[o].loop=e,u[o].start(0,t);y=r.currentTime-t,p=!0}}(e,t),m())},this.pause=function(){this.stop()},this.stop=function(){if(this.isReady()&&p&&!h){p=!1,g=r.currentTime;for(let e=0;e<u.length;++e)u[e].stop(),"function"==typeof u[e].disconnect&&u[e].disconnect()}},this.remove=function(){if(this.isReady())for(let e=0;e<u.length;++e)u[e].stop();h=!0},this.currentTime=function(){return this.isReady()&&p?r.currentTime-y:g-y>0?g-y:0},this.rewind=function(e){e<0&&(e=0),this.stop(),this.play(e),console.log("rewind")},this.getVolumes=function(){return a},this.updateVolumes=function(e){if(Array.isArray(e))for(let t=0;t<n;++t)a[t]=e[t];p&&m()};for(let t=0;t<e.length;++t)v(e[t],2*t);return this}},function(e,t,n){"use strict";(function(e){var t=n(4),o=e.OfflineAudioContext||e.webkitOfflineAudioContext;if(o){var r=new Uint32Array([1179011410,56,1163280727,544501094,16,65537,44100,88200,1048578,1635017060,20,0,0,0,0,0]).buffer;if(!new o(1,128,44100).decodeAudioData(r,function(){},function(){})){var i=t.prototype.decodeAudioData;t.prototype.decodeAudioData=function(e,t,n){var o=this,r=new Promise(function(t,n){return i.call(o,e,t,n)});return r.then(t,n),r},t.prototype.decodeAudioData.original=i}}}).call(this,n(0))},function(e,t,n){(function(t){var n=t.AudioContext||t.webkitAudioContext,o=t.OfflineAudioContext||t.webkitOfflineAudioContext,r=t.BaseAudioContext||o&&Object.getPrototypeOf(o);e.exports="function"==typeof r&&r.prototype?r:n}).call(this,n(0))}]);