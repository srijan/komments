(function(){"use strict";const I="";function o(s,e,t,i,l,m,d,T){var n=typeof s=="function"?s.options:s;e&&(n.render=e,n.staticRenderFns=t,n._compiled=!0),i&&(n.functional=!0),m&&(n._scopeId="data-v-"+m);var r;if(d?(r=function(a){a=a||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,!a&&typeof __VUE_SSR_CONTEXT__<"u"&&(a=__VUE_SSR_CONTEXT__),l&&l.call(this,a),a&&a._registeredComponents&&a._registeredComponents.add(d)},n._ssrRegister=r):l&&(r=T?function(){l.call(this,(n.functional?this.parent:this).$root.$options.shadowRoot)}:l),r)if(n.functional){n._injectStyles=r;var N=n.render;n.render=function(U,h){return r.call(h),N(U,h)}}else{var c=n.beforeCreate;n.beforeCreate=c?[].concat(c,r):[r]}return{exports:s,options:n}}const u={data(){return{selectedKomment:{},kommentList:[]}},props:{title:String,queuedKomments:Array},created(){this.kommentList=this.queuedKomments,this.loadKomments(),this.kommentList[0]&&this.selectKomment(this.kommentList[0].id)},methods:{async loadKomments(){try{panel.api.get("komments/queued").then(s=>{this.komments=s})}catch(s){console.log(s)}},selectKomment(s){this.selectedKomment=this.queuedKomments.find(e=>e.id===s)},onMarkAsSpam(s){for(let e=0;e<this.kommentList.length;e++)this.kommentList[e].id===this.selectedKomment.id&&(this.kommentList[e].spamlevel=s?100:0,s&&(this.kommentList[e].verified=!1,this.kommentList[e].status=!1))},onMarkAsVerified(s){for(let e=0;e<this.kommentList.length;e++)this.kommentList[e].id===this.selectedKomment.id&&(this.kommentList[e].verified=s)},onMarkAsPublished(s){for(let e=0;e<this.kommentList.length;e++)this.kommentList[e].id===this.selectedKomment.id&&(this.kommentList[e].status=s)},onDelete(){this.kommentList=this.kommentList.filter(s=>s.id!==this.selectedKomment.id),this.selectedKomment=this.kommentList[0]}}};var _=function(){var e=this,t=e._self._c;return t("k-inside",[t("div",{staticClass:"k-komments-view"},[t("k-header",[e._v("Komments")]),t("div",[e.kommentList.length===0?t("div",{staticClass:"so-empty"},[t("NoKomments"),t("div",[t("k-info-field",{attrs:{theme:"positive",text:"There are no comments waiting for moderation. Have a nice day!"}})],1)],1):t("div",{staticClass:"comments-grid"},[t("k-column",{staticClass:"komment-list",attrs:{width:"1/3"}},[t("KommentList",{attrs:{queuedKomments:e.kommentList,onSelectKomment:e.selectKomment,selectedKomment:this.selectedKomment}})],1),t("k-column",{staticClass:"komment-details",attrs:{width:"2/3"}},[t("KommentDetails",{attrs:{komment:this.selectedKomment,onMarkAsSpam:this.onMarkAsSpam,onMarkAsVerified:this.onMarkAsVerified,onMarkAsPublished:this.onMarkAsPublished,onDelete:this.onDelete}})],1)],1)])],1)])},p=[],k=o(u,_,p,!1,null,null,null,null);const f=k.exports,O="",v={props:{komment:Object,onMarkAsSpam:Function,onMarkAsVerified:Function,onMarkAsPublished:Function,onDelete:Function},methods:{markAsSpam(s,e,t){this.komment.spamlevel=null,panel.api.post("komments/spam",{pageSlug:s,kommentId:e,isSpam:t}).then(()=>{this.onMarkAsSpam(t)})},markAsVerified(s,e,t){this.komment.verified=null,panel.api.post("komments/verify",{pageSlug:s,kommentId:e,isVerified:t}).then(()=>{this.onMarkAsVerified(t)})},publish(s,e,t){this.komment.status=null,panel.api.post("komments/publish",{pageSlug:s,kommentId:e,isPublished:t}).then(()=>{this.onMarkAsPublished(t)})},deleteKomment(s,e,t){panel.api.post("komments/delete",{pageSlug:s,kommentId:e}).then(()=>{this.onDelete(),t.deleteDialog.close()})},nl2br(s){return s.replace(/([^>\r\n]?)(\r\n|\n\r|\r|\n)/g,"$1<br />$2")}}};var g=function(){var e=this,t=e._self._c;return t("div",{staticClass:"komment-moderation"},[e.komment.id?t("div",[t("div",{staticClass:"metadata"},[t("div",{staticClass:"avatar"},[e.komment.image?t("img",{attrs:{src:e.komment.image}}):e._e()]),t("div",{staticClass:"komment-info"},[t("div",{staticClass:"author-short"},[t("strong",[e._v(e._s(e.komment.author))]),e.komment.authorUrl?t("k-link",{attrs:{to:e.komment.authorUrl,title:e.komment.authorUrl,target:"_blank"}},[t("k-icon",{attrs:{type:"url"}})],1):e._e()],1),t("div",{staticClass:"meta"},[e._v(e._s(e.komment.published))]),t("div",{staticClass:"meta"},[t("k-link",{attrs:{to:e.komment.url,title:e.komment.url}},[e._v(e._s(e.komment.title))])],1)])]),t("div",{staticClass:"actions"},[t("div",{staticClass:"left"},[e.komment.status===!0?t("k-button",{staticClass:"publish",attrs:{theme:"positive",icon:"circle-filled"},on:{click:function(i){return e.publish(e.komment.slug,e.komment.id,!1)}}},[e._v(" Published ")]):e.komment.status===!1&&e.komment.spamlevel===0?t("k-button",{staticClass:"publish",attrs:{disabled:e.komment.spamlevel>0,icon:"circle"},on:{click:function(i){return e.publish(e.komment.slug,e.komment.id,!0)}}},[e._v(" Publish ")]):t("k-button",{attrs:{icon:"protected",disabled:!0}},[e._v(" Publish ")]),e.komment.verified===!0?t("k-button",{attrs:{theme:"positive",icon:"check"},on:{click:function(i){return e.markAsVerified(e.komment.slug,e.komment.id,!1)}}},[e._v(" Verified user ")]):e.komment.verified===!1&&e.komment.spamlevel===0?t("k-button",{attrs:{icon:"check",disabled:e.komment.spamlevel>0},on:{click:function(i){return e.markAsVerified(e.komment.slug,e.komment.id,!0)}}},[e._v(" Verify user ")]):t("k-button",{attrs:{icon:"protected",disabled:!0}},[e._v(" Verify user ")]),e.komment.spamlevel===0?t("k-button",{attrs:{icon:"bolt"},on:{click:function(i){return e.markAsSpam(e.komment.slug,e.komment.id,!0)}}},[e._v(" Flag as spam ")]):e.komment.spamlevel>0?t("k-button",{attrs:{theme:"negative",icon:"bolt"},on:{click:function(i){return e.markAsSpam(e.komment.slug,e.komment.id,!1)}}},[e._v(" Remove from spam ")]):t("k-button",{attrs:{icon:"clock",disabled:!0}},[e._v(" Marked as spam ")])],1),t("div",{staticClass:"right"},[t("k-button",{attrs:{theme:"negative",icon:"trash"},on:{click:function(i){return e.$refs.deleteDialog.open()}}},[e._v(" Delete ")]),t("k-dialog",{ref:"deleteDialog",attrs:{button:"Delete",theme:"negative",icon:"trash"},on:{submit:function(i){return e.deleteKomment(e.komment.slug,e.komment.id,e.$refs)}}},[t("k-text",[e._v(" Do you really want to delete the comment? This cannot be undone. ")])],1)],1)]),t("div",{staticClass:"text",domProps:{innerHTML:e._s(e.komment.komment)}})]):e._e()])},y=[],b=o(v,g,y,!1,null,null,null,null);const x=b.exports,H="",w={props:{queuedKomments:Array,onSelectKomment:Function,selectedKomment:Object}};var K=function(){var e=this,t=e._self._c;return t("div",{staticClass:"komments-list"},[t("ul",e._l(e.queuedKomments,function(i,l){return t("li",{key:l,staticClass:"list-item",class:{active:e.selectedKomment.id===i.id,isSpam:i.spamlevel>0,isVerified:i.verified===!0},on:{click:function(m){return e.onSelectKomment(i.id)},keypress:function(m){return e.onSelectKomment(i.id)}}},[i.image?t("img",{attrs:{src:i.image}}):e._e(),t("div",{staticClass:"komment-preview"},[t("div",{staticClass:"author"},[t("strong",[e._v(e._s(i.author))])]),t("div",{staticClass:"meta"},[e._v(e._s(i.published)+" - "+e._s(i.title))]),t("div",{staticClass:"status"},[i.status===!1?t("span",{staticClass:"badge",attrs:{alt:"pending",title:"pending"}},[e._v(" pending ")]):i.status===!0?t("span",{staticClass:"badge blue",attrs:{alt:"published",title:"published"}},[e._v(" published ")]):e._e(),i.verified===!0?t("span",{staticClass:"badge green",attrs:{alt:"Verified user",title:"Verified user"}},[e._v(" verified ")]):e._e(),i.spamlevel>0?t("span",{staticClass:"badge red",attrs:{alt:"Possible spam comment",title:"Possible spam comment"}},[e._v(" spam ")]):e._e()])])])}),0)])},C=[],$=o(w,K,C,!1,null,null,null,null);const A=$.exports,X="",M={props:{queuedComments:Number,label:String}};var L=function(){var e=this,t=e._self._c;return t("div",{staticClass:"kommentsPendingCounter"},[t("k-headline",[e._v(e._s(e.label))]),t("div",{staticClass:"count"},[e._v(e._s(e.queuedComments))])],1)},S=[],V=o(M,L,S,!1,null,null,null,null);const D=V.exports,P={props:{}};var F=function(){var e=this,t=e._self._c;return t("div",[t("svg",{attrs:{"data-name":"Layer 1",xmlns:"http://www.w3.org/2000/svg",width:"997.86122",height:"450.8081",viewBox:"0 0 997.86122 450.8081","xmlns:xlink":"http://www.w3.org/1999/xlink"}},[t("rect",{attrs:{x:"871.99152",y:"181.55804",width:"30.15944",height:"104.39806",fill:"#f2f2f2"}}),t("polygon",{attrs:{points:"922.068 266.317 848.715 179.052 701.475 180.398 612.156 267.396 613.961 268.556 613.316 268.556 613.316 449.513 921.871 449.513 921.871 268.556 922.068 266.317",fill:"#f2f2f2"}}),t("polygon",{attrs:{points:"848.792 179.238 757.154 286.674 757.154 449.513 921.871 449.513 921.871 266.236 848.792 179.238",fill:"#e6e6e6"}}),t("rect",{attrs:{x:"823.27242",y:"359.46083",width:"33.6394",height:"29.73333",fill:"#3f3d56"}}),t("rect",{attrs:{x:"823.27242",y:"307.99568",width:"33.6394",height:"29.26181",fill:"#3f3d56"}}),t("rect",{attrs:{x:"823.27242",y:"359.46083",width:"33.6394",height:"29.73333",fill:"#fff"}}),t("rect",{attrs:{x:"823.27242",y:"307.99568",width:"33.6394",height:"29.26181",fill:"#fff"}}),t("rect",{attrs:{x:"673.77661",y:"351.57128",width:"33.6394",height:"29.73333",fill:"#fff"}}),t("rect",{attrs:{x:"673.77661",y:"300.10613",width:"33.6394",height:"29.26181",fill:"#fff"}}),t("rect",{attrs:{x:"633.99152",y:"181.55804",width:"30.15944",height:"104.39806",fill:"#f2f2f2"}}),t("polygon",{attrs:{points:"684.068 266.317 610.715 179.052 463.475 180.398 374.156 267.396 375.961 268.556 375.316 268.556 375.316 449.513 683.871 449.513 683.871 268.556 684.068 266.317",fill:"#f2f2f2"}}),t("polygon",{attrs:{points:"610.792 179.238 519.154 286.674 519.154 449.513 683.871 449.513 683.871 266.236 610.792 179.238",fill:"#e6e6e6"}}),t("rect",{attrs:{x:"585.27242",y:"359.46083",width:"33.6394",height:"29.73333",fill:"#3f3d56"}}),t("rect",{attrs:{x:"585.27242",y:"307.99568",width:"33.6394",height:"29.26181",fill:"#3f3d56"}}),t("rect",{attrs:{x:"585.27242",y:"359.46083",width:"33.6394",height:"29.73333",fill:"#fff"}}),t("rect",{attrs:{x:"585.27242",y:"307.99568",width:"33.6394",height:"29.26181",fill:"#fff"}}),t("rect",{attrs:{x:"435.77661",y:"351.57128",width:"33.6394",height:"29.73333",fill:"#fff"}}),t("rect",{attrs:{x:"435.77661",y:"300.10613",width:"33.6394",height:"29.26181",fill:"#fff"}}),t("rect",{attrs:{x:"380.1536",y:"91.46021",width:"40.30032",height:"139.50112",fill:"#f2f2f2"}}),t("polygon",{attrs:{points:"447.068 204.718 349.051 88.112 152.302 89.91 32.951 206.161 35.362 207.711 34.501 207.711 34.501 449.513 446.804 449.513 446.804 207.711 447.068 204.718",fill:"#f2f2f2"}}),t("polygon",{attrs:{points:"349.153 88.36 226.702 231.921 226.702 449.513 446.804 449.513 446.804 204.611 349.153 88.36",fill:"#e6e6e6"}}),t("rect",{attrs:{x:"315.05306",y:"329.18147",width:"44.95039",height:"39.73094",fill:"#3f3d56"}}),t("rect",{attrs:{x:"315.05306",y:"260.41156",width:"44.95039",height:"39.10088",fill:"#3f3d56"}}),t("rect",{attrs:{x:"315.05306",y:"329.18147",width:"44.95039",height:"39.73094",fill:"#fff"}}),t("rect",{attrs:{x:"315.05306",y:"260.41156",width:"44.95039",height:"39.10088",fill:"#fff"}}),t("rect",{attrs:{x:"115.29041",y:"318.63912",width:"44.95039",height:"39.73094",fill:"#fff"}}),t("rect",{attrs:{x:"115.29041",y:"249.8692",width:"44.95039",height:"39.10088",fill:"#fff"}}),t("rect",{attrs:{y:"448.61997",width:"963.95079",height:"2",fill:"#3f3d56"}}),t("ellipse",{attrs:{cx:"151.87223",cy:"352.47204",rx:"29.09932",ry:"59.37437",fill:"#3f3d56"}}),t("path",{attrs:{d:"M255.62882,674.25425c-11.65458-69.92526-.11734-139.59789.00056-140.29293l2.267.384c-.11734.69167-11.58834,69.99825.00056,139.53164Z",transform:"translate(-101.06939 -224.59595)",fill:"#a8a8bf"}}),t("rect",{attrs:{x:"251.0257",y:"571.20214",width:"29.84136",height:"2.29972",transform:"translate(-339.58156 -31.50095) rotate(-28.1416)",fill:"#a8a8bf"}}),t("rect",{attrs:{x:"237.02319",y:"564.48509",width:"2.29972",height:"29.84239",transform:"translate(-486.12468 291.37147) rotate(-61.84204)",fill:"#a8a8bf"}}),t("ellipse",{attrs:{cx:"81.9552",cy:"260.90342",rx:"56.91484",ry:"116.12927",fill:"#a8a8bf"}}),t("path",{attrs:{d:"M189.364,675.40405c-22.76459-136.58529-.22963-272.67316.00056-274.03181l2.267.384c-.22962,1.35528-22.69834,137.0771.00057,273.27052Z",transform:"translate(-101.06939 -224.59595)",fill:"#3f3d56"}}),t("rect",{attrs:{x:"179.27648",y:"475.12522",width:"58.36761",height:"2.29972",transform:"translate(-301.0624 -69.97216) rotate(-28.1416)",fill:"#3f3d56"}}),t("rect",{attrs:{x:"152.98936",y:"460.88882",width:"2.29972",height:"58.36761",transform:"translate(-451.74248 170.111) rotate(-61.84258)",fill:"#3f3d56"}}),t("ellipse",{attrs:{cx:"216.75351",cy:"191.008",rx:"77.88347",ry:"158.91374",fill:"#a8a8bf"}}),t("path",{attrs:{d:"M326.9161,675.40405c-31.1399-186.83717-.3144-372.9922.00056-374.85051l2.267.384c-.3144,1.85494-31.07366,187.64393.00056,374.08922Z",transform:"translate(-101.06939 -224.59595)",fill:"#3f3d56"}}),t("rect",{attrs:{x:"312.69421",y:"401.83114",width:"79.87126",height:"2.29972",transform:"translate(-249.45002 -10.63875) rotate(-28.1416)",fill:"#3f3d56"}}),t("rect",{attrs:{x:"277.14586",y:"381.92603",width:"2.29972",height:"79.87126",transform:"translate(-326.03583 243.55793) rotate(-61.84329)",fill:"#3f3d56"}}),t("ellipse",{attrs:{cx:"871.02934",cy:"352.47204",rx:"29.09932",ry:"59.37437",fill:"#3f3d56"}}),t("path",{attrs:{d:"M969.41153,674.25425c11.65459-69.92526.11734-139.59789-.00056-140.29293l-2.267.384c.11733.69167,11.58833,69.99825-.00056,139.53164Z",transform:"translate(-101.06939 -224.59595)",fill:"#a8a8bf"}}),t("rect",{attrs:{x:"957.94412",y:"557.43132",width:"2.29972",height:"29.84136",transform:"translate(-99.02545 923.51928) rotate(-61.8584)",fill:"#a8a8bf"}}),t("rect",{attrs:{x:"971.94611",y:"578.25643",width:"29.84239",height:"2.29972",transform:"translate(-257.69773 309.6834) rotate(-28.15796)",fill:"#a8a8bf"}}),t("ellipse",{attrs:{cx:"940.94638",cy:"260.90342",rx:"56.91484",ry:"116.12927",fill:"#a8a8bf"}}),t("path",{attrs:{d:"M1035.67632,675.40405c22.76459-136.58529.22962-272.67316-.00056-274.03181l-2.267.384c.22962,1.35528,22.69834,137.0771-.00056,273.27052Z",transform:"translate(-101.06939 -224.59595)",fill:"#3f3d56"}}),t("rect",{attrs:{x:"1015.43021",y:"447.09128",width:"2.29972",height:"58.36761",transform:"translate(16.06635 923.44761) rotate(-61.8584)",fill:"#3f3d56"}}),t("rect",{attrs:{x:"1041.71733",y:"488.92276",width:"58.36761",height:"2.29972",transform:"translate(-205.59609 338.75568) rotate(-28.15742)",fill:"#3f3d56"}}),t("ellipse",{attrs:{cx:"806.14806",cy:"191.008",rx:"77.88347",ry:"158.91374",fill:"#a8a8bf"}}),t("path",{attrs:{d:"M898.12426,675.40405c31.1399-186.83717.31439-372.9922-.00056-374.85051l-2.267.384c.3144,1.85494,31.07365,187.64393-.00056,374.08922Z",transform:"translate(-101.06939 -224.59595)",fill:"#3f3d56"}}),t("rect",{attrs:{x:"871.26065",y:"363.04537",width:"2.29972",height:"79.87126",transform:"translate(4.52428 757.59634) rotate(-61.8584)",fill:"#3f3d56"}}),t("rect",{attrs:{x:"906.809",y:"420.7118",width:"79.87126",height:"2.29972",transform:"translate(-188.10195 272.08136) rotate(-28.15671)",fill:"#3f3d56"}}),t("path",{attrs:{d:"M690.67376,326.06186l9.20569-7.3628c-7.15149-.789-10.0899,3.11127-11.29248,6.19837-5.587-2.32-11.66919.72046-11.66919.72046l18.41889,6.6867A13.93792,13.93792,0,0,0,690.67376,326.06186Z",transform:"translate(-101.06939 -224.59595)",fill:"#3f3d56"}}),t("path",{attrs:{d:"M465.67376,261.06186l9.20569-7.3628c-7.15149-.789-10.0899,3.11127-11.29248,6.19837-5.587-2.32-11.66919.72046-11.66919.72046l18.41889,6.6867A13.93792,13.93792,0,0,0,465.67376,261.06186Z",transform:"translate(-101.06939 -224.59595)",fill:"#3f3d56"}}),t("path",{attrs:{d:"M832.67376,232.06186l9.20569-7.3628c-7.15149-.789-10.0899,3.11127-11.29248,6.19837-5.587-2.32-11.66919.72046-11.66919.72046l18.41889,6.6867A13.93792,13.93792,0,0,0,832.67376,232.06186Z",transform:"translate(-101.06939 -224.59595)",fill:"#3f3d56"}}),t("path",{attrs:{d:"M851.26034,661.648a13.91772,13.91772,0,0,0-6.96955,1.86975A14.98175,14.98175,0,0,0,819.26034,674.648h45.94952A13.99045,13.99045,0,0,0,851.26034,661.648Z",transform:"translate(-101.06939 -224.59595)",fill:"#3f3d56"}}),t("path",{attrs:{d:"M384.26034,661.648a13.91772,13.91772,0,0,0-6.96955,1.86975A14.98175,14.98175,0,0,0,352.26034,674.648h45.94952A13.99045,13.99045,0,0,0,384.26034,661.648Z",transform:"translate(-101.06939 -224.59595)",fill:"#3f3d56"}}),t("path",{attrs:{d:"M623.26034,661.648a13.91772,13.91772,0,0,0-6.96955,1.86975A14.98175,14.98175,0,0,0,591.26034,674.648h45.94952A13.99045,13.99045,0,0,0,623.26034,661.648Z",transform:"translate(-101.06939 -224.59595)",fill:"#3f3d56"}}),t("polygon",{attrs:{points:"471.759 404.228 339.191 404.228 339.191 408.504 359.866 408.504 359.866 449.13 364.142 449.13 364.142 408.504 444.669 408.504 444.669 449.13 448.946 449.13 448.946 408.504 471.759 408.504 471.759 404.228",fill:"#3f3d56"}}),t("rect",{attrs:{x:"339.45191",y:"391.43404",width:"132.56808",height:"4.27639",fill:"#3f3d56"}}),t("rect",{attrs:{x:"339.45191",y:"380.74306",width:"132.56808",height:"4.27639",fill:"#3f3d56"}}),t("rect",{attrs:{x:"339.45191",y:"370.05209",width:"132.56808",height:"4.27639",fill:"#3f3d56"}}),t("polygon",{attrs:{points:"678.759 404.228 546.191 404.228 546.191 408.504 566.866 408.504 566.866 449.13 571.142 449.13 571.142 408.504 651.669 408.504 651.669 449.13 655.946 449.13 655.946 408.504 678.759 408.504 678.759 404.228",fill:"#3f3d56"}}),t("rect",{attrs:{x:"546.45191",y:"391.43404",width:"132.56808",height:"4.27639",fill:"#3f3d56"}}),t("rect",{attrs:{x:"546.45191",y:"380.74306",width:"132.56808",height:"4.27639",fill:"#3f3d56"}}),t("rect",{attrs:{x:"546.45191",y:"370.05209",width:"132.56808",height:"4.27639",fill:"#3f3d56"}})])])},Z=[],R=o(P,F,Z,!1,null,null,null,null);const q=R.exports;panel.plugin("mauricerenck/komments",{components:{"k-komments-view":f,KommentDetails:x,KommentList:A,NoKomments:q},fields:{komments:f,kommentsPending:D}})})();
