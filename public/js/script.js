// Navbar
document.querySelectorAll('.nav-link').forEach(link => {
  const href = link.getAttribute('href');
  const path = window.location.pathname;

  if (href === '/' && path === '/') {
    link.classList.add('active');
  } 

  else if (href !== '/' && path.startsWith(href)) {
    link.classList.add('active');
  }
});


// Burger
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');
const page_header = document.querySelector('.page-header');

if (navToggle) {
  navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    navToggle.classList.toggle('active');
    
    if (navMenu.classList.contains('active')) {
      page_header.style.opacity = '0';
      page_header.style.visibility = 'hidden';
      page_header.style.zIndex = '-1';
    } else {
      page_header.style.opacity = '1';
      page_header.style.visibility = 'visible';
      page_header.style.zIndex = '1';
    }
  });
  
  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('active');
      navToggle.classList.remove('active');
      page_header.style.opacity = '1';
      page_header.style.visibility = 'visible';
      page_header.style.zIndex = '1';
    });
  });
  
  document.addEventListener('click', (e) => {
    if (!navToggle.contains(e.target) && !navMenu.contains(e.target)) {
      navMenu.classList.remove('active');
      navToggle.classList.remove('active');
      page_header.style.opacity = '1';
      page_header.style.visibility = 'visible';
      page_header.style.zIndex = '1';
    }
  });
}


// Filter
document.querySelectorAll('.filter-checkmark').forEach(checkbox => {
  checkbox.addEventListener('change', () => {
    const activeCats =
      Array.from(document.querySelectorAll('input[name="category"]:checked'))
        .map(cb => cb.value);
    const activeYears =
      Array.from(document.querySelectorAll('input[name="year"]:checked'))
        .map(cb => cb.value);
    
    document.querySelectorAll('.list-card').forEach(item => {
      const itemCats = item.getAttribute('data-categories').trim().split(/\s+/);
      const itemYear = item.getAttribute('data-year');

      const matchesCat = activeCats.length === 0 || activeCats.some(cat => itemCats.includes(cat));

      const matchesYear = activeYears.length === 0 || activeYears.includes(itemYear);
      
      item.style.display = (matchesCat && matchesYear) ? 'block' : 'none';
    });
  });
});


const toggleBtn = document.getElementById('filter-toggle');
const filtersSidebar = document.getElementById('filters-sidebar');

if (toggleBtn) {
  toggleBtn.addEventListener('click', () => {
    filtersSidebar.classList.toggle('active');
    toggleBtn.classList.toggle('active');
  });
  
  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      filtersSidebar.classList.remove('active');
      toggleBtn.classList.remove('active');
    });
  });
  
  document.addEventListener('click', (e) => {
    if (!toggleBtn.contains(e.target) && !filtersSidebar.contains(e.target)) {
      filtersSidebar.classList.remove('active');
      toggleBtn.classList.remove('active');
    }
  });
}




document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});


