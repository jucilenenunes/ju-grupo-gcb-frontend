(this["webpackJsonpmeu-projeto"]=this["webpackJsonpmeu-projeto"]||[]).push([[0],[,,,,,,,,,,function(e,t,c){e.exports={project_details:"Project_project_details__dA41H",details_container:"Project_details_container__226Tf",service_form_container:"Project_service_form_container__HQ_ew",btn:"Project_btn__1MZ6L",project_info:"Project_project_info__2lst6"}},,function(e,t,c){e.exports={project_card:"ProjectCard_project_card___eigb",category_text:"ProjectCard_category_text__1EgD5",infraestrutura:"ProjectCard_infraestrutura__yuk4Y",desenvolvimento:"ProjectCard_desenvolvimento__pt1ly",design:"ProjectCard_design__1BAiM",planejamento:"ProjectCard_planejamento__2YzBo",project_card_actions:"ProjectCard_project_card_actions__1VRV_"}},function(e,t,c){e.exports={navbar:"Navbar_navbar__3tJyq",list:"Navbar_list__vyr6L",item:"Navbar_item___AaZc"}},,,,,,function(e,t,c){e.exports={form:"ProjectForm_form__chVYG"}},function(e,t,c){e.exports={footer:"Footer_footer__2QykQ",social_list:"Footer_social_list__1dS_O",copy_right:"Footer_copy_right__YfObS"}},,,,function(e,t,c){e.exports={project_container:"Projects_project_container__2T6Wr",title_container:"Projects_title_container__AtqiS"}},function(e,t,c){e.exports={message:"Message_message__2159q",sucess:"Message_sucess__2fCN-",error:"Message_error__1pbqC"}},function(e,t,c){e.exports={Container:"Container_Container__2vRN-",min_height:"Container_min_height__2Q5zb",start:"Container_start__3847G",column:"Container_column__1OW8C"}},function(e,t,c){e.exports={loader_container:"Loading_loader_container__1T3ui",loader:"Loading_loader__3-qMK"}},,,function(e,t,c){e.exports={home_container:"Home_home_container__juxDh"}},function(e,t,c){e.exports={btn:"LinkButton_btn__2EzBV"}},,,function(e,t,c){e.exports={form_control:"Input_form_control__2nOyz"}},function(e,t,c){e.exports={form_control:"Select_form_control__2ga--"}},function(e,t,c){e.exports={btn:"SubmitButton_btn__2lcWJ"}},function(e,t,c){e.exports={newproject_container:"NewProject_newproject_container__2RY0y"}},,,,,function(e,t,c){},,,,,,,function(e,t,c){"use strict";c.r(t);var n=c(2),o=c.n(n),a=c(29),r=c.n(a),s=(c(42),c(6)),i=c(3),j=c(30),l=c.n(j),d=c.p+"static/media/savings.25a5174d.svg",b=c(31),h=c.n(b),u=c(1);var O=function(e){var t=e.to,c=e.text;return Object(u.jsx)(s.b,{className:h.a.btn,to:t,children:c})};var x=function(){return Object(u.jsxs)("section",{className:l.a.home_container,children:[Object(u.jsxs)("h1",{children:["Bem vindo ao ",Object(u.jsx)("span",{children:"Meu Projeto Costs"})]}),Object(u.jsx)("p",{children:"Aqui \xe9 poss\xedvel gerenciar os seus projetos agora mesmo!"}),Object(u.jsx)(O,{to:"/newproject",text:"Criar Projeto"}),Object(u.jsx)("img",{src:d,alt:"Costs"})]})};var m=function(){return Object(u.jsx)("h1",{children:"Contato"})};var p=function(){return Object(u.jsx)("h1",{children:"Empresa"})},f=c(16),_=c(11),g=c(5),v=c(34),C=c.n(v);var A=function(e){var t=e.type,c=e.text,n=e.name,o=e.placeholder,a=e.handleOnchange,r=e.value;return Object(u.jsxs)("div",{className:C.a.form_control,children:[Object(u.jsxs)("label",{htmlFor:n,children:[c,":"]}),Object(u.jsx)("input",{type:t,name:n,id:n,placeholder:o,onChange:a,value:r})]})},N=c(35),y=c.n(N);var P=function(e){var t=e.text,c=e.name,n=e.options,o=e.handleOnchange,a=e.value;return Object(u.jsxs)("div",{className:y.a.form_control,children:[Object(u.jsxs)("label",{htmlFor:c,children:[t,":"]}),Object(u.jsxs)("select",{name:c,id:c,onChange:o,value:a||"",children:[Object(u.jsx)("option",{children:"Selecione uma op\xe7\xe3o"}),n.map((function(e){return Object(u.jsx)("option",{value:e.id,children:e.name},e.id)}))]})]})},S=c(36),w=c.n(S);var T=function(e){var t=e.text;return Object(u.jsx)("div",{children:Object(u.jsx)("button",{className:w.a.btn,children:t})})},E=c(19),B=c.n(E);var F=function(e){var t=e.handleSubmit,c=e.btnText,o=e.projectData,a=Object(n.useState)(o||{}),r=Object(g.a)(a,2),s=r[0],i=r[1],j=Object(n.useState)([]),l=Object(g.a)(j,2),d=l[0],b=l[1];function h(e){i(Object(_.a)(Object(_.a)({},s),{},Object(f.a)({},e.target.name,e.target.value)))}return Object(n.useEffect)((function(){fetch("http://localhost:5000/categories",{method:"GET",headers:{"Content-Type":"aplication/json"}}).then((function(e){return e.json()})).then((function(e){b(e)})).catch((function(e){return console.log(e)}))}),[]),Object(u.jsxs)("form",{onSubmit:function(e){e.preventDefault(),console.log("ProjectForm Submit",s),t(s)},className:B.a.form,children:[Object(u.jsx)(A,{type:"text",text:"Nome do projeto",name:"name",placeholder:"Insira o nome do projeto",handleOnchange:h,value:s.name?s.name:""}),Object(u.jsx)(A,{type:"number",text:"Or\xe7amento do projeto",name:"budget",placeholder:"Insira o or\xe7amento total",handleOnchange:h,value:s.budget?s.budget:""}),Object(u.jsx)(P,{name:"category_id",text:"Selecione a categoria",options:d,handleOnchange:function(e){i(Object(_.a)(Object(_.a)({},s),{},{category:{id:e.target.value,name:e.target.options[e.target.selectedIndex].text}}))},value:s.category?s.category.id:""}),Object(u.jsx)(T,{text:c})]})},q=c(37),Y=c.n(q);var I=function(){var e=Object(i.f)();return Object(u.jsxs)("div",{className:Y.a.newproject_container,children:[Object(u.jsx)("h1",{children:"Criar Projeto"}),Object(u.jsx)("p",{children:"Crie seu projeto para depois adicionar os servi\xe7os"}),Object(u.jsx)(F,{handleSubmit:function(t){t.cost=0,t.services=[];var c=new Headers;c.append("Content-Type","application/json"),console.log("NewProject CreatPost",JSON.stringify(t)),fetch("http://localhost:5000/projects",{method:"POST",headers:c,body:JSON.stringify(t)}).then((function(e){return e.json()})).then((function(t){console.log(t),e.push("/projects",{message:"Projeto criado com sucesso!"})})).catch((function(e){return console.log(e)}))},btnText:"Criar Projeto"})]})},K=c(24),L=c.n(K),k=c(25),D=c.n(k);var G=function(e){var t=e.type,c=e.msg,o=Object(n.useState)(!1),a=Object(g.a)(o,2),r=a[0],s=a[1];return Object(n.useEffect)((function(){if(c){s(!0);var e=setTimeout((function(){s(!1)}),3e3);return function(){return clearTimeout(e)}}s(!1)}),[c]),Object(u.jsx)(u.Fragment,{children:r&&Object(u.jsx)("div",{className:"".concat(D.a.message," ").concat(D.a[t]),children:c})})},U=c(26),H=c.n(U);var Q=function(e){return Object(u.jsx)("div",{className:"".concat(H.a.Container," ").concat(H.a[e.customClass]),children:e.children})},R=c.p+"static/media/loading.cb532fb5.svg",X=c(27),V=c.n(X);var Z=function(){return Object(u.jsx)("div",{className:V.a.loader_container,children:Object(u.jsx)("img",{className:V.a.loader,src:R,alt:"Loading"})})},z=c(12),M=c.n(z),J=c(18);var W=function(e){var t=e.id,c=e.name,n=e.budget,o=e.category,a=e.handleRemove;return Object(u.jsxs)("div",{className:M.a.project_card,children:[Object(u.jsx)("h4",{children:c}),Object(u.jsxs)("p",{children:[Object(u.jsx)("span",{children:"Or\xe7amento"})," R$",n]}),Object(u.jsxs)("p",{className:M.a.category_text,children:[Object(u.jsx)("span",{className:"".concat(M.a[o.toLowerCase()])})," ",o]}),Object(u.jsxs)("div",{className:M.a.project_card_actions,children:[Object(u.jsxs)(s.b,{to:"project/".concat(t),children:[Object(u.jsx)(J.b,{})," Editar"]}),Object(u.jsxs)("button",{onClick:function(e){e.preventDefault(),a(t)},children:[Object(u.jsx)(J.a,{})," Excluir"]})]})]})};var $=function(){var e=Object(n.useState)([]),t=Object(g.a)(e,2),c=t[0],o=t[1],a=Object(n.useState)(!1),r=Object(g.a)(a,2),s=r[0],j=r[1],l=Object(n.useState)(""),d=Object(g.a)(l,2),b=d[0],h=d[1],x=Object(i.g)(),m="";function p(e){fetch("http://localhost:5000/projects/".concat(e),{method:"DELETE",headers:{"Content-Type":"aplication/json"}}).then((function(e){return e.json()})).then((function(t){o(c.filter((function(t){return t.id!==e}))),h("Projeto removido com sucesso!")})).catch((function(e){return console.log(e)}))}return x.state&&(m=x.state.message),Object(n.useEffect)((function(e){(new Headers).append("Content-Type","application/json"),setTimeout((function(){fetch("http://localhost:5000/projects",{method:"GET",headers:{body:JSON.stringify(e)}}).then((function(e){return e.json()})).then((function(e){console.log(e),o(e),j(!0)})).catch((function(e){return console.log(e)}))}),300)}),[]),Object(u.jsxs)("div",{className:L.a.projects_container,children:[Object(u.jsxs)("div",{className:L.a.title_container,children:[Object(u.jsx)("h1",{children:"Meus Projetos"}),Object(u.jsx)(O,{to:"/newproject",text:"Criar Projeto"})]}),m&&Object(u.jsx)(G,{type:"success",msg:m}),b&&Object(u.jsx)(G,{type:"success",msg:b}),Object(u.jsxs)(Q,{customClass:"start",children:[c.length>0&&c.map((function(e){return Object(u.jsx)(W,{id:e.id,name:e.name,budget:e.budget,category:e.category.name,handleRemove:p},e.id)})),!s&&Object(u.jsx)(Z,{}),s&&0===c.length&&Object(u.jsx)("p",{children:"N\xe3o h\xe1 projetos cadastrados!"})]})]})},ee=c(13),te=c.n(ee);var ce=function(){return Object(u.jsx)("nav",{className:te.a.navbar,children:Object(u.jsxs)(Q,{children:[Object(u.jsx)(s.b,{to:"/",children:Object(u.jsx)("img",{src:"data:image/png;base64,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",alt:"Costs"})}),Object(u.jsxs)("ul",{className:te.a.list,children:[Object(u.jsx)("li",{className:te.a.item,children:Object(u.jsx)(s.b,{to:"/",children:"Home"})}),Object(u.jsx)("li",{className:te.a.item,children:Object(u.jsx)(s.b,{to:"/projects",children:"Projetos"})}),Object(u.jsx)("li",{className:te.a.item,children:Object(u.jsx)(s.b,{to:"/contact",children:"Contato"})}),Object(u.jsx)("li",{className:te.a.item,children:Object(u.jsx)(s.b,{to:"/company",children:"Empresa"})}),Object(u.jsx)("li",{className:te.a.item,children:Object(u.jsx)(s.b,{to:"/newproject",children:"Novo Projeto"})})]})]})})},ne=c(14),oe=c(20),ae=c.n(oe);var re=function(){return Object(u.jsxs)("footer",{className:ae.a.footer,children:[Object(u.jsxs)("ul",{className:ae.a.social_list,children:[Object(u.jsx)("li",{children:Object(u.jsx)(ne.b,{})}),Object(u.jsx)("li",{children:Object(u.jsx)(ne.d,{})}),Object(u.jsx)("li",{children:Object(u.jsx)(ne.e,{})}),Object(u.jsx)("li",{children:Object(u.jsx)(ne.c,{})}),Object(u.jsx)("li",{children:Object(u.jsx)(ne.g,{})}),Object(u.jsx)("li",{children:Object(u.jsx)(ne.a,{})}),Object(u.jsx)("li",{children:Object(u.jsx)(ne.f,{})})]}),Object(u.jsxs)("p",{className:ae.a.copy_right,children:[Object(u.jsx)("span",{children:"Produzido por Jucilene Nunes"})," \xa9 2021"]})]})},se=c(51),ie=c(10),je=c.n(ie);var le=function(e){var t=e.handleSubmit,c=e.btnText,o=e.projectData,a=Object(n.useState)({}),r=Object(g.a)(a,2),s=r[0],i=r[1];function j(e){i(Object(_.a)(Object(_.a)({},s),{},Object(f.a)({},e.target.name,e.target.value)))}return Object(u.jsxs)("form",{onSubmit:function(e){e.preventDefault(),o.services.push(s),t(o)},className:B.a.form,children:[Object(u.jsx)(A,{type:"text",text:"Nome do Servi\xe7o",name:"name",placeholder:"Insira o nome do servi\xe7o",handleOnChange:j}),Object(u.jsx)(A,{type:"number",text:"Custo do Servi\xe7o",name:"cost",placeholder:"Insira o valor total",handleOnChange:j}),Object(u.jsx)(A,{type:"text",text:"Descri\xe7\xe3o do Servi\xe7o",name:"description",placeholder:"Descreva o servi\xe7o",handleOnChange:j}),Object(u.jsx)(T,{text:c})]})};var de=function(e,t,c,n,o){return Object(u.jsxs)("div",{className:M.a.project_card,children:[Object(u.jsx)("h4",{children:t}),Object(u.jsxs)("p",{children:[Object(u.jsx)("span",{children:"Custo Total:"})," R$",c]}),Object(u.jsx)("p",{children:n}),Object(u.jsx)("div",{className:M.a.project_card_actions,children:Object(u.jsxs)("button",{onClick:function(e){},children:[Object(u.jsx)(J.a,{}),"Excluir"]})})]})};var be=function(){var e=Object(i.h)().id,t=Object(n.useState)([]),c=Object(g.a)(t,2),o=c[0],a=c[1],r=Object(n.useState)(!1),s=Object(g.a)(r,2),j=s[0],l=s[1],d=Object(n.useState)(!1),b=Object(g.a)(d,2),h=b[0],O=b[1],x=Object(n.useState)([]),m=Object(g.a)(x,2),p=m[0],f=m[1],_=Object(n.useState)(""),v=Object(g.a)(_,2),C=v[0],A=v[1],N=Object(n.useState)("success"),y=Object(g.a)(N,2),P=y[0],S=y[1];function w(){}return Object(n.useEffect)((function(){setTimeout((function(){fetch("http://localhost:5000/projects/".concat(e),{method:"GET",headers:{"Content-Type":"aplication/json"}}).then((function(e){return e.json()})).then((function(e){a(e),f(e)})).catch((function(e){return console.log}))}),300)}),[e]),Object(u.jsxs)(u.Fragment,{children:[" ",o.name?Object(u.jsx)("div",{className:je.a.project_details,children:Object(u.jsxs)(Q,{customClass:"column",children:[C&&Object(u.jsx)(G,{type:P,msg:C}),Object(u.jsxs)("div",{className:je.a.details_container,children:[Object(u.jsxs)("h1",{children:["Projeto: ",o.name]}),Object(u.jsx)("button",{className:je.a.btn,onClick:function(){l(!j)},children:j?"Fechar":"Editar Projeto"}),j?Object(u.jsx)("div",{className:je.a.project_info,children:Object(u.jsx)(F,{handleSubmit:function(e){if(A(""),e.budget<e.cost)return A("O or\xe7amento n\xe3o pode ser menor que o custo do projeto!"),S("error"),!1;fetch("http://localhost:5000/projects/".concat(e.id),{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}).then((function(e){return e.json()})).then((function(e){a(e),l(!1),A("Projeto Atualizado!"),S("success")})).catch((function(e){return console.log(e)}))},btnText:"Concluir Edi\xe7\xe3o",projectData:o})}):Object(u.jsxs)("div",{className:je.a.project_info,children:[Object(u.jsxs)("p",{children:[Object(u.jsx)("span",{children:"Categoria:"})," ",o.category.name]}),Object(u.jsxs)("p",{children:[Object(u.jsx)("span",{children:"Total de Or\xe7amento:"})," R$",o.budget]}),Object(u.jsxs)("p",{children:[Object(u.jsx)("span",{children:"Total Utilizado:"})," R$",o.cost]})]})]}),Object(u.jsxs)("div",{className:je.a.service_form_container,children:[Object(u.jsx)("h2",{children:"Adicione um Servi\xe7o:"}),Object(u.jsx)("button",{className:je.a.btn,onClick:function(){O(!h)},children:h?"Fechar":"Adicionar Servi\xe7o"}),Object(u.jsx)("div",{className:je.a.project_info,children:h&&Object(u.jsx)(le,{handleSubmit:function(e){A("");var t=e.services[e.services.length-1];t.id=Object(se.a)();var c=t.cost;console.log("Os dados foram criados???");var n=parseFloat(e.cost)+parseFloat(c);if(console.log("Os dados foram calculados???",e.cost,"last ",t.cost),n>parseFloat(e.budget))return A("Or\xe7amento ultrapassado, verifique o valor do servi\xe7o"),S("error"),e.services.pop(),!1;e.cost=n;var o=new Headers;o.append("Content-Type","application/json"),fetch("http://localhost:5000/projects/".concat(e.id),{method:"PATCH",headers:o,body:JSON.stringify(e)}).then((function(e){return e.json()})).then((function(e){O(!1)})).catch((function(e){return console.log(e)}))},btnText:"Adicionar Servi\xe7o",projectData:o})})]}),Object(u.jsx)("h2",{children:"Servi\xe7os:"}),Object(u.jsxs)(Q,{customClass:"start",children:[p.length>0&&p.map((function(e){return Object(u.jsx)(de,{id:e.id,name:e.name,cost:e.cost,description:e.description,handleRemove:w},e.id)})),0===p&&Object(u.jsx)("p",{children:"N\xe3o h\xe1 servi\xe7os cadastrados."})]})]})}):Object(u.jsx)(Z,{})," "]})};var he=function(){return Object(u.jsxs)(s.a,{children:[Object(u.jsx)(ce,{}),Object(u.jsx)(i.c,{children:Object(u.jsxs)(Q,{customClass:"min_height",children:[Object(u.jsx)(i.a,{exact:!0,path:"/",children:Object(u.jsx)(x,{})}),Object(u.jsx)(i.a,{path:"/projects",children:Object(u.jsx)($,{})}),Object(u.jsx)(i.a,{path:"/company",children:Object(u.jsx)(p,{})}),Object(u.jsx)(i.a,{path:"/contact",children:Object(u.jsx)(m,{})}),Object(u.jsx)(i.a,{path:"/newproject",children:Object(u.jsx)(I,{})}),Object(u.jsx)(i.a,{path:"/project/:id",children:Object(u.jsx)(be,{})})]})}),Object(u.jsx)(re,{})]})};r.a.render(Object(u.jsx)(o.a.StrictMode,{children:Object(u.jsx)(he,{})}),document.getElementById("root"))}],[[49,1,2]]]);
//# sourceMappingURL=main.146fe13c.chunk.js.map