import React, { useEffect, useState, useContext } from 'react';
import './HomePage.css';
import Header from '../component/Header';
import GetApi from '../component/GetApi';
import iconDropDown from '../assets/chevron-down-grey.png';
import Footer from '../component/Footer';
import InfinitePeoplesListPage from './AllPeoplesListPage';
import InfinitePlanetsListPage from './AllPlanetsListPage';
import { AppContext } from '../component/context';
import OrderPage from './OrderPage';
import OrderPlanetsPage from './OrderPlanetsPage';

const HomePage = () => {
    const [dataPeoples, setDataPeoples] = useState();
    const [dataPlanets, setDataPlanets] = useState();
    const [dataFilms, setDataFilms] = useState();    

    const [state, setState] = useState([]);
    const [tempArr, setTempArray] = useState([]);
    const [tempSearchArr, setTempSearchArr] = useState();
    const [tempChar, setTempChar] = useState();
    const [tempUrlSearch, setTempUrlSearch] = useState();

    const [flagOnSelect, setFlagOnSelect] = useState(true);
    const [flagOnSelect1, setFlagOnSelect1] = useState(false);


    const [flagGetData, setFlagGetData] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const [dropDown, setDropDown] = useState(false);
    const [dropDown1, setDropDown1] = useState(false);
    const [dropDown2, setDropDown2] = useState(false);

    const handleDropDown = () => {
        if (dropDown === false) {
            setDropDown(true);
            setDropDown1(false);
            setDropDown2(false);
        } else {
            setDropDown(false);
        }
    }

    const handleDropDown1 = () => {
        if (dropDown1 === false) {
            setDropDown1(true);
            setDropDown(false);
            setDropDown2(false);
        } else {
            setDropDown1(false);
        }
    }

    const handleDropDown2 = () => {
        if (dropDown2 === false) {
            setDropDown2(true);
            setDropDown1(false);
            setDropDown(false);
        } else {
            setDropDown2(false);
        }
    }

    useEffect(() => {
        (async () => {
            const getData = await GetApi('https://swapi.co/api/people/');
            setDataPeoples(getData);
            setTempArray(getData.results);
        })();
    }, []);

    useEffect(() => {
        (async () => {
            const getData = await GetApi('https://swapi.co/api/planets/');
            setDataPlanets(getData);
            setTempArray(getData.results);

        })();
    }, []);

    useEffect(() => {
        (async () => {
            const getData = await GetApi('https://swapi.co/api/films/');
            setDataFilms(getData);
            setTempArray(getData.results);
        })();
    }, []);

    useEffect(() => {
        (async () => {
            if (flagGetData === true) {
                const getData = await GetApi(`https://swapi.co/api/people/?search=${tempChar}`);
                setTempSearchArr(getData);
            }
        })();
    }, [flagGetData, tempChar]);
    const handleClickSearch = (name, url) => {
        setTempChar(name);
        setTempUrlSearch(url.substring(28, 30));
    }

    useEffect(() => {
        if (tempUrlSearch) {
            return window.location.href = `/peoples/id=${tempUrlSearch}`;
        }
    }, [tempUrlSearch]);

    const handleOnChange = (e) => {
        setTempChar(e.target.value);
        setIsLoading(true);
        if (e.target.value.length > 1) {
            setFlagGetData(true);
            setIsLoading(false);
        }
        else {
            setFlagGetData(false);
        }
    }


    const handleRedirect = (id) => {
        return window.location.href = `/peoples/id=${id.substring(28, 30)}`;
    };

    const handleRedirect1 = (id) => {
        return window.location.href = `/planets/id=${id.substring(29, 31)}`;
    }

    const handleRedirect2 = (id) => {
        return window.location.href = `/films/id=${id.substring(27, 29)}`;
    }

    const handleSelectButton =()=> {
        if(flagOnSelect === false){
            setFlagOnSelect(true);
            setFlagOnSelect1(false);
        }
        else{
            setFlagOnSelect(false);
        }

    }
    const handleSelectButton1 =()=> {
        if(flagOnSelect1 === false){
            setFlagOnSelect(false);
            setFlagOnSelect1(true);
        }
        else{
            setFlagOnSelect(false);
        }
    }  
        


    return (
        <div id={"list-tai"} className="container">
            <Header />
            <div className={"space-between-footer"}></div>
            <div className="sub-container">
                <div className="box-menu">
                    <a className="title-introduce">Introduce</a>
                    <p>Star Wars is an American epic space-opera media franchise created by George Lucas,
                        which began with the eponymous 1977 film and quickly became a worldwide pop-culture
                        phenomenon. The franchise has been expanded into various films and other media,
                        including television series, video games, novels, comic books, theme park attractions,
                        and themed areas, comprising an all-encompassing fictional universe.[b] The franchise holds
                        a Guinness World Records title for the "Most successful film merchandising franchise".[2]
                        In 2018, the total value of the Star Wars franchise was estimated at US$65 billion, and it is
                        currently the fifth-highest-grossing media franchise of all time.</p>
                </div>
                <br />
                <div className="box-menu">
                    <p className="row">Let search your favorite characters!</p>
                    <input className={"input-search"} value={tempChar ? tempChar : ""} onChange={e => handleOnChange(e)} placeholder={"  Darth"} />
                    {flagGetData === true ? (
                        <div>
                            {isLoading === true ? (
                                <p>Loading</p>)
                                :
                                <div>
                                    {tempSearchArr ? tempSearchArr.results.map((char, i) => (
                                        <div key={i} onClick={() => handleClickSearch(char.name, char.url)}>
                                            <p className={"cursor-pointer"}>{char.name}</p>
                                        </div>
                                    )) : "Data Tidak Ada"}
                                </div>
                            }
                        </div>
                    ) : ""}
                </div>
                <br />
                <div className="box-menu">
                    <div className="row" onClick={() => handleDropDown()}>Peoples<img src={iconDropDown} /></div>
                    <div className={dropDown ? "true" : "false"}>
                        {dataPeoples ? dataPeoples.results.map((char, i) => (
                            <div key={i} onClick={() => handleRedirect(char.url)}>
                                <p id={"dropdown-people"} className={"cursor-pointer"}>{char.name}</p>
                            </div>
                        ))
                            : ""}
                    </div>
                    <div className="row" onClick={() => handleDropDown1()}>Planets<img src={iconDropDown} /></div>
                    <div className={dropDown1 ? "true" : "false"}>
                        {dataPlanets ? dataPlanets.results.map((char, i) => (
                            <div key={i} onClick={() => handleRedirect1(char.url)}>
                                <p id={"dropdown-planet"} className={"cursor-pointer"}>{char.name}</p>
                            </div>
                        )) : ""}
                    </div>
                    <div className="row" onClick={() => handleDropDown2()}>Films<img src={iconDropDown} /></div>
                    <div className={dropDown2 ? "true" : "false"}>
                        {dataFilms ? dataFilms.results.map((char, i) => (
                            <div key={i} onClick={() => handleRedirect2(char.url)}>
                                <p id={"dropdown-films"} className={"cursor-pointer"}>{char.title}</p>
                            </div>
                        )) : ""}
                    </div>
                </div>
                <br/>
                <div className="box-menu">
                    <a className="title-introduce">Your Favorite {flagOnSelect === true ? "Characters" : "Planets"} here !</a>                                        
                </div>
                {flagOnSelect === true ? (<OrderPage/>) : (<OrderPlanetsPage/>) }                
                <br />
                <div className="box-menu">
                    <a className="title-introduce">All List</a>
                    <div className="wrap-flex-button">
                        <div className={flagOnSelect === true ? "button-all-list-select" : "button-all-list"} onClick={() => handleSelectButton()}>Peoples</div>
                        <div className={flagOnSelect1 === true ? "button-all-list-select" : "button-all-list"} onClick={() => handleSelectButton1()}>Planets</div>
                    </div>
                </div>
                {flagOnSelect === true ? (<InfinitePeoplesListPage />):(<InfinitePlanetsListPage />)}                                
            </div>
            <div className={"space-between-footer"}></div>
            <Footer />
        </div>
    );
}
export default HomePage;