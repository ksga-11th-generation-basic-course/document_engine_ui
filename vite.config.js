import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: "0.0.0.0",
    server: {
      proxy: {
        "/socket.io": {
          target: "http://localhost:3001",
          changeOrigin: true,
          ws: true,
        },
      },
    },
  },
  plugins: [react()],
});
