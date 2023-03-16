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

  // Mui Sx
  type Sx = SxProps<Theme>;
  type Sxs = Record<string, Sx>;
  interface WithSx {
    sx?: Sx;
  }

  // Base props for components
  type CProps<P = unknown> = P & WithSx & HTMLAttributes<HTMLDivElement>;
}

export {};
