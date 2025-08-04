import { ReactNode } from "react";
import { Card } from "@/app/components/ui/card";

interface TechnologyCardProps {
  icon: ReactNode;
  name: string;
  description: string;
  category: string;
}

export const TechnologyCard = ({ icon, name, description, category }: TechnologyCardProps) => {
  return (
    <Card className="group relative overflow-hidden border-border bg-card hover:shadow-glow transition-all duration-300 hover:scale-105 h-full flex flex-col justify-between">
      <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
      <div className="relative p-6 text-center flex flex-col justify-between h-full">
        <div>
          {/* Category Badge */}
          <div className="inline-block px-3 py-1 bg-primary-20 text-primary text-xs font-medium rounded-full mb-4">
            {category}
          </div>
          {/* Icon */}
          <div className="flex justify-center mb-4">
            <div className="w-16 h-16 bg-primary-20 rounded-xl flex items-center justify-center group-hover:bg-primary-30 transition-colors duration-300">
              {icon}
            </div>
          </div>
          {/* Content */}
          <div className="space-y-2">
            <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
              {name}
            </h3>
            <p className="text-muted-foreground text-sm">
              {description}
            </p>
          </div>
        </div>
        {/* Hover Effect Line */}
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
      </div>
    </Card>
  );
};