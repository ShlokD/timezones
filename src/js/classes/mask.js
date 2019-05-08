export default class {
  constructor(length) {
    this._bits = new Array(length).fill(0);
    this._setIndex = null;
  }

  getBits() {
    return this._bits;
  }

  unsetAll() {
    this._bits.forEach(bit => bit = 0);
  }

  setBit(position) {
    this.unsetAll();
    this._setIndex = position;
    this._bits[position] = 1;
  }

  getSetBitIndex() {
    return this._setIndex;
  }
}