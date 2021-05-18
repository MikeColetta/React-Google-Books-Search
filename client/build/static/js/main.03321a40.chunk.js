(this.webpackJsonpmern=this.webpackJsonpmern||[]).push([[0],{31:function(e,t,a){e.exports=a(66)},36:function(e,t,a){},37:function(e,t,a){},38:function(e,t,a){},44:function(e,t,a){},45:function(e,t,a){},64:function(e,t,a){},65:function(e,t,a){},66:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(28),c=a.n(r),l=(a(36),a(8)),s=a(1);a(37),a(38);var i=function(){return o.a.createElement("nav",{className:"navbar navbar-dark sticky-top navbar-expand-md customNavbar"},o.a.createElement("div",{className:"container-fluid"},o.a.createElement(l.b,{to:"/",className:"navbar-brand"},o.a.createElement("h1",{className:"navbar-name"},"Google Books")),o.a.createElement("button",{className:"navbar-toggler dropdownButton",type:"button","data-toggle":"collapse","data-target":"#portfolio-navbar","aria-controls":"portfolio-navbar","aria-expanded":"false","aria-label":"Toggle navigation"},o.a.createElement("span",{className:"navbar-toggler-icon dropdownIcon"})),o.a.createElement("div",{className:"collapse navbar-collapse"},o.a.createElement("ul",{className:"navbar-nav"},o.a.createElement("li",{className:"dropdown-item"},o.a.createElement(l.b,{to:"/search",className:"navlink customNavLink"},"Search")),o.a.createElement("li",{className:"dropdown-item"},o.a.createElement(l.b,{to:"/saved",className:"navlink customNavLink"},"Saved"))))))},m=a(30),u=a(11),d=a(12),v=a(14),h=a(13);a(44);var f=function(){return o.a.createElement("div",null,o.a.createElement("div",{className:"container mt-3"},o.a.createElement("div",{className:"jumbotron customJumbotron"},o.a.createElement("br",null),o.a.createElement("br",null),o.a.createElement("br",null),o.a.createElement("h1",null,"(React) Google Books Search"),o.a.createElement("h3",null,"Search for and Save Books of Interest"))),o.a.createElement("br",null),o.a.createElement("br",null))};a(45);var b=function(e){return o.a.createElement("div",{className:"container card mb-3 customCard"},o.a.createElement("div",{className:"mt-2 mb-2"},o.a.createElement("h5",{className:"mt-1 bookHeading"},"Book Search"),o.a.createElement("form",{className:"form-inline"},o.a.createElement("p",{className:"bookHeading"},"Book"),o.a.createElement("input",{value:e.search,onChange:e.handleInputChange,name:"search",type:"text",className:"form-control mt-2 ml-2 customInput",id:"search",placeholder:"Search for a book!"}),o.a.createElement("button",{onClick:e.handleFormSubmit,className:"btn btn-primary customButton"},"Search"))))};var k=function(e){var t=e.books,a=e.savedBooks,n=e.saveBook;return o.a.createElement("div",{className:"container card customCard"},o.a.createElement("h5",{className:"bookHeading mt-1"},"Results"),t.length?t.map((function(e,t){return o.a.createElement("div",{className:"card mt-2 mb-2",key:e._id},o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-md-2 imageStyle"},o.a.createElement("img",{alt:e.title,className:"img-fluid customImage",src:e.image})),o.a.createElement("div",{className:"col-md-10"},o.a.createElement("div",{className:"card-body"},o.a.createElement("div",{className:"row"},o.a.createElement("h5",{className:"card-title col-8"},e.title," by ",e.authors)),o.a.createElement("div",{className:"row"},o.a.createElement("p",{className:"card-text"},e.description)),o.a.createElement("div",{className:"row buttonRow"},o.a.createElement("a",{href:e.link,className:"btn btn-primary col-2 customBookButton",target:"_blank",rel:"noopener noreferrer"},"More"),o.a.createElement("button",{"data-index":t,onClick:n,className:"btn btn-success col-2 ml-2 customBookButton"},a.map((function(e){return e._id})).includes(e._id)?"Saved!":"Save"))))))})):o.a.createElement("h2",{style:{textAlign:"center"}},"Search for a book!"))},E=a(9),g=a.n(E),p=function(e){return g.a.get("https://www.googleapis.com/books/v1/volumes?q=".concat(e))},N=function(e){return g.a.post("/api/books",e)},B=function(){return g.a.get("/api/books")},w=function(e){return g.a.delete("/api/books/"+e)},y=(a(64),function(e){Object(v.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(u.a)(this,a);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).state={value:"",books:[],savedBooks:[]},e.createBook=function(e){return{_id:e.id,authors:e.volumeInfo.authors,description:e.volumeInfo.description,image:void 0===e.volumeInfo.imageLinks?"":e.volumeInfo.imageLinks.thumbnail,link:e.volumeInfo.previewLink,title:e.volumeInfo.title}},e.saveBook=function(t){var a=t.target.getAttribute("data-index"),n=e.state.books[a];N(n).then((function(){return e.componentDidMount()})).catch((function(e){return console.error(e)}))},e.searchBook=function(t){p(t).then((function(t){return e.setState({books:t.data.items.map((function(t){return e.createBook(t)}))})})).catch((function(e){return console.error(e)}))},e.handleInputChange=function(t){var a=t.target.name,n=t.target.value;e.setState(Object(m.a)({},a,n))},e.handleFormSubmit=function(t){t.preventDefault(),e.searchBook(e.state.search)},e}return Object(d.a)(a,[{key:"componentDidMount",value:function(){this.getSavedBooks()}},{key:"getSavedBooks",value:function(){var e=this;B().then((function(t){e.setState({savedBooks:t.data})})).catch((function(e){return console.error(e)}))}},{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement(f,null),o.a.createElement(b,{search:this.state.search||"",handleInputChange:this.handleInputChange,handleFormSubmit:this.handleFormSubmit}),o.a.createElement(k,{books:this.state.books,savedBooks:this.state.savedBooks,searchBook:this.searchBook,saveBook:this.saveBook}))}}]),a}(o.a.Component));a(65);var S=function(e){var t=e.books,a=e.deleteBook;return o.a.createElement("div",{className:"container card customCard"},o.a.createElement("h5",{className:"bookHeading mt-1"},"Saved Books"),t.length?t.map((function(e,t){return o.a.createElement("div",{className:"card mt-2 mb-2",key:e._id},o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-md-2 imageStyle"},o.a.createElement("img",{alt:e.title,className:"img-fluid customImage",src:e.image})),o.a.createElement("div",{className:"col-md-10"},o.a.createElement("div",{className:"card-body"},o.a.createElement("div",{className:"row"},o.a.createElement("h5",{className:"card-title col-8"},e.title," by ",e.authors)),o.a.createElement("div",{className:"row"},o.a.createElement("p",{className:"card-text"},e.description)),o.a.createElement("div",{className:"row buttonRow"},o.a.createElement("a",{href:e.link,className:"btn btn-primary customBookButton",target:"_blank",rel:"noopener noreferrer"},"More"),o.a.createElement("button",{"data-index":e._id,onClick:a,className:"btn btn-danger ml-2 customBookButton"},"Delete"))))))})):o.a.createElement("h2",{style:{textAlign:"center"}},"Search for a book!"))},x=function(e){Object(v.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(u.a)(this,a);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).state={savedBooks:[]},e.deleteBook=function(t){var a=t.target.getAttribute("data-index");w(a).then((function(){return e.componentDidMount()})).catch((function(e){return console.error(e)}))},e}return Object(d.a)(a,[{key:"componentDidMount",value:function(){this.getSavedBooks()}},{key:"getSavedBooks",value:function(){var e=this;B().then((function(t){e.setState({savedBooks:t.data})})).catch((function(e){return console.error(e)}))}},{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement(f,null),o.a.createElement(S,{books:this.state.savedBooks,deleteBook:this.deleteBook}))}}]),a}(o.a.Component);var I=function(){return o.a.createElement(l.a,{basename:""},o.a.createElement(i,null),o.a.createElement(s.c,null,o.a.createElement(s.a,{exact:!0,path:"/",component:y}),o.a.createElement(s.a,{exact:!0,path:"/search",component:y}),o.a.createElement(s.a,{exact:!0,path:"/saved",component:x})))},C=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function j(e){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}})).catch((function(e){console.error("Error during service worker registration:",e)}))}c.a.render(o.a.createElement(I,null),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("",window.location).origin!==window.location.origin)return;window.addEventListener("load",(function(){var e="".concat("","/service-worker.js");C?function(e){fetch(e).then((function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):j(e)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(e):j(e)}))}}()}},[[31,1,2]]]);
//# sourceMappingURL=main.03321a40.chunk.js.map