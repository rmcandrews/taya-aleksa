(this.webpackJsonpwebsite=this.webpackJsonpwebsite||[]).push([[7],{103:function(e,t,a){e.exports={validationError:"ContactForm_validationError__xPegF",submitButton:"ContactForm_submitButton__BzXH-",containerContact:"ContactForm_containerContact__1Uq45",wrapContact:"ContactForm_wrapContact__59I_x",contactForm:"ContactForm_contactForm__1Nlv1",contactFormTitle:"ContactForm_contactFormTitle__2pNvk",wrapInput:"ContactForm_wrapInput__3bTL7",labelInput:"ContactForm_labelInput__2lb_O",input:"ContactForm_input__3McRf",focusInput:"ContactForm_focusInput__1hzXB",select:"ContactForm_select__1G9fp",hasVal:"ContactForm_hasVal__1pnqx",containerContactFormButton:"ContactForm_containerContactFormButton__Rutn_",wrapContactFormButton:"ContactForm_wrapContactFormButton__zNLpz",contactFormButton:"ContactForm_contactFormButton__3L3n9","contactForm-bgbtn":"ContactForm_contactForm-bgbtn__23D1D",validateInput:"ContactForm_validateInput__1Ioa2",alertValidate:"ContactForm_alertValidate__xU0dk"}},108:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return f}));var n=a(0),r=a.n(n),o=a(96),c=a.n(o),l=a(97),i=a.n(l),m=a(99),u=a(21),s=a(104),p=a(105),d=a(103),b=a.n(d),_=function(e){var t=e.type,a=e.name,n=e.label,o=e.required,c=e.pattern,l=e.errors,i=e.touched;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"".concat(b.a.wrapInput," ").concat(b.a.validateInput)},r.a.createElement("label",{className:b.a.labelInput,htmlFor:a},n,o?" *":""),r.a.createElement(s.a,{className:b.a.input,type:t,name:a,pattern:c}),r.a.createElement("span",{className:b.a.focusInput})),l&&l[a]&&i[a]?r.a.createElement("div",{className:b.a.validationError},l[a]):null)},v=function(e){var t=e.type,a=e.name,n=e.label,o=e.required,c=e.placeholder;return r.a.createElement("div",{className:"".concat(b.a.wrapInput," ").concat(b.a.validateInput)},r.a.createElement("label",{className:b.a.labelInput,htmlFor:a},n,o?" *":""),r.a.createElement(s.a,{className:b.a.input,type:t,name:a,component:"textarea",placeholder:c}),r.a.createElement("span",{className:b.a.focusInput}))},F=function(e){var t=e.options,a=e.field,n=e.form,o={control:function(e){return Object(u.a)(Object(u.a)({},e),{},{border:"0 !important",boxShadow:"0 !important","&:hover":{border:"0 !important"},outline:"none",fontFamily:"inherit",fontWeight:400})}};return r.a.createElement(p.a,{openMenuOnFocus:!0,className:b.a.select,isSearchable:!1,options:t,name:a.name,value:t?t.find((function(e){return e.value===a.value})):"",onChange:function(e){return n.setFieldValue(a.name,e.value)},onBlur:a.onBlur,styles:o,components:{IndicatorSeparator:function(){return null}},theme:function(e){return Object(u.a)(Object(u.a)({},e),{},{borderRadius:0,colors:Object(u.a)(Object(u.a)({},e.colors),{},{text:"black",primary25:"#eee",primary:"black"})})}})},h=function(e){var t=e.type,a=e.name,n=e.label,o=e.required,c=e.options,l=e.errors,i=e.touched;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"".concat(b.a.wrapInput," ").concat(b.a.validateInput)},r.a.createElement("label",{className:b.a.labelInput,htmlFor:a},n,o?" *":""),r.a.createElement(s.a,{type:t,name:a,component:F,options:c}),r.a.createElement("span",{className:b.a.focusInput})),l&&l[a]&&i[a]?r.a.createElement("div",{className:b.a.validationError},l[a]):null)},C=function(){return r.a.createElement(s.c,{initialValues:{name:"",email:"",phoneNumber:"",budget:"",projectType:"",zipCode:"",messageText:""},validate:function(e){var t={};return e.name||(t.name="Required"),e.phoneNumber||(t.phoneNumber="Required"),e.zipCode||(t.zipCode="Required"),e.budget||(t.budget="Required"),e.projectType||(t.projectType="Required"),e.email?/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(e.email)||(t.email="Invalid email address"):t.email="Required",t},onSubmit:function(){var e=Object(m.a)(i.a.mark((function e(t,a){var n,r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=a.setSubmitting,e.prev=1,e.next=4,fetch("https://c7xliptij2.execute-api.us-east-1.amazonaws.com/DeploymentStage/",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)});case 4:return r=e.sent,e.next=7,r.json();case 7:if("Success"===e.sent.status){e.next=10;break}throw Error("Send Failed");case 10:e.next=15;break;case 12:e.prev=12,e.t0=e.catch(1),console.error(e.t0);case 15:return e.prev=15,n(!1),e.finish(15);case 18:case"end":return e.stop()}}),e,null,[[1,12,15,18]])})));return function(t,a){return e.apply(this,arguments)}}()},(function(e){var t=e.isSubmitting,a=e.errors,n=e.touched;e.submitCount;return r.a.createElement("div",{className:b.a.containerContact},r.a.createElement("div",{className:b.a.wrapContact},r.a.createElement("div",{className:b.a.contactFormTitle},"Fill out the this form to inquire about a new project"),r.a.createElement(s.b,{className:b.a.contactForm,noValidate:!0},r.a.createElement(_,{type:"text",name:"name",label:"Name",errors:a,touched:n,required:!0}),r.a.createElement(_,{type:"email",name:"email",label:"Email",errors:a,touched:n,required:!0}),r.a.createElement(_,{type:"tel",name:"phoneNumber",label:"Phone Number",errors:a,touched:n,required:!0}),r.a.createElement(_,{type:"text",name:"zipCode",label:"Zip Code",pattern:"[0-9]*",errors:a,touched:n,required:!0}),r.a.createElement(h,{name:"budget",label:"Budget",required:!0,options:[{value:"$10,000-$20,000",label:"$10,000-$20,000"},{value:"$20,000-$35,000",label:"$20,000-$35,000"},{value:"$35,000-$50,000",label:"$35,000-$50,000"},{value:"$50,000-$70,000",label:"$50,000-$70,000"},{value:"$70,000-$100,000",label:"$70,000-$100,000"},{value:"$100,000+",label:"$100,000+"}],errors:a,touched:n}),r.a.createElement(h,{name:"projectType",label:"Project Type",required:!0,options:[{value:"Single Family",label:"Single Family"},{value:"Condo",label:"Condo"}],errors:a,touched:n}),r.a.createElement(v,{type:"text",name:"messageText",label:"Message",placeholder:"Tell us a bit about the project"}),r.a.createElement("div",{className:b.a.containerContactFormButton},r.a.createElement("div",{className:b.a.wrapContactFormButton},r.a.createElement("button",{className:b.a.contactFormButton,disabled:t},"Submit"))))))}))},f=function(){return r.a.createElement("div",{className:c.a.container},r.a.createElement(C,null),r.a.createElement("div",{style:{paddingTop:"3rem",paddingBottom:"1rem",fontSize:"1.5rem"}},"OR"),r.a.createElement("div",null,"email us at"," ",r.a.createElement("a",{href:"mailto: taya.aleksa@gmail.com",style:{textDecoration:"underline"}},"taya.aleksa@gmail.com")," ","for anything else"))}},96:function(e,t,a){e.exports={container:"Contact_container__1tx2y",list:"Contact_list__2GdC8",socialsList:"Contact_socialsList__7kYSA"}}}]);
//# sourceMappingURL=7.5c7cfba4.chunk.js.map