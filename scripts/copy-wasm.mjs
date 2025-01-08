import { copyFileSync, mkdirSync } from 'fs';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

// Create public/sql.js directory if it doesn't exist
const targetDir = join(__dirname, '../public/sql.js');
mkdirSync(targetDir, { recursive: true });

// Copy WASM file from node_modules to public directory
const sourceFile = join(__dirname, '../node_modules/sql.js/dist/sql-wasm.wasm');
const targetFile = join(targetDir, 'sql-wasm.wasm');

copyFileSync(sourceFile, targetFile);
console.log('WASM file copied successfully');