import{S as Ks,i as Qs,s as Vs,A as Hn,j as Xs,m as Ys,o as eo,p as to,q as $s,v as ao,r as no,w as so,L as Bs,e as o,t as n,k as u,c as l,a as p,g as s,d as a,n as f,b as d,f as r,E as t,G as oo}from"../../chunks/vendor-effcf7fe.js";import{B as lo}from"../../chunks/blog-100f237b.js";function po(V){let c,D,_,j,h,y,X,St,$,At,Ht,he,Wt,Lt,ke,gt,jt,Xe,Y,$t,Ye,M,ve,Bt,zt,ye,Rt,et,ee,Ft,tt,te,Nt,at,B,zs=`<code class="language-rust"><span class="token keyword">trait</span> <span class="token class-name">Monoid</span> <span class="token punctuation">&#123;</span>
  <span class="token keyword">fn</span> <span class="token function-definition function">empty</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">-></span> <span class="token keyword">Self</span>

  <span class="token keyword">fn</span> <span class="token function-definition function">append</span><span class="token punctuation">(</span><span class="token operator">&amp;</span><span class="token keyword">self</span><span class="token punctuation">,</span> <span class="token operator">&amp;</span><span class="token keyword">Self</span><span class="token punctuation">)</span> <span class="token punctuation">-></span> <span class="token keyword">Self</span>
<span class="token punctuation">&#125;</span></code>`,nt,ae,Ut,st,z,Rs=`<code class="language-rust"><span class="token keyword">fn</span> <span class="token function-definition function">T_is_a_monoid</span><span class="token punctuation">(</span>example<span class="token punctuation">:</span> <span class="token class-name">T</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
  <span class="token macro property">assert_eq!</span><span class="token punctuation">(</span>example<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span><span class="token class-name">T</span><span class="token punctuation">::</span><span class="token function">empty</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span> example<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token macro property">assert_eq!</span><span class="token punctuation">(</span><span class="token class-name">T</span><span class="token punctuation">::</span><span class="token function">empty</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span>example<span class="token punctuation">)</span><span class="token punctuation">,</span> example<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">&#125;</span></code>`,ot,I,Gt,we,Zt,Jt,_e,Kt,Qt,lt,m,Vt,Ee,Xt,Yt,be,ea,ta,Te,aa,na,De,sa,oa,Ie,la,pa,Ce,ia,ra,Oe,ca,ua,Pe,fa,ma,pt,v,da,qe,ha,ka,xe,va,ya,Me,wa,_a,Se,Ea,ba,Ae,Ta,Da,it,ne,R,Ia,F,Ca,Oa,rt,se,Pa,ct,oe,T,qa,N,xa,Ma,U,Sa,Aa,G,Ha,Wa,ut,le,La,ft,Z,Fs=`<code class="language-rust"><span class="token keyword">trait</span> <span class="token class-name">MyTrait</span> <span class="token punctuation">&#123;</span>
  <span class="token function">my_trait_func</span><span class="token punctuation">(</span><span class="token operator">&amp;</span><span class="token keyword">self</span><span class="token punctuation">)</span> <span class="token punctuation">-></span> <span class="token class-name">ReturnType</span>
<span class="token punctuation">&#125;</span></code>`,mt,w,ga,He,ja,$a,We,Ba,za,Le,Ra,Fa,ge,Na,Ua,dt,S,Ga,je,Za,Ja,ht,J,Ns=`<code class="language-rust"><span class="token keyword">fn</span> <span class="token function-definition function">impl_struct</span><span class="token punctuation">(</span> <span class="token comment">// arguments correspond to our assumptions.</span>
  input<span class="token punctuation">:</span> <span class="token class-name">DeriveInput</span><span class="token punctuation">,</span> <span class="token comment">// we have some struct</span>
  trait_name<span class="token punctuation">:</span> <span class="token class-name">Ident</span><span class="token punctuation">,</span> <span class="token comment">// that we want to derive a trait on.</span>
  trait_func_name<span class="token punctuation">:</span> <span class="token class-name">Ident</span><span class="token punctuation">,</span> <span class="token comment">// that trait can be implemented with one function.</span>
  return_type<span class="token punctuation">:</span> <span class="token class-name">Ident</span> <span class="token comment">// that function has some return type with monoidal structure</span>
<span class="token punctuation">)</span> <span class="token punctuation">-></span> <span class="token class-name">TokenStream</span> <span class="token punctuation">&#123;</span>
  <span class="token keyword">let</span> struct_name <span class="token operator">=</span> input<span class="token punctuation">.</span>ident<span class="token punctuation">;</span>
  <span class="token keyword">let</span> struct_fields <span class="token operator">=</span> <span class="token keyword">match</span> input<span class="token punctuation">.</span>data <span class="token punctuation">&#123;</span>
    <span class="token class-name">Data</span><span class="token punctuation">::</span><span class="token class-name">Struct</span><span class="token punctuation">(</span><span class="token class-name">DataStruct</span> <span class="token punctuation">&#123;</span>
      fields<span class="token punctuation">:</span> <span class="token class-name">Fields</span><span class="token punctuation">::</span><span class="token class-name">Named</span><span class="token punctuation">(</span>fields<span class="token punctuation">)</span><span class="token punctuation">,</span>
      <span class="token punctuation">..</span>
    <span class="token punctuation">&#125;</span><span class="token punctuation">)</span> <span class="token operator">=></span> fields<span class="token punctuation">.</span>named<span class="token punctuation">,</span>
    _ <span class="token operator">=></span> <span class="token macro property">panic!</span><span class="token punctuation">(</span><span class="token string">"not a struct"</span><span class="token punctuation">)</span>
  <span class="token punctuation">&#125;</span><span class="token punctuation">;</span>
  <span class="token keyword">let</span> empty_value <span class="token operator">=</span> <span class="token macro property">quote!</span><span class="token punctuation">&#123;</span> #<span class="token namespace">return_type<span class="token punctuation">::</span></span><span class="token function">empty</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">&#125;</span><span class="token punctuation">;</span>

  <span class="token keyword">let</span> trait_func_impl <span class="token operator">=</span> fields
  <span class="token punctuation">.</span><span class="token function">into_iter</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token closure-params"><span class="token closure-punctuation punctuation">|</span>field<span class="token closure-punctuation punctuation">|</span></span> <span class="token punctuation">&#123;</span> <span class="token comment">// for each field</span>
    <span class="token keyword">let</span> field_name <span class="token operator">=</span> field<span class="token punctuation">.</span>ident<span class="token punctuation">;</span>
    <span class="token macro property">quote!</span><span class="token punctuation">&#123;</span>#field_name<span class="token punctuation">.</span>#<span class="token function">trait_func_name</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#125;</span> <span class="token comment">// apply the trait function to get some instance of #return_type</span>
  <span class="token punctuation">&#125;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">fold</span><span class="token punctuation">(</span>empty_value<span class="token punctuation">,</span> <span class="token closure-params"><span class="token closure-punctuation punctuation">|</span>accumulated_code<span class="token punctuation">,</span> field_result<span class="token closure-punctuation punctuation">|</span></span> <span class="token punctuation">&#123;</span> <span class="token comment">// then combine the results</span>
    <span class="token macro property">quote!</span><span class="token punctuation">&#123;</span>#<span class="token namespace">return_type<span class="token punctuation">::</span></span><span class="token function">append</span><span class="token punctuation">(</span>#accumulated_code<span class="token punctuation">,</span> #field_result<span class="token punctuation">)</span><span class="token punctuation">&#125;</span> <span class="token comment">// using the binary function from the monoid over #return_type</span>
  <span class="token punctuation">&#125;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> <span class="token macro property">quote!</span><span class="token punctuation">&#123;</span>
    <span class="token attribute attr-name">#[automatically_derived]</span>
    <span class="token keyword">impl</span> #trait_name <span class="token keyword">for</span> #struct_name <span class="token punctuation">&#123;</span>
      <span class="token keyword">fn</span> #<span class="token function">trait_func_name</span><span class="token punctuation">(</span><span class="token operator">&amp;</span><span class="token keyword">self</span><span class="token punctuation">)</span> <span class="token punctuation">-></span> #return_type <span class="token punctuation">&#123;</span>
        #trait_func_impl
      <span class="token punctuation">&#125;</span>
    <span class="token punctuation">&#125;</span>
  <span class="token punctuation">&#125;</span>
<span class="token punctuation">&#125;</span></code>`,kt,pe,x,Ka,$e,Qa,Va,Be,Xa,Ya,vt,A,en,ze,tn,an,yt,E,nn,Re,sn,on,Fe,ln,pn,Ne,rn,cn,wt,C,un,Ue,fn,mn,Ge,dn,hn,_t,H,kn,Ze,vn,yn,Et,ie,wn,bt,re,_n,Tt,W,Je,En,bn,Ke,Tn,Dt,O,Dn,K,In,Cn,Qe,On,Pn,It,P,qn,Ve,xn,Mn,Q,Sn,An;return{c(){c=o("p"),D=n("Custom derive macros are used in a variety of rust libraries ("),_=o("a"),j=n("serde"),h=n(", "),y=o("a"),X=n("argh"),St=n(", and of course "),$=o("a"),At=n("sedk"),Ht=n(") to make it easy and obvious to implement some trait for structs and/or enums as long as all of the fields in that struct or enum implement the trait. Built in derives also tend to follow this pattern. We know that there is an obvious definition of "),he=o("code"),Wt=n("PartialEq"),Lt=n(" for a struct as long as there is a definition of "),ke=o("code"),gt=n("PartialEq"),jt=n(" for each field; two structs are equal all of their fields are equal."),Xe=u(),Y=o("p"),$t=n("There is a more general pattern here. given any product type (struct) and a trait that can be implemented with a single function, we can come up with an easy implementation of a trait as long as:"),Ye=u(),M=o("ul"),ve=o("li"),Bt=n("All fields in the type implement the trait"),zt=u(),ye=o("li"),Rt=n("the return type of the trait function has monoidal structure"),et=u(),ee=o("h2"),Ft=n("Monoidal Structure?"),tt=u(),te=o("p"),Nt=n("A monoid is a certain sort of structure that a type can have. We can sketch it with a trait."),at=u(),B=o("pre"),nt=u(),ae=o("p"),Ut=n("However, to truly be a monoid, implementing types would have to satisfy a few more restructions."),st=u(),z=o("pre"),ot=u(),I=o("p"),Gt=n("If we could run this test on every possible instance of the type "),we=o("code"),Zt=n("T"),Jt=n(", and it passed for all of them, we would have proven that "),_e=o("code"),Kt=n("T"),Qt=n(" is a monoid."),lt=u(),m=o("p"),Vt=n("Monoids are neat and come up frequently. Addition and multiplication are both monoids over numbers, with "),Ee=o("code"),Xt=n("0"),Yt=n(" and "),be=o("code"),ea=n("1"),ta=n(" as the return values of "),Te=o("code"),aa=n("empty"),na=n(" respectively. String concatenation is a monoid, with the empty string as the "),De=o("code"),sa=n("empty"),oa=n(" value. Booleans have two monoids; "),Ie=o("code"),la=n("and"),pa=n(" is a monoid with an empty value of "),Ce=o("code"),ia=n("true"),ra=n(", and "),Oe=o("code"),ca=n("or"),ua=n(" is a monoid with an empty value of "),Pe=o("code"),fa=n("false"),ma=n("."),pt=u(),v=o("p"),da=n("We need a monoid so that we can combine together the result of applying the trait function to each individual field into a single value for the whole struct. In the context of "),qe=o("code"),ha=n("PartialEq"),ka=n(", our derived implementation uses "),xe=o("code"),va=n("and"),ya=n(" as it\u2019s monoid; that is, the "),Me=o("code"),wa=n("eq"),_a=n(" function returns true if the "),Se=o("code"),Ea=n("eq"),ba=n(" comparison applied to "),Ae=o("em"),Ta=n("every"),Da=n(" field returns true."),it=u(),ne=o("p"),R=o("em"),Ia=n("For a more in depth explanation of what a monoid is, read "),F=o("a"),Ca=n("Bartosz Milewski\u2019s"),Oa=n(" excellent series on category theory for programmers."),rt=u(),se=o("h2"),Pa=n("Derivation for Structs"),ct=u(),oe=o("p"),T=o("em"),qa=n("If you haven\u2019t worked with derive macros before, I highly recommend "),N=o("a"),xa=n("this blog post"),Ma=n(" for a quick explanation and "),U=o("a"),Sa=n("this repo"),Aa=n(" for a more in depth walkthrough. The "),G=o("a"),Ha=n("syn documentation"),Wa=n(" is also quite useful."),ut=u(),le=o("p"),La=n("Lets say I have some trait."),ft=u(),Z=o("pre"),mt=u(),w=o("p"),ga=n("There are implementations of "),He=o("code"),ja=n("MyTrait"),$a=n(" for a variety of different things that we\u2019ll call \u201Cprimitives\u201D in the sense that they implement "),We=o("code"),Ba=n("MyTrait"),za=n(" by hand. What we want is to come up with some obvious implementation of "),Le=o("code"),Ra=n("MyTrait"),Fa=n(" for any struct or enum made up of "),ge=o("code"),Na=n("impl MyTrait"),Ua=n(" fields."),dt=u(),S=o("p"),Ga=n("Structs are easy. We\u2019ve said that all of our fields must implement the trait. Then we just need to apply our monoidal function to the result, and a single object of type "),je=o("code"),Za=n("ReturnType"),Ja=n(" falls out. voila, we have our implementation."),ht=u(),J=o("pre"),kt=u(),pe=o("p"),x=o("em"),Ka=n("Notice that when we run a fold in the macro, the produced code will simply nest this statement repeatedly; "),$e=o("code"),Qa=n("monoid(monoid(monoid(empty, a), b), c)"),Va=n(". We use the empty value so we don\u2019t have to worry about whether the struct actually has fields; an empty struct would just return "),Be=o("code"),Xa=n("#return_type::empty()"),Ya=n("."),vt=u(),A=o("p"),en=n("This will give us a working implementation of our trait. It might not be the implementation we want; maybe we don\u2019t care about every field, or need to consider fields in different ways. In fact, given this monoidal structure, there is a much simpler implementation that always works for any type; simply returning "),ze=o("code"),tn=n("#return_type::empty()"),an=n("."),yt=u(),E=o("p"),nn=n("This implementation seems nicer than that to me, because it considers each field in a uniform way, and because it nicely captures the core of what things like serde and argh are doing with their derive macros. In fact, if we generalize this to support helper attributes which could replace "),Re=o("code"),sn=n("#trait_func_name"),on=n(" with some arbitrary other function on "),Fe=o("code"),ln=n("#field_name"),pn=n(" that could produce a "),Ne=o("code"),rn=n("#return_type"),cn=n(", this becomes much more flexible and could be useful in a variety of settings."),wt=u(),C=o("h2"),un=n("What if "),Ue=o("code"),fn=n("#return_type"),mn=n(" is "),Ge=o("code"),dn=n("Self"),hn=n("?"),_t=u(),H=o("p"),kn=n("This doesn\u2019t work as well, because "),Ze=o("code"),vn=n("Self"),yn=n(" means different things for each field and for the struct as a whole. However, if we look at the places where derive macros are common, they don\u2019t tend to have polymorphic return types. Instead they go to some consistent type with monoidal structure."),Et=u(),ie=o("h2"),wn=n("What about enums?"),bt=u(),re=o("p"),_n=n("In the enum case, we can do the same thing for each branch independently. As long as each variant could be derived in a way similar to above, we can derive the implementation for the enum to be"),Tt=u(),W=o("ul"),Je=o("li"),En=n("a pattern match against the enum"),bn=u(),Ke=o("li"),Tn=n("a natural implementation for the context of each branch"),Dt=u(),O=o("p"),Dn=n("However, I am less confident that the \u201Cnatural\u201D implementation I describe there is useful in the enum case. I think in general that you do want some way to consider the context of which branch you are under. For instance, Serde has a "),K=o("a"),In=n("variety of ways"),Cn=n(" that you can represent enums, and two of the three involve considering at least the "),Qe=o("em"),On=n("name"),Pn=n(" of the variant."),It=u(),P=o("p"),qn=n("Similar to the potential generalization of the struct approach, the enum version could be "),Ve=o("em"),xn=n("much"),Mn=n(" more useful with the addition of helper macros. Then each branch could be processed with a different monoid, and individual fields could be processed differently as above. However, that\u2019s way too much code to put in a blog post. I\u2019m not "),Q=o("a"),Sn=n("Amos"),An=n("."),this.h()},l(e){c=l(e,"P",{});var i=p(c);D=s(i,"Custom derive macros are used in a variety of rust libraries ("),_=l(i,"A",{href:!0,rel:!0});var Ln=p(_);j=s(Ln,"serde"),Ln.forEach(a),h=s(i,", "),y=l(i,"A",{href:!0,rel:!0});var gn=p(y);X=s(gn,"argh"),gn.forEach(a),St=s(i,", and of course "),$=l(i,"A",{href:!0,rel:!0});var jn=p($);At=s(jn,"sedk"),jn.forEach(a),Ht=s(i,") to make it easy and obvious to implement some trait for structs and/or enums as long as all of the fields in that struct or enum implement the trait. Built in derives also tend to follow this pattern. We know that there is an obvious definition of "),he=l(i,"CODE",{});var $n=p(he);Wt=s($n,"PartialEq"),$n.forEach(a),Lt=s(i," for a struct as long as there is a definition of "),ke=l(i,"CODE",{});var Bn=p(ke);gt=s(Bn,"PartialEq"),Bn.forEach(a),jt=s(i," for each field; two structs are equal all of their fields are equal."),i.forEach(a),Xe=f(e),Y=l(e,"P",{});var zn=p(Y);$t=s(zn,"There is a more general pattern here. given any product type (struct) and a trait that can be implemented with a single function, we can come up with an easy implementation of a trait as long as:"),zn.forEach(a),Ye=f(e),M=l(e,"UL",{});var Ct=p(M);ve=l(Ct,"LI",{});var Rn=p(ve);Bt=s(Rn,"All fields in the type implement the trait"),Rn.forEach(a),zt=f(Ct),ye=l(Ct,"LI",{});var Fn=p(ye);Rt=s(Fn,"the return type of the trait function has monoidal structure"),Fn.forEach(a),Ct.forEach(a),et=f(e),ee=l(e,"H2",{});var Nn=p(ee);Ft=s(Nn,"Monoidal Structure?"),Nn.forEach(a),tt=f(e),te=l(e,"P",{});var Un=p(te);Nt=s(Un,"A monoid is a certain sort of structure that a type can have. We can sketch it with a trait."),Un.forEach(a),at=f(e),B=l(e,"PRE",{class:!0});var Us=p(B);Us.forEach(a),nt=f(e),ae=l(e,"P",{});var Gn=p(ae);Ut=s(Gn,"However, to truly be a monoid, implementing types would have to satisfy a few more restructions."),Gn.forEach(a),st=f(e),z=l(e,"PRE",{class:!0});var Gs=p(z);Gs.forEach(a),ot=f(e),I=l(e,"P",{});var ce=p(I);Gt=s(ce,"If we could run this test on every possible instance of the type "),we=l(ce,"CODE",{});var Zn=p(we);Zt=s(Zn,"T"),Zn.forEach(a),Jt=s(ce,", and it passed for all of them, we would have proven that "),_e=l(ce,"CODE",{});var Jn=p(_e);Kt=s(Jn,"T"),Jn.forEach(a),Qt=s(ce," is a monoid."),ce.forEach(a),lt=f(e),m=l(e,"P",{});var k=p(m);Vt=s(k,"Monoids are neat and come up frequently. Addition and multiplication are both monoids over numbers, with "),Ee=l(k,"CODE",{});var Kn=p(Ee);Xt=s(Kn,"0"),Kn.forEach(a),Yt=s(k," and "),be=l(k,"CODE",{});var Qn=p(be);ea=s(Qn,"1"),Qn.forEach(a),ta=s(k," as the return values of "),Te=l(k,"CODE",{});var Vn=p(Te);aa=s(Vn,"empty"),Vn.forEach(a),na=s(k," respectively. String concatenation is a monoid, with the empty string as the "),De=l(k,"CODE",{});var Xn=p(De);sa=s(Xn,"empty"),Xn.forEach(a),oa=s(k," value. Booleans have two monoids; "),Ie=l(k,"CODE",{});var Yn=p(Ie);la=s(Yn,"and"),Yn.forEach(a),pa=s(k," is a monoid with an empty value of "),Ce=l(k,"CODE",{});var es=p(Ce);ia=s(es,"true"),es.forEach(a),ra=s(k,", and "),Oe=l(k,"CODE",{});var ts=p(Oe);ca=s(ts,"or"),ts.forEach(a),ua=s(k," is a monoid with an empty value of "),Pe=l(k,"CODE",{});var as=p(Pe);fa=s(as,"false"),as.forEach(a),ma=s(k,"."),k.forEach(a),pt=f(e),v=l(e,"P",{});var b=p(v);da=s(b,"We need a monoid so that we can combine together the result of applying the trait function to each individual field into a single value for the whole struct. In the context of "),qe=l(b,"CODE",{});var ns=p(qe);ha=s(ns,"PartialEq"),ns.forEach(a),ka=s(b,", our derived implementation uses "),xe=l(b,"CODE",{});var ss=p(xe);va=s(ss,"and"),ss.forEach(a),ya=s(b," as it\u2019s monoid; that is, the "),Me=l(b,"CODE",{});var os=p(Me);wa=s(os,"eq"),os.forEach(a),_a=s(b," function returns true if the "),Se=l(b,"CODE",{});var ls=p(Se);Ea=s(ls,"eq"),ls.forEach(a),ba=s(b," comparison applied to "),Ae=l(b,"EM",{});var ps=p(Ae);Ta=s(ps,"every"),ps.forEach(a),Da=s(b," field returns true."),b.forEach(a),it=f(e),ne=l(e,"P",{});var is=p(ne);R=l(is,"EM",{});var Ot=p(R);Ia=s(Ot,"For a more in depth explanation of what a monoid is, read "),F=l(Ot,"A",{href:!0,rel:!0});var rs=p(F);Ca=s(rs,"Bartosz Milewski\u2019s"),rs.forEach(a),Oa=s(Ot," excellent series on category theory for programmers."),Ot.forEach(a),is.forEach(a),rt=f(e),se=l(e,"H2",{});var cs=p(se);Pa=s(cs,"Derivation for Structs"),cs.forEach(a),ct=f(e),oe=l(e,"P",{});var us=p(oe);T=l(us,"EM",{});var L=p(T);qa=s(L,"If you haven\u2019t worked with derive macros before, I highly recommend "),N=l(L,"A",{href:!0,rel:!0});var fs=p(N);xa=s(fs,"this blog post"),fs.forEach(a),Ma=s(L," for a quick explanation and "),U=l(L,"A",{href:!0,rel:!0});var ms=p(U);Sa=s(ms,"this repo"),ms.forEach(a),Aa=s(L," for a more in depth walkthrough. The "),G=l(L,"A",{href:!0,rel:!0});var ds=p(G);Ha=s(ds,"syn documentation"),ds.forEach(a),Wa=s(L," is also quite useful."),L.forEach(a),us.forEach(a),ut=f(e),le=l(e,"P",{});var hs=p(le);La=s(hs,"Lets say I have some trait."),hs.forEach(a),ft=f(e),Z=l(e,"PRE",{class:!0});var Zs=p(Z);Zs.forEach(a),mt=f(e),w=l(e,"P",{});var q=p(w);ga=s(q,"There are implementations of "),He=l(q,"CODE",{});var ks=p(He);ja=s(ks,"MyTrait"),ks.forEach(a),$a=s(q," for a variety of different things that we\u2019ll call \u201Cprimitives\u201D in the sense that they implement "),We=l(q,"CODE",{});var vs=p(We);Ba=s(vs,"MyTrait"),vs.forEach(a),za=s(q," by hand. What we want is to come up with some obvious implementation of "),Le=l(q,"CODE",{});var ys=p(Le);Ra=s(ys,"MyTrait"),ys.forEach(a),Fa=s(q," for any struct or enum made up of "),ge=l(q,"CODE",{});var ws=p(ge);Na=s(ws,"impl MyTrait"),ws.forEach(a),Ua=s(q," fields."),q.forEach(a),dt=f(e),S=l(e,"P",{});var Pt=p(S);Ga=s(Pt,"Structs are easy. We\u2019ve said that all of our fields must implement the trait. Then we just need to apply our monoidal function to the result, and a single object of type "),je=l(Pt,"CODE",{});var _s=p(je);Za=s(_s,"ReturnType"),_s.forEach(a),Ja=s(Pt," falls out. voila, we have our implementation."),Pt.forEach(a),ht=f(e),J=l(e,"PRE",{class:!0});var Js=p(J);Js.forEach(a),kt=f(e),pe=l(e,"P",{});var Es=p(pe);x=l(Es,"EM",{});var ue=p(x);Ka=s(ue,"Notice that when we run a fold in the macro, the produced code will simply nest this statement repeatedly; "),$e=l(ue,"CODE",{});var bs=p($e);Qa=s(bs,"monoid(monoid(monoid(empty, a), b), c)"),bs.forEach(a),Va=s(ue,". We use the empty value so we don\u2019t have to worry about whether the struct actually has fields; an empty struct would just return "),Be=l(ue,"CODE",{});var Ts=p(Be);Xa=s(Ts,"#return_type::empty()"),Ts.forEach(a),Ya=s(ue,"."),ue.forEach(a),Es.forEach(a),vt=f(e),A=l(e,"P",{});var qt=p(A);en=s(qt,"This will give us a working implementation of our trait. It might not be the implementation we want; maybe we don\u2019t care about every field, or need to consider fields in different ways. In fact, given this monoidal structure, there is a much simpler implementation that always works for any type; simply returning "),ze=l(qt,"CODE",{});var Ds=p(ze);tn=s(Ds,"#return_type::empty()"),Ds.forEach(a),an=s(qt,"."),qt.forEach(a),yt=f(e),E=l(e,"P",{});var g=p(E);nn=s(g,"This implementation seems nicer than that to me, because it considers each field in a uniform way, and because it nicely captures the core of what things like serde and argh are doing with their derive macros. In fact, if we generalize this to support helper attributes which could replace "),Re=l(g,"CODE",{});var Is=p(Re);sn=s(Is,"#trait_func_name"),Is.forEach(a),on=s(g," with some arbitrary other function on "),Fe=l(g,"CODE",{});var Cs=p(Fe);ln=s(Cs,"#field_name"),Cs.forEach(a),pn=s(g," that could produce a "),Ne=l(g,"CODE",{});var Os=p(Ne);rn=s(Os,"#return_type"),Os.forEach(a),cn=s(g,", this becomes much more flexible and could be useful in a variety of settings."),g.forEach(a),wt=f(e),C=l(e,"H2",{});var fe=p(C);un=s(fe,"What if "),Ue=l(fe,"CODE",{});var Ps=p(Ue);fn=s(Ps,"#return_type"),Ps.forEach(a),mn=s(fe," is "),Ge=l(fe,"CODE",{});var qs=p(Ge);dn=s(qs,"Self"),qs.forEach(a),hn=s(fe,"?"),fe.forEach(a),_t=f(e),H=l(e,"P",{});var xt=p(H);kn=s(xt,"This doesn\u2019t work as well, because "),Ze=l(xt,"CODE",{});var xs=p(Ze);vn=s(xs,"Self"),xs.forEach(a),yn=s(xt," means different things for each field and for the struct as a whole. However, if we look at the places where derive macros are common, they don\u2019t tend to have polymorphic return types. Instead they go to some consistent type with monoidal structure."),xt.forEach(a),Et=f(e),ie=l(e,"H2",{});var Ms=p(ie);wn=s(Ms,"What about enums?"),Ms.forEach(a),bt=f(e),re=l(e,"P",{});var Ss=p(re);_n=s(Ss,"In the enum case, we can do the same thing for each branch independently. As long as each variant could be derived in a way similar to above, we can derive the implementation for the enum to be"),Ss.forEach(a),Tt=f(e),W=l(e,"UL",{});var Mt=p(W);Je=l(Mt,"LI",{});var As=p(Je);En=s(As,"a pattern match against the enum"),As.forEach(a),bn=f(Mt),Ke=l(Mt,"LI",{});var Hs=p(Ke);Tn=s(Hs,"a natural implementation for the context of each branch"),Hs.forEach(a),Mt.forEach(a),Dt=f(e),O=l(e,"P",{});var me=p(O);Dn=s(me,"However, I am less confident that the \u201Cnatural\u201D implementation I describe there is useful in the enum case. I think in general that you do want some way to consider the context of which branch you are under. For instance, Serde has a "),K=l(me,"A",{href:!0,rel:!0});var Ws=p(K);In=s(Ws,"variety of ways"),Ws.forEach(a),Cn=s(me," that you can represent enums, and two of the three involve considering at least the "),Qe=l(me,"EM",{});var Ls=p(Qe);On=s(Ls,"name"),Ls.forEach(a),Pn=s(me," of the variant."),me.forEach(a),It=f(e),P=l(e,"P",{});var de=p(P);qn=s(de,"Similar to the potential generalization of the struct approach, the enum version could be "),Ve=l(de,"EM",{});var gs=p(Ve);xn=s(gs,"much"),gs.forEach(a),Mn=s(de," more useful with the addition of helper macros. Then each branch could be processed with a different monoid, and individual fields could be processed differently as above. However, that\u2019s way too much code to put in a blog post. I\u2019m not "),Q=l(de,"A",{href:!0,rel:!0});var js=p(Q);Sn=s(js,"Amos"),js.forEach(a),An=s(de,"."),de.forEach(a),this.h()},h(){d(_,"href","https://serde.rs/"),d(_,"rel","nofollow"),d(y,"href","https://github.com/google/argh"),d(y,"rel","nofollow"),d($,"href","https://github.com/schicks/sedk"),d($,"rel","nofollow"),d(B,"class","language-rust"),d(z,"class","language-rust"),d(F,"href","https://bartoszmilewski.com/2015/07/21/free-monoids/"),d(F,"rel","nofollow"),d(N,"href","https://blog.turbo.fish/proc-macro-simple-derive/"),d(N,"rel","nofollow"),d(U,"href","https://github.com/dtolnay/proc-macro-workshop"),d(U,"rel","nofollow"),d(G,"href","https://docs.rs/syn/0.15.26/syn/"),d(G,"rel","nofollow"),d(Z,"class","language-rust"),d(J,"class","language-rust"),d(K,"href","https://serde.rs/enum-representations.html"),d(K,"rel","nofollow"),d(Q,"href","https://fasterthanli.me/articles/getting-in-and-out-of-trouble-with-rust-futures"),d(Q,"rel","nofollow")},m(e,i){r(e,c,i),t(c,D),t(c,_),t(_,j),t(c,h),t(c,y),t(y,X),t(c,St),t(c,$),t($,At),t(c,Ht),t(c,he),t(he,Wt),t(c,Lt),t(c,ke),t(ke,gt),t(c,jt),r(e,Xe,i),r(e,Y,i),t(Y,$t),r(e,Ye,i),r(e,M,i),t(M,ve),t(ve,Bt),t(M,zt),t(M,ye),t(ye,Rt),r(e,et,i),r(e,ee,i),t(ee,Ft),r(e,tt,i),r(e,te,i),t(te,Nt),r(e,at,i),r(e,B,i),B.innerHTML=zs,r(e,nt,i),r(e,ae,i),t(ae,Ut),r(e,st,i),r(e,z,i),z.innerHTML=Rs,r(e,ot,i),r(e,I,i),t(I,Gt),t(I,we),t(we,Zt),t(I,Jt),t(I,_e),t(_e,Kt),t(I,Qt),r(e,lt,i),r(e,m,i),t(m,Vt),t(m,Ee),t(Ee,Xt),t(m,Yt),t(m,be),t(be,ea),t(m,ta),t(m,Te),t(Te,aa),t(m,na),t(m,De),t(De,sa),t(m,oa),t(m,Ie),t(Ie,la),t(m,pa),t(m,Ce),t(Ce,ia),t(m,ra),t(m,Oe),t(Oe,ca),t(m,ua),t(m,Pe),t(Pe,fa),t(m,ma),r(e,pt,i),r(e,v,i),t(v,da),t(v,qe),t(qe,ha),t(v,ka),t(v,xe),t(xe,va),t(v,ya),t(v,Me),t(Me,wa),t(v,_a),t(v,Se),t(Se,Ea),t(v,ba),t(v,Ae),t(Ae,Ta),t(v,Da),r(e,it,i),r(e,ne,i),t(ne,R),t(R,Ia),t(R,F),t(F,Ca),t(R,Oa),r(e,rt,i),r(e,se,i),t(se,Pa),r(e,ct,i),r(e,oe,i),t(oe,T),t(T,qa),t(T,N),t(N,xa),t(T,Ma),t(T,U),t(U,Sa),t(T,Aa),t(T,G),t(G,Ha),t(T,Wa),r(e,ut,i),r(e,le,i),t(le,La),r(e,ft,i),r(e,Z,i),Z.innerHTML=Fs,r(e,mt,i),r(e,w,i),t(w,ga),t(w,He),t(He,ja),t(w,$a),t(w,We),t(We,Ba),t(w,za),t(w,Le),t(Le,Ra),t(w,Fa),t(w,ge),t(ge,Na),t(w,Ua),r(e,dt,i),r(e,S,i),t(S,Ga),t(S,je),t(je,Za),t(S,Ja),r(e,ht,i),r(e,J,i),J.innerHTML=Ns,r(e,kt,i),r(e,pe,i),t(pe,x),t(x,Ka),t(x,$e),t($e,Qa),t(x,Va),t(x,Be),t(Be,Xa),t(x,Ya),r(e,vt,i),r(e,A,i),t(A,en),t(A,ze),t(ze,tn),t(A,an),r(e,yt,i),r(e,E,i),t(E,nn),t(E,Re),t(Re,sn),t(E,on),t(E,Fe),t(Fe,ln),t(E,pn),t(E,Ne),t(Ne,rn),t(E,cn),r(e,wt,i),r(e,C,i),t(C,un),t(C,Ue),t(Ue,fn),t(C,mn),t(C,Ge),t(Ge,dn),t(C,hn),r(e,_t,i),r(e,H,i),t(H,kn),t(H,Ze),t(Ze,vn),t(H,yn),r(e,Et,i),r(e,ie,i),t(ie,wn),r(e,bt,i),r(e,re,i),t(re,_n),r(e,Tt,i),r(e,W,i),t(W,Je),t(Je,En),t(W,bn),t(W,Ke),t(Ke,Tn),r(e,Dt,i),r(e,O,i),t(O,Dn),t(O,K),t(K,In),t(O,Cn),t(O,Qe),t(Qe,On),t(O,Pn),r(e,It,i),r(e,P,i),t(P,qn),t(P,Ve),t(Ve,xn),t(P,Mn),t(P,Q),t(Q,Sn),t(P,An)},p:oo,d(e){e&&a(c),e&&a(Xe),e&&a(Y),e&&a(Ye),e&&a(M),e&&a(et),e&&a(ee),e&&a(tt),e&&a(te),e&&a(at),e&&a(B),e&&a(nt),e&&a(ae),e&&a(st),e&&a(z),e&&a(ot),e&&a(I),e&&a(lt),e&&a(m),e&&a(pt),e&&a(v),e&&a(it),e&&a(ne),e&&a(rt),e&&a(se),e&&a(ct),e&&a(oe),e&&a(ut),e&&a(le),e&&a(ft),e&&a(Z),e&&a(mt),e&&a(w),e&&a(dt),e&&a(S),e&&a(ht),e&&a(J),e&&a(kt),e&&a(pe),e&&a(vt),e&&a(A),e&&a(yt),e&&a(E),e&&a(wt),e&&a(C),e&&a(_t),e&&a(H),e&&a(Et),e&&a(ie),e&&a(bt),e&&a(re),e&&a(Tt),e&&a(W),e&&a(Dt),e&&a(O),e&&a(It),e&&a(P)}}}function io(V){let c,D;const _=[V[0],Wn];let j={$$slots:{default:[po]},$$scope:{ctx:V}};for(let h=0;h<_.length;h+=1)j=Hn(j,_[h]);return c=new lo({props:j}),{c(){Xs(c.$$.fragment)},l(h){Ys(c.$$.fragment,h)},m(h,y){eo(c,h,y),D=!0},p(h,[y]){const X=y&1?to(_,[y&1&&$s(h[0]),y&0&&$s(Wn)]):{};y&2&&(X.$$scope={dirty:y,ctx:h}),c.$set(X)},i(h){D||(ao(c.$$.fragment,h),D=!0)},o(h){no(c.$$.fragment,h),D=!1},d(h){so(c,h)}}}const Wn={title:"Deriving Derive Macros with Monoids",date:"2021-04-20T00:00:00.000Z",status:"published",blurb:"Custom derive macros are used in a number of rust libraries to make it easy and obvious to implement some trait for structs as long as all of its fields also implement that trait."};function ro(V,c,D){return V.$$set=_=>{D(0,c=Hn(Hn({},c),Bs(_)))},c=Bs(c),[c]}class co extends Ks{constructor(c){super();Qs(this,c,ro,io,Vs,{})}}export default co;export{Wn as metadata};
