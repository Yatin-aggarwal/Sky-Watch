import {useContext, useEffect} from "react";
import {City_Context} from "./ContextProvider.jsx";
import {api} from "./api.js";
function Display(){
    const city_context = useContext(City_Context);
    useEffect(()=>{
        api(city_context.city).then((value)=>{
        city_context.set_api(value);
    });
    },[city_context.city]);

    return(
        <>
            <div className="grid grid-cols-3 h-3/4">
                <div className="col-start-1 h-full col-span-2 pl-9% pt-2%">
                    <div className="text-white w-full  text-5xl font-semibold">
                        {city_context.city}
                    </div>
                    <div className="text-gray-600 w-full  ">
                        {city_context.api.current != undefined && `Feels Like ${city_context.api.current["feelslike_c"]}${'\u00b0'} C`}
                    </div>
                    <div className="text-white w-full pt-5%  text-5xl font-semibold">
                        {city_context.api.current != undefined && `${city_context.api.current["temp_c"]}${'\u00b0'} C`}
                    </div>
                </div>
                <div className="flex col-start-3 h-full col-span-1 py-2%  overflow-hidden">
                    {city_context.api.current != undefined && (city_context.api.current.condition["text"].includes("Sunny")||city_context.api.current.condition["text"].includes("Clear"))&&<img src="src/assets/sun-removebg-preview.png"  className="h-95% w-1/2 pt-1% pl-2%  max-w-full max-h-full bg-Dark_blue"/>}
                    {city_context.api.current != undefined && (city_context.api.current.condition["text"].includes("rain")||city_context.api.current.condition["text"].includes("drizzle"))&&<img src="src/assets/Rain.png" alt="rain" className="h-full w-2/3  max-w-full max-h-full bg-Dark_blue"/>}
                    {city_context.api.current != undefined && (city_context.api.current.condition["text"].includes("snow")||city_context.api.current.condition["text"].includes("Blizzard")||city_context.api.current.condition["text"].includes("sleet")||city_context.api.current.condition["text"].includes("Ice pellets"))&&<img src="src/assets/Snowy.png" alt="rain" className="h-full w-1/2  max-w-full max-h-full bg-Dark_blue"/>}
                     {city_context.api.current != undefined && (city_context.api.current.condition["text"].includes("Mist")||city_context.api.current.condition["text"].includes("Cloudy")||city_context.api.current.condition["text"].includes("cloudy"))&&<img src="src/assets/Cloudy.png"  className="h-full w-1/2  max-w-full max-h-full bg-Dark_blue"/>}
                </div>

            </div>

        </>

    )
}

export default Display