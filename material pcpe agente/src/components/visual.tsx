import {
  ArrowDown,
  Ban,
  Check,
  Flame,
  Gavel,
  Landmark,
  Scale,
  Shield,
  Siren,
  CarFront,
  LockKeyhole,
  type LucideIcon,
} from "lucide-react";
import type { ClockCard, CompareRow, OrganCard, RoleCard, Swap, TimelineItem } from "../data/study";

const TONE: Record<OrganCard["tone"], { text: string; ring: string; wash: string; icon: LucideIcon }> = {
  yellow: { text: "text-yellow-300", ring: "border-yellow-300/30", wash: "bg-yellow-300/[0.07]", icon: Shield },
  cyan: { text: "text-cyan-300", ring: "border-cyan-400/30", wash: "bg-cyan-400/[0.07]", icon: Siren },
  orange: { text: "text-orange-300", ring: "border-orange-400/30", wash: "bg-orange-400/[0.07]", icon: Flame },
  violet: { text: "text-violet-300", ring: "border-violet-400/30", wash: "bg-violet-400/[0.07]", icon: LockKeyhole },
  emerald: { text: "text-emerald-300", ring: "border-emerald-400/30", wash: "bg-emerald-400/[0.07]", icon: Landmark },
  sky: { text: "text-sky-300", ring: "border-sky-400/30", wash: "bg-sky-400/[0.07]", icon: CarFront },
};

export function OrganGrid({ organs, kicker = "Mapa dos órgãos", title = "Quem é quem no art. 101" }: { organs: OrganCard[]; kicker?: string; title?: string }) {
  return (
    <div className="no-justify my-8">
      <div className="mb-4 flex items-end justify-between gap-4">
        <div>
          <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-yellow-300">{kicker}</p>
          <h3 className="mt-1 font-display text-2xl font-semibold text-[#f4f1ea]">{title}</h3>
        </div>
        <span className="hidden font-mono text-[11px] text-zinc-500 sm:inline">rol vigente · out/2026</span>
      </div>
      <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
        {organs.map((organ, index) => {
          const tone = TONE[organ.tone];
          const Icon = tone.icon;
          return (
            <article key={`${organ.sigla}-${index}`} className={`rounded-2xl border ${tone.ring} ${tone.wash} p-4`}>
              <div className="mb-3 flex items-center gap-3">
                <span className={`grid h-10 w-10 place-items-center rounded-xl border ${tone.ring} ${tone.text}`}>
                  <Icon size={18} />
                </span>
                <div>
                  <p className={`font-mono text-[11px] font-bold ${tone.text}`}>{organ.sigla}</p>
                  <h4 className="text-[15px] font-bold text-[#f4f1ea]">{organ.nome}</h4>
                </div>
              </div>
              <p className="text-[13.5px] leading-relaxed text-zinc-300">{organ.funcao}</p>
              <p className="mt-3 text-[12px] leading-relaxed text-zinc-400"><span className="font-bold text-zinc-200">Base. </span>{organ.base}</p>
              <p className="mt-2 text-[12px] leading-relaxed text-rose-200"><span className="font-bold">Não é. </span>{organ.nao}</p>
            </article>
          );
        })}
      </div>
    </div>
  );
}

export function SecurityFlow() {
  return (
    <div className="no-justify my-8 rounded-3xl border border-white/[0.08] bg-white/[0.025] p-5 sm:p-7">
      <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-yellow-300">Cadeia de comando</p>
      <h3 className="mt-1 font-display text-2xl font-semibold text-[#f4f1ea]">A banca troca o vínculo. O texto não troca.</h3>
      <div className="mt-6 grid gap-3 lg:grid-cols-[1fr_auto_1.2fr]">
        <div className="rounded-2xl border border-yellow-300/30 bg-yellow-300/[0.08] p-4">
          <p className="font-mono text-[10px] font-bold uppercase tracking-[0.16em] text-yellow-300">Art. 101, §2º</p>
          <p className="mt-2 text-lg font-bold text-[#f4f1ea]">Governador</p>
          <p className="mt-1 text-[13px] leading-relaxed text-zinc-300">Estabelece a política de defesa social e coordena as ações. O Conselho de Defesa Social assessora. Não substitui o Governador.</p>
        </div>
        <div className="grid place-items-center text-zinc-600"><ArrowDown className="lg:-rotate-90" size={18} /></div>
        <div className="grid gap-3">
          <div className="rounded-2xl border border-cyan-400/25 bg-cyan-400/[0.06] p-4">
            <p className="font-mono text-[10px] font-bold uppercase tracking-[0.16em] text-cyan-300">Art. 102 · integrantes da SDS</p>
            <p className="mt-2 text-[14px] font-bold text-[#f4f1ea]">Polícia Civil · Polícia Militar · Corpo de Bombeiros Militar</p>
            <p className="mt-1 text-[13px] leading-relaxed text-zinc-300">Secretaria de Estado responsável pela defesa social. Estatutos próprios, carreira, hierarquia e disciplina.</p>
          </div>
          <div className="rounded-2xl border border-violet-400/25 bg-violet-400/[0.06] p-4">
            <p className="font-mono text-[10px] font-bold uppercase tracking-[0.16em] text-violet-300">Art. 102 e art. 104 · outro vínculo</p>
            <p className="mt-2 text-[14px] font-bold text-[#f4f1ea]">Polícia Penal</p>
            <p className="mt-1 text-[13px] leading-relaxed text-zinc-300">Vinculada ao órgão administrador do sistema penal. Entrar no rol do art. 101 não a coloca dentro da SDS.</p>
          </div>
        </div>
      </div>
      <div className="mt-3 grid gap-3 sm:grid-cols-2">
        <div className="rounded-2xl border border-white/[0.08] bg-black/10 p-4">
          <p className="text-[12px] font-bold text-emerald-300">Município · art. 105-A e art. 101, V</p>
          <p className="mt-1 text-[13px] leading-relaxed text-zinc-300">Guarda municipal é faculdade (“poderão”). Desde a EC 70/2026 também figura no rol de órgãos permanentes.</p>
        </div>
        <div className="rounded-2xl border border-white/[0.08] bg-black/10 p-4">
          <p className="text-[12px] font-bold text-sky-300">Via pública · art. 105-B e art. 101, VI</p>
          <p className="mt-1 text-[13px] leading-relaxed text-zinc-300">Educação, engenharia e fiscalização de trânsito: órgãos executivos de trânsito e seus agentes, em carreira. Não é cadeira do Agente de Polícia.</p>
        </div>
      </div>
    </div>
  );
}

export function SwapBoard({ swaps }: { swaps: Swap[] }) {
  return (
    <div className="no-justify my-8">
      <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-rose-300">Trocas clássicas</p>
      <h3 className="mt-1 mb-4 font-display text-2xl font-semibold text-[#f4f1ea]">O que a banca escreve × o que o texto diz</h3>
      <div className="overflow-hidden rounded-2xl border border-white/[0.09]">
        <div className="grid grid-cols-2 bg-rose-400 px-4 py-3 text-[10px] font-black uppercase tracking-[0.16em] text-[#0a0910] sm:px-5">
          <span>Armadilha</span><span>Texto vigente</span>
        </div>
        {swaps.map((swap, index) => (
          <div key={`${index}-${swap.wrong}`} className={`grid grid-cols-2 gap-3 px-4 py-3.5 text-[12.5px] leading-relaxed sm:px-5 sm:text-[13.5px] ${index % 2 ? "bg-white/[0.015]" : "bg-white/[0.035]"}`}>
            <span className="text-rose-200"><Ban size={12} className="mr-1.5 inline" />{swap.wrong}</span>
            <span className="text-emerald-200"><Check size={12} className="mr-1.5 inline" />{swap.right}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export function Timeline({ items }: { items: TimelineItem[] }) {
  return (
    <div className="no-justify my-8">
      <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-yellow-300">Emendas que a prova usa</p>
      <h3 className="mt-1 mb-5 font-display text-2xl font-semibold text-[#f4f1ea]">Do texto de 1989 ao rol de 2026</h3>
      <ol className="relative space-y-0 border-l border-yellow-300/25 pl-5">
        {items.map((item, index) => (
          <li key={`${index}-${item.when}-${item.title}`} className="relative pb-5">
            <span className="absolute -left-[26px] top-1.5 h-2.5 w-2.5 rounded-full bg-yellow-300 shadow-[0_0_12px_rgba(253,224,71,.7)]" />
            <p className="font-mono text-[11px] font-bold text-yellow-300">{item.when}</p>
            <p className="mt-0.5 text-[14px] font-bold text-[#f4f1ea]">{item.title}</p>
            <p className="mt-1 text-[13px] leading-relaxed text-zinc-400">{item.text}</p>
          </li>
        ))}
      </ol>
    </div>
  );
}

export function RoleGrid({ roles }: { roles: RoleCard[] }) {
  return (
    <div className="no-justify grid gap-3 md:grid-cols-2">
      {roles.map((role, index) => (
        <article key={`${index}-${role.role}`} className="rounded-2xl border border-white/[0.08] bg-white/[0.025] p-5">
          <div className="mb-3 flex items-center gap-2">
            <Scale size={16} className="text-yellow-300" />
            <h3 className="text-[16px] font-bold text-[#f4f1ea]">{role.role}</h3>
          </div>
          <p className="mb-3 text-[12px] leading-relaxed text-zinc-500">{role.source}</p>
          <p className="mb-1.5 text-[10px] font-bold uppercase tracking-[0.16em] text-emerald-300">Faz</p>
          <ul className="mb-3 space-y-1.5">
            {role.does.map((item, itemIndex) => <li key={`${itemIndex}-${item}`} className="text-[13px] leading-relaxed text-zinc-300"><Check size={12} className="mr-1.5 inline text-emerald-300" />{item}</li>)}
          </ul>
          <p className="mb-1.5 text-[10px] font-bold uppercase tracking-[0.16em] text-rose-300">Não faz</p>
          <ul className="space-y-1.5">
            {role.doesNot.map((item, itemIndex) => <li key={`${itemIndex}-${item}`} className="text-[13px] leading-relaxed text-zinc-300"><Ban size={12} className="mr-1.5 inline text-rose-300" />{item}</li>)}
          </ul>
        </article>
      ))}
    </div>
  );
}

const EFFECT: Record<CompareRow["effect"], { label: string; cls: string }> = {
  amplia: { label: "Amplia", cls: "bg-emerald-400/15 text-emerald-200" },
  restringe: { label: "Restringe", cls: "bg-rose-400/15 text-rose-200" },
  espelha: { label: "Espelha", cls: "bg-cyan-400/15 text-cyan-200" },
  cria: { label: "Cria", cls: "bg-yellow-300/15 text-yellow-200" },
  separa: { label: "Separa", cls: "bg-violet-400/15 text-violet-200" },
};

export function CompareTable({ rows, left = "CE/PE", right = "CF/88" }: { rows: CompareRow[]; left?: string; right?: string }) {
  return (
    <div className="no-justify overflow-hidden rounded-2xl border border-white/[0.09]">
      <div className="hidden grid-cols-[0.8fr_1.2fr_1.2fr_0.7fr] bg-yellow-300 px-4 py-3 text-[10px] font-black uppercase tracking-[0.16em] text-[#0a0910] sm:grid sm:px-5">
        <span>Tema</span><span>{left}</span><span>{right}</span><span>Efeito</span>
      </div>
      {rows.map((row, index) => (
        <div key={`${index}-${row.item}`} className={`grid gap-2 px-4 py-4 sm:grid-cols-[0.8fr_1.2fr_1.2fr_0.7fr] sm:px-5 ${index % 2 ? "bg-white/[0.015]" : "bg-white/[0.035]"}`}>
          <strong className="text-[13px] text-zinc-100">{row.item}</strong>
          <span className="text-[12.5px] leading-relaxed text-zinc-300"><span className="font-bold text-yellow-300 sm:hidden">{left} · </span>{row.ce}</span>
          <span className="text-[12.5px] leading-relaxed text-zinc-300"><span className="font-bold text-cyan-300 sm:hidden">{right} · </span>{row.cf}</span>
          <span><span className={`inline-flex rounded-full px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.12em] ${EFFECT[row.effect].cls}`}>{EFFECT[row.effect].label}</span></span>
        </div>
      ))}
    </div>
  );
}

export function LawPlate({ source, children }: { source: string; children: string }) {
  return (
    <blockquote className="law-plate my-5 rounded-2xl border border-yellow-300/25 p-5 sm:p-6">
      <p className="no-justify mb-3 flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.18em] text-yellow-300">
        <Gavel size={13} /> {source}
      </p>
      <p className="font-display whitespace-pre-line text-[15.5px] leading-[1.7] text-[#f4f1ea]">{children}</p>
    </blockquote>
  );
}

export function DeadlineStrip({ items }: { items: ClockCard[] }) {
  return (
    <div className="no-justify my-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
      {items.map((item, index) => (
        <article key={`${index}-${item.label}`} className="rounded-2xl border border-yellow-300/25 bg-yellow-300/[0.06] p-4">
          <p className="font-display text-3xl font-semibold text-yellow-300">{item.value}</p>
          <p className="mt-1 text-[14px] font-bold text-[#f4f1ea]">{item.label}</p>
          <p className="mt-1 text-[12px] leading-relaxed text-zinc-400">{item.source}</p>
        </article>
      ))}
    </div>
  );
}

export function ChipNav({ items }: { items: { id: string; label: string }[] }) {
  return (
    <div className="chip-nav no-justify sticky top-[64px] z-30 -mx-5 mb-2 border-b border-white/[0.06] bg-[#0a0910]/85 px-5 py-3 backdrop-blur-xl sm:-mx-8 sm:px-8 xl:hidden">
      <div className="flex gap-2 overflow-x-auto">
        {items.map((item) => (
          <a key={item.id} href={`#${item.id}`} className="shrink-0 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-[11px] font-bold text-zinc-300 hover:border-yellow-300/50 hover:text-yellow-200">
            {item.label}
          </a>
        ))}
      </div>
    </div>
  );
}
