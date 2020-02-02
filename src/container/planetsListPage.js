import React, { useEffect, useState } from 'react';
import Header from '../component/Header';
import './peoplesListPage.css';
import GetApi from '../component/GetApi';
import Footer from '../component/Footer';

const PlanetsListPage = ({ match }) => {
    const [data, setData] = useState();
    let id = match.params.number;

    useEffect(() => {
        (async () => {
            const getData = await GetApi(`https://swapi.co/api/planets/${id}`);
            console.log(getData);
            setData(getData);
        })();
    }, []);

    return (
        <div className="container">
            <Header />
            <div className={"space-between-footer"}></div>
            <div className="sub-container">
                <div className="box-menu-peoples">
                    <a className="title-introduce">Planet in Starwars</a>
                </div>
                <div className="box-menu-peoples">
                    <div className="sub-box-menu">
                        <p className="box-list-desc">Name</p>
                        <span className="box-list-data">{data ? data.name : "Loading"}</span>
                    </div>
                    <div className="sub-box-menu">
                        <p className="box-list-desc">Rotation Period</p>
                        <span className="box-list-data">{data ? data.rotation_period : "Loading"}</span>
                    </div>
                    <div className="sub-box-menu">
                        <p className="box-list-desc">Orbital Period</p>
                        <span className="box-list-data">{data ? data.orbital_period : "Loading"}</span>
                    </div>
                    <div className="sub-box-menu">
                        <p className="box-list-desc">Diameter Planet</p>
                        <span className="box-list-data">{data ? data.diameter : "Loading"}</span>
                    </div>
                    <div className="sub-box-menu">
                        <p className="box-list-desc">Climate</p>
                        <span className="box-list-data">{data ? data.climate : "Loading"}</span>
                    </div>
                    <div className="sub-box-menu">
                        <p className="box-list-desc">Gravity</p>
                        <span className="box-list-data">{data ? data.gravity : "Loading"}</span>
                    </div>
                    <div className="sub-box-menu">
                        <p className="box-list-desc">Terrain</p>
                        <span className="box-list-data">{data ? data.terrain : "Loading"}</span>
                    </div>
                    <div className="sub-box-menu">
                        <p className="box-list-desc">Surface Water</p>
                        <span className="box-list-data">{data ? data.surface_water : "Loading"}</span>
                    </div>
                    <div className="sub-box-menu">
                        <p className="box-list-desc">Population</p>
                        <span className="box-list-data">{data ? data.population : "Loading"}</span>
                    </div>
                    <div className={"space-between"}></div>
                    <button className="detail-info"></button>
                </div>
            </div>
            <div className={"space-between-footer"}></div>
            <Footer />
        </div>
    );
}
export default PlanetsListPage;