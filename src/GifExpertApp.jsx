import { useState } from 'react';
import { AddCategory } from './components/AddCategory';

export const GifExpertApp = () => {

    const [categorias, setCategorias] = useState(['One Punch'])
    
    const onAgregarCategoria = () => {
        // setCategorias(categorias => {
        //     return [...categorias,'dos']
        // })
        setCategorias([...categorias,'dos']);
    }
    
    return (
        <>
        {/* Titulo de la aplicacion */}
            <h1>Buscador de gifs</h1>
            {/* Input */}
            <AddCategory></AddCategory>
            {/* Listado de gifs */}
            <button onClick={onAgregarCategoria}>Agregar</button>
            <ol>
            {
                categorias.map( (elemento) => {
                    return (
                            <li key={elemento}>{elemento}</li>
                    );
                })
            }
            </ol>
                {/* Gifs especificos */}
        </>
    )
}