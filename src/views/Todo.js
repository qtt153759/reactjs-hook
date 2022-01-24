const Todo = (props) => {
    let { todos, handleDeleteTodo } = props;
    const handleDelete = (id) => {
        handleDeleteTodo(id);
    };
    return (
        <div className="todos-container">
            <div className="title">{props.title}</div>
            {todos.map((todo) => {
                //Co ve hook ko co dang item,index
                return (
                    <div key={todo.id}>
                        <li className="todo-child">
                            {todo.title} &nbsp; &nbsp;{" "}
                            <span onClick={() => handleDelete(todo.id)}>X</span>
                        </li>
                    </div>
                );
            })}
            <hr />
        </div>
    );
};
export default Todo;
