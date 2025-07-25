import { defineConfig } from "vite";
import { ghPages } from "vite-plugin-gh-pages";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [ghPages()],
  base: "/antd-jalali-fixed/",
});
