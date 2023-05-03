class Observable {
  static instance: Observable;
  private observers = [];

  constructor() {
    this.observers = [];
  }

  subscribe(func: (data: any) => void) {
    this.observers.push(func);
  }

  unsubscribe(func: (data: any) => void) {
    this.observers = this.observers.filter((observer) => observer !== func);
  }

  notify(data) {
    this.observers.forEach((observer) => observer(data));
  }
}

Observable.instance = new Observable();
export { Observable };
