

const getlocation = async () =>{
    const url = 'http://ip-api.com/json/{query}?fields=country,city,lat,lon,timezone';
    const response = await fetch(url);
    const data = await response .jason();

    return data
}
 const getweather= async (url) =>{
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=a947f993ce697e31c765150735109374`;
    const response = await fetch(url);
    const data = await response .jason();

    return data;
 }