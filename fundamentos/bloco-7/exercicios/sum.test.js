const { sum, myRemove, myFizzBuzz } = require('./sum');

describe('Requisito 1', () => {
    it('retorna a soma', () => {
        expect(sum(4, 5)).toBe(9);
    });
    it('retorna a 0', () => {
        expect(sum(0, 0)).toBe(0);
    });
    it('retorna um thow error', () => {
        expect(() => sum(1, '5')).toThrow(Error);
    });
    it('parameters must be numbers', () => {
        expect(() => sum(1, '5')).toThrowError(new Error('parameters must be numbers'));
    })
});

describe('requisito 2', () => {
    it('recebe array e rotorna a exclusão', () => {
        expect([1, 2, 4]).toEqual(myRemove([1, 2, 3, 4], 3));
    });
    it('recebe array e não retorna o array original', () => {
        const retorno = [1, 2, 3, 4];
        expect(myRemove([1, 2, 3, 4], 3)).not.toContain(retorno);
    });
    it('recebe array e rotorna e retorna array original', () => {
        expect([1, 2, 3, 4]).toEqual(myRemove([1, 2, 3, 4], 5));
    });
});

describe('Requisito 3', () => {
    it('divisivel por 3 e 5', () => {
        expect(myFizzBuzz(15)).toBe('fizzbuzz');
    });
    it('divisivel por 3', () => {
        expect(myFizzBuzz(9)).toBe('fizz');
    });
    it('divisivel por 5', () => {
        expect(myFizzBuzz(20)).toBe('buzz');
    });
    it('não é divisivel por 3 e nem por 5', () => {
        expect(myFizzBuzz(4)).toBe(4);
    });
    it('não é um número', () => {
        expect(myFizzBuzz('s')).toBe(false);
    });
})



//toThrowError(new Error('Something wrong'))