declare global {
  type Primitive = string | number | symbol;

  type Obj = Record<Primitive, unknown>;
  type ObjectOf<T> = Record<Primitive, T>;

  type ObjectType = Obj | Record<never, never>;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  type AnyFn = (...args: any) => any;
  type AsConstEnum<T> = {
    [K in keyof T]: K;
  };
}

export {};
