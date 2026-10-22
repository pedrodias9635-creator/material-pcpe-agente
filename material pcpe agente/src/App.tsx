import { ArrowUp, GraduationCap } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import DisciplinePage from "./components/DisciplinePage";
import HomePage from "./components/Home";
import Nav from "./components/Nav";
import Sidebar from "./components/Sidebar";
import { ThemeProvider } from "./theme";
import { PROMPT1 } from "./data/prompt1";
import { PROMPT2 } from "./data/prompt2";
import { PROMPT3 } from "./data/prompt3";
import { PROMPT4 } from "./data/prompt4";
import { PROMPT5 } from "./data/prompt5";
import { PROMPT6 } from "./data/prompt6";
import { PROMPT7 } from "./data/prompt7";
import { PROMPT8 } from "./data/prompt8";
import { PROMPT9 } from "./data/prompt9";
import { PROMPT10 } from "./data/prompt10";
import { PROMPT11 } from "./data/prompt11";
import { PROMPT12 } from "./data/prompt12";
import { PROMPT13 } from "./data/prompt13";
import { PROMPT14 } from "./data/prompt14";
import { PROMPT15 } from "./data/prompt15";
import { PROMPT16 } from "./data/prompt16";
import { PROMPT17 } from "./data/prompt17";
import { PROMPT18 } from "./data/prompt18";
import { PROMPT19 } from "./data/prompt19";
import { PROMPT20 } from "./data/prompt20";
import { PROMPT21 } from "./data/prompt21";
import { PROMPT22 } from "./data/prompt22";
import { PROMPT23 } from "./data/prompt23";
import { PROMPT24 } from "./data/prompt24";
import { PROMPT25 } from "./data/prompt25";
import { PROMPT26 } from "./data/prompt26";
import { PROMPT27 } from "./data/prompt27";
import { PROMPT28 } from "./data/prompt28";
import { PROMPT29 } from "./data/prompt29";
import { PROMPT30 } from "./data/prompt30";
import { PROMPT31 } from "./data/prompt31";
import { PROMPT32 } from "./data/prompt32";
import { PROMPT33 } from "./data/prompt33";
import { PROMPT34 } from "./data/prompt34";
import { PROMPT35 } from "./data/prompt35";
import { PROMPT36 } from "./data/prompt36";
import { PROMPT37 } from "./data/prompt37";
import { PROMPT38 } from "./data/prompt38";
import { PROMPT39 } from "./data/prompt39";
import { PROMPT40 } from "./data/prompt40";
import { PROMPT41 } from "./data/prompt41";
import { PROMPT42 } from "./data/prompt42";
import { PROMPT43 } from "./data/prompt43";
import { PROMPT44 } from "./data/prompt44";
import { PROMPT45 } from "./data/prompt45";
import { PROMPT46 } from "./data/prompt46";
import { PROMPT47 } from "./data/prompt47";
import { PROMPT48 } from "./data/prompt48";
import { PROMPT49 } from "./data/prompt49";
import { PROMPT50 } from "./data/prompt50";
import { PROMPT51 } from "./data/prompt51";
import { PROMPT52 } from "./data/prompt52";
import { PROMPT53 } from "./data/prompt53";
import { PROMPT54 } from "./data/prompt54";
import { PROMPT55 } from "./data/prompt55";
import { PROMPT56 } from "./data/prompt56";
import { PROMPT57 } from "./data/prompt57";
import { PROMPT58 } from "./data/prompt58";
import { PROMPT59 } from "./data/prompt59";
import { PROMPT60 } from "./data/prompt60";
import { PROMPT61 } from "./data/prompt61";
import { PROMPT62 } from "./data/prompt62";
import { PROMPT63 } from "./data/prompt63";
import { PROMPT64 } from "./data/prompt64";
import { PROMPT65 } from "./data/prompt65";
import { PROMPT66 } from "./data/prompt66";
import { PROMPT67 } from "./data/prompt67";
import { PROMPT68 } from "./data/prompt68";
import { PROMPT69 } from "./data/prompt69";
import { PROMPT70 } from "./data/prompt70";
import { PROMPT71 } from "./data/prompt71";
import { PROMPT72 } from "./data/prompt72";
import { PROMPT73 } from "./data/prompt73";
import { PROMPT74 } from "./data/prompt74";
import { PROMPT75 } from "./data/prompt75";
import { PROMPT76 } from "./data/prompt76";
import { PROMPT77 } from "./data/prompt77";
import { PROMPT78 } from "./data/prompt78";
import { PROMPT79 } from "./data/prompt79";
import { PROMPT80 } from "./data/prompt80";
import { PROMPT81 } from "./data/prompt81";
import { PROMPT82 } from "./data/prompt82";
import { PROMPT83 } from "./data/prompt83";
import { PROMPT84 } from "./data/prompt84";
import { PROMPT85 } from "./data/prompt85";
import { PROMPT86 } from "./data/prompt86";
import { PROMPT87 } from "./data/prompt87";
import { PROMPT88 } from "./data/prompt88";
import { PROMPT89 } from "./data/prompt89";
import { PROMPT90 } from "./data/prompt90";
import { PROMPT91 } from "./data/prompt91";
import { PROMPT92 } from "./data/prompt92";
import { PROMPT93 } from "./data/prompt93";
import { PROMPT94 } from "./data/prompt94";
import { PROMPT95 } from "./data/prompt95";
import { PROMPT96 } from "./data/prompt96";
import { PROMPT97 } from "./data/prompt97";
import { PROMPT98 } from "./data/prompt98";
import { PROMPT99 } from "./data/prompt99";
import { PROMPT100 } from "./data/prompt100";
import { PROMPT101 } from "./data/prompt101";
import { PROMPT102 } from "./data/prompt102";
import { PROMPT103 } from "./data/prompt103";
import { PROMPT104 } from "./data/prompt104";
import { PROMPT105 } from "./data/prompt105";
import { PROMPT106 } from "./data/prompt106";
import { PROMPT107 } from "./data/prompt107";
import { PROMPT108 } from "./data/prompt108";
import { PROMPT109 } from "./data/prompt109";
import { PROMPT110 } from "./data/prompt110";
import { PROMPT111 } from "./data/prompt111";
import { PROMPT112 } from "./data/prompt112";
import { PROMPT113 } from "./data/prompt113";
import { PROMPT114 } from "./data/prompt114";
import { PROMPT115 } from "./data/prompt115";
import { PROMPT116 } from "./data/prompt116";
import { PROMPT117 } from "./data/prompt117";
import { PROMPT118 } from "./data/prompt118";
import { PROMPT119 } from "./data/prompt119";
import { PROMPT120 } from "./data/prompt120";
import { PROMPT121 } from "./data/prompt121";
import { PROMPT122 } from "./data/prompt122";
import { PROMPT123 } from "./data/prompt123";
import { PROMPT124 } from "./data/prompt124";
import { PROMPT125 } from "./data/prompt125";
import { PROMPT126 } from "./data/prompt126";
import { PROMPT127 } from "./data/prompt127";
import { PROMPT128 } from "./data/prompt128";
import { PROMPT129 } from "./data/prompt129";
import { PROMPT130 } from "./data/prompt130";
import { PROMPT131 } from "./data/prompt131";
import { PROMPT132 } from "./data/prompt132";
import { PROMPT133 } from "./data/prompt133";
import { PROMPT134 } from "./data/prompt134";
import { PROMPT135 } from "./data/prompt135";
import { PROMPT136 } from "./data/prompt136";
import { PROMPT137 } from "./data/prompt137";
import { PROMPT138 } from "./data/prompt138";
import { PROMPT139 } from "./data/prompt139";
import { PROMPT140 } from "./data/prompt140";
import { PROMPT141 } from "./data/prompt141";
import { PROMPT142 } from "./data/prompt142";
import { PROMPT143 } from "./data/prompt143";
import { PROMPT144 } from "./data/prompt144";
import { PROMPT145 } from "./data/prompt145";
import { PROMPT146 } from "./data/prompt146";
import { PROMPT147 } from "./data/prompt147";
import { PROMPT148 } from "./data/prompt148";
import { PROMPT149 } from "./data/prompt149";
import { PROMPT150 } from "./data/prompt150";
import { PROMPT151 } from "./data/prompt151";
import { PROMPT152 } from "./data/prompt152";
import { PROMPT153 } from "./data/prompt153";
import { PROMPT154 } from "./data/prompt154";
import { PROMPT155 } from "./data/prompt155";
import { PROMPT156 } from "./data/prompt156";
import { PROMPT157 } from "./data/prompt157";
import { PROMPT158 } from "./data/prompt158";
import { PROMPT159 } from "./data/prompt159";
import { PROMPT160 } from "./data/prompt160";
import { PROMPT161 } from "./data/prompt161";
import { PROMPT162 } from "./data/prompt162";
import { PROMPT163 } from "./data/prompt163";
import { PROMPT164 } from "./data/prompt164";
import { PROMPT165 } from "./data/prompt165";
import { PROMPT166 } from "./data/prompt166";
import { PROMPT167 } from "./data/prompt167";
import { PROMPT168 } from "./data/prompt168";
import { PROMPT169 } from "./data/prompt169";
import { PROMPT170 } from "./data/prompt170";
import { PROMPT171 } from "./data/prompt171";
import { PROMPT172 } from "./data/prompt172";
import { PROMPT173 } from "./data/prompt173";
import { PROMPT174 } from "./data/prompt174";
import { PROMPT175 } from "./data/prompt175";
import { PROMPT176 } from "./data/prompt176";
import { PROMPT177 } from "./data/prompt177";
import { PROMPT178 } from "./data/prompt178";
import { PROMPT179 } from "./data/prompt179";
import { PROMPT180 } from "./data/prompt180";
import { PROMPT181 } from "./data/prompt181";
import { PROMPT182 } from "./data/prompt182";
import { PROMPT183 } from "./data/prompt183";
import { PROMPT184 } from "./data/prompt184";
import { PROMPT185 } from "./data/prompt185";
import { PROMPT186 } from "./data/prompt186";
import { PROMPT187 } from "./data/prompt187";
import { PROMPT188 } from "./data/prompt188";
import { PROMPT189 } from "./data/prompt189";
import { PROMPT190 } from "./data/prompt190";
import { PROMPT191 } from "./data/prompt191";
import { PROMPT192 } from "./data/prompt192";
import { PROMPT193 } from "./data/prompt193";
import { PROMPT194 } from "./data/prompt194";
import { PROMPT195 } from "./data/prompt195";
import { PROMPT196 } from "./data/prompt196";
import { PROMPT197 } from "./data/prompt197";
import { PROMPT198 } from "./data/prompt198";
import { PROMPT199 } from "./data/prompt199";
import { PROMPT200 } from "./data/prompt200";
import { PROMPT201 } from "./data/prompt201";
import { PROMPT202 } from "./data/prompt202";
import { PROMPT203 } from "./data/prompt203";
import { PROMPT204 } from "./data/prompt204";
import { PROMPT205 } from "./data/prompt205";
import { PROMPT206 } from "./data/prompt206";
import { PROMPT207 } from "./data/prompt207";
import { PROMPT208 } from "./data/prompt208";
import { PROMPT209 } from "./data/prompt209";
import { PROMPT210 } from "./data/prompt210";
import { DISCIPLINES } from "./data/catalog";

const MODULES = [PROMPT1, PROMPT2, PROMPT3, PROMPT4, PROMPT5, PROMPT6, PROMPT7, PROMPT8, PROMPT9, PROMPT10, PROMPT11, PROMPT12, PROMPT13, PROMPT14, PROMPT15, PROMPT16, PROMPT17, PROMPT18, PROMPT19, PROMPT20, PROMPT21, PROMPT22, PROMPT23, PROMPT24, PROMPT25, PROMPT26, PROMPT27, PROMPT28, PROMPT29, PROMPT30, PROMPT31, PROMPT32, PROMPT33, PROMPT34, PROMPT35, PROMPT36, PROMPT37, PROMPT38, PROMPT39, PROMPT40, PROMPT41, PROMPT42, PROMPT43, PROMPT44, PROMPT45, PROMPT46, PROMPT47, PROMPT48, PROMPT49, PROMPT50, PROMPT51, PROMPT52, PROMPT53, PROMPT54, PROMPT55, PROMPT56, PROMPT57, PROMPT58, PROMPT59, PROMPT60, PROMPT61, PROMPT62, PROMPT63, PROMPT64, PROMPT65, PROMPT66, PROMPT67, PROMPT68, PROMPT69, PROMPT70, PROMPT71, PROMPT72, PROMPT73, PROMPT74, PROMPT75, PROMPT76, PROMPT77, PROMPT78, PROMPT79, PROMPT80, PROMPT81, PROMPT82, PROMPT83, PROMPT84, PROMPT85, PROMPT86, PROMPT87, PROMPT88, PROMPT89, PROMPT90, PROMPT91, PROMPT92, PROMPT93, PROMPT94, PROMPT95, PROMPT96, PROMPT97, PROMPT98, PROMPT99, PROMPT100, PROMPT101, PROMPT102, PROMPT103, PROMPT104, PROMPT105, PROMPT106, PROMPT107, PROMPT108, PROMPT109, PROMPT110, PROMPT111, PROMPT112, PROMPT113, PROMPT114, PROMPT115, PROMPT116, PROMPT117, PROMPT118, PROMPT119, PROMPT120, PROMPT121, PROMPT122, PROMPT123, PROMPT124, PROMPT125, PROMPT126, PROMPT127, PROMPT128, PROMPT129, PROMPT130, PROMPT131, PROMPT132, PROMPT133, PROMPT134, PROMPT135, PROMPT136, PROMPT137, PROMPT138, PROMPT139, PROMPT140, PROMPT141, PROMPT142, PROMPT143, PROMPT144, PROMPT145, PROMPT146, PROMPT147, PROMPT148, PROMPT149, PROMPT150, PROMPT151, PROMPT152, PROMPT153, PROMPT154, PROMPT155, PROMPT156, PROMPT157, PROMPT158, PROMPT159, PROMPT160, PROMPT161, PROMPT162, PROMPT163, PROMPT164, PROMPT165, PROMPT166, PROMPT167, PROMPT168, PROMPT169, PROMPT170, PROMPT171, PROMPT172, PROMPT173, PROMPT174, PROMPT175, PROMPT176, PROMPT177, PROMPT178, PROMPT179, PROMPT180, PROMPT181, PROMPT182, PROMPT183, PROMPT184, PROMPT185, PROMPT186, PROMPT187, PROMPT188, PROMPT189, PROMPT190, PROMPT191, PROMPT192, PROMPT193, PROMPT194, PROMPT195, PROMPT196, PROMPT197, PROMPT198, PROMPT199, PROMPT200, PROMPT201, PROMPT202, PROMPT203, PROMPT204, PROMPT205, PROMPT206, PROMPT207, PROMPT208, PROMPT209, PROMPT210];



const PALETTES = ["warm", "cool", "fresh", "azure", "leaf", "ember", "teal", "lime", "rose"] as const;

function BackToTop() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 700);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  if (!visible) return null;
  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Voltar ao topo"
      className="back-top fixed bottom-6 right-6 z-50 grid h-12 w-12 cursor-pointer place-items-center rounded-full bg-accent text-accent-ink shadow-[0_0_30px_var(--accent-border)] transition-transform hover:scale-105 xl:right-[324px]"
    >
      <ArrowUp size={20} />
    </button>
  );
}

function Shell() {
  const [disciplineId, setDisciplineId] = useState<string | null>(null);
  const disciplineIndex = DISCIPLINES.findIndex((item) => item.id === disciplineId);
  const discipline = disciplineIndex >= 0 ? DISCIPLINES[disciplineIndex] : null;
  const topics = useMemo(
    () => (discipline ? discipline.modules.map((module) => ({ module, topic: MODULES[module - 1] })).filter((item) => item.topic) : []),
    [discipline],
  );
  const sessions = useMemo(
    () => topics.flatMap((item, itemIndex) => {
      const prefix = `m${item.module}-`;
      const group = item.topic.short;
      const listed = new Set(item.topic.toc.map((entry) => entry.id));
      const rows = [
        { id: `assunto-${item.module}`, num: String(itemIndex + 1).padStart(2, "0"), label: "Abrir assunto", group },
        ...(listed.has("contexto") ? [] : [{ id: `${prefix}contexto`, num: "01", label: "Contexto", group }]),
        ...item.topic.toc.map((entry) => ({ id: `${prefix}${entry.id}`, num: entry.num, label: entry.label, group })),
        ...(listed.has("resumo") ? [] : [{ id: `${prefix}resumo`, num: "09", label: "Resumo", group }]),
        ...(listed.has("questao") ? [] : [{ id: `${prefix}questao`, num: "10", label: "Questões", group }]),
      ];
      const seen = new Set<string>();
      return rows.map((row) => {
        let key = row.id;
        let n = 2;
        while (seen.has(key)) key = `${row.id}-${n++}`;
        seen.add(key);
        return { ...row, key };
      });
    }),
    [topics],
  );

  const cards = useMemo(() => DISCIPLINES.map((item, itemIndex) => {
    const mods = item.modules.map((module) => MODULES[module - 1]).filter(Boolean);
    return {
      id: item.id,
      index: itemIndex + 1,
      name: item.name,
      note: item.note,
      modules: item.modules.length,
      questions: mods.reduce((sum, module) => sum + module.questions.length, 0),
      palette: PALETTES[itemIndex % PALETTES.length],
    };
  }), []);

  const goDiscipline = (id: string) => {
    setDisciplineId(id);
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
  };
  const goHome = () => {
    setDisciplineId(null);
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
  };

  useEffect(() => {
    document.title = discipline ? `${discipline.name} · Agente de Polícia PCPE` : "Agente da PCPE · Guia por disciplina";
  }, [discipline]);

  return (
    <div className="app-shell noise min-h-screen app-bg antialiased">
      <Nav onHome={goHome} partTitle={discipline ? discipline.name : "Todas as disciplinas do edital"} />
      <div className="xl:pr-[300px]">
        {discipline === null ? (
          <HomePage cards={cards} onSelect={goDiscipline} />
        ) : (
          <DisciplinePage
            key={discipline.id}
            name={discipline.name}
            note={discipline.note}
            index={disciplineIndex + 1}
            total={DISCIPLINES.length}
            palette={PALETTES[disciplineIndex % PALETTES.length]}
            topics={topics}
            previous={disciplineIndex > 0 ? DISCIPLINES[disciplineIndex - 1].id : null}
            next={disciplineIndex >= 0 && disciplineIndex < DISCIPLINES.length - 1 ? DISCIPLINES[disciplineIndex + 1].id : null}
            onPrevious={() => disciplineIndex > 0 && goDiscipline(DISCIPLINES[disciplineIndex - 1].id)}
            onNext={() => disciplineIndex < DISCIPLINES.length - 1 && goDiscipline(DISCIPLINES[disciplineIndex + 1].id)}
          />
        )}

        <footer className="site-footer border-t border-app app-bg-2">
          <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 px-5 py-12 sm:flex-row sm:items-center sm:px-8">
            <div className="flex items-center gap-3">
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-accent text-accent-ink"><GraduationCap size={20} /></span>
              <div className="leading-tight">
                <p className="text-sm font-bold text-strong">Agente de Polícia · PCPE</p>
                <p className="text-[11.5px] text-faint">{discipline ? discipline.name : `${DISCIPLINES.length} disciplinas na capa`}</p>
              </div>
            </div>
            <div className="text-[12px] leading-relaxed text-faint sm:text-right">
              <p>Material didático. Texto conferido até outubro de 2026.</p>
              <p>{discipline ? "Assuntos em cards. Sessões reunidas nesta disciplina." : "Escolha uma disciplina. A sessão não se parte por assunto."}</p>
            </div>
          </div>
        </footer>
      </div>

      <Sidebar
        disciplines={DISCIPLINES.map((item, itemIndex) => ({
          id: item.id,
          num: String(itemIndex + 1).padStart(2, "0"),
          short: item.name,
          label: item.modules.length === 1 ? "1 assunto" : `${item.modules.length} assuntos`,
        }))}
        currentDiscipline={discipline?.id ?? null}
        onSelectDiscipline={goDiscipline}
        sessions={sessions}
        onHome={goHome}
      />
      <BackToTop />
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <Shell />
    </ThemeProvider>
  );
}
