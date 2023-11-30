'use strict';
class StringBuilder {
  #value;
  constructor(initialValue) {
    this.#value = initialValue;
  }
  getValue() {
    return this.#value;
  }
  padEnd(str) {
    const lengthEnd = this.#value.length + str.length;
    this.#value.padEnd(lengthEnd, str);
  }
  padStart(str) {
    this.#value.padStart(this.#value.length + str.length, str);
  }
  padBoth(str) {
    const lengthBoth = this.#value.length + str.length;
    this.#value.padStart(lengthBoth, str).padEnd(lengthBoth + str.length, str);
  }
}

const builder = new StringBuilder('.');

console.log(builder.getValue()); // "."
builder.padStart('^');
console.log(builder.getValue()); // "^."
builder.padEnd('^');
console.log(builder.getValue()); // "^.^"
builder.padBoth('=');
console.log(builder.getValue()); // "=^.^="
