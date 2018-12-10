var Mach1SoundPlayer=function(e){var t={};function n(o){if(t[o])return t[o].exports;var i=t[o]={i:o,l:!1,exports:{}};return e[o].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(o,i,function(t){return e[t]}.bind(null,i));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=1)}([function(e,t){var n;n=function(){return this}();try{n=n||Function("return this")()||(0,eval)("this")}catch(e){"object"==typeof window&&(n=window)}e.exports=n},function(e,t,n){e.exports=n(2)},function(e,t,n){"use strict";n(3);const o=16;let i={};e.exports=function(e){const t=new AudioContext;let n=this,r=b(o),u=b(o),c=b(o),a=b(o),f=b(e.length),l=!1,s=0,d=!1,p=!1,h=0,y=0;function b(e){return Array.apply(null,Array(e)).map(Number.prototype.valueOf,0)}function g(e,n){console.time("load file"+e),fetch(e,{method:"GET",responseType:"arrayBuffer",cache:"force-cache"}).then(e=>e.arrayBuffer()).then(n=>i[e]?Promise.resolve(i[e]):t.decodeAudioData(n)).then(t=>(f[Math.floor(n/2)]=t,i[e]||(i[e]=t),n)).then(t=>{console.log("Mach1Sound {path: "+e+", i: "+t+", "+(t+1)+"} loaded"),console.timeEnd("load file"+e),l=o==(s+=2)}).catch(e=>{console.warn(e)})}function v(){if(n.isReady()&&d)for(let e=0;e<r.length;++e)u[e].gain.value=c[e]}this.isReady=function(){return l&&!p},this.play=function(e=n.currentTime()){!this.isReady()||d||p||(function(e){if(n.isReady()&&!d){for(let e=0,n=0;n<f.length;++n,e+=2)r[e]=t.createBufferSource(),r[e].buffer=f[n],u[e]=t.createGain(),u[e].gain.value=0,a[e]=t.createPanner(),a[e].setPosition(-1,0,0),a[e].panningModel="equalpower",r[e].connect(a[e]),a[e].connect(u[e]),u[e].connect(t.destination),r[e+1]=t.createBufferSource(),r[e+1].buffer=f[n],u[e+1]=t.createGain(),u[e+1].gain.value=0,a[e+1]=t.createPanner(),a[e+1].setPosition(1,0,0),a[e+1].panningModel="equalpower",r[e+1].connect(a[e+1]),a[e+1].connect(u[e+1]),u[e+1].connect(t.destination);for(let t=0;t<o;++t)r[t].start(0,e);h=t.currentTime-e,d=!0}}(e),v())},this.pause=function(){this.stop()},this.stop=function(){if(this.isReady()&&d&&!p){d=!1,y=t.currentTime;for(let e=0;e<r.length;++e)r[e].stop(),"function"==typeof r[e].disconnect&&r[e].disconnect()}},this.remove=function(){if(this.isReady())for(let e=0;e<r.length;++e)r[e].stop();p=!0},this.currentTime=function(){return this.isReady()&&d?t.currentTime-h:y-h>0?y-h:0},this.rewind=function(e){e<0&&(e=0),this.stop(),this.play(e),console.log("rewind")},this.getVolumes=function(){return c},this.updateVolumes=function(e,t,n=0){let i=Mach1Decode.decode(e,t,n);if(i)for(let e=0;e<o;++e)c[e]=i[e];d&&v()};for(let t=0;t<e.length;++t)g(e[t],2*t);return this}},function(e,t,n){"use strict";(function(e){var t=n(4),o=e.OfflineAudioContext||e.webkitOfflineAudioContext;if(o){var i=new Uint32Array([1179011410,56,1163280727,544501094,16,65537,44100,88200,1048578,1635017060,20,0,0,0,0,0]).buffer;if(!new o(1,128,44100).decodeAudioData(i,function(){},function(){})){var r=t.prototype.decodeAudioData;t.prototype.decodeAudioData=function(e,t,n){var o=this,i=new Promise(function(t,n){return r.call(o,e,t,n)});return i.then(t,n),i},t.prototype.decodeAudioData.original=r}}}).call(this,n(0))},function(e,t,n){(function(t){var n=t.AudioContext||t.webkitAudioContext,o=t.OfflineAudioContext||t.webkitOfflineAudioContext,i=t.BaseAudioContext||o&&Object.getPrototypeOf(o);e.exports="function"==typeof i&&i.prototype?i:n}).call(this,n(0))}]);