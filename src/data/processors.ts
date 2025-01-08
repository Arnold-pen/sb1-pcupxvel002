export interface Processor {
  id: string;
  name: string;
  series: string;
  year: number;
  singleCore: number;
  multiCore: number;
}

// Geekbench 6 scores
export const processors: Processor[] = [
  {
    id: "m3-max-40",
    name: "M3 Max (40核)",
    series: "Apple Silicon",
    year: 2023,
    singleCore: 3234,
    multiCore: 21750
  },
  {
    id: "m3-max-30",
    name: "M3 Max (30核)",
    series: "Apple Silicon",
    year: 2023,
    singleCore: 3160,
    multiCore: 20010
  },
  {
    id: "m3-pro-12",
    name: "M3 Pro (12核)",
    series: "Apple Silicon",
    year: 2023,
    singleCore: 3075,
    multiCore: 15432
  },
  {
    id: "m3-pro-11",
    name: "M3 Pro (11核)",
    series: "Apple Silicon",
    year: 2023,
    singleCore: 3020,
    multiCore: 14350
  },
  {
    id: "m3",
    name: "M3",
    series: "Apple Silicon",
    year: 2023,
    singleCore: 3000,
    multiCore: 11700
  },
  {
    id: "m2-ultra-24",
    name: "M2 Ultra (24核)",
    series: "Apple Silicon",
    year: 2023,
    singleCore: 2780,
    multiCore: 21200
  },
  {
    id: "m2-max-12",
    name: "M2 Max (12核)",
    series: "Apple Silicon",
    year: 2023,
    singleCore: 2740,
    multiCore: 14760
  },
  {
    id: "m2-pro-12",
    name: "M2 Pro (12核)",
    series: "Apple Silicon",
    year: 2023,
    singleCore: 2730,
    multiCore: 14680
  },
  {
    id: "m2",
    name: "M2",
    series: "Apple Silicon",
    year: 2022,
    singleCore: 2570,
    multiCore: 9850
  },
  {
    id: "m1-ultra-20",
    name: "M1 Ultra (20核)",
    series: "Apple Silicon",
    year: 2022,
    singleCore: 2350,
    multiCore: 23400
  },
  {
    id: "m1-max",
    name: "M1 Max",
    series: "Apple Silicon",
    year: 2021,
    singleCore: 2320,
    multiCore: 12300
  },
  {
    id: "m1-pro",
    name: "M1 Pro",
    series: "Apple Silicon",
    year: 2021,
    singleCore: 2340,
    multiCore: 12150
  },
  {
    id: "m1",
    name: "M1",
    series: "Apple Silicon",
    year: 2020,
    singleCore: 2210,
    multiCore: 7670
  },
  {
    id: "i9-10910",
    name: "Intel Core i9-10910",
    series: "Intel",
    year: 2020,
    singleCore: 1330,
    multiCore: 8300
  },
  {
    id: "i9-9980hk",
    name: "Intel Core i9-9980HK",
    series: "Intel",
    year: 2019,
    singleCore: 1280,
    multiCore: 8040
  }
];