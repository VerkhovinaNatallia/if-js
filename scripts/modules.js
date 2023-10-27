const obj1 = {
  a: 'a',
  b: {
    a: 'a',
    b: 'b',
    c: {
      a: 1,
    },
  },
};
const obj2 = {
  b: {
    c: {
      a: 1,
    },
    b: 'b',
    a: 'a',
  },
  a: 'a',
};
const obj3 = {
  a: {
    c: {
      a: 'a',
    },
    b: 'b',
    a: 'a',
  },
  b: 'b',
};

const deepEqual = (object1, object2) => {
     const obj_key1 = Object.getOwnPropertyNames(object1);
     const obj_key2 = Object.getOwnPropertyNames(object2);
   
     if (obj_key1.length !== obj_key2.length) {
       return false;
     }
   
     for (let i = 0; i < obj_key1.length; i++) {
       const key_value = obj_key1[i];
       const areObjects = typeof(object1[key_value]) === 'object' && typeof(object2[key_value]) === 'object';
       if ((areObjects!==true && object1[key_value] !== object2[key_value])) {
         return false;
       }
     }
   
     return true;
   
   };




   
  function getCalendarMonth(daysInMonth, daysInWeek, dayOfWeek){
    if (dayOfWeek > daysInWeek || daysInMonth>=30){ 
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

