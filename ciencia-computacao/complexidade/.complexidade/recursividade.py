def factorial(n):
    if n <= 1:  # caso base
        return 1
    else:
        return n * factorial(n - 1)  # caso recursivo
    

print(factorial(9))


# conceito de pilhas

def saudacao():
    print("Oi")


def despedida():
    print("Tchau")


def init():
    print("Inicio")
    saudacao()
    print("Fim")
    despedida()


init()


# soma recursiva

def soma(n: int):
    if n == 0:
        return 0
    else:
        return n + soma(n - 1)
    

print(soma(5))


def iterative_countdown(n):
    while n > 0:
        print(n)
        n = n - 1
    print("FIM!")


iterative_countdown(5)


# iterativo e recursivo

def iterative_factorial(n):
    fact = 1

    for i in range(1, n + 1):
        fact = fact * i

    print(fact)


iterative_factorial(5)
