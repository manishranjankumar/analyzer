import Sentiment from 'sentiment';

const sentiment = new Sentiment();

export const analyzeSentiment = (text) => {
  const result = sentiment.analyze(text);
  if (result.score > 1) return 'Positive';
  if (result.score < -1) return 'Negative';
  return 'Neutral';
};
