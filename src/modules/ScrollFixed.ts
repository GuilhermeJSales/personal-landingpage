import debounce from "./debounce";

export default class ScrollFixed{
  element: HTMLElement;
  lastPosition: number;
  constructor(element: HTMLElement, lastPosition: number = 200){
    this.element = element;
    this.lastPosition = lastPosition;

    this.scrollDistance = debounce(this.scrollDistance.bind(this));
    this.init();
  }


  scrollDistance(){
    const currentPosition = window.scrollY;

    if(currentPosition > this.lastPosition) {
      this.element.classList.add('active');
    } else if(currentPosition <= 20) {
      this.element.classList.remove('active');
    }

  }

  addControls(){
    window.addEventListener('scroll', this.scrollDistance);
  }


  init(){
    this.addControls();
  }
}