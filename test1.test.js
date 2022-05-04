const stringLength = require('./test1')

describe('These are the testes for this work', () => {
    it('in case character of Harold has to be returned', () => {
        expect(stringLength('Harold')).toBe(6);
    })

    it('in case character of Microverse has to be returned', () => {
        expect(stringLength('Microverse')).toBe(10);
    })

    it('in case an empty character has to be returned ', () => {
        expect(stringLength('')).toBe('The string doesn\'t match the condition'); // this is a failed Test
    })

    ('in case More than 10 characters has to be returned', () => {
        expect(stringLength('constitutional')).toThrowError('The string doesn\'t match the condition');// This is a Fail Test
      });
})