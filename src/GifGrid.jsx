import { useEffect, useState } from "react";
import { GifTarjeta } from "./GifTarjeta";
import { useFetchGifs } from "./hooks/useFetchGifs";
import { getGifs } from "./utils/getGifs";


export const GifGrid = ({categoria}) => {
  const { imagenes, cargando} = useFetchGifs(categoria);

  return (
    <>
        <h3>{categoria}</h3>
        <div className="card-grid">
          {
            imagenes.map(el => (
              //Con el ... podemos hacer que todas las propiedades
              //que tiene el objeto o array, se pongan tambien
              // como propiedades al componente
                <GifTarjeta key={el.id} {...el}></GifTarjeta>
            ))
          }
        </div>
    </>
  )
}
