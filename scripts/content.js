function replaceCharmedPrices() {
  // Regular expression to match charmed prices
  const regex = /\b[\d,]+\.9\d\b/g;

  // Select all text nodes on the page
  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, null, false);
  let node;

  while (node = walker.nextNode()) {
    if (regex.test(node.nodeValue)) {
      node.nodeValue = node.nodeValue.replace(regex, globalThis.uncharmPriceString);
    }
  }
}

replaceCharmedPrices();