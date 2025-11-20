"use client";

import { cn } from "@/components/ui/utils";

type OrgNode = {
  title: string;
  children?: string[];
};

const columns: OrgNode[] = [
  { title: "HR", children: ["Admin"] },
  { title: "Accounts", children: ["Estimation", "Storekeeper"] },
  { title: "Project Manager", children: ["Purchaser", "Drafting"] },
  {
    title: "Operation Manager",
    children: [
      "Site Engineer",
      "Site Supervisor",
      "Skilled Worker",
      "Helpers",
      "Driver",
    ],
  },
];

export function OrganizationalStructureGrid({
  className,
}: {
  className?: string;
}) {
  return (
    <section
      className={cn(
        "section relative py-12 md:py-16 overflow-hidden",
        className
      )}
    >
      <div className="relative z-10 mx-auto max-w-5xl px-4">
        {/* Header */}
        <header className="text-center space-y-3">
          <p className="text-xs tracking-[0.25em] text-[#0054A6]/80 uppercase">
            Company Hierarchy
          </p>
          <h2 className="text-2xl md:text-3xl font-semibold tracking-[0.25em] uppercase">
            ORGANIZATIONAL STRUCTURE
          </h2>
          <div className="mx-auto h-[2px] w-24 bg-gradient-to-r from-[#003F7F] via-[#0054A6] to-[#79A5F5]" />
        </header>

        {/* Managing Director */}
        <div className="mt-10 flex justify-center org-md-wrapper">
          <div className="org-node">
            <span className="org-node-back" />
            <div className="org-node-front">
              <p className="text-xs font-semibold text-slate-900 text-center leading-tight">
                Managing
                <br />
                Director
              </p>
            </div>
          </div>
        </div>

        {/* Columns */}
        <div className="mt-10 org-grid-wrapper">
          <div className="org-grid">
            {columns.map((col) => (
              <div key={col.title} className="org-column">
                {/* Top node */}
                <div className="org-node">
                  <span className="org-node-back" />
                  <div className="org-node-front">
                    <p className="text-xs font-semibold text-slate-900 text-center leading-tight">
                      {col.title}
                    </p>
                  </div>
                </div>

                {/* Children */}
                {col.children && (
                  <div className="mt-6 space-y-4 org-children">
                    {col.children.map((child) => (
                      <div key={child} className="org-node org-node-small">
                        <span className="org-node-back" />
                        <div className="org-node-front">
                          <p className="text-xs font-medium text-slate-900 text-center leading-tight">
                            {child}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Small note */}
      </div>
    </section>
  );
}
