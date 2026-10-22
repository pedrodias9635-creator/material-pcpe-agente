import { ChevronDown, Layers3, Scale, Search, Sparkles } from "lucide-react";
import { useMemo, useState } from "react";
import Quiz from "../components/Quiz";
import { Callout, P, Reveal, SectionShell } from "../components/ui";
import { ChipNav, CompareTable, DeadlineStrip, LawPlate, OrganGrid, RoleGrid, SecurityFlow, SwapBoard, Timeline } from "../components/visual";
import type { StudyModule } from "../data/study";

export default function TopicPage({ topic, anchor = "", embedded = false }: { topic: StudyModule; anchor?: string; embedded?: boolean }) {
  const id = (value: string) => `${anchor}${value}`;
  const [query, setQuery] = useState("");
  const needle = query.trim().toLowerCase();
  const visible = useMemo(
    () => topic.articles.map((article) => ({
      ...article,
      devices: article.devices.filter((device) => {
        if (!needle) return true;
        return [device.tag, device.name, device.hook, device.literal, device.trap, device.mnemonic].join(" ").toLowerCase().includes(needle);
      }),
    })),
    [needle, topic.articles],
  );

  return (
    <>
      {embedded ? null : <ChipNav items={topic.toc.map((item) => ({ ...item, id: id(item.id) }))} />}

      <SectionShell id={id("contexto")} num="01" kicker="Contexto e natureza do tema" title={topic.contextTitle ?? "Segurança pública em Pernambuco, dispositivo por dispositivo"} lead={topic.contextLead ?? "O art. 144 da CF/88 é o espelho. A Constituição estadual repete, amplia e, em alguns pontos, restringe. A banca vive exatamente nessa fresta."}>
        <Reveal className="space-y-5">
          {topic.context.map((paragraph, index) => <P key={index}>{paragraph}</P>)}
          <Callout variant="prova" title="Por que isso cai para Agente de Polícia?">
            <p>{topic.importance}</p>
          </Callout>
          <div className="rounded-2xl border border-white/[0.08] bg-white/[0.025] p-5 sm:p-7">
            <div className="mb-5 flex items-center gap-3">
              <Scale className="text-cyan-300" size={20} />
              <h3 className="font-display text-xl font-semibold text-[#f4f1ea]">Distinções indispensáveis</h3>
            </div>
            <ul className="grid gap-3 sm:grid-cols-2">
              {topic.distinctions.map((item, index) => <li key={index} className="rounded-xl border border-white/[0.07] bg-black/10 p-4 text-[14px] leading-relaxed text-zinc-300"><span className="mr-2 text-yellow-300">◆</span>{item}</li>)}
            </ul>
          </div>
          {topic.clocks && <DeadlineStrip items={topic.clocks} />}
          <OrganGrid organs={topic.organs} kicker={topic.organKicker} title={topic.organTitle} />
          {topic.diagram === "seguranca" && <SecurityFlow />}
          <SwapBoard swaps={topic.swaps} />
          <Timeline items={topic.timeline} />
        </Reveal>
      </SectionShell>

      <Divider />

      <div className="no-justify pt-8">
        <label className="flex items-center gap-3 rounded-2xl border border-white/[0.08] bg-white/[0.03] px-4 py-3">
          <Search size={16} className="text-yellow-300" />
          <input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Filtrar artigo, inciso, pegadinha ou macete" className="w-full bg-transparent text-sm text-zinc-100 outline-none placeholder:text-zinc-600" />
        </label>
      </div>

      {visible.map((article, articleIndex) => (
        <div key={`${articleIndex}-${article.id}`}>
          <SectionShell id={id(article.id)} num={article.num} kicker={article.kicker} title={article.title} lead={article.lead}>
            {article.plate && article.plateSource && <LawPlate source={article.plateSource}>{article.plate}</LawPlate>}
            {article.devices.length === 0 ? (
              <p className="text-sm text-zinc-500">Nenhum dispositivo deste artigo combina com o filtro.</p>
            ) : (
              <div className="space-y-3">
                {article.devices.map((device, deviceIndex) => (
                  <details key={`${deviceIndex}-${device.tag}-${device.name}`} className="study-accordion group rounded-2xl border border-white/[0.08] bg-white/[0.025] open:border-yellow-300/25 open:bg-yellow-300/[0.025]">
                    <summary className="flex cursor-pointer list-none items-center gap-3 px-5 py-5 sm:px-6">
                      <span className={`rounded-md px-2 py-1 font-mono text-[10px] font-bold ${device.revoked ? "bg-rose-400/15 text-rose-200" : "bg-yellow-300 text-[#0a0910]"}`}>{device.tag}</span>
                      <span className="min-w-0 flex-1">
                        <span className="block text-[15px] font-bold text-zinc-100">{device.name}</span>
                        <span className="mt-1 block text-[12px] text-zinc-500">{device.hook}</span>
                      </span>
                      <ChevronDown size={17} className="shrink-0 text-zinc-500 transition-transform group-open:rotate-180" />
                    </summary>
                    <div className="border-t border-white/[0.07] px-5 pb-2 pt-2 sm:px-6">
                      <LawPlate source="Texto literal">{device.literal}</LawPlate>
                      <Callout variant="conceito"><p>{device.context}</p></Callout>
                      <Callout variant="prova"><p>{device.exam}</p></Callout>
                      <Callout variant="pegadinha"><p>{device.trap}</p></Callout>
                      <Callout variant="exemplo"><p>{device.example}</p></Callout>
                      <Callout variant="macete"><p>{device.mnemonic}</p></Callout>
                      {device.cf && (
                        <div className="no-justify my-6 grid gap-2 rounded-2xl border border-cyan-400/25 bg-cyan-400/[0.05] p-4 sm:grid-cols-[88px_1fr]">
                          <span className="text-[10px] font-bold uppercase tracking-[0.16em] text-cyan-300">CE × CF</span>
                          <p className="text-[14px] leading-relaxed text-zinc-300">{device.cf}</p>
                        </div>
                      )}
                    </div>
                  </details>
                ))}
              </div>
            )}
          </SectionShell>
          <Divider />
        </div>
      ))}

      <SectionShell id={id("cargos")} num="08" kicker="Fora do artigo, mas dentro da prova" title={topic.rolesTitle ?? "Secretário de Defesa Social e Delegado-Geral"} lead={topic.rolesLead ?? "A Constituição aponta o vínculo. O nome do cargo e a lista de verbos estão na lei. Não misture as duas fontes."}>
        <Reveal>
          <LawPlate source={topic.rolePlateSource}>{topic.rolePlate}</LawPlate>
          <Callout variant="pegadinha" title="Coordenar não é usurpar a atribuição">
            <p>{topic.roleNote}</p>
          </Callout>
          <RoleGrid roles={topic.roles} />
        </Reveal>
      </SectionShell>

      <Divider />

      <SectionShell id={id("resumo")} num="09" kicker="Quadro-resumo" title={topic.compareTitle ?? "CE/PE contra a CF/88"} lead={topic.compareLead ?? "Leia a coluna do meio como ampliação, restrição ou espelho. É ali que a assertiva nasce."}>
        <Reveal>
          <CompareTable rows={topic.compare} left={topic.compareLeft} right={topic.compareRight} />
          <div className="mt-6 overflow-hidden rounded-2xl border border-white/[0.09]">
            <div className="grid grid-cols-[1fr_1.25fr_1.2fr] bg-yellow-300 px-4 py-3 text-[10px] font-black uppercase tracking-[0.16em] text-[#0a0910] sm:px-6">
              <span>Item</span><span>Regra central</span><span>Pista de prova</span>
            </div>
            {topic.summary.map((row, index) => (
              <div key={`${index}-${row.item}`} className={`grid grid-cols-[1fr_1.25fr_1.2fr] gap-3 px-4 py-4 text-[12px] leading-relaxed sm:px-6 sm:text-sm ${index % 2 ? "bg-white/[0.015]" : "bg-white/[0.035]"}`}>
                <strong className="text-zinc-100">{row.item}</strong><span className="text-zinc-300">{row.rule}</span><span className="text-cyan-200">{row.clue}</span>
              </div>
            ))}
          </div>
          <Callout variant="macete" title="Frase de fechamento">
            <p>{topic.closingMnemonic ?? "Quem ostenta é a PM. Quem apura crime comum é a PC. Quem guarda o presídio é a Polícia Penal. Quem faz defesa civil é o CBM. Quem protege o bem do município é a guarda, se o município a criar. Quem fiscaliza a via é o órgão de trânsito. O Agente não senta na cadeira dos outros."}</p>
          </Callout>
        </Reveal>
      </SectionShell>

      <Divider />

      <SectionShell id={id("questao")} num="10" kicker="Questões-treino" title="Três assertivas no estilo da banca" lead="Responda para liberar o comentário. O gabarito não aparece antes do clique.">
        <Quiz questions={topic.questions} />
      </SectionShell>

      <div className="mb-8 rounded-2xl border border-emerald-400/20 bg-emerald-400/[0.05] p-6 sm:p-8">
        <div className="flex items-start gap-4">
          <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-emerald-300 text-[#0a0910]"><Sparkles size={20} /></span>
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-emerald-300">{topic.closing ? "Módulo concluído" : "Prompt 1 concluído"}</p>
            <p className="mt-2 text-sm leading-relaxed text-zinc-300">{topic.closing ?? "Este módulo cobre só os arts. 101 a 105-B. O Prompt 2, Estatuto do Policial Civil, entra quando você disser continue. O modo claro/escuro fica salvo neste navegador."}</p>
          </div>
        </div>
      </div>
    </>
  );
}

function Divider() {
  return <div className="flex items-center gap-4"><div className="h-px flex-1 bg-gradient-to-r from-transparent via-white/10 to-transparent" /><Layers3 size={15} className="text-zinc-700" /><div className="h-px flex-1 bg-gradient-to-r from-transparent via-white/10 to-transparent" /></div>;
}
