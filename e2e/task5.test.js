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
    await device.disableSynchronization();
    await productCardsArray.atIndex(0).tap();
    await sleep(1000);
    await expect(productDetailsScreen).toBeVisible();
  });
});


function sleep (ms) {
  return new Promise((res) => {
    setTimeout(() => {
      res();
    }, ms);
  });
}
