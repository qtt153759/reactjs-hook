import { useParams, useHistory } from "react-router-dom";
const DetailBlog = () => {
    //cái thằng useParams này tương tự history trong component
    const { id } = useParams();
    let history = useHistory(); //history này dùng để back lại trang,cái history này khác cái trong component
    const handleBackData = () => {
        history.push("/blog");
    };
    return (
        <>
            <div>
                <span onClick={() => handleBackData()}>&lt;-- Back</span>
            </div>
            <div>Hello blog {id}</div>
        </>
    );
};
export default DetailBlog;
