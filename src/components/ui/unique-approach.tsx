import * as React from "react";
import { cn } from "@/lib/utils";

// Define the props for the ApproachCard component
interface ApproachCardProps extends React.HTMLAttributes<HTMLDivElement> {
  imageUrl: string;
  title: string;
  description: string;
  themeColor: string; // e.g., "210 100% 85%" for light blue
}

const ApproachCard = React.forwardRef<HTMLDivElement, ApproachCardProps>(
  ({ className, imageUrl, title, description, themeColor, ...props }, ref) => {
    return (
      <div
        ref={ref}
        style={{
          // @ts-ignore - CSS custom properties are valid
          "--theme-color": themeColor,
        } as React.CSSProperties}
        className={cn("group w-full h-full", className)}
        {...props}
      >
        <div
          className="relative block w-full h-full rounded-2xl overflow-hidden shadow-md 
                     transition-all duration-500 ease-in-out 
                     group-hover:scale-[1.02] group-hover:shadow-xl"
        >
          {/* Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center 
                       transition-transform duration-500 ease-in-out group-hover:scale-105"
            style={{ backgroundImage: `url(${imageUrl})` }}
          />

          {/* Gradient Overlay */}
          <div
            className="absolute inset-0"
            style={{
              background: `linear-gradient(to top, hsl(var(--theme-color) / 0.95), hsl(var(--theme-color) / 0.7) 40%, transparent 70%)`,
            }}
          />
          
          {/* Content */}
          <div className="relative flex flex-col justify-end h-full p-6 text-white">
            <h3 className="text-xl font-bold tracking-tight mb-2">
              {title}
            </h3>
            <p className="text-sm text-white/90 leading-relaxed font-light">
              {description}
            </p>
          </div>
        </div>
      </div>
    );
  }
);
ApproachCard.displayName = "ApproachCard";

export { ApproachCard };
