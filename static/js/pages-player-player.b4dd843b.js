(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-player-player"],{3674:function(t,e,i){"use strict";i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return c})),i.d(e,"a",(function(){return a}));var a={uniList:i("92f3").default,uniListItem:i("fbbc").default},n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{style:"height: "+t.contentHeight+"px;"},[i("v-uni-video",{staticClass:"video",attrs:{src:t.player.src,controls:!0}}),i("v-uni-scroll-view",{staticClass:"list",attrs:{"scroll-top":"0","scroll-y":"true"}},t._l(t.video.list,(function(e,a){return i("uni-list",{key:a},[i("uni-list-item",{attrs:{clickable:!0},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.play(a)}}},[i("v-uni-text",{class:"slot-box "+(t.checkedId!=a?"slot-text":"slot-text-checked"),attrs:{slot:"body"},slot:"body"},[t._v(t._s(e.title))])],1)],1)})),1)],1)},c=[]},"63a7":function(t,e,i){var a=i("24fb");e=a(!1),e.push([t.i,".video[data-v-193dc1ac]{width:100%;height:30%}.list[data-v-193dc1ac]{width:100%;height:70%}.slot-box[data-v-193dc1ac]{\ndisplay:-webkit-box;display:-webkit-flex;display:flex;\n-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.slot-text[data-v-193dc1ac]{-webkit-box-flex:1;-webkit-flex:1;flex:1;font-size:14px;color:#3b4144}.slot-text-checked[data-v-193dc1ac]{-webkit-box-flex:1;-webkit-flex:1;flex:1;font-size:14px;color:#4cd964}",""]),t.exports=e},"856b":function(t,e,i){"use strict";i.r(e);var a=i("3674"),n=i("a96c");for(var c in n)"default"!==c&&function(t){i.d(e,t,(function(){return n[t]}))}(c);i("ac85");var o,l=i("f0c5"),r=Object(l["a"])(n["default"],a["b"],a["c"],!1,null,"193dc1ac",null,!1,a["a"],o);e["default"]=r.exports},a96c:function(t,e,i){"use strict";i.r(e);var a=i("f2ef"),n=i.n(a);for(var c in a)"default"!==c&&function(t){i.d(e,t,(function(){return a[t]}))}(c);e["default"]=n.a},ac85:function(t,e,i){"use strict";var a=i("daea"),n=i.n(a);n.a},daea:function(t,e,i){var a=i("63a7");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("4f06").default;n("b5f71f20",a,!0,{sourceMap:!1,shadowMode:!1})},f2ef:function(t,e,i){"use strict";var a=i("4ea4");i("e25e"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=a(i("5530")),c=i("2f62"),o={data:function(){return{checkedId:-1,player:{title:"",src:""}}},computed:(0,n.default)((0,n.default)({},(0,c.mapState)("video",["video"])),{},{contentHeight:function(){var t=uni.getSystemInfoSync();return t.windowHeight}}),methods:{play:function(t){var e=this.video.list[t];e.src=location.pathname+"/"+e.src,uni.setNavigationBarTitle({title:e.title}),this.checkedId=t,this.player=e}},onLoad:function(t){t&&t.id?this.play(parseInt(t.id)):uni.navigateBack()}};e.default=o}}]);
