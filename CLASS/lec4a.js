//FOR LOOP
var count;

document.write("Starting Loop" + "<br />");

for(count = 0; count < 10; count++) {

}

document.write("Current Count: " + count);

I

document.write("<br />");

document.write("Loop stopped!");


//FOR KEY IN OJECTS


for( key in object ){
    //code block to be executed 
}
const person = {
    firstname:"Ajay",
    lastname:"Singh",
    age:25
};
for( let x in person )
{
    console.log("person details:+x+;person[x]")
}
//WHILE LOOP
var count = 0;

document.write("Starting Loop ");

while (count < 10) {

}

document.write("Current Count: " + count + "<br />");

count++;

document.write("Loop stopped!");