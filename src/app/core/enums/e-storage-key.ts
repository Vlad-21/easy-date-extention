export const EStorageKey = {
  TIME: 'time',
} as const;

export type TStorageKey =
  (typeof EStorageKey)[keyof typeof EStorageKey];
