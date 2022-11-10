type GetRandomNumberFn = {
  minimum: number;
  maximum: number;
}

export function getRandomNumber({ minimum, maximum }: GetRandomNumberFn) {
  return Math.random() * (maximum - minimum) + minimum;
};
