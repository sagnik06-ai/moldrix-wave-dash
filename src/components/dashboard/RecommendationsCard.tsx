import { GlassCard } from "@/components/ui/glass-card";

interface Recommendation {
  title: string;
  description: string;
}

const recommendations: Recommendation[] = [
  {
    title: "Optimize Synthesis Rate",
    description: "Increase efficiency by 12%"
  },
  {
    title: "Adjust Temperature Control", 
    description: "Recommended: 247°C optimal"
  },
  {
    title: "Enhance Purity Levels",
    description: "Target 99.8% molecular purity"
  },
  {
    title: "Calibrate Laser Systems",
    description: "Precision adjustment needed"
  }
];

export const RecommendationsCard = () => {
  return (
    <GlassCard>
      <h3 className="font-semibold mb-4">AI Recommendations</h3>
      
      <div className="grid grid-cols-2 gap-4 text-xs">
        {recommendations.map((rec, index) => (
          <div key={index} className="space-y-1">
            <p className="font-medium">{rec.title}</p>
            <p className="text-muted-foreground">{rec.description}</p>
          </div>
        ))}
      </div>
    </GlassCard>
  );
};