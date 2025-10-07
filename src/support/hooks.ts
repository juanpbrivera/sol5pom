// support/hooks.ts
import { Before, After, AfterAll, setDefaultTimeout, Status, AfterStep } from '@cucumber/cucumber';
import { AutomatizacionWeb } from '@automation/web-automation-framework';

setDefaultTimeout(15_000);

Before(async function (this: AutomatizacionWeb, scenario) {
  await this.iniciarEscenario(scenario);
});

AfterStep(async function (this: AutomatizacionWeb, { pickleStep, result }) {
  await this.capturarStep(pickleStep, result, Status);
});

After(async function (this: AutomatizacionWeb, scenario) {
  await this.finalizarEscenario(scenario, Status);
});

AfterAll(async function () {
  await AutomatizacionWeb.generarReporte();
});