import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Send, Mic, History, Sparkles } from "lucide-react";

export function Hero() {
  return (
    <section className="relative flex min-h-[80vh] flex-col items-center justify-center overflow-hidden py-20 text-center md:py-32">
      <div className="z-10 container flex max-w-5xl flex-col items-center gap-8 text-center">
        <div className="flex items-center gap-2 rounded-full bg-muted/50 px-4 py-1.5 text-sm font-medium text-foreground backdrop-blur-sm">
          <Sparkles className="h-4 w-4 text-primary" />
          <span>Build your dream app in minutes</span>
        </div>

        <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
          From Idea to Code <br className="hidden sm:inline" />
          <span className="text-primary">with Boilerplate AI</span>
        </h1>

        <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
          Describe your vision to our AI agent, customize your brand, and get a
          production-ready repository instantly.
        </p>

        <div className="flex w-full max-w-sm flex-col gap-4 sm:flex-row sm:justify-center">
          <Link href="/ideation">
            <Button size="lg" className="w-full sm:w-auto px-8">
              Start Building
            </Button>
          </Link>
          <Link href="/pricing">
            <Button
              variant="outline"
              size="lg"
              className="w-full sm:w-auto px-8"
            >
              View Pricing
            </Button>
          </Link>
        </div>

        {/* Chat Interface Visual */}
        <div className="mt-12 w-full max-w-3xl animate-in fade-in slide-in-from-bottom-8 duration-1000">
          <Card className="relative overflow-hidden border-border/50 bg-background/50 p-2 backdrop-blur-xl shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-primary/5 opacity-50" />

            <div className="relative flex flex-col gap-4 p-4 sm:p-6">
              {/* Mock Chat History */}
              <div className="flex flex-col gap-4 text-left">
                <div className="self-end rounded-2xl rounded-tr-none bg-primary/10 px-4 py-2 text-sm text-foreground/80 max-w-[80%]">
                  I want a SaaS platform for managing freelance projects with
                  invoicing.
                </div>
                <div className="self-start rounded-2xl rounded-tl-none bg-muted px-4 py-2 text-sm text-muted-foreground max-w-[80%]">
                  <div className="flex items-center gap-2">
                    <Sparkles className="h-3 w-3" />
                    <span>
                      Great idea! I'll outline the core modules: Dashboard,
                      Project Management, Invoicing, and Client Portal. Shall we
                      start branding?
                    </span>
                  </div>
                </div>
              </div>

              {/* Chat Input Area */}
              <div className="mt-4 flex items-center gap-2 rounded-xl border bg-background/80 p-2 shadow-sm">
                <Button
                  variant="ghost"
                  size="icon"
                  className="shrink-0 text-muted-foreground hover:text-foreground"
                >
                  <History className="h-4 w-4" />
                </Button>

                <Input
                  className="border-0 bg-transparent shadow-none focus-visible:ring-0 focus-visible:ring-offset-0"
                  placeholder="Describe your next feature..."
                  readOnly
                />

                <Button
                  variant="ghost"
                  size="icon"
                  className="shrink-0 text-muted-foreground hover:text-foreground"
                >
                  <Mic className="h-4 w-4" />
                </Button>

                <Button size="icon" className="shrink-0 rounded-lg">
                  <Send className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </Card>

          {/* Decorative glow behind the card */}
          <div className="absolute -inset-1 -z-10 mx-auto w-[90%] rounded-[2.5rem] bg-primary/20 blur-3xl opacity-30" />
        </div>
      </div>

      {/* Background Grid Pattern */}
      <div className="absolute inset-0 -z-10 h-full w-full bg-background [background-image:linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] [background-size:14px_24px]" />
      <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-primary/20 opacity-20 blur-[100px]" />
    </section>
  );
}
