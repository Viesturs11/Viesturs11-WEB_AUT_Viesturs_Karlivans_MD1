import { BasePage } from "./BasePage";

export class GridPage extends BasePage {
    static get url() {
        return 'selectable';
    }

    static get Grid() {
        return cy.get('a#demo-tab-grid');
    }

    static get Numbers() {
        return cy.get('li.list-group-item');
    }

    static get Highlighted() {
        return cy.get('li.list-group-item.active');
    }
}
