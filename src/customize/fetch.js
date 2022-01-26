import { useEffect, useState } from "react";
import axios from "axios";
import moment from "moment";
//tái sử dụng logic hook, function phải bắt đầu bằng 'use'
const useFetch = (url) => {
    let [data, setData] = useState([]);
    let [isLoading, setIsLoading] = useState(true);
    let [isError, setIsError] = useState(false);
    useEffect(() => {
        try {
            async function fetchData() {
                let res = await axios.get(url);
                let data = res && res.data ? res.data : [];
                if (data && data.length > 0) {
                    data.map((item) => {
                        item.Date = moment(item.Date).format("DD/MM/YYYY");
                        return item;
                    });
                }
                data = data.reverse();
                setData(data);
                setIsLoading(false);
                setIsError(false);
            }
            fetchData();
        } catch (e) {
            setIsLoading(false);
            setIsError(true);
        }
    }, []);

    //luôn luôn return các state
    return {
        data,
        isLoading,
        isError,
    };
};
export default useFetch;
