import React, { useState } from 'react';
import HeadlineInput from './components/HeadlineInput';
import HeadlineScore from './components/HeadlineScore';
import Suggestions from './components/Suggestions';
import ExportOptions from './components/ExportOptions';

const App = () => {
  const [headline, setHeadline] = useState('');

  return (
    <div className="min-h-screen bg-gray-100 text-gray-900 p-4">
      <h1 className="text-3xl font-bold mb-4 text-center">Headline Analyzer Tool</h1>
      <HeadlineInput headline={headline} setHeadline={setHeadline} />
      <HeadlineScore headline={headline} />
      <Suggestions headline={headline} />
      <ExportOptions headline={headline} />
    </div>
  );
};

export default App;