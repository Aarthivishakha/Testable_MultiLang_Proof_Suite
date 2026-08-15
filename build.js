import fs from 'fs';
import path from 'path';
import { buildSync } from 'esbuild';

const distDir = path.resolve('dist');
if (!fs.existsSync(distDir)) {
  fs.mkdirSync(distDir, { recursive: true });
}

buildSync({
  entryPoints: ['src/calculator.js'],
  bundle: true,
  outfile: 'dist/calculator.js',
  format: 'esm',
  minify: true,
});

console.log('Build completed: Output written to dist/calculator.js');
