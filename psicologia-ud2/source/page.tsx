"use client";

import "./pir.css";
import { useId, useMemo, useState } from "react";
import {
  introductoryReading,
  readings,
  theory,
  vocabulary,
} from "./content";
import type { Activity } from "./content";
import { activities } from "./activities";

type Callout = {
  label: string;
  target: [number, number];
  box: [number, number];
};

type VisualAtlasItem = {
  n: string;
  title: string;
  src: string;
  alt: string;
  focus: string;
  callouts: Callout[];
  anatomy?: boolean;
};

const visualAtlas: VisualAtlasItem[] = [
  {
    n: "03",
    title: "De la recepció a la transmissió",
    src: "./ud2/neurona.webp",
    alt: "Neurona multipolar amb dendrites, cos cel·lular, axó mielinitzat i terminals axònics",
    focus: "Resseguix el senyal d’esquerra a dreta. La neurona integra senyals; no transporta una idea completa.",
    anatomy: true,
    callouts: [
      { label: "Dendrites", target: [14, 35], box: [10, 12] },
      { label: "Cos cel·lular o soma", target: [22, 57], box: [24, 17] },
      { label: "Nucli", target: [22, 50], box: [22, 68] },
      { label: "Axó", target: [35, 50], box: [43, 27] },
      { label: "Beina de mielina", target: [61, 50], box: [62, 22] },
      { label: "Node de Ranvier", target: [55.5, 50], box: [58, 68] },
      { label: "Terminals axònics", target: [91, 50], box: [88, 20] },
    ],
  },
  {
    n: "04",
    title: "El pas químic entre dues neurones",
    src: "./ud2/sinapsi.webp",
    alt: "Sinapsi química amb terminal presinàptic, vesícules, neurotransmissors, espai sinàptic i receptors",
    focus: "Compara els dos moments: el senyal arriba elèctricament al terminal i la comunicació entre cèl·lules és química.",
    anatomy: true,
    callouts: [
      { label: "Terminal presinàptic", target: [40, 22], box: [13, 12] },
      { label: "Vesícules sinàptiques", target: [35, 36], box: [18, 51] },
      { label: "Neurotransmissors", target: [51, 61], box: [66, 18] },
      { label: "Fenedura sinàptica", target: [59, 64], box: [53, 84] },
      { label: "Receptors postsinàptics", target: [70, 72], box: [84, 42] },
      { label: "Membrana postsinàptica", target: [83, 61], box: [84, 84] },
    ],
  },
  {
    n: "05–06",
    title: "Un sistema que connecta cervell i cos",
    src: "./ud2/sistema-nervios.webp",
    alt: "Sistema nerviós central i perifèric en una silueta humana, amb connexions a múscul, cor i aparell digestiu",
    focus: "Distingix estructura i direcció: central/perifèric indica on; aferent/eferent indica cap a on viatja la informació.",
    anatomy: true,
    callouts: [
      { label: "Encèfal", target: [50, 10], box: [35, 10] },
      { label: "Medul·la espinal", target: [50, 30], box: [34, 29] },
      { label: "Nervis perifèrics", target: [41, 41], box: [30, 52] },
      { label: "Via somàtica: múscul", target: [13, 51], box: [15, 73] },
      { label: "Via autònoma: cor", target: [85, 40], box: [84, 20] },
      { label: "Via autònoma: digestió", target: [86, 61], box: [84, 79] },
    ],
  },
  {
    n: "07",
    title: "Estructures diferents, resposta coordinada",
    src: "./ud2/encefal.webp",
    alt: "Vista sagital esquemàtica de l’encèfal amb còrtex, cos callós, estructures profundes, tronc i cerebel",
    focus: "Usa les parts per orientar-te, però evita atribuir una conducta complexa a una sola peça.",
    anatomy: true,
    callouts: [
      { label: "Còrtex cerebral", target: [54, 18], box: [27, 11] },
      { label: "Cos callós", target: [49, 31], box: [24, 29] },
      { label: "Tàlem", target: [49, 43], box: [28, 45] },
      { label: "Hipotàlem", target: [43, 52], box: [26, 60] },
      { label: "Hipocamp", target: [53, 58], box: [73, 81] },
      { label: "Amígdala", target: [44, 60], box: [30, 78] },
      { label: "Tronc encefàlic", target: [57, 72], box: [48, 88] },
      { label: "Cerebel", target: [68, 63], box: [83, 55] },
    ],
  },
  {
    n: "08–09",
    title: "Especialització dins d’una xarxa bilateral",
    src: "./ud2/xarxes-hemisferis.webp",
    alt: "Dos hemisferis connectats amb xarxes funcionals distribuïdes i un mapa cerebral acolorit de comparació",
    focus: "Vista inferior: el costat esquerre anatòmic queda a la dreta de la imatge. Els colors indiquen xarxes, no dos tipus de persona.",
    anatomy: true,
    callouts: [
      { label: "Hemisferi dret", target: [29, 31], box: [18, 10] },
      { label: "Hemisferi esquerre", target: [67, 31], box: [78, 10] },
      { label: "Fissura longitudinal", target: [49, 14], box: [49, 5] },
      { label: "Connexions interhemisfèriques", target: [49, 38], box: [48, 84] },
      { label: "Xarxes distribuïdes", target: [70, 63], box: [82, 78] },
    ],
  },
  {
    n: "10",
    title: "Emoció, memòria i regulació",
    src: "./ud2/emocio-memoria-regulacio.webp",
    alt: "Seqüència d’una estudiant que sent activació abans d’exposar, integra record i emoció, i inicia una resposta regulada",
    focus: "La regulació no elimina l’emoció: integra l’activació, el record del context i l’objectiu per orientar la conducta.",
    callouts: [
      { label: "Activació corporal", target: [17, 45], box: [14, 24] },
      { label: "Record del context", target: [35, 16], box: [37, 8] },
      { label: "Valoració emocional", target: [42, 47], box: [52, 17] },
      { label: "Estratègia de regulació", target: [44, 76], box: [31, 88] },
      { label: "Resposta regulada", target: [82, 45], box: [86, 18] },
    ],
  },
];

function AnnotatedDiagram({ visual, practice = false }: { visual: VisualAtlasItem; practice?: boolean }) {
  const markerId = useId().replaceAll(":", "");
  return (
    <div className={`annotated-diagram ${practice ? "is-practice" : "is-theory"}`}>
      <img src={visual.src} alt={practice ? `Làmina pràctica sense les etiquetes de ${visual.alt.toLocaleLowerCase("ca")}` : visual.alt} loading="lazy" />
      <svg className="annotation-lines" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
        <defs>
          <marker id={markerId} markerWidth="5" markerHeight="5" refX="4" refY="2.5" orient="auto">
            <path d="M0,0 L5,2.5 L0,5 Z" />
          </marker>
        </defs>
        {visual.callouts.map((callout, index) => (
          <g key={callout.label}>
            <line x1={callout.box[0]} y1={callout.box[1]} x2={callout.target[0]} y2={callout.target[1]} markerEnd={`url(#${markerId})`} />
            <circle cx={callout.target[0]} cy={callout.target[1]} r="1.1" />
            <title>{practice ? `Etiqueta ${index + 1}` : callout.label}</title>
          </g>
        ))}
      </svg>
      {visual.callouts.map((callout, index) => (
        <span
          className="diagram-label"
          key={callout.label}
          style={{ left: `${callout.box[0]}%`, top: `${callout.box[1]}%` }}
          aria-label={practice ? `Etiqueta ${index + 1}, espai per respondre` : callout.label}
        >
          {practice ? <><b>{index + 1}</b><i aria-hidden="true" /></> : callout.label}
        </span>
      ))}
    </div>
  );
}

function SectionTitle({ eyebrow, title, text }: { eyebrow: string; title: string; text: string }) {
  return (
    <div className="section-title">
      <span>{eyebrow}</span>
      <h2>{title}</h2>
      <p>{text}</p>
    </div>
  );
}

function ActivityAnswer({ item }: { item: Activity }) {
  if (item.oral) return (
    <div className="oral-model">
      <section><span>1 · QUÈ HAS DE DEMOSTRAR</span><p>{item.oral.purpose}</p></section>
      <section><span>2 · ORDENA L’EXPLICACIÓ</span><ol>{item.oral.steps.map((step) => <li key={step}>{step}</li>)}</ol></section>
      <section className="oral-example"><span>3 · EXEMPLE DE RESPOSTA POSSIBLE</span><p>{item.oral.model}</p><p>Usa aquest model com a bastida: adapta el vocabulari, incorpora un exemple teu i no el memoritzes literalment.</p></section>
      <section className="oral-warning"><span>4 · ERROR QUE HAS D’EVITAR</span><p>{item.oral.avoid}</p></section>
      <section><span>5 · COMPROVACIÓ FINAL</span><ul><li>He definit només els conceptes necessaris?</li><li>He relacionat cada concepte amb una pista?</li><li>He explicat la seqüència i no sols una llista de parts?</li><li>He indicat què no podem concloure?</li></ul></section>
    </div>
  );
  if (!item.pir) return <p>{item.answer}</p>;
  return (
    <div className="pir-answer">
      {item.pir.reference && <section className="pir-prior-study"><span>ABANS DE RESPONDRE</span><p>Aquest concepte ja s’ha treballat en <b>{item.pir.reference}</b>. Torna a eixe apartat si no el pots explicar amb paraules pròpies.</p></section>}
      <section><span>1 · CONCEPTE CLAU</span><p>{item.pir.concept}</p></section>
      <section><span>2 · PISTES DEL CAS</span><p>{item.pir.evidence}</p></section>
      <section><span>3 · PER QUÈ AQUESTA ÉS LA MILLOR RESPOSTA</span><p>{item.answer}</p></section>
      <section><span>4 · PER QUÈ DESCARTEM LES ALTRES</span><p>{item.pir.distractors}</p></section>
      <section><span>5 · TRANSFERIX EL CRITERI</span><p>{item.pir.transfer}</p></section>
    </div>
  );
}

export default function Home() {
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, number>>({});
  const [activeKind, setActiveKind] = useState("Totes");
  const [openAnswers, setOpenAnswers] = useState<number[]>([]);
  const [showAnatomyAnswers, setShowAnatomyAnswers] = useState(false);
  const kinds = ["Totes", "Estil PIR", "Cas tipus test", "Cas", "Classifica", "Error", "Resposta breu", "Oral"];
  const instructions: Record<string, string> = {
    Totes: "Selecciona un bloc. Resol cada activitat al quadern i consulta la correcció després.",
    "Estil PIR": "Llig el cas complet, localitza les dades, identifica què pregunta, descarta opcions que exageren o inventen informació i tria la resposta més precisa. Revisa després tot el raonament.",
    "Cas tipus test": "Tria una de les quatre opcions i justifica-la amb una pista concreta. Comprova la resposta només al final.",
    Cas: "En cada cas: 1) descriu les dades; 2) relaciona estructures i processos; 3) explica la seqüència; 4) assenyala un límit.",
    Classifica: "Identifica el concepte més precís i justifica la classificació amb una característica que el diferencie d’una alternativa pròxima.",
    Error: "Localitza el neuromite o el reduccionisme i reescriu l’afirmació amb una explicació de xarxa, un matís i un límit.",
    "Resposta breu": "Respon en 4–6 línies: definix, relaciona, aplica a un exemple i evita convertir una associació en una causa única.",
    Oral: "Prepara una explicació d’1–2 minuts. Definix només els conceptes necessaris, aplica’ls al cas, incorpora un límit i tanca amb una conclusió prudent.",
  };
  const filtered = useMemo(() => activities.filter((item) => activeKind === "Totes" || item.kind === activeKind), [activeKind]);
  const toggleAnswer = (n: number) =>
    setOpenAnswers((current) => current.includes(n) ? current.filter((x) => x !== n) : [...current, n]);

  return (
    <main>
      <header className="topbar">
        <a className="brand" href="#inici"><b>Ψ</b><span>Quadern d’evidències<small>PSICOLOGIA · UD2 · ÀLEX LLUCH</small></span></a>
        <nav aria-label="Navegació principal">
          <a href="#obertura">Obertura</a><a href="#apren">Aprén</a><a href="#lectures">Lectures</a><a href="#repas">Activitats</a><a href="#oral">Exposició oral</a>
        </nav>
      </header>

      <nav className="quick-index" aria-label="Índex ràpid de la unitat">
        <span>ÍNDEX</span>
        <a href="#inici"><b>00</b> Inici</a><a href="#obertura"><b>01</b> Obertura</a>
        <a href="#apren"><b>02</b> Teoria</a><a href="#vocabulari"><b>03</b> Vocabulari</a>
        <a href="#lectures"><b>04</b> Lectures</a><a href="#practica"><b>05</b> Cas guiat</a>
        <a href="#repas"><b>06</b> Activitats</a><a href="#pir"><b>07</b> Estil PIR</a>
        <a href="#oral"><b>08</b> Exposició oral</a>
      </nav>

      <section className="hero" id="inici">
        <div className="hero-copy">
          <p className="kicker">QUADERN D’EVIDÈNCIES · PSICOLOGIA · 1r DE BATXILLERAT</p>
          <h1>Ment, cervell<br/><em>i conducta</em></h1>
          <p className="lead">Comprén com neurones, xarxes, cos, emoció, memòria i context fan possible una resposta sense reduir la persona a una zona cerebral.</p>
          <div className="hero-actions"><a className="primary" href="#obertura">Comença la unitat</a><a className="secondary" href="#lectures">Llig i comprova</a></div>
          <div className="stats"><span><b>12</b> nuclis teòrics</span><span><b>165</b> activitats finals</span><span><b>4</b> setmanes</span></div>
        </div>
        <div className="method-card">
          <span className="mini">FULL DE RUTA · EVIDÈNCIA 01</span>
          <div><b>01</b><p>Estímul<small>Què inicia la resposta?</small></p></div>
          <div><b>02</b><p>Processament<small>Quines xarxes cooperen?</small></p></div>
          <div><b>03</b><p>Regulació<small>Com es modifica l’acció?</small></p></div>
          <div><b>04</b><p>Límit<small>Què no podem afirmar?</small></p></div>
        </div>
      </section>

      <section className="content-section opening-section" id="obertura">
        <SectionTitle eyebrow="EVIDÈNCIA 00 · EM PREGUNTE" title="Una lectura abans d’obrir el cervell" text="Un text introductori per començar a relacionar cervell, cos, experiència i conducta." />
        <article className="opening-reading">
          <header><span>{introductoryReading.subtitle}</span><h2>{introductoryReading.title}</h2><p>{introductoryReading.source}</p></header>
          <div className="opening-text">{introductoryReading.text.split("\n\n").map((p) => <p key={p}>{p}</p>)}</div>
          <aside className="opening-key"><span>PREGUNTA GUIA DE LA UD2</span><strong>Com transforma el cos una informació en una emoció, una decisió o una conducta?</strong></aside>
          <div className="opening-questions">
            <h3>Comprén, analitza i debat</h3>
            <p>Respon abans d’obrir el model. Compara després el criteri, no la coincidència literal de paraules.</p>
            {introductoryReading.questions.map(([q, a], index) => {
              const id = 900 + index;
              return <section className="opening-question" key={q}>
                <div className="question-label"><b>{String(index + 1).padStart(2, "0")}</b><span>{index < 2 ? "Comprensió" : index < 5 ? "Anàlisi" : "Debat"}</span></div>
                <div><p>{q}</p><button className="answer-button" onClick={() => toggleAnswer(id)}>{openAnswers.includes(id) ? "Oculta el model" : "Compara amb el model"}</button>{openAnswers.includes(id) && <div className="answer"><strong>Model de resposta raonada:</strong> {a}</div>}</div>
              </section>;
            })}
          </div>
        </article>
      </section>

      <section className="content-section" id="apren">
        <SectionTitle eyebrow="EVIDÈNCIA 01 · COMPRENC" title="Teoria desenvolupada per comprendre i aplicar" text="Dotze nuclis complets que integren els dos punts del dossier. Cada desplegable inclou explicació, exemple i error habitual." />
        <div className="theory-grid">
          {theory.map((item) => <article className="theory-card" key={item.n}>
            <span>{item.n}</span><h3>{item.title}</h3><p className="theory-intro">{item.intro}</p>
            <details><summary>Obri l’explicació detallada</summary><div className="theory-detail">
              {item.sections.map(([heading, body]) => <section key={heading}><h4>{heading}</h4><p>{body}</p></section>)}
              <div className="theory-note example"><b>Exemple aplicat</b><p>{item.example}</p></div>
              <div className="theory-note misconception"><b>Error habitual</b><p>{item.misconception}</p></div>
            </div></details><strong>{item.key}</strong>
          </article>)}
        </div>
        <section className="visual-atlas" aria-labelledby="visual-atlas-title">
          <div className="visual-atlas-heading">
            <span>ATLES FISIOLÒGIC · OBSERVA, ASSENYALA I EXPLICA</span>
            <h3 id="visual-atlas-title">Làmines amb fletxes per localitzar cada estructura</h3>
            <p>Seguix cada fletxa fins al punt final. Primer identifica la part; després explica què fa i amb quines altres estructures coopera.</p>
          </div>
          <div className="visual-atlas-grid">
            {visualAtlas.map((visual) => <figure className="visual-figure" key={visual.n}>
              <div className="visual-image-wrap"><AnnotatedDiagram visual={visual} /></div>
              <figcaption>
                <span>NUCLI {visual.n}</span>
                <h4>{visual.title}</h4>
                <p>{visual.focus}</p>
              </figcaption>
            </figure>)}
          </div>
        </section>
        <aside className="source-note">
          <div><span>LECTURA DE SUPORT · PSICOACTIVA</span><h3>La xarxa que connecta cervell, medul·la i conducta</h3><p>Contrasta les funcions del sistema nerviós central i torna després al vocabulari de la unitat.</p></div>
          <a href="https://www.psicoactiva.com/blog/sistema-nervioso-central-estructura-funciones-enfermedades/" target="_blank" rel="noreferrer">Obri el recurs ↗</a>
        </aside>
        <details className="pir-vocabulary" id="vocabulari">
          <summary>Abans de començar: obri el vocabulari imprescindible</summary>
          <div className="pir-vocabulary-intro"><h3>Paraules noves explicades pas a pas</h3><p>Busca el terme, llig una definició breu, comprova l’exemple i fixa’t en la confusió que has d’evitar.</p></div>
          <div className="pir-vocabulary-grid">
            {vocabulary.map(([term, simple, example, contrast]) => <article key={term}><h4>{term}</h4><p>{simple}</p><p><b>Exemple:</b> {example}</p><small>{contrast}</small></article>)}
          </div>
        </details>
      </section>

      <section className="content-section readings-section" id="lectures">
        <SectionTitle eyebrow="EVIDÈNCIA 02 · INTERPRETE" title="Llig, pensa i comprova" text="Tres textos autònoms per aplicar la teoria a l’activació corporal, la neuroimatge i un cas neuropsicològic." />
        <div className="reading-list">{readings.map((reading, readingIndex) => <article className="reading-card" key={reading.title}>
          <div className="reading-heading"><span>{reading.subtitle}</span><h3>{reading.title}</h3></div>
          <div className="reading-text">{reading.text.split("\n\n").map((p) => <p key={p}>{p}</p>)}</div>
          <div className="reading-questions"><h4>Comprova la comprensió</h4><p className="task-guide">Justifica amb informació del text i relaciona-la amb la teoria.</p>
            {reading.questions.map(([q, a], index) => { const id = 1000 + readingIndex * 10 + index; return <div className="reading-question" key={q}><b>{index + 1}</b><div><p>{q}</p><button className="answer-button" onClick={() => toggleAnswer(id)}>{openAnswers.includes(id) ? "Oculta el model" : "Compara amb el model"}</button>{openAnswers.includes(id) && <div className="answer"><strong>Model de resposta:</strong> {a}</div>}</div></div>; })}
          </div>
        </article>)}</div>
      </section>

      <section className="content-section tint" id="practica">
        <SectionTitle eyebrow="EVIDÈNCIA 03 · APLIQUE" title="Aprendre a reconstruir una resposta" text="No busques una zona màgica. Relaciona estímul, xarxes, cos, memòria, regulació i conducta." />
        <div className="practice-layout">
          <article className="featured-case"><span>CAS GUIAT · JÚLIA</span><h3>Quan el cos recorda l’exposició</h3><p>Júlia ha estudiat, però quan veu el grup recorda una burla anterior. Nota el cor accelerat, oblida l’inici i pensa que tornarà a fracassar. Mira el guió, respira i comença per una idea coneguda.</p><ul><li><b>Estímul:</b> veure el grup i sentir el seu nom.</li><li><b>Xarxes:</b> memòria contextual, rellevància emocional i llenguatge.</li><li><b>Cos:</b> activació autònoma; no és una decisió voluntària.</li><li><b>Regulació:</b> guió, respiració i inici graduat.</li><li><b>Límit:</b> el cas no permet diagnosticar un trastorn.</li></ul></article>
          <div className="rules"><div><b>1</b><p><strong>Descriu</strong>Què ocorre abans d’interpretar-ho?</p></div><div><b>2</b><p><strong>Relaciona</strong>Quines estructures i processos cooperen?</p></div><div><b>3</b><p><strong>Explica</strong>Com passa d’una fase a la següent?</p></div><div><b>4</b><p><strong>Limita</strong>Què no prova el cas?</p></div></div>
        </div>
        <section className="anatomy-practice" aria-labelledby="anatomy-practice-title">
          <header>
            <span>PRÀCTICA FISIOLÒGICA · ETIQUETES EN BLANC</span>
            <h3 id="anatomy-practice-title">Reconeix les parts sense mirar el model</h3>
            <p>Escriu a la llibreta el nom corresponent a cada número. Després tria dues estructures i explica com cooperen en una resposta.</p>
          </header>
          <div className="anatomy-practice-grid">
            {visualAtlas.filter((visual) => visual.anatomy).map((visual) => (
              <figure key={visual.n}>
                <AnnotatedDiagram visual={visual} practice />
                <figcaption><b>NUCLI {visual.n}</b><span>{visual.title}</span></figcaption>
              </figure>
            ))}
          </div>
          <div className="anatomy-answer-control">
            <button className="answer-button" aria-expanded={showAnatomyAnswers} onClick={() => setShowAnatomyAnswers((current) => !current)}>
              {showAnatomyAnswers ? "Oculta la plantilla" : "Comprova les etiquetes"}
            </button>
            {showAnatomyAnswers && (
              <div className="anatomy-answer-key">
                {visualAtlas.filter((visual) => visual.anatomy).map((visual) => (
                  <section key={visual.n}>
                    <h4>Nucli {visual.n} · {visual.title}</h4>
                    <ol>{visual.callouts.map((callout) => <li key={callout.label}>{callout.label}</li>)}</ol>
                  </section>
                ))}
              </div>
            )}
          </div>
        </section>
        <section className="visual-practice" aria-labelledby="visual-practice-title">
          <header><span>LABORATORI DE CASOS</span><h3 id="visual-practice-title">Mira primer; interpreta després</h3><p>Després de reconéixer l’anatomia, usa les imatges com a pistes funcionals. Separa sempre observació, hipòtesi i límit.</p></header>
          <div className="visual-practice-layout">
            <figure>
              <div className="case-visual">
                <img src="./ud2/casos-neuropsicologia.webp" alt="Quatre escenes sobre negligència espacial, agnòsia visual, dificultat de producció lingüística i funcions executives" loading="lazy" />
                <span className="case-marker marker-one">01</span><span className="case-marker marker-two">02</span>
                <span className="case-marker marker-three">03</span><span className="case-marker marker-four">04</span>
              </div>
              <figcaption>Quatre patrons funcionals. La numeració servix per analitzar-los, no per etiquetar les persones.</figcaption>
            </figure>
            <div className="visual-challenges">
              {[
                ["01 · EL PLAT", "Descriu dues dades visibles que orienten cap a negligència espacial. Què faltaria per confirmar-la?", "La persona actua només sobre una banda del plat i deixa intacta l’altra. Açò orienta cap a una dificultat d’atenció o representació espacial, però caldrien història clínica, exploració visual i proves neuropsicològiques."],
                ["02 · LA CLAU", "Per què reconéixer l’objecte amb el tacte, però no amb la vista, no equival simplement a «no veure»?", "Perquè pot conservar la captació de forma i color, però falla la vinculació visual amb el significat. El reconeixement tàctil conservat ajuda a diferenciar una agnòsia visual d’una pèrdua sensorial general."],
                ["03 · LES PARAULES", "Quina diferència hi ha entre tindre dificultat per produir llenguatge i no saber què es vol comunicar?", "Una afàsia pot afectar la producció verbal amb comprensió, intenció comunicativa o altres capacitats relativament conservades. No autoritza a concloure falta d’intel·ligència."],
                ["04 · EL PLA", "Quina funció executiva investigaries i quin judici moral has d’evitar?", "Investigaria planificació, manteniment de l’objectiu, inhibició i canvi d’estratègia. Cal evitar dir que la persona és irresponsable o mandrosa: el patró és una hipòtesi funcional, no un judici."],
              ].map(([label, question, answer], index) => {
                const id = 1200 + index;
                return <article key={label}><span>{label}</span><p>{question}</p><button className="answer-button" onClick={() => toggleAnswer(id)}>{openAnswers.includes(id) ? "Oculta el criteri" : "Mostra el criteri"}</button>{openAnswers.includes(id) && <div className="answer">{answer}</div>}</article>;
              })}
            </div>
          </div>
          <div className="transfer-strip">
            <img src="./ud2/neurona.webp" alt="" aria-hidden="true" loading="lazy" />
            <div><span>TRANSFERÈNCIA</span><h4>De la imatge al cas</h4><p>Explica com una informació pot passar de receptors i vies nervioses a xarxes cerebrals, activació corporal, regulació i conducta. Inclou almenys un límit.</p></div>
          </div>
        </section>
      </section>

      <section className="content-section" id="repas">
        <SectionTitle eyebrow="EVIDÈNCIA 04 · PRACTIQUE I REVISE" title="165 activitats per construir evidències" text="El banc final combina test, casos, classificació, correcció de neuromites, resposta breu, exposició oral i 40 activitats estil PIR." />
        <aside className="pir-intro" id="pir"><span>40 ACTIVITATS · ESTIL PIR</span><div><h3>Què és el PIR?</h3><p>El <b>PIR</b> és la via de formació sanitària especialitzada en Psicologia Clínica a Espanya. Ací n’adaptem l’estil a 1r de Batxillerat: casos autònoms, quatre opcions plausibles i una única resposta més precisa, explicada pas a pas.</p></div><a href="https://www.sanidad.gob.es/areas/profesionesSanitarias/formacionEspecializada/home.htm" target="_blank" rel="noreferrer">Font oficial ↗</a></aside>
        <aside className="pir-source-scope">
          <b>Font única: UD2 del dossier</b>
          <p>Les quaranta preguntes, les opcions i les correccions utilitzen únicament conceptes explicats en els punts 1 i 2 de la UD2 del dossier. Cada resposta indica l’apartat concret que cal revisar.</p>
        </aside>
        <div className="kind-tabs" role="group" aria-label="Filtra les activitats per tipus">{kinds.map((kind) => <button key={kind} className={activeKind === kind ? "active" : ""} onClick={() => setActiveKind(kind)}>{kind}</button>)}</div>
        <div className="task-instruction"><span>QUÈ HAS DE FER</span><p>{instructions[activeKind]}</p></div>
        <div className="toolbar" role="status"><span>{filtered.length} activitats</span></div>
        <div className="activity-list">{filtered.map((item) => { const n = activities.indexOf(item) + 1; const isOpen = openAnswers.includes(n); const answerId = `activity-answer-${n}`; return <article key={n}><span className="activity-number">{String(n).padStart(3, "0")}</span><div><small>{item.kind}</small><p>{item.q}</p>{item.options && typeof item.correct === "number" && <div className="test-options" role="group" aria-label={`Opcions de resposta de l’activitat ${n}`}>{item.options.map((option, index) => { const selected = selectedAnswers[n] === index; return <button key={option} type="button" className={`test-option${selected ? " selected" : ""}${selected ? index === item.correct ? " correct" : " incorrect" : ""}`} aria-pressed={selected} onClick={() => setSelectedAnswers((current) => ({...current, [n]: index}))}><span className="test-option-letter">{String.fromCharCode(65 + index)}</span><span>{option}</span></button>; })}</div>}{item.options && selectedAnswers[n] !== undefined && <p className={`test-feedback ${selectedAnswers[n] === item.correct ? "success" : "retry"}`} role="status">{selectedAnswers[n] === item.correct ? `Has triat ${String.fromCharCode(65 + selectedAnswers[n])}. És correcta.` : `Has triat ${String.fromCharCode(65 + selectedAnswers[n])}. No és la correcta; pots tornar a provar abans de consultar la solució.`}</p>}<button className="answer-button" aria-expanded={isOpen} aria-controls={answerId} onClick={() => toggleAnswer(n)}>{isOpen ? "Oculta la resposta" : "Mostra la resposta explicada"}</button>{isOpen && <div className="answer" id={answerId}>{item.options && typeof item.correct === "number" && <strong>Resposta correcta: {String.fromCharCode(65 + item.correct)}. </strong>}<ActivityAnswer item={item} /></div>}</div></article>; })}</div>
      </section>

      <section className="content-section dark" id="oral">
        <SectionTitle eyebrow="EVIDÈNCIA FINAL · EXPLIQUE" title="Explica, no recites" text="Prepara una intervenció de 5–6 minuts guiada per un cas. Usa un guió de paraules clau i relaciona cada concepte amb una pista." />
        <div className="oral-grid"><div className="timeline"><div><b>0:00</b><p>Cas i pregunta</p></div><div><b>0:40</b><p>Conceptes necessaris</p></div><div><b>2:00</b><p>Seqüència aplicada</p></div><div><b>3:40</b><p>Neuromite o alternativa</p></div><div><b>4:40</b><p>Límit i conclusió</p></div></div><div className="rubric"><h3>Rúbrica breu</h3><p><b>40 %</b> Precisió conceptual</p><p><b>30 %</b> Aplicació al cas</p><p><b>20 %</b> Claredat oral</p><p><b>10 %</b> Prudència i fonts</p><strong>No lliges un text complet: usa un guió de paraules clau.</strong></div></div>
      </section>

      <footer><p>UD2 · Ment, cervell i conducta · Psicologia de 1r de Batxillerat</p><b>Àlex Lluch</b></footer>
    </main>
  );
}
