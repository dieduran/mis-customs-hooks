import { useState } from "react"

export const useForm = (initialState={}) => {
    const [values, setValues ] = useState(initialState)

    const handleInputChange=({target})=>{
        //console.log(e.target);
        setValues({
            ...values,
            [target.name]: target.value
        })
    };


    return [values, handleInputChange]; //lo vamos a regresar como un arreglo
    //primero los valores del formulario y despues la funcion


}