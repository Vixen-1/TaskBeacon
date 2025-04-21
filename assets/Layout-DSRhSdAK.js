import{g as Bn,r as P,j as m,R as tn,u as en,d as Bt,a as Gn,b as Yn,c as Hn,e as Vn,f as Xn}from"./index-CagRsFnG.js";/* empty css               *//* empty css            */import{g as wt,d as kt,e as St,a as At,_ as T,s as Ct,f as Pt,h as Ot,i as Kn,r as Et,j as ce,S as we,B as N}from"./Stack-q8OfxHJi.js";import{B as J}from"./Button-CRaxhjZR.js";import{T as _}from"./Typography-UUMtLFSe.js";import{P as qn,u as Qn,T as Lt,S as Zn,A as Jn}from"./TextField-Dbz73Yw9.js";import{N as ta}from"./Navbar-Dv6jby2P.js";var nn={exports:{}},ea="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",na=ea,aa=na;function an(){}function rn(){}rn.resetWarningCache=an;var ra=function(){function t(a,r,o,i,s,f){if(f!==aa){var l=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw l.name="Invariant Violation",l}}t.isRequired=t;function e(){return t}var n={array:t,bigint:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,elementType:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:rn,resetWarningCache:an};return n.PropTypes=n,n};nn.exports=ra();var oa=nn.exports;const h=Bn(oa);function ia(t){return wt("MuiCard",t)}kt("MuiCard",["root"]);const sa=["className","raised"],la=t=>{const{classes:e}=t;return Ot({root:["root"]},ia,e)},ca=Ct(qn,{name:"MuiCard",slot:"Root",overridesResolver:(t,e)=>e.root})(()=>({overflow:"hidden"})),fa=P.forwardRef(function(e,n){const a=St({props:e,name:"MuiCard"}),{className:r,raised:o=!1}=a,i=At(a,sa),s=T({},a,{raised:o}),f=la(s);return m.jsx(ca,T({className:Pt(f.root,r),elevation:o?8:void 0,ref:n,ownerState:s},i))});function ua(t){return wt("MuiCardActions",t)}kt("MuiCardActions",["root","spacing"]);const da=["disableSpacing","className"],ma=t=>{const{classes:e,disableSpacing:n}=t;return Ot({root:["root",!n&&"spacing"]},ua,e)},pa=Ct("div",{name:"MuiCardActions",slot:"Root",overridesResolver:(t,e)=>{const{ownerState:n}=t;return[e.root,!n.disableSpacing&&e.spacing]}})(({ownerState:t})=>T({display:"flex",alignItems:"center",padding:8},!t.disableSpacing&&{"& > :not(style) ~ :not(style)":{marginLeft:8}})),ga=P.forwardRef(function(e,n){const a=St({props:e,name:"MuiCardActions"}),{disableSpacing:r=!1,className:o}=a,i=At(a,da),s=T({},a,{disableSpacing:r}),f=ma(s);return m.jsx(pa,T({className:Pt(f.root,o),ownerState:s,ref:n},i))});function ha(t){return wt("MuiCardContent",t)}kt("MuiCardContent",["root"]);const ba=["className","component"],ya=t=>{const{classes:e}=t;return Ot({root:["root"]},ha,e)},va=Ct("div",{name:"MuiCardContent",slot:"Root",overridesResolver:(t,e)=>e.root})(()=>({padding:16,"&:last-child":{paddingBottom:24}})),xa=P.forwardRef(function(e,n){const a=St({props:e,name:"MuiCardContent"}),{className:r,component:o="div"}=a,i=At(a,ba),s=T({},a,{component:o}),f=ya(s);return m.jsx(va,T({as:o,className:Pt(f.root,r),ownerState:s,ref:n},i))}),ke=P.createContext();function wa(t){return wt("MuiGrid",t)}const ka=[0,1,2,3,4,5,6,7,8,9,10],Sa=["column-reverse","column","row-reverse","row"],Aa=["nowrap","wrap-reverse","wrap"],ot=["auto",!0,1,2,3,4,5,6,7,8,9,10,11,12],ct=kt("MuiGrid",["root","container","item","zeroMinWidth",...ka.map(t=>`spacing-xs-${t}`),...Sa.map(t=>`direction-xs-${t}`),...Aa.map(t=>`wrap-xs-${t}`),...ot.map(t=>`grid-xs-${t}`),...ot.map(t=>`grid-sm-${t}`),...ot.map(t=>`grid-md-${t}`),...ot.map(t=>`grid-lg-${t}`),...ot.map(t=>`grid-xl-${t}`)]),Ca=["className","columns","columnSpacing","component","container","direction","item","rowSpacing","spacing","wrap","zeroMinWidth"];function tt(t){const e=parseFloat(t);return`${e}${String(t).replace(String(e),"")||"px"}`}function Pa({theme:t,ownerState:e}){let n;return t.breakpoints.keys.reduce((a,r)=>{let o={};if(e[r]&&(n=e[r]),!n)return a;if(n===!0)o={flexBasis:0,flexGrow:1,maxWidth:"100%"};else if(n==="auto")o={flexBasis:"auto",flexGrow:0,flexShrink:0,maxWidth:"none",width:"auto"};else{const i=Et({values:e.columns,breakpoints:t.breakpoints.values}),s=typeof i=="object"?i[r]:i;if(s==null)return a;const f=`${Math.round(n/s*1e8)/1e6}%`;let l={};if(e.container&&e.item&&e.columnSpacing!==0){const u=t.spacing(e.columnSpacing);if(u!=="0px"){const g=`calc(${f} + ${tt(u)})`;l={flexBasis:g,maxWidth:g}}}o=T({flexBasis:f,flexGrow:0,maxWidth:f},l)}return t.breakpoints.values[r]===0?Object.assign(a,o):a[t.breakpoints.up(r)]=o,a},{})}function Oa({theme:t,ownerState:e}){const n=Et({values:e.direction,breakpoints:t.breakpoints.values});return ce({theme:t},n,a=>{const r={flexDirection:a};return a.indexOf("column")===0&&(r[`& > .${ct.item}`]={maxWidth:"none"}),r})}function on({breakpoints:t,values:e}){let n="";Object.keys(e).forEach(r=>{n===""&&e[r]!==0&&(n=r)});const a=Object.keys(t).sort((r,o)=>t[r]-t[o]);return a.slice(0,a.indexOf(n))}function Ea({theme:t,ownerState:e}){const{container:n,rowSpacing:a}=e;let r={};if(n&&a!==0){const o=Et({values:a,breakpoints:t.breakpoints.values});let i;typeof o=="object"&&(i=on({breakpoints:t.breakpoints.values,values:o})),r=ce({theme:t},o,(s,f)=>{var l;const u=t.spacing(s);return u!=="0px"?{marginTop:`-${tt(u)}`,[`& > .${ct.item}`]:{paddingTop:tt(u)}}:(l=i)!=null&&l.includes(f)?{}:{marginTop:0,[`& > .${ct.item}`]:{paddingTop:0}}})}return r}function Na({theme:t,ownerState:e}){const{container:n,columnSpacing:a}=e;let r={};if(n&&a!==0){const o=Et({values:a,breakpoints:t.breakpoints.values});let i;typeof o=="object"&&(i=on({breakpoints:t.breakpoints.values,values:o})),r=ce({theme:t},o,(s,f)=>{var l;const u=t.spacing(s);return u!=="0px"?{width:`calc(100% + ${tt(u)})`,marginLeft:`-${tt(u)}`,[`& > .${ct.item}`]:{paddingLeft:tt(u)}}:(l=i)!=null&&l.includes(f)?{}:{width:"100%",marginLeft:0,[`& > .${ct.item}`]:{paddingLeft:0}}})}return r}function Ia(t,e,n={}){if(!t||t<=0)return[];if(typeof t=="string"&&!Number.isNaN(Number(t))||typeof t=="number")return[n[`spacing-xs-${String(t)}`]];const a=[];return e.forEach(r=>{const o=t[r];Number(o)>0&&a.push(n[`spacing-${r}-${String(o)}`])}),a}const Ta=Ct("div",{name:"MuiGrid",slot:"Root",overridesResolver:(t,e)=>{const{ownerState:n}=t,{container:a,direction:r,item:o,spacing:i,wrap:s,zeroMinWidth:f,breakpoints:l}=n;let u=[];a&&(u=Ia(i,l,e));const g=[];return l.forEach(d=>{const b=n[d];b&&g.push(e[`grid-${d}-${String(b)}`])}),[e.root,a&&e.container,o&&e.item,f&&e.zeroMinWidth,...u,r!=="row"&&e[`direction-xs-${String(r)}`],s!=="wrap"&&e[`wrap-xs-${String(s)}`],...g]}})(({ownerState:t})=>T({boxSizing:"border-box"},t.container&&{display:"flex",flexWrap:"wrap",width:"100%"},t.item&&{margin:0},t.zeroMinWidth&&{minWidth:0},t.wrap!=="wrap"&&{flexWrap:t.wrap}),Oa,Ea,Na,Pa);function ja(t,e){if(!t||t<=0)return[];if(typeof t=="string"&&!Number.isNaN(Number(t))||typeof t=="number")return[`spacing-xs-${String(t)}`];const n=[];return e.forEach(a=>{const r=t[a];if(Number(r)>0){const o=`spacing-${a}-${String(r)}`;n.push(o)}}),n}const _a=t=>{const{classes:e,container:n,direction:a,item:r,spacing:o,wrap:i,zeroMinWidth:s,breakpoints:f}=t;let l=[];n&&(l=ja(o,f));const u=[];f.forEach(d=>{const b=t[d];b&&u.push(`grid-${d}-${String(b)}`)});const g={root:["root",n&&"container",r&&"item",s&&"zeroMinWidth",...l,a!=="row"&&`direction-xs-${String(a)}`,i!=="wrap"&&`wrap-xs-${String(i)}`,...u]};return Ot(g,wa,e)},Se=P.forwardRef(function(e,n){const a=St({props:e,name:"MuiGrid"}),{breakpoints:r}=Qn(),o=Kn(a),{className:i,columns:s,columnSpacing:f,component:l="div",container:u=!1,direction:g="row",item:d=!1,rowSpacing:b,spacing:y=0,wrap:A="wrap",zeroMinWidth:v=!1}=o,w=At(o,Ca),x=b||y,S=f||y,E=P.useContext(ke),C=u?s||12:E,W={},$=T({},w);r.keys.forEach(q=>{w[q]!=null&&(W[q]=w[q],delete $[q])});const K=T({},o,{columns:C,container:u,direction:g,item:d,rowSpacing:x,columnSpacing:S,wrap:A,zeroMinWidth:v,spacing:y},W,{breakpoints:r.keys}),Mt=_a(K);return m.jsx(ke.Provider,{value:C,children:m.jsx(Ta,T({ownerState:K,className:Pt(Mt.root,i),as:l,ref:n},$))})}),Ma="/inotes/assets/ohho-CKLdeVfI.jpg";/*!
 * Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */function Fa(t,e,n){return(e=Ra(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function Ae(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter(function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable})),n.push.apply(n,a)}return n}function c(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?Ae(Object(n),!0).forEach(function(a){Fa(t,a,n[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Ae(Object(n)).forEach(function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(n,a))})}return t}function La(t,e){if(typeof t!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var a=n.call(t,e);if(typeof a!="object")return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function Ra(t){var e=La(t,"string");return typeof e=="symbol"?e:e+""}const Ce=()=>{};let fe={},sn={},ln=null,cn={mark:Ce,measure:Ce};try{typeof window<"u"&&(fe=window),typeof document<"u"&&(sn=document),typeof MutationObserver<"u"&&(ln=MutationObserver),typeof performance<"u"&&(cn=performance)}catch{}const{userAgent:Pe=""}=fe.navigator||{},B=fe,k=sn,Oe=ln,pt=cn;B.document;const D=!!k.documentElement&&!!k.head&&typeof k.addEventListener=="function"&&typeof k.createElement=="function",fn=~Pe.indexOf("MSIE")||~Pe.indexOf("Trident/");var za=/fa(s|r|l|t|d|dr|dl|dt|b|k|kd|ss|sr|sl|st|sds|sdr|sdl|sdt)?[\-\ ]/,Da=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit)?.*/i,un={classic:{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fab:"brands","fa-brands":"brands"},duotone:{fa:"solid",fad:"solid","fa-solid":"solid","fa-duotone":"solid",fadr:"regular","fa-regular":"regular",fadl:"light","fa-light":"light",fadt:"thin","fa-thin":"thin"},sharp:{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"},"sharp-duotone":{fa:"solid",fasds:"solid","fa-solid":"solid",fasdr:"regular","fa-regular":"regular",fasdl:"light","fa-light":"light",fasdt:"thin","fa-thin":"thin"}},Wa={GROUP:"duotone-group",PRIMARY:"primary",SECONDARY:"secondary"},dn=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone"],O="classic",Nt="duotone",$a="sharp",Ua="sharp-duotone",mn=[O,Nt,$a,Ua],Ba={classic:{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},duotone:{900:"fad",400:"fadr",300:"fadl",100:"fadt"},sharp:{900:"fass",400:"fasr",300:"fasl",100:"fast"},"sharp-duotone":{900:"fasds",400:"fasdr",300:"fasdl",100:"fasdt"}},Ga={"Font Awesome 6 Free":{900:"fas",400:"far"},"Font Awesome 6 Pro":{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},"Font Awesome 6 Brands":{400:"fab",normal:"fab"},"Font Awesome 6 Duotone":{900:"fad",400:"fadr",normal:"fadr",300:"fadl",100:"fadt"},"Font Awesome 6 Sharp":{900:"fass",400:"fasr",normal:"fasr",300:"fasl",100:"fast"},"Font Awesome 6 Sharp Duotone":{900:"fasds",400:"fasdr",normal:"fasdr",300:"fasdl",100:"fasdt"}},Ya=new Map([["classic",{defaultShortPrefixId:"fas",defaultStyleId:"solid",styleIds:["solid","regular","light","thin","brands"],futureStyleIds:[],defaultFontWeight:900}],["sharp",{defaultShortPrefixId:"fass",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["duotone",{defaultShortPrefixId:"fad",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["sharp-duotone",{defaultShortPrefixId:"fasds",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}]]),Ha={classic:{solid:"fas",regular:"far",light:"fal",thin:"fat",brands:"fab"},duotone:{solid:"fad",regular:"fadr",light:"fadl",thin:"fadt"},sharp:{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"},"sharp-duotone":{solid:"fasds",regular:"fasdr",light:"fasdl",thin:"fasdt"}},Va=["fak","fa-kit","fakd","fa-kit-duotone"],Ee={kit:{fak:"kit","fa-kit":"kit"},"kit-duotone":{fakd:"kit-duotone","fa-kit-duotone":"kit-duotone"}},Xa=["kit"],Ka={kit:{"fa-kit":"fak"}},qa=["fak","fakd"],Qa={kit:{fak:"fa-kit"}},Ne={kit:{kit:"fak"},"kit-duotone":{"kit-duotone":"fakd"}},gt={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},Za=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone"],Ja=["fak","fa-kit","fakd","fa-kit-duotone"],tr={"Font Awesome Kit":{400:"fak",normal:"fak"},"Font Awesome Kit Duotone":{400:"fakd",normal:"fakd"}},er={classic:{"fa-brands":"fab","fa-duotone":"fad","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},duotone:{"fa-regular":"fadr","fa-light":"fadl","fa-thin":"fadt"},sharp:{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"},"sharp-duotone":{"fa-solid":"fasds","fa-regular":"fasdr","fa-light":"fasdl","fa-thin":"fasdt"}},nr={classic:["fas","far","fal","fat","fad"],duotone:["fadr","fadl","fadt"],sharp:["fass","fasr","fasl","fast"],"sharp-duotone":["fasds","fasdr","fasdl","fasdt"]},Gt={classic:{fab:"fa-brands",fad:"fa-duotone",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},duotone:{fadr:"fa-regular",fadl:"fa-light",fadt:"fa-thin"},sharp:{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"},"sharp-duotone":{fasds:"fa-solid",fasdr:"fa-regular",fasdl:"fa-light",fasdt:"fa-thin"}},ar=["fa-solid","fa-regular","fa-light","fa-thin","fa-duotone","fa-brands"],Yt=["fa","fas","far","fal","fat","fad","fadr","fadl","fadt","fab","fass","fasr","fasl","fast","fasds","fasdr","fasdl","fasdt",...Za,...ar],rr=["solid","regular","light","thin","duotone","brands"],pn=[1,2,3,4,5,6,7,8,9,10],or=pn.concat([11,12,13,14,15,16,17,18,19,20]),ir=[...Object.keys(nr),...rr,"2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",gt.GROUP,gt.SWAP_OPACITY,gt.PRIMARY,gt.SECONDARY].concat(pn.map(t=>"".concat(t,"x"))).concat(or.map(t=>"w-".concat(t))),sr={"Font Awesome 5 Free":{900:"fas",400:"far"},"Font Awesome 5 Pro":{900:"fas",400:"far",normal:"far",300:"fal"},"Font Awesome 5 Brands":{400:"fab",normal:"fab"},"Font Awesome 5 Duotone":{900:"fad"}};const R="___FONT_AWESOME___",Ht=16,gn="fa",hn="svg-inline--fa",V="data-fa-i2svg",Vt="data-fa-pseudo-element",lr="data-fa-pseudo-element-pending",ue="data-prefix",de="data-icon",Ie="fontawesome-i2svg",cr="async",fr=["HTML","HEAD","STYLE","SCRIPT"],bn=(()=>{try{return!0}catch{return!1}})();function dt(t){return new Proxy(t,{get(e,n){return n in e?e[n]:e[O]}})}const yn=c({},un);yn[O]=c(c(c(c({},{"fa-duotone":"duotone"}),un[O]),Ee.kit),Ee["kit-duotone"]);const ur=dt(yn),Xt=c({},Ha);Xt[O]=c(c(c(c({},{duotone:"fad"}),Xt[O]),Ne.kit),Ne["kit-duotone"]);const Te=dt(Xt),Kt=c({},Gt);Kt[O]=c(c({},Kt[O]),Qa.kit);const me=dt(Kt),qt=c({},er);qt[O]=c(c({},qt[O]),Ka.kit);dt(qt);const dr=za,vn="fa-layers-text",mr=Da,pr=c({},Ba);dt(pr);const gr=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],Rt=Wa,hr=[...Xa,...ir],st=B.FontAwesomeConfig||{};function br(t){var e=k.querySelector("script["+t+"]");if(e)return e.getAttribute(t)}function yr(t){return t===""?!0:t==="false"?!1:t==="true"?!0:t}k&&typeof k.querySelector=="function"&&[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]].forEach(e=>{let[n,a]=e;const r=yr(br(n));r!=null&&(st[a]=r)});const xn={styleDefault:"solid",familyDefault:O,cssPrefix:gn,replacementClass:hn,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};st.familyPrefix&&(st.cssPrefix=st.familyPrefix);const at=c(c({},xn),st);at.autoReplaceSvg||(at.observeMutations=!1);const p={};Object.keys(xn).forEach(t=>{Object.defineProperty(p,t,{enumerable:!0,set:function(e){at[t]=e,lt.forEach(n=>n(p))},get:function(){return at[t]}})});Object.defineProperty(p,"familyPrefix",{enumerable:!0,set:function(t){at.cssPrefix=t,lt.forEach(e=>e(p))},get:function(){return at.cssPrefix}});B.FontAwesomeConfig=p;const lt=[];function vr(t){return lt.push(t),()=>{lt.splice(lt.indexOf(t),1)}}const U=Ht,F={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function xr(t){if(!t||!D)return;const e=k.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=t;const n=k.head.childNodes;let a=null;for(let r=n.length-1;r>-1;r--){const o=n[r],i=(o.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(i)>-1&&(a=o)}return k.head.insertBefore(e,a),t}const wr="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function ft(){let t=12,e="";for(;t-- >0;)e+=wr[Math.random()*62|0];return e}function rt(t){const e=[];for(let n=(t||[]).length>>>0;n--;)e[n]=t[n];return e}function pe(t){return t.classList?rt(t.classList):(t.getAttribute("class")||"").split(" ").filter(e=>e)}function wn(t){return"".concat(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function kr(t){return Object.keys(t||{}).reduce((e,n)=>e+"".concat(n,'="').concat(wn(t[n]),'" '),"").trim()}function It(t){return Object.keys(t||{}).reduce((e,n)=>e+"".concat(n,": ").concat(t[n].trim(),";"),"")}function ge(t){return t.size!==F.size||t.x!==F.x||t.y!==F.y||t.rotate!==F.rotate||t.flipX||t.flipY}function Sr(t){let{transform:e,containerWidth:n,iconWidth:a}=t;const r={transform:"translate(".concat(n/2," 256)")},o="translate(".concat(e.x*32,", ").concat(e.y*32,") "),i="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),s="rotate(".concat(e.rotate," 0 0)"),f={transform:"".concat(o," ").concat(i," ").concat(s)},l={transform:"translate(".concat(a/2*-1," -256)")};return{outer:r,inner:f,path:l}}function Ar(t){let{transform:e,width:n=Ht,height:a=Ht,startCentered:r=!1}=t,o="";return r&&fn?o+="translate(".concat(e.x/U-n/2,"em, ").concat(e.y/U-a/2,"em) "):r?o+="translate(calc(-50% + ".concat(e.x/U,"em), calc(-50% + ").concat(e.y/U,"em)) "):o+="translate(".concat(e.x/U,"em, ").concat(e.y/U,"em) "),o+="scale(".concat(e.size/U*(e.flipX?-1:1),", ").concat(e.size/U*(e.flipY?-1:1),") "),o+="rotate(".concat(e.rotate,"deg) "),o}var Cr=`:root, :host {
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
}`;function kn(){const t=gn,e=hn,n=p.cssPrefix,a=p.replacementClass;let r=Cr;if(n!==t||a!==e){const o=new RegExp("\\.".concat(t,"\\-"),"g"),i=new RegExp("\\--".concat(t,"\\-"),"g"),s=new RegExp("\\.".concat(e),"g");r=r.replace(o,".".concat(n,"-")).replace(i,"--".concat(n,"-")).replace(s,".".concat(a))}return r}let je=!1;function zt(){p.autoAddCss&&!je&&(xr(kn()),je=!0)}var Pr={mixout(){return{dom:{css:kn,insertCss:zt}}},hooks(){return{beforeDOMElementCreation(){zt()},beforeI2svg(){zt()}}}};const z=B||{};z[R]||(z[R]={});z[R].styles||(z[R].styles={});z[R].hooks||(z[R].hooks={});z[R].shims||(z[R].shims=[]);var L=z[R];const Sn=[],An=function(){k.removeEventListener("DOMContentLoaded",An),yt=1,Sn.map(t=>t())};let yt=!1;D&&(yt=(k.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(k.readyState),yt||k.addEventListener("DOMContentLoaded",An));function Or(t){D&&(yt?setTimeout(t,0):Sn.push(t))}function mt(t){const{tag:e,attributes:n={},children:a=[]}=t;return typeof t=="string"?wn(t):"<".concat(e," ").concat(kr(n),">").concat(a.map(mt).join(""),"</").concat(e,">")}function _e(t,e,n){if(t&&t[e]&&t[e][n])return{prefix:e,iconName:n,icon:t[e][n]}}var Dt=function(e,n,a,r){var o=Object.keys(e),i=o.length,s=n,f,l,u;for(a===void 0?(f=1,u=e[o[0]]):(f=0,u=a);f<i;f++)l=o[f],u=s(u,e[l],l,e);return u};function Er(t){const e=[];let n=0;const a=t.length;for(;n<a;){const r=t.charCodeAt(n++);if(r>=55296&&r<=56319&&n<a){const o=t.charCodeAt(n++);(o&64512)==56320?e.push(((r&1023)<<10)+(o&1023)+65536):(e.push(r),n--)}else e.push(r)}return e}function Qt(t){const e=Er(t);return e.length===1?e[0].toString(16):null}function Nr(t,e){const n=t.length;let a=t.charCodeAt(e),r;return a>=55296&&a<=56319&&n>e+1&&(r=t.charCodeAt(e+1),r>=56320&&r<=57343)?(a-55296)*1024+r-56320+65536:a}function Me(t){return Object.keys(t).reduce((e,n)=>{const a=t[n];return!!a.icon?e[a.iconName]=a.icon:e[n]=a,e},{})}function Zt(t,e){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};const{skipHooks:a=!1}=n,r=Me(e);typeof L.hooks.addPack=="function"&&!a?L.hooks.addPack(t,Me(e)):L.styles[t]=c(c({},L.styles[t]||{}),r),t==="fas"&&Zt("fa",e)}const{styles:ut,shims:Ir}=L,Cn=Object.keys(me),Tr=Cn.reduce((t,e)=>(t[e]=Object.keys(me[e]),t),{});let he=null,Pn={},On={},En={},Nn={},In={};function jr(t){return~hr.indexOf(t)}function _r(t,e){const n=e.split("-"),a=n[0],r=n.slice(1).join("-");return a===t&&r!==""&&!jr(r)?r:null}const Tn=()=>{const t=a=>Dt(ut,(r,o,i)=>(r[i]=Dt(o,a,{}),r),{});Pn=t((a,r,o)=>(r[3]&&(a[r[3]]=o),r[2]&&r[2].filter(s=>typeof s=="number").forEach(s=>{a[s.toString(16)]=o}),a)),On=t((a,r,o)=>(a[o]=o,r[2]&&r[2].filter(s=>typeof s=="string").forEach(s=>{a[s]=o}),a)),In=t((a,r,o)=>{const i=r[2];return a[o]=o,i.forEach(s=>{a[s]=o}),a});const e="far"in ut||p.autoFetchSvg,n=Dt(Ir,(a,r)=>{const o=r[0];let i=r[1];const s=r[2];return i==="far"&&!e&&(i="fas"),typeof o=="string"&&(a.names[o]={prefix:i,iconName:s}),typeof o=="number"&&(a.unicodes[o.toString(16)]={prefix:i,iconName:s}),a},{names:{},unicodes:{}});En=n.names,Nn=n.unicodes,he=Tt(p.styleDefault,{family:p.familyDefault})};vr(t=>{he=Tt(t.styleDefault,{family:p.familyDefault})});Tn();function be(t,e){return(Pn[t]||{})[e]}function Mr(t,e){return(On[t]||{})[e]}function H(t,e){return(In[t]||{})[e]}function jn(t){return En[t]||{prefix:null,iconName:null}}function Fr(t){const e=Nn[t],n=be("fas",t);return e||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function G(){return he}const _n=()=>({prefix:null,iconName:null,rest:[]});function Lr(t){let e=O;const n=Cn.reduce((a,r)=>(a[r]="".concat(p.cssPrefix,"-").concat(r),a),{});return mn.forEach(a=>{(t.includes(n[a])||t.some(r=>Tr[a].includes(r)))&&(e=a)}),e}function Tt(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{family:n=O}=e,a=ur[n][t];if(n===Nt&&!t)return"fad";const r=Te[n][t]||Te[n][a],o=t in L.styles?t:null;return r||o||null}function Rr(t){let e=[],n=null;return t.forEach(a=>{const r=_r(p.cssPrefix,a);r?n=r:a&&e.push(a)}),{iconName:n,rest:e}}function Fe(t){return t.sort().filter((e,n,a)=>a.indexOf(e)===n)}function jt(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{skipLookups:n=!1}=e;let a=null;const r=Yt.concat(Ja),o=Fe(t.filter(g=>r.includes(g))),i=Fe(t.filter(g=>!Yt.includes(g))),s=o.filter(g=>(a=g,!dn.includes(g))),[f=null]=s,l=Lr(o),u=c(c({},Rr(i)),{},{prefix:Tt(f,{family:l})});return c(c(c({},u),$r({values:t,family:l,styles:ut,config:p,canonical:u,givenPrefix:a})),zr(n,a,u))}function zr(t,e,n){let{prefix:a,iconName:r}=n;if(t||!a||!r)return{prefix:a,iconName:r};const o=e==="fa"?jn(r):{},i=H(a,r);return r=o.iconName||i||r,a=o.prefix||a,a==="far"&&!ut.far&&ut.fas&&!p.autoFetchSvg&&(a="fas"),{prefix:a,iconName:r}}const Dr=mn.filter(t=>t!==O||t!==Nt),Wr=Object.keys(Gt).filter(t=>t!==O).map(t=>Object.keys(Gt[t])).flat();function $r(t){const{values:e,family:n,canonical:a,givenPrefix:r="",styles:o={},config:i={}}=t,s=n===Nt,f=e.includes("fa-duotone")||e.includes("fad"),l=i.familyDefault==="duotone",u=a.prefix==="fad"||a.prefix==="fa-duotone";if(!s&&(f||l||u)&&(a.prefix="fad"),(e.includes("fa-brands")||e.includes("fab"))&&(a.prefix="fab"),!a.prefix&&Dr.includes(n)&&(Object.keys(o).find(d=>Wr.includes(d))||i.autoFetchSvg)){const d=Ya.get(n).defaultShortPrefixId;a.prefix=d,a.iconName=H(a.prefix,a.iconName)||a.iconName}return(a.prefix==="fa"||r==="fa")&&(a.prefix=G()||"fas"),a}class Ur{constructor(){this.definitions={}}add(){for(var e=arguments.length,n=new Array(e),a=0;a<e;a++)n[a]=arguments[a];const r=n.reduce(this._pullDefinitions,{});Object.keys(r).forEach(o=>{this.definitions[o]=c(c({},this.definitions[o]||{}),r[o]),Zt(o,r[o]);const i=me[O][o];i&&Zt(i,r[o]),Tn()})}reset(){this.definitions={}}_pullDefinitions(e,n){const a=n.prefix&&n.iconName&&n.icon?{0:n}:n;return Object.keys(a).map(r=>{const{prefix:o,iconName:i,icon:s}=a[r],f=s[2];e[o]||(e[o]={}),f.length>0&&f.forEach(l=>{typeof l=="string"&&(e[o][l]=s)}),e[o][i]=s}),e}}let Le=[],Q={};const et={},Br=Object.keys(et);function Gr(t,e){let{mixoutsTo:n}=e;return Le=t,Q={},Object.keys(et).forEach(a=>{Br.indexOf(a)===-1&&delete et[a]}),Le.forEach(a=>{const r=a.mixout?a.mixout():{};if(Object.keys(r).forEach(o=>{typeof r[o]=="function"&&(n[o]=r[o]),typeof r[o]=="object"&&Object.keys(r[o]).forEach(i=>{n[o]||(n[o]={}),n[o][i]=r[o][i]})}),a.hooks){const o=a.hooks();Object.keys(o).forEach(i=>{Q[i]||(Q[i]=[]),Q[i].push(o[i])})}a.provides&&a.provides(et)}),n}function Jt(t,e){for(var n=arguments.length,a=new Array(n>2?n-2:0),r=2;r<n;r++)a[r-2]=arguments[r];return(Q[t]||[]).forEach(i=>{e=i.apply(null,[e,...a])}),e}function X(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),a=1;a<e;a++)n[a-1]=arguments[a];(Q[t]||[]).forEach(o=>{o.apply(null,n)})}function Y(){const t=arguments[0],e=Array.prototype.slice.call(arguments,1);return et[t]?et[t].apply(null,e):void 0}function te(t){t.prefix==="fa"&&(t.prefix="fas");let{iconName:e}=t;const n=t.prefix||G();if(e)return e=H(n,e)||e,_e(Mn.definitions,n,e)||_e(L.styles,n,e)}const Mn=new Ur,Yr=()=>{p.autoReplaceSvg=!1,p.observeMutations=!1,X("noAuto")},Hr={i2svg:function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return D?(X("beforeI2svg",t),Y("pseudoElements2svg",t),Y("i2svg",t)):Promise.reject(new Error("Operation requires a DOM of some kind."))},watch:function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:e}=t;p.autoReplaceSvg===!1&&(p.autoReplaceSvg=!0),p.observeMutations=!0,Or(()=>{Xr({autoReplaceSvgRoot:e}),X("watch",t)})}},Vr={icon:t=>{if(t===null)return null;if(typeof t=="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:H(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){const e=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],n=Tt(t[0]);return{prefix:n,iconName:H(n,e)||e}}if(typeof t=="string"&&(t.indexOf("".concat(p.cssPrefix,"-"))>-1||t.match(dr))){const e=jt(t.split(" "),{skipLookups:!0});return{prefix:e.prefix||G(),iconName:H(e.prefix,e.iconName)||e.iconName}}if(typeof t=="string"){const e=G();return{prefix:e,iconName:H(e,t)||t}}}},I={noAuto:Yr,config:p,dom:Hr,parse:Vr,library:Mn,findIconDefinition:te,toHtml:mt},Xr=function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:e=k}=t;(Object.keys(L.styles).length>0||p.autoFetchSvg)&&D&&p.autoReplaceSvg&&I.dom.i2svg({node:e})};function _t(t,e){return Object.defineProperty(t,"abstract",{get:e}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map(n=>mt(n))}}),Object.defineProperty(t,"node",{get:function(){if(!D)return;const n=k.createElement("div");return n.innerHTML=t.html,n.children}}),t}function Kr(t){let{children:e,main:n,mask:a,attributes:r,styles:o,transform:i}=t;if(ge(i)&&n.found&&!a.found){const{width:s,height:f}=n,l={x:s/f/2,y:.5};r.style=It(c(c({},o),{},{"transform-origin":"".concat(l.x+i.x/16,"em ").concat(l.y+i.y/16,"em")}))}return[{tag:"svg",attributes:r,children:e}]}function qr(t){let{prefix:e,iconName:n,children:a,attributes:r,symbol:o}=t;const i=o===!0?"".concat(e,"-").concat(p.cssPrefix,"-").concat(n):o;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:c(c({},r),{},{id:i}),children:a}]}]}function ye(t){const{icons:{main:e,mask:n},prefix:a,iconName:r,transform:o,symbol:i,title:s,maskId:f,titleId:l,extra:u,watchable:g=!1}=t,{width:d,height:b}=n.found?n:e,y=qa.includes(a),A=[p.replacementClass,r?"".concat(p.cssPrefix,"-").concat(r):""].filter(C=>u.classes.indexOf(C)===-1).filter(C=>C!==""||!!C).concat(u.classes).join(" ");let v={children:[],attributes:c(c({},u.attributes),{},{"data-prefix":a,"data-icon":r,class:A,role:u.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(d," ").concat(b)})};const w=y&&!~u.classes.indexOf("fa-fw")?{width:"".concat(d/b*16*.0625,"em")}:{};g&&(v.attributes[V]=""),s&&(v.children.push({tag:"title",attributes:{id:v.attributes["aria-labelledby"]||"title-".concat(l||ft())},children:[s]}),delete v.attributes.title);const x=c(c({},v),{},{prefix:a,iconName:r,main:e,mask:n,maskId:f,transform:o,symbol:i,styles:c(c({},w),u.styles)}),{children:S,attributes:E}=n.found&&e.found?Y("generateAbstractMask",x)||{children:[],attributes:{}}:Y("generateAbstractIcon",x)||{children:[],attributes:{}};return x.children=S,x.attributes=E,i?qr(x):Kr(x)}function Re(t){const{content:e,width:n,height:a,transform:r,title:o,extra:i,watchable:s=!1}=t,f=c(c(c({},i.attributes),o?{title:o}:{}),{},{class:i.classes.join(" ")});s&&(f[V]="");const l=c({},i.styles);ge(r)&&(l.transform=Ar({transform:r,startCentered:!0,width:n,height:a}),l["-webkit-transform"]=l.transform);const u=It(l);u.length>0&&(f.style=u);const g=[];return g.push({tag:"span",attributes:f,children:[e]}),o&&g.push({tag:"span",attributes:{class:"sr-only"},children:[o]}),g}function Qr(t){const{content:e,title:n,extra:a}=t,r=c(c(c({},a.attributes),n?{title:n}:{}),{},{class:a.classes.join(" ")}),o=It(a.styles);o.length>0&&(r.style=o);const i=[];return i.push({tag:"span",attributes:r,children:[e]}),n&&i.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),i}const{styles:Wt}=L;function ee(t){const e=t[0],n=t[1],[a]=t.slice(4);let r=null;return Array.isArray(a)?r={tag:"g",attributes:{class:"".concat(p.cssPrefix,"-").concat(Rt.GROUP)},children:[{tag:"path",attributes:{class:"".concat(p.cssPrefix,"-").concat(Rt.SECONDARY),fill:"currentColor",d:a[0]}},{tag:"path",attributes:{class:"".concat(p.cssPrefix,"-").concat(Rt.PRIMARY),fill:"currentColor",d:a[1]}}]}:r={tag:"path",attributes:{fill:"currentColor",d:a}},{found:!0,width:e,height:n,icon:r}}const Zr={found:!1,width:512,height:512};function Jr(t,e){!bn&&!p.showMissingIcons&&t&&console.error('Icon with name "'.concat(t,'" and prefix "').concat(e,'" is missing.'))}function ne(t,e){let n=e;return e==="fa"&&p.styleDefault!==null&&(e=G()),new Promise((a,r)=>{if(n==="fa"){const o=jn(t)||{};t=o.iconName||t,e=o.prefix||e}if(t&&e&&Wt[e]&&Wt[e][t]){const o=Wt[e][t];return a(ee(o))}Jr(t,e),a(c(c({},Zr),{},{icon:p.showMissingIcons&&t?Y("missingIconAbstract")||{}:{}}))})}const ze=()=>{},ae=p.measurePerformance&&pt&&pt.mark&&pt.measure?pt:{mark:ze,measure:ze},it='FA "6.7.2"',to=t=>(ae.mark("".concat(it," ").concat(t," begins")),()=>Fn(t)),Fn=t=>{ae.mark("".concat(it," ").concat(t," ends")),ae.measure("".concat(it," ").concat(t),"".concat(it," ").concat(t," begins"),"".concat(it," ").concat(t," ends"))};var ve={begin:to,end:Fn};const ht=()=>{};function De(t){return typeof(t.getAttribute?t.getAttribute(V):null)=="string"}function eo(t){const e=t.getAttribute?t.getAttribute(ue):null,n=t.getAttribute?t.getAttribute(de):null;return e&&n}function no(t){return t&&t.classList&&t.classList.contains&&t.classList.contains(p.replacementClass)}function ao(){return p.autoReplaceSvg===!0?bt.replace:bt[p.autoReplaceSvg]||bt.replace}function ro(t){return k.createElementNS("http://www.w3.org/2000/svg",t)}function oo(t){return k.createElement(t)}function Ln(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{ceFn:n=t.tag==="svg"?ro:oo}=e;if(typeof t=="string")return k.createTextNode(t);const a=n(t.tag);return Object.keys(t.attributes||[]).forEach(function(o){a.setAttribute(o,t.attributes[o])}),(t.children||[]).forEach(function(o){a.appendChild(Ln(o,{ceFn:n}))}),a}function io(t){let e=" ".concat(t.outerHTML," ");return e="".concat(e,"Font Awesome fontawesome.com "),e}const bt={replace:function(t){const e=t[0];if(e.parentNode)if(t[1].forEach(n=>{e.parentNode.insertBefore(Ln(n),e)}),e.getAttribute(V)===null&&p.keepOriginalSource){let n=k.createComment(io(e));e.parentNode.replaceChild(n,e)}else e.remove()},nest:function(t){const e=t[0],n=t[1];if(~pe(e).indexOf(p.replacementClass))return bt.replace(t);const a=new RegExp("".concat(p.cssPrefix,"-.*"));if(delete n[0].attributes.id,n[0].attributes.class){const o=n[0].attributes.class.split(" ").reduce((i,s)=>(s===p.replacementClass||s.match(a)?i.toSvg.push(s):i.toNode.push(s),i),{toNode:[],toSvg:[]});n[0].attributes.class=o.toSvg.join(" "),o.toNode.length===0?e.removeAttribute("class"):e.setAttribute("class",o.toNode.join(" "))}const r=n.map(o=>mt(o)).join(`
`);e.setAttribute(V,""),e.innerHTML=r}};function We(t){t()}function Rn(t,e){const n=typeof e=="function"?e:ht;if(t.length===0)n();else{let a=We;p.mutateApproach===cr&&(a=B.requestAnimationFrame||We),a(()=>{const r=ao(),o=ve.begin("mutate");t.map(r),o(),n()})}}let xe=!1;function zn(){xe=!0}function re(){xe=!1}let vt=null;function $e(t){if(!Oe||!p.observeMutations)return;const{treeCallback:e=ht,nodeCallback:n=ht,pseudoElementsCallback:a=ht,observeMutationsRoot:r=k}=t;vt=new Oe(o=>{if(xe)return;const i=G();rt(o).forEach(s=>{if(s.type==="childList"&&s.addedNodes.length>0&&!De(s.addedNodes[0])&&(p.searchPseudoElements&&a(s.target),e(s.target)),s.type==="attributes"&&s.target.parentNode&&p.searchPseudoElements&&a(s.target.parentNode),s.type==="attributes"&&De(s.target)&&~gr.indexOf(s.attributeName))if(s.attributeName==="class"&&eo(s.target)){const{prefix:f,iconName:l}=jt(pe(s.target));s.target.setAttribute(ue,f||i),l&&s.target.setAttribute(de,l)}else no(s.target)&&n(s.target)})}),D&&vt.observe(r,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}function so(){vt&&vt.disconnect()}function lo(t){const e=t.getAttribute("style");let n=[];return e&&(n=e.split(";").reduce((a,r)=>{const o=r.split(":"),i=o[0],s=o.slice(1);return i&&s.length>0&&(a[i]=s.join(":").trim()),a},{})),n}function co(t){const e=t.getAttribute("data-prefix"),n=t.getAttribute("data-icon"),a=t.innerText!==void 0?t.innerText.trim():"";let r=jt(pe(t));return r.prefix||(r.prefix=G()),e&&n&&(r.prefix=e,r.iconName=n),r.iconName&&r.prefix||(r.prefix&&a.length>0&&(r.iconName=Mr(r.prefix,t.innerText)||be(r.prefix,Qt(t.innerText))),!r.iconName&&p.autoFetchSvg&&t.firstChild&&t.firstChild.nodeType===Node.TEXT_NODE&&(r.iconName=t.firstChild.data)),r}function fo(t){const e=rt(t.attributes).reduce((r,o)=>(r.name!=="class"&&r.name!=="style"&&(r[o.name]=o.value),r),{}),n=t.getAttribute("title"),a=t.getAttribute("data-fa-title-id");return p.autoA11y&&(n?e["aria-labelledby"]="".concat(p.replacementClass,"-title-").concat(a||ft()):(e["aria-hidden"]="true",e.focusable="false")),e}function uo(){return{iconName:null,title:null,titleId:null,prefix:null,transform:F,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function Ue(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0};const{iconName:n,prefix:a,rest:r}=co(t),o=fo(t),i=Jt("parseNodeAttributes",{},t);let s=e.styleParser?lo(t):[];return c({iconName:n,title:t.getAttribute("title"),titleId:t.getAttribute("data-fa-title-id"),prefix:a,transform:F,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:r,styles:s,attributes:o}},i)}const{styles:mo}=L;function Dn(t){const e=p.autoReplaceSvg==="nest"?Ue(t,{styleParser:!1}):Ue(t);return~e.extra.classes.indexOf(vn)?Y("generateLayersText",t,e):Y("generateSvgReplacementMutation",t,e)}function po(){return[...Va,...Yt]}function Be(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!D)return Promise.resolve();const n=k.documentElement.classList,a=u=>n.add("".concat(Ie,"-").concat(u)),r=u=>n.remove("".concat(Ie,"-").concat(u)),o=p.autoFetchSvg?po():dn.concat(Object.keys(mo));o.includes("fa")||o.push("fa");const i=[".".concat(vn,":not([").concat(V,"])")].concat(o.map(u=>".".concat(u,":not([").concat(V,"])"))).join(", ");if(i.length===0)return Promise.resolve();let s=[];try{s=rt(t.querySelectorAll(i))}catch{}if(s.length>0)a("pending"),r("complete");else return Promise.resolve();const f=ve.begin("onTree"),l=s.reduce((u,g)=>{try{const d=Dn(g);d&&u.push(d)}catch(d){bn||d.name==="MissingIcon"&&console.error(d)}return u},[]);return new Promise((u,g)=>{Promise.all(l).then(d=>{Rn(d,()=>{a("active"),a("complete"),r("pending"),typeof e=="function"&&e(),f(),u()})}).catch(d=>{f(),g(d)})})}function go(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;Dn(t).then(n=>{n&&Rn([n],e)})}function ho(t){return function(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const a=(e||{}).icon?e:te(e||{});let{mask:r}=n;return r&&(r=(r||{}).icon?r:te(r||{})),t(a,c(c({},n),{},{mask:r}))}}const bo=function(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:n=F,symbol:a=!1,mask:r=null,maskId:o=null,title:i=null,titleId:s=null,classes:f=[],attributes:l={},styles:u={}}=e;if(!t)return;const{prefix:g,iconName:d,icon:b}=t;return _t(c({type:"icon"},t),()=>(X("beforeDOMElementCreation",{iconDefinition:t,params:e}),p.autoA11y&&(i?l["aria-labelledby"]="".concat(p.replacementClass,"-title-").concat(s||ft()):(l["aria-hidden"]="true",l.focusable="false")),ye({icons:{main:ee(b),mask:r?ee(r.icon):{found:!1,width:null,height:null,icon:{}}},prefix:g,iconName:d,transform:c(c({},F),n),symbol:a,title:i,maskId:o,titleId:s,extra:{attributes:l,styles:u,classes:f}})))};var yo={mixout(){return{icon:ho(bo)}},hooks(){return{mutationObserverCallbacks(t){return t.treeCallback=Be,t.nodeCallback=go,t}}},provides(t){t.i2svg=function(e){const{node:n=k,callback:a=()=>{}}=e;return Be(n,a)},t.generateSvgReplacementMutation=function(e,n){const{iconName:a,title:r,titleId:o,prefix:i,transform:s,symbol:f,mask:l,maskId:u,extra:g}=n;return new Promise((d,b)=>{Promise.all([ne(a,i),l.iconName?ne(l.iconName,l.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(y=>{let[A,v]=y;d([e,ye({icons:{main:A,mask:v},prefix:i,iconName:a,transform:s,symbol:f,maskId:u,title:r,titleId:o,extra:g,watchable:!0})])}).catch(b)})},t.generateAbstractIcon=function(e){let{children:n,attributes:a,main:r,transform:o,styles:i}=e;const s=It(i);s.length>0&&(a.style=s);let f;return ge(o)&&(f=Y("generateAbstractTransformGrouping",{main:r,transform:o,containerWidth:r.width,iconWidth:r.width})),n.push(f||r.icon),{children:n,attributes:a}}}},vo={mixout(){return{layer(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{classes:n=[]}=e;return _t({type:"layer"},()=>{X("beforeDOMElementCreation",{assembler:t,params:e});let a=[];return t(r=>{Array.isArray(r)?r.map(o=>{a=a.concat(o.abstract)}):a=a.concat(r.abstract)}),[{tag:"span",attributes:{class:["".concat(p.cssPrefix,"-layers"),...n].join(" ")},children:a}]})}}}},xo={mixout(){return{counter(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{title:n=null,classes:a=[],attributes:r={},styles:o={}}=e;return _t({type:"counter",content:t},()=>(X("beforeDOMElementCreation",{content:t,params:e}),Qr({content:t.toString(),title:n,extra:{attributes:r,styles:o,classes:["".concat(p.cssPrefix,"-layers-counter"),...a]}})))}}}},wo={mixout(){return{text(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:n=F,title:a=null,classes:r=[],attributes:o={},styles:i={}}=e;return _t({type:"text",content:t},()=>(X("beforeDOMElementCreation",{content:t,params:e}),Re({content:t,transform:c(c({},F),n),title:a,extra:{attributes:o,styles:i,classes:["".concat(p.cssPrefix,"-layers-text"),...r]}})))}}},provides(t){t.generateLayersText=function(e,n){const{title:a,transform:r,extra:o}=n;let i=null,s=null;if(fn){const f=parseInt(getComputedStyle(e).fontSize,10),l=e.getBoundingClientRect();i=l.width/f,s=l.height/f}return p.autoA11y&&!a&&(o.attributes["aria-hidden"]="true"),Promise.resolve([e,Re({content:e.innerHTML,width:i,height:s,transform:r,title:a,extra:o,watchable:!0})])}}};const ko=new RegExp('"',"ug"),Ge=[1105920,1112319],Ye=c(c(c(c({},{FontAwesome:{normal:"fas",400:"fas"}}),Ga),sr),tr),oe=Object.keys(Ye).reduce((t,e)=>(t[e.toLowerCase()]=Ye[e],t),{}),So=Object.keys(oe).reduce((t,e)=>{const n=oe[e];return t[e]=n[900]||[...Object.entries(n)][0][1],t},{});function Ao(t){const e=t.replace(ko,""),n=Nr(e,0),a=n>=Ge[0]&&n<=Ge[1],r=e.length===2?e[0]===e[1]:!1;return{value:Qt(r?e[0]:e),isSecondary:a||r}}function Co(t,e){const n=t.replace(/^['"]|['"]$/g,"").toLowerCase(),a=parseInt(e),r=isNaN(a)?"normal":a;return(oe[n]||{})[r]||So[n]}function He(t,e){const n="".concat(lr).concat(e.replace(":","-"));return new Promise((a,r)=>{if(t.getAttribute(n)!==null)return a();const i=rt(t.children).filter(d=>d.getAttribute(Vt)===e)[0],s=B.getComputedStyle(t,e),f=s.getPropertyValue("font-family"),l=f.match(mr),u=s.getPropertyValue("font-weight"),g=s.getPropertyValue("content");if(i&&!l)return t.removeChild(i),a();if(l&&g!=="none"&&g!==""){const d=s.getPropertyValue("content");let b=Co(f,u);const{value:y,isSecondary:A}=Ao(d),v=l[0].startsWith("FontAwesome");let w=be(b,y),x=w;if(v){const S=Fr(y);S.iconName&&S.prefix&&(w=S.iconName,b=S.prefix)}if(w&&!A&&(!i||i.getAttribute(ue)!==b||i.getAttribute(de)!==x)){t.setAttribute(n,x),i&&t.removeChild(i);const S=uo(),{extra:E}=S;E.attributes[Vt]=e,ne(w,b).then(C=>{const W=ye(c(c({},S),{},{icons:{main:C,mask:_n()},prefix:b,iconName:x,extra:E,watchable:!0})),$=k.createElementNS("http://www.w3.org/2000/svg","svg");e==="::before"?t.insertBefore($,t.firstChild):t.appendChild($),$.outerHTML=W.map(K=>mt(K)).join(`
`),t.removeAttribute(n),a()}).catch(r)}else a()}else a()})}function Po(t){return Promise.all([He(t,"::before"),He(t,"::after")])}function Oo(t){return t.parentNode!==document.head&&!~fr.indexOf(t.tagName.toUpperCase())&&!t.getAttribute(Vt)&&(!t.parentNode||t.parentNode.tagName!=="svg")}function Ve(t){if(D)return new Promise((e,n)=>{const a=rt(t.querySelectorAll("*")).filter(Oo).map(Po),r=ve.begin("searchPseudoElements");zn(),Promise.all(a).then(()=>{r(),re(),e()}).catch(()=>{r(),re(),n()})})}var Eo={hooks(){return{mutationObserverCallbacks(t){return t.pseudoElementsCallback=Ve,t}}},provides(t){t.pseudoElements2svg=function(e){const{node:n=k}=e;p.searchPseudoElements&&Ve(n)}}};let Xe=!1;var No={mixout(){return{dom:{unwatch(){zn(),Xe=!0}}}},hooks(){return{bootstrap(){$e(Jt("mutationObserverCallbacks",{}))},noAuto(){so()},watch(t){const{observeMutationsRoot:e}=t;Xe?re():$e(Jt("mutationObserverCallbacks",{observeMutationsRoot:e}))}}}};const Ke=t=>{let e={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce((n,a)=>{const r=a.toLowerCase().split("-"),o=r[0];let i=r.slice(1).join("-");if(o&&i==="h")return n.flipX=!0,n;if(o&&i==="v")return n.flipY=!0,n;if(i=parseFloat(i),isNaN(i))return n;switch(o){case"grow":n.size=n.size+i;break;case"shrink":n.size=n.size-i;break;case"left":n.x=n.x-i;break;case"right":n.x=n.x+i;break;case"up":n.y=n.y-i;break;case"down":n.y=n.y+i;break;case"rotate":n.rotate=n.rotate+i;break}return n},e)};var Io={mixout(){return{parse:{transform:t=>Ke(t)}}},hooks(){return{parseNodeAttributes(t,e){const n=e.getAttribute("data-fa-transform");return n&&(t.transform=Ke(n)),t}}},provides(t){t.generateAbstractTransformGrouping=function(e){let{main:n,transform:a,containerWidth:r,iconWidth:o}=e;const i={transform:"translate(".concat(r/2," 256)")},s="translate(".concat(a.x*32,", ").concat(a.y*32,") "),f="scale(".concat(a.size/16*(a.flipX?-1:1),", ").concat(a.size/16*(a.flipY?-1:1),") "),l="rotate(".concat(a.rotate," 0 0)"),u={transform:"".concat(s," ").concat(f," ").concat(l)},g={transform:"translate(".concat(o/2*-1," -256)")},d={outer:i,inner:u,path:g};return{tag:"g",attributes:c({},d.outer),children:[{tag:"g",attributes:c({},d.inner),children:[{tag:n.icon.tag,children:n.icon.children,attributes:c(c({},n.icon.attributes),d.path)}]}]}}}};const $t={x:0,y:0,width:"100%",height:"100%"};function qe(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return t.attributes&&(t.attributes.fill||e)&&(t.attributes.fill="black"),t}function To(t){return t.tag==="g"?t.children:[t]}var jo={hooks(){return{parseNodeAttributes(t,e){const n=e.getAttribute("data-fa-mask"),a=n?jt(n.split(" ").map(r=>r.trim())):_n();return a.prefix||(a.prefix=G()),t.mask=a,t.maskId=e.getAttribute("data-fa-mask-id"),t}}},provides(t){t.generateAbstractMask=function(e){let{children:n,attributes:a,main:r,mask:o,maskId:i,transform:s}=e;const{width:f,icon:l}=r,{width:u,icon:g}=o,d=Sr({transform:s,containerWidth:u,iconWidth:f}),b={tag:"rect",attributes:c(c({},$t),{},{fill:"white"})},y=l.children?{children:l.children.map(qe)}:{},A={tag:"g",attributes:c({},d.inner),children:[qe(c({tag:l.tag,attributes:c(c({},l.attributes),d.path)},y))]},v={tag:"g",attributes:c({},d.outer),children:[A]},w="mask-".concat(i||ft()),x="clip-".concat(i||ft()),S={tag:"mask",attributes:c(c({},$t),{},{id:w,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[b,v]},E={tag:"defs",children:[{tag:"clipPath",attributes:{id:x},children:To(g)},S]};return n.push(E,{tag:"rect",attributes:c({fill:"currentColor","clip-path":"url(#".concat(x,")"),mask:"url(#".concat(w,")")},$t)}),{children:n,attributes:a}}}},_o={provides(t){let e=!1;B.matchMedia&&(e=B.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){const n=[],a={fill:"currentColor"},r={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};n.push({tag:"path",attributes:c(c({},a),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});const o=c(c({},r),{},{attributeName:"opacity"}),i={tag:"circle",attributes:c(c({},a),{},{cx:"256",cy:"364",r:"28"}),children:[]};return e||i.children.push({tag:"animate",attributes:c(c({},r),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:c(c({},o),{},{values:"1;0;1;1;0;1;"})}),n.push(i),n.push({tag:"path",attributes:c(c({},a),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:e?[]:[{tag:"animate",attributes:c(c({},o),{},{values:"1;0;0;0;0;1;"})}]}),e||n.push({tag:"path",attributes:c(c({},a),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:c(c({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:n}}}},Mo={hooks(){return{parseNodeAttributes(t,e){const n=e.getAttribute("data-fa-symbol"),a=n===null?!1:n===""?!0:n;return t.symbol=a,t}}}},Fo=[Pr,yo,vo,xo,wo,Eo,No,Io,jo,_o,Mo];Gr(Fo,{mixoutsTo:I});I.noAuto;I.config;I.library;I.dom;const ie=I.parse;I.findIconDefinition;I.toHtml;const Lo=I.icon;I.layer;I.text;I.counter;function Qe(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter(function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable})),n.push.apply(n,a)}return n}function M(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?Qe(Object(n),!0).forEach(function(a){Z(t,a,n[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Qe(Object(n)).forEach(function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(n,a))})}return t}function xt(t){"@babel/helpers - typeof";return xt=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},xt(t)}function Z(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function Ro(t,e){if(t==null)return{};var n={},a=Object.keys(t),r,o;for(o=0;o<a.length;o++)r=a[o],!(e.indexOf(r)>=0)&&(n[r]=t[r]);return n}function zo(t,e){if(t==null)return{};var n=Ro(t,e),a,r;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)a=o[r],!(e.indexOf(a)>=0)&&Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}function se(t){return Do(t)||Wo(t)||$o(t)||Uo()}function Do(t){if(Array.isArray(t))return le(t)}function Wo(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function $o(t,e){if(t){if(typeof t=="string")return le(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return le(t,e)}}function le(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,a=new Array(e);n<e;n++)a[n]=t[n];return a}function Uo(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Bo(t){var e,n=t.beat,a=t.fade,r=t.beatFade,o=t.bounce,i=t.shake,s=t.flash,f=t.spin,l=t.spinPulse,u=t.spinReverse,g=t.pulse,d=t.fixedWidth,b=t.inverse,y=t.border,A=t.listItem,v=t.flip,w=t.size,x=t.rotation,S=t.pull,E=(e={"fa-beat":n,"fa-fade":a,"fa-beat-fade":r,"fa-bounce":o,"fa-shake":i,"fa-flash":s,"fa-spin":f,"fa-spin-reverse":u,"fa-spin-pulse":l,"fa-pulse":g,"fa-fw":d,"fa-inverse":b,"fa-border":y,"fa-li":A,"fa-flip":v===!0,"fa-flip-horizontal":v==="horizontal"||v==="both","fa-flip-vertical":v==="vertical"||v==="both"},Z(e,"fa-".concat(w),typeof w<"u"&&w!==null),Z(e,"fa-rotate-".concat(x),typeof x<"u"&&x!==null&&x!==0),Z(e,"fa-pull-".concat(S),typeof S<"u"&&S!==null),Z(e,"fa-swap-opacity",t.swapOpacity),e);return Object.keys(E).map(function(C){return E[C]?C:null}).filter(function(C){return C})}function Go(t){return t=t-0,t===t}function Wn(t){return Go(t)?t:(t=t.replace(/[\-_\s]+(.)?/g,function(e,n){return n?n.toUpperCase():""}),t.substr(0,1).toLowerCase()+t.substr(1))}var Yo=["style"];function Ho(t){return t.charAt(0).toUpperCase()+t.slice(1)}function Vo(t){return t.split(";").map(function(e){return e.trim()}).filter(function(e){return e}).reduce(function(e,n){var a=n.indexOf(":"),r=Wn(n.slice(0,a)),o=n.slice(a+1).trim();return r.startsWith("webkit")?e[Ho(r)]=o:e[r]=o,e},{})}function $n(t,e){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof e=="string")return e;var a=(e.children||[]).map(function(f){return $n(t,f)}),r=Object.keys(e.attributes||{}).reduce(function(f,l){var u=e.attributes[l];switch(l){case"class":f.attrs.className=u,delete e.attributes.class;break;case"style":f.attrs.style=Vo(u);break;default:l.indexOf("aria-")===0||l.indexOf("data-")===0?f.attrs[l.toLowerCase()]=u:f.attrs[Wn(l)]=u}return f},{attrs:{}}),o=n.style,i=o===void 0?{}:o,s=zo(n,Yo);return r.attrs.style=M(M({},r.attrs.style),i),t.apply(void 0,[e.tag,M(M({},r.attrs),s)].concat(se(a)))}var Un=!1;try{Un=!0}catch{}function Xo(){if(!Un&&console&&typeof console.error=="function"){var t;(t=console).error.apply(t,arguments)}}function Ze(t){if(t&&xt(t)==="object"&&t.prefix&&t.iconName&&t.icon)return t;if(ie.icon)return ie.icon(t);if(t===null)return null;if(t&&xt(t)==="object"&&t.prefix&&t.iconName)return t;if(Array.isArray(t)&&t.length===2)return{prefix:t[0],iconName:t[1]};if(typeof t=="string")return{prefix:"fas",iconName:t}}function Ut(t,e){return Array.isArray(e)&&e.length>0||!Array.isArray(e)&&e?Z({},t,e):{}}var Je={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1},nt=tn.forwardRef(function(t,e){var n=M(M({},Je),t),a=n.icon,r=n.mask,o=n.symbol,i=n.className,s=n.title,f=n.titleId,l=n.maskId,u=Ze(a),g=Ut("classes",[].concat(se(Bo(n)),se((i||"").split(" ")))),d=Ut("transform",typeof n.transform=="string"?ie.transform(n.transform):n.transform),b=Ut("mask",Ze(r)),y=Lo(u,M(M(M(M({},g),d),b),{},{symbol:o,title:s,titleId:f,maskId:l}));if(!y)return Xo("Could not find icon",u),null;var A=y.abstract,v={ref:e};return Object.keys(n).forEach(function(w){Je.hasOwnProperty(w)||(v[w]=n[w])}),Ko(A[0],v)});nt.displayName="FontAwesomeIcon";nt.propTypes={beat:h.bool,border:h.bool,beatFade:h.bool,bounce:h.bool,className:h.string,fade:h.bool,flash:h.bool,mask:h.oneOfType([h.object,h.array,h.string]),maskId:h.string,fixedWidth:h.bool,inverse:h.bool,flip:h.oneOf([!0,!1,"horizontal","vertical","both"]),icon:h.oneOfType([h.object,h.array,h.string]),listItem:h.bool,pull:h.oneOf(["right","left"]),pulse:h.bool,rotation:h.oneOf([0,90,180,270]),shake:h.bool,size:h.oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:h.bool,spinPulse:h.bool,spinReverse:h.bool,symbol:h.oneOfType([h.bool,h.string]),title:h.string,titleId:h.string,transform:h.oneOfType([h.string,h.object]),swapOpacity:h.bool};var Ko=$n.bind(null,tn.createElement);/*!
 * Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */const qo={prefix:"fas",iconName:"pen-to-square",icon:[512,512,["edit"],"f044","M471.6 21.7c-21.9-21.9-57.3-21.9-79.2 0L362.3 51.7l97.9 97.9 30.1-30.1c21.9-21.9 21.9-57.3 0-79.2L471.6 21.7zm-299.2 220c-6.1 6.1-10.8 13.6-13.5 21.9l-29.6 88.8c-2.9 8.6-.6 18.1 5.8 24.6s15.9 8.7 24.6 5.8l88.8-29.6c8.2-2.7 15.7-7.4 21.9-13.5L437.7 172.3 339.7 74.3 172.4 241.7zM96 64C43 64 0 107 0 160L0 416c0 53 43 96 96 96l256 0c53 0 96-43 96-96l0-96c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 96c0 17.7-14.3 32-32 32L96 448c-17.7 0-32-14.3-32-32l0-256c0-17.7 14.3-32 32-32l96 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L96 64z"]},Qo=qo,Zo={prefix:"fas",iconName:"floppy-disk",icon:[448,512,[128190,128426,"save"],"f0c7","M64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-242.7c0-17-6.7-33.3-18.7-45.3L352 50.7C340 38.7 323.7 32 306.7 32L64 32zm0 96c0-17.7 14.3-32 32-32l192 0c17.7 0 32 14.3 32 32l0 64c0 17.7-14.3 32-32 32L96 224c-17.7 0-32-14.3-32-32l0-64zM224 288a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"]},Jo={prefix:"fas",iconName:"trash",icon:[448,512,[],"f1f8","M135.2 17.7L128 32 32 32C14.3 32 0 46.3 0 64S14.3 96 32 96l384 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-96 0-7.2-14.3C307.4 6.8 296.3 0 284.2 0L163.8 0c-12.1 0-23.2 6.8-28.6 17.7zM416 128L32 128 53.2 467c1.6 25.3 22.6 45 47.9 45l245.8 0c25.3 0 46.3-19.7 47.9-45L416 128z"]},ti={prefix:"fas",iconName:"plus",icon:[448,512,[10133,61543,"add"],"2b","M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 144L48 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l144 0 0 144c0 17.7 14.3 32 32 32s32-14.3 32-32l0-144 144 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-144 0 0-144z"]};function ei({notes:t,userData:e,error:n,onMakeNotesClick:a,currentNote:r,setCurrentNote:o,handleAddNote:i}){const s=en(),[f,l]=P.useState({title:!1,description:!1}),[u,g]=P.useState({title:"",description:""}),d=()=>{let y="",A="";const v=r.title.trim().length===0,w=r.title.trim().length<3,x=r.description.trim().length===0,S=r.description.trim().length<5,E=r.description.trim().split(/\s+/).length===1;v?y="Title cannot be empty.":w&&(y="Title must be at least 3 characters long."),x?A="Description cannot be empty.":S&&E?A="Description cannot be just a word.":S&&(A="Description must be at least 5 characters long.");const C={title:!!y,description:!!A};return l(C),g({title:y,description:A}),!Object.values(C).some(W=>W)},b=()=>{d()&&i()};return m.jsxs(we,{className:"relative block h-screen w-screen overflow-hidden",children:[m.jsx(N,{className:"absolute inset-0 bg-cover bg-center bg-no-repeat opacity-50 z-0",children:m.jsx("img",{alt:"nature",className:"w-full h-full object-cover",src:Ma})}),m.jsx(N,{className:"relative z-10 flex flex-col items-center justify-center h-full text-center",children:e&&(e!=null&&e.name)?m.jsxs(N,{display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"center",gap:4,className:"relative w-11/12 max-w-5xl",children:[m.jsxs(N,{className:"text-data animate-slideInFromLeft",flex:1,padding:4,children:[m.jsxs("h2",{className:"text-5xl cursor-default font-medium text-black tracking-widest capitalize min-h-50",children:["Welcome, ",e==null?void 0:e.name,"!"]}),m.jsx("h4",{className:"text-2xl min-h-48 cursor-default md:text-4xl tracking-widest capitalize pt-12",children:"Let's organize your world, one note at a time!"}),t&&t.length>0&&m.jsx(J,{variant:"contained",color:"primary",onClick:a,className:"mt-8",children:"See Notes"})]}),m.jsxs(we,{className:"relative block overflow-hidden animate-slideInFromTop",sx:{padding:4,margin:"auto",marginRight:"12px",marginBottom:"10px",width:"50%",borderRadius:"10px",backgroundColor:"rgba(255, 255, 255, 0.5)",boxShadow:"0px 4px 10px rgba(0, 0, 0, 0.2)",marginTop:"40px",transition:"transform 0.3s, box-shadow 0.3s","&:hover":{transform:"scale(1.05)",boxShadow:"0px 8px 15px rgba(0, 0, 0, 0.3)"}},children:[m.jsx(_,{variant:"h5",fontWeight:"bold",align:"center",gutterBottom:!0,sx:{color:"rgba(0, 0, 0)"},children:"Add a New Note"}),m.jsxs("form",{children:[m.jsxs(N,{display:"flex",flexDirection:"row",gap:4,justifyContent:"space-between",alignItems:"center",children:[m.jsx(_,{paddingRight:2,fontWeight:"bold",fontSize:20,children:"Title"}),m.jsx(Lt,{variant:"outlined",fullWidth:!0,value:r.title,onChange:y=>o({...r,title:y.target.value}),className:"input",error:f.title,helperText:u.title})]}),m.jsxs(N,{display:"flex",flexDirection:"row",gap:4,justifyContent:"space-between",alignItems:"center",children:[m.jsx(_,{paddingRight:4.5,fontWeight:"bold",fontSize:20,children:"Description"}),m.jsx(Lt,{className:"input-desc",variant:"outlined",multiline:!0,rows:4,fullWidth:!0,value:r.description,onChange:y=>o({...r,description:y.target.value}),error:f.description,helperText:u.description,margin:"normal"})]}),m.jsxs(N,{display:"flex",flexDirection:"row",gap:4,justifyContent:"space-between",alignItems:"center",children:[m.jsx(_,{paddingRight:3,fontWeight:"bold",fontSize:20,children:"Tag"}),m.jsx(Lt,{variant:"outlined",fullWidth:!0,value:r.tag,onChange:y=>o({...r,tag:y.target.value}),margin:"normal",className:"input"})]}),m.jsx(N,{display:"flex",justifyContent:"center",mt:3,children:m.jsx(J,{variant:"contained",color:"primary",startIcon:m.jsx(nt,{icon:ti}),onClick:b,sx:{padding:"10px 20px",fontWeight:"bold"},children:"Add Note"})})]})]})]}):m.jsx(N,{className:"flex flex-col gap-6 justify-center tracking-widest animate-pulse",children:n?m.jsxs(N,{children:[m.jsx(_,{variant:"h5",color:"black",fontWeight:"bold",className:"bottom-link font-bold text-white drop-shadow-lg",children:"Authentication failed!"}),m.jsxs(N,{className:"bottom text-black font-bold",children:["Go back to Home page"," ",m.jsx(J,{variant:"contained",className:"bottom-link",onClick:()=>s("/"),children:"Go Back"})]})]}):m.jsx(_,{children:"Loading.... "})})})]})}const ni="/inotes/assets/image-CHbVMFv7.jpg";function ai({notes:t,setNotes:e,fetchNotes:n,handleSaveEdit:a,handleDeleteNote:r}){const o=Bt.getItem("authToken"),[i,s]=P.useState(null);P.useEffect(()=>{o&&n()},[n,o]);const f=l=>{const u=new Date(l),g=u.toLocaleDateString("en-GB",{day:"2-digit",month:"2-digit",year:"numeric"}),d=u.toLocaleTimeString("en-US",{hour:"2-digit",minute:"2-digit",second:"2-digit",hour12:!1});return{date:g,time:d}};return m.jsx(N,{sx:{position:"relative",minHeight:"100vh",overflow:"hidden",backgroundImage:`url(${ni})`,backgroundSize:"cover",backgroundPosition:"center","::before":{content:'""',position:"absolute",top:0,left:0,width:"100%",height:"100%",backgroundColor:"rgba(0, 0, 0, 0.5)",zIndex:0}},children:m.jsx(N,{sx:{position:"relative",zIndex:1,maxWidth:"1200px",margin:"0 auto",padding:"20px"},children:m.jsx(Se,{container:!0,marginTop:"40px",spacing:3,children:t.map(l=>m.jsx(Se,{item:!0,xs:12,sm:6,md:4,children:m.jsxs(fa,{sx:{height:"220px",display:"flex",marginBottom:"20px",marginRight:"8px",flexDirection:"column",justifyContent:"space-between",backgroundColor:"rgba(208, 207, 208, 0.8)",borderRadius:"10px",boxShadow:"0px 4px 10px rgba(0, 0, 0, 0.2)",transition:"transform 0.3s, box-shadow 0.3s","&:hover":{transform:"scale(1.05)",boxShadow:"0px 8px 15px rgba(0, 0, 0, 0.3)"}},children:[m.jsxs(xa,{children:[m.jsxs(N,{display:"flex",flexDirection:"row",justifyContent:"space-between",children:[m.jsxs(_,{variant:"caption",color:"primary",sx:{marginTop:"16px",display:"block"},contentEditable:i===l._id,suppressContentEditableWarning:!0,onBlur:u=>e(g=>g.map(d=>d._id===l._id?{...d,tag:u.target.textContent||""}:d)),children:["#",l.tag]}),m.jsx(_,{variant:"caption",color:"textSecondary",sx:{marginTop:"16px",display:"block"},children:`Date: ${f(l.date).date} Time: ${f(l.date).time} `})]}),m.jsx(_,{fontWeight:"bold",variant:"h5",marginY:2,className:"capitalize",gutterBottom:!0,contentEditable:i===l._id,suppressContentEditableWarning:!0,onBlur:u=>e(g=>g.map(d=>d._id===l._id?{...d,title:u.target.textContent||""}:d)),children:l.title}),m.jsx(_,{variant:"body2",color:"textSecondary",sx:{overflow:"hidden",textOverflow:"ellipsis",display:"-webkit-box",WebkitLineClamp:3,WebkitBoxOrient:"vertical"},contentEditable:i===l._id,suppressContentEditableWarning:!0,onBlur:u=>e(g=>g.map(d=>d._id===l._id?{...d,description:u.target.textContent||""}:d)),children:l.description})]}),m.jsxs(ga,{sx:{display:"flex",flexDirection:"row",justifyContent:"space-between"},children:[i!==l._id?m.jsx(J,{size:"small",color:"primary",startIcon:m.jsx(nt,{icon:Qo}),onClick:()=>s(l._id),children:"Edit"}):m.jsx(J,{size:"small",color:"primary",startIcon:m.jsx(nt,{icon:Zo}),onClick:()=>{a(l),s(null)},children:"Save"}),m.jsx(J,{size:"small",color:"error",startIcon:m.jsx(nt,{icon:Jo}),onClick:()=>r(l._id),children:"Delete"})]})]})},l._id))})})})}function di(){const t=P.useRef(null),e=()=>{var j;(j=t.current)==null||j.scrollIntoView({behavior:"smooth"})},[n,a]=P.useState([]),[r,o]=P.useState(null),[i,s]=P.useState({_id:"",title:"",description:"",tag:"",date:""}),[f,l]=P.useState({open:!1,message:"",severity:"success"}),u=()=>{l(j=>({...j,open:!1}))},g=en(),d=Bt.getItem("authToken"),{data:b,error:y,refetch:A}=Gn({}),{data:v=[],error:w,refetch:x}=Yn({});P.useEffect(()=>{b&&o(b),y&&g("/errorpage"),v&&r!==null&&a(v),w&&l({open:!0,message:"Error fetching notes",severity:"error"})},[v,w,g,A,r,y,b]);const[S]=Hn(),E=async()=>{if(!i.title||!i.description||!i.tag){l({open:!0,message:"Please fill in all fields",severity:"warning"});return}try{await S({...i,headers:{authorization:`Bearer ${d}`}}),s({_id:"",title:"",description:"",tag:"",date:""}),x(),l({open:!0,message:"Note added successfully!",severity:"success"})}catch(j){l({open:!0,message:"Error adding note",severity:"error"}),console.error("Error adding note:",j)}},[C]=Vn(),W=async j=>{try{await C({id:j._id,data:j,headers:{authorization:`Bearer ${d}`}}),l({open:!0,message:"Note updated successfully!",severity:"success"}),x()}catch(Ft){l({open:!0,message:"Error saving note",severity:"error"}),console.error("Error saving note:",Ft)}},[$]=Xn(),K=async j=>{try{await $({id:j,headers:{authorization:`Bearer ${d}`}}),x(),l({open:!0,message:"Note deleted successfully!",severity:"success"})}catch(Ft){l({open:!0,message:"Error deleting note",severity:"error"}),console.error("Error deleting note:",Ft)}},Mt=P.useCallback(()=>{x()},[x]),q=()=>{Bt.removeItem("authToken"),o(null),g("/")};return m.jsxs("div",{children:[m.jsx(ta,{buttonName:"Logout",handleLogout:q}),m.jsx(ei,{notes:n,userData:r,error:!!y,onMakeNotesClick:e,currentNote:i,setCurrentNote:s,handleAddNote:E}),n&&n.length>0&&m.jsx("div",{ref:t,children:m.jsx(ai,{notes:n,setNotes:a,fetchNotes:Mt,handleSaveEdit:W,handleDeleteNote:K})}),m.jsx(Zn,{open:f.open,autoHideDuration:3e3,onClose:u,anchorOrigin:{vertical:"top",horizontal:"right"},children:m.jsx(Jn,{onClose:u,severity:f.severity,children:f.message})})]})}export{di as default};
