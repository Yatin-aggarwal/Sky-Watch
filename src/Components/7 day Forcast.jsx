import Side_display_element from "./Side_display_element.jsx";

export default function Side_Display(){
    return(
        <div className="  bg-Light_dark_blue mt-17% mx-2%  h-87% rounded-2xl">
            <div className="w-full pt-3% pl-5% text-lg text-gray-500 font-semibold">7 DAY FORECAST</div>
            <div className=" pl-9% overflow-scroll h-92% auto-rows-[7rem] w-full grid   grid-flow-row gap-1% justify-center ">
                   <Side_display_element/>


            </div>
        </div>
    )

}