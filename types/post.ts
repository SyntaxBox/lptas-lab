import { PortableTextBlock } from "sanity"
import { EquipeQuery, MemberQuery } from "."

export type PostQuery = {
  title: string,
  slug: string,
  magLink?: string,
  equipe: Pick<EquipeQuery, 'acronym' | 'slug'>,
  description: string,
  content: PortableTextBlock[]
  createdAt: Date,
  collaborators: MemberQuery[],
  thumbnail?: string,
}