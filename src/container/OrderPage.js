import React, { useEffect, useState, useContext } from 'react';
import Header from '../component/Header';
import './peoplesListPage.css';
import GetApi from '../component/GetApi';
import Footer from '../component/Footer';
import logoNext from '../assets/nextButton.png'
import { AppContext } from '../component/context';

const OrderPage = () => {
    const [data, setData] = useState();
    const [tempFilm, setTempFilm] = useState([]);
    const { tempOrder, setTempOrder } = useContext(AppContext);
    let arrayFilm = { value: tempFilm };
    let arrayTemp = { value: tempOrder };


    // useEffect(() => {
    //     (async () => {            
    //         console.log(tempOrder);                        
    //         console.log(getData);
    //         setData(getData);
    //     })();
    // }, []);

    if (data) {
        for (let i = 0; i < data.films.length; i++) {
            arrayFilm.value.push(data.films[i]);
        }
    }
    console.log(arrayFilm.value);
    const handleRedirectTo = (char) => {
        console.log(char);
        let link = char.substring(27, 30);
        return window.location.href = `/films/id=${link}`;
    }
    console.log(arrayTemp);
    


    return (
        <div className="sub-container">
            {arrayTemp ? arrayTemp.value.map((char, i) => (
                <div key={i} >
                    <div className="box-menu-peoples">
                        <div className="sub-box-menu">
                            <p className="box-list-desc">Name</p>
                            <span className="box-list-data">{char.name}</span>
                        </div>
                        <div className="sub-box-menu">
                            <p className="box-list-desc">Height</p>
                            <span className="box-list-data">{char.height}</span>
                        </div>
                        <div className="sub-box-menu">
                            <p className="box-list-desc">Weight</p>
                            <span className="box-list-data">{char.mass}</span>
                        </div>
                        <div className="sub-box-menu">
                            <p className="box-list-desc">Hair Color</p>
                            <span className="box-list-data">{char.hair_color}</span>
                        </div>
                        <div className="sub-box-menu">
                            <p className="box-list-desc">Skin Color</p>
                            <span className="box-list-data">{char.skin_color}</span>
                        </div>
                        <div className="sub-box-menu">
                            <p className="box-list-desc">Eye Color</p>
                            <span className="box-list-data">{char.eye_color}</span>
                        </div>
                        <div className="sub-box-menu">
                            <p className="box-list-desc">Gender</p>
                            <span className="box-list-data">{char.gender}</span>
                        </div>
                        <div className={"space-between"}></div>
                        <div className={"sub-box-menu"}>
                            <a className={"text-more"} href={`/peoples/id=${char ? char.url.substring(28, 30) : ""}`}>More</a>
                        </div>
                        <br />
                    </div>
                </div>
            ))
                :
                "Loading"}
        </div>
    );
}
export default OrderPage;