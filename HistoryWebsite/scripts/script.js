const timelineRows = document.querySelectorAll('.timeline-row');

timelineRows.forEach((row, index) => {
  setTimeout(() => {
    row.classList.add('show'); // Apply animation to the entire row
  }, index * 200); // Adjust delay as needed
});

const timelineEvents = document.querySelectorAll('.timeline-event');

function openEventPage(event) {
    event.preventDefault(); // Prevent default form submission behavior (if applicable)
    const href = event.target.dataset.href; // Get data-href attribute
    if (href) {
      window.location.href = href; // Change the current window's location to the linked page
    }
  }

timelineEvents.forEach(event => {
  event.addEventListener('click', openEventPage);
});
