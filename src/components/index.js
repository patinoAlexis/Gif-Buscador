//A la hora de exportar diferentes componentes
// se puede llegar a tomar muchas lineas en el caso de que un componente
// requiera la necesidad de utilizar varios componentes
//
//Es por esto que utilizamos los llamados "archivos de barril", donde declaramos
// todas las exportaciones que se tienen dentro de las carpetas
// y cuando uno haga una exportacion a la carpeta "components",
// se van a exportar todos los componentes que dentro de este archivo se declaren

export * from './AddCategory';
export * from './GifGrid';
export * from './GifTarjeta';