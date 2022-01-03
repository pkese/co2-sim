import{U as Be,s as kt,v as D,i as vt,F as Tt,f as Et,g as fe,e as ae,j as At,m as te,a as Ve,t as It,c as jt,b as Ft,L as Se,d as He,R as ce,h as E,k as G,l as z,o as Pt,n as Ze,p as Gt,q as zt,r as Oe,u as S,w as Wt,x as O,y as he,z as ne,A as W,B as le,C as Re,D as A,E as Nt,H as Ke,G as Ye,I as R,J as I,K as ke,M as b,N as M,O as ve,P as pe,Q as qe,S as L,T as K,V as Te,W as Dt,X as Lt,Y as Ue,Z as Je,_ as Qe,$ as Bt,a0 as oe,a1 as Vt,a2 as Xe,a3 as et,a4 as tt,a5 as Y,a6 as B,a7 as me,a8 as Ee,a9 as Ht,aa as Zt,ab as nt,ac as rt,ad as Ot,ae as Rt,af as Kt,ag as Yt,ah as Ae}from"./index.b67bb38d.js";import"./vendor.bd24dec8.js";class at extends Be{constructor(e,...n){super();this.tag=e|0,this.fields=n}cases(){return["Ok","Error"]}}class ot{constructor(e,n){this.k=e,this.v=n}}function _e(t,e){return new ot(t,e)}function k(t){return t.k}function j(t){return t.v}class w extends ot{constructor(e,n,a,r,o){super(e,n);this.left=a,this.right=r,this.h=o|0}}function ye(t,e,n,a,r){return new w(t,e,n,a,r)}function v(t){return t.left}function T(t){return t.right}function re(t){return t.h}function se(){}function st(t,e){e:for(;;){const n=t,a=e;if(a!=null){const r=a;if(r instanceof w){t=st(n+1,v(r)),e=T(r);continue e}else return n+1|0}else return n|0}}function qt(t){return st(0,t)}function V(t,e,n,a){let r;const o=t;if(o!=null){const i=o;r=i instanceof w?re(i):1}else r=0;let s;const c=a;if(c!=null){const i=c;s=i instanceof w?re(i):1}else s=0;const m=(r<s?s:r)|0;return m===0?_e(e,n):ye(e,n,t,a,m+1)}function it(t,e,n,a){let r,o,s,c,m;const i=t;if(i!=null){const u=i;m=u instanceof w?re(u):1}else m=0;let f;const _=a;if(_!=null){const u=_;f=u instanceof w?re(u):1}else f=0;if(f>m+2){const u=D(a);if(u instanceof w)if(r=v(u),(r!=null?(o=r,o instanceof w?re(o):1):0)>m+1){const h=D(v(u));if(h instanceof w)return V(V(t,e,n,v(h)),k(h),j(h),V(T(h),k(u),j(u),T(u)));throw new Error("internal error: Map.rebalance")}else return V(V(t,e,n,v(u)),k(u),j(u),T(u));else throw new Error("internal error: Map.rebalance")}else if(m>f+2){const u=D(t);if(u instanceof w)if(s=T(u),(s!=null?(c=s,c instanceof w?re(c):1):0)>f+1){const h=D(T(u));if(h instanceof w)return V(V(v(u),k(u),j(u),v(h)),k(h),j(h),V(T(h),e,n,a));throw new Error("internal error: Map.rebalance")}else return V(v(u),k(u),j(u),V(T(u),e,n,a));else throw new Error("internal error: Map.rebalance")}else return V(t,e,n,a)}function ie(t,e,n,a){if(a!=null){const r=a,o=t.Compare(e,k(r))|0;return r instanceof w?o<0?it(ie(t,e,n,v(r)),k(r),j(r),T(r)):o===0?ye(e,n,v(r),T(r),re(r)):it(v(r),k(r),j(r),ie(t,e,n,T(r))):o<0?ye(e,n,se(),a,2):o===0?_e(e,n):ye(e,n,a,se(),2)}else return _e(e,n)}function ct(t,e,n){e:for(;;){const a=t,r=e,o=n;if(o!=null){const s=o,c=a.Compare(r,k(s))|0;if(c===0)return kt(j(s));if(s instanceof w){t=a,e=r,n=c<0?v(s):T(s);continue e}else return}else return}}function Ut(t,e,n){const a=ct(t,e,n);if(a==null)throw new Error;return D(a)}function Jt(t,e,n){e:for(;;){const a=t,r=e,o=n;if(o!=null){const s=o,c=a.Compare(r,k(s))|0;if(s instanceof w)if(c<0){t=a,e=r,n=v(s);continue e}else{if(c===0)return!0;t=a,e=r,n=T(s);continue e}else return c===0}else return!1}}function lt(t,e){e:for(;;){const n=t,a=e;if(a!=null){const r=a;if(r instanceof w){lt(n,v(r)),n(k(r),j(r)),t=n,e=T(r);continue e}else n(k(r),j(r))}break}}function Qt(t,e){lt(t,e)}function Xt(t,e,n){let a=n;Qt((r,o)=>{e[a]=[r,o],a=a+1|0},t)}function en(t,e){return Et((n,a)=>ie(t,a[0],a[1],n),se(),e)}function tn(t,e,n){e:for(;;){const a=t,r=e,o=n;if(o["System.Collections.IEnumerator.MoveNext"]()){const s=o["System.Collections.Generic.IEnumerator`1.get_Current"]();t=a,e=ie(a,s[0],s[1],r),n=o;continue e}else return r}}function ut(t,e){let n=se();for(let a=0;a<=e.length-1;a++){const r=e[a];n=ie(t,r[0],r[1],n)}return n}function nn(t,e){if(vt(e))return ut(t,e);if(e instanceof Tt)return en(t,e);{const n=fe(e);try{return tn(t,se(),n)}finally{n.Dispose()}}}class rn extends ce{constructor(e,n){super();this.stack=e,this.started=n}}function dt(t){e:for(;;){const e=t;if(E(e))return Ze();{const n=G(e),a=z(e);if(a!=null){const r=a;if(r instanceof w){t=Pt([v(r),_e(k(r),j(r)),T(r)],n);continue e}else return e}else{t=n;continue e}}}}function ft(t){return new rn(dt(Ve(t)),!1)}function an(){throw new Error("enumeration not started")}function on(){throw new Error("enumeration already finished")}function ht(t){if(t.started){const e=t.stack;if(E(e))return on();if(z(e)!=null){const n=z(e);if(n instanceof w)throw new Error("Please report error: Map iterator, unexpected stack for current");return[k(n),j(n)]}else throw new Error("Please report error: Map iterator, unexpected stack for current")}else return an()}function sn(t){if(t.started){const e=t.stack;if(E(e))return!1;if(z(e)!=null){if(z(e)instanceof w)throw new Error("Please report error: Map iterator, unexpected stack for moveNext");return t.stack=dt(G(e)),!E(t.stack)}else throw new Error("Please report error: Map iterator, unexpected stack for moveNext")}else return t.started=!0,!E(t.stack)}function pt(t){let e=ft(t);return{["System.Collections.Generic.IEnumerator`1.get_Current"](){return ht(e)},["System.Collections.IEnumerator.get_Current"](){return ht(e)},["System.Collections.IEnumerator.MoveNext"](){return sn(e)},["System.Collections.IEnumerator.Reset"](){e=ft(t)},Dispose(){}}}class ue{constructor(e,n){this.comparer=e,this.tree=n}GetHashCode(){return dn(this)|0}Equals(e){const n=this;if(e instanceof ue){const a=fe(n);try{const r=fe(e);try{const o=()=>{const s=a["System.Collections.IEnumerator.MoveNext"]();if(s===r["System.Collections.IEnumerator.MoveNext"]())if(s){const c=a["System.Collections.Generic.IEnumerator`1.get_Current"](),m=r["System.Collections.Generic.IEnumerator`1.get_Current"]();return ae(c[0],m[0])&&ae(c[1],m[1])?o():!1}else return!0;else return!1};return o()}finally{r.Dispose()}}finally{a.Dispose()}}else return!1}toString(){return"map ["+At("; ",te(n=>Gt("({0}, {1})",n[0],n[1]),this))+"]"}get[Symbol.toStringTag](){return"FSharpMap"}toJSON(e){const n=this;return Array.from(n)}GetEnumerator(){return pt(this.tree)}[Symbol.iterator](){return It(this.GetEnumerator())}["System.Collections.IEnumerable.GetEnumerator"](){return pt(this.tree)}CompareTo(e){const n=this;if(e instanceof ue)return jt((a,r)=>{const o=n.comparer.Compare(a[0],r[0])|0;return(o!==0?o:zt(a[1],r[1]))|0},n,e)|0;throw new Error("not comparable\\nParameter name: obj")}["System.Collections.Generic.ICollection`1.Add2B595"](e){throw new Error("Map cannot be mutated")}["System.Collections.Generic.ICollection`1.Clear"](){throw new Error("Map cannot be mutated")}["System.Collections.Generic.ICollection`1.Remove2B595"](e){throw new Error("Map cannot be mutated")}["System.Collections.Generic.ICollection`1.Contains2B595"](e){const n=this;return mt(n,e[0])&&ae(we(n,e[0]),e[1])}["System.Collections.Generic.ICollection`1.CopyToZ2E171D71"](e,n){Xt(this.tree,e,n)}["System.Collections.Generic.ICollection`1.get_IsReadOnly"](){return!0}["System.Collections.Generic.ICollection`1.get_Count"](){return Ie(this)|0}["System.Collections.Generic.IReadOnlyCollection`1.get_Count"](){return Ie(this)|0}get size(){return Ie(this)|0}clear(){throw new Error("Map cannot be mutated")}delete(e){throw new Error("Map cannot be mutated")}entries(){return te(n=>[n[0],n[1]],this)}get(e){return we(this,e)}has(e){return mt(this,e)}keys(){return te(n=>n[0],this)}set(e,n){throw new Error("Map cannot be mutated")}values(){return te(n=>n[1],this)}forEach(e,n){const a=this;Ft(r=>{e(r[1],r[0],a)},a)}}function ge(t,e){return new ue(t,e)}(()=>{ue.empty=ge(Se(),se())})();function cn(t){const e=Se();return ge(e,nn(e,t))}function ln(t,e,n){return ge(t.comparer,ie(t.comparer,e,n,t.tree))}function we(t,e){return Ut(t.comparer,e,t.tree)}function Ie(t){return qt(t.tree)}function mt(t,e){return Jt(t.comparer,e,t.tree)}function un(t,e){return ct(t.comparer,e,t.tree)}function dn(t){const e=(r,o)=>(r<<1)+o+631;let n=0;const a=fe(t);try{for(;a["System.Collections.IEnumerator.MoveNext"]();){const r=a["System.Collections.Generic.IEnumerator`1.get_Current"]();n=e(n,He(r[0]))|0,n=e(n,He(r[1]))|0}}finally{a.Dispose()}return n|0}function J(t,e,n){return ln(n,t,e)}function q(t,e){return un(e,t)}function fn(t){return cn(t)}function hn(t){const e=Se();return ge(e,ut(e,t))}class d extends Be{constructor(e,...n){super();this.tag=e|0,this.fields=n}cases(){return["Oil","Gas","Coal","Solar","Wind","Nuclear","Hydro","HydroStorage","Waste","StaticProd","NonFosilProd","TotalProd","Load","Import","Export","Battery","BatteryLevel","Excess"]}}function _t(){return Wt("Shared.Types.TraceKind",[],d,()=>[[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[]])}function pn(t){switch(t.tag){case 4:case 3:return!0;default:return!1}}function mn(t){switch(t.tag){case 0:case 1:case 2:return!0;default:return!1}}function yt(t){switch(t.tag){case 5:case 6:case 7:case 8:return!0;default:return!1}}class F extends ce{constructor(e,n,a,r){super();this.kind=e,this.capacity=n,this.data=a,this.total=r}}class gt extends ce{constructor(e,n,a){super();this.year=e|0,this.isSimulated=n,this.traces=a}}function H(t,e){return we(t.traces,e)}function wt(t,e,n){return new gt(t,e,fn(te(a=>[a.kind,a],n)))}function _n(t){return Oe(S(()=>te(e=>e[1],t.traces)))}class de extends ce{constructor(e,n,a,r){super();this.installedSolarMW=e,this.installedWindMW=n,this.installedBatteryMWh=a,this.batteryEfficiency=r}}function je(){return new de(Math.fround(278),Math.fround(3),Math.fround(0),Math.fround(.8999999761581421))}function yn(){return new de(Math.fround(500),Math.fround(100),Math.fround(100),Math.fround(.8999999761581421))}function gn(t,e,n,a){let r=Math.fround(0);return[o=>s=>{const c=ne((i,f)=>W(i,f),r,s/e);r=r-c,n[o]=r;const m=c*e;return a[o]=m,s-m},o=>s=>{let c;const m=ne((i,f)=>W(i,f),t-r,s);return c=le((i,f)=>W(i,f),Math.fround(0),m),r=r+c,n[o]=r,s-c}]}function Mt(t,e){return[n=>a=>{const r=ne((o,s)=>W(o,s),t[n],a);return e[n]=r,a-r},n=>a=>{const r=ne((o,s)=>W(o,s),t[n],a);return e[n]=t[n]-r,a-r}]}function wn(t,e,n){return[a=>r=>(n[a]=t[a],r),a=>r=>{const o=ne((s,c)=>W(s,c),le((s,c)=>W(s,c),t[a]-e[a],Math.fround(0)),r);return n[a]=t[a]-o,r-o}]}function Mn(t){return[e=>n=>(t[e]=Math.fround(0),n),e=>n=>{t[e]=n}]}function bt(t,e){let n,a,r,o,s,c;const m=H(t,new d(2)),i=H(t,new d(1)),f=H(t,new d(9)),_=H(t,new d(13)),u=H(t,new d(11)),h=H(t,new d(14)),y=H(t,new d(4)),l=H(t,new d(3)),p=e.installedWindMW/D(y.capacity),$=e.installedSolarMW/D(l.capacity),P=new F(y.kind,D(y.capacity)*p,he(g=>p*g,y.data,Float32Array),y.total*p),U=new F(l.kind,D(l.capacity)*$,he(g=>$*g,l.data,Float32Array),l.total*$),C=P.data.length|0,Z=new Float32Array(C),Q=new Float32Array(C),X=new Float32Array(C),ee=new Float32Array(C),$e=new Float32Array(C),Ce=new Float32Array(C),ze=Mt(m.data,Z),We=Mt(i.data,Q),Ne=gn(e.installedBatteryMWh,e.batteryEfficiency,X,ee),St=Mn($e),De=wn(_.data,h.data,Ce);for(let g=0;g<=C-1;g++){let x=P.data[g]+U.data[g]+f.data[g]-u.data[g];if(x>=Math.fround(0)){const xe=x,N=g|0;St[1](N)(De[1](N)(Ne[1](N)(We[1](N)(ze[1](N)(xe)))))}else{const xe=-x,N=g|0,Le=ze[0](N)(We[0](N)(De[0](N)(Ne[0](N)(xe))));Le>Math.fround(0)&&Re(A("sourcing should amount to zero on sample %d, have %f"))(N)(Le)}}return new gt(t.year,!0,(n=(a=(r=(o=(s=(c=J(new d(3),U,J(new d(4),P,t.traces)),J(new d(2),new F(m.kind,m.capacity,Z,O(Z,{GetZero:()=>0,Add:(g,x)=>g+x})),c)),J(new d(1),new F(i.kind,i.capacity,Q,O(Q,{GetZero:()=>0,Add:(g,x)=>g+x})),s)),J(new d(16),new F(new d(16),e.installedBatteryMWh,X,O(X,{GetZero:()=>0,Add:(g,x)=>g+x})),o)),J(new d(15),new F(new d(15),e.installedBatteryMWh,ee,O(ee,{GetZero:()=>0,Add:(g,x)=>g+x})),r)),J(new d(17),new F(new d(17),void 0,$e,O($e,{GetZero:()=>0,Add:(g,x)=>g+x})),a)),J(new d(13),new F(_.kind,_.capacity,Ce,O(Ce,{GetZero:()=>0,Add:(g,x)=>g+x})),n)))}function bn(t,e){if(t!=null&&/\S/.test(t)){const n=+t.replace("_","");if(!Number.isNaN(n))return e.contents=n,!0}return!1}function Fe(t){const e=new Nt(0);if(bn(t,e))return e.contents;throw new Error("Input string was not in a correct format.")}function $n(){return t=>t}const Cn=new Ke().Decorate(function(t,e){let n;const a=$n()(`
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
        `);n=Ye(R(this),a);let r;const o=I(ke("%.0f%P()",[e.installedSolarMW]));r=R(this).useState(()=>o);const s=r[0];let c;const m=I(ke("%.0f%P()",[e.installedWindMW]));c=R(this).useState(()=>m);const i=c[0];let f;const _=I(ke("%.0f%P()",[e.installedBatteryMWh]));f=R(this).useState(()=>_);const u=f[0],h=R(this).useState(()=>""),y=h[1];return b(M`
    <p class="${n}">
    <form class="energy-form" action="#">
    <b>Simulirana inštalirana moč:</b><br>
    <input type="number" id="wind" name="wind" value="${i}" size="6" min=0 step=50 @change=${l=>{c[1](ve(l.target))}} style="text-align:right;"/>
    <label for="wind">MW vetrnic</label><br/>
    <input type="number" id="solar" name="solar" value="${s}" size="6" min=0 step=100 @change=${l=>{r[1](ve(l.target))}} style="text-align:right;"/>
    <label for="solar">MW fotopanelov</label><br/>
    <input type="number" id="battery" name="battery" value="${u}" size="6" step=50 min=0 @change=${l=>{f[1](ve(l.target))}} style="text-align:right;"/>
    <label for="battery">MWh baterij</label><br/>
    <input type="button" value="Izračunaj" @click=${l=>{let p;console.log("submit:",l);let $;try{$=new at(0,(p=je(),new de(Fe(s),Fe(i),Fe(u),p.batteryEfficiency)))}catch(P){$=new at(1,P.message)}return pe(A("submit: %A"))($),$.tag===1?y(h[0]):(y(""),t($.fields[0])),l.preventDefault(),!1}} >
    </form>
    </p>
    `)});function xn(t,e,n){let a,r;const o=(_,u)=>{const h=H(_,u).data,y=new Float32Array(~~((h.length+1)/24));let l=h[0];for(let p=0;p<=h.length-1;p++){const $=~~(p/24)|0,P=h[p]+y[$];l=le((U,C)=>W(U,C),l,P),y[$]=P}return[y,l]},s=o(n,new d(3)),c=o(n,new d(4)),m=o(n,new d(6)),i=o(e,new d(2)),f=o(n,new d(2));return a={text:"Dnevne krivulje"},r=[{title:{text:"Proizvodnja MW"}},{opposite:!0,title:{text:"Stanje baterije %"}}],{plotOptions:{},series:qe(S(()=>L(K({data:m[0],name:"Voda",yAxis:0}),S(()=>L(K({color:"#888",data:i[0],name:`Premog ${e.year}`,yAxis:0}),S(()=>L(K({data:f[0],name:"Premog simuliran",yAxis:0}),S(()=>L(K({data:c[0],name:"Veter",yAxis:0}),S(()=>L(K({data:s[0],name:"Sonce",yAxis:0}),S(()=>{let _;const u=q(new d(16),n.traces);if(u!=null)if(ae(u.capacity,void 0))_=void 0;else{let h;switch(u!=null&&D(u.capacity)===Math.fround(0)?h=0:h=1,h){case 0:{_=void 0;break}case 1:{if(u!=null){const y=u,l=y.data,p=D(y.capacity),$=new Float32Array(~~((l.length+1)/24)),P=Te(~~((l.length+1)/24),C=>Math.fround(34028234663852886e22),Float32Array),U=new Float32Array(~~((l.length+1)/24));for(let C=0;C<=l.length-1;C++){const Z=~~(C/24)|0,Q=l[C]/p*Math.fround(100);P[Z]=ne((X,ee)=>W(X,ee),P[Z],Q),U[Z]=le((X,ee)=>W(X,ee),U[Z],Q),$[Z]=$[Z]+Q/Math.fround(24)}_=[$,P,U]}else throw new Error("Match failure");break}}}else _=void 0;if(_!=null){const h=_[0];return L(K({color:"#8085e9",data:Dt((y,l,p)=>[y,l,p],_[1],_[2]),name:"Baterija min/max na dan",opacity:.3,type:"arearange",yAxis:1}),S(()=>K({color:"#8085e9",data:h,name:"Baterija dnevno povpre\u010Dje",yAxis:1})))}else return Lt()})))))))))))),title:a,type:"arearange",yAxis:r}}const Sn=new Ke().Decorate(function(t,e,n){const a=xn(t,e,n);return setTimeout(()=>{console.log("chart options",a),Highcharts.chart("chart_container",a)},200),b(M`
    <p>
    <div id="chart_container" style="width:1000px; height:600px;" />
    </p>
    `)});function $t(t){let e=0,n=2147483647;const a=qe(S(()=>te(r=>(e=le((o,s)=>W(o,s),e,r.data.length)|0,n=ne((o,s)=>W(o,s),n,r.data.length)|0,r.data),t)));return e===n?Te(e,r=>{let o=Math.fround(0);for(let s=0;s<=a.length-1;s++){const c=a[s];o=o+c[r]}return o},Float32Array):Te(e,r=>{let o=Math.fround(0);for(let s=0;s<=a.length-1;s++){const c=a[s];c.length>r&&(o=o+c[r])}return o},Float32Array)}function kn(t){const e=Ue(l=>{const p=l.kind;return(pn(p)?!0:mn(p))?!0:yt(p)},_n(t)),n=e[0],a=e[1];let r;const o=$t(n);r=new F(new d(11),Je(l=>Qe(l.capacity,Math.fround(0)),n,{GetZero:()=>0,Add:(l,p)=>l+p}),o,O(o,{GetZero:()=>0,Add:(l,p)=>l+p}));const s=Ue(l=>yt(l.kind),n),c=s[0];let m;const i=$t(c);m=new F(new d(9),void 0,i,O(i,{GetZero:()=>0,Add:(l,p)=>l+p}));let f;const _=Bt(l=>ae(l.kind,new d(12)),a),u=r.data,h=new Float32Array(u.length),y=new Float32Array(u.length);for(let l=0;l<=u.length-1;l++){const p=_.data[l]-u[l];p>Math.fround(0)?h[l]=p:y[l]=-p}return f=oe([new F(new d(13),void 0,h,O(h,{GetZero:()=>0,Add:(l,p)=>l+p})),new F(new d(14),void 0,y,O(y,{GetZero:()=>0,Add:(l,p)=>l+p}))]),wt(t.year,t.isSimulated,Oe(S(()=>L(K(r),S(()=>L(K(m),S(()=>L(c,S(()=>L(s[1],S(()=>L(f,S(()=>a)))))))))))))}class vn{constructor(){}}function Tn(){return new vn}function En(t,e){return{then:(n,a)=>{try{return e().then(n,a)}catch(r){if(a==null)return Promise.reject(r);try{const o=a(r);return Promise.resolve(o)}catch(o){return Promise.reject(o)}}},catch:n=>{try{return e().catch(n)}catch(a){try{const r=n(a);return Promise.resolve(r)}catch(r){return Promise.reject(r)}}}}}function An(t,e){return e.then(n=>n)}const Ct=Tn(),In=hn(he(t=>(pe(`'${Xe(t)}' -> ${et(t,[])}`),[Xe(t),et(t,[])]),Vt(_t())));function jn(t){return new F(we(In,t.kind),t.capacity,t.data,t.total)}An(Ct,En(Ct,()=>{const t=fetch("contacts.json").then(e=>e.json());return pe(A("%A"))(t),Promise.resolve()}));function Ln(){}const Bn=(()=>(je(),new de(Math.fround(6e3),Math.fround(400),Math.fround(6e3),Math.fround(.8999999761581421))))(),Vn=(()=>(je(),new de(Math.fround(1e3),Math.fround(100),Math.fround(100),Math.fround(.8999999761581421))))();function Pe(t){switch(t.tag){case 1:return"Plin";case 2:return"Premog";case 3:return"Sonce";case 4:return"Veter";case 5:return"NEK";case 6:return"Voda";case 7:return"\u0106HE";case 8:return"Smeti";case 9:return"Stati\u010Dna proizvodnja";case 10:return"Nefosilna proizvodnja";case 11:return"Skupaj";case 12:return"Poraba";case 13:return"Uvoz";case 14:return"Izvoz";case 15:return"Baterija";case 16:return"Nivo baterije";case 17:return"Prese\u017Eek";default:return"Nafta"}}const Me=oe([new d(4),new d(3),new d(15)]),be=oe([new d(4),new d(3),new d(15),new d(2),new d(1),new d(5),new d(6),new d(13),new d(14),new d(17)]);function Fn(t){return`${t.year}${t.isSimulated?"'":""}`}function Pn(){return b(M`
    <tr>
    <th></th>
    <th colspan=${tt(Me)}>Inštalirana moč [MW,MWh]</th>
    <th colspan=${tt(be)}>Proizvodnja [GWh]</th>
    <th>Izpusti [MT]</th>
    </tr>
    <tr>
    <th>Leto</th>
    ${Y(t=>`${t}`,t=>b(M`<th>${Pe(t)}</th>`),Me)}
    ${Y(t=>`${t}`,t=>b(M`<th>${Pe(t)}</th>`),be)}
    <th>CO2</th>
    </tr>
    `)}function Ge(t){return(H(t,new d(2)).total*Math.fround(448.32000732421875)+H(t,new d(1)).total*Math.fround(988.8300170898438))/Math.fround(1e6)}function Gn(t){let e;return b(M`
    <tr>
    <th>${Fn(t)}</th>
    ${Y(n=>`${n}`,n=>{let a,r;return b(M`<td>${a=q(n,t.traces),a==null?B():(r=Qe(a.capacity,Math.fround(0)),I(A("%.0f"))(r))}</td>`)},Me)}
    ${Y(n=>`${n}`,n=>{let a,r;return b(M`<td>${a=q(n,t.traces),a==null?B():(r=a.total/Math.fround(1e3),I(A("%.1f"))(r))}</td>`)},be)}
    <td>${e=Ge(t),I(A("%.1f"))(e)}</td>
    </tr>
    `)}function zn(t,e){let n;const a=(r,o)=>{let s;const c=[r,o];let m,i,f;switch(c[0]!=null&&c[1]!=null?(m=0,i=c[1],f=c[0]):m=1,m){case 0:{const _=i/f;return _>Math.fround(1)?I(A("%.1fx"))(_):(s=Math.fround(100)*_,I(A("%.1f%%"))(s))}case 1:return B()}};return b(M`
    <tr>
    <th>Delež</th>
    ${Y(r=>`${r}`,r=>{let o;return b(M`<td>${o=r,a(me(s=>s.capacity,q(o,t.traces)),me(s=>s.capacity,q(o,e.traces)))}</td>`)},Me)}
    ${Y(r=>`${r}`,r=>{let o;return b(M`<td>${o=r,a(Ee(s=>s.total,q(o,t.traces)),Ee(s=>s.total,q(o,e.traces)))}</td>`)},be)}
    <td>${n=Math.fround(100)*Ge(e)/Ge(t),I(A("%.1f%%"))(n)}</td>
    </tr>
    `)}class xt extends ce{constructor(e,n,a,r){super();this.kind=e,this.deltaCapacity=n,this.price=a,this.cost=r}}function Hn(){return Ht("EnergyApp.CostItem",[],xt,()=>[["kind",_t()],["deltaCapacity",Ae],["price",Ae],["cost",Ae]])}function Wn(t,e){const n=b(M`<tr><th>Vir</th><th>Gradnja [MW]</th><th>Cena [€/kW]</th><th>Cena [M€]</th></tr>`),a=Zt(o=>{let s;const c=o,m=me(p=>p.capacity,q(c,e.traces)),i=[me(p=>p.capacity,q(c,t.traces)),m];let f,_,u,h;switch(i[0]==null?i[1]!=null?(f=1,h=i[1]):f=2:i[1]!=null?(f=0,_=i[1],u=i[0]):f=2,f){case 0:{s=_-u;break}case 1:{s=h;break}case 2:{s=Math.fround(0);break}}let y;const l=o;switch(l.tag){case 3:{y=Math.fround(790);break}case 4:{y=Math.fround(1500);break}case 15:{y=Math.fround(340);break}default:y=Re(`missing cost of ${l}`)}return new xt(o,s,y,s*y*Math.fround(.0010000000474974513))},oe([new d(4),new d(3),new d(15)])),r=Je(o=>o.cost,a,{GetZero:()=>0,Add:(o,s)=>o+s});return b(M`
    <h2>Cena</h2>
    <table class="energy-table">
    <thead>${n}</thead>
    <tbody>
    ${Y(o=>rt(o[0]),o=>{const s=o[1];return b(M`
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
    `)}const Zn=new Ot("energy-app").Decorate(function(){this.init(i=>{const f=i;return f.useShadowDom=!1,f.styles=Ve(Rt(M`
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
        `)),Promise.resolve(void 0)});const t=Ye(R(this),`
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
    `);let e;const n=yn();e=R(this).useState(()=>n);const a=e[0],r=R(this).useState(Ze),o=r[0],s=r[1];R(this).useEffectOnce(()=>{const i=2020;return fetch(`energy-traces-${i}.json`).then(_=>_.json()).then(_=>{const u=kn(wt(i,!1,he(h=>jn(h),_)));s(oe([u,bt(u,a)]))}),Kt()});const c=b(M`
    <p>${"Opombe:"}
    <ul>
    ${Y(i=>rt(i[0]),i=>b(M`<li>${i[1]}</li>`),nt(["Za NEK se \u0161teje samo slovenski del proizvodnje. Za toliko je zni\u017Ean tudi izvoz.","Proizvodnja baterije v tabeli je prikazana kot priskevek baterije k letni proizvodnji: 90% shranjene energije, ki jo baterija vrne v omre\u017Eje.","Kadar je energije v izobilju, se po vrsti: zaustavi premog, plin, polni baterijo, zmanj\u0161a uvoz, preostanek se \u0161teje kot prese\u017Eek."]))}
    `),m=Ee(i=>i.year,Yt(o));return b(M`
    <div class="energy-sim ${t}">
    <h2>Energijska simulacija</h2>
    <p>Simulacija elektroenergetskega sistema na realnih urnih podatkih donosa sonca in vetra za leto ${m}<br>ob predpostaviki povečanih kapacitet vetrnih in solarnih elektrarn ter baterijskega shranjavanja energije.</p>
    <div class="energy-result">
    <table class="energy-table">
    <thead>
    ${Pn()}
    </thead>
    <tbody>
    ${Y(i=>`${i.year}${i.isSimulated}`,i=>Gn(i),o)}
    ${E(o)?B():E(G(o))?B():E(G(G(o)))?zn(z(o),z(G(o))):B()}
    </tbody>
    </table>
    ${Cn(i=>{if(!ae(i,a)&&(e[1](i),!E(o))){const f=z(o);pe(A("running simulation...")),s(oe([f,bt(f,i)]))}},a)}
    ${c}
    ${E(o)?B():E(G(o))?B():E(G(G(o)))?Wn(z(o),z(G(o))):B()}
    ${E(o)?B():E(G(o))?B():Sn(a,z(o),z(G(o)))}
    </div>
    </div>
    `)});export{xt as CostItem,Hn as CostItem$reflection,Zn as EnergySimulationApp,Pe as colName,be as dataColumns,Ge as getTonsCO2,Fn as getYsYearName,Me as installedColumns,Ln as register,Wn as renderCostList,zn as renderDeltaRow,Pn as renderTraceHeader,Gn as renderTraceRow,Bn as simConfig,Vn as simConfig$0027};
