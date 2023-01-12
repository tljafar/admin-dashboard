export const randomScalingFactor = function (max = 100000) {
  const value = Math.round(Math.random() * max * 9 + max);
  const formatedValue = currencyFormat(value);
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

export const currencyFormat = function (value, currency = "USD") {
  const option = currency ? { currency: currency, style: "currency" }: { minimumFractionDigits: 2, maximumFractionDigits: 2 };
  return new Intl.NumberFormat("en-US", option).format(value);
};
