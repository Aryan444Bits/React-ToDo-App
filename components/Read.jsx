import { Fragment } from "react";
import { toast } from "react-toastify";

const Read = (props) => {
    

    const todos = props.todos;
    const settodos = props.settodos;


    const DeleteHandler = (id)=>{
        const filteredTodo = todos.filter((todo)=> todo.id != id);
        settodos(filteredTodo)
        toast.error("Todo Deleted!")
    }

    const rendertodos = todos.map((todo) => {
        return <li 
        key={todo.id}
        className="mb-2 flex justify-between items-center p-4 bg-gray-900"
        >
        <span className="text-xl font-thin">{todo.title}</span>
        <button
        className="text-sm font-thin text-red-500"
        onClick={()=> DeleteHandler(todo.id)}
        >Delete</button>
        </li>

    })


    return (
        <div className="w-[40%]">
            <h1 className="text-pink-400 mb-10 text-5xl font-thin">Pending Todos</h1> {/* Here we use inline <h1 style={{color : "tomato"}}*/}
            <ol>{rendertodos}</ol>
        </div>
    )
}

export default Read