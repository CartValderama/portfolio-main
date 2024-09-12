export const colorChecker = (language: string) => {
  switch (language) {
    case "C#":
      return "#178600";
    case "TypeScript":
      return "#3178c6";
    case "JavaScript":
      return "#D4af37";
    case "SCSS":
      return "#c6538c";
    default:
      return "#57534e";
  }
};
