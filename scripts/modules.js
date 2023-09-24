
const palindrome= (str)=>{
  str=str.toLowerCase();
  return(str == str.split('').reverse().join(''))
}


const hotels = [
    {
      name: 'Hotel Leopold',
      city: 'Saint Petersburg',
      country: 'Russia',
    },
    {
      name: 'Apartment Sunshine',
      city: 'Santa Cruz de Tenerife',
      country: 'Spain',
    },
    {
      name: 'Villa Kunerad',
      city: 'Vysokie Tatry',
      country: 'Slowakia',
    },
    {
      name: 'Hostel Friendship',
      city: 'Berlin',
      country: 'Germany',
    },
    {
      name: 'Radisson Blu Hotel',
      city: 'Kyiv',
      country: 'Ukraine',
    },
    {
      name: 'Paradise Hotel',
      city: 'Guadalupe',
      country: 'Mexico',
    },
    {
      name: 'Hotel Grindewald',
      city: 'Interlaken',
      country: 'Switzerland',
    },
    {
      name: 'The Andaman Resort',
      city: 'Port Dickson',
      country: 'Malaysia',
    },
    {
      name: 'Virgin Hotel',
      city: 'Chicago',
      country: 'USA',
    },
    {
      name: 'Grand Beach Resort',
      city: 'Dubai',
      country: 'United Arab Emirates',
    },
    {
      name: 'Shilla Stay',
      city: 'Seoul',
      country: 'South Korea',
    },
    {
      name: 'San Firenze Suites',
      city: 'Florence',
      country: 'Italy',
    },
    {
      name: 'The Andaman Resort',
      city: 'Port Dickson',
      country: 'Malaysia',
    },
    {
      name: 'Black Penny Villas',
      city: 'BTDC, Nuca Dua',
      country: 'Indonesia',
    },
    {
      name: 'Koko Hotel',
      city: 'Tokyo',
      country: 'Japan',
    },
    {
      name: 'Ramada Plaza',
      city: 'Istanbul',
      country: 'Turkey',
    },
    {
      name: 'Waikiki Resort Hotel',
      city: 'Hawaii',
      country: 'USA',
    },
    {
      name: 'Puro Hotel',
      city: 'Krakow',
      country: 'Poland',
    },
    {
      name: 'Asma Suites',
      city: 'Santorini',
      country: 'Greece',
    },
    {
      name: 'Cityden Apartments',
      city: 'Amsterdam',
      country: 'Netherlands',
    },
    {
      name: 'Mandarin Oriental',
      city: 'Miami',
      country: 'USA',
    },
    {
      name: 'Concept Terrace Hotel',
      city: 'Rome',
      country: 'Italy',
    },
    {
      name: 'Ponta Mar Hotel',
      city: 'Fortaleza',
      country: 'Brazil',
    },
    {
      name: 'Four Seasons Hotel',
      city: 'Sydney',
      country: 'Australia',
    },
    {
      name: 'Le Meridien',
      city: 'Nice',
      country: 'France',
    },
    {
      name: 'Apart Neptun',
      city: 'Gdansk',
      country: 'Poland',
    },
    {
      name: 'Lux Isla',
      city: 'Ibiza',
      country: 'Spain',
    },
    {
      name: 'Nox Hostel',
      city: 'London',
      country: 'UK',
    },
    {
      name: 'Leonardo Vienna',
      city: 'Vienna',
      country: 'Austria',
    },
    {
      name: 'Adagio Aparthotel',
      city: 'Edinburgh',
      country: 'UK',
    },
    {
      name: 'Steigenberger Hotel',
      city: 'Hamburg',
      country: 'Germany',
    },
  ];


function searchObjects (str){
  str= str.split(" ").map(str => {
    return str[0].toUpperCase() + str.slice(1);
})
  str = str.join(" ");
  
    const bustingHotels = hotels.filter((item) => item.name === str || item.city === str || item.country === str);
    let result = bustingHotels.reduce((acc, item) => {
      acc += `${item.name}, ${item.city}, ${item.country}  `;
      return acc;
    }, "");
    return result.split("  ").slice(0, -1);
  };


function countryCity(arr){
    const result = {};
    arr.forEach((item) => {
        if (result.hasOwnProperty(item.country)) {
            result[item.country].push(item.city);
        } else {
            result[item.country] = [item.city];
        }
      });
      return(result)
}


  function getCalendarMonth(daysInMonth, daysInWeek, dayOfWeek){
    if (dayOfWeek > daysInWeek && daysInMonth<=30){ 
        return false;
    } 

    const arrMonth = [];
    for (let i = 0; i < daysInMonth; i++) {
      arrMonth[i] = i + 1;
    }
  
    let nextMonth;
    if((daysInMonth + dayOfWeek) % daysInWeek == 0 ){
        nextMonth = 0;
    }
    else{
        nextMonth = daysInWeek - ((daysInMonth + dayOfWeek) % daysInWeek);
    }

    const arrCalendarMonth = [...arrMonth.slice(-dayOfWeek), ...arrMonth, ...arrMonth.slice(0, nextMonth)];
  
    const result = [];
    for (let i = 0; i < arrCalendarMonth.length; i += daysInWeek) {
        let item = arrCalendarMonth.slice(i,i+daysInWeek);
        result.push(item);
    }
  
    return(result);
  };


