// Lấy nút toggle
const themeToggle = document.getElementById('theme-toggle');

// Hàm set theme và lưu vào localStorage
function setTheme(isLight) {
  document.body.classList.toggle('light', isLight);
  themeToggle.textContent = isLight ? '☀️' : '🌙';
  localStorage.setItem('dochien_theme_light', isLight ? '1' : '0');
}

// Click toggle
themeToggle.addEventListener('click', () => {
  const isLight = !document.body.classList.contains('light');
  setTheme(isLight);
});

// Khởi tạo theme từ localStorage hoặc prefers-color-scheme
(function initTheme() {
  const saved = localStorage.getItem('dochien_theme_light');
  if (saved !== null) {
    setTheme(saved === '1');
  } else {
    const prefersLight = window.matchMedia('(prefers-color-scheme: light)').matches;
    setTheme(prefersLight);
  }
})();

// Smooth scroll cho anchor links
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const href = a.getAttribute('href');
    if (href.length > 1) {
      e.preventDefault();
      document.querySelector(href).scrollIntoView({behavior:'smooth', block:'start'});
    }
  });
});

// Set năm tự động
document.querySelector('.footer').textContent = `© ${new Date().getFullYear()} Do Chien. All rights reserved.`;