import TodoItem from "./TodoItem"
const TodoApp = () => {
    const todos = [
        {id:1, title:'learn react', completed:false},
        {id:2, title:'sleep', completed:false},
        {id:3, title:'wake up', completed:false},
    ]
    return <div>
        <h1>To Do List</h1>

        {todos.map((todo)=>(
            <TodoItem key={todo.id} title={todo.title} completed={todo.completed}/>
        ))}
    </div>
}
export default TodoApp