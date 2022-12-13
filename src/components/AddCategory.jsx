import { useState } from "react"


export const AddCategory = () => {
    const [valor, setValor] = useState('One Punch');

    const onInputCambio = (e) => {
        // console.log(e.target.value)
        setValor(e.target.value)
    }
    const onSubmit = (e) => {
        e.preventDefault()
    }
    return (
        <>
            <form onSubmit={onSubmit }>
                <input type="text" 
                value={valor}
                onChange={onInputCambio}
                />
            </form>
        </>
    )
}