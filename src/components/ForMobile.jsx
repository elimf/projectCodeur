import React from "react";
import { Interface } from "./Interface";
import { translations } from "../i18n";

const ForMobile = ({ language, setLanguage }) => {
  const t = translations[language];

  return (
    <main className="lg:hidden min-h-screen bg-slate-950 text-white">
      <div className="sticky top-0 z-20 border-b border-white/10 bg-slate-950/90 px-4 py-3 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-3">
          <div>
            <p className="text-sm font-semibold text-white">{t.mobileHeader.title}</p>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setLanguage(language === "fr" ? "en" : "fr")}
              className="rounded-full border border-white/20 bg-white/5 px-3 py-2 text-sm font-semibold text-white"
            >
              {t.switchTo}
            </button>
            <a
              href="#contact"
              className="rounded-full bg-sky-400 px-4 py-2 text-sm font-semibold text-slate-950"
            >
              {t.mobileHeader.contact}
            </a>
          </div>
        </div>
      </div>
      <Interface isMobile language={language} />
    </main>
  );
};

export default ForMobile;
