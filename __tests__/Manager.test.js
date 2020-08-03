const Manager = require('../lib/Manager');

test('can set office number from constructor', () => {
    const officeNum = 2;
    const e = new Manager('Jun', 123, 'test@testmail.com', officeNum);
    expect(e.officeNumber).toBe(officeNum);
});
test('getrole should return manager', () => {
    const e = new Manager('Jun', 123, 'test@testmail.com', 532);
    expect(e.getRole()).toBe('Manager');
});
test('get office number function returns office number', () => {
    const officeNum = 4321
    const e = new Manager('Jun', 123, 'test@testmail.com', officeNum);
    expect(e.getOfficeNumber()).toBe(officeNum);
})