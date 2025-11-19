import { InfoSection } from "@/components/Info-section";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const aboutFeatures = [
  {
    title: "Experienced Team",
    description:
      "Professionals with deep expertise in interior fit-out, MEP, and maintenance projects.",
  },
  {
    title: "Structured Delivery",
    description:
      "Clear organization with project managers, engineers, supervisors and skilled workforce.",
  },
  {
    title: "UAE Presence",
    description:
      "Delivering projects across Dubai and the wider UAE with reliability and consistency.",
  },
];

export default function AboutPage() {
  return (
    <>
      <InfoSection
        eyebrow="About Us"
        title="Experienced Team, Reliable Delivery"
        description="Sama Al Wathba Technical Services L.L.C was founded by a group of professionals in interior fit-out, technical services, and maintenance. We have built strong in-house capabilities through the successful delivery of a wide range of projects to our valued customers."
        features={aboutFeatures}
        imageSrc="/abot2.jpeg" // add a nice image in /public
        imageAlt="Team discussing a project"
        reverse
      />

      <section className="relative section  overflow-hidden   mt-4">
        {/* background blobs */}
        <div
          className="pointer-events-none absolute -top-20 left-1/2 h-[420px] w-[420px]
    -translate-x-1/2 rounded-full blur-[140px] opacity-25
    bg-gradient-to-br from-brand-yellow via-brand-green to-brand-blue"
        />
        <div
          className="pointer-events-none absolute top-1/2 right-0 h-[320px] w-[320px]
    -translate-y-1/2 blur-[150px] opacity-20
    bg-gradient-to-tr from-brand-blue via-brand-green to-brand-yellow"
        />

        <div className="relative grid gap-8 md:grid-cols-[minmax(0,1.3fr)_minmax(0,1.1fr)] items-start">
          {/* Left – who we are */}
          <Card className="border-slate-200/80 bg-white/90 backdrop-blur-sm shadow-sm">
            <CardHeader>
              <CardTitle className="text-lg">Who We Are</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-sm leading-relaxed text-slate-700">
              <p>
                We specialize in facility management and fit-out works. Our
                project management procedures and discipline bring significant
                benefits to clients by ensuring full compliance with cost and
                time constraints, achieving goals defined by both quantitative
                and qualitative objectives.
              </p>
              <p>
                The United Arab Emirates is one of the fastest-growing business
                hubs in the world. Responding to this dynamic environment, we
                have tailored our business around trust, passion, and
                reliability.
              </p>
              <p>
                Our experienced team delivers excellent fit-out solutions,
                decoration works, and high-quality building maintenance services
                at effective cost and within agreed time frames for projects
                throughout Dubai and the wider UAE.
              </p>
            </CardContent>
          </Card>

          {/* Right – structure + division */}
          <div className="space-y-5">
            <Card className="border-slate-200/80 bg-white/90 backdrop-blur-sm shadow-sm">
              <CardHeader>
                <CardTitle className="text-sm md:text-base">
                  Organizational Structure
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-3 text-xs md:text-sm text-slate-600">
                  Our organization is structured to support efficient project
                  delivery and responsive communication.
                </p>
                <ul className="grid grid-cols-2 gap-2 text-[11px] md:text-xs text-slate-700">
                  <li>Managing Director</li>
                  <li>HR &amp; Admin</li>
                  <li>Accounts</li>
                  <li>Estimation</li>
                  <li>Operation Manager</li>
                  <li>Project Manager</li>
                  <li>Site Engineer</li>
                  <li>Site Supervisor</li>
                  <li>Drafting</li>
                  <li>Storekeeper</li>
                  <li>Purchaser</li>
                  <li>Skilled Workers &amp; Helpers</li>
                  <li>Drivers</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-slate-200/80 bg-white/90 backdrop-blur-sm shadow-sm">
              <CardHeader>
                <CardTitle className="text-sm md:text-base">
                  Division: Interior &amp; Fit-Out
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                  Our strength lies in our core team&apos;s extensive
                  construction experience. We deliver construction projects
                  across multiple sectors with strong leadership, clear project
                  scheduling, robust supervision and continuous monitoring of
                  work progress based on contract guidelines and standards.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
}
