// const slideWrapper = document.querySelector('.slide__wrapper');
// const leftButton = document.querySelector('.slider__btn-left');
// const rightButton = document.querySelector('.slider__btn-right');
// const interval = 2000;

// let slides = document.querySelectorAll('.slider__div');
// let index = 1;
// let slideId;

// const firstCopy = slides[0].cloneNode(true);
// const lastCopy = slides[slides.length - 1].cloneNode(true);
// const slideContainerWidth = slides[index].clientWidth;

// firstCopy.id = 'first-copy';
// lastCopy.id = 'last-copy';

// slideWrapper.append(firstCopy);
// slideWrapper.prepend(lastCopy);

// slideWrapper.style.transform = `translateX(${-slideContainerWidth * index}px)`;

// function startSlide() {
//   slideId = setInterval(() => {
//     switchToNextSlide();
//   }, interval);
// }

// function getSlide() {
//   return document.querySelectorAll('.slider__div');
// }

// slideWrapper.addEventListener('transitionend', () => {
//   slides = getSlide();
//   if (slides[index].id === firstCopy.id) {
//     slideWrapper.style.transition = 'none';
//     index = 1;
//     slideWrapper.style.transform =
//         `translateX(${-slideContainerWidth * index}px)`;
//   }

//   if (slides[index].id === lastCopy.id) {
//     slideWrapper.style.transition = 'none';
//     index = slides.length - 2;
//     slideWrapper.style.transform =
//         `translateX(${-slideContainerWidth * index}px)`;
//   }
// });

// slideWrapper.addEventListener('mouseenter', () => {
//   clearInterval(slideId);
// });

// slideWrapper.addEventListener('mouseleave', startSlide);

// startSlide();

// function switchToNextSlide() {
//   slides = getSlide();

//   if (index >= slides.length - 1) {
//     return;
//   }

//   index++;
//   slideWrapper.style.transform =
//       `translateX(${-slideContainerWidth * index}px)`;
//   slideWrapper.style.transition = '0.5s';

//   clearInterval(slideId);
//   startSlide();
// }

// function switchToPrevSlide() {
//   if (index <= 0) {
//     return;
//   }

//   index--;
//   slideWrapper.style.transform =
//       `translateX(${-slideContainerWidth * index}px)`;
//   slideWrapper.style.transition = '0.5s';

//   clearInterval(slideId);
//   startSlide();
// }

// rightButton.addEventListener('click', switchToNextSlide);
// leftButton.addEventListener('click', switchToPrevSlide);









// SWIPE IMPLEMENTATION START

// let coordX1 = 0;

// function touchStart(event) {
//   const firstTouch = event.touches[0];

//   coordX1 = firstTouch.clientX;
// }

// function touchMove(event) {
//   if (!coordX1) {
//     return false;
//   }

//   const coordX2 = event.touches[0].clientX;
//   const coordDiff = coordX2 - coordX1;

//   if (coordDiff > 0) {
//     switchToPrevSlide();
//   } else {
//     switchToNextSlide();
//   }

//   coordX1 = 0;
// }

// slideWrapper.addEventListener('touchstart', touchStart);
// slideWrapper.addEventListener('touchmove', touchMove);

// SWIPE IMPLEMENTATION END





function Slider(config) {
  const {sliderWrapper, slideInterval} = config;
  this.slider = sliderWrapper.querySelector('.slider');
  this.arrowNext = document.querySelector('.right-arrow');
  this.arrowPrev = document.querySelector('.left-arrow');

  // console.log(1, sliderWrapper);
  // console.log(2, slideInterval);
  // console.log(3, this.slider);
  // console.log(4, this.arrowNext);
  // console.log(5, this.arrowPrev);
  
  // transition: all 0.5s;
  
  this.speed = slideInterval || 2000;
  this.next = () => this.slider.appendChild(this.slider.firstElementChild);
  this.prev = () => this.slider.prepend(this.slider.lastElementChild);
          this.prev = () => this.slider.prepend(this.slider.lastElementChild);
  this.arrowNext.addEventListener('click', this.next);
  this.arrowPrev.addEventListener('click', this.prev);
  this.interval = () => setInterval(() => this.next(), this.speed);
  this.timer = this.interval();

  sliderWrapper.addEventListener('mouseleave', () => {
    this.timer = this.interval();
  });

  sliderWrapper.addEventListener('mouseenter', () => {
    clearInterval(this.timer);
  });
}


const portfolioSliderConfig = {
  sliderWrapper: document.querySelector('.portfolio__items'),
  // slideInterval: 5000,
  btnState: 'off',
  autoPlay: 'on',
};


const testimonialsSliderConfig = {
  sliderWrapper: document.querySelector('.testimonials__person-wrap'),
  slideInterval: 1000,
  animationSpeed: '1s',
};

function TestimonialsSlider(config) {
  const {sliderWrapper, animationSpeed} = config;
  Slider.call(this, config);
  const slides = sliderWrapper.querySelectorAll('.testimonials__person');

  slides.forEach((slide) => {
    slide.style.transition = animationSpeed || '0.5s';
  });
}

function PortfolioSlider(config) {
  const {btnState, autoPlay, sliderWrapper} = config;
  Slider.call(this, config);

  this.autoPlay = (autoPlay = 'on') => {
    if (autoPlay === 'off') {
      sliderWrapper.addEventListener('mouseleave', () => {
        clearInterval(this.timer);
      });
      clearInterval(this.timer);
    }
  };
  this.autoPlay(autoPlay);

  // this.showButtons = (btnState = 'on') => {
  //   if (btnState === 'on') {
  //     this.arrowNext.style.display = 'block';
  //     this.arrowPrev.style.display = 'block';
  //   } else if (btnState === 'off') {
  //     this.arrowNext.style.display = 'none';
  //     this.arrowPrev.style.display = 'none';
  //   } else {
  //     throw new Error('Wrong input data');
  //   }
  // };
  // this.showButtons(btnState);
}

// eslint-disable-next-line no-unused-vars
const portfolioSlider = new PortfolioSlider(portfolioSliderConfig);

// eslint-disable-next-line no-unused-vars
const testimonialsSlider = new TestimonialsSlider(testimonialsSliderConfig);

