{
  //Condition (조건)
  type Check<T> = T extends string ? boolean : number;
  type Type1 = Check<number>; // number type
  type Type2 = Check<string>; // boolean type

  type TypeName<T> = T extends string
    ? "string"
    : T extends number
    ? "number"
    : T extends boolean
    ? "boolean"
    : T extends undefined
    ? "undefined"
    : T extends Function
    ? "fucntion"
    : "objet";

  type T1 = TypeName<string>; // string Type
  type T1 = TypeName<() => void>; // function Type
  type T1 = TypeName<{}>; // objet Type
}
