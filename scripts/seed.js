import Database from 'better-sqlite3';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { processors, macbookPro, macbookAir, macMini, iMac } from '../src/data/products.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const dbPath = join(__dirname, '..', 'data.db');

const db = new Database(dbPath);

// Prepare statements
const insertProduct = db.prepare(`
  INSERT OR REPLACE INTO products (id, name, processor, year, single_core, multi_core, category)
  VALUES (@id, @name, @processor, @year, @singleCore, @multiCore, @category)
`);

// Begin transaction
const transaction = db.transaction((products) => {
  for (const product of products) {
    insertProduct.run({
      id: product.id,
      name: product.name,
      processor: product.processor,
      year: product.year,
      singleCore: product.singleCore,
      multiCore: product.multiCore,
      category: product.category || 'processors'
    });
  }
});

// Insert data
try {
  // Insert processors
  transaction(processors.map(p => ({ ...p, category: 'processors' })));
  
  // Insert MacBook Pro
  transaction(macbookPro.map(p => ({ ...p, category: 'macbook_pro' })));
  
  // Insert MacBook Air
  transaction(macbookAir.map(p => ({ ...p, category: 'macbook_air' })));
  
  // Insert Mac mini
  transaction(macMini.map(p => ({ ...p, category: 'mac_mini' })));
  
  // Insert iMac
  transaction(iMac.map(p => ({ ...p, category: 'imac' })));

  console.log('Data seeded successfully');
} catch (error) {
  console.error('Error seeding data:', error);
}

db.close();