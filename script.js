// === CONFIG SUPABASE ===
const supabaseUrl = "https://zumkzkcatqhfkbcxqszq.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inp1bWt6a2NhdHFoZmtiY3hxc3pxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjA3MTYxMzYsImV4cCI6MjA3NjI5MjEzNn0.t2bBs36aqMbSuIuVFQaq_uLl5YVK-k05rKuBIBYp4vU";
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
