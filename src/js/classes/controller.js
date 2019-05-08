import Transformer from './transformer.js';

export default class {
  constructor({ data, buttonElem, inputElem, renderContainer }) {
    this._buttonElem = buttonElem;
    this._inputElem = inputElem;
    this._renderContainer = renderContainer;
    this._transformer = new Transformer(data);

    this.handleButtonClick = this.handleButtonClick.bind(this);
  }

  handleButtonClick(ev) {
    const value = this._inputElem.value;
    this._transformer.setPosition(value);

    this.renderList();
  }

  renderList() {
    const items = this._transformer.getSetData();

    const newFragment = document.createDocumentFragment();

    items.forEach(item => {
      const wrapper = document.createElement('div');
      wrapper.classList.add('city-selector');


      const checkbox = document.createElement('input');
      checkbox.type = "checkbox";
      checkbox.value = item;
      checkbox.id = item;

      const checkboxLabel = document.createElement('label');
      checkboxLabel.htmlFor = item;
      checkboxLabel.textContent = item;


      wrapper.appendChild(checkbox);
      wrapper.appendChild(checkboxLabel);
      newFragment.appendChild(wrapper);
    });

    while (this._renderContainer.firstChild) {
      this._renderContainer.removeChild(this._renderContainer.firstChild)
    }

    this._renderContainer.appendChild(newFragment);
  }

  init() {
    this._buttonElem.addEventListener('click', this.handleButtonClick, { passive: true })
    this._transformer.setPosition(0);
    this.renderList();
  }
}