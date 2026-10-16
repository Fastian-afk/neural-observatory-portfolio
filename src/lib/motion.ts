export const MOTION_TIMINGS = {
  fast: 0.2,
  medium: 0.45,
  slow: 0.75,
  easeOutExpo: [0.16, 1, 0.3, 1] as const
};

export const FADE_UP_VARIANTS = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: MOTION_TIMINGS.medium,
      ease: MOTION_TIMINGS.easeOutExpo
    }
  }
};
