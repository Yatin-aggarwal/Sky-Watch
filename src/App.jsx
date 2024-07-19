import Search_Bar from "./Components/Search_Bar.jsx";
import Display from "./Components/Display.jsx";
import Hourly_display from "./Components/Hourly_display.jsx"
import Details from "./Components/Other_component_dispaly.jsx";
import Side_Display from "./Components/7 day Forcast.jsx";

function App() {
    return (
        <>
            <div className="h-dvh w-full grid grid-cols-3 px-2% bg-Dark_blue" >
                <div className="overflow-hidden  h-full w-full col-span-2 grid grid-rows-10">
                    <div className="row-span-1 h-full pt-2% px-2%">
                        <Search_Bar/>
                    </div>
                    <div className="row-span-3 h-full pt-2% px-2%">
                        <Display/>
                    </div>
                    <div className=" row-span-3 h-full  w-full grid grid-rows-9 bg-Light_dark_blue  rounded-2xl px-2%">
                        <div className="row-span-2 px-2% pt-1% text-gray-500 font-semibold">TODAY'S FORCAST</div>
                        <div className="row-span-7 h-89%  grid grid-flow-col auto-cols-[8rem]   gap-1%  overflow-x-scroll ">
                            <Hourly_display/>
                        </div>
                    </div>
                    <div className=" bg-Light_dark_blue row-span-3  w-full mt-1%  h-92% rounded-2xl">
                        <Details/>

                    </div>
                </div>
                <div className="overflow-auto ">
                       <Side_Display/>
                </div>

            </div>
        </>
  )
}

export default App
