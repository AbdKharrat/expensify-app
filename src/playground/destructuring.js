// const person = {
//     name: 'Abd',
//     age: 23,
//     location: {
//         city: 'Riyadh',
//         temp: '45 degree'
//     }
// }

// const {name ="Epix", age} = person;

// const {city,temp: temperature} = person.location;
// console.log( `${name} is ${age} years old` )
// console.log(`it is ${temperature} in ${city}`)



// const  book= {
//     title: "Ego is enemy",
//     author: "Ryan Holiday",
//     publisher: {
//         name: "Penguin",
//         year: 1990
//     }
// }

// const {name:publisherName = 'self-published'} = book.publisher;

// console.log(publisherName);

// const address= ['Shams Al Nahar', 'Sulimanya', 'Riyadh', 'KSA'];
// const [street = 'Khurais Road', hood, city ,country] = address;
// const [street2 = 'Khurais Road', ,  ,country2] = [...address];
// console.log(` we are in ${street2} in ${country2}`);
// console.log([...address]);

const item= ['coffe (hot)' , ' $2.00' , ' $3.00' , ' $4.00'];

const [ itemName ,smallPrice , mediumPrice, largePrice] = item

console.log(`A medium ${itemName} costs ${mediumPrice}`)


