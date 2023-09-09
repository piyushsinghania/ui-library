import Tooltip from './ninja-ui/tooltip';
import Accordion from './ninja-ui/accordion';

const tooltip = new Tooltip(document.querySelector('.tooltip'));
tooltip.init();

const accordions = document.querySelectorAll('.accordion');
console.log(accordions);

accordions.forEach((accordion) => {
  const instance = new Accordion(accordion);
  instance.init();
});
