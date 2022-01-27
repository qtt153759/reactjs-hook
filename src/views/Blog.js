import "./Blog.scss";
import useFetch from "../customize/fetch";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { useEffect, useState } from "react";
import AddNewBlog from "./AddNewBlog";
const Blog = () => {
    const [show, setShow] = useState(false);
    const [newData, setNewData] = useState([]);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    let {
        data: blogData, //data của useFetch lại ở trước, còn covidData muốn gán lại ở sau=>hơi ngược
        isLoading,
    } = useFetch(`https://jsonplaceholder.typicode.com/posts`, false);
    useEffect(() => {
        if (blogData && blogData.length > 0) {
            let data = blogData.slice(0, 10);
            setNewData(data);
        }
    }, [blogData]);
    const handleAddNewBlog = (blog) => {
        let data = newData;
        data.unshift(blog);
        setShow(false);
        setNewData(data);
        console.log(newData);
    };
    const handleDelete = (id) => {
        let data = newData;
        if (data && data.length > 0) {
            data = data.filter((item) => item.id !== id);
            setNewData(data);
        }
    };
    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                Add new blog
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Add new blog</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <AddNewBlog handleAddNewBlog={handleAddNewBlog} />
                </Modal.Body>
            </Modal>

            <div className="blogs-container">
                {!isLoading &&
                    newData &&
                    newData.length > 0 &&
                    newData.map((item) => {
                        return (
                            <div className="single-blog" key={item.id}>
                                <div className="title">
                                    <span>
                                        {item.title.substr(
                                            0,
                                            item.title.indexOf(" ") > 0
                                                ? item.title.indexOf(" ")
                                                : item.title.length
                                        )}
                                    </span>
                                    <span onClick={() => handleDelete(item.id)}>
                                        &emsp; X
                                    </span>
                                </div>
                                <div className="content">{item.body}</div>
                                <button>
                                    <Link to={`/blog/${item.id}`}>
                                        blog detail
                                    </Link>
                                </button>
                            </div>
                        );
                    })}
                {isLoading && (
                    <div
                        style={{
                            textAlign: "center",
                            width: "100%", // phải xét width 100% vì div cha là flex=>width bằng đúng Loadinng...
                        }}
                    >
                        Loading...
                    </div>
                )}
            </div>
        </>
    );
};
export default Blog;
