const contentElement = document.getElementById('content');
const modeToggle = document.getElementById('modeToggle');
const linkElement = document.getElementById('link');


modeToggle.addEventListener('click', function() {
  // Toggle the dark mode class on the content element
  contentElement.classList.toggle('dark-mode');

  if (contentElement.classList.contains('dark-mode')) {
    linkElement.style.color = 'red'; // Change hyperlink color to white in dark mode
  } else {
    linkElement.style.color = 'blue'; // Change hyperlink color to blue in light mode
  }
});
