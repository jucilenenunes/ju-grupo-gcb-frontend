(this["webpackJsonpprojeto-react-deezer"]=this["webpackJsonpprojeto-react-deezer"]||[]).push([[0],{33:function(t,n,e){},57:function(t,n,e){"use strict";e.r(n);var i,a,r,c,o,l,s,d,u,p,b=e(1),m=e.n(b),x=e(9),j=e.n(x),h=(e(33),e(5)),v=e(6),f=v.a.div(i||(i=Object(h.a)(["\n    min-width: 1000px;\n    display: grid;\n    grid-template-columns: 200px auto;\n    grid-column-gap: 20px;\n    grid-row-gap: 20px;    \n"]))),g=v.a.nav(a||(a=Object(h.a)(["\n    flex-flow: row wrap;\n    display: grid;\n    grid-template-rows: 60px auto;\n    grid-row-gap: 20px;\n"]))),O=v.a.div(r||(r=Object(h.a)(["\n    width: 200px;\n    display: grid;\n    align-content: center;\n    justify-content: center;\n    align-items: center;\n    justify-items: center;\n\n    > img {\n        width: 80%;\n        height: auto;\n    }\n"]))),y=v.a.nav(c||(c=Object(h.a)(["\n    > ul {\n        list-style: none;\n        font-family: Roboto;\n    }\n\n    > ul > li {\n        display: list-item;\n        margin-bottom: 16px;\n    }\n\n    > ul > li > button {\n        border: 0;\n        background-color: transparent;\n        font-size: 25px;\n        text-decoration: none;\n        color: #000000;\n        cursor: pointer;\n    }\n\n    > ul > li > button.ativa, > ul > li > button:hover {\n        color: #ef5466;\n    }\n"]))),k=v.a.main(o||(o=Object(h.a)(["\n    display: grid;\n    grid-template-rows: 60px;\n    grid-row-gap: 20px;\n    display: grid;\n"]))),S=v.a.div(l||(l=Object(h.a)(["\n    display: grid;\n    align-content: center;\n    justify-content: center;\n"]))),w=v.a.div(s||(s=Object(h.a)(["\n    display: grid;\n    min-width: 650px;\n    display: grid;\n    grid-template-columns: 500px 150px;\n    grid-column-gap: 0;\n    flex-flow: row wrap;\n\n    > div > input, > div > input:focus {\n        font-size: 14px;\n        font-weight: bold;\n        color: #333333;\n        border: solid 1px #ef5466;\n        width: 500px;\n        height: 25px;\n        box-shadow: none;\n    }\n\n    > div > button {\n        border: 0;\n        background-color: #ef5466;\n        color: #ffffff;\n        font-weight: bold;\n        width: 150px;\n        height: 29px;\n    }\n\n    > div > button:hover {\n        background-color: #dd4850;\n        cursor: pointer;\n    }\n"]))),T=v.a.div(d||(d=Object(h.a)(["\n    margin: 0;\n    padding: 0;\n    // border: solid 1px blue;\n\n     h1, h4 {\n        color: #ef5466;\n        margin: 0;\n    }\n"]))),E=v.a.div(u||(u=Object(h.a)(["\n    padding-left: 20px;\n    // border: solid 1px pink;\n\n    > div:last-child {\n        padding-bottom: 10px;\n        border-bottom: dashed 1px #ef5466;\n    }\n\n    > div.pagination {\n        display: block;\n        text-align: center;\n    }\n\n    > div.pagination > button {\n\n        width: 80px;\n        height: 25px;\n        margin-top: 6px;\n        border: solid 1px #ef5466;\n        background-color: white;\n        font-weight: bold;\n        cursor: pointer;\n    }\n\n    > div.empty {\n        width: 100%;\n        text-align: center;\n        padding: 20px 0 20px 0;\n        color: #ff0000;\n        font-weight: bold;\n        font-size: 20px;\n    }\n"]))),N=v.a.div(p||(p=Object(h.a)(["\n    display: grid;\n    grid-template-columns: 80px auto 300px;\n    grid-template-rows: auto;\n    border-top: dashed 1px #ef5466;\n    padding-top: 10px;\n    margin-bottom: 10px;\n\n    > div {\n        // border: solid 1px red;\n    }\n\n    > div > h4, > div > span {\n        padding: 0 5px 0 5px;\n    }\n\n    > div > img {\n        width: 80px;\n        height: 80px;\n        border: dashed 1px #ef5466;\n    }\n\n    > div > button {\n        width: 300px;\n        height: 25px;\n        margin-top: 6px;\n        border: solid 1px #ef5466;\n        background-color: white;\n        font-weight: bold;\n        cursor: pointer;\n    }\n"]))),C=e(0);var _=function(t){var n=t.children;return Object(C.jsx)(C.Fragment,{children:Object(C.jsx)(f,{children:n})})},A=e(7),z=e(2),M=e(12),P=e(27),G=e(4),R=e.n(G),D=function(t){var n;return{type:t.type,typeTytle:"\xc1lbum",title:t.title,artistName:null===(n=t.artist)||void 0===n?void 0:n.name,thumbnail:t.cover_medium,link:t.link}},F=function(t){return{type:t.type,typeTytle:"Playlist",title:t.title,description:t.user.name?"Playlist do usu\xe1rio "+t.user.name:"",thumbnail:t.picture_medium,link:t.link}},I=function(t){var n=new Date(1e3*t.duration).toISOString().substr(14,5);return{type:t.type,typeTytle:"M\xfasica",title:t.title,artistName:t.artist.name,albumTitle:t.album.title,trackDuration:n,thumbnail:t.album.cover_medium,link:t.link,linkMP3:t.preview}},L=function(t){return{type:t.type,typeTytle:"Artista",title:t.name,description:"(Sem descri\xe7\xe3o)",thumbnail:t.picture_medium,link:t.link}},B=function(t){switch((t=Object(z.a)(Object(z.a)({},t),{},{type:t.type&&t.type.length>0?t.type:t.record_type})).type){case"album":return D(t);case"playlist":return F(t);case"track":return I(t);case"artist":return L(t);default:return t}};var J=function(t){R.a.get(t).then((function(t){var n=t.data.data.map((function(t){return B(t)})),e=t.data.prev?t.data.prev:null,i=t.data.next?t.data.next:null;pt.dispatch(rt({items:n,prev:e,next:i}))})).catch((function(t){console.log("Err: ",t)}))};var U=function(){R.a.get("https://api.deezer.com/chart/0/tracks").then((function(t){var n=t.data.data.map((function(t){return B(t)})),e=t.data.prev?t.data.prev:null,i=t.data.next?t.data.next:null;pt.dispatch(ct({items:n,prev:e,next:i}))})).catch((function(t){console.log("Err: ",t)}))};var V=function(t){R.a.get("https://api.deezer.com/search?q=".concat(t)).then((function(n){var e=n.data.data.map((function(t){return B(t)})),i=n.data.prev?n.data.prev:null,a=n.data.next?n.data.next:null;pt.dispatch(ot({term:t,items:e,prev:i,next:a}))})).catch((function(t){console.log("Err: ",t)}))};var q=function(){R.a.get("https://api.deezer.com/chart/0/albums").then((function(t){var n=t.data.data.map((function(t){return B(t)})),e=t.data.prev?t.data.prev:null,i=t.data.next?t.data.next:null;pt.dispatch(lt({items:n,prev:e,next:i}))})).catch((function(t){console.log("Err: ",t)}))};var H=function(){R.a.get("https://api.deezer.com/chart/0/playlists").then((function(t){var n=t.data.data.map((function(t){return B(t)})),e=t.data.prev?t.data.prev:null,i=t.data.next?t.data.next:null;pt.dispatch(st({items:n,prev:e,next:i}))})).catch((function(t){console.log("Err: ",t)}))};var K=function(){R.a.get("https://api.deezer.com/chart/0/artists").then((function(t){var n=t.data.data.map((function(t){return B(t)})),e=t.data.prev?t.data.prev:null,i=t.data.next?t.data.next:null;pt.dispatch(dt({items:n,prev:e,next:i}))})).catch((function(t){console.log("Err: ",t)}))},Y="ju-prefs",Q=function(){var t=[];return localStorage[Y]&&(t=JSON.parse(localStorage[Y])),t};var W=function(t,n){var e=document.createElement("div");e.id="popup-message",e.style="position:fixed; top: 0; left: 0; background-color: #ffffff; color: #ef5466; z-index: 99999; width: 100%; height: 20px; border: solid 2px #ef5466; padding: 5px; display: grid; justify-content: center;",e.innerText=t,document.getElementsByTagName("body")[0].appendChild(e),setTimeout((function(){document.getElementById("popup-message").remove()}),1e3*n)},X={isLoading:!0,key:null,title:null,items:[]},Z="LOAD_API_URL",$="GET_MAIN_TRACKS",tt="SEARCH_CONTENT_BY_TERM",nt="GET_SUGGESTS_ALBUNS",et="GET_SUGGESTS_PLAYLISTS",it="GET_SUGGESTS_ARTISTS",at="GET_PREFERED_MUSICS",rt=function(t){var n=t.items,e=t.prev,i=t.next;return{type:Z,items:n,prev:e,next:i}},ct=function(t){var n=t.items,e=t.prev,i=t.next;return{type:$,payload:null,key:"home",title:"M\xfasicas Mais Ouvidas",items:n,prev:e,next:i}},ot=function(t){var n=t.term,e=t.items,i=t.prev,a=t.next;return{type:tt,payload:n,key:"searched",title:'Resultado da Pesquisa por "'.concat(n,'"'),items:e,prev:i,next:a}},lt=function(t){var n=t.items,e=t.prev,i=t.next;return{type:nt,payload:null,key:"album",title:"\xc1lbuns Sugeridos para Voc\xea",items:n,prev:e,next:i}},st=function(t){var n=t.items,e=t.prev,i=t.next;return{type:et,payload:null,key:"playlist",title:"Playlists Sugeridas para Voc\xea",items:n,prev:e,next:i}},dt=function(t){var n=t.items,e=t.prev,i=t.next;return{type:it,payload:null,key:"artist",title:"Artistas Sugeridos para Voc\xea",items:n,prev:e,next:i}},ut=function(t){var n=t.items;return{type:at,payload:null,key:"prefereds",title:"Minhas M\xfasicas Favoritas",items:n}},pt=Object(M.b)((function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:X,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case Z:return Object(z.a)(Object(z.a)({},t),{},{items:n.items,prev:n.prev,next:n.next});case $:case tt:case nt:case et:case it:case at:return Object(z.a)(Object(z.a)({},t),{},{isLoading:!1,key:n.key,title:n.title,items:n.items,prev:n.prev,next:n.next});default:return t}}),Object(M.a)(P.logger));pt.subscribe((function(){return console.log(pt.getState())}));var bt=U();pt.dispatch(ct({items:bt}));var mt=function(){var t=Object(A.b)((function(t){return t.key})),n=function(t,n){var e=n();pt.dispatch(t({items:e}))};return Object(C.jsxs)(g,{children:[Object(C.jsx)(O,{children:Object(C.jsx)("img",{src:"logo.png",className:"App-logo",alt:"logo"})}),Object(C.jsx)(y,{children:Object(C.jsxs)("ul",{children:[Object(C.jsx)("li",{children:Object(C.jsx)("button",{onClick:function(){n(ct,U)},className:"home"===t?"ativa":null,children:"Home"})}),Object(C.jsx)("li",{children:Object(C.jsx)("button",{onClick:function(){n(lt,q)},className:"album"===t?"ativa":null,children:"\xc1lbuns"})}),Object(C.jsx)("li",{children:Object(C.jsx)("button",{onClick:function(){n(st,H)},className:"playlist"===t?"ativa":null,children:"Playlists"})}),Object(C.jsx)("li",{children:Object(C.jsx)("button",{onClick:function(){n(dt,K)},className:"artist"===t?"ativa":null,children:"Artistas"})}),Object(C.jsx)("li",{children:Object(C.jsx)("button",{onClick:function(){n(ut,Q)},className:"prefereds"===t?"ativa":null,children:"Favoritas"})})]})})]})};var xt=function(t){var n=t.children;return Object(C.jsx)(S,{children:n})};var jt=function(t){var n=t.children;return Object(C.jsx)(k,{children:n})};var ht=function(t){var n=t.item,e=t.index,i=n.linkMP3?Object(C.jsx)("div",{className:"mp3-player",children:Object(C.jsx)("audio",{src:n.linkMP3,type:"audio/mpeg",controls:!0})}):null,a=n.link?Object(C.jsx)("button",{onClick:function(){window.open(n.link,"_blank").focus()},children:"Abrir no Deezer"}):null,r="track"===n.type?Object(C.jsx)("button",{onClick:function(){!function(t){var n=[];localStorage[Y]&&(n=JSON.parse(localStorage[Y])),0===n.filter((function(n){return n.title===t.title&&n.artistName===t.artistName&&n.albumTitle===t.albumTitle})).length?(n.push(Object(z.a)(Object(z.a)({},t),{},{prefered:!0})),localStorage[Y]=JSON.stringify(n),W("M\xfasica adicionada as favoritas com sucesso!",2)):W("ATEN\xc7\xc3O! Esta m\xfasica j\xe1 consta em suas favoritas.",2)}(n)},children:"Adicionar as Favoritas"}):null,c="track"===n.type?Object(C.jsx)("button",{onClick:function(){!function(t){var n=JSON.parse(localStorage[Y]);n.splice(t,1),localStorage[Y]=JSON.stringify(n),pt.dispatch(ut({items:n})),W("M\xfasica removida das favoritas com sucesso!",2)}(e)},children:"Remover das Favoritas"}):null,o=n.prefered?c:r;return Object(C.jsxs)(N,{children:[Object(C.jsx)("div",{children:Object(C.jsx)("img",{src:n.thumbnail,alt:n.title})}),Object(C.jsxs)("div",{children:[Object(C.jsxs)("h4",{children:[" ",n.typeTytle,': "',n.title,'"']}),n.description?Object(C.jsxs)("span",{children:[n.description,Object(C.jsx)("br",{})]}):null,n.artistName?Object(C.jsxs)("span",{children:["Artista: ",n.artistName,Object(C.jsx)("br",{})]}):null,n.albumTitle?Object(C.jsxs)("span",{children:["Album: ",n.albumTitle,Object(C.jsx)("br",{})]}):null,n.trackDuration?Object(C.jsxs)("span",{children:["Dura\xe7\xe3o: ",n.trackDuration]}):null]}),Object(C.jsxs)("div",{children:[i,a,o]})]})};var vt=function(){var t,n=Object(A.b)((function(t){return{title:t.title,items:t.items,prev:t.prev,next:t.next}})),e=n.items&&n.items.length>0?null===(t=n.items)||void 0===t?void 0:t.map((function(t,n){return Object(C.jsx)(ht,{item:t,index:n},n)})):Object(C.jsx)("div",{className:"empty",children:"Nenhum registro localizado."}),i=n.prev?Object(C.jsx)("button",{className:"api-nav",onClick:function(){r(n.prev,rt,J)},children:"Voltar"}):null,a=n.next?Object(C.jsx)("button",{className:"api-nav",onClick:function(){r(n.next,rt,J)},children:"Avan\xe7ar"}):null,r=function(t,n,e){var i=e(t);pt.dispatch(n({items:i}))};return Object(C.jsxs)(E,{children:[Object(C.jsx)("h1",{children:n.title}),e,Object(C.jsx)("hr",{}),Object(C.jsxs)("div",{className:"pagination",children:[i,"\xa0",a]})]})};var ft=function(){return Object(C.jsx)(T,{children:Object(C.jsx)(vt,{})})},gt=e(28);var Ot=function(){var t=Object(A.b)((function(t){return t.term})),n=Object(b.useState)(t),e=Object(gt.a)(n,2),i=e[0],a=e[1],r=function(){i&&i.length>=3?V(i):alert("Exibir mensagem: Para realizar a busca o termo digitado deve conter no m\xednimo 3 letras."),document.getElementById("term-input").focus()};return Object(C.jsxs)(w,{children:[Object(C.jsx)("div",{children:Object(C.jsx)("input",{id:"term-input",type:"text",value:t,onChange:function(t){a(t.target.value)},onKeyDown:function(t){"Enter"===t.key&&r()}})}),Object(C.jsx)("div",{children:Object(C.jsx)("button",{onClick:function(){r()},children:"BUSCAR"})})]})};var yt=function(){return Object(C.jsxs)(_,{children:[Object(C.jsx)(mt,{}),Object(C.jsxs)(jt,{children:[Object(C.jsx)(xt,{children:Object(C.jsx)(Ot,{})}),Object(C.jsx)(ft,{})]})]})},kt=function(t){t&&t instanceof Function&&e.e(3).then(e.bind(null,59)).then((function(n){var e=n.getCLS,i=n.getFID,a=n.getFCP,r=n.getLCP,c=n.getTTFB;e(t),i(t),a(t),r(t),c(t)}))};j.a.render(Object(C.jsx)(m.a.StrictMode,{children:Object(C.jsx)(A.a,{store:pt,children:Object(C.jsx)(yt,{})})}),document.getElementById("root")),kt()}},[[57,1,2]]]);
//# sourceMappingURL=main.7174d747.chunk.js.map