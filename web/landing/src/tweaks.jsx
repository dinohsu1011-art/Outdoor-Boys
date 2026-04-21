// Tweaks panel
function TweaksPanel({t, setT, visible}){
  if(!visible) return null;
  const label = {fontFamily:"var(--mono)", fontSize:10, letterSpacing:".12em", color:"var(--mute)", textTransform:"uppercase"};
  const field = {display:"grid", gap:6, marginBottom:14};
  const update = (patch)=>{ setT({...t, ...patch}); window.parent.postMessage({type:"__edit_mode_set_keys", edits:patch},"*"); };
  const chip = (a)=>({
    flex:1, padding:"7px 9px", fontSize:10.5, letterSpacing:".06em",
    fontFamily:"var(--mono)", textTransform:"uppercase",
    border:"1px solid "+(a?"var(--ink)":"var(--rule)"), cursor:"pointer",
    background: a?"var(--ink)":"transparent", color: a?"var(--paper)":"var(--ink)",
  });
  const input = {background:"transparent", color:"var(--ink)", border:"1px solid var(--rule)", padding:"8px 10px", fontFamily:"var(--body)", fontSize:13, width:"100%", outline:"none"};
  return (
    <div style={{position:"fixed", bottom:20, right:20, zIndex:1000, width:300, maxHeight:"82vh", overflow:"auto",
      background:"var(--paper)", color:"var(--ink)", border:"1px solid var(--rule)",
      boxShadow:"0 30px 60px -20px rgba(20,17,11,.3)", padding:"18px"}}>
      <div style={{display:"flex", justifyContent:"space-between", alignItems:"center", marginBottom:14, paddingBottom:10, borderBottom:"1px solid var(--rule)"}}>
        <div style={{fontFamily:"var(--display)", fontSize:18, fontStyle:"italic"}}>Tweaks</div>
        <div className="mono" style={{fontSize:9}}>LIVE · 即時</div>
      </div>
      <div style={field}><label style={label}>Mode</label>
        <div style={{display:"flex", gap:6}}>{["light","dark"].map(m=><button key={m} onClick={()=>update({theme:m})} style={chip(t.theme===m)}>{m}</button>)}</div>
      </div>
      <div style={field}><label style={label}>Accent</label>
        <div style={{display:"grid", gridTemplateColumns:"1fr 1fr", gap:6}}>
          {[["clay","Clay"],["river","River Blue"],["moss","Moss"],["rust","Rust"]].map(([v,l])=>(
            <button key={v} onClick={()=>update({palette:v})} style={chip(t.palette===v)}>{l}</button>
          ))}
        </div>
      </div>
      <div style={field}><label style={label}>Display font</label>
        <div style={{display:"flex", gap:6, flexWrap:"wrap"}}>
          {[["fraunces","Fraunces"],["sans","Inter"],["mono-display","Mono"]].map(([v,l])=>(
            <button key={v} onClick={()=>update({fonts:v})} style={chip(t.fonts===v)}>{l}</button>
          ))}
        </div>
      </div>
      <div style={field}><label style={label}>Hero layout</label>
        <div style={{display:"flex", gap:6}}>
          {[["editorial","Editorial"],["expedition","Expedition"]].map(([v,l])=>(
            <button key={v} onClick={()=>update({heroVariant:v})} style={chip(t.heroVariant===v)}>{l}</button>
          ))}
        </div>
      </div>
      <div style={field}><label style={label}>Language</label>
        <div style={{display:"flex", gap:6}}>
          {[["en","English"],["zh","中文"]].map(([v,l])=>(
            <button key={v} onClick={()=>update({lang:v})} style={chip(t.lang===v)}>{l}</button>
          ))}
        </div>
      </div>
      <div style={field}><label style={label}>Headline (EN)</label>
        <input value={t.headline} onChange={e=>update({headline:e.target.value})} style={input}/>
      </div>
      <div style={field}><label style={label}>Subline (EN)</label>
        <textarea value={t.subline} onChange={e=>update({subline:e.target.value})} rows={3} style={{...input, resize:"vertical"}}/>
      </div>
      <div style={field}><label style={label}>Chinese headline</label>
        <input value={t.zhHeadline} onChange={e=>update({zhHeadline:e.target.value})} style={{...input, fontFamily:"var(--zh)"}}/>
      </div>
    </div>
  );
}
window.TweaksPanel = TweaksPanel;
