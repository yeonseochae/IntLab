// const clickMe = document.querySelector('#click-me');

// // console.log("clickMe: ", clickMe);
// const paragraph = document.querySelector('.artwork-info');


// clickMe.addEventListener('click', e =>{
//   console.log("BUTTON CLICKED!")
//   artworkInfo.classList.toggle("artwork-info");

// })
// Get the .artwork div
const artworkDiv = document.querySelector('.artwork');

// Add a click event listener to the .artwork div
artworkDiv.addEventListener('click', function() {
    // Get the .artwork-info element
    const artworkInfo = this.querySelector('.artwork-info');

    // Toggle the visibility of the .artwork-info element by adding/removing a CSS class
    artworkInfo.classList.toggle('show-info');
});


