import axios from "axios";
import { useState, useEffect } from "react";
import useFetch from "../customize/fetch";
import "./Covid.scss";
import moment from "moment";
const Covid = () => {
    // let today = new Date(new Date().setHours(0, 0, 0, 0)); để kiểu này thì today động, load đi load lại
    const today = moment().startOf("day").toISOString(true);
    // const priorDate = today.subtract(1, "months"); nếu lấy ntn thì today=priotDate=(today-1)=> 2 ngày là 1
    const priorDate = moment()
        .startOf("day")
        .subtract(1, "months")
        .toISOString(true);
    //tái sử dụng hook
    const {
        data: covidData, //data của useFetch lại ở trước, còn covidData muốn gán lại ở sau=>hơi ngược
        isLoading,
        isError,
    } = useFetch(
        `https://api.covid19api.com/country/vietnam?from=${priorDate}&to=${today}`,
        true
    );

    return (
        <>
            <h3>30 days Covid-19 tracking in VietName</h3>
            <table>
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Confirmed</th>
                        <th>Deaths</th>
                        <th>Recovered</th>
                        <th>Active</th>
                    </tr>
                </thead>
                <tbody>
                    {!isLoading &&
                        !isError &&
                        covidData &&
                        covidData.length > 0 &&
                        covidData.map((item) => {
                            return (
                                <tr key={item.ID}>
                                    <td>{item.Date}</td>
                                    <td>{item.Confirmed}</td>
                                    <td>{item.Deaths}</td>
                                    <td>{item.Recovered}</td>
                                    <td>{item.Active}</td>
                                </tr>
                            );
                        })}
                    {isLoading && (
                        <tr>
                            <td colSpan={"5"} style={{ textAlign: "center" }}>
                                <span>Loading...</span>
                            </td>
                        </tr>
                    )}
                    {isError && (
                        <tr>
                            <td colSpan={"5"} style={{ textAlign: "center" }}>
                                <span>Something wrong</span>
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </>
    );
};
export default Covid;
