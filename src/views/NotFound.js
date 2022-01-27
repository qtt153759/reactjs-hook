import { useHistory } from "react-router-dom";
const NotFound = () => {
    let history = useHistory();

    const handleGotoHomePage = () => {
        history.push("/");
    };
    return (
        <div>
            <h4>This Page Isn't Abailable</h4>
            <h5>
                The link may not be broken, or the page may have been removed.
                Check to see if the link you're trying to open is correct
            </h5>
            <button
                className="btn btn-primary"
                onClick={() => handleGotoHomePage()}
            >
                Go to HomePage
            </button>
        </div>
    );
};
export default NotFound;
