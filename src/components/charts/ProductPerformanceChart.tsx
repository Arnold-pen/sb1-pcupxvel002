import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';
import { Product } from '../../types/product';
import CustomTooltip from './CustomTooltip';

interface ProductPerformanceChartProps {
  data: Product[];
  dataKey: 'single_core' | 'multi_core';
  color: string;
  name: string;
}

export default function ProductPerformanceChart({ data, dataKey, color, name }: ProductPerformanceChartProps) {
  if (!data || data.length === 0) {
    return (
      <div className="h-full flex items-center justify-center text-gray-500">
        No data available
      </div>
    );
  }

  const maxValue = Math.max(...data.map(item => item[dataKey]));
  const domainMax = Math.ceil((maxValue || 0) * 1.1);

  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart
        data={data}
        layout="vertical"
        margin={{ top: 10, right: 30, left: 180, bottom: 10 }}
      >
        <CartesianGrid strokeDasharray="3 3" horizontal={false} />
        <XAxis 
          type="number"
          domain={[0, domainMax]}
          tickFormatter={(value) => value.toLocaleString()}
        />
        <YAxis 
          type="category" 
          dataKey="name"
          width={170}
          tick={{ 
            fontSize: 12,
            fill: '#374151',
            fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
          }}
          axisLine={false}
          tickLine={false}
        />
        <Tooltip content={<CustomTooltip />} />
        <Bar
          dataKey={dataKey}
          fill={color}
          name={name}
          radius={[0, 4, 4, 0]}
          barSize={20}
          animationDuration={1000}
          animationBegin={200}
          isAnimationActive={true}
        />
      </BarChart>
    </ResponsiveContainer>
  );
}