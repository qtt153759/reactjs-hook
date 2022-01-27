import { useParams, useHistory } from "react-router-dom";
import useFetch from "../customize/fetch";
import "./Blog.scss";
const DetailBlog = () => {
    //cái thằng useParams này tương tự history trong component
    const { id } = useParams();
    let history = useHistory(); //history này dùng để back lại trang,cái history này khác cái trong component
    const handleBackData = () => {
        history.push("/blog");
    };
    let {
        data: detailBlog, //data của useFetch lại ở trước, còn covidData muốn gán lại ở sau=>hơi ngược
        isLoading,
    } = useFetch(`https://jsonplaceholder.typicode.com/posts/${id}`, false);
    return (
        <>
            <div>
                <span onClick={() => handleBackData()}>&lt;-- Back</span>
            </div>
            {detailBlog && (
                <div className="detail-blog">
                    <div className="title">
                        BlogId: {id}---
                        {isLoading === false ? detailBlog.title : "Loadding..."}
                    </div>
                    <div className="content">{detailBlog.body}</div>
                </div>
            )}
        </>
    );
};
export default DetailBlog;
