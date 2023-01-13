/*
Dicionário en-pt:
- fish: peixe
*/
abstract class maifero {
  constructor(public name: string) { }
  abstract move(): void
}
class Passaro extends maifero {
  move() { console.log(`${this.name} está voando.`); }
}
class Mamal extends maifero {
  move() { console.log(`${this.name} está andando.`); }
}
class Fish extends maifero {
  move() { console.log(`${this.name} está nadando.`); }
}
const a1 = new Fish('Tubarão');
const b1 = new Passaro('Papagaio');
const m1 = new Mamal('Tatu');
const myMoves = (maifero: maifero) => {
  maifero.move();
}
myMoves(a1);
myMoves(b1);
myMoves(m1);
/*
Saída:
Tubarão está nadando.
Papagaio está voando.
Tatu está andando.
*/