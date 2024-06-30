function roundMatch(match) {
  // Round matched number and format with commas
  let number = parseFloat(match.replace(/,/g, ''));
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
      node.nodeValue = node.nodeValue.replace(regex, roundMatch);
    }
  }
}

replaceCharmedPrices();
