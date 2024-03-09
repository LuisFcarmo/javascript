import { useState } from "react";
const ManageData = () => {
    let[number, setNumber] = useState(10);
  
    return (
        <div>
            <button onClick = {() => setNumber(number*=2)}> clique aqui</button>
            <h1>{number}</h1>
        </div>
    )
}

export default ManageData;