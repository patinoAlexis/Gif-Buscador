import { useState } from 'react';
import { AddCategory } from './components/AddCategory';

export const GifExpertApp = () => {

    const [categorias, setCategorias] = useState(['One Punch'])
    
    const onAgregarCategoria = (cate) => {
        if(categorias.includes(cate)) return 'La categoria ya existe';
        setCategorias([cate,...categorias]);
        return true
    }
    
    return (
        <>
        {/* Titulo de la aplicacion */}
            <h1>Buscador de gifs</h1>
            {/* Input */}
            <AddCategory 
                // setCategorias={setCategorias}
                onNuevaCategoria={onAgregarCategoria}
            ></AddCategory>
            {/* Listado de gifs */}
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