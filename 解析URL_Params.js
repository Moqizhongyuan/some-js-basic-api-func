function parseParam(url) {
  const paramStr = /.+\?(.+)$/.exec(url)[1];
  const paramArr = paramStr.split("&");
  const paramObj = {};
  paramArr.forEach((param) => {
    if (/=/.test(param)) {
      let [key, val] = param.split("=");
      val = decodeURIComponent(val);
      val = /^\d+$/.test(val) ? parseFloat(val) : val;
      if (paramObj.hasOwnProperty(key)) {
        paramObj[key] = [].concat(paramObj[key], val);
      } else {
        paramObj[key] = val;
      }
    } else {
      paramObj[param] = true;
    }
  });
  return paramObj;
}

let url =
  "http://www.domain.com/?user=anonymous&id=123&id=456&city=%E5%8C%97%E4%BA%AC&enabled";
parseParam(url);
