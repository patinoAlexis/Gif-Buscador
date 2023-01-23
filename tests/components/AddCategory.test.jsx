import { fireEvent, render, screen } from "@testing-library/react"
import { AddCategory } from "../../src/components/AddCategory"

describe('Prueba en <AddCategory/>', () => { 
    test('Debe de cambiar el valor', () => {
        //Primero hacemos el render del componente de react 
        render(<AddCategory onNuevaCategoria={() => {}}></AddCategory>);
        //Conseguimos el input html que sirve para agregar
        // categorias de gifs
        const input = screen.getByRole('textbox');
        //Hacemos la simulacion de ingresar datos al textbox
        fireEvent.input(input, {target: {value: 'hola mundo'}})
        //Confirmamos que los cambios se hicieron de verdad
        expect(input.value).toBe('hola mundo');
    });

    test('Submit al formulario cuando el input tiene un valor dado', () => { 
        const inputValue = 'batman';
        //Creacion de una funcion jest
        const onNuevaCategoria = jest.fn()
        //Lo primero que tenemos que hacer es cambiar
        // el valor del input
        render(<AddCategory onNuevaCategoria={onNuevaCategoria}></AddCategory>);
        const input = screen.getByRole('textbox');
        fireEvent.input(input, {target: {value: inputValue}})
        //Ahora hacemos la simulacion del submit
        const form = screen.getByRole('form');
        fireEvent.submit(form);
        //Como ya lo hemos simulado el fire event es hora
        // de comprobar que se tomo la ruta adecuada

        //Primero verificamos de que el input se volviera uno vacio
        expect(input.value).toBe('');
        //Gracias a la funcion jest que creamos anteriormente
        // podemos saber si esta fue llamada
        expect(onNuevaCategoria).toHaveBeenCalled();
        //si usamos el "toHaveBeenCalledTimes" podemos decir especificamente
        // cuantas veces esa funcion debio haber sido llamada

        //Ahora debemos de verificar de que haya sido llamado junto al
        // valor del input
        expect(onNuevaCategoria).toHaveBeenCalledWith(inputValue)
    })
    test('Submit al formulario cuando el input no tiene valor', () => { 
        //Creacion de una funcion jest
        const onNuevaCategoria = jest.fn()
        render(<AddCategory onNuevaCategoria={onNuevaCategoria}></AddCategory>);
        //Ahora hacemos la simulacion del submit
        const form = screen.getByRole('form');
        fireEvent.submit(form);
        //Como ya lo hemos simulado el fire event es hora
        // de comprobar que se tomo la ruta adecuada

        //Verificamos que la funcion onNuevaCategoria
        // nunca fuera llamada porque no se tiene
        // ningun valor en el input
        expect(onNuevaCategoria).toHaveBeenCalledTimes(0);
        //Tambien pudimos hacerlo de la siguiente manera
        expect(onNuevaCategoria).not.toHaveBeenCalled();
    })
 })