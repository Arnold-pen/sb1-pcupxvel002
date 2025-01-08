/*
  # Update year column type
  
  1. Changes
    - Alter year column from integer to text
  2. Notes
    - Preserves existing data by casting to text
*/

ALTER TABLE products 
ALTER COLUMN year TYPE text USING year::text;