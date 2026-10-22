import{r as f,j as i,i as X,a as J,p as St,m as qr,t as Hr,f as tn,c as ge,b as _s,d as Ls,e as $,g as Kr,U as Qr,h as Vr,k as Gr}from"./autoKick-Dp0kSw2g.js";import{S as le,P as et,a as tt,b as kt,c as Yr,d as Wr,e as Xr,f as Jr,g as Zr,h as ei,i as ti,W as ni,j as si,k as ri,l as ii,m as oi,n as ai,o as li,p as ci,q as di,r as ui,s as fi,F as hi,T as Ds,R as pi}from"./config-Ce4MWhzI.js";import{l as x}from"./logger-C6gXeMnu.js";import{Y as nn,i as mi,K as Se,D as Fs,f as jt,d as zs,a as gi,b as yi,e as xi,m as bi}from"./talkTime-oTnPlHeS.js";import{r as Tn,a as vi,b as wi,f as An,L as sn,c as Si,w as ki,d as ji,e as On,g as Mn,h as Ei,i as Ci,j as Ni,k as Ti,l as Ai,m as Oi,n as Mi,o as Ii}from"./spotify-FguK52dt.js";import{M as z,i as Ri,a as Pi,b as In}from"./ytRemote-BcbPVE8e.js";var Me=class{constructor(){this.listeners=new Set,this.subscribe=this.subscribe.bind(this)}subscribe(e){return this.listeners.add(e),this.onSubscribe(),()=>{this.listeners.delete(e),this.onUnsubscribe()}}hasListeners(){return this.listeners.size>0}onSubscribe(){}onUnsubscribe(){}},_i=class extends Me{#e;#t;#n;constructor(){super(),this.#n=e=>{if(typeof window<"u"&&window.addEventListener){const t=()=>e();return window.addEventListener("visibilitychange",t,!1),()=>{window.removeEventListener("visibilitychange",t)}}}}onSubscribe(){this.#t||this.setEventListener(this.#n)}onUnsubscribe(){this.hasListeners()||(this.#t?.(),this.#t=void 0)}setEventListener(e){this.#n=e,this.#t?.(),this.#t=e(t=>{typeof t=="boolean"?this.setFocused(t):this.onFocus()})}setFocused(e){this.#e!==e&&(this.#e=e,this.onFocus())}onFocus(){const e=this.isFocused();this.listeners.forEach(t=>{t(e)})}isFocused(){return typeof this.#e=="boolean"?this.#e:globalThis.document?.visibilityState!=="hidden"}},rn=new _i,Li={setTimeout:(e,t)=>setTimeout(e,t),clearTimeout:e=>clearTimeout(e),setInterval:(e,t)=>setInterval(e,t),clearInterval:e=>clearInterval(e)},Di=class{#e=Li;#t=!1;setTimeoutProvider(e){this.#e=e}setTimeout(e,t){return this.#e.setTimeout(e,t)}clearTimeout(e){this.#e.clearTimeout(e)}setInterval(e,t){return this.#e.setInterval(e,t)}clearInterval(e){this.#e.clearInterval(e)}},ee=new Di;function Fi(e){setTimeout(e,0)}var zi=typeof window>"u"||"Deno"in globalThis;function R(){}function $i(e,t){return typeof e=="function"?e(t):e}function Et(e){return typeof e=="number"&&e>=0&&e!==1/0}function $s(e,t){return Math.max(e+(t||0)-Date.now(),0)}function G(e,t){return typeof e=="function"?e(t):e}function _(e,t){return typeof e=="function"?e(t):e}function Rn(e,t){const{type:n="all",exact:s,fetchStatus:r,predicate:o,queryKey:a,stale:l}=e;if(a){if(s){if(t.queryHash!==on(a,t.options))return!1}else if(!je(t.queryKey,a))return!1}if(n!=="all"){const d=t.isActive();if(n==="active"&&!d||n==="inactive"&&d)return!1}return!(typeof l=="boolean"&&t.isStale()!==l||r&&r!==t.state.fetchStatus||o&&!o(t))}function Pn(e,t){const{exact:n,status:s,predicate:r,mutationKey:o}=e;if(o){if(!t.options.mutationKey)return!1;if(n){if(ke(t.options.mutationKey)!==ke(o))return!1}else if(!je(t.options.mutationKey,o))return!1}return!(s&&t.state.status!==s||r&&!r(t))}function on(e,t){return(t?.queryKeyHashFn||ke)(e)}function ke(e){return JSON.stringify(e,(t,n)=>Nt(n)?Object.keys(n).sort().reduce((s,r)=>(s[r]=n[r],s),{}):n)}function je(e,t){return e===t?!0:typeof e!=typeof t?!1:e&&t&&typeof e=="object"&&typeof t=="object"?Object.keys(t).every(n=>je(e[n],t[n])):!1}var Ui=Object.prototype.hasOwnProperty;function Us(e,t,n=0){if(e===t)return e;if(n>500)return t;const s=_n(e)&&_n(t);if(!s&&!(Nt(e)&&Nt(t)))return t;const o=(s?e:Object.keys(e)).length,a=s?t:Object.keys(t),l=a.length,d=s?new Array(l):{};let c=0;for(let u=0;u<l;u++){const v=s?u:a[u],m=e[v],g=t[v];if(m===g){d[v]=m,(s?u<o:Ui.call(e,v))&&c++;continue}if(m===null||g===null||typeof m!="object"||typeof g!="object"){d[v]=g;continue}const p=Us(m,g,n+1);d[v]=p,p===m&&c++}return o===l&&c===o?e:d}function Ct(e,t){if(!t||Object.keys(e).length!==Object.keys(t).length)return!1;for(const n in e)if(e[n]!==t[n])return!1;return!0}function _n(e){return Array.isArray(e)&&e.length===Object.keys(e).length}function Nt(e){if(!Ln(e))return!1;const t=e.constructor;if(t===void 0)return!0;const n=t.prototype;return!(!Ln(n)||!n.hasOwnProperty("isPrototypeOf")||Object.getPrototypeOf(e)!==Object.prototype)}function Ln(e){return Object.prototype.toString.call(e)==="[object Object]"}function Bi(e){return new Promise(t=>{ee.setTimeout(t,e)})}function Tt(e,t,n){return typeof n.structuralSharing=="function"?n.structuralSharing(e,t):n.structuralSharing!==!1?Us(e,t):t}function qi(e,t,n=0){const s=[...e,t];return n&&s.length>n?s.slice(1):s}function Hi(e,t,n=0){const s=[t,...e];return n&&s.length>n?s.slice(0,-1):s}var an=Symbol();function Bs(e,t){return!e.queryFn&&t?.initialPromise?()=>t.initialPromise:!e.queryFn||e.queryFn===an?()=>Promise.reject(new Error(`Missing queryFn: '${e.queryHash}'`)):e.queryFn}function qs(e,t){return typeof e=="function"?e(...t):!!e}function Ki(e,t,n){let s=!1,r;return Object.defineProperty(e,"signal",{enumerable:!0,get:()=>(r??=t(),s||(s=!0,r.aborted?n():r.addEventListener("abort",n,{once:!0})),r)}),e}var Ee=(()=>{let e=()=>zi;return{isServer(){return e()},setIsServer(t){e=t}}})();function At(){let e,t;const n=new Promise((r,o)=>{e=r,t=o});n.status="pending",n.catch(()=>{});function s(r){Object.assign(n,r),delete n.resolve,delete n.reject}return n.resolve=r=>{s({status:"fulfilled",value:r}),e(r)},n.reject=r=>{s({status:"rejected",reason:r}),t(r)},n}var Qi=Fi;function Vi(){let e=[],t=0,n=l=>{l()},s=l=>{l()},r=Qi;const o=l=>{t?e.push(l):r(()=>{n(l)})},a=()=>{const l=e;e=[],l.length&&r(()=>{s(()=>{l.forEach(d=>{n(d)})})})};return{batch:l=>{let d;t++;try{d=l()}finally{t--,t||a()}return d},batchCalls:l=>(...d)=>{o(()=>{l(...d)})},schedule:o,setNotifyFunction:l=>{n=l},setBatchNotifyFunction:l=>{s=l},setScheduler:l=>{r=l}}}var A=Vi(),Gi=class extends Me{#e=!0;#t;#n;constructor(){super(),this.#n=e=>{if(typeof window<"u"&&window.addEventListener){const t=()=>e(!0),n=()=>e(!1);return window.addEventListener("online",t,!1),window.addEventListener("offline",n,!1),()=>{window.removeEventListener("online",t),window.removeEventListener("offline",n)}}}}onSubscribe(){this.#t||this.setEventListener(this.#n)}onUnsubscribe(){this.hasListeners()||(this.#t?.(),this.#t=void 0)}setEventListener(e){this.#n=e,this.#t?.(),this.#t=e(this.setOnline.bind(this))}setOnline(e){this.#e!==e&&(this.#e=e,this.listeners.forEach(n=>{n(e)}))}isOnline(){return this.#e}},Be=new Gi;function Yi(e){return Math.min(1e3*2**e,3e4)}function Hs(e){return(e??"online")==="online"?Be.isOnline():!0}var Ot=class extends Error{constructor(e){super("CancelledError"),this.revert=e?.revert,this.silent=e?.silent}};function Ks(e){let t=!1,n=0,s;const r=At(),o=()=>r.status!=="pending",a=h=>{if(!o()){const w=new Ot(h);m(w),e.onCancel?.(w)}},l=()=>{t=!0},d=()=>{t=!1},c=()=>rn.isFocused()&&(e.networkMode==="always"||Be.isOnline())&&e.canRun(),u=()=>Hs(e.networkMode)&&e.canRun(),v=h=>{o()||(s?.(),r.resolve(h))},m=h=>{o()||(s?.(),r.reject(h))},g=()=>new Promise(h=>{s=w=>{(o()||c())&&h(w)},e.onPause?.()}).then(()=>{s=void 0,o()||e.onContinue?.()}),p=()=>{if(o())return;let h;const w=n===0?e.initialPromise:void 0;try{h=w??e.fn()}catch(k){h=Promise.reject(k)}Promise.resolve(h).then(v).catch(k=>{if(o())return;const j=e.retry??(Ee.isServer()?0:3),M=e.retryDelay??Yi,L=typeof M=="function"?M(n,k):M,D=j===!0||typeof j=="number"&&n<j||typeof j=="function"&&j(n,k);if(t||!D){m(k);return}n++,e.onFail?.(n,k),Bi(L).then(()=>c()?void 0:g()).then(()=>{t?m(k):p()})})};return{promise:r,status:()=>r.status,cancel:a,continue:()=>(s?.(),r),cancelRetry:l,continueRetry:d,canStart:u,start:()=>(u()?p():g().then(p),r)}}var Qs=class{#e;destroy(){this.clearGcTimeout()}scheduleGc(){this.clearGcTimeout(),Et(this.gcTime)&&(this.#e=ee.setTimeout(()=>{this.optionalRemove()},this.gcTime))}updateGcTime(e){this.gcTime=Math.max(this.gcTime||0,e??(Ee.isServer()?1/0:300*1e3))}clearGcTimeout(){this.#e!==void 0&&(ee.clearTimeout(this.#e),this.#e=void 0)}};function Wi(e){return{onFetch:(t,n)=>{const s=t.options,r=t.fetchOptions?.meta?.fetchMore?.direction,o=t.state.data?.pages||[],a=t.state.data?.pageParams||[];let l={pages:[],pageParams:[]},d=0;const c=async()=>{let u=!1;const v=p=>{Ki(p,()=>t.signal,()=>u=!0)},m=Bs(t.options,t.fetchOptions),g=async(p,h,w)=>{if(u)return Promise.reject(t.signal.reason);if(h==null&&p.pages.length)return Promise.resolve(p);const j=(()=>{const q={client:t.client,queryKey:t.queryKey,pageParam:h,direction:w?"backward":"forward",meta:t.options.meta};return v(q),q})(),M=await m(j),{maxPages:L}=t.options,D=w?Hi:qi;return{pages:D(p.pages,M,L),pageParams:D(p.pageParams,h,L)}};if(r&&o.length){const p=r==="backward",h=p?Xi:Dn,w={pages:o,pageParams:a},k=h(s,w);l=await g(w,k,p)}else{const p=e??o.length;do{const h=d===0?a[0]??s.initialPageParam:Dn(s,l);if(d>0&&h==null)break;l=await g(l,h),d++}while(d<p)}return l};t.options.persister?t.fetchFn=()=>t.options.persister?.(c,{client:t.client,queryKey:t.queryKey,meta:t.options.meta,signal:t.signal},n):t.fetchFn=c}}}function Dn(e,{pages:t,pageParams:n}){const s=t.length-1;return t.length>0?e.getNextPageParam(t[s],t,n[s],n):void 0}function Xi(e,{pages:t,pageParams:n}){return t.length>0?e.getPreviousPageParam?.(t[0],t,n[0],n):void 0}var Ji=class extends Qs{#e;#t;#n;#s;#i;#r;#a;#o;constructor(e){super(),this.#o=!1,this.#a=e.defaultOptions,this.setOptions(e.options),this.observers=[],this.#i=e.client,this.#s=this.#i.getQueryCache(),this.queryKey=e.queryKey,this.queryHash=e.queryHash,this.#t=zn(this.options),this.state=e.state??this.#t,this.scheduleGc()}get meta(){return this.options.meta}get queryType(){return this.#e}get promise(){return this.#r?.promise}setOptions(e){if(this.options={...this.#a,...e},e?._type&&(this.#e=e._type),this.updateGcTime(this.options.gcTime),this.state&&this.state.data===void 0){const t=zn(this.options);t.data!==void 0&&(this.setState(Fn(t.data,t.dataUpdatedAt)),this.#t=t)}}optionalRemove(){!this.observers.length&&this.state.fetchStatus==="idle"&&this.#s.remove(this)}setData(e,t){const n=Tt(this.state.data,e,this.options);return this.#l({data:n,type:"success",dataUpdatedAt:t?.updatedAt,manual:t?.manual}),n}setState(e){this.#l({type:"setState",state:e})}cancel(e){const t=this.#r?.promise;return this.#r?.cancel(e),t?t.then(R).catch(R):Promise.resolve()}destroy(){super.destroy(),this.cancel({silent:!0})}get resetState(){return this.#t}reset(){this.destroy(),this.setState(this.resetState)}isActive(){return this.observers.some(e=>_(e.options.enabled,this)!==!1)}isDisabled(){return this.getObserversCount()>0?!this.isActive():this.options.queryFn===an||!this.isFetched()}isFetched(){return this.state.dataUpdateCount+this.state.errorUpdateCount>0}isStatic(){return this.getObserversCount()>0?this.observers.some(e=>G(e.options.staleTime,this)==="static"):!1}isStale(){return this.getObserversCount()>0?this.observers.some(e=>e.getCurrentResult().isStale):this.state.data===void 0||this.state.isInvalidated}isStaleByTime(e=0){return this.state.data===void 0?!0:e==="static"?!1:this.state.isInvalidated?!0:!$s(this.state.dataUpdatedAt,e)}onFocus(){this.observers.find(t=>t.shouldFetchOnWindowFocus())?.refetch({cancelRefetch:!1}),this.#r?.continue()}onOnline(){this.observers.find(t=>t.shouldFetchOnReconnect())?.refetch({cancelRefetch:!1}),this.#r?.continue()}addObserver(e){this.observers.includes(e)||(this.observers.push(e),this.clearGcTimeout(),this.#s.notify({type:"observerAdded",query:this,observer:e}))}removeObserver(e){this.observers.includes(e)&&(this.observers=this.observers.filter(t=>t!==e),this.observers.length||(this.#r&&(this.#o||this.#d()?this.#r.cancel({revert:!0}):this.#r.cancelRetry()),this.scheduleGc()),this.#s.notify({type:"observerRemoved",query:this,observer:e}))}getObserversCount(){return this.observers.length}#d(){return this.state.fetchStatus==="paused"&&this.state.status==="pending"}invalidate(){this.state.isInvalidated||this.#l({type:"invalidate"})}async fetch(e,t){if(this.state.fetchStatus!=="idle"&&this.#r?.status()!=="rejected"){if(this.state.data!==void 0&&t?.cancelRefetch)this.cancel({silent:!0});else if(this.#r)return this.#r.continueRetry(),this.#r.promise}if(e&&this.setOptions(e),!this.options.queryFn){const d=this.observers.find(c=>c.options.queryFn);d&&this.setOptions(d.options)}const n=new AbortController,s=d=>{Object.defineProperty(d,"signal",{enumerable:!0,get:()=>(this.#o=!0,n.signal)})},r=()=>{const d=Bs(this.options,t),u=(()=>{const v={client:this.#i,queryKey:this.queryKey,meta:this.meta};return s(v),v})();return this.#o=!1,this.options.persister?this.options.persister(d,u,this):d(u)},a=(()=>{const d={fetchOptions:t,options:this.options,queryKey:this.queryKey,client:this.#i,state:this.state,fetchFn:r};return s(d),d})();(this.#e==="infinite"?Wi(this.options.pages):this.options.behavior)?.onFetch(a,this),this.#n=this.state,(this.state.fetchStatus==="idle"||this.state.fetchMeta!==a.fetchOptions?.meta)&&this.#l({type:"fetch",meta:a.fetchOptions?.meta}),this.#r=Ks({initialPromise:t?.initialPromise,fn:a.fetchFn,onCancel:d=>{d instanceof Ot&&d.revert&&this.setState({...this.#n,fetchStatus:"idle"}),n.abort()},onFail:(d,c)=>{this.#l({type:"failed",failureCount:d,error:c})},onPause:()=>{this.#l({type:"pause"})},onContinue:()=>{this.#l({type:"continue"})},retry:a.options.retry,retryDelay:a.options.retryDelay,networkMode:a.options.networkMode,canRun:()=>!0});try{const d=await this.#r.start();if(d===void 0)throw new Error(`${this.queryHash} data is undefined`);return this.setData(d),this.#s.config.onSuccess?.(d,this),this.#s.config.onSettled?.(d,this.state.error,this),d}catch(d){if(d instanceof Ot){if(d.silent)return this.#r.promise;if(d.revert){if(this.state.data===void 0)throw d;return this.state.data}}throw this.#l({type:"error",error:d}),this.#s.config.onError?.(d,this),this.#s.config.onSettled?.(this.state.data,d,this),d}finally{this.scheduleGc()}}#l(e){const t=n=>{switch(e.type){case"failed":return{...n,fetchFailureCount:e.failureCount,fetchFailureReason:e.error};case"pause":return{...n,fetchStatus:"paused"};case"continue":return{...n,fetchStatus:"fetching"};case"fetch":return{...n,...Vs(n.data,this.options),fetchMeta:e.meta??null};case"success":const s={...n,...Fn(e.data,e.dataUpdatedAt),dataUpdateCount:n.dataUpdateCount+1,...!e.manual&&{fetchStatus:"idle",fetchFailureCount:0,fetchFailureReason:null}};return this.#n=e.manual?s:void 0,s;case"error":const r=e.error;return{...n,error:r,errorUpdateCount:n.errorUpdateCount+1,errorUpdatedAt:Date.now(),fetchFailureCount:n.fetchFailureCount+1,fetchFailureReason:r,fetchStatus:"idle",status:"error",isInvalidated:!0};case"invalidate":return{...n,isInvalidated:!0};case"setState":return{...n,...e.state}}};this.state=t(this.state),A.batch(()=>{this.observers.forEach(n=>{n.onQueryUpdate()}),this.#s.notify({query:this,type:"updated",action:e})})}};function Vs(e,t){return{fetchFailureCount:0,fetchFailureReason:null,fetchStatus:Hs(t.networkMode)?"fetching":"paused",...e===void 0&&{error:null,status:"pending"}}}function Fn(e,t){return{data:e,dataUpdatedAt:t??Date.now(),error:null,isInvalidated:!1,status:"success"}}function zn(e){const t=typeof e.initialData=="function"?e.initialData():e.initialData,n=t!==void 0,s=n?typeof e.initialDataUpdatedAt=="function"?e.initialDataUpdatedAt():e.initialDataUpdatedAt:0;return{data:t,dataUpdateCount:0,dataUpdatedAt:n?s??Date.now():0,error:null,errorUpdateCount:0,errorUpdatedAt:0,fetchFailureCount:0,fetchFailureReason:null,fetchMeta:null,isInvalidated:!1,status:n?"success":"pending",fetchStatus:"idle"}}var Zi=class extends Me{constructor(e,t){super(),this.options=t,this.#e=e,this.#o=null,this.#a=At(),this.bindMethods(),this.setOptions(t)}#e;#t=void 0;#n=void 0;#s=void 0;#i;#r;#a;#o;#d;#l;#p;#u;#f;#c;#m=new Set;bindMethods(){this.refetch=this.refetch.bind(this)}onSubscribe(){this.listeners.size===1&&(this.#t.addObserver(this),$n(this.#t,this.options)?this.#h():this.updateResult(),this.#b())}onUnsubscribe(){this.hasListeners()||this.destroy()}shouldFetchOnReconnect(){return Mt(this.#t,this.options,this.options.refetchOnReconnect)}shouldFetchOnWindowFocus(){return Mt(this.#t,this.options,this.options.refetchOnWindowFocus)}destroy(){this.listeners=new Set,this.#v(),this.#w(),this.#t.removeObserver(this)}setOptions(e){const t=this.options,n=this.#t;if(this.options=this.#e.defaultQueryOptions(e),this.options.enabled!==void 0&&typeof this.options.enabled!="boolean"&&typeof this.options.enabled!="function"&&typeof _(this.options.enabled,this.#t)!="boolean")throw new Error("Expected enabled to be a boolean or a callback that returns a boolean");this.#S(),this.#t.setOptions(this.options),t._defaulted&&!Ct(this.options,t)&&this.#e.getQueryCache().notify({type:"observerOptionsUpdated",query:this.#t,observer:this});const s=this.hasListeners();s&&Un(this.#t,n,this.options,t)&&this.#h(),this.updateResult(),s&&(this.#t!==n||_(this.options.enabled,this.#t)!==_(t.enabled,this.#t)||G(this.options.staleTime,this.#t)!==G(t.staleTime,this.#t))&&this.#g();const r=this.#y();s&&(this.#t!==n||_(this.options.enabled,this.#t)!==_(t.enabled,this.#t)||r!==this.#c)&&this.#x(r)}getOptimisticResult(e){const t=this.#e.getQueryCache().build(this.#e,e),n=this.createResult(t,e);return to(this,n)&&(this.#s=n,this.#r=this.options,this.#i=this.#t.state),n}getCurrentResult(){return this.#s}trackResult(e,t){return new Proxy(e,{get:(n,s)=>(this.trackProp(s),t?.(s),s==="promise"&&(this.trackProp("data"),!this.options.experimental_prefetchInRender&&this.#a.status==="pending"&&this.#a.reject(new Error("experimental_prefetchInRender feature flag is not enabled"))),Reflect.get(n,s))})}trackProp(e){this.#m.add(e)}getCurrentQuery(){return this.#t}refetch({...e}={}){return this.fetch({...e})}fetchOptimistic(e){const t=this.#e.defaultQueryOptions(e),n=this.#e.getQueryCache().build(this.#e,t);return n.fetch().then(()=>this.createResult(n,t))}fetch(e){return this.#h({...e,cancelRefetch:e.cancelRefetch??!0}).then(()=>(this.updateResult(),this.#s))}#h(e){this.#S();let t=this.#t.fetch(this.options,e);return e?.throwOnError||(t=t.catch(R)),t}#g(){this.#v();const e=G(this.options.staleTime,this.#t);if(Ee.isServer()||this.#s.isStale||!Et(e))return;const n=$s(this.#s.dataUpdatedAt,e)+1;this.#u=ee.setTimeout(()=>{this.#s.isStale||this.updateResult()},n)}#y(){return(typeof this.options.refetchInterval=="function"?this.options.refetchInterval(this.#t):this.options.refetchInterval)??!1}#x(e){this.#w(),this.#c=e,!(Ee.isServer()||_(this.options.enabled,this.#t)===!1||!Et(this.#c)||this.#c===0)&&(this.#f=ee.setInterval(()=>{(this.options.refetchIntervalInBackground||rn.isFocused())&&this.#h()},this.#c))}#b(){this.#g(),this.#x(this.#y())}#v(){this.#u!==void 0&&(ee.clearTimeout(this.#u),this.#u=void 0)}#w(){this.#f!==void 0&&(ee.clearInterval(this.#f),this.#f=void 0)}createResult(e,t){const n=this.#t,s=this.options,r=this.#s,o=this.#i,a=this.#r,d=e!==n?e.state:this.#n,{state:c}=e;let u={...c},v=!1,m;if(t._optimisticResults){const S=this.hasListeners(),E=!S&&$n(e,t),N=S&&Un(e,n,t,s);(E||N)&&(u={...u,...Vs(c.data,e.options)}),t._optimisticResults==="isRestoring"&&(u.fetchStatus="idle")}let{error:g,errorUpdatedAt:p,status:h}=u;m=u.data;let w=!1;if(t.placeholderData!==void 0&&m===void 0&&h==="pending"){let S;r?.isPlaceholderData&&t.placeholderData===a?.placeholderData?(S=r.data,w=!0):S=typeof t.placeholderData=="function"?t.placeholderData(this.#p?.state.data,this.#p):t.placeholderData,S!==void 0&&(h="success",m=Tt(r?.data,S,t),v=!0)}if(t.select&&m!==void 0&&!w)if(r&&m===o?.data&&t.select===this.#d)m=this.#l;else try{this.#d=t.select,m=t.select(m),m=Tt(r?.data,m,t),this.#l=m,this.#o=null}catch(S){this.#o=S}this.#o&&(g=this.#o,m=this.#l,p=Date.now(),h="error");const k=u.fetchStatus==="fetching",j=h==="pending",M=h==="error",L=j&&k,D=m!==void 0,y={status:h,fetchStatus:u.fetchStatus,isPending:j,isSuccess:h==="success",isError:M,isInitialLoading:L,isLoading:L,data:m,dataUpdatedAt:u.dataUpdatedAt,error:g,errorUpdatedAt:p,failureCount:u.fetchFailureCount,failureReason:u.fetchFailureReason,errorUpdateCount:u.errorUpdateCount,isFetched:e.isFetched(),isFetchedAfterMount:u.dataUpdateCount>d.dataUpdateCount||u.errorUpdateCount>d.errorUpdateCount,isFetching:k,isRefetching:k&&!j,isLoadingError:M&&!D,isPaused:u.fetchStatus==="paused",isPlaceholderData:v,isRefetchError:M&&D,isStale:ln(e,t),refetch:this.refetch,promise:this.#a,isEnabled:_(t.enabled,e)!==!1};if(this.options.experimental_prefetchInRender){const S=y.data!==void 0,E=y.status==="error"&&!S,N=Pe=>{E?Pe.reject(y.error):S&&Pe.resolve(y.data)},xe=()=>{const Pe=this.#a=y.promise=At();N(Pe)},Re=this.#a;switch(Re.status){case"pending":e.queryHash===n.queryHash&&N(Re);break;case"fulfilled":(E||y.data!==Re.value)&&xe();break;case"rejected":(!E||y.error!==Re.reason)&&xe();break}}return y}updateResult(){const e=this.#s,t=this.createResult(this.#t,this.options);if(this.#i=this.#t.state,this.#r=this.options,this.#i.data!==void 0&&(this.#p=this.#t),Ct(t,e))return;this.#s=t;const n=()=>{if(!e)return!0;const{notifyOnChangeProps:s}=this.options,r=typeof s=="function"?s():s;if(r==="all"||!r&&!this.#m.size)return!0;const o=new Set(r??this.#m);return this.options.throwOnError&&o.add("error"),Object.keys(this.#s).some(a=>{const l=a;return this.#s[l]!==e[l]&&o.has(l)})};this.#k({listeners:n()})}#S(){const e=this.#e.getQueryCache().build(this.#e,this.options);if(e===this.#t)return;const t=this.#t;this.#t=e,this.#n=e.state,this.hasListeners()&&(t?.removeObserver(this),e.addObserver(this))}onQueryUpdate(){this.updateResult(),this.hasListeners()&&this.#b()}#k(e){A.batch(()=>{e.listeners&&this.listeners.forEach(t=>{t(this.#s)}),this.#e.getQueryCache().notify({query:this.#t,type:"observerResultsUpdated"})})}};function eo(e,t){return _(t.enabled,e)!==!1&&e.state.data===void 0&&!(e.state.status==="error"&&_(t.retryOnMount,e)===!1)}function $n(e,t){return eo(e,t)||e.state.data!==void 0&&Mt(e,t,t.refetchOnMount)}function Mt(e,t,n){if(_(t.enabled,e)!==!1&&G(t.staleTime,e)!=="static"){const s=typeof n=="function"?n(e):n;return s==="always"||s!==!1&&ln(e,t)}return!1}function Un(e,t,n,s){return(e!==t||_(s.enabled,e)===!1)&&(!n.suspense||e.state.status!=="error")&&ln(e,n)}function ln(e,t){return _(t.enabled,e)!==!1&&e.isStaleByTime(G(t.staleTime,e))}function to(e,t){return!Ct(e.getCurrentResult(),t)}var no=class extends Qs{#e;#t;#n;#s;constructor(e){super(),this.#e=e.client,this.mutationId=e.mutationId,this.#n=e.mutationCache,this.#t=[],this.state=e.state||so(),this.setOptions(e.options),this.scheduleGc()}setOptions(e){this.options=e,this.updateGcTime(this.options.gcTime)}get meta(){return this.options.meta}addObserver(e){this.#t.includes(e)||(this.#t.push(e),this.clearGcTimeout(),this.#n.notify({type:"observerAdded",mutation:this,observer:e}))}removeObserver(e){this.#t=this.#t.filter(t=>t!==e),this.scheduleGc(),this.#n.notify({type:"observerRemoved",mutation:this,observer:e})}optionalRemove(){this.#t.length||(this.state.status==="pending"?this.scheduleGc():this.#n.remove(this))}continue(){return this.#s?.continue()??this.execute(this.state.variables)}async execute(e){const t=()=>{this.#i({type:"continue"})},n={client:this.#e,meta:this.options.meta,mutationKey:this.options.mutationKey};this.#s=Ks({fn:()=>this.options.mutationFn?this.options.mutationFn(e,n):Promise.reject(new Error("No mutationFn found")),onFail:(o,a)=>{this.#i({type:"failed",failureCount:o,error:a})},onPause:()=>{this.#i({type:"pause"})},onContinue:t,retry:this.options.retry??0,retryDelay:this.options.retryDelay,networkMode:this.options.networkMode,canRun:()=>this.#n.canRun(this)});const s=this.state.status==="pending",r=!this.#s.canStart();try{if(s)t();else{this.#i({type:"pending",variables:e,isPaused:r}),this.#n.config.onMutate&&await this.#n.config.onMutate(e,this,n);const a=await this.options.onMutate?.(e,n);a!==this.state.context&&this.#i({type:"pending",context:a,variables:e,isPaused:r})}const o=await this.#s.start();return await this.#n.config.onSuccess?.(o,e,this.state.context,this,n),await this.options.onSuccess?.(o,e,this.state.context,n),await this.#n.config.onSettled?.(o,null,this.state.variables,this.state.context,this,n),await this.options.onSettled?.(o,null,e,this.state.context,n),this.#i({type:"success",data:o}),o}catch(o){try{await this.#n.config.onError?.(o,e,this.state.context,this,n)}catch(a){Promise.reject(a)}try{await this.options.onError?.(o,e,this.state.context,n)}catch(a){Promise.reject(a)}try{await this.#n.config.onSettled?.(void 0,o,this.state.variables,this.state.context,this,n)}catch(a){Promise.reject(a)}try{await this.options.onSettled?.(void 0,o,e,this.state.context,n)}catch(a){Promise.reject(a)}throw this.#i({type:"error",error:o}),o}finally{this.#n.runNext(this)}}#i(e){const t=n=>{switch(e.type){case"failed":return{...n,failureCount:e.failureCount,failureReason:e.error};case"pause":return{...n,isPaused:!0};case"continue":return{...n,isPaused:!1};case"pending":return{...n,context:e.context,data:void 0,failureCount:0,failureReason:null,error:null,isPaused:e.isPaused,status:"pending",variables:e.variables,submittedAt:Date.now()};case"success":return{...n,data:e.data,failureCount:0,failureReason:null,error:null,status:"success",isPaused:!1};case"error":return{...n,data:void 0,error:e.error,failureCount:n.failureCount+1,failureReason:e.error,isPaused:!1,status:"error"}}};this.state=t(this.state),A.batch(()=>{this.#t.forEach(n=>{n.onMutationUpdate(e)}),this.#n.notify({mutation:this,type:"updated",action:e})})}};function so(){return{context:void 0,data:void 0,error:null,failureCount:0,failureReason:null,isPaused:!1,status:"idle",variables:void 0,submittedAt:0}}var ro=class extends Me{constructor(e={}){super(),this.config=e,this.#e=new Set,this.#t=new Map,this.#n=0}#e;#t;#n;build(e,t,n){const s=new no({client:e,mutationCache:this,mutationId:++this.#n,options:e.defaultMutationOptions(t),state:n});return this.add(s),s}add(e){this.#e.add(e);const t=_e(e);if(typeof t=="string"){const n=this.#t.get(t);n?n.push(e):this.#t.set(t,[e])}this.notify({type:"added",mutation:e})}remove(e){if(this.#e.delete(e)){const t=_e(e);if(typeof t=="string"){const n=this.#t.get(t);if(n)if(n.length>1){const s=n.indexOf(e);s!==-1&&n.splice(s,1)}else n[0]===e&&this.#t.delete(t)}}this.notify({type:"removed",mutation:e})}canRun(e){const t=_e(e);if(typeof t=="string"){const s=this.#t.get(t)?.find(r=>r.state.status==="pending");return!s||s===e}else return!0}runNext(e){const t=_e(e);return typeof t=="string"?this.#t.get(t)?.find(s=>s!==e&&s.state.isPaused)?.continue()??Promise.resolve():Promise.resolve()}clear(){A.batch(()=>{this.#e.forEach(e=>{this.notify({type:"removed",mutation:e})}),this.#e.clear(),this.#t.clear()})}getAll(){return Array.from(this.#e)}find(e){const t={exact:!0,...e};return this.getAll().find(n=>Pn(t,n))}findAll(e={}){return this.getAll().filter(t=>Pn(e,t))}notify(e){A.batch(()=>{this.listeners.forEach(t=>{t(e)})})}resumePausedMutations(){const e=this.getAll().filter(t=>t.state.isPaused);return A.batch(()=>Promise.all(e.map(t=>t.continue().catch(R))))}};function _e(e){return e.options.scope?.id}var io=class extends Me{constructor(e={}){super(),this.config=e,this.#e=new Map}#e;build(e,t,n){const s=t.queryKey,r=t.queryHash??on(s,t);let o=this.get(r);return o||(o=new Ji({client:e,queryKey:s,queryHash:r,options:e.defaultQueryOptions(t),state:n,defaultOptions:e.getQueryDefaults(s)}),this.add(o)),o}add(e){this.#e.has(e.queryHash)||(this.#e.set(e.queryHash,e),this.notify({type:"added",query:e}))}remove(e){const t=this.#e.get(e.queryHash);t&&(e.destroy(),t===e&&this.#e.delete(e.queryHash),this.notify({type:"removed",query:e}))}clear(){A.batch(()=>{this.getAll().forEach(e=>{this.remove(e)})})}get(e){return this.#e.get(e)}getAll(){return[...this.#e.values()]}find(e){const t={exact:!0,...e};return this.getAll().find(n=>Rn(t,n))}findAll(e={}){const t=this.getAll();return Object.keys(e).length>0?t.filter(n=>Rn(e,n)):t}notify(e){A.batch(()=>{this.listeners.forEach(t=>{t(e)})})}onFocus(){A.batch(()=>{this.getAll().forEach(e=>{e.onFocus()})})}onOnline(){A.batch(()=>{this.getAll().forEach(e=>{e.onOnline()})})}},oo=class{#e;#t;#n;#s;#i;#r;#a;#o;constructor(e={}){this.#e=e.queryCache||new io,this.#t=e.mutationCache||new ro,this.#n=e.defaultOptions||{},this.#s=new Map,this.#i=new Map,this.#r=0}mount(){this.#r++,this.#r===1&&(this.#a=rn.subscribe(async e=>{e&&(await this.resumePausedMutations(),this.#e.onFocus())}),this.#o=Be.subscribe(async e=>{e&&(await this.resumePausedMutations(),this.#e.onOnline())}))}unmount(){this.#r--,this.#r===0&&(this.#a?.(),this.#a=void 0,this.#o?.(),this.#o=void 0)}isFetching(e){return this.#e.findAll({...e,fetchStatus:"fetching"}).length}isMutating(e){return this.#t.findAll({...e,status:"pending"}).length}getQueryData(e){const t=this.defaultQueryOptions({queryKey:e});return this.#e.get(t.queryHash)?.state.data}ensureQueryData(e){const t=this.defaultQueryOptions(e),n=this.#e.build(this,t),s=n.state.data;return s===void 0?this.fetchQuery(e):(e.revalidateIfStale&&n.isStaleByTime(G(t.staleTime,n))&&this.prefetchQuery(t),Promise.resolve(s))}getQueriesData(e){return this.#e.findAll(e).map(({queryKey:t,state:n})=>{const s=n.data;return[t,s]})}setQueryData(e,t,n){const s=this.defaultQueryOptions({queryKey:e}),o=this.#e.get(s.queryHash)?.state.data,a=$i(t,o);if(a!==void 0)return this.#e.build(this,s).setData(a,{...n,manual:!0})}setQueriesData(e,t,n){return A.batch(()=>this.#e.findAll(e).map(({queryKey:s})=>[s,this.setQueryData(s,t,n)]))}getQueryState(e){const t=this.defaultQueryOptions({queryKey:e});return this.#e.get(t.queryHash)?.state}removeQueries(e){const t=this.#e;A.batch(()=>{t.findAll(e).forEach(n=>{t.remove(n)})})}resetQueries(e,t){const n=this.#e;return A.batch(()=>(n.findAll(e).forEach(s=>{s.reset()}),this.refetchQueries({type:"active",...e},t)))}cancelQueries(e,t={}){const n={revert:!0,...t},s=A.batch(()=>this.#e.findAll(e).map(r=>r.cancel(n)));return Promise.all(s).then(R).catch(R)}invalidateQueries(e,t={}){return A.batch(()=>(this.#e.findAll(e).forEach(n=>{n.invalidate()}),e?.refetchType==="none"?Promise.resolve():this.refetchQueries({...e,type:e?.refetchType??e?.type??"active"},t)))}refetchQueries(e,t={}){const n={...t,cancelRefetch:t.cancelRefetch??!0},s=A.batch(()=>this.#e.findAll(e).filter(r=>!r.isDisabled()&&!r.isStatic()).map(r=>{let o=r.fetch(void 0,n);return n.throwOnError||(o=o.catch(R)),r.state.fetchStatus==="paused"?Promise.resolve():o}));return Promise.all(s).then(R)}fetchQuery(e){const t=this.defaultQueryOptions(e);t.retry===void 0&&(t.retry=!1);const n=this.#e.build(this,t);return n.isStaleByTime(G(t.staleTime,n))?n.fetch(t):Promise.resolve(n.state.data)}prefetchQuery(e){return this.fetchQuery(e).then(R).catch(R)}fetchInfiniteQuery(e){return e._type="infinite",this.fetchQuery(e)}prefetchInfiniteQuery(e){return this.fetchInfiniteQuery(e).then(R).catch(R)}ensureInfiniteQueryData(e){return e._type="infinite",this.ensureQueryData(e)}resumePausedMutations(){return Be.isOnline()?this.#t.resumePausedMutations():Promise.resolve()}getQueryCache(){return this.#e}getMutationCache(){return this.#t}getDefaultOptions(){return this.#n}setDefaultOptions(e){this.#n=e}setQueryDefaults(e,t){this.#s.set(ke(e),{queryKey:e,defaultOptions:t})}getQueryDefaults(e){const t=[...this.#s.values()],n={};return t.forEach(s=>{je(e,s.queryKey)&&Object.assign(n,s.defaultOptions)}),n}setMutationDefaults(e,t){this.#i.set(ke(e),{mutationKey:e,defaultOptions:t})}getMutationDefaults(e){const t=[...this.#i.values()],n={};return t.forEach(s=>{je(e,s.mutationKey)&&Object.assign(n,s.defaultOptions)}),n}defaultQueryOptions(e){if(e._defaulted)return e;const t={...this.#n.queries,...this.getQueryDefaults(e.queryKey),...e,_defaulted:!0};return t.queryHash||(t.queryHash=on(t.queryKey,t)),t.refetchOnReconnect===void 0&&(t.refetchOnReconnect=t.networkMode!=="always"),t.throwOnError===void 0&&(t.throwOnError=!!t.suspense),!t.networkMode&&t.persister&&(t.networkMode="offlineFirst"),t.queryFn===an&&(t.enabled=!1),t}defaultMutationOptions(e){return e?._defaulted?e:{...this.#n.mutations,...e?.mutationKey&&this.getMutationDefaults(e.mutationKey),...e,_defaulted:!0}}clear(){this.#e.clear(),this.#t.clear()}},Gs=f.createContext(void 0),ao=e=>{const t=f.useContext(Gs);if(!t)throw new Error("No QueryClient set, use QueryClientProvider to set one");return t},Ys=({client:e,children:t})=>(f.useEffect(()=>(e.mount(),()=>{e.unmount()}),[e]),i.jsx(Gs.Provider,{value:e,children:t})),Ws=f.createContext(!1),lo=()=>f.useContext(Ws);Ws.Provider;function co(){let e=!1;return{clearReset:()=>{e=!1},reset:()=>{e=!0},isReset:()=>e}}var uo=f.createContext(co()),fo=()=>f.useContext(uo),ho=(e,t,n)=>{const s=n?.state.error&&typeof e.throwOnError=="function"?qs(e.throwOnError,[n.state.error,n]):e.throwOnError;(e.suspense||e.experimental_prefetchInRender||s)&&(t.isReset()||(e.retryOnMount=!1))},po=e=>{f.useEffect(()=>{e.clearReset()},[e])},mo=({result:e,errorResetBoundary:t,throwOnError:n,query:s,suspense:r})=>e.isError&&!t.isReset()&&!e.isFetching&&s&&(r&&e.data===void 0||qs(n,[e.error,s])),go=e=>{if(e.suspense){const n=r=>r==="static"?r:Math.max(r??1e3,1e3),s=e.staleTime;e.staleTime=typeof s=="function"?(...r)=>n(s(...r)):n(s),typeof e.gcTime=="number"&&(e.gcTime=Math.max(e.gcTime,1e3))}},yo=(e,t)=>e.isLoading&&e.isFetching&&!t,xo=(e,t)=>e?.suspense&&t.isPending,Bn=(e,t,n)=>t.fetchOptimistic(e).catch(()=>{n.clearReset()});function bo(e,t,n){const s=lo(),r=fo(),o=ao(),a=o.defaultQueryOptions(e);o.getDefaultOptions().queries?._experimental_beforeQuery?.(a);const l=o.getQueryCache().get(a.queryHash);a._optimisticResults=s?"isRestoring":"optimistic",go(a),ho(a,r,l),po(r);const d=!o.getQueryCache().get(a.queryHash),[c]=f.useState(()=>new t(o,a)),u=c.getOptimisticResult(a),v=!s&&e.subscribed!==!1;if(f.useSyncExternalStore(f.useCallback(m=>{const g=v?c.subscribe(A.batchCalls(m)):R;return c.updateResult(),g},[c,v]),()=>c.getCurrentResult(),()=>c.getCurrentResult()),f.useEffect(()=>{c.setOptions(a)},[a,c]),xo(a,u))throw Bn(a,c,r);if(mo({result:u,errorResetBoundary:r,throwOnError:a.throwOnError,query:l,suspense:a.suspense}))throw u.error;return o.getDefaultOptions().queries?._experimental_afterQuery?.(a,u),a.experimental_prefetchInRender&&!Ee.isServer()&&yo(u,s)&&(d?Bn(a,c,r):l?.promise)?.catch(R).finally(()=>{c.updateResult()}),a.notifyOnChangeProps?u:c.trackResult(u)}function cn(e,t){return bo(e,Zi)}function vo({user:e}){const[t,n]=f.useState(),{data:s}=cn({queryKey:["userInfo",e.id],queryFn:()=>tn(e),retry:!1,staleTime:6e4}),r=s?.clientName||e.name;if(f.useEffect(()=>{let l=!0;const d=(c,u)=>{u==="sync"&&le in c&&n(St(c[le]?.newValue))};return(async()=>{if(!X(await J()))return;const c=await chrome.storage.sync.get(le);l&&(chrome.storage.onChanged.addListener(d),n(St(c[le])))})().catch(c=>x.warn("auto kick: toggle setup failed",c)),()=>{l=!1;try{chrome.storage.onChanged.removeListener(d)}catch{}}},[]),!t)return null;const o=t.some(l=>qr(l,e)),a=()=>{try{chrome.storage.sync.set({[le]:Hr(t,{id:e.id,name:r})}).catch(l=>x.warn("auto kick: save failed",l))}catch(l){x.warn("auto kick: save failed",l)}};return i.jsx("div",{className:"f4t-info-kick-row",children:i.jsxs("button",{className:"f4t-info-kick",type:"button","aria-pressed":o,title:"Kick this person whenever they're in a room you own",onClick:a,children:["Auto-kick",o&&i.jsx("span",{"aria-hidden":"true",children:" ✓"})]})})}function Xs({user:e}){const t=f.useMemo(()=>e.name||e.id,[e.id,e.name]),{data:n,error:s,isPending:r,refetch:o}=cn({queryKey:["userInfo",e.id],queryFn:()=>tn(e),retry:!1,staleTime:6e4});return i.jsxs("section",{className:"f4t-info-card","aria-label":`Extra information for ${t}`,children:[i.jsx(vo,{user:e}),r&&i.jsx(wo,{}),!r&&s&&i.jsx(So,{message:s.message,onRetry:()=>o()}),!r&&!s&&n&&i.jsx(ko,{data:n})]})}function wo(){return i.jsxs(i.Fragment,{children:[i.jsx("p",{className:"f4t-info-muted",children:"Loading extra profile details..."}),i.jsx("div",{className:"f4t-info-skeleton"}),i.jsx("div",{className:"f4t-info-skeleton short"})]})}function So({message:e,onRetry:t}){return i.jsxs("div",{className:"f4t-info-error-box",role:"alert","aria-live":"polite",children:[i.jsx("p",{className:"f4t-info-error-title",children:"Could not load extra profile details"}),i.jsx("p",{className:"f4t-info-error",children:e||"Please check your endpoint and try again."}),i.jsx("div",{className:"f4t-info-error-actions",children:i.jsx("button",{className:"f4t-info-retry",type:"button",onClick:t,children:"Retry"})})]})}function ko({data:e}){const t=!!e.stats?.length,n=!!e.languages?.length,s=!!e.levels?.length,r=!!e.topics?.length,o=!!e.partners?.length,a=!!e.notes?.length;return i.jsxs(i.Fragment,{children:[t&&i.jsx(jo,{stats:e.stats}),(n||s)&&i.jsxs("div",{className:"f4t-info-two-col",children:[n&&i.jsx(qn,{title:"Top languages",stats:e.languages}),s&&i.jsx(qn,{title:"Top levels",stats:No(e.levels)})]}),r&&i.jsx(Eo,{title:"Top topics",stats:e.topics}),o&&i.jsx(Co,{partners:e.partners}),a&&i.jsx("div",{className:"f4t-info-notes",children:e.notes?.map(l=>i.jsx("p",{className:"f4t-info-note",children:l},l))}),!e.title&&!e.summary&&!t&&!n&&!s&&!r&&!o&&!a&&i.jsx("p",{className:"f4t-info-muted",children:"No extra information returned for this user."})]})}function jo({stats:e}){return i.jsx("div",{className:"inline-stats",children:e.map(t=>i.jsxs("span",{className:"inline-stat",children:[i.jsxs("span",{className:"inline-stat-label",children:[t.label,":"]})," ",i.jsx("span",{className:"inline-stat-value",children:t.value})]},`${t.label}:${t.value}`))})}function qn({title:e,stats:t}){const n=t.slice(0,5),s=n.reduce((r,o)=>Math.max(r,Kn(o.value)),0);return i.jsxs("div",{className:"info-section",children:[i.jsx("p",{className:"section-title",children:e}),i.jsx("ul",{className:"bar-list",children:n.map(r=>{const o=Kn(r.value),a=s>0?Math.max(o/s*100,4):0;return i.jsxs("li",{className:"bar-row",children:[i.jsx("span",{className:"bar-name",children:r.label}),i.jsx("span",{className:"bar-track","aria-hidden":"true",children:i.jsx("span",{className:"bar-fill",style:{width:`${a}%`}})}),i.jsx("span",{className:"bar-value",children:r.value})]},`${e}:${r.label}`)})})]})}function Eo({title:e,stats:t}){const n=t.slice(0,5);return i.jsxs("div",{className:"info-section",children:[i.jsx("p",{className:"section-title",children:e}),i.jsx("ul",{className:"f4t-info-plain-list",children:n.map(s=>i.jsxs("li",{className:"f4t-info-plain-row",title:s.label,children:[i.jsx("span",{className:"f4t-info-plain-name",children:s.label}),i.jsx("span",{className:"f4t-info-plain-leader","aria-hidden":"true"}),i.jsx("span",{className:"bar-value",children:s.value})]},`${e}:${s.label}`))})]})}function Co({partners:e}){const t=e.slice(0,5),n=t.reduce((s,r)=>Math.max(s,r.overlapCount),0);return i.jsxs("div",{className:"info-section",children:[i.jsx("p",{className:"section-title",children:"Top partners"}),i.jsx("ul",{className:"bar-list",children:t.map(s=>{const r=n>0?Math.max(s.overlapCount/n*100,4):0;return i.jsxs("a",{href:`https://www.free4talk.me/tracker/user/${s.id}`,target:"_blank",rel:"noopener noreferrer",className:"bar-row partner",children:[i.jsx("span",{className:"f4t-info-partner-avatar-wrap",children:s.avatarUrl?i.jsx("img",{className:"f4t-info-partner-avatar",src:s.avatarUrl,alt:""}):i.jsx("span",{className:"f4t-info-partner-fallback",children:s.name.slice(0,2).toUpperCase()})}),i.jsx("span",{className:"bar-name",children:s.name}),i.jsx("span",{className:" bar-track","aria-hidden":"true",children:i.jsx("span",{className:"bar-fill",style:{width:`${r}%`}})}),i.jsx("span",{className:"bar-value",children:s.overlapCount})]},s.id)})})]})}const Hn=["any level","beginner","upper beginner","intermediate","upper intermediate","advanced","upper advanced"];function No(e){return[...e].sort((t,n)=>{const s=Hn.indexOf(t.label.trim().toLowerCase()),r=Hn.indexOf(n.label.trim().toLowerCase());return s===-1&&r===-1?0:s===-1?1:r===-1?-1:s-r})}function Kn(e){if(typeof e=="number")return e;const t=parseFloat(e);return Number.isFinite(t)?t:0}const Js="f4t-info-modal-expanded",Qn="free4talk-info-extension-page-style",Ce="free4talk-info-extension-root",ve="f4t-tracker-link",te="f4t-profile-btn",Zs="f4t-unverified-avatar",er="f4t-unverified-badge",To=`
  /* Real avatar swapped in over Free4Talk's UNVERIFIED initials placeholder.
     Absolute fill so it adopts whatever size the host avatar span already has. */
  .${Zs} {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: inherit;
  }

  /* Bottom-centred so it stays inside the circle on Free4Talk's round homepage
     avatars (a corner badge gets clipped by the border-radius). */
  .${er} {
    position: absolute;
    left: 50%;
    bottom: 4%;
    transform: translateX(-50%);
    z-index: 1;
    max-width: 92%;
    padding: 2px 4px;
    border-radius: 3px;
    background: rgba(0, 0, 0, 0.42);
    color: rgba(255, 255, 255, 0.66);
    font-size: 7px;
    font-weight: 500;
    letter-spacing: 0.04em;
    line-height: 1;
    white-space: nowrap;
    pointer-events: none;
  }

  .ant-modal.${Js} #${Ce} {
    display: block;
    width: 100%;
    margin-top: 16px;
  }

  .${ve} {
    display: inline-flex;
    align-items: center;
    vertical-align: middle;
    margin-left: 8px;
    font-size: 0.5em;
    line-height: 1;
    color: #33a9ff;
    text-decoration: none;
    cursor: pointer;
    opacity: 0.75;
    transition: opacity 0.15s ease;
  }

  .${ve}:hover {
    opacity: 1;
  }

  .${ve} svg {
    width: 1.3em;
    height: 1.3em;
    fill: currentColor;
  }

  .${te} {
    position: absolute;
    top: 4px;
    left: 4px;
    z-index: 30;
    width: 22px;
    height: 22px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 0;
    border: none;
    border-radius: 999px;
    background: rgba(0, 0, 0, 0.45);
    color: #fff;
    cursor: pointer;
    opacity: 0.85;
    transition: opacity 0.15s ease, background 0.15s ease;
  }

  .${te}:hover {
    opacity: 1;
    background: rgba(0, 0, 0, 0.65);
  }

  .${te}:disabled {
    opacity: 0.4;
    cursor: not-allowed;
  }

  .${te} svg {
    width: 13px;
    height: 13px;
    fill: currentColor;
  }

`;function dn(){if(document.getElementById(Qn))return;const e=document.createElement("style");e.id=Qn,e.textContent=To,document.head.append(e)}const tr=":host{all:initial;display:block;color:#d3d3d3;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Arial,sans-serif;font-size:15px;line-height:1.5;margin-top:18px;width:100%;interpolate-size:allow-keywords}@keyframes f4t-fade-in{0%{opacity:0;transform:translateY(-2px)}to{opacity:1;transform:none}}*,*:before,*:after{box-sizing:border-box;font-family:inherit}.f4t-info-card{background:transparent;padding:6px 18px 20px;color:#d3d3d3;interpolate-size:allow-keywords;transition:height .28s cubic-bezier(.22,.61,.36,1);overflow:hidden}.f4t-info-card>*{animation:f4t-fade-in .24s ease-out both;animation-delay:80ms}p{margin:0}ul{list-style:none;margin:0;padding:0}.f4t-info-muted,.f4t-info-error{font-size:15px;line-height:1.5;margin:0}.f4t-info-muted{color:#aaa}.f4t-info-skeleton{height:10px;width:100%;margin-top:10px;border-radius:6px;background:#ffffff0f;animation:f4t-pulse 1.6s ease-in-out infinite}.f4t-info-skeleton.short{width:50%;margin-top:8px}@keyframes f4t-pulse{50%{opacity:.5}}.f4t-info-error-box{margin-top:10px;padding:12px;border:1px solid rgba(220,80,80,.4);border-radius:8px;background:#dc505014}.f4t-info-error-title{color:#f1c0c0;font-weight:600}.f4t-info-error{color:#e8b4b4;margin-top:4px;margin-bottom:10px}.f4t-info-error-actions{display:flex;justify-content:flex-end}.f4t-info-retry{cursor:pointer;background:transparent;color:#f1c0c0;border:1px solid rgba(220,80,80,.5);border-radius:6px;padding:6px 12px;font-size:14px;font-weight:600}.f4t-info-retry:hover{background:#dc505026}.f4t-info-kick-row{display:flex;justify-content:flex-end;margin-bottom:8px}.f4t-info-kick{cursor:pointer;background:transparent;color:#aaa;border:1px solid rgba(255,255,255,.18);border-radius:999px;padding:3px 10px;font-size:12px;font-weight:600;line-height:1.4}.f4t-info-kick:hover{color:#d3d3d3;border-color:#ffffff4d}.f4t-info-kick[aria-pressed=true]{color:#f1c0c0;border-color:#dc505080;background:#dc50501f}.f4t-info-kick[aria-pressed=true]:hover{background:#dc505033}.inline-stats{display:flex;flex-wrap:wrap;gap:6px 22px;margin-top:4px;justify-content:space-between;border-bottom:1px solid #353d45;padding-bottom:9px}.inline-stat{font-size:15px;line-height:1.7;white-space:nowrap}.inline-stat-label{color:#aaa;font-size:.8em}.inline-stat-value{color:#d3d3d3;font-size:.8em}.f4t-info-two-col{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:14px 40px;margin-top:-7px}.f4t-info-two-col .f4t-info-section{margin-top:0}@media(max-width:560px){.f4t-info-two-col{grid-template-columns:minmax(0,1fr)}}.info-section{margin-top:22px}.section-title{font-size:.8em;font-weight:600;text-transform:uppercase;letter-spacing:.06em;color:#aaa;margin:0 0 12px}.bar-list{display:flex;flex-direction:column;gap:10px}.bar-row{display:grid;grid-template-columns:minmax(90px,150px) minmax(60px,1fr) auto;align-items:center;gap:12px;font-size:15px;line-height:1.4}.bar-row.partner{grid-template-columns:28px minmax(90px,150px) minmax(40px,1fr) auto;gap:8px;text-decoration:none;color:inherit}.bar-name{color:#d3d3d3;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;font-size:.8em;border:none}.bar-track{position:relative;height:5px;border-radius:999px;background:#ffffff0f;overflow:hidden}.bar-fill{display:block;height:100%;border-radius:999px;background:linear-gradient(90deg,#33a9ff73,#33a9ffd9)}.bar-value{color:#d3d3d3;font-variant-numeric:tabular-nums;font-weight:500;min-width:1.75em;text-align:right;font-size:.78em}.f4t-info-plain-list{display:flex;flex-direction:column;gap:8px}.f4t-info-plain-row{display:flex;align-items:baseline;gap:10px;font-size:15px;line-height:1.4}.f4t-info-plain-name{color:#d3d3d3;flex:0 1 auto;min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;font-size:.8em}.f4t-info-plain-leader{flex:1 1 auto;min-width:16px;align-self:center;border-bottom:1px dotted rgba(255,255,255,.18);transform:translateY(-3px)}.partner-avatar-wrap{display:inline-flex;align-items:center;justify-content:center;width:28px;height:28px;cursor:pointer}.f4t-info-partner-avatar{width:28px;height:28px;border-radius:999px;object-fit:cover}.f4t-info-partner-fallback{width:28px;height:28px;border-radius:999px;background:#ffffff14;display:flex;align-items:center;justify-content:center;font-size:11px;font-weight:600;color:#d3d3d3}.f4t-info-notes{display:flex;flex-direction:column;gap:6px;margin-top:16px}.f4t-info-note{font-size:14px;line-height:1.5;color:#aaa}",Ao=/^\/room\/[^/]+\/?$/;function Oo(){if(!Ao.test(window.location.pathname))return;const e=new URL(window.location.href);e.searchParams.get("keep-chat")!=="true"&&(e.searchParams.set("keep-chat","true"),window.history.replaceState(window.history.state,"",e.toString()))}const nr=new oo({defaultOptions:{queries:{retry:!1,refetchOnWindowFocus:!1,staleTime:6e4}}}),Mo=":host{position:static;margin:0!important;width:auto}.f4t-modal-overlay{position:fixed;inset:0;z-index:2147483000;background:#0009;display:flex;align-items:center;justify-content:center;padding:20px;animation:f4t-fade-in .16s ease-out}.f4t-modal{position:relative;width:520px;max-width:100%;max-height:90vh;overflow-y:auto;background:#232a31;border-radius:5px;box-shadow:0 20px 60px #00000080;padding:0 0 12px}.f4t-modal-close{position:absolute;top:0;right:0;width:34px;height:31px;display:flex;align-items:center;justify-content:center;border:none;border-radius:0 0 0 35px;background:#f5222d;color:#fff;cursor:pointer;z-index:2}.f4t-modal-close:hover{background:#ff6163}.f4t-modal-close:hover{background:#fff}.f4t-modal-close:hover svg{fill:#f5222d}.f4t-modal-close svg{width:15px;height:15px;fill:#fff;position:relative;left:3px;top:-2px}.f4t-modal-header{display:flex;gap:18px;align-items:center;padding:18px 18px 16px}.f4t-modal-avatar,.f4t-modal-avatar-fallback{width:168px;height:168px;border-radius:6px;flex:0 0 auto}.f4t-modal-avatar-wrap{position:relative;flex:0 0 auto;display:flex}.f4t-modal-unverified-badge{position:absolute;left:0;bottom:0;padding:3px 6px;border-bottom-left-radius:6px;border-top-right-radius:6px;background:#0000006b;color:#ffffffa8;font-size:9px;font-weight:500;letter-spacing:.04em;line-height:1;pointer-events:none}.f4t-modal-avatar{object-fit:cover}.f4t-modal-avatar-fallback{display:flex;align-items:center;justify-content:center;background:#ffffff14;font-size:56px;font-weight:700;color:#d3d3d3}.f4t-modal-headinfo{flex:1 1 auto;min-width:0;display:flex;flex-direction:column;justify-content:center;gap:4px;padding-right:40px;align-self:baseline;margin-top:10px}.f4t-modal-muted{color:#8b949e;font-size:11.2px}.f4t-modal-id-row{display:flex;align-items:center;flex-wrap:wrap;gap:10px;font-size:12px;color:#d3d3d3}.f4t-modal-counts{display:flex;flex-wrap:wrap;gap:4px 16px;font-size:11.3px;color:#d3d3d3}.f4t-modal-name{display:flex;align-items:center;gap:10px;min-width:0;margin-top:2px}.f4t-modal-name-text{font-size:1.4em;font-weight:400;line-height:1.1;color:#d3d3d3;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.f4t-modal-copy{border:none;background:transparent;padding:0;font:inherit;font-weight:500;color:#2f9bff;cursor:pointer}.f4t-modal-copy:hover{color:#6cc0ff}.f4t-modal-tracker{flex:0 0 auto;display:inline-flex;align-items:center;justify-content:center;color:#2f9bff;text-decoration:none}.f4t-modal-tracker:hover{color:#6cc0ff}.f4t-modal-tracker svg{width:.9em;height:.9em;fill:currentColor;opacity:.8}.f4t-modal-tracker svg:hover{fill:currentColor;opacity:1}.f4t-modal-body{margin-top:0}",Io="free4talk-info-extension-modal";let Z=null,ct=null;function Ro(){if(ct&&document.body.contains(ct)&&Z)return;Z&&(Z.unmount(),Z=null);const e=document.createElement("div");e.id=Io,document.body.append(e);const t=e.attachShadow({mode:"open"}),n=document.createElement("style");n.textContent=`${tr}
${Mo}`,t.append(n);const s=document.createElement("div");t.append(s),ct=e,Z=ge.createRoot(s)}function Po(e){Ro(),Z.render(i.jsx(Ys,{client:nr,children:i.jsx(Lo,{user:e,onClose:_o})}))}function _o(){Z?.render(i.jsx(i.Fragment,{}))}function Lo({user:e,onClose:t}){return f.useEffect(()=>{const n=s=>{s.key==="Escape"&&t()};return document.addEventListener("keydown",n),()=>document.removeEventListener("keydown",n)},[t]),i.jsx("div",{className:"f4t-modal-overlay",onClick:t,children:i.jsxs("div",{className:"f4t-modal",role:"dialog","aria-modal":"true",onClick:n=>n.stopPropagation(),children:[i.jsx("button",{className:"f4t-modal-close",type:"button","aria-label":"Close",onClick:t,children:i.jsx("svg",{viewBox:"64 64 896 896","aria-hidden":"true",children:i.jsx("path",{d:"M563.8 512l262.5-312.9c4.4-5.2.7-13.1-6.1-13.1h-79.8c-4.7 0-9.2 2.1-12.3 5.7L511.6 449.8 295.1 191.7c-3-3.6-7.5-5.7-12.3-5.7H203c-6.8 0-10.5 7.9-6.1 13.1L459.4 512 196.9 824.9A7.95 7.95 0 0 0 203 838h79.8c4.7 0 9.2-2.1 12.3-5.7l216.5-258.1 216.5 258.1c3 3.6 7.5 5.7 12.3 5.7h79.8c6.8 0 10.5-7.9 6.1-13.1L563.8 512z"})})}),i.jsx(Do,{user:e}),i.jsx("div",{className:"f4t-modal-body",children:i.jsx(Xs,{user:e})})]})})}function Do({user:e}){const{data:t}=cn({queryKey:["userInfo",e.id],queryFn:()=>tn(e),retry:!1,staleTime:6e4}),n=t?.clientName||e.name||e.id,s=t?.avatarUrl||e.avatarUrl,r=t?.followers??e.followers,o=t?.friends??e.friends,a=t?.following??e.following,l=r!==void 0||o!==void 0||a!==void 0,d=`https://www.free4talk.me/tracker/user/${e.id}`;return i.jsxs("div",{className:"f4t-modal-header",children:[i.jsx(Fo,{id:e.id,name:n,avatarUrl:s}),i.jsxs("div",{className:"f4t-modal-headinfo",children:[i.jsxs("div",{className:"f4t-modal-id-row",children:[i.jsxs("span",{children:[i.jsx("span",{className:"f4t-modal-muted",children:"ID:"})," ",e.id]}),i.jsx(zo,{id:e.id})]}),l&&i.jsxs("div",{className:"f4t-modal-counts",children:[r!==void 0&&i.jsxs("span",{children:[i.jsx("span",{className:"f4t-modal-muted",children:"Followers:"})," ",r]}),o!==void 0&&i.jsxs("span",{children:[i.jsx("span",{className:"f4t-modal-muted",children:"Friends:"})," ",o]}),a!==void 0&&i.jsxs("span",{children:[i.jsx("span",{className:"f4t-modal-muted",children:"Following:"})," ",a]})]}),i.jsxs("div",{className:"f4t-modal-name",children:[i.jsx("span",{className:"f4t-modal-name-text",children:n}),i.jsx("a",{className:"f4t-modal-tracker",href:d,target:"_blank",rel:"noopener noreferrer",title:"View on free4talk.me tracker","aria-label":"View on free4talk.me tracker",children:i.jsx("svg",{viewBox:"0 0 24 24","aria-hidden":"true",children:i.jsx("path",{d:"M14 3a1 1 0 0 1 0-2h6a1 1 0 0 1 1 1v6a1 1 0 1 1-2 0V4.414l-8.293 8.293a1 1 0 0 1-1.414-1.414L17.586 3H14zM5 5a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-6a1 1 0 1 0-2 0v6H5V7h6a1 1 0 1 0 0-2H5z"})})})]})]})]})}function Fo({id:e,name:t,avatarUrl:n}){const[s,r]=f.useState(!1),[o,a]=f.useState(null);f.useEffect(()=>{let c=!0;return _s().then(u=>{c&&r(u)}),()=>{c=!1}},[]);const l=!n&&s&&o!==e,d=n||(l?Ls(e):void 0);return d?i.jsxs("span",{className:"f4t-modal-avatar-wrap",children:[i.jsx("img",{className:"f4t-modal-avatar",src:d,alt:"",referrerPolicy:"no-referrer",onError:()=>a(e)}),l&&i.jsx("span",{className:"f4t-modal-unverified-badge",children:"UNVERIFIED"})]}):i.jsx("span",{className:"f4t-modal-avatar-fallback",children:t.slice(0,2).toUpperCase()})}function zo({id:e}){const[t,n]=f.useState(!1);f.useEffect(()=>{if(!t)return;const r=setTimeout(()=>n(!1),1500);return()=>clearTimeout(r)},[t]);const s=async()=>{try{await navigator.clipboard.writeText(e),n(!0)}catch{n(!1)}};return i.jsx("button",{className:"f4t-modal-copy",type:"button",onClick:s,children:t?"Copied":"Copy ID"})}const $o="button.setting",Uo=/\/avatar\/v\d+\/([A-Za-z0-9]+)/,Bo='<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 12a5 5 0 1 0-5-5 5 5 0 0 0 5 5zm0 2c-4.42 0-8 2.24-8 5v1h16v-1c0-2.76-3.58-5-8-5z"/></svg>';async function qo(){try{if(!await $())return}catch(n){x.error("profile icon: failed to read extension state",n);return}dn();let e=!1;const t=()=>{e||(e=!0,requestAnimationFrame(()=>{e=!1,Vn()}))};new MutationObserver(t).observe(document.body,{childList:!0,subtree:!0}),Vn()}function Vn(){try{document.querySelectorAll($o).forEach(t=>{const n=t.parentElement;n&&(n.querySelector(`.${te}`)||!n.querySelector(".avatar")||!n.querySelector(".name")||Ho(n))})}catch(e){x.error("profile icon: scan failed",e)}}function Ho(e){const t=Gn(e);window.getComputedStyle(e).position==="static"&&(e.style.position="relative");const n=document.createElement("button");n.type="button",n.className=te,n.innerHTML=Bo,n.title=t?`View ${t.name??"profile"} info`:"View profile info",n.addEventListener("click",s=>{s.preventDefault(),s.stopPropagation();const r=Gn(e)??t;if(!r){n.title="Couldn't identify this user";return}Po(r)}),e.append(n)}function Gn(e){const t=e.querySelector(".name")?.textContent?.trim()||void 0,n=e.querySelector(".avatar img"),s=n?.currentSrc||n?.src||void 0,r=e.dataset.f4tUid||Ko(s);return r?{id:r,name:t,avatarUrl:s}:null}function Ko(e){if(e)return e.match(Uo)?.[1]}const Qo="span.ant-avatar",Yn="data-f4t-avatar-done",Vo=/\b(?:User\s+)?ID:\s*([A-Za-z0-9]+)/i;let It=!1,Rt=!1;async function Go(){try{if([It,Rt]=await Promise.all([_s(),Kr()]),!It&&!Rt)return}catch(n){x.error("unverified avatars: failed to read settings",n);return}dn();let e=!1;const t=()=>{e||(e=!0,requestAnimationFrame(()=>{e=!1,dt()}))};new MutationObserver(t).observe(document.body,{childList:!0,subtree:!0}),dt(),[300,1e3,2500].forEach(n=>setTimeout(dt,n))}function dt(){try{document.querySelectorAll(Qo).forEach(e=>{if(e.hasAttribute(Yn)||!Yo(e)||!(!!e.closest(".ant-modal-content")?It:Rt))return;const n=Wo(e);n&&(e.setAttribute(Yn,"1"),Xo(e,n))})}catch(e){x.error("unverified avatars: scan failed",e)}}function Yo(e){if(e.querySelector("img"))return!1;const t=e.querySelector("svg");return t?/UNVERIFIED/i.test(t.textContent||""):!1}function Wo(e){const t=e.closest("[data-f4t-uid]");if(t?.dataset.f4tUid)return t.dataset.f4tUid;const n=e.closest(".ant-modal-content");if(n)return n.innerText.match(Vo)?.[1]}function Xo(e,t){const n=e.querySelector("svg");if(!n)return;const s=document.createElement("img");s.className=Zs,s.alt="",s.referrerPolicy="no-referrer";const r=document.createElement("span");r.className=er,r.textContent="UNVERIFIED",s.addEventListener("load",()=>{n.style.display="none",r.style.display=""}),s.addEventListener("error",()=>{s.remove(),r.remove()}),r.style.display="none",window.getComputedStyle(e).position==="static"&&(e.style.position="relative"),e.append(s,r),s.src=Ls(t)}const Jo="f4t-tools",Zo=3,sr="chats",un="dms";let ut;function ea(){return ut??=new Promise((e,t)=>{try{const n=indexedDB.open(Jo,Zo);n.onupgradeneeded=()=>{try{for(const s of[sr,un])n.result.objectStoreNames.contains(s)||n.result.createObjectStore(s)}catch(err){x.warn("archive db: upgrade error",err)}};n.onsuccess=()=>{const s=n.result;s.onversionchange=()=>{s.close(),ut=void 0};e(s)};n.onerror=()=>{ut=void 0;t(n.error??new Error("indexedDB open failed"))};n.onblocked=()=>x.warn("archive db: upgrade waiting for another Free4Talk tab to reload")}catch(err){ut=void 0;t(err)}})}function ie(e){return new Promise((t,n)=>{e.onsuccess=()=>t(e.result),e.onerror=()=>n(e.error??new Error("indexedDB request failed"))})}async function fn(e,t){return(await ea()).transaction(e,t).objectStore(e)}function ta({currentRid:e,locked:t,onClose:n}){t=!1;const[s,r]=f.useState(null),[o,a]=f.useState(),[l,d]=f.useState("");f.useEffect(()=>{const p=async()=>{r(await Ft()),a(await ua())};p();const h=window.setInterval(p,5e3);return()=>window.clearInterval(h)},[]);const c=l.trim().toLowerCase(),u=c?(s??[]).filter(p=>ra(p.blob,p.rid,c)):s??[],v=async(p,h)=>{if(p!==o&&(await ma(p,e),a(p)),!c)return;const w=ir(h,c);w&&xa(h.data.map(nt),h.data.indexOf(w))},m=async()=>{await ga(e),a(void 0)},g=async(p,h)=>{window.confirm(`Delete the saved chat for ${h}?`)&&(p===o&&await m(),await ha(p),r(await Ft()))};return i.jsxs("div",{className:"sidebar",children:[i.jsx("style",{children:ia}),i.jsxs("div",{className:"header",children:[i.jsx("svg",{viewBox:"0 0 24 24",width:"18",height:"18",fill:"#1890ff","aria-hidden":"true",children:i.jsx("path",{d:"M13 3a9 9 0 0 0-9 9H1l3.9 3.9L8.8 12H6a7 7 0 1 1 2.05 4.95l-1.41 1.41A9 9 0 1 0 13 3zm-1 5v5l4.25 2.52.77-1.28-3.52-2.09V8H12z"})}),i.jsx("div",{className:"title",children:"Saved Chats"}),i.jsx("button",{type:"button",className:"close",title:"Close",onClick:n,children:i.jsx("svg",{viewBox:"0 0 24 24",width:"14",height:"14",fill:"currentColor","aria-hidden":"true",children:i.jsx("path",{d:"M19 6.4 17.6 5 12 10.6 6.4 5 5 6.4 10.6 12 5 17.6 6.4 19 12 13.4 17.6 19 19 17.6 13.4 12z"})})})]}),t?i.jsxs("div",{className:"lock",children:[i.jsx("svg",{viewBox:"0 0 24 24",width:"28",height:"28",fill:"#1890ff","aria-hidden":"true",children:i.jsx("path",{d:"M12 2a5 5 0 0 0-5 5v3H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8a2 2 0 0 0-2-2h-1V7a5 5 0 0 0-5-5zm-3 8V7a3 3 0 1 1 6 0v3H9zm3 4a2 2 0 0 1 1 3.73V19h-2v-1.27A2 2 0 0 1 12 14z"})}),i.jsx("div",{className:"lock-title",children:"Saved Chats is a Pro feature"}),i.jsx("p",{children:"Keep chat history from every room you join, search it, and bring past conversations into your current room."}),i.jsx("p",{children:"Pay once on Buy Me a Coffee with your free4talk.me email."}),i.jsxs("a",{className:"lock-cta",href:tt,target:"_blank",rel:"noopener noreferrer",children:["Get Pro — ",et," once"]})]}):s===null?null:s.length===0?i.jsx("div",{className:"empty",children:"No saved chats yet. Chats save automatically while you talk."}):i.jsxs(i.Fragment,{children:[i.jsx("div",{className:"controls",children:i.jsx("input",{type:"text",value:l,placeholder:"Search conversations",onChange:p=>d(p.target.value)})}),i.jsx("div",{className:"status",children:o&&o!==e?i.jsxs(i.Fragment,{children:[i.jsx("span",{className:"status-viewing",children:"Viewing another room’s chat"}),i.jsx("button",{type:"button",className:"back",onClick:m,children:"Back to this room"})]}):i.jsx("span",{children:"Viewing this room’s chat"})}),s.length>=oa&&i.jsxs("div",{className:"warn",children:[s.length," of ",lr," saved chats used. When full, the oldest chat is deleted automatically — delete chats you no longer need to free space."]}),i.jsx("div",{className:"list",children:u.length===0?i.jsxs("div",{className:"empty",children:["No conversations match “",l,"”.",i.jsx("button",{type:"button",className:"clear",onClick:()=>d(""),children:"Clear search"})]}):u.map(({rid:p,blob:h})=>i.jsx(na,{rid:p,blob:h,q:c,isCurrent:p===e,isLoaded:p===o,onSelect:()=>v(p,h),onDelete:w=>g(p,w)},p))}),i.jsx("div",{className:"footer",children:i.jsx("span",{children:c?`${u.length} of ${s.length} conversations`:`${s.length} conversations`})})]})]})}function na({rid:e,blob:t,q:n,isCurrent:s,isLoaded:r,onSelect:o,onDelete:a}){const l=hr(t)??e,d=n?ir(t,n):void 0,c=d?rr(d):sa(t);return i.jsxs("div",{className:`row ${r?"loaded":""}`,onClick:o,children:[i.jsxs("div",{className:"row-body",children:[i.jsxs("div",{className:"row-head",children:[i.jsx("span",{className:"row-title",children:l}),r&&i.jsx("span",{className:"tag",children:"viewing"}),s&&!r&&i.jsx("span",{className:"tag muted",children:"this room"})]}),i.jsx("div",{className:"row-sub",children:[e,`${t.data.length} msgs`,t.savedAt?va(t.savedAt):void 0].filter(Boolean).join(" · ")}),c&&i.jsx("div",{className:"row-preview",children:c})]}),i.jsx("button",{type:"button",className:"row-delete",title:"Delete saved chat",onClick:u=>{u.stopPropagation(),a(l)},children:i.jsx("svg",{viewBox:"0 0 24 24",width:"14",height:"14",fill:"currentColor","aria-hidden":"true",children:i.jsx("path",{d:"M9 3v1H4v2h1v13a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V6h1V4h-5V3H9zm0 5h2v9H9V8zm4 0h2v9h-2V8z"})})})]})}function nt(e){return Array.isArray(e.texts)?e.texts.map(t=>typeof t?.msg=="string"?t.msg:"").filter(Boolean).join(" ").trim():""}function rr(e){const t=nt(e),n=e.from?.name,s=e.deleted&&t?Lt+t:t;return typeof n=="string"&&n&&t?`${n}: ${s}`:s}function sa(e){for(let t=e.data.length-1;t>=0;t--){const n=rr(e.data[t]);if(n)return n}}function ir(e,t){for(let n=e.data.length-1;n>=0;n--){const s=e.data[n];if((typeof s.from?.name=="string"?s.from.name:"").toLowerCase().includes(t)||nt(s).toLowerCase().includes(t))return s}}function ra(e,t,n){return t.toLowerCase().includes(n)||hr(e)?.toLowerCase().includes(n)?!0:e.data.some(s=>(typeof s.from?.name=="string"?s.from.name:"").toLowerCase().includes(n)||nt(s).toLowerCase().includes(n))}const ia=`
  * { box-sizing: border-box; margin: 0; padding: 0; }

  .sidebar {
    width: 340px;
    height: 100%;
    display: flex;
    flex-direction: column;
    background: #232a31;
    color: rgba(255, 255, 255, 0.85);
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
    font-size: 13px;
    box-shadow: -8px 0 24px rgba(0, 0, 0, 0.35);
    border-right: 1px solid rgba(255, 255, 255, 0.06);
    animation: slide-in 0.22s cubic-bezier(0.23, 1, 0.32, 1);
  }
  @keyframes slide-in {
    from { transform: translateX(24px); opacity: 0; }
    to { transform: translateX(0); opacity: 1; }
  }
  @media (prefers-reduced-motion: reduce) {
    .sidebar { animation: none; }
  }

  .header {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 12px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.08);
  }
  .title { flex: 1; font-size: 14px; font-weight: 600; color: #fff; }
  .close {
    display: inline-flex;
    border: none;
    background: transparent;
    color: rgba(255, 255, 255, 0.4);
    cursor: pointer;
    padding: 4px;
  }
  .close:hover { color: #fff; }

  .controls { padding: 10px 12px; border-bottom: 1px solid rgba(255, 255, 255, 0.08); }
  input[type="text"] {
    width: 100%;
    appearance: none;
    background: #1b212a;
    border: 1px solid rgba(255, 255, 255, 0.12);
    border-radius: 4px;
    color: #fff;
    font-size: 12px;
    padding: 6px 8px;
  }
  input[type="text"]::placeholder { color: rgba(255, 255, 255, 0.35); }
  input:focus-visible, button:focus-visible {
    outline: none;
    border-color: #1890ff;
    box-shadow: 0 0 0 2px rgba(24, 144, 255, 0.25);
  }

  /* Always in the layout — only its content swaps, so no layout shift. */
  .status {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 8px;
    min-height: 33px;
    padding: 4px 12px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.08);
    color: rgba(255, 255, 255, 0.45);
    font-size: 12px;
  }
  .status-viewing { color: rgba(255, 255, 255, 0.75); }
  .back {
    border: none;
    background: transparent;
    color: #1890ff;
    cursor: pointer;
    font-size: 12px;
    padding: 0;
    white-space: nowrap;
  }
  .back:hover { color: #40a9ff; }

  .warn {
    padding: 8px 12px;
    background: rgba(250, 173, 20, 0.12);
    color: #faad14;
    font-size: 12px;
    line-height: 1.4;
    border-bottom: 1px solid rgba(255, 255, 255, 0.08);
  }

  .list { flex: 1; overflow-y: auto; padding: 4px 0; }
  .list::-webkit-scrollbar { width: 6px; }
  .list::-webkit-scrollbar-thumb { background: rgba(255, 255, 255, 0.15); border-radius: 3px; }

  .row {
    display: flex;
    align-items: center;
    gap: 6px;
    padding: 8px 8px 8px 10px;
    border-left: 2px solid transparent;
    cursor: pointer;
  }
  .row:hover { background: rgba(255, 255, 255, 0.03); }
  .row.loaded { border-left-color: #1890ff; background: rgba(24, 144, 255, 0.08); }
  .row + .row { border-top: 1px solid rgba(255, 255, 255, 0.05); }
  .row-body { flex: 1; min-width: 0; }
  .row-head { display: flex; align-items: center; gap: 6px; }
  .row-title {
    color: #fff;
    font-weight: 500;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .tag {
    flex: none;
    color: #1890ff;
    border: 1px solid rgba(24, 144, 255, 0.5);
    border-radius: 3px;
    font-size: 10px;
    line-height: 1;
    padding: 2px 4px;
  }
  .tag.muted { color: rgba(255, 255, 255, 0.45); border-color: rgba(255, 255, 255, 0.2); }
  .row-sub {
    color: rgba(255, 255, 255, 0.45);
    font-size: 11px;
    margin-top: 2px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .row-preview {
    color: rgba(255, 255, 255, 0.55);
    font-size: 12px;
    margin-top: 2px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .row-delete {
    flex: none;
    display: inline-flex;
    border: none;
    background: transparent;
    color: rgba(255, 255, 255, 0.25);
    cursor: pointer;
    padding: 6px;
    opacity: 0;
    transition: color 0.15s ease, opacity 0.15s ease;
  }
  .row:hover .row-delete { opacity: 1; }
  .row-delete:hover { color: #f5222d; }

  .empty {
    padding: 18px 14px;
    color: rgba(255, 255, 255, 0.45);
    line-height: 1.5;
  }

  .lock {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    text-align: center;
    padding: 40px 24px;
  }
  .lock-title { color: #fff; font-size: 14px; font-weight: 600; }
  .lock p { color: rgba(255, 255, 255, 0.55); font-size: 12px; line-height: 1.5; }
  .lock-cta {
    margin-top: 6px;
    background: #1890ff;
    color: #fff;
    border-radius: 4px;
    font-size: 13px;
    padding: 7px 22px;
    text-decoration: none;
  }
  .lock-cta:hover { background: #40a9ff; }
  .clear {
    display: block;
    margin-top: 8px;
    border: none;
    background: transparent;
    color: #1890ff;
    cursor: pointer;
    font-size: 12px;
    padding: 0;
  }
  .clear:hover { color: #40a9ff; }

  .footer {
    display: flex;
    justify-content: space-between;
    padding: 8px 12px;
    border-top: 1px solid rgba(255, 255, 255, 0.08);
    color: rgba(255, 255, 255, 0.45);
    font-size: 11px;
  }
`;function or(){const t=Array.from(document.querySelectorAll("div.blind")).filter(n=>/^(Emojis|Stickers|GIFs|Upload Images|AI|Notification)/.test(n.textContent??""));for(const n of t.reverse()){const s=n.closest(".ant-col");if(s)return s}return null}function ar(e){const t=document.createElement("button");t.id=e.id,t.type="button",t.title=e.title,t.addEventListener("click",e.onClick),t.className="ant-btn no-border ant-btn-link",t.setAttribute("style","padding: 3px 2px 0; height: auto;"),t.innerHTML=`<i class="anticon" style="font-size:20px">${e.iconSvg}</i><div class="blind">${e.title}</div>`;const n=document.createElement("div");return n.className="ant-col f4t-chat-col",n.setAttribute("style","padding-left: 2px; padding-right: 2px;"),n.append(t),n}function st(e,t){let n;for(let s=document.getElementById(t)?.parentElement;s&&s!==document.body;s=s.parentElement){const r=s.getBoundingClientRect();r.width>0&&r.width<=window.innerWidth*.7&&r.height>=window.innerHeight*.5&&(n=r.left)}e.style.right=`${n===void 0?0:Math.max(0,window.innerWidth-n)}px`}const fe="free4talk:messages",ae="f4t-tools:chat:",qe="f4t-tools:injected",lr=200,oa=180,aa=5e3,la=/^\/room\/([^/]+)\/?$/,He="f4t-chat-archive-btn",hn="f4t-chat-archive-sidebar";let Pt=!0;async function ca(){try{if(await $()===!1)return}catch(n){}Pt=!0;await da().catch(n=>x.warn("chat archive: migrate failed",n));window.addEventListener("pagehide",()=>{pn().catch(()=>{})});window.setInterval(Wn,aa);Wn();let e=!1;const t=()=>{e||(e=!0,requestAnimationFrame(()=>{e=!1;try{Sa(),Ea()}catch(n){x.warn("chat archive: sync failed",n)}}))};try{new MutationObserver(t).observe(document.body,{childList:!0,subtree:!0});window.addEventListener("resize",t);t()}catch(n){x.warn("chat archive: observer failed",n)}}function Wn(){pn().catch(e=>x.error("chat archive: tick failed",e))}function rt(e){return fn(sr,e)}async function it(e){return Y(await ie((await rt("readonly")).get(e)))}async function cr(e){const t=await rt("readwrite");await Promise.all([...e].map(([n,s])=>ie(t.put(s,n))))}async function dr(e){const t=await rt("readwrite");await Promise.all(e.map(n=>ie(t.delete(n))))}async function da(){const e=new Map;for(let s=0;s<localStorage.length;s++){const r=localStorage.key(s);if(!r?.startsWith(ae))continue;const o=Y(localStorage.getItem(r));o&&e.set(r.slice(ae.length),o)}const t=await chrome.storage.local.get(null);for(const[s,r]of Object.entries(t)){if(!s.startsWith(ae))continue;const o=Y(r);if(!o)continue;const a=s.slice(ae.length),l=e.get(a);e.set(a,l?{...o,data:_t(l.data,o.data)}:o)}if(!e.size)return;const n=new Map;for(const[s,r]of e){const o=await it(s);n.set(s,o?{...r,data:_t(o.data,r.data)}:r)}await cr(n);for(const s of e.keys())localStorage.removeItem(ae+s);await chrome.storage.local.remove(Object.keys(t).filter(s=>s.startsWith(ae)))}function he(){return la.exec(window.location.pathname)?.[1]}function Y(e){try{const t=typeof e=="string"?JSON.parse(e):e;if(!Array.isArray(t?.data))return null;const n=t.data.filter(s=>s&&typeof s.id=="string"&&typeof s.rid=="string");return n.length?{...t,data:n}:null}catch{return null}}async function ur(){const e=(await chrome.storage.local.get(qe))[qe];if(Array.isArray(e))return{ids:e.filter(t=>typeof t=="string")};if(e&&typeof e=="object"&&Array.isArray(e.ids)){const t=e;return{from:typeof t.from=="string"?t.from:void 0,ids:t.ids.filter(n=>typeof n=="string")}}return{ids:[]}}async function ua(){return(await ur()).from}function _t(e,t){const n=new Map(e.map(s=>[s.id,s]));return t.forEach(s=>{const r=n.get(s.id);r?.deleted&&Dt(r)||n.set(s.id,s.deleted&&r&&!Dt(s)?fa(s,r):s)}),[...n.values()].sort((s,r)=>s.time-r.time||s.idx-r.idx).map((s,r)=>({...s,idx:r+1}))}const Lt="🗑 (deleted) ",Dt=e=>Object.values(e).some(t=>Array.isArray(t)&&t.length);function fa(e,t){const n={...e};for(const[s,r]of Object.entries(t))Array.isArray(r)&&r.length&&Array.isArray(n[s])&&!n[s].length&&(n[s]=r);return n}function fr(e,t,n){if(!e.deleted||!Dt(e))return{...e,rid:t,idx:n};const{deleted:s,...r}=e,[o,...a]=e.texts??[],l=typeof o?.msg=="string"?[{...o,msg:Lt+o.msg},...a]:[{msg:Lt.trim()},...e.texts??[]];return{...r,rid:t,idx:n,texts:l}}async function pn(){try{const e=Y(localStorage.getItem(fe));if(!e)return;const t=new Set((await ur()).ids),n=new Map;if(e.data.forEach(r=>{t.has(r.id)||n.set(r.rid,[...n.get(r.rid)??[],r])}),!n.size)return;const s=new Map;for(const[r,o]of n){const a=await it(r);s.set(r,{ver:e.ver,data:_t(a?.data??[],o),savedAt:Date.now()})}await cr(s);await pa()}catch(err){x.warn("chat archive: tick failed",err)}}async function Ft(){try{const e=await rt("readonly"),[t,n]=await Promise.all([ie(e.getAllKeys()),ie(e.getAll())]),s=[];return t.forEach((r,o)=>{const a=Y(n[o]);typeof r=="string"&&a&&s.push({rid:r,blob:a})}),s.sort((r,o)=>(o.blob.savedAt??0)-(r.blob.savedAt??0))}catch(err){x.warn("chat archive: load failed",err);return[]}}async function ha(e){await dr([e])}async function pa(){const e=(await Ft()).slice(lr);e.length&&await dr(e.map(t=>t.rid))}async function ma(e,t){await pn();const n=await it(e);if(!n)return;const s=Y(localStorage.getItem(fe)),r=n.data.map((o,a)=>fr(o,t,a+1));try{const o=Math.max(s?.ver??0,n.ver??0)+1;localStorage.setItem(fe,JSON.stringify({ver:o,data:r})),await chrome.storage.local.set({[qe]:{from:e,ids:r.map(a=>a.id)}})}catch(o){x.error("chat archive: load failed",o)}}async function ga(e){const t=await it(e);try{if(t){const n=Y(localStorage.getItem(fe)),s=Math.max(n?.ver??0,t.ver??0)+1,r=t.data.map((o,a)=>fr(o,e,a+1));localStorage.setItem(fe,JSON.stringify({ver:s,data:r}))}await chrome.storage.local.remove(qe)}catch(n){x.error("chat archive: reset failed",n)}}const ya=".react-container.translate-container";function xa(e,t){const n=e[t];if(t<0||!e.length)return;const s=new Map;e.forEach(u=>s.set(u,(s.get(u)??0)+1));const r=new Map;e.forEach((u,v)=>{u.length>=6&&s.get(u)===1&&r.set(u,v)});const o=!!n&&s.get(n)===1,a=Date.now()+12e3;let l=!1,d;const c=()=>{const u=document.querySelector(ya);if(!u){Date.now()<a&&window.setTimeout(c,300);return}const v=u.scrollHeight/e.length;if(!l){l=!0,u.scrollTop=t*v-u.clientHeight/2,window.setTimeout(c,400);return}const m=ba(u,n);if(m&&(o||d)){m.scrollIntoView({block:"center"}),Xn(m);return}const g=[...u.children];let p;if(g.forEach(h=>{const w=h.textContent;if(w)for(const[k,j]of r)w.includes(k)&&(!p||Math.abs(j-t)<Math.abs(p.at-t))&&(p={row:h,at:j})}),p){if(Math.abs(p.at-t)<=2&&(d??=Date.now(),Date.now()-d>=2500||Date.now()>=a)){p.row.scrollIntoView({block:"center"}),Xn(p.row);return}const h=p.row.getBoundingClientRect().top-u.getBoundingClientRect().top+u.scrollTop;u.scrollTop=h+(t-p.at)*v-u.clientHeight/2}Date.now()<a&&window.setTimeout(c,300)};c()}function ba(e,t){if(!t||!e.textContent?.includes(t))return null;for(const n of e.querySelectorAll("*"))if(n.textContent?.includes(t)&&![...n.children].some(s=>s.textContent?.includes(t)))return n;return null}function Xn(e){const t=e.style.cssText;e.style.transition="background-color 0.4s ease",e.style.backgroundColor="rgba(24, 144, 255, 0.3)",e.style.borderRadius="4px",window.setTimeout(()=>e.style.cssText=t,2e3)}function hr(e){for(const t of e.data){if(!Array.isArray(t.systems))continue;const n=t.systems.find(s=>s?.message==="Room Info"&&typeof s?.children=="string");if(n)return n.children.split(`
`).map(s=>s.replace(/^(Language|Topic):\s*/,"").trim()).filter(Boolean).join(" · ")}}function va(e){const t=Math.round((Date.now()-e)/6e4);if(t<60)return`${t}m ago`;const n=Math.round(t/60);return n<24?`${n}h ago`:`${Math.round(n/24)}d ago`}const wa='<svg viewBox="0 0 24 24" width="1em" height="1em" fill="currentColor" aria-hidden="true"><path d="M13 3a9 9 0 0 0-9 9H1l3.9 3.9L8.8 12H6a7 7 0 1 1 2.05 4.95l-1.41 1.41A9 9 0 1 0 13 3zm-1 5v5l4.25 2.52.77-1.28-3.52-2.09V8H12z"/></svg>';function Sa(){const e=document.getElementById(He),t=he()?or():null;if(!t){e?.closest(".f4t-chat-col")?.remove(),e?.remove(),ot();return}if(e)return;const n=ar({id:He,title:"Saved Chats",iconSvg:wa,onClick:ka});t.insertAdjacentElement("afterend",n)}let ne=null,pr;function ka(e){e.stopPropagation(),ne?ot():ja()}function ja(){const e=he();if(!e||ne)return;pr=e;const t=document.createElement("div");t.id=hn,t.style.cssText="position: fixed; top: 0; bottom: 0; z-index: 1030;",st(t,He),document.body.append(t);const n=t.attachShadow({mode:"open"}),s=document.createElement("div");s.style.height="100%",n.append(s),ne=ge.createRoot(s),ne.render(f.createElement(ta,{currentRid:e,locked:!Pt,onClose:ot}))}function ot(){ne&&(ne.unmount(),ne=null,document.getElementById(hn)?.remove())}function Ea(){const e=document.getElementById(hn);if(e){if(he()!==pr){ot();return}st(e,He)}}const Jn="f4t:suggestions",H="f4t:yt-remote",Ca=15e3,Na=5,Le=0,ft=1,zt=2,Ta=25e3,Zn=5e3;let Aa=0;const Ke=new Map;function K(e,t){return new Promise((n,s)=>{const r=++Aa;Ke.set(r,{resolve:n,reject:s}),window.postMessage({ns:nn,dir:"req",id:r,cmd:e,arg:t},window.location.origin),window.setTimeout(()=>{Ke.delete(r)&&s(new Error("bridge-timeout"))},Ca)})}const b={status:"idle",tracks:[],index:0,skipped:new Set,shuffle:!1,repeat:"off"};let T=[],Ne=0;function mr(e){if(T=b.tracks.map((t,n)=>n),!!b.shuffle){for(let t=T.length-1;t>0;t--){const n=Math.floor(Math.random()*(t+1));[T[t],T[n]]=[T[n],T[t]]}T.splice(T.indexOf(e),1),T.unshift(e)}}function mn(e,t){const n=T.indexOf(e)+t;return n>=0&&n<T.length?T[n]:b.repeat==="all"&&T.length?T[(n+T.length)%T.length]:void 0}function Oa(){b.shuffle=!b.shuffle,mr(b.index),C({})}function Ma(){gr(b.repeat==="off"?"all":b.repeat==="all"?"one":"off")}function gr(e){C({repeat:e})}const $t=new Set;let ue,Qe=0,F=0;function C(e){Object.assign(b,e),$t.forEach(t=>t({...b,skipped:new Set(b.skipped)}))}let ce;function Ia(e,t){const n=ce?.videoId===e?ce:void 0,s={videoId:e,videoUrl:`https://www.youtube.com/watch?v=${e}`,title:n?.title??"",channel:n?.author??"",thumbnail:`https://i.ytimg.com/vi/${e}/mqdefault.jpg`};ue=e,Qe=Date.now(),Ve=!0,window.clearTimeout(Bt),T=[0],C({status:t===zt?"paused":"playing",tracks:[{id:`yt:${e}`,name:s.title,artist:s.channel,durationMs:0,image:s.thumbnail,yt:s}],index:0,matched:{videoId:e,title:s.title,channel:s.channel},skipped:new Set,message:void 0})}function es(){(b.status==="paused-external"||b.status==="error")&&xr()}function gn(e){return $t.add(e),e({...b,skipped:new Set(b.skipped)}),()=>$t.delete(e)}let oe;async function Te(e,t,n,s=0,r){F+=1,oe=r,C({status:"idle",playlistId:e,playlistName:t,tracks:n,index:s,matched:void 0,message:void 0,skipped:new Set}),mr(s),Ne=0,await ye(s)}const Ra="Open the room's YouTube panel (apps icon → Youtube), then press play again.";async function Pa(e,t){if(!await K("open-panel"))throw new Error("panel-closed");if(e.yt&&!mi(e.yt.videoId))return null;const s=e.yt??(await K("search",`${e.artist} ${e.name}`.trim()))[0];return F!==t?"stale":s?(await K("play",s),F!==t?"stale":(ue=s.videoId,Qe=Date.now(),await K("autoplay",!1)&&(Ut=!0),s)):null}let Ut=!1;function pe(){Ut&&(Ut=!1,K("autoplay",!0).catch(()=>{}))}function _a(e,t){if(F!==t)return;x.error("spotify player: play failed",e),pe();const n=e instanceof Error?e.message:String(e);C({status:"error",message:n==="panel-closed"?Ra:`Playback failed: ${n}`})}async function ye(e){const t=++F,n=b.tracks[e];if(!n)return Ie();C({status:"resolving",index:e,matched:void 0,message:n.yt?`Loading “${n.name}”…`:`Searching YouTube for “${n.name}”…`});try{const s=await Pa(n,t);if(s==="stale")return;if(!s)return b.skipped.add(e),Ne+=1,C({message:n.yt?`“${n.name}” can't be played here — skipped.`:`No YouTube match for “${n.name}” — skipped.`}),yn(e,t);Ne=0,C({status:"playing",matched:{videoId:s.videoId,title:s.title,channel:s.channel},message:void 0}),La(e,t)}catch(s){_a(s,t)}}function yr(e,t,n){if(F!==t||b.index!==e)return;const s=b.tracks[e];b.skipped.add(e),Ne+=1,C({message:`“${s?.name??"Video"}” ${n} — skipped.`}),yn(e,t)}let Bt,Ve=!1;function La(e,t){window.clearTimeout(Bt),Ve=!1,Bt=window.setTimeout(()=>{Ve||yr(e,t,"didn't start")},Ta)}function yn(e,t){if(F!==t)return;if(oe)return oe({skipped:b.skipped.has(e)});if(Ne>=Na){pe(),C({status:"error",message:"Too many tracks in a row had no YouTube match — stopped."});return}const n=mn(e,1);if(n===void 0){pe(),C({status:"stopped",message:"Playlist finished."});return}ye(n)}function ts(){if(b.repeat==="one")return void ye(b.index);if(oe)return oe({skipped:!1});yn(b.index,F)}async function Da(){const e=mn(b.index,1);if(e===void 0)return Ie();await ye(e)}async function Fa(){await ye(mn(b.index,-1)??b.index)}async function Ie(){F+=1,ue=void 0,pe();try{await K("stop")}catch{}C({status:"stopped",message:void 0})}function za(e){F+=1,oe=void 0,pe(),C({status:"stopped",message:e})}async function xr(){await ye(b.index)}async function br(){await K("player-control","pauseVideo")}async function vr(){await K("player-control","playVideo")}async function wr(e){await K("seek",e)}let ns=!1;function xn(){ns||(ns=!0,window.addEventListener("message",e=>{const t=e.data;if(!(e.source!==window||t?.ns!==nn)){if(t.dir==="res"&&typeof t.id=="number"){const n=Ke.get(t.id);if(!n)return;Ke.delete(t.id),t.ok?n.resolve(t.result):n.reject(new Error(t.error??"bridge-error"));return}if(t.dir==="event"&&t.event==="player-error"){t.videoId===ue&&(b.status==="playing"||b.status==="paused")&&yr(b.index,F,"can't be played here");return}if(t.dir==="event"&&t.event==="video"&&typeof t.videoId=="string"){ce={videoId:t.videoId,title:t.title??"",author:t.author??""};const n=b.tracks[b.index];if(n?.yt?.videoId===t.videoId&&!n.name&&ce.title){const s={...n.yt,title:ce.title,channel:ce.author};b.tracks[b.index]={...n,name:s.title,artist:s.channel,yt:s},C({matched:{videoId:s.videoId,title:s.title,channel:s.channel}})}return}if(t.dir==="event"&&t.event==="player"){const n=t.videoId===ue;n&&t.state===ft&&(Ve=!0);const s=b.status==="playing"||b.status==="paused"||b.status==="paused-external";if(!n&&t.source&&t.videoId&&oe&&s&&Date.now()-Qe>=Zn){Ia(t.videoId,t.state);return}if(b.status==="paused-external"){n&&t.state===ft?C({status:"playing",message:void 0}):n&&t.state===zt?C({status:"paused",message:void 0}):n&&t.state===Le?ts():!n&&t.state===Le&&t.videoId&&es();return}if(!(b.status==="playing"||b.status==="paused")){b.status!=="resolving"&&!n&&t.state===Le&&t.videoId&&es();return}if(t.videoId&&ue&&!n){if(Date.now()-Qe<Zn)return;F+=1,pe(),C({status:"paused-external",message:t.source?"You started another video — your playlist continues when it ends.":"Someone else is playing a video — your playlist continues when it ends."});return}if(!n)return;t.state===Le?ts():t.state===ft&&b.status!=="playing"?C({status:"playing"}):t.state===zt&&b.status==="playing"&&C({status:"paused"})}}}))}const $a="https://developer.spotify.com/dashboard";function bn(e){return!!(e&&e.status!=="idle"&&e.status!=="stopped")}function Ua({locked:e,onClose:t}){e=!1;const[n,s]=f.useState({state:"loading"}),[r,o]=f.useState(null),[a,l]=f.useState(null),[d,c]=f.useState(null),[u,v]=f.useState(null),[m,g]=f.useState(!1),[p,h]=f.useState();f.useEffect(()=>gn(v),[]);const w=async y=>{try{const S=await Si();o(S),await ki(S)}catch(S){y||h(S instanceof Error?S.message:"Spotify request failed.")}};f.useEffect(()=>{e||(async()=>{const[y,S]=await Promise.all([Tn(),vi()]);if(!S){s({state:"setup",clientId:y});return}s({state:"ready"});const E=await wi();E&&o(E),An().then(N=>s({state:"ready",name:N.name,id:N.id})).catch(async N=>{s({state:"setup",clientId:y}),h(N instanceof Error?N.message:"Spotify request failed.")}),w(!!E)})()},[e]);const k=async()=>{s({state:"ready"}),h(void 0);try{const y=await An();s({state:"ready",name:y.name,id:y.id})}catch(y){h(y instanceof Error?y.message:"Spotify request failed.")}w(!1)},j=async()=>{await Ie(),await Ei(),o(null),l(null),c(null),s({state:"setup",clientId:await Tn()})},M=async y=>{l(y),h(void 0);const S=await Ci(y.id);c(S);try{const E=await On(y.id);c(E),await Mn(y.id,E)}catch(E){S||h(E instanceof Error?E.message:"Failed to load tracks.")}},L=async()=>{if(!m){g(!0),h(void 0);try{if(a){const y=await On(a.id);c(y),await Mn(a.id,y)}else await w(!1)}catch(y){h(y instanceof Error?y.message:"Refresh failed.")}finally{g(!1)}}},D=n.state==="ready"?n.id:void 0,q=(r??[]).filter(y=>y.id===sn||D&&y.ownerId===D);return i.jsxs("div",{className:"sidebar",children:[i.jsx("style",{children:Wa}),i.jsxs("div",{className:"header",children:[i.jsx("svg",{viewBox:"0 0 24 24",width:"22",height:"22",fill:"#1db954","aria-hidden":"true",children:i.jsx("path",{d:kr})}),i.jsxs("div",{className:"header-text",children:[i.jsx("div",{className:"title",children:"Spotify Player"}),n.state==="ready"&&i.jsx("div",{className:"subtitle",children:n.name?`Connected as ${n.name}`:"Connected"})]}),i.jsx("button",{type:"button",className:"close",title:"Close",onClick:t,children:i.jsx("svg",{viewBox:"0 0 24 24",width:"14",height:"14",fill:"currentColor","aria-hidden":"true",children:i.jsx("path",{d:"M19 6.4 17.6 5 12 10.6 6.4 5 5 6.4 10.6 12 5 17.6 6.4 19 12 13.4 17.6 19 19 17.6 13.4 12z"})})})]}),e?i.jsx(Ba,{}):n.state==="loading"?null:n.state==="setup"?i.jsx(qa,{initialClientId:n.clientId,error:p,onConnected:k}):i.jsxs(i.Fragment,{children:[i.jsxs("div",{className:"bar",children:[a?i.jsxs("span",{className:"bar-left",children:[i.jsx("button",{type:"button",className:"link",onClick:()=>{l(null),c(null)},children:"← Playlists"}),i.jsx("span",{className:"crumb-name",children:a.name})]}):i.jsx("span",{className:"bar-left",children:"Playlists"}),i.jsxs("span",{className:"bar-actions",children:[i.jsx("button",{type:"button",className:`icon-btn ${m?"spinning":""}`,title:a?"Refresh tracks":"Refresh playlists",onClick:L,children:i.jsx("svg",{viewBox:"0 0 24 24",width:"14",height:"14",fill:"currentColor","aria-hidden":"true",children:i.jsx("path",{d:"M17.65 6.35A7.96 7.96 0 0 0 12 4a8 8 0 1 0 7.73 10h-2.08A6 6 0 1 1 12 6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"})})}),i.jsx("button",{type:"button",className:"link",onClick:j,children:"Disconnect"})]})]}),p&&i.jsx("div",{className:"warn",children:p}),a?i.jsx(Ka,{playlist:a,tracks:d,player:u,addTargets:q}):i.jsx(Ha,{playlists:r,player:u,onOpen:M}),i.jsx(Va,{player:u,addTargets:q}),i.jsx(Qa,{player:u,addTargets:q})]})]})}function Ba(){return i.jsxs("div",{className:"lock",children:[i.jsx("svg",{viewBox:"0 0 24 24",width:"28",height:"28",fill:"#1db954","aria-hidden":"true",children:i.jsx("path",{d:kr})}),i.jsx("div",{className:"lock-title",children:"Spotify Player is a Pro feature"}),i.jsx("p",{children:"Connect your Spotify, pick a playlist, and the room's YouTube player plays it track by track — automatically."}),i.jsx("p",{children:"Pay once on Buy Me a Coffee with your free4talk.me email."}),i.jsxs("a",{className:"lock-cta",href:tt,target:"_blank",rel:"noopener noreferrer",children:["Get Pro — ",et," once"]})]})}function qa({initialClientId:e,error:t,onConnected:n}){const[s,r]=f.useState(e),[o,a]=f.useState(""),[l,d]=f.useState(!1),[c,u]=f.useState(!1),[v,m]=f.useState();f.useEffect(()=>{ji().then(a)},[]);const g=async()=>{await navigator.clipboard.writeText(o),d(!0),window.setTimeout(()=>d(!1),1500)},p=async()=>{u(!0),m(void 0),await Ti(s);const h=await Ai();u(!1),h.ok?n():m(h.error)};return i.jsxs("div",{className:"wizard",children:[i.jsx("p",{className:"wizard-intro",children:"One-time setup: Spotify requires every user to register their own (free) app."}),i.jsxs("div",{className:"step",children:[i.jsx("div",{className:"step-title",children:"1. Create a Spotify app"}),i.jsxs("p",{children:["Open the"," ",i.jsx("a",{href:$a,target:"_blank",rel:"noopener noreferrer",children:"Spotify Developer Dashboard"})," ","→ Create app. Any name works. Under ",i.jsx("b",{children:"Redirect URIs"}),", paste:"]}),i.jsxs("div",{className:"uri-row",children:[i.jsx("code",{children:o||"…"}),i.jsx("button",{type:"button",className:"link",onClick:g,disabled:!o,children:l?"Copied!":"Copy"})]}),i.jsx("p",{className:"hint",children:`Check "Web API", save, and you're done there.`})]}),i.jsxs("div",{className:"step",children:[i.jsx("div",{className:"step-title",children:"2. Paste your Client ID"}),i.jsx("input",{type:"text",value:s,placeholder:"Client ID from your app's settings",onChange:h=>r(h.target.value)})]}),i.jsxs("div",{className:"step",children:[i.jsx("div",{className:"step-title",children:"3. Connect"}),i.jsx("button",{type:"button",className:"cta",disabled:!s.trim()||c,onClick:p,children:c?"Waiting for Spotify…":"Connect Spotify"}),(v??t)&&i.jsx("div",{className:"warn",children:v??t})]})]})}function vn({paused:e}){return i.jsxs("span",{className:`waves ${e?"paused":""}`,"aria-label":"playing",children:[i.jsx("i",{}),i.jsx("i",{}),i.jsx("i",{})]})}function Ha({playlists:e,player:t,onOpen:n}){return e?e.length?i.jsx("div",{className:"list",children:e.map(s=>{const r=bn(t)&&t?.playlistId===s.id;return i.jsxs("div",{className:`row ${r?"current":""}`,onClick:()=>n(s),children:[s.image?i.jsx("img",{className:"cover",src:s.image,alt:""}):s.id===sn?i.jsx("div",{className:"cover liked",children:"♥"}):i.jsx("div",{className:"cover placeholder"}),i.jsxs("div",{className:"row-body",children:[i.jsxs("div",{className:"row-head",children:[i.jsx("span",{className:"row-title",children:s.name}),r&&i.jsx(vn,{paused:t?.status!=="playing"})]}),i.jsxs("div",{className:"row-sub",children:[s.trackCount," tracks",s.owner?` · ${s.owner}`:""]})]})]},s.id)})}):i.jsx("div",{className:"empty",children:"No playlists on this account."}):i.jsx("div",{className:"empty",children:"Loading playlists…"})}function Ka({playlist:e,tracks:t,player:n,addTargets:s}){const[r,o]=f.useState(""),a=bn(n)&&n?.playlistId===e.id,l=r.trim().toLowerCase(),d=(t??[]).map((c,u)=>({track:c,index:u})).filter(({track:c})=>!l||c.name.toLowerCase().includes(l)||c.artist.toLowerCase().includes(l));return i.jsxs(i.Fragment,{children:[i.jsxs("div",{className:"controls-bar",children:[i.jsx("input",{type:"text",value:r,placeholder:"Search this playlist",onChange:c=>o(c.target.value)}),i.jsxs("button",{type:"button",className:"play-all",disabled:!t?.length,onClick:()=>t&&void Te(e.id,e.name,t,0),title:"Play all from the top",children:[i.jsx("svg",{viewBox:"0 0 24 24",width:"14",height:"14",fill:"currentColor","aria-hidden":"true",children:i.jsx("path",{d:"M8 5v14l11-7z"})}),"Play all"]})]}),t?d.length?i.jsx("div",{className:"list",children:d.map(({track:c,index:u})=>{const v=a&&n?.index===u,m=a&&n?.skipped.has(u);return i.jsxs("div",{className:`row track ${v?"current":""}`,onClick:()=>{Te(e.id,e.name,t,u)},title:"Play from here",children:[c.image?i.jsx("img",{className:"art",src:c.image,alt:""}):i.jsx("span",{className:"art num",children:u+1}),i.jsxs("div",{className:"row-body",children:[i.jsxs("div",{className:"row-head",children:[i.jsx("span",{className:"row-title",children:c.name}),v&&i.jsx(vn,{paused:n?.status!=="playing"})]}),i.jsx("div",{className:"row-sub",children:c.artist})]}),i.jsx("span",{className:"dur",children:m?"skipped":Ya(c.durationMs)}),i.jsx(wn,{track:c,targets:s.filter(g=>g.id!==e.id)})]},`${c.id}-${u}`)})}):i.jsx("div",{className:"empty",children:l?`No tracks match “${r}”.`:"This playlist has no playable tracks."}):i.jsx("div",{className:"empty",children:"Loading tracks…"})]})}function Qa({player:e,addTargets:t}){if(!e||e.status==="idle")return null;const n=e.tracks[e.index],s=()=>{if(e.status==="playing")return void br();if(e.status==="paused")return void vr();xr()};return i.jsxs("div",{className:"now",children:[n&&i.jsxs("div",{className:"now-track",children:[n.image&&i.jsx("img",{className:"art",src:n.image,alt:""}),i.jsxs("div",{className:"row-body",children:[i.jsx("div",{className:"row-title",children:n.name}),i.jsx("div",{className:"row-sub",children:n.artist}),i.jsx("div",{className:"now-matched",title:e.matched?"YouTube video being played":void 0,children:e.matched?`▶ ${e.matched.title} · ${e.matched.channel}`:" "})]}),i.jsx(wn,{track:n,targets:t})]}),i.jsxs("div",{className:"now-status",children:[e.status==="resolving"&&(e.message??"Searching YouTube…"),e.status==="playing"&&`Playing ${e.index+1} of ${e.tracks.length}`,e.status==="paused"&&`Paused — ${e.index+1} of ${e.tracks.length}`,e.status==="paused-external"&&(e.message??"Paused"),e.status==="stopped"&&(e.message??"Stopped"),e.status==="error"&&(e.message??"Something went wrong.")]}),i.jsxs("div",{className:"controls",children:[i.jsx("button",{type:"button",className:`mode ${e.shuffle?"on":""}`,onClick:Oa,title:e.shuffle?"Shuffle on":"Shuffle off",children:i.jsx("svg",{viewBox:"0 0 24 24",width:"16",height:"16",fill:"currentColor","aria-hidden":"true",children:i.jsx("path",{d:"M10.59 9.17 5.41 4 4 5.41l5.17 5.17 1.42-1.41zM14.5 4l2.04 2.04L4 18.59 5.41 20 17.96 7.46 20 9.5V4h-5.5zm.33 9.41-1.41 1.41 3.13 3.13L14.5 20H20v-5.5l-2.04 2.04-3.13-3.13z"})})}),i.jsx("button",{type:"button",onClick:()=>{Fa()},title:"Previous track",children:i.jsx("svg",{viewBox:"0 0 24 24",width:"18",height:"18",fill:"currentColor","aria-hidden":"true",children:i.jsx("path",{d:"M6 6h2v12H6zm3.5 6 8.5 6V6z"})})}),i.jsx("button",{type:"button",className:"play",onClick:s,disabled:e.status==="resolving",title:e.status==="playing"?"Pause":"Play",children:i.jsx("svg",{viewBox:"0 0 24 24",width:"20",height:"20",fill:"currentColor","aria-hidden":"true",children:e.status==="playing"?i.jsx("path",{d:"M6 5h4v14H6zm8 0h4v14h-4z"}):i.jsx("path",{d:"M8 5v14l11-7z"})})}),i.jsx("button",{type:"button",onClick:()=>{Da()},title:"Next track",children:i.jsx("svg",{viewBox:"0 0 24 24",width:"18",height:"18",fill:"currentColor","aria-hidden":"true",children:i.jsx("path",{d:"M16 6h2v12h-2zM6 18l8.5-6L6 6z"})})}),i.jsx("button",{type:"button",className:`mode ${e.repeat!=="off"?"on":""}`,onClick:Ma,title:e.repeat==="off"?"Repeat off":e.repeat==="all"?"Repeat all":"Repeat one",children:i.jsx("svg",{viewBox:"0 0 24 24",width:"16",height:"16",fill:"currentColor","aria-hidden":"true",children:e.repeat==="one"?i.jsx("path",{d:"M7 7h10v3l4-4-4-4v3H5v6h2V7zm10 10H7v-3l-4 4 4 4v-3h12v-6h-2v4zm-4-2V9h-1l-2 1v1h1.5v4H13z"}):i.jsx("path",{d:"M7 7h10v3l4-4-4-4v3H5v6h2V7zm10 10H7v-3l-4 4 4 4v-3h12v-6h-2v4z"})})}),i.jsx("button",{type:"button",className:"stop",onClick:()=>{Ie()},title:"Stop playlist",children:i.jsx("svg",{viewBox:"0 0 24 24",width:"13",height:"13",fill:"currentColor","aria-hidden":"true",children:i.jsx("path",{d:"M6 6h12v12H6z"})})})]})]})}function Sr(e,t){const n=f.useRef(null);return f.useEffect(()=>{if(!e)return;const s=r=>{n.current&&!r.composedPath().includes(n.current)&&t()};return window.addEventListener("pointerdown",s,!0),()=>window.removeEventListener("pointerdown",s,!0)},[e,t]),n}function Va({player:e,addTargets:t}){const[n,s]=f.useState(!1),[r,o]=f.useState(null),[a,l]=f.useState(null),[d,c]=f.useState(!1),u=e&&bn(e)?e.tracks[e.index]:void 0,v=e?.playlistId===Jn,m=v?r?.seedTrack??u:u,g=m?.id,p=Sr(n,()=>s(!1));if(f.useEffect(()=>{if(!g||!m||r?.seed===g)return;let y=!1;return Ni(m).then(S=>{y||o({seed:g,seedTrack:m,data:S})}).catch(()=>{y||o({seed:g,seedTrack:m,data:null})}),()=>{y=!0}},[g]),!m||m.yt)return null;const h=r&&r.seed===g?r.data:void 0,w=h===void 0,k=h?.source==="artist"?`More from ${m.artist.split(",")[0]}`:"Similar songs",j=a&&a.seed===g?a.tracks:[],M=new Set([m.id,...(h?.tracks??[]).map(y=>y.id),...j.map(y=>y.id)]),L=new Set([m,...h?.tracks??[],...j].map(y=>`${y.name}|${y.artist}`.toLowerCase())),D=!!h?.artistId&&(!a||a.seed!==g||a.hasMore),q=async()=>{if(!(!h?.artistId||!g||d)){c(!0);try{const y=a?.seed===g?a.nextOffset:0,S=await Mi(h.artistId,y),E=S.tracks.filter(N=>{const xe=`${N.name}|${N.artist}`.toLowerCase();return M.has(N.id)||L.has(xe)?!1:(M.add(N.id),L.add(xe),!0)});l({seed:g,tracks:[...j,...E],nextOffset:S.nextOffset,hasMore:S.hasMore})}catch{}finally{c(!1)}}};return i.jsxs("div",{className:"suggest",ref:p,children:[i.jsxs("button",{type:"button",className:"suggest-head",onClick:()=>s(!n),"aria-expanded":n,children:[i.jsx("span",{children:k}),i.jsx("span",{className:`suggest-caret ${n?"open":""}`,children:"▾"})]}),i.jsx("div",{className:`suggest-body ${n?"open":""}`,children:i.jsx("div",{className:"suggest-inner",children:w?i.jsx("div",{className:"suggest-note",children:"Finding songs…"}):h?.tracks.length||j.length?i.jsxs("div",{className:"suggest-list",children:[[...h?.tracks??[],...j].map((y,S,E)=>{const N=v&&u?.id===y.id;return i.jsxs("div",{className:`row track ${N?"current":""}`,onClick:()=>{Te(Jn,k,E,S)},title:"Play from here",children:[y.image?i.jsx("img",{className:"art",src:y.image,alt:""}):i.jsx("span",{className:"art num",children:"♪"}),i.jsxs("div",{className:"row-body",children:[i.jsxs("div",{className:"row-head",children:[i.jsx("span",{className:"row-title",children:y.name}),N&&i.jsx(vn,{paused:e?.status!=="playing"})]}),i.jsx("div",{className:"row-sub",children:y.artist})]}),i.jsx(wn,{track:y,targets:t})]},y.id)}),D&&i.jsx("button",{type:"button",className:"suggest-more",onClick:()=>{q()},disabled:d,children:d?"Loading…":"Load more"})]}):i.jsx("div",{className:"suggest-note",children:"No suggestions found."})})})]})}const ss=190,Ga=244;function wn({track:e,targets:t}){const[n,s]=f.useState(!1),[r,o]=f.useState({top:0,left:0}),[a,l]=f.useState(),[d,c]=f.useState(!1),u=Sr(n,()=>s(!1));if(f.useEffect(()=>{if(!n)return;const g=()=>s(!1);return window.addEventListener("scroll",g,!0),()=>window.removeEventListener("scroll",g,!0)},[n]),!Oi(e.id)||!t.length)return null;const v=g=>{if(n){s(!1);return}const p=g.currentTarget.getBoundingClientRect(),h=Math.min(t.length*30+34,Ga);let w=p.bottom+4;w+h>window.innerHeight-8&&(w=Math.max(8,p.top-4-h));const k=Math.min(Math.max(8,p.right-ss),window.innerWidth-ss-8);o({top:w,left:k}),s(!0)},m=async g=>{try{await Ii(g,e.id),l(g),window.setTimeout(()=>{l(void 0),s(!1)},1200)}catch{c(!0),window.setTimeout(()=>c(!1),1500)}};return i.jsxs("span",{className:"add-wrap",ref:u,onClick:g=>g.stopPropagation(),children:[i.jsx("button",{type:"button",className:"add-btn",title:"Add to playlist",onClick:v,children:"+"}),n&&i.jsxs("div",{className:"add-menu",style:{top:r.top,left:r.left},children:[i.jsx("div",{className:"add-menu-head",children:"Add to"}),t.map(g=>i.jsxs("button",{type:"button",className:a===g.id?"added":"",onClick:()=>{m(g.id)},children:[g.image?i.jsx("img",{className:"add-cover",src:g.image,alt:""}):g.id===sn?i.jsx("span",{className:"add-cover liked",children:"♥"}):i.jsx("span",{className:"add-cover placeholder"}),i.jsx("span",{className:"add-name",children:a===g.id?"Added ✓":g.name})]},g.id)),d&&i.jsx("div",{className:"add-err",children:"Couldn't add — try again"})]})]})}function Ya(e){if(!e)return"";const t=Math.round(e/1e3);return`${Math.floor(t/60)}:${String(t%60).padStart(2,"0")}`}const kr="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm4.586 14.424a.622.622 0 0 1-.857.207c-2.348-1.435-5.304-1.76-8.785-.964a.623.623 0 1 1-.277-1.215c3.809-.87 7.077-.496 9.713 1.115.293.18.386.563.206.857zm1.223-2.723a.78.78 0 0 1-1.072.257c-2.687-1.652-6.785-2.131-9.965-1.166A.78.78 0 1 1 6.32 11.3c3.632-1.102 8.147-.568 11.234 1.328a.78.78 0 0 1 .255 1.073zm.105-2.835C14.692 8.95 9.375 8.775 6.297 9.71a.935.935 0 1 1-.543-1.79c3.532-1.072 9.404-.865 13.115 1.338a.936.936 0 1 1-.955 1.608z",Wa=`
  * { box-sizing: border-box; margin: 0; padding: 0; }

  .sidebar {
    width: 340px;
    height: 100%;
    display: flex;
    flex-direction: column;
    background: #232a31;
    color: rgba(255, 255, 255, 0.85);
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
    font-size: 13px;
    box-shadow: -8px 0 24px rgba(0, 0, 0, 0.35);
    border-right: 1px solid rgba(255, 255, 255, 0.06);
  }

  .header {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 6px 12px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.08);
  }
  .header-text { flex: 1; min-width: 0; }
  .title { font-size: 13px; font-weight: 600; color: #fff; line-height: 1.25; }
  .subtitle {
    color: rgba(255, 255, 255, 0.45);
    font-size: 10.5px;
    line-height: 1.25;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .close {
    display: inline-flex;
    border: none;
    background: transparent;
    color: rgba(255, 255, 255, 0.4);
    cursor: pointer;
    padding: 4px;
  }
  .close:hover { color: #fff; }

  .bar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 8px;
    padding: 8px 12px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.08);
    color: rgba(255, 255, 255, 0.55);
    font-size: 12px;
  }
  .bar-left { display: inline-flex; align-items: center; gap: 8px; min-width: 0; }
  .bar-actions { display: inline-flex; align-items: center; gap: 10px; flex: none; }
  .icon-btn {
    display: inline-flex;
    border: none;
    background: transparent;
    color: rgba(255, 255, 255, 0.55);
    cursor: pointer;
    padding: 2px;
  }
  .icon-btn:hover { color: #fff; }
  .icon-btn.spinning svg { animation: spin 0.9s linear infinite; }
  @keyframes spin { to { transform: rotate(360deg); } }

  .link {
    border: none;
    background: transparent;
    color: #1db954;
    cursor: pointer;
    font-size: 12px;
    padding: 0;
    white-space: nowrap;
  }
  .link:hover { color: #3ddc78; }
  .link:disabled { color: rgba(255, 255, 255, 0.3); cursor: default; }

  .warn {
    padding: 8px 12px;
    background: rgba(250, 173, 20, 0.12);
    color: #faad14;
    font-size: 12px;
    line-height: 1.4;
  }

  .wizard { padding: 12px; overflow-y: auto; }
  .wizard-intro { color: rgba(255, 255, 255, 0.55); font-size: 12px; line-height: 1.5; margin-bottom: 12px; }
  .step { margin-bottom: 16px; }
  .step-title { color: #fff; font-weight: 600; margin-bottom: 6px; }
  .step p { color: rgba(255, 255, 255, 0.65); font-size: 12px; line-height: 1.5; }
  .step a { color: #1db954; }
  .hint { color: rgba(255, 255, 255, 0.4) !important; }
  .uri-row {
    display: flex;
    align-items: center;
    gap: 8px;
    margin: 6px 0;
    padding: 6px 8px;
    background: #1b212a;
    border: 1px solid rgba(255, 255, 255, 0.12);
    border-radius: 4px;
  }
  .uri-row code {
    flex: 1;
    font-size: 11px;
    color: rgba(255, 255, 255, 0.75);
    word-break: break-all;
  }

  input[type="text"] {
    width: 100%;
    appearance: none;
    background: #1b212a;
    border: 1px solid rgba(255, 255, 255, 0.12);
    border-radius: 4px;
    color: #fff;
    font-size: 12px;
    padding: 6px 8px;
  }
  input[type="text"]::placeholder { color: rgba(255, 255, 255, 0.35); }
  input:focus-visible, button:focus-visible { outline: none; box-shadow: 0 0 0 2px rgba(29, 185, 84, 0.35); }

  .cta {
    background: #1db954;
    border: none;
    border-radius: 4px;
    color: #fff;
    cursor: pointer;
    font-size: 13px;
    padding: 7px 18px;
  }
  .cta:hover { background: #3ddc78; }
  .cta:disabled { background: rgba(255, 255, 255, 0.15); cursor: default; }

  .crumb-name {
    color: #fff;
    font-weight: 500;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .controls-bar { display: flex; gap: 8px; padding: 8px 12px; border-bottom: 1px solid rgba(255, 255, 255, 0.08); }
  .play-all {
    display: inline-flex;
    align-items: center;
    gap: 4px;
    flex: none;
    border: none;
    border-radius: 4px;
    background: #1db954;
    color: #fff;
    font-size: 12px;
    font-weight: 600;
    padding: 0 10px;
    cursor: pointer;
  }
  .play-all:hover:not(:disabled) { background: #3ddc78; }
  .play-all:disabled { background: rgba(255, 255, 255, 0.12); color: rgba(255, 255, 255, 0.35); cursor: default; }

  .list { flex: 1; overflow-y: auto; padding: 4px 0; }
  .list::-webkit-scrollbar { width: 6px; }
  .list::-webkit-scrollbar-thumb { background: rgba(255, 255, 255, 0.15); border-radius: 3px; }

  .row {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 8px 12px;
    cursor: pointer;
  }
  .row:hover { background: rgba(255, 255, 255, 0.03); }
  .row + .row { border-top: 1px solid rgba(255, 255, 255, 0.05); }
  .row.current { background: rgba(29, 185, 84, 0.1); border-left: 2px solid #1db954; }
  .row-body { flex: 1; min-width: 0; }
  .row-head { display: flex; align-items: center; gap: 6px; min-width: 0; }
  .row-title {
    color: #fff;
    font-weight: 500;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .row-sub {
    color: rgba(255, 255, 255, 0.45);
    font-size: 11px;
    margin-top: 2px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .cover { width: 36px; height: 36px; border-radius: 4px; object-fit: cover; flex: none; }
  .cover.placeholder { background: rgba(255, 255, 255, 0.08); }
  .cover.liked {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    background: linear-gradient(135deg, #4527a0, #1db954);
    color: #fff;
    font-size: 16px;
  }
  .art {
    width: 28px;
    height: 28px;
    border-radius: 3px;
    object-fit: cover;
    flex: none;
  }
  .art.num {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    background: rgba(255, 255, 255, 0.06);
    color: rgba(255, 255, 255, 0.35);
    font-size: 11px;
  }
  .dur { flex: none; color: rgba(255, 255, 255, 0.35); font-size: 11px; }

  .waves { display: inline-flex; align-items: flex-end; gap: 2px; height: 12px; flex: none; }
  .waves i { width: 2.5px; height: 5px; border-radius: 1px; background: #1db954; animation: wave 1s ease-in-out infinite; }
  .waves i:nth-child(2) { animation-delay: 0.25s; }
  .waves i:nth-child(3) { animation-delay: 0.5s; }
  .waves.paused i { animation-play-state: paused; }
  @keyframes wave { 0%, 100% { height: 4px; } 50% { height: 12px; } }
  @media (prefers-reduced-motion: reduce) { .waves i { animation: none; height: 8px; } }

  /* Suggestions sit on their own tinted layer so the section reads as
     separate from the playlist above and the player below. */
  .suggest {
    flex: none;
    border-top: 1px solid rgba(29, 185, 84, 0.28);
    background: linear-gradient(180deg, rgba(29, 185, 84, 0.07), rgba(29, 185, 84, 0.02) 55%), #1e252c;
  }
  .suggest-head {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: none;
    background: transparent;
    color: rgba(255, 255, 255, 0.7);
    cursor: pointer;
    font-size: 11px;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.06em;
    padding: 9px 12px;
  }
  .suggest-head:hover { color: #fff; }
  .suggest-caret {
    color: #1db954;
    font-size: 12px;
    transform: rotate(-90deg);
    transition: transform 0.28s cubic-bezier(0.22, 0.61, 0.36, 1);
  }
  .suggest-caret.open { transform: rotate(0deg); }
  .suggest-body {
    display: grid;
    grid-template-rows: 0fr;
    transition: grid-template-rows 0.28s cubic-bezier(0.22, 0.61, 0.36, 1);
  }
  .suggest-body.open { grid-template-rows: 1fr; }
  .suggest-inner { overflow: hidden; min-height: 0; }
  @media (prefers-reduced-motion: reduce) {
    .suggest-body, .suggest-caret { transition: none; }
  }
  .suggest-list { max-height: 50vh; overflow-y: auto; }
  .suggest-list::-webkit-scrollbar { width: 6px; }
  .suggest-list::-webkit-scrollbar-thumb { background: rgba(255, 255, 255, 0.15); border-radius: 3px; }
  .suggest-list .row { padding: 6px 12px; }
  .suggest-note { padding: 0 12px 10px; color: rgba(255, 255, 255, 0.4); font-size: 12px; }
  .suggest-more {
    display: block;
    width: 100%;
    border: none;
    background: transparent;
    color: #1db954;
    cursor: pointer;
    font-size: 12px;
    padding: 8px 12px;
    text-align: center;
  }
  .suggest-more:hover { color: #3ddc78; }
  .suggest-more:disabled { color: rgba(255, 255, 255, 0.3); cursor: default; }

  .add-wrap { position: relative; flex: none; }
  .add-btn {
    border: none;
    background: transparent;
    color: rgba(255, 255, 255, 0.35);
    cursor: pointer;
    font-size: 15px;
    padding: 2px 5px;
  }
  .row .add-btn { opacity: 0; transition: opacity 0.15s ease; }
  .row:hover .add-btn, .now-track .add-btn { opacity: 1; }
  .add-btn:hover { color: #1db954; }
  .add-menu {
    position: fixed;
    z-index: 40;
    width: 190px;
    max-height: 244px;
    overflow-y: auto;
    background: #171c23;
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 6px;
    box-shadow: 0 10px 28px rgba(0, 0, 0, 0.55);
    padding: 4px;
  }
  .add-menu::-webkit-scrollbar { width: 5px; }
  .add-menu::-webkit-scrollbar-thumb { background: rgba(255, 255, 255, 0.15); border-radius: 3px; }
  .add-menu-head {
    color: rgba(255, 255, 255, 0.4);
    font-size: 10px;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.06em;
    padding: 5px 8px 4px;
  }
  .add-menu button {
    display: flex;
    align-items: center;
    gap: 8px;
    width: 100%;
    text-align: left;
    border: none;
    border-radius: 4px;
    background: transparent;
    color: rgba(255, 255, 255, 0.85);
    cursor: pointer;
    font-size: 12px;
    padding: 5px 6px;
  }
  .add-menu button:hover { background: rgba(255, 255, 255, 0.07); color: #fff; }
  .add-menu button.added { color: #1db954; }
  .add-cover { width: 22px; height: 22px; border-radius: 3px; object-fit: cover; flex: none; }
  .add-cover.placeholder { background: rgba(255, 255, 255, 0.08); display: inline-block; }
  .add-cover.liked {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    background: linear-gradient(135deg, #4527a0, #1db954);
    color: #fff;
    font-size: 11px;
  }
  .add-name { flex: 1; min-width: 0; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
  .add-err { padding: 4px 8px; color: #f5222d; font-size: 11px; }

  .now {
    border-top: 1px solid rgba(255, 255, 255, 0.08);
    padding: 10px 12px;
    background: #1b212a;
  }
  /* Fixed line heights everywhere so changing song titles never shifts the
     layout — the matched line renders even when empty. */
  .now-track { display: flex; align-items: center; gap: 8px; height: 52px; }
  .now-track .art { width: 36px; height: 36px; }
  .now-track .row-title { line-height: 18px; height: 18px; }
  .now-track .row-sub { line-height: 15px; height: 15px; margin-top: 0; }
  .now-matched {
    color: rgba(255, 255, 255, 0.5);
    font-size: 11px;
    line-height: 15px;
    height: 15px;
    margin-top: 2px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .now-status {
    color: rgba(255, 255, 255, 0.45);
    font-size: 11px;
    line-height: 14px;
    height: 14px;
    margin-top: 6px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .controls { display: flex; justify-content: center; align-items: center; gap: 10px; margin-top: 10px; }
  .controls button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 34px;
    height: 34px;
    border: none;
    border-radius: 50%;
    background: transparent;
    color: rgba(255, 255, 255, 0.75);
    cursor: pointer;
    padding: 0;
    transition: background 0.15s ease, color 0.15s ease, transform 0.1s ease;
  }
  .controls button:hover { color: #fff; background: rgba(255, 255, 255, 0.07); }
  .controls button:active { transform: scale(0.94); }
  .controls button:disabled { color: rgba(255, 255, 255, 0.25); background: transparent; cursor: default; }
  .controls .play {
    width: 42px;
    height: 42px;
    background: #1db954;
    color: #fff;
  }
  .controls .play:hover:not(:disabled) { background: #3ddc78; color: #fff; }
  .controls .play:disabled { background: rgba(255, 255, 255, 0.12); }
  .controls .stop { width: 30px; height: 30px; color: rgba(255, 255, 255, 0.45); }
  .controls .mode { width: 30px; height: 30px; color: rgba(255, 255, 255, 0.45); }
  .controls .mode.on { color: #1db954; }
  .controls .mode.on:hover { color: #3ddc78; }

  .empty {
    padding: 18px 14px;
    color: rgba(255, 255, 255, 0.45);
    line-height: 1.5;
  }

  .lock {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    text-align: center;
    padding: 40px 24px;
  }
  .lock-title { color: #fff; font-size: 14px; font-weight: 600; }
  .lock p { color: rgba(255, 255, 255, 0.55); font-size: 12px; line-height: 1.5; }
  .lock-cta {
    margin-top: 6px;
    background: #1db954;
    color: #fff;
    border-radius: 4px;
    font-size: 13px;
    padding: 7px 22px;
    text-decoration: none;
  }
  .lock-cta:hover { background: #3ddc78; }

`,Ge="f4t-spotify-btn",Sn="f4t-spotify-sidebar",Xa=/^\/room\/([^/]+)\/?$/,Ja='<svg viewBox="0 0 24 24" width="1em" height="1em" fill="currentColor" aria-hidden="true"><path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm4.586 14.424a.622.622 0 0 1-.857.207c-2.348-1.435-5.304-1.76-8.785-.964a.623.623 0 1 1-.277-1.215c3.809-.87 7.077-.496 9.713 1.115.293.18.386.563.206.857zm1.223-2.723a.78.78 0 0 1-1.072.257c-2.687-1.652-6.785-2.131-9.965-1.166A.78.78 0 1 1 6.32 11.3c3.632-1.102 8.147-.568 11.234 1.328a.78.78 0 0 1 .255 1.073zm.105-2.835C14.692 8.95 9.375 8.775 6.297 9.71a.935.935 0 1 1-.543-1.79c3.532-1.072 9.404-.865 13.115 1.338a.936.936 0 1 1-.955 1.608z"/></svg>';let jr=!0;async function Za(){try{if(!await $())return;jr=X(await J())}catch(n){x.error("spotify: failed to read extension state",n);return}xn();let e=!1;const t=()=>{e||(e=!0,requestAnimationFrame(()=>{e=!1;try{el(),sl()}catch(n){x.error("spotify: sync failed",n)}}))};new MutationObserver(t).observe(document.body,{childList:!0,subtree:!0}),window.addEventListener("resize",t),t()}function kn(){return Xa.test(window.location.pathname)}function el(){const e=document.getElementById(Ge),t=kn()?or():null;if(!t){e?.closest(".f4t-chat-col")?.remove(),e?.remove(),at();return}if(e)return;const n=ar({id:Ge,title:"Spotify Player",iconSvg:Ja,onClick:tl});t.insertAdjacentElement("afterend",n)}let se=null;function tl(e){e.stopPropagation(),se?at():nl()}function nl(){if(!kn()||se)return;const e=document.createElement("div");e.id=Sn,e.style.cssText="position: fixed; top: 0; bottom: 0; z-index: 1030;",st(e,Ge),document.body.append(e);const t=e.attachShadow({mode:"open"}),n=document.createElement("div");n.style.height="100%",t.append(n),se=ge.createRoot(n),se.render(f.createElement(Ua,{locked:!jr,onClose:at}))}function at(){se&&(se.unmount(),se=null,document.getElementById(Sn)?.remove())}function sl(){const e=document.getElementById(Sn);if(e){if(!kn()){at();return}st(e,Ge)}}const rl="YouTube tab",il=1e3,ol=15e3,ze=["resolving","playing","paused","paused-external"],W={connected:!1,locked:!1},qt=new Set;let O=null,Ae=null,de=0,B,Ht="";function jn(e){Object.assign(W,e),qt.forEach(t=>t({...W}))}function al(e){return qt.add(e),e({...W}),()=>qt.delete(e)}function lt(e){try{chrome.runtime.sendMessage(e).catch(t=>x.warn("remote: message failed",t))}catch(t){x.warn("remote: extension unavailable",t)}}async function ll(){let e=!1;try{e=X(await J())}catch(t){x.warn("remote: role check failed",t)}return jn({locked:!e}),e&&lt({type:z.open}),e}function cl(e){return{id:`yt:${e.videoId}`,name:e.title,artist:e.channel,durationMs:0,image:e.thumbnail,yt:e}}function dl(e){window.clearTimeout(B),B=void 0,O?.playlistId&&O.playlistId!==H&&ze.includes(O.status)&&(Ae={id:O.playlistId,name:O.playlistName??"",tracks:O.tracks,index:O.index}),Te(H,rl,[cl(e)],0,ul)}function ul({skipped:e}){if(de=e?de+1:0,Pi({connected:W.connected,skipStreak:de,hasSaved:!!Ae})==="next"){lt({type:z.ended}),B=window.setTimeout(Ye,ol),En();return}Ye(de>=In?`Stopped — ${In} videos in a row couldn't play in the room.`:void 0)}function Ye(e){if(window.clearTimeout(B),B=void 0,de=0,O?.playlistId!==H)return;const t=Ae;Ae=null,t?Te(t.id,t.name,t.tracks,t.index):za(e)}function fl(e){if(e?.playlistId!==H)return{state:"idle"};const t=e.tracks[0]?.name,n=e.tracks[0]?.yt?.videoId;if(B!==void 0)return{state:"waiting",title:t,videoId:n,note:e.message??"Opening YouTube's next video…"};switch(e.status){case"resolving":return{state:"starting",title:t,videoId:n};case"playing":return{state:"playing",title:t,videoId:n};case"paused":return{state:"paused",title:t,videoId:n};case"paused-external":return{state:"note",title:t,videoId:n,note:"Someone else is playing in the room."};default:return e.message?{state:"note",title:t,videoId:n,note:e.message}:{state:"idle"}}}function En(){if(!W.connected)return;const e=fl(O),t=JSON.stringify(e);t!==Ht&&(Ht=t,lt({type:z.status,status:e}))}function rs(e){if(e!==W.connected){if(Ht="",jn(e?{connected:!0,locked:!1}:{connected:!1}),e)return En();B!==void 0&&Ye()}}let is=!1;async function hl(){if(is)return;is=!0;try{if(!await $())return}catch(t){x.error("remote: failed to read extension state",t);return}xn(),gn(t=>{O=t,t.playlistId!==H&&(Ae=null,de=0,window.clearTimeout(B),B=void 0);const n=t.playlistId===H&&ze.includes(t.status)?t.tracks[0]?.name:void 0;n!==W.title&&jn({title:n}),En()}),chrome.runtime.onMessage.addListener((t,n,s)=>{if(t?.type===z.play)Ri(t.item)&&dl(t.item);else if(t?.type===z.control)O?.playlistId===H&&(t.action==="pause"?br():vr()).catch(()=>{});else if(t?.type===z.seek){const r=O?.playlistId===H&&ze.includes(O.status)?O.tracks[0]?.yt?.videoId:void 0;r&&r===t.videoId&&typeof t.seconds=="number"&&wr(t.seconds).catch(()=>{})}else if(t?.type===z.noNext)B!==void 0&&Ye();else if(t?.type===z.state)rs(t.connected===!0);else if(t?.type!==z.ping)return!1;return s({ok:!0}),!1}),document.addEventListener("click",t=>{t.target?.closest?.(".youtube > .actions .ant-btn-danger")&&O?.playlistId===H&&ze.includes(O.status)&&Ie()},!0);let e=he();window.setInterval(()=>{const t=he();t!==e&&(e=t,W.connected&&lt({type:z.disconnect}))},il);try{const t=await chrome.runtime.sendMessage({type:z.roomHello});rs(t?.connected===!0)}catch(t){x.warn("remote: hello failed",t)}}const pl="https://sponsor.ajay.app/api/skipSegments",ml=1,gl=.5;async function yl(e){const t=await crypto.subtle.digest("SHA-256",new TextEncoder().encode(e));return[...new Uint8Array(t).slice(0,2)].map(n=>n.toString(16).padStart(2,"0")).join("")}function xl(e){return`${pl}/${e}?categories=${encodeURIComponent('["music_offtopic"]')}`}function bl(e,t){if(!Array.isArray(e))return[];const n=e.find(s=>s?.videoID===t);return(Array.isArray(n?.segments)?n.segments:[]).filter(s=>s?.category==="music_offtopic"&&s.actionType==="skip"&&Array.isArray(s.segment)).map(s=>({start:Number(s.segment[0]),end:Number(s.segment[1])})).filter(s=>Number.isFinite(s.start)&&Number.isFinite(s.end)&&s.end-s.start>=ml).sort((s,r)=>s.start-r.start)}function vl(e,t,n){const s=e.findIndex((r,o)=>!n.has(o)&&t>=r.start&&t<r.end-gl);return s>=0?s:void 0}const We={enabled:!1},Kt=new Set,os=new Map;let ht,as=0,pt=new Set;function Er(e){Object.assign(We,e),Kt.forEach(t=>t({...We}))}function wl(e){return Kt.add(e),e({...We}),()=>Kt.delete(e)}function Sl(e){Er({enabled:e});try{chrome.storage.sync.set({[kt]:e})}catch(t){x.warn("skip: couldn't save the setting",t)}}function kl(e){let t=os.get(e);return t||(t=(async()=>{try{const n=await fetch(xl(await yl(e)));return n.ok?bl(await n.json(),e):[]}catch(n){return x.warn("skip: SponsorBlock lookup failed",n),[]}})(),os.set(e,t)),t}async function jl(e,t){(e!==ht||t<2&&as>10)&&(ht=e,pt=new Set),as=t;const n=await kl(e);if(e!==ht)return;const s=vl(n,t,pt);if(s!==void 0){pt.add(s);try{await wr(n[s].end)}catch(r){x.warn("skip: seek failed",r)}}}let ls=!1;async function El(){if(!ls){ls=!0;try{if(!await $())return;const e=await chrome.storage.sync.get(kt);Er({enabled:e[kt]===!0})}catch(e){x.error("skip: setup failed",e);return}xn(),window.addEventListener("message",e=>{const t=e.data;e.source!==window||t?.ns!==nn||t.dir!=="event"||t.event!=="time"||We.enabled&&typeof t.time=="number"&&typeof t.videoId=="string"&&jl(t.videoId,t.time)})}}function Cl(){const[e,t]=f.useState(null),[n,s]=f.useState(null),[r,o]=f.useState(!1);f.useEffect(()=>al(t),[]),f.useEffect(()=>wl(s),[]),f.useEffect(()=>gn(m=>o(m.repeat==="one")),[]);const a=!!e?.connected;let l="Play from YouTube",d="Pick and queue songs on YouTube; they play here";e?.title?l=d=`Playing: ${e.title}`:a&&(l="Your YouTube tab",d="Connected — open a video there to play it here");const c=!!n?.enabled,u=`Skip non-music parts: ${c?"on":"off"} — intros, outros & talk in videos you start (data: SponsorBlock)`,v=`Repeat this song: ${r?"on":"off"} — plays it again when it ends`;return i.jsxs("div",{className:"bar",children:[i.jsx("style",{children:Al}),i.jsxs("div",{className:"row",children:[i.jsxs("button",{type:"button",className:`remote ${a?"on":""}`,onClick:()=>{ll()},title:`${a?"Switch to your YouTube tab":"Open a YouTube tab connected to this room"}
${d}`,children:[i.jsx("svg",{viewBox:"0 0 24 24",width:"18",height:"18",fill:"currentColor","aria-hidden":"true",children:i.jsx("path",{d:"M21.6 7.2a2.5 2.5 0 0 0-1.77-1.77C18.27 5 12 5 12 5s-6.27 0-7.83.43A2.5 2.5 0 0 0 2.4 7.2 26 26 0 0 0 2 12c0 1.67.13 3.27.4 4.8a2.5 2.5 0 0 0 1.77 1.77C5.73 19 12 19 12 19s6.27 0 7.83-.43a2.5 2.5 0 0 0 1.77-1.77c.27-1.53.4-3.13.4-4.8s-.13-3.27-.4-4.8zM10 15V9l5.2 3L10 15z"})}),i.jsx("span",{className:"remote-label",children:l})]}),i.jsx("button",{type:"button",className:`toggle ${c?"on":""}`,"aria-pressed":c,"aria-label":"Skip non-music parts",title:u,onClick:()=>Sl(!c),children:i.jsx("svg",{viewBox:"0 0 24 24",width:"16",height:"16",fill:"currentColor","aria-hidden":"true",children:i.jsx("path",{d:"M4 18l8.5-6L4 6v12zm9-12v12l8.5-6L13 6z"})})}),i.jsx("button",{type:"button",className:`toggle ${r?"on":""}`,"aria-pressed":r,"aria-label":"Repeat this song",title:v,onClick:()=>gr(r?"off":"one"),children:i.jsx("svg",{viewBox:"0 0 24 24",width:"16",height:"16",fill:"currentColor","aria-hidden":"true",children:i.jsx("path",{d:"M7 7h10v3l4-4-4-4v3H5v6h2V7zm10 10H7v-3l-4 4 4 4v-3h12v-6h-2v4zm-4-2V9h-1l-2 1v1h1.5v4H13z"})})})]}),e?.locked&&i.jsxs("div",{className:"note",children:["Playing from your YouTube tab is a Pro feature. Pay once on Buy Me a Coffee with your free4talk.me email."," ",i.jsxs("a",{href:tt,target:"_blank",rel:"noopener noreferrer",children:["Get Pro — ",et," once"]})]})]})}const be="#1890ff",Nl="rgba(255, 255, 255, 0.12)",Tl="rgba(255, 255, 255, 0.14)",Al=`
  * { box-sizing: border-box; margin: 0; padding: 0; }
  /* 10px sides: the site insets its search box, controls and results by 10px. */
  .bar {
    display: flex; flex-direction: column; gap: 6px; padding: 6px 10px 8px; border-bottom: 1px solid ${Nl};
    color: #d3d3d3; font-family: -apple-system, system-ui, "Segoe UI", "Helvetica Neue", Helvetica, Arial, sans-serif; font-size: 12px;
  }
  button { font: inherit; color: inherit; background: none; border: none; cursor: pointer; }
  button:focus-visible { outline: 2px solid ${be}; outline-offset: 1px; }
  .row { display: flex; align-items: center; gap: 6px; }
  .remote, .toggle {
    height: 30px; border-radius: 6px; border: 1px solid ${Tl}; transition: border-color 0.2s, background 0.2s, color 0.2s;
  }
  .remote:hover, .toggle:hover { border-color: ${be}; }
  .remote.on, .toggle.on { border-color: ${be}; background: rgba(24, 144, 255, 0.12); }
  .remote { flex: 1; min-width: 0; display: flex; align-items: center; gap: 8px; padding: 0 10px; text-align: left; }
  .remote svg { flex: none; color: #ff4e45; }
  .remote-label { min-width: 0; color: #fff; font-weight: 600; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
  .toggle { flex: none; width: 30px; display: grid; place-items: center; color: #aaa; }
  .toggle.on { color: ${be}; }
  .note { color: #aaa; }
  .note a { color: ${be}; }
`,cs="f4t-yt-bar";let De=null;function Ol(){const e=document.querySelector(".youtube > .actions")?.parentElement??null,t=document.getElementById(cs);if(t&&e||(De?.unmount(),De=null,t?.remove(),!e))return;const n=e.querySelector(".ant-divider")??e.querySelector(".actions");if(!n)return;const s=document.createElement("div");s.id=cs,n.insertAdjacentElement("afterend",s);const r=document.createElement("div");s.attachShadow({mode:"open"}).append(r),De=ge.createRoot(r),De.render(f.createElement(Cl))}let ds=!1;async function Ml(){if(ds)return;ds=!0;try{if(!await $())return}catch(n){x.error("yt bar: failed to read extension state",n);return}let e=!1;const t=()=>{e||(e=!0,requestAnimationFrame(()=>{e=!1;try{Ol()}catch(n){x.error("yt bar: sync failed",n)}}))};new MutationObserver(t).observe(document.body,{childList:!0,subtree:!0}),t()}const Cr=e=>({since:e,seen:new Set,members:new Map});function Il(e,t,n,s){const r=[];for(const o of e)if(!(o.rid!==t||o.time<n.since||n.seen.has(o.id))){n.seen.add(o.id);for(const a of o.systems??[]){const l=a.client?.id,d=a.client?.name;if(!l||!d||l===o.myselfId)continue;const c=n.members.get(l);if(a.kind==="typography:leave")n.members.set(l,{greetedAt:c?.greetedAt??0,leftAt:o.time});else{if(a.kind!=="typography:join")continue;c?s>0&&o.time-(c.leftAt??c.greetedAt)>=s&&(n.members.set(l,{greetedAt:o.time}),r.push({id:l,name:d,back:!0})):(n.members.set(l,{greetedAt:o.time}),r.push({id:l,name:d,back:!1}))}}}return r}const Nr=(e,t)=>e==="all"||e.split(",").some(t);function Rl(e,t){return Nr(e,n=>n===t)}function Pl(e,t){return Nr(e,n=>n==="friend"&&t?.friend||n==="following"&&t?.following||!1)}function _l(e,t){const n=t.map(s=>`\`@${s.replace(/`/g,"")}\``).join(" ");return e.includes("{name}")?e.replaceAll("{name}",n):`${n} ${e}`}const Ll=1e3,Dl=2e3,Fl=2e3,zl=3e4,$l=".input-send-box textarea",Ul=".input-send-box button",Bl=2e3,Tr={enabled:!1,message:ai,delaySeconds:oi,againMinutes:ii,againMessage:ri,rooms:si,who:ni},U={...Tr},Qt={enabled:ti,message:ei,delaySeconds:Zr,againMinutes:Jr,againMessage:Xr,rooms:Wr,who:Yr};let Fe,us=Cr(0),mt=null,re=[],Xe,Cn={role:"none",members:[]};async function ql(){try{if(!await $()||!X(await J()))return;fs(await chrome.storage.sync.get(Object.values(Qt)))}catch(n){x.error("welcome: failed to read settings",n);return}chrome.storage.onChanged.addListener((n,s)=>{s==="sync"&&fs(Object.fromEntries(Object.entries(n).map(([r,o])=>[r,o.newValue])))});let e=!1;window.addEventListener("message",n=>{const s=n.data;n.source!==window||s?.ns!==Se||s.dir!=="event"||s.event!=="room"||!s.state||(e=!0,Cn=s.state)});const t=()=>{e||(window.postMessage({ns:Se,dir:"cmd",cmd:"hello"},window.location.origin),window.setTimeout(t,Bl))};t(),window.setInterval(Hl,Ll)}function fs(e){for(const t of Object.keys(Qt)){const n=Qt[t];if(!(n in e))continue;const s=e[n],r=Tr[t];U[t]=typeof s==typeof r?s:r}}function Hl(){try{const e=he();if(e!==Fe&&(Fe=e,us=Cr(Date.now()),re=[],mt=null),!Fe)return;const t=localStorage.getItem(fe);if(t===mt)return;mt=t;const n=Y(t);if(!n)return;const s=U.againMessage.trim()?U.againMinutes*6e4:0,r=Il(n.data,Fe,us,s);if(!U.enabled||!U.message.trim()||!Rl(U.rooms,Cn.role))return;for(const o of r)Kl(o)}catch(e){x.error("welcome: tick failed",e)}}function Kl(e){re.push({...e,due:Date.now()+U.delaySeconds*1e3}),Vt()}function Vt(){Xe===void 0&&re.length&&(Xe=window.setTimeout(Ar,re[0].due-Date.now()))}function Ar(){Xe=void 0;const e=Date.now()+Dl,t=re.filter(r=>r.due<=e);if(!t.length)return Vt();const n=document.querySelector($l),s=document.querySelector(Ul);if(!n||!s)x.warn("welcome: chat box not open, greeting skipped",t);else if(n.value.trim()){if(Date.now()-t[0].due<zl){Xe=window.setTimeout(Ar,Fl);return}}else{const r=t.filter(o=>Pl(U.who,Cn.members.find(a=>a.id===o.id)));for(const o of[!1,!0]){const a=r.filter(l=>l.back===o).map(l=>l.name);a.length&&Ql(n,s,_l(o?U.againMessage:U.message,a))}}re=re.filter(r=>r.due>e),Vt()}function Ql(e,t,n){Object.getOwnPropertyDescriptor(HTMLTextAreaElement.prototype,"value")?.set?.call(e,n),e.dispatchEvent(new Event("input",{bubbles:!0})),t.click()}const Vl=50,hs="🗑 (deleted) ";function Or(e){const t=e;return!!(t&&typeof t._id=="string"&&typeof t.chatId=="string"&&t.chatId.startsWith("pm:")&&Number.isFinite(t.time))}const ps=e=>!!(e.content&&Object.keys(e.content).length);function Gl(e,t){const n=new Map(e.map(s=>[s._id,s]));for(const s of t){if(s.f4tArchived)continue;const r=n.get(s._id);s.state==="deleted"&&!ps(s)&&r&&ps(r)?n.set(s._id,{...r,state:"deleted",deleted:!0}):n.set(s._id,s)}return[...n.values()].sort((s,r)=>s.time-r.time)}function Yl(e,t,n=Vl){return e.filter(s=>s.time<t).slice(-n)}function Mr(e,t){const n=e.viewers?.includes(t)?e.viewers:[...e.viewers??[],t],s={...e,viewers:n,f4tArchived:!0};if(!e.deleted)return s;const{deleted:r,state:o,...a}=s,l=e.content?.text;return{...a,content:{...e.content,text:typeof l=="string"?hs+l:hs.trim()}}}const Wl=1e3,Xl=2e3,Jl=30,Ir=1200,Rr=40,Zl=".react-container",ms=".loading-more";let Oe;const V=new Map,gt=new Map,$e=new Set;let Gt;const Pr=new Map,Yt=new Map,gs=new WeakSet,Wt=new Set;async function _r(e){const t=V.get(e);if(t)return t;let n=gt.get(e);n||(n=(async()=>{try{const r=await ie((await fn(un,"readonly")).get(e));return Array.isArray(r?.messages)?r.messages.filter(Or):[]}catch(r){return x.warn("dm history: read failed",r),[]}})(),gt.set(e,n));const s=await n;return gt.delete(e),V.has(e)||V.set(e,s),V.get(e)}async function ys(e,t){await _r(e),V.set(e,Gl(V.get(e)??[],t)),$e.add(e),Gt??=window.setTimeout(()=>{Lr()},Wl)}async function Lr(){window.clearTimeout(Gt),Gt=void 0;const e=[...$e];if($e.clear(),!!e.length)try{const t=await fn(un,"readwrite");await Promise.all(e.map(n=>ie(t.put({messages:V.get(n)??[],savedAt:Date.now()},n))))}catch(t){x.error("dm history: save failed",t),e.forEach(n=>$e.add(n))}}function Nn(e,t,n){window.postMessage({ns:Fs,dir:"cmd",cmd:e,chatId:t,messages:n},window.location.origin)}function ec(e,t){if(!Oe)return;const n=V.get(e)??[],s=t.filter(r=>r.state==="deleted"&&!Object.keys(r.content??{}).length).map(r=>n.find(o=>o._id===r._id&&o.deleted)).filter(r=>!!r).map(r=>Mr(r,Oe));s.length&&Nn("patch",e,s)}function tc(e){if(!e)return null;try{return(document.querySelector(`[data-message-id="${CSS.escape(String(e))}"]`)??document.getElementById(e))?.closest(Zl)??null}catch{return document.getElementById(e)?.closest(Zl)??null}}const nc=e=>!!(e.querySelector(ms)??e.parentElement?.querySelector(ms));function Dr(e){window.clearTimeout(Yt.get(e)),Yt.set(e,window.setTimeout(()=>{ic(e)},Ir))}function sc(e,t){if(e.dataset.f4tChat=t,gs.has(e))return;gs.add(e);const n=()=>{const s=e.dataset.f4tChat;!s||e.scrollTop>Rr||(Wt.delete(s),Dr(s))};e.addEventListener("scroll",n,{passive:!0}),e.addEventListener("wheel",s=>s.deltaY<0&&n(),{passive:!0})}function rc(e){const t=e.querySelector("[data-message-id]")?.getAttribute("data-message-id");if(!t)return;const n=()=>e.querySelector(`[data-message-id="${CSS.escape(t)}"]`),s=n()?.getBoundingClientRect().top??0,r=new MutationObserver(()=>{const o=n()?.getBoundingClientRect().top;o===void 0||o===s||(r.disconnect(),e.scrollTop+=o-s)});r.observe(e,{childList:!0,subtree:!0}),window.setTimeout(()=>r.disconnect(),3e3)}async function ic(e){Yt.delete(e);const t=Pr.get(e);if(!t||!Oe)return;const n=tc(t.newestId);if(n&&sc(n,e),Wt.has(e)||Date.now()-t.changedAt<Ir-100||t.total&&(!n||n.scrollTop>Rr||nc(n)))return;const s=Yl(await _r(e),t.oldest);s.length&&(n&&rc(n),Wt.add(e),Nn("inject",e,s.map(r=>Mr(r,Oe))))}function oc(e){if(typeof e.myId=="string"&&e.myId&&(Oe=e.myId),!Array.isArray(e.messages))return;const t=e.messages.filter(Or);if(e.event==="chat"&&typeof e.chatId=="string"){const n=e.chatId;Pr.set(n,{total:typeof e.total=="number"?e.total:t.length,oldest:typeof e.oldest=="number"?e.oldest:1/0,newestId:typeof e.newestId=="string"?e.newestId:void 0,changedAt:Date.now()}),ys(n,t).then(()=>ec(n,t)),Dr(n)}else if(e.event==="last")for(const n of t)ys(n.chatId,[n])}let xs=!1,bs=!1;async function ac(){if(bs)return;bs=!0;try{if(await $()===!1)return}catch(n){}window.addEventListener("message",n=>{const s=n.data;if(!(n.source!==window||s?.ns!==Fs||s.dir!=="event")){xs=!0;try{oc(s)}catch(r){x.warn("dm history: event failed",r)}}});window.addEventListener("pagehide",()=>{Lr().catch(()=>{})});let e=0;const t=()=>{xs||++e>Jl||(Nn("hello"),window.setTimeout(t,Xl))};t()}const lc=2e3,P={enabled:!1,asCoOwner:!1,remember:!1,unverified:!1,nonSocial:!1,list:[]},I={enabled:fi,asCoOwner:ui,remember:di,unverified:ci,nonSocial:li,list:le};let Je;const Fr=new Set;async function cc(){try{if(!await $()||!X(await J()))return;vs(await chrome.storage.sync.get(Object.values(I)))}catch(n){x.error("auto kick: failed to read settings",n);return}chrome.storage.onChanged.addListener((n,s)=>{s==="sync"&&(vs(Object.fromEntries(Object.entries(n).map(([r,o])=>[r,o.newValue]))),ws())});let e=!1;window.addEventListener("message",n=>{const s=n.data;if(!(n.source!==window||s?.ns!==Se||s.dir!=="event")){if(s.event==="kicked"){if(typeof s.id!="string"||!Qr.test(s.id))return;for(const r of Je?.members??[])r.id===s.id&&Fr.add(r.pid);dc(s.id,typeof s.name=="string"?s.name:void 0);return}s.event!=="room"||!Array.isArray(s.state?.members)||(e=!0,Je=s.state,ws())}});const t=()=>{e||(window.postMessage({ns:Se,dir:"cmd",cmd:"hello"},window.location.origin),window.setTimeout(t,lc))};t()}function vs(e){I.enabled in e&&(P.enabled=e[I.enabled]===!0),I.asCoOwner in e&&(P.asCoOwner=e[I.asCoOwner]===!0),I.remember in e&&(P.remember=e[I.remember]===!0),I.unverified in e&&(P.unverified=e[I.unverified]===!0),I.nonSocial in e&&(P.nonSocial=e[I.nonSocial]===!0),I.list in e&&(P.list=St(e[I.list]))}function ws(){if(!P.enabled||!Je)return;const{asCoOwner:e,unverified:t,nonSocial:n}=P;try{for(const{pid:s,id:r,name:o}of Gr(Je,P.list,{asCoOwner:e,unverified:t,nonSocial:n},Fr))window.postMessage({ns:Se,dir:"cmd",cmd:"kick",pid:s,id:r},window.location.origin),x.log(`auto kick: kicked ${o??"(no name)"} (${r})`)}catch(s){x.warn("auto kick: evaluate failed",s)}}function dc(e,t){if(!P.enabled||!P.remember)return;const n=Vr(P.list,{id:e,name:t});n!==P.list&&(P.list=n,chrome.storage.sync.set({[I.list]:n}).catch(s=>x.warn("auto kick: failed to remember",s)),x.log(`auto kick: remembered ${t??"(no name)"} (${e})`))}const Ss=(()=>{try{return(globalThis.chrome?.runtime?.getURL?.("src/popup/index.html")??"")+"?stats=1"}catch{return""}})();function zr(){const[e,t]=f.useState(()=>Date.now());return f.useEffect(()=>{const n=window.setInterval(()=>t(Date.now()),1e3);return()=>window.clearInterval(n)},[]),e}function uc({subscribe:e,subscribeOpen:t,toggleOpen:n}){const[s,r]=f.useState(null),[o,a]=f.useState(!1),l=zr();if(f.useEffect(()=>e(r),[e]),f.useEffect(()=>t(a),[t]),!s)return null;const d=s.createdAt===void 0,c=Math.max(0,l-(s.createdAt??s.joinedAt));return i.jsxs("button",{type:"button",className:`talk-btn ${o?"open":""}`,onClick:n,title:d?"Time since you joined — click for who's talking":"How long this room has been open — click for who's talking","aria-expanded":o,children:[i.jsx("style",{children:hc}),i.jsx("svg",{viewBox:"0 0 24 24",width:"15",height:"15",fill:"currentColor","aria-hidden":"true",children:i.jsx("path",{d:"M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm0 18a8 8 0 1 1 0-16 8 8 0 0 1 0 16zm1-13h-2v6l5 3 1-1.73-4-2.37V7z"})}),i.jsx("span",{className:"t",children:jt(c)})]})}function fc({subscribe:e,subscribeOpen:t}){const[n,s]=f.useState(null),[r,o]=f.useState(!1),a=zr();if(f.useEffect(()=>e(s),[e]),f.useEffect(()=>t(o),[t]),!r||!n)return null;const l=[...n.rows].sort((c,u)=>u.sec-c.sec),d=l.reduce((c,u)=>c+u.sec,0);return i.jsxs("div",{className:"talk-panel-wrap",children:[i.jsx("style",{children:pc}),i.jsx("div",{className:"panel",children:n.pro?i.jsxs(i.Fragment,{children:[i.jsxs("div",{className:"head",children:[i.jsx("span",{children:"Talking this session"}),Ss&&i.jsx("a",{href:Ss,target:"_blank",rel:"noopener noreferrer",className:"stats-link",children:"Stats"})]}),l.length===0?i.jsx("div",{className:"empty",children:"No one has spoken yet."}):i.jsx("ul",{className:"rows",children:l.map(c=>i.jsxs("li",{className:c.isMe?"me":"",children:[i.jsxs("span",{className:"who",children:[i.jsx("span",{className:"name",title:c.name??c.id,children:c.name??c.id}),typeof c.joinedAt=="number"&&i.jsxs("span",{className:"sub",children:["in room ",jt(a-c.joinedAt)]})]}),i.jsx("span",{className:"bar",children:i.jsx("span",{className:"fill",style:{width:`${d>0?Math.round(c.sec/d*100):0}%`}})}),i.jsx("span",{className:"sec",title:"Time talked",children:jt(c.sec*1e3)})]},c.id))}),n.large&&i.jsx("div",{className:"note",children:"Large room — times are approximate (you only hear part of the room)."})]}):i.jsxs("div",{className:"pitch",children:[i.jsx("strong",{children:"See who’s talking"}),i.jsx("p",{children:"The live speaking breakdown — who’s spoken how long — is a Pro feature. Pay once on Buy Me a Coffee with your free4talk.me email."}),i.jsxs("a",{href:tt,target:"_blank",rel:"noopener noreferrer",children:["Get Pro — ",et," once"]})]})})]})}const hc=`
  .talk-btn { display: inline-flex; align-items: center; justify-content: center; gap: 6px; box-sizing: border-box; height: var(--f4t-ctl-h, 40px); padding: 0 12px; border: var(--f4t-ctl-border, 1px solid rgba(255,255,255,0.12)); border-radius: var(--f4t-ctl-radius, 8px); background: var(--f4t-ctl-bg, transparent); color: var(--f4t-ctl-color, #e6e6e6); font-family: inherit; cursor: pointer; opacity: 0.9; transition: opacity 0.15s ease, filter 0.15s ease; }
  .talk-btn:hover { opacity: 1; filter: brightness(1.25); }
  .talk-btn.open { opacity: 1; filter: brightness(1.35); }
  .talk-btn .t { font-variant-numeric: tabular-nums; font-feature-settings: "tnum"; font-size: 13px; letter-spacing: 0.02em; }
`,pc=`
  .talk-panel-wrap { display: flex; justify-content: center; margin: 8px 0; font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif; }
  .panel { width: 260px; max-width: 80vw; padding: 8px; border: 1px solid rgba(255,255,255,0.14); border-radius: 10px; background: rgba(20,22,26,0.96); box-shadow: 0 6px 20px rgba(0,0,0,0.35); color: #e6e6e6; }
  .head { display: flex; justify-content: space-between; align-items: center; font-size: 11px; text-transform: uppercase; letter-spacing: 0.06em; color: rgba(255,255,255,0.55); margin-bottom: 6px; }
  .stats-link { color: #33a9ff; text-decoration: none; text-transform: none; letter-spacing: 0; }
  .stats-link:hover { text-decoration: underline; }
  .empty { font-size: 12px; color: rgba(255,255,255,0.5); padding: 4px 2px; }
  .rows { list-style: none; margin: 0; padding: 0; display: flex; flex-direction: column; gap: 6px; max-height: 240px; overflow-y: auto; }
  .rows li { display: grid; grid-template-columns: 1fr 48px auto; align-items: center; gap: 8px; font-size: 12px; }
  .rows li.me .name { color: #7cc4ff; font-weight: 600; }
  .who { display: flex; flex-direction: column; min-width: 0; }
  .name { overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
  .sub { font-size: 10px; color: rgba(255,255,255,0.42); margin-top: 1px; }
  .bar { height: 6px; border-radius: 3px; background: rgba(255,255,255,0.1); overflow: hidden; }
  .fill { display: block; height: 100%; background: #33a9ff; transition: width 0.4s ease; }
  .sec { font-variant-numeric: tabular-nums; font-feature-settings: "tnum"; color: rgba(255,255,255,0.85); text-align: right; min-width: 40px; }
  .note { margin-top: 7px; font-size: 11px; color: rgba(255,255,255,0.5); line-height: 1.3; }
  .pitch { font-size: 12px; line-height: 1.4; }
  .pitch strong { display: block; margin-bottom: 4px; }
  .pitch p { margin: 0 0 8px; color: rgba(255,255,255,0.7); }
  .pitch a { color: #33a9ff; text-decoration: none; }
  .pitch a:hover { text-decoration: underline; }
`,ks="f4t-talk-btn",js="f4t-talk-panel",mc=864e5;let Es=!1,Q=!0,Ze=null;const Xt=new Set;function Cs(){for(const e of Xt)e(Ze)}function Ns(e){return Xt.add(e),e(Ze),()=>{Xt.delete(e)}}let me=!1;const Jt=new Set;function $r(){for(const e of Jt)e(me)}function Ts(e){return Jt.add(e),e(me),()=>{Jt.delete(e)}}function gc(){me=!me,$r()}function yc(e){me!==e&&(me=e,$r())}let Ue,As=Date.now(),we={},Zt=[],en="Unknown";function Os(e){try{window.postMessage({ns:Ds,dir:"cmd",...e},window.location.origin)}catch(t){x.warn("talk time: couldn't message the page",t)}}let Ur=!1;function xc(e){const t=e.data;if(!(e.source!==window||t?.ns!==Ds||t.dir!=="event")){Ur=!0;try{if(t.event==="talk"){const n=typeof t.rid=="string"?t.rid:void 0;n!==Ue&&(Ue=n,As=Date.now(),we={});const s=Array.isArray(t.rows)?t.rows.filter(r=>typeof r?.id=="string").map(r=>({id:r.id,name:typeof r.name=="string"?r.name:void 0,isMe:r.isMe===!0,sec:typeof r.sec=="number"?r.sec:0,joinedAt:typeof r.joinedAt=="number"?r.joinedAt:void 0})):[];Zt=s,en=typeof t.roomLang=="string"?t.roomLang:"Unknown",Ze={rows:s,roomLang:en,large:t.large===!0,createdAt:typeof t.createdAt=="number"?t.createdAt:void 0,joinedAt:As,pro:Q},Cs()}else t.event==="room-left"&&(Q&&Br(),Ze=null,Cs(),yc(!1),Ue=void 0,we={},Zt=[])}catch(n){x.warn("talk time: bridge event failed",n)}}}function bc(e){return Object.keys(e.meSecByLang).length>0||Object.keys(e.people).length>0}async function Br(){if(!Q||!Ue||!globalThis.chrome?.storage?.local)return;const e=Zt,t=e.find(o=>o.isMe)?.id,n={};for(const o of e)n[o.id]={sec:o.sec,name:o.isMe?void 0:o.name};const s=yi(n,we,t,en);we={};for(const o of e)we[o.id]=o.sec;if(!bc(s))return;const r=zs(Date.now());try{const a=(await chrome.storage.local.get(r))[r]??xi();await chrome.storage.local.set({[r]:bi(a,s)})}catch(o){x.warn("talk time: flush failed",o)}}async function vc(){if(globalThis.chrome?.storage?.local)try{const e=await chrome.storage.local.get(null),t=zs(Date.now()-pi*mc),n=Object.keys(e).filter(s=>s.startsWith(gi)&&s<t);n.length&&await chrome.storage.local.remove(n)}catch(e){x.warn("talk time: prune failed",e)}}let yt=null,xt=null;function wc(){const e=Array.from(document.querySelectorAll(".blind")).find(s=>/hang up this call/i.test(s.textContent||""));if(!e)return null;const t=e.closest("button")?.parentElement?.parentElement;if(t&&t.querySelectorAll(".blind").length>=3)return t;let n=e.parentElement;for(;n&&n!==document.body;){if(n.querySelectorAll(".blind").length>=3)return n;n=n.parentElement}return null}function Sc(e,t){try{const n=Array.from(t.querySelectorAll("button")),s=n.find(o=>{const a=getComputedStyle(o).backgroundColor.match(/\d+/g);if(!a)return!0;const[l,d,c]=a.map(Number);return!(c>l+25&&c>d+25)})??n[0];if(!s)return;const r=getComputedStyle(s);e.style.setProperty("--f4t-ctl-h",r.height),e.style.setProperty("--f4t-ctl-radius",r.borderTopLeftRadius),e.style.setProperty("--f4t-ctl-border",`${r.borderTopWidth} ${r.borderTopStyle} ${r.borderTopColor}`),e.style.setProperty("--f4t-ctl-bg",r.backgroundColor),e.style.setProperty("--f4t-ctl-color",r.color)}catch{}}function Ms(e,t){const n=document.createElement("div");e.attachShadow({mode:"open"}).append(n);const s=ge.createRoot(n);return s.render(t),s}function kc(){const e=wc(),t=document.getElementById(ks),n=document.getElementById(js);if(!e){t&&(yt?.unmount(),yt=null,t.remove()),n&&(xt?.unmount(),xt=null,n.remove());return}let s=t;if(s?s.parentElement!==e&&e.append(s):(s=document.createElement("div"),s.id=ks,s.style.display="inline-flex",s.style.alignItems="center",e.append(s),yt=Ms(s,f.createElement(uc,{subscribe:Ns,subscribeOpen:Ts,toggleOpen:gc}))),Sc(s,e),n)n.previousElementSibling!==e&&e.insertAdjacentElement("afterend",n);else{const r=document.createElement("div");r.id=js,e.insertAdjacentElement("afterend",r),xt=Ms(r,f.createElement(fc,{subscribe:Ns,subscribeOpen:Ts}))}}async function jc(){if(Es)return;Es=!0;try{if(!await $())return}catch(s){x.error("talk time: failed to read extension state",s);return}try{Q=X(await J())}catch{Q=!1}window.addEventListener("message",xc),Os({cmd:"hello",full:Q});const e=window.setInterval(()=>{if(Ur)return window.clearInterval(e);Os({cmd:"hello",full:Q})},2e3);Q&&(vc(),window.setInterval(()=>{Br()},hi));let t=!1;const n=()=>{t||(t=!0,requestAnimationFrame(()=>{t=!1;try{kc()}catch(s){x.error("talk time: mount sync failed",s)}}))};new MutationObserver(n).observe(document.body,{childList:!0,subtree:!0}),n()}Oo();const Ec=2e3,Cc=".basic-detail",Is=new WeakMap;function Nc(e,t){e.dataset.f4tResize!=="1"&&(e.dataset.f4tResize="1",e.style.overflow="hidden",e.style.height="0px",e.style.transition="height 320ms cubic-bezier(0.22, 0.61, 0.36, 1)",new ResizeObserver(()=>{e.style.height=`${t.offsetHeight}px`}).observe(t))}function Tc(e){dn();const t=e.closest(".ant-modal");t&&t.classList.add(Js)}function Ac(e,t){Tc(e);let n=e.querySelector(`#${Ce}`);n||(n=document.createElement("div"),n.id=Ce,n.dataset.free4talkUserId=t.id,e.append(n));const s=Is.get(n);if(s&&n.dataset.free4talkUserId===t.id)return;n.dataset.free4talkUserId=t.id;const r=n.shadowRoot??n.attachShadow({mode:"open"});if(!r.querySelector("style")){const l=document.createElement("style");l.textContent=tr,r.append(l)}let o=r.querySelector("#react-root");o||(o=document.createElement("div"),o.id="react-root",r.append(o)),Nc(n,o);const a=s??ge.createRoot(o);Is.set(n,a),a.render(i.jsx(Ys,{client:nr,children:i.jsx(Xs,{user:t})}))}const Oc="https://www.free4talk.me/tracker/user";function Mc(e,t){const n=Ic(e,t.name);if(!n)return;const s=`${Oc}/${t.id}`,r=n.querySelector(`.${ve}`);if(r){r.href!==s&&(r.href=s);return}const o=document.createElement("a");o.className=ve,o.href=s,o.target="_blank",o.rel="noopener noreferrer",o.title="View profile on free4talk.me tracker",o.innerHTML='<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M14 3a1 1 0 0 1 0-2h6a1 1 0 0 1 1 1v6a1 1 0 1 1-2 0V4.414l-8.293 8.293a1 1 0 0 1-1.414-1.414L17.586 3H14zM5 5a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-6a1 1 0 1 0-2 0v6H5V7h6a1 1 0 1 0 0-2H5z"/></svg>',n.append(o)}function Ic(e,t){const n=Array.from(e.querySelectorAll(":scope > .notranslate"));if(t){const s=n.find(r=>r.textContent?.trim().startsWith(t));if(s)return s}return n[0]??null}function Rc(e){return e.closest(".ant-modal-content")??e}function Rs(){try{const e=Pc();if(e){const t=e.closest(".ant-modal-content, .form-content, .ant-dropdown-menu")??e,n=_c(t);n&&(Mc(e,n),Ac(Rc(e),n))}}catch(e){x.error("scan failed",e)}}function Pc(){return Array.from(document.querySelectorAll(Cc)).find(t=>{if(t.id===Ce||t.closest(`#${Ce}`))return!1;const n=t.closest(".ant-modal-content")??t,s=t.closest(".ant-modal-wrap"),r=n.innerText;return s&&!vt(s)?!1:vt(n)&&vt(t)&&/\b(?:User\s+)?ID:\s*[A-Z0-9]+/i.test(r)&&/Followers:\s*\d+/i.test(r)})}function _c(e){const t=e.innerText,n=t.match(/\b(?:User\s+)?ID:\s*([A-Z0-9]+)/i)?.[1];return n?{id:n,name:Lc(t),followers:bt(t,"Followers"),friends:bt(t,"Friends"),following:bt(t,"Following"),avatarUrl:Dc(e)}:null}function Lc(e){const t=e.split(`
`).map(o=>o.trim()).filter(Boolean),n=/^(?:[a-z]+:\s*)?(User ID:|ID:|Copy ID|Followers:|Friends:|Following:|Report|Follow|Profile info|Endpoint not configured)/i,s=t.filter(o=>!n.test(o)),r=t.findIndex(o=>/Followers:\s*\d+/i.test(o));if(r>=0){const o=t.slice(r+1).find(a=>!n.test(a));if(o)return o}return s[0]}function bt(e,t){const n=e.match(new RegExp(`${t}:\\s*(\\d+)`,"i"))?.[1];return n?Number(n):void 0}function Dc(e){const n=Array.from(e.querySelectorAll("img")).filter(s=>s.currentSrc||s.src).sort((s,r)=>Ps(r)-Ps(s))[0];return n?.currentSrc||n?.src||void 0}function Ps(e){const t=e.getBoundingClientRect();return t.width*t.height}function vt(e){const t=e.getBoundingClientRect(),n=window.getComputedStyle(e);return t.width>0&&t.height>0&&n.display!=="none"&&n.visibility!=="hidden"&&Number(n.opacity)!==0}let wt;async function Fc(e){try{if(e.target?.closest?.(`.${te}`)||!await $())return;window.clearInterval(wt),Rs(),wt=window.setInterval(Rs,250),setTimeout(()=>{window.clearInterval(wt)},Ec)}catch(t){x.error("scan burst failed",t)}}document.addEventListener("click",Fc,!0);qo();Go();ca();Za();Ml();ql();hl();El();ac();cc();jc();
