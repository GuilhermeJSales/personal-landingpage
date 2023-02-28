import debounce from "./debounce";


export default class ScrollMobileMenu{
  component: HTMLElement;
  lastPosition: number;
  mediaQuery: string;
  constructor(component: HTMLElement, mediaQuery: string) {
    this.component = component;
    this.lastPosition = 100;
    this.mediaQuery = mediaQuery

    this.getDistance = debounce(this.getDistance.bind(this), 16);

    this.init();
  }


  private getDistance(){
    let currentPosition = window.scrollY;
    if(window.matchMedia(this.mediaQuery).matches){
      if (currentPosition > this.lastPosition) {
        this.component.classList.remove('active');
      } else {
        this.component.classList.add('active');
      }
      this.lastPosition = currentPosition;
    } else {
      this.component.classList.remove('active');
    }
  }

  addControls(){
    document.addEventListener('scroll', this.getDistance);
  }

  init(){
      this.addControls();
  }
}