// ScreenToll configuration — commit this file to your GitHub repo.
// Both Supabase values are public-safe: row-level security and the operator
// list decide who gets in, not secrecy. Keep the YouTube key restricted by
// website in Google Cloud so only your own origins can spend its quota.
window.SCREENTOLL_CONFIG = {
  SUPABASE_URL: 'https://wylxvmkcrexwfpjpbhyy.supabase.co',
  SUPABASE_ANON_KEY: 'sb_publishable_e3pDOuxIdstaC7s0a680kQ_R10TrAyv',
  YOUTUBE_API_KEY: 'AIzaSyD84H8ZcbLNgEQ-6ggzP9D2ksVEnvTsFVk',
  // Optional — change only if your tables are named differently.
  ROLES_TABLE: 'authentication_mode_user_roles',
  STATE_TABLE: 'screen_toll_state'
};
