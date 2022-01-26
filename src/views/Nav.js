import "../views/Nav.scss";
const Nav = () => {
    return (
        <div className="topnav">
            <a className="active" href="/">
                Covid
            </a>
            <a href="/timer">Timer</a>
            <a href="/todo">Todo</a>
            <a href="#about">About</a>
        </div>
    );
};
export default Nav;
