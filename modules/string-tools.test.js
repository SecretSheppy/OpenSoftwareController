const st = require('./string-tools');

describe('String Tools', () => {

    test('should return string with first letter capitalized', () => {
        expect(st.capitalizeFirstLetter('hello')).toBe('Hello');
    });

});