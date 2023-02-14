import AnimateNumbers from "./modules/AnimateNumbers";
import MobileMenu from "./modules/MobileMenu";
import Slide from "./modules/Slide";



const container = document.querySelector('#banner-slide');
const elements = document.getElementById('slide-elements');
const controls = document.getElementById('slide-controls');
if(container && elements && controls && elements.children.length){
  const slide = new Slide(container, Array.from(elements.children), controls);
}



const button = document.querySelector<HTMLButtonElement>('.mobileButton');
const headerNav = document.querySelector<HTMLElement>('#banner nav');
const ulList = document.querySelector<HTMLUListElement>('.menu-header');
const navList = document.querySelectorAll<HTMLElement>('.menu-header li');


if(button && headerNav && ulList && navList && navList.length){
  const mobileMenu = new MobileMenu(button, headerNav, ulList, Array.from(navList));
  mobileMenu.init();
 
}




const number = document.querySelectorAll<HTMLElement>('#numbers .count');
const section = document.querySelector<HTMLElement>('#numbers')

if(number && section && number.length){
  const animaNumber = new AnimateNumbers(Array.from(number),section, 40);
}