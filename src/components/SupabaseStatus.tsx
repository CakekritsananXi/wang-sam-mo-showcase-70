
import React from 'react';
import { useSupabaseStatus } from '@/hooks/use-supabase-status';
import { AlertCircle, CheckCircle, Loader2 } from 'lucide-react';

export const SupabaseStatus: React.FC = () => {
  const { status, error } = useSupabaseStatus();

  if (status === 'connecting') {
    return (
      <div className="flex items-center space-x-2 text-yellow-500">
        <Loader2 className="h-4 w-4 animate-spin" />
        <span className="text-sm">กำลังเชื่อมต่อฐานข้อมูล...</span>
      </div>
    );
  }

  if (status === 'error') {
    return (
      <div className="flex items-center space-x-2 text-red-500">
        <AlertCircle className="h-4 w-4" />
        <span className="text-sm">
          เกิดข้อผิดพลาดในการเชื่อมต่อ{error ? `: ${error}` : ''}
        </span>
      </div>
    );
  }

  return (
    <div className="flex items-center space-x-2 text-green-500">
      <CheckCircle className="h-4 w-4" />
      <span className="text-sm">เชื่อมต่อฐานข้อมูลสำเร็จ</span>
    </div>
  );
};
