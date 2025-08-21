import { GlassCard } from "@/components/ui/glass-card";

interface ScheduleItem {
  id: string;
  name: string;
  status: "ACTIVE" | "PENDING" | "PROGRESS";
}

const scheduleData: ScheduleItem[] = [
  { id: "A90", name: "Synthesis", status: "ACTIVE" },
  { id: "B12", name: "Analysis", status: "PENDING" },
  { id: "C34", name: "Processing", status: "PROGRESS" },
];

const getStatusColor = (status: string) => {
  switch (status) {
    case "ACTIVE": return "bg-success/20 text-success";
    case "PENDING": return "bg-warning/20 text-warning";
    case "PROGRESS": return "bg-primary/20 text-primary";
    default: return "bg-muted/20 text-muted-foreground";
  }
};

export const ProductionScheduleCard = () => {
  return (
    <GlassCard>
      <h3 className="font-semibold mb-2">Production Schedule</h3>
      <p className="text-xs text-muted-foreground mb-4">
        Current manufacturing pipeline status
      </p>
      
      <div className="space-y-3">
        <div className="grid grid-cols-3 text-xs font-medium text-muted-foreground">
          <span>ID</span>
          <span>Process</span>
          <span>Status</span>
        </div>
        
        {scheduleData.map((item, index) => (
          <div key={index} className="grid grid-cols-3 text-xs items-center">
            <span>{item.id}</span>
            <span>{item.name}</span>
            <span className={`px-2 py-1 rounded text-center ${getStatusColor(item.status)}`}>
              {item.status}
            </span>
          </div>
        ))}
      </div>
      
      <div className="mt-4 space-y-2">
        <button className="w-full flex items-center justify-center text-sm text-muted-foreground hover:text-foreground transition-colors glass-hover rounded-lg py-2">
          <span className="material-icons text-base mr-2">add</span>
          Add Task
        </button>
        <button className="w-full flex items-center justify-center text-sm text-muted-foreground hover:text-foreground transition-colors glass-hover rounded-lg py-2">
          <span className="material-icons text-base mr-2">schedule</span>
          Schedule Review
        </button>
      </div>
    </GlassCard>
  );
};