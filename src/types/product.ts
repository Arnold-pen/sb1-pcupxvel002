export interface Product {
  id: string;
  name: string;
  processor: string;
  year: string;
  single_core: number;
  multi_core: number;
  category: string;
  singleCore?: number; // For compatibility
  multiCore?: number; // For compatibility
}