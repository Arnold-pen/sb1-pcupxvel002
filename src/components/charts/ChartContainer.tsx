import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface ChartContainerProps {
  title: string;
  children: ReactNode;
  delay?: number;
}

export default function ChartContainer({ title, children, delay = 0 }: ChartContainerProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      className="bg-white dark:bg-gray-800 rounded-lg shadow p-4 transition-colors h-full"
    >
      <h3 className="text-lg font-semibold mb-4 text-center text-gray-800 dark:text-gray-200">
        {title.split('(').map((part, index) => (
          index === 0 ? part : 
          <span key={index} className="text-sm text-gray-500 dark:text-gray-400">
            ({part}
          </span>
        ))}
      </h3>
      <div className="min-h-[600px]" style={{ height: 'calc(28px * var(--data-count, 10) + 100px)' }}>
        {children}
      </div>
    </motion.div>
  );
}