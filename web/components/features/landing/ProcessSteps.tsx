import { Lightbulb, Palette, Code2 } from "lucide-react";
import Link from "next/link";
import { StepCard, IStepCardProps } from "./StepCard";

interface Step extends Omit<IStepCardProps, "stepNumber"> {
  href: string;
}

const steps: Step[] = [
  {
    title: "Ideation",
    description:
      "Chat with our AI agent to refine your idea. It analyzes your requirements and suggests the perfect module architecture.",
    icon: <Lightbulb className="h-6 w-6" />,
    href: "/ideation",
  },
  {
    title: "Branding",
    description:
      "Define your visual identity. Choose colors, fonts, and assets with real-time preview to match your brand's voice.",
    icon: <Palette className="h-6 w-6" />,
    href: "/branding",
  },
  {
    title: "Delivery",
    description:
      "Receive a production-ready repository. Clone it via our CLI and start coding immediately with a solid foundation.",
    icon: <Code2 className="h-6 w-6" />,
    href: "/delivery",
  },
];

export function ProcessSteps() {
  return (
    <section className="container py-24 md:py-32">
      <div className="mx-auto mb-16 flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
        <h2 className="text-3xl font-bold leading-[1.1] sm:text-3xl md:text-5xl">
          How it Works
        </h2>
        <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
          Three simple steps to go from concept to codebase.
        </p>
      </div>
      <div className="grid gap-8 md:grid-cols-3">
        {steps.map((step, index) => (
          <Link
            key={step.title}
            href={step.href}
            className="block h-full cursor-pointer"
          >
            <StepCard
              stepNumber={index + 1}
              {...step}
              className="h-full hover:border-primary/50"
            />
          </Link>
        ))}
      </div>
    </section>
  );
}
