// App entry
const { useState: aUS, useEffect: aUE } = React;

function App(){
  const defaults = JSON.parse(document.getElementById("tweak-defaults").textContent.match(/\{[\s\S]*\}/)[0]);
  const [t, setT] = aUS(defaults);
  const [tweakOpen, setTweakOpen] = aUS(false);

  aUE(()=>{
    document.documentElement.setAttribute("data-theme", t.theme);
    document.documentElement.setAttribute("data-palette", t.palette);
    document.documentElement.setAttribute("data-fonts", t.fonts);
    document.documentElement.setAttribute("lang", t.lang);
  },[t]);

  aUE(()=>{
    const onMsg = (e)=>{
      if(!e.data||!e.data.type) return;
      if(e.data.type==="__activate_edit_mode") setTweakOpen(true);
      if(e.data.type==="__deactivate_edit_mode") setTweakOpen(false);
    };
    window.addEventListener("message", onMsg);
    window.parent.postMessage({type:"__edit_mode_available"},"*");
    return ()=>window.removeEventListener("message", onMsg);
  },[]);

  const setLang = (lang)=>{
    setT({...t, lang});
    window.parent.postMessage({type:"__edit_mode_set_keys", edits:{lang}},"*");
  };

  return (
    <>
      <Nav t={t} setLang={setLang}/>
      <Hero t={t}/>
      <StatusMarquee/>
      <About/>
      <Tours/>
      <RouteMap/>
      <DayInLife/>
      <Guides/>
      <Safety/>
      <Booking/>
      <Footer/>
      <TweaksPanel t={t} setT={setT} visible={tweakOpen}/>
    </>
  );
}
ReactDOM.createRoot(document.getElementById("root")).render(<App/>);
