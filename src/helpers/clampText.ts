const clampText = (text: string) => {
  const firstWord = text.slice(0, text.indexOf(" "));

  return firstWord;
};

export default clampText;
