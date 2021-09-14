const slides = document.querySelector(".slider").children;
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");
const indicator = document.querySelector(".indicator")
let index = 0;


// manual operator
// add event to preview
prev.addEventListener("click", function(){
  prevSlide();
  // add update indcator to preview
  updateCircleIndicator();
  // reset resetTimer
  resetTimer();
});


// add event to next
next.addEventListener("click", function(){
  nextSlide();
  // add update indcator to next
  updateCircleIndicator();
  // reset resetTimer
   resetTimer();
});

  // indicators
function circleIndicator(){
  for(let i = 0; i < slides.length; i++){
    const div = document.createElement("div");
    div.innerHTML = i + 1;
    div.setAttribute("onclick", "indicateSlide(this)")
    div.id = i;
    if(i == 0){
      div.className = "active";
    }
    indicator.appendChild(div);

  }
}

// call for indicators
circleIndicator();

// add click to indicator circle
function indicateSlide(element){
  index = element.id;
  changeSlide();
  updateCircleIndicator();
  resetTimer();
}
// update circleIndicator

function updateCircleIndicator(){
  for(let i = 0; i < indicator.children.length; i++){
    indicator.children[i].classList.remove("active");
  }
  indicator.children[index].classList.add("active");
}
// for preview
function prevSlide(){
  if(index == 0){
    index = slides.length - 1;
  }
  else{
    index--;
  }
// call for preview
  changeSlide();

}

// for next
function nextSlide(){
  if(index == slides.length - 1){
    index = 0;
  }
  else{
    index++;
  }

// call for next
  changeSlide();

}

// change slide function
function changeSlide(){
  for(let i = 0; i < slides.length; i++){
    slides[i].classList.remove("active");
  }
  slides[index].classList.add("active");
}


// automatic operator

function resetTimer(){
  //when click to indicator or controls button stop timer
  clearInterval(timer);
  //then started again timer
  timer = setInterval(autoPlay,4000);
}

function autoPlay(){
  nextSlide();
  updateCircleIndicator();
}

let timer = setInterval(autoPlay,4000);
