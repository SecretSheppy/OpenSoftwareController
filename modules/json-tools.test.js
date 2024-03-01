const jt = require('./json-tools');
const fs = require('fs');

jest.mock('fs');

describe('json-tools', () => {

    test('loads JSON from path', () => {
        let path = 'test.json';
        let data = { helloThere: 'General Kenobi' };
        let content = JSON.stringify(data);

        fs.readFileSync.mockReturnValue(content);

        let result = jt.load(path);

        expect(fs.readFileSync).toHaveBeenCalledWith(path, 'utf8');
        expect(result).toEqual(data);
    });

    test('saves JSON to path', () => {
        let path = 'test.json';
        let data = { helloThere: 'General Kenobi' };
        let content = JSON.stringify(data, null, 4);

        jt.save(path, data);

        expect(fs.writeFileSync).toHaveBeenCalledWith(path, content, 'utf8');
    });

});