const date = '2020-11-26';
const regular = new RegExp('([0-9]+)[-]([0-9]+)[-]([0-9]+)');
const arr_data=date.match(regular);
console.log(`${arr_data[3]}.${arr_data[2]}.${arr_data[1]}`);




const data = [
    {
        country: 'Russia',
        city: 'Saint Petersburg',
        hotel: 'Hotel Leopold',
    },
    {
        country: 'Spain',
        city: 'Santa Cruz de Tenerife',
        hotel: 'Apartment Sunshine',
    },
    {
        country: 'Slowakia',
        city: 'Vysokie Tatry',
        hotel: 'Villa Kunerad',
    },
    {
        country: 'Germany',
        city: 'Berlin',
        hotel: 'Hostel Friendship',
    },
    {
        country: 'Indonesia',
        city: 'Bali',
        hotel: 'Ubud Bali Resort&SPA',
    },
    {
        country: 'Netherlands',
        city: 'Rotterdam',
        hotel: 'King Kong Hostel',
    },
    {
        country: 'Marocco',
        city: 'Ourika',
        hotel: 'Rokoko Hotel',
    },
    {
        country: 'Germany',
        city: 'Berlin',
        hotel: 'Hotel Rehberge Berlin Mitte',
    },
];
const mas=[];

function searchObjects( str){
    for (let i=0;i<data.length;i++){
        if(data[i].country==str || data[i].city==str || data[i].hotel==str ){
            const data_new  = data[i].country +','+data[i].city +','+data[i].hotel;
            mas.push(data_new);

        }
    }
    console.log(mas);
}

