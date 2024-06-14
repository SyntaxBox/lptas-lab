import { PortableTextBlock } from "sanity"
import { MemberQuery } from "."

export type Project = {
  project: string,
  number: number,
}

export type EquipeQuery = {
  title: string,
  slug: string,
  acronym: string,
  leader: Pick<MemberQuery, 'name' | 'surname'>,
  domains: string[],
  description: PortableTextBlock[],
  thumbnail: string,
  projects?: Project[]
  specialProjects?: Project[]
  members: MemberQuery[],
  docMembers: {
    name: string,
    surname: string,
    encadreurs: string,
  }[]
  keywords: string
}