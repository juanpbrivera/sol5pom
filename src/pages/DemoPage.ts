import { PageObject } from '@automation/web-automation-framework';

export class DemoPage extends PageObject {

    private readonly inputSearch = "#small-searchterms";
    private readonly btnSearch = ".search-box-button";

    async navegarALogin() {
        await this.navegar('/');
    }

    async ingresarProducto(producto: string) {
        await this.escribir(this.inputSearch, producto);
    }

    async hacerClickEnSearch() {
        await this.click(this.btnSearch);
    }

    async buscarProducto(producto: string) {
        await this.ingresarProducto(producto);
        await this.hacerClickEnSearch();
    }

}