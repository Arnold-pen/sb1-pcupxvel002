import Database from 'better-sqlite3';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const dbPath = join(__dirname, '..', 'data.db');

const db = new Database(dbPath);

// Create tables
db.exec(`
  CREATE TABLE IF NOT EXISTS products (
    id TEXT PRIMARY KEY,
    name TEXT NOT NULL,
    processor TEXT NOT NULL,
    year INTEGER NOT NULL,
    single_core INTEGER NOT NULL,
    multi_core INTEGER NOT NULL,
    category TEXT NOT NULL
  );

  CREATE INDEX IF NOT EXISTS idx_category ON products(category);
  CREATE INDEX IF NOT EXISTS idx_year ON products(year);
`);

console.log('Migration completed successfully');
db.close();