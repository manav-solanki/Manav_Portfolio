// Toggle navigation menu on small screens
const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.getElementById('nav-links');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});



  const tabs = document.querySelectorAll('.tab');
  const contents = document.querySelectorAll('.tab-content');

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      // Remove active from all
      tabs.forEach(t => t.classList.remove('active'));
      contents.forEach(c => c.classList.remove('active'));

      // Activate clicked tab
      tab.classList.add('active');
      document.getElementById(tab.dataset.tab).classList.add('active');
    });
  });

  function toggleDetails(card) {
    card.classList.toggle("active");
  }
  
  function toggleDetails(event, link) {
    event.preventDefault();
    const card = link.closest('.service-card');
    card.classList.toggle('active');
  
    // Change text on toggle
    link.textContent = card.classList.contains('active') ? 'Show Less' : 'Learn More';
  }

  
  // Learn More Modal Logic
const modal = document.getElementById('modal');
const modalTitle = document.getElementById('modal-title');
const modalDescription = document.getElementById('modal-description');
const modalClose = document.getElementById('modal-close');

document.querySelectorAll('.learn-more').forEach(button => {
  button.addEventListener('click', function () {
    const card = this.closest('.service-card');
    const title = card.getAttribute('data-title');
    const detail = card.getAttribute('data-detail');

    modalTitle.textContent = title;
    modalDescription.textContent = detail;
    modal.style.display = 'flex';
  });
});

modalClose.addEventListener('click', () => {
  modal.style.display = 'none';
});

window.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.style.display = 'none';
  }
});






const seeMoreBtn = document.getElementById('seeMoreBtn');
const hiddenProjects = document.querySelectorAll('.project.hidden');
let isExpanded = false;

seeMoreBtn.addEventListener('click', () => {
  hiddenProjects.forEach(project => {
    project.style.display = isExpanded ? 'none' : 'block';
  });

  seeMoreBtn.textContent = isExpanded ? 'See More' : 'Show Less';
  isExpanded = !isExpanded;
});


function showSuccessMessage() {
  const form = document.getElementById('contactForm');
  const successMsg = document.getElementById('successMessage');

  // Wait briefly to simulate form submission
  setTimeout(() => {
    successMsg.style.display = 'block';

    // Hide after 5 seconds
    setTimeout(() => {
      successMsg.style.display = 'none';
    }, 5000);

    // Clear form fields
    form.reset();
  }, 500); // Adjust if necessary for your form submission delay

  return true; // Let the form submit normally via hidden iframe
}