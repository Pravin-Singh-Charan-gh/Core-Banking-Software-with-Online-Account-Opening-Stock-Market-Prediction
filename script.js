const loginBtn = document.getElementById('login-btn');
const dropdownMenu = document.getElementById('dropdown-menu');

// Toggle dropdown on Login click
loginBtn.addEventListener('click', function(event) {
  event.stopPropagation();
  if (dropdownMenu.style.display === 'flex') {
    dropdownMenu.style.display = 'none';
  } else {
    dropdownMenu.style.display = 'flex';
  }
});

// Close dropdown if clicked outside
document.addEventListener('click', function(event) {
  if (!event.target.closest('#login-dropdown')) {
    dropdownMenu.style.display = 'none';
  }
});

const heroSections = document.querySelectorAll('.hero-section');

function revealOnScroll() {
  const windowHeight = window.innerHeight;
  heroSections.forEach(section => {
    const sectionTop = section.getBoundingClientRect().top;
    if (sectionTop < windowHeight - 100) { // 100px before it comes fully
      section.classList.add('show');
    }
  });
}

// Trigger on scroll and on page load
window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);