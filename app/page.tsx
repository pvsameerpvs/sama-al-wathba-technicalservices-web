import { HeroSlider } from "@/components/hero-slider";
import ServicesPage from "./services/page";
import { WhyChooseUsSection } from "@/components/why-choose-us";
import { OrganizationalStructure } from "@/components/organizational-structure";
import { ProjectsGrid } from "@/components/projects/projects-grid";
import { InfoSection } from "@/components/Info-section";

export default function HomePage() {
  const homeFeatures = [
    {
      title: "Facility Management",
      description:
        "End-to-end facility management to keep your assets safe, efficient, and always presentable.",
    },
    {
      title: "Interior Fit-Out",
      description:
        "Turnkey interior solutions from concept to handover across offices, healthcare, retail and more.",
    },
    {
      title: "Smart Access",
      description:
        "Automatic doors, access control, and hotel smart lock systems tailored to your property.",
    },
  ];
  return (
    <>
      <HeroSlider />

      <InfoSection
        eyebrow="Introduction"
        title="Interior Fit-Out & Technical Services Specialists"
        description="Sama Al Wathba Technical Services L.L.C was established by a group of professionals in the field of interior fit-out, technical services, and maintenance. Our team combines technical knowledge and extensive experience to deliver projects that meet and exceed our clients’ expectations across Dubai and the UAE."
        features={homeFeatures}
        imageSrc="/about123.jpeg" // you can change to another image later
        imageAlt="Interior fit-out project"
      />
      <ServicesPage />
      <WhyChooseUsSection />
      <OrganizationalStructure />
      <ProjectsGrid />
    </>
  );
}
