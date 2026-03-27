
import { resolve } from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dts from 'vite-plugin-dts';

export default defineConfig({
  plugins: [
    react(),
    dts({
      insertTypesEntry: true,
      rollupTypes: true,
    }),
    {
      name: 'inject-use-client',
      generateBundle(_, bundle) {
        for (const [fileName, file] of Object.entries(bundle)) {
          if (file.type === 'chunk' && (fileName.endsWith('.js') || fileName.endsWith('.cjs'))) {
            if (!file.code.startsWith('"use client";')) {
              console.log(`Injecting 'use client' into ${fileName}`);
              file.code = '"use client";\n' + file.code;
            }
          }
        }
      },
    },
  ],
  build: {
    lib: {
      entry: 'src/index.ts',
      name: 'usds',
      fileName: 'usds',
    },
    rollupOptions: {
      external: ["react", "react-dom", "react/jsx-runtime"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
          "react/jsx-runtime": "jsxRuntime",
        },
        assetFileNames: "usds.[ext]",
      },
    },
    sourcemap: true,
    outDir: "dist",
    emptyOutDir: true,
  },
  resolve: {
    alias: {
      "@": resolve(__dirname, "."),
    },
  },
});
