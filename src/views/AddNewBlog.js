import { useState } from "react";
import axios from "axios";
const AddNewBlog = (props) => {
    let [title, setTitle] = useState("");
    let [content, setContent] = useState("");
    const handleAddContent = async () => {
        // if(title===''||title===null||title===undefined){alert('missing title'); return;}//rút gọn thành if(!title)
        if (!title) {
            alert("missing title");
            return;
        }
        if (!content) {
            alert("missing content");
            return;
        }
        let data = {
            title: title,
            body: content,
            useId: 1,
        };
        let res = await axios.post(
            `https://jsonplaceholder.typicode.com/posts`,
            data
        );
        if (res && res.data) {
            props.handleAddNewBlog(res.data);
        }
    };

    return (
        <div className="col-6 form-group add-new-blog">
            <label>Add new blog</label>
            <input
                className="form-control title"
                type="text"
                placeholder="Enter your blog's title"
                value={title}
                onChange={(event) => setTitle(event.target.value)}
            />
            <input
                className="form-control content"
                type="text"
                placeholder="Enter your blog's content"
                value={content}
                onChange={(event) => setContent(event.target.value)}
            />
            <button className="btn-primary " onClick={() => handleAddContent()}>
                Add blog
            </button>
        </div>
    );
};
export default AddNewBlog;
