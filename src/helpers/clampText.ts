const clampText = (text: string) => {
  if (!text) {
    throw new Error("Try to enter a valid text");
  }

  const firstWord = text.slice(0, text.indexOf(" "));

  return firstWord;
};

export default clampText;
