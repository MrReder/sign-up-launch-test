(this["webpackJsonpsign-up-test"]=this["webpackJsonpsign-up-test"]||[]).push([[0],[,,,,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},,function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),s=n(4),i=n.n(s),r=(n(9),n(10),n(2)),l=(n(11),n.p+"static/media/topIcon.51e49696.svg"),o=n.p+"static/media/inputIcon.69a86a9f.svg",d=(n(12),n(0)),j=function(e){var t=e.icon,n=e.gender,a=e.gendercontainer,c=e.handleGender,s=e.alt;return Object(d.jsxs)("div",{gendercontainer:a,className:"".concat(c()?"gender-choosen":""," gender-box"),onClick:c,children:[Object(d.jsx)("img",{src:t,alt:s,className:"gender-icon"}),Object(d.jsx)("span",{className:"gender-text",children:n})]})},u=n.p+"static/media/male1.ca979ef2.svg",p=n.p+"static/media/male1Clicked.3c29a19d.svg",m=n.p+"static/media/female1.b65a885b.svg",b=(n.p,n.p+"static/media/other.ea994d73.svg"),h=function(){var e=Object(a.useState)(" "),t=Object(r.a)(e,2),n=t[0],c=t[1],s=Object(a.useState)(" "),i=Object(r.a)(s,2),h=i[0],O=i[1],g=Object(a.useState)(""),x=Object(r.a)(g,2),f=x[0],v=x[1],N=Object(a.useState)(""),w=Object(r.a)(N,2),S=w[0],C=w[1],y=Object(a.useState)("password"),k=Object(r.a)(y,2),F=k[0],G=k[1],L=Object(a.useState)("password"),E=Object(r.a)(L,2),I=E[0],M=E[1],P=Object(a.useState)(u),Y=Object(r.a)(P,2),q=(Y[0],Y[1],Object(a.useState)("")),A=Object(r.a)(q,2),U=A[0],B=A[1],D=function(){console.log(n,"hello"),c("male")},J=function(){return/\S+@\S+\.\S+/.test(h.toLowerCase())},T=function(){return/[a-zA-Z0-9]{6,50}/.test(f)},z=function(){return f===S};return Object(d.jsx)("div",{className:"sign-up-page-wrapper",children:Object(d.jsxs)("form",{className:"form-container",children:[Object(d.jsxs)("div",{className:"form-header",children:[Object(d.jsx)("img",{src:l,alt:"top-icon",className:"top-icon"}),Object(d.jsx)("h1",{className:"main-title",children:"Sign Up with email"})]}),Object(d.jsxs)("div",{className:"gender-container",children:[Object(d.jsx)("h2",{className:"secondary-title",style:{marginLeft:"0"},children:"Gender"}),Object(d.jsxs)("div",{className:"gender-boxes-wrapper",children:[Object(d.jsx)(j,{icon:D?u:p,gender:"Male",alt:"male",value:n,handleGender:D}),Object(d.jsx)(j,{icon:m,gender:"Female",alt:"female",value:n,handleGender:function(){c("female")}}),Object(d.jsx)(j,{icon:b,gender:"Other",alt:"other",value:n,handleGender:function(){c("other")}})]})]}),Object(d.jsxs)("div",{className:"inputs-container",children:[Object(d.jsxs)("div",{className:"input-wrapper",children:[Object(d.jsx)("h2",{className:"secondary-title",children:"Email"}),Object(d.jsx)("input",{className:"".concat(J()?"valid":"invalid"," input-item"),type:"email",placeholder:"Enter email",value:h,onChange:function(e){O(e.target.value)},required:!0}),J?Object(d.jsx)("span",{}):Object(d.jsx)("span",{className:"invalid",children:"Wrong email"})]}),Object(d.jsxs)("div",{className:"input-wrapper",children:[Object(d.jsx)("h2",{className:"secondary-title",children:"Password"}),Object(d.jsx)("input",{className:"input-item",type:F,placeholder:"Enter your password",value:f,src:o,onChange:function(e){v(e.target.value)},required:!0}),Object(d.jsx)("img",{src:o,alt:"input-icon",onClick:function(){G("password"===F?"text":"password")},className:"input-icon"})]}),Object(d.jsxs)("div",{className:"input-wrapper",children:[Object(d.jsx)("h2",{className:"secondary-title",children:"Confirm password"}),Object(d.jsx)("input",{className:"input-item",type:I,placeholder:"Confirm your password",value:S,src:o,onChange:function(e){C(e.target.value)},required:!0}),Object(d.jsx)("img",{src:o,alt:"input-icon",onClick:function(){M("password"===I?"text":"password")},className:"input-icon"})]})]}),Object(d.jsx)("button",{className:"".concat(U," sign-up-btn"),onClick:function(){return J()&&T()&&z()?alert("\n    You signed up!\n    Your gender: ".concat(n,"\n    Your email: ").concat(h,"\n    Your password: ").concat(f,"\n    ")):J()&&T()&&z()?void 0:alert("\n    Please fill input fields correct or/and gender selection.\n    ")},onMouseDown:function(){B("pushed")},onMouseUp:function(){B("unpushed")},children:"Sign Up"}),Object(d.jsxs)("div",{className:"form-footer",children:[Object(d.jsxs)("h2",{className:"footer-title",children:["Allready have an account?",Object(d.jsx)("span",{className:"title-additional-text",children:"Log in"})]}),Object(d.jsxs)("h2",{className:"footer-title",children:["Review privacy and disclosures",Object(d.jsx)("span",{className:"title-additional-text",children:"here"})]})]})]})})},O=function(){return Object(d.jsx)("div",{className:"App",children:Object(d.jsx)(h,{})})},g=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,15)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,s=t.getLCP,i=t.getTTFB;n(e),a(e),c(e),s(e),i(e)}))};i.a.render(Object(d.jsx)(c.a.StrictMode,{children:Object(d.jsx)(O,{})}),document.getElementById("root")),g()}],[[14,1,2]]]);
//# sourceMappingURL=main.d729c005.chunk.js.map