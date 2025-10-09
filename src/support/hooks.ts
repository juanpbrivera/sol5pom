import { Before, After, AfterStep, AfterAll, setDefaultTimeout, Status } from '@cucumber/cucumber';
import { CustomWorld } from './CustomWorld';

setDefaultTimeout(30_000);

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
  const { AutomatizacionWeb } = await import('@automation/web-automation-framework');
  await AutomatizacionWeb.generarReporte();
});