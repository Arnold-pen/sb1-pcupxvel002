import { useMemo } from 'react';
import type { Product } from '../types/product';
import ChartContainer from './charts/ChartContainer';
import PerformanceBarChart from './charts/PerformanceBarChart';

interface PerformanceChartsProps {
  products: Product[];
}

export default function PerformanceCharts({ products }: PerformanceChartsProps) {
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
      <ChartContainer title="单核性能 (Geekbench 6)">
        <PerformanceBarChart
          data={sortedBySingle}
          dataKey="single_core"
          color="#007AFF"
          name="单核性能"
        />
      </ChartContainer>

      <ChartContainer title="多核性能 (Geekbench 6)" delay={0.2}>
        <PerformanceBarChart
          data={sortedByMulti}
          dataKey="multi_core"
          color="#5856D6"
          name="多核性能"
        />
      </ChartContainer>
    </div>
  );
}