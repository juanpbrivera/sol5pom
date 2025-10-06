// support/CustomWorld.ts
import { AutomatizacionWeb } from '@automation/web-automation-framework';
import { LoginPage } from '../pages/LoginPage';
import { DemoPage } from '../pages/demoPage';
// import { HomePage } from '../pages/HomePage';

export class CustomWorld extends AutomatizacionWeb {
  public loginPage!: LoginPage;
  public demoPage!: DemoPage;
//   public homePage!: HomePage;
  
  async iniciar() {
    await super.iniciar();
    // Inicializar todas las páginas
    this.loginPage = new LoginPage(this);
    this.demoPage = new DemoPage(this);
    // this.homePage = new HomePage(this);
  }
}