(window.webpackJsonp=window.webpackJsonp||[]).push([["envList"],{"3Oae":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,a=u(n("06Hw")),s=u(n("YYXh")),o=u(n("NCmu")),i=n("ygAv");function u(e){return e&&e.__esModule?e:{default:e}}t.default={components:{emptyNode:o.default},data:function(){return{showContent:!1,envList:[],loading:{isLoading:!1,title:""},emptyInfo:{title:"暂无环境",desc:"环境可以由构建机组成，也可以由Devnet、IDC内的服务器组成"}}},computed:{projectId:function(){return this.$route.params.projectId}},watch:{projectId:(r=(0,s.default)(a.default.mark((function e(t){return a.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.init();case 2:case"end":return e.stop()}}),e,this)}))),function(e){return r.apply(this,arguments)})},mounted:function(){var e=this;return(0,s.default)(a.default.mark((function t(){return a.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.init();case 2:case"end":return t.stop()}}),t,e)})))()},methods:{init:function(){var e=this;return(0,s.default)(a.default.mark((function t(){var n;return a.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:(n=e.loading).isLoading=!0,n.title="数据加载中，请稍候";try{e.requestList()}catch(t){e.$bkMessage({message:t.message?t.message:t,theme:"error"})}finally{setTimeout((function(){e.loading.isLoading=!1}),1e3)}case 4:case"end":return t.stop()}}),t,e)})))()},requestList:function(){var e=this;return(0,s.default)(a.default.mark((function t(){var n,r;return a.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.$store.dispatch("environment/requestEnvList",{projectId:e.projectId});case 3:n=t.sent,e.envList.splice(0,e.envList.length),n.map((function(t){e.envList.push(t)})),t.next=13;break;case 8:t.prev=8,t.t0=t.catch(0),r=t.t0.message?t.t0.message:t.t0,"error",e.$bkMessage({message:r,theme:"error"});case 13:e.showContent=!0;case 14:case"end":return t.stop()}}),t,e,[[0,8]])})))()},toCreateEnv:function(){this.$router.push({name:"createEnv"})},confirmDelete:function(e){var t=this;return(0,s.default)(a.default.mark((function n(){var r,o,i;return a.default.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:r=e.envHashId,o=t.$createElement,i=o("p",{style:{textAlign:"center"}},"确定删除环境("+e.name+")？"),t.$bkInfo({title:"删除",subHeader:i,confirmFn:function(){var e=(0,s.default)(a.default.mark((function e(){var n,s;return a.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=void 0,s=void 0,e.prev=1,e.next=4,t.$store.dispatch("environment/toDeleteEnv",{projectId:t.projectId,envHashId:r});case 4:n="删除成功",s="success",e.next=12;break;case 8:e.prev=8,e.t0=e.catch(1),n=e.t0.data?e.t0.data.message:e.t0,s="error";case 12:return e.prev=12,t.$bkMessage({message:n,theme:s}),t.requestList(),e.finish(12);case 16:case"end":return e.stop()}}),e,t,[[1,8,12,16]])})));return function(){return e.apply(this,arguments)}}()});case 4:case"end":return n.stop()}}),n,t)})))()},toEnvDetail:function(e){this.$router.push({name:"envDetail",params:{envId:e.envHashId}})},localConvertTime:function(e){return(0,i.convertTime)(1e3*e)}}}},Lqmh:function(e,t,n){"use strict";var r=n("VWQq");n.n(r).a},VWQq:function(e,t,n){},bxdc:function(e,t,n){"use strict";n.r(t);var r=n("3Oae"),a=n.n(r);for(var s in r)"default"!==s&&function(e){n.d(t,e,(function(){return r[e]}))}(s);t.default=a.a},qkGI:function(e,t,n){"use strict";n.r(t);var r=n("xroS"),a=n("bxdc");for(var s in a)"default"!==s&&function(e){n.d(t,e,(function(){return a[e]}))}(s);n("Lqmh");var o=n("psIG"),i=Object(o.a)(a.default,r.a,r.b,!1,null,null,null);i.options.__file="src/views/env_list.vue",t.default=i.exports},xroS:function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"environment-list-wrapper"},[n("div",{staticClass:"env-header"},[n("div",{staticClass:"title"},[e._v("环境")]),e._v(" "),e.showContent&&e.envList.length?n("div",{staticClass:"handler-btn",on:{click:e.toCreateEnv}},[e._v("新增")]):e._e()]),e._v(" "),n("section",{directives:[{name:"bkloading",rawName:"v-bkloading",value:{isLoading:e.loading.isLoading,title:e.loading.title},expression:"{\n            isLoading: loading.isLoading,\n            title: loading.title\n        }"}],staticClass:"sub-view-port"},[e.showContent&&e.envList.length?n("bk-table",{attrs:{size:"small",data:e.envList,"row-class-name":"env-item-row"},on:{"row-click":e.toEnvDetail}},[n("bk-table-column",{attrs:{label:"名称",prop:"name"}}),e._v(" "),n("bk-table-column",{attrs:{label:"类型",prop:"envType"},scopedSlots:e._u([{key:"default",fn:function(t){return["DEV"===t.row.envType?n("span",[e._v("部署-研发/测试环境")]):e._e(),e._v(" "),"PROD"===t.row.envType?n("span",[e._v("部署-生产环境")]):e._e(),e._v(" "),"BUILD"===t.row.envType?n("span",[e._v("构建环境")]):e._e()]}}],null,!1,1321304218)}),e._v(" "),n("bk-table-column",{attrs:{label:"节点数",prop:"nodeCount"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("span",{staticClass:"node-count-item"},[e._v(e._s(t.row.nodeCount))])]}}],null,!1,4272089109)}),e._v(" "),n("bk-table-column",{attrs:{label:"创建时间",prop:"createdTime"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n                    "+e._s(e.localConvertTime(t.row.createdTime))+"\n                ")]}}],null,!1,4250252198)}),e._v(" "),n("bk-table-column",{attrs:{label:"操作",width:"160"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("span",{staticClass:"handler-text",on:{click:function(n){return n.stopPropagation(),e.confirmDelete(t.row)}}},[e._v("删除")])]}}],null,!1,2002194117)})],1):e._e(),e._v(" "),e.showContent&&!e.envList.length?n("empty-node",{attrs:{"is-env":!0,"to-create-node":e.toCreateEnv,"empty-info":e.emptyInfo}}):e._e()],1)])},a=[];r._withStripped=!0,n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return a}))}}]);