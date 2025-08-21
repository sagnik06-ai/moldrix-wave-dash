import { GlassCard } from "@/components/ui/glass-card";

interface MetricsCardProps {
  title: string;
  value: string;
  label: string;
  secondaryValue?: string;
  secondaryLabel?: string;
  metrics?: Array<{
    value: string;
    label: string;
    highlight?: boolean;
  }>;
}

export const MetricsCard = ({ 
  title, 
  value, 
  label, 
  secondaryValue, 
  secondaryLabel, 
  metrics 
}: MetricsCardProps) => {
  return (
    <GlassCard className="col-span-2">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold">{title}</h2>
        <span className="material-icons text-muted-foreground cursor-pointer hover:text-foreground transition-colors">
          more_horiz
        </span>
      </div>
      
      <div className="grid grid-cols-2 gap-8 mb-8">
        <div>
          <p className="text-6xl font-bold mb-2">{value}</p>
          <p className="text-muted-foreground">{label}</p>
        </div>
        {secondaryValue && (
          <div>
            <p className="text-6xl font-bold mb-2">{secondaryValue}</p>
            <p className="text-muted-foreground">{secondaryLabel}</p>
          </div>
        )}
      </div>
      
      {metrics && (
        <div className="grid grid-cols-3 gap-6">
          {metrics.map((metric, index) => (
            <div key={index}>
              <p className={`text-2xl font-semibold mb-1 ${
                metric.highlight ? 'text-primary' : 'text-foreground'
              }`}>
                {metric.value}
              </p>
              <p className="text-sm text-muted-foreground">{metric.label}</p>
            </div>
          ))}
        </div>
      )}
    </GlassCard>
  );
};