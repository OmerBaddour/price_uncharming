function replaceCharmedPricesAmazon() {
  // Amazon breaks up prices into the separate elements
  const priceWholes = document.querySelectorAll('.a-price-whole');
  const priceFractions = document.querySelectorAll('.a-price-fraction');

  priceWholes.forEach((priceWholeElem, index) => {
    const priceFractionElem = priceFractions[index];
    const priceString = `${priceWholeElem.innerText}${priceFractionElem.innerText}`

    priceWholeElem.innerText = globalThis.uncharmPriceString(priceString);
    priceFractionElem.innerText = '';
  });
}

replaceCharmedPricesAmazon();