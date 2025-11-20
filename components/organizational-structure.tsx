"use client";

import { cn } from "@/components/ui/utils";

type NodeProps = {
  x: number;
  y: number;
  label: string;
};

function SvgNode({ x, y, label }: NodeProps) {
  const width = 140;
  const height = 64;
  const radius = 10;
  const lines = label.split("\n");

  return (
    <g transform={`translate(${x}, ${y})`} filter="url(#nodeShadow)">
      {/* BACK card - brand blue */}
      <rect
        x={0}
        y={0}
        width={width}
        height={height}
        rx={radius}
        ry={radius}
        fill="#0054A6"
        opacity={0.97}
      />

      {/* FRONT white card with blue stroke */}
      <rect
        x={6}
        y={6}
        width={width}
        height={height}
        rx={radius}
        ry={radius}
        fill="white"
        stroke="#0054A6"
        strokeWidth={1.5}
      />

      {/* TEXT */}
      <text
        x={6 + width / 2}
        y={6 + height / 2 - (lines.length - 1) * 6}
        textAnchor="middle"
        fontSize={12}
        fill="#111827"
        fontFamily="system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
      >
        {lines.map((line, i) => (
          <tspan key={i} x={6 + width / 2} dy={i === 0 ? 0 : 14}>
            {line}
          </tspan>
        ))}
      </text>
    </g>
  );
}

export function OrganizationalStructure({ className }: { className?: string }) {
  return (
    <section
      className={cn(
        "section relative py-12 md:py-16 overflow-hidden",
        className
      )}
    >
      {/* TOP CENTER BLOB */}
      <div
        className="pointer-events-none absolute -top-10 left-1/2 h-[430px] w-[430px]
          -translate-x-1/2 rounded-full blur-[130px] opacity-25 
          bg-gradient-to-br from-brand-yellow via-brand-green to-brand-blue"
      />

      {/* RIGHT SIDE BLOB */}
      <div
        className="pointer-events-none absolute top-1/2 right-0 h-[350px] w-[350px]
          translate-y-[-40%] blur-[160px] opacity-20 
          bg-gradient-to-tr from-brand-blue via-brand-green to-brand-yellow"
      />

      <div className="relative z-10 mx-auto max-w-6xl px-4">
        <header className="text-center space-y-3">
          <p className="text-xs tracking-[0.25em] text-brand-blue/80 uppercase">
            Company Hierarchy
          </p>
          <h2 className="text-2xl md:text-3xl font-semibold tracking-[0.25em] uppercase">
            ORGANIZATIONAL STRUCTURE
          </h2>
          <div className="mx-auto h-[2px] w-24 bg-gradient-to-r from-[#003F7F] via-[#0054A6] to-[#2A75C5]" />

          <p className="max-w-2xl mx-auto text-sm md:text-base text-slate-700">
            A clear representation of each department’s reporting structure.
          </p>
        </header>

        {/* CARD WRAPPER */}
        <div className="mt-10 rounded-2xl border border-brand-blue/20 bg-white/70 backdrop-blur shadow-[0_18px_45px_rgba(0,0,0,0.08)]">
          <div className="border-b border-brand-blue/10 px-4 py-3 flex items-center justify-between gap-3">
            <p className="text-sm font-medium text-slate-700">
              Internal Organizational Chart
            </p>
            <span className="inline-flex items-center gap-2 rounded-full bg-brand-blue/10 px-3 py-1 text-[11px] font-medium uppercase tracking-wide text-brand-blue">
              <span className="h-2 w-2 rounded-full bg-brand-green animate-pulse" />
              Updated
            </span>
          </div>

          {/* SCROLLABLE SVG CONTAINER */}
          <div className="relative overflow-x-auto pb-6 pt-4">
            <svg
              viewBox="0 0 960 660"
              className="min-w-[760px] max-w-[1200px] mx-auto h-auto"
              preserveAspectRatio="xMidYMid meet"
            >
              {/* Shadows & defs */}
              <defs>
                <filter
                  id="nodeShadow"
                  x="-20%"
                  y="-20%"
                  width="140%"
                  height="140%"
                >
                  <feDropShadow
                    dx="0"
                    dy="4"
                    stdDeviation="4"
                    floodColor="rgba(0,0,0,0.18)"
                  />
                </filter>
              </defs>

              {/* === CONNECTOR LINES – BRAND BLUE === */}
              <g stroke="#0054A6" strokeWidth="2" strokeLinecap="round">
                {/* MD → horizontal */}
                <line x1="486" y1="100" x2="486" y2="140" />
                <line x1="151" y1="140" x2="691" y2="140" />

                {/* HR / Accounts / PM / Operation */}
                <line x1="151" y1="140" x2="151" y2="170" />
                <line x1="331" y1="140" x2="331" y2="170" />
                <line x1="511" y1="140" x2="511" y2="170" />
                <line x1="691" y1="140" x2="691" y2="170" />

                {/* HR → Admin */}
                <line x1="151" y1="230" x2="151" y2="300" />

                {/* Accounts → Estimation → Storekeeper */}
                <line x1="331" y1="230" x2="331" y2="300" />
                <line x1="331" y1="360" x2="331" y2="390" />

                {/* PM → Purchaser / Drafting T-bar */}
                <line x1="511" y1="230" x2="511" y2="270" />
                <line x1="451" y1="270" x2="631" y2="270" />
                <line x1="451" y1="270" x2="451" y2="300" />
                <line x1="631" y1="270" x2="631" y2="300" />

                {/* Operation → Site Engineer */}
                <line x1="691" y1="230" x2="691" y2="300" />

                {/* Site Engineer → Supervisor + Driver */}
                <line x1="691" y1="360" x2="691" y2="380" />
                <line x1="631" y1="380" x2="801" y2="380" />
                <line x1="631" y1="380" x2="631" y2="410" />
                <line x1="801" y1="380" x2="801" y2="410" />

                {/* Supervisor → Skilled Worker → Helpers */}
                <line x1="631" y1="470" x2="631" y2="500" />
                <line x1="631" y1="560" x2="631" y2="590" />
              </g>

              {/* === NODES (EXACT POSITIONS) === */}

              {/* Level 1 */}
              <SvgNode x={415} y={40} label={"Managing\nDirector"} />

              {/* Level 2 */}
              <SvgNode x={80} y={170} label="HR" />
              <SvgNode x={260} y={170} label="Accounts" />
              <SvgNode x={440} y={170} label={"Project\nManager"} />
              <SvgNode x={620} y={170} label={"Operation\nManager"} />

              {/* Level 3 */}
              <SvgNode x={80} y={300} label="Admin" />

              <SvgNode x={260} y={300} label="Estimation" />
              <SvgNode x={260} y={390} label="Storekeeper" />

              <SvgNode x={380} y={300} label="Purchaser" />
              <SvgNode x={560} y={300} label="Drafting" />

              <SvgNode x={620} y={300} label={"Site\nEngineer"} />
              <SvgNode x={560} y={410} label={"Site\nSupervisor"} />
              <SvgNode x={730} y={410} label="Driver" />
              <SvgNode x={560} y={500} label={"Skilled\nWorker"} />
              <SvgNode x={560} y={590} label="Helpers" />
            </svg>
          </div>

          {/* Small legend/footer */}
          <div className="border-t border-brand-blue/10 px-4 py-3 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-500">
            <span>
              <span className="inline-block h-3 w-3 rounded-md bg-[#0054A6] align-middle mr-1" />
              Reporting line from top management to site execution team.
            </span>
            <span className="italic">
              * Structure can be customized based on project size & scope.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
