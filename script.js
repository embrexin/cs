var element = document.getElementsByClassName("background");

var loadvar;

function loadFunc() {
    loadvar = setTimeout(showPage, 2000);
}

function showPage() {
    document.getElementById("loader").style.display = "none";
    document.getElementById("background").style.display = "block";
    document.getElementById("background").style.animation="backgroundfadein 1s";
}

const faders = document.querySelectorAll('.fade-in');

const appearOptions = {
  threshold: 0,
  rootMargin: "0px 0px -250px 0px"
};

const appearOnScroll = new IntersectionObserver(function(
  entries,
  appearOnScroll
) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) {
      return;
    } else {
      entry.target.classList.add("appear");
      appearOnScroll.unobserve(entry.target);
    }
  });
},
appearOptions);

faders.forEach(fader => {
  appearOnScroll.observe(fader);
});


const checkbox = document.querySelector(".input");
//const colorChange = document.querySelector('label[for="myCheckbox"]');
var clicknum = 0;
var background = document.getElementsByClassName("background");
var text = document.querySelectorAll('[id=text]');

checkbox.addEventListener("change", function () {
  if (clicknum == 0) {
      background[0].style.background = "#e9edf0";
      text.forEach(element => {
        // Process each element
        element.style.color = "black";
      });
      clicknum = 1;
  } else {
      background[0].style.background = "black";
      text.forEach(element => {
        // Process each element
        element.style.color = "white";
      });
      clicknum = 0;
  }
});