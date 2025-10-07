// support/CustomWorld.ts
import { AutomatizacionWeb } from '@automation/web-automation-framework';
import { setWorldConstructor } from '@cucumber/cucumber';  // ← Importar directamente
import { LoginPage } from '../pages/LoginPage';
import { DemoPage } from '../pages/DemoPage';

/**
 * World personalizado del proyecto.
 */
export class CustomWorld extends AutomatizacionWeb {
  public loginPage!: LoginPage;
  public demoPage!: DemoPage;
  
  async iniciar() {
    await super.iniciar();
    this.loginPage = new LoginPage(this);
    this.demoPage = new DemoPage(this);
  }
}

setWorldConstructor(CustomWorld);