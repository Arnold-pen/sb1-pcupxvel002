/*
  # Insert MacBook data
*/

-- MacBook Pro
INSERT INTO products (name, processor, year, single_core, multi_core, category)
VALUES
  ('MBP 14″ M3 Max', 'M3 Max', 2023, 3234, 21750, 'macbook_pro'),
  ('MBP 14″ M3 Pro', 'M3 Pro', 2023, 3075, 15432, 'macbook_pro'),
  ('MBP 14″ M3', 'M3', 2023, 3000, 11700, 'macbook_pro'),
  ('MBP 14″ M2 Max', 'M2 Max', 2023, 2740, 14760, 'macbook_pro'),
  ('MBP 14″ M2 Pro', 'M2 Pro', 2023, 2730, 14680, 'macbook_pro'),
  ('MBP 14″ M1 Max', 'M1 Max', 2021, 2320, 12300, 'macbook_pro'),
  ('MBP 14″ M1 Pro', 'M1 Pro', 2021, 2340, 12150, 'macbook_pro'),
  ('MBP 16″ Intel Core i9', 'Intel Core i9', 2020, 1280, 8040, 'macbook_pro');

-- MacBook Air
INSERT INTO products (name, processor, year, single_core, multi_core, category)
VALUES
  ('MBA 15″ M3', 'M3', 2024, 3000, 11700, 'macbook_air'),
  ('MBA 15″ M2', 'M2', 2023, 2570, 9850, 'macbook_air'),
  ('MBA 13″ M2', 'M2', 2022, 2570, 9850, 'macbook_air'),
  ('MBA M1', 'M1', 2020, 2210, 7670, 'macbook_air');