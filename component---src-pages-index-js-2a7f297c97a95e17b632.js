(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{155:function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return c}),n.d(t,"pageQuery",function(){return u});var a=n(7),r=n.n(a),i=n(0),o=n.n(i),l=n(171),s=n(224),c=(n(408),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.data.allMarkdownRemark.edges,t=this.props.location;return o.a.createElement(l.a,{location:t},o.a.createElement(s.a,{data:e}))},t}(i.Component)),u="755028477"},159:function(e,t,n){var a;e.exports=(a=n(165))&&a.default||a},162:function(e,t,n){"use strict";n.r(t),n.d(t,"graphql",function(){return h}),n.d(t,"StaticQueryContext",function(){return p}),n.d(t,"StaticQuery",function(){return f});var a=n(0),r=n.n(a),i=n(4),o=n.n(i),l=n(158),s=n.n(l);n.d(t,"Link",function(){return s.a}),n.d(t,"withPrefix",function(){return l.withPrefix}),n.d(t,"navigate",function(){return l.navigate}),n.d(t,"push",function(){return l.push}),n.d(t,"replace",function(){return l.replace}),n.d(t,"navigateTo",function(){return l.navigateTo});var c=n(25);n.d(t,"waitForRouteChange",function(){return c.c});var u=n(159),d=n.n(u);n.d(t,"PageRenderer",function(){return d.a});var m=n(35);n.d(t,"parsePath",function(){return m.a});var p=r.a.createContext({}),f=function(e){return r.a.createElement(p.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function h(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}f.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},165:function(e,t,n){"use strict";n.r(t);n(36);var a=n(0),r=n.n(a),i=n(4),o=n.n(i),l=n(51),s=n(1),c=function(e){var t=e.location,n=s.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(l.a,Object.assign({location:t,pageResources:n},n.json))};c.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=c},166:function(e){e.exports={data:{site:{siteMetadata:{title:"HUNDRED"}}}}},167:function(e,t,n){},169:function(e,t,n){e.exports={title:"HUNDRED",author:"Junho Baik",description:"Junho Baik's blog",siteUrl:"https://junhobaik.github.io",titleLogo:function(){return n(170)},titleLogoShow:!1,googleAnalyticsTrackingId:"UA-103592668-4"}},170:function(e,t,n){e.exports=n.p+"static/profile-84a4704395a2596be588c30aae784e41.png"},171:function(e,t,n){"use strict";var a=n(166),r=n(0),i=n.n(r),o=n(4),l=n.n(o),s=n(184),c=n.n(s),u=n(162),d=n(164),m=n(174),p=(n(167),n(7)),f=n.n(p),h=function(e){function t(){return e.apply(this,arguments)||this}return f()(t,e),t.prototype.render=function(){return i.a.createElement("footer",{id:"footer"},i.a.createElement("div",{className:"copyright"},i.a.createElement("span",null,"© ",i.a.createElement("a",{href:"mailto:junhobaik@gmail.com"},"Junho Baik")," 2018. All rights reserved")),i.a.createElement("div",{className:"submenu"}))},t}(r.Component),g=n(169),E=n.n(g),y=(n(187),n(26),n(188),n(50),n(182),n(183),n(189)),v=new(n.n(y).a)({baseFontSize:"16px",baseLineHeight:1.666,headerFontFamily:["Nanum Gothic"],bodyFontFamily:["Nanum Gothic Coding"]}),b=[{name:"Nanum Gothic Coding",bold:[400,700]},{name:"Nanum Gothic",bold:[400,700]}].map(function(e){return e.bold?e.name.replace(/ /gi,"+")+":"+e.bold.toString():""+e.name.replace(/ /gi,"+")}).join("|").toString(),w=(v.rhythm,v.scale,function(e){var t=e.children,n=(e.data,e.location);return i.a.createElement(u.StaticQuery,{query:"755544856",render:function(e){var a;a=n?n.href:E.a.siteUrl;var r=E.a.titleLogoShow?{display:"inline-block"}:{display:"none"};return i.a.createElement(i.a.Fragment,null,i.a.createElement(c.a,{title:e.site.siteMetadata.title,meta:[{name:"description",content:E.a.description},{name:"og:type",content:"website"},{name:"og:title",content:E.a.title},{name:"og:description",content:E.a.description},{name:"og:image",content:E.a.titleLogo()},{name:"og:url",content:a}]},i.a.createElement("link",{href:"https://fonts.googleapis.com/css?family="+b,rel:"stylesheet"})),i.a.createElement("div",{id:"wrap"},i.a.createElement("header",{id:"header"},i.a.createElement("div",{className:"title"},i.a.createElement(u.Link,{to:"/"},i.a.createElement("div",{className:"logo-img",style:r},i.a.createElement("img",{src:E.a.titleLogo(),alt:"logo"})),i.a.createElement("h1",null,E.a.title))),i.a.createElement("div",{className:"menu"},i.a.createElement("div",{className:"home"},i.a.createElement(u.Link,{to:"/"},i.a.createElement(d.a,{icon:m.c,fixedWidth:!0,transform:"down-1"}),i.a.createElement("span",null,"Home"))),i.a.createElement("div",{className:"tags"},i.a.createElement(u.Link,{to:"/taglist"},i.a.createElement(d.a,{icon:m.f,fixedWidth:!0,transform:"down-1"}),i.a.createElement("span",null,"Tags"))),i.a.createElement("div",{className:"search"},i.a.createElement(u.Link,{to:"/search"},i.a.createElement(d.a,{icon:m.d,fixedWidth:!0,transform:"down-1"}),i.a.createElement("span",null,"Search"))))),i.a.createElement("article",{id:"article"},t)),i.a.createElement(h,null))},data:a})});w.propTypes={children:l.a.node.isRequired,location:l.a.object.isRequired};t.a=w},207:function(e,t,n){},210:function(e,t,n){},224:function(e,t,n){"use strict";n(80),n(50);var a=n(7),r=n.n(a),i=n(0),o=n.n(i),l=n(164),s=n(174),c=(n(207),n(4)),u=n.n(c),d=n(158),m=n.n(d),p=n(190),f=n.n(p),h=n(252),g=n.n(h),E=n(225),y=(n(210),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.post,t=e.fields.slug,n=f()(e,"frontmatter.title")||t,a=e.excerpt,r=e.frontmatter.date,i=e.frontmatter.tags.map(function(e,t){return"Empty Tag"!==e?o.a.createElement(m.a,{to:"/tags/"+g.a.kebabCase(e),className:"tag",key:"tag-"+e},"#",o.a.createElement("span",{className:"tag-name"},e)):null});return o.a.createElement("div",{className:"post-link",key:t,style:this.props.showCnt-1>=this.props.index?{display:"inline-block"}:{display:"none"}},o.a.createElement(m.a,{to:t},o.a.createElement("h2",{className:"title hover"},n)),o.a.createElement("span",{className:"excerpt"},a),o.a.createElement("div",{className:"sub"},o.a.createElement("div",{className:"date"},o.a.createElement(l.a,{icon:E.a}),o.a.createElement("span",null,r)),o.a.createElement("div",{className:"tags-list"},i)))},t}(i.Component));y.propTypes={post:u.a.object.isRequired,title:u.a.string};var v=y,b=function(e){function t(t){var n;return(n=e.call(this,t)||this).onScroll=function(){n.state.currentPostCnt<n.props.data.length&&window.scrollY+window.innerHeight>=n.state.loadElPoint&&!n.state.isLoading&&(n.setState({isLoading:!0}),setTimeout(function(){n.setState({currentPostCnt:n.state.currentPostCnt+n.state.loadPostCnt,isLoading:!1}),n.setLoadElPoint()},200))},n.setLoadElPoint=function(){n.setState({loadElPoint:document.querySelector(".load-point").offsetTop})},n.state={loadPostCnt:7,currentPostCnt:7,isLoading:!1,loadElPoint:0},n}r()(t,e);var n=t.prototype;return n.componentDidMount=function(){this.setLoadElPoint(),window.addEventListener("scroll",this.onScroll,!1)},n.componentWillUnmount=function(){window.removeEventListener("scroll",this.onScroll,!1)},n.render=function(){var e=this,t=this.props,n=t.data,a=t.title,r=n.filter(function(e){return!!e.node.frontmatter.date}).map(function(t,n){return o.a.createElement(v,{key:t.node.fields.slug,post:t.node,index:n,showCnt:e.state.currentPostCnt})});return o.a.createElement("div",{id:"PostList"},a?o.a.createElement("h1",{className:"list-title"},a):null,o.a.createElement("div",{className:"list"},r),o.a.createElement("div",{className:"load"},o.a.createElement("div",{className:"loading"},o.a.createElement("div",{className:"spinner",style:this.state.isLoading?{display:"inline-block"}:{display:"none"}},o.a.createElement(l.a,{className:"blink",icon:s.e,size:"2x"}))),o.a.createElement("div",{className:"load-point"})))},t}(i.Component);t.a=b},408:function(e,t,n){}}]);
//# sourceMappingURL=component---src-pages-index-js-2a7f297c97a95e17b632.js.map