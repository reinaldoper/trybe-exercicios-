# complexidade o(n)

def squared_array(numbers):
    array_of_squares = []
    for number in numbers:
        array_of_squares.append(number * number)

    return array_of_squares


def multiply_array(numbers):
    result = 1
    for number in numbers:
        result *= number

    return result


""" Solução

Complexidade de Tempo: O(n)

Complexidade de Espaço: O(1)

Sobre a complexidade de tempo: Independentemente do tamanho da entrada 
(numbers) o nosso laço for irá percorrer cada elemento 
do array de tamanho n. Por isso, sua complexidade de tempo é O(n).

Sobre a complexidade espacial, iremos operar 
sobre um número constante de variáveis que, por sua
 vez, armazenam um único elemento em memória. 
 A variável result será responsável por armazenar 
 o resultado numérico de nossa operação de multiplicação.
   Por isso, nossa complexidade 
   espacial é O(1). """


# -------------------------------------------------------------------------------------------
# iteração quadrática O(n²)


def multiply_arrays(array1, array2):
    result = []
    number_of_iterations = 0

    for number1 in array1:
        print(f'Array 1: {number1}')
        for number2 in array2:
            print(f'Array 2: {number2}')
            result.append(number1 * number2)
            number_of_iterations += 1

    print(f'{number_of_iterations} iterações!')
    return result


meu_array = [1, 2, 3, 4, 5, 7]

# multiply_arrays(meu_array, meu_array)


n = 1000  # onde n será o número total de elementos dentro do array
meu_arrays = list(range(1, n))


# complexidade 0(n)³

def multiply_arrays_cubo(array1, array2, array3):
    result = []
    number_of_iterations = 0

    for number1 in array1:
        print(f'Array 1: {number1}')
        for number2 in array2:
            print(f'Array 2: {number2}')
            for number3 in array3:
                print(f'Array 3: {number3}')
                result.append(number1 * number2 * number3)
                number_of_iterations += 1

    print(f'{number_of_iterations} iterações!')
    return result


meu_arrays = list(range(1, 7))

multiply_arrays_cubo(meu_arrays, meu_arrays, meu_arrays)
multiply_arrays_cubo(meu_array, meu_array, meu_array)


def calculations(n):
    number1 = 0
    for n1 in range(n):
        number1 += n1

    number2 = 0
    for n1 in range(n):
        for n2 in range(n):
            number2 += n1 + n2

    number3 = 0
    for n1 in range(n):
        for n2 in range(n):
            for n3 in range(n):
                number3 += n1 + n2 + n3

    return number1, number2, number3


n1, n2, n3 = calculations(100)
print(f'{n1}, {n2}, {n3}')


# pior caso, caso médio e melhor caso


def linear_search(numbers, target):
    n = len(numbers)  # N será a quantidade de elementos da lista
    for index in range(0, n):  # vamos iterar a lista completa
        if numbers[index] == target:  # se encontrar o elemento alvo, retorne a posição
            return (f'O número é: {numbers[index]}, o indice : {index}')

    return -1  # Não encontrou? Retorne -1


print(linear_search([1, 5, 3, 66, 7, 2], 2))  # saída: 1
print(linear_search([1, 2, 3], 4))  # saída: -1
