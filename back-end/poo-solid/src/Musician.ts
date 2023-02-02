// Musician.ts
// eslint-disable-next-line import/no-unresolved, import/extensions
import Flute from './Flute';

export default class Musician {
  // Agora o parâmetro da flauta tem um valor padrão caso nenhuma seja passada
  // eslint-disable-next-line no-useless-constructor
  constructor(
    public name: string,
    public flute: Flute = new Flute('Minha flauta'),
  // eslint-disable-next-line no-empty-function
  ) { }

  play(): void {
    this.flute.play();
    console.log(
      `"${this.name}" é quem está comandando a emissão das melodias`,
    );
  }
}

const musician = new Musician('Márcia');
musician.play();