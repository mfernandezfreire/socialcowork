(this.webpackJsonpsocialcowork=this.webpackJsonpsocialcowork||[]).push([[0],{35:function(e,t,a){e.exports=a(65)},40:function(e,t,a){},41:function(e,t,a){},59:function(e,t,a){},65:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(31),s=a.n(l),o=(a(40),a(4)),c=a(6),u=a(8),i=a(7),m=a(9),h=(a(41),a(11)),p=a(16),d=a(13),g=a(17),f=a.n(g),v=function e(){var t=this;Object(o.a)(this,e),this.signup=function(e,a,n,r){return t.service.post("/signup",{username:e,password:a,campus:n,course:r}).then((function(e){return e.data}))},this.login=function(e,a){return t.service.post("/login",{username:e,password:a}).then((function(e){return e.data}))},this.loggedin=function(){return t.service.get("/currentUser").then((function(e){return e.data}))},this.logout=function(){return t.service.get("/logout").then((function(e){return e.data}))},this.service=f.a.create({baseURL:"".concat("https://socialcoworker.herokuapp.com/api","/auth"),withCredentials:!0})},E=(a(59),function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(u.a)(this,Object(i.a)(t).call(this,e))).handleLogout=function(e){a.props.logout()},a.state={loggedInUser:null},a.service=new v,a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"componentWillReceiveProps",value:function(e){this.setState(Object(p.a)({},this.state,{loggedInUser:e.userInSession}))}},{key:"render",value:function(){return this.state.loggedInUser?r.a.createElement("nav",{className:"nav-style"},r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("h2",null,"Welcome ",this.state.loggedInUser.username)),r.a.createElement("li",null,r.a.createElement("a",{onClick:this.handleLogout},"Logout"))),r.a.createElement("div",{className:"header"},r.a.createElement("h2",null,"Welcome ",this.state.loggedInUser.username),r.a.createElement("h2",null,"Welcome ",this.state.loggedInUser._id))):r.a.createElement("div",null,r.a.createElement("nav",{className:"nav-style"},r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(d.b,{to:"/login"},"Login")))))}}]),t}(n.Component)),b=a(14),w=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(u.a)(this,Object(i.a)(t).call(this,e))).handleFormSubmit=function(e){e.preventDefault();var t=a.state.username,n=a.state.password,r=a.state.campus,l=a.state.course;a.service.signup(t,n,r,l).then((function(e){a.setState({username:"",password:"",campus:"",course:""}),a.props.getUser(e.user)})).catch((function(e){a.setState({username:t,password:n,campus:r,course:l,error:!0})}))},a.handleChange=function(e){var t=e.target,n=t.name,r=t.value;a.setState(Object(b.a)({},n,r))},a.state={username:"",password:"",campus:"",course:""},a.service=new v,a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement("h3",null,"\xbf\xbfCrea un proyecto o colabora, este es el comienzo!!"),r.a.createElement("form",{onSubmit:this.handleFormSubmit},r.a.createElement("fieldset",null,r.a.createElement("label",null,"Username:"),r.a.createElement("input",{type:"text",name:"username",value:this.state.username,onChange:function(t){return e.handleChange(t)}})),r.a.createElement("fieldset",null,r.a.createElement("label",null,"Password:"),r.a.createElement("input",{type:"password",name:"password",value:this.state.password,onChange:function(t){return e.handleChange(t)}})),r.a.createElement("fieldset",null,r.a.createElement("label",null,"Campus"),r.a.createElement("select",{name:"campus",value:this.state.campus,onChange:function(t){return e.handleChange(t)}},r.a.createElement("option",{value:"Madrid",selected:!0},"Madrid"),r.a.createElement("option",{value:"Barcelona"},"Barcelona"),r.a.createElement("option",{value:"Paris"},"Paris"),r.a.createElement("option",{value:"Berlin"},"Berlin"),r.a.createElement("option",{value:"Amsterdam"},"Amsterdam"),r.a.createElement("option",{value:"Mexico"},"Mexico"),r.a.createElement("option",{value:"Sao Paulo"},"Sao Paulo"),r.a.createElement("option",{value:"Lisbon"},"Lisbon"))),r.a.createElement("fieldset",null,r.a.createElement("label",null,"Course"),r.a.createElement("select",{name:"course",value:this.state.course,onChange:function(t){return e.handleChange(t)}},r.a.createElement("option",{value:"WebDev",selected:!0},"WebDev"),r.a.createElement("option",{value:"UX/UI"},"UX/UI"),r.a.createElement("option",{value:"Data Analytics"},"Data Analytics"))),r.a.createElement("input",{type:"submit",value:"Sign up"})),r.a.createElement("h1",null,this.state.error?"Error":""))}}]),t}(n.Component),y=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(u.a)(this,Object(i.a)(t).call(this,e))).handleFormSubmit=function(e){e.preventDefault();var t=a.state.username,n=a.state.password;a.service.login(t,n).then((function(e){a.setState({username:t,password:n,error:!1}),a.props.getUser(e)})).catch((function(e){a.setState({username:t,password:n,error:!0})}))},a.handleChange=function(e){var t=e.target,n=t.name,r=t.value;a.setState(Object(b.a)({},n,r))},a.state={username:"",password:""},a.service=new v,a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement("h3",null,"Please, login to our site"),r.a.createElement("form",{onSubmit:this.handleFormSubmit},r.a.createElement("fieldset",null,r.a.createElement("label",null,"Username:"),r.a.createElement("input",{type:"text",name:"username",value:this.state.username,onChange:function(t){return e.handleChange(t)}})),r.a.createElement("fieldset",null,r.a.createElement("label",null,"Password:"),r.a.createElement("input",{type:"password",name:"password",value:this.state.password,onChange:function(t){return e.handleChange(t)}})),r.a.createElement("input",{type:"submit",value:"Login"})),r.a.createElement("h1",null,this.state.error?"Error":""))}}]),t}(n.Component),U=a(34),j=f.a.create({baseURL:"http://localhost:3010/api",withCredentials:!0}),O=function(e){if(e.response&&e.response.data)throw e.response.data.message;throw e},C=function(e){var t=new FormData;return t.append("photo",e),j.post("/auth/upload",t,{headers:{"Content-Type":"multipart/form-data"}}).then((function(e){return e.data})).catch(O)},S=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(u.a)(this,Object(i.a)(t).call(this,e))).state={file:null,photos:[],username:null},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"handleChange",value:function(e){console.log("archivos seleccionado"),console.log(e.target.files[0]),this.setState(Object(p.a)({},this.state,{file:e.target.files[0]}))}},{key:"handleSubmit",value:function(e){var t=this;e.preventDefault(),C(this.state.file).then((function(e){var a=Object(U.a)(t.state.photos);a.push(e.url),t.setState(Object(p.a)({},t.state,{photos:a}))}))}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"Contents"},r.a.createElement("div",null,r.a.createElement("p",null,"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.")),");",r.a.createElement("h2",null,"Photo Upload"),r.a.createElement("form",{onSubmit:function(t){return e.handleSubmit(t)}},r.a.createElement("input",{type:"file",onChange:function(t){return e.handleChange(t)}})," ",r.a.createElement("br",null),r.a.createElement("button",{type:"submit"},"Upload photo")),this.state.photos.map((function(e){return r.a.createElement("img",{key:e.url,src:e.url,alt:""})})))}}]),t}(n.Component),k=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(u.a)(this,Object(i.a)(t).call(this,e))).getUser=function(e){a.setState({loggedInUser:e})},a.logout=function(){a.service.logout().then((function(){a.setState({loggedInUser:null})}))},a.state={loggedInUser:null},a.service=new v,a.fetchUser(),a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"fetchUser",value:function(){var e=this;return this.service.loggedin().then((function(t){e.setState({loggedInUser:t})})).catch((function(t){e.setState({loggedInUser:!1})}))}},{key:"render",value:function(){var e=this;return this.state.loggedInUser?r.a.createElement(r.a.Fragment,null,r.a.createElement(h.a,{to:"/home"}),r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"},r.a.createElement(E,{userInSession:this.state.loggedInUser,logout:this.logout}),r.a.createElement(S,null)))):r.a.createElement(r.a.Fragment,null,r.a.createElement(h.a,{to:"/login"}),r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"},r.a.createElement(E,{userInSession:this.state.loggedInUser,logout:this.logout}),r.a.createElement(h.d,null,r.a.createElement(h.b,{exact:!0,path:"/signup",render:function(){return r.a.createElement(w,{getUser:e.getUser})}}),r.a.createElement(h.b,{exact:!0,path:"/login",render:function(){return r.a.createElement(y,{getUser:e.getUser})}})))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(d.a,null,r.a.createElement(k,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[35,1,2]]]);
//# sourceMappingURL=main.9e922217.chunk.js.map