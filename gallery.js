/* The Galleries — hand-rolled renderer. No dependencies. */
"use strict";

const byId = {};
PIECES.forEach(p => byId[p.id] = p);
const WING = WINGS[0];

function hung(){
  return PIECES.slice().sort((a,b)=>(a.favorite??1e9)-(b.favorite??1e9));
}

function srcset(src){
  const m = src.match(/^(.*)-1024\.webp$/);
  if(!m) return null;
  return `${m[1]}-400.webp 400w, ${src} 1024w, ${m[1]}-2048.webp 2048w`;
}
function big(src){
  const m = src.match(/^(.*)-1024\.webp$/);
  return m ? `${m[1]}-2048.webp` : src;
}

function fateLine(f){
  switch(f.kind){
    case "kept": return "The original is kept.";
    case "curated": return "The original hangs in the artist's house" + (f.where?` (${f.where})`:"") + ".";
    case "released": return "The original was released into the world" + (f.channel?` via ${f.channel}`:"") + (f.date?`, ${f.date}`:"") + ".";
    case "claimed": return "The original was claimed" + (f.note?` — ${f.note}`:"") + ".";
    case "destroyed": return f.phrase ? f.phrase :
      (f.patternRetained ? "The original was filed away" + (f.date?`, ${f.date}`:"") + "; the pattern remains." : "The original was destroyed.");
    case "absorbed": return "The original was absorbed into " + (f.into||"another work") + ".";
    case "non-basement": return "The original lives elsewhere in the house" + (f.residence?` (${f.residence})`:"") + ".";
    default: return "The original's fate is undecided.";
  }
}

function el(tag, cls, text){
  const e = document.createElement(tag);
  if(cls) e.className = cls;
  if(text != null) e.textContent = text;
  return e;
}

function imgEl(image, lazy){
  const img = document.createElement("img");
  img.src = image.src; img.alt = image.alt || "";
  if(image.width && image.height){ img.width = image.width; img.height = image.height; }
  const ss = srcset(image.src);
  if(ss){ img.srcset = ss; img.sizes = lazy ? "(max-width:560px) 45vw, 220px" : "min(860px, 92vw)"; }
  if(lazy) img.loading = "lazy";
  img.decoding = "async";
  return img;
}

function renderWall(main){
  document.getElementById("tagline").textContent =
    WING.name + " — " + WING.thesis;
  const wall = el("div","wall");
  for(const p of hung()){
    const fig = el("figure");
    const frame = el("div","frame");
    frame.appendChild(imgEl(p.image, true));
    fig.appendChild(frame);
    const cap = el("figcaption");
    cap.appendChild(el("span","t", p.title || p.id));
    cap.appendChild(document.createTextNode(p.date ? " · " + p.date : ""));
    fig.appendChild(cap);
    fig.onclick = () => { location.hash = "#" + p.id; };
    wall.appendChild(fig);
  }
  main.appendChild(wall);
}

function renderPiece(main, p){
  document.getElementById("tagline").textContent = "";
  const sec = el("section","piece");
  const back = el("a","backlink","← back to the wall");
  back.href = "#";
  sec.appendChild(back);

  // image area with optional state toggle
  const frame = el("div","frame");
  const zoom = el("a","zoom"); zoom.href = big(p.image.src); zoom.target = "_blank"; zoom.rel = "noopener";
  zoom.title = "Open at full size";
  zoom.appendChild(imgEl(p.image, false));
  frame.appendChild(zoom);
  sec.appendChild(frame);

  if(p.states && p.states.length){
    const bar = el("div","statebar");
    bar.appendChild(el("span", null, "States: "));
    const states = [{label: "final", image: p.image}].concat(p.states);
    const buttons = [];
    states.forEach((s, i) => {
      const b = el("button", i===0?"on":null, s.label || ("state "+(i+1)));
      b.onclick = () => {
        zoom.textContent = "";
        zoom.appendChild(imgEl(s.image || p.image, false));
        zoom.href = big((s.image || p.image).src);
        buttons.forEach(x=>x.className=""); b.className = "on";
      };
      buttons.push(b); bar.appendChild(b);
    });
    sec.appendChild(bar);
  }

  const h2 = el("h2", null, p.title || p.id);
  h2.appendChild(document.createTextNode(" "));
  h2.appendChild(el("span","idchip", p.id));
  sec.appendChild(h2);
  const metaBits = [p.date, p.medium, p.dimensions].filter(Boolean).join(" · ");
  if(metaBits) sec.appendChild(el("p","meta", metaBits));
  if(p.twoHand) sec.appendChild(el("p","meta", "Two hands: " + p.twoHand.layers.join("; ")));
  sec.appendChild(el("p","fate", fateLine(p.fate)));

  if(p.card && p.card.exposition)
    sec.appendChild(el("p","exposition", p.card.exposition));

  for(const group of ["ekphrasis","notes"]){
    if(p.card && p.card[group]) for(const e of p.card[group]){
      const box = el("div","ekphrasis");
      const voiceLine = e.voice + (e.date ? " · " + e.date : "");
      if((e.text||"").length > 600){
        const d = el("details","ek");
        d.appendChild(el("summary", null, voiceLine + " — unfold"));
        d.appendChild(el("div","text", e.text));
        box.appendChild(d);
      } else {
        box.appendChild(el("div","voice", voiceLine));
        box.appendChild(el("div","text", e.text));
      }
      sec.appendChild(box);
    }
  }

  if(p.lineage && p.lineage.length){
    const lin = el("p","meta");
    lin.appendChild(document.createTextNode("Relatives: "));
    p.lineage.forEach((l, i) => {
      if(i) lin.appendChild(document.createTextNode(", "));
      const a = el("a", null, l.to); a.href = "#" + l.to;
      lin.appendChild(a);
      lin.appendChild(document.createTextNode(" (" + l.relation + ")"));
    });
    sec.appendChild(lin);
  }

  main.appendChild(sec);
}

function render(){
  const main = document.getElementById("main");
  main.textContent = "";
  const id = decodeURIComponent(location.hash.replace(/^#/,""));
  if(id && byId[id]) renderPiece(main, byId[id]);
  else renderWall(main);
  window.scrollTo(0,0);
}
window.addEventListener("hashchange", render);
render();
