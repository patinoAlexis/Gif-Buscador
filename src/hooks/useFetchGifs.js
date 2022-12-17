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
        cargando
    }
}
