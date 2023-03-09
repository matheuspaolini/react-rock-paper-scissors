type GenerateRandomNumberFn = {
  minimum: number;
  maximum: number;
}

export function generateRandomNumber({ minimum, maximum }: GenerateRandomNumberFn) {
  return Math.random() * (maximum - minimum) + minimum;
};
