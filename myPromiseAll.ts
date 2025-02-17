function myPromiseAll(promises: []) {
  return new Promise((resolve, reject) => {
    let resolveCount: number = 0;
    const promiseLen: number = promises.length,
      resolveResults = [];
    for (let i = 0; i < promiseLen; i++) {
      Promise.resolve(promises[i]).then((value) => {
        resolveResults[i] = value;
        resolveCount++;
        if (resolveCount === promiseLen) {
          return resolve(resolveResults);
        }
      }),
        (error: any) => {
          return reject(error);
        };
    }
  });
}
