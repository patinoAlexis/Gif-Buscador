import { GifTarjeta } from "../../src/components/GifTarjeta";
import { getByTestId, render, screen } from "@testing-library/react"


describe('Pruebas en el componente <GifItem>', () => {
    const title = 'Hola mundo';
    const url = 'https://one-punch.com/saitama.jpg';
    test('Debe de hacer match con el snapshot', () => { 
        const {container} = render ( <GifTarjeta title={title} url={url}></GifTarjeta>)
        expect(container).toMatchSnapshot();
     })
    test('Debe de mostrar la imagen con el url y titulo', () => { 
        const {container} = render ( <GifTarjeta title={title} url={url}></GifTarjeta>)
        // expect(screen.getByRole('img').src).toBe(url);
        const {src,alt} = screen.getByRole('img');
        expect(alt).toBe(title);
        expect(src).toBe(url);
      })
    test('Debe de mostrar el titulo en el componente', () => { 
        render ( <GifTarjeta title={title} url={url}></GifTarjeta>)
        expect(screen.getByText(title)).toBeTruthy();
     })
})