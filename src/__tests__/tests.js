import ArrayBufferConverter from '../js/ArrayBufferConverter';
import getBuffer from '../js/app';

describe('Класс ArrayBufferConverter', () => {
  const item = new ArrayBufferConverter();
  item.load(getBuffer());

  test('Определён', () => {
    expect(item).toBeDefined();
  });
  test('Создаёт экземпляр класса ArrayBufferConverter', () => {
    expect(item).toBeInstanceOf(ArrayBufferConverter);
  });
  test('работает метод toString() у экземпляра класса ArrayBufferConverter', () => {
    expect(item.toString()).toBe(
      '{"data":{"user":{"id":1,"name":"Hitman","level":10}}}',
    );
  });
});
