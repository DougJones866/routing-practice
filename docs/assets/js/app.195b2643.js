(function(e){function t(t){for(var r,o,a=t[0],i=t[1],l=t[2],b=0,f=[];b<a.length;b++)o=a[b],Object.prototype.hasOwnProperty.call(c,o)&&c[o]&&f.push(c[o][0]),c[o]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);s&&s(t);while(f.length)f.shift()();return u.push.apply(u,l||[]),n()}function n(){for(var e,t=0;t<u.length;t++){for(var n=u[t],r=!0,a=1;a<n.length;a++){var i=n[a];0!==c[i]&&(r=!1)}r&&(u.splice(t--,1),e=o(o.s=n[0]))}return e}var r={},c={app:0},u=[];function o(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=r,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)o.d(n,r,function(t){return e[t]}.bind(null,r));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],i=a.push.bind(a);a.push=t,a=a.slice();for(var l=0;l<a.length;l++)t(a[l]);var s=i;u.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"032c":function(e,t,n){"use strict";n("e693")},"08de":function(e,t,n){},3519:function(e,t,n){"use strict";n("900e")},4502:function(e,t,n){},"4e69":function(e,t,n){"use strict";n("08de")},"4f55":function(e,t,n){"use strict";n("763c")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("f2bf"),c=n("6c02");function u(e,t,n,c,u,o){var a=Object(r["y"])("the-navigation"),i=Object(r["y"])("router-view");return Object(r["r"])(),Object(r["e"])(r["a"],null,[Object(r["h"])(a),Object(r["f"])("main",null,[Object(r["h"])(i)]),Object(r["f"])("footer",null,[Object(r["h"])(i,{name:"footer"})])],64)}Object(r["u"])("data-v-9f2c711e");var o=Object(r["g"])("Teams"),a=Object(r["g"])("Users");function i(e,t){var n=Object(r["y"])("router-link");return Object(r["r"])(),Object(r["e"])("header",null,[Object(r["f"])("nav",null,[Object(r["f"])("ul",null,[Object(r["f"])("li",null,[Object(r["h"])(n,{to:"/teams"},{default:Object(r["D"])((function(){return[o]})),_:1})]),Object(r["f"])("li",null,[Object(r["h"])(n,{to:"/users"},{default:Object(r["D"])((function(){return[a]})),_:1})])])])])}Object(r["s"])();n("86bd");const l={};l.render=i,l.__scopeId="data-v-9f2c711e";var s=l,b={components:{TheNavigation:s},data:function(){return{teams:[{id:"t1",name:"Frontend Engineers",members:["u1","u2"]},{id:"t2",name:"Backend Engineers",members:["u1","u2","u3"]},{id:"t3",name:"Client Consulting",members:["u4","u5"]}],users:[{id:"u1",fullName:"Max Schwarz",role:"Engineer"},{id:"u2",fullName:"Praveen Kumar",role:"Engineer"},{id:"u3",fullName:"Julie Jones",role:"Engineer"},{id:"u4",fullName:"Alex Blackfield",role:"Consultant"},{id:"u5",fullName:"Marie Smith",role:"Consultant"}]}},provide:function(){return{teams:this.teams,users:this.users}}};n("032c");b.render=u;var f=b;n("b0c0");function m(e,t,n,c,u,o){var a=Object(r["y"])("router-view"),i=Object(r["y"])("teams-item");return Object(r["r"])(),Object(r["e"])(r["a"],null,[Object(r["h"])(a),Object(r["f"])("ul",null,[(Object(r["r"])(!0),Object(r["e"])(r["a"],null,Object(r["x"])(o.teams,(function(e){return Object(r["r"])(),Object(r["d"])(i,{key:e.id,id:e.id,name:e.name,"member-count":e.members.length},null,8,["id","name","member-count"])})),128))])],64)}Object(r["u"])("data-v-addcb83e");var d={class:"team-members"},j=Object(r["g"])("View Members");function O(e,t,n,c,u,o){var a=Object(r["y"])("router-link");return Object(r["r"])(),Object(r["e"])("li",null,[Object(r["f"])("h3",null,Object(r["A"])(n.name),1),Object(r["f"])("div",d,Object(r["A"])(n.memberCount)+" Members",1),Object(r["h"])(a,{to:o.teamMembersLink},{default:Object(r["D"])((function(){return[j]})),_:1},8,["to"])])}Object(r["s"])();var p={props:["id","name","memberCount"],computed:{teamMembersLink:function(){return{name:"team-members",params:{teamId:this.id},query:{sort:"asc"}}}}};n("93ed");p.render=O,p.__scopeId="data-v-addcb83e";var v=p,h={components:{TeamsItem:v},inject:["teams"]};n("b175");h.render=m,h.__scopeId="data-v-7ab39ff8";var y=h;function g(e,t,n,c,u,o){var a=Object(r["y"])("user-item");return Object(r["r"])(),Object(r["e"])(r["a"],null,[Object(r["f"])("button",{onClick:t[0]||(t[0]=function(){return o.confirmInput&&o.confirmInput.apply(o,arguments)})},"Confirm"),Object(r["f"])("ul",null,[(Object(r["r"])(!0),Object(r["e"])(r["a"],null,Object(r["x"])(o.users,(function(e){return Object(r["r"])(),Object(r["d"])(a,{key:e.id,name:e.fullName,role:e.role},null,8,["name","role"])})),128))])],64)}function _(e,t,n,c,u,o){return Object(r["r"])(),Object(r["e"])("li",null,[Object(r["f"])("h3",null,Object(r["A"])(n.name),1),Object(r["f"])("div",{class:Object(r["n"])(["role",o.roleClass])},Object(r["A"])(n.role),3)])}var I={props:["name","role"],computed:{roleClass:function(){return"Engineer"===this.role?"role--engineer":"Consultant"===this.role?"role--consultant":null}}};n("6407");I.render=_,I.__scopeId="data-v-8f671500";var k=I,w={components:{UserItem:k},inject:["users"],methods:{confirmInput:function(){this.$router.push("/teams")}}};n("3519");w.render=g,w.__scopeId="data-v-30f0f6c8";var M=w;Object(r["u"])("data-v-2aa4c252");var C=Object(r["g"])("Go to Team 2");function N(e,t,n,c,u,o){var a=Object(r["y"])("user-item"),i=Object(r["y"])("router-link");return Object(r["r"])(),Object(r["e"])("section",null,[Object(r["f"])("h2",null,Object(r["A"])(u.teamName),1),Object(r["f"])("ul",null,[(Object(r["r"])(!0),Object(r["e"])(r["a"],null,Object(r["x"])(u.members,(function(e){return Object(r["r"])(),Object(r["d"])(a,{key:e.id,name:e.fullName,role:e.role},null,8,["name","role"])})),128))]),Object(r["h"])(i,{to:"/teams/t2"},{default:Object(r["D"])((function(){return[C]})),_:1})])}Object(r["s"])();var T=n("b85c"),x=(n("7db0"),{inject:["users","teams"],props:["teamId"],components:{UserItem:k},data:function(){return{teamName:"",members:[]}},methods:{loadTeamMembers:function(e){var t,n=this,r=this.teams.find((function(t){return t.id===e})),c=r.members,u=[],o=Object(T["a"])(c);try{var a=function(){var e=t.value,r=n.users.find((function(t){return t.id===e}));u.push(r)};for(o.s();!(t=o.n()).done;)a()}catch(i){o.e(i)}finally{o.f()}this.members=u,this.teamName=r.name}},created:function(){this.loadTeamMembers(this.teamId),console.log(this.$route.query)},watch:{teamId:function(e){this.loadTeamMembers(e)}}});n("e845");x.render=N,x.__scopeId="data-v-2aa4c252";var P=x,A=Object(r["g"])("Page Not Found. Maybe Try "),S=Object(r["g"])("Teams");function E(e,t){var n=Object(r["y"])("router-link");return Object(r["r"])(),Object(r["e"])("h2",null,[A,Object(r["h"])(n,{to:"/teams"},{default:Object(r["D"])((function(){return[S]})),_:1})])}const D={};D.render=E;var F=D;Object(r["u"])("data-v-6a308e1d");var J=Object(r["f"])("h2",null,"Teams Footer",-1),U=[J];function B(e,t){return Object(r["r"])(),Object(r["e"])("footer",null,U)}Object(r["s"])();n("4f55");const q={};q.render=B,q.__scopeId="data-v-6a308e1d";var L=q;Object(r["u"])("data-v-2936e126");var $=Object(r["f"])("h2",null,"Users Footer",-1),z=[$];function G(e,t){return Object(r["r"])(),Object(r["e"])("footer",null,z)}Object(r["s"])();n("4e69");const K={};K.render=G,K.__scopeId="data-v-2936e126";var V=K,H=Object(c["a"])({history:Object(c["b"])(),routes:[{path:"/",redirect:"/teams"},{name:"teams",path:"/teams",components:{default:y,footer:L},children:[{name:"team-members",path:":teamId",component:P,props:!0}]},{path:"/users",components:{default:M,footer:V}},{path:"/:notFound(.*)",component:F}],linkActiveClass:"active",scrollBehavior:function(e,t,n){return n||{left:0,top:0}}}),Q=Object(r["c"])(f);Q.use(H),Q.mount("#app")},"60dd":function(e,t,n){},6407:function(e,t,n){"use strict";n("722d")},"722d":function(e,t,n){},"763c":function(e,t,n){},"86bd":function(e,t,n){"use strict";n("60dd")},"8f43":function(e,t,n){},"900e":function(e,t,n){},"93ed":function(e,t,n){"use strict";n("8f43")},b175:function(e,t,n){"use strict";n("4502")},d2f4:function(e,t,n){},e693:function(e,t,n){},e845:function(e,t,n){"use strict";n("d2f4")}});
//# sourceMappingURL=app.195b2643.js.map