import React, { useEffect, useState, useContext } from 'react';
import './peoplesListPage.css';
import { AppContext } from '../component/context';

const OrderPlanetsPage = () => {

    const { tempOrder2, setTempOrder2 } = useContext(AppContext);
        
    let arrayTemp = { value: tempOrder2 };

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
                            <a className={"text-more"} href={`/planets/id=${char ? char.url.substring(29, 31) : ""}`}>More</a>
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