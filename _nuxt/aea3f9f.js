(window.webpackJsonp=window.webpackJsonp||[]).push([[37,4,10,12,15],{370:function(t,e,l){"use strict";l.r(e);var o={name:"PageSection",props:{altrow:Boolean,normal:Boolean,overlay:Boolean,nooverlay:Boolean,black:Boolean,noblack:Boolean}},n=(l(373),l(14)),component=Object(n.a)(o,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"h-full",class:{"bg-logiclylightgrey":t.altrow,"!bg-logiclylightgrey":t.normal}},[e("div",{staticClass:"object-contain object-center w-full h-full bg-cover",class:{"bg-black bg-opacity-40":t.overlay}},[e("div",{staticClass:"container h-full mx-auto"},[e("div",{staticClass:"grid h-full py-16 md:py-20 grid-cols-12 md:grid-cols-15 px-6 md:px-0 mobileres"},[e("div",{staticClass:"flex flex-col justify-center col-span-10 col-start-2 md:col-span-9 md:col-start-4"},[t._t("default")],2)])])])])}),[],!1,null,"2c60def4",null);e.default=component.exports},371:function(t,e,l){var content=l(374);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,l(32).default)("ce01e464",content,!0,{sourceMap:!1})},372:function(t,e,l){var content=l(377);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,l(32).default)("6828059b",content,!0,{sourceMap:!1})},373:function(t,e,l){"use strict";l(371)},374:function(t,e,l){var o=l(31)((function(i){return i[1]}));o.push([t.i,"@media only screen and (max-width:500px){.mobileres[data-v-2c60def4]{padding-left:.5rem;padding-right:.5rem}}",""]),o.locals={},t.exports=o},375:function(t,e,l){"use strict";l.r(e);var o=l(19),n=(l(53),l(378),{name:"VueAspectRatio",props:{ar:{type:String,default:"1:1",validator:function(t){var e=t.split(":").map((function(t){return parseInt(t)})),l=Object(o.a)(e,2),n=l[0],r=l[1];return!Number.isNaN(n)&&!Number.isNaN(r)}},width:String},data:function(){return{w:null,h:null}},computed:{componentStyle:function(){return this.width?{width:this.width}:{}},innerStyle:function(){return{paddingTop:this.h/this.w*100+"%"}}},created:function(){var t=this.ar.split(":").map((function(t){return parseInt(t)})),e=Object(o.a)(t,2),l=e[0],n=e[1];this.w=l,this.h=n}}),r=(l(376),l(14)),component=Object(r.a)(n,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"vue-aspect-ratio",style:t.componentStyle},[e("div",{staticClass:"vue-aspect-ratio__inner",style:t.innerStyle},[e("div",{staticClass:"vue-aspect-ratio__content"},[t._t("default")],2)])])}),[],!1,null,"007c4c7c",null);e.default=component.exports},376:function(t,e,l){"use strict";l(372)},377:function(t,e,l){var o=l(31)((function(i){return i[1]}));o.push([t.i,".vue-aspect-ratio__inner[data-v-007c4c7c]{position:relative}.vue-aspect-ratio__content[data-v-007c4c7c]{height:100%;left:0;position:absolute;top:0;width:100%}",""]),o.locals={},t.exports=o},379:function(t,e,l){var content=l(381);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,l(32).default)("2cc1a922",content,!0,{sourceMap:!1})},380:function(t,e,l){"use strict";l(379)},381:function(t,e,l){var o=l(31)((function(i){return i[1]}));o.push([t.i,"@media only screen and (max-width:520px){.textresponsive div[data-v-c6337172]{margin-left:2rem;margin-right:2rem;margin-top:-.7rem}}@media only screen and (max-width:450px){.textresponsive div[data-v-c6337172]{margin-top:-1.2rem}}@media only screen and (max-width:410px){.textresponsive div[data-v-c6337172]{margin-top:-2rem}.textresponsive div h1[data-v-c6337172]{font-size:.8rem}.textresponsive div h2[data-v-c6337172]{font-size:.9rem}}",""]),o.locals={},t.exports=o},382:function(t,e,l){"use strict";l.r(e);var o={name:"Hero",props:{heading:String,subheading:String,pageheroheading:String,backgroundUrl:String,right:Boolean,blacktext:Boolean,whitetext:Boolean,altrow:Boolean,overlay:Boolean}},n=(l(380),l(14)),component=Object(n.a)(o,(function(){var t=this,e=t._self._c;return e("AspectRatio",{style:{backgroundSize:"cover",backgroundImage:"url(".concat(t.backgroundUrl,")")},attrs:{ar:"13:4",width:"100%"}},[e("page-section",{attrs:{altrow:t.altrow,overlay:t.overlay}},[e("div",{staticClass:"w-full h-full textresponsive grid content-center"},[e("div",{staticClass:"mt-0"},[e("h1",{staticClass:"text-xs md:text-sm xl:text-base font-medium text-center text-white"},[t._v(t._s(t.heading))]),t._v(" "),e("h2",{staticClass:"text-base sm:text-lg md:text-xl xl:text-2xl font-semibold text-center leading-tight text-white"},[t._v(t._s(t.subheading))]),t._v(" "),e("h1",{staticClass:"text-base sm:text-lg lg:text-xl text-center text-white"},[t._v(t._s(t.pageheroheading))])])])])],1)}),[],!1,null,"c6337172",null);e.default=component.exports;installComponents(component,{PageSection:l(370).default,AspectRatio:l(375).default})},383:function(t,e,l){var content=l(388);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,l(32).default)("7bd89f3c",content,!0,{sourceMap:!1})},384:function(t,e,l){"use strict";l.r(e);var o={name:"Hero",props:{heading:String,subheading:String,iconurl:String,alttext:{type:String,default:"Image"},altrow:Boolean,imgwidth:String}},n=l(14),component=Object(n.a)(o,(function(){var t=this,e=t._self._c;return e("page-section",{staticClass:"lg:py-8",attrs:{altrow:t.altrow}},[e("div",{staticClass:"flex justify-center"},[e("div",{staticClass:"justify-center mb-6"},[e("img",{attrs:{width:t.imgwidth,src:t.iconurl,alt:t.alttext}})])]),t._v(" "),e("div",{staticClass:"px-0 xl:px-6"},[e("div",{staticClass:"text-center text-logiclytextgrey"},[e("h1",{staticClass:"text-2xl font-semibold leading-snug text-center pb-2 pt-4 xl:pt-8"},[t._v(t._s(t.heading))]),t._v(" "),e("h2",{staticClass:"font-light text-lg"},[t._v(t._s(t.subheading))])])])])}),[],!1,null,"19fb8b52",null);e.default=component.exports;installComponents(component,{PageSection:l(370).default})},387:function(t,e,l){"use strict";l(383)},388:function(t,e,l){var o=l(31)((function(i){return i[1]}));o.push([t.i,"button>a[data-v-03699575]{text-transform:lowercase!important}",""]),o.locals={},t.exports=o},390:function(t,e,l){"use strict";l.r(e);var o={name:"CTA",props:{text:String,buttonLink:String,buttonText:String}},n=(l(387),l(14)),component=Object(n.a)(o,(function(){var t=this,e=t._self._c;return e("page-section",[e("div",{staticClass:"content-center object-contain object-center w-full text-logiclytextgrey"},[e("h1",{staticClass:"text-2xl font-semibold leading-snug text-center text-logiclytextgrey"},[t._v(t._s(t.text))]),t._v(" "),e("div",{staticClass:"grid justify-center pt-4 align-center"},[e("button",{staticClass:"block w-40 h-12 my-5 font-medium text-center text-white bg-logiclyorange hover:bg-logiclyhover"},[e("NuxtLink",{attrs:{to:t.buttonLink}},[t._v(t._s(t.buttonText))])],1)])])])}),[],!1,null,"03699575",null);e.default=component.exports;installComponents(component,{Button:l(158).default,PageSection:l(370).default})},400:function(t,e,l){var content=l(414);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,l(32).default)("f3d5f128",content,!0,{sourceMap:!1})},401:function(t,e,l){var content=l(416);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,l(32).default)("a0c92e60",content,!0,{sourceMap:!1})},413:function(t,e,l){"use strict";l(400)},414:function(t,e,l){var o=l(31)((function(i){return i[1]}));o.push([t.i,".overlay[data-v-20bb00e9]{background-color:rgba(0,0,0,.35)!important;z-index:10}",""]),o.locals={},t.exports=o},415:function(t,e,l){"use strict";l(401)},416:function(t,e,l){var o=l(31)((function(i){return i[1]}));o.push([t.i,".overlay[data-v-1d04ca78]{background-color:rgba(0,0,0,.25)!important;z-index:10}",""]),o.locals={},t.exports=o},449:function(t,e,l){var content=l(512);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,l(32).default)("140d0d66",content,!0,{sourceMap:!1})},458:function(t,e,l){"use strict";l.r(e);var o={name:"ImageUrl",props:{overlaytext:String,imageurl:String,altrow:Boolean,height:String}},n=(l(413),l(14)),component=Object(n.a)(o,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"object-contain object-center w-full bg-cover",style:{backgroundImage:"url(".concat(t.imageurl,")"),height:t.height}},[e("div",{staticClass:"relative overlay",staticStyle:{height:"100%"}},[e("div",{staticClass:"relative z-10 grid grid-rows-5 grid-cols-5",staticStyle:{height:"100%"}},[e("div",{staticClass:"row-start-4 col-start-2 col-span-3 grid content-center lg:pt-10 text-xl leading-snug font-medium md:font-semibold text-center text-white"},[e("span",{domProps:{innerHTML:t._s(t.overlaytext)}})])])])])}),[],!1,null,"20bb00e9",null);e.default=component.exports},459:function(t,e,l){"use strict";l.r(e);var o={name:"ImageUrl",props:{overlaytext:String,imageurl:String,right:Boolean,blacktext:Boolean,whitetext:Boolean,altrow:Boolean,overlay:Boolean}},n=(l(415),l(14)),component=Object(n.a)(o,(function(){var t=this,e=t._self._c;return e("AspectRatio",{style:{backgroundSize:"cover",backgroundImage:"url(".concat(t.imageurl,")")},attrs:{ar:"7:4",width:"100%"}},[e("page-section",{attrs:{altrow:t.altrow,overlay:t.overlay}},[e("div",{staticClass:"w-full h-full textresponsive grid content-end"},[e("div",{staticClass:"text-xl font-medium text-center text-white leading-snug mt-8"},[e("span",{domProps:{innerHTML:t._s(t.overlaytext)}})])])])],1)}),[],!1,null,"1d04ca78",null);e.default=component.exports;installComponents(component,{PageSection:l(370).default,AspectRatio:l(375).default})},507:function(t,e,l){t.exports=l.p+"img/Logicly-who-we-help-header-our-clients-approach-us-with-a-range-of-challenges.2c92e54.jpg"},511:function(t,e,l){"use strict";l(449)},512:function(t,e,l){var o=l(31)((function(i){return i[1]}));o.push([t.i,".overlay-height{height:485px}@media only screen and (max-width:1280px){.overlay-height{height:385px}}@media only screen and (max-width:1024px){.overlay-height{height:290px}}@media only screen and (max-width:768px){.overlay-height{height:250px}}@media only screen and (max-width:640px){.overlay-height{height:350px}}.vsa-item__trigger__icon--is-default{transform:rotate(270deg);width:40px!important}.vsa-list{--vsa-border-width:0px;border:none;border-bottom:1px solid #e84e1b!important;max-width:100%}.vsa-item{border:none;border-top:1px solid #e84e1b!important;min-height:5rem}.vsa-item__trigger:focus,.vsa-item__trigger:hover{background-color:#e84e1b!important;color:#fff!important;margin-bottom:0;min-height:5rem}.vsa-item--is-active .vsa-item__heading{border-bottom:none!important}.vsa-item__trigger__icon--is-default:after,.vsa-item__trigger__icon--is-default:before{background-color:#9c9b9b}.vsa-list{--vsa-min-width:280px}.vsa-item__trigger:focus img,.vsa-item__trigger:hover img{filter:brightness(0) saturate(100%) invert(100%)}",""]),o.locals={},t.exports=o},539:function(t,e,l){"use strict";l.r(e);var o=l(507),n=l.n(o),r=l(508),c=(l(509),{components:{VsaList:r.VsaList,VsaItem:r.VsaItem,VsaHeading:r.VsaHeading,VsaContent:r.VsaContent,VsaIcon:r.VsaIcon},data:function(){return{backgroundUrl:n.a}},head:function(){return{title:"Who we help · Logicly"}}}),d=(l(511),l(14)),component=Object(d.a)(c,(function(){var t=this,e=t._self._c;return e("div",[e("Hero",{attrs:{heading:"WHO WE HELP",subheading:"Our clients approach us with a range of challenges","background-url":"/Logicly-who-we-help-header-our-clients-approach-us-with-a-range-of-challenges.jpg",overlay:""}}),t._v(" "),e("Herotext",{attrs:{iconurl:"We-help-people-understand-all-the-possibilities.svg",imgwidth:"310px",alttext:"Symbol showing unique building blocks",heading:"We help people understand all the possibilities",subheading:"We help clients understand the power of technology to improve efficiencies and gain quality information\n            to inform critical decisions. We guide our clients through the possible pathways and alternatives. It is\n            rare that any two projects are the same so every digital system is designed for your specific needs and vision.",altrow:""}}),t._v(" "),e("page-section",{staticClass:"hidden sm:block"},[e("div",{staticClass:"w-full"},[e("light-overlay-image",{staticClass:"overlay-height",attrs:{imageurl:"/different_audiences.jpg",overlaytext:"Different audiences. </br>Different information needs. </br>Different systems."}})],1)]),t._v(" "),e("div",{staticClass:"block sm:hidden"},[e("light-overlay-image-mob",{attrs:{overlay:"",imageurl:"/different_audiences.jpg",overlaytext:"Different audiences. </br>Different information needs. </br>Different systems."}})],1),t._v(" "),e("page-section",[e("div",{staticClass:"text-logiclytextgrey"},[e("h2",{staticClass:"text-xl sm:text-2xl font-semibold text-center mb-10 lg:mb-12 xl:mb-16 sm:-mt-16 md:-mt-20"},[t._v("We work with clients across different industries to understand their internal and external stakeholders so that the systems we build really do meet their needs.")]),t._v(" "),e("vsa-list",[e("vsa-item",{staticClass:"grid content-center"},[e("vsa-heading",[e("div",{staticClass:"grid grid-cols-5 lg:grid-cols-11"},[e("div",{staticClass:"col-span-1"},[e("img",{staticClass:"w-8 lg:w-10",attrs:{src:"/Researchers.svg",alt:"Checklist icon"}})]),t._v(" "),e("div",{staticClass:"flex flex-col justify-center col-span-4 lg:col-span-10 pl-6 md:pl-8 lg:pl-12 lg:ml-2"},[e("h2",{staticClass:"font-semibold text-lg sm:text-xl text-left"},[t._v("Researchers")])])])]),t._v(" "),e("vsa-content",[e("div",{staticClass:"grid grid-cols-11"},[e("div",{staticClass:"col-span-11 lg:col-span-10 col-start-1 lg:col-start-3 lg:-ml-4 xl:-ml-12 pl-0 lg:pl-2 xl:pl-3"},[e("h3",{staticClass:"text-sm sm:text-base font-bold pb-1"},[t._v("Our Senior Consultants have a long history of working with research, and we understand how to help researchers:")]),t._v(" "),e("ul",{staticClass:"text-sm sm:text-base list-disc ml-5 pb-4 lg:pb-8"},[e("li",[t._v("Implement ethical and robust data collections that keep the end user in mind")]),t._v(" "),e("li",[t._v("Manage information challenges for research or evaluation projects")]),t._v(" "),e("li",[t._v("Collect data from a variety of participants by building user-friendly data collection processes")]),t._v(" "),e("li",[t._v("Support participants at every stage of the research by building in safety mechanisms")]),t._v(" "),e("li",[t._v("Define data requirements and costs for research grant submissions")]),t._v(" "),e("li",[t._v("Design and create information networks")])])])])])],1),t._v(" "),e("vsa-item",{staticClass:"grid content-center"},[e("vsa-heading",[e("div",{staticClass:"grid grid-cols-5 lg:grid-cols-11"},[e("div",{staticClass:"col-span-1 accordion-img"},[e("img",{staticClass:"lg:w-12",attrs:{src:"/Government.svg",alt:"Government icon"}})]),t._v(" "),e("div",{staticClass:"flex flex-col justify-center col-span-4 lg:col-span-10 pl-6 md:pl-8 lg:pl-12"},[e("h2",{staticClass:"font-semibold text-lg sm:text-xl text-left"},[t._v("Government")])])])]),t._v(" "),e("vsa-content",[e("div",{staticClass:"grid grid-cols-11"},[e("div",{staticClass:"col-span-11 lg:col-span-10 col-start-1 lg:col-start-3 lg:-ml-4 xl:-ml-12 pl-0 lg:pl-2 xl:pl-3"},[e("h3",{staticClass:"text-sm sm:text-base font-bold pb-1"},[t._v("Over 20 years we’ve partnered with our government clients to understand their stakeholders, help design empathic technical solutions and manage the implementation of complex projects. We will work with you to:")]),t._v(" "),e("ul",{staticClass:"text-sm sm:text-base list-disc ml-5 pb-4 lg:pb-8"},[e("li",[t._v("Co-design technical solutions that make adoption of the system as low friction as possible for clients and end users")]),t._v(" "),e("li",[t._v("Build user-friendly, intuitive and automated solutions that reduce the workload for government and public users")]),t._v(" "),e("li",[t._v("Meet timelines, privacy and security compliance obligations")]),t._v(" "),e("li",[t._v("Collect data to inform policy and deliver services")]),t._v(" "),e("li",[t._v("Design and develop reporting systems to inform stakeholders")]),t._v(" "),e("li",[t._v("Understand how funding services affects outcomes to help plan for the future")]),t._v(" "),e("li",[t._v("Transition from paper data collection to sophisticated, easy-to-use online collections")]),t._v(" "),e("li",[t._v("Implement time-saving automated solutions")]),t._v(" "),e("li",[t._v("Work with states and territories with different laws and statutory requirements to develop national solutions to complex information challenges")])])])])])],1),t._v(" "),e("vsa-item",{staticClass:"grid content-center"},[e("vsa-heading",[e("div",{staticClass:"grid grid-cols-5 lg:grid-cols-11"},[e("div",{staticClass:"col-span-1"},[e("img",{staticClass:"w-10 lg:w-12",attrs:{src:"/Health.svg",alt:"Health icon"}})]),t._v(" "),e("div",{staticClass:"flex flex-col justify-center col-span-4 lg:col-span-10 pl-4 sm:pl-5 md:pl-8 lg:pl-12"},[e("h2",{staticClass:"font-semibold text-lg sm:text-xl text-left"},[t._v("Health")])])])]),t._v(" "),e("vsa-content",[e("div",{staticClass:"grid grid-cols-11"},[e("div",{staticClass:"col-span-11 lg:col-span-10 col-start-1 lg:col-start-3 lg:-ml-4 xl:-ml-12 pl-0 lg:pl-2 xl:pl-3"},[e("h3",{staticClass:"text-sm sm:text-base font-bold pb-1"},[t._v("Logicly understands the requirements of data management in health settings. Throughout our history we’ve worked with clients to:")]),t._v(" "),e("ul",{staticClass:"text-sm sm:text-base list-disc ml-5 pb-4 lg:pb-8"},[e("li",[t._v("Design effective solutions using our understanding of mental health, human services and the health system")]),t._v(" "),e("li",[t._v("Use empathic design logic to cater for multiple stakeholders and end users (eg. 31 entities in the Primary Health Network)")]),t._v(" "),e("li",[t._v("Evaluate the effectiveness of a health service")]),t._v(" "),e("li",[t._v("Create a national and integrated digital system")]),t._v(" "),e("li",[t._v("Safely pull data from multiple entities, collecting and integrating it into one national platform")]),t._v(" "),e("li",[t._v("Digitise risk assessments")]),t._v(" "),e("li",[t._v("Design flexible digital systems to help predict the severity of patients and provide the right treatment")])])])])])],1),t._v(" "),e("vsa-item",{staticClass:"grid content-center"},[e("vsa-heading",[e("div",{staticClass:"grid grid-cols-5 lg:grid-cols-11"},[e("div",{staticClass:"col-span-1"},[e("img",{staticClass:"w-10 lg:w-12",attrs:{src:"/Education.svg",alt:"Graduation hat icon"}})]),t._v(" "),e("div",{staticClass:"flex flex-col justify-center col-span-4 lg:col-span-10 pl-4 sm:pl-5 md:pl-8 lg:pl-12"},[e("h2",{staticClass:"font-semibold text-lg sm:text-xl text-left"},[t._v("Education")])])])]),t._v(" "),e("vsa-content",[e("div",{staticClass:"grid grid-cols-11"},[e("div",{staticClass:"col-span-11 lg:col-span-10 col-start-1 lg:col-start-3 lg:-ml-4 xl:-ml-12 pl-0 lg:pl-2 xl:pl-3"},[e("h3",{staticClass:"text-sm sm:text-base font-bold pb-1"},[t._v("With experience running multiple large census projects across schools and kindergartens to small, time-sensitive data collections regarding attendance and expenditure, Logicly has worked with the education sector to:")]),t._v(" "),e("ul",{staticClass:"text-sm sm:text-base list-disc ml-5 pb-4 lg:pb-8"},[e("li",[t._v("Build secure data collection tools to record enrolment data to assist with funding planning")]),t._v(" "),e("li",[t._v("Build simple, user-friendly digital applications to help capture complex information complex projects")]),t._v(" "),e("li",[t._v("Collect information to inform policy or meet key Department reporting requirements")]),t._v(" "),e("li",[t._v("Capture complex service information with as little impact on users as possible")])])])])])],1),t._v(" "),e("vsa-item",{staticClass:"grid content-center"},[e("vsa-heading",[e("div",{staticClass:"grid grid-cols-5 lg:grid-cols-11"},[e("div",{staticClass:"col-span-1"},[e("img",{staticClass:"w-10 lg:w-12",attrs:{src:"Non-Government.svg",alt:"Hand and heart icon"}})]),t._v(" "),e("div",{staticClass:"flex flex-col justify-center col-span-4 lg:col-span-10 pl-4 sm:pl-5 md:pl-8 lg:pl-12"},[e("h2",{staticClass:"text-left text-lg sm:text-xl font-semibold -mr-10"},[t._v("Non-government")])])])]),t._v(" "),e("vsa-content",[e("div",{staticClass:"grid grid-cols-11"},[e("div",{staticClass:"col-span-11 lg:col-span-10 col-start-1 lg:col-start-3 lg:-ml-4 xl:-ml-12 pl-0 lg:pl-2 xl:pl-3"},[e("h3",{staticClass:"text-sm sm:text-base font-bold pb-1"},[t._v("Logicly’s hands on approach means we can work with the subject matter experts to help them:")]),t._v(" "),e("ul",{staticClass:"text-sm sm:text-base list-disc ml-5 pb-4 lg:pb-8"},[e("li",[t._v("Collate research information to guide pilot programs")]),t._v(" "),e("li",[t._v("Use sophisticated analysis to assess the design and implementation of pilot programs")]),t._v(" "),e("li",[t._v("Produce a quick way to have information available for analysis")]),t._v(" "),e("li",[t._v("Build systems to help stakeholders gain a complete story of people’s experience and outcomes")])])])])])],1),t._v(" "),e("vsa-item",{staticClass:"grid content-center"},[e("vsa-heading",[e("div",{staticClass:"grid grid-cols-5 lg:grid-cols-11"},[e("div",{staticClass:"col-span-1"},[e("img",{staticClass:"w-10 lg:w-12",attrs:{src:"/Corporate.svg",alt:"Office icon"}})]),t._v(" "),e("div",{staticClass:"flex flex-col justify-center col-span-4 lg:col-span-10 pl-4 sm:pl-5 md:pl-8 lg:pl-12"},[e("h2",{staticClass:"font-semibold text-lg sm:text-xl text-left"},[t._v("Corporate")])])])]),t._v(" "),e("vsa-content",[e("div",{staticClass:"grid grid-cols-11"},[e("div",{staticClass:"col-span-11 lg:col-span-10 col-start-1 lg:col-start-3 lg:-ml-4 xl:-ml-12 pl-0 lg:pl-2 xl:pl-3"},[e("h3",{staticClass:"text-sm sm:text-base font-bold pb-1"},[t._v("Over the past 20 years we’ve worked with a number of corporate clients to:")]),t._v(" "),e("ul",{staticClass:"text-sm sm:text-base list-disc ml-5 pb-4 lg:pb-8"},[e("li",[t._v("Develop a business case for senior decision makers")]),t._v(" "),e("li",[t._v("Co-design customised interactive dashboards or systems to make more informed decisions")]),t._v(" "),e("li",[t._v("Develop an easy way to manage employees, reviews, make comments and prioritise tasks")]),t._v(" "),e("li",[t._v("Transition from a manual system to a web platform")]),t._v(" "),e("li",[t._v("Build platforms to fit with people’s mobile lifestyle, using the principles of ease of use and accessibility to increase the usability of the application")]),t._v(" "),e("li",[t._v("Replace Excel spreadsheets with efficient systems, using in-built validations and checks to reinforce data quality")]),t._v(" "),e("li",[t._v("Design secure industry monitoring tools that businesses can rely on")]),t._v(" "),e("li",[t._v("Build systems that reduce time, effort and reduce errors")])])])])])],1)],1)],1)]),t._v(" "),e("page-section",{staticClass:"hidden sm:block"},[e("div",{staticClass:"w-full mx-auto"},[e("light-overlay-image",{staticClass:"overlay-height",attrs:{imageurl:"/What-are-your-information-and-digital-needs.jpg",overlaytext:"What are your information and digital needs?"}})],1)]),t._v(" "),e("div",{staticClass:"block sm:hidden"},[e("light-overlay-image-mob",{attrs:{overlay:"",imageurl:"/What-are-your-information-and-digital-needs.jpg",overlaytext:"What are your information and digital needs?"}})],1),t._v(" "),e("CTA",{attrs:{text:"Discover how we can help",buttonText:"What we do",buttonLink:"/whatwedo"}})],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Hero:l(382).default,Herotext:l(384).default,LightOverlayImage:l(458).default,PageSection:l(370).default,LightOverlayImageMob:l(459).default,CTA:l(390).default})}}]);