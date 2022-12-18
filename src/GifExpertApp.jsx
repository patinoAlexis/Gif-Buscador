import { useState } from 'react';
import { AddCategory , GifGrid } from './components';
// import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {

    const [categorias, setCategorias] = useState(['One punch'])
    
    const onAgregarCategoria = (cate) => {
        if(categorias.includes(cate)) return 'La categoria ya existe';
        setCategorias([cate,...categorias]);
        return true
    }
    
    return (
        <>
            <h1>Buscador de gifs</h1>
            <AddCategory 
                onNuevaCategoria={onAgregarCategoria}
            ></AddCategory>
            {/* Listado de gifs */}
            <ol>
            {
                categorias.map( (elemento) => (
                    <GifGrid key={elemento} categoria={elemento}></GifGrid>
                ))
            }
            </ol>
                {/* Gifs especificos */}
        </>
    )
}