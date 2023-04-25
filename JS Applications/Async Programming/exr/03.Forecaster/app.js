function attachEvents() {

    let inputElement = document.getElementById("location");         // Взимаме полето с инпут елемента 
    let getButton = document.getElementById("submit");              // Взимаме полето с бутона
    let divDisplay = document.getElementById("forecast");           // Взимаме дива с времето като цяло 
    let currentDayDiv = document.getElementById("current");         // Взимаме дива за текущия ден 
    let upcomingDaysDiv = document.getElementById("upcoming");      // Взимаме дива за следващите три дни 
    let baseUrl = "http://localhost:3030/jsonstore/forecaster";     // Взимаме основния ни URL за заявките 
    let sunny = "&#x2600";                                          // Създаваме си променлива за съответната иконка 
    let partlySunny = "&#x26C5";                                    // Създаваме си променлива за съответната иконка          
    let overcast = "&#x2601";                                       // Създаваме си променлива за съответната иконка 
    let rain = "&#x2614";                                           // Създаваме си променлива за съответната иконка  
    let degrees = "&#176";                                          // Създаваме си променлива за съответната иконка 
    let code = "";                                                  // Създаваме си променлива за кода

    let divElementCurrent = document.createElement("div");          // Създаваме див за текущия ден 
    let divElementUpcoming = document.createElement("div");         // Създаваме див за следващите три дни 

    getButton.addEventListener("click", (e) => {                    // Добавяме слушател на бутона 

        divElementCurrent.innerHTML = "";                           // Първо трябва да зачистим двата дива от предишни заявки
        divElementUpcoming.innerHTML = "";                          // Първо трябва да зачистим двата дива от предишни заявки 

        divElementCurrent.setAttribute("class", "forecasts");       // Добавяме клас на елемента 
        divElementUpcoming.setAttribute("class", "forecast-info");  // Добавяме клас на елемента 

        divDisplay.style.display = "inline";                        // Променяме стила на дива 

        fetch(`${baseUrl}/locations`)                               // Взимаме със заявка от locations
            .then((response) => response.json())                    // правим json()
            .then((data) => {                                       // Взимаме данните 
                data.forEach((locationInfoObject) => {              // Получаваме масив с обекти и минаваме по всеки един 
                    if (locationInfoObject.name === inputElement.value) {  // Ако името на получения обект съвпада с въведеното от инпут полето 
                        code = locationInfoObject.code;                     // Получения код от обекта го взимаме в променливата 
                    }
                });

                fetch(`${baseUrl}/today/${code}`)                           // Взимаме заявка за текущия ден 
                    .then((response) => response.json())                    // правим json()
                    .then((data) => {                                       // Взимаме данните които са обект 
                        let spanGroup = document.createElement("span");     // Създаваме елементи 
                        let conditionSpan = document.createElement("span");
                        let temperatureSpan = document.createElement("span");
                        let locationSpan = document.createElement("span");
                        let iconSpan = document.createElement("span");

                        spanGroup.setAttribute("class", "condition");           // Слагаме им клас 
                        conditionSpan.setAttribute("class", "forecast-data");
                        temperatureSpan.setAttribute("class", "forecast-data");
                        locationSpan.setAttribute("class", "forecast-data");
                        iconSpan.setAttribute("class", "condition symbol");

                        locationSpan.textContent = data.name;                   // Слагаме името в location
                        temperatureSpan.innerHTML = `${data.forecast.low}${degrees}/${data.forecast.high}${degrees}`;   // слагаме температурата да е равна на 
                        conditionSpan.textContent = data.forecast.condition;    // Слагаме и времето 

                        let condition = data.forecast.condition;                // Взимаме времето в променлива 
                        if (condition === "Sunny") {                            // Ако времето е слагаме в иконката съответната
                            iconSpan.innerHTML = sunny;
                        } else if (condition === "Partly sunny") {
                            iconSpan.innerHTML = partlySunny;
                        } else if (condition === "Overcast") {
                            iconSpan.innerHTML = overcast;
                        } else if (condition === "Rain") {
                            iconSpan.innerHTML = rain;
                        }

                        spanGroup.appendChild(locationSpan);                // Аппендваме поред дадените ни елементи 
                        spanGroup.appendChild(temperatureSpan);
                        spanGroup.appendChild(conditionSpan);
                        divElementCurrent.appendChild(iconSpan);
                        divElementCurrent.appendChild(spanGroup);
                        currentDayDiv.appendChild(divElementCurrent);
                    })
                    .catch((error) => console.log(error));                  // Ако някъде уловим грешка я показваме

                fetch(`${baseUrl}/upcoming/${code}`)                        // Взимаме заявка за следващите дни 
                    .then((response) => response.json())                    // Взимаме json()
                    .then((data) => {                                       // Получаваме масив от обекти 
                        let nextDays = data.forecast;                       // Взимаме масива получен в пропъртито forecast 
                        nextDays.forEach((day) => {                         // Минаваме по всеки един от трите дни 

                            let spanGroup = document.createElement("span");     // Създаваме спан елементи 
                            let conditionSpan = document.createElement("span");
                            let temperatureSpan = document.createElement("span");
                            let iconSpan = document.createElement("span");

                            spanGroup.setAttribute("class", "upcoming");                // Слагаме им клас
                            conditionSpan.setAttribute("class", "forecast-data");
                            temperatureSpan.setAttribute("class", "forecast-data");
                            iconSpan.setAttribute("class", "symbol");

                            temperatureSpan.innerHTML = `${day.low}${degrees}/${day.high}${degrees}`;   // Слагаме температурата
                            conditionSpan.textContent = day.condition;                                  // Слагаме времето 

                            let condition = day.condition;                      // Взимаме времето в променлива 
                            if (condition === "Sunny") {                        // Проверяваме какво е и го слагаме като иконка 
                                iconSpan.innerHTML = sunny;
                            } else if (condition === "Partly sunny") {
                                iconSpan.innerHTML = partlySunny;
                            } else if (condition === "Overcast") {
                                iconSpan.innerHTML = overcast;
                            } else if (condition === "Rain") {
                                iconSpan.innerHTML = rain;
                            }

                            spanGroup.appendChild(iconSpan);                // Аппендваме елементите поред 
                            spanGroup.appendChild(temperatureSpan);
                            spanGroup.appendChild(conditionSpan);
                            divElementUpcoming.appendChild(spanGroup);
                            upcomingDaysDiv.appendChild(divElementUpcoming);
                        });
                    });
            });
    });
}

attachEvents();
// function attachEvents(){
//     const inputLocation = document.querySelector('input#location');
//     const getWeatherButton = document.querySelector('input#submit');
//     const forecast = document.querySelector('div#forecast');
//     const currentWeather = document.querySelector('div#current');
//     const upcomingWeather = document.querySelector('div#upcoming');

//     const conditions = {
//         Sunny:  '&#x2600',
//     'Partly sunny':  '&#x26C5' ,
//      Overcast:  '&#x2601' ,
//      Rain: ' &#x2614',
//      Degrees:  '&#176'
//     }

//     getWeatherButton.addEventListener('click', getWeather);

//     function getWeather(){
//         fetch('http://localhost:3030/jsonstore/forecaster/locations')
//         .then(res => res.json())
//         .then(data =>{
//             const cityIndex = data.findIndex(el => el.name === inputLocation.value);
//             forecast.style.display = 'block'
//             if(cityIndex === 1){
//                 throw new Error();
//             }

//             let cityCode = data[cityIndex].code;

//             //current weather
//             fetch(`http://localhost:3030/jsonstore/forecaster/today/${cityCode}`)
//             .then((res) => res.json())
//             .then((data) => {
//                 //Main Div 
//                 const forecasts = document.createElement('div');
//                 forecasts.className = 'forecasts';

//                 //consdition info span
//                 const conditSymbol = document.createElement('span')
//                 conditSymbol.className = 'condition symbol';
//                conditSymbol.innerHTML = conditions[data.forecast.condition]
//                forecasts.appendChild(conditSymbol)

//                 //condition infospan
//                 let condition = document.createElement('span');
//                 condition.className = 'condition';
//                 //span 1
//                 const span1 = document.createElement('span');
//                 span1.className = 'forecast-data';
//                 span1.textContent = data.name;
//                 condition.appendChild(span1);

//                 //span 2
//                 const span2 = document.createElement('span');
//                 span2.className = 'forecast-data';
//                 span2.innerHTML = `${data.forecast.low}&#176;/${data.forecast.high}&#176;`;
//                 condition.appendChild(span2);

//                 //span 3
//                 const span3 = document.createElement('span');
//                 span3.className = 'forecast-data';
//                 span3.textContent = data.condition;
//                 condition.appendChild(span3);

//                 forecast.appendChild(condition);
//                 currentWeather.appendChild(forecast)

//             })

//             //upcoming weather 
//             fetch(`http://localhost:3030/jsonstore/forecaster/upcoming/${cityCode}`)
//             .then(res => res.json())
//             .then(data =>{
//                 const fcInfo = document.createElement('div')
//                 fcInfo.className = 'forecast-info';

//                 // each day from the array spans
//                 data.forecast.forEach(el => {
//                     //main span
//                     const upcoming = document.createElement('span');
//                     upcoming.className = 'upcoming';

//                     // symbol span
//                     const symbol = document.createElement('span');
//                     symbol.className = 'symbol'
//                     symbol.innerHTML = conditions[el.condition];
//                     upcoming.appendChild(symbol);

//                     // forecasr daa firt span
//                     const fcData = document.createElement('span');
//                     fcData.className = 'forecast-data';
//                     fcData.innerHTML = `${el.low}&#176;/${el.high}&#176;`;
//                     upcoming.appendChild(fcData);

//                     //forecast data secoind span
//                     const fcData2 = document.createElement('span');
//                     fcData2.className = 'forecast-data';
//                     fcData2.textContent = el.condition;
//                     upcoming.appendChild(fcData2);

//                     fcInfo.appendChild(upcoming)

//                 });
//                 upcomingWeather.appendChild(fcInfo);
//             })
//             .catch(()=> (forecast.textContent = 'Error'))

//         })
//         .catch(()=> (forecast.textContent = 'Error'))
//     }
    




// }
// attachEvents();
