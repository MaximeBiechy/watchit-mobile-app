export const formatDateTimeOnlyYear = (date: string | undefined) => {
  if (!date) {
    return '';
  }
  return new Date(date).getFullYear();
};
