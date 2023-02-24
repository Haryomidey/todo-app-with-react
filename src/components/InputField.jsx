import uuid from 'react-uuid';

const InputField = ({ inputValue, setInputValue, todos, setTodos }) => {

    const handleFormSubmit = (e) => {
        e.preventDefault();
        if (inputValue === '') return;
        setTodos([...todos, { id: uuid(), title: inputValue, completed: false }]);
        setInputValue('')
    }
    
  return (
    <form className='input-field' onSubmit = {handleFormSubmit}>
        <input
            type="text"
            placeholder = "Enter What To Do..." 
            autoFocus={true}
            value = {inputValue}
            onChange={(e) => setInputValue(e.target.value)}
        />
        <button type = "submit">ADD</button>
    </form>
  )
}

export default InputField;