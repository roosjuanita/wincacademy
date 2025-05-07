const fizzbuzz = require('./fizzbuzz')

describe('fizzbuzz', () => {
    test('Numbers divisible by 15 should return FizzBuzz', () => {
        expect(fizzbuzz(15)).toBe('FizzBuzz');
        expect(fizzbuzz(300)).toBe('FizzBuzz');
    })
    
    test('Numbers divisible by 3 should return Fizz', () => {
        expect(fizzbuzz(3)).toBe('Fizz');
        expect(fizzbuzz(9)).toBe('Fizz');
    })

    test('Numbers divisible by 5 should return Buzz', () => {
        expect(fizzbuzz(5)).toBe('Buzz');
        expect(fizzbuzz(25)).toBe('Buzz');
    })
    
    test('non-numbers should throw an Error', () => {
        expect(() => fizzbuzz()).toThrow();
        expect(() => fizzbuzz({})).toThrow();
        expect(() => fizzbuzz('fizz')).toThrow();
    });

    test('Other numbers should be returned unchanged', () => {
        expect(fizzbuzz(8)).toBe(8);
        expect(fizzbuzz(11)).toBe(11);
    })
});