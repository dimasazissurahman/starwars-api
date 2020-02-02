import React, { useEffect, useState } from 'react';
import Header from '../component/Header';
import './peoplesListPage.css';
import GetApi from '../component/GetApi';
import Footer from '../component/Footer';

const FilmListPage = ({ match }) => {
    const [data, setData] = useState();
    let id = match.params.number;

    useEffect(() => {
        (async () => {
            const getData = await GetApi(`https://swapi.co/api/films/${id}`);
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
                    <div className="sub-box-menu">
                        <p className="box-list-desc">Title</p>
                        <span className="box-list-data">{data ? data.title : "Loading"}</span>
                    </div>
                    <div className="sub-box-menu">
                        <p className="box-list-desc">Episode</p>
                        <span className="box-list-data">{data ? data.episode_id : "Loading"}</span>
                    </div>
                    <div className="sub-box-menu">
                        <p className="box-list-desc">Opening Crawl</p>
                        <span className="box-list-data">{data ? data.opening_crawl : "Loading"}</span>
                    </div>
                    <div className="sub-box-menu">
                        <p className="box-list-desc">Director</p>
                        <span className="box-list-data">{data ? data.director : "Loading"}</span>
                    </div>
                    <div className="sub-box-menu">
                        <p className="box-list-desc">Producer</p>
                        <span className="box-list-data">{data ? data.producer : "Loading"}</span>
                    </div>
                    <div className="sub-box-menu">
                        <p className="box-list-desc">Release Date</p>
                        <span className="box-list-data">{data ? data.release_date : "Loading"}</span>
                    </div>                    
                    <div className={"space-between"}></div>                    
                </div>
            </div>
            <div className={"space-between-footer"}></div>
            <Footer/>
        </div>
    );
}
export default FilmListPage;