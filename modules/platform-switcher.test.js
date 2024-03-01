const platformSwitcher = require('./platform-switch');

describe('switcher', () => {

    test('calls callback on linux platform', () => {
        let args = { linux: 'linuxArgs', darwin: 'darwinArgs', win32: 'win32Args' };
        let callback = jest.fn();

        Object.defineProperty(process, 'platform', { value: 'linux' });

        platformSwitcher.switcher(args, callback);

        expect(callback).toHaveBeenCalledWith('linuxArgs');
    });

    test('calls callback on darwin platform', () => {
        let args = { linux: 'linuxArgs', darwin: 'darwinArgs', win32: 'win32Args' };
        let callback = jest.fn();

        Object.defineProperty(process, 'platform', { value: 'darwin' });

        platformSwitcher.switcher(args, callback);

        expect(callback).toHaveBeenCalledWith('darwinArgs');
    });

    test('calls callback on win32 platform', () => {
        let args = { linux: 'linuxArgs', darwin: 'darwinArgs', win32: 'win32Args' };
        let callback = jest.fn();

        Object.defineProperty(process, 'platform', { value: 'win32' });

        platformSwitcher.switcher(args, callback);

        expect(callback).toHaveBeenCalledWith('win32Args');
    });

});