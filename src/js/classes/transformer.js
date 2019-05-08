import Mask from "./mask.js";

export default class {
  constructor(data = {}) {
    this._data = data;
    this._keys = Object.keys(data).map(Number);
    this._length = this._keys.length;
    this._mask = new Mask(length)

    const mid = parseInt(this._length / 2);
    this._offset = this._keys[mid];
  }

  applyTransformationPolicy(position) {
    return (2 * position) + this._offset;
  }

  setPosition(position) {
    const bitPosition = this.applyTransformationPolicy(position);
    this._mask.setBit(bitPosition);
  }

  getSetData() {
    const setIndex = this._mask.getSetBitIndex();
    return this._data[setIndex] || []
  }

  getData() {
    return this._data;
  }
}