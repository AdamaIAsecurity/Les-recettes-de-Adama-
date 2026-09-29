// Menu mobile et recherche pour Les recettes d'Adama
document.addEventListener('DOMContentLoaded', () => {
  console.log('Site Adama prêt !');
  
  // Recherche simple
  const searchInput = document.querySelector('input[type="search"]');
  if(searchInput){
    searchInput.addEventListener('input', (e) => {
      const term = e.target.value.toLowerCase();
      document.querySelectorAll('.recipe-card').forEach(card => {
        card.style.display = card.textContent.toLowerCase().includes(term) ? '' : 'none';
      });
    });
  }
});
