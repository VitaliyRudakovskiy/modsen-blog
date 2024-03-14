export type SmootheReturnType = [
  (element: Element | null) => void,
  IntersectionObserverEntry | null,
];

export type SmoothOptions = IntersectionObserverInit & {
  executeOnce?: boolean;
};
