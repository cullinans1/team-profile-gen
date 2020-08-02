const Employee = require('../lib/Employee');

test('Can instantiate Employee instance', () => {
    const e = new Employee();
    expect(typeof(e)).toBe('object');
});
test('Can set name from constructor argument', () => {
    const name = 'Jane';
    const e = new Employee(name);
    expect(e.name).toBe(name)
});
test('Can set id from constructor', () => {
    const testValue = 3;
    const e = new Employee("Foo", testValue);
    expect(e.getId()).toBe(testValue);
});