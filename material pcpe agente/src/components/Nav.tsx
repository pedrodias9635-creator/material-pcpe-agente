import { motion, useScroll, useSpring } from "framer-motion";
import { GraduationCap, Moon, Sun } from "lucide-react";
import { useTheme } from "../theme";

export default function Nav({ onHome, partTitle }: { onHome: () => void; partTitle: string }) {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 28, mass: 0.4 });
  const { theme, toggle } = useTheme();

  return (
    <header className="site-nav fixed inset-x-0 top-0 z-50 border-b border-app app-bg/80 backdrop-blur-xl">
      <div className="xl:pr-[300px]">
        <div className="mx-auto flex h-[60px] max-w-6xl items-center justify-between gap-4 px-5 sm:px-8">
          <button onClick={onHome} className="group flex shrink-0 cursor-pointer items-center gap-3">
            <span className="grid h-9 w-9 place-items-center rounded-xl bg-accent text-accent-ink shadow-[0_0_24px_var(--accent-border)] transition-transform group-hover:rotate-6">
              <GraduationCap size={19} strokeWidth={2.2} />
            </span>
            <span className="text-left leading-tight">
              <span className="block text-[13px] font-bold tracking-wide text-strong">Agente da PCPE</span>
              <span className="block max-w-[55vw] truncate text-[10.5px] font-semibold uppercase tracking-[0.18em] text-faint sm:max-w-[420px]">
                {partTitle}
              </span>
            </span>
          </button>
          <button
            onClick={toggle}
            aria-label="Alternar tema claro/escuro"
            title={theme === "dark" ? "Mudar para modo claro" : "Mudar para modo escuro"}
            className="theme-toggle grid h-9 w-9 cursor-pointer place-items-center rounded-full border border-app surface text-body transition-colors hover:border-accent hover:text-accent"
          >
            {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
          </button>
        </div>
      </div>
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-[2px] origin-left bg-gradient-to-r from-amber-400 via-amber-300 to-cyan-400"
        style={{ scaleX }}
      />
    </header>
  );
}
