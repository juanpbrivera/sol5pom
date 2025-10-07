// support/CustomWorld.ts
import { AutomatizacionWeb } from '@automation/web-automation-framework';
import { LoginPage } from '../pages/LoginPage';
import { DemoPage } from '../pages/demoPage';

/**
 * World personalizado del proyecto con todas las páginas disponibles.
 * Extiende AutomatizacionWeb del framework para heredar funcionalidad base.
 */
export class CustomWorld extends AutomatizacionWeb {
  public loginPage!: LoginPage;
  public demoPage!: DemoPage;
  
  /**
   * Inicializa el navegador y todas las páginas del proyecto.
   * Se ejecuta en el hook Before de cada escenario.
   */
  async iniciar() {
    await super.iniciar();
    this.loginPage = new LoginPage(this);
    this.demoPage = new DemoPage(this);
  }
}