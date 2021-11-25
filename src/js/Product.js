import { templates, select } from './settings.js';
import { utils } from './utils.js';

class Product {
  constructor(id, data){
    const thisProduct = this;

    thisProduct.id = id;
    thisProduct.data = data;

    thisProduct.renderInMenu();
  }

  renderInMenu(){
    const thisProduct = this;

    const generatedHTML = templates.menuProduct({ ...thisProduct.data, image: thisProduct.data.images[0] });


    thisProduct.element = utils.createDOMFromHTML(generatedHTML);
    //console.log(thisProduct.element);


    const menuContainerHome = document.querySelector(select.containerOf.productsList);

    menuContainerHome.appendChild(thisProduct.element);

  }
}

export default Product;