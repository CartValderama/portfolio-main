export const textSplitter = (text: string) => {
  const letters = text.split("").map((char, i) => ({
    char,
    isSpace: char === " ",
    index: i,
  }));

  return letters;
};
