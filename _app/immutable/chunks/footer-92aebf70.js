import{S as Qe,i as Ge,s as Ke,N as ae,O as le,a as _,d as m,b as i,P as oe,g as V,J as o,l as qe,n as De,e as b,t as S,k as N,x as ce,c as w,h as T,m as O,y as he,z as ue,r as me,p as ve,C as de}from"./index-79552c49.js";const _e=parseFloat;function Pe(t,e=";"){let a;if(Array.isArray(t))a=t.filter(l=>l);else{a=[];for(const l in t)t[l]&&a.push(`${l}:${t[l]}`)}return a.join(e)}function $e(t,e,a,l){let s,r;const n="1em";let u,v,d,E="-.125em";const f="visible";return l&&(d="center",r="1.25em"),a&&(s=a),e&&(e=="lg"?(v="1.33333em",u=".75em",E="-.225em"):e=="xs"?v=".75em":e=="sm"?v=".875em":v=e.replace("x","em")),Pe([Pe({float:s,width:r,height:n,"line-height":u,"font-size":v,"text-align":d,"vertical-align":E,"transform-origin":"center",overflow:f}),t])}function et(t,e,a,l,s,r=1,n="",u=""){let v=1,d=1;return s&&(s=="horizontal"?v=-1:s=="vertical"?d=-1:v=d=-1),Pe([`translate(${_e(e)*r}${n},${_e(a)*r}${n})`,`scale(${v*_e(t)},${d*_e(t)})`,l&&`rotate(${l}${u})`]," ")}function Je(t){let e,a,l,s,r,n,u,v;function d(h,g){return typeof h[10][4]=="string"?at:tt}let E=d(t),f=E(t);return{c(){e=ae("svg"),a=ae("g"),l=ae("g"),f.c(),this.h()},l(h){e=le(h,"svg",{id:!0,class:!0,style:!0,viewBox:!0,"aria-hidden":!0,role:!0,xmlns:!0});var g=_(e);a=le(g,"g",{transform:!0,"transform-origin":!0});var y=_(a);l=le(y,"g",{transform:!0});var A=_(l);f.l(A),A.forEach(m),y.forEach(m),g.forEach(m),this.h()},h(){i(l,"transform",t[12]),i(a,"transform",s="translate("+t[10][0]/2+" "+t[10][1]/2+")"),i(a,"transform-origin",r=t[10][0]/4+" 0"),i(e,"id",n=t[1]||void 0),i(e,"class",u="svelte-fa "+t[0]+" svelte-1w3t65e"),i(e,"style",t[11]),i(e,"viewBox",v="0 0 "+t[10][0]+" "+t[10][1]),i(e,"aria-hidden","true"),i(e,"role","img"),i(e,"xmlns","http://www.w3.org/2000/svg"),oe(e,"pulse",t[4]),oe(e,"spin",t[3])},m(h,g){V(h,e,g),o(e,a),o(a,l),f.m(l,null)},p(h,g){E===(E=d(h))&&f?f.p(h,g):(f.d(1),f=E(h),f&&(f.c(),f.m(l,null))),g&4096&&i(l,"transform",h[12]),g&1024&&s!==(s="translate("+h[10][0]/2+" "+h[10][1]/2+")")&&i(a,"transform",s),g&1024&&r!==(r=h[10][0]/4+" 0")&&i(a,"transform-origin",r),g&2&&n!==(n=h[1]||void 0)&&i(e,"id",n),g&1&&u!==(u="svelte-fa "+h[0]+" svelte-1w3t65e")&&i(e,"class",u),g&2048&&i(e,"style",h[11]),g&1024&&v!==(v="0 0 "+h[10][0]+" "+h[10][1])&&i(e,"viewBox",v),g&17&&oe(e,"pulse",h[4]),g&9&&oe(e,"spin",h[3])},d(h){h&&m(e),f.d()}}}function tt(t){let e,a,l,s,r,n,u,v,d,E;return{c(){e=ae("path"),n=ae("path"),this.h()},l(f){e=le(f,"path",{d:!0,fill:!0,"fill-opacity":!0,transform:!0}),_(e).forEach(m),n=le(f,"path",{d:!0,fill:!0,"fill-opacity":!0,transform:!0}),_(n).forEach(m),this.h()},h(){i(e,"d",a=t[10][4][0]),i(e,"fill",l=t[6]||t[2]||"currentColor"),i(e,"fill-opacity",s=t[9]!=!1?t[7]:t[8]),i(e,"transform",r="translate("+t[10][0]/-2+" "+t[10][1]/-2+")"),i(n,"d",u=t[10][4][1]),i(n,"fill",v=t[5]||t[2]||"currentColor"),i(n,"fill-opacity",d=t[9]!=!1?t[8]:t[7]),i(n,"transform",E="translate("+t[10][0]/-2+" "+t[10][1]/-2+")")},m(f,h){V(f,e,h),V(f,n,h)},p(f,h){h&1024&&a!==(a=f[10][4][0])&&i(e,"d",a),h&68&&l!==(l=f[6]||f[2]||"currentColor")&&i(e,"fill",l),h&896&&s!==(s=f[9]!=!1?f[7]:f[8])&&i(e,"fill-opacity",s),h&1024&&r!==(r="translate("+f[10][0]/-2+" "+f[10][1]/-2+")")&&i(e,"transform",r),h&1024&&u!==(u=f[10][4][1])&&i(n,"d",u),h&36&&v!==(v=f[5]||f[2]||"currentColor")&&i(n,"fill",v),h&896&&d!==(d=f[9]!=!1?f[8]:f[7])&&i(n,"fill-opacity",d),h&1024&&E!==(E="translate("+f[10][0]/-2+" "+f[10][1]/-2+")")&&i(n,"transform",E)},d(f){f&&m(e),f&&m(n)}}}function at(t){let e,a,l,s;return{c(){e=ae("path"),this.h()},l(r){e=le(r,"path",{d:!0,fill:!0,transform:!0}),_(e).forEach(m),this.h()},h(){i(e,"d",a=t[10][4]),i(e,"fill",l=t[2]||t[5]||"currentColor"),i(e,"transform",s="translate("+t[10][0]/-2+" "+t[10][1]/-2+")")},m(r,n){V(r,e,n)},p(r,n){n&1024&&a!==(a=r[10][4])&&i(e,"d",a),n&36&&l!==(l=r[2]||r[5]||"currentColor")&&i(e,"fill",l),n&1024&&s!==(s="translate("+r[10][0]/-2+" "+r[10][1]/-2+")")&&i(e,"transform",s)},d(r){r&&m(e)}}}function lt(t){let e,a=t[10][4]&&Je(t);return{c(){a&&a.c(),e=qe()},l(l){a&&a.l(l),e=qe()},m(l,s){a&&a.m(l,s),V(l,e,s)},p(l,[s]){l[10][4]?a?a.p(l,s):(a=Je(l),a.c(),a.m(e.parentNode,e)):a&&(a.d(1),a=null)},i:De,o:De,d(l){a&&a.d(l),l&&m(e)}}}function it(t,e,a){let{class:l=""}=e,{id:s=""}=e,{style:r=""}=e,{icon:n}=e,{size:u=""}=e,{color:v=""}=e,{fw:d=!1}=e,{pull:E=""}=e,{scale:f=1}=e,{translateX:h=0}=e,{translateY:g=0}=e,{rotate:y=""}=e,{flip:A=!1}=e,{spin:B=!1}=e,{pulse:Q=!1}=e,{primaryColor:G=""}=e,{secondaryColor:K=""}=e,{primaryOpacity:U=1}=e,{secondaryOpacity:R=.4}=e,{swapOpacity:Z=!1}=e,p,I,x;return t.$$set=c=>{"class"in c&&a(0,l=c.class),"id"in c&&a(1,s=c.id),"style"in c&&a(13,r=c.style),"icon"in c&&a(14,n=c.icon),"size"in c&&a(15,u=c.size),"color"in c&&a(2,v=c.color),"fw"in c&&a(16,d=c.fw),"pull"in c&&a(17,E=c.pull),"scale"in c&&a(18,f=c.scale),"translateX"in c&&a(19,h=c.translateX),"translateY"in c&&a(20,g=c.translateY),"rotate"in c&&a(21,y=c.rotate),"flip"in c&&a(22,A=c.flip),"spin"in c&&a(3,B=c.spin),"pulse"in c&&a(4,Q=c.pulse),"primaryColor"in c&&a(5,G=c.primaryColor),"secondaryColor"in c&&a(6,K=c.secondaryColor),"primaryOpacity"in c&&a(7,U=c.primaryOpacity),"secondaryOpacity"in c&&a(8,R=c.secondaryOpacity),"swapOpacity"in c&&a(9,Z=c.swapOpacity)},t.$$.update=()=>{t.$$.dirty&16384&&a(10,p=n&&n.icon||[0,0,"",[],""]),t.$$.dirty&237568&&a(11,I=$e(r,u,E,d)),t.$$.dirty&8126464&&a(12,x=et(f,h,g,y,A,512))},[l,s,v,B,Q,G,K,U,R,Z,p,I,x,r,n,u,d,E,f,h,g,y,A]}class rt extends Qe{constructor(e){super(),Ge(this,e,it,lt,Ke,{class:0,id:1,style:13,icon:14,size:15,color:2,fw:16,pull:17,scale:18,translateX:19,translateY:20,rotate:21,flip:22,spin:3,pulse:4,primaryColor:5,secondaryColor:6,primaryOpacity:7,secondaryOpacity:8,swapOpacity:9})}}const ge=rt;var Ue={};(function(t){Object.defineProperty(t,"__esModule",{value:!0});var e="fab",a="twitter",l=512,s=512,r=[],n="f099",u="M459.4 151.7c.325 4.548 .325 9.097 .325 13.65 0 138.7-105.6 298.6-298.6 298.6-59.45 0-114.7-17.22-161.1-47.11 8.447 .974 16.57 1.299 25.34 1.299 49.06 0 94.21-16.57 130.3-44.83-46.13-.975-84.79-31.19-98.11-72.77 6.498 .974 12.99 1.624 19.82 1.624 9.421 0 18.84-1.3 27.61-3.573-48.08-9.747-84.14-51.98-84.14-102.1v-1.299c13.97 7.797 30.21 12.67 47.43 13.32-28.26-18.84-46.78-51.01-46.78-87.39 0-19.49 5.197-37.36 14.29-52.95 51.65 63.67 129.3 105.3 216.4 109.8-1.624-7.797-2.599-15.92-2.599-24.04 0-57.83 46.78-104.9 104.9-104.9 30.21 0 57.5 12.67 76.67 33.14 23.72-4.548 46.46-13.32 66.6-25.34-7.798 24.37-24.37 44.83-46.13 57.83 21.12-2.273 41.58-8.122 60.43-16.24-14.29 20.79-32.16 39.31-52.63 54.25z";t.definition={prefix:e,iconName:a,icon:[l,s,r,n,u]},t.faTwitter=t.definition,t.prefix=e,t.iconName=a,t.width=l,t.height=s,t.ligatures=r,t.unicode=n,t.svgPathData=u,t.aliases=r})(Ue);var Ze={};(function(t){Object.defineProperty(t,"__esModule",{value:!0});var e="fab",a="instagram",l=448,s=512,r=[],n="f16d",u="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z";t.definition={prefix:e,iconName:a,icon:[l,s,r,n,u]},t.faInstagram=t.definition,t.prefix=e,t.iconName=a,t.width=l,t.height=s,t.ligatures=r,t.unicode=n,t.svgPathData=u,t.aliases=r})(Ze);var pe={};(function(t){Object.defineProperty(t,"__esModule",{value:!0});var e="fab",a="facebook",l=512,s=512,r=[62e3],n="f09a",u="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.8 90.69 226.4 209.3 245V327.7h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.3 482.4 504 379.8 504 256z";t.definition={prefix:e,iconName:a,icon:[l,s,r,n,u]},t.faFacebook=t.definition,t.prefix=e,t.iconName=a,t.width=l,t.height=s,t.ligatures=r,t.unicode=n,t.svgPathData=u,t.aliases=r})(pe);var xe={};(function(t){Object.defineProperty(t,"__esModule",{value:!0});var e="fab",a="youtube",l=576,s=512,r=[61802],n="f167",u="M549.7 124.1c-6.281-23.65-24.79-42.28-48.28-48.6C458.8 64 288 64 288 64S117.2 64 74.63 75.49c-23.5 6.322-42 24.95-48.28 48.6-11.41 42.87-11.41 132.3-11.41 132.3s0 89.44 11.41 132.3c6.281 23.65 24.79 41.5 48.28 47.82C117.2 448 288 448 288 448s170.8 0 213.4-11.49c23.5-6.321 42-24.17 48.28-47.82 11.41-42.87 11.41-132.3 11.41-132.3s0-89.44-11.41-132.3zm-317.5 213.5V175.2l142.7 81.21-142.7 81.2z";t.definition={prefix:e,iconName:a,icon:[l,s,r,n,u]},t.faYoutube=t.definition,t.prefix=e,t.iconName=a,t.width=l,t.height=s,t.ligatures=r,t.unicode=n,t.svgPathData=u,t.aliases=r})(xe);function nt(t){let e,a,l,s,r,n,u,v,d,E,f,h,g,y,A,B,Q,G,K,U,R,Z,p,I,x,c,ie,be,we,z,$,re,ye,Ce,Ee,Ne,k,W,H,Oe,Y,F,Ae,X,j,ke,L,q,ne,J,ze,se;return H=new ge({props:{icon:Ue.faTwitter}}),F=new ge({props:{icon:xe.faYoutube}}),j=new ge({props:{icon:Ze.faInstagram}}),q=new ge({props:{icon:pe.faFacebook}}),{c(){e=b("div"),a=b("div"),l=b("h2"),s=b("b"),r=S("CONTACT"),n=N(),u=b("br"),v=N(),d=b("h5"),E=S("Email:"),f=b("br"),h=S("contact@whsrobotics.org"),g=N(),y=b("div"),A=b("h2"),B=b("b"),Q=S("LOCATION"),G=N(),K=b("br"),U=N(),R=b("h5"),Z=S("Westwood High School"),p=N(),I=b("h5"),x=S("200 Nahatan Street #A160"),c=N(),ie=b("h5"),be=S("Westwood, MA 02090"),we=N(),z=b("div"),$=b("h2"),re=b("b"),ye=S("STAY CONNECTED"),Ce=N(),Ee=b("br"),Ne=N(),k=b("span"),W=b("a"),ce(H.$$.fragment),Oe=N(),Y=b("a"),ce(F.$$.fragment),Ae=N(),X=b("a"),ce(j.$$.fragment),ke=N(),L=b("a"),ce(q.$$.fragment),ne=N(),J=b("div"),ze=S("Created and \xA9 2020 by Westwood Robotics. All Rights Reserved."),this.h()},l(C){e=w(C,"DIV",{class:!0});var D=_(e);a=w(D,"DIV",{class:!0});var ee=_(a);l=w(ee,"H2",{class:!0});var Se=_(l);s=w(Se,"B",{});var Te=_(s);r=T(Te,"CONTACT"),Te.forEach(m),Se.forEach(m),n=O(ee),u=w(ee,"BR",{}),v=O(ee),d=w(ee,"H5",{});var fe=_(d);E=T(fe,"Email:"),f=w(fe,"BR",{}),h=T(fe,"contact@whsrobotics.org"),fe.forEach(m),ee.forEach(m),g=O(D),y=w(D,"DIV",{class:!0});var P=_(y);A=w(P,"H2",{class:!0});var Be=_(A);B=w(Be,"B",{});var Re=_(B);Q=T(Re,"LOCATION"),Re.forEach(m),Be.forEach(m),G=O(P),K=w(P,"BR",{}),U=O(P),R=w(P,"H5",{});var Ie=_(R);Z=T(Ie,"Westwood High School"),Ie.forEach(m),p=O(P),I=w(P,"H5",{});var Me=_(I);x=T(Me,"200 Nahatan Street #A160"),Me.forEach(m),c=O(P),ie=w(P,"H5",{});var Ve=_(ie);be=T(Ve,"Westwood, MA 02090"),Ve.forEach(m),P.forEach(m),we=O(D),z=w(D,"DIV",{class:!0});var te=_(z);$=w(te,"H2",{class:!0});var We=_($);re=w(We,"B",{});var He=_(re);ye=T(He,"STAY CONNECTED"),He.forEach(m),We.forEach(m),Ce=O(te),Ee=w(te,"BR",{}),Ne=O(te),k=w(te,"SPAN",{class:!0});var M=_(k);W=w(M,"A",{href:!0,class:!0});var Ye=_(W);he(H.$$.fragment,Ye),Ye.forEach(m),Oe=O(M),Y=w(M,"A",{href:!0,class:!0});var Fe=_(Y);he(F.$$.fragment,Fe),Fe.forEach(m),Ae=O(M),X=w(M,"A",{href:!0,class:!0});var Xe=_(X);he(j.$$.fragment,Xe),Xe.forEach(m),ke=O(M),L=w(M,"A",{href:!0,class:!0});var je=_(L);he(q.$$.fragment,je),je.forEach(m),M.forEach(m),te.forEach(m),D.forEach(m),ne=O(C),J=w(C,"DIV",{class:!0});var Le=_(J);ze=T(Le,"Created and \xA9 2020 by Westwood Robotics. All Rights Reserved."),Le.forEach(m),this.h()},h(){i(l,"class","text-xl"),i(a,"class","text-center p-5 grow shrink basis-1/2 md:basis-1/3"),i(A,"class","text-xl"),i(y,"class","text-center p-5 grow shrink basis-1/2 md:basis-1/3"),i($,"class","text-xl"),i(W,"href","https://twitter.com/WWRobotics1757"),i(W,"class","rounded-full bg-stone-700 hover:bg-stone-900 p-2 transition-colors"),i(Y,"href","https://youtube.com/channel/UCIBET5BFj97t2WCr-tzr1VQ"),i(Y,"class","rounded-full bg-stone-700 hover:bg-stone-900 p-2 transition-colors"),i(X,"href","https://www.instagram.com/wwrobotics1757"),i(X,"class","rounded-full bg-stone-700 hover:bg-stone-900 p-2 transition-colors"),i(L,"href","https://www.facebook.com/WWRobotics1757"),i(L,"class","rounded-full bg-stone-700 hover:bg-stone-900 p-2 transition-colors"),i(k,"class","flex gap-3 justify-center text-3xl cursor-pointer wrap basis-1/2 md:basis-1/3"),i(z,"class","text-center p-5 grow shrink basis-1/2 md:basis-1/3"),i(e,"class","w-full flex text-white bg-green-600 flex-wrap"),i(J,"class","w-full text-white bg-stone-600 text-center p-7")},m(C,D){V(C,e,D),o(e,a),o(a,l),o(l,s),o(s,r),o(a,n),o(a,u),o(a,v),o(a,d),o(d,E),o(d,f),o(d,h),o(e,g),o(e,y),o(y,A),o(A,B),o(B,Q),o(y,G),o(y,K),o(y,U),o(y,R),o(R,Z),o(y,p),o(y,I),o(I,x),o(y,c),o(y,ie),o(ie,be),o(e,we),o(e,z),o(z,$),o($,re),o(re,ye),o(z,Ce),o(z,Ee),o(z,Ne),o(z,k),o(k,W),ue(H,W,null),o(k,Oe),o(k,Y),ue(F,Y,null),o(k,Ae),o(k,X),ue(j,X,null),o(k,ke),o(k,L),ue(q,L,null),V(C,ne,D),V(C,J,D),o(J,ze),se=!0},p:De,i(C){se||(me(H.$$.fragment,C),me(F.$$.fragment,C),me(j.$$.fragment,C),me(q.$$.fragment,C),se=!0)},o(C){ve(H.$$.fragment,C),ve(F.$$.fragment,C),ve(j.$$.fragment,C),ve(q.$$.fragment,C),se=!1},d(C){C&&m(e),de(H),de(F),de(j),de(q),C&&m(ne),C&&m(J)}}}class ft extends Qe{constructor(e){super(),Ge(this,e,null,nt,Ke,{})}}export{ft as F};