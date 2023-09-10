import './styles/tabs.css';

class Tabs {
  constructor(container) {
    this.container = container;
    this.triggers = container.querySelectorAll('.trigger');
    this.contents = container.querySelectorAll('.content');
  }
  init() {
    this.triggers.forEach((trigger) => {
      trigger.addEventListener('click', (e) => {
        this.toggleTabs(e);
        this.toggleContent(e);
      });
    });
  }
  toggleTabs(e) {
    this.triggers.forEach((trigger) => trigger.classList.remove('active'));
    e.target.classList.add('active');
  }
  toggleContent(e) {
    this.container
      .querySelectorAll('.content')
      .forEach((content) => content.classList.remove('active'));

    const selector = e.target.getAttribute('data-target');
    const content = this.container.querySelector(selector);
    content.classList.add('active');
  }
}

export default Tabs;
