/* eslint-disable no-mixed-operators */
export default class Character {
  constructor(name) {
    if (typeof name !== 'string') {
      throw new Error('Имя должно быть строкой');
    }

    if (name.length < 2 || name.length > 10) {
      throw new Error('Имя должно содержать от 2 до 10 символов');
    }

    this.name = name;
    this.health = 100;
    this.level = 1;
  }

  levelUp() {
    if (!this.health) {
      throw new Error('Персонаж уже мертв');
    }

    this.level += 1;
    this.attack += this.attack / 100 * 20;
    this.defence += this.defence / 100 * 20;
    this.health = 100;
  }

  damage(points) {
    if (this.health >= 0) {
      this.health -= points * (1 - this.defence / 100);
    }
  }
}
