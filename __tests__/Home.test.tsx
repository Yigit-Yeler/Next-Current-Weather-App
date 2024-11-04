import Home from '@/pages'
import '@testing-library/jest-dom'
import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'


it('should display city weather data based on selected city', async () => {
    const darkMode = false;
    const setDarkMode = jest.fn();


    const city = { label: 'Eskişehir', id: 26 }

    render(
        <Home darkMode={darkMode} setDarkMode={setDarkMode} />
    );
    const cityInputElement = await screen.findByTestId("city-input");
    await userEvent.type(cityInputElement, "Eskişehir")
    await userEvent.keyboard('{Enter}');


    waitFor(() => {
        const cityElement = screen.findByTestId("city");
        expect(cityElement).toHaveTextContent("Eskişehir");
    });

});



// it('should have Docs text', () => {
//     render(<Example />)

//     const myElement = screen.getByText("Example Component")
//     // console.log(myElement)

//     expect(myElement).toBeInTheDocument()
// })


// it('should city name display correct', async () => {
//     render(<CurrentWeatherInfoCard city={{ label: "Eskişehir", id: 26 }} />)

//     const myElement = await screen.findByTestId("city")
//     console.log(myElement)


//     await waitFor(() => {
//         expect(myElement).toHaveTextContent("Eskişehir")
//     })
// })