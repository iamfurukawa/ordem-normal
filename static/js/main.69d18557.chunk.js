(this["webpackJsonpordem-normal"]=this["webpackJsonpordem-normal"]||[]).push([[0],{17:function(e,t,n){e.exports={content:"profile_content__2MDXz",leftSide:"profile_leftSide__dOUHF",rightSide:"profile_rightSide__Fp-8O",profileName:"profile_profileName__21tec",skills:"profile_skills__34URS",fieldset:"profile_fieldset__3weTk"}},21:function(e,t,n){e.exports={content:"dice_content__kq1V5",dices:"dice_dices__1cc6P",dice:"dice_dice__3v2s-",result:"dice_result__Eqy2U"}},46:function(e,t,n){e.exports={header:"header_header__O9M5A"}},52:function(e,t,n){e.exports={content:"img-preview_content__3FyTF"}},54:function(e,t,n){e.exports={skill:"skill_skill__7WgS7"}},97:function(e,t,n){},98:function(e,t,n){"use strict";n.r(t);var i=n(2),a=n.n(i),r=n(14),c=n.n(r),o=n(34),s=n(11),u=n(32),l=n(15),d=n(28),f=n(42),j=n(29),m=n(43),b=n(4),p=n(44),v=(n(80),n(99),n(100),{app:function(){return b.a.apps.length?(b.a.auth().onAuthStateChanged((function(e){e&&e.getIdToken()})),b.a.app()):b.a.initializeApp({apiKey:"AIzaSyCyO9rOH2H5WzTbMAj7zN4XEoYgdh7z55k",authDomain:"ordem-normal.firebaseapp.com",projectId:"ordem-normal",storageBucket:"ordem-normal.appspot.com",messagingSenderId:"82768552929",appId:"1:82768552929:web:9ee3f4dcfaae4842b028a0"})}}),h=function(){var e=null;return{start:function(){(e||(e=new p.a.AuthUI(v.app().auth())),e).start("#firebaseui-auth-container",{callbacks:{signInSuccessWithAuthResult:function(e,t){return!0},uiShown:function(){}},signInFlow:"popup",signInSuccessUrl:"/",signInOptions:[{provider:b.a.auth.EmailAuthProvider.PROVIDER_ID,requireDisplayName:!0},{provider:b.a.auth.GoogleAuthProvider.PROVIDER_ID,requireDisplayName:!0}]})},stop:function(){v.app().auth().signOut()}}}(),O={getUser:function(e){return v.app().auth().onAuthStateChanged((function(t){e(t||null)}))},getCurrentUser:function(){return v.app().auth().getCurrentUser}},x=n(1),g=function(e){var t=e.novoPersonagemOnClick,n=e.user,a=e.setUser,r=Object(i.useState)(!1),c=Object(s.a)(r,2),o=c[0],u=c[1];Object(i.useEffect)((function(){var e=O.getUser(a);return function(){return e()}}),[]);var f=[{label:"Novo Personagem",icon:"pi pi-user-plus",command:function(){return t()}}],j=function(){u(!0),setTimeout((function(){return h.start()}),500)},b=function(){h.stop()};return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)(m.Menubar,{style:{width:"100%"},model:f,end:(null===n||void 0===n?void 0:n.uid)?Object(x.jsx)(l.Button,{label:"Sair",icon:"pi pi-sign-out",className:"p-button-danger",onClick:b}):Object(x.jsx)(l.Button,{label:"Entrar",icon:"pi pi-sign-in",className:"p-button-success",onClick:j})}),Object(x.jsx)(d.Dialog,{visible:o,style:{boxShadow:"none"},onHide:function(){return u(!1)},baseZIndex:1e3,children:Object(x.jsx)("div",{id:"firebaseui-auth-container"})})]})},D=n.p+"static/media/Header.fbcc51aa.jpg",N=n(46),S=n.n(N),_=function(){return Object(x.jsxs)("div",{className:S.a.header,children:[Object(x.jsx)("img",{src:D,alt:"Logo Ordem Normal",height:"168",width:"300"}),Object(x.jsx)("h1",{children:"FICHA DE PERSONAGEM"})]})},C=n(8),k=n.n(C),P=n(16),V=n(47),y=n.n(V),I=n(48),w=n(25),E=n(33),F=n(49),z=n(50),A=n(51),B=n.n(A),T=n.p+"static/media/Placeholder.c3f94521.png",M=n(52),R=n.n(M),U=function(e){var t=e.img,n=void 0===t?null:t,i=e.setImage,a=void 0===i?function(e){}:i,r=e.isDisabled,c=void 0!==r&&r;return Object(x.jsxs)("div",{className:R.a.content,children:[Object(x.jsx)("img",{src:null===n?T:n,alt:"profile"}),!c&&Object(x.jsx)(B.a,{onDone:function(e){return function(e){(e.type.includes("jpeg")||e.type.includes("jpg")||e.type.includes("png"))&&a(e.base64)}(e)}})]})},H=n(53),q=n.n(H),J=function(e){var t=e.text,n=void 0===t?"":t,a=e.setValue,r=void 0===a?function(e){}:a,c=e.className,o=void 0===c?"":c,s=e.isDisabled,u=void 0===s||s,l=Object(i.useRef)("");l.current=n;return Object(x.jsx)(q.a,{className:o,html:l.current,onBlur:function(){r(l.current)},onChange:function(e){l.current=e.target.value.replace(/&nbsp;/g,"").replace(/&amp;/g,"&").replace(/&gt;/g,">").replace(/&lt;/g,"<"),console.log(l.current)},onKeyDown:function(e){var t=e.which||e.keyCode;13===t&&e.preventDefault(),l.current.length>=20&&8!==t&&46!==t&&e.preventDefault()},disabled:u})},G=n(24),W=n(54),K=n.n(W),L=function(e){var t=e.value,n=void 0===t?0:t,i=e.setValue,a=void 0===i?function(e){}:i,r=e.action,c=void 0===r?function(){}:r,o=e.name,s=void 0===o?"":o,u=e.max,l=void 0===u?20:u,d=e.isDisabled,f=void 0===d||d;return Object(x.jsxs)("div",{className:K.a.skill,children:[Object(x.jsx)(G.InputNumber,{value:n,onValueChange:function(e){return a(e.value)},mode:"decimal",min:0,max:l,size:2,format:!1,disabled:f}),Object(x.jsx)("p",{onClick:function(){return c(n)},children:s})]})},X=function(e){var t=e.money,n=e.setMoney,i=e.hp,a=e.setHp,r=e.isDisabled,c=void 0===r||r;return Object(x.jsxs)("div",{className:"p-fluid",style:{marginTop:"30px",marginBottom:"10px"},children:[Object(x.jsxs)("div",{className:"p-field p-grid",children:[Object(x.jsx)("label",{htmlFor:"firstname4",className:"p-col-12 p-md-3",children:"Dinheiro"}),Object(x.jsx)("div",{className:"p-col-12 p-md-9",children:Object(x.jsx)(G.InputNumber,{id:"dinheiro",value:t,onValueChange:function(e){return n(e.value)},mode:"decimal",locale:"pt-BR",minFractionDigits:2,disabled:c})})]}),Object(x.jsxs)("div",{className:"p-field p-grid",children:[Object(x.jsx)("label",{htmlFor:"lastname4",className:"p-col-12 p-md-2",children:"HP"}),Object(x.jsx)("div",{className:"p-col-12 p-md-10",children:Object(x.jsx)(G.InputNumber,{id:"life",value:i,onValueChange:function(e){return a(e.value)},mode:"decimal",useGrouping:!1,max:999,size:3,disabled:c})})]})]})},Q=function(){var e=function(e,t){return e=Math.ceil(e),t=Math.floor(t),Math.floor(Math.random()*(t-e))+e};return{rollD6:function(){return e(1,7)},rollD20:function(){return e(1,21)},rollD100:function(){return e(1,101)},rollDN:function(t){return e(1,t+1)}}}(),Y=n(21),Z=n.n(Y),$=function(e){var t=e.value,n=void 0===t?-1:t,a=e.text,r=void 0===a?"":a,c=Object(i.useState)(0),o=Object(s.a)(c,2),u=o[0],l=o[1],d=Object(i.useState)(""),f=Object(s.a)(d,2),j=f[0],m=f[1];Object(i.useEffect)((function(){l(n),m(r)}),[]);var b=function(e){l(e()),m("")};return Object(x.jsxs)("div",{className:Z.a.content,children:[Object(x.jsxs)("div",{className:Z.a.dices,children:[Object(x.jsx)("div",{className:Z.a.dice,onClick:function(){return b(Q.rollD6)},children:"d6"}),Object(x.jsx)("div",{className:Z.a.dice,onClick:function(){return b(Q.rollD20)},children:"d20"}),Object(x.jsx)("div",{className:Z.a.dice,onClick:function(){return b(Q.rollD100)},children:"d100"})]}),Object(x.jsxs)("div",{className:Z.a.result,children:[Object(x.jsx)("h1",{children:u}),Object(x.jsx)("p",{children:j})]})]})},ee=n(102),te=function(){return{uuid:Object(ee.a)(),criador:"",img:null,imgUrl:"",nome:"",dinheiro:0,vida:0,forca:0,destreza:0,constituicao:0,inteligencia:0,carisma:0,conhecimento:0,exposicaoAoNormal:0,sorte:0,diccao:0,imunidade:0,encontrar:0,escutar:0,furtividade:0,esquiva:0,primeirosSocorros:0,usarEletronicos:0,tarefaDomestica:0,cozinhar:0,dirigir:0,flertar:0,dancar:0,socializar:0,trabalhar:0,tomarBanho:0,atividadeFisica:0,brincarComPet:0,historiaDoPersonagem:"",itemsDoPersonagem:""}},ne=n(55),ie=(function(){var e=function(e){return v.app().storage().ref().child("profile_images/"+e)}}(),function(){var e=function(){return v.app().firestore()},t=function(){var t=Object(P.a)(k.a.mark((function t(n,i,a){return k.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e().collection(n).doc(i).add(a);case 2:case"end":return t.stop()}}),t)})));return function(e,n,i){return t.apply(this,arguments)}}(),n=function(){var t=Object(P.a)(k.a.mark((function t(n,i,a){return k.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e().collection(n).doc(i);case 2:t.sent.update(a);case 4:case"end":return t.stop()}}),t)})));return function(e,n,i){return t.apply(this,arguments)}}();return{save:t,get:function(){var t=Object(P.a)(k.a.mark((function t(n,i){return k.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e().collection(n).doc(i).get();case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}(),update:n,remove:function(){var t=Object(P.a)(k.a.mark((function t(n,i){return k.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e().collection(n).doc(i).delete();case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()}}()),ae=n(17),re=n.n(ae),ce=function(e){var t=e.profileModel,n=void 0===t?new te:t,a=e.updateProfile,r=void 0===a?function(e){}:a,c=e.removeProfile,o=void 0===c?function(e){}:c,u=e.closeProfile,d=void 0===u?function(e){}:u,f=e.isDisabled,m=void 0!==f&&f,b=Object(i.useRef)(),p=Object(i.useState)(n),v=Object(s.a)(p,2),h=v[0],O=v[1],g=Object(i.useState)(0),D=Object(s.a)(g,2),N=D[0],S=D[1],_=function(e,t){var n=Object.assign({},h);n[e]=t,O(n),r(n)},C=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:20;S("...");var n=function(){S(Q.rollDN(t))};y.a.debounce(n,1e3)()},V=function(){return Object(x.jsx)($,{value:N,text:N})},A=function(){var e=Object(P.a)(k.a.mark((function e(){return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:ie.get("users").then((function(e){e.forEach((function(e){console.log("".concat(e.id," => ").concat(JSON.stringify(e.data())))}))}));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),B=Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)(l.Button,{icon:"pi pi-plus",className:"p-button-success p-mr-2",label:"Salvar",onClick:A}),m?Object(x.jsx)(l.Button,{icon:"pi pi-plus",className:"p-button-success p-mr-2",label:"Adicionar"}):Object(x.jsx)(l.Button,{icon:"pi pi-minus",className:"p-button-danger p-mr-2",label:"Excluir",onClick:function(){Object(z.confirmDialog)({message:"Voc\xea deseja deletar essa ficha da sua lista?",header:"Aopa!",icon:"pi pi-exclamation-triangle",accept:function(){o(h)},reject:function(){}})}})]}),T=Object(x.jsx)(l.Button,{icon:"pi pi-times",className:"p-button-danger",label:"Fechar",onClick:function(){return d(h)}});return Object(x.jsxs)("div",{className:re.a.content,children:[Object(x.jsx)(j.Toast,{ref:b}),Object(x.jsxs)("div",{className:re.a.leftSide,children:[Object(x.jsx)(U,{img:h.img,setImage:function(e){return _("img",e)},isDisabled:m}),Object(x.jsx)(X,{money:h.dinheiro,hp:n.vida,setMoney:function(e){return _("dinheiro",e)},setHp:function(e){return _("vida",e)},isDisabled:m}),Object(x.jsx)(V,{})]}),Object(x.jsx)(I.Divider,{layout:"vertical"}),Object(x.jsxs)("div",{className:re.a.rightSide,children:[Object(x.jsx)(F.Toolbar,{left:B,right:T}),Object(x.jsx)(J,{text:h.nome,className:re.a.profileName,setValue:function(e){return _("nome",e)},isDisabled:m}),Object(x.jsxs)("div",{className:re.a.skills,children:[Object(x.jsxs)(w.Fieldset,{className:re.a.fieldset,legend:"Principais",children:[Object(x.jsx)(L,{name:"For\xe7a",value:h.forca,setValue:function(e){return _("forca",e)},action:function(){return C("forca")},isDisabled:m}),Object(x.jsx)(L,{name:"Destreza",value:h.destreza,setValue:function(e){return _("destreza",e)},action:function(){return C("destreza")},isDisabled:m}),Object(x.jsx)(L,{name:"Constitui\xe7\xe3o",value:h.constituicao,setValue:function(e){return _("constituicao",e)},action:function(){return C("constituicao")},isDisabled:m}),Object(x.jsx)(L,{name:"Intelig\xeancia",value:h.inteligencia,setValue:function(e){return _("inteligencia",e)},action:function(){return C("inteligencia")},isDisabled:m}),Object(x.jsx)(L,{name:"Carisma",value:h.carisma,setValue:function(e){return _("carisma",e)},action:function(){return C("carisma")},isDisabled:m}),Object(x.jsx)(L,{name:"Conhecimento",value:h.conhecimento,setValue:function(e){return _("conhecimento",e)},action:function(){return C("conhecimento")},isDisabled:m}),Object(x.jsx)(L,{name:"Exposi\xe7\xe3o ao normal",value:h.exposicaoAoNormal,setValue:function(e){return _("exposicaoAoNormal",e)},action:function(){return C("exposicaoAoNormal",100)},max:100,isDisabled:m})]}),Object(x.jsxs)(w.Fieldset,{className:re.a.fieldset,legend:"Secund\xe1rias",children:[Object(x.jsx)(L,{name:"Sorte",value:h.sorte,setValue:function(e){return _("sorte",e)},action:function(){return C("sorte")},isDisabled:m}),Object(x.jsx)(L,{name:"Dic\xe7\xe3o",value:h.diccao,setValue:function(e){return _("diccao",e)},action:function(){return C("diccao")},isDisabled:m}),Object(x.jsx)(L,{name:"Imunidade",value:h.imunidade,setValue:function(e){return _("imunidade",e)},action:function(){return C("imunidade")},isDisabled:m}),Object(x.jsx)(L,{name:"Encontrar",value:h.encontrar,setValue:function(e){return _("encontrar",e)},action:function(){return C("encontrar")},isDisabled:m}),Object(x.jsx)(L,{name:"Escutar",value:h.escutar,setValue:function(e){return _("escutar",e)},action:function(){return C("escutar")},isDisabled:m}),Object(x.jsx)(L,{name:"Furtividade",value:h.furtividade,setValue:function(e){return _("furtividade",e)},action:function(){return C("furtividade")},isDisabled:m}),Object(x.jsx)(L,{name:"Esquiva",value:h.esquiva,setValue:function(e){return _("esquiva",e)},action:function(){return C("esquiva")},isDisabled:m}),Object(x.jsx)(L,{name:"Primeiros socorros",value:h.primeirosSocorros,setValue:function(e){return _("primeirosSocorros",e)},action:function(){return C("primeirosSocorros")},isDisabled:m})]}),Object(x.jsxs)(w.Fieldset,{className:re.a.fieldset,legend:"Normais",children:[Object(x.jsx)(L,{name:"Usar eletronicos",value:h.usarEletronicos,setValue:function(e){return _("usarEletronicos",e)},action:function(){return C("usarEletronicos")},isDisabled:m}),Object(x.jsx)(L,{name:"Tarefa dom\xe9stica",value:h.tarefaDomestica,setValue:function(e){return _("tarefaDomestica",e)},action:function(){return C("tarefaDomestica")},isDisabled:m}),Object(x.jsx)(L,{name:"Cozinhar",value:h.cozinhar,setValue:function(e){return _("cozinhar",e)},action:function(){return C("cozinhar")},isDisabled:m}),Object(x.jsx)(L,{name:"Dirigir",value:h.dirigir,setValue:function(e){return _("dirigir",e)},action:function(){return C("dirigir")},isDisabled:m}),Object(x.jsx)(L,{name:"Flertar",value:h.flertar,setValue:function(e){return _("flertar",e)},action:function(){return C("flertar")},isDisabled:m}),Object(x.jsx)(L,{name:"Dan\xe7ar",value:h.dancar,setValue:function(e){return _("dancar",e)},action:function(){return C("dancar")},isDisabled:m}),Object(x.jsx)(L,{name:"Socializar",value:h.socializar,setValue:function(e){return _("socializar",e)},action:function(){return C("socializar")},isDisabled:m}),Object(x.jsx)(L,{name:"Trabalhar",value:h.trabalhar,setValue:function(e){return _("trabalhar",e)},action:function(){return C("trabalhar")},isDisabled:m})]}),Object(x.jsxs)(w.Fieldset,{className:re.a.fieldset,legend:"Normais",children:[Object(x.jsx)(L,{name:"Tomar banho",value:h.tomarBanho,setValue:function(e){return _("tomarBanho",e)},action:function(){return C("tomarBanho")},isDisabled:m}),Object(x.jsx)(L,{name:"Atividade fisica",value:h.atividadeFisica,setValue:function(e){return _("atividadeFisica",e)},action:function(){return C("atividadeFisica")},isDisabled:m}),Object(x.jsx)(L,{name:"Brincar com pet",value:h.brincarComPet,setValue:function(e){return _("brincarComPet",e)},action:function(){return C("brincarComPet")},isDisabled:m})]})]}),Object(x.jsx)("h4",{children:"Hist\xf3ria do personagem"}),Object(x.jsx)(E.InputTextarea,{value:h.historiaDoPersonagem,onChange:function(e){return _("historiaDoPersonagem",e.target.value)},rows:5,cols:30,autoResize:!0,disabled:m}),Object(x.jsx)("h4",{children:"Items do personagem"}),Object(x.jsx)(E.InputTextarea,{value:h.itemsDoPersonagem,onChange:function(e){return _("itemsDoPersonagem",e.target.value)},rows:5,cols:30,autoResize:!0,disabled:m})]})]})},oe={save:function(e,t){localStorage.setItem(e,t)},open:function(e){return localStorage.getItem(e)},remove:function(e){localStorage.removeItem(e)},removeAll:function(){localStorage.clear()}},se=function(){var e=function(e,t){return"img"===e?void 0:t};return{saveProfiles:function(t){var n=JSON.stringify({profiles:t},e);oe.save("profiles",n)},openProfiles:function(){var e=oe.open("profiles");return JSON.parse(e).profiles},removeProfiles:function(){oe.removeProfiles("profiles")}}}(),ue=function(){var e=Object(i.useRef)(),t=Object(i.useState)(),n=Object(s.a)(t,2),a=n[0],r=n[1],c=Object(i.useState)(!1),m=Object(s.a)(c,2),b=m[0],p=m[1],v=Object(i.useState)(null),h=Object(s.a)(v,2),O=h[0],D=h[1],N=Object(i.useState)([]),S=Object(s.a)(N,2),C=S[0],k=S[1],P=Object(i.useState)(""),V=Object(s.a)(P,2),y=V[0],I=V[1];Object(i.useEffect)((function(){k(se.openProfiles())}),[]),Object(i.useEffect)((function(){I("")}),[b]),Object(i.useEffect)((function(){se.saveProfiles(C),D(B())}),[C]);var w=function(){if(""!==y){var e=te();e.nome=y,k([].concat(Object(o.a)(C),[e]))}p(!1)},E=function(e){var t=Object(o.a)(C);t[t.findIndex((function(t){return t.uuid===e.uuid}))]=e,k(t)},F=function(t){A(t),e.current.show({severity:"success",summary:"Ok",detail:"Excluido"})},z=function(e){A(e)},A=function(e){var t=C.filter((function(t){return t.uuid!==e.uuid}));k(t),D(B())},B=function(){return C.length-1};return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)(j.Toast,{ref:e}),Object(x.jsx)(g,{novoPersonagemOnClick:function(){return p(!0)},setUser:r,user:a}),Object(x.jsxs)("div",{class:"center",children:[Object(x.jsx)(_,{}),Object(x.jsx)(u.TabView,{style:{width:"80%",marginBottom:"30px"},activeIndex:O,onTabChange:function(e){return D(e.index)},children:C.map((function(e){return Object(x.jsxs)(u.TabPanel,{header:e.nome,children:[" ",Object(x.jsx)(ce,{profileModel:e,updateProfile:E,removeProfile:F,closeProfile:z})," "]})}))})]}),Object(x.jsx)(d.Dialog,{header:"Criar Personagem",visible:b,style:{width:"20vw"},footer:Object(x.jsxs)("div",{children:[Object(x.jsx)(l.Button,{label:"Cancelar",icon:"pi pi-times",onClick:function(){return p(!1)},className:"p-button-danger"}),Object(x.jsx)(l.Button,{label:"Criar",icon:"pi pi-check",onClick:function(){return w()},className:"p-button-success",autoFocus:!0})]}),onHide:function(){return p(!1)},children:Object(x.jsxs)("div",{className:"p-field",children:[Object(x.jsx)("label",{htmlFor:"nome",className:"p-d-block",children:"Qual ser\xe1 o nome? "}),Object(x.jsx)(f.InputText,{style:{width:"100%"},value:y,onChange:function(e){return I(e.target.value)},maxLength:20})]})})]})};n(93),n(94),n(95),n(96),n(97);c.a.render(Object(x.jsx)(a.a.StrictMode,{children:Object(x.jsx)(ue,{})}),document.getElementById("root"))}},[[98,1,2]]]);
//# sourceMappingURL=main.69d18557.chunk.js.map