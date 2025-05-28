import{g as Pa,r as P,j as c,c as ot,R as hn,u as yn,L as Ca,a as Ia,y as F,d as Kt,b as Oa,e as Na,f as Ma,h as ja,i as Ta}from"./index-BWAzDsj0.js";import{m as ye,s as Da,S as La,z as za,f as Fa}from"./motion-BDPao5W_.js";import{u as bn,P as vn,a as Me,b as pt,M as _a,B as Ra,c as Wa,d as q,T as je}from"./index-Bn6leUYA.js";import{g as Nt,b as Mt,u as jt,c as xn,s as K,d as L,e as Tt,f as $a,m as Qt,h as Te,i as De,C as Ya,j as Ba,r as Dt,k as be,B as I,a as J}from"./Button-ChG3pmet.js";import{T}from"./Typography-Badc2-FJ.js";var wn={exports:{}},Xa="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",Ua=Xa,Ha=Ua;function An(){}function Sn(){}Sn.resetWarningCache=An;var Ga=function(){function t(a,r,i,s,o,f){if(f!==Ha){var l=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw l.name="Invariant Violation",l}}t.isRequired=t;function e(){return t}var n={array:t,bigint:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,elementType:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:Sn,resetWarningCache:An};return n.PropTypes=n,n};wn.exports=Ga();var Va=wn.exports;const A=Pa(Va);function qa(t){return Mt("MuiIconButton",t)}const Le=Nt("MuiIconButton",["root","disabled","colorInherit","colorPrimary","colorSecondary","colorError","colorInfo","colorSuccess","colorWarning","edgeStart","edgeEnd","sizeSmall","sizeMedium","sizeLarge","loading","loadingIndicator","loadingWrapper"]),Ka=t=>{const{classes:e,disabled:n,color:a,edge:r,size:i,loading:s}=t,o={root:["root",s&&"loading",n&&"disabled",a!=="default"&&`color${L(a)}`,r&&`edge${L(r)}`,`size${L(i)}`],loadingIndicator:["loadingIndicator"],loadingWrapper:["loadingWrapper"]};return Tt(o,qa,e)},Qa=K($a,{name:"MuiIconButton",slot:"Root",overridesResolver:(t,e)=>{const{ownerState:n}=t;return[e.root,n.loading&&e.loading,n.color!=="default"&&e[`color${L(n.color)}`],n.edge&&e[`edge${L(n.edge)}`],e[`size${L(n.size)}`]]}})(Qt(({theme:t})=>({textAlign:"center",flex:"0 0 auto",fontSize:t.typography.pxToRem(24),padding:8,borderRadius:"50%",color:(t.vars||t).palette.action.active,transition:t.transitions.create("background-color",{duration:t.transitions.duration.shortest}),variants:[{props:e=>!e.disableRipple,style:{"--IconButton-hoverBg":t.vars?`rgba(${t.vars.palette.action.activeChannel} / ${t.vars.palette.action.hoverOpacity})`:Te(t.palette.action.active,t.palette.action.hoverOpacity),"&:hover":{backgroundColor:"var(--IconButton-hoverBg)","@media (hover: none)":{backgroundColor:"transparent"}}}},{props:{edge:"start"},style:{marginLeft:-12}},{props:{edge:"start",size:"small"},style:{marginLeft:-3}},{props:{edge:"end"},style:{marginRight:-12}},{props:{edge:"end",size:"small"},style:{marginRight:-3}}]})),Qt(({theme:t})=>({variants:[{props:{color:"inherit"},style:{color:"inherit"}},...Object.entries(t.palette).filter(De()).map(([e])=>({props:{color:e},style:{color:(t.vars||t).palette[e].main}})),...Object.entries(t.palette).filter(De()).map(([e])=>({props:{color:e},style:{"--IconButton-hoverBg":t.vars?`rgba(${(t.vars||t).palette[e].mainChannel} / ${t.vars.palette.action.hoverOpacity})`:Te((t.vars||t).palette[e].main,t.palette.action.hoverOpacity)}})),{props:{size:"small"},style:{padding:5,fontSize:t.typography.pxToRem(18)}},{props:{size:"large"},style:{padding:12,fontSize:t.typography.pxToRem(28)}}],[`&.${Le.disabled}`]:{backgroundColor:"transparent",color:(t.vars||t).palette.action.disabled},[`&.${Le.loading}`]:{color:"transparent"}}))),Za=K("span",{name:"MuiIconButton",slot:"LoadingIndicator",overridesResolver:(t,e)=>e.loadingIndicator})(({theme:t})=>({display:"none",position:"absolute",visibility:"visible",top:"50%",left:"50%",transform:"translate(-50%, -50%)",color:(t.vars||t).palette.action.disabled,variants:[{props:{loading:!0},style:{display:"flex"}}]})),Q=P.forwardRef(function(e,n){const a=jt({props:e,name:"MuiIconButton"}),{edge:r=!1,children:i,className:s,color:o="default",disabled:f=!1,disableFocusRipple:l=!1,size:d="medium",id:m,loading:g=null,loadingIndicator:w,...S}=a,b=xn(m),x=w??c.jsx(Ya,{"aria-labelledby":b,color:"inherit",size:16}),v={...a,edge:r,color:o,disabled:f,disableFocusRipple:l,loading:g,loadingIndicator:x,size:d},p=Ka(v);return c.jsxs(Qa,{id:g?b:m,className:ot(p.root,s),centerRipple:!0,focusRipple:!l,disabled:f||g,ref:n,...S,ownerState:v,children:[typeof g=="boolean"&&c.jsx("span",{className:p.loadingWrapper,style:{display:"contents"},children:c.jsx(Za,{className:p.loadingIndicator,ownerState:v,children:g&&x})}),i]})});function Ja(t){return Mt("MuiDialog",t)}const Bt=Nt("MuiDialog",["root","scrollPaper","scrollBody","container","paper","paperScrollPaper","paperScrollBody","paperWidthFalse","paperWidthXs","paperWidthSm","paperWidthMd","paperWidthLg","paperWidthXl","paperFullWidth","paperFullScreen"]),tr=P.createContext({}),er=K(Ra,{name:"MuiDialog",slot:"Backdrop",overrides:(t,e)=>e.backdrop})({zIndex:-1}),nr=t=>{const{classes:e,scroll:n,maxWidth:a,fullWidth:r,fullScreen:i}=t,s={root:["root"],container:["container",`scroll${L(n)}`],paper:["paper",`paperScroll${L(n)}`,`paperWidth${L(String(a))}`,r&&"paperFullWidth",i&&"paperFullScreen"]};return Tt(s,Ja,e)},ar=K(_a,{name:"MuiDialog",slot:"Root",overridesResolver:(t,e)=>e.root})({"@media print":{position:"absolute !important"}}),rr=K("div",{name:"MuiDialog",slot:"Container",overridesResolver:(t,e)=>{const{ownerState:n}=t;return[e.container,e[`scroll${L(n.scroll)}`]]}})({height:"100%","@media print":{height:"auto"},outline:0,variants:[{props:{scroll:"paper"},style:{display:"flex",justifyContent:"center",alignItems:"center"}},{props:{scroll:"body"},style:{overflowY:"auto",overflowX:"hidden",textAlign:"center","&::after":{content:'""',display:"inline-block",verticalAlign:"middle",height:"100%",width:"0"}}}]}),ir=K(vn,{name:"MuiDialog",slot:"Paper",overridesResolver:(t,e)=>{const{ownerState:n}=t;return[e.paper,e[`scrollPaper${L(n.scroll)}`],e[`paperWidth${L(String(n.maxWidth))}`],n.fullWidth&&e.paperFullWidth,n.fullScreen&&e.paperFullScreen]}})(Qt(({theme:t})=>({margin:32,position:"relative",overflowY:"auto","@media print":{overflowY:"visible",boxShadow:"none"},variants:[{props:{scroll:"paper"},style:{display:"flex",flexDirection:"column",maxHeight:"calc(100% - 64px)"}},{props:{scroll:"body"},style:{display:"inline-block",verticalAlign:"middle",textAlign:"initial"}},{props:({ownerState:e})=>!e.maxWidth,style:{maxWidth:"calc(100% - 64px)"}},{props:{maxWidth:"xs"},style:{maxWidth:t.breakpoints.unit==="px"?Math.max(t.breakpoints.values.xs,444):`max(${t.breakpoints.values.xs}${t.breakpoints.unit}, 444px)`,[`&.${Bt.paperScrollBody}`]:{[t.breakpoints.down(Math.max(t.breakpoints.values.xs,444)+32*2)]:{maxWidth:"calc(100% - 64px)"}}}},...Object.keys(t.breakpoints.values).filter(e=>e!=="xs").map(e=>({props:{maxWidth:e},style:{maxWidth:`${t.breakpoints.values[e]}${t.breakpoints.unit}`,[`&.${Bt.paperScrollBody}`]:{[t.breakpoints.down(t.breakpoints.values[e]+32*2)]:{maxWidth:"calc(100% - 64px)"}}}})),{props:({ownerState:e})=>e.fullWidth,style:{width:"calc(100% - 64px)"}},{props:({ownerState:e})=>e.fullScreen,style:{margin:0,width:"100%",maxWidth:"100%",height:"100%",maxHeight:"none",borderRadius:0,[`&.${Bt.paperScrollBody}`]:{margin:0,maxWidth:"100%"}}}]}))),sr=P.forwardRef(function(e,n){const a=jt({props:e,name:"MuiDialog"}),r=bn(),i={enter:r.transitions.duration.enteringScreen,exit:r.transitions.duration.leavingScreen},{"aria-describedby":s,"aria-labelledby":o,"aria-modal":f=!0,BackdropComponent:l,BackdropProps:d,children:m,className:g,disableEscapeKeyDown:w=!1,fullScreen:S=!1,fullWidth:b=!1,maxWidth:x="sm",onBackdropClick:v,onClick:p,onClose:h,open:E,PaperComponent:k=vn,PaperProps:M={},scroll:j="paper",slots:z={},slotProps:ut={},TransitionComponent:O=Me,transitionDuration:nt=i,TransitionProps:ca,...fa}=a,at={...a,disableEscapeKeyDown:w,fullScreen:S,fullWidth:b,maxWidth:x,scroll:j},Wt=nr(at),$t=P.useRef(),ua=rt=>{$t.current=rt.target===rt.currentTarget},da=rt=>{p&&p(rt),$t.current&&($t.current=null,v&&v(rt),h&&h(rt,"backdropClick"))},Yt=xn(o),pa=P.useMemo(()=>({titleId:Yt}),[Yt]),ma={transition:O,...z},ga={transition:ca,paper:M,backdrop:d,...ut},dt={slots:ma,slotProps:ga},[ha,ya]=pt("root",{elementType:ar,shouldForwardComponentProp:!0,externalForwardedProps:dt,ownerState:at,className:ot(Wt.root,g),ref:n}),[ba,va]=pt("backdrop",{elementType:er,shouldForwardComponentProp:!0,externalForwardedProps:dt,ownerState:at}),[xa,wa]=pt("paper",{elementType:ir,shouldForwardComponentProp:!0,externalForwardedProps:dt,ownerState:at,className:ot(Wt.paper,M.className)}),[Aa,Sa]=pt("container",{elementType:rr,externalForwardedProps:dt,ownerState:at,className:ot(Wt.container)}),[Ea,ka]=pt("transition",{elementType:Me,externalForwardedProps:dt,ownerState:at,additionalProps:{appear:!0,in:E,timeout:nt,role:"presentation"}});return c.jsx(ha,{closeAfterTransition:!0,slots:{backdrop:ba},slotProps:{backdrop:{transitionDuration:nt,as:l,...va}},disableEscapeKeyDown:w,onClose:h,open:E,onClick:da,...ya,...fa,children:c.jsx(Ea,{...ka,children:c.jsx(Aa,{onMouseDown:ua,...Sa,children:c.jsx(xa,{as:k,elevation:24,role:"dialog","aria-describedby":s,"aria-labelledby":Yt,"aria-modal":f,...wa,children:c.jsx(tr.Provider,{value:pa,children:m})})})})})});function or(t){return Mt("MuiDialogActions",t)}Nt("MuiDialogActions",["root","spacing"]);const lr=t=>{const{classes:e,disableSpacing:n}=t;return Tt({root:["root",!n&&"spacing"]},or,e)},cr=K("div",{name:"MuiDialogActions",slot:"Root",overridesResolver:(t,e)=>{const{ownerState:n}=t;return[e.root,!n.disableSpacing&&e.spacing]}})({display:"flex",alignItems:"center",padding:8,justifyContent:"flex-end",flex:"0 0 auto",variants:[{props:({ownerState:t})=>!t.disableSpacing,style:{"& > :not(style) ~ :not(style)":{marginLeft:8}}}]}),fr=P.forwardRef(function(e,n){const a=jt({props:e,name:"MuiDialogActions"}),{className:r,disableSpacing:i=!1,...s}=a,o={...a,disableSpacing:i},f=lr(o);return c.jsx(cr,{className:ot(f.root,r),ownerState:o,ref:n,...s})}),ze=P.createContext();function ur(t){return Mt("MuiGrid",t)}const dr=[0,1,2,3,4,5,6,7,8,9,10],pr=["column-reverse","column","row-reverse","row"],mr=["nowrap","wrap-reverse","wrap"],mt=["auto",!0,1,2,3,4,5,6,7,8,9,10,11,12],bt=Nt("MuiGrid",["root","container","item","zeroMinWidth",...dr.map(t=>`spacing-xs-${t}`),...pr.map(t=>`direction-xs-${t}`),...mr.map(t=>`wrap-xs-${t}`),...mt.map(t=>`grid-xs-${t}`),...mt.map(t=>`grid-sm-${t}`),...mt.map(t=>`grid-md-${t}`),...mt.map(t=>`grid-lg-${t}`),...mt.map(t=>`grid-xl-${t}`)]);function gr({theme:t,ownerState:e}){let n;return t.breakpoints.keys.reduce((a,r)=>{let i={};if(e[r]&&(n=e[r]),!n)return a;if(n===!0)i={flexBasis:0,flexGrow:1,maxWidth:"100%"};else if(n==="auto")i={flexBasis:"auto",flexGrow:0,flexShrink:0,maxWidth:"none",width:"auto"};else{const s=Dt({values:e.columns,breakpoints:t.breakpoints.values}),o=typeof s=="object"?s[r]:s;if(o==null)return a;const f=`${Math.round(n/o*1e8)/1e6}%`;let l={};if(e.container&&e.item&&e.columnSpacing!==0){const d=t.spacing(e.columnSpacing);if(d!=="0px"){const m=`calc(${f} + ${d})`;l={flexBasis:m,maxWidth:m}}}i={flexBasis:f,flexGrow:0,maxWidth:f,...l}}return t.breakpoints.values[r]===0?Object.assign(a,i):a[t.breakpoints.up(r)]=i,a},{})}function hr({theme:t,ownerState:e}){const n=Dt({values:e.direction,breakpoints:t.breakpoints.values});return be({theme:t},n,a=>{const r={flexDirection:a};return a.startsWith("column")&&(r[`& > .${bt.item}`]={maxWidth:"none"}),r})}function En({breakpoints:t,values:e}){let n="";Object.keys(e).forEach(r=>{n===""&&e[r]!==0&&(n=r)});const a=Object.keys(t).sort((r,i)=>t[r]-t[i]);return a.slice(0,a.indexOf(n))}function yr({theme:t,ownerState:e}){const{container:n,rowSpacing:a}=e;let r={};if(n&&a!==0){const i=Dt({values:a,breakpoints:t.breakpoints.values});let s;typeof i=="object"&&(s=En({breakpoints:t.breakpoints.values,values:i})),r=be({theme:t},i,(o,f)=>{const l=t.spacing(o);return l!=="0px"?{marginTop:`calc(-1 * ${l})`,[`& > .${bt.item}`]:{paddingTop:l}}:s!=null&&s.includes(f)?{}:{marginTop:0,[`& > .${bt.item}`]:{paddingTop:0}}})}return r}function br({theme:t,ownerState:e}){const{container:n,columnSpacing:a}=e;let r={};if(n&&a!==0){const i=Dt({values:a,breakpoints:t.breakpoints.values});let s;typeof i=="object"&&(s=En({breakpoints:t.breakpoints.values,values:i})),r=be({theme:t},i,(o,f)=>{const l=t.spacing(o);if(l!=="0px"){const d=`calc(-1 * ${l})`;return{width:`calc(100% + ${l})`,marginLeft:d,[`& > .${bt.item}`]:{paddingLeft:l}}}return s!=null&&s.includes(f)?{}:{width:"100%",marginLeft:0,[`& > .${bt.item}`]:{paddingLeft:0}}})}return r}function vr(t,e,n={}){if(!t||t<=0)return[];if(typeof t=="string"&&!Number.isNaN(Number(t))||typeof t=="number")return[n[`spacing-xs-${String(t)}`]];const a=[];return e.forEach(r=>{const i=t[r];Number(i)>0&&a.push(n[`spacing-${r}-${String(i)}`])}),a}const xr=K("div",{name:"MuiGrid",slot:"Root",overridesResolver:(t,e)=>{const{ownerState:n}=t,{container:a,direction:r,item:i,spacing:s,wrap:o,zeroMinWidth:f,breakpoints:l}=n;let d=[];a&&(d=vr(s,l,e));const m=[];return l.forEach(g=>{const w=n[g];w&&m.push(e[`grid-${g}-${String(w)}`])}),[e.root,a&&e.container,i&&e.item,f&&e.zeroMinWidth,...d,r!=="row"&&e[`direction-xs-${String(r)}`],o!=="wrap"&&e[`wrap-xs-${String(o)}`],...m]}})(({ownerState:t})=>({boxSizing:"border-box",...t.container&&{display:"flex",flexWrap:"wrap",width:"100%"},...t.item&&{margin:0},...t.zeroMinWidth&&{minWidth:0},...t.wrap!=="wrap"&&{flexWrap:t.wrap}}),hr,yr,br,gr);function wr(t,e){if(!t||t<=0)return[];if(typeof t=="string"&&!Number.isNaN(Number(t))||typeof t=="number")return[`spacing-xs-${String(t)}`];const n=[];return e.forEach(a=>{const r=t[a];if(Number(r)>0){const i=`spacing-${a}-${String(r)}`;n.push(i)}}),n}const Ar=t=>{const{classes:e,container:n,direction:a,item:r,spacing:i,wrap:s,zeroMinWidth:o,breakpoints:f}=t;let l=[];n&&(l=wr(i,f));const d=[];f.forEach(g=>{const w=t[g];w&&d.push(`grid-${g}-${String(w)}`)});const m={root:["root",n&&"container",r&&"item",o&&"zeroMinWidth",...l,a!=="row"&&`direction-xs-${String(a)}`,s!=="wrap"&&`wrap-xs-${String(s)}`,...d]};return Tt(m,ur,e)},Fe=P.forwardRef(function(e,n){const a=jt({props:e,name:"MuiGrid"}),{breakpoints:r}=bn(),i=Ba(a),{className:s,columns:o,columnSpacing:f,component:l="div",container:d=!1,direction:m="row",item:g=!1,rowSpacing:w,spacing:S=0,wrap:b="wrap",zeroMinWidth:x=!1,...v}=i,p=w||S,h=f||S,E=P.useContext(ze),k=d?o||12:E,M={},j={...v};r.keys.forEach(O=>{v[O]!=null&&(M[O]=v[O],delete j[O])});const z={...i,columns:k,container:d,direction:m,item:g,rowSpacing:p,columnSpacing:h,wrap:b,zeroMinWidth:x,spacing:S,...M,breakpoints:r.keys},ut=Ar(z);return c.jsx(ze.Provider,{value:k,children:c.jsx(xr,{ownerState:z,className:ot(ut.root,s),as:l,ref:n,...j})})}),Sr={paddingX:"sm:px-16 px-6"};/*!
 * Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */function Er(t,e,n){return(e=Pr(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function _e(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter(function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable})),n.push.apply(n,a)}return n}function u(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?_e(Object(n),!0).forEach(function(a){Er(t,a,n[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):_e(Object(n)).forEach(function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(n,a))})}return t}function kr(t,e){if(typeof t!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var a=n.call(t,e);if(typeof a!="object")return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function Pr(t){var e=kr(t,"string");return typeof e=="symbol"?e:e+""}const Re=()=>{};let ve={},kn={},Pn=null,Cn={mark:Re,measure:Re};try{typeof window<"u"&&(ve=window),typeof document<"u"&&(kn=document),typeof MutationObserver<"u"&&(Pn=MutationObserver),typeof performance<"u"&&(Cn=performance)}catch{}const{userAgent:We=""}=ve.navigator||{},H=ve,C=kn,$e=Pn,St=Cn;H.document;const X=!!C.documentElement&&!!C.head&&typeof C.addEventListener=="function"&&typeof C.createElement=="function",In=~We.indexOf("MSIE")||~We.indexOf("Trident/");var Cr=/fa(s|r|l|t|d|dr|dl|dt|b|k|kd|ss|sr|sl|st|sds|sdr|sdl|sdt)?[\-\ ]/,Ir=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit)?.*/i,On={classic:{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fab:"brands","fa-brands":"brands"},duotone:{fa:"solid",fad:"solid","fa-solid":"solid","fa-duotone":"solid",fadr:"regular","fa-regular":"regular",fadl:"light","fa-light":"light",fadt:"thin","fa-thin":"thin"},sharp:{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"},"sharp-duotone":{fa:"solid",fasds:"solid","fa-solid":"solid",fasdr:"regular","fa-regular":"regular",fasdl:"light","fa-light":"light",fasdt:"thin","fa-thin":"thin"}},Or={GROUP:"duotone-group",PRIMARY:"primary",SECONDARY:"secondary"},Nn=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone"],N="classic",Lt="duotone",Nr="sharp",Mr="sharp-duotone",Mn=[N,Lt,Nr,Mr],jr={classic:{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},duotone:{900:"fad",400:"fadr",300:"fadl",100:"fadt"},sharp:{900:"fass",400:"fasr",300:"fasl",100:"fast"},"sharp-duotone":{900:"fasds",400:"fasdr",300:"fasdl",100:"fasdt"}},Tr={"Font Awesome 6 Free":{900:"fas",400:"far"},"Font Awesome 6 Pro":{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},"Font Awesome 6 Brands":{400:"fab",normal:"fab"},"Font Awesome 6 Duotone":{900:"fad",400:"fadr",normal:"fadr",300:"fadl",100:"fadt"},"Font Awesome 6 Sharp":{900:"fass",400:"fasr",normal:"fasr",300:"fasl",100:"fast"},"Font Awesome 6 Sharp Duotone":{900:"fasds",400:"fasdr",normal:"fasdr",300:"fasdl",100:"fasdt"}},Dr=new Map([["classic",{defaultShortPrefixId:"fas",defaultStyleId:"solid",styleIds:["solid","regular","light","thin","brands"],futureStyleIds:[],defaultFontWeight:900}],["sharp",{defaultShortPrefixId:"fass",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["duotone",{defaultShortPrefixId:"fad",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["sharp-duotone",{defaultShortPrefixId:"fasds",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}]]),Lr={classic:{solid:"fas",regular:"far",light:"fal",thin:"fat",brands:"fab"},duotone:{solid:"fad",regular:"fadr",light:"fadl",thin:"fadt"},sharp:{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"},"sharp-duotone":{solid:"fasds",regular:"fasdr",light:"fasdl",thin:"fasdt"}},zr=["fak","fa-kit","fakd","fa-kit-duotone"],Ye={kit:{fak:"kit","fa-kit":"kit"},"kit-duotone":{fakd:"kit-duotone","fa-kit-duotone":"kit-duotone"}},Fr=["kit"],_r={kit:{"fa-kit":"fak"}},Rr=["fak","fakd"],Wr={kit:{fak:"fa-kit"}},Be={kit:{kit:"fak"},"kit-duotone":{"kit-duotone":"fakd"}},Et={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},$r=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone"],Yr=["fak","fa-kit","fakd","fa-kit-duotone"],Br={"Font Awesome Kit":{400:"fak",normal:"fak"},"Font Awesome Kit Duotone":{400:"fakd",normal:"fakd"}},Xr={classic:{"fa-brands":"fab","fa-duotone":"fad","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},duotone:{"fa-regular":"fadr","fa-light":"fadl","fa-thin":"fadt"},sharp:{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"},"sharp-duotone":{"fa-solid":"fasds","fa-regular":"fasdr","fa-light":"fasdl","fa-thin":"fasdt"}},Ur={classic:["fas","far","fal","fat","fad"],duotone:["fadr","fadl","fadt"],sharp:["fass","fasr","fasl","fast"],"sharp-duotone":["fasds","fasdr","fasdl","fasdt"]},Zt={classic:{fab:"fa-brands",fad:"fa-duotone",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},duotone:{fadr:"fa-regular",fadl:"fa-light",fadt:"fa-thin"},sharp:{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"},"sharp-duotone":{fasds:"fa-solid",fasdr:"fa-regular",fasdl:"fa-light",fasdt:"fa-thin"}},Hr=["fa-solid","fa-regular","fa-light","fa-thin","fa-duotone","fa-brands"],Jt=["fa","fas","far","fal","fat","fad","fadr","fadl","fadt","fab","fass","fasr","fasl","fast","fasds","fasdr","fasdl","fasdt",...$r,...Hr],Gr=["solid","regular","light","thin","duotone","brands"],jn=[1,2,3,4,5,6,7,8,9,10],Vr=jn.concat([11,12,13,14,15,16,17,18,19,20]),qr=[...Object.keys(Ur),...Gr,"2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",Et.GROUP,Et.SWAP_OPACITY,Et.PRIMARY,Et.SECONDARY].concat(jn.map(t=>"".concat(t,"x"))).concat(Vr.map(t=>"w-".concat(t))),Kr={"Font Awesome 5 Free":{900:"fas",400:"far"},"Font Awesome 5 Pro":{900:"fas",400:"far",normal:"far",300:"fal"},"Font Awesome 5 Brands":{400:"fab",normal:"fab"},"Font Awesome 5 Duotone":{900:"fad"}};const Y="___FONT_AWESOME___",te=16,Tn="fa",Dn="svg-inline--fa",tt="data-fa-i2svg",ee="data-fa-pseudo-element",Qr="data-fa-pseudo-element-pending",xe="data-prefix",we="data-icon",Xe="fontawesome-i2svg",Zr="async",Jr=["HTML","HEAD","STYLE","SCRIPT"],Ln=(()=>{try{return!0}catch{return!1}})();function wt(t){return new Proxy(t,{get(e,n){return n in e?e[n]:e[N]}})}const zn=u({},On);zn[N]=u(u(u(u({},{"fa-duotone":"duotone"}),On[N]),Ye.kit),Ye["kit-duotone"]);const ti=wt(zn),ne=u({},Lr);ne[N]=u(u(u(u({},{duotone:"fad"}),ne[N]),Be.kit),Be["kit-duotone"]);const Ue=wt(ne),ae=u({},Zt);ae[N]=u(u({},ae[N]),Wr.kit);const Ae=wt(ae),re=u({},Xr);re[N]=u(u({},re[N]),_r.kit);wt(re);const ei=Cr,Fn="fa-layers-text",ni=Ir,ai=u({},jr);wt(ai);const ri=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],Xt=Or,ii=[...Fr,...qr],ht=H.FontAwesomeConfig||{};function si(t){var e=C.querySelector("script["+t+"]");if(e)return e.getAttribute(t)}function oi(t){return t===""?!0:t==="false"?!1:t==="true"?!0:t}C&&typeof C.querySelector=="function"&&[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]].forEach(e=>{let[n,a]=e;const r=oi(si(n));r!=null&&(ht[a]=r)});const _n={styleDefault:"solid",familyDefault:N,cssPrefix:Tn,replacementClass:Dn,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};ht.familyPrefix&&(ht.cssPrefix=ht.familyPrefix);const ct=u(u({},_n),ht);ct.autoReplaceSvg||(ct.observeMutations=!1);const y={};Object.keys(_n).forEach(t=>{Object.defineProperty(y,t,{enumerable:!0,set:function(e){ct[t]=e,yt.forEach(n=>n(y))},get:function(){return ct[t]}})});Object.defineProperty(y,"familyPrefix",{enumerable:!0,set:function(t){ct.cssPrefix=t,yt.forEach(e=>e(y))},get:function(){return ct.cssPrefix}});H.FontAwesomeConfig=y;const yt=[];function li(t){return yt.push(t),()=>{yt.splice(yt.indexOf(t),1)}}const U=te,R={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function ci(t){if(!t||!X)return;const e=C.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=t;const n=C.head.childNodes;let a=null;for(let r=n.length-1;r>-1;r--){const i=n[r],s=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(s)>-1&&(a=i)}return C.head.insertBefore(e,a),t}const fi="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function vt(){let t=12,e="";for(;t-- >0;)e+=fi[Math.random()*62|0];return e}function ft(t){const e=[];for(let n=(t||[]).length>>>0;n--;)e[n]=t[n];return e}function Se(t){return t.classList?ft(t.classList):(t.getAttribute("class")||"").split(" ").filter(e=>e)}function Rn(t){return"".concat(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function ui(t){return Object.keys(t||{}).reduce((e,n)=>e+"".concat(n,'="').concat(Rn(t[n]),'" '),"").trim()}function zt(t){return Object.keys(t||{}).reduce((e,n)=>e+"".concat(n,": ").concat(t[n].trim(),";"),"")}function Ee(t){return t.size!==R.size||t.x!==R.x||t.y!==R.y||t.rotate!==R.rotate||t.flipX||t.flipY}function di(t){let{transform:e,containerWidth:n,iconWidth:a}=t;const r={transform:"translate(".concat(n/2," 256)")},i="translate(".concat(e.x*32,", ").concat(e.y*32,") "),s="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),o="rotate(".concat(e.rotate," 0 0)"),f={transform:"".concat(i," ").concat(s," ").concat(o)},l={transform:"translate(".concat(a/2*-1," -256)")};return{outer:r,inner:f,path:l}}function pi(t){let{transform:e,width:n=te,height:a=te,startCentered:r=!1}=t,i="";return r&&In?i+="translate(".concat(e.x/U-n/2,"em, ").concat(e.y/U-a/2,"em) "):r?i+="translate(calc(-50% + ".concat(e.x/U,"em), calc(-50% + ").concat(e.y/U,"em)) "):i+="translate(".concat(e.x/U,"em, ").concat(e.y/U,"em) "),i+="scale(".concat(e.size/U*(e.flipX?-1:1),", ").concat(e.size/U*(e.flipY?-1:1),") "),i+="rotate(".concat(e.rotate,"deg) "),i}var mi=`:root, :host {
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
}`;function Wn(){const t=Tn,e=Dn,n=y.cssPrefix,a=y.replacementClass;let r=mi;if(n!==t||a!==e){const i=new RegExp("\\.".concat(t,"\\-"),"g"),s=new RegExp("\\--".concat(t,"\\-"),"g"),o=new RegExp("\\.".concat(e),"g");r=r.replace(i,".".concat(n,"-")).replace(s,"--".concat(n,"-")).replace(o,".".concat(a))}return r}let He=!1;function Ut(){y.autoAddCss&&!He&&(ci(Wn()),He=!0)}var gi={mixout(){return{dom:{css:Wn,insertCss:Ut}}},hooks(){return{beforeDOMElementCreation(){Ut()},beforeI2svg(){Ut()}}}};const B=H||{};B[Y]||(B[Y]={});B[Y].styles||(B[Y].styles={});B[Y].hooks||(B[Y].hooks={});B[Y].shims||(B[Y].shims=[]);var W=B[Y];const $n=[],Yn=function(){C.removeEventListener("DOMContentLoaded",Yn),Ct=1,$n.map(t=>t())};let Ct=!1;X&&(Ct=(C.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(C.readyState),Ct||C.addEventListener("DOMContentLoaded",Yn));function hi(t){X&&(Ct?setTimeout(t,0):$n.push(t))}function At(t){const{tag:e,attributes:n={},children:a=[]}=t;return typeof t=="string"?Rn(t):"<".concat(e," ").concat(ui(n),">").concat(a.map(At).join(""),"</").concat(e,">")}function Ge(t,e,n){if(t&&t[e]&&t[e][n])return{prefix:e,iconName:n,icon:t[e][n]}}var Ht=function(e,n,a,r){var i=Object.keys(e),s=i.length,o=n,f,l,d;for(a===void 0?(f=1,d=e[i[0]]):(f=0,d=a);f<s;f++)l=i[f],d=o(d,e[l],l,e);return d};function yi(t){const e=[];let n=0;const a=t.length;for(;n<a;){const r=t.charCodeAt(n++);if(r>=55296&&r<=56319&&n<a){const i=t.charCodeAt(n++);(i&64512)==56320?e.push(((r&1023)<<10)+(i&1023)+65536):(e.push(r),n--)}else e.push(r)}return e}function ie(t){const e=yi(t);return e.length===1?e[0].toString(16):null}function bi(t,e){const n=t.length;let a=t.charCodeAt(e),r;return a>=55296&&a<=56319&&n>e+1&&(r=t.charCodeAt(e+1),r>=56320&&r<=57343)?(a-55296)*1024+r-56320+65536:a}function Ve(t){return Object.keys(t).reduce((e,n)=>{const a=t[n];return!!a.icon?e[a.iconName]=a.icon:e[n]=a,e},{})}function se(t,e){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};const{skipHooks:a=!1}=n,r=Ve(e);typeof W.hooks.addPack=="function"&&!a?W.hooks.addPack(t,Ve(e)):W.styles[t]=u(u({},W.styles[t]||{}),r),t==="fas"&&se("fa",e)}const{styles:xt,shims:vi}=W,Bn=Object.keys(Ae),xi=Bn.reduce((t,e)=>(t[e]=Object.keys(Ae[e]),t),{});let ke=null,Xn={},Un={},Hn={},Gn={},Vn={};function wi(t){return~ii.indexOf(t)}function Ai(t,e){const n=e.split("-"),a=n[0],r=n.slice(1).join("-");return a===t&&r!==""&&!wi(r)?r:null}const qn=()=>{const t=a=>Ht(xt,(r,i,s)=>(r[s]=Ht(i,a,{}),r),{});Xn=t((a,r,i)=>(r[3]&&(a[r[3]]=i),r[2]&&r[2].filter(o=>typeof o=="number").forEach(o=>{a[o.toString(16)]=i}),a)),Un=t((a,r,i)=>(a[i]=i,r[2]&&r[2].filter(o=>typeof o=="string").forEach(o=>{a[o]=i}),a)),Vn=t((a,r,i)=>{const s=r[2];return a[i]=i,s.forEach(o=>{a[o]=i}),a});const e="far"in xt||y.autoFetchSvg,n=Ht(vi,(a,r)=>{const i=r[0];let s=r[1];const o=r[2];return s==="far"&&!e&&(s="fas"),typeof i=="string"&&(a.names[i]={prefix:s,iconName:o}),typeof i=="number"&&(a.unicodes[i.toString(16)]={prefix:s,iconName:o}),a},{names:{},unicodes:{}});Hn=n.names,Gn=n.unicodes,ke=Ft(y.styleDefault,{family:y.familyDefault})};li(t=>{ke=Ft(t.styleDefault,{family:y.familyDefault})});qn();function Pe(t,e){return(Xn[t]||{})[e]}function Si(t,e){return(Un[t]||{})[e]}function Z(t,e){return(Vn[t]||{})[e]}function Kn(t){return Hn[t]||{prefix:null,iconName:null}}function Ei(t){const e=Gn[t],n=Pe("fas",t);return e||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function G(){return ke}const Qn=()=>({prefix:null,iconName:null,rest:[]});function ki(t){let e=N;const n=Bn.reduce((a,r)=>(a[r]="".concat(y.cssPrefix,"-").concat(r),a),{});return Mn.forEach(a=>{(t.includes(n[a])||t.some(r=>xi[a].includes(r)))&&(e=a)}),e}function Ft(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{family:n=N}=e,a=ti[n][t];if(n===Lt&&!t)return"fad";const r=Ue[n][t]||Ue[n][a],i=t in W.styles?t:null;return r||i||null}function Pi(t){let e=[],n=null;return t.forEach(a=>{const r=Ai(y.cssPrefix,a);r?n=r:a&&e.push(a)}),{iconName:n,rest:e}}function qe(t){return t.sort().filter((e,n,a)=>a.indexOf(e)===n)}function _t(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{skipLookups:n=!1}=e;let a=null;const r=Jt.concat(Yr),i=qe(t.filter(m=>r.includes(m))),s=qe(t.filter(m=>!Jt.includes(m))),o=i.filter(m=>(a=m,!Nn.includes(m))),[f=null]=o,l=ki(i),d=u(u({},Pi(s)),{},{prefix:Ft(f,{family:l})});return u(u(u({},d),Ni({values:t,family:l,styles:xt,config:y,canonical:d,givenPrefix:a})),Ci(n,a,d))}function Ci(t,e,n){let{prefix:a,iconName:r}=n;if(t||!a||!r)return{prefix:a,iconName:r};const i=e==="fa"?Kn(r):{},s=Z(a,r);return r=i.iconName||s||r,a=i.prefix||a,a==="far"&&!xt.far&&xt.fas&&!y.autoFetchSvg&&(a="fas"),{prefix:a,iconName:r}}const Ii=Mn.filter(t=>t!==N||t!==Lt),Oi=Object.keys(Zt).filter(t=>t!==N).map(t=>Object.keys(Zt[t])).flat();function Ni(t){const{values:e,family:n,canonical:a,givenPrefix:r="",styles:i={},config:s={}}=t,o=n===Lt,f=e.includes("fa-duotone")||e.includes("fad"),l=s.familyDefault==="duotone",d=a.prefix==="fad"||a.prefix==="fa-duotone";if(!o&&(f||l||d)&&(a.prefix="fad"),(e.includes("fa-brands")||e.includes("fab"))&&(a.prefix="fab"),!a.prefix&&Ii.includes(n)&&(Object.keys(i).find(g=>Oi.includes(g))||s.autoFetchSvg)){const g=Dr.get(n).defaultShortPrefixId;a.prefix=g,a.iconName=Z(a.prefix,a.iconName)||a.iconName}return(a.prefix==="fa"||r==="fa")&&(a.prefix=G()||"fas"),a}class Mi{constructor(){this.definitions={}}add(){for(var e=arguments.length,n=new Array(e),a=0;a<e;a++)n[a]=arguments[a];const r=n.reduce(this._pullDefinitions,{});Object.keys(r).forEach(i=>{this.definitions[i]=u(u({},this.definitions[i]||{}),r[i]),se(i,r[i]);const s=Ae[N][i];s&&se(s,r[i]),qn()})}reset(){this.definitions={}}_pullDefinitions(e,n){const a=n.prefix&&n.iconName&&n.icon?{0:n}:n;return Object.keys(a).map(r=>{const{prefix:i,iconName:s,icon:o}=a[r],f=o[2];e[i]||(e[i]={}),f.length>0&&f.forEach(l=>{typeof l=="string"&&(e[i][l]=o)}),e[i][s]=o}),e}}let Ke=[],it={};const lt={},ji=Object.keys(lt);function Ti(t,e){let{mixoutsTo:n}=e;return Ke=t,it={},Object.keys(lt).forEach(a=>{ji.indexOf(a)===-1&&delete lt[a]}),Ke.forEach(a=>{const r=a.mixout?a.mixout():{};if(Object.keys(r).forEach(i=>{typeof r[i]=="function"&&(n[i]=r[i]),typeof r[i]=="object"&&Object.keys(r[i]).forEach(s=>{n[i]||(n[i]={}),n[i][s]=r[i][s]})}),a.hooks){const i=a.hooks();Object.keys(i).forEach(s=>{it[s]||(it[s]=[]),it[s].push(i[s])})}a.provides&&a.provides(lt)}),n}function oe(t,e){for(var n=arguments.length,a=new Array(n>2?n-2:0),r=2;r<n;r++)a[r-2]=arguments[r];return(it[t]||[]).forEach(s=>{e=s.apply(null,[e,...a])}),e}function et(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),a=1;a<e;a++)n[a-1]=arguments[a];(it[t]||[]).forEach(i=>{i.apply(null,n)})}function V(){const t=arguments[0],e=Array.prototype.slice.call(arguments,1);return lt[t]?lt[t].apply(null,e):void 0}function le(t){t.prefix==="fa"&&(t.prefix="fas");let{iconName:e}=t;const n=t.prefix||G();if(e)return e=Z(n,e)||e,Ge(Zn.definitions,n,e)||Ge(W.styles,n,e)}const Zn=new Mi,Di=()=>{y.autoReplaceSvg=!1,y.observeMutations=!1,et("noAuto")},Li={i2svg:function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return X?(et("beforeI2svg",t),V("pseudoElements2svg",t),V("i2svg",t)):Promise.reject(new Error("Operation requires a DOM of some kind."))},watch:function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:e}=t;y.autoReplaceSvg===!1&&(y.autoReplaceSvg=!0),y.observeMutations=!0,hi(()=>{Fi({autoReplaceSvgRoot:e}),et("watch",t)})}},zi={icon:t=>{if(t===null)return null;if(typeof t=="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:Z(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){const e=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],n=Ft(t[0]);return{prefix:n,iconName:Z(n,e)||e}}if(typeof t=="string"&&(t.indexOf("".concat(y.cssPrefix,"-"))>-1||t.match(ei))){const e=_t(t.split(" "),{skipLookups:!0});return{prefix:e.prefix||G(),iconName:Z(e.prefix,e.iconName)||e.iconName}}if(typeof t=="string"){const e=G();return{prefix:e,iconName:Z(e,t)||t}}}},D={noAuto:Di,config:y,dom:Li,parse:zi,library:Zn,findIconDefinition:le,toHtml:At},Fi=function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:e=C}=t;(Object.keys(W.styles).length>0||y.autoFetchSvg)&&X&&y.autoReplaceSvg&&D.dom.i2svg({node:e})};function Rt(t,e){return Object.defineProperty(t,"abstract",{get:e}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map(n=>At(n))}}),Object.defineProperty(t,"node",{get:function(){if(!X)return;const n=C.createElement("div");return n.innerHTML=t.html,n.children}}),t}function _i(t){let{children:e,main:n,mask:a,attributes:r,styles:i,transform:s}=t;if(Ee(s)&&n.found&&!a.found){const{width:o,height:f}=n,l={x:o/f/2,y:.5};r.style=zt(u(u({},i),{},{"transform-origin":"".concat(l.x+s.x/16,"em ").concat(l.y+s.y/16,"em")}))}return[{tag:"svg",attributes:r,children:e}]}function Ri(t){let{prefix:e,iconName:n,children:a,attributes:r,symbol:i}=t;const s=i===!0?"".concat(e,"-").concat(y.cssPrefix,"-").concat(n):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:u(u({},r),{},{id:s}),children:a}]}]}function Ce(t){const{icons:{main:e,mask:n},prefix:a,iconName:r,transform:i,symbol:s,title:o,maskId:f,titleId:l,extra:d,watchable:m=!1}=t,{width:g,height:w}=n.found?n:e,S=Rr.includes(a),b=[y.replacementClass,r?"".concat(y.cssPrefix,"-").concat(r):""].filter(k=>d.classes.indexOf(k)===-1).filter(k=>k!==""||!!k).concat(d.classes).join(" ");let x={children:[],attributes:u(u({},d.attributes),{},{"data-prefix":a,"data-icon":r,class:b,role:d.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(g," ").concat(w)})};const v=S&&!~d.classes.indexOf("fa-fw")?{width:"".concat(g/w*16*.0625,"em")}:{};m&&(x.attributes[tt]=""),o&&(x.children.push({tag:"title",attributes:{id:x.attributes["aria-labelledby"]||"title-".concat(l||vt())},children:[o]}),delete x.attributes.title);const p=u(u({},x),{},{prefix:a,iconName:r,main:e,mask:n,maskId:f,transform:i,symbol:s,styles:u(u({},v),d.styles)}),{children:h,attributes:E}=n.found&&e.found?V("generateAbstractMask",p)||{children:[],attributes:{}}:V("generateAbstractIcon",p)||{children:[],attributes:{}};return p.children=h,p.attributes=E,s?Ri(p):_i(p)}function Qe(t){const{content:e,width:n,height:a,transform:r,title:i,extra:s,watchable:o=!1}=t,f=u(u(u({},s.attributes),i?{title:i}:{}),{},{class:s.classes.join(" ")});o&&(f[tt]="");const l=u({},s.styles);Ee(r)&&(l.transform=pi({transform:r,startCentered:!0,width:n,height:a}),l["-webkit-transform"]=l.transform);const d=zt(l);d.length>0&&(f.style=d);const m=[];return m.push({tag:"span",attributes:f,children:[e]}),i&&m.push({tag:"span",attributes:{class:"sr-only"},children:[i]}),m}function Wi(t){const{content:e,title:n,extra:a}=t,r=u(u(u({},a.attributes),n?{title:n}:{}),{},{class:a.classes.join(" ")}),i=zt(a.styles);i.length>0&&(r.style=i);const s=[];return s.push({tag:"span",attributes:r,children:[e]}),n&&s.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),s}const{styles:Gt}=W;function ce(t){const e=t[0],n=t[1],[a]=t.slice(4);let r=null;return Array.isArray(a)?r={tag:"g",attributes:{class:"".concat(y.cssPrefix,"-").concat(Xt.GROUP)},children:[{tag:"path",attributes:{class:"".concat(y.cssPrefix,"-").concat(Xt.SECONDARY),fill:"currentColor",d:a[0]}},{tag:"path",attributes:{class:"".concat(y.cssPrefix,"-").concat(Xt.PRIMARY),fill:"currentColor",d:a[1]}}]}:r={tag:"path",attributes:{fill:"currentColor",d:a}},{found:!0,width:e,height:n,icon:r}}const $i={found:!1,width:512,height:512};function Yi(t,e){!Ln&&!y.showMissingIcons&&t&&console.error('Icon with name "'.concat(t,'" and prefix "').concat(e,'" is missing.'))}function fe(t,e){let n=e;return e==="fa"&&y.styleDefault!==null&&(e=G()),new Promise((a,r)=>{if(n==="fa"){const i=Kn(t)||{};t=i.iconName||t,e=i.prefix||e}if(t&&e&&Gt[e]&&Gt[e][t]){const i=Gt[e][t];return a(ce(i))}Yi(t,e),a(u(u({},$i),{},{icon:y.showMissingIcons&&t?V("missingIconAbstract")||{}:{}}))})}const Ze=()=>{},ue=y.measurePerformance&&St&&St.mark&&St.measure?St:{mark:Ze,measure:Ze},gt='FA "6.7.2"',Bi=t=>(ue.mark("".concat(gt," ").concat(t," begins")),()=>Jn(t)),Jn=t=>{ue.mark("".concat(gt," ").concat(t," ends")),ue.measure("".concat(gt," ").concat(t),"".concat(gt," ").concat(t," begins"),"".concat(gt," ").concat(t," ends"))};var Ie={begin:Bi,end:Jn};const kt=()=>{};function Je(t){return typeof(t.getAttribute?t.getAttribute(tt):null)=="string"}function Xi(t){const e=t.getAttribute?t.getAttribute(xe):null,n=t.getAttribute?t.getAttribute(we):null;return e&&n}function Ui(t){return t&&t.classList&&t.classList.contains&&t.classList.contains(y.replacementClass)}function Hi(){return y.autoReplaceSvg===!0?Pt.replace:Pt[y.autoReplaceSvg]||Pt.replace}function Gi(t){return C.createElementNS("http://www.w3.org/2000/svg",t)}function Vi(t){return C.createElement(t)}function ta(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{ceFn:n=t.tag==="svg"?Gi:Vi}=e;if(typeof t=="string")return C.createTextNode(t);const a=n(t.tag);return Object.keys(t.attributes||[]).forEach(function(i){a.setAttribute(i,t.attributes[i])}),(t.children||[]).forEach(function(i){a.appendChild(ta(i,{ceFn:n}))}),a}function qi(t){let e=" ".concat(t.outerHTML," ");return e="".concat(e,"Font Awesome fontawesome.com "),e}const Pt={replace:function(t){const e=t[0];if(e.parentNode)if(t[1].forEach(n=>{e.parentNode.insertBefore(ta(n),e)}),e.getAttribute(tt)===null&&y.keepOriginalSource){let n=C.createComment(qi(e));e.parentNode.replaceChild(n,e)}else e.remove()},nest:function(t){const e=t[0],n=t[1];if(~Se(e).indexOf(y.replacementClass))return Pt.replace(t);const a=new RegExp("".concat(y.cssPrefix,"-.*"));if(delete n[0].attributes.id,n[0].attributes.class){const i=n[0].attributes.class.split(" ").reduce((s,o)=>(o===y.replacementClass||o.match(a)?s.toSvg.push(o):s.toNode.push(o),s),{toNode:[],toSvg:[]});n[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?e.removeAttribute("class"):e.setAttribute("class",i.toNode.join(" "))}const r=n.map(i=>At(i)).join(`
`);e.setAttribute(tt,""),e.innerHTML=r}};function tn(t){t()}function ea(t,e){const n=typeof e=="function"?e:kt;if(t.length===0)n();else{let a=tn;y.mutateApproach===Zr&&(a=H.requestAnimationFrame||tn),a(()=>{const r=Hi(),i=Ie.begin("mutate");t.map(r),i(),n()})}}let Oe=!1;function na(){Oe=!0}function de(){Oe=!1}let It=null;function en(t){if(!$e||!y.observeMutations)return;const{treeCallback:e=kt,nodeCallback:n=kt,pseudoElementsCallback:a=kt,observeMutationsRoot:r=C}=t;It=new $e(i=>{if(Oe)return;const s=G();ft(i).forEach(o=>{if(o.type==="childList"&&o.addedNodes.length>0&&!Je(o.addedNodes[0])&&(y.searchPseudoElements&&a(o.target),e(o.target)),o.type==="attributes"&&o.target.parentNode&&y.searchPseudoElements&&a(o.target.parentNode),o.type==="attributes"&&Je(o.target)&&~ri.indexOf(o.attributeName))if(o.attributeName==="class"&&Xi(o.target)){const{prefix:f,iconName:l}=_t(Se(o.target));o.target.setAttribute(xe,f||s),l&&o.target.setAttribute(we,l)}else Ui(o.target)&&n(o.target)})}),X&&It.observe(r,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}function Ki(){It&&It.disconnect()}function Qi(t){const e=t.getAttribute("style");let n=[];return e&&(n=e.split(";").reduce((a,r)=>{const i=r.split(":"),s=i[0],o=i.slice(1);return s&&o.length>0&&(a[s]=o.join(":").trim()),a},{})),n}function Zi(t){const e=t.getAttribute("data-prefix"),n=t.getAttribute("data-icon"),a=t.innerText!==void 0?t.innerText.trim():"";let r=_t(Se(t));return r.prefix||(r.prefix=G()),e&&n&&(r.prefix=e,r.iconName=n),r.iconName&&r.prefix||(r.prefix&&a.length>0&&(r.iconName=Si(r.prefix,t.innerText)||Pe(r.prefix,ie(t.innerText))),!r.iconName&&y.autoFetchSvg&&t.firstChild&&t.firstChild.nodeType===Node.TEXT_NODE&&(r.iconName=t.firstChild.data)),r}function Ji(t){const e=ft(t.attributes).reduce((r,i)=>(r.name!=="class"&&r.name!=="style"&&(r[i.name]=i.value),r),{}),n=t.getAttribute("title"),a=t.getAttribute("data-fa-title-id");return y.autoA11y&&(n?e["aria-labelledby"]="".concat(y.replacementClass,"-title-").concat(a||vt()):(e["aria-hidden"]="true",e.focusable="false")),e}function ts(){return{iconName:null,title:null,titleId:null,prefix:null,transform:R,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function nn(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0};const{iconName:n,prefix:a,rest:r}=Zi(t),i=Ji(t),s=oe("parseNodeAttributes",{},t);let o=e.styleParser?Qi(t):[];return u({iconName:n,title:t.getAttribute("title"),titleId:t.getAttribute("data-fa-title-id"),prefix:a,transform:R,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:r,styles:o,attributes:i}},s)}const{styles:es}=W;function aa(t){const e=y.autoReplaceSvg==="nest"?nn(t,{styleParser:!1}):nn(t);return~e.extra.classes.indexOf(Fn)?V("generateLayersText",t,e):V("generateSvgReplacementMutation",t,e)}function ns(){return[...zr,...Jt]}function an(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!X)return Promise.resolve();const n=C.documentElement.classList,a=d=>n.add("".concat(Xe,"-").concat(d)),r=d=>n.remove("".concat(Xe,"-").concat(d)),i=y.autoFetchSvg?ns():Nn.concat(Object.keys(es));i.includes("fa")||i.push("fa");const s=[".".concat(Fn,":not([").concat(tt,"])")].concat(i.map(d=>".".concat(d,":not([").concat(tt,"])"))).join(", ");if(s.length===0)return Promise.resolve();let o=[];try{o=ft(t.querySelectorAll(s))}catch{}if(o.length>0)a("pending"),r("complete");else return Promise.resolve();const f=Ie.begin("onTree"),l=o.reduce((d,m)=>{try{const g=aa(m);g&&d.push(g)}catch(g){Ln||g.name==="MissingIcon"&&console.error(g)}return d},[]);return new Promise((d,m)=>{Promise.all(l).then(g=>{ea(g,()=>{a("active"),a("complete"),r("pending"),typeof e=="function"&&e(),f(),d()})}).catch(g=>{f(),m(g)})})}function as(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;aa(t).then(n=>{n&&ea([n],e)})}function rs(t){return function(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const a=(e||{}).icon?e:le(e||{});let{mask:r}=n;return r&&(r=(r||{}).icon?r:le(r||{})),t(a,u(u({},n),{},{mask:r}))}}const is=function(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:n=R,symbol:a=!1,mask:r=null,maskId:i=null,title:s=null,titleId:o=null,classes:f=[],attributes:l={},styles:d={}}=e;if(!t)return;const{prefix:m,iconName:g,icon:w}=t;return Rt(u({type:"icon"},t),()=>(et("beforeDOMElementCreation",{iconDefinition:t,params:e}),y.autoA11y&&(s?l["aria-labelledby"]="".concat(y.replacementClass,"-title-").concat(o||vt()):(l["aria-hidden"]="true",l.focusable="false")),Ce({icons:{main:ce(w),mask:r?ce(r.icon):{found:!1,width:null,height:null,icon:{}}},prefix:m,iconName:g,transform:u(u({},R),n),symbol:a,title:s,maskId:i,titleId:o,extra:{attributes:l,styles:d,classes:f}})))};var ss={mixout(){return{icon:rs(is)}},hooks(){return{mutationObserverCallbacks(t){return t.treeCallback=an,t.nodeCallback=as,t}}},provides(t){t.i2svg=function(e){const{node:n=C,callback:a=()=>{}}=e;return an(n,a)},t.generateSvgReplacementMutation=function(e,n){const{iconName:a,title:r,titleId:i,prefix:s,transform:o,symbol:f,mask:l,maskId:d,extra:m}=n;return new Promise((g,w)=>{Promise.all([fe(a,s),l.iconName?fe(l.iconName,l.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(S=>{let[b,x]=S;g([e,Ce({icons:{main:b,mask:x},prefix:s,iconName:a,transform:o,symbol:f,maskId:d,title:r,titleId:i,extra:m,watchable:!0})])}).catch(w)})},t.generateAbstractIcon=function(e){let{children:n,attributes:a,main:r,transform:i,styles:s}=e;const o=zt(s);o.length>0&&(a.style=o);let f;return Ee(i)&&(f=V("generateAbstractTransformGrouping",{main:r,transform:i,containerWidth:r.width,iconWidth:r.width})),n.push(f||r.icon),{children:n,attributes:a}}}},os={mixout(){return{layer(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{classes:n=[]}=e;return Rt({type:"layer"},()=>{et("beforeDOMElementCreation",{assembler:t,params:e});let a=[];return t(r=>{Array.isArray(r)?r.map(i=>{a=a.concat(i.abstract)}):a=a.concat(r.abstract)}),[{tag:"span",attributes:{class:["".concat(y.cssPrefix,"-layers"),...n].join(" ")},children:a}]})}}}},ls={mixout(){return{counter(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{title:n=null,classes:a=[],attributes:r={},styles:i={}}=e;return Rt({type:"counter",content:t},()=>(et("beforeDOMElementCreation",{content:t,params:e}),Wi({content:t.toString(),title:n,extra:{attributes:r,styles:i,classes:["".concat(y.cssPrefix,"-layers-counter"),...a]}})))}}}},cs={mixout(){return{text(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:n=R,title:a=null,classes:r=[],attributes:i={},styles:s={}}=e;return Rt({type:"text",content:t},()=>(et("beforeDOMElementCreation",{content:t,params:e}),Qe({content:t,transform:u(u({},R),n),title:a,extra:{attributes:i,styles:s,classes:["".concat(y.cssPrefix,"-layers-text"),...r]}})))}}},provides(t){t.generateLayersText=function(e,n){const{title:a,transform:r,extra:i}=n;let s=null,o=null;if(In){const f=parseInt(getComputedStyle(e).fontSize,10),l=e.getBoundingClientRect();s=l.width/f,o=l.height/f}return y.autoA11y&&!a&&(i.attributes["aria-hidden"]="true"),Promise.resolve([e,Qe({content:e.innerHTML,width:s,height:o,transform:r,title:a,extra:i,watchable:!0})])}}};const fs=new RegExp('"',"ug"),rn=[1105920,1112319],sn=u(u(u(u({},{FontAwesome:{normal:"fas",400:"fas"}}),Tr),Kr),Br),pe=Object.keys(sn).reduce((t,e)=>(t[e.toLowerCase()]=sn[e],t),{}),us=Object.keys(pe).reduce((t,e)=>{const n=pe[e];return t[e]=n[900]||[...Object.entries(n)][0][1],t},{});function ds(t){const e=t.replace(fs,""),n=bi(e,0),a=n>=rn[0]&&n<=rn[1],r=e.length===2?e[0]===e[1]:!1;return{value:ie(r?e[0]:e),isSecondary:a||r}}function ps(t,e){const n=t.replace(/^['"]|['"]$/g,"").toLowerCase(),a=parseInt(e),r=isNaN(a)?"normal":a;return(pe[n]||{})[r]||us[n]}function on(t,e){const n="".concat(Qr).concat(e.replace(":","-"));return new Promise((a,r)=>{if(t.getAttribute(n)!==null)return a();const s=ft(t.children).filter(g=>g.getAttribute(ee)===e)[0],o=H.getComputedStyle(t,e),f=o.getPropertyValue("font-family"),l=f.match(ni),d=o.getPropertyValue("font-weight"),m=o.getPropertyValue("content");if(s&&!l)return t.removeChild(s),a();if(l&&m!=="none"&&m!==""){const g=o.getPropertyValue("content");let w=ps(f,d);const{value:S,isSecondary:b}=ds(g),x=l[0].startsWith("FontAwesome");let v=Pe(w,S),p=v;if(x){const h=Ei(S);h.iconName&&h.prefix&&(v=h.iconName,w=h.prefix)}if(v&&!b&&(!s||s.getAttribute(xe)!==w||s.getAttribute(we)!==p)){t.setAttribute(n,p),s&&t.removeChild(s);const h=ts(),{extra:E}=h;E.attributes[ee]=e,fe(v,w).then(k=>{const M=Ce(u(u({},h),{},{icons:{main:k,mask:Qn()},prefix:w,iconName:p,extra:E,watchable:!0})),j=C.createElementNS("http://www.w3.org/2000/svg","svg");e==="::before"?t.insertBefore(j,t.firstChild):t.appendChild(j),j.outerHTML=M.map(z=>At(z)).join(`
`),t.removeAttribute(n),a()}).catch(r)}else a()}else a()})}function ms(t){return Promise.all([on(t,"::before"),on(t,"::after")])}function gs(t){return t.parentNode!==document.head&&!~Jr.indexOf(t.tagName.toUpperCase())&&!t.getAttribute(ee)&&(!t.parentNode||t.parentNode.tagName!=="svg")}function ln(t){if(X)return new Promise((e,n)=>{const a=ft(t.querySelectorAll("*")).filter(gs).map(ms),r=Ie.begin("searchPseudoElements");na(),Promise.all(a).then(()=>{r(),de(),e()}).catch(()=>{r(),de(),n()})})}var hs={hooks(){return{mutationObserverCallbacks(t){return t.pseudoElementsCallback=ln,t}}},provides(t){t.pseudoElements2svg=function(e){const{node:n=C}=e;y.searchPseudoElements&&ln(n)}}};let cn=!1;var ys={mixout(){return{dom:{unwatch(){na(),cn=!0}}}},hooks(){return{bootstrap(){en(oe("mutationObserverCallbacks",{}))},noAuto(){Ki()},watch(t){const{observeMutationsRoot:e}=t;cn?de():en(oe("mutationObserverCallbacks",{observeMutationsRoot:e}))}}}};const fn=t=>{let e={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce((n,a)=>{const r=a.toLowerCase().split("-"),i=r[0];let s=r.slice(1).join("-");if(i&&s==="h")return n.flipX=!0,n;if(i&&s==="v")return n.flipY=!0,n;if(s=parseFloat(s),isNaN(s))return n;switch(i){case"grow":n.size=n.size+s;break;case"shrink":n.size=n.size-s;break;case"left":n.x=n.x-s;break;case"right":n.x=n.x+s;break;case"up":n.y=n.y-s;break;case"down":n.y=n.y+s;break;case"rotate":n.rotate=n.rotate+s;break}return n},e)};var bs={mixout(){return{parse:{transform:t=>fn(t)}}},hooks(){return{parseNodeAttributes(t,e){const n=e.getAttribute("data-fa-transform");return n&&(t.transform=fn(n)),t}}},provides(t){t.generateAbstractTransformGrouping=function(e){let{main:n,transform:a,containerWidth:r,iconWidth:i}=e;const s={transform:"translate(".concat(r/2," 256)")},o="translate(".concat(a.x*32,", ").concat(a.y*32,") "),f="scale(".concat(a.size/16*(a.flipX?-1:1),", ").concat(a.size/16*(a.flipY?-1:1),") "),l="rotate(".concat(a.rotate," 0 0)"),d={transform:"".concat(o," ").concat(f," ").concat(l)},m={transform:"translate(".concat(i/2*-1," -256)")},g={outer:s,inner:d,path:m};return{tag:"g",attributes:u({},g.outer),children:[{tag:"g",attributes:u({},g.inner),children:[{tag:n.icon.tag,children:n.icon.children,attributes:u(u({},n.icon.attributes),g.path)}]}]}}}};const Vt={x:0,y:0,width:"100%",height:"100%"};function un(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return t.attributes&&(t.attributes.fill||e)&&(t.attributes.fill="black"),t}function vs(t){return t.tag==="g"?t.children:[t]}var xs={hooks(){return{parseNodeAttributes(t,e){const n=e.getAttribute("data-fa-mask"),a=n?_t(n.split(" ").map(r=>r.trim())):Qn();return a.prefix||(a.prefix=G()),t.mask=a,t.maskId=e.getAttribute("data-fa-mask-id"),t}}},provides(t){t.generateAbstractMask=function(e){let{children:n,attributes:a,main:r,mask:i,maskId:s,transform:o}=e;const{width:f,icon:l}=r,{width:d,icon:m}=i,g=di({transform:o,containerWidth:d,iconWidth:f}),w={tag:"rect",attributes:u(u({},Vt),{},{fill:"white"})},S=l.children?{children:l.children.map(un)}:{},b={tag:"g",attributes:u({},g.inner),children:[un(u({tag:l.tag,attributes:u(u({},l.attributes),g.path)},S))]},x={tag:"g",attributes:u({},g.outer),children:[b]},v="mask-".concat(s||vt()),p="clip-".concat(s||vt()),h={tag:"mask",attributes:u(u({},Vt),{},{id:v,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[w,x]},E={tag:"defs",children:[{tag:"clipPath",attributes:{id:p},children:vs(m)},h]};return n.push(E,{tag:"rect",attributes:u({fill:"currentColor","clip-path":"url(#".concat(p,")"),mask:"url(#".concat(v,")")},Vt)}),{children:n,attributes:a}}}},ws={provides(t){let e=!1;H.matchMedia&&(e=H.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){const n=[],a={fill:"currentColor"},r={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};n.push({tag:"path",attributes:u(u({},a),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});const i=u(u({},r),{},{attributeName:"opacity"}),s={tag:"circle",attributes:u(u({},a),{},{cx:"256",cy:"364",r:"28"}),children:[]};return e||s.children.push({tag:"animate",attributes:u(u({},r),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:u(u({},i),{},{values:"1;0;1;1;0;1;"})}),n.push(s),n.push({tag:"path",attributes:u(u({},a),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:e?[]:[{tag:"animate",attributes:u(u({},i),{},{values:"1;0;0;0;0;1;"})}]}),e||n.push({tag:"path",attributes:u(u({},a),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:u(u({},i),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:n}}}},As={hooks(){return{parseNodeAttributes(t,e){const n=e.getAttribute("data-fa-symbol"),a=n===null?!1:n===""?!0:n;return t.symbol=a,t}}}},Ss=[gi,ss,os,ls,cs,hs,ys,bs,xs,ws,As];Ti(Ss,{mixoutsTo:D});D.noAuto;D.config;D.library;D.dom;const me=D.parse;D.findIconDefinition;D.toHtml;const Es=D.icon;D.layer;D.text;D.counter;function dn(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter(function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable})),n.push.apply(n,a)}return n}function _(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?dn(Object(n),!0).forEach(function(a){st(t,a,n[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):dn(Object(n)).forEach(function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(n,a))})}return t}function Ot(t){"@babel/helpers - typeof";return Ot=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Ot(t)}function st(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function ks(t,e){if(t==null)return{};var n={},a=Object.keys(t),r,i;for(i=0;i<a.length;i++)r=a[i],!(e.indexOf(r)>=0)&&(n[r]=t[r]);return n}function Ps(t,e){if(t==null)return{};var n=ks(t,e),a,r;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)a=i[r],!(e.indexOf(a)>=0)&&Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}function ge(t){return Cs(t)||Is(t)||Os(t)||Ns()}function Cs(t){if(Array.isArray(t))return he(t)}function Is(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function Os(t,e){if(t){if(typeof t=="string")return he(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return he(t,e)}}function he(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,a=new Array(e);n<e;n++)a[n]=t[n];return a}function Ns(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Ms(t){var e,n=t.beat,a=t.fade,r=t.beatFade,i=t.bounce,s=t.shake,o=t.flash,f=t.spin,l=t.spinPulse,d=t.spinReverse,m=t.pulse,g=t.fixedWidth,w=t.inverse,S=t.border,b=t.listItem,x=t.flip,v=t.size,p=t.rotation,h=t.pull,E=(e={"fa-beat":n,"fa-fade":a,"fa-beat-fade":r,"fa-bounce":i,"fa-shake":s,"fa-flash":o,"fa-spin":f,"fa-spin-reverse":d,"fa-spin-pulse":l,"fa-pulse":m,"fa-fw":g,"fa-inverse":w,"fa-border":S,"fa-li":b,"fa-flip":x===!0,"fa-flip-horizontal":x==="horizontal"||x==="both","fa-flip-vertical":x==="vertical"||x==="both"},st(e,"fa-".concat(v),typeof v<"u"&&v!==null),st(e,"fa-rotate-".concat(p),typeof p<"u"&&p!==null&&p!==0),st(e,"fa-pull-".concat(h),typeof h<"u"&&h!==null),st(e,"fa-swap-opacity",t.swapOpacity),e);return Object.keys(E).map(function(k){return E[k]?k:null}).filter(function(k){return k})}function js(t){return t=t-0,t===t}function ra(t){return js(t)?t:(t=t.replace(/[\-_\s]+(.)?/g,function(e,n){return n?n.toUpperCase():""}),t.substr(0,1).toLowerCase()+t.substr(1))}var Ts=["style"];function Ds(t){return t.charAt(0).toUpperCase()+t.slice(1)}function Ls(t){return t.split(";").map(function(e){return e.trim()}).filter(function(e){return e}).reduce(function(e,n){var a=n.indexOf(":"),r=ra(n.slice(0,a)),i=n.slice(a+1).trim();return r.startsWith("webkit")?e[Ds(r)]=i:e[r]=i,e},{})}function ia(t,e){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof e=="string")return e;var a=(e.children||[]).map(function(f){return ia(t,f)}),r=Object.keys(e.attributes||{}).reduce(function(f,l){var d=e.attributes[l];switch(l){case"class":f.attrs.className=d,delete e.attributes.class;break;case"style":f.attrs.style=Ls(d);break;default:l.indexOf("aria-")===0||l.indexOf("data-")===0?f.attrs[l.toLowerCase()]=d:f.attrs[ra(l)]=d}return f},{attrs:{}}),i=n.style,s=i===void 0?{}:i,o=Ps(n,Ts);return r.attrs.style=_(_({},r.attrs.style),s),t.apply(void 0,[e.tag,_(_({},r.attrs),o)].concat(ge(a)))}var sa=!1;try{sa=!0}catch{}function zs(){if(!sa&&console&&typeof console.error=="function"){var t;(t=console).error.apply(t,arguments)}}function pn(t){if(t&&Ot(t)==="object"&&t.prefix&&t.iconName&&t.icon)return t;if(me.icon)return me.icon(t);if(t===null)return null;if(t&&Ot(t)==="object"&&t.prefix&&t.iconName)return t;if(Array.isArray(t)&&t.length===2)return{prefix:t[0],iconName:t[1]};if(typeof t=="string")return{prefix:"fas",iconName:t}}function qt(t,e){return Array.isArray(e)&&e.length>0||!Array.isArray(e)&&e?st({},t,e):{}}var mn={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1},Ne=hn.forwardRef(function(t,e){var n=_(_({},mn),t),a=n.icon,r=n.mask,i=n.symbol,s=n.className,o=n.title,f=n.titleId,l=n.maskId,d=pn(a),m=qt("classes",[].concat(ge(Ms(n)),ge((s||"").split(" ")))),g=qt("transform",typeof n.transform=="string"?me.transform(n.transform):n.transform),w=qt("mask",pn(r)),S=Es(d,_(_(_(_({},m),g),w),{},{symbol:i,title:o,titleId:f,maskId:l}));if(!S)return zs("Could not find icon",d),null;var b=S.abstract,x={ref:e};return Object.keys(n).forEach(function(v){mn.hasOwnProperty(v)||(x[v]=n[v])}),Fs(b[0],x)});Ne.displayName="FontAwesomeIcon";Ne.propTypes={beat:A.bool,border:A.bool,beatFade:A.bool,bounce:A.bool,className:A.string,fade:A.bool,flash:A.bool,mask:A.oneOfType([A.object,A.array,A.string]),maskId:A.string,fixedWidth:A.bool,inverse:A.bool,flip:A.oneOf([!0,!1,"horizontal","vertical","both"]),icon:A.oneOfType([A.object,A.array,A.string]),listItem:A.bool,pull:A.oneOf(["right","left"]),pulse:A.bool,rotation:A.oneOf([0,90,180,270]),shake:A.bool,size:A.oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:A.bool,spinPulse:A.bool,spinReverse:A.bool,symbol:A.oneOfType([A.bool,A.string]),title:A.string,titleId:A.string,transform:A.oneOfType([A.string,A.object]),swapOpacity:A.bool};var Fs=ia.bind(null,hn.createElement);/*!
 * Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */const _s={prefix:"fas",iconName:"plus",icon:[448,512,[10133,61543,"add"],"2b","M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 144L48 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l144 0 0 144c0 17.7 14.3 32 32 32s32-14.3 32-32l0-144 144 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-144 0 0-144z"]};function Rs({setCurrentNote:t,handleSubmit:e,currentNote:n,onMakeNotesClick:a}){return c.jsx(ye.div,{initial:"hidden",animate:"show",variants:Da("left","tween",0,3),className:"form-data black-gradient",children:c.jsxs(I,{className:"bg-[#ccc] px-[100px] py-[3px] rounded-[20px]",children:[c.jsx(T,{variant:"h4",fontWeight:600,margin:1,fontFamily:"Poppins",className:"text-primary",children:"Add a New Note"}),c.jsxs("form",{className:"flex flex-col",children:[c.jsxs(I,{className:"flex flex-col",children:[c.jsx("span",{className:"text-white font-semibold",children:"Title"}),c.jsx("input",{type:"text",name:"title",value:n.title,onChange:r=>t({...n,title:r.target.value}),placeholder:"What's the title?",className:"bg-primary hover:bg-tertiary py-2 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"})]}),c.jsxs(I,{className:"flex flex-col",children:[c.jsx("span",{className:"text-white font-semibold",children:"Description"}),c.jsx("textarea",{rows:4,name:"description",placeholder:"Please describe",value:n.description,onChange:r=>t({...n,description:r.target.value}),className:"bg-primary hover:bg-tertiary py-2 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"})]}),c.jsxs(I,{className:"flex flex-col",children:[c.jsx("span",{className:"text-white font-semibold",children:"Tag"}),c.jsx("input",{name:"tag",placeholder:"Please give a tag",value:n.tag,onChange:r=>t({...n,tag:r.target.value}),className:"bg-primary hover:bg-tertiary py-2 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"})]}),c.jsxs(I,{className:"flex flex-row justify-center items-center gap-4 py-2",children:[c.jsx(J,{className:"custom-add-button",startIcon:c.jsx(Ne,{icon:_s}),onClick:e,children:"Add Note"}),c.jsx(J,{className:"custom-add-button",startIcon:c.jsx(Wa,{}),onClick:a,children:"View Notes"})]})]})]})})}const oa="/taskbeacon/assets/ohho-CKLdeVfI.jpg";function Ws({notes:t,userData:e,error:n,onMakeNotesClick:a,currentNote:r,setCurrentNote:i,handleAddNote:s}){const o=yn(),[f,l]=P.useState({title:!1,description:!1}),[d,m]=P.useState(!1),[g,w]=P.useState({title:"",description:""});console.log(f,g);const S=()=>{let x="",v="";const p=r.title.trim().length===0,h=r.title.trim().length<3,E=r.description.trim().length===0,k=r.description.trim().length<5,M=r.description.trim().split(/\s+/).length===1;p?x="Title cannot be empty.":h&&(x="Title must be at least 3 characters long."),E?v="Description cannot be empty.":k&&M?v="Description cannot be just a word.":k&&(v="Description must be at least 5 characters long.");const j={title:!!x,description:!!v};return l(j),w({title:x,description:v}),!Object.values(j).some(z=>z)},b=()=>{S()&&s()};return c.jsxs(La,{className:"main bg-primary",children:[c.jsx("img",{src:oa,className:"w-full h-auto absolute inset-0 z-[-1] opacity-65"}),c.jsx(I,{className:"relative z-10",children:e&&(e!=null&&e.name)?c.jsx(I,{className:"flex-row",children:d?c.jsx(Rs,{setCurrentNote:i,currentNote:r,handleSubmit:b,onMakeNotesClick:a}):c.jsx("div",{className:`${Sr.paddingX} absolute inset-10 top-[40px] max-w-7xl mx-auto flex flex-row items-center gap-5`,children:c.jsxs(ye.div,{initial:"hidden",animate:"show",variants:za(.2,1),className:"text-data text-center md:text-left",children:[c.jsxs(T,{variant:"h3",className:"font-bold",children:["Welcome, ",e==null?void 0:e.name,"!"]}),c.jsx(T,{variant:"h3",children:"Let's organize your world, one note at a time!"}),c.jsxs(I,{display:"flex",flexDirection:"row",gap:2,mt:3,alignItems:"center",children:[t&&t.length>0&&c.jsx(J,{variant:"contained",className:"custom-add-button",onClick:a,children:"View Saved Notes"}),c.jsx(J,{className:"custom-add-button",onClick:()=>m(!d),children:"Create New Note"})]})]})})}):c.jsx(I,{className:"flex-col animate-pulse",children:n?c.jsxs(I,{className:"flex flex-col justify-center items-center",children:[c.jsx(T,{className:"typography bottom-link",variant:"h5",color:"text-secondary",fontWeight:"bold",children:"Authentication failed!"}),c.jsxs(I,{className:"bottom text-secondary",children:["Go back to Home page"," ",c.jsx(J,{className:"bottom-link",onClick:()=>o("/"),children:"Go Back"})]})]}):c.jsx(Ca,{})})})]})}const $s=q(c.jsx("path",{d:"M22 24H2v-4h20zM13.06 5.19l3.75 3.75L7.75 18H4v-3.75zm4.82 2.68-3.75-3.75 1.83-1.83c.39-.39 1.02-.39 1.41 0l2.34 2.34c.39.39.39 1.02 0 1.41z"}),"BorderColor"),Ys=q(c.jsx("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6zM8 9h8v10H8zm7.5-5-1-1h-5l-1 1H5v2h14V4z"}),"DeleteOutline"),Bs=q(c.jsx("path",{d:"M17 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V7zm-5 16c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3m3-10H5V5h10z"}),"Save"),Xs=q(c.jsx("path",{d:"M10 20h4c0 1.1-.9 2-2 2s-2-.9-2-2m4-11c0 2.61 1.67 4.83 4 5.66V17h2v2H4v-2h2v-7c0-2.79 1.91-5.14 4.5-5.8v-.7c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5v.7c.71.18 1.36.49 1.95.9C14.54 6.14 14 7.51 14 9m10-1h-3V5h-2v3h-3v2h3v3h2v-3h3z"}),"NotificationAdd"),Us=q(c.jsx("path",{d:"M7.58 4.08 6.15 2.65C3.75 4.48 2.17 7.3 2.03 10.5h2c.15-2.65 1.51-4.97 3.55-6.42m12.39 6.42h2c-.15-3.2-1.73-6.02-4.12-7.85l-1.42 1.43c2.02 1.45 3.39 3.77 3.54 6.42M18 11c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2zm-6 11c.14 0 .27-.01.4-.04.65-.14 1.18-.58 1.44-1.18q.15-.36.15-.78h-4c.01 1.1.9 2 2.01 2"}),"NotificationsActive"),Hs=q([c.jsx("path",{d:"M17.59 18 19 16.59 14.42 12 19 7.41 17.59 6l-6 6z"},"0"),c.jsx("path",{d:"m11 18 1.41-1.41L7.83 12l4.58-4.59L11 6l-6 6z"},"1")],"KeyboardDoubleArrowLeft"),gn=(t,e,n,a)=>{t.style.transition=`${e} ${n}ms ${a}`},$=(t,e,n)=>Math.min(Math.max(t,e),n);class Gs{constructor(e,n){this.glareAngle=0,this.glareOpacity=0,this.calculateGlareSize=s=>{const{width:o,height:f}=s,l=Math.sqrt(o**2+f**2);return{width:l,height:l}},this.setSize=s=>{const o=this.calculateGlareSize(s);this.glareEl.style.width=`${o.width}px`,this.glareEl.style.height=`${o.height}px`},this.update=(s,o,f,l)=>{this.updateAngle(s,o.glareReverse),this.updateOpacity(s,o,f,l)},this.updateAngle=(s,o)=>{const{xPercentage:f,yPercentage:l}=s,d=180/Math.PI,m=f?Math.atan2(l,-f)*d:0;this.glareAngle=m-(o?180:0)},this.updateOpacity=(s,o,f,l)=>{const{xPercentage:d,yPercentage:m}=s,{glarePosition:g,glareReverse:w,glareMaxOpacity:S}=o,b=f?-1:1,x=l?-1:1,v=w?-1:1;let p=0;switch(g){case"top":p=-d*b*v;break;case"right":p=m*x*v;break;case"bottom":case void 0:p=d*b*v;break;case"left":p=-m*x*v;break;case"all":p=Math.hypot(d,m)}const h=$(p,0,100);this.glareOpacity=h*S/100},this.render=s=>{const{glareColor:o}=s;this.glareEl.style.transform=`rotate(${this.glareAngle}deg) translate(-50%, -50%)`,this.glareEl.style.opacity=this.glareOpacity.toString(),this.glareEl.style.background=`linear-gradient(0deg, rgba(255,255,255,0) 0%, ${o} 100%)`},this.glareWrapperEl=document.createElement("div"),this.glareEl=document.createElement("div"),this.glareWrapperEl.appendChild(this.glareEl),this.glareWrapperEl.className="glare-wrapper",this.glareEl.className="glare";const a={position:"absolute",top:"0",left:"0",width:"100%",height:"100%",overflow:"hidden",borderRadius:n,WebkitMaskImage:"-webkit-radial-gradient(white, black)",pointerEvents:"none"},r=this.calculateGlareSize(e),i={position:"absolute",top:"50%",left:"50%",transformOrigin:"0% 0%",pointerEvents:"none",width:`${r.width}px`,height:`${r.height}px`};Object.assign(this.glareWrapperEl.style,a),Object.assign(this.glareEl.style,i)}}class Vs{constructor(){this.glareAngle=0,this.glareOpacity=0,this.tiltAngleX=0,this.tiltAngleY=0,this.tiltAngleXPercentage=0,this.tiltAngleYPercentage=0,this.update=(e,n)=>{this.updateTilt(e,n),this.updateTiltManualInput(e,n),this.updateTiltReverse(n),this.updateTiltLimits(n)},this.updateTilt=(e,n)=>{const{xPercentage:a,yPercentage:r}=e,{tiltMaxAngleX:i,tiltMaxAngleY:s}=n;this.tiltAngleX=a*i/100,this.tiltAngleY=r*s/100*-1},this.updateTiltManualInput=(e,n)=>{const{tiltAngleXManual:a,tiltAngleYManual:r,tiltMaxAngleX:i,tiltMaxAngleY:s}=n;(a!==null||r!==null)&&(this.tiltAngleX=a!==null?a:0,this.tiltAngleY=r!==null?r:0,e.xPercentage=100*this.tiltAngleX/i,e.yPercentage=100*this.tiltAngleY/s)},this.updateTiltReverse=e=>{const n=e.tiltReverse?-1:1;this.tiltAngleX=n*this.tiltAngleX,this.tiltAngleY=n*this.tiltAngleY},this.updateTiltLimits=e=>{const{tiltAxis:n}=e;this.tiltAngleX=$(this.tiltAngleX,-90,90),this.tiltAngleY=$(this.tiltAngleY,-90,90),n&&(this.tiltAngleX=n==="x"?this.tiltAngleX:0,this.tiltAngleY=n==="y"?this.tiltAngleY:0)},this.updateTiltAnglesPercentage=e=>{const{tiltMaxAngleX:n,tiltMaxAngleY:a}=e;this.tiltAngleXPercentage=this.tiltAngleX/n*100,this.tiltAngleYPercentage=this.tiltAngleY/a*100},this.render=e=>{e.style.transform+=`rotateX(${this.tiltAngleX}deg) rotateY(${this.tiltAngleY}deg) `}}}const qs={scale:1,perspective:1e3,flipVertically:!1,flipHorizontally:!1,reset:!0,transitionEasing:"cubic-bezier(.03,.98,.52,.99)",transitionSpeed:400,trackOnWindow:!1,gyroscope:!1,tiltEnable:!0,tiltReverse:!1,tiltAngleXInitial:0,tiltAngleYInitial:0,tiltMaxAngleX:20,tiltMaxAngleY:20,tiltAxis:void 0,tiltAngleXManual:null,tiltAngleYManual:null,glareEnable:!1,glareMaxOpacity:.7,glareColor:"#ffffff",glarePosition:"bottom",glareReverse:!1,glareBorderRadius:"0"};class la extends P.PureComponent{constructor(){super(...arguments),this.wrapperEl={node:null,size:{width:0,height:0,left:0,top:0},clientPosition:{x:null,y:null,xPercentage:0,yPercentage:0},updateAnimationId:null,scale:1},this.tilt=null,this.glare=null,this.addDeviceOrientationEventListener=async()=>{if(!window.DeviceOrientationEvent)return;const e=DeviceOrientationEvent.requestPermission;typeof e=="function"?await e()==="granted"&&window.addEventListener("deviceorientation",this.onMove):window.addEventListener("deviceorientation",this.onMove)},this.setSize=()=>{this.setWrapperElSize(),this.glare&&this.glare.setSize(this.wrapperEl.size)},this.mainLoop=e=>{this.wrapperEl.updateAnimationId!==null&&cancelAnimationFrame(this.wrapperEl.updateAnimationId),this.processInput(e),this.update(e.type),this.wrapperEl.updateAnimationId=requestAnimationFrame(this.renderFrame)},this.onEnter=e=>{const{onEnter:n}=this.props;this.setSize(),this.wrapperEl.node.style.willChange="transform",this.setTransitions(),n&&n({event:e})},this.onMove=e=>{this.mainLoop(e),this.emitOnMove(e)},this.onLeave=e=>{const{onLeave:n}=this.props;if(this.setTransitions(),n&&n({event:e}),this.props.reset){const a=new CustomEvent("autoreset");this.onMove(a)}},this.processInput=e=>{const{scale:n}=this.props;switch(e.type){case"mousemove":this.wrapperEl.clientPosition.x=e.pageX,this.wrapperEl.clientPosition.y=e.pageY,this.wrapperEl.scale=n;break;case"touchmove":this.wrapperEl.clientPosition.x=e.touches[0].pageX,this.wrapperEl.clientPosition.y=e.touches[0].pageY,this.wrapperEl.scale=n;break;case"deviceorientation":this.processInputDeviceOrientation(e),this.wrapperEl.scale=n;break;case"autoreset":{const{tiltAngleXInitial:a,tiltAngleYInitial:r,tiltMaxAngleX:i,tiltMaxAngleY:s}=this.props,o=r/s*100;this.wrapperEl.clientPosition.xPercentage=$(a/i*100,-100,100),this.wrapperEl.clientPosition.yPercentage=$(o,-100,100),this.wrapperEl.scale=1;break}}},this.processInputDeviceOrientation=e=>{if(!e.gamma||!e.beta||!this.props.gyroscope)return;const{tiltMaxAngleX:n,tiltMaxAngleY:a}=this.props,r=e.gamma;this.wrapperEl.clientPosition.xPercentage=e.beta/n*100,this.wrapperEl.clientPosition.yPercentage=r/a*100,this.wrapperEl.clientPosition.xPercentage=$(this.wrapperEl.clientPosition.xPercentage,-100,100),this.wrapperEl.clientPosition.yPercentage=$(this.wrapperEl.clientPosition.yPercentage,-100,100)},this.update=e=>{const{tiltEnable:n,flipVertically:a,flipHorizontally:r}=this.props;e!=="autoreset"&&e!=="deviceorientation"&&e!=="propChange"&&this.updateClientInput(),n&&this.tilt.update(this.wrapperEl.clientPosition,this.props),this.updateFlip(),this.tilt.updateTiltAnglesPercentage(this.props),this.glare&&this.glare.update(this.wrapperEl.clientPosition,this.props,a,r)},this.updateClientInput=()=>{const{trackOnWindow:e}=this.props;let n,a;if(e){const{x:r,y:i}=this.wrapperEl.clientPosition;n=i/window.innerHeight*200-100,a=r/window.innerWidth*200-100}else{const{size:{width:r,height:i,left:s,top:o},clientPosition:{x:f,y:l}}=this.wrapperEl;n=(l-o)/i*200-100,a=(f-s)/r*200-100}this.wrapperEl.clientPosition.xPercentage=$(n,-100,100),this.wrapperEl.clientPosition.yPercentage=$(a,-100,100)},this.updateFlip=()=>{const{flipVertically:e,flipHorizontally:n}=this.props;e&&(this.tilt.tiltAngleX+=180,this.tilt.tiltAngleY*=-1),n&&(this.tilt.tiltAngleY+=180)},this.renderFrame=()=>{this.resetWrapperElTransform(),this.renderPerspective(),this.tilt.render(this.wrapperEl.node),this.renderScale(),this.glare&&this.glare.render(this.props)}}componentDidMount(){if(this.tilt=new Vs,this.initGlare(),this.setSize(),this.addEventListeners(),typeof CustomEvent>"u")return;const e=new CustomEvent("autoreset");this.mainLoop(e);const n=new CustomEvent("initial");this.emitOnMove(n)}componentWillUnmount(){this.wrapperEl.updateAnimationId!==null&&cancelAnimationFrame(this.wrapperEl.updateAnimationId),this.removeEventListeners()}componentDidUpdate(){const e=new CustomEvent("propChange");this.mainLoop(e),this.emitOnMove(e)}addEventListeners(){const{trackOnWindow:e,gyroscope:n}=this.props;window.addEventListener("resize",this.setSize),e&&(window.addEventListener("mouseenter",this.onEnter),window.addEventListener("mousemove",this.onMove),window.addEventListener("mouseout",this.onLeave),window.addEventListener("touchstart",this.onEnter),window.addEventListener("touchmove",this.onMove),window.addEventListener("touchend",this.onLeave)),n&&this.addDeviceOrientationEventListener()}removeEventListeners(){const{trackOnWindow:e,gyroscope:n}=this.props;window.removeEventListener("resize",this.setSize),e&&(window.removeEventListener("mouseenter",this.onEnter),window.removeEventListener("mousemove",this.onMove),window.removeEventListener("mouseout",this.onLeave),window.removeEventListener("touchstart",this.onEnter),window.removeEventListener("touchmove",this.onMove),window.removeEventListener("touchend",this.onLeave)),n&&window.DeviceOrientationEvent&&window.removeEventListener("deviceorientation",this.onMove)}setWrapperElSize(){const e=this.wrapperEl.node.getBoundingClientRect();this.wrapperEl.size.width=this.wrapperEl.node.offsetWidth,this.wrapperEl.size.height=this.wrapperEl.node.offsetHeight,this.wrapperEl.size.left=e.left+window.scrollX,this.wrapperEl.size.top=e.top+window.scrollY}initGlare(){const{glareEnable:e,glareBorderRadius:n}=this.props;e&&(this.glare=new Gs(this.wrapperEl.size,n),this.wrapperEl.node.appendChild(this.glare.glareWrapperEl))}emitOnMove(e){const{onMove:n}=this.props;if(!n)return;let a=0,r=0;this.glare&&(a=this.glare.glareAngle,r=this.glare.glareOpacity),n({tiltAngleX:this.tilt.tiltAngleX,tiltAngleY:this.tilt.tiltAngleY,tiltAngleXPercentage:this.tilt.tiltAngleXPercentage,tiltAngleYPercentage:this.tilt.tiltAngleYPercentage,glareAngle:a,glareOpacity:r,event:e})}resetWrapperElTransform(){this.wrapperEl.node.style.transform=""}renderPerspective(){const{perspective:e}=this.props;this.wrapperEl.node.style.transform+=`perspective(${e}px) `}renderScale(){const{scale:e}=this.wrapperEl;this.wrapperEl.node.style.transform+=`scale3d(${e},${e},${e})`}setTransitions(){const{transitionSpeed:e,transitionEasing:n}=this.props;gn(this.wrapperEl.node,"all",e,n),this.glare&&gn(this.glare.glareEl,"opacity",e,n)}render(){const{children:e,className:n,style:a}=this.props;return c.jsx("div",{ref:r=>{this.wrapperEl.node=r},onMouseEnter:this.onEnter,onMouseMove:this.onMove,onMouseLeave:this.onLeave,onTouchStart:this.onEnter,onTouchMove:this.onMove,onTouchEnd:this.onLeave,className:n,style:a,children:e})}}la.defaultProps=qs;const Ks=q(c.jsx("path",{d:"M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m-2 10h-4v4h-2v-4H7v-2h4V7h2v4h4z"}),"AddBox");function Qs({open:t,toggleDialog:e,id:n,refetch:a}){const[r,i]=P.useState({date:"",message:"",noteId:n,notification:!0}),[s,o]=P.useState({date:!1,message:!1}),[f,l]=P.useState({date:"",message:""}),[d,m]=P.useState("");P.useEffect(()=>{const p=new Date;p.setDate(p.getDate()+1);const h=p.getFullYear(),E=String(p.getMonth()+1).padStart(2,"0"),k=String(p.getDate()).padStart(2,"0");m(`${h}-${E}-${k}`)},[t]);const g=p=>{const h=p.target.value;if(h){const E=new Date,k=new Date(h),M=new Date(k.getFullYear(),k.getMonth(),k.getDate(),E.getHours(),E.getMinutes()).toISOString();i(j=>({...j,date:M}))}s.date&&(o(E=>({...E,date:!1})),l(E=>({...E,date:""})))},w=p=>{i(h=>({...h,message:p.target.value})),s.message&&(o(h=>({...h,message:!1})),l(h=>({...h,message:""})))},S=()=>{let p=!0;const h={date:!1,message:!1},E={date:"",message:""};return(!r.date||r.date.trim()==="")&&(h.date=!0,E.date="Deadline cannot be empty",p=!1),(!r.message||r.message.trim()==="")&&(h.message=!0,E.message="Comment cannot be empty",p=!1),o(h),l(E),p},[b]=Ia(),x=async()=>{if(S()){console.log("Form Data Saved:",r);try{await b({payload:r}),F.success("You will be notified one day before deadline"),a()}catch(p){F.error("Error saving note"),console.error("Error saving note:",p)}e()}},v=p=>{if(!p)return"";const h=new Date(p),E=h.getFullYear(),k=String(h.getMonth()+1).padStart(2,"0"),M=String(h.getDate()).padStart(2,"0");return`${E}-${k}-${M}`};return c.jsxs(sr,{className:"animate-slideInFromTop",open:t,onClose:e,fullWidth:!0,sx:{width:"1300px",maxWidth:"100%",borderRadius:"20px","& .MuiDialog-paper":{backgroundColor:"#f9f9f9",boxShadow:"0 0px 16px rgba(0, 0, 0, 0.2)"}},children:[c.jsxs(I,{display:"flex",flexDirection:"column",gap:2,padding:1.5,sx:{backgroundColor:"#ffffff",borderRadius:"16px"},children:[c.jsx(T,{variant:"h5",fontWeight:"bold",align:"center",gutterBottom:!0,children:"Add Notification"}),c.jsxs(I,{display:"flex",flexDirection:"column",gap:3,padding:2,sx:{backgroundColor:"#fafafa",borderRadius:"12px",boxShadow:"0 4px 12px rgba(0, 0, 0, 0.1)"},children:[c.jsxs(I,{display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"center",gap:2,children:[c.jsx(T,{color:"text.primary",children:"Deadline"}),c.jsx(je,{type:"date",fullWidth:!0,size:"small",sx:{width:"300px"},required:!0,value:v(r.date),onChange:g,error:s.date,helperText:f.date,inputProps:{min:d}})]}),c.jsxs(I,{display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"center",gap:2,children:[c.jsx(T,{width:"100px",color:"text.primary",children:"Comment"}),c.jsx(je,{fullWidth:!0,required:!0,size:"small",value:r.message,onChange:w,error:s.message,helperText:f.message,multiline:!0,rows:3})]})]})]}),c.jsxs(fr,{sx:{padding:1,justifyContent:"space-between"},children:[c.jsx(J,{onClick:e,variant:"outlined",children:"Cancel"}),c.jsx(J,{onClick:x,color:"primary",variant:"contained",children:"Save"})]})]})}function Zs({notes:t,setNotes:e,fetchNotes:n,handleSaveEdit:a,onAddClick:r,handleDeleteNote:i}){const s=Kt.getItem("authToken"),[o,f]=P.useState(null),[l,d]=P.useState(""),[m,g]=P.useState(!1),w=()=>{g(b=>!b)};P.useEffect(()=>{s&&n()},[n,s]);const S=b=>{const x=new Date(b),v=x.toLocaleDateString("en-GB",{day:"2-digit",month:"2-digit",year:"numeric"}),p=x.toLocaleTimeString("en-US",{hour:"2-digit",minute:"2-digit",second:"2-digit",hour12:!1});return{date:v,time:p}};return c.jsxs(I,{className:"notes-background bg-primary",padding:2,children:[c.jsx("img",{src:oa,className:"w-full h-auto absolute inset-0 z-[-1] opacity-65"}),c.jsxs(I,{sx:{position:"relative",zIndex:1,width:"100%",maxWidth:"1200px",margin:"0 auto"},children:[c.jsx(Fe,{container:!0,spacing:3,children:t.map((b,x)=>c.jsx(Fe,{item:!0,xs:12,sm:6,md:4,children:c.jsx(la,{tiltMaxAngleX:15,tiltMaxAngleY:15,scale:1.02,transitionSpeed:450,children:c.jsx(ye.div,{variants:Fa("right","spring",.5*x,.75),initial:"hidden",animate:"show",className:"w-full h-[250px] black-gradient p-[1px] rounded-[12px] shadow-card",children:c.jsxs(I,{display:"flex",flexDirection:"column",gap:1,className:"bg-tertiary h-[250px] rounded-[20px]",boxShadow:3,padding:2,children:[c.jsxs(I,{display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"center",children:[b.notification?c.jsx(Q,{size:"small",color:"secondary",title:"You will be notified one day before deadline",children:c.jsx(Us,{})}):c.jsx(Q,{size:"small",color:"success",className:"text-green-100",onClick:()=>{d(b._id),w()},children:c.jsx(Xs,{})}),b.sendDate?c.jsx(T,{variant:"caption",className:"text-purple-100",children:`Deadline: ${S(b.sendDate).date} ${S(b.sendDate).time}`}):c.jsxs(T,{variant:"caption",className:"text-green-100",children:[c.jsx(Hs,{fontSize:"small"})," Set Notification Alert"]})]}),c.jsxs(I,{display:"flex",flexDirection:"row",justifyContent:"space-between",children:[c.jsxs(T,{variant:"caption",color:"primary",contentEditable:o===b._id,suppressContentEditableWarning:!0,onBlur:v=>e(p=>p.map(h=>h._id===b._id?{...h,tag:v.target.textContent||""}:h)),sx:{fontWeight:"bold"},children:["#",b.tag]}),c.jsx(T,{variant:"caption",className:"text-blue-100",children:`Date: ${S(b.date).date} Time: ${S(b.date).time}`})]}),c.jsx(T,{fontWeight:"bold",variant:"h5",className:"capitalize text-green-200",gutterBottom:!0,contentEditable:o===b._id,suppressContentEditableWarning:!0,onBlur:v=>e(p=>p.map(h=>h._id===b._id?{...h,title:v.target.textContent||""}:h)),children:b.title}),c.jsx(T,{variant:"body2",className:"text-green-300",sx:{overflow:"hidden",textOverflow:"ellipsis",display:"-webkit-box",WebkitLineClamp:3,WebkitBoxOrient:"vertical"},contentEditable:o===b._id,suppressContentEditableWarning:!0,onBlur:v=>e(p=>p.map(h=>h._id===b._id?{...h,description:v.target.textContent||""}:h)),children:b.description}),c.jsxs(I,{mt:1.5,display:"flex",flexDirection:"row",justifyContent:"space-between",children:[o!==b._id?c.jsx(Q,{title:"Edit Note",size:"small",color:"primary",onClick:()=>f(b._id),children:c.jsx($s,{})}):c.jsx(Q,{title:"Save Note",size:"small",color:"secondary",onClick:()=>{a(b),f(null)},children:c.jsx(Bs,{})}),c.jsx(Q,{title:"Delete the note",size:"small",color:"error",onClick:()=>i(b._id),children:c.jsx(Ys,{})})]})]})})})},b._id))}),c.jsx(I,{sx:{display:"flex",justifyContent:"center",mt:4},children:c.jsx(Q,{color:"primary",size:"large",onClick:r,sx:{fontSize:"48px"},children:c.jsx(Ks,{})})})]}),m&&c.jsx(Qs,{open:m,refetch:n,toggleDialog:w,id:l})]})}const Js=q(c.jsx("path",{d:"m17 7-1.41 1.41L18.17 11H8v2h10.17l-2.58 2.58L17 17l5-5zM4 5h8V3H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h8v-2H4z"}),"Logout");function io(){const t=P.useRef(null),e=()=>{var O;(O=t.current)==null||O.scrollIntoView({behavior:"smooth"})},n=P.useRef(null),a=()=>{var O;(O=n.current)==null||O.scrollIntoView({behavior:"smooth"})},[r,i]=P.useState([]),[s,o]=P.useState(null),[f,l]=P.useState({_id:"",title:"",description:"",tag:"",notification:!1,sendDate:null,date:""}),d=yn(),m=Kt.getItem("authToken"),{data:g,error:w,refetch:S}=Oa({}),{data:b=[],error:x,refetch:v}=Na({});P.useEffect(()=>{g&&o(g),w&&d("/errorpage"),b&&s!==null&&i(b),x&&F.error("Error in fetching notes!")},[b,x,d,S,s,w,g]);const[p]=Ma(),h=async()=>{if(!f.title||!f.description||!f.tag){F.info("Please enter required fields.");return}try{await p({...f,headers:{authorization:`Bearer ${m}`}}),l({_id:"",title:"",description:"",tag:"",notification:!1,sendDate:null,date:""}),v(),e(),F.success("Notes added successfully!")}catch(O){F.error("Error in adding notes"),console.error("Error adding note:",O)}},[E]=ja(),k=async O=>{try{await E({id:O._id,data:O,headers:{authorization:`Bearer ${m}`}}),F.success("Note updated successfully"),v()}catch(nt){F.error("Error saving note"),console.error("Error saving note:",nt)}},[M]=Ta(),j=async O=>{try{await M({id:O,headers:{authorization:`Bearer ${m}`}}),v(),F.success("Note deleted successfully!")}catch(nt){F.error("Error deleting note"),console.error("Error deleting note:",nt)}},z=P.useCallback(()=>{v()},[v]),ut=()=>{Kt.removeItem("authToken"),o(null),d("/")};return c.jsxs("div",{children:[c.jsx(Q,{className:"logout-button",onClick:ut,title:"Logout",sx:{position:"fixed",top:"16px",right:"16px",zIndex:50,color:"#BBF7D0",padding:"8px","&:hover":{color:"#BBF7D0",transform:"scale(1.2)",background:"transparent"},"&:active":{transform:"scale(1)"},background:"transparent"},children:c.jsx(Js,{sx:{fontSize:"2rem"}})}),c.jsx("div",{ref:n,children:c.jsx(Ws,{notes:r,userData:s,error:!!w,onMakeNotesClick:e,currentNote:f,setCurrentNote:l,handleAddNote:h})}),r&&r.length>0&&c.jsx("div",{ref:t,children:c.jsx(Zs,{onAddClick:a,notes:r,setNotes:i,fetchNotes:z,handleSaveEdit:k,handleDeleteNote:j})})]})}export{io as default};
