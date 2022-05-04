const reverseString = require('./test2')

describe('These are the tests for this work', () => {
    it('reversing the string "Harold" returns', () => {
        expect(reverseString('Harold')).toMatch('dloraH')
    })

    it('reversing the string "Microverse"', () => {
        expect(reverseString('Microverse')).toMatch('esrevorciM')
    })

    it('reversing the string "Testing"', () => {
        expect(reverseString('Testing')).toMatch('gnitseT')
    })

    it('reversing the string "Pocket"', () => {
        expect(reverseString('Pocket')).toMatch('pocket') //fail test
    })
})