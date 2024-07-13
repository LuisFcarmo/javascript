import React, { useReducer, useState } from 'react'

const HookUseReducer = () => {
  //tem a mesma função que o useState ele gerencia valores
    //porém temos a pssibilidade de executar uma função na hora da alteração dos valores
  
  //é basicamente um useState mas buffado porque eu posso
  //fazer minha propria set  
  const [ number, dispatch ] = useReducer((state, action) => {
    return Math.random(state)
  })
  
  //2 - usando actions no use reducer
  const initialTaks = [
    {id:1 , text:"lavar roupa"},
    {id:2 , text:"Comer comida"}
  ]
  const [ taskText, setTaskText ] = useState("");

  //é um set bufado que vc pode fazer varios tipos de definição para ser state inicial
  //muito interessante para se fazer e controlar as requisições para api
  const taskReducer = (state, action) => {
    switch(action.type){
      case "ADD":
        const newTask = {
          id: Math.random(),
          text: taskText,
        }
        setTaskText("")
        return[...state, newTask]

      case "REMOVE":
      
        return state.filter((element) => element.id !== action.id)
      default:          
        return state;
    }
  };
const [ tasks, dispatchTasks ] = useReducer(taskReducer, initialTaks);
 

  const handlesubmmit = (event) => {
    event.preventDefault()
    dispatchTasks({type: "ADD"})
  }

  function RemoveTask (id) {
    dispatchTasks({type: "REMOVE", id: id})
  }

  
  return (
    <div>
      <hr/>
      <div>
        <h2>Use reducer</h2>
        <p>Numero: {number}</p>
        <button onClick={dispatch}>click-me</button>
      </div>
      <hr/>
      <div>
        <form onSubmit={handlesubmmit}>
          <label> descrição da tarefa:</label>
          <input value = {taskText} type="text" onChange={(e) => setTaskText(e.target.value)} />
          <button>Enviar</button>
        </form>

        <h2>Reducer com actions</h2>
        <h3>tarefas:</h3>
        <ul>
          {tasks.map((task) => (
            <li key = {task.id} onDoubleClick={(e) => RemoveTask(task.id)}> tarefa: {task.text}</li>
          ))}
      </ul>
      </div>
      <hr/>
    </div>
  )
}

export default HookUseReducer