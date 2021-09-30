/* eslint-disable no-console */
import Team from '../Team';
import Character from '../Character';
import Bowerman from '../Bowerman';
import Magician from '../Magician';
import Daemon from '../Daemon';

test('should return add character', () => {
  const character = new Character('John');
  const team = new Team();
  team.add(character);

  const expected = new Set();
  expected.add(character);

  expect(team.members).toEqual(expected);
});

test('should return an error when re-adding a character', () => {
  const character = new Character('John');
  const team = new Team();
  team.add(character);

  expect(() => team.add(character)).toThrowError(new Error('Персонаж уже добавлен в команду'));
});

test('should add an arbitrary number of characters', () => {
  const characterOne = new Character('John');
  const characterTwo = new Character('Ivan');
  const characterThree = new Character('Kate');

  const team = new Team();
  team.addAll(characterOne, characterTwo, characterThree);

  const expected = new Set();
  expected.add(characterOne);
  expected.add(characterTwo);
  expected.add(characterThree);

  expect(team.members).toEqual(expected);
});

test('should return array', () => {
  const characterOne = new Character('John');
  const characterTwo = new Character('Ivan');
  const characterThree = new Character('Kate');

  const team = new Team();
  team.addAll(characterOne, characterTwo, characterThree);

  const expected = [
    { health: 100, level: 1, name: 'John' },
    { health: 100, level: 1, name: 'Ivan' },
    { health: 100, level: 1, name: 'Kate' },
  ];

  expect(team.toArray()).toEqual(expected);
});

test('should return the characters one at a time', () => {
  function received() {
    const born = new Bowerman('Born');
    const merlin = new Magician('Merlin');
    const boogeyman = new Daemon('Boogeyman');

    const team = new Team();
    team.addAll(born, merlin, boogeyman);

    for (const person of team) {
      console.log(person);
    }
  }

  expect(received()).toEqual(undefined);
});
