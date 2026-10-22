import { ArrowRight, BookOpenCheck, ChevronLeft, ChevronRight, ListChecks, MousePointerClick } from "lucide-react";
import Hero, { type HeroData } from "./Hero";
import TopicPage from "../sections/TopicPage";
import type { StudyModule } from "../data/study";

const RING: Record<string, string> = {
  warm: "from-yellow-300/25 to-amber-500/5",
  cool: "from-rose-300/25 to-rose-500/5",
  fresh: "from-violet-300/25 to-violet-500/5",
  azure: "from-sky-400/25 to-blue-500/5",
  leaf: "from-emerald-400/25 to-emerald-600/5",
  ember: "from-orange-400/25 to-orange-600/5",
  teal: "from-teal-400/25 to-teal-600/5",
  lime: "from-lime-400/25 to-lime-600/5",
  rose: "from-rose-400/25 to-pink-600/5",
};

export type DisciplineTopic = {
  module: number;
  topic: StudyModule;
};

export default function DisciplinePage({
  name,
  note,
  index,
  total,
  palette,
  topics,
  previous,
  next,
  onPrevious,
  onNext,
}: {
  name: string;
  note: string;
  index: number;
  total: number;
  palette: HeroData["palette"];
  topics: DisciplineTopic[];
  previous: string | null;
  next: string | null;
  onPrevious: () => void;
  onNext: () => void;
}) {
  const questions = topics.reduce((sum, item) => sum + item.topic.questions.length, 0);
  const devices = topics.reduce(
    (sum, item) => sum + item.topic.articles.reduce((inner, article) => inner + article.devices.length, 0),
    0,
  );
  const sessions = topics.reduce((sum, item) => sum + item.topic.toc.length + 3, 0);
  const terms = [...new Set(topics.flatMap((item) => item.topic.terms))].slice(0, 12);

  const hero: HeroData = {
    eyebrow: `Disciplina ${String(index).padStart(2, "0")} de ${total}`,
    title: name,
    subtitle: <>{note}</>,
    description: (
      <>
        Esta sessão reúne a disciplina inteira. Os assuntos estão nos cards. As sessões de estudo descem em seguida, sem abrir uma página nova para cada assunto.
      </>
    ),
    stats: [
      { icon: BookOpenCheck, big: String(topics.length), small: topics.length === 1 ? "assunto em card" : "assuntos em cards" },
      { icon: ListChecks, big: String(questions), small: "questões comentadas" },
      { icon: MousePointerClick, big: String(sessions), small: "sessões nesta disciplina" },
      { icon: BookOpenCheck, big: String(devices), small: "dispositivos comentados" },
    ],
    terms,
    palette,
    termsLabel: "Termos que a banca troca",
    startId: "assuntos",
    questionId: topics[0] ? `m${topics[0].module}-questao` : "sessoes",
  };

  return (
    <>
      <Hero data={hero} />
      <main className="content-main relative bg-blueprint">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <section id="assuntos" className="scroll-mt-24 pb-4 pt-12">
            <p className="text-[10.5px] font-bold uppercase tracking-[0.24em] text-faint">Dentro da disciplina</p>
            <h2 className="mt-2 text-2xl font-black tracking-tight text-strong">Assuntos em cards</h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {topics.map((item, itemIndex) => (
                <a
                  key={item.module}
                  href={`#assunto-${item.module}`}
                  className="group relative overflow-hidden rounded-2xl border border-app surface p-4 transition-colors hover:border-accent"
                >
                  <div className={`pointer-events-none absolute -right-8 -top-10 h-28 w-28 rounded-full bg-gradient-to-br ${RING[palette] ?? RING.warm} opacity-80 blur-2xl`} />
                  <div className="relative flex items-start justify-between gap-3">
                    <span className="grid h-9 w-9 place-items-center rounded-xl border border-app app-bg-2 font-mono text-[12px] font-black text-strong">
                      {String(itemIndex + 1).padStart(2, "0")}
                    </span>
                    <span className="text-[10.5px] font-bold uppercase tracking-wider text-faint">
                      {item.topic.questions.length} questões
                    </span>
                  </div>
                  <h3 className="relative mt-3 text-[15.5px] font-black leading-snug text-strong">{item.topic.short}</h3>
                  <p className="relative mt-1 line-clamp-2 text-[12.5px] leading-relaxed text-muted">{item.topic.subtitle}</p>
                  <span className="relative mt-3 inline-flex items-center gap-1.5 text-[12px] font-bold text-accent">
                    Ir para as sessões
                    <ArrowRight size={13} className="transition-transform group-hover:translate-x-1" />
                  </span>
                </a>
              ))}
            </div>
          </section>

          <section id="sessoes" className="scroll-mt-24 pb-16 pt-8">
            <p className="text-[10.5px] font-bold uppercase tracking-[0.24em] text-faint">Uma sessão só</p>
            <h2 className="mt-2 text-2xl font-black tracking-tight text-strong">Sessões desta disciplina</h2>
            <div className="mt-8 space-y-16">
              {topics.map((item, itemIndex) => (
                <article id={`assunto-${item.module}`} key={item.module} className="scroll-mt-24 border-t border-app pt-10">
                  <p className="text-[10.5px] font-bold uppercase tracking-[0.2em] text-accent">
                    Assunto {String(itemIndex + 1).padStart(2, "0")} · sessões abaixo
                  </p>
                  <h3 className="mt-2 text-xl font-black text-strong">{item.topic.title}</h3>
                  <div className="study-content">
                    <TopicPage topic={item.topic} anchor={`m${item.module}-`} embedded />
                  </div>
                </article>
              ))}
            </div>
            <div className="no-justify mt-12 flex flex-col gap-3 border-t border-app pt-6 sm:flex-row sm:justify-between">
              <button
                disabled={previous === null}
                onClick={onPrevious}
                className="inline-flex cursor-pointer items-center gap-2 rounded-full border border-app px-4 py-2 text-[12.5px] font-bold text-body hover:border-accent hover:text-accent disabled:cursor-not-allowed disabled:opacity-30"
              >
                <ChevronLeft size={15} /> Disciplina anterior
              </button>
              <button
                disabled={next === null}
                onClick={onNext}
                className="inline-flex cursor-pointer items-center gap-2 rounded-full border border-app px-4 py-2 text-[12.5px] font-bold text-body hover:border-accent hover:text-accent disabled:cursor-not-allowed disabled:opacity-30"
              >
                Próxima disciplina <ChevronRight size={15} />
              </button>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
