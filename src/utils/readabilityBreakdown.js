export const readabilityBreakdown = (text) => {
  const wordCount = text.trim().split(/\\s+/).length;
  const sentenceCount = text.split(/[.?!]/).length;
  const syllables = text.split(/[^aeiouy]+/gi).length;

  const fleschKincaid = 206.835 - 1.015 * (wordCount / sentenceCount) - 84.6 * (syllables / wordCount);
  const gunningFog = 0.4 * ((wordCount / sentenceCount) + 100 * (syllables / wordCount));

  return {
    fleschKincaid: fleschKincaid.toFixed(2),
    gunningFog: gunningFog.toFixed(2)
  };
};
