import { defineConfig } from "vite"
import tailwindcss from "@tailwindcss/vite"
import { resolve } from "path"
import { fileURLToPath } from "url"
import { dirname } from "path"

const __dirname = dirname(fileURLToPath(import.meta.url))

export default defineConfig({
  plugins: [
    tailwindcss(),
  ],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        whyus: resolve(__dirname, "Pages/WhyUs.html"),
        training: resolve(__dirname, "Pages/Training.html"),
        membership: resolve(__dirname, "Pages/Membership.html"),
        classes: resolve(__dirname, "Pages/Classes.html"),
        branches: resolve(__dirname, "Pages/Branches.html")
      }
    }
  }
})

