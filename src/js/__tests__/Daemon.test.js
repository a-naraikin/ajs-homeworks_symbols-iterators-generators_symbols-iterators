import Daemon from '../Daemon';

test('should return the created Daemon', () => {
  expect(new Daemon('John')).toEqual({
    name: 'John',
    health: 100,
    level: 1,
    type: 'Daemon',
    attack: 10,
    defence: 40,
  });
});
