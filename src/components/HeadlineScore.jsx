import React from 'react';
import { getWordCount, getCharCount } from '../utils/scoreUtils';
import { analyzeSentiment } from '../utils/sentimentUtils';
import { detectHeadlineType } from '../utils/headlineTypeUtils';
import { detectClickbait } from '../utils/clickbaitUtils';
import { readabilityBreakdown } from '../utils/readabilityBreakdown';

const HeadlineScore = ({ headline }) => {
  const words = getWordCount(headline);
  const chars = getCharCount(headline);
  const sentiment = analyzeSentiment(headline);
  const headlineType = detectHeadlineType(headline);
  const clickbait = detectClickbait(headline);
  const breakdown = readabilityBreakdown(headline);

  return (
    <div className="mb-4 p-4 bg-white rounded shadow">
      <h2 className="text-xl font-semibold mb-2">Headline Analysis</h2>
      <p><strong>Words:</strong> {words} (Ideal: 6–12)</p>
      <p><strong>Characters:</strong> {chars} (Ideal: 50–70)</p>
      <p><strong>Type:</strong> {headlineType}</p>
      <p><strong>Sentiment:</strong> {sentiment}</p>
      <p><strong>Clickbait:</strong> {clickbait.isClickbait ? 'Yes' : 'No'}</p>
      {clickbait.isClickbait && (
        <ul className="list-disc ml-5 text-red-600">
          {clickbait.phrases.map((phrase, idx) => (
            <li key={idx}>{phrase}</li>
          ))}
        </ul>
      )}
      <div className="mt-2">
        <p><strong>Flesch-Kincaid Score:</strong> {breakdown.fleschKincaid}</p>
        <p><strong>Gunning Fog Index:</strong> {breakdown.gunningFog}</p>
      </div>
    </div>
  );
};

export default HeadlineScore;
