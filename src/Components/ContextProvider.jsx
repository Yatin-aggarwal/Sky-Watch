import {createContext, useState} from "react";

export const City_Context = createContext(null);
export const ContextProvider = (props) => {
    const [city, set_city] = useState("Amritsar");
    const [api, set_api]= useState({});
    const [hour, hour_set]= useState({});
    const [keyword, set_keyword]= useState("");
    return(
    <City_Context.Provider value={{city,set_city,api,set_api, keyword, set_keyword,hour, hour_set}}>
        {props.children}
    </City_Context.Provider>
    );
};