import React, { useState } from 'react';

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
    const [tempOrder, setTempOrder] = useState([]);    
    const [tempOrder2, setTempOrder2] = useState([]);

    return <AppContext.Provider value={{
        tempOrder: tempOrder,
        setTempOrder: setTempOrder,                
        tempOrder2: tempOrder2,
        setTempOrder2: setTempOrder2, 
    }} >{children}</AppContext.Provider>
}

export { AppContext, AppProvider };