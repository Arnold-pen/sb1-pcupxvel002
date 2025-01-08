import { motion } from 'framer-motion';
import { Product } from '../../types/product';

interface ProductSpecsProps {
  product: Product;
}

export default function ProductSpecs({ product }: ProductSpecsProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 transition-colors"
    >
      <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-gray-100">{product.name}</h3>
      <div className="space-y-2">
        <div className="flex justify-between">
          <span className="text-gray-600 dark:text-gray-400">Processor</span>
          <span className="font-medium text-gray-900 dark:text-gray-100">{product.processor}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-600 dark:text-gray-400">Year</span>
          <span className="font-medium text-gray-900 dark:text-gray-100">{product.year}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-600 dark:text-gray-400">Single-Core</span>
          <span className="font-medium text-blue-600 dark:text-blue-400">{product.singleCore}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-600 dark:text-gray-400">Multi-Core</span>
          <span className="font-medium text-blue-600 dark:text-blue-400">{product.multiCore}</span>
        </div>
      </div>
    </motion.div>
  );
}