import{g as wa,r as P,j as c,c as ot,R as mn,u as gn,L as ka,a as Aa,y as _,d as qt,b as Ca,e as Pa,f as Ia,h as Oa,i as Ea}from"./index-CQ3cCy52.js";/* empty css               */import{g as Nt,a as Tt,u as jt,b as hn,s as X,c as F,d as Mt,m as Qt,e as Ne,f as Te,h as Na,r as Dt,i as be,S as je,B as O}from"./Stack-_SfXd5Ol.js";import{a as Ta,C as ja,B as mt}from"./Button-JzNbis0T.js";import{T as j}from"./Typography-BfwIQn_X.js";import{u as bn,P as yn,F as Me,a as ut,M as Ma,B as Da,T as gt,c as Z}from"./TextField-BkGUG_jz.js";import{N as Fa}from"./Navbar-CthNU9qj.js";var vn={exports:{}},_a="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",Ra=_a,za=Ra;function xn(){}function Sn(){}Sn.resetWarningCache=xn;var La=function(){function t(a,r,o,i,s,f){if(f!==za){var l=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw l.name="Invariant Violation",l}}t.isRequired=t;function e(){return t}var n={array:t,bigint:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,elementType:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:Sn,resetWarningCache:xn};return n.PropTypes=n,n};vn.exports=La();var Wa=vn.exports;const k=wa(Wa);function $a(t){return Tt("MuiIconButton",t)}const De=Nt("MuiIconButton",["root","disabled","colorInherit","colorPrimary","colorSecondary","colorError","colorInfo","colorSuccess","colorWarning","edgeStart","edgeEnd","sizeSmall","sizeMedium","sizeLarge","loading","loadingIndicator","loadingWrapper"]),Ba=t=>{const{classes:e,disabled:n,color:a,edge:r,size:o,loading:i}=t,s={root:["root",i&&"loading",n&&"disabled",a!=="default"&&`color${F(a)}`,r&&`edge${F(r)}`,`size${F(o)}`],loadingIndicator:["loadingIndicator"],loadingWrapper:["loadingWrapper"]};return Mt(s,$a,e)},Ua=X(Ta,{name:"MuiIconButton",slot:"Root",overridesResolver:(t,e)=>{const{ownerState:n}=t;return[e.root,n.loading&&e.loading,n.color!=="default"&&e[`color${F(n.color)}`],n.edge&&e[`edge${F(n.edge)}`],e[`size${F(n.size)}`]]}})(Qt(({theme:t})=>({textAlign:"center",flex:"0 0 auto",fontSize:t.typography.pxToRem(24),padding:8,borderRadius:"50%",color:(t.vars||t).palette.action.active,transition:t.transitions.create("background-color",{duration:t.transitions.duration.shortest}),variants:[{props:e=>!e.disableRipple,style:{"--IconButton-hoverBg":t.vars?`rgba(${t.vars.palette.action.activeChannel} / ${t.vars.palette.action.hoverOpacity})`:Ne(t.palette.action.active,t.palette.action.hoverOpacity),"&:hover":{backgroundColor:"var(--IconButton-hoverBg)","@media (hover: none)":{backgroundColor:"transparent"}}}},{props:{edge:"start"},style:{marginLeft:-12}},{props:{edge:"start",size:"small"},style:{marginLeft:-3}},{props:{edge:"end"},style:{marginRight:-12}},{props:{edge:"end",size:"small"},style:{marginRight:-3}}]})),Qt(({theme:t})=>({variants:[{props:{color:"inherit"},style:{color:"inherit"}},...Object.entries(t.palette).filter(Te()).map(([e])=>({props:{color:e},style:{color:(t.vars||t).palette[e].main}})),...Object.entries(t.palette).filter(Te()).map(([e])=>({props:{color:e},style:{"--IconButton-hoverBg":t.vars?`rgba(${(t.vars||t).palette[e].mainChannel} / ${t.vars.palette.action.hoverOpacity})`:Ne((t.vars||t).palette[e].main,t.palette.action.hoverOpacity)}})),{props:{size:"small"},style:{padding:5,fontSize:t.typography.pxToRem(18)}},{props:{size:"large"},style:{padding:12,fontSize:t.typography.pxToRem(28)}}],[`&.${De.disabled}`]:{backgroundColor:"transparent",color:(t.vars||t).palette.action.disabled},[`&.${De.loading}`]:{color:"transparent"}}))),Ya=X("span",{name:"MuiIconButton",slot:"LoadingIndicator",overridesResolver:(t,e)=>e.loadingIndicator})(({theme:t})=>({display:"none",position:"absolute",visibility:"visible",top:"50%",left:"50%",transform:"translate(-50%, -50%)",color:(t.vars||t).palette.action.disabled,variants:[{props:{loading:!0},style:{display:"flex"}}]})),nt=P.forwardRef(function(e,n){const a=jt({props:e,name:"MuiIconButton"}),{edge:r=!1,children:o,className:i,color:s="default",disabled:f=!1,disableFocusRipple:l=!1,size:d="medium",id:g,loading:m=null,loadingIndicator:S,...w}=a,b=hn(g),x=S??c.jsx(ja,{"aria-labelledby":b,color:"inherit",size:16}),y={...a,edge:r,color:s,disabled:f,disableFocusRipple:l,loading:m,loadingIndicator:x,size:d},p=Ba(y);return c.jsxs(Ua,{id:m?b:g,className:ot(p.root,i),centerRipple:!0,focusRipple:!l,disabled:f||m,ref:n,...w,ownerState:y,children:[typeof m=="boolean"&&c.jsx("span",{className:p.loadingWrapper,style:{display:"contents"},children:c.jsx(Ya,{className:p.loadingIndicator,ownerState:y,children:m&&x})}),o]})});function Ga(t){return Tt("MuiDialog",t)}const Ut=Nt("MuiDialog",["root","scrollPaper","scrollBody","container","paper","paperScrollPaper","paperScrollBody","paperWidthFalse","paperWidthXs","paperWidthSm","paperWidthMd","paperWidthLg","paperWidthXl","paperFullWidth","paperFullScreen"]),Ha=P.createContext({}),Va=X(Da,{name:"MuiDialog",slot:"Backdrop",overrides:(t,e)=>e.backdrop})({zIndex:-1}),Xa=t=>{const{classes:e,scroll:n,maxWidth:a,fullWidth:r,fullScreen:o}=t,i={root:["root"],container:["container",`scroll${F(n)}`],paper:["paper",`paperScroll${F(n)}`,`paperWidth${F(String(a))}`,r&&"paperFullWidth",o&&"paperFullScreen"]};return Mt(i,Ga,e)},Ka=X(Ma,{name:"MuiDialog",slot:"Root",overridesResolver:(t,e)=>e.root})({"@media print":{position:"absolute !important"}}),qa=X("div",{name:"MuiDialog",slot:"Container",overridesResolver:(t,e)=>{const{ownerState:n}=t;return[e.container,e[`scroll${F(n.scroll)}`]]}})({height:"100%","@media print":{height:"auto"},outline:0,variants:[{props:{scroll:"paper"},style:{display:"flex",justifyContent:"center",alignItems:"center"}},{props:{scroll:"body"},style:{overflowY:"auto",overflowX:"hidden",textAlign:"center","&::after":{content:'""',display:"inline-block",verticalAlign:"middle",height:"100%",width:"0"}}}]}),Qa=X(yn,{name:"MuiDialog",slot:"Paper",overridesResolver:(t,e)=>{const{ownerState:n}=t;return[e.paper,e[`scrollPaper${F(n.scroll)}`],e[`paperWidth${F(String(n.maxWidth))}`],n.fullWidth&&e.paperFullWidth,n.fullScreen&&e.paperFullScreen]}})(Qt(({theme:t})=>({margin:32,position:"relative",overflowY:"auto","@media print":{overflowY:"visible",boxShadow:"none"},variants:[{props:{scroll:"paper"},style:{display:"flex",flexDirection:"column",maxHeight:"calc(100% - 64px)"}},{props:{scroll:"body"},style:{display:"inline-block",verticalAlign:"middle",textAlign:"initial"}},{props:({ownerState:e})=>!e.maxWidth,style:{maxWidth:"calc(100% - 64px)"}},{props:{maxWidth:"xs"},style:{maxWidth:t.breakpoints.unit==="px"?Math.max(t.breakpoints.values.xs,444):`max(${t.breakpoints.values.xs}${t.breakpoints.unit}, 444px)`,[`&.${Ut.paperScrollBody}`]:{[t.breakpoints.down(Math.max(t.breakpoints.values.xs,444)+32*2)]:{maxWidth:"calc(100% - 64px)"}}}},...Object.keys(t.breakpoints.values).filter(e=>e!=="xs").map(e=>({props:{maxWidth:e},style:{maxWidth:`${t.breakpoints.values[e]}${t.breakpoints.unit}`,[`&.${Ut.paperScrollBody}`]:{[t.breakpoints.down(t.breakpoints.values[e]+32*2)]:{maxWidth:"calc(100% - 64px)"}}}})),{props:({ownerState:e})=>e.fullWidth,style:{width:"calc(100% - 64px)"}},{props:({ownerState:e})=>e.fullScreen,style:{margin:0,width:"100%",maxWidth:"100%",height:"100%",maxHeight:"none",borderRadius:0,[`&.${Ut.paperScrollBody}`]:{margin:0,maxWidth:"100%"}}}]}))),Za=P.forwardRef(function(e,n){const a=jt({props:e,name:"MuiDialog"}),r=bn(),o={enter:r.transitions.duration.enteringScreen,exit:r.transitions.duration.leavingScreen},{"aria-describedby":i,"aria-labelledby":s,"aria-modal":f=!0,BackdropComponent:l,BackdropProps:d,children:g,className:m,disableEscapeKeyDown:S=!1,fullScreen:w=!1,fullWidth:b=!1,maxWidth:x="sm",onBackdropClick:y,onClick:p,onClose:v,open:A,PaperComponent:C=yn,PaperProps:T={},scroll:D="paper",slots:U={},slotProps:ct={},TransitionComponent:E=Me,transitionDuration:J=o,TransitionProps:oa,...ia}=a,tt={...a,disableEscapeKeyDown:S,fullScreen:w,fullWidth:b,maxWidth:x,scroll:D},Wt=Xa(tt),$t=P.useRef(),sa=et=>{$t.current=et.target===et.currentTarget},la=et=>{p&&p(et),$t.current&&($t.current=null,y&&y(et),v&&v(et,"backdropClick"))},Bt=hn(s),ca=P.useMemo(()=>({titleId:Bt}),[Bt]),fa={transition:E,...U},ua={transition:oa,paper:T,backdrop:d,...ct},ft={slots:fa,slotProps:ua},[da,pa]=ut("root",{elementType:Ka,shouldForwardComponentProp:!0,externalForwardedProps:ft,ownerState:tt,className:ot(Wt.root,m),ref:n}),[ma,ga]=ut("backdrop",{elementType:Va,shouldForwardComponentProp:!0,externalForwardedProps:ft,ownerState:tt}),[ha,ba]=ut("paper",{elementType:Qa,shouldForwardComponentProp:!0,externalForwardedProps:ft,ownerState:tt,className:ot(Wt.paper,T.className)}),[ya,va]=ut("container",{elementType:qa,externalForwardedProps:ft,ownerState:tt,className:ot(Wt.container)}),[xa,Sa]=ut("transition",{elementType:Me,externalForwardedProps:ft,ownerState:tt,additionalProps:{appear:!0,in:A,timeout:J,role:"presentation"}});return c.jsx(da,{closeAfterTransition:!0,slots:{backdrop:ma},slotProps:{backdrop:{transitionDuration:J,as:l,...ga}},disableEscapeKeyDown:S,onClose:v,open:A,onClick:la,...pa,...ia,children:c.jsx(xa,{...Sa,children:c.jsx(ya,{onMouseDown:sa,...va,children:c.jsx(ha,{as:C,elevation:24,role:"dialog","aria-describedby":i,"aria-labelledby":Bt,"aria-modal":f,...ba,children:c.jsx(Ha.Provider,{value:ca,children:g})})})})})});function Ja(t){return Tt("MuiDialogActions",t)}Nt("MuiDialogActions",["root","spacing"]);const tr=t=>{const{classes:e,disableSpacing:n}=t;return Mt({root:["root",!n&&"spacing"]},Ja,e)},er=X("div",{name:"MuiDialogActions",slot:"Root",overridesResolver:(t,e)=>{const{ownerState:n}=t;return[e.root,!n.disableSpacing&&e.spacing]}})({display:"flex",alignItems:"center",padding:8,justifyContent:"flex-end",flex:"0 0 auto",variants:[{props:({ownerState:t})=>!t.disableSpacing,style:{"& > :not(style) ~ :not(style)":{marginLeft:8}}}]}),nr=P.forwardRef(function(e,n){const a=jt({props:e,name:"MuiDialogActions"}),{className:r,disableSpacing:o=!1,...i}=a,s={...a,disableSpacing:o},f=tr(s);return c.jsx(er,{className:ot(f.root,r),ownerState:s,ref:n,...i})}),Fe=P.createContext();function ar(t){return Tt("MuiGrid",t)}const rr=[0,1,2,3,4,5,6,7,8,9,10],or=["column-reverse","column","row-reverse","row"],ir=["nowrap","wrap-reverse","wrap"],dt=["auto",!0,1,2,3,4,5,6,7,8,9,10,11,12],yt=Nt("MuiGrid",["root","container","item","zeroMinWidth",...rr.map(t=>`spacing-xs-${t}`),...or.map(t=>`direction-xs-${t}`),...ir.map(t=>`wrap-xs-${t}`),...dt.map(t=>`grid-xs-${t}`),...dt.map(t=>`grid-sm-${t}`),...dt.map(t=>`grid-md-${t}`),...dt.map(t=>`grid-lg-${t}`),...dt.map(t=>`grid-xl-${t}`)]);function sr({theme:t,ownerState:e}){let n;return t.breakpoints.keys.reduce((a,r)=>{let o={};if(e[r]&&(n=e[r]),!n)return a;if(n===!0)o={flexBasis:0,flexGrow:1,maxWidth:"100%"};else if(n==="auto")o={flexBasis:"auto",flexGrow:0,flexShrink:0,maxWidth:"none",width:"auto"};else{const i=Dt({values:e.columns,breakpoints:t.breakpoints.values}),s=typeof i=="object"?i[r]:i;if(s==null)return a;const f=`${Math.round(n/s*1e8)/1e6}%`;let l={};if(e.container&&e.item&&e.columnSpacing!==0){const d=t.spacing(e.columnSpacing);if(d!=="0px"){const g=`calc(${f} + ${d})`;l={flexBasis:g,maxWidth:g}}}o={flexBasis:f,flexGrow:0,maxWidth:f,...l}}return t.breakpoints.values[r]===0?Object.assign(a,o):a[t.breakpoints.up(r)]=o,a},{})}function lr({theme:t,ownerState:e}){const n=Dt({values:e.direction,breakpoints:t.breakpoints.values});return be({theme:t},n,a=>{const r={flexDirection:a};return a.startsWith("column")&&(r[`& > .${yt.item}`]={maxWidth:"none"}),r})}function wn({breakpoints:t,values:e}){let n="";Object.keys(e).forEach(r=>{n===""&&e[r]!==0&&(n=r)});const a=Object.keys(t).sort((r,o)=>t[r]-t[o]);return a.slice(0,a.indexOf(n))}function cr({theme:t,ownerState:e}){const{container:n,rowSpacing:a}=e;let r={};if(n&&a!==0){const o=Dt({values:a,breakpoints:t.breakpoints.values});let i;typeof o=="object"&&(i=wn({breakpoints:t.breakpoints.values,values:o})),r=be({theme:t},o,(s,f)=>{const l=t.spacing(s);return l!=="0px"?{marginTop:`calc(-1 * ${l})`,[`& > .${yt.item}`]:{paddingTop:l}}:i!=null&&i.includes(f)?{}:{marginTop:0,[`& > .${yt.item}`]:{paddingTop:0}}})}return r}function fr({theme:t,ownerState:e}){const{container:n,columnSpacing:a}=e;let r={};if(n&&a!==0){const o=Dt({values:a,breakpoints:t.breakpoints.values});let i;typeof o=="object"&&(i=wn({breakpoints:t.breakpoints.values,values:o})),r=be({theme:t},o,(s,f)=>{const l=t.spacing(s);if(l!=="0px"){const d=`calc(-1 * ${l})`;return{width:`calc(100% + ${l})`,marginLeft:d,[`& > .${yt.item}`]:{paddingLeft:l}}}return i!=null&&i.includes(f)?{}:{width:"100%",marginLeft:0,[`& > .${yt.item}`]:{paddingLeft:0}}})}return r}function ur(t,e,n={}){if(!t||t<=0)return[];if(typeof t=="string"&&!Number.isNaN(Number(t))||typeof t=="number")return[n[`spacing-xs-${String(t)}`]];const a=[];return e.forEach(r=>{const o=t[r];Number(o)>0&&a.push(n[`spacing-${r}-${String(o)}`])}),a}const dr=X("div",{name:"MuiGrid",slot:"Root",overridesResolver:(t,e)=>{const{ownerState:n}=t,{container:a,direction:r,item:o,spacing:i,wrap:s,zeroMinWidth:f,breakpoints:l}=n;let d=[];a&&(d=ur(i,l,e));const g=[];return l.forEach(m=>{const S=n[m];S&&g.push(e[`grid-${m}-${String(S)}`])}),[e.root,a&&e.container,o&&e.item,f&&e.zeroMinWidth,...d,r!=="row"&&e[`direction-xs-${String(r)}`],s!=="wrap"&&e[`wrap-xs-${String(s)}`],...g]}})(({ownerState:t})=>({boxSizing:"border-box",...t.container&&{display:"flex",flexWrap:"wrap",width:"100%"},...t.item&&{margin:0},...t.zeroMinWidth&&{minWidth:0},...t.wrap!=="wrap"&&{flexWrap:t.wrap}}),lr,cr,fr,sr);function pr(t,e){if(!t||t<=0)return[];if(typeof t=="string"&&!Number.isNaN(Number(t))||typeof t=="number")return[`spacing-xs-${String(t)}`];const n=[];return e.forEach(a=>{const r=t[a];if(Number(r)>0){const o=`spacing-${a}-${String(r)}`;n.push(o)}}),n}const mr=t=>{const{classes:e,container:n,direction:a,item:r,spacing:o,wrap:i,zeroMinWidth:s,breakpoints:f}=t;let l=[];n&&(l=pr(o,f));const d=[];f.forEach(m=>{const S=t[m];S&&d.push(`grid-${m}-${String(S)}`)});const g={root:["root",n&&"container",r&&"item",s&&"zeroMinWidth",...l,a!=="row"&&`direction-xs-${String(a)}`,i!=="wrap"&&`wrap-xs-${String(i)}`,...d]};return Mt(g,ar,e)},_e=P.forwardRef(function(e,n){const a=jt({props:e,name:"MuiGrid"}),{breakpoints:r}=bn(),o=Na(a),{className:i,columns:s,columnSpacing:f,component:l="div",container:d=!1,direction:g="row",item:m=!1,rowSpacing:S,spacing:w=0,wrap:b="wrap",zeroMinWidth:x=!1,...y}=o,p=S||w,v=f||w,A=P.useContext(Fe),C=d?s||12:A,T={},D={...y};r.keys.forEach(E=>{y[E]!=null&&(T[E]=y[E],delete D[E])});const U={...o,columns:C,container:d,direction:g,item:m,rowSpacing:p,columnSpacing:v,wrap:b,zeroMinWidth:x,spacing:w,...T,breakpoints:r.keys},ct=mr(U);return c.jsx(Fe.Provider,{value:C,children:c.jsx(dr,{ownerState:U,className:ot(ct.root,i),as:l,ref:n,...D})})}),gr="/inotes/assets/ohho-CKLdeVfI.jpg";/*!
 * Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */function hr(t,e,n){return(e=yr(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function Re(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter(function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable})),n.push.apply(n,a)}return n}function u(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?Re(Object(n),!0).forEach(function(a){hr(t,a,n[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Re(Object(n)).forEach(function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(n,a))})}return t}function br(t,e){if(typeof t!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var a=n.call(t,e);if(typeof a!="object")return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function yr(t){var e=br(t,"string");return typeof e=="symbol"?e:e+""}const ze=()=>{};let ye={},kn={},An=null,Cn={mark:ze,measure:ze};try{typeof window<"u"&&(ye=window),typeof document<"u"&&(kn=document),typeof MutationObserver<"u"&&(An=MutationObserver),typeof performance<"u"&&(Cn=performance)}catch{}const{userAgent:Le=""}=ye.navigator||{},G=ye,I=kn,We=An,kt=Cn;G.document;const B=!!I.documentElement&&!!I.head&&typeof I.addEventListener=="function"&&typeof I.createElement=="function",Pn=~Le.indexOf("MSIE")||~Le.indexOf("Trident/");var vr=/fa(s|r|l|t|d|dr|dl|dt|b|k|kd|ss|sr|sl|st|sds|sdr|sdl|sdt)?[\-\ ]/,xr=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit)?.*/i,In={classic:{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fab:"brands","fa-brands":"brands"},duotone:{fa:"solid",fad:"solid","fa-solid":"solid","fa-duotone":"solid",fadr:"regular","fa-regular":"regular",fadl:"light","fa-light":"light",fadt:"thin","fa-thin":"thin"},sharp:{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"},"sharp-duotone":{fa:"solid",fasds:"solid","fa-solid":"solid",fasdr:"regular","fa-regular":"regular",fasdl:"light","fa-light":"light",fasdt:"thin","fa-thin":"thin"}},Sr={GROUP:"duotone-group",PRIMARY:"primary",SECONDARY:"secondary"},On=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone"],N="classic",Ft="duotone",wr="sharp",kr="sharp-duotone",En=[N,Ft,wr,kr],Ar={classic:{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},duotone:{900:"fad",400:"fadr",300:"fadl",100:"fadt"},sharp:{900:"fass",400:"fasr",300:"fasl",100:"fast"},"sharp-duotone":{900:"fasds",400:"fasdr",300:"fasdl",100:"fasdt"}},Cr={"Font Awesome 6 Free":{900:"fas",400:"far"},"Font Awesome 6 Pro":{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},"Font Awesome 6 Brands":{400:"fab",normal:"fab"},"Font Awesome 6 Duotone":{900:"fad",400:"fadr",normal:"fadr",300:"fadl",100:"fadt"},"Font Awesome 6 Sharp":{900:"fass",400:"fasr",normal:"fasr",300:"fasl",100:"fast"},"Font Awesome 6 Sharp Duotone":{900:"fasds",400:"fasdr",normal:"fasdr",300:"fasdl",100:"fasdt"}},Pr=new Map([["classic",{defaultShortPrefixId:"fas",defaultStyleId:"solid",styleIds:["solid","regular","light","thin","brands"],futureStyleIds:[],defaultFontWeight:900}],["sharp",{defaultShortPrefixId:"fass",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["duotone",{defaultShortPrefixId:"fad",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["sharp-duotone",{defaultShortPrefixId:"fasds",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}]]),Ir={classic:{solid:"fas",regular:"far",light:"fal",thin:"fat",brands:"fab"},duotone:{solid:"fad",regular:"fadr",light:"fadl",thin:"fadt"},sharp:{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"},"sharp-duotone":{solid:"fasds",regular:"fasdr",light:"fasdl",thin:"fasdt"}},Or=["fak","fa-kit","fakd","fa-kit-duotone"],$e={kit:{fak:"kit","fa-kit":"kit"},"kit-duotone":{fakd:"kit-duotone","fa-kit-duotone":"kit-duotone"}},Er=["kit"],Nr={kit:{"fa-kit":"fak"}},Tr=["fak","fakd"],jr={kit:{fak:"fa-kit"}},Be={kit:{kit:"fak"},"kit-duotone":{"kit-duotone":"fakd"}},At={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},Mr=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone"],Dr=["fak","fa-kit","fakd","fa-kit-duotone"],Fr={"Font Awesome Kit":{400:"fak",normal:"fak"},"Font Awesome Kit Duotone":{400:"fakd",normal:"fakd"}},_r={classic:{"fa-brands":"fab","fa-duotone":"fad","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},duotone:{"fa-regular":"fadr","fa-light":"fadl","fa-thin":"fadt"},sharp:{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"},"sharp-duotone":{"fa-solid":"fasds","fa-regular":"fasdr","fa-light":"fasdl","fa-thin":"fasdt"}},Rr={classic:["fas","far","fal","fat","fad"],duotone:["fadr","fadl","fadt"],sharp:["fass","fasr","fasl","fast"],"sharp-duotone":["fasds","fasdr","fasdl","fasdt"]},Zt={classic:{fab:"fa-brands",fad:"fa-duotone",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},duotone:{fadr:"fa-regular",fadl:"fa-light",fadt:"fa-thin"},sharp:{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"},"sharp-duotone":{fasds:"fa-solid",fasdr:"fa-regular",fasdl:"fa-light",fasdt:"fa-thin"}},zr=["fa-solid","fa-regular","fa-light","fa-thin","fa-duotone","fa-brands"],Jt=["fa","fas","far","fal","fat","fad","fadr","fadl","fadt","fab","fass","fasr","fasl","fast","fasds","fasdr","fasdl","fasdt",...Mr,...zr],Lr=["solid","regular","light","thin","duotone","brands"],Nn=[1,2,3,4,5,6,7,8,9,10],Wr=Nn.concat([11,12,13,14,15,16,17,18,19,20]),$r=[...Object.keys(Rr),...Lr,"2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",At.GROUP,At.SWAP_OPACITY,At.PRIMARY,At.SECONDARY].concat(Nn.map(t=>"".concat(t,"x"))).concat(Wr.map(t=>"w-".concat(t))),Br={"Font Awesome 5 Free":{900:"fas",400:"far"},"Font Awesome 5 Pro":{900:"fas",400:"far",normal:"far",300:"fal"},"Font Awesome 5 Brands":{400:"fab",normal:"fab"},"Font Awesome 5 Duotone":{900:"fad"}};const W="___FONT_AWESOME___",te=16,Tn="fa",jn="svg-inline--fa",q="data-fa-i2svg",ee="data-fa-pseudo-element",Ur="data-fa-pseudo-element-pending",ve="data-prefix",xe="data-icon",Ue="fontawesome-i2svg",Yr="async",Gr=["HTML","HEAD","STYLE","SCRIPT"],Mn=(()=>{try{return!0}catch{return!1}})();function St(t){return new Proxy(t,{get(e,n){return n in e?e[n]:e[N]}})}const Dn=u({},In);Dn[N]=u(u(u(u({},{"fa-duotone":"duotone"}),In[N]),$e.kit),$e["kit-duotone"]);const Hr=St(Dn),ne=u({},Ir);ne[N]=u(u(u(u({},{duotone:"fad"}),ne[N]),Be.kit),Be["kit-duotone"]);const Ye=St(ne),ae=u({},Zt);ae[N]=u(u({},ae[N]),jr.kit);const Se=St(ae),re=u({},_r);re[N]=u(u({},re[N]),Nr.kit);St(re);const Vr=vr,Fn="fa-layers-text",Xr=xr,Kr=u({},Ar);St(Kr);const qr=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],Yt=Sr,Qr=[...Er,...$r],ht=G.FontAwesomeConfig||{};function Zr(t){var e=I.querySelector("script["+t+"]");if(e)return e.getAttribute(t)}function Jr(t){return t===""?!0:t==="false"?!1:t==="true"?!0:t}I&&typeof I.querySelector=="function"&&[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]].forEach(e=>{let[n,a]=e;const r=Jr(Zr(n));r!=null&&(ht[a]=r)});const _n={styleDefault:"solid",familyDefault:N,cssPrefix:Tn,replacementClass:jn,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};ht.familyPrefix&&(ht.cssPrefix=ht.familyPrefix);const st=u(u({},_n),ht);st.autoReplaceSvg||(st.observeMutations=!1);const h={};Object.keys(_n).forEach(t=>{Object.defineProperty(h,t,{enumerable:!0,set:function(e){st[t]=e,bt.forEach(n=>n(h))},get:function(){return st[t]}})});Object.defineProperty(h,"familyPrefix",{enumerable:!0,set:function(t){st.cssPrefix=t,bt.forEach(e=>e(h))},get:function(){return st.cssPrefix}});G.FontAwesomeConfig=h;const bt=[];function to(t){return bt.push(t),()=>{bt.splice(bt.indexOf(t),1)}}const Y=te,z={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function eo(t){if(!t||!B)return;const e=I.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=t;const n=I.head.childNodes;let a=null;for(let r=n.length-1;r>-1;r--){const o=n[r],i=(o.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(i)>-1&&(a=o)}return I.head.insertBefore(e,a),t}const no="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function vt(){let t=12,e="";for(;t-- >0;)e+=no[Math.random()*62|0];return e}function lt(t){const e=[];for(let n=(t||[]).length>>>0;n--;)e[n]=t[n];return e}function we(t){return t.classList?lt(t.classList):(t.getAttribute("class")||"").split(" ").filter(e=>e)}function Rn(t){return"".concat(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function ao(t){return Object.keys(t||{}).reduce((e,n)=>e+"".concat(n,'="').concat(Rn(t[n]),'" '),"").trim()}function _t(t){return Object.keys(t||{}).reduce((e,n)=>e+"".concat(n,": ").concat(t[n].trim(),";"),"")}function ke(t){return t.size!==z.size||t.x!==z.x||t.y!==z.y||t.rotate!==z.rotate||t.flipX||t.flipY}function ro(t){let{transform:e,containerWidth:n,iconWidth:a}=t;const r={transform:"translate(".concat(n/2," 256)")},o="translate(".concat(e.x*32,", ").concat(e.y*32,") "),i="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),s="rotate(".concat(e.rotate," 0 0)"),f={transform:"".concat(o," ").concat(i," ").concat(s)},l={transform:"translate(".concat(a/2*-1," -256)")};return{outer:r,inner:f,path:l}}function oo(t){let{transform:e,width:n=te,height:a=te,startCentered:r=!1}=t,o="";return r&&Pn?o+="translate(".concat(e.x/Y-n/2,"em, ").concat(e.y/Y-a/2,"em) "):r?o+="translate(calc(-50% + ".concat(e.x/Y,"em), calc(-50% + ").concat(e.y/Y,"em)) "):o+="translate(".concat(e.x/Y,"em, ").concat(e.y/Y,"em) "),o+="scale(".concat(e.size/Y*(e.flipX?-1:1),", ").concat(e.size/Y*(e.flipY?-1:1),") "),o+="rotate(".concat(e.rotate,"deg) "),o}var io=`:root, :host {
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
}`;function zn(){const t=Tn,e=jn,n=h.cssPrefix,a=h.replacementClass;let r=io;if(n!==t||a!==e){const o=new RegExp("\\.".concat(t,"\\-"),"g"),i=new RegExp("\\--".concat(t,"\\-"),"g"),s=new RegExp("\\.".concat(e),"g");r=r.replace(o,".".concat(n,"-")).replace(i,"--".concat(n,"-")).replace(s,".".concat(a))}return r}let Ge=!1;function Gt(){h.autoAddCss&&!Ge&&(eo(zn()),Ge=!0)}var so={mixout(){return{dom:{css:zn,insertCss:Gt}}},hooks(){return{beforeDOMElementCreation(){Gt()},beforeI2svg(){Gt()}}}};const $=G||{};$[W]||($[W]={});$[W].styles||($[W].styles={});$[W].hooks||($[W].hooks={});$[W].shims||($[W].shims=[]);var L=$[W];const Ln=[],Wn=function(){I.removeEventListener("DOMContentLoaded",Wn),It=1,Ln.map(t=>t())};let It=!1;B&&(It=(I.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(I.readyState),It||I.addEventListener("DOMContentLoaded",Wn));function lo(t){B&&(It?setTimeout(t,0):Ln.push(t))}function wt(t){const{tag:e,attributes:n={},children:a=[]}=t;return typeof t=="string"?Rn(t):"<".concat(e," ").concat(ao(n),">").concat(a.map(wt).join(""),"</").concat(e,">")}function He(t,e,n){if(t&&t[e]&&t[e][n])return{prefix:e,iconName:n,icon:t[e][n]}}var Ht=function(e,n,a,r){var o=Object.keys(e),i=o.length,s=n,f,l,d;for(a===void 0?(f=1,d=e[o[0]]):(f=0,d=a);f<i;f++)l=o[f],d=s(d,e[l],l,e);return d};function co(t){const e=[];let n=0;const a=t.length;for(;n<a;){const r=t.charCodeAt(n++);if(r>=55296&&r<=56319&&n<a){const o=t.charCodeAt(n++);(o&64512)==56320?e.push(((r&1023)<<10)+(o&1023)+65536):(e.push(r),n--)}else e.push(r)}return e}function oe(t){const e=co(t);return e.length===1?e[0].toString(16):null}function fo(t,e){const n=t.length;let a=t.charCodeAt(e),r;return a>=55296&&a<=56319&&n>e+1&&(r=t.charCodeAt(e+1),r>=56320&&r<=57343)?(a-55296)*1024+r-56320+65536:a}function Ve(t){return Object.keys(t).reduce((e,n)=>{const a=t[n];return!!a.icon?e[a.iconName]=a.icon:e[n]=a,e},{})}function ie(t,e){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};const{skipHooks:a=!1}=n,r=Ve(e);typeof L.hooks.addPack=="function"&&!a?L.hooks.addPack(t,Ve(e)):L.styles[t]=u(u({},L.styles[t]||{}),r),t==="fas"&&ie("fa",e)}const{styles:xt,shims:uo}=L,$n=Object.keys(Se),po=$n.reduce((t,e)=>(t[e]=Object.keys(Se[e]),t),{});let Ae=null,Bn={},Un={},Yn={},Gn={},Hn={};function mo(t){return~Qr.indexOf(t)}function go(t,e){const n=e.split("-"),a=n[0],r=n.slice(1).join("-");return a===t&&r!==""&&!mo(r)?r:null}const Vn=()=>{const t=a=>Ht(xt,(r,o,i)=>(r[i]=Ht(o,a,{}),r),{});Bn=t((a,r,o)=>(r[3]&&(a[r[3]]=o),r[2]&&r[2].filter(s=>typeof s=="number").forEach(s=>{a[s.toString(16)]=o}),a)),Un=t((a,r,o)=>(a[o]=o,r[2]&&r[2].filter(s=>typeof s=="string").forEach(s=>{a[s]=o}),a)),Hn=t((a,r,o)=>{const i=r[2];return a[o]=o,i.forEach(s=>{a[s]=o}),a});const e="far"in xt||h.autoFetchSvg,n=Ht(uo,(a,r)=>{const o=r[0];let i=r[1];const s=r[2];return i==="far"&&!e&&(i="fas"),typeof o=="string"&&(a.names[o]={prefix:i,iconName:s}),typeof o=="number"&&(a.unicodes[o.toString(16)]={prefix:i,iconName:s}),a},{names:{},unicodes:{}});Yn=n.names,Gn=n.unicodes,Ae=Rt(h.styleDefault,{family:h.familyDefault})};to(t=>{Ae=Rt(t.styleDefault,{family:h.familyDefault})});Vn();function Ce(t,e){return(Bn[t]||{})[e]}function ho(t,e){return(Un[t]||{})[e]}function K(t,e){return(Hn[t]||{})[e]}function Xn(t){return Yn[t]||{prefix:null,iconName:null}}function bo(t){const e=Gn[t],n=Ce("fas",t);return e||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function H(){return Ae}const Kn=()=>({prefix:null,iconName:null,rest:[]});function yo(t){let e=N;const n=$n.reduce((a,r)=>(a[r]="".concat(h.cssPrefix,"-").concat(r),a),{});return En.forEach(a=>{(t.includes(n[a])||t.some(r=>po[a].includes(r)))&&(e=a)}),e}function Rt(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{family:n=N}=e,a=Hr[n][t];if(n===Ft&&!t)return"fad";const r=Ye[n][t]||Ye[n][a],o=t in L.styles?t:null;return r||o||null}function vo(t){let e=[],n=null;return t.forEach(a=>{const r=go(h.cssPrefix,a);r?n=r:a&&e.push(a)}),{iconName:n,rest:e}}function Xe(t){return t.sort().filter((e,n,a)=>a.indexOf(e)===n)}function zt(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{skipLookups:n=!1}=e;let a=null;const r=Jt.concat(Dr),o=Xe(t.filter(g=>r.includes(g))),i=Xe(t.filter(g=>!Jt.includes(g))),s=o.filter(g=>(a=g,!On.includes(g))),[f=null]=s,l=yo(o),d=u(u({},vo(i)),{},{prefix:Rt(f,{family:l})});return u(u(u({},d),ko({values:t,family:l,styles:xt,config:h,canonical:d,givenPrefix:a})),xo(n,a,d))}function xo(t,e,n){let{prefix:a,iconName:r}=n;if(t||!a||!r)return{prefix:a,iconName:r};const o=e==="fa"?Xn(r):{},i=K(a,r);return r=o.iconName||i||r,a=o.prefix||a,a==="far"&&!xt.far&&xt.fas&&!h.autoFetchSvg&&(a="fas"),{prefix:a,iconName:r}}const So=En.filter(t=>t!==N||t!==Ft),wo=Object.keys(Zt).filter(t=>t!==N).map(t=>Object.keys(Zt[t])).flat();function ko(t){const{values:e,family:n,canonical:a,givenPrefix:r="",styles:o={},config:i={}}=t,s=n===Ft,f=e.includes("fa-duotone")||e.includes("fad"),l=i.familyDefault==="duotone",d=a.prefix==="fad"||a.prefix==="fa-duotone";if(!s&&(f||l||d)&&(a.prefix="fad"),(e.includes("fa-brands")||e.includes("fab"))&&(a.prefix="fab"),!a.prefix&&So.includes(n)&&(Object.keys(o).find(m=>wo.includes(m))||i.autoFetchSvg)){const m=Pr.get(n).defaultShortPrefixId;a.prefix=m,a.iconName=K(a.prefix,a.iconName)||a.iconName}return(a.prefix==="fa"||r==="fa")&&(a.prefix=H()||"fas"),a}class Ao{constructor(){this.definitions={}}add(){for(var e=arguments.length,n=new Array(e),a=0;a<e;a++)n[a]=arguments[a];const r=n.reduce(this._pullDefinitions,{});Object.keys(r).forEach(o=>{this.definitions[o]=u(u({},this.definitions[o]||{}),r[o]),ie(o,r[o]);const i=Se[N][o];i&&ie(i,r[o]),Vn()})}reset(){this.definitions={}}_pullDefinitions(e,n){const a=n.prefix&&n.iconName&&n.icon?{0:n}:n;return Object.keys(a).map(r=>{const{prefix:o,iconName:i,icon:s}=a[r],f=s[2];e[o]||(e[o]={}),f.length>0&&f.forEach(l=>{typeof l=="string"&&(e[o][l]=s)}),e[o][i]=s}),e}}let Ke=[],at={};const it={},Co=Object.keys(it);function Po(t,e){let{mixoutsTo:n}=e;return Ke=t,at={},Object.keys(it).forEach(a=>{Co.indexOf(a)===-1&&delete it[a]}),Ke.forEach(a=>{const r=a.mixout?a.mixout():{};if(Object.keys(r).forEach(o=>{typeof r[o]=="function"&&(n[o]=r[o]),typeof r[o]=="object"&&Object.keys(r[o]).forEach(i=>{n[o]||(n[o]={}),n[o][i]=r[o][i]})}),a.hooks){const o=a.hooks();Object.keys(o).forEach(i=>{at[i]||(at[i]=[]),at[i].push(o[i])})}a.provides&&a.provides(it)}),n}function se(t,e){for(var n=arguments.length,a=new Array(n>2?n-2:0),r=2;r<n;r++)a[r-2]=arguments[r];return(at[t]||[]).forEach(i=>{e=i.apply(null,[e,...a])}),e}function Q(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),a=1;a<e;a++)n[a-1]=arguments[a];(at[t]||[]).forEach(o=>{o.apply(null,n)})}function V(){const t=arguments[0],e=Array.prototype.slice.call(arguments,1);return it[t]?it[t].apply(null,e):void 0}function le(t){t.prefix==="fa"&&(t.prefix="fas");let{iconName:e}=t;const n=t.prefix||H();if(e)return e=K(n,e)||e,He(qn.definitions,n,e)||He(L.styles,n,e)}const qn=new Ao,Io=()=>{h.autoReplaceSvg=!1,h.observeMutations=!1,Q("noAuto")},Oo={i2svg:function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return B?(Q("beforeI2svg",t),V("pseudoElements2svg",t),V("i2svg",t)):Promise.reject(new Error("Operation requires a DOM of some kind."))},watch:function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:e}=t;h.autoReplaceSvg===!1&&(h.autoReplaceSvg=!0),h.observeMutations=!0,lo(()=>{No({autoReplaceSvgRoot:e}),Q("watch",t)})}},Eo={icon:t=>{if(t===null)return null;if(typeof t=="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:K(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){const e=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],n=Rt(t[0]);return{prefix:n,iconName:K(n,e)||e}}if(typeof t=="string"&&(t.indexOf("".concat(h.cssPrefix,"-"))>-1||t.match(Vr))){const e=zt(t.split(" "),{skipLookups:!0});return{prefix:e.prefix||H(),iconName:K(e.prefix,e.iconName)||e.iconName}}if(typeof t=="string"){const e=H();return{prefix:e,iconName:K(e,t)||t}}}},M={noAuto:Io,config:h,dom:Oo,parse:Eo,library:qn,findIconDefinition:le,toHtml:wt},No=function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:e=I}=t;(Object.keys(L.styles).length>0||h.autoFetchSvg)&&B&&h.autoReplaceSvg&&M.dom.i2svg({node:e})};function Lt(t,e){return Object.defineProperty(t,"abstract",{get:e}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map(n=>wt(n))}}),Object.defineProperty(t,"node",{get:function(){if(!B)return;const n=I.createElement("div");return n.innerHTML=t.html,n.children}}),t}function To(t){let{children:e,main:n,mask:a,attributes:r,styles:o,transform:i}=t;if(ke(i)&&n.found&&!a.found){const{width:s,height:f}=n,l={x:s/f/2,y:.5};r.style=_t(u(u({},o),{},{"transform-origin":"".concat(l.x+i.x/16,"em ").concat(l.y+i.y/16,"em")}))}return[{tag:"svg",attributes:r,children:e}]}function jo(t){let{prefix:e,iconName:n,children:a,attributes:r,symbol:o}=t;const i=o===!0?"".concat(e,"-").concat(h.cssPrefix,"-").concat(n):o;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:u(u({},r),{},{id:i}),children:a}]}]}function Pe(t){const{icons:{main:e,mask:n},prefix:a,iconName:r,transform:o,symbol:i,title:s,maskId:f,titleId:l,extra:d,watchable:g=!1}=t,{width:m,height:S}=n.found?n:e,w=Tr.includes(a),b=[h.replacementClass,r?"".concat(h.cssPrefix,"-").concat(r):""].filter(C=>d.classes.indexOf(C)===-1).filter(C=>C!==""||!!C).concat(d.classes).join(" ");let x={children:[],attributes:u(u({},d.attributes),{},{"data-prefix":a,"data-icon":r,class:b,role:d.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(m," ").concat(S)})};const y=w&&!~d.classes.indexOf("fa-fw")?{width:"".concat(m/S*16*.0625,"em")}:{};g&&(x.attributes[q]=""),s&&(x.children.push({tag:"title",attributes:{id:x.attributes["aria-labelledby"]||"title-".concat(l||vt())},children:[s]}),delete x.attributes.title);const p=u(u({},x),{},{prefix:a,iconName:r,main:e,mask:n,maskId:f,transform:o,symbol:i,styles:u(u({},y),d.styles)}),{children:v,attributes:A}=n.found&&e.found?V("generateAbstractMask",p)||{children:[],attributes:{}}:V("generateAbstractIcon",p)||{children:[],attributes:{}};return p.children=v,p.attributes=A,i?jo(p):To(p)}function qe(t){const{content:e,width:n,height:a,transform:r,title:o,extra:i,watchable:s=!1}=t,f=u(u(u({},i.attributes),o?{title:o}:{}),{},{class:i.classes.join(" ")});s&&(f[q]="");const l=u({},i.styles);ke(r)&&(l.transform=oo({transform:r,startCentered:!0,width:n,height:a}),l["-webkit-transform"]=l.transform);const d=_t(l);d.length>0&&(f.style=d);const g=[];return g.push({tag:"span",attributes:f,children:[e]}),o&&g.push({tag:"span",attributes:{class:"sr-only"},children:[o]}),g}function Mo(t){const{content:e,title:n,extra:a}=t,r=u(u(u({},a.attributes),n?{title:n}:{}),{},{class:a.classes.join(" ")}),o=_t(a.styles);o.length>0&&(r.style=o);const i=[];return i.push({tag:"span",attributes:r,children:[e]}),n&&i.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),i}const{styles:Vt}=L;function ce(t){const e=t[0],n=t[1],[a]=t.slice(4);let r=null;return Array.isArray(a)?r={tag:"g",attributes:{class:"".concat(h.cssPrefix,"-").concat(Yt.GROUP)},children:[{tag:"path",attributes:{class:"".concat(h.cssPrefix,"-").concat(Yt.SECONDARY),fill:"currentColor",d:a[0]}},{tag:"path",attributes:{class:"".concat(h.cssPrefix,"-").concat(Yt.PRIMARY),fill:"currentColor",d:a[1]}}]}:r={tag:"path",attributes:{fill:"currentColor",d:a}},{found:!0,width:e,height:n,icon:r}}const Do={found:!1,width:512,height:512};function Fo(t,e){!Mn&&!h.showMissingIcons&&t&&console.error('Icon with name "'.concat(t,'" and prefix "').concat(e,'" is missing.'))}function fe(t,e){let n=e;return e==="fa"&&h.styleDefault!==null&&(e=H()),new Promise((a,r)=>{if(n==="fa"){const o=Xn(t)||{};t=o.iconName||t,e=o.prefix||e}if(t&&e&&Vt[e]&&Vt[e][t]){const o=Vt[e][t];return a(ce(o))}Fo(t,e),a(u(u({},Do),{},{icon:h.showMissingIcons&&t?V("missingIconAbstract")||{}:{}}))})}const Qe=()=>{},ue=h.measurePerformance&&kt&&kt.mark&&kt.measure?kt:{mark:Qe,measure:Qe},pt='FA "6.7.2"',_o=t=>(ue.mark("".concat(pt," ").concat(t," begins")),()=>Qn(t)),Qn=t=>{ue.mark("".concat(pt," ").concat(t," ends")),ue.measure("".concat(pt," ").concat(t),"".concat(pt," ").concat(t," begins"),"".concat(pt," ").concat(t," ends"))};var Ie={begin:_o,end:Qn};const Ct=()=>{};function Ze(t){return typeof(t.getAttribute?t.getAttribute(q):null)=="string"}function Ro(t){const e=t.getAttribute?t.getAttribute(ve):null,n=t.getAttribute?t.getAttribute(xe):null;return e&&n}function zo(t){return t&&t.classList&&t.classList.contains&&t.classList.contains(h.replacementClass)}function Lo(){return h.autoReplaceSvg===!0?Pt.replace:Pt[h.autoReplaceSvg]||Pt.replace}function Wo(t){return I.createElementNS("http://www.w3.org/2000/svg",t)}function $o(t){return I.createElement(t)}function Zn(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{ceFn:n=t.tag==="svg"?Wo:$o}=e;if(typeof t=="string")return I.createTextNode(t);const a=n(t.tag);return Object.keys(t.attributes||[]).forEach(function(o){a.setAttribute(o,t.attributes[o])}),(t.children||[]).forEach(function(o){a.appendChild(Zn(o,{ceFn:n}))}),a}function Bo(t){let e=" ".concat(t.outerHTML," ");return e="".concat(e,"Font Awesome fontawesome.com "),e}const Pt={replace:function(t){const e=t[0];if(e.parentNode)if(t[1].forEach(n=>{e.parentNode.insertBefore(Zn(n),e)}),e.getAttribute(q)===null&&h.keepOriginalSource){let n=I.createComment(Bo(e));e.parentNode.replaceChild(n,e)}else e.remove()},nest:function(t){const e=t[0],n=t[1];if(~we(e).indexOf(h.replacementClass))return Pt.replace(t);const a=new RegExp("".concat(h.cssPrefix,"-.*"));if(delete n[0].attributes.id,n[0].attributes.class){const o=n[0].attributes.class.split(" ").reduce((i,s)=>(s===h.replacementClass||s.match(a)?i.toSvg.push(s):i.toNode.push(s),i),{toNode:[],toSvg:[]});n[0].attributes.class=o.toSvg.join(" "),o.toNode.length===0?e.removeAttribute("class"):e.setAttribute("class",o.toNode.join(" "))}const r=n.map(o=>wt(o)).join(`
`);e.setAttribute(q,""),e.innerHTML=r}};function Je(t){t()}function Jn(t,e){const n=typeof e=="function"?e:Ct;if(t.length===0)n();else{let a=Je;h.mutateApproach===Yr&&(a=G.requestAnimationFrame||Je),a(()=>{const r=Lo(),o=Ie.begin("mutate");t.map(r),o(),n()})}}let Oe=!1;function ta(){Oe=!0}function de(){Oe=!1}let Ot=null;function tn(t){if(!We||!h.observeMutations)return;const{treeCallback:e=Ct,nodeCallback:n=Ct,pseudoElementsCallback:a=Ct,observeMutationsRoot:r=I}=t;Ot=new We(o=>{if(Oe)return;const i=H();lt(o).forEach(s=>{if(s.type==="childList"&&s.addedNodes.length>0&&!Ze(s.addedNodes[0])&&(h.searchPseudoElements&&a(s.target),e(s.target)),s.type==="attributes"&&s.target.parentNode&&h.searchPseudoElements&&a(s.target.parentNode),s.type==="attributes"&&Ze(s.target)&&~qr.indexOf(s.attributeName))if(s.attributeName==="class"&&Ro(s.target)){const{prefix:f,iconName:l}=zt(we(s.target));s.target.setAttribute(ve,f||i),l&&s.target.setAttribute(xe,l)}else zo(s.target)&&n(s.target)})}),B&&Ot.observe(r,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}function Uo(){Ot&&Ot.disconnect()}function Yo(t){const e=t.getAttribute("style");let n=[];return e&&(n=e.split(";").reduce((a,r)=>{const o=r.split(":"),i=o[0],s=o.slice(1);return i&&s.length>0&&(a[i]=s.join(":").trim()),a},{})),n}function Go(t){const e=t.getAttribute("data-prefix"),n=t.getAttribute("data-icon"),a=t.innerText!==void 0?t.innerText.trim():"";let r=zt(we(t));return r.prefix||(r.prefix=H()),e&&n&&(r.prefix=e,r.iconName=n),r.iconName&&r.prefix||(r.prefix&&a.length>0&&(r.iconName=ho(r.prefix,t.innerText)||Ce(r.prefix,oe(t.innerText))),!r.iconName&&h.autoFetchSvg&&t.firstChild&&t.firstChild.nodeType===Node.TEXT_NODE&&(r.iconName=t.firstChild.data)),r}function Ho(t){const e=lt(t.attributes).reduce((r,o)=>(r.name!=="class"&&r.name!=="style"&&(r[o.name]=o.value),r),{}),n=t.getAttribute("title"),a=t.getAttribute("data-fa-title-id");return h.autoA11y&&(n?e["aria-labelledby"]="".concat(h.replacementClass,"-title-").concat(a||vt()):(e["aria-hidden"]="true",e.focusable="false")),e}function Vo(){return{iconName:null,title:null,titleId:null,prefix:null,transform:z,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function en(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0};const{iconName:n,prefix:a,rest:r}=Go(t),o=Ho(t),i=se("parseNodeAttributes",{},t);let s=e.styleParser?Yo(t):[];return u({iconName:n,title:t.getAttribute("title"),titleId:t.getAttribute("data-fa-title-id"),prefix:a,transform:z,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:r,styles:s,attributes:o}},i)}const{styles:Xo}=L;function ea(t){const e=h.autoReplaceSvg==="nest"?en(t,{styleParser:!1}):en(t);return~e.extra.classes.indexOf(Fn)?V("generateLayersText",t,e):V("generateSvgReplacementMutation",t,e)}function Ko(){return[...Or,...Jt]}function nn(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!B)return Promise.resolve();const n=I.documentElement.classList,a=d=>n.add("".concat(Ue,"-").concat(d)),r=d=>n.remove("".concat(Ue,"-").concat(d)),o=h.autoFetchSvg?Ko():On.concat(Object.keys(Xo));o.includes("fa")||o.push("fa");const i=[".".concat(Fn,":not([").concat(q,"])")].concat(o.map(d=>".".concat(d,":not([").concat(q,"])"))).join(", ");if(i.length===0)return Promise.resolve();let s=[];try{s=lt(t.querySelectorAll(i))}catch{}if(s.length>0)a("pending"),r("complete");else return Promise.resolve();const f=Ie.begin("onTree"),l=s.reduce((d,g)=>{try{const m=ea(g);m&&d.push(m)}catch(m){Mn||m.name==="MissingIcon"&&console.error(m)}return d},[]);return new Promise((d,g)=>{Promise.all(l).then(m=>{Jn(m,()=>{a("active"),a("complete"),r("pending"),typeof e=="function"&&e(),f(),d()})}).catch(m=>{f(),g(m)})})}function qo(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;ea(t).then(n=>{n&&Jn([n],e)})}function Qo(t){return function(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const a=(e||{}).icon?e:le(e||{});let{mask:r}=n;return r&&(r=(r||{}).icon?r:le(r||{})),t(a,u(u({},n),{},{mask:r}))}}const Zo=function(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:n=z,symbol:a=!1,mask:r=null,maskId:o=null,title:i=null,titleId:s=null,classes:f=[],attributes:l={},styles:d={}}=e;if(!t)return;const{prefix:g,iconName:m,icon:S}=t;return Lt(u({type:"icon"},t),()=>(Q("beforeDOMElementCreation",{iconDefinition:t,params:e}),h.autoA11y&&(i?l["aria-labelledby"]="".concat(h.replacementClass,"-title-").concat(s||vt()):(l["aria-hidden"]="true",l.focusable="false")),Pe({icons:{main:ce(S),mask:r?ce(r.icon):{found:!1,width:null,height:null,icon:{}}},prefix:g,iconName:m,transform:u(u({},z),n),symbol:a,title:i,maskId:o,titleId:s,extra:{attributes:l,styles:d,classes:f}})))};var Jo={mixout(){return{icon:Qo(Zo)}},hooks(){return{mutationObserverCallbacks(t){return t.treeCallback=nn,t.nodeCallback=qo,t}}},provides(t){t.i2svg=function(e){const{node:n=I,callback:a=()=>{}}=e;return nn(n,a)},t.generateSvgReplacementMutation=function(e,n){const{iconName:a,title:r,titleId:o,prefix:i,transform:s,symbol:f,mask:l,maskId:d,extra:g}=n;return new Promise((m,S)=>{Promise.all([fe(a,i),l.iconName?fe(l.iconName,l.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(w=>{let[b,x]=w;m([e,Pe({icons:{main:b,mask:x},prefix:i,iconName:a,transform:s,symbol:f,maskId:d,title:r,titleId:o,extra:g,watchable:!0})])}).catch(S)})},t.generateAbstractIcon=function(e){let{children:n,attributes:a,main:r,transform:o,styles:i}=e;const s=_t(i);s.length>0&&(a.style=s);let f;return ke(o)&&(f=V("generateAbstractTransformGrouping",{main:r,transform:o,containerWidth:r.width,iconWidth:r.width})),n.push(f||r.icon),{children:n,attributes:a}}}},ti={mixout(){return{layer(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{classes:n=[]}=e;return Lt({type:"layer"},()=>{Q("beforeDOMElementCreation",{assembler:t,params:e});let a=[];return t(r=>{Array.isArray(r)?r.map(o=>{a=a.concat(o.abstract)}):a=a.concat(r.abstract)}),[{tag:"span",attributes:{class:["".concat(h.cssPrefix,"-layers"),...n].join(" ")},children:a}]})}}}},ei={mixout(){return{counter(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{title:n=null,classes:a=[],attributes:r={},styles:o={}}=e;return Lt({type:"counter",content:t},()=>(Q("beforeDOMElementCreation",{content:t,params:e}),Mo({content:t.toString(),title:n,extra:{attributes:r,styles:o,classes:["".concat(h.cssPrefix,"-layers-counter"),...a]}})))}}}},ni={mixout(){return{text(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:n=z,title:a=null,classes:r=[],attributes:o={},styles:i={}}=e;return Lt({type:"text",content:t},()=>(Q("beforeDOMElementCreation",{content:t,params:e}),qe({content:t,transform:u(u({},z),n),title:a,extra:{attributes:o,styles:i,classes:["".concat(h.cssPrefix,"-layers-text"),...r]}})))}}},provides(t){t.generateLayersText=function(e,n){const{title:a,transform:r,extra:o}=n;let i=null,s=null;if(Pn){const f=parseInt(getComputedStyle(e).fontSize,10),l=e.getBoundingClientRect();i=l.width/f,s=l.height/f}return h.autoA11y&&!a&&(o.attributes["aria-hidden"]="true"),Promise.resolve([e,qe({content:e.innerHTML,width:i,height:s,transform:r,title:a,extra:o,watchable:!0})])}}};const ai=new RegExp('"',"ug"),an=[1105920,1112319],rn=u(u(u(u({},{FontAwesome:{normal:"fas",400:"fas"}}),Cr),Br),Fr),pe=Object.keys(rn).reduce((t,e)=>(t[e.toLowerCase()]=rn[e],t),{}),ri=Object.keys(pe).reduce((t,e)=>{const n=pe[e];return t[e]=n[900]||[...Object.entries(n)][0][1],t},{});function oi(t){const e=t.replace(ai,""),n=fo(e,0),a=n>=an[0]&&n<=an[1],r=e.length===2?e[0]===e[1]:!1;return{value:oe(r?e[0]:e),isSecondary:a||r}}function ii(t,e){const n=t.replace(/^['"]|['"]$/g,"").toLowerCase(),a=parseInt(e),r=isNaN(a)?"normal":a;return(pe[n]||{})[r]||ri[n]}function on(t,e){const n="".concat(Ur).concat(e.replace(":","-"));return new Promise((a,r)=>{if(t.getAttribute(n)!==null)return a();const i=lt(t.children).filter(m=>m.getAttribute(ee)===e)[0],s=G.getComputedStyle(t,e),f=s.getPropertyValue("font-family"),l=f.match(Xr),d=s.getPropertyValue("font-weight"),g=s.getPropertyValue("content");if(i&&!l)return t.removeChild(i),a();if(l&&g!=="none"&&g!==""){const m=s.getPropertyValue("content");let S=ii(f,d);const{value:w,isSecondary:b}=oi(m),x=l[0].startsWith("FontAwesome");let y=Ce(S,w),p=y;if(x){const v=bo(w);v.iconName&&v.prefix&&(y=v.iconName,S=v.prefix)}if(y&&!b&&(!i||i.getAttribute(ve)!==S||i.getAttribute(xe)!==p)){t.setAttribute(n,p),i&&t.removeChild(i);const v=Vo(),{extra:A}=v;A.attributes[ee]=e,fe(y,S).then(C=>{const T=Pe(u(u({},v),{},{icons:{main:C,mask:Kn()},prefix:S,iconName:p,extra:A,watchable:!0})),D=I.createElementNS("http://www.w3.org/2000/svg","svg");e==="::before"?t.insertBefore(D,t.firstChild):t.appendChild(D),D.outerHTML=T.map(U=>wt(U)).join(`
`),t.removeAttribute(n),a()}).catch(r)}else a()}else a()})}function si(t){return Promise.all([on(t,"::before"),on(t,"::after")])}function li(t){return t.parentNode!==document.head&&!~Gr.indexOf(t.tagName.toUpperCase())&&!t.getAttribute(ee)&&(!t.parentNode||t.parentNode.tagName!=="svg")}function sn(t){if(B)return new Promise((e,n)=>{const a=lt(t.querySelectorAll("*")).filter(li).map(si),r=Ie.begin("searchPseudoElements");ta(),Promise.all(a).then(()=>{r(),de(),e()}).catch(()=>{r(),de(),n()})})}var ci={hooks(){return{mutationObserverCallbacks(t){return t.pseudoElementsCallback=sn,t}}},provides(t){t.pseudoElements2svg=function(e){const{node:n=I}=e;h.searchPseudoElements&&sn(n)}}};let ln=!1;var fi={mixout(){return{dom:{unwatch(){ta(),ln=!0}}}},hooks(){return{bootstrap(){tn(se("mutationObserverCallbacks",{}))},noAuto(){Uo()},watch(t){const{observeMutationsRoot:e}=t;ln?de():tn(se("mutationObserverCallbacks",{observeMutationsRoot:e}))}}}};const cn=t=>{let e={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce((n,a)=>{const r=a.toLowerCase().split("-"),o=r[0];let i=r.slice(1).join("-");if(o&&i==="h")return n.flipX=!0,n;if(o&&i==="v")return n.flipY=!0,n;if(i=parseFloat(i),isNaN(i))return n;switch(o){case"grow":n.size=n.size+i;break;case"shrink":n.size=n.size-i;break;case"left":n.x=n.x-i;break;case"right":n.x=n.x+i;break;case"up":n.y=n.y-i;break;case"down":n.y=n.y+i;break;case"rotate":n.rotate=n.rotate+i;break}return n},e)};var ui={mixout(){return{parse:{transform:t=>cn(t)}}},hooks(){return{parseNodeAttributes(t,e){const n=e.getAttribute("data-fa-transform");return n&&(t.transform=cn(n)),t}}},provides(t){t.generateAbstractTransformGrouping=function(e){let{main:n,transform:a,containerWidth:r,iconWidth:o}=e;const i={transform:"translate(".concat(r/2," 256)")},s="translate(".concat(a.x*32,", ").concat(a.y*32,") "),f="scale(".concat(a.size/16*(a.flipX?-1:1),", ").concat(a.size/16*(a.flipY?-1:1),") "),l="rotate(".concat(a.rotate," 0 0)"),d={transform:"".concat(s," ").concat(f," ").concat(l)},g={transform:"translate(".concat(o/2*-1," -256)")},m={outer:i,inner:d,path:g};return{tag:"g",attributes:u({},m.outer),children:[{tag:"g",attributes:u({},m.inner),children:[{tag:n.icon.tag,children:n.icon.children,attributes:u(u({},n.icon.attributes),m.path)}]}]}}}};const Xt={x:0,y:0,width:"100%",height:"100%"};function fn(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return t.attributes&&(t.attributes.fill||e)&&(t.attributes.fill="black"),t}function di(t){return t.tag==="g"?t.children:[t]}var pi={hooks(){return{parseNodeAttributes(t,e){const n=e.getAttribute("data-fa-mask"),a=n?zt(n.split(" ").map(r=>r.trim())):Kn();return a.prefix||(a.prefix=H()),t.mask=a,t.maskId=e.getAttribute("data-fa-mask-id"),t}}},provides(t){t.generateAbstractMask=function(e){let{children:n,attributes:a,main:r,mask:o,maskId:i,transform:s}=e;const{width:f,icon:l}=r,{width:d,icon:g}=o,m=ro({transform:s,containerWidth:d,iconWidth:f}),S={tag:"rect",attributes:u(u({},Xt),{},{fill:"white"})},w=l.children?{children:l.children.map(fn)}:{},b={tag:"g",attributes:u({},m.inner),children:[fn(u({tag:l.tag,attributes:u(u({},l.attributes),m.path)},w))]},x={tag:"g",attributes:u({},m.outer),children:[b]},y="mask-".concat(i||vt()),p="clip-".concat(i||vt()),v={tag:"mask",attributes:u(u({},Xt),{},{id:y,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[S,x]},A={tag:"defs",children:[{tag:"clipPath",attributes:{id:p},children:di(g)},v]};return n.push(A,{tag:"rect",attributes:u({fill:"currentColor","clip-path":"url(#".concat(p,")"),mask:"url(#".concat(y,")")},Xt)}),{children:n,attributes:a}}}},mi={provides(t){let e=!1;G.matchMedia&&(e=G.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){const n=[],a={fill:"currentColor"},r={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};n.push({tag:"path",attributes:u(u({},a),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});const o=u(u({},r),{},{attributeName:"opacity"}),i={tag:"circle",attributes:u(u({},a),{},{cx:"256",cy:"364",r:"28"}),children:[]};return e||i.children.push({tag:"animate",attributes:u(u({},r),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:u(u({},o),{},{values:"1;0;1;1;0;1;"})}),n.push(i),n.push({tag:"path",attributes:u(u({},a),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:e?[]:[{tag:"animate",attributes:u(u({},o),{},{values:"1;0;0;0;0;1;"})}]}),e||n.push({tag:"path",attributes:u(u({},a),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:u(u({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:n}}}},gi={hooks(){return{parseNodeAttributes(t,e){const n=e.getAttribute("data-fa-symbol"),a=n===null?!1:n===""?!0:n;return t.symbol=a,t}}}},hi=[so,Jo,ti,ei,ni,ci,fi,ui,pi,mi,gi];Po(hi,{mixoutsTo:M});M.noAuto;M.config;M.library;M.dom;const me=M.parse;M.findIconDefinition;M.toHtml;const bi=M.icon;M.layer;M.text;M.counter;function un(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter(function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable})),n.push.apply(n,a)}return n}function R(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?un(Object(n),!0).forEach(function(a){rt(t,a,n[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):un(Object(n)).forEach(function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(n,a))})}return t}function Et(t){"@babel/helpers - typeof";return Et=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Et(t)}function rt(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function yi(t,e){if(t==null)return{};var n={},a=Object.keys(t),r,o;for(o=0;o<a.length;o++)r=a[o],!(e.indexOf(r)>=0)&&(n[r]=t[r]);return n}function vi(t,e){if(t==null)return{};var n=yi(t,e),a,r;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)a=o[r],!(e.indexOf(a)>=0)&&Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}function ge(t){return xi(t)||Si(t)||wi(t)||ki()}function xi(t){if(Array.isArray(t))return he(t)}function Si(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function wi(t,e){if(t){if(typeof t=="string")return he(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return he(t,e)}}function he(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,a=new Array(e);n<e;n++)a[n]=t[n];return a}function ki(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Ai(t){var e,n=t.beat,a=t.fade,r=t.beatFade,o=t.bounce,i=t.shake,s=t.flash,f=t.spin,l=t.spinPulse,d=t.spinReverse,g=t.pulse,m=t.fixedWidth,S=t.inverse,w=t.border,b=t.listItem,x=t.flip,y=t.size,p=t.rotation,v=t.pull,A=(e={"fa-beat":n,"fa-fade":a,"fa-beat-fade":r,"fa-bounce":o,"fa-shake":i,"fa-flash":s,"fa-spin":f,"fa-spin-reverse":d,"fa-spin-pulse":l,"fa-pulse":g,"fa-fw":m,"fa-inverse":S,"fa-border":w,"fa-li":b,"fa-flip":x===!0,"fa-flip-horizontal":x==="horizontal"||x==="both","fa-flip-vertical":x==="vertical"||x==="both"},rt(e,"fa-".concat(y),typeof y<"u"&&y!==null),rt(e,"fa-rotate-".concat(p),typeof p<"u"&&p!==null&&p!==0),rt(e,"fa-pull-".concat(v),typeof v<"u"&&v!==null),rt(e,"fa-swap-opacity",t.swapOpacity),e);return Object.keys(A).map(function(C){return A[C]?C:null}).filter(function(C){return C})}function Ci(t){return t=t-0,t===t}function na(t){return Ci(t)?t:(t=t.replace(/[\-_\s]+(.)?/g,function(e,n){return n?n.toUpperCase():""}),t.substr(0,1).toLowerCase()+t.substr(1))}var Pi=["style"];function Ii(t){return t.charAt(0).toUpperCase()+t.slice(1)}function Oi(t){return t.split(";").map(function(e){return e.trim()}).filter(function(e){return e}).reduce(function(e,n){var a=n.indexOf(":"),r=na(n.slice(0,a)),o=n.slice(a+1).trim();return r.startsWith("webkit")?e[Ii(r)]=o:e[r]=o,e},{})}function aa(t,e){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof e=="string")return e;var a=(e.children||[]).map(function(f){return aa(t,f)}),r=Object.keys(e.attributes||{}).reduce(function(f,l){var d=e.attributes[l];switch(l){case"class":f.attrs.className=d,delete e.attributes.class;break;case"style":f.attrs.style=Oi(d);break;default:l.indexOf("aria-")===0||l.indexOf("data-")===0?f.attrs[l.toLowerCase()]=d:f.attrs[na(l)]=d}return f},{attrs:{}}),o=n.style,i=o===void 0?{}:o,s=vi(n,Pi);return r.attrs.style=R(R({},r.attrs.style),i),t.apply(void 0,[e.tag,R(R({},r.attrs),s)].concat(ge(a)))}var ra=!1;try{ra=!0}catch{}function Ei(){if(!ra&&console&&typeof console.error=="function"){var t;(t=console).error.apply(t,arguments)}}function dn(t){if(t&&Et(t)==="object"&&t.prefix&&t.iconName&&t.icon)return t;if(me.icon)return me.icon(t);if(t===null)return null;if(t&&Et(t)==="object"&&t.prefix&&t.iconName)return t;if(Array.isArray(t)&&t.length===2)return{prefix:t[0],iconName:t[1]};if(typeof t=="string")return{prefix:"fas",iconName:t}}function Kt(t,e){return Array.isArray(e)&&e.length>0||!Array.isArray(e)&&e?rt({},t,e):{}}var pn={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1},Ee=mn.forwardRef(function(t,e){var n=R(R({},pn),t),a=n.icon,r=n.mask,o=n.symbol,i=n.className,s=n.title,f=n.titleId,l=n.maskId,d=dn(a),g=Kt("classes",[].concat(ge(Ai(n)),ge((i||"").split(" ")))),m=Kt("transform",typeof n.transform=="string"?me.transform(n.transform):n.transform),S=Kt("mask",dn(r)),w=bi(d,R(R(R(R({},g),m),S),{},{symbol:o,title:s,titleId:f,maskId:l}));if(!w)return Ei("Could not find icon",d),null;var b=w.abstract,x={ref:e};return Object.keys(n).forEach(function(y){pn.hasOwnProperty(y)||(x[y]=n[y])}),Ni(b[0],x)});Ee.displayName="FontAwesomeIcon";Ee.propTypes={beat:k.bool,border:k.bool,beatFade:k.bool,bounce:k.bool,className:k.string,fade:k.bool,flash:k.bool,mask:k.oneOfType([k.object,k.array,k.string]),maskId:k.string,fixedWidth:k.bool,inverse:k.bool,flip:k.oneOf([!0,!1,"horizontal","vertical","both"]),icon:k.oneOfType([k.object,k.array,k.string]),listItem:k.bool,pull:k.oneOf(["right","left"]),pulse:k.bool,rotation:k.oneOf([0,90,180,270]),shake:k.bool,size:k.oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:k.bool,spinPulse:k.bool,spinReverse:k.bool,symbol:k.oneOfType([k.bool,k.string]),title:k.string,titleId:k.string,transform:k.oneOfType([k.string,k.object]),swapOpacity:k.bool};var Ni=aa.bind(null,mn.createElement);/*!
 * Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */const Ti={prefix:"fas",iconName:"plus",icon:[448,512,[10133,61543,"add"],"2b","M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 144L48 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l144 0 0 144c0 17.7 14.3 32 32 32s32-14.3 32-32l0-144 144 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-144 0 0-144z"]};function ji({notes:t,userData:e,error:n,onMakeNotesClick:a,currentNote:r,setCurrentNote:o,handleAddNote:i}){const s=gn(),[f,l]=P.useState({title:!1,description:!1}),[d,g]=P.useState({title:"",description:""}),m=()=>{let w="",b="";const x=r.title.trim().length===0,y=r.title.trim().length<3,p=r.description.trim().length===0,v=r.description.trim().length<5,A=r.description.trim().split(/\s+/).length===1;x?w="Title cannot be empty.":y&&(w="Title must be at least 3 characters long."),p?b="Description cannot be empty.":v&&A?b="Description cannot be just a word.":v&&(b="Description must be at least 5 characters long.");const C={title:!!w,description:!!b};return l(C),g({title:w,description:b}),!Object.values(C).some(T=>T)},S=()=>{m()&&i()};return c.jsxs(je,{className:"main",children:[c.jsx(O,{className:"absolute inset-0",children:c.jsx("img",{alt:"nature",className:"bg-img",src:gr})}),c.jsx(O,{className:"relative z-10",children:e&&(e!=null&&e.name)?c.jsxs(O,{className:"flex-row",children:[c.jsxs(O,{className:"text-data animate-slideInFromLeft",children:[c.jsxs("h2",{children:["Welcome, ",e==null?void 0:e.name,"!"]}),c.jsx("h4",{children:"Let's organize your world, one note at a time!"}),t&&t.length>0&&c.jsx(mt,{variant:"contained",color:"primary",onClick:a,children:"See Notes"})]}),c.jsxs(je,{className:"form-data animate-slideInFromTop",children:[c.jsx(j,{className:"form-heading",variant:"h5",fontWeight:"bold",children:"Add a New Note"}),c.jsxs("form",{children:[c.jsxs(O,{className:"flex-row",children:[c.jsx(j,{paddingRight:2,fontWeight:"bold",fontSize:20,children:"Title"}),c.jsx(gt,{variant:"outlined",fullWidth:!0,value:r.title,onChange:w=>o({...r,title:w.target.value}),className:"text-field",error:f.title,helperText:d.title})]}),c.jsxs(O,{className:"flex-row",children:[c.jsx(j,{paddingRight:4.5,fontWeight:"bold",fontSize:20,children:"Description"}),c.jsx(gt,{className:"text-field",variant:"outlined",multiline:!0,rows:4,fullWidth:!0,value:r.description,onChange:w=>o({...r,description:w.target.value}),error:f.description,helperText:d.description,margin:"normal"})]}),c.jsxs(O,{className:"flex-row",children:[c.jsx(j,{paddingRight:3,fontWeight:"bold",fontSize:20,children:"Tag"}),c.jsx(gt,{variant:"outlined",fullWidth:!0,value:r.tag,onChange:w=>o({...r,tag:w.target.value}),margin:"normal",className:"text-field"})]}),c.jsx(O,{className:"flex-center",children:c.jsx(mt,{variant:"contained",color:"primary",startIcon:c.jsx(Ee,{icon:Ti}),onClick:S,children:"Add Note"})})]})]})]}):c.jsx(O,{className:"flex-col animate-pulse",children:n?c.jsxs(O,{children:[c.jsx(j,{className:"typography bottom-link",variant:"h5",color:"black",fontWeight:"bold",children:"Authentication failed!"}),c.jsxs(O,{className:"bottom",children:["Go back to Home page"," ",c.jsx(mt,{variant:"contained",className:"bottom-link",onClick:()=>s("/"),children:"Go Back"})]})]}):c.jsx(ka,{})})})]})}const Mi=Z(c.jsx("path",{d:"M22 24H2v-4h20zM13.06 5.19l3.75 3.75L7.75 18H4v-3.75zm4.82 2.68-3.75-3.75 1.83-1.83c.39-.39 1.02-.39 1.41 0l2.34 2.34c.39.39.39 1.02 0 1.41z"}),"BorderColor"),Di=Z(c.jsx("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6zM8 9h8v10H8zm7.5-5-1-1h-5l-1 1H5v2h14V4z"}),"DeleteOutline"),Fi=Z(c.jsx("path",{d:"M17 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V7zm-5 16c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3m3-10H5V5h10z"}),"Save"),_i=Z(c.jsx("path",{d:"M10 20h4c0 1.1-.9 2-2 2s-2-.9-2-2m4-11c0 2.61 1.67 4.83 4 5.66V17h2v2H4v-2h2v-7c0-2.79 1.91-5.14 4.5-5.8v-.7c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5v.7c.71.18 1.36.49 1.95.9C14.54 6.14 14 7.51 14 9m10-1h-3V5h-2v3h-3v2h3v3h2v-3h3z"}),"NotificationAdd"),Ri=Z(c.jsx("path",{d:"M7.58 4.08 6.15 2.65C3.75 4.48 2.17 7.3 2.03 10.5h2c.15-2.65 1.51-4.97 3.55-6.42m12.39 6.42h2c-.15-3.2-1.73-6.02-4.12-7.85l-1.42 1.43c2.02 1.45 3.39 3.77 3.54 6.42M18 11c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2zm-6 11c.14 0 .27-.01.4-.04.65-.14 1.18-.58 1.44-1.18q.15-.36.15-.78h-4c.01 1.1.9 2 2.01 2"}),"NotificationsActive"),zi=Z([c.jsx("path",{d:"M17.59 18 19 16.59 14.42 12 19 7.41 17.59 6l-6 6z"},"0"),c.jsx("path",{d:"m11 18 1.41-1.41L7.83 12l4.58-4.59L11 6l-6 6z"},"1")],"KeyboardDoubleArrowLeft"),Li=Z(c.jsx("path",{d:"M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m-2 10h-4v4h-2v-4H7v-2h4V7h2v4h4z"}),"AddBox");function Wi({open:t,toggleDialog:e,id:n,refetch:a}){const[r,o]=P.useState({date:"",message:"",noteId:n,notification:!0}),[i,s]=P.useState({date:!1,message:!1}),[f,l]=P.useState({date:"",message:""}),[d,g]=P.useState("");P.useEffect(()=>{const p=new Date;p.setDate(p.getDate()+1);const v=p.getFullYear(),A=String(p.getMonth()+1).padStart(2,"0"),C=String(p.getDate()).padStart(2,"0");g(`${v}-${A}-${C}`)},[t]);const m=p=>{const v=p.target.value;if(v){const A=new Date,C=new Date(v),T=new Date(C.getFullYear(),C.getMonth(),C.getDate(),A.getHours(),A.getMinutes()).toISOString();o(D=>({...D,date:T}))}i.date&&(s(A=>({...A,date:!1})),l(A=>({...A,date:""})))},S=p=>{o(v=>({...v,message:p.target.value})),i.message&&(s(v=>({...v,message:!1})),l(v=>({...v,message:""})))},w=()=>{let p=!0;const v={date:!1,message:!1},A={date:"",message:""};return(!r.date||r.date.trim()==="")&&(v.date=!0,A.date="Deadline cannot be empty",p=!1),(!r.message||r.message.trim()==="")&&(v.message=!0,A.message="Comment cannot be empty",p=!1),s(v),l(A),p},[b]=Aa(),x=async()=>{if(w()){console.log("Form Data Saved:",r);try{await b({payload:r}),_.success("You will be notified one day before deadline"),a()}catch(p){_.error("Error saving note"),console.error("Error saving note:",p)}e()}},y=p=>{if(!p)return"";const v=new Date(p),A=v.getFullYear(),C=String(v.getMonth()+1).padStart(2,"0"),T=String(v.getDate()).padStart(2,"0");return`${A}-${C}-${T}`};return c.jsxs(Za,{className:"animate-slideInFromTop",open:t,fullWidth:!0,sx:{width:"1300px",maxWidth:"100%",borderRadius:"20px","& .MuiDialog-paper":{backgroundColor:"#f9f9f9",boxShadow:"0 0px 16px rgba(0, 0, 0, 0.2)"}},children:[c.jsxs(O,{display:"flex",flexDirection:"column",gap:2,padding:1.5,sx:{backgroundColor:"#ffffff",borderRadius:"16px"},children:[c.jsx(j,{variant:"h5",fontWeight:"bold",color:"primary",align:"center",gutterBottom:!0,children:"Add Notification"}),c.jsxs(O,{display:"flex",flexDirection:"column",gap:3,padding:2,sx:{backgroundColor:"#fafafa",borderRadius:"12px",boxShadow:"0 4px 12px rgba(0, 0, 0, 0.1)"},children:[c.jsxs(O,{display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"center",gap:2,children:[c.jsx(j,{color:"text.primary",children:"Deadline"}),c.jsx(gt,{type:"date",fullWidth:!0,sx:{width:"300px"},required:!0,value:y(r.date),onChange:m,error:i.date,helperText:f.date,InputProps:{sx:{borderRadius:"8px"}},inputProps:{min:d},variant:"outlined"})]}),c.jsxs(O,{display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"center",gap:2,children:[c.jsx(j,{width:"100px",color:"text.primary",children:"Comment"}),c.jsx(gt,{fullWidth:!0,required:!0,value:r.message,onChange:S,error:i.message,helperText:f.message,multiline:!0,rows:3,InputProps:{sx:{borderRadius:"8px"}},variant:"outlined"})]})]})]}),c.jsxs(nr,{sx:{padding:2,justifyContent:"space-between"},children:[c.jsx(mt,{onClick:e,color:"inherit",variant:"outlined",children:"Cancel"}),c.jsx(mt,{onClick:x,color:"primary",variant:"contained",children:"Save"})]})]})}function $i({notes:t,setNotes:e,fetchNotes:n,handleSaveEdit:a,onAddClick:r,handleDeleteNote:o}){const i=qt.getItem("authToken"),[s,f]=P.useState(null),[l,d]=P.useState(""),[g,m]=P.useState(!1),S=()=>{m(b=>!b)};P.useEffect(()=>{i&&n()},[n,i]);const w=b=>{const x=new Date(b),y=x.toLocaleDateString("en-GB",{day:"2-digit",month:"2-digit",year:"numeric"}),p=x.toLocaleTimeString("en-US",{hour:"2-digit",minute:"2-digit",second:"2-digit",hour12:!1});return{date:y,time:p}};return c.jsxs(O,{className:"notes-background",children:[c.jsxs(O,{sx:{position:"relative",zIndex:1,width:"100%"},children:[c.jsx(_e,{container:!0,spacing:2,sx:{marginTop:"25px",width:"100%"},children:t.map(b=>c.jsx(_e,{item:!0,xs:12,sm:6,md:4,sx:{flexGrow:0,maxWidth:"100%",boxSizing:"border-box"},children:c.jsxs(O,{display:"flex",flexDirection:"column",gap:1,boxShadow:1,sx:{background:"#fff",padding:1.4,borderRadius:4,width:"100%",minWidth:0},children:[c.jsxs(O,{display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"center",children:[b.notification?c.jsx(nt,{size:"small",color:"secondary",title:"You will be notified one day before deadline",children:c.jsx(Ri,{})}):c.jsx(nt,{size:"small",color:"secondary",onClick:()=>{d(b._id),S()},children:c.jsx(_i,{})}),b.sendDate?c.jsx(j,{variant:"caption",color:"error",children:`Deadline: ${w(b.sendDate).date} ${w(b.sendDate).time} `}):c.jsxs(j,{variant:"caption",color:"secondary",children:[c.jsx(zi,{}),"Set Notification Alert"]})]}),c.jsxs(O,{display:"flex",flexDirection:"row",justifyContent:"space-between",children:[c.jsxs(j,{variant:"caption",color:"primary",contentEditable:s===b._id,suppressContentEditableWarning:!0,onBlur:x=>e(y=>y.map(p=>p._id===b._id?{...p,tag:x.target.textContent||""}:p)),children:["#",b.tag]}),c.jsx(j,{variant:"caption",color:"textSecondary",children:`Date: ${w(b.date).date} Time: ${w(b.date).time}`})]}),c.jsx(j,{fontWeight:"bold",variant:"h5",marginY:1,className:"capitalize",gutterBottom:!0,contentEditable:s===b._id,suppressContentEditableWarning:!0,onBlur:x=>e(y=>y.map(p=>p._id===b._id?{...p,title:x.target.textContent||""}:p)),children:b.title}),c.jsx(j,{variant:"body2",color:"textSecondary",sx:{overflow:"hidden",textOverflow:"ellipsis",display:"-webkit-box",WebkitLineClamp:3,WebkitBoxOrient:"vertical"},contentEditable:s===b._id,suppressContentEditableWarning:!0,onBlur:x=>e(y=>y.map(p=>p._id===b._id?{...p,description:x.target.textContent||""}:p)),children:b.description}),c.jsxs(O,{mt:1.5,display:"flex",flexDirection:"row",justifyContent:"space-between",children:[s!==b._id?c.jsx(nt,{title:"Edit Note",size:"small",color:"primary",onClick:()=>f(b._id),children:c.jsx(Mi,{})}):c.jsx(nt,{title:"save note",size:"small",color:"secondary",onClick:()=>{a(b),f(null)},children:c.jsx(Fi,{})}),c.jsx(nt,{title:"delete the note",size:"small",color:"error",onClick:()=>o(b._id),children:c.jsx(Di,{})})]})]})},b._id))}),c.jsx(nt,{color:"primary",size:"large",onClick:r,sx:{fontSize:"48px"},children:c.jsx(Li,{})})]}),g&&c.jsx(Wi,{open:g,refetch:n,toggleDialog:S,id:l})]})}function Ki(){const t=P.useRef(null),e=()=>{var E;(E=t.current)==null||E.scrollIntoView({behavior:"smooth"})},n=P.useRef(null),a=()=>{var E;(E=n.current)==null||E.scrollIntoView({behavior:"smooth"})},[r,o]=P.useState([]),[i,s]=P.useState(null),[f,l]=P.useState({_id:"",title:"",description:"",tag:"",notification:!1,sendDate:null,date:""}),d=gn(),g=qt.getItem("authToken"),{data:m,error:S,refetch:w}=Ca({}),{data:b=[],error:x,refetch:y}=Pa({});P.useEffect(()=>{m&&s(m),S&&d("/errorpage"),b&&i!==null&&o(b),x&&_.error("Error in fetching notes!")},[b,x,d,w,i,S,m]);const[p]=Ia(),v=async()=>{if(!f.title||!f.description||!f.tag){_.info("Please enter required fields.");return}try{await p({...f,headers:{authorization:`Bearer ${g}`}}),l({_id:"",title:"",description:"",tag:"",notification:!1,sendDate:null,date:""}),y(),e(),_.success("Notes added successfully!")}catch(E){_.error("Error in adding notes"),console.error("Error adding note:",E)}},[A]=Oa(),C=async E=>{try{await A({id:E._id,data:E,headers:{authorization:`Bearer ${g}`}}),_.success("Note updated successfully"),y()}catch(J){_.error("Error saving note"),console.error("Error saving note:",J)}},[T]=Ea(),D=async E=>{try{await T({id:E,headers:{authorization:`Bearer ${g}`}}),y(),_.success("Note deleted successfully!")}catch(J){_.error("Error deleting note"),console.error("Error deleting note:",J)}},U=P.useCallback(()=>{y()},[y]),ct=()=>{qt.removeItem("authToken"),s(null),d("/")};return c.jsxs("div",{children:[c.jsx(Fa,{buttonName:"Logout",handleLogout:ct}),c.jsx("div",{ref:n,children:c.jsx(ji,{notes:r,userData:i,error:!!S,onMakeNotesClick:e,currentNote:f,setCurrentNote:l,handleAddNote:v})}),r&&r.length>0&&c.jsx("div",{ref:t,children:c.jsx($i,{onAddClick:a,notes:r,setNotes:o,fetchNotes:U,handleSaveEdit:C,handleDeleteNote:D})})]})}export{Ki as default};
