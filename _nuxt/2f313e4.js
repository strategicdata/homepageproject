(window.webpackJsonp=window.webpackJsonp||[]).push([[33,3,15],{370:function(t,e,l){"use strict";l.r(e);var r={name:"PageSection",props:{altrow:Boolean,normal:Boolean,overlay:Boolean,nooverlay:Boolean,black:Boolean,noblack:Boolean}},n=(l(373),l(14)),component=Object(n.a)(r,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"h-full",class:{"bg-logiclylightgrey":t.altrow,"!bg-logiclylightgrey":t.normal}},[e("div",{staticClass:"object-contain object-center w-full h-full bg-cover",class:{"bg-black bg-opacity-40":t.overlay}},[e("div",{staticClass:"container h-full mx-auto"},[e("div",{staticClass:"grid h-full py-16 md:py-20 grid-cols-12 md:grid-cols-15 px-6 md:px-0 mobileres"},[e("div",{staticClass:"flex flex-col justify-center col-span-10 col-start-2 md:col-span-9 md:col-start-4"},[t._t("default")],2)])])])])}),[],!1,null,"2c60def4",null);e.default=component.exports},371:function(t,e,l){var content=l(374);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,l(32).default)("ce01e464",content,!0,{sourceMap:!1})},372:function(t,e,l){var content=l(377);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,l(32).default)("6828059b",content,!0,{sourceMap:!1})},373:function(t,e,l){"use strict";l(371)},374:function(t,e,l){var r=l(31)((function(i){return i[1]}));r.push([t.i,"@media only screen and (max-width:500px){.mobileres[data-v-2c60def4]{padding-left:.5rem;padding-right:.5rem}}",""]),r.locals={},t.exports=r},375:function(t,e,l){"use strict";l.r(e);var r=l(19),n=(l(53),l(378),{name:"VueAspectRatio",props:{ar:{type:String,default:"1:1",validator:function(t){var e=t.split(":").map((function(t){return parseInt(t)})),l=Object(r.a)(e,2),n=l[0],o=l[1];return!Number.isNaN(n)&&!Number.isNaN(o)}},width:String},data:function(){return{w:null,h:null}},computed:{componentStyle:function(){return this.width?{width:this.width}:{}},innerStyle:function(){return{paddingTop:this.h/this.w*100+"%"}}},created:function(){var t=this.ar.split(":").map((function(t){return parseInt(t)})),e=Object(r.a)(t,2),l=e[0],n=e[1];this.w=l,this.h=n}}),o=(l(376),l(14)),component=Object(o.a)(n,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"vue-aspect-ratio",style:t.componentStyle},[e("div",{staticClass:"vue-aspect-ratio__inner",style:t.innerStyle},[e("div",{staticClass:"vue-aspect-ratio__content"},[t._t("default")],2)])])}),[],!1,null,"007c4c7c",null);e.default=component.exports},376:function(t,e,l){"use strict";l(372)},377:function(t,e,l){var r=l(31)((function(i){return i[1]}));r.push([t.i,".vue-aspect-ratio__inner[data-v-007c4c7c]{position:relative}.vue-aspect-ratio__content[data-v-007c4c7c]{height:100%;left:0;position:absolute;top:0;width:100%}",""]),r.locals={},t.exports=r},378:function(t,e,l){"use strict";l(2)({target:"Number",stat:!0},{isNaN:function(t){return t!=t}})},408:function(t,e){t.exports="data:image/svg+xml;base64,PHN2ZyBpZD0iTGF5ZXJfMSIgZGF0YS1uYW1lPSJMYXllciAxIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NS40MSAyMy40MSI+PGRlZnM+PHN0eWxlPi5jbHMtMXtmaWxsOm5vbmU7c3Ryb2tlOiNiMWIxYjE7c3Ryb2tlLW1pdGVybGltaXQ6MTA7fTwvc3R5bGU+PC9kZWZzPjxwb2x5bGluZSBjbGFzcz0iY2xzLTEiIHBvaW50cz0iNDUuMDUgMC4zNSAyMi43IDIyLjcgMC4zNSAwLjM1Ii8+PC9zdmc+"},410:function(t,e,l){"use strict";var r=l(2),n=l(411);r({target:"String",proto:!0,forced:l(412)("link")},{link:function(t){return n(this,"a","href",t)}})},411:function(t,e,l){"use strict";var r=l(4),n=l(24),o=l(17),c=/"/g,d=r("".replace);t.exports=function(t,e,l,r){var m=o(n(t)),v="<"+e;return""!==l&&(v+=" "+l+'="'+d(o(r),c,"&quot;")+'"'),v+">"+m+"</"+e+">"}},412:function(t,e,l){"use strict";var r=l(3);t.exports=function(t){return r((function(){var e=""[t]('"');return e!==e.toLowerCase()||e.split('"').length>3}))}},447:function(t,e,l){var content=l(501);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,l(32).default)("335024ad",content,!0,{sourceMap:!1})},500:function(t,e,l){"use strict";l(447)},501:function(t,e,l){var r=l(31)((function(i){return i[1]}));r.push([t.i,"@media only screen and (max-width:520px){.eresearch-header div{margin-left:1rem;margin-right:1rem;margin-top:-1rem}}@media only screen and (max-width:450px){.eresearch-header div{margin-top:-2rem}}@media only screen and (max-width:410px){.eresearch-header div{margin-top:-3rem}.eresearch-header div h1{font-size:.8rem}.eresearch-header div h2{font-size:.85rem}}",""]),r.locals={},t.exports=r},538:function(t,e,l){"use strict";l.r(e);l(410),l(45),l(79),l(16),l(97);var r={head:function(){return{title:"Research · Logicly"}},data:function(){return{pills:[{tag:"randomised control trials",label:"randomised control trials"},{tag:"longitudinal studies",label:"longitudinal studies"},{tag:"data linkage & transformation",label:"data linkage & transformation"},{tag:"data security",label:"data security"},{tag:"research databases",label:"research databases"},{tag:"partners for grant applications",label:"partners for grant applications"},{tag:"learning management system",label:"learning management system"},{tag:"research ethics",label:"research ethics"},{tag:"participant support",label:"participant support"},{tag:"R programming",label:"R programming"},{tag:"analytics & presentation",label:"analytics & presentation"},{tag:"third-party systems",label:"integration with third-party systems"},{tag:"mapping workflows",label:"mapping workflows"},{tag:"WebSurvey platform",label:"WebSurvey platform"},{tag:"program evaluation",label:"program evaluation"}],activeTag:null,caseStudies:[{client:"Orygen",title:"Consolidating disparate datasets to facilitate insight into suicide prevention and policy development",link:"/projects#orygen-ed-self-harm",image:"/We-Can-2.svg",tags:["data linkage & transformation","research databases","data security","data strategy","R programming","analytics & presentation","research ethics"]},{client:"Movember",title:"Evaluating a world-first online training program designed to provide best practice support to therapists",link:"/projects#movember",image:"/We-Can-3.svg",tags:["learning management system","randomised control trials","research ethics","longitudinal studies","end user support","WebSurvey platform","third-party systems","participant support","mapping workflows","program evaluation"]},{client:"AMHOCN",title:"Demonstrating the positive effect mental health investments have on the wellbeing of the population",link:"/projects#the-australian-mental-health-outcome-and-classification-network",image:"/We-Can-1.svg",tags:["data linkage & transformations","research databases","data security","data strategy","R programming","analytics & presentation"]},{client:"Link-me",title:"A large-scale trial of a new approach to stepped health care in general practice, particularly focused on delivering care to those with complex needs",link:"/projects#the-university-of-melbourne-medical-schools-department-of-general-practice",image:"/We-Can-2.svg",tags:["interaction with LMS","randomised control trials","data ethics","longitudinal studies","end user support","program evaluation","WebSurvey platform","data security","research ethics","participant support","mapping workflows"]},{client:"HuNI",title:"Advancing exploration of connected cultural databases through dynamic visual network graphs",link:"/projects#deakin-universitys-humanities-network-infrastructure",image:"/We-Can-3.svg",tags:["data linkage & transformation","research databases","data security","data strategy","R programming","analytics & presentation"]},{client:"Buoy Project",title:"Supporting a research collaboration between universities and community organisations with a commitment to preventing male suicide",link:"/projects#buoy-project",image:"/We-Can-1.svg",tags:["randomised control trials","research ethics","longitudinal studies","participant support","partners for grant applications","third-party systems","WebSurvey platform","mapping workflows","program evaluation"]}]}},computed:{filteredCaseStudies:function(){var t=this;return this.activeTag?this.caseStudies.filter((function(e){return e.tags.includes(t.activeTag)})):this.caseStudies}},methods:{filterCaseStudies:function(t){this.activeTag=t===this.activeTag?null:t}}},n=(l(500),l(14)),component=Object(n.a)(r,(function(){var t=this,e=t._self._c;return e("div",[e("AspectRatio",{style:{backgroundSize:"cover",backgroundImage:"url(/Logicly_how-we-work-header.jpg)"},attrs:{ar:"13:4",width:"100%"}},[e("page-section",{attrs:{overlay:"overlay"}},[e("div",{staticClass:"w-full h-full eresearch-header grid content-center"},[e("div",{staticClass:"mt-0"},[e("h1",{staticClass:"text-sm xl:text-base font-medium text-center text-white"},[t._v("RESEARCHERS")]),t._v(" "),e("h2",{staticClass:"text-base sm:text-lg md:text-xl xl:text-2xl font-semibold text-center leading-tight text-white"},[t._v("We free research teams to focus on their core investigative questions by taking on the technical challenges")])])])])],1),t._v(" "),e("page-section",[e("div",{staticClass:"flex justify-center"},[e("div",{staticClass:"justify-center mb-6"},[e("img",{attrs:{width:"100px",src:"/Dissecting_your_information_problems.svg",alt:"Dissecting your information problems visual"}})])]),t._v(" "),e("div",{staticClass:"grid grid-cols-8 gap-x-4 text-logiclytextgrey"},[e("div",{staticClass:"col-span-8 text-center"},[e("h2",{staticClass:"text-lg pb-4"},[t._v("Our specialist team combines research, analysis and presentation expertise, dataflow and workflow design and data collection experience with leading-edge technology.")])]),t._v(" "),e("div",{staticClass:"col-span-8 lg:col-span-4 col-start-1"},[e("ul",{staticClass:"text-base lg:text-base font-light list-disc pl-6 lg:pl-0 pr-8"},[e("li",[t._v("Defining the data requirements for research")]),t._v(" "),e("li",[t._v("Designing user friendly workflows for longitudinal studies")]),t._v(" "),e("li",[t._v("Delivering randomised controlled trials and cluster randomised controlled trials")]),t._v(" "),e("li",[t._v("Easy to use collection systems reducing errors and repetitious work")]),t._v(" "),e("li",[t._v("Supporting and designing dataflows for intervention trials")]),t._v(" "),e("li",[t._v("Analysis using standard tools such as SPSS and R")])])]),t._v(" "),e("div",{staticClass:"col-span-8 lg:col-span-4 lg:col-start-5"},[e("ul",{staticClass:"text-base lg:text-base font-light list-disc pl-6 lg:pl-0"},[e("li",[t._v("Undertaking data transformation and linkage for research")]),t._v(" "),e("li",[t._v("Integrating multiple data sets to create research databases")]),t._v(" "),e("li",[t._v("Supporting development of business cases for information projects")]),t._v(" "),e("li",[t._v("Developing standardised systems to improve the efficiency of managing research data and reduce manual errors")]),t._v(" "),e("li",[t._v("Static and dynamic data reporting and presentation")]),t._v(" "),e("li",[t._v("Integration with data visualisation tools")])])])]),t._v(" "),e("div",{staticClass:"row justify-content-center text-center mt-6"},[e("div",{staticClass:"grid justify-center align-center"},[e("button",{staticClass:"block w-48 h-12 my-5 font-medium text-center text-white tt-lc bg-logiclyorange hover:bg-logiclyhover"},[e("NuxtLink",{attrs:{to:"#research-projects"}},[t._v("our research projects")])],1)])])]),t._v(" "),e("page-section",{attrs:{altrow:""}},[e("div",{staticClass:"px-0 xl:px-0"},[e("div",{staticClass:"text-center text-logiclytheme3"},[e("h2",{staticClass:"text-lg font-semibold"},[t._v("“It's been a delight. It was all coded up and integrated [with the third-party learning management system] for us, rather than having to do it ourselves.”")])])])]),t._v(" "),e("page-section",[e("div",{staticClass:"text-center text-logiclytextgrey px-0 xl:px-6"},[e("h2",{staticClass:"text-2xl font-bold"},[t._v("Technical partners in research")]),t._v(" "),e("h3",{staticClass:"pb-6 pt-1 text-xl font-semibold text-center text-logiclytextgrey"},[t._v("From conceptualisation to impact")])]),t._v(" "),e("div",{staticClass:"grid grid-cols-12 xl:gap-x-6 text-logiclytextgrey"},[e("div",{staticClass:"col-span-12 pb-6 border-t-2 border-logiclygreytwo md:pb-8"}),t._v(" "),e("div",{staticClass:"grid justify-center col-span-12 pb-6 md:pb-8 xl:pb-10"},[e("img",{staticClass:"h-4 p-0 md:h-5 xl:h-6",attrs:{src:l(408),alt:"Grey arrow"}})]),t._v(" "),e("div",{staticClass:"col-span-1 sm:col-span-3 xl:col-span-4"}),t._v(" "),e("div",{staticClass:"col-span-2 sm:col-span-1 ml-2 border-l-2 border-logiclygreythree"},[e("div",{staticClass:"w-6 h-6 -ml-3 rounded-full bg-logiclytheme1"})]),t._v(" "),e("div",{staticClass:"col-span-9 sm:col-span-7 xl:col-span-5 pb-4 pl-0 pt-0 lg:-ml-4 lg:pb-8 xl:pl-4 xl:-ml-12 xl:pb-16"},[e("h3",{staticClass:"pb-3 text-xl font-bold text-logiclytheme1 pt-0 -mt-2"},[t._v("1. "),e("span",{staticClass:"text-logiclytextgrey font-semibold text-lg"},[t._v("Data concepts and metrics")])])]),t._v(" "),e("div",{staticClass:"col-span-1 sm:col-span-3 xl:col-span-4"}),t._v(" "),e("div",{staticClass:"col-span-2 sm:col-span-1 ml-2 border-l-2 border-logiclygreythree"},[e("div",{staticClass:"w-6 h-6 -ml-3 rounded-full bg-logiclytheme2"})]),t._v(" "),e("div",{staticClass:"col-span-9 sm:col-span-7 xl:col-span-5 pb-4 pl-0 pt-0 lg:-ml-4 lg:pb-8 xl:pl-4 xl:-ml-12 xl:pb-16"},[e("h3",{staticClass:"pb-3 text-xl font-bold text-logiclytheme2 pt-0 -mt-2"},[t._v("2. "),e("span",{staticClass:"text-logiclytextgrey font-semibold text-lg"},[t._v("Data collection")])])]),t._v(" "),e("div",{staticClass:"col-span-1 sm:col-span-3 xl:col-span-4"}),t._v(" "),e("div",{staticClass:"col-span-2 sm:col-span-1 ml-2 border-l-2 border-logiclygreythree"},[e("div",{staticClass:"w-6 h-6 -ml-3 rounded-full bg-logiclytheme4"})]),t._v(" "),e("div",{staticClass:"col-span-9 sm:col-span-7 xl:col-span-5 pb-4 pl-0 pt-0 lg:-ml-4 lg:pb-8 xl:pl-4 xl:-ml-12 xl:pb-16"},[e("h3",{staticClass:"pb-3 text-xl font-bold text-logiclytheme4 pt-0 -mt-2"},[t._v("3. "),e("span",{staticClass:"text-logiclytextgrey font-semibold text-lg"},[t._v("Data analysis")])])]),t._v(" "),e("div",{staticClass:"col-span-1 sm:col-span-3 xl:col-span-4"}),t._v(" "),e("div",{staticClass:"col-span-2 sm:col-span-1 ml-2 border-logiclygreythree"},[e("div",{staticClass:"w-6 h-6 -ml-3 rounded-full bg-logiclytheme3"})]),t._v(" "),e("div",{staticClass:"col-span-9 sm:col-span-7 xl:col-span-5 pl-0 pt-0 lg:-ml-4 xl:pl-4 xl:-ml-12"},[e("h3",{staticClass:"text-xl font-bold text-logiclytheme3 pt-0 -mt-2"},[t._v("4. "),e("span",{staticClass:"text-logiclytextgrey font-semibold text-lg"},[t._v("Data presentation and interpretation")])])])])]),t._v(" "),e("page-section",{attrs:{altrow:""}},[e("div",{staticClass:"px-0 xl:px-0"},[e("div",{staticClass:"text-center text-logiclytheme3"},[e("h2",{staticClass:"text-lg font-semibold"},[t._v("“In case you did not hear the trial crushed it due to the heavy lifting from you and the team.”")])])])]),t._v(" "),e("page-section",{attrs:{id:"research-projects"}},[e("div",{staticClass:"container mx-auto -mt-8"},[e("div",{staticClass:"mb-6"},[e("h2",{staticClass:"text-3xl font-bold text-logiclytheme3"},[t._v("Case studies")])]),t._v(" "),e("div",{staticClass:"flex flex-wrap justify-center gap-2 md:gap-3 mb-4"},t._l(t.pills,(function(l){return e("span",{key:l.tag,class:["px-4 py-1 rounded-full cursor-pointer transition-colors duration-300 text-xs font-medium",t.activeTag===l.tag?"bg-logiclytheme3 text-white":"bg-logiclygreytwo text-logiclytextgrey hover:bg-logiclygreyhover"],on:{click:function(e){return t.filterCaseStudies(l.tag)}}},[t._v("\n          "+t._s(l.label)+"\n        ")])})),0),t._v(" "),e("div",{staticClass:"flex flex-wrap justify-center mb-8"},[e("span",{class:["px-8 py-2 rounded-full cursor-pointer transition-colors duration-300 text-xs font-bold",t.activeTag?"bg-white text-logiclytheme3 border-2 border-logiclytheme3 hover:border-logiclyredhover hover:text-logiclyredhover":"bg-logiclytheme3 text-white"],on:{click:function(e){return t.filterCaseStudies(null)}}},[t._v("\n          Show all\n        ")])]),t._v(" "),e("div",{staticClass:"grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4"},t._l(t.filteredCaseStudies,(function(l){return e("div",{key:l.title,staticClass:"p-4 border rounded-lg shadow-sm hover:shadow-md"},[e("a",{staticClass:"block",attrs:{href:l.link}},[e("div",{staticClass:"flex justify-center items-center mt-6 mb-4"},[e("img",{staticClass:"h-10",attrs:{src:l.image,alt:"study.title"}})]),t._v(" "),e("h4",{staticClass:"font-bold text-logiclytextgrey"},[t._v(t._s(l.client))]),t._v(" "),e("p",{staticClass:"text-sm text-logiclytextgrey"},[t._v(t._s(l.title))])])])})),0)])])],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{PageSection:l(370).default,AspectRatio:l(375).default,Button:l(158).default})}}]);