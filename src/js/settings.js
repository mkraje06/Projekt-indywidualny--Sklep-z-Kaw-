export const select = {
  templateOf: {
    menuProduct: '#template-product-widget',
  },
  nav: {
    links: '.main-nav a'
  },
  pages: {
    about: '.article-about',
    products: '.article-product',
    contact: '.article-contact',
  },
  containerOf: {
    productsList: '.products-list'
  }
};

export const classNames = {
  pages: {
    active: 'active'
  }
};

export const settings = {
  db: {
    url: '//localhost:3131',
    products: 'products',
  },
};

export const templates = {
  menuProduct: Handlebars.compile(document.querySelector(select.templateOf.menuProduct).innerHTML),
};