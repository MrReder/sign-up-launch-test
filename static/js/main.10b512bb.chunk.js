(this["webpackJsonpsign-up-test"]=this["webpackJsonpsign-up-test"]||[]).push([[0],[,,,,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},,function(e,t,n){"use strict";n.r(t);var a=n(1),s=n.n(a),c=n(4),i=n.n(c),r=(n(9),n(10),n(2)),l=(n(11),n.p+"static/media/topIcon.51e49696.svg"),o=n.p+"static/media/inputIcon.69a86a9f.svg",d=(n(12),n(0)),j=function(e){var t=e.icon,n=e.gender,a=e.gendercontainer,s=e.handleGender,c=e.alt;return Object(d.jsxs)("div",{gendercontainer:a,className:"gender-box",onClick:s,children:[Object(d.jsx)("img",{src:t,alt:c,className:"gender-icon"}),Object(d.jsx)("span",{className:"gender-text",children:n})]})},u=n.p+"static/media/male1.ca979ef2.svg",p=n.p+"static/media/female1.b65a885b.svg",m=n.p+"static/media/other.ea994d73.svg",b=function(){var e=Object(a.useState)(" "),t=Object(r.a)(e,2),n=t[0],s=t[1],c=Object(a.useState)(" "),i=Object(r.a)(c,2),b=i[0],h=i[1],O=Object(a.useState)(""),g=Object(r.a)(O,2),x=g[0],f=g[1],v=Object(a.useState)(""),N=Object(r.a)(v,2),w=N[0],y=N[1],C=Object(a.useState)("password"),S=Object(r.a)(C,2),k=S[0],F=S[1],G=Object(a.useState)("password"),L=Object(r.a)(G,2),E=L[0],I=L[1],P=function(){return/\S+@\S+\.\S+/.test(b.toLowerCase())},Y=function(){return/[a-zA-Z0-9]{6,50}/.test(x)},q=function(){return x===w};return Object(d.jsx)("div",{className:"sign-up-page-wrapper",children:Object(d.jsxs)("form",{className:"form-container",children:[Object(d.jsxs)("div",{className:"form-header",children:[Object(d.jsx)("img",{src:l,alt:"top-icon",className:"top-icon"}),Object(d.jsx)("h1",{className:"main-title",children:"Sign Up with email"})]}),Object(d.jsxs)("div",{className:"gender-container",children:[Object(d.jsx)("h2",{className:"secondary-title",style:{marginLeft:"0"},children:"Gender"}),Object(d.jsxs)("div",{className:"gender-boxes-wrapper",children:[Object(d.jsx)(j,{icon:u,gender:"Male",alt:"male",value:n,handleGender:function(){console.log(n,"hello"),s("male")}}),Object(d.jsx)(j,{icon:p,gender:"Female",alt:"female",value:n,handleGender:function(){s("female")}}),Object(d.jsx)(j,{icon:m,gender:"Other",alt:"other",value:n,handleGender:function(){s("other")}})]})]}),Object(d.jsxs)("div",{className:"inputs-container",children:[Object(d.jsxs)("div",{className:"input-wrapper",children:[Object(d.jsx)("h2",{className:"secondary-title",children:"Email"}),Object(d.jsx)("input",{className:"input-item",type:"email",placeholder:"Enter email",value:b,onChange:function(e){h(e.target.value)},required:!0})]}),Object(d.jsxs)("div",{className:"input-wrapper",children:[Object(d.jsx)("h2",{className:"secondary-title",children:"Password"}),Object(d.jsx)("input",{className:"input-item",type:k,placeholder:"Enter your password",value:x,src:o,onChange:function(e){f(e.target.value)},required:!0}),Object(d.jsx)("img",{src:o,alt:"input-icon",onClick:function(){F("password"===k?"text":"password")},className:"input-icon"})]}),Object(d.jsxs)("div",{className:"input-wrapper",children:[Object(d.jsx)("h2",{className:"secondary-title",children:"Confirm password"}),Object(d.jsx)("input",{className:"input-item",type:E,placeholder:"Confirm your password",value:w,src:o,onChange:function(e){y(e.target.value)},required:!0}),Object(d.jsx)("img",{src:o,alt:"input-icon",onClick:function(){I("password"===E?"text":"password")},className:"input-icon"})]})]}),Object(d.jsx)("button",{className:"sign-up-btn",onClick:function(){return P()&&Y()&&q()?alert("\n    You signed up!\n    Your gender: ".concat(n,"\n    Your email: ").concat(b,"\n    Your password: ").concat(x,"\n    ")):P()&&Y()&&q()?void 0:alert("\n    Please fill input fields correct or/and gender selection.\n    ")},children:"Sign Up"}),Object(d.jsxs)("div",{className:"form-footer",children:[Object(d.jsxs)("h2",{className:"footer-title",children:["Allready have an account?",Object(d.jsx)("span",{className:"title-additional-text",children:"Log in"})]}),Object(d.jsxs)("h2",{className:"footer-title",children:["Review privacy and disclosures",Object(d.jsx)("span",{className:"title-additional-text",children:"here"})]})]})]})})},h=function(){return Object(d.jsx)("div",{className:"App",children:Object(d.jsx)(b,{})})},O=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,15)).then((function(t){var n=t.getCLS,a=t.getFID,s=t.getFCP,c=t.getLCP,i=t.getTTFB;n(e),a(e),s(e),c(e),i(e)}))};i.a.render(Object(d.jsx)(s.a.StrictMode,{children:Object(d.jsx)(h,{})}),document.getElementById("root")),O()}],[[14,1,2]]]);
//# sourceMappingURL=main.10b512bb.chunk.js.map