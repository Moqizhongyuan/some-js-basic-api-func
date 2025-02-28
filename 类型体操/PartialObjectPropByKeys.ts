type Compute<T> = { [Key in keyof T]: T[Key] };

type PartialObjectPropByKeys<
  Obj extends Record<string, any>,
  Key extends keyof any = keyof Obj
> = Compute<Partial<Pick<Obj, Extract<keyof Obj, Key>>> & Omit<Obj, Key>>;
