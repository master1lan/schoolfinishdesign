"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[610],{418:function(Fu,j,F){F.r(j),F.d(j,{default:function(){return Y}});var T=F(36521),z=F(13273),A=F(84875),y=F.n(A),c=F(50959),b=F(93666),S=F(70536),H=F(86992),M=F(1688),W=F(61165);function L(u){return typeof u!="string"?u:u.charAt(0).toUpperCase()+u.slice(1)}var R=F(20538),X=F(71433);const m=(u,r,t)=>{const e=L(t);return{[`${u.componentCls}-${r}`]:{color:u[`color${t}`],background:u[`color${e}Bg`],borderColor:u[`color${e}Border`]}}},Z=u=>(0,R.j)(u,(r,t)=>{let{textColor:e,lightBorderColor:n,lightColor:i,darkColor:s}=t;return{[`${u.componentCls}-${r}`]:{color:e,background:i,borderColor:n,"&-inverse":{color:u.colorTextLightSolid,background:s,borderColor:s}}}}),w=u=>{const{paddingXXS:r,lineWidth:t,tagPaddingHorizontal:e,componentCls:n}=u,i=e-t,s=r-t;return{[n]:Object.assign(Object.assign({},(0,X.Wf)(u)),{display:"inline-block",height:"auto",marginInlineEnd:u.marginXS,paddingInline:i,fontSize:u.tagFontSize,lineHeight:`${u.tagLineHeight}px`,whiteSpace:"nowrap",background:u.tagDefaultBg,border:`${u.lineWidth}px ${u.lineType} ${u.colorBorder}`,borderRadius:u.borderRadiusSM,opacity:1,transition:`all ${u.motionDurationMid}`,textAlign:"start",[`&${n}-rtl`]:{direction:"rtl"},"&, a, a:hover":{color:u.tagDefaultColor},[`${n}-close-icon`]:{marginInlineStart:s,color:u.colorTextDescription,fontSize:u.tagIconSize,cursor:"pointer",transition:`all ${u.motionDurationMid}`,"&:hover":{color:u.colorTextHeading}},[`&${n}-has-color`]:{borderColor:"transparent",[`&, a, a:hover, ${u.iconCls}-close, ${u.iconCls}-close:hover`]:{color:u.colorTextLightSolid}},["&-checkable"]:{backgroundColor:"transparent",borderColor:"transparent",cursor:"pointer",[`&:not(${n}-checkable-checked):hover`]:{color:u.colorPrimary,backgroundColor:u.colorFillSecondary},"&:active, &-checked":{color:u.colorTextLightSolid},"&-checked":{backgroundColor:u.colorPrimary,"&:hover":{backgroundColor:u.colorPrimaryHover}},"&:active":{backgroundColor:u.colorPrimaryActive}},["&-hidden"]:{display:"none"},[`> ${u.iconCls} + span, > span + ${u.iconCls}`]:{marginInlineStart:i}})}};var E=(0,M.Z)("Tag",u=>{const{fontSize:r,lineHeight:t,lineWidth:e,fontSizeIcon:n}=u,i=Math.round(r*t),s=u.fontSizeSM,B=i-e*2,C=u.colorFillAlter,d=u.colorText,a=(0,W.TS)(u,{tagFontSize:s,tagLineHeight:B,tagDefaultBg:C,tagDefaultColor:d,tagIconSize:n-2*e,tagPaddingHorizontal:8});return[w(a),Z(a),m(a,"success","Success"),m(a,"processing","Info"),m(a,"error","Error"),m(a,"warning","Warning")]}),K=function(u,r){var t={};for(var e in u)Object.prototype.hasOwnProperty.call(u,e)&&r.indexOf(e)<0&&(t[e]=u[e]);if(u!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,e=Object.getOwnPropertySymbols(u);n<e.length;n++)r.indexOf(e[n])<0&&Object.prototype.propertyIsEnumerable.call(u,e[n])&&(t[e[n]]=u[e[n]]);return t},G=u=>{var{prefixCls:r,className:t,checked:e,onChange:n,onClick:i}=u,s=K(u,["prefixCls","className","checked","onChange","onClick"]);const{getPrefixCls:B}=c.useContext(b.E_),C=D=>{n==null||n(!e),i==null||i(D)},d=B("tag",r),[a,p]=E(d),h=y()(d,{[`${d}-checkable`]:!0,[`${d}-checkable-checked`]:e},t,p);return a(c.createElement("span",Object.assign({},s,{className:h,onClick:C})))},J=function(u,r){var t={};for(var e in u)Object.prototype.hasOwnProperty.call(u,e)&&r.indexOf(e)<0&&(t[e]=u[e]);if(u!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,e=Object.getOwnPropertySymbols(u);n<e.length;n++)r.indexOf(e[n])<0&&Object.prototype.propertyIsEnumerable.call(u,e[n])&&(t[e[n]]=u[e[n]]);return t};const Q=(u,r)=>{var{prefixCls:t,className:e,rootClassName:n,style:i,children:s,icon:B,color:C,onClose:d,closeIcon:a,closable:p=!1}=u,h=J(u,["prefixCls","className","rootClassName","style","children","icon","color","onClose","closeIcon","closable"]);const{getPrefixCls:D,direction:k}=c.useContext(b.E_),[_,O]=c.useState(!0);c.useEffect(()=>{"visible"in h&&O(h.visible)},[h.visible]);const v=(0,S.o2)(C)||(0,S.yT)(C),q=Object.assign({backgroundColor:C&&!v?C:void 0},i),f=D("tag",t),[uu,eu]=E(f),nu=y()(f,{[`${f}-${C}`]:v,[`${f}-has-color`]:C&&!v,[`${f}-hidden`]:!_,[`${f}-rtl`]:k==="rtl"},e,n,eu),N=x=>{x.stopPropagation(),d==null||d(x),!x.defaultPrevented&&O(!1)},ou=()=>p?a?c.createElement("span",{className:`${f}-close-icon`,onClick:N},a):c.createElement(z.Z,{className:`${f}-close-icon`,onClick:N}):null,tu=typeof h.onClick=="function"||s&&s.type==="a",I=B||null,ru=I?c.createElement(c.Fragment,null,I,c.createElement("span",null,s)):s,P=c.createElement("span",Object.assign({},h,{ref:r,className:nu,style:q}),ru,ou());return uu(tu?c.createElement(H.Z,null,P):P)},$=c.forwardRef(Q);$.CheckableTag=G;var l=$,g={content:"content___OrG73",section:"section___lErf3",section_name:"section_name___jjhsl",section_feature:"section_feature___ivglo",section_description:"section_description____cKNF",section_feature_name:"section_feature_name___c7aZ2",section_description_name:"section_description_name___NIKPX",section_description_content:"section_description_content___FEFIr"},o=F(11527);function U(){return(0,o.jsxs)("div",{className:g.content,children:[Array.from({length:4},function(){return 1}).map(function(u,r){return(0,o.jsx)(V,{},r)}),(0,o.jsx)(T.Z,{total:85,pageSize:4,showSizeChanger:!1,showQuickJumper:!1,style:{display:"inline-block",position:"relative",left:"50%",transform:"translateX(-50%)",margin:"10px 0"}})]})}var V=function(){return(0,o.jsxs)("section",{className:g.section,children:[(0,o.jsx)("div",{className:g.section_name,children:"\u6848\u4F8B\u540D\u79F0\u6848\u4F8B\u540D\u79F0\u6848\u4F8B\u540D\u79F0\u6848\u4F8B\u540D\u79F0\u6848\u4F8B\u540D\u79F0\u6848\u4F8B\u540D\u79F0\u6848\u4F8B\u540D\u79F0\u6848\u4F8B\u540D\u79F0\u6848\u4F8B\u540D\u79F0\u6848\u4F8B\u540D\u79F0"}),(0,o.jsxs)("div",{className:g.section_feature,children:[(0,o.jsx)("div",{className:g.section_feature_name,children:"\u6848\u4F8B\u7279\u5F81\uFF1A"}),(0,o.jsxs)("div",{children:[(0,o.jsx)(l,{children:"\u4E0D\u771F\u6B63\u8FDE\u5E26\u8D23\u4EFB"}),(0,o.jsx)(l,{children:"\u8D22\u4EA7\u635F\u5BB3"}),(0,o.jsx)(l,{children:"\u53CD\u8BC1"}),(0,o.jsx)(l,{children:"\u5171\u540C\u4FB5\u6743"}),(0,o.jsx)(l,{children:"\u6545\u610F"}),(0,o.jsx)(l,{children:"\u8FC7\u9519\u8D23\u4EFB\u539F\u5219"}),(0,o.jsx)(l,{children:"\u7CBE\u795E\u635F\u5BB3"}),(0,o.jsx)(l,{children:"\u8FDE\u5E26\u8D23\u4EFB"}),(0,o.jsx)(l,{children:"\u4FB5\u72AF\u4EBA\u683C\u5E73\u7B49"}),(0,o.jsx)(l,{children:"\u4FB5\u72AF\u4EBA\u683C\u81EA\u7531"}),(0,o.jsx)(l,{children:"\u8BF7\u6C42\u8D22\u4EA7\u635F\u5931"}),(0,o.jsx)(l,{children:"\u8BF7\u6C42\u6062\u590D\u540D\u8A89"}),(0,o.jsx)(l,{children:"\u804C\u52A1\u4FB5\u6743"}),(0,o.jsx)(l,{children:"\u8BC1\u4EBA"})]})]}),(0,o.jsxs)("div",{className:g.section_description,children:[(0,o.jsx)("div",{className:g.section_description_name,children:"\u6848\u4F8B\u63CF\u8FF0\uFF1A"}),(0,o.jsx)("div",{className:g.section_description_content,children:"\u8FD9\u91CC\u662F\u6848\u4F8B\u63CF\u8FF0\u8FD9\u91CC\u662F\u6848\u4F8B\u63CF\u8FF0\u8FD9\u91CC\u662F\u6848\u4F8B\u63CF\u8FF0\u8FD9\u91CC\u662F\u6848\u4F8B\u63CF\u8FF0\u8FD9\u91CC\u662F\u6848\u4F8B\u63CF\u8FF0\u8FD9\u91CC\u662F\u6848\u4F8B\u63CF\u8FF0\u8FD9\u91CC\u662F\u6848\u4F8B\u63CF\u8FF0 \u8FD9\u91CC\u662F\u6848\u4F8B\u63CF\u8FF0\u8FD9\u91CC\u662F\u6848\u4F8B\u63CF\u8FF0\u8FD9\u91CC\u662F\u6848\u4F8B\u63CF\u8FF0\u8FD9\u91CC\u662F\u6848\u4F8B\u63CF\u8FF0\u8FD9\u91CC\u662F\u6848\u4F8B\u63CF\u8FF0\u8FD9\u91CC\u662F\u6848\u4F8B\u63CF\u8FF0\u8FD9\u91CC\u662F\u6848\u4F8B\u63CF\u8FF0\u8FD9\u91CC\u662F\u6848\u4F8B\u63CF\u8FF0 \u8FD9\u91CC\u662F\u6848\u4F8B\u63CF\u8FF0\u8FD9\u91CC\u662F\u6848\u4F8B\u63CF\u8FF0\u8FD9\u91CC\u662F\u6848\u4F8B\u63CF\u8FF0\u8FD9\u91CC\u662F\u6848\u4F8B\u63CF\u8FF0\u8FD9\u91CC\u662F\u6848\u4F8B\u63CF\u8FF0\u8FD9\u91CC\u662F\u6848\u4F8B\u63CF\u8FF0\u8FD9\u91CC\u662F\u6848\u4F8B\u63CF\u8FF0\u8FD9\u91CC\u662F\u6848\u4F8B\u63CF\u8FF0 \u8FD9\u91CC\u662F\u6848\u4F8B\u63CF\u8FF0\u8FD9\u91CC\u662F\u6848\u4F8B\u63CF\u8FF0\u8FD9\u91CC\u662F\u6848\u4F8B\u63CF\u8FF0\u8FD9\u91CC\u662F\u6848\u4F8B\u63CF\u8FF0\u8FD9\u91CC\u662F\u6848\u4F8B\u63CF\u8FF0\u8FD9\u91CC\u662F\u6848\u4F8B\u63CF\u8FF0\u8FD9\u91CC\u662F\u6848\u4F8B\u63CF\u8FF0\u8FD9\u91CC\u662F\u6848\u4F8B\u63CF\u8FF0 \u8FD9\u91CC\u662F\u6848\u4F8B\u63CF\u8FF0\u8FD9\u91CC\u662F\u6848\u4F8B\u63CF\u8FF0\u8FD9\u91CC\u662F\u6848\u4F8B\u63CF\u8FF0\u8FD9\u91CC\u662F\u6848\u4F8B\u63CF\u8FF0\u8FD9\u91CC\u662F\u6848\u4F8B\u63CF\u8FF0\u8FD9\u91CC\u662F\u6848\u4F8B\u63CF\u8FF0"})]}),(0,o.jsx)("div",{children:"etc"})]})};function Y(){return(0,o.jsx)(U,{})}}}]);