(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[4],{1e3:function(t,e){},1012:function(t,e){},1013:function(t,e){},1027:function(t,e){},1029:function(t,e){},1107:function(t,e){},1155:function(t,e){},1157:function(t,e){},1163:function(t,e){},1175:function(t,e){},1178:function(t,e){},1185:function(t,e){},1201:function(t,e){},1270:function(t,e,s){"use strict";s.r(e);var n=s(0),a=s.n(n),c=s(574),r=s.n(c),i=(s(608),s(609),s(24)),o=s(1),l=s(8),u=s(31),b=(s(367),s(57)),d=s(120),j=s(72),p=s(14),f=function(){var t=Object(n.useState)(0),e=Object(u.a)(t,2),s=e[0],a=e[1],c=Object(n.useState)(0),r=Object(u.a)(c,2),i=r[0],f=r[1],h=Object(n.useState)(0),O=Object(u.a)(h,2),x=O[0],m=O[1],g=Object(j.b)(),E=g.Moralis,v=g.isInitialized,N=Object(n.useState)(),R=Object(u.a)(N,2),V=R[0],y=R[1],F=Object(n.useState)(),w=Object(u.a)(F,2),W=w[0],U=w[1],A=Object(j.e)();function S(){return(S=Object(l.a)(Object(o.a)().mark((function t(e,s){var n;return Object(o.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return console.log(s.split(",").map((function(t){return t.trim()}))),n={contractAddress:"0x8c5E69EB4D1a8237331DDFADe10C3FafbcF39eA6",functionName:"createProposal",abi:[{inputs:[{internalType:"string",name:"desc",type:"string"},{internalType:"address[]",name:"canVote",type:"address[]"}],name:"createProposal",outputs:[],stateMutability:"nonpayable",type:"function"}],params:{desc:e,canVote:s.split(",").map((function(t){return t.trim()}))}},t.next=4,A.fetch({params:n,onSuccess:function(){console.log("Proposal Succesful"),U(!1)},onError:function(t){console.log(t),alert(t.data?t.data.message:t.message),U(!1)}});case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function C(t){return J.apply(this,arguments)}function J(){return(J=Object(l.a)(Object(o.a)().mark((function t(e){var s,n,a;return Object(o.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return s=E.Object.extend("proposalsConcluded"),(n=new E.Query(s)).equalTo("uid",e),t.next=5,n.first();case 5:if(void 0===(a=t.sent)){t.next=14;break}if(!a.attributes.passed){t.next=11;break}return t.abrupt("return",{color:"green",text:"Passed"});case 11:return t.abrupt("return",{color:"red",text:"Rejected"});case 12:t.next=15;break;case 14:return t.abrupt("return",{color:"blue",text:"Ongoing"});case 15:case"end":return t.stop()}}),t)})))).apply(this,arguments)}return Object(n.useEffect)((function(){if(v){var t=function(){var t=Object(l.a)(Object(o.a)().mark((function t(){var e,s,n,a;return Object(o.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=E.Object.extend("proposals"),(s=new E.Query(e)).descending("uid_decimal"),t.next=5,s.find();case 5:return n=t.sent,t.next=8,Promise.all(n.map(function(){var t=Object(l.a)(Object(o.a)().mark((function t(e){return Object(o.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.t0=e.attributes.uid,t.t1=e.attributes.description,t.t2=p.jsx,t.t3=d.b,t.t4=e.attributes.description,t.next=7,C(e.attributes.uid);case 7:return t.t5=t.sent.color,t.next=10,C(e.attributes.uid);case 10:return t.t6=t.sent.text,t.t7=e.attributes.uid,t.t8=e.attributes.proposer,t.t9={description:t.t4,color:t.t5,text:t.t6,id:t.t7,proposer:t.t8},t.t10=p.jsx,t.t11=b.h,t.next=18,C(e.attributes.uid);case 18:return t.t12=t.sent.color,t.next=21,C(e.attributes.uid);case 21:return t.t13=t.sent.text,t.t14={color:t.t12,text:t.t13},t.t15=(0,t.t10)(t.t11,t.t14),t.t16={to:"/proposal",state:t.t9,children:t.t15},t.t17=(0,t.t2)(t.t3,t.t16),t.abrupt("return",[t.t0,t.t1,t.t17]);case 27:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()));case 8:a=t.sent,y(a),f(n.length);case 11:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),e=function(){var t=Object(l.a)(Object(o.a)().mark((function t(){var e,s,n,c;return Object(o.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=E.Object.extend("proposalsConcluded"),s=new E.Query(e),t.next=4,s.find();case 4:n=t.sent,c=0,n.forEach((function(t){t.attributes.passed&&c++})),m(n.length),a(c/n.length*100);case 9:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();t(),e()}}),[v]),Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)("div",{className:"content",children:Object(p.jsxs)(b.f,{defaultActiveKey:1,tabStyle:"bulbUnion",children:[Object(p.jsx)(b.e,{tabKey:1,tabName:"DAO",children:V&&Object(p.jsxs)("div",{className:"tabContent",children:["Governance Overview",Object(p.jsxs)("div",{className:"widgets",children:[Object(p.jsx)(b.j,{info:i,title:"Proposals Created",style:{width:"200%"},children:Object(p.jsxs)("div",{className:"extraWidgetInfo",children:[Object(p.jsx)("div",{className:"extraTitle",children:"Pass Rate"}),Object(p.jsx)("div",{className:"progress",children:Object(p.jsx)("div",{className:"progressPercentage",style:{width:"".concat(s,"%")}})})]})}),Object(p.jsx)(b.j,{info:i-x,title:"Ongoing Proposals"})]}),"Recent Proposals",Object(p.jsx)("div",{style:{marginTop:"30px"},children:Object(p.jsx)(b.g,{columnsConfig:"10% 70% 20%",data:V,header:[Object(p.jsx)("span",{children:"ID"}),Object(p.jsx)("span",{children:"Description"}),Object(p.jsx)("span",{children:"Status"})],pageSize:5})}),Object(p.jsx)(b.c,{buttonConfig:{isLoading:W,loadingText:"Submitting Proposal",text:"Submit",theme:"secondary"},data:[{inputWidth:"100%",name:"New Proposal",type:"textarea",validation:{required:!0},value:""},{inputWidth:"100%",name:"Addresses Eligigble to Vote",type:"textarea",validation:{required:!0},value:""}],onSubmit:function(t){U(!0),function(t,e){S.apply(this,arguments)}(t.data[0].inputResult,t.data[1].inputResult)},title:"Create a New Proposal"})]})}),Object(p.jsx)(b.e,{tabKey:2,tabName:"Forum"}),Object(p.jsx)(b.e,{tabKey:3,tabName:"Docs"})]})}),Object(p.jsx)("div",{className:"voting"})]})},h=function(){var t=Object(i.e)().state,e=Object(j.b)(),s=e.Moralis,a=e.isInitialized,c=Object(n.useState)(),r=Object(u.a)(c,2),f=r[0],h=r[1],O=Object(n.useState)(0),x=Object(u.a)(O,2),m=x[0],g=x[1],E=Object(n.useState)(0),v=Object(u.a)(E,2),N=v[0],R=v[1],V=Object(n.useState)([]),y=Object(u.a)(V,2),F=y[0],w=y[1],W=Object(n.useState)(!1),U=Object(u.a)(W,2),A=U[0],S=U[1],C=Object(j.e)();function J(t){return B.apply(this,arguments)}function B(){return(B=Object(l.a)(Object(o.a)().mark((function e(s){var n;return Object(o.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={contractAddress:"0x8c5E69EB4D1a8237331DDFADe10C3FafbcF39eA6",functionName:"castVote",abi:[{inputs:[{internalType:"uint256",name:"proposalId",type:"uint256"},{internalType:"bool",name:"_vote",type:"bool"}],name:"castVote",outputs:[],stateMutability:"nonpayable",type:"function"}],params:{proposalId:t.id,_vote:s}},e.next=3,C.fetch({params:n,onSuccess:function(){console.log("Vote Cast Succesfully!"),S(!1)},onError:function(t){alert(t.data?t.data.message:t.message),S(!1)}});case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(n.useEffect)((function(){if(a){var e=function(){var e=Object(l.a)(Object(o.a)().mark((function e(){var n,a,c,r;return Object(o.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=s.Object.extend("votes"),(a=new s.Query(n)).equalTo("proposal",t.id),a.descending("createdAt"),e.next=6,a.find();case 6:(c=e.sent).length>0&&(h(c[0].attributes),R((Number(c[0].attributes.votesDown)/(Number(c[0].attributes.votesDown)+Number(c[0].attributes.votesUp))*100).toFixed(0)),g((Number(c[0].attributes.votesUp)/(Number(c[0].attributes.votesDown)+Number(c[0].attributes.votesUp))*100).toFixed(0))),r=c.map((function(t){return[t.attributes.voter,Object(p.jsx)(b.d,{fill:t.attributes.votedFor?"#2cc40a":"#d93d3d",size:24,svg:t.attributes.votedFor?"checkmark":"arrowCircleDown"})]})),w(r);case 10:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}}),[a]),Object(p.jsxs)(p.Fragment,{children:[Object(p.jsxs)("div",{className:"contentProposal",children:[Object(p.jsxs)("div",{className:"proposal",children:[Object(p.jsx)(d.b,{to:"/",children:Object(p.jsxs)("div",{className:"backHome",children:[Object(p.jsx)(b.d,{fill:"#ffffff",size:20,svg:"chevronLeft"}),"Overview"]})}),Object(p.jsx)("div",{children:t.description}),Object(p.jsxs)("div",{className:"proposalOverview",children:[Object(p.jsx)(b.h,{color:t.color,text:t.text}),Object(p.jsxs)("div",{className:"proposer",children:[Object(p.jsx)("span",{children:"Proposed By "}),Object(p.jsx)(b.i,{content:t.proposer,children:Object(p.jsx)(b.a,{seed:t.proposer})})]})]})]}),f&&Object(p.jsxs)("div",{className:"widgets",children:[Object(p.jsx)(b.j,{info:f.votesUp,title:"Votes For",children:Object(p.jsxs)("div",{className:"extraWidgetInfo",children:[Object(p.jsxs)("div",{className:"extraTitle",children:[m,"%"]}),Object(p.jsx)("div",{className:"progress",children:Object(p.jsx)("div",{className:"progressPercentage",style:{width:"".concat(m,"%")}})})]})}),Object(p.jsx)(b.j,{info:f.votesDown,title:"Votes Against",children:Object(p.jsxs)("div",{className:"extraWidgetInfo",children:[Object(p.jsxs)("div",{className:"extraTitle",children:[N,"%"]}),Object(p.jsx)("div",{className:"progress",children:Object(p.jsx)("div",{className:"progressPercentage",style:{width:"".concat(N,"%")}})})]})})]}),Object(p.jsxs)("div",{className:"votesDiv",children:[Object(p.jsx)(b.g,{style:{width:"60%"},columnsConfig:"90% 10%",data:F,header:[Object(p.jsx)("span",{children:"Address"}),Object(p.jsx)("span",{children:"Vote"})],pageSize:5}),Object(p.jsx)(b.c,{isDisabled:"Ongoing"!==t.text,style:{width:"35%",height:"250px",border:"1px solid rgba(6, 158, 252, 0.2)"},buttonConfig:{isLoading:A,loadingText:"Casting Vote",text:"Vote",theme:"secondary"},data:[{inputWidth:"100%",name:"Cast Vote",options:["For","Against"],type:"radios",validation:{required:!0}}],onSubmit:function(t){"For"===t.data[0].inputResult[0]?J(!0):J(!1),S(!0)},title:"Cast Vote"})]})]}),Object(p.jsx)("div",{className:"voting"})]})},O=function(){return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsxs)("div",{className:"header",children:[Object(p.jsx)("img",{width:"160px",src:"data:image/png;base64,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",alt:"logo"}),Object(p.jsx)(b.b,{})]}),Object(p.jsxs)(i.c,{children:[Object(p.jsx)(i.a,{path:"/",element:Object(p.jsx)(f,{})}),Object(p.jsx)(i.a,{path:"/proposal",element:Object(p.jsx)(h,{})})]})]})},x=function(t){t&&t instanceof Function&&s.e(18).then(s.bind(null,1586)).then((function(e){var s=e.getCLS,n=e.getFID,a=e.getFCP,c=e.getLCP,r=e.getTTFB;s(t),n(t),a(t),c(t),r(t)}))};r.a.render(Object(p.jsx)(a.a.StrictMode,{children:Object(p.jsx)(j.a,{appId:"J9gO8XYH8i3CzxSQGXKOxcFwkhWkhKhlWTjzjUNs",serverUrl:"https://b2vhairnaebl.usemoralis.com:2053/server",children:Object(p.jsx)(d.a,{children:Object(p.jsx)(O,{})})})}),document.getElementById("root")),x()},367:function(t,e,s){},608:function(t,e,s){},609:function(t,e,s){},906:function(t,e){},914:function(t,e){},936:function(t,e){},976:function(t,e){},978:function(t,e){},998:function(t,e){}},[[1270,5,6]]]);
//# sourceMappingURL=main.2de6a30d.chunk.js.map