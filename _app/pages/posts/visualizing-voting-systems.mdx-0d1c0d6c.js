import{S as yt,i as bt,s as _t,e as d,t as v,c as h,a as c,g as m,d as o,b as s,f as g,F as i,h as _o,L as R,k as E,n as A,H as Me,M as kt,N as ko,O as Yo,P as Eo,Q as Et,z as Sa,R as Lo,T as Oo,G as jo,v as O,r as U,E as Ao,B as Ro,u as Uo,D as Do,U as Fo,A as Wa,j as Pe,m as Ie,o as Te,p as $o,q as No,w as xe,K as Bo}from"../../chunks/vendor-136b7ed2.js";import{B as zo}from"../../chunks/blog-1ba97c0e.js";const At=([u,t],[r,a])=>Math.sqrt((u-r)**2+(t-a)**2),Po=(u,t)=>{var a;const r=t!=null?t:-1;u[r]=((a=u[r])!=null?a:0)+1},Nt={x:0,y:0,i:-1},Ho=(u,t,[r,a])=>{const n={};return t.forEach(([l,y])=>{let _=null,f=200;u.forEach(({x:b,y:w,i:B})=>{const T=At([l+r,y+a],[b,w]);T<f&&(_=B,f=T)}),Po(n,_)}),u.reduce((l,y)=>{var b,w;const _=(b=n[y.i])!=null?b:0,f=_-((w=n[l.i])!=null?w:0);return f===0?(n[-1]=_,Nt):f>0?y:l},Nt)},Mo=(u,t,[r,a],n)=>{const l={};return t.forEach(([y,_])=>{u.forEach(({x:f,y:b,i:w})=>{At([y+r,_+a],[f,b])<n&&Po(l,w)})}),u.reduce((y,_)=>{var w,B;const f=(w=l[_.i])!=null?w:0,b=f-((B=l[y.i])!=null?B:0);return b===0?(l[-1]=f,Nt):b>0?_:y},Nt)};var Io="/_app/assets/bush.84d45f5e.png",To="/_app/assets/gore.91728b43.png",xo="/_app/assets/nader.536cf690.png",ui="figure.svelte-cane51{aspect-ratio:1/1;max-width:600px;margin:0 auto}svg.svelte-cane51{width:100%;height:100%}figcaption.svelte-cane51{text-align:center;font-style:italic}line.svelte-cane51{stroke-width:0.2;stroke:black}";function Co(u){let t,r;return{c(){t=d("figcaption"),r=v(u[0]),this.h()},l(a){t=h(a,"FIGCAPTION",{class:!0});var n=c(t);r=m(n,u[0]),n.forEach(o),this.h()},h(){s(t,"class","svelte-cane51")},m(a,n){g(a,t,n),i(t,r)},p(a,n){n&1&&_o(r,a[0])},d(a){a&&o(t)}}}function Ko(u){let t,r,a,n,l,y,_,f=u[0]&&Co(u);return{c(){t=d("figure"),r=R("svg"),a=R("line"),n=R("defs"),l=R("clipPath"),y=R("circle"),_=E(),f&&f.c(),this.h()},l(b){t=h(b,"FIGURE",{class:!0});var w=c(t);r=h(w,"svg",{id:!0,viewBox:!0,class:!0},1);var B=c(r);a=h(B,"line",{x1:!0,y1:!0,x2:!0,y2:!0,"stroke-color":!0,class:!0},1),c(a).forEach(o),n=h(B,"defs",{},1);var T=c(n);l=h(T,"clipPath",{id:!0},1);var W=c(l);y=h(W,"circle",{r:!0},1),c(y).forEach(o),W.forEach(o),T.forEach(o),B.forEach(o),_=A(w),f&&f.l(w),w.forEach(o),this.h()},h(){s(a,"x1","0"),s(a,"y1","50"),s(a,"x2","100"),s(a,"y2","50"),s(a,"stroke-color","black"),s(a,"class","svelte-cane51"),s(y,"r","5"),s(l,"id","imgClip"),s(r,"id",u[1]),s(r,"viewBox","0 0 100 100"),s(r,"class","svelte-cane51"),s(t,"class","svelte-cane51")},m(b,w){g(b,t,w),i(t,r),i(r,a),i(r,n),i(n,l),i(l,y),i(t,_),f&&f.m(t,null)},p(b,[w]){b[0]?f?f.p(b,w):(f=Co(b),f.c(),f.m(t,null)):f&&(f.d(1),f=null)},i:Me,o:Me,d(b){b&&o(t),f&&f.d()}}}const Qo={plurality:Ho,approval:Mo};let Go=0;const Bt=10;function Xo(u,t,r){let a,{label:n}=t,{candidates:l}=t,{nVoters:y=100}=t,{r:_=20}=t,{fidelity:f=30}=t,{seed:b=1158}=t,{method:w="plurality"}=t,B=l.map(([k,I],x)=>({x:k,y:I,i:x})),T=kt(B.map(({i:k})=>k),["#0C7BDC","#DC3220","#FFC034"]).unknown("#000000"),W=kt(B.map(({i:k})=>k),[To,Io,xo]);const q=ko.source(Yo(b))(0,20),N=new Array(y).fill(null).map(()=>[q(),q()]),C=Qo[w],P=new Array(Math.pow(f,2));let G,D;Go+=1;const J=`yee-diagram-${Go}`,$=Eo().on("drag",function(k,I){I.x=k.x,I.y=k.y,Et(this).attr("transform",`translate(${I.x} ${I.y})`)}).on("end.update",()=>a());return Sa(()=>{const k=Et("#"+J);r(9,G=k.append("g").attr("stroke","none").selectAll("path").data(P).join("path").attr("opacity",.3).attr("stroke-width",0)),a();const I=k.selectAll("g.candidate").data(B).join("g").attr("class","candidate").attr("transform",x=>`translate(${x.x} ${x.y})`).call($);I.append("circle").attr("r",6).attr("fill",({i:x})=>T(x)),I.append("image").attr("width",Bt).attr("height",Bt).attr("x",-Bt/2).attr("y",-Bt/2).attr("clip-path","url(#imgClip)").attr("href",({i:x})=>W(x))}),u.$$set=k=>{"label"in k&&r(0,n=k.label),"candidates"in k&&r(2,l=k.candidates),"nVoters"in k&&r(3,y=k.nVoters),"r"in k&&r(4,_=k.r),"fidelity"in k&&r(5,f=k.fidelity),"seed"in k&&r(6,b=k.seed),"method"in k&&r(7,w=k.method)},u.$$.update=()=>{u.$$.dirty&1840&&r(11,a=()=>{if(!G)return;const k=100/f;for(let I=0;I<f;I++){const x=f*I,V=I%2?0:.5;for(let z=0;z<f;z++){let ee=[I*k,(z+V)*k];r(8,P[x+z]=[ee,C(B,N,ee,_)],P)}}if(!D){const I=Lo.from(P,([[x]])=>x,([[x,V]])=>V).voronoi([0,0,100,100]);r(10,D=I),G.data(P).attr("d",(x,V)=>I.renderCell(V))}G.data(P).attr("fill",I=>T(I[1].i))}),u.$$.dirty&2048&&a()},[n,J,l,y,_,f,b,w,P,G,D,a]}class Va extends yt{constructor(t){super();bt(this,t,Xo,Ko,_t,{label:0,candidates:2,nVoters:3,r:4,fidelity:5,seed:6,method:7})}}var fi="figure.svelte-cane51{aspect-ratio:1/1;max-width:600px;margin:0 auto}svg.svelte-cane51{width:100%;height:100%}figcaption.svelte-cane51{text-align:center;font-style:italic}line.svelte-cane51{stroke-width:0.2;stroke:black}";function So(u){let t,r;return{c(){t=d("figcaption"),r=v(u[0]),this.h()},l(a){t=h(a,"FIGCAPTION",{class:!0});var n=c(t);r=m(n,u[0]),n.forEach(o),this.h()},h(){s(t,"class","svelte-cane51")},m(a,n){g(a,t,n),i(t,r)},p(a,n){n&1&&_o(r,a[0])},d(a){a&&o(t)}}}function Zo(u){let t,r,a,n,l,y,_,f=u[0]&&So(u);return{c(){t=d("figure"),r=R("svg"),a=R("line"),n=R("defs"),l=R("clipPath"),y=R("circle"),_=E(),f&&f.c(),this.h()},l(b){t=h(b,"FIGURE",{class:!0});var w=c(t);r=h(w,"svg",{id:!0,viewBox:!0,class:!0},1);var B=c(r);a=h(B,"line",{x1:!0,y1:!0,x2:!0,y2:!0,"stroke-color":!0,class:!0},1),c(a).forEach(o),n=h(B,"defs",{},1);var T=c(n);l=h(T,"clipPath",{id:!0},1);var W=c(l);y=h(W,"circle",{r:!0},1),c(y).forEach(o),W.forEach(o),T.forEach(o),B.forEach(o),_=A(w),f&&f.l(w),w.forEach(o),this.h()},h(){s(a,"x1","0"),s(a,"y1","50"),s(a,"x2","100"),s(a,"y2","50"),s(a,"stroke-color","black"),s(a,"class","svelte-cane51"),s(y,"r","5"),s(l,"id","imgClip"),s(r,"id",u[1]),s(r,"viewBox","0 0 100 100"),s(r,"class","svelte-cane51"),s(t,"class","svelte-cane51")},m(b,w){g(b,t,w),i(t,r),i(r,a),i(r,n),i(n,l),i(l,y),i(t,_),f&&f.m(t,null)},p(b,[w]){b[0]?f?f.p(b,w):(f=So(b),f.c(),f.m(t,null)):f&&(f.d(1),f=null)},i:Me,o:Me,d(b){b&&o(t),f&&f.d()}}}let Wo=0;const Pt=10;function Jo(u,t,r){let{label:a}=t,{candidates:n}=t,{nVoters:l=100}=t,y=n.map(([N,C],P)=>({x:N,y:C,i:P})),_=kt(y.map(({i:N})=>N),["#0C7BDC","#DC3220","#FFC034"]).unknown("#000000"),f=kt(y.map(({i:N})=>N),[To,Io,xo]);const b=ko(0,20);let w=[],B;Wo+=1;const T=`voting-simulation-${Wo}`,W=()=>{B.selectAll("circle.voter").data(w).join("circle").attr("class","voter").attr("cx",([N])=>N).attr("cy",([N,C])=>C).attr("r",1).attr("opacity",.5).attr("fill",N=>_(y.sort((C,P)=>At(N,[C.x,C.y])-At(N,[P.x,P.y]))[0].i))},q=Eo().on("drag",function(N,C){C.x=N.x,C.y=N.y,Et(this).attr("transform",`translate(${C.x} ${C.y})`)}).on("end.update",W);return Sa(()=>{B=Et("#"+T);const N=(P,G)=>{w=new Array(l).fill(null).map(()=>[b()+P,b()+G]),W()};B.on("click",P=>{const[G,D]=Oo(P);N(G,D)}),N(50,50);const C=B.selectAll("g.candidate").data(y).join("g").attr("class","candidate").attr("transform",P=>`translate(${P.x} ${P.y})`).call(q);C.append("circle").attr("r",6).attr("fill",({i:P})=>_(P)),C.append("image").attr("width",Pt).attr("height",Pt).attr("x",-Pt/2).attr("y",-Pt/2).attr("clip-path","url(#imgClip)").attr("href",({i:P})=>f(P))}),u.$$set=N=>{"label"in N&&r(0,a=N.label),"candidates"in N&&r(2,n=N.candidates),"nVoters"in N&&r(3,l=N.nVoters)},[a,T,n,l]}class ei extends yt{constructor(t){super();bt(this,t,Jo,Zo,_t,{label:0,candidates:2,nVoters:3})}}function Vo(u){let t;const r=u[4].default,a=Do(r,u,u[3],null);return{c(){a&&a.c()},l(n){a&&a.l(n)},m(n,l){a&&a.m(n,l),t=!0},p(n,l){a&&a.p&&(!t||l&8)&&jo(a,r,n,n[3],l,null,null)},i(n){t||(O(a,n),t=!0)},o(n){U(a,n),t=!1},d(n){a&&a.d(n)}}}function ti(u){let t,r,a=u[2]&&Vo(u);return{c(){t=d("div"),a&&a.c(),this.h()},l(n){t=h(n,"DIV",{style:!0});var l=c(t);a&&a.l(l),l.forEach(o),this.h()},h(){Ao(t,"min-height",(u[2]?0:u[0])+"px")},m(n,l){g(n,t,l),a&&a.m(t,null),u[5](t),r=!0},p(n,[l]){n[2]?a?(a.p(n,l),l&4&&O(a,1)):(a=Vo(n),a.c(),O(a,1),a.m(t,null)):a&&(Ro(),U(a,1,1,()=>{a=null}),Uo()),(!r||l&5)&&Ao(t,"min-height",(n[2]?0:n[0])+"px")},i(n){r||(O(a),r=!0)},o(n){U(a),r=!1},d(n){n&&o(t),a&&a.d(),u[5](null)}}}function ai(u,t,r){let{$$slots:a={},$$scope:n}=t,l,{initialHeight:y=0}=t,_=!1,f=!1;Sa(()=>{new IntersectionObserver(()=>{f?r(2,_=!0):f=!0},{threshold:.2}).observe(l)});function b(w){Fo[w?"unshift":"push"](()=>{l=w,r(1,l)})}return u.$$set=w=>{"initialHeight"in w&&r(0,y=w.initialHeight),"$$scope"in w&&r(3,n=w.$$scope)},[y,l,_,n,a,b]}class qo extends yt{constructor(t){super();bt(this,t,ai,ti,_t,{initialHeight:0})}}function oi(u){let t,r;return t=new Va({props:{candidates:u[1],label:"The red bump above the line on Naders side is the spoiler effect. Those are simulated elections that Bush wins because Nader is in the race. The effect gets larger if you move Nader towards Gore."}}),{c(){Pe(t.$$.fragment)},l(a){Ie(t.$$.fragment,a)},m(a,n){Te(t,a,n),r=!0},p:Me,i(a){r||(O(t.$$.fragment,a),r=!0)},o(a){U(t.$$.fragment,a),r=!1},d(a){xe(t,a)}}}function ii(u){let t,r;return t=new Va({props:{candidates:u[1],method:"approval",r:u[0],label:"Approval voting can help avoid the spoiler effect."}}),{c(){Pe(t.$$.fragment)},l(a){Ie(t.$$.fragment,a)},m(a,n){Te(t,a,n),r=!0},p(a,n){const l={};n&1&&(l.r=a[0]),t.$set(l)},i(a){r||(O(t.$$.fragment,a),r=!0)},o(a){U(t.$$.fragment,a),r=!1},d(a){xe(t,a)}}}function ri(u){let t,r,a,n,l,y,_,f,b,w,B,T,W,q,N,C,P,G,D,J,$,k,I,x,V,z,ee,Ce,It,Ke,Ge,Se,Tt,We,te,xt,Qe,Ve,Ct,Xe,qe,Ye,Gt,Le,ae,St,Ze,H,Wt,oe,Vt,qt,Je,ie,et,M,Yt,re,Lt,Ot,tt,Oe,jt,at,K,Rt,ne,Ut,Dt,ot,je,Ft,it,Q,rt,Re,$t,nt,j,zt,se,Ht,Mt,le,Kt,Qt,st,he,Xt,Ue,ce,Zt,lt,X,ht,De,Jt,ct,Fe,ea,ut,S,ta,ue,aa,oa,fe,ia,ra,de,na,sa,pe,la,ha,ve,ca,ua,ft,F,fa,da,L,me,ge,pa,we,va,ma,ye,be,ga,_e,wa,ya,ke,Ee,ba,Ae,_a,ka,Ne,Ea,Be,Aa,dt;return _=new ei({props:{candidates:u[1],label:"Click anywhere to simulate a new election where the average voter is where you clicked. Drag the candidates around to see how the results change."}}),ie=new Va({props:{candidates:u[1].slice(0,2),label:"This is a Yee diagram. Each cell is colored by simulating an election with the average voter at that point."}}),Q=new qo({props:{initialHeight:600,$$slots:{default:[oi]},$$scope:{ctx:u}}}),X=new qo({props:{initialHeight:600,$$slots:{default:[ii]},$$scope:{ctx:u}}}),{c(){t=d("p"),r=v("What question do we expect to answer by holding an election? Elections are how we select our government, but they aren\u2019t the only way to do that. We hold elections because we believe they tell us something about who has the right to control our government in a way that appointments or heredity does not. But different voting methods answer different questions."),a=E(),n=d("p"),l=v("Visualizing our voting systems can help give us a sense of how the questions each system asks shape the answers we get. By playing around with what happens depending on where candidates are relative to each other, you can get a sense of what incentives our voting system gives to the people we elect. We\u2019re going to explore different systems by simulating many elections and seeing how the results change depending on where the average voter is."),y=E(),Pe(_.$$.fragment),f=E(),b=d("p"),w=v("This diagram shows a single election. The colored circles represent the positions of the candidates and voters in some abstract space. Imagine that the Y axis measures how focused the candidate is on environmental protection, and the X axis measures their position on some other issue like corporate tax rates. Voters prefer candidates that are closer to them. Clicking anywhere on this diagram simulates a new election where the average voter is where you clicked. What that means is that if we averaged together the positions of all of the voters they would be at that point, but if you click on the same point a few times you\u2019ll see that the position of each voter can change."),B=E(),T=d("p"),W=v("Looking at one simulated election doesn\u2019t tell us very much, so we\u2019ll use something called a "),q=d("a"),N=v("Yee diagram"),C=v(" to show how the results vary over many simulated elections depending on where the average voter is."),P=E(),G=d("p"),D=v("The US presidential election in 2000 was historic, partially because Ralph Nader chose to ignore those incentives. It was expected to be a tight race between George W Bush and Al Gore, but Nader was running as a third party candidate. Leading up to the election, a group of self identified \u201CNaders Raiders\u201D wrote an open letter to Nader asking him to drop out. They were worried that he would be handing the election to Bush."),J=E(),$=d("blockquote"),k=d("p"),I=v(`It is now clear that you might well give the White House to Bush. As a result, you would set back significantly the social progress to which you have devoted your entire, astonishing career. You have sacrificed for the benefit of the common good your entire adult life\u2026 It would be a cruel irony indeed if your major legacy were to erase the victory from the candidate who most embodies your philosophy, Al Gore, and to give the Executive Branch to the party which has consistently resisted your progressive ideals.
`),x=d("sup"),V=d("a"),z=v("1"),ee=E(),Ce=d("p"),It=v("Carl Pope, the president of the Sierra Club, pleaded with Nader to reconsider his campaign strategy."),Ke=E(),Ge=d("blockquote"),Se=d("p"),Tt=v(`You pledged you would not campaign as a spoiler and would avoid the swing states. Your recent campaign rhetoric and campaign schedule make it clear that you have broken this pledge\u2026 Irresponsible as I find your strategy, I accept that you genuinely believe in it. Please accept that I, and the overwhelming majority of the environmental movement in this country, genuinely believe that your strategy is flawed, dangerous, and reckless.
`),We=d("sup"),te=d("a"),xt=v("2"),Qe=E(),Ve=d("p"),Ct=v("The Republican Leadership Council ran campaign ads featuring Nader, believing that the more people that voted for Nader, the better chance Bush had at winning the election."),Xe=E(),qe=d("blockquote"),Ye=d("p"),Gt=v(`Nader, running a low-budget campaign, is not airing any television commercials of his own and it\u2019s possible that the RLC will end up spending more on pro-Nader media that Nader himself.
`),Le=d("sup"),ae=d("a"),St=v("3"),Ze=E(),H=d("p"),Wt=v("Why were environmentalists, relatively ideolically similar to Nader, pleading with him not to run? Why were republicans trying to get people to vote for one of their opponents? All of these people believed that votes for Nader would have the effect of electing Bush, because of something known as the "),oe=d("a"),Vt=v("spoiler effect"),qt=v("."),Je=E(),Pe(ie.$$.fragment),et=E(),M=d("p"),Yt=v("This visualization is called a "),re=d("a"),Lt=v("Yee diagram"),Ot=v(". The background is colored based on who would win if the average voter was at that point. If there is a tie, the background will be grey; the black line just gives us a sense of where the middle is."),tt=E(),Oe=d("p"),jt=v("The diagram is generated by simulating an election for each cell of the background, where the voters are randomly distributed around that cell. I would expect an ideal voting method to elect the candidate closest to any given cell."),at=E(),K=d("p"),Rt=v("These diagrams don\u2019t tell us very much about any individual election, but they can help us explore how elections are shaped by the voting method that we choose. In the 2000 election, all ballots were counted using a method called "),ne=d("a"),Ut=v("plurality voting"),Dt=v(", where each voter picks their favorite candidate and the candidate with the most votes wins. In some sense, plurality voting asks voters which candidate they are most in favor of, but doesn\u2019t ask anything about what they think of the rest of the candidates. This makes it hard for plurality elections to find compromises."),ot=E(),je=d("p"),Ft=v("If only Bush and Gore had been running, the race would have been simple, the winner would be whoever was closer to the center of public opinion. But strange things start to happen when we consider Nader."),it=E(),Pe(Q.$$.fragment),rt=E(),Re=d("p"),$t=v("Because Nader is ideologically closer to Gore, voters are more likely to switch to Nader from Gore than to Nader from Bush. Depending on where we believe the average voter is this might not matter, but if we think that public opinion is somewhere between Bush and Gore, this is very likely to help Bush win. In that situation, plurality voting is unable to identify that for many voters (like Carl Pope and Naiders Raiders for Gore), Gore is a compromise between Nader and Bush. This is the spoiler effect that environmentalists were afraid of, and why republicans wanted to amplify Naders message."),nt=E(),j=d("p"),zt=v("The lesson many people take from the spoiler effect is that third party candidates harm the platforms they care about, but the spoiler effect doesn\u2019t happen in every voting system. While there are versions of this effect in plurality voting and in "),se=d("a"),Ht=v("instant runoff voting"),Mt=v(", other systems like "),le=d("a"),Kt=v("approval voting"),Qt=v(" don\u2019t have this issue."),st=E(),he=d("p"),Xt=v("Approval voting ballots look very similar to plurality voting ballots, but voting involves selecting as many of the candidates as you would like rather than only your favorite. If plurality voting is asking voters who their favorite candidate is, approval voting is asking who voters would accept as the winner. The structure of that question gives us more of the information we need to identify compromises. The diagram below shows the dynamics of the same set of candidates, but in an election run with approval voting. "),Ue=d("sup"),ce=d("a"),Zt=v("4"),lt=E(),Pe(X.$$.fragment),ht=E(),De=d("p"),Jt=v("Approval voting has an important property; if a candidate doesn\u2019t win the race, they don\u2019t affect the results. You can see this in the above diagram; moving candidate A around can change a cell from B to A, but it never changes any cell from B to C. Try moving Nader around, and watch the line between Bush and Gore. That line never moves, other than in areas that Nader now wins."),ct=E(),Fe=d("p"),ea=v("In the 2000 election, this stability property would have meant that republicans wouldn\u2019t have had any reason to encourage people to vote for one of their opponents. Environmentalists might have welcomed another candidate fighting for environmental justice, because voters who cared about the environment wouldn\u2019t have to choose between Gore and Nader. Approval voting would give them a way to express that they were ok with either one."),ut=E(),S=d("p"),ta=v("For a long time the US has treated plurality voting as the only option, but that is changing. Voters in Fargo and St. Louis restructured their elections to use approval voting, and voters in "),ue=d("a"),aa=v("San Francisco"),oa=v(", "),fe=d("a"),ia=v("Austin"),ra=v(", "),de=d("a"),na=v("Seattle"),sa=v(", "),pe=d("a"),la=v("Missouri"),ha=v(", and "),ve=d("a"),ca=v("Utah"),ua=v(" are working to change how they vote as well. You might soon have an opportunity to choose how your government is elected. What do you want your voting system to encourage?"),ft=E(),F=d("div"),fa=d("hr"),da=E(),L=d("ol"),me=d("li"),ge=d("a"),pa=v("Open letter from Naders Raiders for Gore"),we=d("a"),va=v("\u21A9"),ma=E(),ye=d("li"),be=d("a"),ga=v("Open letter from Carl Pope"),_e=d("a"),wa=v("\u21A9"),ya=E(),ke=d("li"),Ee=d("a"),ba=v("Washington Post article on GOP ads for Nader"),Ae=d("a"),_a=v("\u21A9"),ka=E(),Ne=d("li"),Ea=v("Approval voting has another parameter that we don\u2019t have to think about in the context of plurality voting; how accepting are you? The less accepting you are, the more likely you are to only vote for one candidate, or to refuse to vote at all. The more accepting you are, the more likely you are to be ok with every candidate, and therefore indifferent to the outcome. In the approval diagram, voters vote for anyone within a certain radius of them. While picking a radius that is very small or very large compared to the distribution of voters leads to some strange effects, in practice such behavior is unlikely. A very large radius would mean that most people are voting for every candidate, despite the fact that that means their vote is irrelevant. A very small radius would mean that most people refuse to vote at all unless the perfect candidate is running."),Be=d("a"),Aa=v("\u21A9"),this.h()},l(e){t=h(e,"P",{});var p=c(t);r=m(p,"What question do we expect to answer by holding an election? Elections are how we select our government, but they aren\u2019t the only way to do that. We hold elections because we believe they tell us something about who has the right to control our government in a way that appointments or heredity does not. But different voting methods answer different questions."),p.forEach(o),a=A(e),n=h(e,"P",{});var ze=c(n);l=m(ze,"Visualizing our voting systems can help give us a sense of how the questions each system asks shape the answers we get. By playing around with what happens depending on where candidates are relative to each other, you can get a sense of what incentives our voting system gives to the people we elect. We\u2019re going to explore different systems by simulating many elections and seeing how the results change depending on where the average voter is."),ze.forEach(o),y=A(e),Ie(_.$$.fragment,e),f=A(e),b=h(e,"P",{});var He=c(b);w=m(He,"This diagram shows a single election. The colored circles represent the positions of the candidates and voters in some abstract space. Imagine that the Y axis measures how focused the candidate is on environmental protection, and the X axis measures their position on some other issue like corporate tax rates. Voters prefer candidates that are closer to them. Clicking anywhere on this diagram simulates a new election where the average voter is where you clicked. What that means is that if we averaged together the positions of all of the voters they would be at that point, but if you click on the same point a few times you\u2019ll see that the position of each voter can change."),He.forEach(o),B=A(e),T=h(e,"P",{});var pt=c(T);W=m(pt,"Looking at one simulated election doesn\u2019t tell us very much, so we\u2019ll use something called a "),q=h(pt,"A",{href:!0,rel:!0});var Ya=c(q);N=m(Ya,"Yee diagram"),Ya.forEach(o),C=m(pt," to show how the results vary over many simulated elections depending on where the average voter is."),pt.forEach(o),P=A(e),G=h(e,"P",{});var La=c(G);D=m(La,"The US presidential election in 2000 was historic, partially because Ralph Nader chose to ignore those incentives. It was expected to be a tight race between George W Bush and Al Gore, but Nader was running as a third party candidate. Leading up to the election, a group of self identified \u201CNaders Raiders\u201D wrote an open letter to Nader asking him to drop out. They were worried that he would be handing the election to Bush."),La.forEach(o),J=A(e),$=h(e,"BLOCKQUOTE",{});var Oa=c($);k=h(Oa,"P",{});var Na=c(k);I=m(Na,`It is now clear that you might well give the White House to Bush. As a result, you would set back significantly the social progress to which you have devoted your entire, astonishing career. You have sacrificed for the benefit of the common good your entire adult life\u2026 It would be a cruel irony indeed if your major legacy were to erase the victory from the candidate who most embodies your philosophy, Al Gore, and to give the Executive Branch to the party which has consistently resisted your progressive ideals.
`),x=h(Na,"SUP",{id:!0});var ja=c(x);V=h(ja,"A",{href:!0,class:!0});var Ra=c(V);z=m(Ra,"1"),Ra.forEach(o),ja.forEach(o),Na.forEach(o),Oa.forEach(o),ee=A(e),Ce=h(e,"P",{});var Ua=c(Ce);It=m(Ua,"Carl Pope, the president of the Sierra Club, pleaded with Nader to reconsider his campaign strategy."),Ua.forEach(o),Ke=A(e),Ge=h(e,"BLOCKQUOTE",{});var Da=c(Ge);Se=h(Da,"P",{});var Ba=c(Se);Tt=m(Ba,`You pledged you would not campaign as a spoiler and would avoid the swing states. Your recent campaign rhetoric and campaign schedule make it clear that you have broken this pledge\u2026 Irresponsible as I find your strategy, I accept that you genuinely believe in it. Please accept that I, and the overwhelming majority of the environmental movement in this country, genuinely believe that your strategy is flawed, dangerous, and reckless.
`),We=h(Ba,"SUP",{id:!0});var Fa=c(We);te=h(Fa,"A",{href:!0,class:!0});var $a=c(te);xt=m($a,"2"),$a.forEach(o),Fa.forEach(o),Ba.forEach(o),Da.forEach(o),Qe=A(e),Ve=h(e,"P",{});var za=c(Ve);Ct=m(za,"The Republican Leadership Council ran campaign ads featuring Nader, believing that the more people that voted for Nader, the better chance Bush had at winning the election."),za.forEach(o),Xe=A(e),qe=h(e,"BLOCKQUOTE",{});var Ha=c(qe);Ye=h(Ha,"P",{});var Pa=c(Ye);Gt=m(Pa,`Nader, running a low-budget campaign, is not airing any television commercials of his own and it\u2019s possible that the RLC will end up spending more on pro-Nader media that Nader himself.
`),Le=h(Pa,"SUP",{id:!0});var Ma=c(Le);ae=h(Ma,"A",{href:!0,class:!0});var Ka=c(ae);St=m(Ka,"3"),Ka.forEach(o),Ma.forEach(o),Pa.forEach(o),Ha.forEach(o),Ze=A(e),H=h(e,"P",{});var vt=c(H);Wt=m(vt,"Why were environmentalists, relatively ideolically similar to Nader, pleading with him not to run? Why were republicans trying to get people to vote for one of their opponents? All of these people believed that votes for Nader would have the effect of electing Bush, because of something known as the "),oe=h(vt,"A",{href:!0,rel:!0});var Qa=c(oe);Vt=m(Qa,"spoiler effect"),Qa.forEach(o),qt=m(vt,"."),vt.forEach(o),Je=A(e),Ie(ie.$$.fragment,e),et=A(e),M=h(e,"P",{});var mt=c(M);Yt=m(mt,"This visualization is called a "),re=h(mt,"A",{href:!0,rel:!0});var Xa=c(re);Lt=m(Xa,"Yee diagram"),Xa.forEach(o),Ot=m(mt,". The background is colored based on who would win if the average voter was at that point. If there is a tie, the background will be grey; the black line just gives us a sense of where the middle is."),mt.forEach(o),tt=A(e),Oe=h(e,"P",{});var Za=c(Oe);jt=m(Za,"The diagram is generated by simulating an election for each cell of the background, where the voters are randomly distributed around that cell. I would expect an ideal voting method to elect the candidate closest to any given cell."),Za.forEach(o),at=A(e),K=h(e,"P",{});var gt=c(K);Rt=m(gt,"These diagrams don\u2019t tell us very much about any individual election, but they can help us explore how elections are shaped by the voting method that we choose. In the 2000 election, all ballots were counted using a method called "),ne=h(gt,"A",{href:!0,rel:!0});var Ja=c(ne);Ut=m(Ja,"plurality voting"),Ja.forEach(o),Dt=m(gt,", where each voter picks their favorite candidate and the candidate with the most votes wins. In some sense, plurality voting asks voters which candidate they are most in favor of, but doesn\u2019t ask anything about what they think of the rest of the candidates. This makes it hard for plurality elections to find compromises."),gt.forEach(o),ot=A(e),je=h(e,"P",{});var eo=c(je);Ft=m(eo,"If only Bush and Gore had been running, the race would have been simple, the winner would be whoever was closer to the center of public opinion. But strange things start to happen when we consider Nader."),eo.forEach(o),it=A(e),Ie(Q.$$.fragment,e),rt=A(e),Re=h(e,"P",{});var to=c(Re);$t=m(to,"Because Nader is ideologically closer to Gore, voters are more likely to switch to Nader from Gore than to Nader from Bush. Depending on where we believe the average voter is this might not matter, but if we think that public opinion is somewhere between Bush and Gore, this is very likely to help Bush win. In that situation, plurality voting is unable to identify that for many voters (like Carl Pope and Naiders Raiders for Gore), Gore is a compromise between Nader and Bush. This is the spoiler effect that environmentalists were afraid of, and why republicans wanted to amplify Naders message."),to.forEach(o),nt=A(e),j=h(e,"P",{});var $e=c(j);zt=m($e,"The lesson many people take from the spoiler effect is that third party candidates harm the platforms they care about, but the spoiler effect doesn\u2019t happen in every voting system. While there are versions of this effect in plurality voting and in "),se=h($e,"A",{href:!0,rel:!0});var ao=c(se);Ht=m(ao,"instant runoff voting"),ao.forEach(o),Mt=m($e,", other systems like "),le=h($e,"A",{href:!0,rel:!0});var oo=c(le);Kt=m(oo,"approval voting"),oo.forEach(o),Qt=m($e," don\u2019t have this issue."),$e.forEach(o),st=A(e),he=h(e,"P",{});var Ia=c(he);Xt=m(Ia,"Approval voting ballots look very similar to plurality voting ballots, but voting involves selecting as many of the candidates as you would like rather than only your favorite. If plurality voting is asking voters who their favorite candidate is, approval voting is asking who voters would accept as the winner. The structure of that question gives us more of the information we need to identify compromises. The diagram below shows the dynamics of the same set of candidates, but in an election run with approval voting. "),Ue=h(Ia,"SUP",{id:!0});var io=c(Ue);ce=h(io,"A",{href:!0,class:!0});var ro=c(ce);Zt=m(ro,"4"),ro.forEach(o),io.forEach(o),Ia.forEach(o),lt=A(e),Ie(X.$$.fragment,e),ht=A(e),De=h(e,"P",{});var no=c(De);Jt=m(no,"Approval voting has an important property; if a candidate doesn\u2019t win the race, they don\u2019t affect the results. You can see this in the above diagram; moving candidate A around can change a cell from B to A, but it never changes any cell from B to C. Try moving Nader around, and watch the line between Bush and Gore. That line never moves, other than in areas that Nader now wins."),no.forEach(o),ct=A(e),Fe=h(e,"P",{});var so=c(Fe);ea=m(so,"In the 2000 election, this stability property would have meant that republicans wouldn\u2019t have had any reason to encourage people to vote for one of their opponents. Environmentalists might have welcomed another candidate fighting for environmental justice, because voters who cared about the environment wouldn\u2019t have to choose between Gore and Nader. Approval voting would give them a way to express that they were ok with either one."),so.forEach(o),ut=A(e),S=h(e,"P",{});var Y=c(S);ta=m(Y,"For a long time the US has treated plurality voting as the only option, but that is changing. Voters in Fargo and St. Louis restructured their elections to use approval voting, and voters in "),ue=h(Y,"A",{href:!0,rel:!0});var lo=c(ue);aa=m(lo,"San Francisco"),lo.forEach(o),oa=m(Y,", "),fe=h(Y,"A",{href:!0,rel:!0});var ho=c(fe);ia=m(ho,"Austin"),ho.forEach(o),ra=m(Y,", "),de=h(Y,"A",{href:!0,rel:!0});var co=c(de);na=m(co,"Seattle"),co.forEach(o),sa=m(Y,", "),pe=h(Y,"A",{href:!0,rel:!0});var uo=c(pe);la=m(uo,"Missouri"),uo.forEach(o),ha=m(Y,", and "),ve=h(Y,"A",{href:!0,rel:!0});var fo=c(ve);ca=m(fo,"Utah"),fo.forEach(o),ua=m(Y," are working to change how they vote as well. You might soon have an opportunity to choose how your government is elected. What do you want your voting system to encourage?"),Y.forEach(o),ft=A(e),F=h(e,"DIV",{class:!0});var wt=c(F);fa=h(wt,"HR",{}),da=A(wt),L=h(wt,"OL",{});var Z=c(L);me=h(Z,"LI",{id:!0});var Ta=c(me);ge=h(Ta,"A",{href:!0,rel:!0});var po=c(ge);pa=m(po,"Open letter from Naders Raiders for Gore"),po.forEach(o),we=h(Ta,"A",{href:!0,class:!0});var vo=c(we);va=m(vo,"\u21A9"),vo.forEach(o),Ta.forEach(o),ma=A(Z),ye=h(Z,"LI",{id:!0});var xa=c(ye);be=h(xa,"A",{href:!0,rel:!0});var mo=c(be);ga=m(mo,"Open letter from Carl Pope"),mo.forEach(o),_e=h(xa,"A",{href:!0,class:!0});var go=c(_e);wa=m(go,"\u21A9"),go.forEach(o),xa.forEach(o),ya=A(Z),ke=h(Z,"LI",{id:!0});var Ca=c(ke);Ee=h(Ca,"A",{href:!0,rel:!0});var wo=c(Ee);ba=m(wo,"Washington Post article on GOP ads for Nader"),wo.forEach(o),Ae=h(Ca,"A",{href:!0,class:!0});var yo=c(Ae);_a=m(yo,"\u21A9"),yo.forEach(o),Ca.forEach(o),ka=A(Z),Ne=h(Z,"LI",{id:!0});var Ga=c(Ne);Ea=m(Ga,"Approval voting has another parameter that we don\u2019t have to think about in the context of plurality voting; how accepting are you? The less accepting you are, the more likely you are to only vote for one candidate, or to refuse to vote at all. The more accepting you are, the more likely you are to be ok with every candidate, and therefore indifferent to the outcome. In the approval diagram, voters vote for anyone within a certain radius of them. While picking a radius that is very small or very large compared to the distribution of voters leads to some strange effects, in practice such behavior is unlikely. A very large radius would mean that most people are voting for every candidate, despite the fact that that means their vote is irrelevant. A very small radius would mean that most people refuse to vote at all unless the perfect candidate is running."),Be=h(Ga,"A",{href:!0,class:!0});var bo=c(Be);Aa=m(bo,"\u21A9"),bo.forEach(o),Ga.forEach(o),Z.forEach(o),wt.forEach(o),this.h()},h(){s(q,"href","https://electowiki.org/wiki/Yee_diagram"),s(q,"rel","nofollow"),s(V,"href","#fn-1"),s(V,"class","footnote-ref"),s(x,"id","fnref-1"),s(te,"href","#fn-2"),s(te,"class","footnote-ref"),s(We,"id","fnref-2"),s(ae,"href","#fn-3"),s(ae,"class","footnote-ref"),s(Le,"id","fnref-3"),s(oe,"href","https://electionscience.org/library/the-spoiler-effect/"),s(oe,"rel","nofollow"),s(re,"href","https://electowiki.org/wiki/Yee_diagram"),s(re,"rel","nofollow"),s(ne,"href","https://en.wikipedia.org/wiki/Plurality_voting"),s(ne,"rel","nofollow"),s(se,"href","https://en.wikipedia.org/wiki/Instant-runoff_voting"),s(se,"rel","nofollow"),s(le,"href","https://electionscience.org/approval-voting-101/"),s(le,"rel","nofollow"),s(ce,"href","#fn-4"),s(ce,"class","footnote-ref"),s(Ue,"id","fnref-4"),s(ue,"href","https://electionscience.org/commentary-analysis/outside-the-box-voting-reform-in-the-bay-area/"),s(ue,"rel","nofollow"),s(fe,"href","https://electionscience.org/commentary-analysis/breaking-the-partisan-mold-in-austin-texas/"),s(fe,"rel","nofollow"),s(de,"href","https://electionscience.org/commentary-analysis/bridging-the-political-divide-in-seattle/"),s(de,"rel","nofollow"),s(pe,"href","https://electionscience.org/commentary-analysis/keeping-up-momentum-in-missouri/"),s(pe,"rel","nofollow"),s(ve,"href","https://electionscience.org/commentary-analysis/bringing-freedom-of-choice-to-utah/"),s(ve,"rel","nofollow"),s(ge,"href","https://web.archive.org/web/20010415013029/http://www.nadersraidersforgore.com/printversion.htm"),s(ge,"rel","nofollow"),s(we,"href","#fnref-1"),s(we,"class","footnote-backref"),s(me,"id","fn-1"),s(be,"href","https://web.archive.org/web/20160829041953/http://www.commondreams.org/headlines/102700-03.htm"),s(be,"rel","nofollow"),s(_e,"href","#fnref-2"),s(_e,"class","footnote-backref"),s(ye,"id","fn-2"),s(Ee,"href","https://web.archive.org/web/20050916115106/https://www.washingtonpost.com/wp-srv/aponline/20001027/aponline115918_000.htm"),s(Ee,"rel","nofollow"),s(Ae,"href","#fnref-3"),s(Ae,"class","footnote-backref"),s(ke,"id","fn-3"),s(Be,"href","#fnref-4"),s(Be,"class","footnote-backref"),s(Ne,"id","fn-4"),s(F,"class","footnotes")},m(e,p){g(e,t,p),i(t,r),g(e,a,p),g(e,n,p),i(n,l),g(e,y,p),Te(_,e,p),g(e,f,p),g(e,b,p),i(b,w),g(e,B,p),g(e,T,p),i(T,W),i(T,q),i(q,N),i(T,C),g(e,P,p),g(e,G,p),i(G,D),g(e,J,p),g(e,$,p),i($,k),i(k,I),i(k,x),i(x,V),i(V,z),g(e,ee,p),g(e,Ce,p),i(Ce,It),g(e,Ke,p),g(e,Ge,p),i(Ge,Se),i(Se,Tt),i(Se,We),i(We,te),i(te,xt),g(e,Qe,p),g(e,Ve,p),i(Ve,Ct),g(e,Xe,p),g(e,qe,p),i(qe,Ye),i(Ye,Gt),i(Ye,Le),i(Le,ae),i(ae,St),g(e,Ze,p),g(e,H,p),i(H,Wt),i(H,oe),i(oe,Vt),i(H,qt),g(e,Je,p),Te(ie,e,p),g(e,et,p),g(e,M,p),i(M,Yt),i(M,re),i(re,Lt),i(M,Ot),g(e,tt,p),g(e,Oe,p),i(Oe,jt),g(e,at,p),g(e,K,p),i(K,Rt),i(K,ne),i(ne,Ut),i(K,Dt),g(e,ot,p),g(e,je,p),i(je,Ft),g(e,it,p),Te(Q,e,p),g(e,rt,p),g(e,Re,p),i(Re,$t),g(e,nt,p),g(e,j,p),i(j,zt),i(j,se),i(se,Ht),i(j,Mt),i(j,le),i(le,Kt),i(j,Qt),g(e,st,p),g(e,he,p),i(he,Xt),i(he,Ue),i(Ue,ce),i(ce,Zt),g(e,lt,p),Te(X,e,p),g(e,ht,p),g(e,De,p),i(De,Jt),g(e,ct,p),g(e,Fe,p),i(Fe,ea),g(e,ut,p),g(e,S,p),i(S,ta),i(S,ue),i(ue,aa),i(S,oa),i(S,fe),i(fe,ia),i(S,ra),i(S,de),i(de,na),i(S,sa),i(S,pe),i(pe,la),i(S,ha),i(S,ve),i(ve,ca),i(S,ua),g(e,ft,p),g(e,F,p),i(F,fa),i(F,da),i(F,L),i(L,me),i(me,ge),i(ge,pa),i(me,we),i(we,va),i(L,ma),i(L,ye),i(ye,be),i(be,ga),i(ye,_e),i(_e,wa),i(L,ya),i(L,ke),i(ke,Ee),i(Ee,ba),i(ke,Ae),i(Ae,_a),i(L,ka),i(L,Ne),i(Ne,Ea),i(Ne,Be),i(Be,Aa),dt=!0},p(e,p){const ze={};p&16&&(ze.$$scope={dirty:p,ctx:e}),Q.$set(ze);const He={};p&17&&(He.$$scope={dirty:p,ctx:e}),X.$set(He)},i(e){dt||(O(_.$$.fragment,e),O(ie.$$.fragment,e),O(Q.$$.fragment,e),O(X.$$.fragment,e),dt=!0)},o(e){U(_.$$.fragment,e),U(ie.$$.fragment,e),U(Q.$$.fragment,e),U(X.$$.fragment,e),dt=!1},d(e){e&&o(t),e&&o(a),e&&o(n),e&&o(y),xe(_,e),e&&o(f),e&&o(b),e&&o(B),e&&o(T),e&&o(P),e&&o(G),e&&o(J),e&&o($),e&&o(ee),e&&o(Ce),e&&o(Ke),e&&o(Ge),e&&o(Qe),e&&o(Ve),e&&o(Xe),e&&o(qe),e&&o(Ze),e&&o(H),e&&o(Je),xe(ie,e),e&&o(et),e&&o(M),e&&o(tt),e&&o(Oe),e&&o(at),e&&o(K),e&&o(ot),e&&o(je),e&&o(it),xe(Q,e),e&&o(rt),e&&o(Re),e&&o(nt),e&&o(j),e&&o(st),e&&o(he),e&&o(lt),xe(X,e),e&&o(ht),e&&o(De),e&&o(ct),e&&o(Fe),e&&o(ut),e&&o(S),e&&o(ft),e&&o(F)}}}function ni(u){let t,r;const a=[u[2],qa];let n={$$slots:{default:[ri]},$$scope:{ctx:u}};for(let l=0;l<a.length;l+=1)n=Wa(n,a[l]);return t=new zo({props:n}),{c(){Pe(t.$$.fragment)},l(l){Ie(t.$$.fragment,l)},m(l,y){Te(t,l,y),r=!0},p(l,[y]){const _=y&4?$o(a,[y&4&&No(l[2]),y&0&&No(qa)]):{};y&17&&(_.$$scope={dirty:y,ctx:l}),t.$set(_)},i(l){r||(O(t.$$.fragment,l),r=!0)},o(l){U(t.$$.fragment,l),r=!1},d(l){xe(t,l)}}}const qa={title:"Visualizing Voting Systems: Plurality vs Approval Voting",date:"2021-06-16T09:45:32.000Z",status:"published",blurb:"Visualizing our voting systems can help give us a sense of how the questions each system asks shape the answers we get. By playing around with what happens depending on where candidates are relative to each other, you can get a sense of what incentives our voting system gives to the people we elect."};function si(u,t,r){let a=40;const n=[[50,30],[50,70],[30,15]];return u.$$set=l=>{r(2,t=Wa(Wa({},t),Bo(l)))},t=Bo(t),[a,n,t]}class li extends yt{constructor(t){super();bt(this,t,si,ni,_t,{})}}export default li;export{qa as metadata};
