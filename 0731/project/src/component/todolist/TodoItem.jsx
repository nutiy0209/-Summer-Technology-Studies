const TodoItem = (prorps) =>{
    const {title,completed} = prorps
    return <div>
        <h2>
            {title}
        </h2>
        <p>
            {completed ? "finish" : "undo"}
        </p>
    </div>
}
export default TodoItem