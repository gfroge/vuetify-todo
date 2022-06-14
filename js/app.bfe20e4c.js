(function(){"use strict";var t={3410:function(t,e,o){var n=o(9242),r=o(3396),i=o(7139),a=o(588),l=o(9156),u=o(848),s=o(3289),c=o(8694),d=o(4454),f=o(4647),m=o(1358),p=o(7288),h=o(2127),v=o(9271),b=o(7033),w=o(5030);const g=(0,r.Uk)("Vuetify todo");function k(t,e,o,k,y,_){const C=(0,r.up)("router-view");return(0,r.wg)(),(0,r.j4)(u._,null,{default:(0,r.w5)((()=>[(0,r.Wm)(d.s,null,{default:(0,r.w5)((()=>[(0,r.Wm)(a.L,{image:"https://i.redd.it/fsipwrv7fgkz.jpg",color:"#406daa",density:"prominent",class:"header"},{image:(0,r.w5)((()=>[(0,r.Wm)(c.f,{gradient:"to top right, rgba(19,84,122,.2), rgba(128,208,199,.2)"})])),default:(0,r.w5)((()=>[(0,r.Wm)(l.g,{variant:"text",onClick:e[0]||(e[0]=(0,n.iM)((e=>t.drawer=!t.drawer),["stop"]))}),(0,r.Wm)(w.q,null,{default:(0,r.w5)((()=>[g])),_:1})])),_:1}),(0,r.Wm)(b.V,{modelValue:t.drawer,"onUpdate:modelValue":e[1]||(e[1]=e=>t.drawer=e),bottom:"",temporary:""},{default:(0,r.w5)((()=>[(0,r.Wm)(f.i,{density:"compact"},{default:(0,r.w5)((()=>[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(t.items,((t,e)=>((0,r.wg)(),(0,r.j4)(m.l,{key:e,value:t,to:t.to,"active-color":"primary"},{default:(0,r.w5)((()=>[(0,r.Wm)(p.U,{start:""},{default:(0,r.w5)((()=>[(0,r.Wm)(s.t,{icon:t.icon},null,8,["icon"])])),_:2},1024),(0,r.Wm)(h.V,{textContent:(0,i.zw)(t.title)},null,8,["textContent"])])),_:2},1032,["value","to"])))),128))])),_:1})])),_:1},8,["modelValue"]),(0,r.Wm)(v.O,null,{default:(0,r.w5)((()=>[(0,r.Wm)(C)])),_:1})])),_:1})])),_:1})}var y={data:()=>({drawer:!1,group:null,items:[{title:"Todo List",icon:"mdi-format-list-checks",to:"/"},{title:"About",icon:"mdi-information",to:"/about"}]}),watch:{group(){this.drawer=!1}}},_=o(89);const C=(0,_.Z)(y,[["render",k],["__scopeId","data-v-1bdc8e98"]]);var T=C,W=o(678),O=o(3435),x=o(6317),E=o(4075),j=o(1392),V=o(7769),U=o(9706),F=o(6975);const S={start:""},A=(0,r.Uk)(" Undo "),z=(0,r.Uk)(" x ");function P(t,e,o,n,a,l){return(0,r.wg)(),(0,r.iD)("div",{style:{"min-height":"100vh"},class:(0,i.C_)(n.width<600?"pa-0":"pa-6 pt-0")},[(0,r._)("div",{class:(0,i.C_)(n.width<600?"container form d-block":"container form ")},[(0,r._)("div",S,[(0,r.Wm)(F.z,{modelValue:a.newTask.title,"onUpdate:modelValue":e[0]||(e[0]=t=>a.newTask.title=t),label:"todo title:",rows:"1",class:(0,i.C_)(n.width<600?"pa-0":"pa-6 pb-0 pr-0"),"no-resize":"","auto-grow":"",density:"compact","hide-details":"",clearable:"",color:"#FF3B3B","bg-color":"#FFEBEE"},null,8,["modelValue","class"]),(0,r.Wm)(F.z,{modelValue:a.newTask.subtitle,"onUpdate:modelValue":e[1]||(e[1]=t=>a.newTask.subtitle=t),label:"todo descripion:",rows:"2",class:(0,i.C_)(n.width<600?"pa-0":"pl-6"),"no-resize":"","auto-grow":"",density:"compact","hide-details":"",clearable:"",color:"#FF3B3B","bg-color":"#FFEBEE"},null,8,["modelValue","class"])]),(0,r._)("div",{class:(0,i.C_)(n.width<600?"pa-0 remove":"remove pr-6 pl-2"),end:""},[(0,r.Wm)(O.T,{variant:"text",color:"primary",icon:"mdi-plus",size:"x-large",onClick:l.createTask},null,8,["onClick"])],2)],2),(0,r.Wm)(f.i,{"select-strategy":"multiple"},{default:(0,r.w5)((()=>[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(a.tasks,(t=>((0,r.wg)(),(0,r.iD)("div",{class:"container",key:t.id},[(0,r.Wm)(m.l,{class:(0,i.C_)({"bg-red-lighten-5":t.done})},{default:(0,r.w5)((()=>[(0,r.Wm)(p.U,{start:""},{default:(0,r.w5)((()=>[(0,r.Wm)(x.x,{color:"primary","model-value":t.done,"hide-details":"",onClick:e=>l.completeTask(t.id)},null,8,["model-value","onClick"])])),_:2},1024),(0,r.Wm)(j.R,{class:(0,i.C_)({"text-disabled":t.done,"text-disabled text-decoration-line-through":t.removed})},{default:(0,r.w5)((()=>[(0,r.Wm)(h.V,null,{default:(0,r.w5)((()=>[(0,r.Uk)((0,i.zw)(l.makeShorter(t.title)),1)])),_:2},1024),(0,r.Wm)(V.o,null,{default:(0,r.w5)((()=>[(0,r.Uk)((0,i.zw)(l.makeShorter(t.subtitle)),1)])),_:2},1024)])),_:2},1032,["class"]),(0,r.Wm)(p.U,{end:""},{default:(0,r.w5)((()=>[(0,r.Wm)(O.T,{variant:"text",color:"grey lighten-1",icon:"mdi-delete-outline",onClick:e=>l.removeTask(t)},null,8,["onClick"])])),_:2},1024)])),_:2},1032,["class"]),(0,r.Wm)(E.J)])))),128))])),_:1}),(0,r.Wm)(U.v,{location:"center",timeout:"3000",color:"primary",modelValue:a.snackbar,"onUpdate:modelValue":e[3]||(e[3]=t=>a.snackbar=t)},{actions:(0,r.w5)((()=>[(0,r.Wm)(O.T,{color:"#fff",variant:"text",onClick:l.undoRemove},{default:(0,r.w5)((()=>[A])),_:1},8,["onClick"]),(0,r.Wm)(O.T,{color:"bg-red-lighten-5",variant:"text",onClick:e[2]||(e[2]=t=>a.snackbar=!1)},{default:(0,r.w5)((()=>[z])),_:1})])),default:(0,r.w5)((()=>[(0,r.Uk)((0,i.zw)(a.text)+" ",1)])),_:1},8,["modelValue"])],2)}var B=o(8157),N={setup(){const{width:t}=(0,B.AW)();return{width:t}},data(){return{snackbar:!1,text:"Task removed",newTask:{title:"",subtitle:""},tasks:[{id:1,title:"Write my first todo",subtitle:"Just fill the form!",done:!1,removed:!1},{id:2,title:"Complete sample todos",subtitle:"Click on a checkbox to the left",done:!1,removed:!1},{id:3,title:"Try removing a todo",subtitle:"Click on a bin icon to the right",done:!1,removed:!1}]}},methods:{makeShorter(t){if(t.length>100){let e=t.slice(0,t.length);return e=e.slice(0,100)+"...",e}return t},completeTask(t){this.tasks.forEach((e=>{e.id===t&&(e.done=!e.done)}))},removeTask(t){this.snackbar=!0,this.tasks.forEach((e=>{e.id===t.id&&(e.removed=!0)})),setTimeout((()=>{this.tasks.forEach((e=>{1==e.removed&&(this.tasks=this.tasks.filter((e=>e.id!==t.id)))}))}),3e3)},undoRemove(){this.snackbar=!1,this.tasks.forEach((t=>{t.removed=!1}))},createTask(){""==this.newTask.title.trim()&&""==this.newTask.subtitle.trim()||this.tasks.push({id:Date.now(),title:this.newTask.title,subtitle:this.newTask.subtitle}),this.newTask.title=this.newTask.subtitle=""}}};const D=(0,_.Z)(N,[["render",P],["__scopeId","data-v-3ca573e5"]]);var L=D;const M=[{path:"/",name:"todo",component:L},{path:"/about",name:"about",component:()=>o.e(443).then(o.bind(o,6460))}],R=(0,W.p7)({history:(0,W.r5)(),routes:M});var q=R,H=o(65),I=(0,H.MT)({state:{},getters:{},mutations:{},actions:{},modules:{}}),K=(o(9773),o(3669)),J=(0,K.Rd)({theme:{themes:{light:{dark:!1,colors:{primary:"ea3e27",secondary:"383838"}}}}});async function Y(){const t=await o.e(461).then(o.t.bind(o,3657,23));t.load({google:{families:["Roboto:100,300,400,500,700,900&display=swap"]}})}Y(),(0,n.ri)(T).use(q).use(I).use(J).mount("#app")}},e={};function o(n){var r=e[n];if(void 0!==r)return r.exports;var i=e[n]={exports:{}};return t[n](i,i.exports,o),i.exports}o.m=t,function(){var t=[];o.O=function(e,n,r,i){if(!n){var a=1/0;for(c=0;c<t.length;c++){n=t[c][0],r=t[c][1],i=t[c][2];for(var l=!0,u=0;u<n.length;u++)(!1&i||a>=i)&&Object.keys(o.O).every((function(t){return o.O[t](n[u])}))?n.splice(u--,1):(l=!1,i<a&&(a=i));if(l){t.splice(c--,1);var s=r();void 0!==s&&(e=s)}}return e}i=i||0;for(var c=t.length;c>0&&t[c-1][2]>i;c--)t[c]=t[c-1];t[c]=[n,r,i]}}(),function(){o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,{a:e}),e}}(),function(){var t,e=Object.getPrototypeOf?function(t){return Object.getPrototypeOf(t)}:function(t){return t.__proto__};o.t=function(n,r){if(1&r&&(n=this(n)),8&r)return n;if("object"===typeof n&&n){if(4&r&&n.__esModule)return n;if(16&r&&"function"===typeof n.then)return n}var i=Object.create(null);o.r(i);var a={};t=t||[null,e({}),e([]),e(e)];for(var l=2&r&&n;"object"==typeof l&&!~t.indexOf(l);l=e(l))Object.getOwnPropertyNames(l).forEach((function(t){a[t]=function(){return n[t]}}));return a["default"]=function(){return n},o.d(i,a),i}}(),function(){o.d=function(t,e){for(var n in e)o.o(e,n)&&!o.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})}}(),function(){o.f={},o.e=function(t){return Promise.all(Object.keys(o.f).reduce((function(e,n){return o.f[n](t,e),e}),[]))}}(),function(){o.u=function(t){return"js/"+{443:"about",461:"webfontloader"}[t]+"."+{443:"3c627a61",461:"813042ab"}[t]+".js"}}(),function(){o.miniCssF=function(t){return"css/about.04b999b5.css"}}(),function(){o.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={},e="pet-todo:";o.l=function(n,r,i,a){if(t[n])t[n].push(r);else{var l,u;if(void 0!==i)for(var s=document.getElementsByTagName("script"),c=0;c<s.length;c++){var d=s[c];if(d.getAttribute("src")==n||d.getAttribute("data-webpack")==e+i){l=d;break}}l||(u=!0,l=document.createElement("script"),l.charset="utf-8",l.timeout=120,o.nc&&l.setAttribute("nonce",o.nc),l.setAttribute("data-webpack",e+i),l.src=n),t[n]=[r];var f=function(e,o){l.onerror=l.onload=null,clearTimeout(m);var r=t[n];if(delete t[n],l.parentNode&&l.parentNode.removeChild(l),r&&r.forEach((function(t){return t(o)})),e)return e(o)},m=setTimeout(f.bind(null,void 0,{type:"timeout",target:l}),12e4);l.onerror=f.bind(null,l.onerror),l.onload=f.bind(null,l.onload),u&&document.head.appendChild(l)}}}(),function(){o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){o.p="/vuetify-todo/"}(),function(){var t=function(t,e,o,n){var r=document.createElement("link");r.rel="stylesheet",r.type="text/css";var i=function(i){if(r.onerror=r.onload=null,"load"===i.type)o();else{var a=i&&("load"===i.type?"missing":i.type),l=i&&i.target&&i.target.href||e,u=new Error("Loading CSS chunk "+t+" failed.\n("+l+")");u.code="CSS_CHUNK_LOAD_FAILED",u.type=a,u.request=l,r.parentNode.removeChild(r),n(u)}};return r.onerror=r.onload=i,r.href=e,document.head.appendChild(r),r},e=function(t,e){for(var o=document.getElementsByTagName("link"),n=0;n<o.length;n++){var r=o[n],i=r.getAttribute("data-href")||r.getAttribute("href");if("stylesheet"===r.rel&&(i===t||i===e))return r}var a=document.getElementsByTagName("style");for(n=0;n<a.length;n++){r=a[n],i=r.getAttribute("data-href");if(i===t||i===e)return r}},n=function(n){return new Promise((function(r,i){var a=o.miniCssF(n),l=o.p+a;if(e(a,l))return r();t(n,l,r,i)}))},r={143:0};o.f.miniCss=function(t,e){var o={443:1};r[t]?e.push(r[t]):0!==r[t]&&o[t]&&e.push(r[t]=n(t).then((function(){r[t]=0}),(function(e){throw delete r[t],e})))}}(),function(){var t={143:0};o.f.j=function(e,n){var r=o.o(t,e)?t[e]:void 0;if(0!==r)if(r)n.push(r[2]);else{var i=new Promise((function(o,n){r=t[e]=[o,n]}));n.push(r[2]=i);var a=o.p+o.u(e),l=new Error,u=function(n){if(o.o(t,e)&&(r=t[e],0!==r&&(t[e]=void 0),r)){var i=n&&("load"===n.type?"missing":n.type),a=n&&n.target&&n.target.src;l.message="Loading chunk "+e+" failed.\n("+i+": "+a+")",l.name="ChunkLoadError",l.type=i,l.request=a,r[1](l)}};o.l(a,u,"chunk-"+e,e)}},o.O.j=function(e){return 0===t[e]};var e=function(e,n){var r,i,a=n[0],l=n[1],u=n[2],s=0;if(a.some((function(e){return 0!==t[e]}))){for(r in l)o.o(l,r)&&(o.m[r]=l[r]);if(u)var c=u(o)}for(e&&e(n);s<a.length;s++)i=a[s],o.o(t,i)&&t[i]&&t[i][0](),t[i]=0;return o.O(c)},n=self["webpackChunkpet_todo"]=self["webpackChunkpet_todo"]||[];n.forEach(e.bind(null,0)),n.push=e.bind(null,n.push.bind(n))}();var n=o.O(void 0,[998],(function(){return o(3410)}));n=o.O(n)})();
//# sourceMappingURL=app.bfe20e4c.js.map