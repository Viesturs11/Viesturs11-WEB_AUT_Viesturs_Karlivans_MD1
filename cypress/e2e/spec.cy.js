import { GridPage } from "../pageObjects/gridPage"

describe('demoqa', () => {
    context('Grid Page', () => {
        
        it('testing Grid Page', () => {

            //Open https://demoqa.com/selectable
            GridPage.visit();

            //Click “Grid”
            GridPage.Grid.click();
            
            //Click- “Two”, “Four”, “Six”, “Eight”
            GridPage.Numbers.contains('Two').click();
            GridPage.Numbers.contains('Four').click();
            GridPage.Numbers.contains('Six').click();
            GridPage.Numbers.contains('Eight').click();

            //Validate that “Two”, “Four”, “Six”, “Eight” are highlighted
            GridPage.Highlighted.contains('Two').should('have.class', 'active');
            GridPage.Highlighted.contains('Four').should('have.class', 'active');
            GridPage.Highlighted.contains('Six').should('have.class', 'active');
            GridPage.Highlighted.contains('Eight').should('have.class', 'active');

            //Validate that “One”, “Three”, “Five”, “Seven”, “Nine” are not highlighted
            GridPage.Numbers.contains('One').should('not.have.class', 'active');
            GridPage.Numbers.contains('Three').should('not.have.class', 'active');
            GridPage.Numbers.contains('Five').should('not.have.class', 'active');
            GridPage.Numbers.contains('Seven').should('not.have.class', 'active');
            GridPage.Numbers.contains('Nine').should('not.have.class', 'active');
        })
    })
})
