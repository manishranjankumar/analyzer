import React from 'react';

const Suggestions = ({ headline }) => {
  if (!headline) return null;

  const suggestion = headline.includes("best")
    ? "Try using more emotionally powerful words."
    : "Consider making it more specific or benefit-driven.";

  return (
    <div className="mb-4 p-4 bg-white rounded shadow">
      <h2 className="text-xl font-semibold mb-2">Suggestions</h2>
      <ul className="list-disc ml-5">
        <li>{suggestion}</li>
        <li>Keep it concise and clear.</li>
        <li>Focus on value or outcome for reader.</li>
      </ul>
    </div>
  );
};

export default Suggestions;