import "./MakePost.css"
//hooks
import { useState, useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { register } from "../slices/FotoSlice"

//components
import ErrorMessage from "./ErrorMessage"


const MakePost = () => {
    const [ title, setTitle ] = useState("")
    const [ filename, setFileName ] = useState("")
    const dispatch = useDispatch()
    const { message, error, loading  } = useSelector((state) => state.foto)


    const handleSubmit = async (event) => {
        event.preventDefault()

        const fotoData = {
            title: title,
            image: filename,
        }

        // build form data
        const formData = new FormData();

        const userFormData = Object.keys(fotoData).forEach(key => {
            formData.append(key, fotoData[key]);
        });


        formData.append('foto', userFormData);

        await dispatch(register(formData));

        setTimeout(() => {
           // dispatch(resetMessage());
        }, 2000);
    }   

    const handleFile = (event) => {
        const image  = event.target.files[0]
        if(image) {
            setFileName(image)
        }
    }

    return (        
        <div className = "MakePostContainer">
            <h3>Compartilhe algum momento seu</h3>
            <form onSubmit = {handleSubmit} className = "FormMakePost">
                <label>titulo para a foto</label>
                <input 
                    type="text" 
                    placeholder = "insira um título"
                    onChange = {(event) => setTitle(event.target.value)}
                    />
                <label>Imagem</label>
                <input 
                    type = "file"
                    onChange = {handleFile}
                    />
                <button className = "btnPostar">Postar</button>
            </form>
            {error && <ErrorMessage msg = {error} type= "error"/>}
            {message && <ErrorMessage msg = {message} type = "sucess"/>}
        </div>
  )
}

export default MakePost