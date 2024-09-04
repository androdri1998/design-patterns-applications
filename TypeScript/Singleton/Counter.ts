class Counter {
  count: number | null = null;

  initiateCounter(): void {
    this.count = 0;
  }

  get(): number | null {
    if (this.count === null) {
      this.initiateCounter();
    }

    return this.count;
  }

  increment(): number {
    if (this.count === null) {
      throw new Error("Counter not initiated");
    }

    this.count = this.count + 1;
    return this.count;
  }
}

const counter = new Counter();

export default counter;
