function initCarousel() {
  // ваш код...
  let currIndex = 0;
  let arrRight = document.querySelector(".carousel__arrow_right");
  let arrLeft = document.querySelector(".carousel__arrow_left");
  let carouselWidth = document.querySelector(".carousel__inner").offsetWidth;
  let slidesCount = document.querySelectorAll(".carousel__slide").length;

  setArrow(currIndex, arrRight, arrLeft, slidesCount);

  arrRight.addEventListener("click", () => {
    currIndex++;
    document.querySelector(".carousel__inner").style.transform = `translateX(-${
      currIndex * carouselWidth
    }px)`;
    setArrow(currIndex, arrRight, arrLeft, slidesCount);
  });

  arrLeft.addEventListener("click", () => {
    currIndex--;
    document.querySelector(".carousel__inner").style.transform = `translateX(-${
      currIndex * carouselWidth
    }px)`;
    setArrow(currIndex, arrRight, arrLeft, slidesCount);
  });
}

function setArrow(activeIndex, arrowRight, arrowLeft, countSlide) {
  if (activeIndex === 0) {
    arrowLeft.style.display = "none";
  } else {
    arrowLeft.style.display = "";
  }

  if (activeIndex >= countSlide - 1) {
    arrowRight.style.display = "none";
  } else {
    arrowRight.style.display = "";
  }
}
