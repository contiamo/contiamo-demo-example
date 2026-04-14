/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        jw: {
          black: "#1C1C1E",
          charcoal: "#2D2D30",
          dark: "#3A3A3D",
          warm: "#4A4A4D",
          accent: "#B8860B",
          "accent-light": "#D4A843",
          surface: "#F8F7F5",
          "surface-alt": "#F0EFEC",
          border: "rgba(0, 0, 0, 0.08)",
          "border-subtle": "rgba(0, 0, 0, 0.05)",
          "border-strong": "rgba(0, 0, 0, 0.12)",
        },
        severity: {
          info: "#3B82F6",
          warn: "#D97706",
          error: "#DC2626",
          ok: "#10B981",
        },
      },
      fontFamily: {
        sans: ['"Inter"', "system-ui", "-apple-system", "sans-serif"],
        serif: ['"Playfair Display"', "Georgia", "Cambria", "serif"],
        mono: ["ui-monospace", "SFMono-Regular", '"SF Mono"', "Menlo", "monospace"],
      },
      fontSize: {
        "2xs": ["0.6875rem", { lineHeight: "1rem" }],
      },
      borderRadius: {
        card: "6px",
      },
      boxShadow: {
        card: "0 0 0 0.5px rgba(0,0,0,0.05), 0 1px 2px rgba(0,0,0,0.04), 0 2px 4px rgba(0,0,0,0.03)",
        "card-hover":
          "0 0 0 0.5px rgba(0,0,0,0.06), 0 2px 8px rgba(0,0,0,0.06), 0 4px 12px rgba(0,0,0,0.04)",
        elevated:
          "0 0 0 0.5px rgba(0,0,0,0.05), 0 4px 24px -4px rgba(0,0,0,0.12), 0 1px 3px rgba(0,0,0,0.06)",
      },
    },
  },
  plugins: [],
};
