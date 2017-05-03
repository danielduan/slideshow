class Slideshow {
  constructor(rootNode) {

    this.rootNode = rootNode;
    this.slideContainer = rootNode.getElementsByClassName('slides')[0];
    this.slides = rootNode.getElementsByClassName('slide');
    this.slides[0].className += ' show';
    this.currentSlide = 0;
    this.totalSlides = this.slides.length;

    this.previousButton = document.querySelector('.control.left');
    this.nextButton = document.querySelector('.control.right');

    this.previousButton.addEventListener('click', this.previousSlide.bind(this));
    this.nextButton.addEventListener('click', this.nextSlide.bind(this));

    this.autoplay();
  }

  autoplay() {
    setTimeout(() => {
      this.nextSlide();
      this.autoplay();
    }, 5000);
  }

  nextSlide() {
    this.currentSlide ++;

    if (this.currentSlide >= this.totalSlides) {
      this.currentSlide -= this.totalSlides;
    }

    this.changeSlide();
  }

  previousSlide() {
    this.currentSlide --;

    if (this.currentSlide < 0) {
      this.currentSlide += this.totalSlides;
    }

    this.changeSlide();
  }

  changeSlide() {
    document.querySelector('.slide.show').className = 'slide';
    this.slides[this.currentSlide].className += ' show';
  }

}

const slideshowEl = document.querySelector('.slideshow');
const instance = new Slideshow(slideshowEl);
