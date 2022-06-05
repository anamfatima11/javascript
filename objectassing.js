
//1st Assingment


let user = {

}

user.name = 'john',


    user.surname = 'smith',


    user.name = 'pete',

    alert(user.name);
    delete user.name;


//2nd Assingment


let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
}

let sum = 0;
for (let property in salaries) {
    sum += salaries[property];
}

alert(sum);


//3rd Assingment

let menu = {
    width: 200,
    height: 300,
    title: "My menu"
};

let multiplyNumeric = (object) => {
    for (let key in object) {
        if (typeof object[key] === 'number') {
            object[key] *= 2;
        }
    }
}
multiplyNumeric(menu);

console.log(menu);








