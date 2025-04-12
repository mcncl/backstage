import{j as s}from"./jsx-runtime-B1AhRb-V.js";import{u as f}from"./useAsync-cwiHyrW_.js";import{l as R}from"./lodash-D2SO6J9k.js";import{s as x}from"./api-DfJnPGQi.js";import{r as l}from"./index-CV65Cz2T.js";import{H as y}from"./DefaultResultListItem-CdZl1xbJ.js";import{L as g}from"./ListItem-hTEsGfU0.js";import{L as E}from"./List-DulzYPgQ.js";import{a as k}from"./Plugin-mpVNw5Cy.js";import{u as I}from"./useElementFilter-BQWE7Esx.js";import{g as L}from"./componentData--aKu5_T4.js";import{u as C,A as j}from"./useAnalytics-y3ZaQqe-.js";import{u as q}from"./SearchContext-bKSxcjoU.js";import{P as w}from"./Progress-BoQIH1JK.js";import{R as A}from"./ResponseErrorPanel-BpwHwYCO.js";import{u as _}from"./ApiRef-DQ_p_ST9.js";import{E as T}from"./EmptyState-CXw374mQ.js";const m="search.results.list.items.extensions.v1",N=(n,t)=>{for(const e of n){if(!l.isValidElement(e))continue;const r=L(e,m);if(r!=null&&r(t))return l.cloneElement(e,{rank:t.rank,highlight:t.highlight,result:t.document,...e.props})}return null},p=n=>{const{rank:t,result:e,noTrack:r,children:a,alignItems:o="flex-start",...c}=n,i=C(),u=l.useCallback(()=>{r||e&&i.captureEvent("discover",e.title,{attributes:{to:e.location},value:t})},[t,e,r,i]);return s.jsx(g,{divider:!0,alignItems:o,onClickCapture:u,...c,children:a})},ee=n=>{const{name:t,component:e,predicate:r=()=>!0}=n;return k({name:t,component:{lazy:()=>e().then(a=>o=>s.jsx(p,{rank:o.rank,result:o.result,noTrack:o.noTrack,children:l.createElement(a,o)}))},data:{[m]:r}})},P=n=>{const t=I(n,e=>e.selectByComponentData({key:m}).getElements(),[n]);return l.useCallback((e,r)=>{const a=N(t,e);return s.jsx(l.Fragment,{children:a??s.jsx(p,{rank:e.rank,result:e.document,children:s.jsx(y,{rank:e.rank,highlight:e.highlight,result:e.document})})},r)},[t])},h=n=>{const{results:t,children:e,...r}=n,a=P(e);return s.jsx(E,{...r,children:t.map(a)})};p.__docgenInfo={description:`@internal
Extends children with extension capabilities.
@param props - see {@link SearchResultListItemExtensionProps}.`,methods:[],displayName:"SearchResultListItemExtension"};h.__docgenInfo={description:`@public
Render results using search extensions.
@param props - see {@link SearchResultListItemExtensionsProps}`,methods:[],displayName:"SearchResultListItemExtensions",props:{results:{required:!0,tsType:{name:"Array",elements:[{name:"Result",elements:[{name:"SearchDocument"}],raw:"Result<SearchDocument>"}],raw:"SearchResult[]"},description:"Search result list."}}};const b=n=>{const{children:t}=n,e=q(),{result:r,...a}=e;return t(r,a)},D=n=>{const{query:t,children:e}=n,r=_(x),a=f(()=>{const{term:o="",types:c=[],filters:i={},...u}=t;return r.query({...u,term:o,types:c,filters:i})},[t]);return e(a,t)},d=n=>{const{query:t,children:e}=n;return t?s.jsx(D,{query:t,children:e}):s.jsx(b,{children:e})},S=n=>{const{query:t,children:e,noResultsComponent:r=s.jsx(T,{missing:"data",title:"Sorry, no results were found"}),...a}=n;return s.jsx(d,{query:t,children:({loading:o,error:c,value:i})=>o?s.jsx(w,{}):c?s.jsx(A,{title:"Error encountered while fetching search results",error:c}):i!=null&&i.results.length?R.isFunction(e)?e(i):s.jsx(h,{...a,results:i.results,children:e}):r})},X=n=>s.jsx(j,{attributes:{pluginId:"search",extension:"SearchResult"},children:s.jsx(S,{...n})});d.__docgenInfo={description:`Call a child render function passing a search state as an argument.
@remarks By default, results are taken from context, but when a "query" prop is set, results are requested from the search api.
@param props - see {@link SearchResultStateProps}.
@example
Consuming results from context:
\`\`\`
<SearchResultState>
  {({ loading, error, value }) => (
    <List>
      {value?.map(({ document }) => (
        <DefaultSearchResultListItem
          key={document.location}
          result={document}
        />
      ))}
    </List>
  )}
</SearchResultState>
\`\`\`
@example
Requesting results using the search api:
\`\`\`
<SearchResultState query={{ term: 'documentation' }}>
  {({ loading, error, value }) => (
    <List>
      {value?.map(({ document }) => (
        <DefaultSearchResultListItem
          key={document.location}
          result={document}
        />
      ))}
    </List>
  )}
</SearchResultState>
\`\`\`
@public`,methods:[],displayName:"SearchResultState",props:{children:{required:!0,tsType:{name:"signature",type:"function",raw:`(
  state: AsyncState<SearchResultSet>,
  query: Partial<SearchQuery>,
) => JSX.Element | null`,signature:{arguments:[{type:{name:"AsyncState",elements:[{name:"ResultSet",elements:[{name:"SearchDocument"}],raw:"ResultSet<SearchDocument>"}],raw:"AsyncState<SearchResultSet>"},name:"state"},{type:{name:"Partial",elements:[{name:"SearchQuery"}],raw:"Partial<SearchQuery>"},name:"query"}],return:{name:"union",raw:"JSX.Element | null",elements:[{name:"JSX.Element"},{name:"null"}]}}},description:"A child function that receives an asynchronous result set and returns a react element."}}};S.__docgenInfo={description:`Renders results from a parent search context or api.
@remarks default components for loading, error and empty variants are returned.
@param props - see {@link SearchResultProps}.
@public`,methods:[],displayName:"SearchResultComponent",props:{children:{required:!1,tsType:{name:"union",raw:"ReactNode | ((resultSet: SearchResultSet) => JSX.Element)",elements:[{name:"ReactNode"},{name:"unknown"}]},description:""},noResultsComponent:{required:!1,tsType:{name:"JSX.Element"},description:""}}};X.__docgenInfo={description:`A component returning the search result from a parent search context or api.
@param props - see {@link SearchResultProps}.
@public`,methods:[],displayName:"SearchResult",props:{children:{required:!1,tsType:{name:"union",raw:"ReactNode | ((resultSet: SearchResultSet) => JSX.Element)",elements:[{name:"ReactNode"},{name:"unknown"}]},description:""},noResultsComponent:{required:!1,tsType:{name:"JSX.Element"},description:""}}};export{d as S,X as a,ee as c,P as u};
