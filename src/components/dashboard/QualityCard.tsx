import { GlassCard } from "@/components/ui/glass-card";
import { ProgressCircle } from "@/components/ui/progress-circle";

export const QualityCard = () => {
  return (
    <GlassCard>
      <h3 className="font-semibold mb-4">Quality Assessment</h3>
      
      <div className="flex items-center space-x-4">
        <ProgressCircle value={85} size="md" showIcon />
        
        <div className="flex-1">
          <p className="font-semibold">LEVEL A+</p>
          <p className="text-xs text-muted-foreground">Excellence Rating</p>
        </div>
        
        <div className="text-right text-xs">
          <p>99.7%</p>
          <p className="text-muted-foreground">Accuracy</p>
        </div>
      </div>
    </GlassCard>
  );
};