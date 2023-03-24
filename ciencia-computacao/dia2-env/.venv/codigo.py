def is_odd(number):
    'Retorna True se um número é ímpar, senão False.'
    return number % 2 != 0


def divide(a_number, other_number):
    "Retorna a divisão de a_number por other_number"
    return a_number / other_number


def fizzbuzz(n):
    numbers = []
    for number in range(1, n + 1):
        if number % 15 == 0:
            numbers.append("FizzBuzz")
        elif number % 3 == 0:
            numbers.append("Fizz")
        elif number % 5 == 0:
            numbers.append("Buzz")
        else:
            numbers.append(number)
    return numbers


def orders():
    """Nosso cenário (contexto) temos os seguintes pedidos"""
    return [
        {"customer": "maria", "order": "pizza", "day": "terça-feira"},
        {"customer": "joao", "order": "hamburger", "day": "terça-feira"},
        {"customer": "maria", "order": "pizza", "day": "quarta-feira"},
        {"customer": "maria", "order": "hamburger", "day": "quinta-feira"},
    ]


def get_most_ordered_dish_per_costumer(orders: list, name: str):
    item = []
    valores = []
    repetidos = []
    for order in orders:
        if order['customer'] == name:
            item.append(order['order'])

    for dado in item:
        if dado not in valores:
            valores.append(dado)
        else:
            repetidos.append(dado)
    return repetidos[0]


print(get_most_ordered_dish_per_costumer(orders(), 'maria'))
