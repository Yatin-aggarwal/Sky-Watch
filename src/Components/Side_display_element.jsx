import {useContext} from "react";
import {City_Context} from "./ContextProvider.jsx";

export default function Side_display_element(){
    const city_context = useContext(City_Context);
    city_context.hour.forecast != undefined &&console.log(
                city_context.hour.forecast.forecastday)
    let today = new Date().toISOString().slice(0, 10);
    let tomorrow = new Date(+new Date().setHours(0, 0, 0,0)+ 86400000).toLocaleDateString('fr-CA');
    return(
        <>
            {city_context.hour.forecast != undefined &&(
                city_context.hour.forecast.forecastday.map((value)=>{
                    return(
                        <div className="h-full grid pl-2%  grid-cols-5 border-b border-gray-500 content-center w-87%">
                            <div className="text-gray-500 font-semibold text-lg pt-9% grid w-full justify-center ">
                                {value.date === today && ("Today")}
                                {value.date === tomorrow && ("Tomorrow")}
                                {value.date !== tomorrow && value.date !== today && `${value.date}`}

                            </div>
                            <div className="col-span-3 flex w-full justify-center">
                                {(value.day.condition["text"].includes("Sunny")||value.day.condition["text"].includes("Clear"))&&<img src="src/assets/sun-removebg-preview.png"  className="  h-5/6 w-1/4 pt-1% pl-2%  max-w-full max-h-full bg-Light_dark_blue"/>}
                                {(value.day.condition["text"].includes("rain")||value.day.condition["text"].includes("drizzle"))&&<img src="src/assets/Rain.png" alt="rain" className="h-5/6 w-1/4  max-w-full max-h-full bg-Light_dark_blue"/>}
                                { (value.day.condition["text"].includes("snow")||value.day.condition["text"].includes("Blizzard")||value.day.condition["text"].includes("sleet")||value.day.condition["text"].includes("Ice pellets"))&&<img src="src/assets/Snowy.png" alt="rain" className="h-5/6 w-1/4 max-w-full max-h-full  bg-Light_dark_blue"/>}
                                {(value.day.condition["text"].includes("Mist")||value.day.condition["text"].includes("Cloudy")||value.day.condition["text"].includes("cloudy"))&&<img src="src/assets/Cloudy.png"  className="h-5/6 w-1/4 max-w-full max-h-full bg-Light_dark_blue"/>}

                            </div>
                            <div className="pt-9%"><span className="text-white text-lg font-semibold">{value.day.maxtemp_c+`${'\u00b0'} C / `}</span><span className="text-gray-500 font-bold text-lg">{value.day.mintemp_c+`${'\u00b0'} C`}</span></div>
                    </div>
                    )
                })

            )}



        </>
    )
}
