// ScreenToll configuration — commit this file to your GitHub repo.
// Both Supabase values are public-safe: row-level security and the operator
// list decide who gets in, not secrecy. Keep the YouTube key restricted by
// website in Google Cloud so only your own origins can spend its quota.
window.SCREENTOLL_CONFIG = {
  SUPABASE_URL: 'https://wylxvmkcrexwfpjpbhyy.supabase.co',
  SUPABASE_ANON_KEY: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Ind5bHh2bWtjcmV4d2ZwanBiaHl5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Njg2MzkxMDYsImV4cCI6MjA4NDIxNTEwNn0.6Bxo42hx4jwlJGWnfjiTpiDUsYfc1QLTN3YtrU1efak',
  YOUTUBE_API_KEY: 'AIzaSyD84H8ZcbLNgEQ-6ggzP9D2ksVEnvTsFVk',
  // Optional — change only if your tables are named differently.
  ROLES_TABLE: 'authentication_mode_user_roles',
  STATE_TABLE: 'screen_toll_state'
};
