const {sum} = require('./sum');
test('Suma', () => {
    expect(sum(2,3)).toBe(5);
});