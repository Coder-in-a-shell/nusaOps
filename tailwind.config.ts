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
        nusa: {
          primary: '#1F2937',    // Dark blue-gray
          secondary: '#FF6B35',  // Vibrant orange
          accent: '#00D9FF',     // Cyan
          bg: '#0F172A',         // Very dark blue
          text: '#F3F4F6',       // Light gray
          success: '#10B981',    // Green
        }
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;