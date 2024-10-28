
import { useState } from "react";

const ConditionalRendring = () =>{
    const [todos, setTodoes] = useState(['todo1', 'todo2'])

    const booleanMethod = () =>{
        setTodoes(...todos, "One More"))
    }

    return (
        <div>
          <p>Conditional Rendring:</p>  
          {todos.map((to)=>{
            <ul>
                <li>{to}</li>
                <li>{to}</li>
            </ul>

          })}
          
          <button onClick={booleanMethod}>Add Todos</button> 
        </div>
    )
} 
export default ConditionalRendring