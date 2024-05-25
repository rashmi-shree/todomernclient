import React, { useState } from 'react'
import "../style/style.css"
const Todo = () => {
    const [Inputs, setInputs] = useState({
        title:" ",
        body:" "
    })
    const [Array, setArray] = useState([]);
    console.log(Array);
    const changeEvent = (e) =>{
        const {name, value} = e.target;
        setInputs({...Inputs, [name]:value});
    }
    const AddEvent = () => {
        console.log("submit", Inputs);
        setArray([...Array, Inputs])
        setInputs({title:" ", body:" "})
    }
    const deleteEvent = (id) => {
        Array.splice(id, 1)
        setArray([...Array])
    }
  return (
    <div>
        <div>
            <h1>Todo</h1>
            <input type='text' placeholder='title' name='title' value={Inputs.title} onChange={changeEvent} />
            <textarea type='text' placeholder='body' name='body' value={Inputs.body} onChange={changeEvent} />
            <button onClick={AddEvent}>Add </button>
        </div>
        <div>
            {
                Array.map((d, index)=>
                <div key={index} className='showtodostyle'>
                    <li>{d.title}</li>
                    <li>{d.body}</li>
                    <button>update</button>
                    <button onClick={()=>{deleteEvent(index);}}>delete</button>
                </div>
                )
            }
        </div>
    </div>
  )
}

export default Todo