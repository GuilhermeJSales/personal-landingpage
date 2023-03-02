export default class AnimateNumbers{
  numbers: HTMLElement[];
  time: number;
  section: HTMLElement;
  private observer: IntersectionObserver;
  constructor(numbers: HTMLElement[], section:HTMLElement,  time: number = 30){
    this.numbers = numbers;  
    this.time = time;  
    this.section = section;



    this.observer = new IntersectionObserver(this.handleObserver.bind(this),{
      root:null,
      rootMargin: "0px",
      threshold: .5,
    },);

    this.observer.observe(this.section);
  }


animate() {
  this.numbers.forEach(number => {
    const total = parseInt(number.innerText);
    if(!isNaN(total)){
    const increment = Math.floor(total / 100 + 1);
    let current = 0;
    const interval = setInterval(() => {
      current += increment;
      number.innerText = String(current);
      if (current > total) {
        number.innerText = total.toFixed();
        clearInterval(interval);
      }
    }, this.time);
  }
}
  );
}


private handleObserver(entries: IntersectionObserverEntry[]) : void {
  entries.forEach((entry) => {
    if(entry.isIntersecting){
      this.observer.disconnect();
      this.section.classList.add('active');
      this.animate();
    }
  }); 
}
}