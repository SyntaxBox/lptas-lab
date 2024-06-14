import { createClient } from "next-sanity";

export const client = createClient({
  projectId: 'g3hmfne0',
  dataset: 'production',
  apiVersion: '2023-12-21',
  useCdn: false,
})