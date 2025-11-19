// lib/services.ts

export type ServiceCategory = "Core Service" | "Automation & Access";

export type Service = {
  id: string;
  name: string;
  category: ServiceCategory;
  short: string;
  long: string;
  image: string;
  highlights?: string[];
};

export const services: Service[] = [
  {
    id: "interior-fitout",
    name: "Interior Fit-Out & Technical Services",
    category: "Core Service",
    short:
      "Complete turnkey fit-out solutions for offices, clinics, hospitality and retail spaces.",
    long:
      "From initial design coordination to final handover, we deliver high-quality interior fit-out works including partitions, ceilings, flooring, MEP coordination and finishes. Our team manages all trades to ensure seamless execution and adherence to your brand and operational requirements.",
    image: "/Interior Fit-Out & Technical Services.jpeg",
    highlights: [
      "Turnkey interior delivery",
      "Coordination with consultants & landlords",
      "Fast-track execution options",
    ],
  },
  {
    id: "electromechanical",
    name: "Electromechanical Equipment Installation & Maintenance",
    category: "Core Service",
    short:
      "MEP installation and preventive maintenance to keep systems safe and efficient.",
    long:
      "We install, test and maintain electromechanical systems including pumps, motors, panels, and control systems. Our preventive maintenance schedules reduce downtime and extend asset life while maintaining compliance with local authority requirements.",
    image: "/Electromechanical Equipment Installation & Maintenance.jpeg",
    highlights: [
      "Planned preventive maintenance (PPM)",
      "Emergency call-out support",
      "Compliance with UAE regulations",
    ],
  },
  {
    id: "plumbing",
    name: "Plumbing & Sanitary Installation",
    category: "Core Service",
    short:
      "Complete plumbing and drainage solutions from rough-in to final fixtures.",
    long:
      "Our plumbing team executes full systems including water supply, drainage, sanitary wares and kitchen connections. We prioritize correct gradients, leak-free joints and high-quality fixtures to avoid future issues and re-work.",
    image: "/Plumbing & Sanitary Installation.jpeg",
    highlights: [
      "Hot & cold water distribution",
      "Drainage & vent piping",
      "Sanitary ware & kitchen connections",
    ],
  },
  {
    id: "glass-aluminum",
    name: "Glass & Aluminum Installation & Maintenance",
    category: "Core Service",
    short:
      "Shopfronts, partitions, doors and glazing systems with precise detailing.",
    long:
      "We design and install glass and aluminum works including office partitions, shopfronts, doors, handrails and facades. Our solutions combine aesthetic appeal with safety, durability and performance.",
    image: "/Glass & Aluminum Installation & Maintenance.jpeg",
    highlights: [
      "Office glass partitions",
      "Automatic & manual glass doors",
      "Customized aluminum profiles",
    ],
  },
  {
    id: "ceilings-partitions",
    name: "False Ceiling & Light Partitions Installation",
    category: "Core Service",
    short:
      "Gypsum ceilings and partitions designed for aesthetics, acoustics and services.",
    long:
      "We execute a wide range of gypsum ceilings and light partitions, coordinating with MEP services to ensure clean lines, smooth finishes and easy access for maintenance.",
    image: "/False Ceiling & Light Partitions Installation.jpeg",
    highlights: [
      "Gypsum & acoustic ceilings",
      "Fire-rated partitions (where required)",
      "Integrated lighting coordination",
    ],
  },
  {
    id: "tiling",
    name: "Floor & Wall Tiling Works",
    category: "Core Service",
    short:
      "High-quality tile and stone installation for floors, walls and feature areas.",
    long:
      "Our team handles detailed tile layout, cutting and installation for ceramic, porcelain, marble and other finishes. We pay special attention to alignment, grout lines and waterproofing in wet areas.",
    image: "/Floor & Wall Tiling Works.jpeg",
    highlights: [
      "Ceramic, porcelain & stone",
      "Bathrooms, lobbies, terraces",
      "Substrate preparation & leveling",
    ],
  },
  {
    id: "hvac",
    name: "Air-Conditioning, Ventilation & Air Filtration Systems",
    category: "Core Service",
    short:
      "Installation and maintenance of HVAC systems for comfortable, efficient spaces.",
    long:
      "We install and service split units, VRF/VRV systems, ducting, ventilation and filtration systems. Our solutions consider cooling loads, air quality, energy efficiency and maintenance access.",
    image: "/Air-Conditioning, Ventilation & Air Filtration Systems.jpeg",
    highlights: [
      "Ducting & air distribution",
      "Filtration & fresh air systems",
      "Annual maintenance contracts",
    ],
  },
    {
    id: "painting",
    name: "Painting Contracting",
    category: "Core Service",
    short:
      "Decorative and protective coatings for interior and exterior surfaces.",
    long:
      "Our painting teams deliver smooth, consistent finishes using high-quality paints suited to each substrate and environment, from offices and apartments to retail units.",
    image: "/Painting Contracting.jpeg",
    highlights: [
      "Surface preparation & priming",
      "Feature & accent walls",
      "Low-VOC options on request",
    ],
  },
  {
    id: "carpentry",
    name: "Carpentry & Wood Flooring Works",
    category: "Core Service",
    short:
      "Doors, skirting, wood floors and custom carpentry for warm, functional spaces.",
    long:
      "We install doors, skirting, engineered wood and laminate flooring along with basic carpentry works to complete interior fit-out packages with precision and durability.",
    image: "/Carpentry & Wood Flooring Works.jpeg",
    highlights: [
      "Wood & laminate flooring",
      "Doors, frames & skirting",
      "Custom carpentry details",
    ],
  },
  {
    id: "electrical",
    name: "Electrical Fittings & Fixtures",
    category: "Core Service",
    short:
      "Safe, reliable power and lighting installations with professional finishes.",
    long:
      "We execute power and lighting installations, DB terminations, containment and fixture installation in line with authority requirements and good engineering practice.",
    image: "/Electrical Fittings & Fixtures.jpeg",
    highlights: [
      "Power & lighting points",
      "DB works & testing",
      "Fixture installation & focusing",
    ],
  },
  {
    id: "marble",
    name: "Marble Polishing & Reinstatement",
    category: "Core Service",
    short:
      "Restoration and polishing of marble and stone to bring back original shine.",
    long:
      "We clean, grind and polish marble and natural stone surfaces, removing scratches, stains and dullness to reinstate their original appearance.",
    image: "/Marble Polishing & Reinstatement.jpeg",
    highlights: [
      "Marble & natural stone",
      "Deep cleaning & polishing",
      "Stain and scratch reduction",
    ],
  },
  {
    id: "cleaning",
    name: "Building Cleaning Services",
    category: "Core Service",
    short:
      "Post-construction and periodic cleaning for safe, presentable environments.",
    long:
      "Our teams perform post-construction cleaning, handover cleaning and periodic cleaning services to keep interiors and common areas clean and ready for use.",
    image: "/Building Cleaning Services.jpeg",
    highlights: [
      "Post-construction cleaning",
      "Handover & snag cleaning",
      "Periodic maintenance cleaning",
    ],
  },
  {
    id: "automation-doors",
    name: "Automatic Doors Installation",
    category: "Automation & Access",
    short:
      "Automatic sliding and swing doors for commercial and residential entrances.",
    long:
      "We supply and install automatic door operators, sensors and safety accessories tailored to your entrance requirements, improving accessibility and convenience.",
    image: "/Automatic Doors Installation.jpeg",
    highlights: [
      "Sliding & swing door operators",
      "Sensors & safety devices",
      "Integration with access control",
    ],
  },
  {
    id: "access-control",
    name: "Access Control Systems",
    category: "Automation & Access",
    short:
      "Card, keypad and biometric access solutions to secure your facilities.",
    long:
      "We design and install access control systems for offices, residential and hospitality properties, controlling who can enter specific zones and logging activity where required.",
    image: "/Access Control Systems.jpeg",
    highlights: [
      "Card & keypad systems",
      "Biometric access options",
      "Door hardware integration",
    ],
  },
  {
    id: "smart-locks",
    name: "Hotel & Residential Smart Locks",
    category: "Automation & Access",
    short:
      "Keycard and smart lock systems for hotels, serviced apartments and residences.",
    long:
      "We supply and install hotel lock systems and smart residential locks that integrate with PMS or mobile apps where required, enhancing guest and resident experience.",
    image: "/Hotel & Residential Smart Locks.jpeg",
    highlights: [
      "Hotel keycard systems",
      "Smartphone-enabled locks",
      "Integration-ready solutions",
    ],
  },
  {
    id: "master-key",
    name: "Master Key Locking Systems",
    category: "Automation & Access",
    short:
      "Master key solutions for buildings, towers and facility portfolios.",
    long:
      "We plan and implement master key systems that balance convenience and security for building owners, facility managers and tenants.",
    image: "/Master Key Locking Systems.jpeg",
    highlights: [
      "Hierarchical key planning",
      "Secure cylinder systems",
      "Flexible for future expansion",
    ],
  },
  {
    id: "mechanical-locks",
    name: "Mechanical Locks Installation",
    category: "Automation & Access",
    short:
      "High-quality mechanical locks and hardware for doors and access points.",
    long:
      "We install a full range of mechanical locks, door closers and hardware to support both standard and high-security applications.",
    image: "/Mechanical Locks Installation.jpeg",
    highlights: [
      "Door locks & cylinders",
      "Closers & hardware",
      "Retrofit & new installations",
    ],
  },
];
