import {React, useEffect, useState} from "react";
import './Sample.css';
import Button from "../Button/Button";
import Title from "../Title/Title";

const Sample = () => {
    const [foto, setFoto] = useState(null);

    const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        myHeaders.append("x-api-key", "cb233e13-8557-4ad1-9015-1879acdd4ece");

    const requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
    };

    const fetchData = async () => {
        const response = await fetch("https://api.thecatapi.com/v1/images/search?format=json", requestOptions)
        let data = await response.json();
        setFoto(data[0].url);
    }

    useEffect(() => {
        fetchData()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])


    return (
        <div className="sample"> 
            <Title title={"Пример"} />
            <div className="sample__info">
                <h2>Картинка с котом</h2>
                <div className="sample__wrapper">
                    <img src={foto} className="sample__picture" alt="foto" />
                </div>
                <Button title={"Загрузить другую"} fetchData={fetchData} />
            </div>
        </div>

    );
}

export default Sample;