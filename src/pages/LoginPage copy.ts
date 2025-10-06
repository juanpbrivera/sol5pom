// // pages/LoginPage.ts
// import type { AutomatizacionWeb } from '@automation/web-automation-framework';

// export class LoginPage {
//   private readonly locators = {
//     usernameInput: ".form-group:has(> label:has-text('Usuario')) input[type='text']",
//     passwordInput: "//label[normalize-space()='Contraseña']/following::input[@type='password'][1]",
//     loginButton: { rol: 'button', nombre: /ingresar/i },
//     errorMessage: '.toast-message',
//     welcomeMessage: '.texto-bienvenidos'
//   };

//   constructor(private readonly world: AutomatizacionWeb) {}

//   async navegarALogin() {
//     await this.world.abrirPaginaBase('/login');
//   }

//   async ingresarUsuario(usuario: string) {
//     await this.world.escribirEnCampo(this.locators.usernameInput, usuario);
//   }

//   async ingresarContrasena(contrasena: string) {
//     await this.world.escribirEnCampo(this.locators.passwordInput, contrasena);
//   }

//   async hacerClicEnIngresar() {
//     await this.world.hacerClicPorRol(
//       'button', 
//       '/ingresar/i'
//     );
//   }

//   async obtenerMensajeError(): Promise<string | null> {
//     await this.world.esperarElementoVisible(this.locators.errorMessage, 5000);
//     return await this.world.obtenerTexto(this.locators.errorMessage);
//   }

//   async verificarMensajeBienvenida() {
//     await this.world.esperarElementoVisible(this.locators.welcomeMessage, 10000);
//   }

//   async mensajeErrorContiene(texto: string) {
//     await this.world.esperarTextoEnElemento(this.locators.errorMessage, texto, 5000);
//   }

//   // Método todo-en-uno para login completo
//   async iniciarSesion(usuario: string, contrasena: string) {
//     await this.ingresarUsuario(usuario);
//     await this.ingresarContrasena(contrasena);
//     await this.hacerClicEnIngresar();
//   }
// }