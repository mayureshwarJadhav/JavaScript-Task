let person = {
    name: "Jay",
    age: 25,
    hobbies: ["reading", "gaming", "coding"]
  };

  // array of objects representing multiple people
let people = [
    { name: "Jay", age: 25, hobbies: ["reading", "gaming", "coding"] },
    { name: "Lokesh", age: 30, hobbies: ["swimming", "painting"] },
    { name: "Shri", age: 34, hobbies: ["cycling", "traveling", "gaming" ] },
    { name: "Akash", age: 38, hobbies: ["dancing", "singing", "hiking" ] }
  ];

// function to filter people by age and return their names
function filterByAge(people, age) {
    return people
    .filter(person => person.age > age)
    .map(person => person.name);
  }

  console.log(filterByAge(people, 28));
