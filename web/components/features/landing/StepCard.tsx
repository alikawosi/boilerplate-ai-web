import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

export interface IStepCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  stepNumber: number;
  className?: string;
}

export function StepCard({
  title,
  description,
  icon,
  stepNumber,
  className,
}: IStepCardProps) {
  return (
    <Card
      className={cn(
        "relative overflow-hidden transition-all hover:shadow-lg",
        className
      )}
    >
      <div className="absolute -right-4 -top-4 text-9xl font-bold text-muted/10">
        {stepNumber}
      </div>
      <CardHeader>
        <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
          {icon}
        </div>
        <CardTitle className="text-xl">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  );
}
