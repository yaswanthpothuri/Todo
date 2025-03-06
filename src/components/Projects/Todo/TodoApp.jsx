import { useState } from 'react';
import './TodoApp.css'
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import ToggleSwitch from '../Toggle/ToggleSwitch';
const TodoApp = () => {
    const now = new Date();
    const fdate = now.toLocaleDateString();
    const ftime = now.toLocaleTimeString();
    const todoKey = "reacttodokey";
    const todomode="reactmode";
    const getlocal = () => {
        const todoraw = localStorage.getItem(todoKey)
        if (!todoraw) return [];
        else
            return JSON.parse(todoraw);
    }
    const setlocal = (tasks) => {
        localStorage.setItem(todoKey, JSON.stringify(tasks));
    }
    const setmode =(isOn)=>{
        localStorage.setItem(todomode, `${isOn}`);
    }
    const getmode=()=>{
        const mode = localStorage.getItem(todomode)
        if(mode==="false")
            return false;
        else
            return true;
    }
    const [inputValue, setInputValue] = useState({ value: "", check: false });
    const [tasks, setTasks] = useState(getlocal);
    const [dateTime, setDateTime] = useState(`${fdate}-${ftime}`);
    const handleInputValue = (value) => {
        setInputValue({ value: value, check: false });
    }
    const handleFormSubmit = (event) => {
        event.preventDefault();
        if (inputValue.value == "") return;
        if (tasks.some(task => task.value === inputValue.value)) {
            setInputValue({ value: "", check: false });
            return;
        }
        setTasks((prev) => {
            setlocal([...prev, inputValue]);
            return [...prev, inputValue]
        });
        console.log(tasks);
        setInputValue({ value: "", check: false });
    }
    const handleDeleteTodo = (value) => {
        const updated = tasks.filter((curr) => curr.value !== value);
        setlocal(updated);
        setTasks(updated);
    }
    const handleCheck = (index) => {
        const updatecheck = [...tasks]; // Create a new copy
        updatecheck[index].check = !updatecheck[index].check; // Toggle the value
        setlocal(updatecheck);
        setTasks(updatecheck); // Update state
    };
    setInterval(() => {
        const now = new Date();
        const fdate = now.toLocaleDateString();
        const ftime = now.toLocaleTimeString();
        setDateTime(() => `${fdate}-${ftime}`);
    }, 1000);

    // toggle switch
    const [isOn , isOnSet]=useState(getmode());
    const handleSwitch=()=>{
        isOnSet(!isOn);
        setmode(!isOn);

    }
    return (
        <>

            <section className={`Todo-con ${isOn ? 'dark-background':'light-background'}`}>
                <div className={`Todo-heading ${isOn ?'dark-background':'light-background'}`}>
                    Todo List - App<span>
            <ToggleSwitch isOn={isOn} handleSwitch={handleSwitch} />
                    </span>
                </div>
                <div style={{ color: isOn?"white":"black", marginTop: '2rem', fontSize: '1.5rem' }}> {dateTime} </div>
                <TodoForm handleFormSubmit={handleFormSubmit} inputValue={inputValue} handleInputValue={handleInputValue} isOn={isOn}/>
                <ul style={{
                    listStyle: 'none',
                    padding: 0,
                    margin: 0,
                }}>
                    {
                        tasks.map((task, index) => {
                            return <TodoList key={index} task={task} handleCheck={handleCheck} handleDeleteTodo={handleDeleteTodo} index={index} isOn={isOn} />
                        })
                    }
                </ul>
                <button className='cleartasks' onClick={() => {
                    setlocal([]);
                    setTasks([])
                }}>Clear All</button>
            </section>
        </>
    );
}
export default TodoApp;