import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, Legend } from 'recharts';
import { motion } from 'framer-motion';
import { Product } from '../../types/product';

interface CustomTooltipProps {
  active?: boolean;
  payload?: any[];
  label?: string;
}

const CustomTooltip = ({ active, payload, label }: CustomTooltipProps) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white p-4 rounded-lg shadow-lg border border-gray-200">
        <p className="font-bold">{label}</p>
        <p className="text-apple-blue">
          {payload[0].name}: {payload[0].value.toLocaleString()}
        </p>
      </div>
    );
  }
  return null;
};

interface PerformanceChartProps {
  products: Product[];
}

export default function PerformanceChart({ products }: PerformanceChartProps) {
  const maxValue = Math.max(...products.map(item => item.single_core));
  const domainMax = Math.ceil((maxValue || 0) * 1.1);
  
  return (
    <div className="space-y-12">
      {/* Single Core Performance Chart */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full h-[600px] p-4"
      >
        <h3 className="text-2xl font-bold mb-6 text-center">单核性能</h3>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={products}
            layout="vertical"
            margin={{ top: 20, right: 30, left: 120, bottom: 5 }}
          >
            <XAxis type="number" domain={[0, domainMax]} />
            <YAxis type="category" dataKey="name" width={100} />
            <Tooltip content={<CustomTooltip />} />
            <Bar
              dataKey="single_core"
              fill="#007AFF"
              name="单核性能"
              radius={[0, 4, 4, 0]}
              barSize={24}
              className="transition-all duration-300 hover:opacity-80"
            />
          </BarChart>
        </ResponsiveContainer>
      </motion.div>
    </div>
  );
}