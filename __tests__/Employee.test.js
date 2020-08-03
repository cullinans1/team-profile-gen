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
    expect(e.id).toBe(testValue);
}); 
test('Can set email from constructor', () => {
    const email = 'test@test.com';
    const e = new Employee('Joe', 1, email);
    expect(e.email).toBe(email);
});
test('can get name from getname function', () => {
    const testName = 'Yal';
    const e = new Employee(testName);
    expect(e.getName()).toBe(testName);
});
test('get id from getid function', () => {
    const sampleId = 2;
    const e = new Employee('Jal', sampleId);
    expect(e.getId()).toBe(sampleId);
});
test('can get email from the getemail function', () => {
    const email = 'test@test.com';
    const e = new Employee('Jam', 2, email);
    expect(e.getEmail()).toBe(email);
});
test('get role returns employee', () => {
    const e = new Employee('Joe', 12, 'gmail.com');
    expect(e.getRole()).toBe('Employee')
});