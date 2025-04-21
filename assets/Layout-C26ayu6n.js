import{g as jn,r as T,j as g,c as Mn,R as Ye,u as Be,L as Fn,d as jt,a as Ln,b as Rn,y as $,e as zn,f as Dn,h as Wn}from"./index-CXCGVRVu.js";/* empty css               */import{g as $n,a as Un,u as Gn,e as Yn,s as Bn,c as Hn,r as xt,h as Jt,S as ue,B as P}from"./Stack-B9yKnzGd.js";import{B as Q}from"./Button-xg0V5Xuc.js";import{T as F}from"./Typography-CTQUaXGG.js";import{u as Vn,T as Pt}from"./TextField-B_COC7nP.js";import{N as Xn}from"./Navbar-C40ulZpN.js";var He={exports:{}},Kn="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",qn=Kn,Qn=qn;function Ve(){}function Xe(){}Xe.resetWarningCache=Ve;var Zn=function(){function t(a,r,i,s,o,f){if(f!==Qn){var l=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw l.name="Invariant Violation",l}}t.isRequired=t;function e(){return t}var n={array:t,bigint:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,elementType:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:Xe,resetWarningCache:Ve};return n.PropTypes=n,n};He.exports=Zn();var Jn=He.exports;const h=jn(Jn),de=T.createContext();function ta(t){return $n("MuiGrid",t)}const ea=[0,1,2,3,4,5,6,7,8,9,10],na=["column-reverse","column","row-reverse","row"],aa=["nowrap","wrap-reverse","wrap"],at=["auto",!0,1,2,3,4,5,6,7,8,9,10,11,12],ot=Un("MuiGrid",["root","container","item","zeroMinWidth",...ea.map(t=>`spacing-xs-${t}`),...na.map(t=>`direction-xs-${t}`),...aa.map(t=>`wrap-xs-${t}`),...at.map(t=>`grid-xs-${t}`),...at.map(t=>`grid-sm-${t}`),...at.map(t=>`grid-md-${t}`),...at.map(t=>`grid-lg-${t}`),...at.map(t=>`grid-xl-${t}`)]);function ra({theme:t,ownerState:e}){let n;return t.breakpoints.keys.reduce((a,r)=>{let i={};if(e[r]&&(n=e[r]),!n)return a;if(n===!0)i={flexBasis:0,flexGrow:1,maxWidth:"100%"};else if(n==="auto")i={flexBasis:"auto",flexGrow:0,flexShrink:0,maxWidth:"none",width:"auto"};else{const s=xt({values:e.columns,breakpoints:t.breakpoints.values}),o=typeof s=="object"?s[r]:s;if(o==null)return a;const f=`${Math.round(n/o*1e8)/1e6}%`;let l={};if(e.container&&e.item&&e.columnSpacing!==0){const u=t.spacing(e.columnSpacing);if(u!=="0px"){const p=`calc(${f} + ${u})`;l={flexBasis:p,maxWidth:p}}}i={flexBasis:f,flexGrow:0,maxWidth:f,...l}}return t.breakpoints.values[r]===0?Object.assign(a,i):a[t.breakpoints.up(r)]=i,a},{})}function ia({theme:t,ownerState:e}){const n=xt({values:e.direction,breakpoints:t.breakpoints.values});return Jt({theme:t},n,a=>{const r={flexDirection:a};return a.startsWith("column")&&(r[`& > .${ot.item}`]={maxWidth:"none"}),r})}function Ke({breakpoints:t,values:e}){let n="";Object.keys(e).forEach(r=>{n===""&&e[r]!==0&&(n=r)});const a=Object.keys(t).sort((r,i)=>t[r]-t[i]);return a.slice(0,a.indexOf(n))}function sa({theme:t,ownerState:e}){const{container:n,rowSpacing:a}=e;let r={};if(n&&a!==0){const i=xt({values:a,breakpoints:t.breakpoints.values});let s;typeof i=="object"&&(s=Ke({breakpoints:t.breakpoints.values,values:i})),r=Jt({theme:t},i,(o,f)=>{const l=t.spacing(o);return l!=="0px"?{marginTop:`calc(-1 * ${l})`,[`& > .${ot.item}`]:{paddingTop:l}}:s!=null&&s.includes(f)?{}:{marginTop:0,[`& > .${ot.item}`]:{paddingTop:0}}})}return r}function oa({theme:t,ownerState:e}){const{container:n,columnSpacing:a}=e;let r={};if(n&&a!==0){const i=xt({values:a,breakpoints:t.breakpoints.values});let s;typeof i=="object"&&(s=Ke({breakpoints:t.breakpoints.values,values:i})),r=Jt({theme:t},i,(o,f)=>{const l=t.spacing(o);if(l!=="0px"){const u=`calc(-1 * ${l})`;return{width:`calc(100% + ${l})`,marginLeft:u,[`& > .${ot.item}`]:{paddingLeft:l}}}return s!=null&&s.includes(f)?{}:{width:"100%",marginLeft:0,[`& > .${ot.item}`]:{paddingLeft:0}}})}return r}function la(t,e,n={}){if(!t||t<=0)return[];if(typeof t=="string"&&!Number.isNaN(Number(t))||typeof t=="number")return[n[`spacing-xs-${String(t)}`]];const a=[];return e.forEach(r=>{const i=t[r];Number(i)>0&&a.push(n[`spacing-${r}-${String(i)}`])}),a}const ca=Bn("div",{name:"MuiGrid",slot:"Root",overridesResolver:(t,e)=>{const{ownerState:n}=t,{container:a,direction:r,item:i,spacing:s,wrap:o,zeroMinWidth:f,breakpoints:l}=n;let u=[];a&&(u=la(s,l,e));const p=[];return l.forEach(d=>{const b=n[d];b&&p.push(e[`grid-${d}-${String(b)}`])}),[e.root,a&&e.container,i&&e.item,f&&e.zeroMinWidth,...u,r!=="row"&&e[`direction-xs-${String(r)}`],o!=="wrap"&&e[`wrap-xs-${String(o)}`],...p]}})(({ownerState:t})=>({boxSizing:"border-box",...t.container&&{display:"flex",flexWrap:"wrap",width:"100%"},...t.item&&{margin:0},...t.zeroMinWidth&&{minWidth:0},...t.wrap!=="wrap"&&{flexWrap:t.wrap}}),ia,sa,oa,ra);function fa(t,e){if(!t||t<=0)return[];if(typeof t=="string"&&!Number.isNaN(Number(t))||typeof t=="number")return[`spacing-xs-${String(t)}`];const n=[];return e.forEach(a=>{const r=t[a];if(Number(r)>0){const i=`spacing-${a}-${String(r)}`;n.push(i)}}),n}const ua=t=>{const{classes:e,container:n,direction:a,item:r,spacing:i,wrap:s,zeroMinWidth:o,breakpoints:f}=t;let l=[];n&&(l=fa(i,f));const u=[];f.forEach(d=>{const b=t[d];b&&u.push(`grid-${d}-${String(b)}`)});const p={root:["root",n&&"container",r&&"item",o&&"zeroMinWidth",...l,a!=="row"&&`direction-xs-${String(a)}`,s!=="wrap"&&`wrap-xs-${String(s)}`,...u]};return Hn(p,ta,e)},me=T.forwardRef(function(e,n){const a=Gn({props:e,name:"MuiGrid"}),{breakpoints:r}=Vn(),i=Yn(a),{className:s,columns:o,columnSpacing:f,component:l="div",container:u=!1,direction:p="row",item:d=!1,rowSpacing:b,spacing:y=0,wrap:x="wrap",zeroMinWidth:v=!1,...w}=i,S=b||y,A=f||y,C=T.useContext(de),O=u?o||12:C,D={},W={...w};r.keys.forEach(dt=>{w[dt]!=null&&(D[dt]=w[dt],delete W[dt])});const N={...i,columns:O,container:u,direction:p,item:d,rowSpacing:S,columnSpacing:A,wrap:x,zeroMinWidth:v,spacing:y,...D,breakpoints:r.keys},nt=ua(N);return g.jsx(de.Provider,{value:O,children:g.jsx(ca,{ownerState:N,className:Mn(nt.root,s),as:l,ref:n,...W})})}),da="/inotes/assets/ohho-CKLdeVfI.jpg";/*!
 * Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */function ma(t,e,n){return(e=ga(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function pe(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter(function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable})),n.push.apply(n,a)}return n}function c(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?pe(Object(n),!0).forEach(function(a){ma(t,a,n[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):pe(Object(n)).forEach(function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(n,a))})}return t}function pa(t,e){if(typeof t!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var a=n.call(t,e);if(typeof a!="object")return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function ga(t){var e=pa(t,"string");return typeof e=="symbol"?e:e+""}const ge=()=>{};let te={},qe={},Qe=null,Ze={mark:ge,measure:ge};try{typeof window<"u"&&(te=window),typeof document<"u"&&(qe=document),typeof MutationObserver<"u"&&(Qe=MutationObserver),typeof performance<"u"&&(Ze=performance)}catch{}const{userAgent:he=""}=te.navigator||{},G=te,k=qe,be=Qe,mt=Ze;G.document;const z=!!k.documentElement&&!!k.head&&typeof k.addEventListener=="function"&&typeof k.createElement=="function",Je=~he.indexOf("MSIE")||~he.indexOf("Trident/");var ha=/fa(s|r|l|t|d|dr|dl|dt|b|k|kd|ss|sr|sl|st|sds|sdr|sdl|sdt)?[\-\ ]/,ba=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit)?.*/i,tn={classic:{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fab:"brands","fa-brands":"brands"},duotone:{fa:"solid",fad:"solid","fa-solid":"solid","fa-duotone":"solid",fadr:"regular","fa-regular":"regular",fadl:"light","fa-light":"light",fadt:"thin","fa-thin":"thin"},sharp:{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"},"sharp-duotone":{fa:"solid",fasds:"solid","fa-solid":"solid",fasdr:"regular","fa-regular":"regular",fasdl:"light","fa-light":"light",fasdt:"thin","fa-thin":"thin"}},ya={GROUP:"duotone-group",PRIMARY:"primary",SECONDARY:"secondary"},en=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone"],E="classic",wt="duotone",va="sharp",xa="sharp-duotone",nn=[E,wt,va,xa],wa={classic:{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},duotone:{900:"fad",400:"fadr",300:"fadl",100:"fadt"},sharp:{900:"fass",400:"fasr",300:"fasl",100:"fast"},"sharp-duotone":{900:"fasds",400:"fasdr",300:"fasdl",100:"fasdt"}},ka={"Font Awesome 6 Free":{900:"fas",400:"far"},"Font Awesome 6 Pro":{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},"Font Awesome 6 Brands":{400:"fab",normal:"fab"},"Font Awesome 6 Duotone":{900:"fad",400:"fadr",normal:"fadr",300:"fadl",100:"fadt"},"Font Awesome 6 Sharp":{900:"fass",400:"fasr",normal:"fasr",300:"fasl",100:"fast"},"Font Awesome 6 Sharp Duotone":{900:"fasds",400:"fasdr",normal:"fasdr",300:"fasdl",100:"fasdt"}},Sa=new Map([["classic",{defaultShortPrefixId:"fas",defaultStyleId:"solid",styleIds:["solid","regular","light","thin","brands"],futureStyleIds:[],defaultFontWeight:900}],["sharp",{defaultShortPrefixId:"fass",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["duotone",{defaultShortPrefixId:"fad",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["sharp-duotone",{defaultShortPrefixId:"fasds",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}]]),Aa={classic:{solid:"fas",regular:"far",light:"fal",thin:"fat",brands:"fab"},duotone:{solid:"fad",regular:"fadr",light:"fadl",thin:"fadt"},sharp:{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"},"sharp-duotone":{solid:"fasds",regular:"fasdr",light:"fasdl",thin:"fasdt"}},Oa=["fak","fa-kit","fakd","fa-kit-duotone"],ye={kit:{fak:"kit","fa-kit":"kit"},"kit-duotone":{fakd:"kit-duotone","fa-kit-duotone":"kit-duotone"}},Pa=["kit"],Ea={kit:{"fa-kit":"fak"}},Ca=["fak","fakd"],Na={kit:{fak:"fa-kit"}},ve={kit:{kit:"fak"},"kit-duotone":{"kit-duotone":"fakd"}},pt={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},Ta=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone"],Ia=["fak","fa-kit","fakd","fa-kit-duotone"],_a={"Font Awesome Kit":{400:"fak",normal:"fak"},"Font Awesome Kit Duotone":{400:"fakd",normal:"fakd"}},ja={classic:{"fa-brands":"fab","fa-duotone":"fad","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},duotone:{"fa-regular":"fadr","fa-light":"fadl","fa-thin":"fadt"},sharp:{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"},"sharp-duotone":{"fa-solid":"fasds","fa-regular":"fasdr","fa-light":"fasdl","fa-thin":"fasdt"}},Ma={classic:["fas","far","fal","fat","fad"],duotone:["fadr","fadl","fadt"],sharp:["fass","fasr","fasl","fast"],"sharp-duotone":["fasds","fasdr","fasdl","fasdt"]},Mt={classic:{fab:"fa-brands",fad:"fa-duotone",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},duotone:{fadr:"fa-regular",fadl:"fa-light",fadt:"fa-thin"},sharp:{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"},"sharp-duotone":{fasds:"fa-solid",fasdr:"fa-regular",fasdl:"fa-light",fasdt:"fa-thin"}},Fa=["fa-solid","fa-regular","fa-light","fa-thin","fa-duotone","fa-brands"],Ft=["fa","fas","far","fal","fat","fad","fadr","fadl","fadt","fab","fass","fasr","fasl","fast","fasds","fasdr","fasdl","fasdt",...Ta,...Fa],La=["solid","regular","light","thin","duotone","brands"],an=[1,2,3,4,5,6,7,8,9,10],Ra=an.concat([11,12,13,14,15,16,17,18,19,20]),za=[...Object.keys(Ma),...La,"2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",pt.GROUP,pt.SWAP_OPACITY,pt.PRIMARY,pt.SECONDARY].concat(an.map(t=>"".concat(t,"x"))).concat(Ra.map(t=>"w-".concat(t))),Da={"Font Awesome 5 Free":{900:"fas",400:"far"},"Font Awesome 5 Pro":{900:"fas",400:"far",normal:"far",300:"fal"},"Font Awesome 5 Brands":{400:"fab",normal:"fab"},"Font Awesome 5 Duotone":{900:"fad"}};const L="___FONT_AWESOME___",Lt=16,rn="fa",sn="svg-inline--fa",V="data-fa-i2svg",Rt="data-fa-pseudo-element",Wa="data-fa-pseudo-element-pending",ee="data-prefix",ne="data-icon",xe="fontawesome-i2svg",$a="async",Ua=["HTML","HEAD","STYLE","SCRIPT"],on=(()=>{try{return!0}catch{return!1}})();function ft(t){return new Proxy(t,{get(e,n){return n in e?e[n]:e[E]}})}const ln=c({},tn);ln[E]=c(c(c(c({},{"fa-duotone":"duotone"}),tn[E]),ye.kit),ye["kit-duotone"]);const Ga=ft(ln),zt=c({},Aa);zt[E]=c(c(c(c({},{duotone:"fad"}),zt[E]),ve.kit),ve["kit-duotone"]);const we=ft(zt),Dt=c({},Mt);Dt[E]=c(c({},Dt[E]),Na.kit);const ae=ft(Dt),Wt=c({},ja);Wt[E]=c(c({},Wt[E]),Ea.kit);ft(Wt);const Ya=ha,cn="fa-layers-text",Ba=ba,Ha=c({},wa);ft(Ha);const Va=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],Et=ya,Xa=[...Pa,...za],it=G.FontAwesomeConfig||{};function Ka(t){var e=k.querySelector("script["+t+"]");if(e)return e.getAttribute(t)}function qa(t){return t===""?!0:t==="false"?!1:t==="true"?!0:t}k&&typeof k.querySelector=="function"&&[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]].forEach(e=>{let[n,a]=e;const r=qa(Ka(n));r!=null&&(it[a]=r)});const fn={styleDefault:"solid",familyDefault:E,cssPrefix:rn,replacementClass:sn,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};it.familyPrefix&&(it.cssPrefix=it.familyPrefix);const tt=c(c({},fn),it);tt.autoReplaceSvg||(tt.observeMutations=!1);const m={};Object.keys(fn).forEach(t=>{Object.defineProperty(m,t,{enumerable:!0,set:function(e){tt[t]=e,st.forEach(n=>n(m))},get:function(){return tt[t]}})});Object.defineProperty(m,"familyPrefix",{enumerable:!0,set:function(t){tt.cssPrefix=t,st.forEach(e=>e(m))},get:function(){return tt.cssPrefix}});G.FontAwesomeConfig=m;const st=[];function Qa(t){return st.push(t),()=>{st.splice(st.indexOf(t),1)}}const U=Lt,j={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function Za(t){if(!t||!z)return;const e=k.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=t;const n=k.head.childNodes;let a=null;for(let r=n.length-1;r>-1;r--){const i=n[r],s=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(s)>-1&&(a=i)}return k.head.insertBefore(e,a),t}const Ja="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function lt(){let t=12,e="";for(;t-- >0;)e+=Ja[Math.random()*62|0];return e}function et(t){const e=[];for(let n=(t||[]).length>>>0;n--;)e[n]=t[n];return e}function re(t){return t.classList?et(t.classList):(t.getAttribute("class")||"").split(" ").filter(e=>e)}function un(t){return"".concat(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function tr(t){return Object.keys(t||{}).reduce((e,n)=>e+"".concat(n,'="').concat(un(t[n]),'" '),"").trim()}function kt(t){return Object.keys(t||{}).reduce((e,n)=>e+"".concat(n,": ").concat(t[n].trim(),";"),"")}function ie(t){return t.size!==j.size||t.x!==j.x||t.y!==j.y||t.rotate!==j.rotate||t.flipX||t.flipY}function er(t){let{transform:e,containerWidth:n,iconWidth:a}=t;const r={transform:"translate(".concat(n/2," 256)")},i="translate(".concat(e.x*32,", ").concat(e.y*32,") "),s="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),o="rotate(".concat(e.rotate," 0 0)"),f={transform:"".concat(i," ").concat(s," ").concat(o)},l={transform:"translate(".concat(a/2*-1," -256)")};return{outer:r,inner:f,path:l}}function nr(t){let{transform:e,width:n=Lt,height:a=Lt,startCentered:r=!1}=t,i="";return r&&Je?i+="translate(".concat(e.x/U-n/2,"em, ").concat(e.y/U-a/2,"em) "):r?i+="translate(calc(-50% + ".concat(e.x/U,"em), calc(-50% + ").concat(e.y/U,"em)) "):i+="translate(".concat(e.x/U,"em, ").concat(e.y/U,"em) "),i+="scale(".concat(e.size/U*(e.flipX?-1:1),", ").concat(e.size/U*(e.flipY?-1:1),") "),i+="rotate(".concat(e.rotate,"deg) "),i}var ar=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Free";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Free";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Pro";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Pro";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-duotone-regular: normal 400 1em/1 "Font Awesome 6 Duotone";
  --fa-font-duotone-light: normal 300 1em/1 "Font Awesome 6 Duotone";
  --fa-font-duotone-thin: normal 100 1em/1 "Font Awesome 6 Duotone";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-duotone-solid: normal 900 1em/1 "Font Awesome 6 Sharp Duotone";
  --fa-font-sharp-duotone-regular: normal 400 1em/1 "Font Awesome 6 Sharp Duotone";
  --fa-font-sharp-duotone-light: normal 300 1em/1 "Font Awesome 6 Sharp Duotone";
  --fa-font-sharp-duotone-thin: normal 100 1em/1 "Font Awesome 6 Sharp Duotone";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-counter-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(-1 * var(--fa-li-width, 2em));
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  animation-name: fa-beat;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  animation-name: fa-bounce;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  animation-name: fa-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  animation-name: fa-beat-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  animation-name: fa-flip;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  animation-name: fa-shake;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  animation-name: fa-spin;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 2s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  animation-name: fa-spin;
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    animation-delay: -1ms;
    animation-duration: 1ms;
    animation-iteration-count: 1;
    transition-delay: 0s;
    transition-duration: 0s;
  }
}
@keyframes fa-beat {
  0%, 90% {
    transform: scale(1);
  }
  45% {
    transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-bounce {
  0% {
    transform: scale(1, 1) translateY(0);
  }
  10% {
    transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    transform: scale(1, 1) translateY(0);
  }
  100% {
    transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    transform: scale(1);
  }
  50% {
    opacity: 1;
    transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-flip {
  50% {
    transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-shake {
  0% {
    transform: rotate(-15deg);
  }
  4% {
    transform: rotate(15deg);
  }
  8%, 24% {
    transform: rotate(-18deg);
  }
  12%, 28% {
    transform: rotate(18deg);
  }
  16% {
    transform: rotate(-22deg);
  }
  20% {
    transform: rotate(22deg);
  }
  32% {
    transform: rotate(-12deg);
  }
  36% {
    transform: rotate(12deg);
  }
  40%, 100% {
    transform: rotate(0deg);
  }
}
@keyframes fa-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  transform: rotate(90deg);
}

.fa-rotate-180 {
  transform: rotate(180deg);
}

.fa-rotate-270 {
  transform: rotate(270deg);
}

.fa-flip-horizontal {
  transform: scale(-1, 1);
}

.fa-flip-vertical {
  transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  transform: scale(-1, -1);
}

.fa-rotate-by {
  transform: rotate(var(--fa-rotate-angle, 0));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}`;function dn(){const t=rn,e=sn,n=m.cssPrefix,a=m.replacementClass;let r=ar;if(n!==t||a!==e){const i=new RegExp("\\.".concat(t,"\\-"),"g"),s=new RegExp("\\--".concat(t,"\\-"),"g"),o=new RegExp("\\.".concat(e),"g");r=r.replace(i,".".concat(n,"-")).replace(s,"--".concat(n,"-")).replace(o,".".concat(a))}return r}let ke=!1;function Ct(){m.autoAddCss&&!ke&&(Za(dn()),ke=!0)}var rr={mixout(){return{dom:{css:dn,insertCss:Ct}}},hooks(){return{beforeDOMElementCreation(){Ct()},beforeI2svg(){Ct()}}}};const R=G||{};R[L]||(R[L]={});R[L].styles||(R[L].styles={});R[L].hooks||(R[L].hooks={});R[L].shims||(R[L].shims=[]);var M=R[L];const mn=[],pn=function(){k.removeEventListener("DOMContentLoaded",pn),bt=1,mn.map(t=>t())};let bt=!1;z&&(bt=(k.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(k.readyState),bt||k.addEventListener("DOMContentLoaded",pn));function ir(t){z&&(bt?setTimeout(t,0):mn.push(t))}function ut(t){const{tag:e,attributes:n={},children:a=[]}=t;return typeof t=="string"?un(t):"<".concat(e," ").concat(tr(n),">").concat(a.map(ut).join(""),"</").concat(e,">")}function Se(t,e,n){if(t&&t[e]&&t[e][n])return{prefix:e,iconName:n,icon:t[e][n]}}var Nt=function(e,n,a,r){var i=Object.keys(e),s=i.length,o=n,f,l,u;for(a===void 0?(f=1,u=e[i[0]]):(f=0,u=a);f<s;f++)l=i[f],u=o(u,e[l],l,e);return u};function sr(t){const e=[];let n=0;const a=t.length;for(;n<a;){const r=t.charCodeAt(n++);if(r>=55296&&r<=56319&&n<a){const i=t.charCodeAt(n++);(i&64512)==56320?e.push(((r&1023)<<10)+(i&1023)+65536):(e.push(r),n--)}else e.push(r)}return e}function $t(t){const e=sr(t);return e.length===1?e[0].toString(16):null}function or(t,e){const n=t.length;let a=t.charCodeAt(e),r;return a>=55296&&a<=56319&&n>e+1&&(r=t.charCodeAt(e+1),r>=56320&&r<=57343)?(a-55296)*1024+r-56320+65536:a}function Ae(t){return Object.keys(t).reduce((e,n)=>{const a=t[n];return!!a.icon?e[a.iconName]=a.icon:e[n]=a,e},{})}function Ut(t,e){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};const{skipHooks:a=!1}=n,r=Ae(e);typeof M.hooks.addPack=="function"&&!a?M.hooks.addPack(t,Ae(e)):M.styles[t]=c(c({},M.styles[t]||{}),r),t==="fas"&&Ut("fa",e)}const{styles:ct,shims:lr}=M,gn=Object.keys(ae),cr=gn.reduce((t,e)=>(t[e]=Object.keys(ae[e]),t),{});let se=null,hn={},bn={},yn={},vn={},xn={};function fr(t){return~Xa.indexOf(t)}function ur(t,e){const n=e.split("-"),a=n[0],r=n.slice(1).join("-");return a===t&&r!==""&&!fr(r)?r:null}const wn=()=>{const t=a=>Nt(ct,(r,i,s)=>(r[s]=Nt(i,a,{}),r),{});hn=t((a,r,i)=>(r[3]&&(a[r[3]]=i),r[2]&&r[2].filter(o=>typeof o=="number").forEach(o=>{a[o.toString(16)]=i}),a)),bn=t((a,r,i)=>(a[i]=i,r[2]&&r[2].filter(o=>typeof o=="string").forEach(o=>{a[o]=i}),a)),xn=t((a,r,i)=>{const s=r[2];return a[i]=i,s.forEach(o=>{a[o]=i}),a});const e="far"in ct||m.autoFetchSvg,n=Nt(lr,(a,r)=>{const i=r[0];let s=r[1];const o=r[2];return s==="far"&&!e&&(s="fas"),typeof i=="string"&&(a.names[i]={prefix:s,iconName:o}),typeof i=="number"&&(a.unicodes[i.toString(16)]={prefix:s,iconName:o}),a},{names:{},unicodes:{}});yn=n.names,vn=n.unicodes,se=St(m.styleDefault,{family:m.familyDefault})};Qa(t=>{se=St(t.styleDefault,{family:m.familyDefault})});wn();function oe(t,e){return(hn[t]||{})[e]}function dr(t,e){return(bn[t]||{})[e]}function H(t,e){return(xn[t]||{})[e]}function kn(t){return yn[t]||{prefix:null,iconName:null}}function mr(t){const e=vn[t],n=oe("fas",t);return e||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function Y(){return se}const Sn=()=>({prefix:null,iconName:null,rest:[]});function pr(t){let e=E;const n=gn.reduce((a,r)=>(a[r]="".concat(m.cssPrefix,"-").concat(r),a),{});return nn.forEach(a=>{(t.includes(n[a])||t.some(r=>cr[a].includes(r)))&&(e=a)}),e}function St(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{family:n=E}=e,a=Ga[n][t];if(n===wt&&!t)return"fad";const r=we[n][t]||we[n][a],i=t in M.styles?t:null;return r||i||null}function gr(t){let e=[],n=null;return t.forEach(a=>{const r=ur(m.cssPrefix,a);r?n=r:a&&e.push(a)}),{iconName:n,rest:e}}function Oe(t){return t.sort().filter((e,n,a)=>a.indexOf(e)===n)}function At(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{skipLookups:n=!1}=e;let a=null;const r=Ft.concat(Ia),i=Oe(t.filter(p=>r.includes(p))),s=Oe(t.filter(p=>!Ft.includes(p))),o=i.filter(p=>(a=p,!en.includes(p))),[f=null]=o,l=pr(i),u=c(c({},gr(s)),{},{prefix:St(f,{family:l})});return c(c(c({},u),vr({values:t,family:l,styles:ct,config:m,canonical:u,givenPrefix:a})),hr(n,a,u))}function hr(t,e,n){let{prefix:a,iconName:r}=n;if(t||!a||!r)return{prefix:a,iconName:r};const i=e==="fa"?kn(r):{},s=H(a,r);return r=i.iconName||s||r,a=i.prefix||a,a==="far"&&!ct.far&&ct.fas&&!m.autoFetchSvg&&(a="fas"),{prefix:a,iconName:r}}const br=nn.filter(t=>t!==E||t!==wt),yr=Object.keys(Mt).filter(t=>t!==E).map(t=>Object.keys(Mt[t])).flat();function vr(t){const{values:e,family:n,canonical:a,givenPrefix:r="",styles:i={},config:s={}}=t,o=n===wt,f=e.includes("fa-duotone")||e.includes("fad"),l=s.familyDefault==="duotone",u=a.prefix==="fad"||a.prefix==="fa-duotone";if(!o&&(f||l||u)&&(a.prefix="fad"),(e.includes("fa-brands")||e.includes("fab"))&&(a.prefix="fab"),!a.prefix&&br.includes(n)&&(Object.keys(i).find(d=>yr.includes(d))||s.autoFetchSvg)){const d=Sa.get(n).defaultShortPrefixId;a.prefix=d,a.iconName=H(a.prefix,a.iconName)||a.iconName}return(a.prefix==="fa"||r==="fa")&&(a.prefix=Y()||"fas"),a}class xr{constructor(){this.definitions={}}add(){for(var e=arguments.length,n=new Array(e),a=0;a<e;a++)n[a]=arguments[a];const r=n.reduce(this._pullDefinitions,{});Object.keys(r).forEach(i=>{this.definitions[i]=c(c({},this.definitions[i]||{}),r[i]),Ut(i,r[i]);const s=ae[E][i];s&&Ut(s,r[i]),wn()})}reset(){this.definitions={}}_pullDefinitions(e,n){const a=n.prefix&&n.iconName&&n.icon?{0:n}:n;return Object.keys(a).map(r=>{const{prefix:i,iconName:s,icon:o}=a[r],f=o[2];e[i]||(e[i]={}),f.length>0&&f.forEach(l=>{typeof l=="string"&&(e[i][l]=o)}),e[i][s]=o}),e}}let Pe=[],K={};const Z={},wr=Object.keys(Z);function kr(t,e){let{mixoutsTo:n}=e;return Pe=t,K={},Object.keys(Z).forEach(a=>{wr.indexOf(a)===-1&&delete Z[a]}),Pe.forEach(a=>{const r=a.mixout?a.mixout():{};if(Object.keys(r).forEach(i=>{typeof r[i]=="function"&&(n[i]=r[i]),typeof r[i]=="object"&&Object.keys(r[i]).forEach(s=>{n[i]||(n[i]={}),n[i][s]=r[i][s]})}),a.hooks){const i=a.hooks();Object.keys(i).forEach(s=>{K[s]||(K[s]=[]),K[s].push(i[s])})}a.provides&&a.provides(Z)}),n}function Gt(t,e){for(var n=arguments.length,a=new Array(n>2?n-2:0),r=2;r<n;r++)a[r-2]=arguments[r];return(K[t]||[]).forEach(s=>{e=s.apply(null,[e,...a])}),e}function X(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),a=1;a<e;a++)n[a-1]=arguments[a];(K[t]||[]).forEach(i=>{i.apply(null,n)})}function B(){const t=arguments[0],e=Array.prototype.slice.call(arguments,1);return Z[t]?Z[t].apply(null,e):void 0}function Yt(t){t.prefix==="fa"&&(t.prefix="fas");let{iconName:e}=t;const n=t.prefix||Y();if(e)return e=H(n,e)||e,Se(An.definitions,n,e)||Se(M.styles,n,e)}const An=new xr,Sr=()=>{m.autoReplaceSvg=!1,m.observeMutations=!1,X("noAuto")},Ar={i2svg:function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return z?(X("beforeI2svg",t),B("pseudoElements2svg",t),B("i2svg",t)):Promise.reject(new Error("Operation requires a DOM of some kind."))},watch:function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:e}=t;m.autoReplaceSvg===!1&&(m.autoReplaceSvg=!0),m.observeMutations=!0,ir(()=>{Pr({autoReplaceSvgRoot:e}),X("watch",t)})}},Or={icon:t=>{if(t===null)return null;if(typeof t=="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:H(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){const e=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],n=St(t[0]);return{prefix:n,iconName:H(n,e)||e}}if(typeof t=="string"&&(t.indexOf("".concat(m.cssPrefix,"-"))>-1||t.match(Ya))){const e=At(t.split(" "),{skipLookups:!0});return{prefix:e.prefix||Y(),iconName:H(e.prefix,e.iconName)||e.iconName}}if(typeof t=="string"){const e=Y();return{prefix:e,iconName:H(e,t)||t}}}},I={noAuto:Sr,config:m,dom:Ar,parse:Or,library:An,findIconDefinition:Yt,toHtml:ut},Pr=function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:e=k}=t;(Object.keys(M.styles).length>0||m.autoFetchSvg)&&z&&m.autoReplaceSvg&&I.dom.i2svg({node:e})};function Ot(t,e){return Object.defineProperty(t,"abstract",{get:e}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map(n=>ut(n))}}),Object.defineProperty(t,"node",{get:function(){if(!z)return;const n=k.createElement("div");return n.innerHTML=t.html,n.children}}),t}function Er(t){let{children:e,main:n,mask:a,attributes:r,styles:i,transform:s}=t;if(ie(s)&&n.found&&!a.found){const{width:o,height:f}=n,l={x:o/f/2,y:.5};r.style=kt(c(c({},i),{},{"transform-origin":"".concat(l.x+s.x/16,"em ").concat(l.y+s.y/16,"em")}))}return[{tag:"svg",attributes:r,children:e}]}function Cr(t){let{prefix:e,iconName:n,children:a,attributes:r,symbol:i}=t;const s=i===!0?"".concat(e,"-").concat(m.cssPrefix,"-").concat(n):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:c(c({},r),{},{id:s}),children:a}]}]}function le(t){const{icons:{main:e,mask:n},prefix:a,iconName:r,transform:i,symbol:s,title:o,maskId:f,titleId:l,extra:u,watchable:p=!1}=t,{width:d,height:b}=n.found?n:e,y=Ca.includes(a),x=[m.replacementClass,r?"".concat(m.cssPrefix,"-").concat(r):""].filter(O=>u.classes.indexOf(O)===-1).filter(O=>O!==""||!!O).concat(u.classes).join(" ");let v={children:[],attributes:c(c({},u.attributes),{},{"data-prefix":a,"data-icon":r,class:x,role:u.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(d," ").concat(b)})};const w=y&&!~u.classes.indexOf("fa-fw")?{width:"".concat(d/b*16*.0625,"em")}:{};p&&(v.attributes[V]=""),o&&(v.children.push({tag:"title",attributes:{id:v.attributes["aria-labelledby"]||"title-".concat(l||lt())},children:[o]}),delete v.attributes.title);const S=c(c({},v),{},{prefix:a,iconName:r,main:e,mask:n,maskId:f,transform:i,symbol:s,styles:c(c({},w),u.styles)}),{children:A,attributes:C}=n.found&&e.found?B("generateAbstractMask",S)||{children:[],attributes:{}}:B("generateAbstractIcon",S)||{children:[],attributes:{}};return S.children=A,S.attributes=C,s?Cr(S):Er(S)}function Ee(t){const{content:e,width:n,height:a,transform:r,title:i,extra:s,watchable:o=!1}=t,f=c(c(c({},s.attributes),i?{title:i}:{}),{},{class:s.classes.join(" ")});o&&(f[V]="");const l=c({},s.styles);ie(r)&&(l.transform=nr({transform:r,startCentered:!0,width:n,height:a}),l["-webkit-transform"]=l.transform);const u=kt(l);u.length>0&&(f.style=u);const p=[];return p.push({tag:"span",attributes:f,children:[e]}),i&&p.push({tag:"span",attributes:{class:"sr-only"},children:[i]}),p}function Nr(t){const{content:e,title:n,extra:a}=t,r=c(c(c({},a.attributes),n?{title:n}:{}),{},{class:a.classes.join(" ")}),i=kt(a.styles);i.length>0&&(r.style=i);const s=[];return s.push({tag:"span",attributes:r,children:[e]}),n&&s.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),s}const{styles:Tt}=M;function Bt(t){const e=t[0],n=t[1],[a]=t.slice(4);let r=null;return Array.isArray(a)?r={tag:"g",attributes:{class:"".concat(m.cssPrefix,"-").concat(Et.GROUP)},children:[{tag:"path",attributes:{class:"".concat(m.cssPrefix,"-").concat(Et.SECONDARY),fill:"currentColor",d:a[0]}},{tag:"path",attributes:{class:"".concat(m.cssPrefix,"-").concat(Et.PRIMARY),fill:"currentColor",d:a[1]}}]}:r={tag:"path",attributes:{fill:"currentColor",d:a}},{found:!0,width:e,height:n,icon:r}}const Tr={found:!1,width:512,height:512};function Ir(t,e){!on&&!m.showMissingIcons&&t&&console.error('Icon with name "'.concat(t,'" and prefix "').concat(e,'" is missing.'))}function Ht(t,e){let n=e;return e==="fa"&&m.styleDefault!==null&&(e=Y()),new Promise((a,r)=>{if(n==="fa"){const i=kn(t)||{};t=i.iconName||t,e=i.prefix||e}if(t&&e&&Tt[e]&&Tt[e][t]){const i=Tt[e][t];return a(Bt(i))}Ir(t,e),a(c(c({},Tr),{},{icon:m.showMissingIcons&&t?B("missingIconAbstract")||{}:{}}))})}const Ce=()=>{},Vt=m.measurePerformance&&mt&&mt.mark&&mt.measure?mt:{mark:Ce,measure:Ce},rt='FA "6.7.2"',_r=t=>(Vt.mark("".concat(rt," ").concat(t," begins")),()=>On(t)),On=t=>{Vt.mark("".concat(rt," ").concat(t," ends")),Vt.measure("".concat(rt," ").concat(t),"".concat(rt," ").concat(t," begins"),"".concat(rt," ").concat(t," ends"))};var ce={begin:_r,end:On};const gt=()=>{};function Ne(t){return typeof(t.getAttribute?t.getAttribute(V):null)=="string"}function jr(t){const e=t.getAttribute?t.getAttribute(ee):null,n=t.getAttribute?t.getAttribute(ne):null;return e&&n}function Mr(t){return t&&t.classList&&t.classList.contains&&t.classList.contains(m.replacementClass)}function Fr(){return m.autoReplaceSvg===!0?ht.replace:ht[m.autoReplaceSvg]||ht.replace}function Lr(t){return k.createElementNS("http://www.w3.org/2000/svg",t)}function Rr(t){return k.createElement(t)}function Pn(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{ceFn:n=t.tag==="svg"?Lr:Rr}=e;if(typeof t=="string")return k.createTextNode(t);const a=n(t.tag);return Object.keys(t.attributes||[]).forEach(function(i){a.setAttribute(i,t.attributes[i])}),(t.children||[]).forEach(function(i){a.appendChild(Pn(i,{ceFn:n}))}),a}function zr(t){let e=" ".concat(t.outerHTML," ");return e="".concat(e,"Font Awesome fontawesome.com "),e}const ht={replace:function(t){const e=t[0];if(e.parentNode)if(t[1].forEach(n=>{e.parentNode.insertBefore(Pn(n),e)}),e.getAttribute(V)===null&&m.keepOriginalSource){let n=k.createComment(zr(e));e.parentNode.replaceChild(n,e)}else e.remove()},nest:function(t){const e=t[0],n=t[1];if(~re(e).indexOf(m.replacementClass))return ht.replace(t);const a=new RegExp("".concat(m.cssPrefix,"-.*"));if(delete n[0].attributes.id,n[0].attributes.class){const i=n[0].attributes.class.split(" ").reduce((s,o)=>(o===m.replacementClass||o.match(a)?s.toSvg.push(o):s.toNode.push(o),s),{toNode:[],toSvg:[]});n[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?e.removeAttribute("class"):e.setAttribute("class",i.toNode.join(" "))}const r=n.map(i=>ut(i)).join(`
`);e.setAttribute(V,""),e.innerHTML=r}};function Te(t){t()}function En(t,e){const n=typeof e=="function"?e:gt;if(t.length===0)n();else{let a=Te;m.mutateApproach===$a&&(a=G.requestAnimationFrame||Te),a(()=>{const r=Fr(),i=ce.begin("mutate");t.map(r),i(),n()})}}let fe=!1;function Cn(){fe=!0}function Xt(){fe=!1}let yt=null;function Ie(t){if(!be||!m.observeMutations)return;const{treeCallback:e=gt,nodeCallback:n=gt,pseudoElementsCallback:a=gt,observeMutationsRoot:r=k}=t;yt=new be(i=>{if(fe)return;const s=Y();et(i).forEach(o=>{if(o.type==="childList"&&o.addedNodes.length>0&&!Ne(o.addedNodes[0])&&(m.searchPseudoElements&&a(o.target),e(o.target)),o.type==="attributes"&&o.target.parentNode&&m.searchPseudoElements&&a(o.target.parentNode),o.type==="attributes"&&Ne(o.target)&&~Va.indexOf(o.attributeName))if(o.attributeName==="class"&&jr(o.target)){const{prefix:f,iconName:l}=At(re(o.target));o.target.setAttribute(ee,f||s),l&&o.target.setAttribute(ne,l)}else Mr(o.target)&&n(o.target)})}),z&&yt.observe(r,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}function Dr(){yt&&yt.disconnect()}function Wr(t){const e=t.getAttribute("style");let n=[];return e&&(n=e.split(";").reduce((a,r)=>{const i=r.split(":"),s=i[0],o=i.slice(1);return s&&o.length>0&&(a[s]=o.join(":").trim()),a},{})),n}function $r(t){const e=t.getAttribute("data-prefix"),n=t.getAttribute("data-icon"),a=t.innerText!==void 0?t.innerText.trim():"";let r=At(re(t));return r.prefix||(r.prefix=Y()),e&&n&&(r.prefix=e,r.iconName=n),r.iconName&&r.prefix||(r.prefix&&a.length>0&&(r.iconName=dr(r.prefix,t.innerText)||oe(r.prefix,$t(t.innerText))),!r.iconName&&m.autoFetchSvg&&t.firstChild&&t.firstChild.nodeType===Node.TEXT_NODE&&(r.iconName=t.firstChild.data)),r}function Ur(t){const e=et(t.attributes).reduce((r,i)=>(r.name!=="class"&&r.name!=="style"&&(r[i.name]=i.value),r),{}),n=t.getAttribute("title"),a=t.getAttribute("data-fa-title-id");return m.autoA11y&&(n?e["aria-labelledby"]="".concat(m.replacementClass,"-title-").concat(a||lt()):(e["aria-hidden"]="true",e.focusable="false")),e}function Gr(){return{iconName:null,title:null,titleId:null,prefix:null,transform:j,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function _e(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0};const{iconName:n,prefix:a,rest:r}=$r(t),i=Ur(t),s=Gt("parseNodeAttributes",{},t);let o=e.styleParser?Wr(t):[];return c({iconName:n,title:t.getAttribute("title"),titleId:t.getAttribute("data-fa-title-id"),prefix:a,transform:j,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:r,styles:o,attributes:i}},s)}const{styles:Yr}=M;function Nn(t){const e=m.autoReplaceSvg==="nest"?_e(t,{styleParser:!1}):_e(t);return~e.extra.classes.indexOf(cn)?B("generateLayersText",t,e):B("generateSvgReplacementMutation",t,e)}function Br(){return[...Oa,...Ft]}function je(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!z)return Promise.resolve();const n=k.documentElement.classList,a=u=>n.add("".concat(xe,"-").concat(u)),r=u=>n.remove("".concat(xe,"-").concat(u)),i=m.autoFetchSvg?Br():en.concat(Object.keys(Yr));i.includes("fa")||i.push("fa");const s=[".".concat(cn,":not([").concat(V,"])")].concat(i.map(u=>".".concat(u,":not([").concat(V,"])"))).join(", ");if(s.length===0)return Promise.resolve();let o=[];try{o=et(t.querySelectorAll(s))}catch{}if(o.length>0)a("pending"),r("complete");else return Promise.resolve();const f=ce.begin("onTree"),l=o.reduce((u,p)=>{try{const d=Nn(p);d&&u.push(d)}catch(d){on||d.name==="MissingIcon"&&console.error(d)}return u},[]);return new Promise((u,p)=>{Promise.all(l).then(d=>{En(d,()=>{a("active"),a("complete"),r("pending"),typeof e=="function"&&e(),f(),u()})}).catch(d=>{f(),p(d)})})}function Hr(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;Nn(t).then(n=>{n&&En([n],e)})}function Vr(t){return function(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const a=(e||{}).icon?e:Yt(e||{});let{mask:r}=n;return r&&(r=(r||{}).icon?r:Yt(r||{})),t(a,c(c({},n),{},{mask:r}))}}const Xr=function(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:n=j,symbol:a=!1,mask:r=null,maskId:i=null,title:s=null,titleId:o=null,classes:f=[],attributes:l={},styles:u={}}=e;if(!t)return;const{prefix:p,iconName:d,icon:b}=t;return Ot(c({type:"icon"},t),()=>(X("beforeDOMElementCreation",{iconDefinition:t,params:e}),m.autoA11y&&(s?l["aria-labelledby"]="".concat(m.replacementClass,"-title-").concat(o||lt()):(l["aria-hidden"]="true",l.focusable="false")),le({icons:{main:Bt(b),mask:r?Bt(r.icon):{found:!1,width:null,height:null,icon:{}}},prefix:p,iconName:d,transform:c(c({},j),n),symbol:a,title:s,maskId:i,titleId:o,extra:{attributes:l,styles:u,classes:f}})))};var Kr={mixout(){return{icon:Vr(Xr)}},hooks(){return{mutationObserverCallbacks(t){return t.treeCallback=je,t.nodeCallback=Hr,t}}},provides(t){t.i2svg=function(e){const{node:n=k,callback:a=()=>{}}=e;return je(n,a)},t.generateSvgReplacementMutation=function(e,n){const{iconName:a,title:r,titleId:i,prefix:s,transform:o,symbol:f,mask:l,maskId:u,extra:p}=n;return new Promise((d,b)=>{Promise.all([Ht(a,s),l.iconName?Ht(l.iconName,l.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(y=>{let[x,v]=y;d([e,le({icons:{main:x,mask:v},prefix:s,iconName:a,transform:o,symbol:f,maskId:u,title:r,titleId:i,extra:p,watchable:!0})])}).catch(b)})},t.generateAbstractIcon=function(e){let{children:n,attributes:a,main:r,transform:i,styles:s}=e;const o=kt(s);o.length>0&&(a.style=o);let f;return ie(i)&&(f=B("generateAbstractTransformGrouping",{main:r,transform:i,containerWidth:r.width,iconWidth:r.width})),n.push(f||r.icon),{children:n,attributes:a}}}},qr={mixout(){return{layer(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{classes:n=[]}=e;return Ot({type:"layer"},()=>{X("beforeDOMElementCreation",{assembler:t,params:e});let a=[];return t(r=>{Array.isArray(r)?r.map(i=>{a=a.concat(i.abstract)}):a=a.concat(r.abstract)}),[{tag:"span",attributes:{class:["".concat(m.cssPrefix,"-layers"),...n].join(" ")},children:a}]})}}}},Qr={mixout(){return{counter(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{title:n=null,classes:a=[],attributes:r={},styles:i={}}=e;return Ot({type:"counter",content:t},()=>(X("beforeDOMElementCreation",{content:t,params:e}),Nr({content:t.toString(),title:n,extra:{attributes:r,styles:i,classes:["".concat(m.cssPrefix,"-layers-counter"),...a]}})))}}}},Zr={mixout(){return{text(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:n=j,title:a=null,classes:r=[],attributes:i={},styles:s={}}=e;return Ot({type:"text",content:t},()=>(X("beforeDOMElementCreation",{content:t,params:e}),Ee({content:t,transform:c(c({},j),n),title:a,extra:{attributes:i,styles:s,classes:["".concat(m.cssPrefix,"-layers-text"),...r]}})))}}},provides(t){t.generateLayersText=function(e,n){const{title:a,transform:r,extra:i}=n;let s=null,o=null;if(Je){const f=parseInt(getComputedStyle(e).fontSize,10),l=e.getBoundingClientRect();s=l.width/f,o=l.height/f}return m.autoA11y&&!a&&(i.attributes["aria-hidden"]="true"),Promise.resolve([e,Ee({content:e.innerHTML,width:s,height:o,transform:r,title:a,extra:i,watchable:!0})])}}};const Jr=new RegExp('"',"ug"),Me=[1105920,1112319],Fe=c(c(c(c({},{FontAwesome:{normal:"fas",400:"fas"}}),ka),Da),_a),Kt=Object.keys(Fe).reduce((t,e)=>(t[e.toLowerCase()]=Fe[e],t),{}),ti=Object.keys(Kt).reduce((t,e)=>{const n=Kt[e];return t[e]=n[900]||[...Object.entries(n)][0][1],t},{});function ei(t){const e=t.replace(Jr,""),n=or(e,0),a=n>=Me[0]&&n<=Me[1],r=e.length===2?e[0]===e[1]:!1;return{value:$t(r?e[0]:e),isSecondary:a||r}}function ni(t,e){const n=t.replace(/^['"]|['"]$/g,"").toLowerCase(),a=parseInt(e),r=isNaN(a)?"normal":a;return(Kt[n]||{})[r]||ti[n]}function Le(t,e){const n="".concat(Wa).concat(e.replace(":","-"));return new Promise((a,r)=>{if(t.getAttribute(n)!==null)return a();const s=et(t.children).filter(d=>d.getAttribute(Rt)===e)[0],o=G.getComputedStyle(t,e),f=o.getPropertyValue("font-family"),l=f.match(Ba),u=o.getPropertyValue("font-weight"),p=o.getPropertyValue("content");if(s&&!l)return t.removeChild(s),a();if(l&&p!=="none"&&p!==""){const d=o.getPropertyValue("content");let b=ni(f,u);const{value:y,isSecondary:x}=ei(d),v=l[0].startsWith("FontAwesome");let w=oe(b,y),S=w;if(v){const A=mr(y);A.iconName&&A.prefix&&(w=A.iconName,b=A.prefix)}if(w&&!x&&(!s||s.getAttribute(ee)!==b||s.getAttribute(ne)!==S)){t.setAttribute(n,S),s&&t.removeChild(s);const A=Gr(),{extra:C}=A;C.attributes[Rt]=e,Ht(w,b).then(O=>{const D=le(c(c({},A),{},{icons:{main:O,mask:Sn()},prefix:b,iconName:S,extra:C,watchable:!0})),W=k.createElementNS("http://www.w3.org/2000/svg","svg");e==="::before"?t.insertBefore(W,t.firstChild):t.appendChild(W),W.outerHTML=D.map(N=>ut(N)).join(`
`),t.removeAttribute(n),a()}).catch(r)}else a()}else a()})}function ai(t){return Promise.all([Le(t,"::before"),Le(t,"::after")])}function ri(t){return t.parentNode!==document.head&&!~Ua.indexOf(t.tagName.toUpperCase())&&!t.getAttribute(Rt)&&(!t.parentNode||t.parentNode.tagName!=="svg")}function Re(t){if(z)return new Promise((e,n)=>{const a=et(t.querySelectorAll("*")).filter(ri).map(ai),r=ce.begin("searchPseudoElements");Cn(),Promise.all(a).then(()=>{r(),Xt(),e()}).catch(()=>{r(),Xt(),n()})})}var ii={hooks(){return{mutationObserverCallbacks(t){return t.pseudoElementsCallback=Re,t}}},provides(t){t.pseudoElements2svg=function(e){const{node:n=k}=e;m.searchPseudoElements&&Re(n)}}};let ze=!1;var si={mixout(){return{dom:{unwatch(){Cn(),ze=!0}}}},hooks(){return{bootstrap(){Ie(Gt("mutationObserverCallbacks",{}))},noAuto(){Dr()},watch(t){const{observeMutationsRoot:e}=t;ze?Xt():Ie(Gt("mutationObserverCallbacks",{observeMutationsRoot:e}))}}}};const De=t=>{let e={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce((n,a)=>{const r=a.toLowerCase().split("-"),i=r[0];let s=r.slice(1).join("-");if(i&&s==="h")return n.flipX=!0,n;if(i&&s==="v")return n.flipY=!0,n;if(s=parseFloat(s),isNaN(s))return n;switch(i){case"grow":n.size=n.size+s;break;case"shrink":n.size=n.size-s;break;case"left":n.x=n.x-s;break;case"right":n.x=n.x+s;break;case"up":n.y=n.y-s;break;case"down":n.y=n.y+s;break;case"rotate":n.rotate=n.rotate+s;break}return n},e)};var oi={mixout(){return{parse:{transform:t=>De(t)}}},hooks(){return{parseNodeAttributes(t,e){const n=e.getAttribute("data-fa-transform");return n&&(t.transform=De(n)),t}}},provides(t){t.generateAbstractTransformGrouping=function(e){let{main:n,transform:a,containerWidth:r,iconWidth:i}=e;const s={transform:"translate(".concat(r/2," 256)")},o="translate(".concat(a.x*32,", ").concat(a.y*32,") "),f="scale(".concat(a.size/16*(a.flipX?-1:1),", ").concat(a.size/16*(a.flipY?-1:1),") "),l="rotate(".concat(a.rotate," 0 0)"),u={transform:"".concat(o," ").concat(f," ").concat(l)},p={transform:"translate(".concat(i/2*-1," -256)")},d={outer:s,inner:u,path:p};return{tag:"g",attributes:c({},d.outer),children:[{tag:"g",attributes:c({},d.inner),children:[{tag:n.icon.tag,children:n.icon.children,attributes:c(c({},n.icon.attributes),d.path)}]}]}}}};const It={x:0,y:0,width:"100%",height:"100%"};function We(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return t.attributes&&(t.attributes.fill||e)&&(t.attributes.fill="black"),t}function li(t){return t.tag==="g"?t.children:[t]}var ci={hooks(){return{parseNodeAttributes(t,e){const n=e.getAttribute("data-fa-mask"),a=n?At(n.split(" ").map(r=>r.trim())):Sn();return a.prefix||(a.prefix=Y()),t.mask=a,t.maskId=e.getAttribute("data-fa-mask-id"),t}}},provides(t){t.generateAbstractMask=function(e){let{children:n,attributes:a,main:r,mask:i,maskId:s,transform:o}=e;const{width:f,icon:l}=r,{width:u,icon:p}=i,d=er({transform:o,containerWidth:u,iconWidth:f}),b={tag:"rect",attributes:c(c({},It),{},{fill:"white"})},y=l.children?{children:l.children.map(We)}:{},x={tag:"g",attributes:c({},d.inner),children:[We(c({tag:l.tag,attributes:c(c({},l.attributes),d.path)},y))]},v={tag:"g",attributes:c({},d.outer),children:[x]},w="mask-".concat(s||lt()),S="clip-".concat(s||lt()),A={tag:"mask",attributes:c(c({},It),{},{id:w,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[b,v]},C={tag:"defs",children:[{tag:"clipPath",attributes:{id:S},children:li(p)},A]};return n.push(C,{tag:"rect",attributes:c({fill:"currentColor","clip-path":"url(#".concat(S,")"),mask:"url(#".concat(w,")")},It)}),{children:n,attributes:a}}}},fi={provides(t){let e=!1;G.matchMedia&&(e=G.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){const n=[],a={fill:"currentColor"},r={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};n.push({tag:"path",attributes:c(c({},a),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});const i=c(c({},r),{},{attributeName:"opacity"}),s={tag:"circle",attributes:c(c({},a),{},{cx:"256",cy:"364",r:"28"}),children:[]};return e||s.children.push({tag:"animate",attributes:c(c({},r),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:c(c({},i),{},{values:"1;0;1;1;0;1;"})}),n.push(s),n.push({tag:"path",attributes:c(c({},a),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:e?[]:[{tag:"animate",attributes:c(c({},i),{},{values:"1;0;0;0;0;1;"})}]}),e||n.push({tag:"path",attributes:c(c({},a),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:c(c({},i),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:n}}}},ui={hooks(){return{parseNodeAttributes(t,e){const n=e.getAttribute("data-fa-symbol"),a=n===null?!1:n===""?!0:n;return t.symbol=a,t}}}},di=[rr,Kr,qr,Qr,Zr,ii,si,oi,ci,fi,ui];kr(di,{mixoutsTo:I});I.noAuto;I.config;I.library;I.dom;const qt=I.parse;I.findIconDefinition;I.toHtml;const mi=I.icon;I.layer;I.text;I.counter;function $e(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter(function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable})),n.push.apply(n,a)}return n}function _(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?$e(Object(n),!0).forEach(function(a){q(t,a,n[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):$e(Object(n)).forEach(function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(n,a))})}return t}function vt(t){"@babel/helpers - typeof";return vt=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},vt(t)}function q(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function pi(t,e){if(t==null)return{};var n={},a=Object.keys(t),r,i;for(i=0;i<a.length;i++)r=a[i],!(e.indexOf(r)>=0)&&(n[r]=t[r]);return n}function gi(t,e){if(t==null)return{};var n=pi(t,e),a,r;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)a=i[r],!(e.indexOf(a)>=0)&&Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}function Qt(t){return hi(t)||bi(t)||yi(t)||vi()}function hi(t){if(Array.isArray(t))return Zt(t)}function bi(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function yi(t,e){if(t){if(typeof t=="string")return Zt(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Zt(t,e)}}function Zt(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,a=new Array(e);n<e;n++)a[n]=t[n];return a}function vi(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function xi(t){var e,n=t.beat,a=t.fade,r=t.beatFade,i=t.bounce,s=t.shake,o=t.flash,f=t.spin,l=t.spinPulse,u=t.spinReverse,p=t.pulse,d=t.fixedWidth,b=t.inverse,y=t.border,x=t.listItem,v=t.flip,w=t.size,S=t.rotation,A=t.pull,C=(e={"fa-beat":n,"fa-fade":a,"fa-beat-fade":r,"fa-bounce":i,"fa-shake":s,"fa-flash":o,"fa-spin":f,"fa-spin-reverse":u,"fa-spin-pulse":l,"fa-pulse":p,"fa-fw":d,"fa-inverse":b,"fa-border":y,"fa-li":x,"fa-flip":v===!0,"fa-flip-horizontal":v==="horizontal"||v==="both","fa-flip-vertical":v==="vertical"||v==="both"},q(e,"fa-".concat(w),typeof w<"u"&&w!==null),q(e,"fa-rotate-".concat(S),typeof S<"u"&&S!==null&&S!==0),q(e,"fa-pull-".concat(A),typeof A<"u"&&A!==null),q(e,"fa-swap-opacity",t.swapOpacity),e);return Object.keys(C).map(function(O){return C[O]?O:null}).filter(function(O){return O})}function wi(t){return t=t-0,t===t}function Tn(t){return wi(t)?t:(t=t.replace(/[\-_\s]+(.)?/g,function(e,n){return n?n.toUpperCase():""}),t.substr(0,1).toLowerCase()+t.substr(1))}var ki=["style"];function Si(t){return t.charAt(0).toUpperCase()+t.slice(1)}function Ai(t){return t.split(";").map(function(e){return e.trim()}).filter(function(e){return e}).reduce(function(e,n){var a=n.indexOf(":"),r=Tn(n.slice(0,a)),i=n.slice(a+1).trim();return r.startsWith("webkit")?e[Si(r)]=i:e[r]=i,e},{})}function In(t,e){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof e=="string")return e;var a=(e.children||[]).map(function(f){return In(t,f)}),r=Object.keys(e.attributes||{}).reduce(function(f,l){var u=e.attributes[l];switch(l){case"class":f.attrs.className=u,delete e.attributes.class;break;case"style":f.attrs.style=Ai(u);break;default:l.indexOf("aria-")===0||l.indexOf("data-")===0?f.attrs[l.toLowerCase()]=u:f.attrs[Tn(l)]=u}return f},{attrs:{}}),i=n.style,s=i===void 0?{}:i,o=gi(n,ki);return r.attrs.style=_(_({},r.attrs.style),s),t.apply(void 0,[e.tag,_(_({},r.attrs),o)].concat(Qt(a)))}var _n=!1;try{_n=!0}catch{}function Oi(){if(!_n&&console&&typeof console.error=="function"){var t;(t=console).error.apply(t,arguments)}}function Ue(t){if(t&&vt(t)==="object"&&t.prefix&&t.iconName&&t.icon)return t;if(qt.icon)return qt.icon(t);if(t===null)return null;if(t&&vt(t)==="object"&&t.prefix&&t.iconName)return t;if(Array.isArray(t)&&t.length===2)return{prefix:t[0],iconName:t[1]};if(typeof t=="string")return{prefix:"fas",iconName:t}}function _t(t,e){return Array.isArray(e)&&e.length>0||!Array.isArray(e)&&e?q({},t,e):{}}var Ge={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1},J=Ye.forwardRef(function(t,e){var n=_(_({},Ge),t),a=n.icon,r=n.mask,i=n.symbol,s=n.className,o=n.title,f=n.titleId,l=n.maskId,u=Ue(a),p=_t("classes",[].concat(Qt(xi(n)),Qt((s||"").split(" ")))),d=_t("transform",typeof n.transform=="string"?qt.transform(n.transform):n.transform),b=_t("mask",Ue(r)),y=mi(u,_(_(_(_({},p),d),b),{},{symbol:i,title:o,titleId:f,maskId:l}));if(!y)return Oi("Could not find icon",u),null;var x=y.abstract,v={ref:e};return Object.keys(n).forEach(function(w){Ge.hasOwnProperty(w)||(v[w]=n[w])}),Pi(x[0],v)});J.displayName="FontAwesomeIcon";J.propTypes={beat:h.bool,border:h.bool,beatFade:h.bool,bounce:h.bool,className:h.string,fade:h.bool,flash:h.bool,mask:h.oneOfType([h.object,h.array,h.string]),maskId:h.string,fixedWidth:h.bool,inverse:h.bool,flip:h.oneOf([!0,!1,"horizontal","vertical","both"]),icon:h.oneOfType([h.object,h.array,h.string]),listItem:h.bool,pull:h.oneOf(["right","left"]),pulse:h.bool,rotation:h.oneOf([0,90,180,270]),shake:h.bool,size:h.oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:h.bool,spinPulse:h.bool,spinReverse:h.bool,symbol:h.oneOfType([h.bool,h.string]),title:h.string,titleId:h.string,transform:h.oneOfType([h.string,h.object]),swapOpacity:h.bool};var Pi=In.bind(null,Ye.createElement);/*!
 * Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */const Ei={prefix:"fas",iconName:"pen-to-square",icon:[512,512,["edit"],"f044","M471.6 21.7c-21.9-21.9-57.3-21.9-79.2 0L362.3 51.7l97.9 97.9 30.1-30.1c21.9-21.9 21.9-57.3 0-79.2L471.6 21.7zm-299.2 220c-6.1 6.1-10.8 13.6-13.5 21.9l-29.6 88.8c-2.9 8.6-.6 18.1 5.8 24.6s15.9 8.7 24.6 5.8l88.8-29.6c8.2-2.7 15.7-7.4 21.9-13.5L437.7 172.3 339.7 74.3 172.4 241.7zM96 64C43 64 0 107 0 160L0 416c0 53 43 96 96 96l256 0c53 0 96-43 96-96l0-96c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 96c0 17.7-14.3 32-32 32L96 448c-17.7 0-32-14.3-32-32l0-256c0-17.7 14.3-32 32-32l96 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L96 64z"]},Ci=Ei,Ni={prefix:"fas",iconName:"floppy-disk",icon:[448,512,[128190,128426,"save"],"f0c7","M64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-242.7c0-17-6.7-33.3-18.7-45.3L352 50.7C340 38.7 323.7 32 306.7 32L64 32zm0 96c0-17.7 14.3-32 32-32l192 0c17.7 0 32 14.3 32 32l0 64c0 17.7-14.3 32-32 32L96 224c-17.7 0-32-14.3-32-32l0-64zM224 288a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"]},Ti={prefix:"fas",iconName:"trash",icon:[448,512,[],"f1f8","M135.2 17.7L128 32 32 32C14.3 32 0 46.3 0 64S14.3 96 32 96l384 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-96 0-7.2-14.3C307.4 6.8 296.3 0 284.2 0L163.8 0c-12.1 0-23.2 6.8-28.6 17.7zM416 128L32 128 53.2 467c1.6 25.3 22.6 45 47.9 45l245.8 0c25.3 0 46.3-19.7 47.9-45L416 128z"]},Ii={prefix:"fas",iconName:"plus",icon:[448,512,[10133,61543,"add"],"2b","M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 144L48 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l144 0 0 144c0 17.7 14.3 32 32 32s32-14.3 32-32l0-144 144 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-144 0 0-144z"]};function _i({notes:t,userData:e,error:n,onMakeNotesClick:a,currentNote:r,setCurrentNote:i,handleAddNote:s}){const o=Be(),[f,l]=T.useState({title:!1,description:!1}),[u,p]=T.useState({title:"",description:""}),d=()=>{let y="",x="";const v=r.title.trim().length===0,w=r.title.trim().length<3,S=r.description.trim().length===0,A=r.description.trim().length<5,C=r.description.trim().split(/\s+/).length===1;v?y="Title cannot be empty.":w&&(y="Title must be at least 3 characters long."),S?x="Description cannot be empty.":A&&C?x="Description cannot be just a word.":A&&(x="Description must be at least 5 characters long.");const O={title:!!y,description:!!x};return l(O),p({title:y,description:x}),!Object.values(O).some(D=>D)},b=()=>{d()&&s()};return g.jsxs(ue,{className:"main",children:[g.jsx(P,{className:"absolute inset-0",children:g.jsx("img",{alt:"nature",className:"bg-img",src:da})}),g.jsx(P,{className:"relative z-10",children:e&&(e!=null&&e.name)?g.jsxs(P,{className:"flex-row",children:[g.jsxs(P,{className:"text-data animate-slideInFromLeft",children:[g.jsxs("h2",{children:["Welcome, ",e==null?void 0:e.name,"!"]}),g.jsx("h4",{children:"Let's organize your world, one note at a time!"}),t&&t.length>0&&g.jsx(Q,{variant:"contained",color:"primary",onClick:a,children:"See Notes"})]}),g.jsxs(ue,{className:"form-data animate-slideInFromTop",children:[g.jsx(F,{className:"form-heading",variant:"h5",fontWeight:"bold",children:"Add a New Note"}),g.jsxs("form",{children:[g.jsxs(P,{className:"flex-row",children:[g.jsx(F,{paddingRight:2,fontWeight:"bold",fontSize:20,children:"Title"}),g.jsx(Pt,{variant:"outlined",fullWidth:!0,value:r.title,onChange:y=>i({...r,title:y.target.value}),className:"text-field input",error:f.title,helperText:u.title})]}),g.jsxs(P,{className:"flex-row",children:[g.jsx(F,{paddingRight:4.5,fontWeight:"bold",fontSize:20,children:"Description"}),g.jsx(Pt,{className:"text-field input-desc",variant:"outlined",multiline:!0,rows:4,fullWidth:!0,value:r.description,onChange:y=>i({...r,description:y.target.value}),error:f.description,helperText:u.description,margin:"normal"})]}),g.jsxs(P,{className:"flex-row",children:[g.jsx(F,{paddingRight:3,fontWeight:"bold",fontSize:20,children:"Tag"}),g.jsx(Pt,{variant:"outlined",fullWidth:!0,value:r.tag,onChange:y=>i({...r,tag:y.target.value}),margin:"normal",className:"text-field input"})]}),g.jsx(P,{className:"flex-center",children:g.jsx(Q,{variant:"contained",color:"primary",startIcon:g.jsx(J,{icon:Ii}),onClick:b,children:"Add Note"})})]})]})]}):g.jsx(P,{className:"flex-col animate-pulse",children:n?g.jsxs(P,{children:[g.jsx(F,{className:"typography bottom-link",variant:"h5",color:"black",fontWeight:"bold",children:"Authentication failed!"}),g.jsxs(P,{className:"bottom",children:["Go back to Home page"," ",g.jsx(Q,{variant:"contained",className:"bottom-link",onClick:()=>o("/"),children:"Go Back"})]})]}):g.jsx(Fn,{})})})]})}function ji({notes:t,setNotes:e,fetchNotes:n,handleSaveEdit:a,handleDeleteNote:r}){const i=jt.getItem("authToken"),[s,o]=T.useState(null);T.useEffect(()=>{i&&n()},[n,i]);const f=l=>{const u=new Date(l),p=u.toLocaleDateString("en-GB",{day:"2-digit",month:"2-digit",year:"numeric"}),d=u.toLocaleTimeString("en-US",{hour:"2-digit",minute:"2-digit",second:"2-digit",hour12:!1});return{date:p,time:d}};return g.jsx(P,{className:"notes-background",children:g.jsx(P,{sx:{position:"relative",zIndex:1,maxWidth:"1200px",margin:"0 auto",padding:"20px",width:"100%"},children:g.jsx(me,{container:!0,spacing:2,sx:{marginTop:"50px",width:"100%"},children:t.map(l=>g.jsx(me,{item:!0,xs:12,sm:6,md:4,sx:{flexGrow:0,maxWidth:"100%",boxSizing:"border-box"},children:g.jsxs(P,{display:"flex",flexDirection:"column",gap:1,boxShadow:1,sx:{background:"#fff",padding:3,borderRadius:2,width:"100%",minWidth:0},children:[g.jsxs(P,{display:"flex",flexDirection:"row",justifyContent:"space-between",children:[g.jsxs(F,{variant:"caption",color:"primary",sx:{marginTop:"16px",display:"block"},contentEditable:s===l._id,suppressContentEditableWarning:!0,onBlur:u=>e(p=>p.map(d=>d._id===l._id?{...d,tag:u.target.textContent||""}:d)),children:["#",l.tag]}),g.jsx(F,{variant:"caption",color:"textSecondary",sx:{marginTop:"16px",display:"block"},children:`Date: ${f(l.date).date} Time: ${f(l.date).time}`})]}),g.jsx(F,{fontWeight:"bold",variant:"h5",marginY:2,className:"capitalize",gutterBottom:!0,contentEditable:s===l._id,suppressContentEditableWarning:!0,onBlur:u=>e(p=>p.map(d=>d._id===l._id?{...d,title:u.target.textContent||""}:d)),children:l.title}),g.jsx(F,{variant:"body2",color:"textSecondary",sx:{overflow:"hidden",textOverflow:"ellipsis",display:"-webkit-box",WebkitLineClamp:3,WebkitBoxOrient:"vertical"},contentEditable:s===l._id,suppressContentEditableWarning:!0,onBlur:u=>e(p=>p.map(d=>d._id===l._id?{...d,description:u.target.textContent||""}:d)),children:l.description}),g.jsxs(P,{display:"flex",flexDirection:"row",justifyContent:"space-between",children:[s!==l._id?g.jsx(Q,{size:"small",color:"primary",startIcon:g.jsx(J,{icon:Ci}),onClick:()=>o(l._id),children:"Edit"}):g.jsx(Q,{size:"small",color:"primary",startIcon:g.jsx(J,{icon:Ni}),onClick:()=>{a(l),o(null)},children:"Save"}),g.jsx(Q,{size:"small",color:"error",startIcon:g.jsx(J,{icon:Ti}),onClick:()=>r(l._id),children:"Delete"})]})]})},l._id))})})})}function $i(){const t=T.useRef(null),e=()=>{var N;(N=t.current)==null||N.scrollIntoView({behavior:"smooth"})},[n,a]=T.useState([]),[r,i]=T.useState(null),[s,o]=T.useState({_id:"",title:"",description:"",tag:"",notification:!1,sendDate:null,date:""}),f=Be(),l=jt.getItem("authToken"),{data:u,error:p,refetch:d}=Ln({}),{data:b=[],error:y,refetch:x}=Rn({});T.useEffect(()=>{u&&i(u),p&&f("/errorpage"),b&&r!==null&&a(b),y&&$.error("Error in fetching notes!")},[b,y,f,d,r,p,u]);const[v]=zn(),w=async()=>{if(!s.title||!s.description||!s.tag){$.info("Please enter required fields.");return}try{await v({...s,headers:{authorization:`Bearer ${l}`}}),o({_id:"",title:"",description:"",tag:"",notification:!1,sendDate:null,date:""}),x(),$.success("Notes added successfully!")}catch(N){$.error("Error in adding notes"),console.error("Error adding note:",N)}},[S]=Dn(),A=async N=>{try{await S({id:N._id,data:N,headers:{authorization:`Bearer ${l}`}}),$.success("Note updated successfully"),x()}catch(nt){$.error("Error saving note"),console.error("Error saving note:",nt)}},[C]=Wn(),O=async N=>{try{await C({id:N,headers:{authorization:`Bearer ${l}`}}),x(),$.success("Note deleted successfully!")}catch(nt){$.error("Error deleting note"),console.error("Error deleting note:",nt)}},D=T.useCallback(()=>{x()},[x]),W=()=>{jt.removeItem("authToken"),i(null),f("/")};return g.jsxs("div",{children:[g.jsx(Xn,{buttonName:"Logout",handleLogout:W}),g.jsx(_i,{notes:n,userData:r,error:!!p,onMakeNotesClick:e,currentNote:s,setCurrentNote:o,handleAddNote:w}),n&&n.length>0&&g.jsx("div",{ref:t,children:g.jsx(ji,{notes:n,setNotes:a,fetchNotes:D,handleSaveEdit:A,handleDeleteNote:O})})]})}export{$i as default};
