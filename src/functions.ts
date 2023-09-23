export function first<T>(array: T[]): T {
  return array[0];
}

export function updateItem <T>(array: T[], index: number, object: T): T[] {
  if (index >= 0 && index < array.length) {
    array.splice(index, 1, object);
    return array;
  }
  return array;
}
