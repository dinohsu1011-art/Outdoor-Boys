// Outdoor Boys — page sections
const { TOURS, GUIDES, DAY, SAFETY, PRESS, IMG } = window.LIWU;

const T = (en, zh) => <><span className="en-only">{en}</span><span className="zh-only">{zh}</span></>;

function Nav({t, setLang}){
  return (
    <nav style={{
      position:"sticky", top:0, zIndex:40,
      padding:"24px 40px", display:"flex", justifyContent:"space-between", alignItems:"baseline",
      background:"rgba(255,255,255,.85)", backdropFilter:"blur(8px)", WebkitBackdropFilter:"blur(8px)", borderBottom:"1px solid var(--rule)"
    }}>
      <a href="#" style={{textDecoration:"none", color:"var(--ink)", fontFamily:"var(--display)", fontWeight:500, fontSize:22, letterSpacing:"-0.01em"}}>
        Outdoor<em style={{fontStyle:"italic", color:"var(--clay)"}}>·</em>Boys
      </a>
      <div style={{display:"flex", gap:34, alignItems:"baseline"}}>
        {[
          ["#tours", "Tours", "行程"],
          ["#map", "Map", "地圖"],
          ["#guides", "Crew", "團隊"],
          ["#safety", "Safety", "安全"],
          ["#book", "Book", "預約"],
        ].map(([h,en,zh])=>(
          <a key={h} href={h} className="mono" style={{fontSize:11, textDecoration:"none", color:"var(--mute)", letterSpacing:".14em"}}>
            {T(en, zh)}
          </a>
        ))}
        <button onClick={()=>setLang(t.lang==="en"?"zh":"en")} style={{
          background:"transparent", border:"1px solid var(--rule)", color:"var(--mute)",
          padding:"5px 12px", fontFamily:"var(--mono)", fontSize:11, cursor:"pointer", letterSpacing:".14em"
        }}>{t.lang==="en"?"中":"EN"}</button>
      </div>
    </nav>
  );
}

function Hero({t}){
  const variant = t.heroVariant || "editorial";
  return (
    <section style={{position:"relative", padding:"72px 40px 96px"}}>
      <div className="mono" style={{color:"var(--clay)", marginBottom:28, letterSpacing:".16em"}}>
        {T("PRE-LAUNCH · FIRST INBOUND TRIPS APRIL 2027", "尚未上線 · 首次對海外開團 2027 年 4 月")}
      </div>

      {variant==="editorial" ? (
        <div style={{maxWidth:1280, margin:"0 auto"}}>
          <h1 style={{
            fontFamily:"var(--display)", fontWeight:300,
            fontSize:"clamp(68px, 11vw, 180px)", lineHeight:.92, letterSpacing:"-0.035em", color:"var(--ink)"
          }}>
            <span className="en-only"><em style={{fontStyle:"italic", fontWeight:300}}>Read</em> the river.</span>
            <span className="zh-only">溯溪 <em style={{color:"var(--clay)", fontStyle:"italic", fontWeight:300}}>·</em> 南澳</span>
          </h1>
          <div className="zh-only" style={{display:"none"}}/>
          <div className="en-only" style={{marginTop:24, fontFamily:"var(--zh)", fontSize:"clamp(22px,2.2vw,30px)", color:"var(--mute)", letterSpacing:".25em"}}>
            {t.zhHeadline || "溯溪・南澳"}
          </div>

          <div style={{display:"grid", gridTemplateColumns:"1.2fr 1fr", gap:60, marginTop:72, paddingTop:28, borderTop:"2px solid var(--ink)"}}>
            <p style={{fontFamily:"var(--display)", fontStyle:"italic", fontWeight:300,
              fontSize:"clamp(22px,2.4vw,30px)", lineHeight:1.35, color:"var(--ink-body)", maxWidth:"32ch"}}>
              {T(
                t.subline || "English-first guided river tracing from Nan'ao, Yilan. Founder-led, small groups, every descent filed.",
                "從宜蘭 南澳 出發,以英文為主、四人創團的 溯溪 嚮導服務。小團、慢步調、每趟都事前報備。"
              )}
            </p>
            <div style={{display:"grid", gap:20}}>
              <div>
                <div className="mono" style={{marginBottom:6}}>{T("WHERE","基地")}</div>
                <div style={{fontFamily:"var(--display)", fontSize:22, color:"var(--ink)"}}>{T("Nan'ao, Yilan","宜蘭 南澳")}</div>
                <div className="mono" style={{fontSize:10, marginTop:4, letterSpacing:".1em"}}>24.4620°N · 121.7540°E</div>
              </div>
              <div>
                <div className="mono" style={{marginBottom:6}}>{T("CREW","創辦人")}</div>
                <div style={{fontFamily:"var(--display)", fontSize:22, color:"var(--ink)"}}>Dino · Luke · Duncan · Apple</div>
              </div>
              <div style={{display:"flex", gap:12, marginTop:8}}>
                <Btn primary onClick={()=>document.getElementById("tours").scrollIntoView({behavior:"smooth"})}>{T("See the routes","查看路線")}</Btn>
                <Btn outline onClick={()=>document.getElementById("about").scrollIntoView({behavior:"smooth"})}>{T("What is 溯溪?","什麼是溯溪?")}</Btn>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div style={{maxWidth:1320, margin:"0 auto", display:"grid", gridTemplateColumns:"1.1fr .9fr", gap:56, alignItems:"end"}}>
          <div>
            <h1 style={{fontFamily:"var(--display)", fontWeight:300, fontSize:"clamp(56px,9vw,140px)", lineHeight:.94, letterSpacing:"-0.035em"}}>
              {t.headline || "Read the river."}
            </h1>
            <p style={{fontSize:18, marginTop:32, maxWidth:"44ch", color:"var(--ink-body)"}}>
              {T(t.subline, "從宜蘭 南澳 出發,小團制溯溪嚮導。")}
            </p>
            <div style={{display:"flex", gap:12, marginTop:28}}>
              <Btn primary>{T("See the routes","查看路線")}</Btn>
              <Btn outline>{T("Email us","寫信給我們")}</Btn>
            </div>
          </div>
          <Photo src={IMG.hero} alt="gorge" ratio="4/5" kenburns
            caption={T("Nan'ao divide, looking south","南澳分水嶺,向南")}
            coord="24.46°N · 121.75°E"/>
        </div>
      )}

      {variant==="editorial" && (
        <div style={{maxWidth:1280, margin:"96px auto 0"}}>
          <Photo src={IMG.hero} alt="" ratio="21/9" kenburns
            caption={T("Nan'ao south fork — pilot route scout, autumn 2026","南澳南溪 — 試行探勘,2026 秋")}
            coord="24.46°N · 121.75°E"/>
        </div>
      )}
    </section>
  );
}

function StatusMarquee(){
  return (
    <div style={{borderTop:"1px solid var(--rule)", borderBottom:"1px solid var(--rule)",
      padding:"18px 0", overflow:"hidden", whiteSpace:"nowrap", background:"#fafaf8"}}>
      <div className="mono" style={{display:"inline-flex", gap:48, animation:"obslide 50s linear infinite"}}>
        {[...PRESS,...PRESS,...PRESS].map((p,i)=><span key={i} style={{opacity:.75}}>{p} ·</span>)}
      </div>
      <style>{`@keyframes obslide{from{transform:translateX(0)}to{transform:translateX(-50%)}}`}</style>
    </div>
  );
}

function About(){
  return (
    <section id="about" style={{padding:"120px 40px"}}>
      <div style={{maxWidth:1180, margin:"0 auto", display:"grid", gridTemplateColumns:"1fr 1fr", gap:80}}>
        <Reveal>
          <div className="mono" style={{color:"var(--clay)", marginBottom:20}}>§ 01 · {T("WHAT IS RIVER TRACING?","什麼是溯溪?")}</div>
          <h2 style={{fontSize:"clamp(40px,5.2vw,68px)", fontWeight:400, letterSpacing:"-0.02em"}}>
            {T("A sport with a Taiwanese accent.","一項帶有台灣腔的運動。")}
          </h2>
          <div className="zh" style={{fontFamily:"var(--display)", fontStyle:"italic", fontWeight:300, fontSize:26, marginTop:16, color:"var(--mute)"}}>
            溯溪 — sùxī — swimming up the river.
          </div>
        </Reveal>
        <Reveal stagger>
          <p style={{fontSize:17, lineHeight:1.6, color:"var(--ink-body)"}}>
            {T(
              "River tracing is the act of ascending a watercourse from its mouth toward its source. You wade, swim, scramble, jump, and sometimes rope up through canyons that cannot be reached any other way.",
              "溯溪,是沿著溪流由下游向上游前進。涉水、游泳、攀登、跳水,有時需架繩通過只能從水路抵達的峽谷。"
            )}
          </p>
          <p style={{fontSize:15.5, lineHeight:1.6, color:"var(--mute)"}}>
            {T(
              "It began in the 1980s as a discipline of Japanese sawanobori, and was adopted whole-heartedly by Taiwanese mountaineers. We think the east coast has the finest canyons in Asia.",
              "1980 年代自日本「沢登り」發展而來,後為台灣登山界採行。我們認為東海岸的溪谷是亞洲最美的。"
            )}
          </p>
          <p style={{fontSize:15.5, lineHeight:1.6, color:"var(--mute)"}}>
            {T(
              "We are four friends — Dino, Luke, Duncan, Apple — building the first English-first river-tracing outfit out of Nan'ao, Yilan. First paid inbound trips April 2027.",
              "我們是四個朋友 — Dino、Luke、Duncan、Apple — 於宜蘭 南澳 打造台灣第一家以英文為主的溯溪團隊。首次付費海外旅客團訂於 2027 年 4 月。"
            )}
          </p>
          <div style={{display:"grid", gridTemplateColumns:"1fr 1fr", gap:0, marginTop:28}}>
            <Rule label="Founded" value="2026"/>
            <Rule label="Base" value="Nan'ao, Yilan"/>
            <Rule label="Crew" value="4 founders"/>
            <Rule label="Ratio" value="6:2 max" accent/>
          </div>
        </Reveal>
      </div>

      <Reveal stagger style={{maxWidth:1180, margin:"96px auto 0", display:"grid", gridTemplateColumns:"1.2fr .9fr 1.1fr", gap:18}}>
        <Photo src={IMG.pool} alt="pool" ratio="4/5" caption="01 — Luopi jade pool" coord="24.46°N · 121.75°E"/>
        <div style={{display:"grid", gap:18}}>
          <Photo src={IMG.waterfall} alt="waterfall" ratio="1/1" caption="02 — Rope-assisted descent" coord="24.47°N · 121.72°E"/>
          <Photo src={IMG.forest} alt="approach" ratio="4/5" caption="03 — Fern approach" coord="24.46°N · 121.75°E"/>
        </div>
        <Photo src={IMG.canyon} alt="canyon" ratio="3/4" caption="04 — Jinyue narrows" coord="24.47°N · 121.72°E"/>
      </Reveal>
    </section>
  );
}

function Tours(){
  const [tier,setTier] = useState("All");
  const [maxHrs,setMaxHrs] = useState(12);
  const tiers = ["All","Beginner","Intermediate","Advanced"];
  const filtered = useMemo(()=>TOURS.filter(t => (tier==="All"||t.tier===tier) && t.hours<=maxHrs), [tier,maxHrs]);

  return (
    <section id="tours" style={{padding:"120px 40px", background:"#f5f5f3"}}>
      <div style={{maxWidth:1320, margin:"0 auto"}}>
        <Reveal style={{display:"grid", gridTemplateColumns:"1fr auto", alignItems:"end", gap:40, marginBottom:48, paddingBottom:22, borderBottom:"2px solid var(--ink)"}}>
          <div>
            <div className="mono" style={{color:"var(--clay)", marginBottom:16}}>§ 02 · {T("FIELD LOG OF ROUTES","路線手冊")}</div>
            <h2 style={{fontSize:"clamp(40px,5.2vw,68px)", fontWeight:400, letterSpacing:"-0.02em"}}>
              {T("Six rivers, three grades.","六條溪、三個級別。")}
            </h2>
          </div>
          <p className="mono" style={{maxWidth:"36ch", fontSize:11, lineHeight:1.7}}>
            {T("FILTER BY GRADE AND HOURS IN-WATER. PRICES IN NT$, INCLUDES ALL EQUIPMENT.","以級別與水上時數篩選。價格為新台幣,含全部裝備。")}
          </p>
        </Reveal>

        <div style={{display:"flex", gap:20, alignItems:"center", flexWrap:"wrap",
          padding:"16px 20px", border:"1px solid var(--rule)", marginBottom:32, background:"var(--paper)"}}>
          <span className="mono">{T("GRADE","級別")}</span>
          <div style={{display:"flex", gap:6, flexWrap:"wrap"}}>
            {tiers.map(x=><Chip key={x} active={tier===x} onClick={()=>setTier(x)}>{x}</Chip>)}
          </div>
          <div style={{width:1, height:24, background:"var(--rule)"}}/>
          <span className="mono">{T("MAX HRS","最長")}</span>
          <input type="range" min={4} max={12} value={maxHrs} onChange={e=>setMaxHrs(+e.target.value)} style={{width:160, accentColor:"var(--clay)"}}/>
          <span className="mono" style={{color:"var(--ink)"}}>≤ {maxHrs}h</span>
          <div style={{marginLeft:"auto"}} className="mono">{filtered.length}/{TOURS.length}</div>
        </div>

        <div style={{display:"grid", gridTemplateColumns:"repeat(auto-fill, minmax(340px,1fr))", gap:18}}>
          {filtered.map((tour,i)=><TourCard key={tour.id} tour={tour} index={i}/>)}
        </div>
        {filtered.length===0 && (
          <div style={{padding:60, textAlign:"center", color:"var(--mute)", border:"1px dashed var(--rule)"}}>
            {T("No routes match those filters.","沒有符合的路線。")}
          </div>
        )}
      </div>
    </section>
  );
}

function TourCard({tour, index}){
  const [hover,setHover] = useState(false);
  const tierColor = { Beginner:"var(--moss)", Intermediate:"var(--ink)", Advanced:"var(--clay)" }[tour.tier];
  return (
    <Reveal onMouseEnter={()=>setHover(true)} onMouseLeave={()=>setHover(false)} style={{
      background:"var(--paper)", border:"1px solid var(--rule)",
      display:"flex", flexDirection:"column",
      transition:"transform .4s ease, box-shadow .4s ease",
      transform: hover?"translateY(-4px)":"none",
      boxShadow: hover?"0 30px 50px -30px rgba(20,17,11,.3)":"none"
    }}>
      <div style={{position:"relative", aspectRatio:"4/3", overflow:"hidden"}}>
        <img src={tour.photo} alt="" style={{width:"100%", height:"100%", objectFit:"cover", transform:hover?"scale(1.05)":"scale(1)", transition:"transform .8s ease"}}/>
        <div style={{position:"absolute", top:12, left:12, background:tierColor, color:"var(--paper)", padding:"4px 10px", fontFamily:"var(--mono)", fontSize:9.5, letterSpacing:".14em"}}>
          {tour.tier.toUpperCase()} · {tour.tierZh}
        </div>
        <div className="mono" style={{position:"absolute", top:12, right:12, color:"var(--paper)", fontSize:10}}>N° {String(index+1).padStart(2,"0")}</div>
        <div className="mono" style={{position:"absolute", bottom:10, left:12, color:"var(--paper)", fontSize:9.5, opacity:.9}}>{tour.coord}</div>
      </div>
      <div style={{padding:"22px 22px 24px", display:"flex", flexDirection:"column", flex:1}}>
        <h3 style={{fontSize:26, fontWeight:500, letterSpacing:"-0.01em"}}>{tour.name}</h3>
        <div className="zh" style={{color:"var(--mute)", marginTop:4, marginBottom:14, letterSpacing:".15em", fontSize:15}}>{tour.zh}</div>
        <p style={{color:"var(--ink-body)", fontSize:14, lineHeight:1.55, marginBottom:18, flex:1}}>{tour.summary}</p>
        <div style={{display:"grid", gridTemplateColumns:"repeat(3,1fr)", gap:0, marginBottom:16, borderTop:"1px solid var(--rule-fine)"}}>
          {[["HRS",tour.hours+"h"],["KM",tour.distance],["GAIN",tour.elev+"m"]].map(([k,v])=>(
            <div key={k} style={{padding:"10px 0", borderRight:"1px solid var(--rule-fine)"}}>
              <div className="mono" style={{fontSize:9.5}}>{k}</div>
              <div style={{fontFamily:"var(--display)", fontSize:20, color:"var(--ink)"}}>{v}</div>
            </div>
          ))}
        </div>
        <div style={{display:"flex", flexWrap:"wrap", gap:6, marginBottom:18}}>
          {tour.features.map(f=><span key={f} className="mono" style={{fontSize:9.5, border:"1px solid var(--rule)", padding:"3px 8px", color:"var(--ink-body)"}}>{f}</span>)}
        </div>
        <div style={{display:"flex", justifyContent:"space-between", alignItems:"center", paddingTop:14, borderTop:"1px solid var(--rule-fine)"}}>
          <div>
            <div className="mono" style={{fontSize:10}}>FROM</div>
            <div style={{fontFamily:"var(--display)", fontSize:24, color:"var(--ink)"}}>NT$ {tour.price.toLocaleString()}</div>
          </div>
          <a href="#book" className="mono" style={{borderBottom:"1px solid var(--clay)", color:"var(--clay)", textDecoration:"none", paddingBottom:2}}>Reserve →</a>
        </div>
      </div>
    </Reveal>
  );
}

function RouteMap(){
  const [active, setActive] = useState(TOURS[0].id);
  const cur = TOURS.find(t=>t.id===active);
  const points = [
    {id:"luopi",  x:0.38, y:0.45},
    {id:"jinyue", x:0.30, y:0.55},
    {id:"nanao",  x:0.46, y:0.68},
    {id:"aohua",  x:0.52, y:0.82},
    {id:"hanxi",  x:0.26, y:0.28},
    {id:"wudi",   x:0.18, y:0.18},
  ];
  return (
    <section id="map" style={{padding:"120px 40px"}}>
      <div style={{maxWidth:1280, margin:"0 auto"}}>
        <Reveal style={{marginBottom:48, paddingBottom:22, borderBottom:"2px solid var(--ink)"}}>
          <div className="mono" style={{color:"var(--clay)", marginBottom:16}}>§ 03 · {T("YILAN EAST-COAST ROUTE LOG","宜蘭東岸路線圖")}</div>
          <h2 style={{fontSize:"clamp(40px,5.2vw,68px)", fontWeight:400, letterSpacing:"-0.02em", maxWidth:"14ch"}}>
            {T("The canyons of Nan'ao.","南澳的溪谷。")}
          </h2>
        </Reveal>

        <div style={{display:"grid", gridTemplateColumns:"1.4fr 1fr", gap:40}}>
          <div style={{position:"relative", border:"1px solid var(--rule)", background:"var(--paper-warm)", aspectRatio:"4/5", overflow:"hidden"}}>
            <svg viewBox="0 0 400 500" style={{position:"absolute", inset:0, width:"100%", height:"100%"}}>
              <path d="M 360 -10 C 340 60, 330 120, 350 180 S 320 300, 340 380 S 320 480, 380 510 L 410 510 L 410 -10 Z" fill="var(--river)" opacity=".08" />
              <path d="M 360 -10 C 340 60, 330 120, 350 180 S 320 300, 340 380 S 320 480, 380 510" stroke="var(--river)" strokeWidth="1.2" fill="none" opacity=".7"/>
              {[
                "M 345 90 C 300 110, 260 140, 210 170 S 130 200, 60 230",
                "M 350 180 C 320 200, 300 220, 260 240 S 200 260, 150 300",
                "M 335 240 C 300 260, 270 290, 220 330 S 150 370, 100 400",
                "M 330 320 C 300 340, 240 360, 180 400 S 120 450, 60 470",
              ].map((d,i)=><path key={i} d={d} stroke="var(--river)" strokeWidth="1.4" fill="none" opacity=".55"/>)}
              {Array.from({length:8}).map((_,i)=><line key={i} x1="0" y1={60+i*55} x2="400" y2={60+i*55} stroke="var(--ink)" opacity=".04"/>)}
            </svg>
            {points.map(p=>{
              const tt = TOURS.find(x=>x.id===p.id);
              const act = tt.id===cur.id;
              return (
                <button key={p.id} onClick={()=>setActive(p.id)} style={{
                  position:"absolute", left:`${p.x*100}%`, top:`${p.y*100}%`,
                  transform:"translate(-50%,-50%)", border:"none", cursor:"pointer", background:"transparent", padding:0
                }}>
                  <div style={{
                    width:act?18:12, height:act?18:12, borderRadius:"50%",
                    background: act?"var(--clay)":"var(--river)",
                    boxShadow: act?"0 0 0 8px rgba(168,71,31,.22)":"none",
                    transition:"all .3s ease"
                  }}/>
                  <div className="mono" style={{position:"absolute", left:22, top:-2, whiteSpace:"nowrap", fontSize:10, color:act?"var(--clay)":"var(--ink)", fontWeight:act?500:400}}>
                    {tt.name}
                  </div>
                </button>
              );
            })}
            <div style={{position:"absolute", bottom:18, left:18}} className="mono">
              <div style={{display:"grid", placeItems:"center", width:44, height:44, border:"1px solid var(--ink)", borderRadius:"50%", fontSize:11, color:"var(--ink)"}}>N</div>
            </div>
            <div style={{position:"absolute", bottom:24, right:18}} className="mono">0 ─ 20km</div>
            <div style={{position:"absolute", top:18, right:18, textAlign:"right"}} className="mono">
              <div>YILAN 宜蘭</div><div style={{color:"var(--clay)"}}>NAN'AO 南澳</div>
            </div>
          </div>

          <div style={{display:"flex", flexDirection:"column"}}>
            <div className="mono" style={{marginBottom:12}}>{T("SELECTED ROUTE","所選路線")}</div>
            <h3 style={{fontSize:44, fontWeight:400, letterSpacing:"-0.02em", marginBottom:4}}>{cur.name}</h3>
            <div className="zh" style={{fontSize:22, color:"var(--mute)", marginBottom:22, letterSpacing:".2em"}}>{cur.zh}</div>
            <p style={{color:"var(--ink-body)", fontSize:15.5, lineHeight:1.6, marginBottom:22}}>{cur.summary}</p>
            <Rule label="RIVER" value={cur.river}/>
            <Rule label="GRADE" value={`${cur.tier} · ${cur.tierZh}`}/>
            <Rule label="HOURS" value={`${cur.hours}h`}/>
            <Rule label="DISTANCE" value={`${cur.distance} km`}/>
            <Rule label="COORD" value={cur.coord}/>
            <Rule label="FROM" value={`NT$ ${cur.price.toLocaleString()}`} accent/>
            <div style={{marginTop:"auto", paddingTop:24}}>
              <Btn primary>{T("Reserve this descent","預約此行程")}</Btn>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function DayInLife(){
  return (
    <section style={{padding:"120px 40px", background:"#f5f5f3"}}>
      <div style={{maxWidth:1180, margin:"0 auto"}}>
        <Reveal style={{maxWidth:760, marginBottom:56}}>
          <div className="mono" style={{color:"var(--clay)", marginBottom:16}}>§ 04 · {T("A DAY IN THE CANYON","峽谷的一天")}</div>
          <h2 style={{fontSize:"clamp(40px,5.2vw,68px)", fontWeight:400, letterSpacing:"-0.02em"}}>
            {T("Dawn to dry clothes.","破曉至換上乾衣。")}
          </h2>
        </Reveal>

        <div style={{display:"grid", gridTemplateColumns:"1fr 1.05fr", gap:56, alignItems:"start"}}>
          <Reveal stagger>
            {DAY.map((d,i)=>(
              <div key={i} style={{display:"grid", gridTemplateColumns:"84px 1fr", gap:22,
                padding:"22px 0", borderTop:i===0?"2px solid var(--ink)":"1px solid var(--rule-fine)",
                borderBottom:i===DAY.length-1?"1px solid var(--rule)":"none"}}>
                <div style={{fontFamily:"var(--display)", fontSize:28, fontStyle:"italic", fontWeight:300, color:"var(--clay)"}}>{d.t}</div>
                <div>
                  <h4 style={{fontSize:20, marginBottom:8}}>{T(d.title, d.titleZh)}</h4>
                  <p style={{color:"var(--ink-body)", fontSize:14.5, lineHeight:1.55}}>{d.detail}</p>
                </div>
              </div>
            ))}
          </Reveal>
          <Reveal style={{position:"sticky", top:96}}>
            <Photo src={IMG.stream} alt="" ratio="3/4" kenburns caption={T("Field notes, Luopi fork, 14:32","現場筆記,鹿皮溪叉口,14:32")} coord="24.46°N · 121.75°E"/>
            <div style={{display:"grid", gridTemplateColumns:"1fr 1fr", gap:12, marginTop:12}}>
              <Photo src={IMG.jungle} alt="" ratio="1/1"/>
              <Photo src={IMG.misty} alt="" ratio="1/1"/>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Guides(){
  return (
    <section id="guides" style={{padding:"120px 40px"}}>
      <div style={{maxWidth:1280, margin:"0 auto"}}>
        <Reveal style={{marginBottom:48, paddingBottom:22, borderBottom:"2px solid var(--ink)", display:"grid", gridTemplateColumns:"1fr auto", gap:40, alignItems:"end"}}>
          <div>
            <div className="mono" style={{color:"var(--clay)", marginBottom:16}}>§ 05 · {T("THE FOUR FOUNDERS","四位創辦人")}</div>
            <h2 style={{fontSize:"clamp(40px,5.2vw,68px)", fontWeight:400, letterSpacing:"-0.02em"}}>
              {T("Four friends, one outfit.","四個朋友,一個團隊。")}
            </h2>
          </div>
          <p className="mono" style={{maxWidth:"38ch", fontSize:11, lineHeight:1.7}}>
            {T("3 TAIWANESE · 1 AMERICAN · LEAD GUIDE, OPS, SAFETY OFFICER, HOSPITALITY","3 位台灣人 · 1 位美國人 · 主嚮、運營、安全官、接待")}
          </p>
        </Reveal>

        <Reveal stagger style={{display:"grid", gridTemplateColumns:"repeat(4,1fr)", gap:18}}>
          {GUIDES.map((g)=>(
            <div key={g.name}>
              <Photo src={g.photo} alt={g.name} ratio="3/4"/>
              <div style={{display:"flex", justifyContent:"space-between", marginTop:14, alignItems:"baseline"}}>
                <h4 style={{fontSize:30, fontWeight:500, letterSpacing:"-0.02em"}}>{g.name}</h4>
                <div className="mono" style={{color:"var(--clay)"}}>{g.initial}</div>
              </div>
              <div className="zh" style={{color:"var(--mute)", fontSize:13, marginTop:2, fontStyle:"italic"}}>{g.surname}</div>
              <div className="mono" style={{color:"var(--clay)", marginTop:12, fontSize:10}}>{g.role}</div>
              <p style={{color:"var(--ink-body)", fontSize:13.5, lineHeight:1.5, marginTop:10}}>{g.bio}</p>
              <div style={{marginTop:14, paddingTop:12, borderTop:"1px solid var(--rule-fine)", fontSize:12, color:"var(--mute)"}}>
                <div style={{marginBottom:4}}><span className="mono">CERT</span> <span style={{color:"var(--ink)"}}>{g.cert}</span></div>
                <div><span className="mono">LANG</span> <span style={{color:"var(--ink)"}}>{g.lang}</span></div>
              </div>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}

function Safety(){
  return (
    <section id="safety" style={{padding:"120px 40px", background:"var(--ink)", color:"var(--paper)", position:"relative"}}>
      <div style={{maxWidth:1180, margin:"0 auto"}}>
        <Reveal style={{display:"grid", gridTemplateColumns:"1fr 1fr", gap:56, alignItems:"end", marginBottom:56, paddingBottom:22, borderBottom:"2px solid var(--paper)"}}>
          <div>
            <div className="mono" style={{color:"var(--clay)", marginBottom:16}}>§ 06 · {T("NON-NEGOTIABLES","不妥協之處")}</div>
            <h2 style={{fontSize:"clamp(40px,5.2vw,68px)", fontWeight:400, letterSpacing:"-0.02em", color:"var(--paper)"}}>
              {T("Boring by design.","設計上追求無聊。")}
            </h2>
          </div>
          <p style={{fontSize:16, lineHeight:1.6, opacity:.85}}>
            {T("A canyon will always be stronger than you are. We build our operation around that fact.","峽谷永遠比人強大。我們的一切設計都建立於這個事實之上。")}
          </p>
        </Reveal>

        <Reveal stagger style={{display:"grid", gridTemplateColumns:"repeat(3,1fr)", gap:1, background:"rgba(241,234,217,.15)"}}>
          {SAFETY.map((s,i)=>(
            <div key={s.k} style={{background:"var(--ink)", padding:"30px 28px", minHeight:210}}>
              <div className="mono" style={{opacity:.5, marginBottom:12}}>0{i+1}</div>
              <h4 style={{fontSize:24, fontWeight:500, marginBottom:12, color:"var(--paper)"}}>{T(s.k, s.kZh)}</h4>
              <p style={{fontSize:13.5, lineHeight:1.5, opacity:.78}}>{s.v}</p>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}

function Booking(){
  return (
    <section id="book" style={{position:"relative", padding:"140px 40px", color:"var(--paper)", overflow:"hidden"}}>
      <img src={IMG.heroAlt} alt="" style={{position:"absolute", inset:0, width:"100%", height:"100%", objectFit:"cover", zIndex:0}}/>
      <div style={{position:"absolute", inset:0, background:"linear-gradient(180deg, rgba(20,17,11,.5), rgba(20,17,11,.72))", zIndex:1}}/>
      <div style={{position:"relative", zIndex:2, maxWidth:860, margin:"0 auto", textAlign:"center"}}>
        <Reveal>
          <div className="mono" style={{opacity:.85, marginBottom:20, color:"var(--paper)"}}>§ 07 · {T("RESERVE","預約")}</div>
          <h2 style={{fontSize:"clamp(48px,7vw,112px)", fontWeight:300, fontStyle:"italic", lineHeight:.96, color:"var(--paper)"}}>
            {T(<>The river is running<br/>for thirty more weeks.</>,<>溪水還會再流<br/>三十週。</>)}
          </h2>
          <p style={{fontSize:17, maxWidth:540, margin:"28px auto 36px", opacity:.88, lineHeight:1.5}}>
            {T(
              "Soft-open trips begin Q3 2026 — expats first. Inbound travelers from April 2027. Drop us a line; no deposit until we confirm.",
              "2026 Q3 先以在台外國人軟上線。海外旅客 2027 年 4 月起開放。先聯絡我們,確認前不需訂金。"
            )}
          </p>
          <div style={{display:"flex", gap:12, justifyContent:"center", flexWrap:"wrap"}}>
            <Btn primary>{T("Join the waitlist","加入候補名單")}</Btn>
            <Btn outline>{T("Email a guide","寫信給嚮導")}</Btn>
          </div>
          <div className="mono" style={{marginTop:44, opacity:.75, letterSpacing:".2em", color:"var(--paper)"}}>
            HELLO@OUTDOORBOYS.TW · +886 3 998 XXXX · NAN'AO, YILAN
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Footer(){
  return (
    <footer style={{padding:"56px 40px 48px", borderTop:"2px solid var(--ink)", background:"#ffffff"}}>
      <div style={{maxWidth:1280, margin:"0 auto", display:"grid", gridTemplateColumns:"1.4fr 1fr 1fr 1fr", gap:40}}>
        <div>
          <div style={{fontFamily:"var(--display)", fontWeight:500, fontSize:24}}>Outdoor<em style={{color:"var(--clay)", fontStyle:"italic"}}>·</em>Boys</div>
          <p style={{color:"var(--ink-body)", fontSize:13.5, lineHeight:1.55, maxWidth:"34ch", marginTop:14}}>
            {T("A four-founder river-tracing outfit out of Nan'ao, Yilan. Pre-launch — April 2027.","四人創辦的溯溪團隊,基地於宜蘭 南澳。尚未上線 — 2027 年 4 月首次開團。")}
          </p>
        </div>
        <div>
          <div className="mono" style={{marginBottom:14}}>{T("RIVERS","溪流")}</div>
          {TOURS.map(t=><div key={t.id} style={{fontSize:13.5, marginBottom:5, color:"var(--ink-body)"}}>{t.name}</div>)}
        </div>
        <div>
          <div className="mono" style={{marginBottom:14}}>{T("COMPANY","公司")}</div>
          {[["About","關於"],["Crew","團隊"],["Safety","安全"],["Journal","日誌"]].map(([e,z])=>(
            <div key={e} style={{fontSize:13.5, marginBottom:5, color:"var(--ink-body)"}}>{T(e,z)}</div>
          ))}
        </div>
        <div>
          <div className="mono" style={{marginBottom:14}}>{T("NAN'AO BASE","南澳基地")}</div>
          <div style={{fontSize:13.5, lineHeight:1.6, color:"var(--ink-body)"}}>
            {T("Nan'ao Township","南澳鄉")}<br/>
            {T("Yilan County 272","宜蘭縣 272")}<br/>
            <span className="mono" style={{fontSize:10.5}}>24.4620°N · 121.7540°E</span>
          </div>
        </div>
      </div>
      <div style={{maxWidth:1280, margin:"44px auto 0", paddingTop:20, borderTop:"1px solid var(--rule)", display:"flex", justifyContent:"space-between"}} className="mono">
        <div>© 2026 OUTDOOR BOYS · 戶外男孩</div>
        <div>{T("BUILT IN TAIWAN · RUNS ON RIVER WATER","台灣製造 · 以溪水為燃料")}</div>
      </div>
    </footer>
  );
}

Object.assign(window, { Nav, Hero, StatusMarquee, About, Tours, RouteMap, DayInLife, Guides, Safety, Booking, Footer });
