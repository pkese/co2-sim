import{U as Ve,s as Ct,v as Z,i as xt,F as kt,f as Tt,g as _e,e as ie,j as At,m as re,a as It,t as Et,c as jt,b as Ft,L as xe,d as Be,R as de,h as E,k as G,l as W,o as Pt,n as Ze,p as zt,q as Gt,r as He,u as C,w as Wt,x as Y,y as ye,z as ae,A as D,B as fe,C as Oe,D as k,E as Dt,H as Re,G as Ke,I as J,J as j,K as ke,M as $,N as S,O as Te,P as pe,Q as Ye,S as N,T as q,V as Ae,W as Nt,X as Lt,Y as qe,Z as Ue,_ as Je,$ as Vt,a0 as ce,a1 as Bt,a2 as Qe,a3 as Xe,a4 as et,a5 as Q,a6 as H,a7 as we,a8 as Ie,a9 as Zt,aa as Ht,ab as tt,ac as nt,ad as Ot,ae as Rt,af as Kt,ag as Ee}from"./index.1946be47.js";import"./vendor.66da8c77.js";class rt extends Ve{constructor(e,...n){super();this.tag=e|0,this.fields=n}cases(){return["Ok","Error"]}}class at{constructor(e,n){this.k=e,this.v=n}}function Me(t,e){return new at(t,e)}function T(t){return t.k}function F(t){return t.v}class M extends at{constructor(e,n,a,r,o){super(e,n);this.left=a,this.right=r,this.h=o|0}}function ge(t,e,n,a,r){return new M(t,e,n,a,r)}function A(t){return t.left}function I(t){return t.right}function oe(t){return t.h}function le(){}function ot(t,e){e:for(;;){const n=t,a=e;if(a!=null){const r=a;if(r instanceof M){t=ot(n+1,A(r)),e=I(r);continue e}else return n+1|0}else return n|0}}function Yt(t){return ot(0,t)}function O(t,e,n,a){let r;const o=t;if(o!=null){const i=o;r=i instanceof M?oe(i):1}else r=0;let s;const c=a;if(c!=null){const i=c;s=i instanceof M?oe(i):1}else s=0;const p=(r<s?s:r)|0;return p===0?Me(e,n):ge(e,n,t,a,p+1)}function st(t,e,n,a){let r,o,s,c,p;const i=t;if(i!=null){const d=i;p=d instanceof M?oe(d):1}else p=0;let h;const w=a;if(w!=null){const d=w;h=d instanceof M?oe(d):1}else h=0;if(h>p+2){const d=Z(a);if(d instanceof M)if(r=A(d),(r!=null?(o=r,o instanceof M?oe(o):1):0)>p+1){const m=Z(A(d));if(m instanceof M)return O(O(t,e,n,A(m)),T(m),F(m),O(I(m),T(d),F(d),I(d)));throw new Error("internal error: Map.rebalance")}else return O(O(t,e,n,A(d)),T(d),F(d),I(d));else throw new Error("internal error: Map.rebalance")}else if(p>h+2){const d=Z(t);if(d instanceof M)if(s=I(d),(s!=null?(c=s,c instanceof M?oe(c):1):0)>h+1){const m=Z(I(d));if(m instanceof M)return O(O(A(d),T(d),F(d),A(m)),T(m),F(m),O(I(m),e,n,a));throw new Error("internal error: Map.rebalance")}else return O(A(d),T(d),F(d),O(I(d),e,n,a));else throw new Error("internal error: Map.rebalance")}else return O(t,e,n,a)}function ue(t,e,n,a){if(a!=null){const r=a,o=t.Compare(e,T(r))|0;return r instanceof M?o<0?st(ue(t,e,n,A(r)),T(r),F(r),I(r)):o===0?ge(e,n,A(r),I(r),oe(r)):st(A(r),T(r),F(r),ue(t,e,n,I(r))):o<0?ge(e,n,le(),a,2):o===0?Me(e,n):ge(e,n,a,le(),2)}else return Me(e,n)}function it(t,e,n){e:for(;;){const a=t,r=e,o=n;if(o!=null){const s=o,c=a.Compare(r,T(s))|0;if(c===0)return Ct(F(s));if(s instanceof M){t=a,e=r,n=c<0?A(s):I(s);continue e}else return}else return}}function qt(t,e,n){const a=it(t,e,n);if(a==null)throw new Error;return Z(a)}function Ut(t,e,n){e:for(;;){const a=t,r=e,o=n;if(o!=null){const s=o,c=a.Compare(r,T(s))|0;if(s instanceof M)if(c<0){t=a,e=r,n=A(s);continue e}else{if(c===0)return!0;t=a,e=r,n=I(s);continue e}else return c===0}else return!1}}function ct(t,e){e:for(;;){const n=t,a=e;if(a!=null){const r=a;if(r instanceof M){ct(n,A(r)),n(T(r),F(r)),t=n,e=I(r);continue e}else n(T(r),F(r))}break}}function Jt(t,e){ct(t,e)}function Qt(t,e,n){let a=n;Jt((r,o)=>{e[a]=[r,o],a=a+1|0},t)}function Xt(t,e){return Tt((n,a)=>ue(t,a[0],a[1],n),le(),e)}function en(t,e,n){e:for(;;){const a=t,r=e,o=n;if(o["System.Collections.IEnumerator.MoveNext"]()){const s=o["System.Collections.Generic.IEnumerator`1.get_Current"]();t=a,e=ue(a,s[0],s[1],r),n=o;continue e}else return r}}function lt(t,e){let n=le();for(let a=0;a<=e.length-1;a++){const r=e[a];n=ue(t,r[0],r[1],n)}return n}function tn(t,e){if(xt(e))return lt(t,e);if(e instanceof kt)return Xt(t,e);{const n=_e(e);try{return en(t,le(),n)}finally{n.Dispose()}}}class nn extends de{constructor(e,n){super();this.stack=e,this.started=n}}function ut(t){e:for(;;){const e=t;if(E(e))return Ze();{const n=G(e),a=W(e);if(a!=null){const r=a;if(r instanceof M){t=Pt([A(r),Me(T(r),F(r)),I(r)],n);continue e}else return e}else{t=n;continue e}}}}function dt(t){return new nn(ut(It(t)),!1)}function rn(){throw new Error("enumeration not started")}function an(){throw new Error("enumeration already finished")}function ft(t){if(t.started){const e=t.stack;if(E(e))return an();if(W(e)!=null){const n=W(e);if(n instanceof M)throw new Error("Please report error: Map iterator, unexpected stack for current");return[T(n),F(n)]}else throw new Error("Please report error: Map iterator, unexpected stack for current")}else return rn()}function on(t){if(t.started){const e=t.stack;if(E(e))return!1;if(W(e)!=null){if(W(e)instanceof M)throw new Error("Please report error: Map iterator, unexpected stack for moveNext");return t.stack=ut(G(e)),!E(t.stack)}else throw new Error("Please report error: Map iterator, unexpected stack for moveNext")}else return t.started=!0,!E(t.stack)}function pt(t){let e=dt(t);return{["System.Collections.Generic.IEnumerator`1.get_Current"](){return ft(e)},["System.Collections.IEnumerator.get_Current"](){return ft(e)},["System.Collections.IEnumerator.MoveNext"](){return on(e)},["System.Collections.IEnumerator.Reset"](){e=dt(t)},Dispose(){}}}class he{constructor(e,n){this.comparer=e,this.tree=n}GetHashCode(){return un(this)|0}Equals(e){const n=this;if(e instanceof he){const a=_e(n);try{const r=_e(e);try{const o=()=>{const s=a["System.Collections.IEnumerator.MoveNext"]();if(s===r["System.Collections.IEnumerator.MoveNext"]())if(s){const c=a["System.Collections.Generic.IEnumerator`1.get_Current"](),p=r["System.Collections.Generic.IEnumerator`1.get_Current"]();return ie(c[0],p[0])&&ie(c[1],p[1])?o():!1}else return!0;else return!1};return o()}finally{r.Dispose()}}finally{a.Dispose()}}else return!1}toString(){return"map ["+At("; ",re(n=>zt("({0}, {1})",n[0],n[1]),this))+"]"}get[Symbol.toStringTag](){return"FSharpMap"}toJSON(e){const n=this;return Array.from(n)}GetEnumerator(){return pt(this.tree)}[Symbol.iterator](){return Et(this.GetEnumerator())}["System.Collections.IEnumerable.GetEnumerator"](){return pt(this.tree)}CompareTo(e){const n=this;if(e instanceof he)return jt((a,r)=>{const o=n.comparer.Compare(a[0],r[0])|0;return(o!==0?o:Gt(a[1],r[1]))|0},n,e)|0;throw new Error("not comparable\\nParameter name: obj")}["System.Collections.Generic.ICollection`1.Add2B595"](e){throw new Error("Map cannot be mutated")}["System.Collections.Generic.ICollection`1.Clear"](){throw new Error("Map cannot be mutated")}["System.Collections.Generic.ICollection`1.Remove2B595"](e){throw new Error("Map cannot be mutated")}["System.Collections.Generic.ICollection`1.Contains2B595"](e){const n=this;return ht(n,e[0])&&ie($e(n,e[0]),e[1])}["System.Collections.Generic.ICollection`1.CopyToZ2E171D71"](e,n){Qt(this.tree,e,n)}["System.Collections.Generic.ICollection`1.get_IsReadOnly"](){return!0}["System.Collections.Generic.ICollection`1.get_Count"](){return je(this)|0}["System.Collections.Generic.IReadOnlyCollection`1.get_Count"](){return je(this)|0}get size(){return je(this)|0}clear(){throw new Error("Map cannot be mutated")}delete(e){throw new Error("Map cannot be mutated")}entries(){return re(n=>[n[0],n[1]],this)}get(e){return $e(this,e)}has(e){return ht(this,e)}keys(){return re(n=>n[0],this)}set(e,n){throw new Error("Map cannot be mutated")}values(){return re(n=>n[1],this)}forEach(e,n){const a=this;Ft(r=>{e(r[1],r[0],a)},a)}}function be(t,e){return new he(t,e)}(()=>{he.empty=be(xe(),le())})();function sn(t){const e=xe();return be(e,tn(e,t))}function cn(t,e,n){return be(t.comparer,ue(t.comparer,e,n,t.tree))}function $e(t,e){return qt(t.comparer,e,t.tree)}function je(t){return Yt(t.tree)}function ht(t,e){return Ut(t.comparer,e,t.tree)}function ln(t,e){return it(t.comparer,e,t.tree)}function un(t){const e=(r,o)=>(r<<1)+o+631;let n=0;const a=_e(t);try{for(;a["System.Collections.IEnumerator.MoveNext"]();){const r=a["System.Collections.Generic.IEnumerator`1.get_Current"]();n=e(n,Be(r[0]))|0,n=e(n,Be(r[1]))|0}}finally{a.Dispose()}return n|0}function ee(t,e,n){return cn(n,t,e)}function X(t,e){return ln(e,t)}function dn(t){return sn(t)}function fn(t){const e=xe();return be(e,lt(e,t))}class u extends Ve{constructor(e,...n){super();this.tag=e|0,this.fields=n}cases(){return["Oil","Gas","Coal","Solar","Wind","Nuclear","Hydro","HydroStorage","Waste","StaticProd","NonFosilProd","TotalProd","Load","Import","Export","Battery","BatteryLevel","Excess"]}}function mt(){return Wt("Shared.Types.TraceKind",[],u,()=>[[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[]])}function pn(t){switch(t.tag){case 4:case 3:return!0;default:return!1}}function hn(t){switch(t.tag){case 0:case 1:case 2:return!0;default:return!1}}function _t(t){switch(t.tag){case 5:case 6:case 7:case 8:return!0;default:return!1}}class P extends de{constructor(e,n,a,r){super();this.kind=e,this.capacity=n,this.data=a,this.total=r}}class yt extends de{constructor(e,n,a){super();this.year=e|0,this.isSimulated=n,this.traces=a}}function R(t,e){return $e(t.traces,e)}function wt(t,e,n){return new yt(t,e,dn(re(a=>[a.kind,a],n)))}function mn(t){return He(C(()=>re(e=>e[1],t.traces)))}class me extends de{constructor(e,n,a,r){super();this.installedSolarMW=e,this.installedWindMW=n,this.installedBatteryMWh=a,this.batteryEfficiency=r}}function Fe(){return new me(Math.fround(278),Math.fround(3),Math.fround(0),Math.fround(.8999999761581421))}function _n(){return new me(Math.fround(500),Math.fround(100),Math.fround(100),Math.fround(.8999999761581421))}function yn(t,e,n,a){let r=Math.fround(0);return[o=>s=>{const c=ae((i,h)=>D(i,h),r,s/e);r=r-c,n[o]=r;const p=c*e;return a[o]=p,s-p},o=>s=>{let c;const p=ae((i,h)=>D(i,h),t-r,s);return c=fe((i,h)=>D(i,h),Math.fround(0),p),r=r+c,n[o]=r,s-c}]}function Mt(t,e){return[n=>a=>{const r=ae((o,s)=>D(o,s),t[n],a);return e[n]=r,a-r},n=>a=>{const r=ae((o,s)=>D(o,s),t[n],a);return e[n]=t[n]-r,a-r}]}function wn(t,e,n){return[a=>r=>(n[a]=t[a],r),a=>r=>{const o=ae((s,c)=>D(s,c),fe((s,c)=>D(s,c),t[a]-e[a],Math.fround(0)),r);return n[a]=t[a]-o,r-o}]}function Mn(t){return[e=>n=>(t[e]=Math.fround(0),n),e=>n=>{t[e]=n}]}function gt(t,e){let n,a,r,o,s,c;const p=R(t,new u(2)),i=R(t,new u(1)),h=R(t,new u(9)),w=R(t,new u(13)),d=R(t,new u(11)),m=R(t,new u(14)),_=R(t,new u(4)),l=R(t,new u(3)),f=e.installedWindMW/Z(_.capacity),g=e.installedSolarMW/Z(l.capacity),b=new P(_.kind,Z(_.capacity)*f,ye(y=>f*y,_.data,Float32Array),_.total*f),L=new P(l.kind,Z(l.capacity)*g,ye(y=>g*y,l.data,Float32Array),l.total*g),v=b.data.length|0,z=new Float32Array(v),U=new Float32Array(v),V=new Float32Array(v),K=new Float32Array(v),te=new Float32Array(v),ne=new Float32Array(v),se=Mt(p.data,z),We=Mt(i.data,U),De=yn(e.installedBatteryMWh,e.batteryEfficiency,V,K),vt=Mn(te),Ne=wn(w.data,m.data,ne);for(let y=0;y<=v-1;y++){let x=b.data[y]+L.data[y]+h.data[y]-d.data[y];if(x>=Math.fround(0)){const Ce=x,B=y|0;vt[1](B)(Ne[1](B)(De[1](B)(We[1](B)(se[1](B)(Ce)))))}else{const Ce=-x,B=y|0,Le=se[0](B)(We[0](B)(Ne[0](B)(De[0](B)(Ce))));Le>Math.fround(0)&&Oe(k("sourcing should amount to zero on sample %d, have %f"))(B)(Le)}}return new yt(t.year,!0,(n=(a=(r=(o=(s=(c=ee(new u(3),L,ee(new u(4),b,t.traces)),ee(new u(2),new P(p.kind,p.capacity,z,Y(z,{GetZero:()=>0,Add:(y,x)=>y+x})),c)),ee(new u(1),new P(i.kind,i.capacity,U,Y(U,{GetZero:()=>0,Add:(y,x)=>y+x})),s)),ee(new u(16),new P(new u(16),e.installedBatteryMWh,V,Y(V,{GetZero:()=>0,Add:(y,x)=>y+x})),o)),ee(new u(15),new P(new u(15),e.installedBatteryMWh,K,Y(K,{GetZero:()=>0,Add:(y,x)=>y+x})),r)),ee(new u(17),new P(new u(17),void 0,te,Y(te,{GetZero:()=>0,Add:(y,x)=>y+x})),a)),ee(new u(13),new P(w.kind,w.capacity,ne,Y(ne,{GetZero:()=>0,Add:(y,x)=>y+x})),n)))}function gn(t,e){if(t!=null&&/\S/.test(t)){const n=+t.replace("_","");if(!Number.isNaN(n))return e.contents=n,!0}return!1}function Pe(t){const e=new Dt(0);if(gn(t,e))return e.contents;throw new Error("Input string was not in a correct format.")}function bn(){return t=>t}const $n=new Re().Decorate(function(t,e){let n;const a=bn()(`
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
        `);n=Ke(J(this),a);let r;const o=j(ke("%.0f%P()",[e.installedSolarMW]));r=J(this).useState(()=>o);const s=r[0];let c;const p=j(ke("%.0f%P()",[e.installedWindMW]));c=J(this).useState(()=>p);const i=c[0];let h;const w=j(ke("%.0f%P()",[e.installedBatteryMWh]));h=J(this).useState(()=>w);const d=h[0],m=J(this).useState(()=>""),_=m[1];return $(S`
    <p class="${n}">
    <form class="energy-form" action="#">
    <b>Simulirana inštalirana moč:</b><br>
    <input type="number" id="wind" name="wind" value="${i}" size="6" min=0 step=50 @change=${l=>{c[1](Te(l.target))}} style="text-align:right;"/>
    <label for="wind">MW vetrnic</label><br/>
    <input type="number" id="solar" name="solar" value="${s}" size="6" min=0 step=100 @change=${l=>{r[1](Te(l.target))}} style="text-align:right;"/>
    <label for="solar">MW fotopanelov</label><br/>
    <input type="number" id="battery" name="battery" value="${d}" size="6" step=50 min=0 @change=${l=>{h[1](Te(l.target))}} style="text-align:right;"/>
    <label for="battery">MWh baterij</label><br/>
    <input type="button" value="Izračunaj" @click=${l=>{let f;console.log("submit:",l);let g;try{g=new rt(0,(f=Fe(),new me(Pe(s),Pe(i),Pe(d),f.batteryEfficiency)))}catch(b){g=new rt(1,b.message)}return pe(k("submit: %A"))(g),g.tag===1?_(m[0]):(_(""),t(g.fields[0])),l.preventDefault(),!1}} >
    </form>
    </p>
    `)});function Sn(t,e,n){let a,r,o;const s=(_,l)=>{const f=R(_,l).data,g=new Float32Array(~~((f.length+1)/24));let b=f[0];for(let L=0;L<=f.length-1;L++){const v=~~(L/24)|0,z=f[L]*Math.fround(.0010000000474974513)+g[v];b=fe((U,V)=>D(U,V),b,z),g[v]=z}return[g,b]},c=s(n,new u(3)),p=s(n,new u(4)),i=s(n,new u(6)),h=s(e,new u(2)),w=s(n,new u(2)),d=s(n,new u(17)),m=new Date(`${e.year}-01-01 0:0:0`).getTime();return a={text:"Dnevne krivulje"},r={type:"datetime"},o=[{title:{text:"Proizvodnja GWh"}},{max:100,opposite:!0,title:{text:"Stanje baterije %"}}],{chart:{zoomType:"x"},plotOptions:{},series:Ye(C(()=>N(q({data:i[0],name:"Voda",pointInterval:864e5,pointStart:m,yAxis:0}),C(()=>N(q({color:"#888",data:h[0],name:`Premog ${e.year}`,pointInterval:864e5,pointStart:m,yAxis:0}),C(()=>N(q({data:w[0],name:"Premog simuliran",pointInterval:864e5,pointStart:m,yAxis:0}),C(()=>N(q({data:p[0],name:"Veter",pointInterval:864e5,pointStart:m,yAxis:0}),C(()=>N(q({data:c[0],name:"Sonce",pointInterval:864e5,pointStart:m,yAxis:0}),C(()=>N(q({color:"#c6d",data:d[0],name:"Prese\u017Eek",pointInterval:864e5,pointStart:m,yAxis:0}),C(()=>{let _;const l=X(new u(16),n.traces);if(l!=null)if(ie(l.capacity,void 0))_=void 0;else{let f;switch(l!=null&&Z(l.capacity)===Math.fround(0)?f=0:f=1,f){case 0:{_=void 0;break}case 1:{if(l!=null){const g=l,b=g.data,L=Z(g.capacity),v=new Float32Array(~~((b.length+1)/24)),z=Ae(~~((b.length+1)/24),V=>Math.fround(34028234663852886e22),Float32Array),U=new Float32Array(~~((b.length+1)/24));for(let V=0;V<=b.length-1;V++){const K=~~(V/24)|0,te=b[V]/L*Math.fround(100);z[K]=ae((ne,se)=>D(ne,se),z[K],te),U[K]=fe((ne,se)=>D(ne,se),U[K],te),v[K]=v[K]+te/Math.fround(24)}_=[v,z,U]}else throw new Error("Match failure");break}}}else _=void 0;if(_!=null){const f=_[1],g=_[2],b=_[0];return pe(k("d0 = %f"))(m),N(q({color:"#8085e9",data:Nt((L,v,z)=>[m+L*864e5,v,z],f,g),name:"% baterije min/max na dan",opacity:.3,type:"arearange",yAxis:1}),C(()=>q({color:"#8085e9",data:b,name:"% baterije dnevno povpre\u010Dje",pointInterval:864e5,pointStart:m,yAxis:1})))}else return Lt()})))))))))))))),title:a,type:"arearange",xAxis:r,yAxis:o}}const vn=new Re().Decorate(function(t,e,n){const a=Sn(t,e,n);return setTimeout(()=>{console.log("chart options",a),Highcharts.chart("chart_container",a)},200),$(S`
    <p>
    <div id="chart_container" style="width:1000px; height:600px;" />
    </p>
    `)});function bt(t){let e=0,n=2147483647;const a=Ye(C(()=>re(r=>(e=fe((o,s)=>D(o,s),e,r.data.length)|0,n=ae((o,s)=>D(o,s),n,r.data.length)|0,r.data),t)));return e===n?Ae(e,r=>{let o=Math.fround(0);for(let s=0;s<=a.length-1;s++){const c=a[s];o=o+c[r]}return o},Float32Array):Ae(e,r=>{let o=Math.fround(0);for(let s=0;s<=a.length-1;s++){const c=a[s];c.length>r&&(o=o+c[r])}return o},Float32Array)}function Cn(t){const e=qe(l=>{const f=l.kind;return(pn(f)?!0:hn(f))?!0:_t(f)},mn(t)),n=e[0],a=e[1];let r;const o=bt(n);r=new P(new u(11),Ue(l=>Je(l.capacity,Math.fround(0)),n,{GetZero:()=>0,Add:(l,f)=>l+f}),o,Y(o,{GetZero:()=>0,Add:(l,f)=>l+f}));const s=qe(l=>_t(l.kind),n),c=s[0];let p;const i=bt(c);p=new P(new u(9),void 0,i,Y(i,{GetZero:()=>0,Add:(l,f)=>l+f}));let h;const w=Vt(l=>ie(l.kind,new u(12)),a),d=r.data,m=new Float32Array(d.length),_=new Float32Array(d.length);for(let l=0;l<=d.length-1;l++){const f=w.data[l]-d[l];f>Math.fround(0)?m[l]=f:_[l]=-f}return h=ce([new P(new u(13),void 0,m,Y(m,{GetZero:()=>0,Add:(l,f)=>l+f})),new P(new u(14),void 0,_,Y(_,{GetZero:()=>0,Add:(l,f)=>l+f}))]),wt(t.year,t.isSimulated,He(C(()=>N(q(r),C(()=>N(q(p),C(()=>N(c,C(()=>N(s[1],C(()=>N(h,C(()=>a)))))))))))))}class xn{constructor(){}}function kn(){return new xn}function Tn(t,e){return{then:(n,a)=>{try{return e().then(n,a)}catch(r){if(a==null)return Promise.reject(r);try{const o=a(r);return Promise.resolve(o)}catch(o){return Promise.reject(o)}}},catch:n=>{try{return e().catch(n)}catch(a){try{const r=n(a);return Promise.resolve(r)}catch(r){return Promise.reject(r)}}}}}function An(t,e){return e.then(n=>n)}const $t=kn(),In=fn(ye(t=>(pe(`'${Qe(t)}' -> ${Xe(t,[])}`),[Qe(t),Xe(t,[])]),Bt(mt())));function En(t){return new P($e(In,t.kind),t.capacity,t.data,t.total)}An($t,Tn($t,()=>{const t=fetch("contacts.json").then(e=>e.json());return pe(k("%A"))(t),Promise.resolve()}));function Nn(){}const Ln=(()=>(Fe(),new me(Math.fround(6e3),Math.fround(400),Math.fround(6e3),Math.fround(.8999999761581421))))(),Vn=(()=>(Fe(),new me(Math.fround(1e3),Math.fround(100),Math.fround(100),Math.fround(.8999999761581421))))();function ze(t){switch(t.tag){case 1:return"Plin";case 2:return"Premog";case 3:return"Sonce";case 4:return"Veter";case 5:return"NEK";case 6:return"Voda";case 7:return"\u0106HE";case 8:return"Smeti";case 9:return"Stati\u010Dna proizvodnja";case 10:return"Nefosilna proizvodnja";case 11:return"Skupaj";case 12:return"Poraba";case 13:return"Uvoz";case 14:return"Izvoz";case 15:return"Baterija";case 16:return"Nivo baterije";case 17:return"Prese\u017Eek";default:return"Nafta"}}const Se=ce([new u(4),new u(3),new u(15)]),ve=ce([new u(4),new u(3),new u(15),new u(2),new u(1),new u(5),new u(6),new u(13),new u(14),new u(17)]);function jn(t){return`${t.year}${t.isSimulated?"'":""}`}function Fn(){return $(S`
    <tr>
    <th></th>
    <th colspan=${et(Se)}>Inštalirana moč [MW,MWh]</th>
    <th colspan=${et(ve)}>Proizvodnja [GWh]</th>
    <th>Izpusti [MT]</th>
    </tr>
    <tr>
    <th>Leto</th>
    ${Q(t=>`${t}`,t=>$(S`<th>${ze(t)}</th>`),Se)}
    ${Q(t=>`${t}`,t=>$(S`<th>${ze(t)}</th>`),ve)}
    <th>CO2</th>
    </tr>
    `)}function Ge(t){return(R(t,new u(2)).total*Math.fround(448.32000732421875)+R(t,new u(1)).total*Math.fround(988.8300170898438))/Math.fround(1e6)}function Pn(t){let e;return $(S`
    <tr>
    <th>${jn(t)}</th>
    ${Q(n=>`${n}`,n=>{let a,r;return $(S`<td>${a=X(n,t.traces),a==null?H():(r=Je(a.capacity,Math.fround(0)),j(k("%.0f"))(r))}</td>`)},Se)}
    ${Q(n=>`${n}`,n=>{let a,r;return $(S`<td>${a=X(n,t.traces),a==null?H():(r=a.total/Math.fround(1e3),j(k("%.1f"))(r))}</td>`)},ve)}
    <td>${e=Ge(t),j(k("%.1f"))(e)}</td>
    </tr>
    `)}function zn(t,e){let n;const a=(r,o)=>{let s;const c=[r,o];let p,i,h;switch(c[0]!=null&&c[1]!=null?(p=0,i=c[1],h=c[0]):p=1,p){case 0:{const w=i/h;return w>Math.fround(1)?j(k("%.1fx"))(w):(s=Math.fround(100)*w,j(k("%.1f%%"))(s))}case 1:return H()}};return $(S`
    <tr>
    <th>Delež</th>
    ${Q(r=>`${r}`,r=>{let o;return $(S`<td>${o=r,a(we(s=>s.capacity,X(o,t.traces)),we(s=>s.capacity,X(o,e.traces)))}</td>`)},Se)}
    ${Q(r=>`${r}`,r=>{let o;return $(S`<td>${o=r,a(Ie(s=>s.total,X(o,t.traces)),Ie(s=>s.total,X(o,e.traces)))}</td>`)},ve)}
    <td>${n=Math.fround(100)*Ge(e)/Ge(t),j(k("%.1f%%"))(n)}</td>
    </tr>
    `)}class St extends de{constructor(e,n,a,r){super();this.kind=e,this.deltaCapacity=n,this.price=a,this.cost=r}}function Bn(){return Zt("EnergyApp.CostItem",[],St,()=>[["kind",mt()],["deltaCapacity",Ee],["price",Ee],["cost",Ee]])}function Gn(t,e){const n=$(S`<tr><th>Vir</th><th>Gradnja [MW]</th><th>Cena [€/kW]</th><th>Cena [M€]</th></tr>`),a=Ht(o=>{let s;const c=o,p=we(f=>f.capacity,X(c,e.traces)),i=[we(f=>f.capacity,X(c,t.traces)),p];let h,w,d,m;switch(i[0]==null?i[1]!=null?(h=1,m=i[1]):h=2:i[1]!=null?(h=0,w=i[1],d=i[0]):h=2,h){case 0:{s=w-d;break}case 1:{s=m;break}case 2:{s=Math.fround(0);break}}let _;const l=o;switch(l.tag){case 3:{_=Math.fround(790);break}case 4:{_=Math.fround(1500);break}case 15:{_=Math.fround(340);break}default:_=Oe(`missing cost of ${l}`)}return new St(o,s,_,s*_*Math.fround(.0010000000474974513))},ce([new u(4),new u(3),new u(15)])),r=Ue(o=>o.cost,a,{GetZero:()=>0,Add:(o,s)=>o+s});return $(S`
    <h2>Cena</h2>
    <p>Minimalni stroški investicije, če bi se gradilo 'na veliko' (elektrogospodarstvo oz. država), <br> brez odkupa zemljišč, brez novih daljnovodov, brez korupcije.</p>
    <table class="energy-table">
    <thead>${n}</thead>
    <tbody>
    ${Q(o=>nt(o[0]),o=>{const s=o[1];return $(S`
        <tr>
        <td>${ze(s.kind)}</td>
        <td>${j(k("%.1f"))(s.deltaCapacity)}</td>
        <td>${j(k("%.1f"))(s.price)}</td>
        <td>${j(k("%.1f"))(s.cost)}</td>
        </tr>
        `)},tt(a))}
    <tr>
    <td>Skupaj</td>
    <td></td>
    <td></td>
    <td>${j(k("%.1f"))(r)}</td>
    </tr>
    <tbody>
    </table>
    `)}const Zn=new Ot("energy-app").Decorate(function(){this.init(i=>(i.useShadowDom=!1,Promise.resolve(void 0)));const t=Ke(J(this),`
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
    `);let e;const n=_n();e=J(this).useState(()=>n);const a=e[0],r=J(this).useState(Ze),o=r[0],s=r[1];J(this).useEffectOnce(()=>{const i=2020;return fetch(`energy-traces-${i}.json`).then(w=>w.json()).then(w=>{const d=Cn(wt(i,!1,ye(m=>En(m),w)));s(ce([d,gt(d,a)]))}),Rt()});const c=$(S`
    <p>${"Opombe:"}
    <ul>
    ${Q(i=>nt(i[0]),i=>$(S`<li>${i[1]}</li>`),tt(["Za NEK se \u0161teje samo slovenski del proizvodnje. Za toliko je zni\u017Ean tudi izvoz.","Proizvodnja baterije v tabeli je prikazana kot priskevek baterije k letni proizvodnji: 90% shranjene energije, ki jo baterija vrne v omre\u017Eje.","Kadar je energije v izobilju, se po vrsti: zaustavi premog, plin, polni baterijo, zmanj\u0161a uvoz, preostanek se \u0161teje kot prese\u017Eek."]))}
    `),p=Ie(i=>i.year,Kt(o));return $(S`
    <div class="energy-sim ${t}">
    <h2>Scenariji prehoda na obnovljive vire energije</h2>
    <p>Simulacija elektroenergetskega sistema na realnih urnih podatkih donosa sonca in vetra za leto ${p}<br>ob predpostaviki povečanih kapacitet vetrnih in solarnih elektrarn ter baterijskega shranjavanja energije.</p>
    <div class="energy-result">
    <table class="energy-table">
    <thead>
    ${Fn()}
    </thead>
    <tbody>
    ${Q(i=>`${i.year}${i.isSimulated}`,i=>Pn(i),o)}
    ${E(o)?H():E(G(o))?H():E(G(G(o)))?zn(W(o),W(G(o))):H()}
    </tbody>
    </table>
    ${$n(i=>{if(!ie(i,a)&&(e[1](i),!E(o))){const h=W(o);pe(k("running simulation...")),s(ce([h,gt(h,i)]))}},a)}
    ${c}
    ${E(o)?H():E(G(o))?H():E(G(G(o)))?Gn(W(o),W(G(o))):H()}
    ${E(o)?H():E(G(o))?H():vn(a,W(o),W(G(o)))}
    </div>
    </div>
    `)});export{St as CostItem,Bn as CostItem$reflection,Zn as EnergySimulationApp,ze as colName,ve as dataColumns,Ge as getTonsCO2,jn as getYsYearName,Se as installedColumns,Nn as register,Gn as renderCostList,zn as renderDeltaRow,Fn as renderTraceHeader,Pn as renderTraceRow,Ln as simConfig,Vn as simConfig$0027};
