// ***** JS PRACTISE HOMEWORK *****


// TASK 1:

// Create array with data, and loop through it, so in the end you console log this:

// "At position 0, subposition 0, value is 1"
// "At position 0, subposition 1, value is 2"
// "At position 0, subposition 2, value is 3"
// "At position 1, subposition 0, value is 4"
// "At position 1, subposition 1, value is 5"
// "At position 1, subposition 2, value is 6"
// "At position 2, subposition 0, value is 7"
// "At position 2, subposition 1, value is 8"
// "At position 2, subposition 2, value is 9"

//SOLUTION

arr = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

for(var i = 0; i < arr.length; i++) {
    for(var j = 0; j < arr[i].length; j++) {
        console.log("At position " + i + ", subposition " + j + ", value is " + arr[i][j]);
    }
}

// TASK 2: 

// Create a method that should console log name and age from any object. Then create array with multiple objects, each object should contain different names and ages. Call a method on each of them.

//SOLUTION

var object = {
    printNameAge: function(data) {
        console.log("The name is " + data.name + ", and age is " + data.age + ".")
    }
};

var persons = [
    {
        name: 'John',
        age: 20
    },
    {
        name: 'Mike',
        age: 19
    },
    {
        name: 'Ann',
        age: 18
    }
];

for(var i = 0; i < persons.length; i++) {
    object.printNameAge(persons[i]);
}


