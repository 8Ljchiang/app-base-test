export function createMinStringLengthMessage(length: number) {
  return `Must be at least ${length} characters.`;
}

export function createMaxStringLengthMessage(length: number) {
  return `Max length is ${length} characters.`;
}

// export const MIN_STRING_LENGTH_4 = 'Must be at least 4 characters.';
// export const MIN_STRING_LENGTH_8 = 'Must be at least 8 characters.';
// export const MAX_STRING_LENGTH_128 = 'Max length is 128 characters.';
// export const MAX_STRING_LENGTH_256 = 'Max length is 256 characters.';
// export const MAX_STRING_LENGTH_512 = 'Max length is 512 characters.';
export const MIN_STRING_LENGTH_4 = createMinStringLengthMessage(4);
export const MIN_STRING_LENGTH_8 = createMinStringLengthMessage(8);
export const MAX_STRING_LENGTH_128 = createMaxStringLengthMessage(128);
export const MAX_STRING_LENGTH_256 = createMaxStringLengthMessage(256);
export const MAX_STRING_LENGTH_512 = createMaxStringLengthMessage(512);
export const STRING_REQUIRED = 'Input is required.';
