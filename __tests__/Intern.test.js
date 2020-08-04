const Intern = require('../lib/Intern');

test('Can get school from constructor', () => {
    const schoolTest = 'UOFA';
    const e = new Intern('Sal', 23, 'test@test.com', schoolTest);
    expect(e.school).toBe(schoolTest);
});
test('getrole will return intern', () => {
    const e = new Intern('Joe', 1, 'test@test.com', 'UOFA');
    expect(e.getRole()).toBe('Intern');
});
test('getSchool function should return school', () => {
    const schoolTest = 'ASU';
    const e = new Intern('Sal', 23, 'test@test.com', schoolTest);
    expect(e.getSchool()).toBe(schoolTest);
});