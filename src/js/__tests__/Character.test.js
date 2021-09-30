import Character from '../Character';
import Bowerman from '../Bowerman';

test.each([0, 1, -1])(
  'should return an error on a number instead of a name',
  (num) => {
    const textErr = 'Имя должно быть строкой';
    expect(() => new Character(num)).toThrowError(new Error(textErr));
  },
);

test.each(['', 'A', 'aaaaaaaaaaa'])(
  'should return an error for a name less than 2 or more than 10 characters',
  (str) => {
    const textErr = 'Имя должно содержать от 2 до 10 символов';
    expect(() => new Character(str)).toThrowError(new Error(textErr));
  },
);

test('should return the name', () => {
  const character = new Character('John');
  expect(character.name).toBe('John');
});

test('should return level up', () => {
  const bowerman = new Bowerman('John');
  bowerman.levelUp();

  expect(bowerman).toEqual({
    attack: 30,
    defence: 30,
    health: 100,
    level: 2,
    name: 'John',
    type: 'Bowman',
  });
});

test('should return an error if health is equal to 0', () => {
  const bowerman = new Bowerman('John');
  bowerman.health = 0;

  expect(() => bowerman.levelUp()).toThrow(new Error('Персонаж уже мертв'));
});

test('should return damage health', () => {
  const bowerman = new Bowerman('John');
  bowerman.damage(40);

  expect(bowerman.health).toBe(70);
});

test('should return to health without changes', () => {
  const bowerman = new Bowerman('John');
  bowerman.health = -1;
  bowerman.damage(40);

  expect(bowerman.health).toEqual(-1);
});
