import { useState, useEffect } from "react";
const CountDown = (props) => {
    let [count, setCount] = useState(10);
    useEffect(() => {
        console.log("count", count);
        if (count === 0) {
            props.onTimesup();
            return;
        }
        let timer = setInterval(() => {
            setCount(count - 1);
        }, 1000);
        return () => {
            clearInterval(timer);
        };
    }, [count]);
    return <div>{count}</div>;
};
export default CountDown;
