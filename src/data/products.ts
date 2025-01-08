export interface Product {
  id: string;
  name: string;
  processor: string;
  year: number;
  single_core: number;
  multi_core: number;
}

export const macbookPro: Product[] = [
  {
    id: "mbp-m3-max",
    name: "MBP 14″ M3 Max",
    processor: "M3 Max",
    year: 2023,
    single_core: 3234,
    multi_core: 21750
  },
  {
    id: "mbp-m3-pro",
    name: "MBP 14″ M3 Pro",
    processor: "M3 Pro",
    year: 2023,
    single_core: 3075,
    multi_core: 15432
  },
  {
    id: "mbp-m3",
    name: "MBP 14″ M3",
    processor: "M3",
    year: 2023,
    single_core: 3000,
    multi_core: 11700
  },
  {
    id: "mbp-m2-max",
    name: "MBP 14″ M2 Max",
    processor: "M2 Max",
    year: 2023,
    single_core: 2740,
    multi_core: 14760
  },
  {
    id: "mbp-m2-pro",
    name: "MBP 14″ M2 Pro",
    processor: "M2 Pro",
    year: 2023,
    single_core: 2730,
    multi_core: 14680
  },
  {
    id: "mbp-m1-max",
    name: "MBP 14″ M1 Max",
    processor: "M1 Max",
    year: 2021,
    single_core: 2320,
    multi_core: 12300
  },
  {
    id: "mbp-m1-pro",
    name: "MBP 14″ M1 Pro",
    processor: "M1 Pro",
    year: 2021,
    single_core: 2340,
    multi_core: 12150
  },
  {
    id: "mbp-i9",
    name: "MBP 16″ Intel Core i9",
    processor: "Intel Core i9-9980HK",
    year: 2020,
    single_core: 1280,
    multi_core: 8040
  }
];

export const macbookAir: Product[] = [
  {
    id: "mba-m3",
    name: "MBA 15″ M3",
    processor: "M3",
    year: 2024,
    single_core: 3000,
    multi_core: 11700
  },
  {
    id: "mba-m2-15",
    name: "MBA 15″ M2",
    processor: "M2",
    year: 2023,
    single_core: 2570,
    multi_core: 9850
  },
  {
    id: "mba-m2-13",
    name: "MBA 13″ M2",
    processor: "M2",
    year: 2022,
    single_core: 2570,
    multi_core: 9850
  },
  {
    id: "mba-m1",
    name: "MBA M1",
    processor: "M1",
    year: 2020,
    single_core: 2210,
    multi_core: 7670
  }
];

export const macMini: Product[] = [
  {
    id: "mac-mini-m3",
    name: "Mac mini M3",
    processor: "M3",
    year: 2024,
    single_core: 3000,
    multi_core: 11700
  },
  {
    id: "mac-mini-m2-pro",
    name: "Mac mini M2 Pro",
    processor: "M2 Pro",
    year: 2023,
    single_core: 2730,
    multi_core: 14680
  },
  {
    id: "mac-mini-m2",
    name: "Mac mini M2",
    processor: "M2",
    year: 2023,
    single_core: 2570,
    multi_core: 9850
  },
  {
    id: "mac-mini-m1",
    name: "Mac mini M1",
    processor: "M1",
    year: 2020,
    single_core: 2210,
    multi_core: 7670
  }
];

export const iMac: Product[] = [
  {
    id: "imac-m3",
    name: "iMac 24″ M3",
    processor: "M3",
    year: 2024,
    single_core: 3000,
    multi_core: 11700
  },
  {
    id: "imac-m1",
    name: "iMac 24″ M1",
    processor: "M1",
    year: 2021,
    single_core: 2210,
    multi_core: 7670
  },
  {
    id: "imac-i9",
    name: "iMac 27″ Intel Core i9",
    processor: "Intel Core i9",
    year: 2020,
    single_core: 1330,
    multi_core: 8300
  },
  {
    id: "imac-i7",
    name: "iMac 27″ Intel Core i7",
    processor: "Intel Core i7",
    year: 2020,
    single_core: 1240,
    multi_core: 7800
  }
];