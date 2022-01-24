import { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import Nav from "./views/Nav";
import Todo from "./views/Todo";
//Phiên bản react 17 không cần import react nữa
function App() {
    //dùng arrow cx được (ko có class extend component)
    const [name, setName] = useState("qtt"); //name là biến bình thường, setName tương tự this.setState, destructuring
    const [address, setAddress] = useState("");
    const [todos, setTodos] = useState([
        { id: "todo1", title: "this is todo1", type: "type1" },
        { id: "todo2", title: "this is todo2", type: "type1" },
        { id: "todo3", title: "this is todo3", type: "type2" },
        { id: "todo4", title: "this is todo4", type: "type2" },
    ]);
    //Tương tự componentDidMount+componentDidUpdate
    //, có callback là [] rỗng=>componentDiDMound, có condition thì như kiểu có if trong componetDidUpdate
    useEffect(() => {
        console.log("run useEffect");
    }, [todos]);
    const handleEventClick = () => {
        if (!address) {
            alert("empty input");
            return;
        }
        let newTodo = { id: "todo3", title: address };
        setTodos([...todos, newTodo]);
        setAddress("");
    };
    const handleOnchangeInput = (event) => {
        setAddress(event.target.value);
    };
    const handleDeleteTodo = (id) => {
        let current = todos;
        current = current.filter((item) => item.id !== id);
        setTodos(current);
    };
    return (
        <div className="App">
            <Nav />
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>Welcome {name}!</p>
                <Todo
                    todos={todos}
                    title={"Alltodo"}
                    handleDeleteTodo={handleDeleteTodo}
                />
                <Todo
                    todos={todos.filter((item) => item.type === "type2")}
                    title={"Alltodo"}
                    handleDeleteTodo={handleDeleteTodo}
                />
                <input
                    type="text"
                    value={address}
                    onChange={(event) => handleOnchangeInput(event)}
                />
                <button type="button" onClick={() => handleEventClick()}>
                    Click me
                </button>
            </header>
        </div>
    );
}

export default App;
