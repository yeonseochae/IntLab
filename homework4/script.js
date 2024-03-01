
// Get the .artwork div
const artworkDiv = document.querySelector('.artwork');

// Add a click event listener to the .artwork div
artworkDiv.addEventListener('click', function() {
    // Get the .artwork-info element
    const artworkInfo = this.querySelector('.artwork-info');

    // Toggle the visibility of the .artwork-info element by adding/removing a CSS class
    artworkInfo.classList.toggle('show-info');
});

// I was working around with querySelectorAll, 
// but I couldn't find a way to make both of the album covers work.


