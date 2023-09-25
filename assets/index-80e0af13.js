!function(){const t=document.createElement("link").relList;if(!(t&&t.supports&&t.supports("modulepreload"))){for(const t of document.querySelectorAll('link[rel="modulepreload"]'))e(t);new MutationObserver((t=>{for(const n of t)if("childList"===n.type)for(const t of n.addedNodes)"LINK"===t.tagName&&"modulepreload"===t.rel&&e(t)})).observe(document,{childList:!0,subtree:!0})}function e(t){if(t.ep)return;t.ep=!0;const e=function(t){const e={};return t.integrity&&(e.integrity=t.integrity),t.referrerPolicy&&(e.referrerPolicy=t.referrerPolicy),"use-credentials"===t.crossOrigin?e.credentials="include":"anonymous"===t.crossOrigin?e.credentials="omit":e.credentials="same-origin",e}(t);fetch(t.href,e)}}();const E=["A21117FF","A11117FF","A11127FF","A21127FF","A21107FF","A21107FE","A21117FE"],F={input:{themeswitcher:"themeswitcher",portalglyphsInput:"portalglyphsInput",delButton:"delButton",submitBtnGen:"submitBtnGen",resetBtnGen:"resetBtnGen",tagInput:"tagInput",submitBtnDec:"submitBtnDec",resetBtnDec:"resetBtnDec"},output:{toc:"toc",glyphDisplay:"glyphDisplay"}},u={};function O(t){for(const e of Object.entries(t)){const t=e[0],n=e[1];for(const[e,r]of Object.entries(n)){const n=b(r);null!=n&&(u[t]??(u[t]={}),u[t][e]=n)}}}function b(t){const e=Array.from(document.getElementsByName(t));return e.length?e:document.getElementById(t)}function y(t){const e=A(t),n=document.querySelector(`#${e} .output`),r=n.querySelector("output"),o=n.querySelector(".status"),u={generator:()=>j(),decoder:()=>P()},{status:l="",output:s=""}=u[e](),i=l.includes("Error");n.classList[i?"add":"remove"]("error"),o.innerText=l,r.innerText=s}function I(t){const e=A(t),n=document.getElementById(e),r=n.querySelector("input"),o=Array.from(n.querySelectorAll("output, .output>*")),u=Array.from(n.querySelectorAll(".error"));for(const t of u)t.classList.remove("error");for(const t of o)t.innerHTML="";r.value=""}O(F);const G=window.matchMedia("(prefers-color-scheme: dark)").matches;function v(t=null){const e="dark"==document.documentElement.dataset.theme?"light":"dark",n=t??e;document.documentElement.dataset.theme=n}v(G?"dark":"light");const L=[{element:"themeswitcher",handler:"click",func:function(){v()}},{element:"portalglyphsInput",handler:"input",func:function(){w(this)}},{element:"delButton",handler:"click",func:function(){D("portalglyphsInput")}},{element:"tagInput",handler:"input",func:function(){this.value=this.value.toUpperCase()}},{element:"submitBtnGen",handler:"click",func:function(){y(this)}},{element:"resetBtnGen",handler:"click",func:function(){I(this)}},{element:"submitBtnDec",handler:"click",func:function(){y(this)}},{element:"resetBtnDec",handler:"click",func:function(){I(this)}}];for(const t of L)S(t);function S(t){const{handler:e,func:n}=t,r=t.element,o=u[r]?u[r]:b(r);Array.isArray(o)?o.forEach((t=>t.addEventListener(e,n))):o.addEventListener(e,n)}const m="0123456789ABCDEF",x=767,d=4,a=12,N=document.querySelector(".portal-buttons"),B=[],V=[];for(let t=0;t<m.length;t++){const e={element:"glyphButton"+t.toString(),handler:"click",func:function(){T(this)}},n=m[t],r=`<button class="button glyphs" type="button" id="glyphButton${t}" value="${n}">${n}</button>`;B.push(r),V.push(e)}N.innerHTML=B.join("");for(const t of V)S(t);function w(t){var e,n;const r=null==(n=null==(e=null==t?void 0:t.value)?void 0:e.toUpperCase)?void 0:n.call(e);if(null==r)return;const o=r.split("").filter((t=>m.includes(t))).join("").substring(0,a);t.value=o,g(),f(t)}function g(){const t=u.input.portalglyphsInput;u.output.glyphDisplay.innerText=t.value}function T(t){const e=u.input.portalglyphsInput;e.value.length<a&&(e.value+=t.value),g(),f(e)}function D(t){const e=document.getElementById(t),n=e.value.slice(0,-1);e.value=n,g(),f(e)}function f(t,e=!1){const n=t.value,r=n.substring(d),o=+("0x"+n.substring(1,d)),u=n.length==a,l=E.includes(r),s=o&&o<x+1,i=e||n.length==a?u&&l&&s:n.length!=a;if(t.classList[i?"remove":"add"]("error"),!i){if(!u)return{isValid:!1,error:"Invalid glyph sequence: Incorrect length"};if(!l)return{isValid:!1,error:"Invalid glyph sequence: No Eisvana region"};if(!s)return{isValid:!1,error:"Invalid glyph sequence: Not reachable via portal"}}return{isValid:!0}}function q(t){const e=t.substring(d),n=e.indexOf(e);return n>-1?n+1:0}function C(t){const e=+("0x"+t.substring(1,d));return!e||e>x?"":e.toString(16).toUpperCase().replace("69","68+1")}const k=3;function A(t){return t.closest("section").id}function j(){const t=u.input.portalglyphsInput,e=t.value,{isValid:n,error:r=""}=f(t,!0);if(!e)return{status:"",output:""};if(!n)return{status:"Error:",output:r};return{status:"System Name Prefix:",output:`EV${q(e)}-${C(e)}`}}function P(){const t=u.input.tagInput.value.replaceAll(/[\[\]]/g,"").replaceAll("68+1","69").trim();if(!t)return{status:"",output:""};const[e,n]=t.split("-"),r=e.replace("EV",""),o=parseInt(r)-1,l=E[o];if(!n||!l||!e.startsWith("EV")){let t="";return n?(!l||!e.startsWith("EV"))&&(t='Invalid prefix format (no "EV" or wrong region ID)'):t='Invalid prefix format (missing "-")',{status:"Error:",output:t}}return{status:"Glyphs:",output:"0"+n.padStart(k,"0")+l}}
