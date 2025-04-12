import{j as e}from"./jsx-runtime-B1AhRb-V.js";import{d as x}from"./MenuBook-BtWSqKN1.js";import{i as S}from"./interopRequireDefault-Y9pwbXtE.js";import{r as V,i as _}from"./createSvgIcon-B6km7FGr.js";import{a as j}from"./index-CV65Cz2T.js";import{d as g}from"./Person-CZIK0oqO.js";import{S as t}from"./SearchType-B76F74Os.js";import{s as R,M as A}from"./api-DfJnPGQi.js";import{S as D}from"./SearchContext-bKSxcjoU.js";import{S as p}from"./Grid-DEL9PDyy.js";import{P as I}from"./Paper-Ra1TVF2W.js";import{T as P}from"./TestApiProvider-Scz87eVI.js";import"./capitalize-52YtlJa-.js";import"./defaultTheme-WHYcXxGo.js";import"./withStyles-C_eMWQcb.js";import"./hoist-non-react-statics.cjs-DscmM33_.js";import"./createChainedFunction-Da-WpsAN.js";import"./createSvgIcon-BoOF83CO.js";import"./debounce-DtXjJkxj.js";import"./isMuiElement-DG475NJP.js";import"./ownerWindow-D1FXuRdm.js";import"./useIsFocusVisible-B2Dvw-Ws.js";import"./index-V23z6GDy.js";import"./useControlled-ltvK4nzt.js";import"./unstable_useId-DsWtIzNz.js";import"./ExpandMore-CkqGOjzY.js";import"./useAsync-cwiHyrW_.js";import"./useMountedState-BG_s6PIB.js";import"./makeStyles-CkJZxfhX.js";import"./Box-Y2gNioDL.js";import"./typography-0XlFLCN0.js";import"./Typography-DFGLiOLt.js";import"./AccordionDetails-BJrt2wGE.js";import"./toArray-CoXhHPie.js";import"./react-is.production.min-D0tnNtx9.js";import"./Collapse-BIGTY5B8.js";import"./utils-vtCpIZas.js";import"./TransitionGroupContext-C1n1zRT4.js";import"./useTheme-CyYT1vdA.js";import"./ButtonBase-ndPFvxP-.js";import"./IconButton-C69Lr5le.js";import"./List-DulzYPgQ.js";import"./ListContext-DDd8B5Hf.js";import"./Divider-BB45xwAD.js";import"./ListItem-hTEsGfU0.js";import"./ListItemIcon-DUgu-gxe.js";import"./ListItemText-C5lSDp-V.js";import"./ApiRef-DQ_p_ST9.js";import"./Tabs-C8UMOKCZ.js";import"./KeyboardArrowRight-Dch7uEGd.js";import"./FormLabel-DHO9Aw1o.js";import"./formControlState-ByiNFc8I.js";import"./useFormControl-Cf2zJBza.js";import"./InputLabel-C1BQdAFz.js";import"./Select-DFMBvgC3.js";import"./Popover-BgASJB6t.js";import"./Modal-Cy1ULzPm.js";import"./classCallCheck-BNzALLS0.js";import"./Portal-nleYRD7c.js";import"./Grow-PDDGETLu.js";import"./Chip-CtrIo01I.js";import"./MenuItem-Cr9VvAj4.js";import"./Checkbox-35trh0wi.js";import"./SwitchBase-DdYX-FMn.js";import"./lodash-D2SO6J9k.js";import"./useAnalytics-y3ZaQqe-.js";import"./ConfigApi-fH7dLXu8.js";import"./ApiProvider-P-n6Z6bh.js";import"./index-BDlCPcVq.js";var i={},b=S,q=_;Object.defineProperty(i,"__esModule",{value:!0});var T=i.default=void 0,w=q(j()),O=b(V()),E=(0,O.default)(w.createElement("path",{d:"M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"}),"Description");T=i.default=E;const Qe={title:"Plugins/Search/SearchType",component:t,decorators:[y=>e.jsx(P,{apis:[[R,new A]],children:e.jsx(D,{children:e.jsx(p,{container:!0,direction:"row",children:e.jsx(p,{item:!0,xs:4,children:e.jsx(y,{})})})})})]},m=["value-1","value-2","value-3"],r=()=>e.jsx(I,{style:{padding:10},children:e.jsx(t,{name:"Search type",values:m,defaultValue:m[0]})}),a=()=>e.jsx(t.Accordion,{name:"Result Types",defaultValue:"value-1",types:[{value:"value-1",name:"Value One",icon:e.jsx(x,{})},{value:"value-2",name:"Value Two",icon:e.jsx(T,{})},{value:"value-3",name:"Value Three",icon:e.jsx(g,{})}]}),o=()=>e.jsx(t.Tabs,{defaultValue:"value-1",types:[{value:"value-1",name:"Value One"},{value:"value-2",name:"Value Two"},{value:"value-3",name:"Value Three"}]});r.__docgenInfo={description:"",methods:[],displayName:"Default"};a.__docgenInfo={description:"",methods:[],displayName:"Accordion"};o.__docgenInfo={description:"",methods:[],displayName:"Tabs"};var s,u,l;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`() => {
  return <Paper style={{
    padding: 10
  }}>
      <SearchType name="Search type" values={values} defaultValue={values[0]} />
    </Paper>;
}`,...(l=(u=r.parameters)==null?void 0:u.docs)==null?void 0:l.source}}};var n,c,d;a.parameters={...a.parameters,docs:{...(n=a.parameters)==null?void 0:n.docs,source:{originalSource:`() => {
  return <SearchType.Accordion name="Result Types" defaultValue="value-1" types={[{
    value: 'value-1',
    name: 'Value One',
    icon: <CatalogIcon />
  }, {
    value: 'value-2',
    name: 'Value Two',
    icon: <DocsIcon />
  }, {
    value: 'value-3',
    name: 'Value Three',
    icon: <UsersGroupsIcon />
  }]} />;
}`,...(d=(c=a.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var v,f,h;o.parameters={...o.parameters,docs:{...(v=o.parameters)==null?void 0:v.docs,source:{originalSource:`() => {
  return <SearchType.Tabs defaultValue="value-1" types={[{
    value: 'value-1',
    name: 'Value One'
  }, {
    value: 'value-2',
    name: 'Value Two'
  }, {
    value: 'value-3',
    name: 'Value Three'
  }]} />;
}`,...(h=(f=o.parameters)==null?void 0:f.docs)==null?void 0:h.source}}};const Xe=["Default","Accordion","Tabs"];export{a as Accordion,r as Default,o as Tabs,Xe as __namedExportsOrder,Qe as default};
