interface ProgressCircleProps {
  value: number;
  size?: "sm" | "md" | "lg";
  label?: string;
  sublabel?: string;
  showIcon?: boolean;
}

export const ProgressCircle = ({ 
  value, 
  size = "md", 
  label, 
  sublabel, 
  showIcon = false 
}: ProgressCircleProps) => {
  const sizeClasses = {
    sm: "w-16 h-16",
    md: "w-24 h-24", 
    lg: "w-32 h-32"
  };

  const strokeWidth = size === "sm" ? 3 : size === "md" ? 4 : 5;
  const radius = 15.9155;
  const circumference = 2 * Math.PI * radius;
  const strokeDasharray = `${(value / 100) * circumference}, ${circumference}`;

  return (
    <div className="flex flex-col items-center">
      <div className={`relative ${sizeClasses[size]}`}>
        <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
          <path
            className="text-muted"
            d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
            fill="none"
            stroke="currentColor"
            strokeWidth={strokeWidth}
          />
          <path
            className="text-primary"
            d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
            fill="none"
            stroke="currentColor"
            strokeDasharray={strokeDasharray}
            strokeLinecap="round"
            strokeWidth={strokeWidth}
            style={{
              transition: 'stroke-dasharray 0.5s ease-in-out'
            }}
          />
        </svg>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
          {showIcon ? (
            <span className="material-icons text-2xl">autorenew</span>
          ) : (
            <>
              <p className="text-2xl font-bold">{value}%</p>
              {sublabel && <p className="text-xs text-muted-foreground">{sublabel}</p>}
            </>
          )}
        </div>
      </div>
      {label && <p className="text-xs text-muted-foreground mt-2 text-center">{label}</p>}
    </div>
  );
};