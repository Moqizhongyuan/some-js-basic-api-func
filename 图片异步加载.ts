function imageAsync(url: string) {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.src = url;
    img.onload = () => {
      console.log("ok");
      resolve(img);
    };
    img.onerror = (err) => {
      console.log("fail");
      reject(err);
    };
  });
}
