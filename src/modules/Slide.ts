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
  thumbItems: HTMLElement[] | null;
  thumb: HTMLElement | null;
  thumbButton: HTMLElement[] | null;
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

    this.thumbItems = null;
    this.thumb = null;
    this.thumbButton = null;

    this.init();

  }

  hide(el: Element){
    el.classList.remove('active');
  }

  show(index: number) {
    this.index = index;
    this.slide = this.slides[this.index];

    if(this.thumbItems) {
      this.thumb = this.thumbItems[this.index];
      this.thumbItems.forEach(thumb => thumb.classList.remove('active'));
      this.thumb.classList.add('active')
    }

    this.slides.forEach((el) => this.hide(el));
    this.slide.classList.add('active');
    this.auto(this.time);
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

  auto(time: number){
    this.timeout?.clear();
    this.timeout = new Timeout(() => this.next(), time)
    if(this.thumb) this.thumb.style.animationDuration = `${time}ms`
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

  private addThumbItems() {
    const thumbContainer = document.createElement('div');
    thumbContainer.id = "slide-thumb";
    for (let i = 0; i < this.slides.length; i++) {
      thumbContainer.innerHTML += `<span><span class="thumb-item"></span</span>`
    }
    this.container.appendChild(thumbContainer);
    this.thumbItems = Array.from(document.querySelectorAll(".thumb-item"));
    this.thumbButton = Array.from(document.querySelectorAll('#slide-thumb > span'))
    this.thumbButton?.forEach((button, index) => button.addEventListener('pointerdown', () => this.show(index)));
  }


  init() {
    this.addControls();
    this.addThumbItems();
    this.show(this.index);
  }
}