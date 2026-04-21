// Reusable UI primitives — Outdoor Boys
const { useEffect, useRef, useState, useMemo } = React;

function useReveal(){
  const ref = useRef(null);
  useEffect(()=>{
    if(!ref.current) return;
    const el = ref.current;
    const io = new IntersectionObserver((entries)=>{
      entries.forEach(e=>{ if(e.isIntersecting){ el.classList.add("in"); io.unobserve(el); } });
    },{threshold:0.12, rootMargin:"0px 0px -40px 0px"});
    io.observe(el);
    return ()=>io.disconnect();
  },[]);
  return ref;
}
function Reveal({as="div", className="", stagger=false, children, ...rest}){
  const ref = useReveal();
  const As = as;
  return <As ref={ref} className={`${stagger?"stagger":"reveal"} ${className}`} {...rest}>{children}</As>;
}

function Rule({label, value, accent}){
  return (
    <div style={{display:"grid", gridTemplateColumns:"110px 1fr", gap:16, alignItems:"baseline", borderTop:"1px solid var(--rule-fine)", padding:"12px 0"}}>
      <span className="mono" style={{fontSize:10.5}}>{label}</span>
      <span style={{fontFamily:"var(--display)", fontSize:20, color:accent?"var(--clay)":"var(--ink)"}}>{value}</span>
    </div>
  );
}

function Chip({active, children, onClick}){
  return (
    <button onClick={onClick} style={{
      border:"1px solid "+(active?"var(--ink)":"var(--rule)"),
      background: active? "var(--ink)" : "transparent",
      color: active? "var(--paper)" : "var(--mute)",
      padding:"6px 13px", cursor:"pointer",
      fontFamily:"var(--mono)", fontSize:10.5, letterSpacing:".12em", textTransform:"uppercase",
      transition:"all .2s ease"
    }}>{children}</button>
  );
}

function Btn({primary, outline, children, ...rest}){
  const base = {
    display:"inline-flex", alignItems:"center", gap:10, padding:"13px 22px",
    fontFamily:"var(--body)", fontWeight:500, fontSize:13.5, letterSpacing:".02em",
    cursor:"pointer", border:"1px solid transparent",
    transition:"all .2s ease", textDecoration:"none"
  };
  if(primary) Object.assign(base,{ background:"var(--ink)", color:"var(--paper)" });
  if(outline) Object.assign(base,{ background:"transparent", color:"var(--ink)", borderColor:"var(--ink)" });
  return <button style={base} {...rest}>{children} <span>↗</span></button>;
}

function Photo({src, alt, style={}, className="", caption, coord, kenburns=false, ratio}){
  const [loaded,setLoaded] = useState(false);
  const [err,setErr] = useState(false);
  const box = { position:"relative", overflow:"hidden", background:"var(--paper-deep)", aspectRatio: ratio||"3 / 4", ...style };
  return (
    <figure className={className} style={{margin:0}}>
      <div style={box}>
        {!err ? (
          <img src={src} alt={alt||""} onLoad={()=>setLoaded(true)} onError={()=>setErr(true)}
            style={{
              position:"absolute", inset:0, width:"100%", height:"100%", objectFit:"cover",
              opacity: loaded?1:0, transition:"opacity 1.2s ease, transform 14s linear",
              transform: kenburns? (loaded?"scale(1.08)":"scale(1.0)") : "none"
            }} />
        ) : (
          <div style={{position:"absolute", inset:0, display:"grid", placeItems:"center",
            backgroundImage:"repeating-linear-gradient(45deg, rgba(20,17,11,.06) 0 12px, transparent 12px 24px)",
            fontFamily:"var(--mono)", fontSize:11, color:"var(--mute)"}}>{alt||"photo"}</div>
        )}
      </div>
      {(caption||coord) && (
        <figcaption className="mono" style={{color:"var(--mute)", display:"flex", justifyContent:"space-between", gap:16, marginTop:10, fontSize:10.5}}>
          <span>{caption}</span>{coord && <span>{coord}</span>}
        </figcaption>
      )}
    </figure>
  );
}

Object.assign(window, { Reveal, useReveal, Rule, Chip, Btn, Photo });
