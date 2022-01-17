import{s as Vt,v as Z,i as Bt,F as Ht,f as Zt,g as ze,e as he,j as Ot,m as _e,a as Rt,t as Kt,c as qt,b as Ut,L as qe,d as nt,R as ge,h as H,k as U,l as Y,o as Yt,n as rt,p as Jt,q as Qt,U as Ue,r as at,u as E,w as Xt,x as ee,y as je,z as ue,A as k,B as de,C as D,D as be,E as ot,G as Me,H as en,I as st,J as it,K as j,M as $,N as ae,O as T,P as I,Q as J,S as Ye,T as Ne,V as We,W as O,X as Q,Y as tn,Z as ct,_ as lt,$ as ut,a0 as nn,a1 as ve,a2 as rn,a3 as dt,a4 as pt,a5 as ft,a6 as pe,a7 as an,a8 as te,a9 as Ge,aa as Je,ab as on,ac as sn,ad as ht,ae as mt,af as cn,ag as ln,ah as un,ai as Qe}from"./index.76cb4ab1.js";import"./vendor.66da8c77.js";class yt{constructor(e,n){this.k=e,this.v=n}}function De(t,e){return new yt(t,e)}function L(t){return t.k}function R(t){return t.v}class A extends yt{constructor(e,n,a,r,o){super(e,n);this.left=a,this.right=r,this.h=o|0}}function Le(t,e,n,a,r){return new A(t,e,n,a,r)}function V(t){return t.left}function B(t){return t.right}function we(t){return t.h}function Se(){}function _t(t,e){e:for(;;){const n=t,a=e;if(a!=null){const r=a;if(r instanceof A){t=_t(n+1,V(r)),e=B(r);continue e}else return n+1|0}else return n|0}}function dn(t){return _t(0,t)}function ne(t,e,n,a){let r;const o=t;if(o!=null){const i=o;r=i instanceof A?we(i):1}else r=0;let s;const c=a;if(c!=null){const i=c;s=i instanceof A?we(i):1}else s=0;const f=(r<s?s:r)|0;return f===0?De(e,n):Le(e,n,t,a,f+1)}function wt(t,e,n,a){let r,o,s,c,f;const i=t;if(i!=null){const l=i;f=l instanceof A?we(l):1}else f=0;let h;const w=a;if(w!=null){const l=w;h=l instanceof A?we(l):1}else h=0;if(h>f+2){const l=Z(a);if(l instanceof A)if(r=V(l),(r!=null?(o=r,o instanceof A?we(o):1):0)>f+1){const _=Z(V(l));if(_ instanceof A)return ne(ne(t,e,n,V(_)),L(_),R(_),ne(B(_),L(l),R(l),B(l)));throw new Error("internal error: Map.rebalance")}else return ne(ne(t,e,n,V(l)),L(l),R(l),B(l));else throw new Error("internal error: Map.rebalance")}else if(f>h+2){const l=Z(t);if(l instanceof A)if(s=B(l),(s!=null?(c=s,c instanceof A?we(c):1):0)>h+1){const _=Z(B(l));if(_ instanceof A)return ne(ne(V(l),L(l),R(l),V(_)),L(_),R(_),ne(B(_),e,n,a));throw new Error("internal error: Map.rebalance")}else return ne(V(l),L(l),R(l),ne(B(l),e,n,a));else throw new Error("internal error: Map.rebalance")}else return ne(t,e,n,a)}function $e(t,e,n,a){if(a!=null){const r=a,o=t.Compare(e,L(r))|0;return r instanceof A?o<0?wt($e(t,e,n,V(r)),L(r),R(r),B(r)):o===0?Le(e,n,V(r),B(r),we(r)):wt(V(r),L(r),R(r),$e(t,e,n,B(r))):o<0?Le(e,n,Se(),a,2):o===0?De(e,n):Le(e,n,a,Se(),2)}else return De(e,n)}function gt(t,e,n){e:for(;;){const a=t,r=e,o=n;if(o!=null){const s=o,c=a.Compare(r,L(s))|0;if(c===0)return Vt(R(s));if(s instanceof A){t=a,e=r,n=c<0?V(s):B(s);continue e}else return}else return}}function pn(t,e,n){const a=gt(t,e,n);if(a==null)throw new Error;return Z(a)}function fn(t,e,n){e:for(;;){const a=t,r=e,o=n;if(o!=null){const s=o,c=a.Compare(r,L(s))|0;if(s instanceof A)if(c<0){t=a,e=r,n=V(s);continue e}else{if(c===0)return!0;t=a,e=r,n=B(s);continue e}else return c===0}else return!1}}function bt(t,e){e:for(;;){const n=t,a=e;if(a!=null){const r=a;if(r instanceof A){bt(n,V(r)),n(L(r),R(r)),t=n,e=B(r);continue e}else n(L(r),R(r))}break}}function hn(t,e){bt(t,e)}function mn(t,e,n){let a=n;hn((r,o)=>{e[a]=[r,o],a=a+1|0},t)}function yn(t,e){return Zt((n,a)=>$e(t,a[0],a[1],n),Se(),e)}function _n(t,e,n){e:for(;;){const a=t,r=e,o=n;if(o["System.Collections.IEnumerator.MoveNext"]()){const s=o["System.Collections.Generic.IEnumerator`1.get_Current"]();t=a,e=$e(a,s[0],s[1],r),n=o;continue e}else return r}}function Mt(t,e){let n=Se();for(let a=0;a<=e.length-1;a++){const r=e[a];n=$e(t,r[0],r[1],n)}return n}function wn(t,e){if(Bt(e))return Mt(t,e);if(e instanceof Ht)return yn(t,e);{const n=ze(e);try{return _n(t,Se(),n)}finally{n.Dispose()}}}class gn extends ge{constructor(e,n){super();this.stack=e,this.started=n}}function vt(t){e:for(;;){const e=t;if(H(e))return rt();{const n=U(e),a=Y(e);if(a!=null){const r=a;if(r instanceof A){t=Yt([V(r),De(L(r),R(r)),B(r)],n);continue e}else return e}else{t=n;continue e}}}}function St(t){return new gn(vt(Rt(t)),!1)}function bn(){throw new Error("enumeration not started")}function Mn(){throw new Error("enumeration already finished")}function $t(t){if(t.started){const e=t.stack;if(H(e))return Mn();if(Y(e)!=null){const n=Y(e);if(n instanceof A)throw new Error("Please report error: Map iterator, unexpected stack for current");return[L(n),R(n)]}else throw new Error("Please report error: Map iterator, unexpected stack for current")}else return bn()}function vn(t){if(t.started){const e=t.stack;if(H(e))return!1;if(Y(e)!=null){if(Y(e)instanceof A)throw new Error("Please report error: Map iterator, unexpected stack for moveNext");return t.stack=vt(U(e)),!H(t.stack)}else throw new Error("Please report error: Map iterator, unexpected stack for moveNext")}else return t.started=!0,!H(t.stack)}function xt(t){let e=St(t);return{["System.Collections.Generic.IEnumerator`1.get_Current"](){return $t(e)},["System.Collections.IEnumerator.get_Current"](){return $t(e)},["System.Collections.IEnumerator.MoveNext"](){return vn(e)},["System.Collections.IEnumerator.Reset"](){e=St(t)},Dispose(){}}}class Ae{constructor(e,n){this.comparer=e,this.tree=n}GetHashCode(){return Cn(this)|0}Equals(e){const n=this;if(e instanceof Ae){const a=ze(n);try{const r=ze(e);try{const o=()=>{const s=a["System.Collections.IEnumerator.MoveNext"]();if(s===r["System.Collections.IEnumerator.MoveNext"]())if(s){const c=a["System.Collections.Generic.IEnumerator`1.get_Current"](),f=r["System.Collections.Generic.IEnumerator`1.get_Current"]();return he(c[0],f[0])&&he(c[1],f[1])?o():!1}else return!0;else return!1};return o()}finally{r.Dispose()}}finally{a.Dispose()}}else return!1}toString(){return"map ["+Ot("; ",_e(n=>Jt("({0}, {1})",n[0],n[1]),this))+"]"}get[Symbol.toStringTag](){return"FSharpMap"}toJSON(e){const n=this;return Array.from(n)}GetEnumerator(){return xt(this.tree)}[Symbol.iterator](){return Kt(this.GetEnumerator())}["System.Collections.IEnumerable.GetEnumerator"](){return xt(this.tree)}CompareTo(e){const n=this;if(e instanceof Ae)return qt((a,r)=>{const o=n.comparer.Compare(a[0],r[0])|0;return(o!==0?o:Qt(a[1],r[1]))|0},n,e)|0;throw new Error("not comparable\\nParameter name: obj")}["System.Collections.Generic.ICollection`1.Add2B595"](e){throw new Error("Map cannot be mutated")}["System.Collections.Generic.ICollection`1.Clear"](){throw new Error("Map cannot be mutated")}["System.Collections.Generic.ICollection`1.Remove2B595"](e){throw new Error("Map cannot be mutated")}["System.Collections.Generic.ICollection`1.Contains2B595"](e){const n=this;return Ct(n,e[0])&&he(Be(n,e[0]),e[1])}["System.Collections.Generic.ICollection`1.CopyToZ2E171D71"](e,n){mn(this.tree,e,n)}["System.Collections.Generic.ICollection`1.get_IsReadOnly"](){return!0}["System.Collections.Generic.ICollection`1.get_Count"](){return Xe(this)|0}["System.Collections.Generic.IReadOnlyCollection`1.get_Count"](){return Xe(this)|0}get size(){return Xe(this)|0}clear(){throw new Error("Map cannot be mutated")}delete(e){throw new Error("Map cannot be mutated")}entries(){return _e(n=>[n[0],n[1]],this)}get(e){return Be(this,e)}has(e){return Ct(this,e)}keys(){return _e(n=>n[0],this)}set(e,n){throw new Error("Map cannot be mutated")}values(){return _e(n=>n[1],this)}forEach(e,n){const a=this;Ut(r=>{e(r[1],r[0],a)},a)}}function Ve(t,e){return new Ae(t,e)}(()=>{Ae.empty=Ve(qe(),Se())})();function Sn(t){const e=qe();return Ve(e,wn(e,t))}function $n(t,e,n){return Ve(t.comparer,$e(t.comparer,e,n,t.tree))}function Be(t,e){return pn(t.comparer,e,t.tree)}function Xe(t){return dn(t.tree)}function Ct(t,e){return fn(t.comparer,e,t.tree)}function xn(t,e){return gt(t.comparer,e,t.tree)}function Cn(t){const e=(r,o)=>(r<<1)+o+631;let n=0;const a=ze(t);try{for(;a["System.Collections.IEnumerator.MoveNext"]();){const r=a["System.Collections.Generic.IEnumerator`1.get_Current"]();n=e(n,nt(r[0]))|0,n=e(n,nt(r[1]))|0}}finally{a.Dispose()}return n|0}function oe(t,e,n){return $n(n,t,e)}function se(t,e){return xn(e,t)}function kn(t){return Sn(t)}function jn(t){const e=qe();return Ve(e,Mt(e,t))}class d extends Ue{constructor(e,...n){super();this.tag=e|0,this.fields=n}cases(){return["Oil","Gas","Coal","Solar","Wind","Nuclear","Hydro","HydroStorage","Waste","StaticProd","NonFosilProd","TotalProd","Load","Import","Export","Battery","BatteryLevel","PumpedLevel","Excess"]}}function kt(){return Xt("Shared.Types.TraceKind",[],d,()=>[[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[]])}function An(t){switch(t.tag){case 4:case 3:return!0;default:return!1}}function En(t){switch(t.tag){case 0:case 1:case 2:return!0;default:return!1}}function jt(t){switch(t.tag){case 6:case 7:case 8:return!0;default:return!1}}class z extends ge{constructor(e,n,a,r){super();this.kind=e,this.capacity=n,this.data=a,this.total=r}}class At extends ge{constructor(e,n,a){super();this.year=e|0,this.isSimulated=n,this.traces=a}}function ie(t,e){return Be(t.traces,e)}function Et(t,e,n){return new At(t,e,kn(_e(a=>[a.kind,a],n)))}function Pn(t){return at(E(()=>_e(e=>e[1],t.traces)))}class He extends Ue{constructor(e,...n){super();this.tag=e|0,this.fields=n}cases(){return["AbsoluteMW","PercentCapacity"]}}class Ze extends ge{constructor(e,n,a){super();this.capacity=e,this.power=n,this.efficiencyPercent=a}}function Pt(t){const e=t.power;return e.tag===1?t.capacity*e.fields[0]*Math.fround(.009999999776482582):e.fields[0]}function Tn(t){const e=t.power;return e.tag===1?e.fields[0]:e.fields[0]/t.capacity*Math.fround(100)}class Tt extends ge{constructor(e,n,a,r,o,s,c){super();this.installedSolarMW=e,this.installedWindMW=n,this.battery=a,this.extraNuclearMW=r,this.stopCurrentNuclear=o,this.pumpedStorage=s,this.electricCarsPercent=c}}function In(){return new Tt(Math.fround(278),Math.fround(3),new Ze(Math.fround(0),new He(1,Math.fround(25)),Math.fround(90)),[!1,Math.fround(1100)],!1,[!1,new Ze(Math.fround(8e3),new He(0,Math.fround(400)),Math.fround(70))],Math.fround(0))}function Fn(){return In()}function It(t,e,n){const a=Math.sqrt(t.efficiencyPercent*.01),r=Pt(t);ue(k("storage efficiency=%f, maxPower=%f"))(a)(r);let o=Math.fround(0);return s=>c=>f=>{const i=s(c,f);if(i>=Math.fround(0)){const h=de((w,l)=>D(w,l),de((w,l)=>D(w,l),r,(t.capacity-o)*a),i);return o=o+h/a,e[c]=o,i-h}else{const h=de((w,l)=>D(w,l),de((w,l)=>D(w,l),r,o*a),-i);return o=o-h/a,e[c]=o,n[c]=h,i+h}}}function zn(t,e,n){if(t<Math.fround(2))return a=>r=>o=>a(r,o);{const a=15e3/365/100*22*t,r=a/1e3/24,o=t*Math.fround(60)*Math.fround(.0010000000474974513),s=o*Math.fround(.699999988079071),c=a/1e3;ue(k("cars: %.3f<kWh> daily, %.3f<MW> hourly, %.3f<MWh> total battery capacity"))(c)(r)(o);let f=(s*Math.fround(3)+o)/Math.fround(4);return i=>h=>w=>{f=f-r;let l;const _=s-f;l=Me((F,x)=>D(F,x),Math.fround(0),_);let g;const m=o-f;g=Me((F,x)=>D(F,x),Math.fround(0),m);const p=i(h,w-l),M=Me((F,x)=>D(F,x),l,de((F,x)=>D(F,x),p,g));return f=f+M,e[h]=f,n[h]=M,p-M}}}function Ft(t,e,n){let a;if(t==null)a=r=>e[r];else{const r=t;a=o=>r}return r=>o=>s=>{const c=r(o,s-e[o]);if(c>=Math.fround(0))return n[o]=Math.fround(0),c;{const f=de((i,h)=>D(i,h),a(o),-c);return n[o]=f,c+f}}}function Nn(t,e,n,a,r,o){const s=a(r,o);if(s>=Math.fround(0)){const c=de((f,i)=>D(f,i),t[r],s);return n[r]=t[r]-c,s-c}else return n[r]=t[r]-s,Math.fround(0)}function Wn(t,e,n,a){const r=e(n,a);return r>=Math.fround(0)?(t[n]=r,Math.fround(0)):(t[n]=Math.fround(0),r)}function Gn(t,e){return e}function Dn(t,e,n){return t(e,n)}function zt(t,e){let n,a,r,o,s,c,f,i;const h=ie(t,new d(2)),w=ie(t,new d(1)),l=ie(t,new d(13)),_=ie(t,new d(14)),g=ie(t,new d(4)),m=ie(t,new d(3)),p=ie(t,new d(5)),M=g.data.length|0,F=e.installedWindMW/Z(g.capacity),x=e.installedSolarMW/Z(m.capacity);let re;const fe=[e.extraNuclearMW,e.stopCurrentNuclear];if(fe[0][0]){const y=fe[0][1],u=Z(p.capacity),le=fe[1]?y/u:(u+y)/u,ke=new z(p.kind,u*le,je(ye=>le*ye,p.data,Float32Array),p.total*le),Ie=ke.data[100],Fe=p.data[100];ue(k("kNuclear = %f (current capacity=%f) d[100]=%f->%f"))(le)(u)(Fe)(Ie),re=ke}else re=fe[1]?new z(p.kind,Math.fround(0),new Float32Array(M),Math.fround(0)):p;const me=new z(g.kind,Z(g.capacity)*F,je(y=>F*y,g.data,Float32Array),g.total*F),N=new z(m.kind,Z(m.capacity)*x,je(y=>x*y,m.data,Float32Array),m.total*x),v=new Float32Array(M),W=new Float32Array(M),b=new Float32Array(M),C=new Float32Array(M),G=new Float32Array(M),S=new Float32Array(M),P=new Float32Array(M),K=new Float32Array(M),q=new Float32Array(M),X=new Float32Array(M);let Ee;const Pe=Ft(h.capacity,h.data,v),xe=Ft(void 0,w.data,W),Ke=It(e.battery,b,C);let Ce;const Te=zn(e.electricCarsPercent*Math.fround(1e4),G,S)(be(2,Pe(be(2,xe(be(2,(n=e.pumpedStorage,n[0]?It(n[1],q,X):y=>u=>le=>Dn(y,u,le))(be(2,Ke((y,u)=>Gn(y,u))))))))));Ce=y=>u=>Nn(l.data,_.data,K,be(2,Te),y,u),Ee=y=>u=>Wn(P,be(2,Ce),y,u);for(let y=0;y<=M-1;y++){const u=Ee(y)(me.data[y]+N.data[y]+re.data[y]-(g.data[y]+m.data[y]+p.data[y]));u>Math.fround(.0010000000474974513)&&ot(k("mismatching balance of %f for datapoint %d"))(u)(y)}return new At(t.year,!0,(a=(r=(o=(s=(c=(f=(i=oe(new d(5),re,oe(new d(3),N,oe(new d(4),me,t.traces))),oe(new d(2),new z(h.kind,h.capacity,v,ee(v,{GetZero:()=>0,Add:(y,u)=>y+u})),i)),oe(new d(1),new z(w.kind,w.capacity,W,ee(W,{GetZero:()=>0,Add:(y,u)=>y+u})),f)),oe(new d(16),new z(new d(16),e.battery.capacity,b,ee(b,{GetZero:()=>0,Add:(y,u)=>y+u})),c)),e.pumpedStorage[0]?oe(new d(17),new z(new d(17),e.pumpedStorage[1].capacity,q,ee(q,{GetZero:()=>0,Add:(y,u)=>y+u})),s):s),oe(new d(15),new z(new d(15),e.battery.capacity,C,ee(C,{GetZero:()=>0,Add:(y,u)=>y+u})),o)),oe(new d(18),new z(new d(18),void 0,P,ee(P,{GetZero:()=>0,Add:(y,u)=>y+u})),r)),oe(new d(13),new z(l.kind,l.capacity,K,ee(K,{GetZero:()=>0,Add:(y,u)=>y+u})),a)))}class Nt extends Ue{constructor(e,...n){super();this.tag=e|0,this.fields=n}cases(){return["Ok","Error"]}}function Ln(t,e){if(t!=null&&/\S/.test(t)){const n=+t.replace("_","");if(!Number.isNaN(n))return e.contents=n,!0}return!1}function ce(t){const e=new en(0);if(Ln(t,e))return e.contents;throw new Error("Input string was not in a correct format.")}function Vn(){return t=>t}const Bn=new st().Decorate(function(t,e){let n;const a=Vn()(`
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
        `);n=it(j(this),a);let r;const o=$(ae("%.0f%P()",[e.installedSolarMW]));r=j(this).useState(()=>o);const s=r[0];let c;const f=$(ae("%.0f%P()",[e.installedWindMW]));c=j(this).useState(()=>f);const i=c[0];let h;const w=$(ae("%.0f%P()",[e.battery.capacity]));h=j(this).useState(()=>w);const l=h[0];let _;const g=$(ae("%.0f%P()",[Tn(e.battery)]));_=j(this).useState(()=>g);const m=_[0];let p;const M=$(ae("%.0f%P()",[e.battery.efficiencyPercent]));p=j(this).useState(()=>M);const F=j(this).useState(()=>e.extraNuclearMW[0]),x=F[0];let re;const fe=$(ae("%.0f%P()",[e.extraNuclearMW[1]]));re=j(this).useState(()=>fe);const me=re[0],N=j(this).useState(()=>e.extraNuclearMW[0]),v=N[0],W=j(this).useState(()=>e.pumpedStorage[0]),b=W[0];let C;const G=$(ae("%.0f%P()",[e.pumpedStorage[1].capacity]));C=j(this).useState(()=>G);const S=C[0];let P;const K=$(ae("%.0f%P()",[Pt(e.pumpedStorage[1])]));P=j(this).useState(()=>K);const q=P[0];let X;const Ee=$(ae("%.0f%P()",[e.pumpedStorage[1].efficiencyPercent]));X=j(this).useState(()=>Ee);const Pe=X[0];let xe;const Ke=$(ae("%.0f%P()",[e.electricCarsPercent]));xe=j(this).useState(()=>Ke);const Ce=xe[0],Te=j(this).useState(()=>""),y=Te[1];return ue(k("buildNuclear=%A"))(x),T(I`
    <div class="${n}">
    <form class="energy-form" action="#">
    <h7>Simulirana inštalirana moč:</h7>
    <br/>
    <i class="ico fas fa-sun"></i>
    <input type="number" id="solar" name="solar" value="${s}" size="6" min=0 step=100 @change=${u=>{r[1](J(u.target))}} />
    <label for="solar">MW fotopanelov</label><br/>
    <i class="ico fas fa-wind"></i>
    <input type="number" id="wind" name="wind" value="${i}" size="6" min=0 step=50 @change=${u=>{c[1](J(u.target))}} />
    <label for="wind">MW vetrnic</label><br/>
    <i class="ico fas fa-car-battery"></i>
    <input type="number" id="battery" name="battery" value="${l}" size="6" step=50 min=0 @change=${u=>{h[1](J(u.target))}} />
    <label for="battery">MWh baterij</label>  <!-- z največjo močjo polnjenje/praznjenja</label>
    <input type="number" id="batteryPow" name="batteryPow" value="${m}" size="3" step=1 min=1 @change=${u=>{_[1](J(u.target))}} />
    <label for="batteryPow">% MW/MWh kapacitete</label>  -->
    <br/>
    <i class="ico fas fa-water"></i>
    <input type="checkbox" id="buildPumped" name="buildPumped" value="${b}" @change=${u=>{J(u.target),W[1](!b)}}>
    <label for="buildPumped">Zgradimo ČHE Kozjak</label>
    <span style="visibility:${b?"visible":"hidden"}">
    <label for="pumped"> s kapaciteto</label>
    <input type="number" id="pumped" name="pumped" value="${S}" size="6" step=500 min=0 @change=${u=>{C[1](J(u.target))}} />
    <label for="pumped">MWh, močjo</label>
    <input type="number" id="pumpedPow" name="pumpedPow" value="${q}" size="6" step=20 min=0 @change=${u=>{P[1](J(u.target))}} />
    <label for="pumpedPow">MW in učinkovitostjo</label>
    <input type="number" id="pumpedEfficiency" pumpedEfficiency="pumped" value="${Pe}" size="6" step=1 min=0 @change=${u=>{X[1](J(u.target))}} />
    <label for="pumpedEfficiency">%</label>
    </span>
    <br/>
    <i class="ico fas fa-atom"></i>
    <input type="checkbox" id="buildNuclear" name="buildNuclear" value="${x}" @change=${u=>{J(u.target),F[1](!x)}}>
    <label for="buildNuclear">Zgradimo novo nuklearko </label>
    <span style="visibility:${x?"visible":"hidden"}">
    <label for="buildNuclear"> z nazivno močjo</label>
    <input type="number" id="nuclear" name="nuclear" value="${me}" size="6" step=100 min=0 @change=${u=>{re[1](J(u.target))}} style="text-align:right;" />
    <label for="nuclear">MW</label>
    </span>
    <br/>
    <i class="ico fas fa-times-circle"></i>
    <input type="checkbox" id="stopCurrentNuclear" name="stopCurrentNuclear" value="${v}" @change=${u=>{J(u.target),N[1](!v)}}>
    <label for="stopCurrentNuclear">Ugasnemo obstoječo nuklearko</label>
    <br/>
    <i class="ico fas fa-car"></i>
    <input type="number" id="electricCars" name="electricCars" value="${Ce}" size="6" min=0 step=5 @change=${u=>{xe[1](J(u.target))}} style="text-align:right;"/>
    <label for="electricCars">% avtomobilov se vozi na elektriko</label><br/>
    <hr/>
    <i class="ico fas fa-fw"></i>
    <input type="button" value="Izračunaj" @click=${u=>{let le,ke,Ie,Fe;console.log("submit:",u);let ye;try{ye=new Nt(0,(le=ce(s),ke=ce(i),Ie=new Ze(ce(l),new He(1,ce(m)),ce(p[0])),Fe=[b,new Ze(ce(S),new He(0,ce(q)),ce(Pe))],new Tt(le,ke,Ie,[x,ce(me)],v,Fe,ce(Ce))))}catch(Lt){ye=new Nt(1,Lt.message)}return ue(k("submit: %A"))(ye),ye.tag===1?y(Te[0]):(y(""),t(ye.fields[0])),u.preventDefault(),!1}} >
    </form>
    </div>
    <p/>
    `)});function Hn(t,e,n){let a,r,o,s,c,f,i,h,w,l;const _=(v,W)=>{const b=ie(v,W).data,C=new Float32Array(~~((b.length+1)/24));let G=b[0];for(let S=0;S<=b.length-1;S++){const P=~~(S/24)|0,K=b[S]*Math.fround(.0010000000474974513)+C[P];G=Me((q,X)=>D(q,X),G,K),C[P]=K}return[C,G]};let g,m;const p=[(a=se(new d(16),n.traces),a!=null?he(a.capacity,void 0)?void 0:a!=null?Z(a.capacity)===Math.fround(0)?void 0:a!=null?(r=a,[r.data,r.capacity]):(()=>{throw new Error("Match failure")})():a!=null?(r=a,[r.data,r.capacity]):(()=>{throw new Error("Match failure")})():void 0),(o=se(new d(17),n.traces),o!=null?he(o.capacity,void 0)?void 0:o!=null?Z(o.capacity)===Math.fround(0)?void 0:o!=null?(s=o,[s.data,s.capacity]):(()=>{throw new Error("Match failure")})():o!=null?(s=o,[s.data,s.capacity]):(()=>{throw new Error("Match failure")})():void 0)];if(p[0]==null)m=p[1]==null?void 0:(c=p[1],c);else if(p[1]!=null){const v=p[0][1],W=p[0][0],b=p[1][1],C=p[1][0],G=Ne(v,Math.fround(0))+Ne(b,Math.fround(0));m=[We(W.length,S=>W[S]+C[S],Float32Array),G]}else m=p[0];if(m==null)g=void 0;else{const v=m[0],W=Z(m[1]),b=new Float32Array(~~((v.length+1)/24)),C=We(~~((v.length+1)/24),S=>Math.fround(34028234663852886e22),Float32Array),G=new Float32Array(~~((v.length+1)/24));for(let S=0;S<=v.length-1;S++){const P=~~(S/24)|0,K=v[S]/W*Math.fround(100);C[P]=de((q,X)=>D(q,X),C[P],K),G[P]=Me((q,X)=>D(q,X),G[P],K),b[P]=b[P]+K/Math.fround(24)}g=[b,C,G]}const M=_(n,new d(3)),F=_(n,new d(4)),x=_(n,new d(6)),re=_(e,new d(2)),fe=_(n,new d(2)),me=_(n,new d(18)),N=new Date(`${e.year}-01-01 0:0:0`).getTime();return f={text:"Dnevne krivulje"},i={},h={zoomType:"x"},w={type:"datetime"},l=Ye(E(()=>O(Q({title:{text:"Proizvodnja GWh"}}),E(()=>g!=null?Q({max:100,min:0,opposite:!0,title:{text:"Stanje baterije+\u010CHE %"}}):ct())))),{chart:h,plotOptions:i,series:Ye(E(()=>O(Q({data:x[0],name:"Voda",pointInterval:864e5,pointStart:N,yAxis:0}),E(()=>O(Q({color:"#888",data:re[0],name:`Premog ${e.year}`,pointInterval:864e5,pointStart:N,yAxis:0}),E(()=>O(Q({data:fe[0],name:"Premog simuliran",pointInterval:864e5,pointStart:N,yAxis:0}),E(()=>O(Q({data:F[0],name:"Veter",pointInterval:864e5,pointStart:N,yAxis:0}),E(()=>O(Q({data:M[0],name:"Sonce",pointInterval:864e5,pointStart:N,yAxis:0}),E(()=>O(Q({color:"#c6d",data:me[0],name:"Prese\u017Eek",pointInterval:864e5,pointStart:N,yAxis:0}),E(()=>{if(g!=null){const v=g[1],W=g[2],b=g[0];return ue(k("d0 = %f"))(N),O(Q({color:"#8085e9",data:tn((C,G,S)=>[N+C*864e5,G,S],v,W),name:"% baterije+\u010CHE min/max dnevno",opacity:.3,type:"arearange",yAxis:1}),E(()=>Q({color:"#8085e9",data:b,name:"% baterije+\u010CHE dnevno povpre\u010Dje",pointInterval:864e5,pointStart:N,yAxis:1})))}else return ct()})))))))))))))),title:f,type:"arearange",xAxis:w,yAxis:l}}const Zn=new st().Decorate(function(t,e,n){const a=Hn(t,e,n);return setTimeout(()=>{console.log("chart options",a),Highcharts.chart("chart_container",a)},200),T(I`
    <p>
    <div id="chart_container" style="width:100%; height:600px;" />
    </p>
    `)});function Wt(t){let e=0,n=2147483647;const a=Ye(E(()=>_e(r=>(e=Me((o,s)=>D(o,s),e,r.data.length)|0,n=de((o,s)=>D(o,s),n,r.data.length)|0,r.data),t)));return e===n?We(e,r=>{let o=Math.fround(0);for(let s=0;s<=a.length-1;s++){const c=a[s];o=o+c[r]}return o},Float32Array):We(e,r=>{let o=Math.fround(0);for(let s=0;s<=a.length-1;s++){const c=a[s];c.length>r&&(o=o+c[r])}return o},Float32Array)}function On(t){const e=lt(m=>{const p=m.kind;return((An(p)?!0:En(p))?!0:jt(p))?!0:he(p,new d(5))},Pn(t)),n=e[0],a=e[1];let r;const o=Wt(n);r=new z(new d(11),ut(m=>Ne(m.capacity,Math.fround(0)),n,{GetZero:()=>0,Add:(m,p)=>m+p}),o,ee(o,{GetZero:()=>0,Add:(m,p)=>m+p}));const s=lt(m=>jt(m.kind),n),c=s[0];let f;const i=Wt(c);f=new z(new d(9),void 0,i,ee(i,{GetZero:()=>0,Add:(m,p)=>m+p}));let h;const w=nn(m=>he(m.kind,new d(12)),a),l=r.data,_=new Float32Array(l.length),g=new Float32Array(l.length);for(let m=0;m<=l.length-1;m++){const p=w.data[m]-l[m];p>Math.fround(0)?_[m]=p:g[m]=-p}return h=ve([new z(new d(13),void 0,_,ee(_,{GetZero:()=>0,Add:(m,p)=>m+p})),new z(new d(14),void 0,g,ee(g,{GetZero:()=>0,Add:(m,p)=>m+p}))]),Et(t.year,t.isSimulated,at(E(()=>O(Q(r),E(()=>O(Q(f),E(()=>O(c,E(()=>O(s[1],E(()=>O(h,E(()=>a)))))))))))))}class Rn{constructor(){}}function Kn(){return new Rn}function qn(t,e){return{then:(n,a)=>{try{return e().then(n,a)}catch(r){if(a==null)return Promise.reject(r);try{const o=a(r);return Promise.resolve(o)}catch(o){return Promise.reject(o)}}},catch:n=>{try{return e().catch(n)}catch(a){try{const r=n(a);return Promise.resolve(r)}catch(r){return Promise.reject(r)}}}}}function Un(t,e){return e.then(n=>n)}const Gt=Kn(),Yn=jn(je(t=>(ue(`'${dt(t)}' -> ${pt(t,[])}`),[dt(t),pt(t,[])]),rn(kt())));function Jn(t){let e,n;const a=Be(Yn,t.kind);return new z(a,a.tag===5?(e=t.capacity,e!=null&&e>Math.fround(600)?(n=e,n*Math.fround(.5)):e):t.capacity,t.data,t.total)}Un(Gt,qn(Gt,()=>{const t=fetch("contacts.json").then(e=>e.json());return ue(k("%A"))(t),Promise.resolve()}));function or(){}function et(t){switch(t.tag){case 1:return"Plin";case 2:return"Premog";case 3:return"Sonce";case 4:return"Veter";case 5:return"NEK";case 6:return"Voda";case 7:return"\u0106HE";case 8:return"Smeti";case 9:return"Stati\u010Dna proizvodnja";case 10:return"Nefosilna proizvodnja";case 11:return"Skupaj";case 12:return"Poraba";case 13:return"Uvoz";case 14:return"Izvoz";case 15:return"Baterija";case 16:return"Nivo baterije";case 17:return"Nivo \u010CHE";case 18:return"Prese\u017Eek";default:return"Nafta"}}const Oe=ve([new d(4),new d(3),new d(15)]),Re=ve([new d(4),new d(3),new d(15),new d(2),new d(1),new d(5),new d(6),new d(13),new d(14),new d(18)]);function Qn(t){return`${t.year}${t.isSimulated?"'":""}`}function Xn(){return T(I`
    <tr>
    <th></th>
    <th colspan=${ft(Oe)}>Inštalirana moč [MW,MWh]</th>
    <th colspan=${ft(Re)}>Proizvodnja [GWh]</th>
    <th>Izpusti [MT]</th>
    </tr>
    <tr>
    <th>Leto</th>
    ${pe(t=>`${t}`,t=>T(I`<th>${et(t)}</th>`),Oe)}
    ${pe(t=>`${t}`,t=>T(I`<th>${et(t)}</th>`),Re)}
    <th>CO2</th>
    </tr>
    `)}function tt(t){return(ie(t,new d(2)).total*Math.fround(448.32000732421875)+ie(t,new d(1)).total*Math.fround(988.8300170898438))/Math.fround(1e6)}function er(t){let e;return T(I`
    <tr class=${an([["table-info",t.isSimulated]])}>
    <th>${Qn(t)}</th>
    ${pe(n=>`${n}`,n=>{let a,r;return T(I`<td>${a=se(n,t.traces),a==null?te():(r=Ne(a.capacity,Math.fround(0)),$(k("%.0f"))(r))}</td>`)},Oe)}
    ${pe(n=>`${n}`,n=>{let a,r;return T(I`<td>${a=se(n,t.traces),a==null?te():(r=a.total/Math.fround(1e3),$(k("%.1f"))(r))}</td>`)},Re)}
    <td>${e=tt(t),$(k("%.1f"))(e)}</td>
    </tr>
    `)}function tr(t,e){let n;const a=(r,o)=>{let s;const c=[r,o];let f,i,h;switch(c[0]!=null&&c[1]!=null?(f=0,i=c[1],h=c[0]):f=1,f){case 0:{const w=i/h;return w>Math.fround(1)?$(k("%.1fx"))(w):(s=Math.fround(100)*w,$(k("%.1f%%"))(s))}case 1:return te()}};return T(I`
    <tr>
    <th>Delež</th>
    ${pe(r=>`${r}`,r=>{let o;return T(I`<td>${o=r,a(Ge(s=>s.capacity,se(o,t.traces)),Ge(s=>s.capacity,se(o,e.traces)))}</td>`)},Oe)}
    ${pe(r=>`${r}`,r=>{let o;return T(I`<td>${o=r,a(Je(s=>s.total,se(o,t.traces)),Je(s=>s.total,se(o,e.traces)))}</td>`)},Re)}
    <td>${n=Math.fround(100)*tt(e)/tt(t),$(k("%.1f%%"))(n)}</td>
    </tr>
    `)}class Dt extends ge{constructor(e,n,a,r){super();this.kind=e,this.deltaCapacity=n,this.price=a,this.cost=r}}function sr(){return on("EnergyApp.CostItem",[],Dt,()=>[["kind",kt()],["deltaCapacity",Qe],["price",Qe],["cost",Qe]])}function nr(t,e){const n=T(I`<tr><th>Vir</th><th>Gradnja [MW]</th><th>Cena [€/kW]</th><th>Cena [M€]</th></tr>`),a=sn(o=>{let s;const c=o,f=Ge(p=>p.capacity,se(c,e.traces)),i=[Ge(p=>p.capacity,se(c,t.traces)),f];let h,w,l,_;switch(i[0]==null?i[1]!=null?(h=1,_=i[1]):h=2:i[1]!=null?(h=0,w=i[1],l=i[0]):h=2,h){case 0:{s=w-l;break}case 1:{s=_;break}case 2:{s=Math.fround(0);break}}let g;const m=o;switch(m.tag){case 3:{g=Math.fround(1e3);break}case 4:{g=Math.fround(1500);break}case 15:{g=Math.fround(340);break}default:g=ot(`missing cost of ${m}`)}return new Dt(o,s,g,s*g*Math.fround(.0010000000474974513))},ve([new d(4),new d(3),new d(15)])),r=ut(o=>o.cost,a,{GetZero:()=>0,Add:(o,s)=>o+s});return T(I`
    <h2>Cena</h2>
    <p>Stroški investicije
    <br/>če se fotovoltaika gradi na strehah individualnih in gospodarskih objektov (brez uničevanja narave)
    <br/>baterije pa 'utility scale' (cene kot v Avstraliji).
    <br/>TODO: cene nukleark in ČHE
    </p>
    <table class="energy-table">
    <thead>${n}</thead>
    <tbody>
    ${pe(o=>mt(o[0]),o=>{const s=o[1];return T(I`
        <tr>
        <td>${et(s.kind)}</td>
        <td>${$(k("%.1f"))(s.deltaCapacity)}</td>
        <td>${$(k("%.1f"))(s.price)}</td>
        <td>${$(k("%.1f"))(s.cost)}</td>
        </tr>
        `)},ht(a))}
    <tr>
    <td>Skupaj</td>
    <td></td>
    <td></td>
    <td>${$(k("%.1f"))(r)}</td>
    </tr>
    <tbody>
    </table>
    `)}const ir=new cn("energy-app").Decorate(function(){this.init(i=>(i.useShadowDom=!1,Promise.resolve(void 0)));const t=it(j(this),`
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
    `);let e;const n=Fn();e=j(this).useState(()=>n);const a=e[0],r=j(this).useState(rt),o=r[0],s=r[1];j(this).useEffectOnce(()=>{const i=2020;return fetch(`energy-traces-${i}.json`).then(w=>w.json()).then(w=>{const l=On(Et(i,!1,je(_=>Jn(_),w)));s(ve([l,zt(l,a)]))}),ln()});const c=T(I`
    <h5>${"Opombe:"}</h5>
    <ul class="list" style="padding-left:2em">
    ${pe(i=>mt(i[0]),i=>T(I`<li>${i[1]}</li>`),ht(["Za obstoje\u010Do NE Kr\u0161ko se \u0161teje samo slovenski del proizvodnje. Za toliko je zni\u017Ean tudi izvoz.","Proizvodnja baterije v tabeli je prikazana kot priskevek baterije k letni proizvodnji: 90% shranjene energije, ki jo baterija vrne v omre\u017Eje.","Kadar je energije v izobilju, se po vrsti: zaustavi premog, plin, polni baterijo, zmanj\u0161a uvoz, preostanek se \u0161teje kot prese\u017Eek.","Avtomobili skupaj delujejo kot ena velika baterija: lastniki avtomobile vsak dan napolnijo do 75%, oz. do 100% kadar je elektrike v izobilju."]))}
    </ul>
    `),f=Je(i=>i.year,un(o));return T(I`
    <div class="energy-sim ${t} container">
    <div class="row">
    <h2>Scenariji prehoda na trajnostne vire energije</h2>
    <p>Simulacija elektroenergetskega sistema na realnih urnih podatkih donosa sonca in vetra za leto ${f}
    <br>ob predpostaviki spremenjenih kapacitet vetrnih, solarnih, nuklearnih elektrarn in shranjavanja energije.
    </p>
    </div>
    <div class="row">
    <h4>Parametri simulacije</h4>
    ${Bn(i=>{if(!he(i,a)&&(e[1](i),!H(o))){const h=Y(o);ue(k("running simulation...")),s(ve([h,zt(h,i)]))}},a)}
    </div>
    <div class="energy-result row">
    <h4>Rezultat</h4>
    <table class="energy-table table table-bordered">
    <thead>
    ${Xn()}
    </thead>
    <tbody>
    ${pe(i=>`${i.year}${i.isSimulated}`,i=>er(i),o)}
    ${H(o)?te():H(U(o))?te():H(U(U(o)))?tr(Y(o),Y(U(o))):te()}
    </tbody>
    </table>
    ${c}
    </div>
    <div>
    ${H(o)?te():H(U(o))?te():H(U(U(o)))?nr(Y(o),Y(U(o))):te()}
    </div>
    <div class="row">
    ${H(o)?te():H(U(o))?te():Zn(a,Y(o),Y(U(o)))}
    </div>
    </div>
    `)});export{Dt as CostItem,sr as CostItem$reflection,ir as EnergySimulationApp,et as colName,Re as dataColumns,tt as getTonsCO2,Qn as getYsYearName,Oe as installedColumns,or as register,nr as renderCostList,tr as renderDeltaRow,Xn as renderTraceHeader,er as renderTraceRow};
