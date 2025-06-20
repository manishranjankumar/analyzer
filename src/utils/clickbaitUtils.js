const clickbaitPhrases = [
  'won\'t believe', 'shocking', 'this is why', 'you need to see',
  'top secret', 'what happened next', 'this will blow your mind'
];

export const detectClickbait = (text) => {
  const found = clickbaitPhrases.filter(phrase => text.toLowerCase().includes(phrase));
  return {
    isClickbait: found.length > 0,
    phrases: found
  };
};
