import cities from 'cities.json' ;
import {useContext} from "react";
import {City_Context} from "./ContextProvider.jsx";
const city = JSON.parse(JSON.stringify(cities));

function Cities(keyword){
    const city_context = useContext(City_Context)
    if(keyword===""){
        return <a
            className={` text-white my-2 block border-b border-b-gray-700 py-1 font-semibold   hover:text-black md:mx-2`}>
            {"Enter City"}
        </a>;
    }
    keyword= keyword.toUpperCase()
    return city.map((object) => {
        const string = object.name;

        if (string.toUpperCase().includes(keyword)) {
           return <a className={`text-white my-2 block border-b border-b-gray-700 py-1 font-semibold   hover:text-black md:mx-2`} onClick={()=>{
               city_context.set_city(string)
               city_context.set_keyword("")

           }}>
               {string}
           </a>
       }
   });
}

export default Cities