import{U as Ve,s as kt,v as V,i as vt,F as Tt,f as At,g as he,e as oe,j as Et,m as ne,a as Be,t as It,c as jt,b as Ft,L as Se,d as He,R as le,h as T,k as G,l as z,o as Pt,n as Ze,p as Gt,q as zt,r as Oe,u as C,w as Wt,x as R,y as pe,z as re,A as W,B as ue,C as Re,D as A,E as Nt,H as Ke,G as Ye,I as q,J as I,K as ke,M as $,N as b,O as ve,P as me,Q as qe,S as N,T as K,V as Te,W as Dt,X as Lt,Y as Ue,Z as Je,_ as Qe,$ as Vt,a0 as se,a1 as Bt,a2 as Xe,a3 as et,a4 as tt,a5 as U,a6 as B,a7 as _e,a8 as Ae,a9 as Ht,aa as Zt,ab as nt,ac as rt,ad as Ot,ae as Rt,af as Kt,ag as Yt,ah as Ee}from"./index.66dab556.js";import"./vendor.bd24dec8.js";class at extends Ve{constructor(e,...n){super();this.tag=e|0,this.fields=n}cases(){return["Ok","Error"]}}class ot{constructor(e,n){this.k=e,this.v=n}}function ye(t,e){return new ot(t,e)}function S(t){return t.k}function j(t){return t.v}class w extends ot{constructor(e,n,a,r,o){super(e,n);this.left=a,this.right=r,this.h=o|0}}function ge(t,e,n,a,r){return new w(t,e,n,a,r)}function k(t){return t.left}function v(t){return t.right}function ae(t){return t.h}function ie(){}function st(t,e){e:for(;;){const n=t,a=e;if(a!=null){const r=a;if(r instanceof w){t=st(n+1,k(r)),e=v(r);continue e}else return n+1|0}else return n|0}}function qt(t){return st(0,t)}function H(t,e,n,a){let r;const o=t;if(o!=null){const i=o;r=i instanceof w?ae(i):1}else r=0;let s;const c=a;if(c!=null){const i=c;s=i instanceof w?ae(i):1}else s=0;const p=(r<s?s:r)|0;return p===0?ye(e,n):ge(e,n,t,a,p+1)}function it(t,e,n,a){let r,o,s,c,p;const i=t;if(i!=null){const l=i;p=l instanceof w?ae(l):1}else p=0;let h;const g=a;if(g!=null){const l=g;h=l instanceof w?ae(l):1}else h=0;if(h>p+2){const l=V(a);if(l instanceof w)if(r=k(l),(r!=null?(o=r,o instanceof w?ae(o):1):0)>p+1){const m=V(k(l));if(m instanceof w)return H(H(t,e,n,k(m)),S(m),j(m),H(v(m),S(l),j(l),v(l)));throw new Error("internal error: Map.rebalance")}else return H(H(t,e,n,k(l)),S(l),j(l),v(l));else throw new Error("internal error: Map.rebalance")}else if(p>h+2){const l=V(t);if(l instanceof w)if(s=v(l),(s!=null?(c=s,c instanceof w?ae(c):1):0)>h+1){const m=V(v(l));if(m instanceof w)return H(H(k(l),S(l),j(l),k(m)),S(m),j(m),H(v(m),e,n,a));throw new Error("internal error: Map.rebalance")}else return H(k(l),S(l),j(l),H(v(l),e,n,a));else throw new Error("internal error: Map.rebalance")}else return H(t,e,n,a)}function ce(t,e,n,a){if(a!=null){const r=a,o=t.Compare(e,S(r))|0;return r instanceof w?o<0?it(ce(t,e,n,k(r)),S(r),j(r),v(r)):o===0?ge(e,n,k(r),v(r),ae(r)):it(k(r),S(r),j(r),ce(t,e,n,v(r))):o<0?ge(e,n,ie(),a,2):o===0?ye(e,n):ge(e,n,a,ie(),2)}else return ye(e,n)}function ct(t,e,n){e:for(;;){const a=t,r=e,o=n;if(o!=null){const s=o,c=a.Compare(r,S(s))|0;if(c===0)return kt(j(s));if(s instanceof w){t=a,e=r,n=c<0?k(s):v(s);continue e}else return}else return}}function Ut(t,e,n){const a=ct(t,e,n);if(a==null)throw new Error;return V(a)}function Jt(t,e,n){e:for(;;){const a=t,r=e,o=n;if(o!=null){const s=o,c=a.Compare(r,S(s))|0;if(s instanceof w)if(c<0){t=a,e=r,n=k(s);continue e}else{if(c===0)return!0;t=a,e=r,n=v(s);continue e}else return c===0}else return!1}}function lt(t,e){e:for(;;){const n=t,a=e;if(a!=null){const r=a;if(r instanceof w){lt(n,k(r)),n(S(r),j(r)),t=n,e=v(r);continue e}else n(S(r),j(r))}break}}function Qt(t,e){lt(t,e)}function Xt(t,e,n){let a=n;Qt((r,o)=>{e[a]=[r,o],a=a+1|0},t)}function en(t,e){return At((n,a)=>ce(t,a[0],a[1],n),ie(),e)}function tn(t,e,n){e:for(;;){const a=t,r=e,o=n;if(o["System.Collections.IEnumerator.MoveNext"]()){const s=o["System.Collections.Generic.IEnumerator`1.get_Current"]();t=a,e=ce(a,s[0],s[1],r),n=o;continue e}else return r}}function ut(t,e){let n=ie();for(let a=0;a<=e.length-1;a++){const r=e[a];n=ce(t,r[0],r[1],n)}return n}function nn(t,e){if(vt(e))return ut(t,e);if(e instanceof Tt)return en(t,e);{const n=he(e);try{return tn(t,ie(),n)}finally{n.Dispose()}}}class rn extends le{constructor(e,n){super();this.stack=e,this.started=n}}function dt(t){e:for(;;){const e=t;if(T(e))return Ze();{const n=G(e),a=z(e);if(a!=null){const r=a;if(r instanceof w){t=Pt([k(r),ye(S(r),j(r)),v(r)],n);continue e}else return e}else{t=n;continue e}}}}function ft(t){return new rn(dt(Be(t)),!1)}function an(){throw new Error("enumeration not started")}function on(){throw new Error("enumeration already finished")}function ht(t){if(t.started){const e=t.stack;if(T(e))return on();if(z(e)!=null){const n=z(e);if(n instanceof w)throw new Error("Please report error: Map iterator, unexpected stack for current");return[S(n),j(n)]}else throw new Error("Please report error: Map iterator, unexpected stack for current")}else return an()}function sn(t){if(t.started){const e=t.stack;if(T(e))return!1;if(z(e)!=null){if(z(e)instanceof w)throw new Error("Please report error: Map iterator, unexpected stack for moveNext");return t.stack=dt(G(e)),!T(t.stack)}else throw new Error("Please report error: Map iterator, unexpected stack for moveNext")}else return t.started=!0,!T(t.stack)}function pt(t){let e=ft(t);return{["System.Collections.Generic.IEnumerator`1.get_Current"](){return ht(e)},["System.Collections.IEnumerator.get_Current"](){return ht(e)},["System.Collections.IEnumerator.MoveNext"](){return sn(e)},["System.Collections.IEnumerator.Reset"](){e=ft(t)},Dispose(){}}}class de{constructor(e,n){this.comparer=e,this.tree=n}GetHashCode(){return dn(this)|0}Equals(e){const n=this;if(e instanceof de){const a=he(n);try{const r=he(e);try{const o=()=>{const s=a["System.Collections.IEnumerator.MoveNext"]();if(s===r["System.Collections.IEnumerator.MoveNext"]())if(s){const c=a["System.Collections.Generic.IEnumerator`1.get_Current"](),p=r["System.Collections.Generic.IEnumerator`1.get_Current"]();return oe(c[0],p[0])&&oe(c[1],p[1])?o():!1}else return!0;else return!1};return o()}finally{r.Dispose()}}finally{a.Dispose()}}else return!1}toString(){return"map ["+Et("; ",ne(n=>Gt("({0}, {1})",n[0],n[1]),this))+"]"}get[Symbol.toStringTag](){return"FSharpMap"}toJSON(e){const n=this;return Array.from(n)}GetEnumerator(){return pt(this.tree)}[Symbol.iterator](){return It(this.GetEnumerator())}["System.Collections.IEnumerable.GetEnumerator"](){return pt(this.tree)}CompareTo(e){const n=this;if(e instanceof de)return jt((a,r)=>{const o=n.comparer.Compare(a[0],r[0])|0;return(o!==0?o:zt(a[1],r[1]))|0},n,e)|0;throw new Error("not comparable\\nParameter name: obj")}["System.Collections.Generic.ICollection`1.Add2B595"](e){throw new Error("Map cannot be mutated")}["System.Collections.Generic.ICollection`1.Clear"](){throw new Error("Map cannot be mutated")}["System.Collections.Generic.ICollection`1.Remove2B595"](e){throw new Error("Map cannot be mutated")}["System.Collections.Generic.ICollection`1.Contains2B595"](e){const n=this;return mt(n,e[0])&&oe(Me(n,e[0]),e[1])}["System.Collections.Generic.ICollection`1.CopyToZ2E171D71"](e,n){Xt(this.tree,e,n)}["System.Collections.Generic.ICollection`1.get_IsReadOnly"](){return!0}["System.Collections.Generic.ICollection`1.get_Count"](){return Ie(this)|0}["System.Collections.Generic.IReadOnlyCollection`1.get_Count"](){return Ie(this)|0}get size(){return Ie(this)|0}clear(){throw new Error("Map cannot be mutated")}delete(e){throw new Error("Map cannot be mutated")}entries(){return ne(n=>[n[0],n[1]],this)}get(e){return Me(this,e)}has(e){return mt(this,e)}keys(){return ne(n=>n[0],this)}set(e,n){throw new Error("Map cannot be mutated")}values(){return ne(n=>n[1],this)}forEach(e,n){const a=this;Ft(r=>{e(r[1],r[0],a)},a)}}function we(t,e){return new de(t,e)}(()=>{de.empty=we(Se(),ie())})();function cn(t){const e=Se();return we(e,nn(e,t))}function ln(t,e,n){return we(t.comparer,ce(t.comparer,e,n,t.tree))}function Me(t,e){return Ut(t.comparer,e,t.tree)}function Ie(t){return qt(t.tree)}function mt(t,e){return Jt(t.comparer,e,t.tree)}function un(t,e){return ct(t.comparer,e,t.tree)}function dn(t){const e=(r,o)=>(r<<1)+o+631;let n=0;const a=he(t);try{for(;a["System.Collections.IEnumerator.MoveNext"]();){const r=a["System.Collections.Generic.IEnumerator`1.get_Current"]();n=e(n,He(r[0]))|0,n=e(n,He(r[1]))|0}}finally{a.Dispose()}return n|0}function Q(t,e,n){return ln(n,t,e)}function J(t,e){return un(e,t)}function fn(t){return cn(t)}function hn(t){const e=Se();return we(e,ut(e,t))}class d extends Ve{constructor(e,...n){super();this.tag=e|0,this.fields=n}cases(){return["Oil","Gas","Coal","Solar","Wind","Nuclear","Hydro","HydroStorage","Waste","StaticProd","NonFosilProd","TotalProd","Load","Import","Export","Battery","BatteryLevel","Excess"]}}function _t(){return Wt("Shared.Types.TraceKind",[],d,()=>[[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[]])}function pn(t){switch(t.tag){case 4:case 3:return!0;default:return!1}}function mn(t){switch(t.tag){case 0:case 1:case 2:return!0;default:return!1}}function yt(t){switch(t.tag){case 5:case 6:case 7:case 8:return!0;default:return!1}}class F extends le{constructor(e,n,a,r){super();this.kind=e,this.capacity=n,this.data=a,this.total=r}}class gt extends le{constructor(e,n,a){super();this.year=e|0,this.isSimulated=n,this.traces=a}}function Z(t,e){return Me(t.traces,e)}function wt(t,e,n){return new gt(t,e,fn(ne(a=>[a.kind,a],n)))}function _n(t){return Oe(C(()=>ne(e=>e[1],t.traces)))}class fe extends le{constructor(e,n,a,r){super();this.installedSolarMW=e,this.installedWindMW=n,this.installedBatteryMWh=a,this.batteryEfficiency=r}}function je(){return new fe(Math.fround(278),Math.fround(3),Math.fround(0),Math.fround(.8999999761581421))}function yn(){return new fe(Math.fround(500),Math.fround(100),Math.fround(100),Math.fround(.8999999761581421))}function gn(t,e,n,a){let r=Math.fround(0);return[o=>s=>{const c=re((i,h)=>W(i,h),r,s/e);r=r-c,n[o]=r;const p=c*e;return a[o]=p,s-p},o=>s=>{let c;const p=re((i,h)=>W(i,h),t-r,s);return c=ue((i,h)=>W(i,h),Math.fround(0),p),r=r+c,n[o]=r,s-c}]}function Mt(t,e){return[n=>a=>{const r=re((o,s)=>W(o,s),t[n],a);return e[n]=r,a-r},n=>a=>{const r=re((o,s)=>W(o,s),t[n],a);return e[n]=t[n]-r,a-r}]}function wn(t,e,n){return[a=>r=>(n[a]=t[a],r),a=>r=>{const o=re((s,c)=>W(s,c),ue((s,c)=>W(s,c),t[a]-e[a],Math.fround(0)),r);return n[a]=t[a]-o,r-o}]}function Mn(t){return[e=>n=>(t[e]=Math.fround(0),n),e=>n=>{t[e]=n}]}function bt(t,e){let n,a,r,o,s,c;const p=Z(t,new d(2)),i=Z(t,new d(1)),h=Z(t,new d(9)),g=Z(t,new d(13)),l=Z(t,new d(11)),m=Z(t,new d(14)),_=Z(t,new d(4)),u=Z(t,new d(3)),f=e.installedWindMW/V(_.capacity),M=e.installedSolarMW/V(u.capacity),P=new F(_.kind,V(_.capacity)*f,pe(y=>f*y,_.data,Float32Array),_.total*f),Y=new F(u.kind,V(u.capacity)*M,pe(y=>M*y,u.data,Float32Array),u.total*M),E=P.data.length|0,D=new Float32Array(E),O=new Float32Array(E),X=new Float32Array(E),ee=new Float32Array(E),te=new Float32Array(E),Ce=new Float32Array(E),ze=Mt(p.data,D),We=Mt(i.data,O),Ne=gn(e.installedBatteryMWh,e.batteryEfficiency,X,ee),St=Mn(te),De=wn(g.data,m.data,Ce);for(let y=0;y<=E-1;y++){let x=P.data[y]+Y.data[y]+h.data[y]-l.data[y];if(x>=Math.fround(0)){const xe=x,L=y|0;St[1](L)(De[1](L)(Ne[1](L)(We[1](L)(ze[1](L)(xe)))))}else{const xe=-x,L=y|0,Le=ze[0](L)(We[0](L)(De[0](L)(Ne[0](L)(xe))));Le>Math.fround(0)&&Re(A("sourcing should amount to zero on sample %d, have %f"))(L)(Le)}}return new gt(t.year,!0,(n=(a=(r=(o=(s=(c=Q(new d(3),Y,Q(new d(4),P,t.traces)),Q(new d(2),new F(p.kind,p.capacity,D,R(D,{GetZero:()=>0,Add:(y,x)=>y+x})),c)),Q(new d(1),new F(i.kind,i.capacity,O,R(O,{GetZero:()=>0,Add:(y,x)=>y+x})),s)),Q(new d(16),new F(new d(16),e.installedBatteryMWh,X,R(X,{GetZero:()=>0,Add:(y,x)=>y+x})),o)),Q(new d(15),new F(new d(15),e.installedBatteryMWh,ee,R(ee,{GetZero:()=>0,Add:(y,x)=>y+x})),r)),Q(new d(17),new F(new d(17),void 0,te,R(te,{GetZero:()=>0,Add:(y,x)=>y+x})),a)),Q(new d(13),new F(g.kind,g.capacity,Ce,R(Ce,{GetZero:()=>0,Add:(y,x)=>y+x})),n)))}function bn(t,e){if(t!=null&&/\S/.test(t)){const n=+t.replace("_","");if(!Number.isNaN(n))return e.contents=n,!0}return!1}function Fe(t){const e=new Nt(0);if(bn(t,e))return e.contents;throw new Error("Input string was not in a correct format.")}function $n(){return t=>t}const Cn=new Ke().Decorate(function(t,e){let n;const a=$n()(`
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
        `);n=Ye(q(this),a);let r;const o=I(ke("%.0f%P()",[e.installedSolarMW]));r=q(this).useState(()=>o);const s=r[0];let c;const p=I(ke("%.0f%P()",[e.installedWindMW]));c=q(this).useState(()=>p);const i=c[0];let h;const g=I(ke("%.0f%P()",[e.installedBatteryMWh]));h=q(this).useState(()=>g);const l=h[0],m=q(this).useState(()=>""),_=m[1];return $(b`
    <p class="${n}">
    <form class="energy-form" action="#">
    <b>Simulirana inštalirana moč:</b><br>
    <input type="number" id="wind" name="wind" value="${i}" size="6" min=0 step=50 @change=${u=>{c[1](ve(u.target))}} style="text-align:right;"/>
    <label for="wind">MW vetrnic</label><br/>
    <input type="number" id="solar" name="solar" value="${s}" size="6" min=0 step=100 @change=${u=>{r[1](ve(u.target))}} style="text-align:right;"/>
    <label for="solar">MW fotopanelov</label><br/>
    <input type="number" id="battery" name="battery" value="${l}" size="6" step=50 min=0 @change=${u=>{h[1](ve(u.target))}} style="text-align:right;"/>
    <label for="battery">MWh baterij</label><br/>
    <input type="button" value="Izračunaj" @click=${u=>{let f;console.log("submit:",u);let M;try{M=new at(0,(f=je(),new fe(Fe(s),Fe(i),Fe(l),f.batteryEfficiency)))}catch(P){M=new at(1,P.message)}return me(A("submit: %A"))(M),M.tag===1?_(m[0]):(_(""),t(M.fields[0])),u.preventDefault(),!1}} >
    </form>
    </p>
    `)});function xn(t,e,n){let a,r;const o=(l,m)=>{const _=Z(l,m).data,u=new Float32Array(~~((_.length+1)/24));let f=_[0];for(let M=0;M<=_.length-1;M++){const P=~~(M/24)|0,Y=_[M]+u[P];f=ue((E,D)=>W(E,D),f,Y),u[P]=Y}return[u,f]},s=o(n,new d(3)),c=o(n,new d(4)),p=o(n,new d(6)),i=o(e,new d(2)),h=o(n,new d(2)),g=o(n,new d(17));return a={text:"Dnevne krivulje"},r=[{title:{text:"Proizvodnja MW"}},{opposite:!0,title:{text:"Stanje baterije %"}}],{plotOptions:{},series:qe(C(()=>N(K({data:p[0],name:"Voda",yAxis:0}),C(()=>N(K({color:"#888",data:i[0],name:`Premog ${e.year}`,yAxis:0}),C(()=>N(K({data:h[0],name:"Premog simuliran",yAxis:0}),C(()=>N(K({data:c[0],name:"Veter",yAxis:0}),C(()=>N(K({data:s[0],name:"Sonce",yAxis:0}),C(()=>N(K({color:"#c6d",data:g[0],name:"Prese\u017Eek",yAxis:0}),C(()=>{let l;const m=J(new d(16),n.traces);if(m!=null)if(oe(m.capacity,void 0))l=void 0;else{let _;switch(m!=null&&V(m.capacity)===Math.fround(0)?_=0:_=1,_){case 0:{l=void 0;break}case 1:{if(m!=null){const u=m,f=u.data,M=V(u.capacity),P=new Float32Array(~~((f.length+1)/24)),Y=Te(~~((f.length+1)/24),D=>Math.fround(34028234663852886e22),Float32Array),E=new Float32Array(~~((f.length+1)/24));for(let D=0;D<=f.length-1;D++){const O=~~(D/24)|0,X=f[D]/M*Math.fround(100);Y[O]=re((ee,te)=>W(ee,te),Y[O],X),E[O]=ue((ee,te)=>W(ee,te),E[O],X),P[O]=P[O]+X/Math.fround(24)}l=[P,Y,E]}else throw new Error("Match failure");break}}}else l=void 0;if(l!=null){const _=l[0];return N(K({color:"#8085e9",data:Dt((u,f,M)=>[u,f,M],l[1],l[2]),name:"% baterije min/max na dan",opacity:.3,type:"arearange",yAxis:1}),C(()=>K({color:"#8085e9",data:_,name:"% baterije dnevno povpre\u010Dje",yAxis:1})))}else return Lt()})))))))))))))),title:a,type:"arearange",yAxis:r}}const Sn=new Ke().Decorate(function(t,e,n){const a=xn(t,e,n);return setTimeout(()=>{console.log("chart options",a),Highcharts.chart("chart_container",a)},200),$(b`
    <p>
    <div id="chart_container" style="width:1000px; height:600px;" />
    </p>
    `)});function $t(t){let e=0,n=2147483647;const a=qe(C(()=>ne(r=>(e=ue((o,s)=>W(o,s),e,r.data.length)|0,n=re((o,s)=>W(o,s),n,r.data.length)|0,r.data),t)));return e===n?Te(e,r=>{let o=Math.fround(0);for(let s=0;s<=a.length-1;s++){const c=a[s];o=o+c[r]}return o},Float32Array):Te(e,r=>{let o=Math.fround(0);for(let s=0;s<=a.length-1;s++){const c=a[s];c.length>r&&(o=o+c[r])}return o},Float32Array)}function kn(t){const e=Ue(u=>{const f=u.kind;return(pn(f)?!0:mn(f))?!0:yt(f)},_n(t)),n=e[0],a=e[1];let r;const o=$t(n);r=new F(new d(11),Je(u=>Qe(u.capacity,Math.fround(0)),n,{GetZero:()=>0,Add:(u,f)=>u+f}),o,R(o,{GetZero:()=>0,Add:(u,f)=>u+f}));const s=Ue(u=>yt(u.kind),n),c=s[0];let p;const i=$t(c);p=new F(new d(9),void 0,i,R(i,{GetZero:()=>0,Add:(u,f)=>u+f}));let h;const g=Vt(u=>oe(u.kind,new d(12)),a),l=r.data,m=new Float32Array(l.length),_=new Float32Array(l.length);for(let u=0;u<=l.length-1;u++){const f=g.data[u]-l[u];f>Math.fround(0)?m[u]=f:_[u]=-f}return h=se([new F(new d(13),void 0,m,R(m,{GetZero:()=>0,Add:(u,f)=>u+f})),new F(new d(14),void 0,_,R(_,{GetZero:()=>0,Add:(u,f)=>u+f}))]),wt(t.year,t.isSimulated,Oe(C(()=>N(K(r),C(()=>N(K(p),C(()=>N(c,C(()=>N(s[1],C(()=>N(h,C(()=>a)))))))))))))}class vn{constructor(){}}function Tn(){return new vn}function An(t,e){return{then:(n,a)=>{try{return e().then(n,a)}catch(r){if(a==null)return Promise.reject(r);try{const o=a(r);return Promise.resolve(o)}catch(o){return Promise.reject(o)}}},catch:n=>{try{return e().catch(n)}catch(a){try{const r=n(a);return Promise.resolve(r)}catch(r){return Promise.reject(r)}}}}}function En(t,e){return e.then(n=>n)}const Ct=Tn(),In=hn(pe(t=>(me(`'${Xe(t)}' -> ${et(t,[])}`),[Xe(t),et(t,[])]),Bt(_t())));function jn(t){return new F(Me(In,t.kind),t.capacity,t.data,t.total)}En(Ct,An(Ct,()=>{const t=fetch("contacts.json").then(e=>e.json());return me(A("%A"))(t),Promise.resolve()}));function Ln(){}const Vn=(()=>(je(),new fe(Math.fround(6e3),Math.fround(400),Math.fround(6e3),Math.fround(.8999999761581421))))(),Bn=(()=>(je(),new fe(Math.fround(1e3),Math.fround(100),Math.fround(100),Math.fround(.8999999761581421))))();function Pe(t){switch(t.tag){case 1:return"Plin";case 2:return"Premog";case 3:return"Sonce";case 4:return"Veter";case 5:return"NEK";case 6:return"Voda";case 7:return"\u0106HE";case 8:return"Smeti";case 9:return"Stati\u010Dna proizvodnja";case 10:return"Nefosilna proizvodnja";case 11:return"Skupaj";case 12:return"Poraba";case 13:return"Uvoz";case 14:return"Izvoz";case 15:return"Baterija";case 16:return"Nivo baterije";case 17:return"Prese\u017Eek";default:return"Nafta"}}const be=se([new d(4),new d(3),new d(15)]),$e=se([new d(4),new d(3),new d(15),new d(2),new d(1),new d(5),new d(6),new d(13),new d(14),new d(17)]);function Fn(t){return`${t.year}${t.isSimulated?"'":""}`}function Pn(){return $(b`
    <tr>
    <th></th>
    <th colspan=${tt(be)}>Inštalirana moč [MW,MWh]</th>
    <th colspan=${tt($e)}>Proizvodnja [GWh]</th>
    <th>Izpusti [MT]</th>
    </tr>
    <tr>
    <th>Leto</th>
    ${U(t=>`${t}`,t=>$(b`<th>${Pe(t)}</th>`),be)}
    ${U(t=>`${t}`,t=>$(b`<th>${Pe(t)}</th>`),$e)}
    <th>CO2</th>
    </tr>
    `)}function Ge(t){return(Z(t,new d(2)).total*Math.fround(448.32000732421875)+Z(t,new d(1)).total*Math.fround(988.8300170898438))/Math.fround(1e6)}function Gn(t){let e;return $(b`
    <tr>
    <th>${Fn(t)}</th>
    ${U(n=>`${n}`,n=>{let a,r;return $(b`<td>${a=J(n,t.traces),a==null?B():(r=Qe(a.capacity,Math.fround(0)),I(A("%.0f"))(r))}</td>`)},be)}
    ${U(n=>`${n}`,n=>{let a,r;return $(b`<td>${a=J(n,t.traces),a==null?B():(r=a.total/Math.fround(1e3),I(A("%.1f"))(r))}</td>`)},$e)}
    <td>${e=Ge(t),I(A("%.1f"))(e)}</td>
    </tr>
    `)}function zn(t,e){let n;const a=(r,o)=>{let s;const c=[r,o];let p,i,h;switch(c[0]!=null&&c[1]!=null?(p=0,i=c[1],h=c[0]):p=1,p){case 0:{const g=i/h;return g>Math.fround(1)?I(A("%.1fx"))(g):(s=Math.fround(100)*g,I(A("%.1f%%"))(s))}case 1:return B()}};return $(b`
    <tr>
    <th>Delež</th>
    ${U(r=>`${r}`,r=>{let o;return $(b`<td>${o=r,a(_e(s=>s.capacity,J(o,t.traces)),_e(s=>s.capacity,J(o,e.traces)))}</td>`)},be)}
    ${U(r=>`${r}`,r=>{let o;return $(b`<td>${o=r,a(Ae(s=>s.total,J(o,t.traces)),Ae(s=>s.total,J(o,e.traces)))}</td>`)},$e)}
    <td>${n=Math.fround(100)*Ge(e)/Ge(t),I(A("%.1f%%"))(n)}</td>
    </tr>
    `)}class xt extends le{constructor(e,n,a,r){super();this.kind=e,this.deltaCapacity=n,this.price=a,this.cost=r}}function Hn(){return Ht("EnergyApp.CostItem",[],xt,()=>[["kind",_t()],["deltaCapacity",Ee],["price",Ee],["cost",Ee]])}function Wn(t,e){const n=$(b`<tr><th>Vir</th><th>Gradnja [MW]</th><th>Cena [€/kW]</th><th>Cena [M€]</th></tr>`),a=Zt(o=>{let s;const c=o,p=_e(f=>f.capacity,J(c,e.traces)),i=[_e(f=>f.capacity,J(c,t.traces)),p];let h,g,l,m;switch(i[0]==null?i[1]!=null?(h=1,m=i[1]):h=2:i[1]!=null?(h=0,g=i[1],l=i[0]):h=2,h){case 0:{s=g-l;break}case 1:{s=m;break}case 2:{s=Math.fround(0);break}}let _;const u=o;switch(u.tag){case 3:{_=Math.fround(790);break}case 4:{_=Math.fround(1500);break}case 15:{_=Math.fround(340);break}default:_=Re(`missing cost of ${u}`)}return new xt(o,s,_,s*_*Math.fround(.0010000000474974513))},se([new d(4),new d(3),new d(15)])),r=Je(o=>o.cost,a,{GetZero:()=>0,Add:(o,s)=>o+s});return $(b`
    <h2>Cena</h2>
    <table class="energy-table">
    <thead>${n}</thead>
    <tbody>
    ${U(o=>rt(o[0]),o=>{const s=o[1];return $(b`
        <tr>
        <td>${Pe(s.kind)}</td>
        <td>${I(A("%.1f"))(s.deltaCapacity)}</td>
        <td>${I(A("%.1f"))(s.price)}</td>
        <td>${I(A("%.1f"))(s.cost)}</td>
        </tr>
        `)},nt(a))}
    <tr>
    <td>Skupaj</td>
    <td></td>
    <td></td>
    <td>${I(A("%.1f"))(r)}</td>
    </tr>
    <tbody>
    </table>
    `)}const Zn=new Ot("energy-app").Decorate(function(){this.init(i=>{const h=i;return h.useShadowDom=!1,h.styles=Be(Rt(b`
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
        `)),Promise.resolve(void 0)});const t=Ye(q(this),`
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
    `);let e;const n=yn();e=q(this).useState(()=>n);const a=e[0],r=q(this).useState(Ze),o=r[0],s=r[1];q(this).useEffectOnce(()=>{const i=2020;return fetch(`energy-traces-${i}.json`).then(g=>g.json()).then(g=>{const l=kn(wt(i,!1,pe(m=>jn(m),g)));s(se([l,bt(l,a)]))}),Kt()});const c=$(b`
    <p>${"Opombe:"}
    <ul>
    ${U(i=>rt(i[0]),i=>$(b`<li>${i[1]}</li>`),nt(["Za NEK se \u0161teje samo slovenski del proizvodnje. Za toliko je zni\u017Ean tudi izvoz.","Proizvodnja baterije v tabeli je prikazana kot priskevek baterije k letni proizvodnji: 90% shranjene energije, ki jo baterija vrne v omre\u017Eje.","Kadar je energije v izobilju, se po vrsti: zaustavi premog, plin, polni baterijo, zmanj\u0161a uvoz, preostanek se \u0161teje kot prese\u017Eek."]))}
    `),p=Ae(i=>i.year,Yt(o));return $(b`
    <div class="energy-sim ${t}">
    <h2>Energijska simulacija</h2>
    <p>Simulacija elektroenergetskega sistema na realnih urnih podatkih donosa sonca in vetra za leto ${p}<br>ob predpostaviki povečanih kapacitet vetrnih in solarnih elektrarn ter baterijskega shranjavanja energije.</p>
    <div class="energy-result">
    <table class="energy-table">
    <thead>
    ${Pn()}
    </thead>
    <tbody>
    ${U(i=>`${i.year}${i.isSimulated}`,i=>Gn(i),o)}
    ${T(o)?B():T(G(o))?B():T(G(G(o)))?zn(z(o),z(G(o))):B()}
    </tbody>
    </table>
    ${Cn(i=>{if(!oe(i,a)&&(e[1](i),!T(o))){const h=z(o);me(A("running simulation...")),s(se([h,bt(h,i)]))}},a)}
    ${c}
    ${T(o)?B():T(G(o))?B():T(G(G(o)))?Wn(z(o),z(G(o))):B()}
    ${T(o)?B():T(G(o))?B():Sn(a,z(o),z(G(o)))}
    </div>
    </div>
    `)});export{xt as CostItem,Hn as CostItem$reflection,Zn as EnergySimulationApp,Pe as colName,$e as dataColumns,Ge as getTonsCO2,Fn as getYsYearName,be as installedColumns,Ln as register,Wn as renderCostList,zn as renderDeltaRow,Pn as renderTraceHeader,Gn as renderTraceRow,Vn as simConfig,Bn as simConfig$0027};
