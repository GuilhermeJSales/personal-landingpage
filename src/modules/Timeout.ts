export default class Timeout {
  time;
  handler;
  id;
  timeLeft;
  start;
  constructor(handler: TimerHandler, time: number){
    this.handler = handler
    this.time = time;
    this.id = setTimeout(handler, time);

    this.start = Date.now();
    this.timeLeft = time;
  }

  clear(){
    clearTimeout(this.id);
  }

  pause(){
    this.clear();
    const passed = Date.now() - this.start;
    this.timeLeft = this.timeLeft - passed;
  }

  continue(){
    this.clear();
    this.id = setTimeout(this.handler, this.timeLeft);
    this.start = Date.now();
  }

}