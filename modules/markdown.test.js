const markdown = require('./markdown');

describe('sanitization', function () {

    test('script detection', function () {
        expect(markdown.parse('<script>console.log("hi");</script>'))
            .toBe("<div>WARNING: Script detected and removed</div>");
    });

    test('script with parameters detection', function () {
        expect(markdown.parse(
            '<script type="text/javascript">console.log("hi");</script>'
        )).toBe("<div>WARNING: Script detected and removed</div>");
    });

    test('iframe detection', function () {
        expect(markdown.parse(
            '<iframe></iframe>'
        )).toBe("<div>WARNING: Iframe detected and removed</div>");
    });

    test('iframe with parameters detection', function () {
        expect(markdown.parse(
            '<iframe src="https://www.youtube.com/embed/5qap5aO4i9A"></iframe>'
        )).toBe("<div>WARNING: Iframe detected and removed</div>");
    });

    test('object detection', function () {
        expect(markdown.parse('<object>hi</object>'))
            .toBe("<div>WARNING: Object detected and removed</div>");
    });

    test('object with parameters detection', function () {
        expect(markdown.parse('<object data="horse.wav">hi</object>'))
            .toBe("<div>WARNING: Object detected and removed</div>");
    });

    test('embed detection', function () {
        expect(markdown.parse('<embed>'))
            .toBe("<div>WARNING: Embed detected and removed</div>");
    });

    test('embed with parameters detection', function () {
        expect(markdown.parse('<embed src="horse.wav">'))
            .toBe("<div>WARNING: Embed detected and removed</div>");
    });

    test('link detection', function () {
        expect(markdown.parse('<link>'))
            .toBe("<div>WARNING: Link detected and removed</div>");
    });

    test('link with parameters detection', function () {
        expect(markdown.parse('<link rel="stylesheet" href="styles.css">'))
            .toBe("<div>WARNING: Link detected and removed</div>");
    });

    test('style detection', function () {
        expect(markdown.parse('<style>.red { color: red; }</style>'))
            .toBe("<div>WARNING: Style detected and removed</div>");
    });

    test('style with parameters detection', function () {
        expect(markdown.parse(
            '<style type="text/css">.red { color: red; }</style>'
        )).toBe("<div>WARNING: Style detected and removed</div>");
    });

    test('img detection', function () {
        expect(markdown.parse('<img>'))
            .toBe("<div>WARNING: Image detected and removed</div>");
    });

    test('img with parameters detection', function () {
        expect(markdown.parse('<img src="image.jpg" alt="bla">'))
            .toBe("<div>WARNING: Image detected and removed</div>");
    });

    test('svg detection', function () {
        expect(markdown.parse('<svg>hi</svg>'))
            .toBe("<div>WARNING: SVG detected and removed</div>");
    });


    test('svg with parameters detection', function () {
        expect(markdown.parse('<svg height="100" width="100">hi</svg>'))
            .toBe("<div>WARNING: SVG detected and removed</div>");
    });

    test('form detection', function () {
        expect(markdown.parse('<form>hi</form>'))
            .toBe("<div>WARNING: Form detected and removed</div>");
    });

    test('form with parameters detection', function () {
        expect(markdown.parse('<form action="/action_page.php">hi</form>'))
            .toBe("<div>WARNING: Form detected and removed</div>");
    });

    test('input detection', function () {
        expect(markdown.parse('<input>'))
            .toBe("<div>WARNING: Input detected and removed</div>");
    });

    test('input with parameters detection', function () {
        expect(markdown.parse('<input type="text">'))
            .toBe("<div>WARNING: Input detected and removed</div>");
    });

    test('button detection', function () {
        expect(markdown.parse('<button>hi</button>'))
            .toBe("<div>WARNING: Button detected and removed</div>");
    });

    test('button with parameters detection', function () {
        expect(markdown.parse('<button type="submit">hi</button>'))
            .toBe("<div>WARNING: Button detected and removed</div>");
    });

    test('select detection', function () {
        expect(markdown.parse('<select>hi</select>'))
            .toBe("<div>WARNING: Select detected and removed</div>");
    });

    test('select with parameters detection', function () {
        expect(markdown.parse('<select name="cars">hi</select>'))
            .toBe("<div>WARNING: Select detected and removed</div>");
    });

    test('textarea detection', function () {
        expect(markdown.parse('<textarea>hi</textarea>'))
            .toBe("<div>WARNING: Textarea detected and removed</div>");
    });

    test('textarea with parameters detection', function () {
        expect(markdown.parse('<textarea name="message">hi</textarea>'))
            .toBe("<div>WARNING: Textarea detected and removed</div>");
    });

    test('meta detection', function () {
        expect(markdown.parse('<meta>'))
            .toBe("<div>WARNING: Meta detected and removed</div>");
    });

    test('meta with parameters detection', function () {
        expect(markdown.parse('<meta charset="UTF-8">'))
            .toBe("<div>WARNING: Meta detected and removed</div>");
    });

    test('title detection', function () {
        expect(markdown.parse('<title>hi</title>'))
            .toBe("<div>WARNING: Title detected and removed</div>");
    });

    test('title with parameters detection', function () {
        expect(markdown.parse('<title param="non">My Title</title>'))
            .toBe("<div>WARNING: Title detected and removed</div>");
    });

    test('head detection', function () {
        expect(markdown.parse('<head>hi</head>'))
            .toBe("<div>WARNING: Head detected and removed</div>");
    });

    test('head with parameters detection', function () {
        expect(markdown.parse('<head param="non">hi</head>'))
            .toBe("<div>WARNING: Head detected and removed</div>");
    });

    test('body detection', function () {
        expect(markdown.parse('<body>hi</body>'))
            .toBe("<div>WARNING: Body detected and removed</div>");
    });

    test('body with parameters detection', function () {
        expect(markdown.parse('<body onload="run()">hi</body>'))
            .toBe("<div>WARNING: Body detected and removed</div>");
    });

    test('html detection', function () {
        expect(markdown.parse('<html>hi</html>'))
            .toBe("<div>WARNING: HTML detected and removed</div>");
    });

    test('html with parameters detection', function () {
        expect(markdown.parse('<html lang="en">hi</html>'))
            .toBe("<div>WARNING: HTML detected and removed</div>");
    });

    test('DOCTYPE detection', function () {
        expect(markdown.parse('<!DOCTYPE html>'))
            .toBe("<div>WARNING: DOCTYPE detected and removed</div>");
    });

    test('DOCTYPE with parameters detection', function () {
        expect(markdown.parse(
            '<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01//EN">'
        )).toBe("<div>WARNING: DOCTYPE detected and removed</div>");
    });

    test('audio detection', function () {
        expect(markdown.parse('<audio>hi</audio>'))
            .toBe("<div>WARNING: Audio detected and removed</div>");
    });

    test('audio with parameters detection', function () {
        expect(markdown.parse('<audio controls>hi</audio>'))
            .toBe("<div>WARNING: Audio detected and removed</div>");
    });

    test('video detection', function () {
        expect(markdown.parse('<video>hi</video>'))
            .toBe("<div>WARNING: Video detected and removed</div>");
    });

    test('video with parameters detection', function () {
        expect(markdown.parse(
            '<video width="320" height="240" controls>hi</video>'
        )).toBe("<div>WARNING: Video detected and removed</div>");
    });

});

describe('headers', function () {

    test('parsing #', function () {
        expect(markdown.parse('# hello'))
            .toBe('<h1>hello</h1>');
    });

    test('parsing ##', function () {
        expect(markdown.parse('## hello'))
            .toBe('<h2>hello</h2>');
    });

    test('parsing ###', function () {
        expect(markdown.parse('### hello'))
            .toBe('<h3>hello</h3>');
    });

    test('parsing ####', function () {
        expect(markdown.parse('#### hello'))
            .toBe('<h4>hello</h4>');
    });

    test('parsing #####', function () {
        expect(markdown.parse('##### hello'))
            .toBe('<h5>hello</h5>');
    });

    test('parsing ######', function () {
        expect(markdown.parse('###### hello'))
            .toBe('<h6>hello</h6>');
    });

});

describe('inline text alterations', () => {

    test('parsing **', function () {
        expect(markdown.parse('**hello**'))
            .toBe('<strong>hello</strong>');
    });

    test('parsing __', function () {
        expect(markdown.parse('__hello__'))
            .toBe('<strong>hello</strong>');
    });

    test('parsing *', function () {
        expect(markdown.parse('*hello*'))
            .toBe('<em>hello</em>');
    });

    test('parsing _', function () {
        expect(markdown.parse('_hello_'))
            .toBe('<em>hello</em>');
    });

    test('parsing ~~', function () {
        expect(markdown.parse('~~hello~~'))
            .toBe('<del>hello</del>');
    });

    test('parsing `', function () {
        expect(markdown.parse('`hello`'))
            .toBe('<code>hello</code>');
    });

    test('parsing ![alt](src)', function () {
        expect(markdown.parse('![alt](src)'))
            .toBe("<img src='src' alt='alt'>");
    });

    test('parsing [text](href)', function () {
        expect(markdown.parse('[text](href)'))
            .toBe("<a href='href'>text</a>");
    });

});

describe('block alterations', () => {

    test('parsing * (bullets)', function () {
        expect(markdown.parse('* hello'))
            .toBe('<ul><li>hello</li></ul>');
    });

    test('parsing 1. (numbered list)', function () {
        expect(markdown.parse('1. hello'))
            .toBe('<ul><li>hello</li></ul>');
    });

    test('parsing ```', function () {
        expect(markdown.parse('```hello```'))
            .toBe('<pre><code>hello</code></pre>');
    });

});