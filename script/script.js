function toggleAccordion(element) {
  // Obtém o elemento pai (item do acordeão)
  var item = element.parentNode;

  // Obtém o corpo do item do acordeão
  var body = item.querySelector('.accordion-item-body');

  // Alterna a visibilidade do corpo do item do acordeão
  if (body.style.display === 'none') {
    body.style.display = 'block';
  } else {
    body.style.display = 'none';
  }
}



class MobileNavbar {
  constructor(mobileMenu, navList, navLinks) {
    this.mobileMenu = document.querySelector(mobileMenu);
    this.navList = document.querySelector(navList);
    this.navLinks = document.querySelectorAll(navLinks);
    this.activeClass = 'active';

    this.handleClick = this.handleClick.bind(this);
    this.closeNavigation = this.closeNavigation.bind(this); // Adicione esta linha
  }

  animateLinks() {
    this.navLinks.forEach((link, index) => {
      link.style.animation
        ? (link.style.animation = '')
        : (link.style.animation = `navLinkFade 0.5s ease forwards ${
            index / 7 + 0.3
          }s`);
    });

    const zIndexValue = this.mobileMenu.classList.contains(this.activeClass)
      ? 1
      : 2;
    this.navLinks.forEach((link) => {
      link.style.zIndex = zIndexValue;
    });
  }

  handleClick() {
    this.navList.classList.toggle(this.activeClass);
    this.mobileMenu.classList.toggle(this.activeClass);
    this.animateLinks();
  }

  closeNavigation() {
    this.navList.classList.remove(this.activeClass);
    this.mobileMenu.classList.remove(this.activeClass);
    this.animateLinks(); // Chame a animação ao fechar a navegação
  }

  addClickEvent() {
    this.mobileMenu.addEventListener('click', this.handleClick);

    // Adicione um evento de clique diretamente nos links
    this.navLinks.forEach((link) => {
      link.addEventListener('click', () => {
        this.closeNavigation();
      });
    });

    // Adicione um ouvinte de clique ao document.body para fechar o menu ao clicar fora
    document.body.addEventListener('click', (event) => {
      const isNavListClicked =
        this.navList.contains(event.target) ||
        Array.from(this.navLinks).some((link) => link.contains(event.target));
      const isMobileMenuClicked = this.mobileMenu.contains(event.target);

      if (!isNavListClicked && !isMobileMenuClicked) {
        this.closeNavigation();
      }
    });
  }

  init() {
    if (this.mobileMenu) {
      this.addClickEvent();
    }
    return this;
  }
}

const mobileNavbar = new MobileNavbar(
  '.mobile-menu',
  '.nav-list',
  '.nav-list li',
);
mobileNavbar.init();
