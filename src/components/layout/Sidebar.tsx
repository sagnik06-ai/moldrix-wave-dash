import { GlassCard } from "@/components/ui/glass-card";

interface NavItem {
  id: string;
  label: string;
  icon: string;
  active?: boolean;
}

const navItems: NavItem[] = [
  { id: "dashboard", label: "Dashboard", icon: "speed", active: true },
  { id: "content", label: "Content", icon: "description" },
  { id: "analytics", label: "Analytics", icon: "list_alt" },
  { id: "tasks", label: "Tasks", icon: "check_box" },
  { id: "documents", label: "Documents", icon: "folder" },
  { id: "revisions", label: "Revisions", icon: "sync" },
  { id: "reports", label: "Reports", icon: "donut_large" },
  { id: "settings", label: "Settings", icon: "settings" },
];

export const Sidebar = () => {
  return (
    <div className="w-full space-y-2">
      {navItems.map((item) => (
        <div
          key={item.id}
          className={`
            flex items-center space-x-3 p-3 rounded-2xl cursor-pointer transition-all duration-300
            ${item.active 
              ? 'glass-morphism glow-effect' 
              : 'hover:bg-white/5 hover:backdrop-blur-sm hover:border hover:border-white/10'
            }
          `}
        >
          <span className="material-icons text-xl">{item.icon}</span>
          <span className="font-medium">{item.label}</span>
        </div>
      ))}
    </div>
  );
};