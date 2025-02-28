type MyThisParameterType<T extends abstract new (...args: any) => any> =
  T extends (this: infer U, ...args: any[]) => any ? U : never;
