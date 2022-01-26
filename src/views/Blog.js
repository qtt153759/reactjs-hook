import "./Blog.scss";
import useFetch from "../customize/fetch";
import { Link } from "react-router-dom";
const Blog = () => {
    let {
        data: blogData, //data của useFetch lại ở trước, còn covidData muốn gán lại ở sau=>hơi ngược
        isLoading,
    } = useFetch(`https://jsonplaceholder.typicode.com/posts`, false);

    if (blogData && blogData.length > 0) {
        blogData = blogData.slice(0, 10);
    }
    return (
        <div className="blogs-container">
            {!isLoading &&
                blogData &&
                blogData.length > 0 &&
                blogData.map((item) => {
                    return (
                        <div className="single-blog" key={item.id}>
                            <div className="title">
                                {item.title.substr(0, item.title.indexOf(" "))}
                            </div>
                            <div className="content">{item.body}</div>
                            <button>
                                <Link to={`/blog/${item.id}`}>blog detail</Link>
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
    );
};
export default Blog;
