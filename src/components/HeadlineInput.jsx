import React from 'react';

const HeadlineInput = ({ headline, setHeadline }) => {
  return (
    <div className="mb-4">
      <label className="block text-lg font-medium mb-2">Enter Headline:</label>
      <input
        type="text"
        className="w-full p-2 border border-gray-300 rounded"
        value={headline}
        onChange={(e) => setHeadline(e.target.value)}
        placeholder="Write your headline here..."
      />
    </div>
  );
};

export default HeadlineInput;