const { buildIndex, searchProducts } = require('../searchEngine');

describe('Search Engine', () => {
  const products = [
    "Apple iPhone 15",
    "Samsung Galaxy S23",
    "Apple Watch Series 8",
    "Sony Headphones"
  ];
  const index = buildIndex(products);

  test('should find Apple iPhone 15 with query "iph"', () => {
    const result = searchProducts('iph', index);
    expect(result).toContain('Apple iPhone 15');
  });

  test('should find Samsung with query "gal"', () => {
    const result = searchProducts('gal', index);
    expect(result).toContain('Samsung Galaxy S23');
  });

  test('should return empty array if no match', () => {
    const result = searchProducts('xyz', index);
    expect(result.length).toBe(0);
  });
});
