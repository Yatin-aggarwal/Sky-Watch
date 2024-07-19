export default function Temperature() {
    return (<>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} color={"#999999"} fill={"none"}>
            <path
            d="M12 22C14.7614 22 17 19.7614 17 17C17 15.3644 16.2147 13.9122 15.0005 13V5.00049C15.0005 4.06815 15.0005 3.60198 14.8481 3.23428C14.6451 2.74451 14.256 2.35537 13.7662 2.15239C13.3985 2 12.9323 2 12 2C11.0677 2 10.6015 2 10.2338 2.15239C9.74402 2.35537 9.35488 2.74451 9.1519 3.23428C8.99951 3.60198 8.99951 4.06815 8.99951 5.00049V13C7.78534 13.9122 7 15.3644 7 17C7 19.7614 9.23858 22 12 22Z"
            stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
            <path
            d="M12 15C10.8954 15 10 15.8954 10 17C10 18.1046 10.8954 19 12 19C13.1046 19 14 18.1046 14 17C14 15.8954 13.1046 15 12 15ZM12 15V8"
            stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
    </>)
}

export function Sun(){
    return(<>

  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} color={"#999999"} fill={"none"}>
    <path d="M17 12C17 14.7614 14.7614 17 12 17C9.23858 17 7 14.7614 7 12C7 9.23858 9.23858 7 12 7C14.7614 7 17 9.23858 17 12Z" stroke="currentColor" strokeWidth="1.5" />
    <path d="M12 2V3.5M12 20.5V22M19.0708 19.0713L18.0101 18.0106M5.98926 5.98926L4.9286 4.9286M22 12H20.5M3.5 12H2M19.0713 4.92871L18.0106 5.98937M5.98975 18.0107L4.92909 19.0714" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
    </>)
}

export function Humidity(){
    return(
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} color={"#999999"} fill={"none"}>
            <path d="M3.5 13.678C3.5 9.49387 7.08079 5.35907 9.59413 2.97222C10.9591 1.67593 13.0409 1.67593 14.4059 2.97222C16.9192 5.35907 20.5 9.49387 20.5 13.678C20.5 17.7804 17.2812 22 12 22C6.71878 22 3.5 17.7804 3.5 13.678Z" stroke="currentColor" strokeWidth="1.5" />
            <path d="M4 12.284C5.46463 11.8303 8.39159 11.6836 11.9842 13.7016C15.57 15.7157 18.516 14.9984 20 14.1354" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>

    )
}
export function Wind() {
     return(

  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} color={"#999999"} fill={"none"} >
    <path d="M2 5.94145C5.5 9.37313 10.5755 7.90241 11.7324 5.94145C11.9026 5.65301 12 5.31814 12 4.96096C12 3.87795 11.1046 3 10 3C8.89543 3 8 3.87795 8 4.96096" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M17 8.92814C17 7.31097 18.1193 6 19.5 6C20.8807 6 22 7.31097 22 8.92814C22 9.6452 21.7799 10.3021 21.4146 10.8111C19.3463 14.1915 9.2764 12.9164 4 11.8563" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M13.0854 19.8873C13.2913 20.5356 13.8469 21 14.5 21C15.3284 21 16 20.2528 16 19.331C16 19.0176 15.9224 18.7244 15.7873 18.4738C14.4999 15.9925 7.99996 14.3239 2 18.7746" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M19 15.5H21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>

     )
}
export function Pressure() {
    return(

  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} color={"#999999"} fill={"none"} >
    <path d="M12 15L12 5M12 15C11.2998 15 9.99153 13.0057 9.5 12.5M12 15C12.7002 15 14.0085 13.0057 14.5 12.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M5 19H19.0001" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>

    )

}


export function Visibility(){
    return(
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} color={"#999999"} fill={"none"}>
    <path d="M2 8C2 8 6.47715 3 12 3C17.5228 3 22 8 22 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M21.544 13.045C21.848 13.4713 22 13.6845 22 14C22 14.3155 21.848 14.5287 21.544 14.955C20.1779 16.8706 16.6892 21 12 21C7.31078 21 3.8221 16.8706 2.45604 14.955C2.15201 14.5287 2 14.3155 2 14C2 13.6845 2.15201 13.4713 2.45604 13.045C3.8221 11.1294 7.31078 7 12 7C16.6892 7 20.1779 11.1294 21.544 13.045Z" stroke="currentColor" strokeWidth="1.5" />
    <path d="M15 14C15 12.3431 13.6569 11 12 11C10.3431 11 9 12.3431 9 14C9 15.6569 10.3431 17 12 17C13.6569 17 15 15.6569 15 14Z" stroke="currentColor" strokeWidth="1.5" />
  </svg>


    )
}