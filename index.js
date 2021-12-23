

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

 function getDayNight(){
     let DayNight;
     let d = new Date();

     if (d.getHours() >= 6&& d.getHours() <= 19) {
           DayNight = 'Day'; 
    }else{
        DayNight = 'Night';
    }
 }

 function getIcon(weMain){
     let icon;
     switch(weMain){
         case 'Thunderstorm':
            icon = `${weMain}.svg`;
            break;
        case 'Drizzle':
            icon = `${weMain}.svg`;
            break;
        case 'Rain':
            icon = `${weMain}.svg`;
            break;
        case 'Snow':
            icon = `${weMain}.svg`;
            break;
        case 'Clear':
            const DayNight = getDayNight();
            icon = `${weMain}-${DayNight}.svg`;
            break;
        case 'Atmosphere':
            icon = `${weMain}.png`;
            break;
        }
        return icon;
 }