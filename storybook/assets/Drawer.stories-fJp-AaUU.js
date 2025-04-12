import{j as e}from"./jsx-runtime-B1AhRb-V.js";import{r as D}from"./index-CV65Cz2T.js";import{d as x}from"./Close-CfG8T0j8.js";import{D as i}from"./Drawer-l5OeuT3U.js";import{m as w}from"./makeStyles-CkJZxfhX.js";import{B as n}from"./Button-MxgjmgAV.js";import{c as g}from"./createStyles-Bp4GwXob.js";import{T as y}from"./Typography-DFGLiOLt.js";import{I as j}from"./IconButton-C69Lr5le.js";import"./interopRequireDefault-Y9pwbXtE.js";import"./createSvgIcon-B6km7FGr.js";import"./capitalize-52YtlJa-.js";import"./defaultTheme-WHYcXxGo.js";import"./withStyles-C_eMWQcb.js";import"./hoist-non-react-statics.cjs-DscmM33_.js";import"./createChainedFunction-Da-WpsAN.js";import"./createSvgIcon-BoOF83CO.js";import"./debounce-DtXjJkxj.js";import"./isMuiElement-DG475NJP.js";import"./ownerWindow-D1FXuRdm.js";import"./useIsFocusVisible-B2Dvw-Ws.js";import"./index-V23z6GDy.js";import"./useControlled-ltvK4nzt.js";import"./unstable_useId-DsWtIzNz.js";import"./useTheme-CyYT1vdA.js";import"./Paper-Ra1TVF2W.js";import"./Modal-Cy1ULzPm.js";import"./classCallCheck-BNzALLS0.js";import"./Portal-nleYRD7c.js";import"./Backdrop-B3l4JWfv.js";import"./utils-vtCpIZas.js";import"./TransitionGroupContext-C1n1zRT4.js";import"./ButtonBase-ndPFvxP-.js";import"./createStyles-yD3y8ldD.js";const se={title:"Layout/Drawer",component:i},f=w(t=>g({paper:{width:"50%",justifyContent:"space-between",padding:t.spacing(2.5)}})),C=w(t=>g({header:{display:"flex",flexDirection:"row",justifyContent:"space-between"},icon:{fontSize:20},content:{height:"80%",backgroundColor:"#EEEEEE"},secondaryAction:{marginLeft:t.spacing(2.5)}})),h=({toggleDrawer:t})=>{const r=C();return e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:r.header,children:[e.jsx(y,{variant:"h5",children:"Side Panel Title"}),e.jsx(j,{title:"Close the drawer",onClick:()=>t(!1),color:"inherit",children:e.jsx(x,{className:r.icon})},"dismiss")]}),e.jsx("div",{className:r.content}),e.jsxs("div",{children:[e.jsx(n,{variant:"contained",color:"primary",onClick:()=>t(!1),children:"Primary Action"}),e.jsx(n,{className:r.secondaryAction,variant:"outlined",color:"primary",onClick:()=>t(!1),children:"Secondary Action"})]})]})},s=()=>{const[t,r]=D.useState(!1),o=f();return e.jsxs(e.Fragment,{children:[e.jsx(n,{variant:"contained",color:"primary",onClick:()=>r(!0),children:"Open Default Drawer"}),e.jsx(i,{classes:{paper:o.paper},anchor:"right",open:t,onClose:()=>r(!1),children:e.jsx(h,{toggleDrawer:r})})]})},a=()=>{const[t,r]=D.useState(!1),o=f();return e.jsxs(e.Fragment,{children:[e.jsx(n,{variant:"contained",color:"primary",onClick:()=>r(!0),children:"Open Persistent Drawer"}),e.jsx(i,{classes:{paper:o.paper},variant:"persistent",anchor:"right",open:t,onClose:()=>r(!1),children:e.jsx(h,{toggleDrawer:r})})]})};s.__docgenInfo={description:"",methods:[],displayName:"DefaultDrawer"};a.__docgenInfo={description:"",methods:[],displayName:"PersistentDrawer"};var c,p,l;s.parameters={...s.parameters,docs:{...(c=s.parameters)==null?void 0:c.docs,source:{originalSource:`() => {
  const [isOpen, toggleDrawer] = useState(false);
  const classes = useDrawerStyles();
  return <>
      <Button variant="contained" color="primary" onClick={() => toggleDrawer(true)}>
        Open Default Drawer
      </Button>
      <Drawer classes={{
      paper: classes.paper
    }} anchor="right" open={isOpen} onClose={() => toggleDrawer(false)}>
        <DrawerContent toggleDrawer={toggleDrawer} />
      </Drawer>
    </>;
}`,...(l=(p=s.parameters)==null?void 0:p.docs)==null?void 0:l.source}}};var m,d,u;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`() => {
  const [isOpen, toggleDrawer] = useState(false);
  const classes = useDrawerStyles();
  return <>
      <Button variant="contained" color="primary" onClick={() => toggleDrawer(true)}>
        Open Persistent Drawer
      </Button>
      <Drawer classes={{
      paper: classes.paper
    }} variant="persistent" anchor="right" open={isOpen} onClose={() => toggleDrawer(false)}>
        <DrawerContent toggleDrawer={toggleDrawer} />
      </Drawer>
    </>;
}`,...(u=(d=a.parameters)==null?void 0:d.docs)==null?void 0:u.source}}};const ae=["DefaultDrawer","PersistentDrawer"];export{s as DefaultDrawer,a as PersistentDrawer,ae as __namedExportsOrder,se as default};
