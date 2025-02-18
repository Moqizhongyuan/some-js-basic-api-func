function parseParam(url: string): any {
  const searchParam = url.split("?")[1];
  if (!searchParam) return;
  const searchParamArr = searchParam.split("&"),
    map = {};
  let key: string, val: any;
  searchParamArr.forEach((item) => {
    [key, val] = item.split("=");
    if (val) {
      val = decodeURIComponent(val);
      val = isNaN(val) ? val : Number(val);
      if (map[key]) {
        (Array.isArray(map[key]) ? map[key] : (map[key] = [map[key]])).push(
          val
        );
      } else {
        map[key] = val;
      }
    } else {
      map[key] = true;
    }
  });
  return map;
}
