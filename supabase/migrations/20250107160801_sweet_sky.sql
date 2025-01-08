/*
  # Insert desktop Mac data
*/

-- Mac mini
INSERT INTO products (name, processor, year, single_core, multi_core, category)
VALUES
  ('Mac mini M3', 'M3', 2024, 3000, 11700, 'mac_mini'),
  ('Mac mini M2 Pro', 'M2 Pro', 2023, 2730, 14680, 'mac_mini'),
  ('Mac mini M2', 'M2', 2023, 2570, 9850, 'mac_mini'),
  ('Mac mini M1', 'M1', 2020, 2210, 7670, 'mac_mini');

-- iMac
INSERT INTO products (name, processor, year, single_core, multi_core, category)
VALUES
  ('iMac 24″ M3', 'M3', 2024, 3000, 11700, 'imac'),
  ('iMac 24″ M1', 'M1', 2021, 2210, 7670, 'imac'),
  ('iMac 27″ Intel Core i9', 'Intel Core i9', 2020, 1330, 8300, 'imac'),
  ('iMac 27″ Intel Core i7', 'Intel Core i7', 2020, 1240, 7800, 'imac');