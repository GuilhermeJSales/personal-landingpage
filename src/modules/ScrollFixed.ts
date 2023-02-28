import debounce from "./debounce";

export default class ScrollFixed{
  element: HTMLElement;
  lastPosition: number;
  constructor(element: HTMLElement){
    this.element = element;
    this.lastPosition = 200;

    this.scrollDistance = debounce(this.scrollDistance.bind(this));
    this.init();
  }


  scrollDistance(){
    const currentPosition = window.scrollY;

    if(currentPosition > this.lastPosition) {
      this.element.classList.add('active');
    } else if(currentPosition === 0) {
      this.element.classList.remove('active');
    }

  }

  addControls(){
    document.addEventListener('scroll', this.scrollDistance);
  }


  init(){
    this.addControls();
  }
}