"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";

export async function login(formData: FormData) {
  const supabase = createClient();
  const data = {
    email: formData.get("email") as string,
    password: formData.get("password") as string,
  };

  const { error } = await supabase.auth.signInWithPassword(data);

  if (error) {
    redirect("/login?error=true");
  }

  revalidatePath("/", "layout");
  redirect("/dashboard");
}

export async function signup(formData: FormData) {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  console.log("Signup attempt with Supabase URL:", supabaseUrl);

  const supabase = createClient();
  const data = {
    email: formData.get("email") as string,
    password: formData.get("password") as string,
  };

  try {
    const { data: authData, error } = await supabase.auth.signUp(data);

    if (error) {
      console.error("Signup error:", error);
      redirect("/login?message=Could not authenticate user");
    }

    if (!authData.session) {
      console.log("Signup successful, check email for confirmation");
      redirect("/login?message=Check email to continue sign in process");
    }
  } catch (err) {
    console.error("Unexpected error during signup:", err);
    if (err instanceof Error && err.message.includes("Unexpected token")) {
      redirect(
        "/login?message=Configuration error: Check NEXT_PUBLIC_SUPABASE_URL"
      );
    }
    redirect("/login?message=An unexpected error occurred");
  }

  revalidatePath("/", "layout");
  redirect("/dashboard");
}
