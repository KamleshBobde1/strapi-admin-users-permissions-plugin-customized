(self.webpackChunk_strapi_admin=self.webpackChunk_strapi_admin||[]).push([[5509],{59577:(e,t,n)=>{!function(e){"use strict";function t(e){e.state.markedSelection&&e.operation((function(){f(e)}))}function n(e){e.state.markedSelection&&e.state.markedSelection.length&&e.operation((function(){a(e)}))}e.defineOption("styleSelectedText",!1,(function(i,r,o){var l=o&&o!=e.Init;r&&!l?(i.state.markedSelection=[],i.state.markedSelectionStyle="string"==typeof r?r:"CodeMirror-selectedtext",c(i),i.on("cursorActivity",t),i.on("change",n)):!r&&l&&(i.off("cursorActivity",t),i.off("change",n),a(i),i.state.markedSelection=i.state.markedSelectionStyle=null)}));var i=8,r=e.Pos,o=e.cmpPos;function l(e,t,n,l){if(0!=o(t,n))for(var a=e.state.markedSelection,c=e.state.markedSelectionStyle,f=t.line;;){var s=f==t.line?t:r(f,0),u=f+i,m=u>=n.line,d=m?n:r(u,0),S=e.markText(s,d,{className:c});if(null==l?a.push(S):a.splice(l++,0,S),m)break;f=u}}function a(e){for(var t=e.state.markedSelection,n=0;n<t.length;++n)t[n].clear();t.length=0}function c(e){a(e);for(var t=e.listSelections(),n=0;n<t.length;n++)l(e,t[n].from(),t[n].to())}function f(e){if(!e.somethingSelected())return a(e);if(e.listSelections().length>1)return c(e);var t=e.getCursor("start"),n=e.getCursor("end"),r=e.state.markedSelection;if(!r.length)return l(e,t,n);var f=r[0].find(),s=r[r.length-1].find();if(!f||!s||n.line-t.line<=i||o(t,s.to)>=0||o(n,f.from)<=0)return c(e);for(;o(t,f.from)>0;)r.shift().clear(),f=r[0].find();for(o(t,f.from)<0&&(f.to.line-t.line<i?(r.shift().clear(),l(e,t,f.to,0)):l(e,t,f.from,0));o(n,s.to)<0;)r.pop().clear(),s=r[r.length-1].find();o(n,s.to)>0&&(n.line-s.from.line<i?(r.pop().clear(),l(e,s.from,n)):l(e,s.to,n))}}(n(27509))}}]);