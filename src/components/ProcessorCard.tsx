import { motion } from 'framer-motion';
import type { Product } from '../types/product';

interface ProcessorCardProps {
  processor: Product;
}

export default function ProcessorCard({ processor }: ProcessorCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: 1.02 }}
      className="bg-white rounded-xl shadow-lg p-6 m-4"
    >
      <h3 className="text-2xl font-bold text-gray-900">{processor.name}</h3>
      <p className="text-gray-500">{processor.processor} · {processor.year}</p>
      
      <div className="mt-4 space-y-2">
        <div>
          <span className="text-gray-600">单核性能:</span>
          <span className="ml-2 font-semibold">{processor.single_core}</span>
        </div>
        <div>
          <span className="text-gray-600">多核性能:</span>
          <span className="ml-2 font-semibold">{processor.multi_core}</span>
        </div>
      </div>
    </motion.div>
  );
}