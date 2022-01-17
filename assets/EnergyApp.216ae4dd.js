import{s as Kt,v as H,i as Rt,F as qt,f as Ut,g as We,e as me,j as Yt,m as we,a as Jt,t as Qt,c as Xt,b as en,L as Qe,d as it,R as ke,h as O,k as Y,l as J,o as tn,n as ct,p as nn,q as rn,U as Xe,r as lt,u as P,w as an,x as ne,y as xe,z as le,A as C,B as pe,C as D,D as Ce,E as ut,G as je,H as on,I as dt,J as pt,K as $,M as k,N as re,O as F,P as N,Q as K,S as et,T as Ge,V as He,W as q,X as Q,Y as sn,Z as ft,_ as ht,$ as mt,a0 as cn,a1 as Ae,a2 as ln,a3 as yt,a4 as _t,a5 as wt,a6 as fe,a7 as un,a8 as ae,a9 as De,aa as tt,ab as dn,ac as pn,ad as gt,ae as bt,af as fn,ag as hn,ah as mn,ai as nt}from"./index.3c5eb00f.js";import"./vendor.66da8c77.js";class Mt{constructor(e,n){this.k=e,this.v=n}}function Le(t,e){return new Mt(t,e)}function L(t){return t.k}function U(t){return t.v}class E extends Mt{constructor(e,n,a,r,o){super(e,n);this.left=a,this.right=r,this.h=o|0}}function Ve(t,e,n,a,r){return new E(t,e,n,a,r)}function V(t){return t.left}function B(t){return t.right}function ge(t){return t.h}function Ee(){}function vt(t,e){e:for(;;){const n=t,a=e;if(a!=null){const r=a;if(r instanceof E){t=vt(n+1,V(r)),e=B(r);continue e}else return n+1|0}else return n|0}}function yn(t){return vt(0,t)}function oe(t,e,n,a){let r;const o=t;if(o!=null){const i=o;r=i instanceof E?ge(i):1}else r=0;let s;const c=a;if(c!=null){const i=c;s=i instanceof E?ge(i):1}else s=0;const p=(r<s?s:r)|0;return p===0?Le(e,n):Ve(e,n,t,a,p+1)}function St(t,e,n,a){let r,o,s,c,p;const i=t;if(i!=null){const l=i;p=l instanceof E?ge(l):1}else p=0;let h;const g=a;if(g!=null){const l=g;h=l instanceof E?ge(l):1}else h=0;if(h>p+2){const l=H(a);if(l instanceof E)if(r=V(l),(r!=null?(o=r,o instanceof E?ge(o):1):0)>p+1){const _=H(V(l));if(_ instanceof E)return oe(oe(t,e,n,V(_)),L(_),U(_),oe(B(_),L(l),U(l),B(l)));throw new Error("internal error: Map.rebalance")}else return oe(oe(t,e,n,V(l)),L(l),U(l),B(l));else throw new Error("internal error: Map.rebalance")}else if(p>h+2){const l=H(t);if(l instanceof E)if(s=B(l),(s!=null?(c=s,c instanceof E?ge(c):1):0)>h+1){const _=H(B(l));if(_ instanceof E)return oe(oe(V(l),L(l),U(l),V(_)),L(_),U(_),oe(B(_),e,n,a));throw new Error("internal error: Map.rebalance")}else return oe(V(l),L(l),U(l),oe(B(l),e,n,a));else throw new Error("internal error: Map.rebalance")}else return oe(t,e,n,a)}function Pe(t,e,n,a){if(a!=null){const r=a,o=t.Compare(e,L(r))|0;return r instanceof E?o<0?St(Pe(t,e,n,V(r)),L(r),U(r),B(r)):o===0?Ve(e,n,V(r),B(r),ge(r)):St(V(r),L(r),U(r),Pe(t,e,n,B(r))):o<0?Ve(e,n,Ee(),a,2):o===0?Le(e,n):Ve(e,n,a,Ee(),2)}else return Le(e,n)}function $t(t,e,n){e:for(;;){const a=t,r=e,o=n;if(o!=null){const s=o,c=a.Compare(r,L(s))|0;if(c===0)return Kt(U(s));if(s instanceof E){t=a,e=r,n=c<0?V(s):B(s);continue e}else return}else return}}function _n(t,e,n){const a=$t(t,e,n);if(a==null)throw new Error;return H(a)}function wn(t,e,n){e:for(;;){const a=t,r=e,o=n;if(o!=null){const s=o,c=a.Compare(r,L(s))|0;if(s instanceof E)if(c<0){t=a,e=r,n=V(s);continue e}else{if(c===0)return!0;t=a,e=r,n=B(s);continue e}else return c===0}else return!1}}function kt(t,e){e:for(;;){const n=t,a=e;if(a!=null){const r=a;if(r instanceof E){kt(n,V(r)),n(L(r),U(r)),t=n,e=B(r);continue e}else n(L(r),U(r))}break}}function gn(t,e){kt(t,e)}function bn(t,e,n){let a=n;gn((r,o)=>{e[a]=[r,o],a=a+1|0},t)}function Mn(t,e){return Ut((n,a)=>Pe(t,a[0],a[1],n),Ee(),e)}function vn(t,e,n){e:for(;;){const a=t,r=e,o=n;if(o["System.Collections.IEnumerator.MoveNext"]()){const s=o["System.Collections.Generic.IEnumerator`1.get_Current"]();t=a,e=Pe(a,s[0],s[1],r),n=o;continue e}else return r}}function xt(t,e){let n=Ee();for(let a=0;a<=e.length-1;a++){const r=e[a];n=Pe(t,r[0],r[1],n)}return n}function Sn(t,e){if(Rt(e))return xt(t,e);if(e instanceof qt)return Mn(t,e);{const n=We(e);try{return vn(t,Ee(),n)}finally{n.Dispose()}}}class $n extends ke{constructor(e,n){super();this.stack=e,this.started=n}}function Ct(t){e:for(;;){const e=t;if(O(e))return ct();{const n=Y(e),a=J(e);if(a!=null){const r=a;if(r instanceof E){t=tn([V(r),Le(L(r),U(r)),B(r)],n);continue e}else return e}else{t=n;continue e}}}}function jt(t){return new $n(Ct(Jt(t)),!1)}function kn(){throw new Error("enumeration not started")}function xn(){throw new Error("enumeration already finished")}function At(t){if(t.started){const e=t.stack;if(O(e))return xn();if(J(e)!=null){const n=J(e);if(n instanceof E)throw new Error("Please report error: Map iterator, unexpected stack for current");return[L(n),U(n)]}else throw new Error("Please report error: Map iterator, unexpected stack for current")}else return kn()}function Cn(t){if(t.started){const e=t.stack;if(O(e))return!1;if(J(e)!=null){if(J(e)instanceof E)throw new Error("Please report error: Map iterator, unexpected stack for moveNext");return t.stack=Ct(Y(e)),!O(t.stack)}else throw new Error("Please report error: Map iterator, unexpected stack for moveNext")}else return t.started=!0,!O(t.stack)}function Et(t){let e=jt(t);return{["System.Collections.Generic.IEnumerator`1.get_Current"](){return At(e)},["System.Collections.IEnumerator.get_Current"](){return At(e)},["System.Collections.IEnumerator.MoveNext"](){return Cn(e)},["System.Collections.IEnumerator.Reset"](){e=jt(t)},Dispose(){}}}class Fe{constructor(e,n){this.comparer=e,this.tree=n}GetHashCode(){return Pn(this)|0}Equals(e){const n=this;if(e instanceof Fe){const a=We(n);try{const r=We(e);try{const o=()=>{const s=a["System.Collections.IEnumerator.MoveNext"]();if(s===r["System.Collections.IEnumerator.MoveNext"]())if(s){const c=a["System.Collections.Generic.IEnumerator`1.get_Current"](),p=r["System.Collections.Generic.IEnumerator`1.get_Current"]();return me(c[0],p[0])&&me(c[1],p[1])?o():!1}else return!0;else return!1};return o()}finally{r.Dispose()}}finally{a.Dispose()}}else return!1}toString(){return"map ["+Yt("; ",we(n=>nn("({0}, {1})",n[0],n[1]),this))+"]"}get[Symbol.toStringTag](){return"FSharpMap"}toJSON(e){const n=this;return Array.from(n)}GetEnumerator(){return Et(this.tree)}[Symbol.iterator](){return Qt(this.GetEnumerator())}["System.Collections.IEnumerable.GetEnumerator"](){return Et(this.tree)}CompareTo(e){const n=this;if(e instanceof Fe)return Xt((a,r)=>{const o=n.comparer.Compare(a[0],r[0])|0;return(o!==0?o:rn(a[1],r[1]))|0},n,e)|0;throw new Error("not comparable\\nParameter name: obj")}["System.Collections.Generic.ICollection`1.Add2B595"](e){throw new Error("Map cannot be mutated")}["System.Collections.Generic.ICollection`1.Clear"](){throw new Error("Map cannot be mutated")}["System.Collections.Generic.ICollection`1.Remove2B595"](e){throw new Error("Map cannot be mutated")}["System.Collections.Generic.ICollection`1.Contains2B595"](e){const n=this;return Pt(n,e[0])&&me(Ze(n,e[0]),e[1])}["System.Collections.Generic.ICollection`1.CopyToZ2E171D71"](e,n){bn(this.tree,e,n)}["System.Collections.Generic.ICollection`1.get_IsReadOnly"](){return!0}["System.Collections.Generic.ICollection`1.get_Count"](){return rt(this)|0}["System.Collections.Generic.IReadOnlyCollection`1.get_Count"](){return rt(this)|0}get size(){return rt(this)|0}clear(){throw new Error("Map cannot be mutated")}delete(e){throw new Error("Map cannot be mutated")}entries(){return we(n=>[n[0],n[1]],this)}get(e){return Ze(this,e)}has(e){return Pt(this,e)}keys(){return we(n=>n[0],this)}set(e,n){throw new Error("Map cannot be mutated")}values(){return we(n=>n[1],this)}forEach(e,n){const a=this;en(r=>{e(r[1],r[0],a)},a)}}function Be(t,e){return new Fe(t,e)}(()=>{Fe.empty=Be(Qe(),Ee())})();function jn(t){const e=Qe();return Be(e,Sn(e,t))}function An(t,e,n){return Be(t.comparer,Pe(t.comparer,e,n,t.tree))}function Ze(t,e){return _n(t.comparer,e,t.tree)}function rt(t){return yn(t.tree)}function Pt(t,e){return wn(t.comparer,e,t.tree)}function En(t,e){return $t(t.comparer,e,t.tree)}function Pn(t){const e=(r,o)=>(r<<1)+o+631;let n=0;const a=We(t);try{for(;a["System.Collections.IEnumerator.MoveNext"]();){const r=a["System.Collections.Generic.IEnumerator`1.get_Current"]();n=e(n,it(r[0]))|0,n=e(n,it(r[1]))|0}}finally{a.Dispose()}return n|0}function se(t,e,n){return An(n,t,e)}function ue(t,e){return En(e,t)}function In(t){return jn(t)}function Tn(t){const e=Qe();return Be(e,xt(e,t))}class u extends Xe{constructor(e,...n){super();this.tag=e|0,this.fields=n}cases(){return["Oil","Gas","Coal","Solar","Wind","Nuclear","Hydro","HydroStorage","Waste","StaticProd","NonFosilProd","TotalProd","Load","Import","Export","Battery","BatteryLevel","PumpedLevel","Excess"]}}function It(){return an("Shared.Types.TraceKind",[],u,()=>[[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[]])}function zn(t){switch(t.tag){case 4:case 3:return!0;default:return!1}}function Fn(t){switch(t.tag){case 0:case 1:case 2:return!0;default:return!1}}function Tt(t){switch(t.tag){case 6:case 7:case 8:return!0;default:return!1}}class W extends ke{constructor(e,n,a,r){super();this.kind=e,this.capacity=n,this.data=a,this.total=r}}class zt extends ke{constructor(e,n,a){super();this.year=e|0,this.isSimulated=n,this.traces=a}}function ie(t,e){return Ze(t.traces,e)}function Ft(t,e,n){return new zt(t,e,In(we(a=>[a.kind,a],n)))}function Nn(t){return lt(P(()=>we(e=>e[1],t.traces)))}class Oe extends Xe{constructor(e,...n){super();this.tag=e|0,this.fields=n}cases(){return["AbsoluteMW","PercentCapacity"]}}class Ke extends ke{constructor(e,n,a){super();this.capacity=e,this.power=n,this.efficiencyPercent=a}}function Nt(t){const e=t.power;return e.tag===1?t.capacity*e.fields[0]*Math.fround(.009999999776482582):e.fields[0]}function Wn(t){const e=t.power;return e.tag===1?e.fields[0]:e.fields[0]/t.capacity*Math.fround(100)}class Wt extends ke{constructor(e,n,a,r,o,s,c,p){super();this.installedSolarMW=e,this.installedWindMW=n,this.battery=a,this.extraNuclearMW=r,this.stopCurrentNuclear=o,this.pumpedStorage=s,this.electricCarsPercent=c,this.hydropowerExtraSavaGWh=p}}function Gn(){return new Wt(Math.fround(278),Math.fround(3),new Ke(Math.fround(0),new Oe(1,Math.fround(25)),Math.fround(90)),[!1,Math.fround(1100)],!1,[!1,new Ke(Math.fround(8e3),new Oe(0,Math.fround(400)),Math.fround(70))],Math.fround(0),[!1,Math.fround(1440)+Math.fround(131)])}function Hn(){return Gn()}function Gt(t,e,n){const a=Math.sqrt(t.efficiencyPercent*.01),r=Nt(t);le(C("storage efficiency=%f, maxPower=%f"))(a)(r);let o=Math.fround(0);return s=>c=>p=>{const i=s(c,p);if(i>=Math.fround(0)){const h=pe((g,l)=>D(g,l),pe((g,l)=>D(g,l),r,(t.capacity-o)*a),i);return o=o+h/a,e[c]=o,i-h}else{const h=pe((g,l)=>D(g,l),pe((g,l)=>D(g,l),r,o*a),-i);return o=o-h/a,e[c]=o,n[c]=h,i+h}}}function Dn(t,e,n){if(t<Math.fround(2))return a=>r=>o=>a(r,o);{const a=15e3/365/100*22*t,r=a/1e3/24,o=t*Math.fround(60)*Math.fround(.0010000000474974513),s=o*Math.fround(.699999988079071),c=a/1e3;le(C("cars: %.3f<kWh> daily, %.3f<MW> hourly, %.3f<MWh> total battery capacity"))(c)(r)(o);let p=(s*Math.fround(3)+o)/Math.fround(4);return i=>h=>g=>{p=p-r;let l;const _=s-p;l=je((M,j)=>D(M,j),Math.fround(0),_);let b;const m=o-p;b=je((M,j)=>D(M,j),Math.fround(0),m);const f=i(h,g-l),I=je((M,j)=>D(M,j),l,pe((M,j)=>D(M,j),f,b));return p=p+I,e[h]=p,n[h]=I,f-I}}}function Ht(t,e,n){let a;if(t==null)a=r=>e[r];else{const r=t;a=o=>r}return r=>o=>s=>{const c=r(o,s-e[o]);if(c>=Math.fround(0))return n[o]=Math.fround(0),c;{const p=pe((i,h)=>D(i,h),a(o),-c);return n[o]=p,c+p}}}function Ln(t,e,n,a,r,o){const s=a(r,o);if(s>=Math.fround(0)){const c=pe((p,i)=>D(p,i),t[r],s);return n[r]=t[r]-c,s-c}else return n[r]=t[r]-s,Math.fround(0)}function Vn(t,e,n,a){const r=e(n,a);return r>=Math.fround(0)?(t[n]=r,Math.fround(0)):(t[n]=Math.fround(0),r)}function Bn(t,e){return e}function Zn(t,e,n){return t(e,n)}function Dt(t,e){let n,a,r,o,s,c,p,i;const h=ie(t,new u(2)),g=ie(t,new u(1)),l=ie(t,new u(13)),_=ie(t,new u(14)),b=ie(t,new u(4)),m=ie(t,new u(3)),f=ie(t,new u(5)),I=ie(t,new u(6)),M=b.data.length|0,j=e.installedWindMW/H(b.capacity),de=e.installedSolarMW/H(m.capacity);let he;const ye=e.hydropowerExtraSavaGWh;if(ye[0]){const d=(I.total+ye[1]*Math.fround(1e3))/I.total,y=new W(I.kind,H(I.capacity)*d,xe($e=>d*$e,I.data,Float32Array),I.total*d),te=y.data[100],w=f.data[100],ve=H(y.capacity),Se=H(I.capacity);le(C("kHydro = %f (current capacity=%.1f->%.1f) d[100]=%f->%f"))(d)(Se)(ve)(w)(te),he=y}else he=I;let T;const S=[e.extraNuclearMW,e.stopCurrentNuclear];if(S[0][0]){const d=S[0][1],y=H(f.capacity),te=S[1]?d/y:(y+d)/y,w=new W(f.kind,y*te,xe($e=>te*$e,f.data,Float32Array),f.total*te),ve=w.data[100],Se=f.data[100];le(C("kNuclear = %f (current capacity=%f) d[100]=%f->%f"))(te)(y)(Se)(ve),T=w}else T=S[1]?new W(f.kind,Math.fround(0),new Float32Array(M),Math.fround(0)):f;const Z=new W(b.kind,H(b.capacity)*j,xe(d=>j*d,b.data,Float32Array),b.total*j),x=new W(m.kind,H(m.capacity)*de,xe(d=>de*d,m.data,Float32Array),m.total*de),A=new Float32Array(M),z=new Float32Array(M),v=new Float32Array(M),G=new Float32Array(M),R=new Float32Array(M),X=new Float32Array(M),ee=new Float32Array(M),be=new Float32Array(M),_e=new Float32Array(M),Ue=new Float32Array(M);let Ie;const Te=Ht(h.capacity,h.data,A),Ye=Ht(void 0,g.data,z),Ne=Gt(e.battery,v,G);let Me;const Je=Dn(e.electricCarsPercent*Math.fround(1e4),R,X)(Ce(2,Te(Ce(2,Ye(Ce(2,(n=e.pumpedStorage,n[0]?Gt(n[1],_e,Ue):d=>y=>te=>Zn(d,y,te))(Ce(2,Ne((d,y)=>Bn(d,y))))))))));Me=d=>y=>Ln(l.data,_.data,be,Ce(2,Je),d,y),Ie=d=>y=>Vn(ee,Ce(2,Me),d,y);for(let d=0;d<=M-1;d++){const y=Ie(d)(Z.data[d]+x.data[d]+T.data[d]+he.data[d]-(b.data[d]+m.data[d]+f.data[d]+I.data[d]));y>Math.fround(.0010000000474974513)&&ut(C("mismatching balance of %f for datapoint %d"))(y)(d)}return new zt(t.year,!0,(a=(r=(o=(s=(c=(p=(i=se(new u(6),he,se(new u(5),T,se(new u(3),x,se(new u(4),Z,t.traces)))),se(new u(2),new W(h.kind,h.capacity,A,ne(A,{GetZero:()=>0,Add:(d,y)=>d+y})),i)),se(new u(1),new W(g.kind,g.capacity,z,ne(z,{GetZero:()=>0,Add:(d,y)=>d+y})),p)),se(new u(16),new W(new u(16),e.battery.capacity,v,ne(v,{GetZero:()=>0,Add:(d,y)=>d+y})),c)),e.pumpedStorage[0]?se(new u(17),new W(new u(17),e.pumpedStorage[1].capacity,_e,ne(_e,{GetZero:()=>0,Add:(d,y)=>d+y})),s):s),se(new u(15),new W(new u(15),e.battery.capacity,G,ne(G,{GetZero:()=>0,Add:(d,y)=>d+y})),o)),se(new u(18),new W(new u(18),void 0,ee,ne(ee,{GetZero:()=>0,Add:(d,y)=>d+y})),r)),se(new u(13),new W(l.kind,l.capacity,be,ne(be,{GetZero:()=>0,Add:(d,y)=>d+y})),a)))}class Lt extends Xe{constructor(e,...n){super();this.tag=e|0,this.fields=n}cases(){return["Ok","Error"]}}function On(t,e){if(t!=null&&/\S/.test(t)){const n=+t.replace("_","");if(!Number.isNaN(n))return e.contents=n,!0}return!1}function ce(t){const e=new on(0);if(On(t,e))return e.contents;throw new Error("Input string was not in a correct format.")}function Kn(){return t=>t}const Rn=new dt().Decorate(function(t,e){let n;const a=Kn()(`
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
        `);n=pt($(this),a);let r;const o=k(re("%.0f%P()",[e.installedSolarMW]));r=$(this).useState(()=>o);const s=r[0];let c;const p=k(re("%.0f%P()",[e.installedWindMW]));c=$(this).useState(()=>p);const i=c[0];let h;const g=k(re("%.0f%P()",[e.battery.capacity]));h=$(this).useState(()=>g);const l=h[0];let _;const b=k(re("%.0f%P()",[Wn(e.battery)]));_=$(this).useState(()=>b);const m=_[0];let f;const I=k(re("%.0f%P()",[e.battery.efficiencyPercent]));f=$(this).useState(()=>I);const M=$(this).useState(()=>e.extraNuclearMW[0]),j=M[0];let de;const he=k(re("%.0f%P()",[e.extraNuclearMW[1]]));de=$(this).useState(()=>he);const ye=de[0],T=$(this).useState(()=>e.extraNuclearMW[0]),S=T[0],Z=$(this).useState(()=>e.hydropowerExtraSavaGWh[0]),x=Z[0];let A;const z=k(re("%.0f%P()",[e.hydropowerExtraSavaGWh[1]]));A=$(this).useState(()=>z);const v=A[0],G=$(this).useState(()=>e.pumpedStorage[0]),R=G[0];let X;const ee=k(re("%.0f%P()",[e.pumpedStorage[1].capacity]));X=$(this).useState(()=>ee);const be=X[0];let _e;const Ue=k(re("%.0f%P()",[Nt(e.pumpedStorage[1])]));_e=$(this).useState(()=>Ue);const Ie=_e[0];let Te;const Ye=k(re("%.0f%P()",[e.pumpedStorage[1].efficiencyPercent]));Te=$(this).useState(()=>Ye);const Ne=Te[0];let Me;const Je=k(re("%.0f%P()",[e.electricCarsPercent]));Me=$(this).useState(()=>Je);const d=Me[0],y=$(this).useState(()=>""),te=y[1];return le(C("buildNuclear=%A"))(j),F(N`
    <div class="${n}">
    <form class="energy-form" action="#">
    <h7>Simulirana inštalirana moč:</h7>
    <br/>
    <i class="ico fas fa-sun"></i>
    <input type="number" id="solar" name="solar" value="${s}" size="6" min=0 step=100 @change=${w=>{r[1](K(w.target))}} />
    <label for="solar">MW fotopanelov</label><br/>
    <i class="ico fas fa-wind"></i>
    <input type="number" id="wind" name="wind" value="${i}" size="6" min=0 step=50 @change=${w=>{c[1](K(w.target))}} />
    <label for="wind">MW vetrnic</label><br/>
    <i class="ico fas fa-car-battery"></i>
    <input type="number" id="battery" name="battery" value="${l}" size="6" step=50 min=0 @change=${w=>{h[1](K(w.target))}} />
    <label for="battery">MWh baterij</label>  <!-- z največjo močjo polnjenje/praznjenja</label>
    <input type="number" id="batteryPow" name="batteryPow" value="${m}" size="3" step=1 min=1 @change=${w=>{_[1](K(w.target))}} />
    <label for="batteryPow">% MW/MWh kapacitete</label>  -->
    <br/>
    <i class="ico fas fa-water"></i>
    <input type="checkbox" id="buildPumped" name="buildPumped" value="${R}" @change=${w=>{K(w.target),G[1](!R)}}>
    <label for="buildPumped">Zgradimo ČHE Kozjak</label>
    <span style="visibility:${R?"visible":"hidden"}">
    <label for="pumped"> s kapaciteto</label>
    <input type="number" id="pumped" name="pumped" value="${be}" size="6" step=500 min=0 @change=${w=>{X[1](K(w.target))}} />
    <label for="pumped">MWh, močjo</label>
    <input type="number" id="pumpedPow" name="pumpedPow" value="${Ie}" size="6" step=20 min=0 @change=${w=>{_e[1](K(w.target))}} />
    <label for="pumpedPow">MW in učinkovitostjo</label>
    <input type="number" id="pumpedEfficiency" pumpedEfficiency="pumped" value="${Ne}" size="6" step=1 min=0 @change=${w=>{Te[1](K(w.target))}} />
    <label for="pumpedEfficiency">%</label>
    </span>
    <br/>
    <i class="ico fas fa-water"></i>
    <input type="checkbox" id="buildHydro" name="buildHydro" value="${x}" @change=${w=>{K(w.target),Z[1](!x)}}>
    <label for="buildHydro">Zgradimo 10 HE na srednji Savi + Mokrice</label>
    <span style="visibility:${x?"visible":"hidden"}">
    <label for="hydro"> z letno proizvodnjo</label>
    <input type="number" id="hydro" name="hydro" value="${v}" size="6" step=100 min=0 @change=${w=>{A[1](K(w.target))}} style="text-align:right;" />
    <label for="hydro">GWh</label>
    </span>
    <br/>
    <i class="ico fas fa-atom"></i>
    <input type="checkbox" id="buildNuclear" name="buildNuclear" value="${j}" @change=${w=>{K(w.target),M[1](!j)}}>
    <label for="buildNuclear">Zgradimo novo nuklearko </label>
    <span style="visibility:${j?"visible":"hidden"}">
    <label for="buildNuclear"> z nazivno močjo</label>
    <input type="number" id="nuclear" name="nuclear" value="${ye}" size="6" step=100 min=0 @change=${w=>{de[1](K(w.target))}} style="text-align:right;" />
    <label for="nuclear">MW</label>
    </span>
    <br/>
    <i class="ico fas fa-times-circle"></i>
    <input type="checkbox" id="stopCurrentNuclear" name="stopCurrentNuclear" value="${S}" @change=${w=>{K(w.target),T[1](!S)}}>
    <label for="stopCurrentNuclear">Ugasnemo obstoječo nuklearko</label>
    <br/>
    <i class="ico fas fa-car"></i>
    <input type="number" id="electricCars" name="electricCars" value="${d}" size="6" min=0 step=5 @change=${w=>{Me[1](K(w.target))}} style="text-align:right;"/>
    <label for="electricCars">% avtomobilov se vozi na elektriko</label><br/>
    <hr/>
    <i class="ico fas fa-fw"></i>
    <input type="button" value="Izračunaj" @click=${w=>{let ve,Se,$e,st;console.log("submit:",w);let ze;try{ze=new Lt(0,(ve=ce(s),Se=ce(i),$e=new Ke(ce(l),new Oe(1,ce(m)),ce(f[0])),st=[R,new Ke(ce(be),new Oe(0,ce(Ie)),ce(Ne))],new Wt(ve,Se,$e,[j,ce(ye)],S,st,ce(d),[x,ce(v)])))}catch(Ot){ze=new Lt(1,Ot.message)}return le(C("submit: %A"))(ze),ze.tag===1?te(y[0]):(te(""),t(ze.fields[0])),w.preventDefault(),!1}} >
    </form>
    </div>
    <p/>
    `)});function qn(t,e,n){let a,r,o,s,c,p,i,h,g,l;const _=(S,Z)=>{const x=ie(S,Z).data,A=new Float32Array(~~((x.length+1)/24));let z=x[0];for(let v=0;v<=x.length-1;v++){const G=~~(v/24)|0,R=x[v]*Math.fround(.0010000000474974513)+A[G];z=je((X,ee)=>D(X,ee),z,R),A[G]=R}return[A,z]};let b,m;const f=[(a=ue(new u(16),n.traces),a!=null?me(a.capacity,void 0)?void 0:a!=null?H(a.capacity)===Math.fround(0)?void 0:a!=null?(r=a,[r.data,r.capacity]):(()=>{throw new Error("Match failure")})():a!=null?(r=a,[r.data,r.capacity]):(()=>{throw new Error("Match failure")})():void 0),(o=ue(new u(17),n.traces),o!=null?me(o.capacity,void 0)?void 0:o!=null?H(o.capacity)===Math.fround(0)?void 0:o!=null?(s=o,[s.data,s.capacity]):(()=>{throw new Error("Match failure")})():o!=null?(s=o,[s.data,s.capacity]):(()=>{throw new Error("Match failure")})():void 0)];if(f[0]==null)m=f[1]==null?void 0:(c=f[1],c);else if(f[1]!=null){const S=f[0][1],Z=f[0][0],x=f[1][1],A=f[1][0],z=Ge(S,Math.fround(0))+Ge(x,Math.fround(0));m=[He(Z.length,v=>Z[v]+A[v],Float32Array),z]}else m=f[0];if(m==null)b=void 0;else{const S=m[0],Z=H(m[1]),x=new Float32Array(~~((S.length+1)/24)),A=He(~~((S.length+1)/24),v=>Math.fround(34028234663852886e22),Float32Array),z=new Float32Array(~~((S.length+1)/24));for(let v=0;v<=S.length-1;v++){const G=~~(v/24)|0,R=S[v]/Z*Math.fround(100);A[G]=pe((X,ee)=>D(X,ee),A[G],R),z[G]=je((X,ee)=>D(X,ee),z[G],R),x[G]=x[G]+R/Math.fround(24)}b=[x,A,z]}const I=_(n,new u(3)),M=_(n,new u(4)),j=_(n,new u(6)),de=_(e,new u(2)),he=_(n,new u(2)),ye=_(n,new u(18)),T=new Date(`${e.year}-01-01 0:0:0`).getTime();return p={text:"Dnevne krivulje"},i={},h={zoomType:"x"},g={type:"datetime"},l=et(P(()=>q(Q({title:{text:"Proizvodnja GWh"}}),P(()=>b!=null?Q({max:100,min:0,opposite:!0,title:{text:"Stanje baterije+\u010CHE %"}}):ft())))),{chart:h,plotOptions:i,series:et(P(()=>q(Q({data:j[0],name:"Voda",pointInterval:864e5,pointStart:T,yAxis:0}),P(()=>q(Q({color:"#888",data:de[0],name:`Premog ${e.year}`,pointInterval:864e5,pointStart:T,yAxis:0}),P(()=>q(Q({data:he[0],name:"Premog simuliran",pointInterval:864e5,pointStart:T,yAxis:0}),P(()=>q(Q({data:M[0],name:"Veter",pointInterval:864e5,pointStart:T,yAxis:0}),P(()=>q(Q({data:I[0],name:"Sonce",pointInterval:864e5,pointStart:T,yAxis:0}),P(()=>q(Q({color:"#c6d",data:ye[0],name:"Prese\u017Eek",pointInterval:864e5,pointStart:T,yAxis:0}),P(()=>{if(b!=null){const S=b[1],Z=b[2],x=b[0];return le(C("d0 = %f"))(T),q(Q({color:"#8085e9",data:sn((A,z,v)=>[T+A*864e5,z,v],S,Z),name:"% baterije+\u010CHE min/max dnevno",opacity:.3,type:"arearange",yAxis:1}),P(()=>Q({color:"#8085e9",data:x,name:"% baterije+\u010CHE dnevno povpre\u010Dje",pointInterval:864e5,pointStart:T,yAxis:1})))}else return ft()})))))))))))))),title:p,type:"arearange",xAxis:g,yAxis:l}}const Un=new dt().Decorate(function(t,e,n){const a=qn(t,e,n);return setTimeout(()=>{console.log("chart options",a),Highcharts.chart("chart_container",a)},200),F(N`
    <p>
    <div id="chart_container" style="width:100%; height:600px;" />
    </p>
    `)});function Vt(t){let e=0,n=2147483647;const a=et(P(()=>we(r=>(e=je((o,s)=>D(o,s),e,r.data.length)|0,n=pe((o,s)=>D(o,s),n,r.data.length)|0,r.data),t)));return e===n?He(e,r=>{let o=Math.fround(0);for(let s=0;s<=a.length-1;s++){const c=a[s];o=o+c[r]}return o},Float32Array):He(e,r=>{let o=Math.fround(0);for(let s=0;s<=a.length-1;s++){const c=a[s];c.length>r&&(o=o+c[r])}return o},Float32Array)}function Yn(t){const e=ht(m=>{const f=m.kind;return((zn(f)?!0:Fn(f))?!0:Tt(f))?!0:me(f,new u(5))},Nn(t)),n=e[0],a=e[1];let r;const o=Vt(n);r=new W(new u(11),mt(m=>Ge(m.capacity,Math.fround(0)),n,{GetZero:()=>0,Add:(m,f)=>m+f}),o,ne(o,{GetZero:()=>0,Add:(m,f)=>m+f}));const s=ht(m=>Tt(m.kind),n),c=s[0];let p;const i=Vt(c);p=new W(new u(9),void 0,i,ne(i,{GetZero:()=>0,Add:(m,f)=>m+f}));let h;const g=cn(m=>me(m.kind,new u(12)),a),l=r.data,_=new Float32Array(l.length),b=new Float32Array(l.length);for(let m=0;m<=l.length-1;m++){const f=g.data[m]-l[m];f>Math.fround(0)?_[m]=f:b[m]=-f}return h=Ae([new W(new u(13),void 0,_,ne(_,{GetZero:()=>0,Add:(m,f)=>m+f})),new W(new u(14),void 0,b,ne(b,{GetZero:()=>0,Add:(m,f)=>m+f}))]),Ft(t.year,t.isSimulated,lt(P(()=>q(Q(r),P(()=>q(Q(p),P(()=>q(c,P(()=>q(s[1],P(()=>q(h,P(()=>a)))))))))))))}class Jn{constructor(){}}function Qn(){return new Jn}function Xn(t,e){return{then:(n,a)=>{try{return e().then(n,a)}catch(r){if(a==null)return Promise.reject(r);try{const o=a(r);return Promise.resolve(o)}catch(o){return Promise.reject(o)}}},catch:n=>{try{return e().catch(n)}catch(a){try{const r=n(a);return Promise.resolve(r)}catch(r){return Promise.reject(r)}}}}}function er(t,e){return e.then(n=>n)}const Bt=Qn(),tr=Tn(xe(t=>(le(`'${yt(t)}' -> ${_t(t,[])}`),[yt(t),_t(t,[])]),ln(It())));function nr(t){let e,n;const a=Ze(tr,t.kind);return new W(a,a.tag===5?(e=t.capacity,e!=null&&e>Math.fround(600)?(n=e,n*Math.fround(.5)):e):t.capacity,t.data,t.total)}er(Bt,Xn(Bt,()=>{const t=fetch("contacts.json").then(e=>e.json());return le(C("%A"))(t),Promise.resolve()}));function ur(){}function at(t){switch(t.tag){case 1:return"Plin";case 2:return"Premog";case 3:return"Sonce";case 4:return"Veter";case 5:return"NEK";case 6:return"Voda";case 7:return"\u0106HE";case 8:return"Smeti";case 9:return"Stati\u010Dna proizvodnja";case 10:return"Nefosilna proizvodnja";case 11:return"Skupaj";case 12:return"Poraba";case 13:return"Uvoz";case 14:return"Izvoz";case 15:return"Baterija";case 16:return"Nivo baterije";case 17:return"Nivo \u010CHE";case 18:return"Prese\u017Eek";default:return"Nafta"}}const Re=Ae([new u(4),new u(3),new u(15)]),qe=Ae([new u(4),new u(3),new u(15),new u(2),new u(1),new u(5),new u(6),new u(13),new u(14),new u(18)]);function rr(t){return`${t.year}${t.isSimulated?"'":""}`}function ar(){return F(N`
    <tr>
    <th></th>
    <th colspan=${wt(Re)}>Inštalirana moč [MW,MWh]</th>
    <th colspan=${wt(qe)}>Proizvodnja [GWh]</th>
    <th>Izpusti [MT]</th>
    </tr>
    <tr>
    <th>Leto</th>
    ${fe(t=>`${t}`,t=>F(N`<th>${at(t)}</th>`),Re)}
    ${fe(t=>`${t}`,t=>F(N`<th>${at(t)}</th>`),qe)}
    <th>CO2</th>
    </tr>
    `)}function ot(t){return(ie(t,new u(2)).total*Math.fround(448.32000732421875)+ie(t,new u(1)).total*Math.fround(988.8300170898438))/Math.fround(1e6)}function or(t){let e;return F(N`
    <tr class=${un([["table-info",t.isSimulated]])}>
    <th>${rr(t)}</th>
    ${fe(n=>`${n}`,n=>{let a,r;return F(N`<td>${a=ue(n,t.traces),a==null?ae():(r=Ge(a.capacity,Math.fround(0)),k(C("%.0f"))(r))}</td>`)},Re)}
    ${fe(n=>`${n}`,n=>{let a,r;return F(N`<td>${a=ue(n,t.traces),a==null?ae():(r=a.total/Math.fround(1e3),k(C("%.1f"))(r))}</td>`)},qe)}
    <td>${e=ot(t),k(C("%.1f"))(e)}</td>
    </tr>
    `)}function sr(t,e){let n;const a=(r,o)=>{let s;const c=[r,o];let p,i,h;switch(c[0]!=null&&c[1]!=null?(p=0,i=c[1],h=c[0]):p=1,p){case 0:{const g=i/h;return g>Math.fround(1)?k(C("%.1fx"))(g):(s=Math.fround(100)*g,k(C("%.1f%%"))(s))}case 1:return ae()}};return F(N`
    <tr>
    <th>Delež</th>
    ${fe(r=>`${r}`,r=>{let o;return F(N`<td>${o=r,a(De(s=>s.capacity,ue(o,t.traces)),De(s=>s.capacity,ue(o,e.traces)))}</td>`)},Re)}
    ${fe(r=>`${r}`,r=>{let o;return F(N`<td>${o=r,a(tt(s=>s.total,ue(o,t.traces)),tt(s=>s.total,ue(o,e.traces)))}</td>`)},qe)}
    <td>${n=Math.fround(100)*ot(e)/ot(t),k(C("%.1f%%"))(n)}</td>
    </tr>
    `)}class Zt extends ke{constructor(e,n,a,r){super();this.kind=e,this.deltaCapacity=n,this.price=a,this.cost=r}}function dr(){return dn("EnergyApp.CostItem",[],Zt,()=>[["kind",It()],["deltaCapacity",nt],["price",nt],["cost",nt]])}function ir(t,e){const n=F(N`<tr><th>Vir</th><th>Gradnja [MW]</th><th>Cena [€/kW]</th><th>Cena [M€]</th></tr>`),a=pn(o=>{let s;const c=o,p=De(f=>f.capacity,ue(c,e.traces)),i=[De(f=>f.capacity,ue(c,t.traces)),p];let h,g,l,_;switch(i[0]==null?i[1]!=null?(h=1,_=i[1]):h=2:i[1]!=null?(h=0,g=i[1],l=i[0]):h=2,h){case 0:{s=g-l;break}case 1:{s=_;break}case 2:{s=Math.fround(0);break}}let b;const m=o;switch(m.tag){case 3:{b=Math.fround(1e3);break}case 4:{b=Math.fround(1500);break}case 15:{b=Math.fround(340);break}default:b=ut(`missing cost of ${m}`)}return new Zt(o,s,b,s*b*Math.fround(.0010000000474974513))},Ae([new u(4),new u(3),new u(15)])),r=mt(o=>o.cost,a,{GetZero:()=>0,Add:(o,s)=>o+s});return F(N`
    <h2>Cena</h2>
    <p>Stroški investicije
    <br/>če se fotovoltaika gradi na strehah individualnih in gospodarskih objektov (brez uničevanja narave)
    <br/>baterije pa 'utility scale' (cene kot v Avstraliji).
    <br/>TODO: cene nukleark in ČHE
    </p>
    <table class="energy-table">
    <thead>${n}</thead>
    <tbody>
    ${fe(o=>bt(o[0]),o=>{const s=o[1];return F(N`
        <tr>
        <td>${at(s.kind)}</td>
        <td>${k(C("%.1f"))(s.deltaCapacity)}</td>
        <td>${k(C("%.1f"))(s.price)}</td>
        <td>${k(C("%.1f"))(s.cost)}</td>
        </tr>
        `)},gt(a))}
    <tr>
    <td>Skupaj</td>
    <td></td>
    <td></td>
    <td>${k(C("%.1f"))(r)}</td>
    </tr>
    <tbody>
    </table>
    `)}const pr=new fn("energy-app").Decorate(function(){this.init(i=>(i.useShadowDom=!1,Promise.resolve(void 0)));const t=pt($(this),`
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
    `);let e;const n=Hn();e=$(this).useState(()=>n);const a=e[0],r=$(this).useState(ct),o=r[0],s=r[1];$(this).useEffectOnce(()=>{const i=2020;return fetch(`energy-traces-${i}.json`).then(g=>g.json()).then(g=>{const l=Yn(Ft(i,!1,xe(_=>nr(_),g)));s(Ae([l,Dt(l,a)]))}),hn()});const c=F(N`
    <h5>${"Opombe:"}</h5>
    <ul class="list" style="padding-left:2em">
    ${fe(i=>bt(i[0]),i=>F(N`<li>${i[1]}</li>`),gt(["Za obstoje\u010Do NE Kr\u0161ko se \u0161teje samo slovenski del proizvodnje. Za toliko je zni\u017Ean tudi izvoz.","Proizvodnja baterije v tabeli je prikazana kot priskevek baterije k letni proizvodnji: 90% shranjene energije, ki jo baterija vrne v omre\u017Eje.","Kadar je energije v izobilju, se po vrsti: zaustavi premog, plin, polni baterijo, zmanj\u0161a uvoz, preostanek se \u0161teje kot prese\u017Eek.","Avtomobili skupaj delujejo kot ena velika baterija: lastniki avtomobile vsak dan napolnijo do 75%, oz. do 100% kadar je elektrike v izobilju.","Ker nimamo specifi\u010Dnih pretokov za reko Savo, nove HE na Savi simuliramo kot da bi za enak faktor pove\u010Dali mo\u010D vseh Slovenskih HE neglede na reko."]))}
    </ul>
    `),p=tt(i=>i.year,mn(o));return F(N`
    <div class="energy-sim ${t} container">
    <div class="row">
    <h2>Scenariji prehoda na trajnostne vire energije</h2>
    <p>Simulacija elektroenergetskega sistema na realnih urnih podatkih donosa sonca in vetra za leto ${p}
    <br>ob predpostaviki spremenjenih kapacitet vetrnih, solarnih, nuklearnih elektrarn in shranjavanja energije.
    </p>
    </div>
    <div class="row">
    <h4>Parametri simulacije</h4>
    ${Rn(i=>{if(!me(i,a)&&(e[1](i),!O(o))){const h=J(o);le(C("running simulation...")),s(Ae([h,Dt(h,i)]))}},a)}
    </div>
    <div class="energy-result row">
    <h4>Rezultat</h4>
    <table class="energy-table table table-bordered">
    <thead>
    ${ar()}
    </thead>
    <tbody>
    ${fe(i=>`${i.year}${i.isSimulated}`,i=>or(i),o)}
    ${O(o)?ae():O(Y(o))?ae():O(Y(Y(o)))?sr(J(o),J(Y(o))):ae()}
    </tbody>
    </table>
    ${c}
    </div>
    <div>
    ${O(o)?ae():O(Y(o))?ae():O(Y(Y(o)))?ir(J(o),J(Y(o))):ae()}
    </div>
    <div class="row">
    ${O(o)?ae():O(Y(o))?ae():Un(a,J(o),J(Y(o)))}
    </div>
    </div>
    `)});export{Zt as CostItem,dr as CostItem$reflection,pr as EnergySimulationApp,at as colName,qe as dataColumns,ot as getTonsCO2,rr as getYsYearName,Re as installedColumns,ur as register,ir as renderCostList,sr as renderDeltaRow,ar as renderTraceHeader,or as renderTraceRow};
