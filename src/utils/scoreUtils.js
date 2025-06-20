export const getWordCount = (text) => {
  return text.trim() ? text.trim().split(/\s+/).length : 0;
};

export const getCharCount = (text) => {
  return text.length;
};

export const getReadabilityScore = (text) => {
  const words = getWordCount(text);
  const sentences = text.split(/[.?!]/).length;
  const syllables = text.split(/[^aeiouy]+/gi).length;
  const fleschScore = 206.835 - 1.015 * (words / sentences) - 84.6 * (syllables / words);
  return fleschScore.toFixed(2);
};