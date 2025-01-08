/*
  # Fix RLS policies for products table

  1. Security Changes
    - Drop existing RLS policies
    - Create new policies for:
      - Public read access
      - Authenticated users full access
*/

-- Drop existing policies
DROP POLICY IF EXISTS "Allow public read access" ON products;
DROP POLICY IF EXISTS "Allow authenticated users to manage data" ON products;

-- Create new policies
CREATE POLICY "Enable read access for all users" ON products FOR SELECT USING (true);

CREATE POLICY "Enable insert for authenticated users only" ON products FOR INSERT TO authenticated WITH CHECK (true);

CREATE POLICY "Enable update for authenticated users only" ON products FOR UPDATE TO authenticated USING (true) WITH CHECK (true);

CREATE POLICY "Enable delete for authenticated users only" ON products FOR DELETE TO authenticated USING (true);