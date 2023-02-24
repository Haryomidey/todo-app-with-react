import React from "react";

const InputList = ({ todos, setTodos }) => {

  const handleCompleteTodo = ( todo ) => {
    setTodos(todos.map(item => {
      if (item.id === todo.id) {
        return {...item, completed: !item.completed}
      }
      return item;
    }))
  }

  const handleDeleteTodo = ({ id }) => {
    try {
      const filteredTodo = todos.filter(todo => todo.id !== id)
      setTodos(filteredTodo)
    }
    catch (err) {
      console.log(err)
    }
  }

  return (
    <>
      {todos.map(todo => (
        <div className='input-list' key ={todo.id} >
          <p className={todo.completed ? 'input-text active': 'input-text'}>
            {todo.title}
          </p>
          <div className='input-function'>
            <span className="material-symbols-outlined" onClick={() => handleCompleteTodo(todo)}>
              {todo.completed ? 'done_all' : 'pending_actions'}
            </span>
            {/* <span className="material-symbols-outlined" onClick={() => handleEditTodo(todo)}>
              edit_note
            </span> */}
            <span className="material-symbols-outlined" onClick={() => handleDeleteTodo(todo)}>
              delete
            </span>
          </div>
        </div>
      ))
      }
    </>
  )
}

export default InputList;