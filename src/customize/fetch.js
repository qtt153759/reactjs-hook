import { useEffect, useState } from "react";
import axios from "axios";
import moment from "moment";
//tái sử dụng logic hook, function phải bắt đầu bằng 'use'
const useFetch = (url, isCovid) => {
    let [data, setData] = useState([]);
    let [isLoading, setIsLoading] = useState(true);
    let [isError, setIsError] = useState(false);
    useEffect(() => {
        const source = axios.CancelToken.source();

        async function fetchData() {
            try {
                let res = await axios.get(url, {
                    cancelToken: source.token,
                });
                let data = res && res.data ? res.data : [];
                if (isCovid && data && data.length > 0) {
                    data.map((item) => {
                        item.Date = moment(item.Date).format("DD/MM/YYYY");
                        return item;
                    });
                    data = data.reverse();
                }

                setData(data);
                setIsLoading(false);
                setIsError(false);
            } catch (e) {
                if (axios.isCancel(e)) {
                    console.log("Request canceled", e.message);
                } else {
                    // handle error
                    setIsLoading(false);
                    setIsError(true);
                }
            }
        }
        setTimeout(() => {
            fetchData();
        }, 3000);

        return () => {
            source.cancel("Operation canceled by the user.");
        };
    }, [url]);

    //luôn luôn return các state
    return {
        data,
        isLoading,
        isError,
    };
};
export default useFetch;
