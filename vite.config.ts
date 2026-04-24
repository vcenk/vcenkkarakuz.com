import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig(() => ({
  server: {
    host: "0.0.0.0",
    port: 5173,
  },
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (!id.includes("node_modules")) return;

          if (id.includes("node_modules/framer-motion") || id.includes("node_modules/gsap") || id.includes("node_modules/@rive-app")) {
            return "motion-vendor";
          }

          if (id.includes("node_modules/@radix-ui")) {
            return "radix-vendor";
          }

          if (id.includes("node_modules/@tanstack")) {
            return "query-vendor";
          }
        },
      },
    },
  },
}));
