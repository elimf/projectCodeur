import React from "react";
import { Interface } from "./Interface";

const ForMobile = () => {
  return (
    <main className="lg:hidden min-h-screen bg-slate-950 text-white">
      <div className="sticky top-0 z-20 border-b border-white/10 bg-slate-950/90 px-4 py-3 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-3">
          <div>
            <p className="text-sm font-semibold text-white">Elim Portfolio</p>
          </div>
          <a
            href="#contact"
            className="rounded-full bg-sky-400 px-4 py-2 text-sm font-semibold text-slate-950"
          >
            Contact
          </a>
        </div>
      </div>
      <Interface isMobile />
    </main>
  );
};

export default ForMobile;
