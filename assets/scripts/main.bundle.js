!function(u){function t(t){for(var e,o,r=t[0],n=t[1],i=t[2],a=0,l=[];a<r.length;a++)o=r[a],Object.prototype.hasOwnProperty.call(s,o)&&s[o]&&l.push(s[o][0]),s[o]=0;for(e in n)Object.prototype.hasOwnProperty.call(n,e)&&(u[e]=n[e]);for(f&&f(t);l.length;)l.shift()();return y.push.apply(y,i||[]),c()}function c(){for(var t,e=0;e<y.length;e++){for(var o=y[e],r=!0,n=1;n<o.length;n++){var i=o[n];0!==s[i]&&(r=!1)}r&&(y.splice(e--,1),t=a(a.s=o[0]))}return t}var o={},s={0:0},y=[];function a(t){var e;return(o[t]||(e=o[t]={i:t,l:!1,exports:{}},u[t].call(e.exports,e,e.exports,a),e.l=!0,e)).exports}a.m=u,a.c=o,a.d=function(t,e,o){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},a.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(a.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)a.d(o,r,function(t){return e[t]}.bind(null,r));return o},a.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="/";var e=(r=window.webpackJsonp=window.webpackJsonp||[]).push.bind(r);r.push=t;for(var r=r.slice(),n=0;n<r.length;n++)t(r[n]);var f=e;y.push([49,1]),c()}({47:function(t,e,o){},49:function(M,t,e){"use strict";e.r(t);e(23),e(26);var t=e(17),o=e.n(t),t=e(18),t=e.n(t),r=e(19),n=e.n(r),i=e(2),r=e(3),a=e(1);function l(t){return(l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function u(t,e){for(var o=0;o<e.length;o++){var r=e[o];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,function(t){t=function(t,e){if("object"!==l(t)||null===t)return t;var o=t[Symbol.toPrimitive];if(void 0===o)return("string"===e?String:Number)(t);o=o.call(t,e||"default");if("object"!==l(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}(t,"string");return"symbol"===l(t)?t:String(t)}(r.key),r)}}a.a.registerPlugin(r.a);var c=function(){function r(t){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,r),this.parent=t,this.title=t.querySelector(".core-title"),this.splitType=new i.a(this.title),this.animateTitle();var e,t=this.parent.querySelector(".reviews__items"),o=(this.animateSlider(t),!!t&&[].slice.call(t.querySelectorAll(".reviews__item")));o&&1<o.length&&(e=t.querySelector(".plans__current"),this.slider={options:{slidesPerView:3,spaceBetween:30,preloadImages:!1,breakpoints:{767:{slidesPerView:1},1024:{slidesPerView:2}},lazy:{loadOnTransitionStart:!0,loadPrevNext:!0,loadPrevNextAmount:1},navigation:{prevEl:t.querySelector(".reviews__button--prev"),nextEl:t.querySelector(".reviews__button--next"),disabledClass:"slider-button--disabled"},pagination:{clickable:!0,el:t.querySelector(".plans__pagination"),bulletClass:"plans__pagination-el",bulletActiveClass:"plans__pagination-el--active",renderBullet:function(t,e){return'<span class="'.concat(e,'">').concat(t,"</span>")}},on:{slideChange:function(){e.innerHTML="".concat(this.realIndex+1)}}},instance:null},this.slider.instance=new n.a(t,this.slider.options))}return function(t,e,o){e&&u(t.prototype,e),o&&u(t,o),Object.defineProperty(t,"prototype",{writable:!1})}(r,[{key:"animateTitle",value:function(){a.a.to(".reviews .char",{scrollTrigger:{trigger:".reviews",start:"top 75%"},y:0,stagger:.05,delay:.2,duration:.1,opacity:1,ease:"power2.out"})}},{key:"animateSlider",value:function(t){a.a.fromTo(t,{y:100,opacity:0},{scrollTrigger:{trigger:".reviews",start:"top 75%"},y:0,delay:.2,duration:.6,opacity:1,ease:"power2.out"})}}]),r}();function s(t){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function y(t,e){for(var o=0;o<e.length;o++){var r=e[o];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,function(t){t=function(t,e){if("object"!==s(t)||null===t)return t;var o=t[Symbol.toPrimitive];if(void 0===o)return("string"===e?String:Number)(t);o=o.call(t,e||"default");if("object"!==s(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}(t,"string");return"symbol"===s(t)?t:String(t)}(r.key),r)}}a.a.registerPlugin(r.a);var f=function(){function e(t){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),this.carditems=t.querySelectorAll(".help-you__item"),this.timeLine=a.a.timeline(),this.animateCards(this.carditems),this.title=t.querySelector(".help-you__title"),this.splitType=new i.a(this.title),this.animateTitle()}return function(t,e,o){e&&y(t.prototype,e),o&&y(t,o),Object.defineProperty(t,"prototype",{writable:!1})}(e,[{key:"animateCards",value:function(t){a.a.to(t,{duration:.8,delay:.4,opacity:1,y:0,ease:"power2.out",stagger:.2,scrollTrigger:{trigger:".help-you__content",toggleActions:"play pause resume none",start:"30% 90%"}}),a.a.to(".help-you__button",{duration:.5,delay:.5,opacity:1,ease:"power2.out",stagger:.2,scrollTrigger:{toggleActions:"play pause play none",trigger:".help-you__button",start:"top 95%"}})}},{key:"animateTitle",value:function(){a.a.to(".help-you__title .word",{scrollTrigger:{toggleActions:"play none play none",trigger:".help-you__title",start:"top 95%"},y:0,stagger:.07,delay:.1,opacity:1})}}]),e}();function p(t){return(p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function m(t,e){for(var o=0;o<e.length;o++){var r=e[o];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,function(t){t=function(t,e){if("object"!==p(t)||null===t)return t;var o=t[Symbol.toPrimitive];if(void 0===o)return("string"===e?String:Number)(t);o=o.call(t,e||"default");if("object"!==p(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}(t,"string");return"symbol"===p(t)?t:String(t)}(r.key),r)}}a.a.registerPlugin(r.a);var d=function(){function e(t){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),this.carditems=t.querySelectorAll(".case-study__item"),this.designer=t.querySelector(".case-study__designer"),this.designerAlt=t.querySelector(".case-study__designer-alt"),this.animateCards(this.carditems),this.title=t.querySelector(".case-study__title"),this.splitType=new i.a(this.title),this.animateTitle(),this.animateDesigner(this.designer,this.designerAlt)}return function(t,e,o){e&&m(t.prototype,e),o&&m(t,o),Object.defineProperty(t,"prototype",{writable:!1})}(e,[{key:"animateCards",value:function(t){Array.from(t).forEach(function(t){a.a.fromTo(t,{y:100,opacity:0,scrollTrigger:{trigger:t}},{scrollTrigger:{trigger:t},duration:.8,delay:.4,opacity:1,y:0,ease:"power2.out",stagger:.2})})}},{key:"animateDesigner",value:function(t,e){a.a.fromTo(t,{y:200,scale:.1,rotation:-45,scrollTrigger:".case-study__designer-info"},{scrollTrigger:".case-study__designer-info",y:0,rotation:0,delay:.1,duration:1.2,scale:1,onComplete:function(){a.a.fromTo(e,{y:100,opacity:0},{scrollTrigger:".case-study__designer-info",duration:.7,delay:.1,opacity:1,y:0,stagger:.01})}})}},{key:"animateTitle",value:function(){a.a.to(".case-study .char",{scrollTrigger:{trigger:".case-study__item"},y:0,stagger:.02,delay:.1,duration:.4,opacity:1})}}]),e}();function g(t){return(g="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function b(t,e){for(var o=0;o<e.length;o++){var r=e[o];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,function(t){t=function(t,e){if("object"!==g(t)||null===t)return t;var o=t[Symbol.toPrimitive];if(void 0===o)return("string"===e?String:Number)(t);o=o.call(t,e||"default");if("object"!==g(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}(t,"string");return"symbol"===g(t)?t:String(t)}(r.key),r)}}a.a.registerPlugin(r.a);var h=function(){function e(t){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),this.carditems=t.querySelectorAll(".what-we-do__item"),this.animateCards(this.carditems),this.title=t.querySelector(".core-title"),this.splitType=new i.a(this.title),this.image=t.querySelector(".what-we-do__column--manager-info"),this.timeLine=a.a.timeline(),this.animateTitle(this.timeLine)}return function(t,e,o){e&&b(t.prototype,e),o&&b(t,o),Object.defineProperty(t,"prototype",{writable:!1})}(e,[{key:"animateCards",value:function(t){a.a.to(t,{duration:.8,delay:.4,opacity:1,y:0,ease:"power2.out",stagger:.2,scrollTrigger:{trigger:".what-we-do__items"}}),a.a.to(".what-we-do__column--manager-info",{scrollTrigger:{trigger:".what-we-do__items"},scale:1,delay:1.5,duration:1.5,opacity:1}),a.a.to(".what-we-do__button",{duration:.8,delay:1,opacity:1,ease:"power2.out",stagger:.2,scrollTrigger:".what-we-do__button"})}},{key:"animateTitle",value:function(t){t.set(".about__title--primary",{x:-200}).set(".about__title--secondary",{x:200}).to(".about__title--primary",{duration:1,x:0,scrollTrigger:".what-we-do__content"}).to(".about__title--secondary",{duration:1,x:0,scrollTrigger:".what-we-do__content"},"<")}}]),e}(),w=e(22);function v(t){return(v="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function _(t,e){for(var o=0;o<e.length;o++){var r=e[o];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,function(t){t=function(t,e){if("object"!==v(t)||null===t)return t;var o=t[Symbol.toPrimitive];if(void 0===o)return("string"===e?String:Number)(t);o=o.call(t,e||"default");if("object"!==v(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}(t,"string");return"symbol"===v(t)?t:String(t)}(r.key),r)}}a.a.registerPlugin(r.a),a.a.registerPlugin(w.a);var w=function(){function e(t){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),this.mm=a.a.matchMedia(),this.timeLine=a.a.timeline(),this.title=t.querySelector(".hero__title"),this.subttile=t.querySelector(".hero__subtitle"),this.splitTypeTitle=new i.a(this.title),this.splitTypeSubtitle=new i.a(this.subttile),this.animateHero(this.timeLine,this.mm)}return function(t,e,o){e&&_(t.prototype,e),o&&_(t,o),Object.defineProperty(t,"prototype",{writable:!1})}(e,[{key:"animateHero",value:function(t,e){t.set(".hero__image",{scale:2,opacity:0}).set(".hero__title .word",{y:100,opacity:0}).set(".hero__subtitle .word",{y:100,opacity:0}).set(".hero__cms-image",{scale:0}).set(".hero__image-search",{scale:0}).set(".hero__buttons",{opacity:0,y:100}).to(".hero__image",{scale:1,duration:1,opacity:1}).to(".hero__title .word",{y:0,opacity:1,scale:1,stagger:.07,duration:.2,ease:"power0.inOut"},"<").to(".hero__image-search",{scale:1,delay:.8,duration:1,opacity:1},"<").to(".hero__subtitle .word",{y:0,scale:1,stagger:.04,duration:.3,opacity:1}).to(".hero__buttons",{y:0,stagger:.04,duration:.5,opacity:1}).to(".hero__cms-image",{scale:1,duration:.3,stagger:.3}),e.add("(min-width: 768px)",function(){t.to(".hero__cms-image",{duration:5,ease:"power0.inOut",stagger:.3,motionPath:{path:"#path",align:"#path",alignOrigin:[.5,.8]}},"<")}),e.add("(max-width: 767px)",function(){t.to(".hero__cms-image",{duration:5,ease:"power0.inOut",stagger:.3,motionPath:{path:"#path1",align:"#path1",alignOrigin:[.5,.8]}},"<")}),t.to(".hero__cms-image",{stagger:.4,duration:1,scale:0,rotation:50,y:-100},"<4.5").to(".hero__image-search",{opacity:0,scale:0,ease:"back.out"}).to(".hero__image-success",{scale:1,ease:"back.out"}).to(".star",{opacity:1,rotation:180,duration:.6,repeatDelay:.3,repeat:1,yoyo:!0,transformOrigin:"center center",ease:"back.out",stagger:{each:.2,from:"random"}}).to(".hero__image-success",{scale:0}).to(".hero__image-search",{opacity:1,scale:1,ease:"back.out"}).repeat(-1)}}]),e}(),S=e(20),D=e.n(S);e(44);function T(t){return(T="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function P(t,e){for(var o=0;o<e.length;o++){var r=e[o];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,function(t){t=function(t,e){if("object"!==T(t)||null===t)return t;var o=t[Symbol.toPrimitive];if(void 0===o)return("string"===e?String:Number)(t);o=o.call(t,e||"default");if("object"!==T(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}(t,"string");return"symbol"===T(t)?t:String(t)}(r.key),r)}}var B=function(){function e(t){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),this.form=t,this.form&&(this.inputs=[].slice.call(this.form.querySelectorAll(".core-input")),this.inputFields=[].slice.call(this.form.querySelectorAll("input")),0!==this.inputs.length)&&this.inputs.forEach(function(t){t.querySelector("input")})}return function(t,e,o){e&&P(t.prototype,e),o&&P(t,o),Object.defineProperty(t,"prototype",{writable:!1})}(e,[{key:"check",value:function(){}}]),e}();function k(t){return(k="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function j(t,e){for(var o=0;o<e.length;o++){var r=e[o];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,function(t){t=function(t,e){if("object"!==k(t)||null===t)return t;var o=t[Symbol.toPrimitive];if(void 0===o)return("string"===e?String:Number)(t);o=o.call(t,e||"default");if("object"!==k(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}(t,"string");return"symbol"===k(t)?t:String(t)}(r.key),r)}}S=function(){function r(t){var e,o=this;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,r),this.form=t,this.form&&(e=new B(this.form),this.form.addEventListener("submit",function(t){t.preventDefault();t=e.check();window.debounce(o.submit(t),200)}))}return function(t,e,o){e&&j(t.prototype,e),o&&j(t,o),Object.defineProperty(t,"prototype",{writable:!1})}(r,[{key:"submit",value:function(t){var e=this;!1!==t&&(t=new window.FormData(this.form),D.a.post(this.form.action,t).then(function(t){200===t.status&&(e.form.innerHTML='<div style="display: flex; flex-direction: column; align-items: center" class="what-we-do__item-content">\n                        <div class="what-we-do__item-title">Sent!</div>\n                        <div class="what-we-do__item-text">We’ll get back to you soon</div>\n                      </div>')}).catch(function(t){console.log(t)}))}}]),r}();function x(t){return(x="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function q(t,e){for(var o=0;o<e.length;o++){var r=e[o];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,function(t){t=function(t,e){if("object"!==x(t)||null===t)return t;var o=t[Symbol.toPrimitive];if(void 0===o)return("string"===e?String:Number)(t);o=o.call(t,e||"default");if("object"!==x(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}(t,"string");return"symbol"===x(t)?t:String(t)}(r.key),r)}}a.a.registerPlugin(r.a);var H=function(){function e(t){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),this.mm=a.a.matchMedia(),this.timeLine=a.a.timeline(),this.titlePrimary=t.querySelector(".about__title--primary"),this.titleSecondary=t.querySelector(".about__title--secondary"),this.aboutText=t.querySelector(".about__text"),this.splitTypeSecondary=new i.a(this.titleSecondary),this.splitTypePrimary=new i.a(this.titlePrimary),this.splitAboutText=new i.a(this.aboutText),this.animateTitles(this.timeLine),this.animateEmployees(this.timeLine)}return function(t,e,o){e&&q(t.prototype,e),o&&q(t,o),Object.defineProperty(t,"prototype",{writable:!1})}(e,[{key:"animateTitles",value:function(t){t.set(".about__title--primary",{x:-200}).set(".about__title--secondary",{x:200}).to(".about__title--primary",{duration:1,x:0}).to(".about__title--secondary",{duration:1,x:0},"<").to(".about__text .word",{duration:.5,y:0,opacity:1,stagger:.06})}},{key:"setAnimationEmployee",value:function(t){return 0===t?{rotation:190,duration:.4,yoyo:!0,repeat:1}:1===t?{y:0,rotation:10,opacity:1,duration:.5,display:"block",ease:"bounce.out"}:2===t?{duration:.5,scale:1,opacity:1,yoyo:!0,display:"block",ease:"power.in"}:3===t?{x:0,duration:.3,yoyo:!0,display:"block",ease:"power.out"}:4===t?{rotation:10,duration:1.2,opacity:1,yoyo:!0,display:"block"}:5===t?{duration:.6,ease:"power.out",yoyo:!0,rotation:10,repeat:3}:6===t?{y:0,opacity:1,yoyo:!0,display:"block",ease:"bounce.out"}:void 0}},{key:"animateEmployees",value:function(o){var r=this,t=Array.from(document.querySelectorAll(".about__employee")),n=Array.from(document.querySelectorAll(".about__employee-animal"));t.forEach(function(t,e){console.log(n[e]),o.to(t.querySelector("svg"),{ease:"power4.inOut",fill:"#E600A1",duration:.45,repeat:3,yoyo:!0}).to(n[e],{opacity:1,duration:.2,display:"block"},"<").to(n[e].nextSibling,{opacity:1,duration:.2,scale:1},"<"),0===e?o.to(n[e],{rotation:10,duration:.4,yoyo:!0,repeat:1},">"):1===e?o.to(n[e],{y:0,rotation:10,duration:.5,ease:"bounce.out"},">"):2===e?o.to(n[e],{duration:.6,scale:1.2,rotation:-10,ease:"power.in"},">").to(n[e],{rotation:10,scale:1,ease:"power.in",duration:.6},">"):3===e?o.to(n[e],{x:0,duration:.3,yoyo:!0,ease:"power.out"},">"):4===e?o.to(n[e],r.setAnimationEmployee(e),">"):5===e?o.to(n[e],{scale:1,duration:1},">").to(n[e],{duration:.6,ease:"power.out",yoyo:!0,rotation:10,repeat:3}):6===e&&o.to(n[e],r.setAnimationEmployee(e),">"),o.to(n[e],{opacity:0,duration:.2,display:"none"}).to(n[e],{width:0,height:0}).repeat(-1)})}}]),e}(),E=e(21);function O(t){return(O="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function A(t,e){for(var o=0;o<e.length;o++){var r=e[o];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,function(t){t=function(t,e){if("object"!==O(t)||null===t)return t;var o=t[Symbol.toPrimitive];if(void 0===o)return("string"===e?String:Number)(t);o=o.call(t,e||"default");if("object"!==O(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}(t,"string");return"symbol"===O(t)?t:String(t)}(r.key),r)}}function F(t,e,o){return e&&A(t.prototype,e),o&&A(t,o),Object.defineProperty(t,"prototype",{writable:!1}),t}a.a.registerPlugin(E.a);E=F(function t(e){var o=this;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),a.a.to(e,{scrollTrigger:{trigger:".header",toggleActions:"play pause resume none",end:"center top"},duration:1.4,opacity:1}),this.parent=e,this.links=Array.from(e.querySelectorAll(".header__menu-link")),this.menuToggleCheckobx=e.querySelector("#menu-toggle"),this.body=document.body,this.gsap=a.a,this.mm=a.a.matchMedia(),this.menuContainer=e.querySelector(".header__menu-container"),this.menuToggleCheckobx.addEventListener("change",function(t){t.target.checked?o.body.classList.add("body-overflow-lock"):o.body.classList.remove("body-overflow-lock")}),this.mm.add("(min-width: 768px)",function(){o.links.forEach(function(t){t.addEventListener("click",function(t){var e=t.target.getAttribute("href");a.a.to(window,{duration:1,scrollTo:e}),t.preventDefault()})})}),this.mm.add("(max-width: 767px)",function(){o.links.forEach(function(t){t.addEventListener("click",function(t){var e=t.target.getAttribute("href");o.body.classList.remove("body-overflow-lock"),o.menuToggleCheckobx.checked=!1,a.a.to(window,{duration:1,scrollTo:{y:e}}),t.preventDefault()})})})});function C(t){return(C="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function L(t,e){for(var o=0;o<e.length;o++){var r=e[o];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,function(t){t=function(t,e){if("object"!==C(t)||null===t)return t;var o=t[Symbol.toPrimitive];if(void 0===o)return("string"===e?String:Number)(t);o=o.call(t,e||"default");if("object"!==C(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}(t,"string");return"symbol"===C(t)?t:String(t)}(r.key),r)}}a.a.registerPlugin(r.a);var V=function(){function e(t){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),this.title=t.querySelectorAll(".connect-us__title"),this.image=t.querySelectorAll(".connect-us__image"),this.text=t.querySelector(".connect-us__image-text"),this.splitType=new i.a(this.title),this.splitTypeText=new i.a(this.text),this.animateTitle(),this.animateBlockContent()}return function(t,e,o){e&&L(t.prototype,e),o&&L(t,o),Object.defineProperty(t,"prototype",{writable:!1})}(e,[{key:"animateTitle",value:function(){a.a.to(".connect-us__title .word",{scrollTrigger:{trigger:".connect-us__title"},y:0,delay:.5,stagger:.07,duration:.4,opacity:1})}},{key:"animateBlockContent",value:function(){a.a.to(this.image,{scrollTrigger:{trigger:".connect-us__image",start:"center 95%"},scale:1,delay:.5,duration:1.5,opacity:1}),a.a.to(".connect-us__image-text .word",{scrollTrigger:{trigger:".connect-us__image-text",start:"center 95%"},y:0,delay:.5,duration:.5,opacity:1,stagger:.08}),a.a.to(".form__fields-group",{y:0,delay:2,duration:.9,opacity:1,stagger:.2,scrollTrigger:{trigger:".form__fields-group",start:"center 95%"}}),a.a.to(".form__submit",{delay:2.5,duration:.9,opacity:1,stagger:.2,scrollTrigger:{trigger:".form__submit"}})}}]),e}();function z(t){return(z="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function N(t,e){for(var o=0;o<e.length;o++){var r=e[o];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,function(t){t=function(t,e){if("object"!==z(t)||null===t)return t;var o=t[Symbol.toPrimitive];if(void 0===o)return("string"===e?String:Number)(t);o=o.call(t,e||"default");if("object"!==z(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}(t,"string");return"symbol"===z(t)?t:String(t)}(r.key),r)}}function I(t,e,o){return e&&N(t.prototype,e),o&&N(t,o),Object.defineProperty(t,"prototype",{writable:!1}),t}a.a.registerPlugin(r.a);r=I(function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),a.a.to(e,{scrollTrigger:{trigger:".footer",start:"top 90%"},delay:.3,duration:1.5,opacity:1})});e(45),e(46),e(47),window.bodyLock=e(48),t()(null,{watchMQ:!0}),window.lazySizesConfig=window.lazySizesConfig||{},window.lazySizesConfig.customMedia={"--small":"(max-width: 767px)","--medium":"(min-width: 768px) and (max-width: 1279px)","--large":"(min-width: 1280px)"},window.lazySizesConfig.preloadAfterLoad=!0,window.lazySizesConfig.expand=600,window.lazySizesConfig.expFactor=1,window.debounce=function(r,n){var i=null;return function(){for(var t=arguments.length,e=new Array(t),o=0;o<t;o++)e[o]=arguments[o];i&&clearTimeout(i),i=setTimeout(function(){r.apply(void 0,e),i=null},n)}},[].slice.call(document.querySelectorAll('[name="phone"]')).forEach(function(t){t.mask=new o.a(t,{mask:"+{7}(000) 000-00-00"})}),[].forEach.call(document.querySelectorAll(".reviews"),function(t){t&&new c(t)}),new w(document.querySelector(".hero")),new E(document.querySelector(".header")),new f(document.querySelector(".help-you")),new d(document.querySelector(".case-study")),new S(document.querySelector(".form")),new V(document.querySelector(".connect-us")),new r(document.querySelector(".footer")),new h(document.querySelector(".what-we-do")),new H(document.querySelector(".about"))}});