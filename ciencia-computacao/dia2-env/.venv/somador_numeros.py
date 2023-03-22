import random

meu_numero = 0
while meu_numero <= 50:
    meu_numero += int(input("Gigite um número:"))

print(f"O numero: {meu_numero} supera o valor 50")

# exercicios do course resolvido como base de estudos

# escolhe um número aleatório entre 1 e 10
random_number = random.randint(1, 10)
guess = ""

while guess != random_number:  # enquanto não adivinhar o número
    guess = int(input("Qual o seu palpite? "))  # pergunte a pessoa usuária um

print("O número sorteado era: ", guess)

# printar um nome em forma crescente
nome = input("Digite seu nome:")

for n in nome:
    print(f"{n}")
