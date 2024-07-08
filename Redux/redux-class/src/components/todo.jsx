import { useSelector } from "react-redux";
import AddForm from "./AddForm";
import {useDispatch} from "react-redux";
import {deleteTodo,markAsDone} from "../features/todo/todoSlice";
export default function Todo(){
    const todos=useSelector((state)=>{
        return state.todos;
    });
    const dispatch=useDispatch();
    console.log(todos);
    const clickHandler=(id)=>{
        
        console.log("Delete clicked",id);
        dispatch(deleteTodo(id));
    }
return (
        <>
            <AddForm/>
            <h1>Todo List App</h1>
            <ul>
                {
                    todos.map((todo)=>{
                        return <li key={todo.id}>{todo.task} 
                        <button onClick={()=>{
                            clickHandler(todo.id);
                        }}>Delete</button>
                       
                        </li>
                    })
                }
            </ul>
        </>
    )
}