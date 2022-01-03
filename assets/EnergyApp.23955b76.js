import{U as Ne,s as Ct,v as L,i as St,F as kt,f as Tt,g as oe,e as ee,j as vt,m as O,a as De,t as Et,c as xt,b as It,L as $e,d as Be,R as te,h as I,k as F,l as P,o as At,n as Ze,p as jt,q as Ft,r as He,u as Z,w as Pt,x as G,y as se,z as q,A as N,B as Ce,C as Ve,D as T,E as Gt,H as zt,G as Wt,I as H,J as v,K as Se,M as b,N as g,O as ke,P as ie,Q as Re,S as Ke,T as Oe,V as Lt,W as U,X as ne,Y as Ye,Z as Nt,_ as qe,$ as Dt,a0 as Ue,a1 as Je,a2 as Qe,a3 as D,a4 as B,a5 as ce,a6 as Te,a7 as Bt,a8 as Zt,a9 as Xe,aa as et,ab as Ht,ac as Vt,ad as Rt,ae as Kt,af as ve}from"./index.044ced64.js";import"./vendor.bd24dec8.js";class tt extends Ne{constructor(t,...n){super();this.tag=t|0,this.fields=n}cases(){return["Ok","Error"]}}class nt{constructor(t,n){this.k=t,this.v=n}}function le(e,t){return new nt(e,t)}function C(e){return e.k}function E(e){return e.v}class w extends nt{constructor(t,n,a,r,o){super(t,n);this.left=a,this.right=r,this.h=o|0}}function ue(e,t,n,a,r){return new w(e,t,n,a,r)}function S(e){return e.left}function k(e){return e.right}function Y(e){return e.h}function J(){}function rt(e,t){e:for(;;){const n=e,a=t;if(a!=null){const r=a;if(r instanceof w){e=rt(n+1,S(r)),t=k(r);continue e}else return n+1|0}else return n|0}}function Ot(e){return rt(0,e)}function j(e,t,n,a){let r;const o=e;if(o!=null){const f=o;r=f instanceof w?Y(f):1}else r=0;let s;const i=a;if(i!=null){const f=i;s=f instanceof w?Y(f):1}else s=0;const c=(r<s?s:r)|0;return c===0?le(t,n):ue(t,n,e,a,c+1)}function at(e,t,n,a){let r,o,s,i,c;const f=e;if(f!=null){const u=f;c=u instanceof w?Y(u):1}else c=0;let h;const M=a;if(M!=null){const u=M;h=u instanceof w?Y(u):1}else h=0;if(h>c+2){const u=L(a);if(u instanceof w)if(r=S(u),(r!=null?(o=r,o instanceof w?Y(o):1):0)>c+1){const _=L(S(u));if(_ instanceof w)return j(j(e,t,n,S(_)),C(_),E(_),j(k(_),C(u),E(u),k(u)));throw new Error("internal error: Map.rebalance")}else return j(j(e,t,n,S(u)),C(u),E(u),k(u));else throw new Error("internal error: Map.rebalance")}else if(c>h+2){const u=L(e);if(u instanceof w)if(s=k(u),(s!=null?(i=s,i instanceof w?Y(i):1):0)>h+1){const _=L(k(u));if(_ instanceof w)return j(j(S(u),C(u),E(u),S(_)),C(_),E(_),j(k(_),t,n,a));throw new Error("internal error: Map.rebalance")}else return j(S(u),C(u),E(u),j(k(u),t,n,a));else throw new Error("internal error: Map.rebalance")}else return j(e,t,n,a)}function Q(e,t,n,a){if(a!=null){const r=a,o=e.Compare(t,C(r))|0;return r instanceof w?o<0?at(Q(e,t,n,S(r)),C(r),E(r),k(r)):o===0?ue(t,n,S(r),k(r),Y(r)):at(S(r),C(r),E(r),Q(e,t,n,k(r))):o<0?ue(t,n,J(),a,2):o===0?le(t,n):ue(t,n,a,J(),2)}else return le(t,n)}function ot(e,t,n){e:for(;;){const a=e,r=t,o=n;if(o!=null){const s=o,i=a.Compare(r,C(s))|0;if(i===0)return Ct(E(s));if(s instanceof w){e=a,t=r,n=i<0?S(s):k(s);continue e}else return}else return}}function Yt(e,t,n){const a=ot(e,t,n);if(a==null)throw new Error;return L(a)}function qt(e,t,n){e:for(;;){const a=e,r=t,o=n;if(o!=null){const s=o,i=a.Compare(r,C(s))|0;if(s instanceof w)if(i<0){e=a,t=r,n=S(s);continue e}else{if(i===0)return!0;e=a,t=r,n=k(s);continue e}else return i===0}else return!1}}function st(e,t){e:for(;;){const n=e,a=t;if(a!=null){const r=a;if(r instanceof w){st(n,S(r)),n(C(r),E(r)),e=n,t=k(r);continue e}else n(C(r),E(r))}break}}function Ut(e,t){st(e,t)}function Jt(e,t,n){let a=n;Ut((r,o)=>{t[a]=[r,o],a=a+1|0},e)}function Qt(e,t){return Tt((n,a)=>Q(e,a[0],a[1],n),J(),t)}function Xt(e,t,n){e:for(;;){const a=e,r=t,o=n;if(o["System.Collections.IEnumerator.MoveNext"]()){const s=o["System.Collections.Generic.IEnumerator`1.get_Current"]();e=a,t=Q(a,s[0],s[1],r),n=o;continue e}else return r}}function it(e,t){let n=J();for(let a=0;a<=t.length-1;a++){const r=t[a];n=Q(e,r[0],r[1],n)}return n}function en(e,t){if(St(t))return it(e,t);if(t instanceof kt)return Qt(e,t);{const n=oe(t);try{return Xt(e,J(),n)}finally{n.Dispose()}}}class tn extends te{constructor(t,n){super();this.stack=t,this.started=n}}function ct(e){e:for(;;){const t=e;if(I(t))return Ze();{const n=F(t),a=P(t);if(a!=null){const r=a;if(r instanceof w){e=At([S(r),le(C(r),E(r)),k(r)],n);continue e}else return t}else{e=n;continue e}}}}function lt(e){return new tn(ct(De(e)),!1)}function nn(){throw new Error("enumeration not started")}function rn(){throw new Error("enumeration already finished")}function ut(e){if(e.started){const t=e.stack;if(I(t))return rn();if(P(t)!=null){const n=P(t);if(n instanceof w)throw new Error("Please report error: Map iterator, unexpected stack for current");return[C(n),E(n)]}else throw new Error("Please report error: Map iterator, unexpected stack for current")}else return nn()}function an(e){if(e.started){const t=e.stack;if(I(t))return!1;if(P(t)!=null){if(P(t)instanceof w)throw new Error("Please report error: Map iterator, unexpected stack for moveNext");return e.stack=ct(F(t)),!I(e.stack)}else throw new Error("Please report error: Map iterator, unexpected stack for moveNext")}else return e.started=!0,!I(e.stack)}function dt(e){let t=lt(e);return{["System.Collections.Generic.IEnumerator`1.get_Current"](){return ut(t)},["System.Collections.IEnumerator.get_Current"](){return ut(t)},["System.Collections.IEnumerator.MoveNext"](){return an(t)},["System.Collections.IEnumerator.Reset"](){t=lt(e)},Dispose(){}}}class re{constructor(t,n){this.comparer=t,this.tree=n}GetHashCode(){return ln(this)|0}Equals(t){const n=this;if(t instanceof re){const a=oe(n);try{const r=oe(t);try{const o=()=>{const s=a["System.Collections.IEnumerator.MoveNext"]();if(s===r["System.Collections.IEnumerator.MoveNext"]())if(s){const i=a["System.Collections.Generic.IEnumerator`1.get_Current"](),c=r["System.Collections.Generic.IEnumerator`1.get_Current"]();return ee(i[0],c[0])&&ee(i[1],c[1])?o():!1}else return!0;else return!1};return o()}finally{r.Dispose()}}finally{a.Dispose()}}else return!1}toString(){return"map ["+vt("; ",O(n=>jt("({0}, {1})",n[0],n[1]),this))+"]"}get[Symbol.toStringTag](){return"FSharpMap"}toJSON(t){const n=this;return Array.from(n)}GetEnumerator(){return dt(this.tree)}[Symbol.iterator](){return Et(this.GetEnumerator())}["System.Collections.IEnumerable.GetEnumerator"](){return dt(this.tree)}CompareTo(t){const n=this;if(t instanceof re)return xt((a,r)=>{const o=n.comparer.Compare(a[0],r[0])|0;return(o!==0?o:Ft(a[1],r[1]))|0},n,t)|0;throw new Error("not comparable\\nParameter name: obj")}["System.Collections.Generic.ICollection`1.Add2B595"](t){throw new Error("Map cannot be mutated")}["System.Collections.Generic.ICollection`1.Clear"](){throw new Error("Map cannot be mutated")}["System.Collections.Generic.ICollection`1.Remove2B595"](t){throw new Error("Map cannot be mutated")}["System.Collections.Generic.ICollection`1.Contains2B595"](t){const n=this;return ft(n,t[0])&&ee(fe(n,t[0]),t[1])}["System.Collections.Generic.ICollection`1.CopyToZ2E171D71"](t,n){Jt(this.tree,t,n)}["System.Collections.Generic.ICollection`1.get_IsReadOnly"](){return!0}["System.Collections.Generic.ICollection`1.get_Count"](){return Ee(this)|0}["System.Collections.Generic.IReadOnlyCollection`1.get_Count"](){return Ee(this)|0}get size(){return Ee(this)|0}clear(){throw new Error("Map cannot be mutated")}delete(t){throw new Error("Map cannot be mutated")}entries(){return O(n=>[n[0],n[1]],this)}get(t){return fe(this,t)}has(t){return ft(this,t)}keys(){return O(n=>n[0],this)}set(t,n){throw new Error("Map cannot be mutated")}values(){return O(n=>n[1],this)}forEach(t,n){const a=this;It(r=>{t(r[1],r[0],a)},a)}}function de(e,t){return new re(e,t)}(()=>{re.empty=de($e(),J())})();function on(e){const t=$e();return de(t,en(t,e))}function sn(e,t,n){return de(e.comparer,Q(e.comparer,t,n,e.tree))}function fe(e,t){return Yt(e.comparer,t,e.tree)}function Ee(e){return Ot(e.tree)}function ft(e,t){return qt(e.comparer,t,e.tree)}function cn(e,t){return ot(e.comparer,t,e.tree)}function ln(e){const t=(r,o)=>(r<<1)+o+631;let n=0;const a=oe(e);try{for(;a["System.Collections.IEnumerator.MoveNext"]();){const r=a["System.Collections.Generic.IEnumerator`1.get_Current"]();n=t(n,Be(r[0]))|0,n=t(n,Be(r[1]))|0}}finally{a.Dispose()}return n|0}function V(e,t,n){return sn(n,e,t)}function R(e,t){return cn(t,e)}function un(e){return on(e)}function dn(e){const t=$e();return de(t,it(t,e))}class l extends Ne{constructor(t,...n){super();this.tag=t|0,this.fields=n}cases(){return["Oil","Gas","Coal","Solar","Wind","Nuclear","Hydro","HydroStorage","Waste","StaticProd","NonFosilProd","TotalProd","Load","Import","Export","Battery","BatteryLevel","Excess"]}}function ht(){return Pt("Shared.Types.TraceKind",[],l,()=>[[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[]])}function fn(e){switch(e.tag){case 4:case 3:return!0;default:return!1}}function hn(e){switch(e.tag){case 0:case 1:case 2:return!0;default:return!1}}function pt(e){switch(e.tag){case 5:case 6:case 7:case 8:return!0;default:return!1}}class x extends te{constructor(t,n,a,r){super();this.kind=t,this.capacity=n,this.data=a,this.total=r}}class mt extends te{constructor(t,n,a){super();this.year=t|0,this.isSimulated=n,this.traces=a}}function z(e,t){return fe(e.traces,t)}function _t(e,t,n){return new mt(e,t,un(O(a=>[a.kind,a],n)))}function pn(e){return He(Z(()=>O(t=>t[1],e.traces)))}class ae extends te{constructor(t,n,a,r){super();this.installedSolarMW=t,this.installedWindMW=n,this.installedBatteryMWh=a,this.batteryEfficiency=r}}function xe(){return new ae(Math.fround(278),Math.fround(3),Math.fround(0),Math.fround(.8999999761581421))}function mn(){return new ae(Math.fround(500),Math.fround(100),Math.fround(100),Math.fround(.8999999761581421))}function _n(e,t,n,a){let r=Math.fround(0);return[o=>s=>{const i=q((f,h)=>N(f,h),r,s/t);r=r-i,n[o]=r;const c=i*t;return a[o]=c,s-c},o=>s=>{let i;const c=q((f,h)=>N(f,h),e-r,s);return i=Ce((f,h)=>N(f,h),Math.fround(0),c),r=r+i,n[o]=r,s-i}]}function Mt(e,t){return[n=>a=>{const r=q((o,s)=>N(o,s),e[n],a);return t[n]=r,a-r},n=>a=>{const r=q((o,s)=>N(o,s),e[n],a);return t[n]=e[n]-r,a-r}]}function Mn(e,t,n){return[a=>r=>(n[a]=e[a],r),a=>r=>{const o=q((s,i)=>N(s,i),Ce((s,i)=>N(s,i),e[a]-t[a],Math.fround(0)),r);return n[a]=e[a]-o,r-o}]}function yn(e){return[t=>n=>(e[t]=Math.fround(0),n),t=>n=>{e[t]=n}]}function yt(e,t){let n,a,r,o,s,i;const c=z(e,new l(2)),f=z(e,new l(1)),h=z(e,new l(9)),M=z(e,new l(13)),u=z(e,new l(11)),_=z(e,new l(14)),y=z(e,new l(4)),d=z(e,new l(3)),p=t.installedWindMW/L(y.capacity),W=t.installedSolarMW/L(d.capacity),X=new x(y.kind,L(y.capacity)*p,se(m=>p*m,y.data,Float32Array),y.total*p),Fe=new x(d.kind,L(d.capacity)*W,se(m=>W*m,d.data,Float32Array),d.total*W),K=X.data.length|0,me=new Float32Array(K),_e=new Float32Array(K),Me=new Float32Array(K),ye=new Float32Array(K),we=new Float32Array(K),ge=new Float32Array(K),Pe=Mt(c.data,me),Ge=Mt(f.data,_e),ze=_n(t.installedBatteryMWh,t.batteryEfficiency,Me,ye),$t=yn(we),We=Mn(M.data,_.data,ge);for(let m=0;m<=K-1;m++){let $=X.data[m]+Fe.data[m]+h.data[m]-u.data[m];if($>=Math.fround(0)){const be=$,A=m|0;$t[1](A)(We[1](A)(ze[1](A)(Ge[1](A)(Pe[1](A)(be)))))}else{const be=-$,A=m|0,Le=Pe[0](A)(Ge[0](A)(We[0](A)(ze[0](A)(be))));Le>Math.fround(0)&&Ve(T("sourcing should amount to zero on sample %d, have %f"))(A)(Le)}}return new mt(e.year,!0,(n=(a=(r=(o=(s=(i=V(new l(3),Fe,V(new l(4),X,e.traces)),V(new l(2),new x(c.kind,c.capacity,me,G(me,{GetZero:()=>0,Add:(m,$)=>m+$})),i)),V(new l(1),new x(f.kind,f.capacity,_e,G(_e,{GetZero:()=>0,Add:(m,$)=>m+$})),s)),V(new l(16),new x(new l(16),t.installedBatteryMWh,Me,G(Me,{GetZero:()=>0,Add:(m,$)=>m+$})),o)),V(new l(15),new x(new l(15),t.installedBatteryMWh,ye,G(ye,{GetZero:()=>0,Add:(m,$)=>m+$})),r)),V(new l(17),new x(new l(17),void 0,we,G(we,{GetZero:()=>0,Add:(m,$)=>m+$})),a)),V(new l(13),new x(M.kind,M.capacity,ge,G(ge,{GetZero:()=>0,Add:(m,$)=>m+$})),n)))}function wn(e,t){if(e!=null&&/\S/.test(e)){const n=+e.replace("_","");if(!Number.isNaN(n))return t.contents=n,!0}return!1}function Ie(e){const t=new Gt(0);if(wn(e,t))return t.contents;throw new Error("Input string was not in a correct format.")}function gn(){return e=>e}const bn=new zt().Decorate(function(e,t){let n;const a=gn()(`
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
        `);n=Wt(H(this),a);let r;const o=v(Se("%.0f%P()",[t.installedSolarMW]));r=H(this).useState(()=>o);const s=r[0];let i;const c=v(Se("%.0f%P()",[t.installedWindMW]));i=H(this).useState(()=>c);const f=i[0];let h;const M=v(Se("%.0f%P()",[t.installedBatteryMWh]));h=H(this).useState(()=>M);const u=h[0],_=H(this).useState(()=>""),y=_[1];return b(g`
    <p class="${n}">
    <form class="energy-form" action="#">
    <b>Simulirana inštalirana moč:</b><br>
    <input type="number" id="wind" name="wind" value="${f}" size="6" min=0 step=50 @change=${d=>{i[1](ke(d.target))}} style="text-align:right;"/>
    <label for="wind">MW vetrnic</label><br/>
    <input type="number" id="solar" name="solar" value="${s}" size="6" min=0 step=100 @change=${d=>{r[1](ke(d.target))}} style="text-align:right;"/>
    <label for="solar">MW fotopanelov</label><br/>
    <input type="number" id="battery" name="battery" value="${u}" size="6" step=50 min=0 @change=${d=>{h[1](ke(d.target))}} style="text-align:right;"/>
    <label for="battery">MWh baterij</label><br/>
    <input type="button" value="Izračunaj" @click=${d=>{let p;console.log("submit:",d);let W;try{W=new tt(0,(p=xe(),new ae(Ie(s),Ie(f),Ie(u),p.batteryEfficiency)))}catch(X){W=new tt(1,X.message)}return ie(T("submit: %A"))(W),W.tag===1?y(_[0]):(y(""),e(W.fields[0])),d.preventDefault(),!1}} >
    </form>
    </p>
    `)});function wt(e){let t=0,n=2147483647;const a=Nt(Z(()=>O(r=>(t=Ce((o,s)=>N(o,s),t,r.data.length)|0,n=q((o,s)=>N(o,s),n,r.data.length)|0,r.data),e)));return t===n?qe(t,r=>{let o=Math.fround(0);for(let s=0;s<=a.length-1;s++){const i=a[s];o=o+i[r]}return o},Float32Array):qe(t,r=>{let o=Math.fround(0);for(let s=0;s<=a.length-1;s++){const i=a[s];i.length>r&&(o=o+i[r])}return o},Float32Array)}function $n(e){const t=Re(d=>{const p=d.kind;return(fn(p)?!0:hn(p))?!0:pt(p)},pn(e)),n=t[0],a=t[1];let r;const o=wt(n);r=new x(new l(11),Ke(d=>Oe(d.capacity,Math.fround(0)),n,{GetZero:()=>0,Add:(d,p)=>d+p}),o,G(o,{GetZero:()=>0,Add:(d,p)=>d+p}));const s=Re(d=>pt(d.kind),n),i=s[0];let c;const f=wt(i);c=new x(new l(9),void 0,f,G(f,{GetZero:()=>0,Add:(d,p)=>d+p}));let h;const M=Lt(d=>ee(d.kind,new l(12)),a),u=r.data,_=new Float32Array(u.length),y=new Float32Array(u.length);for(let d=0;d<=u.length-1;d++){const p=M.data[d]-u[d];p>Math.fround(0)?_[d]=p:y[d]=-p}return h=U([new x(new l(13),void 0,_,G(_,{GetZero:()=>0,Add:(d,p)=>d+p})),new x(new l(14),void 0,y,G(y,{GetZero:()=>0,Add:(d,p)=>d+p}))]),_t(e.year,e.isSimulated,He(Z(()=>ne(Ye(r),Z(()=>ne(Ye(c),Z(()=>ne(i,Z(()=>ne(s[1],Z(()=>ne(h,Z(()=>a)))))))))))))}class Cn{constructor(){}}function Sn(){return new Cn}function kn(e,t){return{then:(n,a)=>{try{return t().then(n,a)}catch(r){if(a==null)return Promise.reject(r);try{const o=a(r);return Promise.resolve(o)}catch(o){return Promise.reject(o)}}},catch:n=>{try{return t().catch(n)}catch(a){try{const r=n(a);return Promise.resolve(r)}catch(r){return Promise.reject(r)}}}}}function Tn(e,t){return t.then(n=>n)}const gt=Sn(),vn=dn(se(e=>(ie(`'${Ue(e)}' -> ${Je(e,[])}`),[Ue(e),Je(e,[])]),Dt(ht())));function En(e){return new x(fe(vn,e.kind),e.capacity,e.data,e.total)}Tn(gt,kn(gt,()=>{const e=fetch("contacts.json").then(t=>t.json());return ie(T("%A"))(e),Promise.resolve()}));function zn(){}const Wn=(()=>(xe(),new ae(Math.fround(6e3),Math.fround(400),Math.fround(6e3),Math.fround(.8999999761581421))))(),Ln=(()=>(xe(),new ae(Math.fround(1e3),Math.fround(100),Math.fround(100),Math.fround(.8999999761581421))))();function Ae(e){switch(e.tag){case 1:return"Plin";case 2:return"Premog";case 3:return"Sonce";case 4:return"Veter";case 5:return"NEK";case 6:return"Voda";case 7:return"\u0106HE";case 8:return"Smeti";case 9:return"Stati\u010Dna proizvodnja";case 10:return"Nefosilna proizvodnja";case 11:return"Skupaj";case 12:return"Poraba";case 13:return"Uvoz";case 14:return"Izvoz";case 15:return"Baterija";case 16:return"Nivo baterije";case 17:return"Prese\u017Eek";default:return"Nafta"}}const he=U([new l(4),new l(3),new l(15)]),pe=U([new l(4),new l(3),new l(15),new l(2),new l(1),new l(5),new l(6),new l(13),new l(14),new l(17)]);function xn(e){return`${e.year}${e.isSimulated?"'":""}`}function In(){return b(g`
    <tr>
    <th></th>
    <th colspan=${Qe(he)}>Inštalirana moč [MW,MWh]</th>
    <th colspan=${Qe(pe)}>Proizvodnja [GWh]</th>
    <th>Izpusti [MT]</th>
    </tr>
    <tr>
    <th>Leto</th>
    ${D(e=>`${e}`,e=>b(g`<th>${Ae(e)}</th>`),he)}
    ${D(e=>`${e}`,e=>b(g`<th>${Ae(e)}</th>`),pe)}
    <th>CO2</th>
    </tr>
    `)}function je(e){return(z(e,new l(2)).total*Math.fround(448.32000732421875)+z(e,new l(1)).total*Math.fround(988.8300170898438))/Math.fround(1e6)}function An(e){let t;return b(g`
    <tr>
    <th>${xn(e)}</th>
    ${D(n=>`${n}`,n=>{let a,r;return b(g`<td>${a=R(n,e.traces),a==null?B():(r=Oe(a.capacity,Math.fround(0)),v(T("%.0f"))(r))}</td>`)},he)}
    ${D(n=>`${n}`,n=>{let a,r;return b(g`<td>${a=R(n,e.traces),a==null?B():(r=a.total/Math.fround(1e3),v(T("%.1f"))(r))}</td>`)},pe)}
    <td>${t=je(e),v(T("%.1f"))(t)}</td>
    </tr>
    `)}function jn(e,t){let n;const a=(r,o)=>{let s;const i=[r,o];let c,f,h;switch(i[0]!=null&&i[1]!=null?(c=0,f=i[1],h=i[0]):c=1,c){case 0:{const M=f/h;return M>Math.fround(1)?v(T("%.1fx"))(M):(s=Math.fround(100)*M,v(T("%.1f%%"))(s))}case 1:return B()}};return b(g`
    <tr>
    <th>Delež</th>
    ${D(r=>`${r}`,r=>{let o;return b(g`<td>${o=r,a(ce(s=>s.capacity,R(o,e.traces)),ce(s=>s.capacity,R(o,t.traces)))}</td>`)},he)}
    ${D(r=>`${r}`,r=>{let o;return b(g`<td>${o=r,a(Te(s=>s.total,R(o,e.traces)),Te(s=>s.total,R(o,t.traces)))}</td>`)},pe)}
    <td>${n=Math.fround(100)*je(t)/je(e),v(T("%.1f%%"))(n)}</td>
    </tr>
    `)}class bt extends te{constructor(t,n,a,r){super();this.kind=t,this.deltaCapacity=n,this.price=a,this.cost=r}}function Nn(){return Bt("EnergyApp.CostItem",[],bt,()=>[["kind",ht()],["deltaCapacity",ve],["price",ve],["cost",ve]])}function Fn(e,t){const n=b(g`<tr><th>Vir</th><th>Gradnja [MW]</th><th>Cena [€/kW]</th><th>Cena [M€]</th></tr>`),a=Zt(o=>{let s;const i=o,c=ce(p=>p.capacity,R(i,t.traces)),f=[ce(p=>p.capacity,R(i,e.traces)),c];let h,M,u,_;switch(f[0]==null?f[1]!=null?(h=1,_=f[1]):h=2:f[1]!=null?(h=0,M=f[1],u=f[0]):h=2,h){case 0:{s=M-u;break}case 1:{s=_;break}case 2:{s=Math.fround(0);break}}let y;const d=o;switch(d.tag){case 3:{y=Math.fround(770);break}case 4:{y=Math.fround(1100);break}case 15:{y=Math.fround(150);break}default:y=Ve(`missing cost of ${d}`)}return new bt(o,s,y,s*y*Math.fround(.0010000000474974513))},U([new l(4),new l(3),new l(15)])),r=Ke(o=>o.cost,a,{GetZero:()=>0,Add:(o,s)=>o+s});return b(g`
    <h2>Cena</h2>
    <table class="energy-table">
    <thead>${n}</thead>
    <tbody>
    ${D(o=>et(o[0]),o=>{const s=o[1];return b(g`
        <tr>
        <td>${Ae(s.kind)}</td>
        <td>${v(T("%.1f"))(s.deltaCapacity)}</td>
        <td>${v(T("%.1f"))(s.price)}</td>
        <td>${v(T("%.1f"))(s.cost)}</td>
        </tr>
        `)},Xe(a))}
    <tr>
    <td>Skupaj</td>
    <td></td>
    <td></td>
    <td>${v(T("%.1f"))(r)}</td>
    </tr>
    <tbody>
    </table>
    `)}const Dn=new Ht("energy-app").Decorate(function(){this.init(c=>(c.styles=De(Vt(g`
        :host {
        display: block;
        height: 100%;
        }
        .energy-sim {
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
        `)),Promise.resolve(void 0)));let e;const t=mn();e=H(this).useState(()=>t);const n=e[0],a=H(this).useState(Ze),r=a[0],o=a[1];H(this).useEffectOnce(()=>{const c=2020;return fetch(`energy-traces-${c}.json`).then(h=>h.json()).then(h=>{const M=$n(_t(c,!1,se(u=>En(u),h)));o(U([M,yt(M,n)]))}),Rt()});const s=b(g`
    <p>${"Opombe:"}
    <ul>
    ${D(c=>et(c[0]),c=>b(g`<li>${c[1]}</li>`),Xe(["Za NEK se \u0161teje samo slovenski del proizvodnje. Za toliko je zni\u017Ean tudi izvoz.","Proizvodnja baterije v tabeli je prikazana kot priskevek baterije k letni proizvodnji: 90% shranjene energije, ki jo baterija vrne v omre\u017Eje.","Kadar je energije v izobilju, se po vrsti: zaustavi premog, plin, polni baterijo, zmanj\u0161a uvoz, preostanek se \u0161teje kot prese\u017Eek."]))}
    `),i=Te(c=>c.year,Kt(r));return b(g`
    <div class="energy-sim">
    <h2>Energijska simulacija</h2>
    <span>Simulacija elektroenergetskega sistema na realnih podatkih donosa sonca in vetra za leto ${i}<br>ob predpostaviki povečanih kapacitet vetrnih in solarnih elektrarn ter baterijskega shranjavanja energije.<span>
    <div class="energy-result">
    <table class="energy-table">
    <thead>
    ${In()}
    </thead>
    <tbody>
    ${D(c=>`${c.year}${c.isSimulated}`,c=>An(c),r)}
    ${I(r)?B():I(F(r))?B():I(F(F(r)))?jn(P(r),P(F(r))):B()}
    </tbody>
    </table>
    ${bn(c=>{if(!ee(c,n)&&(e[1](c),!I(r))){const f=P(r);ie(T("running simulation...")),o(U([f,yt(f,c)]))}},n)}
    ${s}
    ${I(r)?B():I(F(r))?B():I(F(F(r)))?Fn(P(r),P(F(r))):B()}
    </div>
    </div>
    `)});export{bt as CostItem,Nn as CostItem$reflection,Dn as EnergySimulationApp,Ae as colName,pe as dataColumns,je as getTonsCO2,xn as getYsYearName,he as installedColumns,zn as register,Fn as renderCostList,jn as renderDeltaRow,In as renderTraceHeader,An as renderTraceRow,Wn as simConfig,Ln as simConfig$0027};
