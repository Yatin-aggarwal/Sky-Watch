const base_url = "http://api.weatherapi.com/v1/current.json?key=6a9c264df1b043d390673400241807"
export const api = async (city)=>{
    const response = await fetch(`${base_url}&q=${city}&aqi=yes`)
    return await response.json()
}