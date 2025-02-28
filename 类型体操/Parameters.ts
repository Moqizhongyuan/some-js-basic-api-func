type MyParameters<T extends (...arg: any) => any> = T extends (
  ...arg: infer P
) => any
  ? P
  : never;
