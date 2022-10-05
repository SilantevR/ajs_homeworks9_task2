import './app';

export default class ArrayBufferConverter {
  load(buffer) {
    this.view = new Uint16Array(buffer);
  }

  toString() {
    this.string = String.fromCharCode(...this.view);
    return this.string;
  }
}
