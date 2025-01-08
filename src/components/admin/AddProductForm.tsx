import { useState } from 'react';
import { addProduct } from '../../lib/db';
import { supabase } from '../../lib/supabase';

interface AddProductFormProps {
  onAdd: () => void;
}

export default function AddProductForm({ onAdd }: AddProductFormProps) {
  const [form, setForm] = useState({
    name: '',
    processor: '',
    year: new Date().getFullYear().toString(),
    single_core: '',
    multi_core: '',
    category: 'processors'
  });

  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      await addProduct({
        name: form.name,
        processor: form.processor,
        year: form.year,
        single_core: Number(form.single_core),
        multi_core: Number(form.multi_core),
        category: form.category
      });
      
      setForm({
        name: '',
        processor: '',
        year: new Date().getFullYear().toString(),
        single_core: '',
        multi_core: '',
        category: 'processors'
      });
      setError(null);
      onAdd();
    } catch (err) {
      setError(err instanceof Error ? err.message : '添加失败');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {error && (
        <div className="p-4 text-sm text-red-700 bg-red-100 rounded-lg">
          {error}
        </div>
      )}
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">名称</label>
          <input
            type="text"
            value={form.name}
            onChange={e => setForm({...form, name: e.target.value})}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 dark:bg-gray-700 dark:border-gray-600"
            required
            disabled={loading}
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">处理器</label>
          <input
            type="text"
            value={form.processor}
            onChange={e => setForm({...form, processor: e.target.value})}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 dark:bg-gray-700 dark:border-gray-600"
            required
            disabled={loading}
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">年份</label>
          <input
            type="text"
            value={form.year}
            onChange={e => setForm({...form, year: e.target.value})}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 dark:bg-gray-700 dark:border-gray-600"
            required
            disabled={loading}
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">单核跑分</label>
          <input
            type="number"
            value={form.single_core}
            onChange={e => setForm({...form, single_core: e.target.value})}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 dark:bg-gray-700 dark:border-gray-600"
            required
            disabled={loading}
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">多核跑分</label>
          <input
            type="number"
            value={form.multi_core}
            onChange={e => setForm({...form, multi_core: e.target.value})}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 dark:bg-gray-700 dark:border-gray-600"
            required
            disabled={loading}
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">分类</label>
          <select
            value={form.category}
            onChange={e => setForm({...form, category: e.target.value})}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 dark:bg-gray-700 dark:border-gray-600"
            disabled={loading}
          >
            <option value="processors">处理器</option>
            <option value="macbook_pro">MacBook Pro</option>
            <option value="macbook_air">MacBook Air</option>
            <option value="mac_mini">Mac mini</option>
            <option value="imac">iMac</option>
          </select>
        </div>
      </div>

      <div className="flex justify-end">
        <button
          type="submit"
          disabled={loading}
          className={`inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white ${
            loading ? 'bg-indigo-400 cursor-not-allowed' : 'bg-indigo-600 hover:bg-indigo-700'
          } focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500`}
        >
          {loading ? '添加中...' : '添加'}
        </button>
      </div>
    </form>
  );
}