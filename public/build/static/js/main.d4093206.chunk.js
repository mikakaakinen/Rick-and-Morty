(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{59:function(e,t,a){},60:function(e,t,a){},72:function(e,t,a){"use strict";a.r(t);var n=a(1),c=a.n(n),r=a(50),i=a.n(r),o=(a(58),a(59),a(86)),l=a(88),s=a(85),d=a(25),b=a(8),u=(a(60),a(33)),j=a(35),O=a(87),p=a(89),m=a(2),f=a(34),h=a(23),g=a(24),x=a(22),v=a(36),y=a.n(v);function w(e){e(!0),setTimeout((function(){e(!1)}),2e3)}var C=a(37),k=a(31),I=a.n(k);function B(e){var t=e.id,a=e.name,n=e.status,c=e.species,r=e.type,i=e.gender,o=e.origin,l=e.location,s=e.image,b=e.episode,u=e.created;console.log("Episode is",b);var j=b.slice(0,5);return console.log("FirstEpisodes are",j),Object(m.a)(g.a,{fluid:!0},Object(m.a)(x.a,null,Object(m.a)(h.a,{className:"text-center"},Object(m.a)("h3",{css:{color:"#000",marginBottom:"2.5rem",marginTop:"2.5rem",textDecoration:"underline"}},a)),Object(m.a)(C.a,{striped:!0,hover:!0,responsive:!0,css:{border:"2px solid black",color:"#000",textAlign:"center",fontSize:"1.3rem",fontWeight:"500",width:"75%",margin:"0 auto"}},Object(m.a)("tbody",null,Object(m.a)("tr",null,Object(m.a)("td",null,"Id:"),Object(m.a)("td",null,t)),Object(m.a)("tr",null,Object(m.a)("td",null,"Status:"),Object(m.a)("td",null,n)),Object(m.a)("tr",null,Object(m.a)("td",null,"Species:"),Object(m.a)("td",null,c)),Object(m.a)("tr",null,Object(m.a)("td",null,"Type:"),Object(m.a)("td",null,r)),Object(m.a)("tr",null,Object(m.a)("td",null,"Gender:"),Object(m.a)("td",null,i)),Object(m.a)("tr",null,Object(m.a)("td",null,"Origin:"),Object(m.a)("td",null,o.name)),Object(m.a)("tr",null,Object(m.a)("td",null,"Location:"),Object(m.a)("td",null,Object(m.a)("p",null,"id: ",l.id),Object(m.a)("p",null,"name: ",l.name),Object(m.a)("p",null,"type: ",l.type),Object(m.a)("p",null,"dimension: ",l.dimension),Object(m.a)("p",null,"created:",Object(m.a)(I.a,{format:"YYYY-MM-DD HH:mm",date:l.created,css:{marginLeft:"0.5rem"}})))),Object(m.a)("tr",null,Object(m.a)("td",null,"First 5 Episodes:"),Object(m.a)("td",null,j.map((function(e,t){return Object(m.a)(d.b,{to:"/episode/"+e.id},Object(m.a)("p",{key:t},e.name))})))),Object(m.a)("tr",null,Object(m.a)("td",null,"Created:"),Object(m.a)("td",null,Object(m.a)(I.a,{format:"YYYY-MM-DD HH:mm",date:u,css:{marginLeft:"0.5rem"}}))),Object(m.a)("tr",null,Object(m.a)("td",null,"Image:"),Object(m.a)("td",null,Object(m.a)("img",{src:s,alt:"Rick and Morty",css:{border:"1px solid #000",width:"60%",height:"auto"}})))))))}var D,N=a(12),Y=function(e){var t=e.showNotification;return Object(N.jsx)("div",{className:"notification-container ".concat(t?"show":""),children:Object(N.jsx)("h5",{children:"No countries found"})})},M=Object(O.a)(D||(D=Object(j.a)(["\n    query Characters($count: Int! = 1) {\n        characters(page: $count) {\n            info {\n                count\n                pages\n                next\n                prev\n            }\n            results {\n                id\n                name\n                status\n                species\n                type\n                gender\n                origin {\n                    name\n                }\n                location {\n                    id\n                    name\n                    type\n                    dimension\n                    created\n                }\n                image\n                episode {\n                    id\n                    name\n                }\n                created\n            }\n        }\n    }\n"])));var S,T=function(){var e=Object(n.useState)(1),t=Object(u.a)(e,2),a=t[0],r=t[1],i=c.a.useState(!1),o=Object(u.a)(i,2),l=o[0],s=o[1],d=Object(p.a)(M,{variables:{count:a}}),b=d.loading,j=d.error,O=d.data,v={};if(b)return Object(m.a)(y.a,{type:"spin",color:"blue",height:"100px",width:"100px",css:{position:"fixed",top:"40%",left:"10%"}});if(j)return Object(m.a)(Y,{showNotification:l});O.characters?v=O.characters:w(s);var C=v,k=C.info,I=C.results;return Object(m.a)(g.a,{fluid:!0},Object(m.a)(x.a,null,Object(m.a)(x.a,null,Object(m.a)(h.a,{className:"text-center"},Object(m.a)("h5",{css:{color:"#000",marginBottom:"2.0rem",marginTop:"1.0rem"}},"Current page: ",a,"/",k.pages))),Object(m.a)(h.a,{className:"text-center"},Object(m.a)(f.a,{css:{marginRight:"1.5rem"},onClick:function(){a>1&&r((function(e){return e-1}))},variant:"primary"},"Prev"),Object(m.a)(f.a,{onClick:function(){a<34&&r((function(e){return e+1}))},variant:"primary"},"Next"),I.map((function(e,t){var a=e.id,n=e.name,c=e.status,r=e.species,i=e.type,o=e.gender,l=e.origin,s=e.location,d=e.image,b=e.episode,u=e.created;return Object(m.a)(B,{id:a,name:n,status:c,species:r,type:i,gender:o,origin:l,location:s,image:d,episode:b,created:u})})))))},F=Object(O.a)(S||(S=Object(j.a)(["\n    query Episode($search: ID!) {\n        episodesByIds(ids: [$search]) {\n            id\n            name\n            air_date\n            characters {\n                name\n                image\n            }\n            created\n        }\n    }\n"])));function A(e){console.log("This.props is=");var t=e.match.params.id;t=parseInt(t);var a=c.a.useState(!1),n=Object(u.a)(a,2),r=n[0],i=n[1],o=Object(p.a)(F,{variables:{search:t}}),l=o.loading,s=o.error,b=o.data,j=[];if(l)return Object(m.a)(y.a,{type:"spin",color:"blue",height:"100px",width:"100px",css:{position:"fixed",top:"40%",left:"10%"}});if(s)return Object(m.a)(Y,{showNotification:r});b.episodesByIds?j=b.episodesByIds[0]:w(i);var O=j,v=O.name,k=O.air_date,B=O.characters,D=O.created;return Object(m.a)(g.a,{fluid:!0},Object(m.a)(x.a,null,Object(m.a)(h.a,{className:"text-center"},Object(m.a)("h3",{css:{color:"#000",marginBottom:"3.0rem",marginTop:"1.0rem",textDecoration:"underline"}},v),Object(m.a)(C.a,{striped:!0,hover:!0,responsive:!0,css:{border:"2px solid black",color:"#000",textAlign:"center",fontSize:"1.3rem",fontWeight:"500",width:"75%",margin:"0 auto 0.5rem"}},Object(m.a)("tbody",null,Object(m.a)("tr",null,Object(m.a)("td",null,"Id:"),Object(m.a)("td",null,t)),Object(m.a)("tr",null,Object(m.a)("td",null,"Air Date:"),Object(m.a)("td",null,k)),Object(m.a)("tr",null,Object(m.a)("td",{colspan:"2"},Object(m.a)("h4",{css:{color:"#000",margin:"0.5rem auto 1.5rem",textDecoration:"underline"}},"Characters"),B.map((function(e,t){return Object(m.a)("div",{className:"responsive"},Object(m.a)("div",{key:t,className:"gallery"},Object(m.a)("img",{src:e.image,alt:"Rick and Morty"}),Object(m.a)("div",{class:"desc"},Object(m.a)("p",{css:{whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"}},e.name))))})))),Object(m.a)("tr",null,Object(m.a)("td",null,"Created:"),Object(m.a)("td",null,Object(m.a)(I.a,{format:"YYYY-MM-DD HH:mm",date:D,css:{marginLeft:"0.5rem"}}))))))),Object(m.a)(d.b,{to:"/",css:{position:"fixed",top:"30%",left:"10px"}},Object(m.a)(f.a,{variant:"primary"}," Back")))}var H=function(){return Object(m.a)("header",{css:{fontFamily:"Comfortaa",textAlign:"center",height:"80px",width:"100%",maxWidth:"100%",backgroundColor:"#1f3a93",display:"flex",alignItems:"center",justifyContent:"center"}},Object(m.a)("h4",{css:{color:"#fff",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"}},"Made with",Object(m.a)("span",{css:{color:"#ff0000"}}," ","\u2665")," ","in Riihim\xe4ki, Finland"))},L=function(){return Object(m.a)("header",{css:{fontFamily:"Comfortaa",textAlign:"center",paddingTop:"20px",paddingBottom:"10px",marginBottom:"20px",backgroundColor:"#1f3a93",width:"100%",maxWidth:"100%"}},Object(m.a)("h1",{css:{marginBottom:"5px",color:"#fff",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"}},"RICK AND MORTY API APP"),Object(m.a)("h2",{css:{color:"#fff"}},"Made with React and GraphQL"))},R=new o.a({uri:"https://rickandmortyapi.com/graphql",cache:new l.a});var P=function(){return Object(N.jsx)(s.a,{client:R,children:Object(N.jsxs)(d.a,{children:[Object(N.jsxs)("div",{style:{minHeight:"calc(100vh - 80px)",backgroundColor:"#e8e8e8",paddingBottom:"35px"},children:[Object(N.jsx)(L,{}),Object(N.jsxs)(b.c,{children:[Object(N.jsx)(b.a,{exact:!0,path:"/",component:T}),Object(N.jsx)(b.a,{exact:!0,path:"/episode/:id",component:A})]})]}),Object(N.jsx)(H,{})]})})},E=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,91)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,r=t.getLCP,i=t.getTTFB;a(e),n(e),c(e),r(e),i(e)}))};i.a.render(Object(N.jsx)(c.a.StrictMode,{children:Object(N.jsx)(P,{})}),document.getElementById("root")),E()}},[[72,1,2]]]);
//# sourceMappingURL=main.d4093206.chunk.js.map