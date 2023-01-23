import { renderHook, waitFor } from "@testing-library/react";
import { useFetchGifs } from "../../src/hooks/useFetchGifs"

//Para poder hacer el testing de los hooks ya no utilizaremos
// lo que es el render, si no que utilizaremos el 
// renderHook
describe('Pruebas del hook useFetchGifs', () => { 
    test('debe de regresar el estado inicial', () => { 
        //existen 3 principales cosas que nos puede devolver el
        // renderHook, la de el @result es lo que seria el "hook",
        // pero para poder acceder a el de la manera correcta
        //hacemos lo siguiente
        const {result} = renderHook(() => useFetchGifs('one punch'))
        const { imagenes, cargando} = result.current;

        //Nosotros vamos a estar esperando que el estado inicial 
        // del hook siempre sera donde primero no se tiene ninguna imagen
        // y luego la parte de cargando deberia de ser cierta
        expect(imagenes.length).toBe(0)
        expect(cargando).toBeTruthy();
    })
    test('Estado donde consigue el arreglo de imagenes', async () => { 
        const {result} =renderHook(() => useFetchGifs('one punch'))
        //Ahora debemos de esperar a que el hook cargue las imagenes
        // para esto utilizamos la siguiente funcion
        await waitFor(
            () => expect(result.current.imagenes.length).toBeGreaterThan(0)
        )
        //De esta manera le estamos diciendo que espera a que el arreglo
        // de imanges tenga algun dato, y hasta que no tenga ningun
        // dato, esta funcion se mantendra esperando
        const { imagenes, cargando} = result.current;

        //Nosotros vamos a estar esperando que el estado inicial 
        // del hook siempre sera donde primero no se tiene ninguna imagen
        // y luego la parte de cargando deberia de ser cierta
        expect(imagenes.length).toBeGreaterThan(0)
        expect(cargando).toBeFalsy();
    })
})