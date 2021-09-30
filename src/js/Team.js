/* eslint-disable no-else-return */
/* eslint-disable no-plusplus */
export default class Team {
  constructor() {
    this.members = new Set();
  }

  add(character) {
    if (this.members.has(character)) {
      throw new Error('Персонаж уже добавлен в команду');
    }

    this.members.add(character);
  }

  addAll(...characters) {
    characters.forEach((character) => this.members.add(character));
  }

  toArray() {
    const array = [];
    this.members.forEach((elem) => { array.push(elem); });
    return array;
  }

  [Symbol.iterator]() {
    let current = 0;
    const member = this.toArray();
    const last = member.length - 1;

    return {
      next() {
        if (current <= last) {
          return { done: false, value: member[current++] };
        } else {
          return { done: true, value: undefined };
        }
      },
    };
  }
}
