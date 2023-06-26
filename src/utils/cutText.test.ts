import { cutText } from "./cutText";

describe('cutText', () => {
    const testText = 'Title for test';

    test('should return the same text if its length is less than the cutOff', () => {
        const cutOff = 20;

        const result = cutText(testText, cutOff);

        expect(result).toBe('Title for test');
    });

    test('should return the text if its length is equal the cutOff', () => {
        const cutOff = 14;

        const result = cutText(testText, cutOff);

        expect(result).toBe('Title for test');
    });

    test('should cut text correctly if its length more than the cutOff', () => {
        const cutOff = 5;

        const result = cutText(testText, cutOff);

        expect(result).toBe('Title...');
    });

    test('should add ellipsis at the end if text is cut', () => {
        const cutOff = 12;

        const result = cutText(testText, cutOff);

        expect(result).toBe('Title for te...');
    });

    test('should only be ellipsis if cutOff is 0', () => {
        const cutOff = 0;

        const result = cutText(testText, cutOff);

        expect(result).toBe('...');
    });

});
