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

  /**
   * ✅ NUEVO: Login usando credenciales del JSON configurado.
   * 
   * Lee de cert.json o desa.json según el ambiente:
   * ```json
   * {
   *   "credenciales": {
   *     "vendedor": { "usuario": "...", "password": "..." }
   *   }
   * }
   * ```
   * 
   * @param rol - Rol del usuario ('vendedor' | 'administrador' | 'cliente')
   */
  async iniciarSesionComo(rol: 'vendedor' | 'administrador' | 'cliente') {
    const config = this.world.obtenerConfiguracion();
    
    // Lee credenciales del JSON
    const credencial = config.credenciales?.[rol];
    
    if (!credencial) {
      throw new Error(
        `Credencial '${rol}' no encontrada en ${config.env}.json\n` +
        `Verifica que existe: credenciales.${rol}.usuario y credenciales.${rol}.password`
      );
    }
    
    await this.ingresarUsuario(credencial.usuario);
    await this.ingresarContrasena(credencial.password);
    await this.hacerClicEnIngresar();
  }

  /**
   * Login manual con credenciales específicas.
   * Úsalo para casos edge o credenciales inválidas.
   */
  async iniciarSesion(usuario: string, contrasena: string) {
    await this.ingresarUsuario(usuario);
    await this.ingresarContrasena(contrasena);
    await this.hacerClicEnIngresar();
  }

  /**
   * ✅ NUEVO: Obtiene data de prueba del JSON.
   * 
   * @example
   * ```typescript
   * const cuenta = await loginPage.obtenerDataPrueba('cuentaValida');
   * // Retorna: "0011-2233-4455-6677" (desde cert.json)
   * ```
   */
  obtenerDataPrueba<T = string>(key: string): T | undefined {
    const config = this.world.obtenerConfiguracion();
    return config.dataPrueba?.[key] as T;
  }
}