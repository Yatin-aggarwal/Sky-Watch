const base_url = "http://api.weatherapi.com/v1/forecast.json?key=6a9c264df1b043d390673400241807"
export const day_api = async (city)=>{
    const response = await fetch(`${base_url}&q=${city}&days=7&aqi=no&alerts=no`)
    return await response.json()
}
