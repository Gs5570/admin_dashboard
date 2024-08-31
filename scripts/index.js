document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.getElementById('hamburger');
  const sidebar = document.getElementById('left-side-panel-container');

  if (!hamburger || !sidebar) {
    console.error('Hamburger menu or sidebar not found.');
    return;
  }

  // Toggle the sidebar visibility on click
  hamburger.addEventListener('click', () => {
    sidebar.classList.toggle('active');

    // Optionally update the aria-expanded attribute for accessibility
    const isExpanded = hamburger.getAttribute('aria-expanded') === 'true';
    hamburger.setAttribute('aria-expanded', !isExpanded);
  });

  // Optional: Close sidebar when clicking outside
  document.addEventListener('click', (event) => {
    if (!sidebar.contains(event.target) && !hamburger.contains(event.target)) {
      sidebar.classList.remove('active');
      hamburger.setAttribute('aria-expanded', 'false');
    }
  });
});
