const TodoForm = ({handleInputValue,inputValue,handleFormSubmit}) => {
    return (
        <section className="Todo-form">
            <form onSubmit={handleFormSubmit}>
                <input className="task-input" type="text" value={inputValue.value} onChange={(e) => handleInputValue(e.target.value)} />
                <button className='add-button' type="submit">Add Task</button>
            </form>
        </section>
    );
}
export default TodoForm;