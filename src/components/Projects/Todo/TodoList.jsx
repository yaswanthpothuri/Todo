import { IoMdCheckmarkCircle } from "react-icons/io";
import { MdDeleteForever } from "react-icons/md";
const TodoList=({index,handleDeleteTodo,handleCheck,task,isOn})=>{
    return(
        <li key={index} className={`task ${isOn ?'light-background':'dark-background'}`}>
        <span style={{ textDecoration: task.check ? 'line-through' : 'none' }}>{task.value}</span>
        <div>
            <button style={{ backgroundColor: 'transparent', border: 'none', position: 'relative', right: "0rem" }} onClick={() => handleCheck(index)}>
                <IoMdCheckmarkCircle fontSize={"3rem"} color={"green"} />
            </button>
            <button style={{ backgroundColor: 'transparent', border: 'none', position: 'relative', right: '0rem' }} onClick={() => handleDeleteTodo(task.value)}>
                <MdDeleteForever fontSize={"3rem"} color={"red"} />
            </button>
        </div>
    </li>
    )   
}
export default TodoList;