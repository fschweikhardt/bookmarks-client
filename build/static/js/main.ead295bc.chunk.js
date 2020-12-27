(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{16:function(e,t,a){e.exports=a(36)},21:function(e,t,a){},23:function(e,t,a){},27:function(e,t,a){},29:function(e,t,a){},31:function(e,t,a){},33:function(e,t,a){},36:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(13),i=a.n(o),l=a(39),c=(a(21),a(15)),s=a(5),u=a(6),m=a(8),d=a(7),k=a(9),p=a(38),h=r.a.createContext({bookmarks:[],addBookmark:function(){},deleteBookmark:function(){},updateBookmark:function(){}}),f={API_ENDPOINT:"http://localhost:7000/bookmarks",API_KEY:Object({NODE_ENV:"production",PUBLIC_URL:""}).API_KEY},b=(a(23),function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(m.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).state={error:null},a.handleSubmit=function(e){e.preventDefault();var t=e.target,n=t.title,r=t.url,o=t.description,i=t.rating,l={title:n.value,url:r.value,description:o.value,rating:i.value};a.setState({error:null}),fetch(f.API_ENDPOINT,{method:"POST",body:JSON.stringify(l),headers:{"content-type":"application/json",authorization:"bearer b6491f72-707c-460f-bf26-3c0fbedc3987"}}).then(function(e){return e.ok?e.json():e.json().then(function(e){return Promise.reject(e)})}).then(function(e){n.value="",r.value="",o.value="",i.value="",a.context.addBookmark(e),a.props.history.push("/")}).catch(function(e){console.error(e),a.setState({error:e})})},a.handleClickCancel=function(){a.props.history.push("/")},a}return Object(k.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.state.error;return r.a.createElement("section",{className:"AddBookmark"},r.a.createElement("h2",null,"Create a bookmark"),r.a.createElement("form",{className:"AddBookmark__form",onSubmit:this.handleSubmit},r.a.createElement("div",{className:"AddBookmark__error",role:"alert"},e&&r.a.createElement("p",null,e.message)),r.a.createElement("div",null,r.a.createElement("label",{htmlFor:"title"},"Title"," "),r.a.createElement("input",{type:"text",name:"title",id:"title",placeholder:"Great website!",required:!0})),r.a.createElement("div",null,r.a.createElement("label",{htmlFor:"url"},"URL"," "),r.a.createElement("input",{type:"url",name:"url",id:"url",placeholder:"https://www.great-website.com/",required:!0})),r.a.createElement("div",null,r.a.createElement("label",{htmlFor:"description"},"Description"),r.a.createElement("textarea",{name:"description",id:"description"})),r.a.createElement("div",null,r.a.createElement("label",{htmlFor:"rating"},"Rating"," "),r.a.createElement("input",{type:"number",name:"rating",id:"rating",defaultValue:"1",min:"1",max:"5",required:!0})),r.a.createElement("div",{className:"AddBookmark__buttons"},r.a.createElement("button",{type:"button",onClick:this.handleClickCancel},"Cancel")," ",r.a.createElement("button",{type:"submit"},"Save"))))}}]),t}(n.Component));b.contextType=h;var E=b,v=a(1),y=a.n(v),g=a(37);a(27);function B(e){var t=[0,0,0,0,0].map(function(t,a){return a<e.value?r.a.createElement("span",{key:a},"\u2605 "):r.a.createElement("span",{key:a},"\u2606 ")});return r.a.createElement("div",{className:"rating"},t)}a(29);function j(e){return r.a.createElement(h.Consumer,null,function(t){return r.a.createElement("li",{className:"BookmarkItem"},r.a.createElement("div",{className:"BookmarkItem__row"},r.a.createElement("h3",{className:"BookmarkItem__title"},r.a.createElement("a",{href:e.url,target:"_blank",rel:"noopener noreferrer"},e.title)),r.a.createElement(B,{value:e.rating})),r.a.createElement("p",{className:"BookmarkItem__description"},e.description),r.a.createElement("div",{className:"BookmarkItem__buttons"},r.a.createElement("button",{className:"BookmarkItem__description",onClick:function(){var a,n;a=e.id,n=t.deleteBookmark,fetch(f.API_ENDPOINT+"/".concat(a),{method:"DELETE",headers:{"content-type":"application/json",authorization:"bearer b6491f72-707c-460f-bf26-3c0fbedc3987"}}).then(function(e){if(!e.ok)return e.json().then(function(e){return Promise.reject(e)})}).then(function(){n(a)}).catch(function(e){console.error(e)})}},"Delete"),r.a.createElement("button",{className:"BookmarkItem__description"},r.a.createElement(g.a,{to:"/edit/".concat(e.id)},"Edit Bookmark"))))})}j.defaultProps={onClickDelete:function(){}};a(31);var N=function(e){function t(){return Object(s.a)(this,t),Object(m.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(k.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.context.bookmarks;return r.a.createElement("section",{className:"BookmarkList"},r.a.createElement("h2",null,"Your bookmarks"),r.a.createElement("ul",{className:"BookmarkList__list","aria-live":"polite"},e.map(function(e){return r.a.createElement(j,Object.assign({key:e.id},e))})))}}]),t}(n.Component);N.proptTypes={bookmarks:y.a.arrayOf(y.a.shape({id:y.a.string}))},N.defaultProps={bookmarks:[]},N.contextType=h;var O=N;function _(e){return r.a.createElement("nav",{className:"Nav"},r.a.createElement(g.a,{to:"/"},"Bookmark List")," ",r.a.createElement(g.a,{to:"/add-bookmark"},"Add Bookmark"))}var C=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(m.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).state={error:null,id:"",title:"",url:"",description:"",rating:1},a.handleTitleUpdate=function(e){a.setState({title:e.target.value})},a.handleUrlUpdate=function(e){a.setState({url:e.target.value})},a.handleDescriptionUpdate=function(e){a.setState({description:e.target.value})},a.handleRatingUpdate=function(e){a.setState({rating:e.target.value})},a.handleSubmit=function(e){e.preventDefault();var t=a.props.match.params.bookmarkId,n=a.state,r={id:n.id,title:n.title,url:n.url,description:n.description,rating:n.rating};fetch("http://localhost:7000/bookmarks/".concat(t),{method:"PATCH",body:JSON.stringify(r),headers:{"content-type":"application/json",authorization:"Bearer b6491f72-707c-460f-bf26-3c0fbedc3987"}}).then(function(e){if(!e.ok)return e.json().then(function(e){return Promise.reject(e)})}).then(function(){a.resetFields(r),a.context.updateBookmark(r),a.props.history.push("/")}).catch(function(e){console.error(e),a.setState({error:e})})},a.resetFields=function(e){a.setState({id:e.id||"",title:e.title||"",url:e.url||"",description:e.description||"",rating:e.rating||""})},a.handleClickCancel=function(){a.props.history.push("/")},a}return Object(k.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=this.props.match.params.bookmarkId;fetch("http://localhost:7000/bookmarks/".concat(t),{method:"GET",headers:{authorization:"Bearer b6491f72-707c-460f-bf26-3c0fbedc3987"}}).then(function(e){return e.ok?e.json():e.json().then(function(e){return Promise.reject(e)})}).then(function(t){e.setState({id:t.id,title:t.title,url:t.url,description:t.description,rating:t.rating})}).catch(function(t){console.error(t),e.setState({error:t})})}},{key:"render",value:function(){var e=this.state,t=e.title,a=e.description,n=e.url,o=e.rating;return r.a.createElement("section",{className:"EditBookmarkForm"},r.a.createElement("h2",null,"Edit Bookmark"),r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("div",null,r.a.createElement("label",{htmlFor:"title"},"Title"),r.a.createElement("input",{type:"text",name:"title",id:"title",value:t,onChange:this.handleTitleUpdate,placeholder:t})),r.a.createElement("div",null,r.a.createElement("label",{htmlFor:"url"},"URL"),r.a.createElement("input",{type:"url",name:"url",id:"url",value:n,onChange:this.handleUrlUpdate,placeholder:n})),r.a.createElement("div",null,r.a.createElement("label",{htmlFor:"description"},"Description"),r.a.createElement("textarea",{name:"description",id:"description",value:a,onChange:this.handleDescriptionUpdate})),r.a.createElement("div",null,r.a.createElement("label",{htmlFor:"rating"},"Rating"),r.a.createElement("input",{type:"number",name:"rating",id:"rating",value:o,onChange:this.handleRatingUpdate,min:"1",max:"5"})),r.a.createElement("div",{className:"AddBookmark__buttons"},r.a.createElement("button",{type:"button",onClick:this.handleClickCancel},"Cancel")," ",r.a.createElement("button",{type:"submit"},"Save"))))}}]),t}(r.a.Component);C.contextType=h;var S=C,I=(a(33),function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(m.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).state={bookmarks:[],error:null},a.setBookmarks=function(e){a.setState({bookmarks:e,error:null})},a.addBookmark=function(e){a.setState({bookmarks:Object(c.a)(a.state.bookmarks).concat([e])})},a.deleteBookmark=function(e){var t=a.state.bookmarks.filter(function(t){return t.id!==e});a.setState({bookmarks:t})},a.updateBookmark=function(e){a.setState({bookmarks:a.state.bookmarks.map(function(t){return t.id!==e.id?t:e})})},a}return Object(k.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch(f.API_ENDPOINT,{method:"GET",headers:{"content-type":"application/json",Authorization:"Bearer b6491f72-707c-460f-bf26-3c0fbedc3987"}}).then(function(e){return e.ok?e.json():e.json().then(function(e){return Promise.reject(e)})}).then(this.setBookmarks).catch(function(t){console.error(t),e.setState({error:t})})}},{key:"render",value:function(){var e={bookmarks:this.state.bookmarks,addBookmark:this.addBookmark,deleteBookmark:this.deleteBookmark,updateBookmark:this.updateBookmark};return r.a.createElement("main",{className:"App"},r.a.createElement("h1",null,"Bookmarks!"),r.a.createElement(h.Provider,{value:e},r.a.createElement(_,null),r.a.createElement("div",{className:"content","aria-live":"polite"},r.a.createElement(p.a,{exact:!0,path:"/",component:O}),r.a.createElement(p.a,{path:"/add-bookmark",component:E}),r.a.createElement(p.a,{path:"/edit/:bookmarkId",component:S}))))}}]),t}(n.Component));i.a.render(r.a.createElement(l.a,null,r.a.createElement(I,null)),document.getElementById("root"))}},[[16,2,1]]]);
//# sourceMappingURL=main.ead295bc.chunk.js.map