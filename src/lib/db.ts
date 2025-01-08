import { supabase } from './supabase';
import type { Product } from '../types/product';

export async function getProducts(category: string): Promise<Product[]> {
  const { data, error } = await supabase
    .from('products')
    .select('*')
    .eq('category', category)
    .order('year', { ascending: false })
    .order('single_core', { ascending: false });

  if (error) throw error;
  return data || [];
}

export async function getAllProducts(): Promise<Product[]> {
  const { data, error } = await supabase
    .from('products')
    .select('*')
    .order('year', { ascending: false })
    .order('single_core', { ascending: false });

  if (error) throw error;
  return data || [];
}

export async function addProduct(product: Omit<Product, 'id'>): Promise<Product> {
  const { data, error } = await supabase
    .from('products')
    .insert([product])
    .select()
    .single();

  if (error) throw error;
  return data;
}

export async function updateProduct(id: string, product: Partial<Product>): Promise<void> {
  const { error } = await supabase
    .from('products')
    .update(product)
    .eq('id', id);

  if (error) throw error;
}

export async function deleteProduct(id: string): Promise<void> {
  const { error } = await supabase
    .from('products')
    .delete()
    .eq('id', id);

  if (error) throw error;
}

export async function resetDatabase(): Promise<void> {
  const { error } = await supabase
    .from('products')
    .delete()
    .neq('id', '');

  if (error) throw error;
}