(this.webpackJsonpmessage=this.webpackJsonpmessage||[]).push([[0],{16:function(e,t,s){},22:function(e,t,s){},27:function(e,t,s){},29:function(e,t,s){},30:function(e,t,s){},31:function(e,t,s){},32:function(e,t,s){"use strict";s.r(t);var c=s(4),a=s.n(c),n=s(17),i=s.n(n),r=(s(22),s(12)),l=s.n(r),j=s(15),o=s(8),d=(s(16),s(24),s(9)),u=(s(33),s(27),s(1)),b=function(e){var t=e.onClick,s=void 0===t?null:t,c=e.children,a=void 0===c?null:c;return Object(u.jsx)(u.Fragment,{children:Object(u.jsx)("button",{className:"sign__button",onClick:s,children:a})})},h=(s(29),s(10)),m=(s(30),s.p+"static/media/search.da3387c7.svg"),O=(s(31),s.p+"static/media/send.da88ad74.svg"),p=function(e){var t=e.user,s=e.messageDB,a=e.messageID,n=e.image,i=e.name,r=e.active,l=Object(c.useState)([]),j=Object(o.a)(l,2),b=j[0],m=j[1],p=Object(c.useState)(""),x=Object(o.a)(p,2),g=x[0],v=x[1],f=t.uid,N=t.displayName,_=t.photoURL;Object(c.useEffect)((function(){s&&s.collection("messages").doc("".concat(a)).collection("message").orderBy("date").onSnapshot((function(e){var t=e.docs.map((function(e){return Object(h.a)(Object(h.a)({},e.data()),{},{id:e.id})}));m(t)}))}),[a,s]);return Object(u.jsx)(u.Fragment,{children:Object(u.jsxs)("div",{className:r?"chat show":"chat",children:[Object(u.jsxs)("div",{className:"chat__users",children:[Object(u.jsx)("img",{src:n,alt:"avatar"}),Object(u.jsx)("p",{children:i})]}),Object(u.jsx)("div",{className:"messages",children:b.map((function(e){return Object(u.jsx)(u.Fragment,{children:f===e.uid?Object(u.jsxs)("div",{className:"messages__left",children:[Object(u.jsxs)("div",{className:"message",children:[Object(u.jsx)("p",{className:"main__message",children:e.text}),Object(u.jsx)("p",{children:"".concat(new Date(1e3*e.date-62135638488e3).toLocaleDateString()," ").concat(new Date(1e3*e.date).toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"}))})]}),Object(u.jsx)("img",{src:e.photoURL,alt:"avatar"})]},e.id):Object(u.jsxs)("div",{className:"messages__right",children:[Object(u.jsx)("img",{src:e.photoURL,alt:"avatar"}),Object(u.jsxs)("div",{className:"message",children:[Object(u.jsx)("p",{className:"main__message",children:e.text}),Object(u.jsx)("p",{children:"".concat(new Date(1e3*e.date-62135638488e3).toLocaleDateString()," ").concat(new Date(1e3*e.date).toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"}))})]})]},e.id)})}))}),Object(u.jsxs)("form",{onSubmit:function(e){e.preventDefault(),s&&s.collection("messages").doc("".concat(a)).collection("message").add({text:g,date:d.a.firestore.FieldValue.serverTimestamp(),uid:f,displayName:N,photoURL:_}),v("")},className:"send__messages",children:[Object(u.jsx)("input",{onChange:function(e){v(e.target.value)},type:"text",value:g,placeholder:"Type Your message..."}),Object(u.jsx)("button",{children:Object(u.jsx)("img",{src:O,alt:"send button"})})]})]})})},x=function(e){var t=e.user,s=e.messageDB,a=e.active,n=Object(c.useState)([]),i=Object(o.a)(n,2),r=i[0],l=i[1],j=Object(c.useState)([]),d=Object(o.a)(j,2),b=d[0],O=d[1],x=Object(c.useState)(),g=Object(o.a)(x,2),v=g[0],f=g[1],N=Object(c.useState)(),_=Object(o.a)(N,2),S=_[0],D=_[1],w=Object(c.useState)(),k=Object(o.a)(w,2),F=k[0],I=k[1];Object(c.useEffect)((function(){s&&(s.collection("users").onSnapshot((function(e){var t=e.docs.map((function(e){return Object(h.a)(Object(h.a)({},e.data()),{},{id:e.id})}));l(t)})),s.collection("messages").onSnapshot((function(e){var t=e.docs.map((function(e){return Object(h.a)(Object(h.a)({},e.data()),{},{id:e.id})}));O(t)})))}),[s]);return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsxs)("div",{className:a?"user__page-list show":"user__page-list",children:[Object(u.jsxs)("div",{className:"users__list",children:[Object(u.jsx)("h1",{children:"Users"}),Object(u.jsxs)("ul",{children:[Object(u.jsx)("li",{className:"user-search",children:Object(u.jsx)("a",{href:"#",children:Object(u.jsx)("img",{src:m})})}),r.map((function(e){return Object(u.jsx)(u.Fragment,{children:e.uid!==t.uid?Object(u.jsx)("li",{className:"user-logo",children:Object(u.jsx)("button",{onClick:function(){return c=e,void(s&&s.collection("messages").add({userSecondID:t.uid,userFirstID:c.uid}));var c},children:Object(u.jsx)("img",{src:e.photo})})},e.id):null})}))]})]}),Object(u.jsxs)("ul",{className:"user-list",children:[Object(u.jsx)("h1",{className:"user-list-title",children:"Messages"}),b.map((function(e){var s=r.map((function(t){return t.uid.includes(e.userFirstID)?t.photo:null})),c=r.map((function(t){return t.uid.includes(e.userFirstID)?t.name:null}));return Object(u.jsx)(u.Fragment,{children:e.userFirstID===t.uid||e.userSecondID===t.uid?Object(u.jsx)("li",{children:Object(u.jsxs)("a",{onClick:function(t){return function(e,t,s,c){t.preventDefault(),f(e),D(s),I(c)}(e.id,t,s,c)},href:"",className:"users",children:[Object(u.jsx)("img",{src:s,alt:"avatar"}),Object(u.jsx)("div",{className:"user-description",children:Object(u.jsx)("h1",{className:"user-desc-unread",children:c})})]})},e.id):null})}))]})]}),v?Object(u.jsx)(p,{user:t,messageDB:s,messageID:v,image:S,name:F,active:a}):null]})},g=function(e){var t=e.user,s=e.messageDB,c=(e.users,e.active);e.checkUser;return Object(u.jsx)(u.Fragment,{children:Object(u.jsx)("section",{className:"main__page",children:Object(u.jsx)("div",{className:"container",children:Object(u.jsx)(x,{user:t,messageDB:s,active:c})})})})};d.a.initializeApp({apiKey:"AIzaSyDiGHuehmVjeTB08DcTVueINPfnZ6atwTQ",authDomain:"message-appk.firebaseapp.com",projectId:"message-appk",storageBucket:"message-appk.appspot.com",messagingSenderId:"1088403228949",appId:"1:1088403228949:web:df373df2e84773f654c11c"});var v=d.a.auth(),f=d.a.firestore(),N=function(){var e=Object(c.useState)((function(){return v.currentUser})),t=Object(o.a)(e,2),s=t[0],a=t[1],n=Object(c.useState)(!0),i=Object(o.a)(n,2),r=i[0],h=i[1],m=Object(c.useState)(!1),O=Object(o.a)(m,2),p=O[0],x=O[1];Object(c.useEffect)((function(){return v.onAuthStateChanged((function(e){if(e){a(e);var t=e.uid,s=e.displayName,c=e.photoURL;f.collection("users").doc("".concat(t)).set({name:s,photo:c,uid:t})}else a(null);r&&h(!1)}))}),[r]);var N=function(){var e=Object(j.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=new d.a.auth.GoogleAuthProvider,v.useDeviceLanguage(),e.prev=2,e.next=5,v.signInWithPopup(t);case 5:e.next=10;break;case 7:e.prev=7,e.t0=e.catch(2),console.error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[2,7]])})));return function(){return e.apply(this,arguments)}}(),_=function(){var e=Object(j.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,d.a.auth().signOut();case 3:e.next=8;break;case 5:e.prev=5,e.t0=e.catch(0),console.log(e.t0.message);case 8:case"end":return e.stop()}}),e,null,[[0,5]])})));return function(){return e.apply(this,arguments)}}();return r?"Loading...":Object(u.jsx)(u.Fragment,{children:s?Object(u.jsxs)("div",{className:"page",children:[Object(u.jsx)("header",{className:"app__header",children:Object(u.jsxs)("div",{className:"container",children:[Object(u.jsxs)("button",{onClick:function(e){e.preventDefault(),x(!p)},className:"hamburger",children:[Object(u.jsx)("span",{}),Object(u.jsx)("span",{}),Object(u.jsx)("span",{})]}),Object(u.jsx)("div",{className:"logo",children:Object(u.jsxs)("h1",{className:"logo-title",children:[Object(u.jsx)("strong",{children:"Super"}),Object(u.jsx)("span",{children:"Message app"})]})}),Object(u.jsx)("nav",{className:"app__header-nav",children:Object(u.jsxs)("ul",{className:"nav-list",children:[Object(u.jsx)("li",{className:"nav-list-text",children:Object(u.jsx)(b,{onClick:_,children:"Sign Out"})}),Object(u.jsx)("li",{className:"nav-list-text",children:Object(u.jsx)("a",{href:"",children:Object(u.jsx)("img",{src:s.photoURL})})})]})})]})}),Object(u.jsx)(g,{user:s,messageDB:f,active:p})]}):Object(u.jsxs)("div",{className:"page",children:[Object(u.jsx)("header",{className:"app__header",children:Object(u.jsxs)("div",{className:"container",children:[Object(u.jsx)("div",{className:"logo",children:Object(u.jsxs)("h1",{className:"logo-title",children:[Object(u.jsx)("strong",{children:"Super"}),Object(u.jsx)("span",{children:"Message app"})]})}),Object(u.jsx)("nav",{className:"app__header-nav",children:Object(u.jsx)("ul",{className:"nav-list",children:Object(u.jsx)("li",{className:"nav-list-text",children:Object(u.jsx)(b,{onClick:N,children:"Sign In"})})})})]})}),Object(u.jsx)("div",{className:"main__page_signout",children:Object(u.jsxs)("div",{className:"main__page_signout-text",children:[Object(u.jsxs)("h1",{className:"logo-title",children:[Object(u.jsx)("strong",{children:"Super"}),Object(u.jsx)("span",{children:"Message app"})]}),Object(u.jsx)("h1",{children:"Sign in to use application"})]})}),Object(u.jsxs)("section",{children:[Object(u.jsx)("div",{className:"wave wave1"}),Object(u.jsx)("div",{className:"wave wave2"}),Object(u.jsx)("div",{className:"wave wave3"}),Object(u.jsx)("div",{className:"wave wave4"})]})]})})},_=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,34)).then((function(t){var s=t.getCLS,c=t.getFID,a=t.getFCP,n=t.getLCP,i=t.getTTFB;s(e),c(e),a(e),n(e),i(e)}))};i.a.render(Object(u.jsx)(a.a.StrictMode,{children:Object(u.jsx)(N,{})}),document.getElementById("root")),_()}},[[32,1,2]]]);
//# sourceMappingURL=main.3f3b7ed3.chunk.js.map