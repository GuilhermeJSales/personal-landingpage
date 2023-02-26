import AnimateNumbers from "./modules/AnimateNumbers";
import InputValidator from "./modules/InputValidator";
import { glideDepoiment } from "./modules/GlideDepoiments";
import { glide } from "./modules/GlideEvolution";

import MobileMenu from "./modules/MobileMenu";
import SendForm from "./modules/SendForm";
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


