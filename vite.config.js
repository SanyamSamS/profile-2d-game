import { defineConfig } from "vite";

export default defineConfig({
    base: "/",
    build: {
        minify: 'terser', // if you use the default with kaboom.js, it will break the game
    },
});