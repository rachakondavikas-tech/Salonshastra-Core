'use client';
import { useEffect, useState } from 'react';
import { supabase } from './supabase';

export function useTable(table: string) {
  const [rows, setRows] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const refresh = async () => {
    setLoading(true);
    const { data } = await supabase.from(table).select('*').order('created_at', { ascending: false });
    setRows(data || []);
    setLoading(false);
  };
  useEffect(() => { refresh(); }, [table]);
  const insert = async (payload: Record<string, unknown>) => { await supabase.from(table).insert(payload); await refresh(); };
  return { rows, loading, insert, refresh };
}
