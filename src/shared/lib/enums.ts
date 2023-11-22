export function createValByKeyMapper<T extends string, V extends string>(enumObj: {[key in T]: V}) {
  return function (key: T): V {
    return enumObj[key];
  };
}

export function createKeyByValMapper<T extends string, V extends string>(enumObj: {[key in T]: V}) {
  const enumEntries = Object.entries<V>(enumObj);
  return function (value: V): T {
    const pair = enumEntries.find((pair) => pair[1] === value) || [];
    return pair[0] as T;
  };
}
