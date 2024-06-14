import { SeminaireQuery } from "@/types";
import dummyImg from "./dummy.png";

export const seminairesData: SeminaireQuery[] = [
  {
    title: 'Attestation séminaires internes',
    description: "Attestation de participation pour les séminaires internes organisés par le laboratoire.",
    slug: 'attestation-seminaires-internes',
    createdAt: '2024-01-24T12:44:36Z',
    img: dummyImg,
  },
  {
    title: 'Séminaire Interne LPTAS N3',
    description: "Troisième séminaire interne de l'année, abordant les dernières recherches en physique théorique.",
    slug: 'seminaire-interne-lptas-n3',
    createdAt: '2024-01-24T12:41:17Z',
    img: dummyImg,
  },
  {
    title: 'Séminaire Interne LPTAS N5',
    description: "Cinquième séminaire interne, focalisé sur les applications de la physique subatomique.",
    slug: 'seminaire-interne-lptas-n5',
    createdAt: '2024-01-24T12:39:37Z',
    img: dummyImg,
  },
  {
    title: 'Séminaire Interne LPTAS N6',
    description: "Sixième séminaire interne couvrant les avancées en informatique quantique et cosmologie.",
    slug: 'seminaire-interne-lptas-n6',
    createdAt: '2024-01-24T12:38:58Z',
    img: dummyImg,
  },
  {
    title: 'LPTAS Webinar N3',
    description: "Webinar international sur les développements récents en physique des particules.",
    slug: 'lptas-webinar-n3',
    createdAt: '2024-01-24T12:34:14Z',
    img: dummyImg,
  },
  {
    title: 'LPTAS Webinar N4',
    description: "Quatrième webinar de l'année traitant des collaborations scientifiques internationales.",
    slug: 'lptas-webinar-n4',
    createdAt: '2024-01-24T12:32:58Z',
    img: dummyImg,
  }
];
