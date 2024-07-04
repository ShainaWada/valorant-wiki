export const parseQueryToNumber = (
  value: string | string[] | undefined
): number => {
  const stringValue = Array.isArray(value) ? value[0] : value;
  if (stringValue !== undefined && !Number.isNaN(Number(stringValue))) {
    return Number(stringValue);
  }

  return 1;
};

export const parseQueryToNumberOrUndefined = (
  value: string | string[] | undefined
): number | undefined => {
  if (value === undefined) {
    return undefined;
  }

  return parseQueryToNumber(value);
};
