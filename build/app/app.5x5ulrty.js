/*! Built with http://stenciljs.com */
(function(Context,appNamespace,hydratedCssClass,publicPath){"use strict";
var s=document.querySelector("script[data-namespace='app']");if(s){publicPath=s.getAttribute('data-path');}
(function(publicPath){
    /** @stencil/router global **/

    Context.activeRouter = (function () {
        let state = {};
        let groups = {};
        let activeGroupId = 0;
        const nextListeners = [];
        function getDefaultState() {
            return {
                location: {
                    pathname: Context.window.location.pathname,
                    search: Context.window.location.search
                }
            };
        }
        function set(value) {
            state = Object.assign({}, state, value);
            dispatch();
        }
        function get(attrName) {
            if (Object.keys(state).length === 0) {
                return getDefaultState();
            }
            if (!attrName) {
                return state;
            }
            return state[attrName];
        }
        function dispatch() {
            const listeners = nextListeners;
            for (let i = 0; i < listeners.length; i++) {
                const listener = listeners[i];
                listener();
            }
        }
        function createGroup(startLength) {
            activeGroupId += 1;
            groups[activeGroupId] = {};
            groups[activeGroupId].startLength = startLength;
            groups[activeGroupId].listenerList = [];
            groups[activeGroupId].groupedListener = () => {
                let switchMatched = false;
                groups[activeGroupId].listenerList.forEach((listener) => {
                    if (switchMatched) {
                        listener(true);
                    }
                    else {
                        switchMatched = listener(false) !== null;
                    }
                });
            };
            nextListeners.push(groups[activeGroupId].groupedListener);
            return activeGroupId;
        }
        function addGroupListener(listener, groupName, groupIndex) {
            groups[groupName].listenerList[groupIndex] = listener;
            if (groups[groupName].listenerList.length === groups[activeGroupId].startLength) {
                groups[groupName].groupedListener();
            }
        }
        function removeGroupListener(groupId, groupIndex) {
            groups[groupId].listenerList.splice(groupIndex, 1);
            if (groups[groupId].listenerList.length === 0) {
                const index = nextListeners.indexOf(groups[groupId].groupedListener);
                nextListeners.splice(index, 1);
                delete groups[groupId];
            }
        }
        function subscribe(listener, groupName, groupIndex) {
            if (typeof listener !== 'function') {
                throw new Error('Expected listener to be a function.');
            }
            if (groupName) {
                addGroupListener(listener, groupName, groupIndex);
            }
            else {
                nextListeners.push(listener);
            }
            let isSubscribed = true;
            return function unsubscribe() {
                if (!isSubscribed) {
                    return;
                }
                if (groupName) {
                    removeGroupListener(groupName, groupIndex);
                }
                else {
                    const index = nextListeners.indexOf(listener);
                    nextListeners.splice(index, 1);
                }
                isSubscribed = false;
            };
        }
        return {
            set,
            get,
            subscribe,
            createGroup,
        };
    })();
})(publicPath);
(function(n,t,e,o,i){"use strict";function c(n,t,e,o,i,c,f){let r=e.n+(o||E),l=e[r];if(l||(l=e[r=e.n+E]),l){let o=t.t;if(t.e)if(1===e.encapsulation)o=i.shadowRoot;else for(;i=t.o(i);)if(i.host&&i.host.shadowRoot){o=i.host.shadowRoot;break}const c=n.i.get(o)||{};if(!c[r]){f=l.content.cloneNode(!0);const e=o.querySelectorAll("[data-styles]");t.c(o,f,e.length&&e[e.length-1].nextSibling||o.f),c[r]=!0,n.i.set(o,c)}}}function f(n){return{r:n[0],l:n[1],s:!!n[2],u:!!n[3],a:!!n[4]}}function r(n,t){if(O(t)){if(n===Boolean||3===n)return"false"!==t&&(""===t||!!t);if(n===Number||4===n)return parseFloat(t)}return t}function l(n,t,e,o){const i=n.p.get(t);i&&((o=i.$activeLoading)&&((e=o.indexOf(t))>-1&&o.splice(e,1),!o.length&&i.$initLoad()),n.p.delete(t))}function s(n,t,e){let o,i=!1,c=!1;for(var f=arguments.length;f-- >2;)P.push(arguments[f]);for(;P.length;)if((e=P.pop())&&void 0!==e.pop)for(f=e.length;f--;)P.push(e[f]);else"boolean"==typeof e&&(e=null),(c="function"!=typeof n)&&(null==e?e="":"number"==typeof e?e=String(e):"string"!=typeof e&&(c=!1)),c&&i?o[o.length-1].d+=e:void 0===o?o=[c?u(e):e]:o.push(c?u(e):e),i=c;const r=new L;if(r.m=n,r.y=o,t&&(r.v=t,r.w=t.b,r.M=t.ref,t.className&&(t.class=t.className),"object"==typeof t.class)){for(f in t.class)t.class[f]&&P.push(f);t.class=P.join(" "),P.length=0}return r}function u(n){const t=new L;return t.d=n,t}function a(n,t){n.k.has(t)||(n.k.set(t,!0),n.g.add(()=>{(function n(t,e,o,i,c){if(t.k.delete(e),!t.C.has(e)){let f;if(i=t.W.get(e),o=!i){if((c=t.p.get(e))&&!c.$rendered)return void(c.$onRender=c.$onRender||[]).push(()=>{n(t,e)});i=function f(n,t,e,o,i,c){try{(function f(n,t,e,o,i,c){for(c in n.N.set(o,e),n.j.has(e)||n.j.set(e,{}),(i=Object.assign({color:{type:String}},t.properties)).mode={type:String},i)d(n,i[c],e,o,c)})(n,o=n.O(t).x,t,e=new o)}catch(o){e={},n.S(o,7,t,!0)}return n.W.set(t,e),e}(t,e);try{i.componentWillLoad&&(f=i.componentWillLoad())}catch(n){t.S(n,3,e)}}f&&f.then?f.then(()=>p(t,e,i,o)):p(t,e,i,o)}})(n,t)}))}function p(n,t,e,o){(function i(n,t,e,o,c){try{const i=t.x.host;if(o.render||o.hostData||i){n.T=!0;const i=o.render&&o.render();let f;n.T=!1;const r=n.A.get(e)||new L;r.L=e,n.A.set(e,n.render(r,s(null,f,i),c,n.P.get(e),n.R.get(e),t.x.encapsulation))}n.q(n,n.B,t,o.mode,e),e.$rendered=!0,e.$onRender&&(e.$onRender.forEach(n=>n()),e.$onRender=null)}catch(t){n.T=!1,n.S(t,8,e,!0)}})(n,n.O(t),t,e,!o);try{o&&t.$initLoad()}catch(e){n.S(e,6,t,!0)}}function d(n,t,e,o,i){if(t.type||t.state){const c=n.j.get(e);if(!t.state){if(t.attr&&(void 0===c[i]||""===c[i])){const o=n.B.D(e,t.attr);null!=o&&(c[i]=r(t.type,o))}e.hasOwnProperty(i)&&(void 0===c[i]&&(c[i]=e[i]),delete e[i])}o.hasOwnProperty(i)&&void 0===c[i]&&(c[i]=o[i]),t.watchCallbacks&&(c[R+i]=t.watchCallbacks.slice()),h(o,i,function c(t){return(t=n.j.get(n.N.get(this)))&&t[i]},function f(e,o){(o=n.N.get(this))&&(t.state||t.mutable)&&m(n,o,i,e)})}else if(t.context){const c=n.H(t.context);void 0!==c&&y(o,i,c.F&&c.F(e)||c)}}function m(n,t,e,o,i,c,f){(i=n.j.get(t))||n.j.set(t,i={});const r=i[e];if(o!==r&&(i[e]=o,c=n.W.get(t))){if(f=i[R+e])for(let n=0;n<f.length;n++)try{c[f[n]].call(c,o,r,e)}catch(n){}!n.T&&t.$rendered&&a(n,t)}}function y(n,t,e){Object.defineProperty(n,t,{configurable:!0,value:e})}function h(n,t,e,o){Object.defineProperty(n,t,{configurable:!0,get:e,set:o})}function v(n,t,e,o,i){const c=11===e.L.nodeType&&e.L.host?e.L.host:e.L,f=t&&t.v||N,r=e.v||N;for(i in f)r&&null!=r[i]||null==f[i]||w(n,c,i,f[i],void 0,o);for(i in r)i in f&&r[i]===("value"===i||"checked"===i?c[i]:f[i])||w(n,c,i,f[i],r[i],o)}function w(n,t,e,o,i,c,f,r){if("class"!==e||c)if("style"===e){for(f in o=o||N,i=i||N,o)i[f]||(t.style[f]="");for(f in i)i[f]!==o[f]&&(t.style[f]=i[f])}else if("o"!==e[0]||"n"!==e[1]||e in t)if("list"!==e&&"type"!==e&&!c&&(e in t||-1!==["object","function"].indexOf(typeof i)&&null!==i)){const o=n.O(t);o&&o.z&&o.z[e]?b(t,e,i):"ref"!==e&&(b(t,e,null==i?"":i),null!=i&&!1!==i||t.removeAttribute(e))}else null!=i&&(f=e!==(e=e.replace(/^xlink\:?/,"")),1!==q[e]||i&&"false"!==i?"function"!=typeof i&&(f?t.setAttributeNS(B,T(e),i):t.setAttribute(e,i)):f?t.removeAttributeNS(B,T(e)):t.removeAttribute(e));else e=T(e.substring(2)),i?i!==o&&n.B.I(t,e,i):n.B.Q(t,e);else if(o!==i){const n=null==o||""===o?j:o.trim().split(/\s+/),e=null==i||""===i?j:i.trim().split(/\s+/);let c=null==t.className||""===t.className?j:t.className.trim().split(/\s+/);for(f=0,r=n.length;f<r;f++)-1===e.indexOf(n[f])&&(c=c.filter(t=>t!==n[f]));for(f=0,r=e.length;f<r;f++)-1===n.indexOf(e[f])&&(c=[...c,e[f]]);t.className=c.join(" ")}}function b(n,t,e){try{n[t]=e}catch(n){}}function M(n,t){function e(o,i,c){let f=0;if("function"==typeof o.m&&(o=o.m(Object.assign({},o.v,{U:o.y}))),!u&&"slot"===o.m){if(l||s){a&&t.G(i,a+"-slot","");const e=o.v&&o.v.name;let c;if(c=O(e)?s&&s[e]:l,O(c)){for(n.J=!0;f<c.length;f++)t.K(c[f]),t.V(i,c[f]);n.J=!1}}return null}if(O(o.d))o.L=t.X(o.d);else{const i=o.L=t.Y(o.m);v(n,null,o,D),null!==a&&i.Z!==a&&t.G(i,i.Z=a,"");const c=o.y;if(c){let n;for(;f<c.length;++f)(n=e(c[f],i))&&t.V(i,n)}"svg"===o.m&&(D=!1)}return o.L}function o(n,o,i,c,f,r,l){const s=n.$defaultHolder&&t.o(n.$defaultHolder)||n;for(;c<=f;++c)l=i[c],O(l)&&(r=O(l.d)?t.X(l.d):e(l,n),O(r)&&(l.L=r,t.c(s,r,o)))}function i(n,e,o){for(;e<=o;++e)O(n[e])&&t.K(n[e].L)}function c(n,t){return n.m===t.m&&n.w===t.w}function f(n,t,e){const o={};let i,c,f;for(i=t;i<=e;++i)null!=(f=n[i])&&void 0!==(c=f.w)&&(o._=i);return o}let r,l,s,u,a;return function u(p,d,m,y,h,w,b){return r=m,l=y,s=h,a="scoped"===w||"shadow"===w&&!t.e?"data-"+t.nn(p.L):null,r||a&&t.G(p.L,a+"-host",""),function r(l,s){const u=s.L=l.L,a=l.y,p=s.y;let d;if(S(s.d))"slot"!==s.m&&v(n,l,s,D),O(a)&&O(p)?function m(n,l,s){let u,a,p,d,m=0,y=0,h=l.length-1,v=l[0],w=l[h],b=s.length-1,M=s[0],$=s[b];for(;m<=h&&y<=b;)null==v?v=l[++m]:null==w?w=l[--h]:null==M?M=s[++y]:null==$?$=s[--b]:c(v,M)?(r(v,M),v=l[++m],M=s[++y]):c(w,$)?(r(w,$),w=l[--h],$=s[--b]):c(v,$)?(r(v,$),t.c(n,v.L,t.tn(w.L)),v=l[++m],$=s[--b]):c(w,M)?(r(w,M),t.c(n,w.L,v.L),w=l[--h],M=s[++y]):(S(u)&&(u=f(l,m,h)),a=u[M.w],S(a)?(d=e(M,n),M=s[++y]):((p=l[a]).m!==M.m?d=e(M,n):(r(p,M),l[a]=void 0,d=p.L),M=s[++y]),d&&t.c(v.L&&v.L.parentNode||n,d,v.L));m>h?o(n,null==s[b+1]?null:s[b+1].L,s,y,b):y>b&&i(l,m,h)}(u,a,p):O(p)?(O(l.d)&&t.en(u,""),o(u,null,p,0,p.length-1)):O(a)&&i(a,0,a.length-1);else if(d=n.P.get(u)){const e=d[0].parentElement;t.en(e,s.d),n.P.set(u,[e.childNodes[0]])}else l.d!==s.d&&t.en(u,s.d);"svg"===s.m&&D&&(D=!1)}(p,d),d}}function $(n,t){n&&(n.M&&n.M(t?null:n.L),n.y&&n.y.forEach(n=>{$(n,t)}))}function k(n,t,e,o,i){const c=n.on(t);let f,r,l,s;if(i&&1===c){(r=n.D(t,W))&&(l=r.split("."))[0]===o&&((s=new L).m=n.nn(s.L=t),e.y||(e.y=[]),e.y[l[1]]=s,e=s,i=""!==l[2]);for(let c=0;c<t.childNodes.length;c++)k(n,t.childNodes[c],e,o,i)}else 3===c&&(f=t.previousSibling)&&8===n.on(f)&&"s"===(l=n.in(f).split("."))[0]&&l[1]===o&&((s=u(n.in(t))).L=t,e.y||(e.y=[]),e.y[l[2]]=s)}function g(n,t,e,o){return function(){const i=arguments;return function c(n,t,e){return new Promise(o=>{let i=t[e];i||(i=n.cn.querySelector(e)),i||(i=t[e]=n.Y(e),n.V(n.cn,i)),i.componentOnReady(o)})}(n,t,e).then(n=>n[o].apply(n,i))}}const C="data-ssrv",W="data-ssrc",E="$",N={},j=[],x={enter:13,escape:27,space:32,tab:9,left:37,up:38,right:39,down:40},O=n=>void 0!==n&&null!==n,S=n=>void 0===n||null===n,T=n=>n.toLowerCase(),A=()=>{};class L{}const P=[],R="wc-",q={allowfullscreen:1,async:1,autofocus:1,autoplay:1,checked:1,controls:1,disabled:1,enabled:1,formnovalidate:1,hidden:1,multiple:1,noresize:1,readonly:1,required:1,selected:1,spellcheck:1},B="http://www.w3.org/1999/xlink";let D=!1;const H=n[o]=n[o]||{};{const o=function F(t,e,o,i,u,p){const d={html:{}},v={},w=function b(n,t){const e=new WeakMap,o={fn:t.documentElement,t:t.head,cn:t.body,rn:!1,on:n=>n.nodeType,Y:n=>t.createElement(n),ln:(n,e)=>t.createElementNS(n,e),X:n=>t.createTextNode(n),sn:n=>t.createComment(n),c:(n,t,e)=>n.insertBefore(t,e),K:n=>n.remove(),V:(n,t)=>n.appendChild(t),un:n=>n.childNodes,o:n=>n.parentNode,tn:n=>n.nextSibling,nn:n=>T(n.tagName),in:n=>n.textContent,en:(n,t)=>n.textContent=t,D:(n,t)=>n.getAttribute(t),G:(n,t,e)=>n.setAttribute(t,e),an:(n,t,e,o)=>n.setAttributeNS(t,e,o),pn:(n,t)=>n.removeAttribute(t),dn:(e,i)=>"child"===i?e.firstElementChild:"parent"===i?o.mn(e):"body"===i?o.cn:"document"===i?t:"window"===i?n:e,I:(n,t,i,c,f,r,l,s)=>{const u=t;let a=n,p=e.get(n);if(p&&p[u]&&p[u](),"string"==typeof r?a=o.dn(n,r):"object"==typeof r?a=r:(s=t.split(":")).length>1&&(a=o.dn(n,s[0]),t=s[1]),!a)return;let d=i;(s=t.split(".")).length>1&&(t=s[0],d=(n=>{n.keyCode===x[s[1]]&&i(n)})),l=o.rn?{capture:!!c,passive:!!f}:!!c,a.addEventListener(t,d,l),p||e.set(n,p={}),p[u]=(()=>{a&&a.removeEventListener(t,d,l),p[u]=null})},Q:(n,t)=>{const o=e.get(n);o&&(t?o[t]&&o[t]():Object.keys(o).forEach(n=>{o[n]&&o[n]()}))},mn:(n,t)=>(t=o.o(n))&&11===o.on(t)?t.host:t};return o}(o,i);t.isServer=t.isPrerender=!(t.isClient=!0),t.window=o,t.location=o.location,t.document=i,t.publicPath=u,e.h=s,e.Context=t;const W=o.$definedCmps=o.$definedCmps||{},N={yn:function j(n,e){e.mode||(e.mode=w.D(e,"mode")||t.mode),w.D(e,C)||function o(n,t){return n&&1===t.encapsulation}(w.e,n)||function i(n,t,e,o,c,f,r,l,s){for(e.$defaultHolder||t.c(e,e.$defaultHolder=t.sn(""),o[0]),s=0;s<o.length;s++)c=o[s],1===t.on(c)&&null!=(f=t.D(c,"slot"))?(l=l||{})[f]?l[f].push(c):l[f]=[c]:r?r.push(c):r=[c];n.P.set(e,r),n.R.set(e,l)}(N,w,e,e.childNodes),w.e||1!==n.encapsulation||(e.shadowRoot=e)},B:w,hn:function O(n,t){if(!W[n.n]){W[n.n]=!0,function e(n,t,o,i){o.connectedCallback=function(){(function e(n,t,o){n.C.delete(o),n.vn.has(o)||(n.vn.set(o,!0),function i(n,t,e){for(e=t;e=n.B.mn(e);)if(n.wn(e)){n.bn.has(t)||(n.p.set(t,e),(e.$activeLoading=e.$activeLoading||[]).push(t));break}}(n,o),n.g.add(()=>{n.yn(t,o),n.loadBundle(t,o.mode,()=>a(n,o))},3))})(n,t,this)},o.attributeChangedCallback=function(n,e,o){(function i(n,t,e,o,c,f){if(o!==c&&n)for(f in e=T(e),n)if(n[f].Mn===e){t[f]=r(n[f].$n,c);break}})(t.z,this,n,e,o)},o.disconnectedCallback=function(){(function t(n,e,o){!n.J&&function i(n,t){for(;t;){if(!n.o(t))return 9!==n.on(t);t=n.o(t)}}(n.B,e)&&(n.C.set(e,!0),l(n,e),$(n.A.get(e),!0),n.B.Q(e),n.kn.delete(e),(o=n.W.get(e))&&o.componentDidUnload&&o.componentDidUnload())})(n,this)},o.componentOnReady=function(t,e){return t||(e=new Promise(n=>t=n)),function o(n,t,e,i){n.C.has(t)||(n.bn.has(t)?e(t):((i=n.gn.get(t)||[]).push(e),n.gn.set(t,i)))}(n,this,t),e},o.$initLoad=function(){(function t(n,e,o,i,c){if(!n.bn.has(e)&&n.W.get(e)&&!n.C.has(e)&&(!e.$activeLoading||!e.$activeLoading.length)){delete e.$activeLoading,n.bn.set(e,!0);try{$(n.A.get(e)),(c=n.gn.get(e))&&(c.forEach(n=>n(e)),n.gn.delete(e))}catch(t){n.S(t,4,e)}e.classList.add(o),l(n,e)}})(n,this,i)},o.Cn=function(){a(n,this)},function c(n,t,e){t&&Object.keys(t).forEach(o=>{const i=t[o].Wn;1===i||2===i?h(e,o,function t(){return(n.j.get(this)||{})[o]},function t(e){m(n,this,o,e)}):6===i&&y(e,o,A)})}(n,t.z,o)}(N,n,t.prototype,p);{const e=[];for(const t in n.z)n.z[t].Mn&&e.push(n.z[t].Mn);t.observedAttributes=e}o.customElements.define(n.n,t)}},En:t.emit,O:n=>d[w.nn(n)],H:n=>t[n],isClient:!0,wn:n=>!(!W[w.nn(n)]&&!N.O(n)),loadBundle:function S(n,t,e){if(n.x)e();else{const o="string"==typeof n.Nn?n.Nn:n.Nn[t],i=u+o+(function o(n,t){return 2===t.encapsulation||1===t.encapsulation&&!n}(w.e,n)?".sc":"")+".js";import(i).then(t=>{try{n.x=t[(n=>T(n).split("-").map(n=>n.charAt(0).toUpperCase()+n.slice(1)).join(""))(n.n)],function o(n,t,e){const o=e.style;if(o){const i=e.is+(e.styleMode||E);if(!t[i]){const e=n.Y("template");t[i]=e,e.innerHTML=`<style>${o}</style>`,n.V(n.t,e)}}}(w,n,n.x)}catch(t){n.x=class{}}e()}).catch(n=>void 0)}},S:(n,t,e)=>void 0,jn:n=>(function t(n,e,o){return{create:g(n,e,o,"create"),componentOnReady:g(n,e,o,"componentOnReady")}})(w,v,n),g:function P(t,e,o){function i(){for(;u.length>0;)u.shift()();e=!1}function c(n){for(n=r(),i();a.length>0&&r()-n<40;)a.shift()();(o=a.length>0)&&l(f)}function f(n){for(i(),n=4+r();a.length>0&&r()<n;)a.shift()();(o=a.length>0)&&l(c)}const r=()=>t.performance.now(),l=t=>n.requestAnimationFrame(t),s=Promise.resolve(),u=[],a=[];return{add:(n,t)=>{3===t?(u.push(n),e||(e=!0,s.then(i))):(a.push(n),o||(o=!0,l(c)))}}}(o),xn:n=>(n||[]).map(n=>(function t(n,e,o,i){const c={n:n[0],z:{color:{Mn:"color"}}};c.Nn=n[1];const r=n[3];if(r)for(o=0;o<r.length;o++)i=r[o],c.z[i[0]]={Wn:i[1],Mn:"string"==typeof i[2]?i[2]:i[2]?i[0]:0,$n:i[3]};return c.encapsulation=n[4],n[5]&&(c.On=n[5].map(f)),e[c.n]=c})(n,d)),p:new WeakMap,i:new WeakMap,P:new WeakMap,vn:new WeakMap,kn:new WeakMap,bn:new WeakMap,N:new WeakMap,W:new WeakMap,C:new WeakMap,k:new WeakMap,R:new WeakMap,gn:new WeakMap,Sn:new WeakMap,A:new WeakMap,j:new WeakMap};N.render=M(N,w);const R=w.fn;return R.$rendered=!0,R.$activeLoading=[],R.$initLoad=(()=>N.bn.set(R,!0)),function q(n,t,e){const o=e.querySelectorAll(`[${C}]`),i=o.length;let c,f,r,l,s,u;if(i>0)for(n.bn.set(e,!0),l=0;l<i;l++)for(c=o[l],f=t.D(c,C),(r=new L).m=t.nn(r.L=c),n.A.set(c,r),s=0,u=c.childNodes.length;s<u;s++)k(t,c.childNodes[s],r,f,!0)}(N,w,R),N.q=c,N}(e,H,n,t,i,hydratedCssClass);o.xn(H.components).forEach(n=>o.hn(n,class extends HTMLElement{}))}})(window,document,Context,appNamespace,publicPath);
})({},"App","hydrated","/build/app/");