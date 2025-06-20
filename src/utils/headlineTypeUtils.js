export const detectHeadlineType = (text) => {
  if (/\\bhow to\\b/i.test(text)) return 'How-To';
  if (/^\\d+\\s/.test(text)) return 'List';
  if (/\\?$/.test(text)) return 'Question';
  return 'Generic';
};
