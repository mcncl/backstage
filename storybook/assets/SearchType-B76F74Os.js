import{j as e}from"./jsx-runtime-B1AhRb-V.js";import{r as y,a as N}from"./index-CV65Cz2T.js";import{d as V}from"./ExpandMore-CkqGOjzY.js";import{i as L}from"./interopRequireDefault-Y9pwbXtE.js";import{r as R,i as D}from"./createSvgIcon-B6km7FGr.js";import{u as P}from"./useAsync-cwiHyrW_.js";import{m as h}from"./makeStyles-CkJZxfhX.js";import{u as v}from"./SearchContext-bKSxcjoU.js";import{s as z}from"./api-DfJnPGQi.js";import{B as J}from"./Box-Y2gNioDL.js";import{T as M}from"./Typography-DFGLiOLt.js";import{A as W,a as X,b as B}from"./AccordionDetails-BJrt2wGE.js";import{L as H}from"./List-DulzYPgQ.js";import{D as O}from"./Divider-BB45xwAD.js";import{L as $}from"./ListItem-hTEsGfU0.js";import{L as F}from"./ListItemIcon-DUgu-gxe.js";import{L as j}from"./ListItemText-C5lSDp-V.js";import{u as U}from"./ApiRef-DQ_p_ST9.js";import{T as G,a as K}from"./Tabs-C8UMOKCZ.js";import{a as Q}from"./FormLabel-DHO9Aw1o.js";import{I as Y}from"./InputLabel-C1BQdAFz.js";import{S as Z}from"./Select-DFMBvgC3.js";import{C as ee}from"./Chip-CtrIo01I.js";import{M as re}from"./MenuItem-Cr9VvAj4.js";import{C as ae}from"./Checkbox-35trh0wi.js";var se=function(r){y.useEffect(r,[])},b={},te=L,ne=D;Object.defineProperty(b,"__esModule",{value:!0});var A=b.default=void 0,ie=ne(N()),oe=te(R()),le=(0,oe.default)(ie.createElement("path",{d:"M9.93 13.5h4.14L12 7.98zM20 2H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-4.05 16.5l-1.14-3H9.17l-1.12 3H5.96l5.11-13h1.86l5.11 13h-2.09z"}),"FontDownload");A=b.default=le;const ce=h(r=>({icon:{color:r.palette.text.primary},list:{width:"100%"},listItemIcon:{width:"24px",height:"24px"},accordion:{backgroundColor:r.palette.background.paper},accordionSummary:{minHeight:"auto","&.Mui-expanded":{minHeight:"auto"}},accordionSummaryContent:{margin:r.spacing(2,0),"&.Mui-expanded":{margin:r.spacing(2,0)}},accordionDetails:{padding:r.spacing(0,0,1)}})),S=r=>{const t=ce(),{filters:o,setPageCursor:p,setTypes:c,term:l,types:n}=v(),u=U(z),[d,s]=y.useState(!0),{defaultValue:i,name:C,showCounts:T,types:w}=r,I=()=>s(a=>!a),E=a=>()=>{c(a!==""?[a]:[]),p(void 0)};y.useEffect(()=>{i&&c([i])},[]);const f=[{value:"",name:"All",icon:e.jsx(A,{})},...w],_=n[0]||"",{value:q}=P(async()=>{if(!T)return{};const a=await Promise.all(f.map(m=>m.value).map(async m=>{const{numberOfResults:g}=await u.query({term:l,types:m?[m]:[],filters:n.includes(m)||!n.length&&!m?o:{},pageLimit:0});return[m,g!==void 0?`${g>=1e4?">10000":g} results`:" -- "]}));return Object.fromEntries(a)},[o,T,l,n]);return e.jsxs(J,{children:[e.jsx(M,{variant:"body2",component:"h2",children:C}),e.jsxs(W,{className:t.accordion,expanded:d,onChange:I,children:[e.jsx(X,{classes:{root:t.accordionSummary,content:t.accordionSummaryContent},expandIcon:e.jsx(V,{className:t.icon}),IconButtonProps:{size:"small"},children:d?"Collapse":f.filter(a=>a.value===_)[0].name}),e.jsx(B,{classes:{root:t.accordionDetails},children:e.jsx(H,{className:t.list,component:"nav","aria-label":"filter by type",disablePadding:!0,dense:!0,children:f.map(a=>e.jsxs(y.Fragment,{children:[e.jsx(O,{}),e.jsxs($,{selected:n[0]===a.value||n.length===0&&a.value==="",onClick:E(a.value),button:!0,children:[e.jsx(F,{children:y.cloneElement(a.icon,{className:t.listItemIcon})}),e.jsx(j,{primary:a.name,secondary:q&&q[a.value]})]})]},a.value))})})]})]})};S.__docgenInfo={description:"",methods:[],displayName:"SearchTypeAccordion",props:{name:{required:!0,tsType:{name:"string"},description:""},types:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  value: string;
  name: string;
  icon: JSX.Element;
}`,signature:{properties:[{key:"value",value:{name:"string",required:!0}},{key:"name",value:{name:"string",required:!0}},{key:"icon",value:{name:"JSX.Element",required:!0}}]}}],raw:`Array<{
  value: string;
  name: string;
  icon: JSX.Element;
}>`},description:""},defaultValue:{required:!1,tsType:{name:"string"},description:""},showCounts:{required:!1,tsType:{name:"boolean"},description:""}}};const ue=h(r=>({tabs:{borderBottom:`1px solid ${r.palette.textVerySubtle}`},tab:{height:"50px",fontWeight:r.typography.fontWeightBold,fontSize:r.typography.pxToRem(13),color:r.palette.text.primary,minWidth:"130px"}})),k=r=>{const t=ue(),{setPageCursor:o,setTypes:p,types:c}=v(),{defaultValue:l,types:n}=r,u=(s,i)=>{p(i!==""?[i]:[]),o(void 0)};y.useEffect(()=>{l&&p([l])},[]);const d=[{value:"",name:"All"},...n];return e.jsx(G,{"aria-label":"List of search types tabs",className:t.tabs,indicatorColor:"primary",value:c.length===0?"":c[0],onChange:u,children:d.map((s,i)=>e.jsx(K,{className:t.tab,label:s.name,value:s.value},i))})};k.__docgenInfo={description:"",methods:[],displayName:"SearchTypeTabs",props:{types:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  value: string;
  name: string;
}`,signature:{properties:[{key:"value",value:{name:"string",required:!0}},{key:"name",value:{name:"string",required:!0}}]}}],raw:`Array<{
  value: string;
  name: string;
}>`},description:""},defaultValue:{required:!1,tsType:{name:"string"},description:""}}};const me=h(r=>({label:{textTransform:"capitalize"},chips:{display:"flex",flexWrap:"wrap",marginTop:r.spacing(1)},chip:{margin:2}})),x=r=>{const{className:t,defaultValue:o,name:p,values:c=[]}=r,l=me(),{types:n,setTypes:u}=v();se(()=>{n.length||(o&&Array.isArray(o)?u(o):o&&u([o]))});const d=s=>{const i=s.target.value;u(i)};return e.jsxs(Q,{className:t,variant:"filled",fullWidth:!0,"data-testid":"search-typefilter-next",children:[e.jsx(Y,{className:l.label,margin:"dense",children:p}),e.jsx(Z,{multiple:!0,variant:"outlined",value:n,onChange:d,placeholder:"All Results",renderValue:s=>e.jsx("div",{className:l.chips,children:s.map(i=>e.jsx(ee,{label:i,className:l.chip,size:"small"},i))}),children:c.map(s=>e.jsxs(re,{value:s,children:[e.jsx(ae,{checked:n.indexOf(s)>-1}),e.jsx(j,{primary:s})]},s))})]})};x.Accordion=r=>e.jsx(S,{...r});x.Tabs=r=>e.jsx(k,{...r});x.__docgenInfo={description:"@public",methods:[{name:"Accordion",docblock:`A control surface for the search query's "types" property, displayed as a
single-select collapsible accordion suitable for use in faceted search UIs.
@public`,modifiers:["static"],params:[{name:"props",optional:!1,type:{name:"signature",type:"object",raw:`{
  name: string;
  types: Array<{
    value: string;
    name: string;
    icon: JSX.Element;
  }>;
  defaultValue?: string;
  showCounts?: boolean;
}`,signature:{properties:[{key:"name",value:{name:"string",required:!0}},{key:"types",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  value: string;
  name: string;
  icon: JSX.Element;
}`,signature:{properties:[{key:"value",value:{name:"string",required:!0}},{key:"name",value:{name:"string",required:!0}},{key:"icon",value:{name:"JSX.Element",required:!0}}]}}],raw:`Array<{
  value: string;
  name: string;
  icon: JSX.Element;
}>`,required:!0}},{key:"defaultValue",value:{name:"string",required:!1}},{key:"showCounts",value:{name:"boolean",required:!1}}]},alias:"SearchTypeAccordionProps"}}],returns:null,description:`A control surface for the search query's "types" property, displayed as a
single-select collapsible accordion suitable for use in faceted search UIs.`},{name:"Tabs",docblock:`A control surface for the search query's "types" property, displayed as a
tabs suitable for use in faceted search UIs.
@public`,modifiers:["static"],params:[{name:"props",optional:!1,type:{name:"signature",type:"object",raw:`{
  types: Array<{
    value: string;
    name: string;
  }>;
  defaultValue?: string;
}`,signature:{properties:[{key:"types",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  value: string;
  name: string;
}`,signature:{properties:[{key:"value",value:{name:"string",required:!0}},{key:"name",value:{name:"string",required:!0}}]}}],raw:`Array<{
  value: string;
  name: string;
}>`,required:!0}},{key:"defaultValue",value:{name:"string",required:!1}}]},alias:"SearchTypeTabsProps"}}],returns:null,description:`A control surface for the search query's "types" property, displayed as a
tabs suitable for use in faceted search UIs.`}],displayName:"SearchType",props:{className:{required:!1,tsType:{name:"string"},description:""},name:{required:!0,tsType:{name:"string"},description:""},values:{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:""},defaultValue:{required:!1,tsType:{name:"union",raw:"string[] | string | null",elements:[{name:"Array",elements:[{name:"string"}],raw:"string[]"},{name:"string"},{name:"null"}]},description:""}}};export{x as S};
