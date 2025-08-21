import { GlassCard } from "@/components/ui/glass-card";

export const Header = () => {
  return (
    <header className="flex justify-between items-center mb-8">
      <div className="flex items-center space-x-3">
        <span className="material-icons text-4xl gradient-text">waves</span>
        <h1 className="text-3xl font-bold gradient-text">MolDrix</h1>
      </div>
      
      <div className="flex items-center space-x-4">
        <div className="glass-morphism flex items-center space-x-2 px-4 py-2 rounded-xl glass-hover">
          <span className="material-icons text-sm">arrow_drop_down</span>
          <span className="font-medium">Production</span>
        </div>
        
        <div className="glass-morphism p-2 rounded-xl glass-hover">
          <span className="material-icons">notifications</span>
        </div>
        
        <div className="w-10 h-10 rounded-full overflow-hidden glass-morphism">
          <div className="w-full h-full bg-gradient-primary flex items-center justify-center">
            <span className="material-icons text-white">person</span>
          </div>
        </div>
      </div>
    </header>
  );
};