export const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    x: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
};
