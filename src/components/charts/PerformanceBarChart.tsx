import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, LabelList } from 'recharts';
import type { Product } from '../../types/product';
import CustomTooltip from './CustomTooltip';

interface PerformanceBarChartProps {
  data: Product[];
  dataKey: 'single_core' | 'multi_core';
  color: string;
  name: string;
  showProcessor?: boolean;
}

export default function PerformanceBarChart({ data, dataKey, color, name, showProcessor = false }: PerformanceBarChartProps) {
  if (!data || data.length === 0) {
    return (
      <div className="h-full flex items-center justify-center text-gray-500 dark:text-gray-400">
        No data available
      </div>
    );
  }

  // Find M3 baseline score
  const m3Product = data.find(p => p.processor === 'M3');
  const baselineScore = m3Product ? m3Product[dataKey] : Math.max(...data.map(item => item[dataKey]));

  // Calculate percentages
  const dataWithPercentages = data.map(item => ({
    ...item,
    percentage: Math.round((item[dataKey] / baselineScore) * 100)
  }));

  const maxValue = Math.max(...data.map(item => item[dataKey]));
  const domainMax = Math.ceil(maxValue * 1.1);

  // Set CSS variable for data count
  document.documentElement.style.setProperty('--data-count', data.length.toString());

  return (
    <div className="w-full h-full">
      <style>
        {`
          .performance-bar {
            transition: all 0.3s ease;
          }
          .performance-bar:hover {
            transform: scaleX(1.02);
            filter: brightness(1.1);
          }
        `}
      </style>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={dataWithPercentages}
          layout="vertical"
          margin={{ top: 10, right: 30, left: 1, bottom: 10 }}
        >
          <CartesianGrid strokeDasharray="3 3" horizontal={false} />
          <XAxis 
            type="number" 
            domain={[0, domainMax]}
            tickFormatter={(value) => value.toLocaleString()}
            tick={{ 
              fontSize: 11,
              fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
              fill: '#6B7280'
            }}
          />
          <YAxis 
            type="category" 
            dataKey="name" 
            width={150}
            tick={{ 
              fontSize: 12,
              fill: '#374151',
              fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
            }}
            axisLine={false}
            tickLine={false}
          />
          <Tooltip content={<CustomTooltip showProcessor={showProcessor} />} />
          <Bar 
            dataKey={dataKey} 
            fill={color}
            name={name}
            radius={[0, 4, 4, 0]}
            barSize={24}
            animationDuration={1000}
            animationBegin={200}
            className="performance-bar"
          >
            <LabelList 
              dataKey="percentage" 
              position="right"
              formatter={(value: number) => `${value}%`}
              style={{
                fontSize: '11px',
                fill: '#6B7280',
                fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
              }}
            />
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}