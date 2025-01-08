/*
  # Initial schema setup
  
  1. New Tables
    - `products` table for storing Mac product performance data
      - `id` (uuid, primary key)
      - `name` (text, product name)
      - `processor` (text, processor name)
      - `year` (integer, release year)
      - `single_core` (integer, single core performance score)
      - `multi_core` (integer, multi core performance score)
      - `category` (text, product category)
      - `created_at` (timestamptz, creation timestamp)
  
  2. Security
    - Enable RLS on products table
    - Add policy for public read access
    - Add policy for authenticated users to manage data
*/

-- Create products table
CREATE TABLE IF NOT EXISTS products (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  processor text NOT NULL,
  year integer NOT NULL,
  single_core integer NOT NULL,
  multi_core integer NOT NULL,
  category text NOT NULL,
  created_at timestamptz DEFAULT now()
);

-- Create indexes for better query performance
CREATE INDEX IF NOT EXISTS idx_products_category ON products(category);
CREATE INDEX IF NOT EXISTS idx_products_year ON products(year);

DO $$ 
BEGIN
  -- Enable RLS
  ALTER TABLE products ENABLE ROW LEVEL SECURITY;

  -- Create policies if they don't exist
  IF NOT EXISTS (
    SELECT FROM pg_policies WHERE tablename = 'products' AND policyname = 'Allow public read access'
  ) THEN
    CREATE POLICY "Allow public read access" ON products
      FOR SELECT
      TO public
      USING (true);
  END IF;

  IF NOT EXISTS (
    SELECT FROM pg_policies WHERE tablename = 'products' AND policyname = 'Allow authenticated users to manage data'
  ) THEN
    CREATE POLICY "Allow authenticated users to manage data" ON products
      FOR ALL
      TO authenticated
      USING (true)
      WITH CHECK (true);
  END IF;
END $$;