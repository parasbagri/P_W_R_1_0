
import { useState } from "react";

const ConditionalRendring = () =>{
    const [isEditing, setIsEditaing] = useState(false)

    const booleanMethod = () =>{
        setIsEditaing(!isEditing)
    }

    return (
        <div>
          <p>Conditional Rendring:</p>  
          {
            (isEditing)? <input/> : <p>Please Wailt...</p>
          }
          <button onClick={booleanMethod}>Click to change</button> 
        </div>
    )
} 

export default ConditionalRendring