import React, {useEffect, useState} from 'react';
import axios from "axios";

const WeatherBottom = () => {

    const [fiveDays, setFiveDays] = useState([]);
    const [data, setData] = useState('');

    useEffect(() => {
        axios('https://api.openweathermap.org/data/2.5/forecast?q=bishkek&appid=f5684729d871bc45d9a99a6f65a98e94')
            .then(({data}) => {
                setFiveDays(data.list);
                setData(data.list[0].dt_txt.slice(0,10))
            })
    }, []);

    return (
        <section className="weatherBottom">
            <div className="container">
                {
                    JSON.stringify({fiveDays})  !== '{}' &&

                    <>
                        <ul className="weatherBottom__days">
                            {
                                [...new Set(
                                    fiveDays.map((item) => item.dt_txt.slice(0,10))
                                )].map((item) => (
                                    <li
                                        key={item}
                                        className={`weatherBottom__day ${data === item ? 'active' : ''}`}
                                        onClick={() => setData(item)}
                                    >
                                        {item}
                                    </li>
                                ))
                            }

                        </ul>
                        <div className="weatherBottom__row">
                            {
                                fiveDays.filter((item) => item.dt_txt.includes(data)).map((item) => (
                                    <div className="weatherBottom__card">
                                        <h3 className="weatherBottom__card-subtitle">{item.dt_txt.slice(11,16)}</h3>
                                        <img src={`http://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`} alt=""/>
                                        <ul className="weatherBottom__card-list">
                                            <li className="weatherBottom__card-item">
                                                {(item.main.temp && item.main.temp - 273.15).toFixed()}°
                                            </li>
                                            <li className="weatherBottom__card-item2">
                                                {(item.main.feels_like && item.main.feels_like - 273.15).toFixed()}°
                                            </li>
                                        </ul>
                                        <p className="weatherBottom__card-text">{item.weather[0].main}</p>
                                    </div>
                                ))
                            }
                        </div></>
                }


            </div>
        </section>
    );
};

export default WeatherBottom;