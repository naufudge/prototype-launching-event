import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        poppins: "var(--font-poppins)",
        lexend: "var(--font-lexend)",
        playfair: "var(--font-playfair)",
        aammufk: "var(--font-aammufk)"
      }
    },
  },
  plugins: [],
};
export default config;
