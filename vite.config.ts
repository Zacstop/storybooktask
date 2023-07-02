import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "@svgr/rollup";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svgr(), react()],
  assetsInclude: /\.(png|jpe?g|gif|svg)$/i,
});
