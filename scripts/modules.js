
function flipDate(date){
    const arr_data = date.split('-');
    return (`${arr_data[2]}.${arr_data[1]}.${arr_data[0]}`);
}





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


function searchObjects( str){
    const result=[];
    for (let i=0;i<data.length;i++){
        if(data[i].country==str || data[i].city==str || data[i].hotel==str ){
            const data_new  = data[i].country +','+data[i].city +','+data[i].hotel;
            result.push(data_new);
        }
    }
    return(result); 
}
