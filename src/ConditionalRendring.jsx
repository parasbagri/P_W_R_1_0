
import { useState } from "react";

const ConditionalRendring = () =>{
    const [todos, setTodoes] = useState(['todo1', 'todo2'])

    const booleanMethod = () =>{
        setTodoes(...todos, "One More")
    }

    return (
        <div>
          <p>Conditional Rendring:</p>  
          <ul>
              {todos.map((to)=> <li>{to}</li>)}
              <button onClick={booleanMethod}>Add Todo</button>
          </ul>
         
          
          
        </div>
    )
} 
export default ConditionalRendring