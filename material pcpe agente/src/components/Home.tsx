import { motion } from "framer-motion";
import { ArrowRight, BookOpenCheck, GraduationCap, Layers, ListChecks } from "lucide-react";
import NetworkCanvas from "./NetworkCanvas";

const ease = [0.22, 1, 0.36, 1] as const;

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

const DOT: Record<string, string> = {
  warm: "bg-yellow-300",
  cool: "bg-rose-300",
  fresh: "bg-violet-300",
  azure: "bg-sky-400",
  leaf: "bg-emerald-400",
  ember: "bg-orange-400",
  teal: "bg-teal-400",
  lime: "bg-lime-400",
  rose: "bg-rose-400",
};

export type DisciplineCard = {
  id: string;
  index: number;
  name: string;
  note: string;
  modules: number;
  questions: number;
  palette: string;
};

export default function HomePage({
  cards,
  onSelect,
}: {
  cards: DisciplineCard[];
  onSelect: (id: string) => void;
}) {
  const subjects = cards.reduce((sum, card) => sum + card.modules, 0);
  const questions = cards.reduce((sum, card) => sum + card.questions, 0);

  return (
    <div id="inicio" className="relative">
      <section className="relative flex min-h-[82svh] items-center overflow-hidden">
        <NetworkCanvas className="absolute inset-0 h-full w-full opacity-70" variant="warm" />
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background: "linear-gradient(to bottom, var(--bg-hero-fade-0), transparent, var(--bg-hero-fade))",
          }}
        />
        <div className="pointer-events-none absolute -top-40 left-1/2 h-[500px] w-[900px] -translate-x-1/2 rounded-full bg-yellow-300/[0.07] blur-[120px]" />

        <div className="relative mx-auto w-full max-w-7xl px-5 pb-16 pt-28 sm:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease }}
            className="max-w-3xl"
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-accent bg-accent-soft px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-[0.18em] text-accent">
              <GraduationCap size={13} /> Concurso PCPE · Cargo de Agente
            </span>
            <h1 className="mt-6 text-4xl font-black leading-[1.05] tracking-tight text-strong sm:text-6xl">
              Guia de estudo <span className="text-accent">por disciplina</span>
            </h1>
            <p className="mt-5 max-w-2xl text-justify text-[15.5px] leading-relaxed text-body sm:text-[17px]">
              Só as disciplinas do edital de Agente da PCPE. Improbidade, licitação e os títulos do Código Penal
              não são cards da capa: entram como assunto dentro da disciplina.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {[
                { icon: Layers, big: String(cards.length), small: "disciplinas" },
                { icon: BookOpenCheck, big: String(subjects), small: "assuntos" },
                { icon: ListChecks, big: String(questions), small: "questões comentadas" },
              ].map((item) => (
                <div key={item.small} className="flex items-center gap-3 rounded-2xl border border-app surface px-4 py-3">
                  <span className="grid h-9 w-9 place-items-center rounded-xl bg-accent-soft text-accent">
                    <item.icon size={17} />
                  </span>
                  <span className="leading-tight">
                    <span className="block text-[17px] font-black text-strong">{item.big}</span>
                    <span className="block text-[11px] font-semibold uppercase tracking-wider text-faint">{item.small}</span>
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="relative border-t border-app bg-blueprint">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20">
          <p className="text-[10.5px] font-bold uppercase tracking-[0.24em] text-faint">Escolha por onde começar</p>
          <h2 className="mt-2 text-2xl font-black tracking-tight text-strong sm:text-3xl">
            As <span className="text-accent">{cards.length} disciplinas</span> do guia
          </h2>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {cards.map((card, index) => (
              <motion.button
                key={card.id}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.45, ease, delay: Math.min(index * 0.03, 0.3) }}
                onClick={() => onSelect(card.id)}
                className="group relative cursor-pointer overflow-hidden rounded-2xl border border-app surface p-5 text-left transition-colors hover:border-accent"
              >
                <div
                  className={`pointer-events-none absolute -right-10 -top-16 h-40 w-40 rounded-full bg-gradient-to-br ${RING[card.palette] ?? RING.warm} opacity-80 blur-3xl transition-opacity group-hover:opacity-100`}
                />
                <div className="relative flex items-start justify-between gap-3">
                  <span className="grid h-10 w-10 place-items-center rounded-xl border border-app app-bg-2 font-mono text-[13px] font-black text-strong">
                    {String(card.index).padStart(2, "0")}
                  </span>
                  <span className={`mt-1 h-2 w-2 rounded-full ${DOT[card.palette] ?? DOT.warm}`} />
                </div>
                <h3 className="relative mt-4 text-[17px] font-black leading-snug text-strong">{card.name}</h3>
                <p className="relative mt-3 line-clamp-3 text-justify text-[13px] leading-relaxed text-muted">{card.note}</p>
                <div className="relative mt-4 flex flex-wrap items-center gap-2">
                  <span className="rounded-full border border-app px-2.5 py-1 text-[10.5px] font-bold uppercase tracking-wider text-muted">
                    {card.modules === 1 ? "1 assunto" : `${card.modules} assuntos`}
                  </span>
                  {card.questions > 0 && (
                    <span className="rounded-full border border-accent bg-accent-soft px-2.5 py-1 text-[10.5px] font-bold uppercase tracking-wider text-accent">
                      {card.questions} questões
                    </span>
                  )}
                </div>
                <span className="relative mt-5 inline-flex items-center gap-2 text-[12.5px] font-bold text-accent">
                  Estudar agora
                  <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                </span>
              </motion.button>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
