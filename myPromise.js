class myPromise {
  constructor(executor) {
    this.state = "pending";
    this.value = undefined;
    this.reason = undefined;
    this.onResolvedCallback = [];
    this.onRejectedCallback = [];

    const resolve = (value) => {
      if (this.state === "pending") {
        this.state = "fulfilled";
        this.value = value;
        this.onResolvedCallback.forEach((fn) => fn());
      }
    };

    const reject = (reason) => {
      if (this.state === "pending") {
        this.state = "rejected";
        this.reason = reason;
        this.onRejectedCallback.forEach((fn) => fn());
      }
    };

    try {
      executor(resolve, reject);
    } catch (err) {
      reject(err);
    }
  }

  then(onFulfilled, onRejected) {
    return new myPromise((resolve, reject) => {
      if (this.state === "fulfilled") {
        setTimeout(() => {
          try {
            let result = onFulfilled(this.value);
            resolve(result);
          } catch (err) {
            reject(err);
          }
        });
      }
      if (this.state === "rejected") {
        setTimeout(() => {
          try {
            let result = onRejected(this.reason);
            resolve(result);
          } catch (err) {
            reject(err);
          }
        });
      }
      if (this.state === "pending") {
        this.onRejectedCallback.push(() =>
          setTimeout(() => {
            try {
              let result = onFulfilled(this.value);
              resolve(result);
            } catch (err) {
              reject(err);
            }
          })
        );

        this.onResolvedCallback.push(() =>
          setTimeout(() => {
            try {
              let result = onRejected(this.reason);
              resolve(result);
            } catch (err) {
              reject(err);
            }
          })
        );
      }
    });
  }

  catch(onRejected) {
    return this.then(null, onRejected);
  }
}
