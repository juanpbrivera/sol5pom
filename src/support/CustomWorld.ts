// support/CustomWorld.ts
import { AutomatizacionWeb } from '@automation/web-automation-framework';
import { setWorldConstructor } from '@cucumber/cucumber';  // ← Importar directamente
import { LoginPage } from '../pages/LoginPage';
/**
 * World personalizado del proyecto.
 */
export class CustomWorld extends AutomatizacionWeb {
  public loginPage!: LoginPage;
  
  async iniciar() {
    await super.iniciar();
    this.loginPage = new LoginPage(this);
  }
}

setWorldConstructor(CustomWorld);