import{g as Un,r as P,j as m,c as kt,R as Je,u as tn,d as Ut,a as Bn,b as Gn,y as U,e as Yn,f as Hn,h as Vn}from"./index-C5ICzpCd.js";/* empty css               */import{g as St,d as At,e as Ct,a as Pt,_ as j,s as Ot,f as Et,h as Xn,r as Nt,i as le,S as xe,B as I}from"./Stack-CcHeYigC.js";import{B as Z}from"./Button-DGO8Mggw.js";import{T as _}from"./Typography-CNpcKAEk.js";import{P as Kn,u as qn,T as Ft}from"./TextField-CkU0ilYR.js";import{N as Qn}from"./Navbar-D2kBW2F9.js";var en={exports:{}},Zn="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",Jn=Zn,ta=Jn;function nn(){}function an(){}an.resetWarningCache=nn;var ea=function(){function t(a,r,o,i,s,u){if(u!==ta){var l=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw l.name="Invariant Violation",l}}t.isRequired=t;function e(){return t}var n={array:t,bigint:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,elementType:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:an,resetWarningCache:nn};return n.PropTypes=n,n};en.exports=ea();var na=en.exports;const h=Un(na);function aa(t){return St("MuiCard",t)}At("MuiCard",["root"]);const ra=["className","raised"],oa=t=>{const{classes:e}=t;return Et({root:["root"]},aa,e)},ia=Ot(Kn,{name:"MuiCard",slot:"Root",overridesResolver:(t,e)=>e.root})(()=>({overflow:"hidden"})),sa=P.forwardRef(function(e,n){const a=Ct({props:e,name:"MuiCard"}),{className:r,raised:o=!1}=a,i=Pt(a,ra),s=j({},a,{raised:o}),u=oa(s);return m.jsx(ia,j({className:kt(u.root,r),elevation:o?8:void 0,ref:n,ownerState:s},i))});function la(t){return St("MuiCardActions",t)}At("MuiCardActions",["root","spacing"]);const ca=["disableSpacing","className"],fa=t=>{const{classes:e,disableSpacing:n}=t;return Et({root:["root",!n&&"spacing"]},la,e)},ua=Ot("div",{name:"MuiCardActions",slot:"Root",overridesResolver:(t,e)=>{const{ownerState:n}=t;return[e.root,!n.disableSpacing&&e.spacing]}})(({ownerState:t})=>j({display:"flex",alignItems:"center",padding:8},!t.disableSpacing&&{"& > :not(style) ~ :not(style)":{marginLeft:8}})),da=P.forwardRef(function(e,n){const a=Ct({props:e,name:"MuiCardActions"}),{disableSpacing:r=!1,className:o}=a,i=Pt(a,ca),s=j({},a,{disableSpacing:r}),u=fa(s);return m.jsx(ua,j({className:kt(u.root,o),ownerState:s,ref:n},i))});function ma(t){return St("MuiCardContent",t)}At("MuiCardContent",["root"]);const pa=["className","component"],ga=t=>{const{classes:e}=t;return Et({root:["root"]},ma,e)},ha=Ot("div",{name:"MuiCardContent",slot:"Root",overridesResolver:(t,e)=>e.root})(()=>({padding:16,"&:last-child":{paddingBottom:24}})),ba=P.forwardRef(function(e,n){const a=Ct({props:e,name:"MuiCardContent"}),{className:r,component:o="div"}=a,i=Pt(a,pa),s=j({},a,{component:o}),u=ga(s);return m.jsx(ha,j({as:o,className:kt(u.root,r),ownerState:s,ref:n},i))}),we=P.createContext();function ya(t){return St("MuiGrid",t)}const va=[0,1,2,3,4,5,6,7,8,9,10],xa=["column-reverse","column","row-reverse","row"],wa=["nowrap","wrap-reverse","wrap"],ot=["auto",!0,1,2,3,4,5,6,7,8,9,10,11,12],ct=At("MuiGrid",["root","container","item","zeroMinWidth",...va.map(t=>`spacing-xs-${t}`),...xa.map(t=>`direction-xs-${t}`),...wa.map(t=>`wrap-xs-${t}`),...ot.map(t=>`grid-xs-${t}`),...ot.map(t=>`grid-sm-${t}`),...ot.map(t=>`grid-md-${t}`),...ot.map(t=>`grid-lg-${t}`),...ot.map(t=>`grid-xl-${t}`)]),ka=["className","columns","columnSpacing","component","container","direction","item","rowSpacing","spacing","wrap","zeroMinWidth"];function J(t){const e=parseFloat(t);return`${e}${String(t).replace(String(e),"")||"px"}`}function Sa({theme:t,ownerState:e}){let n;return t.breakpoints.keys.reduce((a,r)=>{let o={};if(e[r]&&(n=e[r]),!n)return a;if(n===!0)o={flexBasis:0,flexGrow:1,maxWidth:"100%"};else if(n==="auto")o={flexBasis:"auto",flexGrow:0,flexShrink:0,maxWidth:"none",width:"auto"};else{const i=Nt({values:e.columns,breakpoints:t.breakpoints.values}),s=typeof i=="object"?i[r]:i;if(s==null)return a;const u=`${Math.round(n/s*1e8)/1e6}%`;let l={};if(e.container&&e.item&&e.columnSpacing!==0){const f=t.spacing(e.columnSpacing);if(f!=="0px"){const g=`calc(${u} + ${J(f)})`;l={flexBasis:g,maxWidth:g}}}o=j({flexBasis:u,flexGrow:0,maxWidth:u},l)}return t.breakpoints.values[r]===0?Object.assign(a,o):a[t.breakpoints.up(r)]=o,a},{})}function Aa({theme:t,ownerState:e}){const n=Nt({values:e.direction,breakpoints:t.breakpoints.values});return le({theme:t},n,a=>{const r={flexDirection:a};return a.indexOf("column")===0&&(r[`& > .${ct.item}`]={maxWidth:"none"}),r})}function rn({breakpoints:t,values:e}){let n="";Object.keys(e).forEach(r=>{n===""&&e[r]!==0&&(n=r)});const a=Object.keys(t).sort((r,o)=>t[r]-t[o]);return a.slice(0,a.indexOf(n))}function Ca({theme:t,ownerState:e}){const{container:n,rowSpacing:a}=e;let r={};if(n&&a!==0){const o=Nt({values:a,breakpoints:t.breakpoints.values});let i;typeof o=="object"&&(i=rn({breakpoints:t.breakpoints.values,values:o})),r=le({theme:t},o,(s,u)=>{var l;const f=t.spacing(s);return f!=="0px"?{marginTop:`-${J(f)}`,[`& > .${ct.item}`]:{paddingTop:J(f)}}:(l=i)!=null&&l.includes(u)?{}:{marginTop:0,[`& > .${ct.item}`]:{paddingTop:0}}})}return r}function Pa({theme:t,ownerState:e}){const{container:n,columnSpacing:a}=e;let r={};if(n&&a!==0){const o=Nt({values:a,breakpoints:t.breakpoints.values});let i;typeof o=="object"&&(i=rn({breakpoints:t.breakpoints.values,values:o})),r=le({theme:t},o,(s,u)=>{var l;const f=t.spacing(s);return f!=="0px"?{width:`calc(100% + ${J(f)})`,marginLeft:`-${J(f)}`,[`& > .${ct.item}`]:{paddingLeft:J(f)}}:(l=i)!=null&&l.includes(u)?{}:{width:"100%",marginLeft:0,[`& > .${ct.item}`]:{paddingLeft:0}}})}return r}function Oa(t,e,n={}){if(!t||t<=0)return[];if(typeof t=="string"&&!Number.isNaN(Number(t))||typeof t=="number")return[n[`spacing-xs-${String(t)}`]];const a=[];return e.forEach(r=>{const o=t[r];Number(o)>0&&a.push(n[`spacing-${r}-${String(o)}`])}),a}const Ea=Ot("div",{name:"MuiGrid",slot:"Root",overridesResolver:(t,e)=>{const{ownerState:n}=t,{container:a,direction:r,item:o,spacing:i,wrap:s,zeroMinWidth:u,breakpoints:l}=n;let f=[];a&&(f=Oa(i,l,e));const g=[];return l.forEach(d=>{const b=n[d];b&&g.push(e[`grid-${d}-${String(b)}`])}),[e.root,a&&e.container,o&&e.item,u&&e.zeroMinWidth,...f,r!=="row"&&e[`direction-xs-${String(r)}`],s!=="wrap"&&e[`wrap-xs-${String(s)}`],...g]}})(({ownerState:t})=>j({boxSizing:"border-box"},t.container&&{display:"flex",flexWrap:"wrap",width:"100%"},t.item&&{margin:0},t.zeroMinWidth&&{minWidth:0},t.wrap!=="wrap"&&{flexWrap:t.wrap}),Aa,Ca,Pa,Sa);function Na(t,e){if(!t||t<=0)return[];if(typeof t=="string"&&!Number.isNaN(Number(t))||typeof t=="number")return[`spacing-xs-${String(t)}`];const n=[];return e.forEach(a=>{const r=t[a];if(Number(r)>0){const o=`spacing-${a}-${String(r)}`;n.push(o)}}),n}const Ia=t=>{const{classes:e,container:n,direction:a,item:r,spacing:o,wrap:i,zeroMinWidth:s,breakpoints:u}=t;let l=[];n&&(l=Na(o,u));const f=[];u.forEach(d=>{const b=t[d];b&&f.push(`grid-${d}-${String(b)}`)});const g={root:["root",n&&"container",r&&"item",s&&"zeroMinWidth",...l,a!=="row"&&`direction-xs-${String(a)}`,i!=="wrap"&&`wrap-xs-${String(i)}`,...f]};return Et(g,ya,e)},ke=P.forwardRef(function(e,n){const a=Ct({props:e,name:"MuiGrid"}),{breakpoints:r}=qn(),o=Xn(a),{className:i,columns:s,columnSpacing:u,component:l="div",container:f=!1,direction:g="row",item:d=!1,rowSpacing:b,spacing:y=0,wrap:x="wrap",zeroMinWidth:v=!1}=o,w=Pt(o,ka),S=b||y,A=u||y,E=P.useContext(we),C=f?s||12:E,W={},$=j({},w);r.keys.forEach(pt=>{w[pt]!=null&&(W[pt]=w[pt],delete $[pt])});const N=j({},o,{columns:C,container:f,direction:g,item:d,rowSpacing:S,columnSpacing:A,wrap:x,zeroMinWidth:v,spacing:y},W,{breakpoints:r.keys}),rt=Ia(N);return m.jsx(we.Provider,{value:C,children:m.jsx(Ea,j({ownerState:N,className:kt(rt.root,i),as:l,ref:n},$))})}),Ta="/inotes/assets/ohho-CKLdeVfI.jpg";/*!
 * Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */function ja(t,e,n){return(e=Ma(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function Se(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter(function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable})),n.push.apply(n,a)}return n}function c(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?Se(Object(n),!0).forEach(function(a){ja(t,a,n[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Se(Object(n)).forEach(function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(n,a))})}return t}function _a(t,e){if(typeof t!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var a=n.call(t,e);if(typeof a!="object")return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function Ma(t){var e=_a(t,"string");return typeof e=="symbol"?e:e+""}const Ae=()=>{};let ce={},on={},sn=null,ln={mark:Ae,measure:Ae};try{typeof window<"u"&&(ce=window),typeof document<"u"&&(on=document),typeof MutationObserver<"u"&&(sn=MutationObserver),typeof performance<"u"&&(ln=performance)}catch{}const{userAgent:Ce=""}=ce.navigator||{},G=ce,k=on,Pe=sn,gt=ln;G.document;const D=!!k.documentElement&&!!k.head&&typeof k.addEventListener=="function"&&typeof k.createElement=="function",cn=~Ce.indexOf("MSIE")||~Ce.indexOf("Trident/");var Fa=/fa(s|r|l|t|d|dr|dl|dt|b|k|kd|ss|sr|sl|st|sds|sdr|sdl|sdt)?[\-\ ]/,La=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit)?.*/i,fn={classic:{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fab:"brands","fa-brands":"brands"},duotone:{fa:"solid",fad:"solid","fa-solid":"solid","fa-duotone":"solid",fadr:"regular","fa-regular":"regular",fadl:"light","fa-light":"light",fadt:"thin","fa-thin":"thin"},sharp:{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"},"sharp-duotone":{fa:"solid",fasds:"solid","fa-solid":"solid",fasdr:"regular","fa-regular":"regular",fasdl:"light","fa-light":"light",fasdt:"thin","fa-thin":"thin"}},Ra={GROUP:"duotone-group",PRIMARY:"primary",SECONDARY:"secondary"},un=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone"],O="classic",It="duotone",za="sharp",Da="sharp-duotone",dn=[O,It,za,Da],Wa={classic:{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},duotone:{900:"fad",400:"fadr",300:"fadl",100:"fadt"},sharp:{900:"fass",400:"fasr",300:"fasl",100:"fast"},"sharp-duotone":{900:"fasds",400:"fasdr",300:"fasdl",100:"fasdt"}},$a={"Font Awesome 6 Free":{900:"fas",400:"far"},"Font Awesome 6 Pro":{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},"Font Awesome 6 Brands":{400:"fab",normal:"fab"},"Font Awesome 6 Duotone":{900:"fad",400:"fadr",normal:"fadr",300:"fadl",100:"fadt"},"Font Awesome 6 Sharp":{900:"fass",400:"fasr",normal:"fasr",300:"fasl",100:"fast"},"Font Awesome 6 Sharp Duotone":{900:"fasds",400:"fasdr",normal:"fasdr",300:"fasdl",100:"fasdt"}},Ua=new Map([["classic",{defaultShortPrefixId:"fas",defaultStyleId:"solid",styleIds:["solid","regular","light","thin","brands"],futureStyleIds:[],defaultFontWeight:900}],["sharp",{defaultShortPrefixId:"fass",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["duotone",{defaultShortPrefixId:"fad",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["sharp-duotone",{defaultShortPrefixId:"fasds",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}]]),Ba={classic:{solid:"fas",regular:"far",light:"fal",thin:"fat",brands:"fab"},duotone:{solid:"fad",regular:"fadr",light:"fadl",thin:"fadt"},sharp:{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"},"sharp-duotone":{solid:"fasds",regular:"fasdr",light:"fasdl",thin:"fasdt"}},Ga=["fak","fa-kit","fakd","fa-kit-duotone"],Oe={kit:{fak:"kit","fa-kit":"kit"},"kit-duotone":{fakd:"kit-duotone","fa-kit-duotone":"kit-duotone"}},Ya=["kit"],Ha={kit:{"fa-kit":"fak"}},Va=["fak","fakd"],Xa={kit:{fak:"fa-kit"}},Ee={kit:{kit:"fak"},"kit-duotone":{"kit-duotone":"fakd"}},ht={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},Ka=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone"],qa=["fak","fa-kit","fakd","fa-kit-duotone"],Qa={"Font Awesome Kit":{400:"fak",normal:"fak"},"Font Awesome Kit Duotone":{400:"fakd",normal:"fakd"}},Za={classic:{"fa-brands":"fab","fa-duotone":"fad","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},duotone:{"fa-regular":"fadr","fa-light":"fadl","fa-thin":"fadt"},sharp:{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"},"sharp-duotone":{"fa-solid":"fasds","fa-regular":"fasdr","fa-light":"fasdl","fa-thin":"fasdt"}},Ja={classic:["fas","far","fal","fat","fad"],duotone:["fadr","fadl","fadt"],sharp:["fass","fasr","fasl","fast"],"sharp-duotone":["fasds","fasdr","fasdl","fasdt"]},Bt={classic:{fab:"fa-brands",fad:"fa-duotone",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},duotone:{fadr:"fa-regular",fadl:"fa-light",fadt:"fa-thin"},sharp:{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"},"sharp-duotone":{fasds:"fa-solid",fasdr:"fa-regular",fasdl:"fa-light",fasdt:"fa-thin"}},tr=["fa-solid","fa-regular","fa-light","fa-thin","fa-duotone","fa-brands"],Gt=["fa","fas","far","fal","fat","fad","fadr","fadl","fadt","fab","fass","fasr","fasl","fast","fasds","fasdr","fasdl","fasdt",...Ka,...tr],er=["solid","regular","light","thin","duotone","brands"],mn=[1,2,3,4,5,6,7,8,9,10],nr=mn.concat([11,12,13,14,15,16,17,18,19,20]),ar=[...Object.keys(Ja),...er,"2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",ht.GROUP,ht.SWAP_OPACITY,ht.PRIMARY,ht.SECONDARY].concat(mn.map(t=>"".concat(t,"x"))).concat(nr.map(t=>"w-".concat(t))),rr={"Font Awesome 5 Free":{900:"fas",400:"far"},"Font Awesome 5 Pro":{900:"fas",400:"far",normal:"far",300:"fal"},"Font Awesome 5 Brands":{400:"fab",normal:"fab"},"Font Awesome 5 Duotone":{900:"fad"}};const R="___FONT_AWESOME___",Yt=16,pn="fa",gn="svg-inline--fa",X="data-fa-i2svg",Ht="data-fa-pseudo-element",or="data-fa-pseudo-element-pending",fe="data-prefix",ue="data-icon",Ne="fontawesome-i2svg",ir="async",sr=["HTML","HEAD","STYLE","SCRIPT"],hn=(()=>{try{return!0}catch{return!1}})();function dt(t){return new Proxy(t,{get(e,n){return n in e?e[n]:e[O]}})}const bn=c({},fn);bn[O]=c(c(c(c({},{"fa-duotone":"duotone"}),fn[O]),Oe.kit),Oe["kit-duotone"]);const lr=dt(bn),Vt=c({},Ba);Vt[O]=c(c(c(c({},{duotone:"fad"}),Vt[O]),Ee.kit),Ee["kit-duotone"]);const Ie=dt(Vt),Xt=c({},Bt);Xt[O]=c(c({},Xt[O]),Xa.kit);const de=dt(Xt),Kt=c({},Za);Kt[O]=c(c({},Kt[O]),Ha.kit);dt(Kt);const cr=Fa,yn="fa-layers-text",fr=La,ur=c({},Wa);dt(ur);const dr=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],Lt=Ra,mr=[...Ya,...ar],st=G.FontAwesomeConfig||{};function pr(t){var e=k.querySelector("script["+t+"]");if(e)return e.getAttribute(t)}function gr(t){return t===""?!0:t==="false"?!1:t==="true"?!0:t}k&&typeof k.querySelector=="function"&&[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]].forEach(e=>{let[n,a]=e;const r=gr(pr(n));r!=null&&(st[a]=r)});const vn={styleDefault:"solid",familyDefault:O,cssPrefix:pn,replacementClass:gn,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};st.familyPrefix&&(st.cssPrefix=st.familyPrefix);const nt=c(c({},vn),st);nt.autoReplaceSvg||(nt.observeMutations=!1);const p={};Object.keys(vn).forEach(t=>{Object.defineProperty(p,t,{enumerable:!0,set:function(e){nt[t]=e,lt.forEach(n=>n(p))},get:function(){return nt[t]}})});Object.defineProperty(p,"familyPrefix",{enumerable:!0,set:function(t){nt.cssPrefix=t,lt.forEach(e=>e(p))},get:function(){return nt.cssPrefix}});G.FontAwesomeConfig=p;const lt=[];function hr(t){return lt.push(t),()=>{lt.splice(lt.indexOf(t),1)}}const B=Yt,F={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function br(t){if(!t||!D)return;const e=k.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=t;const n=k.head.childNodes;let a=null;for(let r=n.length-1;r>-1;r--){const o=n[r],i=(o.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(i)>-1&&(a=o)}return k.head.insertBefore(e,a),t}const yr="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function ft(){let t=12,e="";for(;t-- >0;)e+=yr[Math.random()*62|0];return e}function at(t){const e=[];for(let n=(t||[]).length>>>0;n--;)e[n]=t[n];return e}function me(t){return t.classList?at(t.classList):(t.getAttribute("class")||"").split(" ").filter(e=>e)}function xn(t){return"".concat(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function vr(t){return Object.keys(t||{}).reduce((e,n)=>e+"".concat(n,'="').concat(xn(t[n]),'" '),"").trim()}function Tt(t){return Object.keys(t||{}).reduce((e,n)=>e+"".concat(n,": ").concat(t[n].trim(),";"),"")}function pe(t){return t.size!==F.size||t.x!==F.x||t.y!==F.y||t.rotate!==F.rotate||t.flipX||t.flipY}function xr(t){let{transform:e,containerWidth:n,iconWidth:a}=t;const r={transform:"translate(".concat(n/2," 256)")},o="translate(".concat(e.x*32,", ").concat(e.y*32,") "),i="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),s="rotate(".concat(e.rotate," 0 0)"),u={transform:"".concat(o," ").concat(i," ").concat(s)},l={transform:"translate(".concat(a/2*-1," -256)")};return{outer:r,inner:u,path:l}}function wr(t){let{transform:e,width:n=Yt,height:a=Yt,startCentered:r=!1}=t,o="";return r&&cn?o+="translate(".concat(e.x/B-n/2,"em, ").concat(e.y/B-a/2,"em) "):r?o+="translate(calc(-50% + ".concat(e.x/B,"em), calc(-50% + ").concat(e.y/B,"em)) "):o+="translate(".concat(e.x/B,"em, ").concat(e.y/B,"em) "),o+="scale(".concat(e.size/B*(e.flipX?-1:1),", ").concat(e.size/B*(e.flipY?-1:1),") "),o+="rotate(".concat(e.rotate,"deg) "),o}var kr=`:root, :host {
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
}`;function wn(){const t=pn,e=gn,n=p.cssPrefix,a=p.replacementClass;let r=kr;if(n!==t||a!==e){const o=new RegExp("\\.".concat(t,"\\-"),"g"),i=new RegExp("\\--".concat(t,"\\-"),"g"),s=new RegExp("\\.".concat(e),"g");r=r.replace(o,".".concat(n,"-")).replace(i,"--".concat(n,"-")).replace(s,".".concat(a))}return r}let Te=!1;function Rt(){p.autoAddCss&&!Te&&(br(wn()),Te=!0)}var Sr={mixout(){return{dom:{css:wn,insertCss:Rt}}},hooks(){return{beforeDOMElementCreation(){Rt()},beforeI2svg(){Rt()}}}};const z=G||{};z[R]||(z[R]={});z[R].styles||(z[R].styles={});z[R].hooks||(z[R].hooks={});z[R].shims||(z[R].shims=[]);var L=z[R];const kn=[],Sn=function(){k.removeEventListener("DOMContentLoaded",Sn),vt=1,kn.map(t=>t())};let vt=!1;D&&(vt=(k.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(k.readyState),vt||k.addEventListener("DOMContentLoaded",Sn));function Ar(t){D&&(vt?setTimeout(t,0):kn.push(t))}function mt(t){const{tag:e,attributes:n={},children:a=[]}=t;return typeof t=="string"?xn(t):"<".concat(e," ").concat(vr(n),">").concat(a.map(mt).join(""),"</").concat(e,">")}function je(t,e,n){if(t&&t[e]&&t[e][n])return{prefix:e,iconName:n,icon:t[e][n]}}var zt=function(e,n,a,r){var o=Object.keys(e),i=o.length,s=n,u,l,f;for(a===void 0?(u=1,f=e[o[0]]):(u=0,f=a);u<i;u++)l=o[u],f=s(f,e[l],l,e);return f};function Cr(t){const e=[];let n=0;const a=t.length;for(;n<a;){const r=t.charCodeAt(n++);if(r>=55296&&r<=56319&&n<a){const o=t.charCodeAt(n++);(o&64512)==56320?e.push(((r&1023)<<10)+(o&1023)+65536):(e.push(r),n--)}else e.push(r)}return e}function qt(t){const e=Cr(t);return e.length===1?e[0].toString(16):null}function Pr(t,e){const n=t.length;let a=t.charCodeAt(e),r;return a>=55296&&a<=56319&&n>e+1&&(r=t.charCodeAt(e+1),r>=56320&&r<=57343)?(a-55296)*1024+r-56320+65536:a}function _e(t){return Object.keys(t).reduce((e,n)=>{const a=t[n];return!!a.icon?e[a.iconName]=a.icon:e[n]=a,e},{})}function Qt(t,e){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};const{skipHooks:a=!1}=n,r=_e(e);typeof L.hooks.addPack=="function"&&!a?L.hooks.addPack(t,_e(e)):L.styles[t]=c(c({},L.styles[t]||{}),r),t==="fas"&&Qt("fa",e)}const{styles:ut,shims:Or}=L,An=Object.keys(de),Er=An.reduce((t,e)=>(t[e]=Object.keys(de[e]),t),{});let ge=null,Cn={},Pn={},On={},En={},Nn={};function Nr(t){return~mr.indexOf(t)}function Ir(t,e){const n=e.split("-"),a=n[0],r=n.slice(1).join("-");return a===t&&r!==""&&!Nr(r)?r:null}const In=()=>{const t=a=>zt(ut,(r,o,i)=>(r[i]=zt(o,a,{}),r),{});Cn=t((a,r,o)=>(r[3]&&(a[r[3]]=o),r[2]&&r[2].filter(s=>typeof s=="number").forEach(s=>{a[s.toString(16)]=o}),a)),Pn=t((a,r,o)=>(a[o]=o,r[2]&&r[2].filter(s=>typeof s=="string").forEach(s=>{a[s]=o}),a)),Nn=t((a,r,o)=>{const i=r[2];return a[o]=o,i.forEach(s=>{a[s]=o}),a});const e="far"in ut||p.autoFetchSvg,n=zt(Or,(a,r)=>{const o=r[0];let i=r[1];const s=r[2];return i==="far"&&!e&&(i="fas"),typeof o=="string"&&(a.names[o]={prefix:i,iconName:s}),typeof o=="number"&&(a.unicodes[o.toString(16)]={prefix:i,iconName:s}),a},{names:{},unicodes:{}});On=n.names,En=n.unicodes,ge=jt(p.styleDefault,{family:p.familyDefault})};hr(t=>{ge=jt(t.styleDefault,{family:p.familyDefault})});In();function he(t,e){return(Cn[t]||{})[e]}function Tr(t,e){return(Pn[t]||{})[e]}function V(t,e){return(Nn[t]||{})[e]}function Tn(t){return On[t]||{prefix:null,iconName:null}}function jr(t){const e=En[t],n=he("fas",t);return e||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function Y(){return ge}const jn=()=>({prefix:null,iconName:null,rest:[]});function _r(t){let e=O;const n=An.reduce((a,r)=>(a[r]="".concat(p.cssPrefix,"-").concat(r),a),{});return dn.forEach(a=>{(t.includes(n[a])||t.some(r=>Er[a].includes(r)))&&(e=a)}),e}function jt(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{family:n=O}=e,a=lr[n][t];if(n===It&&!t)return"fad";const r=Ie[n][t]||Ie[n][a],o=t in L.styles?t:null;return r||o||null}function Mr(t){let e=[],n=null;return t.forEach(a=>{const r=Ir(p.cssPrefix,a);r?n=r:a&&e.push(a)}),{iconName:n,rest:e}}function Me(t){return t.sort().filter((e,n,a)=>a.indexOf(e)===n)}function _t(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{skipLookups:n=!1}=e;let a=null;const r=Gt.concat(qa),o=Me(t.filter(g=>r.includes(g))),i=Me(t.filter(g=>!Gt.includes(g))),s=o.filter(g=>(a=g,!un.includes(g))),[u=null]=s,l=_r(o),f=c(c({},Mr(i)),{},{prefix:jt(u,{family:l})});return c(c(c({},f),zr({values:t,family:l,styles:ut,config:p,canonical:f,givenPrefix:a})),Fr(n,a,f))}function Fr(t,e,n){let{prefix:a,iconName:r}=n;if(t||!a||!r)return{prefix:a,iconName:r};const o=e==="fa"?Tn(r):{},i=V(a,r);return r=o.iconName||i||r,a=o.prefix||a,a==="far"&&!ut.far&&ut.fas&&!p.autoFetchSvg&&(a="fas"),{prefix:a,iconName:r}}const Lr=dn.filter(t=>t!==O||t!==It),Rr=Object.keys(Bt).filter(t=>t!==O).map(t=>Object.keys(Bt[t])).flat();function zr(t){const{values:e,family:n,canonical:a,givenPrefix:r="",styles:o={},config:i={}}=t,s=n===It,u=e.includes("fa-duotone")||e.includes("fad"),l=i.familyDefault==="duotone",f=a.prefix==="fad"||a.prefix==="fa-duotone";if(!s&&(u||l||f)&&(a.prefix="fad"),(e.includes("fa-brands")||e.includes("fab"))&&(a.prefix="fab"),!a.prefix&&Lr.includes(n)&&(Object.keys(o).find(d=>Rr.includes(d))||i.autoFetchSvg)){const d=Ua.get(n).defaultShortPrefixId;a.prefix=d,a.iconName=V(a.prefix,a.iconName)||a.iconName}return(a.prefix==="fa"||r==="fa")&&(a.prefix=Y()||"fas"),a}class Dr{constructor(){this.definitions={}}add(){for(var e=arguments.length,n=new Array(e),a=0;a<e;a++)n[a]=arguments[a];const r=n.reduce(this._pullDefinitions,{});Object.keys(r).forEach(o=>{this.definitions[o]=c(c({},this.definitions[o]||{}),r[o]),Qt(o,r[o]);const i=de[O][o];i&&Qt(i,r[o]),In()})}reset(){this.definitions={}}_pullDefinitions(e,n){const a=n.prefix&&n.iconName&&n.icon?{0:n}:n;return Object.keys(a).map(r=>{const{prefix:o,iconName:i,icon:s}=a[r],u=s[2];e[o]||(e[o]={}),u.length>0&&u.forEach(l=>{typeof l=="string"&&(e[o][l]=s)}),e[o][i]=s}),e}}let Fe=[],q={};const tt={},Wr=Object.keys(tt);function $r(t,e){let{mixoutsTo:n}=e;return Fe=t,q={},Object.keys(tt).forEach(a=>{Wr.indexOf(a)===-1&&delete tt[a]}),Fe.forEach(a=>{const r=a.mixout?a.mixout():{};if(Object.keys(r).forEach(o=>{typeof r[o]=="function"&&(n[o]=r[o]),typeof r[o]=="object"&&Object.keys(r[o]).forEach(i=>{n[o]||(n[o]={}),n[o][i]=r[o][i]})}),a.hooks){const o=a.hooks();Object.keys(o).forEach(i=>{q[i]||(q[i]=[]),q[i].push(o[i])})}a.provides&&a.provides(tt)}),n}function Zt(t,e){for(var n=arguments.length,a=new Array(n>2?n-2:0),r=2;r<n;r++)a[r-2]=arguments[r];return(q[t]||[]).forEach(i=>{e=i.apply(null,[e,...a])}),e}function K(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),a=1;a<e;a++)n[a-1]=arguments[a];(q[t]||[]).forEach(o=>{o.apply(null,n)})}function H(){const t=arguments[0],e=Array.prototype.slice.call(arguments,1);return tt[t]?tt[t].apply(null,e):void 0}function Jt(t){t.prefix==="fa"&&(t.prefix="fas");let{iconName:e}=t;const n=t.prefix||Y();if(e)return e=V(n,e)||e,je(_n.definitions,n,e)||je(L.styles,n,e)}const _n=new Dr,Ur=()=>{p.autoReplaceSvg=!1,p.observeMutations=!1,K("noAuto")},Br={i2svg:function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return D?(K("beforeI2svg",t),H("pseudoElements2svg",t),H("i2svg",t)):Promise.reject(new Error("Operation requires a DOM of some kind."))},watch:function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:e}=t;p.autoReplaceSvg===!1&&(p.autoReplaceSvg=!0),p.observeMutations=!0,Ar(()=>{Yr({autoReplaceSvgRoot:e}),K("watch",t)})}},Gr={icon:t=>{if(t===null)return null;if(typeof t=="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:V(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){const e=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],n=jt(t[0]);return{prefix:n,iconName:V(n,e)||e}}if(typeof t=="string"&&(t.indexOf("".concat(p.cssPrefix,"-"))>-1||t.match(cr))){const e=_t(t.split(" "),{skipLookups:!0});return{prefix:e.prefix||Y(),iconName:V(e.prefix,e.iconName)||e.iconName}}if(typeof t=="string"){const e=Y();return{prefix:e,iconName:V(e,t)||t}}}},T={noAuto:Ur,config:p,dom:Br,parse:Gr,library:_n,findIconDefinition:Jt,toHtml:mt},Yr=function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:e=k}=t;(Object.keys(L.styles).length>0||p.autoFetchSvg)&&D&&p.autoReplaceSvg&&T.dom.i2svg({node:e})};function Mt(t,e){return Object.defineProperty(t,"abstract",{get:e}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map(n=>mt(n))}}),Object.defineProperty(t,"node",{get:function(){if(!D)return;const n=k.createElement("div");return n.innerHTML=t.html,n.children}}),t}function Hr(t){let{children:e,main:n,mask:a,attributes:r,styles:o,transform:i}=t;if(pe(i)&&n.found&&!a.found){const{width:s,height:u}=n,l={x:s/u/2,y:.5};r.style=Tt(c(c({},o),{},{"transform-origin":"".concat(l.x+i.x/16,"em ").concat(l.y+i.y/16,"em")}))}return[{tag:"svg",attributes:r,children:e}]}function Vr(t){let{prefix:e,iconName:n,children:a,attributes:r,symbol:o}=t;const i=o===!0?"".concat(e,"-").concat(p.cssPrefix,"-").concat(n):o;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:c(c({},r),{},{id:i}),children:a}]}]}function be(t){const{icons:{main:e,mask:n},prefix:a,iconName:r,transform:o,symbol:i,title:s,maskId:u,titleId:l,extra:f,watchable:g=!1}=t,{width:d,height:b}=n.found?n:e,y=Va.includes(a),x=[p.replacementClass,r?"".concat(p.cssPrefix,"-").concat(r):""].filter(C=>f.classes.indexOf(C)===-1).filter(C=>C!==""||!!C).concat(f.classes).join(" ");let v={children:[],attributes:c(c({},f.attributes),{},{"data-prefix":a,"data-icon":r,class:x,role:f.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(d," ").concat(b)})};const w=y&&!~f.classes.indexOf("fa-fw")?{width:"".concat(d/b*16*.0625,"em")}:{};g&&(v.attributes[X]=""),s&&(v.children.push({tag:"title",attributes:{id:v.attributes["aria-labelledby"]||"title-".concat(l||ft())},children:[s]}),delete v.attributes.title);const S=c(c({},v),{},{prefix:a,iconName:r,main:e,mask:n,maskId:u,transform:o,symbol:i,styles:c(c({},w),f.styles)}),{children:A,attributes:E}=n.found&&e.found?H("generateAbstractMask",S)||{children:[],attributes:{}}:H("generateAbstractIcon",S)||{children:[],attributes:{}};return S.children=A,S.attributes=E,i?Vr(S):Hr(S)}function Le(t){const{content:e,width:n,height:a,transform:r,title:o,extra:i,watchable:s=!1}=t,u=c(c(c({},i.attributes),o?{title:o}:{}),{},{class:i.classes.join(" ")});s&&(u[X]="");const l=c({},i.styles);pe(r)&&(l.transform=wr({transform:r,startCentered:!0,width:n,height:a}),l["-webkit-transform"]=l.transform);const f=Tt(l);f.length>0&&(u.style=f);const g=[];return g.push({tag:"span",attributes:u,children:[e]}),o&&g.push({tag:"span",attributes:{class:"sr-only"},children:[o]}),g}function Xr(t){const{content:e,title:n,extra:a}=t,r=c(c(c({},a.attributes),n?{title:n}:{}),{},{class:a.classes.join(" ")}),o=Tt(a.styles);o.length>0&&(r.style=o);const i=[];return i.push({tag:"span",attributes:r,children:[e]}),n&&i.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),i}const{styles:Dt}=L;function te(t){const e=t[0],n=t[1],[a]=t.slice(4);let r=null;return Array.isArray(a)?r={tag:"g",attributes:{class:"".concat(p.cssPrefix,"-").concat(Lt.GROUP)},children:[{tag:"path",attributes:{class:"".concat(p.cssPrefix,"-").concat(Lt.SECONDARY),fill:"currentColor",d:a[0]}},{tag:"path",attributes:{class:"".concat(p.cssPrefix,"-").concat(Lt.PRIMARY),fill:"currentColor",d:a[1]}}]}:r={tag:"path",attributes:{fill:"currentColor",d:a}},{found:!0,width:e,height:n,icon:r}}const Kr={found:!1,width:512,height:512};function qr(t,e){!hn&&!p.showMissingIcons&&t&&console.error('Icon with name "'.concat(t,'" and prefix "').concat(e,'" is missing.'))}function ee(t,e){let n=e;return e==="fa"&&p.styleDefault!==null&&(e=Y()),new Promise((a,r)=>{if(n==="fa"){const o=Tn(t)||{};t=o.iconName||t,e=o.prefix||e}if(t&&e&&Dt[e]&&Dt[e][t]){const o=Dt[e][t];return a(te(o))}qr(t,e),a(c(c({},Kr),{},{icon:p.showMissingIcons&&t?H("missingIconAbstract")||{}:{}}))})}const Re=()=>{},ne=p.measurePerformance&&gt&&gt.mark&&gt.measure?gt:{mark:Re,measure:Re},it='FA "6.7.2"',Qr=t=>(ne.mark("".concat(it," ").concat(t," begins")),()=>Mn(t)),Mn=t=>{ne.mark("".concat(it," ").concat(t," ends")),ne.measure("".concat(it," ").concat(t),"".concat(it," ").concat(t," begins"),"".concat(it," ").concat(t," ends"))};var ye={begin:Qr,end:Mn};const bt=()=>{};function ze(t){return typeof(t.getAttribute?t.getAttribute(X):null)=="string"}function Zr(t){const e=t.getAttribute?t.getAttribute(fe):null,n=t.getAttribute?t.getAttribute(ue):null;return e&&n}function Jr(t){return t&&t.classList&&t.classList.contains&&t.classList.contains(p.replacementClass)}function to(){return p.autoReplaceSvg===!0?yt.replace:yt[p.autoReplaceSvg]||yt.replace}function eo(t){return k.createElementNS("http://www.w3.org/2000/svg",t)}function no(t){return k.createElement(t)}function Fn(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{ceFn:n=t.tag==="svg"?eo:no}=e;if(typeof t=="string")return k.createTextNode(t);const a=n(t.tag);return Object.keys(t.attributes||[]).forEach(function(o){a.setAttribute(o,t.attributes[o])}),(t.children||[]).forEach(function(o){a.appendChild(Fn(o,{ceFn:n}))}),a}function ao(t){let e=" ".concat(t.outerHTML," ");return e="".concat(e,"Font Awesome fontawesome.com "),e}const yt={replace:function(t){const e=t[0];if(e.parentNode)if(t[1].forEach(n=>{e.parentNode.insertBefore(Fn(n),e)}),e.getAttribute(X)===null&&p.keepOriginalSource){let n=k.createComment(ao(e));e.parentNode.replaceChild(n,e)}else e.remove()},nest:function(t){const e=t[0],n=t[1];if(~me(e).indexOf(p.replacementClass))return yt.replace(t);const a=new RegExp("".concat(p.cssPrefix,"-.*"));if(delete n[0].attributes.id,n[0].attributes.class){const o=n[0].attributes.class.split(" ").reduce((i,s)=>(s===p.replacementClass||s.match(a)?i.toSvg.push(s):i.toNode.push(s),i),{toNode:[],toSvg:[]});n[0].attributes.class=o.toSvg.join(" "),o.toNode.length===0?e.removeAttribute("class"):e.setAttribute("class",o.toNode.join(" "))}const r=n.map(o=>mt(o)).join(`
`);e.setAttribute(X,""),e.innerHTML=r}};function De(t){t()}function Ln(t,e){const n=typeof e=="function"?e:bt;if(t.length===0)n();else{let a=De;p.mutateApproach===ir&&(a=G.requestAnimationFrame||De),a(()=>{const r=to(),o=ye.begin("mutate");t.map(r),o(),n()})}}let ve=!1;function Rn(){ve=!0}function ae(){ve=!1}let xt=null;function We(t){if(!Pe||!p.observeMutations)return;const{treeCallback:e=bt,nodeCallback:n=bt,pseudoElementsCallback:a=bt,observeMutationsRoot:r=k}=t;xt=new Pe(o=>{if(ve)return;const i=Y();at(o).forEach(s=>{if(s.type==="childList"&&s.addedNodes.length>0&&!ze(s.addedNodes[0])&&(p.searchPseudoElements&&a(s.target),e(s.target)),s.type==="attributes"&&s.target.parentNode&&p.searchPseudoElements&&a(s.target.parentNode),s.type==="attributes"&&ze(s.target)&&~dr.indexOf(s.attributeName))if(s.attributeName==="class"&&Zr(s.target)){const{prefix:u,iconName:l}=_t(me(s.target));s.target.setAttribute(fe,u||i),l&&s.target.setAttribute(ue,l)}else Jr(s.target)&&n(s.target)})}),D&&xt.observe(r,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}function ro(){xt&&xt.disconnect()}function oo(t){const e=t.getAttribute("style");let n=[];return e&&(n=e.split(";").reduce((a,r)=>{const o=r.split(":"),i=o[0],s=o.slice(1);return i&&s.length>0&&(a[i]=s.join(":").trim()),a},{})),n}function io(t){const e=t.getAttribute("data-prefix"),n=t.getAttribute("data-icon"),a=t.innerText!==void 0?t.innerText.trim():"";let r=_t(me(t));return r.prefix||(r.prefix=Y()),e&&n&&(r.prefix=e,r.iconName=n),r.iconName&&r.prefix||(r.prefix&&a.length>0&&(r.iconName=Tr(r.prefix,t.innerText)||he(r.prefix,qt(t.innerText))),!r.iconName&&p.autoFetchSvg&&t.firstChild&&t.firstChild.nodeType===Node.TEXT_NODE&&(r.iconName=t.firstChild.data)),r}function so(t){const e=at(t.attributes).reduce((r,o)=>(r.name!=="class"&&r.name!=="style"&&(r[o.name]=o.value),r),{}),n=t.getAttribute("title"),a=t.getAttribute("data-fa-title-id");return p.autoA11y&&(n?e["aria-labelledby"]="".concat(p.replacementClass,"-title-").concat(a||ft()):(e["aria-hidden"]="true",e.focusable="false")),e}function lo(){return{iconName:null,title:null,titleId:null,prefix:null,transform:F,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function $e(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0};const{iconName:n,prefix:a,rest:r}=io(t),o=so(t),i=Zt("parseNodeAttributes",{},t);let s=e.styleParser?oo(t):[];return c({iconName:n,title:t.getAttribute("title"),titleId:t.getAttribute("data-fa-title-id"),prefix:a,transform:F,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:r,styles:s,attributes:o}},i)}const{styles:co}=L;function zn(t){const e=p.autoReplaceSvg==="nest"?$e(t,{styleParser:!1}):$e(t);return~e.extra.classes.indexOf(yn)?H("generateLayersText",t,e):H("generateSvgReplacementMutation",t,e)}function fo(){return[...Ga,...Gt]}function Ue(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!D)return Promise.resolve();const n=k.documentElement.classList,a=f=>n.add("".concat(Ne,"-").concat(f)),r=f=>n.remove("".concat(Ne,"-").concat(f)),o=p.autoFetchSvg?fo():un.concat(Object.keys(co));o.includes("fa")||o.push("fa");const i=[".".concat(yn,":not([").concat(X,"])")].concat(o.map(f=>".".concat(f,":not([").concat(X,"])"))).join(", ");if(i.length===0)return Promise.resolve();let s=[];try{s=at(t.querySelectorAll(i))}catch{}if(s.length>0)a("pending"),r("complete");else return Promise.resolve();const u=ye.begin("onTree"),l=s.reduce((f,g)=>{try{const d=zn(g);d&&f.push(d)}catch(d){hn||d.name==="MissingIcon"&&console.error(d)}return f},[]);return new Promise((f,g)=>{Promise.all(l).then(d=>{Ln(d,()=>{a("active"),a("complete"),r("pending"),typeof e=="function"&&e(),u(),f()})}).catch(d=>{u(),g(d)})})}function uo(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;zn(t).then(n=>{n&&Ln([n],e)})}function mo(t){return function(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const a=(e||{}).icon?e:Jt(e||{});let{mask:r}=n;return r&&(r=(r||{}).icon?r:Jt(r||{})),t(a,c(c({},n),{},{mask:r}))}}const po=function(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:n=F,symbol:a=!1,mask:r=null,maskId:o=null,title:i=null,titleId:s=null,classes:u=[],attributes:l={},styles:f={}}=e;if(!t)return;const{prefix:g,iconName:d,icon:b}=t;return Mt(c({type:"icon"},t),()=>(K("beforeDOMElementCreation",{iconDefinition:t,params:e}),p.autoA11y&&(i?l["aria-labelledby"]="".concat(p.replacementClass,"-title-").concat(s||ft()):(l["aria-hidden"]="true",l.focusable="false")),be({icons:{main:te(b),mask:r?te(r.icon):{found:!1,width:null,height:null,icon:{}}},prefix:g,iconName:d,transform:c(c({},F),n),symbol:a,title:i,maskId:o,titleId:s,extra:{attributes:l,styles:f,classes:u}})))};var go={mixout(){return{icon:mo(po)}},hooks(){return{mutationObserverCallbacks(t){return t.treeCallback=Ue,t.nodeCallback=uo,t}}},provides(t){t.i2svg=function(e){const{node:n=k,callback:a=()=>{}}=e;return Ue(n,a)},t.generateSvgReplacementMutation=function(e,n){const{iconName:a,title:r,titleId:o,prefix:i,transform:s,symbol:u,mask:l,maskId:f,extra:g}=n;return new Promise((d,b)=>{Promise.all([ee(a,i),l.iconName?ee(l.iconName,l.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(y=>{let[x,v]=y;d([e,be({icons:{main:x,mask:v},prefix:i,iconName:a,transform:s,symbol:u,maskId:f,title:r,titleId:o,extra:g,watchable:!0})])}).catch(b)})},t.generateAbstractIcon=function(e){let{children:n,attributes:a,main:r,transform:o,styles:i}=e;const s=Tt(i);s.length>0&&(a.style=s);let u;return pe(o)&&(u=H("generateAbstractTransformGrouping",{main:r,transform:o,containerWidth:r.width,iconWidth:r.width})),n.push(u||r.icon),{children:n,attributes:a}}}},ho={mixout(){return{layer(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{classes:n=[]}=e;return Mt({type:"layer"},()=>{K("beforeDOMElementCreation",{assembler:t,params:e});let a=[];return t(r=>{Array.isArray(r)?r.map(o=>{a=a.concat(o.abstract)}):a=a.concat(r.abstract)}),[{tag:"span",attributes:{class:["".concat(p.cssPrefix,"-layers"),...n].join(" ")},children:a}]})}}}},bo={mixout(){return{counter(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{title:n=null,classes:a=[],attributes:r={},styles:o={}}=e;return Mt({type:"counter",content:t},()=>(K("beforeDOMElementCreation",{content:t,params:e}),Xr({content:t.toString(),title:n,extra:{attributes:r,styles:o,classes:["".concat(p.cssPrefix,"-layers-counter"),...a]}})))}}}},yo={mixout(){return{text(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:n=F,title:a=null,classes:r=[],attributes:o={},styles:i={}}=e;return Mt({type:"text",content:t},()=>(K("beforeDOMElementCreation",{content:t,params:e}),Le({content:t,transform:c(c({},F),n),title:a,extra:{attributes:o,styles:i,classes:["".concat(p.cssPrefix,"-layers-text"),...r]}})))}}},provides(t){t.generateLayersText=function(e,n){const{title:a,transform:r,extra:o}=n;let i=null,s=null;if(cn){const u=parseInt(getComputedStyle(e).fontSize,10),l=e.getBoundingClientRect();i=l.width/u,s=l.height/u}return p.autoA11y&&!a&&(o.attributes["aria-hidden"]="true"),Promise.resolve([e,Le({content:e.innerHTML,width:i,height:s,transform:r,title:a,extra:o,watchable:!0})])}}};const vo=new RegExp('"',"ug"),Be=[1105920,1112319],Ge=c(c(c(c({},{FontAwesome:{normal:"fas",400:"fas"}}),$a),rr),Qa),re=Object.keys(Ge).reduce((t,e)=>(t[e.toLowerCase()]=Ge[e],t),{}),xo=Object.keys(re).reduce((t,e)=>{const n=re[e];return t[e]=n[900]||[...Object.entries(n)][0][1],t},{});function wo(t){const e=t.replace(vo,""),n=Pr(e,0),a=n>=Be[0]&&n<=Be[1],r=e.length===2?e[0]===e[1]:!1;return{value:qt(r?e[0]:e),isSecondary:a||r}}function ko(t,e){const n=t.replace(/^['"]|['"]$/g,"").toLowerCase(),a=parseInt(e),r=isNaN(a)?"normal":a;return(re[n]||{})[r]||xo[n]}function Ye(t,e){const n="".concat(or).concat(e.replace(":","-"));return new Promise((a,r)=>{if(t.getAttribute(n)!==null)return a();const i=at(t.children).filter(d=>d.getAttribute(Ht)===e)[0],s=G.getComputedStyle(t,e),u=s.getPropertyValue("font-family"),l=u.match(fr),f=s.getPropertyValue("font-weight"),g=s.getPropertyValue("content");if(i&&!l)return t.removeChild(i),a();if(l&&g!=="none"&&g!==""){const d=s.getPropertyValue("content");let b=ko(u,f);const{value:y,isSecondary:x}=wo(d),v=l[0].startsWith("FontAwesome");let w=he(b,y),S=w;if(v){const A=jr(y);A.iconName&&A.prefix&&(w=A.iconName,b=A.prefix)}if(w&&!x&&(!i||i.getAttribute(fe)!==b||i.getAttribute(ue)!==S)){t.setAttribute(n,S),i&&t.removeChild(i);const A=lo(),{extra:E}=A;E.attributes[Ht]=e,ee(w,b).then(C=>{const W=be(c(c({},A),{},{icons:{main:C,mask:jn()},prefix:b,iconName:S,extra:E,watchable:!0})),$=k.createElementNS("http://www.w3.org/2000/svg","svg");e==="::before"?t.insertBefore($,t.firstChild):t.appendChild($),$.outerHTML=W.map(N=>mt(N)).join(`
`),t.removeAttribute(n),a()}).catch(r)}else a()}else a()})}function So(t){return Promise.all([Ye(t,"::before"),Ye(t,"::after")])}function Ao(t){return t.parentNode!==document.head&&!~sr.indexOf(t.tagName.toUpperCase())&&!t.getAttribute(Ht)&&(!t.parentNode||t.parentNode.tagName!=="svg")}function He(t){if(D)return new Promise((e,n)=>{const a=at(t.querySelectorAll("*")).filter(Ao).map(So),r=ye.begin("searchPseudoElements");Rn(),Promise.all(a).then(()=>{r(),ae(),e()}).catch(()=>{r(),ae(),n()})})}var Co={hooks(){return{mutationObserverCallbacks(t){return t.pseudoElementsCallback=He,t}}},provides(t){t.pseudoElements2svg=function(e){const{node:n=k}=e;p.searchPseudoElements&&He(n)}}};let Ve=!1;var Po={mixout(){return{dom:{unwatch(){Rn(),Ve=!0}}}},hooks(){return{bootstrap(){We(Zt("mutationObserverCallbacks",{}))},noAuto(){ro()},watch(t){const{observeMutationsRoot:e}=t;Ve?ae():We(Zt("mutationObserverCallbacks",{observeMutationsRoot:e}))}}}};const Xe=t=>{let e={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce((n,a)=>{const r=a.toLowerCase().split("-"),o=r[0];let i=r.slice(1).join("-");if(o&&i==="h")return n.flipX=!0,n;if(o&&i==="v")return n.flipY=!0,n;if(i=parseFloat(i),isNaN(i))return n;switch(o){case"grow":n.size=n.size+i;break;case"shrink":n.size=n.size-i;break;case"left":n.x=n.x-i;break;case"right":n.x=n.x+i;break;case"up":n.y=n.y-i;break;case"down":n.y=n.y+i;break;case"rotate":n.rotate=n.rotate+i;break}return n},e)};var Oo={mixout(){return{parse:{transform:t=>Xe(t)}}},hooks(){return{parseNodeAttributes(t,e){const n=e.getAttribute("data-fa-transform");return n&&(t.transform=Xe(n)),t}}},provides(t){t.generateAbstractTransformGrouping=function(e){let{main:n,transform:a,containerWidth:r,iconWidth:o}=e;const i={transform:"translate(".concat(r/2," 256)")},s="translate(".concat(a.x*32,", ").concat(a.y*32,") "),u="scale(".concat(a.size/16*(a.flipX?-1:1),", ").concat(a.size/16*(a.flipY?-1:1),") "),l="rotate(".concat(a.rotate," 0 0)"),f={transform:"".concat(s," ").concat(u," ").concat(l)},g={transform:"translate(".concat(o/2*-1," -256)")},d={outer:i,inner:f,path:g};return{tag:"g",attributes:c({},d.outer),children:[{tag:"g",attributes:c({},d.inner),children:[{tag:n.icon.tag,children:n.icon.children,attributes:c(c({},n.icon.attributes),d.path)}]}]}}}};const Wt={x:0,y:0,width:"100%",height:"100%"};function Ke(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return t.attributes&&(t.attributes.fill||e)&&(t.attributes.fill="black"),t}function Eo(t){return t.tag==="g"?t.children:[t]}var No={hooks(){return{parseNodeAttributes(t,e){const n=e.getAttribute("data-fa-mask"),a=n?_t(n.split(" ").map(r=>r.trim())):jn();return a.prefix||(a.prefix=Y()),t.mask=a,t.maskId=e.getAttribute("data-fa-mask-id"),t}}},provides(t){t.generateAbstractMask=function(e){let{children:n,attributes:a,main:r,mask:o,maskId:i,transform:s}=e;const{width:u,icon:l}=r,{width:f,icon:g}=o,d=xr({transform:s,containerWidth:f,iconWidth:u}),b={tag:"rect",attributes:c(c({},Wt),{},{fill:"white"})},y=l.children?{children:l.children.map(Ke)}:{},x={tag:"g",attributes:c({},d.inner),children:[Ke(c({tag:l.tag,attributes:c(c({},l.attributes),d.path)},y))]},v={tag:"g",attributes:c({},d.outer),children:[x]},w="mask-".concat(i||ft()),S="clip-".concat(i||ft()),A={tag:"mask",attributes:c(c({},Wt),{},{id:w,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[b,v]},E={tag:"defs",children:[{tag:"clipPath",attributes:{id:S},children:Eo(g)},A]};return n.push(E,{tag:"rect",attributes:c({fill:"currentColor","clip-path":"url(#".concat(S,")"),mask:"url(#".concat(w,")")},Wt)}),{children:n,attributes:a}}}},Io={provides(t){let e=!1;G.matchMedia&&(e=G.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){const n=[],a={fill:"currentColor"},r={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};n.push({tag:"path",attributes:c(c({},a),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});const o=c(c({},r),{},{attributeName:"opacity"}),i={tag:"circle",attributes:c(c({},a),{},{cx:"256",cy:"364",r:"28"}),children:[]};return e||i.children.push({tag:"animate",attributes:c(c({},r),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:c(c({},o),{},{values:"1;0;1;1;0;1;"})}),n.push(i),n.push({tag:"path",attributes:c(c({},a),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:e?[]:[{tag:"animate",attributes:c(c({},o),{},{values:"1;0;0;0;0;1;"})}]}),e||n.push({tag:"path",attributes:c(c({},a),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:c(c({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:n}}}},To={hooks(){return{parseNodeAttributes(t,e){const n=e.getAttribute("data-fa-symbol"),a=n===null?!1:n===""?!0:n;return t.symbol=a,t}}}},jo=[Sr,go,ho,bo,yo,Co,Po,Oo,No,Io,To];$r(jo,{mixoutsTo:T});T.noAuto;T.config;T.library;T.dom;const oe=T.parse;T.findIconDefinition;T.toHtml;const _o=T.icon;T.layer;T.text;T.counter;function qe(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter(function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable})),n.push.apply(n,a)}return n}function M(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?qe(Object(n),!0).forEach(function(a){Q(t,a,n[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):qe(Object(n)).forEach(function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(n,a))})}return t}function wt(t){"@babel/helpers - typeof";return wt=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},wt(t)}function Q(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function Mo(t,e){if(t==null)return{};var n={},a=Object.keys(t),r,o;for(o=0;o<a.length;o++)r=a[o],!(e.indexOf(r)>=0)&&(n[r]=t[r]);return n}function Fo(t,e){if(t==null)return{};var n=Mo(t,e),a,r;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)a=o[r],!(e.indexOf(a)>=0)&&Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}function ie(t){return Lo(t)||Ro(t)||zo(t)||Do()}function Lo(t){if(Array.isArray(t))return se(t)}function Ro(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function zo(t,e){if(t){if(typeof t=="string")return se(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return se(t,e)}}function se(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,a=new Array(e);n<e;n++)a[n]=t[n];return a}function Do(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Wo(t){var e,n=t.beat,a=t.fade,r=t.beatFade,o=t.bounce,i=t.shake,s=t.flash,u=t.spin,l=t.spinPulse,f=t.spinReverse,g=t.pulse,d=t.fixedWidth,b=t.inverse,y=t.border,x=t.listItem,v=t.flip,w=t.size,S=t.rotation,A=t.pull,E=(e={"fa-beat":n,"fa-fade":a,"fa-beat-fade":r,"fa-bounce":o,"fa-shake":i,"fa-flash":s,"fa-spin":u,"fa-spin-reverse":f,"fa-spin-pulse":l,"fa-pulse":g,"fa-fw":d,"fa-inverse":b,"fa-border":y,"fa-li":x,"fa-flip":v===!0,"fa-flip-horizontal":v==="horizontal"||v==="both","fa-flip-vertical":v==="vertical"||v==="both"},Q(e,"fa-".concat(w),typeof w<"u"&&w!==null),Q(e,"fa-rotate-".concat(S),typeof S<"u"&&S!==null&&S!==0),Q(e,"fa-pull-".concat(A),typeof A<"u"&&A!==null),Q(e,"fa-swap-opacity",t.swapOpacity),e);return Object.keys(E).map(function(C){return E[C]?C:null}).filter(function(C){return C})}function $o(t){return t=t-0,t===t}function Dn(t){return $o(t)?t:(t=t.replace(/[\-_\s]+(.)?/g,function(e,n){return n?n.toUpperCase():""}),t.substr(0,1).toLowerCase()+t.substr(1))}var Uo=["style"];function Bo(t){return t.charAt(0).toUpperCase()+t.slice(1)}function Go(t){return t.split(";").map(function(e){return e.trim()}).filter(function(e){return e}).reduce(function(e,n){var a=n.indexOf(":"),r=Dn(n.slice(0,a)),o=n.slice(a+1).trim();return r.startsWith("webkit")?e[Bo(r)]=o:e[r]=o,e},{})}function Wn(t,e){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof e=="string")return e;var a=(e.children||[]).map(function(u){return Wn(t,u)}),r=Object.keys(e.attributes||{}).reduce(function(u,l){var f=e.attributes[l];switch(l){case"class":u.attrs.className=f,delete e.attributes.class;break;case"style":u.attrs.style=Go(f);break;default:l.indexOf("aria-")===0||l.indexOf("data-")===0?u.attrs[l.toLowerCase()]=f:u.attrs[Dn(l)]=f}return u},{attrs:{}}),o=n.style,i=o===void 0?{}:o,s=Fo(n,Uo);return r.attrs.style=M(M({},r.attrs.style),i),t.apply(void 0,[e.tag,M(M({},r.attrs),s)].concat(ie(a)))}var $n=!1;try{$n=!0}catch{}function Yo(){if(!$n&&console&&typeof console.error=="function"){var t;(t=console).error.apply(t,arguments)}}function Qe(t){if(t&&wt(t)==="object"&&t.prefix&&t.iconName&&t.icon)return t;if(oe.icon)return oe.icon(t);if(t===null)return null;if(t&&wt(t)==="object"&&t.prefix&&t.iconName)return t;if(Array.isArray(t)&&t.length===2)return{prefix:t[0],iconName:t[1]};if(typeof t=="string")return{prefix:"fas",iconName:t}}function $t(t,e){return Array.isArray(e)&&e.length>0||!Array.isArray(e)&&e?Q({},t,e):{}}var Ze={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1},et=Je.forwardRef(function(t,e){var n=M(M({},Ze),t),a=n.icon,r=n.mask,o=n.symbol,i=n.className,s=n.title,u=n.titleId,l=n.maskId,f=Qe(a),g=$t("classes",[].concat(ie(Wo(n)),ie((i||"").split(" ")))),d=$t("transform",typeof n.transform=="string"?oe.transform(n.transform):n.transform),b=$t("mask",Qe(r)),y=_o(f,M(M(M(M({},g),d),b),{},{symbol:o,title:s,titleId:u,maskId:l}));if(!y)return Yo("Could not find icon",f),null;var x=y.abstract,v={ref:e};return Object.keys(n).forEach(function(w){Ze.hasOwnProperty(w)||(v[w]=n[w])}),Ho(x[0],v)});et.displayName="FontAwesomeIcon";et.propTypes={beat:h.bool,border:h.bool,beatFade:h.bool,bounce:h.bool,className:h.string,fade:h.bool,flash:h.bool,mask:h.oneOfType([h.object,h.array,h.string]),maskId:h.string,fixedWidth:h.bool,inverse:h.bool,flip:h.oneOf([!0,!1,"horizontal","vertical","both"]),icon:h.oneOfType([h.object,h.array,h.string]),listItem:h.bool,pull:h.oneOf(["right","left"]),pulse:h.bool,rotation:h.oneOf([0,90,180,270]),shake:h.bool,size:h.oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:h.bool,spinPulse:h.bool,spinReverse:h.bool,symbol:h.oneOfType([h.bool,h.string]),title:h.string,titleId:h.string,transform:h.oneOfType([h.string,h.object]),swapOpacity:h.bool};var Ho=Wn.bind(null,Je.createElement);/*!
 * Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */const Vo={prefix:"fas",iconName:"pen-to-square",icon:[512,512,["edit"],"f044","M471.6 21.7c-21.9-21.9-57.3-21.9-79.2 0L362.3 51.7l97.9 97.9 30.1-30.1c21.9-21.9 21.9-57.3 0-79.2L471.6 21.7zm-299.2 220c-6.1 6.1-10.8 13.6-13.5 21.9l-29.6 88.8c-2.9 8.6-.6 18.1 5.8 24.6s15.9 8.7 24.6 5.8l88.8-29.6c8.2-2.7 15.7-7.4 21.9-13.5L437.7 172.3 339.7 74.3 172.4 241.7zM96 64C43 64 0 107 0 160L0 416c0 53 43 96 96 96l256 0c53 0 96-43 96-96l0-96c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 96c0 17.7-14.3 32-32 32L96 448c-17.7 0-32-14.3-32-32l0-256c0-17.7 14.3-32 32-32l96 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L96 64z"]},Xo=Vo,Ko={prefix:"fas",iconName:"floppy-disk",icon:[448,512,[128190,128426,"save"],"f0c7","M64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-242.7c0-17-6.7-33.3-18.7-45.3L352 50.7C340 38.7 323.7 32 306.7 32L64 32zm0 96c0-17.7 14.3-32 32-32l192 0c17.7 0 32 14.3 32 32l0 64c0 17.7-14.3 32-32 32L96 224c-17.7 0-32-14.3-32-32l0-64zM224 288a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"]},qo={prefix:"fas",iconName:"trash",icon:[448,512,[],"f1f8","M135.2 17.7L128 32 32 32C14.3 32 0 46.3 0 64S14.3 96 32 96l384 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-96 0-7.2-14.3C307.4 6.8 296.3 0 284.2 0L163.8 0c-12.1 0-23.2 6.8-28.6 17.7zM416 128L32 128 53.2 467c1.6 25.3 22.6 45 47.9 45l245.8 0c25.3 0 46.3-19.7 47.9-45L416 128z"]},Qo={prefix:"fas",iconName:"plus",icon:[448,512,[10133,61543,"add"],"2b","M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 144L48 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l144 0 0 144c0 17.7 14.3 32 32 32s32-14.3 32-32l0-144 144 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-144 0 0-144z"]};function Zo({notes:t,userData:e,error:n,onMakeNotesClick:a,currentNote:r,setCurrentNote:o,handleAddNote:i}){const s=tn(),[u,l]=P.useState({title:!1,description:!1}),[f,g]=P.useState({title:"",description:""}),d=()=>{let y="",x="";const v=r.title.trim().length===0,w=r.title.trim().length<3,S=r.description.trim().length===0,A=r.description.trim().length<5,E=r.description.trim().split(/\s+/).length===1;v?y="Title cannot be empty.":w&&(y="Title must be at least 3 characters long."),S?x="Description cannot be empty.":A&&E?x="Description cannot be just a word.":A&&(x="Description must be at least 5 characters long.");const C={title:!!y,description:!!x};return l(C),g({title:y,description:x}),!Object.values(C).some(W=>W)},b=()=>{d()&&i()};return m.jsxs(xe,{className:"relative block h-screen w-screen overflow-hidden",children:[m.jsx(I,{className:"absolute inset-0 bg-cover bg-center bg-no-repeat opacity-50 z-0",children:m.jsx("img",{alt:"nature",className:"w-full h-full object-cover",src:Ta})}),m.jsx(I,{className:"relative z-10 flex flex-col items-center justify-center h-full text-center",children:e&&(e!=null&&e.name)?m.jsxs(I,{display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"center",gap:4,className:"relative w-11/12 max-w-5xl",children:[m.jsxs(I,{className:"text-data animate-slideInFromLeft",flex:1,padding:4,children:[m.jsxs("h2",{className:"text-5xl cursor-default font-medium text-black tracking-widest capitalize min-h-50",children:["Welcome, ",e==null?void 0:e.name,"!"]}),m.jsx("h4",{className:"text-2xl min-h-48 cursor-default md:text-4xl tracking-widest capitalize pt-12",children:"Let's organize your world, one note at a time!"}),t&&t.length>0&&m.jsx(Z,{variant:"contained",color:"primary",onClick:a,className:"mt-8",children:"See Notes"})]}),m.jsxs(xe,{className:"relative block overflow-hidden animate-slideInFromTop",sx:{padding:4,margin:"auto",marginRight:"12px",marginBottom:"10px",width:"50%",borderRadius:"10px",backgroundColor:"rgba(255, 255, 255, 0.5)",boxShadow:"0px 4px 10px rgba(0, 0, 0, 0.2)",marginTop:"40px",transition:"transform 0.3s, box-shadow 0.3s","&:hover":{transform:"scale(1.01)",boxShadow:"0px 8px 15px rgba(0, 0, 0, 0.3)"}},children:[m.jsx(_,{variant:"h5",fontWeight:"bold",align:"center",gutterBottom:!0,sx:{color:"rgba(0, 0, 0)"},children:"Add a New Note"}),m.jsxs("form",{children:[m.jsxs(I,{display:"flex",flexDirection:"row",gap:4,justifyContent:"space-between",alignItems:"center",children:[m.jsx(_,{paddingRight:2,fontWeight:"bold",fontSize:20,children:"Title"}),m.jsx(Ft,{variant:"outlined",fullWidth:!0,value:r.title,onChange:y=>o({...r,title:y.target.value}),className:"input",error:u.title,helperText:f.title})]}),m.jsxs(I,{display:"flex",flexDirection:"row",gap:4,justifyContent:"space-between",alignItems:"center",children:[m.jsx(_,{paddingRight:4.5,fontWeight:"bold",fontSize:20,children:"Description"}),m.jsx(Ft,{className:"input-desc",variant:"outlined",multiline:!0,rows:4,fullWidth:!0,value:r.description,onChange:y=>o({...r,description:y.target.value}),error:u.description,helperText:f.description,margin:"normal"})]}),m.jsxs(I,{display:"flex",flexDirection:"row",gap:4,justifyContent:"space-between",alignItems:"center",children:[m.jsx(_,{paddingRight:3,fontWeight:"bold",fontSize:20,children:"Tag"}),m.jsx(Ft,{variant:"outlined",fullWidth:!0,value:r.tag,onChange:y=>o({...r,tag:y.target.value}),margin:"normal",className:"input"})]}),m.jsx(I,{display:"flex",justifyContent:"center",mt:3,children:m.jsx(Z,{variant:"contained",color:"primary",startIcon:m.jsx(et,{icon:Qo}),onClick:b,sx:{padding:"10px 20px",fontWeight:"bold"},children:"Add Note"})})]})]})]}):m.jsx(I,{className:"flex flex-col gap-6 justify-center tracking-widest animate-pulse",children:n?m.jsxs(I,{children:[m.jsx(_,{variant:"h5",color:"black",fontWeight:"bold",className:"bottom-link font-bold text-white drop-shadow-lg",children:"Authentication failed!"}),m.jsxs(I,{className:"bottom text-black font-bold",children:["Go back to Home page"," ",m.jsx(Z,{variant:"contained",className:"bottom-link",onClick:()=>s("/"),children:"Go Back"})]})]}):m.jsx(_,{children:"Loading.... "})})})]})}const Jo="/inotes/assets/image-CHbVMFv7.jpg";function ti({notes:t,setNotes:e,fetchNotes:n,handleSaveEdit:a,handleDeleteNote:r}){const o=Ut.getItem("authToken"),[i,s]=P.useState(null);P.useEffect(()=>{o&&n()},[n,o]);const u=l=>{const f=new Date(l),g=f.toLocaleDateString("en-GB",{day:"2-digit",month:"2-digit",year:"numeric"}),d=f.toLocaleTimeString("en-US",{hour:"2-digit",minute:"2-digit",second:"2-digit",hour12:!1});return{date:g,time:d}};return m.jsx(I,{sx:{position:"relative",minHeight:"100vh",overflow:"hidden",backgroundImage:`url(${Jo})`,backgroundSize:"cover",backgroundPosition:"center","::before":{content:'""',position:"absolute",top:0,left:0,width:"100%",height:"100%",backgroundColor:"rgba(0, 0, 0, 0.5)",zIndex:0}},children:m.jsx(I,{sx:{position:"relative",zIndex:1,maxWidth:"1200px",margin:"0 auto",padding:"20px"},children:m.jsx(ke,{container:!0,marginTop:"40px",spacing:3,children:t.map(l=>m.jsx(ke,{item:!0,xs:12,sm:6,md:4,children:m.jsxs(sa,{sx:{height:"220px",display:"flex",marginBottom:"20px",marginRight:"8px",flexDirection:"column",justifyContent:"space-between",backgroundColor:"rgba(208, 207, 208, 0.8)",borderRadius:"10px",boxShadow:"0px 4px 10px rgba(0, 0, 0, 0.2)",transition:"transform 0.3s, box-shadow 0.3s","&:hover":{transform:"scale(1.05)",boxShadow:"0px 8px 15px rgba(0, 0, 0, 0.3)"}},children:[m.jsxs(ba,{children:[m.jsxs(I,{display:"flex",flexDirection:"row",justifyContent:"space-between",children:[m.jsxs(_,{variant:"caption",color:"primary",sx:{marginTop:"16px",display:"block"},contentEditable:i===l._id,suppressContentEditableWarning:!0,onBlur:f=>e(g=>g.map(d=>d._id===l._id?{...d,tag:f.target.textContent||""}:d)),children:["#",l.tag]}),m.jsx(_,{variant:"caption",color:"textSecondary",sx:{marginTop:"16px",display:"block"},children:`Date: ${u(l.date).date} Time: ${u(l.date).time} `})]}),m.jsx(_,{fontWeight:"bold",variant:"h5",marginY:2,className:"capitalize",gutterBottom:!0,contentEditable:i===l._id,suppressContentEditableWarning:!0,onBlur:f=>e(g=>g.map(d=>d._id===l._id?{...d,title:f.target.textContent||""}:d)),children:l.title}),m.jsx(_,{variant:"body2",color:"textSecondary",sx:{overflow:"hidden",textOverflow:"ellipsis",display:"-webkit-box",WebkitLineClamp:3,WebkitBoxOrient:"vertical"},contentEditable:i===l._id,suppressContentEditableWarning:!0,onBlur:f=>e(g=>g.map(d=>d._id===l._id?{...d,description:f.target.textContent||""}:d)),children:l.description})]}),m.jsxs(da,{sx:{display:"flex",flexDirection:"row",justifyContent:"space-between"},children:[i!==l._id?m.jsx(Z,{size:"small",color:"primary",startIcon:m.jsx(et,{icon:Xo}),onClick:()=>s(l._id),children:"Edit"}):m.jsx(Z,{size:"small",color:"primary",startIcon:m.jsx(et,{icon:Ko}),onClick:()=>{a(l),s(null)},children:"Save"}),m.jsx(Z,{size:"small",color:"error",startIcon:m.jsx(et,{icon:qo}),onClick:()=>r(l._id),children:"Delete"})]})]})},l._id))})})})}function li(){const t=P.useRef(null),e=()=>{var N;(N=t.current)==null||N.scrollIntoView({behavior:"smooth"})},[n,a]=P.useState([]),[r,o]=P.useState(null),[i,s]=P.useState({_id:"",title:"",description:"",tag:"",date:""}),u=tn(),l=Ut.getItem("authToken"),{data:f,error:g,refetch:d}=Bn({}),{data:b=[],error:y,refetch:x}=Gn({});P.useEffect(()=>{f&&o(f),g&&u("/errorpage"),b&&r!==null&&a(b),y&&U.error("Error in fetching notes!")},[b,y,u,d,r,g,f]);const[v]=Yn(),w=async()=>{if(!i.title||!i.description||!i.tag){U.info("Please enter required fields.");return}try{await v({...i,headers:{authorization:`Bearer ${l}`}}),s({_id:"",title:"",description:"",tag:"",date:""}),x(),U.success("Notes added successfully!")}catch(N){U.error("Error in adding notes"),console.error("Error adding note:",N)}},[S]=Hn(),A=async N=>{try{await S({id:N._id,data:N,headers:{authorization:`Bearer ${l}`}}),U.success("Note updated successfully"),x()}catch(rt){U.error("Error saving note"),console.error("Error saving note:",rt)}},[E]=Vn(),C=async N=>{try{await E({id:N,headers:{authorization:`Bearer ${l}`}}),x(),U.success("Note deleted successfully!")}catch(rt){U.error("Error deleting note"),console.error("Error deleting note:",rt)}},W=P.useCallback(()=>{x()},[x]),$=()=>{Ut.removeItem("authToken"),o(null),u("/")};return m.jsxs("div",{children:[m.jsx(Qn,{buttonName:"Logout",handleLogout:$}),m.jsx(Zo,{notes:n,userData:r,error:!!g,onMakeNotesClick:e,currentNote:i,setCurrentNote:s,handleAddNote:w}),n&&n.length>0&&m.jsx("div",{ref:t,children:m.jsx(ti,{notes:n,setNotes:a,fetchNotes:W,handleSaveEdit:A,handleDeleteNote:C})})]})}export{li as default};
