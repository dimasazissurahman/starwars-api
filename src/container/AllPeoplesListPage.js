import React, { useEffect, useState, useRef, useCallback, useContext } from 'react';
import Header from '../component/Header';
import './peoplesListPage.css';
import GetApi from '../component/GetApi';
import Footer from '../component/Footer';
import logoNext from '../assets/nextButton.png'
import { AppContext } from '../component/context';
import logoLove from '../assets/likeButton.png';

const InfinitePeoplesListPage = () => {
    const [data, setData] = useState([]);
    const [loadMore, setLoadMore] = useState(true);
    const [index, setIndex] = useState(1);
    const { tempOrder, setTempOrder } = useContext(AppContext);


    useEffect(() => {
        listData(index);
    }, [index]);


    const listData = async (index) => {
        const getData = await GetApi(`https://swapi.co/api/people/?page=${index}`)
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
        setTempOrder(prev => {
            return [...new Set([...prev, ...[char]])];
        })
    }
    console.log(tempOrder);


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
                            <div className={"sub-box-menu-flex"}>
                                <a className={"text-more"} href={`/peoples/id=${char ? char.url.substring(28, 30) : ""}`}>More</a>
                                <img id={"logo-button-love"} src={logoLove} onClick={() => handleOrder(char)} />
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
export default InfinitePeoplesListPage;