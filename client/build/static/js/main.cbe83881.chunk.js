(this.webpackJsonpvideos=this.webpackJsonpvideos||[]).push([[0],{16:function(e,t,a){e.exports=a(40)},21:function(e,t,a){},40:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(13),c=a.n(r),l=a(2),s=function(e){var t=e.onTermSubmit,a=Object(n.useState)(""),r=Object(l.a)(a,2),c=r[0],s=r[1];return i.a.createElement("div",{className:"search-bar ui segment"},i.a.createElement("form",{onSubmit:function(e){e.preventDefault(),t(c)},className:"ui form"},i.a.createElement("div",{className:"field"},i.a.createElement("label",null,"Search for a Video"),i.a.createElement("input",{type:"text",value:c,onChange:function(e){return s(e.target.value)}}))))},u=(a(21),function(e){var t=e.video,a=e.onVideoSelect;return i.a.createElement("div",{onClick:function(){return a(t)},className:"video-item item"},i.a.createElement("img",{className:"ui image",src:t.snippet.thumbnails.medium.url,alt:t.snippet.title}),i.a.createElement("div",{className:"content"},i.a.createElement("div",{className:"header"},t.snippet.title)))}),m=function(e){var t=e.videos,a=e.onVideoSelect,n=t.map((function(e){return i.a.createElement(u,{key:e.id.videoId,onVideoSelect:a,video:e})}));return i.a.createElement("div",{className:"ui relaxed divided list"},n)},o=function(e){var t=e.video;if(!t)return i.a.createElement("div",null,"Loading...");var a="https://www.youtube.com/embed/".concat(t.id.videoId);return i.a.createElement("div",null,i.a.createElement("div",{className:"ui embed"},i.a.createElement("iframe",{title:"video player",src:a})),i.a.createElement("div",{className:"ui segment"},i.a.createElement("h4",{className:"ui header"},t.snippet.title),i.a.createElement("p",null,t.snippet.description)))},d=a(3),v=a.n(d),p=a(14),f=a(15),E=a.n(f).a.create({baseURL:"https://www.googleapis.com/youtube/v3",params:{part:"snippet",type:"video",maxResults:5,key:"AIzaSyCFyYKBlEGXo73Pg4QAJHZz2-1t1GS2L0s"}}),b=function(e){var t=Object(n.useState)([]),a=Object(l.a)(t,2),i=a[0],r=a[1];Object(n.useEffect)((function(){c(e)}),[e]);var c=function(){var e=Object(p.a)(v.a.mark((function e(t){var a;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E.get("/search",{params:{q:t}});case 2:a=e.sent,r(a.data.items);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return[i,c]},N=function(){var e=Object(n.useState)(null),t=Object(l.a)(e,2),a=t[0],r=t[1],c=b("kite surfing"),u=Object(l.a)(c,2),d=u[0],v=u[1];return Object(n.useEffect)((function(){r(d[0])}),[d]),i.a.createElement("div",{className:"ui container"},i.a.createElement(s,{onTermSubmit:v}),i.a.createElement("div",{className:"ui grid"},i.a.createElement("div",{className:"ui row"},i.a.createElement("div",{className:"eleven wide column"},i.a.createElement(o,{video:a})),i.a.createElement("div",{className:"five wide column"},i.a.createElement(m,{onVideoSelect:r,videos:d})))))};c.a.render(i.a.createElement(N,null),document.querySelector("#root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.cbe83881.chunk.js.map