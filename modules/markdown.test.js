const markdown = require('./markdown');

describe('headers', function () {

    test('parsing #', function () {
        expect(markdown.parse('# hello')).toBe('<h1>hello</h1>');
    });

    test('parsing ##', function () {
        expect(markdown.parse('## hello')).toBe('<h2>hello</h2>');
    });

    test('parsing ###', function () {
        expect(markdown.parse('### hello')).toBe('<h3>hello</h3>');
    });

    test('parsing ####', function () {
        expect(markdown.parse('#### hello')).toBe('<h4>hello</h4>');
    });

    test('parsing #####', function () {
        expect(markdown.parse('##### hello')).toBe('<h5>hello</h5>');
    });

    test('parsing ######', function () {
        expect(markdown.parse('###### hello')).toBe('<h6>hello</h6>');
    });

});

describe('inline text alterations', () => {

    test('parsing **', function () {
        expect(markdown.parse('**hello**')).toBe('<strong>hello</strong>');
    });

    test('parsing __', function () {
        expect(markdown.parse('__hello__')).toBe('<strong>hello</strong>');
    });

    test('parsing *', function () {
        expect(markdown.parse('*hello*')).toBe('<em>hello</em>');
    });

    test('parsing _', function () {
        expect(markdown.parse('_hello_')).toBe('<em>hello</em>');
    });

    test('parsing ~~', function () {
        expect(markdown.parse('~~hello~~')).toBe('<del>hello</del>');
    });

    test('parsing `', function () {
        expect(markdown.parse('`hello`')).toBe('<code>hello</code>');
    });

    test('parsing ![alt](src)', function () {
        expect(markdown.parse('![alt](src)')).toBe("<img src='src' alt='alt'>");
    });

    test('parsing [text](href)', function () {
        expect(markdown.parse('[text](href)')).toBe("<a href='href'>text</a>");
    });

});

describe('block alterations', () => {

    test('parsing * (bullets)', function () {
        expect(markdown.parse('* hello')).toBe('<ul><li>hello</li></ul>');
    });

    test('parsing 1. (numbered list)', function () {
        expect(markdown.parse('1. hello')).toBe('<li>hello</li>');
    });

    test('parsing ```', function () {
        expect(markdown.parse('```hello```')).toBe('<pre><code>hello</code></pre>');
    });

});