import { useState } from "react"


export const AddCategory = ( {onNuevaCategoria} ) => {
    const [valor, setValor] = useState('');
    const [alerta, setAlerta] = useState('')

    const onInputCambio = (e) => {
        setAlerta('')
        setValor(e.target.value)
    }
    const onSubmit = (e) => {
        e.preventDefault()
        if(valor.trim().length <= 1) {
            setAlerta('Inserta un valor con mas de 1 carácter');
            return
        }
        let categoria = onNuevaCategoria(valor.trim())
        if(typeof(categoria) =='string')
            setAlerta(categoria)
        else 
            setValor('')
            
    }
    return (
        <>
            <form onSubmit={onSubmit }>
                <input type="text" 
                value={valor}
                placeholder="Buscador de Gifs"
                onChange={onInputCambio}
                />
                {alerta &&
                <small className="alerta-error">{alerta}</small>
                }
            </form>
        </>
    )
}