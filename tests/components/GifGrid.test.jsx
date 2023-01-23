import { render,screen } from "@testing-library/react";
import { GifGrid } from "../../src/components/GifGrid";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";


//Tenemos que hacer un mock para poder utilizar
// el hook personalizado que hicimos
// de la manera correcta dentro de las pruebas
jest.mock('../../src/hooks/useFetchGifs')

describe('Pruebas en el componente <GifGrid/>', () => { 
    const categoria = 'Batman';
    test('Debe de mostrar el loading inicialmente', () => { 
        useFetchGifs.mockReturnValue({
            imagenes: [],
            cargando: true,
        })
        render(<GifGrid categoria={categoria}></GifGrid>)
        //Ahora comprobamos que este en la fase de "cargando"
        expect(screen.getByText('Cargando...'))
        //Tambien comprobamos de que ya se haya imprimido el titulo
        // de la categoria
        expect(screen.getByText(categoria))
     })
    
    test('Debe de mostrar items cuando se terminan de cargar las imagenes', () => { 
        const gifs = [
            {
                id: 'abc',
                title: 'Saitama',
                url: 'goku.jpg'
            },
            {
                id: '123',
                title: 'Saitama33',
                url: 'alex.jpg'
            }
        ]
        useFetchGifs.mockReturnValue({
            imagenes: gifs,
            cargando: false,
        })
        render(<GifGrid categoria={categoria}></GifGrid>)
        //Confirmamos que solo se haga uso de 2 gifs
        expect(screen.getAllByRole('img').length).toBe(2)
     })
})