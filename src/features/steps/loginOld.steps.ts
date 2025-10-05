// // features/steps/login.steps.ts
// import { Given, When, Then } from '@cucumber/cucumber';
// import type { AutomatizacionWeb } from '@automation/web-automation-framework';
// import { LoginPage } from '../../pages/LoginPage';

// // Variable para mantener la página entre pasos
// let loginPage: LoginPage;

// Given('que navego a la página de login', async function (this: AutomatizacionWeb) {
//   loginPage = new LoginPage(this);
//   await loginPage.navegarALogin();
// });

// When('ingreso el usuario {string}', async function (this: AutomatizacionWeb, usuario: string) {
//   if (!loginPage) loginPage = new LoginPage(this);
//   await loginPage.ingresarUsuario(usuario);
// });

// When('ingreso la contraseña {string}', async function (this: AutomatizacionWeb, contrasena: string) {
//   if (!loginPage) loginPage = new LoginPage(this);
//   await loginPage.ingresarContrasena(contrasena);
// });

// When('hago clic en ingresar', async function (this: AutomatizacionWeb) {
//   if (!loginPage) loginPage = new LoginPage(this);
//   await loginPage.hacerClicEnIngresar();
// });

// Then('debo ver el mensaje de bienvenida', async function (this: AutomatizacionWeb) {
//   if (!loginPage) loginPage = new LoginPage(this);
//   await loginPage.verificarMensajeBienvenida();
// });

// Then('debo ver un mensaje de error de credenciales', async function (this: AutomatizacionWeb) {
//   if (!loginPage) loginPage = new LoginPage(this);
//   const mensaje = await loginPage.obtenerMensajeError();
//   if (!mensaje) {
//     throw new Error('No se encontró el mensaje de error');
//   }
// });

// Then('el mensaje de error debe contener {string}', async function (this: AutomatizacionWeb, textoEsperado: string) {
//   if (!loginPage) loginPage = new LoginPage(this);
//   await loginPage.mensajeErrorContiene(textoEsperado);
// });