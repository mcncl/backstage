import{j as r}from"./jsx-runtime-B1AhRb-V.js";import{r as l,H as d}from"./plugin-C44Fb6ts.js";import{s as u}from"./api-DfJnPGQi.js";import{S as s}from"./Grid-DEL9PDyy.js";import{m as h}from"./makeStyles-CkJZxfhX.js";import{w as g}from"./appWrappers-BjEVlosn.js";import{T as x}from"./TestApiProvider-Scz87eVI.js";import"./index-CV65Cz2T.js";import"./iframe-CgWBIHKh.js";import"./index-1RSfPQyn.js";import"./ApiRef-DQ_p_ST9.js";import"./Plugin-mpVNw5Cy.js";import"./componentData--aKu5_T4.js";import"./useAnalytics-y3ZaQqe-.js";import"./ConfigApi-fH7dLXu8.js";import"./index-CMym2nmu.js";import"./useRouteRef-DZfF4Gng.js";import"./defaultTheme-WHYcXxGo.js";import"./capitalize-52YtlJa-.js";import"./withStyles-C_eMWQcb.js";import"./hoist-non-react-statics.cjs-DscmM33_.js";import"./interopRequireDefault-Y9pwbXtE.js";import"./createSvgIcon-B6km7FGr.js";import"./createChainedFunction-Da-WpsAN.js";import"./createSvgIcon-BoOF83CO.js";import"./debounce-DtXjJkxj.js";import"./isMuiElement-DG475NJP.js";import"./ownerWindow-D1FXuRdm.js";import"./useIsFocusVisible-B2Dvw-Ws.js";import"./index-V23z6GDy.js";import"./useControlled-ltvK4nzt.js";import"./unstable_useId-DsWtIzNz.js";import"./MockTranslationApi-D4c4nScZ.js";import"./index-DWA0-5lI.js";import"./classCallCheck-BNzALLS0.js";import"./inherits-CkEHJ8Ip.js";import"./toArray-CoXhHPie.js";import"./TranslationApi-AbvAvMM-.js";import"./WebStorage-DWjvmso0.js";import"./useAsync-cwiHyrW_.js";import"./useMountedState-BG_s6PIB.js";import"./isSymbol-B6IIivl5.js";import"./isObject-CDdS0vB1.js";import"./toString-C4GbLIMt.js";import"./ApiProvider-P-n6Z6bh.js";import"./index-BDlCPcVq.js";import"./ThemeProvider-UKwvVYMA.js";import"./CssBaseline-D5AXl3S9.js";import"./palettes-C1DVN5xY.js";const ur={title:"Plugins/Home/Components/SearchBar",decorators:[e=>g(r.jsx(r.Fragment,{children:r.jsx(x,{apis:[[u,{query:()=>Promise.resolve({results:[]})}]],children:r.jsx(e,{})})}),{mountedRoutes:{"/hello-search":l}})]},t=()=>r.jsx(s,{container:!0,justifyContent:"center",spacing:6,children:r.jsx(s,{container:!0,item:!0,xs:12,alignItems:"center",direction:"row",children:r.jsx(d,{placeholder:"Search"})})}),S=h(e=>({searchBar:{display:"flex",maxWidth:"60vw",backgroundColor:e.palette.background.paper,boxShadow:e.shadows[1],padding:"8px 0",borderRadius:"50px",margin:"auto"},searchBarOutline:{borderStyle:"none"}})),o=()=>{const e=S();return r.jsx(s,{container:!0,justifyContent:"center",spacing:6,children:r.jsx(s,{container:!0,item:!0,xs:12,alignItems:"center",direction:"row",children:r.jsx(d,{classes:{root:e.searchBar},InputProps:{classes:{notchedOutline:e.searchBarOutline}},placeholder:"Search"})})})};t.__docgenInfo={description:"",methods:[],displayName:"Default"};o.__docgenInfo={description:"",methods:[],displayName:"CustomStyles"};var i,a,n;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`() => {
  return <Grid container justifyContent="center" spacing={6}>
      <Grid container item xs={12} alignItems="center" direction="row">
        <HomePageSearchBar placeholder="Search" />
      </Grid>
    </Grid>;
}`,...(n=(a=t.parameters)==null?void 0:a.docs)==null?void 0:n.source}}};var m,p,c;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`() => {
  const classes = useStyles();
  return <Grid container justifyContent="center" spacing={6}>
      <Grid container item xs={12} alignItems="center" direction="row">
        <HomePageSearchBar classes={{
        root: classes.searchBar
      }} InputProps={{
        classes: {
          notchedOutline: classes.searchBarOutline
        }
      }} placeholder="Search" />
      </Grid>
    </Grid>;
}`,...(c=(p=o.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};const hr=["Default","CustomStyles"];export{o as CustomStyles,t as Default,hr as __namedExportsOrder,ur as default};
