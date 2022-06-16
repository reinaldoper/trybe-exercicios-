const { sum, myRemove, myFizzBuzz, encode, decode } = require('./sum');

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
});;
describe('requisito 4', () => {
    it('Testa se a função encode é definida', () => {
        expect(encode).toBeDefined();
    });
    it('Testa se a função decode é definida', () => {
        expect(decode).toBeDefined();
    });
    it('Testa se as vogais aeiou retorna 12345', () => {
        expect(encode('aeiou')).toEqual('12345');
    });
    it('Testa se os numeros 12345 retorna aeiou', () => {
        expect(decode('12345')).toEqual('aeiou');
    });
    it('Testa se as letras bcd retorna bcd', () => {
        expect(encode('bcd')).toEqual('bcd');
    });
    it('Testa se os numeros 789 e retorna 789', () => {
        expect(decode('789')).toEqual('789');
    });
    it('verifica o tamanho da string encode', () => {
        expect(encode('bcd')).toHaveLength(3);
    });
    it('verifica o tamanho da string decode', () => {
        expect(decode('123')).toHaveLength(3);
    });
})



//toThrowError(new Error('Something wrong'))