import React, { useEffect, useState, useRef, useCallback, useContext } from 'react';
import './peoplesListPage.css';
import GetApi from '../component/GetApi';
import logoLove from '../assets/likeButton.png';
import { AppContext } from '../component/context';

const InfinitePlanetsListPage = () => {
    const [data, setData] = useState([]);
    const [loadMore, setLoadMore] = useState(true);
    const [index, setIndex] = useState(1);
    const { tempOrder2, setTempOrder2 } = useContext(AppContext);

    useEffect(() => {
        listData(index);
    }, [index]);


    const listData = async (index) => {
        const getData = await GetApi(`https://swapi.co/api/planets/?page=${index}`)
        // await setData([...props.state, ...getData.results]);   
        if (getData.next !== null) {
            await setData(prev => {
                return [...new Set([...prev, ...getData.results])];
            });
            await setLoadMore(getData.results.length > 0);
        }
    }
    const observer = useRef(null);
    const lastRef = useCallback(char => {
        if (observer.current) observer.current.disconnect();
        observer.current = new IntersectionObserver(entry => {
            if (entry[0].isIntersecting && loadMore) {
                setIndex(prevIndex => prevIndex + 1);
            }
        });
        if (char) {
            observer.current.observe(char);
        }
    }, [loadMore]
    );

    const handleOrder = (char) => {
        setTempOrder2(prev => {
            return [...new Set([...prev, ...[char]])];
        })
    }

    return (
        <div className="sub-container">
            {data ? data.map((char, i) => (
                <div key={i} ref={lastRef}>
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
                            <div className={"sub-box-menu-flex"}>
                                <a className={"text-more"} href={`/planets/id=${char ? char.url.substring(29, 31) : ""}`}>More</a>
                                <img src={logoLove} onClick={() => handleOrder(char)} />
                            </div>
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
export default InfinitePlanetsListPage;