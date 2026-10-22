import { useEffect, useState } from "react";
import { Home, LayoutGrid, ListTree, PanelRightClose, PanelRightOpen } from "lucide-react";

export interface SideDiscipline {
  id: string;
  num: string;
  short: string;
  label: string;
}

export interface SideSession {
  id: string;
  key: string;
  num: string;
  label: string;
  group: string;
}

export default function Sidebar({
  disciplines,
  currentDiscipline,
  onSelectDiscipline,
  sessions,
  onHome,
}: {
  disciplines: SideDiscipline[];
  currentDiscipline: string | null;
  onSelectDiscipline: (id: string) => void;
  sessions: SideSession[];
  onHome: () => void;
}) {
  const [tab, setTab] = useState<"sessoes" | "disciplinas">("disciplinas");
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(sessions[0]?.id ?? "");

  useEffect(() => {
    setTab(currentDiscipline === null ? "disciplinas" : "sessoes");
  }, [currentDiscipline]);

  useEffect(() => {
    if (!sessions.length) return;
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) if (entry.isIntersecting) setActive(entry.target.id);
      },
      { rootMargin: "-20% 0px -65% 0px" },
    );
    sessions.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [sessions]);

  const groups: { group: string; items: SideSession[] }[] = [];
  for (const session of sessions) {
    const last = groups[groups.length - 1];
    if (!last || last.group !== session.group) groups.push({ group: session.group, items: [session] });
    else last.items.push(session);
  }

  const body = (
    <div className="flex h-full flex-col">
      <div className="border-b border-app app-bg-2/60 p-4">
        <button
          onClick={() => {
            onHome();
            setOpen(false);
          }}
          className={`flex w-full cursor-pointer items-center gap-2 rounded-xl border px-3 py-2.5 text-[12.5px] font-bold transition-colors ${
            currentDiscipline === null
              ? "border-accent bg-accent text-accent-ink"
              : "border-app surface text-body hover:border-accent hover:text-accent"
          }`}
        >
          <Home size={14} /> Página inicial
        </button>
        <div className="mt-3 grid grid-cols-2 gap-1 rounded-xl border border-app surface p-1">
          {(
            [
              { key: "sessoes", label: "Sessões", icon: ListTree },
              { key: "disciplinas", label: "Disciplinas", icon: LayoutGrid },
            ] as const
          ).map((item) => (
            <button
              key={item.key}
              onClick={() => setTab(item.key)}
              className={`flex cursor-pointer items-center justify-center gap-1.5 rounded-lg px-2 py-1.5 text-[11.5px] font-bold transition-colors ${
                tab === item.key ? "bg-accent text-accent-ink" : "text-muted hover:text-strong"
              }`}
            >
              <item.icon size={13} />
              {item.label}
            </button>
          ))}
        </div>
      </div>

      <div className="no-scrollbar flex-1 overflow-y-auto px-4 py-4">
        {tab === "disciplinas" ? (
          <ul className="space-y-1">
            {disciplines.map((item) => {
              const selected = currentDiscipline === item.id;
              return (
                <li key={item.id}>
                  <button
                    onClick={() => {
                      onSelectDiscipline(item.id);
                      setOpen(false);
                    }}
                    className={`flex w-full cursor-pointer items-start gap-2.5 rounded-xl px-2.5 py-2 text-left transition-colors ${
                      selected ? "border border-accent bg-accent-soft" : "border border-transparent hover:bg-accent-soft"
                    }`}
                  >
                    <span
                      className={`mt-[1px] grid h-6 w-6 shrink-0 place-items-center rounded-md font-mono text-[10.5px] font-black ${
                        selected ? "bg-accent text-accent-ink" : "border border-app text-faint"
                      }`}
                    >
                      {item.num}
                    </span>
                    <span className="min-w-0 leading-tight">
                      <span className={`block truncate text-[12.5px] font-bold ${selected ? "text-accent" : "text-strong"}`}>
                        {item.short}
                      </span>
                      <span className="block truncate text-[10.5px] text-faint">{item.label}</span>
                    </span>
                  </button>
                </li>
              );
            })}
          </ul>
        ) : groups.length ? (
          <div className="space-y-5">
            <p className="pl-2 text-[10.5px] font-bold uppercase tracking-[0.2em] text-faint">Sessões desta disciplina</p>
            {groups.map((group) => (
              <div key={group.group}>
                <p className="mb-1 truncate pl-2 text-[11px] font-bold text-strong">{group.group}</p>
                <ul className="space-y-0.5 border-l border-app">
                  {group.items.map((item) => (
                    <li key={item.key}>
                      <a
                        href={`#${item.id}`}
                        onClick={() => setOpen(false)}
                        className={`toc-link -ml-px flex items-start gap-2.5 py-[7px] pl-3 text-[12.5px] text-muted hover:text-strong ${
                          active === item.id ? "active" : ""
                        }`}
                      >
                        <span className="mt-[2px] font-mono text-[10px] opacity-60">{item.num}</span>
                        <span className="font-medium leading-snug">{item.label}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        ) : (
          <p className="px-1 text-[12.5px] leading-relaxed text-muted">
            Selecione uma disciplina para abrir as sessões dela. O assunto continua no card, dentro da disciplina.
          </p>
        )}
      </div>
    </div>
  );

  return (
    <>
      <button
        onClick={() => setOpen((value) => !value)}
        aria-label="Abrir navegação"
        className="fixed bottom-6 right-20 z-50 grid h-12 w-12 cursor-pointer place-items-center rounded-full border border-accent bg-accent-soft text-accent shadow-lg backdrop-blur xl:hidden"
      >
        {open ? <PanelRightClose size={18} /> : <PanelRightOpen size={18} />}
      </button>
      {open && <div onClick={() => setOpen(false)} className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm xl:hidden" />}
      <aside
        className={`fixed right-0 top-[60px] z-40 h-[calc(100vh-60px)] w-[300px] border-l border-app app-bg/95 backdrop-blur-xl transition-transform duration-300 ${
          open ? "translate-x-0" : "translate-x-full"
        } xl:translate-x-0`}
      >
        {body}
      </aside>
    </>
  );
}
