import { Bot, ShieldCheck, Cpu } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-slate-950">

      <div className="max-w-6xl mx-auto px-4 py-6">

        <div className="flex flex-col md:flex-row items-center justify-between gap-4">

          {/* Logo */}

          <div className="flex items-center gap-3">

            <div className="bg-blue-600 p-2 rounded-xl">
              <Bot className="text-white w-5 h-5" />
            </div>

            <div>
              <h3 className="text-white font-semibold">
                NEURA-1
              </h3>

              <p className="text-sm text-slate-400">
                Arabic-first AI Cloud System
              </p>
            </div>

          </div>

          {/* Status */}

          <div className="flex flex-wrap justify-center gap-4 text-sm">

            <div className="flex items-center gap-2 text-green-400">
              <ShieldCheck size={16} />
              Secure API
            </div>

            <div className="flex items-center gap-2 text-blue-400">
              <Cpu size={16} />
              Version 1.0.0
            </div>

          </div>

        </div>

        <div className="border-t border-slate-800 mt-5 pt-4 text-center text-slate-500 text-sm">
          © 2026 NEURA-1 • All Rights Reserved
        </div>

      </div>

    </footer>
  );
}