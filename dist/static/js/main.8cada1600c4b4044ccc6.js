webpackJsonp([1],{0:function(t,e,s){s("j1ja"),t.exports=s("NHnr")},NHnr:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=s("7+uW"),i=s("mvHQ"),n=s.n(i),r=s("//Fk"),o=s.n(r),c=s("Dd8w"),l=s.n(c),u=s("fZjL"),d=s.n(u),v=s("y/MS"),f=s.n(v),_=s("4kSj"),m=s.n(_),h=(s("fTMG"),s("TjIa"),s("hsNo"),s("RKAd")),p=s.n(h),g=s("mtWM"),k=s.n(g),b=s("9QV6"),C=s.n(b),w=(s("FNwM"),s("mnbf"),{api:"http://151.80.41.202:7070",ws:"ws://151.80.41.202:7272"});a.a.use(C.a),f.a.setMaxVisible(10);var y=new WebSocket(w.ws),R={name:"App",components:{VueJsonPretty:p.a},data:function(){return{rulesState:{},tokenId:"SEED",confirmationHash:"",triggerContractAddress:"TEEXEWrkMFKapSMJ6mErg39ELFKDqEs6w3",notificationCount:0,stats:{rulesCount:0,lastProcessedBlock:0},session_id:""+Math.random()}},computed:{rules:function(){return{track_token:{id:"track_token",context:"transaction",rule:"type==2 and contract.asset=='"+this.tokenId+"'",repeat:"always"},confirm_transaction:{id:"confirm_transaction",context:"transaction",rule:"confirmed==true and hash=='"+this.confirmationHash+"'",repeat:"once"},track_triggers:{id:"track_trigger",context:"transaction",rule:"type==31 and contract.contractAddress=='"+this.triggerContractAddress+"'",repeat:"always"}}}},methods:{checkRules:function(){for(var t=this,e=d()(this.rules),s=function(s){var a=e[s],i=t.rules[a];[].push(t.getRule(a).then(function(e){var s="id"in e.data;t.rulesState[a]=l()({},i,{exists:s})}))},a=0;a<e.length;a++)s(a)},fetchStats:function(){var t=this,e=k.a.get(w.api+"/stats"),s=k.a.get(w.api+"/rules");o.a.all([e,s]).then(function(e){t.stats.lastProcessedBlock=e[0].data.lastProcessedBlock,t.stats.rulesCount=0;for(var s=e[1].data,a=0;a<s.length;a++){-1!==s[a].id.indexOf(t.session_id)&&t.stats.rulesCount++}})},addRule:function(t){var e=this,s=this.rules,a=l()({},s[t],{id:t+":"+this.session_id});k.a.post(w.api+"/rule",a).then(function(t){new f.a({type:"success",text:"Rule successfully added !",timeout:1e3}).show(),e.checkRules(),e.fetchStats()})},removeRule:function(t){k.a.delete(w.api+"/rule/"+t+":"+this.session_id).then(function(){new f.a({type:"success",text:"Rule removed !",timeout:1e3}).show()})},getRule:function(t){return k.a.get(w.api+"/rule/"+t+":"+this.session_id)}},created:function(){this.rulesState=l()({},this.rules)},mounted:function(){var t=this;m()(".tabular.menu .item").tab();var e=m()("#table_id").DataTable({order:[[0,"desc"]]});e.on("click","tr",function(){console.log(e.row(this).data())}),setInterval(function(){t.checkRules()},5e3),setInterval(function(){t.fetchStats()},1e3),y.onmessage=function(s){for(var a=JSON.parse(s.data),i=d()(a),r=0;r<i.length;r++){var o=i[r];if(-1!==o.indexOf(":")){var c=o.split(":"),l=c[0];if(c[1]===t.session_id){var u=a[o];e.row.add([t.notificationCount,l,n()(u)]).draw(!1),t.notificationCount++}}}},m()(window).on("beforeunload",function(e){o.a.all([t.removeRule("track_token"),t.removeRule("confirm_transaction"),t.removeRule("track_triggers")])})}},x={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"app"}},[s("div",{staticClass:"ui segment container"},[t._m(0),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),s("div",{staticClass:"ui vertical stripe segment",staticStyle:{background:"#f5f5f5",opacity:"0.7"}},[s("div",{staticClass:"ui stackable four column centered grid container"},[s("div",{staticClass:"ui center aligned column"},[s("div",{staticClass:"ui small orange statistic"},[s("div",{staticClass:"value"},[s("small",[t._v(t._s(t.notificationCount))])]),t._v(" "),s("div",{staticClass:"label"},[t._v("\n              Notifications\n            ")])])]),t._v(" "),s("div",{staticClass:"ui center aligned column"},[s("div",{staticClass:"ui small green statistic"},[s("div",{staticClass:"value"},[s("small",[t._v(t._s(t.stats.rulesCount))])]),t._v(" "),s("div",{staticClass:"label"},[t._v("\n              Rules\n            ")])])]),t._v(" "),s("div",{staticClass:"ui center aligned column"},[s("div",{staticClass:"ui small grey statistic"},[s("div",{staticClass:"value"},[s("small",[t._v(t._s(t.stats.lastProcessedBlock))])]),t._v(" "),s("div",{staticClass:"label"},[t._v("\n              Last processed block\n            ")])])])])]),t._v(" "),s("br"),t._v(" "),s("div",{staticClass:"ui grid"},[t._m(3),t._v(" "),s("div",{staticClass:"twelve wide stretched column"},[s("div",{staticClass:"ui segment"},[s("div",{staticClass:"ui active tab",attrs:{"data-tab":"track_token"}},[t._m(4),t._v(" "),s("div",{staticClass:"ui form"},[s("div",{staticClass:"field"},[s("label",[t._v("Token id")]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.tokenId,expression:"tokenId"}],attrs:{type:"text"},domProps:{value:t.tokenId},on:{input:function(e){e.target.composing||(t.tokenId=e.target.value)}}})]),t._v(" "),s("div",{staticClass:"field"},[s("label",[t._v("Rule specification")]),t._v(" "),s("vue-json-pretty",{attrs:{path:"res",data:t.rules.track_token}})],1),t._v(" "),s("button",{staticClass:"ui green button right floated",class:{disabled:this.rulesState.track_token.exists},attrs:{type:"submit"},on:{click:function(e){t.addRule("track_token")}}},[t._v("Add rule")]),t._v(" "),s("button",{directives:[{name:"show",rawName:"v-show",value:this.rulesState.track_token.exists,expression:"this.rulesState.track_token.exists"}],staticClass:"ui red button right floated",attrs:{type:"submit"},on:{click:function(e){t.removeRule("track_token")}}},[t._v("Remove rule")])])]),t._v(" "),s("div",{staticClass:"ui tab",attrs:{"data-tab":"confirm_transaction"}},[t._m(5),t._v(" "),s("div",{staticClass:"ui form"},[s("div",{staticClass:"field"},[s("label",[t._v("Transaction hash")]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.confirmationHash,expression:"confirmationHash"}],attrs:{type:"text"},domProps:{value:t.confirmationHash},on:{input:function(e){e.target.composing||(t.confirmationHash=e.target.value)}}})]),t._v(" "),s("div",{staticClass:"field"},[s("label",[t._v("Rule specification")]),t._v(" "),s("vue-json-pretty",{attrs:{path:"res",data:t.rules.confirm_transaction}})],1),t._v(" "),s("button",{staticClass:"ui green button right floated",class:{disabled:this.rulesState.confirm_transaction.exists},attrs:{type:"submit"},on:{click:function(e){t.addRule("confirm_transaction")}}},[t._v("Add rule")]),t._v(" "),s("button",{directives:[{name:"show",rawName:"v-show",value:this.rulesState.confirm_transaction.exists,expression:"this.rulesState.confirm_transaction.exists"}],staticClass:"ui red button right floated",attrs:{type:"submit"},on:{click:function(e){t.removeRule("confirm_transaction")}}},[t._v("Remove rule")])])]),t._v(" "),s("div",{staticClass:"ui tab",attrs:{"data-tab":"triggers"}},[t._m(6),t._v(" "),s("div",{staticClass:"ui form"},[s("div",{staticClass:"field"},[s("label",[t._v("Contract address")]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.triggerContractAddress,expression:"triggerContractAddress"}],attrs:{type:"text"},domProps:{value:t.triggerContractAddress},on:{input:function(e){e.target.composing||(t.triggerContractAddress=e.target.value)}}})]),t._v(" "),s("div",{staticClass:"field"},[s("label",[t._v("Rule specification")]),t._v(" "),s("vue-json-pretty",{attrs:{path:"res",data:t.rules.track_triggers}})],1),t._v(" "),s("button",{staticClass:"ui green button right floated",class:{disabled:this.rulesState.track_triggers.exists},attrs:{type:"submit"},on:{click:function(e){t.addRule("track_triggers")}}},[t._v("Add rule")]),t._v(" "),s("button",{directives:[{name:"show",rawName:"v-show",value:this.rulesState.track_triggers.exists,expression:"this.rulesState.track_triggers.exists"}],staticClass:"ui red button right floated",attrs:{type:"submit"},on:{click:function(e){t.removeRule("track_triggers")}}},[t._v("Remove rule")])])])])])])]),t._v(" "),t._m(7)])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{staticClass:"ui dividing header"},[e("small",[this._v("TRONHOOK DEMO")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"info"},[s("p",[t._v("Here are some demo of usecases that TronHook can help with. "),s("em",[s("b",[t._v("It is not only limited to these usecase")])]),t._v(", you can write any rule you want that match your requirements.")]),t._v(" "),s("p",[t._v("This demo is focusing on the notification feature but TronHook is not just a notification tool, you can do much more with it !")]),t._v(" "),s("p",[t._v("If you want to have more details about how to write rules, you can check the documentation here.")]),t._v(" "),s("p",[t._v("To start receiving notifications, choose one or multiple rules and save them. TronHook node will start sending notifications via websocket to this page !")]),t._v(" "),s("p",[t._v("Note that this demo checks the matching rules only for the latest blocks, but you can also get notifications for previous blocks or a specific range of blocks.")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"ui info message"},[this._v("\n  Rules are deleted every half hour (no matter when you created them) on this demo server, if you are not receiving notifications anymore it might be for this reason."),e("br"),this._v("\n In that case, please reload the page and add your rules again\n")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"four wide column"},[e("b",[this._v("RULE EXAMPLES")]),this._v(" "),e("div",{staticClass:"ui vertical fluid tabular menu"},[e("a",{staticClass:"item active",attrs:{"data-tab":"track_token"}},[this._v("\n        Track transactions of a token\n      ")]),this._v(" "),e("a",{staticClass:"item",attrs:{"data-tab":"confirm_transaction"}},[this._v("\n        Confirmation of a transaction\n      ")]),this._v(" "),e("a",{staticClass:"item ",attrs:{"data-tab":"triggers"}},[this._v("\n        Track triggers of a specific contract\n      ")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("i",{staticClass:"ui circle info icon"}),this._v("Receive a notification every time a transaction occurs with a specific token")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("i",{staticClass:"ui circle info icon"}),this._v("Receive a notification only once a specific transaction is confirmed")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("i",{staticClass:"ui circle info icon"}),this._v("Receive a notification every time a specific contract is triggered")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"ui segment container"},[s("h2",{staticClass:"ui dividing header"},[s("a",{attrs:{id:"notifications"}}),s("small",[t._v("Received notifications")])]),t._v(" "),s("table",{staticClass:"ui fixed selectable orange table",attrs:{id:"table_id",width:"100%"}},[s("thead",[s("tr",[s("th",{staticClass:"two wide"},[t._v("#")]),t._v(" "),s("th",{staticClass:"two wide"},[t._v("Rule Id")]),t._v(" "),s("th",{staticClass:"ten wide"},[t._v("Result")])])]),t._v(" "),s("tbody")])])}]};var S=s("VU/8")(R,x,!1,function(t){s("SAKc")},null,null).exports;a.a.config.productionTip=!1,new a.a({el:"#app",components:{App:S},template:"<App/>"})},SAKc:function(t,e){},fTMG:function(t,e){},hsNo:function(t,e){}},[0]);
//# sourceMappingURL=main.8cada1600c4b4044ccc6.js.map