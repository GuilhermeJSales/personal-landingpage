export default class AnimateNumbers{
  numbers: HTMLElement[];
  time: number;
  section: HTMLElement;
  private interval: any;
  constructor(numbers: HTMLElement[], section:HTMLElement, time: number = 30){
    this.numbers = numbers;  
    this.time = time;  
    this.section = section;
    this.init();
  }


animate() {
  this.numbers.forEach(number => {
    const total = parseInt(number.innerText);
    if(!isNaN(total)){
    const increment = Math.floor(total / 100 + 1);
    let current = 0;
    this.interval = setInterval(() => {
      current += increment;
      number.innerText = String(current);
      if (current > total) {
        number.innerText = String(total);
        clearInterval(this.interval);
      }
    }, this.time * Math.random());
  }
}
  );
}


observe() {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if(entry.intersectionRatio >= 1){
        observer.disconnect()
        this.animate()
      }
    })
  },{
    threshold:1
  })
  observer.observe(this.section);
}


init(){
    this.observe();
}
}