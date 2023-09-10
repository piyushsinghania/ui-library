import Tooltip from './ninja-ui/tooltip';
import Accordion from './ninja-ui/accordion';
import Tabs from './ninja-ui/tabs';

// Tooltip
const tooltip = new Tooltip(document.querySelector('.tooltip'));
tooltip.init();

// Accordion
const accordions = document.querySelectorAll('.accordion');
accordions.forEach((accordion) => {
  const instance = new Accordion(accordion);
  instance.init();
});

// Tabs
const tabs = new Tabs(document.querySelector('.tabs'));
tabs.init();
