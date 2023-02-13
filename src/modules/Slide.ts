import Timeout from "./Timeout";

export default class Slide {
  container: Element;
  slides: Element[];
  controls: Element;
  time: number;
  index;
  slide: Element;
  timeout: Timeout | null;
  pausedTimeout: Timeout | null;
  paused: boolean;
  constructor(container: Element, slides: Element[], controls:Element, time: number = 5000 ) {
    this.container = container;
    this.slides = slides;
    this.controls = controls;
    this.time = time;
    this.index = 0;
    this.slide = this.slides[this.index];
    this.timeout = null;
    this.pausedTimeout = null;
    this.paused = false;

    this.init();
  }

  hide(el: Element){
    el.classList.remove('active');
  }

  show(index: number) {
    this.index = index;
    this.slide = this.slides[this.index];
    this.slides.forEach((el) => this.hide(el));
    this.slide.classList.add('active');
    this.auto();
  }

  prev(){
    if(this.paused) return;
    const prev = this.index  > 0 ? this.index - 1 : this.slides.length - 1;
    this.show(prev);
  }

  next(){
    if(this.paused) return;
    const next = (this.index + 1 ) < this.slides.length ? this.index + 1 : 0;
    this.show(next);
  }

  auto(){
    this.timeout?.clear();
    this.timeout = new Timeout(() => this.next(), this.time)
  }

  pause(){
    this.pausedTimeout = new Timeout(() => {
      this.timeout?.pause()
      this.paused = true;
    }, 300); 
  }

  continue(){
    this.pausedTimeout?.clear();
    if(this.paused){
      this.paused = false;
      this.timeout?.continue();
    }

  }

  private addControls(){
    const prevButton = document.createElement('button');  
    const nextButton = document.createElement('button'); 
      prevButton.innerText = 'slide anterior';
      nextButton.innerText = 'próximo slide';
      this.controls.appendChild(prevButton);
      this.controls.appendChild(nextButton);

      this.controls.addEventListener('pointerdown', () => this.pause());
      this.controls.addEventListener('pointerup', () => this.continue());
      this.controls.addEventListener('touchend', () => this.continue());

    prevButton.addEventListener('pointerup', () => this.prev());
    nextButton.addEventListener('pointerup', () => this.next());
  }


  init() {
    this.addControls();
    this.show(this.index);
  }
}