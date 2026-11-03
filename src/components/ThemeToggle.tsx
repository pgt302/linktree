"use client";

import { useSyncExternalStore } from "react";

const subscribe = (callback: () => void) => {
  const observer = new MutationObserver(callback);
  observer.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ["class"],
  });
  return () => observer.disconnect();
};

const getSnapshot = () => document.documentElement.classList.contains("dark");

export default function ThemeToggle() {
  const isDark = useSyncExternalStore(subscribe, getSnapshot, () => false);

  const toggle = () => {
    const next = !isDark;
    document.documentElement.classList.toggle("dark", next);
    try {
      localStorage.setItem("theme", next ? "dark" : "light");
    } catch {}
  };

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={isDark ? "라이트 모드로 전환" : "다크 모드로 전환"}
      className="glass absolute right-5 top-5 rounded-full px-3.5 py-1.5 text-xs font-medium transition duration-300 hover:bg-white/70 dark:hover:bg-white/12"
      suppressHydrationWarning
    >
      {isDark ? "☀️ 라이트" : "🌙 다크"}
    </button>
  );
}
