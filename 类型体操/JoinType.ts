type JoinType<
  Items extends any[],
  Delimiter extends string,
  Result extends string = ""
> = Items extends [infer First extends string, ...infer Rest]
  ? JoinType<Rest, Delimiter, `${Result}${Delimiter}${First}`>
  : RemoveFirstDelimiter<Result>;

type RemoveFirstDelimiter<Str extends string> =
  Str extends `${infer _}${infer Rest}` ? Rest : Str;
