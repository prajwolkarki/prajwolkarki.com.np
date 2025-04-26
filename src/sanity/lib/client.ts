import { createClient } from "@sanity/client";

export const client = createClient({
  projectId: "kify14k3",
  dataset: "production",
  apiVersion: "2024-11-01", 
  useCdn: true,
});