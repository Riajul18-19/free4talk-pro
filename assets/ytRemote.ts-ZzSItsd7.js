import{M as h,i as de,w as m,e as ce}from"./ytRemote-BcbPVE8e.js";const ue="f4t-yt-remote",I="f4t:remote-card-pos",L="f4t:remote-queue",B="f4t:remote-card-min",pe=1e4,$=3500,fe=250,he=1500,ge=100,S=8,be=4;let p=!1,M=!1,y=null,s=[],v,V=0,d={state:"idle"},w=null,T,o=null,_=!1,X=0,C,H;const x=e=>`https://i.ytimg.com/vi/${e}/mqdefault.jpg`,Y=e=>`https://www.youtube.com/watch?v=${e}`,K=()=>["starting","playing","paused","waiting"].includes(d.state);async function q(e){try{return await chrome.runtime.sendMessage(e)}catch{z(!1);return}}function F(e){try{chrome.storage.local.set(e).catch(()=>{})}catch{}}function z(e,t){p=e,d=t??{state:"idle"},v=e?d.videoId:void 0,w=null,e?Le():Te(),oe(e),b(),e&&W()}function E(e,t){window.clearTimeout(T),w=e,T=t?window.setTimeout(()=>{w=null,T=void 0,b()},t):void 0,b()}function N(e){s=e,F({[L]:s}),b()}function me(){return document.querySelector("#movie_player video")}function G(){return!!document.querySelector("#movie_player.ad-showing")}function W(){if(!p)return;oe(!0);const e=m(location.href);e&&(G()||me()?.pause(),e!==v&&ee(e)),b()}function xe(e){const t=e.target;if(!p||!(t instanceof HTMLVideoElement)||!t.closest("#movie_player"))return;const n=m(location.href);if(!n||G())return;t.pause();const r=!(d.state==="playing"&&d.videoId===n)&&Date.now()-V>pe;(n!==v||r)&&ee(n)}function ye(e){e.type==="pointerdown"?_=!0:e.type!=="keydown"&&(_=!1),X=Date.now()}function ve(e){const t=e.target;if(!p||!(t instanceof HTMLVideoElement)||!t.closest("#movie_player")||G()||!_&&Date.now()-X>he)return;const n=m(location.href);!n||n!==d.videoId||d.state!=="playing"&&d.state!=="paused"||(C=t.currentTime,H===void 0&&J())}function J(){if(C===void 0){H=void 0;return}q({type:h.seek,videoId:d.videoId,seconds:C}),C=void 0,H=window.setTimeout(J,fe)}async function Z(e,t){let n="",i="";try{const r=await fetch(`https://www.youtube.com/oembed?format=json&url=${encodeURIComponent(Y(e))}`);if(r.ok){const a=await r.json();typeof a.title=="string"&&(n=a.title),typeof a.author_name=="string"&&(i=a.author_name)}}catch{}return!n&&t&&(n=document.title.replace(/^\(\d+\)\s*/,"").replace(/\s*-\s*YouTube$/,"")),{videoId:e,videoUrl:Y(e),title:n||"YouTube video",channel:i,thumbnail:x(e)}}async function ee(e){v=e,V=Date.now();const t=await Z(e,!0);v!==e||!p||await te(t)}async function te(e){v=e.videoId,V=Date.now(),E({label:"Sending to your room",title:e.title,videoId:e.videoId});const t=await q({type:h.play,item:e});t?.connected===!1?z(!1):t?.delivered===!1&&E({label:"Couldn't reach your room",title:"Is the Free4Talk tab still open?"},$)}function ne(e,t){const n=K()?d.videoId:void 0,{queue:i,added:r}=ce(s,e,n);N(i);const a=e.length===1?e[0]:void 0;let l=a&&a.videoId===n?"Already playing in your room":"Already in your queue";r&&(l=a?`Added to queue · #${i.findIndex(u=>u.videoId===a.videoId)+1}`:`Added ${r} to your queue`),E({label:l,title:t,videoId:a?.videoId},$)}function A(e){const t=s[e];t&&(N(s.filter((n,i)=>i!==e)),te(t))}function we(){const e=new Set,t=[];for(const n of document.querySelectorAll("ytd-playlist-panel-renderer#playlist ytd-playlist-panel-video-renderer")){const i=m(n.querySelector("a#wc-endpoint")?.href??"");if(!i||e.has(i))continue;e.add(i);const r=n.querySelector("#video-title")?.textContent?.trim()||"YouTube video",a=n.querySelector("#byline")?.textContent?.trim()??"";if(t.push({videoId:i,videoUrl:Y(i),title:r,channel:a,thumbnail:x(i)}),t.length>=ge)break}return t}function qe(){const e=we();if(!e.length){E({label:"Nothing to queue",title:"Open the playlist panel and try again."},$);return}const t=document.querySelector("ytd-playlist-panel-renderer#playlist h3")?.textContent?.trim();ne(e,t||"This playlist")}function ie(){const e=document.querySelector(".ytp-next-button");return!m(location.href)||!e||e.offsetParent===null||e.getAttribute("aria-disabled")==="true"?!1:(e.click(),!0)}function ke(){p&&(s.length?A(0):ie()||q({type:h.noNext}))}function R(e){M=e,F({[B]:e}),b()}const k="data-f4t-href",Se=`data:image/svg+xml,${encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#7381f2"/><stop offset="1" stop-color="#5361d8"/></linearGradient></defs><circle cx="16" cy="16" r="16" fill="url(#g)"/><path d="M12.5 10v12l10-6z" fill="#fff"/></svg>')}`;function oe(e){for(const t of document.querySelectorAll('link[rel~="icon"]'))e&&!t.hasAttribute(k)?(t.setAttribute(k,t.href),t.href=Se):!e&&t.hasAttribute(k)&&(t.href=t.getAttribute(k)??t.href,t.removeAttribute(k))}const f="f4t-yt-add",O="f4t-yt-add-style",U='a[href*="/watch?v="]:has(img)',Ee=`
  .${f} {
    position: absolute; top: 6px; left: 6px; z-index: 5;
    display: flex; align-items: center; justify-content: center;
    width: 30px; height: 30px; padding: 0; border: 0; border-radius: 50%;
    background: #5361d8; color: #fff; box-shadow: 0 2px 8px rgba(0, 0, 0, 0.45);
    opacity: 0; transform: scale(0.9); transition: opacity 0.15s, transform 0.15s, background 0.15s; cursor: pointer;
  }
  a:hover > .${f}, .${f}:focus-visible { opacity: 1; transform: none; }
  .${f}:hover { background: #6372e5; }
  .${f}.done { background: #2ba640; opacity: 1; transform: none; }
`,re='<svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true"><path d="M11 5h2v6h6v2h-6v6h-2v-6H5v-2h6z"/></svg>',Ie='<svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true"><path d="M9 16.2 4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4z"/></svg>';let D;const ae=new MutationObserver(()=>{D===void 0&&(D=window.setTimeout(()=>{D=void 0,le()},400))});function Le(){if(!document.getElementById(O)){const e=document.createElement("style");e.id=O,e.textContent=Ee,document.head.append(e)}ae.observe(document.body,{childList:!0,subtree:!0}),le()}function Te(){ae.disconnect(),document.querySelectorAll(`.${f}`).forEach(e=>e.remove()),document.getElementById(O)?.remove()}function le(){if(p)for(const e of document.querySelectorAll(U)){if(e.querySelector(U)){e.querySelector(`:scope > .${f}`)?.remove();continue}if(e.querySelector(`:scope > .${f}`))continue;const t=document.createElement("button");t.type="button",t.className=f,t.title="Add to your room's queue",t.setAttribute("aria-label","Add to your room's queue"),t.innerHTML=re;for(const n of["pointerdown","mousedown","click"])t.addEventListener(n,i=>{i.preventDefault(),i.stopPropagation(),n==="click"&&Ce(e,t)});getComputedStyle(e).position==="static"&&(e.style.position="relative"),e.append(t)}}async function Ce(e,t){const n=m(e.href);if(!n||!p)return;t.classList.add("done"),t.innerHTML=Ie,window.setTimeout(()=>{t.classList.remove("done"),t.innerHTML=re},1200);const i=await Z(n,!1);p&&ne([i],i.title)}const Ae='<svg viewBox="0 0 10 16" width="8" height="13" fill="currentColor" aria-hidden="true"><circle cx="2" cy="2" r="1.4"/><circle cx="8" cy="2" r="1.4"/><circle cx="2" cy="8" r="1.4"/><circle cx="8" cy="8" r="1.4"/><circle cx="2" cy="14" r="1.4"/><circle cx="8" cy="14" r="1.4"/></svg>',se='<svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor" aria-hidden="true"><path d="M19 6.4 17.6 5 12 10.6 6.4 5 5 6.4 10.6 12 5 17.6 6.4 19 12 13.4 17.6 19 19 17.6 13.4 12z"/></svg>',Me='<svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden="true"><path d="M6 5h4v14H6zm8 0h4v14h-4z"/></svg>',_e='<svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden="true"><path d="M8 5v14l11-7z"/></svg>',ze='<svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor" aria-hidden="true"><path d="M6 11h12v2H6z"/></svg>',Ne='<svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden="true"><path d="M16 6h2v12h-2zM6 18l8.5-6L6 6z"/></svg>',$e=`
  :host { all: initial; position: fixed; left: 16px; bottom: 16px; z-index: 2147483647; }
  [hidden] { display: none !important; }
  .card {
    box-sizing: border-box; width: 340px; max-width: calc(100vw - ${S*2}px);
    padding: 10px 10px 10px 8px; border-radius: 14px;
    background: linear-gradient(135deg, #7381f2 0%, #5361d8 100%); color: #fff;
    box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.18), 0 14px 34px -8px rgba(83, 97, 216, 0.75), 0 4px 14px rgba(0, 0, 0, 0.35);
    font: 13px/1.35 Roboto, Arial, sans-serif; cursor: grab; user-select: none; touch-action: none;
  }
  .card.dragging { cursor: grabbing; }
  .head { display: flex; align-items: center; gap: 7px; }
  .grip { flex: none; color: rgba(255, 255, 255, 0.55); padding: 0 1px; }
  .badge { flex: none; padding: 3px 5px; border-radius: 5px; background: rgba(255, 255, 255, 0.2); font-size: 10px; font-weight: 700; letter-spacing: 0.04em; }
  .label, .qlabel {
    font-size: 10.5px; font-weight: 700; letter-spacing: 0.08em; text-transform: uppercase;
    opacity: 0.9; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;
  }
  .label { flex: 1; min-width: 0; }
  .body { display: flex; align-items: center; gap: 10px; margin: 8px 0 0 15px; }
  .thumb { flex: none; width: 64px; height: 36px; border-radius: 6px; object-fit: cover; background: rgba(0, 0, 0, 0.2); }
  .title { min-width: 0; font-size: 14px; font-weight: 500; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden; }
  .foot { display: flex; align-items: center; gap: 6px; margin: 10px 0 0 15px; }
  button { font: inherit; color: inherit; cursor: pointer; }
  button:focus-visible { outline: 2px solid #fff; outline-offset: 2px; }
  .icon {
    flex: none; display: inline-flex; align-items: center; justify-content: center;
    width: 30px; height: 30px; padding: 0; border: 0; border-radius: 50%;
    background: rgba(255, 255, 255, 0.16); transition: background 0.15s;
  }
  .icon:hover { background: rgba(255, 255, 255, 0.3); }
  .x { width: 24px; height: 24px; background: transparent; }
  .chip {
    flex: none; padding: 6px 10px; border: 0; border-radius: 999px; white-space: nowrap;
    background: rgba(255, 255, 255, 0.16); font-size: 11.5px; font-weight: 600; transition: background 0.15s;
  }
  .chip:hover { background: rgba(255, 255, 255, 0.3); }

  .queue { margin: 10px 0 0 15px; padding-top: 8px; border-top: 1px solid rgba(255, 255, 255, 0.22); }
  .qhead { display: flex; align-items: center; gap: 6px; }
  .qlabel { flex: 1; min-width: 0; }
  .link { flex: none; padding: 4px 6px; border: 0; border-radius: 6px; background: transparent; font-size: 11.5px; font-weight: 600; opacity: 0.85; }
  .link:hover { opacity: 1; background: rgba(255, 255, 255, 0.16); }
  .qlist { list-style: none; margin: 6px 0 0; padding: 0; max-height: 214px; overflow-y: auto; cursor: default; }
  .qlist::-webkit-scrollbar { width: 6px; }
  .qlist::-webkit-scrollbar-thumb { background: rgba(255, 255, 255, 0.3); border-radius: 3px; }
  .qrow { display: flex; align-items: center; gap: 8px; padding: 4px; border-radius: 8px; cursor: pointer; }
  .qrow:hover { background: rgba(255, 255, 255, 0.14); }
  .qthumb { flex: none; width: 48px; height: 27px; border-radius: 4px; object-fit: cover; background: rgba(0, 0, 0, 0.2); }
  .qtext { flex: 1; min-width: 0; display: flex; flex-direction: column; }
  .qtitle, .qchannel { white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
  .qtitle { font-size: 12.5px; font-weight: 500; }
  .qchannel { font-size: 11px; opacity: 0.75; }
  .qremove { width: 24px; height: 24px; background: transparent; opacity: 0.7; }
  .qrow:hover .qremove, .qremove:focus-visible { opacity: 1; }

  /* Minimized: a disc of the room's video, spinning while it plays. */
  .bubble {
    position: relative; box-sizing: border-box; width: 64px; height: 64px; padding: 3px; border-radius: 50%;
    background: linear-gradient(135deg, #7381f2 0%, #5361d8 100%);
    box-shadow: 0 10px 26px -6px rgba(83, 97, 216, 0.8), 0 3px 10px rgba(0, 0, 0, 0.35);
    cursor: grab; user-select: none; touch-action: none;
  }
  .bubble.dragging { cursor: grabbing; }
  .bubble:focus-visible { outline: 2px solid #fff; outline-offset: 2px; }
  .disc {
    display: flex; align-items: center; justify-content: center; width: 100%; height: 100%;
    border-radius: 50%; overflow: hidden; background: #3d47a8; color: #fff;
    font: 700 13px/1 Roboto, Arial, sans-serif; letter-spacing: 0.04em;
    animation: spin 12s linear infinite; animation-play-state: paused;
  }
  :host([data-playing]) .disc { animation-play-state: running; }
  .disc img { width: 100%; height: 100%; object-fit: cover; }
  .hole {
    position: absolute; top: 50%; left: 50%; width: 10px; height: 10px; margin: -5px 0 0 -5px;
    border-radius: 50%; background: #5361d8; box-shadow: 0 0 0 2px rgba(255, 255, 255, 0.85);
  }
  .count {
    position: absolute; top: -3px; right: -3px; min-width: 18px; height: 18px; padding: 0 5px; box-sizing: border-box;
    border-radius: 9px; background: #fff; color: #4e5bd0; box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3);
    font: 700 11px/18px Roboto, Arial, sans-serif; text-align: center;
  }
  @keyframes spin { to { transform: rotate(360deg); } }
  @media (prefers-reduced-motion: reduce) { .disc { animation: none; } }
`;function Pe(){const e=document.createElement("div");e.id=ue;const t=e.attachShadow({mode:"open"});t.innerHTML=`<style>${$e}</style>
    <div class="card" role="region" aria-label="Free4Talk remote">
      <div class="head">
        <span class="grip">${Ae}</span>
        <span class="badge">F4T</span>
        <span class="label"></span>
        <button class="icon x min" type="button" title="Minimize" aria-label="Minimize">${ze}</button>
        <button class="icon x close" type="button" title="Disconnect" aria-label="Disconnect">${se}</button>
      </div>
      <div class="body"><img class="thumb" alt="" hidden /><div class="title"></div></div>
      <div class="foot">
        <button class="icon toggle" type="button"></button>
        <button class="icon next" type="button" title="Next video" aria-label="Next video">${Ne}</button>
        <button class="chip playlist" type="button" title="Add every video in this playlist to your queue">+ Queue playlist</button>
      </div>
      <div class="queue" hidden>
        <div class="qhead">
          <span class="qlabel">Queue · <span class="qcount"></span></span>
          <button class="chip play-queue" type="button">▶ Play queue</button>
          <button class="link clear" type="button">Clear</button>
        </div>
        <ol class="qlist"></ol>
      </div>
    </div>
    <div class="bubble" role="button" tabindex="0" aria-label="Open the Free4Talk remote" hidden>
      <div class="disc"><img alt="" hidden /><span class="mark">F4T</span></div>
      <span class="hole"></span>
      <span class="count" hidden></span>
    </div>`;const n=r=>t.querySelector(r),i={host:e,label:n(".label"),thumb:n(".thumb"),title:n(".title"),toggle:n(".toggle"),next:n(".next"),playlist:n(".playlist"),queue:n(".queue"),qcount:n(".qcount"),playQueue:n(".play-queue"),qlist:n(".qlist"),drawn:"",panel:n(".card"),bubble:n(".bubble"),discImg:n(".disc img"),discMark:n(".disc .mark"),count:n(".count")};return n(".close").addEventListener("click",()=>{q({type:h.disconnect})}),n(".min").addEventListener("click",()=>R(!0)),i.bubble.addEventListener("keydown",r=>{(r.key==="Enter"||r.key===" ")&&(r.preventDefault(),R(!1))}),i.toggle.addEventListener("click",()=>{q({type:h.control,action:d.state==="playing"?"pause":"resume"})}),i.next.addEventListener("click",()=>{s.length?A(0):ie()||E({label:"Nothing up next",title:"YouTube has no next video here."},$)}),i.playlist.addEventListener("click",qe),i.playQueue.addEventListener("click",()=>A(0)),n(".clear").addEventListener("click",()=>N([])),i.qlist.addEventListener("click",r=>{const a=r.target,l=Number(a.closest(".qrow")?.dataset.index);Number.isInteger(l)&&(a.closest(".qremove")?N(s.filter((u,c)=>c!==l)):A(l))}),document.documentElement.append(e),j(e,i.panel),j(e,i.bubble,()=>R(!1)),y&&P(e,y.x,y.y),i}function Re(e){e.replaceChildren(...s.map((t,n)=>{const i=document.createElement("li");i.className="qrow",i.dataset.index=String(n),i.title="Play now in your room";const r=document.createElement("img");r.className="qthumb",r.alt="",r.src=t.thumbnail;const a=document.createElement("span");a.className="qtext";const l=document.createElement("span");l.className="qtitle",l.textContent=t.title;const u=document.createElement("span");u.className="qchannel",u.textContent=t.channel,a.append(l,u);const c=document.createElement("button");return c.type="button",c.className="icon qremove",c.title="Remove",c.setAttribute("aria-label",`Remove ${t.title}`),c.innerHTML=se,i.append(r,a,c),i}))}function j(e,t,n){t.addEventListener("pointerdown",i=>{if(i.button!==0||i.target.closest("button, .qlist"))return;const r=e.getBoundingClientRect(),a=i.clientX-r.left,l=i.clientY-r.top;let u=!1;t.setPointerCapture(i.pointerId),t.classList.add("dragging");const c=g=>{!u&&Math.hypot(g.clientX-i.clientX,g.clientY-i.clientY)<be||(u=!0,P(e,g.clientX-a,g.clientY-l))};t.addEventListener("pointermove",c),t.addEventListener("lostpointercapture",()=>{if(t.removeEventListener("pointermove",c),t.classList.remove("dragging"),!u)return n?.();const g=e.getBoundingClientRect();y={x:g.left,y:g.top},F({[I]:y})},{once:!0})})}function P(e,t,n){const{width:i,height:r}=e.getBoundingClientRect();e.style.left=`${Math.max(S,Math.min(t,innerWidth-i-S))}px`,e.style.top=`${Math.max(S,Math.min(n,innerHeight-r-S))}px`,e.style.bottom="auto"}function De(){if(w)return w;const{title:e="",videoId:t,note:n=""}=d;switch(d.state){case"starting":return{label:"Starting in your room",title:e,videoId:t};case"playing":return{label:"Playing in your room",title:e,videoId:t};case"paused":return{label:"Paused in your room",title:e,videoId:t};case"waiting":return{label:"Up next",title:n};case"note":return{label:"Free4Talk",title:n};default:return{label:"Connected to Free4Talk",title:"Open a video to play it in your room, or press + on one to queue it."}}}function b(){if(!p){o?.host.remove(),o=null;return}o?.host.isConnected||(o=Pe());const{label:e,title:t,videoId:n}=De();o.label.textContent=e,o.title.textContent=t,o.title.title=t,o.thumb.hidden=!n,n&&o.thumb.src!==x(n)&&(o.thumb.src=x(n));const i=d.state==="playing",r=i||d.state==="paused";o.toggle.hidden=!r,o.toggle.innerHTML=i?Me:_e,o.toggle.title=i?"Pause the room":"Resume the room",o.toggle.setAttribute("aria-label",o.toggle.title),o.next.hidden=!r,o.playlist.hidden=!m(location.href)||!new URL(location.href).searchParams.has("list"),o.host.toggleAttribute("data-playing",i),o.queue.hidden=!s.length,o.qcount.textContent=String(s.length),o.playQueue.hidden=K();const a=s.map(l=>l.videoId).join();if(a!==o.drawn&&(o.drawn=a,Re(o.qlist)),o.panel.hidden=M,o.bubble.hidden=!M,o.bubble.title=t?`${e}: ${t}`:e,o.discImg.hidden=!n,o.discMark.hidden=!!n,n&&o.discImg.src!==x(n)&&(o.discImg.src=x(n)),o.count.hidden=!s.length,o.count.textContent=s.length>99?"99+":String(s.length),o.host.style.top){const l=o.host.getBoundingClientRect();P(o.host,l.left,l.top)}}function Be(e){const t=e;return!!(t&&Number.isFinite(t.x)&&Number.isFinite(t.y))}async function He(){window.addEventListener("yt-navigate-finish",W),document.addEventListener("play",xe,!0),document.addEventListener("seeking",ve,!0);for(const t of["pointerdown","pointerup","pointercancel","keydown"])document.addEventListener(t,ye,!0);window.addEventListener("blur",()=>_=!1),window.addEventListener("resize",()=>{if(o?.host.style.top){const t=o.host.getBoundingClientRect();P(o.host,t.left,t.top)}}),chrome.runtime.onMessage.addListener((t,n,i)=>{if(t?.type===h.state)z(t.connected===!0);else if(t?.type===h.status&&t.status)d=t.status,T===void 0&&(w=null),b();else if(t?.type===h.next)ke();else return!1;return i({ok:!0}),!1});try{const t=await chrome.storage.local.get([I,L,B]);M=t[B]===!0,Be(t[I])&&(y=t[I]),Array.isArray(t[L])&&(s=t[L].filter(de))}catch{}const e=await q({type:h.hello});e?.connected&&z(!0,e.status)}const Q=window;Q.f4tYtRemote||(Q.f4tYtRemote=!0,He());
