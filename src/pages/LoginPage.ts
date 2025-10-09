// pages/LoginPage.ts
import { PageObject } from '@automation/web-automation-framework';

export class LoginPage extends PageObject {

  private readonly usuario = ".form-group:has(> label:has-text('Usuario')) input[type='text']";
  private readonly contrasena = "//label[normalize-space()='Contraseña']/following::input[@type='password'][1]";
  private readonly mensajeError = '.toast-message';
  
  private get mensajeBienvenida() {
    return this.$('.texto-bienvenidos');
  }

  private obtenerMensaje() {
    return this.porTexto('× Inicio Sesión.');
  }

  async navegarALogin() {
    await this.navegar('/login');
  }

  async ingresarUsuario(usuario: string) {
    await this.escribir(this.usuario, usuario);
  }

  async ingresarContrasena(contrasena: string) {
    await this.escribir(this.contrasena, contrasena);
  }

  async hacerClicEnIngresar() {
    await this.porRol('button', { name: 'Ingresar' }).click();
  }

  private obtenerMensajeErrorLoginAutentificacion() {
    return this.porRol('alert');
  }

  async verificarMensajeError(textoEsperado: string) {
    await this.verificar(this.obtenerMensaje()).estaVisible();
    await this.verificar(this.obtenerMensaje()).contieneTexto(textoEsperado);
  }

  async obtenerMensajeError(): Promise<string | null> {
    await this.esperar(this.mensajeError, 5000);
    return await this.texto(this.mensajeError);
  }

  async verificarMensajeBienvenida() {
    await this.verificar(this.mensajeBienvenida).estaVisible();
  }

  async mensajeErrorContiene(texto: string) {
    await this.verificar(this.mensajeBienvenida).tieneTexto(texto);
  }

  async verificarMensajeErrorCredenciales() {
    await this.verificar(this.obtenerMensajeErrorLoginAutentificacion()).estaVisible();
  }

  // Método todo-en-uno para login completo
  async iniciarSesion(usuario: string, contrasena: string) {
    await this.ingresarUsuario(usuario);
    await this.ingresarContrasena(contrasena);
    await this.hacerClicEnIngresar();
  }
}