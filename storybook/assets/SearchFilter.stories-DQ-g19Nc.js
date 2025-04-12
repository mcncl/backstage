import{j as t}from"./jsx-runtime-B1AhRb-V.js";import{s as de,M as pe}from"./api-DfJnPGQi.js";import{r as V}from"./index-CV65Cz2T.js";import{l as fe}from"./lodash-D2SO6J9k.js";import{a as ge}from"./useAsync-cwiHyrW_.js";import{u as ve}from"./useDebounce-9bFRwIhD.js";import{u as M,S as ye}from"./SearchContext-bKSxcjoU.js";import{A as he}from"./Autocomplete-DAPXdcdV.js";import{T as be}from"./TextField-DGe9sU5n.js";import{C as we}from"./Chip-CtrIo01I.js";import{m as ke}from"./makeStyles-CkJZxfhX.js";import{a as oe,F as Se}from"./FormLabel-DHO9Aw1o.js";import{F as qe}from"./FormControlLabel-BObkJ45K.js";import{C as Ae}from"./Checkbox-35trh0wi.js";import{S as De}from"./Select-aeJxwPm9.js";import{S as $}from"./Grid-DEL9PDyy.js";import{P as w}from"./Paper-Ra1TVF2W.js";import{T as xe}from"./TestApiProvider-Scz87eVI.js";import"./ApiRef-DQ_p_ST9.js";import"./useMountedState-BG_s6PIB.js";import"./useAnalytics-y3ZaQqe-.js";import"./ConfigApi-fH7dLXu8.js";import"./defaultTheme-WHYcXxGo.js";import"./clsx.m-CH7BE6MN.js";import"./Close-BnaIPh3J.js";import"./createSvgIcon-BoOF83CO.js";import"./capitalize-52YtlJa-.js";import"./withStyles-C_eMWQcb.js";import"./hoist-non-react-statics.cjs-DscmM33_.js";import"./unstable_useId-DsWtIzNz.js";import"./useControlled-ltvK4nzt.js";import"./ownerWindow-D1FXuRdm.js";import"./useIsFocusVisible-B2Dvw-Ws.js";import"./index-V23z6GDy.js";import"./IconButton-C69Lr5le.js";import"./ButtonBase-ndPFvxP-.js";import"./TransitionGroupContext-C1n1zRT4.js";import"./Popper-hSP61Xai.js";import"./createChainedFunction-Da-WpsAN.js";import"./Portal-nleYRD7c.js";import"./ListSubheader-cs5TTGWx.js";import"./InputLabel-C1BQdAFz.js";import"./formControlState-ByiNFc8I.js";import"./useFormControl-Cf2zJBza.js";import"./Select-DFMBvgC3.js";import"./react-is.production.min-D0tnNtx9.js";import"./useTheme-CyYT1vdA.js";import"./Popover-BgASJB6t.js";import"./debounce-DtXjJkxj.js";import"./Modal-Cy1ULzPm.js";import"./classCallCheck-BNzALLS0.js";import"./Grow-PDDGETLu.js";import"./utils-vtCpIZas.js";import"./List-DulzYPgQ.js";import"./ListContext-DDd8B5Hf.js";import"./isMuiElement-DG475NJP.js";import"./Typography-DFGLiOLt.js";import"./SwitchBase-DdYX-FMn.js";import"./Cancel-BT7wit3L.js";import"./interopRequireDefault-Y9pwbXtE.js";import"./createSvgIcon-B6km7FGr.js";import"./createStyles-Bp4GwXob.js";import"./createStyles-yD3y8ldD.js";import"./Box-Y2gNioDL.js";import"./typography-0XlFLCN0.js";import"./MenuItem-Cr9VvAj4.js";import"./ListItem-hTEsGfU0.js";import"./ApiProvider-P-n6Z6bh.js";import"./index-BDlCPcVq.js";const s=[];for(let e=0;e<256;++e)s.push((e+256).toString(16).slice(1));function Fe(e,n=0){return(s[e[n+0]]+s[e[n+1]]+s[e[n+2]]+s[e[n+3]]+"-"+s[e[n+4]]+s[e[n+5]]+"-"+s[e[n+6]]+s[e[n+7]]+"-"+s[e[n+8]]+s[e[n+9]]+"-"+s[e[n+10]]+s[e[n+11]]+s[e[n+12]]+s[e[n+13]]+s[e[n+14]]+s[e[n+15]]).toLowerCase()}let _;const Te=new Uint8Array(16);function Pe(){if(!_){if(typeof crypto>"u"||!crypto.getRandomValues)throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");_=crypto.getRandomValues.bind(crypto)}return _(Te)}const je=typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto),B={randomUUID:je};function Ce(e,n,i){var r;if(B.randomUUID&&!n&&!e)return B.randomUUID();e=e||{};const a=e.random??((r=e.rng)==null?void 0:r.call(e))??Pe();if(a.length<16)throw new Error("Random bytes length must be >= 16");return a[6]=a[6]&15|64,a[8]=a[8]&63|128,Fe(a)}const R=(e,n,i=[],a=250)=>{const r=V.useRef({}),o=e||(()=>Promise.resolve([])),[v,c]=ge(o,[n],{loading:!0});if(ve(()=>{r.current[n]===void 0&&(r.current[n]=c(n).then(m=>(r.current[n]=m,m)))},a,[c,n]),i.length)return{loading:!1,value:i};const p=r.current[n];return Array.isArray(p)?{loading:!1,value:p}:v},O=(e,n)=>{const{setFilters:i}=M();V.useEffect(()=>{n&&[n].flat().length>0&&i(a=>({...a,[e]:n}))},[])},ue=e=>{const{className:n,defaultValue:i,name:a,values:r,valuesDebounceMs:o,label:v,filterSelectedOptions:c,limitTags:p,multiple:m}=e,[k,y]=V.useState("");O(a,i);const S=typeof r=="function"?r:void 0,q=typeof r=="function"?void 0:r,{value:A,loading:u}=R(S,k,q,o),{filters:b,setFilters:d}=M(),D=b[a]||(m?[]:null),I=(f,g)=>{d(N=>{const{[a]:U,...W}=N;return g?{...W,[a]:g}:{...W}})},h=f=>t.jsx(be,{...f,name:"search",variant:"outlined",label:v,fullWidth:!0}),E=(f,g)=>f.map((N,U)=>t.jsx(we,{label:N,color:"primary",...g({index:U})}));return t.jsx(he,{filterSelectedOptions:c,limitTags:p,multiple:m,className:n,id:`${m?"multi-":""}select-filter-${a}--select`,options:A||[],loading:u,value:D,onChange:I,onInputChange:(f,g)=>y(g),renderInput:h,renderTags:E})};ue.__docgenInfo={description:"@public",methods:[],displayName:"AutocompleteFilter",props:{className:{required:!1,tsType:{name:"string"},description:""},name:{required:!0,tsType:{name:"string"},description:""},label:{required:!1,tsType:{name:"string"},description:""},values:{required:!1,tsType:{name:"union",raw:"string[] | ((partial: string) => Promise<string[]>)",elements:[{name:"Array",elements:[{name:"string"}],raw:"string[]"},{name:"unknown"}]},description:`Either an array of values directly, or an async function to return a list
of values to be used in the filter. In the autocomplete filter, the last
input value is provided as an input to allow values to be filtered. This
function is debounced and values cached.`},defaultValue:{required:!1,tsType:{name:"union",raw:"string[] | string | null",elements:[{name:"Array",elements:[{name:"string"}],raw:"string[]"},{name:"string"},{name:"null"}]},description:""},valuesDebounceMs:{required:!1,tsType:{name:"number"},description:`Debounce time in milliseconds, used when values is an async callback.
Defaults to 250ms.`},filterSelectedOptions:{required:!1,tsType:{name:"boolean"},description:""},limitTags:{required:!1,tsType:{name:"number"},description:""},multiple:{required:!1,tsType:{name:"boolean"},description:""}}};const Ie=ke({label:{textTransform:"capitalize"},checkboxWrapper:{display:"flex",alignItems:"center",width:"100%"},textWrapper:{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"}}),ce=e=>{const{className:n,defaultValue:i,label:a,name:r,values:o=[],valuesDebounceMs:v}=e,c=Ie(),{filters:p,setFilters:m}=M();O(r,i);const k=typeof o=="function"?o:void 0,y=typeof o=="function"?void 0:o,{value:S=[],loading:q}=R(k,"",y,v),A=u=>{const{target:{value:b,checked:d}}=u;m(D=>{const{[r]:I,...h}=D,E=(I||[]).filter(g=>g!==b),f=d?[...E,b]:E;return f.length?{...h,[r]:f}:h})};return t.jsxs(oe,{className:n,disabled:q,fullWidth:!0,"data-testid":"search-checkboxfilter-next",children:[a?t.jsx(Se,{className:c.label,children:a}):null,S.map(u=>t.jsx(qe,{classes:{root:c.checkboxWrapper,label:c.textWrapper},label:u,control:t.jsx(Ae,{color:"primary",inputProps:{"aria-labelledby":u},value:u,name:u,onChange:A,checked:(p[r]??[]).includes(u)})},u))]})},me=e=>{const{className:n,defaultValue:i,label:a,name:r,values:o,valuesDebounceMs:v}=e;O(r,i);const c=typeof o=="function"?o:void 0,p=typeof o=="function"?void 0:o,{value:m=[],loading:k}=R(c,"",p,v),y=V.useRef(Ce()),S={value:y.current,label:"All"},{filters:q,setFilters:A}=M(),u=d=>{A(D=>{const{[r]:I,...h}=D;return d!==y.current?{...h,[r]:d}:h})},b=[S,...m.map(d=>({value:d,label:d}))];return t.jsx(oe,{disabled:k,className:n,variant:"filled",fullWidth:!0,"data-testid":"search-selectfilter-next",children:t.jsx(De,{label:a??fe.capitalize(r),selected:q[r]||y.current,onChange:u,items:b})})},l=e=>{const{component:n,...i}=e;return t.jsx(n,{...i})};l.Checkbox=e=>t.jsx(l,{...e,component:ce});l.Select=e=>t.jsx(l,{...e,component:me});l.Autocomplete=e=>t.jsx(l,{...e,component:ue});ce.__docgenInfo={description:"@public",methods:[],displayName:"CheckboxFilter",props:{className:{required:!1,tsType:{name:"string"},description:""},name:{required:!0,tsType:{name:"string"},description:""},label:{required:!1,tsType:{name:"string"},description:""},values:{required:!1,tsType:{name:"union",raw:"string[] | ((partial: string) => Promise<string[]>)",elements:[{name:"Array",elements:[{name:"string"}],raw:"string[]"},{name:"unknown"}]},description:`Either an array of values directly, or an async function to return a list
of values to be used in the filter. In the autocomplete filter, the last
input value is provided as an input to allow values to be filtered. This
function is debounced and values cached.`},defaultValue:{required:!1,tsType:{name:"union",raw:"string[] | string | null",elements:[{name:"Array",elements:[{name:"string"}],raw:"string[]"},{name:"string"},{name:"null"}]},description:""},valuesDebounceMs:{required:!1,tsType:{name:"number"},description:`Debounce time in milliseconds, used when values is an async callback.
Defaults to 250ms.`}}};me.__docgenInfo={description:"@public",methods:[],displayName:"SelectFilter",props:{className:{required:!1,tsType:{name:"string"},description:""},name:{required:!0,tsType:{name:"string"},description:""},label:{required:!1,tsType:{name:"string"},description:""},values:{required:!1,tsType:{name:"union",raw:"string[] | ((partial: string) => Promise<string[]>)",elements:[{name:"Array",elements:[{name:"string"}],raw:"string[]"},{name:"unknown"}]},description:`Either an array of values directly, or an async function to return a list
of values to be used in the filter. In the autocomplete filter, the last
input value is provided as an input to allow values to be filtered. This
function is debounced and values cached.`},defaultValue:{required:!1,tsType:{name:"union",raw:"string[] | string | null",elements:[{name:"Array",elements:[{name:"string"}],raw:"string[]"},{name:"string"},{name:"null"}]},description:""},valuesDebounceMs:{required:!1,tsType:{name:"number"},description:`Debounce time in milliseconds, used when values is an async callback.
Defaults to 250ms.`}}};l.__docgenInfo={description:"@public",methods:[{name:"Checkbox",docblock:null,modifiers:["static"],params:[{name:"props",optional:!1,type:{name:"intersection",raw:`Omit<SearchFilterWrapperProps, 'component'> &
SearchFilterComponentProps`,elements:[{name:"Omit",elements:[{name:"intersection",raw:`SearchFilterComponentProps & {
  component: (props: SearchFilterComponentProps) => ReactElement;
  debug?: boolean;
}`,elements:[{name:"signature",type:"object",raw:`{
  className?: string;
  name: string;
  label?: string;
  /**
   * Either an array of values directly, or an async function to return a list
   * of values to be used in the filter. In the autocomplete filter, the last
   * input value is provided as an input to allow values to be filtered. This
   * function is debounced and values cached.
   */
  values?: string[] | ((partial: string) => Promise<string[]>);
  defaultValue?: string[] | string | null;
  /**
   * Debounce time in milliseconds, used when values is an async callback.
   * Defaults to 250ms.
   */
  valuesDebounceMs?: number;
}`,signature:{properties:[{key:"className",value:{name:"string",required:!1}},{key:"name",value:{name:"string",required:!0}},{key:"label",value:{name:"string",required:!1}},{key:"values",value:{name:"union",raw:"string[] | ((partial: string) => Promise<string[]>)",elements:[{name:"Array",elements:[{name:"string"}],raw:"string[]"},{name:"unknown"}],required:!1},description:`Either an array of values directly, or an async function to return a list
of values to be used in the filter. In the autocomplete filter, the last
input value is provided as an input to allow values to be filtered. This
function is debounced and values cached.`},{key:"defaultValue",value:{name:"union",raw:"string[] | string | null",elements:[{name:"Array",elements:[{name:"string"}],raw:"string[]"},{name:"string"},{name:"null"}],required:!1}},{key:"valuesDebounceMs",value:{name:"number",required:!1},description:`Debounce time in milliseconds, used when values is an async callback.
Defaults to 250ms.`}]}},{name:"signature",type:"object",raw:`{
  component: (props: SearchFilterComponentProps) => ReactElement;
  debug?: boolean;
}`,signature:{properties:[{key:"component",value:{name:"signature",type:"function",raw:"(props: SearchFilterComponentProps) => ReactElement",signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  className?: string;
  name: string;
  label?: string;
  /**
   * Either an array of values directly, or an async function to return a list
   * of values to be used in the filter. In the autocomplete filter, the last
   * input value is provided as an input to allow values to be filtered. This
   * function is debounced and values cached.
   */
  values?: string[] | ((partial: string) => Promise<string[]>);
  defaultValue?: string[] | string | null;
  /**
   * Debounce time in milliseconds, used when values is an async callback.
   * Defaults to 250ms.
   */
  valuesDebounceMs?: number;
}`,signature:{properties:[{key:"className",value:{name:"string",required:!1}},{key:"name",value:{name:"string",required:!0}},{key:"label",value:{name:"string",required:!1}},{key:"values",value:{name:"union",raw:"string[] | ((partial: string) => Promise<string[]>)",elements:[{name:"Array",elements:[{name:"string"}],raw:"string[]"},{name:"unknown"}],required:!1},description:`Either an array of values directly, or an async function to return a list
of values to be used in the filter. In the autocomplete filter, the last
input value is provided as an input to allow values to be filtered. This
function is debounced and values cached.`},{key:"defaultValue",value:{name:"union",raw:"string[] | string | null",elements:[{name:"Array",elements:[{name:"string"}],raw:"string[]"},{name:"string"},{name:"null"}],required:!1}},{key:"valuesDebounceMs",value:{name:"number",required:!1},description:`Debounce time in milliseconds, used when values is an async callback.
Defaults to 250ms.`}]}},name:"props"}],return:{name:"ReactElement"}},required:!0}},{key:"debug",value:{name:"boolean",required:!1}}]}}]},{name:"literal",value:"'component'"}],raw:"Omit<SearchFilterWrapperProps, 'component'>"},{name:"signature",type:"object",raw:`{
  className?: string;
  name: string;
  label?: string;
  /**
   * Either an array of values directly, or an async function to return a list
   * of values to be used in the filter. In the autocomplete filter, the last
   * input value is provided as an input to allow values to be filtered. This
   * function is debounced and values cached.
   */
  values?: string[] | ((partial: string) => Promise<string[]>);
  defaultValue?: string[] | string | null;
  /**
   * Debounce time in milliseconds, used when values is an async callback.
   * Defaults to 250ms.
   */
  valuesDebounceMs?: number;
}`,signature:{properties:[{key:"className",value:{name:"string",required:!1}},{key:"name",value:{name:"string",required:!0}},{key:"label",value:{name:"string",required:!1}},{key:"values",value:{name:"union",raw:"string[] | ((partial: string) => Promise<string[]>)",elements:[{name:"Array",elements:[{name:"string"}],raw:"string[]"},{name:"unknown"}],required:!1},description:`Either an array of values directly, or an async function to return a list
of values to be used in the filter. In the autocomplete filter, the last
input value is provided as an input to allow values to be filtered. This
function is debounced and values cached.`},{key:"defaultValue",value:{name:"union",raw:"string[] | string | null",elements:[{name:"Array",elements:[{name:"string"}],raw:"string[]"},{name:"string"},{name:"null"}],required:!1}},{key:"valuesDebounceMs",value:{name:"number",required:!1},description:`Debounce time in milliseconds, used when values is an async callback.
Defaults to 250ms.`}]}}]}}],returns:null},{name:"Select",docblock:null,modifiers:["static"],params:[{name:"props",optional:!1,type:{name:"intersection",raw:`Omit<SearchFilterWrapperProps, 'component'> &
SearchFilterComponentProps`,elements:[{name:"Omit",elements:[{name:"intersection",raw:`SearchFilterComponentProps & {
  component: (props: SearchFilterComponentProps) => ReactElement;
  debug?: boolean;
}`,elements:[{name:"signature",type:"object",raw:`{
  className?: string;
  name: string;
  label?: string;
  /**
   * Either an array of values directly, or an async function to return a list
   * of values to be used in the filter. In the autocomplete filter, the last
   * input value is provided as an input to allow values to be filtered. This
   * function is debounced and values cached.
   */
  values?: string[] | ((partial: string) => Promise<string[]>);
  defaultValue?: string[] | string | null;
  /**
   * Debounce time in milliseconds, used when values is an async callback.
   * Defaults to 250ms.
   */
  valuesDebounceMs?: number;
}`,signature:{properties:[{key:"className",value:{name:"string",required:!1}},{key:"name",value:{name:"string",required:!0}},{key:"label",value:{name:"string",required:!1}},{key:"values",value:{name:"union",raw:"string[] | ((partial: string) => Promise<string[]>)",elements:[{name:"Array",elements:[{name:"string"}],raw:"string[]"},{name:"unknown"}],required:!1},description:`Either an array of values directly, or an async function to return a list
of values to be used in the filter. In the autocomplete filter, the last
input value is provided as an input to allow values to be filtered. This
function is debounced and values cached.`},{key:"defaultValue",value:{name:"union",raw:"string[] | string | null",elements:[{name:"Array",elements:[{name:"string"}],raw:"string[]"},{name:"string"},{name:"null"}],required:!1}},{key:"valuesDebounceMs",value:{name:"number",required:!1},description:`Debounce time in milliseconds, used when values is an async callback.
Defaults to 250ms.`}]}},{name:"signature",type:"object",raw:`{
  component: (props: SearchFilterComponentProps) => ReactElement;
  debug?: boolean;
}`,signature:{properties:[{key:"component",value:{name:"signature",type:"function",raw:"(props: SearchFilterComponentProps) => ReactElement",signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  className?: string;
  name: string;
  label?: string;
  /**
   * Either an array of values directly, or an async function to return a list
   * of values to be used in the filter. In the autocomplete filter, the last
   * input value is provided as an input to allow values to be filtered. This
   * function is debounced and values cached.
   */
  values?: string[] | ((partial: string) => Promise<string[]>);
  defaultValue?: string[] | string | null;
  /**
   * Debounce time in milliseconds, used when values is an async callback.
   * Defaults to 250ms.
   */
  valuesDebounceMs?: number;
}`,signature:{properties:[{key:"className",value:{name:"string",required:!1}},{key:"name",value:{name:"string",required:!0}},{key:"label",value:{name:"string",required:!1}},{key:"values",value:{name:"union",raw:"string[] | ((partial: string) => Promise<string[]>)",elements:[{name:"Array",elements:[{name:"string"}],raw:"string[]"},{name:"unknown"}],required:!1},description:`Either an array of values directly, or an async function to return a list
of values to be used in the filter. In the autocomplete filter, the last
input value is provided as an input to allow values to be filtered. This
function is debounced and values cached.`},{key:"defaultValue",value:{name:"union",raw:"string[] | string | null",elements:[{name:"Array",elements:[{name:"string"}],raw:"string[]"},{name:"string"},{name:"null"}],required:!1}},{key:"valuesDebounceMs",value:{name:"number",required:!1},description:`Debounce time in milliseconds, used when values is an async callback.
Defaults to 250ms.`}]}},name:"props"}],return:{name:"ReactElement"}},required:!0}},{key:"debug",value:{name:"boolean",required:!1}}]}}]},{name:"literal",value:"'component'"}],raw:"Omit<SearchFilterWrapperProps, 'component'>"},{name:"signature",type:"object",raw:`{
  className?: string;
  name: string;
  label?: string;
  /**
   * Either an array of values directly, or an async function to return a list
   * of values to be used in the filter. In the autocomplete filter, the last
   * input value is provided as an input to allow values to be filtered. This
   * function is debounced and values cached.
   */
  values?: string[] | ((partial: string) => Promise<string[]>);
  defaultValue?: string[] | string | null;
  /**
   * Debounce time in milliseconds, used when values is an async callback.
   * Defaults to 250ms.
   */
  valuesDebounceMs?: number;
}`,signature:{properties:[{key:"className",value:{name:"string",required:!1}},{key:"name",value:{name:"string",required:!0}},{key:"label",value:{name:"string",required:!1}},{key:"values",value:{name:"union",raw:"string[] | ((partial: string) => Promise<string[]>)",elements:[{name:"Array",elements:[{name:"string"}],raw:"string[]"},{name:"unknown"}],required:!1},description:`Either an array of values directly, or an async function to return a list
of values to be used in the filter. In the autocomplete filter, the last
input value is provided as an input to allow values to be filtered. This
function is debounced and values cached.`},{key:"defaultValue",value:{name:"union",raw:"string[] | string | null",elements:[{name:"Array",elements:[{name:"string"}],raw:"string[]"},{name:"string"},{name:"null"}],required:!1}},{key:"valuesDebounceMs",value:{name:"number",required:!1},description:`Debounce time in milliseconds, used when values is an async callback.
Defaults to 250ms.`}]}}]}}],returns:null},{name:"Autocomplete",docblock:`A control surface for a given filter field name, rendered as an autocomplete
textfield. A hard-coded list of values may be provided, or an async function
which returns values may be provided instead.

@public`,modifiers:["static"],params:[{name:"props",optional:!1,type:{name:"intersection",raw:`SearchFilterComponentProps & {
  filterSelectedOptions?: boolean;
  limitTags?: number;
  multiple?: boolean;
}`,elements:[{name:"signature",type:"object",raw:`{
  className?: string;
  name: string;
  label?: string;
  /**
   * Either an array of values directly, or an async function to return a list
   * of values to be used in the filter. In the autocomplete filter, the last
   * input value is provided as an input to allow values to be filtered. This
   * function is debounced and values cached.
   */
  values?: string[] | ((partial: string) => Promise<string[]>);
  defaultValue?: string[] | string | null;
  /**
   * Debounce time in milliseconds, used when values is an async callback.
   * Defaults to 250ms.
   */
  valuesDebounceMs?: number;
}`,signature:{properties:[{key:"className",value:{name:"string",required:!1}},{key:"name",value:{name:"string",required:!0}},{key:"label",value:{name:"string",required:!1}},{key:"values",value:{name:"union",raw:"string[] | ((partial: string) => Promise<string[]>)",elements:[{name:"Array",elements:[{name:"string"}],raw:"string[]"},{name:"unknown"}],required:!1},description:`Either an array of values directly, or an async function to return a list
of values to be used in the filter. In the autocomplete filter, the last
input value is provided as an input to allow values to be filtered. This
function is debounced and values cached.`},{key:"defaultValue",value:{name:"union",raw:"string[] | string | null",elements:[{name:"Array",elements:[{name:"string"}],raw:"string[]"},{name:"string"},{name:"null"}],required:!1}},{key:"valuesDebounceMs",value:{name:"number",required:!1},description:`Debounce time in milliseconds, used when values is an async callback.
Defaults to 250ms.`}]}},{name:"signature",type:"object",raw:`{
  filterSelectedOptions?: boolean;
  limitTags?: number;
  multiple?: boolean;
}`,signature:{properties:[{key:"filterSelectedOptions",value:{name:"boolean",required:!1}},{key:"limitTags",value:{name:"number",required:!1}},{key:"multiple",value:{name:"boolean",required:!1}}]}}],alias:"SearchAutocompleteFilterProps"}}],returns:null,description:`A control surface for a given filter field name, rendered as an autocomplete
textfield. A hard-coded list of values may be provided, or an async function
which returns values may be provided instead.`}],displayName:"SearchFilter",props:{className:{required:!1,tsType:{name:"string"},description:""},name:{required:!0,tsType:{name:"string"},description:""},label:{required:!1,tsType:{name:"string"},description:""},values:{required:!1,tsType:{name:"union",raw:"string[] | ((partial: string) => Promise<string[]>)",elements:[{name:"Array",elements:[{name:"string"}],raw:"string[]"},{name:"unknown"}]},description:`Either an array of values directly, or an async function to return a list
of values to be used in the filter. In the autocomplete filter, the last
input value is provided as an input to allow values to be filtered. This
function is debounced and values cached.`},defaultValue:{required:!1,tsType:{name:"union",raw:"string[] | string | null",elements:[{name:"Array",elements:[{name:"string"}],raw:"string[]"},{name:"string"},{name:"null"}]},description:""},valuesDebounceMs:{required:!1,tsType:{name:"number"},description:`Debounce time in milliseconds, used when values is an async callback.
Defaults to 250ms.`},component:{required:!0,tsType:{name:"signature",type:"function",raw:"(props: SearchFilterComponentProps) => ReactElement",signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  className?: string;
  name: string;
  label?: string;
  /**
   * Either an array of values directly, or an async function to return a list
   * of values to be used in the filter. In the autocomplete filter, the last
   * input value is provided as an input to allow values to be filtered. This
   * function is debounced and values cached.
   */
  values?: string[] | ((partial: string) => Promise<string[]>);
  defaultValue?: string[] | string | null;
  /**
   * Debounce time in milliseconds, used when values is an async callback.
   * Defaults to 250ms.
   */
  valuesDebounceMs?: number;
}`,signature:{properties:[{key:"className",value:{name:"string",required:!1}},{key:"name",value:{name:"string",required:!0}},{key:"label",value:{name:"string",required:!1}},{key:"values",value:{name:"union",raw:"string[] | ((partial: string) => Promise<string[]>)",elements:[{name:"Array",elements:[{name:"string"}],raw:"string[]"},{name:"unknown"}],required:!1},description:`Either an array of values directly, or an async function to return a list
of values to be used in the filter. In the autocomplete filter, the last
input value is provided as an input to allow values to be filtered. This
function is debounced and values cached.`},{key:"defaultValue",value:{name:"union",raw:"string[] | string | null",elements:[{name:"Array",elements:[{name:"string"}],raw:"string[]"},{name:"string"},{name:"null"}],required:!1}},{key:"valuesDebounceMs",value:{name:"number",required:!1},description:`Debounce time in milliseconds, used when values is an async callback.
Defaults to 250ms.`}]}},name:"props"}],return:{name:"ReactElement"}}},description:""},debug:{required:!1,tsType:{name:"boolean"},description:""}}};const Kn={title:"Plugins/Search/SearchFilter",component:l,decorators:[e=>t.jsx(xe,{apis:[[de,new pe]],children:t.jsx(ye,{children:t.jsx($,{container:!0,direction:"row",children:t.jsx($,{item:!0,xs:4,children:t.jsx(e,{})})})})})]},x=()=>t.jsx(w,{style:{padding:10},children:t.jsx(l.Checkbox,{name:"Search Checkbox Filter",values:["value1","value2"]})}),F=()=>t.jsx(w,{style:{padding:10},children:t.jsx(l.Select,{label:"Search Select Filter",name:"select_filter",values:["value1","value2"]})}),T=()=>t.jsx(w,{style:{padding:10},children:t.jsx(l.Select,{label:"Asynchronous Values",name:"async_values",values:async()=>(await(await fetch("https://swapi.dev/api/planets")).json()).results.map(i=>i.name)})}),P=()=>t.jsx(w,{style:{padding:10},children:t.jsx(l.Autocomplete,{name:"autocomplete",label:"Single-Select Autocomplete Filter",values:["value1","value2"]})}),j=()=>t.jsx(w,{style:{padding:10},children:t.jsx(l.Autocomplete,{multiple:!0,name:"autocomplete",label:"Multi-Select Autocomplete Filter",values:["value1","value2"]})}),C=()=>t.jsx(w,{style:{padding:10},children:t.jsx(l.Autocomplete,{multiple:!0,name:"starwarsPerson",label:"Starwars Character",values:async e=>e===""?[]:(await(await fetch(`https://swapi.dev/api/people?search=${encodeURIComponent(e)}`)).json()).results.map(a=>a.name)})});x.__docgenInfo={description:"",methods:[],displayName:"CheckBoxFilter"};F.__docgenInfo={description:"",methods:[],displayName:"SelectFilter"};T.__docgenInfo={description:"",methods:[],displayName:"AsyncSelectFilter"};P.__docgenInfo={description:"",methods:[],displayName:"Autocomplete"};j.__docgenInfo={description:"",methods:[],displayName:"MultiSelectAutocomplete"};C.__docgenInfo={description:"",methods:[],displayName:"AsyncMultiSelectAutocomplete"};var L,z,G;x.parameters={...x.parameters,docs:{...(L=x.parameters)==null?void 0:L.docs,source:{originalSource:`() => {
  return <Paper style={{
    padding: 10
  }}>
      <SearchFilter.Checkbox name="Search Checkbox Filter" values={['value1', 'value2']} />
    </Paper>;
}`,...(G=(z=x.parameters)==null?void 0:z.docs)==null?void 0:G.source}}};var H,J,K;F.parameters={...F.parameters,docs:{...(H=F.parameters)==null?void 0:H.docs,source:{originalSource:`() => {
  return <Paper style={{
    padding: 10
  }}>
      <SearchFilter.Select label="Search Select Filter" name="select_filter" values={['value1', 'value2']} />
    </Paper>;
}`,...(K=(J=F.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var Q,X,Y;T.parameters={...T.parameters,docs:{...(Q=T.parameters)==null?void 0:Q.docs,source:{originalSource:`() => {
  return <Paper style={{
    padding: 10
  }}>
      <SearchFilter.Select label="Asynchronous Values" name="async_values" values={async () => {
      const response = await fetch('https://swapi.dev/api/planets');
      const json: {
        results: Array<{
          name: string;
        }>;
      } = await response.json();
      return json.results.map(r => r.name);
    }} />
    </Paper>;
}`,...(Y=(X=T.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};var Z,ee,ne;P.parameters={...P.parameters,docs:{...(Z=P.parameters)==null?void 0:Z.docs,source:{originalSource:`() => {
  return <Paper style={{
    padding: 10
  }}>
      <SearchFilter.Autocomplete name="autocomplete" label="Single-Select Autocomplete Filter" values={['value1', 'value2']} />
    </Paper>;
}`,...(ne=(ee=P.parameters)==null?void 0:ee.docs)==null?void 0:ne.source}}};var te,ae,re;j.parameters={...j.parameters,docs:{...(te=j.parameters)==null?void 0:te.docs,source:{originalSource:`() => {
  return <Paper style={{
    padding: 10
  }}>
      <SearchFilter.Autocomplete multiple name="autocomplete" label="Multi-Select Autocomplete Filter" values={['value1', 'value2']} />
    </Paper>;
}`,...(re=(ae=j.parameters)==null?void 0:ae.docs)==null?void 0:re.source}}};var se,ie,le;C.parameters={...C.parameters,docs:{...(se=C.parameters)==null?void 0:se.docs,source:{originalSource:`() => {
  return <Paper style={{
    padding: 10
  }}>
      <SearchFilter.Autocomplete multiple name="starwarsPerson" label="Starwars Character" values={async partial => {
      if (partial === '') return [];
      const response = await fetch(\`https://swapi.dev/api/people?search=\${encodeURIComponent(partial)}\`);
      const json: {
        results: Array<{
          name: string;
        }>;
      } = await response.json();
      return json.results.map(r => r.name);
    }} />
    </Paper>;
}`,...(le=(ie=C.parameters)==null?void 0:ie.docs)==null?void 0:le.source}}};const Qn=["CheckBoxFilter","SelectFilter","AsyncSelectFilter","Autocomplete","MultiSelectAutocomplete","AsyncMultiSelectAutocomplete"];export{C as AsyncMultiSelectAutocomplete,T as AsyncSelectFilter,P as Autocomplete,x as CheckBoxFilter,j as MultiSelectAutocomplete,F as SelectFilter,Qn as __namedExportsOrder,Kn as default};
