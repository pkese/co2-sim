import{s as Ut,v as O,i as qt,F as Jt,f as Qt,g as Le,e as ye,j as Xt,m as _e,a as dt,t as en,c as tn,b as nn,L as nt,d as pt,R as Ae,h as Y,k as ee,l as te,o as an,n as ht,p as rn,q as on,U as De,r as ft,u as G,w as mt,x as ie,y as be,z as Me,A as x,B as ve,C as ge,D as L,E as je,G as sn,H as Ie,I as cn,J as at,K as Mt,M as I,N as k,O as ce,P as T,Q as P,S as U,T as rt,V as Te,W as Ze,X as J,Y as ne,Z as ln,_ as yt,$ as Se,a0 as gt,a1 as ot,a2 as le,a3 as st,a4 as wt,a5 as it,a6 as un,a7 as _t,a8 as Be,a9 as bt,aa as dn,ab as vt,ac as St,ad as pn,ae as ue,af as hn,ag as fn,ah as mn,ai as Mn}from"./index.683b3c8a.js";import"./vendor.66da8c77.js";class $t{constructor(e,n){this.k=e,this.v=n}}function Ke(t,e){return new $t(t,e)}function D(t){return t.k}function Q(t){return t.v}class F extends $t{constructor(e,n,r,a,o){super(e,n);this.left=r,this.right=a,this.h=o|0}}function Re(t,e,n,r,a){return new F(t,e,n,r,a)}function Z(t){return t.left}function B(t){return t.right}function $e(t){return t.h}function Pe(){}function kt(t,e){e:for(;;){const n=t,r=e;if(r!=null){const a=r;if(a instanceof F){t=kt(n+1,Z(a)),e=B(a);continue e}else return n+1|0}else return n|0}}function yn(t){return kt(0,t)}function de(t,e,n,r){let a;const o=t;if(o!=null){const l=o;a=l instanceof F?$e(l):1}else a=0;let s;const i=r;if(i!=null){const l=i;s=l instanceof F?$e(l):1}else s=0;const h=(a<s?s:a)|0;return h===0?Ke(e,n):Re(e,n,t,r,h+1)}function xt(t,e,n,r){let a,o,s,i,h;const l=t;if(l!=null){const c=l;h=c instanceof F?$e(c):1}else h=0;let M;const b=r;if(b!=null){const c=b;M=c instanceof F?$e(c):1}else M=0;if(M>h+2){const c=O(r);if(c instanceof F)if(a=Z(c),(a!=null?(o=a,o instanceof F?$e(o):1):0)>h+1){const w=O(Z(c));if(w instanceof F)return de(de(t,e,n,Z(w)),D(w),Q(w),de(B(w),D(c),Q(c),B(c)));throw new Error("internal error: Map.rebalance")}else return de(de(t,e,n,Z(c)),D(c),Q(c),B(c));else throw new Error("internal error: Map.rebalance")}else if(h>M+2){const c=O(t);if(c instanceof F)if(s=B(c),(s!=null?(i=s,i instanceof F?$e(i):1):0)>M+1){const w=O(B(c));if(w instanceof F)return de(de(Z(c),D(c),Q(c),Z(w)),D(w),Q(w),de(B(w),e,n,r));throw new Error("internal error: Map.rebalance")}else return de(Z(c),D(c),Q(c),de(B(c),e,n,r));else throw new Error("internal error: Map.rebalance")}else return de(t,e,n,r)}function ze(t,e,n,r){if(r!=null){const a=r,o=t.Compare(e,D(a))|0;return a instanceof F?o<0?xt(ze(t,e,n,Z(a)),D(a),Q(a),B(a)):o===0?Re(e,n,Z(a),B(a),$e(a)):xt(Z(a),D(a),Q(a),ze(t,e,n,B(a))):o<0?Re(e,n,Pe(),r,2):o===0?Ke(e,n):Re(e,n,r,Pe(),2)}else return Ke(e,n)}function Ct(t,e,n){e:for(;;){const r=t,a=e,o=n;if(o!=null){const s=o,i=r.Compare(a,D(s))|0;if(i===0)return Ut(Q(s));if(s instanceof F){t=r,e=a,n=i<0?Z(s):B(s);continue e}else return}else return}}function gn(t,e,n){const r=Ct(t,e,n);if(r==null)throw new Error;return O(r)}function wn(t,e,n){e:for(;;){const r=t,a=e,o=n;if(o!=null){const s=o,i=r.Compare(a,D(s))|0;if(s instanceof F)if(i<0){t=r,e=a,n=Z(s);continue e}else{if(i===0)return!0;t=r,e=a,n=B(s);continue e}else return i===0}else return!1}}function Wt(t,e){e:for(;;){const n=t,r=e;if(r!=null){const a=r;if(a instanceof F){Wt(n,Z(a)),n(D(a),Q(a)),t=n,e=B(a);continue e}else n(D(a),Q(a))}break}}function _n(t,e){Wt(t,e)}function bn(t,e,n){let r=n;_n((a,o)=>{e[r]=[a,o],r=r+1|0},t)}function vn(t,e){return Qt((n,r)=>ze(t,r[0],r[1],n),Pe(),e)}function Sn(t,e,n){e:for(;;){const r=t,a=e,o=n;if(o["System.Collections.IEnumerator.MoveNext"]()){const s=o["System.Collections.Generic.IEnumerator`1.get_Current"]();t=r,e=ze(r,s[0],s[1],a),n=o;continue e}else return a}}function Et(t,e){let n=Pe();for(let r=0;r<=e.length-1;r++){const a=e[r];n=ze(t,a[0],a[1],n)}return n}function $n(t,e){if(qt(e))return Et(t,e);if(e instanceof Jt)return vn(t,e);{const n=Le(e);try{return Sn(t,Pe(),n)}finally{n.Dispose()}}}class kn extends Ae{constructor(e,n){super();this.stack=e,this.started=n}}function At(t){e:for(;;){const e=t;if(Y(e))return ht();{const n=ee(e),r=te(e);if(r!=null){const a=r;if(a instanceof F){t=an([Z(a),Ke(D(a),Q(a)),B(a)],n);continue e}else return e}else{t=n;continue e}}}}function jt(t){return new kn(At(dt(t)),!1)}function xn(){throw new Error("enumeration not started")}function Cn(){throw new Error("enumeration already finished")}function It(t){if(t.started){const e=t.stack;if(Y(e))return Cn();if(te(e)!=null){const n=te(e);if(n instanceof F)throw new Error("Please report error: Map iterator, unexpected stack for current");return[D(n),Q(n)]}else throw new Error("Please report error: Map iterator, unexpected stack for current")}else return xn()}function Wn(t){if(t.started){const e=t.stack;if(Y(e))return!1;if(te(e)!=null){if(te(e)instanceof F)throw new Error("Please report error: Map iterator, unexpected stack for moveNext");return t.stack=At(ee(e)),!Y(t.stack)}else throw new Error("Please report error: Map iterator, unexpected stack for moveNext")}else return t.started=!0,!Y(t.stack)}function Tt(t){let e=jt(t);return{["System.Collections.Generic.IEnumerator`1.get_Current"](){return It(e)},["System.Collections.IEnumerator.get_Current"](){return It(e)},["System.Collections.IEnumerator.MoveNext"](){return Wn(e)},["System.Collections.IEnumerator.Reset"](){e=jt(t)},Dispose(){}}}class He{constructor(e,n){this.comparer=e,this.tree=n}GetHashCode(){return In(this)|0}Equals(e){const n=this;if(e instanceof He){const r=Le(n);try{const a=Le(e);try{const o=()=>{const s=r["System.Collections.IEnumerator.MoveNext"]();if(s===a["System.Collections.IEnumerator.MoveNext"]())if(s){const i=r["System.Collections.Generic.IEnumerator`1.get_Current"](),h=a["System.Collections.Generic.IEnumerator`1.get_Current"]();return ye(i[0],h[0])&&ye(i[1],h[1])?o():!1}else return!0;else return!1};return o()}finally{a.Dispose()}}finally{r.Dispose()}}else return!1}toString(){return"map ["+Xt("; ",_e(n=>rn("({0}, {1})",n[0],n[1]),this))+"]"}get[Symbol.toStringTag](){return"FSharpMap"}toJSON(e){const n=this;return Array.from(n)}GetEnumerator(){return Tt(this.tree)}[Symbol.iterator](){return en(this.GetEnumerator())}["System.Collections.IEnumerable.GetEnumerator"](){return Tt(this.tree)}CompareTo(e){const n=this;if(e instanceof He)return tn((r,a)=>{const o=n.comparer.Compare(r[0],a[0])|0;return(o!==0?o:on(r[1],a[1]))|0},n,e)|0;throw new Error("not comparable\\nParameter name: obj")}["System.Collections.Generic.ICollection`1.Add2B595"](e){throw new Error("Map cannot be mutated")}["System.Collections.Generic.ICollection`1.Clear"](){throw new Error("Map cannot be mutated")}["System.Collections.Generic.ICollection`1.Remove2B595"](e){throw new Error("Map cannot be mutated")}["System.Collections.Generic.ICollection`1.Contains2B595"](e){const n=this;return Pt(n,e[0])&&ye(Ye(n,e[0]),e[1])}["System.Collections.Generic.ICollection`1.CopyToZ2E171D71"](e,n){bn(this.tree,e,n)}["System.Collections.Generic.ICollection`1.get_IsReadOnly"](){return!0}["System.Collections.Generic.ICollection`1.get_Count"](){return ct(this)|0}["System.Collections.Generic.IReadOnlyCollection`1.get_Count"](){return ct(this)|0}get size(){return ct(this)|0}clear(){throw new Error("Map cannot be mutated")}delete(e){throw new Error("Map cannot be mutated")}entries(){return _e(n=>[n[0],n[1]],this)}get(e){return Ye(this,e)}has(e){return Pt(this,e)}keys(){return _e(n=>n[0],this)}set(e,n){throw new Error("Map cannot be mutated")}values(){return _e(n=>n[1],this)}forEach(e,n){const r=this;nn(a=>{e(a[1],a[0],r)},r)}}function Oe(t,e){return new He(t,e)}(()=>{He.empty=Oe(nt(),Pe())})();function En(t){const e=nt();return Oe(e,$n(e,t))}function An(t,e,n){return Oe(t.comparer,ze(t.comparer,e,n,t.tree))}function Ye(t,e){return gn(t.comparer,e,t.tree)}function ct(t){return yn(t.tree)}function Pt(t,e){return wn(t.comparer,e,t.tree)}function jn(t,e){return Ct(t.comparer,e,t.tree)}function In(t){const e=(a,o)=>(a<<1)+o+631;let n=0;const r=Le(t);try{for(;r["System.Collections.IEnumerator.MoveNext"]();){const a=r["System.Collections.Generic.IEnumerator`1.get_Current"]();n=e(n,pt(a[0]))|0,n=e(n,pt(a[1]))|0}}finally{r.Dispose()}return n|0}function pe(t,e,n){return An(n,t,e)}function ae(t,e){return jn(e,t)}function Tn(t){return En(t)}function Pn(t){const e=nt();return Oe(e,Et(e,t))}class u extends De{constructor(e,...n){super();this.tag=e|0,this.fields=n}cases(){return["Oil","Gas","Coal","Solar","Wind","Nuclear","Hydro","HydroStorage","Waste","StaticProd","NonFosilProd","TotalProd","Load","Import","Export","Battery","BatteryLevel","PumpedLevel","Excess"]}}function zn(){return mt("Shared.Types.TraceKind",[],u,()=>[[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[]])}function Fn(t){switch(t.tag){case 4:case 3:return!0;default:return!1}}function Nn(t){switch(t.tag){case 0:case 1:case 2:return!0;default:return!1}}function zt(t){switch(t.tag){case 6:case 7:case 8:return!0;default:return!1}}class V extends Ae{constructor(e,n,r,a){super();this.kind=e,this.capacityMW=n,this.data=r,this.totalMWh=a}}class Ft extends Ae{constructor(e,n,r){super();this.year=e|0,this.isSimulated=n,this.traces=r}}function he(t,e){return Ye(t.traces,e)}function Nt(t,e,n){return new Ft(t,e,Tn(_e(r=>[r.kind,r],n)))}function Gn(t){return ft(G(()=>_e(e=>e[1],t.traces)))}function ke(t){return he(t,new u(2)).totalMWh*Math.fround(1.0329999923706055)+he(t,new u(1)).totalMWh*Math.fround(.44200000166893005)}class Ue extends De{constructor(e,...n){super();this.tag=e|0,this.fields=n}cases(){return["AbsoluteMW","PercentCapacity"]}}class qe extends Ae{constructor(e,n,r){super();this.capacity=e,this.power=n,this.efficiencyPercent=r}}function Gt(t){const e=t.power;return e.tag===1?t.capacity*e.fields[0]*Math.fround(.009999999776482582):e.fields[0]}function Hn(t){const e=t.power;return e.tag===1?e.fields[0]:e.fields[0]/t.capacity*Math.fround(100)}class Ht extends Ae{constructor(e,n,r,a,o,s,i,h){super();this.installedSolarMW=e,this.installedWindMW=n,this.battery=r,this.extraNuclearMW=a,this.stopCurrentNuclear=o,this.pumpedStorage=s,this.electricCarsPercent=i,this.hydropowerExtraSavaGWh=h}}function Vn(){return new Ht(Math.fround(278),Math.fround(3),new qe(Math.fround(0),new Ue(1,Math.fround(25)),Math.fround(90)),[!1,Math.fround(1100)],!1,[!1,new qe(Math.fround(4600),new Ue(0,Math.fround(400)),Math.fround(70))],Math.fround(0),[!1,Math.fround(1044)+Math.fround(131)])}function Ln(){return Vn()}function Vt(t,e,n){const r=Math.sqrt(t.efficiencyPercent*.01),a=Gt(t);Me(x("storage efficiency=%f, maxPower=%f"))(r)(a);let o=Math.fround(0);return s=>i=>h=>{const l=s(i,h);if(l>=Math.fround(0)){const M=ge((b,c)=>L(b,c),ge((b,c)=>L(b,c),a,(t.capacity-o)*r),l);return o=o+M/r,e[i]=o,l-M}else{const M=ge((b,c)=>L(b,c),ge((b,c)=>L(b,c),a,o*r),-l);return o=o-M/r,e[i]=o,n[i]=M,l+M}}}function Dn(t,e,n){if(t<Math.fround(2))return r=>a=>o=>r(a,o);{const r=15e3/365/100*22*t,a=r/1e3/24,o=t*Math.fround(60)*Math.fround(.0010000000474974513),s=o*Math.fround(.699999988079071),i=r/1e3;Me(x("cars: %.3f<kWh> daily, %.3f<MW> hourly, %.3f<MWh> total battery capacity"))(i)(a)(o);let h=(s*Math.fround(3)+o)/Math.fround(4);return l=>M=>b=>{h=h-a;let c;const w=s-h;c=Ie(($,C)=>L($,C),Math.fround(0),w);let S;const m=o-h;S=Ie(($,C)=>L($,C),Math.fround(0),m);const f=l(M,b-c),A=Ie(($,C)=>L($,C),c,ge(($,C)=>L($,C),f,S));return h=h+A,e[M]=h,n[M]=A,f-A}}}function Lt(t,e,n){let r;if(t==null)r=a=>e[a];else{const a=t;r=o=>a}return a=>o=>s=>{const i=a(o,s-e[o]);if(i>=Math.fround(0))return n[o]=Math.fround(0),i;{const h=ge((l,M)=>L(l,M),r(o),-i);return n[o]=h,i+h}}}function Zn(t,e,n,r,a,o){const s=r(a,o);if(s>=Math.fround(0)){const i=ge((h,l)=>L(h,l),t[a],s);return n[a]=t[a]-i,s-i}else return n[a]=t[a]-s,Math.fround(0)}function Bn(t,e,n,r){const a=e(n,r);return a>=Math.fround(0)?(t[n]=a,Math.fround(0)):(t[n]=Math.fround(0),a)}function Kn(t,e){return e}function Rn(t,e,n){return t(e,n)}function Dt(t,e){let n,r,a,o,s,i,h,l;const M=he(t,new u(2)),b=he(t,new u(1)),c=he(t,new u(13)),w=he(t,new u(14)),S=he(t,new u(4)),m=he(t,new u(3)),f=he(t,new u(5)),A=he(t,new u(6)),$=S.data.length|0,C=e.installedWindMW/O(S.capacityMW),q=e.installedSolarMW/O(m.capacityMW);let oe;const fe=e.hydropowerExtraSavaGWh;if(fe[0]){const p=(A.totalMWh+fe[1]*Math.fround(1e3))/A.totalMWh,g=new V(A.kind,O(A.capacityMW)*p,be(Ee=>p*Ee,A.data,Float32Array),A.totalMWh*p),se=g.data[100],_=f.data[100],Ce=O(g.capacityMW),We=O(A.capacityMW);Me(x("kHydro = %f (current capacity=%.1f->%.1f) d[100]=%f->%f"))(p)(We)(Ce)(_)(se),oe=g}else oe=A;let z;const W=[e.extraNuclearMW,e.stopCurrentNuclear];if(W[0][0]){const p=W[0][1],g=O(f.capacityMW),se=W[1]?p/g:(g+p)/g,_=new V(f.kind,g*se,be(Ee=>se*Ee,f.data,Float32Array),f.totalMWh*se),Ce=_.data[100],We=f.data[100];Me(x("kNuclear = %f (current capacity=%f) d[100]=%f->%f"))(se)(g)(We)(Ce),z=_}else z=W[1]?new V(f.kind,Math.fround(0),new Float32Array($),Math.fround(0)):f;const H=new V(S.kind,ve(p=>C*p,S.capacityMW),be(p=>C*p,S.data,Float32Array),S.totalMWh*C),j=new V(m.kind,ve(p=>q*p,m.capacityMW),be(p=>q*p,m.data,Float32Array),m.totalMWh*q),E=new Float32Array($),d=new Float32Array($),y=new Float32Array($),v=new Float32Array($),N=new Float32Array($),K=new Float32Array($),R=new Float32Array($),me=new Float32Array($),we=new Float32Array($),Xe=new Float32Array($);let Fe;const Ne=Lt(M.capacityMW,M.data,E),et=Lt(void 0,b.data,d),Ve=Vt(e.battery,y,v);let xe;const tt=Dn(e.electricCarsPercent*Math.fround(1e4),N,K)(je(2,Ne(je(2,et(je(2,(n=e.pumpedStorage,n[0]?Vt(n[1],we,Xe):p=>g=>se=>Rn(p,g,se))(je(2,Ve((p,g)=>Kn(p,g))))))))));xe=p=>g=>Zn(c.data,w.data,me,je(2,tt),p,g),Fe=p=>g=>Bn(R,je(2,xe),p,g);for(let p=0;p<=$-1;p++){const g=Fe(p)(H.data[p]+j.data[p]+z.data[p]+oe.data[p]-(S.data[p]+m.data[p]+f.data[p]+A.data[p]));g>Math.fround(.0010000000474974513)&&sn(x("mismatching balance of %f for datapoint %d"))(g)(p)}return new Ft(t.year,!0,(r=(a=(o=(s=(i=(h=(l=pe(new u(6),oe,pe(new u(5),z,pe(new u(3),j,pe(new u(4),H,t.traces)))),pe(new u(2),new V(M.kind,M.capacityMW,E,ie(E,{GetZero:()=>0,Add:(p,g)=>p+g})),l)),pe(new u(1),new V(b.kind,b.capacityMW,d,ie(d,{GetZero:()=>0,Add:(p,g)=>p+g})),h)),pe(new u(16),new V(new u(16),e.battery.capacity,y,ie(y,{GetZero:()=>0,Add:(p,g)=>p+g})),i)),e.pumpedStorage[0]?pe(new u(17),new V(new u(17),e.pumpedStorage[1].capacity,we,ie(we,{GetZero:()=>0,Add:(p,g)=>p+g})),s):s),pe(new u(15),new V(new u(15),e.battery.capacity,v,ie(v,{GetZero:()=>0,Add:(p,g)=>p+g})),o)),pe(new u(18),new V(new u(18),void 0,R,ie(R,{GetZero:()=>0,Add:(p,g)=>p+g})),a)),pe(new u(13),new V(c.kind,c.capacityMW,me,ie(me,{GetZero:()=>0,Add:(p,g)=>p+g})),r)))}function On(t,e){if(t!=null&&/\S/.test(t)){const n=+t.replace("_","");if(!Number.isNaN(n))return e.contents=n,!0}return!1}function re(t){const e=new cn(0);if(On(t,e))return e.contents;throw new Error("Input string was not in a correct format.")}class Zt extends De{constructor(e,...n){super();this.tag=e|0,this.fields=n}cases(){return["Ok","Error"]}}function Yn(){return t=>t}const Un=new at().Decorate(function(t,e){let n;const r=Yn()(`
            :host {
                display: block;
                height: 100%%;
            }
            .energy-form {
                //padding: 2em;
                padding-top: 0.5em;
            }
            :host input {
                //width: 6em;
                text-align: right;
            }
            :host input[type=number] {
                width: 5em;
                text-align: right;
            }
            .ico { color: #248; }
            i.ico {
                width: 1.5em;
                line-height: 2em;
            }
            span.ico {
                vertical-align: top;
            }
            i.fa-circle { font-size: 1.2em }
            .fa-stack { font-size: 1em }
            span>i { vertical-align: middle }
            hr {
                margin:0.3em;
                max-width: 22em;
            }
        `);n=Mt(I(this),r);let a;const o=k(ce("%.0f%P()",[e.installedSolarMW]));a=I(this).useState(()=>o);const s=a[0];let i;const h=k(ce("%.0f%P()",[e.installedWindMW]));i=I(this).useState(()=>h);const l=i[0];let M;const b=k(ce("%.0f%P()",[e.battery.capacity]));M=I(this).useState(()=>b);const c=M[0];let w;const S=k(ce("%.0f%P()",[Hn(e.battery)]));w=I(this).useState(()=>S);const m=w[0];let f;const A=k(ce("%.0f%P()",[e.battery.efficiencyPercent]));f=I(this).useState(()=>A);const $=I(this).useState(()=>e.extraNuclearMW[0]),C=$[0];let q;const oe=k(ce("%.0f%P()",[e.extraNuclearMW[1]]));q=I(this).useState(()=>oe);const fe=q[0],z=I(this).useState(()=>e.extraNuclearMW[0]),W=z[0],H=I(this).useState(()=>e.hydropowerExtraSavaGWh[0]),j=H[0];let E;const d=k(ce("%.0f%P()",[e.hydropowerExtraSavaGWh[1]]));E=I(this).useState(()=>d);const y=E[0],v=I(this).useState(()=>e.pumpedStorage[0]),N=v[0];let K;const R=k(ce("%.0f%P()",[e.pumpedStorage[1].capacity]));K=I(this).useState(()=>R);const me=K[0];let we;const Xe=k(ce("%.0f%P()",[Gt(e.pumpedStorage[1])]));we=I(this).useState(()=>Xe);const Fe=we[0];let Ne;const et=k(ce("%.0f%P()",[e.pumpedStorage[1].efficiencyPercent]));Ne=I(this).useState(()=>et);const Ve=Ne[0];let xe;const tt=k(ce("%.0f%P()",[e.electricCarsPercent]));xe=I(this).useState(()=>tt);const p=xe[0],g=I(this).useState(()=>""),se=g[1];return Me(x("buildNuclear=%A"))(C),T(P`
    <div class="${n}">
    <form class="energy-form" action="#">
    <h7>Simulirana inštalirana moč:</h7>
    <br/>
    <i class="ico fas fa-sun"></i>
    <input type="number" id="solar" name="solar" value="${s}" size="6" min=0 step=100 @change=${_=>{a[1](U(_.target))}} />
    <label for="solar">MW fotopanelov</label><br/>
    <i class="ico fas fa-wind"></i>
    <input type="number" id="wind" name="wind" value="${l}" size="6" min=0 step=50 @change=${_=>{i[1](U(_.target))}} />
    <label for="wind">MW vetrnic ${re(l)>480?"(ocena maksimalne kapacitete vetrnic je okrog 480 MW)":""}</label><br/>
    <i class="ico fas fa-car-battery"></i>
    <input type="number" id="battery" name="battery" value="${c}" size="6" step=50 min=0 @change=${_=>{M[1](U(_.target))}} />
    <label for="battery">MWh baterij</label>  <!-- z največjo močjo polnjenje/praznjenja</label>
    <input type="number" id="batteryPow" name="batteryPow" value="${m}" size="3" step=1 min=1 @change=${_=>{w[1](U(_.target))}} />
    <label for="batteryPow">% MW/MWh kapacitete</label>  -->
    <br/>
    <i class="ico fas fa-water"></i>
    <input type="checkbox" id="buildPumped" name="buildPumped" value="${N}" @change=${_=>{U(_.target),v[1](!N)}}>
    <label for="buildPumped">Zgradimo ČHE Kozjak</label>
    <span style="visibility:${N?"visible":"hidden"}">
    <label for="pumped"> s kapaciteto</label>
    <input type="number" id="pumped" name="pumped" value="${me}" size="6" step=500 min=0 @change=${_=>{K[1](U(_.target))}} />
    <label for="pumped">MWh, močjo</label>
    <input type="number" id="pumpedPow" name="pumpedPow" value="${Fe}" size="6" step=20 min=0 @change=${_=>{we[1](U(_.target))}} />
    <label for="pumpedPow">MW in učinkovitostjo</label>
    <input type="number" id="pumpedEfficiency" pumpedEfficiency="pumped" value="${Ve}" size="6" step=1 min=0 @change=${_=>{Ne[1](U(_.target))}} />
    <label for="pumpedEfficiency">%</label>
    </span>
    <br/>
    <i class="ico fas fa-water"></i>
    <input type="checkbox" id="buildHydro" name="buildHydro" value="${j}" @change=${_=>{U(_.target),H[1](!j)}}>
    <label for="buildHydro">Zgradimo 10 HE na srednji Savi + Mokrice</label>
    <span style="visibility:${j?"visible":"hidden"}">
    <label for="hydro"> z letno proizvodnjo</label>
    <input type="number" id="hydro" name="hydro" value="${y}" size="6" step=100 min=0 @change=${_=>{E[1](U(_.target))}} style="text-align:right;" />
    <label for="hydro">GWh</label>
    </span>
    <br/>
    <i class="ico fas fa-atom"></i>
    <input type="checkbox" id="buildNuclear" name="buildNuclear" value="${C}" @change=${_=>{U(_.target),$[1](!C)}}>
    <label for="buildNuclear">Zgradimo novo nuklearko </label>
    <span style="visibility:${C?"visible":"hidden"}">
    <label for="buildNuclear"> z nazivno močjo</label>
    <input type="number" id="nuclear" name="nuclear" value="${fe}" size="6" step=100 min=0 @change=${_=>{q[1](U(_.target))}} style="text-align:right;" />
    <label for="nuclear">MW</label>
    </span>
    <br/>
    <i class="ico fas fa-times-circle"></i>
    <input type="checkbox" id="stopCurrentNuclear" name="stopCurrentNuclear" value="${W}" @change=${_=>{U(_.target),z[1](!W)}}>
    <label for="stopCurrentNuclear">Ustavimo obstoječo nuklearko</label>
    <br/>
    <i class="ico fas fa-car"></i>
    <input type="number" id="electricCars" name="electricCars" value="${p}" size="6" min=0 step=5 @change=${_=>{xe[1](U(_.target))}} style="text-align:right;"/>
    <label for="electricCars">% avtomobilov se vozi na elektriko</label><br/>
    <hr/>
    <i class="ico fas fa-fw"></i>
    <input type="button" value="Izračunaj" @click=${_=>{let Ce,We,Ee,ut;console.log("submit:",_);let Ge;try{Ge=new Zt(0,(Ce=re(s),We=re(l),Ee=new qe(re(c),new Ue(1,re(m)),re(f[0])),ut=[N,new qe(re(me),new Ue(0,re(Fe)),re(Ve))],new Ht(Ce,We,Ee,[C,re(fe)],W,ut,re(p),[j,re(y)])))}catch(Yt){Ge=new Zt(1,Yt.message)}return Me(x("submit: %A"))(Ge),Ge.tag===1?se(g[0]):(se(""),t(Ge.fields[0])),_.preventDefault(),!1}} >
    </form>
    </div>
    <p/>
    `)});function qn(t,e,n){let r,a,o,s,i,h,l,M,b,c;const w=(W,H)=>{const j=he(W,H).data,E=new Float32Array(~~((j.length+1)/24));let d=j[0];for(let y=0;y<=j.length-1;y++){const v=~~(y/24)|0,N=j[y]*Math.fround(.0010000000474974513)+E[v];d=Ie((K,R)=>L(K,R),d,N),E[v]=N}return[E,d]};let S,m;const f=[(r=ae(new u(16),n.traces),r!=null?ye(r.capacityMW,void 0)?void 0:r!=null?O(r.capacityMW)===Math.fround(0)?void 0:r!=null?(a=r,[a.data,a.capacityMW]):(()=>{throw new Error("Match failure")})():r!=null?(a=r,[a.data,a.capacityMW]):(()=>{throw new Error("Match failure")})():void 0),(o=ae(new u(17),n.traces),o!=null?ye(o.capacityMW,void 0)?void 0:o!=null?O(o.capacityMW)===Math.fround(0)?void 0:o!=null?(s=o,[s.data,s.capacityMW]):(()=>{throw new Error("Match failure")})():o!=null?(s=o,[s.data,s.capacityMW]):(()=>{throw new Error("Match failure")})():void 0)];if(f[0]==null)m=f[1]==null?void 0:(i=f[1],i);else if(f[1]!=null){const W=f[0][1],H=f[0][0],j=f[1][1],E=f[1][0],d=Te(W,Math.fround(0))+Te(j,Math.fround(0));m=[Ze(H.length,y=>H[y]+E[y],Float32Array),d]}else m=f[0];if(m==null)S=void 0;else{const W=m[0],H=O(m[1]),j=new Float32Array(~~((W.length+1)/24)),E=Ze(~~((W.length+1)/24),y=>Math.fround(34028234663852886e22),Float32Array),d=new Float32Array(~~((W.length+1)/24));for(let y=0;y<=W.length-1;y++){const v=~~(y/24)|0,N=W[y]/H*Math.fround(100);E[v]=ge((K,R)=>L(K,R),E[v],N),d[v]=Ie((K,R)=>L(K,R),d[v],N),j[v]=j[v]+N/Math.fround(24)}S=[j,E,d]}const A=w(n,new u(3)),$=w(n,new u(4)),C=w(n,new u(6)),q=w(e,new u(2)),oe=w(n,new u(2)),fe=w(n,new u(18)),z=new Date(`${e.year}-01-01 0:0:0`).getTime();return h={text:"Graf dnevne proizvodnje"},l={},M={zoomType:"x"},b={type:"datetime"},c=rt(G(()=>J(ne({title:{text:"Proizvodnja GWh"}}),G(()=>S!=null?ne({max:100,min:0,opposite:!0,title:{text:"Stanje baterije+\u010CHE %"}}):yt())))),{chart:M,plotOptions:l,series:rt(G(()=>J(ne({data:C[0],name:"Voda",pointInterval:864e5,pointStart:z,yAxis:0}),G(()=>J(ne({color:"#888",data:q[0],name:`Premog ${e.year}`,pointInterval:864e5,pointStart:z,yAxis:0}),G(()=>J(ne({data:oe[0],name:"Premog simuliran",pointInterval:864e5,pointStart:z,yAxis:0}),G(()=>J(ne({data:$[0],name:"Veter",pointInterval:864e5,pointStart:z,yAxis:0}),G(()=>J(ne({data:A[0],name:"Sonce",pointInterval:864e5,pointStart:z,yAxis:0}),G(()=>J(ne({color:"#c6d",data:fe[0],name:"Prese\u017Eek",pointInterval:864e5,pointStart:z,yAxis:0}),G(()=>{if(S!=null){const W=S[1],H=S[2],j=S[0];return Me(x("d0 = %f"))(z),J(ne({color:"#8085e9",data:ln((E,d,y)=>[z+E*864e5,d,y],W,H),name:"% baterije+\u010CHE min/max dnevno",opacity:.3,type:"arearange",yAxis:1}),G(()=>ne({color:"#8085e9",data:j,name:"% baterije+\u010CHE dnevno povpre\u010Dje",pointInterval:864e5,pointStart:z,yAxis:1})))}else return yt()})))))))))))))),title:h,type:"arearange",xAxis:b,yAxis:c}}const Jn=new at().Decorate(function(t,e,n){const r=qn(t,e,n);return setTimeout(()=>{console.log("chart options",r),Highcharts.chart("chart_container",r)},200),T(P`
    <p>
    <div id="chart_container" style="width:100%; height:600px;" />
    </p>
    `)});class X extends Ae{constructor(e,n,r,a,o,s){super();this.name=e,this.capacity=n,this.price=r,this.unit=a,this.repay=o,this.life=s}}function lt(t){return t.capacity*t.price*Math.fround(.0010000000474974513)}function Bt(t){return lt(t)/t.repay}class Kt extends De{constructor(e,...n){super();this.tag=e|0,this.fields=n}cases(){return["Skip","Absolute","Relative"]}}function Qn(){return mt("Energy.CostTable.CouponRender",[],Kt,()=>[[],[],[]])}function Xn(){return be(t=>it(t,un(new Array(_t(t).length),0,_t(t).length,null)),wt(Qn()))}const ea=new at().Decorate(function(t,e,n){let r,a,o,s,i,h,l,M,b,c,w,S,m;const f=I(this).useState(()=>new Kt(0)),A=f[0],$=d=>{const y=[Be(me=>me.capacityMW,ae(d,e.traces)),Be(me=>me.capacityMW,ae(d,n.traces))];let v,N,K,R;switch(y[0]==null?y[1]!=null?(v=1,R=y[1]):v=2:y[1]!=null?(v=0,N=y[1],K=y[0]):v=2,v){case 0:return N-K;case 1:return R;case 2:return Math.fround(0)}},C=d=>{const y=Te(ve(v=>v.totalMWh,ae(d,e.traces)),Math.fround(0));return(Te(ve(v=>v.totalMWh,ae(d,n.traces)),Math.fround(0))-y)/Math.fround(1e3)},q=Se([new X("Fotopaneli",$(new u(3)),Math.fround(1e3),"kW",Math.fround(10),Math.fround(30)),new X("Vetrnice",$(new u(4)),Math.fround(1500),"kW",Math.fround(10),Math.fround(25)),new X("Baterija",t.battery.capacity,Math.fround(340),"kWh",Math.fround(10),Math.fround(15)),(r=Math.fround(1400),a=Math.fround(15),o=Math.fround(100),new X("HE",(s=t.hydropowerExtraSavaGWh,s[0]?s[1]:Math.fround(0)),r,"kW",a,o)),(i=Math.fround(50),h=Math.fround(15),l=Math.fround(100),new X("\u010CHE",(M=t.pumpedStorage,M[0]?M[1].capacity:Math.fround(0)),i,"kWh",h,l)),(b=Math.fround(5e3),c=Math.fround(20),w=Math.fround(60),new X("NEK2",(S=t.extraNuclearMW,S[0]?S[1]:Math.fround(0)),b,"kW",c,w))]),oe=Se([new X("Premog",C(new u(2)),Math.fround(60),"MWh",Math.fround(1),Math.fround(1)),new X("Plin",C(new u(1)),Math.fround(80),"MWh",Math.fround(1),Math.fround(1)),new X("NE",C(new u(5)),Math.fround(35),"MWh",Math.fround(1),Math.fround(1)),new X("Uvoz",C(new u(13)),Math.fround(70),"MWh",Math.fround(1),Math.fround(1))]),fe=A.tag===2?new X("Kuponi",(ke(n)-ke(e))*Math.fround(.0010000000474974513),Math.fround(80),"T",Math.fround(1),Math.fround(1)):A.tag===1?new X("Kuponi",ke(n)*Math.fround(.0010000000474974513),Math.fround(80),"T",Math.fround(1),Math.fround(1)):new X("Kuponi",ke(n)*Math.fround(.0010000000474974513),Math.fround(0),"T",Math.fround(1),Math.fround(1)),z=gt(q,gt(oe,dt(fe))),W=ot(d=>lt(d),q,{GetZero:()=>0,Add:(d,y)=>d+y}),H=ot(d=>Bt(d),z,{GetZero:()=>0,Add:(d,y)=>d+y}),j=T(P`<tr><th>Investicija</th><th>Kapaciteta [M]</th><th>Cena [€]</th><th>na</th><th>Strošek [M€]</th><th>Amortizacija [let]</th><th>Letno [M€]</th></tr>`),E=d=>{let y,v;const N=d.repay===Math.fround(1)?T(P`<td></td><td></td>`):T(P`
        <td>${y=lt(d),k(x("%.1f"))(y)}</td>
        <td>${k(x("%.0f"))(d.repay)}</td>
        `);return T(P`
        <tr>
        <td>${d.name}</td>
        <td>${k(x("%.1f"))(d.capacity)}</td>
        <td>${k(x("%.1f"))(d.price)}</td>
        <td>${d.unit}</td>
        ${N}
        <td>${v=Bt(d),k(x("%.1f"))(v)}</td>
        </tr>
        `)};return T(P`
    <h3>Stroški</h3>
    <p>
    <i>Predpostavke: Fotovoltaika se gradi na strehah individualnih in gospodarskih objektov (brez uničevanja narave),
    baterije pa 'utility scale' (cene kot v Avstraliji).</i>
    </p>
    <table class="energy-table">
    <thead>${j}</thead>
    <tbody>
    ${le(d=>k(x("i.%d"))(d[0]),d=>E(d[1]),st(q))}
    <tr>
    <th>Poraba</th><th>Energija [GWh]</th><td colspan=5 style="text-align:left"><i>(razlika glede na 2020)</i></td>
    </tr>
    ${le(d=>k(x("c.%d"))(d[0]),d=>E(d[1]),st(oe))}
    <tr>
    <th>CO2</th><th>Izpusti [kT]</th><td colspan=5 style="text-align:left"><i></i></td>
    </tr>
    ${E(fe)}
    <tr>
    <th>Skupaj</th>
    <td></td>
    <td></td>
    <td></td>
    <td>${k(x("%.1f"))(W)}</td>
    <td></td>
    <td>${k(x("%.1f"))(H)}</td>
    </tr>
    <tbody>
    </table>
    <br/>
    ${T(P`
    <p>Prikaz obračuna CO2 kuponov:
    ${le(d=>"{cr}",d=>{const y=d.tag===1?"absolutna cena":d.tag===2?"izpusti relativno na 2020":"brez CO2 kuponov";return T(P`
        <input type="radio" id="${d}" name="coupons" value="${d}"
        ?checked=${ye(d,A)}
        @click=${v=>{Me(x("setCoupon %A -> %A"))(A)(d),f[1](d)}} >
        <label for="${d}">${y}</label>
        `)},Xn())}
    `)}
    <p>
    Izračun dodatnega mesečnega stroška na gospodinjstvo (860.000 gospodinjstev): ${m=H/Math.fround(.8600000143051147)/Math.fround(12),k(x("%.1f"))(m)} €.
    </p>
    `)});function Rt(t){let e=0,n=2147483647;const r=rt(G(()=>_e(a=>(e=Ie((o,s)=>L(o,s),e,a.data.length)|0,n=ge((o,s)=>L(o,s),n,a.data.length)|0,a.data),t)));return e===n?Ze(e,a=>{let o=Math.fround(0);for(let s=0;s<=r.length-1;s++){const i=r[s];o=o+i[a]}return o},Float32Array):Ze(e,a=>{let o=Math.fround(0);for(let s=0;s<=r.length-1;s++){const i=r[s];i.length>a&&(o=o+i[a])}return o},Float32Array)}function ta(t){const e=bt(m=>{const f=m.kind;return((Fn(f)?!0:Nn(f))?!0:zt(f))?!0:ye(f,new u(5))},Gn(t)),n=e[0],r=e[1];let a;const o=Rt(n);a=new V(new u(11),ot(m=>Te(m.capacityMW,Math.fround(0)),n,{GetZero:()=>0,Add:(m,f)=>m+f}),o,ie(o,{GetZero:()=>0,Add:(m,f)=>m+f}));const s=bt(m=>zt(m.kind),n),i=s[0];let h;const l=Rt(i);h=new V(new u(9),void 0,l,ie(l,{GetZero:()=>0,Add:(m,f)=>m+f}));let M;const b=dn(m=>ye(m.kind,new u(12)),r),c=a.data,w=new Float32Array(c.length),S=new Float32Array(c.length);for(let m=0;m<=c.length-1;m++){const f=b.data[m]-c[m];f>Math.fround(0)?w[m]=f:S[m]=-f}return M=Se([new V(new u(13),void 0,w,ie(w,{GetZero:()=>0,Add:(m,f)=>m+f})),new V(new u(14),void 0,S,ie(S,{GetZero:()=>0,Add:(m,f)=>m+f}))]),Nt(t.year,t.isSimulated,ft(G(()=>J(ne(a),G(()=>J(ne(h),G(()=>J(i,G(()=>J(s[1],G(()=>J(M,G(()=>r)))))))))))))}const na=Pn(be(t=>(Me(`'${vt(t)}' -> ${it(t,[])}`),[vt(t),it(t,[])]),wt(zn())));function aa(t){let e,n;const r=Ye(na,t.kind);return new V(r,r.tag===5?(e=t.capacity,e!=null&&e>Math.fround(600)?(n=e,n*Math.fround(.5)):e):t.capacity,t.data,t.total)}function ua(){}function Ot(t){switch(t.tag){case 1:return"Plin";case 2:return"Premog";case 3:return"Sonce";case 4:return"Veter";case 5:return"NEK";case 6:return"Voda";case 7:return"\u0106HE";case 8:return"Smeti";case 9:return"Stati\u010Dna proizvodnja";case 10:return"Nefosilna proizvodnja";case 11:return"Skupaj";case 12:return"Poraba";case 13:return"Uvoz";case 14:return"Izvoz";case 15:return"Baterija";case 16:return"Nivo baterije";case 17:return"Nivo \u010CHE";case 18:return"Prese\u017Eek";default:return"Nafta"}}const Je=Se([new u(4),new u(3),new u(15)]),Qe=Se([new u(4),new u(3),new u(15),new u(2),new u(1),new u(5),new u(6),new u(13),new u(14),new u(18)]);function ra(t){return`${t.year}${t.isSimulated?"'":""}`}function oa(){return T(P`
    <tr>
    <th></th>
    <th colspan=${St(Je)}>Inštalirana moč [MW,MWh]</th>
    <th colspan=${St(Qe)}>Proizvodnja [GWh]</th>
    <th>Izpusti [T]</th>
    </tr>
    <tr>
    <th>Leto</th>
    ${le(t=>`${t}`,t=>T(P`<th>${Ot(t)}</th>`),Je)}
    ${le(t=>`${t}`,t=>T(P`<th>${Ot(t)}</th>`),Qe)}
    <th>CO2</th>
    </tr>
    `)}function sa(t){let e;return T(P`
    <tr class=${pn([["table-info",t.isSimulated]])}>
    <th>${ra(t)}</th>
    ${le(n=>`${n}`,n=>{let r,a;return T(P`<td>${r=ae(n,t.traces),r==null?ue():(a=Te(r.capacityMW,Math.fround(0)),k(x("%.0f"))(a))}</td>`)},Je)}
    ${le(n=>`${n}`,n=>{let r,a;return T(P`<td>${r=ae(n,t.traces),r==null?ue():(a=r.totalMWh/Math.fround(1e3),k(x("%.1f"))(a))}</td>`)},Qe)}
    <td>${e=ke(t),k(x("%.1f"))(e)}</td>
    </tr>
    `)}function ia(t,e){let n;const r=(a,o)=>{let s;const i=[a,o];let h,l,M;switch(i[0]!=null&&i[1]!=null?(h=0,l=i[1],M=i[0]):h=1,h){case 0:{const b=l/M;return b>Math.fround(2)?k(x("%.2fx"))(b):(s=Math.fround(100)*b,k(x("%.1f%%"))(s))}case 1:return ue()}};return T(P`
    <tr>
    <th>Delež</th>
    ${le(a=>`${a}`,a=>{let o;return T(P`<td>${o=a,r(Be(s=>s.capacityMW,ae(o,t.traces)),Be(s=>s.capacityMW,ae(o,e.traces)))}</td>`)},Je)}
    ${le(a=>`${a}`,a=>{let o;return T(P`<td>${o=a,r(ve(s=>s.totalMWh,ae(o,t.traces)),ve(s=>s.totalMWh,ae(o,e.traces)))}</td>`)},Qe)}
    <td>${n=Math.fround(100)*ke(e)/ke(t),k(x("%.1f%%"))(n)}</td>
    </tr>
    `)}const da=new hn("energy-app").Decorate(function(){this.init(l=>(l.useShadowDom=!1,Promise.resolve(void 0)));const t=Mt(I(this),`
        :host {
            display: block;
            height: 100%%;
            margin: auto;
        }
        :host.energy-sim {
            //padding: 2em;
            padding-top: 2em;
        }
        .energy-table {
            border: 1px solid black;
            border-collapse: collapse;
            td { textAlgn: right }
            text-align:right;
        }
        .energy-table td, .energy-table th {
            border: 1px solid black;
            padding: 0.25em 0.5em 0.25em 0.5em;
            text-align:right;
            //color: red;
        }
        .energy-table th {
            text-align: center;
        }
    `);let e;const n=Ln();e=I(this).useState(()=>n);const r=e[0],a=I(this).useState(ht),o=a[0],s=a[1];I(this).useEffectOnce(()=>{const l=2020;return fetch(`energy-traces-${l}.json`).then(b=>b.json()).then(b=>{const c=ta(Nt(l,!1,be(w=>aa(w),b)));s(Se([c,Dt(c,r)]))}),fn()});const i=T(P`
    <h5>${"Opombe:"}</h5>
    <ul class="list" style="padding-left:2em">
    ${le(l=>mn(l[0]),l=>T(P`<li>${l[1]}</li>`),st(["Za obstoje\u010Do NE Kr\u0161ko se \u0161teje samo slovenski del proizvodnje. Za toliko je zni\u017Ean tudi izvoz.","Proizvodnja baterije v tabeli je prikazana kot priskevek baterije k letni proizvodnji: 90% shranjene energije, ki jo baterija vrne v omre\u017Eje.","Kadar je energije v izobilju, se po vrsti: zaustavi premog, plin, polni baterijo, zmanj\u0161a uvoz, preostanek se \u0161teje kot prese\u017Eek.","Avtomobili skupaj delujejo kot ena velika baterija: lastniki avtomobile vsak dan napolnijo do 75%, oz. do 100% kadar je elektrike v izobilju.","Ker nimamo specifi\u010Dnih podatkov za reko Savo, nove HE na Savi simuliramo kot da bi za enak faktor pove\u010Dali mo\u010D vseh slovenskih HE neglede na reko."]))}
    </ul>
    `),h=ve(l=>l.year,Mn(o));return T(P`
    <div class="energy-sim ${t} container">
    <div class="row">
    <h2>Scenariji prehoda na trajnostne vire energije</h2>
    <p>Simulacija elektroenergetskega sistema na realnih urnih podatkih donosa sonca in vetra za leto ${h}
    <br>ob predpostaviki spremenjenih kapacitet vetrnih, solarnih, nuklearnih elektrarn in shranjavanja energije.
    </p>
    </div>
    <div class="row">
    <h4>Parametri simulacije</h4>
    ${Un(l=>{if(!ye(l,r)&&(e[1](l),!Y(o))){const M=te(o);Me(x("running simulation...")),s(Se([M,Dt(M,l)]))}},r)}
    </div>
    <div class="energy-result row">
    <h4>Rezultat</h4>
    <table class="energy-table table table-bordered">
    <thead>
    ${oa()}
    </thead>
    <tbody>
    ${le(l=>`${l.year}${l.isSimulated}`,l=>sa(l),o)}
    ${Y(o)?ue():Y(ee(o))?ue():Y(ee(ee(o)))?ia(te(o),te(ee(o))):ue()}
    </tbody>
    </table>
    ${i}
    </div>
    <div>
    ${Y(o)?ue():Y(ee(o))?ue():Y(ee(ee(o)))?ea(r,te(o),te(ee(o))):ue()}
    </div>
    <div class="row">
    ${Y(o)?ue():Y(ee(o))?ue():Jn(r,te(o),te(ee(o)))}
    </div>
    </div>
    `)});export{da as EnergySimulationApp,Ot as colName,Qe as dataColumns,ra as getYsYearName,Je as installedColumns,ua as register,ia as renderDeltaRow,oa as renderTraceHeader,sa as renderTraceRow};
