\"use client\";

import { createContext, useContext, useEffect, useState, ReactNode } from \"react\";

type Theme = \"light\" | \"dark\";

type ThemeContextValue = {
  theme: Theme;
  toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextValue | undefined>(undefined);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>(\"dark\");

  useEffect(() => {
    if (typeof window === \"undefined\") return;
    const stored = window.localStorage.getItem(\"lifewise-theme\") as Theme | null;
    const initial = stored ?? \"dark\";
    setTheme(initial);
    document.documentElement.classList.toggle(\"dark\", initial === \"dark\");
  }, []);

  useEffect(() => {
    if (typeof window === \"undefined\") return;
    document.documentElement.classList.toggle(\"dark\", theme === \"dark\");
    window.localStorage.setItem(\"lifewise-theme\", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === \"dark\" ? \"light\" : \"dark\"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) {
    throw new Error(\"useTheme must be used within ThemeProvider\");
  }
  return ctx;
}

