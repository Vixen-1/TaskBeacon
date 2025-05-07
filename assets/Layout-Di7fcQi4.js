import{g as xa,r as P,c as ht,j as f,R as dn,u as pn,L as wa,a as Aa,y as F,d as Ht,b as Ea,e as Sa,f as ka,h as Pa,i as Ca}from"./index-BgKp6C3S.js";import{m as Vt,z as Oa,s as Ia,c as Z,f as Na}from"./motion-BC_G5kKT.js";import{g as me,a as he,u as ge,b as Ta,s as lt,c as it,d as be,m as Ma,e as ja,r as Tt,h as ye,S as Da,B as O}from"./Stack-fut3_dIQ.js";import{B as nt}from"./Button-DwPphzBu.js";import{T as j}from"./Typography-m7PsNj_-.js";import{u as mn,P as hn,F as Te,a as dt,M as La,B as Fa,T as gt}from"./TextField-CI9DGvo5.js";import{I as V,L as za}from"./Logout-CqbB0Mp7.js";var gn={exports:{}},_a="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",Ra=_a,Wa=Ra;function bn(){}function yn(){}yn.resetWarningCache=bn;var $a=function(){function t(a,r,i,s,o,c){if(c!==Wa){var l=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw l.name="Invariant Violation",l}}t.isRequired=t;function e(){return t}var n={array:t,bigint:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,elementType:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:yn,resetWarningCache:bn};return n.PropTypes=n,n};gn.exports=$a();var Ya=gn.exports;const A=xa(Ya);function Ba(t){return he("MuiDialog",t)}const Wt=me("MuiDialog",["root","scrollPaper","scrollBody","container","paper","paperScrollPaper","paperScrollBody","paperWidthFalse","paperWidthXs","paperWidthSm","paperWidthMd","paperWidthLg","paperWidthXl","paperFullWidth","paperFullScreen"]),Xa=P.createContext({}),Ua=lt(Fa,{name:"MuiDialog",slot:"Backdrop",overrides:(t,e)=>e.backdrop})({zIndex:-1}),Ga=t=>{const{classes:e,scroll:n,maxWidth:a,fullWidth:r,fullScreen:i}=t,s={root:["root"],container:["container",`scroll${it(n)}`],paper:["paper",`paperScroll${it(n)}`,`paperWidth${it(String(a))}`,r&&"paperFullWidth",i&&"paperFullScreen"]};return be(s,Ba,e)},Ha=lt(La,{name:"MuiDialog",slot:"Root",overridesResolver:(t,e)=>e.root})({"@media print":{position:"absolute !important"}}),Va=lt("div",{name:"MuiDialog",slot:"Container",overridesResolver:(t,e)=>{const{ownerState:n}=t;return[e.container,e[`scroll${it(n.scroll)}`]]}})({height:"100%","@media print":{height:"auto"},outline:0,variants:[{props:{scroll:"paper"},style:{display:"flex",justifyContent:"center",alignItems:"center"}},{props:{scroll:"body"},style:{overflowY:"auto",overflowX:"hidden",textAlign:"center","&::after":{content:'""',display:"inline-block",verticalAlign:"middle",height:"100%",width:"0"}}}]}),qa=lt(hn,{name:"MuiDialog",slot:"Paper",overridesResolver:(t,e)=>{const{ownerState:n}=t;return[e.paper,e[`scrollPaper${it(n.scroll)}`],e[`paperWidth${it(String(n.maxWidth))}`],n.fullWidth&&e.paperFullWidth,n.fullScreen&&e.paperFullScreen]}})(Ma(({theme:t})=>({margin:32,position:"relative",overflowY:"auto","@media print":{overflowY:"visible",boxShadow:"none"},variants:[{props:{scroll:"paper"},style:{display:"flex",flexDirection:"column",maxHeight:"calc(100% - 64px)"}},{props:{scroll:"body"},style:{display:"inline-block",verticalAlign:"middle",textAlign:"initial"}},{props:({ownerState:e})=>!e.maxWidth,style:{maxWidth:"calc(100% - 64px)"}},{props:{maxWidth:"xs"},style:{maxWidth:t.breakpoints.unit==="px"?Math.max(t.breakpoints.values.xs,444):`max(${t.breakpoints.values.xs}${t.breakpoints.unit}, 444px)`,[`&.${Wt.paperScrollBody}`]:{[t.breakpoints.down(Math.max(t.breakpoints.values.xs,444)+32*2)]:{maxWidth:"calc(100% - 64px)"}}}},...Object.keys(t.breakpoints.values).filter(e=>e!=="xs").map(e=>({props:{maxWidth:e},style:{maxWidth:`${t.breakpoints.values[e]}${t.breakpoints.unit}`,[`&.${Wt.paperScrollBody}`]:{[t.breakpoints.down(t.breakpoints.values[e]+32*2)]:{maxWidth:"calc(100% - 64px)"}}}})),{props:({ownerState:e})=>e.fullWidth,style:{width:"calc(100% - 64px)"}},{props:({ownerState:e})=>e.fullScreen,style:{margin:0,width:"100%",maxWidth:"100%",height:"100%",maxHeight:"none",borderRadius:0,[`&.${Wt.paperScrollBody}`]:{margin:0,maxWidth:"100%"}}}]}))),Ka=P.forwardRef(function(e,n){const a=ge({props:e,name:"MuiDialog"}),r=mn(),i={enter:r.transitions.duration.enteringScreen,exit:r.transitions.duration.leavingScreen},{"aria-describedby":s,"aria-labelledby":o,"aria-modal":c=!0,BackdropComponent:l,BackdropProps:d,children:p,className:h,disableEscapeKeyDown:w=!1,fullScreen:S=!1,fullWidth:y=!1,maxWidth:x="sm",onBackdropClick:v,onClick:m,onClose:g,open:E,PaperComponent:k=hn,PaperProps:T={},scroll:M="paper",slots:L={},slotProps:ft={},TransitionComponent:I=Te,transitionDuration:J=i,TransitionProps:aa,...ra}=a,tt={...a,disableEscapeKeyDown:w,fullScreen:S,fullWidth:y,maxWidth:x,scroll:M},zt=Ga(tt),_t=P.useRef(),ia=et=>{_t.current=et.target===et.currentTarget},sa=et=>{m&&m(et),_t.current&&(_t.current=null,v&&v(et),g&&g(et,"backdropClick"))},Rt=Ta(o),oa=P.useMemo(()=>({titleId:Rt}),[Rt]),la={transition:I,...L},ca={transition:aa,paper:T,backdrop:d,...ft},ut={slots:la,slotProps:ca},[fa,ua]=dt("root",{elementType:Ha,shouldForwardComponentProp:!0,externalForwardedProps:ut,ownerState:tt,className:ht(zt.root,h),ref:n}),[da,pa]=dt("backdrop",{elementType:Ua,shouldForwardComponentProp:!0,externalForwardedProps:ut,ownerState:tt}),[ma,ha]=dt("paper",{elementType:qa,shouldForwardComponentProp:!0,externalForwardedProps:ut,ownerState:tt,className:ht(zt.paper,T.className)}),[ga,ba]=dt("container",{elementType:Va,externalForwardedProps:ut,ownerState:tt,className:ht(zt.container)}),[ya,va]=dt("transition",{elementType:Te,externalForwardedProps:ut,ownerState:tt,additionalProps:{appear:!0,in:E,timeout:J,role:"presentation"}});return f.jsx(fa,{closeAfterTransition:!0,slots:{backdrop:da},slotProps:{backdrop:{transitionDuration:J,as:l,...pa}},disableEscapeKeyDown:w,onClose:g,open:E,onClick:sa,...ua,...ra,children:f.jsx(ya,{...va,children:f.jsx(ga,{onMouseDown:ia,...ba,children:f.jsx(ma,{as:k,elevation:24,role:"dialog","aria-describedby":s,"aria-labelledby":Rt,"aria-modal":c,...ha,children:f.jsx(Xa.Provider,{value:oa,children:p})})})})})});function Qa(t){return he("MuiDialogActions",t)}me("MuiDialogActions",["root","spacing"]);const Za=t=>{const{classes:e,disableSpacing:n}=t;return be({root:["root",!n&&"spacing"]},Qa,e)},Ja=lt("div",{name:"MuiDialogActions",slot:"Root",overridesResolver:(t,e)=>{const{ownerState:n}=t;return[e.root,!n.disableSpacing&&e.spacing]}})({display:"flex",alignItems:"center",padding:8,justifyContent:"flex-end",flex:"0 0 auto",variants:[{props:({ownerState:t})=>!t.disableSpacing,style:{"& > :not(style) ~ :not(style)":{marginLeft:8}}}]}),tr=P.forwardRef(function(e,n){const a=ge({props:e,name:"MuiDialogActions"}),{className:r,disableSpacing:i=!1,...s}=a,o={...a,disableSpacing:i},c=Za(o);return f.jsx(Ja,{className:ht(c.root,r),ownerState:o,ref:n,...s})}),Me=P.createContext();function er(t){return he("MuiGrid",t)}const nr=[0,1,2,3,4,5,6,7,8,9,10],ar=["column-reverse","column","row-reverse","row"],rr=["nowrap","wrap-reverse","wrap"],pt=["auto",!0,1,2,3,4,5,6,7,8,9,10,11,12],vt=me("MuiGrid",["root","container","item","zeroMinWidth",...nr.map(t=>`spacing-xs-${t}`),...ar.map(t=>`direction-xs-${t}`),...rr.map(t=>`wrap-xs-${t}`),...pt.map(t=>`grid-xs-${t}`),...pt.map(t=>`grid-sm-${t}`),...pt.map(t=>`grid-md-${t}`),...pt.map(t=>`grid-lg-${t}`),...pt.map(t=>`grid-xl-${t}`)]);function ir({theme:t,ownerState:e}){let n;return t.breakpoints.keys.reduce((a,r)=>{let i={};if(e[r]&&(n=e[r]),!n)return a;if(n===!0)i={flexBasis:0,flexGrow:1,maxWidth:"100%"};else if(n==="auto")i={flexBasis:"auto",flexGrow:0,flexShrink:0,maxWidth:"none",width:"auto"};else{const s=Tt({values:e.columns,breakpoints:t.breakpoints.values}),o=typeof s=="object"?s[r]:s;if(o==null)return a;const c=`${Math.round(n/o*1e8)/1e6}%`;let l={};if(e.container&&e.item&&e.columnSpacing!==0){const d=t.spacing(e.columnSpacing);if(d!=="0px"){const p=`calc(${c} + ${d})`;l={flexBasis:p,maxWidth:p}}}i={flexBasis:c,flexGrow:0,maxWidth:c,...l}}return t.breakpoints.values[r]===0?Object.assign(a,i):a[t.breakpoints.up(r)]=i,a},{})}function sr({theme:t,ownerState:e}){const n=Tt({values:e.direction,breakpoints:t.breakpoints.values});return ye({theme:t},n,a=>{const r={flexDirection:a};return a.startsWith("column")&&(r[`& > .${vt.item}`]={maxWidth:"none"}),r})}function vn({breakpoints:t,values:e}){let n="";Object.keys(e).forEach(r=>{n===""&&e[r]!==0&&(n=r)});const a=Object.keys(t).sort((r,i)=>t[r]-t[i]);return a.slice(0,a.indexOf(n))}function or({theme:t,ownerState:e}){const{container:n,rowSpacing:a}=e;let r={};if(n&&a!==0){const i=Tt({values:a,breakpoints:t.breakpoints.values});let s;typeof i=="object"&&(s=vn({breakpoints:t.breakpoints.values,values:i})),r=ye({theme:t},i,(o,c)=>{const l=t.spacing(o);return l!=="0px"?{marginTop:`calc(-1 * ${l})`,[`& > .${vt.item}`]:{paddingTop:l}}:s!=null&&s.includes(c)?{}:{marginTop:0,[`& > .${vt.item}`]:{paddingTop:0}}})}return r}function lr({theme:t,ownerState:e}){const{container:n,columnSpacing:a}=e;let r={};if(n&&a!==0){const i=Tt({values:a,breakpoints:t.breakpoints.values});let s;typeof i=="object"&&(s=vn({breakpoints:t.breakpoints.values,values:i})),r=ye({theme:t},i,(o,c)=>{const l=t.spacing(o);if(l!=="0px"){const d=`calc(-1 * ${l})`;return{width:`calc(100% + ${l})`,marginLeft:d,[`& > .${vt.item}`]:{paddingLeft:l}}}return s!=null&&s.includes(c)?{}:{width:"100%",marginLeft:0,[`& > .${vt.item}`]:{paddingLeft:0}}})}return r}function cr(t,e,n={}){if(!t||t<=0)return[];if(typeof t=="string"&&!Number.isNaN(Number(t))||typeof t=="number")return[n[`spacing-xs-${String(t)}`]];const a=[];return e.forEach(r=>{const i=t[r];Number(i)>0&&a.push(n[`spacing-${r}-${String(i)}`])}),a}const fr=lt("div",{name:"MuiGrid",slot:"Root",overridesResolver:(t,e)=>{const{ownerState:n}=t,{container:a,direction:r,item:i,spacing:s,wrap:o,zeroMinWidth:c,breakpoints:l}=n;let d=[];a&&(d=cr(s,l,e));const p=[];return l.forEach(h=>{const w=n[h];w&&p.push(e[`grid-${h}-${String(w)}`])}),[e.root,a&&e.container,i&&e.item,c&&e.zeroMinWidth,...d,r!=="row"&&e[`direction-xs-${String(r)}`],o!=="wrap"&&e[`wrap-xs-${String(o)}`],...p]}})(({ownerState:t})=>({boxSizing:"border-box",...t.container&&{display:"flex",flexWrap:"wrap",width:"100%"},...t.item&&{margin:0},...t.zeroMinWidth&&{minWidth:0},...t.wrap!=="wrap"&&{flexWrap:t.wrap}}),sr,or,lr,ir);function ur(t,e){if(!t||t<=0)return[];if(typeof t=="string"&&!Number.isNaN(Number(t))||typeof t=="number")return[`spacing-xs-${String(t)}`];const n=[];return e.forEach(a=>{const r=t[a];if(Number(r)>0){const i=`spacing-${a}-${String(r)}`;n.push(i)}}),n}const dr=t=>{const{classes:e,container:n,direction:a,item:r,spacing:i,wrap:s,zeroMinWidth:o,breakpoints:c}=t;let l=[];n&&(l=ur(i,c));const d=[];c.forEach(h=>{const w=t[h];w&&d.push(`grid-${h}-${String(w)}`)});const p={root:["root",n&&"container",r&&"item",o&&"zeroMinWidth",...l,a!=="row"&&`direction-xs-${String(a)}`,s!=="wrap"&&`wrap-xs-${String(s)}`,...d]};return be(p,er,e)},je=P.forwardRef(function(e,n){const a=ge({props:e,name:"MuiGrid"}),{breakpoints:r}=mn(),i=ja(a),{className:s,columns:o,columnSpacing:c,component:l="div",container:d=!1,direction:p="row",item:h=!1,rowSpacing:w,spacing:S=0,wrap:y="wrap",zeroMinWidth:x=!1,...v}=i,m=w||S,g=c||S,E=P.useContext(Me),k=d?o||12:E,T={},M={...v};r.keys.forEach(I=>{v[I]!=null&&(T[I]=v[I],delete M[I])});const L={...i,columns:k,container:d,direction:p,item:h,rowSpacing:m,columnSpacing:g,wrap:y,zeroMinWidth:x,spacing:S,...T,breakpoints:r.keys},ft=dr(L);return f.jsx(Me.Provider,{value:k,children:f.jsx(fr,{ownerState:L,className:ht(ft.root,s),as:l,ref:n,...M})})});/*!
 * Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */function pr(t,e,n){return(e=hr(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function De(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter(function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable})),n.push.apply(n,a)}return n}function u(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?De(Object(n),!0).forEach(function(a){pr(t,a,n[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):De(Object(n)).forEach(function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(n,a))})}return t}function mr(t,e){if(typeof t!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var a=n.call(t,e);if(typeof a!="object")return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function hr(t){var e=mr(t,"string");return typeof e=="symbol"?e:e+""}const Le=()=>{};let ve={},xn={},wn=null,An={mark:Le,measure:Le};try{typeof window<"u"&&(ve=window),typeof document<"u"&&(xn=document),typeof MutationObserver<"u"&&(wn=MutationObserver),typeof performance<"u"&&(An=performance)}catch{}const{userAgent:Fe=""}=ve.navigator||{},U=ve,C=xn,ze=wn,St=An;U.document;const B=!!C.documentElement&&!!C.head&&typeof C.addEventListener=="function"&&typeof C.createElement=="function",En=~Fe.indexOf("MSIE")||~Fe.indexOf("Trident/");var gr=/fa(s|r|l|t|d|dr|dl|dt|b|k|kd|ss|sr|sl|st|sds|sdr|sdl|sdt)?[\-\ ]/,br=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit)?.*/i,Sn={classic:{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fab:"brands","fa-brands":"brands"},duotone:{fa:"solid",fad:"solid","fa-solid":"solid","fa-duotone":"solid",fadr:"regular","fa-regular":"regular",fadl:"light","fa-light":"light",fadt:"thin","fa-thin":"thin"},sharp:{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"},"sharp-duotone":{fa:"solid",fasds:"solid","fa-solid":"solid",fasdr:"regular","fa-regular":"regular",fasdl:"light","fa-light":"light",fasdt:"thin","fa-thin":"thin"}},yr={GROUP:"duotone-group",PRIMARY:"primary",SECONDARY:"secondary"},kn=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone"],N="classic",Mt="duotone",vr="sharp",xr="sharp-duotone",Pn=[N,Mt,vr,xr],wr={classic:{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},duotone:{900:"fad",400:"fadr",300:"fadl",100:"fadt"},sharp:{900:"fass",400:"fasr",300:"fasl",100:"fast"},"sharp-duotone":{900:"fasds",400:"fasdr",300:"fasdl",100:"fasdt"}},Ar={"Font Awesome 6 Free":{900:"fas",400:"far"},"Font Awesome 6 Pro":{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},"Font Awesome 6 Brands":{400:"fab",normal:"fab"},"Font Awesome 6 Duotone":{900:"fad",400:"fadr",normal:"fadr",300:"fadl",100:"fadt"},"Font Awesome 6 Sharp":{900:"fass",400:"fasr",normal:"fasr",300:"fasl",100:"fast"},"Font Awesome 6 Sharp Duotone":{900:"fasds",400:"fasdr",normal:"fasdr",300:"fasdl",100:"fasdt"}},Er=new Map([["classic",{defaultShortPrefixId:"fas",defaultStyleId:"solid",styleIds:["solid","regular","light","thin","brands"],futureStyleIds:[],defaultFontWeight:900}],["sharp",{defaultShortPrefixId:"fass",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["duotone",{defaultShortPrefixId:"fad",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["sharp-duotone",{defaultShortPrefixId:"fasds",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}]]),Sr={classic:{solid:"fas",regular:"far",light:"fal",thin:"fat",brands:"fab"},duotone:{solid:"fad",regular:"fadr",light:"fadl",thin:"fadt"},sharp:{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"},"sharp-duotone":{solid:"fasds",regular:"fasdr",light:"fasdl",thin:"fasdt"}},kr=["fak","fa-kit","fakd","fa-kit-duotone"],_e={kit:{fak:"kit","fa-kit":"kit"},"kit-duotone":{fakd:"kit-duotone","fa-kit-duotone":"kit-duotone"}},Pr=["kit"],Cr={kit:{"fa-kit":"fak"}},Or=["fak","fakd"],Ir={kit:{fak:"fa-kit"}},Re={kit:{kit:"fak"},"kit-duotone":{"kit-duotone":"fakd"}},kt={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},Nr=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone"],Tr=["fak","fa-kit","fakd","fa-kit-duotone"],Mr={"Font Awesome Kit":{400:"fak",normal:"fak"},"Font Awesome Kit Duotone":{400:"fakd",normal:"fakd"}},jr={classic:{"fa-brands":"fab","fa-duotone":"fad","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},duotone:{"fa-regular":"fadr","fa-light":"fadl","fa-thin":"fadt"},sharp:{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"},"sharp-duotone":{"fa-solid":"fasds","fa-regular":"fasdr","fa-light":"fasdl","fa-thin":"fasdt"}},Dr={classic:["fas","far","fal","fat","fad"],duotone:["fadr","fadl","fadt"],sharp:["fass","fasr","fasl","fast"],"sharp-duotone":["fasds","fasdr","fasdl","fasdt"]},qt={classic:{fab:"fa-brands",fad:"fa-duotone",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},duotone:{fadr:"fa-regular",fadl:"fa-light",fadt:"fa-thin"},sharp:{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"},"sharp-duotone":{fasds:"fa-solid",fasdr:"fa-regular",fasdl:"fa-light",fasdt:"fa-thin"}},Lr=["fa-solid","fa-regular","fa-light","fa-thin","fa-duotone","fa-brands"],Kt=["fa","fas","far","fal","fat","fad","fadr","fadl","fadt","fab","fass","fasr","fasl","fast","fasds","fasdr","fasdl","fasdt",...Nr,...Lr],Fr=["solid","regular","light","thin","duotone","brands"],Cn=[1,2,3,4,5,6,7,8,9,10],zr=Cn.concat([11,12,13,14,15,16,17,18,19,20]),_r=[...Object.keys(Dr),...Fr,"2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",kt.GROUP,kt.SWAP_OPACITY,kt.PRIMARY,kt.SECONDARY].concat(Cn.map(t=>"".concat(t,"x"))).concat(zr.map(t=>"w-".concat(t))),Rr={"Font Awesome 5 Free":{900:"fas",400:"far"},"Font Awesome 5 Pro":{900:"fas",400:"far",normal:"far",300:"fal"},"Font Awesome 5 Brands":{400:"fab",normal:"fab"},"Font Awesome 5 Duotone":{900:"fad"}};const $="___FONT_AWESOME___",Qt=16,On="fa",In="svg-inline--fa",K="data-fa-i2svg",Zt="data-fa-pseudo-element",Wr="data-fa-pseudo-element-pending",xe="data-prefix",we="data-icon",We="fontawesome-i2svg",$r="async",Yr=["HTML","HEAD","STYLE","SCRIPT"],Nn=(()=>{try{return!0}catch{return!1}})();function At(t){return new Proxy(t,{get(e,n){return n in e?e[n]:e[N]}})}const Tn=u({},Sn);Tn[N]=u(u(u(u({},{"fa-duotone":"duotone"}),Sn[N]),_e.kit),_e["kit-duotone"]);const Br=At(Tn),Jt=u({},Sr);Jt[N]=u(u(u(u({},{duotone:"fad"}),Jt[N]),Re.kit),Re["kit-duotone"]);const $e=At(Jt),te=u({},qt);te[N]=u(u({},te[N]),Ir.kit);const Ae=At(te),ee=u({},jr);ee[N]=u(u({},ee[N]),Cr.kit);At(ee);const Xr=gr,Mn="fa-layers-text",Ur=br,Gr=u({},wr);At(Gr);const Hr=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],$t=yr,Vr=[...Pr,..._r],bt=U.FontAwesomeConfig||{};function qr(t){var e=C.querySelector("script["+t+"]");if(e)return e.getAttribute(t)}function Kr(t){return t===""?!0:t==="false"?!1:t==="true"?!0:t}C&&typeof C.querySelector=="function"&&[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]].forEach(e=>{let[n,a]=e;const r=Kr(qr(n));r!=null&&(bt[a]=r)});const jn={styleDefault:"solid",familyDefault:N,cssPrefix:On,replacementClass:In,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};bt.familyPrefix&&(bt.cssPrefix=bt.familyPrefix);const ot=u(u({},jn),bt);ot.autoReplaceSvg||(ot.observeMutations=!1);const b={};Object.keys(jn).forEach(t=>{Object.defineProperty(b,t,{enumerable:!0,set:function(e){ot[t]=e,yt.forEach(n=>n(b))},get:function(){return ot[t]}})});Object.defineProperty(b,"familyPrefix",{enumerable:!0,set:function(t){ot.cssPrefix=t,yt.forEach(e=>e(b))},get:function(){return ot.cssPrefix}});U.FontAwesomeConfig=b;const yt=[];function Qr(t){return yt.push(t),()=>{yt.splice(yt.indexOf(t),1)}}const X=Qt,_={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function Zr(t){if(!t||!B)return;const e=C.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=t;const n=C.head.childNodes;let a=null;for(let r=n.length-1;r>-1;r--){const i=n[r],s=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(s)>-1&&(a=i)}return C.head.insertBefore(e,a),t}const Jr="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function xt(){let t=12,e="";for(;t-- >0;)e+=Jr[Math.random()*62|0];return e}function ct(t){const e=[];for(let n=(t||[]).length>>>0;n--;)e[n]=t[n];return e}function Ee(t){return t.classList?ct(t.classList):(t.getAttribute("class")||"").split(" ").filter(e=>e)}function Dn(t){return"".concat(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function ti(t){return Object.keys(t||{}).reduce((e,n)=>e+"".concat(n,'="').concat(Dn(t[n]),'" '),"").trim()}function jt(t){return Object.keys(t||{}).reduce((e,n)=>e+"".concat(n,": ").concat(t[n].trim(),";"),"")}function Se(t){return t.size!==_.size||t.x!==_.x||t.y!==_.y||t.rotate!==_.rotate||t.flipX||t.flipY}function ei(t){let{transform:e,containerWidth:n,iconWidth:a}=t;const r={transform:"translate(".concat(n/2," 256)")},i="translate(".concat(e.x*32,", ").concat(e.y*32,") "),s="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),o="rotate(".concat(e.rotate," 0 0)"),c={transform:"".concat(i," ").concat(s," ").concat(o)},l={transform:"translate(".concat(a/2*-1," -256)")};return{outer:r,inner:c,path:l}}function ni(t){let{transform:e,width:n=Qt,height:a=Qt,startCentered:r=!1}=t,i="";return r&&En?i+="translate(".concat(e.x/X-n/2,"em, ").concat(e.y/X-a/2,"em) "):r?i+="translate(calc(-50% + ".concat(e.x/X,"em), calc(-50% + ").concat(e.y/X,"em)) "):i+="translate(".concat(e.x/X,"em, ").concat(e.y/X,"em) "),i+="scale(".concat(e.size/X*(e.flipX?-1:1),", ").concat(e.size/X*(e.flipY?-1:1),") "),i+="rotate(".concat(e.rotate,"deg) "),i}var ai=`:root, :host {
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
}`;function Ln(){const t=On,e=In,n=b.cssPrefix,a=b.replacementClass;let r=ai;if(n!==t||a!==e){const i=new RegExp("\\.".concat(t,"\\-"),"g"),s=new RegExp("\\--".concat(t,"\\-"),"g"),o=new RegExp("\\.".concat(e),"g");r=r.replace(i,".".concat(n,"-")).replace(s,"--".concat(n,"-")).replace(o,".".concat(a))}return r}let Ye=!1;function Yt(){b.autoAddCss&&!Ye&&(Zr(Ln()),Ye=!0)}var ri={mixout(){return{dom:{css:Ln,insertCss:Yt}}},hooks(){return{beforeDOMElementCreation(){Yt()},beforeI2svg(){Yt()}}}};const Y=U||{};Y[$]||(Y[$]={});Y[$].styles||(Y[$].styles={});Y[$].hooks||(Y[$].hooks={});Y[$].shims||(Y[$].shims=[]);var R=Y[$];const Fn=[],zn=function(){C.removeEventListener("DOMContentLoaded",zn),Ot=1,Fn.map(t=>t())};let Ot=!1;B&&(Ot=(C.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(C.readyState),Ot||C.addEventListener("DOMContentLoaded",zn));function ii(t){B&&(Ot?setTimeout(t,0):Fn.push(t))}function Et(t){const{tag:e,attributes:n={},children:a=[]}=t;return typeof t=="string"?Dn(t):"<".concat(e," ").concat(ti(n),">").concat(a.map(Et).join(""),"</").concat(e,">")}function Be(t,e,n){if(t&&t[e]&&t[e][n])return{prefix:e,iconName:n,icon:t[e][n]}}var Bt=function(e,n,a,r){var i=Object.keys(e),s=i.length,o=n,c,l,d;for(a===void 0?(c=1,d=e[i[0]]):(c=0,d=a);c<s;c++)l=i[c],d=o(d,e[l],l,e);return d};function si(t){const e=[];let n=0;const a=t.length;for(;n<a;){const r=t.charCodeAt(n++);if(r>=55296&&r<=56319&&n<a){const i=t.charCodeAt(n++);(i&64512)==56320?e.push(((r&1023)<<10)+(i&1023)+65536):(e.push(r),n--)}else e.push(r)}return e}function ne(t){const e=si(t);return e.length===1?e[0].toString(16):null}function oi(t,e){const n=t.length;let a=t.charCodeAt(e),r;return a>=55296&&a<=56319&&n>e+1&&(r=t.charCodeAt(e+1),r>=56320&&r<=57343)?(a-55296)*1024+r-56320+65536:a}function Xe(t){return Object.keys(t).reduce((e,n)=>{const a=t[n];return!!a.icon?e[a.iconName]=a.icon:e[n]=a,e},{})}function ae(t,e){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};const{skipHooks:a=!1}=n,r=Xe(e);typeof R.hooks.addPack=="function"&&!a?R.hooks.addPack(t,Xe(e)):R.styles[t]=u(u({},R.styles[t]||{}),r),t==="fas"&&ae("fa",e)}const{styles:wt,shims:li}=R,_n=Object.keys(Ae),ci=_n.reduce((t,e)=>(t[e]=Object.keys(Ae[e]),t),{});let ke=null,Rn={},Wn={},$n={},Yn={},Bn={};function fi(t){return~Vr.indexOf(t)}function ui(t,e){const n=e.split("-"),a=n[0],r=n.slice(1).join("-");return a===t&&r!==""&&!fi(r)?r:null}const Xn=()=>{const t=a=>Bt(wt,(r,i,s)=>(r[s]=Bt(i,a,{}),r),{});Rn=t((a,r,i)=>(r[3]&&(a[r[3]]=i),r[2]&&r[2].filter(o=>typeof o=="number").forEach(o=>{a[o.toString(16)]=i}),a)),Wn=t((a,r,i)=>(a[i]=i,r[2]&&r[2].filter(o=>typeof o=="string").forEach(o=>{a[o]=i}),a)),Bn=t((a,r,i)=>{const s=r[2];return a[i]=i,s.forEach(o=>{a[o]=i}),a});const e="far"in wt||b.autoFetchSvg,n=Bt(li,(a,r)=>{const i=r[0];let s=r[1];const o=r[2];return s==="far"&&!e&&(s="fas"),typeof i=="string"&&(a.names[i]={prefix:s,iconName:o}),typeof i=="number"&&(a.unicodes[i.toString(16)]={prefix:s,iconName:o}),a},{names:{},unicodes:{}});$n=n.names,Yn=n.unicodes,ke=Dt(b.styleDefault,{family:b.familyDefault})};Qr(t=>{ke=Dt(t.styleDefault,{family:b.familyDefault})});Xn();function Pe(t,e){return(Rn[t]||{})[e]}function di(t,e){return(Wn[t]||{})[e]}function q(t,e){return(Bn[t]||{})[e]}function Un(t){return $n[t]||{prefix:null,iconName:null}}function pi(t){const e=Yn[t],n=Pe("fas",t);return e||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function G(){return ke}const Gn=()=>({prefix:null,iconName:null,rest:[]});function mi(t){let e=N;const n=_n.reduce((a,r)=>(a[r]="".concat(b.cssPrefix,"-").concat(r),a),{});return Pn.forEach(a=>{(t.includes(n[a])||t.some(r=>ci[a].includes(r)))&&(e=a)}),e}function Dt(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{family:n=N}=e,a=Br[n][t];if(n===Mt&&!t)return"fad";const r=$e[n][t]||$e[n][a],i=t in R.styles?t:null;return r||i||null}function hi(t){let e=[],n=null;return t.forEach(a=>{const r=ui(b.cssPrefix,a);r?n=r:a&&e.push(a)}),{iconName:n,rest:e}}function Ue(t){return t.sort().filter((e,n,a)=>a.indexOf(e)===n)}function Lt(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{skipLookups:n=!1}=e;let a=null;const r=Kt.concat(Tr),i=Ue(t.filter(p=>r.includes(p))),s=Ue(t.filter(p=>!Kt.includes(p))),o=i.filter(p=>(a=p,!kn.includes(p))),[c=null]=o,l=mi(i),d=u(u({},hi(s)),{},{prefix:Dt(c,{family:l})});return u(u(u({},d),vi({values:t,family:l,styles:wt,config:b,canonical:d,givenPrefix:a})),gi(n,a,d))}function gi(t,e,n){let{prefix:a,iconName:r}=n;if(t||!a||!r)return{prefix:a,iconName:r};const i=e==="fa"?Un(r):{},s=q(a,r);return r=i.iconName||s||r,a=i.prefix||a,a==="far"&&!wt.far&&wt.fas&&!b.autoFetchSvg&&(a="fas"),{prefix:a,iconName:r}}const bi=Pn.filter(t=>t!==N||t!==Mt),yi=Object.keys(qt).filter(t=>t!==N).map(t=>Object.keys(qt[t])).flat();function vi(t){const{values:e,family:n,canonical:a,givenPrefix:r="",styles:i={},config:s={}}=t,o=n===Mt,c=e.includes("fa-duotone")||e.includes("fad"),l=s.familyDefault==="duotone",d=a.prefix==="fad"||a.prefix==="fa-duotone";if(!o&&(c||l||d)&&(a.prefix="fad"),(e.includes("fa-brands")||e.includes("fab"))&&(a.prefix="fab"),!a.prefix&&bi.includes(n)&&(Object.keys(i).find(h=>yi.includes(h))||s.autoFetchSvg)){const h=Er.get(n).defaultShortPrefixId;a.prefix=h,a.iconName=q(a.prefix,a.iconName)||a.iconName}return(a.prefix==="fa"||r==="fa")&&(a.prefix=G()||"fas"),a}class xi{constructor(){this.definitions={}}add(){for(var e=arguments.length,n=new Array(e),a=0;a<e;a++)n[a]=arguments[a];const r=n.reduce(this._pullDefinitions,{});Object.keys(r).forEach(i=>{this.definitions[i]=u(u({},this.definitions[i]||{}),r[i]),ae(i,r[i]);const s=Ae[N][i];s&&ae(s,r[i]),Xn()})}reset(){this.definitions={}}_pullDefinitions(e,n){const a=n.prefix&&n.iconName&&n.icon?{0:n}:n;return Object.keys(a).map(r=>{const{prefix:i,iconName:s,icon:o}=a[r],c=o[2];e[i]||(e[i]={}),c.length>0&&c.forEach(l=>{typeof l=="string"&&(e[i][l]=o)}),e[i][s]=o}),e}}let Ge=[],at={};const st={},wi=Object.keys(st);function Ai(t,e){let{mixoutsTo:n}=e;return Ge=t,at={},Object.keys(st).forEach(a=>{wi.indexOf(a)===-1&&delete st[a]}),Ge.forEach(a=>{const r=a.mixout?a.mixout():{};if(Object.keys(r).forEach(i=>{typeof r[i]=="function"&&(n[i]=r[i]),typeof r[i]=="object"&&Object.keys(r[i]).forEach(s=>{n[i]||(n[i]={}),n[i][s]=r[i][s]})}),a.hooks){const i=a.hooks();Object.keys(i).forEach(s=>{at[s]||(at[s]=[]),at[s].push(i[s])})}a.provides&&a.provides(st)}),n}function re(t,e){for(var n=arguments.length,a=new Array(n>2?n-2:0),r=2;r<n;r++)a[r-2]=arguments[r];return(at[t]||[]).forEach(s=>{e=s.apply(null,[e,...a])}),e}function Q(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),a=1;a<e;a++)n[a-1]=arguments[a];(at[t]||[]).forEach(i=>{i.apply(null,n)})}function H(){const t=arguments[0],e=Array.prototype.slice.call(arguments,1);return st[t]?st[t].apply(null,e):void 0}function ie(t){t.prefix==="fa"&&(t.prefix="fas");let{iconName:e}=t;const n=t.prefix||G();if(e)return e=q(n,e)||e,Be(Hn.definitions,n,e)||Be(R.styles,n,e)}const Hn=new xi,Ei=()=>{b.autoReplaceSvg=!1,b.observeMutations=!1,Q("noAuto")},Si={i2svg:function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return B?(Q("beforeI2svg",t),H("pseudoElements2svg",t),H("i2svg",t)):Promise.reject(new Error("Operation requires a DOM of some kind."))},watch:function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:e}=t;b.autoReplaceSvg===!1&&(b.autoReplaceSvg=!0),b.observeMutations=!0,ii(()=>{Pi({autoReplaceSvgRoot:e}),Q("watch",t)})}},ki={icon:t=>{if(t===null)return null;if(typeof t=="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:q(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){const e=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],n=Dt(t[0]);return{prefix:n,iconName:q(n,e)||e}}if(typeof t=="string"&&(t.indexOf("".concat(b.cssPrefix,"-"))>-1||t.match(Xr))){const e=Lt(t.split(" "),{skipLookups:!0});return{prefix:e.prefix||G(),iconName:q(e.prefix,e.iconName)||e.iconName}}if(typeof t=="string"){const e=G();return{prefix:e,iconName:q(e,t)||t}}}},D={noAuto:Ei,config:b,dom:Si,parse:ki,library:Hn,findIconDefinition:ie,toHtml:Et},Pi=function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:e=C}=t;(Object.keys(R.styles).length>0||b.autoFetchSvg)&&B&&b.autoReplaceSvg&&D.dom.i2svg({node:e})};function Ft(t,e){return Object.defineProperty(t,"abstract",{get:e}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map(n=>Et(n))}}),Object.defineProperty(t,"node",{get:function(){if(!B)return;const n=C.createElement("div");return n.innerHTML=t.html,n.children}}),t}function Ci(t){let{children:e,main:n,mask:a,attributes:r,styles:i,transform:s}=t;if(Se(s)&&n.found&&!a.found){const{width:o,height:c}=n,l={x:o/c/2,y:.5};r.style=jt(u(u({},i),{},{"transform-origin":"".concat(l.x+s.x/16,"em ").concat(l.y+s.y/16,"em")}))}return[{tag:"svg",attributes:r,children:e}]}function Oi(t){let{prefix:e,iconName:n,children:a,attributes:r,symbol:i}=t;const s=i===!0?"".concat(e,"-").concat(b.cssPrefix,"-").concat(n):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:u(u({},r),{},{id:s}),children:a}]}]}function Ce(t){const{icons:{main:e,mask:n},prefix:a,iconName:r,transform:i,symbol:s,title:o,maskId:c,titleId:l,extra:d,watchable:p=!1}=t,{width:h,height:w}=n.found?n:e,S=Or.includes(a),y=[b.replacementClass,r?"".concat(b.cssPrefix,"-").concat(r):""].filter(k=>d.classes.indexOf(k)===-1).filter(k=>k!==""||!!k).concat(d.classes).join(" ");let x={children:[],attributes:u(u({},d.attributes),{},{"data-prefix":a,"data-icon":r,class:y,role:d.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(h," ").concat(w)})};const v=S&&!~d.classes.indexOf("fa-fw")?{width:"".concat(h/w*16*.0625,"em")}:{};p&&(x.attributes[K]=""),o&&(x.children.push({tag:"title",attributes:{id:x.attributes["aria-labelledby"]||"title-".concat(l||xt())},children:[o]}),delete x.attributes.title);const m=u(u({},x),{},{prefix:a,iconName:r,main:e,mask:n,maskId:c,transform:i,symbol:s,styles:u(u({},v),d.styles)}),{children:g,attributes:E}=n.found&&e.found?H("generateAbstractMask",m)||{children:[],attributes:{}}:H("generateAbstractIcon",m)||{children:[],attributes:{}};return m.children=g,m.attributes=E,s?Oi(m):Ci(m)}function He(t){const{content:e,width:n,height:a,transform:r,title:i,extra:s,watchable:o=!1}=t,c=u(u(u({},s.attributes),i?{title:i}:{}),{},{class:s.classes.join(" ")});o&&(c[K]="");const l=u({},s.styles);Se(r)&&(l.transform=ni({transform:r,startCentered:!0,width:n,height:a}),l["-webkit-transform"]=l.transform);const d=jt(l);d.length>0&&(c.style=d);const p=[];return p.push({tag:"span",attributes:c,children:[e]}),i&&p.push({tag:"span",attributes:{class:"sr-only"},children:[i]}),p}function Ii(t){const{content:e,title:n,extra:a}=t,r=u(u(u({},a.attributes),n?{title:n}:{}),{},{class:a.classes.join(" ")}),i=jt(a.styles);i.length>0&&(r.style=i);const s=[];return s.push({tag:"span",attributes:r,children:[e]}),n&&s.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),s}const{styles:Xt}=R;function se(t){const e=t[0],n=t[1],[a]=t.slice(4);let r=null;return Array.isArray(a)?r={tag:"g",attributes:{class:"".concat(b.cssPrefix,"-").concat($t.GROUP)},children:[{tag:"path",attributes:{class:"".concat(b.cssPrefix,"-").concat($t.SECONDARY),fill:"currentColor",d:a[0]}},{tag:"path",attributes:{class:"".concat(b.cssPrefix,"-").concat($t.PRIMARY),fill:"currentColor",d:a[1]}}]}:r={tag:"path",attributes:{fill:"currentColor",d:a}},{found:!0,width:e,height:n,icon:r}}const Ni={found:!1,width:512,height:512};function Ti(t,e){!Nn&&!b.showMissingIcons&&t&&console.error('Icon with name "'.concat(t,'" and prefix "').concat(e,'" is missing.'))}function oe(t,e){let n=e;return e==="fa"&&b.styleDefault!==null&&(e=G()),new Promise((a,r)=>{if(n==="fa"){const i=Un(t)||{};t=i.iconName||t,e=i.prefix||e}if(t&&e&&Xt[e]&&Xt[e][t]){const i=Xt[e][t];return a(se(i))}Ti(t,e),a(u(u({},Ni),{},{icon:b.showMissingIcons&&t?H("missingIconAbstract")||{}:{}}))})}const Ve=()=>{},le=b.measurePerformance&&St&&St.mark&&St.measure?St:{mark:Ve,measure:Ve},mt='FA "6.7.2"',Mi=t=>(le.mark("".concat(mt," ").concat(t," begins")),()=>Vn(t)),Vn=t=>{le.mark("".concat(mt," ").concat(t," ends")),le.measure("".concat(mt," ").concat(t),"".concat(mt," ").concat(t," begins"),"".concat(mt," ").concat(t," ends"))};var Oe={begin:Mi,end:Vn};const Pt=()=>{};function qe(t){return typeof(t.getAttribute?t.getAttribute(K):null)=="string"}function ji(t){const e=t.getAttribute?t.getAttribute(xe):null,n=t.getAttribute?t.getAttribute(we):null;return e&&n}function Di(t){return t&&t.classList&&t.classList.contains&&t.classList.contains(b.replacementClass)}function Li(){return b.autoReplaceSvg===!0?Ct.replace:Ct[b.autoReplaceSvg]||Ct.replace}function Fi(t){return C.createElementNS("http://www.w3.org/2000/svg",t)}function zi(t){return C.createElement(t)}function qn(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{ceFn:n=t.tag==="svg"?Fi:zi}=e;if(typeof t=="string")return C.createTextNode(t);const a=n(t.tag);return Object.keys(t.attributes||[]).forEach(function(i){a.setAttribute(i,t.attributes[i])}),(t.children||[]).forEach(function(i){a.appendChild(qn(i,{ceFn:n}))}),a}function _i(t){let e=" ".concat(t.outerHTML," ");return e="".concat(e,"Font Awesome fontawesome.com "),e}const Ct={replace:function(t){const e=t[0];if(e.parentNode)if(t[1].forEach(n=>{e.parentNode.insertBefore(qn(n),e)}),e.getAttribute(K)===null&&b.keepOriginalSource){let n=C.createComment(_i(e));e.parentNode.replaceChild(n,e)}else e.remove()},nest:function(t){const e=t[0],n=t[1];if(~Ee(e).indexOf(b.replacementClass))return Ct.replace(t);const a=new RegExp("".concat(b.cssPrefix,"-.*"));if(delete n[0].attributes.id,n[0].attributes.class){const i=n[0].attributes.class.split(" ").reduce((s,o)=>(o===b.replacementClass||o.match(a)?s.toSvg.push(o):s.toNode.push(o),s),{toNode:[],toSvg:[]});n[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?e.removeAttribute("class"):e.setAttribute("class",i.toNode.join(" "))}const r=n.map(i=>Et(i)).join(`
`);e.setAttribute(K,""),e.innerHTML=r}};function Ke(t){t()}function Kn(t,e){const n=typeof e=="function"?e:Pt;if(t.length===0)n();else{let a=Ke;b.mutateApproach===$r&&(a=U.requestAnimationFrame||Ke),a(()=>{const r=Li(),i=Oe.begin("mutate");t.map(r),i(),n()})}}let Ie=!1;function Qn(){Ie=!0}function ce(){Ie=!1}let It=null;function Qe(t){if(!ze||!b.observeMutations)return;const{treeCallback:e=Pt,nodeCallback:n=Pt,pseudoElementsCallback:a=Pt,observeMutationsRoot:r=C}=t;It=new ze(i=>{if(Ie)return;const s=G();ct(i).forEach(o=>{if(o.type==="childList"&&o.addedNodes.length>0&&!qe(o.addedNodes[0])&&(b.searchPseudoElements&&a(o.target),e(o.target)),o.type==="attributes"&&o.target.parentNode&&b.searchPseudoElements&&a(o.target.parentNode),o.type==="attributes"&&qe(o.target)&&~Hr.indexOf(o.attributeName))if(o.attributeName==="class"&&ji(o.target)){const{prefix:c,iconName:l}=Lt(Ee(o.target));o.target.setAttribute(xe,c||s),l&&o.target.setAttribute(we,l)}else Di(o.target)&&n(o.target)})}),B&&It.observe(r,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}function Ri(){It&&It.disconnect()}function Wi(t){const e=t.getAttribute("style");let n=[];return e&&(n=e.split(";").reduce((a,r)=>{const i=r.split(":"),s=i[0],o=i.slice(1);return s&&o.length>0&&(a[s]=o.join(":").trim()),a},{})),n}function $i(t){const e=t.getAttribute("data-prefix"),n=t.getAttribute("data-icon"),a=t.innerText!==void 0?t.innerText.trim():"";let r=Lt(Ee(t));return r.prefix||(r.prefix=G()),e&&n&&(r.prefix=e,r.iconName=n),r.iconName&&r.prefix||(r.prefix&&a.length>0&&(r.iconName=di(r.prefix,t.innerText)||Pe(r.prefix,ne(t.innerText))),!r.iconName&&b.autoFetchSvg&&t.firstChild&&t.firstChild.nodeType===Node.TEXT_NODE&&(r.iconName=t.firstChild.data)),r}function Yi(t){const e=ct(t.attributes).reduce((r,i)=>(r.name!=="class"&&r.name!=="style"&&(r[i.name]=i.value),r),{}),n=t.getAttribute("title"),a=t.getAttribute("data-fa-title-id");return b.autoA11y&&(n?e["aria-labelledby"]="".concat(b.replacementClass,"-title-").concat(a||xt()):(e["aria-hidden"]="true",e.focusable="false")),e}function Bi(){return{iconName:null,title:null,titleId:null,prefix:null,transform:_,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function Ze(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0};const{iconName:n,prefix:a,rest:r}=$i(t),i=Yi(t),s=re("parseNodeAttributes",{},t);let o=e.styleParser?Wi(t):[];return u({iconName:n,title:t.getAttribute("title"),titleId:t.getAttribute("data-fa-title-id"),prefix:a,transform:_,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:r,styles:o,attributes:i}},s)}const{styles:Xi}=R;function Zn(t){const e=b.autoReplaceSvg==="nest"?Ze(t,{styleParser:!1}):Ze(t);return~e.extra.classes.indexOf(Mn)?H("generateLayersText",t,e):H("generateSvgReplacementMutation",t,e)}function Ui(){return[...kr,...Kt]}function Je(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!B)return Promise.resolve();const n=C.documentElement.classList,a=d=>n.add("".concat(We,"-").concat(d)),r=d=>n.remove("".concat(We,"-").concat(d)),i=b.autoFetchSvg?Ui():kn.concat(Object.keys(Xi));i.includes("fa")||i.push("fa");const s=[".".concat(Mn,":not([").concat(K,"])")].concat(i.map(d=>".".concat(d,":not([").concat(K,"])"))).join(", ");if(s.length===0)return Promise.resolve();let o=[];try{o=ct(t.querySelectorAll(s))}catch{}if(o.length>0)a("pending"),r("complete");else return Promise.resolve();const c=Oe.begin("onTree"),l=o.reduce((d,p)=>{try{const h=Zn(p);h&&d.push(h)}catch(h){Nn||h.name==="MissingIcon"&&console.error(h)}return d},[]);return new Promise((d,p)=>{Promise.all(l).then(h=>{Kn(h,()=>{a("active"),a("complete"),r("pending"),typeof e=="function"&&e(),c(),d()})}).catch(h=>{c(),p(h)})})}function Gi(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;Zn(t).then(n=>{n&&Kn([n],e)})}function Hi(t){return function(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const a=(e||{}).icon?e:ie(e||{});let{mask:r}=n;return r&&(r=(r||{}).icon?r:ie(r||{})),t(a,u(u({},n),{},{mask:r}))}}const Vi=function(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:n=_,symbol:a=!1,mask:r=null,maskId:i=null,title:s=null,titleId:o=null,classes:c=[],attributes:l={},styles:d={}}=e;if(!t)return;const{prefix:p,iconName:h,icon:w}=t;return Ft(u({type:"icon"},t),()=>(Q("beforeDOMElementCreation",{iconDefinition:t,params:e}),b.autoA11y&&(s?l["aria-labelledby"]="".concat(b.replacementClass,"-title-").concat(o||xt()):(l["aria-hidden"]="true",l.focusable="false")),Ce({icons:{main:se(w),mask:r?se(r.icon):{found:!1,width:null,height:null,icon:{}}},prefix:p,iconName:h,transform:u(u({},_),n),symbol:a,title:s,maskId:i,titleId:o,extra:{attributes:l,styles:d,classes:c}})))};var qi={mixout(){return{icon:Hi(Vi)}},hooks(){return{mutationObserverCallbacks(t){return t.treeCallback=Je,t.nodeCallback=Gi,t}}},provides(t){t.i2svg=function(e){const{node:n=C,callback:a=()=>{}}=e;return Je(n,a)},t.generateSvgReplacementMutation=function(e,n){const{iconName:a,title:r,titleId:i,prefix:s,transform:o,symbol:c,mask:l,maskId:d,extra:p}=n;return new Promise((h,w)=>{Promise.all([oe(a,s),l.iconName?oe(l.iconName,l.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(S=>{let[y,x]=S;h([e,Ce({icons:{main:y,mask:x},prefix:s,iconName:a,transform:o,symbol:c,maskId:d,title:r,titleId:i,extra:p,watchable:!0})])}).catch(w)})},t.generateAbstractIcon=function(e){let{children:n,attributes:a,main:r,transform:i,styles:s}=e;const o=jt(s);o.length>0&&(a.style=o);let c;return Se(i)&&(c=H("generateAbstractTransformGrouping",{main:r,transform:i,containerWidth:r.width,iconWidth:r.width})),n.push(c||r.icon),{children:n,attributes:a}}}},Ki={mixout(){return{layer(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{classes:n=[]}=e;return Ft({type:"layer"},()=>{Q("beforeDOMElementCreation",{assembler:t,params:e});let a=[];return t(r=>{Array.isArray(r)?r.map(i=>{a=a.concat(i.abstract)}):a=a.concat(r.abstract)}),[{tag:"span",attributes:{class:["".concat(b.cssPrefix,"-layers"),...n].join(" ")},children:a}]})}}}},Qi={mixout(){return{counter(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{title:n=null,classes:a=[],attributes:r={},styles:i={}}=e;return Ft({type:"counter",content:t},()=>(Q("beforeDOMElementCreation",{content:t,params:e}),Ii({content:t.toString(),title:n,extra:{attributes:r,styles:i,classes:["".concat(b.cssPrefix,"-layers-counter"),...a]}})))}}}},Zi={mixout(){return{text(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:n=_,title:a=null,classes:r=[],attributes:i={},styles:s={}}=e;return Ft({type:"text",content:t},()=>(Q("beforeDOMElementCreation",{content:t,params:e}),He({content:t,transform:u(u({},_),n),title:a,extra:{attributes:i,styles:s,classes:["".concat(b.cssPrefix,"-layers-text"),...r]}})))}}},provides(t){t.generateLayersText=function(e,n){const{title:a,transform:r,extra:i}=n;let s=null,o=null;if(En){const c=parseInt(getComputedStyle(e).fontSize,10),l=e.getBoundingClientRect();s=l.width/c,o=l.height/c}return b.autoA11y&&!a&&(i.attributes["aria-hidden"]="true"),Promise.resolve([e,He({content:e.innerHTML,width:s,height:o,transform:r,title:a,extra:i,watchable:!0})])}}};const Ji=new RegExp('"',"ug"),tn=[1105920,1112319],en=u(u(u(u({},{FontAwesome:{normal:"fas",400:"fas"}}),Ar),Rr),Mr),fe=Object.keys(en).reduce((t,e)=>(t[e.toLowerCase()]=en[e],t),{}),ts=Object.keys(fe).reduce((t,e)=>{const n=fe[e];return t[e]=n[900]||[...Object.entries(n)][0][1],t},{});function es(t){const e=t.replace(Ji,""),n=oi(e,0),a=n>=tn[0]&&n<=tn[1],r=e.length===2?e[0]===e[1]:!1;return{value:ne(r?e[0]:e),isSecondary:a||r}}function ns(t,e){const n=t.replace(/^['"]|['"]$/g,"").toLowerCase(),a=parseInt(e),r=isNaN(a)?"normal":a;return(fe[n]||{})[r]||ts[n]}function nn(t,e){const n="".concat(Wr).concat(e.replace(":","-"));return new Promise((a,r)=>{if(t.getAttribute(n)!==null)return a();const s=ct(t.children).filter(h=>h.getAttribute(Zt)===e)[0],o=U.getComputedStyle(t,e),c=o.getPropertyValue("font-family"),l=c.match(Ur),d=o.getPropertyValue("font-weight"),p=o.getPropertyValue("content");if(s&&!l)return t.removeChild(s),a();if(l&&p!=="none"&&p!==""){const h=o.getPropertyValue("content");let w=ns(c,d);const{value:S,isSecondary:y}=es(h),x=l[0].startsWith("FontAwesome");let v=Pe(w,S),m=v;if(x){const g=pi(S);g.iconName&&g.prefix&&(v=g.iconName,w=g.prefix)}if(v&&!y&&(!s||s.getAttribute(xe)!==w||s.getAttribute(we)!==m)){t.setAttribute(n,m),s&&t.removeChild(s);const g=Bi(),{extra:E}=g;E.attributes[Zt]=e,oe(v,w).then(k=>{const T=Ce(u(u({},g),{},{icons:{main:k,mask:Gn()},prefix:w,iconName:m,extra:E,watchable:!0})),M=C.createElementNS("http://www.w3.org/2000/svg","svg");e==="::before"?t.insertBefore(M,t.firstChild):t.appendChild(M),M.outerHTML=T.map(L=>Et(L)).join(`
`),t.removeAttribute(n),a()}).catch(r)}else a()}else a()})}function as(t){return Promise.all([nn(t,"::before"),nn(t,"::after")])}function rs(t){return t.parentNode!==document.head&&!~Yr.indexOf(t.tagName.toUpperCase())&&!t.getAttribute(Zt)&&(!t.parentNode||t.parentNode.tagName!=="svg")}function an(t){if(B)return new Promise((e,n)=>{const a=ct(t.querySelectorAll("*")).filter(rs).map(as),r=Oe.begin("searchPseudoElements");Qn(),Promise.all(a).then(()=>{r(),ce(),e()}).catch(()=>{r(),ce(),n()})})}var is={hooks(){return{mutationObserverCallbacks(t){return t.pseudoElementsCallback=an,t}}},provides(t){t.pseudoElements2svg=function(e){const{node:n=C}=e;b.searchPseudoElements&&an(n)}}};let rn=!1;var ss={mixout(){return{dom:{unwatch(){Qn(),rn=!0}}}},hooks(){return{bootstrap(){Qe(re("mutationObserverCallbacks",{}))},noAuto(){Ri()},watch(t){const{observeMutationsRoot:e}=t;rn?ce():Qe(re("mutationObserverCallbacks",{observeMutationsRoot:e}))}}}};const sn=t=>{let e={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce((n,a)=>{const r=a.toLowerCase().split("-"),i=r[0];let s=r.slice(1).join("-");if(i&&s==="h")return n.flipX=!0,n;if(i&&s==="v")return n.flipY=!0,n;if(s=parseFloat(s),isNaN(s))return n;switch(i){case"grow":n.size=n.size+s;break;case"shrink":n.size=n.size-s;break;case"left":n.x=n.x-s;break;case"right":n.x=n.x+s;break;case"up":n.y=n.y-s;break;case"down":n.y=n.y+s;break;case"rotate":n.rotate=n.rotate+s;break}return n},e)};var os={mixout(){return{parse:{transform:t=>sn(t)}}},hooks(){return{parseNodeAttributes(t,e){const n=e.getAttribute("data-fa-transform");return n&&(t.transform=sn(n)),t}}},provides(t){t.generateAbstractTransformGrouping=function(e){let{main:n,transform:a,containerWidth:r,iconWidth:i}=e;const s={transform:"translate(".concat(r/2," 256)")},o="translate(".concat(a.x*32,", ").concat(a.y*32,") "),c="scale(".concat(a.size/16*(a.flipX?-1:1),", ").concat(a.size/16*(a.flipY?-1:1),") "),l="rotate(".concat(a.rotate," 0 0)"),d={transform:"".concat(o," ").concat(c," ").concat(l)},p={transform:"translate(".concat(i/2*-1," -256)")},h={outer:s,inner:d,path:p};return{tag:"g",attributes:u({},h.outer),children:[{tag:"g",attributes:u({},h.inner),children:[{tag:n.icon.tag,children:n.icon.children,attributes:u(u({},n.icon.attributes),h.path)}]}]}}}};const Ut={x:0,y:0,width:"100%",height:"100%"};function on(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return t.attributes&&(t.attributes.fill||e)&&(t.attributes.fill="black"),t}function ls(t){return t.tag==="g"?t.children:[t]}var cs={hooks(){return{parseNodeAttributes(t,e){const n=e.getAttribute("data-fa-mask"),a=n?Lt(n.split(" ").map(r=>r.trim())):Gn();return a.prefix||(a.prefix=G()),t.mask=a,t.maskId=e.getAttribute("data-fa-mask-id"),t}}},provides(t){t.generateAbstractMask=function(e){let{children:n,attributes:a,main:r,mask:i,maskId:s,transform:o}=e;const{width:c,icon:l}=r,{width:d,icon:p}=i,h=ei({transform:o,containerWidth:d,iconWidth:c}),w={tag:"rect",attributes:u(u({},Ut),{},{fill:"white"})},S=l.children?{children:l.children.map(on)}:{},y={tag:"g",attributes:u({},h.inner),children:[on(u({tag:l.tag,attributes:u(u({},l.attributes),h.path)},S))]},x={tag:"g",attributes:u({},h.outer),children:[y]},v="mask-".concat(s||xt()),m="clip-".concat(s||xt()),g={tag:"mask",attributes:u(u({},Ut),{},{id:v,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[w,x]},E={tag:"defs",children:[{tag:"clipPath",attributes:{id:m},children:ls(p)},g]};return n.push(E,{tag:"rect",attributes:u({fill:"currentColor","clip-path":"url(#".concat(m,")"),mask:"url(#".concat(v,")")},Ut)}),{children:n,attributes:a}}}},fs={provides(t){let e=!1;U.matchMedia&&(e=U.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){const n=[],a={fill:"currentColor"},r={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};n.push({tag:"path",attributes:u(u({},a),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});const i=u(u({},r),{},{attributeName:"opacity"}),s={tag:"circle",attributes:u(u({},a),{},{cx:"256",cy:"364",r:"28"}),children:[]};return e||s.children.push({tag:"animate",attributes:u(u({},r),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:u(u({},i),{},{values:"1;0;1;1;0;1;"})}),n.push(s),n.push({tag:"path",attributes:u(u({},a),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:e?[]:[{tag:"animate",attributes:u(u({},i),{},{values:"1;0;0;0;0;1;"})}]}),e||n.push({tag:"path",attributes:u(u({},a),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:u(u({},i),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:n}}}},us={hooks(){return{parseNodeAttributes(t,e){const n=e.getAttribute("data-fa-symbol"),a=n===null?!1:n===""?!0:n;return t.symbol=a,t}}}},ds=[ri,qi,Ki,Qi,Zi,is,ss,os,cs,fs,us];Ai(ds,{mixoutsTo:D});D.noAuto;D.config;D.library;D.dom;const ue=D.parse;D.findIconDefinition;D.toHtml;const ps=D.icon;D.layer;D.text;D.counter;function ln(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter(function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable})),n.push.apply(n,a)}return n}function z(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?ln(Object(n),!0).forEach(function(a){rt(t,a,n[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):ln(Object(n)).forEach(function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(n,a))})}return t}function Nt(t){"@babel/helpers - typeof";return Nt=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Nt(t)}function rt(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function ms(t,e){if(t==null)return{};var n={},a=Object.keys(t),r,i;for(i=0;i<a.length;i++)r=a[i],!(e.indexOf(r)>=0)&&(n[r]=t[r]);return n}function hs(t,e){if(t==null)return{};var n=ms(t,e),a,r;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)a=i[r],!(e.indexOf(a)>=0)&&Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}function de(t){return gs(t)||bs(t)||ys(t)||vs()}function gs(t){if(Array.isArray(t))return pe(t)}function bs(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function ys(t,e){if(t){if(typeof t=="string")return pe(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return pe(t,e)}}function pe(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,a=new Array(e);n<e;n++)a[n]=t[n];return a}function vs(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function xs(t){var e,n=t.beat,a=t.fade,r=t.beatFade,i=t.bounce,s=t.shake,o=t.flash,c=t.spin,l=t.spinPulse,d=t.spinReverse,p=t.pulse,h=t.fixedWidth,w=t.inverse,S=t.border,y=t.listItem,x=t.flip,v=t.size,m=t.rotation,g=t.pull,E=(e={"fa-beat":n,"fa-fade":a,"fa-beat-fade":r,"fa-bounce":i,"fa-shake":s,"fa-flash":o,"fa-spin":c,"fa-spin-reverse":d,"fa-spin-pulse":l,"fa-pulse":p,"fa-fw":h,"fa-inverse":w,"fa-border":S,"fa-li":y,"fa-flip":x===!0,"fa-flip-horizontal":x==="horizontal"||x==="both","fa-flip-vertical":x==="vertical"||x==="both"},rt(e,"fa-".concat(v),typeof v<"u"&&v!==null),rt(e,"fa-rotate-".concat(m),typeof m<"u"&&m!==null&&m!==0),rt(e,"fa-pull-".concat(g),typeof g<"u"&&g!==null),rt(e,"fa-swap-opacity",t.swapOpacity),e);return Object.keys(E).map(function(k){return E[k]?k:null}).filter(function(k){return k})}function ws(t){return t=t-0,t===t}function Jn(t){return ws(t)?t:(t=t.replace(/[\-_\s]+(.)?/g,function(e,n){return n?n.toUpperCase():""}),t.substr(0,1).toLowerCase()+t.substr(1))}var As=["style"];function Es(t){return t.charAt(0).toUpperCase()+t.slice(1)}function Ss(t){return t.split(";").map(function(e){return e.trim()}).filter(function(e){return e}).reduce(function(e,n){var a=n.indexOf(":"),r=Jn(n.slice(0,a)),i=n.slice(a+1).trim();return r.startsWith("webkit")?e[Es(r)]=i:e[r]=i,e},{})}function ta(t,e){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof e=="string")return e;var a=(e.children||[]).map(function(c){return ta(t,c)}),r=Object.keys(e.attributes||{}).reduce(function(c,l){var d=e.attributes[l];switch(l){case"class":c.attrs.className=d,delete e.attributes.class;break;case"style":c.attrs.style=Ss(d);break;default:l.indexOf("aria-")===0||l.indexOf("data-")===0?c.attrs[l.toLowerCase()]=d:c.attrs[Jn(l)]=d}return c},{attrs:{}}),i=n.style,s=i===void 0?{}:i,o=hs(n,As);return r.attrs.style=z(z({},r.attrs.style),s),t.apply(void 0,[e.tag,z(z({},r.attrs),o)].concat(de(a)))}var ea=!1;try{ea=!0}catch{}function ks(){if(!ea&&console&&typeof console.error=="function"){var t;(t=console).error.apply(t,arguments)}}function cn(t){if(t&&Nt(t)==="object"&&t.prefix&&t.iconName&&t.icon)return t;if(ue.icon)return ue.icon(t);if(t===null)return null;if(t&&Nt(t)==="object"&&t.prefix&&t.iconName)return t;if(Array.isArray(t)&&t.length===2)return{prefix:t[0],iconName:t[1]};if(typeof t=="string")return{prefix:"fas",iconName:t}}function Gt(t,e){return Array.isArray(e)&&e.length>0||!Array.isArray(e)&&e?rt({},t,e):{}}var fn={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1},Ne=dn.forwardRef(function(t,e){var n=z(z({},fn),t),a=n.icon,r=n.mask,i=n.symbol,s=n.className,o=n.title,c=n.titleId,l=n.maskId,d=cn(a),p=Gt("classes",[].concat(de(xs(n)),de((s||"").split(" ")))),h=Gt("transform",typeof n.transform=="string"?ue.transform(n.transform):n.transform),w=Gt("mask",cn(r)),S=ps(d,z(z(z(z({},p),h),w),{},{symbol:i,title:o,titleId:c,maskId:l}));if(!S)return ks("Could not find icon",d),null;var y=S.abstract,x={ref:e};return Object.keys(n).forEach(function(v){fn.hasOwnProperty(v)||(x[v]=n[v])}),Ps(y[0],x)});Ne.displayName="FontAwesomeIcon";Ne.propTypes={beat:A.bool,border:A.bool,beatFade:A.bool,bounce:A.bool,className:A.string,fade:A.bool,flash:A.bool,mask:A.oneOfType([A.object,A.array,A.string]),maskId:A.string,fixedWidth:A.bool,inverse:A.bool,flip:A.oneOf([!0,!1,"horizontal","vertical","both"]),icon:A.oneOfType([A.object,A.array,A.string]),listItem:A.bool,pull:A.oneOf(["right","left"]),pulse:A.bool,rotation:A.oneOf([0,90,180,270]),shake:A.bool,size:A.oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:A.bool,spinPulse:A.bool,spinReverse:A.bool,symbol:A.oneOfType([A.bool,A.string]),title:A.string,titleId:A.string,transform:A.oneOfType([A.string,A.object]),swapOpacity:A.bool};var Ps=ta.bind(null,dn.createElement);/*!
 * Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */const Cs={prefix:"fas",iconName:"plus",icon:[448,512,[10133,61543,"add"],"2b","M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 144L48 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l144 0 0 144c0 17.7 14.3 32 32 32s32-14.3 32-32l0-144 144 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-144 0 0-144z"]};function Os({notes:t,userData:e,error:n,onMakeNotesClick:a,currentNote:r,setCurrentNote:i,handleAddNote:s}){const o=pn(),[c,l]=P.useState({title:!1,description:!1}),[d,p]=P.useState(!1),[h,w]=P.useState({title:"",description:""}),S=()=>{let x="",v="";const m=r.title.trim().length===0,g=r.title.trim().length<3,E=r.description.trim().length===0,k=r.description.trim().length<5,T=r.description.trim().split(/\s+/).length===1;m?x="Title cannot be empty.":g&&(x="Title must be at least 3 characters long."),E?v="Description cannot be empty.":k&&T?v="Description cannot be just a word.":k&&(v="Description must be at least 5 characters long.");const M={title:!!x,description:!!v};return l(M),w({title:x,description:v}),!Object.values(M).some(L=>L)},y=()=>{S()&&s()};return f.jsx(Da,{className:"main black-gradient",children:f.jsx(O,{className:"relative z-10",children:e&&(e!=null&&e.name)?f.jsx(O,{className:"flex-row",children:d?f.jsx(Vt.div,{initial:"hidden",animate:"show",variants:Ia("left","tween",0,3),className:"form-data green-pink-gradient p-[1px] shadow-card",children:f.jsxs(O,{className:"bg-tertiary p-5 rounded-[20px]",children:[f.jsx(j,{className:"form-heading text-green-300",variant:"h5",fontWeight:"bold",children:"Add a New Note"}),f.jsxs("form",{children:[f.jsxs(O,{className:"flex-row",children:[f.jsx(j,{className:"text-green-100",paddingRight:2,fontWeight:"bold",fontSize:20,children:"Title"}),f.jsx(gt,{size:"small",fullWidth:!0,value:r.title,onChange:x=>i({...r,title:x.target.value}),error:c.title,helperText:h.title})]}),f.jsxs(O,{className:"py-3 flex-row",children:[f.jsx(j,{className:"text-green-100",paddingRight:4.5,fontWeight:"bold",fontSize:20,children:"Description"}),f.jsx(gt,{multiline:!0,rows:4,fullWidth:!0,value:r.description,onChange:x=>i({...r,description:x.target.value}),error:c.description,helperText:h.description})]}),f.jsxs(O,{className:"flex-row",children:[f.jsx(j,{paddingRight:3,className:"text-green-100",fontWeight:"bold",fontSize:20,children:"Tag"}),f.jsx(gt,{size:"small",fullWidth:!0,value:r.tag,onChange:x=>i({...r,tag:x.target.value})})]}),f.jsx(O,{className:"flex-center",children:f.jsx(nt,{className:"custom-add-button",startIcon:f.jsx(Ne,{icon:Cs}),onClick:y,children:"Add Note"})})]})]})}):f.jsxs(Vt.div,{initial:"hidden",animate:"show",variants:Oa(.2,1),className:"text-data",children:[f.jsxs("h2",{className:"text-green-200",children:["Welcome, ",e==null?void 0:e.name,"!"]}),f.jsx("h4",{className:"text-green-100",children:"Let's organize your world, one note at a time!"}),f.jsxs(O,{display:"flex",flexDirection:"row",gap:2,alignItems:"center",children:[t&&t.length>0&&f.jsx(nt,{variant:"contained",className:"custom-add-button",onClick:a,children:"View Saved Notes"}),f.jsx(nt,{className:"custom-add-button",onClick:()=>p(!d),children:"Create New Note"})]})]})}):f.jsx(O,{className:"flex-col animate-pulse",children:n?f.jsxs(O,{children:[f.jsx(j,{className:"typography bottom-link",variant:"h5",color:"black",fontWeight:"bold",children:"Authentication failed!"}),f.jsxs(O,{className:"bottom",children:["Go back to Home page"," ",f.jsx(nt,{variant:"contained",className:"bottom-link",onClick:()=>o("/"),children:"Go Back"})]})]}):f.jsx(wa,{})})})})}const Is=Z(f.jsx("path",{d:"M22 24H2v-4h20zM13.06 5.19l3.75 3.75L7.75 18H4v-3.75zm4.82 2.68-3.75-3.75 1.83-1.83c.39-.39 1.02-.39 1.41 0l2.34 2.34c.39.39.39 1.02 0 1.41z"}),"BorderColor"),Ns=Z(f.jsx("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6zM8 9h8v10H8zm7.5-5-1-1h-5l-1 1H5v2h14V4z"}),"DeleteOutline"),Ts=Z(f.jsx("path",{d:"M17 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V7zm-5 16c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3m3-10H5V5h10z"}),"Save"),Ms=Z(f.jsx("path",{d:"M10 20h4c0 1.1-.9 2-2 2s-2-.9-2-2m4-11c0 2.61 1.67 4.83 4 5.66V17h2v2H4v-2h2v-7c0-2.79 1.91-5.14 4.5-5.8v-.7c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5v.7c.71.18 1.36.49 1.95.9C14.54 6.14 14 7.51 14 9m10-1h-3V5h-2v3h-3v2h3v3h2v-3h3z"}),"NotificationAdd"),js=Z(f.jsx("path",{d:"M7.58 4.08 6.15 2.65C3.75 4.48 2.17 7.3 2.03 10.5h2c.15-2.65 1.51-4.97 3.55-6.42m12.39 6.42h2c-.15-3.2-1.73-6.02-4.12-7.85l-1.42 1.43c2.02 1.45 3.39 3.77 3.54 6.42M18 11c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2zm-6 11c.14 0 .27-.01.4-.04.65-.14 1.18-.58 1.44-1.18q.15-.36.15-.78h-4c.01 1.1.9 2 2.01 2"}),"NotificationsActive"),Ds=Z([f.jsx("path",{d:"M17.59 18 19 16.59 14.42 12 19 7.41 17.59 6l-6 6z"},"0"),f.jsx("path",{d:"m11 18 1.41-1.41L7.83 12l4.58-4.59L11 6l-6 6z"},"1")],"KeyboardDoubleArrowLeft"),un=(t,e,n,a)=>{t.style.transition=`${e} ${n}ms ${a}`},W=(t,e,n)=>Math.min(Math.max(t,e),n);class Ls{constructor(e,n){this.glareAngle=0,this.glareOpacity=0,this.calculateGlareSize=s=>{const{width:o,height:c}=s,l=Math.sqrt(o**2+c**2);return{width:l,height:l}},this.setSize=s=>{const o=this.calculateGlareSize(s);this.glareEl.style.width=`${o.width}px`,this.glareEl.style.height=`${o.height}px`},this.update=(s,o,c,l)=>{this.updateAngle(s,o.glareReverse),this.updateOpacity(s,o,c,l)},this.updateAngle=(s,o)=>{const{xPercentage:c,yPercentage:l}=s,d=180/Math.PI,p=c?Math.atan2(l,-c)*d:0;this.glareAngle=p-(o?180:0)},this.updateOpacity=(s,o,c,l)=>{const{xPercentage:d,yPercentage:p}=s,{glarePosition:h,glareReverse:w,glareMaxOpacity:S}=o,y=c?-1:1,x=l?-1:1,v=w?-1:1;let m=0;switch(h){case"top":m=-d*y*v;break;case"right":m=p*x*v;break;case"bottom":case void 0:m=d*y*v;break;case"left":m=-p*x*v;break;case"all":m=Math.hypot(d,p)}const g=W(m,0,100);this.glareOpacity=g*S/100},this.render=s=>{const{glareColor:o}=s;this.glareEl.style.transform=`rotate(${this.glareAngle}deg) translate(-50%, -50%)`,this.glareEl.style.opacity=this.glareOpacity.toString(),this.glareEl.style.background=`linear-gradient(0deg, rgba(255,255,255,0) 0%, ${o} 100%)`},this.glareWrapperEl=document.createElement("div"),this.glareEl=document.createElement("div"),this.glareWrapperEl.appendChild(this.glareEl),this.glareWrapperEl.className="glare-wrapper",this.glareEl.className="glare";const a={position:"absolute",top:"0",left:"0",width:"100%",height:"100%",overflow:"hidden",borderRadius:n,WebkitMaskImage:"-webkit-radial-gradient(white, black)",pointerEvents:"none"},r=this.calculateGlareSize(e),i={position:"absolute",top:"50%",left:"50%",transformOrigin:"0% 0%",pointerEvents:"none",width:`${r.width}px`,height:`${r.height}px`};Object.assign(this.glareWrapperEl.style,a),Object.assign(this.glareEl.style,i)}}class Fs{constructor(){this.glareAngle=0,this.glareOpacity=0,this.tiltAngleX=0,this.tiltAngleY=0,this.tiltAngleXPercentage=0,this.tiltAngleYPercentage=0,this.update=(e,n)=>{this.updateTilt(e,n),this.updateTiltManualInput(e,n),this.updateTiltReverse(n),this.updateTiltLimits(n)},this.updateTilt=(e,n)=>{const{xPercentage:a,yPercentage:r}=e,{tiltMaxAngleX:i,tiltMaxAngleY:s}=n;this.tiltAngleX=a*i/100,this.tiltAngleY=r*s/100*-1},this.updateTiltManualInput=(e,n)=>{const{tiltAngleXManual:a,tiltAngleYManual:r,tiltMaxAngleX:i,tiltMaxAngleY:s}=n;(a!==null||r!==null)&&(this.tiltAngleX=a!==null?a:0,this.tiltAngleY=r!==null?r:0,e.xPercentage=100*this.tiltAngleX/i,e.yPercentage=100*this.tiltAngleY/s)},this.updateTiltReverse=e=>{const n=e.tiltReverse?-1:1;this.tiltAngleX=n*this.tiltAngleX,this.tiltAngleY=n*this.tiltAngleY},this.updateTiltLimits=e=>{const{tiltAxis:n}=e;this.tiltAngleX=W(this.tiltAngleX,-90,90),this.tiltAngleY=W(this.tiltAngleY,-90,90),n&&(this.tiltAngleX=n==="x"?this.tiltAngleX:0,this.tiltAngleY=n==="y"?this.tiltAngleY:0)},this.updateTiltAnglesPercentage=e=>{const{tiltMaxAngleX:n,tiltMaxAngleY:a}=e;this.tiltAngleXPercentage=this.tiltAngleX/n*100,this.tiltAngleYPercentage=this.tiltAngleY/a*100},this.render=e=>{e.style.transform+=`rotateX(${this.tiltAngleX}deg) rotateY(${this.tiltAngleY}deg) `}}}const zs={scale:1,perspective:1e3,flipVertically:!1,flipHorizontally:!1,reset:!0,transitionEasing:"cubic-bezier(.03,.98,.52,.99)",transitionSpeed:400,trackOnWindow:!1,gyroscope:!1,tiltEnable:!0,tiltReverse:!1,tiltAngleXInitial:0,tiltAngleYInitial:0,tiltMaxAngleX:20,tiltMaxAngleY:20,tiltAxis:void 0,tiltAngleXManual:null,tiltAngleYManual:null,glareEnable:!1,glareMaxOpacity:.7,glareColor:"#ffffff",glarePosition:"bottom",glareReverse:!1,glareBorderRadius:"0"};class na extends P.PureComponent{constructor(){super(...arguments),this.wrapperEl={node:null,size:{width:0,height:0,left:0,top:0},clientPosition:{x:null,y:null,xPercentage:0,yPercentage:0},updateAnimationId:null,scale:1},this.tilt=null,this.glare=null,this.addDeviceOrientationEventListener=async()=>{if(!window.DeviceOrientationEvent)return;const e=DeviceOrientationEvent.requestPermission;typeof e=="function"?await e()==="granted"&&window.addEventListener("deviceorientation",this.onMove):window.addEventListener("deviceorientation",this.onMove)},this.setSize=()=>{this.setWrapperElSize(),this.glare&&this.glare.setSize(this.wrapperEl.size)},this.mainLoop=e=>{this.wrapperEl.updateAnimationId!==null&&cancelAnimationFrame(this.wrapperEl.updateAnimationId),this.processInput(e),this.update(e.type),this.wrapperEl.updateAnimationId=requestAnimationFrame(this.renderFrame)},this.onEnter=e=>{const{onEnter:n}=this.props;this.setSize(),this.wrapperEl.node.style.willChange="transform",this.setTransitions(),n&&n({event:e})},this.onMove=e=>{this.mainLoop(e),this.emitOnMove(e)},this.onLeave=e=>{const{onLeave:n}=this.props;if(this.setTransitions(),n&&n({event:e}),this.props.reset){const a=new CustomEvent("autoreset");this.onMove(a)}},this.processInput=e=>{const{scale:n}=this.props;switch(e.type){case"mousemove":this.wrapperEl.clientPosition.x=e.pageX,this.wrapperEl.clientPosition.y=e.pageY,this.wrapperEl.scale=n;break;case"touchmove":this.wrapperEl.clientPosition.x=e.touches[0].pageX,this.wrapperEl.clientPosition.y=e.touches[0].pageY,this.wrapperEl.scale=n;break;case"deviceorientation":this.processInputDeviceOrientation(e),this.wrapperEl.scale=n;break;case"autoreset":{const{tiltAngleXInitial:a,tiltAngleYInitial:r,tiltMaxAngleX:i,tiltMaxAngleY:s}=this.props,o=r/s*100;this.wrapperEl.clientPosition.xPercentage=W(a/i*100,-100,100),this.wrapperEl.clientPosition.yPercentage=W(o,-100,100),this.wrapperEl.scale=1;break}}},this.processInputDeviceOrientation=e=>{if(!e.gamma||!e.beta||!this.props.gyroscope)return;const{tiltMaxAngleX:n,tiltMaxAngleY:a}=this.props,r=e.gamma;this.wrapperEl.clientPosition.xPercentage=e.beta/n*100,this.wrapperEl.clientPosition.yPercentage=r/a*100,this.wrapperEl.clientPosition.xPercentage=W(this.wrapperEl.clientPosition.xPercentage,-100,100),this.wrapperEl.clientPosition.yPercentage=W(this.wrapperEl.clientPosition.yPercentage,-100,100)},this.update=e=>{const{tiltEnable:n,flipVertically:a,flipHorizontally:r}=this.props;e!=="autoreset"&&e!=="deviceorientation"&&e!=="propChange"&&this.updateClientInput(),n&&this.tilt.update(this.wrapperEl.clientPosition,this.props),this.updateFlip(),this.tilt.updateTiltAnglesPercentage(this.props),this.glare&&this.glare.update(this.wrapperEl.clientPosition,this.props,a,r)},this.updateClientInput=()=>{const{trackOnWindow:e}=this.props;let n,a;if(e){const{x:r,y:i}=this.wrapperEl.clientPosition;n=i/window.innerHeight*200-100,a=r/window.innerWidth*200-100}else{const{size:{width:r,height:i,left:s,top:o},clientPosition:{x:c,y:l}}=this.wrapperEl;n=(l-o)/i*200-100,a=(c-s)/r*200-100}this.wrapperEl.clientPosition.xPercentage=W(n,-100,100),this.wrapperEl.clientPosition.yPercentage=W(a,-100,100)},this.updateFlip=()=>{const{flipVertically:e,flipHorizontally:n}=this.props;e&&(this.tilt.tiltAngleX+=180,this.tilt.tiltAngleY*=-1),n&&(this.tilt.tiltAngleY+=180)},this.renderFrame=()=>{this.resetWrapperElTransform(),this.renderPerspective(),this.tilt.render(this.wrapperEl.node),this.renderScale(),this.glare&&this.glare.render(this.props)}}componentDidMount(){if(this.tilt=new Fs,this.initGlare(),this.setSize(),this.addEventListeners(),typeof CustomEvent>"u")return;const e=new CustomEvent("autoreset");this.mainLoop(e);const n=new CustomEvent("initial");this.emitOnMove(n)}componentWillUnmount(){this.wrapperEl.updateAnimationId!==null&&cancelAnimationFrame(this.wrapperEl.updateAnimationId),this.removeEventListeners()}componentDidUpdate(){const e=new CustomEvent("propChange");this.mainLoop(e),this.emitOnMove(e)}addEventListeners(){const{trackOnWindow:e,gyroscope:n}=this.props;window.addEventListener("resize",this.setSize),e&&(window.addEventListener("mouseenter",this.onEnter),window.addEventListener("mousemove",this.onMove),window.addEventListener("mouseout",this.onLeave),window.addEventListener("touchstart",this.onEnter),window.addEventListener("touchmove",this.onMove),window.addEventListener("touchend",this.onLeave)),n&&this.addDeviceOrientationEventListener()}removeEventListeners(){const{trackOnWindow:e,gyroscope:n}=this.props;window.removeEventListener("resize",this.setSize),e&&(window.removeEventListener("mouseenter",this.onEnter),window.removeEventListener("mousemove",this.onMove),window.removeEventListener("mouseout",this.onLeave),window.removeEventListener("touchstart",this.onEnter),window.removeEventListener("touchmove",this.onMove),window.removeEventListener("touchend",this.onLeave)),n&&window.DeviceOrientationEvent&&window.removeEventListener("deviceorientation",this.onMove)}setWrapperElSize(){const e=this.wrapperEl.node.getBoundingClientRect();this.wrapperEl.size.width=this.wrapperEl.node.offsetWidth,this.wrapperEl.size.height=this.wrapperEl.node.offsetHeight,this.wrapperEl.size.left=e.left+window.scrollX,this.wrapperEl.size.top=e.top+window.scrollY}initGlare(){const{glareEnable:e,glareBorderRadius:n}=this.props;e&&(this.glare=new Ls(this.wrapperEl.size,n),this.wrapperEl.node.appendChild(this.glare.glareWrapperEl))}emitOnMove(e){const{onMove:n}=this.props;if(!n)return;let a=0,r=0;this.glare&&(a=this.glare.glareAngle,r=this.glare.glareOpacity),n({tiltAngleX:this.tilt.tiltAngleX,tiltAngleY:this.tilt.tiltAngleY,tiltAngleXPercentage:this.tilt.tiltAngleXPercentage,tiltAngleYPercentage:this.tilt.tiltAngleYPercentage,glareAngle:a,glareOpacity:r,event:e})}resetWrapperElTransform(){this.wrapperEl.node.style.transform=""}renderPerspective(){const{perspective:e}=this.props;this.wrapperEl.node.style.transform+=`perspective(${e}px) `}renderScale(){const{scale:e}=this.wrapperEl;this.wrapperEl.node.style.transform+=`scale3d(${e},${e},${e})`}setTransitions(){const{transitionSpeed:e,transitionEasing:n}=this.props;un(this.wrapperEl.node,"all",e,n),this.glare&&un(this.glare.glareEl,"opacity",e,n)}render(){const{children:e,className:n,style:a}=this.props;return f.jsx("div",{ref:r=>{this.wrapperEl.node=r},onMouseEnter:this.onEnter,onMouseMove:this.onMove,onMouseLeave:this.onLeave,onTouchStart:this.onEnter,onTouchMove:this.onMove,onTouchEnd:this.onLeave,className:n,style:a,children:e})}}na.defaultProps=zs;const _s=Z(f.jsx("path",{d:"M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m-2 10h-4v4h-2v-4H7v-2h4V7h2v4h4z"}),"AddBox");function Rs({open:t,toggleDialog:e,id:n,refetch:a}){const[r,i]=P.useState({date:"",message:"",noteId:n,notification:!0}),[s,o]=P.useState({date:!1,message:!1}),[c,l]=P.useState({date:"",message:""}),[d,p]=P.useState("");P.useEffect(()=>{const m=new Date;m.setDate(m.getDate()+1);const g=m.getFullYear(),E=String(m.getMonth()+1).padStart(2,"0"),k=String(m.getDate()).padStart(2,"0");p(`${g}-${E}-${k}`)},[t]);const h=m=>{const g=m.target.value;if(g){const E=new Date,k=new Date(g),T=new Date(k.getFullYear(),k.getMonth(),k.getDate(),E.getHours(),E.getMinutes()).toISOString();i(M=>({...M,date:T}))}s.date&&(o(E=>({...E,date:!1})),l(E=>({...E,date:""})))},w=m=>{i(g=>({...g,message:m.target.value})),s.message&&(o(g=>({...g,message:!1})),l(g=>({...g,message:""})))},S=()=>{let m=!0;const g={date:!1,message:!1},E={date:"",message:""};return(!r.date||r.date.trim()==="")&&(g.date=!0,E.date="Deadline cannot be empty",m=!1),(!r.message||r.message.trim()==="")&&(g.message=!0,E.message="Comment cannot be empty",m=!1),o(g),l(E),m},[y]=Aa(),x=async()=>{if(S()){console.log("Form Data Saved:",r);try{await y({payload:r}),F.success("You will be notified one day before deadline"),a()}catch(m){F.error("Error saving note"),console.error("Error saving note:",m)}e()}},v=m=>{if(!m)return"";const g=new Date(m),E=g.getFullYear(),k=String(g.getMonth()+1).padStart(2,"0"),T=String(g.getDate()).padStart(2,"0");return`${E}-${k}-${T}`};return f.jsxs(Ka,{className:"animate-slideInFromTop",open:t,onClose:e,fullWidth:!0,sx:{width:"1300px",maxWidth:"100%",borderRadius:"20px","& .MuiDialog-paper":{backgroundColor:"#f9f9f9",boxShadow:"0 0px 16px rgba(0, 0, 0, 0.2)"}},children:[f.jsxs(O,{display:"flex",flexDirection:"column",gap:2,padding:1.5,sx:{backgroundColor:"#ffffff",borderRadius:"16px"},children:[f.jsx(j,{variant:"h5",fontWeight:"bold",align:"center",gutterBottom:!0,children:"Add Notification"}),f.jsxs(O,{display:"flex",flexDirection:"column",gap:3,padding:2,sx:{backgroundColor:"#fafafa",borderRadius:"12px",boxShadow:"0 4px 12px rgba(0, 0, 0, 0.1)"},children:[f.jsxs(O,{display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"center",gap:2,children:[f.jsx(j,{color:"text.primary",children:"Deadline"}),f.jsx(gt,{type:"date",fullWidth:!0,size:"small",sx:{width:"300px"},required:!0,value:v(r.date),onChange:h,error:s.date,helperText:c.date,inputProps:{min:d}})]}),f.jsxs(O,{display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"center",gap:2,children:[f.jsx(j,{width:"100px",color:"text.primary",children:"Comment"}),f.jsx(gt,{fullWidth:!0,required:!0,size:"small",value:r.message,onChange:w,error:s.message,helperText:c.message,multiline:!0,rows:3})]})]})]}),f.jsxs(tr,{sx:{padding:1,justifyContent:"space-between"},children:[f.jsx(nt,{onClick:e,variant:"outlined",children:"Cancel"}),f.jsx(nt,{onClick:x,color:"primary",variant:"contained",children:"Save"})]})]})}function Ws({notes:t,setNotes:e,fetchNotes:n,handleSaveEdit:a,onAddClick:r,handleDeleteNote:i}){const s=Ht.getItem("authToken"),[o,c]=P.useState(null),[l,d]=P.useState(""),[p,h]=P.useState(!1),w=()=>{h(y=>!y)};P.useEffect(()=>{s&&n()},[n,s]);const S=y=>{const x=new Date(y),v=x.toLocaleDateString("en-GB",{day:"2-digit",month:"2-digit",year:"numeric"}),m=x.toLocaleTimeString("en-US",{hour:"2-digit",minute:"2-digit",second:"2-digit",hour12:!1});return{date:v,time:m}};return f.jsxs(O,{className:"notes-background black-gradient",padding:2,children:[f.jsxs(O,{sx:{position:"relative",zIndex:1,width:"100%",maxWidth:"1200px",margin:"0 auto"},children:[f.jsx(je,{container:!0,spacing:3,sx:{marginTop:"25px"},children:t.map((y,x)=>f.jsx(je,{item:!0,xs:12,sm:6,md:4,children:f.jsx(na,{tiltMaxAngleX:15,tiltMaxAngleY:15,scale:1.02,transitionSpeed:450,style:{margin:"20px"},children:f.jsx(Vt.div,{variants:Na("right","spring",.5*x,.75),initial:"hidden",animate:"show",className:"w-full green-pink-gradient p-[1px] rounded-[12px] shadow-card",children:f.jsxs(O,{display:"flex",flexDirection:"column",gap:1,className:"bg-tertiary rounded-[20px]",boxShadow:3,padding:2,children:[f.jsxs(O,{display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"center",children:[y.notification?f.jsx(V,{size:"small",color:"secondary",title:"You will be notified one day before deadline",children:f.jsx(js,{})}):f.jsx(V,{size:"small",color:"success",className:"text-green-100",onClick:()=>{d(y._id),w()},children:f.jsx(Ms,{})}),y.sendDate?f.jsx(j,{variant:"caption",className:"text-purple-100",children:`Deadline: ${S(y.sendDate).date} ${S(y.sendDate).time}`}):f.jsxs(j,{variant:"caption",className:"text-green-100",children:[f.jsx(Ds,{fontSize:"small"})," Set Notification Alert"]})]}),f.jsxs(O,{display:"flex",flexDirection:"row",justifyContent:"space-between",children:[f.jsxs(j,{variant:"caption",color:"primary",contentEditable:o===y._id,suppressContentEditableWarning:!0,onBlur:v=>e(m=>m.map(g=>g._id===y._id?{...g,tag:v.target.textContent||""}:g)),sx:{fontWeight:"bold"},children:["#",y.tag]}),f.jsx(j,{variant:"caption",className:"text-blue-100",children:`Date: ${S(y.date).date} Time: ${S(y.date).time}`})]}),f.jsx(j,{fontWeight:"bold",variant:"h5",className:"capitalize text-green-200",gutterBottom:!0,contentEditable:o===y._id,suppressContentEditableWarning:!0,onBlur:v=>e(m=>m.map(g=>g._id===y._id?{...g,title:v.target.textContent||""}:g)),children:y.title}),f.jsx(j,{variant:"body2",className:"text-green-300",sx:{overflow:"hidden",textOverflow:"ellipsis",display:"-webkit-box",WebkitLineClamp:3,WebkitBoxOrient:"vertical"},contentEditable:o===y._id,suppressContentEditableWarning:!0,onBlur:v=>e(m=>m.map(g=>g._id===y._id?{...g,description:v.target.textContent||""}:g)),children:y.description}),f.jsxs(O,{mt:1.5,display:"flex",flexDirection:"row",justifyContent:"space-between",children:[o!==y._id?f.jsx(V,{title:"Edit Note",size:"small",color:"primary",onClick:()=>c(y._id),children:f.jsx(Is,{})}):f.jsx(V,{title:"Save Note",size:"small",color:"secondary",onClick:()=>{a(y),c(null)},children:f.jsx(Ts,{})}),f.jsx(V,{title:"Delete the note",size:"small",color:"error",onClick:()=>i(y._id),children:f.jsx(Ns,{})})]})]})})})},y._id))}),f.jsx(O,{sx:{display:"flex",justifyContent:"center",mt:4},children:f.jsx(V,{color:"primary",size:"large",onClick:r,sx:{fontSize:"48px"},children:f.jsx(_s,{})})})]}),p&&f.jsx(Rs,{open:p,refetch:n,toggleDialog:w,id:l})]})}function Vs(){const t=P.useRef(null),e=()=>{var I;(I=t.current)==null||I.scrollIntoView({behavior:"smooth"})},n=P.useRef(null),a=()=>{var I;(I=n.current)==null||I.scrollIntoView({behavior:"smooth"})},[r,i]=P.useState([]),[s,o]=P.useState(null),[c,l]=P.useState({_id:"",title:"",description:"",tag:"",notification:!1,sendDate:null,date:""}),d=pn(),p=Ht.getItem("authToken"),{data:h,error:w,refetch:S}=Ea({}),{data:y=[],error:x,refetch:v}=Sa({});P.useEffect(()=>{h&&o(h),w&&d("/errorpage"),y&&s!==null&&i(y),x&&F.error("Error in fetching notes!")},[y,x,d,S,s,w,h]);const[m]=ka(),g=async()=>{if(!c.title||!c.description||!c.tag){F.info("Please enter required fields.");return}try{await m({...c,headers:{authorization:`Bearer ${p}`}}),l({_id:"",title:"",description:"",tag:"",notification:!1,sendDate:null,date:""}),v(),e(),F.success("Notes added successfully!")}catch(I){F.error("Error in adding notes"),console.error("Error adding note:",I)}},[E]=Pa(),k=async I=>{try{await E({id:I._id,data:I,headers:{authorization:`Bearer ${p}`}}),F.success("Note updated successfully"),v()}catch(J){F.error("Error saving note"),console.error("Error saving note:",J)}},[T]=Ca(),M=async I=>{try{await T({id:I,headers:{authorization:`Bearer ${p}`}}),v(),F.success("Note deleted successfully!")}catch(J){F.error("Error deleting note"),console.error("Error deleting note:",J)}},L=P.useCallback(()=>{v()},[v]),ft=()=>{Ht.removeItem("authToken"),o(null),d("/")};return f.jsxs("div",{className:"relative min-h-screen bg-gradient-to-br from-green-100 via-blue-100 to-purple-100",children:[f.jsx(V,{className:"logout-button",onClick:ft,title:"Logout",sx:{position:"fixed",top:"16px",right:"16px",zIndex:50,color:"#D8B4FE",padding:"8px","&:hover":{color:"#BBF7D0",transform:"scale(1.2)",background:"transparent"},"&:active":{transform:"scale(1)"},background:"transparent"},children:f.jsx(za,{sx:{fontSize:"1.5rem"}})}),f.jsx("div",{ref:n,children:f.jsx(Os,{notes:r,userData:s,error:!!w,onMakeNotesClick:e,currentNote:c,setCurrentNote:l,handleAddNote:g})}),r&&r.length>0&&f.jsx("div",{ref:t,children:f.jsx(Ws,{onAddClick:a,notes:r,setNotes:i,fetchNotes:L,handleSaveEdit:k,handleDeleteNote:M})})]})}export{Vs as default};
