export class IBuzzFizz {

  #memorize: Map<number, string> = new Map<number, string>();

  public buzzfizz(n: number, fizz: string, buzz: string): string {

    if (!this.#memorize.has(n)) {
      this.#memorize.set(n, this.#checkBuzzFizz(n, fizz, buzz));
    }
    return this.#memorize.get(n)!;

  }

  #checkBuzzFizz(n: number, fizz: string, buzz: string) {
    let output: string = '';

    if (n % 3 === 0) { output += fizz; }
    if (n % 5 === 0) { output += buzz; }
    if (output.length === 0) output = `${n}`;

    return output
  }
}
