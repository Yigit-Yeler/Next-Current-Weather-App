import Home from '@/pages';
import '@testing-library/jest-dom';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';


it('should display city weather data based on selected city', async () => {
    render(
        <Home />
    );
    const cityInputElement = await screen.findByTestId("city-input");
    await userEvent.type(cityInputElement, "Eskişehir")
    await userEvent.keyboard('{Enter}');


    waitFor(() => {
        const cityElement = screen.findByTestId("city");
        expect(cityElement).toHaveTextContent("Eskişehir");
    });

});