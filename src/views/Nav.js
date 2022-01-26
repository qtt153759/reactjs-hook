import "../views/Nav.scss";
import { Link, NavLink } from "react-router-dom";
//herf chuyển trang phải load lại => dùng Link,
//khi link muốn hightlight navibar thì phải dùng className="active", nếu không muốn tốn công viết js và css => dùng NavLink
const Nav = () => {
    return (
        <div className="topnav">
            {/* ở đây vẫn phải có exact vì thằng activeClassName vẫn ăn cái "/" */}
            {/* nếu bình thường có 1 thanh navigation thì ko cần viết activeClassName làm gì, tuy nhiên khi có nhiều mà muốn custom thì đặt */}
            <NavLink activeClassName="active1" to="/" exact>
                Covid
            </NavLink>
            <NavLink activeClassName="active1" to="/timer">
                Timer
            </NavLink>
            <NavLink activeClassName="active1" to="/todo">
                Todo
            </NavLink>
            <NavLink activeClassName="active1" to="/blog">
                Blog
            </NavLink>
            <NavLink activeClassName="active1" to="/about">
                About
            </NavLink>
        </div>
    );
};
export default Nav;
