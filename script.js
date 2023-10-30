// Scroll Animation
// This code sets up an IntersectionObserver to add or remove a 'show' class based on whether elements with the 'hidden' class are in the viewport.

// Observes changes in visibility for elements with the 'hidden' class
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe (el));


// SMOKE EFFECT
// This code splits text content into individual letters by wrapping each letter with a <span> tag.

// Selects the element with the class 'text' and splits its content into individual letters
const text = document.querySelector('.text');
text.innerHTML = text.textContent.replace(/\S/g,
"<span>$&</span>");

// Adds an 'active' class to each individual letter when the letter is hovered over
const letters = document.querySelectorAll('span');
for (let i=0; i<letters.length; i++){
    letters[i].addEventListener("mouseover", function
    (){
        letters[i].classList.add('active')
    })
}

// This code controls the visibility of the navigation bar based on the user's scroll direction.
var prevScrollpos = window.scrollY;
// Listens for scroll events
window.onscroll = function () {
  var currentScrollPos = window.scrollY;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("nav").style.top = "0"; // Shows the navigation bar when scrolling up
  } else {
    document.getElementById("nav").style.top = "-100px"; // Hides the navigation bar when scrolling down
  }
  prevScrollpos = currentScrollPos; // Updates the previous scroll position
};

// Initializing the initial coordinates and selecting all elements with the class name "circle"
const coords = { x: 0, y: 0 };
const circles = document.querySelectorAll(".circle");

// Resetting the position of each circle
circles.forEach(function (circle, index) {
  circle.x = 0;
  circle.y = 0;
});

// Adding an event listener to track the mouse movement
window.addEventListener("mousemove", function(e){
  coords.x = e.clientX;
  coords.y = e.clientY;
  
});

// Defining the main animation function for the circles
function animateCircles() {
  
  let x = coords.x;
  let y = coords.y;

  // Looping through each circle to update their position and scale
  circles.forEach(function (circle, index) {
    circle.style.left = x - 12 + "px";
    circle.style.top = y - 12 + "px";

    // Setting the scale of the circle based on its index
    circle.style.scale = (circles.length - index) / circles.length;

    // Updating the circle's current position
    circle.x = x;
    circle.y = y;

    // Calculating the position for the next frame of animation
    const nextCircle = circles[index + 1] || circles[0];
    x += (nextCircle.x - x) * 0.3;
    y += (nextCircle.y - y) * 0.3;
  });

  // Requesting the next animation frame for smooth animation
  requestAnimationFrame(animateCircles);
}

// Initiating the animation loop
animateCircles();

