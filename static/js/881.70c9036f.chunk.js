"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[881],{1695:function(t,n,e){function r(t,n,e,r,i,a,c){try{var s=t[a](c),u=s.value}catch(o){return void e(o)}s.done?n(u):Promise.resolve(u).then(r,i)}function i(t){return function(){var n=this,e=arguments;return new Promise((function(i,a){var c=t.apply(n,e);function s(t){r(c,i,a,s,u,"next",t)}function u(t){r(c,i,a,s,u,"throw",t)}s(void 0)}))}}e.d(n,{uV:function(){return v},Hx:function(){return h},vw:function(){return o},aO:function(){return f},Ai:function(){return x}});var a=e(7757),c=e.n(a),s="https://api.themoviedb.org/3",u="?api_key=4761bb7849595ee4cbf0e7a5e7d7ab74";function o(){return p.apply(this,arguments)}function p(){return(p=i(c().mark((function t(){var n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("".concat(s,"/trending/movie/day").concat(u));case 2:if(200!==(n=t.sent).status){t.next=5;break}return t.abrupt("return",n);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function f(t){return d.apply(this,arguments)}function d(){return(d=i(c().mark((function t(n){var e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("".concat(s,"/movie/").concat(n.postId).concat(u));case 2:if(200!==(e=t.sent).status){t.next=5;break}return t.abrupt("return",e);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function h(t){return l.apply(this,arguments)}function l(){return(l=i(c().mark((function t(n){var e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("".concat(s,"/movie/").concat(n.postId,"/reviews").concat(u,"&language=en-US&page=1"));case 2:if(200!==(e=t.sent).status){t.next=5;break}return t.abrupt("return",e);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function v(t){return m.apply(this,arguments)}function m(){return(m=i(c().mark((function t(n){var e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("".concat(s,"/movie/").concat(n.postId,"/credits").concat(u,"&language=en-US&page=1"));case 2:if(200!==(e=t.sent).status){t.next=5;break}return t.abrupt("return",e);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function x(t){return g.apply(this,arguments)}function g(){return(g=i(c().mark((function t(n){var e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("".concat(s,"/search/movie").concat(u,"&query=").concat(n));case 2:if(200!==(e=t.sent).status){t.next=5;break}return t.abrupt("return",e);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}},9155:function(t,n,e){e.d(n,{Z:function(){return s}});var r=e(1087),i=e(7689),a={trendingWrap:"MoviesList_trendingWrap__cHuOw",trendingLi:"MoviesList_trendingLi__DlmbV",trendingImage:"MoviesList_trendingImage__MmRGt",trendingTitle:"MoviesList_trendingTitle__t86Ex",trendingOverview:"MoviesList_trendingOverview__z9WK8"},c=e(184),s=function(t){var n=t.fetchData,e=t.state,s=(0,i.TH)(),u=[];return n&&(u=n.results),(0,c.jsx)("ul",{className:a.trendingWrap,children:u.map((function(t){return(0,c.jsx)(r.rU,{to:"".concat("/movies"!==s.pathname?"/movies/":"").concat(t.id),state:{from:e},children:(0,c.jsxs)("li",{className:a.trendingLi,children:[(0,c.jsx)("div",{className:a.trendingImage,children:null!==t.backdrop_path&&(0,c.jsx)("img",{src:"https://image.tmdb.org/t/p/w500".concat(t.backdrop_path),alt:t.title})}),(0,c.jsx)("div",{className:a.trendingTitle,children:t.title}),(0,c.jsx)("div",{className:a.trendingOverview,children:(0,c.jsx)("p",{className:a.trendingP,children:t.overview})})]})},t.id)}))})}},5881:function(t,n,e){e.r(n),e.d(n,{default:function(){return f}});var r=e(9439),i=e(2791),a=e(1695),c=e(9155),s={inputContainer:"Movies_inputContainer__8zVxl",inputSearch:"Movies_inputSearch__-lVX2"},u=e(1087),o=e(7689),p=e(184),f=function(){var t=(0,o.TH)(),n=(0,u.lr)(""),e=(0,r.Z)(n,2),f=e[0],d=e[1],h=(0,i.useState)({}),l=(0,r.Z)(h,2),v=l[0],m=l[1];return(0,i.useEffect)((function(){""!==f&&(0,a.Ai)(f).then((function(t){return t.json()})).then((function(t){return m(t)}))}),[f]),(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)("div",{className:s.inputContainer,children:(0,p.jsx)("div",{className:s.inputSearch,children:(0,p.jsx)("input",{type:"text",onChange:function(t){d(t.target.value)},id:"movieName",name:"movieName",required:!0,minLength:"4",maxLength:"8",size:"10"})})}),(0,p.jsx)("div",{children:(0,p.jsx)("div",{className:s.searchResults,children:(0,p.jsx)("ul",{children:0!==Object.keys(v).length&&(0,p.jsx)(c.Z,{fetchData:v,state:t})})})})]})}}}]);
//# sourceMappingURL=881.70c9036f.chunk.js.map