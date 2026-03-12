//CREATING OBJECTS USING OBJECT LITERAL
var person = {
    name: johnMac,
    age: 30,
    isMarried: true,
    address: {
        street: 'vijay nagar',
        flatNO: 201
    }
};
console.log(person);


//CREATE OBJECT USING THE 'new'KEYWORD
var person2 = new Object();

person2.name = 'krishnkant'; //to add properties to this object

person2.age = 32;

person2.isMarried = true;

person2.address = {};

person2.address.street = "nagar road";

person2['address']['flatNO'] = 33;

console.log(person2)

//ACCESSING OBJECT PROPERTIES

var person = {

    name: 'John Mac',



    age: 30,

    isMarried: true,

    child: ['cheeku'],

    getinfo: function () {
    },

    address: {

        street: 'Vinay nagar',

        flatNO: 20
    }
};