type TupleToNestedObject<Tuple extends unknown[], Value> = Tuple extends [
  infer First,
  ...infer Rest
]
  ? {
      [Key in First as Key extends keyof any
        ? Key
        : never]: Rest extends unknown[]
        ? TupleToNestedObject<Rest, Value>
        : Rest;
    }
  : Value;
