export const getValidateText = (text?: string | number | null) =>
  text ? String(text) : 'No data';
