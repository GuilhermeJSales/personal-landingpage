export default class MobileMenu {
  button: HTMLButtonElement;
  nav: HTMLElement;
  ulMenu: HTMLUListElement;
  list: HTMLElement[];
  outside: string;
  activeClass: string;
  html: HTMLElement;

  constructor(button: HTMLButtonElement, nav: HTMLElement, ulMenu: HTMLUListElement, list: HTMLElement[]) {
    this.button = button;
    this.nav = nav;
    this.ulMenu = ulMenu;
    this.list = list;
    this.outside = "data-outside";
    this.activeClass = "active";
    this.html = document.documentElement;
    this.handleOutsideClick = this.handleOutsideClick.bind(this);
  }

  addActive(): void {
    this.ulMenu.classList.add(this.activeClass);
    this.button.classList.add(this.activeClass);
    this.outsideClick(this.ulMenu);
    this.animaLinks();
  }

  animaLinks(): void {
    this.list.forEach((links, index) => {
        links.style.animation
          ? (links.style.animation = "")
          : (links.style.animation = `linksMobile .8s ease forwards ${index / 7 + 0.3}s`);
    });
  }

  outsideClick(element: HTMLElement): void {
    if (!element.hasAttribute(this.outside)) {
      element.setAttribute(this.outside, "");
      setTimeout(() => this.html.addEventListener("click", this.handleOutsideClick));
    }
  }

  handleOutsideClick(event: MouseEvent): void {
    const { target } = event;
    if (target instanceof HTMLElement) {
      if (!this.ulMenu.contains(target)) {
        this.ulMenu.removeAttribute(this.outside);
        this.html.removeEventListener("click", this.handleOutsideClick);
        this.ulMenu.classList.remove(this.activeClass);
        this.button.classList.remove(this.activeClass);
        this.list.forEach((links) => {
          links.style.animation = "";
        });
      }
    }
  }

  addControls(): void {
    this.button.addEventListener("click", () => this.addActive());
  }

  init(): void {
    this.addControls();
  }
}