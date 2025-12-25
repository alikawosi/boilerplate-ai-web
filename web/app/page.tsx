import { Hero } from "@/components/features/landing/Hero";
import { ProcessSteps } from "@/components/features/landing/ProcessSteps";
import { Footer } from "@/components/layout/Footer";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        <Hero />
        <ProcessSteps />
      </main>
      <Footer />
    </div>
  );
}
