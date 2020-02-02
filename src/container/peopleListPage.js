import React, { useEffect, useState } from 'react';
import Header from '../component/Header';
import './peoplesListPage.css';
import GetApi from '../component/GetApi';
import Footer from '../component/Footer';
import logoNext from '../assets/nextButton.png'

const PeoplesListPage = ({ match }) => {
    const [data, setData] = useState();
    const [tempFilm, setTempFilm] = useState([]);
    let arrayFilm = { value: tempFilm };
    let id = match.params.number;

    useEffect(() => {
        (async () => {
            const getData = await GetApi(`https://swapi.co/api/people/${id}`);
            console.log(getData);
            setData(getData);
        })();
    }, []);

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


    return (
        <div className="container">
            <Header />
            <div className={"space-between-footer"}></div>
            <div className="box-menu-peoples">
                <a className="title-introduce">Peoples in Starwars</a>
            </div>
            <div className="sub-container">
                <div className="box-menu-peoples">
                    <div className="sub-box-menu">
                        <p className="box-list-desc">Name</p>
                        <span className="box-list-data">{data ? data.name : "Loading"}</span>
                    </div>
                    <div className="sub-box-menu">
                        <p className="box-list-desc">Height</p>
                        <span className="box-list-data">{data ? data.height : "Loading"}</span>
                    </div>
                    <div className="sub-box-menu">
                        <p className="box-list-desc">Weight</p>
                        <span className="box-list-data">{data ? data.mass : "Loading"}</span>
                    </div>
                    <div className="sub-box-menu">
                        <p className="box-list-desc">Hair Color</p>
                        <span className="box-list-data">{data ? data.hair_color : "Loading"}</span>
                    </div>
                    <div className="sub-box-menu">
                        <p className="box-list-desc">Skin Color</p>
                        <span className="box-list-data">{data ? data.skin_color : "Loading"}</span>
                    </div>
                    <div className="sub-box-menu">
                        <p className="box-list-desc">Eye Color</p>
                        <span className="box-list-data">{data ? data.eye_color : "Loading"}</span>
                    </div>
                    <div className="sub-box-menu">
                        <p className="box-list-desc">Gender</p>
                        <span className="box-list-data">{data ? data.gender : "Loading"}</span>
                    </div>
                    <div className="sub-box-menu">
                        <p className="box-list-desc">Films</p>
                        <span className="box-list-data">{data ? arrayFilm.value.map((char, i) => (
                            <div key={i} onClick={() => handleRedirectTo(char)}>
                                <p className={"cursor-pointer"}>Film Link {i + 1}<img src={logoNext} /></p>
                            </div>
                        ))
                            : "Loading"}</span>
                    </div>
                    <div className={"space-between"}></div>                    
                </div>
            </div>
            <Footer />
        </div>
    );
}
export default PeoplesListPage;