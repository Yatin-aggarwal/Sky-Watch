import {useContext, useEffect} from "react";
import {City_Context} from "./ContextProvider.jsx";
import {day_api} from "./7 day forcast.js";



export default function Hourly_display(){
    const city_context = useContext(City_Context);
    useEffect(()=>{
        day_api(city_context.city).then((value)=>{
        city_context.hour_set(value);
    });
    },[city_context.city]);

    return(
        <>
            { city_context.hour.forecast != undefined &&(
                city_context.hour.forecast.forecastday[0].hour.map((value)=>{
                  return <div className="text-white border-r w-full grid h-full grid-rows-5 border-gray-500 ">
                      <div className="text-gray-500 font-bold w-full flex justify-center">{value.time.substring(11)}</div>
                      <div className=" flex justify-center  row-span-3 mt-5% h-full">
                          {(value.condition["text"].includes("Sunny")||value.condition["text"].includes("Clear"))&&<img src="src/assets/sun-removebg-preview.png"  className="   h-2/3 w-1/2 pt-1% pl-2%  max-w-full max-h-full bg-Light_dark_blue"/>}
                    {(value.condition["text"].includes("rain")||value.condition["text"].includes("drizzle"))&&<img src="src/assets/Rain.png" alt="rain" className="h-2/3 w-1/2  max-w-full max-h-full bg-Light_dark_blue"/>}
                    { (value.condition["text"].includes("snow")||value.condition["text"].includes("Blizzard")||value.condition["text"].includes("sleet")||value.condition["text"].includes("Ice pellets"))&&<img src="src/assets/Snowy.png" alt="rain" className="h-2/3 w-1/2  max-w-full max-h-full  bg-Light_dark_blue"/>}
                     {(value.condition["text"].includes("Mist")||value.condition["text"].includes("Cloudy")||value.condition["text"].includes("cloudy"))&&<img src="src/assets/Cloudy.png"  className="h-2/3 w-1/2 max-w-full max-h-full bg-Light_dark_blue"/>}

                      </div>
                     <div className="text-white row-start-5 font-bold text-lg  flex justify-center"> {value['temp_c']+`${'\u00b0'} C`}</div>
                  </div>

            })



            )}

        </>

    );
}