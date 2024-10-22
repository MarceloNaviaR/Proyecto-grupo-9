describe('Historial de Gastos', () => {
    });

    it('debe permitir visualizar los gastos registrados, ordenados por fecha', () => {
        cy.get('.gasto').should('have.length.greaterThan', 0);
        cy.get('.gasto').then(gastos => {
            const fechas = gastos.map((index, gasto) => new Date(gasto.querySelector('.fecha').innerText)).get();
            const fechasOrdenadas = [...fechas].sort((a, b) => b - a);
            expect(fechas).to.deep.equal(fechasOrdenadas);
        });
});