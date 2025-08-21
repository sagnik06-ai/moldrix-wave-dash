import { GlassCard } from "@/components/ui/glass-card";

export const LaserPrecisionCard = () => {
  return (
    <GlassCard>
      <h3 className="font-semibold mb-4">Laser Precision</h3>
      <div className="w-full h-20 bg-gradient-primary rounded-lg mb-4 opacity-80 flex items-center justify-center">
        <div className="w-full h-1 bg-white/20 rounded-full">
          <div className="w-4/5 h-full bg-white rounded-full animate-pulse"></div>
        </div>
      </div>
      <p className="text-xs text-muted-foreground">
        Advanced laser calibration with molecular-level accuracy
      </p>
    </GlassCard>
  );
};