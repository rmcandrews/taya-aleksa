"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[693],{3693:(e,a,t)=>{t.r(a),t.d(a,{default:()=>k});var l=t(2791);const s="Contact_container__RHnRs",n="Contact_or__3g6uB",o="Contact_emailUs__AULBt";var r=t(2506),i=t(2272);const c="ContactForm_loadingIcon__Pd1wl",d="ContactForm_validationError__I3bbw",m="ContactForm_containerContact__3+QfB",u="ContactForm_wrapContact__6J+GL",h="ContactForm_contactForm__XYQ0O",b="ContactForm_contactFormTitle__9qnhD",p="ContactForm_wrapInput__uCaVF",x="ContactForm_labelInput__9us+7",_="ContactForm_input__aY-hD",j="ContactForm_focusInput__LeBFe",v="ContactForm_select__2DllC",g="ContactForm_containerContactFormButton__HHAGu",y="ContactForm_wrapContactFormButton__Ky2ci",F="ContactForm_contactFormButton__tF94Z",N="ContactForm_validateInput__NdcYk";var C=t(184);const $=e=>{let{disabled:a,type:t,name:l,label:s,required:n,pattern:o,errors:i,touched:c,minLength:m,maxLength:u}=e;return(0,C.jsxs)(C.Fragment,{children:[(0,C.jsxs)("div",{className:"".concat(p," ").concat(N),children:[(0,C.jsxs)("label",{className:x,htmlFor:l,children:[s,n?" *":""]}),(0,C.jsx)(r.gN,{className:_,type:t,name:l,pattern:o,maxLength:u||"10000000",minLength:m||"0",disabled:a}),(0,C.jsx)("span",{className:j})]}),i&&i[l]&&c[l]?(0,C.jsx)("div",{className:d,children:i[l]}):null]})},f=e=>{let{type:a,name:t,label:l,required:s,placeholder:n,disabled:o}=e;return(0,C.jsxs)("div",{className:"".concat(p," ").concat(N),children:[(0,C.jsxs)("label",{className:x,htmlFor:t,children:[l,s?" *":""]}),(0,C.jsx)(r.gN,{className:_,type:a,name:t,component:"textarea",placeholder:n,disabled:o}),(0,C.jsx)("span",{className:j})]})},w=e=>{let{options:a,field:t,form:l,disabled:s}=e;return(0,C.jsx)(i.ZP,{openMenuOnFocus:!0,className:v,isSearchable:!1,options:a,name:t.name,value:a?a.find((e=>e.value===t.value)):"",onChange:e=>l.setFieldValue(t.name,e.value),onBlur:t.onBlur,styles:{control:e=>({...e,border:"0 !important",boxShadow:"0 !important","&:hover":{border:"0 !important"},outline:"none",fontFamily:"inherit",fontWeight:400})},components:{IndicatorSeparator:()=>null},theme:e=>({...e,borderRadius:0,colors:{...e.colors,text:"black",primary25:"#eee",primary:"black"}}),isDisabled:s})},q=e=>{let{type:a,name:t,label:l,required:s,options:n,errors:o,touched:i,disabled:c}=e;return(0,C.jsxs)(C.Fragment,{children:[(0,C.jsxs)("div",{className:"".concat(p," ").concat(N),children:[(0,C.jsxs)("label",{className:x,htmlFor:t,children:[l,s?" *":""]}),(0,C.jsx)(r.gN,{type:a,name:t,component:w,options:n,disabled:c}),(0,C.jsx)("span",{className:j})]}),o&&o[t]&&i[t]?(0,C.jsx)("div",{className:d,children:o[t]}):null]})},S=()=>{const[e,a]=(0,l.useState)(!1);return(0,C.jsx)(r.J9,{initialValues:{name:"",email:"",phoneNumber:"",budget:"",projectType:"",zipCode:"",message:""},validate:e=>{const a={};return e.name||(a.name="Required"),e.phoneNumber||(a.phoneNumber="Required"),e.zipCode||(a.zipCode="Required"),e.budget||(a.budget="Required"),e.projectType||(a.projectType="Required"),e.email?/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(e.email)||(a.email="Invalid email address"):a.email="Required",a},onSubmit:async(e,t)=>{let{setSubmitting:l}=t;var s;await(s=1e3,new Promise((e=>setTimeout(e,s))));try{const t=await fetch("https://soxig0htxb.execute-api.us-east-1.amazonaws.com/contactFormMessage",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)});if("Success"!==(await t.json()).status)throw Error("Send Failed");a(!0)}catch(n){console.error(n)}finally{l(!1)}},children:a=>{let{isSubmitting:t,errors:l,touched:s}=a;return(0,C.jsx)("div",{className:m,children:(0,C.jsxs)("div",{className:u,children:[(0,C.jsx)("div",{className:b,children:"Fill out the this form to inquire about a new project"}),(0,C.jsxs)(r.l0,{className:h,noValidate:!0,children:[(0,C.jsx)($,{type:"text",name:"name",label:"Name",errors:l,touched:s,required:!0,disabled:e||t}),(0,C.jsx)($,{type:"email",name:"email",label:"Email",errors:l,touched:s,required:!0,disabled:e||t}),(0,C.jsx)($,{type:"tel",name:"phoneNumber",label:"Phone Number",minLength:"10",maxLength:"11",errors:l,touched:s,required:!0,disabled:e||t}),(0,C.jsx)($,{type:"text",name:"zipCode",label:"Zip Code",pattern:"[0-9]*",maxLength:"5",errors:l,touched:s,required:!0,disabled:e||t}),(0,C.jsx)(q,{name:"budget",label:"Budget",required:!0,options:[{value:"$10,000-$20,000",label:"$10,000-$20,000"},{value:"$20,000-$35,000",label:"$20,000-$35,000"},{value:"$35,000-$50,000",label:"$35,000-$50,000"},{value:"$50,000-$70,000",label:"$50,000-$70,000"},{value:"$70,000-$100,000",label:"$70,000-$100,000"},{value:"$100,000+",label:"$100,000+"}],errors:l,touched:s,disabled:e||t}),(0,C.jsx)(q,{name:"projectType",label:"Project Type",required:!0,options:[{value:"Single Family",label:"Single Family"},{value:"Condo",label:"Condo"}],errors:l,touched:s,disabled:e||t}),(0,C.jsx)(f,{type:"text",name:"message",label:"Message",placeholder:"Tell us a bit about the project",disabled:e||t}),e?(0,C.jsxs)("div",{style:{fontSize:"1.25rem",textAlign:"center",lineHeight:1.2},children:["Your information has been submitted.",(0,C.jsx)("br",{}),"We will get back to you soon!"]}):(0,C.jsx)("div",{className:g,children:(0,C.jsx)("div",{className:y,children:(0,C.jsx)("button",{className:F,disabled:t,style:{color:t?"red":"white"},children:t?(0,C.jsxs)("div",{className:c,children:[(0,C.jsx)("div",{}),(0,C.jsx)("div",{}),(0,C.jsx)("div",{})]}):"Submit"})})})]})]})})}})},k=()=>(0,C.jsxs)("div",{className:s,children:[(0,C.jsx)(S,{}),(0,C.jsx)("div",{className:n,children:"OR"}),(0,C.jsxs)("div",{className:o,children:["email us at"," ",(0,C.jsx)("a",{href:"mailto: taya.aleksa@gmail.com",style:{textDecoration:"underline"},children:"taya.aleksa@gmail.com"})," ","for anything else"]})]})}}]);
//# sourceMappingURL=693.3beae12a.chunk.js.map