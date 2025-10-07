import { PageObject } from '@automation/web-automation-framework';

export class DemoPage extends PageObject {

    private readonly inputBusqueda = "#small-searchterms12313";
    // private readonly btnSearch = ".search-box-button";
    private get btnBusqueda() {
        return this.byRole('button', { name: 'Searchign' });
    }

    async navegarALogin() {
        await this.navegar('/');
    }

    async ingresarProducto(producto: string) {
        await this.escribir(this.inputBusqueda, producto);
    }

    async hacerClickEnSearch() {
        // await this.click(this.btnSearch);
        this.btnBusqueda.click();
    }

    async buscarProducto(producto: string) {
        await this.ingresarProducto(producto);
        await this.hacerClickEnSearch();
    }

}