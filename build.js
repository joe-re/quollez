const { build } = require('esbuild')

build({
  stdio: 'inherit',
  entryPoints: ['./src/index.ts'],
  outfile: './dist/index.js',
  bundle: true,
  platform: 'node',
  external: ['electron'],
  sourcemap: true
}).catch(() => process.exit(1))