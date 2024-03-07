
// Get the .artwork div
const artworkDiv = document.querySelector('.artwork');

// Add a click event listener to the .artwork div
artworkDiv.addEventListener('click', function() {
    // Get the .artwork-info element
    const artworkInfo = this.querySelector('.artwork-info');

    // Toggle the visibility of the .artwork-info element by adding/removing a CSS class
    artworkInfo.classList.toggle('show-info');
});



let.artworks = document.querySelectorAll('artworks');
console.log("artworks", artworks);

// ->Each time the document is searched, it is going to look for artwork-info
artworks.forEach(function(artwork){
    console.log("artwork", artwork)
    let info = artwork.querySelector('.artwork-info');
    console.log("info", info);
});


