export class IBuzzFizz {

  #memorize: Map<number, string> = new Map<number, string>();
  public fizz = 'Fizz';
  public buzz = 'Buzz';

  public buzzfizz(n: number, fizz: string, buzz: string): string {
    if (this.fizz !== fizz || this.buzz !== buzz) {
      this.#memorize.clear();
      this.fizz = fizz;
      this.buzz = buzz;
    }

    if (!this.#memorize.has(n)) {
      this.#checkBuzzFizz(n)

    }
    return this.#memorize.get(n)!;

  }

  #checkBuzzFizz(n: number) {
    let output: string = '';

    if (n % 3 === 0) { output += this.fizz; }
    if (n % 5 === 0) { output += this.buzz; }
    if (output.length === 0) output = `${n}`;

    this.#memorize.set(n, output);
  }
}
