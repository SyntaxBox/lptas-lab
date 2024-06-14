import { defineConfig } from "sanity";
import { memberSchema, equipeSchema, postSchema, seminaireSchema } from "@/sanity/schemas";
import { deskTool } from "sanity/desk";


const config = defineConfig({
  name: "default",
  projectId: 'g3hmfne0',
  dataset: 'production',
  title: 'LPTAS',
  basePath: '/admin',
  plugins: [deskTool()],
  schema: {
    types: [memberSchema, equipeSchema, postSchema, seminaireSchema],
  },
});

export default config;
