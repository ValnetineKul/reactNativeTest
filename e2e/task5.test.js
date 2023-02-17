describe('Example', () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('check products -> product details navigation', async () => {
    const productsListScreen = await element(by.id('products'));
    const productCardsArray = await element(by.id('productCard'));
    const productDetailsScreen = await element(by.id('productDetails'));

    await expect(productsListScreen).toBeVisible();
    await productCardsArray.atIndex(0).tap();
    await expect(productDetailsScreen).toBeVisible();
  });
});

