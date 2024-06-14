import { EquipeQuery, MemberQuery } from "@/types";

export const members: MemberQuery[] = [
  {
    marital: "Mr",
    name: "Jean",
    surname: "Dupont",
    lastDiploma: "Doctorat",
    grade: "Pr",
    attachmentStructure: "Université de Boréalie",
    domain: "Physique Théorique",
    email: "example@cargopip.dev"
  },
  {
    marital: "Mme",
    name: "Marie",
    surname: "Lefevre",
    lastDiploma: "Magister",
    grade: "MAA",
    attachmentStructure: "Université de Boréalie",
    domain: "Physique Nucléaire",
    email: "example@cargopip.dev"
  },
  {
    marital: "Mr",
    name: "Claude",
    surname: "Durand",
    lastDiploma: "Master",
    grade: "MAB",
    attachmentStructure: "Université de Boréalie",
    domain: "Informatique Quantique",
    email: "example@cargopip.dev"
  },
  {
    marital: "Mr",
    name: "Alain",
    surname: "Martin",
    lastDiploma: "DESM",
    grade: "Doc",
    attachmentStructure: "Université de Boréalie",
    domain: "Cosmologie",
    email: "example@cargopip.dev"
  },
  {
    marital: "Mme",
    name: "Helene",
    surname: "Blanc",
    lastDiploma: "Doctorat",
    grade: "MCB",
    attachmentStructure: "Université de Boréalie",
    domain: "Physique des Particules",
    email: "example@cargopip.dev"
  },
  {
    marital: "Mr",
    name: "David",
    surname: "Moreau",
    lastDiploma: "Master",
    grade: "MCA",
    attachmentStructure: "Université de Boréalie",
    domain: "Physique Théorique",
    email: "example@cargopip.dev"
  },
  {
    marital: "Mme",
    name: "Louise",
    surname: "Petit",
    lastDiploma: "Doctorat",
    grade: "Pr",
    attachmentStructure: "Université de Boréalie",
    domain: "Physique Subatomique",
    email: "example@cargopip.dev"
  },
  {
    marital: "Mr",
    name: "Roger",
    surname: "Rousseau",
    lastDiploma: "Magister",
    grade: "MAB",
    attachmentStructure: "Université de Boréalie",
    domain: "Informatique Quantique",
    email: "example@cargopip.dev"
  },
  {
    marital: "Mr",
    name: "Thierry",
    surname: "Morel",
    lastDiploma: "Doctorat",
    grade: "Doc",
    attachmentStructure: "Université de Boréalie",
    domain: "Cosmologie",
    email: "example@cargopip.dev"
  },
  {
    marital: "Mme",
    name: "Nathalie",
    surname: "Giraud",
    lastDiploma: "DESM",
    grade: "MCB",
    attachmentStructure: "Université de Boréalie",
    domain: "Physique Théorique",
    email: "example@cargopip.dev"
  },
  {
    marital: "Mr",
    name: "Philippe",
    surname: "Lemoine",
    lastDiploma: "Master",
    grade: "MCA",
    attachmentStructure: "Université de Boréalie",
    domain: "Physique des Particules",
    email: "example@cargopip.dev"
  }
];

export const docMembers = [
  {
    name: "Sarah",
    surname: "Bernard",
    encadreurs: "Jean Dupont"
  },
  {
    name: "Paul",
    surname: "Muller",
    encadreurs: "Marie Lefevre"
  },
  {
    name: "Emma",
    surname: "Lemoine",
    encadreurs: "Claude Durand"
  },
  {
    name: "Lucas",
    surname: "Simon",
    encadreurs: "Alain Martin"
  }
];

export const equipesData: EquipeQuery[] = [
  {
    title: "Équipe de Physique Théorique",
    slug: "EPT",
    acronym: "EPT",
    leader: { name: "Jean", surname: "Dupont" },
    domains: ["Physique Théorique", "Cosmologie"],
    description: [{ style: "normal", _key: "d478cbfd1d7e", markDefs: [], children: [{ _type: "span", marks: [], text: "Salut les passionnés de physique ! Aujourd'hui, embarquons pour un voyage dans le monde intrigant de l'écume quantique. Imaginez l'espace et le temps non pas comme des entités lisses et continues, mais comme une mer turbulente de petites bulles toujours changeantes. C'est l'essence de l'écume quantique.", _key: "9d97750773e7" }], _type: "block" }],
    thumbnail: "path/to/thumbnail1.png",
    projects: [
      { project: "Projet de Modélisation Cosmologique", number: 1 },
      { project: "Études des Théories des Cordes", number: 2 }
    ],
    specialProjects: [
      { project: "Projet International sur la Matière Noire", number: 1 }
    ],
    members: members,
    docMembers: docMembers,
    keywords: "Physique, Théorie, Cosmologie, Modélisation"
  },
  {
    title: "Équipe de Physique Subatomique",
    slug: "EPS",
    acronym: "EPS",
    leader: { name: "Louise", surname: "Petit" },
    domains: ["Physique Subatomique", "Physique des Particules"],
    description: [{ style: "normal", _key: "d478cbfd1d7e", markDefs: [], children: [{ _type: "span", marks: [], text: "Salut les passionnés de physique ! Aujourd'hui, embarquons pour un voyage dans le monde intrigant de l'écume quantique. Imaginez l'espace et le temps non pas comme des entités lisses et continues, mais comme une mer turbulente de petites bulles toujours changeantes. C'est l'essence de l'écume quantique.", _key: "9d97750773e7" }], _type: "block" }],
    thumbnail: "path/to/thumbnail2.png",
    projects: [
      { project: "Projet de Collisionneurs de Particules", number: 1 },
      { project: "Études des Interactions Fondamentales", number: 2 }
    ],
    specialProjects: [
      { project: "Projet Européen sur les Neutrinos", number: 1 }
    ],
    members: members,
    docMembers: docMembers,
    keywords: "Physique, Subatomique, Particules, Interactions"
  },
  {
    title: "Équipe d'Informatique Quantique",
    slug: "EIQ",
    acronym: "EIQ",
    leader: { name: "Claude", surname: "Durand" },
    domains: ["Informatique Quantique", "Cryptographie"],
    description: [{ style: "normal", _key: "d478cbfd1d7e", markDefs: [], children: [{ _type: "span", marks: [], text: "Salut les passionnés de physique ! Aujourd'hui, embarquons pour un voyage dans le monde intrigant de l'écume quantique. Imaginez l'espace et le temps non pas comme des entités lisses et continues, mais comme une mer turbulente de petites bulles toujours changeantes. C'est l'essence de l'écume quantique.", _key: "9d97750773e7" }], _type: "block" }],
    thumbnail: "path/to/thumbnail3.png",
    projects: [
      { project: "Développement d'Algorithmes Quantiques", number: 1 },
      { project: "Sécurisation des Communications", number: 2 }
    ],
    specialProjects: [
      { project: "Projet National de Cryptographie Quantique", number: 1 }
    ],
    members: members,
    docMembers: docMembers,
    keywords: "Informatique, Quantique, Cryptographie, Algorithmes"
  },
  {
    title: "Équipe de Physique Nucléaire",
    slug: "EPN",
    acronym: "EPN",
    leader: { name: "Marie", surname: "Lefevre" },
    domains: ["Physique Nucléaire", "Réactions Nucléaires"],
    description: [{ style: "normal", _key: "d478cbfd1d7e", markDefs: [], children: [{ _type: "span", marks: [], text: "Salut les passionnés de physique ! Aujourd'hui, embarquons pour un voyage dans le monde intrigant de l'écume quantique. Imaginez l'espace et le temps non pas comme des entités lisses et continues, mais comme une mer turbulente de petites bulles toujours changeantes. C'est l'essence de l'écume quantique.", _key: "9d97750773e7" }], _type: "block" }],
    thumbnail: "path/to/thumbnail4.png",
    projects: [
      { project: "Études des Réactions Nucléaires", number: 1 },
      { project: "Modélisation des Noyaux", number: 2 }
    ],
    specialProjects: [
      { project: "Projet Européen sur les Réacteurs Nucléaires", number: 1 }
    ],
    members: members,
    docMembers: docMembers,
    keywords: "Physique, Nucléaire, Réactions, Modélisation"
  },
  {
    title: "Équipe de Cosmologie Expérimentale",
    slug: "ECE",
    acronym: "ECE",
    leader: { name: "Alain", surname: "Martin" },
    domains: ["Cosmologie", "Expérimentation"],
    description: [{ style: "normal", _key: "d478cbfd1d7e", markDefs: [], children: [{ _type: "span", marks: [], text: "Salut les passionnés de physique ! Aujourd'hui, embarquons pour un voyage dans le monde intrigant de l'écume quantique. Imaginez l'espace et le temps non pas comme des entités lisses et continues, mais comme une mer turbulente de petites bulles toujours changeantes. C'est l'essence de l'écume quantique.", _key: "9d97750773e7" }], _type: "block" }],
    thumbnail: "path/to/thumbnail5.png",
    projects: [
      { project: "Observation du Fond Diffus Cosmologique", number: 1 },
      { project: "Études des Galaxies", number: 2 }
    ],
    specialProjects: [
      { project: "Projet Spatial de Cartographie de l'Univers", number: 1 }
    ],
    members: members,
    docMembers: docMembers,
    keywords: "Cosmologie, Expérimentation, Univers, Galaxies"
  }
];