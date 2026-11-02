(()=>{
 'use strict';
 const canvas=document.getElementById('ambient'),ctx=canvas&&canvas.getContext('2d');
 if(!ctx)return;
 const root=document.documentElement,reduce=matchMedia('(prefers-reduced-motion: reduce)');
 const query=new URLSearchParams(location.search).get('theme'),forced=['day','night'].includes(query)?query:null;
 const pill=document.getElementById('time-pill');
 const astronomy=window.PortfolioMoon;
 let moonData=astronomy?astronomy.phaseAt(new Date()):{illuminated:1,waxing:true,name:'Full Moon'};
 let mode=root.dataset.theme||'day',w=0,h=0,beans=[],stars=[],clouds=[],raf=0,last=0,resizeTimer=0;
 const rand=(a,b)=>a+Math.random()*(b-a);
 function philippinesMode(){
   const hour=Number(new Intl.DateTimeFormat('en-GB',{timeZone:'Asia/Manila',hour:'2-digit',hourCycle:'h23'}).format(new Date()));
   return hour>=6&&hour<18?'day':'night';
 }
 function updateTheme(){
   if(astronomy)moonData=astronomy.phaseAt(new Date());
   const next=forced||philippinesMode(),changed=next!==mode;
   mode=next;root.dataset.theme=mode;
   document.querySelector('meta[name="theme-color"]').content=mode==='day'?'#FEFFF1':'#1B0100';
   if(pill){
     pill.querySelector('.time-icon').textContent=mode==='day'?'☀':'☾';
     pill.querySelector('.time-copy').textContent=(forced?'Preview · ':'Manila · ')+(mode==='day'?'Daytime':'Nighttime · '+moonData.name);
     pill.title='Current moon: '+moonData.name+' · '+Math.round(moonData.illuminated*100)+'% illuminated (approximate)';
   }
   if(changed)reset();
 }
 function reset(){
   cancelAnimationFrame(raf);
   w=innerWidth;h=innerHeight;
   const pixelRatio=Math.min(devicePixelRatio||1,2);
   canvas.width=Math.round(w*pixelRatio);canvas.height=Math.round(h*pixelRatio);
   ctx.setTransform(pixelRatio,0,0,pixelRatio,0,0);
   beans=Array.from({length:Math.min(28,Math.max(11,Math.floor(w*h/56000)))},()=>({
     x:rand(12,w-12),y:rand(0,h+80),size:rand(9,22),speed:rand(5,15),
     sway:rand(7,24),phase:rand(0,7),rotation:rand(-.6,.6),opacity:rand(.13,.24)
   }));
   stars=Array.from({length:Math.min(110,Math.max(36,Math.floor(w*h/14000)))},(_,i)=>({
     x:rand(0,w),y:rand(0,h),r:rand(.55,1.9),phase:rand(0,7),speed:rand(.4,1.4),cross:i%18===0
   }));
   clouds=Array.from({length:w<600?2:4},(_,i)=>({
     x:rand(-w*.2,w),y:h*(.22+i*.15),width:rand(115,210),
     speed:rand(3,8),phase:rand(0,7),opacity:rand(.07,.15)
   }));
   begin();
 }
 function bean(b,t){
   const cycle=h+100;
   let y=(b.y-t*b.speed)%cycle;
   if(y<-50)y+=cycle;
   const x=b.x+Math.sin(t*.28+b.phase)*b.sway,s=b.size;
   ctx.save();ctx.translate(x,y);ctx.rotate(b.rotation+Math.sin(t*.17+b.phase)*.14);
   ctx.beginPath();ctx.ellipse(0,0,s*.59,s,0,0,Math.PI*2);
   ctx.fillStyle='rgba(138,84,56,'+b.opacity+')';
   ctx.strokeStyle='rgba(96,58,45,'+(b.opacity+.1)+')';ctx.lineWidth=1.2;
   ctx.fill();ctx.stroke();
   ctx.beginPath();ctx.moveTo(-s*.13,-s*.74);
   ctx.bezierCurveTo(s*.37,-s*.24,-s*.39,s*.25,s*.12,s*.76);
   ctx.strokeStyle='rgba(27,1,0,'+(b.opacity+.17)+')';ctx.lineWidth=Math.max(1.4,s*.12);
   ctx.lineCap='round';ctx.stroke();ctx.restore();
 }
 function moon(t){
   const r=Math.max(27,Math.min(58,w*.055)),x=w*.81,y=Math.max(115,h*.17)+Math.sin(t*.14)*3;
   const lit=moonData.illuminated,waxing=moonData.waxing,k=1-2*lit;
   const power=.035+.16*lit;
   const glow=ctx.createRadialGradient(x,y,r*.6,x,y,r*2.9);
   glow.addColorStop(0,'rgba(254,224,154,'+power.toFixed(3)+')');
   glow.addColorStop(.6,'rgba(254,224,154,'+(power*.25).toFixed(3)+')');
   glow.addColorStop(1,'rgba(254,224,154,0)');
   ctx.fillStyle=glow;ctx.beginPath();ctx.arc(x,y,r*2.9,0,Math.PI*2);ctx.fill();

   // Earthshine: the unlit portion is faintly visible, even near new moon.
   ctx.fillStyle='#382019';ctx.beginPath();ctx.arc(x,y,r,0,Math.PI*2);ctx.fill();
   ctx.strokeStyle='rgba(254,224,154,.18)';ctx.lineWidth=.7;ctx.stroke();

   // Lit lunar surface follows a curved terminator, not a static crescent icon.
   // Waxing illuminates the right side in the Philippines; waning the left.
   ctx.beginPath();
   for(let dy=-r;dy<=r;dy+=1){
     const edge=Math.sqrt(Math.max(0,r*r-dy*dy));
     const lx=waxing?x+k*edge:x-edge;
     if(dy===-r)ctx.moveTo(lx,y+dy);else ctx.lineTo(lx,y+dy);
   }
   for(let dy=r;dy>=-r;dy-=1){
     const edge=Math.sqrt(Math.max(0,r*r-dy*dy));
     ctx.lineTo(waxing?x+edge:x-k*edge,y+dy);
   }
   ctx.closePath();
   ctx.save();ctx.clip();
   const light=ctx.createRadialGradient(x-r*.4,y-r*.4,1,x,y,r*1.2);
   light.addColorStop(0,'#FEFFF1');light.addColorStop(.68,'#FEE09A');light.addColorStop(1,'#D8AB6A');
   ctx.fillStyle=light;ctx.fillRect(x-r,y-r,r*2,r*2);
   ctx.fillStyle='rgba(138,84,56,.23)';
   [[-.25,-.12,.15],[.32,.27,.19],[-.05,.39,.1],[-.43,.36,.09],[.44,-.4,.08]].forEach(a=>{
     ctx.beginPath();ctx.arc(x+a[0]*r,y+a[1]*r,r*a[2],0,Math.PI*2);ctx.fill();
   });
   ctx.restore();
 }
 function cloud(c,t){
   const wrap=w+c.width*2,x=((c.x+t*c.speed+c.width)%wrap)-c.width;
   const y=c.y+Math.sin(t*.12+c.phase)*6,z=c.width;
   ctx.save();ctx.translate(x,y);ctx.fillStyle='rgba(254,255,241,'+c.opacity+')';
   ctx.shadowColor='rgba(254,224,154,.11)';ctx.shadowBlur=22;
   ctx.beginPath();ctx.ellipse(0,8,z*.3,18,0,0,Math.PI*2);
   ctx.ellipse(z*.22,-6,z*.25,31,0,0,Math.PI*2);
   ctx.ellipse(z*.5,5,z*.3,22,0,0,Math.PI*2);ctx.fill();ctx.restore();
 }
 function draw(ms){
   const t=ms/1000;ctx.clearRect(0,0,w,h);
   if(mode==='day'){beans.forEach(b=>bean(b,t));return;}
   stars.forEach(s=>{
     const a=.3+.52*(.5+.5*Math.sin(t*s.speed+s.phase));
     ctx.fillStyle='rgba(254,255,241,'+a+')';ctx.beginPath();
     ctx.arc(s.x,s.y,s.r,0,Math.PI*2);ctx.fill();
     if(s.cross){
       ctx.strokeStyle='rgba(254,224,154,'+(a*.65)+')';ctx.lineWidth=.8;
       ctx.beginPath();ctx.moveTo(s.x-5,s.y);ctx.lineTo(s.x+5,s.y);
       ctx.moveTo(s.x,s.y-5);ctx.lineTo(s.x,s.y+5);ctx.stroke();
     }
   });
   moon(t);clouds.forEach(c=>cloud(c,t));
 }
 function frame(now){
   if(now-last>32){draw(now);last=now;}
   raf=requestAnimationFrame(frame);
 }
 function begin(){
   cancelAnimationFrame(raf);if(document.hidden)return;
   if(reduce.matches||(navigator.connection&&navigator.connection.saveData)){draw(performance.now());return;}
   last=0;raf=requestAnimationFrame(frame);
 }
 addEventListener('resize',()=>{clearTimeout(resizeTimer);resizeTimer=setTimeout(reset,130);},{passive:true});
 document.addEventListener('visibilitychange',()=>{if(document.hidden)cancelAnimationFrame(raf);else{updateTheme();begin();}});
 addEventListener('pageshow',()=>{updateTheme();begin();});
 if(reduce.addEventListener)reduce.addEventListener('change',begin);
 else if(reduce.addListener)reduce.addListener(begin);
 setInterval(updateTheme,30000);
 updateTheme();reset();
})();