function uncharmPriceString(priceString) {
  let number = parseFloat(priceString.replace(/[^\d.]/g, ''));
  number = Math.round(number)
  return new Intl.NumberFormat('en-US').format(number);
}

globalThis.uncharmPriceString = uncharmPriceString