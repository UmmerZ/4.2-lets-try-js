
//first argument in fetch shold be the url of the source 
//if this is url of an api we refer to this as endpoint
fetch( 'http://api.open-notify.org/astros.json')
// our funciton return a js object converted dfrom our
//json string that the api provides.
.then( response => response.json())
//lets check to see if objrct is here

.then( data =>{

const people = data.people;
console.log( people );

const peopleUL = document.createElement( 'UL' )
//lets loop through the people
for ( const person of people )
{// set oset up our element
    const personLI = document.createElement( 'li' );
    personLI.textContent = `On the ${person.craft} craft,
    astronaut "${person.name}" is present!`;
    peopleUL.appendChild( personLI);
    document.body.appendChild( peopleUL);

}
} );