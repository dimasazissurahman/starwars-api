import React, { useEffect, useState, useContext } from 'react';
import './peoplesListPage.css';
import { AppContext } from '../component/context';

const OrderPlanetsPage = () => {
    const [data, setData] = useState();
    const [tempFilm, setTempFilm] = useState([]);
    const { tempOrder2, setTempOrder2 } = useContext(AppContext);
    let arrayFilm = { value: tempFilm };
    let arrayTemp = { value: tempOrder2 };


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
                            <p className="box-list-desc">Rotation Period</p>
                            <span className="box-list-data">{char.rotation_period}</span>
                        </div>
                        <div className="sub-box-menu">
                            <p className="box-list-desc">Orbital Period</p>
                            <span className="box-list-data">{char.orbital_period}</span>
                        </div>
                        <div className="sub-box-menu">
                            <p className="box-list-desc">Diameter Planet</p>
                            <span className="box-list-data">{char.diameter}</span>
                        </div>
                        <div className="sub-box-menu">
                            <p className="box-list-desc">Climate</p>
                            <span className="box-list-data">{char.climate}</span>
                        </div>
                        <div className="sub-box-menu">
                            <p className="box-list-desc">Gravity</p>
                            <span className="box-list-data">{char.gravity}</span>
                        </div>
                        <div className="sub-box-menu">
                            <p className="box-list-desc">Terrain</p>
                            <span className="box-list-data">{char.terrain}</span>
                        </div>
                        <div className="sub-box-menu">
                            <p className="box-list-desc">Surface Water</p>
                            <span className="box-list-data">{char.surface_water}</span>
                        </div>
                        <div className="sub-box-menu">
                            <p className="box-list-desc">Population</p>
                            <span className="box-list-data">{char.population}</span>
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
export default OrderPlanetsPage;