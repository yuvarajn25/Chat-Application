import { createClient } from "@supabase/supabase-js";

// Create a single supabase client for interacting with your database
console.log(`env`, import.meta);
const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_KEY
);

export default supabase;
