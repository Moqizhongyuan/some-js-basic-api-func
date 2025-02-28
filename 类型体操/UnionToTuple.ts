type UnionToIntersection<U> = (
  U extends U ? (x: U) => unknown : never
) extends (x: infer R) => unknown
  ? R
  : never;

type UnionToFuncIntersection<U> = UnionToIntersection<
  U extends any ? () => U : never
>;

type UnionToTuple<T> = UnionToFuncIntersection<T> extends () => infer ReturnType
  ? [UnionToTuple<Exclude<T, ReturnType>>, ReturnType]
  : [];
