"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[544],{1695:function(t,n,e){function r(t,n,e,r,a,c,i){try{var s=t[c](i),u=s.value}catch(o){return void e(o)}s.done?n(u):Promise.resolve(u).then(r,a)}function a(t){return function(){var n=this,e=arguments;return new Promise((function(a,c){var i=t.apply(n,e);function s(t){r(i,a,c,s,u,"next",t)}function u(t){r(i,a,c,s,u,"throw",t)}s(void 0)}))}}e.d(n,{uV:function(){return v},Hx:function(){return h},vw:function(){return o},aO:function(){return f},Ai:function(){return g}});var c=e(7757),i=e.n(c),s="https://api.themoviedb.org/3",u="?api_key=4761bb7849595ee4cbf0e7a5e7d7ab74";function o(){return p.apply(this,arguments)}function p(){return(p=a(i().mark((function t(){var n;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("".concat(s,"/trending/movie/day").concat(u));case 2:if(200!==(n=t.sent).status){t.next=5;break}return t.abrupt("return",n);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function f(t){return d.apply(this,arguments)}function d(){return(d=a(i().mark((function t(n){var e;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("".concat(s,"/movie/").concat(n.postId).concat(u));case 2:if(200!==(e=t.sent).status){t.next=5;break}return t.abrupt("return",e);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function h(t){return l.apply(this,arguments)}function l(){return(l=a(i().mark((function t(n){var e;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("".concat(s,"/movie/").concat(n.postId,"/reviews").concat(u,"&language=en-US&page=1"));case 2:if(200!==(e=t.sent).status){t.next=5;break}return t.abrupt("return",e);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function v(t){return m.apply(this,arguments)}function m(){return(m=a(i().mark((function t(n){var e;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("".concat(s,"/movie/").concat(n.postId,"/credits").concat(u,"&language=en-US&page=1"));case 2:if(200!==(e=t.sent).status){t.next=5;break}return t.abrupt("return",e);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function g(t){return w.apply(this,arguments)}function w(){return(w=a(i().mark((function t(n){var e;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("".concat(s,"/search/movie").concat(u,"&query=").concat(n));case 2:if(200!==(e=t.sent).status){t.next=5;break}return t.abrupt("return",e);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}},9155:function(t,n,e){e.d(n,{Z:function(){return s}});var r=e(1087),a=e(7689),c={trendingWrap:"MoviesList_trendingWrap__cHuOw",trendingLi:"MoviesList_trendingLi__DlmbV",trendingImage:"MoviesList_trendingImage__MmRGt",trendingTitle:"MoviesList_trendingTitle__t86Ex",trendingOverview:"MoviesList_trendingOverview__z9WK8"},i=e(184),s=function(t){var n=t.fetchData,e=t.state,s=(0,a.TH)(),u=[];return n&&(u=n.results),(0,i.jsx)("ul",{className:c.trendingWrap,children:u.map((function(t){return(0,i.jsx)(r.rU,{to:"".concat("/movies"!==s.pathname?"/movies/":"").concat(t.id),state:{search:e},children:(0,i.jsxs)("li",{className:c.trendingLi,children:[(0,i.jsx)("div",{className:c.trendingImage,children:null!==t.backdrop_path?(0,i.jsx)("img",{src:"https://image.tmdb.org/t/p/w500".concat(t.backdrop_path),alt:t.title}):(0,i.jsx)("img",{className:c.creditsImg,src:"https://www.smaroadsafety.com/wp-content/uploads/2022/06/no-pic.png",alt:t.title})}),(0,i.jsx)("div",{className:c.trendingTitle,children:t.title}),(0,i.jsx)("div",{className:c.trendingOverview,children:(0,i.jsx)("p",{className:c.trendingP,children:t.overview})})]})},t.id)}))})}},9544:function(t,n,e){e.r(n);var r=e(9439),a=e(2791),c=e(1695),i=e(9155),s=e(184);n.default=function(){var t=(0,a.useState)(""),n=(0,r.Z)(t,2),e=n[0],u=n[1];return(0,a.useEffect)((function(){(0,c.vw)().then((function(t){return t.json()})).then((function(t){t&&u(t)}))}),[]),(0,s.jsx)(i.Z,{fetchData:e})}}}]);
//# sourceMappingURL=544.5693162c.chunk.js.map