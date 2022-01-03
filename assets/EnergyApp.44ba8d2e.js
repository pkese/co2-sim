import{U as Ve,s as vt,v as V,i as kt,F as At,f as Tt,g as ge,e as le,j as Et,m as se,a as Be,t as It,c as jt,b as Ft,L as Te,d as He,R as pe,h as G,k as B,l as H,o as Pt,n as Ze,p as Gt,q as zt,r as Oe,u as k,w as Wt,x as J,y as we,z as ae,A as z,B as ue,C as Re,D as E,E as Dt,H as Ke,G as Ye,I as X,J as W,K as Ee,M as C,N as x,O as Ie,P as me,Q as qe,S as Z,T as Q,V as Me,W as Nt,X as Lt,Y as Ue,Z as Je,_ as Qe,$ as Vt,a0 as de,a1 as Bt,a2 as Xe,a3 as et,a4 as tt,a5 as ee,a6 as R,a7 as be,a8 as je,a9 as Ht,aa as Zt,ab as nt,ac as rt,ad as Ot,ae as Rt,af as Kt,ag as Yt,ah as Fe}from"./index.5baa9a39.js";import"./vendor.bd24dec8.js";class at extends Ve{constructor(e,...n){super();this.tag=e|0,this.fields=n}cases(){return["Ok","Error"]}}class ot{constructor(e,n){this.k=e,this.v=n}}function $e(t,e){return new ot(t,e)}function I(t){return t.k}function D(t){return t.v}class $ extends ot{constructor(e,n,a,r,o){super(e,n);this.left=a,this.right=r,this.h=o|0}}function xe(t,e,n,a,r){return new $(t,e,n,a,r)}function j(t){return t.left}function F(t){return t.right}function ie(t){return t.h}function he(){}function st(t,e){e:for(;;){const n=t,a=e;if(a!=null){const r=a;if(r instanceof $){t=st(n+1,j(r)),e=F(r);continue e}else return n+1|0}else return n|0}}function qt(t){return st(0,t)}function K(t,e,n,a){let r;const o=t;if(o!=null){const i=o;r=i instanceof $?ie(i):1}else r=0;let s;const c=a;if(c!=null){const i=c;s=i instanceof $?ie(i):1}else s=0;const p=(r<s?s:r)|0;return p===0?$e(e,n):xe(e,n,t,a,p+1)}function it(t,e,n,a){let r,o,s,c,p;const i=t;if(i!=null){const d=i;p=d instanceof $?ie(d):1}else p=0;let f;const w=a;if(w!=null){const d=w;f=d instanceof $?ie(d):1}else f=0;if(f>p+2){const d=V(a);if(d instanceof $)if(r=j(d),(r!=null?(o=r,o instanceof $?ie(o):1):0)>p+1){const m=V(j(d));if(m instanceof $)return K(K(t,e,n,j(m)),I(m),D(m),K(F(m),I(d),D(d),F(d)));throw new Error("internal error: Map.rebalance")}else return K(K(t,e,n,j(d)),I(d),D(d),F(d));else throw new Error("internal error: Map.rebalance")}else if(p>f+2){const d=V(t);if(d instanceof $)if(s=F(d),(s!=null?(c=s,c instanceof $?ie(c):1):0)>f+1){const m=V(F(d));if(m instanceof $)return K(K(j(d),I(d),D(d),j(m)),I(m),D(m),K(F(m),e,n,a));throw new Error("internal error: Map.rebalance")}else return K(j(d),I(d),D(d),K(F(d),e,n,a));else throw new Error("internal error: Map.rebalance")}else return K(t,e,n,a)}function fe(t,e,n,a){if(a!=null){const r=a,o=t.Compare(e,I(r))|0;return r instanceof $?o<0?it(fe(t,e,n,j(r)),I(r),D(r),F(r)):o===0?xe(e,n,j(r),F(r),ie(r)):it(j(r),I(r),D(r),fe(t,e,n,F(r))):o<0?xe(e,n,he(),a,2):o===0?$e(e,n):xe(e,n,a,he(),2)}else return $e(e,n)}function ct(t,e,n){e:for(;;){const a=t,r=e,o=n;if(o!=null){const s=o,c=a.Compare(r,I(s))|0;if(c===0)return vt(D(s));if(s instanceof $){t=a,e=r,n=c<0?j(s):F(s);continue e}else return}else return}}function Ut(t,e,n){const a=ct(t,e,n);if(a==null)throw new Error;return V(a)}function Jt(t,e,n){e:for(;;){const a=t,r=e,o=n;if(o!=null){const s=o,c=a.Compare(r,I(s))|0;if(s instanceof $)if(c<0){t=a,e=r,n=j(s);continue e}else{if(c===0)return!0;t=a,e=r,n=F(s);continue e}else return c===0}else return!1}}function lt(t,e){e:for(;;){const n=t,a=e;if(a!=null){const r=a;if(r instanceof $){lt(n,j(r)),n(I(r),D(r)),t=n,e=F(r);continue e}else n(I(r),D(r))}break}}function Qt(t,e){lt(t,e)}function Xt(t,e,n){let a=n;Qt((r,o)=>{e[a]=[r,o],a=a+1|0},t)}function en(t,e){return Tt((n,a)=>fe(t,a[0],a[1],n),he(),e)}function tn(t,e,n){e:for(;;){const a=t,r=e,o=n;if(o["System.Collections.IEnumerator.MoveNext"]()){const s=o["System.Collections.Generic.IEnumerator`1.get_Current"]();t=a,e=fe(a,s[0],s[1],r),n=o;continue e}else return r}}function ut(t,e){let n=he();for(let a=0;a<=e.length-1;a++){const r=e[a];n=fe(t,r[0],r[1],n)}return n}function nn(t,e){if(kt(e))return ut(t,e);if(e instanceof At)return en(t,e);{const n=ge(e);try{return tn(t,he(),n)}finally{n.Dispose()}}}class rn extends pe{constructor(e,n){super();this.stack=e,this.started=n}}function dt(t){e:for(;;){const e=t;if(G(e))return Ze();{const n=B(e),a=H(e);if(a!=null){const r=a;if(r instanceof $){t=Pt([j(r),$e(I(r),D(r)),F(r)],n);continue e}else return e}else{t=n;continue e}}}}function ht(t){return new rn(dt(Be(t)),!1)}function an(){throw new Error("enumeration not started")}function on(){throw new Error("enumeration already finished")}function ft(t){if(t.started){const e=t.stack;if(G(e))return on();if(H(e)!=null){const n=H(e);if(n instanceof $)throw new Error("Please report error: Map iterator, unexpected stack for current");return[I(n),D(n)]}else throw new Error("Please report error: Map iterator, unexpected stack for current")}else return an()}function sn(t){if(t.started){const e=t.stack;if(G(e))return!1;if(H(e)!=null){if(H(e)instanceof $)throw new Error("Please report error: Map iterator, unexpected stack for moveNext");return t.stack=dt(B(e)),!G(t.stack)}else throw new Error("Please report error: Map iterator, unexpected stack for moveNext")}else return t.started=!0,!G(t.stack)}function pt(t){let e=ht(t);return{["System.Collections.Generic.IEnumerator`1.get_Current"](){return ft(e)},["System.Collections.IEnumerator.get_Current"](){return ft(e)},["System.Collections.IEnumerator.MoveNext"](){return sn(e)},["System.Collections.IEnumerator.Reset"](){e=ht(t)},Dispose(){}}}class _e{constructor(e,n){this.comparer=e,this.tree=n}GetHashCode(){return dn(this)|0}Equals(e){const n=this;if(e instanceof _e){const a=ge(n);try{const r=ge(e);try{const o=()=>{const s=a["System.Collections.IEnumerator.MoveNext"]();if(s===r["System.Collections.IEnumerator.MoveNext"]())if(s){const c=a["System.Collections.Generic.IEnumerator`1.get_Current"](),p=r["System.Collections.Generic.IEnumerator`1.get_Current"]();return le(c[0],p[0])&&le(c[1],p[1])?o():!1}else return!0;else return!1};return o()}finally{r.Dispose()}}finally{a.Dispose()}}else return!1}toString(){return"map ["+Et("; ",se(n=>Gt("({0}, {1})",n[0],n[1]),this))+"]"}get[Symbol.toStringTag](){return"FSharpMap"}toJSON(e){const n=this;return Array.from(n)}GetEnumerator(){return pt(this.tree)}[Symbol.iterator](){return It(this.GetEnumerator())}["System.Collections.IEnumerable.GetEnumerator"](){return pt(this.tree)}CompareTo(e){const n=this;if(e instanceof _e)return jt((a,r)=>{const o=n.comparer.Compare(a[0],r[0])|0;return(o!==0?o:zt(a[1],r[1]))|0},n,e)|0;throw new Error("not comparable\\nParameter name: obj")}["System.Collections.Generic.ICollection`1.Add2B595"](e){throw new Error("Map cannot be mutated")}["System.Collections.Generic.ICollection`1.Clear"](){throw new Error("Map cannot be mutated")}["System.Collections.Generic.ICollection`1.Remove2B595"](e){throw new Error("Map cannot be mutated")}["System.Collections.Generic.ICollection`1.Contains2B595"](e){const n=this;return mt(n,e[0])&&le(Ce(n,e[0]),e[1])}["System.Collections.Generic.ICollection`1.CopyToZ2E171D71"](e,n){Xt(this.tree,e,n)}["System.Collections.Generic.ICollection`1.get_IsReadOnly"](){return!0}["System.Collections.Generic.ICollection`1.get_Count"](){return Pe(this)|0}["System.Collections.Generic.IReadOnlyCollection`1.get_Count"](){return Pe(this)|0}get size(){return Pe(this)|0}clear(){throw new Error("Map cannot be mutated")}delete(e){throw new Error("Map cannot be mutated")}entries(){return se(n=>[n[0],n[1]],this)}get(e){return Ce(this,e)}has(e){return mt(this,e)}keys(){return se(n=>n[0],this)}set(e,n){throw new Error("Map cannot be mutated")}values(){return se(n=>n[1],this)}forEach(e,n){const a=this;Ft(r=>{e(r[1],r[0],a)},a)}}function Se(t,e){return new _e(t,e)}(()=>{_e.empty=Se(Te(),he())})();function cn(t){const e=Te();return Se(e,nn(e,t))}function ln(t,e,n){return Se(t.comparer,fe(t.comparer,e,n,t.tree))}function Ce(t,e){return Ut(t.comparer,e,t.tree)}function Pe(t){return qt(t.tree)}function mt(t,e){return Jt(t.comparer,e,t.tree)}function un(t,e){return ct(t.comparer,e,t.tree)}function dn(t){const e=(r,o)=>(r<<1)+o+631;let n=0;const a=ge(t);try{for(;a["System.Collections.IEnumerator.MoveNext"]();){const r=a["System.Collections.Generic.IEnumerator`1.get_Current"]();n=e(n,He(r[0]))|0,n=e(n,He(r[1]))|0}}finally{a.Dispose()}return n|0}function oe(t,e,n){return ln(n,t,e)}function te(t,e){return un(e,t)}function hn(t){return cn(t)}function fn(t){const e=Te();return Se(e,ut(e,t))}class u extends Ve{constructor(e,...n){super();this.tag=e|0,this.fields=n}cases(){return["Oil","Gas","Coal","Solar","Wind","Nuclear","Hydro","HydroStorage","Waste","StaticProd","NonFosilProd","TotalProd","Load","Import","Export","Battery","BatteryLevel","Excess"]}}function _t(){return Wt("Shared.Types.TraceKind",[],u,()=>[[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[]])}function pn(t){switch(t.tag){case 4:case 3:return!0;default:return!1}}function mn(t){switch(t.tag){case 0:case 1:case 2:return!0;default:return!1}}function yt(t){switch(t.tag){case 5:case 6:case 7:case 8:return!0;default:return!1}}class N extends pe{constructor(e,n,a,r){super();this.kind=e,this.capacity=n,this.data=a,this.total=r}}class gt extends pe{constructor(e,n,a){super();this.year=e|0,this.isSimulated=n,this.traces=a}}function Y(t,e){return Ce(t.traces,e)}function wt(t,e,n){return new gt(t,e,hn(se(a=>[a.kind,a],n)))}function _n(t){return Oe(k(()=>se(e=>e[1],t.traces)))}class ye extends pe{constructor(e,n,a,r){super();this.installedSolarMW=e,this.installedWindMW=n,this.installedBatteryMWh=a,this.batteryEfficiency=r}}function Ge(){return new ye(Math.fround(278),Math.fround(3),Math.fround(0),Math.fround(.8999999761581421))}function yn(){return new ye(Math.fround(500),Math.fround(100),Math.fround(100),Math.fround(.8999999761581421))}function gn(t,e,n,a){let r=Math.fround(0);return[o=>s=>{const c=ae((i,f)=>z(i,f),r,s/e);r=r-c,n[o]=r;const p=c*e;return a[o]=p,s-p},o=>s=>{let c;const p=ae((i,f)=>z(i,f),t-r,s);return c=ue((i,f)=>z(i,f),Math.fround(0),p),r=r+c,n[o]=r,s-c}]}function Mt(t,e){return[n=>a=>{const r=ae((o,s)=>z(o,s),t[n],a);return e[n]=r,a-r},n=>a=>{const r=ae((o,s)=>z(o,s),t[n],a);return e[n]=t[n]-r,a-r}]}function wn(t,e,n){return[a=>r=>(n[a]=t[a],r),a=>r=>{const o=ae((s,c)=>z(s,c),ue((s,c)=>z(s,c),t[a]-e[a],Math.fround(0)),r);return n[a]=t[a]-o,r-o}]}function Mn(t){return[e=>n=>(t[e]=Math.fround(0),n),e=>n=>{t[e]=n}]}function bt(t,e){let n,a,r,o,s,c;const p=Y(t,new u(2)),i=Y(t,new u(1)),f=Y(t,new u(9)),w=Y(t,new u(13)),d=Y(t,new u(11)),m=Y(t,new u(14)),_=Y(t,new u(4)),l=Y(t,new u(3)),h=e.installedWindMW/V(_.capacity),y=e.installedSolarMW/V(l.capacity),P=new N(_.kind,V(_.capacity)*h,we(g=>h*g,_.data,Float32Array),_.total*h),v=new N(l.kind,V(l.capacity)*y,we(g=>y*g,l.data,Float32Array),l.total*y),M=P.data.length|0,A=new Float32Array(M),ne=new Float32Array(M),re=new Float32Array(M),ce=new Float32Array(M),S=new Float32Array(M),b=new Float32Array(M),L=Mt(p.data,A),q=Mt(i.data,ne),U=gn(e.installedBatteryMWh,e.batteryEfficiency,re,ce),Ct=Mn(S),Ne=wn(w.data,m.data,b);for(let g=0;g<=M-1;g++){let T=P.data[g]+v.data[g]+f.data[g]-d.data[g];if(T>=Math.fround(0)){const Ae=T,O=g|0;Ct[1](O)(Ne[1](O)(U[1](O)(q[1](O)(L[1](O)(Ae)))))}else{const Ae=-T,O=g|0,Le=L[0](O)(q[0](O)(Ne[0](O)(U[0](O)(Ae))));Le>Math.fround(0)&&Re(E("sourcing should amount to zero on sample %d, have %f"))(O)(Le)}}return new gt(t.year,!0,(n=(a=(r=(o=(s=(c=oe(new u(3),v,oe(new u(4),P,t.traces)),oe(new u(2),new N(p.kind,p.capacity,A,J(A,{GetZero:()=>0,Add:(g,T)=>g+T})),c)),oe(new u(1),new N(i.kind,i.capacity,ne,J(ne,{GetZero:()=>0,Add:(g,T)=>g+T})),s)),oe(new u(16),new N(new u(16),e.installedBatteryMWh,re,J(re,{GetZero:()=>0,Add:(g,T)=>g+T})),o)),oe(new u(15),new N(new u(15),e.installedBatteryMWh,ce,J(ce,{GetZero:()=>0,Add:(g,T)=>g+T})),r)),oe(new u(17),new N(new u(17),void 0,S,J(S,{GetZero:()=>0,Add:(g,T)=>g+T})),a)),oe(new u(13),new N(w.kind,w.capacity,b,J(b,{GetZero:()=>0,Add:(g,T)=>g+T})),n)))}function bn(t,e){if(t!=null&&/\S/.test(t)){const n=+t.replace("_","");if(!Number.isNaN(n))return e.contents=n,!0}return!1}function ze(t){const e=new Dt(0);if(bn(t,e))return e.contents;throw new Error("Input string was not in a correct format.")}function $n(){return t=>t}const xn=new Ke().Decorate(function(t,e){let n;const a=$n()(`
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
        `);n=Ye(X(this),a);let r;const o=W(Ee("%.0f%P()",[e.installedSolarMW]));r=X(this).useState(()=>o);const s=r[0];let c;const p=W(Ee("%.0f%P()",[e.installedWindMW]));c=X(this).useState(()=>p);const i=c[0];let f;const w=W(Ee("%.0f%P()",[e.installedBatteryMWh]));f=X(this).useState(()=>w);const d=f[0],m=X(this).useState(()=>""),_=m[1];return C(x`
    <p class="${n}">
    <form class="energy-form" action="#">
    <b>Simulirana inštalirana moč:</b><br>
    <input type="number" id="wind" name="wind" value="${i}" size="6" min=0 step=50 @change=${l=>{c[1](Ie(l.target))}} style="text-align:right;"/>
    <label for="wind">MW vetrnic</label><br/>
    <input type="number" id="solar" name="solar" value="${s}" size="6" min=0 step=100 @change=${l=>{r[1](Ie(l.target))}} style="text-align:right;"/>
    <label for="solar">MW fotopanelov</label><br/>
    <input type="number" id="battery" name="battery" value="${d}" size="6" step=50 min=0 @change=${l=>{f[1](Ie(l.target))}} style="text-align:right;"/>
    <label for="battery">MWh baterij</label><br/>
    <input type="button" value="Izračunaj" @click=${l=>{let h;console.log("submit:",l);let y;try{y=new at(0,(h=Ge(),new ye(ze(s),ze(i),ze(d),h.batteryEfficiency)))}catch(P){y=new at(1,P.message)}return me(E("submit: %A"))(y),y.tag===1?_(m[0]):(_(""),t(y.fields[0])),l.preventDefault(),!1}} >
    </form>
    </p>
    `)});function Sn(t,e,n){let a,r,o;const s=(_,l)=>{const h=Y(_,l).data,y=new Float32Array(~~((h.length+1)/24));let P=h[0];for(let v=0;v<=h.length-1;v++){const M=~~(v/24)|0,A=h[v]+y[M];P=ue((ne,re)=>z(ne,re),P,A),y[M]=A}return[y,P]},c=s(n,new u(3)),p=s(n,new u(4)),i=s(n,new u(6)),f=s(e,new u(2)),w=s(n,new u(2)),d=s(n,new u(17)),m=new Date(`${e.year}-01-01 0:0:0`).getTime();return a={text:"Dnevne krivulje"},r={type:"datetime"},o=[{title:{text:"Proizvodnja MW"}},{opposite:!0,title:{text:"Stanje baterije %"}}],{plotOptions:{},series:qe(k(()=>{let _,l,h,y,P,v,M,A,ne,re,ce;return Z((_=(l=te(new u(16),n.traces),l!=null?le(l.capacity,void 0)?void 0:l!=null?V(l.capacity)===Math.fround(0)?void 0:l!=null?(h=l,y=h.data,P=V(h.capacity),v=new Float32Array(~~((y.length+1)/24)),M=Me(~~((y.length+1)/24),S=>Math.fround(34028234663852886e22),Float32Array),A=new Float32Array(~~((y.length+1)/24)),(()=>{for(let S=0;S<=y.length-1;S++){const b=~~(S/24)|0,L=y[S]/P*Math.fround(100);M[b]=ae((q,U)=>z(q,U),M[b],L),A[b]=ue((q,U)=>z(q,U),A[b],L),v[b]=v[b]+L/Math.fround(24)}})(),[v,M,A]):(()=>{throw new Error("Match failure")})():l!=null?(h=l,y=h.data,P=V(h.capacity),v=new Float32Array(~~((y.length+1)/24)),M=Me(~~((y.length+1)/24),S=>Math.fround(34028234663852886e22),Float32Array),A=new Float32Array(~~((y.length+1)/24)),(()=>{for(let S=0;S<=y.length-1;S++){const b=~~(S/24)|0,L=y[S]/P*Math.fround(100);M[b]=ae((q,U)=>z(q,U),M[b],L),A[b]=ue((q,U)=>z(q,U),A[b],L),v[b]=v[b]+L/Math.fround(24)}})(),[v,M,A]):(()=>{throw new Error("Match failure")})():void 0),_!=null?(ne=_[1],re=_[2],ce=_[0],me(E("d0 = %f"))(m),Z(Q({color:"#8085e9",data:Nt((S,b,L)=>[m+S*864e5,b,L],ne,re),name:"% baterije min/max na dan",opacity:.3,type:"arearange",yAxis:1}),k(()=>Q({color:"#8085e9",data:ce,name:"% baterije dnevno povpre\u010Dje",pointInterval:864e5,pointStart:m,yAxis:1})))):Lt()),k(()=>Z(Q({data:i[0],name:"Voda",pointInterval:864e5,pointStart:m,yAxis:0}),k(()=>Z(Q({color:"#888",data:f[0],name:`Premog ${e.year}`,pointInterval:864e5,pointStart:m,yAxis:0}),k(()=>Z(Q({data:w[0],name:"Premog simuliran",pointInterval:864e5,pointStart:m,yAxis:0}),k(()=>Z(Q({data:p[0],name:"Veter",pointInterval:864e5,pointStart:m,yAxis:0}),k(()=>Z(Q({data:c[0],name:"Sonce",pointInterval:864e5,pointStart:m,yAxis:0}),k(()=>Q({color:"#c6d",data:d[0],name:"Prese\u017Eek",pointInterval:864e5,pointStart:m,yAxis:0})))))))))))))})),title:a,type:"arearange",xAxis:r,yAxis:o}}const Cn=new Ke().Decorate(function(t,e,n){const a=Sn(t,e,n);return setTimeout(()=>{console.log("chart options",a),Highcharts.chart("chart_container",a)},200),C(x`
    <p>
    <div id="chart_container" style="width:1000px; height:600px;" />
    </p>
    `)});function $t(t){let e=0,n=2147483647;const a=qe(k(()=>se(r=>(e=ue((o,s)=>z(o,s),e,r.data.length)|0,n=ae((o,s)=>z(o,s),n,r.data.length)|0,r.data),t)));return e===n?Me(e,r=>{let o=Math.fround(0);for(let s=0;s<=a.length-1;s++){const c=a[s];o=o+c[r]}return o},Float32Array):Me(e,r=>{let o=Math.fround(0);for(let s=0;s<=a.length-1;s++){const c=a[s];c.length>r&&(o=o+c[r])}return o},Float32Array)}function vn(t){const e=Ue(l=>{const h=l.kind;return(pn(h)?!0:mn(h))?!0:yt(h)},_n(t)),n=e[0],a=e[1];let r;const o=$t(n);r=new N(new u(11),Je(l=>Qe(l.capacity,Math.fround(0)),n,{GetZero:()=>0,Add:(l,h)=>l+h}),o,J(o,{GetZero:()=>0,Add:(l,h)=>l+h}));const s=Ue(l=>yt(l.kind),n),c=s[0];let p;const i=$t(c);p=new N(new u(9),void 0,i,J(i,{GetZero:()=>0,Add:(l,h)=>l+h}));let f;const w=Vt(l=>le(l.kind,new u(12)),a),d=r.data,m=new Float32Array(d.length),_=new Float32Array(d.length);for(let l=0;l<=d.length-1;l++){const h=w.data[l]-d[l];h>Math.fround(0)?m[l]=h:_[l]=-h}return f=de([new N(new u(13),void 0,m,J(m,{GetZero:()=>0,Add:(l,h)=>l+h})),new N(new u(14),void 0,_,J(_,{GetZero:()=>0,Add:(l,h)=>l+h}))]),wt(t.year,t.isSimulated,Oe(k(()=>Z(Q(r),k(()=>Z(Q(p),k(()=>Z(c,k(()=>Z(s[1],k(()=>Z(f,k(()=>a)))))))))))))}class kn{constructor(){}}function An(){return new kn}function Tn(t,e){return{then:(n,a)=>{try{return e().then(n,a)}catch(r){if(a==null)return Promise.reject(r);try{const o=a(r);return Promise.resolve(o)}catch(o){return Promise.reject(o)}}},catch:n=>{try{return e().catch(n)}catch(a){try{const r=n(a);return Promise.resolve(r)}catch(r){return Promise.reject(r)}}}}}function En(t,e){return e.then(n=>n)}const xt=An(),In=fn(we(t=>(me(`'${Xe(t)}' -> ${et(t,[])}`),[Xe(t),et(t,[])]),Bt(_t())));function jn(t){return new N(Ce(In,t.kind),t.capacity,t.data,t.total)}En(xt,Tn(xt,()=>{const t=fetch("contacts.json").then(e=>e.json());return me(E("%A"))(t),Promise.resolve()}));function Ln(){}const Vn=(()=>(Ge(),new ye(Math.fround(6e3),Math.fround(400),Math.fround(6e3),Math.fround(.8999999761581421))))(),Bn=(()=>(Ge(),new ye(Math.fround(1e3),Math.fround(100),Math.fround(100),Math.fround(.8999999761581421))))();function We(t){switch(t.tag){case 1:return"Plin";case 2:return"Premog";case 3:return"Sonce";case 4:return"Veter";case 5:return"NEK";case 6:return"Voda";case 7:return"\u0106HE";case 8:return"Smeti";case 9:return"Stati\u010Dna proizvodnja";case 10:return"Nefosilna proizvodnja";case 11:return"Skupaj";case 12:return"Poraba";case 13:return"Uvoz";case 14:return"Izvoz";case 15:return"Baterija";case 16:return"Nivo baterije";case 17:return"Prese\u017Eek";default:return"Nafta"}}const ve=de([new u(4),new u(3),new u(15)]),ke=de([new u(4),new u(3),new u(15),new u(2),new u(1),new u(5),new u(6),new u(13),new u(14),new u(17)]);function Fn(t){return`${t.year}${t.isSimulated?"'":""}`}function Pn(){return C(x`
    <tr>
    <th></th>
    <th colspan=${tt(ve)}>Inštalirana moč [MW,MWh]</th>
    <th colspan=${tt(ke)}>Proizvodnja [GWh]</th>
    <th>Izpusti [MT]</th>
    </tr>
    <tr>
    <th>Leto</th>
    ${ee(t=>`${t}`,t=>C(x`<th>${We(t)}</th>`),ve)}
    ${ee(t=>`${t}`,t=>C(x`<th>${We(t)}</th>`),ke)}
    <th>CO2</th>
    </tr>
    `)}function De(t){return(Y(t,new u(2)).total*Math.fround(448.32000732421875)+Y(t,new u(1)).total*Math.fround(988.8300170898438))/Math.fround(1e6)}function Gn(t){let e;return C(x`
    <tr>
    <th>${Fn(t)}</th>
    ${ee(n=>`${n}`,n=>{let a,r;return C(x`<td>${a=te(n,t.traces),a==null?R():(r=Qe(a.capacity,Math.fround(0)),W(E("%.0f"))(r))}</td>`)},ve)}
    ${ee(n=>`${n}`,n=>{let a,r;return C(x`<td>${a=te(n,t.traces),a==null?R():(r=a.total/Math.fround(1e3),W(E("%.1f"))(r))}</td>`)},ke)}
    <td>${e=De(t),W(E("%.1f"))(e)}</td>
    </tr>
    `)}function zn(t,e){let n;const a=(r,o)=>{let s;const c=[r,o];let p,i,f;switch(c[0]!=null&&c[1]!=null?(p=0,i=c[1],f=c[0]):p=1,p){case 0:{const w=i/f;return w>Math.fround(1)?W(E("%.1fx"))(w):(s=Math.fround(100)*w,W(E("%.1f%%"))(s))}case 1:return R()}};return C(x`
    <tr>
    <th>Delež</th>
    ${ee(r=>`${r}`,r=>{let o;return C(x`<td>${o=r,a(be(s=>s.capacity,te(o,t.traces)),be(s=>s.capacity,te(o,e.traces)))}</td>`)},ve)}
    ${ee(r=>`${r}`,r=>{let o;return C(x`<td>${o=r,a(je(s=>s.total,te(o,t.traces)),je(s=>s.total,te(o,e.traces)))}</td>`)},ke)}
    <td>${n=Math.fround(100)*De(e)/De(t),W(E("%.1f%%"))(n)}</td>
    </tr>
    `)}class St extends pe{constructor(e,n,a,r){super();this.kind=e,this.deltaCapacity=n,this.price=a,this.cost=r}}function Hn(){return Ht("EnergyApp.CostItem",[],St,()=>[["kind",_t()],["deltaCapacity",Fe],["price",Fe],["cost",Fe]])}function Wn(t,e){const n=C(x`<tr><th>Vir</th><th>Gradnja [MW]</th><th>Cena [€/kW]</th><th>Cena [M€]</th></tr>`),a=Zt(o=>{let s;const c=o,p=be(h=>h.capacity,te(c,e.traces)),i=[be(h=>h.capacity,te(c,t.traces)),p];let f,w,d,m;switch(i[0]==null?i[1]!=null?(f=1,m=i[1]):f=2:i[1]!=null?(f=0,w=i[1],d=i[0]):f=2,f){case 0:{s=w-d;break}case 1:{s=m;break}case 2:{s=Math.fround(0);break}}let _;const l=o;switch(l.tag){case 3:{_=Math.fround(790);break}case 4:{_=Math.fround(1500);break}case 15:{_=Math.fround(340);break}default:_=Re(`missing cost of ${l}`)}return new St(o,s,_,s*_*Math.fround(.0010000000474974513))},de([new u(4),new u(3),new u(15)])),r=Je(o=>o.cost,a,{GetZero:()=>0,Add:(o,s)=>o+s});return C(x`
    <h2>Cena</h2>
    <table class="energy-table">
    <thead>${n}</thead>
    <tbody>
    ${ee(o=>rt(o[0]),o=>{const s=o[1];return C(x`
        <tr>
        <td>${We(s.kind)}</td>
        <td>${W(E("%.1f"))(s.deltaCapacity)}</td>
        <td>${W(E("%.1f"))(s.price)}</td>
        <td>${W(E("%.1f"))(s.cost)}</td>
        </tr>
        `)},nt(a))}
    <tr>
    <td>Skupaj</td>
    <td></td>
    <td></td>
    <td>${W(E("%.1f"))(r)}</td>
    </tr>
    <tbody>
    </table>
    `)}const Zn=new Ot("energy-app").Decorate(function(){this.init(i=>{const f=i;return f.useShadowDom=!1,f.styles=Be(Rt(x`
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
        `)),Promise.resolve(void 0)});const t=Ye(X(this),`
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
    `);let e;const n=yn();e=X(this).useState(()=>n);const a=e[0],r=X(this).useState(Ze),o=r[0],s=r[1];X(this).useEffectOnce(()=>{const i=2020;return fetch(`energy-traces-${i}.json`).then(w=>w.json()).then(w=>{const d=vn(wt(i,!1,we(m=>jn(m),w)));s(de([d,bt(d,a)]))}),Kt()});const c=C(x`
    <p>${"Opombe:"}
    <ul>
    ${ee(i=>rt(i[0]),i=>C(x`<li>${i[1]}</li>`),nt(["Za NEK se \u0161teje samo slovenski del proizvodnje. Za toliko je zni\u017Ean tudi izvoz.","Proizvodnja baterije v tabeli je prikazana kot priskevek baterije k letni proizvodnji: 90% shranjene energije, ki jo baterija vrne v omre\u017Eje.","Kadar je energije v izobilju, se po vrsti: zaustavi premog, plin, polni baterijo, zmanj\u0161a uvoz, preostanek se \u0161teje kot prese\u017Eek."]))}
    `),p=je(i=>i.year,Yt(o));return C(x`
    <div class="energy-sim ${t}">
    <h2>Energijska simulacija</h2>
    <p>Simulacija elektroenergetskega sistema na realnih urnih podatkih donosa sonca in vetra za leto ${p}<br>ob predpostaviki povečanih kapacitet vetrnih in solarnih elektrarn ter baterijskega shranjavanja energije.</p>
    <div class="energy-result">
    <table class="energy-table">
    <thead>
    ${Pn()}
    </thead>
    <tbody>
    ${ee(i=>`${i.year}${i.isSimulated}`,i=>Gn(i),o)}
    ${G(o)?R():G(B(o))?R():G(B(B(o)))?zn(H(o),H(B(o))):R()}
    </tbody>
    </table>
    ${xn(i=>{if(!le(i,a)&&(e[1](i),!G(o))){const f=H(o);me(E("running simulation...")),s(de([f,bt(f,i)]))}},a)}
    ${c}
    ${G(o)?R():G(B(o))?R():G(B(B(o)))?Wn(H(o),H(B(o))):R()}
    ${G(o)?R():G(B(o))?R():Cn(a,H(o),H(B(o)))}
    </div>
    </div>
    `)});export{St as CostItem,Hn as CostItem$reflection,Zn as EnergySimulationApp,We as colName,ke as dataColumns,De as getTonsCO2,Fn as getYsYearName,ve as installedColumns,Ln as register,Wn as renderCostList,zn as renderDeltaRow,Pn as renderTraceHeader,Gn as renderTraceRow,Vn as simConfig,Bn as simConfig$0027};
