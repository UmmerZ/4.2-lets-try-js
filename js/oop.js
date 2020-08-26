const myObj = {
 name :  "joe",
  age : 35,
hobbies: ["movies", "Pottery"]

};
console.log(`my name is ${myObj.name} I am ${myObj.age} years old!`);
console.log(myObj);

const myObjString =JSON.stringify(myObj);
console.log( myObjString);



const secondPersonString = `{
    "name" : "Sarah",
    "age" : 29,
    "hobbies" : ["Deep Sea Fishing", "Cycling"]
}`;
console.log (secondPersonString );
const secondPersonObj = JSON.parse( secondPersonString );

console.log( secondPersonObj);




//classes (bluepreints for a "type" of Object)
//typically PascalCased.

class Person {
    //contructor is a reserved method name.
    //The constructor mathod runs whena  new object is being
    //created folleoing this blueprint/class.

    constructor( name = "", age = 0, hobbies = [])
    {
        this.name = name;
        this.age = Number(age);
        this.hobbies = hobbies;
    }
    //we can create our own methods!
    //These work lile function,but are INSIDE objects.
 sayHello() {
     const helloP = document.createElement( "p");
     helloP.textContent = `hello there ${this.name}, Nice to meet you!`;
     document.body.appendChild( helloP );
 }
}
const jane = new Person (
    "Jane",
      34,
    ["Sewing", "Cross-Country Skiing"]
);

//this method will make age go up by one 
birthday()
{  // add age to the person
    this.age++;// will increase age by 1
    const boyH2= document.createElement('h2')
    bDayH2.textContent = "Birthday Detected";
    document.body.appendChild( bDayH2);
    const bDayP = document.createElement('p');
    bDayP.textContent =`${this.name} is ${this.age} years old`;
  document.body.appendChild( bDayP );
}


console.log( jane );
console.log( jane instanceof Person)


jane.sayHello();

const dimitri = new Person (
    "Dmitri",
    29,
    ["biking", "mountain climbing"]
);
dimitri.sayHello();
jane.birt