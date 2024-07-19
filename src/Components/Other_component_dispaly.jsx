import Temperature, {Humidity, Pressure, Sun, Visibility, Wind} from "./Icons.jsx";
import {City_Context} from "./ContextProvider.jsx";
import {useContext} from "react";

export default function Details(){
     const city_context = useContext(City_Context)
    return (
        <>
            <h3 className="pt-2% pl-5% text-gray-500 text-lg font-bold ">AIR CONDITIONS</h3>
            <div className="w-full h-full   pl-6% ">
                <div className="grid grid-cols-3 w-full h-1/3 pt-2% ">
                    <div className=" ">
                        <div className="flex w-full ">
                            <span><Sun/></span>
                            <span className="pl-2% font-bold text-gray-500  text-lg">UV</span>
                        </div>
                        <div  className="text-amber-50 font-bold pl-9%  text-lg">
                            {city_context.api.current != undefined && city_context.api.current['uv']}
                        </div>

                    </div>
                    <div className=" ">
                        <div className="flex w-full ">
                            <span><Temperature/></span>
                            <span className="pl-2% font-bold text-gray-500  text-lg">Feels like</span>
                        </div>
                        <div className="text-amber-50 font-bold pl-9%  text-lg">
                            {city_context.api.current != undefined && city_context.api.current['feelslike_c']+`${'\u00b0'} C`}
                        </div>

                    </div>
                    <div className=" ">
                        <div className="flex w-full ">
                            <span><Humidity/></span>
                            <span className="pl-2% font-bold text-gray-500  text-lg">Humidity</span>
                        </div>
                        <div className="text-amber-50 font-bold pl-9%  text-lg">
                            {city_context.api.current != undefined && city_context.api.current['humidity']+"%"}
                        </div>

                    </div>

                </div>
                <div className="grid grid-cols-3 w-full pt-2%  ">
                    <div className=" ">
                        <div className="flex w-full ">
                            <span><Wind/></span>
                            <span className="pl-2% font-bold text-gray-500  text-lg">{city_context.api.current != undefined && city_context.api.current['wind_dir']+`${''}  Wind`}</span>
                        </div>
                        <div className="text-amber-50 font-bold pl-9%  text-lg">
                            {city_context.api.current != undefined && city_context.api.current['wind_mph']+" mi/h"}
                        </div>

                    </div>
                    <div className=" ">
                        <div className="flex w-full ">
                            <span><Pressure/></span>
                            <span className="pl-2% font-bold text-gray-500  text-lg">Pressure</span>
                        </div>
                        <div className="text-amber-50 font-bold pl-9%  text-lg">
                            {city_context.api.current != undefined && city_context.api.current['pressure_mb'] + " hPa"}
                        </div>

                    </div>
                    <div className=" ">
                        <div className="flex w-full ">
                            <span><Visibility/></span>
                            <span className="pl-2% font-bold text-gray-500  text-lg">Visibility</span>
                        </div>
                        <div className="text-amber-50 font-bold pl-9%  text-lg">
                            {city_context.api.current != undefined && city_context.api.current['vis_km'] + " km"}
                        </div>

                    </div>

                </div>


            </div>
        </>
    )
}