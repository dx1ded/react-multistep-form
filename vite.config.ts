import path from "path"
import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import dts from "vite-plugin-dts"
import { viteStaticCopy } from "vite-plugin-static-copy"

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/lib/index.ts"),
      name: "react-multistep-form",
      fileName: "index"
    },
    rollupOptions: {
      external: ["react", "react-dom"],
      output: {
        globals: {
          "react": "React",
          "react-dom": "ReactDOM"
        }
      }
    },
    sourcemap: true
  },
  plugins: [
    react(),
    dts({
      entryRoot: path.resolve(__dirname, "src/lib")
    }),
    viteStaticCopy({
      targets: [
        {
          src: path.resolve(__dirname, "src/lib/styles.css"),
          dest: ""
        }
      ]
    })
  ]
})
