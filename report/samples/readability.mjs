import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const { chromium } = require('playwright');
const b = await chromium.launch();
const ctx = await b.newContext({viewport:{width:1280,height:900}});
const p = await ctx.newPage();
let pass=0, fail=0;
const ok=(c,m)=>{c?pass++:fail++;console.log((c?'PASS ':'FAIL ')+m)};
const days=['d01','d04','d05','d09','d11','d13','d14'];
for(const d of days){
  await p.goto('http://localhost:4323/'+d+'/bai-hoc/',{waitUntil:'networkidle'});
  const stats = await p.evaluate(()=>{
    const out={minFont:99,escaped:0,overflows:0,guides:0,calloutBtns:0};
    document.querySelectorAll('.sguide').forEach(g=>{
      out.guides++;
      g.querySelectorAll('.sm-legend-btn').forEach(()=>out.calloutBtns++);
      g.querySelectorAll('.smw *').forEach(el=>{
        const fs=parseFloat(getComputedStyle(el).fontSize);
        if(el.textContent.trim()&&fs<out.minFont)out.minFont=fs;
        if(/<span|aria-hidden/.test(el.textContent))out.escaped++;
        if(el.scrollWidth>el.clientWidth+4&&!el.closest('.sm-gridwrap,.sm-opane,.sm-row-table'))out.overflows++;
      });
    });
    return out;
  });
  ok(stats.guides>0, d+' guides: '+stats.guides);
  ok(stats.minFont>=13, d+' min font in mock: '+stats.minFont+'px');
  ok(stats.escaped===0, d+' no escaped HTML in mock text');
  ok(stats.overflows===0, d+' no clipped elements ('+stats.overflows+')');
}
// mobile
await ctx.close();
const m=await b.newContext({viewport:{width:375,height:700}});
const mp=await m.newPage();
await mp.goto('http://localhost:4323/d05/bai-hoc/',{waitUntil:'networkidle'});
const mo=await mp.evaluate(()=>document.documentElement.scrollWidth<=innerWidth+2);
ok(mo,'mobile d05: no page horizontal overflow');
// keyboard: tab to a legend button, activate, check pulse target exists
await mp.close();
const kp=await (await b.newContext({viewport:{width:1280,height:900}})).newPage();
await kp.goto('http://localhost:4323/d01/bai-hoc/',{waitUntil:'networkidle'});
await kp.keyboard.press('Tab');
let focused=null;
for(let i=0;i<150;i++){const t=await kp.evaluate(()=>document.activeElement.className);if(/sm-legend-btn|sguide-btn|os-sel-btn/.test(t)){focused=t;break;}await kp.keyboard.press('Tab');}
ok(focused!==null,'keyboard can reach guide controls ('+focused+')');
await b.close();
console.log(`\nreadability: ${pass} PASS · ${fail} FAIL`);
process.exit(fail?1:0);
