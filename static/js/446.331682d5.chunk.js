"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[446],{5446:function(n,e,t){t.r(e),t.d(e,{default:function(){return L}});var r,a,o,i,s,c,d=t(9434),u=function(n){return n.contacts.items},l=function(n){return n.filter},p=function(n){return n.contacts.error},f=function(n){return n.contacts.isLoading},x=t(208),m=t(168),h=t(5867),b=h.ZP.div(r||(r=(0,m.Z)(["\n  display: flex;\n  flex-direction: column;\n"]))),v=h.ZP.input(a||(a=(0,m.Z)(["\n  width: 150px;\n  border-radius: 5px;\n  \n  border: 1px solid #000000;\n  padding: 2px;\n"]))),j=h.ZP.button(o||(o=(0,m.Z)(["\n  padding: 10px;\n  margin: 15px;\n  border-radius: 5px;\nbackground-color: #ff0000;\n  border: 2px solid #ff0000;\n  margin-top: 20px;\n\n"]))),g=t(184),Z=function(){var n=(0,d.I0)(),e=(0,d.v9)(u);return(0,g.jsxs)("form",{onSubmit:function(t){t.preventDefault();var r=t.target,a=r.elements.text.value;e.find((function(n){return n.name.toLowerCase()===a.toLowerCase()}))?alert("".concat(a," is already in contacts.")):(n((0,x.uK)({name:a,number:r.elements.number.value})),r.reset())},children:[(0,g.jsx)(b,{children:(0,g.jsx)(v,{placeholder:"name",type:"text",name:"text",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0})}),(0,g.jsx)("div",{children:(0,g.jsx)(v,{placeholder:"phone",type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0})}),(0,g.jsx)(j,{type:"submit",children:"Add contact"})]})},y=t(2791),C=h.ZP.div(i||(i=(0,m.Z)(["\n    display:flex;\n    flex-direction:column;\n"]))),w=function(){var n=(0,d.v9)(u),e=(0,d.v9)(l),t=(0,d.I0)();return(0,y.useEffect)((function(){t((0,x.yF)())}),[t]),(0,g.jsx)(C,{children:(0,g.jsx)("ul",{children:function(){var t=e?e.toLowerCase().trim():"";return n.filter((function(n){return n.name.toLowerCase().includes(t)}))}().map((function(n){return(0,g.jsxs)("li",{children:[n.name," ",n.number,(0,g.jsx)("button",{onClick:function(){t((0,x.GK)(n.id))},children:"Delete"})]},n.id)}))})})},A=h.ZP.input(s||(s=(0,m.Z)(["\n  width: 150px;\n  border-radius: 5px;\n  \n  border: 1px solid black;\n  padding: 2px;\n"]))),k=t(2126),z=function(){var n=(0,d.I0)(),e=(0,d.v9)(l),t=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:21;return crypto.getRandomValues(new Uint8Array(n)).reduce((function(n,e){return n+((e&=63)<36?e.toString(36):e<62?(e-26).toString(36).toUpperCase():e>62?"-":"_")}),"")}();return(0,g.jsxs)("div",{children:[(0,g.jsx)("h2",{children:"Find contacts by name"}),(0,g.jsx)(A,{id:t,type:"text",value:e,onChange:function(e){return n((0,k.M)(e.target.value))},name:"filter",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' \\-][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"})]})},P=t(7590),F=h.zo.div(c||(c=(0,m.Z)(["\n  \n  background-color: #657cfc;\n"])));function L(){var n=(0,d.I0)(),e=(0,d.v9)(f),t=(0,d.v9)(p);return(0,y.useEffect)((function(){n((0,x.yF)())}),[n]),(0,g.jsxs)(F,{children:[(0,g.jsx)("h2",{children:"Phonebook"}),(0,g.jsx)(Z,{}),(0,g.jsx)("h2",{children:"Contacts"}),(0,g.jsx)(z,{}),(0,g.jsx)(w,{}),e&&!t&&(0,g.jsx)(P.a,{})]})}}}]);
//# sourceMappingURL=446.331682d5.chunk.js.map