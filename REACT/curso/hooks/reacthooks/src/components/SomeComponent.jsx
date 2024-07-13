import React from 'react'
import { forwardRef, useRef, useImperativeHandle } from 'react'


const SomeComponent = forwardRef((props, ref) => {
    const localInputRef = useRef()
    //hoock que deixa explicito a função que eu vou querer usar deste componente
    useImperativeHandle(ref, () => {
        return {
            validate: () => {
                if(localInputRef.current.value.length > 3) {
                    localInputRef.current.value = ""    
                }
            }
        }
    })

    return (
      <div>
        <p>Insira no maximo 3 caracteres</p>
        <input type="text" ref = {localInputRef} />
      </div>
    )
})

export default SomeComponent