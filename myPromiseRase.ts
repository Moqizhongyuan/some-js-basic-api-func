function myPromiseRase(args: any[]) {
  return new Promise((resolve, reject) => {
    for (let i = 0; i < args.length; i++) {
      args[i].then(resolve, reject);
    }
  });
}
