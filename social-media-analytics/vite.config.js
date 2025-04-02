import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
    plugins: [tailwindcss(), react()],
    server: {
        port: 3000,
        proxy: {
            "/api": {
                target: "http://20.244.56.144/evaluation-service",
                changeOrigin: true,
                rewrite: (path) => path.replace(/^\/api/, ""),
            },
        },
    },
});
