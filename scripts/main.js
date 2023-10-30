const studentsData = [
    {
      firstName: 'Василий',
      lastName: 'Петров',
      admissionYear: 2019,
      courseName: 'Java',
    },
    {
      firstName: 'Иван',
      lastName: 'Иванов',
      admissionYear: 2018,
      courseName: 'JavaScript',
    },
    {
      firstName: 'Александр',
      lastName: 'Федоров',
      admissionYear: 2017,
      courseName: 'Python',
    },
    {
      firstName: 'Николай',
      lastName: 'Петров',
      admissionYear: 2019,
      courseName: 'Android',
    }
  ];

class User{
    constructor(firstName, lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    }

    get fullName(){
        return `${this.firstName} ${this.lastName}`;
    }
}

class Student extends User{
    constructor(admissionYearr, courseName, ...prop){
        super(...prop);
        this.admissionYearr = admissionYearr;
        this.courseName = courseName;
    }

    get course(){
        return 2023 - this.admissionYearr;
    }
    
}

class Students{
    constructor(student){
        this.student = student;
    }
    getInfo(){
        const arr = [];
        this.student.sort((a, b) =>{
            if (a.name > b.name) {
              return 1;
            }
            if (a.name < b.name) {
              return -1;
            }
            return 0;
          });
        this.student.map((item,index)=>{
            const course = 2023 - item.admissionYear;
        arr[index] = `${item.firstName} ${item.lastName} - ${item.courseName}, ${course} курс`;
        });
        return arr;
    };
        
}
const students = new Students(studentsData);
console.log(students.getInfo());
