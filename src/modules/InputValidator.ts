

export default class InputValidator {
  inputElement:HTMLInputElement;
  formButton:HTMLButtonElement | null;
  private regex: RegExp;
  constructor(inputElement: HTMLInputElement, regex:RegExp){
    this.inputElement = inputElement;
    this.formButton = document.querySelector('.form button');
    this.regex = regex;

    this.init();
  }




  //Valida se o valor digitado no input está de acordo com o regex;
  private validateInput(): boolean{
    return this.regex.test(this.inputElement.value);
  }

  //Verifica se a função validateInput retorna true ou false, para adicionar os estilos  no input;
  private validateInChange(): void{
   if(this.validateInput()){
      this.inputElement.style.border = 'none';
      this.inputElement.nextElementSibling?.classList.remove('active');
      if(this.formButton){
        this.formButton.disabled = false;
        this.formButton.style.cursor = "pointer";
      }
   } else {
      this.inputElement.style.animation = "shake .2s 2";
      this.inputElement.style.border = "1px solid red";
      this.inputElement.nextElementSibling?.classList.add('active');
      if(this.formButton){
        this.formButton.disabled = true;
        this.formButton.style.cursor = "not-allowed";
      }
   }
  }

  //Cria um span que fica abaixo do Input selecionado para validação;
  private createErrorElement() : void{
    const span = document.createElement('span');
    const errorText = this.inputElement.dataset.error || "Por favor digite um email válido";
    span.innerText = errorText;
    span.style.color="red";
    span.classList.add('error-text');
    this.inputElement.parentElement?.insertBefore(span, this.inputElement.nextElementSibling);
  }

  //Adiciona Evento aos controles
  private addControls() : void {
    this.inputElement.addEventListener('input', () => this.validateInChange());
  } 

  //Verifica se o input validado já tem um elemento de span após ele, caso não, 
  //ele adiciona um e depois ativa a função de controles
  init() : void{
    if(!this.inputElement.nextElementSibling){
      this.createErrorElement()
    }
    this.addControls();
  }
}