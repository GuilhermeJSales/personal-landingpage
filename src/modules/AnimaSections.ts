import debounce from "./debounce";

interface Distance {
  element: HTMLElement;
  offset: number;
  side: string;
}


export default class AnimaSections {
  sections:HTMLElement[];
  windowPercent: number;
  distance: Distance[];
  constructor(sections:HTMLElement[]){
    this.sections = sections;
    this.distance = [];
    this.windowPercent = window.innerHeight * 0.96;

    this.checkDistance = debounce(this.checkDistance.bind(this), 50);

    this.init();
  }

  getDistance(){
    this.distance = this.sections.map((section) => {
      const offset = section.offsetTop;
      const side = String(section.dataset.anima);
      return {
        element: section,
        offset: Math.floor(offset - this.windowPercent),
        side
      }
    });
  }



  checkDistance(){
    this.distance.forEach((item) => {
      if(window.scrollY > item.offset){
        item.element.classList.add(item.side, 'ativo');
      }
    })  
  }

  addControls(){
    window.addEventListener('scroll', this.checkDistance)
  }

  init(){
    this.getDistance();
    this.checkDistance();
    this.addControls();
  }
}