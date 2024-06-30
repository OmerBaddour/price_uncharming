function uncharmPriceString(priceString) {
  let number = parseFloat(priceString.replace(/[^\d.]/g, ''));
  number = Math.round(number)
  return new Intl.NumberFormat('en-US').format(number);
}

function replaceCharmedPrices() {
  // Regular expression to match charmed prices
  const regex = /\b[\d,]+\.9\d\b/g;

  // Select all text nodes on the page
  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, null, false);
  let node;

  while (node = walker.nextNode()) {
    if (regex.test(node.nodeValue)) {
      node.nodeValue = node.nodeValue.replace(regex, uncharmPriceString);
    }
  }
}

function replaceCharmedPricesAmazon() {
  // Amazon breaks up prices into the separate elements
  const priceWholes = document.querySelectorAll('.a-price-whole');
  // TODO: maybe can delete price decimal shit
  const priceDecimals = document.querySelectorAll('.a-price-decimal');
  const priceFractions = document.querySelectorAll('.a-price-fraction');

  priceWholes.forEach((priceWholeElem, index) => {
    const priceDecimalElem = priceDecimals[index];
    const priceFractionElem = priceFractions[index];

    const priceString = `${priceWholeElem.innerText}${priceFractionElem.innerText}`

    priceWholeElem.innerText = uncharmPriceString(priceString);
    priceDecimalElem.innerText = '';
    priceFractionElem.innerText = '';
  });
}

replaceCharmedPrices();
replaceCharmedPricesAmazon();
