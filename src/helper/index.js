export const randomScalingFactor = function (max = 100000) {
  const value = Math.round(Math.random() * max * 9 + max);
  const formatedValue = new Intl.NumberFormat("en-US", { currency: "USD", style: "currency" }).format(value);
  return {
    value,
    formatedValue,
  };
};

export const randomPercentageFactor = function () {
  let value = Math.round(Math.random() * 90 + 10);
  if (value < 50) value = value * -1;
  return value;
};
