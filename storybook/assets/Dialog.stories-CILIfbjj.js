import{j as o}from"./jsx-runtime-B1AhRb-V.js";import{d as c}from"./Close-CfG8T0j8.js";import{D as l,a as m,b as d,c as y}from"./DialogTitle-B_5D8UVD.js";import{m as h}from"./makeStyles-CkJZxfhX.js";import{I as g}from"./IconButton-C69Lr5le.js";import{T as t}from"./Typography-DFGLiOLt.js";import{B as i}from"./Button-MxgjmgAV.js";import{c as u}from"./createStyles-Bp4GwXob.js";import"./index-CV65Cz2T.js";import"./interopRequireDefault-Y9pwbXtE.js";import"./createSvgIcon-B6km7FGr.js";import"./capitalize-52YtlJa-.js";import"./defaultTheme-WHYcXxGo.js";import"./withStyles-C_eMWQcb.js";import"./hoist-non-react-statics.cjs-DscmM33_.js";import"./createChainedFunction-Da-WpsAN.js";import"./createSvgIcon-BoOF83CO.js";import"./debounce-DtXjJkxj.js";import"./isMuiElement-DG475NJP.js";import"./ownerWindow-D1FXuRdm.js";import"./useIsFocusVisible-B2Dvw-Ws.js";import"./index-V23z6GDy.js";import"./useControlled-ltvK4nzt.js";import"./unstable_useId-DsWtIzNz.js";import"./Modal-Cy1ULzPm.js";import"./classCallCheck-BNzALLS0.js";import"./Portal-nleYRD7c.js";import"./Backdrop-B3l4JWfv.js";import"./useTheme-CyYT1vdA.js";import"./utils-vtCpIZas.js";import"./TransitionGroupContext-C1n1zRT4.js";import"./Paper-Ra1TVF2W.js";import"./ButtonBase-ndPFvxP-.js";import"./createStyles-yD3y8ldD.js";const Z={title:"Layout/Dialog",component:l},x=h(e=>u({closeButton:{position:"absolute",right:e.spacing(1),top:e.spacing(1),color:e.palette.grey[500]}})),r={args:{open:!0},render:({open:e})=>{const p=x();return o.jsxs(l,{"aria-labelledby":"dialog-title","aria-describedby":"dialog-description",open:e,children:[o.jsxs(m,{id:"dialog-title",children:["Dialog Box Title",o.jsx(g,{"aria-label":"close",className:p.closeButton,children:o.jsx(c,{})})]}),o.jsxs(d,{children:[o.jsx(t,{children:"This component is used whenever confirmation of some sort is needed, such as:"}),o.jsxs("ul",{children:[o.jsx("li",{children:o.jsx(t,{children:"Consent to sensitive matters like GDPR, access, etc;"})}),o.jsx("li",{children:o.jsx(t,{children:"Save, submit, cancel after a form is completed;"})}),o.jsx("li",{children:o.jsx(t,{children:"Alert message;"})}),o.jsx("li",{children:o.jsx(t,{children:"Buttons are optional."})})]}),o.jsx(t,{children:"The color for the secondary button is the same as the primary."})]}),o.jsxs(y,{children:[o.jsx(i,{color:"primary",children:"Secondary action"}),o.jsx(i,{color:"primary",children:"Primary action"})]})]})}};var n,s,a;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    open: true
  },
  render: ({
    open
  }: {
    open: boolean;
  }) => {
    const classes = styles();
    return <Dialog aria-labelledby="dialog-title" aria-describedby="dialog-description" open={open}>
        <DialogTitle id="dialog-title">
          Dialog Box Title
          <IconButton aria-label="close" className={classes.closeButton}>
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent>
          <Typography>
            This component is used whenever confirmation of some sort is needed,
            such as:
          </Typography>
          <ul>
            <li>
              <Typography>
                Consent to sensitive matters like GDPR, access, etc;
              </Typography>
            </li>
            <li>
              <Typography>
                Save, submit, cancel after a form is completed;
              </Typography>
            </li>
            <li>
              <Typography>Alert message;</Typography>
            </li>
            <li>
              <Typography>Buttons are optional.</Typography>
            </li>
          </ul>
          <Typography>
            The color for the secondary button is the same as the primary.
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button color="primary">Secondary action</Button>
          <Button color="primary">Primary action</Button>
        </DialogActions>
      </Dialog>;
  }
}`,...(a=(s=r.parameters)==null?void 0:s.docs)==null?void 0:a.source}}};const $=["Default"];export{r as Default,$ as __namedExportsOrder,Z as default};
