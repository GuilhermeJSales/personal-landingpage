import emailjs  from "@emailjs/browser";


export default class SendForm{
  contactForm: HTMLFormElement;
  inputsValues:HTMLInputElement[];
  messageText:HTMLTextAreaElement;
  spanSendMessage:HTMLSpanElement;
  constructor(contactForm: HTMLFormElement, inputsValues:HTMLInputElement[], messageText:HTMLTextAreaElement, spanSendMessage:HTMLSpanElement){
    this.contactForm = contactForm;
    this.inputsValues = inputsValues;
    this.messageText = messageText;
    this.spanSendMessage = spanSendMessage;
     

    this.init();
  }

  private sendForm(event: Event){
    event.preventDefault();
    if(this.contactForm.children[4] instanceof HTMLButtonElement){
      this.contactForm.children[4].disabled = true;
      this.contactForm.children[4].style.cursor = 'wait';
    }
    this.inputsValues.forEach(inputs => inputs.setAttribute('disabled', 'true'));
    this.messageText.setAttribute('disabled', 'true');
    const message = this.messageText.value;
    const name = this.inputsValues[0].value;
    const tel = this.inputsValues[1].value;
    const email = this.inputsValues[2].value;   

    const templateParams = {
      from_name: name,
      message: message,
      email: email,
      tel: tel
    }
    emailjs.send('service_qgr3bz6', 'template_pwzcz5e', templateParams, 'khekQr0melrEJhmci')
    .then(() => {
      this.spanSendMessage.classList.add('active');
      this.spanSendMessage.innerText = "Mensagem enviada com sucesso!"
      this.contactForm.reset();
      this.inputsValues.forEach(inputs => inputs.removeAttribute('disabled'));
      this.messageText.removeAttribute('disabled');
      if(this.contactForm.children[4] instanceof HTMLButtonElement){
        this.contactForm.children[4].disabled = false;
        this.contactForm.children[4].style.cursor = 'pointer';
        }
    }, () => {
      this.spanSendMessage.innerText = "Erro, a sua mensagem não foi enviada. Tente novamente mais tarde."
      this.spanSendMessage.classList.remove('active');
    } )
  }

  private addControls() : void {
    this.contactForm.addEventListener('submit', (event: Event) => this.sendForm(event))
  } 

  init(){
    this.addControls();
  }

}