(window.webpackJsonp=window.webpackJsonp||[]).push([[7,3,15],{368:function(t,e,n){"use strict";n.r(e);var r={name:"PageSection",props:{altrow:Boolean,normal:Boolean,overlay:Boolean,nooverlay:Boolean,black:Boolean,noblack:Boolean}},l=(n(371),n(13)),component=Object(l.a)(r,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"h-full",class:{"bg-logiclylightgrey":t.altrow,"!bg-logiclylightgrey":t.normal}},[e("div",{staticClass:"object-contain object-center w-full h-full bg-cover",class:{"bg-black bg-opacity-40":t.overlay}},[e("div",{staticClass:"container h-full mx-auto"},[e("div",{staticClass:"grid h-full py-16 md:py-20 grid-cols-12 md:grid-cols-15 px-6 md:px-0 mobileres"},[e("div",{staticClass:"flex flex-col justify-center col-span-10 col-start-2 md:col-span-9 md:col-start-4"},[t._t("default")],2)])])])])}),[],!1,null,"2c60def4",null);e.default=component.exports},369:function(t,e,n){var content=n(372);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(31).default)("ce01e464",content,!0,{sourceMap:!1})},370:function(t,e,n){var content=n(375);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(31).default)("6828059b",content,!0,{sourceMap:!1})},371:function(t,e,n){"use strict";n(369)},372:function(t,e,n){var r=n(30)((function(i){return i[1]}));r.push([t.i,"@media only screen and (max-width:500px){.mobileres[data-v-2c60def4]{padding-left:.5rem;padding-right:.5rem}}",""]),r.locals={},t.exports=r},373:function(t,e,n){"use strict";n.r(e);var r=n(24),l=(n(52),n(377),{name:"VueAspectRatio",props:{ar:{type:String,default:"1:1",validator:function(t){var e=t.split(":").map((function(t){return parseInt(t)})),n=Object(r.a)(e,2),l=n[0],o=n[1];return!Number.isNaN(l)&&!Number.isNaN(o)}},width:String},data:function(){return{w:null,h:null}},computed:{componentStyle:function(){return this.width?{width:this.width}:{}},innerStyle:function(){return{paddingTop:this.h/this.w*100+"%"}}},created:function(){var t=this.ar.split(":").map((function(t){return parseInt(t)})),e=Object(r.a)(t,2),n=e[0],l=e[1];this.w=n,this.h=l}}),o=(n(374),n(13)),component=Object(o.a)(l,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"vue-aspect-ratio",style:t.componentStyle},[e("div",{staticClass:"vue-aspect-ratio__inner",style:t.innerStyle},[e("div",{staticClass:"vue-aspect-ratio__content"},[t._t("default")],2)])])}),[],!1,null,"007c4c7c",null);e.default=component.exports},374:function(t,e,n){"use strict";n(370)},375:function(t,e,n){var r=n(30)((function(i){return i[1]}));r.push([t.i,".vue-aspect-ratio__inner[data-v-007c4c7c]{position:relative}.vue-aspect-ratio__content[data-v-007c4c7c]{height:100%;left:0;position:absolute;top:0;width:100%}",""]),r.locals={},t.exports=r},377:function(t,e,n){"use strict";n(2)({target:"Number",stat:!0},{isNaN:function(t){return t!=t}})},402:function(t,e,n){var content=n(412);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(31).default)("7beae4c4",content,!0,{sourceMap:!1})},411:function(t,e,n){"use strict";n(402)},412:function(t,e,n){var r=n(30)((function(i){return i[1]}));r.push([t.i,"@media only screen and (max-width:519px){.textresponsiveblack div[data-v-e5b74d8e]{margin-left:-1rem;margin-right:-1rem}}@media only screen and (max-width:450px){.textresponsiveblack div[data-v-e5b74d8e]{margin-left:-1.5rem;margin-right:-1.5rem}.textresponsiveblack h1[data-v-e5b74d8e]{font-size:.9rem}}@media only screen and (max-width:380px){.textresponsiveblack div[data-v-e5b74d8e]{margin-left:-3rem;margin-right:-3rem}}",""]),r.locals={},t.exports=r},454:function(t,e,n){"use strict";n.r(e);var r={name:"Hero",props:{heading:String,backgroundUrl:String,altrow:Boolean,overlay:Boolean}},l=(n(411),n(13)),component=Object(l.a)(r,(function(){var t=this,e=t._self._c;return e("AspectRatio",{style:{backgroundSize:"cover",backgroundImage:"url(".concat(t.backgroundUrl,")")},attrs:{ar:"3:1",width:"100%"}},[e("page-section",{attrs:{altrow:t.altrow,overlay:t.overlay}},[e("div",{staticClass:"-mt-20 sm:-mt-32 md:-mt-40 lg:-mt-48 mx-12 sm:mx-20 md:mx-24 lg:mx-40 xl:mx-56 px-8 md:px-0 xl:px-2 textresponsiveblack"},[e("div",[e("h1",{staticClass:"text-base sm:text-lg lg:text-xl font-semibold text-center text-black"},[t._v(t._s(t.heading))])])])])],1)}),[],!1,null,"e5b74d8e",null);e.default=component.exports;installComponents(component,{PageSection:n(368).default,AspectRatio:n(373).default})}}]);