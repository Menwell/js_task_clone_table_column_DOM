function r(r,t){(null==t||t>r.length)&&(t=r.length);for(var e=0,n=Array(t);e<t;e++)n[e]=r[e];return n}var t=function(t){if(Array.isArray(t))return r(t)}(a=document.querySelectorAll("tr"))||function(r){if("undefined"!=typeof Symbol&&null!=r[Symbol.iterator]||null!=r["@@iterator"])return Array.from(r)}(a)||function(t,e){if(t){if("string"==typeof t)return r(t,void 0);var n=Object.prototype.toString.call(t).slice(8,-1);if("Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return r(t,void 0)}}(a)||function(){throw TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}(),e=!0,n=!1,o=void 0;try{for(var a,l,i=t[Symbol.iterator]();!(e=(l=i.next()).done);e=!0){var u=l.value,f=u.children[1].cloneNode(!0);u.lastElementChild.before(f)}}catch(r){n=!0,o=r}finally{try{e||null==i.return||i.return()}finally{if(n)throw o}}
//# sourceMappingURL=index.9863c779.js.map
