import React, { useState } from 'react'

const TodoForm = ({ addTodo }) => {

  const [value, setValue] = useState("");
  const [category, setCategory] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(value, category);
    
    if(!value) return 
    if(!category) return 
    
    //adicionar todo
    addTodo(value, category);
    //limpar campos
    setValue("");
    setCategory("");
  }



  return (
    
    <div className="todo-form">
        <h2>Criar tarefa:</h2>
        <form onSubmit={handleSubmit}>
            <input 
            type="text" 
            placeholder='Digite o Titulo' 
            value = {value}
            onChange={(e) => setValue(e.target.value)}
            />
            <select value={category} onChange={(e) => setCategory(e.target.value)}>
              <option value = '' > Selecione uma Categoria</option>
              <option value = 'Trabalho' > Trabalho</option>
              <option value = 'Pessoal' > Pessoal</option>
              <option value = 'Estudos' > Estudos</option>
            </select>
            <button type='submit'>Criar Tarefa</button>
        </form>
    </div>

  )
}

export default TodoForm