
import React from 'react';
import { useSupabaseStatus } from '@/hooks/use-supabase-status';
import { AlertCircle, CheckCircle, Loader2, RefreshCcw } from 'lucide-react';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Button } from "@/components/ui/button";

export const SupabaseStatus: React.FC = () => {
  const { status, error, reconnect } = useSupabaseStatus();

  if (status === 'connecting') {
    return (
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <div className="flex items-center space-x-2 text-yellow-500 bg-white/80 backdrop-blur-sm px-3 py-2 rounded-lg shadow-sm">
              <Loader2 className="h-4 w-4 animate-spin" />
              <span className="text-sm">กำลังเชื่อมต่อฐานข้อมูล...</span>
            </div>
          </TooltipTrigger>
          <TooltipContent>
            <p>กำลังตรวจสอบการเชื่อมต่อกับ Supabase</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    );
  }

  if (status === 'error') {
    return (
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <div className="flex items-center space-x-2 text-red-500 bg-white/80 backdrop-blur-sm px-3 py-2 rounded-lg shadow-sm">
              <AlertCircle className="h-4 w-4" />
              <span className="text-sm">เกิดข้อผิดพลาดในการเชื่อมต่อ</span>
              <Button 
                variant="ghost" 
                size="icon" 
                onClick={(e) => {
                  e.preventDefault();
                  reconnect();
                }}
                className="h-5 w-5 rounded-full p-0 ml-1"
              >
                <RefreshCcw className="h-3 w-3" />
                <span className="sr-only">ลองเชื่อมต่อใหม่</span>
              </Button>
            </div>
          </TooltipTrigger>
          <TooltipContent>
            <p>เกิดข้อผิดพลาดในการเชื่อมต่อฐานข้อมูล{error ? `: ${error}` : ''}</p>
            <p className="text-xs mt-1">คลิกที่ไอคอนรีเฟรชเพื่อลองเชื่อมต่อใหม่</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    );
  }

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <div className="flex items-center space-x-2 text-green-500 bg-white/80 backdrop-blur-sm px-3 py-2 rounded-lg shadow-sm">
            <CheckCircle className="h-4 w-4" />
            <span className="text-sm">เชื่อมต่อฐานข้อมูลสำเร็จ</span>
          </div>
        </TooltipTrigger>
        <TooltipContent>
          <p>เชื่อมต่อกับฐานข้อมูล Supabase สำเร็จ</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};
