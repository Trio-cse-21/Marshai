
const dropdownToggles = document.querySelectorAll('.dropdown-toggle');

dropdownToggles.forEach(toggle => {
  toggle.addEventListener('click', () => {
    const dropdownMenu = toggle.nextElementSibling;
    dropdownMenu.classList.toggle('active'); // Toggles visibility on click
  });
});
