enum Status {
  PENDING = "pending",
  REJECTED = "rejected",
  RESOLVED = "resolved",
}

class MyPromise {
  state: Status;
  value: any;
  resolvedCallbacks: Array<(value: any) => void>;
  rejectedCallbacks: Array<(value: any) => void>;
  constructor(fn: any) {
    this.state = Status.PENDING;
    this.rejectedCallbacks = [];
    this.resolvedCallbacks = [];

    const resolve = (value: any) => {
      if (value instanceof MyPromise) {
        return value.then(resolve, reject);
      }

      setTimeout(() => {
        if (this.state === Status.PENDING) {
          this.state = Status.RESOLVED;
          this.value = value;
          this.resolvedCallbacks.forEach((callback) => callback(value));
        }
      }, 0);
    };

    const reject = (value: any) => {
      if (this.state === Status.PENDING) {
        this.state = Status.REJECTED;
        this.value = value;
        this.rejectedCallbacks.forEach((callback) => callback(value));
      }
    };
    try {
      fn(resolve, reject);
    } catch (e) {
      reject(e);
    }
  }
  then(onResolve: (value: any) => void, onReject: (value: any) => void) {
    onResolve = typeof onResolve === "function" ? onResolve : (value) => value;
    onReject = typeof onReject === "function" ? onReject : (value) => value;

    if (this.state === Status.PENDING) {
      this.resolvedCallbacks.push(onResolve);
      this.rejectedCallbacks.push(onReject);
    }

    if (this.state === Status.RESOLVED) {
      onResolve(this.value);
    }
    if (this.state === Status.REJECTED) {
      onReject(this.value);
    }
  }
}
