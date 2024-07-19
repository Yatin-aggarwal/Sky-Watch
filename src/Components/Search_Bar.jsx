import {useContext} from "react";
import Cities from "./Search.jsx";
import {City_Context} from "./ContextProvider.jsx";

function Search_Bar(){
    const city_contex = useContext(City_Context)
    return (
        <>
            <div className="group text-amber-50 h-full  ">
                <input placeholder="Enter City" list="Search Field"
                       className="h-full font-semibold px-2% w-full bg-Light_dark_blue   rounded-lg  outline-none text-amber-50 group-hover:rounded-b-none group-hover:border-solid group-hover:border-b-2 group-hover:border-amber-50 "
                       type="text"
                       onClick={(e)=>{
                           city_contex.keyword.length!==0 &&city_contex.set_city(city_contex.keyword);
                           city_contex.set_keyword("")
                       }}
                       value={city_contex.keyword} onChange={e => {
                    city_contex.set_keyword(e.target.value)
                   }
                }
                />
                {city_contex.keyword.length>=1 &&<div
                    className="absolute w-60% overflow-scroll   bg-Light_dark_blue  py-1 px-4 text-gray-800 shadow-xl group-hover:z-50 ">
                    {city_contex.keyword.length>= 4 &&<div className={"overflow-auto h-72" } >
                        {Cities(city_contex.keyword)}
                    </div>}
                </div>}
            </div>
        </>
    )
}

export default Search_Bar