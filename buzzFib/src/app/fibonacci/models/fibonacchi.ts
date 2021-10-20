export class IFibonacchi {

  #memorizeNum: Map<string, number> = new Map<string, number>();
  #cacheKey = '__fib__'

  public fibo(n: number): number {
    if (n === 0 || n === 1) {
      return 1;
    }

    if (!this.#memorizeNum.has(`${this.#cacheKey}${n}`)) {
      this.#memorizeNum.set(`${this.#cacheKey}${n}`, this.fibo(n - 1) + this.fibo(n - 2));
    }

    return this.#memorizeNum.get(`${this.#cacheKey}${n}`)!;
  }

}
