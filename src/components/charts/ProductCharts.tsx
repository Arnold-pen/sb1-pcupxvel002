import { useMemo } from 'react';
import type { Product } from '../../types/product';
import ChartContainer from './ChartContainer';
import PerformanceBarChart from './PerformanceBarChart';
import { useTranslation } from '../../hooks/useTranslation';

interface ProductChartsProps {
  products: Product[];
  showProcessor?: boolean;
}

export default function ProductCharts({ products, showProcessor = true }: ProductChartsProps) {
  const { t } = useTranslation();

  // Early return if no products
  if (!products || products.length === 0) {
    return (
      <div className="text-center text-gray-500 dark:text-gray-400 py-8">
        {String(t('common.noData'))}
      </div>
    );
  }

  const sortedBySingle = useMemo(() => 
    [...products].sort((a, b) => b.single_core - a.single_core),
    [products]
  );

  const sortedByMulti = useMemo(() => 
    [...products].sort((a, b) => b.multi_core - a.multi_core),
    [products]
  );

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      <ChartContainer title={String(t('charts.singleCore'))}>
        <PerformanceBarChart
          data={sortedBySingle}
          dataKey="single_core"
          color="#007AFF"
          name={String(t('charts.singleCore'))}
          showProcessor={showProcessor}
        />
      </ChartContainer>

      <ChartContainer title={String(t('charts.multiCore'))} delay={0.2}>
        <PerformanceBarChart
          data={sortedByMulti}
          dataKey="multi_core"
          color="#5856D6"
          name={String(t('charts.multiCore'))}
          showProcessor={showProcessor}
        />
      </ChartContainer>
    </div>
  );
}