/** @type {import('tailwindcss').Config} */
import plugin from "tailwind-scrollbar";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        fondo1: "#000", // Negro puro
        fondo2: "#5D0E41", // Vino oscuro
        fondo3: "#A0153E", // Rojo oscuro
        fondo4: "#FF204E", // Rojo brillante
      },
    },
  },
  plugins: [
    plugin({
      nocompatible: true, // Habilita el modo moderno del plugin
    }),
  ],
};
