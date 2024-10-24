// 有小数
let format1 = (n) => {
  let num = n.toString(); // 转成字符串
  let decimals = "";
  // 判断是否有小数
  num.indexOf(".") > -1 ? (decimals = num.split(".")[1]) : decimals;
  let len = num.length;
  if (len <= 3) {
    return num;
  } else {
    let temp = "";
    let remainder = len % 3;
    decimals ? (temp = "." + decimals) : temp;
    if (remainder > 0) {
      // 不是3的整数倍
      return (
        num.slice(0, remainder) +
        "," +
        num.slice(remainder, len).match(/\d{3}/g).join(",") +
        temp
      );
    } else {
      // 是3的整数倍
      return num.slice(0, len).match(/\d{3}/g).join(",") + temp;
    }
  }
};
format(12323.33); // '12,323.33'

// 无小数
let format2 = (n) => {
  let num = n.toString();
  let len = num.length;
  if (len <= 3) {
    return num;
  } else {
    let remainder = len % 3;
    if (remainder > 0) {
      // 不是3的整数倍
      return (
        num.slice(0, remainder) +
        "," +
        num.slice(remainder, len).match(/\d{3}/g).join(",")
      );
    } else {
      // 是3的整数倍
      return num.slice(0, len).match(/\d{3}/g).join(",");
    }
  }
};
format(1232323); // '1,232,323'
