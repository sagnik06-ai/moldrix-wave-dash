import { GlassCard } from "@/components/ui/glass-card";

export const MetricsOverviewCard = () => {
  return (
    <GlassCard>
      <div className="flex justify-between items-center mb-2">
        <h3 className="font-semibold">Control Metrics</h3>
        <div className="text-xs space-x-2">
          <span>3E5</span>
          <span>37°</span>
        </div>
      </div>
      
      <p className="text-xs text-muted-foreground mb-4">Temperature & Pressure</p>
      
      <div className="space-y-3">
        <div className="flex items-center justify-between text-xs">
          <span>Temperature</span>
          <span>Optimal Range</span>
          <div className="w-16 h-8 bg-muted rounded-md flex items-center justify-center">
            <div className="w-2 h-2 bg-success rounded-full"></div>
          </div>
        </div>
        
        <div className="flex items-center justify-between text-xs">
          <span>Pressure</span>
          <span>Within Limits</span>
          <div className="w-24 h-2 bg-muted rounded-full">
            <div className="w-1/2 h-full bg-primary rounded-full"></div>
          </div>
        </div>
      </div>
    </GlassCard>
  );
};