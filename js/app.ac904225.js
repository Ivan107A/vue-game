(function(e){function t(t){for(var i,l,r=t[0],c=t[1],a=t[2],d=0,p=[];d<r.length;d++)l=r[d],Object.prototype.hasOwnProperty.call(o,l)&&o[l]&&p.push(o[l][0]),o[l]=0;for(i in c)Object.prototype.hasOwnProperty.call(c,i)&&(e[i]=c[i]);u&&u(t);while(p.length)p.shift()();return s.push.apply(s,a||[]),n()}function n(){for(var e,t=0;t<s.length;t++){for(var n=s[t],i=!0,r=1;r<n.length;r++){var c=n[r];0!==o[c]&&(i=!1)}i&&(s.splice(t--,1),e=l(l.s=n[0]))}return e}var i={},o={app:0},s=[];function l(t){if(i[t])return i[t].exports;var n=i[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,l),n.l=!0,n.exports}l.m=e,l.c=i,l.d=function(e,t,n){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(l.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)l.d(n,i,function(t){return e[t]}.bind(null,i));return n},l.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="/vue-game/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],c=r.push.bind(r);r.push=t,r=r.slice();for(var a=0;a<r.length;a++)t(r[a]);var u=c;s.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},3135:function(e,t,n){e.exports=n.p+"media/3.7d29331d.ogg"},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var i=n("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"app row justify-content-center align-items-center"},[n("div",{staticClass:"col-sm-3 roundBlock"},[n("ul",[n("li",{staticClass:"red",class:{"red-click":!0===e.redBlock},attrs:{"data-tile":"1"},on:{click:function(){return e.click(0)}}}),n("li",{staticClass:"blue",class:{"blue-click":e.blueBlock},attrs:{"data-tile":"2"},on:{click:function(){return e.click(1)}}}),n("li",{staticClass:"yellow",class:{"yellow-click":e.yellowBlock},attrs:{"data-tile":"3"},on:{click:function(){return e.click(2)}}}),n("li",{staticClass:"green",class:{"green-click":e.greenBlock},attrs:{"data-tile":"4"},on:{click:function(){return e.click(3)}}})])]),n("div",{staticClass:"col-sm-4"},[n("h1",{staticClass:"text-info"},[e._v("Round: "+e._s(e.round))]),n("button",{staticClass:"btn btn-primary",on:{click:e.startGame}},[e._v("Старт")]),e.lose?n("div",{staticClass:"alert alert-danger mt-3"},[e._v(" Вы проиграли. ")]):e._e(),n("hr"),n("div",[n("h3",[e._v("Уровень сложности:")]),n("div",{staticClass:"form-check"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.level,expression:"level"}],staticClass:"form-check-input",attrs:{type:"radio",id:"radio1",value:"simple",checked:""},domProps:{checked:e._q(e.level,"simple")},on:{change:function(t){e.level="simple"}}}),n("label",{staticClass:"form-check-label",attrs:{for:"radio1"}},[e._v(" Легкий ")])]),n("div",{staticClass:"form-check"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.level,expression:"level"}],staticClass:"form-check-input",attrs:{type:"radio",id:"radio2",value:"middle"},domProps:{checked:e._q(e.level,"middle")},on:{change:function(t){e.level="middle"}}}),n("label",{staticClass:"form-check-label",attrs:{for:"radio2"}},[e._v(" Средний ")])]),n("div",{staticClass:"form-check"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.level,expression:"level"}],staticClass:"form-check-input",attrs:{type:"radio",id:"radio3",value:"hard"},domProps:{checked:e._q(e.level,"hard")},on:{change:function(t){e.level="hard"}}}),n("label",{staticClass:"form-check-label",attrs:{for:"radio3"}},[e._v(" Сложный ")])])])])])},s=[],l=(n("4160"),n("159b"),n("e985")),r=n.n(l),c=n("c5e7"),a=n.n(c),u=n("3135"),d=n.n(u),p=n("edf5"),f=n.n(p),h={name:"App",components:{},data:function(){return{round:0,level:"simple",steps:[],userSteps:[],redBlock:!1,blueBlock:!1,yellowBlock:!1,greenBlock:!1,lose:!1}},methods:{addStep:function(){this.steps.push(Math.floor(Math.random()*Math.floor(4))),this.round++},drawStep:function(e){var t=this,n="simple"===this.level?1500:"middle"===this.level?1e3:"hard"===this.level&&400;0===e&&(this.redBlock=!0,new Audio(r.a).play(),setTimeout((function(){return t.redBlock=!1}),n-300)),1===e&&(this.blueBlock=!0,new Audio(a.a).play(),setTimeout((function(){return t.blueBlock=!1}),n-300)),2===e&&(this.yellowBlock=!0,new Audio(d.a).play(),setTimeout((function(){return t.yellowBlock=!1}),n-300)),3===e&&(this.greenBlock=!0,new Audio(f.a).play(),setTimeout((function(){return t.greenBlock=!1}),n-300))},drawSteps:function(e){var t=this,n="simple"===this.level?1500:"middle"===this.level?1e3:"hard"===this.level&&400,i=0;this.steps.forEach((function(e){setTimeout((function(){0===e&&(setTimeout((function(){t.redBlock=!0,new Audio(r.a).play()}),i),setTimeout((function(){return t.redBlock=!1}),n+i-300)),1===e&&(setTimeout((function(){t.blueBlock=!0,new Audio(a.a).play()}),i),setTimeout((function(){return t.blueBlock=!1}),n+i-300)),2===e&&(setTimeout((function(){t.yellowBlock=!0,new Audio(d.a).play()}),i),setTimeout((function(){return t.yellowBlock=!1}),n+i-300)),3===e&&(setTimeout((function(){t.greenBlock=!0,new Audio(f.a).play()}),i),setTimeout((function(){return t.greenBlock=!1}),n+i-300)),i+=n}),300)}))},startGame:function(){this.steps=[],this.round=0,this.lose=!1,this.addStep(),this.drawSteps(this.steps)},click:function(e){var t=this;if(0===this.round)return!1;this.userSteps.push(e),this.drawStep(e),!1===this.check()?this.exit():!0===this.check()&&setTimeout((function(){return t.nextRound()}),1e3)},check:function(){for(var e=0;e<this.userSteps.length;e++)if(this.userSteps[e]!==this.steps[e])return!1;return this.userSteps.length===this.steps.length||(this.userSteps.length<this.steps.length?"continue":void 0)},exit:function(){this.round=0,this.steps=[],this.userSteps=[],this.lose=!0},nextRound:function(){this.userSteps=[],this.addStep(),this.drawSteps(this.steps)}}},m=h,v=(n("5c0b"),n("2877")),k=Object(v["a"])(m,o,s,!1,null,null,null),b=k.exports;i["a"].config.productionTip=!1,i["a"].config.devtools=!0,new i["a"]({render:function(e){return e(b)}}).$mount("#app")},"5c0b":function(e,t,n){"use strict";var i=n("9c0c"),o=n.n(i);o.a},"9c0c":function(e,t,n){},c5e7:function(e,t,n){e.exports=n.p+"media/2.63d780a9.ogg"},e985:function(e,t,n){e.exports=n.p+"media/1.76fd3fb8.ogg"},edf5:function(e,t,n){e.exports=n.p+"media/4.ab928396.ogg"}});
//# sourceMappingURL=app.ac904225.js.map