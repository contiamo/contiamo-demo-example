import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/contiamo-demo-example/",
  server: { port: 4321, strictPort: true },
  preview: { port: 4321, strictPort: true },
});
