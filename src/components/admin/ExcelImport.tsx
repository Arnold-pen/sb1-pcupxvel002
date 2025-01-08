import { useRef, useState } from 'react';
import * as XLSX from 'xlsx';
import { addProduct } from '../../lib/db';
import { Product } from '../../types/product';

interface ExcelRow {
  name: string;
  processor: string;
  year: string;
  single_core: number;
  multi_core: number;
  category: string;
}

interface ExcelImportProps {
  onImport: () => void;
}

export default function ExcelImport({ onImport }: ExcelImportProps) {
  const fileRef = useRef<HTMLInputElement>(null);
  const [error, setError] = useState<string | null>(null);
  const [importing, setImporting] = useState(false);

  const validateRow = (row: ExcelRow) => {
    const requiredFields = ['name', 'processor', 'year', 'single_core', 'multi_core', 'category'];
    const missingFields = requiredFields.filter(field => !row[field as keyof ExcelRow]);
    
    if (missingFields.length > 0) {
      throw new Error(`缺少必填字段: ${missingFields.join(', ')}`);
    }

    const validCategories = ['processors', 'macbook_pro', 'macbook_air', 'mac_mini', 'imac'];
    if (!validCategories.includes(row.category)) {
      throw new Error(`无效的分类: ${row.category}。有效值: ${validCategories.join(', ')}`);
    }

    if (!row.year || row.year.toString().trim() === '') {
      throw new Error('年份不能为空');
    }

    if (isNaN(Number(row.single_core)) || Number(row.single_core) <= 0) {
      throw new Error(`无效的单核跑分: ${row.single_core}`);
    }

    if (isNaN(Number(row.multi_core)) || Number(row.multi_core) <= 0) {
      throw new Error(`无效的多核跑分: ${row.multi_core}`);
    }
  };

  const handleImport = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setImporting(true);
    setError(null);

    try {
      const reader = new FileReader();
      reader.onload = async (e) => {
        try {
          const data = e.target?.result;
          const workbook = XLSX.read(data, { type: 'binary' });
          const sheetName = workbook.SheetNames[0];
          const sheet = workbook.Sheets[sheetName];
          const products = XLSX.utils.sheet_to_json<ExcelRow>(sheet);

          if (products.length === 0) {
            throw new Error('Excel文件中没有数据');
          }

          for (const [index, row] of products.entries()) {
            try {
              validateRow(row);
              await addProduct({
                name: String(row.name),
                processor: String(row.processor),
                year: String(row.year),
                single_core: Number(row.single_core),
                multi_core: Number(row.multi_core),
                category: String(row.category)
              });
            } catch (err) {
              throw new Error(`第 ${index + 2} 行数据无效: ${err instanceof Error ? err.message : '未知错误'}`);
            }
          }

          if (fileRef.current) {
            fileRef.current.value = '';
          }
          onImport();
          setError(null);
        } catch (err) {
          setError(err instanceof Error ? err.message : '导入失败');
        } finally {
          setImporting(false);
        }
      };

      reader.readAsBinaryString(file);
    } catch (err) {
      setError(err instanceof Error ? err.message : '读取文件失败');
      setImporting(false);
    }
  };

  // Rest of the component remains the same
}