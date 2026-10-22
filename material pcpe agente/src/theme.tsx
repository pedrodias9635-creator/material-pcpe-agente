import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

type Theme = "light" | "dark";

interface ThemeCtx {
  theme: Theme;
  toggle: () => void;
}

const Ctx = createContext<ThemeCtx | null>(null);

function getInitial(): Theme {
  if (typeof window === "undefined") return "dark";
  const saved = localStorage.getItem("pcpe-theme") as Theme | null;
  if (saved === "light" || saved === "dark") return saved;
  return window.matchMedia?.("(prefers-color-scheme: light)").matches ? "light" : "dark";
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>(getInitial);

  useEffect(() => {
    const root = document.documentElement;
    root.dataset.theme = theme;
    root.style.colorScheme = theme;
    localStorage.setItem("pcpe-theme", theme);
    document.querySelector('meta[name="theme-color"]')?.setAttribute("content", theme === "dark" ? "#0a0910" : "#f5f2ea");
  }, [theme]);

  return (
    <Ctx.Provider value={{ theme, toggle: () => setTheme((value) => (value === "dark" ? "light" : "dark")) }}>
      {children}
    </Ctx.Provider>
  );
}

export function useTheme() {
  const value = useContext(Ctx);
  if (!value) throw new Error("useTheme must be used within ThemeProvider");
  return value;
}
