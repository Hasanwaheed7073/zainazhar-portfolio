import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        ink: {
          DEFAULT: "#0B1220",
          muted: "#5B6473",
          soft: "#8A93A4",
        },
        navy: {
          "50": "#F4F6FB",
          "100": "#E6EAF4",
          "300": "#A9B4D0",
          "500": "#1E3A8A",
          "600": "#152C6E",
          "700": "#0F2256",
          "900": "#0A1F44",
          DEFAULT: "#0A1F44",
        },
        line: "#E5E7EB",
        surface: "#FFFFFF",
        "surface-alt": "#FAFAFB",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
        card: "16px",
        btn: "12px",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "-apple-system", "BlinkMacSystemFont", "'Segoe UI'", "system-ui", "sans-serif"],
      },
      fontSize: {
        display: ["clamp(2.5rem, 5vw, 4.25rem)", { lineHeight: "1.05", letterSpacing: "-0.02em" }],
        h1: ["clamp(2rem, 4vw, 3.5rem)", { lineHeight: "1.1", letterSpacing: "-0.02em" }],
        h2: ["clamp(1.625rem, 3vw, 2.5rem)", { lineHeight: "1.15", letterSpacing: "-0.01em" }],
        h3: ["clamp(1.25rem, 2vw, 1.5rem)", { lineHeight: "1.25", letterSpacing: "-0.005em" }],
        lead: ["1.25rem", { lineHeight: "1.6", letterSpacing: "-0.005em" }],
        body: ["1.0625rem", { lineHeight: "1.6" }],
        small: ["0.9375rem", { lineHeight: "1.55" }],
      },
      spacing: {
        section: "6rem",
        "section-sm": "4rem",
        gutter: "1.5rem",
      },
      maxWidth: {
        container: "1200px",
        "prose-tight": "640px",
        "prose-wide": "780px",
      },
      transitionDuration: {
        apple: "80ms",
      },
      boxShadow: {
        soft: "0 1px 2px rgba(11,18,32,0.04), 0 4px 16px rgba(11,18,32,0.04)",
        "none-locked": "none",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
