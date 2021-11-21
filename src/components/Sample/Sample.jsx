import {React, useEffect, useState} from "react";
import './Sample.css';
import Button from "../Button/Button";
import Title from "../Title/Title";
import { getPhoto } from "../../api/api";

const Sample = () => {
    const [foto, setFoto] = useState(null);

    const fetchData = async () => {
        const data = await getPhoto()
        setFoto(data[0].url);
    }

    useEffect(() => {
        fetchData()
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