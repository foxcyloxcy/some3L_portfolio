(function(){
  'use strict';
  // 30% flat, 25% glossy, 20% tan, 15% outline, 10% cluster.
  const weights=[['flat',.30],['glossy',.55],['tan',.75],['outline',.90],['cluster',1]];
  function randomVariant(){
    const roll=Math.random();
    return weights.find(v=>roll<v[1])[0];
  }
  function crease(c,s,a){
    c.beginPath();c.moveTo(-s*.11,-s*.73);
    c.bezierCurveTo(s*.37,-s*.23,-s*.35,s*.26,s*.1,s*.73);
    c.lineWidth=Math.max(1.2,s*.11);c.lineCap='round';
    c.strokeStyle='rgba(27,1,0,'+a+')';c.stroke();
  }
  function single(c,s,o,type){
    c.beginPath();c.ellipse(0,0,s*.58,s,0,0,Math.PI*2);
    c.lineWidth=1.1;
    if(type==='outline'){
      c.fillStyle='rgba(254,255,241,'+(o*.18)+')';
      c.strokeStyle='rgba(96,58,45,'+(o+.36)+')';
      c.lineWidth=Math.max(1.4,s*.085);c.fill();c.stroke();
    } else if(type==='flat'){
      c.fillStyle='rgba(96,58,45,'+(o+.2)+')';
      c.strokeStyle='rgba(27,1,0,'+(o+.1)+')';c.fill();c.stroke();
    } else {
      const g=c.createLinearGradient(-s,-s,s,s);
      if(type==='tan'){
        g.addColorStop(0,'rgba(204,143,72,'+(o+.22)+')');
        g.addColorStop(1,'rgba(138,84,56,'+(o+.28)+')');
      }else{
        g.addColorStop(0,'rgba(115,62,34,'+(o+.32)+')');
        g.addColorStop(.5,'rgba(62,27,15,'+(o+.42)+')');
        g.addColorStop(1,'rgba(28,12,7,'+(o+.48)+')');
      }
      c.fillStyle=g;c.fill();
      c.strokeStyle='rgba(27,1,0,'+(o+.25)+')';c.stroke();
      if(type==='glossy'){
        c.beginPath();c.ellipse(-s*.2,-s*.31,s*.13,s*.29,-.4,0,Math.PI*2);
        c.fillStyle='rgba(254,255,241,'+(o*.4)+')';c.fill();
      }
    }
    crease(c,s,o+.34);
  }
  function draw(c,b,t,height){
    const cycle=height+100,y=((b.y-t*b.speed+50)%cycle+cycle)%cycle-50;
    const x=b.x+Math.sin(t*.28+b.phase)*b.sway,s=b.size;
    c.save();c.translate(x,y);c.rotate(b.rotation+Math.sin(t*.17+b.phase)*.14);
    if(b.variant==='cluster'){
      [[-.42,.18,-.32],[.4,.18,.29],[0,-.28,.07]].forEach(([dx,dy,a],i)=>{
        c.save();c.translate(dx*s,dy*s);c.rotate(a);
        single(c,s*.64,b.opacity+i*.025,'glossy');c.restore();
      });
    }else single(c,s,b.opacity,b.variant||'flat');
    c.restore();
  }
  window.PortfolioCoffee=Object.freeze({randomVariant,draw});
})();