import { Given, When, Then } from '@cucumber/cucumber';
import type { CustomWorld } from '../../support/CustomWorld';

Given('abro la Home', async function (this: CustomWorld) {
  await this.demoPage.navegarALogin();
});

When('busco {string} desde el header', async function (this: CustomWorld, producto: string) {
  await this.demoPage.buscarProducto(producto);
});

When('el título contiene "Search"', async function (this: CustomWorld) {

});

Then('la URL contiene "/search"', async function (this: CustomWorld) {

});

Then('veo algún resultado que contiene "laptop"', async function (this: CustomWorld) {
});


