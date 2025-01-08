import { Product } from '../types/product';

export function calculatePerformancePercentages(
  products: Product[],
  baselineProcessor = 'M1'
) {
  const baseline = products.find(p => p.processor === baselineProcessor);
  const baselineSingle = baseline?.single_core || Math.max(...products.map(p => p.single_core));
  const baselineMulti = baseline?.multi_core || Math.max(...products.map(p => p.multi_core));

  return products.map(product => ({
    ...product,
    singleCorePercentage: Math.round((product.single_core / baselineSingle) * 100),
    multiCorePercentage: Math.round((product.multi_core / baselineMulti) * 100)
  }));
}

export function sortProducts(products: Product[], key: 'single_core' | 'multi_core') {
  return [...products].sort((a, b) => b[key] - a[key]);
}