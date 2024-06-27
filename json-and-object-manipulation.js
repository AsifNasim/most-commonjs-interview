/* Q1 : Convert a JS value to a JSON string */

const data_one = { name: "asif", age: 27, city: "Pune"};

const jsonString = JSON.stringify(data_one);
console.log("JSON string : ", jsonString);
// output : {"name":"asif","age":27,"city":"Pune"}

/* Note -- JSON. stringify takes three parameter in which two of 
them are optional

JSON.stringify(value, replacer, space)

value - on which you need to apply the stringify method
replacer - A function that alters the behaviour of the stringification
           process.
space - A string or number object that is used to insert white space
        into the output json string for the readability purpose
*/ 

const betterJsonOutput = JSON.stringify(data_one, null, 2);
console.log("Better Json Output : ", betterJsonOutput);

// output: {
//   "name": "asif",
//   "age": 27,
//   "city": "Pune"
// }


const data_two = { name:"asif", age:27, password: 1234567};
const data_three = [{ name:"asif", age:27, password: 1234567},
    { name:"faisal", age:26, password: 123456}
];

// replacer function

const replacer = function(key, value){
    if(key == 'password'){
        return undefined; // it exclude the password property
    }

    return value;
}

const replacerOutput = JSON.stringify(data_two,replacer);

console.log("Replacer Output :", replacerOutput);
// output : {"name":"asif","age":27}


const replacerOutputThree = JSON.stringify(data_three,replacer, 2);

console.log("Replacer Output :", replacerOutputThree);
// output : [
//   {
//     "name": "asif",
//     "age": 27
//   },
//   {
//     "name": "faisal",
//     "age": 26
//   }
// ]

/* The replacer parameter in JSON.stringify can be a function 
that allows you to customise a serialization process. For example you 
can either exclude certain properties or transform the values before 
they are serialized. */

/* Handling Circular Reference */
const data_four = {name : "Fahad" };
data_four.self = data_four;

const circularResponse = JSON.stringify(data_four, (key, value) => {
    if(value === data_four){
        return "[Circular]"
    }

    return value;
})

console.log("Circular Response : ", circularResponse)

