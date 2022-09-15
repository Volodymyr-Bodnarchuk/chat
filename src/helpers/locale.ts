const locale = {
  year: '2-digit' as const,
  month: '2-digit' as const,
  day: '2-digit' as const,
  hour: '2-digit' as const,
  minute: '2-digit' as const,
};
const localeToNumeric = {
  year: 'numeric' as const,
  month: 'short' as const,
  day: 'numeric' as const,
};
export { locale, localeToNumeric };
