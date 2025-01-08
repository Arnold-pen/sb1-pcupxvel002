import { useQuery } from '@tanstack/react-query';
import type { Product } from '../types/product';
import { getProducts } from '../lib/db';

export function useProducts(category: string) {
  const { data: products = [], isLoading, error } = useQuery({
    queryKey: ['products', category],
    queryFn: () => getProducts(category),
    staleTime: 1000 * 60 * 5, // Data stays fresh for 5 minutes
    gcTime: 1000 * 60 * 30, // Cache persists for 30 minutes
  });

  return { 
    products, 
    loading: isLoading, 
    error: error instanceof Error ? error.message : null 
  };
}