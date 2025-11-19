// lib/projects.ts

export type Project = {
  id: string;
  title: string;
  description: string;
  location?: string;
  scope?: string;
  images: string[]; // 3 images per project
};

export const projects: Project[] = [
  {
    id: "al-zarah-hospital",
    title: "Al Zarah Hospital, Dubai",
    description:
      "Fit-out works for hospital areas with strict healthcare and hygiene standards.",
    location: "Dubai, UAE",
    scope: "Healthcare fit-out, partitions, ceilings, MEP coordination, finishes.",
    images: [
      "/AL1ZARAHHOSPITALDUBAI.png",
      "/AL2ZARAHHOSPITALDUBAI.png",
      "/AL3ZARAHHOSPITALDUBAI.png",
    ],
  },
  {
    id: "city-walk-dental",
    title: "City Walk Dental Clinic",
    description:
      "Complete interior fit-out for a modern dental clinic with patient-focused design.",
    location: "City Walk, Dubai, UAE",
    scope: "Clinic planning, treatment rooms, reception, waiting areas, MEP & finishes.",
    images: [
      "/CITYWALKDENTALCLINIC1.png",
      "/CITYWALKDENTALCLINIC2.png",
      "/CITYWALKDENTALCLINIC3.png",
    ],
  },
  {
    id: "difc-gd02-l05",
    title: "DIFC – GD02 L05",
    description:
      "Full office fit-out in Dubai International Financial Centre.",
    location: "DIFC, Dubai, UAE",
    scope: "Office layout, partitions, ceilings, flooring, glass and aluminum works.",
    images: [
      "/DIFC - GD02-L051.png",
      "/DIFC - GD02-L052.png",
      "/DIFC - GD02-L051.png",
    ],
  },
  {
    id: "difc-gd04-l06",
    title: "DIFC – GD04 L06",
    description:
      "Interior office fit-out with extensive glass and aluminum detailing.",
    location: "DIFC, Dubai, UAE",
    scope: "Open-plan office, meeting rooms, glass partitions, joinery and finishes.",
    images: [
      "/DIFC – GD04-L061.png",
      "/DIFC – GD04-L062.png",
      "/DIFC – GD04-L063.png",
    ],
  },
  {
    id: "al-gurg-tower",
    title: "Al Gurg Tower 3 – L03 to L09",
    description:
      "Full office fit-out for multiple floors with coordinated building services.",
    location: "Dubai, UAE",
    scope: "Multi-floor office fit-out, coordination with base-building services.",
    images: [
      "/AlGurgTowe-3-Dubai1.png",
      "/AlGurgTowe-3-Dubai2.png",
      "/AlGurgTowe-3-Dubai3.png",
    ],
  },
  {
    id: "tile-works",
    title: "Tile Works – Various Projects",
    description:
      "Floor and wall tiling across residential and commercial developments.",
    location: "Dubai & UAE",
    scope: "Tiling to lobbies, apartments, wet areas, retail and external terraces.",
    images: [
      "/TILEWORKS1.png",
      "/TILEWORKS2.png",
      "/TILE-WORKS1.png",
    ],
  },
  {
    id: "interior-finishes",
    title: "Interior Finishes & Joinery",
    description:
      "Custom joinery and interior finishes for offices and high-end residences.",
    location: "Dubai, UAE",
    scope: "Joinery, wall cladding, doors, feature ceilings and decorative finishes.",
    images: [
      "/INTERIORFINISHES&JOINERY WORKS1.png",
      "/INTERIORFINISHES&JOINERY WORKS2.png",
      "/INTERIORFINISHES&JOINERY WORKS3.png",
    ],
  },
  {
    id: "romeo-international",
    title: "Romeo International Interior Design Modular",
    description:
      "Interior design support and modular fit-out solutions for international client.",
    location: "Dubai, UAE",
    scope: "Modular interior systems, coordination with design team, installation.",
    images: [
      "/LASSANDALUMINUMWORKS1.png",
      "/LASSANDALUMINUMWORKS1.png",
      "/CITYWALKDENTALCLINIC4.png",
    ],
  },
];
