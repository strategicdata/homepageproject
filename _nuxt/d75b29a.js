(window.webpackJsonp=window.webpackJsonp||[]).push([[20,3,6,10,15],{370:function(t,e,l){"use strict";l.r(e);var o={name:"PageSection",props:{altrow:Boolean,normal:Boolean,overlay:Boolean,nooverlay:Boolean,black:Boolean,noblack:Boolean}},n=(l(373),l(14)),component=Object(n.a)(o,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"h-full",class:{"bg-logiclylightgrey":t.altrow,"!bg-logiclylightgrey":t.normal}},[e("div",{staticClass:"object-contain object-center w-full h-full bg-cover",class:{"bg-black bg-opacity-40":t.overlay}},[e("div",{staticClass:"container h-full mx-auto"},[e("div",{staticClass:"grid h-full py-16 md:py-20 grid-cols-12 md:grid-cols-15 px-6 md:px-0 mobileres"},[e("div",{staticClass:"flex flex-col justify-center col-span-10 col-start-2 md:col-span-9 md:col-start-4"},[t._t("default")],2)])])])])}),[],!1,null,"2c60def4",null);e.default=component.exports},371:function(t,e,l){var content=l(374);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,l(32).default)("ce01e464",content,!0,{sourceMap:!1})},372:function(t,e,l){var content=l(377);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,l(32).default)("6828059b",content,!0,{sourceMap:!1})},373:function(t,e,l){"use strict";l(371)},374:function(t,e,l){var o=l(31)((function(i){return i[1]}));o.push([t.i,"@media only screen and (max-width:500px){.mobileres[data-v-2c60def4]{padding-left:.5rem;padding-right:.5rem}}",""]),o.locals={},t.exports=o},375:function(t,e,l){"use strict";l.r(e);var o=l(19),n=(l(53),l(378),{name:"VueAspectRatio",props:{ar:{type:String,default:"1:1",validator:function(t){var e=t.split(":").map((function(t){return parseInt(t)})),l=Object(o.a)(e,2),n=l[0],r=l[1];return!Number.isNaN(n)&&!Number.isNaN(r)}},width:String},data:function(){return{w:null,h:null}},computed:{componentStyle:function(){return this.width?{width:this.width}:{}},innerStyle:function(){return{paddingTop:this.h/this.w*100+"%"}}},created:function(){var t=this.ar.split(":").map((function(t){return parseInt(t)})),e=Object(o.a)(t,2),l=e[0],n=e[1];this.w=l,this.h=n}}),r=(l(376),l(14)),component=Object(r.a)(n,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"vue-aspect-ratio",style:t.componentStyle},[e("div",{staticClass:"vue-aspect-ratio__inner",style:t.innerStyle},[e("div",{staticClass:"vue-aspect-ratio__content"},[t._t("default")],2)])])}),[],!1,null,"007c4c7c",null);e.default=component.exports},376:function(t,e,l){"use strict";l(372)},377:function(t,e,l){var o=l(31)((function(i){return i[1]}));o.push([t.i,".vue-aspect-ratio__inner[data-v-007c4c7c]{position:relative}.vue-aspect-ratio__content[data-v-007c4c7c]{height:100%;left:0;position:absolute;top:0;width:100%}",""]),o.locals={},t.exports=o},378:function(t,e,l){"use strict";l(2)({target:"Number",stat:!0},{isNaN:function(t){return t!=t}})},379:function(t,e,l){var content=l(381);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,l(32).default)("2cc1a922",content,!0,{sourceMap:!1})},380:function(t,e,l){"use strict";l(379)},381:function(t,e,l){var o=l(31)((function(i){return i[1]}));o.push([t.i,"@media only screen and (max-width:520px){.textresponsive div[data-v-c6337172]{margin-left:2rem;margin-right:2rem;margin-top:-.7rem}}@media only screen and (max-width:450px){.textresponsive div[data-v-c6337172]{margin-top:-1.2rem}}@media only screen and (max-width:410px){.textresponsive div[data-v-c6337172]{margin-top:-2rem}.textresponsive div h1[data-v-c6337172]{font-size:.8rem}.textresponsive div h2[data-v-c6337172]{font-size:.9rem}}",""]),o.locals={},t.exports=o},382:function(t,e,l){"use strict";l.r(e);var o={name:"Hero",props:{heading:String,subheading:String,pageheroheading:String,backgroundUrl:String,right:Boolean,blacktext:Boolean,whitetext:Boolean,altrow:Boolean,overlay:Boolean}},n=(l(380),l(14)),component=Object(n.a)(o,(function(){var t=this,e=t._self._c;return e("AspectRatio",{style:{backgroundSize:"cover",backgroundImage:"url(".concat(t.backgroundUrl,")")},attrs:{ar:"13:4",width:"100%"}},[e("page-section",{attrs:{altrow:t.altrow,overlay:t.overlay}},[e("div",{staticClass:"w-full h-full textresponsive grid content-center"},[e("div",{staticClass:"mt-0"},[e("h1",{staticClass:"text-xs md:text-sm xl:text-base font-medium text-center text-white"},[t._v(t._s(t.heading))]),t._v(" "),e("h2",{staticClass:"text-base sm:text-lg md:text-xl xl:text-2xl font-semibold text-center leading-tight text-white"},[t._v(t._s(t.subheading))]),t._v(" "),e("h1",{staticClass:"text-base sm:text-lg lg:text-xl text-center text-white"},[t._v(t._s(t.pageheroheading))])])])])],1)}),[],!1,null,"c6337172",null);e.default=component.exports;installComponents(component,{PageSection:l(370).default,AspectRatio:l(375).default})},384:function(t,e,l){"use strict";l.r(e);var o={name:"Hero",props:{heading:String,subheading:String,iconurl:String,alttext:{type:String,default:"Image"},altrow:Boolean,imgwidth:String}},n=l(14),component=Object(n.a)(o,(function(){var t=this,e=t._self._c;return e("page-section",{staticClass:"lg:py-8",attrs:{altrow:t.altrow}},[e("div",{staticClass:"flex justify-center"},[e("div",{staticClass:"justify-center mb-6"},[e("img",{attrs:{width:t.imgwidth,src:t.iconurl,alt:t.alttext}})])]),t._v(" "),e("div",{staticClass:"px-0 xl:px-6"},[e("div",{staticClass:"text-center text-logiclytextgrey"},[e("h1",{staticClass:"text-2xl font-semibold leading-snug text-center pb-2 pt-4 xl:pt-8"},[t._v(t._s(t.heading))]),t._v(" "),e("h2",{staticClass:"font-light text-lg"},[t._v(t._s(t.subheading))])])])])}),[],!1,null,"19fb8b52",null);e.default=component.exports;installComponents(component,{PageSection:l(370).default})},542:function(t,e,l){"use strict";l.r(e);var o={head:function(){return{title:"Our culture · Logicly"}}},n=l(14),component=Object(n.a)(o,(function(){var t=this,e=t._self._c;return e("div",[e("Hero",{attrs:{heading:"OUR CULTURE",subheading:"Everyone has a say","background-url":"/Logicly-Our-culture-header-everyone-has-a-say.jpg",overlay:""}}),t._v(" "),e("Herotext",{attrs:{iconurl:"/Together-at-logicly.svg",imgwidth:"90px",alttext:"A graphic made of four colorful segments, symbolising a team working together",heading:"Together at Logicly",subheading:"We are a diverse team who encourages sharing of knowledge and ideas to always improve, streamline our way of working and add value to the systems we design and build for our clients.",altrow:""}}),t._v(" "),e("page-section",[e("h1",{staticClass:"pb-10 text-2xl font-semibold text-center text-logiclytextgrey"},[t._v("We continually build, share and leverage our knowledge")]),t._v(" "),e("img",{staticClass:"p-0 mb-4",attrs:{src:"/Continually-build-share-leverage-our-knowledge.jpg",alt:"Photo showing a group discussion"}}),t._v(" "),e("div",{staticClass:"grid grid-cols-8 gap-6 mt-8 -mb-16 lg:gap-x-12 lg:gap-y-10 text-logiclytextgrey lg:-mb-10"},[e("div",{staticClass:"col-span-8 lg:col-span-4"},[e("h2",{staticClass:"pb-1 text-lg font-bold"},[t._v("A family environment")]),t._v(" "),e("p",{staticClass:"font-light"},[t._v("At Logicly, we create a workplace where everyone feels welcome and encouraged to produce their best work. We have a flat structure where discussions and sharing of ideas is encouraged. The directors join in, listening and contributing to the mix of feedback and suggestions for improvements. The senior staff mentor the less experienced to share their skills and knowledge.")])]),t._v(" "),e("div",{staticClass:"col-span-8 lg:col-span-4 lg:col-start-5"},[e("h2",{staticClass:"pb-1 text-lg font-bold"},[t._v("The freedom to try new things")]),t._v(" "),e("p",{staticClass:"font-light"},[t._v("Logicly is all about the spirit of exploration, being playful with technology and discovering new ways of doing things that are quicker, easier or more suited for our team or clients. We believe that growth and knowledge comes from having a curious nature and we encourage our team to discover, experiment and learn from our successes, failures and each other.")])]),t._v(" "),e("div",{staticClass:"col-span-8 lg:col-span-4"},[e("h2",{staticClass:"pb-1 text-lg font-bold"},[t._v("Work/life balance")]),t._v(" "),e("p",{staticClass:"font-light"},[t._v("We believe that quality time outside the office is vital to our employees’ satisfaction at work. That’s why we offer flexitime to support family and study needs. A normal working day and taking time off to remain refreshed is encouraged.")])]),t._v(" "),e("div",{staticClass:"col-span-8 lg:col-span-4 lg:col-start-5"},[e("h2",{staticClass:"pb-1 text-lg font-bold"},[t._v("Pride and openness in what we do")]),t._v(" "),e("p",{staticClass:"font-light"},[t._v("From the start of a project we’re invested in meeting the needs of our clients and making sure we are the best fit for the work. We give realistic expectations and timings for a project or stage and will always communicate any concerns. We go the extra mile to get the product right.")])])])]),t._v(" "),e("page-section",[e("div",{staticClass:"grid grid-cols-12 bg-logiclylightgrey"},[e("div",{staticClass:"col-span-12"},[e("img",{staticClass:"p-0 mb-5",attrs:{src:"/Join-our-team.jpg",alt:"Photo showing a man in an interview context"}})]),t._v(" "),e("div",{staticClass:"col-span-10 col-start-2 mt-4 lg:mt-8"},[e("h1",{staticClass:"mb-1 text-2xl font-semibold lg:mb-4 text-logiclytheme2"},[t._v("Join our team")])]),t._v(" "),e("div",{staticClass:"col-span-10 col-start-2 mb-4 lg:col-span-5 lg:col-start-2"},[e("h2",{staticClass:"pr-0 text-xl font-semibold leading-snug text-logiclytextgrey lg:pr-8"},[t._v("Are you excited about learning, sharing knowledge and solving information problems?")])]),t._v(" "),e("div",{staticClass:"col-span-10 col-start-2 pb-8 mb-5 lg:col-span-5 lg:col-start-7 lg:pb-12"},[e("p",{staticClass:"pb-6 text-logiclytextgrey lg:pb-8"},[t._v("Logicly is always looking for strategic thinkers, designers and technology experts interested in working collaboratively to develop digital systems that improve businesses, government departments and communities.")]),t._v(" "),e("NuxtLink",{staticClass:"block p-3 font-medium text-center text-white lowercase bg-logiclyorange hover:bg-logiclyhover",attrs:{to:"/contactus"}},[t._v("Enquire about joining us")])],1)])]),t._v(" "),e("page-section",[e("img",{staticClass:"content-center h-24",attrs:{src:"Our_mission.svg",alt:"Circle with four cake pieces in different colours"}}),t._v(" "),e("div",{staticClass:"flex justify-center"},[e("div",{staticClass:"justify-center mb-6"},[e("h1",{staticClass:"text-2xl font-semibold leading-snug text-center pb-2 pt-4 xl:pt-8"},[t._v("Our mission")]),t._v(" "),e("h2",{staticClass:"font-light text-lg text-center"},[t._v("We thoughtfully design digital systems that solve our clients’ complex information problems.")])])]),t._v(" "),e("div",{staticClass:"grid grid-cols-12 px-0 pb-0 mb-0 text-logiclytextgrey"},[e("div",{staticClass:"col-span-12 text-center mt-6"},[e("h3",{staticClass:"pb-4 text-lg font-bold text-center xl:pb-6"},[t._v("\n            We do this by:\n          ")])]),t._v(" "),e("div",{staticClass:"col-span-12 pb-4 border-t-2 border-logiclygreytwo xl:pb-8"}),t._v(" "),e("div",{staticClass:"col-span-12 xl:col-span-3"}),t._v(" "),e("div",{staticClass:"col-span-1 ml-2 border-l-2 block border-logiclytheme1"},[e("div",{staticClass:"w-6 h-6 -ml-3 rounded-full bg-logiclygreythree"})]),t._v(" "),e("div",{staticClass:"col-span-11 xl:col-span-6 pl-4 xl:-ml-12 pb-4 sm:pb-8 xl:pb-16"},[e("h3",{staticClass:"pb-3 font-medium xl:pt-0"},[t._v("\n            Listening carefully and questioning thoughtfully.\n          ")])]),t._v(" "),e("div",{staticClass:"col-span-12 xl:col-span-3"}),t._v(" "),e("div",{staticClass:"col-span-1 ml-2 border-l-2 block border-logiclytheme2"},[e("div",{staticClass:"w-6 h-6 -ml-3 rounded-full bg-logiclygreythree"})]),t._v(" "),e("div",{staticClass:"col-span-11 xl:col-span-6 pl-4 xl:-ml-12 pb-4 sm:pb-8 xl:pb-16"},[e("h3",{staticClass:"pb-3 font-medium xl:pt-0"},[t._v("\n          Offering frank and fearless advice.\n        ")])]),t._v(" "),e("div",{staticClass:"col-span-12 xl:col-span-3"}),t._v(" "),e("div",{staticClass:"col-span-1 ml-2 border-l-2 block border-logiclytheme4"},[e("div",{staticClass:"w-6 h-6 -ml-3 rounded-full bg-logiclygreythree"})]),t._v(" "),e("div",{staticClass:"col-span-11 xl:col-span-6 pl-4 xl:-ml-12 pb-4 sm:pb-8 xl:pb-16"},[e("h3",{staticClass:"pb-3 font-medium xl:pt-0"},[t._v("\n          Being responsive, flexible and creative.\n        ")])]),t._v(" "),e("div",{staticClass:"col-span-12 xl:col-span-3"}),t._v(" "),e("div",{staticClass:"col-span-1 ml-2 border-l-2 block border-logiclytheme3"},[e("div",{staticClass:"w-6 h-6 -ml-3 rounded-full bg-logiclygreythree"})]),t._v(" "),e("div",{staticClass:"col-span-11 xl:col-span-6 pl-4 xl:-ml-12 pb-4 sm:pb-8 xl:pb-16"},[e("h3",{staticClass:"pb-3 font-medium xl:pt-0"},[t._v("\n          Operating ethically and respectfully.\n        ")])]),t._v(" "),e("div",{staticClass:"col-span-12 xl:col-span-3"}),t._v(" "),e("div",{staticClass:"col-span-1 ml-2 border-l-2 block border-none"},[e("div",{staticClass:"w-6 h-6 -ml-3 rounded-full bg-logiclygreythree"})]),t._v(" "),e("div",{staticClass:"col-span-11 xl:col-span-6 pl-4 xl:-ml-12 pb-4 sm:pb-8 xl:pb-16"},[e("h3",{staticClass:"pb-3 font-medium xl:pt-0"},[t._v("\n          Having an enjoyable and supportive workplace.\n        ")])])]),t._v(" "),e("div",{staticClass:"flex justify-center"},[e("div",{staticClass:"justify-center mb-6"},[e("h2",{staticClass:"font-light text-lg text-center"},[t._v("Logicly is constituted by its shareholders, directors, employees, clients, suppliers, partners and the local community. Logicly is committed to contributing to positive environmental and social impact outcomes.")])])])])],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Hero:l(382).default,Herotext:l(384).default,PageSection:l(370).default})}}]);