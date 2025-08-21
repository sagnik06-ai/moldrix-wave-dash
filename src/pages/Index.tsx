import { Header } from "@/components/layout/Header";
import { Sidebar } from "@/components/layout/Sidebar";
import { MetricsCard } from "@/components/dashboard/MetricsCard";
import { LaserPrecisionCard } from "@/components/dashboard/LaserPrecisionCard";
import { OptimizationCard } from "@/components/dashboard/OptimizationCard";
import { StatusOverviewCard } from "@/components/dashboard/StatusOverviewCard";
import { ProductionScheduleCard } from "@/components/dashboard/ProductionScheduleCard";
import { QualityCard } from "@/components/dashboard/QualityCard";
import { MetricsOverviewCard } from "@/components/dashboard/MetricsOverviewCard";
import { RecommendationsCard } from "@/components/dashboard/RecommendationsCard";
import { ProgressCircle } from "@/components/ui/progress-circle";
import { GlassCard } from "@/components/ui/glass-card";
const waveBackground = "/lovable-uploads/dcc924bd-fae8-4e21-9077-9945d7579408.png";

const Index = () => {
  return (
    <div 
      className="min-h-screen bg-cover bg-center bg-fixed"
      style={{ backgroundImage: `url(${waveBackground})` }}
    >
      <div className="min-h-screen bg-primary/40 backdrop-blur-xl">
        <div className="p-8">
          <Header />
          
          <div className="grid grid-cols-12 gap-6">
            {/* Sidebar */}
            <div className="col-span-2">
              <Sidebar />
            </div>
            
            {/* Main Dashboard */}
            <div className="col-span-10">
              <div className="grid grid-cols-3 gap-6">
                {/* Production Efficiency - Large Card */}
                <div className="col-span-2">
                  <MetricsCard
                    title="Production Efficiency"
                    value="82%"
                    label="Overall Efficiency"
                    secondaryValue="11.6"
                    secondaryLabel="Units per Hour"
                    metrics={[
                      { value: "96.1%", label: "Output Rate", highlight: true },
                      { value: "2.3", label: "Waste Ratio" },
                      { value: "84.5", label: "Quality Score" }
                    ]}
                  />
                </div>
                
                {/* Right Column - Small Cards */}
                <div className="col-span-1 space-y-6">
                  <LaserPrecisionCard />
                  
                  <GlassCard>
                    <ProgressCircle 
                      value={58} 
                      size="lg" 
                      label="System Stability Index"
                      sublabel="OPTIMAL"
                    />
                    <button className="flex items-center text-sm mt-4 text-muted-foreground hover:text-foreground transition-colors">
                      <span className="material-icons text-base mr-2">sync</span>
                      Generate Report
                    </button>
                  </GlassCard>
                </div>
                
                {/* Second Row */}
                <OptimizationCard />
                <StatusOverviewCard />
                <ProductionScheduleCard />
                
                {/* Third Row */}
                <QualityCard />
                <MetricsOverviewCard />
                <RecommendationsCard />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
