import { createClient } from '@supabase/supabase-js';
export const supabaseUrl = 'https://rioxntlgjdjzfnvhyhqi.supabase.co   jkebfkj';
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJpb3hudGxnamRqemZudmh5aHFpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDAzNTI2MDcsImV4cCI6MjA1NTkyODYwN30.ZaKjtCzYZXle9rYtiYlV-NoqAB6up_FETrb8Z0lg7cg';
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
