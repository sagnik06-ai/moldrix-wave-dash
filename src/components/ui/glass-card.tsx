import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

export const GlassCard = ({ children, className, hover = false }: GlassCardProps) => {
  return (
    <div 
      className={cn(
        "glass-morphism rounded-2xl p-6",
        hover && "glass-hover cursor-pointer",
        className
      )}
    >
      {children}
    </div>
  );
};