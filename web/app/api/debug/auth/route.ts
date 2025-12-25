import { createClient } from "@/lib/supabase/server";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const supabase = createClient();
    const { data: { session }, error: sessionError } = await supabase.auth.getSession();
    
    const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
    
    return NextResponse.json({
      env: process.env.NODE_ENV,
      supabaseUrl: url,
      supabaseAnonKeyPresent: !!anonKey,
      supabaseAnonKeyLength: anonKey?.length,
      sessionError: sessionError?.message,
      hasSession: !!session,
    });
  } catch (e: any) {
    return NextResponse.json({ error: e.message });
  }
}

