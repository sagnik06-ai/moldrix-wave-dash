import { GlassCard } from "@/components/ui/glass-card";

interface StatusData {
  system: string;
  status: string;
  value: string;
  efficiency: string;
}

const statusData: StatusData[] = [
  { system: "REACTOR", status: "ACTIVE", value: "98.0", efficiency: "1.00000" },
  { system: "PLASMA", status: "STABLE", value: "100.0", efficiency: "1.00000" },
  { system: "GRID", status: "ONLINE", value: "98.00", efficiency: "0.99992" },
  { system: "CORE", status: "OPTIMAL", value: "99.80", efficiency: "0.99990" },
];

export const StatusOverviewCard = () => {
  return (
    <GlassCard>
      <h3 className="font-semibold mb-2">System Status Overview</h3>
      <p className="text-xs text-muted-foreground mb-4">
        Real-time monitoring of all critical systems
      </p>
      
      <div className="space-y-2">
        {statusData.map((item, index) => (
          <div key={index} className="grid grid-cols-4 gap-2 text-xs">
            <span className="font-medium">{item.system}</span>
            <span className="text-success">{item.status}</span>
            <span>{item.value}</span>
            <span className="text-muted-foreground">{item.efficiency}</span>
          </div>
        ))}
      </div>
    </GlassCard>
  );
};