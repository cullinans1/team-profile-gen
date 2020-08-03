const Engineer = require('../lib/Engineer');

test('Can get github from constructor', () => {
    const githubTest = 'Username';
    const e = new Engineer('Sal', 1, 'gmail.com', githubTest);
    expect(e.github).toBe(githubTest);
});
test("get role should return engineer", () => {
    const e = new Engineer('Joe', 1, 'test@test.com', 'username');
    expect(e.getRole()).toBe('Engineer');
});
test('can get github from getGitHub function', () => {
    const username = 'githubName'
    const e = new Engineer('Joe', 1, 'test@test.com', username);
    expect(e.getGithub()).toBe(username);
});