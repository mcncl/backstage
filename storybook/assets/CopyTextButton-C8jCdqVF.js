import{j as t}from"./jsx-runtime-B1AhRb-V.js";import{u as x,d as b}from"./useCopyToClipboard-Ct4IqI3l.js";import{r}from"./index-CV65Cz2T.js";import{u as h,c as T}from"./translation-CdQDl-HS.js";import{T as y}from"./Tooltip-IejhCGS-.js";import{I as C}from"./IconButton-C69Lr5le.js";import{u as k}from"./ApiRef-DQ_p_ST9.js";import{e as w}from"./TranslationApi-AbvAvMM-.js";function g(a){const{t:i}=h(T),{text:s,tooltipDelay:p=1e3,tooltipText:l=i("copyTextButton.tooltipText"),"aria-label":c="Copy text"}=a,o=k(w),[u,n]=r.useState(!1),[{error:e},m]=x();r.useEffect(()=>{e&&o.post(e)},[e,o]);const d=f=>{f.stopPropagation(),n(!0),m(s)};return t.jsx(t.Fragment,{children:t.jsx(y,{id:"copy-test-tooltip",title:l,placement:"top",leaveDelay:p,onClose:()=>n(!1),open:u,children:t.jsx(C,{onClick:d,"aria-label":c,children:t.jsx(b,{})})})})}g.__docgenInfo={description:`Copy text button with visual feedback

@public
@remarks

Visual feedback takes form of:
 - a hover color
 - click ripple
 - Tooltip shown when user has clicked

@example

\`\`\`
<CopyTextButton
  text="My text that I want to be copied to the clipboard"
  arial-label="Accessible label for this button" />
\`\`\``,methods:[],displayName:"CopyTextButton",props:{text:{required:!0,tsType:{name:"string"},description:"The text to be copied"},tooltipDelay:{required:!1,tsType:{name:"number"},description:`Number of milliseconds that the tooltip is shown

@remarks

Default: 1000`},tooltipText:{required:!1,tsType:{name:"string"},description:`Text to show in the tooltip when user has clicked the button

@remarks

Default: "Text copied to clipboard"`},"aria-label":{required:!1,tsType:{name:"string"},description:`Text to use as aria-label prop on the button

@remarks

Default: "Copy text"`}}};export{g as C};
