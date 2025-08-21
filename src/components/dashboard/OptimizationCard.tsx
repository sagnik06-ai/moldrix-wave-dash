import { GlassCard } from "@/components/ui/glass-card";

export const OptimizationCard = () => {
  return (
    <GlassCard>
      <h3 className="font-semibold mb-2">AI Optimization</h3>
      <p className="text-xs text-muted-foreground mb-4">Machine Learning Analysis</p>
      
      <div className="space-y-3">
        <div className="flex justify-between items-center text-sm">
          <div className="flex items-center">
            <span className="bg-primary/20 text-primary px-2 py-1 rounded text-xs mr-2 font-medium">
              ML
            </span>
            <span>Neural Pattern Recognition</span>
          </div>
        </div>
        
        <div className="text-sm">
          <p>Processing Efficiency Boost</p>
        </div>
        
        <p className="text-xs text-muted-foreground">
          Real-time molecular structure optimization
        </p>
      </div>
    </GlassCard>
  );
};