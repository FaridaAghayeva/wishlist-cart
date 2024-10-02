import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://pnrckemrpupzuwmydviw.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBucmNrZW1ycHVwenV3bXlkdml3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjA2OTgyNDAsImV4cCI6MjAzNjI3NDI0MH0.GtL4zN4XjDgXvSAh4St1DwlyKovIzWHEm8slPn5VYMI";
const supabase = createClient(supabaseUrl, supabaseKey);
export default supabase;
