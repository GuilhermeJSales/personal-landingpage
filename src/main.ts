import Slide from "./modules/Slide";



const container = document.querySelector('#banner-slide');
const elements = document.getElementById('slide-elements');
const controls = document.getElementById('slide-controls');
if(container && elements && controls && elements.children.length){
  const slide = new Slide(container, Array.from(elements.children), controls);
}




