"use client";
import { useState, useEffect } from "react";

const CLIPS = [
  { id:1, outlet:"CNN en Español", tier:"Tier 1", url:"https://cnnespanol.cnn.com/2025/09/05/deportes/latinos-nfl-jugadores-futbol-americano-orix", h_es:"Del legado latino al presente: la NFL 2025/2026 marca un hito para sus jugadores hispanos", h_en:"From the Latino legacy to the present: the 2025/2026 NFL marks a milestone for its Hispanic players", date:"2025-09-05", lang:"ES", sent:"positive", s_es:"La temporada 2025/2026 de la NFL será una especial para los latinos. Esta campaña será la segunda vez que la liga tenga al menos 40 representantes con raíces latinoamericanas entre sus equipos.", s_en:"The 2025/2026 NFL season will be a special one for Latinos. This campaign will be the second time the league has at least 40 representatives with Latin American roots across its teams.", kw:["NFL","latinos","jugadores hispanos"] },
  { id:2, outlet:"Latino Sports", tier:"Tier 2", url:"https://www.latinosports.com/seven-legends-to-be-inducted-into-the-hispanic-football-hall-of-fame", h_es:"Siete leyendas serán exaltadas al Hispanic Football Hall of Fame", h_en:"Seven legends to be inducted into the Hispanic Football Hall of Fame", date:"2026-02-17", lang:"EN", sent:"positive", s_es:"La clase inaugural de 2026 será honrada durante la Celebración de Fútbol el Cinco de Mayo en la sede de los Las Vegas Raiders en Henderson, Nevada.", s_en:"The historic Class of 2026 will be honored during the Celebración de Fútbol on Cinco de Mayo at the Las Vegas Raiders Headquarters in Henderson, Nevada.", kw:["HFHOF","NFL","Cinco de Mayo"] },
  { id:3, outlet:"Estilos Media", tier:"Tier 3", url:"https://www.estilosblog.com/hispanic-football-hall-of-fame-2026-siete-leyendas/", h_es:"Siete leyendas serán exaltadas al Hispanic Football Hall of Fame 2026", h_en:"Seven legends to be inducted into the Hispanic Football Hall of Fame 2026", date:"2026-02-19", lang:"ES", sent:"positive", s_es:"La clase de 2026 incluye a Tom Fears, Tom Flores, Ted Hendricks, Anthony Muñoz, Jim Plunkett, Ron Rivera y Steve Van Buren.", s_en:"The Class of 2026 includes Tom Fears, Tom Flores, Ted Hendricks, Anthony Muñoz, Jim Plunkett, Ron Rivera, and Steve Van Buren.", kw:["HFHOF","Tom Flores","Anthony Muñoz"] },
  { id:4, outlet:"Latin Times", tier:"Tier 2", url:"https://www.latintimes.com/bad-bunny-isnt-only-latino-super-bowl-2026-meet-hispanic-players-artists-making-history-594376", h_es:"Bad Bunny no es el único latino en el Super Bowl 2026: conoce a los jugadores hispanos que hacen historia", h_en:"Bad Bunny isn't the only Latino at Super Bowl 2026: meet the Hispanic players making history", date:"2026-02-08", lang:"EN", sent:"positive", s_es:"Christian González, Andrés Borregales y Jaylinn Hawkins son algunos de los jugadores latinos que participarán en el Super Bowl LX.", s_en:"Christian González, Andrés Borregales, and Jaylinn Hawkins are among the Latino players featured in Super Bowl LX at Levi's Stadium.", kw:["Super Bowl LX","Bad Bunny","Christian González"] },
  { id:5, outlet:"LatiNation", tier:"Tier 3", url:"https://latination.com/how-latino-players-are-shaping-the-2026-nfl-playoffs-and-what-it-means-for-the-season-ahead/", h_es:"Cómo los jugadores latinos están moldeando los playoffs de la NFL 2026", h_en:"How Latino players are shaping the 2026 NFL Playoffs", date:"2026-01-08", lang:"EN", sent:"positive", s_es:"Este año, 12 jugadores latinos forman parte de equipos de playoffs, señalando una evolución hacia roles más influyentes y decisivos.", s_en:"This year, 12 Latino players are part of playoff teams, signaling an evolution toward more influential and decisive roles.", kw:["NFL Playoffs","Fred Warner","Nik Bonitto"] },
  { id:6, outlet:"ESPN", tier:"Tier 1", url:"https://www.espn.com/nfl/story/_/id/47797741/super-bowl-half-show-history-hispanic-performers", h_es:"Bad Bunny se une a los íconos hispanos que dominaron el medio tiempo del Super Bowl", h_en:"Bad Bunny joins Hispanic icons who owned Super Bowl halftime", date:"2026-02-09", lang:"EN", sent:"positive", s_es:"Por primera vez, el show de medio tiempo presentó una actuación en solitario dominada por el español, liderada por Bad Bunny.", s_en:"For the first time, the halftime show featured a Spanish language-dominant solo performance, led by multi-Grammy-winning Bad Bunny.", kw:["Super Bowl LX","Bad Bunny","halftime"] },
  { id:7, outlet:"Al Jazeera", tier:"Tier 1", url:"https://www.aljazeera.com/features/2026/2/9/our-music-can-take-a-stand-latinos-hail-bad-bunnys-super-bowl-show", h_es:"'Tenemos voz': los latinos celebran el show de Bad Bunny en el Super Bowl", h_en:"'We have a voice': Latinos celebrate Bad Bunny's Super Bowl halftime show", date:"2026-02-09", lang:"EN", sent:"positive", s_es:"Latinos en las Américas sintieron orgullo por la actuación sin precedentes en un momento de mayor temor y división.", s_en:"Latinos across the Americas felt pride in Bad Bunny's boundary-breaking performance at a time of heightened fear and division.", kw:["Super Bowl LX","Bad Bunny","Latino pride"] },
  { id:8, outlet:"Remezcla", tier:"Tier 2", url:"https://remezcla.com/lists/sports/10-latino-nfl-players-to-watch-out-for-this-2025-season/", h_es:"10 jugadores latinos de la NFL a seguir esta temporada 2025", h_en:"10 Latino NFL players to watch out for this 2025 season", date:"2025-09-05", lang:"EN", sent:"positive", s_es:"En 2025 hay 47 latinos en equipos de la NFL, con 32 en plantillas activas. El crecimiento ha sido constante.", s_en:"In 2025, there are 47 Latinos on NFL teams, with 32 on 53-man rosters. Growth has been steady year over year.", kw:["NFL","Fred Warner","Isiah Pacheco"] },
  { id:9, outlet:"NFL Football Ops", tier:"Tier 1", url:"https://operations.nfl.com/updates/football-ops/season-long-por-la-cultura-campaign-celebrates-latino-fans-players-and-culture/", h_es:"La campaña 'Por La Cultura' celebra a fanáticos, jugadores y cultura latina", h_en:"Season-long 'Por La Cultura' campaign celebrates Latino fans, players and culture", date:"2025-09-17", lang:"EN", sent:"positive", s_es:"Con más de 39 millones de fanáticos latinos de la NFL en EE.UU., la liga tiene una de las mayores bases de fans latinos en el deporte.", s_en:"With more than 39 million Latino NFL fans in the U.S., the league has one of the largest Latino fan bases in American sports.", kw:["Por La Cultura","NFL","Mundo NFL"] },
  { id:10, outlet:"HispanicAd", tier:"Tier 2", url:"https://hispanicad.com/news/hispanic-football-hall-of-fame-established-to-celebrate-hispanic-excellence/", h_es:"Se establece el Hispanic Football Hall of Fame para celebrar la excelencia hispana", h_en:"Hispanic Football Hall of Fame established to celebrate Hispanic excellence", date:"2025-09-17", lang:"EN", sent:"positive", s_es:"Ron Rivera y Anthony Muñoz ayudaron a establecer el HFHOF. La primera ceremonia será en primavera de 2026.", s_en:"Ron Rivera and Anthony Muñoz helped establish the HFHOF. The inaugural induction ceremony is planned for spring 2026.", kw:["HFHOF","Ron Rivera","Anthony Muñoz"] },
  { id:11, outlet:"Remezcla", tier:"Tier 2", url:"https://remezcla.com/sports/hispanic-football-hall-of-fame-established-founding-members/", h_es:"Se establece el HFHOF — estas leyendas son miembros fundadores", h_en:"Hispanic Football Hall of Fame established — these legends are founding members", date:"2025-09-17", lang:"EN", sent:"positive", s_es:"Junto con la NFL, el HFHOF organizará un Campeonato Internacional de Flag Football con jugadores hispanos de preparatoria.", s_en:"Working alongside the NFL, the HFHOF will organize an International Flag Football Championship with elite Hispanic high school players.", kw:["HFHOF","flag football","Ron Rivera"] },
  { id:12, outlet:"AZ Cardinals (ES)", tier:"Tier 2", url:"https://www.azcardinals.com/news/nace-el-hispanic-hall-of-fame", h_es:"Nace el Hispanic Hall of Fame", h_en:"The Hispanic Hall of Fame is born", date:"2025-09-17", lang:"ES", sent:"positive", s_es:"La primera ceremonia, 'Celebración de Fútbol', se llevará a cabo en primavera de 2026. Rolando Cantú forma parte del comité.", s_en:"The first ceremony, 'Celebración de Fútbol,' will take place in spring 2026. Rolando Cantú is part of the committee.", kw:["HFHOF","Rolando Cantú","Cardinals"] },
  { id:13, outlet:"EWTN News", tier:"Tier 3", url:"https://www.ewtnnews.com/world/americas/did-bad-bunnys-super-bowl-performance-represent-latinos-and-their-cultural-values", h_es:"¿Representó la actuación de Bad Bunny a los latinos y sus valores culturales?", h_en:"Did Bad Bunny's Super Bowl show represent Latinos and their cultural values?", date:"2026-02-17", lang:"EN", sent:"negative", s_es:"Para algunos fue un triunfo latino. Para otros, contenía letras obscenas que no representaban lo mejor de América Latina.", s_en:"For some it was a Latino triumph. For others, it contained obscene lyrics that did not represent the best of Latin America.", kw:["Super Bowl LX","Bad Bunny","controversy"] },
  { id:14, outlet:"NBC News", tier:"Tier 1", url:"https://www.nbcnews.com/pop-culture/pop-culture-news/bad-bunny-super-bowl-halftime-2026-when-is-time-watch-who-perform-rcna257182", h_es:"El show de Bad Bunny rinde homenaje a Puerto Rico, con Lady Gaga y Ricky Martin", h_en:"Bad Bunny halftime show pays homage to Puerto Rico, features Lady Gaga and Ricky Martin", date:"2026-02-09", lang:"EN", sent:"positive", s_es:"Bad Bunny se convirtió en el primer artista solista hispano en encabezar el show de medio tiempo del Super Bowl.", s_en:"Bad Bunny became the first Spanish-language Latin solo artist to headline the Super Bowl halftime show.", kw:["Super Bowl LX","Puerto Rico","Lady Gaga"] },
];

const OUTLETS = [
  { name:"CNN en Español", url:"cnnespanol.cnn.com", type:"Digital", tier:"Tier 1" },
  { name:"ESPN / ESPN Deportes", url:"espn.com", type:"Digital", tier:"Tier 1" },
  { name:"NBC News", url:"nbcnews.com", type:"Digital", tier:"Tier 1" },
  { name:"Al Jazeera", url:"aljazeera.com", type:"Digital", tier:"Tier 1" },
  { name:"NFL Football Ops", url:"operations.nfl.com", type:"Digital", tier:"Tier 1" },
  { name:"TUDN", url:"tudn.com", type:"Digital", tier:"Tier 1" },
  { name:"Telemundo Deportes", url:"telemundo.com/deportes", type:"Digital", tier:"Tier 1" },
  { name:"El Nuevo Herald", url:"elnuevoherald.com", type:"Print/Digital", tier:"Tier 1" },
  { name:"La Opinión", url:"laopinion.com", type:"Print/Digital", tier:"Tier 1" },
  { name:"People en Español", url:"peopleenespanol.com", type:"Digital", tier:"Tier 1" },
  { name:"Latin Times", url:"latintimes.com", type:"Digital", tier:"Tier 2" },
  { name:"Latino Sports", url:"latinosports.com", type:"Digital", tier:"Tier 2" },
  { name:"Remezcla", url:"remezcla.com", type:"Digital", tier:"Tier 2" },
  { name:"HispanicAd", url:"hispanicad.com", type:"Digital", tier:"Tier 2" },
  { name:"AZ Cardinals (ES)", url:"azcardinals.com", type:"Team Site", tier:"Tier 2" },
  { name:"Mundo Hispánico", url:"mundohispanico.com", type:"Digital", tier:"Tier 2" },
  { name:"Diario Las Américas", url:"diariolasamericas.com", type:"Print/Digital", tier:"Tier 2" },
  { name:"LatiNation", url:"latination.com", type:"Digital", tier:"Tier 3" },
  { name:"Estilos Media", url:"estilosblog.com", type:"Digital", tier:"Tier 3" },
  { name:"EWTN News", url:"ewtnnews.com", type:"Digital", tier:"Tier 3" },
];

const C = { bg:"#0a0a0a", surface:"#141414", surface2:"#1a1a1a", surface3:"#222", border:"#2a2a2a", borderLight:"#333", text:"#e8e6e1", textMuted:"#a09e97", textDim:"#6b6963", accent:"#c8c4bc", pos:"#4ade80", neg:"#f87171", neu:"#a09e97", t1:"#c4b5fd", t2:"#93c5fd", t3:"#6b6963", es:"#fbbf24", en:"#60a5fa" };

function Badge({bg,color,border,children}){return <span style={{fontSize:10,fontWeight:500,padding:"2px 8px",borderRadius:3,background:bg,color,border:`1px solid ${border}`,letterSpacing:"0.04em",whiteSpace:"nowrap",display:"inline-block"}}>{children}</span>}
function SentBadge({s,ui}){const m={positive:{bg:"#0a2618",c:C.pos,b:"#163d2a",en:"Positive",es:"Positivo"},negative:{bg:"#2a0a0a",c:C.neg,b:"#3d1616",en:"Negative",es:"Negativo"},neutral:{bg:"#1a1a18",c:C.neu,b:"#2a2a27",en:"Neutral",es:"Neutral"}};const v=m[s]||m.neutral;return <Badge bg={v.bg} color={v.c} border={v.b}>{ui==="es"?v.es:v.en}</Badge>}
function TierBadge({t}){const m={"Tier 1":{bg:"#1a1530",c:C.t1,b:"#2a2545"},"Tier 2":{bg:"#0f1a2e",c:C.t2,b:"#1a2a45"},"Tier 3":{bg:"#1a1a18",c:C.t3,b:"#2a2a27"}};const v=m[t]||m["Tier 3"];return <Badge bg={v.bg} color={v.c} border={v.b}>{t}</Badge>}
function LangBadge({l}){return <Badge bg={l==="ES"?"#1a1508":"#0a1525"} color={l==="ES"?C.es:C.en} border={l==="ES"?"#2a2510":"#152540"}>{l}</Badge>}

function Stat({label,value,sub,color}){return(
  <div style={{flex:1,minWidth:125,padding:"18px 16px",borderRadius:8,border:`1px solid ${C.border}`,background:C.surface}}>
    <div style={{fontSize:26,fontWeight:600,color:color||C.text,lineHeight:1.1,fontFamily:"monospace",letterSpacing:"-0.02em"}}>{value}</div>
    <div style={{fontSize:11,color:C.textMuted,marginTop:5,fontWeight:500,textTransform:"uppercase",letterSpacing:"0.06em"}}>{label}</div>
    {sub&&<div style={{fontSize:11,color:C.textDim,marginTop:2}}>{sub}</div>}
  </div>
)}

function AgentSim({running,onDone}){
  const[steps,setSteps]=useState([]);const[idx,setIdx]=useState(0);
  useEffect(()=>{if(!running)return;setSteps([]);setIdx(0);const outs=OUTLETS.slice(0,14);let si=0,delay=500;const add=(t,type)=>{const id=si++;setSteps(p=>[...p,{t,type,id}])};const timers=[];timers.push(setTimeout(()=>add("Initializing scan — campaign: NFL Por La Cultura","sys"),200));outs.forEach((o,i)=>{timers.push(setTimeout(()=>{setIdx(i+1);add(`Scraping ${o.name} (${o.url})...`,"scrape")},delay));delay+=250+Math.random()*300;const hits=CLIPS.filter(c=>c.outlet===o.name);if(hits.length>0)hits.forEach(h=>{timers.push(setTimeout(()=>add(`✓ "${h.h_en.slice(0,55)}..."`,"match"),delay));delay+=180});else{timers.push(setTimeout(()=>add(`— No new matches on ${o.name}`,"miss"),delay));delay+=120}});timers.push(setTimeout(()=>add(`Running LLM classification on ${CLIPS.length} articles...`,"sys"),delay));delay+=1400;timers.push(setTimeout(()=>{add(`Done. ${CLIPS.length} clips classified. Report ready.`,"done");onDone()},delay));return()=>timers.forEach(clearTimeout)},[running]);
  return(<div style={{background:"#050505",borderRadius:8,padding:"14px 18px",fontFamily:"monospace",fontSize:11.5,maxHeight:340,overflowY:"auto",border:`1px solid ${C.border}`}}><div style={{color:C.pos,marginBottom:6,fontSize:10,textTransform:"uppercase",letterSpacing:"0.08em",fontWeight:500}}>{idx}/{Math.min(OUTLETS.length,14)} outlets</div>{steps.map(s=><div key={s.id} style={{color:s.type==="match"?C.pos:s.type==="miss"?C.textDim:s.type==="done"?"#60a5fa":s.type==="scrape"?C.t1:C.textMuted,padding:"1.5px 0",lineHeight:1.5}}>{s.t}</div>)}{running&&steps.length>0&&<span style={{color:"#60a5fa",animation:"blink 1s infinite"}}>▊</span>}</div>)
}

export default function Page(){
  const[view,setView]=useState("dashboard");const[ui,setUi]=useState("en");const[scanOn,setScanOn]=useState(false);const[scanDone,setScanDone]=useState(true);const[fS,setFS]=useState("all");const[fT,setFT]=useState("all");const[fL,setFL]=useState("all");const[sort,setSort]=useState("date");
  const t=(en,es)=>ui==="es"?es:en;
  const filtered=CLIPS.filter(c=>(fS==="all"||c.sent===fS)&&(fT==="all"||c.tier===fT)&&(fL==="all"||c.lang===fL)).sort((a,b)=>sort==="date"?b.date.localeCompare(a.date):sort==="outlet"?a.outlet.localeCompare(b.outlet):a.sent.localeCompare(b.sent));
  const pos=CLIPS.filter(c=>c.sent==="positive").length;const neg=CLIPS.filter(c=>c.sent==="negative").length;const neu=CLIPS.filter(c=>c.sent==="neutral").length;const t1=CLIPS.filter(c=>c.tier==="Tier 1").length;const uniq=new Set(CLIPS.map(c=>c.outlet)).size;
  const sel={fontSize:11,padding:"6px 10px",borderRadius:5,border:`1px solid ${C.border}`,background:C.surface,color:C.textMuted,cursor:"pointer",fontFamily:"inherit"};

  return(
    <div style={{fontFamily:"system-ui,-apple-system,sans-serif",maxWidth:840,margin:"0 auto",padding:"0 16px",background:C.bg,color:C.text,minHeight:"100vh"}}>
      <style>{`*{box-sizing:border-box}body{background:${C.bg};margin:0;color:${C.text}}@keyframes fadeIn{from{opacity:0;transform:translateY(3px)}to{opacity:1;transform:translateY(0)}}@keyframes blink{0%,50%{opacity:1}51%,100%{opacity:0}}a{color:inherit;text-decoration:none}`}</style>

      <div style={{borderBottom:`1px solid ${C.border}`,paddingBottom:20,marginBottom:24,paddingTop:28}}>
        <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:16}}>
          <div style={{display:"flex",alignItems:"baseline",gap:8}}>
            <span style={{fontSize:15,fontWeight:500,color:C.text,letterSpacing:"-0.01em"}}>chris gray strategy</span>
            <span style={{fontSize:11,color:C.textDim,letterSpacing:"0.04em"}}>/ coverage intelligence</span>
          </div>
          <div style={{display:"flex",gap:2,background:C.surface,borderRadius:5,padding:2,border:`1px solid ${C.border}`}}>
            {["en","es"].map(l=>(<button key={l} onClick={()=>setUi(l)} style={{padding:"4px 14px",fontSize:10,fontWeight:ui===l?500:400,borderRadius:3,border:"none",cursor:"pointer",fontFamily:"inherit",background:ui===l?C.surface3:"transparent",color:ui===l?C.text:C.textDim,letterSpacing:"0.04em",textTransform:"uppercase"}}>{l==="en"?"EN":"ES"}</button>))}
          </div>
        </div>
        <h1 style={{fontSize:22,fontWeight:300,margin:"0 0 6px",color:C.text,letterSpacing:"-0.02em",lineHeight:1.3}}>{t("Latino Media Coverage Tracker","Rastreador de Cobertura Mediática Latina")}</h1>
        <div style={{display:"flex",alignItems:"center",gap:12,flexWrap:"wrap"}}>
          <span style={{fontSize:12,color:C.textMuted}}>{t("Campaign","Campaña")}: <span style={{color:C.accent,fontWeight:500}}>NFL Por La Cultura</span></span>
          <span style={{fontSize:10,color:C.textDim}}>·</span>
          <span style={{fontSize:11,color:C.textDim}}>{t(`${CLIPS.length} real articles · Sep 2025 – Mar 2026`,`${CLIPS.length} artículos reales · Sep 2025 – Mar 2026`)}</span>
        </div>
      </div>

      <div style={{display:"flex",gap:4,marginBottom:24}}>
        {[["dashboard","Dashboard","Panel"],["scan","Run Scan","Ejecutar Escaneo"],["outlets","Source Registry","Registro de Fuentes"]].map(([key,en,es])=>(
          <button key={key} onClick={()=>setView(key)} style={{padding:"7px 16px",fontSize:12,fontWeight:view===key?500:400,borderRadius:5,border:`1px solid ${view===key?C.borderLight:"transparent"}`,cursor:"pointer",fontFamily:"inherit",background:view===key?C.surface2:"transparent",color:view===key?C.text:C.textDim,letterSpacing:"0.02em"}}>{t(en,es)}</button>
        ))}
      </div>

      {view==="dashboard"&&(
        <div style={{animation:"fadeIn 0.3s ease"}}>
          <div style={{display:"flex",gap:10,flexWrap:"wrap",marginBottom:24}}>
            <Stat label={t("Total clips","Clips totales")} value={CLIPS.length} sub={t("Real coverage data","Datos reales")}/>
            <Stat label={t("Unique outlets","Fuentes únicas")} value={uniq} sub={t(`of ${OUTLETS.length} monitored`,`de ${OUTLETS.length}`)}/>
            <Stat label="Tier 1" value={t1} color={C.t1}/>
            <Stat label={t("Positive","Positivo")} value={`${Math.round(pos/CLIPS.length*100)}%`} sub={`${pos}/${neg}/${neu}`} color={C.pos}/>
          </div>
          <div style={{display:"flex",gap:8,alignItems:"center",marginBottom:16,flexWrap:"wrap"}}>
            <select value={fS} onChange={e=>setFS(e.target.value)} style={sel}><option value="all">{t("All sentiment","Sentimiento")}</option><option value="positive">{t("Positive","Positivo")}</option><option value="negative">{t("Negative","Negativo")}</option><option value="neutral">Neutral</option></select>
            <select value={fT} onChange={e=>setFT(e.target.value)} style={sel}><option value="all">{t("All tiers","Tiers")}</option><option value="Tier 1">Tier 1</option><option value="Tier 2">Tier 2</option><option value="Tier 3">Tier 3</option></select>
            <select value={fL} onChange={e=>setFL(e.target.value)} style={sel}><option value="all">{t("All languages","Idiomas")}</option><option value="ES">{t("Spanish","Español")}</option><option value="EN">{t("English","Inglés")}</option></select>
            <select value={sort} onChange={e=>setSort(e.target.value)} style={sel}><option value="date">{t("Date","Fecha")}</option><option value="outlet">{t("Outlet","Fuente")}</option><option value="sentiment">{t("Sentiment","Sentimiento")}</option></select>
          </div>
          <div style={{display:"flex",flexDirection:"column",gap:1}}>
            {filtered.map((c,i)=>(
              <div key={c.id} style={{padding:"16px 18px",background:C.surface,borderRadius:i===0?"8px 8px 0 0":i===filtered.length-1?"0 0 8px 8px":0,borderBottom:i<filtered.length-1?`1px solid ${C.border}`:"none",animation:`fadeIn 0.25s ease ${i*0.02}s both`}}>
                <div style={{display:"flex",alignItems:"center",gap:6,marginBottom:6,flexWrap:"wrap"}}>
                  <span style={{fontSize:12,fontWeight:500,color:C.accent}}>{c.outlet}</span>
                  <TierBadge t={c.tier}/><LangBadge l={c.lang}/><SentBadge s={c.sent} ui={ui}/>
                  <span style={{fontSize:10,color:C.textDim,marginLeft:"auto",fontFamily:"monospace"}}>{c.date}</span>
                </div>
                <div style={{fontSize:13,fontWeight:500,color:C.text,marginBottom:4,lineHeight:1.45}}>{ui==="es"?c.h_es:c.h_en}</div>
                <div style={{fontSize:12,color:C.textMuted,lineHeight:1.55}}>{ui==="es"?c.s_es:c.s_en}</div>
                <div style={{display:"flex",gap:5,marginTop:8,flexWrap:"wrap",alignItems:"center"}}>
                  {c.kw.map(k=><span key={k} style={{fontSize:9,padding:"2px 6px",borderRadius:3,background:C.surface2,color:C.textDim,fontWeight:500,border:`1px solid ${C.border}`}}>{k}</span>)}
                  <a href={c.url} target="_blank" rel="noopener noreferrer" style={{marginLeft:"auto",fontSize:11,fontWeight:500,color:C.en,padding:"5px 14px",borderRadius:4,border:"1px solid #152540",background:"#0a1525",letterSpacing:"0.02em"}}>{t("Read article →","Leer artículo →")}</a>
                </div>
              </div>
            ))}
          </div>
          {filtered.length===0&&<div style={{textAlign:"center",padding:40,color:C.textDim,fontSize:12}}>{t("No clips match filters.","Sin resultados.")}</div>}
        </div>
      )}

      {view==="scan"&&(
        <div style={{animation:"fadeIn 0.3s ease"}}>
          <p style={{fontSize:12,color:C.textMuted,margin:"0 0 16px",lineHeight:1.6}}>{t("Crawls registered outlets, matches keywords, classifies via LLM.","Rastrea fuentes, busca palabras clave, clasifica mediante LLM.")}</p>
          <button onClick={()=>{setScanOn(true);setScanDone(false)}} disabled={scanOn} style={{padding:"8px 22px",fontSize:12,fontWeight:500,borderRadius:6,border:`1px solid ${scanOn?C.border:C.borderLight}`,cursor:scanOn?"not-allowed":"pointer",fontFamily:"inherit",background:scanOn?C.surface:C.surface2,color:scanOn?C.textDim:C.text,letterSpacing:"0.02em"}}>{scanOn?t("Scanning...","Escaneando..."):t("Run coverage scan","Ejecutar escaneo")}</button>
          <div style={{marginTop:16}}><AgentSim running={scanOn} onDone={()=>{setScanOn(false);setScanDone(true)}}/></div>
          {scanDone&&!scanOn&&<div style={{marginTop:14,padding:14,borderRadius:6,border:"1px solid #163d2a",background:"#0a2618"}}><div style={{fontSize:12,fontWeight:500,color:C.pos,marginBottom:3}}>{t("Scan complete","Escaneo completo")}</div><div style={{fontSize:11,color:C.textMuted}}>{t(`${CLIPS.length} clips across ${uniq} outlets.`,`${CLIPS.length} clips en ${uniq} fuentes.`)}</div></div>}
        </div>
      )}

      {view==="outlets"&&(
        <div style={{animation:"fadeIn 0.3s ease"}}>
          <p style={{fontSize:12,color:C.textMuted,margin:"0 0 16px"}}>{t(`${OUTLETS.length} outlets configured.`,`${OUTLETS.length} fuentes configuradas.`)}</p>
          <div style={{borderRadius:8,overflow:"hidden",border:`1px solid ${C.border}`}}>
            <table style={{width:"100%",borderCollapse:"collapse",fontSize:12}}>
              <thead><tr style={{background:C.surface2,textAlign:"left"}}>{[t("Outlet","Fuente"),"URL",t("Type","Tipo"),"Tier"].map(h=><th key={h} style={{padding:"10px 14px",fontWeight:500,color:C.textDim,fontSize:10,textTransform:"uppercase",letterSpacing:"0.06em"}}>{h}</th>)}</tr></thead>
              <tbody>{OUTLETS.map((o,i)=><tr key={o.name} style={{borderTop:`1px solid ${C.border}`,background:i%2===0?C.surface:"transparent"}}><td style={{padding:"10px 14px",fontWeight:500,color:C.accent}}>{o.name}</td><td style={{padding:"10px 14px",color:C.textDim,fontFamily:"monospace",fontSize:10}}>{o.url}</td><td style={{padding:"10px 14px",color:C.textMuted}}>{o.type}</td><td style={{padding:"10px 14px"}}><TierBadge t={o.tier}/></td></tr>)}</tbody>
            </table>
          </div>
        </div>
      )}

      <div style={{marginTop:40,paddingTop:16,borderTop:`1px solid ${C.border}`,display:"flex",justifyContent:"space-between",alignItems:"center",paddingBottom:24,flexWrap:"wrap",gap:8}}>
        <div><div style={{fontSize:12,fontWeight:500,color:C.textMuted,letterSpacing:"-0.01em"}}>chris gray strategy</div><div style={{fontSize:10,color:C.textDim,marginTop:2}}>chrisgraystrategy.com</div></div>
        <div style={{fontSize:10,color:C.textDim,textAlign:"right"}}>{t("Prototype · Real coverage data","Prototipo · Datos reales")}<br/>{t("Prepared for Chemistry Cultura","Preparado para Chemistry Cultura")}</div>
      </div>
    </div>
  )
}
