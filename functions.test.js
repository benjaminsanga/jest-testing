const functions = require('./functions');

// beforeEach(() => initDatabase());
// afterEach(() => closeDatabase());

// beforeAll(() => initDatabase());
// afterAll(() => closeDatabase());

// const initDatabase = () => console.log('Database initialized...');
// const closeDatabase = () => console.log('Database closed...');

const nameCheck = () => console.log('Checking Name...');

describe('Checking Names', () => {
    beforeEach(() => nameCheck())

    test('User is Jeff', () => {
        const user = 'Jeff';
        expect(user).toBe('Jeff');
    });

    test('User is Karen', () => {
        const user = 'Karen';
        expect(user).toBe('Karen');
    });
});

// add
test('Adds 2 + 2 to equal 4', () => {
    expect(functions.add(2, 2)).toBe(4);
});

// add 2, 2 to not equal
test('Adds 2 + 2 to NOT equal 5', () => {
    expect(functions.add(2, 2)).not.toBe(5);
});

// to be null
test('Should be null', () => {
    expect(functions.isNull()).toBeNull();
});

// to be falsy
test('Should be falsy', () => {
    expect(functions.checkValue(null)).toBeFalsy();
});

test('User should be ben sanga object', () => {
    expect(functions.createUser({})).toEqual({ 
        firstName: 'ben', 
        lastName: 'sanga' 
    });
});

// less than and greather than
test('Should be under 1600', () => {
    const load1 = 800;
    const load2 = 700;
    expect(load1 + load2).toBeLessThan(1600);
});

// Regex
test('There is no I in team', () => {
    expect('team').not.toMatch(/I/);
});

// Array
test('Admin should be in username', () => {
    usernames = ['john', 'karen', 'admin'];
    expect(usernames).toContain('admin');
});
