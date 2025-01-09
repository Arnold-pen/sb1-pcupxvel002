import { useMemo } from 'react';
import type { Product } from '../../types/product';
import ChartContainer from './ChartContainer';
import PerformanceBarChart from './PerformanceBarChart';
import { useTranslation } from '../../hooks/useTranslation';

interface MacMiniChartsProps {
  products: Product[];
}

export default function MacMiniCharts({ products }: MacMiniChartsProps) {
  const { t } = useTranslation();

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
    <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
      <ChartContainer title={String(t('charts.macMiniSingleCore'))}>
        <PerformanceBarChart
          data={sortedBySingle}
          dataKey="single_core"
          color="#007AFF"
          name="单核性能"
          showProcessor={true}
          baselineProcessor="Apple M2 @ 3.5 GHz (8 CPU cores, 10 GPU cores)"
        />
      </ChartContainer>

      <ChartContainer title={String(t('charts.macMiniMultiCore'))} delay={0.2}>
        <PerformanceBarChart
          data={sortedByMulti}
          dataKey="multi_core"
          color="#5856D6"
          name="多核性能"
          showProcessor={true}
          baselineProcessor="Apple M2 @ 3.5 GHz (8 CPU cores, 10 GPU cores)"
        />
      </ChartContainer>
    </div>
  );
}