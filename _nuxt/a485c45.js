(window.webpackJsonp=window.webpackJsonp||[]).push([[22,2,3,5,6,9,14],{248:function(t,e,n){"use strict";n.r(e);var r={name:"PageSection",props:{altrow:Boolean,normal:Boolean,overlay:Boolean,nooverlay:Boolean,black:Boolean,noblack:Boolean}},o=(n(251),n(3)),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"h-full",class:{"bg-logiclylightgrey":t.altrow,"!bg-logiclylightgrey":t.normal}},[n("div",{staticClass:"object-contain object-center w-full h-full bg-cover",class:{"bg-black bg-opacity-40":t.overlay}},[n("div",{staticClass:"container h-full mx-auto"},[n("div",{staticClass:"grid h-full py-16 md:py-20 grid-cols-12 md:grid-cols-15 px-6 md:px-0 mobileres"},[n("div",{staticClass:"flex flex-col justify-center col-span-10 col-start-2 md:col-span-9 md:col-start-4"},[t._t("default")],2)])])])])}),[],!1,null,"2c60def4",null);e.default=component.exports},249:function(t,e,n){var content=n(252);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(17).default)("41e69dda",content,!0,{sourceMap:!1})},250:function(t,e,n){var content=n(259);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(17).default)("5310b0e0",content,!0,{sourceMap:!1})},251:function(t,e,n){"use strict";n(249)},252:function(t,e,n){var r=n(16)(!1);r.push([t.i,"@media only screen and (max-width:500px){.mobileres[data-v-2c60def4]{padding-left:.5rem;padding-right:.5rem}}",""]),t.exports=r},253:function(t,e,n){"use strict";n.r(e);n(254),n(257),n(96),n(35);var r=n(11),o={name:"VueAspectRatio",props:{ar:{type:String,default:"1:1",validator:function(t){var e=t.split(":").map((function(t){return parseInt(t)})),n=Object(r.a)(e,2),o=n[0],l=n[1];return!Number.isNaN(o)&&!Number.isNaN(l)}},width:String},data:function(){return{w:null,h:null}},computed:{componentStyle:function(){return this.width?{width:this.width}:{}},innerStyle:function(){return{paddingTop:this.h/this.w*100+"%"}}},created:function(){var t=this.ar.split(":").map((function(t){return parseInt(t)})),e=Object(r.a)(t,2),n=e[0],o=e[1];this.w=n,this.h=o}},l=(n(258),n(3)),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"vue-aspect-ratio",style:t.componentStyle},[n("div",{staticClass:"vue-aspect-ratio__inner",style:t.innerStyle},[n("div",{staticClass:"vue-aspect-ratio__content"},[t._t("default")],2)])])}),[],!1,null,"007c4c7c",null);e.default=component.exports},254:function(t,e,n){"use strict";var r=n(6),o=n(36),l=n(37),c=n(157),d=n(73),h=n(10),f=n(57).f,m=n(74).f,v=n(14).f,x=n(255).trim,w="Number",y=r.Number,_=y,k=y.prototype,C=l(n(95)(k))==w,S="trim"in String.prototype,N=function(t){var e=d(t,!1);if("string"==typeof e&&e.length>2){var n,r,o,l=(e=S?e.trim():x(e,3)).charCodeAt(0);if(43===l||45===l){if(88===(n=e.charCodeAt(2))||120===n)return NaN}else if(48===l){switch(e.charCodeAt(1)){case 66:case 98:r=2,o=49;break;case 79:case 111:r=8,o=55;break;default:return+e}for(var code,c=e.slice(2),i=0,h=c.length;i<h;i++)if((code=c.charCodeAt(i))<48||code>o)return NaN;return parseInt(c,r)}}return+e};if(!y(" 0o1")||!y("0b1")||y("+0x1")){y=function(t){var e=arguments.length<1?0:t,n=this;return n instanceof y&&(C?h((function(){k.valueOf.call(n)})):l(n)!=w)?c(new _(N(e)),n,y):N(e)};for(var j,I=n(8)?f(_):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),A=0;I.length>A;A++)o(_,j=I[A])&&!o(y,j)&&v(y,j,m(_,j));y.prototype=k,k.constructor=y,n(18)(r,w,y)}},255:function(t,e,n){var r=n(5),o=n(44),l=n(10),c=n(256),d="["+c+"]",h=RegExp("^"+d+d+"*"),f=RegExp(d+d+"*$"),m=function(t,e,n){var o={},d=l((function(){return!!c[t]()||"​"!="​"[t]()})),h=o[t]=d?e(v):c[t];n&&(o[n]=h),r(r.P+r.F*d,"String",o)},v=m.trim=function(t,e){return t=String(o(t)),1&e&&(t=t.replace(h,"")),2&e&&(t=t.replace(f,"")),t};t.exports=m},256:function(t,e){t.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},257:function(t,e,n){var r=n(5);r(r.S,"Number",{isNaN:function(t){return t!=t}})},258:function(t,e,n){"use strict";n(250)},259:function(t,e,n){var r=n(16)(!1);r.push([t.i,".vue-aspect-ratio__inner[data-v-007c4c7c]{position:relative}.vue-aspect-ratio__content[data-v-007c4c7c]{position:absolute;top:0;left:0;width:100%;height:100%}",""]),t.exports=r},260:function(t,e,n){var content=n(262);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(17).default)("8282b48e",content,!0,{sourceMap:!1})},261:function(t,e,n){"use strict";n(260)},262:function(t,e,n){var r=n(16)(!1);r.push([t.i,"@media only screen and (max-width:520px){.textresponsive div[data-v-c6337172]{margin-top:-.7rem;margin-left:2rem;margin-right:2rem}}@media only screen and (max-width:450px){.textresponsive div[data-v-c6337172]{margin-top:-1.2rem}}@media only screen and (max-width:410px){.textresponsive div[data-v-c6337172]{margin-top:-2rem}.textresponsive div h1[data-v-c6337172]{font-size:.8rem}.textresponsive div h2[data-v-c6337172]{font-size:.9rem}}",""]),t.exports=r},263:function(t,e,n){"use strict";n.r(e);var r={name:"Hero",props:{heading:String,subheading:String,pageheroheading:String,backgroundUrl:String,right:Boolean,blacktext:Boolean,whitetext:Boolean,altrow:Boolean,overlay:Boolean}},o=(n(261),n(3)),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("AspectRatio",{style:{backgroundSize:"cover",backgroundImage:"url("+t.backgroundUrl+")"},attrs:{ar:"13:4",width:"100%"}},[n("page-section",{attrs:{altrow:t.altrow,overlay:t.overlay}},[n("div",{staticClass:"w-full h-full textresponsive grid content-center"},[n("div",{staticClass:"mt-0"},[n("h1",{staticClass:"text-xs md:text-sm xl:text-base font-medium text-center text-white"},[t._v(t._s(t.heading))]),t._v(" "),n("h2",{staticClass:"text-base sm:text-lg md:text-xl xl:text-2xl font-semibold text-center leading-tight text-white"},[t._v(t._s(t.subheading))]),t._v(" "),n("h1",{staticClass:"text-base sm:text-lg lg:text-xl text-center text-white"},[t._v(t._s(t.pageheroheading))])])])])],1)}),[],!1,null,"c6337172",null);e.default=component.exports;installComponents(component,{PageSection:n(248).default,AspectRatio:n(253).default})},264:function(t,e,n){var content=n(267);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(17).default)("0ef0ef81",content,!0,{sourceMap:!1})},265:function(t,e,n){"use strict";n.r(e);var r={name:"Hero",props:{heading:String,subheading:String,iconurl:String,altrow:Boolean,imgwidth:String}},o=n(3),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("page-section",{staticClass:" lg:py-8",attrs:{altrow:t.altrow}},[n("div",{staticClass:"flex justify-center "},[n("div",{staticClass:"justify-center mb-6"},[n("img",{attrs:{width:t.imgwidth,src:t.iconurl}})])]),t._v(" "),n("div",{staticClass:"px-0 xl:px-6"},[n("div",{staticClass:"text-center text-logiclytextgrey"},[n("h1",{staticClass:"text-2xl font-semibold leading-snug text-center pb-2 pt-4 xl:pt-8"},[t._v(t._s(t.heading))]),t._v(" "),n("h2",{staticClass:"font-light text-lg"},[t._v(t._s(t.subheading))])])])])}),[],!1,null,"96bf9eac",null);e.default=component.exports;installComponents(component,{PageSection:n(248).default})},266:function(t,e,n){"use strict";n(264)},267:function(t,e,n){var r=n(16)(!1);r.push([t.i,"button>a[data-v-03699575]{text-transform:lowercase!important}",""]),t.exports=r},268:function(t,e,n){"use strict";n.r(e);var r={name:"CTA",props:{text:String,buttonLink:String,buttonText:String}},o=(n(266),n(3)),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("page-section",[n("div",{staticClass:"content-center object-contain object-center w-full text-logiclytextgrey"},[n("h1",{staticClass:"text-2xl font-semibold leading-snug text-center text-logiclytextgrey"},[t._v(t._s(t.text))]),t._v(" "),n("div",{staticClass:"grid justify-center pt-4 align-center"},[n("button",{staticClass:"block w-40 h-12 my-5 font-medium text-center text-white bg-logiclyorange hover:bg-logiclyhover"},[n("NuxtLink",{attrs:{to:t.buttonLink}},[t._v(t._s(t.buttonText))])],1)])])])}),[],!1,null,"03699575",null);e.default=component.exports;installComponents(component,{Button:n(97).default,PageSection:n(248).default})},279:function(t,e,n){var content=n(291);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(17).default)("24a753ba",content,!0,{sourceMap:!1})},290:function(t,e,n){"use strict";n(279)},291:function(t,e,n){var r=n(16)(!1);r.push([t.i,"@media only screen and (max-width:519px){.textresponsiveblack div[data-v-e5b74d8e]{margin-left:-1rem;margin-right:-1rem}}@media only screen and (max-width:450px){.textresponsiveblack div[data-v-e5b74d8e]{margin-left:-1.5rem;margin-right:-1.5rem}.textresponsiveblack h1[data-v-e5b74d8e]{font-size:.9rem}}@media only screen and (max-width:380px){.textresponsiveblack div[data-v-e5b74d8e]{margin-left:-3rem;margin-right:-3rem}}",""]),t.exports=r},311:function(t,e,n){"use strict";n.r(e);var r={name:"Hero",props:{heading:String,backgroundUrl:String,altrow:Boolean,overlay:Boolean}},o=(n(290),n(3)),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("AspectRatio",{style:{backgroundSize:"cover",backgroundImage:"url("+t.backgroundUrl+")"},attrs:{ar:"3:1",width:"100%"}},[n("page-section",{attrs:{altrow:t.altrow,overlay:t.overlay}},[n("div",{staticClass:"-mt-20 sm:-mt-32 md:-mt-40 lg:-mt-48 mx-12 sm:mx-20 md:mx-24 lg:mx-40 xl:mx-56 px-8 md:px-0 xl:px-2 textresponsiveblack"},[n("div",[n("h1",{staticClass:"text-base sm:text-lg lg:text-xl font-semibold text-center text-black"},[t._v(t._s(t.heading))])])])])],1)}),[],!1,null,"e5b74d8e",null);e.default=component.exports;installComponents(component,{PageSection:n(248).default,AspectRatio:n(253).default})},375:function(t,e,n){"use strict";n.r(e);var r={head:function(){return{title:"About us · Logicly"}}},o=n(3),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("Hero",{attrs:{heading:"ABOUT US",subheading:"We are innovative thinkers who solve information challenges","background-url":"/Logicly-about-us-header-we-are-innovative-thinkers-who-solve-informative-challenges.jpg",right:"",black:"",overlay:""}}),t._v(" "),n("Herotext",{attrs:{iconurl:"/We-partner-with-clients-to-simplify-complex-processes.svg",imgwidth:"250px",heading:"We partner with clients to simplify complex processes",subheading:"We achieve our best when we partner with you to research, design, build and maintain your information and digital systems. We are flexible and collaborative while taking a thorough and detailed approach to research, strategy, design and security.",altrow:""}}),t._v(" "),n("Herotext",{attrs:{iconurl:"/25-years-shaping-large-complicated-projects.svg",imgwidth:"280px",heading:"25 years shaping large complicated projects",subheading:"Our background originates in research and psychology with experience in statistics. This knowledge of research and ethics around data is the foundation of every project. After working for twenty years with government and on large health projects we understand the contractual requirements for reporting, legal and privacy constraints and meeting security standards."}}),t._v(" "),n("Heroblacktext",{attrs:{heading:"We review projects continually as they evolve","background-url":"/We-review-projects-continually-as-they-evolve.jpg"}}),t._v(" "),n("Herotext",{attrs:{iconurl:"/Process_diagram.svg",imgwidth:"400px",subheading:"When we design and build digital systems we look at the short and long term outcomes. We build systems that can grow and expand as the information needs and challenges change within a business or organisation. Clients may require more efficiencies as they grow, or make additions and changes to a process. We continually work together with clients to assess, manage and ensure the system meets their current needs.",altrow:""}}),t._v(" "),n("CTA",{attrs:{text:"Learn more about who we work with",buttonText:"Who we help",buttonLink:"/whowehelp"}})],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Hero:n(263).default,Herotext:n(265).default,Heroblacktext:n(311).default,CTA:n(268).default})}}]);