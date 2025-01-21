module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      animation: {
        wiggle: 'wiggle .5s ease-in-out',
      },
      keyframes: {
        wiggle: {
          '0%': { transform: 'translateY(-200%)' },
        }
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        bricolage: ["Bricolage Grotesque", "sans-serif"],
      },
      colors: {
        default: "var(--clr-text)",
        primary: "var(--clr-primary)",
        secondary: "var(--clr-secondary)",
        "accent-green": {
          DEFAULT: "rgb(var(--clr-green) / <alpha-value>)",
          700: "rgb(var(--clr-green-dark) / <alpha-value>)",
        },
      },
      textColor: {
        default: "var(--clr-text)",
        offset: "var(--clr-text-offset)",
      },
      backgroundColor: {
        default: "var(--clr-background)",
        offset: "var(--clr-background-offset)",
        accent: "var(--clr-background-accent)",
      },
      borderColor: {
        default: "var(--clr-border)",
        offset: "var(--clr-background-offset)",
      },
    },
  },
  corePlugins: {
    fontSize: false,
  },
  plugins: [
    require("tailwindcss-fluid-type"),
    require("@tailwindcss/typography"),
  ],
};
