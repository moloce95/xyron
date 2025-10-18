// === CONFIG SUPABASE ===
const supabaseUrl = "TON_PROJECT_URL";
const supabaseKey = "TA_ANON_KEY";
const supabase = supabase.createClient(supabaseUrl, supabaseKey);

// === Exemple : récupérer les posts ===
async function chargerPosts() {
  const { data, error } = await supabase
    .from('posts')
    .select('*')
    .eq('published', true)
    .order('created_at', { ascending: false });

  if (error) {
    console.error('Erreur chargement posts:', error);
    return;
  }

  const container = document.getElementById('posts');
  if (!container) return;

  container.innerHTML = data.map(post => `
    <div class="card">
      <h2>${post.title}</h2>
      <p>${post.content}</p>
    </div>
  `).join('');
}
