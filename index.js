
//lacation
const getlocation = async () =>{
    const url = 'http://ip-api.com/json/{query}?fields=country,city,lat,lon,timezone';
    const responded = await fetch(url);
    const data = await responded.json();

    return data;
}
//weather
 const getweather= async (lat , lon) =>{
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=b23222e676c4424fc8a037fca14ee913`;
    const responded = await fetch(url);
    const data = await responded.json();

    return data;
 }
//Specify night and day
 function getDayNight(){
     let DayNight;
     let d = new Date();

     if (d.getHours() >= 6 && d.getHours() <= 19) {
           DayNight = 'Day'; 
    }else{
        DayNight = 'Night';
    }
 }
//icon weather
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

 //Temperature conversion
function getTemp(weTemp){
    const k = weTemp;
    const f = (k - 273.15)*9/5+32;
    const c = k -273.15;
    return temp = {kel:Math.floor(k), far:Math.floor(f),
    can:Math.floor(c)};
}

const loacati = document.querySelector('.timezone');
const icon = document.querySelector('.icon-weather');
const degSec = document.querySelector('.degree-section');
const Deg = document.querySelector('.degree-section h2');
const unit = document.querySelector('.degree-section span');
const tempDe = document.querySelector('.temperature-description');


getlocation()
    .then(locData =>{
        const timezone = locData.timezone;
        console.log(timezone)
        loacati.textContent = timezone;
        return getweather(locData.lat, locData.lon);
    }).then(weData => {
        const weTemp = weData.main.temp;
        const weMain = weData.weather[0].main;
        const weDes = weData.weather[0].description;
        console.log(weTemp,weMain,weDes);


        const iconName = getIcon(weMain);
        icon.innerHTML = `<img src="icons/${iconName}"></img>`;

        Deg.textContent = Math.floor(weTemp);
        unit.textContent = 'k';

        dese.addEventListiner('click' , function(e){
            if(unit.textContent == 'k'){
                Deg.textContent = getTemp(weTemp).far;
                unit.textContent = 'F';
            }
            else if(unit.textContent == 'F'){
                Deg.textContent = getTemp(weTemp).can;
                unit.textContent = 'C';
            }
            else{
                Deg.textContent = getTemp(weTemp).kal;
                unit.textContent = 'K';
            }
        })
    })
