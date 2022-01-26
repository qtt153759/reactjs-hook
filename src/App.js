import { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import Nav from "./views/Nav";
import Todo from "./views/Todo";
import Covid from "./views/Covid";
import CountDown from "./views/Countdown";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
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
    const onTimesup = () => {
        alert("Time up!");
    };
    return (
        <Router>
            <div className="App">
                <header className="App-header">
                    <Nav />
                    <img src={logo} className="App-logo" alt="logo" />
                    <p>Welcome {name}!</p>

                    {/* 
                <Todo
                    todos={todos.filter((item) => item.type === "type2")}
                    title={"Alltodo"}
                    handleDeleteTodo={handleDeleteTodo}
                /> */}
                </header>
                <div>
                    <Switch>
                        {/* Switch sẽ lấy link đầu tiên phù hợp => để lấy chính xác "/" thì thêm exact để tránh ghi đè */}
                        <Route path="/" exact>
                            <Covid />
                        </Route>
                        <Route path="/timer">
                            <CountDown onTimesup={onTimesup} />
                        </Route>
                        <Route path="/todo">
                            <Todo
                                todos={todos}
                                title={"Alltodo"}
                                handleDeleteTodo={handleDeleteTodo}
                            />
                            <input
                                type="text"
                                value={address}
                                onChange={(event) => handleOnchangeInput(event)}
                            />
                            <button
                                type="button"
                                onClick={() => handleEventClick()}
                            >
                                Click me
                            </button>
                        </Route>
                    </Switch>
                </div>
            </div>
        </Router>
    );
}

export default App;
