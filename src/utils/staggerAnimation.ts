export const fadeInAnimationVariants = (
  direction: string,
  initialValue: number,
  animateValue: number
) => {
  return {
    initial: {
      opacity: 0,
      [direction]: initialValue, // Corrected dynamic key usage
    },
    animate: (index: number) => ({
      opacity: 1,
      [direction]: animateValue, // Corrected dynamic key usage
      transition: {
        delay: 0.075 * index,
      },
    }),
  };
};
