(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[301],{8949:function(t,e,r){"use strict";r.d(e,{FT:function(){return u}});var n=r(2265),o=r(7437);let i=["as","disabled"];function u({tagName:t,disabled:e,href:r,target:n,rel:o,role:i,onClick:u,tabIndex:s=0,type:a}){t||(t=null!=r||null!=n||null!=o?"a":"button");let l={tagName:t};if("button"===t)return[{type:a||"button",disabled:e},l];let f=n=>{var o;if(!e&&("a"!==t||(o=r)&&"#"!==o.trim())||n.preventDefault(),e){n.stopPropagation();return}null==u||u(n)};return"a"===t&&(r||(r="#"),e&&(r=void 0)),[{role:null!=i?i:"button",disabled:void 0,tabIndex:e?void 0:s,href:r,target:"a"===t?n:void 0,"aria-disabled":e||void 0,rel:"a"===t?o:void 0,onClick:f,onKeyDown:t=>{" "===t.key&&(t.preventDefault(),f(t))}},l]}let s=n.forwardRef((t,e)=>{let{as:r,disabled:n}=t,s=function(t,e){if(null==t)return{};var r,n,o={},i=Object.keys(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||(o[r]=t[r]);return o}(t,i),[a,{tagName:l}]=u(Object.assign({tagName:r,disabled:n},s));return(0,o.jsx)(l,Object.assign({},s,a,{ref:e}))});s.displayName="Button",e.ZP=s},4440:function(t,e){var r;/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/!function(){"use strict";var n={}.hasOwnProperty;function o(){for(var t=[],e=0;e<arguments.length;e++){var r=arguments[e];if(r){var i=typeof r;if("string"===i||"number"===i)t.push(r);else if(Array.isArray(r)){if(r.length){var u=o.apply(null,r);u&&t.push(u)}}else if("object"===i){if(r.toString!==Object.prototype.toString&&!r.toString.toString().includes("[native code]")){t.push(r.toString());continue}for(var s in r)n.call(r,s)&&r[s]&&t.push(s)}}}return t.join(" ")}t.exports?(o.default=o,t.exports=o):void 0!==(r=(function(){return o}).apply(e,[]))&&(t.exports=r)}()},2457:function(t,e,r){Promise.resolve().then(r.bind(r,5573))},5573:function(t,e,r){"use strict";r.r(e);var n=r(7437),o=r(4033),i=r(6716);e.default=()=>{let t=(0,o.useRouter)(),e=()=>{t.push("/")};return(0,n.jsxs)(n.Fragment,{children:["About",(0,n.jsx)(i.Z,{variant:"success",children:"ABC"}),(0,n.jsx)("div",{children:(0,n.jsx)("button",{className:"border-[1px]",onClick:()=>e(),children:"Back home"})})]})}},622:function(t,e,r){"use strict";/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var n=r(2265),o=Symbol.for("react.element"),i=Symbol.for("react.fragment"),u=Object.prototype.hasOwnProperty,s=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function l(t,e,r){var n,i={},l=null,f=null;for(n in void 0!==r&&(l=""+r),void 0!==e.key&&(l=""+e.key),void 0!==e.ref&&(f=e.ref),e)u.call(e,n)&&!a.hasOwnProperty(n)&&(i[n]=e[n]);if(t&&t.defaultProps)for(n in e=t.defaultProps)void 0===i[n]&&(i[n]=e[n]);return{$$typeof:o,type:t,key:l,ref:f,props:i,_owner:s.current}}e.Fragment=i,e.jsx=l,e.jsxs=l},7437:function(t,e,r){"use strict";t.exports=r(622)},4033:function(t,e,r){t.exports=r(8165)},6716:function(t,e,r){"use strict";var n=r(4440),o=r.n(n),i=r(2265),u=r(8949),s=r(7127),a=r(7437);let l=i.forwardRef(({as:t,bsPrefix:e,variant:r="primary",size:n,active:i=!1,disabled:l=!1,className:f,...c},p)=>{let d=(0,s.vE)(e,"btn"),[v,{tagName:b}]=(0,u.FT)({tagName:t,disabled:l,...c});return(0,a.jsx)(b,{...v,...c,ref:p,disabled:l,className:o()(f,d,i&&"active",r&&`${d}-${r}`,n&&`${d}-${n}`,c.href&&l&&"disabled")})});l.displayName="Button",e.Z=l},7127:function(t,e,r){"use strict";r.d(e,{pi:function(){return a},vE:function(){return s},zG:function(){return l}});var n=r(2265);r(7437);let o=n.createContext({prefixes:{},breakpoints:["xxl","xl","lg","md","sm","xs"],minBreakpoint:"xs"}),{Consumer:i,Provider:u}=o;function s(t,e){let{prefixes:r}=(0,n.useContext)(o);return t||r[e]||e}function a(){let{breakpoints:t}=(0,n.useContext)(o);return t}function l(){let{minBreakpoint:t}=(0,n.useContext)(o);return t}}},function(t){t.O(0,[971,596,744],function(){return t(t.s=2457)}),_N_E=t.O()}]);