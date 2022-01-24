import logo from "./logo.svg";
import "./App.css";
//Phiên bản react 17 không cần import react nữa
function App() {
    //dùng arrow cx được (ko có class extend component)
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>Hello create react app!</p>
            </header>
        </div>
    );
}

export default App;
