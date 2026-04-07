/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      /* ============================================
         COLORS - Professional Design System
         ============================================ */
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
          50: "#f0f9ff",
          100: "#e0f2fe",
          200: "#bae6fd",
          300: "#7dd3fc",
          400: "#38bdf8",
          500: "#0ea5e9",
          600: "#0284c7",
          700: "#0369a1",
          800: "#075985",
          900: "#0c4a6e",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
          50: "#eff6ff",
          100: "#dbeafe",
          200: "#bfdbfe",
          300: "#93c5fd",
          400: "#60a5fa",
          500: "#3b82f6",
          600: "#2563eb",
          700: "#1d4ed8",
          800: "#1e40af",
          900: "#1e3a8a",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
          50: "#f0fdf4",
          100: "#dcfce7",
          200: "#bbf7d0",
          300: "#86efac",
          400: "#4ade80",
          500: "#22c55e",
          600: "#16a34a",
          700: "#15803d",
          800: "#166534",
          900: "#14532d",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        github: {
          DEFAULT: "#24292e",
          light: "#fafbfc",
          dark: "#0d1117",
          blue: "#0366d6",
          green: "#28a745",
          purple: "#6f42c1",
        },
        telegram: {
          DEFAULT: "#0088cc",
          light: "#179cde",
          dark: "#006699",
        },
        dark: {
          bg: "#000000",
          surface: "#0a0a0a",
          elevated: "#141414",
          border: "#1f1f1f",
        },
      },
      /* ============================================
         BORDER RADIUS
         ============================================ */
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
        xl: "1rem",
        "2xl": "1.5rem",
        "3xl": "2rem",
      },
      /* ============================================
         TYPOGRAPHY
         ============================================ */
      fontFamily: {
        sans: ["Inter", "system-ui", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "sans-serif"],
        mono: ["JetBrains Mono", "Fira Code", "Consolas", "monospace"],
        arabic: ["Noto Sans Arabic", "Cairo", "Tajawal", "sans-serif"],
      },
      fontSize: {
        "display-1": ["4.5rem", { lineHeight: "1.1", letterSpacing: "-0.02em" }],
        "display-2": ["3.75rem", { lineHeight: "1.15", letterSpacing: "-0.02em" }],
        "display-3": ["3rem", { lineHeight: "1.2", letterSpacing: "-0.01em" }],
        "heading-1": ["2.5rem", { lineHeight: "1.2", letterSpacing: "-0.01em" }],
        "heading-2": ["2rem", { lineHeight: "1.25", letterSpacing: "-0.01em" }],
        "heading-3": ["1.5rem", { lineHeight: "1.3" }],
        "heading-4": ["1.25rem", { lineHeight: "1.4" }],
        "body-lg": ["1.125rem", { lineHeight: "1.6" }],
        "body-base": ["1rem", { lineHeight: "1.6" }],
        "body-sm": ["0.875rem", { lineHeight: "1.5" }],
        "caption": ["0.75rem", { lineHeight: "1.4" }],
      },
      /* ============================================
         SPACING
         ============================================ */
      spacing: {
        "18": "4.5rem",
        "22": "5.5rem",
        "30": "7.5rem",
        "34": "8.5rem",
        "38": "9.5rem",
        "42": "10.5rem",
        "46": "11.5rem",
        "50": "12.5rem",
      },
      /* ============================================
         SHADOWS
         ============================================ */
      boxShadow: {
        "glow-sm": "0 0 15px rgba(14, 165, 233, 0.2)",
        "glow": "0 0 25px rgba(14, 165, 233, 0.3)",
        "glow-lg": "0 0 40px rgba(14, 165, 233, 0.4)",
        "glow-xl": "0 0 60px rgba(14, 165, 233, 0.5)",
        "inner-glow": "inset 0 0 20px rgba(14, 165, 233, 0.15)",
        "card": "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
        "card-hover": "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
        "elevated": "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
        "dark-glow": "0 0 30px rgba(14, 165, 233, 0.2)",
      },
      /* ============================================
         ANIMATIONS
         ============================================ */
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "fade-in-up": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in-down": {
          "0%": { opacity: "0", transform: "translateY(-20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "slide-in-right": {
          "0%": { transform: "translateX(100%)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
        "slide-in-left": {
          "0%": { transform: "translateX(-100%)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
        "scale-in": {
          "0%": { transform: "scale(0.95)", opacity: "0" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },
        "float": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        "pulse-glow": {
          "0%, 100%": { boxShadow: "0 0 20px rgba(14, 165, 233, 0.3)" },
          "50%": { boxShadow: "0 0 40px rgba(14, 165, 233, 0.6)" },
        },
        "gradient-shift": {
          "0%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" },
        },
        "spin-slow": {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        "bounce-subtle": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-5px)" },
        },
        "shimmer": {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        "typing": {
          "0%": { width: "0" },
          "100%": { width: "100%" },
        },
        "blink": {
          "50%": { borderColor: "transparent" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in": "fade-in 0.5s ease-out",
        "fade-in-up": "fade-in-up 0.5s ease-out",
        "fade-in-down": "fade-in-down 0.5s ease-out",
        "slide-in-right": "slide-in-right 0.5s ease-out",
        "slide-in-left": "slide-in-left 0.5s ease-out",
        "scale-in": "scale-in 0.3s ease-out",
        "float": "float 3s ease-in-out infinite",
        "pulse-glow": "pulse-glow 2s ease-in-out infinite",
        "gradient-shift": "gradient-shift 8s ease infinite",
        "spin-slow": "spin-slow 20s linear infinite",
        "bounce-subtle": "bounce-subtle 2s ease-in-out infinite",
        "shimmer": "shimmer 2s linear infinite",
        "typing": "typing 3s steps(40, end)",
        "blink": "blink 0.7s step-end infinite",
      },
      /* ============================================
         BACKGROUND IMAGES
         ============================================ */
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "gradient-primary": "linear-gradient(135deg, #0ea5e9 0%, #3b82f6 50%, #8b5cf6 100%)",
        "gradient-hero": "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        "gradient-mesh": "linear-gradient(135deg, #667eea 0%, #764ba2 25%, #f093fb 50%, #f5576c 75%, #4facfe 100%)",
        "gradient-dark": "linear-gradient(180deg, #000000 0%, #0a0a0a 100%)",
        "gradient-glow": "radial-gradient(ellipse at center, rgba(14, 165, 233, 0.15) 0%, transparent 70%)",
      },
      /* ============================================
         TRANSITIONS
         ============================================ */
      transitionDuration: {
        "400": "400ms",
        "600": "600ms",
        "800": "800ms",
        "1000": "1000ms",
      },
      transitionTimingFunction: {
        "bounce-out": "cubic-bezier(0.34, 1.56, 0.64, 1)",
        "smooth": "cubic-bezier(0.4, 0, 0.2, 1)",
        "snappy": "cubic-bezier(0.25, 0.1, 0.25, 1)",
      },
      /* ============================================
         Z-INDEX
         ============================================ */
      zIndex: {
        "dropdown": "100",
        "sticky": "200",
        "fixed": "300",
        "modal-backdrop": "400",
        "modal": "500",
        "popover": "600",
        "tooltip": "700",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
