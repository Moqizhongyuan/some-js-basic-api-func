function myPromiseAll(promises) {
  return new Promise((resolve, reject) => {
    if (!Array.isArray(promises)) {
      throw new TypeError("promises is not an array");
    }
    let resolveCount = 0;
    let promiseNum = promises.length;
    let resolveResults = [];
    for (let i = 0; i < promiseNum; i++) {
      Promise.resolve(promises[i]).then(
        (val) => {
          resolveCount++;
          resolveResults.push(val);
          if (resolveCount === promiseNum) {
            return resolve(resolveResults);
          }
        },
        (err) => {
          reject(err);
        }
      );
    }
  });
}
