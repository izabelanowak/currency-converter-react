(this["webpackJsonpcurrency-conventer-react"]=this["webpackJsonpcurrency-conventer-react"]||[]).push([[0],[,,,,,,,,,function(e,t,c){},function(e,t,c){},,function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){"use strict";c.r(t);var a=c(1),n=c.n(a),r=c(4),l=c.n(r),s=(c(9),c(10),c(0)),i=function(e){var t=e.children;return Object(s.jsx)("main",{className:"container",children:t})},u=c(2),j=(c(12),function(e){var t=e.currencies,c=Object(a.useState)(""),n=Object(u.a)(c,2),r=n[0],l=n[1],i=Object(a.useState)(!0),j=Object(u.a)(i,2),b=j[0],o=j[1],d=Object(a.useState)("Euro"),h=Object(u.a)(d,2),m=h[0],_=h[1],O=Object(a.useState)({value:0,currency:"waluty"}),x=Object(u.a)(O,2),f=x[0],p=x[1],N=function(e,t){return e/t};return Object(s.jsxs)("form",{className:"form",onSubmit:function(e){e.preventDefault();var c=t.find((function(e){return e.name===m})),a=N(r,c.exchangeRate);p({value:a,currency:c.id})},children:[Object(s.jsxs)("fieldset",{className:"form__fieldset",children:[Object(s.jsx)("legend",{className:"form__legend",children:"Kalkulator walut"}),Object(s.jsx)("p",{children:Object(s.jsxs)("label",{className:"form__label",children:[Object(s.jsx)("span",{className:"form__labelText",children:"Kwota w z\u0142otych - PLN*:"}),Object(s.jsx)("input",{className:"form__input",type:"number",min:"0",max:"1000000000",step:"0.01",required:!0,value:r,onChange:function(e){var t=e.target;return l(t.value)}})]})}),Object(s.jsx)("p",{children:Object(s.jsxs)("label",{className:"form__label",children:[Object(s.jsx)("span",{className:"form__labelText",children:"Waluta:"}),Object(s.jsx)("select",{className:"form__select",value:m,onChange:function(e){var t=e.target;return _(t.value)},children:t.map((function(e){return Object(s.jsx)("option",{children:e.name},e.id)}))})]})}),Object(s.jsxs)("p",{className:"form__result".concat(b?" form__result--hidden":""),children:["Otrzymasz:"," ",Object(s.jsx)("strong",{children:f.value.toFixed(2)})," ",f.currency]})]}),Object(s.jsx)("button",{type:"submit",className:"form__button",onClick:function(){o((function(e){return!1}))},children:"Przelicz!"})]})}),b=(c(13),c(14),function(e){var t=e.currencies,c=e.hideTable;return Object(s.jsxs)("table",{className:"table".concat(c?" table--hidden":""),children:[Object(s.jsx)("caption",{className:"table__caption",children:"Aktualne kursy walut"}),Object(s.jsx)("thead",{children:Object(s.jsxs)("tr",{className:"table__row",children:[Object(s.jsx)("th",{className:"table__cell table__cell--header",scope:"col",children:"Nazwa"}),Object(s.jsx)("th",{className:"table__cell table__cell--header",scope:"col",children:"Waluta"}),Object(s.jsx)("th",{className:"table__cell table__cell--header",scope:"col",children:"Kurs"})]})}),Object(s.jsx)("tbody",{children:t.map((function(e){return Object(s.jsxs)("tr",{className:"table__row",children:[Object(s.jsx)("th",{className:"table__cell table__cell--header",scope:"row",children:e.name}),Object(s.jsx)("td",{className:"table__cell",children:e.id}),Object(s.jsx)("td",{className:"table__cell",children:e.exchangeRate})]},e.id)}))})]})}),o=function(e){var t=e.currencies,c=Object(a.useState)(!0),n=Object(u.a)(c,2),r=n[0],l=n[1];return Object(s.jsxs)("div",{className:"tableContainer",children:[Object(s.jsxs)("button",{className:"tableContainer__button",onClick:function(){l((function(e){return!e}))},children:[r?"Wy\u015bwietl":"Ukryj"," aktualne kursy walut"]}),Object(s.jsx)(b,{currencies:t,hideTable:r}),Object(s.jsx)("p",{className:"tableContainer__paragraph".concat(r?" tableContainer__paragraph--hidden":""),children:"Srednie kursy walut aktualne na dzie\u0144 01.05.2021r."})]})},d=[{id:"EUR",exchangeRate:4.5654,name:"Euro"},{id:"GBP",exchangeRate:5.2491,name:"Funt brytyjski"},{id:"USD",exchangeRate:3.7746,name:"Dolar ameryka\u0144ski"},{id:"CHF",exchangeRate:4.1502,name:"Frank szwajcarski"}];var h=function(){return Object(s.jsx)(s.Fragment,{children:Object(s.jsxs)(i,{children:[Object(s.jsx)(j,{currencies:d}),Object(s.jsx)(o,{currencies:d})]})})},m=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,16)).then((function(t){var c=t.getCLS,a=t.getFID,n=t.getFCP,r=t.getLCP,l=t.getTTFB;c(e),a(e),n(e),r(e),l(e)}))};l.a.render(Object(s.jsx)(n.a.StrictMode,{children:Object(s.jsx)(h,{})}),document.getElementById("root")),m()}],[[15,1,2]]]);
//# sourceMappingURL=main.a5d6a2a5.chunk.js.map