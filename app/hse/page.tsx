import {
  ShieldCheck,
  AlertTriangle,
  GraduationCap,
  ClipboardCheck,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ServicesGrid } from "@/components/services/services-grid";

export default function HSEPage() {
  return (
    <>
      {/* HSE main content */}
      <section className="relative section space-y-10 overflow-hidden">
        {/* Background blobs */}
        <div
          className="pointer-events-none absolute -top-24 left-1/2 h-[420px] w-[420px]
          -translate-x-1/2 rounded-full blur-[140px] opacity-35
          bg-gradient-to-br from-brand-yellow via-brand-green to-brand-blue"
        />
        <div
          className="pointer-events-none absolute top-1/2 right-0 h-[320px] w-[320px]
          -translate-y-1/2 blur-[150px] opacity-25
          bg-gradient-to-tr from-brand-blue via-brand-green to-brand-yellow"
        />

        <div className="relative space-y-8">
          <header className="max-w-3xl space-y-4">
            <p className="section-subtitle">HSE</p>
            <h1 className="section-title">
              Health, Safety &amp; Environment Commitment
            </h1>
            <div className="flex flex-wrap gap-2 text-[11px] font-semibold text-slate-700">
              <span className="inline-flex items-center gap-1 rounded-full bg-white/70 px-3 py-1 ring-1 ring-brand-blue/20">
                <ShieldCheck className="h-3.5 w-3.5 text-brand-blue" />
                SAFETY FIRST
              </span>
              <span className="inline-flex items-center gap-1 rounded-full bg-white/70 px-3 py-1 ring-1 ring-brand-blue/20">
                <GraduationCap className="h-3.5 w-3.5 text-brand-green" />
                TRAINING &amp; AWARENESS
              </span>
              <span className="inline-flex items-center gap-1 rounded-full bg-white/70 px-3 py-1 ring-1 ring-brand-blue/20">
                <AlertTriangle className="h-3.5 w-3.5 text-brand-yellow" />
                RISK CONTROL
              </span>
            </div>
            <p className="text-sm md:text-base text-slate-600">
              The management and staff of Sama Al Wathba Technical Services
              L.L.C are committed to providing a safe, healthy, and
              environmentally responsible workplace for all employees, clients,
              and partners.
            </p>
          </header>

          <div className="grid gap-10 md:grid-cols-[minmax(0,1.2fr)_minmax(0,1.1fr)] items-start">
            {/* Left column – Objectives as card */}
            <Card className="border-brand-blue/10 bg-white/85 backdrop-blur-sm shadow-sm">
              <CardHeader className="flex flex-row items-center gap-3">
                <div
                  className="flex h-10 w-10 items-center justify-center rounded-full 
                                bg-gradient-to-br from-[#0054A6] via-[#1E6CCD] to-[#69A3FF] 
                                text-white shadow"
                >
                  <ShieldCheck className="h-5 w-5" />
                </div>
                <div>
                  <CardTitle className="text-lg">Our HSE Objectives</CardTitle>
                  <p className="text-xs text-slate-500">
                    Safety, compliance, and continuous improvement.
                  </p>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm leading-relaxed text-slate-700 list-disc ml-4">
                  <li>
                    Provide a safe working environment that prevents
                    occupational accidents, illness, and adverse environmental
                    impact.
                  </li>
                  <li>
                    Identify and manage risks and safety hazards associated with
                    our operations.
                  </li>
                  <li>
                    Establish, maintain, and continually improve our Health,
                    Safety &amp; Environmental procedures based on identified
                    risks.
                  </li>
                  <li>
                    Comply with all relevant HSE laws and regulations of UAE
                    local authorities.
                  </li>
                  <li>
                    Provide a positive, hassle-free work environment where
                    continuous improvement is encouraged.
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Right column – training, audits, quick highlights */}
            <div className="space-y-6">
              <Card className="border-brand-blue/10 bg-white/85 backdrop-blur-sm shadow-sm">
                <CardHeader className="flex flex-row items-center gap-3">
                  <div
                    className="flex h-10 w-10 items-center justify-center rounded-full 
                                  bg-gradient-to-br from-[#0054A6] via-[#1E6CCD] to-[#69A3FF] 
                                  text-white shadow"
                  >
                    <GraduationCap className="h-5 w-5" />
                  </div>
                  <CardTitle className="text-lg">
                    Training &amp; Induction
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm leading-relaxed text-slate-700">
                    All staff and vendors are inducted and trained in accordance
                    with our HSE Management System to meet policy requirements.
                    Regular toolbox talks, site inspections, and refresher
                    trainings are conducted to maintain awareness and reinforce
                    safe working practices.
                  </p>
                  <div className="mt-3 grid gap-2 text-xs text-slate-600 md:grid-cols-2">
                    <div className="rounded-xl bg-[#ECF9FA] px-3 py-2">
                      <p className="font-semibold text-[11px] text-brand-blue">
                        BEFORE STARTING WORK
                      </p>
                      <p>
                        Mandatory HSE induction and activity-specific briefing.
                      </p>
                    </div>
                    <div className="rounded-xl bg-[#ECF9FA] px-3 py-2">
                      <p className="font-semibold text-[11px] text-brand-blue">
                        ON-GOING
                      </p>
                      <p>Toolbox talks, refreshers and on-site coaching.</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-brand-blue/10 bg-white/85 backdrop-blur-sm shadow-sm">
                <CardHeader className="flex flex-row items-center gap-3">
                  <div
                    className="flex h-10 w-10 items-center justify-center rounded-full 
                                  bg-gradient-to-br from-[#0054A6] via-[#1E6CCD] to-[#69A3FF] 
                                  text-white shadow"
                  >
                    <ClipboardCheck className="h-5 w-5" />
                  </div>
                  <CardTitle className="text-lg">
                    Monitoring &amp; Audits
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm leading-relaxed text-slate-700">
                    We monitor our system performance through regular internal
                    audits and site inspections, applying corrective and
                    preventive actions wherever needed.
                  </p>
                  <div className="grid gap-3 text-xs text-slate-600 md:grid-cols-2">
                    <div className="flex items-start gap-2">
                      <AlertTriangle className="mt-0.5 h-4 w-4 text-brand-blue" />
                      <p>
                        Risk assessments and method statements for key
                        activities to control hazards at source.
                      </p>
                    </div>
                    <div className="flex items-start gap-2">
                      <ShieldCheck className="mt-0.5 h-4 w-4 text-brand-blue" />
                      <p>
                        Continuous improvement of our safety culture and overall
                        HSE performance.
                      </p>
                    </div>
                  </div>

                  <div className="rounded-2xl border border-dashed border-brand-blue/30 bg-[#ECF9FA]/80 px-3 py-2 text-[11px] text-slate-700">
                    Emergency procedures, incident reporting and near-miss
                    capturing are part of our standard site controls.
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Related services section */}
      <ServicesGrid />
    </>
  );
}
