(this["webpackJsonpapp-pacientes"]=this["webpackJsonpapp-pacientes"]||[]).push([[0],{25:function(e,t,a){},26:function(e,t,a){},33:function(e,t){},34:function(e,t,a){"use strict";a.r(t);var c=a(9),s=a.n(c),n=a(18),i=a.n(n),o=(a(25),a(26),a(11)),l=a(12),d=a(13),j=a(19),b=a(3),r=function(e){var t={nomeCompleto:"",telefone:"",email:"",endereco:""},a=Object(c.useState)(t),s=Object(l.a)(a,2),n=s[0],i=s[1],r=function(e){var t=e.target,a=t.name,c=t.value;i(Object(o.a)(Object(o.a)({},n),{},Object(d.a)({},a,c)))};Object(j.useEffect)((function(){""===e.idAtual?i(Object(o.a)({},t)):i(Object(o.a)({},e.dadosPacientes[e.idAtual]))}),[e.idAtual,e.dadosPacientes]);return Object(b.jsxs)("form",{autoComplete:"off",children:[Object(b.jsxs)("div",{className:"input-group mb-3",children:[Object(b.jsx)("span",{class:"input-group-text",id:"basic-addon1",children:Object(b.jsx)("i",{className:"fas fa-user fa-input-size"})}),Object(b.jsx)("input",{className:"form-control",placeholder:"Nome Completo",name:"nomeCompleto",value:n.nomeCompleto,onChange:r})]}),Object(b.jsxs)("div",{className:"input-group mb-3",children:[Object(b.jsx)("span",{class:"input-group-text",id:"basic-addon1",children:Object(b.jsx)("i",{className:"fas fa-phone-alt fa-input-size"})}),Object(b.jsx)("input",{className:"form-control",placeholder:"Telefone",name:"telefone",value:n.telefone,onChange:r})]}),Object(b.jsxs)("div",{className:"input-group mb-3",children:[Object(b.jsx)("span",{class:"input-group-text",id:"basic-addon1",children:Object(b.jsx)("i",{className:"fas fa-at fa-input-size"})}),Object(b.jsx)("input",{className:"form-control",placeholder:"Email",name:"email",value:n.email,onChange:r})]}),Object(b.jsxs)("div",{className:"input-group mb-3",children:[Object(b.jsx)("span",{class:"input-group-text",id:"basic-addon1",children:Object(b.jsx)("i",{className:"bi bi-geo-alt-fill"})}),Object(b.jsx)("input",{className:"form-control",placeholder:"Endere\xe7o",name:"endereco",value:n.endereco,onChange:r})]}),Object(b.jsx)("div",{children:Object(b.jsx)("input",{type:"button",value:""===e.idAtual?"Salvar":"Atualizar",className:"btn btn-primary d-grid gap-2 col-6 mx-auto",onClick:function(){e.addEedit(n)}})})]})},u=function(){return Object(b.jsx)("div",{className:"mb-2 bg-light rounded-3",children:Object(b.jsxs)("div",{class:"py-2 text-center",children:[Object(b.jsx)("img",{width:80,className:"border border-dark",src:"data:image/png;base64,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",alt:"Cadastro de Pacientes"}),Object(b.jsx)("h2",{children:"Cadastro de Pacientes"}),Object(b.jsxs)("p",{class:"lead",children:["Esse exerc\xedcio tem o objetivo de aprimorar os conhecimentos em CRUD.",Object(b.jsx)("br",{}),"(Criar, Listar, Atualizar e Deletar).",Object(b.jsx)("br",{}),"By Jucilene Nunes"]})]})})},p=function(e){var t=e.dadosPacientes,a=e.setIdAtual,c=e.deletePaciente,s=0;return Object(b.jsxs)("table",{className:"table table-bodered table-stripped",children:[Object(b.jsx)("thead",{children:Object(b.jsxs)("tr",{children:[Object(b.jsx)("th",{children:"Nome"}),Object(b.jsx)("th",{children:"Telefone"}),Object(b.jsx)("th",{children:Object(b.jsx)("span",{className:"float-end",children:"A\xe7\xf5es\xa0"})})]})}),Object(b.jsx)("tbody",{children:Object.keys(t).map((function(e){return Object(b.jsxs)("tr",{title:"E-Mail: ".concat(t[e].email),children:[Object(b.jsxs)("td",{children:[" ",t[e].nomeCompleto," "]}),Object(b.jsxs)("td",{children:[" ",t[e].telefone," "]}),Object(b.jsx)("td",{children:Object(b.jsxs)("span",{className:"btn-group float-end",role:"group",children:[Object(b.jsx)("button",{className:"btn btn-primary btn-sm",onClick:function(){a(e)},children:Object(b.jsx)("i",{className:"fas fa-pencil-alt"})}),Object(b.jsx)("button",{className:"btn btn-danger btn-sm",onClick:function(){c(e)},children:Object(b.jsx)("i",{className:"fas fa-trash-alt"})})]})})]},s++)}))})]})},h=a(20).a.initializeApp({apiKey:"AIzaSyAgt_NHA1ZpV3WhExc90V0quyGMr_s4wQE",authDomain:"app-pacientes-34258.firebaseapp.com",databaseURL:"https://app-pacientes-34258-default-rtdb.firebaseio.com",projectId:"app-pacientes-34258",storageBucket:"app-pacientes-34258.appspot.com",messagingSenderId:"416412203189",appId:"1:416412203189:web:c57003e8698cf84baaa6fc"}).database().ref(),m=function(){var e=Object(c.useState)({}),t=Object(l.a)(e,2),a=t[0],s=t[1],n=Object(c.useState)(""),i=Object(l.a)(n,2),d=i[0],j=i[1];Object(c.useEffect)((function(){h.child("pacientes").on("value",(function(e){null!=e.val()?s(Object(o.a)({},e.val())):s({})}))}),[]);return Object(b.jsxs)("div",{children:[Object(b.jsx)(u,{}),Object(b.jsxs)("div",{className:"row",children:[Object(b.jsx)("div",{className:"col-md-5",children:Object(b.jsx)(r,{addEedit:function(e){""===d?h.child("pacientes").push(e,(function(e){e?console.log(e):j("")})):h.child("pacientes/".concat(d)).set(e,(function(e){e?console.log(e):j("")}))},idAtual:d,dadosPacientes:a})}),Object(b.jsx)("div",{className:"col-md-7",children:Object(b.jsx)(p,{dadosPacientes:a,setIdAtual:j,deletePaciente:function(e){window.confirm("Deseja realmente deletar esse cadastro?")&&h.child("pacientes/".concat(e)).remove((function(e){e&&console.log(e)}))}})})]})]})};a(33);var O=function(){return Object(b.jsx)("div",{className:"row",children:Object(b.jsx)("div",{className:"col-md-8 offset-md-2",children:Object(b.jsx)(m,{})})})},x=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,35)).then((function(t){var a=t.getCLS,c=t.getFID,s=t.getFCP,n=t.getLCP,i=t.getTTFB;a(e),c(e),s(e),n(e),i(e)}))};i.a.render(Object(b.jsx)(s.a.StrictMode,{children:Object(b.jsx)(O,{})}),document.getElementById("root")),x()}},[[34,1,2]]]);
//# sourceMappingURL=main.0cd6be95.chunk.js.map