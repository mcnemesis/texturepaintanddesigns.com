// Sidebar toggle
const sidebar = document.getElementById('sidebar');
const toggleBtn = document.getElementById('toggle-sidebar');
toggleBtn.addEventListener('click', () => {
  sidebar.classList.toggle('collapsed');
  toggleBtn.textContent = sidebar.classList.contains('collapsed') ? '›' : '<';
});

// Collapsible menu logic
document.querySelectorAll('[data-collapsible]').forEach(btn => {
  btn.addEventListener('click', () => {
    const icon = btn.querySelector('.icon');
    const submenu = btn.nextElementSibling;
    const isOpen = submenu.classList.toggle('expanded');
    icon.textContent = isOpen ? '×' : '+';
  });
});

// Carousel functionality
const slides = document.querySelectorAll('.slide');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
let currentIndex = 0;

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.toggle('active', i === index);
  });
}

prevBtn.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  showSlide(currentIndex);
});

nextBtn.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % slides.length;
  showSlide(currentIndex);
});

// Initialize first slide
showSlide(currentIndex);