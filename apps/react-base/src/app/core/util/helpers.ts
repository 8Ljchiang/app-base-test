export function isNoneOrNull(value: any): boolean {
  return (value === undefined || value === null);
}

export function isArray(arr: any): boolean {
  return (arr && Array.isArray(arr));
}

export function isArrayEmpty(arr: any[]): boolean {
  if (isArray(arr)) {
    return arr.length === 0;
  }
  return false;
}

export function removeSpaces(str: string): string {
  const newString = str.replace(/\s+/g, '');
  return newString;
}
