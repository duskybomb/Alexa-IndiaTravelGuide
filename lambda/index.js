"use strict";

var Alexa = require('alexa-sdk');
const weather = require('./model/weather');

const APP_ID = '272df639-50d4-45cb-af5b-f36b2c2f6b04';

var languageStrings = {
    'en-IN': {
        'translation': {
            'SKILL_GREETING' : 'Namaste',
            'SKILL_NAME': 'Indian Quotes',
        }
    },
    'en-US': {
        'translation': {
            'SKILL_GREETING' : 'Hello',
            'SKILL_NAME': 'American Quotes',            
        }
    }
};

const skillData = [
    {
        state: "ANDHRA PRADESH",
        id: 1278629, 
        attractions: "Andhra Pradesh is a great place to visit in India. The attractions of Andhra Pradesh are Venkateswara Temple, Belum Caves and Pulicat Lake"
    },
    {
        state: "ARUNACHAL PRADESH",
        id: 1278341,
        attractions: "Arunachal Pradesh is a great place to visit in India. The attractions of Arunachal Pradesh are Namdapha National Park, Jawaharlal Nehru Museum and Parshuram Khund"
    },
    {
        state: "ASSAM",
        id: 1278253,
        attractions: "Assam is a great place to visit in India. The attractions of Assam are Kaziranga National Park, Manas National Park and Kamakhya Temple"
    },
    {
        state: "BIHAR",
        id: 1275715,
        attractions: "Bihar is a great place to visit in India. The attractions of Bihar are Ganges, Mahabodhi Temple and Patna Museum"
    },
    {
        state: "CHATTISGARH",
        id: 1444364,
        attractions: "Chattisgarh is a great place to visit in India. The attractions of Chattisgarh are Chitrakote Falls, Bhoremdeo Temple and Maitri Bagh"
    },
    {
        state: "GOA",
        id: 1271157,
        attractions: "Goa is a great place to visit in India. The attractions of Goa are Dudhsagar Falls, Fort Aguada and Museum of Christian Art"
    },
    {
        state: "GUJARAT",
        id: 1270770,
        attractions: "Gujarat is a great place to visit in India. The attractions of Gujarat are Gir Forest National Park, Sabarmathi Ashram and Lothal City"
    },
    {
        state: "HARYANA",
        id: 1270260,
        attractions: "Haryana is a great place to visit in India. The attractions of Haryana are Sukhna Lake, Kingdom of Dreams and Heritage Transport Museum"
    },
    {
        state: "HIMACHAL PRADESH",
        id: 1270101,
        attractions: "Himachal Pradesh is a great place to visit in India. The attractions of Himachal Pradesh are Rohtang Pass, Spiti Valley and Kalka Shimla railway"
    },
    {
        state: "JAMMU AND KASHMIR",
        id: 1269320,
        attractions: "Jammu and Kashmir is a great place to visit in India. The attractions of Jammu and Kashmir are Ladakh, Pangong Tso and Ragunath Temple"
    },
    {
        state: "JHARKHAND",
        id: 1444365,
        attractions: "Jharkhand is a great place to visit in India. The attractions of Jharkhand are Dassam Falls, Baidyanath Temple and Betla National Park"
    },
    {
        state: "KARNATAKA",
        id: 1267701,
        attractions: "Karnataka is a great place to visit in India. The attractions of Karnataka are Bandipur National Park, Lal Bagh and Virupaksha Temple"
    },
    {
        state: "KERALA",
        id: 1267254,
        attractions: "Kerala is a great place to visit in India. The attractions of Kerala are Periyar National Park, Fort Kochi and Munnar"
    },
    {
        state: "MADHYA PRADESH",
        id: 1264542,
        attractions: "Madhya Pradesh is a great place to visit in India. The attractions of Madhya Pradesh are Kanha Tiger Reserve, Gwalior Fort and Khajuraho Monuments"
    },
    {
        state: "MAHARSHTRA",
        id: 1264418,
        attractions: "Maharashtra is a great place to visit in India. The attractions of Maharashtra are Gateway of India, Chhatrapati Shivaji Mahraj Vatsu and Kailasa Temple"
    },
    {
        state: "MANIPUR",
        id: 1263706,
        attractions: "Manipur is a great place to visit in India. The attractions of Manipur are Manipur State Museum, Three Mothers Art Gallery and Loktak Lake"
    },
    {
        state: "MEGHALAYA",
        id: 1263207,
        attractions: "Meghalaya is a great place to visit in India. The attractions of Meghalaya are Nohkalikai Falls, Don Bosco Museum and Cherrapunji"
    },
    {
        state: "MIZORAM",
        id: 1262963,
        attractions: "Mizoram is a great place to visit in India. The attractions of Mizoram are Reiek Mountains, Tam Dil Lake and Phawngpui National Park"
    },
    {
        state: "NAGALAND",
        id: 1262271,
        attractions: "Nagaland is a great place to visit in India. The attractions of Nagaland are Kohima War Cementery, Naga Bazaar and Dzukou valley"
    },
    {
        state: "ODISHA",
        id: 1261029,
        attractions: "Odisha is a great place to visit in India. The attractions of Odisha are Konark Sun Temple, Chilika Lake and Puri Beach"
    },
    {
        state: "PUNJAB",
        id: 1259223,
        attractions: "Punjab is a great place to visit in India. The attractions of Punjab are Golden Temple, Jallianwala bagh and Wagah Border"
    },
    {
        state: "RAJASTHAN",
        id: 1258899,
        attractions: "Rajasthan is a great place to visit in India. The attractions of Rajasthan are Amer Fort, Hawa Mahal and City Palace"
    },
    {
        state: "SIKKIM",
        id: 1256312,
        attractions: "Sikkim is a great place to visit in India. The attractions of Sikkim are Lake Tsomgo, Rumtek Monastery and Darling"
    },
    {
        state: "TAMIL NADU",
        id: 1255053,
        attractions: "Tamil Nadu is a great place to visit in India. The attractions of Tamil Nadu are Meenakshi Amman Temple, Bandipur National Park and Rameshwaram"
    },
    {
        state: "TELANGANA",
        id: 1269843,
        attractions: "Telangana is a great place to visit in India. The attractions of Telangana are Charminar, Golkonda Fort and Qutb Shahi Tomb"
    },
    {
        state: "TRIPURA",
        id: 1254169,
        attractions: "Tripura is a great place to visit in India. The attractions of Tripura are Ujjayanta Palace, Neermahal and Unakoti"
    },
    {
        state: "UTTARAKHAND",
        id: 1444366,
        attractions: "Uttarakhand is a great place to visit in India. The attractions of Uttarakhand are Naina Peak, Jim Corbett National Park and Badrinath Temple"
    },
    {
        state: "UTTAR PRADESH",
        id: 1253626,
        attractions: "Uttar Pradesh is a great place to visit in India. The attractions fo Uttar Pradesh are Taj Mahal, Mathura Temple and Varanasi"
    },
    {
        state: "WEST BENGAL",
        id: 1252881,
        attractions: "West Bengal is a great place to visit in India. The attractions of West Bengal are Cooch Behar Palace, Adina Mosque and Shanti Niketan"
    },
    {
        state: "ANDAMAN AND NICOBAR ISLANDS",
        id: 1278647,
        attractions: "Andaman and Nicobar Islands is a great place to visit in India. The attractions of Andaman and Nicobar Islands are Havelock Island, Radha Nagar Beach and Cellular Jail"
    },
    {
        state: "DADRA AND NAGAR HAVELI",
        id: 1273726,
        attractions: "Dadra and Nagar Haveli is a great place to visit in India. The attractions of Dadra and Nagar Haveli are Vanganga Garden, Nakshatra Gardan and Deer Park"
    },
    {
        state: "DELHI",
        id: 1273293,
        attractions: "Delhi is a great place to visit in India. The attractions of Delhi are Red Fort, Qutub Minar and India Gate"
    },
    {
        state: "PUDUCHERRY",
        id: 1259425,
        attractions: "Pudducherry is a great place to visit in India. The attractions of Pudducherry are Rock Beach and Paradise Beach"
    },
    {
        state: "CHANDIGARH",
        id: 1274744,
        attractions: "Chandigarh is a great place to visit in India. The attractions of Chandigarh are Rock Garden, Sukhna Lake and Chhatbir Zoo"
    },
    {
        state: "DAMAN AND DIU",
        id: 1271155,
        attractions: "Daman and Diu is a great place to visit in India. The attractions of Daman and Diu are Jampore Beach, Naida Caves and Saint Pauls Church"
    },
    {
        state: "LAKSHADWEEP",
        id: 1267390,
        attractions: "Lakshadweep is a great place to visit in India. The attractions of Lakshadweep are Agatti Island, Bangaram Atoll and Kalpeni"
    },

];

var handlers = {
  'LaunchRequest': function () {
    this.emit(':ask', 'I can suggest and tell you about attractions any state or UT in India. What state would you like to know about or you can ask me, suggest me a place to visit?', 'Tell me a state name and I will suggest places to vist and it\'s weather.');
  },
  'AskState': function() {
    var stateSlot = this.event.request.intent.slots.state.value;
    var resp = getSuggestion(skillData, 'state', stateSlot.toUpperCase()).attractions;
    var _self = this;

    const city = getID(skillData, 'state', stateSlot.toUpperCase()).id;
    var weather_res ='';

    weather.weatherFromCity(city, function(data) {
      if(data) {
        var data = JSON.parse(data);
        if(data.cod == '404') {
           _self.emit(':tell', 'Sorry! Could not gather weather information from the provided city. Please try again!');
        } 
        else {
          const sky = data.weather[0].main;
          const temp = data.main.temp;
          const humidity = data.main.humidity;
          const windspeed = data.wind.speed;
          weather_res = ". Weather in " + stateSlot + " is " + sky + ".";
          weather_res = weather_res + " Temperature is " + temp + " degree celcius. And";
          weather_res = weather_res + " humidity is " + humidity + " percent.";
          
          console.log(weather_res);

          _self.response.speak(resp + weather_res + " Is there anyother state you want to ask about?").listen("For example you can ask tell me about Delhi"); 
          _self.emit(":responseReady");
          }
        }
      });    

  },
  'MakeSuggestion': function() {
    var stateSlot = getRandomSuggestion(skillData);
    this.response.speak(stateSlot.attractions + ". To know more about " + stateSlot.state +" ask me, tell me about " + stateSlot.state + ". Or you can ask me about anyother state in India?").listen("For example you can ask tell me about Delhi");
    this.emit(":responseReady");
  },
  'RequestWeather': function() {  
    var stateSlot = this.event.request.intent.slots.state.value;
    var _self = this;

    const city = getID(skillData, 'state', stateSlot.toUpperCase()).id;
    console.log(city);
    var weather_res ='';

    weather.weatherFromCity(city, function(data) {
      if(data) {
        data = JSON.parse(data); 
        if(data.cod == '404') {
           _self.emit(':tell', 'Sorry! Could not gather weather information from the provided city. Please try again!');
        } 
        else {
          const sky = data.weather[0].main;
          const temp = data.main.temp;
          const humidity = data.main.humidity;
          const windspeed = data.wind.speed;
          weather_res = "Weather in " + stateSlot + " is " + sky + ".";
          weather_res = weather_res + " Temperature is " + temp + " degree celcius.";
          weather_res = weather_res + " Humidity is " + humidity + " percent.";
          weather_res = weather_res + " Wind speed is " + windspeed + " meters per second.";
          
          console.log(weather_res);

          _self.response.speak(weather_res + " Is there anyother state you want to ask about?").listen("For example you can ask tell me about Delhi"); ; 
          _self.emit(":responseReady");
          }
        }
      });

        
  },
  'AMAZON.YesIntent': function () {
    this.response.speak("Which state do you want to find about?").listen("For example you can ask tell me about Delhi."); 
    this.emit(":responseReady");
  },
  'AMAZON.NoIntent': function () {
    this.response.speak('Thanks for using India Travel Guide!')
    this.emit(':responseReady');
  },
  'Unhandled': function () {
    this.emit(':tell', 'Sorry, I don\'t know what to do');
  },
  'AMAZON.HelpIntent': function () {
      this.emit(':ask', "What can I help you with?", "How can I help?");
  },
  'AMAZON.CancelIntent': function () {
      this.emit(':tell', "Okay!");
  },
  'AMAZON.StopIntent': function () {
      this.emit(':tell', "Goodbye!");
  },
};

exports.handler = function(event, context){
  var alexa = Alexa.handler(event, context);
  alexa.registerHandlers(handlers);
  alexa.execute();
};

function getSuggestion(data, propName, propValue) {
  for (var i=0; i < data.length; i++) {
    if (data[i][propName] == propValue) {
      return data[i];
    }
  }
}

function getID(data, propName, propValue) {
  for (var i=0; i < data.length; i++) {
    if (data[i][propName] == propValue) {
      return data[i];
    }
  }
}

function getRandomSuggestion(data){
  console.log("I am inside suggest")
  var num = Math.floor(Math.random() * 35) + 1;
  console.log(num);
  return data[num];
}


/*var https = require('https');

function httpsGet(myData, callback) {

    var options = {
        host: 'api.openweathermap.org',
        port: 443,
        path: '/data/2.5/forecast?id='+ encodeURIComponent(myData) +'&units=metric&APPID=14fd805499977b570d354d57c4c473b2',
        method: 'GET'
      };

    var req = https.request(options, res => {
        res.setEncoding('utf8');
        var returnData = "";

        res.on('data', chunk => {
            returnData = returnData + chunk;
        });

        res.on('end', () => {
            
            var pop = JSON.parse(returnData).weather.description + ' and the temp has a low of ' + JSON.parse(returnData).main.temp_min + ' degree celcius and a high of ' + JSON.parse(returnData).main.temp_max + ' degree celcius';

            callback(pop);

        });

    });
    req.end();

}
*/