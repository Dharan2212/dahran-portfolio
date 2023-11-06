$(document).ready(function(){

    $('#menu').click(function(){
      $(this).toggleClass('fa-times');
      $('header').toggleClass('toggle');
    });
  
    $(window).on('scroll load',function(){
  
      $('#menu').removeClass('fa-times');
      $('header').removeClass('toggle');
  
      if($(window).scrollTop() > 0){
        $('.top').show();
      }else{
        $('.top').hide();
      }
  
    });
  
    // smooth scrolling 
  
    $('a[href*="#"]').on('click',function(e){
  
      e.preventDefault();
  
      $('html, body').animate({
  
        scrollTop : $($(this).attr('href')).offset().top,
  
      },
        500, 
        'linear'
      );
  
    });
  
  });
  
  // number counting
  
  let valueDisplays = document.querySelectorAll(".num");
  let interval = 1500;
  
  valueDisplays.forEach((valueDisplay) => {
    let startValue = 0;
    let endValue = parseInt(valueDisplay.getAttribute("data-val"));
    let duration = Math.floor(interval / endValue);
    let counter = setInterval(function(){
      startValue += 1;
      valueDisplay.textContent = startValue;
  
      if(startValue == endValue){
        clearInterval(counter);
      }
    }, duration);
  });
  
  
  // Get the modal element
  var modal = document.getElementById("storyModal");
  
  // Get the button that opens the modal
  var btn = document.getElementById("storyButton");
  
  // Get the <span> element that closes the modal
  var span = document.getElementsByClassName("close")[0];
  
  // When the user clicks the button, open the modal
  btn.onclick = function() {
    modal.style.display = "block";
  };
  
  // When the user clicks on <span> (x), close the modal
  span.onclick = function() {
    modal.style.display = "none";
  };
  
  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  };

  // const achievementList = document.querySelector(".achievements ul");
  // const enlargedImages = document.querySelectorAll(".enlarged-image img");
  
  // // Handle image clicks and display enlarged image
  // achievementList.addEventListener("click", (event) => {
  //     if (event.target.tagName === "IMG") {
  //         const imageIndex = parseInt(event.target.getAttribute("data-index"), 10);
  //         enlargedImage.src = event.target.src;
  //         currentIndex = imageIndex;
  //         enlargedImage.style.display = "block";
  //     }
  // });
  
  // // Handle clicking on the enlarged image to close it
  // enlargedImage.addEventListener("click", () => {
  //     enlargedImage.style.display = "none";
  // });
  
  // // Enable navigation between images
  // let currentIndex = 0;
  
  // enlargedImages[currentIndex].style.display = "block"; // Show the initial image
  
  // // Handle navigation between images
  // achievementList.addEventListener("click", (event) => {
  //     if (event.target.tagName === "IMG") {
  //         const newIndex = parseInt(event.target.getAttribute("data-index"), 10);
  //         if (newIndex !== currentIndex) {
  //             enlargedImages[currentIndex].style.display = "none"; // Hide the previous image
  //             currentIndex = newIndex;
  //             enlargedImages[currentIndex].style.display = "block"; // Show the current image
  //         }
  //     }
  // });
  