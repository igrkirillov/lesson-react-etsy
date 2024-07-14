export function formatLongText(text: string): string {
  return text && text.length > 50 ? text.substring(0, 50) + "..." : text;
}

export function formatPrice(currencyCode: string, priceStr: string): string {
  if (currencyCode === "USD") {
    return "$" + priceStr;
  } else if (currencyCode === "EUR") {
    return "€" + priceStr;
  } else {
    return priceStr + " " + currencyCode;
  }
}

export function getClassNameForStock(stock: number): string {
  if (stock <= 10) {
    return "level-low";
  } else if (stock <= 20) {
    return "level-medium";
  } else {
    return "level-high";
  }
}