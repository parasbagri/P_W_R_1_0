
import { useState } from "react";

const ConditionalRendring = () =>{
    const [isEditing, setIsEditaing] = useState(false)

    const booleanMethod = () =>{
        setIsEditaing(!isEditing)
    }

    return (
        <div>
          <p>Thodo:{isEditing}</p>  
          <button onClick={booleanMethod}>Click to change</button> 
        </div>
    )
} 

export default ConditionalRendring