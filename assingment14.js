//Q.1 :  Write a JavaScript program to list the properties of a JavaScript object.


var obj = { Name: "Anam" };
console.log(obj.Name)

obj.Age = 27;
console.log(obj.Age)

obj['Country'] = "India"
console.log(obj.Country)


//Q.2 :  Write a JavaScript program to delete the rollno property from the following object. 
//       Also print the object before or after deleting the property.


var dlt = {
    Name: "Anam Fatima",
    Class: "javascript",
    rollno : 61,
    age: 25
};
console.log(dlt);
delete dlt.rollno;
console.log(dlt);


//Q.3 :  Write a JavaScript program to get the length of a JavaScript object.


Object.objsize = function(Myobj) {
    var osize = 0, std;
    for (std in Myobj) {
        if (Myobj.hasOwnProperty(std)) osize++;
    }
    return osize;
};

var lnght = {
    Name: "Anam Fatima",
    Class: "javascript",
    rollno : 61,
    age: 25
};
var objsize = Object.objsize(lnght);
console.log('Size of the current object : '+objsize);


//Q.4 :  Write a JavaScript program to display the reading status 
      // (i.e. display book name, author name and reading status) of the following books. 


var books = [
    {
    Name: 'HTML and CSS',
    Author: 'jon Duckett',
    ReadingStatus: Read
},
   {
    Name: 'Javascript and JQUERY',
    Author: 'jon Duckett',
    ReadingStatus: Read
   },
{
    Name: 'Learning Bootstrap 4',
    Author: 'jon Duckett',
    ReadingStatus: waiting
}]

const displayBook = (arr) 


   //Q.5 :  Write a JavaScript program to get the volume of a Cylinder with four decimal places using object classes.







   //Q.6 :  Write a Bubble Sort algorithm in JavaScript.
   //Note : Bubble sort is a simple sorting algorithm that works by repeatedly stepping through the list to be sorted,
   //       Sample Data: [6,4,0, 3,-2,1]















