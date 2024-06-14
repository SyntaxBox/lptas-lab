import { StaticImageData } from "next/image";
import { PortableTextBlock } from "sanity";

export type SeminaireQuery = {
  title: string;
  slug: string;
  description?: string;
  img?: string | StaticImageData;
  content?: PortableTextBlock[];
  createdAt: string; // date string
}