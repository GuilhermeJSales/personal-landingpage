export default class SmoothScroll {
  links: HTMLElement[]
  constructor(links: HTMLElement[]){
    this.links = links;
    this.init();
  }


  scrollToSection(event: MouseEvent){
    event.preventDefault();
    if(event.currentTarget instanceof HTMLElement){
      const href = event.currentTarget.getAttribute('href');
      if(href) {
        const sections = document.querySelector(href);
        sections?.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        })
      }
    }
  }


  addControls(){
    this.links.forEach((link) => {
      link.addEventListener('click', (event: MouseEvent) => this.scrollToSection(event))
    })
  }

  init(){
    this.addControls();
  }
}