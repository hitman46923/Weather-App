





function outputData (data) {


    console.log(data);
    document.querySelector('.package-name').textContent = data.name;
    document.querySelector('.price').innerHTML = Math.round(data.main.temp - 273) + '&deg;';
    document.querySelector('.disclaimer').textContent = data.weather[0]['description'];

    //https://openweathermap.org/img/wn/02d@2x.png
    document.querySelector('.icon').innerHTML = `<img src="https://openweathermap.org/img/wn/${data.weather[0]['icon']}@2x.png">`;
    document.querySelector('.wind-speed').textContent = data.wind.speed;


}
524894


function loadWetherAndOutput(id){

       








    fetch(`https://api.openweathermap.org/data/2.5/weather?id=${id}&appid=4a4efc8fb4eb815e735424664e47221b`)
    .then(function (resp) { return resp.json() })
    .then(outputData);
        
    
    }
   /*  .catch(function () {
        // catch any errors
    });

 */

































    document.querySelector('.city').onchange = () =>{
        let a = document.querySelector('.city').value;
        let id = transformCityToId(a);
        loadWetherAndOutput(id);
    }
    
    function transformCityToId(a){
        if(a == 'Moscow'){
            return 524894;
        }else if(a == 'Kyiv'){
            return 703448;
        }else if(a == 'Saint Petersburg'){
            return 498817;
        }else if(a == 'Miami'){
            return 4164138;
        }else if(a == 'Nevada'){
            return 4868620;
        }
    }

    loadWetherAndOutput(524894);
