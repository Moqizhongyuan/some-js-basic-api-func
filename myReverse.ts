interface String {
  myReverse(s: string): string;
}

String.prototype.myReverse = function (s) {
  return s.split("").reverse().join("");
};
