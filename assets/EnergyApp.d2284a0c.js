import{U as Ve,s as vt,v as H,i as kt,F as Tt,f as At,g as _e,e as ie,j as Et,m as re,a as Be,t as It,c as jt,b as Ft,L as ve,d as He,R as de,h as I,k as G,l as W,o as Pt,n as Ze,p as zt,q as Gt,r as Oe,u as C,w as Wt,x as Y,y as ye,z as ae,A as D,B as fe,C as Re,D as k,E as Dt,H as Ke,G as Ye,I as J,J as j,K as ke,M as x,N as b,O as Te,P as pe,Q as qe,S as N,T as q,V as Ae,W as Nt,X as Lt,Y as Ue,Z as Je,_ as Qe,$ as Vt,a0 as ce,a1 as Bt,a2 as Xe,a3 as et,a4 as tt,a5 as Q,a6 as Z,a7 as ge,a8 as Ee,a9 as Ht,aa as Zt,ab as nt,ac as rt,ad as Ot,ae as Rt,af as Kt,ag as Yt,ah as Ie}from"./index.f0b553b6.js";import"./vendor.bd24dec8.js";class at extends Ve{constructor(e,...n){super();this.tag=e|0,this.fields=n}cases(){return["Ok","Error"]}}class ot{constructor(e,n){this.k=e,this.v=n}}function we(t,e){return new ot(t,e)}function T(t){return t.k}function F(t){return t.v}class w extends ot{constructor(e,n,a,r,o){super(e,n);this.left=a,this.right=r,this.h=o|0}}function Me(t,e,n,a,r){return new w(t,e,n,a,r)}function A(t){return t.left}function E(t){return t.right}function oe(t){return t.h}function le(){}function st(t,e){e:for(;;){const n=t,a=e;if(a!=null){const r=a;if(r instanceof w){t=st(n+1,A(r)),e=E(r);continue e}else return n+1|0}else return n|0}}function qt(t){return st(0,t)}function O(t,e,n,a){let r;const o=t;if(o!=null){const i=o;r=i instanceof w?oe(i):1}else r=0;let s;const c=a;if(c!=null){const i=c;s=i instanceof w?oe(i):1}else s=0;const h=(r<s?s:r)|0;return h===0?we(e,n):Me(e,n,t,a,h+1)}function it(t,e,n,a){let r,o,s,c,h;const i=t;if(i!=null){const d=i;h=d instanceof w?oe(d):1}else h=0;let p;const g=a;if(g!=null){const d=g;p=d instanceof w?oe(d):1}else p=0;if(p>h+2){const d=H(a);if(d instanceof w)if(r=A(d),(r!=null?(o=r,o instanceof w?oe(o):1):0)>h+1){const m=H(A(d));if(m instanceof w)return O(O(t,e,n,A(m)),T(m),F(m),O(E(m),T(d),F(d),E(d)));throw new Error("internal error: Map.rebalance")}else return O(O(t,e,n,A(d)),T(d),F(d),E(d));else throw new Error("internal error: Map.rebalance")}else if(h>p+2){const d=H(t);if(d instanceof w)if(s=E(d),(s!=null?(c=s,c instanceof w?oe(c):1):0)>p+1){const m=H(E(d));if(m instanceof w)return O(O(A(d),T(d),F(d),A(m)),T(m),F(m),O(E(m),e,n,a));throw new Error("internal error: Map.rebalance")}else return O(A(d),T(d),F(d),O(E(d),e,n,a));else throw new Error("internal error: Map.rebalance")}else return O(t,e,n,a)}function ue(t,e,n,a){if(a!=null){const r=a,o=t.Compare(e,T(r))|0;return r instanceof w?o<0?it(ue(t,e,n,A(r)),T(r),F(r),E(r)):o===0?Me(e,n,A(r),E(r),oe(r)):it(A(r),T(r),F(r),ue(t,e,n,E(r))):o<0?Me(e,n,le(),a,2):o===0?we(e,n):Me(e,n,a,le(),2)}else return we(e,n)}function ct(t,e,n){e:for(;;){const a=t,r=e,o=n;if(o!=null){const s=o,c=a.Compare(r,T(s))|0;if(c===0)return vt(F(s));if(s instanceof w){t=a,e=r,n=c<0?A(s):E(s);continue e}else return}else return}}function Ut(t,e,n){const a=ct(t,e,n);if(a==null)throw new Error;return H(a)}function Jt(t,e,n){e:for(;;){const a=t,r=e,o=n;if(o!=null){const s=o,c=a.Compare(r,T(s))|0;if(s instanceof w)if(c<0){t=a,e=r,n=A(s);continue e}else{if(c===0)return!0;t=a,e=r,n=E(s);continue e}else return c===0}else return!1}}function lt(t,e){e:for(;;){const n=t,a=e;if(a!=null){const r=a;if(r instanceof w){lt(n,A(r)),n(T(r),F(r)),t=n,e=E(r);continue e}else n(T(r),F(r))}break}}function Qt(t,e){lt(t,e)}function Xt(t,e,n){let a=n;Qt((r,o)=>{e[a]=[r,o],a=a+1|0},t)}function en(t,e){return At((n,a)=>ue(t,a[0],a[1],n),le(),e)}function tn(t,e,n){e:for(;;){const a=t,r=e,o=n;if(o["System.Collections.IEnumerator.MoveNext"]()){const s=o["System.Collections.Generic.IEnumerator`1.get_Current"]();t=a,e=ue(a,s[0],s[1],r),n=o;continue e}else return r}}function ut(t,e){let n=le();for(let a=0;a<=e.length-1;a++){const r=e[a];n=ue(t,r[0],r[1],n)}return n}function nn(t,e){if(kt(e))return ut(t,e);if(e instanceof Tt)return en(t,e);{const n=_e(e);try{return tn(t,le(),n)}finally{n.Dispose()}}}class rn extends de{constructor(e,n){super();this.stack=e,this.started=n}}function dt(t){e:for(;;){const e=t;if(I(e))return Ze();{const n=G(e),a=W(e);if(a!=null){const r=a;if(r instanceof w){t=Pt([A(r),we(T(r),F(r)),E(r)],n);continue e}else return e}else{t=n;continue e}}}}function ft(t){return new rn(dt(Be(t)),!1)}function an(){throw new Error("enumeration not started")}function on(){throw new Error("enumeration already finished")}function pt(t){if(t.started){const e=t.stack;if(I(e))return on();if(W(e)!=null){const n=W(e);if(n instanceof w)throw new Error("Please report error: Map iterator, unexpected stack for current");return[T(n),F(n)]}else throw new Error("Please report error: Map iterator, unexpected stack for current")}else return an()}function sn(t){if(t.started){const e=t.stack;if(I(e))return!1;if(W(e)!=null){if(W(e)instanceof w)throw new Error("Please report error: Map iterator, unexpected stack for moveNext");return t.stack=dt(G(e)),!I(t.stack)}else throw new Error("Please report error: Map iterator, unexpected stack for moveNext")}else return t.started=!0,!I(t.stack)}function ht(t){let e=ft(t);return{["System.Collections.Generic.IEnumerator`1.get_Current"](){return pt(e)},["System.Collections.IEnumerator.get_Current"](){return pt(e)},["System.Collections.IEnumerator.MoveNext"](){return sn(e)},["System.Collections.IEnumerator.Reset"](){e=ft(t)},Dispose(){}}}class he{constructor(e,n){this.comparer=e,this.tree=n}GetHashCode(){return dn(this)|0}Equals(e){const n=this;if(e instanceof he){const a=_e(n);try{const r=_e(e);try{const o=()=>{const s=a["System.Collections.IEnumerator.MoveNext"]();if(s===r["System.Collections.IEnumerator.MoveNext"]())if(s){const c=a["System.Collections.Generic.IEnumerator`1.get_Current"](),h=r["System.Collections.Generic.IEnumerator`1.get_Current"]();return ie(c[0],h[0])&&ie(c[1],h[1])?o():!1}else return!0;else return!1};return o()}finally{r.Dispose()}}finally{a.Dispose()}}else return!1}toString(){return"map ["+Et("; ",re(n=>zt("({0}, {1})",n[0],n[1]),this))+"]"}get[Symbol.toStringTag](){return"FSharpMap"}toJSON(e){const n=this;return Array.from(n)}GetEnumerator(){return ht(this.tree)}[Symbol.iterator](){return It(this.GetEnumerator())}["System.Collections.IEnumerable.GetEnumerator"](){return ht(this.tree)}CompareTo(e){const n=this;if(e instanceof he)return jt((a,r)=>{const o=n.comparer.Compare(a[0],r[0])|0;return(o!==0?o:Gt(a[1],r[1]))|0},n,e)|0;throw new Error("not comparable\\nParameter name: obj")}["System.Collections.Generic.ICollection`1.Add2B595"](e){throw new Error("Map cannot be mutated")}["System.Collections.Generic.ICollection`1.Clear"](){throw new Error("Map cannot be mutated")}["System.Collections.Generic.ICollection`1.Remove2B595"](e){throw new Error("Map cannot be mutated")}["System.Collections.Generic.ICollection`1.Contains2B595"](e){const n=this;return mt(n,e[0])&&ie($e(n,e[0]),e[1])}["System.Collections.Generic.ICollection`1.CopyToZ2E171D71"](e,n){Xt(this.tree,e,n)}["System.Collections.Generic.ICollection`1.get_IsReadOnly"](){return!0}["System.Collections.Generic.ICollection`1.get_Count"](){return je(this)|0}["System.Collections.Generic.IReadOnlyCollection`1.get_Count"](){return je(this)|0}get size(){return je(this)|0}clear(){throw new Error("Map cannot be mutated")}delete(e){throw new Error("Map cannot be mutated")}entries(){return re(n=>[n[0],n[1]],this)}get(e){return $e(this,e)}has(e){return mt(this,e)}keys(){return re(n=>n[0],this)}set(e,n){throw new Error("Map cannot be mutated")}values(){return re(n=>n[1],this)}forEach(e,n){const a=this;Ft(r=>{e(r[1],r[0],a)},a)}}function be(t,e){return new he(t,e)}(()=>{he.empty=be(ve(),le())})();function cn(t){const e=ve();return be(e,nn(e,t))}function ln(t,e,n){return be(t.comparer,ue(t.comparer,e,n,t.tree))}function $e(t,e){return Ut(t.comparer,e,t.tree)}function je(t){return qt(t.tree)}function mt(t,e){return Jt(t.comparer,e,t.tree)}function un(t,e){return ct(t.comparer,e,t.tree)}function dn(t){const e=(r,o)=>(r<<1)+o+631;let n=0;const a=_e(t);try{for(;a["System.Collections.IEnumerator.MoveNext"]();){const r=a["System.Collections.Generic.IEnumerator`1.get_Current"]();n=e(n,He(r[0]))|0,n=e(n,He(r[1]))|0}}finally{a.Dispose()}return n|0}function ee(t,e,n){return ln(n,t,e)}function X(t,e){return un(e,t)}function fn(t){return cn(t)}function pn(t){const e=ve();return be(e,ut(e,t))}class u extends Ve{constructor(e,...n){super();this.tag=e|0,this.fields=n}cases(){return["Oil","Gas","Coal","Solar","Wind","Nuclear","Hydro","HydroStorage","Waste","StaticProd","NonFosilProd","TotalProd","Load","Import","Export","Battery","BatteryLevel","Excess"]}}function _t(){return Wt("Shared.Types.TraceKind",[],u,()=>[[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[]])}function hn(t){switch(t.tag){case 4:case 3:return!0;default:return!1}}function mn(t){switch(t.tag){case 0:case 1:case 2:return!0;default:return!1}}function yt(t){switch(t.tag){case 5:case 6:case 7:case 8:return!0;default:return!1}}class P extends de{constructor(e,n,a,r){super();this.kind=e,this.capacity=n,this.data=a,this.total=r}}class gt extends de{constructor(e,n,a){super();this.year=e|0,this.isSimulated=n,this.traces=a}}function R(t,e){return $e(t.traces,e)}function wt(t,e,n){return new gt(t,e,fn(re(a=>[a.kind,a],n)))}function _n(t){return Oe(C(()=>re(e=>e[1],t.traces)))}class me extends de{constructor(e,n,a,r){super();this.installedSolarMW=e,this.installedWindMW=n,this.installedBatteryMWh=a,this.batteryEfficiency=r}}function Fe(){return new me(Math.fround(278),Math.fround(3),Math.fround(0),Math.fround(.8999999761581421))}function yn(){return new me(Math.fround(500),Math.fround(100),Math.fround(100),Math.fround(.8999999761581421))}function gn(t,e,n,a){let r=Math.fround(0);return[o=>s=>{const c=ae((i,p)=>D(i,p),r,s/e);r=r-c,n[o]=r;const h=c*e;return a[o]=h,s-h},o=>s=>{let c;const h=ae((i,p)=>D(i,p),t-r,s);return c=fe((i,p)=>D(i,p),Math.fround(0),h),r=r+c,n[o]=r,s-c}]}function Mt(t,e){return[n=>a=>{const r=ae((o,s)=>D(o,s),t[n],a);return e[n]=r,a-r},n=>a=>{const r=ae((o,s)=>D(o,s),t[n],a);return e[n]=t[n]-r,a-r}]}function wn(t,e,n){return[a=>r=>(n[a]=t[a],r),a=>r=>{const o=ae((s,c)=>D(s,c),fe((s,c)=>D(s,c),t[a]-e[a],Math.fround(0)),r);return n[a]=t[a]-o,r-o}]}function Mn(t){return[e=>n=>(t[e]=Math.fround(0),n),e=>n=>{t[e]=n}]}function bt(t,e){let n,a,r,o,s,c;const h=R(t,new u(2)),i=R(t,new u(1)),p=R(t,new u(9)),g=R(t,new u(13)),d=R(t,new u(11)),m=R(t,new u(14)),_=R(t,new u(4)),l=R(t,new u(3)),f=e.installedWindMW/H(_.capacity),M=e.installedSolarMW/H(l.capacity),$=new P(_.kind,H(_.capacity)*f,ye(y=>f*y,_.data,Float32Array),_.total*f),L=new P(l.kind,H(l.capacity)*M,ye(y=>M*y,l.data,Float32Array),l.total*M),S=$.data.length|0,z=new Float32Array(S),U=new Float32Array(S),V=new Float32Array(S),K=new Float32Array(S),te=new Float32Array(S),ne=new Float32Array(S),se=Mt(h.data,z),We=Mt(i.data,U),De=gn(e.installedBatteryMWh,e.batteryEfficiency,V,K),Ct=Mn(te),Ne=wn(g.data,m.data,ne);for(let y=0;y<=S-1;y++){let v=$.data[y]+L.data[y]+p.data[y]-d.data[y];if(v>=Math.fround(0)){const Ce=v,B=y|0;Ct[1](B)(Ne[1](B)(De[1](B)(We[1](B)(se[1](B)(Ce)))))}else{const Ce=-v,B=y|0,Le=se[0](B)(We[0](B)(Ne[0](B)(De[0](B)(Ce))));Le>Math.fround(0)&&Re(k("sourcing should amount to zero on sample %d, have %f"))(B)(Le)}}return new gt(t.year,!0,(n=(a=(r=(o=(s=(c=ee(new u(3),L,ee(new u(4),$,t.traces)),ee(new u(2),new P(h.kind,h.capacity,z,Y(z,{GetZero:()=>0,Add:(y,v)=>y+v})),c)),ee(new u(1),new P(i.kind,i.capacity,U,Y(U,{GetZero:()=>0,Add:(y,v)=>y+v})),s)),ee(new u(16),new P(new u(16),e.installedBatteryMWh,V,Y(V,{GetZero:()=>0,Add:(y,v)=>y+v})),o)),ee(new u(15),new P(new u(15),e.installedBatteryMWh,K,Y(K,{GetZero:()=>0,Add:(y,v)=>y+v})),r)),ee(new u(17),new P(new u(17),void 0,te,Y(te,{GetZero:()=>0,Add:(y,v)=>y+v})),a)),ee(new u(13),new P(g.kind,g.capacity,ne,Y(ne,{GetZero:()=>0,Add:(y,v)=>y+v})),n)))}function bn(t,e){if(t!=null&&/\S/.test(t)){const n=+t.replace("_","");if(!Number.isNaN(n))return e.contents=n,!0}return!1}function Pe(t){const e=new Dt(0);if(bn(t,e))return e.contents;throw new Error("Input string was not in a correct format.")}function $n(){return t=>t}const xn=new Ke().Decorate(function(t,e){let n;const a=$n()(`
            :host {
                display: block;
                height: 100%%;
            }
            .energy-form {
                padding: 2em;
            }
            :host input {
                width:20em;
                color: red;
                text-align: right;
            }
        `);n=Ye(J(this),a);let r;const o=j(ke("%.0f%P()",[e.installedSolarMW]));r=J(this).useState(()=>o);const s=r[0];let c;const h=j(ke("%.0f%P()",[e.installedWindMW]));c=J(this).useState(()=>h);const i=c[0];let p;const g=j(ke("%.0f%P()",[e.installedBatteryMWh]));p=J(this).useState(()=>g);const d=p[0],m=J(this).useState(()=>""),_=m[1];return x(b`
    <p class="${n}">
    <form class="energy-form" action="#">
    <b>Simulirana inštalirana moč:</b><br>
    <input type="number" id="wind" name="wind" value="${i}" size="6" min=0 step=50 @change=${l=>{c[1](Te(l.target))}} style="text-align:right;"/>
    <label for="wind">MW vetrnic</label><br/>
    <input type="number" id="solar" name="solar" value="${s}" size="6" min=0 step=100 @change=${l=>{r[1](Te(l.target))}} style="text-align:right;"/>
    <label for="solar">MW fotopanelov</label><br/>
    <input type="number" id="battery" name="battery" value="${d}" size="6" step=50 min=0 @change=${l=>{p[1](Te(l.target))}} style="text-align:right;"/>
    <label for="battery">MWh baterij</label><br/>
    <input type="button" value="Izračunaj" @click=${l=>{let f;console.log("submit:",l);let M;try{M=new at(0,(f=Fe(),new me(Pe(s),Pe(i),Pe(d),f.batteryEfficiency)))}catch($){M=new at(1,$.message)}return pe(k("submit: %A"))(M),M.tag===1?_(m[0]):(_(""),t(M.fields[0])),l.preventDefault(),!1}} >
    </form>
    </p>
    `)});function Sn(t,e,n){let a,r,o;const s=(_,l)=>{const f=R(_,l).data,M=new Float32Array(~~((f.length+1)/24));let $=f[0];for(let L=0;L<=f.length-1;L++){const S=~~(L/24)|0,z=f[L]*Math.fround(.0010000000474974513)+M[S];$=fe((U,V)=>D(U,V),$,z),M[S]=z}return[M,$]},c=s(n,new u(3)),h=s(n,new u(4)),i=s(n,new u(6)),p=s(e,new u(2)),g=s(n,new u(2)),d=s(n,new u(17)),m=new Date(`${e.year}-01-01 0:0:0`).getTime();return a={text:"Dnevne krivulje"},r={type:"datetime"},o=[{title:{text:"Proizvodnja GWh"}},{max:100,opposite:!0,title:{text:"Stanje baterije %"}}],{chart:{zoomType:"x"},plotOptions:{},series:qe(C(()=>N(q({data:i[0],name:"Voda",pointInterval:864e5,pointStart:m,yAxis:0}),C(()=>N(q({color:"#888",data:p[0],name:`Premog ${e.year}`,pointInterval:864e5,pointStart:m,yAxis:0}),C(()=>N(q({data:g[0],name:"Premog simuliran",pointInterval:864e5,pointStart:m,yAxis:0}),C(()=>N(q({data:h[0],name:"Veter",pointInterval:864e5,pointStart:m,yAxis:0}),C(()=>N(q({data:c[0],name:"Sonce",pointInterval:864e5,pointStart:m,yAxis:0}),C(()=>N(q({color:"#c6d",data:d[0],name:"Prese\u017Eek",pointInterval:864e5,pointStart:m,yAxis:0}),C(()=>{let _;const l=X(new u(16),n.traces);if(l!=null)if(ie(l.capacity,void 0))_=void 0;else{let f;switch(l!=null&&H(l.capacity)===Math.fround(0)?f=0:f=1,f){case 0:{_=void 0;break}case 1:{if(l!=null){const M=l,$=M.data,L=H(M.capacity),S=new Float32Array(~~(($.length+1)/24)),z=Ae(~~(($.length+1)/24),V=>Math.fround(34028234663852886e22),Float32Array),U=new Float32Array(~~(($.length+1)/24));for(let V=0;V<=$.length-1;V++){const K=~~(V/24)|0,te=$[V]/L*Math.fround(100);z[K]=ae((ne,se)=>D(ne,se),z[K],te),U[K]=fe((ne,se)=>D(ne,se),U[K],te),S[K]=S[K]+te/Math.fround(24)}_=[S,z,U]}else throw new Error("Match failure");break}}}else _=void 0;if(_!=null){const f=_[1],M=_[2],$=_[0];return pe(k("d0 = %f"))(m),N(q({color:"#8085e9",data:Nt((L,S,z)=>[m+L*864e5,S,z],f,M),name:"% baterije min/max na dan",opacity:.3,type:"arearange",yAxis:1}),C(()=>q({color:"#8085e9",data:$,name:"% baterije dnevno povpre\u010Dje",pointInterval:864e5,pointStart:m,yAxis:1})))}else return Lt()})))))))))))))),title:a,type:"arearange",xAxis:r,yAxis:o}}const Cn=new Ke().Decorate(function(t,e,n){const a=Sn(t,e,n);return setTimeout(()=>{console.log("chart options",a),Highcharts.chart("chart_container",a)},200),x(b`
    <p>
    <div id="chart_container" style="width:1000px; height:600px;" />
    </p>
    `)});function $t(t){let e=0,n=2147483647;const a=qe(C(()=>re(r=>(e=fe((o,s)=>D(o,s),e,r.data.length)|0,n=ae((o,s)=>D(o,s),n,r.data.length)|0,r.data),t)));return e===n?Ae(e,r=>{let o=Math.fround(0);for(let s=0;s<=a.length-1;s++){const c=a[s];o=o+c[r]}return o},Float32Array):Ae(e,r=>{let o=Math.fround(0);for(let s=0;s<=a.length-1;s++){const c=a[s];c.length>r&&(o=o+c[r])}return o},Float32Array)}function vn(t){const e=Ue(l=>{const f=l.kind;return(hn(f)?!0:mn(f))?!0:yt(f)},_n(t)),n=e[0],a=e[1];let r;const o=$t(n);r=new P(new u(11),Je(l=>Qe(l.capacity,Math.fround(0)),n,{GetZero:()=>0,Add:(l,f)=>l+f}),o,Y(o,{GetZero:()=>0,Add:(l,f)=>l+f}));const s=Ue(l=>yt(l.kind),n),c=s[0];let h;const i=$t(c);h=new P(new u(9),void 0,i,Y(i,{GetZero:()=>0,Add:(l,f)=>l+f}));let p;const g=Vt(l=>ie(l.kind,new u(12)),a),d=r.data,m=new Float32Array(d.length),_=new Float32Array(d.length);for(let l=0;l<=d.length-1;l++){const f=g.data[l]-d[l];f>Math.fround(0)?m[l]=f:_[l]=-f}return p=ce([new P(new u(13),void 0,m,Y(m,{GetZero:()=>0,Add:(l,f)=>l+f})),new P(new u(14),void 0,_,Y(_,{GetZero:()=>0,Add:(l,f)=>l+f}))]),wt(t.year,t.isSimulated,Oe(C(()=>N(q(r),C(()=>N(q(h),C(()=>N(c,C(()=>N(s[1],C(()=>N(p,C(()=>a)))))))))))))}class kn{constructor(){}}function Tn(){return new kn}function An(t,e){return{then:(n,a)=>{try{return e().then(n,a)}catch(r){if(a==null)return Promise.reject(r);try{const o=a(r);return Promise.resolve(o)}catch(o){return Promise.reject(o)}}},catch:n=>{try{return e().catch(n)}catch(a){try{const r=n(a);return Promise.resolve(r)}catch(r){return Promise.reject(r)}}}}}function En(t,e){return e.then(n=>n)}const xt=Tn(),In=pn(ye(t=>(pe(`'${Xe(t)}' -> ${et(t,[])}`),[Xe(t),et(t,[])]),Bt(_t())));function jn(t){return new P($e(In,t.kind),t.capacity,t.data,t.total)}En(xt,An(xt,()=>{const t=fetch("contacts.json").then(e=>e.json());return pe(k("%A"))(t),Promise.resolve()}));function Ln(){}const Vn=(()=>(Fe(),new me(Math.fround(6e3),Math.fround(400),Math.fround(6e3),Math.fround(.8999999761581421))))(),Bn=(()=>(Fe(),new me(Math.fround(1e3),Math.fround(100),Math.fround(100),Math.fround(.8999999761581421))))();function ze(t){switch(t.tag){case 1:return"Plin";case 2:return"Premog";case 3:return"Sonce";case 4:return"Veter";case 5:return"NEK";case 6:return"Voda";case 7:return"\u0106HE";case 8:return"Smeti";case 9:return"Stati\u010Dna proizvodnja";case 10:return"Nefosilna proizvodnja";case 11:return"Skupaj";case 12:return"Poraba";case 13:return"Uvoz";case 14:return"Izvoz";case 15:return"Baterija";case 16:return"Nivo baterije";case 17:return"Prese\u017Eek";default:return"Nafta"}}const xe=ce([new u(4),new u(3),new u(15)]),Se=ce([new u(4),new u(3),new u(15),new u(2),new u(1),new u(5),new u(6),new u(13),new u(14),new u(17)]);function Fn(t){return`${t.year}${t.isSimulated?"'":""}`}function Pn(){return x(b`
    <tr>
    <th></th>
    <th colspan=${tt(xe)}>Inštalirana moč [MW,MWh]</th>
    <th colspan=${tt(Se)}>Proizvodnja [GWh]</th>
    <th>Izpusti [MT]</th>
    </tr>
    <tr>
    <th>Leto</th>
    ${Q(t=>`${t}`,t=>x(b`<th>${ze(t)}</th>`),xe)}
    ${Q(t=>`${t}`,t=>x(b`<th>${ze(t)}</th>`),Se)}
    <th>CO2</th>
    </tr>
    `)}function Ge(t){return(R(t,new u(2)).total*Math.fround(448.32000732421875)+R(t,new u(1)).total*Math.fround(988.8300170898438))/Math.fround(1e6)}function zn(t){let e;return x(b`
    <tr>
    <th>${Fn(t)}</th>
    ${Q(n=>`${n}`,n=>{let a,r;return x(b`<td>${a=X(n,t.traces),a==null?Z():(r=Qe(a.capacity,Math.fround(0)),j(k("%.0f"))(r))}</td>`)},xe)}
    ${Q(n=>`${n}`,n=>{let a,r;return x(b`<td>${a=X(n,t.traces),a==null?Z():(r=a.total/Math.fround(1e3),j(k("%.1f"))(r))}</td>`)},Se)}
    <td>${e=Ge(t),j(k("%.1f"))(e)}</td>
    </tr>
    `)}function Gn(t,e){let n;const a=(r,o)=>{let s;const c=[r,o];let h,i,p;switch(c[0]!=null&&c[1]!=null?(h=0,i=c[1],p=c[0]):h=1,h){case 0:{const g=i/p;return g>Math.fround(1)?j(k("%.1fx"))(g):(s=Math.fround(100)*g,j(k("%.1f%%"))(s))}case 1:return Z()}};return x(b`
    <tr>
    <th>Delež</th>
    ${Q(r=>`${r}`,r=>{let o;return x(b`<td>${o=r,a(ge(s=>s.capacity,X(o,t.traces)),ge(s=>s.capacity,X(o,e.traces)))}</td>`)},xe)}
    ${Q(r=>`${r}`,r=>{let o;return x(b`<td>${o=r,a(Ee(s=>s.total,X(o,t.traces)),Ee(s=>s.total,X(o,e.traces)))}</td>`)},Se)}
    <td>${n=Math.fround(100)*Ge(e)/Ge(t),j(k("%.1f%%"))(n)}</td>
    </tr>
    `)}class St extends de{constructor(e,n,a,r){super();this.kind=e,this.deltaCapacity=n,this.price=a,this.cost=r}}function Hn(){return Ht("EnergyApp.CostItem",[],St,()=>[["kind",_t()],["deltaCapacity",Ie],["price",Ie],["cost",Ie]])}function Wn(t,e){const n=x(b`<tr><th>Vir</th><th>Gradnja [MW]</th><th>Cena [€/kW]</th><th>Cena [M€]</th></tr>`),a=Zt(o=>{let s;const c=o,h=ge(f=>f.capacity,X(c,e.traces)),i=[ge(f=>f.capacity,X(c,t.traces)),h];let p,g,d,m;switch(i[0]==null?i[1]!=null?(p=1,m=i[1]):p=2:i[1]!=null?(p=0,g=i[1],d=i[0]):p=2,p){case 0:{s=g-d;break}case 1:{s=m;break}case 2:{s=Math.fround(0);break}}let _;const l=o;switch(l.tag){case 3:{_=Math.fround(790);break}case 4:{_=Math.fround(1500);break}case 15:{_=Math.fround(340);break}default:_=Re(`missing cost of ${l}`)}return new St(o,s,_,s*_*Math.fround(.0010000000474974513))},ce([new u(4),new u(3),new u(15)])),r=Je(o=>o.cost,a,{GetZero:()=>0,Add:(o,s)=>o+s});return x(b`
    <h2>Cena</h2>
    <p>Minimalni stroški investicije, če bi se gradilo 'na veliko' (elektrogospodarstvo oz. država), <br> brez odkupa zemljišč, brez novih daljnovodov, brez korupcije.</p>
    <table class="energy-table">
    <thead>${n}</thead>
    <tbody>
    ${Q(o=>rt(o[0]),o=>{const s=o[1];return x(b`
        <tr>
        <td>${ze(s.kind)}</td>
        <td>${j(k("%.1f"))(s.deltaCapacity)}</td>
        <td>${j(k("%.1f"))(s.price)}</td>
        <td>${j(k("%.1f"))(s.cost)}</td>
        </tr>
        `)},nt(a))}
    <tr>
    <td>Skupaj</td>
    <td></td>
    <td></td>
    <td>${j(k("%.1f"))(r)}</td>
    </tr>
    <tbody>
    </table>
    `)}const Zn=new Ot("energy-app").Decorate(function(){this.init(i=>{const p=i;return p.useShadowDom=!1,p.styles=Be(Rt(b`
        :host {
        display: block;
        //height: 100%;
        padding: 2em;
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
        `)),Promise.resolve(void 0)});const t=Ye(J(this),`
        :host {
            display: block;
            height: 100%%;
            margin: auto;
        }
        :host.energy-sim {
            padding: 2em;
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
    `);let e;const n=yn();e=J(this).useState(()=>n);const a=e[0],r=J(this).useState(Ze),o=r[0],s=r[1];J(this).useEffectOnce(()=>{const i=2020;return fetch(`energy-traces-${i}.json`).then(g=>g.json()).then(g=>{const d=vn(wt(i,!1,ye(m=>jn(m),g)));s(ce([d,bt(d,a)]))}),Kt()});const c=x(b`
    <p>${"Opombe:"}
    <ul>
    ${Q(i=>rt(i[0]),i=>x(b`<li>${i[1]}</li>`),nt(["Za NEK se \u0161teje samo slovenski del proizvodnje. Za toliko je zni\u017Ean tudi izvoz.","Proizvodnja baterije v tabeli je prikazana kot priskevek baterije k letni proizvodnji: 90% shranjene energije, ki jo baterija vrne v omre\u017Eje.","Kadar je energije v izobilju, se po vrsti: zaustavi premog, plin, polni baterijo, zmanj\u0161a uvoz, preostanek se \u0161teje kot prese\u017Eek."]))}
    `),h=Ee(i=>i.year,Yt(o));return x(b`
    <div class="energy-sim ${t}">
    <h2>Energijska simulacija</h2>
    <p>Simulacija elektroenergetskega sistema na realnih urnih podatkih donosa sonca in vetra za leto ${h}<br>ob predpostaviki povečanih kapacitet vetrnih in solarnih elektrarn ter baterijskega shranjavanja energije.</p>
    <div class="energy-result">
    <table class="energy-table">
    <thead>
    ${Pn()}
    </thead>
    <tbody>
    ${Q(i=>`${i.year}${i.isSimulated}`,i=>zn(i),o)}
    ${I(o)?Z():I(G(o))?Z():I(G(G(o)))?Gn(W(o),W(G(o))):Z()}
    </tbody>
    </table>
    ${xn(i=>{if(!ie(i,a)&&(e[1](i),!I(o))){const p=W(o);pe(k("running simulation...")),s(ce([p,bt(p,i)]))}},a)}
    ${c}
    ${I(o)?Z():I(G(o))?Z():I(G(G(o)))?Wn(W(o),W(G(o))):Z()}
    ${I(o)?Z():I(G(o))?Z():Cn(a,W(o),W(G(o)))}
    </div>
    </div>
    `)});export{St as CostItem,Hn as CostItem$reflection,Zn as EnergySimulationApp,ze as colName,Se as dataColumns,Ge as getTonsCO2,Fn as getYsYearName,xe as installedColumns,Ln as register,Wn as renderCostList,Gn as renderDeltaRow,Pn as renderTraceHeader,zn as renderTraceRow,Vn as simConfig,Bn as simConfig$0027};
