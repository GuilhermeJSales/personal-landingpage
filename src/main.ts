import AnimateNumbers from "./modules/AnimateNumbers";
import InputValidator from "./modules/InputValidator";
import { glideDepoiment } from "./modules/GlideDepoiments";
import { glide } from "./modules/GlideEvolution";


import SendForm from "./modules/SendForm";
import Slide from "./modules/Slide";
import ScrollMobileMenu from "./modules/ScrollMobileMenu";
import SmoothScroll from "./modules/SmoothScroll";
import ScrollFixed from "./modules/ScrollFixed";



const container = document.querySelector('#banner-slide');
const elements = document.getElementById('slide-elements');
const controls = document.getElementById('slide-controls');
if(container && elements && controls && elements.children.length){
  const slide = new Slide(container, Array.from(elements.children), controls);
}


const number = document.querySelectorAll<HTMLElement>('#numbers .count');
const section = document.querySelector<HTMLElement>('#numbers')

if(number && section && number.length){
  const animaNumber = new AnimateNumbers(Array.from(number),section);
}


glide.mount();

glideDepoiment.mount();



const emailElement = document.querySelector<HTMLInputElement>('#email');
const regexEmail = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

if(emailElement && emailElement.type === 'email' && regexEmail) {
  const validateEmail = new InputValidator(emailElement, regexEmail);
}

const nameElement = document.querySelector<HTMLInputElement>('#name');
const regexName = /^[a-zA-ZÀ-ú]+(?:\s[a-zA-ZÀ-ú]+)*$/;
if(nameElement && nameElement.type === 'text' && regexName) {
  const validateName = new InputValidator(nameElement, regexName);
}

const telElement = document.querySelector<HTMLInputElement>('#telphone');
const regexTel = /^\+?\d{1,3}[-.\s]?\d{6,14}$/;
if(telElement && telElement.type === 'tel' && regexTel) {
  const validateTel = new InputValidator(telElement, regexTel);
}


const contactForm = document.querySelector<HTMLFormElement>('.form');
const inputsValues = document.querySelectorAll<HTMLInputElement>('.form input');
const messageText = document.querySelector<HTMLTextAreaElement>('textarea');
const spanSendMessage = document.querySelector<HTMLSpanElement>('.message-send');


if(contactForm && inputsValues && inputsValues.length && messageText && spanSendMessage) {
  const sendEmail = new SendForm(contactForm, Array.from(inputsValues), messageText, spanSendMessage);
}






const mobileNav = document.querySelector<HTMLElement>('.bottom-nav');
const mediaQuery = '(max-width:860px)';

if(mobileNav && mediaQuery) {
   const scrollEvent = new ScrollMobileMenu(mobileNav, mediaQuery);
}


const links = document.querySelectorAll<HTMLElement>('[data-menu="smooth-scroll"] a[href^="#"]');
if(links && links.length) {
  const smoothScroll = new SmoothScroll(Array.from(links));
}


const scrollTop = document.querySelector<HTMLElement>('.arrowTop');
if(scrollTop) {
   const scrollTopEvent = new ScrollFixed(scrollTop);
}

