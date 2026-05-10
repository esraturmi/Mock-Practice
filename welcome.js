
const welcomeText = document.getElementById('welcome-text');
const welcomeSub = document.getElementById('welcome-sub');
const logoutBtn = document.getElementById('logout-btn');
const deleteBtn = document.getElementById('delete-btn');

const raw = localStorage.getItem('currentUser');
if (!raw) {
  // not logged in, send back to login
  window.location.href = 'index.html';
} else {
  const user = JSON.parse(raw);
  // Do not display personal identifiers on the page for privacy
  if (welcomeText) welcomeText.textContent = `Welcome`;
  if (welcomeSub) { welcomeSub.textContent = ``; welcomeSub.style.display = 'none'; }

  
  if (logoutBtn) {
    logoutBtn.addEventListener('click', () => {
      localStorage.removeItem('currentUser');
      window.location.href = 'index.html';
    });
  }

  
  if (deleteBtn) {
    deleteBtn.addEventListener('click', () => {
      if (!confirm('Are you sure you want to delete your account?')) return;

      const users = JSON.parse(localStorage.getItem('users')) || [];
      const updated = users.filter(u => u.email !== user.email);
      localStorage.setItem('users', JSON.stringify(updated));
      localStorage.removeItem('currentUser');
      window.location.href = 'registration.html';
    });
  }
}
