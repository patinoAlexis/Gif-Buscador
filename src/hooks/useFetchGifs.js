import { useState, useEffect } from "react";
import { getGifs } from "../utils/getGifs";


export const useFetchGifs = (categoria) => {
    const [imagenes, setImagenes] = useState([])
    const [cargando, setCargando] = useState(true)
  
    const getImagenes = async () => {
        const nuevasImagenes = await getGifs(categoria);
        setImagenes(nuevasImagenes)
        setCargando(false)
    }

    useEffect( () => {
        getImagenes();
    },[])
    return {
        imagenes: imagenes,
        //Como el nombre del objeto y la variable
        // se llaman igual, podemos simplemente
        // solo poner solo el nombre de la variable
        // y js lo entendera
        cargando
    }
}
