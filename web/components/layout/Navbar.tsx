import Link from "next/link";
import { Button } from "@/components/ui/button";
import { createClient } from "@/lib/supabase/server";

export async function Navbar() {
  const supabase = createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  return (
    <div className="fixed top-0 z-50 w-full flex justify-center pt-4 px-4">
      <header className="w-full max-w-5xl rounded-full border bg-background/60 backdrop-blur-xl shadow-sm">
        <div className="flex h-14 items-center justify-between px-6">
          <Link
            href="/"
            className="flex items-center space-x-2 font-bold text-lg"
          >
            <span>Boilerplate AI</span>
          </Link>

          <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-muted-foreground">
            <Link href="/" className="transition-colors hover:text-foreground">
              How it works
            </Link>
            <Link
              href="/pricing"
              className="transition-colors hover:text-foreground"
            >
              Pricing
            </Link>
            <Link
              href="/about"
              className="transition-colors hover:text-foreground"
            >
              About
            </Link>
            <Link
              href="/blog"
              className="transition-colors hover:text-foreground"
            >
              Blog
            </Link>
          </nav>

          <div className="flex items-center gap-2">
            {user ? (
              <Link href="/dashboard">
                <Button size="sm" className="rounded-full px-6">
                  Dashboard
                </Button>
              </Link>
            ) : (
              <>
                <Link href="/login">
                  <Button variant="ghost" size="sm" className="hidden sm:flex">
                    Log in
                  </Button>
                </Link>
                <Link href="/login?tab=signup">
                  <Button size="sm" className="rounded-full px-6">
                    Sign up
                  </Button>
                </Link>
              </>
            )}
          </div>
        </div>
      </header>
    </div>
  );
}
