(this["webpackJsonpreact-hook"]=this["webpackJsonpreact-hook"]||[]).push([[0],{40:function(t,e,c){},41:function(t,e,c){},44:function(t,e,c){},64:function(t,e,c){},70:function(t,e,c){},71:function(t,e,c){"use strict";c.r(e);var n=c(1),i=c.n(n),a=c(30),r=c.n(a),s=(c(40),c(41),c(35)),j=c(8),o=c(0),d=function(){var t=Object(n.useState)(""),e=Object(j.a)(t,2),c=e[0],i=e[1],a=Object(n.useState)([{id:"todo1",title:"watching tv",type:"danh"},{id:"todo2",title:"Doing homework",type:"danh"},{id:"todo3",title:"Reading book",type:"dai"},{id:"todo4",title:"Have lunch",type:"dai"}]),r=Object(j.a)(a,2),d=r[0],l=r[1];return Object(o.jsxs)("div",{className:"todos__container",children:[Object(o.jsx)("input",{type:"text",value:c,onChange:function(t){return i(t.target.value)}}),Object(o.jsx)("button",{onClick:function(){return function(){if(c){var t={id:Math.floor(100*Math.random()+1),title:c,type:"dai"};l([].concat(Object(s.a)(d),[t])),i("")}}()},children:"Add"}),Object(o.jsx)("hr",{}),Object(o.jsx)("div",{className:"title",style:{color:"red",fontSize:"20px"}}),d.map((function(t){return Object(o.jsx)("ul",{children:Object(o.jsxs)("li",{children:[t.title," : ",t.type,Object(o.jsx)("span",{onClick:function(){!function(t){var e=d;e=e.filter((function(e){return e.id!==t})),l(e)}(t.id)},children:"  X"})]})},t.id)}))]})},l=c(13),b=c.n(l),h=(c(44),c(19)),O=c.n(h),u=c(31),x=c(32),f=c.n(x),v=function(t){var e=Object(n.useState)([]),c=Object(j.a)(e,2),i=c[0],a=c[1],r=Object(n.useState)(!0),s=Object(j.a)(r,2),o=s[0],d=s[1],l=Object(n.useState)(!1),h=Object(j.a)(l,2),x=h[0],v=h[1];return Object(n.useEffect)((function(){function e(){return(e=Object(u.a)(O.a.mark((function e(){var c,n;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,f.a.get(t);case 3:c=e.sent,(n=c&&c.data?c.data:[])&&n.length>0&&(n.map((function(t){return t.Date=b()(t.Date).format("DD/MM/YYYY"),t})),n=n.reverse()),a(n),d(!1),v(!1),e.next=15;break;case 11:e.prev=11,e.t0=e.catch(0),v(!0),d(!1);case 15:case"end":return e.stop()}}),e,null,[[0,11]])})))).apply(this,arguments)}setTimeout((function(){!function(){e.apply(this,arguments)}()}),3e3)}),[t]),{data:i,isLoading:o,isError:x}},p=function(){var t=b()().startOf("day").toISOString(!0),e=b()().startOf("day").subtract(31,"days").toISOString(!0),c=v("https://api.covid19api.com/country/vietnam?from=".concat(e,"&to=").concat(t)),n=c.data,i=c.isLoading,a=c.isError;return Object(o.jsxs)("div",{children:[Object(o.jsx)("h2",{children:"L\u1ea5y d\u1eef li\u1ec7u covid t\u1eeb API"}),Object(o.jsxs)("table",{children:[Object(o.jsx)("thead",{children:Object(o.jsxs)("tr",{children:[Object(o.jsx)("th",{children:"Date"}),Object(o.jsx)("th",{children:"Confirmed"}),Object(o.jsx)("th",{children:"Active"}),Object(o.jsx)("th",{children:"Deaths"}),Object(o.jsx)("th",{children:"Recovered"})]})}),Object(o.jsxs)("tbody",{children:[!1===i&&!1===a&&n&&n.length>0&&n.map((function(t){return Object(o.jsxs)("tr",{children:[Object(o.jsx)("td",{children:t.Date}),Object(o.jsx)("td",{children:t.Confirmed}),Object(o.jsx)("td",{children:t.Active}),Object(o.jsx)("td",{children:t.Deaths}),Object(o.jsx)("td",{children:t.Recovered})]},t.ID)})),!0===i&&Object(o.jsx)("tr",{children:Object(o.jsx)("td",{colSpan:5,children:Object(o.jsx)("span",{children:"Loading"})})}),!0===a&&Object(o.jsx)("tr",{children:Object(o.jsx)("td",{colSpan:5,children:Object(o.jsx)("span",{children:"Error API"})})})]})]})]})},m=function(){var t=Object(n.useState)(5),e=Object(j.a)(t,2),c=e[0],i=e[1];return Object(n.useEffect)((function(){if(0!==c){var t=setInterval((function(){i(c-1)}),1e3);return function(){clearInterval(t)}}alert("Hello")}),[c]),Object(o.jsx)(o.Fragment,{children:Object(o.jsxs)("h1",{children:[" Countdown: ",c]})})},y=(c(64),c(9)),g=function(){return Object(o.jsxs)("ul",{className:"navList",children:[Object(o.jsx)(y.b,{to:"/",exact:!0,children:Object(o.jsx)("li",{activeclassname:"active",children:"Home"})}),Object(o.jsx)(y.b,{to:"/fetchApi",children:Object(o.jsx)("li",{activeclassname:"active",children:"Covid VN"})}),Object(o.jsx)(y.b,{to:"/todo",children:Object(o.jsx)("li",{activeclassname:"active",children:"TodoList"})}),Object(o.jsx)(y.b,{to:"/countdown",children:Object(o.jsx)("li",{activeclassname:"active",children:"Countdown"})}),Object(o.jsx)(y.b,{to:"/more",children:Object(o.jsx)("li",{activeclassname:"active",children:"More"})})]})},S=(c(70),function(){return Object(o.jsxs)("div",{className:"header",children:[Object(o.jsx)("div",{className:"logo"}),Object(o.jsx)(g,{}),Object(o.jsx)("div",{className:"icons"})]})}),D=c(2);var k=function(){return Object(o.jsx)(y.a,{children:Object(o.jsxs)("div",{className:"App",children:[Object(o.jsx)(S,{}),Object(o.jsxs)("div",{className:"container",style:{marginTop:"30px"},children:[Object(o.jsx)("h1",{children:"H\u1ecdc ReactJS v\u1edbi Danh"}),Object(o.jsxs)(D.c,{children:[Object(o.jsx)(D.a,{path:"/",exact:!0}),Object(o.jsx)(D.a,{path:"/todo",children:Object(o.jsx)(d,{})}),Object(o.jsx)(D.a,{path:"/fetchApi",children:Object(o.jsx)(p,{})}),Object(o.jsx)(D.a,{path:"/countdown",children:Object(o.jsx)(m,{})})]})]})]})})};r.a.render(Object(o.jsx)(i.a.StrictMode,{children:Object(o.jsx)(k,{})}),document.getElementById("root"))}},[[71,1,2]]]);
//# sourceMappingURL=main.ef9233d6.chunk.js.map