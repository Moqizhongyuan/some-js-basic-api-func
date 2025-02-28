type KebabCaseToCamelCase<Str extends string> =
  Str extends `${infer Left}-${infer Rest}`
    ? KebabCaseToCamelCase<`${Left}${Capitalize<Rest>}`>
    : Str;

type Res = KebabCaseToCamelCase<"aaa-bbb-ccc">;
