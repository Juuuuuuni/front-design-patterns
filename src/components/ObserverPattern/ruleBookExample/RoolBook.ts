export type RuleObserver = (rules: string[]) => void;

class RuleBook {
  static instance: RuleBook;
  private observers: RuleObserver[] = [];

  constructor() {
    this.observers = [];
  }

  subscribe(observer: RuleObserver) {
    this.observers.push(observer);
  }

  notify(rules: string[]) {
    this.observers.forEach((observer) => observer(rules));
  }
}

RuleBook.instance = new RuleBook();

export { RuleBook };
