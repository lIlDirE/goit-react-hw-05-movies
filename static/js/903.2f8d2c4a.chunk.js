"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[903],{1695:function(e,t,n){function r(e,t,n,r,c,a,u){try{var i=e[a](u),o=i.value}catch(s){return void n(s)}i.done?t(o):Promise.resolve(o).then(r,c)}function c(e){return function(){var t=this,n=arguments;return new Promise((function(c,a){var u=e.apply(t,n);function i(e){r(u,c,a,i,o,"next",e)}function o(e){r(u,c,a,i,o,"throw",e)}i(void 0)}))}}n.d(t,{uV:function(){return d},Hx:function(){return v},vw:function(){return s},aO:function(){return p},Ai:function(){return m}});var a=n(7757),u=n.n(a),i="https://api.themoviedb.org/3",o="?api_key=4761bb7849595ee4cbf0e7a5e7d7ab74";function s(){return f.apply(this,arguments)}function f(){return(f=c(u().mark((function e(){var t;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(i,"/trending/movie/day").concat(o));case 2:if(200!==(t=e.sent).status){e.next=5;break}return e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function p(e){return h.apply(this,arguments)}function h(){return(h=c(u().mark((function e(t){var n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(i,"/movie/").concat(t.postId).concat(o));case 2:if(200!==(n=e.sent).status){e.next=5;break}return e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function v(e){return l.apply(this,arguments)}function l(){return(l=c(u().mark((function e(t){var n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(i,"/movie/").concat(t.postId,"/reviews").concat(o,"&language=en-US&page=1"));case 2:if(200!==(n=e.sent).status){e.next=5;break}return e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function d(e){return w.apply(this,arguments)}function w(){return(w=c(u().mark((function e(t){var n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(i,"/movie/").concat(t.postId,"/credits").concat(o,"&language=en-US&page=1"));case 2:if(200!==(n=e.sent).status){e.next=5;break}return e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function m(e){return x.apply(this,arguments)}function x(){return(x=c(u().mark((function e(t){var n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(i,"/search/movie").concat(o,"&query=").concat(t));case 2:if(200!==(n=e.sent).status){e.next=5;break}return e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}},7903:function(e,t,n){n.r(t),n.d(t,{default:function(){return v}});var r=n(9439),c=n(2791),a=n(7689),u=n(1695),i="MovieReview_reviews__hM86F",o="MovieReview_reviewItem__1Z2FZ",s="MovieReview_reviewAuthor__TK5F5",f="MovieReview_reviewContent__2WXI3",p="MovieReview_reviewDate__5NpRs",h=n(184),v=function(){var e=(0,c.useState)({}),t=(0,r.Z)(e,2),n=t[0],v=t[1],l=(0,a.UO)();return(0,c.useEffect)((function(){(0,u.Hx)(l).then((function(e){return e.json()})).then((function(e){return v(e.results)}))}),[l]),(0,h.jsx)("div",{className:i,children:0!==Object.keys(n).length?n.map((function(e){return(0,h.jsxs)("div",{className:o,children:[(0,h.jsx)("h3",{className:s,children:e.author}),(0,h.jsx)("p",{className:f,children:e.content}),(0,h.jsx)("p",{className:p,children:e.updated_at})]},e.id)})):(0,h.jsx)("div",{children:(0,h.jsx)("h2",{children:"No information found"})})})}}}]);
//# sourceMappingURL=903.2f8d2c4a.chunk.js.map