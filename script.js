// const myBox =  document.getElementById("myBox");

// function changeColor(event){
//     event.target.style.backgroundColor = "tomato"
// }

// myBox.addEventListener("click",changeColor);
/* If you're feeling fancy you can add interactivity 
    to your site with Javascript */

    const clickMe = document.querySelector('#click-me');


    /* use console.logs to help see what are in your variables */
    console.log("clickMe: ", clickMe);
    
    
    /* querySelector will return the first item that matches */
    const paragraph = document.querySelector('.target-class');
    // console.log("paragraph: ", paragraph);
    
    /* use querySelectorAll when you want to select multiple items */
    // const paragraphs = document.querySelectorAll('.target-class');
    // console.log("paragraphs: ", paragraphs);
    
    
    clickMe.addEventListener("click", (event) => {
      console.log("BUTTON CLICKED!");
      // console.log("Clicked Element: ", event.target);
      
      /* you can toggle a class on/off */
      paragraph.classList.toggle("animated");
      
      // if your variable is an array of elements, you need to loop over them
      // paragraphs.forEach((paragraph) => {
      //   console.log("paragraph: ", paragraph);
      //   paragraph.classList.toggle("animated");
      // })
      
      /* you can also add/remove classes */
      // if (paragraph.classList.contains('animated')) {
      //   paragraph.classList.remove('animated');
      // } else {
      //   paragraph.classList.add('animated');
      // }
      
      /* you can rewrite content */
      // paragraph.textContent = "A paragraph is a paragraph";
    });
