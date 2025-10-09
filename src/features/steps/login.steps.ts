// features/steps/login.steps.ts
import { Given, When, Then } from '@cucumber/cucumber';
import type { CustomWorld } from '../../support/CustomWorld';

Given('que navego a la página de login', async function (this: CustomWorld) {
    await this.loginPage.navegarALogin();
});

When('ingreso el usuario {string}', async function (this: CustomWorld, usuario: string) {
    await this.loginPage.ingresarUsuario(usuario);
});

When('ingreso la contraseña {string}', async function (this: CustomWorld, contrasena: string) {
    await this.loginPage.ingresarContrasena(contrasena);
});

When('hago clic en ingresar', async function (this: CustomWorld) {
    await this.loginPage.hacerClicEnIngresar();
});

Then('debo ver el mensaje de bienvenida', async function (this: CustomWorld) {
    await this.loginPage.verificarMensajeBienvenida();
});

Then('debo ver un mensaje de error de credenciales', async function (this: CustomWorld) {
    await this.loginPage.verificarMensajeErrorCredenciales();
});

Then('el mensaje de error debe contener {string}', async function (this: CustomWorld, textoEsperado: string) {
    await this.loginPage.mensajeErrorContiene(textoEsperado);
});

Then('debo ver el mensaje de error {string}', async function(this: CustomWorld, textoEsperado: string) {
  await this.loginPage.verificarMensajeError(textoEsperado);
})
