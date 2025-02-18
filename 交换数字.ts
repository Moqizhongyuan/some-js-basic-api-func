function swap(a: number, b: number) {
  a ^= b;
  b ^= a;
  a ^= b;
  return [a, b];
}
