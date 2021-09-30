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
}
