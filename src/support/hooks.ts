import { Before, After, AfterStep, AfterAll, setDefaultTimeout, Status } from '@cucumber/cucumber';
import { CustomWorld } from './CustomWorld';
import { AutomatizacionWeb } from '@automation/web-automation-framework';

const logger = AutomatizacionWeb.crearLogger('CucumberHooks');

AutomatizacionWeb.cargarConfiguracion();
setDefaultTimeout(AutomatizacionWeb.obtenerTimeoutCucumber());

Before(async function (this: CustomWorld, scenario) {
  await this.iniciarEscenario(scenario);
});

AfterStep(async function (this: CustomWorld, { pickleStep, result }) {
  await this.capturarStep(pickleStep, result, Status);
});

After(async function (this: CustomWorld, scenario) {
  await this.finalizarEscenario(scenario, Status);
});

AfterAll(async function () {
  await AutomatizacionWeb.generarReporte();
});