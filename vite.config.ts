import { resolve } from 'path'
import { defineConfig } from 'vite'

const root = resolve(__dirname, 'src')
const outDir = resolve(__dirname, 'dist')

export default defineConfig({
    root,
    build: {
        outDir,
        emptyOutDir: true,
        rollupOptions: {
            input: {
                main: resolve(root, 'index.html'),
                "geo-regional": resolve(root, 'geo-regional', 'index.html'),
                "geo-regional/500k": resolve(root, 'geo-regional', 'cgp500k.html'),
                "geo-regional/folha1": resolve(root, 'geo-regional', 'folha1.html'),
                "geo-regional/folha2": resolve(root, 'geo-regional', 'folha2.html'),
                "geo-regional/folha8": resolve(root, 'geo-regional', 'folha8.html'),
                "geo-regional/folha5D": resolve(root, 'geo-regional', 'folha5D.html'),
                "geo-regional/folha27A": resolve(root, 'geo-regional', 'folha27A.html'),
                "geo-regional/folha38B": resolve(root, 'geo-regional', 'folha38B.html'),
            }
        }
    },
    base: '/aspas-resumos-aspas/',
})