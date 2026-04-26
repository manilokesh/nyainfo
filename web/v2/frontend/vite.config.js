import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import path from "node:path";

// Vite config for the NyaInfo landing page.
// - Mirrors the supervisor expectations: dev server on 0.0.0.0:3000.
// - Exposes REACT_APP_* env vars through process.env so existing
//   `process.env.REACT_APP_BACKEND_URL` references keep working without rewrites.
export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, process.cwd(), "");

    return {
        plugins: [react()],
        resolve: {
            alias: {
                "@": path.resolve(__dirname, "src"),
            },
        },
        // Allow JSX inside `.js` files (App.js etc.) without renaming everything.
        esbuild: {
            loader: "jsx",
            include: /src\/.*\.[jt]sx?$/,
            exclude: [],
        },
        define: {
            // Expose REACT_APP_* vars to client code (drop-in for CRA's process.env).
            "process.env": Object.fromEntries(
                Object.entries(env).filter(([k]) => k.startsWith("REACT_APP_")),
            ),
        },
        server: {
            host: "0.0.0.0",
            port: 3000,
            strictPort: true,
            // Accept the Emergent preview hostname (and any future ones).
            allowedHosts: true,
            // HMR through the platform's TLS ingress.
            hmr: {
                clientPort: 443,
                protocol: "wss",
            },
            watch: {
                ignored: [
                    "**/node_modules/**",
                    "**/.git/**",
                    "**/build/**",
                    "**/dist/**",
                ],
            },
        },
        preview: {
            host: "0.0.0.0",
            port: 3000,
            allowedHosts: true,
        },
        build: {
            outDir: "build",
            sourcemap: false,
        },
    };
});
