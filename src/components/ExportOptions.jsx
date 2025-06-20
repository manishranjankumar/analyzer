import React from 'react';

const ExportOptions = ({ headline }) => {
  const handleCopy = () => {
    navigator.clipboard.writeText(headline);
    alert('Headline copied!');
  };

  return (
    <div className="flex gap-4 mt-4">
      <button
        onClick={handleCopy}
        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
      >
        Copy Headline
      </button>
    </div>
  );
};

export default ExportOptions;